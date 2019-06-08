var f;f||(f=typeof Module !== 'undefined' ? Module : {});var g={},h;for(h in f)f.hasOwnProperty(h)&&(g[h]=f[h]);f.arguments=[];f.thisProgram="./this.program";f.quit=function(a,b){throw b;};f.preRun=[];f.postRun=[];var m=!1,q=!1,aa=!1,ba=!1;m="object"===typeof window;q="function"===typeof importScripts;aa="object"===typeof process&&"function"===typeof require&&!m&&!q;ba=!m&&!aa&&!q;var r="";
if(aa){r=__dirname+"/";var ca,da;f.read=function(a,b){ca||(ca=require("fs"));da||(da=require("path"));a=da.normalize(a);a=ca.readFileSync(a);return b?a:a.toString()};f.readBinary=function(a){a=f.read(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||t("Assertion failed: undefined");return a};1<process.argv.length&&(f.thisProgram=process.argv[1].replace(/\\/g,"/"));f.arguments=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=f);process.on("uncaughtException",function(a){if(!(a instanceof
u))throw a;});process.on("unhandledRejection",t);f.quit=function(a){process.exit(a)};f.inspect=function(){return"[Emscripten Module object]"}}else if(ba)"undefined"!=typeof read&&(f.read=function(a){return read(a)}),f.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||t("Assertion failed: undefined");return a},"undefined"!=typeof scriptArgs?f.arguments=scriptArgs:"undefined"!=typeof arguments&&(f.arguments=arguments),
"function"===typeof quit&&(f.quit=function(a){quit(a)});else if(m||q)q?r=self.location.href:document.currentScript&&(r=document.currentScript.src),r=0!==r.indexOf("blob:")?r.substr(0,r.lastIndexOf("/")+1):"",f.read=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},q&&(f.readBinary=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),f.readAsync=function(a,b,c){var d=new XMLHttpRequest;
d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)},f.setWindowTitle=function(a){document.title=a};var ea=f.print||("undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null),v=f.printErr||("undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||ea);for(h in g)g.hasOwnProperty(h)&&(f[h]=g[h]);g=void 0;
"object"!==typeof WebAssembly&&v("no native wasm support detected");var x,fa=!1,ha="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function y(a,b){if(a){var c=z,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&ha)a=ha.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var k=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var l=c[a++]&63;e=224==(e&240)?(e&15)<<12|k<<6|l:(e&7)<<18|k<<12|l<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
function A(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var k=0;k<a.length;++k){var l=a.charCodeAt(k);if(55296<=l&&57343>=l){var E=a.charCodeAt(++k);l=65536+((l&1023)<<10)|E&1023}if(127>=l){if(c>=d)break;b[c++]=l}else{if(2047>=l){if(c+1>=d)break;b[c++]=192|l>>6}else{if(65535>=l){if(c+2>=d)break;b[c++]=224|l>>12}else{if(c+3>=d)break;b[c++]=240|l>>18;b[c++]=128|l>>12&63}b[c++]=128|l>>6&63}b[c++]=128|l&63}}b[c]=0;return c-e}
function ia(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function ja(a){var b=ia(a)+1,c=ka(b);A(a,la,c,b);return c}function ma(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,la,z,na,B,C,D;
function oa(){f.HEAP8=la=new Int8Array(buffer);f.HEAP16=na=new Int16Array(buffer);f.HEAP32=B=new Int32Array(buffer);f.HEAPU8=z=new Uint8Array(buffer);f.HEAPU16=new Uint16Array(buffer);f.HEAPU32=new Uint32Array(buffer);f.HEAPF32=C=new Float32Array(buffer);f.HEAPF64=D=new Float64Array(buffer)}var pa=f.TOTAL_MEMORY||33554432;5242880>pa&&v("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+pa+"! (TOTAL_STACK=5242880)");
f.buffer?buffer=f.buffer:"object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(x=new WebAssembly.Memory({initial:pa/65536}),buffer=x.buffer):buffer=new ArrayBuffer(pa);oa();B[4604]=5261328;function F(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.ub;"number"===typeof c?void 0===b.jb?f.dynCall_v(c):f.dynCall_vi(c,b.jb):c(void 0===b.jb?null:b.jb)}}}var qa=[],ra=[],sa=[],ta=[],ua=[],va=!1;function wa(){var a=f.preRun.shift();qa.unshift(a)}
var xa=Math.floor,G=0,ya=null,H=null;f.preloadedImages={};f.preloadedAudios={};function za(){var a=I;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var I="cube-sapp.wasm";if(!za()){var Ba=I;I=f.locateFile?f.locateFile(Ba,r):r+Ba}
function Ca(){try{if(f.wasmBinary)return new Uint8Array(f.wasmBinary);if(f.readBinary)return f.readBinary(I);throw"both async and sync fetching of the wasm failed";}catch(a){t(a)}}function Da(){return f.wasmBinary||!m&&!q||"function"!==typeof fetch?new Promise(function(a){a(Ca())}):fetch(I,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+I+"'";return a.arrayBuffer()}).catch(function(){return Ca()})}
function Ea(a){function b(a){f.asm=a.exports;G--;f.monitorRunDependencies&&f.monitorRunDependencies(G);0==G&&(null!==ya&&(clearInterval(ya),ya=null),H&&(a=H,H=null,a()))}function c(a){b(a.instance)}function d(a){return Da().then(function(a){return WebAssembly.instantiate(a,e)}).then(a,function(a){v("failed to asynchronously prepare wasm: "+a);t(a)})}var e={env:a};G++;f.monitorRunDependencies&&f.monitorRunDependencies(G);if(f.instantiateWasm)try{return f.instantiateWasm(e,b)}catch(k){return v("Module.instantiateWasm callback failed with error: "+
k),!1}(function(){return f.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||za()||"function"!==typeof fetch?d(c):WebAssembly.instantiateStreaming(fetch(I,{credentials:"same-origin"}),e).then(c,function(a){v("wasm streaming compile failed: "+a);v("falling back to ArrayBuffer instantiation");d(c)})})();return{}}f.asm=function(a,b){b.memory=x;b.table=new WebAssembly.Table({initial:16,maximum:16,element:"anyfunc"});return Ea(b)};ra.push({ub:function(){Fa()}});
var Ga=0,Ha=0,J=0,Ia=0,Ja=0,Ka=null,La=null,Ma=!1;function Na(){for(var a=K.length-1;0<=a;--a)Oa(a);K=[];Pa=[]}var Pa=[];function Qa(){if(Ra&&Sa.bb)for(var a=0;a<Pa.length;++a){var b=Pa[a];Pa.splice(a,1);--a;b.Eb.apply(this,b.yb)}}var Ra=0,Sa=null,K=[];function Ta(){return-1!==navigator.userAgent.indexOf("MSIE")||0<navigator.appVersion.indexOf("Trident/")}function Oa(a){var b=K[a];b.target.removeEventListener(b.ab,b.sb,b.eb);K.splice(a,1)}
function L(a){function b(b){++Ra;Sa=a;Qa();a.gb(b);Qa();--Ra}if(a.fb)a.sb=b,a.target.addEventListener(a.ab,b,a.eb),K.push(a),Ma||(ta.push(Na),Ma=!0);else for(var c=0;c<K.length;++c)K[c].target==a.target&&K[c].ab==a.ab&&Oa(c--)}var Ua=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function M(a){try{if(!a)return window;"number"===typeof a&&(a=Ua[a]||y(a));return"#window"===a?window:"#document"===a?document:"#screen"===a?screen:"#canvas"===a?f.canvas:"string"===typeof a?document.getElementById(a):a}catch(b){return null}}function Va(a){"number"===typeof a&&(a=y(a));return a&&"#canvas"!==a?"undefined"!==typeof Wa&&Xa[a]?Xa[a]:M(a):"undefined"!==typeof Wa&&Xa.canvas?Xa.canvas:f.canvas}
function Ya(a,b,c,d,e,k){Ga||(Ga=N(164));a={target:M(a),bb:Ta()?!1:!0,ab:k,fb:d,gb:function(a){a=a||window.event;var c=Ga;A(a.key?a.key:"",z,c+0,32);A(a.code?a.code:"",z,c+32,32);B[c+64>>2]=a.location;B[c+68>>2]=a.ctrlKey;B[c+72>>2]=a.shiftKey;B[c+76>>2]=a.altKey;B[c+80>>2]=a.metaKey;B[c+84>>2]=a.repeat;A(a.locale?a.locale:"",z,c+88,32);A(a.char?a.char:"",z,c+120,32);B[c+152>>2]=a.charCode;B[c+156>>2]=a.keyCode;B[c+160>>2]=a.which;O(d,e,c,b)&&a.preventDefault()},eb:c};L(a)}
function Za(a,b,c){D[a>>3]=window.performance&&window.performance.now?window.performance.now():Date.now();B[a+8>>2]=b.screenX;B[a+12>>2]=b.screenY;B[a+16>>2]=b.clientX;B[a+20>>2]=b.clientY;B[a+24>>2]=b.ctrlKey;B[a+28>>2]=b.shiftKey;B[a+32>>2]=b.altKey;B[a+36>>2]=b.metaKey;na[a+40>>1]=b.button;na[a+42>>1]=b.buttons;B[a+44>>2]=b.movementX||b.mozMovementX||b.webkitMovementX||b.screenX-Ka;B[a+48>>2]=b.movementY||b.mozMovementY||b.webkitMovementY||b.screenY-La;if(f.canvas){var d=f.canvas.getBoundingClientRect();
B[a+60>>2]=b.clientX-d.left;B[a+64>>2]=b.clientY-d.top}else B[a+60>>2]=0,B[a+64>>2]=0;c?(d=c.getBoundingClientRect?c.getBoundingClientRect():{left:0,top:0},B[a+52>>2]=b.clientX-d.left,B[a+56>>2]=b.clientY-d.top):(B[a+52>>2]=0,B[a+56>>2]=0);"wheel"!==b.type&&"mousewheel"!==b.type&&(Ka=b.screenX,La=b.screenY)}
function Q(a,b,c,d,e,k){Ha||(Ha=N(72));a=M(a);c={target:a,bb:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,ab:k,fb:d,gb:function(c){c=c||window.event;Za(Ha,c,a);O(d,e,Ha,b)&&c.preventDefault()},eb:c};Ta()&&"mousedown"==k&&(c.bb=!1);L(c)}
function $a(a,b,c,d){Ia||(Ia=N(36));a=M(a);L({target:a,bb:!1,ab:"resize",fb:d,gb:function(c){c=c||window.event;if(c.target==a){var e=0<window.pageXOffset||0<window.pageYOffset?[window.pageXOffset,window.pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.scrollLeft|0,document.body.scrollTop|0],l=Ia;B[l>>2]=c.detail;B[l+4>>2]=document.body.clientWidth;
B[l+8>>2]=document.body.clientHeight;B[l+12>>2]=window.innerWidth;B[l+16>>2]=window.innerHeight;B[l+20>>2]=window.outerWidth;B[l+24>>2]=window.outerHeight;B[l+28>>2]=e[0];B[l+32>>2]=e[1];O(d,10,l,b)&&c.preventDefault()}},eb:c})}
function cb(a,b,c,d,e,k){Ja||(Ja=N(1684));a=M(a);L({target:a,bb:"touchstart"==k||"touchend"==k,ab:k,fb:d,gb:function(c){c=c||window.event;for(var k={},l=0;l<c.touches.length;++l){var p=c.touches[l];k[p.identifier]=p}for(l=0;l<c.changedTouches.length;++l)p=c.changedTouches[l],k[p.identifier]=p,p.rb=!0;for(l=0;l<c.targetTouches.length;++l)p=c.targetTouches[l],k[p.identifier].wb=!0;var n=p=Ja;B[n+4>>2]=c.ctrlKey;B[n+8>>2]=c.shiftKey;B[n+12>>2]=c.altKey;B[n+16>>2]=c.metaKey;n+=20;var Aa=f.canvas?f.canvas.getBoundingClientRect():
void 0,ab=a.getBoundingClientRect?a.getBoundingClientRect():{left:0,top:0},bb=0;for(l in k){var w=k[l];B[n>>2]=w.identifier;B[n+4>>2]=w.screenX;B[n+8>>2]=w.screenY;B[n+12>>2]=w.clientX;B[n+16>>2]=w.clientY;B[n+20>>2]=w.pageX;B[n+24>>2]=w.pageY;B[n+28>>2]=w.rb;B[n+32>>2]=w.wb;Aa?(B[n+44>>2]=w.clientX-Aa.left,B[n+48>>2]=w.clientY-Aa.top):(B[n+44>>2]=0,B[n+48>>2]=0);B[n+36>>2]=w.clientX-ab.left;B[n+40>>2]=w.clientY-ab.top;n+=52;if(32<=++bb)break}B[p>>2]=bb;O(d,e,p,b)&&c.preventDefault()},eb:c})}
function db(a,b,c,d,e,k){a||(a=f.canvas);a={target:M(a),bb:!1,ab:k,fb:d,gb:function(a){a=a||window.event;O(d,e,0,b)&&a.preventDefault()},eb:c};L(a)}
function eb(a,b,c,d,e){function k(c){c=c||window.event;Za(J,c,a);D[J+72>>3]=c.wheelDeltaX||0;D[J+80>>3]=-(c.wheelDeltaY?c.wheelDeltaY:c.wheelDelta);D[J+88>>3]=0;B[J+96>>2]=0;O(d,9,J,b)&&c.preventDefault()}function l(c){c=c||window.event;var e=J;Za(e,c,a);D[e+72>>3]=c.deltaX;D[e+80>>3]=c.deltaY;D[e+88>>3]=c.deltaZ;B[e+96>>2]=c.deltaMode;O(d,9,e,b)&&c.preventDefault()}J||(J=N(104));L({target:a,bb:!0,ab:e,fb:d,gb:"wheel"==e?l:k,eb:c})}
var fb=1,gb=0,hb=[],R=[],ib=[],jb=[],kb=[],S=[],T=[],lb=[],mb={},U=null,Xa={},V={},nb={};function W(a){gb||(gb=a)}function X(a){for(var b=fb++,c=a.length;c<b;c++)a[c]=null;return b}var ob=null,Y=[0];function pb(a,b){function c(){var a=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return a?parseInt(a[2],10):!1}var d=N(8),e={handle:d,attributes:b,version:b.pb,lb:a};e.cb=2<=e.version&&(!1===c()||58<=c());a.canvas&&(a.canvas.xb=e);mb[d]=e;("undefined"===typeof b.ob||b.ob)&&qb(e);return d}
function qb(a){a||(a=U);if(!a.vb){a.vb=!0;var b=a.lb;if(2>a.version){var c=b.getExtension("ANGLE_instanced_arrays");c&&(b.vertexAttribDivisor=function(a,b){c.vertexAttribDivisorANGLE(a,b)},b.drawArraysInstanced=function(a,b,d,e){c.drawArraysInstancedANGLE(a,b,d,e)},b.drawElementsInstanced=function(a,b,d,e,k){c.drawElementsInstancedANGLE(a,b,d,e,k)});var d=b.getExtension("OES_vertex_array_object");d&&(b.createVertexArray=function(){return d.createVertexArrayOES()},b.deleteVertexArray=function(a){d.deleteVertexArrayOES(a)},
b.bindVertexArray=function(a){d.bindVertexArrayOES(a)},b.isVertexArray=function(a){return d.isVertexArrayOES(a)});var e=b.getExtension("WEBGL_draw_buffers");e&&(b.drawBuffers=function(a,b){e.drawBuffersWEBGL(a,b)})}b.Ab=b.getExtension("EXT_disjoint_timer_query");var k="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");
(a=b.getSupportedExtensions())&&0<a.length&&b.getSupportedExtensions().forEach(function(a){-1!=k.indexOf(a)&&b.getExtension(a)})}}var Wa={},rb,sb,tb=["default","low-power","high-performance"],ub=[];function vb(a,b,c,d){for(var e=0;e<a;e++){var k=Z[c](),l=k&&X(d);k?(k.name=l,d[l]=k):W(1282);B[b+4*e>>2]=l}}
function wb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>U.version){W(1282);return}d=Z.getSupportedExtensions();c=null===d?0:2*d.length;break;case 33307:case 33308:if(2>U.version){W(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":W(1280);return;case "object":if(null===
d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 35097:case 36389:case 34068:c=0;break;default:W(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)B[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){W(1280);v("GL_INVALID_ENUM in glGetIntegerv: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:W(1280);return}B[b>>2]=c}else W(1281)}
function xb(a){var b=ia(a)+1,c=N(b);A(a,z,c,b);return c}function yb(){f.___errno_location&&(B[f.___errno_location()>>2]=12)}function zb(a){a=ma(a);var b=buffer.byteLength;try{return-1!==x.grow((a-b)/65536)?(buffer=x.buffer,!0):!1}catch(c){return!1}}var Z;ob=new Float32Array(256);for(var Ab=0;256>Ab;Ab++)Y[Ab]=ob.subarray(0,Ab+1);for(var Bb=0;32>Bb;Bb++)ub.push(Array(Bb));
var Eb=f.asm({},{R:function(){return window.devicePixelRatio||1},S:function(a,b,c){a=a?M(a):f.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),D[b>>3]=a.right-a.left,D[c>>3]=a.bottom-a.top):(D[b>>3]=a.clientWidth,D[c>>3]=a.clientHeight);return 0},T:function(a,b,c){z.set(z.subarray(b,b+c),a)},Da:function(a,b){function c(d){Cb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},P:function(a,b,c){a=Va(a);if(!a)return-4;a.width=b;a.height=c;return 0},Ma:function(a,
b,c,d){Ya(a,b,c,d,2,"keydown");return 0},Ka:function(a,b,c,d){Ya(a,b,c,d,1,"keypress");return 0},La:function(a,b,c,d){Ya(a,b,c,d,3,"keyup");return 0},la:function(a,b,c,d){Q(a,b,c,d,5,"mousedown");return 0},Pa:function(a,b,c,d){Q(a,b,c,d,33,"mouseenter");return 0},Oa:function(a,b,c,d){Q(a,b,c,d,34,"mouseleave");return 0},Y:function(a,b,c,d){Q(a,b,c,d,8,"mousemove");return 0},ca:function(a,b,c,d){Q(a,b,c,d,6,"mouseup");return 0},Qa:function(a,b,c,d){$a(a,b,c,d);return 0},Ga:function(a,b,c,d){cb(a,b,
c,d,25,"touchcancel");return 0},Ha:function(a,b,c,d){cb(a,b,c,d,23,"touchend");return 0},Ia:function(a,b,c,d){cb(a,b,c,d,24,"touchmove");return 0},Ja:function(a,b,c,d){cb(a,b,c,d,22,"touchstart");return 0},Fa:function(a,b,c,d){db(a,b,c,d,31,"webglcontextlost");return 0},Ea:function(a,b,c,d){db(a,b,c,d,32,"webglcontextrestored");return 0},Na:function(a,b,c,d){a=M(a);return"undefined"!==typeof a.onwheel?(eb(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(eb(a,b,c,d,"mousewheel"),0):-1},H:function(a,
b){var c={};b>>=2;c.alpha=!!B[b];c.depth=!!B[b+1];c.stencil=!!B[b+2];c.antialias=!!B[b+3];c.premultipliedAlpha=!!B[b+4];c.preserveDrawingBuffer=!!B[b+5];c.powerPreference=tb[B[b+6]];c.failIfMajorPerformanceCaveat=!!B[b+7];c.pb=B[b+8];c.Bb=B[b+9];c.ob=B[b+10];c.tb=B[b+11];c.Cb=B[b+12];c.Db=B[b+13];a=Va(a);!a||c.tb?c=0:c=(a=1<c.pb?a.getContext("webgl2",c):a.getContext("webgl",c)||a.getContext("experimental-webgl",c))&&pb(a,c);return c},wa:function(a){a>>=2;for(var b=0;14>b;++b)B[a+b]=0;B[a]=B[a+1]=
B[a+3]=B[a+4]=B[a+8]=B[a+10]=1},na:function(a){U=mb[a];f.zb=Z=U&&U.lb;return!a||Z?0:-5},U:xa,o:function(a){Z.activeTexture(a)},J:function(a,b){Z.attachShader(R[a],T[b])},d:function(a,b){35051==a?Z.mb=b:35052==a&&(Z.nb=b);Z.bindBuffer(a,hb[b])},f:function(a,b){Z.bindFramebuffer(a,ib[b])},b:function(a,b){Z.bindTexture(a,kb[b])},Q:function(a){Z.bindVertexArray(lb[a])},B:function(a,b,c,d){Z.blendColor(a,b,c,d)},C:function(a,b){Z.blendEquationSeparate(a,b)},D:function(a,b,c,d){Z.blendFuncSeparate(a,b,
c,d)},l:function(a,b,c,d,e,k,l,E,P,p){Z.blitFramebuffer(a,b,c,d,e,k,l,E,P,p)},L:function(a,b,c,d){U.cb?c?Z.bufferData(a,z,d,c,b):Z.bufferData(a,b,d):Z.bufferData(a,c?z.subarray(c,c+b):b,d)},K:function(a,b,c,d){U.cb?Z.bufferSubData(a,b,z,d,c):Z.bufferSubData(a,b,z.subarray(d,d+c))},G:function(a){Z.clear(a)},qa:function(a,b,c,d){Z.clearColor(a,b,c,d)},pa:function(a){Z.clearDepth(a)},oa:function(a){Z.clearStencil(a)},t:function(a,b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},W:function(a){Z.compileShader(T[a])},
xa:function(){var a=X(R),b=Z.createProgram();b.name=a;R[a]=b;return a},Z:function(a){var b=X(T);T[b]=Z.createShader(a);return b},A:function(a){Z.cullFace(a)},za:function(a,b){for(var c=0;c<a;c++){var d=B[b+4*c>>2],e=hb[d];e&&(Z.deleteBuffer(e),e.name=0,hb[d]=null,d==rb&&(rb=0),d==sb&&(sb=0),d==Z.mb&&(Z.mb=0),d==Z.nb&&(Z.nb=0))}},g:function(a,b){for(var c=0;c<a;++c){var d=B[b+4*c>>2],e=ib[d];e&&(Z.deleteFramebuffer(e),e.name=0,ib[d]=null)}},N:function(a){if(a){var b=R[a];b?(Z.deleteProgram(b),b.name=
0,R[a]=null,V[a]=null):W(1281)}},O:function(a,b){for(var c=0;c<a;c++){var d=B[b+4*c>>2],e=jb[d];e&&(Z.deleteRenderbuffer(e),e.name=0,jb[d]=null)}},u:function(a){if(a){var b=T[a];b?(Z.deleteShader(b),T[a]=null):W(1281)}},ya:function(a,b){for(var c=0;c<a;c++){var d=B[b+4*c>>2],e=kb[d];e&&(Z.deleteTexture(e),e.name=0,kb[d]=null)}},Aa:function(a,b){for(var c=0;c<a;c++){var d=B[b+4*c>>2];Z.deleteVertexArray(lb[d]);lb[d]=null}},r:function(a){Z.depthFunc(a)},s:function(a){Z.depthMask(!!a)},c:function(a){Z.disable(a)},
a:function(a){Z.disableVertexAttribArray(a)},aa:function(a,b,c){Z.drawArrays(a,b,c)},n:function(a,b){for(var c=ub[a],d=0;d<a;d++)c[d]=B[b+4*d>>2];Z.drawBuffers(c)},ba:function(a,b,c,d){Z.drawElements(a,b,c,d)},e:function(a){Z.enable(a)},ia:function(a){Z.enableVertexAttribArray(a)},z:function(a){Z.frontFace(a)},M:function(a,b){vb(a,b,"createBuffer",hb)},Ba:function(a,b){vb(a,b,"createVertexArray",lb)},ta:function(a,b){return Z.getAttribLocation(R[a],y(b))},v:function(a,b){wb(a,b)},ua:function(a,b,
c,d){a=Z.getProgramInfoLog(R[a]);null===a&&(a="(unknown error)");0<b&&d?(b=A(a,z,d,b),c&&(B[c>>2]=b)):c&&(B[c>>2]=0)},I:function(a,b,c){if(c)if(a>=fb)W(1281);else{var d=V[a];if(d)if(35716==b)a=Z.getProgramInfoLog(R[a]),null===a&&(a="(unknown error)"),B[c>>2]=a.length+1;else if(35719==b)B[c>>2]=d.kb;else if(35722==b){if(-1==d.hb){a=R[a];var e=Z.getProgramParameter(a,35721);for(b=d.hb=0;b<e;++b)d.hb=Math.max(d.hb,Z.getActiveAttrib(a,b).name.length+1)}B[c>>2]=d.hb}else if(35381==b){if(-1==d.ib)for(a=
R[a],e=Z.getProgramParameter(a,35382),b=d.ib=0;b<e;++b)d.ib=Math.max(d.ib,Z.getActiveUniformBlockName(a,b).length+1);B[c>>2]=d.ib}else B[c>>2]=Z.getProgramParameter(R[a],b);else W(1282)}else W(1281)},V:function(a,b,c,d){a=Z.getShaderInfoLog(T[a]);null===a&&(a="(unknown error)");0<b&&d?(b=A(a,z,d,b),c&&(B[c>>2]=b)):c&&(B[c>>2]=0)},w:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(T[a]),null===a&&(a="(unknown error)"),B[c>>2]=a.length+1):35720==b?(a=Z.getShaderSource(T[a]),B[c>>2]=null===a||0==a.length?
0:a.length+1):B[c>>2]=Z.getShaderParameter(T[a],b):W(1281)},Ca:function(a){if(nb[a])return nb[a];switch(a){case 7939:var b=Z.getSupportedExtensions();for(var c=[],d=0;d<b.length;++d)c.push(b[d]),c.push("GL_"+b[d]);b=xb(c.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Z.getParameter(a))||W(1280);b=xb(b);break;case 7938:b=Z.getParameter(Z.VERSION);b=2<=U.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=xb(b);break;case 35724:b=Z.getParameter(Z.SHADING_LANGUAGE_VERSION);c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=xb(b);break;default:return W(1280),0}return nb[a]=b},h:function(a,b){b=y(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=V[a]&&V[a].qb[b])&&0<=c&&c<a[0]?a[1]+c:-1},va:function(a){Z.linkProgram(R[a]);var b=R[a];a=V[a]={qb:{},kb:0,hb:-1,ib:-1};for(var c=a.qb,d=Z.getProgramParameter(b,35718),e=0;e<d;++e){var k=Z.getActiveUniform(b,e),l=k.name;a.kb=
Math.max(a.kb,l.length+1);"]"==l.slice(-1)&&(l=l.slice(0,l.lastIndexOf("[")));var E=Z.getUniformLocation(b,l);if(E){var P=X(S);c[l]=[k.size,P];S[P]=E;for(var p=1;p<k.size;++p)E=Z.getUniformLocation(b,l+"["+p+"]"),P=X(S),S[P]=E}}},y:function(a,b){Z.polygonOffset(a,b)},m:function(a){Z.readBuffer(a)},ra:function(a,b,c,d){Z.scissor(a,b,c,d)},X:function(a,b,c,d){for(var e="",k=0;k<b;++k){var l=d?B[d+4*k>>2]:-1;e+=y(B[c+4*k>>2],0>l?void 0:l)}Z.shaderSource(T[a],e)},$:function(a,b,c){Z.stencilFunc(a,b,c)},
F:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},q:function(a){Z.stencilMask(a)},_:function(a,b,c){Z.stencilOp(a,b,c)},E:function(a,b,c,d){Z.stencilOpSeparate(a,b,c,d)},ha:function(a,b,c){if(U.cb)Z.uniform1fv(S[a],C,c>>2,b);else{if(256>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=C[c+4*e>>2];else d=C.subarray(c>>2,c+4*b>>2);Z.uniform1fv(S[a],d)}},x:function(a,b){Z.uniform1i(S[a],b)},ga:function(a,b,c){if(U.cb)Z.uniform2fv(S[a],C,c>>2,2*b);else{if(256>=2*b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=C[c+4*e>>
2],d[e+1]=C[c+(4*e+4)>>2];else d=C.subarray(c>>2,c+8*b>>2);Z.uniform2fv(S[a],d)}},fa:function(a,b,c){if(U.cb)Z.uniform3fv(S[a],C,c>>2,3*b);else{if(256>=3*b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2],d[e+2]=C[c+(4*e+8)>>2];else d=C.subarray(c>>2,c+12*b>>2);Z.uniform3fv(S[a],d)}},ea:function(a,b,c){if(U.cb)Z.uniform4fv(S[a],C,c>>2,4*b);else{if(256>=4*b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2],d[e+2]=C[c+(4*e+8)>>2],d[e+3]=C[c+(4*e+12)>>
2];else d=C.subarray(c>>2,c+16*b>>2);Z.uniform4fv(S[a],d)}},da:function(a,b,c,d){if(U.cb)Z.uniformMatrix4fv(S[a],!!c,C,d>>2,16*b);else{if(256>=16*b)for(var e=Y[16*b-1],k=0;k<16*b;k+=16)e[k]=C[d+4*k>>2],e[k+1]=C[d+(4*k+4)>>2],e[k+2]=C[d+(4*k+8)>>2],e[k+3]=C[d+(4*k+12)>>2],e[k+4]=C[d+(4*k+16)>>2],e[k+5]=C[d+(4*k+20)>>2],e[k+6]=C[d+(4*k+24)>>2],e[k+7]=C[d+(4*k+28)>>2],e[k+8]=C[d+(4*k+32)>>2],e[k+9]=C[d+(4*k+36)>>2],e[k+10]=C[d+(4*k+40)>>2],e[k+11]=C[d+(4*k+44)>>2],e[k+12]=C[d+(4*k+48)>>2],e[k+13]=C[d+
(4*k+52)>>2],e[k+14]=C[d+(4*k+56)>>2],e[k+15]=C[d+(4*k+60)>>2];else e=C.subarray(d>>2,d+64*b>>2);Z.uniformMatrix4fv(S[a],!!c,e)}},ma:function(a){Z.useProgram(R[a])},ja:function(a,b){Z.vertexAttribDivisor(a,b)},ka:function(a,b,c,d,e,k){Z.vertexAttribPointer(a,b,c,!!d,e,k)},sa:function(a,b,c,d){Z.viewport(a,b,c,d)},k:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Db()});document.body.append(a)},
j:function(){document.getElementById("_sokol_app_input_element").focus()},i:function(){document.getElementById("_sokol_app_input_element").blur()},p:function(a){a|=0;var b=la.length|0;var c=B[4604]|0;var d=c+a|0;if(0<(a|0)&(d|0)<(c|0)|0>(d|0))return t("OOM"),0,yb(),-1;if(a=(d|0)>(b|0)){a=d|0;if(2147418112<a)a=!1;else{for(b=Math.max(la.length,16777216);b<a;)536870912>=b?b=ma(2*b):b=Math.min(ma((3*b+2147483648)/4),2147418112);zb(b)?(oa(),a=!0):a=!1}a=!(a|0)}if(a)return yb(),-1;B[4604]=d|0;return c|
0}},buffer);f.asm=Eb;var Fa=f.___wasm_call_ctors=function(){return f.asm.Ra.apply(null,arguments)},Db=f.__sapp_emsc_notify_keyboard_hidden=function(){return f.asm.Sa.apply(null,arguments)};f._main=function(){return f.asm.Ta.apply(null,arguments)};var N=f._malloc=function(){return f.asm.Ua.apply(null,arguments)};f._free=function(){return f.asm.Va.apply(null,arguments)};f.__saudio_emsc_pull=function(){return f.asm.Wa.apply(null,arguments)};var ka=f.stackAlloc=function(){return f.asm.Xa.apply(null,arguments)};
f.dynCall_vi=function(){return f.asm.Ya.apply(null,arguments)};f.dynCall_v=function(){return f.asm.Za.apply(null,arguments)};var O=f.dynCall_iiii=function(){return f.asm._a.apply(null,arguments)},Cb=f.dynCall_idi=function(){return f.asm.$a.apply(null,arguments)};f.asm=Eb;function u(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}u.prototype=Error();u.prototype.constructor=u;H=function Fb(){f.calledRun||Gb();f.calledRun||(H=Fb)};
f.callMain=function(a){a=a||[];va||(va=!0,F(ra));var b=a.length+1,c=ka(4*(b+1));B[c>>2]=ja(f.thisProgram);for(var d=1;d<b;d++)B[(c>>2)+d]=ja(a[d-1]);B[(c>>2)+b]=0;try{var e=f._main(b,c,0);if(!f.noExitRuntime||0!==e){if(!f.noExitRuntime&&(fa=!0,f.onExit))f.onExit(e);f.quit(e,new u(e))}}catch(k){k instanceof u||("SimulateInfiniteLoop"==k?f.noExitRuntime=!0:((a=k)&&"object"===typeof k&&k.stack&&(a=[k,k.stack]),v("exception thrown: "+a),f.quit(1,k)))}finally{}};
function Gb(a){function b(){if(!f.calledRun&&(f.calledRun=!0,!fa)){va||(va=!0,F(ra));F(sa);if(f.onRuntimeInitialized)f.onRuntimeInitialized();f._main&&Hb&&f.callMain(a);if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;){var b=f.postRun.shift();ua.unshift(b)}F(ua)}}a=a||f.arguments;if(!(0<G)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)wa();F(qa);0<G||f.calledRun||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},
1);b()},1)):b())}}f.run=Gb;function t(a){if(f.onAbort)f.onAbort(a);void 0!==a?(ea(a),v(a),a=JSON.stringify(a)):a="";fa=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}f.abort=t;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Hb=!0;f.noInitialRun&&(Hb=!1);f.noExitRuntime=!0;Gb();
