var aa,e;var g;g||(g=typeof Module !== 'undefined' ? Module : {});var k={},p;for(p in g)g.hasOwnProperty(p)&&(k[p]=g[p]);g.arguments=[];g.thisProgram="./this.program";g.quit=function(a,b){throw b;};g.preRun=[];g.postRun=[];var r=!1,t=!1,ba=!1,ca=!1;r="object"===typeof window;t="function"===typeof importScripts;ba="object"===typeof process&&"function"===typeof require&&!r&&!t;ca=!r&&!ba&&!t;var v="";
if(ba){v=__dirname+"/";var da,ea;g.read=function(a,b){da||(da=require("fs"));ea||(ea=require("path"));a=ea.normalize(a);a=da.readFileSync(a);return b?a:a.toString()};g.readBinary=function(a){a=g.read(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||w("Assertion failed: undefined");return a};1<process.argv.length&&(g.thisProgram=process.argv[1].replace(/\\/g,"/"));g.arguments=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=g);process.on("uncaughtException",function(a){if(!(a instanceof
x))throw a;});process.on("unhandledRejection",w);g.quit=function(a){process.exit(a)};g.inspect=function(){return"[Emscripten Module object]"}}else if(ca)"undefined"!=typeof read&&(g.read=function(a){return read(a)}),g.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||w("Assertion failed: undefined");return a},"undefined"!=typeof scriptArgs?g.arguments=scriptArgs:"undefined"!=typeof arguments&&(g.arguments=arguments),
"function"===typeof quit&&(g.quit=function(a){quit(a)});else if(r||t)t?v=self.location.href:document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",g.read=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},t&&(g.readBinary=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),g.readAsync=function(a,b,c){var d=new XMLHttpRequest;
d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)},g.setWindowTitle=function(a){document.title=a};var fa=g.print||("undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null),y=g.printErr||("undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||fa);for(p in k)k.hasOwnProperty(p)&&(g[p]=k[p]);k=void 0;
function ha(a){var b=z[ia>>2];a=b+a+15&-16;if(a<=ja())z[ia>>2]=a;else return 0;return b}var ka={"f64-rem":function(a,b){return a%b},"debugger":function(){debugger}};"object"!==typeof WebAssembly&&y("no native wasm support detected");var la,ma=!1,na="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function A(a){if(a){for(var b=B,c=a+void 0,d=a;b[d]&&!(d>=c);)++d;if(16<d-a&&b.subarray&&na)a=na.decode(b.subarray(a,d));else{for(c="";a<d;){var f=b[a++];if(f&128){var h=b[a++]&63;if(192==(f&224))c+=String.fromCharCode((f&31)<<6|h);else{var l=b[a++]&63;f=224==(f&240)?(f&15)<<12|h<<6|l:(f&7)<<18|h<<12|l<<6|b[a++]&63;65536>f?c+=String.fromCharCode(f):(f-=65536,c+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else c+=String.fromCharCode(f)}a=c}}else a="";return a}
function C(a,b,c,d){if(0<d){d=c+d-1;for(var f=0;f<a.length;++f){var h=a.charCodeAt(f);if(55296<=h&&57343>=h){var l=a.charCodeAt(++f);h=65536+((h&1023)<<10)|l&1023}if(127>=h){if(c>=d)break;b[c++]=h}else{if(2047>=h){if(c+1>=d)break;b[c++]=192|h>>6}else{if(65535>=h){if(c+2>=d)break;b[c++]=224|h>>12}else{if(c+3>=d)break;b[c++]=240|h>>18;b[c++]=128|h>>12&63}b[c++]=128|h>>6&63}b[c++]=128|h&63}}b[c]=0}}
function oa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function pa(a){var b=oa(a)+1,c=qa(b);C(a,D,c,b);return c}var buffer,D,B,ra,z,sa,E,ia=1593088,F=g.TOTAL_MEMORY||134217728;5242880>F&&y("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+F+"! (TOTAL_STACK=5242880)");
g.buffer?buffer=g.buffer:"object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(la=new WebAssembly.Memory({initial:F/65536,maximum:F/65536}),buffer=la.buffer):buffer=new ArrayBuffer(F);g.HEAP8=D=new Int8Array(buffer);g.HEAP16=ra=new Int16Array(buffer);g.HEAP32=z=new Int32Array(buffer);g.HEAPU8=B=new Uint8Array(buffer);g.HEAPU16=new Uint16Array(buffer);g.HEAPU32=new Uint32Array(buffer);g.HEAPF32=sa=new Float32Array(buffer);g.HEAPF64=E=new Float64Array(buffer);z[ia>>2]=6836E3;
function G(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.qb;"number"===typeof c?void 0===b.hb?g.dynCall_v(c):g.dynCall_vi(c,b.hb):c(void 0===b.hb?null:b.hb)}}}var ta=[],ua=[],va=[],wa=[],xa=[],H=!1;function ya(){var a=g.preRun.shift();ta.unshift(a)}var za=Math.abs,Aa=Math.ceil,Ca=Math.floor,Da=Math.min,I=0,Ea=null,J=null;g.preloadedImages={};g.preloadedAudios={};
function Fa(){var a=K;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var K="modplay-sapp.wasm";if(!Fa()){var Ga=K;K=g.locateFile?g.locateFile(Ga,v):v+Ga}function Ha(){try{if(g.wasmBinary)return new Uint8Array(g.wasmBinary);if(g.readBinary)return g.readBinary(K);throw"both async and sync fetching of the wasm failed";}catch(a){w(a)}}
function Ia(){return g.wasmBinary||!r&&!t||"function"!==typeof fetch?new Promise(function(a){a(Ha())}):fetch(K,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+K+"'";return a.arrayBuffer()}).catch(function(){return Ha()})}
function Ja(a){function b(a){g.asm=a.exports;I--;g.monitorRunDependencies&&g.monitorRunDependencies(I);0==I&&(null!==Ea&&(clearInterval(Ea),Ea=null),J&&(a=J,J=null,a()))}function c(a){b(a.instance)}function d(a){Ia().then(function(a){return WebAssembly.instantiate(a,f)}).then(a,function(a){y("failed to asynchronously prepare wasm: "+a);w(a)})}var f={env:a,global:{NaN:NaN,Infinity:Infinity},"global.Math":Math,asm2wasm:ka};I++;g.monitorRunDependencies&&g.monitorRunDependencies(I);if(g.instantiateWasm)try{return g.instantiateWasm(f,
b)}catch(h){return y("Module.instantiateWasm callback failed with error: "+h),!1}g.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||Fa()||"function"!==typeof fetch?d(c):WebAssembly.instantiateStreaming(fetch(K,{credentials:"same-origin"}),f).then(c,function(a){y("wasm streaming compile failed: "+a);y("falling back to ArrayBuffer instantiation");d(c)});return{}}
g.asm=function(a,b){b.memory=la;b.table=new WebAssembly.Table({initial:178,maximum:178,element:"anyfunc"});b.__memory_base=1024;b.__table_base=0;return Ja(b)};ua.push({qb:function(){Ka()}});var L={};
function La(a){if(La.fb){var b=z[a>>2];var c=z[b>>2]}else La.fb=!0,L.USER=L.LOGNAME="web_user",L.PATH="/",L.PWD="/",L.HOME="/home/web_user",L.LANG="C.UTF-8",L._=g.thisProgram,c=H?M(1024):ha(1024),b=H?M(256):ha(256),z[b>>2]=c,z[a>>2]=b;a=[];var d=0,f;for(f in L)if("string"===typeof L[f]){var h=f+"="+L[f];a.push(h);d+=h.length}if(1024<d)throw Error("Environment size exceeded TOTAL_ENV_SIZE!");for(f=0;f<a.length;f++){d=h=a[f];for(var l=c,n=0;n<d.length;++n)D[l++>>0]=d.charCodeAt(n);D[l>>0]=0;z[b+4*f>>
2]=c;c+=h.length+1}z[b+4*a.length>>2]=0}var N=0;function O(){N+=4;return z[N-4>>2]}function P(){var a=(void 0).zb(O());if(!a)throw new (void 0).ub(9);return a}function Ma(a){g.___errno_location&&(z[g.___errno_location()>>2]=a);return a}var Na=0,Oa=0,Q=0,Pa=0,Qa=0,Ra=null,Sa=null,Ta=!1;function Ua(){for(var a=R.length-1;0<=a;--a)Va(a);R=[];Wa=[]}var Wa=[];function Xa(){if(Ya&&Za.$a)for(var a=0;a<Wa.length;++a){var b=Wa[a];Wa.splice(a,1);--a;b.Gb.apply(this,b.wb)}}var Ya=0,Za=null,R=[];
function $a(){return-1!==navigator.userAgent.indexOf("MSIE")||0<navigator.appVersion.indexOf("Trident/")}function Va(a){var b=R[a];b.target.removeEventListener(b.Za,b.ob,b.ab);R.splice(a,1)}function S(a){function b(b){++Ya;Za=a;Xa();a.eb(b);Xa();--Ya}if(a.bb)a.ob=b,a.target.addEventListener(a.Za,b,a.ab),R.push(a),Ta||(wa.push(Ua),Ta=!0);else for(var c=0;c<R.length;++c)R[c].target==a.target&&R[c].Za==a.Za&&Va(c--)}
var ab=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function T(a){try{if(!a)return window;"number"===typeof a&&(a=ab[a]||A(a));return"#window"===a?window:"#document"===a?document:"#screen"===a?screen:"#canvas"===a?g.canvas:"string"===typeof a?document.getElementById(a):a}catch(b){return null}}function ja(){return D.length}function bb(){w("OOM")}
function cb(a){"number"===typeof a&&(a=A(a));return a&&"#canvas"!==a?"undefined"!==typeof fb&&gb[a]?gb[a]:T(a):"undefined"!==typeof fb&&gb.canvas?gb.canvas:g.canvas}
function hb(a,b,c,d,f,h){Na||(Na=M(164));a={target:T(a),$a:$a()?!1:!0,Za:h,bb:d,eb:function(a){a=a||window.event;var c=Na;C(a.key?a.key:"",B,c+0,32);C(a.code?a.code:"",B,c+32,32);z[c+64>>2]=a.location;z[c+68>>2]=a.ctrlKey;z[c+72>>2]=a.shiftKey;z[c+76>>2]=a.altKey;z[c+80>>2]=a.metaKey;z[c+84>>2]=a.repeat;C(a.locale?a.locale:"",B,c+88,32);C(a.char?a.char:"",B,c+120,32);z[c+152>>2]=a.charCode;z[c+156>>2]=a.keyCode;z[c+160>>2]=a.which;V(d,f,c,b)&&a.preventDefault()},ab:c};S(a)}
function ib(a,b,c){E[a>>3]=window.performance&&window.performance.now?window.performance.now():Date.now();z[a+8>>2]=b.screenX;z[a+12>>2]=b.screenY;z[a+16>>2]=b.clientX;z[a+20>>2]=b.clientY;z[a+24>>2]=b.ctrlKey;z[a+28>>2]=b.shiftKey;z[a+32>>2]=b.altKey;z[a+36>>2]=b.metaKey;ra[a+40>>1]=b.button;ra[a+42>>1]=b.buttons;z[a+44>>2]=b.movementX||b.mozMovementX||b.webkitMovementX||b.screenX-Ra;z[a+48>>2]=b.movementY||b.mozMovementY||b.webkitMovementY||b.screenY-Sa;if(g.canvas){var d=g.canvas.getBoundingClientRect();
z[a+60>>2]=b.clientX-d.left;z[a+64>>2]=b.clientY-d.top}else z[a+60>>2]=0,z[a+64>>2]=0;c?(d=c.getBoundingClientRect?c.getBoundingClientRect():{left:0,top:0},z[a+52>>2]=b.clientX-d.left,z[a+56>>2]=b.clientY-d.top):(z[a+52>>2]=0,z[a+56>>2]=0);"wheel"!==b.type&&"mousewheel"!==b.type&&(Ra=b.screenX,Sa=b.screenY)}
function W(a,b,c,d,f,h){Oa||(Oa=M(72));a=T(a);c={target:a,$a:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Za:h,bb:d,eb:function(c){c=c||window.event;ib(Oa,c,a);V(d,f,Oa,b)&&c.preventDefault()},ab:c};$a()&&"mousedown"==h&&(c.$a=!1);S(c)}
function jb(a,b,c,d){Pa||(Pa=M(36));a=T(a);S({target:a,$a:!1,Za:"resize",bb:d,eb:function(c){c=c||window.event;if(c.target==a){var f=0<window.pageXOffset||0<window.pageYOffset?[window.pageXOffset,window.pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.scrollLeft|0,document.body.scrollTop|0],l=Pa;z[l>>2]=c.detail;z[l+4>>2]=document.body.clientWidth;
z[l+8>>2]=document.body.clientHeight;z[l+12>>2]=window.innerWidth;z[l+16>>2]=window.innerHeight;z[l+20>>2]=window.outerWidth;z[l+24>>2]=window.outerHeight;z[l+28>>2]=f[0];z[l+32>>2]=f[1];V(d,10,l,b)&&c.preventDefault()}},ab:c})}
function kb(a,b,c,d,f,h){Qa||(Qa=M(1684));a=T(a);S({target:a,$a:"touchstart"==h||"touchend"==h,Za:h,bb:d,eb:function(c){c=c||window.event;for(var h={},l=0;l<c.touches.length;++l){var q=c.touches[l];h[q.identifier]=q}for(l=0;l<c.changedTouches.length;++l)q=c.changedTouches[l],h[q.identifier]=q,q.nb=!0;for(l=0;l<c.targetTouches.length;++l)q=c.targetTouches[l],h[q.identifier].tb=!0;var m=q=Qa;z[m+4>>2]=c.ctrlKey;z[m+8>>2]=c.shiftKey;z[m+12>>2]=c.altKey;z[m+16>>2]=c.metaKey;m+=20;var Ba=g.canvas?g.canvas.getBoundingClientRect():
void 0,db=a.getBoundingClientRect?a.getBoundingClientRect():{left:0,top:0},eb=0;for(l in h){var u=h[l];z[m>>2]=u.identifier;z[m+4>>2]=u.screenX;z[m+8>>2]=u.screenY;z[m+12>>2]=u.clientX;z[m+16>>2]=u.clientY;z[m+20>>2]=u.pageX;z[m+24>>2]=u.pageY;z[m+28>>2]=u.nb;z[m+32>>2]=u.tb;Ba?(z[m+44>>2]=u.clientX-Ba.left,z[m+48>>2]=u.clientY-Ba.top):(z[m+44>>2]=0,z[m+48>>2]=0);z[m+36>>2]=u.clientX-db.left;z[m+40>>2]=u.clientY-db.top;m+=52;if(32<=++eb)break}z[q>>2]=eb;V(d,f,q,b)&&c.preventDefault()},ab:c})}
function lb(a,b,c,d,f,h){a||(a=g.canvas);a={target:T(a),$a:!1,Za:h,bb:d,eb:function(a){a=a||window.event;V(d,f,0,b)&&a.preventDefault()},ab:c};S(a)}
function mb(a,b,c,d,f){function h(c){c=c||window.event;ib(Q,c,a);E[Q+72>>3]=c.wheelDeltaX||0;E[Q+80>>3]=-(c.wheelDeltaY?c.wheelDeltaY:c.wheelDelta);E[Q+88>>3]=0;z[Q+96>>2]=0;V(d,9,Q,b)&&c.preventDefault()}function l(c){c=c||window.event;var f=Q;ib(f,c,a);E[f+72>>3]=c.deltaX;E[f+80>>3]=c.deltaY;E[f+88>>3]=c.deltaZ;z[f+96>>2]=c.deltaMode;V(d,9,f,b)&&c.preventDefault()}Q||(Q=M(104));S({target:a,$a:!0,Za:f,bb:d,eb:"wheel"==f?l:h,ab:c})}
var nb=1,ob=0,pb=[],qb=[],rb=[],sb=[],tb=[],ub=[],vb={},X=null,gb={},wb={};function Y(a){ob||(ob=a)}function xb(a,b){function c(){var a=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return a?parseInt(a[2],10):!1}var d=M(8),f={handle:d,attributes:b,version:b.mb,ib:a};f.Fb=2<=f.version&&(!1===c()||58<=c());a.canvas&&(a.canvas.vb=f);vb[d]=f;("undefined"===typeof b.lb||b.lb)&&yb(f);return d}
function yb(a){a||(a=X);if(!a.sb){a.sb=!0;var b=a.ib;if(2>a.version){var c=b.getExtension("ANGLE_instanced_arrays");c&&(b.vertexAttribDivisor=function(a,b){c.vertexAttribDivisorANGLE(a,b)},b.drawArraysInstanced=function(a,b,d,f){c.drawArraysInstancedANGLE(a,b,d,f)},b.drawElementsInstanced=function(a,b,d,f,h){c.drawElementsInstancedANGLE(a,b,d,f,h)});var d=b.getExtension("OES_vertex_array_object");d&&(b.createVertexArray=function(){return d.createVertexArrayOES()},b.deleteVertexArray=function(a){d.deleteVertexArrayOES(a)},
b.bindVertexArray=function(a){d.bindVertexArrayOES(a)},b.isVertexArray=function(a){return d.isVertexArrayOES(a)});var f=b.getExtension("WEBGL_draw_buffers");f&&(b.drawBuffers=function(a,b){f.drawBuffersWEBGL(a,b)})}b.yb=b.getExtension("EXT_disjoint_timer_query");var h="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");
(a=b.getSupportedExtensions())&&0<a.length&&b.getSupportedExtensions().forEach(function(a){-1!=h.indexOf(a)&&b.getExtension(a)})}}var fb={},zb,Ab,Bb=["default","low-power","high-performance"];function Cb(a){if(0===a)return 0;a=A(a);if(!L.hasOwnProperty(a))return 0;Cb.fb&&Db(Cb.fb);a=L[a];var b=oa(a)+1,c=M(b);c&&C(a,D,c,b);Cb.fb=c;return Cb.fb}var Eb=[];
function Fb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>X.version){Y(1282);return}d=Z.getSupportedExtensions();c=null===d?0:2*d.length;break;case 33307:case 33308:if(2>X.version){Y(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":Y(1280);return;case "object":if(null===
d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 35097:case 36389:case 34068:c=0;break;default:Y(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)z[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){Y(1280);y("GL_INVALID_ENUM in glGetIntegerv: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:Y(1280);return}z[b>>2]=c}else Y(1281)}
function Gb(a){var b=oa(a)+1,c=M(b);C(a,B,c,b);return c}function Hb(a){return Math.pow(2,a)}function Ib(a){a/=1E3;if((r||t)&&self.performance&&self.performance.now)for(var b=self.performance.now();self.performance.now()-b<a;);else for(b=Date.now();Date.now()-b<a;);return 0}g._usleep=Ib;for(var Z,Jb=0;256>Jb;Jb++);for(var Kb=0;32>Kb;Kb++)Eb.push(Array(Kb));
var Ob=g.asm({},{c:w,Ea:La,h:function(){},A:Ma,fa:function(a,b){N=b;try{var c=P(),d=O(),f=O(),h=O(),l=O();if(!(-1==d&&0>f||0==d&&0<=f))return-75;(void 0).Bb(c,f,l);aa=[c.position>>>0,(e=c.position,1<=+za(e)?0<e?(Da(+Ca(e/4294967296),4294967295)|0)>>>0:~~+Aa((e-+(~~e>>>0))/4294967296)>>>0:0)];z[h>>2]=aa[0];z[h+4>>2]=aa[1];c.rb&&0===f&&0===l&&(c.rb=null);return 0}catch(n){return w(n),-n.cb}},$:function(a,b){N=b;try{var c=P(),d=O();a:{var f=O();for(b=a=0;b<f;b++){var h=z[d+(8*b+4)>>2],l=(void 0).read(c,
D,z[d+8*b>>2],h,void 0);if(0>l){var n=-1;break a}a+=l;if(l<h)break}n=a}return n}catch(U){return w(U),-U.cb}},u:function(a,b){N=b;try{var c=P(),d=O();a:{var f=O();for(b=a=0;b<f;b++){var h=(void 0).write(c,D,z[d+8*b>>2],z[d+(8*b+4)>>2],void 0);if(0>h){var l=-1;break a}a+=h}l=a}return l}catch(n){return w(n),-n.cb}},k:function(a,b){N=b;try{var c=P();switch(O()){case 0:var d=O();return 0>d?-22:(void 0).open(c.path,c.flags,0,d).fd;case 1:case 2:return 0;case 3:return c.flags;case 4:return d=O(),c.flags|=
d,0;case 12:return d=O(),ra[d+0>>1]=2,0;case 13:case 14:return 0;case 16:case 8:return-22;case 9:return Ma(22),-1;default:return-22}}catch(f){return w(f),-f.cb}},I:function(a,b){N=b;try{var c=A(O()),d=O(),f=O();return(void 0).open(c,d,f).fd}catch(h){return w(h),-h.cb}},o:function(a,b){N=b;try{var c=P(),d=O();switch(d){case 21509:case 21505:return c.tty?0:-25;case 21510:case 21511:case 21512:case 21506:case 21507:case 21508:return c.tty?0:-25;case 21519:if(!c.tty)return-25;var f=O();return z[f>>2]=
0;case 21520:return c.tty?-22:-25;case 21531:return f=O(),(void 0).Ab(c,d,f);case 21523:return c.tty?0:-25;case 21524:return c.tty?0:-25;default:w("bad ioctl syscall "+d)}}catch(h){return w(h),-h.cb}},E:function(a,b){N=b;try{var c=P();(void 0).close(c);return 0}catch(d){return w(d),-d.cb}},i:function(){},Da:function(){return g.gb?g.gb.bufferSize:0},Ca:function(a,b,c){g.Ya=null;g.gb=null;"undefined"!==typeof AudioContext?(g.Ya=new AudioContext({sampleRate:a,latencyHint:"interactive"}),console.log("sokol_audio.h: created AudioContext")):
"undefined"!==typeof webkitAudioContext?(g.Ya=new webkitAudioContext({sampleRate:a,latencyHint:"interactive"}),console.log("sokol_audio.h: created webkitAudioContext")):(g.Ya=null,console.log("sokol_audio.h: no WebAudio support"));return g.Ya?(console.log("sokol_audio.h: sample rate ",g.Ya.sampleRate),g.gb=g.Ya.createScriptProcessor(c,0,b),g.gb.onaudioprocess=function(a){var b=a.outputBuffer.length,c=Lb(b);if(c)for(var d=a.outputBuffer.numberOfChannels,n=0;n<d;n++)for(var U=a.outputBuffer.getChannelData(n),
q=0;q<b;q++)U[q]=sa[(c>>2)+(d*q+n)]},g.gb.connect(g.Ya.destination),a=function(){g.Ya&&"suspended"===g.Ya.state&&g.Ya.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},Ba:function(){return g.Ya?g.Ya.sampleRate:0},D:function(){return window.devicePixelRatio||1},C:function(a,b,c){a=a?T(a):g.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),E[b>>3]=a.right-a.left,
E[c>>3]=a.bottom-a.top):(E[b>>3]=a.clientWidth,E[c>>3]=a.clientHeight);return 0},Aa:ja,za:function(a,b,c){B.set(B.subarray(b,b+c),a)},ya:function(a,b){function c(d){Mb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},xa:function(a){bb(a)},B:function(a,b,c){a=cb(a);if(!a)return-4;a.width=b;a.height=c;return 0},wa:function(a,b,c,d){hb(a,b,c,d,2,"keydown");return 0},va:function(a,b,c,d){hb(a,b,c,d,1,"keypress");return 0},ua:function(a,b,c,d){hb(a,b,c,d,3,"keyup");return 0},ta:function(a,
b,c,d){W(a,b,c,d,5,"mousedown");return 0},sa:function(a,b,c,d){W(a,b,c,d,33,"mouseenter");return 0},ra:function(a,b,c,d){W(a,b,c,d,34,"mouseleave");return 0},qa:function(a,b,c,d){W(a,b,c,d,8,"mousemove");return 0},pa:function(a,b,c,d){W(a,b,c,d,6,"mouseup");return 0},oa:function(a,b,c,d){jb(a,b,c,d);return 0},na:function(a,b,c,d){kb(a,b,c,d,25,"touchcancel");return 0},ma:function(a,b,c,d){kb(a,b,c,d,23,"touchend");return 0},la:function(a,b,c,d){kb(a,b,c,d,24,"touchmove");return 0},ka:function(a,b,
c,d){kb(a,b,c,d,22,"touchstart");return 0},ja:function(a,b,c,d){lb(a,b,c,d,31,"webglcontextlost");return 0},ia:function(a,b,c,d){lb(a,b,c,d,32,"webglcontextrestored");return 0},ha:function(a,b,c,d){a=T(a);return"undefined"!==typeof a.onwheel?(mb(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(mb(a,b,c,d,"mousewheel"),0):-1},z:function(a,b){var c={};b>>=2;c.alpha=!!z[b];c.depth=!!z[b+1];c.stencil=!!z[b+2];c.antialias=!!z[b+3];c.premultipliedAlpha=!!z[b+4];c.preserveDrawingBuffer=!!z[b+5];
c.powerPreference=Bb[z[b+6]];c.failIfMajorPerformanceCaveat=!!z[b+7];c.mb=z[b+8];c.Cb=z[b+9];c.lb=z[b+10];c.pb=z[b+11];c.Db=z[b+12];c.Eb=z[b+13];a=cb(a);!a||c.pb?c=0:c=(a=1<c.mb?a.getContext("webgl2",c):a.getContext("webgl",c)||a.getContext("experimental-webgl",c))&&xb(a,c);return c},ga:function(a){a>>=2;for(var b=0;14>b;++b)z[a+b]=0;z[a]=z[a+1]=z[a+3]=z[a+4]=z[a+8]=z[a+10]=1},ea:function(a){X=vb[a];g.xb=Z=X&&X.ib;return!a||Z?0:-5},g:Cb,y:function(a,b){35051==a?Z.jb=b:35052==a&&(Z.kb=b);Z.bindBuffer(a,
pb[b])},d:function(a,b){Z.bindFramebuffer(a,rb[b])},x:function(a){Z.bindVertexArray(ub[a])},da:function(a,b,c,d){Z.blendColor(a,b,c,d)},ca:function(a,b){Z.blendEquationSeparate(a,b)},ba:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},m:function(a,b,c,d,f,h,l,n,U,q){Z.blitFramebuffer(a,b,c,d,f,h,l,n,U,q)},aa:function(a){Z.clear(a)},_:function(a,b,c,d){Z.clearColor(a,b,c,d)},Z:function(a){Z.clearDepth(a)},Y:function(a){Z.clearStencil(a)},w:function(a,b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},X:function(a){Z.cullFace(a)},
W:function(a,b){for(var c=0;c<a;c++){var d=z[b+4*c>>2],f=pb[d];f&&(Z.deleteBuffer(f),f.name=0,pb[d]=null,d==zb&&(zb=0),d==Ab&&(Ab=0),d==Z.jb&&(Z.jb=0),d==Z.kb&&(Z.kb=0))}},f:function(a,b){for(var c=0;c<a;++c){var d=z[b+4*c>>2],f=rb[d];f&&(Z.deleteFramebuffer(f),f.name=0,rb[d]=null)}},V:function(a){if(a){var b=qb[a];b?(Z.deleteProgram(b),b.name=0,qb[a]=null):Y(1281)}},v:function(a,b){for(var c=0;c<a;c++){var d=z[b+4*c>>2],f=sb[d];f&&(Z.deleteRenderbuffer(f),f.name=0,sb[d]=null)}},U:function(a,b){for(var c=
0;c<a;c++){var d=z[b+4*c>>2],f=tb[d];f&&(Z.deleteTexture(f),f.name=0,tb[d]=null)}},T:function(a,b){for(var c=0;c<a;c++){var d=z[b+4*c>>2];Z.deleteVertexArray(ub[d]);ub[d]=null}},t:function(a){Z.depthFunc(a)},s:function(a){Z.depthMask(!!a)},e:function(a){Z.disable(a)},b:function(a){Z.disableVertexAttribArray(a)},l:function(a,b){for(var c=Eb[a],d=0;d<a;d++)c[d]=z[b+4*d>>2];Z.drawBuffers(c)},n:function(a){Z.enable(a)},S:function(a){Z.frontFace(a)},R:function(a,b){for(var c=0;c<a;c++){var d=Z.createVertexArray(),
f;if(f=d){f=ub;for(var h=nb++,l=f.length;l<h;l++)f[l]=null;f=h}d?(d.name=f,ub[f]=d):Y(1282);z[b+4*c>>2]=f}},r:function(a,b){Fb(a,b)},Q:function(a){if(wb[a])return wb[a];switch(a){case 7939:var b=Z.getSupportedExtensions();for(var c=[],d=0;d<b.length;++d)c.push(b[d]),c.push("GL_"+b[d]);b=Gb(c.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Z.getParameter(a))||Y(1280);b=Gb(b);break;case 7938:b=Z.getParameter(Z.VERSION);b=2<=X.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Gb(b);
break;case 35724:b=Z.getParameter(Z.SHADING_LANGUAGE_VERSION);c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Gb(b);break;default:return Y(1280),0}return wb[a]=b},P:function(a,b){Z.polygonOffset(a,b)},j:function(a){Z.readBuffer(a)},O:function(a,b,c,d){Z.scissor(a,b,c,d)},N:function(a,b,c){Z.stencilFunc(a,b,c)},q:function(a){Z.stencilMask(a)},M:function(a,b,c){Z.stencilOp(a,b,c)},L:function(a,b,c,d){Z.viewport(a,
b,c,d)},K:Hb,J:function(a){return Hb(a)},H:function(a,b){var c=z[a>>2];a=z[a+4>>2];0!==b&&(z[b>>2]=0,z[b+4>>2]=0);return Ib(1E6*c+a/1E3)},p:function(a,b,c){if(0===a)return Ma(22),-1;a=A(a);b=A(b);if(""===a||-1!==a.indexOf("="))return Ma(22),-1;if(L.hasOwnProperty(a)&&!c)return 0;L[a]=b;La(Nb());return 0},G:function(a){var b=Date.now()/1E3|0;a&&(z[a>>2]=b);return b},F:bb,a:ia},buffer);g.asm=Ob;g.___em_js___sapp_js_create_textfield=function(){return g.asm.Fa.apply(null,arguments)};
g.___em_js___sapp_js_focus_textfield=function(){return g.asm.Ga.apply(null,arguments)};g.___em_js___sapp_js_unfocus_textfield=function(){return g.asm.Ha.apply(null,arguments)};g.___em_js___saudio_js_buffer_frames=function(){return g.asm.Ia.apply(null,arguments)};g.___em_js___saudio_js_init=function(){return g.asm.Ja.apply(null,arguments)};g.___em_js___saudio_js_sample_rate=function(){return g.asm.Ka.apply(null,arguments)};g.___em_js___stm_js_perfnow=function(){return g.asm.La.apply(null,arguments)};
var Nb=g.__get_environ=function(){return g.asm.Ma.apply(null,arguments)};g.__sapp_emsc_notify_keyboard_hidden=function(){return g.asm.Na.apply(null,arguments)};var Lb=g.__saudio_emsc_pull=function(){return g.asm.Oa.apply(null,arguments)},Db=g._free=function(){return g.asm.Pa.apply(null,arguments)};g._main=function(){return g.asm.Qa.apply(null,arguments)};
var M=g._malloc=function(){return g.asm.Ra.apply(null,arguments)},Ka=g.globalCtors=function(){return g.asm.Wa.apply(null,arguments)},qa=g.stackAlloc=function(){return g.asm.Xa.apply(null,arguments)},Mb=g.dynCall_idi=function(){return g.asm.Sa.apply(null,arguments)},V=g.dynCall_iiii=function(){return g.asm.Ta.apply(null,arguments)};g.dynCall_v=function(){return g.asm.Ua.apply(null,arguments)};g.dynCall_vi=function(){return g.asm.Va.apply(null,arguments)};g.asm=Ob;
function x(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}x.prototype=Error();x.prototype.constructor=x;J=function Pb(){g.calledRun||Qb();g.calledRun||(J=Pb)};
g.callMain=function(a){a=a||[];H||(H=!0,G(ua));var b=a.length+1,c=qa(4*(b+1));z[c>>2]=pa(g.thisProgram);for(var d=1;d<b;d++)z[(c>>2)+d]=pa(a[d-1]);z[(c>>2)+b]=0;try{var f=g._main(b,c,0);if(!g.noExitRuntime||0!==f){if(!g.noExitRuntime&&(ma=!0,g.onExit))g.onExit(f);g.quit(f,new x(f))}}catch(h){h instanceof x||("SimulateInfiniteLoop"==h?g.noExitRuntime=!0:((a=h)&&"object"===typeof h&&h.stack&&(a=[h,h.stack]),y("exception thrown: "+a),g.quit(1,h)))}finally{}};
function Qb(a){function b(){if(!g.calledRun&&(g.calledRun=!0,!ma)){H||(H=!0,G(ua));G(va);if(g.onRuntimeInitialized)g.onRuntimeInitialized();g._main&&Rb&&g.callMain(a);if(g.postRun)for("function"==typeof g.postRun&&(g.postRun=[g.postRun]);g.postRun.length;){var b=g.postRun.shift();xa.unshift(b)}G(xa)}}a=a||g.arguments;if(!(0<I)){if(g.preRun)for("function"==typeof g.preRun&&(g.preRun=[g.preRun]);g.preRun.length;)ya();G(ta);0<I||g.calledRun||(g.setStatus?(g.setStatus("Running..."),setTimeout(function(){setTimeout(function(){g.setStatus("")},
1);b()},1)):b())}}g.run=Qb;function w(a){if(g.onAbort)g.onAbort(a);void 0!==a?(fa(a),y(a),a=JSON.stringify(a)):a="";ma=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}g.abort=w;if(g.preInit)for("function"==typeof g.preInit&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();var Rb=!0;g.noInitialRun&&(Rb=!1);g.noExitRuntime=!0;Qb();
