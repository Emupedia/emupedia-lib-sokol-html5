var c;c||(c=typeof Module !== 'undefined' ? Module : {});var h={},p;for(p in c)c.hasOwnProperty(p)&&(h[p]=c[p]);c.arguments=[];c.thisProgram="./this.program";c.quit=function(a,b){throw b;};c.preRun=[];c.postRun=[];var q=!1,r=!1,t=!1,aa=!1;
if(c.ENVIRONMENT)if("WEB"===c.ENVIRONMENT)q=!0;else if("WORKER"===c.ENVIRONMENT)r=!0;else if("NODE"===c.ENVIRONMENT)t=!0;else if("SHELL"===c.ENVIRONMENT)aa=!0;else throw Error("Module['ENVIRONMENT'] value is not valid. must be one of: WEB|WORKER|NODE|SHELL.");else q="object"===typeof window,r="function"===typeof importScripts,t="object"===typeof process&&"function"===typeof require&&!q&&!r,aa=!q&&!t&&!r;
if(t){var ba,ca;c.read=function(a,b){ba||(ba=require("fs"));ca||(ca=require("path"));a=ca.normalize(a);a=ba.readFileSync(a);return b?a:a.toString()};c.readBinary=function(a){a=c.read(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a};1<process.argv.length&&(c.thisProgram=process.argv[1].replace(/\\/g,"/"));c.arguments=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=c);process.on("uncaughtException",function(a){if(!(a instanceof v))throw a;});process.on("unhandledRejection",
function(){process.exit(1)});c.inspect=function(){return"[Emscripten Module object]"}}else if(aa)"undefined"!=typeof read&&(c.read=function(a){return read(a)}),c.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?c.arguments=scriptArgs:"undefined"!=typeof arguments&&(c.arguments=arguments),"function"===typeof quit&&(c.quit=function(a){quit(a)});else if(q||r)c.read=function(a){var b=
new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},r&&(c.readBinary=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),c.readAsync=function(a,b,d){var e=new XMLHttpRequest;e.open("GET",a,!0);e.responseType="arraybuffer";e.onload=function(){200==e.status||0==e.status&&e.response?b(e.response):d()};e.onerror=d;e.send(null)},c.setWindowTitle=function(a){document.title=a};
c.print="undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null;c.printErr="undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||c.print;c.print=c.print;c.printErr=c.printErr;for(p in h)h.hasOwnProperty(p)&&(c[p]=h[p]);h=void 0;function da(a){assert(!ea);var b=w;w=w+a+15&-16;return b}function fa(a){var b;b||(b=16);return Math.ceil(a/b)*b}function ha(a){x||(x={});x[a]||(x[a]=1,c.printErr(a))}var x,y=0;
function assert(a,b){a||z("Assertion failed: "+b)}function A(a){if("number"===typeof a){var b=!0;var d=a}else b=!1,d=a.length;var e=("function"===typeof ia?ia:da)(Math.max(d,1));if(b){a=e;assert(0==(e&3));for(b=e+(d&-4);a<b;a+=4)C[a>>2]=0;for(b=e+d;a<b;)ja[a++>>0]=0;return e}a.subarray||a.slice?D.set(a,e):D.set(new Uint8Array(a),e);return e}
function ka(a){var b;if(0===b||!a)return"";for(var d=0,e,f=0;;){e=D[a+f>>0];d|=e;if(0==e&&!b)break;f++;if(b&&f==b)break}b||(b=f);e="";if(128>d){for(;0<b;)d=String.fromCharCode.apply(String,D.subarray(a,a+Math.min(b,1024))),e=e?e+d:d,a+=1024,b-=1024;return e}a:{b=D;for(d=a;b[d];)++d;if(16<d-a&&b.subarray&&la)a=la.decode(b.subarray(a,d));else for(d="";;){e=b[a++];if(!e){a=d;break a}if(e&128)if(f=b[a++]&63,192==(e&224))d+=String.fromCharCode((e&31)<<6|f);else{var g=b[a++]&63;if(224==(e&240))e=(e&15)<<
12|f<<6|g;else{var k=b[a++]&63;if(240==(e&248))e=(e&7)<<18|f<<12|g<<6|k;else{var m=b[a++]&63;if(248==(e&252))e=(e&3)<<24|f<<18|g<<12|k<<6|m;else{var l=b[a++]&63;e=(e&1)<<30|f<<24|g<<18|k<<12|m<<6|l}}}65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}else d+=String.fromCharCode(e)}}return a}var la="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ma(a,b,d,e){if(0<e){e=d+e-1;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);55296<=g&&57343>=g&&(g=65536+((g&1023)<<10)|a.charCodeAt(++f)&1023);if(127>=g){if(d>=e)break;b[d++]=g}else{if(2047>=g){if(d+1>=e)break;b[d++]=192|g>>6}else{if(65535>=g){if(d+2>=e)break;b[d++]=224|g>>12}else{if(2097151>=g){if(d+3>=e)break;b[d++]=240|g>>18}else{if(67108863>=g){if(d+4>=e)break;b[d++]=248|g>>24}else{if(d+5>=e)break;b[d++]=252|g>>30;b[d++]=128|g>>24&63}b[d++]=128|g>>18&63}b[d++]=128|g>>12&63}b[d++]=
128|g>>6&63}b[d++]=128|g&63}}b[d]=0}}function na(a){for(var b=0,d=0;d<a.length;++d){var e=a.charCodeAt(d);55296<=e&&57343>=e&&(e=65536+((e&1023)<<10)|a.charCodeAt(++d)&1023);127>=e?++b:b=2047>=e?b+2:65535>=e?b+3:2097151>=e?b+4:67108863>=e?b+5:b+6}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function oa(a){var b=na(a)+1,d=pa(b);ma(a,ja,d,b);return d}var buffer,ja,D,qa,C,ra;
function sa(){c.HEAP8=ja=new Int8Array(buffer);c.HEAP16=qa=new Int16Array(buffer);c.HEAP32=C=new Int32Array(buffer);c.HEAPU8=D=new Uint8Array(buffer);c.HEAPU16=new Uint16Array(buffer);c.HEAPU32=ra=new Uint32Array(buffer);c.HEAPF32=new Float32Array(buffer);c.HEAPF64=new Float64Array(buffer)}var E,w,ea,ta,F,ua,va,G;E=w=ta=F=ua=va=G=0;ea=!1;
function wa(){z("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+H+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")}var xa=c.TOTAL_STACK||5242880,H=c.TOTAL_MEMORY||134217728;H<xa&&c.printErr("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+H+"! (TOTAL_STACK="+xa+")");
c.buffer?buffer=c.buffer:("object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(c.wasmMemory=new WebAssembly.Memory({initial:H/65536,maximum:H/65536}),buffer=c.wasmMemory.buffer):buffer=new ArrayBuffer(H),c.buffer=buffer);sa();C[0]=1668509029;qa[1]=25459;if(115!==D[2]||99!==D[3])throw"Runtime error: expected the system to be little-endian!";
function I(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var d=b.i;"number"===typeof d?void 0===b.a?c.dynCall_v(d):c.dynCall_vi(d,b.a):d(void 0===b.a?null:b.a)}}}var ya=[],za=[],Aa=[],Ba=[],Ca=[],J=!1;function Da(){var a=c.preRun.shift();ya.unshift(a)}var K=0,Ea=null,L=null;c.preloadedImages={};c.preloadedAudios={};function M(a){return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}
(function(){function a(){try{if(c.wasmBinary)return new Uint8Array(c.wasmBinary);if(c.readBinary)return c.readBinary(f);throw"on the web, we need the wasm binary to be preloaded and set on Module['wasmBinary']. emcc.py will do that for you when generating HTML (but not JS)";}catch(n){z(n)}}function b(){return c.wasmBinary||!q&&!r||"function"!==typeof fetch?new Promise(function(b){b(a())}):fetch(f,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+f+
"'";return a.arrayBuffer()}).catch(function(){return a()})}function d(a){function d(a){m=a.exports;if(m.memory){a=m.memory;var b=c.buffer;a.byteLength<b.byteLength&&c.printErr("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here");b=new Int8Array(b);(new Int8Array(a)).set(b);c.buffer=buffer=a;sa()}c.asm=m;c.usingWasm=!0;K--;c.monitorRunDependencies&&c.monitorRunDependencies(K);0==K&&(null!==Ea&&(clearInterval(Ea),Ea=null),L&&(a=L,L=null,a()))}
function e(a){d(a.instance)}function g(a){b().then(function(a){return WebAssembly.instantiate(a,k)}).then(a).catch(function(a){c.printErr("failed to asynchronously prepare wasm: "+a);z(a)})}if("object"!==typeof WebAssembly)return c.printErr("no native wasm support detected"),!1;if(!(c.wasmMemory instanceof WebAssembly.Memory))return c.printErr("no native wasm Memory in use"),!1;a.memory=c.wasmMemory;k.global={NaN:NaN,Infinity:Infinity};k["global.Math"]=Math;k.env=a;K++;c.monitorRunDependencies&&c.monitorRunDependencies(K);
if(c.instantiateWasm)try{return c.instantiateWasm(k,d)}catch(ob){return c.printErr("Module.instantiateWasm callback failed with error: "+ob),!1}c.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||M(f)||"function"!==typeof fetch?g(e):WebAssembly.instantiateStreaming(fetch(f,{credentials:"same-origin"}),k).then(e).catch(function(a){c.printErr("wasm streaming compile failed: "+a);c.printErr("falling back to ArrayBuffer instantiation");g(e)});return{}}var e="clear-emsc.wast",f="clear-emsc.wasm",
g="clear-emsc.temp.asm.js";"function"===typeof c.locateFile&&(M(e)||(e=c.locateFile(e)),M(f)||(f=c.locateFile(f)),M(g)||(g=c.locateFile(g)));var k={global:null,env:null,asm2wasm:{"f64-rem":function(a,b){return a%b},"debugger":function(){debugger}},parent:c},m=null;c.asmPreload=c.asm;var l=c.reallocBuffer;c.reallocBuffer=function(a){if("asmjs"===B)var b=l(a);else a:{var d=c.usingWasm?65536:16777216;0<a%d&&(a+=d-a%d);d=c.buffer.byteLength;if(c.usingWasm)try{b=-1!==c.wasmMemory.grow((a-d)/65536)?c.buffer=
c.wasmMemory.buffer:null;break a}catch(Eb){b=null;break a}b=void 0}return b};var B="";c.asm=function(a,b){if(!b.table){a=c.wasmTableSize;void 0===a&&(a=1024);var e=c.wasmMaxTableSize;b.table="object"===typeof WebAssembly&&"function"===typeof WebAssembly.Table?void 0!==e?new WebAssembly.Table({initial:a,maximum:e,element:"anyfunc"}):new WebAssembly.Table({initial:a,element:"anyfunc"}):Array(a);c.wasmTable=b.table}b.memoryBase||(b.memoryBase=c.STATIC_BASE);b.tableBase||(b.tableBase=0);(b=d(b))||z("no binaryen method succeeded. consider enabling more options, like interpreting, if you want that: https://github.com/kripken/emscripten/wiki/WebAssembly#binaryen-methods");
return b}})();E=1024;w=E+2160;za.push();c.STATIC_BASE=E;c.STATIC_BUMP=2160;w+=16;var Fa=0;function Ga(a){return a?("number"==typeof a&&(a=ka(a)),"#window"==a?window:"#document"==a?document:"#screen"==a?window.screen:"#canvas"==a?c.canvas:"string"==typeof a?document.getElementById(a):a):window}var N=null,O="",P=0,Q=null,Ha=0,R=0,Ia=0,Ja=0,Ka=[],La={},Ma,Na,S,Oa=!1,Pa=!1,Qa=[];
function Ra(){function a(){Pa=document.pointerLockElement===c.canvas||document.mozPointerLockElement===c.canvas||document.webkitPointerLockElement===c.canvas||document.msPointerLockElement===c.canvas}c.preloadPlugins||(c.preloadPlugins=[]);if(!Sa){Sa=!0;try{T=!0}catch(d){T=!1,console.log("warning: no blob constructor, cannot create blobs with mimetypes")}Ta="undefined"!=typeof MozBlobBuilder?MozBlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:T?null:console.log("warning: no BlobBuilder");
U="undefined"!=typeof window?window.URL?window.URL:window.webkitURL:void 0;c.f||"undefined"!==typeof U||(console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."),c.f=!0);c.preloadPlugins.push({canHandle:function(a){return!c.f&&/\.(jpg|jpeg|png|bmp)$/i.test(a)},handle:function(a,b,f,g){var d=null;if(T)try{d=new Blob([a],{type:Ua(b)}),d.size!==a.length&&(d=new Blob([(new Uint8Array(a)).buffer],{type:Ua(b)}))}catch(B){ha("Blob constructor present but fails: "+
B+"; falling back to blob builder")}d||(d=new Ta,d.append((new Uint8Array(a)).buffer),d=d.getBlob());var e=U.createObjectURL(d),l=new Image;l.onload=function(){assert(l.complete,"Image "+b+" could not be decoded");var d=document.createElement("canvas");d.width=l.width;d.height=l.height;d.getContext("2d").drawImage(l,0,0);c.preloadedImages[b]=d;U.revokeObjectURL(e);f&&f(a)};l.onerror=function(){console.log("Image "+e+" could not be decoded");g&&g()};l.src=e}});c.preloadPlugins.push({canHandle:function(a){return!c.C&&
a.substr(-4)in{".ogg":1,".wav":1,".mp3":1}},handle:function(a,b,f,g){function d(d){l||(l=!0,c.preloadedAudios[b]=d,f&&f(a))}function e(){l||(l=!0,c.preloadedAudios[b]=new Audio,g&&g())}var l=!1;if(T){try{var B=new Blob([a],{type:Ua(b)})}catch(u){return e()}B=U.createObjectURL(B);var n=new Audio;n.addEventListener("canplaythrough",function(){d(n)},!1);n.onerror=function(){if(!l){console.log("warning: browser could not fully decode audio "+b+", trying slower base64 approach");for(var e="",g=0,f=0,k=
0;k<a.length;k++)for(g=g<<8|a[k],f+=8;6<=f;){var m=g>>f-6&63;f-=6;e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[m]}2==f?(e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(g&3)<<4],e+="=="):4==f&&(e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(g&15)<<2],e+="=");n.src="data:audio/x-"+b.substr(-3)+";base64,"+e;d(n)}};n.src=B;Va(function(){d(n)})}else return e()}});var b=c.canvas;b&&(b.requestPointerLock=b.requestPointerLock||b.mozRequestPointerLock||
b.webkitRequestPointerLock||b.msRequestPointerLock||function(){},b.exitPointerLock=document.exitPointerLock||document.mozExitPointerLock||document.webkitExitPointerLock||document.msExitPointerLock||function(){},b.exitPointerLock=b.exitPointerLock.bind(document),document.addEventListener("pointerlockchange",a,!1),document.addEventListener("mozpointerlockchange",a,!1),document.addEventListener("webkitpointerlockchange",a,!1),document.addEventListener("mspointerlockchange",a,!1),c.elementPointerLock&&
b.addEventListener("click",function(a){!Pa&&c.canvas.requestPointerLock&&(c.canvas.requestPointerLock(),a.preventDefault())},!1))}}
function Wa(a,b,d,e){if(b&&c.b&&a==c.canvas)return c.b;if(b){var f={antialias:!1,alpha:!1};if(e)for(var g in e)f[g]=e[g];if(f=Xa(a,f))var k=Ya[f].GLctx}else k=a.getContext("2d");if(!k)return null;d&&(b||assert("undefined"===typeof GLctx,"cannot set in module if GLctx is used, but we are a non-GL context that would replace it"),c.b=k,b&&Za(f),c.F=b,Qa.forEach(function(a){a()}),Ra());return k}var $a=!1,ab=void 0,V=void 0;
function bb(a,b,d){function e(){Oa=!1;var a=f.parentNode;(document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===a?(f.exitFullscreen=document.exitFullscreen||document.cancelFullScreen||document.mozCancelFullScreen||document.msExitFullscreen||document.webkitCancelFullScreen||function(){},f.exitFullscreen=f.exitFullscreen.bind(document),ab&&f.requestPointerLock(),Oa=!0,V&&("undefined"!=typeof SDL&&
(C[SDL.screen>>2]=ra[SDL.screen>>2]|8388608),cb())):(a.parentNode.insertBefore(f,a),a.parentNode.removeChild(a),V&&("undefined"!=typeof SDL&&(C[SDL.screen>>2]=ra[SDL.screen>>2]&-8388609),cb()));if(c.onFullScreen)c.onFullScreen(Oa);if(c.onFullscreen)c.onFullscreen(Oa);db(f)}ab=a;V=b;eb=d;"undefined"===typeof ab&&(ab=!0);"undefined"===typeof V&&(V=!1);"undefined"===typeof eb&&(eb=null);var f=c.canvas;$a||($a=!0,document.addEventListener("fullscreenchange",e,!1),document.addEventListener("mozfullscreenchange",
e,!1),document.addEventListener("webkitfullscreenchange",e,!1),document.addEventListener("MSFullscreenChange",e,!1));var g=document.createElement("div");f.parentNode.insertBefore(g,f);g.appendChild(f);g.requestFullscreen=g.requestFullscreen||g.mozRequestFullScreen||g.msRequestFullscreen||(g.webkitRequestFullscreen?function(){g.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)}:null)||(g.webkitRequestFullScreen?function(){g.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)}:null);d?g.requestFullscreen({G:d}):
g.requestFullscreen()}function fb(a,b,d){c.printErr("Browser.requestFullScreen() is deprecated. Please call Browser.requestFullscreen instead.");fb=function(a,b,d){return bb(a,b,d)};return bb(a,b,d)}var W=0;function gb(a){var b=Date.now();if(0===W)W=b+1E3/60;else for(;b+2>=W;)W+=1E3/60;setTimeout(a,Math.max(W-b,0))}
function hb(a){"undefined"===typeof window?gb(a):(window.requestAnimationFrame||(window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||gb),window.requestAnimationFrame(a))}function Va(a){c.noExitRuntime=!0;setTimeout(function(){y||a()},1E4)}
function Ua(a){return{jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",bmp:"image/bmp",ogg:"audio/ogg",wav:"audio/wav",mp3:"audio/mpeg"}[a.substr(a.lastIndexOf(".")+1)]}var ib=[];function cb(){var a=c.canvas;ib.forEach(function(b){b(a.width,a.height)})}
function db(a,b,d){b&&d?(a.o=b,a.j=d):(b=a.o,d=a.j);var e=b,f=d;c.forcedAspectRatio&&0<c.forcedAspectRatio&&(e/f<c.forcedAspectRatio?e=Math.round(f*c.forcedAspectRatio):f=Math.round(e/c.forcedAspectRatio));if((document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===a.parentNode&&"undefined"!=typeof screen){var g=Math.min(screen.width/e,screen.height/f);e=Math.round(e*g);f=Math.round(f*g)}V?
(a.width!=e&&(a.width=e),a.height!=f&&(a.height=f),"undefined"!=typeof a.style&&(a.style.removeProperty("width"),a.style.removeProperty("height"))):(a.width!=b&&(a.width=b),a.height!=d&&(a.height=d),"undefined"!=typeof a.style&&(e!=b||f!=d?(a.style.setProperty("width",e+"px","important"),a.style.setProperty("height",f+"px","important")):(a.style.removeProperty("width"),a.style.removeProperty("height"))))}var Sa,T,Ta,U,eb;
function jb(a,b){R=a;Ia=b;if(Q)if(0==a)N=function(){var a=Math.max(0,Na+b-X())|0;setTimeout(S,a)},O="timeout";else if(1==a)N=function(){hb(S)},O="rAF";else if(2==a){if("undefined"===typeof setImmediate){var d=[];addEventListener("message",function(a){if("setimmediate"===a.data||"setimmediate"===a.data.target)a.stopPropagation(),d.shift()()},!0);setImmediate=function(a){d.push(a);r?(void 0===c.setImmediates&&(c.setImmediates=[]),c.setImmediates.push(a),postMessage({target:"setimmediate"})):postMessage("setimmediate",
"*")}}N=function(){setImmediate(S)};O="immediate"}}function X(){z()}
function kb(a,b,d,e,f){c.noExitRuntime=!0;assert(!Q,"emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");Q=a;Ha=e;var g="undefined"!==typeof e?function(){c.dynCall_vi(a,e)}:function(){c.dynCall_v(a)};var k=P;S=function(){if(!y)if(0<Ka.length){var a=Date.now(),b=Ka.shift();b.i(b.a);if(Ma){var d=Ma,e=0==d%1?d-1:Math.floor(d);Ma=b.s?e:(8*d+(e+.5))/9}console.log('main loop blocker "'+
b.name+'" took '+(Date.now()-a)+" ms");c.setStatus&&(a=c.statusMessage||"Please wait...",b=Ma,d=La.A,b?b<d?c.setStatus(a+" ("+(d-b)+"/"+d+")"):c.setStatus(a):c.setStatus(""));k<P||setTimeout(S,0)}else if(!(k<P))if(Ja=Ja+1|0,1==R&&1<Ia&&0!=Ja%Ia)N();else{0==R&&(Na=X());"timeout"===O&&c.b&&(c.printErr("Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!"),
O="");a:if(!(y||c.preMainLoop&&!1===c.preMainLoop())){try{g()}catch(u){if(u instanceof v)break a;u&&"object"===typeof u&&u.stack&&c.printErr("exception thrown: "+[u,u.stack]);throw u;}c.postMainLoop&&c.postMainLoop()}k<P||("object"===typeof SDL&&SDL.audio&&SDL.audio.m&&SDL.audio.m(),N())}};f||(b&&0<b?jb(0,1E3/b):jb(1,1),N());if(d)throw"SimulateInfiniteLoop";}var lb=1,mb=0,nb=[],pb=[],Ya=[],qb=null,rb={},sb={},tb=[];function Y(a){mb||(mb=a)}
function ub(){for(var a=Ya,b=lb++,d=a.length;d<b;d++)a[d]=null;return b}
function Xa(a,b){function d(a){e=a.statusMessage||e}"undefined"===typeof b.majorVersion&&"undefined"===typeof b.minorVersion&&(b.majorVersion="undefined"!==typeof WebGL2RenderingContext?2:1,b.minorVersion=0);var e="?";try{a.addEventListener("webglcontextcreationerror",d,!1);try{if(1==b.majorVersion&&0==b.minorVersion)var f=a.getContext("webgl",b)||a.getContext("experimental-webgl",b);else if(2==b.majorVersion&&0==b.minorVersion)f=a.getContext("webgl2",b);else throw"Unsupported WebGL context version "+
majorVersion+"."+minorVersion+"!";}finally{a.removeEventListener("webglcontextcreationerror",d,!1)}if(!f)throw":(";}catch(g){return c.print("Could not create canvas: "+[e,g,JSON.stringify(b)]),0}return f?vb(f,b):0}
function vb(a,b){function d(){var a=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return a?parseInt(a[2],10):!1}var e=ub(),f={handle:e,attributes:b,version:b.majorVersion,GLctx:a};f.D=2<=f.version&&(!1===d()||58<=d());a.canvas&&(a.canvas.c=f);Ya[e]=f;("undefined"===typeof b.enableExtensionsByDefault||b.enableExtensionsByDefault)&&wb(f);return e}function Za(a){a=Ya[a];if(!a)return!1;GLctx=c.b=a.GLctx;qb=a;return!0}
function wb(a){a||(a=qb);if(!a.l){a.l=!0;var b=a.GLctx;a.B=b.getParameter(b.MAX_VERTEX_ATTRIBS);if(2>a.version){var d=b.getExtension("ANGLE_instanced_arrays");d&&(b.vertexAttribDivisor=function(a,b){d.vertexAttribDivisorANGLE(a,b)},b.drawArraysInstanced=function(a,b,e,f){d.drawArraysInstancedANGLE(a,b,e,f)},b.drawElementsInstanced=function(a,b,e,f,g){d.drawElementsInstancedANGLE(a,b,e,f,g)});var e=b.getExtension("OES_vertex_array_object");e&&(b.createVertexArray=function(){return e.createVertexArrayOES()},
b.deleteVertexArray=function(a){e.deleteVertexArrayOES(a)},b.bindVertexArray=function(a){e.bindVertexArrayOES(a)},b.isVertexArray=function(a){return e.isVertexArrayOES(a)});var f=b.getExtension("WEBGL_draw_buffers");f&&(b.drawBuffers=function(a,b){f.drawBuffersWEBGL(a,b)})}b.w=b.getExtension("EXT_disjoint_timer_query");var g="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear WEBGL_compressed_texture_atc WEBKIT_WEBGL_compressed_texture_pvrtc WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_frag_depth EXT_sRGB WEBGL_draw_buffers WEBGL_shared_resources EXT_shader_texture_lod EXT_color_buffer_float".split(" ");
(a=b.getSupportedExtensions())&&0<a.length&&b.getSupportedExtensions().forEach(function(a){-1!=g.indexOf(a)&&b.getExtension(a)})}}
function xb(a,b){if(b){var d=void 0;switch(a){case 36346:d=1;break;case 36344:return;case 34814:case 36345:d=0;break;case 34466:d=GLctx.getParameter(34467).length;break;case 33309:if(2>GLctx.canvas.c.version){Y(1282);return}d=2*GLctx.getSupportedExtensions().length;break;case 33307:case 33308:if(2>GLctx.canvas.c.version){Y(1280);return}d=33307==a?3:0}if(void 0===d)switch(d=GLctx.getParameter(a),typeof d){case "number":break;case "boolean":d=d?1:0;break;case "string":Y(1280);return;case "object":if(null===
d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 35097:case 36389:case 34068:d=0;break;default:Y(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)C[b+4*a>>2]=d[a];return}if(d instanceof WebGLBuffer||d instanceof WebGLProgram||d instanceof WebGLFramebuffer||d instanceof WebGLRenderbuffer||d instanceof WebGLQuery||d instanceof WebGLSampler||d instanceof WebGLSync||
d instanceof WebGLTransformFeedback||d instanceof WebGLVertexArrayObject||d instanceof WebGLTexture)d=d.name|0;else{Y(1280);return}}break;default:Y(1280);return}C[b>>2]=d}else Y(1281)}(function(){if("undefined"!==typeof window){window.addEventListener("gamepadconnected",function(){++Fa});window.addEventListener("gamepaddisconnected",function(){--Fa});var a=navigator.getGamepads?navigator.getGamepads():navigator.webkitGetGamepads?navigator.webkitGetGamepads():null;a&&(Fa=a.length)}})();
c.requestFullScreen=function(a,b,d){c.printErr("Module.requestFullScreen is deprecated. Please call Module.requestFullscreen instead.");c.requestFullScreen=c.requestFullscreen;fb(a,b,d)};c.requestFullscreen=function(a,b,d){bb(a,b,d)};c.requestAnimationFrame=function(a){hb(a)};c.setCanvasSize=function(a,b,d){db(c.canvas,a,b);d||cb()};c.pauseMainLoop=function(){N=null;P++};c.resumeMainLoop=function(){P++;var a=R,b=Ia,d=Q;Q=null;kb(d,0,!1,Ha,!0);jb(a,b);N()};
c.getUserMedia=function(){window.getUserMedia||(window.getUserMedia=navigator.getUserMedia||navigator.mozGetUserMedia);window.getUserMedia(void 0)};c.createContext=function(a,b,d,e){return Wa(a,b,d,e)};
t?X=function(){var a=process.hrtime();return 1E3*a[0]+a[1]/1E6}:"undefined"!==typeof dateNow?X=dateNow:"object"===typeof self&&self.performance&&"function"===typeof self.performance.now?X=function(){return self.performance.now()}:"object"===typeof performance&&"function"===typeof performance.now?X=function(){return performance.now()}:X=Date.now;for(var GLctx,Z=0;256>Z;Z++);for(Z=0;32>Z;Z++)tb.push(Array(Z));G=da(4);ta=F=fa(w);ua=ta+xa;va=fa(ua);C[G>>2]=va;ea=!0;
function yb(a){var b=Array(na(a)+1);ma(a,b,0,b.length);return b}c.wasmTableSize=2;c.wasmMaxTableSize=2;c.g={};
c.h={abort:z,enlargeMemory:function(){wa()},getTotalMemory:function(){return H},abortOnCannotGrowMemory:wa,___setErrNo:function(a){c.___errno_location&&(C[c.___errno_location()>>2]=a);return a},_emscripten_set_canvas_element_size:function(a,b,d){a=a?Ga(a):c.canvas;if(!a)return-4;a.width=b;a.height=d;return 0},_emscripten_set_main_loop:kb,_emscripten_webgl_create_context:function(a,b){var d={};d.alpha=!!C[b>>2];d.depth=!!C[b+4>>2];d.stencil=!!C[b+8>>2];d.antialias=!!C[b+12>>2];d.premultipliedAlpha=
!!C[b+16>>2];d.preserveDrawingBuffer=!!C[b+20>>2];d.preferLowPowerToHighPerformance=!!C[b+24>>2];d.failIfMajorPerformanceCaveat=!!C[b+28>>2];d.majorVersion=C[b+32>>2];d.minorVersion=C[b+36>>2];d.explicitSwapControl=C[b+44>>2];a=(a=ka(a))&&"#canvas"!==a||!c.canvas?rb[a]||Ga(a):c.canvas.id?rb[c.canvas.id]||Ga(c.canvas.id):c.canvas;return a?d.explicitSwapControl?(console.error("emscripten_webgl_create_context failed: explicitSwapControl is not supported, please rebuild with -s OFFSCREENCANVAS_SUPPORT=1 to enable targeting the experimental OffscreenCanvas specification!"),
0):Xa(a,d):0},_emscripten_webgl_init_context_attributes:function(a){C[a>>2]=1;C[a+4>>2]=1;C[a+8>>2]=0;C[a+12>>2]=1;C[a+16>>2]=1;C[a+20>>2]=0;C[a+24>>2]=0;C[a+28>>2]=0;C[a+32>>2]=1;C[a+36>>2]=0;C[a+40>>2]=1;C[a+44>>2]=0},_emscripten_webgl_make_context_current:function(a){return Za(a)?0:-5},_glBindBuffer:function(a,b){var d=b?nb[b]:null;35051==a?GLctx.u=b:35052==a&&(GLctx.v=b);GLctx.bindBuffer(a,d)},_glBindFramebuffer:function(a,b){GLctx.bindFramebuffer(a,b?pb[b]:null)},_glBlendColor:function(a,b,d,
e){GLctx.blendColor(a,b,d,e)},_glBlendEquationSeparate:function(a,b){GLctx.blendEquationSeparate(a,b)},_glBlendFuncSeparate:function(a,b,d,e){GLctx.blendFuncSeparate(a,b,d,e)},_glClear:function(a){GLctx.clear(a)},_glClearColor:function(a,b,d,e){GLctx.clearColor(a,b,d,e)},_glClearDepthf:function(a){GLctx.clearDepth(a)},_glClearStencil:function(a){GLctx.clearStencil(a)},_glColorMask:function(a,b,d,e){GLctx.colorMask(!!a,!!b,!!d,!!e)},_glCullFace:function(a){GLctx.cullFace(a)},_glDepthFunc:function(a){GLctx.depthFunc(a)},
_glDepthMask:function(a){GLctx.depthMask(!!a)},_glDisable:function(a){GLctx.disable(a)},_glDisableVertexAttribArray:function(a){GLctx.disableVertexAttribArray(a)},_glEnable:function(a){GLctx.enable(a)},_glFrontFace:function(a){GLctx.frontFace(a)},_glGetIntegerv:function(a,b){xb(a,b)},_glGetString:function(a){if(sb[a])return sb[a];switch(a){case 7936:case 7937:case 37445:case 37446:var b=A(yb(GLctx.getParameter(a)));break;case 7938:b=GLctx.getParameter(GLctx.VERSION);b=2<=GLctx.canvas.c.version?"OpenGL ES 3.0 ("+
b+")":"OpenGL ES 2.0 ("+b+")";b=A(yb(b));break;case 7939:b=GLctx.getSupportedExtensions();for(var d=[],e=0;e<b.length;++e)d.push(b[e]),d.push("GL_"+b[e]);b=A(yb(d.join(" ")));break;case 35724:b=GLctx.getParameter(GLctx.SHADING_LANGUAGE_VERSION);d=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==d&&(3==d[1].length&&(d[1]+="0"),b="OpenGL ES GLSL ES "+d[1]+" ("+b+")");b=A(yb(b));break;default:return Y(1280),0}return sb[a]=b},_glPolygonOffset:function(a,b){GLctx.polygonOffset(a,b)},_glScissor:function(a,
b,d,e){GLctx.scissor(a,b,d,e)},_glStencilFunc:function(a,b,d){GLctx.stencilFunc(a,b,d)},_glStencilMask:function(a){GLctx.stencilMask(a)},_glStencilOp:function(a,b,d){GLctx.stencilOp(a,b,d)},_glViewport:function(a,b,d,e){GLctx.viewport(a,b,d,e)},DYNAMICTOP_PTR:G,STACKTOP:F};var zb=c.asm(c.g,c.h,buffer);c.asm=zb;c._main=function(){return c.asm._main.apply(null,arguments)};
var ia=c._malloc=function(){return c.asm._malloc.apply(null,arguments)},pa=c.stackAlloc=function(){return c.asm.stackAlloc.apply(null,arguments)};c.dynCall_v=function(){return c.asm.dynCall_v.apply(null,arguments)};c.asm=zb;function v(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}v.prototype=Error();v.prototype.constructor=v;L=function Ab(){c.calledRun||Bb();c.calledRun||(L=Ab)};
c.callMain=function(a){a=a||[];J||(J=!0,I(za));var b=a.length+1,d=pa(4*(b+1));C[d>>2]=oa(c.thisProgram);for(var e=1;e<b;e++)C[(d>>2)+e]=oa(a[e-1]);C[(d>>2)+b]=0;try{var f=c._main(b,d,0);Cb(f,!0)}catch(g){g instanceof v||("SimulateInfiniteLoop"==g?c.noExitRuntime=!0:((a=g)&&"object"===typeof g&&g.stack&&(a=[g,g.stack]),c.printErr("exception thrown: "+a),c.quit(1,g)))}finally{}};
function Bb(a){function b(){if(!c.calledRun&&(c.calledRun=!0,!y)){J||(J=!0,I(za));I(Aa);if(c.onRuntimeInitialized)c.onRuntimeInitialized();c._main&&Db&&c.callMain(a);if(c.postRun)for("function"==typeof c.postRun&&(c.postRun=[c.postRun]);c.postRun.length;){var b=c.postRun.shift();Ca.unshift(b)}I(Ca)}}a=a||c.arguments;if(!(0<K)){if(c.preRun)for("function"==typeof c.preRun&&(c.preRun=[c.preRun]);c.preRun.length;)Da();I(ya);0<K||c.calledRun||(c.setStatus?(c.setStatus("Running..."),setTimeout(function(){setTimeout(function(){c.setStatus("")},
1);b()},1)):b())}}c.run=Bb;function Cb(a,b){if(!b||!c.noExitRuntime||0!==a){if(!c.noExitRuntime&&(y=!0,F=void 0,I(Ba),c.onExit))c.onExit(a);t&&process.exit(a);c.quit(a,new v(a))}}c.exit=Cb;function z(a){if(c.onAbort)c.onAbort(a);void 0!==a?(c.print(a),c.printErr(a),a=JSON.stringify(a)):a="";y=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}c.abort=z;if(c.preInit)for("function"==typeof c.preInit&&(c.preInit=[c.preInit]);0<c.preInit.length;)c.preInit.pop()();var Db=!0;
c.noInitialRun&&(Db=!1);c.noExitRuntime=!0;Bb();
