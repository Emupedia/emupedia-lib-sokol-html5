var f;f||(f=typeof Module !== 'undefined' ? Module : {});var g={},k;for(k in f)f.hasOwnProperty(k)&&(g[k]=f[k]);var n=[],aa="./this.program";function t(a,b){throw b;}var u=!1,v=!1,ba=!1,ca=!1,da=!1;u="object"===typeof window;v="function"===typeof importScripts;ba=(ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)&&!u&&!v;da=!u&&!ba&&!v;var w="",ea,fa;
if(ba){w=__dirname+"/";var ha,ia;ea=function(a,b){ha||(ha=require("fs"));ia||(ia=require("path"));a=ia.normalize(a);a=ha.readFileSync(a);return b?a:a.toString()};fa=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||x("Assertion failed: undefined");return a};1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/"));n=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=f);process.on("uncaughtException",function(a){if(!(a instanceof ja))throw a;});process.on("unhandledRejection",
x);t=function(a){process.exit(a)};f.inspect=function(){return"[Emscripten Module object]"}}else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),fa=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||x("Assertion failed: undefined");return a},"undefined"!=typeof scriptArgs?n=scriptArgs:"undefined"!=typeof arguments&&(n=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===
typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(u||v)v?w=self.location.href:document.currentScript&&(w=document.currentScript.src),w=0!==w.indexOf("blob:")?w.substr(0,w.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},v&&(fa=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ka=f.print||console.log.bind(console),z=f.printErr||console.warn.bind(console);for(k in g)g.hasOwnProperty(k)&&(f[k]=g[k]);g=null;f.arguments&&(n=f.arguments);f.thisProgram&&(aa=f.thisProgram);f.quit&&(t=f.quit);var la;f.wasmBinary&&(la=f.wasmBinary);"object"!==typeof WebAssembly&&z("no native wasm support detected");var A,ma=!1,na="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function oa(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&na)return na.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var h=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var l=a[b++]&63;e=224==(e&240)?(e&15)<<12|h<<6|l:(e&7)<<18|h<<12|l<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function B(a,b){return a?oa(C,a,b):""}
function D(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var l=a.charCodeAt(h);if(55296<=l&&57343>=l){var m=a.charCodeAt(++h);l=65536+((l&1023)<<10)|m&1023}if(127>=l){if(c>=d)break;b[c++]=l}else{if(2047>=l){if(c+1>=d)break;b[c++]=192|l>>6}else{if(65535>=l){if(c+2>=d)break;b[c++]=224|l>>12}else{if(c+3>=d)break;b[c++]=240|l>>18;b[c++]=128|l>>12&63}b[c++]=128|l>>6&63}b[c++]=128|l&63}}b[c]=0;return c-e}
function pa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function qa(a){var b=pa(a)+1,c=ra(b);D(a,E,c,b);return c}function sa(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,E,C,ta,ua,F,va,G,H;
function wa(){f.HEAP8=E=new Int8Array(buffer);f.HEAP16=ta=new Int16Array(buffer);f.HEAP32=F=new Int32Array(buffer);f.HEAPU8=C=new Uint8Array(buffer);f.HEAPU16=ua=new Uint16Array(buffer);f.HEAPU32=va=new Uint32Array(buffer);f.HEAPF32=G=new Float32Array(buffer);f.HEAPF64=H=new Float64Array(buffer)}var xa=f.TOTAL_MEMORY||33554432;f.wasmMemory?A=f.wasmMemory:A=new WebAssembly.Memory({initial:xa/65536});A&&(buffer=A.buffer);xa=buffer.byteLength;wa();F[392560]=6813136;
function ya(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.ac;"number"===typeof c?void 0===b.Rb?f.dynCall_v(c):f.dynCall_vi(c,b.Rb):c(void 0===b.Rb?null:b.Rb)}}}var za=[],Aa=[],Ba=[],Ca=[],Da=[];function Ea(){var a=f.preRun.shift();za.unshift(a)}var Fa=Math.abs,Ga=Math.sqrt,Ha=Math.floor,I=0,Ia=null,Ja=null;f.preloadedImages={};f.preloadedAudios={};
function Ka(){var a=J;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var J="arraytex-sapp-ui.wasm";if(!Ka()){var Ma=J;J=f.locateFile?f.locateFile(Ma,w):w+Ma}function Na(){try{if(la)return new Uint8Array(la);if(fa)return fa(J);throw"both async and sync fetching of the wasm failed";}catch(a){x(a)}}
function Oa(){return la||!u&&!v||"function"!==typeof fetch?new Promise(function(a){a(Na())}):fetch(J,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+J+"'";return a.arrayBuffer()}).catch(function(){return Na()})}
function Pa(a){function b(a){f.asm=a.exports;I--;f.monitorRunDependencies&&f.monitorRunDependencies(I);0==I&&(null!==Ia&&(clearInterval(Ia),Ia=null),Ja&&(a=Ja,Ja=null,a()))}function c(a){b(a.instance)}function d(a){return Oa().then(function(a){return WebAssembly.instantiate(a,e)}).then(a,function(a){z("failed to asynchronously prepare wasm: "+a);x(a)})}var e={env:a};I++;f.monitorRunDependencies&&f.monitorRunDependencies(I);if(f.instantiateWasm)try{return f.instantiateWasm(e,b)}catch(h){return z("Module.instantiateWasm callback failed with error: "+
h),!1}(function(){if(la||"function"!==typeof WebAssembly.instantiateStreaming||Ka()||"function"!==typeof fetch)return d(c);fetch(J,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,e).then(c,function(a){z("wasm streaming compile failed: "+a);z("falling back to ArrayBuffer instantiation");d(c)})})})();return{}}f.asm=function(a,b){b.memory=A;b.table=new WebAssembly.Table({initial:86,maximum:86,element:"anyfunc"});return Pa(b)};Aa.push({ac:function(){Qa()}});
var Ra=[null,[],[]],K=0;function L(){K+=4;return F[K-4>>2]}var Sa={};function Ta(){f.___errno_location&&(F[f.___errno_location()>>2]=12)}var Ua=0,Va=0,M=0,Wa=0,Xa=0,Ya=null,Za=null,$a=!1;function ab(){for(var a=N.length-1;0<=a;--a)bb(a);N=[];cb=[]}var cb=[];function db(){if(eb&&fb.Ib)for(var a=0;a<cb.length;++a){var b=cb[a];cb.splice(a,1);--a;b.mc.apply(this,b.ec)}}var eb=0,fb=null,N=[];function gb(){return-1!==navigator.userAgent.indexOf("MSIE")||0<navigator.appVersion.indexOf("Trident/")}
function bb(a){var b=N[a];b.target.removeEventListener(b.Hb,b.Zb,b.Jb);N.splice(a,1)}function O(a){function b(b){++eb;fb=a;db();a.Mb(b);db();--eb}if(a.Kb)a.Zb=b,a.target.addEventListener(a.Hb,b,a.Jb),N.push(a),$a||(Ca.push(ab),$a=!0);else for(var c=0;c<N.length;++c)N[c].target==a.target&&N[c].Hb==a.Hb&&bb(c--)}var hb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function P(a){try{if(!a)return window;"number"===typeof a&&(a=hb[a]||B(a));return"#window"===a?window:"#document"===a?document:"#screen"===a?screen:"#canvas"===a?f.canvas:"string"===typeof a?document.getElementById(a):a}catch(b){return null}}function ib(a){"number"===typeof a&&(a=B(a));return a&&"#canvas"!==a?"undefined"!==typeof jb&&kb[a]?kb[a]:P(a):"undefined"!==typeof jb&&kb.canvas?kb.canvas:f.canvas}
function lb(a,b,c,d,e,h){Ua||(Ua=Q(164));a={target:P(a),Ib:gb()?!1:!0,Hb:h,Kb:d,Mb:function(a){a=a||event;var c=Ua;D(a.key?a.key:"",C,c+0,32);D(a.code?a.code:"",C,c+32,32);F[c+64>>2]=a.location;F[c+68>>2]=a.ctrlKey;F[c+72>>2]=a.shiftKey;F[c+76>>2]=a.altKey;F[c+80>>2]=a.metaKey;F[c+84>>2]=a.repeat;D(a.locale?a.locale:"",C,c+88,32);D(a.char?a.char:"",C,c+120,32);F[c+152>>2]=a.charCode;F[c+156>>2]=a.keyCode;F[c+160>>2]=a.which;R(d,e,c,b)&&a.preventDefault()},Jb:c};O(a)}
function mb(a,b,c){H[a>>3]=window.performance&&window.performance.now?window.performance.now():Date.now();F[a+8>>2]=b.screenX;F[a+12>>2]=b.screenY;F[a+16>>2]=b.clientX;F[a+20>>2]=b.clientY;F[a+24>>2]=b.ctrlKey;F[a+28>>2]=b.shiftKey;F[a+32>>2]=b.altKey;F[a+36>>2]=b.metaKey;ta[a+40>>1]=b.button;ta[a+42>>1]=b.buttons;F[a+44>>2]=b.movementX||b.mozMovementX||b.webkitMovementX||b.screenX-Ya;F[a+48>>2]=b.movementY||b.mozMovementY||b.webkitMovementY||b.screenY-Za;if(f.canvas){var d=f.canvas.getBoundingClientRect();
F[a+60>>2]=b.clientX-d.left;F[a+64>>2]=b.clientY-d.top}else F[a+60>>2]=0,F[a+64>>2]=0;c?(d=c.getBoundingClientRect?c.getBoundingClientRect():{left:0,top:0},F[a+52>>2]=b.clientX-d.left,F[a+56>>2]=b.clientY-d.top):(F[a+52>>2]=0,F[a+56>>2]=0);"wheel"!==b.type&&"mousewheel"!==b.type&&(Ya=b.screenX,Za=b.screenY)}
function nb(a,b,c,d,e,h){Va||(Va=Q(72));a=P(a);c={target:a,Ib:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Hb:h,Kb:d,Mb:function(c){c=c||event;mb(Va,c,a);R(d,e,Va,b)&&c.preventDefault()},Jb:c};gb()&&"mousedown"==h&&(c.Ib=!1);O(c)}
function ob(a,b,c,d){Wa||(Wa=Q(36));a=P(a);O({target:a,Ib:!1,Hb:"resize",Kb:d,Mb:function(c){c=c||event;if(c.target==a){var e=0<pageXOffset||0<pageYOffset?[pageXOffset,pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.scrollLeft|0,document.body.scrollTop|0],l=Wa;F[l>>2]=c.detail;F[l+4>>2]=document.body.clientWidth;F[l+8>>2]=document.body.clientHeight;
F[l+12>>2]=innerWidth;F[l+16>>2]=innerHeight;F[l+20>>2]=outerWidth;F[l+24>>2]=outerHeight;F[l+28>>2]=e[0];F[l+32>>2]=e[1];R(d,10,l,b)&&c.preventDefault()}},Jb:c})}
function pb(a,b,c,d,e,h){Xa||(Xa=Q(1684));a=P(a);O({target:a,Ib:"touchstart"==h||"touchend"==h,Hb:h,Kb:d,Mb:function(c){c=c||event;for(var h={},l=0;l<c.touches.length;++l){var q=c.touches[l];q.Tb=!1;h[q.identifier]=q}for(l=0;l<c.changedTouches.length;++l)q=c.changedTouches[l],h[q.identifier]=q,q.Tb=!0;for(l=0;l<c.targetTouches.length;++l)q=c.targetTouches[l],h[q.identifier].cc=!0;var r=q=Xa;F[r+4>>2]=c.ctrlKey;F[r+8>>2]=c.shiftKey;F[r+12>>2]=c.altKey;F[r+16>>2]=c.metaKey;r+=20;var La=f.canvas?f.canvas.getBoundingClientRect():
void 0,qb=a.getBoundingClientRect?a.getBoundingClientRect():{left:0,top:0},rb=0;for(l in h){var y=h[l];F[r>>2]=y.identifier;F[r+4>>2]=y.screenX;F[r+8>>2]=y.screenY;F[r+12>>2]=y.clientX;F[r+16>>2]=y.clientY;F[r+20>>2]=y.pageX;F[r+24>>2]=y.pageY;F[r+28>>2]=y.Tb;F[r+32>>2]=y.cc;La?(F[r+44>>2]=y.clientX-La.left,F[r+48>>2]=y.clientY-La.top):(F[r+44>>2]=0,F[r+48>>2]=0);F[r+36>>2]=y.clientX-qb.left;F[r+40>>2]=y.clientY-qb.top;r+=52;if(32<=++rb)break}F[q>>2]=rb;R(d,e,q,b)&&c.preventDefault()},Jb:c})}
function sb(a,b,c,d,e,h){a||(a=f.canvas);a={target:P(a),Ib:!1,Hb:h,Kb:d,Mb:function(a){a=a||event;R(d,e,0,b)&&a.preventDefault()},Jb:c};O(a)}
function tb(a,b,c,d,e){function h(c){c=c||event;mb(M,c,a);H[M+72>>3]=c.wheelDeltaX||0;H[M+80>>3]=-(c.wheelDeltaY||c.wheelDelta);H[M+88>>3]=0;F[M+96>>2]=0;R(d,9,M,b)&&c.preventDefault()}function l(c){c=c||event;var e=M;mb(e,c,a);H[e+72>>3]=c.deltaX;H[e+80>>3]=c.deltaY;H[e+88>>3]=c.deltaZ;F[e+96>>2]=c.deltaMode;R(d,9,e,b)&&c.preventDefault()}M||(M=Q(104));O({target:a,Ib:!0,Hb:e,Kb:d,Mb:"wheel"==e?l:h,Jb:c})}
var ub=1,vb=0,wb=[],S=[],xb=[],yb=[],zb=[],T=[],U=[],Ab=[],Bb={},V=null,kb={},Cb={},Db={},Eb={};function W(a){vb||(vb=a)}function Fb(a){for(var b=ub++,c=a.length;c<b;c++)a[c]=null;return b}var Gb=null,X=[0];
function Hb(a,b){function c(){var a=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return a?parseInt(a[2],10):!1}var d=Q(8),e={handle:d,attributes:b,version:b.Xb,Qb:a};e.Gb=2<=e.version&&(!1===c()||58<=c());a.canvas&&(a.canvas.dc=e);Bb[d]=e;("undefined"===typeof b.Vb||b.Vb)&&Ib(e);return d}
function Jb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(a,d){b.vertexAttribDivisorANGLE(a,d)},a.drawArraysInstanced=function(a,d,e,h){b.drawArraysInstancedANGLE(a,d,e,h)},a.drawElementsInstanced=function(a,d,e,h,l){b.drawElementsInstancedANGLE(a,d,e,h,l)})}
function Kb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(a){b.deleteVertexArrayOES(a)},a.bindVertexArray=function(a){b.bindVertexArrayOES(a)},a.isVertexArray=function(a){return b.isVertexArrayOES(a)})}function Lb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(a,d){b.drawBuffersWEBGL(a,d)})}
function Ib(a){a||(a=V);if(!a.bc){a.bc=!0;var b=a.Qb;2>a.version&&(Jb(b),Kb(b),Lb(b));b.hc=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");
(a=b.getSupportedExtensions())&&0<a.length&&b.getSupportedExtensions().forEach(function(a){-1!=c.indexOf(a)&&b.getExtension(a)})}}var jb={},Mb,Nb,Ob=["default","low-power","high-performance"],Pb=[];function Qb(a,b,c,d){for(var e=0;e<a;e++){var h=Y[c](),l=h&&Fb(d);h?(h.name=l,d[l]=h):W(1282);F[b+4*e>>2]=l}}
function Rb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>V.version){W(1282);return}d=Y.getSupportedExtensions();c=null===d?0:2*d.length;break;case 33307:case 33308:if(2>V.version){W(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":W(1280);return;case "object":if(null===
d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 35097:case 36389:case 34068:c=0;break;default:W(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)F[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){W(1280);z("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:W(1280);z("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+
a+") and it returns "+d+" of type "+typeof d+"!");return}F[b>>2]=c}else W(1281)}function Z(a){var b=pa(a)+1,c=Q(b);D(a,C,c,b);return c}var Sb={6402:1,6403:1,6406:1,6407:3,6408:4,6409:1,6410:2,33319:2,33320:2,35904:3,35906:4,36244:1,36248:3,36249:4},Tb={5120:1,5121:1,5122:2,5123:2,5124:4,5125:4,5126:4,5131:2,32819:2,32820:2,33635:2,33640:4,34042:4,35899:4,35902:4,36193:2};
function Ub(a,b,c,d,e){if(b=Sb[b]*Tb[a])switch(c=e+d*(c*b+4-1&-4),a){case 5120:return E.subarray(e,c);case 5121:return C.subarray(e,c);case 5122:return ta.subarray(e>>1,c>>1);case 5124:return F.subarray(e>>2,c>>2);case 5126:return G.subarray(e>>2,c>>2);case 5125:case 34042:case 35902:case 33640:case 35899:return va.subarray(e>>2,c>>2);case 5123:case 33635:case 32819:case 32820:case 36193:case 5131:return ua.subarray(e>>1,c>>1);default:W(1280)}else W(1280)}
function Vb(a){switch(a){case 5120:return E;case 5121:return C;case 5122:return ta;case 5123:case 33635:case 32819:case 32820:case 36193:case 5131:return ua;case 5124:return F;case 5125:case 34042:case 35902:case 33640:case 35899:case 34042:return va;case 5126:return G}}var Wb={5122:1,5123:1,5124:2,5125:2,5126:2,5131:1,32819:1,32820:1,33635:1,33640:2,34042:2,35899:2,35902:2,36193:1};
function Xb(a){a=sa(a);var b=buffer.byteLength;try{return-1!==A.grow((a-b)/65536)?(buffer=A.buffer,!0):!1}catch(c){return!1}}var Y;Gb=new Float32Array(256);for(var Yb=0;256>Yb;Yb++)X[Yb]=Gb.subarray(0,Yb+1);for(var Zb=0;32>Zb;Zb++)Pb.push(Array(Zb));
var fc=f.asm({},{eb:function(){},gb:function(a,b){K=b;try{return Sa.Wb(),L(),L(),L(),L(),0}catch(c){return x(c),-c.Pb}},fb:function(a,b){K=b;try{var c=Sa.Wb(),d=L(),e=L();return Sa.ic(c,d,e)}catch(h){return x(h),-h.Pb}},ba:function(a,b){K=b;try{var c=L(),d=L(),e=L();for(b=a=0;b<e;b++){for(var h=F[d+8*b>>2],l=F[d+(8*b+4)>>2],m=0;m<l;m++){var p=C[h+m],q=Ra[c];0===p||10===p?((1===c?ka:z)(oa(q,0)),q.length=0):q.push(p)}a+=l}return a}catch(r){return x(r),-r.Pb}},r:function(a,b){K=b;return 0},ib:function(a,
b){K=b;try{var c=B(L()),d=L(),e=L();return(void 0).open(c,d,e).fd}catch(h){return x(h),-h.Pb}},ca:function(a,b){K=b;return 0},aa:function(a,b){K=b;try{return Sa.Wb(),0}catch(c){return x(c),-c.Pb}},B:function(){},$:function(){return devicePixelRatio||1},ea:function(a,b,c){a=a?P(a):f.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),H[b>>3]=a.right-a.left,H[c>>3]=a.bottom-a.top):(H[b>>3]=a.clientWidth,H[c>>3]=a.clientHeight);return 0},_a:function(a,b,c){C.set(C.subarray(b,b+
c),a)},Pa:function(a,b){function c(d){$b(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Z:function(a,b,c){a=ib(a);if(!a)return-4;a.width=b;a.height=c;return 0},Ya:function(a,b,c,d){lb(a,b,c,d,2,"keydown");return 0},Wa:function(a,b,c,d){lb(a,b,c,d,1,"keypress");return 0},Xa:function(a,b,c,d){lb(a,b,c,d,3,"keyup");return 0},ta:function(a,b,c,d){nb(a,b,c,d,5,"mousedown");return 0},hb:function(a,b,c,d){nb(a,b,c,d,33,"mouseenter");return 0},bb:function(a,b,c,d){nb(a,b,c,d,34,"mouseleave");
return 0},ob:function(a,b,c,d){nb(a,b,c,d,8,"mousemove");return 0},na:function(a,b,c,d){nb(a,b,c,d,6,"mouseup");return 0},pb:function(a,b,c,d){ob(a,b,c,d);return 0},Sa:function(a,b,c,d){pb(a,b,c,d,25,"touchcancel");return 0},Ta:function(a,b,c,d){pb(a,b,c,d,23,"touchend");return 0},Ua:function(a,b,c,d){pb(a,b,c,d,24,"touchmove");return 0},Va:function(a,b,c,d){pb(a,b,c,d,22,"touchstart");return 0},Ra:function(a,b,c,d){sb(a,b,c,d,31,"webglcontextlost");return 0},Qa:function(a,b,c,d){sb(a,b,c,d,32,"webglcontextrestored");
return 0},Za:function(a,b,c,d){a=P(a);return"undefined"!==typeof a.onwheel?(tb(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(tb(a,b,c,d,"mousewheel"),0):-1},Q:function(a,b){var c={};b>>=2;c.alpha=!!F[b];c.depth=!!F[b+1];c.stencil=!!F[b+2];c.antialias=!!F[b+3];c.premultipliedAlpha=!!F[b+4];c.preserveDrawingBuffer=!!F[b+5];c.powerPreference=Ob[F[b+6]];c.failIfMajorPerformanceCaveat=!!F[b+7];c.Xb=F[b+8];c.jc=F[b+9];c.Vb=F[b+10];c.$b=F[b+11];c.kc=F[b+12];c.lc=F[b+13];a=ib(a);!a||c.$b?c=0:c=
(a=1<c.Xb?a.getContext("webgl2",c):a.getContext("webgl",c)||a.getContext("experimental-webgl",c))?Hb(a,c):0;return c},wa:function(a,b){a=Bb[a];b=B(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b?Jb(Y):"OES_vertex_array_object"==b?Kb(Y):"WEBGL_draw_buffers"==b&&Lb(Y);return!!a.Qb.getExtension(b)},Ja:function(a){a>>=2;for(var b=0;14>b;++b)F[a+b]=0;F[a]=F[a+1]=F[a+3]=F[a+4]=F[a+8]=F[a+10]=1},ya:function(a){V=Bb[a];f.fc=Y=V&&V.Qb;return!a||Y?0:-5},db:Fa,$a:Fa,cb:Ha,l:function(a){Y.activeTexture(a)},
P:function(a,b){Y.attachShader(S[a],U[b])},c:function(a,b){35051==a?Y.Ub=b:35052==a&&(Y.Lb=b);Y.bindBuffer(a,wb[b])},h:function(a,b){Y.bindFramebuffer(a,xb[b])},T:function(a,b){Y.bindRenderbuffer(a,yb[b])},b:function(a,b){Y.bindTexture(a,zb[b])},_:function(a){Y.bindVertexArray(Ab[a])},G:function(a,b,c,d){Y.blendColor(a,b,c,d)},H:function(a,b){Y.blendEquationSeparate(a,b)},I:function(a,b,c,d){Y.blendFuncSeparate(a,b,c,d)},m:function(a,b,c,d,e,h,l,m,p,q){Y.blitFramebuffer(a,b,c,d,e,h,l,m,p,q)},V:function(a,
b,c,d){V.Gb?c?Y.bufferData(a,C,d,c,b):Y.bufferData(a,b,d):Y.bufferData(a,c?C.subarray(c,c+b):b,d)},p:function(a,b,c,d){V.Gb?Y.bufferSubData(a,b,C,d,c):Y.bufferSubData(a,b,C.subarray(d,d+c))},L:function(a){Y.clear(a)},xa:function(a,b,c,d){Y.clearColor(a,b,c,d)},va:function(a){Y.clearDepth(a)},ua:function(a){Y.clearStencil(a)},y:function(a,b,c,d){Y.colorMask(!!a,!!b,!!c,!!d)},kb:function(a){Y.compileShader(U[a])},Ga:function(a,b,c,d,e,h,l,m){V.Gb?Y.Lb?Y.compressedTexImage2D(a,b,c,d,e,h,l,m):Y.compressedTexImage2D(a,
b,c,d,e,h,C,m,l):Y.compressedTexImage2D(a,b,c,d,e,h,m?C.subarray(m,m+l):null)},Ea:function(a,b,c,d,e,h,l,m,p){V.Gb?Y.Lb?Y.compressedTexImage3D(a,b,c,d,e,h,l,m,p):Y.compressedTexImage3D(a,b,c,d,e,h,l,C,p,m):Y.compressedTexImage3D(a,b,c,d,e,h,l,p?C.subarray(p,p+m):null)},Ca:function(){var a=Fb(S),b=Y.createProgram();b.name=a;S[a]=b;return a},mb:function(a){var b=Fb(U);U[b]=Y.createShader(a);return b},F:function(a){Y.cullFace(a)},Y:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=wb[d];e&&(Y.deleteBuffer(e),
e.name=0,wb[d]=null,d==Mb&&(Mb=0),d==Nb&&(Nb=0),d==Y.Ub&&(Y.Ub=0),d==Y.Lb&&(Y.Lb=0))}},j:function(a,b){for(var c=0;c<a;++c){var d=F[b+4*c>>2],e=xb[d];e&&(Y.deleteFramebuffer(e),e.name=0,xb[d]=null)}},A:function(a){if(a){var b=S[a];b?(Y.deleteProgram(b),b.name=0,S[a]=null,Cb[a]=null):W(1281)}},q:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=yb[d];e&&(Y.deleteRenderbuffer(e),e.name=0,yb[d]=null)}},z:function(a){if(a){var b=U[a];b?(Y.deleteShader(b),U[a]=null):W(1281)}},X:function(a,b){for(var c=
0;c<a;c++){var d=F[b+4*c>>2],e=zb[d];e&&(Y.deleteTexture(e),e.name=0,zb[d]=null)}},Ka:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2];Y.deleteVertexArray(Ab[d]);Ab[d]=null}},w:function(a){Y.depthFunc(a)},x:function(a){Y.depthMask(!!a)},d:function(a){Y.disable(a)},a:function(a){Y.disableVertexAttribArray(a)},ha:function(a,b,c){Y.drawArrays(a,b,c)},o:function(a,b){for(var c=Pb[a],d=0;d<a;d++)c[d]=F[b+4*d>>2];Y.drawBuffers(c)},ia:function(a,b,c,d){Y.drawElements(a,b,c,d)},e:function(a){Y.enable(a)},
pa:function(a){Y.enableVertexAttribArray(a)},E:function(a){Y.frontFace(a)},W:function(a,b){Qb(a,b,"createBuffer",wb)},U:function(a,b){Qb(a,b,"createRenderbuffer",yb)},Ha:function(a,b){Qb(a,b,"createTexture",zb)},La:function(a,b){Qb(a,b,"createVertexArray",Ab)},za:function(a,b){return Y.getAttribLocation(S[a],B(b))},g:function(a,b){Rb(a,b)},Aa:function(a,b,c,d){a=Y.getProgramInfoLog(S[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,C,d,b):0;c&&(F[c>>2]=b)},O:function(a,b,c){if(c)if(a>=ub)W(1281);
else{var d=Cb[a];if(d)if(35716==b)a=Y.getProgramInfoLog(S[a]),null===a&&(a="(unknown error)"),F[c>>2]=a.length+1;else if(35719==b)F[c>>2]=d.Sb;else if(35722==b){if(-1==d.Nb){a=S[a];var e=Y.getProgramParameter(a,35721);for(b=d.Nb=0;b<e;++b)d.Nb=Math.max(d.Nb,Y.getActiveAttrib(a,b).name.length+1)}F[c>>2]=d.Nb}else if(35381==b){if(-1==d.Ob)for(a=S[a],e=Y.getProgramParameter(a,35382),b=d.Ob=0;b<e;++b)d.Ob=Math.max(d.Ob,Y.getActiveUniformBlockName(a,b).length+1);F[c>>2]=d.Ob}else F[c>>2]=Y.getProgramParameter(S[a],
b);else W(1282)}else W(1281)},jb:function(a,b,c,d){a=Y.getShaderInfoLog(U[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,C,d,b):0;c&&(F[c>>2]=b)},da:function(a,b,c){c?35716==b?(a=Y.getShaderInfoLog(U[a]),null===a&&(a="(unknown error)"),F[c>>2]=a.length+1):35720==b?(a=Y.getShaderSource(U[a]),F[c>>2]=null===a||0==a.length?0:a.length+1):F[c>>2]=Y.getShaderParameter(U[a],b):W(1281)},Na:function(a){if(Db[a])return Db[a];switch(a){case 7939:var b=Y.getSupportedExtensions();for(var c=[],d=0;d<b.length;++d)c.push(b[d]),
c.push("GL_"+b[d]);b=Z(c.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Y.getParameter(a))||W(1280);b=Z(b);break;case 7938:b=Y.getParameter(Y.VERSION);b=2<=V.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Z(b);break;case 35724:b=Y.getParameter(Y.SHADING_LANGUAGE_VERSION);c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Z(b);break;default:return W(1280),0}return Db[a]=b},Ma:function(a,
b){if(2>V.version)return W(1282),0;var c=Eb[a];if(c)return 0>b||b>=c.length?(W(1281),0):c[b];switch(a){case 7939:c=Y.getSupportedExtensions();for(var d=[],e=0;e<c.length;++e)d.push(Z(c[e])),d.push(Z("GL_"+c[e]));c=Eb[a]=d;return 0>b||b>=c.length?(W(1281),0):c[b];default:return W(1280),0}},k:function(a,b){b=B(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=Cb[a]&&Cb[a].Yb[b])&&0<=c&&c<a[0]?a[1]+c:-1},Ba:function(a){Y.linkProgram(S[a]);
var b=S[a];a=Cb[a]={Yb:{},Sb:0,Nb:-1,Ob:-1};for(var c=a.Yb,d=Y.getProgramParameter(b,35718),e=0;e<d;++e){var h=Y.getActiveUniform(b,e),l=h.name;a.Sb=Math.max(a.Sb,l.length+1);"]"==l.slice(-1)&&(l=l.slice(0,l.lastIndexOf("[")));var m=Y.getUniformLocation(b,l);if(m){var p=Fb(T);c[l]=[h.size,p];T[p]=m;for(var q=1;q<h.size;++q)m=Y.getUniformLocation(b,l+"["+q+"]"),p=Fb(T),T[p]=m}}},D:function(a,b){Y.polygonOffset(a,b)},n:function(a){Y.readBuffer(a)},Ia:function(a,b,c,d){Y.renderbufferStorage(a,b,c,d)},
S:function(a,b,c,d,e){Y.renderbufferStorageMultisample(a,b,c,d,e)},M:function(a,b,c,d){Y.scissor(a,b,c,d)},lb:function(a,b,c,d){for(var e="",h=0;h<b;++h){var l=d?F[d+4*h>>2]:-1;e+=B(F[c+4*h>>2],0>l?void 0:l)}Y.shaderSource(U[a],e)},ga:function(a,b,c){Y.stencilFunc(a,b,c)},K:function(a,b,c,d){Y.stencilFuncSeparate(a,b,c,d)},v:function(a){Y.stencilMask(a)},fa:function(a,b,c){Y.stencilOp(a,b,c)},J:function(a,b,c,d){Y.stencilOpSeparate(a,b,c,d)},Fa:function(a,b,c,d,e,h,l,m,p){V.Gb?Y.Lb?Y.texImage2D(a,
b,c,d,e,h,l,m,p):0!=p?Y.texImage2D(a,b,c,d,e,h,l,m,Vb(m),p>>(Wb[m]|0)):Y.texImage2D(a,b,c,d,e,h,l,m,null):Y.texImage2D(a,b,c,d,e,h,l,m,p?Ub(m,l,d,e,p):null)},Da:function(a,b,c,d,e,h,l,m,p,q){Y.Lb?Y.texImage3D(a,b,c,d,e,h,l,m,p,q):0!=q?Y.texImage3D(a,b,c,d,e,h,l,m,p,Vb(p),q>>(Wb[p]|0)):Y.texImage3D(a,b,c,d,e,h,l,m,p,null)},R:function(a,b,c){Y.texParameterf(a,b,c)},f:function(a,b,c){Y.texParameteri(a,b,c)},oa:function(a,b,c){if(V.Gb)Y.uniform1fv(T[a],G,c>>2,b);else{if(256>=b)for(var d=X[b-1],e=0;e<
b;++e)d[e]=G[c+4*e>>2];else d=G.subarray(c>>2,c+4*b>>2);Y.uniform1fv(T[a],d)}},C:function(a,b){Y.uniform1i(T[a],b)},ma:function(a,b,c){if(V.Gb)Y.uniform2fv(T[a],G,c>>2,2*b);else{if(256>=2*b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=G[c+4*e>>2],d[e+1]=G[c+(4*e+4)>>2];else d=G.subarray(c>>2,c+8*b>>2);Y.uniform2fv(T[a],d)}},la:function(a,b,c){if(V.Gb)Y.uniform3fv(T[a],G,c>>2,3*b);else{if(256>=3*b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=G[c+4*e>>2],d[e+1]=G[c+(4*e+4)>>2],d[e+2]=G[c+(4*e+8)>>2];else d=G.subarray(c>>
2,c+12*b>>2);Y.uniform3fv(T[a],d)}},ka:function(a,b,c){if(V.Gb)Y.uniform4fv(T[a],G,c>>2,4*b);else{if(256>=4*b)for(var d=X[4*b-1],e=0;e<4*b;e+=4)d[e]=G[c+4*e>>2],d[e+1]=G[c+(4*e+4)>>2],d[e+2]=G[c+(4*e+8)>>2],d[e+3]=G[c+(4*e+12)>>2];else d=G.subarray(c>>2,c+16*b>>2);Y.uniform4fv(T[a],d)}},ja:function(a,b,c,d){if(V.Gb)Y.uniformMatrix4fv(T[a],!!c,G,d>>2,16*b);else{if(256>=16*b)for(var e=X[16*b-1],h=0;h<16*b;h+=16)e[h]=G[d+4*h>>2],e[h+1]=G[d+(4*h+4)>>2],e[h+2]=G[d+(4*h+8)>>2],e[h+3]=G[d+(4*h+12)>>2],e[h+
4]=G[d+(4*h+16)>>2],e[h+5]=G[d+(4*h+20)>>2],e[h+6]=G[d+(4*h+24)>>2],e[h+7]=G[d+(4*h+28)>>2],e[h+8]=G[d+(4*h+32)>>2],e[h+9]=G[d+(4*h+36)>>2],e[h+10]=G[d+(4*h+40)>>2],e[h+11]=G[d+(4*h+44)>>2],e[h+12]=G[d+(4*h+48)>>2],e[h+13]=G[d+(4*h+52)>>2],e[h+14]=G[d+(4*h+56)>>2],e[h+15]=G[d+(4*h+60)>>2];else e=G.subarray(d>>2,d+64*b>>2);Y.uniformMatrix4fv(T[a],!!c,e)}},sa:function(a){Y.useProgram(S[a])},qa:function(a,b){Y.vertexAttribDivisor(a,b)},ra:function(a,b,c,d,e,h){Y.vertexAttribPointer(a,b,c,!!d,e,h)},N:function(a,
b,c,d){Y.viewport(a,b,c,d)},u:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){ac()});document.body.append(a)},t:function(){document.getElementById("_sokol_app_input_element").focus()},Oa:function(){window.addEventListener("beforeunload",function(a){0!=bc()&&(a.preventDefault(),a.returnValue=" ")})},s:function(){document.getElementById("_sokol_app_input_element").blur()},i:function(a){a|=
0;var b=E.length|0;var c=F[392560]|0;var d=c+a|0;if(0<(a|0)&(d|0)<(c|0)|0>(d|0))return x("OOM"),0,Ta(),-1;if(a=(d|0)>(b|0)){a=d|0;if(2147418112<a)a=!1;else{for(b=Math.max(E.length,16777216);b<a;)536870912>=b?b=sa(2*b):b=Math.min(sa((3*b+2147483648)/4),2147418112);Xb(b)?(wa(),a=!0):a=!1}a=!(a|0)}if(a)return Ta(),-1;F[392560]=d|0;return c|0},nb:function(a,b,c,d,e,h){b=B(b);var l=new XMLHttpRequest;l.open("GET",b);l.responseType="arraybuffer";var m=0<d;m&&l.setRequestHeader("Range","bytes="+c+"-"+(c+
d));l.onreadystatechange=function(){if(this.readyState==this.DONE)if(206==this.status||200==this.status&&!m){var b=new Uint8Array(l.response),c=b.length;c<=h?(C.set(b,e),cc(a,d,c)):dc(a)}else ec(a,this.status)};l.send()},ab:Ga},buffer);f.asm=fc;var Qa=f.___wasm_call_ctors=function(){return f.asm.qb.apply(null,arguments)},ac=f.__sapp_emsc_notify_keyboard_hidden=function(){return f.asm.rb.apply(null,arguments)},bc=f.__sapp_html5_get_ask_leave_site=function(){return f.asm.sb.apply(null,arguments)};
f._main=function(){return f.asm.tb.apply(null,arguments)};var Q=f._malloc=function(){return f.asm.ub.apply(null,arguments)};f._free=function(){return f.asm.vb.apply(null,arguments)};f.__saudio_emsc_pull=function(){return f.asm.wb.apply(null,arguments)};f.__sfetch_emsc_head_response=function(){return f.asm.xb.apply(null,arguments)};
var cc=f.__sfetch_emsc_get_response=function(){return f.asm.yb.apply(null,arguments)},ec=f.__sfetch_emsc_failed_http_status=function(){return f.asm.zb.apply(null,arguments)},dc=f.__sfetch_emsc_failed_buffer_too_small=function(){return f.asm.Ab.apply(null,arguments)},ra=f.stackAlloc=function(){return f.asm.Bb.apply(null,arguments)};f.dynCall_vi=function(){return f.asm.Cb.apply(null,arguments)};f.dynCall_v=function(){return f.asm.Db.apply(null,arguments)};
var R=f.dynCall_iiii=function(){return f.asm.Eb.apply(null,arguments)},$b=f.dynCall_idi=function(){return f.asm.Fb.apply(null,arguments)};f.asm=fc;function ja(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}Ja=function hc(){f.calledRun||ic();f.calledRun||(Ja=hc)};
function ic(a){function b(){if(!f.calledRun&&(f.calledRun=!0,!ma)){ya(Aa);ya(Ba);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(jc){var b=a;b=b||[];var d=b.length+1,e=ra(4*(d+1));F[e>>2]=qa(aa);for(var h=1;h<d;h++)F[(e>>2)+h]=qa(b[h-1]);F[(e>>2)+d]=0;try{var l=f._main(d,e);if(!f.noExitRuntime||0!==l){if(!f.noExitRuntime&&(ma=!0,f.onExit))f.onExit(l);t(l,new ja(l))}}catch(m){m instanceof ja||("SimulateInfiniteLoop"==m?f.noExitRuntime=!0:((b=m)&&"object"===typeof m&&m.stack&&(b=[m,m.stack]),
z("exception thrown: "+b),t(1,m)))}finally{}}if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)b=f.postRun.shift(),Da.unshift(b);ya(Da)}}a=a||n;if(!(0<I)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ea();ya(za);0<I||f.calledRun||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=ic;
function x(a){if(f.onAbort)f.onAbort(a);ka(a);z(a);ma=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}f.abort=x;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var jc=!0;f.noInitialRun&&(jc=!1);f.noExitRuntime=!0;ic();
