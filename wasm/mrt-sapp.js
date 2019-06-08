var f;f||(f=typeof Module !== 'undefined' ? Module : {});var g={},k;for(k in f)f.hasOwnProperty(k)&&(g[k]=f[k]);f.arguments=[];f.thisProgram="./this.program";f.quit=function(a,b){throw b;};f.preRun=[];f.postRun=[];var m=!1,q=!1,aa=!1,ba=!1;m="object"===typeof window;q="function"===typeof importScripts;aa="object"===typeof process&&"function"===typeof require&&!m&&!q;ba=!m&&!aa&&!q;var u="";
if(aa){u=__dirname+"/";var ca,da;f.read=function(a,b){ca||(ca=require("fs"));da||(da=require("path"));a=da.normalize(a);a=ca.readFileSync(a);return b?a:a.toString()};f.readBinary=function(a){a=f.read(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||v("Assertion failed: undefined");return a};1<process.argv.length&&(f.thisProgram=process.argv[1].replace(/\\/g,"/"));f.arguments=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=f);process.on("uncaughtException",function(a){if(!(a instanceof
w))throw a;});process.on("unhandledRejection",v);f.quit=function(a){process.exit(a)};f.inspect=function(){return"[Emscripten Module object]"}}else if(ba)"undefined"!=typeof read&&(f.read=function(a){return read(a)}),f.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||v("Assertion failed: undefined");return a},"undefined"!=typeof scriptArgs?f.arguments=scriptArgs:"undefined"!=typeof arguments&&(f.arguments=arguments),
"function"===typeof quit&&(f.quit=function(a){quit(a)});else if(m||q)q?u=self.location.href:document.currentScript&&(u=document.currentScript.src),u=0!==u.indexOf("blob:")?u.substr(0,u.lastIndexOf("/")+1):"",f.read=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},q&&(f.readBinary=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),f.readAsync=function(a,b,c){var d=new XMLHttpRequest;
d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)},f.setWindowTitle=function(a){document.title=a};var ea=f.print||("undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null),x=f.printErr||("undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||ea);for(k in g)g.hasOwnProperty(k)&&(f[k]=g[k]);g=void 0;
"object"!==typeof WebAssembly&&x("no native wasm support detected");var z,fa=!1,ha="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function A(a,b){if(a){var c=B,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&ha)a=ha.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var h=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var l=c[a++]&63;e=224==(e&240)?(e&15)<<12|h<<6|l:(e&7)<<18|h<<12|l<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
function C(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var l=a.charCodeAt(h);if(55296<=l&&57343>=l){var n=a.charCodeAt(++h);l=65536+((l&1023)<<10)|n&1023}if(127>=l){if(c>=d)break;b[c++]=l}else{if(2047>=l){if(c+1>=d)break;b[c++]=192|l>>6}else{if(65535>=l){if(c+2>=d)break;b[c++]=224|l>>12}else{if(c+3>=d)break;b[c++]=240|l>>18;b[c++]=128|l>>12&63}b[c++]=128|l>>6&63}b[c++]=128|l&63}}b[c]=0;return c-e}
function ia(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function ja(a){var b=ia(a)+1,c=ka(b);C(a,D,c,b);return c}function la(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,D,B,E,ma,F,na,G,H;
function oa(){f.HEAP8=D=new Int8Array(buffer);f.HEAP16=E=new Int16Array(buffer);f.HEAP32=F=new Int32Array(buffer);f.HEAPU8=B=new Uint8Array(buffer);f.HEAPU16=ma=new Uint16Array(buffer);f.HEAPU32=na=new Uint32Array(buffer);f.HEAPF32=G=new Float32Array(buffer);f.HEAPF64=H=new Float64Array(buffer)}var pa=f.TOTAL_MEMORY||33554432;5242880>pa&&x("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+pa+"! (TOTAL_STACK=5242880)");
f.buffer?buffer=f.buffer:"object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(z=new WebAssembly.Memory({initial:pa/65536}),buffer=z.buffer):buffer=new ArrayBuffer(pa);oa();F[7460]=5272752;function I(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.Mb;"number"===typeof c?void 0===b.Cb?f.dynCall_v(c):f.dynCall_vi(c,b.Cb):c(void 0===b.Cb?null:b.Cb)}}}var qa=[],ra=[],sa=[],ta=[],ua=[],va=!1;function wa(){var a=f.preRun.shift();qa.unshift(a)}
var xa=Math.floor,J=0,ya=null,K=null;f.preloadedImages={};f.preloadedAudios={};function za(){var a=L;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var L="mrt-sapp.wasm";if(!za()){var Aa=L;L=f.locateFile?f.locateFile(Aa,u):u+Aa}
function Ba(){try{if(f.wasmBinary)return new Uint8Array(f.wasmBinary);if(f.readBinary)return f.readBinary(L);throw"both async and sync fetching of the wasm failed";}catch(a){v(a)}}function Ca(){return f.wasmBinary||!m&&!q||"function"!==typeof fetch?new Promise(function(a){a(Ba())}):fetch(L,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+L+"'";return a.arrayBuffer()}).catch(function(){return Ba()})}
function Da(a){function b(a){f.asm=a.exports;J--;f.monitorRunDependencies&&f.monitorRunDependencies(J);0==J&&(null!==ya&&(clearInterval(ya),ya=null),K&&(a=K,K=null,a()))}function c(a){b(a.instance)}function d(a){return Ca().then(function(a){return WebAssembly.instantiate(a,e)}).then(a,function(a){x("failed to asynchronously prepare wasm: "+a);v(a)})}var e={env:a};J++;f.monitorRunDependencies&&f.monitorRunDependencies(J);if(f.instantiateWasm)try{return f.instantiateWasm(e,b)}catch(h){return x("Module.instantiateWasm callback failed with error: "+
h),!1}(function(){return f.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||za()||"function"!==typeof fetch?d(c):WebAssembly.instantiateStreaming(fetch(L,{credentials:"same-origin"}),e).then(c,function(a){x("wasm streaming compile failed: "+a);x("falling back to ArrayBuffer instantiation");d(c)})})();return{}}f.asm=function(a,b){b.memory=z;b.table=new WebAssembly.Table({initial:16,maximum:16,element:"anyfunc"});return Da(b)};ra.push({Mb:function(){Ea()}});
var Fa=0,Ha=0,M=0,Ia=0,Ja=0,Ka=null,La=null,Ma=!1;function Na(){for(var a=N.length-1;0<=a;--a)Oa(a);N=[];Pa=[]}var Pa=[];function Qa(){if(Ra&&Sa.vb)for(var a=0;a<Pa.length;++a){var b=Pa[a];Pa.splice(a,1);--a;b.Wb.apply(this,b.Qb)}}var Ra=0,Sa=null,N=[];function Ta(){return-1!==navigator.userAgent.indexOf("MSIE")||0<navigator.appVersion.indexOf("Trident/")}function Oa(a){var b=N[a];b.target.removeEventListener(b.ub,b.Kb,b.wb);N.splice(a,1)}
function O(a){function b(b){++Ra;Sa=a;Qa();a.zb(b);Qa();--Ra}if(a.xb)a.Kb=b,a.target.addEventListener(a.ub,b,a.wb),N.push(a),Ma||(ta.push(Na),Ma=!0);else for(var c=0;c<N.length;++c)N[c].target==a.target&&N[c].ub==a.ub&&Oa(c--)}var Ua=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function P(a){try{if(!a)return window;"number"===typeof a&&(a=Ua[a]||A(a));return"#window"===a?window:"#document"===a?document:"#screen"===a?screen:"#canvas"===a?f.canvas:"string"===typeof a?document.getElementById(a):a}catch(b){return null}}function Va(a){"number"===typeof a&&(a=A(a));return a&&"#canvas"!==a?"undefined"!==typeof Wa&&Xa[a]?Xa[a]:P(a):"undefined"!==typeof Wa&&Xa.canvas?Xa.canvas:f.canvas}
function Ya(a,b,c,d,e,h){Fa||(Fa=Q(164));a={target:P(a),vb:Ta()?!1:!0,ub:h,xb:d,zb:function(a){a=a||window.event;var c=Fa;C(a.key?a.key:"",B,c+0,32);C(a.code?a.code:"",B,c+32,32);F[c+64>>2]=a.location;F[c+68>>2]=a.ctrlKey;F[c+72>>2]=a.shiftKey;F[c+76>>2]=a.altKey;F[c+80>>2]=a.metaKey;F[c+84>>2]=a.repeat;C(a.locale?a.locale:"",B,c+88,32);C(a.char?a.char:"",B,c+120,32);F[c+152>>2]=a.charCode;F[c+156>>2]=a.keyCode;F[c+160>>2]=a.which;R(d,e,c,b)&&a.preventDefault()},wb:c};O(a)}
function Za(a,b,c){H[a>>3]=window.performance&&window.performance.now?window.performance.now():Date.now();F[a+8>>2]=b.screenX;F[a+12>>2]=b.screenY;F[a+16>>2]=b.clientX;F[a+20>>2]=b.clientY;F[a+24>>2]=b.ctrlKey;F[a+28>>2]=b.shiftKey;F[a+32>>2]=b.altKey;F[a+36>>2]=b.metaKey;E[a+40>>1]=b.button;E[a+42>>1]=b.buttons;F[a+44>>2]=b.movementX||b.mozMovementX||b.webkitMovementX||b.screenX-Ka;F[a+48>>2]=b.movementY||b.mozMovementY||b.webkitMovementY||b.screenY-La;if(f.canvas){var d=f.canvas.getBoundingClientRect();
F[a+60>>2]=b.clientX-d.left;F[a+64>>2]=b.clientY-d.top}else F[a+60>>2]=0,F[a+64>>2]=0;c?(d=c.getBoundingClientRect?c.getBoundingClientRect():{left:0,top:0},F[a+52>>2]=b.clientX-d.left,F[a+56>>2]=b.clientY-d.top):(F[a+52>>2]=0,F[a+56>>2]=0);"wheel"!==b.type&&"mousewheel"!==b.type&&(Ka=b.screenX,La=b.screenY)}
function $a(a,b,c,d,e,h){Ha||(Ha=Q(72));a=P(a);c={target:a,vb:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,ub:h,xb:d,zb:function(c){c=c||window.event;Za(Ha,c,a);R(d,e,Ha,b)&&c.preventDefault()},wb:c};Ta()&&"mousedown"==h&&(c.vb=!1);O(c)}
function ab(a,b,c,d){Ia||(Ia=Q(36));a=P(a);O({target:a,vb:!1,ub:"resize",xb:d,zb:function(c){c=c||window.event;if(c.target==a){var e=0<window.pageXOffset||0<window.pageYOffset?[window.pageXOffset,window.pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.scrollLeft|0,document.body.scrollTop|0],l=Ia;F[l>>2]=c.detail;F[l+4>>2]=document.body.clientWidth;
F[l+8>>2]=document.body.clientHeight;F[l+12>>2]=window.innerWidth;F[l+16>>2]=window.innerHeight;F[l+20>>2]=window.outerWidth;F[l+24>>2]=window.outerHeight;F[l+28>>2]=e[0];F[l+32>>2]=e[1];R(d,10,l,b)&&c.preventDefault()}},wb:c})}
function bb(a,b,c,d,e,h){Ja||(Ja=Q(1684));a=P(a);O({target:a,vb:"touchstart"==h||"touchend"==h,ub:h,xb:d,zb:function(c){c=c||window.event;for(var h={},l=0;l<c.touches.length;++l){var r=c.touches[l];h[r.identifier]=r}for(l=0;l<c.changedTouches.length;++l)r=c.changedTouches[l],h[r.identifier]=r,r.Jb=!0;for(l=0;l<c.targetTouches.length;++l)r=c.targetTouches[l],h[r.identifier].Ob=!0;var t=r=Ja;F[t+4>>2]=c.ctrlKey;F[t+8>>2]=c.shiftKey;F[t+12>>2]=c.altKey;F[t+16>>2]=c.metaKey;t+=20;var Ga=f.canvas?f.canvas.getBoundingClientRect():
void 0,eb=a.getBoundingClientRect?a.getBoundingClientRect():{left:0,top:0},fb=0;for(l in h){var y=h[l];F[t>>2]=y.identifier;F[t+4>>2]=y.screenX;F[t+8>>2]=y.screenY;F[t+12>>2]=y.clientX;F[t+16>>2]=y.clientY;F[t+20>>2]=y.pageX;F[t+24>>2]=y.pageY;F[t+28>>2]=y.Jb;F[t+32>>2]=y.Ob;Ga?(F[t+44>>2]=y.clientX-Ga.left,F[t+48>>2]=y.clientY-Ga.top):(F[t+44>>2]=0,F[t+48>>2]=0);F[t+36>>2]=y.clientX-eb.left;F[t+40>>2]=y.clientY-eb.top;t+=52;if(32<=++fb)break}F[r>>2]=fb;R(d,e,r,b)&&c.preventDefault()},wb:c})}
function cb(a,b,c,d,e,h){a||(a=f.canvas);a={target:P(a),vb:!1,ub:h,xb:d,zb:function(a){a=a||window.event;R(d,e,0,b)&&a.preventDefault()},wb:c};O(a)}
function db(a,b,c,d,e){function h(c){c=c||window.event;Za(M,c,a);H[M+72>>3]=c.wheelDeltaX||0;H[M+80>>3]=-(c.wheelDeltaY?c.wheelDeltaY:c.wheelDelta);H[M+88>>3]=0;F[M+96>>2]=0;R(d,9,M,b)&&c.preventDefault()}function l(c){c=c||window.event;var e=M;Za(e,c,a);H[e+72>>3]=c.deltaX;H[e+80>>3]=c.deltaY;H[e+88>>3]=c.deltaZ;F[e+96>>2]=c.deltaMode;R(d,9,e,b)&&c.preventDefault()}M||(M=Q(104));O({target:a,vb:!0,ub:e,xb:d,zb:"wheel"==e?l:h,wb:c})}
var gb=1,hb=0,ib=[],S=[],jb=[],kb=[],T=[],U=[],V=[],lb=[],mb={},W=null,Xa={},nb={},ob={};function X(a){hb||(hb=a)}function pb(a){for(var b=gb++,c=a.length;c<b;c++)a[c]=null;return b}var qb=null,Y=[0];function rb(a,b){function c(){var a=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return a?parseInt(a[2],10):!1}var d=Q(8),e={handle:d,attributes:b,version:b.Hb,Eb:a};e.tb=2<=e.version&&(!1===c()||58<=c());a.canvas&&(a.canvas.Pb=e);mb[d]=e;("undefined"===typeof b.Gb||b.Gb)&&sb(e);return d}
function sb(a){a||(a=W);if(!a.Nb){a.Nb=!0;var b=a.Eb;if(2>a.version){var c=b.getExtension("ANGLE_instanced_arrays");c&&(b.vertexAttribDivisor=function(a,b){c.vertexAttribDivisorANGLE(a,b)},b.drawArraysInstanced=function(a,b,d,e){c.drawArraysInstancedANGLE(a,b,d,e)},b.drawElementsInstanced=function(a,b,d,e,h){c.drawElementsInstancedANGLE(a,b,d,e,h)});var d=b.getExtension("OES_vertex_array_object");d&&(b.createVertexArray=function(){return d.createVertexArrayOES()},b.deleteVertexArray=function(a){d.deleteVertexArrayOES(a)},
b.bindVertexArray=function(a){d.bindVertexArrayOES(a)},b.isVertexArray=function(a){return d.isVertexArrayOES(a)});var e=b.getExtension("WEBGL_draw_buffers");e&&(b.drawBuffers=function(a,b){e.drawBuffersWEBGL(a,b)})}b.Sb=b.getExtension("EXT_disjoint_timer_query");var h="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");
(a=b.getSupportedExtensions())&&0<a.length&&b.getSupportedExtensions().forEach(function(a){-1!=h.indexOf(a)&&b.getExtension(a)})}}var Wa={},tb,ub,vb=["default","low-power","high-performance"],wb=[];function xb(a,b,c,d){for(var e=0;e<a;e++){var h=Z[c](),l=h&&pb(d);h?(h.name=l,d[l]=h):X(1282);F[b+4*e>>2]=l}}
function yb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>W.version){X(1282);return}d=Z.getSupportedExtensions();c=null===d?0:2*d.length;break;case 33307:case 33308:if(2>W.version){X(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":X(1280);return;case "object":if(null===
d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 35097:case 36389:case 34068:c=0;break;default:X(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)F[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){X(1280);x("GL_INVALID_ENUM in glGetIntegerv: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:X(1280);return}F[b>>2]=c}else X(1281)}
function zb(a){var b=ia(a)+1,c=Q(b);C(a,B,c,b);return c}var Ab={6402:1,6403:1,6406:1,6407:3,6408:4,6409:1,6410:2,33319:2,33320:2,35904:3,35906:4,36244:1,36248:3,36249:4},Bb={5120:1,5121:1,5122:2,5123:2,5124:4,5125:4,5126:4,5131:2,32819:2,32820:2,33635:2,33640:4,34042:4,35899:4,35902:4,36193:2};
function Cb(a,b,c,d,e){if(b=Ab[b]*Bb[a])switch(c=e+d*(c*b+4-1&-4),a){case 5120:return D.subarray(e,c);case 5121:return B.subarray(e,c);case 5122:return E.subarray(e>>1,c>>1);case 5124:return F.subarray(e>>2,c>>2);case 5126:return G.subarray(e>>2,c>>2);case 5125:case 34042:case 35902:case 33640:case 35899:case 34042:return na.subarray(e>>2,c>>2);case 5123:case 33635:case 32819:case 32820:case 36193:case 5131:return ma.subarray(e>>1,c>>1);default:X(1280)}else X(1280)}
function Db(a){switch(a){case 5120:return D;case 5121:return B;case 5122:return E;case 5123:case 33635:case 32819:case 32820:case 36193:case 5131:return ma;case 5124:return F;case 5125:case 34042:case 35902:case 33640:case 35899:case 34042:return na;case 5126:return G}}var Eb={5122:1,5123:1,5124:2,5125:2,5126:2,5131:1,32819:1,32820:1,33635:1,33640:2,34042:2,35899:2,35902:2,36193:1};function Fb(){f.___errno_location&&(F[f.___errno_location()>>2]=12)}
function Gb(a){a=la(a);var b=buffer.byteLength;try{return-1!==z.grow((a-b)/65536)?(buffer=z.buffer,!0):!1}catch(c){return!1}}var Z;qb=new Float32Array(256);for(var Hb=0;256>Hb;Hb++)Y[Hb]=qb.subarray(0,Hb+1);for(var Ib=0;32>Ib;Ib++)wb.push(Array(Ib));
var Lb=f.asm({},{ba:function(){return window.devicePixelRatio||1},da:function(a,b,c){a=a?P(a):f.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),H[b>>3]=a.right-a.left,H[c>>3]=a.bottom-a.top):(H[b>>3]=a.clientWidth,H[c>>3]=a.clientHeight);return 0},Ya:function(a,b,c){B.set(B.subarray(b,b+c),a)},Na:function(a,b){function c(d){Jb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},_:function(a,b,c){a=Va(a);if(!a)return-4;a.width=b;a.height=c;return 0},Wa:function(a,
b,c,d){Ya(a,b,c,d,2,"keydown");return 0},Ua:function(a,b,c,d){Ya(a,b,c,d,1,"keypress");return 0},Va:function(a,b,c,d){Ya(a,b,c,d,3,"keyup");return 0},va:function(a,b,c,d){$a(a,b,c,d,5,"mousedown");return 0},gb:function(a,b,c,d){$a(a,b,c,d,33,"mouseenter");return 0},ab:function(a,b,c,d){$a(a,b,c,d,34,"mouseleave");return 0},na:function(a,b,c,d){$a(a,b,c,d,8,"mousemove");return 0},pa:function(a,b,c,d){$a(a,b,c,d,6,"mouseup");return 0},hb:function(a,b,c,d){ab(a,b,c,d);return 0},Qa:function(a,b,c,d){bb(a,
b,c,d,25,"touchcancel");return 0},Ra:function(a,b,c,d){bb(a,b,c,d,23,"touchend");return 0},Sa:function(a,b,c,d){bb(a,b,c,d,24,"touchmove");return 0},Ta:function(a,b,c,d){bb(a,b,c,d,22,"touchstart");return 0},Pa:function(a,b,c,d){cb(a,b,c,d,31,"webglcontextlost");return 0},Oa:function(a,b,c,d){cb(a,b,c,d,32,"webglcontextrestored");return 0},Xa:function(a,b,c,d){a=P(a);return"undefined"!==typeof a.onwheel?(db(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(db(a,b,c,d,"mousewheel"),0):-1},R:function(a,
b){var c={};b>>=2;c.alpha=!!F[b];c.depth=!!F[b+1];c.stencil=!!F[b+2];c.antialias=!!F[b+3];c.premultipliedAlpha=!!F[b+4];c.preserveDrawingBuffer=!!F[b+5];c.powerPreference=vb[F[b+6]];c.failIfMajorPerformanceCaveat=!!F[b+7];c.Hb=F[b+8];c.Tb=F[b+9];c.Gb=F[b+10];c.Lb=F[b+11];c.Ub=F[b+12];c.Vb=F[b+13];a=Va(a);!a||c.Lb?c=0:c=(a=1<c.Hb?a.getContext("webgl2",c):a.getContext("webgl",c)||a.getContext("experimental-webgl",c))&&rb(a,c);return c},Ha:function(a){a>>=2;for(var b=0;14>b;++b)F[a+b]=0;F[a]=F[a+1]=
F[a+3]=F[a+4]=F[a+8]=F[a+10]=1},xa:function(a){W=mb[a];f.Rb=Z=W&&W.Eb;return!a||Z?0:-5},Za:xa,n:function(a){Z.activeTexture(a)},Q:function(a,b){Z.attachShader(S[a],V[b])},f:function(a,b){35051==a?Z.Fb=b:35052==a&&(Z.yb=b);Z.bindBuffer(a,ib[b])},d:function(a,b){Z.bindFramebuffer(a,jb[b])},U:function(a,b){Z.bindRenderbuffer(a,kb[b])},c:function(a,b){Z.bindTexture(a,T[b])},aa:function(a){Z.bindVertexArray(lb[a])},I:function(a,b,c,d){Z.blendColor(a,b,c,d)},J:function(a,b){Z.blendEquationSeparate(a,b)},
K:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},w:function(a,b,c,d,e,h,l,n,p,r){Z.blitFramebuffer(a,b,c,d,e,h,l,n,p,r)},X:function(a,b,c,d){W.tb?c?Z.bufferData(a,B,d,c,b):Z.bufferData(a,b,d):Z.bufferData(a,c?B.subarray(c,c+b):b,d)},W:function(a,b,c,d){W.tb?Z.bufferSubData(a,b,B,d,c):Z.bufferSubData(a,b,B.subarray(d,d+c))},p:function(a){return Z.checkFramebufferStatus(a)},N:function(a){Z.clear(a)},ra:function(a,b,c,d){Z.clearBufferfi(a,b,c,d)},o:function(a,b,c){Z.clearBufferfv(a,b,G,c>>2)},qa:function(a,
b,c){Z.clearBufferuiv(a,b,na,c>>2)},ua:function(a,b,c,d){Z.clearColor(a,b,c,d)},ta:function(a){Z.clearDepth(a)},sa:function(a){Z.clearStencil(a)},B:function(a,b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},$a:function(a){Z.compileShader(V[a])},Ga:function(a,b,c,d,e,h,l,n){W.tb?Z.yb?Z.compressedTexImage2D(a,b,c,d,e,h,l,n):Z.compressedTexImage2D(a,b,c,d,e,h,B,n,l):Z.compressedTexImage2D(a,b,c,d,e,h,n?B.subarray(n,n+l):null)},Ea:function(a,b,c,d,e,h,l,n,p){W.tb?Z.yb?Z.compressedTexImage3D(a,b,c,d,e,h,l,n,p):Z.compressedTexImage3D(a,
b,c,d,e,h,l,B,p,n):Z.compressedTexImage3D(a,b,c,d,e,h,l,p?B.subarray(p,p+n):null)},Ba:function(){var a=pb(S),b=Z.createProgram();b.name=a;S[a]=b;return a},cb:function(a){var b=pb(V);V[b]=Z.createShader(a);return b},H:function(a){Z.cullFace(a)},Ja:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=ib[d];e&&(Z.deleteBuffer(e),e.name=0,ib[d]=null,d==tb&&(tb=0),d==ub&&(ub=0),d==Z.Fb&&(Z.Fb=0),d==Z.yb&&(Z.yb=0))}},k:function(a,b){for(var c=0;c<a;++c){var d=F[b+4*c>>2],e=jb[d];e&&(Z.deleteFramebuffer(e),
e.name=0,jb[d]=null)}},Z:function(a){if(a){var b=S[a];b?(Z.deleteProgram(b),b.name=0,S[a]=null,nb[a]=null):X(1281)}},r:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=kb[d];e&&(Z.deleteRenderbuffer(e),e.name=0,kb[d]=null)}},C:function(a){if(a){var b=V[a];b?(Z.deleteShader(b),V[a]=null):X(1281)}},$:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=T[d];e&&(Z.deleteTexture(e),e.name=0,T[d]=null)}},Ka:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2];Z.deleteVertexArray(lb[d]);lb[d]=null}},
z:function(a){Z.depthFunc(a)},A:function(a){Z.depthMask(!!a)},e:function(a){Z.disable(a)},a:function(a){Z.disableVertexAttribArray(a)},fb:function(a,b,c){Z.drawArrays(a,b,c)},j:function(a,b){for(var c=wb[a],d=0;d<a;d++)c[d]=F[b+4*d>>2];Z.drawBuffers(c)},ea:function(a,b,c,d){Z.drawElements(a,b,c,d)},g:function(a){Z.enable(a)},ka:function(a){Z.enableVertexAttribArray(a)},l:function(a,b,c,d){Z.framebufferRenderbuffer(a,b,c,kb[d])},b:function(a,b,c,d,e){Z.framebufferTexture2D(a,b,c,T[d],e)},h:function(a,
b,c,d,e){Z.framebufferTextureLayer(a,b,T[c],d,e)},G:function(a){Z.frontFace(a)},Y:function(a,b){xb(a,b,"createBuffer",ib)},q:function(a,b){xb(a,b,"createFramebuffer",jb)},V:function(a,b){xb(a,b,"createRenderbuffer",kb)},Ia:function(a,b){xb(a,b,"createTexture",T)},La:function(a,b){xb(a,b,"createVertexArray",lb)},ya:function(a,b){return Z.getAttribLocation(S[a],A(b))},s:function(a,b){yb(a,b)},za:function(a,b,c,d){a=Z.getProgramInfoLog(S[a]);null===a&&(a="(unknown error)");0<b&&d?(b=C(a,B,d,b),c&&(F[c>>
2]=b)):c&&(F[c>>2]=0)},P:function(a,b,c){if(c)if(a>=gb)X(1281);else{var d=nb[a];if(d)if(35716==b)a=Z.getProgramInfoLog(S[a]),null===a&&(a="(unknown error)"),F[c>>2]=a.length+1;else if(35719==b)F[c>>2]=d.Db;else if(35722==b){if(-1==d.Ab){a=S[a];var e=Z.getProgramParameter(a,35721);for(b=d.Ab=0;b<e;++b)d.Ab=Math.max(d.Ab,Z.getActiveAttrib(a,b).name.length+1)}F[c>>2]=d.Ab}else if(35381==b){if(-1==d.Bb)for(a=S[a],e=Z.getProgramParameter(a,35382),b=d.Bb=0;b<e;++b)d.Bb=Math.max(d.Bb,Z.getActiveUniformBlockName(a,
b).length+1);F[c>>2]=d.Bb}else F[c>>2]=Z.getProgramParameter(S[a],b);else X(1282)}else X(1281)},_a:function(a,b,c,d){a=Z.getShaderInfoLog(V[a]);null===a&&(a="(unknown error)");0<b&&d?(b=C(a,B,d,b),c&&(F[c>>2]=b)):c&&(F[c>>2]=0)},ca:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(V[a]),null===a&&(a="(unknown error)"),F[c>>2]=a.length+1):35720==b?(a=Z.getShaderSource(V[a]),F[c>>2]=null===a||0==a.length?0:a.length+1):F[c>>2]=Z.getShaderParameter(V[a],b):X(1281)},Ma:function(a){if(ob[a])return ob[a];
switch(a){case 7939:var b=Z.getSupportedExtensions();for(var c=[],d=0;d<b.length;++d)c.push(b[d]),c.push("GL_"+b[d]);b=zb(c.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Z.getParameter(a))||X(1280);b=zb(b);break;case 7938:b=Z.getParameter(Z.VERSION);b=2<=W.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=zb(b);break;case 35724:b=Z.getParameter(Z.SHADING_LANGUAGE_VERSION);c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+
c[1]+" ("+b+")");b=zb(b);break;default:return X(1280),0}return ob[a]=b},m:function(a,b){b=A(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=nb[a]&&nb[a].Ib[b])&&0<=c&&c<a[0]?a[1]+c:-1},Aa:function(a){Z.linkProgram(S[a]);var b=S[a];a=nb[a]={Ib:{},Db:0,Ab:-1,Bb:-1};for(var c=a.Ib,d=Z.getProgramParameter(b,35718),e=0;e<d;++e){var h=Z.getActiveUniform(b,e),l=h.name;a.Db=Math.max(a.Db,l.length+1);"]"==l.slice(-1)&&(l=l.slice(0,l.lastIndexOf("[")));
var n=Z.getUniformLocation(b,l);if(n){var p=pb(U);c[l]=[h.size,p];U[p]=n;for(var r=1;r<h.size;++r)n=Z.getUniformLocation(b,l+"["+r+"]"),p=pb(U),U[p]=n}}},F:function(a,b){Z.polygonOffset(a,b)},x:function(a){Z.readBuffer(a)},Ca:function(a,b,c,d){Z.renderbufferStorage(a,b,c,d)},T:function(a,b,c,d,e){Z.renderbufferStorageMultisample(a,b,c,d,e)},wa:function(a,b,c,d){Z.scissor(a,b,c,d)},bb:function(a,b,c,d){for(var e="",h=0;h<b;++h){var l=d?F[d+4*h>>2]:-1;e+=A(F[c+4*h>>2],0>l?void 0:l)}Z.shaderSource(V[a],
e)},eb:function(a,b,c){Z.stencilFunc(a,b,c)},M:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},y:function(a){Z.stencilMask(a)},db:function(a,b,c){Z.stencilOp(a,b,c)},L:function(a,b,c,d){Z.stencilOpSeparate(a,b,c,d)},Fa:function(a,b,c,d,e,h,l,n,p){W.tb?Z.yb?Z.texImage2D(a,b,c,d,e,h,l,n,p):0!=p?Z.texImage2D(a,b,c,d,e,h,l,n,Db(n),p>>(Eb[n]|0)):Z.texImage2D(a,b,c,d,e,h,l,n,null):Z.texImage2D(a,b,c,d,e,h,l,n,p?Cb(n,l,d,e,p):null)},Da:function(a,b,c,d,e,h,l,n,p,r){Z.yb?Z.texImage3D(a,b,c,d,e,h,l,n,p,
r):0!=r?Z.texImage3D(a,b,c,d,e,h,l,n,p,Db(p),r>>(Eb[p]|0)):Z.texImage3D(a,b,c,d,e,h,l,n,p,null)},S:function(a,b,c){Z.texParameterf(a,b,c)},i:function(a,b,c){Z.texParameteri(a,b,c)},ja:function(a,b,c){if(W.tb)Z.uniform1fv(U[a],G,c>>2,b);else{if(256>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=G[c+4*e>>2];else d=G.subarray(c>>2,c+4*b>>2);Z.uniform1fv(U[a],d)}},E:function(a,b){Z.uniform1i(U[a],b)},ia:function(a,b,c){if(W.tb)Z.uniform2fv(U[a],G,c>>2,2*b);else{if(256>=2*b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=
G[c+4*e>>2],d[e+1]=G[c+(4*e+4)>>2];else d=G.subarray(c>>2,c+8*b>>2);Z.uniform2fv(U[a],d)}},ha:function(a,b,c){if(W.tb)Z.uniform3fv(U[a],G,c>>2,3*b);else{if(256>=3*b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=G[c+4*e>>2],d[e+1]=G[c+(4*e+4)>>2],d[e+2]=G[c+(4*e+8)>>2];else d=G.subarray(c>>2,c+12*b>>2);Z.uniform3fv(U[a],d)}},ga:function(a,b,c){if(W.tb)Z.uniform4fv(U[a],G,c>>2,4*b);else{if(256>=4*b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=G[c+4*e>>2],d[e+1]=G[c+(4*e+4)>>2],d[e+2]=G[c+(4*e+8)>>2],d[e+3]=G[c+
(4*e+12)>>2];else d=G.subarray(c>>2,c+16*b>>2);Z.uniform4fv(U[a],d)}},fa:function(a,b,c,d){if(W.tb)Z.uniformMatrix4fv(U[a],!!c,G,d>>2,16*b);else{if(256>=16*b)for(var e=Y[16*b-1],h=0;h<16*b;h+=16)e[h]=G[d+4*h>>2],e[h+1]=G[d+(4*h+4)>>2],e[h+2]=G[d+(4*h+8)>>2],e[h+3]=G[d+(4*h+12)>>2],e[h+4]=G[d+(4*h+16)>>2],e[h+5]=G[d+(4*h+20)>>2],e[h+6]=G[d+(4*h+24)>>2],e[h+7]=G[d+(4*h+28)>>2],e[h+8]=G[d+(4*h+32)>>2],e[h+9]=G[d+(4*h+36)>>2],e[h+10]=G[d+(4*h+40)>>2],e[h+11]=G[d+(4*h+44)>>2],e[h+12]=G[d+(4*h+48)>>2],
e[h+13]=G[d+(4*h+52)>>2],e[h+14]=G[d+(4*h+56)>>2],e[h+15]=G[d+(4*h+60)>>2];else e=G.subarray(d>>2,d+64*b>>2);Z.uniformMatrix4fv(U[a],!!c,e)}},oa:function(a){Z.useProgram(S[a])},la:function(a,b){Z.vertexAttribDivisor(a,b)},ma:function(a,b,c,d,e,h){Z.vertexAttribPointer(a,b,c,!!d,e,h)},O:function(a,b,c,d){Z.viewport(a,b,c,d)},v:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Kb()});document.body.append(a)},
u:function(){document.getElementById("_sokol_app_input_element").focus()},t:function(){document.getElementById("_sokol_app_input_element").blur()},D:function(a){a|=0;var b=D.length|0;var c=F[7460]|0;var d=c+a|0;if(0<(a|0)&(d|0)<(c|0)|0>(d|0))return v("OOM"),0,Fb(),-1;if(a=(d|0)>(b|0)){a=d|0;if(2147418112<a)a=!1;else{for(b=Math.max(D.length,16777216);b<a;)536870912>=b?b=la(2*b):b=Math.min(la((3*b+2147483648)/4),2147418112);Gb(b)?(oa(),a=!0):a=!1}a=!(a|0)}if(a)return Fb(),-1;F[7460]=d|0;return c|0}},
buffer);f.asm=Lb;var Ea=f.___wasm_call_ctors=function(){return f.asm.ib.apply(null,arguments)},Kb=f.__sapp_emsc_notify_keyboard_hidden=function(){return f.asm.jb.apply(null,arguments)};f._main=function(){return f.asm.kb.apply(null,arguments)};var Q=f._malloc=function(){return f.asm.lb.apply(null,arguments)};f._free=function(){return f.asm.mb.apply(null,arguments)};f.__saudio_emsc_pull=function(){return f.asm.nb.apply(null,arguments)};var ka=f.stackAlloc=function(){return f.asm.ob.apply(null,arguments)};
f.dynCall_vi=function(){return f.asm.pb.apply(null,arguments)};f.dynCall_v=function(){return f.asm.qb.apply(null,arguments)};var R=f.dynCall_iiii=function(){return f.asm.rb.apply(null,arguments)},Jb=f.dynCall_idi=function(){return f.asm.sb.apply(null,arguments)};f.asm=Lb;function w(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}w.prototype=Error();w.prototype.constructor=w;K=function Mb(){f.calledRun||Nb();f.calledRun||(K=Mb)};
f.callMain=function(a){a=a||[];va||(va=!0,I(ra));var b=a.length+1,c=ka(4*(b+1));F[c>>2]=ja(f.thisProgram);for(var d=1;d<b;d++)F[(c>>2)+d]=ja(a[d-1]);F[(c>>2)+b]=0;try{var e=f._main(b,c,0);if(!f.noExitRuntime||0!==e){if(!f.noExitRuntime&&(fa=!0,f.onExit))f.onExit(e);f.quit(e,new w(e))}}catch(h){h instanceof w||("SimulateInfiniteLoop"==h?f.noExitRuntime=!0:((a=h)&&"object"===typeof h&&h.stack&&(a=[h,h.stack]),x("exception thrown: "+a),f.quit(1,h)))}finally{}};
function Nb(a){function b(){if(!f.calledRun&&(f.calledRun=!0,!fa)){va||(va=!0,I(ra));I(sa);if(f.onRuntimeInitialized)f.onRuntimeInitialized();f._main&&Ob&&f.callMain(a);if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;){var b=f.postRun.shift();ua.unshift(b)}I(ua)}}a=a||f.arguments;if(!(0<J)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)wa();I(qa);0<J||f.calledRun||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},
1);b()},1)):b())}}f.run=Nb;function v(a){if(f.onAbort)f.onAbort(a);void 0!==a?(ea(a),x(a),a=JSON.stringify(a)):a="";fa=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}f.abort=v;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Ob=!0;f.noInitialRun&&(Ob=!1);f.noExitRuntime=!0;Nb();
