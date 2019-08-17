var f;f||(f=typeof Module !== 'undefined' ? Module : {});var g={},k;for(k in f)f.hasOwnProperty(k)&&(g[k]=f[k]);var n=[],aa="./this.program";function t(a,b){throw b;}var ba=!1,u=!1,ca=!1,da=!1,ea=!1;ba="object"===typeof window;u="function"===typeof importScripts;ca=(da="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)&&!ba&&!u;ea=!ba&&!ca&&!u;var v="",fa,ha;
if(ca){v=__dirname+"/";var ia,ja;fa=function(a,b){ia||(ia=require("fs"));ja||(ja=require("path"));a=ja.normalize(a);a=ia.readFileSync(a);return b?a:a.toString()};ha=function(a){a=fa(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||w("Assertion failed: undefined");return a};1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/"));n=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=f);process.on("uncaughtException",function(a){if(!(a instanceof ka))throw a;});process.on("unhandledRejection",
w);t=function(a){process.exit(a)};f.inspect=function(){return"[Emscripten Module object]"}}else if(ea)"undefined"!=typeof read&&(fa=function(a){return read(a)}),ha=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||w("Assertion failed: undefined");return a},"undefined"!=typeof scriptArgs?n=scriptArgs:"undefined"!=typeof arguments&&(n=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===
typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ba||u)u?v=self.location.href:document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",fa=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(ha=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var la=f.print||console.log.bind(console),x=f.printErr||console.warn.bind(console);for(k in g)g.hasOwnProperty(k)&&(f[k]=g[k]);g=null;f.arguments&&(n=f.arguments);f.thisProgram&&(aa=f.thisProgram);f.quit&&(t=f.quit);var ma;f.wasmBinary&&(ma=f.wasmBinary);"object"!==typeof WebAssembly&&x("no native wasm support detected");var z,na=!1,oa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function pa(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&oa)return oa.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var h=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var l=a[b++]&63;e=224==(e&240)?(e&15)<<12|h<<6|l:(e&7)<<18|h<<12|l<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function A(a,b){return a?pa(B,a,b):""}
function C(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var l=a.charCodeAt(h);if(55296<=l&&57343>=l){var m=a.charCodeAt(++h);l=65536+((l&1023)<<10)|m&1023}if(127>=l){if(c>=d)break;b[c++]=l}else{if(2047>=l){if(c+1>=d)break;b[c++]=192|l>>6}else{if(65535>=l){if(c+2>=d)break;b[c++]=224|l>>12}else{if(c+3>=d)break;b[c++]=240|l>>18;b[c++]=128|l>>12&63}b[c++]=128|l>>6&63}b[c++]=128|l&63}}b[c]=0;return c-e}
function qa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function ra(a){var b=qa(a)+1,c=sa(b);C(a,D,c,b);return c}function ta(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,D,B,ua,va,E,wa,F,G;
function xa(){f.HEAP8=D=new Int8Array(buffer);f.HEAP16=ua=new Int16Array(buffer);f.HEAP32=E=new Int32Array(buffer);f.HEAPU8=B=new Uint8Array(buffer);f.HEAPU16=va=new Uint16Array(buffer);f.HEAPU32=wa=new Uint32Array(buffer);f.HEAPF32=F=new Float32Array(buffer);f.HEAPF64=G=new Float64Array(buffer)}var ya=f.TOTAL_MEMORY||33554432;f.wasmMemory?z=f.wasmMemory:z=new WebAssembly.Memory({initial:ya/65536});z&&(buffer=z.buffer);ya=buffer.byteLength;xa();E[393152]=6815504;
function za(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.jc;"number"===typeof c?void 0===b.Zb?f.dynCall_v(c):f.dynCall_vi(c,b.Zb):c(void 0===b.Zb?null:b.Zb)}}}var Aa=[],Ba=[],Ca=[],Da=[],Ea=[];function Fa(){var a=f.preRun.shift();Aa.unshift(a)}var Ga=Math.abs,Ha=Math.sqrt,Ia=Math.floor,H=0,Ja=null,Ka=null;f.preloadedImages={};f.preloadedAudios={};
function La(){var a=I;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var I="offscreen-sapp-ui.wasm";if(!La()){var Na=I;I=f.locateFile?f.locateFile(Na,v):v+Na}function Oa(){try{if(ma)return new Uint8Array(ma);if(ha)return ha(I);throw"both async and sync fetching of the wasm failed";}catch(a){w(a)}}
function Pa(){return ma||!ba&&!u||"function"!==typeof fetch?new Promise(function(a){a(Oa())}):fetch(I,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+I+"'";return a.arrayBuffer()}).catch(function(){return Oa()})}
function Qa(a){function b(a){f.asm=a.exports;H--;f.monitorRunDependencies&&f.monitorRunDependencies(H);0==H&&(null!==Ja&&(clearInterval(Ja),Ja=null),Ka&&(a=Ka,Ka=null,a()))}function c(a){b(a.instance)}function d(a){return Pa().then(function(a){return WebAssembly.instantiate(a,e)}).then(a,function(a){x("failed to asynchronously prepare wasm: "+a);w(a)})}var e={env:a};H++;f.monitorRunDependencies&&f.monitorRunDependencies(H);if(f.instantiateWasm)try{return f.instantiateWasm(e,b)}catch(h){return x("Module.instantiateWasm callback failed with error: "+
h),!1}(function(){if(ma||"function"!==typeof WebAssembly.instantiateStreaming||La()||"function"!==typeof fetch)return d(c);fetch(I,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,e).then(c,function(a){x("wasm streaming compile failed: "+a);x("falling back to ArrayBuffer instantiation");d(c)})})})();return{}}f.asm=function(a,b){b.memory=z;b.table=new WebAssembly.Table({initial:86,maximum:86,element:"anyfunc"});return Qa(b)};Ba.push({jc:function(){Ra()}});
var Sa=[null,[],[]],J=0;function K(){J+=4;return E[J-4>>2]}var Ta={};function Ua(){f.___errno_location&&(E[f.___errno_location()>>2]=12)}var Va=0,Wa=0,L=0,Xa=0,Ya=0,Za=null,$a=null,ab=!1;function bb(){for(var a=M.length-1;0<=a;--a)cb(a);M=[];db=[]}var db=[];function eb(){if(fb&&gb.Qb)for(var a=0;a<db.length;++a){var b=db[a];db.splice(a,1);--a;b.uc.apply(this,b.nc)}}var fb=0,gb=null,M=[];function hb(){return-1!==navigator.userAgent.indexOf("MSIE")||0<navigator.appVersion.indexOf("Trident/")}
function cb(a){var b=M[a];b.target.removeEventListener(b.Pb,b.hc,b.Rb);M.splice(a,1)}function N(a){function b(b){++fb;gb=a;eb();a.Ub(b);eb();--fb}if(a.Sb)a.hc=b,a.target.addEventListener(a.Pb,b,a.Rb),M.push(a),ab||(Da.push(bb),ab=!0);else for(var c=0;c<M.length;++c)M[c].target==a.target&&M[c].Pb==a.Pb&&cb(c--)}var ib=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function O(a){try{if(!a)return window;"number"===typeof a&&(a=ib[a]||A(a));return"#window"===a?window:"#document"===a?document:"#screen"===a?screen:"#canvas"===a?f.canvas:"string"===typeof a?document.getElementById(a):a}catch(b){return null}}function jb(a){"number"===typeof a&&(a=A(a));return a&&"#canvas"!==a?"undefined"!==typeof kb&&lb[a]?lb[a]:O(a):"undefined"!==typeof kb&&lb.canvas?lb.canvas:f.canvas}
function mb(a,b,c,d,e,h){Va||(Va=P(164));a={target:O(a),Qb:hb()?!1:!0,Pb:h,Sb:d,Ub:function(a){a=a||event;var c=Va;C(a.key?a.key:"",B,c+0,32);C(a.code?a.code:"",B,c+32,32);E[c+64>>2]=a.location;E[c+68>>2]=a.ctrlKey;E[c+72>>2]=a.shiftKey;E[c+76>>2]=a.altKey;E[c+80>>2]=a.metaKey;E[c+84>>2]=a.repeat;C(a.locale?a.locale:"",B,c+88,32);C(a.char?a.char:"",B,c+120,32);E[c+152>>2]=a.charCode;E[c+156>>2]=a.keyCode;E[c+160>>2]=a.which;Q(d,e,c,b)&&a.preventDefault()},Rb:c};N(a)}
function nb(a,b,c){G[a>>3]=window.performance&&window.performance.now?window.performance.now():Date.now();E[a+8>>2]=b.screenX;E[a+12>>2]=b.screenY;E[a+16>>2]=b.clientX;E[a+20>>2]=b.clientY;E[a+24>>2]=b.ctrlKey;E[a+28>>2]=b.shiftKey;E[a+32>>2]=b.altKey;E[a+36>>2]=b.metaKey;ua[a+40>>1]=b.button;ua[a+42>>1]=b.buttons;E[a+44>>2]=b.movementX||b.mozMovementX||b.webkitMovementX||b.screenX-Za;E[a+48>>2]=b.movementY||b.mozMovementY||b.webkitMovementY||b.screenY-$a;if(f.canvas){var d=f.canvas.getBoundingClientRect();
E[a+60>>2]=b.clientX-d.left;E[a+64>>2]=b.clientY-d.top}else E[a+60>>2]=0,E[a+64>>2]=0;c?(d=c.getBoundingClientRect?c.getBoundingClientRect():{left:0,top:0},E[a+52>>2]=b.clientX-d.left,E[a+56>>2]=b.clientY-d.top):(E[a+52>>2]=0,E[a+56>>2]=0);"wheel"!==b.type&&"mousewheel"!==b.type&&(Za=b.screenX,$a=b.screenY)}
function ob(a,b,c,d,e,h){Wa||(Wa=P(72));a=O(a);c={target:a,Qb:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Pb:h,Sb:d,Ub:function(c){c=c||event;nb(Wa,c,a);Q(d,e,Wa,b)&&c.preventDefault()},Rb:c};hb()&&"mousedown"==h&&(c.Qb=!1);N(c)}
function pb(a,b,c,d){Xa||(Xa=P(36));a=O(a);N({target:a,Qb:!1,Pb:"resize",Sb:d,Ub:function(c){c=c||event;if(c.target==a){var e=0<pageXOffset||0<pageYOffset?[pageXOffset,pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.scrollLeft|0,document.body.scrollTop|0],l=Xa;E[l>>2]=c.detail;E[l+4>>2]=document.body.clientWidth;E[l+8>>2]=document.body.clientHeight;
E[l+12>>2]=innerWidth;E[l+16>>2]=innerHeight;E[l+20>>2]=outerWidth;E[l+24>>2]=outerHeight;E[l+28>>2]=e[0];E[l+32>>2]=e[1];Q(d,10,l,b)&&c.preventDefault()}},Rb:c})}
function sb(a,b,c,d,e,h){Ya||(Ya=P(1684));a=O(a);N({target:a,Qb:"touchstart"==h||"touchend"==h,Pb:h,Sb:d,Ub:function(c){c=c||event;for(var h={},l=0;l<c.touches.length;++l){var q=c.touches[l];q.ac=!1;h[q.identifier]=q}for(l=0;l<c.changedTouches.length;++l)q=c.changedTouches[l],h[q.identifier]=q,q.ac=!0;for(l=0;l<c.targetTouches.length;++l)q=c.targetTouches[l],h[q.identifier].lc=!0;var r=q=Ya;E[r+4>>2]=c.ctrlKey;E[r+8>>2]=c.shiftKey;E[r+12>>2]=c.altKey;E[r+16>>2]=c.metaKey;r+=20;var Ma=f.canvas?f.canvas.getBoundingClientRect():
void 0,qb=a.getBoundingClientRect?a.getBoundingClientRect():{left:0,top:0},rb=0;for(l in h){var y=h[l];E[r>>2]=y.identifier;E[r+4>>2]=y.screenX;E[r+8>>2]=y.screenY;E[r+12>>2]=y.clientX;E[r+16>>2]=y.clientY;E[r+20>>2]=y.pageX;E[r+24>>2]=y.pageY;E[r+28>>2]=y.ac;E[r+32>>2]=y.lc;Ma?(E[r+44>>2]=y.clientX-Ma.left,E[r+48>>2]=y.clientY-Ma.top):(E[r+44>>2]=0,E[r+48>>2]=0);E[r+36>>2]=y.clientX-qb.left;E[r+40>>2]=y.clientY-qb.top;r+=52;if(32<=++rb)break}E[q>>2]=rb;Q(d,e,q,b)&&c.preventDefault()},Rb:c})}
function tb(a,b,c,d,e,h){a||(a=f.canvas);a={target:O(a),Qb:!1,Pb:h,Sb:d,Ub:function(a){a=a||event;Q(d,e,0,b)&&a.preventDefault()},Rb:c};N(a)}
function ub(a,b,c,d,e){function h(c){c=c||event;nb(L,c,a);G[L+72>>3]=c.wheelDeltaX||0;G[L+80>>3]=-(c.wheelDeltaY||c.wheelDelta);G[L+88>>3]=0;E[L+96>>2]=0;Q(d,9,L,b)&&c.preventDefault()}function l(c){c=c||event;var e=L;nb(e,c,a);G[e+72>>3]=c.deltaX;G[e+80>>3]=c.deltaY;G[e+88>>3]=c.deltaZ;E[e+96>>2]=c.deltaMode;Q(d,9,e,b)&&c.preventDefault()}L||(L=P(104));N({target:a,Qb:!0,Pb:e,Sb:d,Ub:"wheel"==e?l:h,Rb:c})}
var vb=1,wb=0,xb=[],R=[],yb=[],zb=[],S=[],T=[],U=[],Ab=[],Bb={},V=null,lb={},Cb={},Db={},Eb={};function W(a){wb||(wb=a)}function Fb(a){for(var b=vb++,c=a.length;c<b;c++)a[c]=null;return b}var Gb=null,X=[0];
function Hb(a,b){function c(){var a=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return a?parseInt(a[2],10):!1}var d=P(8),e={handle:d,attributes:b,version:b.ec,Yb:a};e.Ob=2<=e.version&&(!1===c()||58<=c());a.canvas&&(a.canvas.mc=e);Bb[d]=e;("undefined"===typeof b.cc||b.cc)&&Ib(e);return d}
function Jb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(a,d){b.vertexAttribDivisorANGLE(a,d)},a.drawArraysInstanced=function(a,d,e,h){b.drawArraysInstancedANGLE(a,d,e,h)},a.drawElementsInstanced=function(a,d,e,h,l){b.drawElementsInstancedANGLE(a,d,e,h,l)})}
function Kb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(a){b.deleteVertexArrayOES(a)},a.bindVertexArray=function(a){b.bindVertexArrayOES(a)},a.isVertexArray=function(a){return b.isVertexArrayOES(a)})}function Lb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(a,d){b.drawBuffersWEBGL(a,d)})}
function Ib(a){a||(a=V);if(!a.kc){a.kc=!0;var b=a.Yb;2>a.version&&(Jb(b),Kb(b),Lb(b));b.pc=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");
(a=b.getSupportedExtensions())&&0<a.length&&b.getSupportedExtensions().forEach(function(a){-1!=c.indexOf(a)&&b.getExtension(a)})}}var kb={},Mb,Nb,Ob=["default","low-power","high-performance"],Pb=[];function Qb(a,b,c,d){for(var e=0;e<a;e++){var h=Y[c](),l=h&&Fb(d);h?(h.name=l,d[l]=h):W(1282);E[b+4*e>>2]=l}}
function Rb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>V.version){W(1282);return}d=Y.getSupportedExtensions();c=null===d?0:2*d.length;break;case 33307:case 33308:if(2>V.version){W(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":W(1280);return;case "object":if(null===
d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 35097:case 36389:case 34068:c=0;break;default:W(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)E[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){W(1280);x("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:W(1280);x("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+
a+") and it returns "+d+" of type "+typeof d+"!");return}E[b>>2]=c}else W(1281)}function Z(a){var b=qa(a)+1,c=P(b);C(a,B,c,b);return c}var Sb={6402:1,6403:1,6406:1,6407:3,6408:4,6409:1,6410:2,33319:2,33320:2,35904:3,35906:4,36244:1,36248:3,36249:4},Tb={5120:1,5121:1,5122:2,5123:2,5124:4,5125:4,5126:4,5131:2,32819:2,32820:2,33635:2,33640:4,34042:4,35899:4,35902:4,36193:2};
function Ub(a,b,c,d,e){if(b=Sb[b]*Tb[a])switch(c=e+d*(c*b+4-1&-4),a){case 5120:return D.subarray(e,c);case 5121:return B.subarray(e,c);case 5122:return ua.subarray(e>>1,c>>1);case 5124:return E.subarray(e>>2,c>>2);case 5126:return F.subarray(e>>2,c>>2);case 5125:case 34042:case 35902:case 33640:case 35899:return wa.subarray(e>>2,c>>2);case 5123:case 33635:case 32819:case 32820:case 36193:case 5131:return va.subarray(e>>1,c>>1);default:W(1280)}else W(1280)}
function Vb(a){switch(a){case 5120:return D;case 5121:return B;case 5122:return ua;case 5123:case 33635:case 32819:case 32820:case 36193:case 5131:return va;case 5124:return E;case 5125:case 34042:case 35902:case 33640:case 35899:case 34042:return wa;case 5126:return F}}var Wb={5122:1,5123:1,5124:2,5125:2,5126:2,5131:1,32819:1,32820:1,33635:1,33640:2,34042:2,35899:2,35902:2,36193:1};
function Xb(a){a=ta(a);var b=buffer.byteLength;try{return-1!==z.grow((a-b)/65536)?(buffer=z.buffer,!0):!1}catch(c){return!1}}var Y;Gb=new Float32Array(256);for(var Yb=0;256>Yb;Yb++)X[Yb]=Gb.subarray(0,Yb+1);for(var Zb=0;32>Zb;Zb++)Pb.push(Array(Zb));
var fc=f.asm({},{fb:function(){},hb:function(a,b){J=b;try{return Ta.dc(),K(),K(),K(),K(),0}catch(c){return w(c),-c.Xb}},gb:function(a,b){J=b;try{var c=Ta.dc(),d=K(),e=K();return Ta.qc(c,d,e)}catch(h){return w(h),-h.Xb}},ha:function(a,b){J=b;try{var c=K(),d=K(),e=K();for(b=a=0;b<e;b++){for(var h=E[d+8*b>>2],l=E[d+(8*b+4)>>2],m=0;m<l;m++){var p=B[h+m],q=Sa[c];0===p||10===p?((1===c?la:x)(pa(q,0)),q.length=0):q.push(p)}a+=l}return a}catch(r){return w(r),-r.Xb}},v:function(a,b){J=b;return 0},jb:function(a,
b){J=b;try{var c=A(K()),d=K(),e=K();return(void 0).open(c,d,e).fd}catch(h){return w(h),-h.Xb}},ia:function(a,b){J=b;return 0},ga:function(a,b){J=b;try{return Ta.dc(),0}catch(c){return w(c),-c.Xb}},H:function(){},fa:function(){return devicePixelRatio||1},ka:function(a,b,c){a=a?O(a):f.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),G[b>>3]=a.right-a.left,G[c>>3]=a.bottom-a.top):(G[b>>3]=a.clientWidth,G[c>>3]=a.clientHeight);return 0},$a:function(a,b,c){B.set(B.subarray(b,
b+c),a)},Ra:function(a,b){function c(d){$b(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},da:function(a,b,c){a=jb(a);if(!a)return-4;a.width=b;a.height=c;return 0},_a:function(a,b,c,d){mb(a,b,c,d,2,"keydown");return 0},Ya:function(a,b,c,d){mb(a,b,c,d,1,"keypress");return 0},Za:function(a,b,c,d){mb(a,b,c,d,3,"keyup");return 0},ua:function(a,b,c,d){ob(a,b,c,d,5,"mousedown");return 0},ob:function(a,b,c,d){ob(a,b,c,d,33,"mouseenter");return 0},ib:function(a,b,c,d){ob(a,b,c,d,34,"mouseleave");
return 0},wb:function(a,b,c,d){ob(a,b,c,d,8,"mousemove");return 0},sa:function(a,b,c,d){ob(a,b,c,d,6,"mouseup");return 0},xb:function(a,b,c,d){pb(a,b,c,d);return 0},Ua:function(a,b,c,d){sb(a,b,c,d,25,"touchcancel");return 0},Va:function(a,b,c,d){sb(a,b,c,d,23,"touchend");return 0},Wa:function(a,b,c,d){sb(a,b,c,d,24,"touchmove");return 0},Xa:function(a,b,c,d){sb(a,b,c,d,22,"touchstart");return 0},Ta:function(a,b,c,d){tb(a,b,c,d,31,"webglcontextlost");return 0},Sa:function(a,b,c,d){tb(a,b,c,d,32,"webglcontextrestored");
return 0},ab:function(a,b,c,d){a=O(a);return"undefined"!==typeof a.onwheel?(ub(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(ub(a,b,c,d,"mousewheel"),0):-1},W:function(a,b){var c={};b>>=2;c.alpha=!!E[b];c.depth=!!E[b+1];c.stencil=!!E[b+2];c.antialias=!!E[b+3];c.premultipliedAlpha=!!E[b+4];c.preserveDrawingBuffer=!!E[b+5];c.powerPreference=Ob[E[b+6]];c.failIfMajorPerformanceCaveat=!!E[b+7];c.ec=E[b+8];c.rc=E[b+9];c.cc=E[b+10];c.ic=E[b+11];c.sc=E[b+12];c.tc=E[b+13];a=jb(a);!a||c.ic?c=0:c=
(a=1<c.ec?a.getContext("webgl2",c):a.getContext("webgl",c)||a.getContext("experimental-webgl",c))?Hb(a,c):0;return c},za:function(a,b){a=Bb[a];b=A(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b?Jb(Y):"OES_vertex_array_object"==b?Kb(Y):"WEBGL_draw_buffers"==b&&Lb(Y);return!!a.Yb.getExtension(b)},La:function(a){a>>=2;for(var b=0;14>b;++b)E[a+b]=0;E[a]=E[a+1]=E[a+3]=E[a+4]=E[a+8]=E[a+10]=1},Aa:function(a){V=Bb[a];f.oc=Y=V&&V.Yb;return!a||Y?0:-5},eb:Ga,bb:Ga,db:Ia,p:function(a){Y.activeTexture(a)},
V:function(a,b){Y.attachShader(R[a],U[b])},e:function(a,b){35051==a?Y.bc=b:35052==a&&(Y.Tb=b);Y.bindBuffer(a,xb[b])},d:function(a,b){Y.bindFramebuffer(a,yb[b])},Z:function(a,b){Y.bindRenderbuffer(a,zb[b])},c:function(a,b){Y.bindTexture(a,S[b])},ea:function(a){Y.bindVertexArray(Ab[a])},M:function(a,b,c,d){Y.blendColor(a,b,c,d)},N:function(a,b){Y.blendEquationSeparate(a,b)},O:function(a,b,c,d){Y.blendFuncSeparate(a,b,c,d)},z:function(a,b,c,d,e,h,l,m,p,q){Y.blitFramebuffer(a,b,c,d,e,h,l,m,p,q)},$:function(a,
b,c,d){V.Ob?c?Y.bufferData(a,B,d,c,b):Y.bufferData(a,b,d):Y.bufferData(a,c?B.subarray(c,c+b):b,d)},t:function(a,b,c,d){V.Ob?Y.bufferSubData(a,b,B,d,c):Y.bufferSubData(a,b,B.subarray(d,d+c))},r:function(a){return Y.checkFramebufferStatus(a)},R:function(a){Y.clear(a)},va:function(a,b,c,d){Y.clearBufferfi(a,b,c,d)},q:function(a,b,c){Y.clearBufferfv(a,b,F,c>>2)},ta:function(a,b,c){Y.clearBufferuiv(a,b,wa,c>>2)},ya:function(a,b,c,d){Y.clearColor(a,b,c,d)},xa:function(a){Y.clearDepth(a)},wa:function(a){Y.clearStencil(a)},
E:function(a,b,c,d){Y.colorMask(!!a,!!b,!!c,!!d)},lb:function(a){Y.compileShader(U[a])},Ia:function(a,b,c,d,e,h,l,m){V.Ob?Y.Tb?Y.compressedTexImage2D(a,b,c,d,e,h,l,m):Y.compressedTexImage2D(a,b,c,d,e,h,B,m,l):Y.compressedTexImage2D(a,b,c,d,e,h,m?B.subarray(m,m+l):null)},Ga:function(a,b,c,d,e,h,l,m,p){V.Ob?Y.Tb?Y.compressedTexImage3D(a,b,c,d,e,h,l,m,p):Y.compressedTexImage3D(a,b,c,d,e,h,l,B,p,m):Y.compressedTexImage3D(a,b,c,d,e,h,l,p?B.subarray(p,p+m):null)},Ea:function(){var a=Fb(R),b=Y.createProgram();
b.name=a;R[a]=b;return a},nb:function(a){var b=Fb(U);U[b]=Y.createShader(a);return b},L:function(a){Y.cullFace(a)},ca:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=xb[d];e&&(Y.deleteBuffer(e),e.name=0,xb[d]=null,d==Mb&&(Mb=0),d==Nb&&(Nb=0),d==Y.bc&&(Y.bc=0),d==Y.Tb&&(Y.Tb=0))}},m:function(a,b){for(var c=0;c<a;++c){var d=E[b+4*c>>2],e=yb[d];e&&(Y.deleteFramebuffer(e),e.name=0,yb[d]=null)}},G:function(a){if(a){var b=R[a];b?(Y.deleteProgram(b),b.name=0,R[a]=null,Cb[a]=null):W(1281)}},u:function(a,
b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=zb[d];e&&(Y.deleteRenderbuffer(e),e.name=0,zb[d]=null)}},F:function(a){if(a){var b=U[a];b?(Y.deleteShader(b),U[a]=null):W(1281)}},ba:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=S[d];e&&(Y.deleteTexture(e),e.name=0,S[d]=null)}},Ma:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2];Y.deleteVertexArray(Ab[d]);Ab[d]=null}},C:function(a){Y.depthFunc(a)},D:function(a){Y.depthMask(!!a)},f:function(a){Y.disable(a)},a:function(a){Y.disableVertexAttribArray(a)},
sb:function(a,b,c){Y.drawArrays(a,b,c)},k:function(a,b){for(var c=Pb[a],d=0;d<a;d++)c[d]=E[b+4*d>>2];Y.drawBuffers(c)},tb:function(a,b,c,d){Y.drawElements(a,b,c,d)},h:function(a){Y.enable(a)},oa:function(a){Y.enableVertexAttribArray(a)},n:function(a,b,c,d){Y.framebufferRenderbuffer(a,b,c,zb[d])},b:function(a,b,c,d,e){Y.framebufferTexture2D(a,b,c,S[d],e)},i:function(a,b,c,d,e){Y.framebufferTextureLayer(a,b,S[c],d,e)},K:function(a){Y.frontFace(a)},aa:function(a,b){Qb(a,b,"createBuffer",xb)},s:function(a,
b){Qb(a,b,"createFramebuffer",yb)},_:function(a,b){Qb(a,b,"createRenderbuffer",zb)},Ja:function(a,b){Qb(a,b,"createTexture",S)},Na:function(a,b){Qb(a,b,"createVertexArray",Ab)},Ba:function(a,b){return Y.getAttribLocation(R[a],A(b))},g:function(a,b){Rb(a,b)},Ca:function(a,b,c,d){a=Y.getProgramInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,B,d,b):0;c&&(E[c>>2]=b)},U:function(a,b,c){if(c)if(a>=vb)W(1281);else{var d=Cb[a];if(d)if(35716==b)a=Y.getProgramInfoLog(R[a]),null===a&&(a="(unknown error)"),
E[c>>2]=a.length+1;else if(35719==b)E[c>>2]=d.$b;else if(35722==b){if(-1==d.Vb){a=R[a];var e=Y.getProgramParameter(a,35721);for(b=d.Vb=0;b<e;++b)d.Vb=Math.max(d.Vb,Y.getActiveAttrib(a,b).name.length+1)}E[c>>2]=d.Vb}else if(35381==b){if(-1==d.Wb)for(a=R[a],e=Y.getProgramParameter(a,35382),b=d.Wb=0;b<e;++b)d.Wb=Math.max(d.Wb,Y.getActiveUniformBlockName(a,b).length+1);E[c>>2]=d.Wb}else E[c>>2]=Y.getProgramParameter(R[a],b);else W(1282)}else W(1281)},kb:function(a,b,c,d){a=Y.getShaderInfoLog(U[a]);null===
a&&(a="(unknown error)");b=0<b&&d?C(a,B,d,b):0;c&&(E[c>>2]=b)},ja:function(a,b,c){c?35716==b?(a=Y.getShaderInfoLog(U[a]),null===a&&(a="(unknown error)"),E[c>>2]=a.length+1):35720==b?(a=Y.getShaderSource(U[a]),E[c>>2]=null===a||0==a.length?0:a.length+1):E[c>>2]=Y.getShaderParameter(U[a],b):W(1281)},Pa:function(a){if(Db[a])return Db[a];switch(a){case 7939:var b=Y.getSupportedExtensions();for(var c=[],d=0;d<b.length;++d)c.push(b[d]),c.push("GL_"+b[d]);b=Z(c.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=
Y.getParameter(a))||W(1280);b=Z(b);break;case 7938:b=Y.getParameter(Y.VERSION);b=2<=V.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Z(b);break;case 35724:b=Y.getParameter(Y.SHADING_LANGUAGE_VERSION);c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Z(b);break;default:return W(1280),0}return Db[a]=b},Oa:function(a,b){if(2>V.version)return W(1282),0;var c=Eb[a];if(c)return 0>b||b>=c.length?(W(1281),
0):c[b];switch(a){case 7939:c=Y.getSupportedExtensions();for(var d=[],e=0;e<c.length;++e)d.push(Z(c[e])),d.push(Z("GL_"+c[e]));c=Eb[a]=d;return 0>b||b>=c.length?(W(1281),0):c[b];default:return W(1280),0}},o:function(a,b){b=A(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=Cb[a]&&Cb[a].fc[b])&&0<=c&&c<a[0]?a[1]+c:-1},Da:function(a){Y.linkProgram(R[a]);var b=R[a];a=Cb[a]={fc:{},$b:0,Vb:-1,Wb:-1};for(var c=a.fc,d=Y.getProgramParameter(b,
35718),e=0;e<d;++e){var h=Y.getActiveUniform(b,e),l=h.name;a.$b=Math.max(a.$b,l.length+1);"]"==l.slice(-1)&&(l=l.slice(0,l.lastIndexOf("[")));var m=Y.getUniformLocation(b,l);if(m){var p=Fb(T);c[l]=[h.size,p];T[p]=m;for(var q=1;q<h.size;++q)m=Y.getUniformLocation(b,l+"["+q+"]"),p=Fb(T),T[p]=m}}},J:function(a,b){Y.polygonOffset(a,b)},A:function(a){Y.readBuffer(a)},Ka:function(a,b,c,d){Y.renderbufferStorage(a,b,c,d)},Y:function(a,b,c,d,e){Y.renderbufferStorageMultisample(a,b,c,d,e)},S:function(a,b,c,
d){Y.scissor(a,b,c,d)},mb:function(a,b,c,d){for(var e="",h=0;h<b;++h){var l=d?E[d+4*h>>2]:-1;e+=A(E[c+4*h>>2],0>l?void 0:l)}Y.shaderSource(U[a],e)},rb:function(a,b,c){Y.stencilFunc(a,b,c)},Q:function(a,b,c,d){Y.stencilFuncSeparate(a,b,c,d)},B:function(a){Y.stencilMask(a)},qb:function(a,b,c){Y.stencilOp(a,b,c)},P:function(a,b,c,d){Y.stencilOpSeparate(a,b,c,d)},Ha:function(a,b,c,d,e,h,l,m,p){V.Ob?Y.Tb?Y.texImage2D(a,b,c,d,e,h,l,m,p):0!=p?Y.texImage2D(a,b,c,d,e,h,l,m,Vb(m),p>>(Wb[m]|0)):Y.texImage2D(a,
b,c,d,e,h,l,m,null):Y.texImage2D(a,b,c,d,e,h,l,m,p?Ub(m,l,d,e,p):null)},Fa:function(a,b,c,d,e,h,l,m,p,q){Y.Tb?Y.texImage3D(a,b,c,d,e,h,l,m,p,q):0!=q?Y.texImage3D(a,b,c,d,e,h,l,m,p,Vb(p),q>>(Wb[p]|0)):Y.texImage3D(a,b,c,d,e,h,l,m,p,null)},X:function(a,b,c){Y.texParameterf(a,b,c)},j:function(a,b,c){Y.texParameteri(a,b,c)},na:function(a,b,c){if(V.Ob)Y.uniform1fv(T[a],F,c>>2,b);else{if(256>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=F[c+4*e>>2];else d=F.subarray(c>>2,c+4*b>>2);Y.uniform1fv(T[a],d)}},I:function(a,
b){Y.uniform1i(T[a],b)},ma:function(a,b,c){if(V.Ob)Y.uniform2fv(T[a],F,c>>2,2*b);else{if(256>=2*b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2];else d=F.subarray(c>>2,c+8*b>>2);Y.uniform2fv(T[a],d)}},la:function(a,b,c){if(V.Ob)Y.uniform3fv(T[a],F,c>>2,3*b);else{if(256>=3*b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2],d[e+2]=F[c+(4*e+8)>>2];else d=F.subarray(c>>2,c+12*b>>2);Y.uniform3fv(T[a],d)}},vb:function(a,b,c){if(V.Ob)Y.uniform4fv(T[a],
F,c>>2,4*b);else{if(256>=4*b)for(var d=X[4*b-1],e=0;e<4*b;e+=4)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2],d[e+2]=F[c+(4*e+8)>>2],d[e+3]=F[c+(4*e+12)>>2];else d=F.subarray(c>>2,c+16*b>>2);Y.uniform4fv(T[a],d)}},ub:function(a,b,c,d){if(V.Ob)Y.uniformMatrix4fv(T[a],!!c,F,d>>2,16*b);else{if(256>=16*b)for(var e=X[16*b-1],h=0;h<16*b;h+=16)e[h]=F[d+4*h>>2],e[h+1]=F[d+(4*h+4)>>2],e[h+2]=F[d+(4*h+8)>>2],e[h+3]=F[d+(4*h+12)>>2],e[h+4]=F[d+(4*h+16)>>2],e[h+5]=F[d+(4*h+20)>>2],e[h+6]=F[d+(4*h+24)>>2],e[h+7]=F[d+
(4*h+28)>>2],e[h+8]=F[d+(4*h+32)>>2],e[h+9]=F[d+(4*h+36)>>2],e[h+10]=F[d+(4*h+40)>>2],e[h+11]=F[d+(4*h+44)>>2],e[h+12]=F[d+(4*h+48)>>2],e[h+13]=F[d+(4*h+52)>>2],e[h+14]=F[d+(4*h+56)>>2],e[h+15]=F[d+(4*h+60)>>2];else e=F.subarray(d>>2,d+64*b>>2);Y.uniformMatrix4fv(T[a],!!c,e)}},ra:function(a){Y.useProgram(R[a])},pa:function(a,b){Y.vertexAttribDivisor(a,b)},qa:function(a,b,c,d,e,h){Y.vertexAttribPointer(a,b,c,!!d,e,h)},T:function(a,b,c,d){Y.viewport(a,b,c,d)},y:function(){var a=document.createElement("input");
a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){ac()});document.body.append(a)},x:function(){document.getElementById("_sokol_app_input_element").focus()},Qa:function(){window.addEventListener("beforeunload",function(a){0!=bc()&&(a.preventDefault(),a.returnValue=" ")})},w:function(){document.getElementById("_sokol_app_input_element").blur()},l:function(a){a|=0;var b=D.length|0;var c=E[393152]|0;var d=c+a|0;if(0<(a|0)&(d|0)<(c|0)|0>(d|0))return w("OOM"),
0,Ua(),-1;if(a=(d|0)>(b|0)){a=d|0;if(2147418112<a)a=!1;else{for(b=Math.max(D.length,16777216);b<a;)536870912>=b?b=ta(2*b):b=Math.min(ta((3*b+2147483648)/4),2147418112);Xb(b)?(xa(),a=!0):a=!1}a=!(a|0)}if(a)return Ua(),-1;E[393152]=d|0;return c|0},pb:function(a,b,c,d,e,h){b=A(b);var l=new XMLHttpRequest;l.open("GET",b);l.responseType="arraybuffer";var m=0<d;m&&l.setRequestHeader("Range","bytes="+c+"-"+(c+d));l.onreadystatechange=function(){if(this.readyState==this.DONE)if(206==this.status||200==this.status&&
!m){var b=new Uint8Array(l.response),c=b.length;c<=h?(B.set(b,e),cc(a,d,c)):dc(a)}else ec(a,this.status)};l.send()},cb:Ha},buffer);f.asm=fc;var Ra=f.___wasm_call_ctors=function(){return f.asm.yb.apply(null,arguments)},ac=f.__sapp_emsc_notify_keyboard_hidden=function(){return f.asm.zb.apply(null,arguments)},bc=f.__sapp_html5_get_ask_leave_site=function(){return f.asm.Ab.apply(null,arguments)};f._main=function(){return f.asm.Bb.apply(null,arguments)};
var P=f._malloc=function(){return f.asm.Cb.apply(null,arguments)};f._free=function(){return f.asm.Db.apply(null,arguments)};f.__saudio_emsc_pull=function(){return f.asm.Eb.apply(null,arguments)};f.__sfetch_emsc_head_response=function(){return f.asm.Fb.apply(null,arguments)};
var cc=f.__sfetch_emsc_get_response=function(){return f.asm.Gb.apply(null,arguments)},ec=f.__sfetch_emsc_failed_http_status=function(){return f.asm.Hb.apply(null,arguments)},dc=f.__sfetch_emsc_failed_buffer_too_small=function(){return f.asm.Ib.apply(null,arguments)},sa=f.stackAlloc=function(){return f.asm.Jb.apply(null,arguments)};f.dynCall_vi=function(){return f.asm.Kb.apply(null,arguments)};f.dynCall_v=function(){return f.asm.Lb.apply(null,arguments)};
var Q=f.dynCall_iiii=function(){return f.asm.Mb.apply(null,arguments)},$b=f.dynCall_idi=function(){return f.asm.Nb.apply(null,arguments)};f.asm=fc;function ka(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}Ka=function hc(){f.calledRun||ic();f.calledRun||(Ka=hc)};
function ic(a){function b(){if(!f.calledRun&&(f.calledRun=!0,!na)){za(Ba);za(Ca);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(jc){var b=a;b=b||[];var d=b.length+1,e=sa(4*(d+1));E[e>>2]=ra(aa);for(var h=1;h<d;h++)E[(e>>2)+h]=ra(b[h-1]);E[(e>>2)+d]=0;try{var l=f._main(d,e);if(!f.noExitRuntime||0!==l){if(!f.noExitRuntime&&(na=!0,f.onExit))f.onExit(l);t(l,new ka(l))}}catch(m){m instanceof ka||("SimulateInfiniteLoop"==m?f.noExitRuntime=!0:((b=m)&&"object"===typeof m&&m.stack&&(b=[m,m.stack]),
x("exception thrown: "+b),t(1,m)))}finally{}}if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)b=f.postRun.shift(),Ea.unshift(b);za(Ea)}}a=a||n;if(!(0<H)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Fa();za(Aa);0<H||f.calledRun||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=ic;
function w(a){if(f.onAbort)f.onAbort(a);la(a);x(a);na=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}f.abort=w;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var jc=!0;f.noInitialRun&&(jc=!1);f.noExitRuntime=!0;ic();
