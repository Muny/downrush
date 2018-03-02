/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/viewWAV.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./src/UndoStack.js":
/*!**************************!*\
  !*** ./src/UndoStack.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UndoStack; });
// A generalized 'Undo stack' which can keep N levels of revertable state.
class UndoStack {
	constructor(limit) {
		this.stack = [];
		this.index = -1;
		this.limit = limit;
	}
	
	atTop() {
		return this.index === -1;
	}

	canUndo() {
		if(this.stack.length === 0) return false;
		return this.index === -1 || this.index > 0;
	}

	canRedo() {
		if(this.stack.length === 0 || this.index === -1) return false;
		return this.index < this.stack.length - 1;
	}

	push(item) {
		if (this.index >= 0) {
			while (this.index < this.stack.length) this.stack.pop();
			this.index = -1;
		}
		if (this.limit && this.stack.length > this.limit) {
			this.stack.shift();
		}
		this.stack.push(item);
	}

	undo() {
		if (this.stack.length === 0) return undefined;
		if (this.index === -1) { // start one behind the redo buffer
			this.index = this.stack.length - 1;
		}
		if (this.index > 0) this.index--;
		let v = this.stack[this.index];
		return v;
	}

	redo() {
		if (this.stack.length === 0 || this.index === -1) return undefined;
		let nextX = this.index + 1;
		if (nextX >= this.stack.length) return undefined;
		this.index = nextX;
		return this.stack[this.index];
	}
};



/***/ }),

/***/ "./src/Wave.js":
/*!*********************!*\
  !*** ./src/Wave.js ***!
  \*********************/
/*! exports provided: default, Wave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Wave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wave", function() { return Wave; });
/* harmony import */ var _js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/jquery-3.2.1.min.js */ "./src/js/jquery-3.2.1.min.js");
/* harmony import */ var _js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_wavesurfer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/wavesurfer.js */ "./src/js/wavesurfer.js");
/* harmony import */ var _js_wavesurfer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_wavesurfer_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_plugins_wavesurfer_timeline_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/plugins/wavesurfer.timeline.js */ "./src/js/plugins/wavesurfer.timeline.js");
/* harmony import */ var _js_plugins_wavesurfer_timeline_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_plugins_wavesurfer_timeline_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_plugins_wavesurfer_regions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/plugins/wavesurfer.regions.js */ "./src/js/plugins/wavesurfer.regions.js");
/* harmony import */ var _js_plugins_wavesurfer_regions_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_plugins_wavesurfer_regions_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_plugins_wavesurfer_minimap_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/plugins/wavesurfer.minimap.js */ "./src/js/plugins/wavesurfer.minimap.js");
/* harmony import */ var _js_plugins_wavesurfer_minimap_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_plugins_wavesurfer_minimap_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_plugins_wavesurfer_tiledrenderer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/plugins/wavesurfer.tiledrenderer.js */ "./src/js/plugins/wavesurfer.tiledrenderer.js");
/* harmony import */ var _js_plugins_wavesurfer_tiledrenderer_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_plugins_wavesurfer_tiledrenderer_js__WEBPACK_IMPORTED_MODULE_5__);







function secondsToSampleNum(t, buffer) {
	let sn = t * buffer.sampleRate;
	if (sn < 0) return 0;
	if (sn > buffer.getChannelData(0).length) return buffer.getChannelData(0).length
	return Math.round(sn);
}

class Wave {
	Wave(rootDivId) {
		this.rootDivId = rootDivId;
	}

	redrawWave()
	{
		this.surfer.drawBuffer();
		this.surfer.minimap.render();
	}

	openOnBuffer(decoded) {
//	var tiledRenderer = new TiledRenderer.default();
	var plugs =  [
		_js_plugins_wavesurfer_timeline_js__WEBPACK_IMPORTED_MODULE_2___default.a.create({
			container: '#waveform-timeline'
			}),
		_js_plugins_wavesurfer_regions_js__WEBPACK_IMPORTED_MODULE_3___default.a.create({
			dragSelection: false,
			}),
			
		_js_plugins_wavesurfer_minimap_js__WEBPACK_IMPORTED_MODULE_4___default.a.create({
			container: '#minimap',
			height: 30,
			barHeight: 1.4,
			interact:	true,
			// showOverview: true,
			})
		];

	_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()('#waveform').empty();
	_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()('#waveform-timeline').empty();
	_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()('#minimap').empty();

	this.surfer = _js_wavesurfer_js__WEBPACK_IMPORTED_MODULE_1___default.a.create({
		container:		'#waveform',
		waveColor:		'violet',
		progressColor:	'purple',
		splitChannels:	true,
		interact:		false,
		fillParent:		false,
		scrollParent:	true,
		plugins:		plugs,
		partialRender:  false,
		renderer:		 _js_plugins_wavesurfer_tiledrenderer_js__WEBPACK_IMPORTED_MODULE_5__["TiledRenderer"],
		// barWidth:		1,
	});
// Patch in an override to the drawBuffer function.
	this.surfer.drawBuffer = _js_plugins_wavesurfer_tiledrenderer_js__WEBPACK_IMPORTED_MODULE_5__["tiledDrawBuffer"];

	this.surfer.loadBlob(decoded);

// Expose some wavesurfer objects:
	this.backend = this.surfer.backend;
	this.audioContext = this.surfer.backend.ac;

	let that = this;
	this.surfer.on('ready', function () {
		let buf = that.surfer.backend.buffer;
		let dat = buf.getChannelData(0);
		
		let dur = that.surfer.getDuration();
		let w = that.surfer.drawer.getWidth();
		if (dur !== 0) {
			let pps = w / dur * 0.9;
			that.surfer.zoom(pps);
		}
		that.disableWaveTracker = that.setupWaveTracker();

		// that.startGuiCheck();
	})
}	

  getSelection() {
	let buffer = this.surfer.backend.buffer;
	let srcLen = buffer.getChannelData(0).length;
	let regionMap = this.surfer.regions.list;
	
	let startT = 0;
	let regional = false;
	let dur =  this.surfer.getDuration()
	let endT = dur;
	let progS = this.surfer.drawer.progress() * endT;
	let region = regionMap[function() { for (var k in regionMap) return k }()];
	let cursorTime = this.surfer.getCurrentTime();

	if (region && region.start < region.end) {
		startT = region.start;
		endT = region.end;
		regional = true;
	}
	let cursorPos = secondsToSampleNum(cursorTime, buffer);
	let startS = secondsToSampleNum(startT, buffer);
	let endS = secondsToSampleNum(endT, buffer);

	return {
		length: srcLen,
		regional: regional,
		start:	startT,
		end:	endT,
		first:  startS,
		last:	endS,
		progress: progS,
		region: region,
		cursorTime: cursorTime,
		cursorPos: 	cursorPos,
		duration:	dur,
	};
}

  setupWaveTracker() {
	var region;
	var dragActive;
	var t0;
	var t1;
	var duration;
	var scroll = this.surfer.params.scrollParent;
	var scrollSpeed = this.surfer.params.scrollSpeed || 1;
	var scrollThreshold = this.surfer.params.scrollThreshold || 10;
	var maxScroll = void 0;
	var scrollDirection = void 0;
	var wrapperRect = void 0;
	var wrapper = this.surfer.drawer.wrapper;
	var repeater;
	
	var that = this;

	var rangeUpdater = function(e) {
		t1 = that.surfer.drawer.handleEvent(e);
		let tS = t0;
		let tE = t1;
		if (t1 < t0) {
			tS = t1;
			tE = t0;
			that.surfer.seekTo(t1);
		}
		region.update({
			start:	tS * duration,
			end:	tE * duration
		});
	}

	var edgeScroll = function edgeScroll(e) {
		if (!region || !scrollDirection) return;

	// Update scroll position
		var scrollLeft = wrapper.scrollLeft + scrollSpeed * scrollDirection;
		var nextLeft =  Math.min(maxScroll, Math.max(0, scrollLeft));
		wrapper.scrollLeft = scrollLeft = Math.min(maxScroll, Math.max(0, scrollLeft));
		rangeUpdater(e);
		// Check that there is more to scroll and repeat
		if(scrollLeft < maxScroll && scrollLeft > 0) {
			window.requestAnimationFrame(function () {
			edgeScroll(e);
			});
		}
	};

	var eventMove = function (e) {
		if (!dragActive) return;
		rangeUpdater(e);
		// If scrolling is enabled
		if (scroll && that.surfer.drawer.container.clientWidth < wrapper.scrollWidth) {
			// Check threshold based on mouse
			var x = e.clientX - wrapperRect.left;
			if (x <= scrollThreshold) {
				scrollDirection = -1;
			} else if (x >= wrapperRect.right - scrollThreshold) {
				scrollDirection = 1;
			} else {
				scrollDirection = null;
			}
			scrollDirection && edgeScroll(e);
		}
	}

	var eventUp = function (e) {
		dragActive = false;
		if (region) {
			region.fireEvent('update-end', e);
			that.surfer.fireEvent('region-update-end', region, e);
		}
		region = null;
		let win = _js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()(window); // disconnect listeners.
		win.off('mousemove', eventMove);
		win.off('touchmove', eventMove);
		win.off('mouseup', eventUp);
		win.off('touchend', eventUp);
	}


	var eventDown = function (e) {
		duration = that.surfer.getDuration();
		// Filter out events intended for the scroll bar
		let hasScroll = that.surfer.params.scrollParent;
		let r = e.target.getBoundingClientRect();

		if (hasScroll && e.clientY > (r.bottom - 16)) return; // *** JFF Hack magic number.

		maxScroll = wrapper.scrollWidth - wrapper.clientWidth;
		wrapperRect = wrapper.getBoundingClientRect();

		t0 = that.surfer.drawer.handleEvent(e);

		let xD = e.clientX;

		if (hasScroll) {
			xD += wrapper.scrollLeft;
		}

		t1 = t0;
		if (that.surfer.isPlaying()) {
			dragActive = false;
			let progress = that.surfer.drawer.handleEvent(e);
			that.surfer.seekTo(progress);
		} else {
			dragActive = true;
			that.surfer.regions.clear();
			that.surfer.seekTo(t0);
			let pos = {
				start:	t0 * duration,
				end:	t1 * duration,
				drag:	false,
				resize: false,
			};
			region = that.surfer.regions.add(pos);
		}
		let win = _js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()(window);
		win.on('mousemove', eventMove); // dynamic listeners
		win.on('touchmove', eventMove);
		win.on('mouseup', eventUp);
		win.on('touchend', eventUp);
		//console.log('down');
	}

	let waveElem = _js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()('#waveform');

	waveElem.on('mousedown', eventDown);
	waveElem.on('touchstart', eventDown);

	return function() {
		waveElem.off('mousedown', eventDown);
		waveElem.off('touchstart', eventDown);
	 };
}

  changeBuffer(buffer) {
	if (!buffer) return;

	let playState = this.surfer.isPlaying();
	let songPos;
	if (playState) {
		console.log('pausing');
		this.surfer.pause();
		songPos = this.surfer.getCurrentTime();
	}

	this.backend.load(buffer);
	this.redrawWave();
	if (playState) {
		if (songPos < 0) songPos = 0;
		let dur = this.surfer.getDuration();
		if (songPos < dur) {
			this.surfer.play(songPos);
			console.log('playing');
		}
	}
}


} // End class




/***/ }),

/***/ "./src/audioBufferToWav.js":
/*!*********************************!*\
  !*** ./src/audioBufferToWav.js ***!
  \*********************************/
/*! exports provided: audioBufferToWav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "audioBufferToWav", function() { return audioBufferToWav; });
// Snarfed from: https://github.com/Jam3/audiobuffer-to-wav/blob/master/index.js
function audioBufferToWav (buffer, opt) {
  opt = opt || {}

  let {numberOfChannels, sampleRate} = buffer;
  var format = opt.float32 ? 3 : 1
  var bitDepth = format === 3 ? 32 : 16

  var result
  if (numberOfChannels === 2) {
    result = interleave(buffer.getChannelData(0), buffer.getChannelData(1))
  } else {
    result = buffer.getChannelData(0)
  }

  return encodeWAV(result, format, sampleRate, numberOfChannels, bitDepth)
}

function encodeWAV (samples, format, sampleRate, numChannels, bitDepth) {
  var bytesPerSample = bitDepth / 8
  var blockAlign = numChannels * bytesPerSample

  var buffer = new ArrayBuffer(44 + samples.length * bytesPerSample)
  var view = new DataView(buffer)

  /* RIFF identifier */
  writeString(view, 0, 'RIFF')
  /* RIFF chunk length */
  view.setUint32(4, 36 + samples.length * bytesPerSample, true)
  /* RIFF type */
  writeString(view, 8, 'WAVE')
  /* format chunk identifier */
  writeString(view, 12, 'fmt ')
  /* format chunk length */
  view.setUint32(16, 16, true)
  /* sample format (raw) */
  view.setUint16(20, format, true)
  /* channel count */
  view.setUint16(22, numChannels, true)
  /* sample rate */
  view.setUint32(24, sampleRate, true)
  /* byte rate (sample rate * block align) */
  view.setUint32(28, sampleRate * blockAlign, true)
  /* block align (channel count * bytes per sample) */
  view.setUint16(32, blockAlign, true)
  /* bits per sample */
  view.setUint16(34, bitDepth, true)
  /* data chunk identifier */
  writeString(view, 36, 'data')
  /* data chunk length */
  view.setUint32(40, samples.length * bytesPerSample, true)
  if (format === 1) { // Raw PCM
    floatTo16BitPCM(view, 44, samples)
  } else {
    writeFloat32(view, 44, samples)
  }

  return buffer
}

function interleave (inputL, inputR) {
  var length = inputL.length + inputR.length
  var result = new Float32Array(length)

  var index = 0
  var inputIndex = 0

  while (index < length) {
    result[index++] = inputL[inputIndex]
    result[index++] = inputR[inputIndex]
    inputIndex++
  }
  return result
}

function writeFloat32 (output, offset, input) {
  for (var i = 0; i < input.length; i++, offset += 4) {
    output.setFloat32(offset, input[i], true)
  }
}

function floatTo16BitPCM (output, offset, input) {
  for (var i = 0; i < input.length; i++, offset += 2) {
    var s = Math.max(-1, Math.min(1, input[i]))
    output.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true)
  }
}

function writeString (view, offset, string) {
  for (var i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i))
  }
}




/***/ }),

/***/ "./src/base64data.js":
/*!***************************!*\
  !*** ./src/base64data.js ***!
  \***************************/
/*! exports provided: base64ArrayBuffer, base64ToArrayBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base64ArrayBuffer", function() { return base64ArrayBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base64ToArrayBuffer", function() { return base64ToArrayBuffer; });
// Functions to manage base64 encoded arrayBuffer data.
// Used for external clipboard data.

function base64ArrayBuffer(arrayBuffer) {
  var base64    = ''
  var encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

  var bytes         = new Uint8Array(arrayBuffer);
  var byteLength    = bytes.byteLength;
  var byteRemainder = byteLength % 3;
  var mainLength    = byteLength - byteRemainder;

  var a, b, c, d;
  var chunk;

  // Main loop deals with bytes in chunks of 3
  for (var i = 0; i < mainLength; i = i + 3) {
    // Insert newlines to avoid super-long strings.
  	if ((i !== 0) && ((i % 72) === 0)) {
    	base64 += '\n';
    }
    // Combine the three bytes into a single integer
    chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];

    // Use bitmasks to extract 6-bit segments from the triplet
    a = (chunk & 16515072) >> 18 // 16515072 = (2^6 - 1) << 18
    b = (chunk & 258048)   >> 12 // 258048   = (2^6 - 1) << 12
    c = (chunk & 4032)     >>  6 // 4032     = (2^6 - 1) << 6
    d = chunk & 63               // 63       = 2^6 - 1

    // Convert the raw binary segments to the appropriate ASCII encoding
    base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d];
  }

  // Deal with the remaining bytes and padding
  if (byteRemainder == 1) {
    chunk = bytes[mainLength]

    a = (chunk & 252) >> 2 // 252 = (2^6 - 1) << 2

    // Set the 4 least significant bits to zero
    b = (chunk & 3)   << 4 // 3   = 2^2 - 1

    base64 += encodings[a] + encodings[b] + '=='
  } else if (byteRemainder == 2) {
    chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1]

    a = (chunk & 64512) >> 10 // 64512 = (2^6 - 1) << 10
    b = (chunk & 1008)  >>  4 // 1008  = (2^6 - 1) << 4

    // Set the 2 least significant bits to zero
    c = (chunk & 15)    <<  2 // 15    = 2^4 - 1

    base64 += encodings[a] + encodings[b] + encodings[c] + '='
  }

  return base64
}

function base64ToArrayBuffer(base64) {
    var binary_string =  window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array( len );
    for (var i = 0; i < len; i++)        {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
}



/***/ }),

/***/ "./src/js/handlebars.min.js":
/*!**********************************!*\
  !*** ./src/js/handlebars.min.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**!

 @license
 handlebars v4.0.11

Copyright (C) 2011-2017 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
!function(a,b){ true?module.exports=b():undefined}(this,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={exports:{},id:d,loaded:!1};return a[d].call(e.exports,e,e.exports,b),e.loaded=!0,e.exports}var c={};return b.m=a,b.c=c,b.p="",b(0)}([function(a,b,c){"use strict";function d(){var a=r();return a.compile=function(b,c){return k.compile(b,c,a)},a.precompile=function(b,c){return k.precompile(b,c,a)},a.AST=i["default"],a.Compiler=k.Compiler,a.JavaScriptCompiler=m["default"],a.Parser=j.parser,a.parse=j.parse,a}var e=c(1)["default"];b.__esModule=!0;var f=c(2),g=e(f),h=c(35),i=e(h),j=c(36),k=c(41),l=c(42),m=e(l),n=c(39),o=e(n),p=c(34),q=e(p),r=g["default"].create,s=d();s.create=d,q["default"](s),s.Visitor=o["default"],s["default"]=s,b["default"]=s,a.exports=b["default"]},function(a,b){"use strict";b["default"]=function(a){return a&&a.__esModule?a:{"default":a}},b.__esModule=!0},function(a,b,c){"use strict";function d(){var a=new h.HandlebarsEnvironment;return n.extend(a,h),a.SafeString=j["default"],a.Exception=l["default"],a.Utils=n,a.escapeExpression=n.escapeExpression,a.VM=p,a.template=function(b){return p.template(b,a)},a}var e=c(3)["default"],f=c(1)["default"];b.__esModule=!0;var g=c(4),h=e(g),i=c(21),j=f(i),k=c(6),l=f(k),m=c(5),n=e(m),o=c(22),p=e(o),q=c(34),r=f(q),s=d();s.create=d,r["default"](s),s["default"]=s,b["default"]=s,a.exports=b["default"]},function(a,b){"use strict";b["default"]=function(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b},b.__esModule=!0},function(a,b,c){"use strict";function d(a,b,c){this.helpers=a||{},this.partials=b||{},this.decorators=c||{},i.registerDefaultHelpers(this),j.registerDefaultDecorators(this)}var e=c(1)["default"];b.__esModule=!0,b.HandlebarsEnvironment=d;var f=c(5),g=c(6),h=e(g),i=c(10),j=c(18),k=c(20),l=e(k),m="4.0.11";b.VERSION=m;var n=7;b.COMPILER_REVISION=n;var o={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};b.REVISION_CHANGES=o;var p="[object Object]";d.prototype={constructor:d,logger:l["default"],log:l["default"].log,registerHelper:function(a,b){if(f.toString.call(a)===p){if(b)throw new h["default"]("Arg not supported with multiple helpers");f.extend(this.helpers,a)}else this.helpers[a]=b},unregisterHelper:function(a){delete this.helpers[a]},registerPartial:function(a,b){if(f.toString.call(a)===p)f.extend(this.partials,a);else{if("undefined"==typeof b)throw new h["default"]('Attempting to register a partial called "'+a+'" as undefined');this.partials[a]=b}},unregisterPartial:function(a){delete this.partials[a]},registerDecorator:function(a,b){if(f.toString.call(a)===p){if(b)throw new h["default"]("Arg not supported with multiple decorators");f.extend(this.decorators,a)}else this.decorators[a]=b},unregisterDecorator:function(a){delete this.decorators[a]}};var q=l["default"].log;b.log=q,b.createFrame=f.createFrame,b.logger=l["default"]},function(a,b){"use strict";function c(a){return k[a]}function d(a){for(var b=1;b<arguments.length;b++)for(var c in arguments[b])Object.prototype.hasOwnProperty.call(arguments[b],c)&&(a[c]=arguments[b][c]);return a}function e(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1}function f(a){if("string"!=typeof a){if(a&&a.toHTML)return a.toHTML();if(null==a)return"";if(!a)return a+"";a=""+a}return m.test(a)?a.replace(l,c):a}function g(a){return!a&&0!==a||!(!p(a)||0!==a.length)}function h(a){var b=d({},a);return b._parent=a,b}function i(a,b){return a.path=b,a}function j(a,b){return(a?a+".":"")+b}b.__esModule=!0,b.extend=d,b.indexOf=e,b.escapeExpression=f,b.isEmpty=g,b.createFrame=h,b.blockParams=i,b.appendContextPath=j;var k={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},l=/[&<>"'`=]/g,m=/[&<>"'`=]/,n=Object.prototype.toString;b.toString=n;var o=function(a){return"function"==typeof a};o(/x/)&&(b.isFunction=o=function(a){return"function"==typeof a&&"[object Function]"===n.call(a)}),b.isFunction=o;var p=Array.isArray||function(a){return!(!a||"object"!=typeof a)&&"[object Array]"===n.call(a)};b.isArray=p},function(a,b,c){"use strict";function d(a,b){var c=b&&b.loc,g=void 0,h=void 0;c&&(g=c.start.line,h=c.start.column,a+=" - "+g+":"+h);for(var i=Error.prototype.constructor.call(this,a),j=0;j<f.length;j++)this[f[j]]=i[f[j]];Error.captureStackTrace&&Error.captureStackTrace(this,d);try{c&&(this.lineNumber=g,e?Object.defineProperty(this,"column",{value:h,enumerable:!0}):this.column=h)}catch(k){}}var e=c(7)["default"];b.__esModule=!0;var f=["description","fileName","lineNumber","message","name","number","stack"];d.prototype=new Error,b["default"]=d,a.exports=b["default"]},function(a,b,c){a.exports={"default":c(8),__esModule:!0}},function(a,b,c){var d=c(9);a.exports=function(a,b,c){return d.setDesc(a,b,c)}},function(a,b){var c=Object;a.exports={create:c.create,getProto:c.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:c.getOwnPropertyDescriptor,setDesc:c.defineProperty,setDescs:c.defineProperties,getKeys:c.keys,getNames:c.getOwnPropertyNames,getSymbols:c.getOwnPropertySymbols,each:[].forEach}},function(a,b,c){"use strict";function d(a){g["default"](a),i["default"](a),k["default"](a),m["default"](a),o["default"](a),q["default"](a),s["default"](a)}var e=c(1)["default"];b.__esModule=!0,b.registerDefaultHelpers=d;var f=c(11),g=e(f),h=c(12),i=e(h),j=c(13),k=e(j),l=c(14),m=e(l),n=c(15),o=e(n),p=c(16),q=e(p),r=c(17),s=e(r)},function(a,b,c){"use strict";b.__esModule=!0;var d=c(5);b["default"]=function(a){a.registerHelper("blockHelperMissing",function(b,c){var e=c.inverse,f=c.fn;if(b===!0)return f(this);if(b===!1||null==b)return e(this);if(d.isArray(b))return b.length>0?(c.ids&&(c.ids=[c.name]),a.helpers.each(b,c)):e(this);if(c.data&&c.ids){var g=d.createFrame(c.data);g.contextPath=d.appendContextPath(c.data.contextPath,c.name),c={data:g}}return f(b,c)})},a.exports=b["default"]},function(a,b,c){"use strict";var d=c(1)["default"];b.__esModule=!0;var e=c(5),f=c(6),g=d(f);b["default"]=function(a){a.registerHelper("each",function(a,b){function c(b,c,f){j&&(j.key=b,j.index=c,j.first=0===c,j.last=!!f,k&&(j.contextPath=k+b)),i+=d(a[b],{data:j,blockParams:e.blockParams([a[b],b],[k+b,null])})}if(!b)throw new g["default"]("Must pass iterator to #each");var d=b.fn,f=b.inverse,h=0,i="",j=void 0,k=void 0;if(b.data&&b.ids&&(k=e.appendContextPath(b.data.contextPath,b.ids[0])+"."),e.isFunction(a)&&(a=a.call(this)),b.data&&(j=e.createFrame(b.data)),a&&"object"==typeof a)if(e.isArray(a))for(var l=a.length;h<l;h++)h in a&&c(h,h,h===a.length-1);else{var m=void 0;for(var n in a)a.hasOwnProperty(n)&&(void 0!==m&&c(m,h-1),m=n,h++);void 0!==m&&c(m,h-1,!0)}return 0===h&&(i=f(this)),i})},a.exports=b["default"]},function(a,b,c){"use strict";var d=c(1)["default"];b.__esModule=!0;var e=c(6),f=d(e);b["default"]=function(a){a.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new f["default"]('Missing helper: "'+arguments[arguments.length-1].name+'"')})},a.exports=b["default"]},function(a,b,c){"use strict";b.__esModule=!0;var d=c(5);b["default"]=function(a){a.registerHelper("if",function(a,b){return d.isFunction(a)&&(a=a.call(this)),!b.hash.includeZero&&!a||d.isEmpty(a)?b.inverse(this):b.fn(this)}),a.registerHelper("unless",function(b,c){return a.helpers["if"].call(this,b,{fn:c.inverse,inverse:c.fn,hash:c.hash})})},a.exports=b["default"]},function(a,b){"use strict";b.__esModule=!0,b["default"]=function(a){a.registerHelper("log",function(){for(var b=[void 0],c=arguments[arguments.length-1],d=0;d<arguments.length-1;d++)b.push(arguments[d]);var e=1;null!=c.hash.level?e=c.hash.level:c.data&&null!=c.data.level&&(e=c.data.level),b[0]=e,a.log.apply(a,b)})},a.exports=b["default"]},function(a,b){"use strict";b.__esModule=!0,b["default"]=function(a){a.registerHelper("lookup",function(a,b){return a&&a[b]})},a.exports=b["default"]},function(a,b,c){"use strict";b.__esModule=!0;var d=c(5);b["default"]=function(a){a.registerHelper("with",function(a,b){d.isFunction(a)&&(a=a.call(this));var c=b.fn;if(d.isEmpty(a))return b.inverse(this);var e=b.data;return b.data&&b.ids&&(e=d.createFrame(b.data),e.contextPath=d.appendContextPath(b.data.contextPath,b.ids[0])),c(a,{data:e,blockParams:d.blockParams([a],[e&&e.contextPath])})})},a.exports=b["default"]},function(a,b,c){"use strict";function d(a){g["default"](a)}var e=c(1)["default"];b.__esModule=!0,b.registerDefaultDecorators=d;var f=c(19),g=e(f)},function(a,b,c){"use strict";b.__esModule=!0;var d=c(5);b["default"]=function(a){a.registerDecorator("inline",function(a,b,c,e){var f=a;return b.partials||(b.partials={},f=function(e,f){var g=c.partials;c.partials=d.extend({},g,b.partials);var h=a(e,f);return c.partials=g,h}),b.partials[e.args[0]]=e.fn,f})},a.exports=b["default"]},function(a,b,c){"use strict";b.__esModule=!0;var d=c(5),e={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(a){if("string"==typeof a){var b=d.indexOf(e.methodMap,a.toLowerCase());a=b>=0?b:parseInt(a,10)}return a},log:function(a){if(a=e.lookupLevel(a),"undefined"!=typeof console&&e.lookupLevel(e.level)<=a){var b=e.methodMap[a];console[b]||(b="log");for(var c=arguments.length,d=Array(c>1?c-1:0),f=1;f<c;f++)d[f-1]=arguments[f];console[b].apply(console,d)}}};b["default"]=e,a.exports=b["default"]},function(a,b){"use strict";function c(a){this.string=a}b.__esModule=!0,c.prototype.toString=c.prototype.toHTML=function(){return""+this.string},b["default"]=c,a.exports=b["default"]},function(a,b,c){"use strict";function d(a){var b=a&&a[0]||1,c=s.COMPILER_REVISION;if(b!==c){if(b<c){var d=s.REVISION_CHANGES[c],e=s.REVISION_CHANGES[b];throw new r["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+d+") or downgrade your runtime to an older version ("+e+").")}throw new r["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+a[1]+").")}}function e(a,b){function c(c,d,e){e.hash&&(d=p.extend({},d,e.hash),e.ids&&(e.ids[0]=!0)),c=b.VM.resolvePartial.call(this,c,d,e);var f=b.VM.invokePartial.call(this,c,d,e);if(null==f&&b.compile&&(e.partials[e.name]=b.compile(c,a.compilerOptions,b),f=e.partials[e.name](d,e)),null!=f){if(e.indent){for(var g=f.split("\n"),h=0,i=g.length;h<i&&(g[h]||h+1!==i);h++)g[h]=e.indent+g[h];f=g.join("\n")}return f}throw new r["default"]("The partial "+e.name+" could not be compiled when running in runtime-only mode")}function d(b){function c(b){return""+a.main(e,b,e.helpers,e.partials,g,i,h)}var f=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],g=f.data;d._setup(f),!f.partial&&a.useData&&(g=j(b,g));var h=void 0,i=a.useBlockParams?[]:void 0;return a.useDepths&&(h=f.depths?b!=f.depths[0]?[b].concat(f.depths):f.depths:[b]),(c=k(a.main,c,e,f.depths||[],g,i))(b,f)}if(!b)throw new r["default"]("No environment passed to template");if(!a||!a.main)throw new r["default"]("Unknown template object: "+typeof a);a.main.decorator=a.main_d,b.VM.checkRevision(a.compiler);var e={strict:function(a,b){if(!(b in a))throw new r["default"]('"'+b+'" not defined in '+a);return a[b]},lookup:function(a,b){for(var c=a.length,d=0;d<c;d++)if(a[d]&&null!=a[d][b])return a[d][b]},lambda:function(a,b){return"function"==typeof a?a.call(b):a},escapeExpression:p.escapeExpression,invokePartial:c,fn:function(b){var c=a[b];return c.decorator=a[b+"_d"],c},programs:[],program:function(a,b,c,d,e){var g=this.programs[a],h=this.fn(a);return b||e||d||c?g=f(this,a,h,b,c,d,e):g||(g=this.programs[a]=f(this,a,h)),g},data:function(a,b){for(;a&&b--;)a=a._parent;return a},merge:function(a,b){var c=a||b;return a&&b&&a!==b&&(c=p.extend({},b,a)),c},nullContext:l({}),noop:b.VM.noop,compilerInfo:a.compiler};return d.isTop=!0,d._setup=function(c){c.partial?(e.helpers=c.helpers,e.partials=c.partials,e.decorators=c.decorators):(e.helpers=e.merge(c.helpers,b.helpers),a.usePartial&&(e.partials=e.merge(c.partials,b.partials)),(a.usePartial||a.useDecorators)&&(e.decorators=e.merge(c.decorators,b.decorators)))},d._child=function(b,c,d,g){if(a.useBlockParams&&!d)throw new r["default"]("must pass block params");if(a.useDepths&&!g)throw new r["default"]("must pass parent depths");return f(e,b,a[b],c,0,d,g)},d}function f(a,b,c,d,e,f,g){function h(b){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],h=g;return!g||b==g[0]||b===a.nullContext&&null===g[0]||(h=[b].concat(g)),c(a,b,a.helpers,a.partials,e.data||d,f&&[e.blockParams].concat(f),h)}return h=k(c,h,a,g,d,f),h.program=b,h.depth=g?g.length:0,h.blockParams=e||0,h}function g(a,b,c){return a?a.call||c.name||(c.name=a,a=c.partials[a]):a="@partial-block"===c.name?c.data["partial-block"]:c.partials[c.name],a}function h(a,b,c){var d=c.data&&c.data["partial-block"];c.partial=!0,c.ids&&(c.data.contextPath=c.ids[0]||c.data.contextPath);var e=void 0;if(c.fn&&c.fn!==i&&!function(){c.data=s.createFrame(c.data);var a=c.fn;e=c.data["partial-block"]=function(b){var c=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return c.data=s.createFrame(c.data),c.data["partial-block"]=d,a(b,c)},a.partials&&(c.partials=p.extend({},c.partials,a.partials))}(),void 0===a&&e&&(a=e),void 0===a)throw new r["default"]("The partial "+c.name+" could not be found");if(a instanceof Function)return a(b,c)}function i(){return""}function j(a,b){return b&&"root"in b||(b=b?s.createFrame(b):{},b.root=a),b}function k(a,b,c,d,e,f){if(a.decorator){var g={};b=a.decorator(b,g,c,d&&d[0],e,f,d),p.extend(b,g)}return b}var l=c(23)["default"],m=c(3)["default"],n=c(1)["default"];b.__esModule=!0,b.checkRevision=d,b.template=e,b.wrapProgram=f,b.resolvePartial=g,b.invokePartial=h,b.noop=i;var o=c(5),p=m(o),q=c(6),r=n(q),s=c(4)},function(a,b,c){a.exports={"default":c(24),__esModule:!0}},function(a,b,c){c(25),a.exports=c(30).Object.seal},function(a,b,c){var d=c(26);c(27)("seal",function(a){return function(b){return a&&d(b)?a(b):b}})},function(a,b){a.exports=function(a){return"object"==typeof a?null!==a:"function"==typeof a}},function(a,b,c){var d=c(28),e=c(30),f=c(33);a.exports=function(a,b){var c=(e.Object||{})[a]||Object[a],g={};g[a]=b(c),d(d.S+d.F*f(function(){c(1)}),"Object",g)}},function(a,b,c){var d=c(29),e=c(30),f=c(31),g="prototype",h=function(a,b,c){var i,j,k,l=a&h.F,m=a&h.G,n=a&h.S,o=a&h.P,p=a&h.B,q=a&h.W,r=m?e:e[b]||(e[b]={}),s=m?d:n?d[b]:(d[b]||{})[g];m&&(c=b);for(i in c)j=!l&&s&&i in s,j&&i in r||(k=j?s[i]:c[i],r[i]=m&&"function"!=typeof s[i]?c[i]:p&&j?f(k,d):q&&s[i]==k?function(a){var b=function(b){return this instanceof a?new a(b):a(b)};return b[g]=a[g],b}(k):o&&"function"==typeof k?f(Function.call,k):k,o&&((r[g]||(r[g]={}))[i]=k))};h.F=1,h.G=2,h.S=4,h.P=8,h.B=16,h.W=32,a.exports=h},function(a,b){var c=a.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=c)},function(a,b){var c=a.exports={version:"1.2.6"};"number"==typeof __e&&(__e=c)},function(a,b,c){var d=c(32);a.exports=function(a,b,c){if(d(a),void 0===b)return a;switch(c){case 1:return function(c){return a.call(b,c)};case 2:return function(c,d){return a.call(b,c,d)};case 3:return function(c,d,e){return a.call(b,c,d,e)}}return function(){return a.apply(b,arguments)}}},function(a,b){a.exports=function(a){if("function"!=typeof a)throw TypeError(a+" is not a function!");return a}},function(a,b){a.exports=function(a){try{return!!a()}catch(b){return!0}}},function(a,b){(function(c){"use strict";b.__esModule=!0,b["default"]=function(a){var b="undefined"!=typeof c?c:window,d=b.Handlebars;a.noConflict=function(){return b.Handlebars===a&&(b.Handlebars=d),a}},a.exports=b["default"]}).call(b,function(){return this}())},function(a,b){"use strict";b.__esModule=!0;var c={helpers:{helperExpression:function(a){return"SubExpression"===a.type||("MustacheStatement"===a.type||"BlockStatement"===a.type)&&!!(a.params&&a.params.length||a.hash)},scopedId:function(a){return/^\.|this\b/.test(a.original)},simpleId:function(a){return 1===a.parts.length&&!c.helpers.scopedId(a)&&!a.depth}}};b["default"]=c,a.exports=b["default"]},function(a,b,c){"use strict";function d(a,b){if("Program"===a.type)return a;h["default"].yy=n,n.locInfo=function(a){return new n.SourceLocation(b&&b.srcName,a)};var c=new j["default"](b);return c.accept(h["default"].parse(a))}var e=c(1)["default"],f=c(3)["default"];b.__esModule=!0,b.parse=d;var g=c(37),h=e(g),i=c(38),j=e(i),k=c(40),l=f(k),m=c(5);b.parser=h["default"];var n={};m.extend(n,l)},function(a,b){"use strict";b.__esModule=!0;var c=function(){function a(){this.yy={}}var b={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition_plus0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,1],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function(a,b,c,d,e,f,g){var h=f.length-1;switch(e){case 1:return f[h-1];case 2:this.$=d.prepareProgram(f[h]);break;case 3:this.$=f[h];break;case 4:this.$=f[h];break;case 5:this.$=f[h];break;case 6:this.$=f[h];break;case 7:this.$=f[h];break;case 8:this.$=f[h];break;case 9:this.$={type:"CommentStatement",value:d.stripComment(f[h]),strip:d.stripFlags(f[h],f[h]),loc:d.locInfo(this._$)};break;case 10:this.$={type:"ContentStatement",original:f[h],value:f[h],loc:d.locInfo(this._$)};break;case 11:this.$=d.prepareRawBlock(f[h-2],f[h-1],f[h],this._$);break;case 12:this.$={path:f[h-3],params:f[h-2],hash:f[h-1]};break;case 13:this.$=d.prepareBlock(f[h-3],f[h-2],f[h-1],f[h],!1,this._$);break;case 14:this.$=d.prepareBlock(f[h-3],f[h-2],f[h-1],f[h],!0,this._$);break;case 15:this.$={open:f[h-5],path:f[h-4],params:f[h-3],hash:f[h-2],blockParams:f[h-1],strip:d.stripFlags(f[h-5],f[h])};break;case 16:this.$={path:f[h-4],params:f[h-3],hash:f[h-2],blockParams:f[h-1],strip:d.stripFlags(f[h-5],f[h])};break;case 17:this.$={path:f[h-4],params:f[h-3],hash:f[h-2],blockParams:f[h-1],strip:d.stripFlags(f[h-5],f[h])};break;case 18:this.$={strip:d.stripFlags(f[h-1],f[h-1]),program:f[h]};break;case 19:var i=d.prepareBlock(f[h-2],f[h-1],f[h],f[h],!1,this._$),j=d.prepareProgram([i],f[h-1].loc);j.chained=!0,this.$={strip:f[h-2].strip,program:j,chain:!0};break;case 20:this.$=f[h];break;case 21:this.$={path:f[h-1],strip:d.stripFlags(f[h-2],f[h])};break;case 22:this.$=d.prepareMustache(f[h-3],f[h-2],f[h-1],f[h-4],d.stripFlags(f[h-4],f[h]),this._$);break;case 23:this.$=d.prepareMustache(f[h-3],f[h-2],f[h-1],f[h-4],d.stripFlags(f[h-4],f[h]),this._$);break;case 24:this.$={type:"PartialStatement",name:f[h-3],params:f[h-2],hash:f[h-1],indent:"",strip:d.stripFlags(f[h-4],f[h]),loc:d.locInfo(this._$)};break;case 25:this.$=d.preparePartialBlock(f[h-2],f[h-1],f[h],this._$);break;case 26:this.$={path:f[h-3],params:f[h-2],hash:f[h-1],strip:d.stripFlags(f[h-4],f[h])};break;case 27:this.$=f[h];break;case 28:this.$=f[h];break;case 29:this.$={type:"SubExpression",path:f[h-3],params:f[h-2],hash:f[h-1],loc:d.locInfo(this._$)};break;case 30:this.$={type:"Hash",pairs:f[h],loc:d.locInfo(this._$)};break;case 31:this.$={type:"HashPair",key:d.id(f[h-2]),value:f[h],loc:d.locInfo(this._$)};break;case 32:this.$=d.id(f[h-1]);break;case 33:this.$=f[h];break;case 34:this.$=f[h];break;case 35:this.$={type:"StringLiteral",value:f[h],original:f[h],loc:d.locInfo(this._$)};break;case 36:this.$={type:"NumberLiteral",value:Number(f[h]),original:Number(f[h]),loc:d.locInfo(this._$)};break;case 37:this.$={type:"BooleanLiteral",value:"true"===f[h],original:"true"===f[h],loc:d.locInfo(this._$)};break;case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:d.locInfo(this._$)};break;case 39:this.$={type:"NullLiteral",original:null,value:null,loc:d.locInfo(this._$)};break;case 40:this.$=f[h];break;case 41:this.$=f[h];break;case 42:this.$=d.preparePath(!0,f[h],this._$);break;case 43:this.$=d.preparePath(!1,f[h],this._$);break;case 44:f[h-2].push({part:d.id(f[h]),original:f[h],separator:f[h-1]}),this.$=f[h-2];break;case 45:this.$=[{part:d.id(f[h]),original:f[h]}];break;case 46:this.$=[];break;case 47:f[h-1].push(f[h]);break;case 48:this.$=[f[h]];break;case 49:f[h-1].push(f[h]);break;case 50:this.$=[];break;case 51:f[h-1].push(f[h]);break;case 58:this.$=[];break;case 59:f[h-1].push(f[h]);break;case 64:this.$=[];break;case 65:f[h-1].push(f[h]);break;case 70:this.$=[];break;case 71:f[h-1].push(f[h]);break;case 78:this.$=[];break;case 79:f[h-1].push(f[h]);break;case 82:this.$=[];break;case 83:f[h-1].push(f[h]);break;case 86:this.$=[];break;case 87:f[h-1].push(f[h]);break;case 90:this.$=[];break;case 91:f[h-1].push(f[h]);break;case 94:this.$=[];break;case 95:f[h-1].push(f[h]);break;case 98:this.$=[f[h]];break;case 99:f[h-1].push(f[h]);break;case 100:this.$=[f[h]];break;case 101:f[h-1].push(f[h])}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{13:40,15:[1,20],17:39},{20:42,56:41,64:43,65:[1,44],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:45,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:48,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:42,56:49,64:43,65:[1,44],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:50,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,51]},{72:[1,35],86:52},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:53,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:54,38:56,39:[1,58],43:57,44:[1,59],45:55,47:[2,54]},{28:60,43:61,44:[1,59],47:[2,56]},{13:63,15:[1,20],18:[1,62]},{15:[2,48],18:[2,48]},{33:[2,86],57:64,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:65,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:66,47:[1,67]},{30:68,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:69,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:70,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:71,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:75,33:[2,80],50:72,63:73,64:76,65:[1,44],69:74,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,80]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,51]},{20:75,53:81,54:[2,84],63:82,64:76,65:[1,44],69:83,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:84,47:[1,67]},{47:[2,55]},{4:85,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:86,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:87,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:88,47:[1,67]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:75,33:[2,88],58:89,63:90,64:76,65:[1,44],69:91,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:92,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:93,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,31:94,33:[2,60],63:95,64:76,65:[1,44],69:96,70:77,71:78,72:[1,79],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,33:[2,66],36:97,63:98,64:76,65:[1,44],69:99,70:77,71:78,72:[1,79],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,22:100,23:[2,52],63:101,64:76,65:[1,44],69:102,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,33:[2,92],62:103,63:104,64:76,65:[1,44],69:105,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,106]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:107,72:[1,108],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,109],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,110]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:56,39:[1,58],43:57,44:[1,59],45:112,46:111,47:[2,76]},{33:[2,70],40:113,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,114]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],
85:[2,87]},{33:[2,89]},{20:75,63:116,64:76,65:[1,44],67:115,68:[2,96],69:117,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,118]},{32:119,33:[2,62],74:120,75:[1,121]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:122,74:123,75:[1,121]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,124]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,125]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,109]},{20:75,63:126,64:76,65:[1,44],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:75,33:[2,72],41:127,63:128,64:76,65:[1,44],69:129,70:77,71:78,72:[1,79],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,130]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,131]},{33:[2,63]},{72:[1,133],76:132},{33:[1,134]},{33:[2,69]},{15:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:135,74:136,75:[1,121]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,138],77:[1,137]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,139]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],55:[2,55],57:[2,20],61:[2,57],74:[2,81],83:[2,85],87:[2,18],91:[2,89],102:[2,53],105:[2,93],111:[2,19],112:[2,77],117:[2,97],120:[2,63],123:[2,69],124:[2,12],136:[2,75],137:[2,32]},parseError:function(a,b){throw new Error(a)},parse:function(a){function b(){var a;return a=c.lexer.lex()||1,"number"!=typeof a&&(a=c.symbols_[a]||a),a}var c=this,d=[0],e=[null],f=[],g=this.table,h="",i=0,j=0,k=0;this.lexer.setInput(a),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,"undefined"==typeof this.lexer.yylloc&&(this.lexer.yylloc={});var l=this.lexer.yylloc;f.push(l);var m=this.lexer.options&&this.lexer.options.ranges;"function"==typeof this.yy.parseError&&(this.parseError=this.yy.parseError);for(var n,o,p,q,r,s,t,u,v,w={};;){if(p=d[d.length-1],this.defaultActions[p]?q=this.defaultActions[p]:(null!==n&&"undefined"!=typeof n||(n=b()),q=g[p]&&g[p][n]),"undefined"==typeof q||!q.length||!q[0]){var x="";if(!k){v=[];for(s in g[p])this.terminals_[s]&&s>2&&v.push("'"+this.terminals_[s]+"'");x=this.lexer.showPosition?"Parse error on line "+(i+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+v.join(", ")+", got '"+(this.terminals_[n]||n)+"'":"Parse error on line "+(i+1)+": Unexpected "+(1==n?"end of input":"'"+(this.terminals_[n]||n)+"'"),this.parseError(x,{text:this.lexer.match,token:this.terminals_[n]||n,line:this.lexer.yylineno,loc:l,expected:v})}}if(q[0]instanceof Array&&q.length>1)throw new Error("Parse Error: multiple actions possible at state: "+p+", token: "+n);switch(q[0]){case 1:d.push(n),e.push(this.lexer.yytext),f.push(this.lexer.yylloc),d.push(q[1]),n=null,o?(n=o,o=null):(j=this.lexer.yyleng,h=this.lexer.yytext,i=this.lexer.yylineno,l=this.lexer.yylloc,k>0&&k--);break;case 2:if(t=this.productions_[q[1]][1],w.$=e[e.length-t],w._$={first_line:f[f.length-(t||1)].first_line,last_line:f[f.length-1].last_line,first_column:f[f.length-(t||1)].first_column,last_column:f[f.length-1].last_column},m&&(w._$.range=[f[f.length-(t||1)].range[0],f[f.length-1].range[1]]),r=this.performAction.call(w,h,j,i,this.yy,q[1],e,f),"undefined"!=typeof r)return r;t&&(d=d.slice(0,-1*t*2),e=e.slice(0,-1*t),f=f.slice(0,-1*t)),d.push(this.productions_[q[1]][0]),e.push(w.$),f.push(w._$),u=g[d[d.length-2]][d[d.length-1]],d.push(u);break;case 3:return!0}}return!0}},c=function(){var a={EOF:1,parseError:function(a,b){if(!this.yy.parser)throw new Error(a);this.yy.parser.parseError(a,b)},setInput:function(a){return this._input=a,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var a=this._input[0];this.yytext+=a,this.yyleng++,this.offset++,this.match+=a,this.matched+=a;var b=a.match(/(?:\r\n?|\n).*/g);return b?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),a},unput:function(a){var b=a.length,c=a.split(/(?:\r\n?|\n)/g);this._input=a+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-b-1),this.offset-=b;var d=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),c.length-1&&(this.yylineno-=c.length-1);var e=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===d.length?this.yylloc.first_column:0)+d[d.length-c.length].length-c[0].length:this.yylloc.first_column-b},this.options.ranges&&(this.yylloc.range=[e[0],e[0]+this.yyleng-b]),this},more:function(){return this._more=!0,this},less:function(a){this.unput(this.match.slice(a))},pastInput:function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(a.length>20?"...":"")+a.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var a=this.match;return a.length<20&&(a+=this._input.substr(0,20-a.length)),(a.substr(0,20)+(a.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var a=this.pastInput(),b=new Array(a.length+1).join("-");return a+this.upcomingInput()+"\n"+b+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var a,b,c,d,e;this._more||(this.yytext="",this.match="");for(var f=this._currentRules(),g=0;g<f.length&&(c=this._input.match(this.rules[f[g]]),!c||b&&!(c[0].length>b[0].length)||(b=c,d=g,this.options.flex));g++);return b?(e=b[0].match(/(?:\r\n?|\n).*/g),e&&(this.yylineno+=e.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:e?e[e.length-1].length-e[e.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+b[0].length},this.yytext+=b[0],this.match+=b[0],this.matches=b,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(b[0].length),this.matched+=b[0],a=this.performAction.call(this,this.yy,this,f[d],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),a?a:void 0):""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var a=this.next();return"undefined"!=typeof a?a:this.lex()},begin:function(a){this.conditionStack.push(a)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(a){this.begin(a)}};return a.options={},a.performAction=function(a,b,c,d){function e(a,c){return b.yytext=b.yytext.substr(a,b.yyleng-c)}switch(c){case 0:if("\\\\"===b.yytext.slice(-2)?(e(0,1),this.begin("mu")):"\\"===b.yytext.slice(-1)?(e(0,1),this.begin("emu")):this.begin("mu"),b.yytext)return 15;break;case 1:return 15;case 2:return this.popState(),15;case 3:return this.begin("raw"),15;case 4:return this.popState(),"raw"===this.conditionStack[this.conditionStack.length-1]?15:(b.yytext=b.yytext.substr(5,b.yyleng-9),"END_RAW_BLOCK");case 5:return 15;case 6:return this.popState(),14;case 7:return 65;case 8:return 68;case 9:return 19;case 10:return this.popState(),this.begin("raw"),23;case 11:return 55;case 12:return 60;case 13:return 29;case 14:return 47;case 15:return this.popState(),44;case 16:return this.popState(),44;case 17:return 34;case 18:return 39;case 19:return 51;case 20:return 48;case 21:this.unput(b.yytext),this.popState(),this.begin("com");break;case 22:return this.popState(),14;case 23:return 48;case 24:return 73;case 25:return 72;case 26:return 72;case 27:return 87;case 28:break;case 29:return this.popState(),54;case 30:return this.popState(),33;case 31:return b.yytext=e(1,2).replace(/\\"/g,'"'),80;case 32:return b.yytext=e(1,2).replace(/\\'/g,"'"),80;case 33:return 85;case 34:return 82;case 35:return 82;case 36:return 83;case 37:return 84;case 38:return 81;case 39:return 75;case 40:return 77;case 41:return 72;case 42:return b.yytext=b.yytext.replace(/\\([\\\]])/g,"$1"),72;case 43:return"INVALID";case 44:return 5}},a.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^\/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],a.conditions={mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}},a}();return b.lexer=c,a.prototype=b,b.Parser=a,new a}();b["default"]=c,a.exports=b["default"]},function(a,b,c){"use strict";function d(){var a=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.options=a}function e(a,b,c){void 0===b&&(b=a.length);var d=a[b-1],e=a[b-2];return d?"ContentStatement"===d.type?(e||!c?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(d.original):void 0:c}function f(a,b,c){void 0===b&&(b=-1);var d=a[b+1],e=a[b+2];return d?"ContentStatement"===d.type?(e||!c?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(d.original):void 0:c}function g(a,b,c){var d=a[null==b?0:b+1];if(d&&"ContentStatement"===d.type&&(c||!d.rightStripped)){var e=d.value;d.value=d.value.replace(c?/^\s+/:/^[ \t]*\r?\n?/,""),d.rightStripped=d.value!==e}}function h(a,b,c){var d=a[null==b?a.length-1:b-1];if(d&&"ContentStatement"===d.type&&(c||!d.leftStripped)){var e=d.value;return d.value=d.value.replace(c?/\s+$/:/[ \t]+$/,""),d.leftStripped=d.value!==e,d.leftStripped}}var i=c(1)["default"];b.__esModule=!0;var j=c(39),k=i(j);d.prototype=new k["default"],d.prototype.Program=function(a){var b=!this.options.ignoreStandalone,c=!this.isRootSeen;this.isRootSeen=!0;for(var d=a.body,i=0,j=d.length;i<j;i++){var k=d[i],l=this.accept(k);if(l){var m=e(d,i,c),n=f(d,i,c),o=l.openStandalone&&m,p=l.closeStandalone&&n,q=l.inlineStandalone&&m&&n;l.close&&g(d,i,!0),l.open&&h(d,i,!0),b&&q&&(g(d,i),h(d,i)&&"PartialStatement"===k.type&&(k.indent=/([ \t]+$)/.exec(d[i-1].original)[1])),b&&o&&(g((k.program||k.inverse).body),h(d,i)),b&&p&&(g(d,i),h((k.inverse||k.program).body))}}return a},d.prototype.BlockStatement=d.prototype.DecoratorBlock=d.prototype.PartialBlockStatement=function(a){this.accept(a.program),this.accept(a.inverse);var b=a.program||a.inverse,c=a.program&&a.inverse,d=c,i=c;if(c&&c.chained)for(d=c.body[0].program;i.chained;)i=i.body[i.body.length-1].program;var j={open:a.openStrip.open,close:a.closeStrip.close,openStandalone:f(b.body),closeStandalone:e((d||b).body)};if(a.openStrip.close&&g(b.body,null,!0),c){var k=a.inverseStrip;k.open&&h(b.body,null,!0),k.close&&g(d.body,null,!0),a.closeStrip.open&&h(i.body,null,!0),!this.options.ignoreStandalone&&e(b.body)&&f(d.body)&&(h(b.body),g(d.body))}else a.closeStrip.open&&h(b.body,null,!0);return j},d.prototype.Decorator=d.prototype.MustacheStatement=function(a){return a.strip},d.prototype.PartialStatement=d.prototype.CommentStatement=function(a){var b=a.strip||{};return{inlineStandalone:!0,open:b.open,close:b.close}},b["default"]=d,a.exports=b["default"]},function(a,b,c){"use strict";function d(){this.parents=[]}function e(a){this.acceptRequired(a,"path"),this.acceptArray(a.params),this.acceptKey(a,"hash")}function f(a){e.call(this,a),this.acceptKey(a,"program"),this.acceptKey(a,"inverse")}function g(a){this.acceptRequired(a,"name"),this.acceptArray(a.params),this.acceptKey(a,"hash")}var h=c(1)["default"];b.__esModule=!0;var i=c(6),j=h(i);d.prototype={constructor:d,mutating:!1,acceptKey:function(a,b){var c=this.accept(a[b]);if(this.mutating){if(c&&!d.prototype[c.type])throw new j["default"]('Unexpected node type "'+c.type+'" found when accepting '+b+" on "+a.type);a[b]=c}},acceptRequired:function(a,b){if(this.acceptKey(a,b),!a[b])throw new j["default"](a.type+" requires "+b)},acceptArray:function(a){for(var b=0,c=a.length;b<c;b++)this.acceptKey(a,b),a[b]||(a.splice(b,1),b--,c--)},accept:function(a){if(a){if(!this[a.type])throw new j["default"]("Unknown type: "+a.type,a);this.current&&this.parents.unshift(this.current),this.current=a;var b=this[a.type](a);return this.current=this.parents.shift(),!this.mutating||b?b:b!==!1?a:void 0}},Program:function(a){this.acceptArray(a.body)},MustacheStatement:e,Decorator:e,BlockStatement:f,DecoratorBlock:f,PartialStatement:g,PartialBlockStatement:function(a){g.call(this,a),this.acceptKey(a,"program")},ContentStatement:function(){},CommentStatement:function(){},SubExpression:e,PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(a){this.acceptArray(a.pairs)},HashPair:function(a){this.acceptRequired(a,"value")}},b["default"]=d,a.exports=b["default"]},function(a,b,c){"use strict";function d(a,b){if(b=b.path?b.path.original:b,a.path.original!==b){var c={loc:a.path.loc};throw new q["default"](a.path.original+" doesn't match "+b,c)}}function e(a,b){this.source=a,this.start={line:b.first_line,column:b.first_column},this.end={line:b.last_line,column:b.last_column}}function f(a){return/^\[.*\]$/.test(a)?a.substr(1,a.length-2):a}function g(a,b){return{open:"~"===a.charAt(2),close:"~"===b.charAt(b.length-3)}}function h(a){return a.replace(/^\{\{~?\!-?-?/,"").replace(/-?-?~?\}\}$/,"")}function i(a,b,c){c=this.locInfo(c);for(var d=a?"@":"",e=[],f=0,g="",h=0,i=b.length;h<i;h++){var j=b[h].part,k=b[h].original!==j;if(d+=(b[h].separator||"")+j,k||".."!==j&&"."!==j&&"this"!==j)e.push(j);else{if(e.length>0)throw new q["default"]("Invalid path: "+d,{loc:c});".."===j&&(f++,g+="../")}}return{type:"PathExpression",data:a,depth:f,parts:e,original:d,loc:c}}function j(a,b,c,d,e,f){var g=d.charAt(3)||d.charAt(2),h="{"!==g&&"&"!==g,i=/\*/.test(d);return{type:i?"Decorator":"MustacheStatement",path:a,params:b,hash:c,escaped:h,strip:e,loc:this.locInfo(f)}}function k(a,b,c,e){d(a,c),e=this.locInfo(e);var f={type:"Program",body:b,strip:{},loc:e};return{type:"BlockStatement",path:a.path,params:a.params,hash:a.hash,program:f,openStrip:{},inverseStrip:{},closeStrip:{},loc:e}}function l(a,b,c,e,f,g){e&&e.path&&d(a,e);var h=/\*/.test(a.open);b.blockParams=a.blockParams;var i=void 0,j=void 0;if(c){if(h)throw new q["default"]("Unexpected inverse block on decorator",c);c.chain&&(c.program.body[0].closeStrip=e.strip),j=c.strip,i=c.program}return f&&(f=i,i=b,b=f),{type:h?"DecoratorBlock":"BlockStatement",path:a.path,params:a.params,hash:a.hash,program:b,inverse:i,openStrip:a.strip,inverseStrip:j,closeStrip:e&&e.strip,loc:this.locInfo(g)}}function m(a,b){if(!b&&a.length){var c=a[0].loc,d=a[a.length-1].loc;c&&d&&(b={source:c.source,start:{line:c.start.line,column:c.start.column},end:{line:d.end.line,column:d.end.column}})}return{type:"Program",body:a,strip:{},loc:b}}function n(a,b,c,e){return d(a,c),{type:"PartialBlockStatement",name:a.path,params:a.params,hash:a.hash,program:b,openStrip:a.strip,closeStrip:c&&c.strip,loc:this.locInfo(e)}}var o=c(1)["default"];b.__esModule=!0,b.SourceLocation=e,b.id=f,b.stripFlags=g,b.stripComment=h,b.preparePath=i,b.prepareMustache=j,b.prepareRawBlock=k,b.prepareBlock=l,b.prepareProgram=m,b.preparePartialBlock=n;var p=c(6),q=o(p)},function(a,b,c){"use strict";function d(){}function e(a,b,c){if(null==a||"string"!=typeof a&&"Program"!==a.type)throw new k["default"]("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+a);b=b||{},"data"in b||(b.data=!0),b.compat&&(b.useDepths=!0);var d=c.parse(a,b),e=(new c.Compiler).compile(d,b);return(new c.JavaScriptCompiler).compile(e,b)}function f(a,b,c){function d(){var d=c.parse(a,b),e=(new c.Compiler).compile(d,b),f=(new c.JavaScriptCompiler).compile(e,b,void 0,!0);return c.template(f)}function e(a,b){return f||(f=d()),f.call(this,a,b)}if(void 0===b&&(b={}),null==a||"string"!=typeof a&&"Program"!==a.type)throw new k["default"]("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+a);b=l.extend({},b),"data"in b||(b.data=!0),b.compat&&(b.useDepths=!0);var f=void 0;return e._setup=function(a){return f||(f=d()),f._setup(a)},e._child=function(a,b,c,e){return f||(f=d()),f._child(a,b,c,e)},e}function g(a,b){if(a===b)return!0;if(l.isArray(a)&&l.isArray(b)&&a.length===b.length){for(var c=0;c<a.length;c++)if(!g(a[c],b[c]))return!1;return!0}}function h(a){if(!a.path.parts){var b=a.path;a.path={type:"PathExpression",data:!1,depth:0,parts:[b.original+""],original:b.original+"",loc:b.loc}}}var i=c(1)["default"];b.__esModule=!0,b.Compiler=d,b.precompile=e,b.compile=f;var j=c(6),k=i(j),l=c(5),m=c(35),n=i(m),o=[].slice;d.prototype={compiler:d,equals:function(a){var b=this.opcodes.length;if(a.opcodes.length!==b)return!1;for(var c=0;c<b;c++){var d=this.opcodes[c],e=a.opcodes[c];if(d.opcode!==e.opcode||!g(d.args,e.args))return!1}b=this.children.length;for(var c=0;c<b;c++)if(!this.children[c].equals(a.children[c]))return!1;return!0},guid:0,compile:function(a,b){this.sourceNode=[],this.opcodes=[],this.children=[],this.options=b,this.stringParams=b.stringParams,this.trackIds=b.trackIds,b.blockParams=b.blockParams||[];var c=b.knownHelpers;if(b.knownHelpers={helperMissing:!0,blockHelperMissing:!0,each:!0,"if":!0,unless:!0,"with":!0,log:!0,lookup:!0},c)for(var d in c)d in c&&(this.options.knownHelpers[d]=c[d]);return this.accept(a)},compileProgram:function(a){var b=new this.compiler,c=b.compile(a,this.options),d=this.guid++;return this.usePartial=this.usePartial||c.usePartial,this.children[d]=c,this.useDepths=this.useDepths||c.useDepths,d},accept:function(a){if(!this[a.type])throw new k["default"]("Unknown type: "+a.type,a);this.sourceNode.unshift(a);var b=this[a.type](a);return this.sourceNode.shift(),b},Program:function(a){this.options.blockParams.unshift(a.blockParams);for(var b=a.body,c=b.length,d=0;d<c;d++)this.accept(b[d]);return this.options.blockParams.shift(),this.isSimple=1===c,this.blockParams=a.blockParams?a.blockParams.length:0,this},BlockStatement:function(a){h(a);var b=a.program,c=a.inverse;b=b&&this.compileProgram(b),c=c&&this.compileProgram(c);var d=this.classifySexpr(a);"helper"===d?this.helperSexpr(a,b,c):"simple"===d?(this.simpleSexpr(a),this.opcode("pushProgram",b),this.opcode("pushProgram",c),this.opcode("emptyHash"),this.opcode("blockValue",a.path.original)):(this.ambiguousSexpr(a,b,c),this.opcode("pushProgram",b),this.opcode("pushProgram",c),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},DecoratorBlock:function(a){var b=a.program&&this.compileProgram(a.program),c=this.setupFullMustacheParams(a,b,void 0),d=a.path;this.useDecorators=!0,this.opcode("registerDecorator",c.length,d.original)},PartialStatement:function(a){this.usePartial=!0;var b=a.program;b&&(b=this.compileProgram(a.program));var c=a.params;if(c.length>1)throw new k["default"]("Unsupported number of partial arguments: "+c.length,a);c.length||(this.options.explicitPartialContext?this.opcode("pushLiteral","undefined"):c.push({type:"PathExpression",parts:[],depth:0}));var d=a.name.original,e="SubExpression"===a.name.type;e&&this.accept(a.name),this.setupFullMustacheParams(a,b,void 0,!0);var f=a.indent||"";this.options.preventIndent&&f&&(this.opcode("appendContent",f),f=""),this.opcode("invokePartial",e,d,f),this.opcode("append")},PartialBlockStatement:function(a){this.PartialStatement(a)},MustacheStatement:function(a){this.SubExpression(a),a.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},Decorator:function(a){this.DecoratorBlock(a)},ContentStatement:function(a){a.value&&this.opcode("appendContent",a.value)},CommentStatement:function(){},SubExpression:function(a){h(a);var b=this.classifySexpr(a);"simple"===b?this.simpleSexpr(a):"helper"===b?this.helperSexpr(a):this.ambiguousSexpr(a)},ambiguousSexpr:function(a,b,c){var d=a.path,e=d.parts[0],f=null!=b||null!=c;this.opcode("getContext",d.depth),this.opcode("pushProgram",b),this.opcode("pushProgram",c),d.strict=!0,this.accept(d),this.opcode("invokeAmbiguous",e,f)},simpleSexpr:function(a){var b=a.path;b.strict=!0,this.accept(b),this.opcode("resolvePossibleLambda")},helperSexpr:function(a,b,c){var d=this.setupFullMustacheParams(a,b,c),e=a.path,f=e.parts[0];if(this.options.knownHelpers[f])this.opcode("invokeKnownHelper",d.length,f);else{if(this.options.knownHelpersOnly)throw new k["default"]("You specified knownHelpersOnly, but used the unknown helper "+f,a);e.strict=!0,e.falsy=!0,this.accept(e),this.opcode("invokeHelper",d.length,e.original,n["default"].helpers.simpleId(e))}},PathExpression:function(a){this.addDepth(a.depth),this.opcode("getContext",a.depth);var b=a.parts[0],c=n["default"].helpers.scopedId(a),d=!a.depth&&!c&&this.blockParamIndex(b);d?this.opcode("lookupBlockParam",d,a.parts):b?a.data?(this.options.data=!0,this.opcode("lookupData",a.depth,a.parts,a.strict)):this.opcode("lookupOnContext",a.parts,a.falsy,a.strict,c):this.opcode("pushContext")},StringLiteral:function(a){this.opcode("pushString",a.value)},NumberLiteral:function(a){this.opcode("pushLiteral",a.value)},BooleanLiteral:function(a){this.opcode("pushLiteral",a.value)},UndefinedLiteral:function(){this.opcode("pushLiteral","undefined")},NullLiteral:function(){this.opcode("pushLiteral","null")},Hash:function(a){var b=a.pairs,c=0,d=b.length;for(this.opcode("pushHash");c<d;c++)this.pushParam(b[c].value);for(;c--;)this.opcode("assignToHash",b[c].key);this.opcode("popHash")},opcode:function(a){this.opcodes.push({opcode:a,args:o.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function(a){a&&(this.useDepths=!0)},classifySexpr:function(a){var b=n["default"].helpers.simpleId(a.path),c=b&&!!this.blockParamIndex(a.path.parts[0]),d=!c&&n["default"].helpers.helperExpression(a),e=!c&&(d||b);if(e&&!d){var f=a.path.parts[0],g=this.options;g.knownHelpers[f]?d=!0:g.knownHelpersOnly&&(e=!1)}return d?"helper":e?"ambiguous":"simple"},pushParams:function(a){for(var b=0,c=a.length;b<c;b++)this.pushParam(a[b])},pushParam:function(a){var b=null!=a.value?a.value:a.original||"";if(this.stringParams)b.replace&&(b=b.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")),a.depth&&this.addDepth(a.depth),this.opcode("getContext",a.depth||0),this.opcode("pushStringParam",b,a.type),"SubExpression"===a.type&&this.accept(a);else{if(this.trackIds){var c=void 0;if(!a.parts||n["default"].helpers.scopedId(a)||a.depth||(c=this.blockParamIndex(a.parts[0])),c){var d=a.parts.slice(1).join(".");this.opcode("pushId","BlockParam",c,d)}else b=a.original||b,b.replace&&(b=b.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")),this.opcode("pushId",a.type,b)}this.accept(a)}},setupFullMustacheParams:function(a,b,c,d){var e=a.params;return this.pushParams(e),this.opcode("pushProgram",b),this.opcode("pushProgram",c),a.hash?this.accept(a.hash):this.opcode("emptyHash",d),e},blockParamIndex:function(a){for(var b=0,c=this.options.blockParams.length;b<c;b++){var d=this.options.blockParams[b],e=d&&l.indexOf(d,a);if(d&&e>=0)return[b,e]}}}},function(a,b,c){"use strict";function d(a){this.value=a}function e(){}function f(a,b,c,d){var e=b.popStack(),f=0,g=c.length;for(a&&g--;f<g;f++)e=b.nameLookup(e,c[f],d);return a?[b.aliasable("container.strict"),"(",e,", ",b.quotedString(c[f]),")"]:e}var g=c(1)["default"];b.__esModule=!0;var h=c(4),i=c(6),j=g(i),k=c(5),l=c(43),m=g(l);e.prototype={nameLookup:function(a,b){return e.isValidJavaScriptVariableName(b)?[a,".",b]:[a,"[",JSON.stringify(b),"]"]},depthedLookup:function(a){return[this.aliasable("container.lookup"),'(depths, "',a,'")']},compilerInfo:function(){var a=h.COMPILER_REVISION,b=h.REVISION_CHANGES[a];return[a,b]},appendToBuffer:function(a,b,c){return k.isArray(a)||(a=[a]),a=this.source.wrap(a,b),this.environment.isSimple?["return ",a,";"]:c?["buffer += ",a,";"]:(a.appendToBuffer=!0,a)},initializeBuffer:function(){return this.quotedString("")},compile:function(a,b,c,d){this.environment=a,this.options=b,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!d,this.name=this.environment.name,this.isChild=!!c,this.context=c||{decorators:[],programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.blockParams=[],this.compileChildren(a,b),this.useDepths=this.useDepths||a.useDepths||a.useDecorators||this.options.compat,this.useBlockParams=this.useBlockParams||a.useBlockParams;var e=a.opcodes,f=void 0,g=void 0,h=void 0,i=void 0;for(h=0,i=e.length;h<i;h++)f=e[h],this.source.currentLocation=f.loc,g=g||f.loc,this[f.opcode].apply(this,f.args);if(this.source.currentLocation=g,this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new j["default"]("Compile completed with content left on stack");this.decorators.isEmpty()?this.decorators=void 0:(this.useDecorators=!0,this.decorators.prepend("var decorators = container.decorators;\n"),this.decorators.push("return fn;"),d?this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()]):(this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n"),this.decorators.push("}\n"),this.decorators=this.decorators.merge()));var k=this.createFunctionContext(d);if(this.isChild)return k;var l={compiler:this.compilerInfo(),main:k};this.decorators&&(l.main_d=this.decorators,l.useDecorators=!0);var m=this.context,n=m.programs,o=m.decorators;for(h=0,i=n.length;h<i;h++)n[h]&&(l[h]=n[h],o[h]&&(l[h+"_d"]=o[h],l.useDecorators=!0));return this.environment.usePartial&&(l.usePartial=!0),this.options.data&&(l.useData=!0),this.useDepths&&(l.useDepths=!0),this.useBlockParams&&(l.useBlockParams=!0),this.options.compat&&(l.compat=!0),d?l.compilerOptions=this.options:(l.compiler=JSON.stringify(l.compiler),this.source.currentLocation={start:{line:1,column:0}},l=this.objectLiteral(l),b.srcName?(l=l.toStringWithSourceMap({file:b.destName}),l.map=l.map&&l.map.toString()):l=l.toString()),l},preamble:function(){this.lastContext=0,this.source=new m["default"](this.options.srcName),this.decorators=new m["default"](this.options.srcName)},createFunctionContext:function(a){var b="",c=this.stackVars.concat(this.registers.list);c.length>0&&(b+=", "+c.join(", "));var d=0;for(var e in this.aliases){var f=this.aliases[e];this.aliases.hasOwnProperty(e)&&f.children&&f.referenceCount>1&&(b+=", alias"+ ++d+"="+e,f.children[0]="alias"+d)}var g=["container","depth0","helpers","partials","data"];(this.useBlockParams||this.useDepths)&&g.push("blockParams"),this.useDepths&&g.push("depths");var h=this.mergeSource(b);return a?(g.push(h),Function.apply(this,g)):this.source.wrap(["function(",g.join(","),") {\n  ",h,"}"])},mergeSource:function(a){var b=this.environment.isSimple,c=!this.forceBuffer,d=void 0,e=void 0,f=void 0,g=void 0;return this.source.each(function(a){a.appendToBuffer?(f?a.prepend("  + "):f=a,g=a):(f&&(e?f.prepend("buffer += "):d=!0,g.add(";"),f=g=void 0),e=!0,b||(c=!1))}),c?f?(f.prepend("return "),g.add(";")):e||this.source.push('return "";'):(a+=", buffer = "+(d?"":this.initializeBuffer()),f?(f.prepend("return buffer + "),g.add(";")):this.source.push("return buffer;")),a&&this.source.prepend("var "+a.substring(2)+(d?"":";\n")),this.source.merge()},blockValue:function(a){var b=this.aliasable("helpers.blockHelperMissing"),c=[this.contextName(0)];this.setupHelperArgs(a,0,c);var d=this.popStack();c.splice(1,0,d),this.push(this.source.functionCall(b,"call",c))},ambiguousBlockValue:function(){var a=this.aliasable("helpers.blockHelperMissing"),b=[this.contextName(0)];this.setupHelperArgs("",0,b,!0),this.flushInline();var c=this.topStack();b.splice(1,0,c),this.pushSource(["if (!",this.lastHelper,") { ",c," = ",this.source.functionCall(a,"call",b),"}"])},appendContent:function(a){this.pendingContent?a=this.pendingContent+a:this.pendingLocation=this.source.currentLocation,this.pendingContent=a},append:function(){if(this.isInline())this.replaceStack(function(a){return[" != null ? ",a,' : ""']}),this.pushSource(this.appendToBuffer(this.popStack()));else{var a=this.popStack();this.pushSource(["if (",a," != null) { ",this.appendToBuffer(a,void 0,!0)," }"]),this.environment.isSimple&&this.pushSource(["else { ",this.appendToBuffer("''",void 0,!0)," }"])}},appendEscaped:function(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))},getContext:function(a){this.lastContext=a},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(a,b,c,d){var e=0;d||!this.options.compat||this.lastContext?this.pushContext():this.push(this.depthedLookup(a[e++])),this.resolvePath("context",a,e,b,c)},lookupBlockParam:function(a,b){this.useBlockParams=!0,this.push(["blockParams[",a[0],"][",a[1],"]"]),this.resolvePath("context",b,1)},lookupData:function(a,b,c){a?this.pushStackLiteral("container.data(data, "+a+")"):this.pushStackLiteral("data"),this.resolvePath("data",b,0,!0,c)},resolvePath:function(a,b,c,d,e){var g=this;if(this.options.strict||this.options.assumeObjects)return void this.push(f(this.options.strict&&e,this,b,a));for(var h=b.length;c<h;c++)this.replaceStack(function(e){
var f=g.nameLookup(e,b[c],a);return d?[" && ",f]:[" != null ? ",f," : ",e]})},resolvePossibleLambda:function(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])},pushStringParam:function(a,b){this.pushContext(),this.pushString(b),"SubExpression"!==b&&("string"==typeof a?this.pushString(a):this.pushStackLiteral(a))},emptyHash:function(a){this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}")),this.pushStackLiteral(a?"undefined":"{}")},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:[],types:[],contexts:[],ids:[]}},popHash:function(){var a=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push(this.objectLiteral(a.ids)),this.stringParams&&(this.push(this.objectLiteral(a.contexts)),this.push(this.objectLiteral(a.types))),this.push(this.objectLiteral(a.values))},pushString:function(a){this.pushStackLiteral(this.quotedString(a))},pushLiteral:function(a){this.pushStackLiteral(a)},pushProgram:function(a){null!=a?this.pushStackLiteral(this.programExpression(a)):this.pushStackLiteral(null)},registerDecorator:function(a,b){var c=this.nameLookup("decorators",b,"decorator"),d=this.setupHelperArgs(b,a);this.decorators.push(["fn = ",this.decorators.functionCall(c,"",["fn","props","container",d])," || fn;"])},invokeHelper:function(a,b,c){var d=this.popStack(),e=this.setupHelper(a,b),f=c?[e.name," || "]:"",g=["("].concat(f,d);this.options.strict||g.push(" || ",this.aliasable("helpers.helperMissing")),g.push(")"),this.push(this.source.functionCall(g,"call",e.callParams))},invokeKnownHelper:function(a,b){var c=this.setupHelper(a,b);this.push(this.source.functionCall(c.name,"call",c.callParams))},invokeAmbiguous:function(a,b){this.useRegister("helper");var c=this.popStack();this.emptyHash();var d=this.setupHelper(0,a,b),e=this.lastHelper=this.nameLookup("helpers",a,"helper"),f=["(","(helper = ",e," || ",c,")"];this.options.strict||(f[0]="(helper = ",f.push(" != null ? helper : ",this.aliasable("helpers.helperMissing"))),this.push(["(",f,d.paramsInit?["),(",d.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",d.callParams)," : helper))"])},invokePartial:function(a,b,c){var d=[],e=this.setupParams(b,1,d);a&&(b=this.popStack(),delete e.name),c&&(e.indent=JSON.stringify(c)),e.helpers="helpers",e.partials="partials",e.decorators="container.decorators",a?d.unshift(b):d.unshift(this.nameLookup("partials",b,"partial")),this.options.compat&&(e.depths="depths"),e=this.objectLiteral(e),d.push(e),this.push(this.source.functionCall("container.invokePartial","",d))},assignToHash:function(a){var b=this.popStack(),c=void 0,d=void 0,e=void 0;this.trackIds&&(e=this.popStack()),this.stringParams&&(d=this.popStack(),c=this.popStack());var f=this.hash;c&&(f.contexts[a]=c),d&&(f.types[a]=d),e&&(f.ids[a]=e),f.values[a]=b},pushId:function(a,b,c){"BlockParam"===a?this.pushStackLiteral("blockParams["+b[0]+"].path["+b[1]+"]"+(c?" + "+JSON.stringify("."+c):"")):"PathExpression"===a?this.pushString(b):"SubExpression"===a?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:e,compileChildren:function(a,b){for(var c=a.children,d=void 0,e=void 0,f=0,g=c.length;f<g;f++){d=c[f],e=new this.compiler;var h=this.matchExistingProgram(d);if(null==h){this.context.programs.push("");var i=this.context.programs.length;d.index=i,d.name="program"+i,this.context.programs[i]=e.compile(d,b,this.context,!this.precompile),this.context.decorators[i]=e.decorators,this.context.environments[i]=d,this.useDepths=this.useDepths||e.useDepths,this.useBlockParams=this.useBlockParams||e.useBlockParams,d.useDepths=this.useDepths,d.useBlockParams=this.useBlockParams}else d.index=h.index,d.name="program"+h.index,this.useDepths=this.useDepths||h.useDepths,this.useBlockParams=this.useBlockParams||h.useBlockParams}},matchExistingProgram:function(a){for(var b=0,c=this.context.environments.length;b<c;b++){var d=this.context.environments[b];if(d&&d.equals(a))return d}},programExpression:function(a){var b=this.environment.children[a],c=[b.index,"data",b.blockParams];return(this.useBlockParams||this.useDepths)&&c.push("blockParams"),this.useDepths&&c.push("depths"),"container.program("+c.join(", ")+")"},useRegister:function(a){this.registers[a]||(this.registers[a]=!0,this.registers.list.push(a))},push:function(a){return a instanceof d||(a=this.source.wrap(a)),this.inlineStack.push(a),a},pushStackLiteral:function(a){this.push(new d(a))},pushSource:function(a){this.pendingContent&&(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation)),this.pendingContent=void 0),a&&this.source.push(a)},replaceStack:function(a){var b=["("],c=void 0,e=void 0,f=void 0;if(!this.isInline())throw new j["default"]("replaceStack on non-inline");var g=this.popStack(!0);if(g instanceof d)c=[g.value],b=["(",c],f=!0;else{e=!0;var h=this.incrStack();b=["((",this.push(h)," = ",g,")"],c=this.topStack()}var i=a.call(this,c);f||this.popStack(),e&&this.stackSlot--,this.push(b.concat(i,")"))},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var a=this.inlineStack;this.inlineStack=[];for(var b=0,c=a.length;b<c;b++){var e=a[b];if(e instanceof d)this.compileStack.push(e);else{var f=this.incrStack();this.pushSource([f," = ",e,";"]),this.compileStack.push(f)}}},isInline:function(){return this.inlineStack.length},popStack:function(a){var b=this.isInline(),c=(b?this.inlineStack:this.compileStack).pop();if(!a&&c instanceof d)return c.value;if(!b){if(!this.stackSlot)throw new j["default"]("Invalid stack pop");this.stackSlot--}return c},topStack:function(){var a=this.isInline()?this.inlineStack:this.compileStack,b=a[a.length-1];return b instanceof d?b.value:b},contextName:function(a){return this.useDepths&&a?"depths["+a+"]":"depth"+a},quotedString:function(a){return this.source.quotedString(a)},objectLiteral:function(a){return this.source.objectLiteral(a)},aliasable:function(a){var b=this.aliases[a];return b?(b.referenceCount++,b):(b=this.aliases[a]=this.source.wrap(a),b.aliasable=!0,b.referenceCount=1,b)},setupHelper:function(a,b,c){var d=[],e=this.setupHelperArgs(b,a,d,c),f=this.nameLookup("helpers",b,"helper"),g=this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : (container.nullContext || {})");return{params:d,paramsInit:e,name:f,callParams:[g].concat(d)}},setupParams:function(a,b,c){var d={},e=[],f=[],g=[],h=!c,i=void 0;h&&(c=[]),d.name=this.quotedString(a),d.hash=this.popStack(),this.trackIds&&(d.hashIds=this.popStack()),this.stringParams&&(d.hashTypes=this.popStack(),d.hashContexts=this.popStack());var j=this.popStack(),k=this.popStack();(k||j)&&(d.fn=k||"container.noop",d.inverse=j||"container.noop");for(var l=b;l--;)i=this.popStack(),c[l]=i,this.trackIds&&(g[l]=this.popStack()),this.stringParams&&(f[l]=this.popStack(),e[l]=this.popStack());return h&&(d.args=this.source.generateArray(c)),this.trackIds&&(d.ids=this.source.generateArray(g)),this.stringParams&&(d.types=this.source.generateArray(f),d.contexts=this.source.generateArray(e)),this.options.data&&(d.data="data"),this.useBlockParams&&(d.blockParams="blockParams"),d},setupHelperArgs:function(a,b,c,d){var e=this.setupParams(a,b,c);return e=this.objectLiteral(e),d?(this.useRegister("options"),c.push("options"),["options=",e]):c?(c.push(e),""):e}},function(){for(var a="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "),b=e.RESERVED_WORDS={},c=0,d=a.length;c<d;c++)b[a[c]]=!0}(),e.isValidJavaScriptVariableName=function(a){return!e.RESERVED_WORDS[a]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(a)},b["default"]=e,a.exports=b["default"]},function(a,b,c){"use strict";function d(a,b,c){if(f.isArray(a)){for(var d=[],e=0,g=a.length;e<g;e++)d.push(b.wrap(a[e],c));return d}return"boolean"==typeof a||"number"==typeof a?a+"":a}function e(a){this.srcFile=a,this.source=[]}b.__esModule=!0;var f=c(5),g=void 0;try{}catch(h){}g||(g=function(a,b,c,d){this.src="",d&&this.add(d)},g.prototype={add:function(a){f.isArray(a)&&(a=a.join("")),this.src+=a},prepend:function(a){f.isArray(a)&&(a=a.join("")),this.src=a+this.src},toStringWithSourceMap:function(){return{code:this.toString()}},toString:function(){return this.src}}),e.prototype={isEmpty:function(){return!this.source.length},prepend:function(a,b){this.source.unshift(this.wrap(a,b))},push:function(a,b){this.source.push(this.wrap(a,b))},merge:function(){var a=this.empty();return this.each(function(b){a.add(["  ",b,"\n"])}),a},each:function(a){for(var b=0,c=this.source.length;b<c;b++)a(this.source[b])},empty:function(){var a=this.currentLocation||{start:{}};return new g(a.start.line,a.start.column,this.srcFile)},wrap:function(a){var b=arguments.length<=1||void 0===arguments[1]?this.currentLocation||{start:{}}:arguments[1];return a instanceof g?a:(a=d(a,this,b),new g(b.start.line,b.start.column,this.srcFile,a))},functionCall:function(a,b,c){return c=this.generateList(c),this.wrap([a,b?"."+b+"(":"(",c,")"])},quotedString:function(a){return'"'+(a+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(a){var b=[];for(var c in a)if(a.hasOwnProperty(c)){var e=d(a[c],this);"undefined"!==e&&b.push([this.quotedString(c),":",e])}var f=this.generateList(b);return f.prepend("{"),f.add("}"),f},generateList:function(a){for(var b=this.empty(),c=0,e=a.length;c<e;c++)c&&b.add(","),b.add(d(a[c],this));return b},generateArray:function(a){var b=this.generateList(a);return b.prepend("["),b.add("]"),b}},b["default"]=e,a.exports=b["default"]}])});

/***/ }),

/***/ "./src/js/jquery-3.2.1.min.js":
/*!************************************!*\
  !*** ./src/js/jquery-3.2.1.min.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"=="function"&&__webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return r}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});


/***/ }),

/***/ "./src/js/jquery.knob.js":
/*!*******************************!*\
  !*** ./src/js/jquery.knob.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ./jquery-3.2.1.min.js */ "./src/js/jquery-3.2.1.min.js");
/*!jQuery Knob*/
/**
 * Downward compatible, touchable dial
 *
 * Version: 1.2.12
 * Requires: jQuery v1.7+
 *
 * Copyright (c) 2012 Anthony Terrien
 * Under MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Thanks to vor, eskimoblood, spiffistan, FabrizioC
 */
(function (factory) {
    if (true) {
        // CommonJS
        module.exports = factory(__webpack_require__(/*! ./jquery-3.2.1.min.js */ "./src/js/jquery-3.2.1.min.js"));
    } else {}
}(function ($) {

    /**
     * Kontrol library
     */
    "use strict";

    /**
     * Definition of globals and core
     */
    var k = {}, // kontrol
        max = Math.max,
        min = Math.min;

    k.c = {};
    k.c.d = $(document);
    k.c.t = function (e) {
        return e.originalEvent.touches.length - 1;
    };

    /**
     * Kontrol Object
     *
     * Definition of an abstract UI control
     *
     * Each concrete component must call this one.
     * <code>
     * k.o.call(this);
     * </code>
     */
    k.o = function () {
        var s = this;

        this.o = null; // array of options
        this.$ = null; // jQuery wrapped element
        this.i = null; // mixed HTMLInputElement or array of HTMLInputElement
        this.g = null; // deprecated 2D graphics context for 'pre-rendering'
        this.v = null; // value ; mixed array or integer
        this.cv = null; // change value ; not commited value
        this.x = 0; // canvas x position
        this.y = 0; // canvas y position
        this.w = 0; // canvas width
        this.h = 0; // canvas height
        this.$c = null; // jQuery canvas element
        this.c = null; // rendered canvas context
        this.t = 0; // touches index
        this.isInit = false;
        this.fgColor = null; // main color
        this.pColor = null; // previous color
        this.dH = null; // draw hook
        this.cH = null; // change hook
        this.eH = null; // cancel hook
        this.rH = null; // release hook
        this.scale = 1; // scale factor
        this.relative = false;
        this.relativeWidth = false;
        this.relativeHeight = false;
        this.$div = null; // component div

        this.run = function () {
            var cf = function (e, conf) {
                var k;
                for (k in conf) {
                    s.o[k] = conf[k];
                }
                s._carve().init();
                s._configure()
                 ._draw();
            };

            if (this.$.data('kontroled')) return;
            this.$.data('kontroled', true);

            this.extend();
            this.o = $.extend({
                    // Config
                    min: this.$.data('min') !== undefined ? this.$.data('min') : 0,
                    max: this.$.data('max') !== undefined ? this.$.data('max') : 100,
                    stopper: true,
                    readOnly: this.$.data('readonly') || (this.$.attr('readonly') === 'readonly'),

                    // UI
                    cursor: this.$.data('cursor') === true && 30
                            || this.$.data('cursor') || 0,
                    thickness: this.$.data('thickness')
                               && Math.max(Math.min(this.$.data('thickness'), 1), 0.01)
                               || 0.35,
                    lineCap: this.$.data('linecap') || 'butt',
                    width: this.$.data('width') || 200,
                    height: this.$.data('height') || 200,
                    displayInput: this.$.data('displayinput') == null || this.$.data('displayinput'),
                    displayPrevious: this.$.data('displayprevious'),
                    fgColor: this.$.data('fgcolor') || '#87CEEB',
                    inputColor: this.$.data('inputcolor'),
                    font: this.$.data('font') || 'Arial',
                    fontWeight: this.$.data('font-weight') || 'bold',
                    inline: false,
                    step: this.$.data('step') || 1,
                    rotation: this.$.data('rotation'),

                    // Hooks
                    draw: null, // function () {}
                    change: null, // function (value) {}
                    cancel: null, // function () {}
                    release: null, // function (value) {}

                    // Output formatting, allows to add unit: %, ms ...
                    format: function(v) {
                        return v;
                    },
                    parse: function (v) {
                        return parseFloat(v);
                    }
                }, this.o
            );

            // finalize options
            this.o.flip = this.o.rotation === 'anticlockwise' || this.o.rotation === 'acw';
            if (!this.o.inputColor) {
                this.o.inputColor = this.o.fgColor;
            }

            // routing value
            if (this.$.is('fieldset')) {

                // fieldset = array of integer
                this.v = {};
                this.i = this.$.find('input');
                this.i.each(function(k) {
                    var $this = $(this);
                    s.i[k] = $this;
                    s.v[k] = s.o.parse($this.val());

                    $this.bind(
                        'change blur',
                        function () {
                            var val = {};
                            val[k] = $this.val();
                            s.val(s._validate(val));
                        }
                    );
                });
                this.$.find('legend').remove();
            } else {

                // input = integer
                this.i = this.$;
                this.v = this.o.parse(this.$.val());
                this.v === '' && (this.v = this.o.min);
                this.$.bind(
                    'change blur',
                    function () {
                        s.val(s._validate(s.o.parse(s.$.val())));
                    }
                );

            }

            !this.o.displayInput && this.$.hide();

            // adds needed DOM elements (canvas, div)
            this.$c = $(document.createElement('canvas')).attr({
                width: this.o.width,
                height: this.o.height
            });

            // wraps all elements in a div
            // add to DOM before Canvas init is triggered
            this.$div = $('<div style="'
                + (this.o.inline ? 'display:inline;' : '')
                + 'width:' + this.o.width + 'px;height:' + this.o.height + 'px;'
                + '"></div>');

            this.$.wrap(this.$div).before(this.$c);
            this.$div = this.$.parent();

            if (typeof G_vmlCanvasManager !== 'undefined') {
                G_vmlCanvasManager.initElement(this.$c[0]);
            }

            this.c = this.$c[0].getContext ? this.$c[0].getContext('2d') : null;

            if (!this.c) {
                throw {
                    name:        "CanvasNotSupportedException",
                    message:     "Canvas not supported. Please use excanvas on IE8.0.",
                    toString:    function(){return this.name + ": " + this.message}
                }
            }

            // hdpi support
            this.scale = (window.devicePixelRatio || 1) / (
                            this.c.webkitBackingStorePixelRatio ||
                            this.c.mozBackingStorePixelRatio ||
                            this.c.msBackingStorePixelRatio ||
                            this.c.oBackingStorePixelRatio ||
                            this.c.backingStorePixelRatio || 1
                         );

            // detects relative width / height
            this.relativeWidth =  this.o.width % 1 !== 0
                                  && this.o.width.indexOf('%');
            this.relativeHeight = this.o.height % 1 !== 0
                                  && this.o.height.indexOf('%');
            this.relative = this.relativeWidth || this.relativeHeight;

            // computes size and carves the component
            this._carve();

            // prepares props for transaction
            if (this.v instanceof Object) {
                this.cv = {};
                this.copy(this.v, this.cv);
            } else {
                this.cv = this.v;
            }

            // binds configure event
            this.$
                .bind("configure", cf)
                .parent()
                .bind("configure", cf);

            // finalize init
            this._listen()
                ._configure()
                ._xy()
                .init();

            this.isInit = true;

            this.$.val(this.o.format(this.v));
            this._draw();

            return this;
        };

        this._carve = function() {
            if (this.relative) {
                var w = this.relativeWidth ?
                        this.$div.parent().width() *
                        parseInt(this.o.width) / 100
                        : this.$div.parent().width(),
                    h = this.relativeHeight ?
                        this.$div.parent().height() *
                        parseInt(this.o.height) / 100
                        : this.$div.parent().height();

                // apply relative
                this.w = this.h = Math.min(w, h);
            } else {
                this.w = this.o.width;
                this.h = this.o.height;
            }

            // finalize div
            this.$div.css({
                'width': this.w + 'px',
                'height': this.h + 'px'
            });

            // finalize canvas with computed width
            this.$c.attr({
                width: this.w,
                height: this.h
            });

            // scaling
            if (this.scale !== 1) {
                this.$c[0].width = this.$c[0].width * this.scale;
                this.$c[0].height = this.$c[0].height * this.scale;
                this.$c.width(this.w);
                this.$c.height(this.h);
            }

            return this;
        };

        this._draw = function () {

            // canvas pre-rendering
            var d = true;

            s.g = s.c;

            s.clear();

            s.dH && (d = s.dH());

            d !== false && s.draw();
        };

        this._touch = function (e) {
            var touchMove = function (e) {
                var v = s.xy2val(
                            e.originalEvent.touches[s.t].pageX,
                            e.originalEvent.touches[s.t].pageY
                        );

                if (v == s.cv) return;

                if (s.cH && s.cH(v) === false) return;

                s.change(s._validate(v));
                s._draw();
            };

            // get touches index
            this.t = k.c.t(e);

            // First touch
            touchMove(e);

            // Touch events listeners
            k.c.d
                .bind("touchmove.k", touchMove)
                .bind(
                    "touchend.k",
                    function () {
                        k.c.d.unbind('touchmove.k touchend.k');
                        s.val(s.cv);
                    }
                );

            return this;
        };

        this._mouse = function (e) {
            var mouseMove = function (e) {
                var v = s.xy2val(e.pageX, e.pageY);

                if (v == s.cv) return;

                if (s.cH && (s.cH(v) === false)) return;

                s.change(s._validate(v));
                s._draw();
            };

            // First click
            mouseMove(e);

            // Mouse events listeners
            k.c.d
                .bind("mousemove.k", mouseMove)
                .bind(
                    // Escape key cancel current change
                    "keyup.k",
                    function (e) {
                        if (e.keyCode === 27) {
                            k.c.d.unbind("mouseup.k mousemove.k keyup.k");

                            if (s.eH && s.eH() === false)
                                return;

                            s.cancel();
                        }
                    }
                )
                .bind(
                    "mouseup.k",
                    function (e) {
                        k.c.d.unbind('mousemove.k mouseup.k keyup.k');
                        s.val(s.cv);
                    }
                );

            return this;
        };

        this._xy = function () {
            var o = this.$c.offset();
            this.x = o.left;
            this.y = o.top;

            return this;
        };

        this._listen = function () {
            if (!this.o.readOnly) {
                this.$c
                    .bind(
                        "mousedown",
                        function (e) {
                            e.preventDefault();
                            s._xy()._mouse(e);
                        }
                    )
                    .bind(
                        "touchstart",
                        function (e) {
                            e.preventDefault();
                            s._xy()._touch(e);
                        }
                    );

                this.listen();
            } else {
                this.$.attr('readonly', 'readonly');
            }

            if (this.relative) {
                $(window).resize(function() {
                    s._carve().init();
                    s._draw();
                });
            }

            return this;
        };

        this._configure = function () {

            // Hooks
            if (this.o.draw) this.dH = this.o.draw;
            if (this.o.change) this.cH = this.o.change;
            if (this.o.cancel) this.eH = this.o.cancel;
            if (this.o.release) this.rH = this.o.release;

            if (this.o.displayPrevious) {
                this.pColor = this.h2rgba(this.o.fgColor, "0.4");
                this.fgColor = this.h2rgba(this.o.fgColor, "0.6");
            } else {
                this.fgColor = this.o.fgColor;
            }

            return this;
        };

        this._clear = function () {
            this.$c[0].width = this.$c[0].width;
        };

        this._validate = function (v) {
            var val = (~~ (((v < 0) ? -0.5 : 0.5) + (v/this.o.step))) * this.o.step;
            return Math.round(val * 100) / 100;
        };

        // Abstract methods
        this.listen = function () {}; // on start, one time
        this.extend = function () {}; // each time configure triggered
        this.init = function () {}; // each time configure triggered
        this.change = function (v) {}; // on change
        this.val = function (v) {}; // on release
        this.xy2val = function (x, y) {}; //
        this.draw = function () {}; // on change / on release
        this.clear = function () { this._clear(); };

        // Utils
        this.h2rgba = function (h, a) {
            var rgb;
            h = h.substring(1,7);
            rgb = [
                parseInt(h.substring(0,2), 16),
                parseInt(h.substring(2,4), 16),
                parseInt(h.substring(4,6), 16)
            ];

            return "rgba(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + "," + a + ")";
        };

        this.copy = function (f, t) {
            for (var i in f) {
                t[i] = f[i];
            }
        };
    };


    /**
     * k.Dial
     */
    k.Dial = function () {
        k.o.call(this);

        this.startAngle = null;
        this.xy = null;
        this.radius = null;
        this.lineWidth = null;
        this.cursorExt = null;
        this.w2 = null;
        this.PI2 = 2*Math.PI;

        this.extend = function () {
            this.o = $.extend({
                bgColor: this.$.data('bgcolor') || '#EEEEEE',
                angleOffset: this.$.data('angleoffset') || 0,
                angleArc: this.$.data('anglearc') || 360,
                inline: true
            }, this.o);
        };

        this.val = function (v, triggerRelease) {
            if (null != v) {

                // reverse format
                v = this.o.parse(v);

                if (triggerRelease !== false
                    && v != this.v
                    && this.rH
                    && this.rH(v) === false) { return; }

                this.cv = this.o.stopper ? max(min(v, this.o.max), this.o.min) : v;
                this.v = this.cv;
                this.$.val(this.o.format(this.v));
                this._draw();
            } else {
                return this.v;
            }
        };

        this.xy2val = function (x, y) {
            var a, ret;

            a = Math.atan2(
                        x - (this.x + this.w2),
                        - (y - this.y - this.w2)
                    ) - this.angleOffset;

            if (this.o.flip) {
                a = this.angleArc - a - this.PI2;
            }

            if (this.angleArc != this.PI2 && (a < 0) && (a > -0.5)) {

                // if isset angleArc option, set to min if .5 under min
                a = 0;
            } else if (a < 0) {
                a += this.PI2;
            }

            ret = (a * (this.o.max - this.o.min) / this.angleArc) + this.o.min;

            this.o.stopper && (ret = max(min(ret, this.o.max), this.o.min));

            return ret;
        };

        this.listen = function () {

            // bind MouseWheel
            var s = this, mwTimerStop,
                mwTimerRelease,
                mw = function (e) {
                    e.preventDefault();

                    var ori = e.originalEvent,
                        deltaX = ori.detail || ori.wheelDeltaX,
                        deltaY = ori.detail || ori.wheelDeltaY,
                        v = s._validate(s.o.parse(s.$.val()))
                            + (
                                deltaX > 0 || deltaY > 0
                                ? s.o.step
                                : deltaX < 0 || deltaY < 0 ? -s.o.step : 0
                              );

                    v = max(min(v, s.o.max), s.o.min);

                    s.val(v, false);

                    if (s.rH) {
                        // Handle mousewheel stop
                        clearTimeout(mwTimerStop);
                        mwTimerStop = setTimeout(function () {
                            s.rH(v);
                            mwTimerStop = null;
                        }, 100);

                        // Handle mousewheel releases
                        if (!mwTimerRelease) {
                            mwTimerRelease = setTimeout(function () {
                                if (mwTimerStop)
                                    s.rH(v);
                                mwTimerRelease = null;
                            }, 200);
                        }
                    }
                },
                kval,
                to,
                m = 1,
                kv = {
                    37: -s.o.step,
                    38: s.o.step,
                    39: s.o.step,
                    40: -s.o.step
                };

            this.$
                .bind(
                    "keydown",
                    function (e) {
                        var kc = e.keyCode;

                        // numpad support
                        if (kc >= 96 && kc <= 105) {
                            kc = e.keyCode = kc - 48;
                        }

                        kval = parseInt(String.fromCharCode(kc));

                        if (isNaN(kval)) {
                            (kc !== 13)                     // enter
                            && kc !== 8                     // bs
                            && kc !== 9                     // tab
                            && kc !== 189                   // -
                            && (kc !== 190
                                || s.$.val().match(/\./))   // . allowed once
                            && e.preventDefault();

                            // arrows
                            if ($.inArray(kc,[37,38,39,40]) > -1) {
                                e.preventDefault();

                                var v = s.o.parse(s.$.val()) + kv[kc] * m;
                                s.o.stopper && (v = max(min(v, s.o.max), s.o.min));

                                s.change(s._validate(v));
                                s._draw();

                                // long time keydown speed-up
                                to = window.setTimeout(function () {
                                    m *= 2;
                                }, 30);
                            }
                        }
                    }
                )
                .bind(
                    "keyup",
                    function (e) {
                        if (isNaN(kval)) {
                            if (to) {
                                window.clearTimeout(to);
                                to = null;
                                m = 1;
                                s.val(s.$.val());
                            }
                        } else {
                            // kval postcond
                            (s.$.val() > s.o.max && s.$.val(s.o.max))
                            || (s.$.val() < s.o.min && s.$.val(s.o.min));
                        }
                    }
                );

            this.$c.bind("mousewheel DOMMouseScroll", mw);
            this.$.bind("mousewheel DOMMouseScroll", mw);
        };

        this.init = function () {
            if (this.v < this.o.min
                || this.v > this.o.max) { this.v = this.o.min; }

            this.$.val(this.v);
            this.w2 = this.w / 2;
            this.cursorExt = this.o.cursor / 100;
            this.xy = this.w2 * this.scale;
            this.lineWidth = this.xy * this.o.thickness;
            this.lineCap = this.o.lineCap;
            this.radius = this.xy - this.lineWidth / 2;

            this.o.angleOffset
            && (this.o.angleOffset = isNaN(this.o.angleOffset) ? 0 : this.o.angleOffset);

            this.o.angleArc
            && (this.o.angleArc = isNaN(this.o.angleArc) ? this.PI2 : this.o.angleArc);

            // deg to rad
            this.angleOffset = this.o.angleOffset * Math.PI / 180;
            this.angleArc = this.o.angleArc * Math.PI / 180;

            // compute start and end angles
            this.startAngle = 1.5 * Math.PI + this.angleOffset;
            this.endAngle = 1.5 * Math.PI + this.angleOffset + this.angleArc;

            var s = max(
                String(Math.abs(this.o.max)).length,
                String(Math.abs(this.o.min)).length,
                2
            ) + 2;

            this.o.displayInput
                && this.i.css({
                        'width' : ((this.w / 2 + 4) >> 0) + 'px',
                        'height' : ((this.w / 3) >> 0) + 'px',
                        'position' : 'absolute',
                        'vertical-align' : 'middle',
                        'margin-top' : ((this.w / 3) >> 0) + 'px',
                        'margin-left' : '-' + ((this.w * 3 / 4 + 2) >> 0) + 'px',
                        'border' : 0,
                        'background' : 'none',
                        'font' : this.o.fontWeight + ' ' + ((this.w / s) >> 0) + 'px ' + this.o.font,
                        'text-align' : 'center',
                        'color' : this.o.inputColor || this.o.fgColor,
                        'padding' : '0px',
                        '-webkit-appearance': 'none'
                        }) || this.i.css({
                            'width': '0px',
                            'visibility': 'hidden'
                        });
        };

        this.change = function (v) {
            this.cv = v;
            this.$.val(this.o.format(v));
        };

        this.angle = function (v) {
            return (v - this.o.min) * this.angleArc / (this.o.max - this.o.min);
        };

        this.arc = function (v) {
          var sa, ea;
          v = this.angle(v);
          if (this.o.flip) {
              sa = this.endAngle + 0.00001;
              ea = sa - v - 0.00001;
          } else {
              sa = this.startAngle - 0.00001;
              ea = sa + v + 0.00001;
          }
          this.o.cursor
              && (sa = ea - this.cursorExt)
              && (ea = ea + this.cursorExt);

          return {
              s: sa,
              e: ea,
              d: this.o.flip && !this.o.cursor
          };
        };

        this.draw = function () {
            var c = this.g,                 // context
                a = this.arc(this.cv),      // Arc
                pa,                         // Previous arc
                r = 1;

            c.lineWidth = this.lineWidth;
            c.lineCap = this.lineCap;

            if (this.o.bgColor !== "none") {
                c.beginPath();
                    c.strokeStyle = this.o.bgColor;
                    c.arc(this.xy, this.xy, this.radius, this.endAngle - 0.00001, this.startAngle + 0.00001, true);
                c.stroke();
            }

            if (this.o.displayPrevious) {
                pa = this.arc(this.v);
                c.beginPath();
                c.strokeStyle = this.pColor;
                c.arc(this.xy, this.xy, this.radius, pa.s, pa.e, pa.d);
                c.stroke();
                r = this.cv == this.v;
            }

            c.beginPath();
            c.strokeStyle = r ? this.o.fgColor : this.fgColor ;
            c.arc(this.xy, this.xy, this.radius, a.s, a.e, a.d);
            c.stroke();
        };

        this.cancel = function () {
            this.val(this.v);
        };
    };

    $.fn.dial = $.fn.knob = function (o) {
        return this.each(
            function () {
                var d = new k.Dial();
                d.o = o;
                d.$ = $(this);
                d.run();
            }
        ).parent();
    };

}));


/***/ }),

/***/ "./src/js/plugins/wavesurfer.minimap.js":
/*!**********************************************!*\
  !*** ./src/js/plugins/wavesurfer.minimap.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "localhost:8080/dist/plugin/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @typedef {Object} MinimapPluginParams
 * @desc Extends the `WavesurferParams` wavesurfer was initialised with
 * @property {?string|HTMLElement} container CSS selector or HTML element where
 * the ELAN information should be renderer. By default it is simply appended
 * after the waveform.
 * @property {?boolean} deferInit Set to true to manually call
 * `initPlugin('minimap')`
 */

/**
 * Renders a smaller version waveform as a minimap of the main waveform.
 *
 * @implements {PluginClass}
 * @extends {Observer}
 * @example
 * // es6
 * import MinimapPlugin from 'wavesurfer.minimap.js';
 *
 * // commonjs
 * var MinimapPlugin = require('wavesurfer.minimap.js');
 *
 * // if you are using <script> tags
 * var MinimapPlugin = window.WaveSurfer.minimap;
 *
 * // ... initialising wavesurfer with the plugin
 * var wavesurfer = WaveSurfer.create({
 *   // wavesurfer options ...
 *   plugins: [
 *     MinimapPlugin.create({
 *       // plugin options ...
 *     })
 *   ]
 * });
 */
var MinimapPlugin = function () {
    _createClass(MinimapPlugin, null, [{
        key: 'create',

        /**
         * Minimap plugin definition factory
         *
         * This function must be used to create a plugin definition which can be
         * used by wavesurfer to correctly instantiate the plugin.
         *
         * @param  {MinimapPluginParams} params parameters use to initialise the plugin
         * @return {PluginDefinition} an object representing the plugin
         */
        value: function create(params) {
            return {
                name: 'minimap',
                deferInit: params && params.deferInit ? params.deferInit : false,
                params: params,
                staticProps: {
                    initMinimap: function initMinimap(customConfig) {
                        console.warn('Deprecated initMinimap!');
                        params = customConfig;
                        this.initPlugins('minimap');
                    }
                },
                instance: MinimapPlugin
            };
        }
    }]);

    function MinimapPlugin(params, ws) {
        var _this = this;

        _classCallCheck(this, MinimapPlugin);

        this.params = ws.util.extend({}, ws.params, {
            showRegions: false,
            showOverview: false,
            overviewBorderColor: 'green',
            overviewBorderSize: 2,
            // the container should be different
            container: false,
            height: Math.max(Math.round(ws.params.height / 4), 20)
        }, params, {
            scrollParent: false,
            fillParent: true
        });
        // if container is a selector, get the element
        if (typeof params.container === 'string') {
            var el = document.querySelector(params.container);
            if (!el) {
                console.warn('Wavesurfer minimap container ' + params.container + ' was not found! The minimap will be automatically appended below the waveform.');
            }
            this.params.container = el;
        }
        // if no container is specified add a new element and insert it
        if (!params.container) {
            this.params.container = ws.util.style(document.createElement('minimap'), {
                display: 'block'
            });
        }
        this.drawer = new ws.Drawer(this.params.container, this.params);
        this.wavesurfer = ws;
        this.util = ws.util;
        /**
         * Minimap needs to register to ready and waveform-ready events to
         * work with MediaElement, the time when ready is called is different
         * (peaks can not be got)
         *
         * @type {string}
         * @see https://github.com/katspaugh/wavesurfer.js/issues/736
         */
        this.renderEvent = ws.params.backend === 'MediaElement' ? 'waveform-ready' : 'ready';
        this.overviewRegion = null;

        this.drawer.createWrapper();
        this.createElements();
        var isInitialised = false;

        // ws ready event listener
        this._onShouldRender = function () {
            // only bind the events in the first run
            if (!isInitialised) {
                _this.bindWavesurferEvents();
                _this.bindMinimapEvents();
                isInitialised = true;
            }
            // if there is no such element, append it to the container (below
            // the waveform)
            if (!document.body.contains(_this.params.container)) {
                ws.container.insertBefore(_this.params.container, null);
            }

            if (_this.wavesurfer.regions && _this.params.showRegions) {
                _this.regions();
            }
            _this.render();
        };

        this._onAudioprocess = function (currentTime) {
            _this.drawer.progress(_this.wavesurfer.backend.getPlayedPercents());
        };

        // ws seek event listener
        this._onSeek = function () {
            return _this.drawer.progress(ws.backend.getPlayedPercents());
        };

        // event listeners for the overview region
        this._onScroll = function (e) {
            if (!_this.draggingOverview) {
                _this.moveOverviewRegion(e.target.scrollLeft / _this.ratio);
            }
        };
        this._onMouseover = function (e) {
            if (_this.draggingOverview) {
                _this.draggingOverview = false;
            }
        };
        var prevWidth = 0;
        this._onResize = ws.util.debounce(function () {
            if (prevWidth != _this.drawer.wrapper.clientWidth) {
                prevWidth = _this.drawer.wrapper.clientWidth;
                _this.render();
                _this.drawer.progress(_this.wavesurfer.backend.getPlayedPercents());
            }
        });
    }

    _createClass(MinimapPlugin, [{
        key: 'init',
        value: function init() {
            if (this.wavesurfer.isReady) {
                this._onShouldRender();
            }
            this.wavesurfer.on(this.renderEvent, this._onShouldRender);
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            window.removeEventListener('resize', this._onResize, true);
            window.removeEventListener('orientationchange', this._onResize, true);
            this.wavesurfer.drawer.wrapper.removeEventListener('mouseover', this._onMouseover);
            this.wavesurfer.un(this.renderEvent, this._onShouldRender);
            this.wavesurfer.un('seek', this._onSeek);
            this.wavesurfer.un('scroll', this._onScroll);
            this.wavesurfer.un('audioprocess', this._onAudioprocess);
            this.drawer.destroy();
            this.overviewRegion = null;
            this.unAll();
        }
    }, {
        key: 'regions',
        value: function regions() {
            var _this2 = this;

            this.regions = {};

            this.wavesurfer.on('region-created', function (region) {
                _this2.regions[region.id] = region;
                _this2.renderRegions();
            });

            this.wavesurfer.on('region-updated', function (region) {
                _this2.regions[region.id] = region;
                _this2.renderRegions();
            });

            this.wavesurfer.on('region-removed', function (region) {
                delete _this2.regions[region.id];
                _this2.renderRegions();
            });
        }
    }, {
        key: 'renderRegions',
        value: function renderRegions() {
            var _this3 = this;

            var regionElements = this.drawer.wrapper.querySelectorAll('region');
            var i = void 0;
            for (i = 0; i < regionElements.length; ++i) {
                this.drawer.wrapper.removeChild(regionElements[i]);
            }

            Object.keys(this.regions).forEach(function (id) {
                var region = _this3.regions[id];
                var width = _this3.drawer.width * ((region.end - region.start) / _this3.wavesurfer.getDuration());
                var left = _this3.drawer.width * (region.start / _this3.wavesurfer.getDuration());
                var regionElement = _this3.util.style(document.createElement('region'), {
                    height: 'inherit',
                    backgroundColor: region.color,
                    width: width + 'px',
                    left: left + 'px',
                    display: 'block',
                    position: 'absolute'
                });
                regionElement.classList.add(id);
                _this3.drawer.wrapper.appendChild(regionElement);
            });
        }
    }, {
        key: 'createElements',
        value: function createElements() {
            this.drawer.createElements();
            if (this.params.showOverview) {
                this.overviewRegion = this.util.style(document.createElement('overview'), {
                    height: this.drawer.wrapper.offsetHeight - this.params.overviewBorderSize * 2 + 'px',
                    width: '0px',
                    display: 'block',
                    position: 'absolute',
                    cursor: 'move',
                    border: this.params.overviewBorderSize + 'px solid ' + this.params.overviewBorderColor,
                    zIndex: 2,
                    opacity: this.params.overviewOpacity
                });
                this.drawer.wrapper.appendChild(this.overviewRegion);
            }
        }
    }, {
        key: 'bindWavesurferEvents',
        value: function bindWavesurferEvents() {
            window.addEventListener('resize', this._onResize, true);
            window.addEventListener('orientationchange', this._onResize, true);
            this.wavesurfer.on('audioprocess', this._onAudioprocess);
            this.wavesurfer.on('seek', this._onSeek);
            if (this.params.showOverview) {
                this.wavesurfer.on('scroll', this._onScroll);
                this.wavesurfer.drawer.wrapper.addEventListener('mouseover', this._onMouseover);
            }
        }
    }, {
        key: 'bindMinimapEvents',
        value: function bindMinimapEvents() {
            var _this4 = this;

            var positionMouseDown = {
                clientX: 0,
                clientY: 0
            };
            var relativePositionX = 0;
            var seek = true;

            // the following event listeners will be destroyed by using
            // this.unAll() and nullifying the DOM node references after
            // removing them
            if (this.params.interact) {
                this.drawer.wrapper.addEventListener('click', function (event) {
                    _this4.fireEvent('click', event, _this4.drawer.handleEvent(event));
                });

                this.on('click', function (event, position) {
                    if (seek) {
                        _this4.drawer.progress(position);
                        _this4.wavesurfer.seekAndCenter(position);
                    } else {
                        seek = true;
                    }
                });
            }

            if (this.params.showOverview) {
                this.overviewRegion.addEventListener('mousedown', function (event) {
                    _this4.draggingOverview = true;
                    relativePositionX = event.layerX;
                    positionMouseDown.clientX = event.clientX;
                    positionMouseDown.clientY = event.clientY;
                });

                this.drawer.wrapper.addEventListener('mousemove', function (event) {
                    if (_this4.draggingOverview) {
                        _this4.moveOverviewRegion(event.clientX - _this4.drawer.container.getBoundingClientRect().left - relativePositionX);
                    }
                });

                this.drawer.wrapper.addEventListener('mouseup', function (event) {
                    if (positionMouseDown.clientX - event.clientX === 0 && positionMouseDown.clientX - event.clientX === 0) {
                        seek = true;
                        _this4.draggingOverview = false;
                    } else if (_this4.draggingOverview) {
                        seek = false;
                        _this4.draggingOverview = false;
                    }
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var len = this.drawer.getWidth();
            var peaks = this.wavesurfer.backend.getPeaks(len, 0, len);
            this.drawer.drawPeaks(peaks, len, 0, len);
            this.drawer.progress(this.wavesurfer.backend.getPlayedPercents());

            if (this.params.showOverview) {
                //get proportional width of overview region considering the respective
                //width of the drawers
                this.ratio = this.wavesurfer.drawer.width / this.drawer.width;
                this.waveShowedWidth = this.wavesurfer.drawer.width / this.ratio;
                this.waveWidth = this.wavesurfer.drawer.width;
                this.overviewWidth = this.drawer.width / this.ratio;
                this.overviewPosition = 0;
                this.moveOverviewRegion(this.wavesurfer.drawer.wrapper.scrollLeft / this.ratio);
                this.overviewRegion.style.width = this.overviewWidth - this.params.overviewBorderSize * 2 + 'px';
            }
        }
    }, {
        key: 'moveOverviewRegion',
        value: function moveOverviewRegion(pixels) {
            if (pixels < 0) {
                this.overviewPosition = 0;
            } else if (pixels + this.overviewWidth < this.drawer.width) {
                this.overviewPosition = pixels;
            } else {
                this.overviewPosition = this.drawer.width - this.overviewWidth;
            }
            this.overviewRegion.style.left = this.overviewPosition + 'px';
            if (this.draggingOverview) {
                this.wavesurfer.drawer.wrapper.scrollLeft = this.overviewPosition * this.ratio;
            }
        }
    }]);

    return MinimapPlugin;
}();

exports.default = MinimapPlugin;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=wavesurfer.minimap.js.map

/***/ }),

/***/ "./src/js/plugins/wavesurfer.regions.js":
/*!**********************************************!*\
  !*** ./src/js/plugins/wavesurfer.regions.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "localhost:8080/dist/plugin/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * (Single) Region plugin class
 *
 * Must be turned into an observer before instantiating. This is done in
 * RegionsPlugin (main plugin class)
 *
 * @extends {Observer}
 */
var Region = function () {
    function Region(params, ws) {
        var _this = this;

        _classCallCheck(this, Region);

        this.wavesurfer = ws;
        this.wrapper = ws.drawer.wrapper;
        this.style = ws.util.style;

        this.id = params.id == null ? ws.util.getId() : params.id;
        this.start = Number(params.start) || 0;
        this.end = params.end == null ? // small marker-like region
        this.start + 4 / this.wrapper.scrollWidth * this.wavesurfer.getDuration() : Number(params.end);
        this.resize = params.resize === undefined ? true : Boolean(params.resize);
        this.drag = params.drag === undefined ? true : Boolean(params.drag);
        this.loop = Boolean(params.loop);
        this.color = params.color || 'rgba(0, 0, 0, 0.1)';
        this.data = params.data || {};
        this.attributes = params.attributes || {};

        this.maxLength = params.maxLength;
        this.minLength = params.minLength;
        this._onRedraw = function () {
            return _this.updateRender();
        };

        this.scroll = params.scroll !== false && ws.params.scrollParent;
        this.scrollSpeed = params.scrollSpeed || 1;
        this.scrollThreshold = params.scrollThreshold || 10;

        this.bindInOut();
        this.render();
        this.wavesurfer.on('zoom', this._onRedraw);
        this.wavesurfer.on('redraw', this._onRedraw);
        this.wavesurfer.fireEvent('region-created', this);
    }

    /* Update region params. */


    _createClass(Region, [{
        key: 'update',
        value: function update(params) {
            if (null != params.start) {
                this.start = Number(params.start);
            }
            if (null != params.end) {
                this.end = Number(params.end);
            }
            if (null != params.loop) {
                this.loop = Boolean(params.loop);
            }
            if (null != params.color) {
                this.color = params.color;
            }
            if (null != params.data) {
                this.data = params.data;
            }
            if (null != params.resize) {
                this.resize = Boolean(params.resize);
            }
            if (null != params.drag) {
                this.drag = Boolean(params.drag);
            }
            if (null != params.maxLength) {
                this.maxLength = Number(params.maxLength);
            }
            if (null != params.minLength) {
                this.minLength = Number(params.minLength);
            }
            if (null != params.attributes) {
                this.attributes = params.attributes;
            }

            this.updateRender();
            this.fireEvent('update');
            this.wavesurfer.fireEvent('region-updated', this);
        }

        /* Remove a single region. */

    }, {
        key: 'remove',
        value: function remove() {
            if (this.element) {
                this.wrapper.removeChild(this.element);
                this.element = null;
                this.fireEvent('remove');
                this.wavesurfer.un('zoom', this._onRedraw);
                this.wavesurfer.un('redraw', this._onRedraw);
                this.wavesurfer.fireEvent('region-removed', this);
            }
        }

        /* Play the audio region. */

    }, {
        key: 'play',
        value: function play() {
            this.wavesurfer.play(this.start, this.end);
            this.fireEvent('play');
            this.wavesurfer.fireEvent('region-play', this);
        }

        /* Play the region in loop. */

    }, {
        key: 'playLoop',
        value: function playLoop() {
            var _this2 = this;

            this.play();
            this.once('out', function () {
                return _this2.playLoop();
            });
        }

        /* Render a region as a DOM element. */

    }, {
        key: 'render',
        value: function render() {
            var regionEl = document.createElement('region');
            regionEl.className = 'wavesurfer-region';
            regionEl.title = this.formatTime(this.start, this.end);
            regionEl.setAttribute('data-id', this.id);

            for (var attrname in this.attributes) {
                regionEl.setAttribute('data-region-' + attrname, this.attributes[attrname]);
            }

            var width = this.wrapper.scrollWidth;
            this.style(regionEl, {
                position: 'absolute',
                zIndex: 2,
                height: '100%',
                top: '0px'
            });

            /* Resize handles */
            if (this.resize) {
                var handleLeft = regionEl.appendChild(document.createElement('handle'));
                var handleRight = regionEl.appendChild(document.createElement('handle'));
                handleLeft.className = 'wavesurfer-handle wavesurfer-handle-start';
                handleRight.className = 'wavesurfer-handle wavesurfer-handle-end';
                var css = {
                    cursor: 'col-resize',
                    position: 'absolute',
                    left: '0px',
                    top: '0px',
                    width: '1%',
                    maxWidth: '4px',
                    height: '100%'
                };
                this.style(handleLeft, css);
                this.style(handleRight, css);
                this.style(handleRight, {
                    left: '100%'
                });
            }

            this.element = this.wrapper.appendChild(regionEl);
            this.updateRender();
            this.bindEvents(regionEl);
        }
    }, {
        key: 'formatTime',
        value: function formatTime(start, end) {
            return (start == end ? [start] : [start, end]).map(function (time) {
                return [Math.floor(time % 3600 / 60), // minutes
                ('00' + Math.floor(time % 60)).slice(-2) // seconds
                ].join(':');
            }).join('-');
        }
    }, {
        key: 'getWidth',
        value: function getWidth() {
            return this.wavesurfer.drawer.width / this.wavesurfer.params.pixelRatio;
        }

        /* Update element's position, width, color. */

    }, {
        key: 'updateRender',
        value: function updateRender() {
            var dur = this.wavesurfer.getDuration();
            var width = this.getWidth();

            if (this.start < 0) {
                this.start = 0;
                this.end = this.end - this.start;
            }
            if (this.end > dur) {
                this.end = dur;
                this.start = dur - (this.end - this.start);
            }

            if (this.minLength != null) {
                this.end = Math.max(this.start + this.minLength, this.end);
            }

            if (this.maxLength != null) {
                this.end = Math.min(this.start + this.maxLength, this.end);
            }

            if (this.element != null) {
                // Calculate the left and width values of the region such that
                // no gaps appear between regions.
                var left = Math.round(this.start / dur * width);
                var regionWidth = Math.round(this.end / dur * width) - left;

                this.style(this.element, {
                    left: left + 'px',
                    width: regionWidth + 'px',
                    backgroundColor: this.color,
                    cursor: this.drag ? 'move' : 'default'
                });

                for (var attrname in this.attributes) {
                    this.element.setAttribute('data-region-' + attrname, this.attributes[attrname]);
                }

                this.element.title = this.formatTime(this.start, this.end);
            }
        }

        /* Bind audio events. */

    }, {
        key: 'bindInOut',
        value: function bindInOut() {
            var _this3 = this;

            this.firedIn = false;
            this.firedOut = false;

            var onProcess = function onProcess(time) {
                if (!_this3.firedOut && _this3.firedIn && (_this3.start >= Math.round(time * 100) / 100 || _this3.end <= Math.round(time * 100) / 100)) {
                    _this3.firedOut = true;
                    _this3.firedIn = false;
                    _this3.fireEvent('out');
                    _this3.wavesurfer.fireEvent('region-out', _this3);
                }
                if (!_this3.firedIn && _this3.start <= time && _this3.end > time) {
                    _this3.firedIn = true;
                    _this3.firedOut = false;
                    _this3.fireEvent('in');
                    _this3.wavesurfer.fireEvent('region-in', _this3);
                }
            };

            this.wavesurfer.backend.on('audioprocess', onProcess);

            this.on('remove', function () {
                _this3.wavesurfer.backend.un('audioprocess', onProcess);
            });

            /* Loop playback. */
            this.on('out', function () {
                if (_this3.loop) {
                    _this3.wavesurfer.play(_this3.start);
                }
            });
        }

        /* Bind DOM events. */

    }, {
        key: 'bindEvents',
        value: function bindEvents() {
            var _this4 = this;

            this.element.addEventListener('mouseenter', function (e) {
                _this4.fireEvent('mouseenter', e);
                _this4.wavesurfer.fireEvent('region-mouseenter', _this4, e);
            });

            this.element.addEventListener('mouseleave', function (e) {
                _this4.fireEvent('mouseleave', e);
                _this4.wavesurfer.fireEvent('region-mouseleave', _this4, e);
            });

            this.element.addEventListener('click', function (e) {
                e.preventDefault();
                _this4.fireEvent('click', e);
                _this4.wavesurfer.fireEvent('region-click', _this4, e);
            });

            this.element.addEventListener('dblclick', function (e) {
                e.stopPropagation();
                e.preventDefault();
                _this4.fireEvent('dblclick', e);
                _this4.wavesurfer.fireEvent('region-dblclick', _this4, e);
            });

            /* Drag or resize on mousemove. */
            (this.drag || this.resize) && function () {
                var container = _this4.wavesurfer.drawer.container;
                var duration = _this4.wavesurfer.getDuration();
                var scrollSpeed = _this4.scrollSpeed;
                var scrollThreshold = _this4.scrollThreshold;
                var startTime = void 0;
                var touchId = void 0;
                var drag = void 0;
                var maxScroll = void 0;
                var resize = void 0;
                var scrollDirection = void 0;
                var wrapperRect = void 0;

                // Scroll when the user is dragging within the threshold
                var edgeScroll = function edgeScroll(e) {
                    if (!scrollDirection || !drag && !resize) {
                        return;
                    }

                    // Update scroll position
                    var scrollLeft = _this4.wrapper.scrollLeft + scrollSpeed * scrollDirection;
                    _this4.wrapper.scrollLeft = scrollLeft = Math.min(maxScroll, Math.max(0, scrollLeft));

                    // Update time
                    var time = _this4.wavesurfer.drawer.handleEvent(e) * duration;
                    var delta = time - startTime;
                    startTime = time;

                    // Continue dragging or resizing
                    drag ? _this4.onDrag(delta) : _this4.onResize(delta, resize);

                    // Repeat
                    window.requestAnimationFrame(function () {
                        edgeScroll(e);
                    });
                };

                var onDown = function onDown(e) {
                    if (e.touches && e.touches.length > 1) {
                        return;
                    }
                    touchId = e.targetTouches ? e.targetTouches[0].identifier : null;

                    e.stopPropagation();
                    startTime = _this4.wavesurfer.drawer.handleEvent(e, true) * duration;

                    // Store for scroll calculations
                    maxScroll = _this4.wrapper.scrollWidth - _this4.wrapper.clientWidth;
                    wrapperRect = _this4.wrapper.getBoundingClientRect();

                    if (e.target.tagName.toLowerCase() == 'handle') {
                        if (e.target.classList.contains('wavesurfer-handle-start')) {
                            resize = 'start';
                        } else {
                            resize = 'end';
                        }
                    } else {
                        drag = true;
                        resize = false;
                    }
                };
                var onUp = function onUp(e) {
                    if (e.touches && e.touches.length > 1) {
                        return;
                    }

                    if (drag || resize) {
                        drag = false;
                        scrollDirection = null;
                        resize = false;

                        _this4.fireEvent('update-end', e);
                        _this4.wavesurfer.fireEvent('region-update-end', _this4, e);
                    }
                };
                var onMove = function onMove(e) {
                    if (e.touches && e.touches.length > 1) {
                        return;
                    }
                    if (e.targetTouches && e.targetTouches[0].identifier != touchId) {
                        return;
                    }

                    if (drag || resize) {
                        var oldTime = startTime;
                        var time = _this4.wavesurfer.drawer.handleEvent(e) * duration;
                        var delta = time - startTime;
                        startTime = time;

                        // Drag
                        if (_this4.drag && drag) {
                            _this4.onDrag(delta);
                        }

                        // Resize
                        if (_this4.resize && resize) {
                            _this4.onResize(delta, resize);
                        }

                        if (_this4.scroll && container.clientWidth < _this4.wrapper.scrollWidth) {
                            if (drag) {
                                // The threshold is not between the mouse and the container edge
                                // but is between the region and the container edge
                                var regionRect = _this4.element.getBoundingClientRect();
                                var x = regionRect.left - wrapperRect.left;

                                // Check direction
                                if (time < oldTime && x >= 0) {
                                    scrollDirection = -1;
                                } else if (time > oldTime && x + regionRect.width <= wrapperRect.right) {
                                    scrollDirection = 1;
                                }

                                // Check that we are still beyond the threshold
                                if (scrollDirection === -1 && x > scrollThreshold || scrollDirection === 1 && x + regionRect.width < wrapperRect.right - scrollThreshold) {
                                    scrollDirection = null;
                                }
                            } else {
                                // Mouse based threshold
                                var _x = e.clientX - wrapperRect.left;

                                // Check direction
                                if (_x <= scrollThreshold) {
                                    scrollDirection = -1;
                                } else if (_x >= wrapperRect.right - scrollThreshold) {
                                    scrollDirection = 1;
                                } else {
                                    scrollDirection = null;
                                }
                            }

                            scrollDirection && edgeScroll(e);
                        }
                    }
                };

                _this4.element.addEventListener('mousedown', onDown);
                _this4.element.addEventListener('touchstart', onDown);

                _this4.wrapper.addEventListener('mousemove', onMove);
                _this4.wrapper.addEventListener('touchmove', onMove);

                document.body.addEventListener('mouseup', onUp);
                document.body.addEventListener('touchend', onUp);

                _this4.on('remove', function () {
                    document.body.removeEventListener('mouseup', onUp);
                    document.body.removeEventListener('touchend', onUp);
                    _this4.wrapper.removeEventListener('mousemove', onMove);
                    _this4.wrapper.removeEventListener('touchmove', onMove);
                });

                _this4.wavesurfer.on('destroy', function () {
                    document.body.removeEventListener('mouseup', onUp);
                    document.body.removeEventListener('touchend', onUp);
                });
            }();
        }
    }, {
        key: 'onDrag',
        value: function onDrag(delta) {
            var maxEnd = this.wavesurfer.getDuration();
            if (this.end + delta > maxEnd || this.start + delta < 0) {
                return;
            }

            this.update({
                start: this.start + delta,
                end: this.end + delta
            });
        }
    }, {
        key: 'onResize',
        value: function onResize(delta, direction) {
            if (direction == 'start') {
                this.update({
                    start: Math.min(this.start + delta, this.end),
                    end: Math.max(this.start + delta, this.end)
                });
            } else {
                this.update({
                    start: Math.min(this.end + delta, this.start),
                    end: Math.max(this.end + delta, this.start)
                });
            }
        }
    }]);

    return Region;
}();

/**
 * @typedef {Object} RegionsPluginParams
 * @property {?boolean} dragSelection Enable creating regions by dragging wih
 * the mouse
 * @property {?RegionParams[]} regions Regions that should be added upon
 * initialisation
 * @property {number} slop=2 The sensitivity of the mouse dragging
 * @property {?boolean} deferInit Set to true to manually call
 * `initPlugin('regions')`
 */

/**
 * @typedef {Object} RegionParams
 * @desc The parameters used to describe a region.
 * @example wavesurfer.addRegion(regionParams);
 * @property {string} id=→random The id of the region
 * @property {number} start=0 The start position of the region (in seconds).
 * @property {number} end=0 The end position of the region (in seconds).
 * @property {?boolean} loop Whether to loop the region when played back.
 * @property {boolean} drag=true Allow/dissallow dragging the region.
 * @property {boolean} resize=true Allow/dissallow resizing the region.
 * @property {string} [color='rgba(0, 0, 0, 0.1)'] HTML color code.
 */

/**
 * Regions are visual overlays on waveform that can be used to play and loop
 * portions of audio. Regions can be dragged and resized.
 *
 * Visual customization is possible via CSS (using the selectors
 * `.wavesurfer-region` and `.wavesurfer-handle`).
 *
 * @implements {PluginClass}
 * @extends {Observer}
 *
 * @example
 * // es6
 * import RegionsPlugin from 'wavesurfer.regions.js';
 *
 * // commonjs
 * var RegionsPlugin = require('wavesurfer.regions.js');
 *
 * // if you are using <script> tags
 * var RegionsPlugin = window.WaveSurfer.regions;
 *
 * // ... initialising wavesurfer with the plugin
 * var wavesurfer = WaveSurfer.create({
 *   // wavesurfer options ...
 *   plugins: [
 *     RegionsPlugin.create({
 *       // plugin options ...
 *     })
 *   ]
 * });
 */


var RegionsPlugin = function () {
    _createClass(RegionsPlugin, null, [{
        key: 'create',

        /**
         * Regions plugin definition factory
         *
         * This function must be used to create a plugin definition which can be
         * used by wavesurfer to correctly instantiate the plugin.
         *
         * @param {RegionsPluginParams} params parameters use to initialise the plugin
         * @return {PluginDefinition} an object representing the plugin
         */
        value: function create(params) {
            return {
                name: 'regions',
                deferInit: params && params.deferInit ? params.deferInit : false,
                params: params,
                staticProps: {
                    initRegions: function initRegions() {
                        console.warn('Deprecated initRegions! Use wavesurfer.initPlugins("regions") instead!');
                        this.initPlugin('regions');
                    },
                    addRegion: function addRegion(options) {
                        if (!this.initialisedPluginList.regions) {
                            this.initPlugin('regions');
                        }
                        return this.regions.add(options);
                    },
                    clearRegions: function clearRegions() {
                        this.regions && this.regions.clear();
                    },
                    enableDragSelection: function enableDragSelection(options) {
                        if (!this.initialisedPluginList.regions) {
                            this.initPlugin('regions');
                        }
                        this.regions.enableDragSelection(options);
                    },
                    disableDragSelection: function disableDragSelection() {
                        this.regions.disableDragSelection();
                    }
                },
                instance: RegionsPlugin
            };
        }
    }]);

    function RegionsPlugin(params, ws) {
        var _this5 = this;

        _classCallCheck(this, RegionsPlugin);

        this.params = params;
        this.wavesurfer = ws;
        this.util = ws.util;

        // turn the plugin instance into an observer
        var observerPrototypeKeys = Object.getOwnPropertyNames(this.util.Observer.prototype);
        observerPrototypeKeys.forEach(function (key) {
            Region.prototype[key] = _this5.util.Observer.prototype[key];
        });
        this.wavesurfer.Region = Region;

        // Id-based hash of regions.
        this.list = {};
        this._onReady = function () {
            _this5.wrapper = _this5.wavesurfer.drawer.wrapper;
            if (_this5.params.regions) {
                _this5.params.regions.forEach(function (region) {
                    _this5.add(region);
                });
            }
            if (_this5.params.dragSelection) {
                _this5.enableDragSelection(_this5.params);
            }
        };
    }

    _createClass(RegionsPlugin, [{
        key: 'init',
        value: function init() {
            // Check if ws is ready
            if (this.wavesurfer.isReady) {
                this._onReady();
            }
            this.wavesurfer.on('ready', this._onReady);
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.wavesurfer.un('ready', this._onReady);
            this.disableDragSelection();
            this.clear();
        }
        /* Add a region. */

    }, {
        key: 'add',
        value: function add(params) {
            var _this6 = this;

            var region = new this.wavesurfer.Region(params, this.wavesurfer);

            this.list[region.id] = region;

            region.on('remove', function () {
                delete _this6.list[region.id];
            });

            return region;
        }

        /* Remove all regions. */

    }, {
        key: 'clear',
        value: function clear() {
            var _this7 = this;

            Object.keys(this.list).forEach(function (id) {
                _this7.list[id].remove();
            });
        }
    }, {
        key: 'enableDragSelection',
        value: function enableDragSelection(params) {
            var _this8 = this;

            var slop = params.slop || 2;
            var container = this.wavesurfer.drawer.container;
            var scroll = params.scroll !== false && this.wavesurfer.params.scrollParent;
            var scrollSpeed = params.scrollSpeed || 1;
            var scrollThreshold = params.scrollThreshold || 10;
            var drag = void 0;
            var duration = this.wavesurfer.getDuration();
            var maxScroll = void 0;
            var start = void 0;
            var region = void 0;
            var touchId = void 0;
            var pxMove = 0;
            var scrollDirection = void 0;
            var wrapperRect = void 0;

            // Scroll when the user is dragging within the threshold
            var edgeScroll = function edgeScroll(e) {
                if (!region || !scrollDirection) {
                    return;
                }

                // Update scroll position
                var scrollLeft = _this8.wrapper.scrollLeft + scrollSpeed * scrollDirection;
                _this8.wrapper.scrollLeft = scrollLeft = Math.min(maxScroll, Math.max(0, scrollLeft));

                // Update range
                var end = _this8.wavesurfer.drawer.handleEvent(e);
                region.update({
                    start: Math.min(end * duration, start * duration),
                    end: Math.max(end * duration, start * duration)
                });

                // Check that there is more to scroll and repeat
                if (scrollLeft < maxScroll && scrollLeft > 0) {
                    window.requestAnimationFrame(function () {
                        edgeScroll(e);
                    });
                }
            };

            var eventDown = function eventDown(e) {
                if (e.touches && e.touches.length > 1) {
                    return;
                }
                duration = _this8.wavesurfer.getDuration();
                touchId = e.targetTouches ? e.targetTouches[0].identifier : null;

                // Store for scroll calculations
                maxScroll = _this8.wrapper.scrollWidth - _this8.wrapper.clientWidth;
                wrapperRect = _this8.wrapper.getBoundingClientRect();

                drag = true;
                start = _this8.wavesurfer.drawer.handleEvent(e, true);
                region = null;
                scrollDirection = null;
            };
            this.wrapper.addEventListener('mousedown', eventDown);
            this.wrapper.addEventListener('touchstart', eventDown);
            this.on('disable-drag-selection', function () {
                _this8.wrapper.removeEventListener('touchstart', eventDown);
                _this8.wrapper.removeEventListener('mousedown', eventDown);
            });

            var eventUp = function eventUp(e) {
                if (e.touches && e.touches.length > 1) {
                    return;
                }

                drag = false;
                pxMove = 0;
                scrollDirection = null;

                if (region) {
                    region.fireEvent('update-end', e);
                    _this8.wavesurfer.fireEvent('region-update-end', region, e);
                }

                region = null;
            };
            this.wrapper.addEventListener('mouseup', eventUp);
            this.wrapper.addEventListener('touchend', eventUp);
            this.on('disable-drag-selection', function () {
                _this8.wrapper.removeEventListener('touchend', eventUp);
                _this8.wrapper.removeEventListener('mouseup', eventUp);
            });

            var eventMove = function eventMove(e) {
                if (!drag) {
                    return;
                }
                if (++pxMove <= slop) {
                    return;
                }

                if (e.touches && e.touches.length > 1) {
                    return;
                }
                if (e.targetTouches && e.targetTouches[0].identifier != touchId) {
                    return;
                }

                if (!region) {
                    region = _this8.add(params || {});
                }

                var end = _this8.wavesurfer.drawer.handleEvent(e);
                region.update({
                    start: Math.min(end * duration, start * duration),
                    end: Math.max(end * duration, start * duration)
                });

                // If scrolling is enabled
                if (scroll && container.clientWidth < _this8.wrapper.scrollWidth) {
                    // Check threshold based on mouse
                    var x = e.clientX - wrapperRect.left;
                    if (x <= scrollThreshold) {
                        scrollDirection = -1;
                    } else if (x >= wrapperRect.right - scrollThreshold) {
                        scrollDirection = 1;
                    } else {
                        scrollDirection = null;
                    }
                    scrollDirection && edgeScroll(e);
                }
            };
            this.wrapper.addEventListener('mousemove', eventMove);
            this.wrapper.addEventListener('touchmove', eventMove);
            this.on('disable-drag-selection', function () {
                _this8.wrapper.removeEventListener('touchmove', eventMove);
                _this8.wrapper.removeEventListener('mousemove', eventMove);
            });
        }
    }, {
        key: 'disableDragSelection',
        value: function disableDragSelection() {
            this.fireEvent('disable-drag-selection');
        }

        /* Get current region
         *  The smallest region that contains the current time.
         *  If several such regions exist, we take the first.
         *  Return null if none exist. */

    }, {
        key: 'getCurrentRegion',
        value: function getCurrentRegion() {
            var _this9 = this;

            var time = this.wavesurfer.getCurrentTime();
            var min = null;
            Object.keys(this.list).forEach(function (id) {
                var cur = _this9.list[id];
                if (cur.start <= time && cur.end >= time) {
                    if (!min || cur.end - cur.start < min.end - min.start) {
                        min = cur;
                    }
                }
            });

            return min;
        }
    }]);

    return RegionsPlugin;
}();

exports.default = RegionsPlugin;
module.exports = exports['default'];

/***/ })

/******/ });
});
//# sourceMappingURL=wavesurfer.regions.js.map

/***/ }),

/***/ "./src/js/plugins/wavesurfer.tiledrenderer.js":
/*!****************************************************!*\
  !*** ./src/js/plugins/wavesurfer.tiledrenderer.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * wavesurfer.js 2.0.4 (Fri Mar 02 2018 13:13:39 GMT-0800 (PST))
 * https://github.com/katspaugh/wavesurfer.js
 * @license BSD-3-Clause
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "localhost:8080/dist/plugin/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ajax = __webpack_require__(12);

Object.defineProperty(exports, 'ajax', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ajax).default;
  }
});

var _getId = __webpack_require__(13);

Object.defineProperty(exports, 'getId', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getId).default;
  }
});

var _max = __webpack_require__(14);

Object.defineProperty(exports, 'max', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_max).default;
  }
});

var _min = __webpack_require__(15);

Object.defineProperty(exports, 'min', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_min).default;
  }
});

var _observer = __webpack_require__(1);

Object.defineProperty(exports, 'Observer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_observer).default;
  }
});

var _extend = __webpack_require__(16);

Object.defineProperty(exports, 'extend', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_extend).default;
  }
});

var _style = __webpack_require__(17);

Object.defineProperty(exports, 'style', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_style).default;
  }
});

var _requestAnimationFrame = __webpack_require__(2);

Object.defineProperty(exports, 'requestAnimationFrame', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_requestAnimationFrame).default;
  }
});

var _frame = __webpack_require__(18);

Object.defineProperty(exports, 'frame', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_frame).default;
  }
});

var _debounce = __webpack_require__(19);

Object.defineProperty(exports, 'debounce', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_debounce).default;
  }
});

var _preventClick = __webpack_require__(20);

Object.defineProperty(exports, 'preventClick', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_preventClick).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @typedef {Object} ListenerDescriptor
 * @property {string} name The name of the event
 * @property {function} callback The callback
 * @property {function} un The function to call to remove the listener
 */

/**
 * Observer class
 */
var Observer = function () {
    /**
     * Instantiate Observer
     */
    function Observer() {
        _classCallCheck(this, Observer);

        /**
         * @private
         * @todo Initialise the handlers here already and remove the conditional
         * assignment in `on()`
         */
        this.handlers = null;
    }
    /**
     * Attach a handler function for an event.
     *
     * @param {string} event Name of the event to listen to
     * @param {function} fn The callback to trigger when the event is fired
     * @return {ListenerDescriptor}
     */


    _createClass(Observer, [{
        key: "on",
        value: function on(event, fn) {
            var _this = this;

            if (!this.handlers) {
                this.handlers = {};
            }

            var handlers = this.handlers[event];
            if (!handlers) {
                handlers = this.handlers[event] = [];
            }
            handlers.push(fn);

            // Return an event descriptor
            return {
                name: event,
                callback: fn,
                un: function un(e, fn) {
                    return _this.un(e, fn);
                }
            };
        }

        /**
         * Remove an event handler.
         *
         * @param {string} event Name of the event the listener that should be
         * removed listens to
         * @param {function} fn The callback that should be removed
         */

    }, {
        key: "un",
        value: function un(event, fn) {
            if (!this.handlers) {
                return;
            }

            var handlers = this.handlers[event];
            var i = void 0;
            if (handlers) {
                if (fn) {
                    for (i = handlers.length - 1; i >= 0; i--) {
                        if (handlers[i] == fn) {
                            handlers.splice(i, 1);
                        }
                    }
                } else {
                    handlers.length = 0;
                }
            }
        }

        /**
         * Remove all event handlers.
         */

    }, {
        key: "unAll",
        value: function unAll() {
            this.handlers = null;
        }

        /**
         * Attach a handler to an event. The handler is executed at most once per
         * event type.
         *
         * @param {string} event The event to listen to
         * @param {function} handler The callback that is only to be called once
         * @return {ListenerDescriptor}
         */

    }, {
        key: "once",
        value: function once(event, handler) {
            var _this2 = this;

            var fn = function fn() {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                /*  eslint-disable no-invalid-this */
                handler.apply(_this2, args);
                /*  eslint-enable no-invalid-this */
                setTimeout(function () {
                    _this2.un(event, fn);
                }, 0);
            };
            return this.on(event, fn);
        }

        /**
         * Manually fire an event
         *
         * @param {string} event The event to fire manually
         * @param {...any} args The arguments with which to call the listeners
         */

    }, {
        key: "fireEvent",
        value: function fireEvent(event) {
            for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
            }

            if (!this.handlers) {
                return;
            }
            var handlers = this.handlers[event];
            handlers && handlers.forEach(function (fn) {
                fn.apply(undefined, args);
            });
        }
    }]);

    return Observer;
}();

exports.default = Observer;
module.exports = exports["default"];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

/**
 * Returns the requestAnimationFrame function for the browser, or a shim with
 * setTimeout if none is found
 *
 * @return {function}
 */
exports.default = (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback, element) {
    return setTimeout(callback, 1000 / 60);
}).bind(window);

module.exports = exports["default"];

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tiledDrawBuffer = exports.TiledRenderer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _drawer = __webpack_require__(11);

var _drawer2 = _interopRequireDefault(_drawer);

var _util = __webpack_require__(0);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @typedef {Object} CanvasEntry
 * @private
 * @property {HTMLElement} wave The wave node
 * @property {CanvasRenderingContext2D} waveCtx The canvas rendering context
 * @property {?HTMLElement} progress The progress wave node
 * @property {?CanvasRenderingContext2D} progressCtx The progress wave canvas
 * rendering context
 * @property {?number} start Start of the area the canvas should render, between 0 and 1
 * @property {?number} end End of the area the canvas should render, between 0 and 1
 */

/**
 * TiledRenderer for wavesurfer. Based on the MultiCanvas renderer bundled with WaveSurfer.
 * TiledRenderer works with a pool of Canvas objects, automatically drawing and positioning them
 * as needed.
 */

var TiledRenderer = function (_Drawer) {
    _inherits(TiledRenderer, _Drawer);

    /**
     * @param {HTMLElement} container The container node of the wavesurfer instance
     * @param {WavesurferParams} params The wavesurfer initialisation options
     */
    function TiledRenderer(container, params) {
        _classCallCheck(this, TiledRenderer);

        /**
         * @type {number}
         * @private
         */
        var _this = _possibleConstructorReturn(this, (TiledRenderer.__proto__ || Object.getPrototypeOf(TiledRenderer)).call(this, container, params));

        _this.maxCanvasWidth = params.maxCanvasWidth;
        /**
         * @private
         * @type {number}
         */
        _this.maxCanvasElementWidth = Math.round(params.maxCanvasWidth / params.pixelRatio);

        /**
         * Whether or not the progress wave is renderered. If the `waveColor`
         * and `progressColor` are the same colour it is not.
         * @type {boolean}
         */
        _this.hasProgressCanvas = params.waveColor != params.progressColor;
        /**
         * @private
         * @type {number}
         */
        _this.halfPixel = 0.5 / params.pixelRatio;
        // Use tiled rendering if you need more than canvasLimit canvases
        _this.canvasLimit = params.canvasLimit || 6;
        // Use the sample-drawer if the minPxPerSec is >= sampleSpeed, otherwise use peaks/bars.
        _this.sampleSpeed = params.sampleSpeed || 2560;
        /**
         * @private
         * @type {Array}
         */
        _this.canvases = [];
        /** @private */
        _this.progressWave = null;
        _this.tiledRendering = false;
        return _this;
    }

    /**
     * Initialise the drawer
     */


    _createClass(TiledRenderer, [{
        key: 'init',
        value: function init() {
            this.createWrapper();
            this.createElements();
        }

        /**
         * Create the canvas elements and style them
         *
         * @private
         */

    }, {
        key: 'createElements',
        value: function createElements() {
            this.progressWave = this.wrapper.appendChild(this.style(document.createElement('wave'), {
                position: 'absolute',
                zIndex: 3,
                left: 0,
                top: 0,
                bottom: 0,
                overflow: 'hidden',
                width: '0',
                display: 'none',
                boxSizing: 'border-box',
                borderRightStyle: 'solid',
                pointerEvents: 'none'
            }));

            this.addCanvas();
            this.updateCursor();
        }

        /**
         * Update cursor style from params.
         */

    }, {
        key: 'updateCursor',
        value: function updateCursor() {
            this.style(this.progressWave, {
                borderRightWidth: this.params.cursorWidth + 'px',
                borderRightColor: this.params.cursorColor
            });
        }

        /**
         * Recenter the viewport on a position, either scroll there immediately or
         * in steps of 5 pixels
         *
         * @param {number} position X-offset in pixels
         * @param {boolean} immediate Set to true to immediately scroll somewhere
         */

    }, {
        key: 'recenterOnPosition',
        value: function recenterOnPosition(position, immediate) {
            var scrollLeft = this.wrapper.scrollLeft;
            var half = ~~(this.wrapper.clientWidth / 2);
            var maxScroll = this.wrapper.scrollWidth - this.wrapper.clientWidth;
            var target = position - half;
            var offset = target - scrollLeft;

            if (maxScroll == 0) {
                // no need to continue if scrollbar is not there
                return;
            }

            // if the cursor is currently visible
            // and the scroll velocity is not too high.
            if (!immediate && -half <= offset && offset < half && this.params.minPxPerSec < 400) {
                // we'll limit the "re-center" rate.
                var rate = 5;
                offset = Math.max(-rate, Math.min(rate, offset));
                target = scrollLeft + offset;
            }

            // limit target to valid range (0 to maxScroll)
            target = Math.max(0, Math.min(maxScroll, target));
            // no use attempting to scroll if we're not moving
            if (target != scrollLeft) {
                this.wrapper.scrollLeft = target;
            }
        }

        /**
         * Adjust to the updated size by adding or removing canvases
         */

    }, {
        key: 'updateSize',
        value: function updateSize() {
            var _this2 = this;

            var totalWidth = Math.round(this.width / this.params.pixelRatio);
            var requiredCanvases = Math.ceil(totalWidth / this.maxCanvasElementWidth);
            var canvasCount = this.tiledRendering && this.canvasLimit < requiredCanvases ? this.canvasLimit : requiredCanvases;

            while (this.canvases.length < canvasCount) {
                this.addCanvas();
            }

            while (this.canvases.length > canvasCount) {
                this.removeCanvas();
            }

            this.canvases.forEach(function (entry, i) {
                //  reflow canvases in order
                var leftOffset = _this2.maxCanvasElementWidth * i;
                // Add some overlap to prevent vertical white stripes, keep the width even for simplicity.
                var canvasWidth = _this2.maxCanvasWidth + 2 * Math.ceil(_this2.params.pixelRatio / 2);

                if (!_this2.tiledRendering && i === _this2.canvases.length - 1) {
                    if (i === _this2.canvases.length - 1) {
                        canvasWidth = _this2.width - _this2.maxCanvasWidth * (_this2.canvases.length - 1);
                    }
                }

                _this2.updateDimensions(entry, canvasWidth, _this2.height, leftOffset, _this2.maxCanvasWidth * i);
                _this2.clearWaveForEntry(entry);
            });
        }

        /**
         * Add a canvas to the canvas list
         *
         * @private
         */

    }, {
        key: 'addCanvas',
        value: function addCanvas() {
            var entry = {};
            var leftOffset = this.maxCanvasElementWidth * this.canvases.length;

            entry.wave = this.wrapper.appendChild(this.style(document.createElement('canvas'), {
                position: 'absolute',
                zIndex: 2,
                left: leftOffset + 'px',
                top: 0,
                bottom: 0,
                height: '100%',
                pointerEvents: 'none'
            }));
            entry.waveCtx = entry.wave.getContext('2d');

            if (this.hasProgressCanvas) {
                entry.progress = this.progressWave.appendChild(this.style(document.createElement('canvas'), {
                    position: 'absolute',
                    left: leftOffset + 'px',
                    top: 0,
                    bottom: 0,
                    height: '100%'
                }));
                entry.progressCtx = entry.progress.getContext('2d');
            }

            this.canvases.push(entry);
        }

        /**
         * Pop one canvas from the list
         *
         * @private
         */

    }, {
        key: 'removeCanvas',
        value: function removeCanvas() {
            var lastEntry = this.canvases.pop();
            lastEntry.wave.parentElement.removeChild(lastEntry.wave);
            if (this.hasProgressCanvas) {
                lastEntry.progress.parentElement.removeChild(lastEntry.progress);
            }
        }

        /**
         * Update the dimensions of a canvas element
         *
         * @private
         * @param {CanvasEntry} entry
         * @param {number} width The new width of the element in canvas coordinates
         * @param {number} height The new height of the element
         * @param {number} offset Offset of the element in css coordinates
         * @param {number} leftCanX Offset of the element in canvas coordinates.
         */

    }, {
        key: 'updateDimensions',
        value: function updateDimensions(entry, width, height, offset, leftCanX) {
            var totalWidth = Math.round(this.width / this.params.pixelRatio);
            var elementWidth = Math.round(width / this.params.pixelRatio);
            // Where the canvas starts and ends in the waveform, represented as a decimal between 0 and 1.
            entry.start = offset / totalWidth || 0;
            // entry.start = entry.waveCtx.canvas.offsetLeft / totalWidth || 0;
            entry.end = entry.start + elementWidth / totalWidth;
            entry.leftX = leftCanX;
            entry.waveCtx.canvas.width = width;
            entry.waveCtx.canvas.height = height;
            this.style(entry.waveCtx.canvas, {
                width: elementWidth + 'px',
                left: offset + 'px'
            });

            this.style(this.progressWave, { display: 'block' });

            if (this.hasProgressCanvas) {
                entry.progressCtx.canvas.width = width;
                entry.progressCtx.canvas.height = height;
                this.style(entry.progressCtx.canvas, {
                    width: elementWidth + 'px',
                    left: offset + 'px'
                });
            }

            // Create an empty <div> to hold open
            if (this.tiledRendering && !this.spacer) {
                this.spacer = this.wrapper.appendChild(this.style(document.createElement('div'), {
                    id: 'spacerdiv',
                    position: 'absolute',
                    zIndex: 2,
                    top: 0,
                    bottom: '1px',
                    width: '1px',
                    left: totalWidth + 'px',
                    height: '100%',
                    pointerEvents: 'none'
                }));
            }
            if (this.spacer) {
                this.style(this.spacer, { left: totalWidth + 'px' });
            }
        }
        /**
         * Clear the whole waveform
         */

    }, {
        key: 'clearWave',
        value: function clearWave() {
            var _this3 = this;

            this.canvases.forEach(function (entry) {
                return _this3.clearWaveForEntry(entry);
            });
        }

        /**
         * Clear one canvas
         *
         * @private
         * @param {CanvasEntry} entry
         */

    }, {
        key: 'clearWaveForEntry',
        value: function clearWaveForEntry(entry) {
            entry.waveCtx.clearRect(0, 0, entry.waveCtx.canvas.width, entry.waveCtx.canvas.height);
            if (this.hasProgressCanvas) {
                entry.progressCtx.clearRect(0, 0, entry.progressCtx.canvas.width, entry.progressCtx.canvas.height);
            }
        }

        /**
         * Draw peaks on the (first) canvas
         * (control comes thru here via the minimap plugin or when clearing the waveform).
         *
         * @param {number[]|number[][]} peaks Can also be an array of arrays for split channel
         * rendering
         * @param {number} length The width of the area that should be drawn
         * @param {number} start The x-offset of the beginning of the area that
         * should be rendered
         * @param {number} end The x-offset of the end of the area that should be
         * rendered
         */

    }, {
        key: 'drawPeaks',
        value: function drawPeaks(peaks, length, start, end) {
            if (!this.setWidth(length)) {
                this.clearWave();
            }
            this.params.barWidth ? this.drawBars(peaks, 0, start, end, this.canvases[0]) : this.drawWave(peaks, 0, start, end, this.canvases[0]);
        }

        /**
         * Draw a waveform with bars
         *
         * @param {number[]|number[][]} peaks Can also be an array of arrays for split channel
         * rendering
         * @param {number} channelIndex The index of the current channel. Normally
         * should be 0. Must be an integer.
         * @param {number} start The x-offset of the beginning of the area that
         * should be rendered
         * @param {number} end The x-offset of the end of the area that should be
         * rendered
         * @param (canvas) the canvas to draw the wave on,
         */

    }, {
        key: 'drawBars',
        value: function drawBars(peaks, channelIndex, start, end, canvas) {
            var _this4 = this;

            this.prepareDraw(peaks, channelIndex, start, end, function (_ref) {
                var absmax = _ref.absmax,
                    hasMinVals = _ref.hasMinVals,
                    height = _ref.height,
                    offsetY = _ref.offsetY,
                    halfH = _ref.halfH,
                    peaks = _ref.peaks;

                // if drawBars was called within ws.empty we don't pass a start and
                // don't want anything to happen
                if (start === undefined) {
                    return;
                }
                // Skip every other value if there are negatives.
                var peakIndexScale = hasMinVals ? 2 : 1;
                var length = peaks.length / peakIndexScale;
                var bar = _this4.params.barWidth * _this4.params.pixelRatio;
                var gap = _this4.params.barGap === null ? Math.max(_this4.params.pixelRatio, ~~(bar / 2)) : Math.max(_this4.params.pixelRatio, _this4.params.barGap * _this4.params.pixelRatio);
                var step = bar + gap;

                var scale = length / _this4.width;
                var first = start;
                var last = end;
                var i = void 0;

                for (i = first; i < last; i += step) {
                    var peak = peaks[Math.floor(i * scale * peakIndexScale)] || 0;
                    var h = Math.round(peak / absmax * halfH);
                    _this4.fillRect(i - first + _this4.halfPixel, halfH - h + offsetY, bar + _this4.halfPixel, h * 2, canvas);
                }
            }, canvas);
        }

        /**
         * Draw a waveform
         *
         * @param {number[]|number[][]} peaks Can also be an array of arrays for split channel
         * rendering
         * @param {number} channelIndex The index of the current channel. Normally
         * should be 0
         * @param {number?} start The x-offset of the beginning of the area that
         * should be rendered (If this isn't set only a flat line is rendered)
         * @param {number?} end The x-offset of the end of the area that should be
         * rendered
         * @param (canvas) the canvas to draw the wave on,
         */

    }, {
        key: 'drawWave',
        value: function drawWave(peaks, channelIndex, start, end, canvas) {
            var _this5 = this;

            this.prepareDraw(peaks, channelIndex, start, end, function (_ref2) {
                var absmax = _ref2.absmax,
                    hasMinVals = _ref2.hasMinVals,
                    height = _ref2.height,
                    offsetY = _ref2.offsetY,
                    halfH = _ref2.halfH,
                    peaks = _ref2.peaks;

                if (!hasMinVals) {
                    var reflectedPeaks = [];
                    var len = peaks.length;
                    var i = void 0;
                    for (i = 0; i < len; i++) {
                        reflectedPeaks[2 * i] = peaks[i];
                        reflectedPeaks[2 * i + 1] = -peaks[i];
                    }
                    peaks = reflectedPeaks;
                }

                // if drawWave was called within ws.empty we don't pass a start and
                // end and simply want a flat line
                if (start !== undefined) {
                    _this5.drawLine(peaks, absmax, halfH, offsetY, start, end, canvas);
                }

                // Always draw a median line
                _this5.fillRect(0, halfH + offsetY - _this5.halfPixel, _this5.width, _this5.halfPixel, canvas);
            }, canvas);
        }

        /**
         * Draw part of the waveform on a particular canvas
         *
         * @private
         * @param {number[]} peaks Peak data
         * @param {number} absmax Maximum peak value (absolute)
         * @param {number} halfH Half the height of the waveform
         * @param {number} offsetY Offset to the top
         * @param {number} start The x-offset of the beginning of the area that
         * should be rendered
         * @param {number} end The x-offset of the end of the area that
         * should be rendered
         */

    }, {
        key: 'drawLine',
        value: function drawLine(peaks, absmax, halfH, offsetY, start, end, entry) {
            // let t0 = performance.now();
            this.setFillStyles(entry);
            this.drawLineToContext(entry, entry.waveCtx, peaks, absmax, halfH, offsetY, start, end);
            this.drawLineToContext(entry, entry.progressCtx, peaks, absmax, halfH, offsetY, start, end);
            // let t1 = performance.now();
            // let dT = t1 - t0;
            // console.log(dT);
        }

        /**
         * Render the actual waveform line on a canvas
         *
         * @private
         * @param {CanvasEntry} entry
         * @param {Canvas2DContextAttributes} ctx Essentially `entry.[wave|progress]Ctx`
         * @param {number[]} peaks
         * @param {number} absmax Maximum peak value (absolute)
         * @param {number} halfH Half the height of the waveform
         * @param {number} offsetY Offset to the top
         * @param {number} start The x-offset of the beginning of the area that
         * should be rendered
         * @param {number} end The x-offset of the end of the area that
         * should be rendered
         */

    }, {
        key: 'drawLineToContext',
        value: function drawLineToContext(entry, ctx, peaks, absmax, halfH, offsetY, start, end) {
            if (!ctx) {
                return;
            }

            var length = peaks.length / 2;
            //  const scale = this.width != length ? this.width / length : 1;

            var scale = this.params.fillParent && this.width != length ? this.width / length : 1;

            var first = Math.round(length * entry.start);
            // Use one more peak value to make sure we join peaks at ends -- unless,
            // of course, this is the last canvas.
            var last = Math.round(length * entry.end) + 1;
            if (first > end || last < start) {
                return;
            }
            var canvasStart = Math.min(first, start);
            var canvasEnd = Math.max(last, end);
            var i = void 0;
            var j = void 0;

            ctx.beginPath();
            ctx.moveTo((canvasStart - first) * scale + this.halfPixel, halfH + offsetY);

            for (i = canvasStart; i < canvasEnd; i++) {
                var peak = peaks[2 * i] || 0;
                var h = Math.round(peak / absmax * halfH);
                ctx.lineTo((i - first) * scale + this.halfPixel, halfH - h + offsetY);
            }

            // Draw the bottom edge going backwards, to make a single
            // closed hull to fill.
            for (j = canvasEnd - 1; j >= canvasStart; j--) {
                var _peak = peaks[2 * j + 1] || 0;
                var _h = Math.round(_peak / absmax * halfH);
                ctx.lineTo((j - first) * scale + this.halfPixel, halfH - _h + offsetY);
            }

            ctx.closePath();
            ctx.fill();
        }

        /**
         * Draw a rectangle on the waveform
         *
         * @param {number} x
         * @param {number} y
         * @param {number} width
         * @param {number} height
           @param {canvas} entry
         */

    }, {
        key: 'fillRect',
        value: function fillRect(x, y, width, height, entry) {
            this.setFillStyles(entry);

            this.fillRectToContext(entry.waveCtx, x, y, width, height);

            this.fillRectToContext(entry.progressCtx, x, y, width, height);
        }

        /**
         * Performs preparation tasks and calculations which are shared by drawBars and drawWave
         *
         * @private
         * @param {number[]|number[][]} peaks Can also be an array of arrays for split channel
         * rendering
         * @param {number} channelIndex The index of the current channel. Normally
         * should be 0
         * @param {number?} start The x-offset of the beginning of the area that
         * should be rendered (If this isn't set only a flat line is rendered)
         * @param {number?} end The x-offset of the end of the area that should be
         * rendered
         * @param {function} fn The render function to call
         * @param {canvas} The canvas to draw upon.
         */

    }, {
        key: 'prepareDraw',
        value: function prepareDraw(peaks, channelIndex, start, end, fn, canvas) {
            var _this6 = this;

            //      if (!peaks) {
            //          let cat = 2;
            //      }
            // Split channels and call this function with the channelIndex set
            if (!peaks) {
                var cat = 3;
            }
            if (peaks[0] instanceof Array) {
                var channels = peaks;
                if (this.params.splitChannels) {
                    this.setHeight(channels.length * this.params.height * this.params.pixelRatio);
                    return channels.forEach(function (channelPeaks, i) {
                        return _this6.prepareDraw(channelPeaks, i, start, end, fn, canvas);
                    });
                }
                peaks = channels[0];
            }
            // calculate maximum modulation value, either from the barHeight
            // parameter or if normalize=true from the largest value in the peak
            // set
            var absmax = 1 / this.params.barHeight;
            if (this.params.normalize) {
                var max = util.max(peaks);
                var min = util.min(peaks);
                absmax = -min > max ? -min : max;
            }

            // Bar wave draws the bottom only as a reflection of the top,
            // so we don't need negative values
            var hasMinVals = [].some.call(peaks, function (val) {
                return val < 0;
            });
            var height = this.params.height * this.params.pixelRatio;
            var offsetY = height * channelIndex || 0;
            var halfH = height / 2;

            return fn({
                absmax: absmax,
                hasMinVals: hasMinVals,
                height: height,
                offsetY: offsetY,
                halfH: halfH,
                peaks: peaks,
                entry: canvas
            });
        }

        /**
         * Draw the actual rectangle on a canvas
         *
         * @private
         * @param {Canvas2DContextAttributes} ctx
         * @param {number} x
         * @param {number} y
         * @param {number} width
         * @param {number} height
         */

    }, {
        key: 'fillRectToContext',
        value: function fillRectToContext(ctx, x, y, width, height) {
            if (!ctx) {
                return;
            }
            ctx.fillRect(x, y, width, height);
        }

        /**
         * Set the fill styles for a certain entry (wave and progress)
         *
         * @private
         * @param {CanvasEntry} entry
         */

    }, {
        key: 'setFillStyles',
        value: function setFillStyles(entry) {
            entry.waveCtx.fillStyle = this.params.waveColor;
            if (this.hasProgressCanvas) {
                entry.progressCtx.fillStyle = this.params.progressColor;
            }
        }

        /**
         * Return image data of the waveform
         *
         * @param {string} type='image/png' An optional value of a format type.
         * @param {number} quality=0.92 An optional value between 0 and 1.
         * @return {string|string[]} images A data URL or an array of data URLs
         */

    }, {
        key: 'getImage',
        value: function getImage(type, quality) {
            var images = this.canvases.map(function (entry) {
                return entry.wave.toDataURL(type, quality);
            });
            return images.length > 1 ? images : images[0];
        }

        /**
         * Render the new progress
         *
         * @param {number} position X-Offset of progress position in pixels
         */

    }, {
        key: 'updateProgress',
        value: function updateProgress(position) {
            this.style(this.progressWave, { width: position + 'px' });
        }

        /**
         * Calculate position and width of the canvas corresponding to the normalized
         * X position supplied.
         *
         * @param surfer {Wavesurfer} wavesurfer instance that has channel data
         * @param xNorm {number} Normalized X position to use to determine canvas info.
         * @returns: lhs (number) left hand side coordianate of canvas in css coordinates.
         * canvaWidth (number) width of canvas (in canvas coordinates), adjusted if need be for last.
         * leftOff (number) left coordinate of canvas (in canvas coordinates).
         */

    }, {
        key: 'calcCanvasInfo',
        value: function calcCanvasInfo(surfer, xNorm) {
            var durScale = surfer.getDuration() * this.params.minPxPerSec;
            var xc = xNorm * durScale / this.params.pixelRatio;
            var canNum = Math.floor(xc / this.maxCanvasElementWidth);

            var lhs = canNum * this.maxCanvasElementWidth; // lhs in css coordinates
            var leftOff = canNum * this.maxCanvasWidth;
            var canvasWidth = this.maxCanvasWidth + 2 * Math.ceil(this.params.pixelRatio / 2);

            // If this is the last canvas position, trim its size back so as to not overhang
            if ((canNum + 1) * this.maxCanvasWidth > this.width) {
                canvasWidth = this.width - this.maxCanvasWidth * canNum;
            }
            return {
                left: lhs,
                canvasWidth: canvasWidth,
                leftOff: leftOff
            };
        }

        /**
         * fill the given canvas entry with data from the peaks array or the channel buffers
         *
         * @private
         * @param surfer {Wavesurfer} wavesurfer instance that has channel data
         * @param entry {Canvas} canvas to draw onto.
         * @param peaks (Peaks array) peak data to draw with if not using channel data.
         */

    }, {
        key: 'imageSingleCanvas',
        value: function imageSingleCanvas(surfer, entry, peaks) {
            //  let t0 = performance.now();
            var buffer = surfer.backend.buffer;
            var numberOfChannels = buffer.numberOfChannels,
                sampleRate = buffer.sampleRate;

            var spDx = sampleRate / this.params.minPxPerSec;
            var height = Math.round(this.params.height * this.params.pixelRatio); // ?
            var halfH = Math.round(height / 2);
            var pixH = 2;
            var pixW = Math.ceil(1 / spDx) + 1;
            var ySc = -halfH;
            var duration = surfer.getDuration();
            var durScale = duration * this.params.minPxPerSec;

            var lhs = Math.round(entry.start * durScale);
            var rhs = Math.round(entry.end * durScale);
            if (!entry) {
                var cat = 3;
            }
            if (this.params.minPxPerSec < this.sampleSpeed) {
                this.params.barWidth ? this.drawBars(peaks, 0, lhs, rhs, entry) : this.drawWave(peaks, 0, lhs, rhs, entry);
                return;
            }

            for (var c = 0; c < numberOfChannels; ++c) {
                var chan = buffer.getChannelData(c);
                var yoff = halfH + c * height;
                var progressCtx = entry.progressCtx,
                    waveCtx = entry.waveCtx;

                //      console.log(lhs + ", " + rhs + " " + entry.start + " " + entry.end);

                this.setFillStyles(entry);
                var sx = entry.start * duration * sampleRate;
                var w = rhs - lhs;
                for (var x = 0; x < w; ++x) {
                    var y = yoff + Math.round(chan[Math.round(sx)] * ySc);
                    sx += spDx;
                    waveCtx.fillRect(x, y, pixW, pixH);
                    if (progressCtx) progressCtx.fillRect(x, y, pixW, pixH);
                }
            }
            // let t1 = performance.now();
            // let dT = t1 - t0;
            //console.log(dT);
        }

        /**
         * periodic function called in order to maintain the tile strip.
         * returns true if a canvas to reimage was found.
         * @private
         * @param surfer {Wavesurfer} wavesurfer instance that has channel data
         * @param peaks (Peaks array) peak data to draw with if not using channel data.
         * @returns: (boolean) true if a reimage was accomplished, false if not.
         */

    }, {
        key: 'scrollCheck',
        value: function scrollCheck(surfer, peaks) {
            var scrX = surfer.drawer.getScrollX(); // scrX should be in canvas coordinates.

            var duration = surfer.getDuration();
            var durScale = duration * this.params.minPxPerSec;
            var normX = scrX / durScale;

            var playState = surfer.isPlaying();

            if (normX > 1.0) {
                console.log('clipping normX from: ' + normX);
                normX = 1.0;
            }

            // console.log(normX);
            var foundCan = void 0;
            var canvToFill = void 0;
            var maxDist = 0;
            // Find the canvas which is visable.

            this.canvases.forEach(function (entry) {
                if (normX >= entry.start && normX < entry.end && !entry.hidden) {
                    foundCan = entry;
                } else {
                    if (entry.hidden) {
                        // hidden entries always win.
                        canvToFill = entry;
                        maxDist = -1; // use -1 as a flag to stop compares.
                    } else if (maxDist >= 0) {
                        var midPt = (entry.start + entry.end) / 2;
                        var dist = Math.abs(normX - midPt);
                        if (dist >= maxDist) {
                            maxDist = dist;
                            canvToFill = entry;
                        }
                    }
                }
            });

            var that = this;
            var whereX = -1;
            // If it isn't there, make that one.
            // If it is already there, find the next one

            if (!foundCan) {
                whereX = normX;
                //          console.log("Filling missing.");
            } else {
                var ourWid = foundCan.end - foundCan.start;
                var ourMid = foundCan.start + ourWid / 2;
                var seekX = ourMid + ourWid;
                var foundUp = void 0;
                if (seekX < 1.0) {
                    foundUp = that.canvases.find(function (can) {
                        return seekX >= can.start && seekX < can.end && !can.hidden;
                    });
                }
                if (!foundUp && seekX < 1.0) {
                    //              console.log("Filling forward.");
                    whereX = seekX;
                } else {
                    seekX = ourMid - ourWid;
                    if (seekX < 0) seekX == 0;
                    var foundDn = that.canvases.find(function (can) {
                        return seekX >= can.start && seekX < can.end && !can.hidden;
                    });
                    if (!foundDn) {
                        whereX = seekX;
                        //                  console.log("Filling backward.");
                    }
                }
            }

            if (whereX >= 0 && canvToFill) {
                var can = this.calcCanvasInfo(surfer, whereX);
                var canvasWidth = can.canvasWidth,
                    left = can.left,
                    leftOff = can.leftOff;

                this.updateDimensions(canvToFill, canvasWidth, this.height, left, leftOff);
                this.clearWaveForEntry(canvToFill);
                this.imageSingleCanvas(surfer, canvToFill, peaks);
                canvToFill.hidden = false;
                return true;
            }

            return false;
        }

        /**
         * called from overDrawBuffer to reimage the tiles. If we are using tiled rendering,
         * arrange to repaint the visible area and set up an event listener for scrolling.
         * If we aren't using tiled rendering, then fill up all the canvases.
         *
         * @private
         * @param surfer {Wavesurfer} wavesurfer instance that has channel data
         * @param entry {Canvas} canvas to draw onto.
         * @param peaks (Peaks array) peak data to draw with if not using channel data.
         */

    }, {
        key: 'drawTiles',
        value: function drawTiles(surfer, width, peaks) {
            //      console.log("drawSampes " + this.maxCanvasElementWidth + " " + this.maxCanvasWidth);
            this.setWidth(width);
            this.clearWave();
            var that = this;

            // Csncel any existing scroll watcher.
            if (this.scrollWatcher) {
                //  console.log("Cancelling existing scrollWatcher");
                surfer.un('scroll', this.scrollWatcher);
                this.scrollWatcher = undefined;
            }
            if (this.tiledRendering) {
                // Mark all canvases as hidden.
                this.canvases.forEach(function (entry) {
                    entry.hidden = true;
                });
                var repaint = function repaint() {
                    var ctr = 0;
                    while (that.scrollCheck(surfer, peaks)) {
                        //  console.log('Imaging tile ' + ctr);
                        if (ctr++ > that.canvasLimit) {
                            console.log('Over limit imaging tiles');
                            return;
                        }
                    }
                };
                setTimeout(repaint);
            } else {
                this.canvases.forEach(function (entry) {
                    that.imageSingleCanvas(surfer, entry, peaks);
                });
            }

            // Make a new scroll watcher if we need it.
            if (this.tiledRendering) {
                var watchFun = function watchFun(screvt) {
                    if (that.tiledRendering) {
                        if (that.params.minPxPerSec < that.sampleSpeed && !peaks) {
                            return;
                        }
                        //console.log("Peaks Length at scrollcheck: " + peaks[0].length);
                        if (that.scrollCheck(surfer, peaks)) {
                            that.scrollCheck(surfer, peaks);
                        }
                    }
                };
                surfer.on('scroll', watchFun);
                this.scrollWatcher = watchFun;
            }
        }
    }]);

    return TiledRenderer;
}(_drawer2.default); // End of class.

/**
 * A hacked-up version of the drawBuffer routine defined in wavesurfer.js,
 * Since we don't want to use peak data at high magnification levels, we
 * avoid generating and using peak data in the situation. We also
 * turn on the tiled rendering feature if it is needed.
 */


exports.default = TiledRenderer;
var tiledDrawBuffer = function tiledDrawBuffer() {
    var nominalWidth = Math.round(this.getDuration() * this.params.minPxPerSec);
    var parentWidth = this.drawer.getWidth();
    var width = nominalWidth;

    // If we need more than a certain number of canvases, then we will render them dynamically
    var requiredCanvases = Math.ceil(width / this.params.maxCanvasWidth);
    this.drawer.tiledRendering = requiredCanvases > this.drawer.canvasLimit;
    var needPeaks = this.params.minPxPerSec < this.drawer.sampleSpeed;

    var end = Math.max(parentWidth, width);

    // console.log("*** overDrawBuffer w:" + width + " end: " + end + " minxPxPerSec: " + this.params.minPxPerSec);

    this.peaks = undefined;
    var peaks = void 0;
    if (needPeaks) {
        this.backend.peaks = undefined;
        this.backend.mergedPeaks = undefined;
        peaks = this.backend.getPeaks(width, 0, end);
    }
    this.drawer.drawTiles(this, width, peaks);
    this.fireEvent('redraw', peaks, width);
};

exports.TiledRenderer = TiledRenderer;
exports.tiledDrawBuffer = tiledDrawBuffer;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Parent class for renderers
 *
 * @extends {Observer}
 */
var Drawer = function (_util$Observer) {
    _inherits(Drawer, _util$Observer);

    /**
     * @param {HTMLElement} container The container node of the wavesurfer instance
     * @param {WavesurferParams} params The wavesurfer initialisation options
     */
    function Drawer(container, params) {
        _classCallCheck(this, Drawer);

        /** @private */
        var _this = _possibleConstructorReturn(this, (Drawer.__proto__ || Object.getPrototypeOf(Drawer)).call(this));

        _this.container = container;
        /**
         * @type {WavesurferParams}
         * @private
         */
        _this.params = params;
        /**
         * The width of the renderer
         * @type {number}
         */
        _this.width = 0;
        /**
         * The height of the renderer
         * @type {number}
         */
        _this.height = params.height * _this.params.pixelRatio;
        /** @private */
        _this.lastPos = 0;
        /**
         * The `<wave>` element which is added to the container
         * @type {HTMLElement}
         */
        _this.wrapper = null;
        return _this;
    }

    /**
     * Alias of `util.style`
     *
     * @param {HTMLElement} el The element that the styles will be applied to
     * @param {Object} styles The map of propName: attribute, both are used as-is
     * @return {HTMLElement} el
     */


    _createClass(Drawer, [{
        key: 'style',
        value: function style(el, styles) {
            return util.style(el, styles);
        }

        /**
         * Create the wrapper `<wave>` element, style it and set up the events for
         * interaction
         */

    }, {
        key: 'createWrapper',
        value: function createWrapper() {
            this.wrapper = this.container.appendChild(document.createElement('wave'));

            this.style(this.wrapper, {
                display: 'block',
                position: 'relative',
                userSelect: 'none',
                webkitUserSelect: 'none',
                height: this.params.height + 'px'
            });

            if (this.params.fillParent || this.params.scrollParent) {
                this.style(this.wrapper, {
                    width: '100%',
                    overflowX: this.params.hideScrollbar ? 'hidden' : 'auto',
                    overflowY: 'hidden'
                });
            }

            this.setupWrapperEvents();
        }

        /**
         * Handle click event
         *
         * @param {Event} e Click event
         * @param {?boolean} noPrevent Set to true to not call `e.preventDefault()`
         * @return {number} Playback position from 0 to 1
         */

    }, {
        key: 'handleEvent',
        value: function handleEvent(e, noPrevent) {
            !noPrevent && e.preventDefault();

            var clientX = e.targetTouches ? e.targetTouches[0].clientX : e.clientX;
            var bbox = this.wrapper.getBoundingClientRect();

            var nominalWidth = this.width;
            var parentWidth = this.getWidth();

            var progress = void 0;

            if (!this.params.fillParent && nominalWidth < parentWidth) {
                progress = (clientX - bbox.left) * this.params.pixelRatio / nominalWidth || 0;

                if (progress > 1) {
                    progress = 1;
                }
            } else {
                progress = (clientX - bbox.left + this.wrapper.scrollLeft) / this.wrapper.scrollWidth || 0;
            }

            return progress;
        }

        /**
         * @private
         */

    }, {
        key: 'setupWrapperEvents',
        value: function setupWrapperEvents() {
            var _this2 = this;

            this.wrapper.addEventListener('click', function (e) {
                var scrollbarHeight = _this2.wrapper.offsetHeight - _this2.wrapper.clientHeight;
                if (scrollbarHeight != 0) {
                    // scrollbar is visible.  Check if click was on it
                    var bbox = _this2.wrapper.getBoundingClientRect();
                    if (e.clientY >= bbox.bottom - scrollbarHeight) {
                        // ignore mousedown as it was on the scrollbar
                        return;
                    }
                }

                if (_this2.params.interact) {
                    _this2.fireEvent('click', e, _this2.handleEvent(e));
                }
            });

            this.wrapper.addEventListener('scroll', function (e) {
                return _this2.fireEvent('scroll', e);
            });
        }

        /**
         * Draw peaks on the canvas
         *
         * @param {number[]|number[][]} peaks Can also be an array of arrays for split channel
         * rendering
         * @param {number} length The width of the area that should be drawn
         * @param {number} start The x-offset of the beginning of the area that
         * should be rendered
         * @param {number} end The x-offset of the end of the area that should be
         * rendered
         */

    }, {
        key: 'drawPeaks',
        value: function drawPeaks(peaks, length, start, end) {
            if (!this.setWidth(length)) {
                this.clearWave();
            }

            this.params.barWidth ? this.drawBars(peaks, 0, start, end) : this.drawWave(peaks, 0, start, end);
        }

        /**
         * Scroll to the beginning
         */

    }, {
        key: 'resetScroll',
        value: function resetScroll() {
            if (this.wrapper !== null) {
                this.wrapper.scrollLeft = 0;
            }
        }

        /**
         * Recenter the viewport at a certain percent of the waveform
         *
         * @param {number} percent Value from 0 to 1 on the waveform
         */

    }, {
        key: 'recenter',
        value: function recenter(percent) {
            var position = this.wrapper.scrollWidth * percent;
            this.recenterOnPosition(position, true);
        }

        /**
         * Recenter the viewport on a position, either scroll there immediately or
         * in steps of 5 pixels
         *
         * @param {number} position X-offset in pixels
         * @param {boolean} immediate Set to true to immediately scroll somewhere
         */

    }, {
        key: 'recenterOnPosition',
        value: function recenterOnPosition(position, immediate) {
            var scrollLeft = this.wrapper.scrollLeft;
            var half = ~~(this.wrapper.clientWidth / 2);
            var maxScroll = this.wrapper.scrollWidth - this.wrapper.clientWidth;
            var target = position - half;
            var offset = target - scrollLeft;

            if (maxScroll == 0) {
                // no need to continue if scrollbar is not there
                return;
            }

            // if the cursor is currently visible...
            if (!immediate && -half <= offset && offset < half) {
                // we'll limit the "re-center" rate.
                var rate = 5;
                offset = Math.max(-rate, Math.min(rate, offset));
                target = scrollLeft + offset;
            }

            // limit target to valid range (0 to maxScroll)
            target = Math.max(0, Math.min(maxScroll, target));
            // no use attempting to scroll if we're not moving
            if (target != scrollLeft) {
                this.wrapper.scrollLeft = target;
            }
        }

        /**
         * Get the current scroll position in pixels
         *
         * @return {number}
         */

    }, {
        key: 'getScrollX',
        value: function getScrollX() {
            var pixelRatio = this.params.pixelRatio;
            var x = Math.round(this.wrapper.scrollLeft * pixelRatio);

            // In cases of elastic scroll (safari with mouse wheel) you can
            // scroll beyond the limits of the container
            // Calculate and floor the scrollable extent to make sure an out
            // of bounds value is not returned
            // Ticket #1312
            if (this.params.scrollParent) {
                var maxScroll = ~~(this.wrapper.scrollWidth * pixelRatio - this.getWidth());
                x = Math.min(maxScroll, Math.max(0, x));
            }

            return x;
        }

        /**
         * Get the width of the container
         *
         * @return {number}
         */

    }, {
        key: 'getWidth',
        value: function getWidth() {
            return Math.round(this.container.clientWidth * this.params.pixelRatio);
        }

        /**
         * Set the width of the container
         *
         * @param {number} width
         */

    }, {
        key: 'setWidth',
        value: function setWidth(width) {
            if (this.width == width) {
                return false;
            }

            this.width = width;

            if (this.params.fillParent || this.params.scrollParent) {
                this.style(this.wrapper, {
                    width: ''
                });
            } else {
                this.style(this.wrapper, {
                    width: ~~(this.width / this.params.pixelRatio) + 'px'
                });
            }

            this.updateSize();
            return true;
        }

        /**
         * Set the height of the container
         *
         * @param {number} height
         */

    }, {
        key: 'setHeight',
        value: function setHeight(height) {
            if (height == this.height) {
                return false;
            }
            this.height = height;

            this.style(this.wrapper, {
                height: ~~(this.height / this.params.pixelRatio) + 'px'
            });

            this.updateSize();
            return true;
        }

        /**
         * Called by wavesurfer when progress should be renderered
         *
         * @param {number} progress From 0 to 1
         */

    }, {
        key: 'progress',
        value: function progress(_progress) {
            var minPxDelta = 1 / this.params.pixelRatio;
            var pos = Math.round(_progress * this.width) * minPxDelta;

            if (pos < this.lastPos || pos - this.lastPos >= minPxDelta) {
                this.lastPos = pos;

                if (this.params.scrollParent && this.params.autoCenter) {
                    var newPos = ~~(this.wrapper.scrollWidth * _progress);
                    this.recenterOnPosition(newPos);
                }

                this.updateProgress(pos);
            }
        }

        /**
         * This is called when wavesurfer is destroyed
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            this.unAll();
            if (this.wrapper) {
                if (this.wrapper.parentNode == this.container) {
                    this.container.removeChild(this.wrapper);
                }
                this.wrapper = null;
            }
        }

        /* Renderer-specific methods */

        /**
         * Called after cursor related params have changed.
         *
         * @abstract
         */

    }, {
        key: 'updateCursor',
        value: function updateCursor() {}

        /**
         * Called when the size of the container changes so the renderer can adjust
         *
         * @abstract
         */

    }, {
        key: 'updateSize',
        value: function updateSize() {}

        /**
         * Draw a waveform with bars
         *
         * @abstract
         * @param {number[]|number[][]} peaks Can also be an array of arrays for split channel
         * rendering
         * @param {number} channelIndex The index of the current channel. Normally
         * should be 0
         * @param {number} start The x-offset of the beginning of the area that
         * should be rendered
         * @param {number} end The x-offset of the end of the area that should be
         * rendered
         */

    }, {
        key: 'drawBars',
        value: function drawBars(peaks, channelIndex, start, end) {}

        /**
         * Draw a waveform
         *
         * @abstract
         * @param {number[]|number[][]} peaks Can also be an array of arrays for split channel
         * rendering
         * @param {number} channelIndex The index of the current channel. Normally
         * should be 0
         * @param {number} start The x-offset of the beginning of the area that
         * should be rendered
         * @param {number} end The x-offset of the end of the area that should be
         * rendered
         */

    }, {
        key: 'drawWave',
        value: function drawWave(peaks, channelIndex, start, end) {}

        /**
         * Clear the waveform
         *
         * @abstract
         */

    }, {
        key: 'clearWave',
        value: function clearWave() {}

        /**
         * Render the new progress
         *
         * @abstract
         * @param {number} position X-Offset of progress position in pixels
         */

    }, {
        key: 'updateProgress',
        value: function updateProgress(position) {}
    }]);

    return Drawer;
}(util.Observer);

exports.default = Drawer;
module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ajax;

var _observer = __webpack_require__(1);

var _observer2 = _interopRequireDefault(_observer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Perform an ajax request
 *
 * @param {Options} options Description
 *
 * @returns {Object} Observer instance
 */
function ajax(options) {
    var instance = new _observer2.default();
    var xhr = new XMLHttpRequest();
    var fired100 = false;
    xhr.open(options.method || 'GET', options.url, true);
    xhr.responseType = options.responseType || 'json';

    if (options.xhr) {
        if (options.xhr.requestHeaders) {
            // add custom request headers
            options.xhr.requestHeaders.forEach(function (header) {
                xhr.setRequestHeader(header.key, header.value);
            });
        }
        if (options.xhr.withCredentials) {
            // use credentials
            xhr.withCredentials = true;
        }
    }

    xhr.addEventListener('progress', function (e) {
        instance.fireEvent('progress', e);
        if (e.lengthComputable && e.loaded == e.total) {
            fired100 = true;
        }
    });
    xhr.addEventListener('load', function (e) {
        if (!fired100) {
            instance.fireEvent('progress', e);
        }
        instance.fireEvent('load', e);
        if (200 == xhr.status || 206 == xhr.status) {
            instance.fireEvent('success', xhr.response, e);
        } else {
            instance.fireEvent('error', e);
        }
    });
    xhr.addEventListener('error', function (e) {
        return instance.fireEvent('error', e);
    });
    xhr.send();
    instance.xhr = xhr;
    return instance;
}
module.exports = exports['default'];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getId;
/**
 * Get a random prefixed ID
 *
 * @returns {String} Random ID
 */
function getId() {
    return 'wavesurfer_' + Math.random().toString(32).substring(2);
}
module.exports = exports['default'];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = max;
/**
 * Get the largest value
 *
 * @param   {Array} values Array of numbers
 * @returns {Number} Largest number found
 */
function max(values) {
    var largest = -Infinity;
    Object.keys(values).forEach(function (i) {
        if (values[i] > largest) {
            largest = values[i];
        }
    });
    return largest;
}
module.exports = exports["default"];

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = min;
/**
 * Get the smallest value
 *
 * @param   {Array} values Array of numbers
 * @returns {Number}       Smallest number found
 */
function min(values) {
    var smallest = Number(Infinity);
    Object.keys(values).forEach(function (i) {
        if (values[i] < smallest) {
            smallest = values[i];
        }
    });
    return smallest;
}
module.exports = exports["default"];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = extend;
/**
 * Extend an object shallowly with others
 *
 * @param {Object} dest The target object
 * @param {Object[]} sources The objects to use for extending
 *
 * @return {Object} Merged object
 */
function extend(dest) {
    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        sources[_key - 1] = arguments[_key];
    }

    sources.forEach(function (source) {
        Object.keys(source).forEach(function (key) {
            dest[key] = source[key];
        });
    });
    return dest;
}
module.exports = exports["default"];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = style;
/**
 * Apply a map of styles to an element
 *
 * @param {HTMLElement} el The element that the styles will be applied to
 * @param {Object} styles The map of propName: attribute, both are used as-is
 *
 * @return {HTMLElement} el
 */
function style(el, styles) {
    Object.keys(styles).forEach(function (prop) {
        if (el.style[prop] !== styles[prop]) {
            el.style[prop] = styles[prop];
        }
    });
    return el;
}
module.exports = exports["default"];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = frame;

var _requestAnimationFrame = __webpack_require__(2);

var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create a function which will be called at the next requestAnimationFrame
 * cycle
 *
 * @param {function} func The function to call
 *
 * @return {func} The function wrapped within a requestAnimationFrame
 */
function frame(func) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _requestAnimationFrame2.default)(function () {
      return func.apply(undefined, args);
    });
  };
}
module.exports = exports['default'];

/***/ }),
/* 19 */
/***/ (function(module, exports) {

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear' 
 * that is a function which will clear the timer to prevent previously scheduled executions. 
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */

module.exports = function debounce(func, wait, immediate){
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {
    var last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  };

  var debounced = function(){
    context = this;
    args = arguments;
    timestamp = Date.now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };

  debounced.clear = function() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  
  debounced.flush = function() {
    if (timeout) {
      result = func.apply(context, args);
      context = args = null;
      
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = preventClick;
function preventClickHandler(e) {
    e.stopPropagation();
    document.body.removeEventListener('click', preventClickHandler, true);
}

function preventClick(values) {
    document.body.addEventListener('click', preventClickHandler, true);
}
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=wavesurfer.tiledrenderer.js.map

/***/ }),

/***/ "./src/js/plugins/wavesurfer.timeline.js":
/*!***********************************************!*\
  !*** ./src/js/plugins/wavesurfer.timeline.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "localhost:8080/dist/plugin/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @typedef {Object} TimelinePluginParams
 * @desc Extends the `WavesurferParams` wavesurfer was initialised with
 * @property {!string|HTMLElement} container CSS selector or HTML element where
 * the timeline should be drawn. This is the only required parameter.
 * @property {number} notchPercentHeight=90 Height of notches in percent
 * @property {string} primaryColor='#000' The colour of the main notches
 * @property {string} secondaryColor='#c0c0c0' The colour of the secondary
 * notches
 * @property {string} primaryFontColor='#000' The colour of the labels next to
 * the main notches
 * @property {string} secondaryFontColor='#000' The colour of the labels next to
 * the secondary notches
 * @property {number} labelPadding=5 The padding between the label and the notch
 * @property {?number} zoomDebounce A debounce timeout to increase rendering
 * performance for large files
 * @property {string} fontFamily='Arial'
 * @property {number} fontSize=10 Font size of labels in pixels
 * @property {function} formatTimeCallback=→00:00
 * @property {?boolean} deferInit Set to true to manually call
 * `initPlugin('timeline')`
 */

/**
 * Adds a timeline to the waveform.
 *
 * @implements {PluginClass}
 * @extends {Observer}
 * @example
 * // es6
 * import TimelinePlugin from 'wavesurfer.timeline.js';
 *
 * // commonjs
 * var TimelinePlugin = require('wavesurfer.timeline.js');
 *
 * // if you are using <script> tags
 * var TimelinePlugin = window.WaveSurfer.timeline;
 *
 * // ... initialising wavesurfer with the plugin
 * var wavesurfer = WaveSurfer.create({
 *   // wavesurfer options ...
 *   plugins: [
 *     TimelinePlugin.create({
 *       // plugin options ...
 *     })
 *   ]
 * });
 */
var TimelinePlugin = function () {
    _createClass(TimelinePlugin, null, [{
        key: 'create',

        /**
         * Timeline plugin definition factory
         *
         * This function must be used to create a plugin definition which can be
         * used by wavesurfer to correctly instantiate the plugin.
         *
         * @param  {TimelinePluginParams} params parameters use to initialise the plugin
         * @return {PluginDefinition} an object representing the plugin
         */
        value: function create(params) {
            return {
                name: 'timeline',
                deferInit: params && params.deferInit ? params.deferInit : false,
                params: params,
                instance: TimelinePlugin
            };
        }

        // event handlers
        /** @private */

        /** @private */

        /** @private */

        /** @private */

    }]);

    /**
     * Creates an instance of TimelinePlugin.
     *
     * You probably want to use TimelinePlugin.create()
     *
     * @param {TimelinePluginParams} params Plugin parameters
     * @param {object} ws Wavesurfer instance
     */
    function TimelinePlugin(params, ws) {
        var _this = this;

        _classCallCheck(this, TimelinePlugin);

        _initialiseProps.call(this);

        /** @private */
        this.container = 'string' == typeof params.container ? document.querySelector(params.container) : params.container;

        if (!this.container) {
            throw new Error('No container for wavesurfer timeline');
        }
        /** @private */
        this.wavesurfer = ws;
        /** @private */
        this.util = ws.util;
        /** @private */
        this.params = this.util.extend({}, {
            height: 20,
            notchPercentHeight: 90,
            labelPadding: 5,
            primaryColor: '#000',
            secondaryColor: '#c0c0c0',
            primaryFontColor: '#000',
            secondaryFontColor: '#000',
            fontFamily: 'Arial',
            fontSize: 10,
            zoomDebounce: false,
            formatTimeCallback: function formatTimeCallback(seconds) {
                if (seconds / 60 > 1) {
                    // calculate minutes and seconds from seconds count
                    var minutes = parseInt(seconds / 60, 10);
                    seconds = parseInt(seconds % 60, 10);
                    // fill up seconds with zeroes
                    seconds = seconds < 10 ? '0' + seconds : seconds;
                    return minutes + ':' + seconds;
                }
                return Math.round(seconds * 1000) / 1000;
            },
            timeInterval: function timeInterval(pxPerSec) {
                if (pxPerSec >= 25) {
                    return 1;
                } else if (pxPerSec * 5 >= 25) {
                    return 5;
                } else if (pxPerSec * 15 >= 25) {
                    return 15;
                }
                return Math.ceil(0.5 / pxPerSec) * 60;
            },
            primaryLabelInterval: function primaryLabelInterval(pxPerSec) {
                if (pxPerSec >= 25) {
                    return 10;
                } else if (pxPerSec * 5 >= 25) {
                    return 6;
                } else if (pxPerSec * 15 >= 25) {
                    return 4;
                }
                return 4;
            },
            secondaryLabelInterval: function secondaryLabelInterval(pxPerSec) {
                if (pxPerSec >= 25) {
                    return 5;
                } else if (pxPerSec * 5 >= 25) {
                    return 2;
                } else if (pxPerSec * 15 >= 25) {
                    return 2;
                }
                return 2;
            }
        }, params);

        /** @private */
        this.canvases = [];
        /** @private */
        this.wrapper = null;
        /** @private */
        this.drawer = null;
        /** @private */
        this.pixelRatio = null;
        /** @private */
        this.maxCanvasWidth = null;
        /** @private */
        this.maxCanvasElementWidth = null;
        /**
         * This event handler has to be in the constructor function because it
         * relies on the debounce function which is only available after
         * instantiation
         *
         * Use a debounced function if zoomDebounce is defined
         *
         * @private
         */
        this._onZoom = this.params.zoomDebounce ? this.wavesurfer.util.debounce(function () {
            return _this.render();
        }, this.params.zoomDebounce) : function () {
            return _this.render();
        };
    }

    /**
     * Initialisation function used by the plugin API
     */


    _createClass(TimelinePlugin, [{
        key: 'init',
        value: function init() {
            this.wavesurfer.on('ready', this._onReady);
            // Check if ws is ready
            if (this.wavesurfer.isReady) {
                this._onReady();
            }
        }

        /**
         * Destroy function used by the plugin API
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            this.unAll();
            this.wavesurfer.un('redraw', this._onRedraw);
            this.wavesurfer.un('zoom', this._onZoom);
            this.wavesurfer.un('ready', this._onReady);
            this.wavesurfer.drawer.wrapper.removeEventListener('scroll', this._onScroll);
            if (this.wrapper && this.wrapper.parentNode) {
                this.wrapper.removeEventListener('click', this._onWrapperClick);
                this.wrapper.parentNode.removeChild(this.wrapper);
                this.wrapper = null;
            }
        }

        /**
         * Create a timeline element to wrap the canvases drawn by this plugin
         *
         * @private
         */

    }, {
        key: 'createWrapper',
        value: function createWrapper() {
            var wsParams = this.wavesurfer.params;
            this.container.innerHTML = '';
            this.wrapper = this.container.appendChild(document.createElement('timeline'));
            this.util.style(this.wrapper, {
                display: 'block',
                position: 'relative',
                userSelect: 'none',
                webkitUserSelect: 'none',
                height: this.params.height + 'px'
            });

            if (wsParams.fillParent || wsParams.scrollParent) {
                this.util.style(this.wrapper, {
                    width: '100%',
                    overflowX: 'hidden',
                    overflowY: 'hidden'
                });
            }

            this.wrapper.addEventListener('click', this._onWrapperClick);
        }

        /**
         * Render the timeline (also updates the already rendered timeline)
         *
         * @private
         */

    }, {
        key: 'render',
        value: function render() {
            if (!this.wrapper) {
                this.createWrapper();
            }
            this.updateCanvases();
            this.updateCanvasesPositioning();
            this.renderCanvases();
        }

        /**
         * Make sure the correct of timeline canvas elements exist and are cached in
         * this.canvases
         *
         * @private
         */

    }, {
        key: 'updateCanvases',
        value: function updateCanvases() {
            var _this2 = this;

            var addCanvas = function addCanvas() {
                var canvas = _this2.wrapper.appendChild(document.createElement('canvas'));
                _this2.canvases.push(canvas);
                _this2.util.style(canvas, {
                    position: 'absolute',
                    zIndex: 4
                });
            };
            var removeCanvas = function removeCanvas() {
                var canvas = _this2.canvases.pop();
                canvas.parentElement.removeChild(canvas);
            };

            var totalWidth = Math.round(this.drawer.wrapper.scrollWidth);
            var requiredCanvases = Math.ceil(totalWidth / this.maxCanvasElementWidth);
            while (this.canvases.length < requiredCanvases) {
                addCanvas();
            }

            while (this.canvases.length > requiredCanvases) {
                removeCanvas();
            }
        }

        /**
         * Update the dimensions and positioning style for all the timeline canvases
         *
         * @private
         */

    }, {
        key: 'updateCanvasesPositioning',
        value: function updateCanvasesPositioning() {
            var _this3 = this;

            // cache length for perf
            var canvasesLength = this.canvases.length;
            this.canvases.forEach(function (canvas, i) {
                // canvas width is the max element width, or if it is the last the
                // required width
                var canvasWidth = i === canvasesLength - 1 ? _this3.drawer.wrapper.scrollWidth - _this3.maxCanvasElementWidth * (canvasesLength - 1) : _this3.maxCanvasElementWidth;
                // set dimensions and style
                canvas.width = canvasWidth * _this3.pixelRatio;
                // on certain pixel ratios the canvas appears cut off at the bottom,
                // therefore leave 1px extra
                canvas.height = (_this3.params.height + 1) * _this3.pixelRatio;
                _this3.util.style(canvas, {
                    width: canvasWidth + 'px',
                    height: _this3.params.height + 'px',
                    left: i * _this3.maxCanvasElementWidth + 'px'
                });
            });
        }

        /**
         * Render the timeline labels and notches
         *
         * @private
         */

    }, {
        key: 'renderCanvases',
        value: function renderCanvases() {
            var _this4 = this;

            var duration = this.wavesurfer.backend.getDuration();
            if (duration <= 0) {
                return;
            }
            var wsParams = this.wavesurfer.params;
            var fontSize = this.params.fontSize * wsParams.pixelRatio;
            var totalSeconds = parseInt(duration, 10) + 1;
            var width = wsParams.fillParent && !wsParams.scrollParent ? this.drawer.getWidth() : this.drawer.wrapper.scrollWidth * wsParams.pixelRatio;
            var height1 = this.params.height * this.pixelRatio;
            var height2 = this.params.height * (this.params.notchPercentHeight / 100) * this.pixelRatio;
            var pixelsPerSecond = width / duration;

            var formatTime = this.params.formatTimeCallback;
            // if parameter is function, call the function with
            // pixelsPerSecond, otherwise simply take the value as-is
            var intervalFnOrVal = function intervalFnOrVal(option) {
                return typeof option === 'function' ? option(pixelsPerSecond) : option;
            };
            var timeInterval = intervalFnOrVal(this.params.timeInterval);
            var primaryLabelInterval = intervalFnOrVal(this.params.primaryLabelInterval);
            var secondaryLabelInterval = intervalFnOrVal(this.params.secondaryLabelInterval);

            var curPixel = 0;
            var curSeconds = 0;
            var i = void 0;
            // build an array of position data with index, second and pixel data,
            // this is then used multiple times below
            var positioning = [];
            for (i = 0; i < totalSeconds / timeInterval; i++) {
                positioning.push([i, curSeconds, curPixel]);
                curSeconds += timeInterval;
                curPixel += pixelsPerSecond * timeInterval;
            }

            // iterate over each position
            var renderPositions = function renderPositions(cb) {
                positioning.forEach(function (pos) {
                    cb(pos[0], pos[1], pos[2]);
                });
            };

            // render primary labels
            this.setFillStyles(this.params.primaryColor);
            this.setFonts(fontSize + 'px ' + this.params.fontFamily);
            this.setFillStyles(this.params.primaryFontColor);
            renderPositions(function (i, curSeconds, curPixel) {
                if (i % primaryLabelInterval === 0) {
                    _this4.fillRect(curPixel, 0, 1, height1);
                    _this4.fillText(formatTime(curSeconds), curPixel + _this4.params.labelPadding * _this4.pixelRatio, height1);
                }
            });

            // render secondary labels
            this.setFillStyles(this.params.secondaryColor);
            this.setFonts(fontSize + 'px ' + this.params.fontFamily);
            this.setFillStyles(this.params.secondaryFontColor);
            renderPositions(function (i, curSeconds, curPixel) {
                if (i % secondaryLabelInterval === 0) {
                    _this4.fillRect(curPixel, 0, 1, height1);
                    _this4.fillText(formatTime(curSeconds), curPixel + _this4.params.labelPadding * _this4.pixelRatio, height1);
                }
            });

            // render the actual notches (when no labels are used)
            this.setFillStyles(this.params.secondaryColor);
            renderPositions(function (i, curSeconds, curPixel) {
                if (i % secondaryLabelInterval !== 0 && i % primaryLabelInterval !== 0) {
                    _this4.fillRect(curPixel, 0, 1, height2);
                }
            });
        }

        /**
         * Set the canvas fill style
         *
         * @param {DOMString|CanvasGradient|CanvasPattern} fillStyle
         * @private
         */

    }, {
        key: 'setFillStyles',
        value: function setFillStyles(fillStyle) {
            this.canvases.forEach(function (canvas) {
                canvas.getContext('2d').fillStyle = fillStyle;
            });
        }

        /**
         * Set the canvas font
         *
         * @param {DOMString} font
         * @private
         */

    }, {
        key: 'setFonts',
        value: function setFonts(font) {
            this.canvases.forEach(function (canvas) {
                canvas.getContext('2d').font = font;
            });
        }

        /**
         * Draw a rectangle on the canvases
         *
         * (it figures out the offset for each canvas)
         *
         * @param {number} x
         * @param {number} y
         * @param {number} width
         * @param {number} height
         * @private
         */

    }, {
        key: 'fillRect',
        value: function fillRect(x, y, width, height) {
            var _this5 = this;

            this.canvases.forEach(function (canvas, i) {
                var leftOffset = i * _this5.maxCanvasWidth;

                var intersection = {
                    x1: Math.max(x, i * _this5.maxCanvasWidth),
                    y1: y,
                    x2: Math.min(x + width, i * _this5.maxCanvasWidth + canvas.width),
                    y2: y + height
                };

                if (intersection.x1 < intersection.x2) {
                    canvas.getContext('2d').fillRect(intersection.x1 - leftOffset, intersection.y1, intersection.x2 - intersection.x1, intersection.y2 - intersection.y1);
                }
            });
        }

        /**
         * Fill a given text on the canvases
         *
         * @param {string} text
         * @param {number} x
         * @param {number} y
         * @private
         */

    }, {
        key: 'fillText',
        value: function fillText(text, x, y) {
            var textWidth = void 0;
            var xOffset = 0;

            this.canvases.forEach(function (canvas) {
                var context = canvas.getContext('2d');
                var canvasWidth = context.canvas.width;

                if (xOffset > x + textWidth) {
                    return;
                }

                if (xOffset + canvasWidth > x) {
                    textWidth = context.measureText(text).width;
                    context.fillText(text, x - xOffset, y);
                }

                xOffset += canvasWidth;
            });
        }
    }]);

    return TimelinePlugin;
}();

var _initialiseProps = function _initialiseProps() {
    var _this6 = this;

    this._onScroll = function () {
        if (_this6.wrapper && _this6.drawer.wrapper) {
            _this6.wrapper.scrollLeft = _this6.drawer.wrapper.scrollLeft;
        }
    };

    this._onRedraw = function () {
        return _this6.render();
    };

    this._onReady = function () {
        var ws = _this6.wavesurfer;
        _this6.drawer = ws.drawer;
        _this6.pixelRatio = ws.drawer.params.pixelRatio;
        _this6.maxCanvasWidth = ws.drawer.maxCanvasWidth || ws.drawer.width;
        _this6.maxCanvasElementWidth = ws.drawer.maxCanvasElementWidth || Math.round(_this6.maxCanvasWidth / _this6.pixelRatio);

        ws.drawer.wrapper.addEventListener('scroll', _this6._onScroll);
        ws.on('redraw', _this6._onRedraw);
        ws.on('zoom', _this6._onZoom);
        _this6.render();
    };

    this._onWrapperClick = function (e) {
        e.preventDefault();
        var relX = 'offsetX' in e ? e.offsetX : e.layerX;
        _this6.fireEvent('click', relX / _this6.wrapper.scrollWidth || 0);
    };
};

exports.default = TimelinePlugin;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=wavesurfer.timeline.js.map

/***/ }),

/***/ "./src/js/wavesurfer.js":
/*!******************************!*\
  !*** ./src/js/wavesurfer.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * wavesurfer.js 2.0.4 (Thu Mar 01 2018 11:52:42 GMT-0800 (PST))
 * https://github.com/katspaugh/wavesurfer.js
 * @license BSD-3-Clause
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ajax = __webpack_require__(5);

Object.defineProperty(exports, 'ajax', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ajax).default;
  }
});

var _getId = __webpack_require__(6);

Object.defineProperty(exports, 'getId', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getId).default;
  }
});

var _max = __webpack_require__(7);

Object.defineProperty(exports, 'max', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_max).default;
  }
});

var _min = __webpack_require__(8);

Object.defineProperty(exports, 'min', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_min).default;
  }
});

var _observer = __webpack_require__(1);

Object.defineProperty(exports, 'Observer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_observer).default;
  }
});

var _extend = __webpack_require__(9);

Object.defineProperty(exports, 'extend', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_extend).default;
  }
});

var _style = __webpack_require__(10);

Object.defineProperty(exports, 'style', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_style).default;
  }
});

var _requestAnimationFrame = __webpack_require__(2);

Object.defineProperty(exports, 'requestAnimationFrame', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_requestAnimationFrame).default;
  }
});

var _frame = __webpack_require__(11);

Object.defineProperty(exports, 'frame', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_frame).default;
  }
});

var _debounce = __webpack_require__(12);

Object.defineProperty(exports, 'debounce', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_debounce).default;
  }
});

var _preventClick = __webpack_require__(13);

Object.defineProperty(exports, 'preventClick', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_preventClick).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @typedef {Object} ListenerDescriptor
 * @property {string} name The name of the event
 * @property {function} callback The callback
 * @property {function} un The function to call to remove the listener
 */

/**
 * Observer class
 */
var Observer = function () {
    /**
     * Instantiate Observer
     */
    function Observer() {
        _classCallCheck(this, Observer);

        /**
         * @private
         * @todo Initialise the handlers here already and remove the conditional
         * assignment in `on()`
         */
        this.handlers = null;
    }
    /**
     * Attach a handler function for an event.
     *
     * @param {string} event Name of the event to listen to
     * @param {function} fn The callback to trigger when the event is fired
     * @return {ListenerDescriptor}
     */


    _createClass(Observer, [{
        key: "on",
        value: function on(event, fn) {
            var _this = this;

            if (!this.handlers) {
                this.handlers = {};
            }

            var handlers = this.handlers[event];
            if (!handlers) {
                handlers = this.handlers[event] = [];
            }
            handlers.push(fn);

            // Return an event descriptor
            return {
                name: event,
                callback: fn,
                un: function un(e, fn) {
                    return _this.un(e, fn);
                }
            };
        }

        /**
         * Remove an event handler.
         *
         * @param {string} event Name of the event the listener that should be
         * removed listens to
         * @param {function} fn The callback that should be removed
         */

    }, {
        key: "un",
        value: function un(event, fn) {
            if (!this.handlers) {
                return;
            }

            var handlers = this.handlers[event];
            var i = void 0;
            if (handlers) {
                if (fn) {
                    for (i = handlers.length - 1; i >= 0; i--) {
                        if (handlers[i] == fn) {
                            handlers.splice(i, 1);
                        }
                    }
                } else {
                    handlers.length = 0;
                }
            }
        }

        /**
         * Remove all event handlers.
         */

    }, {
        key: "unAll",
        value: function unAll() {
            this.handlers = null;
        }

        /**
         * Attach a handler to an event. The handler is executed at most once per
         * event type.
         *
         * @param {string} event The event to listen to
         * @param {function} handler The callback that is only to be called once
         * @return {ListenerDescriptor}
         */

    }, {
        key: "once",
        value: function once(event, handler) {
            var _this2 = this;

            var fn = function fn() {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                /*  eslint-disable no-invalid-this */
                handler.apply(_this2, args);
                /*  eslint-enable no-invalid-this */
                setTimeout(function () {
                    _this2.un(event, fn);
                }, 0);
            };
            return this.on(event, fn);
        }

        /**
         * Manually fire an event
         *
         * @param {string} event The event to fire manually
         * @param {...any} args The arguments with which to call the listeners
         */

    }, {
        key: "fireEvent",
        value: function fireEvent(event) {
            for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
            }

            if (!this.handlers) {
                return;
            }
            var handlers = this.handlers[event];
            handlers && handlers.forEach(function (fn) {
                fn.apply(undefined, args);
            });
        }
    }]);

    return Observer;
}();

exports.default = Observer;
module.exports = exports["default"];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

/**
 * Returns the requestAnimationFrame function for the browser, or a shim with
 * setTimeout if none is found
 *
 * @return {function}
 */
exports.default = (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback, element) {
    return setTimeout(callback, 1000 / 60);
}).bind(window);

module.exports = exports["default"];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// using consts to prevent someone writing the string wrong
var PLAYING = 'playing';
var PAUSED = 'paused';
var FINISHED = 'finished';

/**
 * WebAudio backend
 *
 * @extends {Observer}
 */

var WebAudio = function (_util$Observer) {
    _inherits(WebAudio, _util$Observer);

    _createClass(WebAudio, [{
        key: 'supportsWebAudio',


        /**
         * Does the browser support this backend
         *
         * @return {boolean}
         */

        /** @private */

        /** @private */
        value: function supportsWebAudio() {
            return !!(window.AudioContext || window.webkitAudioContext);
        }

        /**
         * Get the audio context used by this backend or create one
         *
         * @return {AudioContext}
         */

        /** @private */

        /** @private */

    }, {
        key: 'getAudioContext',
        value: function getAudioContext() {
            if (!window.WaveSurferAudioContext) {
                window.WaveSurferAudioContext = new (window.AudioContext || window.webkitAudioContext)();
            }
            return window.WaveSurferAudioContext;
        }

        /**
         * Get the offline audio context used by this backend or create one
         *
         * @param {number} sampleRate
         * @return {OfflineAudioContext}
         */

    }, {
        key: 'getOfflineAudioContext',
        value: function getOfflineAudioContext(sampleRate) {
            if (!window.WaveSurferOfflineAudioContext) {
                window.WaveSurferOfflineAudioContext = new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(1, 2, sampleRate);
            }
            return window.WaveSurferOfflineAudioContext;
        }

        /**
         * Construct the backend
         *
         * @param {WavesurferParams} params
         */

    }]);

    function WebAudio(params) {
        var _this$stateBehaviors, _this$states;

        _classCallCheck(this, WebAudio);

        /** @private */
        var _this = _possibleConstructorReturn(this, (WebAudio.__proto__ || Object.getPrototypeOf(WebAudio)).call(this));

        _this.audioContext = null;
        _this.offlineAudioContext = null;
        _this.stateBehaviors = (_this$stateBehaviors = {}, _defineProperty(_this$stateBehaviors, PLAYING, {
            init: function init() {
                this.addOnAudioProcess();
            },
            getPlayedPercents: function getPlayedPercents() {
                var duration = this.getDuration();
                return this.getCurrentTime() / duration || 0;
            },
            getCurrentTime: function getCurrentTime() {
                return this.startPosition + this.getPlayedTime();
            }
        }), _defineProperty(_this$stateBehaviors, PAUSED, {
            init: function init() {
                this.removeOnAudioProcess();
            },
            getPlayedPercents: function getPlayedPercents() {
                var duration = this.getDuration();
                return this.getCurrentTime() / duration || 0;
            },
            getCurrentTime: function getCurrentTime() {
                return this.startPosition;
            }
        }), _defineProperty(_this$stateBehaviors, FINISHED, {
            init: function init() {
                this.removeOnAudioProcess();
                this.fireEvent('finish');
            },
            getPlayedPercents: function getPlayedPercents() {
                return 1;
            },
            getCurrentTime: function getCurrentTime() {
                return this.getDuration();
            }
        }), _this$stateBehaviors);
        _this.params = params;
        /** @private */
        _this.ac = params.audioContext || _this.getAudioContext();
        /**@private */
        _this.lastPlay = _this.ac.currentTime;
        /** @private */
        _this.startPosition = 0;
        /** @private  */
        _this.scheduledPause = null;
        /** @private */
        _this.states = (_this$states = {}, _defineProperty(_this$states, PLAYING, Object.create(_this.stateBehaviors[PLAYING])), _defineProperty(_this$states, PAUSED, Object.create(_this.stateBehaviors[PAUSED])), _defineProperty(_this$states, FINISHED, Object.create(_this.stateBehaviors[FINISHED])), _this$states);
        /** @private */
        _this.analyser = null;
        /** @private */
        _this.buffer = null;
        /** @private */
        _this.filters = [];
        /** @private */
        _this.gainNode = null;
        /** @private */
        _this.mergedPeaks = null;
        /** @private */
        _this.offlineAc = null;
        /** @private */
        _this.peaks = null;
        /** @private */
        _this.playbackRate = 1;
        /** @private */
        _this.analyser = null;
        /** @private */
        _this.scriptNode = null;
        /** @private */
        _this.source = null;
        /** @private */
        _this.splitPeaks = [];
        /** @private */
        _this.state = null;
        /** @private */
        _this.explicitDuration = null;
        return _this;
    }

    /**
     * Initialise the backend, called in `wavesurfer.createBackend()`
     */


    _createClass(WebAudio, [{
        key: 'init',
        value: function init() {
            this.createVolumeNode();
            this.createScriptNode();
            this.createAnalyserNode();

            this.setState(PAUSED);
            this.setPlaybackRate(this.params.audioRate);
            this.setLength(0);
        }

        /** @private */

    }, {
        key: 'disconnectFilters',
        value: function disconnectFilters() {
            if (this.filters) {
                this.filters.forEach(function (filter) {
                    filter && filter.disconnect();
                });
                this.filters = null;
                // Reconnect direct path
                this.analyser.connect(this.gainNode);
            }
        }

        /** @private */

    }, {
        key: 'setState',
        value: function setState(state) {
            if (this.state !== this.states[state]) {
                this.state = this.states[state];
                this.state.init.call(this);
            }
        }

        /**
         * Unpacked `setFilters()`
         *
         * @param {...AudioNode} filters
         */

    }, {
        key: 'setFilter',
        value: function setFilter() {
            for (var _len = arguments.length, filters = Array(_len), _key = 0; _key < _len; _key++) {
                filters[_key] = arguments[_key];
            }

            this.setFilters(filters);
        }

        /**
         * Insert custom Web Audio nodes into the graph
         *
         * @param {AudioNode[]} filters Packed filters array
         * @example
         * const lowpass = wavesurfer.backend.ac.createBiquadFilter();
         * wavesurfer.backend.setFilter(lowpass);
         */

    }, {
        key: 'setFilters',
        value: function setFilters(filters) {
            // Remove existing filters
            this.disconnectFilters();

            // Insert filters if filter array not empty
            if (filters && filters.length) {
                this.filters = filters;

                // Disconnect direct path before inserting filters
                this.analyser.disconnect();

                // Connect each filter in turn
                filters.reduce(function (prev, curr) {
                    prev.connect(curr);
                    return curr;
                }, this.analyser).connect(this.gainNode);
            }
        }

        /** @private */

    }, {
        key: 'createScriptNode',
        value: function createScriptNode() {
            if (this.ac.createScriptProcessor) {
                this.scriptNode = this.ac.createScriptProcessor(WebAudio.scriptBufferSize);
            } else {
                this.scriptNode = this.ac.createJavaScriptNode(WebAudio.scriptBufferSize);
            }

            this.scriptNode.connect(this.ac.destination);
        }

        /** @private */

    }, {
        key: 'addOnAudioProcess',
        value: function addOnAudioProcess() {
            var _this2 = this;

            this.scriptNode.onaudioprocess = function () {
                var time = _this2.getCurrentTime();

                if (time >= _this2.getDuration()) {
                    _this2.setState(FINISHED);
                    _this2.fireEvent('pause');
                } else if (time >= _this2.scheduledPause) {
                    _this2.pause();
                } else if (_this2.state === _this2.states[PLAYING]) {
                    _this2.fireEvent('audioprocess', time);
                }
            };
        }

        /** @private */

    }, {
        key: 'removeOnAudioProcess',
        value: function removeOnAudioProcess() {
            this.scriptNode.onaudioprocess = null;
        }

        /** @private */

    }, {
        key: 'createAnalyserNode',
        value: function createAnalyserNode() {
            this.analyser = this.ac.createAnalyser();
            this.analyser.connect(this.gainNode);
        }

        /**
         * Create the gain node needed to control the playback volume.
         *
         * @private
         */

    }, {
        key: 'createVolumeNode',
        value: function createVolumeNode() {
            // Create gain node using the AudioContext
            if (this.ac.createGain) {
                this.gainNode = this.ac.createGain();
            } else {
                this.gainNode = this.ac.createGainNode();
            }
            // Add the gain node to the graph
            this.gainNode.connect(this.ac.destination);
        }

        /**
         * Set the sink id for the media player
         *
         * @param {string} deviceId String value representing audio device id.
         */

    }, {
        key: 'setSinkId',
        value: function setSinkId(deviceId) {
            if (deviceId) {
                /**
                 * The webaudio api doesn't currently support setting the device
                 * output. Here we create an HTMLAudioElement, connect the
                 * webaudio stream to that element and setSinkId there.
                 */
                var audio = new window.Audio();
                if (!audio.setSinkId) {
                    return Promise.reject(new Error('setSinkId is not supported in your browser'));
                }
                audio.autoplay = true;
                var dest = this.ac.createMediaStreamDestination();
                this.gainNode.disconnect();
                this.gainNode.connect(dest);
                audio.src = URL.createObjectURL(dest.stream);

                return audio.setSinkId(deviceId);
            } else {
                return Promise.reject(new Error('Invalid deviceId: ' + deviceId));
            }
        }

        /**
         * Set the audio volume
         *
         * @param {number} value A floating point value between 0 and 1.
         */

    }, {
        key: 'setVolume',
        value: function setVolume(value) {
            this.gainNode.gain.setValueAtTime(value, this.ac.currentTime);
        }

        /**
         * Get the current volume
         *
         * @return {number} value A floating point value between 0 and 1.
         */

    }, {
        key: 'getVolume',
        value: function getVolume() {
            return this.gainNode.gain.value;
        }

        /** @private */

    }, {
        key: 'decodeArrayBuffer',
        value: function decodeArrayBuffer(arraybuffer, callback, errback) {
            if (!this.offlineAc) {
                this.offlineAc = this.getOfflineAudioContext(this.ac ? this.ac.sampleRate : 44100);
            }
            this.offlineAc.decodeAudioData(arraybuffer, function (data) {
                return callback(data);
            }, errback);
        }

        /**
         * Set pre-decoded peaks
         *
         * @param {number[]|number[][]} peaks
         * @param {?number} duration
         */

    }, {
        key: 'setPeaks',
        value: function setPeaks(peaks, duration) {
            this.explicitDuration = duration;
            this.peaks = peaks;
        }

        /**
         * Set the rendered length (different from the length of the audio).
         *
         * @param {number} length
         */

    }, {
        key: 'setLength',
        value: function setLength(length) {
            // No resize, we can preserve the cached peaks.
            if (this.mergedPeaks && length == 2 * this.mergedPeaks.length - 1 + 2) {
                return;
            }

            this.splitPeaks = [];
            this.mergedPeaks = [];
            // Set the last element of the sparse array so the peak arrays are
            // appropriately sized for other calculations.
            var channels = this.buffer ? this.buffer.numberOfChannels : 1;
            var c = void 0;
            for (c = 0; c < channels; c++) {
                this.splitPeaks[c] = [];
                this.splitPeaks[c][2 * (length - 1)] = 0;
                this.splitPeaks[c][2 * (length - 1) + 1] = 0;
            }
            this.mergedPeaks[2 * (length - 1)] = 0;
            this.mergedPeaks[2 * (length - 1) + 1] = 0;
        }

        /**
         * Compute the max and min value of the waveform when broken into <length> subranges.
         *
         * @param {number} length How many subranges to break the waveform into.
         * @param {number} first First sample in the required range.
         * @param {number} last Last sample in the required range.
         * @return {number[]|number[][]} Array of 2*<length> peaks or array of arrays of
         * peaks consisting of (max, min) values for each subrange.
         */

    }, {
        key: 'getPeaks',
        value: function getPeaks(length, first, last) {
            if (this.peaks) {
                return this.peaks;
            }

            first = first || 0;
            last = last || length - 1;

            this.setLength(length);

            /**
             * The following snippet fixes a buffering data issue on the Safari
             * browser which returned undefined It creates the missing buffer based
             * on 1 channel, 4096 samples and the sampleRate from the current
             * webaudio context 4096 samples seemed to be the best fit for rendering
             * will review this code once a stable version of Safari TP is out
             */
            if (!this.buffer.length) {
                var newBuffer = this.createBuffer(1, 4096, this.sampleRate);
                this.buffer = newBuffer.buffer;
            }

            var sampleSize = this.buffer.length / length;
            var sampleStep = ~~(sampleSize / 10) || 1;
            var channels = this.buffer.numberOfChannels;
            var c = void 0;

            for (c = 0; c < channels; c++) {
                var peaks = this.splitPeaks[c];
                var chan = this.buffer.getChannelData(c);
                var i = void 0;

                for (i = first; i <= last; i++) {
                    var start = ~~(i * sampleSize);
                    var end = ~~(start + sampleSize);
                    var min = 0;
                    var max = 0;
                    var j = void 0;

                    for (j = start; j < end; j += sampleStep) {
                        var value = chan[j];

                        if (value > max) {
                            max = value;
                        }

                        if (value < min) {
                            min = value;
                        }
                    }

                    peaks[2 * i] = max;
                    peaks[2 * i + 1] = min;

                    if (c == 0 || max > this.mergedPeaks[2 * i]) {
                        this.mergedPeaks[2 * i] = max;
                    }

                    if (c == 0 || min < this.mergedPeaks[2 * i + 1]) {
                        this.mergedPeaks[2 * i + 1] = min;
                    }
                }
            }

            return this.params.splitChannels ? this.splitPeaks : this.mergedPeaks;
        }

        /**
         * Get the position from 0 to 1
         *
         * @return {number}
         */

    }, {
        key: 'getPlayedPercents',
        value: function getPlayedPercents() {
            return this.state.getPlayedPercents.call(this);
        }

        /** @private */

    }, {
        key: 'disconnectSource',
        value: function disconnectSource() {
            if (this.source) {
                this.source.disconnect();
            }
        }

        /**
         * This is called when wavesurfer is destroyed
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            if (!this.isPaused()) {
                this.pause();
            }
            this.unAll();
            this.buffer = null;
            this.disconnectFilters();
            this.disconnectSource();
            this.gainNode.disconnect();
            this.scriptNode.disconnect();
            this.analyser.disconnect();

            // close the audioContext if closeAudioContext option is set to true
            if (this.params.closeAudioContext) {
                // check if browser supports AudioContext.close()
                if (typeof this.ac.close === 'function' && this.ac.state != 'closed') {
                    this.ac.close();
                }
                // clear the reference to the audiocontext
                this.ac = null;
                // clear the actual audiocontext, either passed as param or the
                // global singleton
                if (!this.params.audioContext) {
                    window.WaveSurferAudioContext = null;
                } else {
                    this.params.audioContext = null;
                }
                // clear the offlineAudioContext
                window.WaveSurferOfflineAudioContext = null;
            }
        }

        /**
         * Loaded a decoded audio buffer
         *
         * @param {Object} buffer
         */

    }, {
        key: 'load',
        value: function load(buffer) {
            this.startPosition = 0;
            this.lastPlay = this.ac.currentTime;
            this.buffer = buffer;
            this.createSource();
        }

        /** @private */

    }, {
        key: 'createSource',
        value: function createSource() {
            this.disconnectSource();
            this.source = this.ac.createBufferSource();

            // adjust for old browsers
            this.source.start = this.source.start || this.source.noteGrainOn;
            this.source.stop = this.source.stop || this.source.noteOff;

            this.source.playbackRate.setValueAtTime(this.playbackRate, this.ac.currentTime);
            this.source.buffer = this.buffer;
            this.source.connect(this.analyser);
        }

        /**
         * Used by `wavesurfer.isPlaying()` and `wavesurfer.playPause()`
         *
         * @return {boolean}
         */

    }, {
        key: 'isPaused',
        value: function isPaused() {
            return this.state !== this.states[PLAYING];
        }

        /**
         * Used by `wavesurfer.getDuration()`
         *
         * @return {number}
         */

    }, {
        key: 'getDuration',
        value: function getDuration() {
            if (!this.buffer) {
                if (this.explicitDuration) {
                    return this.explicitDuration;
                }
                return 0;
            }
            return this.buffer.duration;
        }

        /**
         * Used by `wavesurfer.seekTo()`
         *
         * @param {number} start Position to start at in seconds
         * @param {number} end Position to end at in seconds
         * @return {{start: number, end: number}}
         */

    }, {
        key: 'seekTo',
        value: function seekTo(start, end) {
            if (!this.buffer) {
                return;
            }

            this.scheduledPause = null;

            if (start == null) {
                start = this.getCurrentTime();
                if (start >= this.getDuration()) {
                    start = 0;
                }
            }
            if (end == null) {
                end = this.getDuration();
            }

            this.startPosition = start;
            this.lastPlay = this.ac.currentTime;

            if (this.state === this.states[FINISHED]) {
                this.setState(PAUSED);
            }

            return {
                start: start,
                end: end
            };
        }

        /**
         * Get the playback position in seconds
         *
         * @return {number}
         */

    }, {
        key: 'getPlayedTime',
        value: function getPlayedTime() {
            return (this.ac.currentTime - this.lastPlay) * this.playbackRate;
        }

        /**
         * Plays the loaded audio region.
         *
         * @param {number} start Start offset in seconds, relative to the beginning
         * of a clip.
         * @param {number} end When to stop relative to the beginning of a clip.
         */

    }, {
        key: 'play',
        value: function play(start, end) {
            if (!this.buffer) {
                return;
            }

            // need to re-create source on each playback
            this.createSource();

            var adjustedTime = this.seekTo(start, end);

            start = adjustedTime.start;
            end = adjustedTime.end;

            this.scheduledPause = end;

            this.source.start(0, start, end - start);

            if (this.ac.state == 'suspended') {
                this.ac.resume && this.ac.resume();
            }

            this.setState(PLAYING);

            this.fireEvent('play');
        }

        /**
         * Pauses the loaded audio.
         */

    }, {
        key: 'pause',
        value: function pause() {
            this.scheduledPause = null;

            this.startPosition += this.getPlayedTime();
            this.source && this.source.stop(0);

            this.setState(PAUSED);

            this.fireEvent('pause');
        }

        /**
         * Returns the current time in seconds relative to the audioclip's
         * duration.
         *
         * @return {number}
         */

    }, {
        key: 'getCurrentTime',
        value: function getCurrentTime() {
            return this.state.getCurrentTime.call(this);
        }

        /**
         * Returns the current playback rate. (0=no playback, 1=normal playback)
         *
         * @return {number}
         */

    }, {
        key: 'getPlaybackRate',
        value: function getPlaybackRate() {
            return this.playbackRate;
        }

        /**
         * Set the audio source playback rate.
         *
         * @param {number} value
         */

    }, {
        key: 'setPlaybackRate',
        value: function setPlaybackRate(value) {
            value = value || 1;
            if (this.isPaused()) {
                this.playbackRate = value;
            } else {
                this.pause();
                this.playbackRate = value;
                this.play();
            }
        }
    }]);

    return WebAudio;
}(util.Observer);

WebAudio.scriptBufferSize = 256;
exports.default = WebAudio;
module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var util = _interopRequireWildcard(_util);

var _drawer = __webpack_require__(14);

var _drawer2 = _interopRequireDefault(_drawer);

var _webaudio = __webpack_require__(3);

var _webaudio2 = _interopRequireDefault(_webaudio);

var _mediaelement = __webpack_require__(16);

var _mediaelement2 = _interopRequireDefault(_mediaelement);

var _peakcache = __webpack_require__(17);

var _peakcache2 = _interopRequireDefault(_peakcache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * This work is licensed under a BSD-3-Clause License.
 */

/** @external {HTMLElement} https://developer.mozilla.org/en/docs/Web/API/HTMLElement */
/** @external {OfflineAudioContext} https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext */
/** @external {File} https://developer.mozilla.org/en-US/docs/Web/API/File */
/** @external {Blob} https://developer.mozilla.org/en-US/docs/Web/API/Blob */
/** @external {CanvasRenderingContext2D} https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D */
/** @external {MediaStreamConstraints} https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamConstraints */
/** @external {AudioNode} https://developer.mozilla.org/de/docs/Web/API/AudioNode */

/**
 * @typedef {Object} WavesurferParams
 * @property {AudioContext} audioContext=null Use your own previously
 * initialized AudioContext or leave blank.
 * @property {number} audioRate=1 Speed at which to play audio. Lower number is
 * slower.
 * @property {boolean} autoCenter=true If a scrollbar is present, center the
 * waveform around the progress
 * @property {string} backend='WebAudio' `'WebAudio'|'MediaElement'` In most cases
 * you don't have to set this manually. MediaElement is a fallback for
 * unsupported browsers.
 * @property {number} barHeight=1 The height of the wave
 * @property {number} barGap=null The optional spacing between bars of the wave,
 * if not provided will be calculated in legacy format.
 * @property {boolean} closeAudioContext=false Close and nullify all audio
 * contexts when the destroy method is called.
 * @property {!string|HTMLElement} container CSS selector or HTML element where
 * the waveform should be drawn. This is the only required parameter.
 * @property {string} cursorColor='#333' The fill color of the cursor indicating
 * the playhead position.
 * @property {number} cursorWidth=1 Measured in pixels.
 * @property {boolean} fillParent=true Whether to fill the entire container or
 * draw only according to `minPxPerSec`.
 * @property {boolean} forceDecode=false Force decoding of audio using web audio
 * when zooming to get a more detailed waveform.
 * @property {number} height=128 The height of the waveform. Measured in
 * pixels.
 * @property {boolean} hideScrollbar=false Whether to hide the horizontal
 * scrollbar when one would normally be shown.
 * @property {boolean} interact=true Whether the mouse interaction will be
 * enabled at initialization. You can switch this parameter at any time later
 * on.
 * @property {boolean} loopSelection=true (Use with regions plugin) Enable
 * looping of selected regions
 * @property {number} maxCanvasWidth=4000 Maximum width of a single canvas in
 * pixels, excluding a small overlap (2 * `pixelRatio`, rounded up to the next
 * even integer). If the waveform is longer than this value, additional canvases
 * will be used to render the waveform, which is useful for very large waveforms
 * that may be too wide for browsers to draw on a single canvas.
 * @property {boolean} mediaControls=false (Use with backend `MediaElement`)
 * this enables the native controls for the media element
 * @property {string} mediaType='audio' (Use with backend `MediaElement`)
 * `'audio'|'video'`
 * @property {number} minPxPerSec=20 Minimum number of pixels per second of
 * audio.
 * @property {boolean} normalize=false If true, normalize by the maximum peak
 * instead of 1.0.
 * @property {boolean} partialRender=false Use the PeakCache to improve
 * rendering speed of large waveforms
 * @property {number} pixelRatio=window.devicePixelRatio The pixel ratio used to
 * calculate display
 * @property {PluginDefinition[]} plugins=[] An array of plugin definitions to
 * register during instantiation, they will be directly initialised unless they
 * are added with the `deferInit` property set to true.
 * @property {string} progressColor='#555' The fill color of the part of the
 * waveform behind the cursor.
 * @property {boolean} removeMediaElementOnDestroy=true Set to false to keep the
 * media element in the DOM when the player is destroyed. This is useful when
 * reusing an existing media element via the `loadMediaElement` method.
 * @property {Object} renderer=MultiCanvas Can be used to inject a custom
 * renderer.
 * @property {boolean|number} responsive=false If set to `true` resize the
 * waveform, when the window is resized. This is debounced with a `100ms`
 * timeout by default. If this parameter is a number it represents that timeout.
 * @property {boolean} scrollParent=false Whether to scroll the container with a
 * lengthy waveform. Otherwise the waveform is shrunk to the container width
 * (see fillParent).
 * @property {number} skipLength=2 Number of seconds to skip with the
 * skipForward() and skipBackward() methods.
 * @property {boolean} splitChannels=false Render with seperate waveforms for
 * the channels of the audio
 * @property {string} waveColor='#999' The fill color of the waveform after the
 * cursor.
 * @property {object} xhr={} XHR options.
 */

/**
 * @typedef {Object} PluginDefinition
 * @desc The Object used to describe a plugin
 * @example wavesurfer.addPlugin(pluginDefinition);
 * @property {string} name The name of the plugin, the plugin instance will be
 * added as a property to the wavesurfer instance under this name
 * @property {?Object} staticProps The properties that should be added to the
 * wavesurfer instance as static properties
 * @property {?boolean} deferInit Don't initialise plugin
 * automatically
 * @property {Object} params={} The plugin parameters, they are the first parameter
 * passed to the plugin class constructor function
 * @property {PluginClass} instance The plugin instance factory, is called with
 * the dependency specified in extends. Returns the plugin class.
 */

/**
 * @interface PluginClass
 *
 * @desc This is the interface which is implemented by all plugin classes. Note
 * that this only turns into an observer after being passed through
 * `wavesurfer.addPlugin`.
 *
 * @extends {Observer}
 */
var PluginClass = function () {
    _createClass(PluginClass, [{
        key: 'create',

        /**
         * Plugin definition factory
         *
         * This function must be used to create a plugin definition which can be
         * used by wavesurfer to correctly instantiate the plugin.
         *
         * @param  {Object} params={} The plugin params (specific to the plugin)
         * @return {PluginDefinition} an object representing the plugin
         */
        value: function create(params) {}
        /**
         * Construct the plugin
         *
         * @param {Object} ws The wavesurfer instance
         * @param {Object} params={} The plugin params (specific to the plugin)
         */

    }]);

    function PluginClass(ws, params) {
        _classCallCheck(this, PluginClass);
    }
    /**
     * Initialise the plugin
     *
     * Start doing something. This is called by
     * `wavesurfer.initPlugin(pluginName)`
     */


    _createClass(PluginClass, [{
        key: 'init',
        value: function init() {}
        /**
         * Destroy the plugin instance
         *
         * Stop doing something. This is called by
         * `wavesurfer.destroyPlugin(pluginName)`
         */

    }, {
        key: 'destroy',
        value: function destroy() {}
    }]);

    return PluginClass;
}();

/**
 * WaveSurfer core library class
 *
 * @extends {Observer}
 * @example
 * const params = {
 *   container: '#waveform',
 *   waveColor: 'violet',
 *   progressColor: 'purple'
 * };
 *
 * // initialise like this
 * const wavesurfer = WaveSurfer.create(params);
 *
 * // or like this ...
 * const wavesurfer = new WaveSurfer(params);
 * wavesurfer.init();
 *
 * // load audio file
 * wavesurfer.load('example/media/demo.wav');
 */


var WaveSurfer = function (_util$Observer) {
    _inherits(WaveSurfer, _util$Observer);

    _createClass(WaveSurfer, null, [{
        key: 'create',


        /**
         * Instantiate this class, call its `init` function and returns it
         *
         * @param {WavesurferParams} params
         * @return {Object} WaveSurfer instance
         * @example const wavesurfer = WaveSurfer.create(params);
         */

        /** @private */
        value: function create(params) {
            var wavesurfer = new WaveSurfer(params);
            return wavesurfer.init();
        }

        /**
         * Functions in the `util` property are available as a prototype property to
         * all instances
         *
         * @type {Object}
         * @example
         * const wavesurfer = WaveSurfer.create(params);
         * wavesurfer.util.style(myElement, { background: 'blue' });
         */


        /** @private */


        /**
         * Functions in the `util` property are available as a static property of the
         * WaveSurfer class
         *
         * @type {Object}
         * @example
         * WaveSurfer.util.style(myElement, { background: 'blue' });
         */

    }]);

    /**
     * Initialise wavesurfer instance
     *
     * @param {WavesurferParams} params Instantiation options for wavesurfer
     * @example
     * const wavesurfer = new WaveSurfer(params);
     * @returns {this}
     */
    function WaveSurfer(params) {
        var _ret;

        _classCallCheck(this, WaveSurfer);

        /**
         * Extract relevant parameters (or defaults)
         * @private
         */
        var _this = _possibleConstructorReturn(this, (WaveSurfer.__proto__ || Object.getPrototypeOf(WaveSurfer)).call(this));

        _this.defaultParams = {
            audioContext: null,
            audioRate: 1,
            autoCenter: true,
            backend: 'WebAudio',
            barHeight: 1,
            barGap: null,
            container: null,
            cursorColor: '#333',
            cursorWidth: 1,
            dragSelection: true,
            fillParent: true,
            forceDecode: false,
            height: 128,
            hideScrollbar: false,
            interact: true,
            loopSelection: true,
            maxCanvasWidth: 4000,
            mediaContainer: null,
            mediaControls: false,
            mediaType: 'audio',
            minPxPerSec: 20,
            normalize: false,
            partialRender: false,
            pixelRatio: window.devicePixelRatio || screen.deviceXDPI / screen.logicalXDPI,
            plugins: [],
            progressColor: '#555',
            removeMediaElementOnDestroy: true,
            renderer: _drawer2.default,
            responsive: false,
            scrollParent: false,
            skipLength: 2,
            splitChannels: false,
            waveColor: '#999',
            xhr: {}
        };
        _this.backends = {
            MediaElement: _mediaelement2.default,
            WebAudio: _webaudio2.default
        };
        _this.util = util;
        _this.params = util.extend({}, _this.defaultParams, params);

        /** @private */
        _this.container = 'string' == typeof params.container ? document.querySelector(_this.params.container) : _this.params.container;

        if (!_this.container) {
            throw new Error('Container element not found');
        }

        if (_this.params.mediaContainer == null) {
            /** @private */
            _this.mediaContainer = _this.container;
        } else if (typeof _this.params.mediaContainer == 'string') {
            /** @private */
            _this.mediaContainer = document.querySelector(_this.params.mediaContainer);
        } else {
            /** @private */
            _this.mediaContainer = _this.params.mediaContainer;
        }

        if (!_this.mediaContainer) {
            throw new Error('Media Container element not found');
        }

        if (_this.params.maxCanvasWidth <= 1) {
            throw new Error('maxCanvasWidth must be greater than 1');
        } else if (_this.params.maxCanvasWidth % 2 == 1) {
            throw new Error('maxCanvasWidth must be an even number');
        }

        /**
         * @private Used to save the current volume when muting so we can
         * restore once unmuted
         * @type {number}
         */
        _this.savedVolume = 0;

        /**
         * @private The current muted state
         * @type {boolean}
         */
        _this.isMuted = false;

        /**
         * @private Will hold a list of event descriptors that need to be
         * cancelled on subsequent loads of audio
         * @type {Object[]}
         */
        _this.tmpEvents = [];

        /**
         * @private Holds any running audio downloads
         * @type {Observer}
         */
        _this.currentAjax = null;
        /** @private */
        _this.arraybuffer = null;
        /** @private */
        _this.drawer = null;
        /** @private */
        _this.backend = null;
        /** @private */
        _this.peakCache = null;

        // cache constructor objects
        if (typeof _this.params.renderer !== 'function') {
            throw new Error('Renderer parameter is invalid');
        }
        /**
         * @private The uninitialised Drawer class
         */
        _this.Drawer = _this.params.renderer;
        /**
         * @private The uninitialised Backend class
         */
        _this.Backend = _this.backends[_this.params.backend];

        /**
         * @private map of plugin names that are currently initialised
         */
        _this.initialisedPluginList = {};
        /** @private */
        _this.isDestroyed = false;
        /** @private */
        _this.isReady = false;

        // responsive debounced event listener. If this.params.responsive is not
        // set, this is never called. Use 100ms or this.params.responsive as
        // timeout for the debounce function.
        var prevWidth = 0;
        _this._onResize = util.debounce(function () {
            if (prevWidth != _this.drawer.wrapper.clientWidth && !_this.params.scrollParent) {
                prevWidth = _this.drawer.wrapper.clientWidth;
                _this.drawer.fireEvent('redraw');
            }
        }, typeof _this.params.responsive === 'number' ? _this.params.responsive : 100);

        return _ret = _this, _possibleConstructorReturn(_this, _ret);
    }

    /**
     * Initialise the wave
     *
     * @example
     * var wavesurfer = new WaveSurfer(params);
     * wavesurfer.init();
     * @return {this}
     */


    _createClass(WaveSurfer, [{
        key: 'init',
        value: function init() {
            this.registerPlugins(this.params.plugins);
            this.createDrawer();
            this.createBackend();
            this.createPeakCache();
            return this;
        }

        /**
         * Add and initialise array of plugins (if `plugin.deferInit` is falsey),
         * this function is called in the init function of wavesurfer
         *
         * @param {PluginDefinition[]} plugins An array of plugin definitions
         * @emits {WaveSurfer#plugins-registered} Called with the array of plugin definitions
         * @return {this}
         */

    }, {
        key: 'registerPlugins',
        value: function registerPlugins(plugins) {
            var _this2 = this;

            // first instantiate all the plugins
            plugins.forEach(function (plugin) {
                return _this2.addPlugin(plugin);
            });

            // now run the init functions
            plugins.forEach(function (plugin) {
                // call init function of the plugin if deferInit is falsey
                // in that case you would manually use initPlugins()
                if (!plugin.deferInit) {
                    _this2.initPlugin(plugin.name);
                }
            });
            this.fireEvent('plugins-registered', plugins);
            return this;
        }

        /**
         * Add a plugin object to wavesurfer
         *
         * @param {PluginDefinition} plugin A plugin definition
         * @emits {WaveSurfer#plugin-added} Called with the name of the plugin that was added
         * @example wavesurfer.addPlugin(WaveSurfer.minimap());
         * @return {this}
         */

    }, {
        key: 'addPlugin',
        value: function addPlugin(plugin) {
            var _this3 = this;

            if (!plugin.name) {
                throw new Error('Plugin does not have a name!');
            }
            if (!plugin.instance) {
                throw new Error('Plugin ' + plugin.name + ' does not have an instance property!');
            }

            // staticProps properties are applied to wavesurfer instance
            if (plugin.staticProps) {
                Object.keys(plugin.staticProps).forEach(function (pluginStaticProp) {
                    /**
                     * Properties defined in a plugin definition's `staticProps` property are added as
                     * staticProps properties of the WaveSurfer instance
                     */
                    _this3[pluginStaticProp] = plugin.staticProps[pluginStaticProp];
                });
            }

            var Instance = plugin.instance;

            // turn the plugin instance into an observer
            var observerPrototypeKeys = Object.getOwnPropertyNames(util.Observer.prototype);
            observerPrototypeKeys.forEach(function (key) {
                Instance.prototype[key] = util.Observer.prototype[key];
            });

            /**
             * Instantiated plugin classes are added as a property of the wavesurfer
             * instance
             * @type {Object}
             */
            this[plugin.name] = new Instance(plugin.params || {}, this);
            this.fireEvent('plugin-added', plugin.name);
            return this;
        }

        /**
         * Initialise a plugin
         *
         * @param {string} name A plugin name
         * @emits WaveSurfer#plugin-initialised
         * @example wavesurfer.initPlugin('minimap');
         * @return {this}
         */

    }, {
        key: 'initPlugin',
        value: function initPlugin(name) {
            if (!this[name]) {
                throw new Error('Plugin ' + name + ' has not been added yet!');
            }
            if (this.initialisedPluginList[name]) {
                // destroy any already initialised plugins
                this.destroyPlugin(name);
            }
            this[name].init();
            this.initialisedPluginList[name] = true;
            this.fireEvent('plugin-initialised', name);
            return this;
        }

        /**
         * Destroy a plugin
         *
         * @param {string} name A plugin name
         * @emits WaveSurfer#plugin-destroyed
         * @example wavesurfer.destroyPlugin('minimap');
         * @returns {this}
         */

    }, {
        key: 'destroyPlugin',
        value: function destroyPlugin(name) {
            if (!this[name]) {
                throw new Error('Plugin ' + name + ' has not been added yet and cannot be destroyed!');
            }
            if (!this.initialisedPluginList[name]) {
                throw new Error('Plugin ' + name + ' is not active and cannot be destroyed!');
            }
            if (typeof this[name].destroy !== 'function') {
                throw new Error('Plugin ' + name + ' does not have a destroy function!');
            }

            this[name].destroy();
            delete this.initialisedPluginList[name];
            this.fireEvent('plugin-destroyed', name);
            return this;
        }

        /**
         * Destroy all initialised plugins. Convenience function to use when
         * wavesurfer is removed
         *
         * @private
         */

    }, {
        key: 'destroyAllPlugins',
        value: function destroyAllPlugins() {
            var _this4 = this;

            Object.keys(this.initialisedPluginList).forEach(function (name) {
                return _this4.destroyPlugin(name);
            });
        }

        /**
         * Create the drawer and draw the waveform
         *
         * @private
         * @emits WaveSurfer#drawer-created
         */

    }, {
        key: 'createDrawer',
        value: function createDrawer() {
            var _this5 = this;

            this.drawer = new this.Drawer(this.container, this.params);
            this.drawer.init();
            this.fireEvent('drawer-created', this.drawer);

            if (this.params.responsive !== false) {
                window.addEventListener('resize', this._onResize, true);
                window.addEventListener('orientationchange', this._onResize, true);
            }

            this.drawer.on('redraw', function () {
                _this5.drawBuffer();
                _this5.drawer.progress(_this5.backend.getPlayedPercents());
            });

            // Click-to-seek
            this.drawer.on('click', function (e, progress) {
                setTimeout(function () {
                    return _this5.seekTo(progress);
                }, 0);
            });

            // Relay the scroll event from the drawer
            this.drawer.on('scroll', function (e) {
                if (_this5.params.partialRender) {
                    _this5.drawBuffer();
                }
                _this5.fireEvent('scroll', e);
            });
        }

        /**
         * Create the backend
         *
         * @private
         * @emits WaveSurfer#backend-created
         */

    }, {
        key: 'createBackend',
        value: function createBackend() {
            var _this6 = this;

            if (this.backend) {
                this.backend.destroy();
            }

            // Back compat
            if (this.params.backend == 'AudioElement') {
                this.params.backend = 'MediaElement';
            }

            if (this.params.backend == 'WebAudio' && !this.Backend.prototype.supportsWebAudio.call(null)) {
                this.params.backend = 'MediaElement';
            }

            this.backend = new this.Backend(this.params);
            this.backend.init();
            this.fireEvent('backend-created', this.backend);

            this.backend.on('finish', function () {
                return _this6.fireEvent('finish');
            });
            this.backend.on('play', function () {
                return _this6.fireEvent('play');
            });
            this.backend.on('pause', function () {
                return _this6.fireEvent('pause');
            });

            this.backend.on('audioprocess', function (time) {
                _this6.drawer.progress(_this6.backend.getPlayedPercents());
                _this6.fireEvent('audioprocess', time);
            });
        }

        /**
         * Create the peak cache
         *
         * @private
         */

    }, {
        key: 'createPeakCache',
        value: function createPeakCache() {
            if (this.params.partialRender) {
                this.peakCache = new _peakcache2.default();
            }
        }

        /**
         * Get the duration of the audio clip
         *
         * @example const duration = wavesurfer.getDuration();
         * @return {number} Duration in seconds
         */

    }, {
        key: 'getDuration',
        value: function getDuration() {
            return this.backend.getDuration();
        }

        /**
         * Get the current playback position
         *
         * @example const currentTime = wavesurfer.getCurrentTime();
         * @return {number} Playback position in seconds
         */

    }, {
        key: 'getCurrentTime',
        value: function getCurrentTime() {
            return this.backend.getCurrentTime();
        }

        /**
         * Set the current play time in seconds.
         *
         * @param {number} seconds A positive number in seconds. E.g. 10 means 10
         * seconds, 60 means 1 minute
         */

    }, {
        key: 'setCurrentTime',
        value: function setCurrentTime(seconds) {
            if (seconds >= this.getDuration()) {
                this.seekTo(1);
            } else {
                this.seekTo(seconds / this.getDuration());
            }
        }

        /**
         * Starts playback from the current position. Optional start and end
         * measured in seconds can be used to set the range of audio to play.
         *
         * @param {?number} start Position to start at
         * @param {?number} end Position to end at
         * @emits WaveSurfer#interaction
         * @return {Promise}
         * @example
         * // play from second 1 to 5
         * wavesurfer.play(1, 5);
         */

    }, {
        key: 'play',
        value: function play(start, end) {
            var _this7 = this;

            this.fireEvent('interaction', function () {
                return _this7.play(start, end);
            });
            return this.backend.play(start, end);
        }

        /**
         * Stops playback
         *
         * @example wavesurfer.pause();
         * @return {Promise}
         */

    }, {
        key: 'pause',
        value: function pause() {
            if (!this.backend.isPaused()) {
                return this.backend.pause();
            }
        }

        /**
         * Toggle playback
         *
         * @example wavesurfer.playPause();
         * @return {Promise}
         */

    }, {
        key: 'playPause',
        value: function playPause() {
            return this.backend.isPaused() ? this.play() : this.pause();
        }

        /**
         * Get the current playback state
         *
         * @example const isPlaying = wavesurfer.isPlaying();
         * @return {boolean} False if paused, true if playing
         */

    }, {
        key: 'isPlaying',
        value: function isPlaying() {
            return !this.backend.isPaused();
        }

        /**
         * Skip backward
         *
         * @param {?number} seconds Amount to skip back, if not specified `skipLength`
         * is used
         * @example wavesurfer.skipBackward();
         */

    }, {
        key: 'skipBackward',
        value: function skipBackward(seconds) {
            this.skip(-seconds || -this.params.skipLength);
        }

        /**
         * Skip forward
         *
         * @param {?number} seconds Amount to skip back, if not specified `skipLength`
         * is used
         * @example wavesurfer.skipForward();
         */

    }, {
        key: 'skipForward',
        value: function skipForward(seconds) {
            this.skip(seconds || this.params.skipLength);
        }

        /**
         * Skip a number of seconds from the current position (use a negative value
         * to go backwards).
         *
         * @param {number} offset Amount to skip back or forwards
         * @example
         * // go back 2 seconds
         * wavesurfer.skip(-2);
         */

    }, {
        key: 'skip',
        value: function skip(offset) {
            var duration = this.getDuration() || 1;
            var position = this.getCurrentTime() || 0;
            position = Math.max(0, Math.min(duration, position + (offset || 0)));
            this.seekAndCenter(position / duration);
        }

        /**
         * Seeks to a position and centers the view
         *
         * @param {number} progress Between 0 (=beginning) and 1 (=end)
         * @example
         * // seek and go to the middle of the audio
         * wavesurfer.seekTo(0.5);
         */

    }, {
        key: 'seekAndCenter',
        value: function seekAndCenter(progress) {
            this.seekTo(progress);
            this.drawer.recenter(progress);
        }

        /**
         * Seeks to a position
         *
         * @param {number} progress Between 0 (=beginning) and 1 (=end)
         * @emits WaveSurfer#interaction
         * @emits WaveSurfer#seek
         * @example
         * // seek to the middle of the audio
         * wavesurfer.seekTo(0.5);
         */

    }, {
        key: 'seekTo',
        value: function seekTo(progress) {
            var _this8 = this;

            // return an error if progress is not a number between 0 and 1
            if (typeof progress !== 'number' || !isFinite(progress) || progress < 0 || progress > 1) {
                return console.error('Error calling wavesurfer.seekTo, parameter must be a number between 0 and 1!');
            }
            this.fireEvent('interaction', function () {
                return _this8.seekTo(progress);
            });

            var paused = this.backend.isPaused();
            // avoid draw wrong position while playing backward seeking
            if (!paused) {
                this.backend.pause();
            }
            // avoid small scrolls while paused seeking
            var oldScrollParent = this.params.scrollParent;
            this.params.scrollParent = false;
            this.backend.seekTo(progress * this.getDuration());
            this.drawer.progress(progress);

            if (!paused) {
                this.backend.play();
            }
            this.params.scrollParent = oldScrollParent;
            this.fireEvent('seek', progress);
        }

        /**
         * Stops and goes to the beginning.
         *
         * @example wavesurfer.stop();
         */

    }, {
        key: 'stop',
        value: function stop() {
            this.pause();
            this.seekTo(0);
            this.drawer.progress(0);
        }

        /**
         * Set the playback volume.
         *
         * @param {string} deviceId String value representing underlying output device
         */

    }, {
        key: 'setSinkId',
        value: function setSinkId(deviceId) {
            return this.backend.setSinkId(deviceId);
        }

        /**
         * Set the playback volume.
         *
         * @param {number} newVolume A value between 0 and 1, 0 being no
         * volume and 1 being full volume.
         */

    }, {
        key: 'setVolume',
        value: function setVolume(newVolume) {
            this.backend.setVolume(newVolume);
        }

        /**
         * Get the playback volume.
         *
         * @return {number} A value between 0 and 1, 0 being no
         * volume and 1 being full volume.
         */

    }, {
        key: 'getVolume',
        value: function getVolume() {
            return this.backend.getVolume();
        }

        /**
         * Set the playback rate.
         *
         * @param {number} rate A positive number. E.g. 0.5 means half the normal
         * speed, 2 means double speed and so on.
         * @example wavesurfer.setPlaybackRate(2);
         */

    }, {
        key: 'setPlaybackRate',
        value: function setPlaybackRate(rate) {
            this.backend.setPlaybackRate(rate);
        }

        /**
         * Get the playback rate.
         *
         * @return {number}
         */

    }, {
        key: 'getPlaybackRate',
        value: function getPlaybackRate() {
            return this.backend.getPlaybackRate();
        }

        /**
         * Toggle the volume on and off. It not currenly muted it will save the
         * current volume value and turn the volume off. If currently muted then it
         * will restore the volume to the saved value, and then rest the saved
         * value.
         *
         * @example wavesurfer.toggleMute();
         */

    }, {
        key: 'toggleMute',
        value: function toggleMute() {
            this.setMute(!this.isMuted);
        }

        /**
         * Enable or disable muted audio
         *
         * @param {boolean} mute
         * @example
         * // unmute
         * wavesurfer.setMute(false);
         */

    }, {
        key: 'setMute',
        value: function setMute(mute) {
            // ignore all muting requests if the audio is already in that state
            if (mute === this.isMuted) {
                return;
            }

            if (mute) {
                // If currently not muted then save current volume,
                // turn off the volume and update the mute properties
                this.savedVolume = this.backend.getVolume();
                this.backend.setVolume(0);
                this.isMuted = true;
            } else {
                // If currently muted then restore to the saved volume
                // and update the mute properties
                this.backend.setVolume(this.savedVolume);
                this.isMuted = false;
            }
        }

        /**
         * Get the current mute status.
         *
         * @example const isMuted = wavesurfer.getMute();
         * @return {boolean}
         */

    }, {
        key: 'getMute',
        value: function getMute() {
            return this.isMuted;
        }

        /**
         * Get the current ready status.
         *
         * @example const isReady = wavesurfer.isReady();
         * @return {boolean}
         */

    }, {
        key: 'isReady',
        value: function isReady() {
            return this.isReady;
        }

        /**
         * Get the list of current set filters as an array.
         *
         * Filters must be set with setFilters method first
         *
         * @return {array}
         */

    }, {
        key: 'getFilters',
        value: function getFilters() {
            return this.backend.filters || [];
        }

        /**
         * Toggles `scrollParent` and redraws
         *
         * @example wavesurfer.toggleScroll();
         */

    }, {
        key: 'toggleScroll',
        value: function toggleScroll() {
            this.params.scrollParent = !this.params.scrollParent;
            this.drawBuffer();
        }

        /**
         * Toggle mouse interaction
         *
         * @example wavesurfer.toggleInteraction();
         */

    }, {
        key: 'toggleInteraction',
        value: function toggleInteraction() {
            this.params.interact = !this.params.interact;
        }

        /**
         * Get the fill color of the waveform after the cursor.
         *
         * @return {string} A CSS color string.
         */

    }, {
        key: 'getWaveColor',
        value: function getWaveColor() {
            return this.params.waveColor;
        }

        /**
         * Set the fill color of the waveform after the cursor.
         *
         * @param {string} color A CSS color string.
         * @example wavesurfer.setWaveColor('#ddd');
         */

    }, {
        key: 'setWaveColor',
        value: function setWaveColor(color) {
            this.params.waveColor = color;
            this.drawBuffer();
        }

        /**
         * Get the fill color of the waveform behind the cursor.
         *
         * @return {string} A CSS color string.
         */

    }, {
        key: 'getProgressColor',
        value: function getProgressColor() {
            return this.params.progressColor;
        }

        /**
         * Set the fill color of the waveform behind the cursor.
         *
         * @param {string} color A CSS color string.
         * @example wavesurfer.setProgressColor('#400');
         */

    }, {
        key: 'setProgressColor',
        value: function setProgressColor(color) {
            this.params.progressColor = color;
            this.drawBuffer();
        }

        /**
         * Get the fill color of the cursor indicating the playhead
         * position.
         *
         * @return {string} A CSS color string.
         */

    }, {
        key: 'getCursorColor',
        value: function getCursorColor() {
            return this.params.cursorColor;
        }

        /**
         * Set the fill color of the cursor indicating the playhead
         * position.
         *
         * @param {string} color A CSS color string.
         * @example wavesurfer.setCursorColor('#222');
         */

    }, {
        key: 'setCursorColor',
        value: function setCursorColor(color) {
            this.params.cursorColor = color;
            this.drawer.updateCursor();
        }

        /**
         * Get the height of the waveform.
         *
         * @return {number} Height measured in pixels.
         */

    }, {
        key: 'getHeight',
        value: function getHeight() {
            return this.params.height;
        }

        /**
         * Set the height of the waveform.
         *
         * @param {number} height Height measured in pixels.
         * @example wavesurfer.setHeight(200);
         */

    }, {
        key: 'setHeight',
        value: function setHeight(height) {
            this.params.height = height;
            this.drawer.setHeight(height * this.params.pixelRatio);
            this.drawBuffer();
        }

        /**
         * Get the correct peaks for current wave viewport and render wave
         *
         * @private
         * @emits WaveSurfer#redraw
         */

    }, {
        key: 'drawBuffer',
        value: function drawBuffer() {
            var nominalWidth = Math.round(this.getDuration() * this.params.minPxPerSec * this.params.pixelRatio);
            var parentWidth = this.drawer.getWidth();
            var width = nominalWidth;
            var start = this.drawer.getScrollX();
            var end = Math.max(start + parentWidth, width);
            // Fill container
            if (this.params.fillParent && (!this.params.scrollParent || nominalWidth < parentWidth)) {
                width = parentWidth;
                start = 0;
                end = width;
            }

            var peaks = void 0;
            if (this.params.partialRender) {
                var newRanges = this.peakCache.addRangeToPeakCache(width, start, end);
                var i = void 0;
                for (i = 0; i < newRanges.length; i++) {
                    peaks = this.backend.getPeaks(width, newRanges[i][0], newRanges[i][1]);
                    this.drawer.drawPeaks(peaks, width, newRanges[i][0], newRanges[i][1]);
                }
            } else {
                peaks = this.backend.getPeaks(width, start, end);
                this.drawer.drawPeaks(peaks, width, start, end);
            }
            this.fireEvent('redraw', peaks, width);
        }

        /**
         * Horizontally zooms the waveform in and out. It also changes the parameter
         * `minPxPerSec` and enables the `scrollParent` option. Calling the function
         * with a falsey parameter will reset the zoom state.
         *
         * @param {?number} pxPerSec Number of horizontal pixels per second of
         * audio, if none is set the waveform returns to unzoomed state
         * @emits WaveSurfer#zoom
         * @example wavesurfer.zoom(20);
         */

    }, {
        key: 'zoom',
        value: function zoom(pxPerSec) {
            if (!pxPerSec) {
                this.params.minPxPerSec = this.defaultParams.minPxPerSec;
                this.params.scrollParent = false;
            } else {
                this.params.minPxPerSec = pxPerSec;
                this.params.scrollParent = true;
            }

            this.drawBuffer();
            this.drawer.progress(this.backend.getPlayedPercents());

            this.drawer.recenter(this.getCurrentTime() / this.getDuration());
            this.fireEvent('zoom', pxPerSec);
        }

        /**
         * Decode buffer and load
         *
         * @private
         * @param {ArrayBuffer} arraybuffer
         */

    }, {
        key: 'loadArrayBuffer',
        value: function loadArrayBuffer(arraybuffer) {
            var _this9 = this;

            this.decodeArrayBuffer(arraybuffer, function (data) {
                if (!_this9.isDestroyed) {
                    _this9.loadDecodedBuffer(data);
                }
            });
        }

        /**
         * Directly load an externally decoded AudioBuffer
         *
         * @private
         * @param {AudioBuffer} buffer
         * @emits WaveSurfer#ready
         */

    }, {
        key: 'loadDecodedBuffer',
        value: function loadDecodedBuffer(buffer) {
            this.backend.load(buffer);
            this.drawBuffer();
            this.fireEvent('ready');
            this.isReady = true;
        }

        /**
         * Loads audio data from a Blob or File object
         *
         * @param {Blob|File} blob Audio data
         * @example
         */

    }, {
        key: 'loadBlob',
        value: function loadBlob(blob) {
            var _this10 = this;

            // Create file reader
            var reader = new FileReader();
            reader.addEventListener('progress', function (e) {
                return _this10.onProgress(e);
            });
            reader.addEventListener('load', function (e) {
                return _this10.loadArrayBuffer(e.target.result);
            });
            reader.addEventListener('error', function () {
                return _this10.fireEvent('error', 'Error reading file');
            });
            reader.readAsArrayBuffer(blob);
            this.empty();
        }

        /**
         * Loads audio and re-renders the waveform.
         *
         * @param {string|HTMLMediaElement} url The url of the audio file or the
         * audio element with the audio
         * @param {?number[]|number[][]} peaks Wavesurfer does not have to decode
         * the audio to render the waveform if this is specified
         * @param {?string} preload (Use with backend `MediaElement`)
         * `'none'|'metadata'|'auto'` Preload attribute for the media element
         * @param {?number} duration The duration of the audio. This is used to
         * render the peaks data in the correct size for the audio duration (as
         * befits the current minPxPerSec and zoom value) without having to decode
         * the audio.
         * @example
         * // using ajax or media element to load (depending on backend)
         * wavesurfer.load('http://example.com/demo.wav');
         *
         * // setting preload attribute with media element backend and supplying
         * peaks wavesurfer.load(
         *   'http://example.com/demo.wav',
         *   [0.0218, 0.0183, 0.0165, 0.0198, 0.2137, 0.2888],
         *   true,
         * );
         */

    }, {
        key: 'load',
        value: function load(url, peaks, preload, duration) {
            this.empty();

            if (preload) {
                // check whether the preload attribute will be usable and if not log
                // a warning listing the reasons why not and nullify the variable
                var preloadIgnoreReasons = {
                    "Preload is not 'auto', 'none' or 'metadata'": ['auto', 'metadata', 'none'].indexOf(preload) === -1,
                    'Peaks are not provided': !peaks,
                    'Backend is not of type MediaElement': this.params.backend !== 'MediaElement',
                    'Url is not of type string': typeof url !== 'string'
                };
                var activeReasons = Object.keys(preloadIgnoreReasons).filter(function (reason) {
                    return preloadIgnoreReasons[reason];
                });
                if (activeReasons.length) {
                    console.warn('Preload parameter of wavesurfer.load will be ignored because:\n\t- ' + activeReasons.join('\n\t- '));
                    // stop invalid values from being used
                    preload = null;
                }
            }

            switch (this.params.backend) {
                case 'WebAudio':
                    return this.loadBuffer(url, peaks, duration);
                case 'MediaElement':
                    return this.loadMediaElement(url, peaks, preload, duration);
            }
        }

        /**
         * Loads audio using Web Audio buffer backend.
         *
         * @private
         * @param {string} url
         * @param {?number[]|number[][]} peaks
         * @param {?number} duration
         */

    }, {
        key: 'loadBuffer',
        value: function loadBuffer(url, peaks, duration) {
            var _this11 = this;

            var load = function load(action) {
                if (action) {
                    _this11.tmpEvents.push(_this11.once('ready', action));
                }
                return _this11.getArrayBuffer(url, function (data) {
                    return _this11.loadArrayBuffer(data);
                });
            };

            if (peaks) {
                this.backend.setPeaks(peaks, duration);
                this.drawBuffer();
                this.tmpEvents.push(this.once('interaction', load));
            } else {
                return load();
            }
        }

        /**
         * Either create a media element, or load an existing media element.
         *
         * @private
         * @param {string|HTMLMediaElement} urlOrElt Either a path to a media file, or an
         * existing HTML5 Audio/Video Element
         * @param {number[]|number[][]} peaks Array of peaks. Required to bypass web audio
         * dependency
         * @param {?boolean} preload Set to true if the preload attribute of the
         * audio element should be enabled
         * @param {?number} duration
         */

    }, {
        key: 'loadMediaElement',
        value: function loadMediaElement(urlOrElt, peaks, preload, duration) {
            var _this12 = this;

            var url = urlOrElt;

            if (typeof urlOrElt === 'string') {
                this.backend.load(url, this.mediaContainer, peaks, preload);
            } else {
                var elt = urlOrElt;
                this.backend.loadElt(elt, peaks);

                // If peaks are not provided,
                // url = element.src so we can get peaks with web audio
                url = elt.src;
            }

            this.tmpEvents.push(this.backend.once('canplay', function () {
                _this12.drawBuffer();
                _this12.fireEvent('ready');
                _this12.isReady = true;
            }), this.backend.once('error', function (err) {
                return _this12.fireEvent('error', err);
            }));

            // If no pre-decoded peaks provided or pre-decoded peaks are
            // provided with forceDecode flag, attempt to download the
            // audio file and decode it with Web Audio.
            if (peaks) {
                this.backend.setPeaks(peaks, duration);
            }

            if ((!peaks || this.params.forceDecode) && this.backend.supportsWebAudio()) {
                this.getArrayBuffer(url, function (arraybuffer) {
                    _this12.decodeArrayBuffer(arraybuffer, function (buffer) {
                        _this12.backend.buffer = buffer;
                        _this12.backend.setPeaks(null);
                        _this12.drawBuffer();
                        _this12.fireEvent('waveform-ready');
                    });
                });
            }
        }

        /**
         * Decode an array buffer and pass data to a callback
         *
         * @private
         * @param {Object} arraybuffer
         * @param {function} callback
         */

    }, {
        key: 'decodeArrayBuffer',
        value: function decodeArrayBuffer(arraybuffer, callback) {
            var _this13 = this;

            this.arraybuffer = arraybuffer;

            this.backend.decodeArrayBuffer(arraybuffer, function (data) {
                // Only use the decoded data if we haven't been destroyed or
                // another decode started in the meantime
                if (!_this13.isDestroyed && _this13.arraybuffer == arraybuffer) {
                    callback(data);
                    _this13.arraybuffer = null;
                }
            }, function () {
                return _this13.fireEvent('error', 'Error decoding audiobuffer');
            });
        }

        /**
         * Load an array buffer by ajax and pass to a callback
         *
         * @param {string} url
         * @param {function} callback
         * @private
         */

    }, {
        key: 'getArrayBuffer',
        value: function getArrayBuffer(url, callback) {
            var _this14 = this;

            var ajax = util.ajax({
                url: url,
                responseType: 'arraybuffer',
                xhr: this.params.xhr
            });

            this.currentAjax = ajax;

            this.tmpEvents.push(ajax.on('progress', function (e) {
                _this14.onProgress(e);
            }), ajax.on('success', function (data, e) {
                callback(data);
                _this14.currentAjax = null;
            }), ajax.on('error', function (e) {
                _this14.fireEvent('error', 'XHR error: ' + e.target.statusText);
                _this14.currentAjax = null;
            }));

            return ajax;
        }

        /**
         * Called while the audio file is loading
         *
         * @private
         * @param {Event} e
         * @emits WaveSurfer#loading
         */

    }, {
        key: 'onProgress',
        value: function onProgress(e) {
            var percentComplete = void 0;
            if (e.lengthComputable) {
                percentComplete = e.loaded / e.total;
            } else {
                // Approximate progress with an asymptotic
                // function, and assume downloads in the 1-3 MB range.
                percentComplete = e.loaded / (e.loaded + 1000000);
            }
            this.fireEvent('loading', Math.round(percentComplete * 100), e.target);
        }

        /**
         * Exports PCM data into a JSON array and opens in a new window.
         *
         * @param {number} length=1024 The scale in which to export the peaks. (Integer)
         * @param {number} accuracy=10000 (Integer)
         * @param {?boolean} noWindow Set to true to disable opening a new
         * window with the JSON
         * @param {number} start
         * @todo Update exportPCM to work with new getPeaks signature
         * @return {JSON} JSON of peaks
         */

    }, {
        key: 'exportPCM',
        value: function exportPCM(length, accuracy, noWindow, start) {
            length = length || 1024;
            start = start || 0;
            accuracy = accuracy || 10000;
            noWindow = noWindow || false;
            var peaks = this.backend.getPeaks(length, start);
            var arr = [].map.call(peaks, function (val) {
                return Math.round(val * accuracy) / accuracy;
            });
            var json = JSON.stringify(arr);
            if (!noWindow) {
                window.open('data:application/json;charset=utf-8,' + encodeURIComponent(json));
            }
            return json;
        }

        /**
         * Save waveform image as data URI.
         *
         * The default format is `image/png`. Other supported types are
         * `image/jpeg` and `image/webp`.
         *
         * @param {string} format='image/png'
         * @param {number} quality=1
         * @return {string} data URI of image
         */

    }, {
        key: 'exportImage',
        value: function exportImage(format, quality) {
            if (!format) {
                format = 'image/png';
            }
            if (!quality) {
                quality = 1;
            }

            return this.drawer.getImage(format, quality);
        }

        /**
         * Cancel any ajax request currently in progress
         */

    }, {
        key: 'cancelAjax',
        value: function cancelAjax() {
            if (this.currentAjax) {
                this.currentAjax.xhr.abort();
                this.currentAjax = null;
            }
        }

        /**
         * @private
         */

    }, {
        key: 'clearTmpEvents',
        value: function clearTmpEvents() {
            this.tmpEvents.forEach(function (e) {
                return e.un();
            });
        }

        /**
         * Display empty waveform.
         */

    }, {
        key: 'empty',
        value: function empty() {
            if (!this.backend.isPaused()) {
                this.stop();
                this.backend.disconnectSource();
            }
            this.cancelAjax();
            this.clearTmpEvents();
            this.drawer.progress(0);
            this.drawer.setWidth(0);
            this.drawer.drawPeaks({ length: this.drawer.getWidth() }, 0);
        }

        /**
         * Remove events, elements and disconnect WebAudio nodes.
         *
         * @emits WaveSurfer#destroy
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            this.destroyAllPlugins();
            this.fireEvent('destroy');
            this.cancelAjax();
            this.clearTmpEvents();
            this.unAll();
            if (this.params.responsive !== false) {
                window.removeEventListener('resize', this._onResize, true);
                window.removeEventListener('orientationchange', this._onResize, true);
            }
            this.backend.destroy();
            this.drawer.destroy();
            this.isDestroyed = true;
            this.arraybuffer = null;
        }
    }]);

    return WaveSurfer;
}(util.Observer);

WaveSurfer.util = util;
exports.default = WaveSurfer;
module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ajax;

var _observer = __webpack_require__(1);

var _observer2 = _interopRequireDefault(_observer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Perform an ajax request
 *
 * @param {Options} options Description
 *
 * @returns {Object} Observer instance
 */
function ajax(options) {
    var instance = new _observer2.default();
    var xhr = new XMLHttpRequest();
    var fired100 = false;
    xhr.open(options.method || 'GET', options.url, true);
    xhr.responseType = options.responseType || 'json';

    if (options.xhr) {
        if (options.xhr.requestHeaders) {
            // add custom request headers
            options.xhr.requestHeaders.forEach(function (header) {
                xhr.setRequestHeader(header.key, header.value);
            });
        }
        if (options.xhr.withCredentials) {
            // use credentials
            xhr.withCredentials = true;
        }
    }

    xhr.addEventListener('progress', function (e) {
        instance.fireEvent('progress', e);
        if (e.lengthComputable && e.loaded == e.total) {
            fired100 = true;
        }
    });
    xhr.addEventListener('load', function (e) {
        if (!fired100) {
            instance.fireEvent('progress', e);
        }
        instance.fireEvent('load', e);
        if (200 == xhr.status || 206 == xhr.status) {
            instance.fireEvent('success', xhr.response, e);
        } else {
            instance.fireEvent('error', e);
        }
    });
    xhr.addEventListener('error', function (e) {
        return instance.fireEvent('error', e);
    });
    xhr.send();
    instance.xhr = xhr;
    return instance;
}
module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getId;
/**
 * Get a random prefixed ID
 *
 * @returns {String} Random ID
 */
function getId() {
    return 'wavesurfer_' + Math.random().toString(32).substring(2);
}
module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = max;
/**
 * Get the largest value
 *
 * @param   {Array} values Array of numbers
 * @returns {Number} Largest number found
 */
function max(values) {
    var largest = -Infinity;
    Object.keys(values).forEach(function (i) {
        if (values[i] > largest) {
            largest = values[i];
        }
    });
    return largest;
}
module.exports = exports["default"];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = min;
/**
 * Get the smallest value
 *
 * @param   {Array} values Array of numbers
 * @returns {Number}       Smallest number found
 */
function min(values) {
    var smallest = Number(Infinity);
    Object.keys(values).forEach(function (i) {
        if (values[i] < smallest) {
            smallest = values[i];
        }
    });
    return smallest;
}
module.exports = exports["default"];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = extend;
/**
 * Extend an object shallowly with others
 *
 * @param {Object} dest The target object
 * @param {Object[]} sources The objects to use for extending
 *
 * @return {Object} Merged object
 */
function extend(dest) {
    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        sources[_key - 1] = arguments[_key];
    }

    sources.forEach(function (source) {
        Object.keys(source).forEach(function (key) {
            dest[key] = source[key];
        });
    });
    return dest;
}
module.exports = exports["default"];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = style;
/**
 * Apply a map of styles to an element
 *
 * @param {HTMLElement} el The element that the styles will be applied to
 * @param {Object} styles The map of propName: attribute, both are used as-is
 *
 * @return {HTMLElement} el
 */
function style(el, styles) {
    Object.keys(styles).forEach(function (prop) {
        if (el.style[prop] !== styles[prop]) {
            el.style[prop] = styles[prop];
        }
    });
    return el;
}
module.exports = exports["default"];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = frame;

var _requestAnimationFrame = __webpack_require__(2);

var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create a function which will be called at the next requestAnimationFrame
 * cycle
 *
 * @param {function} func The function to call
 *
 * @return {func} The function wrapped within a requestAnimationFrame
 */
function frame(func) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _requestAnimationFrame2.default)(function () {
      return func.apply(undefined, args);
    });
  };
}
module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports) {

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear' 
 * that is a function which will clear the timer to prevent previously scheduled executions. 
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */

module.exports = function debounce(func, wait, immediate){
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {
    var last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  };

  var debounced = function(){
    context = this;
    args = arguments;
    timestamp = Date.now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };

  debounced.clear = function() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  
  debounced.flush = function() {
    if (timeout) {
      result = func.apply(context, args);
      context = args = null;
      
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = preventClick;
function preventClickHandler(e) {
    e.stopPropagation();
    document.body.removeEventListener('click', preventClickHandler, true);
}

function preventClick(values) {
    document.body.addEventListener('click', preventClickHandler, true);
}
module.exports = exports['default'];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _drawer = __webpack_require__(15);

var _drawer2 = _interopRequireDefault(_drawer);

var _util = __webpack_require__(0);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @typedef {Object} CanvasEntry
 * @private
 * @property {HTMLElement} wave The wave node
 * @property {CanvasRenderingContext2D} waveCtx The canvas rendering context
 * @property {?HTMLElement} progress The progress wave node
 * @property {?CanvasRenderingContext2D} progressCtx The progress wave canvas
 * rendering context
 * @property {?number} start Start of the area the canvas should render, between 0 and 1
 * @property {?number} end End of the area the canvas should render, between 0 and 1
 */

/**
 * MultiCanvas renderer for wavesurfer. Is currently the default and sole built
 * in renderer.
 */
var MultiCanvas = function (_Drawer) {
    _inherits(MultiCanvas, _Drawer);

    /**
     * @param {HTMLElement} container The container node of the wavesurfer instance
     * @param {WavesurferParams} params The wavesurfer initialisation options
     */
    function MultiCanvas(container, params) {
        _classCallCheck(this, MultiCanvas);

        /**
         * @type {number}
         * @private
         */
        var _this = _possibleConstructorReturn(this, (MultiCanvas.__proto__ || Object.getPrototypeOf(MultiCanvas)).call(this, container, params));

        _this.maxCanvasWidth = params.maxCanvasWidth;
        /**
         * @private
         * @type {number}
         */
        _this.maxCanvasElementWidth = Math.round(params.maxCanvasWidth / params.pixelRatio);

        /**
         * Whether or not the progress wave is renderered. If the `waveColor`
         * and `progressColor` are the same colour it is not.
         * @type {boolean}
         */
        _this.hasProgressCanvas = params.waveColor != params.progressColor;
        /**
         * @private
         * @type {number}
         */
        _this.halfPixel = 0.5 / params.pixelRatio;
        /**
         * @private
         * @type {Array}
         */
        _this.canvases = [];
        /** @private */
        _this.progressWave = null;
        return _this;
    }

    /**
     * Initialise the drawer
     */


    _createClass(MultiCanvas, [{
        key: 'init',
        value: function init() {
            this.createWrapper();
            this.createElements();
        }

        /**
         * Create the canvas elements and style them
         *
         * @private
         */

    }, {
        key: 'createElements',
        value: function createElements() {
            this.progressWave = this.wrapper.appendChild(this.style(document.createElement('wave'), {
                position: 'absolute',
                zIndex: 3,
                left: 0,
                top: 0,
                bottom: 0,
                overflow: 'hidden',
                width: '0',
                display: 'none',
                boxSizing: 'border-box',
                borderRightStyle: 'solid',
                pointerEvents: 'none'
            }));

            this.addCanvas();
            this.updateCursor();
        }

        /**
         * Update cursor style from params.
         */

    }, {
        key: 'updateCursor',
        value: function updateCursor() {
            this.style(this.progressWave, {
                borderRightWidth: this.params.cursorWidth + 'px',
                borderRightColor: this.params.cursorColor
            });
        }

        /**
         * Adjust to the updated size by adding or removing canvases
         */

    }, {
        key: 'updateSize',
        value: function updateSize() {
            var _this2 = this;

            var totalWidth = Math.round(this.width / this.params.pixelRatio);
            var requiredCanvases = Math.ceil(totalWidth / this.maxCanvasElementWidth);

            while (this.canvases.length < requiredCanvases) {
                this.addCanvas();
            }

            while (this.canvases.length > requiredCanvases) {
                this.removeCanvas();
            }

            this.canvases.forEach(function (entry, i) {
                // Add some overlap to prevent vertical white stripes, keep the width even for simplicity.
                var canvasWidth = _this2.maxCanvasWidth + 2 * Math.ceil(_this2.params.pixelRatio / 2);

                if (i == _this2.canvases.length - 1) {
                    canvasWidth = _this2.width - _this2.maxCanvasWidth * (_this2.canvases.length - 1);
                }

                _this2.updateDimensions(entry, canvasWidth, _this2.height);
                _this2.clearWaveForEntry(entry);
            });
        }

        /**
         * Add a canvas to the canvas list
         *
         * @private
         */

    }, {
        key: 'addCanvas',
        value: function addCanvas() {
            var entry = {};
            var leftOffset = this.maxCanvasElementWidth * this.canvases.length;

            entry.wave = this.wrapper.appendChild(this.style(document.createElement('canvas'), {
                position: 'absolute',
                zIndex: 2,
                left: leftOffset + 'px',
                top: 0,
                bottom: 0,
                height: '100%',
                pointerEvents: 'none'
            }));
            entry.waveCtx = entry.wave.getContext('2d');

            if (this.hasProgressCanvas) {
                entry.progress = this.progressWave.appendChild(this.style(document.createElement('canvas'), {
                    position: 'absolute',
                    left: leftOffset + 'px',
                    top: 0,
                    bottom: 0,
                    height: '100%'
                }));
                entry.progressCtx = entry.progress.getContext('2d');
            }

            this.canvases.push(entry);
        }

        /**
         * Pop one canvas from the list
         *
         * @private
         */

    }, {
        key: 'removeCanvas',
        value: function removeCanvas() {
            var lastEntry = this.canvases.pop();
            lastEntry.wave.parentElement.removeChild(lastEntry.wave);
            if (this.hasProgressCanvas) {
                lastEntry.progress.parentElement.removeChild(lastEntry.progress);
            }
        }

        /**
         * Update the dimensions of a canvas element
         *
         * @private
         * @param {CanvasEntry} entry
         * @param {number} width The new width of the element
         * @param {number} height The new height of the element
         */

    }, {
        key: 'updateDimensions',
        value: function updateDimensions(entry, width, height) {
            var elementWidth = Math.round(width / this.params.pixelRatio);
            var totalWidth = Math.round(this.width / this.params.pixelRatio);

            // Where the canvas starts and ends in the waveform, represented as a decimal between 0 and 1.
            entry.start = entry.waveCtx.canvas.offsetLeft / totalWidth || 0;
            entry.end = entry.start + elementWidth / totalWidth;

            entry.waveCtx.canvas.width = width;
            entry.waveCtx.canvas.height = height;
            this.style(entry.waveCtx.canvas, { width: elementWidth + 'px' });

            this.style(this.progressWave, { display: 'block' });

            if (this.hasProgressCanvas) {
                entry.progressCtx.canvas.width = width;
                entry.progressCtx.canvas.height = height;
                this.style(entry.progressCtx.canvas, {
                    width: elementWidth + 'px'
                });
            }
        }

        /**
         * Clear the whole waveform
         */

    }, {
        key: 'clearWave',
        value: function clearWave() {
            var _this3 = this;

            this.canvases.forEach(function (entry) {
                return _this3.clearWaveForEntry(entry);
            });
        }

        /**
         * Clear one canvas
         *
         * @private
         * @param {CanvasEntry} entry
         */

    }, {
        key: 'clearWaveForEntry',
        value: function clearWaveForEntry(entry) {
            entry.waveCtx.clearRect(0, 0, entry.waveCtx.canvas.width, entry.waveCtx.canvas.height);
            if (this.hasProgressCanvas) {
                entry.progressCtx.clearRect(0, 0, entry.progressCtx.canvas.width, entry.progressCtx.canvas.height);
            }
        }

        /**
         * Draw a waveform with bars
         *
         * @param {number[]|number[][]} peaks Can also be an array of arrays for split channel
         * rendering
         * @param {number} channelIndex The index of the current channel. Normally
         * should be 0. Must be an integer.
         * @param {number} start The x-offset of the beginning of the area that
         * should be rendered
         * @param {number} end The x-offset of the end of the area that should be
         * rendered
         */

    }, {
        key: 'drawBars',
        value: function drawBars(peaks, channelIndex, start, end) {
            var _this4 = this;

            return this.prepareDraw(peaks, channelIndex, start, end, function (_ref) {
                var absmax = _ref.absmax,
                    hasMinVals = _ref.hasMinVals,
                    height = _ref.height,
                    offsetY = _ref.offsetY,
                    halfH = _ref.halfH,
                    peaks = _ref.peaks;

                // if drawBars was called within ws.empty we don't pass a start and
                // don't want anything to happen
                if (start === undefined) {
                    return;
                }
                // Skip every other value if there are negatives.
                var peakIndexScale = hasMinVals ? 2 : 1;
                var length = peaks.length / peakIndexScale;
                var bar = _this4.params.barWidth * _this4.params.pixelRatio;
                var gap = _this4.params.barGap === null ? Math.max(_this4.params.pixelRatio, ~~(bar / 2)) : Math.max(_this4.params.pixelRatio, _this4.params.barGap * _this4.params.pixelRatio);
                var step = bar + gap;

                var scale = length / _this4.width;
                var first = start;
                var last = end;
                var i = void 0;

                for (i = first; i < last; i += step) {
                    var peak = peaks[Math.floor(i * scale * peakIndexScale)] || 0;
                    var h = Math.round(peak / absmax * halfH);
                    _this4.fillRect(i + _this4.halfPixel, halfH - h + offsetY, bar + _this4.halfPixel, h * 2);
                }
            });
        }

        /**
         * Draw a waveform
         *
         * @param {number[]|number[][]} peaks Can also be an array of arrays for split channel
         * rendering
         * @param {number} channelIndex The index of the current channel. Normally
         * should be 0
         * @param {number?} start The x-offset of the beginning of the area that
         * should be rendered (If this isn't set only a flat line is rendered)
         * @param {number?} end The x-offset of the end of the area that should be
         * rendered
         */

    }, {
        key: 'drawWave',
        value: function drawWave(peaks, channelIndex, start, end) {
            var _this5 = this;

            return this.prepareDraw(peaks, channelIndex, start, end, function (_ref2) {
                var absmax = _ref2.absmax,
                    hasMinVals = _ref2.hasMinVals,
                    height = _ref2.height,
                    offsetY = _ref2.offsetY,
                    halfH = _ref2.halfH,
                    peaks = _ref2.peaks;

                if (!hasMinVals) {
                    var reflectedPeaks = [];
                    var len = peaks.length;
                    var i = void 0;
                    for (i = 0; i < len; i++) {
                        reflectedPeaks[2 * i] = peaks[i];
                        reflectedPeaks[2 * i + 1] = -peaks[i];
                    }
                    peaks = reflectedPeaks;
                }

                // if drawWave was called within ws.empty we don't pass a start and
                // end and simply want a flat line
                if (start !== undefined) {
                    _this5.drawLine(peaks, absmax, halfH, offsetY, start, end);
                }

                // Always draw a median line
                _this5.fillRect(0, halfH + offsetY - _this5.halfPixel, _this5.width, _this5.halfPixel);
            });
        }

        /**
         * Tell the canvas entries to render their portion of the waveform
         *
         * @private
         * @param {number[]} peaks Peak data
         * @param {number} absmax Maximum peak value (absolute)
         * @param {number} halfH Half the height of the waveform
         * @param {number} offsetY Offset to the top
         * @param {number} start The x-offset of the beginning of the area that
         * should be rendered
         * @param {number} end The x-offset of the end of the area that
         * should be rendered
         */

    }, {
        key: 'drawLine',
        value: function drawLine(peaks, absmax, halfH, offsetY, start, end) {
            var _this6 = this;

            this.canvases.forEach(function (entry) {
                _this6.setFillStyles(entry);
                _this6.drawLineToContext(entry, entry.waveCtx, peaks, absmax, halfH, offsetY, start, end);
                _this6.drawLineToContext(entry, entry.progressCtx, peaks, absmax, halfH, offsetY, start, end);
            });
        }

        /**
         * Render the actual waveform line on a canvas
         *
         * @private
         * @param {CanvasEntry} entry
         * @param {Canvas2DContextAttributes} ctx Essentially `entry.[wave|progress]Ctx`
         * @param {number[]} peaks
         * @param {number} absmax Maximum peak value (absolute)
         * @param {number} halfH Half the height of the waveform
         * @param {number} offsetY Offset to the top
         * @param {number} start The x-offset of the beginning of the area that
         * should be rendered
         * @param {number} end The x-offset of the end of the area that
         * should be rendered
         */

    }, {
        key: 'drawLineToContext',
        value: function drawLineToContext(entry, ctx, peaks, absmax, halfH, offsetY, start, end) {
            if (!ctx) {
                return;
            }

            var length = peaks.length / 2;
            var scale = this.params.fillParent && this.width != length ? this.width / length : 1;

            var first = Math.round(length * entry.start);
            // Use one more peak value to make sure we join peaks at ends -- unless,
            // of course, this is the last canvas.
            var last = Math.round(length * entry.end) + 1;
            if (first > end || last < start) {
                return;
            }
            var canvasStart = Math.min(first, start);
            var canvasEnd = Math.max(last, end);
            var i = void 0;
            var j = void 0;

            ctx.beginPath();
            ctx.moveTo((canvasStart - first) * scale + this.halfPixel, halfH + offsetY);

            for (i = canvasStart; i < canvasEnd; i++) {
                var peak = peaks[2 * i] || 0;
                var h = Math.round(peak / absmax * halfH);
                ctx.lineTo((i - first) * scale + this.halfPixel, halfH - h + offsetY);
            }

            // Draw the bottom edge going backwards, to make a single
            // closed hull to fill.
            for (j = canvasEnd - 1; j >= canvasStart; j--) {
                var _peak = peaks[2 * j + 1] || 0;
                var _h = Math.round(_peak / absmax * halfH);
                ctx.lineTo((j - first) * scale + this.halfPixel, halfH - _h + offsetY);
            }

            ctx.closePath();
            ctx.fill();
        }

        /**
         * Draw a rectangle on the waveform
         *
         * @param {number} x
         * @param {number} y
         * @param {number} width
         * @param {number} height
         */

    }, {
        key: 'fillRect',
        value: function fillRect(x, y, width, height) {
            var startCanvas = Math.floor(x / this.maxCanvasWidth);
            var endCanvas = Math.min(Math.ceil((x + width) / this.maxCanvasWidth) + 1, this.canvases.length);
            var i = void 0;
            for (i = startCanvas; i < endCanvas; i++) {
                var entry = this.canvases[i];
                var leftOffset = i * this.maxCanvasWidth;

                var intersection = {
                    x1: Math.max(x, i * this.maxCanvasWidth),
                    y1: y,
                    x2: Math.min(x + width, i * this.maxCanvasWidth + entry.waveCtx.canvas.width),
                    y2: y + height
                };

                if (intersection.x1 < intersection.x2) {
                    this.setFillStyles(entry);

                    this.fillRectToContext(entry.waveCtx, intersection.x1 - leftOffset, intersection.y1, intersection.x2 - intersection.x1, intersection.y2 - intersection.y1);

                    this.fillRectToContext(entry.progressCtx, intersection.x1 - leftOffset, intersection.y1, intersection.x2 - intersection.x1, intersection.y2 - intersection.y1);
                }
            }
        }

        /**
         * Performs preparation tasks and calculations which are shared by drawBars and drawWave
         *
         * @private
         * @param {number[]|number[][]} peaks Can also be an array of arrays for split channel
         * rendering
         * @param {number} channelIndex The index of the current channel. Normally
         * should be 0
         * @param {number?} start The x-offset of the beginning of the area that
         * should be rendered (If this isn't set only a flat line is rendered)
         * @param {number?} end The x-offset of the end of the area that should be
         * rendered
         * @param {function} fn The render function to call
         */

    }, {
        key: 'prepareDraw',
        value: function prepareDraw(peaks, channelIndex, start, end, fn) {
            var _this7 = this;

            return util.frame(function () {
                // Split channels and call this function with the channelIndex set
                if (peaks[0] instanceof Array) {
                    var channels = peaks;
                    if (_this7.params.splitChannels) {
                        _this7.setHeight(channels.length * _this7.params.height * _this7.params.pixelRatio);
                        return channels.forEach(function (channelPeaks, i) {
                            return _this7.prepareDraw(channelPeaks, i, start, end, fn);
                        });
                    }
                    peaks = channels[0];
                }
                // calculate maximum modulation value, either from the barHeight
                // parameter or if normalize=true from the largest value in the peak
                // set
                var absmax = 1 / _this7.params.barHeight;
                if (_this7.params.normalize) {
                    var max = util.max(peaks);
                    var min = util.min(peaks);
                    absmax = -min > max ? -min : max;
                }

                // Bar wave draws the bottom only as a reflection of the top,
                // so we don't need negative values
                var hasMinVals = [].some.call(peaks, function (val) {
                    return val < 0;
                });
                var height = _this7.params.height * _this7.params.pixelRatio;
                var offsetY = height * channelIndex || 0;
                var halfH = height / 2;

                return fn({
                    absmax: absmax,
                    hasMinVals: hasMinVals,
                    height: height,
                    offsetY: offsetY,
                    halfH: halfH,
                    peaks: peaks
                });
            })();
        }

        /**
         * Draw the actual rectangle on a canvas
         *
         * @private
         * @param {Canvas2DContextAttributes} ctx
         * @param {number} x
         * @param {number} y
         * @param {number} width
         * @param {number} height
         */

    }, {
        key: 'fillRectToContext',
        value: function fillRectToContext(ctx, x, y, width, height) {
            if (!ctx) {
                return;
            }
            ctx.fillRect(x, y, width, height);
        }

        /**
         * Set the fill styles for a certain entry (wave and progress)
         *
         * @private
         * @param {CanvasEntry} entry
         */

    }, {
        key: 'setFillStyles',
        value: function setFillStyles(entry) {
            entry.waveCtx.fillStyle = this.params.waveColor;
            if (this.hasProgressCanvas) {
                entry.progressCtx.fillStyle = this.params.progressColor;
            }
        }

        /**
         * Return image data of the waveform
         *
         * @param {string} type='image/png' An optional value of a format type.
         * @param {number} quality=0.92 An optional value between 0 and 1.
         * @return {string|string[]} images A data URL or an array of data URLs
         */

    }, {
        key: 'getImage',
        value: function getImage(type, quality) {
            var images = this.canvases.map(function (entry) {
                return entry.wave.toDataURL(type, quality);
            });
            return images.length > 1 ? images : images[0];
        }

        /**
         * Render the new progress
         *
         * @param {number} position X-Offset of progress position in pixels
         */

    }, {
        key: 'updateProgress',
        value: function updateProgress(position) {
            this.style(this.progressWave, { width: position + 'px' });
        }
    }]);

    return MultiCanvas;
}(_drawer2.default);

exports.default = MultiCanvas;
module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Parent class for renderers
 *
 * @extends {Observer}
 */
var Drawer = function (_util$Observer) {
    _inherits(Drawer, _util$Observer);

    /**
     * @param {HTMLElement} container The container node of the wavesurfer instance
     * @param {WavesurferParams} params The wavesurfer initialisation options
     */
    function Drawer(container, params) {
        _classCallCheck(this, Drawer);

        /** @private */
        var _this = _possibleConstructorReturn(this, (Drawer.__proto__ || Object.getPrototypeOf(Drawer)).call(this));

        _this.container = container;
        /**
         * @type {WavesurferParams}
         * @private
         */
        _this.params = params;
        /**
         * The width of the renderer
         * @type {number}
         */
        _this.width = 0;
        /**
         * The height of the renderer
         * @type {number}
         */
        _this.height = params.height * _this.params.pixelRatio;
        /** @private */
        _this.lastPos = 0;
        /**
         * The `<wave>` element which is added to the container
         * @type {HTMLElement}
         */
        _this.wrapper = null;
        return _this;
    }

    /**
     * Alias of `util.style`
     *
     * @param {HTMLElement} el The element that the styles will be applied to
     * @param {Object} styles The map of propName: attribute, both are used as-is
     * @return {HTMLElement} el
     */


    _createClass(Drawer, [{
        key: 'style',
        value: function style(el, styles) {
            return util.style(el, styles);
        }

        /**
         * Create the wrapper `<wave>` element, style it and set up the events for
         * interaction
         */

    }, {
        key: 'createWrapper',
        value: function createWrapper() {
            this.wrapper = this.container.appendChild(document.createElement('wave'));

            this.style(this.wrapper, {
                display: 'block',
                position: 'relative',
                userSelect: 'none',
                webkitUserSelect: 'none',
                height: this.params.height + 'px'
            });

            if (this.params.fillParent || this.params.scrollParent) {
                this.style(this.wrapper, {
                    width: '100%',
                    overflowX: this.params.hideScrollbar ? 'hidden' : 'auto',
                    overflowY: 'hidden'
                });
            }

            this.setupWrapperEvents();
        }

        /**
         * Handle click event
         *
         * @param {Event} e Click event
         * @param {?boolean} noPrevent Set to true to not call `e.preventDefault()`
         * @return {number} Playback position from 0 to 1
         */

    }, {
        key: 'handleEvent',
        value: function handleEvent(e, noPrevent) {
            !noPrevent && e.preventDefault();

            var clientX = e.targetTouches ? e.targetTouches[0].clientX : e.clientX;
            var bbox = this.wrapper.getBoundingClientRect();

            var nominalWidth = this.width;
            var parentWidth = this.getWidth();

            var progress = void 0;

            if (!this.params.fillParent && nominalWidth < parentWidth) {
                progress = (clientX - bbox.left) * this.params.pixelRatio / nominalWidth || 0;

                if (progress > 1) {
                    progress = 1;
                }
            } else {
                progress = (clientX - bbox.left + this.wrapper.scrollLeft) / this.wrapper.scrollWidth || 0;
            }

            return progress;
        }

        /**
         * @private
         */

    }, {
        key: 'setupWrapperEvents',
        value: function setupWrapperEvents() {
            var _this2 = this;

            this.wrapper.addEventListener('click', function (e) {
                var scrollbarHeight = _this2.wrapper.offsetHeight - _this2.wrapper.clientHeight;
                if (scrollbarHeight != 0) {
                    // scrollbar is visible.  Check if click was on it
                    var bbox = _this2.wrapper.getBoundingClientRect();
                    if (e.clientY >= bbox.bottom - scrollbarHeight) {
                        // ignore mousedown as it was on the scrollbar
                        return;
                    }
                }

                if (_this2.params.interact) {
                    _this2.fireEvent('click', e, _this2.handleEvent(e));
                }
            });

            this.wrapper.addEventListener('scroll', function (e) {
                return _this2.fireEvent('scroll', e);
            });
        }

        /**
         * Draw peaks on the canvas
         *
         * @param {number[]|number[][]} peaks Can also be an array of arrays for split channel
         * rendering
         * @param {number} length The width of the area that should be drawn
         * @param {number} start The x-offset of the beginning of the area that
         * should be rendered
         * @param {number} end The x-offset of the end of the area that should be
         * rendered
         */

    }, {
        key: 'drawPeaks',
        value: function drawPeaks(peaks, length, start, end) {
            if (!this.setWidth(length)) {
                this.clearWave();
            }

            this.params.barWidth ? this.drawBars(peaks, 0, start, end) : this.drawWave(peaks, 0, start, end);
        }

        /**
         * Scroll to the beginning
         */

    }, {
        key: 'resetScroll',
        value: function resetScroll() {
            if (this.wrapper !== null) {
                this.wrapper.scrollLeft = 0;
            }
        }

        /**
         * Recenter the viewport at a certain percent of the waveform
         *
         * @param {number} percent Value from 0 to 1 on the waveform
         */

    }, {
        key: 'recenter',
        value: function recenter(percent) {
            var position = this.wrapper.scrollWidth * percent;
            this.recenterOnPosition(position, true);
        }

        /**
         * Recenter the viewport on a position, either scroll there immediately or
         * in steps of 5 pixels
         *
         * @param {number} position X-offset in pixels
         * @param {boolean} immediate Set to true to immediately scroll somewhere
         */

    }, {
        key: 'recenterOnPosition',
        value: function recenterOnPosition(position, immediate) {
            var scrollLeft = this.wrapper.scrollLeft;
            var half = ~~(this.wrapper.clientWidth / 2);
            var maxScroll = this.wrapper.scrollWidth - this.wrapper.clientWidth;
            var target = position - half;
            var offset = target - scrollLeft;

            if (maxScroll == 0) {
                // no need to continue if scrollbar is not there
                return;
            }

            // if the cursor is currently visible...
            if (!immediate && -half <= offset && offset < half) {
                // we'll limit the "re-center" rate.
                var rate = 5;
                offset = Math.max(-rate, Math.min(rate, offset));
                target = scrollLeft + offset;
            }

            // limit target to valid range (0 to maxScroll)
            target = Math.max(0, Math.min(maxScroll, target));
            // no use attempting to scroll if we're not moving
            if (target != scrollLeft) {
                this.wrapper.scrollLeft = target;
            }
        }

        /**
         * Get the current scroll position in pixels
         *
         * @return {number}
         */

    }, {
        key: 'getScrollX',
        value: function getScrollX() {
            var pixelRatio = this.params.pixelRatio;
            var x = Math.round(this.wrapper.scrollLeft * pixelRatio);

            // In cases of elastic scroll (safari with mouse wheel) you can
            // scroll beyond the limits of the container
            // Calculate and floor the scrollable extent to make sure an out
            // of bounds value is not returned
            // Ticket #1312
            if (this.params.scrollParent) {
                var maxScroll = ~~(this.wrapper.scrollWidth * pixelRatio - this.getWidth());
                x = Math.min(maxScroll, Math.max(0, x));
            }

            return x;
        }

        /**
         * Get the width of the container
         *
         * @return {number}
         */

    }, {
        key: 'getWidth',
        value: function getWidth() {
            return Math.round(this.container.clientWidth * this.params.pixelRatio);
        }

        /**
         * Set the width of the container
         *
         * @param {number} width
         */

    }, {
        key: 'setWidth',
        value: function setWidth(width) {
            if (this.width == width) {
                return false;
            }

            this.width = width;

            if (this.params.fillParent || this.params.scrollParent) {
                this.style(this.wrapper, {
                    width: ''
                });
            } else {
                this.style(this.wrapper, {
                    width: ~~(this.width / this.params.pixelRatio) + 'px'
                });
            }

            this.updateSize();
            return true;
        }

        /**
         * Set the height of the container
         *
         * @param {number} height
         */

    }, {
        key: 'setHeight',
        value: function setHeight(height) {
            if (height == this.height) {
                return false;
            }
            this.height = height;

            this.style(this.wrapper, {
                height: ~~(this.height / this.params.pixelRatio) + 'px'
            });

            this.updateSize();
            return true;
        }

        /**
         * Called by wavesurfer when progress should be renderered
         *
         * @param {number} progress From 0 to 1
         */

    }, {
        key: 'progress',
        value: function progress(_progress) {
            var minPxDelta = 1 / this.params.pixelRatio;
            var pos = Math.round(_progress * this.width) * minPxDelta;

            if (pos < this.lastPos || pos - this.lastPos >= minPxDelta) {
                this.lastPos = pos;

                if (this.params.scrollParent && this.params.autoCenter) {
                    var newPos = ~~(this.wrapper.scrollWidth * _progress);
                    this.recenterOnPosition(newPos);
                }

                this.updateProgress(pos);
            }
        }

        /**
         * This is called when wavesurfer is destroyed
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            this.unAll();
            if (this.wrapper) {
                if (this.wrapper.parentNode == this.container) {
                    this.container.removeChild(this.wrapper);
                }
                this.wrapper = null;
            }
        }

        /* Renderer-specific methods */

        /**
         * Called after cursor related params have changed.
         *
         * @abstract
         */

    }, {
        key: 'updateCursor',
        value: function updateCursor() {}

        /**
         * Called when the size of the container changes so the renderer can adjust
         *
         * @abstract
         */

    }, {
        key: 'updateSize',
        value: function updateSize() {}

        /**
         * Draw a waveform with bars
         *
         * @abstract
         * @param {number[]|number[][]} peaks Can also be an array of arrays for split channel
         * rendering
         * @param {number} channelIndex The index of the current channel. Normally
         * should be 0
         * @param {number} start The x-offset of the beginning of the area that
         * should be rendered
         * @param {number} end The x-offset of the end of the area that should be
         * rendered
         */

    }, {
        key: 'drawBars',
        value: function drawBars(peaks, channelIndex, start, end) {}

        /**
         * Draw a waveform
         *
         * @abstract
         * @param {number[]|number[][]} peaks Can also be an array of arrays for split channel
         * rendering
         * @param {number} channelIndex The index of the current channel. Normally
         * should be 0
         * @param {number} start The x-offset of the beginning of the area that
         * should be rendered
         * @param {number} end The x-offset of the end of the area that should be
         * rendered
         */

    }, {
        key: 'drawWave',
        value: function drawWave(peaks, channelIndex, start, end) {}

        /**
         * Clear the waveform
         *
         * @abstract
         */

    }, {
        key: 'clearWave',
        value: function clearWave() {}

        /**
         * Render the new progress
         *
         * @abstract
         * @param {number} position X-Offset of progress position in pixels
         */

    }, {
        key: 'updateProgress',
        value: function updateProgress(position) {}
    }]);

    return Drawer;
}(util.Observer);

exports.default = Drawer;
module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _webaudio = __webpack_require__(3);

var _webaudio2 = _interopRequireDefault(_webaudio);

var _util = __webpack_require__(0);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * MediaElement backend
 */
var MediaElement = function (_WebAudio) {
    _inherits(MediaElement, _WebAudio);

    /**
     * Construct the backend
     *
     * @param {WavesurferParams} params
     */
    function MediaElement(params) {
        _classCallCheck(this, MediaElement);

        /** @private */
        var _this = _possibleConstructorReturn(this, (MediaElement.__proto__ || Object.getPrototypeOf(MediaElement)).call(this, params));

        _this.params = params;

        // Dummy media to catch errors
        /** @private */
        _this.media = {
            currentTime: 0,
            duration: 0,
            paused: true,
            playbackRate: 1,
            play: function play() {},
            pause: function pause() {},

            volume: 0
        };

        /** @private */
        _this.mediaType = params.mediaType.toLowerCase();
        /** @private */
        _this.elementPosition = params.elementPosition;
        /** @private */
        _this.peaks = null;
        /** @private */
        _this.playbackRate = 1;
        /** @private */
        _this.volume = 1;
        /** @private */
        _this.buffer = null;
        /** @private */
        _this.onPlayEnd = null;
        return _this;
    }

    /**
     * Initialise the backend, called in `wavesurfer.createBackend()`
     */


    _createClass(MediaElement, [{
        key: 'init',
        value: function init() {
            this.setPlaybackRate(this.params.audioRate);
            this.createTimer();
        }

        /**
         * Create a timer to provide a more precise `audioprocess` event.
         *
         * @private
         */

    }, {
        key: 'createTimer',
        value: function createTimer() {
            var _this2 = this;

            var onAudioProcess = function onAudioProcess() {
                if (_this2.isPaused()) {
                    return;
                }
                _this2.fireEvent('audioprocess', _this2.getCurrentTime());

                // Call again in the next frame
                var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame;
                requestAnimationFrame(onAudioProcess);
            };

            this.on('play', onAudioProcess);

            // Update the progress one more time to prevent it from being stuck in case of lower framerates
            this.on('pause', function () {
                _this2.fireEvent('audioprocess', _this2.getCurrentTime());
            });
        }

        /**
         * Create media element with url as its source,
         * and append to container element.
         *
         * @param {string} url Path to media file
         * @param {HTMLElement} container HTML element
         * @param {number[]|number[][]} peaks Array of peak data
         * @param {string} preload HTML 5 preload attribute value
         */

    }, {
        key: 'load',
        value: function load(url, container, peaks, preload) {
            var media = document.createElement(this.mediaType);
            media.controls = this.params.mediaControls;
            media.autoplay = this.params.autoplay || false;
            media.preload = preload == null ? 'auto' : preload;
            media.src = url;
            media.style.width = '100%';

            var prevMedia = container.querySelector(this.mediaType);
            if (prevMedia) {
                container.removeChild(prevMedia);
            }
            container.appendChild(media);

            this._load(media, peaks);
        }

        /**
         * Load existing media element.
         *
         * @param {HTMLMediaElement} elt HTML5 Audio or Video element
         * @param {number[]|number[][]} peaks Array of peak data
         */

    }, {
        key: 'loadElt',
        value: function loadElt(elt, peaks) {
            elt.controls = this.params.mediaControls;
            elt.autoplay = this.params.autoplay || false;

            this._load(elt, peaks);
        }

        /**
         * Private method called by both load (from url)
         * and loadElt (existing media element).
         *
         * @param {HTMLMediaElement} media HTML5 Audio or Video element
         * @param {number[]|number[][]} peaks Array of peak data
         * @private
         */

    }, {
        key: '_load',
        value: function _load(media, peaks) {
            var _this3 = this;

            // load must be called manually on iOS, otherwise peaks won't draw
            // until a user interaction triggers load --> 'ready' event
            if (typeof media.load == 'function') {
                // Resets the media element and restarts the media resource. Any
                // pending events are discarded. How much media data is fetched is
                // still affected by the preload attribute.
                media.load();
            }

            media.addEventListener('error', function () {
                _this3.fireEvent('error', 'Error loading media element');
            });

            media.addEventListener('canplay', function () {
                _this3.fireEvent('canplay');
            });

            media.addEventListener('ended', function () {
                _this3.fireEvent('finish');
            });

            // Listen to and relay play and pause events to enable
            // playback control from the external media element
            media.addEventListener('play', function () {
                _this3.fireEvent('play');
            });

            media.addEventListener('pause', function () {
                _this3.fireEvent('pause');
            });

            this.media = media;
            this.peaks = peaks;
            this.onPlayEnd = null;
            this.buffer = null;
            this.setPlaybackRate(this.playbackRate);
            this.setVolume(this.volume);
        }

        /**
         * Used by `wavesurfer.isPlaying()` and `wavesurfer.playPause()`
         *
         * @return {boolean}
         */

    }, {
        key: 'isPaused',
        value: function isPaused() {
            return !this.media || this.media.paused;
        }

        /**
         * Used by `wavesurfer.getDuration()`
         *
         * @return {number}
         */

    }, {
        key: 'getDuration',
        value: function getDuration() {
            if (this.explicitDuration) {
                return this.explicitDuration;
            }
            var duration = (this.buffer || this.media).duration;
            if (duration >= Infinity) {
                // streaming audio
                duration = this.media.seekable.end(0);
            }
            return duration;
        }

        /**
         * Returns the current time in seconds relative to the audioclip's
         * duration.
         *
         * @return {number}
         */

    }, {
        key: 'getCurrentTime',
        value: function getCurrentTime() {
            return this.media && this.media.currentTime;
        }

        /**
         * Get the position from 0 to 1
         *
         * @return {number}
         */

    }, {
        key: 'getPlayedPercents',
        value: function getPlayedPercents() {
            return this.getCurrentTime() / this.getDuration() || 0;
        }

        /**
         * Get the audio source playback rate.
         *
         * @return {number}
         */

    }, {
        key: 'getPlaybackRate',
        value: function getPlaybackRate() {
            return this.playbackRate || this.media.playbackRate;
        }

        /**
         * Set the audio source playback rate.
         *
         * @param {number} value
         */

    }, {
        key: 'setPlaybackRate',
        value: function setPlaybackRate(value) {
            this.playbackRate = value || 1;
            this.media.playbackRate = this.playbackRate;
        }

        /**
         * Used by `wavesurfer.seekTo()`
         *
         * @param {number} start Position to start at in seconds
         */

    }, {
        key: 'seekTo',
        value: function seekTo(start) {
            if (start != null) {
                this.media.currentTime = start;
            }
            this.clearPlayEnd();
        }

        /**
         * Plays the loaded audio region.
         *
         * @param {number} start Start offset in seconds, relative to the beginning
         * of a clip.
         * @param {number} end When to stop, relative to the beginning of a clip.
         * @emits MediaElement#play
         * @return {Promise}
         */

    }, {
        key: 'play',
        value: function play(start, end) {
            this.seekTo(start);
            var promise = this.media.play();
            end && this.setPlayEnd(end);

            return promise;
        }

        /**
         * Pauses the loaded audio.
         *
         * @emits MediaElement#pause
         * @return {Promise}
         */

    }, {
        key: 'pause',
        value: function pause() {
            var promise = void 0;

            if (this.media) {
                promise = this.media.pause();
            }
            this.clearPlayEnd();

            return promise;
        }

        /** @private */

    }, {
        key: 'setPlayEnd',
        value: function setPlayEnd(end) {
            var _this4 = this;

            this._onPlayEnd = function (time) {
                if (time >= end) {
                    _this4.pause();
                    _this4.seekTo(end);
                }
            };
            this.on('audioprocess', this._onPlayEnd);
        }

        /** @private */

    }, {
        key: 'clearPlayEnd',
        value: function clearPlayEnd() {
            if (this._onPlayEnd) {
                this.un('audioprocess', this._onPlayEnd);
                this._onPlayEnd = null;
            }
        }

        /**
         * Compute the max and min value of the waveform when broken into
         * <length> subranges.
         *
         * @param {number} length How many subranges to break the waveform into.
         * @param {number} first First sample in the required range.
         * @param {number} last Last sample in the required range.
         * @return {number[]|number[][]} Array of 2*<length> peaks or array of
         * arrays of peaks consisting of (max, min) values for each subrange.
         */

    }, {
        key: 'getPeaks',
        value: function getPeaks(length, first, last) {
            if (this.buffer) {
                return _get(MediaElement.prototype.__proto__ || Object.getPrototypeOf(MediaElement.prototype), 'getPeaks', this).call(this, length, first, last);
            }
            return this.peaks || [];
        }

        /**
         * Set the sink id for the media player
         *
         * @param {string} deviceId String value representing audio device id.
         */

    }, {
        key: 'setSinkId',
        value: function setSinkId(deviceId) {
            if (deviceId) {
                if (!this.media.setSinkId) {
                    return Promise.reject(new Error('setSinkId is not supported in your browser'));
                }
                return this.media.setSinkId(deviceId);
            }

            return Promise.reject(new Error('Invalid deviceId: ' + deviceId));
        }

        /**
         * Get the current volume
         *
         * @return {number} value A floating point value between 0 and 1.
         */

    }, {
        key: 'getVolume',
        value: function getVolume() {
            return this.volume || this.media.volume;
        }

        /**
         * Set the audio volume
         *
         * @param {number} value A floating point value between 0 and 1.
         */

    }, {
        key: 'setVolume',
        value: function setVolume(value) {
            this.volume = value;
            this.media.volume = this.volume;
        }

        /**
         * This is called when wavesurfer is destroyed
         *
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            this.pause();
            this.unAll();

            if (this.params.removeMediaElementOnDestroy && this.media && this.media.parentNode) {
                this.media.parentNode.removeChild(this.media);
            }

            this.media = null;
        }
    }]);

    return MediaElement;
}(_webaudio2.default);

exports.default = MediaElement;
module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Caches the decoded peaks data to improve rendering speed for lage audio
 *
 * Is used if the option parameter `partialRender` is set to `true`
 */
var PeakCache = function () {
    /**
     * Instantiate cache
     */
    function PeakCache() {
        _classCallCheck(this, PeakCache);

        this.clearPeakCache();
    }

    /**
     * Empty the cache
     */


    _createClass(PeakCache, [{
        key: "clearPeakCache",
        value: function clearPeakCache() {
            /**
             * Flat array with entries that are always in pairs to mark the
             * beginning and end of each subrange.  This is a convenience so we can
             * iterate over the pairs for easy set difference operations.
             * @private
             */
            this.peakCacheRanges = [];
            /**
             * Length of the entire cachable region, used for resetting the cache
             * when this changes (zoom events, for instance).
             * @private
             */
            this.peakCacheLength = -1;
        }

        /**
         * Add a range of peaks to the cache
         *
         * @param {number} length The length of the range
         * @param {number} start The x offset of the start of the range
         * @param {number} end The x offset of the end of the range
         * @return {number[][]}
         */

    }, {
        key: "addRangeToPeakCache",
        value: function addRangeToPeakCache(length, start, end) {
            if (length != this.peakCacheLength) {
                this.clearPeakCache();
                this.peakCacheLength = length;
            }

            // Return ranges that weren't in the cache before the call.
            var uncachedRanges = [];
            var i = 0;
            // Skip ranges before the current start.
            while (i < this.peakCacheRanges.length && this.peakCacheRanges[i] < start) {
                i++;
            }
            // If |i| is even, |start| falls after an existing range.  Otherwise,
            // |start| falls between an existing range, and the uncached region
            // starts when we encounter the next node in |peakCacheRanges| or
            // |end|, whichever comes first.
            if (i % 2 == 0) {
                uncachedRanges.push(start);
            }
            while (i < this.peakCacheRanges.length && this.peakCacheRanges[i] <= end) {
                uncachedRanges.push(this.peakCacheRanges[i]);
                i++;
            }
            // If |i| is even, |end| is after all existing ranges.
            if (i % 2 == 0) {
                uncachedRanges.push(end);
            }

            // Filter out the 0-length ranges.
            uncachedRanges = uncachedRanges.filter(function (item, pos, arr) {
                if (pos == 0) {
                    return item != arr[pos + 1];
                } else if (pos == arr.length - 1) {
                    return item != arr[pos - 1];
                }
                return item != arr[pos - 1] && item != arr[pos + 1];
            });

            // Merge the two ranges together, uncachedRanges will either contain
            // wholly new points, or duplicates of points in peakCacheRanges.  If
            // duplicates are detected, remove both and extend the range.
            this.peakCacheRanges = this.peakCacheRanges.concat(uncachedRanges);
            this.peakCacheRanges = this.peakCacheRanges.sort(function (a, b) {
                return a - b;
            }).filter(function (item, pos, arr) {
                if (pos == 0) {
                    return item != arr[pos + 1];
                } else if (pos == arr.length - 1) {
                    return item != arr[pos - 1];
                }
                return item != arr[pos - 1] && item != arr[pos + 1];
            });

            // Push the uncached ranges into an array of arrays for ease of
            // iteration in the functions that call this.
            var uncachedRangePairs = [];
            for (i = 0; i < uncachedRanges.length; i += 2) {
                uncachedRangePairs.push([uncachedRanges[i], uncachedRanges[i + 1]]);
            }

            return uncachedRangePairs;
        }

        /**
         * For testing
         *
         * @return {number[][]}
         */

    }, {
        key: "getCacheRanges",
        value: function getCacheRanges() {
            var peakCacheRangePairs = [];
            var i = void 0;
            for (i = 0; i < this.peakCacheRanges.length; i += 2) {
                peakCacheRangePairs.push([this.peakCacheRanges[i], this.peakCacheRanges[i + 1]]);
            }
            return peakCacheRangePairs;
        }
    }]);

    return PeakCache;
}();

exports.default = PeakCache;
module.exports = exports["default"];

/***/ })
/******/ ]);
});
//# sourceMappingURL=wavesurfer.js.map

/***/ }),

/***/ "./src/templates.js":
/*!**************************!*\
  !*** ./src/templates.js ***!
  \**************************/
/*! exports provided: sfx_dropdn_template, local_exec_head, local_exec_info, filterheader, quadfilter_template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sfx_dropdn_template", function() { return sfx_dropdn_template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "local_exec_head", function() { return local_exec_head; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "local_exec_info", function() { return local_exec_info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterheader", function() { return filterheader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadfilter_template", function() { return quadfilter_template; });
// Handlebars tamplates
var Handlebars = __webpack_require__(/*! ./js/handlebars.min.js */ "./src/js/handlebars.min.js");
var local_exec_head = Handlebars.compile(`			<table class='nobord'><tr>
				<td><input ID='opener' name="file" type="file" accept=".wav,.WAV" /></td>
				<!--
				<td><input type="button" value="Open" style="width:55pt" onclick="btn_open()" ></td>
				<td><input type="button" value="Save(F1)" style="width:55pt" onclick="btn_save()"></td>
				-->
			</tr>
			</table>`);

var local_exec_info = Handlebars.compile(`
You are running the local version of Waverly.
`);


var sfx_dropdn_template = Handlebars.compile(`<button id='dropbtn' class="dropbtn">Effects</button>
	<div id="droplist" class="dropdown-content">
	<a id='openfilter'>Quad Filter</a>

 </div>`);

/*
	<a onclick="openFilter('reverb')">Reverb</a>
	<a onclick="openFilter('delay')">Delay</a>
	<a onclick="openFilter('lowpass')">Lowpass Filter</a>
	<a onclick="openFilter('highpass')">Highpass Filter</a>
	<a onclick="openFilter('bandpass')">Bandpass Filter</a>
	<a onclick="openFilter('lowshelf')">Lowshelf Filter</a>
	<a onclick="openFilter('highshelf')">Highshelf Filter</a>
	<a onclick="openFilter('peaking')">Peaking Filter</a>
	<a onclick="openFilter('notch')">Notch Filter</a>
	<a onclick="openFilter('allpass')">Allpass Filter</a>
*/

var filterheader = Handlebars.compile(`<div id='filterhdr'>
<button class="butn" id='fl_apply'>Apply</button>
<button class="butn" id='fl_cancel'>Close</button>
<input type='checkbox' id='fl_audition' checked>Audition</input>
</div>
`);

Handlebars.registerPartial("filterheader", filterheader);

var quadfilter_template = Handlebars.compile(`<div id='quadfilter'>
{{> filterheader}}
<table><tr>
<th>Kind</th>
<th>Frequency</th>
<th>Detune</th>
<th>Q</th>
<th>Gain</th>
</tr>
<tr>
<td>
<select id='qf_type'>
  <option value="lowpass">lowpass</option>
  <option value="highpass">highpass</option>
  <option value="bandpass">bandpass</option>
  <option value="lowshelf">lowshelf</option>
  <option value="highshelf">highshelf</option>
  <option value="peaking">peaking</option>
  <option value="notch">notch</option>
  <option value="allpass">allpass</option>
</select>
</td>

<td><input id='qf_frequency' type="text" value="440" class="dial" data-min="1" data-max="8000" data-angleArc="300" data-angleOffset="30" data-width='128' data-height='128'></td>
<td><input id='qf_detune' type="text" value="0" class="dial" data-min="-100" data-max="100" data-angleArc="300" data-angleOffset="30" data-width='128' data-height='128'></td>
<td><input id='qf_Q' type="text" value="1" class="dial" data-min="0" data-max="50" data-angleArc="300" data-angleOffset="30" data-width='128' data-height='128'></td>
<td><input id='qf_gain' type="text" value="0" class="dial" data-min="-40" data-max="40" data-angleArc="300" data-angleOffset="30" data-width='128' data-height='128'></td>
</tr>
</table>
</div>
`);




/***/ }),

/***/ "./src/viewWAV.js":
/*!************************!*\
  !*** ./src/viewWAV.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/jquery-3.2.1.min.js */ "./src/js/jquery-3.2.1.min.js");
/* harmony import */ var _js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Wave_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Wave.js */ "./src/Wave.js");
/* harmony import */ var _js_jquery_knob_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/jquery.knob.js */ "./src/js/jquery.knob.js");
/* harmony import */ var _js_jquery_knob_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_jquery_knob_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates.js */ "./src/templates.js");
/* harmony import */ var _UndoStack_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UndoStack.js */ "./src/UndoStack.js");
/* harmony import */ var _base64data_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base64data.js */ "./src/base64data.js");
/* harmony import */ var _audioBufferToWav_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./audioBufferToWav.js */ "./src/audioBufferToWav.js");










"use strict";

// Flag to enable local execution (not via the FlashAir web server)
var local_exec = document.URL.indexOf('file:') == 0;

var sample_path_prefix = '/';
var filename_input = document.getElementById ("fname");//.value
var fname = "";

var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var OfflineContext = window.OfflineAudioContext || window.webkitOfflineAudioContext;

var localClipboard;

var undoStack = new _UndoStack_js__WEBPACK_IMPORTED_MODULE_4__["default"](10);

var wave;

var createOfflineContext  = function (buffer) {
	let {numberOfChannels, sampleRate} = buffer;
	return new OfflineContext(numberOfChannels, buffer.getChannelData(0).length, sampleRate);
}



// disconnectFilters
// setFilters (listoffilters);
var testFilterButton = function(e)
{
	let biquadFilter = wave.audioContext.createBiquadFilter();
	let filterGUI = Object(_templates_js__WEBPACK_IMPORTED_MODULE_3__["quadfilter_template"])();
	_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()('#procmods').empty();
	wave.backend.setFilters();
	_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()('#procmods').append (filterGUI);
	_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()(".dial").knob({change: function (v) {
		let inp = this.i[0];
		let ctlId = inp.getAttribute('id').substring(3);
//		if (ctlId === 'gain') {
//			biquadFilter.gain.value = v;
//		} else {
			biquadFilter[ctlId].value = v;
//		}
//		console.log(ctlId + " " + v);
	}  });
	_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()('#qf_type').change( e=> {
		let picked = _js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()("select option:selected" )[0];
		let fkind = _js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()(picked).text();
		biquadFilter.type = fkind;
		//console.log($(picked).text());
	});
	_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()('#fl_cancel').on('click', e=>{
		_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()('#procmods').empty();
		wave.backend.setFilters();
	});

	_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()('#fl_audition').on('click', e=>{
		if (e.target.checked) {
			wave.backend.setFilters([biquadFilter]);
		} else {
			wave.backend.setFilters();
		}
	});

	_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()('#fl_apply').on('click', e=>{
		_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()('#fl_audition').prop('checked', false);
		applyFilterTransform(function (ctx) {
			let bqf = ctx.createBiquadFilter();
			bqf.type = biquadFilter.type;
			bqf.frequency.value = biquadFilter.frequency.value;
			bqf.detune.value = biquadFilter.detune.value;
			bqf.Q.value = biquadFilter.Q.value;
			bqf.gain.value = biquadFilter.gain.value;
			return [bqf];
		});

		wave.backend.setFilters();
	});
	wave.backend.setFilters([biquadFilter]);
}


// Apply a filter transform implemented using the AudioContext filter system to the selected area
// and paste back the result.
// the setup function is called to knit together the filter graph desired.
function applyFilterTransform(setup)
{
	let working = copySelected();
	let ctx = createOfflineContext(working);
	
	let filters;
	
	if (setup !== undefined) {
		filters = setup(ctx, working);
	} 
	
	let source = ctx.createBufferSource();

	// Connect all filters in the filter chain.
	let prevFilter = source;
	if (filters) {
		for (var i = 0; i < filters.length; ++i) {
			let thisFilter = filters[i];
			prevFilter.connect(thisFilter);
			prevFilter = thisFilter;
		}
	}
	prevFilter.connect(ctx.destination);

	source.buffer = working;
	source.start();

	ctx.oncomplete = function (e) {
		pasteSelected(e.renderedBuffer);
	}
	ctx.startRendering();
/*
	ctx.startRendering().then(function(renderedBuffer) {
		pasteSelected(renderedBuffer);
	}).catch(function(err) {
		alert('Rendering failed: ' + err);
	});
*/
}

// Simplified to just multiply by 1/max(abs(buffer))
// (which preserves any existing DC offset).
var normalize = function (buffer)
{
	let {numberOfChannels, sampleRate} = buffer;
	let bufLen = buffer.getChannelData(0).length;

	for (var cx = 0; cx < numberOfChannels; ++cx) {
		var maxv = -1000000;
		let d = buffer.getChannelData(cx);
		for (var i = 0; i < d.length; ++i) {
			let s = d[i];
			if (s < 0) s = -s;
			if (s > maxv) maxv = s;
		}
		if (maxv === 0) return;
		let scaler = 1.0 / maxv;
		for (var i = 0; i < d.length; ++i) {
			d[i] = d[i]* scaler;
		}
	}

	return buffer;
}


function reverse (buffer)
{
	let {numberOfChannels, sampleRate} = buffer;
	let bufLen = buffer.getChannelData(0).length;
	let halfbuf = bufLen / 2;

	for (var cx = 0; cx < numberOfChannels; ++cx) {
		let d = buffer.getChannelData(cx);
		let td = bufLen - 1;
		for (var i = 0; i < halfbuf; ++i) {
			let s = d[i];
			d[i] = d[td];
			d[td--] = s;
		}
	}

	return buffer;
}

var applyFunction = function (buffer, f)
{
	let {numberOfChannels, sampleRate} = buffer;
	let bufLen = buffer.getChannelData(0).length;

	for (var cx = 0; cx < numberOfChannels; ++cx) {
		var minv = 1000000;
		var maxv = -1000000;
		let d = buffer.getChannelData(cx);
		for (var i = 0; i < d.length; ++i) {
			d[i] = f(d[i], i, bufLen);
		}
	}

	return buffer;
}



function doPlaySel(e)
{
	let {start, end} = wave.getSelection();
	wave.surfer.play(start, end);
}


var deleteSelected = function (e)
{
	let buffer = wave.backend.buffer;
	let {regional, length, first, last, region} = wave.getSelection();
	if (!regional) return;

	let ds = last - first;
	let {numberOfChannels, sampleRate} = buffer;
	let bufLen = length - ds;
	if (bufLen === 0) bufLen = 1;
	let nextBuffer = audioCtx.createBuffer(numberOfChannels, bufLen, sampleRate);

	for (var cx = 0; cx < numberOfChannels; ++cx) {
		let sa = buffer.getChannelData(cx);
		let da = nextBuffer.getChannelData(cx);
		let dx = 0;
		for(var i = 0; i < first; ++i) {
			da[dx++] = sa[i];
		}
		for(var i = last; i < length; ++i) {
			da[dx++] = sa[i];
		}
	}
	if(region) region.remove();
	undoStack.push(buffer);
	wave.changeBuffer(nextBuffer);
}

var copySelected = function (e)
{
	let buffer = wave.backend.buffer;
	let {length, first, last, region} = wave.getSelection();
	let ds = last - first;
	let {numberOfChannels, sampleRate} = buffer;
	let nextBuffer = audioCtx.createBuffer(numberOfChannels, ds, sampleRate);

	for (var cx = 0; cx < numberOfChannels; ++cx) {
		let sa = buffer.getChannelData(cx);
		let da = nextBuffer.getChannelData(cx);
		let dx = 0;
		for(var i = first; i < last; ++i) {
			da[dx++] = sa[i];
		}
	}
	return nextBuffer;
}

// Apply a transform function to the selected area and replace the selected area
// with the result. The transform function can be either 'in place' or can return a
// result buffer of any size.
function applyTransform(f, f2)
{
	let working = copySelected();
	let result = f(working, f2);
	pasteSelected(result);
}

function reverser(e) {
	applyTransform(reverse);
}

function normalizer(e) {
	
	applyTransform(normalize);
}

function fadeIn(e) {
	
	let f = function (s, i, len) {
		return s * (i / len);
	}
	applyTransform(applyFunction, f);
}

function fadeOut(e) {
	
	let f = function (s, i, len) {
		return s * (1.0 - i / len);
	}
	applyTransform(applyFunction, f);
}

function selAll(e) {
	let {regional, start, end, duration} = wave.getSelection();
	wave.surfer.regions.clear();
	wave.surfer.seekTo(0);
	// If wa are alread a full selection, quit right after we cleared.
	if (regional && start === 0 && end === duration) return;

	let pos = {
		start:	0,
		end:	wave.surfer.getDuration(),
		drag:	false,
		resize: false,
	};
	wave.surfer.regions.add(pos);
}


var pasteSelected = function (pasteData, checkInsert)
{
	let buffer = wave.backend.buffer;

	let {regional, cursorTime, cursorPos, length, first, last, region} = wave.getSelection();

	if (checkInsert && !regional) { // regionl === false means its an insertion point.
		first = cursorPos;
		last = cursorPos;
	}

	let pasteLen = pasteData.getChannelData(0).length;
	let dTs = last - first;
	let {numberOfChannels, sampleRate} = buffer;
	let numPasteChannels = pasteData.numberOfChannels;
	let bufLen = length - dTs + pasteLen;
	let nextBuffer = audioCtx.createBuffer(numberOfChannels, bufLen, sampleRate);

	for (var cx = 0; cx < numberOfChannels; ++cx) {
		let sa = buffer.getChannelData(cx);
		let da = nextBuffer.getChannelData(cx);
		let pdx = cx < numPasteChannels ? cx : 0;
		let cb = pasteData.getChannelData(pdx);
		let dx = 0;
		for(var i = 0; i < first; ++i) {
			da[dx++] = sa[i];
		}

		for(var i = 0; i < pasteLen; ++i) {
			da[dx++] = cb[i];
		}

		for(var i = last; i < length; ++i) {
			da[dx++] = sa[i];
		}
	}
	//if(region) region.remove();
	undoStack.push(buffer);
	wave.changeBuffer(nextBuffer);
}


function doUndo(e) {
	console.log("Undo");

	if (undoStack.atTop()) {
		let buffer = wave.backend.buffer;
		undoStack.push(buffer);
	}
	let unbuf = undoStack.undo();
	wave.changeBuffer(unbuf);
}

function doRedo(e) {
	console.log("Redo");
	let redo = undoStack.redo();
	wave.changeBuffer(redo);
}

function copyToClip(e) 
{
	let clip = e.originalEvent.clipboardData;

	let clipBuff =  copySelected();
	let wavData = Object(_audioBufferToWav_js__WEBPACK_IMPORTED_MODULE_6__["audioBufferToWav"])(clipBuff);
	let asText = Object(_base64data_js__WEBPACK_IMPORTED_MODULE_5__["base64ArrayBuffer"])(wavData);
	localClipboard = clipBuff;
	if (clip) clip.setData('text/plain', asText);
	e.preventDefault();
}

function cutToClip(e) {
	copyToClip(e);
	deleteSelected(e);
}

function pasteFromClip(e)
{
	let clipBd = e.originalEvent.clipboardData;
	if (clipBd) {
		let clip = clipBd.getData('text/plain');
		if (clip.startsWith('Ukl')) {
			let asbin = Object(_base64data_js__WEBPACK_IMPORTED_MODULE_5__["base64ToArrayBuffer"])(clip);
			wave.backend.decodeArrayBuffer(asbin, function (data) {
			if (data) pasteSelected(data, true);
	 	  }, function (err) {
			alert('paste decode error');
		  });
		  return;
		}
	}
	if (localClipboard) pasteSelected(localClipboard, true);
}

function zoom(amt) {
	
	let minPxWas = wave.surfer.params.minPxPerSec;
	let newPx = minPxWas * amt;
	let zoomLimit = 44100;
	if (newPx > zoomLimit) newPx = zoomLimit;
// console.log('zoom rate: ' + newPx);
	wave.surfer.zoom(newPx);
}

function bindGui() {
	_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()(window).on('paste', pasteFromClip);
	// iOS was screwing up if the following line was not commented out.
	_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()(window).on('copy', copyToClip);
	_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()(window).on('cut', cutToClip);
	
	_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()(window).on('undo', doUndo);
	_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()(window).on('redo', doRedo);
	// Remove highlighting after button pushes:
	_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()('.butn').mouseup(function() { this.blur()});
	
	_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()('#loadbut').on('click',btn_load);
	_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()('#savebut').on('click',btn_save);
	_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()('#plsybut').on('click',(e)=>{wave.surfer.playPause(e)});
	_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()('#rewbut').on('click', (e)=>{wave.surfer.seekTo(0)});
	_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()('#plsyselbut').on('click', doPlaySel);
	_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()('#undobut').on('click', doUndo);
	_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()('#redobut').on('click', doRedo);
	_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()('#delbut').on('click', deleteSelected);
	_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()('#cutbut').on('click', cutToClip);
	_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()('#copybut').on('click', copyToClip);
	_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()('#pastebut').on('click',pasteFromClip);
	_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()('#normbut').on('click',normalizer);
	_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()('#reversebut').on('click',reverser);
	_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()('#fadeinbut').on('click',fadeIn);
	_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()('#fadeoutbut').on('click',fadeOut);
	_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()('#selallbut').on('click',selAll);
	_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()('#zoominbut').on('click',e=>{zoom(2.0)});
	_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()('#zoomoutbut').on('click',e=>{zoom(0.5)});
}

var sfxdd = Object(_templates_js__WEBPACK_IMPORTED_MODULE_3__["sfx_dropdn_template"])();
_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()('#dropdn').append(sfxdd);
_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()('#dropbtn').on('click', function (e) {
	console.log('clicked!');
	_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()('#droplist').toggleClass('show');
});

_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()('#openfilter').on('click', e=>{openFilter('filter')});

function closeDropDown() {
	_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()(".dropdown-content").removeClass('show');
}


function openFilter(filterName) {
	closeDropDown();
	if (filterName === 'filter') {
		testFilterButton();
	}
}

var playBtnImg = _js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()('#playbutimg');
var undoBtn = _js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()('#undobut');
var redoBtn = _js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()('#redobut');

function setDisable(item, state)
{
	item.prop("disabled", state);
	item.css('opacity', state ? 0.3: 1.0);
}

function updateGui()
{
	if(!wave || !wave.surfer) return;
	let playState = wave.surfer.isPlaying();

	let newPlayImg = "img/glyphicons-174-play.png"
	if (playState) newPlayImg = "img/glyphicons-175-pause.png";
	if (playBtnImg.attr('src') !== newPlayImg) {
		playBtnImg.attr('src',newPlayImg);
	}

	let canUndo = undoStack.canUndo();
	setDisable(undoBtn, !canUndo);

	let canRedo = undoStack.canRedo();
	setDisable(redoBtn, !canRedo);
}

var guiCheck;

function startGuiCheck() {
	if(!guiCheck) guiCheck = setInterval(updateGui, 200);
}

/*
// Chrome decided to only allow the browser access to the microphone when the page has been served-up via https
// since the FlashAir card doesn't do that, we can't record audio. Another annoying browser incapacity.
function record()
{
	var mike = new Microphone({}, wave.surfer);

	mike.start();
}
*/

// data = DOMException: Only secure origins are allowed (see: https://goo.gl/Y0ZkNV).


//editor
function setEditData(data)
{
	if(!wave) {
		wave = new _Wave_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
	}
	wave.openOnBuffer(data);
	startGuiCheck();
	// let loadEndTime = performance.now();
	// console.log("Load time: " + (loadEndTime - loadStartTime));
}

function openLocal(evt)
{
	var files = evt.target.files;
	var f = files[0];
	if (f === undefined) return;
	var reader = new FileReader();
	
// Closure to capture the file information.
	reader.onloadend = (function(theFile) {
		return openOnBuffer(theFile);
	})(f);
	// Read in the image file as a data URL.
	reader.readAsBinaryString(f);
}


//---------- When reading page -------------
function onLoad()
{
	// Getting arguments
	var urlarg = location.search.substring(1);
	if(urlarg != "")
	{
		// Decode and assign to file name box
		filename_input.value = decodeURI(urlarg);
	}

	if(!local_exec) {
		loadFile();
	} else { // We are running as a 'file://', so change the GUI to reflect that.
		_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()('#filegroup').remove();
		_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()('#filegroupplace').append(Object(_templates_js__WEBPACK_IMPORTED_MODULE_3__["local_exec_head"])());
		_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()('#jtab').append (Object(_templates_js__WEBPACK_IMPORTED_MODULE_3__["local_exec_info"])());
		_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()('#opener').on('change', openLocal);
	}
	bindGui();
}

window.onload = onLoad;

// use ajax to load wav data (instead of a web worker).
function loadFile()
{
	fname = filename_input.value;
	_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()("#statind").text("Loading: " +  fname);
	_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
	url         : fname,
	cache       : false,
	processData : false,
	method:		'GET',
	type        : 'GET',
	success     : function(data, textStatus, jqXHR){
		setEditData(data);
		_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()("#statind").text(fname + " loaded.");
	},

	error: function (data, textStatus, jqXHR) {
		console.log("Error: " + textStatus);
	},

	xhr: function() {
		var xhr = new window.XMLHttpRequest();
		xhr.responseType= 'blob';
		return xhr;
	},

	});
}

// use ajax to save-back wav data (instead of a web worker).
function saveFile(filepath, data)
{
	var timestring;
	var dt = new Date();
	var year = (dt.getFullYear() - 1980) << 9;
	var month = (dt.getMonth() + 1) << 5;
	var date = dt.getDate();
	var hours = dt.getHours() << 11;
	var minutes = dt.getMinutes() << 5;
	var seconds = Math.floor(dt.getSeconds() / 2);
	var timestring = "0x" + (year + month + date).toString(16) + (hours + minutes + seconds).toString(16);
	var urlDateSet = '/upload.cgi?FTIME=' + timestring + "&TIME="+(Date.now());;
	_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.get(urlDateSet, function() {
		_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.ajax(filepath, {
		headers:	{'Overwrite': 't', 'Content-type': 'audio/wav'},
		cache:		false,
		contentType: false,
		data:		data,
		processData : false,
		method:		'PUT',
		error:		function(jqXHR, textStatus, errorThrown) {
			alert(textStatus + "\n" + errorThrown);
		},
		success: function(data, textStatus, jqXHR){
			console.log("Save OK");
			_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.ajax("/upload.cgi?WRITEPROTECT=OFF",{
				error:	function(jqXHR, textStatus, errorThrown) {
					alert(textStatus + "\n" + errorThrown);
				},
				headers: {"If-Modified-Since": "Thu, 01 Jan 1970 00:00:00 GMT"},
				success: function(data, textStatus, jqXHR){
					console.log("save and unlock done");
					_js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()("#statind").text(filepath + " saved.");
				},
			})
		},
		
		xhr: function() {
			var xhr = new window.XMLHttpRequest();
		  	xhr.upload.addEventListener("progress", function(evt){
			  if (evt.lengthComputable) {
				  var percentComplete = Math.round(evt.loaded / evt.total * 100.0);
				  //Do something with upload progress
				 _js_jquery_3_2_1_min_js__WEBPACK_IMPORTED_MODULE_0___default()("#statind").text(filepath + " " + percentComplete + "%");
				 //console.log(percentComplete);
			  }
			}, false);
		 	return xhr;
		 }
		});
	});
}

//-------keyin--------
document.onkeydown = function (e){
	if(!e) e = window.event;

	if(e.keyCode == 112) //F1
	{
		btn_save();
		return false;		
	}

	if(e.keyCode == 123) //F12
	{
		btn_load();
		return false;		
	}
};


//---------Button-----------

//Load
function btn_load()
{
//	if(window.confirm('Load ?'))
//	{
		// postWorker("load"); // 4306
		loadFile();
		fname = filename_input.value;

//	}
	// jsEditor.markClean();
}

//Save

function btn_save(){

	if(fname != filename_input.value)
	{
		if(!window.confirm('Are you sure you want to save it?\n(Target file name has changed!)'))
		{
			return;
		}
	}
	fname = filename_input.value;

	let aBuf = wave.backend.buffer;
	let saveData = Object(_audioBufferToWav_js__WEBPACK_IMPORTED_MODULE_6__["audioBufferToWav"])(aBuf);
	saveFile(fname, saveData);
	// jsEditor.markClean();
}


/***/ })

/******/ });