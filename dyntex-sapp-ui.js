var f;f||(f=typeof Module !== 'undefined' ? Module : {});var h={},k;for(k in f)f.hasOwnProperty(k)&&(h[k]=f[k]);f.arguments=[];f.thisProgram="./this.program";f.quit=function(a,b){throw b;};f.preRun=[];f.postRun=[];var n=!1,t=!1,aa=!1,ba=!1,ca=!1;n="object"===typeof window;t="function"===typeof importScripts;aa=(ba="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)&&!n&&!t;ca=!n&&!aa&&!t;var u="",da,v;
if(aa){u=__dirname+"/";var ea,fa;da=function(a,b){ea||(ea=require("fs"));fa||(fa=require("path"));a=fa.normalize(a);a=ea.readFileSync(a);return b?a:a.toString()};v=function(a){a=da(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||w("Assertion failed: undefined");return a};1<process.argv.length&&(f.thisProgram=process.argv[1].replace(/\\/g,"/"));f.arguments=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=f);process.on("uncaughtException",function(a){if(!(a instanceof x))throw a;});
process.on("unhandledRejection",w);f.quit=function(a){process.exit(a)};f.inspect=function(){return"[Emscripten Module object]"}}else if(ca)"undefined"!=typeof read&&(da=function(a){return read(a)}),v=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||w("Assertion failed: undefined");return a},"undefined"!=typeof scriptArgs?f.arguments=scriptArgs:"undefined"!=typeof arguments&&(f.arguments=arguments),"function"===typeof quit&&
(f.quit=function(a){quit(a)});else if(n||t)t?u=self.location.href:document.currentScript&&(u=document.currentScript.src),u=0!==u.indexOf("blob:")?u.substr(0,u.lastIndexOf("/")+1):"",da=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},t&&(v=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ha=f.print||("undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null),z=f.printErr||("undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||ha);for(k in h)h.hasOwnProperty(k)&&(f[k]=h[k]);h=void 0;"object"!==typeof WebAssembly&&z("no native wasm support detected");var A,ia=!1,ja="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ka(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&ja)return ja.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var g=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|g);else{var l=a[b++]&63;e=224==(e&240)?(e&15)<<12|g<<6|l:(e&7)<<18|g<<12|l<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function B(a,b){return a?ka(C,a,b):""}
function D(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var g=0;g<a.length;++g){var l=a.charCodeAt(g);if(55296<=l&&57343>=l){var m=a.charCodeAt(++g);l=65536+((l&1023)<<10)|m&1023}if(127>=l){if(c>=d)break;b[c++]=l}else{if(2047>=l){if(c+1>=d)break;b[c++]=192|l>>6}else{if(65535>=l){if(c+2>=d)break;b[c++]=224|l>>12}else{if(c+3>=d)break;b[c++]=240|l>>18;b[c++]=128|l>>12&63}b[c++]=128|l>>6&63}b[c++]=128|l&63}}b[c]=0;return c-e}
function la(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function ma(a){var b=la(a)+1,c=na(b);D(a,E,c,b);return c}function oa(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,E,C,F,pa,G,qa,H,I;
function ra(){f.HEAP8=E=new Int8Array(buffer);f.HEAP16=F=new Int16Array(buffer);f.HEAP32=G=new Int32Array(buffer);f.HEAPU8=C=new Uint8Array(buffer);f.HEAPU16=pa=new Uint16Array(buffer);f.HEAPU32=qa=new Uint32Array(buffer);f.HEAPF32=H=new Float32Array(buffer);f.HEAPF64=I=new Float64Array(buffer)}var sa=f.TOTAL_MEMORY||33554432;5242880>sa&&z("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+sa+"! (TOTAL_STACK=5242880)");f.wasmMemory?A=f.wasmMemory:A=new WebAssembly.Memory({initial:sa/65536});
A&&(buffer=A.buffer);sa=buffer.byteLength;ra();G[395540]=6825056;function ta(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.bc;"number"===typeof c?void 0===b.Sb?f.dynCall_v(c):f.dynCall_vi(c,b.Sb):c(void 0===b.Sb?null:b.Sb)}}}var ua=[],va=[],wa=[],xa=[],ya=[];function za(){var a=f.preRun.shift();ua.unshift(a)}var Aa=Math.abs,Ba=Math.sqrt,Ca=Math.floor,J=0,Da=null,Ea=null;f.preloadedImages={};f.preloadedAudios={};
function Fa(){var a=K;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var K="dyntex-sapp-ui.wasm";if(!Fa()){var Ga=K;K=f.locateFile?f.locateFile(Ga,u):u+Ga}function Ha(){try{if(f.wasmBinary)return new Uint8Array(f.wasmBinary);if(v)return v(K);throw"both async and sync fetching of the wasm failed";}catch(a){w(a)}}
function Ia(){return f.wasmBinary||!n&&!t||"function"!==typeof fetch?new Promise(function(a){a(Ha())}):fetch(K,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+K+"'";return a.arrayBuffer()}).catch(function(){return Ha()})}
function Ja(a){function b(a){f.asm=a.exports;J--;f.monitorRunDependencies&&f.monitorRunDependencies(J);0==J&&(null!==Da&&(clearInterval(Da),Da=null),Ea&&(a=Ea,Ea=null,a()))}function c(a){b(a.instance)}function d(a){return Ia().then(function(a){return WebAssembly.instantiate(a,e)}).then(a,function(a){z("failed to asynchronously prepare wasm: "+a);w(a)})}var e={env:a};J++;f.monitorRunDependencies&&f.monitorRunDependencies(J);if(f.instantiateWasm)try{return f.instantiateWasm(e,b)}catch(g){return z("Module.instantiateWasm callback failed with error: "+
g),!1}(function(){if(f.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||Fa()||"function"!==typeof fetch)return d(c);fetch(K,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,e).then(c,function(a){z("wasm streaming compile failed: "+a);z("falling back to ArrayBuffer instantiation");d(c)})})})();return{}}f.asm=function(a,b){b.memory=A;b.table=new WebAssembly.Table({initial:87,maximum:87,element:"anyfunc"});return Ja(b)};va.push({bc:function(){Ka()}});
var Ma=[null,[],[]],L=0;function M(){L+=4;return G[L-4>>2]}var Na={};function Oa(){f.___errno_location&&(G[f.___errno_location()>>2]=12)}var Pa=0,Qa=0,N=0,Ra=0,Sa=0,Ta=null,Ua=null,Va=!1;function Wa(){for(var a=O.length-1;0<=a;--a)Xa(a);O=[];Ya=[]}var Ya=[];function Za(){if($a&&ab.Kb)for(var a=0;a<Ya.length;++a){var b=Ya[a];Ya.splice(a,1);--a;b.nc.apply(this,b.fc)}}var $a=0,ab=null,O=[];function bb(){return-1!==navigator.userAgent.indexOf("MSIE")||0<navigator.appVersion.indexOf("Trident/")}
function Xa(a){var b=O[a];b.target.removeEventListener(b.Ib,b.$b,b.Lb);O.splice(a,1)}function P(a){function b(b){++$a;ab=a;Za();a.Nb(b);Za();--$a}if(a.Mb)a.$b=b,a.target.addEventListener(a.Ib,b,a.Lb),O.push(a),Va||(xa.push(Wa),Va=!0);else for(var c=0;c<O.length;++c)O[c].target==a.target&&O[c].Ib==a.Ib&&Xa(c--)}var cb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function Q(a){try{if(!a)return window;"number"===typeof a&&(a=cb[a]||B(a));return"#window"===a?window:"#document"===a?document:"#screen"===a?screen:"#canvas"===a?f.canvas:"string"===typeof a?document.getElementById(a):a}catch(b){return null}}function db(a){"number"===typeof a&&(a=B(a));return a&&"#canvas"!==a?"undefined"!==typeof eb&&fb[a]?fb[a]:Q(a):"undefined"!==typeof eb&&fb.canvas?fb.canvas:f.canvas}
function gb(a,b,c,d,e,g){Pa||(Pa=R(164));a={target:Q(a),Kb:bb()?!1:!0,Ib:g,Mb:d,Nb:function(a){a=a||window.event;var c=Pa;D(a.key?a.key:"",C,c+0,32);D(a.code?a.code:"",C,c+32,32);G[c+64>>2]=a.location;G[c+68>>2]=a.ctrlKey;G[c+72>>2]=a.shiftKey;G[c+76>>2]=a.altKey;G[c+80>>2]=a.metaKey;G[c+84>>2]=a.repeat;D(a.locale?a.locale:"",C,c+88,32);D(a.char?a.char:"",C,c+120,32);G[c+152>>2]=a.charCode;G[c+156>>2]=a.keyCode;G[c+160>>2]=a.which;S(d,e,c,b)&&a.preventDefault()},Lb:c};P(a)}
function hb(a,b,c){I[a>>3]=window.performance&&window.performance.now?window.performance.now():Date.now();G[a+8>>2]=b.screenX;G[a+12>>2]=b.screenY;G[a+16>>2]=b.clientX;G[a+20>>2]=b.clientY;G[a+24>>2]=b.ctrlKey;G[a+28>>2]=b.shiftKey;G[a+32>>2]=b.altKey;G[a+36>>2]=b.metaKey;F[a+40>>1]=b.button;F[a+42>>1]=b.buttons;G[a+44>>2]=b.movementX||b.mozMovementX||b.webkitMovementX||b.screenX-Ta;G[a+48>>2]=b.movementY||b.mozMovementY||b.webkitMovementY||b.screenY-Ua;if(f.canvas){var d=f.canvas.getBoundingClientRect();
G[a+60>>2]=b.clientX-d.left;G[a+64>>2]=b.clientY-d.top}else G[a+60>>2]=0,G[a+64>>2]=0;c?(d=c.getBoundingClientRect?c.getBoundingClientRect():{left:0,top:0},G[a+52>>2]=b.clientX-d.left,G[a+56>>2]=b.clientY-d.top):(G[a+52>>2]=0,G[a+56>>2]=0);"wheel"!==b.type&&"mousewheel"!==b.type&&(Ta=b.screenX,Ua=b.screenY)}
function ib(a,b,c,d,e,g){Qa||(Qa=R(72));a=Q(a);c={target:a,Kb:"mousemove"!=g&&"mouseenter"!=g&&"mouseleave"!=g,Ib:g,Mb:d,Nb:function(c){c=c||window.event;hb(Qa,c,a);S(d,e,Qa,b)&&c.preventDefault()},Lb:c};bb()&&"mousedown"==g&&(c.Kb=!1);P(c)}
function jb(a,b,c,d){Ra||(Ra=R(36));a=Q(a);P({target:a,Kb:!1,Ib:"resize",Mb:d,Nb:function(c){c=c||window.event;if(c.target==a){var e=0<window.pageXOffset||0<window.pageYOffset?[window.pageXOffset,window.pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.scrollLeft|0,document.body.scrollTop|0],l=Ra;G[l>>2]=c.detail;G[l+4>>2]=document.body.clientWidth;
G[l+8>>2]=document.body.clientHeight;G[l+12>>2]=window.innerWidth;G[l+16>>2]=window.innerHeight;G[l+20>>2]=window.outerWidth;G[l+24>>2]=window.outerHeight;G[l+28>>2]=e[0];G[l+32>>2]=e[1];S(d,10,l,b)&&c.preventDefault()}},Lb:c})}
function kb(a,b,c,d,e,g){Sa||(Sa=R(1684));a=Q(a);P({target:a,Kb:"touchstart"==g||"touchend"==g,Ib:g,Mb:d,Nb:function(c){c=c||window.event;for(var g={},l=0;l<c.touches.length;++l){var q=c.touches[l];q.Ub=!1;g[q.identifier]=q}for(l=0;l<c.changedTouches.length;++l)q=c.changedTouches[l],g[q.identifier]=q,q.Ub=!0;for(l=0;l<c.targetTouches.length;++l)q=c.targetTouches[l],g[q.identifier].dc=!0;var r=q=Sa;G[r+4>>2]=c.ctrlKey;G[r+8>>2]=c.shiftKey;G[r+12>>2]=c.altKey;G[r+16>>2]=c.metaKey;r+=20;var La=f.canvas?
f.canvas.getBoundingClientRect():void 0,ob=a.getBoundingClientRect?a.getBoundingClientRect():{left:0,top:0},pb=0;for(l in g){var y=g[l];G[r>>2]=y.identifier;G[r+4>>2]=y.screenX;G[r+8>>2]=y.screenY;G[r+12>>2]=y.clientX;G[r+16>>2]=y.clientY;G[r+20>>2]=y.pageX;G[r+24>>2]=y.pageY;G[r+28>>2]=y.Ub;G[r+32>>2]=y.dc;La?(G[r+44>>2]=y.clientX-La.left,G[r+48>>2]=y.clientY-La.top):(G[r+44>>2]=0,G[r+48>>2]=0);G[r+36>>2]=y.clientX-ob.left;G[r+40>>2]=y.clientY-ob.top;r+=52;if(32<=++pb)break}G[q>>2]=pb;S(d,e,q,b)&&
c.preventDefault()},Lb:c})}function lb(a,b,c,d,e,g){a||(a=f.canvas);a={target:Q(a),Kb:!1,Ib:g,Mb:d,Nb:function(a){a=a||window.event;S(d,e,0,b)&&a.preventDefault()},Lb:c};P(a)}
function mb(a,b,c,d,e){function g(c){c=c||window.event;hb(N,c,a);I[N+72>>3]=c.wheelDeltaX||0;I[N+80>>3]=-(c.wheelDeltaY?c.wheelDeltaY:c.wheelDelta);I[N+88>>3]=0;G[N+96>>2]=0;S(d,9,N,b)&&c.preventDefault()}function l(c){c=c||window.event;var e=N;hb(e,c,a);I[e+72>>3]=c.deltaX;I[e+80>>3]=c.deltaY;I[e+88>>3]=c.deltaZ;G[e+96>>2]=c.deltaMode;S(d,9,e,b)&&c.preventDefault()}N||(N=R(104));P({target:a,Kb:!0,Ib:e,Mb:d,Nb:"wheel"==e?l:g,Lb:c})}
var nb=1,qb=0,rb=[],T=[],sb=[],tb=[],ub=[],U=[],V=[],vb=[],wb={},W=null,fb={},xb={},yb={};function X(a){qb||(qb=a)}function zb(a){for(var b=nb++,c=a.length;c<b;c++)a[c]=null;return b}var Ab=null,Y=[0];function Bb(a,b){function c(){var a=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return a?parseInt(a[2],10):!1}var d=R(8),e={handle:d,attributes:b,version:b.Yb,Rb:a};e.Hb=2<=e.version&&(!1===c()||58<=c());a.canvas&&(a.canvas.ec=e);wb[d]=e;("undefined"===typeof b.Wb||b.Wb)&&Cb(e);return d}
function Cb(a){a||(a=W);if(!a.cc){a.cc=!0;var b=a.Rb;if(2>a.version){var c=b.getExtension("ANGLE_instanced_arrays");c&&(b.vertexAttribDivisor=function(a,b){c.vertexAttribDivisorANGLE(a,b)},b.drawArraysInstanced=function(a,b,d,e){c.drawArraysInstancedANGLE(a,b,d,e)},b.drawElementsInstanced=function(a,b,d,e,g){c.drawElementsInstancedANGLE(a,b,d,e,g)});var d=b.getExtension("OES_vertex_array_object");d&&(b.createVertexArray=function(){return d.createVertexArrayOES()},b.deleteVertexArray=function(a){d.deleteVertexArrayOES(a)},
b.bindVertexArray=function(a){d.bindVertexArrayOES(a)},b.isVertexArray=function(a){return d.isVertexArrayOES(a)});var e=b.getExtension("WEBGL_draw_buffers");e&&(b.drawBuffers=function(a,b){e.drawBuffersWEBGL(a,b)})}b.ic=b.getExtension("EXT_disjoint_timer_query");var g="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");
(a=b.getSupportedExtensions())&&0<a.length&&b.getSupportedExtensions().forEach(function(a){-1!=g.indexOf(a)&&b.getExtension(a)})}}var eb={},Db,Eb,Fb=["default","low-power","high-performance"],Gb=[];function Hb(a,b,c,d){for(var e=0;e<a;e++){var g=Z[c](),l=g&&zb(d);g?(g.name=l,d[l]=g):X(1282);G[b+4*e>>2]=l}}
function Ib(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>W.version){X(1282);return}d=Z.getSupportedExtensions();c=null===d?0:2*d.length;break;case 33307:case 33308:if(2>W.version){X(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":X(1280);return;case "object":if(null===
d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 35097:case 36389:case 34068:c=0;break;default:X(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)G[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){X(1280);z("GL_INVALID_ENUM in glGetIntegerv: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:X(1280);return}G[b>>2]=c}else X(1281)}
function Jb(a){var b=la(a)+1,c=R(b);D(a,C,c,b);return c}var Kb={6402:1,6403:1,6406:1,6407:3,6408:4,6409:1,6410:2,33319:2,33320:2,35904:3,35906:4,36244:1,36248:3,36249:4},Lb={5120:1,5121:1,5122:2,5123:2,5124:4,5125:4,5126:4,5131:2,32819:2,32820:2,33635:2,33640:4,34042:4,35899:4,35902:4,36193:2};
function Mb(a,b,c,d,e){if(b=Kb[b]*Lb[a])switch(c=e+d*(c*b+4-1&-4),a){case 5120:return E.subarray(e,c);case 5121:return C.subarray(e,c);case 5122:return F.subarray(e>>1,c>>1);case 5124:return G.subarray(e>>2,c>>2);case 5126:return H.subarray(e>>2,c>>2);case 5125:case 34042:case 35902:case 33640:case 35899:case 34042:return qa.subarray(e>>2,c>>2);case 5123:case 33635:case 32819:case 32820:case 36193:case 5131:return pa.subarray(e>>1,c>>1);default:X(1280)}else X(1280)}
function Nb(a){switch(a){case 5120:return E;case 5121:return C;case 5122:return F;case 5123:case 33635:case 32819:case 32820:case 36193:case 5131:return pa;case 5124:return G;case 5125:case 34042:case 35902:case 33640:case 35899:case 34042:return qa;case 5126:return H}}var Ob={5122:1,5123:1,5124:2,5125:2,5126:2,5131:1,32819:1,32820:1,33635:1,33640:2,34042:2,35899:2,35902:2,36193:1};
function Pb(a){a=oa(a);var b=buffer.byteLength;try{return-1!==A.grow((a-b)/65536)?(buffer=A.buffer,!0):!1}catch(c){return!1}}var Z;Ab=new Float32Array(256);for(var Qb=0;256>Qb;Qb++)Y[Qb]=Ab.subarray(0,Qb+1);for(var Rb=0;32>Rb;Rb++)Gb.push(Array(Rb));
var Yb=f.asm({},{fb:function(){},hb:function(a,b){L=b;try{return Na.Xb(),M(),M(),M(),M(),0}catch(c){return w(c),-c.Qb}},gb:function(a,b){L=b;try{var c=Na.Xb(),d=M(),e=M();return Na.jc(c,d,e)}catch(g){return w(g),-g.Qb}},ca:function(a,b){L=b;try{var c=M(),d=M(),e=M();for(b=a=0;b<e;b++){for(var g=G[d+8*b>>2],l=G[d+(8*b+4)>>2],m=0;m<l;m++){var p=C[g+m],q=Ma[c];0===p||10===p?((1===c?ha:z)(ka(q,0)),q.length=0):q.push(p)}a+=l}return a}catch(r){return w(r),-r.Qb}},q:function(a,b){L=b;return 0},ib:function(a,
b){L=b;try{var c=B(M()),d=M(),e=M();return(void 0).open(c,d,e).fd}catch(g){return w(g),-g.Qb}},da:function(a,b){L=b;return 0},ba:function(a,b){L=b;try{return Na.Xb(),0}catch(c){return w(c),-c.Qb}},B:function(){},aa:function(){return window.devicePixelRatio||1},ga:function(a,b,c){a=a?Q(a):f.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),I[b>>3]=a.right-a.left,I[c>>3]=a.bottom-a.top):(I[b>>3]=a.clientWidth,I[c>>3]=a.clientHeight);return 0},$a:function(a,b,c){C.set(C.subarray(b,
b+c),a)},Qa:function(a,b){function c(d){Sb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},_:function(a,b,c){a=db(a);if(!a)return-4;a.width=b;a.height=c;return 0},Za:function(a,b,c,d){gb(a,b,c,d,2,"keydown");return 0},Xa:function(a,b,c,d){gb(a,b,c,d,1,"keypress");return 0},Ya:function(a,b,c,d){gb(a,b,c,d,3,"keyup");return 0},va:function(a,b,c,d){ib(a,b,c,d,5,"mousedown");return 0},jb:function(a,b,c,d){ib(a,b,c,d,33,"mouseenter");return 0},db:function(a,b,c,d){ib(a,b,c,d,34,"mouseleave");
return 0},pb:function(a,b,c,d){ib(a,b,c,d,8,"mousemove");return 0},oa:function(a,b,c,d){ib(a,b,c,d,6,"mouseup");return 0},qb:function(a,b,c,d){jb(a,b,c,d);return 0},Ta:function(a,b,c,d){kb(a,b,c,d,25,"touchcancel");return 0},Ua:function(a,b,c,d){kb(a,b,c,d,23,"touchend");return 0},Va:function(a,b,c,d){kb(a,b,c,d,24,"touchmove");return 0},Wa:function(a,b,c,d){kb(a,b,c,d,22,"touchstart");return 0},Sa:function(a,b,c,d){lb(a,b,c,d,31,"webglcontextlost");return 0},Ra:function(a,b,c,d){lb(a,b,c,d,32,"webglcontextrestored");
return 0},_a:function(a,b,c,d){a=Q(a);return"undefined"!==typeof a.onwheel?(mb(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(mb(a,b,c,d,"mousewheel"),0):-1},R:function(a,b){var c={};b>>=2;c.alpha=!!G[b];c.depth=!!G[b+1];c.stencil=!!G[b+2];c.antialias=!!G[b+3];c.premultipliedAlpha=!!G[b+4];c.preserveDrawingBuffer=!!G[b+5];c.powerPreference=Fb[G[b+6]];c.failIfMajorPerformanceCaveat=!!G[b+7];c.Yb=G[b+8];c.kc=G[b+9];c.Wb=G[b+10];c.ac=G[b+11];c.lc=G[b+12];c.mc=G[b+13];a=db(a);!a||c.ac?c=0:c=
(a=1<c.Yb?a.getContext("webgl2",c):a.getContext("webgl",c)||a.getContext("experimental-webgl",c))?Bb(a,c):0;return c},xa:function(a,b){a=wb[a];b=B(b);0==b.indexOf("GL_")&&(b=b.substr(3));return!!a.Rb.getExtension(b)},La:function(a){a>>=2;for(var b=0;14>b;++b)G[a+b]=0;G[a]=G[a+1]=G[a+3]=G[a+4]=G[a+8]=G[a+10]=1},Aa:function(a){W=wb[a];f.hc=Z=W&&W.Rb;return!a||Z?0:-5},eb:Aa,ab:Aa,cb:Ca,g:function(a){Z.activeTexture(a)},Q:function(a,b){Z.attachShader(T[a],V[b])},c:function(a,b){35051==a?Z.Vb=b:35052==
a&&(Z.Jb=b);Z.bindBuffer(a,rb[b])},h:function(a,b){Z.bindFramebuffer(a,sb[b])},U:function(a,b){Z.bindRenderbuffer(a,tb[b])},a:function(a,b){Z.bindTexture(a,ub[b])},$:function(a){Z.bindVertexArray(vb[a])},H:function(a,b,c,d){Z.blendColor(a,b,c,d)},I:function(a,b){Z.blendEquationSeparate(a,b)},J:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},l:function(a,b,c,d,e,g,l,m,p,q){Z.blitFramebuffer(a,b,c,d,e,g,l,m,p,q)},W:function(a,b,c,d){W.Hb?c?Z.bufferData(a,C,d,c,b):Z.bufferData(a,b,d):Z.bufferData(a,
c?C.subarray(c,c+b):b,d)},o:function(a,b,c,d){W.Hb?Z.bufferSubData(a,b,C,d,c):Z.bufferSubData(a,b,C.subarray(d,d+c))},M:function(a){Z.clear(a)},za:function(a,b,c,d){Z.clearColor(a,b,c,d)},ya:function(a){Z.clearDepth(a)},wa:function(a){Z.clearStencil(a)},x:function(a,b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},lb:function(a){Z.compileShader(V[a])},Ja:function(a,b,c,d,e,g,l,m){W.Hb?Z.Jb?Z.compressedTexImage2D(a,b,c,d,e,g,l,m):Z.compressedTexImage2D(a,b,c,d,e,g,C,m,l):Z.compressedTexImage2D(a,b,c,d,e,g,m?C.subarray(m,
m+l):null)},Ha:function(a,b,c,d,e,g,l,m,p){W.Hb?Z.Jb?Z.compressedTexImage3D(a,b,c,d,e,g,l,m,p):Z.compressedTexImage3D(a,b,c,d,e,g,l,C,p,m):Z.compressedTexImage3D(a,b,c,d,e,g,l,p?C.subarray(p,p+m):null)},Ea:function(){var a=zb(T),b=Z.createProgram();b.name=a;T[a]=b;return a},nb:function(a){var b=zb(V);V[b]=Z.createShader(a);return b},G:function(a){Z.cullFace(a)},Z:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],e=rb[d];e&&(Z.deleteBuffer(e),e.name=0,rb[d]=null,d==Db&&(Db=0),d==Eb&&(Eb=0),d==Z.Vb&&
(Z.Vb=0),d==Z.Jb&&(Z.Jb=0))}},j:function(a,b){for(var c=0;c<a;++c){var d=G[b+4*c>>2],e=sb[d];e&&(Z.deleteFramebuffer(e),e.name=0,sb[d]=null)}},z:function(a){if(a){var b=T[a];b?(Z.deleteProgram(b),b.name=0,T[a]=null,xb[a]=null):X(1281)}},p:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],e=tb[d];e&&(Z.deleteRenderbuffer(e),e.name=0,tb[d]=null)}},y:function(a){if(a){var b=V[a];b?(Z.deleteShader(b),V[a]=null):X(1281)}},Y:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],e=ub[d];e&&(Z.deleteTexture(e),
e.name=0,ub[d]=null)}},Ma:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2];Z.deleteVertexArray(vb[d]);vb[d]=null}},v:function(a){Z.depthFunc(a)},w:function(a){Z.depthMask(!!a)},d:function(a){Z.disable(a)},b:function(a){Z.disableVertexAttribArray(a)},ja:function(a,b,c){Z.drawArrays(a,b,c)},n:function(a,b){for(var c=Gb[a],d=0;d<a;d++)c[d]=G[b+4*d>>2];Z.drawBuffers(c)},ka:function(a,b,c,d){Z.drawElements(a,b,c,d)},e:function(a){Z.enable(a)},ra:function(a){Z.enableVertexAttribArray(a)},F:function(a){Z.frontFace(a)},
X:function(a,b){Hb(a,b,"createBuffer",rb)},V:function(a,b){Hb(a,b,"createRenderbuffer",tb)},Ka:function(a,b){Hb(a,b,"createTexture",ub)},Na:function(a,b){Hb(a,b,"createVertexArray",vb)},Ba:function(a,b){return Z.getAttribLocation(T[a],B(b))},A:function(a,b){Ib(a,b)},Ca:function(a,b,c,d){a=Z.getProgramInfoLog(T[a]);null===a&&(a="(unknown error)");0<b&&d?(b=D(a,C,d,b),c&&(G[c>>2]=b)):c&&(G[c>>2]=0)},P:function(a,b,c){if(c)if(a>=nb)X(1281);else{var d=xb[a];if(d)if(35716==b)a=Z.getProgramInfoLog(T[a]),
null===a&&(a="(unknown error)"),G[c>>2]=a.length+1;else if(35719==b)G[c>>2]=d.Tb;else if(35722==b){if(-1==d.Ob){a=T[a];var e=Z.getProgramParameter(a,35721);for(b=d.Ob=0;b<e;++b)d.Ob=Math.max(d.Ob,Z.getActiveAttrib(a,b).name.length+1)}G[c>>2]=d.Ob}else if(35381==b){if(-1==d.Pb)for(a=T[a],e=Z.getProgramParameter(a,35382),b=d.Pb=0;b<e;++b)d.Pb=Math.max(d.Pb,Z.getActiveUniformBlockName(a,b).length+1);G[c>>2]=d.Pb}else G[c>>2]=Z.getProgramParameter(T[a],b);else X(1282)}else X(1281)},kb:function(a,b,c,
d){a=Z.getShaderInfoLog(V[a]);null===a&&(a="(unknown error)");0<b&&d?(b=D(a,C,d,b),c&&(G[c>>2]=b)):c&&(G[c>>2]=0)},ea:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(V[a]),null===a&&(a="(unknown error)"),G[c>>2]=a.length+1):35720==b?(a=Z.getShaderSource(V[a]),G[c>>2]=null===a||0==a.length?0:a.length+1):G[c>>2]=Z.getShaderParameter(V[a],b):X(1281)},Oa:function(a){if(yb[a])return yb[a];switch(a){case 7939:var b=Z.getSupportedExtensions();for(var c=[],d=0;d<b.length;++d)c.push(b[d]),c.push("GL_"+b[d]);
b=Jb(c.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Z.getParameter(a))||X(1280);b=Jb(b);break;case 7938:b=Z.getParameter(Z.VERSION);b=2<=W.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Jb(b);break;case 35724:b=Z.getParameter(Z.SHADING_LANGUAGE_VERSION);c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Jb(b);break;default:return X(1280),0}return yb[a]=b},k:function(a,b){b=B(b);var c=
0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=xb[a]&&xb[a].Zb[b])&&0<=c&&c<a[0]?a[1]+c:-1},Da:function(a){Z.linkProgram(T[a]);var b=T[a];a=xb[a]={Zb:{},Tb:0,Ob:-1,Pb:-1};for(var c=a.Zb,d=Z.getProgramParameter(b,35718),e=0;e<d;++e){var g=Z.getActiveUniform(b,e),l=g.name;a.Tb=Math.max(a.Tb,l.length+1);"]"==l.slice(-1)&&(l=l.slice(0,l.lastIndexOf("[")));var m=Z.getUniformLocation(b,l);if(m){var p=zb(U);c[l]=[g.size,p];U[p]=m;for(var q=
1;q<g.size;++q)m=Z.getUniformLocation(b,l+"["+q+"]"),p=zb(U),U[p]=m}}},E:function(a,b){Z.polygonOffset(a,b)},m:function(a){Z.readBuffer(a)},Fa:function(a,b,c,d){Z.renderbufferStorage(a,b,c,d)},T:function(a,b,c,d,e){Z.renderbufferStorageMultisample(a,b,c,d,e)},N:function(a,b,c,d){Z.scissor(a,b,c,d)},mb:function(a,b,c,d){for(var e="",g=0;g<b;++g){var l=d?G[d+4*g>>2]:-1;e+=B(G[c+4*g>>2],0>l?void 0:l)}Z.shaderSource(V[a],e)},ia:function(a,b,c){Z.stencilFunc(a,b,c)},L:function(a,b,c,d){Z.stencilFuncSeparate(a,
b,c,d)},u:function(a){Z.stencilMask(a)},ha:function(a,b,c){Z.stencilOp(a,b,c)},K:function(a,b,c,d){Z.stencilOpSeparate(a,b,c,d)},Ia:function(a,b,c,d,e,g,l,m,p){W.Hb?Z.Jb?Z.texImage2D(a,b,c,d,e,g,l,m,p):0!=p?Z.texImage2D(a,b,c,d,e,g,l,m,Nb(m),p>>(Ob[m]|0)):Z.texImage2D(a,b,c,d,e,g,l,m,null):Z.texImage2D(a,b,c,d,e,g,l,m,p?Mb(m,l,d,e,p):null)},Ga:function(a,b,c,d,e,g,l,m,p,q){Z.Jb?Z.texImage3D(a,b,c,d,e,g,l,m,p,q):0!=q?Z.texImage3D(a,b,c,d,e,g,l,m,p,Nb(p),q>>(Ob[p]|0)):Z.texImage3D(a,b,c,d,e,g,l,m,p,
null)},S:function(a,b,c){Z.texParameterf(a,b,c)},f:function(a,b,c){Z.texParameteri(a,b,c)},fa:function(a,b,c,d,e,g,l,m,p){if(W.Hb)Z.Jb?Z.texSubImage2D(a,b,c,d,e,g,l,m,p):0!=p?Z.texSubImage2D(a,b,c,d,e,g,l,m,Nb(m),p>>(Ob[m]|0)):Z.texSubImage2D(a,b,c,d,e,g,l,m,null);else{var q=null;p&&(q=Mb(m,l,e,g,p));Z.texSubImage2D(a,b,c,d,e,g,l,m,q)}},C:function(a,b,c,d,e,g,l,m,p,q,r){Z.Jb?Z.texSubImage3D(a,b,c,d,e,g,l,m,p,q,r):0!=r?Z.texSubImage3D(a,b,c,d,e,g,l,m,p,q,Nb(q),r>>(Ob[q]|0)):Z.texSubImage3D(a,b,c,d,
e,g,l,m,p,q,null)},qa:function(a,b,c){if(W.Hb)Z.uniform1fv(U[a],H,c>>2,b);else{if(256>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=H[c+4*e>>2];else d=H.subarray(c>>2,c+4*b>>2);Z.uniform1fv(U[a],d)}},D:function(a,b){Z.uniform1i(U[a],b)},pa:function(a,b,c){if(W.Hb)Z.uniform2fv(U[a],H,c>>2,2*b);else{if(256>=2*b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=H[c+4*e>>2],d[e+1]=H[c+(4*e+4)>>2];else d=H.subarray(c>>2,c+8*b>>2);Z.uniform2fv(U[a],d)}},na:function(a,b,c){if(W.Hb)Z.uniform3fv(U[a],H,c>>2,3*b);else{if(256>=
3*b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=H[c+4*e>>2],d[e+1]=H[c+(4*e+4)>>2],d[e+2]=H[c+(4*e+8)>>2];else d=H.subarray(c>>2,c+12*b>>2);Z.uniform3fv(U[a],d)}},ma:function(a,b,c){if(W.Hb)Z.uniform4fv(U[a],H,c>>2,4*b);else{if(256>=4*b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=H[c+4*e>>2],d[e+1]=H[c+(4*e+4)>>2],d[e+2]=H[c+(4*e+8)>>2],d[e+3]=H[c+(4*e+12)>>2];else d=H.subarray(c>>2,c+16*b>>2);Z.uniform4fv(U[a],d)}},la:function(a,b,c,d){if(W.Hb)Z.uniformMatrix4fv(U[a],!!c,H,d>>2,16*b);else{if(256>=16*b)for(var e=
Y[16*b-1],g=0;g<16*b;g+=16)e[g]=H[d+4*g>>2],e[g+1]=H[d+(4*g+4)>>2],e[g+2]=H[d+(4*g+8)>>2],e[g+3]=H[d+(4*g+12)>>2],e[g+4]=H[d+(4*g+16)>>2],e[g+5]=H[d+(4*g+20)>>2],e[g+6]=H[d+(4*g+24)>>2],e[g+7]=H[d+(4*g+28)>>2],e[g+8]=H[d+(4*g+32)>>2],e[g+9]=H[d+(4*g+36)>>2],e[g+10]=H[d+(4*g+40)>>2],e[g+11]=H[d+(4*g+44)>>2],e[g+12]=H[d+(4*g+48)>>2],e[g+13]=H[d+(4*g+52)>>2],e[g+14]=H[d+(4*g+56)>>2],e[g+15]=H[d+(4*g+60)>>2];else e=H.subarray(d>>2,d+64*b>>2);Z.uniformMatrix4fv(U[a],!!c,e)}},ua:function(a){Z.useProgram(T[a])},
sa:function(a,b){Z.vertexAttribDivisor(a,b)},ta:function(a,b,c,d,e,g){Z.vertexAttribPointer(a,b,c,!!d,e,g)},O:function(a,b,c,d){Z.viewport(a,b,c,d)},t:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Tb()});document.body.append(a)},s:function(){document.getElementById("_sokol_app_input_element").focus()},Pa:function(){window.addEventListener("beforeunload",function(a){0!=Ub()&&(a.preventDefault(),
a.returnValue=" ")})},r:function(){document.getElementById("_sokol_app_input_element").blur()},i:function(a){a|=0;var b=E.length|0;var c=G[395540]|0;var d=c+a|0;if(0<(a|0)&(d|0)<(c|0)|0>(d|0))return w("OOM"),0,Oa(),-1;if(a=(d|0)>(b|0)){a=d|0;if(2147418112<a)a=!1;else{for(b=Math.max(E.length,16777216);b<a;)536870912>=b?b=oa(2*b):b=Math.min(oa((3*b+2147483648)/4),2147418112);Pb(b)?(ra(),a=!0):a=!1}a=!(a|0)}if(a)return Oa(),-1;G[395540]=d|0;return c|0},ob:function(a,b,c,d,e,g){b=B(b);var l=new XMLHttpRequest;
l.open("GET",b);l.responseType="arraybuffer";var m=0<d;m&&l.setRequestHeader("Range","bytes="+c+"-"+(c+d));l.onreadystatechange=function(){if(this.readyState==this.DONE)if(206==this.status||200==this.status&&!m){var b=new Uint8Array(l.response),c=b.length;c<=g?(C.set(b,e),Vb(a,d,c)):Wb(a)}else Xb(a,this.status)};l.send()},bb:Ba},buffer);f.asm=Yb;
var Ka=f.___wasm_call_ctors=function(){return f.asm.rb.apply(null,arguments)},Tb=f.__sapp_emsc_notify_keyboard_hidden=function(){return f.asm.sb.apply(null,arguments)},Ub=f.__sapp_html5_get_ask_leave_site=function(){return f.asm.tb.apply(null,arguments)};f._main=function(){return f.asm.ub.apply(null,arguments)};var R=f._malloc=function(){return f.asm.vb.apply(null,arguments)};f._free=function(){return f.asm.wb.apply(null,arguments)};f.__saudio_emsc_pull=function(){return f.asm.xb.apply(null,arguments)};
f.__sfetch_emsc_head_response=function(){return f.asm.yb.apply(null,arguments)};var Vb=f.__sfetch_emsc_get_response=function(){return f.asm.zb.apply(null,arguments)},Xb=f.__sfetch_emsc_failed_http_status=function(){return f.asm.Ab.apply(null,arguments)},Wb=f.__sfetch_emsc_failed_buffer_too_small=function(){return f.asm.Bb.apply(null,arguments)},na=f.stackAlloc=function(){return f.asm.Cb.apply(null,arguments)};f.dynCall_vi=function(){return f.asm.Db.apply(null,arguments)};
f.dynCall_v=function(){return f.asm.Eb.apply(null,arguments)};var S=f.dynCall_iiii=function(){return f.asm.Fb.apply(null,arguments)},Sb=f.dynCall_idi=function(){return f.asm.Gb.apply(null,arguments)};f.asm=Yb;function x(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}x.prototype=Error();x.prototype.constructor=x;Ea=function Zb(){f.calledRun||$b();f.calledRun||(Ea=Zb)};
f.callMain=function(a){a=a||[];var b=a.length+1,c=na(4*(b+1));G[c>>2]=ma(f.thisProgram);for(var d=1;d<b;d++)G[(c>>2)+d]=ma(a[d-1]);G[(c>>2)+b]=0;try{var e=f._main(b,c);if(!f.noExitRuntime||0!==e){if(!f.noExitRuntime&&(ia=!0,f.onExit))f.onExit(e);f.quit(e,new x(e))}}catch(g){g instanceof x||("SimulateInfiniteLoop"==g?f.noExitRuntime=!0:((a=g)&&"object"===typeof g&&g.stack&&(a=[g,g.stack]),z("exception thrown: "+a),f.quit(1,g)))}finally{}};
function $b(a){function b(){if(!f.calledRun&&(f.calledRun=!0,!ia)){ta(va);ta(wa);if(f.onRuntimeInitialized)f.onRuntimeInitialized();f._main&&ac&&f.callMain(a);if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;){var b=f.postRun.shift();ya.unshift(b)}ta(ya)}}a=a||f.arguments;if(!(0<J)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)za();ta(ua);0<J||f.calledRun||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},
1);b()},1)):b())}}f.run=$b;function w(a){if(f.onAbort)f.onAbort(a);ha(a);z(a);ia=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}f.abort=w;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var ac=!0;f.noInitialRun&&(ac=!1);f.noExitRuntime=!0;$b();
