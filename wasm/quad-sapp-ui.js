var f;f||(f=typeof Module !== 'undefined' ? Module : {});var h={},k;for(k in f)f.hasOwnProperty(k)&&(h[k]=f[k]);f.arguments=[];f.thisProgram="./this.program";f.quit=function(a,b){throw b;};f.preRun=[];f.postRun=[];var m=!1,t=!1,aa=!1,ba=!1;m="object"===typeof window;t="function"===typeof importScripts;aa="object"===typeof process&&"function"===typeof require&&!m&&!t;ba=!m&&!aa&&!t;var u="";
if(aa){u=__dirname+"/";var ca,da;f.read=function(a,b){ca||(ca=require("fs"));da||(da=require("path"));a=da.normalize(a);a=ca.readFileSync(a);return b?a:a.toString()};f.readBinary=function(a){a=f.read(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||v("Assertion failed: undefined");return a};1<process.argv.length&&(f.thisProgram=process.argv[1].replace(/\\/g,"/"));f.arguments=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=f);process.on("uncaughtException",function(a){if(!(a instanceof
w))throw a;});process.on("unhandledRejection",v);f.quit=function(a){process.exit(a)};f.inspect=function(){return"[Emscripten Module object]"}}else if(ba)"undefined"!=typeof read&&(f.read=function(a){return read(a)}),f.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||v("Assertion failed: undefined");return a},"undefined"!=typeof scriptArgs?f.arguments=scriptArgs:"undefined"!=typeof arguments&&(f.arguments=arguments),
"function"===typeof quit&&(f.quit=function(a){quit(a)});else if(m||t)t?u=self.location.href:document.currentScript&&(u=document.currentScript.src),u=0!==u.indexOf("blob:")?u.substr(0,u.lastIndexOf("/")+1):"",f.read=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},t&&(f.readBinary=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),f.readAsync=function(a,b,c){var d=new XMLHttpRequest;
d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)},f.setWindowTitle=function(a){document.title=a};var ea=f.print||("undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null),x=f.printErr||("undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||ea);for(k in h)h.hasOwnProperty(k)&&(f[k]=h[k]);h=void 0;
var fa={"f64-rem":function(a,b){return a%b},"debugger":function(){debugger}};"object"!==typeof WebAssembly&&x("no native wasm support detected");var ha,ia=!1,ja="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ka(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&ja)return ja.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var g=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|g);else{var l=a[b++]&63;e=224==(e&240)?(e&15)<<12|g<<6|l:(e&7)<<18|g<<12|l<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function y(a,b){return a?ka(A,a,b):""}
function B(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var g=0;g<a.length;++g){var l=a.charCodeAt(g);if(55296<=l&&57343>=l){var p=a.charCodeAt(++g);l=65536+((l&1023)<<10)|p&1023}if(127>=l){if(c>=d)break;b[c++]=l}else{if(2047>=l){if(c+1>=d)break;b[c++]=192|l>>6}else{if(65535>=l){if(c+2>=d)break;b[c++]=224|l>>12}else{if(c+3>=d)break;b[c++]=240|l>>18;b[c++]=128|l>>12&63}b[c++]=128|l>>6&63}b[c++]=128|l&63}}b[c]=0;return c-e}
function la(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function ma(a){var b=la(a)+1,c=na(b);B(a,C,c,b);return c}var buffer,C,A,D,oa,E,pa,F,G,H=f.TOTAL_MEMORY||134217728;5242880>H&&x("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+H+"! (TOTAL_STACK=5242880)");
f.buffer?buffer=f.buffer:"object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(ha=new WebAssembly.Memory({initial:H/65536,maximum:H/65536}),buffer=ha.buffer):buffer=new ArrayBuffer(H);f.HEAP8=C=new Int8Array(buffer);f.HEAP16=D=new Int16Array(buffer);f.HEAP32=E=new Int32Array(buffer);f.HEAPU8=A=new Uint8Array(buffer);f.HEAPU16=oa=new Uint16Array(buffer);f.HEAPU32=pa=new Uint32Array(buffer);f.HEAPF32=F=new Float32Array(buffer);f.HEAPF64=G=new Float64Array(buffer);E[322364]=6532368;
function I(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.$b;"number"===typeof c?void 0===b.Ib?f.dynCall_v(c):f.dynCall_vi(c,b.Ib):c(void 0===b.Ib?null:b.Ib)}}}var qa=[],ra=[],sa=[],ta=[],ua=[],va=!1;function wa(){var a=f.preRun.shift();qa.unshift(a)}var J=0,xa=null,ya=null;f.preloadedImages={};f.preloadedAudios={};
function za(){var a=K;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var K="quad-sapp-ui.wasm";if(!za()){var Aa=K;K=f.locateFile?f.locateFile(Aa,u):u+Aa}function Ba(){try{if(f.wasmBinary)return new Uint8Array(f.wasmBinary);if(f.readBinary)return f.readBinary(K);throw"both async and sync fetching of the wasm failed";}catch(a){v(a)}}
function Ca(){return f.wasmBinary||!m&&!t||"function"!==typeof fetch?new Promise(function(a){a(Ba())}):fetch(K,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+K+"'";return a.arrayBuffer()}).catch(function(){return Ba()})}
function Da(a){function b(a){f.asm=a.exports;J--;f.monitorRunDependencies&&f.monitorRunDependencies(J);0==J&&(null!==xa&&(clearInterval(xa),xa=null),ya&&(a=ya,ya=null,a()))}function c(a){b(a.instance)}function d(a){Ca().then(function(a){return WebAssembly.instantiate(a,e)}).then(a,function(a){x("failed to asynchronously prepare wasm: "+a);v(a)})}var e={env:a,global:{NaN:NaN,Infinity:Infinity},"global.Math":Math,asm2wasm:fa};J++;f.monitorRunDependencies&&f.monitorRunDependencies(J);if(f.instantiateWasm)try{return f.instantiateWasm(e,
b)}catch(g){return x("Module.instantiateWasm callback failed with error: "+g),!1}f.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||za()||"function"!==typeof fetch?d(c):WebAssembly.instantiateStreaming(fetch(K,{credentials:"same-origin"}),e).then(c,function(a){x("wasm streaming compile failed: "+a);x("falling back to ArrayBuffer instantiation");d(c)});return{}}
f.asm=function(a,b){b.memory=ha;b.table=new WebAssembly.Table({initial:120,maximum:120,element:"anyfunc"});b.__memory_base=1024;b.__table_base=0;return Da(b)};var Ea=[null,[],[]],L=0;function M(){L+=4;return E[L-4>>2]}var Ga={},Ha=0,Ia=0,N=0,Ja=0,Ka=0,La=null,Ma=null,Na=!1;function Oa(){for(var a=O.length-1;0<=a;--a)Pa(a);O=[];Qa=[]}var Qa=[];function Ra(){if(Sa&&Ta.Ab)for(var a=0;a<Qa.length;++a){var b=Qa[a];Qa.splice(a,1);--a;b.dc.apply(this,b.Wb)}}var Sa=0,Ta=null,O=[];
function Ua(){return-1!==navigator.userAgent.indexOf("MSIE")||0<navigator.appVersion.indexOf("Trident/")}function Pa(a){var b=O[a];b.target.removeEventListener(b.yb,b.Rb,b.Bb);O.splice(a,1)}function P(a){function b(b){++Sa;Ta=a;Ra();a.Db(b);Ra();--Sa}if(a.Cb)a.Rb=b,a.target.addEventListener(a.yb,b,a.Bb),O.push(a),Na||(ta.push(Oa),Na=!0);else for(var c=0;c<O.length;++c)O[c].target==a.target&&O[c].yb==a.yb&&Pa(c--)}
var Va=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function Q(a){try{if(!a)return window;"number"===typeof a&&(a=Va[a]||y(a));return"#window"===a?window:"#document"===a?document:"#screen"===a?screen:"#canvas"===a?f.canvas:"string"===typeof a?document.getElementById(a):a}catch(b){return null}}function Wa(){v("OOM")}
function Xa(a){"number"===typeof a&&(a=y(a));return a&&"#canvas"!==a?"undefined"!==typeof Ya&&Za[a]?Za[a]:Q(a):"undefined"!==typeof Ya&&Za.canvas?Za.canvas:f.canvas}
function $a(a,b,c,d,e,g){Ha||(Ha=R(164));a={target:Q(a),Ab:Ua()?!1:!0,yb:g,Cb:d,Db:function(a){a=a||window.event;var c=Ha;B(a.key?a.key:"",A,c+0,32);B(a.code?a.code:"",A,c+32,32);E[c+64>>2]=a.location;E[c+68>>2]=a.ctrlKey;E[c+72>>2]=a.shiftKey;E[c+76>>2]=a.altKey;E[c+80>>2]=a.metaKey;E[c+84>>2]=a.repeat;B(a.locale?a.locale:"",A,c+88,32);B(a.char?a.char:"",A,c+120,32);E[c+152>>2]=a.charCode;E[c+156>>2]=a.keyCode;E[c+160>>2]=a.which;S(d,e,c,b)&&a.preventDefault()},Bb:c};P(a)}
function ab(a,b,c){G[a>>3]=window.performance&&window.performance.now?window.performance.now():Date.now();E[a+8>>2]=b.screenX;E[a+12>>2]=b.screenY;E[a+16>>2]=b.clientX;E[a+20>>2]=b.clientY;E[a+24>>2]=b.ctrlKey;E[a+28>>2]=b.shiftKey;E[a+32>>2]=b.altKey;E[a+36>>2]=b.metaKey;D[a+40>>1]=b.button;D[a+42>>1]=b.buttons;E[a+44>>2]=b.movementX||b.mozMovementX||b.webkitMovementX||b.screenX-La;E[a+48>>2]=b.movementY||b.mozMovementY||b.webkitMovementY||b.screenY-Ma;if(f.canvas){var d=f.canvas.getBoundingClientRect();
E[a+60>>2]=b.clientX-d.left;E[a+64>>2]=b.clientY-d.top}else E[a+60>>2]=0,E[a+64>>2]=0;c?(d=c.getBoundingClientRect?c.getBoundingClientRect():{left:0,top:0},E[a+52>>2]=b.clientX-d.left,E[a+56>>2]=b.clientY-d.top):(E[a+52>>2]=0,E[a+56>>2]=0);"wheel"!==b.type&&"mousewheel"!==b.type&&(La=b.screenX,Ma=b.screenY)}
function bb(a,b,c,d,e,g){Ia||(Ia=R(72));a=Q(a);c={target:a,Ab:"mousemove"!=g&&"mouseenter"!=g&&"mouseleave"!=g,yb:g,Cb:d,Db:function(c){c=c||window.event;ab(Ia,c,a);S(d,e,Ia,b)&&c.preventDefault()},Bb:c};Ua()&&"mousedown"==g&&(c.Ab=!1);P(c)}
function cb(a,b,c,d){Ja||(Ja=R(36));a=Q(a);P({target:a,Ab:!1,yb:"resize",Cb:d,Db:function(c){c=c||window.event;if(c.target==a){var e=0<window.pageXOffset||0<window.pageYOffset?[window.pageXOffset,window.pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.scrollLeft|0,document.body.scrollTop|0],l=Ja;E[l>>2]=c.detail;E[l+4>>2]=document.body.clientWidth;
E[l+8>>2]=document.body.clientHeight;E[l+12>>2]=window.innerWidth;E[l+16>>2]=window.innerHeight;E[l+20>>2]=window.outerWidth;E[l+24>>2]=window.outerHeight;E[l+28>>2]=e[0];E[l+32>>2]=e[1];S(d,10,l,b)&&c.preventDefault()}},Bb:c})}
function db(a,b,c,d,e,g){Ka||(Ka=R(1684));a=Q(a);P({target:a,Ab:"touchstart"==g||"touchend"==g,yb:g,Cb:d,Db:function(c){c=c||window.event;for(var g={},l=0;l<c.touches.length;++l){var n=c.touches[l];g[n.identifier]=n}for(l=0;l<c.changedTouches.length;++l)n=c.changedTouches[l],g[n.identifier]=n,n.Qb=!0;for(l=0;l<c.targetTouches.length;++l)n=c.targetTouches[l],g[n.identifier].Ub=!0;var q=n=Ka;E[q+4>>2]=c.ctrlKey;E[q+8>>2]=c.shiftKey;E[q+12>>2]=c.altKey;E[q+16>>2]=c.metaKey;q+=20;var Fa=f.canvas?f.canvas.getBoundingClientRect():
void 0,gb=a.getBoundingClientRect?a.getBoundingClientRect():{left:0,top:0},hb=0;for(l in g){var z=g[l];E[q>>2]=z.identifier;E[q+4>>2]=z.screenX;E[q+8>>2]=z.screenY;E[q+12>>2]=z.clientX;E[q+16>>2]=z.clientY;E[q+20>>2]=z.pageX;E[q+24>>2]=z.pageY;E[q+28>>2]=z.Qb;E[q+32>>2]=z.Ub;Fa?(E[q+44>>2]=z.clientX-Fa.left,E[q+48>>2]=z.clientY-Fa.top):(E[q+44>>2]=0,E[q+48>>2]=0);E[q+36>>2]=z.clientX-gb.left;E[q+40>>2]=z.clientY-gb.top;q+=52;if(32<=++hb)break}E[n>>2]=hb;S(d,e,n,b)&&c.preventDefault()},Bb:c})}
function eb(a,b,c,d,e,g){a||(a=f.canvas);a={target:Q(a),Ab:!1,yb:g,Cb:d,Db:function(a){a=a||window.event;S(d,e,0,b)&&a.preventDefault()},Bb:c};P(a)}
function fb(a,b,c,d,e){function g(c){c=c||window.event;ab(N,c,a);G[N+72>>3]=c.wheelDeltaX||0;G[N+80>>3]=-(c.wheelDeltaY?c.wheelDeltaY:c.wheelDelta);G[N+88>>3]=0;E[N+96>>2]=0;S(d,9,N,b)&&c.preventDefault()}function l(c){c=c||window.event;var e=N;ab(e,c,a);G[e+72>>3]=c.deltaX;G[e+80>>3]=c.deltaY;G[e+88>>3]=c.deltaZ;E[e+96>>2]=c.deltaMode;S(d,9,e,b)&&c.preventDefault()}N||(N=R(104));P({target:a,Ab:!0,yb:e,Cb:d,Db:"wheel"==e?l:g,Bb:c})}
var ib=1,jb=0,kb=[],T=[],lb=[],mb=[],nb=[],U=[],V=[],ob=[],pb={},W=null,Za={},qb={},rb={};function X(a){jb||(jb=a)}function sb(a){for(var b=ib++,c=a.length;c<b;c++)a[c]=null;return b}var tb=null,Y=[0];function ub(a,b){function c(){var a=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return a?parseInt(a[2],10):!1}var d=R(8),e={handle:d,attributes:b,version:b.Ob,Kb:a};e.zb=2<=e.version&&(!1===c()||58<=c());a.canvas&&(a.canvas.Vb=e);pb[d]=e;("undefined"===typeof b.Mb||b.Mb)&&vb(e);return d}
function vb(a){a||(a=W);if(!a.Tb){a.Tb=!0;var b=a.Kb;if(2>a.version){var c=b.getExtension("ANGLE_instanced_arrays");c&&(b.vertexAttribDivisor=function(a,b){c.vertexAttribDivisorANGLE(a,b)},b.drawArraysInstanced=function(a,b,d,e){c.drawArraysInstancedANGLE(a,b,d,e)},b.drawElementsInstanced=function(a,b,d,e,g){c.drawElementsInstancedANGLE(a,b,d,e,g)});var d=b.getExtension("OES_vertex_array_object");d&&(b.createVertexArray=function(){return d.createVertexArrayOES()},b.deleteVertexArray=function(a){d.deleteVertexArrayOES(a)},
b.bindVertexArray=function(a){d.bindVertexArrayOES(a)},b.isVertexArray=function(a){return d.isVertexArrayOES(a)});var e=b.getExtension("WEBGL_draw_buffers");e&&(b.drawBuffers=function(a,b){e.drawBuffersWEBGL(a,b)})}b.Yb=b.getExtension("EXT_disjoint_timer_query");var g="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");
(a=b.getSupportedExtensions())&&0<a.length&&b.getSupportedExtensions().forEach(function(a){-1!=g.indexOf(a)&&b.getExtension(a)})}}var Ya={},wb,xb,yb=["default","low-power","high-performance"],zb=[];function Ab(a,b,c,d){for(var e=0;e<a;e++){var g=Z[c](),l=g&&sb(d);g?(g.name=l,d[l]=g):X(1282);E[b+4*e>>2]=l}}
function Bb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>W.version){X(1282);return}d=Z.getSupportedExtensions();c=null===d?0:2*d.length;break;case 33307:case 33308:if(2>W.version){X(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":X(1280);return;case "object":if(null===
d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 35097:case 36389:case 34068:c=0;break;default:X(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)E[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){X(1280);x("GL_INVALID_ENUM in glGetIntegerv: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:X(1280);return}E[b>>2]=c}else X(1281)}
function Cb(a){var b=la(a)+1,c=R(b);B(a,A,c,b);return c}var Db={6402:1,6403:1,6406:1,6407:3,6408:4,6409:1,6410:2,33319:2,33320:2,35904:3,35906:4,36244:1,36248:3,36249:4},Eb={5120:1,5121:1,5122:2,5123:2,5124:4,5125:4,5126:4,5131:2,32819:2,32820:2,33635:2,33640:4,34042:4,35899:4,35902:4,36193:2};
function Fb(a,b,c,d,e){if(b=Db[b]*Eb[a])switch(c=e+d*(c*b+4-1&-4),a){case 5120:return C.subarray(e,c);case 5121:return A.subarray(e,c);case 5122:return D.subarray(e>>1,c>>1);case 5124:return E.subarray(e>>2,c>>2);case 5126:return F.subarray(e>>2,c>>2);case 5125:case 34042:case 35902:case 33640:case 35899:case 34042:return pa.subarray(e>>2,c>>2);case 5123:case 33635:case 32819:case 32820:case 36193:case 5131:return oa.subarray(e>>1,c>>1);default:X(1280)}else X(1280)}
function Gb(a){switch(a){case 5120:return C;case 5121:return A;case 5122:return D;case 5123:case 33635:case 32819:case 32820:case 36193:case 5131:return oa;case 5124:return E;case 5125:case 34042:case 35902:case 33640:case 35899:case 34042:return pa;case 5126:return F}}var Hb={5122:1,5123:1,5124:2,5125:2,5126:2,5131:1,32819:1,32820:1,33635:1,33640:2,34042:2,35899:2,35902:2,36193:1},Z;tb=new Float32Array(256);for(var Ib=0;256>Ib;Ib++)Y[Ib]=tb.subarray(0,Ib+1);for(var Jb=0;32>Jb;Jb++)zb.push(Array(Jb));
var Mb=f.asm({},{e:v,D:function(){},_:function(a){f.___errno_location&&(E[f.___errno_location()>>2]=a);return a},Ka:function(a,b){L=b;try{return Ga.Nb(),M(),M(),M(),M(),0}catch(c){return v(c),-c.Hb}},Aa:function(a,b){L=b;try{var c=Ga.Nb(),d=M(),e=M();return Ga.Zb(c,d,e)}catch(g){return v(g),-g.Hb}},S:function(a,b){L=b;try{var c=M(),d=M(),e=M();for(b=a=0;b<e;b++){for(var g=E[d+8*b>>2],l=E[d+(8*b+4)>>2],p=0;p<l;p++){var r=A[g+p],n=Ea[c];0===r||10===r?((1===c?ea:x)(ka(n,0)),n.length=0):n.push(r)}a+=
l}return a}catch(q){return v(q),-q.Hb}},p:function(a,b){L=b;return 0},ra:function(a,b){L=b;try{var c=y(M()),d=M(),e=M();return(void 0).open(c,d,e).fd}catch(g){return v(g),-g.Hb}},L:function(a,b){L=b;return 0},I:function(a,b){L=b;try{return Ga.Nb(),0}catch(c){return v(c),-c.Hb}},C:function(){},u:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Kb()});document.body.append(a)},t:function(){document.getElementById("_sokol_app_input_element").focus()},
s:function(){document.getElementById("_sokol_app_input_element").blur()},aa:function(){return window.devicePixelRatio||1},$:function(a,b,c){a=a?Q(a):f.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),G[b>>3]=a.right-a.left,G[c>>3]=a.bottom-a.top):(G[b>>3]=a.clientWidth,G[c>>3]=a.clientHeight);return 0},Xa:function(){return C.length},Wa:function(a,b,c){A.set(A.subarray(b,b+c),a)},Va:function(a,b){function c(d){Lb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},
Ua:function(a){Wa(a)},Z:function(a,b,c){a=Xa(a);if(!a)return-4;a.width=b;a.height=c;return 0},Ta:function(a,b,c,d){$a(a,b,c,d,2,"keydown");return 0},Sa:function(a,b,c,d){$a(a,b,c,d,1,"keypress");return 0},Ra:function(a,b,c,d){$a(a,b,c,d,3,"keyup");return 0},Qa:function(a,b,c,d){bb(a,b,c,d,5,"mousedown");return 0},Pa:function(a,b,c,d){bb(a,b,c,d,33,"mouseenter");return 0},Oa:function(a,b,c,d){bb(a,b,c,d,34,"mouseleave");return 0},Na:function(a,b,c,d){bb(a,b,c,d,8,"mousemove");return 0},Ma:function(a,
b,c,d){bb(a,b,c,d,6,"mouseup");return 0},La:function(a,b,c,d){cb(a,b,c,d);return 0},Ja:function(a,b,c,d){db(a,b,c,d,25,"touchcancel");return 0},Ia:function(a,b,c,d){db(a,b,c,d,23,"touchend");return 0},Ha:function(a,b,c,d){db(a,b,c,d,24,"touchmove");return 0},Ga:function(a,b,c,d){db(a,b,c,d,22,"touchstart");return 0},Fa:function(a,b,c,d){eb(a,b,c,d,31,"webglcontextlost");return 0},Ea:function(a,b,c,d){eb(a,b,c,d,32,"webglcontextrestored");return 0},Da:function(a,b,c,d){a=Q(a);return"undefined"!==typeof a.onwheel?
(fb(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(fb(a,b,c,d,"mousewheel"),0):-1},Y:function(a,b){var c={};b>>=2;c.alpha=!!E[b];c.depth=!!E[b+1];c.stencil=!!E[b+2];c.antialias=!!E[b+3];c.premultipliedAlpha=!!E[b+4];c.preserveDrawingBuffer=!!E[b+5];c.powerPreference=yb[E[b+6]];c.failIfMajorPerformanceCaveat=!!E[b+7];c.Ob=E[b+8];c.ac=E[b+9];c.Mb=E[b+10];c.Sb=E[b+11];c.bc=E[b+12];c.cc=E[b+13];a=Xa(a);!a||c.Sb?c=0:c=(a=1<c.Ob?a.getContext("webgl2",c):a.getContext("webgl",c)||a.getContext("experimental-webgl",
c))&&ub(a,c);return c},Ca:function(a){a>>=2;for(var b=0;14>b;++b)E[a+b]=0;E[a]=E[a+1]=E[a+3]=E[a+4]=E[a+8]=E[a+10]=1},Ba:function(a){W=pb[a];f.Xb=Z=W&&W.Kb;return!a||Z?0:-5},l:function(a){Z.activeTexture(a)},X:function(a,b){Z.attachShader(T[a],V[b])},d:function(a,b){35051==a?Z.Lb=b:35052==a&&(Z.Gb=b);Z.bindBuffer(a,kb[b])},i:function(a,b){Z.bindFramebuffer(a,lb[b])},c:function(a,b){Z.bindTexture(a,nb[b])},W:function(a){Z.bindVertexArray(ob[a])},V:function(a,b,c,d){Z.blendColor(a,b,c,d)},U:function(a,
b){Z.blendEquationSeparate(a,b)},T:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},r:function(a,b,c,d,e,g,l,p,r,n){Z.blitFramebuffer(a,b,c,d,e,g,l,p,r,n)},R:function(a,b,c,d){W.zb?c?Z.bufferData(a,A,d,c,b):Z.bufferData(a,b,d):Z.bufferData(a,c?A.subarray(c,c+b):b,d)},q:function(a,b,c,d){W.zb?Z.bufferSubData(a,b,A,d,c):Z.bufferSubData(a,b,A.subarray(d,d+c))},za:function(a){Z.clear(a)},ya:function(a,b,c,d){Z.clearColor(a,b,c,d)},xa:function(a){Z.clearDepth(a)},wa:function(a){Z.clearStencil(a)},B:function(a,
b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},va:function(a){Z.compileShader(V[a])},ua:function(){var a=sb(T),b=Z.createProgram();b.name=a;T[a]=b;return a},ta:function(a){var b=sb(V);V[b]=Z.createShader(a);return b},Q:function(a){Z.cullFace(a)},P:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=kb[d];e&&(Z.deleteBuffer(e),e.name=0,kb[d]=null,d==wb&&(wb=0),d==xb&&(xb=0),d==Z.Lb&&(Z.Lb=0),d==Z.Gb&&(Z.Gb=0))}},k:function(a,b){for(var c=0;c<a;++c){var d=E[b+4*c>>2],e=lb[d];e&&(Z.deleteFramebuffer(e),e.name=
0,lb[d]=null)}},A:function(a){if(a){var b=T[a];b?(Z.deleteProgram(b),b.name=0,T[a]=null,qb[a]=null):X(1281)}},o:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=mb[d];e&&(Z.deleteRenderbuffer(e),e.name=0,mb[d]=null)}},z:function(a){if(a){var b=V[a];b?(Z.deleteShader(b),V[a]=null):X(1281)}},O:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=nb[d];e&&(Z.deleteTexture(e),e.name=0,nb[d]=null)}},sa:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2];Z.deleteVertexArray(ob[d]);ob[d]=null}},
y:function(a){Z.depthFunc(a)},x:function(a){Z.depthMask(!!a)},f:function(a){Z.disable(a)},b:function(a){Z.disableVertexAttribArray(a)},qa:function(a,b,c){Z.drawArrays(a,b,c)},n:function(a,b){for(var c=zb[a],d=0;d<a;d++)c[d]=E[b+4*d>>2];Z.drawBuffers(c)},pa:function(a,b,c,d){Z.drawElements(a,b,c,d)},g:function(a){Z.enable(a)},oa:function(a){Z.enableVertexAttribArray(a)},N:function(a){Z.frontFace(a)},M:function(a,b){Ab(a,b,"createBuffer",kb)},na:function(a,b){Ab(a,b,"createTexture",nb)},ma:function(a,
b){Ab(a,b,"createVertexArray",ob)},la:function(a,b){return Z.getAttribLocation(T[a],y(b))},w:function(a,b){Bb(a,b)},ka:function(a,b,c,d){a=Z.getProgramInfoLog(T[a]);null===a&&(a="(unknown error)");0<b&&d?(b=B(a,A,d,b),c&&(E[c>>2]=b)):c&&(E[c>>2]=0)},K:function(a,b,c){if(c)if(a>=ib)X(1281);else{var d=qb[a];if(d)if(35716==b)a=Z.getProgramInfoLog(T[a]),null===a&&(a="(unknown error)"),E[c>>2]=a.length+1;else if(35719==b)E[c>>2]=d.Jb;else if(35722==b){if(-1==d.Eb){a=T[a];var e=Z.getProgramParameter(a,
35721);for(b=d.Eb=0;b<e;++b)d.Eb=Math.max(d.Eb,Z.getActiveAttrib(a,b).name.length+1)}E[c>>2]=d.Eb}else if(35381==b){if(-1==d.Fb)for(a=T[a],e=Z.getProgramParameter(a,35382),b=d.Fb=0;b<e;++b)d.Fb=Math.max(d.Fb,Z.getActiveUniformBlockName(a,b).length+1);E[c>>2]=d.Fb}else E[c>>2]=Z.getProgramParameter(T[a],b);else X(1282)}else X(1281)},ja:function(a,b,c,d){a=Z.getShaderInfoLog(V[a]);null===a&&(a="(unknown error)");0<b&&d?(b=B(a,A,d,b),c&&(E[c>>2]=b)):c&&(E[c>>2]=0)},J:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(V[a]),
null===a&&(a="(unknown error)"),E[c>>2]=a.length+1):35720==b?(a=Z.getShaderSource(V[a]),E[c>>2]=null===a||0==a.length?0:a.length+1):E[c>>2]=Z.getShaderParameter(V[a],b):X(1281)},ia:function(a){if(rb[a])return rb[a];switch(a){case 7939:var b=Z.getSupportedExtensions();for(var c=[],d=0;d<b.length;++d)c.push(b[d]),c.push("GL_"+b[d]);b=Cb(c.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Z.getParameter(a))||X(1280);b=Cb(b);break;case 7938:b=Z.getParameter(Z.VERSION);b=2<=W.version?"OpenGL ES 3.0 ("+
b+")":"OpenGL ES 2.0 ("+b+")";b=Cb(b);break;case 35724:b=Z.getParameter(Z.SHADING_LANGUAGE_VERSION);c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Cb(b);break;default:return X(1280),0}return rb[a]=b},j:function(a,b){b=y(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=qb[a]&&qb[a].Pb[b])&&0<=c&&c<a[0]?a[1]+c:-1},ha:function(a){Z.linkProgram(T[a]);
var b=T[a];a=qb[a]={Pb:{},Jb:0,Eb:-1,Fb:-1};for(var c=a.Pb,d=Z.getProgramParameter(b,35718),e=0;e<d;++e){var g=Z.getActiveUniform(b,e),l=g.name;a.Jb=Math.max(a.Jb,l.length+1);"]"==l.slice(-1)&&(l=l.slice(0,l.lastIndexOf("[")));var p=Z.getUniformLocation(b,l);if(p){var r=sb(U);c[l]=[g.size,r];U[r]=p;for(var n=1;n<g.size;++n)p=Z.getUniformLocation(b,l+"["+n+"]"),r=sb(U),U[r]=p}}},H:function(a,b){Z.polygonOffset(a,b)},m:function(a){Z.readBuffer(a)},G:function(a,b,c,d){Z.scissor(a,b,c,d)},ga:function(a,
b,c,d){for(var e="",g=0;g<b;++g){var l=d?E[d+4*g>>2]:-1;e+=y(E[c+4*g>>2],0>l?void 0:l)}Z.shaderSource(V[a],e)},fa:function(a,b,c){Z.stencilFunc(a,b,c)},F:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},v:function(a){Z.stencilMask(a)},ea:function(a,b,c){Z.stencilOp(a,b,c)},E:function(a,b,c,d){Z.stencilOpSeparate(a,b,c,d)},da:function(a,b,c,d,e,g,l,p,r){W.zb?Z.Gb?Z.texImage2D(a,b,c,d,e,g,l,p,r):0!=r?Z.texImage2D(a,b,c,d,e,g,l,p,Gb(p),r>>(Hb[p]|0)):Z.texImage2D(a,b,c,d,e,g,l,p,null):Z.texImage2D(a,
b,c,d,e,g,l,p,r?Fb(p,l,d,e,r):null)},gb:function(a,b,c,d,e,g,l,p,r,n){Z.Gb?Z.texImage3D(a,b,c,d,e,g,l,p,r,n):0!=n?Z.texImage3D(a,b,c,d,e,g,l,p,r,Gb(r),n>>(Hb[r]|0)):Z.texImage3D(a,b,c,d,e,g,l,p,r,null)},ca:function(a,b,c){Z.texParameterf(a,b,c)},h:function(a,b,c){Z.texParameteri(a,b,c)},fb:function(a,b,c){if(W.zb)Z.uniform1fv(U[a],F,c>>2,b);else{if(256>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=F[c+4*e>>2];else d=F.subarray(c>>2,c+4*b>>2);Z.uniform1fv(U[a],d)}},ba:function(a,b){Z.uniform1i(U[a],b)},eb:function(a,
b,c){if(W.zb)Z.uniform2fv(U[a],F,c>>2,2*b);else{if(256>=2*b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2];else d=F.subarray(c>>2,c+8*b>>2);Z.uniform2fv(U[a],d)}},db:function(a,b,c){if(W.zb)Z.uniform3fv(U[a],F,c>>2,3*b);else{if(256>=3*b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2],d[e+2]=F[c+(4*e+8)>>2];else d=F.subarray(c>>2,c+12*b>>2);Z.uniform3fv(U[a],d)}},cb:function(a,b,c){if(W.zb)Z.uniform4fv(U[a],F,c>>2,4*b);else{if(256>=4*b)for(var d=
Y[4*b-1],e=0;e<4*b;e+=4)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2],d[e+2]=F[c+(4*e+8)>>2],d[e+3]=F[c+(4*e+12)>>2];else d=F.subarray(c>>2,c+16*b>>2);Z.uniform4fv(U[a],d)}},bb:function(a,b,c,d){if(W.zb)Z.uniformMatrix4fv(U[a],!!c,F,d>>2,16*b);else{if(256>=16*b)for(var e=Y[16*b-1],g=0;g<16*b;g+=16)e[g]=F[d+4*g>>2],e[g+1]=F[d+(4*g+4)>>2],e[g+2]=F[d+(4*g+8)>>2],e[g+3]=F[d+(4*g+12)>>2],e[g+4]=F[d+(4*g+16)>>2],e[g+5]=F[d+(4*g+20)>>2],e[g+6]=F[d+(4*g+24)>>2],e[g+7]=F[d+(4*g+28)>>2],e[g+8]=F[d+(4*g+32)>>2],e[g+
9]=F[d+(4*g+36)>>2],e[g+10]=F[d+(4*g+40)>>2],e[g+11]=F[d+(4*g+44)>>2],e[g+12]=F[d+(4*g+48)>>2],e[g+13]=F[d+(4*g+52)>>2],e[g+14]=F[d+(4*g+56)>>2],e[g+15]=F[d+(4*g+60)>>2];else e=F.subarray(d>>2,d+64*b>>2);Z.uniformMatrix4fv(U[a],!!c,e)}},ab:function(a){Z.useProgram(T[a])},$a:function(a,b){Z.vertexAttribDivisor(a,b)},_a:function(a,b,c,d,e,g){Z.vertexAttribPointer(a,b,c,!!d,e,g)},Za:function(a,b,c,d){Z.viewport(a,b,c,d)},Ya:Wa,a:1289456},buffer);f.asm=Mb;
f.___em_js___sapp_js_create_textfield=function(){return f.asm.hb.apply(null,arguments)};f.___em_js___sapp_js_focus_textfield=function(){return f.asm.ib.apply(null,arguments)};f.___em_js___sapp_js_unfocus_textfield=function(){return f.asm.jb.apply(null,arguments)};f.___em_js___saudio_js_buffer_frames=function(){return f.asm.kb.apply(null,arguments)};f.___em_js___saudio_js_init=function(){return f.asm.lb.apply(null,arguments)};
f.___em_js___saudio_js_sample_rate=function(){return f.asm.mb.apply(null,arguments)};f.___em_js___stm_js_perfnow=function(){return f.asm.nb.apply(null,arguments)};var Kb=f.__sapp_emsc_notify_keyboard_hidden=function(){return f.asm.ob.apply(null,arguments)};f.__saudio_emsc_pull=function(){return f.asm.pb.apply(null,arguments)};f._free=function(){return f.asm.qb.apply(null,arguments)};f._main=function(){return f.asm.rb.apply(null,arguments)};
var R=f._malloc=function(){return f.asm.sb.apply(null,arguments)},na=f.stackAlloc=function(){return f.asm.xb.apply(null,arguments)},Lb=f.dynCall_idi=function(){return f.asm.tb.apply(null,arguments)},S=f.dynCall_iiii=function(){return f.asm.ub.apply(null,arguments)};f.dynCall_v=function(){return f.asm.vb.apply(null,arguments)};f.dynCall_vi=function(){return f.asm.wb.apply(null,arguments)};f.asm=Mb;
function w(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}w.prototype=Error();w.prototype.constructor=w;ya=function Nb(){f.calledRun||Ob();f.calledRun||(ya=Nb)};
f.callMain=function(a){a=a||[];va||(va=!0,I(ra));var b=a.length+1,c=na(4*(b+1));E[c>>2]=ma(f.thisProgram);for(var d=1;d<b;d++)E[(c>>2)+d]=ma(a[d-1]);E[(c>>2)+b]=0;try{var e=f._main(b,c,0);if(!f.noExitRuntime||0!==e){if(!f.noExitRuntime&&(ia=!0,f.onExit))f.onExit(e);f.quit(e,new w(e))}}catch(g){g instanceof w||("SimulateInfiniteLoop"==g?f.noExitRuntime=!0:((a=g)&&"object"===typeof g&&g.stack&&(a=[g,g.stack]),x("exception thrown: "+a),f.quit(1,g)))}finally{}};
function Ob(a){function b(){if(!f.calledRun&&(f.calledRun=!0,!ia)){va||(va=!0,I(ra));I(sa);if(f.onRuntimeInitialized)f.onRuntimeInitialized();f._main&&Pb&&f.callMain(a);if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;){var b=f.postRun.shift();ua.unshift(b)}I(ua)}}a=a||f.arguments;if(!(0<J)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)wa();I(qa);0<J||f.calledRun||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},
1);b()},1)):b())}}f.run=Ob;function v(a){if(f.onAbort)f.onAbort(a);void 0!==a?(ea(a),x(a),a=JSON.stringify(a)):a="";ia=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}f.abort=v;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Pb=!0;f.noInitialRun&&(Pb=!1);f.noExitRuntime=!0;Ob();
