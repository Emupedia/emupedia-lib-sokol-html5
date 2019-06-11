var e;e||(e=typeof Module !== 'undefined' ? Module : {});var f={},k;for(k in e)e.hasOwnProperty(k)&&(f[k]=e[k]);e.arguments=[];e.thisProgram="./this.program";e.quit=function(a,b){throw b;};e.preRun=[];e.postRun=[];var q=!1,r=!1,t=!1,aa=!1,ba=!1;q="object"===typeof window;r="function"===typeof importScripts;t=(aa="object"===typeof process&&"function"===typeof require)&&!q&&!r;ba=!q&&!t&&!r;var u="";
if(t){u=__dirname+"/";var ca,da;e.read=function(a,b){ca||(ca=require("fs"));da||(da=require("path"));a=da.normalize(a);a=ca.readFileSync(a);return b?a:a.toString()};e.readBinary=function(a){a=e.read(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||v("Assertion failed: undefined");return a};1<process.argv.length&&(e.thisProgram=process.argv[1].replace(/\\/g,"/"));e.arguments=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=e);process.on("uncaughtException",function(a){if(!(a instanceof
w))throw a;});process.on("unhandledRejection",v);e.quit=function(a){process.exit(a)};e.inspect=function(){return"[Emscripten Module object]"}}else if(ba)"undefined"!=typeof read&&(e.read=function(a){return read(a)}),e.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||v("Assertion failed: undefined");return a},"undefined"!=typeof scriptArgs?e.arguments=scriptArgs:"undefined"!=typeof arguments&&(e.arguments=arguments),
"function"===typeof quit&&(e.quit=function(a){quit(a)});else if(q||r)r?u=self.location.href:document.currentScript&&(u=document.currentScript.src),u=0!==u.indexOf("blob:")?u.substr(0,u.lastIndexOf("/")+1):"",e.read=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},r&&(e.readBinary=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),e.readAsync=function(a,b,c){var d=new XMLHttpRequest;
d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)},e.setWindowTitle=function(a){document.title=a};var ea=e.print||("undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null),x=e.printErr||("undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||ea);for(k in f)f.hasOwnProperty(k)&&(e[k]=f[k]);f=void 0;
var fa={"f64-rem":function(a,b){return a%b},"debugger":function(){debugger}};"object"!==typeof WebAssembly&&x("no native wasm support detected");var y,ha=!1,ia="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ja(a){if(a){for(var b=z,c=a+void 0,d=a;b[d]&&!(d>=c);)++d;if(16<d-a&&b.subarray&&ia)a=ia.decode(b.subarray(a,d));else{for(c="";a<d;){var g=b[a++];if(g&128){var h=b[a++]&63;if(192==(g&224))c+=String.fromCharCode((g&31)<<6|h);else{var l=b[a++]&63;g=224==(g&240)?(g&15)<<12|h<<6|l:(g&7)<<18|h<<12|l<<6|b[a++]&63;65536>g?c+=String.fromCharCode(g):(g-=65536,c+=String.fromCharCode(55296|g>>10,56320|g&1023))}}else c+=String.fromCharCode(g)}a=c}}else a="";return a}
function A(a,b,c,d){if(0<d){d=c+d-1;for(var g=0;g<a.length;++g){var h=a.charCodeAt(g);if(55296<=h&&57343>=h){var l=a.charCodeAt(++g);h=65536+((h&1023)<<10)|l&1023}if(127>=h){if(c>=d)break;b[c++]=h}else{if(2047>=h){if(c+1>=d)break;b[c++]=192|h>>6}else{if(65535>=h){if(c+2>=d)break;b[c++]=224|h>>12}else{if(c+3>=d)break;b[c++]=240|h>>18;b[c++]=128|h>>12&63}b[c++]=128|h>>6&63}b[c++]=128|h&63}}b[c]=0}}
function ka(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function la(a){var b=ka(a)+1,c=ma(b);A(a,na,c,b);return c}function qa(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,na,z,ra,B,sa,C;
function ta(){e.HEAP8=na=new Int8Array(buffer);e.HEAP16=ra=new Int16Array(buffer);e.HEAP32=B=new Int32Array(buffer);e.HEAPU8=z=new Uint8Array(buffer);e.HEAPU16=new Uint16Array(buffer);e.HEAPU32=new Uint32Array(buffer);e.HEAPF32=sa=new Float32Array(buffer);e.HEAPF64=C=new Float64Array(buffer)}var D=e.TOTAL_MEMORY||33554432;5242880>D&&x("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+D+"! (TOTAL_STACK=5242880)");
e.buffer?buffer=e.buffer:"object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(y=new WebAssembly.Memory({initial:D/65536}),buffer=y.buffer):buffer=new ArrayBuffer(D);ta();B[2684]=5253648;function E(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.hb;"number"===typeof c?void 0===b.Sa?e.dynCall_v(c):e.dynCall_vi(c,b.Sa):c(void 0===b.Sa?null:b.Sa)}}}var ua=[],va=[],wa=[],xa=[],ya=[],F=!1;function za(){var a=e.preRun.shift();ua.unshift(a)}
var G=0,Aa=null,H=null;e.preloadedImages={};e.preloadedAudios={};function Ba(){var a=I;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var I="saudio-sapp.wasm";if(!Ba()){var Ca=I;I=e.locateFile?e.locateFile(Ca,u):u+Ca}function Da(){try{if(e.wasmBinary)return new Uint8Array(e.wasmBinary);if(e.readBinary)return e.readBinary(I);throw"both async and sync fetching of the wasm failed";}catch(a){v(a)}}
function Ea(){return e.wasmBinary||!q&&!r||"function"!==typeof fetch?new Promise(function(a){a(Da())}):fetch(I,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+I+"'";return a.arrayBuffer()}).catch(function(){return Da()})}
function Fa(a){function b(a){e.asm=a.exports;G--;e.monitorRunDependencies&&e.monitorRunDependencies(G);0==G&&(null!==Aa&&(clearInterval(Aa),Aa=null),H&&(a=H,H=null,a()))}function c(a){b(a.instance)}function d(a){return Ea().then(function(a){return WebAssembly.instantiate(a,g)}).then(a,function(a){x("failed to asynchronously prepare wasm: "+a);v(a)})}var g={env:a,global:{NaN:NaN,Infinity:Infinity},"global.Math":Math,asm2wasm:fa};G++;e.monitorRunDependencies&&e.monitorRunDependencies(G);if(e.instantiateWasm)try{return e.instantiateWasm(g,
b)}catch(h){return x("Module.instantiateWasm callback failed with error: "+h),!1}(function(){return e.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||Ba()||"function"!==typeof fetch?d(c):WebAssembly.instantiateStreaming(fetch(I,{credentials:"same-origin"}),g).then(c,function(a){x("wasm streaming compile failed: "+a);x("falling back to ArrayBuffer instantiation");d(c)})})();return{}}
e.asm=function(a,b){b.memory=y;b.table=new WebAssembly.Table({initial:26,maximum:26,element:"anyfunc"});b.__memory_base=1024;b.__table_base=0;return Fa(b)};var Ga=0,J=0,L=0,Ha=0,Ia=0,Ja=null,Ka=null,La=!1;function Ma(){for(var a=M.length-1;0<=a;--a)Na(a);M=[];N=[]}var N=[];function Oa(){if(Pa&&Qa.Na)for(var a=0;a<N.length;++a){var b=N[a];N.splice(a,1);--a;b.mb.apply(this,b.eb)}}var Pa=0,Qa=null,M=[];
function Ra(){return-1!==navigator.userAgent.indexOf("MSIE")||0<navigator.appVersion.indexOf("Trident/")}function Na(a){var b=M[a];b.target.removeEventListener(b.Ma,b.Za,b.Oa);M.splice(a,1)}function O(a){function b(b){++Pa;Qa=a;Oa();a.Qa(b);Oa();--Pa}if(a.Pa)a.Za=b,a.target.addEventListener(a.Ma,b,a.Oa),M.push(a),La||(xa.push(Ma),La=!0);else for(var c=0;c<M.length;++c)M[c].target==a.target&&M[c].Ma==a.Ma&&Na(c--)}
var Sa=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function P(a){try{if(!a)return window;"number"===typeof a&&(a=Sa[a]||ja(a));return"#window"===a?window:"#document"===a?document:"#screen"===a?screen:"#canvas"===a?e.canvas:"string"===typeof a?document.getElementById(a):a}catch(b){return null}}function Ta(){return na.length}
function Ua(a){"number"===typeof a&&(a=ja(a));return a&&"#canvas"!==a?"undefined"!==typeof Xa&&Q[a]?Q[a]:P(a):"undefined"!==typeof Xa&&Q.canvas?Q.canvas:e.canvas}
function Ya(a,b,c,d,g,h){Ga||(Ga=R(164));a={target:P(a),Na:Ra()?!1:!0,Ma:h,Pa:d,Qa:function(a){a=a||window.event;var c=Ga;A(a.key?a.key:"",z,c+0,32);A(a.code?a.code:"",z,c+32,32);B[c+64>>2]=a.location;B[c+68>>2]=a.ctrlKey;B[c+72>>2]=a.shiftKey;B[c+76>>2]=a.altKey;B[c+80>>2]=a.metaKey;B[c+84>>2]=a.repeat;A(a.locale?a.locale:"",z,c+88,32);A(a.char?a.char:"",z,c+120,32);B[c+152>>2]=a.charCode;B[c+156>>2]=a.keyCode;B[c+160>>2]=a.which;S(d,g,c,b)&&a.preventDefault()},Oa:c};O(a)}
function Za(a,b,c){C[a>>3]=window.performance&&window.performance.now?window.performance.now():Date.now();B[a+8>>2]=b.screenX;B[a+12>>2]=b.screenY;B[a+16>>2]=b.clientX;B[a+20>>2]=b.clientY;B[a+24>>2]=b.ctrlKey;B[a+28>>2]=b.shiftKey;B[a+32>>2]=b.altKey;B[a+36>>2]=b.metaKey;ra[a+40>>1]=b.button;ra[a+42>>1]=b.buttons;B[a+44>>2]=b.movementX||b.mozMovementX||b.webkitMovementX||b.screenX-Ja;B[a+48>>2]=b.movementY||b.mozMovementY||b.webkitMovementY||b.screenY-Ka;if(e.canvas){var d=e.canvas.getBoundingClientRect();
B[a+60>>2]=b.clientX-d.left;B[a+64>>2]=b.clientY-d.top}else B[a+60>>2]=0,B[a+64>>2]=0;c?(d=c.getBoundingClientRect?c.getBoundingClientRect():{left:0,top:0},B[a+52>>2]=b.clientX-d.left,B[a+56>>2]=b.clientY-d.top):(B[a+52>>2]=0,B[a+56>>2]=0);"wheel"!==b.type&&"mousewheel"!==b.type&&(Ja=b.screenX,Ka=b.screenY)}
function T(a,b,c,d,g,h){J||(J=R(72));a=P(a);c={target:a,Na:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Ma:h,Pa:d,Qa:function(c){c=c||window.event;Za(J,c,a);S(d,g,J,b)&&c.preventDefault()},Oa:c};Ra()&&"mousedown"==h&&(c.Na=!1);O(c)}
function $a(a,b,c,d){Ha||(Ha=R(36));a=P(a);O({target:a,Na:!1,Ma:"resize",Pa:d,Qa:function(c){c=c||window.event;if(c.target==a){var g=0<window.pageXOffset||0<window.pageYOffset?[window.pageXOffset,window.pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.scrollLeft|0,document.body.scrollTop|0],l=Ha;B[l>>2]=c.detail;B[l+4>>2]=document.body.clientWidth;
B[l+8>>2]=document.body.clientHeight;B[l+12>>2]=window.innerWidth;B[l+16>>2]=window.innerHeight;B[l+20>>2]=window.outerWidth;B[l+24>>2]=window.outerHeight;B[l+28>>2]=g[0];B[l+32>>2]=g[1];S(d,10,l,b)&&c.preventDefault()}},Oa:c})}
function U(a,b,c,d,g,h){Ia||(Ia=R(1684));a=P(a);O({target:a,Na:"touchstart"==h||"touchend"==h,Ma:h,Pa:d,Qa:function(c){c=c||window.event;for(var h={},l=0;l<c.touches.length;++l){var n=c.touches[l];h[n.identifier]=n}for(l=0;l<c.changedTouches.length;++l)n=c.changedTouches[l],h[n.identifier]=n,n.Ya=!0;for(l=0;l<c.targetTouches.length;++l)n=c.targetTouches[l],h[n.identifier].bb=!0;var m=n=Ia;B[m+4>>2]=c.ctrlKey;B[m+8>>2]=c.shiftKey;B[m+12>>2]=c.altKey;B[m+16>>2]=c.metaKey;m+=20;var pa=e.canvas?e.canvas.getBoundingClientRect():
void 0,Va=a.getBoundingClientRect?a.getBoundingClientRect():{left:0,top:0},Wa=0;for(l in h){var p=h[l];B[m>>2]=p.identifier;B[m+4>>2]=p.screenX;B[m+8>>2]=p.screenY;B[m+12>>2]=p.clientX;B[m+16>>2]=p.clientY;B[m+20>>2]=p.pageX;B[m+24>>2]=p.pageY;B[m+28>>2]=p.Ya;B[m+32>>2]=p.bb;pa?(B[m+44>>2]=p.clientX-pa.left,B[m+48>>2]=p.clientY-pa.top):(B[m+44>>2]=0,B[m+48>>2]=0);B[m+36>>2]=p.clientX-Va.left;B[m+40>>2]=p.clientY-Va.top;m+=52;if(32<=++Wa)break}B[n>>2]=Wa;S(d,g,n,b)&&c.preventDefault()},Oa:c})}
function ab(a,b,c,d,g,h){a||(a=e.canvas);a={target:P(a),Na:!1,Ma:h,Pa:d,Qa:function(a){a=a||window.event;S(d,g,0,b)&&a.preventDefault()},Oa:c};O(a)}
function bb(a,b,c,d,g){function h(c){c=c||window.event;Za(L,c,a);C[L+72>>3]=c.wheelDeltaX||0;C[L+80>>3]=-(c.wheelDeltaY?c.wheelDeltaY:c.wheelDelta);C[L+88>>3]=0;B[L+96>>2]=0;S(d,9,L,b)&&c.preventDefault()}function l(c){c=c||window.event;var g=L;Za(g,c,a);C[g+72>>3]=c.deltaX;C[g+80>>3]=c.deltaY;C[g+88>>3]=c.deltaZ;B[g+96>>2]=c.deltaMode;S(d,9,g,b)&&c.preventDefault()}L||(L=R(104));O({target:a,Na:!0,Ma:g,Pa:d,Qa:"wheel"==g?l:h,Oa:c})}
var cb=1,db=0,eb=[],fb=[],gb=[],hb=[],ib=[],V=[],jb={},W=null,Q={},kb={};function X(a){db||(db=a)}function lb(a,b){function c(){var a=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return a?parseInt(a[2],10):!1}var d=R(8),g={handle:d,attributes:b,version:b.Xa,Ta:a};g.lb=2<=g.version&&(!1===c()||58<=c());a.canvas&&(a.canvas.cb=g);jb[d]=g;("undefined"===typeof b.Wa||b.Wa)&&mb(g);return d}
function mb(a){a||(a=W);if(!a.ab){a.ab=!0;var b=a.Ta;if(2>a.version){var c=b.getExtension("ANGLE_instanced_arrays");c&&(b.vertexAttribDivisor=function(a,b){c.vertexAttribDivisorANGLE(a,b)},b.drawArraysInstanced=function(a,b,d,g){c.drawArraysInstancedANGLE(a,b,d,g)},b.drawElementsInstanced=function(a,b,d,g,h){c.drawElementsInstancedANGLE(a,b,d,g,h)});var d=b.getExtension("OES_vertex_array_object");d&&(b.createVertexArray=function(){return d.createVertexArrayOES()},b.deleteVertexArray=function(a){d.deleteVertexArrayOES(a)},
b.bindVertexArray=function(a){d.bindVertexArrayOES(a)},b.isVertexArray=function(a){return d.isVertexArrayOES(a)});var g=b.getExtension("WEBGL_draw_buffers");g&&(b.drawBuffers=function(a,b){g.drawBuffersWEBGL(a,b)})}b.gb=b.getExtension("EXT_disjoint_timer_query");var h="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");
(a=b.getSupportedExtensions())&&0<a.length&&b.getSupportedExtensions().forEach(function(a){-1!=h.indexOf(a)&&b.getExtension(a)})}}var Xa={},nb,ob,pb=["default","low-power","high-performance"],qb=[];
function rb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>W.version){X(1282);return}d=Y.getSupportedExtensions();c=null===d?0:2*d.length;break;case 33307:case 33308:if(2>W.version){X(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":X(1280);return;case "object":if(null===
d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 35097:case 36389:case 34068:c=0;break;default:X(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)B[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(g){X(1280);x("GL_INVALID_ENUM in glGetIntegerv: Unknown object returned from WebGL getParameter("+a+")! (error: "+g+")");return}}break;default:X(1280);return}B[b>>2]=c}else X(1281)}
function Z(a){var b=ka(a)+1,c=R(b);A(a,z,c,b);return c}function sb(a){a=qa(a);var b=buffer.byteLength;try{return-1!==y.grow((a-b)/65536)?(buffer=y.buffer,!0):!1}catch(c){return!1}}for(var Y,tb=0;256>tb;tb++);for(var ub=0;32>ub;ub++)qb.push(Array(ub));
var yb=e.asm({},{d:v,y:function(a){e.___errno_location&&(B[e.___errno_location()>>2]=a);return a},x:function(){return window.devicePixelRatio||1},u:function(a,b,c){a=a?P(a):e.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),C[b>>3]=a.right-a.left,C[c>>3]=a.bottom-a.top):(C[b>>3]=a.clientWidth,C[c>>3]=a.clientHeight);return 0},W:Ta,P:function(a,b,c){z.set(z.subarray(b,b+c),a)},K:function(a,b){function c(d){vb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},
B:function(a){if(2147418112<a)return!1;for(var b=Math.max(Ta(),16777216);b<a;)536870912>=b?b=qa(2*b):b=Math.min(qa((3*b+2147483648)/4),2147418112);if(!sb(b))return!1;ta();return!0},n:function(a,b,c){a=Ua(a);if(!a)return-4;a.width=b;a.height=c;return 0},z:function(a,b,c,d){Ya(a,b,c,d,2,"keydown");return 0},ra:function(a,b,c,d){Ya(a,b,c,d,1,"keypress");return 0},qa:function(a,b,c,d){Ya(a,b,c,d,3,"keyup");return 0},pa:function(a,b,c,d){T(a,b,c,d,5,"mousedown");return 0},oa:function(a,b,c,d){T(a,b,c,
d,33,"mouseenter");return 0},na:function(a,b,c,d){T(a,b,c,d,34,"mouseleave");return 0},ma:function(a,b,c,d){T(a,b,c,d,8,"mousemove");return 0},la:function(a,b,c,d){T(a,b,c,d,6,"mouseup");return 0},ka:function(a,b,c,d){$a(a,b,c,d);return 0},ja:function(a,b,c,d){U(a,b,c,d,25,"touchcancel");return 0},ia:function(a,b,c,d){U(a,b,c,d,23,"touchend");return 0},ha:function(a,b,c,d){U(a,b,c,d,24,"touchmove");return 0},ga:function(a,b,c,d){U(a,b,c,d,22,"touchstart");return 0},fa:function(a,b,c,d){ab(a,b,c,d,
31,"webglcontextlost");return 0},ea:function(a,b,c,d){ab(a,b,c,d,32,"webglcontextrestored");return 0},da:function(a,b,c,d){a=P(a);return"undefined"!==typeof a.onwheel?(bb(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(bb(a,b,c,d,"mousewheel"),0):-1},w:function(a,b){var c={};b>>=2;c.alpha=!!B[b];c.depth=!!B[b+1];c.stencil=!!B[b+2];c.antialias=!!B[b+3];c.premultipliedAlpha=!!B[b+4];c.preserveDrawingBuffer=!!B[b+5];c.powerPreference=pb[B[b+6]];c.failIfMajorPerformanceCaveat=!!B[b+7];c.Xa=B[b+
8];c.ib=B[b+9];c.Wa=B[b+10];c.$a=B[b+11];c.jb=B[b+12];c.kb=B[b+13];a=Ua(a);!a||c.$a?c=0:c=(a=1<c.Xa?a.getContext("webgl2",c):a.getContext("webgl",c)||a.getContext("experimental-webgl",c))&&lb(a,c);return c},ca:function(a){a>>=2;for(var b=0;14>b;++b)B[a+b]=0;B[a]=B[a+1]=B[a+3]=B[a+4]=B[a+8]=B[a+10]=1},ba:function(a){W=jb[a];e.fb=Y=W&&W.Ta;return!a||Y?0:-5},v:function(a){Y.activeTexture(a)},k:function(a,b){35051==a?Y.Ua=b:35052==a&&(Y.Va=b);Y.bindBuffer(a,eb[b])},e:function(a,b){Y.bindFramebuffer(a,
gb[b])},c:function(a,b){Y.bindTexture(a,ib[b])},t:function(a){Y.bindVertexArray(V[a])},aa:function(a,b,c,d){Y.blendColor(a,b,c,d)},$:function(a,b){Y.blendEquationSeparate(a,b)},_:function(a,b,c,d){Y.blendFuncSeparate(a,b,c,d)},j:function(a,b,c,d,g,h,l,K,oa,n){Y.blitFramebuffer(a,b,c,d,g,h,l,K,oa,n)},Z:function(a){Y.clear(a)},Y:function(a,b,c,d){Y.clearColor(a,b,c,d)},X:function(a){Y.clearDepth(a)},V:function(a){Y.clearStencil(a)},s:function(a,b,c,d){Y.colorMask(!!a,!!b,!!c,!!d)},U:function(a){Y.cullFace(a)},
T:function(a,b){for(var c=0;c<a;c++){var d=B[b+4*c>>2],g=eb[d];g&&(Y.deleteBuffer(g),g.name=0,eb[d]=null,d==nb&&(nb=0),d==ob&&(ob=0),d==Y.Ua&&(Y.Ua=0),d==Y.Va&&(Y.Va=0))}},g:function(a,b){for(var c=0;c<a;++c){var d=B[b+4*c>>2],g=gb[d];g&&(Y.deleteFramebuffer(g),g.name=0,gb[d]=null)}},S:function(a){if(a){var b=fb[a];b?(Y.deleteProgram(b),b.name=0,fb[a]=null):X(1281)}},r:function(a,b){for(var c=0;c<a;c++){var d=B[b+4*c>>2],g=hb[d];g&&(Y.deleteRenderbuffer(g),g.name=0,hb[d]=null)}},R:function(a,b){for(var c=
0;c<a;c++){var d=B[b+4*c>>2],g=ib[d];g&&(Y.deleteTexture(g),g.name=0,ib[d]=null)}},Q:function(a,b){for(var c=0;c<a;c++){var d=B[b+4*c>>2];Y.deleteVertexArray(V[d]);V[d]=null}},q:function(a){Y.depthFunc(a)},p:function(a){Y.depthMask(!!a)},f:function(a){Y.disable(a)},b:function(a){Y.disableVertexAttribArray(a)},i:function(a,b){for(var c=qb[a],d=0;d<a;d++)c[d]=B[b+4*d>>2];Y.drawBuffers(c)},m:function(a){Y.enable(a)},O:function(a){Y.frontFace(a)},N:function(a,b){for(var c=0;c<a;c++){var d=Y.createVertexArray(),
g;if(g=d){g=V;for(var h=cb++,l=g.length;l<h;l++)g[l]=null;g=h}d?(d.name=g,V[g]=d):X(1282);B[b+4*c>>2]=g}},l:function(a,b){rb(a,b)},M:function(a){if(kb[a])return kb[a];switch(a){case 7939:var b=Y.getSupportedExtensions();for(var c=[],d=0;d<b.length;++d)c.push(b[d]),c.push("GL_"+b[d]);b=Z(c.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Y.getParameter(a))||X(1280);b=Z(b);break;case 7938:b=Y.getParameter(Y.VERSION);b=2<=W.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Z(b);
break;case 35724:b=Y.getParameter(Y.SHADING_LANGUAGE_VERSION);c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Z(b);break;default:return X(1280),0}return kb[a]=b},L:function(a,b){Y.polygonOffset(a,b)},h:function(a){Y.readBuffer(a)},J:function(a,b,c,d){Y.scissor(a,b,c,d)},I:function(a,b,c){Y.stencilFunc(a,b,c)},o:function(a){Y.stencilMask(a)},H:function(a,b,c){Y.stencilOp(a,b,c)},G:function(a,b,c,d){Y.viewport(a,
b,c,d)},F:function(){window.addEventListener("beforeunload",function(a){0!=wb()&&(a.preventDefault(),a.returnValue=" ")})},E:function(){return e.Ra?e.Ra.bufferSize:0},D:function(a,b,c){e.La=null;e.Ra=null;"undefined"!==typeof AudioContext?(e.La=new AudioContext({sampleRate:a,latencyHint:"interactive"}),console.log("sokol_audio.h: created AudioContext")):"undefined"!==typeof webkitAudioContext?(e.La=new webkitAudioContext({sampleRate:a,latencyHint:"interactive"}),console.log("sokol_audio.h: created webkitAudioContext")):
(e.La=null,console.log("sokol_audio.h: no WebAudio support"));return e.La?(console.log("sokol_audio.h: sample rate ",e.La.sampleRate),e.Ra=e.La.createScriptProcessor(c,0,b),e.Ra.onaudioprocess=function(a){var b=a.outputBuffer.length,c=xb(b);if(c)for(var d=a.outputBuffer.numberOfChannels,K=0;K<d;K++)for(var oa=a.outputBuffer.getChannelData(K),n=0;n<b;n++)oa[n]=sa[(c>>2)+(d*n+K)]},e.Ra.connect(e.La.destination),a=function(){e.La&&"suspended"===e.La.state&&e.La.resume()},document.addEventListener("click",
a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},C:function(){return e.La?e.La.sampleRate:0},A:function(){v("OOM")},a:10736},buffer);e.asm=yb;e.___em_js__sapp_js_create_textfield=function(){return e.asm.sa.apply(null,arguments)};e.___em_js__sapp_js_focus_textfield=function(){return e.asm.ta.apply(null,arguments)};e.___em_js__sapp_js_hook_beforeunload=function(){return e.asm.ua.apply(null,arguments)};
e.___em_js__sapp_js_unfocus_textfield=function(){return e.asm.va.apply(null,arguments)};e.___em_js__saudio_js_buffer_frames=function(){return e.asm.wa.apply(null,arguments)};e.___em_js__saudio_js_init=function(){return e.asm.xa.apply(null,arguments)};e.___em_js__saudio_js_sample_rate=function(){return e.asm.ya.apply(null,arguments)};e.___em_js__stm_js_perfnow=function(){return e.asm.za.apply(null,arguments)};e.__sapp_emsc_notify_keyboard_hidden=function(){return e.asm.Aa.apply(null,arguments)};
var wb=e.__sapp_html5_get_ask_leave_site=function(){return e.asm.Ba.apply(null,arguments)},xb=e.__saudio_emsc_pull=function(){return e.asm.Ca.apply(null,arguments)};e._free=function(){return e.asm.Da.apply(null,arguments)};e._main=function(){return e.asm.Ea.apply(null,arguments)};
var R=e._malloc=function(){return e.asm.Fa.apply(null,arguments)},ma=e.stackAlloc=function(){return e.asm.Ka.apply(null,arguments)},vb=e.dynCall_idi=function(){return e.asm.Ga.apply(null,arguments)},S=e.dynCall_iiii=function(){return e.asm.Ha.apply(null,arguments)};e.dynCall_v=function(){return e.asm.Ia.apply(null,arguments)};e.dynCall_vi=function(){return e.asm.Ja.apply(null,arguments)};e.asm=yb;
function w(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}w.prototype=Error();w.prototype.constructor=w;H=function zb(){e.calledRun||Ab();e.calledRun||(H=zb)};
e.callMain=function(a){a=a||[];F||(F=!0,E(va));var b=a.length+1,c=ma(4*(b+1));B[c>>2]=la(e.thisProgram);for(var d=1;d<b;d++)B[(c>>2)+d]=la(a[d-1]);B[(c>>2)+b]=0;try{var g=e._main(b,c,0);if(!e.noExitRuntime||0!==g){if(!e.noExitRuntime&&(ha=!0,e.onExit))e.onExit(g);e.quit(g,new w(g))}}catch(h){h instanceof w||("SimulateInfiniteLoop"==h?e.noExitRuntime=!0:((a=h)&&"object"===typeof h&&h.stack&&(a=[h,h.stack]),x("exception thrown: "+a),e.quit(1,h)))}finally{}};
function Ab(a){function b(){if(!e.calledRun&&(e.calledRun=!0,!ha)){F||(F=!0,E(va));E(wa);if(e.onRuntimeInitialized)e.onRuntimeInitialized();e._main&&Bb&&e.callMain(a);if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var b=e.postRun.shift();ya.unshift(b)}E(ya)}}a=a||e.arguments;if(!(0<G)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)za();E(ua);0<G||e.calledRun||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},
1);b()},1)):b())}}e.run=Ab;function v(a){if(e.onAbort)e.onAbort(a);void 0!==a?(ea(a),x(a),a=JSON.stringify(a)):a="";ha=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}e.abort=v;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();var Bb=!0;e.noInitialRun&&(Bb=!1);e.noExitRuntime=!0;Ab();
