
var e;e||(e=typeof Module !== 'undefined' ? Module : {});var k={},m;for(m in e)e.hasOwnProperty(m)&&(k[m]=e[m]);var r=[],aa="./this.program";function t(a,b){throw b;}var ba=!1,u=!1,ca=!1,ea=!1;ba="object"===typeof window;u="function"===typeof importScripts;ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;ea=!ba&&!ca&&!u;var v="",fa,w,ha,ia;
if(ca)v=u?require("path").dirname(v)+"/":__dirname+"/",fa=function(a,b){ha||(ha=require("fs"));ia||(ia=require("path"));a=ia.normalize(a);return ha.readFileSync(a,b?null:"utf8")},w=function(a){a=fa(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof ja))throw a;}),process.on("unhandledRejection",
x),t=function(a){process.exit(a)},e.inspect=function(){return"[Emscripten Module object]"};else if(ea)"undefined"!=typeof read&&(fa=function(a){return read(a)}),w=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ba||u)u?v=self.location.href:document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",fa=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(w=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ka=e.print||console.log.bind(console),z=e.printErr||console.warn.bind(console);for(m in k)k.hasOwnProperty(m)&&(e[m]=k[m]);k=null;e.arguments&&(r=e.arguments);e.thisProgram&&(aa=e.thisProgram);e.quit&&(t=e.quit);var A;e.wasmBinary&&(A=e.wasmBinary);var noExitRuntime;e.noExitRuntime&&(noExitRuntime=e.noExitRuntime);"object"!==typeof WebAssembly&&z("no native wasm support detected");var B,la=new WebAssembly.Table({initial:95,maximum:95,element:"anyfunc"}),ma=!1;
function assert(a,b){a||x("Assertion failed: "+b)}function na(){var a=e.__sapp_emsc_onpaste;assert(a,"Cannot call unknown function _sapp_emsc_onpaste, make sure it is exported");return a}
function oa(a){var b=["string"],c={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var q=(n.length<<2)+1;p=C(q);D(n,E,p,q)}return p},array:function(n){var p=C(n.length);pa.set(n,p);return p}},d=na(),f=[],h=0;if(a)for(var g=0;g<a.length;g++){var l=c[b[g]];l?(0===h&&(h=qa()),f[g]=l(a[g])):f[g]=a[g]}d.apply(null,f);0!==h&&ra(h)}var sa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ta(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&sa)return sa.decode(a.subarray(b,c));for(d="";b<c;){var f=a[b++];if(f&128){var h=a[b++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|h);else{var g=a[b++]&63;f=224==(f&240)?(f&15)<<12|h<<6|g:(f&7)<<18|h<<12|g<<6|a[b++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}return d}function F(a,b){return a?ta(E,a,b):""}
function D(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var l=a.charCodeAt(++h);g=65536+((g&1023)<<10)|l&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-f}
function ua(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function va(a){var b=ua(a)+1,c=C(b);D(a,pa,c,b);return c}var wa,pa,E,xa,ya,G,za,H,I;
function Aa(a){wa=a;e.HEAP8=pa=new Int8Array(a);e.HEAP16=xa=new Int16Array(a);e.HEAP32=G=new Int32Array(a);e.HEAPU8=E=new Uint8Array(a);e.HEAPU16=ya=new Uint16Array(a);e.HEAPU32=za=new Uint32Array(a);e.HEAPF32=H=new Float32Array(a);e.HEAPF64=I=new Float64Array(a)}var Ba=e.INITIAL_MEMORY||33554432;e.wasmMemory?B=e.wasmMemory:B=new WebAssembly.Memory({initial:Ba/65536,maximum:32768});B&&(wa=B.buffer);Ba=wa.byteLength;Aa(wa);G[1114916]=9702704;
function Ca(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.qc;"number"===typeof c?void 0===b.ec?e.dynCall_v(c):e.dynCall_vi(c,b.ec):c(void 0===b.ec?null:b.ec)}}}var Da=[],Ea=[],Fa=[],Ga=[],Ha=[];function Ia(){var a=e.preRun.shift();Da.unshift(a)}var J=0,Ja=null,Ka=null;e.preloadedImages={};e.preloadedAudios={};function x(a){if(e.onAbort)e.onAbort(a);ka(a);z(a);ma=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}
function La(){var a=K;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var K="fontstash-sapp-ui.wasm";if(!La()){var Ma=K;K=e.locateFile?e.locateFile(Ma,v):v+Ma}function Na(){try{if(A)return new Uint8Array(A);if(w)return w(K);throw"both async and sync fetching of the wasm failed";}catch(a){x(a)}}
function Oa(){return A||!ba&&!u||"function"!==typeof fetch?new Promise(function(a){a(Na())}):fetch(K,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+K+"'";return a.arrayBuffer()}).catch(function(){return Na()})}Ea.push({qc:function(){Pa()}});var Qa=0,Ra=0,L=0,Sa=0,Ta=0,Ua=null,Va=null,Wa=!1;function Xa(){for(var a=M.length-1;0<=a;--a)Ya(a);M=[];Za=[]}var Za=[];
function $a(){if(ab&&bb.cc)for(var a=0;a<Za.length;++a){var b=Za[a];Za.splice(a,1);--a;b.Bc.apply(null,b.uc)}}var ab=0,bb=null,M=[];function Ya(a){var b=M[a];b.target.removeEventListener(b.Wb,b.oc,b.Yb);M.splice(a,1)}function N(a){function b(d){++ab;bb=a;$a();a.$b(d);$a();--ab}if(a.Zb)a.oc=b,a.target.addEventListener(a.Wb,b,a.Yb),M.push(a),Wa||(Ga.push(Xa),Wa=!0);else for(var c=0;c<M.length;++c)M[c].target==a.target&&M[c].Wb==a.Wb&&Ya(c--)}function cb(a){return a===a+0?F(a):a}
var db=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function O(a){return db[a]||("undefined"!==typeof document?document.querySelector(cb(a)):void 0)}function eb(a){return 0>db.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function fb(a,b,c,d,f,h){Qa||(Qa=P(164));a={target:O(a),cc:!0,Wb:h,Zb:d,$b:function(g){g=g||event;var l=Qa;D(g.key?g.key:"",E,l+0,32);D(g.code?g.code:"",E,l+32,32);G[l+64>>2]=g.location;G[l+68>>2]=g.ctrlKey;G[l+72>>2]=g.shiftKey;G[l+76>>2]=g.altKey;G[l+80>>2]=g.metaKey;G[l+84>>2]=g.repeat;D(g.locale?g.locale:"",E,l+88,32);D(g.char?g.char:"",E,l+120,32);G[l+152>>2]=g.charCode;G[l+156>>2]=g.keyCode;G[l+160>>2]=g.which;Q(d,f,l,b)&&g.preventDefault()},Yb:c};N(a)}
function gb(a,b,c){G[a>>2]=b.screenX;G[a+4>>2]=b.screenY;G[a+8>>2]=b.clientX;G[a+12>>2]=b.clientY;G[a+16>>2]=b.ctrlKey;G[a+20>>2]=b.shiftKey;G[a+24>>2]=b.altKey;G[a+28>>2]=b.metaKey;xa[a+32>>1]=b.button;xa[a+34>>1]=b.buttons;var d=b.movementY||b.screenY-Va;G[a+36>>2]=b.movementX||b.screenX-Ua;G[a+40>>2]=d;c=eb(c);G[a+44>>2]=b.clientX-c.left;G[a+48>>2]=b.clientY-c.top;"wheel"!==b.type&&"mousewheel"!==b.type&&(Ua=b.screenX,Va=b.screenY)}
function hb(a,b,c,d,f,h){Ra||(Ra=P(64));a=O(a);N({target:a,cc:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Wb:h,Zb:d,$b:function(g){g=g||event;gb(Ra,g,a);Q(d,f,Ra,b)&&g.preventDefault()},Yb:c})}
function ib(a,b,c,d){Sa||(Sa=P(36));a=O(a);N({target:a,Wb:"resize",Zb:d,$b:function(f){f=f||event;if(f.target==a){var h=Sa,g=document.body;G[h>>2]=f.detail;G[h+4>>2]=g.clientWidth;G[h+8>>2]=g.clientHeight;G[h+12>>2]=innerWidth;G[h+16>>2]=innerHeight;G[h+20>>2]=outerWidth;G[h+24>>2]=outerHeight;G[h+28>>2]=pageXOffset;G[h+32>>2]=pageYOffset;Q(d,10,h,b)&&f.preventDefault()}},Yb:c})}
function jb(a,b,c,d,f,h){Ta||(Ta=P(1684));a=O(a);N({target:a,cc:"touchstart"==h||"touchend"==h,Wb:h,Zb:d,$b:function(g){g=g||event;for(var l={},n=0;n<g.touches.length;++n){var p=g.touches[n];p.hc=!1;l[p.identifier]=p}for(n=0;n<g.changedTouches.length;++n)p=g.changedTouches[n],l[p.identifier]=p,p.hc=!0;for(n=0;n<g.targetTouches.length;++n)p=g.targetTouches[n],l[p.identifier].sc=!0;var q=p=Ta;G[q+4>>2]=g.ctrlKey;G[q+8>>2]=g.shiftKey;G[q+12>>2]=g.altKey;G[q+16>>2]=g.metaKey;q+=20;var da=eb(a),qb=0;for(n in l){var y=
l[n];G[q>>2]=y.identifier;G[q+4>>2]=y.screenX;G[q+8>>2]=y.screenY;G[q+12>>2]=y.clientX;G[q+16>>2]=y.clientY;G[q+20>>2]=y.pageX;G[q+24>>2]=y.pageY;G[q+28>>2]=y.hc;G[q+32>>2]=y.sc;G[q+36>>2]=y.clientX-da.left;G[q+40>>2]=y.clientY-da.top;q+=52;if(32<=++qb)break}G[p>>2]=qb;Q(d,f,p,b)&&g.preventDefault()},Yb:c})}function kb(a,b,c,d,f,h){a={target:O(a),Wb:h,Zb:d,$b:function(g){g=g||event;Q(d,f,0,b)&&g.preventDefault()},Yb:c};N(a)}
function lb(a,b,c,d,f){function h(l){l=l||event;gb(L,l,a);I[L+64>>3]=l.wheelDeltaX||0;I[L+72>>3]=-(l.wheelDeltaY||l.wheelDelta);I[L+80>>3]=0;G[L+88>>2]=0;Q(d,9,L,b)&&l.preventDefault()}function g(l){l=l||event;var n=L;gb(n,l,a);I[n+64>>3]=l.deltaX;I[n+72>>3]=l.deltaY;I[n+80>>3]=l.deltaZ;G[n+88>>2]=l.deltaMode;Q(d,9,n,b)&&l.preventDefault()}L||(L=P(96));N({target:a,cc:!0,Wb:f,Zb:d,$b:"wheel"==f?g:h,Yb:c})}
function mb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,h){b.drawArraysInstancedANGLE(c,d,f,h)},a.drawElementsInstanced=function(c,d,f,h,g){b.drawElementsInstancedANGLE(c,d,f,h,g)})}
function nb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function ob(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
var pb=1,rb=0,sb=[],R=[],tb=[],ub=[],vb=[],S=[],T=[],wb=[],xb=[],U=null,yb={},zb={},Ab={};function V(a){rb||(rb=a)}function W(a){for(var b=pb++,c=a.length;c<b;c++)a[c]=null;return b}var X=[0];
function Bb(a){a||(a=U);if(!a.rc){a.rc=!0;var b=a.dc;2>a.version&&(mb(b),nb(b),ob(b));b.wc=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod EXT_texture_norm16 WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2 WEBKIT_WEBGL_compressed_texture_pvrtc".split(" ");(b.getSupportedExtensions()||
[]).forEach(function(d){-1!=c.indexOf(d)&&b.getExtension(d)})}}var Cb,Db,Eb=["default","low-power","high-performance"],Fb=[null,[],[]],Gb=[];function Hb(a,b,c,d){for(var f=0;f<a;f++){var h=Y[c](),g=h&&W(d);h?(h.name=g,d[g]=h):V(1282);G[b+4*f>>2]=g}}
function Ib(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>U.version){V(1282);return}c=2*(Y.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>U.version){V(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":V(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 35097:case 36389:case 34068:c=
0;break;default:V(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)G[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){V(1280);z("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:V(1280);z("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}G[b>>2]=c}else V(1281)}
function Jb(a){var b=ua(a)+1,c=P(b);D(a,E,c,b);return c}function Kb(a){a-=5120;return 0==a?pa:1==a?E:2==a?xa:4==a?G:6==a?H:5==a||28922==a||28520==a||30779==a||30782==a?za:ya}function Lb(a){return 31-Math.clz32(a.BYTES_PER_ELEMENT)}function Mb(a,b,c,d,f){a=Kb(a);var h=Lb(a);return a.subarray(f>>h,f+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}for(var Y,Nb=new Float32Array(256),Z=0;256>Z;Z++)X[Z]=Nb.subarray(0,Z+1);for(Z=0;256>Z;Z++);
for(var Ob=0;32>Ob;Ob++)Gb.push(Array(Ob));
var Wb={db:function(){x()},X:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},qa:function(a,b,c){a=O(a);if(!a)return-4;a=eb(a);I[b>>3]=a.width;I[c>>3]=a.height;return 0},ab:function(a,b,c){E.copyWithin(a,b,b+c)},Oa:function(a,b){function c(d){Pb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},bb:function(a){var b=E.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-
d%65536);a:{try{B.grow(Math.min(2147483648,d)-wa.byteLength+65535>>>16);Aa(B.buffer);var f=1;break a}catch(h){}f=void 0}if(f)return!0}return!1},U:function(a,b,c){a=O(a);if(!a)return-4;a.width=b;a.height=c;return 0},ea:function(a,b,c,d){fb(a,b,c,d,2,"keydown");return 0},ca:function(a,b,c,d){fb(a,b,c,d,1,"keypress");return 0},da:function(a,b,c,d){fb(a,b,c,d,3,"keyup");return 0},pa:function(a,b,c,d){hb(a,b,c,d,5,"mousedown");return 0},ha:function(a,b,c,d){hb(a,b,c,d,33,"mouseenter");return 0},ga:function(a,
b,c,d){hb(a,b,c,d,34,"mouseleave");return 0},ia:function(a,b,c,d){hb(a,b,c,d,8,"mousemove");return 0},na:function(a,b,c,d){hb(a,b,c,d,6,"mouseup");return 0},_a:function(a,b,c,d){ib(a,b,c,d);return 0},_:function(a,b,c,d){jb(a,b,c,d,25,"touchcancel");return 0},$:function(a,b,c,d){jb(a,b,c,d,23,"touchend");return 0},aa:function(a,b,c,d){jb(a,b,c,d,24,"touchmove");return 0},ba:function(a,b,c,d){jb(a,b,c,d,22,"touchstart");return 0},Z:function(a,b,c,d){kb(a,b,c,d,31,"webglcontextlost");return 0},Y:function(a,
b,c,d){kb(a,b,c,d,32,"webglcontextrestored");return 0},fa:function(a,b,c,d){a=O(a);return"undefined"!==typeof a.onwheel?(lb(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(lb(a,b,c,d,"mousewheel"),0):-1},H:function(a,b){var c={};b>>=2;c.alpha=!!G[b];c.depth=!!G[b+1];c.stencil=!!G[b+2];c.antialias=!!G[b+3];c.premultipliedAlpha=!!G[b+4];c.preserveDrawingBuffer=!!G[b+5];c.powerPreference=Eb[G[b+6]];c.failIfMajorPerformanceCaveat=!!G[b+7];c.kc=G[b+8];c.yc=G[b+9];c.jc=G[b+10];c.pc=G[b+11];c.zc=
G[b+12];c.Ac=G[b+13];a=O(a);if(!a||c.pc)c=0;else if(a=1<c.kc?a.getContext("webgl2",c):a.getContext("webgl",c)){b=W(xb);var d={xc:b,attributes:c,version:c.kc,dc:a};a.canvas&&(a.canvas.tc=d);xb[b]=d;("undefined"===typeof c.jc||c.jc)&&Bb(d);c=b}else c=0;return c},xa:function(a,b){a=xb[a];b=F(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b?mb(Y):"OES_vertex_array_object"==b?nb(Y):"WEBGL_draw_buffers"==b&&ob(Y);return!!a.dc.getExtension(b)},Na:function(a){a>>=2;for(var b=0;14>b;++b)G[a+
b]=0;G[a]=G[a+1]=G[a+3]=G[a+4]=G[a+8]=G[a+10]=1},Ca:function(a){U=xb[a];e.vc=Y=U&&U.dc;return!a||Y?0:-5},cb:function(){return 0},$a:function(){},ja:function(a,b,c,d){for(var f=0,h=0;h<c;h++){for(var g=G[b+8*h>>2],l=G[b+(8*h+4)>>2],n=0;n<l;n++){var p=E[g+n],q=Fb[a];0===p||10===p?((1===a?ka:z)(ta(q,0)),q.length=0):q.push(p)}f+=l}G[d>>2]=f;return 0},f:function(a){Y.activeTexture(a)},G:function(a,b){Y.attachShader(R[a],T[b])},b:function(a,b){35051==a?Y.ic=b:35052==a&&(Y.Xb=b);Y.bindBuffer(a,sb[b])},h:function(a,
b){Y.bindFramebuffer(a,tb[b])},K:function(a,b){Y.bindRenderbuffer(a,ub[b])},a:function(a,b){Y.bindTexture(a,vb[b])},W:function(a){Y.bindVertexArray(wb[a])},R:function(a,b,c,d){Y.blendColor(a,b,c,d)},S:function(a,b){Y.blendEquationSeparate(a,b)},T:function(a,b,c,d){Y.blendFuncSeparate(a,b,c,d)},t:function(a,b,c,d,f,h,g,l,n,p){Y.blitFramebuffer(a,b,c,d,f,h,g,l,n,p)},M:function(a,b,c,d){2<=U.version?c?Y.bufferData(a,E,d,c,b):Y.bufferData(a,b,d):Y.bufferData(a,c?E.subarray(c,c+b):b,d)},j:function(a,b,
c,d){2<=U.version?Y.bufferSubData(a,b,E,d,c):Y.bufferSubData(a,b,E.subarray(d,d+c))},ta:function(a){Y.clear(a)},wa:function(a,b,c,d){Y.clearColor(a,b,c,d)},va:function(a){Y.clearDepth(a)},ua:function(a){Y.clearStencil(a)},w:function(a,b,c,d){Y.colorMask(!!a,!!b,!!c,!!d)},Aa:function(a){Y.compileShader(T[a])},Ka:function(a,b,c,d,f,h,g,l){2<=U.version?Y.Xb?Y.compressedTexImage2D(a,b,c,d,f,h,g,l):Y.compressedTexImage2D(a,b,c,d,f,h,E,l,g):Y.compressedTexImage2D(a,b,c,d,f,h,l?E.subarray(l,l+g):null)},
Ia:function(a,b,c,d,f,h,g,l,n){Y.Xb?Y.compressedTexImage3D(a,b,c,d,f,h,g,l,n):Y.compressedTexImage3D(a,b,c,d,f,h,g,E,n,l)},Ga:function(){var a=W(R),b=Y.createProgram();b.name=a;R[a]=b;return a},Da:function(a){var b=W(T);T[b]=Y.createShader(a);return b},O:function(a){Y.cullFace(a)},D:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],f=sb[d];f&&(Y.deleteBuffer(f),f.name=0,sb[d]=null,d==Cb&&(Cb=0),d==Db&&(Db=0),d==Y.ic&&(Y.ic=0),d==Y.Xb&&(Y.Xb=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=G[b+
4*c>>2],f=tb[d];f&&(Y.deleteFramebuffer(f),f.name=0,tb[d]=null)}},m:function(a){if(a){var b=R[a];b?(Y.deleteProgram(b),b.name=0,R[a]=null,yb[a]=null):V(1281)}},o:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],f=ub[d];f&&(Y.deleteRenderbuffer(f),f.name=0,ub[d]=null)}},v:function(a){if(a){var b=T[a];b?(Y.deleteShader(b),T[a]=null):V(1281)}},C:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],f=vb[d];f&&(Y.deleteTexture(f),f.name=0,vb[d]=null)}},Sa:function(a,b){for(var c=0;c<a;c++){var d=G[b+
4*c>>2];Y.deleteVertexArray(wb[d]);wb[d]=null}},z:function(a){Y.depthFunc(a)},y:function(a){Y.depthMask(!!a)},c:function(a){Y.disable(a)},V:function(a){Y.disableVertexAttribArray(a)},fb:function(a,b,c){Y.drawArrays(a,b,c)},n:function(a,b){for(var c=Gb[a],d=0;d<a;d++)c[d]=G[b+4*d>>2];Y.drawBuffers(c)},gb:function(a,b,c,d){Y.drawElements(a,b,c,d)},g:function(a){Y.enable(a)},mb:function(a){Y.enableVertexAttribArray(a)},P:function(a){Y.frontFace(a)},N:function(a,b){Hb(a,b,"createBuffer",sb)},L:function(a,
b){Hb(a,b,"createRenderbuffer",ub)},La:function(a,b){Hb(a,b,"createTexture",vb)},Ra:function(a,b){Hb(a,b,"createVertexArray",wb)},ya:function(a,b){return Y.getAttribLocation(R[a],F(b))},d:function(a,b){Ib(a,b)},Ea:function(a,b,c,d){a=Y.getProgramInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(G[c>>2]=b)},F:function(a,b,c){if(c)if(a>=pb)V(1281);else{var d=yb[a];if(d)if(35716==b)a=Y.getProgramInfoLog(R[a]),null===a&&(a="(unknown error)"),G[c>>2]=a.length+1;else if(35719==b)G[c>>
2]=d.fc;else if(35722==b){if(-1==d.ac){a=R[a];var f=Y.getProgramParameter(a,35721);for(b=d.ac=0;b<f;++b)d.ac=Math.max(d.ac,Y.getActiveAttrib(a,b).name.length+1)}G[c>>2]=d.ac}else if(35381==b){if(-1==d.bc)for(a=R[a],f=Y.getProgramParameter(a,35382),b=d.bc=0;b<f;++b)d.bc=Math.max(d.bc,Y.getActiveUniformBlockName(a,b).length+1);G[c>>2]=d.bc}else G[c>>2]=Y.getProgramParameter(R[a],b);else V(1282)}else V(1281)},za:function(a,b,c,d){a=Y.getShaderInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,
E,d,b):0;c&&(G[c>>2]=b)},E:function(a,b,c){c?35716==b?(a=Y.getShaderInfoLog(T[a]),null===a&&(a="(unknown error)"),G[c>>2]=a.length+1):35720==b?(a=Y.getShaderSource(T[a]),G[c>>2]=null===a||0==a.length?0:a.length+1):G[c>>2]=Y.getShaderParameter(T[a],b):V(1281)},Ua:function(a){if(zb[a])return zb[a];switch(a){case 7939:var b=Y.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Jb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Y.getParameter(a))||V(1280);b=Jb(b);
break;case 7938:b=Y.getParameter(7938);b=2<=U.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Jb(b);break;case 35724:b=Y.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Jb(b);break;default:return V(1280),0}return zb[a]=b},Ta:function(a,b){if(2>U.version)return V(1282),0;var c=Ab[a];if(c)return 0>b||b>=c.length?(V(1281),0):c[b];switch(a){case 7939:return c=Y.getSupportedExtensions()||
[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Jb(d)}),c=Ab[a]=c,0>b||b>=c.length?(V(1281),0):c[b];default:return V(1280),0}},p:function(a,b){b=F(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=yb[a]&&yb[a].nc[b])&&0<=c&&c<a[0]?a[1]+c:-1},Fa:function(a){Y.linkProgram(R[a]);var b=R[a];a=yb[a]={nc:{},fc:0,ac:-1,bc:-1};for(var c=a.nc,d=Y.getProgramParameter(b,35718),f=0;f<d;++f){var h=Y.getActiveUniform(b,
f),g=h.name;a.fc=Math.max(a.fc,g.length+1);"]"==g.slice(-1)&&(g=g.slice(0,g.lastIndexOf("[")));var l=Y.getUniformLocation(b,g);if(l){var n=W(S);c[g]=[h.size,n];S[n]=l;for(var p=1;p<h.size;++p)l=Y.getUniformLocation(b,g+"["+p+"]"),n=W(S),S[n]=l}}},Q:function(a,b){Y.polygonOffset(a,b)},u:function(a){Y.readBuffer(a)},Ma:function(a,b,c,d){Y.renderbufferStorage(a,b,c,d)},J:function(a,b,c,d,f){Y.renderbufferStorageMultisample(a,b,c,d,f)},k:function(a,b,c,d){Y.scissor(a,b,c,d)},Ba:function(a,b,c,d){for(var f=
"",h=0;h<b;++h){var g=d?G[d+4*h>>2]:-1;f+=F(G[c+4*h>>2],0>g?void 0:g)}Y.shaderSource(T[a],f)},Qa:function(a,b,c){Y.stencilFunc(a,b,c)},B:function(a,b,c,d){Y.stencilFuncSeparate(a,b,c,d)},x:function(a){Y.stencilMask(a)},Pa:function(a,b,c){Y.stencilOp(a,b,c)},A:function(a,b,c,d){Y.stencilOpSeparate(a,b,c,d)},Ja:function(a,b,c,d,f,h,g,l,n){if(2<=U.version)if(Y.Xb)Y.texImage2D(a,b,c,d,f,h,g,l,n);else if(n){var p=Kb(l);Y.texImage2D(a,b,c,d,f,h,g,l,p,n>>Lb(p))}else Y.texImage2D(a,b,c,d,f,h,g,l,null);else Y.texImage2D(a,
b,c,d,f,h,g,l,n?Mb(l,g,d,f,n):null)},Ha:function(a,b,c,d,f,h,g,l,n,p){if(Y.Xb)Y.texImage3D(a,b,c,d,f,h,g,l,n,p);else if(p){var q=Kb(n);Y.texImage3D(a,b,c,d,f,h,g,l,n,q,p>>Lb(q))}else Y.texImage3D(a,b,c,d,f,h,g,l,n,null)},I:function(a,b,c){Y.texParameterf(a,b,c)},e:function(a,b,c){Y.texParameteri(a,b,c)},ma:function(a,b,c,d,f,h,g,l,n){if(2<=U.version)if(Y.Xb)Y.texSubImage2D(a,b,c,d,f,h,g,l,n);else if(n){var p=Kb(l);Y.texSubImage2D(a,b,c,d,f,h,g,l,p,n>>Lb(p))}else Y.texSubImage2D(a,b,c,d,f,h,g,l,null);
else p=null,n&&(p=Mb(l,g,f,h,n)),Y.texSubImage2D(a,b,c,d,f,h,g,l,p)},la:function(a,b,c,d,f,h,g,l,n,p,q){if(Y.Xb)Y.texSubImage3D(a,b,c,d,f,h,g,l,n,p,q);else if(q){var da=Kb(p);Y.texSubImage3D(a,b,c,d,f,h,g,l,n,p,da,q>>Lb(da))}else Y.texSubImage3D(a,b,c,d,f,h,g,l,n,p,null)},lb:function(a,b,c){if(2<=U.version)Y.uniform1fv(S[a],H,c>>2,b);else{if(256>=b)for(var d=X[b-1],f=0;f<b;++f)d[f]=H[c+4*f>>2];else d=H.subarray(c>>2,c+4*b>>2);Y.uniform1fv(S[a],d)}},oa:function(a,b){Y.uniform1i(S[a],b)},kb:function(a,
b,c){if(2<=U.version)Y.uniform2fv(S[a],H,c>>2,2*b);else{if(256>=2*b)for(var d=X[2*b-1],f=0;f<2*b;f+=2)d[f]=H[c+4*f>>2],d[f+1]=H[c+(4*f+4)>>2];else d=H.subarray(c>>2,c+8*b>>2);Y.uniform2fv(S[a],d)}},jb:function(a,b,c){if(2<=U.version)Y.uniform3fv(S[a],H,c>>2,3*b);else{if(256>=3*b)for(var d=X[3*b-1],f=0;f<3*b;f+=3)d[f]=H[c+4*f>>2],d[f+1]=H[c+(4*f+4)>>2],d[f+2]=H[c+(4*f+8)>>2];else d=H.subarray(c>>2,c+12*b>>2);Y.uniform3fv(S[a],d)}},ib:function(a,b,c){if(2<=U.version)Y.uniform4fv(S[a],H,c>>2,4*b);else{if(256>=
4*b){var d=X[4*b-1],f=H;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=f[g];d[h+1]=f[g+1];d[h+2]=f[g+2];d[h+3]=f[g+3]}}else d=H.subarray(c>>2,c+16*b>>2);Y.uniform4fv(S[a],d)}},hb:function(a,b,c,d){if(2<=U.version)Y.uniformMatrix4fv(S[a],!!c,H,d>>2,16*b);else{if(256>=16*b){var f=X[16*b-1],h=H;d>>=2;for(var g=0;g<16*b;g+=16){var l=d+g;f[g]=h[l];f[g+1]=h[l+1];f[g+2]=h[l+2];f[g+3]=h[l+3];f[g+4]=h[l+4];f[g+5]=h[l+5];f[g+6]=h[l+6];f[g+7]=h[l+7];f[g+8]=h[l+8];f[g+9]=h[l+9];f[g+10]=h[l+10];f[g+11]=h[l+11];
f[g+12]=h[l+12];f[g+13]=h[l+13];f[g+14]=h[l+14];f[g+15]=h[l+15]}}else f=H.subarray(d>>2,d+64*b>>2);Y.uniformMatrix4fv(S[a],!!c,f)}},sa:function(a){Y.useProgram(R[a])},nb:function(a,b){Y.vertexAttribDivisor(a,b)},ob:function(a,b,c,d,f,h){Y.vertexAttribPointer(a,b,c,!!d,f,h)},l:function(a,b,c,d){Y.viewport(a,b,c,d)},memory:B,Za:function(){e.lc=function(a){0!=Qb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",e.lc)},Ya:function(){e.mc=function(a){a=a.clipboardData.getData("text");
oa([a])};window.addEventListener("paste",e.mc)},s:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Rb()});document.body.append(a)},r:function(){document.getElementById("_sokol_app_input_element").focus()},q:function(){document.getElementById("_sokol_app_input_element").blur()},Va:function(a){a=F(a);var b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect",
"off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},Xa:function(){window.removeEventListener("beforeunload",e.lc)},Wa:function(){window.removeEventListener("paste",e.mc)},ra:function(a,b,c,d,f,h){b=F(b);var g=new XMLHttpRequest;g.open("GET",b);g.responseType="arraybuffer";var l=0<d;l&&
g.setRequestHeader("Range","bytes="+c+"-"+(c+d));g.onreadystatechange=function(){if(this.readyState==this.DONE)if(206==this.status||200==this.status&&!l){var n=new Uint8Array(g.response),p=n.length;p<=h?(E.set(n,f),Sb(a,d,p)):Tb(a)}else Ub(a,this.status)};g.send()},eb:function(a,b){b=F(b);var c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(this.readyState==this.DONE)if(200==this.status){var d=this.getResponseHeader("Content-Length");Vb(a,d)}else Ub(a,this.status)};c.send()},
ka:function(){return navigator.userAgent.includes("Macintosh")?1:0},table:la},Xb=function(){function a(f){e.asm=f.exports;J--;e.monitorRunDependencies&&e.monitorRunDependencies(J);0==J&&(null!==Ja&&(clearInterval(Ja),Ja=null),Ka&&(f=Ka,Ka=null,f()))}function b(f){a(f.instance)}function c(f){return Oa().then(function(h){return WebAssembly.instantiate(h,d)}).then(f,function(h){z("failed to asynchronously prepare wasm: "+h);x(h)})}var d={a:Wb};J++;e.monitorRunDependencies&&e.monitorRunDependencies(J);
if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return z("Module.instantiateWasm callback failed with error: "+f),!1}(function(){if(A||"function"!==typeof WebAssembly.instantiateStreaming||La()||"function"!==typeof fetch)return c(b);fetch(K,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(h){z("wasm streaming compile failed: "+h);z("falling back to ArrayBuffer instantiation");c(b)})})})();return{}}();e.asm=Xb;
var Pa=e.___wasm_call_ctors=function(){return(Pa=e.___wasm_call_ctors=e.asm.pb).apply(null,arguments)},P=e._malloc=function(){return(P=e._malloc=e.asm.qb).apply(null,arguments)},Rb=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Rb=e.__sapp_emsc_notify_keyboard_hidden=e.asm.rb).apply(null,arguments)};e.___em_js__sapp_js_create_textfield=function(){return(e.___em_js__sapp_js_create_textfield=e.asm.sb).apply(null,arguments)};
e.___em_js__sapp_js_focus_textfield=function(){return(e.___em_js__sapp_js_focus_textfield=e.asm.tb).apply(null,arguments)};e.___em_js__sapp_js_unfocus_textfield=function(){return(e.___em_js__sapp_js_unfocus_textfield=e.asm.ub).apply(null,arguments)};e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.vb).apply(null,arguments)};var Qb=e.__sapp_html5_get_ask_leave_site=function(){return(Qb=e.__sapp_html5_get_ask_leave_site=e.asm.wb).apply(null,arguments)};
e.___em_js__sapp_add_js_hook_beforeunload=function(){return(e.___em_js__sapp_add_js_hook_beforeunload=e.asm.xb).apply(null,arguments)};e.___em_js__sapp_remove_js_hook_beforeunload=function(){return(e.___em_js__sapp_remove_js_hook_beforeunload=e.asm.yb).apply(null,arguments)};e.___em_js__sapp_add_js_hook_clipboard=function(){return(e.___em_js__sapp_add_js_hook_clipboard=e.asm.zb).apply(null,arguments)};
e.___em_js__sapp_remove_js_hook_clipboard=function(){return(e.___em_js__sapp_remove_js_hook_clipboard=e.asm.Ab).apply(null,arguments)};e.___em_js__sapp_js_write_clipboard=function(){return(e.___em_js__sapp_js_write_clipboard=e.asm.Bb).apply(null,arguments)};e._main=function(){return(e._main=e.asm.Cb).apply(null,arguments)};e.___em_js__stm_js_perfnow=function(){return(e.___em_js__stm_js_perfnow=e.asm.Db).apply(null,arguments)};
e.__saudio_emsc_pull=function(){return(e.__saudio_emsc_pull=e.asm.Eb).apply(null,arguments)};e.___em_js__saudio_js_init=function(){return(e.___em_js__saudio_js_init=e.asm.Fb).apply(null,arguments)};e.___em_js__saudio_js_sample_rate=function(){return(e.___em_js__saudio_js_sample_rate=e.asm.Gb).apply(null,arguments)};e.___em_js__saudio_js_buffer_frames=function(){return(e.___em_js__saudio_js_buffer_frames=e.asm.Hb).apply(null,arguments)};
e.___em_js__sfetch_js_send_head_request=function(){return(e.___em_js__sfetch_js_send_head_request=e.asm.Ib).apply(null,arguments)};e.___em_js__sfetch_js_send_get_request=function(){return(e.___em_js__sfetch_js_send_get_request=e.asm.Jb).apply(null,arguments)};
var Vb=e.__sfetch_emsc_head_response=function(){return(Vb=e.__sfetch_emsc_head_response=e.asm.Kb).apply(null,arguments)},Sb=e.__sfetch_emsc_get_response=function(){return(Sb=e.__sfetch_emsc_get_response=e.asm.Lb).apply(null,arguments)},Ub=e.__sfetch_emsc_failed_http_status=function(){return(Ub=e.__sfetch_emsc_failed_http_status=e.asm.Mb).apply(null,arguments)},Tb=e.__sfetch_emsc_failed_buffer_too_small=function(){return(Tb=e.__sfetch_emsc_failed_buffer_too_small=e.asm.Nb).apply(null,arguments)};
e.___em_js__simgui_js_is_osx=function(){return(e.___em_js__simgui_js_is_osx=e.asm.Ob).apply(null,arguments)};var qa=e.stackSave=function(){return(qa=e.stackSave=e.asm.Pb).apply(null,arguments)},C=e.stackAlloc=function(){return(C=e.stackAlloc=e.asm.Qb).apply(null,arguments)},ra=e.stackRestore=function(){return(ra=e.stackRestore=e.asm.Rb).apply(null,arguments)};e.dynCall_vi=function(){return(e.dynCall_vi=e.asm.Sb).apply(null,arguments)};
var Q=e.dynCall_iiii=function(){return(Q=e.dynCall_iiii=e.asm.Tb).apply(null,arguments)};e.dynCall_v=function(){return(e.dynCall_v=e.asm.Ub).apply(null,arguments)};var Pb=e.dynCall_idi=function(){return(Pb=e.dynCall_idi=e.asm.Vb).apply(null,arguments)};e.asm=Xb;var Yb;function ja(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}Ka=function Zb(){Yb||$b();Yb||(Ka=Zb)};
function $b(a){function b(){if(!Yb&&(Yb=!0,e.calledRun=!0,!ma)){Ca(Ea);Ca(Fa);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(ac){var c=a,d=e._main;c=c||[];var f=c.length+1,h=C(4*(f+1));G[h>>2]=va(aa);for(var g=1;g<f;g++)G[(h>>2)+g]=va(c[g-1]);G[(h>>2)+f]=0;try{var l=d(f,h);if(!noExitRuntime||0!==l){if(!noExitRuntime&&(ma=!0,e.onExit))e.onExit(l);t(l,new ja(l))}}catch(n){n instanceof ja||("unwind"==n?noExitRuntime=!0:((c=n)&&"object"===typeof n&&n.stack&&(c=[n,n.stack]),z("exception thrown: "+
c),t(1,n)))}finally{}}if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)c=e.postRun.shift(),Ha.unshift(c);Ca(Ha)}}a=a||r;if(!(0<J)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ia();Ca(Da);0<J||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=$b;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();
var ac=!0;e.noInitialRun&&(ac=!1);noExitRuntime=!0;$b();
