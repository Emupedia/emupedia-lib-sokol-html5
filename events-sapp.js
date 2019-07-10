var f;f||(f=typeof Module !== 'undefined' ? Module : {});var h={},k;for(k in f)f.hasOwnProperty(k)&&(h[k]=f[k]);f.arguments=[];f.thisProgram="./this.program";f.quit=function(a,b){throw b;};f.preRun=[];f.postRun=[];var m=!1,t=!1,aa=!1,ba=!1,ca=!1;m="object"===typeof window;t="function"===typeof importScripts;aa=(ba="object"===typeof process&&"function"===typeof require)&&!m&&!t;ca=!m&&!aa&&!t;var u="";
if(aa){u=__dirname+"/";var da,ea;f.read=function(a,b){da||(da=require("fs"));ea||(ea=require("path"));a=ea.normalize(a);a=da.readFileSync(a);return b?a:a.toString()};f.readBinary=function(a){a=f.read(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||v("Assertion failed: undefined");return a};1<process.argv.length&&(f.thisProgram=process.argv[1].replace(/\\/g,"/"));f.arguments=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=f);process.on("uncaughtException",function(a){if(!(a instanceof
w))throw a;});process.on("unhandledRejection",v);f.quit=function(a){process.exit(a)};f.inspect=function(){return"[Emscripten Module object]"}}else if(ca)"undefined"!=typeof read&&(f.read=function(a){return read(a)}),f.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||v("Assertion failed: undefined");return a},"undefined"!=typeof scriptArgs?f.arguments=scriptArgs:"undefined"!=typeof arguments&&(f.arguments=arguments),
"function"===typeof quit&&(f.quit=function(a){quit(a)});else if(m||t)t?u=self.location.href:document.currentScript&&(u=document.currentScript.src),u=0!==u.indexOf("blob:")?u.substr(0,u.lastIndexOf("/")+1):"",f.read=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},t&&(f.readBinary=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),f.readAsync=function(a,b,c){var d=new XMLHttpRequest;
d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)},f.setWindowTitle=function(a){document.title=a};var fa=f.print||("undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null),x=f.printErr||("undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||fa);for(k in h)h.hasOwnProperty(k)&&(f[k]=h[k]);h=void 0;
"object"!==typeof WebAssembly&&x("no native wasm support detected");var z,ha=!1,ia="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ja(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&ia)return ia.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var g=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|g);else{var l=a[b++]&63;e=224==(e&240)?(e&15)<<12|g<<6|l:(e&7)<<18|g<<12|l<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function A(a,b){return a?ja(B,a,b):""}
function C(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var g=0;g<a.length;++g){var l=a.charCodeAt(g);if(55296<=l&&57343>=l){var n=a.charCodeAt(++g);l=65536+((l&1023)<<10)|n&1023}if(127>=l){if(c>=d)break;b[c++]=l}else{if(2047>=l){if(c+1>=d)break;b[c++]=192|l>>6}else{if(65535>=l){if(c+2>=d)break;b[c++]=224|l>>12}else{if(c+3>=d)break;b[c++]=240|l>>18;b[c++]=128|l>>12&63}b[c++]=128|l>>6&63}b[c++]=128|l&63}}b[c]=0;return c-e}
function ka(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function la(a){var b=ka(a)+1,c=ma(b);C(a,D,c,b);return c}function na(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,D,B,E,oa,F,pa,G,H;
function qa(){f.HEAP8=D=new Int8Array(buffer);f.HEAP16=E=new Int16Array(buffer);f.HEAP32=F=new Int32Array(buffer);f.HEAPU8=B=new Uint8Array(buffer);f.HEAPU16=oa=new Uint16Array(buffer);f.HEAPU32=pa=new Uint32Array(buffer);f.HEAPF32=G=new Float32Array(buffer);f.HEAPF64=H=new Float64Array(buffer)}var ra=f.TOTAL_MEMORY||33554432;5242880>ra&&x("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+ra+"! (TOTAL_STACK=5242880)");
f.buffer?buffer=f.buffer:"object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(z=new WebAssembly.Memory({initial:ra/65536}),buffer=z.buffer):buffer=new ArrayBuffer(ra);qa();F[11868]=5290384;function sa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.Wb;"number"===typeof c?void 0===b.Lb?f.dynCall_v(c):f.dynCall_vi(c,b.Lb):c(void 0===b.Lb?null:b.Lb)}}}var ta=[],ua=[],va=[],wa=[],xa=[];function ya(){var a=f.preRun.shift();ta.unshift(a)}
var za=Math.abs,Aa=Math.floor,I=0,Ba=null,J=null;f.preloadedImages={};f.preloadedAudios={};function Ca(){var a=K;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var K="events-sapp.wasm";if(!Ca()){var Da=K;K=f.locateFile?f.locateFile(Da,u):u+Da}
function Ea(){try{if(f.wasmBinary)return new Uint8Array(f.wasmBinary);if(f.readBinary)return f.readBinary(K);throw"both async and sync fetching of the wasm failed";}catch(a){v(a)}}function Fa(){return f.wasmBinary||!m&&!t||"function"!==typeof fetch?new Promise(function(a){a(Ea())}):fetch(K,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+K+"'";return a.arrayBuffer()}).catch(function(){return Ea()})}
function Ga(a){function b(a){f.asm=a.exports;I--;f.monitorRunDependencies&&f.monitorRunDependencies(I);0==I&&(null!==Ba&&(clearInterval(Ba),Ba=null),J&&(a=J,J=null,a()))}function c(a){b(a.instance)}function d(a){return Fa().then(function(a){return WebAssembly.instantiate(a,e)}).then(a,function(a){x("failed to asynchronously prepare wasm: "+a);v(a)})}var e={env:a};I++;f.monitorRunDependencies&&f.monitorRunDependencies(I);if(f.instantiateWasm)try{return f.instantiateWasm(e,b)}catch(g){return x("Module.instantiateWasm callback failed with error: "+
g),!1}(function(){if(f.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||Ca()||"function"!==typeof fetch)return d(c);fetch(K,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,e).then(c,function(a){x("wasm streaming compile failed: "+a);x("falling back to ArrayBuffer instantiation");d(c)})})})();return{}}f.asm=function(a,b){b.memory=z;b.table=new WebAssembly.Table({initial:36,maximum:36,element:"anyfunc"});return Ga(b)};ua.push({Wb:function(){Ia()}});
var Ja=[null,[],[]],L=0;function M(){L+=4;return F[L-4>>2]}var Ka={};function La(){f.___errno_location&&(F[f.___errno_location()>>2]=12)}var Ma=0,Na=0,N=0,Oa=0,Pa=0,Qa=null,Ra=null,Sa=!1;function Ta(){for(var a=O.length-1;0<=a;--a)Ua(a);O=[];Va=[]}var Va=[];function Wa(){if(Xa&&Ya.Db)for(var a=0;a<Va.length;++a){var b=Va[a];Va.splice(a,1);--a;b.hc.apply(this,b.$b)}}var Xa=0,Ya=null,O=[];function Za(){return-1!==navigator.userAgent.indexOf("MSIE")||0<navigator.appVersion.indexOf("Trident/")}
function Ua(a){var b=O[a];b.target.removeEventListener(b.Cb,b.Ub,b.Eb);O.splice(a,1)}function P(a){function b(b){++Xa;Ya=a;Wa();a.Hb(b);Wa();--Xa}if(a.Fb)a.Ub=b,a.target.addEventListener(a.Cb,b,a.Eb),O.push(a),Sa||(wa.push(Ta),Sa=!0);else for(var c=0;c<O.length;++c)O[c].target==a.target&&O[c].Cb==a.Cb&&Ua(c--)}var $a=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function Q(a){try{if(!a)return window;"number"===typeof a&&(a=$a[a]||A(a));return"#window"===a?window:"#document"===a?document:"#screen"===a?screen:"#canvas"===a?f.canvas:"string"===typeof a?document.getElementById(a):a}catch(b){return null}}function ab(a){"number"===typeof a&&(a=A(a));return a&&"#canvas"!==a?"undefined"!==typeof bb&&cb[a]?cb[a]:Q(a):"undefined"!==typeof bb&&cb.canvas?cb.canvas:f.canvas}
function db(a,b,c,d,e,g){Ma||(Ma=R(164));a={target:Q(a),Db:Za()?!1:!0,Cb:g,Fb:d,Hb:function(a){a=a||window.event;var c=Ma;C(a.key?a.key:"",B,c+0,32);C(a.code?a.code:"",B,c+32,32);F[c+64>>2]=a.location;F[c+68>>2]=a.ctrlKey;F[c+72>>2]=a.shiftKey;F[c+76>>2]=a.altKey;F[c+80>>2]=a.metaKey;F[c+84>>2]=a.repeat;C(a.locale?a.locale:"",B,c+88,32);C(a.char?a.char:"",B,c+120,32);F[c+152>>2]=a.charCode;F[c+156>>2]=a.keyCode;F[c+160>>2]=a.which;S(d,e,c,b)&&a.preventDefault()},Eb:c};P(a)}
function eb(a,b,c){H[a>>3]=window.performance&&window.performance.now?window.performance.now():Date.now();F[a+8>>2]=b.screenX;F[a+12>>2]=b.screenY;F[a+16>>2]=b.clientX;F[a+20>>2]=b.clientY;F[a+24>>2]=b.ctrlKey;F[a+28>>2]=b.shiftKey;F[a+32>>2]=b.altKey;F[a+36>>2]=b.metaKey;E[a+40>>1]=b.button;E[a+42>>1]=b.buttons;F[a+44>>2]=b.movementX||b.mozMovementX||b.webkitMovementX||b.screenX-Qa;F[a+48>>2]=b.movementY||b.mozMovementY||b.webkitMovementY||b.screenY-Ra;if(f.canvas){var d=f.canvas.getBoundingClientRect();
F[a+60>>2]=b.clientX-d.left;F[a+64>>2]=b.clientY-d.top}else F[a+60>>2]=0,F[a+64>>2]=0;c?(d=c.getBoundingClientRect?c.getBoundingClientRect():{left:0,top:0},F[a+52>>2]=b.clientX-d.left,F[a+56>>2]=b.clientY-d.top):(F[a+52>>2]=0,F[a+56>>2]=0);"wheel"!==b.type&&"mousewheel"!==b.type&&(Qa=b.screenX,Ra=b.screenY)}
function fb(a,b,c,d,e,g){Na||(Na=R(72));a=Q(a);c={target:a,Db:"mousemove"!=g&&"mouseenter"!=g&&"mouseleave"!=g,Cb:g,Fb:d,Hb:function(c){c=c||window.event;eb(Na,c,a);S(d,e,Na,b)&&c.preventDefault()},Eb:c};Za()&&"mousedown"==g&&(c.Db=!1);P(c)}
function gb(a,b,c,d){Oa||(Oa=R(36));a=Q(a);P({target:a,Db:!1,Cb:"resize",Fb:d,Hb:function(c){c=c||window.event;if(c.target==a){var e=0<window.pageXOffset||0<window.pageYOffset?[window.pageXOffset,window.pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.scrollLeft|0,document.body.scrollTop|0],l=Oa;F[l>>2]=c.detail;F[l+4>>2]=document.body.clientWidth;
F[l+8>>2]=document.body.clientHeight;F[l+12>>2]=window.innerWidth;F[l+16>>2]=window.innerHeight;F[l+20>>2]=window.outerWidth;F[l+24>>2]=window.outerHeight;F[l+28>>2]=e[0];F[l+32>>2]=e[1];S(d,10,l,b)&&c.preventDefault()}},Eb:c})}
function hb(a,b,c,d,e,g){Pa||(Pa=R(1684));a=Q(a);P({target:a,Db:"touchstart"==g||"touchend"==g,Cb:g,Fb:d,Hb:function(c){c=c||window.event;for(var g={},l=0;l<c.touches.length;++l){var q=c.touches[l];g[q.identifier]=q}for(l=0;l<c.changedTouches.length;++l)q=c.changedTouches[l],g[q.identifier]=q,q.Tb=!0;for(l=0;l<c.targetTouches.length;++l)q=c.targetTouches[l],g[q.identifier].Yb=!0;var r=q=Pa;F[r+4>>2]=c.ctrlKey;F[r+8>>2]=c.shiftKey;F[r+12>>2]=c.altKey;F[r+16>>2]=c.metaKey;r+=20;var Ha=f.canvas?f.canvas.getBoundingClientRect():
void 0,ib=a.getBoundingClientRect?a.getBoundingClientRect():{left:0,top:0},jb=0;for(l in g){var y=g[l];F[r>>2]=y.identifier;F[r+4>>2]=y.screenX;F[r+8>>2]=y.screenY;F[r+12>>2]=y.clientX;F[r+16>>2]=y.clientY;F[r+20>>2]=y.pageX;F[r+24>>2]=y.pageY;F[r+28>>2]=y.Tb;F[r+32>>2]=y.Yb;Ha?(F[r+44>>2]=y.clientX-Ha.left,F[r+48>>2]=y.clientY-Ha.top):(F[r+44>>2]=0,F[r+48>>2]=0);F[r+36>>2]=y.clientX-ib.left;F[r+40>>2]=y.clientY-ib.top;r+=52;if(32<=++jb)break}F[q>>2]=jb;S(d,e,q,b)&&c.preventDefault()},Eb:c})}
function kb(a,b,c,d,e,g){a||(a=f.canvas);a={target:Q(a),Db:!1,Cb:g,Fb:d,Hb:function(a){a=a||window.event;S(d,e,0,b)&&a.preventDefault()},Eb:c};P(a)}
function lb(a,b,c,d,e){function g(c){c=c||window.event;eb(N,c,a);H[N+72>>3]=c.wheelDeltaX||0;H[N+80>>3]=-(c.wheelDeltaY?c.wheelDeltaY:c.wheelDelta);H[N+88>>3]=0;F[N+96>>2]=0;S(d,9,N,b)&&c.preventDefault()}function l(c){c=c||window.event;var e=N;eb(e,c,a);H[e+72>>3]=c.deltaX;H[e+80>>3]=c.deltaY;H[e+88>>3]=c.deltaZ;F[e+96>>2]=c.deltaMode;S(d,9,e,b)&&c.preventDefault()}N||(N=R(104));P({target:a,Db:!0,Cb:e,Fb:d,Hb:"wheel"==e?l:g,Eb:c})}
var mb=1,nb=0,ob=[],T=[],pb=[],qb=[],rb=[],U=[],V=[],sb=[],tb={},W=null,cb={},ub={},vb={};function X(a){nb||(nb=a)}function wb(a){for(var b=mb++,c=a.length;c<b;c++)a[c]=null;return b}var xb=null,Y=[0];function yb(a,b){function c(){var a=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return a?parseInt(a[2],10):!1}var d=R(8),e={handle:d,attributes:b,version:b.Rb,Nb:a};e.Bb=2<=e.version&&(!1===c()||58<=c());a.canvas&&(a.canvas.Zb=e);tb[d]=e;("undefined"===typeof b.Pb||b.Pb)&&zb(e);return d}
function zb(a){a||(a=W);if(!a.Xb){a.Xb=!0;var b=a.Nb;if(2>a.version){var c=b.getExtension("ANGLE_instanced_arrays");c&&(b.vertexAttribDivisor=function(a,b){c.vertexAttribDivisorANGLE(a,b)},b.drawArraysInstanced=function(a,b,d,e){c.drawArraysInstancedANGLE(a,b,d,e)},b.drawElementsInstanced=function(a,b,d,e,g){c.drawElementsInstancedANGLE(a,b,d,e,g)});var d=b.getExtension("OES_vertex_array_object");d&&(b.createVertexArray=function(){return d.createVertexArrayOES()},b.deleteVertexArray=function(a){d.deleteVertexArrayOES(a)},
b.bindVertexArray=function(a){d.bindVertexArrayOES(a)},b.isVertexArray=function(a){return d.isVertexArrayOES(a)});var e=b.getExtension("WEBGL_draw_buffers");e&&(b.drawBuffers=function(a,b){e.drawBuffersWEBGL(a,b)})}b.bc=b.getExtension("EXT_disjoint_timer_query");var g="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");
(a=b.getSupportedExtensions())&&0<a.length&&b.getSupportedExtensions().forEach(function(a){-1!=g.indexOf(a)&&b.getExtension(a)})}}var bb={},Ab,Bb,Cb=["default","low-power","high-performance"],Db=[];function Eb(a,b,c,d){for(var e=0;e<a;e++){var g=Z[c](),l=g&&wb(d);g?(g.name=l,d[l]=g):X(1282);F[b+4*e>>2]=l}}
function Fb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>W.version){X(1282);return}d=Z.getSupportedExtensions();c=null===d?0:2*d.length;break;case 33307:case 33308:if(2>W.version){X(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":X(1280);return;case "object":if(null===
d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 35097:case 36389:case 34068:c=0;break;default:X(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)F[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){X(1280);x("GL_INVALID_ENUM in glGetIntegerv: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:X(1280);return}F[b>>2]=c}else X(1281)}
function Gb(a){var b=ka(a)+1,c=R(b);C(a,B,c,b);return c}var Hb={6402:1,6403:1,6406:1,6407:3,6408:4,6409:1,6410:2,33319:2,33320:2,35904:3,35906:4,36244:1,36248:3,36249:4},Ib={5120:1,5121:1,5122:2,5123:2,5124:4,5125:4,5126:4,5131:2,32819:2,32820:2,33635:2,33640:4,34042:4,35899:4,35902:4,36193:2};
function Jb(a,b,c,d,e){if(b=Hb[b]*Ib[a])switch(c=e+d*(c*b+4-1&-4),a){case 5120:return D.subarray(e,c);case 5121:return B.subarray(e,c);case 5122:return E.subarray(e>>1,c>>1);case 5124:return F.subarray(e>>2,c>>2);case 5126:return G.subarray(e>>2,c>>2);case 5125:case 34042:case 35902:case 33640:case 35899:case 34042:return pa.subarray(e>>2,c>>2);case 5123:case 33635:case 32819:case 32820:case 36193:case 5131:return oa.subarray(e>>1,c>>1);default:X(1280)}else X(1280)}
function Kb(a){switch(a){case 5120:return D;case 5121:return B;case 5122:return E;case 5123:case 33635:case 32819:case 32820:case 36193:case 5131:return oa;case 5124:return F;case 5125:case 34042:case 35902:case 33640:case 35899:case 34042:return pa;case 5126:return G}}var Lb={5122:1,5123:1,5124:2,5125:2,5126:2,5131:1,32819:1,32820:1,33635:1,33640:2,34042:2,35899:2,35902:2,36193:1};
function Mb(a){a=na(a);var b=buffer.byteLength;try{return-1!==z.grow((a-b)/65536)?(buffer=z.buffer,!0):!1}catch(c){return!1}}var Z;xb=new Float32Array(256);for(var Nb=0;256>Nb;Nb++)Y[Nb]=xb.subarray(0,Nb+1);for(var Ob=0;32>Ob;Ob++)Db.push(Array(Ob));
var Ub=f.asm({},{$a:function(){},bb:function(a,b){L=b;try{return Ka.Qb(),M(),M(),M(),M(),0}catch(c){return v(c),-c.Kb}},ab:function(a,b){L=b;try{var c=Ka.Qb(),d=M(),e=M();return Ka.cc(c,d,e)}catch(g){return v(g),-g.Kb}},$:function(a,b){L=b;try{var c=M(),d=M(),e=M();for(b=a=0;b<e;b++){for(var g=F[d+8*b>>2],l=F[d+(8*b+4)>>2],n=0;n<l;n++){var p=B[g+n],q=Ja[c];0===p||10===p?((1===c?fa:x)(ja(q,0)),q.length=0):q.push(p)}a+=l}return a}catch(r){return v(r),-r.Kb}},s:function(a,b){L=b;return 0},db:function(a,
b){L=b;try{var c=A(M()),d=M(),e=M();return(void 0).open(c,d,e).fd}catch(g){return v(g),-g.Kb}},aa:function(a,b){L=b;return 0},_:function(a,b){L=b;try{return Ka.Qb(),0}catch(c){return v(c),-c.Kb}},z:function(){},Z:function(){return window.devicePixelRatio||1},ca:function(a,b,c){a=a?Q(a):f.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),H[b>>3]=a.right-a.left,H[c>>3]=a.bottom-a.top):(H[b>>3]=a.clientWidth,H[c>>3]=a.clientHeight);return 0},Ya:function(a,b,c){B.set(B.subarray(b,
b+c),a)},Na:function(a,b){function c(d){Pb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},X:function(a,b,c){a=ab(a);if(!a)return-4;a.width=b;a.height=c;return 0},Wa:function(a,b,c,d){db(a,b,c,d,2,"keydown");return 0},Ua:function(a,b,c,d){db(a,b,c,d,1,"keypress");return 0},Va:function(a,b,c,d){db(a,b,c,d,3,"keyup");return 0},sa:function(a,b,c,d){fb(a,b,c,d,5,"mousedown");return 0},kb:function(a,b,c,d){fb(a,b,c,d,33,"mouseenter");return 0},cb:function(a,b,c,d){fb(a,b,c,d,34,"mouseleave");
return 0},ja:function(a,b,c,d){fb(a,b,c,d,8,"mousemove");return 0},oa:function(a,b,c,d){fb(a,b,c,d,6,"mouseup");return 0},lb:function(a,b,c,d){gb(a,b,c,d);return 0},Qa:function(a,b,c,d){hb(a,b,c,d,25,"touchcancel");return 0},Ra:function(a,b,c,d){hb(a,b,c,d,23,"touchend");return 0},Sa:function(a,b,c,d){hb(a,b,c,d,24,"touchmove");return 0},Ta:function(a,b,c,d){hb(a,b,c,d,22,"touchstart");return 0},Pa:function(a,b,c,d){kb(a,b,c,d,31,"webglcontextlost");return 0},Oa:function(a,b,c,d){kb(a,b,c,d,32,"webglcontextrestored");
return 0},Xa:function(a,b,c,d){a=Q(a);return"undefined"!==typeof a.onwheel?(lb(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(lb(a,b,c,d,"mousewheel"),0):-1},P:function(a,b){var c={};b>>=2;c.alpha=!!F[b];c.depth=!!F[b+1];c.stencil=!!F[b+2];c.antialias=!!F[b+3];c.premultipliedAlpha=!!F[b+4];c.preserveDrawingBuffer=!!F[b+5];c.powerPreference=Cb[F[b+6]];c.failIfMajorPerformanceCaveat=!!F[b+7];c.Rb=F[b+8];c.dc=F[b+9];c.Pb=F[b+10];c.Vb=F[b+11];c.ec=F[b+12];c.fc=F[b+13];a=ab(a);!a||c.Vb?c=0:c=
(a=1<c.Rb?a.getContext("webgl2",c):a.getContext("webgl",c)||a.getContext("experimental-webgl",c))&&yb(a,c);return c},Ga:function(a){a>>=2;for(var b=0;14>b;++b)F[a+b]=0;F[a]=F[a+1]=F[a+3]=F[a+4]=F[a+8]=F[a+10]=1},Ba:function(a){W=tb[a];f.ac=Z=W&&W.Nb;return!a||Z?0:-5},_a:za,Za:Aa,j:function(a){Z.activeTexture(a)},B:function(a,b){Z.attachShader(T[a],V[b])},c:function(a,b){35051==a?Z.Ob=b:35052==a&&(Z.Gb=b);Z.bindBuffer(a,ob[b])},h:function(a,b){Z.bindFramebuffer(a,pb[b])},E:function(a,b){Z.bindRenderbuffer(a,
qb[b])},b:function(a,b){Z.bindTexture(a,rb[b])},Y:function(a){Z.bindVertexArray(sb[a])},M:function(a,b,c,d){Z.blendColor(a,b,c,d)},N:function(a,b){Z.blendEquationSeparate(a,b)},O:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},p:function(a,b,c,d,e,g,l,n,p,q){Z.blitFramebuffer(a,b,c,d,e,g,l,n,p,q)},G:function(a,b,c,d){W.Bb?c?Z.bufferData(a,B,d,c,b):Z.bufferData(a,b,d):Z.bufferData(a,c?B.subarray(c,c+b):b,d)},o:function(a,b,c,d){W.Bb?Z.bufferSubData(a,b,B,d,c):Z.bufferSubData(a,b,B.subarray(d,d+c))},
S:function(a){Z.clear(a)},Fa:function(a,b,c,d){Z.clearColor(a,b,c,d)},Ea:function(a){Z.clearDepth(a)},Da:function(a){Z.clearStencil(a)},x:function(a,b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},ib:function(a){Z.compileShader(V[a])},ma:function(a,b,c,d,e,g,l,n){W.Bb?Z.Gb?Z.compressedTexImage2D(a,b,c,d,e,g,l,n):Z.compressedTexImage2D(a,b,c,d,e,g,B,n,l):Z.compressedTexImage2D(a,b,c,d,e,g,n?B.subarray(n,n+l):null)},ka:function(a,b,c,d,e,g,l,n,p){W.Bb?Z.Gb?Z.compressedTexImage3D(a,b,c,d,e,g,l,n,p):Z.compressedTexImage3D(a,
b,c,d,e,g,l,B,p,n):Z.compressedTexImage3D(a,b,c,d,e,g,l,p?B.subarray(p,p+n):null)},ga:function(){var a=wb(T),b=Z.createProgram();b.name=a;T[a]=b;return a},da:function(a){var b=wb(V);V[b]=Z.createShader(a);return b},L:function(a){Z.cullFace(a)},Ia:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=ob[d];e&&(Z.deleteBuffer(e),e.name=0,ob[d]=null,d==Ab&&(Ab=0),d==Bb&&(Bb=0),d==Z.Ob&&(Z.Ob=0),d==Z.Gb&&(Z.Gb=0))}},k:function(a,b){for(var c=0;c<a;++c){var d=F[b+4*c>>2],e=pb[d];e&&(Z.deleteFramebuffer(e),
e.name=0,pb[d]=null)}},V:function(a){if(a){var b=T[a];b?(Z.deleteProgram(b),b.name=0,T[a]=null,ub[a]=null):X(1281)}},W:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=qb[d];e&&(Z.deleteRenderbuffer(e),e.name=0,qb[d]=null)}},t:function(a){if(a){var b=V[a];b?(Z.deleteShader(b),V[a]=null):X(1281)}},Ha:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=rb[d];e&&(Z.deleteTexture(e),e.name=0,rb[d]=null)}},Ja:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2];Z.deleteVertexArray(sb[d]);sb[d]=
null}},v:function(a){Z.depthFunc(a)},w:function(a){Z.depthMask(!!a)},d:function(a){Z.disable(a)},a:function(a){Z.disableVertexAttribArray(a)},qa:function(a,b,c){Z.drawArrays(a,b,c)},r:function(a,b){for(var c=Db[a],d=0;d<a;d++)c[d]=F[b+4*d>>2];Z.drawBuffers(c)},ra:function(a,b,c,d){Z.drawElements(a,b,c,d)},g:function(a){Z.enable(a)},ya:function(a){Z.enableVertexAttribArray(a)},K:function(a){Z.frontFace(a)},H:function(a,b){Eb(a,b,"createBuffer",ob)},F:function(a,b){Eb(a,b,"createRenderbuffer",qb)},
na:function(a,b){Eb(a,b,"createTexture",rb)},Ka:function(a,b){Eb(a,b,"createVertexArray",sb)},gb:function(a,b){return Z.getAttribLocation(T[a],A(b))},y:function(a,b){Fb(a,b)},ea:function(a,b,c,d){a=Z.getProgramInfoLog(T[a]);null===a&&(a="(unknown error)");0<b&&d?(b=C(a,B,d,b),c&&(F[c>>2]=b)):c&&(F[c>>2]=0)},A:function(a,b,c){if(c)if(a>=mb)X(1281);else{var d=ub[a];if(d)if(35716==b)a=Z.getProgramInfoLog(T[a]),null===a&&(a="(unknown error)"),F[c>>2]=a.length+1;else if(35719==b)F[c>>2]=d.Mb;else if(35722==
b){if(-1==d.Ib){a=T[a];var e=Z.getProgramParameter(a,35721);for(b=d.Ib=0;b<e;++b)d.Ib=Math.max(d.Ib,Z.getActiveAttrib(a,b).name.length+1)}F[c>>2]=d.Ib}else if(35381==b){if(-1==d.Jb)for(a=T[a],e=Z.getProgramParameter(a,35382),b=d.Jb=0;b<e;++b)d.Jb=Math.max(d.Jb,Z.getActiveUniformBlockName(a,b).length+1);F[c>>2]=d.Jb}else F[c>>2]=Z.getProgramParameter(T[a],b);else X(1282)}else X(1281)},hb:function(a,b,c,d){a=Z.getShaderInfoLog(V[a]);null===a&&(a="(unknown error)");0<b&&d?(b=C(a,B,d,b),c&&(F[c>>2]=b)):
c&&(F[c>>2]=0)},ba:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(V[a]),null===a&&(a="(unknown error)"),F[c>>2]=a.length+1):35720==b?(a=Z.getShaderSource(V[a]),F[c>>2]=null===a||0==a.length?0:a.length+1):F[c>>2]=Z.getShaderParameter(V[a],b):X(1281)},La:function(a){if(vb[a])return vb[a];switch(a){case 7939:var b=Z.getSupportedExtensions();for(var c=[],d=0;d<b.length;++d)c.push(b[d]),c.push("GL_"+b[d]);b=Gb(c.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Z.getParameter(a))||X(1280);
b=Gb(b);break;case 7938:b=Z.getParameter(Z.VERSION);b=2<=W.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Gb(b);break;case 35724:b=Z.getParameter(Z.SHADING_LANGUAGE_VERSION);c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Gb(b);break;default:return X(1280),0}return vb[a]=b},i:function(a,b){b=A(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,
d)}return(a=ub[a]&&ub[a].Sb[b])&&0<=c&&c<a[0]?a[1]+c:-1},fa:function(a){Z.linkProgram(T[a]);var b=T[a];a=ub[a]={Sb:{},Mb:0,Ib:-1,Jb:-1};for(var c=a.Sb,d=Z.getProgramParameter(b,35718),e=0;e<d;++e){var g=Z.getActiveUniform(b,e),l=g.name;a.Mb=Math.max(a.Mb,l.length+1);"]"==l.slice(-1)&&(l=l.slice(0,l.lastIndexOf("[")));var n=Z.getUniformLocation(b,l);if(n){var p=wb(U);c[l]=[g.size,p];U[p]=n;for(var q=1;q<g.size;++q)n=Z.getUniformLocation(b,l+"["+q+"]"),p=wb(U),U[p]=n}}},J:function(a,b){Z.polygonOffset(a,
b)},q:function(a){Z.readBuffer(a)},ha:function(a,b,c,d){Z.renderbufferStorage(a,b,c,d)},D:function(a,b,c,d,e){Z.renderbufferStorageMultisample(a,b,c,d,e)},T:function(a,b,c,d){Z.scissor(a,b,c,d)},jb:function(a,b,c,d){for(var e="",g=0;g<b;++g){var l=d?F[d+4*g>>2]:-1;e+=A(F[c+4*g>>2],0>l?void 0:l)}Z.shaderSource(V[a],e)},fb:function(a,b,c){Z.stencilFunc(a,b,c)},R:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},u:function(a){Z.stencilMask(a)},eb:function(a,b,c){Z.stencilOp(a,b,c)},Q:function(a,b,c,
d){Z.stencilOpSeparate(a,b,c,d)},la:function(a,b,c,d,e,g,l,n,p){W.Bb?Z.Gb?Z.texImage2D(a,b,c,d,e,g,l,n,p):0!=p?Z.texImage2D(a,b,c,d,e,g,l,n,Kb(n),p>>(Lb[n]|0)):Z.texImage2D(a,b,c,d,e,g,l,n,null):Z.texImage2D(a,b,c,d,e,g,l,n,p?Jb(n,l,d,e,p):null)},ia:function(a,b,c,d,e,g,l,n,p,q){Z.Gb?Z.texImage3D(a,b,c,d,e,g,l,n,p,q):0!=q?Z.texImage3D(a,b,c,d,e,g,l,n,p,Kb(p),q>>(Lb[p]|0)):Z.texImage3D(a,b,c,d,e,g,l,n,p,null)},C:function(a,b,c){Z.texParameterf(a,b,c)},f:function(a,b,c){Z.texParameteri(a,b,c)},xa:function(a,
b,c){if(W.Bb)Z.uniform1fv(U[a],G,c>>2,b);else{if(256>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=G[c+4*e>>2];else d=G.subarray(c>>2,c+4*b>>2);Z.uniform1fv(U[a],d)}},I:function(a,b){Z.uniform1i(U[a],b)},wa:function(a,b,c){if(W.Bb)Z.uniform2fv(U[a],G,c>>2,2*b);else{if(256>=2*b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=G[c+4*e>>2],d[e+1]=G[c+(4*e+4)>>2];else d=G.subarray(c>>2,c+8*b>>2);Z.uniform2fv(U[a],d)}},va:function(a,b,c){if(W.Bb)Z.uniform3fv(U[a],G,c>>2,3*b);else{if(256>=3*b)for(var d=Y[3*b-1],e=0;e<3*b;e+=
3)d[e]=G[c+4*e>>2],d[e+1]=G[c+(4*e+4)>>2],d[e+2]=G[c+(4*e+8)>>2];else d=G.subarray(c>>2,c+12*b>>2);Z.uniform3fv(U[a],d)}},ua:function(a,b,c){if(W.Bb)Z.uniform4fv(U[a],G,c>>2,4*b);else{if(256>=4*b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=G[c+4*e>>2],d[e+1]=G[c+(4*e+4)>>2],d[e+2]=G[c+(4*e+8)>>2],d[e+3]=G[c+(4*e+12)>>2];else d=G.subarray(c>>2,c+16*b>>2);Z.uniform4fv(U[a],d)}},ta:function(a,b,c,d){if(W.Bb)Z.uniformMatrix4fv(U[a],!!c,G,d>>2,16*b);else{if(256>=16*b)for(var e=Y[16*b-1],g=0;g<16*b;g+=16)e[g]=
G[d+4*g>>2],e[g+1]=G[d+(4*g+4)>>2],e[g+2]=G[d+(4*g+8)>>2],e[g+3]=G[d+(4*g+12)>>2],e[g+4]=G[d+(4*g+16)>>2],e[g+5]=G[d+(4*g+20)>>2],e[g+6]=G[d+(4*g+24)>>2],e[g+7]=G[d+(4*g+28)>>2],e[g+8]=G[d+(4*g+32)>>2],e[g+9]=G[d+(4*g+36)>>2],e[g+10]=G[d+(4*g+40)>>2],e[g+11]=G[d+(4*g+44)>>2],e[g+12]=G[d+(4*g+48)>>2],e[g+13]=G[d+(4*g+52)>>2],e[g+14]=G[d+(4*g+56)>>2],e[g+15]=G[d+(4*g+60)>>2];else e=G.subarray(d>>2,d+64*b>>2);Z.uniformMatrix4fv(U[a],!!c,e)}},Ca:function(a){Z.useProgram(T[a])},za:function(a,b){Z.vertexAttribDivisor(a,
b)},Aa:function(a,b,c,d,e,g){Z.vertexAttribPointer(a,b,c,!!d,e,g)},U:function(a,b,c,d){Z.viewport(a,b,c,d)},n:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Qb()});document.body.append(a)},m:function(){document.getElementById("_sokol_app_input_element").focus()},Ma:function(){window.addEventListener("beforeunload",function(a){0!=Rb()&&(a.preventDefault(),a.returnValue=" ")})},l:function(){document.getElementById("_sokol_app_input_element").blur()},
e:function(a){a|=0;var b=D.length|0;var c=F[11868]|0;var d=c+a|0;if(0<(a|0)&(d|0)<(c|0)|0>(d|0))return v("OOM"),0,La(),-1;if(a=(d|0)>(b|0)){a=d|0;if(2147418112<a)a=!1;else{for(b=Math.max(D.length,16777216);b<a;)536870912>=b?b=na(2*b):b=Math.min(na((3*b+2147483648)/4),2147418112);Mb(b)?(qa(),a=!0):a=!1}a=!(a|0)}if(a)return La(),-1;F[11868]=d|0;return c|0},pa:function(a,b,c,d,e,g){b=A(b);var l=new XMLHttpRequest;l.open("GET",b);l.responseType="arraybuffer";var n=!(0==c&&d==e);n&&l.setRequestHeader("Range",
"bytes="+c+"-"+(c+d));l.onreadystatechange=function(){if(this.readyState==this.DONE)if(206==this.status||200==this.status&&!n){var b=new Uint8Array(l.response);B.set(b,g);Sb(a,d)}else Tb(a)};l.send()}},buffer);f.asm=Ub;var Ia=f.___wasm_call_ctors=function(){return f.asm.mb.apply(null,arguments)},Qb=f.__sapp_emsc_notify_keyboard_hidden=function(){return f.asm.nb.apply(null,arguments)},Rb=f.__sapp_html5_get_ask_leave_site=function(){return f.asm.ob.apply(null,arguments)};
f._main=function(){return f.asm.pb.apply(null,arguments)};var R=f._malloc=function(){return f.asm.qb.apply(null,arguments)};f._free=function(){return f.asm.rb.apply(null,arguments)};f.__saudio_emsc_pull=function(){return f.asm.sb.apply(null,arguments)};f.__sfetch_emsc_head_response=function(){return f.asm.tb.apply(null,arguments)};
var Sb=f.__sfetch_emsc_range_response=function(){return f.asm.ub.apply(null,arguments)},Tb=f.__sfetch_emsc_failed=function(){return f.asm.vb.apply(null,arguments)},ma=f.stackAlloc=function(){return f.asm.wb.apply(null,arguments)};f.dynCall_vi=function(){return f.asm.xb.apply(null,arguments)};f.dynCall_v=function(){return f.asm.yb.apply(null,arguments)};var S=f.dynCall_iiii=function(){return f.asm.zb.apply(null,arguments)},Pb=f.dynCall_idi=function(){return f.asm.Ab.apply(null,arguments)};f.asm=Ub;
function w(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}w.prototype=Error();w.prototype.constructor=w;J=function Vb(){f.calledRun||Wb();f.calledRun||(J=Vb)};
f.callMain=function(a){a=a||[];var b=a.length+1,c=ma(4*(b+1));F[c>>2]=la(f.thisProgram);for(var d=1;d<b;d++)F[(c>>2)+d]=la(a[d-1]);F[(c>>2)+b]=0;try{var e=f._main(b,c,0);if(!f.noExitRuntime||0!==e){if(!f.noExitRuntime&&(ha=!0,f.onExit))f.onExit(e);f.quit(e,new w(e))}}catch(g){g instanceof w||("SimulateInfiniteLoop"==g?f.noExitRuntime=!0:((a=g)&&"object"===typeof g&&g.stack&&(a=[g,g.stack]),x("exception thrown: "+a),f.quit(1,g)))}finally{}};
function Wb(a){function b(){if(!f.calledRun&&(f.calledRun=!0,!ha)){sa(ua);sa(va);if(f.onRuntimeInitialized)f.onRuntimeInitialized();f._main&&Xb&&f.callMain(a);if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;){var b=f.postRun.shift();xa.unshift(b)}sa(xa)}}a=a||f.arguments;if(!(0<I)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)ya();sa(ta);0<I||f.calledRun||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},
1);b()},1)):b())}}f.run=Wb;function v(a){if(f.onAbort)f.onAbort(a);void 0!==a?(fa(a),x(a),a='"'+a+'"'):a="";ha=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}f.abort=v;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Xb=!0;f.noInitialRun&&(Xb=!1);f.noExitRuntime=!0;Wb();
