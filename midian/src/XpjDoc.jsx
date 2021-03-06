import React from 'react';
import ReactDOM from "react-dom";
var pako = require('pako');
import {Xpj, Program_Type, makeMTXpj} from "./Xpj.js";
import {JsonView} from "./JsonView.jsx";
import {gamma_correct} from "../../xmlView/src/SongUtils.js";
import {WaveThumb} from "./WaveThumb.jsx";
import $ from 'jquery';
import {Icon2PushButton} from './GUIstuff.jsx';

class PlayerControl extends React.Component {
  render() {
	return (
	<Icon2PushButton className='plsybut' title='Play' pushed={this.props.pushed}
		onPush={(e)=>{this.props.command('play', e, this)}}
		srcU='img/glyphicons-halflings-72-play.png'
		srcD='img/glyphicons-halflings-74-stop.png'/>)
  }
};

class XplTrackCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }
  componentDidMount() {

  	let props = this.props;

    let clip = props.clip;
    let trans = props.transform;
    let scale = trans.scale;
    let noteH = trans.noteHeight;
    let maxN = clip.maxN;
    let w = props.width;
    let h = props.height;
    let yOffset = trans.yOffset;
    let nameTab = trans.xpj.nameToTrack;
    let color = nameTab[clip.key].colour;

    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    ctx.save();
    ctx.beginPath();
    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = '#' + gamma_correct(color.toString(16));

    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = '#000000';

    for (let i = 0; i < clip.events.length; ++i) {
    	let n = clip.events[i];
    	if (!n.note) continue;
    	let tS = n.time;
    	let tE = n.note.length;
    	let x = tS * scale;
    	let w = n.note.length * scale;
    	if (w >= 2) w--;
    	// if (w < 1) w = 1;
    	let y = (maxN - n.note.note) * noteH + yOffset;
    	ctx.fillRect(x, y, w, noteH);
    }
    ctx.restore();
  }
  render() {
    return <canvas width={this.props.width} height={this.props.height} ref={this.canvasRef} />;
  }
}

class XpjClipView extends React.Component {

  constructor(props) {
	super(props);
	this.control = this.control.bind(this);
	this.state = {pushed: false};
  }
 
  render() {
	let props = this.props;
	let clip = props.clip;
	let trans = props.transform;
	let scale = trans.scale;
	let noteH = trans.noteHeight;
	let w = trans.width;
	let h = trans.height;
	var fullPath = "";

	if (clip.type === Program_Type.AUDIO) {
		let name = '';
		if (clip.events && clip.events.length > 0 && clip.events[0] && clip.events[0].audio) {
			name = clip.events[0].audio.name;
			let path = clip.events[0].audio.sample.path;
			fullPath = props.prepath + "/" + path;
		}
		return <div className='xpjaud'><WaveThumb open={true} filename={fullPath} ref={el => this.wavethumb = el}/>
		<PlayerControl pushed={this.state.pushed} command={(e)=>{this.control('play', e)}}/>
		</div>;
	}
	return <XplTrackCanvas clip={clip} transform={trans} width={w} height={h} clipN={this.props.clipN}/>;
  }

  control(cmd) {
  	this.wavethumb.command(cmd, undefined, this);
  }

  setPlayState(toState) {
  	this.setState({pushed: toState});
  }

}


class XpjView extends React.Component {
  constructor(props) {
	super(props);
	this.maxWidth = 128;
	this.maxHeight = 64;
	this.maxScale = 1/30;
	this.maxNoteHeight = 4;
	this.ingest();
  }

  ingest() {
  	this.xpj = this.props.xpj;
	this.tracks = this.xpj.tracks;
	this.sequence = this.xpj.sequence;
	this.clipMaps = this.xpj.clips;
	let fname = this.props.fname;
	this.prepath = fname.slice(0, fname.length - 4) + "_[ProjectData]";
  }

// return a transform object adjusted to map the given clip into the target rectangle
  modXform(clip) {
	let trans = {width: this.maxWidth, height: this.maxHeight, tracks: this.tracks, xpj: this.xpj};
	let cw = clip.maxT;
	let ch = (clip.maxN - clip.minN);
	var scale;
	if (cw !== 0) {
		scale = this.maxWidth / cw;
		if (scale > this.maxScale) scale = this.maxScale;
	} else {
		scale = this.maxScale;
	}
	
	var noteH;
	trans.yOffset = 0;
	if (ch !== 0) {
		noteH = this.maxHeight / ch;
		if (noteH > this.maxNoteHeight) {
			noteH = this.maxNoteHeight;
			trans.yOffset = (this.maxHeight - (ch * noteH)) / 2;
		}
	} else {
		noteH = this.maxNoteHeight
	}

	trans.scale = scale;
	trans.noteHeight = noteH;

	return trans;
  }

