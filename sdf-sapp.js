var e;e||(e=typeof Module !== 'undefined' ? Module : {});var g={},k;for(k in e)e.hasOwnProperty(k)&&(g[k]=e[k]);e.arguments=[];e.thisProgram="./this.program";e.quit=function(a,b){throw b;};e.preRun=[];e.postRun=[];var m=!1,q=!1,aa=!1,ba=!1,ca=!1;m="object"===typeof window;q="function"===typeof importScripts;aa=(ba="object"===typeof process&&"function"===typeof require)&&!m&&!q;ca=!m&&!aa&&!q;var r="";
if(aa){r=__dirname+"/";var da,ea;e.read=function(a,b){da||(da=require("fs"));ea||(ea=require("path"));a=ea.normalize(a);a=da.readFileSync(a);return b?a:a.toString()};e.readBinary=function(a){a=e.read(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||t("Assertion failed: undefined");return a};1<process.argv.length&&(e.thisProgram=process.argv[1].replace(/\\/g,"/"));e.arguments=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=e);process.on("uncaughtException",function(a){if(!(a instanceof
u))throw a;});process.on("unhandledRejection",t);e.quit=function(a){process.exit(a)};e.inspect=function(){return"[Emscripten Module object]"}}else if(ca)"undefined"!=typeof read&&(e.read=function(a){return read(a)}),e.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||t("Assertion failed: undefined");return a},"undefined"!=typeof scriptArgs?e.arguments=scriptArgs:"undefined"!=typeof arguments&&(e.arguments=arguments),
"function"===typeof quit&&(e.quit=function(a){quit(a)});else if(m||q)q?r=self.location.href:document.currentScript&&(r=document.currentScript.src),r=0!==r.indexOf("blob:")?r.substr(0,r.lastIndexOf("/")+1):"",e.read=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},q&&(e.readBinary=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),e.readAsync=function(a,b,c){var d=new XMLHttpRequest;
d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)},e.setWindowTitle=function(a){document.title=a};var fa=e.print||("undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null),v=e.printErr||("undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||fa);for(k in g)g.hasOwnProperty(k)&&(e[k]=g[k]);g=void 0;
"object"!==typeof WebAssembly&&v("no native wasm support detected");var x,ha=!1,ia="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function z(a,b){if(a){var c=A,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&ia)a=ia.decode(c.subarray(a,b));else{for(d="";a<b;){var f=c[a++];if(f&128){var h=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|h);else{var l=c[a++]&63;f=224==(f&240)?(f&15)<<12|h<<6|l:(f&7)<<18|h<<12|l<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}a=d}}else a="";return a}
function B(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var h=0;h<a.length;++h){var l=a.charCodeAt(h);if(55296<=l&&57343>=l){var y=a.charCodeAt(++h);l=65536+((l&1023)<<10)|y&1023}if(127>=l){if(c>=d)break;b[c++]=l}else{if(2047>=l){if(c+1>=d)break;b[c++]=192|l>>6}else{if(65535>=l){if(c+2>=d)break;b[c++]=224|l>>12}else{if(c+3>=d)break;b[c++]=240|l>>18;b[c++]=128|l>>12&63}b[c++]=128|l>>6&63}b[c++]=128|l&63}}b[c]=0;return c-f}
function ja(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function ka(a){var b=ja(a)+1,c=la(b);B(a,C,c,b);return c}function ma(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,C,A,na,D,E,F;
function oa(){e.HEAP8=C=new Int8Array(buffer);e.HEAP16=na=new Int16Array(buffer);e.HEAP32=D=new Int32Array(buffer);e.HEAPU8=A=new Uint8Array(buffer);e.HEAPU16=new Uint16Array(buffer);e.HEAPU32=new Uint32Array(buffer);e.HEAPF32=E=new Float32Array(buffer);e.HEAPF64=F=new Float64Array(buffer)}var pa=e.TOTAL_MEMORY||33554432;5242880>pa&&v("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+pa+"! (TOTAL_STACK=5242880)");
e.buffer?buffer=e.buffer:"object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(x=new WebAssembly.Memory({initial:pa/65536}),buffer=x.buffer):buffer=new ArrayBuffer(pa);oa();D[9440]=5280672;function qa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.yb;"number"===typeof c?void 0===b.nb?e.dynCall_v(c):e.dynCall_vi(c,b.nb):c(void 0===b.nb?null:b.nb)}}}var ra=[],sa=[],ta=[],ua=[],va=[];function wa(){var a=e.preRun.shift();ra.unshift(a)}
var G=0,xa=null,H=null;e.preloadedImages={};e.preloadedAudios={};function za(){var a=I;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var I="sdf-sapp.wasm";if(!za()){var Aa=I;I=e.locateFile?e.locateFile(Aa,r):r+Aa}function Ba(){try{if(e.wasmBinary)return new Uint8Array(e.wasmBinary);if(e.readBinary)return e.readBinary(I);throw"both async and sync fetching of the wasm failed";}catch(a){t(a)}}
function Ca(){return e.wasmBinary||!m&&!q||"function"!==typeof fetch?new Promise(function(a){a(Ba())}):fetch(I,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+I+"'";return a.arrayBuffer()}).catch(function(){return Ba()})}
function Da(a){function b(a){e.asm=a.exports;G--;e.monitorRunDependencies&&e.monitorRunDependencies(G);0==G&&(null!==xa&&(clearInterval(xa),xa=null),H&&(a=H,H=null,a()))}function c(a){b(a.instance)}function d(a){return Ca().then(function(a){return WebAssembly.instantiate(a,f)}).then(a,function(a){v("failed to asynchronously prepare wasm: "+a);t(a)})}var f={env:a};G++;e.monitorRunDependencies&&e.monitorRunDependencies(G);if(e.instantiateWasm)try{return e.instantiateWasm(f,b)}catch(h){return v("Module.instantiateWasm callback failed with error: "+
h),!1}(function(){if(e.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||za()||"function"!==typeof fetch)return d(c);fetch(I,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,f).then(c,function(a){v("wasm streaming compile failed: "+a);v("falling back to ArrayBuffer instantiation");d(c)})})})();return{}}e.asm=function(a,b){b.memory=x;b.table=new WebAssembly.Table({initial:16,maximum:16,element:"anyfunc"});return Da(b)};sa.push({yb:function(){Ea()}});
var Fa=0,Ga=0,J=0,Ha=0,Ia=0,Ja=null,Ka=null,La=!1;function Ma(){for(var a=K.length-1;0<=a;--a)Na(a);K=[];Oa=[]}var Oa=[];function Pa(){if(Qa&&Ra.gb)for(var a=0;a<Oa.length;++a){var b=Oa[a];Oa.splice(a,1);--a;b.Ib.apply(this,b.Cb)}}var Qa=0,Ra=null,K=[];function Sa(){return-1!==navigator.userAgent.indexOf("MSIE")||0<navigator.appVersion.indexOf("Trident/")}function Na(a){var b=K[a];b.target.removeEventListener(b.fb,b.wb,b.ib);K.splice(a,1)}
function L(a){function b(b){++Qa;Ra=a;Pa();a.kb(b);Pa();--Qa}if(a.jb)a.wb=b,a.target.addEventListener(a.fb,b,a.ib),K.push(a),La||(ua.push(Ma),La=!0);else for(var c=0;c<K.length;++c)K[c].target==a.target&&K[c].fb==a.fb&&Na(c--)}var Ta=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function M(a){try{if(!a)return window;"number"===typeof a&&(a=Ta[a]||z(a));return"#window"===a?window:"#document"===a?document:"#screen"===a?screen:"#canvas"===a?e.canvas:"string"===typeof a?document.getElementById(a):a}catch(b){return null}}function Ua(a){"number"===typeof a&&(a=z(a));return a&&"#canvas"!==a?"undefined"!==typeof Va&&Wa[a]?Wa[a]:M(a):"undefined"!==typeof Va&&Wa.canvas?Wa.canvas:e.canvas}
function Xa(a,b,c,d,f,h){Fa||(Fa=N(164));a={target:M(a),gb:Sa()?!1:!0,fb:h,jb:d,kb:function(a){a=a||window.event;var c=Fa;B(a.key?a.key:"",A,c+0,32);B(a.code?a.code:"",A,c+32,32);D[c+64>>2]=a.location;D[c+68>>2]=a.ctrlKey;D[c+72>>2]=a.shiftKey;D[c+76>>2]=a.altKey;D[c+80>>2]=a.metaKey;D[c+84>>2]=a.repeat;B(a.locale?a.locale:"",A,c+88,32);B(a.char?a.char:"",A,c+120,32);D[c+152>>2]=a.charCode;D[c+156>>2]=a.keyCode;D[c+160>>2]=a.which;O(d,f,c,b)&&a.preventDefault()},ib:c};L(a)}
function Ya(a,b,c){F[a>>3]=window.performance&&window.performance.now?window.performance.now():Date.now();D[a+8>>2]=b.screenX;D[a+12>>2]=b.screenY;D[a+16>>2]=b.clientX;D[a+20>>2]=b.clientY;D[a+24>>2]=b.ctrlKey;D[a+28>>2]=b.shiftKey;D[a+32>>2]=b.altKey;D[a+36>>2]=b.metaKey;na[a+40>>1]=b.button;na[a+42>>1]=b.buttons;D[a+44>>2]=b.movementX||b.mozMovementX||b.webkitMovementX||b.screenX-Ja;D[a+48>>2]=b.movementY||b.mozMovementY||b.webkitMovementY||b.screenY-Ka;if(e.canvas){var d=e.canvas.getBoundingClientRect();
D[a+60>>2]=b.clientX-d.left;D[a+64>>2]=b.clientY-d.top}else D[a+60>>2]=0,D[a+64>>2]=0;c?(d=c.getBoundingClientRect?c.getBoundingClientRect():{left:0,top:0},D[a+52>>2]=b.clientX-d.left,D[a+56>>2]=b.clientY-d.top):(D[a+52>>2]=0,D[a+56>>2]=0);"wheel"!==b.type&&"mousewheel"!==b.type&&(Ja=b.screenX,Ka=b.screenY)}
function P(a,b,c,d,f,h){Ga||(Ga=N(72));a=M(a);c={target:a,gb:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,fb:h,jb:d,kb:function(c){c=c||window.event;Ya(Ga,c,a);O(d,f,Ga,b)&&c.preventDefault()},ib:c};Sa()&&"mousedown"==h&&(c.gb=!1);L(c)}
function Za(a,b,c,d){Ha||(Ha=N(36));a=M(a);L({target:a,gb:!1,fb:"resize",jb:d,kb:function(c){c=c||window.event;if(c.target==a){var f=0<window.pageXOffset||0<window.pageYOffset?[window.pageXOffset,window.pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.scrollLeft|0,document.body.scrollTop|0],l=Ha;D[l>>2]=c.detail;D[l+4>>2]=document.body.clientWidth;
D[l+8>>2]=document.body.clientHeight;D[l+12>>2]=window.innerWidth;D[l+16>>2]=window.innerHeight;D[l+20>>2]=window.outerWidth;D[l+24>>2]=window.outerHeight;D[l+28>>2]=f[0];D[l+32>>2]=f[1];O(d,10,l,b)&&c.preventDefault()}},ib:c})}
function bb(a,b,c,d,f,h){Ia||(Ia=N(1684));a=M(a);L({target:a,gb:"touchstart"==h||"touchend"==h,fb:h,jb:d,kb:function(c){c=c||window.event;for(var h={},l=0;l<c.touches.length;++l){var p=c.touches[l];h[p.identifier]=p}for(l=0;l<c.changedTouches.length;++l)p=c.changedTouches[l],h[p.identifier]=p,p.vb=!0;for(l=0;l<c.targetTouches.length;++l)p=c.targetTouches[l],h[p.identifier].Ab=!0;var n=p=Ia;D[n+4>>2]=c.ctrlKey;D[n+8>>2]=c.shiftKey;D[n+12>>2]=c.altKey;D[n+16>>2]=c.metaKey;n+=20;var ya=e.canvas?e.canvas.getBoundingClientRect():
void 0,$a=a.getBoundingClientRect?a.getBoundingClientRect():{left:0,top:0},ab=0;for(l in h){var w=h[l];D[n>>2]=w.identifier;D[n+4>>2]=w.screenX;D[n+8>>2]=w.screenY;D[n+12>>2]=w.clientX;D[n+16>>2]=w.clientY;D[n+20>>2]=w.pageX;D[n+24>>2]=w.pageY;D[n+28>>2]=w.vb;D[n+32>>2]=w.Ab;ya?(D[n+44>>2]=w.clientX-ya.left,D[n+48>>2]=w.clientY-ya.top):(D[n+44>>2]=0,D[n+48>>2]=0);D[n+36>>2]=w.clientX-$a.left;D[n+40>>2]=w.clientY-$a.top;n+=52;if(32<=++ab)break}D[p>>2]=ab;O(d,f,p,b)&&c.preventDefault()},ib:c})}
function cb(a,b,c,d,f,h){a||(a=e.canvas);a={target:M(a),gb:!1,fb:h,jb:d,kb:function(a){a=a||window.event;O(d,f,0,b)&&a.preventDefault()},ib:c};L(a)}
function db(a,b,c,d,f){function h(c){c=c||window.event;Ya(J,c,a);F[J+72>>3]=c.wheelDeltaX||0;F[J+80>>3]=-(c.wheelDeltaY?c.wheelDeltaY:c.wheelDelta);F[J+88>>3]=0;D[J+96>>2]=0;O(d,9,J,b)&&c.preventDefault()}function l(c){c=c||window.event;var f=J;Ya(f,c,a);F[f+72>>3]=c.deltaX;F[f+80>>3]=c.deltaY;F[f+88>>3]=c.deltaZ;D[f+96>>2]=c.deltaMode;O(d,9,f,b)&&c.preventDefault()}J||(J=N(104));L({target:a,gb:!0,fb:f,jb:d,kb:"wheel"==f?l:h,ib:c})}
var eb=1,fb=0,gb=[],R=[],hb=[],ib=[],jb=[],S=[],T=[],kb=[],lb={},U=null,Wa={},V={},mb={};function W(a){fb||(fb=a)}function X(a){for(var b=eb++,c=a.length;c<b;c++)a[c]=null;return b}var nb=null,Y=[0];function ob(a,b){function c(){var a=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return a?parseInt(a[2],10):!1}var d=N(8),f={handle:d,attributes:b,version:b.tb,pb:a};f.hb=2<=f.version&&(!1===c()||58<=c());a.canvas&&(a.canvas.Bb=f);lb[d]=f;("undefined"===typeof b.sb||b.sb)&&pb(f);return d}
function pb(a){a||(a=U);if(!a.zb){a.zb=!0;var b=a.pb;if(2>a.version){var c=b.getExtension("ANGLE_instanced_arrays");c&&(b.vertexAttribDivisor=function(a,b){c.vertexAttribDivisorANGLE(a,b)},b.drawArraysInstanced=function(a,b,d,f){c.drawArraysInstancedANGLE(a,b,d,f)},b.drawElementsInstanced=function(a,b,d,f,h){c.drawElementsInstancedANGLE(a,b,d,f,h)});var d=b.getExtension("OES_vertex_array_object");d&&(b.createVertexArray=function(){return d.createVertexArrayOES()},b.deleteVertexArray=function(a){d.deleteVertexArrayOES(a)},
b.bindVertexArray=function(a){d.bindVertexArrayOES(a)},b.isVertexArray=function(a){return d.isVertexArrayOES(a)});var f=b.getExtension("WEBGL_draw_buffers");f&&(b.drawBuffers=function(a,b){f.drawBuffersWEBGL(a,b)})}b.Eb=b.getExtension("EXT_disjoint_timer_query");var h="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");
(a=b.getSupportedExtensions())&&0<a.length&&b.getSupportedExtensions().forEach(function(a){-1!=h.indexOf(a)&&b.getExtension(a)})}}var Va={},qb,rb,sb=["default","low-power","high-performance"],tb=[];function ub(a,b,c,d){for(var f=0;f<a;f++){var h=Z[c](),l=h&&X(d);h?(h.name=l,d[l]=h):W(1282);D[b+4*f>>2]=l}}
function vb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>U.version){W(1282);return}d=Z.getSupportedExtensions();c=null===d?0:2*d.length;break;case 33307:case 33308:if(2>U.version){W(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":W(1280);return;case "object":if(null===
d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 35097:case 36389:case 34068:c=0;break;default:W(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)D[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){W(1280);v("GL_INVALID_ENUM in glGetIntegerv: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:W(1280);return}D[b>>2]=c}else W(1281)}
function wb(a){var b=ja(a)+1,c=N(b);B(a,A,c,b);return c}function xb(){e.___errno_location&&(D[e.___errno_location()>>2]=12)}function yb(a){a=ma(a);var b=buffer.byteLength;try{return-1!==x.grow((a-b)/65536)?(buffer=x.buffer,!0):!1}catch(c){return!1}}var Z;nb=new Float32Array(256);for(var zb=0;256>zb;zb++)Y[zb]=nb.subarray(0,zb+1);for(var Ab=0;32>Ab;Ab++)tb.push(Array(Ab));
var Gb=e.asm({},{R:function(){return window.devicePixelRatio||1},S:function(a,b,c){a=a?M(a):e.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),F[b>>3]=a.right-a.left,F[c>>3]=a.bottom-a.top):(F[b>>3]=a.clientWidth,F[c>>3]=a.clientHeight);return 0},T:function(a,b,c){A.set(A.subarray(b,b+c),a)},Ea:function(a,b){function c(d){Bb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},P:function(a,b,c){a=Ua(a);if(!a)return-4;a.width=b;a.height=c;return 0},Na:function(a,
b,c,d){Xa(a,b,c,d,2,"keydown");return 0},La:function(a,b,c,d){Xa(a,b,c,d,1,"keypress");return 0},Ma:function(a,b,c,d){Xa(a,b,c,d,3,"keyup");return 0},ha:function(a,b,c,d){P(a,b,c,d,5,"mousedown");return 0},Qa:function(a,b,c,d){P(a,b,c,d,33,"mouseenter");return 0},Pa:function(a,b,c,d){P(a,b,c,d,34,"mouseleave");return 0},Z:function(a,b,c,d){P(a,b,c,d,8,"mousemove");return 0},da:function(a,b,c,d){P(a,b,c,d,6,"mouseup");return 0},Ra:function(a,b,c,d){Za(a,b,c,d);return 0},Ha:function(a,b,c,d){bb(a,b,
c,d,25,"touchcancel");return 0},Ia:function(a,b,c,d){bb(a,b,c,d,23,"touchend");return 0},Ja:function(a,b,c,d){bb(a,b,c,d,24,"touchmove");return 0},Ka:function(a,b,c,d){bb(a,b,c,d,22,"touchstart");return 0},Ga:function(a,b,c,d){cb(a,b,c,d,31,"webglcontextlost");return 0},Fa:function(a,b,c,d){cb(a,b,c,d,32,"webglcontextrestored");return 0},Oa:function(a,b,c,d){a=M(a);return"undefined"!==typeof a.onwheel?(db(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(db(a,b,c,d,"mousewheel"),0):-1},J:function(a,
b){var c={};b>>=2;c.alpha=!!D[b];c.depth=!!D[b+1];c.stencil=!!D[b+2];c.antialias=!!D[b+3];c.premultipliedAlpha=!!D[b+4];c.preserveDrawingBuffer=!!D[b+5];c.powerPreference=sb[D[b+6]];c.failIfMajorPerformanceCaveat=!!D[b+7];c.tb=D[b+8];c.Fb=D[b+9];c.sb=D[b+10];c.xb=D[b+11];c.Gb=D[b+12];c.Hb=D[b+13];a=Ua(a);!a||c.xb?c=0:c=(a=1<c.tb?a.getContext("webgl2",c):a.getContext("webgl",c)||a.getContext("experimental-webgl",c))&&ob(a,c);return c},va:function(a){a>>=2;for(var b=0;14>b;++b)D[a+b]=0;D[a]=D[a+1]=
D[a+3]=D[a+4]=D[a+8]=D[a+10]=1},qa:function(a){U=lb[a];e.Db=Z=U&&U.pb;return!a||Z?0:-5},o:function(a){Z.activeTexture(a)},y:function(a,b){Z.attachShader(R[a],T[b])},d:function(a,b){35051==a?Z.qb=b:35052==a&&(Z.rb=b);Z.bindBuffer(a,gb[b])},f:function(a,b){Z.bindFramebuffer(a,hb[b])},b:function(a,b){Z.bindTexture(a,jb[b])},Q:function(a){Z.bindVertexArray(kb[a])},G:function(a,b,c,d){Z.blendColor(a,b,c,d)},H:function(a,b){Z.blendEquationSeparate(a,b)},I:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},
m:function(a,b,c,d,f,h,l,y,Q,p){Z.blitFramebuffer(a,b,c,d,f,h,l,y,Q,p)},z:function(a,b,c,d){U.hb?c?Z.bufferData(a,A,d,c,b):Z.bufferData(a,b,d):Z.bufferData(a,c?A.subarray(c,c+b):b,d)},B:function(a,b,c,d){U.hb?Z.bufferSubData(a,b,A,d,c):Z.bufferSubData(a,b,A.subarray(d,d+c))},M:function(a){Z.clear(a)},ua:function(a,b,c,d){Z.clearColor(a,b,c,d)},ta:function(a){Z.clearDepth(a)},sa:function(a){Z.clearStencil(a)},u:function(a,b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},Y:function(a){Z.compileShader(T[a])},ca:function(){var a=
X(R),b=Z.createProgram();b.name=a;R[a]=b;return a},$:function(a){var b=X(T);T[b]=Z.createShader(a);return b},F:function(a){Z.cullFace(a)},za:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],f=gb[d];f&&(Z.deleteBuffer(f),f.name=0,gb[d]=null,d==qb&&(qb=0),d==rb&&(rb=0),d==Z.qb&&(Z.qb=0),d==Z.rb&&(Z.rb=0))}},h:function(a,b){for(var c=0;c<a;++c){var d=D[b+4*c>>2],f=hb[d];f&&(Z.deleteFramebuffer(f),f.name=0,hb[d]=null)}},N:function(a){if(a){var b=R[a];b?(Z.deleteProgram(b),b.name=0,R[a]=null,V[a]=
null):W(1281)}},O:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],f=ib[d];f&&(Z.deleteRenderbuffer(f),f.name=0,ib[d]=null)}},q:function(a){if(a){var b=T[a];b?(Z.deleteShader(b),T[a]=null):W(1281)}},ya:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],f=jb[d];f&&(Z.deleteTexture(f),f.name=0,jb[d]=null)}},Aa:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2];Z.deleteVertexArray(kb[d]);kb[d]=null}},s:function(a){Z.depthFunc(a)},t:function(a){Z.depthMask(!!a)},c:function(a){Z.disable(a)},a:function(a){Z.disableVertexAttribArray(a)},
fa:function(a,b,c){Z.drawArrays(a,b,c)},p:function(a,b){for(var c=tb[a],d=0;d<a;d++)c[d]=D[b+4*d>>2];Z.drawBuffers(c)},ga:function(a,b,c,d){Z.drawElements(a,b,c,d)},e:function(a){Z.enable(a)},na:function(a){Z.enableVertexAttribArray(a)},E:function(a){Z.frontFace(a)},A:function(a,b){ub(a,b,"createBuffer",gb)},Ba:function(a,b){ub(a,b,"createVertexArray",kb)},W:function(a,b){return Z.getAttribLocation(R[a],z(b))},v:function(a,b){vb(a,b)},aa:function(a,b,c,d){a=Z.getProgramInfoLog(R[a]);null===a&&(a=
"(unknown error)");0<b&&d?(b=B(a,A,d,b),c&&(D[c>>2]=b)):c&&(D[c>>2]=0)},x:function(a,b,c){if(c)if(a>=eb)W(1281);else{var d=V[a];if(d)if(35716==b)a=Z.getProgramInfoLog(R[a]),null===a&&(a="(unknown error)"),D[c>>2]=a.length+1;else if(35719==b)D[c>>2]=d.ob;else if(35722==b){if(-1==d.lb){a=R[a];var f=Z.getProgramParameter(a,35721);for(b=d.lb=0;b<f;++b)d.lb=Math.max(d.lb,Z.getActiveAttrib(a,b).name.length+1)}D[c>>2]=d.lb}else if(35381==b){if(-1==d.mb)for(a=R[a],f=Z.getProgramParameter(a,35382),b=d.mb=
0;b<f;++b)d.mb=Math.max(d.mb,Z.getActiveUniformBlockName(a,b).length+1);D[c>>2]=d.mb}else D[c>>2]=Z.getProgramParameter(R[a],b);else W(1282)}else W(1281)},X:function(a,b,c,d){a=Z.getShaderInfoLog(T[a]);null===a&&(a="(unknown error)");0<b&&d?(b=B(a,A,d,b),c&&(D[c>>2]=b)):c&&(D[c>>2]=0)},w:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(T[a]),null===a&&(a="(unknown error)"),D[c>>2]=a.length+1):35720==b?(a=Z.getShaderSource(T[a]),D[c>>2]=null===a||0==a.length?0:a.length+1):D[c>>2]=Z.getShaderParameter(T[a],
b):W(1281)},Ca:function(a){if(mb[a])return mb[a];switch(a){case 7939:var b=Z.getSupportedExtensions();for(var c=[],d=0;d<b.length;++d)c.push(b[d]),c.push("GL_"+b[d]);b=wb(c.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Z.getParameter(a))||W(1280);b=wb(b);break;case 7938:b=Z.getParameter(Z.VERSION);b=2<=U.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=wb(b);break;case 35724:b=Z.getParameter(Z.SHADING_LANGUAGE_VERSION);c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=wb(b);break;default:return W(1280),0}return mb[a]=b},g:function(a,b){b=z(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=V[a]&&V[a].ub[b])&&0<=c&&c<a[0]?a[1]+c:-1},ba:function(a){Z.linkProgram(R[a]);var b=R[a];a=V[a]={ub:{},ob:0,lb:-1,mb:-1};for(var c=a.ub,d=Z.getProgramParameter(b,35718),f=0;f<d;++f){var h=Z.getActiveUniform(b,f),l=h.name;a.ob=
Math.max(a.ob,l.length+1);"]"==l.slice(-1)&&(l=l.slice(0,l.lastIndexOf("[")));var y=Z.getUniformLocation(b,l);if(y){var Q=X(S);c[l]=[h.size,Q];S[Q]=y;for(var p=1;p<h.size;++p)y=Z.getUniformLocation(b,l+"["+p+"]"),Q=X(S),S[Q]=y}}},D:function(a,b){Z.polygonOffset(a,b)},n:function(a){Z.readBuffer(a)},wa:function(a,b,c,d){Z.scissor(a,b,c,d)},_:function(a,b,c,d){for(var f="",h=0;h<b;++h){var l=d?D[d+4*h>>2]:-1;f+=z(D[c+4*h>>2],0>l?void 0:l)}Z.shaderSource(T[a],f)},V:function(a,b,c){Z.stencilFunc(a,b,c)},
L:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},r:function(a){Z.stencilMask(a)},U:function(a,b,c){Z.stencilOp(a,b,c)},K:function(a,b,c,d){Z.stencilOpSeparate(a,b,c,d)},ma:function(a,b,c){if(U.hb)Z.uniform1fv(S[a],E,c>>2,b);else{if(256>=b)for(var d=Y[b-1],f=0;f<b;++f)d[f]=E[c+4*f>>2];else d=E.subarray(c>>2,c+4*b>>2);Z.uniform1fv(S[a],d)}},C:function(a,b){Z.uniform1i(S[a],b)},la:function(a,b,c){if(U.hb)Z.uniform2fv(S[a],E,c>>2,2*b);else{if(256>=2*b)for(var d=Y[2*b-1],f=0;f<2*b;f+=2)d[f]=E[c+4*f>>
2],d[f+1]=E[c+(4*f+4)>>2];else d=E.subarray(c>>2,c+8*b>>2);Z.uniform2fv(S[a],d)}},ka:function(a,b,c){if(U.hb)Z.uniform3fv(S[a],E,c>>2,3*b);else{if(256>=3*b)for(var d=Y[3*b-1],f=0;f<3*b;f+=3)d[f]=E[c+4*f>>2],d[f+1]=E[c+(4*f+4)>>2],d[f+2]=E[c+(4*f+8)>>2];else d=E.subarray(c>>2,c+12*b>>2);Z.uniform3fv(S[a],d)}},ja:function(a,b,c){if(U.hb)Z.uniform4fv(S[a],E,c>>2,4*b);else{if(256>=4*b)for(var d=Y[4*b-1],f=0;f<4*b;f+=4)d[f]=E[c+4*f>>2],d[f+1]=E[c+(4*f+4)>>2],d[f+2]=E[c+(4*f+8)>>2],d[f+3]=E[c+(4*f+12)>>
2];else d=E.subarray(c>>2,c+16*b>>2);Z.uniform4fv(S[a],d)}},ia:function(a,b,c,d){if(U.hb)Z.uniformMatrix4fv(S[a],!!c,E,d>>2,16*b);else{if(256>=16*b)for(var f=Y[16*b-1],h=0;h<16*b;h+=16)f[h]=E[d+4*h>>2],f[h+1]=E[d+(4*h+4)>>2],f[h+2]=E[d+(4*h+8)>>2],f[h+3]=E[d+(4*h+12)>>2],f[h+4]=E[d+(4*h+16)>>2],f[h+5]=E[d+(4*h+20)>>2],f[h+6]=E[d+(4*h+24)>>2],f[h+7]=E[d+(4*h+28)>>2],f[h+8]=E[d+(4*h+32)>>2],f[h+9]=E[d+(4*h+36)>>2],f[h+10]=E[d+(4*h+40)>>2],f[h+11]=E[d+(4*h+44)>>2],f[h+12]=E[d+(4*h+48)>>2],f[h+13]=E[d+
(4*h+52)>>2],f[h+14]=E[d+(4*h+56)>>2],f[h+15]=E[d+(4*h+60)>>2];else f=E.subarray(d>>2,d+64*b>>2);Z.uniformMatrix4fv(S[a],!!c,f)}},ra:function(a){Z.useProgram(R[a])},oa:function(a,b){Z.vertexAttribDivisor(a,b)},pa:function(a,b,c,d,f,h){Z.vertexAttribPointer(a,b,c,!!d,f,h)},xa:function(a,b,c,d){Z.viewport(a,b,c,d)},l:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Cb()});document.body.append(a)},
k:function(){document.getElementById("_sokol_app_input_element").focus()},Da:function(){window.addEventListener("beforeunload",function(a){0!=Db()&&(a.preventDefault(),a.returnValue=" ")})},j:function(){document.getElementById("_sokol_app_input_element").blur()},i:function(a){a|=0;var b=C.length|0;var c=D[9440]|0;var d=c+a|0;if(0<(a|0)&(d|0)<(c|0)|0>(d|0))return t("OOM"),0,xb(),-1;if(a=(d|0)>(b|0)){a=d|0;if(2147418112<a)a=!1;else{for(b=Math.max(C.length,16777216);b<a;)536870912>=b?b=ma(2*b):b=Math.min(ma((3*
b+2147483648)/4),2147418112);yb(b)?(oa(),a=!0):a=!1}a=!(a|0)}if(a)return xb(),-1;D[9440]=d|0;return c|0},ea:function(a,b,c,d,f,h){b=z(b);var l=new XMLHttpRequest;l.open("GET",b);l.responseType="arraybuffer";var y=!(0==c&&d==f);y&&l.setRequestHeader("Range","bytes="+c+"-"+(c+d));l.onreadystatechange=function(){if(this.readyState==this.DONE)if(206==this.status||200==this.status&&!y){var b=new Uint8Array(l.response);A.set(b,h);Eb(a,d)}else Fb(a)};l.send()}},buffer);e.asm=Gb;
var Ea=e.___wasm_call_ctors=function(){return e.asm.Sa.apply(null,arguments)},Cb=e.__sapp_emsc_notify_keyboard_hidden=function(){return e.asm.Ta.apply(null,arguments)},Db=e.__sapp_html5_get_ask_leave_site=function(){return e.asm.Ua.apply(null,arguments)};e._main=function(){return e.asm.Va.apply(null,arguments)};var N=e._malloc=function(){return e.asm.Wa.apply(null,arguments)};e._free=function(){return e.asm.Xa.apply(null,arguments)};e.__saudio_emsc_pull=function(){return e.asm.Ya.apply(null,arguments)};
e.__sfetch_emsc_head_response=function(){return e.asm.Za.apply(null,arguments)};var Eb=e.__sfetch_emsc_range_response=function(){return e.asm._a.apply(null,arguments)},Fb=e.__sfetch_emsc_failed=function(){return e.asm.$a.apply(null,arguments)},la=e.stackAlloc=function(){return e.asm.ab.apply(null,arguments)};e.dynCall_vi=function(){return e.asm.bb.apply(null,arguments)};e.dynCall_v=function(){return e.asm.cb.apply(null,arguments)};
var O=e.dynCall_iiii=function(){return e.asm.db.apply(null,arguments)},Bb=e.dynCall_idi=function(){return e.asm.eb.apply(null,arguments)};e.asm=Gb;function u(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}u.prototype=Error();u.prototype.constructor=u;H=function Hb(){e.calledRun||Ib();e.calledRun||(H=Hb)};
e.callMain=function(a){a=a||[];var b=a.length+1,c=la(4*(b+1));D[c>>2]=ka(e.thisProgram);for(var d=1;d<b;d++)D[(c>>2)+d]=ka(a[d-1]);D[(c>>2)+b]=0;try{var f=e._main(b,c,0);if(!e.noExitRuntime||0!==f){if(!e.noExitRuntime&&(ha=!0,e.onExit))e.onExit(f);e.quit(f,new u(f))}}catch(h){h instanceof u||("SimulateInfiniteLoop"==h?e.noExitRuntime=!0:((a=h)&&"object"===typeof h&&h.stack&&(a=[h,h.stack]),v("exception thrown: "+a),e.quit(1,h)))}finally{}};
function Ib(a){function b(){if(!e.calledRun&&(e.calledRun=!0,!ha)){qa(sa);qa(ta);if(e.onRuntimeInitialized)e.onRuntimeInitialized();e._main&&Jb&&e.callMain(a);if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var b=e.postRun.shift();va.unshift(b)}qa(va)}}a=a||e.arguments;if(!(0<G)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)wa();qa(ra);0<G||e.calledRun||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},
1);b()},1)):b())}}e.run=Ib;function t(a){if(e.onAbort)e.onAbort(a);void 0!==a?(fa(a),v(a),a='"'+a+'"'):a="";ha=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}e.abort=t;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();var Jb=!0;e.noInitialRun&&(Jb=!1);e.noExitRuntime=!0;Ib();
