var e;e||(e=typeof Module !== 'undefined' ? Module : {});var f={},h;for(h in e)e.hasOwnProperty(h)&&(f[h]=e[h]);e.arguments=[];e.thisProgram="./this.program";e.quit=function(a,b){throw b;};e.preRun=[];e.postRun=[];var p=!1,q=!1,aa=!1,ba=!1;p="object"===typeof window;q="function"===typeof importScripts;aa="object"===typeof process&&"function"===typeof require&&!p&&!q;ba=!p&&!aa&&!q;var r="";
if(aa){r=__dirname+"/";var ca,da;e.read=function(a,b){ca||(ca=require("fs"));da||(da=require("path"));a=da.normalize(a);a=ca.readFileSync(a);return b?a:a.toString()};e.readBinary=function(a){a=e.read(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||u("Assertion failed: undefined");return a};1<process.argv.length&&(e.thisProgram=process.argv[1].replace(/\\/g,"/"));e.arguments=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=e);process.on("uncaughtException",function(a){if(!(a instanceof
v))throw a;});process.on("unhandledRejection",u);e.quit=function(a){process.exit(a)};e.inspect=function(){return"[Emscripten Module object]"}}else if(ba)"undefined"!=typeof read&&(e.read=function(a){return read(a)}),e.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||u("Assertion failed: undefined");return a},"undefined"!=typeof scriptArgs?e.arguments=scriptArgs:"undefined"!=typeof arguments&&(e.arguments=arguments),
"function"===typeof quit&&(e.quit=function(a){quit(a)});else if(p||q)q?r=self.location.href:document.currentScript&&(r=document.currentScript.src),r=0!==r.indexOf("blob:")?r.substr(0,r.lastIndexOf("/")+1):"",e.read=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},q&&(e.readBinary=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),e.readAsync=function(a,b,c){var d=new XMLHttpRequest;
d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)},e.setWindowTitle=function(a){document.title=a};var ea=e.print||("undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null),w=e.printErr||("undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||ea);for(h in f)f.hasOwnProperty(h)&&(e[h]=f[h]);f=void 0;
"object"!==typeof WebAssembly&&w("no native wasm support detected");var x,fa=!1,ha="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function y(a,b){if(a){var c=z,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&ha)a=ha.decode(c.subarray(a,b));else{for(d="";a<b;){var g=c[a++];if(g&128){var k=c[a++]&63;if(192==(g&224))d+=String.fromCharCode((g&31)<<6|k);else{var l=c[a++]&63;g=224==(g&240)?(g&15)<<12|k<<6|l:(g&7)<<18|k<<12|l<<6|c[a++]&63;65536>g?d+=String.fromCharCode(g):(g-=65536,d+=String.fromCharCode(55296|g>>10,56320|g&1023))}}else d+=String.fromCharCode(g)}a=d}}else a="";return a}
function A(a,b,c,d){if(!(0<d))return 0;var g=c;d=c+d-1;for(var k=0;k<a.length;++k){var l=a.charCodeAt(k);if(55296<=l&&57343>=l){var C=a.charCodeAt(++k);l=65536+((l&1023)<<10)|C&1023}if(127>=l){if(c>=d)break;b[c++]=l}else{if(2047>=l){if(c+1>=d)break;b[c++]=192|l>>6}else{if(65535>=l){if(c+2>=d)break;b[c++]=224|l>>12}else{if(c+3>=d)break;b[c++]=240|l>>18;b[c++]=128|l>>12&63}b[c++]=128|l>>6&63}b[c++]=128|l&63}}b[c]=0;return c-g}
function ia(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function ja(a){var b=ia(a)+1,c=ka(b);A(a,B,c,b);return c}function la(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,B,z,ma,D,E;
function na(){e.HEAP8=B=new Int8Array(buffer);e.HEAP16=ma=new Int16Array(buffer);e.HEAP32=D=new Int32Array(buffer);e.HEAPU8=z=new Uint8Array(buffer);e.HEAPU16=new Uint16Array(buffer);e.HEAPU32=new Uint32Array(buffer);e.HEAPF32=new Float32Array(buffer);e.HEAPF64=E=new Float64Array(buffer)}var F=e.TOTAL_MEMORY||33554432;5242880>F&&w("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+F+"! (TOTAL_STACK=5242880)");
e.buffer?buffer=e.buffer:"object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(x=new WebAssembly.Memory({initial:F/65536}),buffer=x.buffer):buffer=new ArrayBuffer(F);na();D[3708]=5257744;function G(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.pb;"number"===typeof c?void 0===b.cb?e.dynCall_v(c):e.dynCall_vi(c,b.cb):c(void 0===b.cb?null:b.cb)}}}var oa=[],pa=[],qa=[],ra=[],sa=[],ta=!1;function ua(){var a=e.preRun.shift();oa.unshift(a)}
var H=0,va=null,I=null;e.preloadedImages={};e.preloadedAudios={};function wa(){var a=J;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var J="triangle-sapp.wasm";if(!wa()){var ya=J;J=e.locateFile?e.locateFile(ya,r):r+ya}function za(){try{if(e.wasmBinary)return new Uint8Array(e.wasmBinary);if(e.readBinary)return e.readBinary(J);throw"both async and sync fetching of the wasm failed";}catch(a){u(a)}}
function Aa(){return e.wasmBinary||!p&&!q||"function"!==typeof fetch?new Promise(function(a){a(za())}):fetch(J,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+J+"'";return a.arrayBuffer()}).catch(function(){return za()})}
function Ba(a){function b(a){e.asm=a.exports;H--;e.monitorRunDependencies&&e.monitorRunDependencies(H);0==H&&(null!==va&&(clearInterval(va),va=null),I&&(a=I,I=null,a()))}function c(a){b(a.instance)}function d(a){return Aa().then(function(a){return WebAssembly.instantiate(a,g)}).then(a,function(a){w("failed to asynchronously prepare wasm: "+a);u(a)})}var g={env:a};H++;e.monitorRunDependencies&&e.monitorRunDependencies(H);if(e.instantiateWasm)try{return e.instantiateWasm(g,b)}catch(k){return w("Module.instantiateWasm callback failed with error: "+
k),!1}(function(){return e.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||wa()||"function"!==typeof fetch?d(c):WebAssembly.instantiateStreaming(fetch(J,{credentials:"same-origin"}),g).then(c,function(a){w("wasm streaming compile failed: "+a);w("falling back to ArrayBuffer instantiation");d(c)})})();return{}}e.asm=function(a,b){b.memory=x;b.table=new WebAssembly.Table({initial:16,maximum:16,element:"anyfunc"});return Ba(b)};pa.push({pb:function(){Ca()}});
var Da=0,Ea=0,K=0,Fa=0,Ga=0,Ha=null,Ia=null,Ja=!1;function Ka(){for(var a=L.length-1;0<=a;--a)La(a);L=[];Ma=[]}var Ma=[];function Na(){if(Oa&&Pa.Xa)for(var a=0;a<Ma.length;++a){var b=Ma[a];Ma.splice(a,1);--a;b.zb.apply(this,b.tb)}}var Oa=0,Pa=null,L=[];function Qa(){return-1!==navigator.userAgent.indexOf("MSIE")||0<navigator.appVersion.indexOf("Trident/")}function La(a){var b=L[a];b.target.removeEventListener(b.Wa,b.nb,b.Ya);L.splice(a,1)}
function M(a){function b(b){++Oa;Pa=a;Na();a.$a(b);Na();--Oa}if(a.Za)a.nb=b,a.target.addEventListener(a.Wa,b,a.Ya),L.push(a),Ja||(ra.push(Ka),Ja=!0);else for(var c=0;c<L.length;++c)L[c].target==a.target&&L[c].Wa==a.Wa&&La(c--)}var Ra=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function O(a){try{if(!a)return window;"number"===typeof a&&(a=Ra[a]||y(a));return"#window"===a?window:"#document"===a?document:"#screen"===a?screen:"#canvas"===a?e.canvas:"string"===typeof a?document.getElementById(a):a}catch(b){return null}}function Sa(a){"number"===typeof a&&(a=y(a));return a&&"#canvas"!==a?"undefined"!==typeof Ta&&Ua[a]?Ua[a]:O(a):"undefined"!==typeof Ta&&Ua.canvas?Ua.canvas:e.canvas}
function Va(a,b,c,d,g,k){Da||(Da=P(164));a={target:O(a),Xa:Qa()?!1:!0,Wa:k,Za:d,$a:function(a){a=a||window.event;var c=Da;A(a.key?a.key:"",z,c+0,32);A(a.code?a.code:"",z,c+32,32);D[c+64>>2]=a.location;D[c+68>>2]=a.ctrlKey;D[c+72>>2]=a.shiftKey;D[c+76>>2]=a.altKey;D[c+80>>2]=a.metaKey;D[c+84>>2]=a.repeat;A(a.locale?a.locale:"",z,c+88,32);A(a.char?a.char:"",z,c+120,32);D[c+152>>2]=a.charCode;D[c+156>>2]=a.keyCode;D[c+160>>2]=a.which;Q(d,g,c,b)&&a.preventDefault()},Ya:c};M(a)}
function Wa(a,b,c){E[a>>3]=window.performance&&window.performance.now?window.performance.now():Date.now();D[a+8>>2]=b.screenX;D[a+12>>2]=b.screenY;D[a+16>>2]=b.clientX;D[a+20>>2]=b.clientY;D[a+24>>2]=b.ctrlKey;D[a+28>>2]=b.shiftKey;D[a+32>>2]=b.altKey;D[a+36>>2]=b.metaKey;ma[a+40>>1]=b.button;ma[a+42>>1]=b.buttons;D[a+44>>2]=b.movementX||b.mozMovementX||b.webkitMovementX||b.screenX-Ha;D[a+48>>2]=b.movementY||b.mozMovementY||b.webkitMovementY||b.screenY-Ia;if(e.canvas){var d=e.canvas.getBoundingClientRect();
D[a+60>>2]=b.clientX-d.left;D[a+64>>2]=b.clientY-d.top}else D[a+60>>2]=0,D[a+64>>2]=0;c?(d=c.getBoundingClientRect?c.getBoundingClientRect():{left:0,top:0},D[a+52>>2]=b.clientX-d.left,D[a+56>>2]=b.clientY-d.top):(D[a+52>>2]=0,D[a+56>>2]=0);"wheel"!==b.type&&"mousewheel"!==b.type&&(Ha=b.screenX,Ia=b.screenY)}
function R(a,b,c,d,g,k){Ea||(Ea=P(72));a=O(a);c={target:a,Xa:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,Wa:k,Za:d,$a:function(c){c=c||window.event;Wa(Ea,c,a);Q(d,g,Ea,b)&&c.preventDefault()},Ya:c};Qa()&&"mousedown"==k&&(c.Xa=!1);M(c)}
function Xa(a,b,c,d){Fa||(Fa=P(36));a=O(a);M({target:a,Xa:!1,Wa:"resize",Za:d,$a:function(c){c=c||window.event;if(c.target==a){var g=0<window.pageXOffset||0<window.pageYOffset?[window.pageXOffset,window.pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.scrollLeft|0,document.body.scrollTop|0],l=Fa;D[l>>2]=c.detail;D[l+4>>2]=document.body.clientWidth;
D[l+8>>2]=document.body.clientHeight;D[l+12>>2]=window.innerWidth;D[l+16>>2]=window.innerHeight;D[l+20>>2]=window.outerWidth;D[l+24>>2]=window.outerHeight;D[l+28>>2]=g[0];D[l+32>>2]=g[1];Q(d,10,l,b)&&c.preventDefault()}},Ya:c})}
function $a(a,b,c,d,g,k){Ga||(Ga=P(1684));a=O(a);M({target:a,Xa:"touchstart"==k||"touchend"==k,Wa:k,Za:d,$a:function(c){c=c||window.event;for(var l={},k=0;k<c.touches.length;++k){var n=c.touches[k];l[n.identifier]=n}for(k=0;k<c.changedTouches.length;++k)n=c.changedTouches[k],l[n.identifier]=n,n.mb=!0;for(k=0;k<c.targetTouches.length;++k)n=c.targetTouches[k],l[n.identifier].rb=!0;var m=n=Ga;D[m+4>>2]=c.ctrlKey;D[m+8>>2]=c.shiftKey;D[m+12>>2]=c.altKey;D[m+16>>2]=c.metaKey;m+=20;var xa=e.canvas?e.canvas.getBoundingClientRect():
void 0,Ya=a.getBoundingClientRect?a.getBoundingClientRect():{left:0,top:0},Za=0;for(k in l){var t=l[k];D[m>>2]=t.identifier;D[m+4>>2]=t.screenX;D[m+8>>2]=t.screenY;D[m+12>>2]=t.clientX;D[m+16>>2]=t.clientY;D[m+20>>2]=t.pageX;D[m+24>>2]=t.pageY;D[m+28>>2]=t.mb;D[m+32>>2]=t.rb;xa?(D[m+44>>2]=t.clientX-xa.left,D[m+48>>2]=t.clientY-xa.top):(D[m+44>>2]=0,D[m+48>>2]=0);D[m+36>>2]=t.clientX-Ya.left;D[m+40>>2]=t.clientY-Ya.top;m+=52;if(32<=++Za)break}D[n>>2]=Za;Q(d,g,n,b)&&c.preventDefault()},Ya:c})}
function ab(a,b,c,d,g,k){a||(a=e.canvas);a={target:O(a),Xa:!1,Wa:k,Za:d,$a:function(a){a=a||window.event;Q(d,g,0,b)&&a.preventDefault()},Ya:c};M(a)}
function bb(a,b,c,d,g){function k(c){c=c||window.event;Wa(K,c,a);E[K+72>>3]=c.wheelDeltaX||0;E[K+80>>3]=-(c.wheelDeltaY?c.wheelDeltaY:c.wheelDelta);E[K+88>>3]=0;D[K+96>>2]=0;Q(d,9,K,b)&&c.preventDefault()}function l(c){c=c||window.event;var g=K;Wa(g,c,a);E[g+72>>3]=c.deltaX;E[g+80>>3]=c.deltaY;E[g+88>>3]=c.deltaZ;D[g+96>>2]=c.deltaMode;Q(d,9,g,b)&&c.preventDefault()}K||(K=P(104));M({target:a,Xa:!0,Wa:g,Za:d,$a:"wheel"==g?l:k,Ya:c})}
var cb=1,db=0,eb=[],S=[],fb=[],gb=[],hb=[],T=[],U=[],ib=[],jb={},V=null,Ua={},W={},kb={};function X(a){db||(db=a)}function Y(a){for(var b=cb++,c=a.length;c<b;c++)a[c]=null;return b}function lb(a,b){function c(){var a=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return a?parseInt(a[2],10):!1}var d=P(8),g={handle:d,attributes:b,version:b.jb,fb:a};g.kb=2<=g.version&&(!1===c()||58<=c());a.canvas&&(a.canvas.sb=g);jb[d]=g;("undefined"===typeof b.ib||b.ib)&&mb(g);return d}
function mb(a){a||(a=V);if(!a.qb){a.qb=!0;var b=a.fb;if(2>a.version){var c=b.getExtension("ANGLE_instanced_arrays");c&&(b.vertexAttribDivisor=function(a,b){c.vertexAttribDivisorANGLE(a,b)},b.drawArraysInstanced=function(a,b,d,g){c.drawArraysInstancedANGLE(a,b,d,g)},b.drawElementsInstanced=function(a,b,d,g,k){c.drawElementsInstancedANGLE(a,b,d,g,k)});var d=b.getExtension("OES_vertex_array_object");d&&(b.createVertexArray=function(){return d.createVertexArrayOES()},b.deleteVertexArray=function(a){d.deleteVertexArrayOES(a)},
b.bindVertexArray=function(a){d.bindVertexArrayOES(a)},b.isVertexArray=function(a){return d.isVertexArrayOES(a)});var g=b.getExtension("WEBGL_draw_buffers");g&&(b.drawBuffers=function(a,b){g.drawBuffersWEBGL(a,b)})}b.vb=b.getExtension("EXT_disjoint_timer_query");var k="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");
(a=b.getSupportedExtensions())&&0<a.length&&b.getSupportedExtensions().forEach(function(a){-1!=k.indexOf(a)&&b.getExtension(a)})}}var Ta={},nb,ob,pb=["default","low-power","high-performance"],qb=[];function rb(a,b,c,d){for(var g=0;g<a;g++){var k=Z[c](),l=k&&Y(d);k?(k.name=l,d[l]=k):X(1282);D[b+4*g>>2]=l}}
function sb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>V.version){X(1282);return}d=Z.getSupportedExtensions();c=null===d?0:2*d.length;break;case 33307:case 33308:if(2>V.version){X(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":X(1280);return;case "object":if(null===
d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 35097:case 36389:case 34068:c=0;break;default:X(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)D[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(g){X(1280);w("GL_INVALID_ENUM in glGetIntegerv: Unknown object returned from WebGL getParameter("+a+")! (error: "+g+")");return}}break;default:X(1280);return}D[b>>2]=c}else X(1281)}
function tb(a){var b=ia(a)+1,c=P(b);A(a,z,c,b);return c}function ub(){e.___errno_location&&(D[e.___errno_location()>>2]=12)}function vb(a){a=la(a);var b=buffer.byteLength;try{return-1!==x.grow((a-b)/65536)?(buffer=x.buffer,!0):!1}catch(c){return!1}}for(var Z,wb=0;256>wb;wb++);for(var xb=0;32>xb;xb++)qb.push(Array(xb));
var Ab=e.asm({},{R:function(){return window.devicePixelRatio||1},S:function(a,b,c){a=a?O(a):e.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),E[b>>3]=a.right-a.left,E[c>>3]=a.bottom-a.top):(E[b>>3]=a.clientWidth,E[c>>3]=a.clientHeight);return 0},T:function(a,b,c){z.set(z.subarray(b,b+c),a)},xa:function(a,b){function c(d){yb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},P:function(a,b,c){a=Sa(a);if(!a)return-4;a.width=b;a.height=c;return 0},Ga:function(a,
b,c,d){Va(a,b,c,d,2,"keydown");return 0},Ea:function(a,b,c,d){Va(a,b,c,d,1,"keypress");return 0},Fa:function(a,b,c,d){Va(a,b,c,d,3,"keyup");return 0},fa:function(a,b,c,d){R(a,b,c,d,5,"mousedown");return 0},Ja:function(a,b,c,d){R(a,b,c,d,33,"mouseenter");return 0},Ia:function(a,b,c,d){R(a,b,c,d,34,"mouseleave");return 0},U:function(a,b,c,d){R(a,b,c,d,8,"mousemove");return 0},_:function(a,b,c,d){R(a,b,c,d,6,"mouseup");return 0},Ka:function(a,b,c,d){Xa(a,b,c,d);return 0},Aa:function(a,b,c,d){$a(a,b,
c,d,25,"touchcancel");return 0},Ba:function(a,b,c,d){$a(a,b,c,d,23,"touchend");return 0},Ca:function(a,b,c,d){$a(a,b,c,d,24,"touchmove");return 0},Da:function(a,b,c,d){$a(a,b,c,d,22,"touchstart");return 0},za:function(a,b,c,d){ab(a,b,c,d,31,"webglcontextlost");return 0},ya:function(a,b,c,d){ab(a,b,c,d,32,"webglcontextrestored");return 0},Ha:function(a,b,c,d){a=O(a);return"undefined"!==typeof a.onwheel?(bb(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(bb(a,b,c,d,"mousewheel"),0):-1},H:function(a,
b){var c={};b>>=2;c.alpha=!!D[b];c.depth=!!D[b+1];c.stencil=!!D[b+2];c.antialias=!!D[b+3];c.premultipliedAlpha=!!D[b+4];c.preserveDrawingBuffer=!!D[b+5];c.powerPreference=pb[D[b+6]];c.failIfMajorPerformanceCaveat=!!D[b+7];c.jb=D[b+8];c.wb=D[b+9];c.ib=D[b+10];c.ob=D[b+11];c.xb=D[b+12];c.yb=D[b+13];a=Sa(a);!a||c.ob?c=0:c=(a=1<c.jb?a.getContext("webgl2",c):a.getContext("webgl",c)||a.getContext("experimental-webgl",c))&&lb(a,c);return c},qa:function(a){a>>=2;for(var b=0;14>b;++b)D[a+b]=0;D[a]=D[a+1]=
D[a+3]=D[a+4]=D[a+8]=D[a+10]=1},ha:function(a){V=jb[a];e.ub=Z=V&&V.fb;return!a||Z?0:-5},o:function(a){Z.activeTexture(a)},J:function(a,b){Z.attachShader(S[a],U[b])},d:function(a,b){35051==a?Z.gb=b:35052==a&&(Z.hb=b);Z.bindBuffer(a,eb[b])},f:function(a,b){Z.bindFramebuffer(a,fb[b])},b:function(a,b){Z.bindTexture(a,hb[b])},Q:function(a){Z.bindVertexArray(ib[a])},B:function(a,b,c,d){Z.blendColor(a,b,c,d)},C:function(a,b){Z.blendEquationSeparate(a,b)},D:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},
l:function(a,b,c,d,g,k,l,C,N,n){Z.blitFramebuffer(a,b,c,d,g,k,l,C,N,n)},L:function(a,b,c,d){V.kb?c?Z.bufferData(a,z,d,c,b):Z.bufferData(a,b,d):Z.bufferData(a,c?z.subarray(c,c+b):b,d)},K:function(a,b,c,d){V.kb?Z.bufferSubData(a,b,z,d,c):Z.bufferSubData(a,b,z.subarray(d,d+c))},G:function(a){Z.clear(a)},ka:function(a,b,c,d){Z.clearColor(a,b,c,d)},ja:function(a){Z.clearDepth(a)},ia:function(a){Z.clearStencil(a)},t:function(a,b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},W:function(a){Z.compileShader(U[a])},ra:function(){var a=
Y(S),b=Z.createProgram();b.name=a;S[a]=b;return a},Y:function(a){var b=Y(U);U[b]=Z.createShader(a);return b},A:function(a){Z.cullFace(a)},ta:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],g=eb[d];g&&(Z.deleteBuffer(g),g.name=0,eb[d]=null,d==nb&&(nb=0),d==ob&&(ob=0),d==Z.gb&&(Z.gb=0),d==Z.hb&&(Z.hb=0))}},g:function(a,b){for(var c=0;c<a;++c){var d=D[b+4*c>>2],g=fb[d];g&&(Z.deleteFramebuffer(g),g.name=0,fb[d]=null)}},N:function(a){if(a){var b=S[a];b?(Z.deleteProgram(b),b.name=0,S[a]=null,W[a]=
null):X(1281)}},O:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],g=gb[d];g&&(Z.deleteRenderbuffer(g),g.name=0,gb[d]=null)}},u:function(a){if(a){var b=U[a];b?(Z.deleteShader(b),U[a]=null):X(1281)}},sa:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],g=hb[d];g&&(Z.deleteTexture(g),g.name=0,hb[d]=null)}},ua:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2];Z.deleteVertexArray(ib[d]);ib[d]=null}},r:function(a){Z.depthFunc(a)},s:function(a){Z.depthMask(!!a)},c:function(a){Z.disable(a)},a:function(a){Z.disableVertexAttribArray(a)},
aa:function(a,b,c){Z.drawArrays(a,b,c)},n:function(a,b){for(var c=qb[a],d=0;d<a;d++)c[d]=D[b+4*d>>2];Z.drawBuffers(c)},ba:function(a,b,c,d){Z.drawElements(a,b,c,d)},e:function(a){Z.enable(a)},ca:function(a){Z.enableVertexAttribArray(a)},z:function(a){Z.frontFace(a)},M:function(a,b){rb(a,b,"createBuffer",eb)},va:function(a,b){rb(a,b,"createVertexArray",ib)},na:function(a,b){return Z.getAttribLocation(S[a],y(b))},v:function(a,b){sb(a,b)},oa:function(a,b,c,d){a=Z.getProgramInfoLog(S[a]);null===a&&(a=
"(unknown error)");0<b&&d?(b=A(a,z,d,b),c&&(D[c>>2]=b)):c&&(D[c>>2]=0)},I:function(a,b,c){if(c)if(a>=cb)X(1281);else{var d=W[a];if(d)if(35716==b)a=Z.getProgramInfoLog(S[a]),null===a&&(a="(unknown error)"),D[c>>2]=a.length+1;else if(35719==b)D[c>>2]=d.eb;else if(35722==b){if(-1==d.ab){a=S[a];var g=Z.getProgramParameter(a,35721);for(b=d.ab=0;b<g;++b)d.ab=Math.max(d.ab,Z.getActiveAttrib(a,b).name.length+1)}D[c>>2]=d.ab}else if(35381==b){if(-1==d.bb)for(a=S[a],g=Z.getProgramParameter(a,35382),b=d.bb=
0;b<g;++b)d.bb=Math.max(d.bb,Z.getActiveUniformBlockName(a,b).length+1);D[c>>2]=d.bb}else D[c>>2]=Z.getProgramParameter(S[a],b);else X(1282)}else X(1281)},V:function(a,b,c,d){a=Z.getShaderInfoLog(U[a]);null===a&&(a="(unknown error)");0<b&&d?(b=A(a,z,d,b),c&&(D[c>>2]=b)):c&&(D[c>>2]=0)},w:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(U[a]),null===a&&(a="(unknown error)"),D[c>>2]=a.length+1):35720==b?(a=Z.getShaderSource(U[a]),D[c>>2]=null===a||0==a.length?0:a.length+1):D[c>>2]=Z.getShaderParameter(U[a],
b):X(1281)},wa:function(a){if(kb[a])return kb[a];switch(a){case 7939:var b=Z.getSupportedExtensions();for(var c=[],d=0;d<b.length;++d)c.push(b[d]),c.push("GL_"+b[d]);b=tb(c.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Z.getParameter(a))||X(1280);b=tb(b);break;case 7938:b=Z.getParameter(Z.VERSION);b=2<=V.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=tb(b);break;case 35724:b=Z.getParameter(Z.SHADING_LANGUAGE_VERSION);c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=tb(b);break;default:return X(1280),0}return kb[a]=b},h:function(a,b){b=y(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=W[a]&&W[a].lb[b])&&0<=c&&c<a[0]?a[1]+c:-1},pa:function(a){Z.linkProgram(S[a]);var b=S[a];a=W[a]={lb:{},eb:0,ab:-1,bb:-1};for(var c=a.lb,d=Z.getProgramParameter(b,35718),g=0;g<d;++g){var k=Z.getActiveUniform(b,g),l=k.name;a.eb=
Math.max(a.eb,l.length+1);"]"==l.slice(-1)&&(l=l.slice(0,l.lastIndexOf("[")));var C=Z.getUniformLocation(b,l);if(C){var N=Y(T);c[l]=[k.size,N];T[N]=C;for(var n=1;n<k.size;++n)C=Z.getUniformLocation(b,l+"["+n+"]"),N=Y(T),T[N]=C}}},y:function(a,b){Z.polygonOffset(a,b)},m:function(a){Z.readBuffer(a)},la:function(a,b,c,d){Z.scissor(a,b,c,d)},X:function(a,b,c,d){for(var g="",k=0;k<b;++k){var l=d?D[d+4*k>>2]:-1;g+=y(D[c+4*k>>2],0>l?void 0:l)}Z.shaderSource(U[a],g)},$:function(a,b,c){Z.stencilFunc(a,b,c)},
F:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},q:function(a){Z.stencilMask(a)},Z:function(a,b,c){Z.stencilOp(a,b,c)},E:function(a,b,c,d){Z.stencilOpSeparate(a,b,c,d)},x:function(a,b){Z.uniform1i(T[a],b)},ga:function(a){Z.useProgram(S[a])},da:function(a,b){Z.vertexAttribDivisor(a,b)},ea:function(a,b,c,d,g,k){Z.vertexAttribPointer(a,b,c,!!d,g,k)},ma:function(a,b,c,d){Z.viewport(a,b,c,d)},k:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize=
"none";a.addEventListener("focusout",function(){zb()});document.body.append(a)},j:function(){document.getElementById("_sokol_app_input_element").focus()},i:function(){document.getElementById("_sokol_app_input_element").blur()},p:function(a){a|=0;var b=B.length|0;var c=D[3708]|0;var d=c+a|0;if(0<(a|0)&(d|0)<(c|0)|0>(d|0))return u("OOM"),0,ub(),-1;if(a=(d|0)>(b|0)){a=d|0;if(2147418112<a)a=!1;else{for(b=Math.max(B.length,16777216);b<a;)536870912>=b?b=la(2*b):b=Math.min(la((3*b+2147483648)/4),2147418112);
vb(b)?(na(),a=!0):a=!1}a=!(a|0)}if(a)return ub(),-1;D[3708]=d|0;return c|0}},buffer);e.asm=Ab;var Ca=e.___wasm_call_ctors=function(){return e.asm.La.apply(null,arguments)},zb=e.__sapp_emsc_notify_keyboard_hidden=function(){return e.asm.Ma.apply(null,arguments)};e._main=function(){return e.asm.Na.apply(null,arguments)};var P=e._malloc=function(){return e.asm.Oa.apply(null,arguments)};e._free=function(){return e.asm.Pa.apply(null,arguments)};
e.__saudio_emsc_pull=function(){return e.asm.Qa.apply(null,arguments)};var ka=e.stackAlloc=function(){return e.asm.Ra.apply(null,arguments)};e.dynCall_vi=function(){return e.asm.Sa.apply(null,arguments)};e.dynCall_v=function(){return e.asm.Ta.apply(null,arguments)};var Q=e.dynCall_iiii=function(){return e.asm.Ua.apply(null,arguments)},yb=e.dynCall_idi=function(){return e.asm.Va.apply(null,arguments)};e.asm=Ab;
function v(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}v.prototype=Error();v.prototype.constructor=v;I=function Bb(){e.calledRun||Cb();e.calledRun||(I=Bb)};
e.callMain=function(a){a=a||[];ta||(ta=!0,G(pa));var b=a.length+1,c=ka(4*(b+1));D[c>>2]=ja(e.thisProgram);for(var d=1;d<b;d++)D[(c>>2)+d]=ja(a[d-1]);D[(c>>2)+b]=0;try{var g=e._main(b,c,0);if(!e.noExitRuntime||0!==g){if(!e.noExitRuntime&&(fa=!0,e.onExit))e.onExit(g);e.quit(g,new v(g))}}catch(k){k instanceof v||("SimulateInfiniteLoop"==k?e.noExitRuntime=!0:((a=k)&&"object"===typeof k&&k.stack&&(a=[k,k.stack]),w("exception thrown: "+a),e.quit(1,k)))}finally{}};
function Cb(a){function b(){if(!e.calledRun&&(e.calledRun=!0,!fa)){ta||(ta=!0,G(pa));G(qa);if(e.onRuntimeInitialized)e.onRuntimeInitialized();e._main&&Db&&e.callMain(a);if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var b=e.postRun.shift();sa.unshift(b)}G(sa)}}a=a||e.arguments;if(!(0<H)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)ua();G(oa);0<H||e.calledRun||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},
1);b()},1)):b())}}e.run=Cb;function u(a){if(e.onAbort)e.onAbort(a);void 0!==a?(ea(a),w(a),a=JSON.stringify(a)):a="";fa=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}e.abort=u;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();var Db=!0;e.noInitialRun&&(Db=!1);e.noExitRuntime=!0;Cb();
