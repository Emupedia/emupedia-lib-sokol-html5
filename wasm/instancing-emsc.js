var e;e||(e=typeof Module !== 'undefined' ? Module : {});var k={},l;for(l in e)e.hasOwnProperty(l)&&(k[l]=e[l]);e.arguments=[];e.thisProgram="./this.program";e.quit=function(a,b){throw b;};e.preRun=[];e.postRun=[];var n=!1,p=!1,q=!1,aa=!1;
if(e.ENVIRONMENT)if("WEB"===e.ENVIRONMENT)n=!0;else if("WORKER"===e.ENVIRONMENT)p=!0;else if("NODE"===e.ENVIRONMENT)q=!0;else if("SHELL"===e.ENVIRONMENT)aa=!0;else throw Error("Module['ENVIRONMENT'] value is not valid. must be one of: WEB|WORKER|NODE|SHELL.");else n="object"===typeof window,p="function"===typeof importScripts,q="object"===typeof process&&"function"===typeof require&&!n&&!p,aa=!n&&!q&&!p;
if(q){var ba,ca;e.read=function(a,b){ba||(ba=require("fs"));ca||(ca=require("path"));a=ca.normalize(a);a=ba.readFileSync(a);return b?a:a.toString()};e.readBinary=function(a){a=e.read(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a};1<process.argv.length&&(e.thisProgram=process.argv[1].replace(/\\/g,"/"));e.arguments=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=e);process.on("uncaughtException",function(a){if(!(a instanceof t))throw a;});process.on("unhandledRejection",
function(){process.exit(1)});e.inspect=function(){return"[Emscripten Module object]"}}else if(aa)"undefined"!=typeof read&&(e.read=function(a){return read(a)}),e.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?e.arguments=scriptArgs:"undefined"!=typeof arguments&&(e.arguments=arguments),"function"===typeof quit&&(e.quit=function(a){quit(a)});else if(n||p)e.read=function(a){var b=
new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},p&&(e.readBinary=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),e.readAsync=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)},e.setWindowTitle=function(a){document.title=a};
e.print="undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null;e.printErr="undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||e.print;e.print=e.print;e.printErr=e.printErr;for(l in k)k.hasOwnProperty(l)&&(e[l]=k[l]);k=void 0;function da(a){assert(!ea);var b=v;v=v+a+15&-16;return b}function fa(a){var b;b||(b=16);return Math.ceil(a/b)*b}function ha(a){ia||(ia={});ia[a]||(ia[a]=1,e.printErr(a))}var ia,x=0;
function assert(a,b){a||y("Assertion failed: "+b)}function ja(a){if("number"===typeof a){var b=!0;var c=a}else b=!1,c=a.length;var d=("function"===typeof ka?ka:da)(Math.max(c,1));if(b){a=d;assert(0==(d&3));for(b=d+(c&-4);a<b;a+=4)z[a>>2]=0;for(b=d+c;a<b;)la[a++>>0]=0;return d}a.subarray||a.slice?A.set(a,d):A.set(new Uint8Array(a),d);return d}
function C(a,b){if(0===b||!a)return"";for(var c=0,d,f=0;;){d=A[a+f>>0];c|=d;if(0==d&&!b)break;f++;if(b&&f==b)break}b||(b=f);d="";if(128>c){for(;0<b;)c=String.fromCharCode.apply(String,A.subarray(a,a+Math.min(b,1024))),d=d?d+c:c,a+=1024,b-=1024;return d}a:{b=A;for(c=a;b[c];)++c;if(16<c-a&&b.subarray&&ma)a=ma.decode(b.subarray(a,c));else for(c="";;){d=b[a++];if(!d){a=c;break a}if(d&128)if(f=b[a++]&63,192==(d&224))c+=String.fromCharCode((d&31)<<6|f);else{var g=b[a++]&63;if(224==(d&240))d=(d&15)<<12|
f<<6|g;else{var h=b[a++]&63;if(240==(d&248))d=(d&7)<<18|f<<12|g<<6|h;else{var r=b[a++]&63;if(248==(d&252))d=(d&3)<<24|f<<18|g<<12|h<<6|r;else{var m=b[a++]&63;d=(d&1)<<30|f<<24|g<<18|h<<12|r<<6|m}}}65536>d?c+=String.fromCharCode(d):(d-=65536,c+=String.fromCharCode(55296|d>>10,56320|d&1023))}else c+=String.fromCharCode(d)}}return a}var ma="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function na(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var g=0;g<a.length;++g){var h=a.charCodeAt(g);55296<=h&&57343>=h&&(h=65536+((h&1023)<<10)|a.charCodeAt(++g)&1023);if(127>=h){if(c>=d)break;b[c++]=h}else{if(2047>=h){if(c+1>=d)break;b[c++]=192|h>>6}else{if(65535>=h){if(c+2>=d)break;b[c++]=224|h>>12}else{if(2097151>=h){if(c+3>=d)break;b[c++]=240|h>>18}else{if(67108863>=h){if(c+4>=d)break;b[c++]=248|h>>24}else{if(c+5>=d)break;b[c++]=252|h>>30;b[c++]=128|h>>24&63}b[c++]=128|h>>18&63}b[c++]=128|
h>>12&63}b[c++]=128|h>>6&63}b[c++]=128|h&63}}b[c]=0;return c-f}function oa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:2097151>=d?b+4:67108863>=d?b+5:b+6}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function pa(a){var b=oa(a)+1,c=qa(b);na(a,la,c,b);return c}var buffer,la,A,ra,z,sa,D;
function ta(){e.HEAP8=la=new Int8Array(buffer);e.HEAP16=ra=new Int16Array(buffer);e.HEAP32=z=new Int32Array(buffer);e.HEAPU8=A=new Uint8Array(buffer);e.HEAPU16=new Uint16Array(buffer);e.HEAPU32=sa=new Uint32Array(buffer);e.HEAPF32=D=new Float32Array(buffer);e.HEAPF64=new Float64Array(buffer)}var ua,v,ea,va,wa,xa,ya,za;ua=v=va=wa=xa=ya=za=0;ea=!1;
function Aa(){y("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+E+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")}var Ba=e.TOTAL_STACK||5242880,E=e.TOTAL_MEMORY||134217728;E<Ba&&e.printErr("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+E+"! (TOTAL_STACK="+Ba+")");
e.buffer?buffer=e.buffer:("object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(e.wasmMemory=new WebAssembly.Memory({initial:E/65536,maximum:E/65536}),buffer=e.wasmMemory.buffer):buffer=new ArrayBuffer(E),e.buffer=buffer);ta();z[0]=1668509029;ra[1]=25459;if(115!==A[2]||99!==A[3])throw"Runtime error: expected the system to be little-endian!";
function F(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.s;"number"===typeof c?void 0===b.f?e.dynCall_v(c):e.dynCall_vi(c,b.f):c(void 0===b.f?null:b.f)}}}var Ca=[],Da=[],Ea=[],Fa=[],Ga=[],Ha=!1;function Ia(){var a=e.preRun.shift();Ca.unshift(a)}var G=0,Ja=null,H=null;e.preloadedImages={};e.preloadedAudios={};
function Ka(a){return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}
(function(){function a(){try{if(e.wasmBinary)return new Uint8Array(e.wasmBinary);if(e.readBinary)return e.readBinary(f);throw"on the web, we need the wasm binary to be preloaded and set on Module['wasmBinary']. emcc.py will do that for you when generating HTML (but not JS)";}catch(w){y(w)}}function b(){return e.wasmBinary||!n&&!p||"function"!==typeof fetch?new Promise(function(b){b(a())}):fetch(f,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+f+
"'";return a.arrayBuffer()}).catch(function(){return a()})}function c(a){function c(a){r=a.exports;if(r.memory){a=r.memory;var b=e.buffer;a.byteLength<b.byteLength&&e.printErr("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here");b=new Int8Array(b);(new Int8Array(a)).set(b);e.buffer=buffer=a;ta()}e.asm=r;e.usingWasm=!0;G--;e.monitorRunDependencies&&e.monitorRunDependencies(G);0==G&&(null!==Ja&&(clearInterval(Ja),Ja=null),H&&(a=H,H=null,a()))}
function d(a){c(a.instance)}function g(a){b().then(function(a){return WebAssembly.instantiate(a,h)}).then(a).catch(function(a){e.printErr("failed to asynchronously prepare wasm: "+a);y(a)})}if("object"!==typeof WebAssembly)return e.printErr("no native wasm support detected"),!1;if(!(e.wasmMemory instanceof WebAssembly.Memory))return e.printErr("no native wasm Memory in use"),!1;a.memory=e.wasmMemory;h.global={NaN:NaN,Infinity:Infinity};h["global.Math"]=Math;h.env=a;G++;e.monitorRunDependencies&&e.monitorRunDependencies(G);
if(e.instantiateWasm)try{return e.instantiateWasm(h,c)}catch(yb){return e.printErr("Module.instantiateWasm callback failed with error: "+yb),!1}e.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||Ka(f)||"function"!==typeof fetch?g(d):WebAssembly.instantiateStreaming(fetch(f,{credentials:"same-origin"}),h).then(d).catch(function(a){e.printErr("wasm streaming compile failed: "+a);e.printErr("falling back to ArrayBuffer instantiation");g(d)});return{}}var d="instancing-emsc.wast",f="instancing-emsc.wasm",
g="instancing-emsc.temp.asm.js";"function"===typeof e.locateFile&&(Ka(d)||(d=e.locateFile(d)),Ka(f)||(f=e.locateFile(f)),Ka(g)||(g=e.locateFile(g)));var h={global:null,env:null,asm2wasm:{"f64-rem":function(a,b){return a%b},"debugger":function(){debugger}},parent:e},r=null;e.asmPreload=e.asm;var m=e.reallocBuffer;e.reallocBuffer=function(a){if("asmjs"===u)var b=m(a);else a:{var c=e.usingWasm?65536:16777216;0<a%c&&(a+=c-a%c);c=e.buffer.byteLength;if(e.usingWasm)try{b=-1!==e.wasmMemory.grow((a-c)/65536)?
e.buffer=e.wasmMemory.buffer:null;break a}catch(Mb){b=null;break a}b=void 0}return b};var u="";e.asm=function(a,b){if(!b.table){a=e.wasmTableSize;void 0===a&&(a=1024);var d=e.wasmMaxTableSize;b.table="object"===typeof WebAssembly&&"function"===typeof WebAssembly.Table?void 0!==d?new WebAssembly.Table({initial:a,maximum:d,element:"anyfunc"}):new WebAssembly.Table({initial:a,element:"anyfunc"}):Array(a);e.wasmTable=b.table}b.memoryBase||(b.memoryBase=e.STATIC_BASE);b.tableBase||(b.tableBase=0);(b=c(b))||
y("no binaryen method succeeded. consider enabling more options, like interpreting, if you want that: https://github.com/kripken/emscripten/wiki/WebAssembly#binaryen-methods");return b}})();ua=1024;v=ua+12586080;Da.push();e.STATIC_BASE=ua;e.STATIC_BUMP=12586080;v+=16;var La=0;function Ma(a){return a?("number"==typeof a&&(a=C(a)),"#window"==a?window:"#document"==a?document:"#screen"==a?window.screen:"#canvas"==a?e.canvas:"string"==typeof a?document.getElementById(a):a):window}
var I=null,J="",K=0,L=null,Na=0,Oa=0,Pa=0,Qa=0,Ra=[],Sa={},Ta,Ua,M,Va=!1,Wa=!1,Xa=[];
function Ya(){function a(){Wa=document.pointerLockElement===e.canvas||document.mozPointerLockElement===e.canvas||document.webkitPointerLockElement===e.canvas||document.msPointerLockElement===e.canvas}e.preloadPlugins||(e.preloadPlugins=[]);if(!Za){Za=!0;try{N=!0}catch(c){N=!1,console.log("warning: no blob constructor, cannot create blobs with mimetypes")}$a="undefined"!=typeof MozBlobBuilder?MozBlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:N?null:console.log("warning: no BlobBuilder");
O="undefined"!=typeof window?window.URL?window.URL:window.webkitURL:void 0;e.j||"undefined"!==typeof O||(console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."),e.j=!0);e.preloadPlugins.push({canHandle:function(a){return!e.j&&/\.(jpg|jpeg|png|bmp)$/i.test(a)},handle:function(a,b,f,g){var c=null;if(N)try{c=new Blob([a],{type:ab(b)}),c.size!==a.length&&(c=new Blob([(new Uint8Array(a)).buffer],{type:ab(b)}))}catch(u){ha("Blob constructor present but fails: "+
u+"; falling back to blob builder")}c||(c=new $a,c.append((new Uint8Array(a)).buffer),c=c.getBlob());var d=O.createObjectURL(c),m=new Image;m.onload=function(){assert(m.complete,"Image "+b+" could not be decoded");var c=document.createElement("canvas");c.width=m.width;c.height=m.height;c.getContext("2d").drawImage(m,0,0);e.preloadedImages[b]=c;O.revokeObjectURL(d);f&&f(a)};m.onerror=function(){console.log("Image "+d+" could not be decoded");g&&g()};m.src=d}});e.preloadPlugins.push({canHandle:function(a){return!e.K&&
a.substr(-4)in{".ogg":1,".wav":1,".mp3":1}},handle:function(a,b,f,g){function c(c){m||(m=!0,e.preloadedAudios[b]=c,f&&f(a))}function d(){m||(m=!0,e.preloadedAudios[b]=new Audio,g&&g())}var m=!1;if(N){try{var u=new Blob([a],{type:ab(b)})}catch(B){return d()}u=O.createObjectURL(u);var w=new Audio;w.addEventListener("canplaythrough",function(){c(w)},!1);w.onerror=function(){if(!m){console.log("warning: browser could not fully decode audio "+b+", trying slower base64 approach");for(var d="",f=0,g=0,h=
0;h<a.length;h++)for(f=f<<8|a[h],g+=8;6<=g;){var r=f>>g-6&63;g-=6;d+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[r]}2==g?(d+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(f&3)<<4],d+="=="):4==g&&(d+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(f&15)<<2],d+="=");w.src="data:audio/x-"+b.substr(-3)+";base64,"+d;c(w)}};w.src=u;bb(function(){c(w)})}else return d()}});var b=e.canvas;b&&(b.requestPointerLock=b.requestPointerLock||b.mozRequestPointerLock||
b.webkitRequestPointerLock||b.msRequestPointerLock||function(){},b.exitPointerLock=document.exitPointerLock||document.mozExitPointerLock||document.webkitExitPointerLock||document.msExitPointerLock||function(){},b.exitPointerLock=b.exitPointerLock.bind(document),document.addEventListener("pointerlockchange",a,!1),document.addEventListener("mozpointerlockchange",a,!1),document.addEventListener("webkitpointerlockchange",a,!1),document.addEventListener("mspointerlockchange",a,!1),e.elementPointerLock&&
b.addEventListener("click",function(a){!Wa&&e.canvas.requestPointerLock&&(e.canvas.requestPointerLock(),a.preventDefault())},!1))}}
function cb(a,b,c,d){if(b&&e.g&&a==e.canvas)return e.g;if(b){var f={antialias:!1,alpha:!1};if(d)for(var g in d)f[g]=d[g];if(f=db(a,f))var h=eb[f].GLctx}else h=a.getContext("2d");if(!h)return null;c&&(b||assert("undefined"===typeof GLctx,"cannot set in module if GLctx is used, but we are a non-GL context that would replace it"),e.g=h,b&&fb(f),e.L=b,Xa.forEach(function(a){a()}),Ya());return h}var gb=!1,hb=void 0,P=void 0;
function ib(a,b,c){function d(){Va=!1;var a=f.parentNode;(document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===a?(f.exitFullscreen=document.exitFullscreen||document.cancelFullScreen||document.mozCancelFullScreen||document.msExitFullscreen||document.webkitCancelFullScreen||function(){},f.exitFullscreen=f.exitFullscreen.bind(document),hb&&f.requestPointerLock(),Va=!0,P&&("undefined"!=typeof SDL&&
(z[SDL.screen>>2]=sa[SDL.screen>>2]|8388608),jb())):(a.parentNode.insertBefore(f,a),a.parentNode.removeChild(a),P&&("undefined"!=typeof SDL&&(z[SDL.screen>>2]=sa[SDL.screen>>2]&-8388609),jb()));if(e.onFullScreen)e.onFullScreen(Va);if(e.onFullscreen)e.onFullscreen(Va);kb(f)}hb=a;P=b;lb=c;"undefined"===typeof hb&&(hb=!0);"undefined"===typeof P&&(P=!1);"undefined"===typeof lb&&(lb=null);var f=e.canvas;gb||(gb=!0,document.addEventListener("fullscreenchange",d,!1),document.addEventListener("mozfullscreenchange",
d,!1),document.addEventListener("webkitfullscreenchange",d,!1),document.addEventListener("MSFullscreenChange",d,!1));var g=document.createElement("div");f.parentNode.insertBefore(g,f);g.appendChild(f);g.requestFullscreen=g.requestFullscreen||g.mozRequestFullScreen||g.msRequestFullscreen||(g.webkitRequestFullscreen?function(){g.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)}:null)||(g.webkitRequestFullScreen?function(){g.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)}:null);c?g.requestFullscreen({M:c}):
g.requestFullscreen()}function mb(a,b,c){e.printErr("Browser.requestFullScreen() is deprecated. Please call Browser.requestFullscreen instead.");mb=function(a,b,c){return ib(a,b,c)};return ib(a,b,c)}var nb=0;function ob(a){var b=Date.now();if(0===nb)nb=b+1E3/60;else for(;b+2>=nb;)nb+=1E3/60;setTimeout(a,Math.max(nb-b,0))}
function pb(a){"undefined"===typeof window?ob(a):(window.requestAnimationFrame||(window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||ob),window.requestAnimationFrame(a))}function bb(a){e.noExitRuntime=!0;setTimeout(function(){x||a()},1E4)}
function ab(a){return{jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",bmp:"image/bmp",ogg:"audio/ogg",wav:"audio/wav",mp3:"audio/mpeg"}[a.substr(a.lastIndexOf(".")+1)]}var qb=[];function jb(){var a=e.canvas;qb.forEach(function(b){b(a.width,a.height)})}
function kb(a,b,c){b&&c?(a.A=b,a.u=c):(b=a.A,c=a.u);var d=b,f=c;e.forcedAspectRatio&&0<e.forcedAspectRatio&&(d/f<e.forcedAspectRatio?d=Math.round(f*e.forcedAspectRatio):f=Math.round(d/e.forcedAspectRatio));if((document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===a.parentNode&&"undefined"!=typeof screen){var g=Math.min(screen.width/d,screen.height/f);d=Math.round(d*g);f=Math.round(f*g)}P?
(a.width!=d&&(a.width=d),a.height!=f&&(a.height=f),"undefined"!=typeof a.style&&(a.style.removeProperty("width"),a.style.removeProperty("height"))):(a.width!=b&&(a.width=b),a.height!=c&&(a.height=c),"undefined"!=typeof a.style&&(d!=b||f!=c?(a.style.setProperty("width",d+"px","important"),a.style.setProperty("height",f+"px","important")):(a.style.removeProperty("width"),a.style.removeProperty("height"))))}var Za,N,$a,O,lb;
function rb(a,b){Oa=a;Pa=b;if(L)if(0==a)I=function(){var a=Math.max(0,Ua+b-Q())|0;setTimeout(M,a)},J="timeout";else if(1==a)I=function(){pb(M)},J="rAF";else if(2==a){if("undefined"===typeof setImmediate){var c=[];addEventListener("message",function(a){if("setimmediate"===a.data||"setimmediate"===a.data.target)a.stopPropagation(),c.shift()()},!0);setImmediate=function(a){c.push(a);p?(void 0===e.setImmediates&&(e.setImmediates=[]),e.setImmediates.push(a),postMessage({target:"setimmediate"})):postMessage("setimmediate",
"*")}}I=function(){setImmediate(M)};J="immediate"}}function Q(){y()}
function sb(a,b,c,d,f){e.noExitRuntime=!0;assert(!L,"emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");L=a;Na=d;var g="undefined"!==typeof d?function(){e.dynCall_vi(a,d)}:function(){e.dynCall_v(a)};var h=K;M=function(){if(!x)if(0<Ra.length){var a=Date.now(),b=Ra.shift();b.s(b.f);if(Ta){var c=Ta,d=0==c%1?c-1:Math.floor(c);Ta=b.C?d:(8*c+(d+.5))/9}console.log('main loop blocker "'+
b.name+'" took '+(Date.now()-a)+" ms");e.setStatus&&(a=e.statusMessage||"Please wait...",b=Ta,c=Sa.H,b?b<c?e.setStatus(a+" ("+(c-b)+"/"+c+")"):e.setStatus(a):e.setStatus(""));h<K||setTimeout(M,0)}else if(!(h<K))if(Qa=Qa+1|0,1==Oa&&1<Pa&&0!=Qa%Pa)I();else{0==Oa&&(Ua=Q());"timeout"===J&&e.g&&(e.printErr("Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!"),
J="");a:if(!(x||e.preMainLoop&&!1===e.preMainLoop())){try{g()}catch(B){if(B instanceof t)break a;B&&"object"===typeof B&&B.stack&&e.printErr("exception thrown: "+[B,B.stack]);throw B;}e.postMainLoop&&e.postMainLoop()}h<K||("object"===typeof SDL&&SDL.audio&&SDL.audio.w&&SDL.audio.w(),I())}};f||(b&&0<b?rb(0,1E3/b):rb(1,1),I());if(c)throw"SimulateInfiniteLoop";}var tb=1,ub=0,vb=[],R=[],wb=[],xb=[],S=[],T=[],eb=[],U=null,zb={},V={},Ab={},Bb=[];function W(a){ub||(ub=a)}
function X(a){for(var b=tb++,c=a.length;c<b;c++)a[c]=null;return b}var Cb=null,Y=[0];
function db(a,b){function c(a){d=a.statusMessage||d}"undefined"===typeof b.majorVersion&&"undefined"===typeof b.minorVersion&&(b.majorVersion="undefined"!==typeof WebGL2RenderingContext?2:1,b.minorVersion=0);var d="?";try{a.addEventListener("webglcontextcreationerror",c,!1);try{if(1==b.majorVersion&&0==b.minorVersion)var f=a.getContext("webgl",b)||a.getContext("experimental-webgl",b);else if(2==b.majorVersion&&0==b.minorVersion)f=a.getContext("webgl2",b);else throw"Unsupported WebGL context version "+
majorVersion+"."+minorVersion+"!";}finally{a.removeEventListener("webglcontextcreationerror",c,!1)}if(!f)throw":(";}catch(g){return e.print("Could not create canvas: "+[d,g,JSON.stringify(b)]),0}return f?Db(f,b):0}
function Db(a,b){function c(){var a=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return a?parseInt(a[2],10):!1}var d=X(eb),f={handle:d,attributes:b,version:b.majorVersion,GLctx:a};f.a=2<=f.version&&(!1===c()||58<=c());a.canvas&&(a.canvas.h=f);eb[d]=f;("undefined"===typeof b.enableExtensionsByDefault||b.enableExtensionsByDefault)&&Eb(f);return d}function fb(a){a=eb[a];if(!a)return!1;GLctx=e.g=a.GLctx;U=a;return!0}
function Eb(a){a||(a=U);if(!a.v){a.v=!0;var b=a.GLctx;a.J=b.getParameter(b.MAX_VERTEX_ATTRIBS);if(2>a.version){var c=b.getExtension("ANGLE_instanced_arrays");c&&(b.vertexAttribDivisor=function(a,b){c.vertexAttribDivisorANGLE(a,b)},b.drawArraysInstanced=function(a,b,d,f){c.drawArraysInstancedANGLE(a,b,d,f)},b.drawElementsInstanced=function(a,b,d,f,g){c.drawElementsInstancedANGLE(a,b,d,f,g)});var d=b.getExtension("OES_vertex_array_object");d&&(b.createVertexArray=function(){return d.createVertexArrayOES()},
b.deleteVertexArray=function(a){d.deleteVertexArrayOES(a)},b.bindVertexArray=function(a){d.bindVertexArrayOES(a)},b.isVertexArray=function(a){return d.isVertexArrayOES(a)});var f=b.getExtension("WEBGL_draw_buffers");f&&(b.drawBuffers=function(a,b){f.drawBuffersWEBGL(a,b)})}b.G=b.getExtension("EXT_disjoint_timer_query");var g="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear WEBGL_compressed_texture_atc WEBKIT_WEBGL_compressed_texture_pvrtc WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_frag_depth EXT_sRGB WEBGL_draw_buffers WEBGL_shared_resources EXT_shader_texture_lod EXT_color_buffer_float".split(" ");
(a=b.getSupportedExtensions())&&0<a.length&&b.getSupportedExtensions().forEach(function(a){-1!=g.indexOf(a)&&b.getExtension(a)})}}function _glDrawArrays(a,b,c){GLctx.drawArrays(a,b,c)}function _glDrawElements(a,b,c,d){GLctx.drawElements(a,b,c,d)}
function Fb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:c=GLctx.getParameter(34467).length;break;case 33309:if(2>GLctx.canvas.h.version){W(1282);return}c=2*GLctx.getSupportedExtensions().length;break;case 33307:case 33308:if(2>GLctx.canvas.h.version){W(1280);return}c=33307==a?3:0}if(void 0===c)switch(c=GLctx.getParameter(a),typeof c){case "number":break;case "boolean":c=c?1:0;break;case "string":W(1280);return;case "object":if(null===
c)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 35097:case 36389:case 34068:c=0;break;default:W(1280);return}else{if(c instanceof Float32Array||c instanceof Uint32Array||c instanceof Int32Array||c instanceof Array){for(a=0;a<c.length;++a)z[b+4*a>>2]=c[a];return}if(c instanceof WebGLBuffer||c instanceof WebGLProgram||c instanceof WebGLFramebuffer||c instanceof WebGLRenderbuffer||c instanceof WebGLQuery||c instanceof WebGLSampler||c instanceof WebGLSync||
c instanceof WebGLTransformFeedback||c instanceof WebGLVertexArrayObject||c instanceof WebGLTexture)c=c.name|0;else{W(1280);return}}break;default:W(1280);return}z[b>>2]=c}else W(1281)}(function(){if("undefined"!==typeof window){window.addEventListener("gamepadconnected",function(){++La});window.addEventListener("gamepaddisconnected",function(){--La});var a=navigator.getGamepads?navigator.getGamepads():navigator.webkitGetGamepads?navigator.webkitGetGamepads():null;a&&(La=a.length)}})();
e.requestFullScreen=function(a,b,c){e.printErr("Module.requestFullScreen is deprecated. Please call Module.requestFullscreen instead.");e.requestFullScreen=e.requestFullscreen;mb(a,b,c)};e.requestFullscreen=function(a,b,c){ib(a,b,c)};e.requestAnimationFrame=function(a){pb(a)};e.setCanvasSize=function(a,b,c){kb(e.canvas,a,b);c||jb()};e.pauseMainLoop=function(){I=null;K++};e.resumeMainLoop=function(){K++;var a=Oa,b=Pa,c=L;L=null;sb(c,0,!1,Na,!0);rb(a,b);I()};
e.getUserMedia=function(){window.getUserMedia||(window.getUserMedia=navigator.getUserMedia||navigator.mozGetUserMedia);window.getUserMedia(void 0)};e.createContext=function(a,b,c,d){return cb(a,b,c,d)};
q?Q=function(){var a=process.hrtime();return 1E3*a[0]+a[1]/1E6}:"undefined"!==typeof dateNow?Q=dateNow:"object"===typeof self&&self.performance&&"function"===typeof self.performance.now?Q=function(){return self.performance.now()}:"object"===typeof performance&&"function"===typeof performance.now?Q=function(){return performance.now()}:Q=Date.now;var GLctx;Cb=new Float32Array(256);for(var Z=0;256>Z;Z++)Y[Z]=Cb.subarray(0,Z+1);for(Z=0;32>Z;Z++)Bb.push(Array(Z));za=da(4);va=wa=fa(v);xa=va+Ba;ya=fa(xa);
z[za>>2]=ya;ea=!0;function Gb(a){var b=Array(oa(a)+1);na(a,b,0,b.length);return b}e.wasmTableSize=2;e.wasmMaxTableSize=2;e.m={};
e.o={abort:y,enlargeMemory:function(){Aa()},getTotalMemory:function(){return E},abortOnCannotGrowMemory:Aa,___setErrNo:function(a){e.___errno_location&&(z[e.___errno_location()>>2]=a);return a},_emscripten_set_canvas_element_size:function(a,b,c){a=a?Ma(a):e.canvas;if(!a)return-4;a.width=b;a.height=c;return 0},_emscripten_set_main_loop:sb,_emscripten_webgl_create_context:function(a,b){var c={};c.alpha=!!z[b>>2];c.depth=!!z[b+4>>2];c.stencil=!!z[b+8>>2];c.antialias=!!z[b+12>>2];c.premultipliedAlpha=
!!z[b+16>>2];c.preserveDrawingBuffer=!!z[b+20>>2];c.preferLowPowerToHighPerformance=!!z[b+24>>2];c.failIfMajorPerformanceCaveat=!!z[b+28>>2];c.majorVersion=z[b+32>>2];c.minorVersion=z[b+36>>2];c.explicitSwapControl=z[b+44>>2];a=(a=C(a))&&"#canvas"!==a||!e.canvas?zb[a]||Ma(a):e.canvas.id?zb[e.canvas.id]||Ma(e.canvas.id):e.canvas;return a?c.explicitSwapControl?(console.error("emscripten_webgl_create_context failed: explicitSwapControl is not supported, please rebuild with -s OFFSCREENCANVAS_SUPPORT=1 to enable targeting the experimental OffscreenCanvas specification!"),
0):db(a,c):0},_emscripten_webgl_init_context_attributes:function(a){z[a>>2]=1;z[a+4>>2]=1;z[a+8>>2]=0;z[a+12>>2]=1;z[a+16>>2]=1;z[a+20>>2]=0;z[a+24>>2]=0;z[a+28>>2]=0;z[a+32>>2]=1;z[a+36>>2]=0;z[a+40>>2]=1;z[a+44>>2]=0},_emscripten_webgl_make_context_current:function(a){return fb(a)?0:-5},_glActiveTexture:function(a){GLctx.activeTexture(a)},_glAttachShader:function(a,b){GLctx.attachShader(R[a],T[b])},_glBindBuffer:function(a,b){var c=b?vb[b]:null;35051==a?GLctx.D=b:35052==a&&(GLctx.F=b);GLctx.bindBuffer(a,
c)},_glBindFramebuffer:function(a,b){GLctx.bindFramebuffer(a,b?wb[b]:null)},_glBindTexture:function(a,b){GLctx.bindTexture(a,b?xb[b]:null)},_glBlendColor:function(a,b,c,d){GLctx.blendColor(a,b,c,d)},_glBlendEquationSeparate:function(a,b){GLctx.blendEquationSeparate(a,b)},_glBlendFuncSeparate:function(a,b,c,d){GLctx.blendFuncSeparate(a,b,c,d)},_glBufferData:function(a,b,c,d){c?U.a?GLctx.bufferData(a,A,d,c,b):GLctx.bufferData(a,A.subarray(c,c+b),d):GLctx.bufferData(a,b,d)},_glBufferSubData:function(a,
b,c,d){U.a?GLctx.bufferSubData(a,b,A,d,c):GLctx.bufferSubData(a,b,A.subarray(d,d+c))},_glClear:function(a){GLctx.clear(a)},_glClearColor:function(a,b,c,d){GLctx.clearColor(a,b,c,d)},_glClearDepthf:function(a){GLctx.clearDepth(a)},_glClearStencil:function(a){GLctx.clearStencil(a)},_glColorMask:function(a,b,c,d){GLctx.colorMask(!!a,!!b,!!c,!!d)},_glCompileShader:function(a){GLctx.compileShader(T[a])},_glCreateProgram:function(){var a=X(R),b=GLctx.createProgram();b.name=a;R[a]=b;return a},_glCreateShader:function(a){var b=
X(T);T[b]=GLctx.createShader(a);return b},_glCullFace:function(a){GLctx.cullFace(a)},_glDeleteProgram:function(a){if(a){var b=R[a];b?(GLctx.deleteProgram(b),b.name=0,R[a]=null,V[a]=null):W(1281)}},_glDeleteShader:function(a){if(a){var b=T[a];b?(GLctx.deleteShader(b),T[a]=null):W(1281)}},_glDepthFunc:function(a){GLctx.depthFunc(a)},_glDepthMask:function(a){GLctx.depthMask(!!a)},_glDisable:function(a){GLctx.disable(a)},_glDisableVertexAttribArray:function(a){GLctx.disableVertexAttribArray(a)},_glDrawArrays:_glDrawArrays,
_glDrawArraysInstancedEXT:function(a,b,c,d){GLctx.drawArraysInstanced(a,b,c,d)},_glDrawElements:_glDrawElements,_glDrawElementsInstancedEXT:function(a,b,c,d,f){GLctx.drawElementsInstanced(a,b,c,d,f)},_glEnable:function(a){GLctx.enable(a)},_glEnableVertexAttribArray:function(a){GLctx.enableVertexAttribArray(a)},_glFrontFace:function(a){GLctx.frontFace(a)},_glGenBuffers:function(a,b){for(var c=0;c<a;c++){var d=GLctx.createBuffer();if(!d){for(W(1282);c<a;)z[b+4*c++>>2]=0;break}var f=X(vb);d.name=f;vb[f]=
d;z[b+4*c>>2]=f}},_glGetAttribLocation:function(a,b){a=R[a];b=C(b);return GLctx.getAttribLocation(a,b)},_glGetIntegerv:function(a,b){Fb(a,b)},_glGetProgramInfoLog:function(a,b,c,d){a=GLctx.getProgramInfoLog(R[a]);null===a&&(a="(unknown error)");0<b&&d?(b=na(a,A,d,b),c&&(z[c>>2]=b)):c&&(z[c>>2]=0)},_glGetProgramiv:function(a,b,c){if(c)if(a>=tb)W(1281);else{var d=V[a];if(d)if(35716==b)a=GLctx.getProgramInfoLog(R[a]),null===a&&(a="(unknown error)"),z[c>>2]=a.length+1;else if(35719==b)z[c>>2]=d.i;else if(35722==
b){if(-1==d.b){a=R[a];var f=GLctx.getProgramParameter(a,GLctx.ACTIVE_ATTRIBUTES);for(b=d.b=0;b<f;++b)d.b=Math.max(d.b,GLctx.getActiveAttrib(a,b).name.length+1)}z[c>>2]=d.b}else if(35381==b){if(-1==d.c)for(a=R[a],f=GLctx.getProgramParameter(a,GLctx.B),b=d.c=0;b<f;++b){var g=GLctx.I(a,b);d.c=Math.max(d.c,g.length+1)}z[c>>2]=d.c}else z[c>>2]=GLctx.getProgramParameter(R[a],b);else W(1282)}else W(1281)},_glGetShaderInfoLog:function(a,b,c,d){a=GLctx.getShaderInfoLog(T[a]);null===a&&(a="(unknown error)");
0<b&&d?(b=na(a,A,d,b),c&&(z[c>>2]=b)):c&&(z[c>>2]=0)},_glGetShaderiv:function(a,b,c){c?35716==b?(a=GLctx.getShaderInfoLog(T[a]),null===a&&(a="(unknown error)"),z[c>>2]=a.length+1):35720==b?(a=GLctx.getShaderSource(T[a]),z[c>>2]=null===a||0==a.length?0:a.length+1):z[c>>2]=GLctx.getShaderParameter(T[a],b):W(1281)},_glGetString:function(a){if(Ab[a])return Ab[a];switch(a){case 7936:case 7937:case 37445:case 37446:var b=ja(Gb(GLctx.getParameter(a)));break;case 7938:b=GLctx.getParameter(GLctx.VERSION);
b=2<=GLctx.canvas.h.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=ja(Gb(b));break;case 7939:b=GLctx.getSupportedExtensions();for(var c=[],d=0;d<b.length;++d)c.push(b[d]),c.push("GL_"+b[d]);b=ja(Gb(c.join(" ")));break;case 35724:b=GLctx.getParameter(GLctx.SHADING_LANGUAGE_VERSION);c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=ja(Gb(b));break;default:return W(1280),0}return Ab[a]=b},_glGetUniformLocation:function(a,
b){b=C(b);var c=0;if(-1!==b.indexOf("]",b.length-1)){var d=b.lastIndexOf("["),f=b.slice(d+1,-1);if(0<f.length&&(c=parseInt(f),0>c))return-1;b=b.slice(0,d)}a=V[a];return a?(b=a.l[b])&&c<b[0]?b[1]+c:-1:-1},_glLinkProgram:function(a){GLctx.linkProgram(R[a]);V[a]=null;var b=R[a];V[a]={l:{},i:0,b:-1,c:-1};a=V[a];for(var c=a.l,d=GLctx.getProgramParameter(b,GLctx.ACTIVE_UNIFORMS),f=0;f<d;++f){var g=GLctx.getActiveUniform(b,f),h=g.name;a.i=Math.max(a.i,h.length+1);-1!==h.indexOf("]",h.length-1)&&(h=h.slice(0,
h.lastIndexOf("[")));var r=GLctx.getUniformLocation(b,h);if(null!=r){var m=X(S);c[h]=[g.size,m];S[m]=r;for(var u=1;u<g.size;++u)r=GLctx.getUniformLocation(b,h+"["+u+"]"),m=X(S),S[m]=r}}},_glPolygonOffset:function(a,b){GLctx.polygonOffset(a,b)},_glScissor:function(a,b,c,d){GLctx.scissor(a,b,c,d)},_glShaderSource:function(a,b,c,d){for(var f="",g=0;g<b;++g){if(d){var h=z[d+4*g>>2];h=0>h?C(z[c+4*g>>2]):C(z[c+4*g>>2],h)}else h=C(z[c+4*g>>2]);f+=h}GLctx.shaderSource(T[a],f)},_glStencilFunc:function(a,b,
c){GLctx.stencilFunc(a,b,c)},_glStencilFuncSeparate:function(a,b,c,d){GLctx.stencilFuncSeparate(a,b,c,d)},_glStencilMask:function(a){GLctx.stencilMask(a)},_glStencilOp:function(a,b,c){GLctx.stencilOp(a,b,c)},_glStencilOpSeparate:function(a,b,c,d){GLctx.stencilOpSeparate(a,b,c,d)},_glUniform1fv:function(a,b,c){if(U.a)GLctx.uniform1fv(S[a],D,c>>2,b);else{if(256>=b){var d=Y[b-1];for(var f=0;f<b;++f)d[f]=D[c+4*f>>2]}else d=D.subarray(c>>2,c+4*b>>2);GLctx.uniform1fv(S[a],d)}},_glUniform1i:function(a,b){GLctx.uniform1i(S[a],
b)},_glUniform2fv:function(a,b,c){if(U.a)GLctx.uniform2fv(S[a],D,c>>2,2*b);else{if(256>=2*b){var d=Y[2*b-1];for(var f=0;f<2*b;f+=2)d[f]=D[c+4*f>>2],d[f+1]=D[c+(4*f+4)>>2]}else d=D.subarray(c>>2,c+8*b>>2);GLctx.uniform2fv(S[a],d)}},_glUniform3fv:function(a,b,c){if(U.a)GLctx.uniform3fv(S[a],D,c>>2,3*b);else{if(256>=3*b){var d=Y[3*b-1];for(var f=0;f<3*b;f+=3)d[f]=D[c+4*f>>2],d[f+1]=D[c+(4*f+4)>>2],d[f+2]=D[c+(4*f+8)>>2]}else d=D.subarray(c>>2,c+12*b>>2);GLctx.uniform3fv(S[a],d)}},_glUniform4fv:function(a,
b,c){if(U.a)GLctx.uniform4fv(S[a],D,c>>2,4*b);else{if(256>=4*b){var d=Y[4*b-1];for(var f=0;f<4*b;f+=4)d[f]=D[c+4*f>>2],d[f+1]=D[c+(4*f+4)>>2],d[f+2]=D[c+(4*f+8)>>2],d[f+3]=D[c+(4*f+12)>>2]}else d=D.subarray(c>>2,c+16*b>>2);GLctx.uniform4fv(S[a],d)}},_glUniformMatrix4fv:function(a,b,c,d){if(U.a)GLctx.uniformMatrix4fv(S[a],!!c,D,d>>2,16*b);else{if(256>=16*b){var f=Y[16*b-1];for(var g=0;g<16*b;g+=16)f[g]=D[d+4*g>>2],f[g+1]=D[d+(4*g+4)>>2],f[g+2]=D[d+(4*g+8)>>2],f[g+3]=D[d+(4*g+12)>>2],f[g+4]=D[d+(4*
g+16)>>2],f[g+5]=D[d+(4*g+20)>>2],f[g+6]=D[d+(4*g+24)>>2],f[g+7]=D[d+(4*g+28)>>2],f[g+8]=D[d+(4*g+32)>>2],f[g+9]=D[d+(4*g+36)>>2],f[g+10]=D[d+(4*g+40)>>2],f[g+11]=D[d+(4*g+44)>>2],f[g+12]=D[d+(4*g+48)>>2],f[g+13]=D[d+(4*g+52)>>2],f[g+14]=D[d+(4*g+56)>>2],f[g+15]=D[d+(4*g+60)>>2]}else f=D.subarray(d>>2,d+64*b>>2);GLctx.uniformMatrix4fv(S[a],!!c,f)}},_glUseProgram:function(a){GLctx.useProgram(a?R[a]:null)},_glVertexAttribDivisorEXT:function(a,b){GLctx.vertexAttribDivisor(a,b)},_glVertexAttribPointer:function(a,
b,c,d,f,g){GLctx.vertexAttribPointer(a,b,c,!!d,f,g)},_glViewport:function(a,b,c,d){GLctx.viewport(a,b,c,d)},DYNAMICTOP_PTR:za,STACKTOP:wa};var Hb=e.asm(e.m,e.o,buffer);e.asm=Hb;e._main=function(){return e.asm._main.apply(null,arguments)};var ka=e._malloc=function(){return e.asm._malloc.apply(null,arguments)},qa=e.stackAlloc=function(){return e.asm.stackAlloc.apply(null,arguments)};e.dynCall_v=function(){return e.asm.dynCall_v.apply(null,arguments)};e.asm=Hb;
function t(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}t.prototype=Error();t.prototype.constructor=t;H=function Ib(){e.calledRun||Jb();e.calledRun||(H=Ib)};
e.callMain=function(a){a=a||[];Ha||(Ha=!0,F(Da));var b=a.length+1,c=qa(4*(b+1));z[c>>2]=pa(e.thisProgram);for(var d=1;d<b;d++)z[(c>>2)+d]=pa(a[d-1]);z[(c>>2)+b]=0;try{var f=e._main(b,c,0);Kb(f,!0)}catch(g){g instanceof t||("SimulateInfiniteLoop"==g?e.noExitRuntime=!0:((a=g)&&"object"===typeof g&&g.stack&&(a=[g,g.stack]),e.printErr("exception thrown: "+a),e.quit(1,g)))}finally{}};
function Jb(a){function b(){if(!e.calledRun&&(e.calledRun=!0,!x)){Ha||(Ha=!0,F(Da));F(Ea);if(e.onRuntimeInitialized)e.onRuntimeInitialized();e._main&&Lb&&e.callMain(a);if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var b=e.postRun.shift();Ga.unshift(b)}F(Ga)}}a=a||e.arguments;if(!(0<G)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ia();F(Ca);0<G||e.calledRun||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},
1);b()},1)):b())}}e.run=Jb;function Kb(a,b){if(!b||!e.noExitRuntime||0!==a){if(!e.noExitRuntime&&(x=!0,wa=void 0,F(Fa),e.onExit))e.onExit(a);q&&process.exit(a);e.quit(a,new t(a))}}e.exit=Kb;function y(a){if(e.onAbort)e.onAbort(a);void 0!==a?(e.print(a),e.printErr(a),a=JSON.stringify(a)):a="";x=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}e.abort=y;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();var Lb=!0;
e.noInitialRun&&(Lb=!1);e.noExitRuntime=!0;Jb();