  createTable() {
    let xpj = this.xpj;
    let nameTab = this.xpj.nameToTrack;

	let table = [];
	let headers = [];

	for (let c = xpj.minCol; c < xpj.maxCol; ++c) {
		let hname = this.tracks[c].name;
		let colorStyle = this.colorStyleFor(c);
		headers.push(<th className='xpjthdr' style={colorStyle}>{hname}</th>);
	}
	table.push(<tr>{headers}</tr>);
	for (let r = xpj.minRow; r < xpj.maxRow; ++r) {
		let rowA = xpj.matrix[r];
		let children = [];
		for (let c = xpj.minCol; c < xpj.maxCol; ++c) {
			let clip = rowA ? rowA[c] : undefined;
			let colorStyle = this.colorStyleFor(c);

			if (!clip) {
				children.push(<td className='xpjmt'> </td>);
			} else {
				let clipname = clip.clip.value.name;
				let trans = this.modXform(clip);
				children.push(<td className='xpjtd' style={colorStyle}><table><tbody>
					<tr><th className='xpjth'>{clipname}</th></tr>
					<tr><td><XpjClipView clip={clip} transform={trans} prepath={this.prepath} /></td></tr></tbody></table>
				</td>);
			}
		}
		table.push(<tr>{children}</tr>);
	}
	return table;
  }

  colorStyleFor(c) {
	let color = this.tracks[c].colour;
	let colorCode ='#' + gamma_correct(color.toString(16));
	let colorStyle = {backgroundColor: colorCode};
	return colorStyle;
  }

  render() {
		this.ingest();
  		let xpj = this.xpj;
  		if (!xpj) return null;

		return <React.Fragment>
		<table><tbody>
			{this.createTable()}
		</tbody></table>
		<JsonView label='xpj Json' json = {this.props.xpj} fname={this.props.fname}/>
		</React.Fragment>


  }
}

class XpjDoc {
   constructor(context) {
	this.context = context;
	this.jqElem = context.jqElem;
	this.fname = context.fname;
  }

	openOnBuffer(data) {
		var xpjABuffer;
		let me = this;
		var fileReader = new FileReader();
		fileReader.onload = function(event) {
			xpjABuffer = event.target.result;
			var nextChunk = new Uint8Array(xpjABuffer);	
			var lastLen = 0;
			var chunkList = [];
			while (nextChunk.length > 12) {
				var inflator = new pako.Inflate();
				inflator.push(nextChunk, true);
				if (inflator.err) {
 					console.log(inflator.msg);
 					break;
				}
				chunkList.push(inflator.result);
				let strm = inflator.strm;
				let lastLen = strm.total_in;
				nextChunk = nextChunk.subarray(lastLen);
			}
			var decoder = new TextDecoder('utf8');
			var maxL = 0;
			var maxS;

			let stringA = [];
			for (let i = 0; i < chunkList.length; ++i) {
				let ch = chunkList[i];
				let cl = ch.length;

				var decStr = decoder.decode(ch);
				stringA.push(decStr);

				if (cl > maxL) {
					maxL = cl;
					maxS = decStr;
				}

				// console.log(decStr);
			}
			let xpjJson = JSON.parse(maxS);
			me.xpj = new Xpj(xpjJson);
			//me.xpjText = JSON.stringify(me.xpj, undefined, 2);
			//me.context.xpjText = maxS;
			me.context.xpj = me.xpj;
			me.context.fname = me.fname;

			me.render();

		};
		fileReader.readAsArrayBuffer(data);
	}

	render() {
		this.xpjDoc = React.createElement(XpjView, this.context);
		ReactDOM.render(this.xpjDoc, this.jqElem);
	}

	makeEmpty() {
		this.xpj = makeMTXpj();
		this.context.xpj = this.xpj;
		this.context.fname = "Untitled.xpj";
	}
}


function openXpjDoc(where, fname) {
	let context = {};
	context.jqElem =  where;
	context.fname = fname;
	let xpjDoc = new XpjDoc(context);
	xpjDoc.makeEmpty();
	xpjDoc.render();
	return xpjDoc;
}

export {openXpjDoc};
