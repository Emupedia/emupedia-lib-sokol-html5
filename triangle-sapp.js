
var e;e||(e=typeof Module !== 'undefined' ? Module : {});var h={},k;for(k in e)e.hasOwnProperty(k)&&(h[k]=e[k]);var r=[],aa="./this.program";function t(a,b){throw b;}var ba=!1,u=!1,ca=!1,da=!1;ba="object"===typeof window;u="function"===typeof importScripts;ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;da=!ba&&!ca&&!u;var w="",ea,x,fa,ha;
if(ca)w=u?require("path").dirname(w)+"/":__dirname+"/",ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);return fa.readFileSync(a,b?null:"utf8")},x=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",
ja),t=function(a){process.exit(a)},e.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),x=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ba||u)u?w=self.location.href:document.currentScript&&(w=document.currentScript.src),w=0!==w.indexOf("blob:")?w.substr(0,w.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(x=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ka=e.print||console.log.bind(console),y=e.printErr||console.warn.bind(console);for(k in h)h.hasOwnProperty(k)&&(e[k]=h[k]);h=null;e.arguments&&(r=e.arguments);e.thisProgram&&(aa=e.thisProgram);e.quit&&(t=e.quit);var z;e.wasmBinary&&(z=e.wasmBinary);var noExitRuntime;e.noExitRuntime&&(noExitRuntime=e.noExitRuntime);"object"!==typeof WebAssembly&&y("no native wasm support detected");var A,la=new WebAssembly.Table({initial:19,maximum:19,element:"anyfunc"}),ma=!1;
function assert(a,b){a||ja("Assertion failed: "+b)}function na(){var a=e.__sapp_emsc_onpaste;assert(a,"Cannot call unknown function _sapp_emsc_onpaste, make sure it is exported");return a}
function oa(a){var b=["string"],c={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var q=(n.length<<2)+1;p=B(q);C(n,D,p,q)}return p},array:function(n){var p=B(n.length);pa.set(n,p);return p}},d=na(),g=[],l=0;if(a)for(var f=0;f<a.length;f++){var m=c[b[f]];m?(0===l&&(l=qa()),g[f]=m(a[f])):g[f]=a[f]}d.apply(null,g);0!==l&&ra(l)}var sa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function E(a,b){if(a){var c=D,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&sa)a=sa.decode(c.subarray(a,b));else{for(d="";a<b;){var g=c[a++];if(g&128){var l=c[a++]&63;if(192==(g&224))d+=String.fromCharCode((g&31)<<6|l);else{var f=c[a++]&63;g=224==(g&240)?(g&15)<<12|l<<6|f:(g&7)<<18|l<<12|f<<6|c[a++]&63;65536>g?d+=String.fromCharCode(g):(g-=65536,d+=String.fromCharCode(55296|g>>10,56320|g&1023))}}else d+=String.fromCharCode(g)}a=d}}else a="";return a}
function C(a,b,c,d){if(!(0<d))return 0;var g=c;d=c+d-1;for(var l=0;l<a.length;++l){var f=a.charCodeAt(l);if(55296<=f&&57343>=f){var m=a.charCodeAt(++l);f=65536+((f&1023)<<10)|m&1023}if(127>=f){if(c>=d)break;b[c++]=f}else{if(2047>=f){if(c+1>=d)break;b[c++]=192|f>>6}else{if(65535>=f){if(c+2>=d)break;b[c++]=224|f>>12}else{if(c+3>=d)break;b[c++]=240|f>>18;b[c++]=128|f>>12&63}b[c++]=128|f>>6&63}b[c++]=128|f&63}}b[c]=0;return c-g}
function ta(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function ua(a){var b=ta(a)+1,c=B(b);C(a,pa,c,b);return c}var F,pa,D,va,G,H;
function wa(a){F=a;e.HEAP8=pa=new Int8Array(a);e.HEAP16=va=new Int16Array(a);e.HEAP32=G=new Int32Array(a);e.HEAPU8=D=new Uint8Array(a);e.HEAPU16=new Uint16Array(a);e.HEAPU32=new Uint32Array(a);e.HEAPF32=new Float32Array(a);e.HEAPF64=H=new Float64Array(a)}var xa=e.INITIAL_MEMORY||33554432;e.wasmMemory?A=e.wasmMemory:A=new WebAssembly.Memory({initial:xa/65536,maximum:32768});A&&(F=A.buffer);xa=F.byteLength;wa(F);G[6508]=5269072;
function ya(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.Pb;"number"===typeof c?void 0===b.Db?e.dynCall_v(c):e.dynCall_vi(c,b.Db):c(void 0===b.Db?null:b.Db)}}}var za=[],Aa=[],Ba=[],Ca=[],Da=[];function Ea(){var a=e.preRun.shift();za.unshift(a)}var I=0,Fa=null,J=null;e.preloadedImages={};e.preloadedAudios={};function ja(a){if(e.onAbort)e.onAbort(a);ka(a);y(a);ma=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}
function Ga(){var a=K;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var K="triangle-sapp.wasm";if(!Ga()){var Ha=K;K=e.locateFile?e.locateFile(Ha,w):w+Ha}function Ia(){try{if(z)return new Uint8Array(z);if(x)return x(K);throw"both async and sync fetching of the wasm failed";}catch(a){ja(a)}}
function Ja(){return z||!ba&&!u||"function"!==typeof fetch?new Promise(function(a){a(Ia())}):fetch(K,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+K+"'";return a.arrayBuffer()}).catch(function(){return Ia()})}Aa.push({Pb:function(){Ka()}});var La=0,Ma=0,L=0,Na=0,Oa=0,Pa=null,Qa=null,Ra=!1;function Sa(){for(var a=M.length-1;0<=a;--a)Ta(a);M=[];Ua=[]}var Ua=[];
function Va(){if(Wa&&Xa.Bb)for(var a=0;a<Ua.length;++a){var b=Ua[a];Ua.splice(a,1);--a;b.$b.apply(null,b.Tb)}}var Wa=0,Xa=null,M=[];function Ta(a){var b=M[a];b.target.removeEventListener(b.vb,b.Nb,b.wb);M.splice(a,1)}function N(a){function b(d){++Wa;Xa=a;Va();a.yb(d);Va();--Wa}if(a.xb)a.Nb=b,a.target.addEventListener(a.vb,b,a.wb),M.push(a),Ra||(Ca.push(Sa),Ra=!0);else for(var c=0;c<M.length;++c)M[c].target==a.target&&M[c].vb==a.vb&&Ta(c--)}function Ya(a){return a===a+0?E(a):a}
var Za=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function O(a){return Za[a]||("undefined"!==typeof document?document.querySelector(Ya(a)):void 0)}function $a(a){return 0>Za.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function ab(a,b,c,d,g,l){La||(La=P(164));a={target:O(a),Bb:!0,vb:l,xb:d,yb:function(f){f=f||event;var m=La;C(f.key?f.key:"",D,m+0,32);C(f.code?f.code:"",D,m+32,32);G[m+64>>2]=f.location;G[m+68>>2]=f.ctrlKey;G[m+72>>2]=f.shiftKey;G[m+76>>2]=f.altKey;G[m+80>>2]=f.metaKey;G[m+84>>2]=f.repeat;C(f.locale?f.locale:"",D,m+88,32);C(f.char?f.char:"",D,m+120,32);G[m+152>>2]=f.charCode;G[m+156>>2]=f.keyCode;G[m+160>>2]=f.which;Q(d,g,m,b)&&f.preventDefault()},wb:c};N(a)}
function bb(a,b,c){G[a>>2]=b.screenX;G[a+4>>2]=b.screenY;G[a+8>>2]=b.clientX;G[a+12>>2]=b.clientY;G[a+16>>2]=b.ctrlKey;G[a+20>>2]=b.shiftKey;G[a+24>>2]=b.altKey;G[a+28>>2]=b.metaKey;va[a+32>>1]=b.button;va[a+34>>1]=b.buttons;var d=b.movementY||b.screenY-Qa;G[a+36>>2]=b.movementX||b.screenX-Pa;G[a+40>>2]=d;c=$a(c);G[a+44>>2]=b.clientX-c.left;G[a+48>>2]=b.clientY-c.top;"wheel"!==b.type&&"mousewheel"!==b.type&&(Pa=b.screenX,Qa=b.screenY)}
function R(a,b,c,d,g,l){Ma||(Ma=P(64));a=O(a);N({target:a,Bb:"mousemove"!=l&&"mouseenter"!=l&&"mouseleave"!=l,vb:l,xb:d,yb:function(f){f=f||event;bb(Ma,f,a);Q(d,g,Ma,b)&&f.preventDefault()},wb:c})}
function cb(a,b,c,d){Na||(Na=P(36));a=O(a);N({target:a,vb:"resize",xb:d,yb:function(g){g=g||event;if(g.target==a){var l=Na,f=document.body;G[l>>2]=g.detail;G[l+4>>2]=f.clientWidth;G[l+8>>2]=f.clientHeight;G[l+12>>2]=innerWidth;G[l+16>>2]=innerHeight;G[l+20>>2]=outerWidth;G[l+24>>2]=outerHeight;G[l+28>>2]=pageXOffset;G[l+32>>2]=pageYOffset;Q(d,10,l,b)&&g.preventDefault()}},wb:c})}
function db(a,b,c,d,g,l){Oa||(Oa=P(1684));a=O(a);N({target:a,Bb:"touchstart"==l||"touchend"==l,vb:l,xb:d,yb:function(f){f=f||event;for(var m={},n=0;n<f.touches.length;++n){var p=f.touches[n];p.Fb=!1;m[p.identifier]=p}for(n=0;n<f.changedTouches.length;++n)p=f.changedTouches[n],m[p.identifier]=p,p.Fb=!0;for(n=0;n<f.targetTouches.length;++n)p=f.targetTouches[n],m[p.identifier].Rb=!0;var q=p=Oa;G[q+4>>2]=f.ctrlKey;G[q+8>>2]=f.shiftKey;G[q+12>>2]=f.altKey;G[q+16>>2]=f.metaKey;q+=20;var eb=$a(a),fb=0;for(n in m){var v=
m[n];G[q>>2]=v.identifier;G[q+4>>2]=v.screenX;G[q+8>>2]=v.screenY;G[q+12>>2]=v.clientX;G[q+16>>2]=v.clientY;G[q+20>>2]=v.pageX;G[q+24>>2]=v.pageY;G[q+28>>2]=v.Fb;G[q+32>>2]=v.Rb;G[q+36>>2]=v.clientX-eb.left;G[q+40>>2]=v.clientY-eb.top;q+=52;if(32<=++fb)break}G[p>>2]=fb;Q(d,g,p,b)&&f.preventDefault()},wb:c})}function gb(a,b,c,d,g,l){a={target:O(a),vb:l,xb:d,yb:function(f){f=f||event;Q(d,g,0,b)&&f.preventDefault()},wb:c};N(a)}
function hb(a,b,c,d,g){function l(m){m=m||event;bb(L,m,a);H[L+64>>3]=m.wheelDeltaX||0;H[L+72>>3]=-(m.wheelDeltaY||m.wheelDelta);H[L+80>>3]=0;G[L+88>>2]=0;Q(d,9,L,b)&&m.preventDefault()}function f(m){m=m||event;var n=L;bb(n,m,a);H[n+64>>3]=m.deltaX;H[n+72>>3]=m.deltaY;H[n+80>>3]=m.deltaZ;G[n+88>>2]=m.deltaMode;Q(d,9,n,b)&&m.preventDefault()}L||(L=P(96));N({target:a,Bb:!0,vb:g,xb:d,yb:"wheel"==g?f:l,wb:c})}
function ib(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,g,l){b.drawArraysInstancedANGLE(c,d,g,l)},a.drawElementsInstanced=function(c,d,g,l,f){b.drawElementsInstancedANGLE(c,d,g,l,f)})}
function jb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function kb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
var lb=1,mb=0,nb=[],S=[],ob=[],pb=[],qb=[],T=[],U=[],rb=[],sb=[],V=null,W={},tb={},ub={};function X(a){mb||(mb=a)}function Y(a){for(var b=lb++,c=a.length;c<b;c++)a[c]=null;return b}
function vb(a){a||(a=V);if(!a.Qb){a.Qb=!0;var b=a.Cb;2>a.version&&(ib(b),jb(b),kb(b));b.Vb=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod EXT_texture_norm16 WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2 WEBKIT_WEBGL_compressed_texture_pvrtc".split(" ");(b.getSupportedExtensions()||
[]).forEach(function(d){-1!=c.indexOf(d)&&b.getExtension(d)})}}var wb,xb,yb=["default","low-power","high-performance"],zb=[];function Ab(a,b,c,d){for(var g=0;g<a;g++){var l=Z[c](),f=l&&Y(d);l?(l.name=f,d[f]=l):X(1282);G[b+4*g>>2]=f}}
function Bb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>V.version){X(1282);return}c=2*(Z.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>V.version){X(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":X(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 35097:case 36389:case 34068:c=
0;break;default:X(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)G[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(g){X(1280);y("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+g+")");return}}break;default:X(1280);y("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}G[b>>2]=c}else X(1281)}
function Cb(a){var b=ta(a)+1,c=P(b);C(a,D,c,b);return c}for(var Z,Db=0;256>Db;Db++);for(Db=0;256>Db;Db++);for(var Eb=0;32>Eb;Eb++)zb.push(Array(Eb));
var Ib={U:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},da:function(a,b,c){a=O(a);if(!a)return-4;a=$a(a);H[b>>3]=a.width;H[c>>3]=a.height;return 0},ea:function(a,b,c){D.copyWithin(a,b,b+c)},Ha:function(a,b){function c(d){Fb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},fa:function(a){var b=D.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);a:{try{A.grow(Math.min(2147483648,
d)-F.byteLength+65535>>>16);wa(A.buffer);var g=1;break a}catch(l){}g=void 0}if(g)return!0}return!1},P:function(a,b,c){a=O(a);if(!a)return-4;a.width=b;a.height=c;return 0},Z:function(a,b,c,d){ab(a,b,c,d,2,"keydown");return 0},X:function(a,b,c,d){ab(a,b,c,d,1,"keypress");return 0},Y:function(a,b,c,d){ab(a,b,c,d,3,"keyup");return 0},u:function(a,b,c,d){R(a,b,c,d,5,"mousedown");return 0},aa:function(a,b,c,d){R(a,b,c,d,33,"mouseenter");return 0},$:function(a,b,c,d){R(a,b,c,d,34,"mouseleave");return 0},
ba:function(a,b,c,d){R(a,b,c,d,8,"mousemove");return 0},ca:function(a,b,c,d){R(a,b,c,d,6,"mouseup");return 0},Qa:function(a,b,c,d){cb(a,b,c,d);return 0},S:function(a,b,c,d){db(a,b,c,d,25,"touchcancel");return 0},T:function(a,b,c,d){db(a,b,c,d,23,"touchend");return 0},V:function(a,b,c,d){db(a,b,c,d,24,"touchmove");return 0},W:function(a,b,c,d){db(a,b,c,d,22,"touchstart");return 0},R:function(a,b,c,d){gb(a,b,c,d,31,"webglcontextlost");return 0},Q:function(a,b,c,d){gb(a,b,c,d,32,"webglcontextrestored");
return 0},_:function(a,b,c,d){a=O(a);return"undefined"!==typeof a.onwheel?(hb(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(hb(a,b,c,d,"mousewheel"),0):-1},C:function(a,b){var c={};b>>=2;c.alpha=!!G[b];c.depth=!!G[b+1];c.stencil=!!G[b+2];c.antialias=!!G[b+3];c.premultipliedAlpha=!!G[b+4];c.preserveDrawingBuffer=!!G[b+5];c.powerPreference=yb[G[b+6]];c.failIfMajorPerformanceCaveat=!!G[b+7];c.Jb=G[b+8];c.Xb=G[b+9];c.Ib=G[b+10];c.Ob=G[b+11];c.Yb=G[b+12];c.Zb=G[b+13];a=O(a);if(!a||c.Ob)c=0;
else if(a=1<c.Jb?a.getContext("webgl2",c):a.getContext("webgl",c)){b=Y(sb);var d={Wb:b,attributes:c,version:c.Jb,Cb:a};a.canvas&&(a.canvas.Sb=d);sb[b]=d;("undefined"===typeof c.Ib||c.Ib)&&vb(d);c=b}else c=0;return c},qa:function(a,b){a=sb[a];b=E(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b?ib(Z):"OES_vertex_array_object"==b?jb(Z):"WEBGL_draw_buffers"==b&&kb(Z);return!!a.Cb.getExtension(b)},Ea:function(a){a>>=2;for(var b=0;14>b;++b)G[a+b]=0;G[a]=G[a+1]=G[a+3]=G[a+4]=G[a+8]=G[a+
10]=1},xa:function(a){V=sb[a];e.Ub=Z=V&&V.Cb;return!a||Z?0:-5},l:function(a){Z.activeTexture(a)},D:function(a,b){Z.attachShader(S[a],U[b])},c:function(a,b){35051==a?Z.Gb=b:35052==a&&(Z.Hb=b);Z.bindBuffer(a,nb[b])},f:function(a,b){Z.bindFramebuffer(a,ob[b])},a:function(a,b){Z.bindTexture(a,qb[b])},O:function(a){Z.bindVertexArray(rb[a])},K:function(a,b,c,d){Z.blendColor(a,b,c,d)},L:function(a,b){Z.blendEquationSeparate(a,b)},M:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},h:function(a,b,c,d,g,l,f,
m,n,p){Z.blitFramebuffer(a,b,c,d,g,l,f,m,n,p)},F:function(a,b,c,d){2<=V.version?c?Z.bufferData(a,D,d,c,b):Z.bufferData(a,b,d):Z.bufferData(a,c?D.subarray(c,c+b):b,d)},E:function(a,b,c,d){2<=V.version?Z.bufferSubData(a,b,D,d,c):Z.bufferSubData(a,b,D.subarray(d,d+c))},ma:function(a){Z.clear(a)},pa:function(a,b,c,d){Z.clearColor(a,b,c,d)},oa:function(a){Z.clearDepth(a)},na:function(a){Z.clearStencil(a)},q:function(a,b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},ya:function(a){Z.compileShader(U[a])},Da:function(){var a=
Y(S),b=Z.createProgram();b.name=a;S[a]=b;return a},Aa:function(a){var b=Y(U);U[b]=Z.createShader(a);return b},H:function(a){Z.cullFace(a)},ua:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],g=nb[d];g&&(Z.deleteBuffer(g),g.name=0,nb[d]=null,d==wb&&(wb=0),d==xb&&(xb=0),d==Z.Gb&&(Z.Gb=0),d==Z.Hb&&(Z.Hb=0))}},g:function(a,b){for(var c=0;c<a;++c){var d=G[b+4*c>>2],g=ob[d];g&&(Z.deleteFramebuffer(g),g.name=0,ob[d]=null)}},A:function(a){if(a){var b=S[a];b?(Z.deleteProgram(b),b.name=0,S[a]=null,W[a]=
null):X(1281)}},y:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],g=pb[d];g&&(Z.deleteRenderbuffer(g),g.name=0,pb[d]=null)}},p:function(a){if(a){var b=U[a];b?(Z.deleteShader(b),U[a]=null):X(1281)}},ta:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],g=qb[d];g&&(Z.deleteTexture(g),g.name=0,qb[d]=null)}},Ja:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2];Z.deleteVertexArray(rb[d]);rb[d]=null}},t:function(a){Z.depthFunc(a)},s:function(a){Z.depthMask(!!a)},b:function(a){Z.disable(a)},N:function(a){Z.disableVertexAttribArray(a)},
ga:function(a,b,c){Z.drawArrays(a,b,c)},j:function(a,b){for(var c=zb[a],d=0;d<a;d++)c[d]=G[b+4*d>>2];Z.drawBuffers(c)},ha:function(a,b,c,d){Z.drawElements(a,b,c,d)},e:function(a){Z.enable(a)},ia:function(a){Z.enableVertexAttribArray(a)},I:function(a){Z.frontFace(a)},G:function(a,b){Ab(a,b,"createBuffer",nb)},Ia:function(a,b){Ab(a,b,"createVertexArray",rb)},va:function(a,b){return Z.getAttribLocation(S[a],E(b))},d:function(a,b){Bb(a,b)},Ba:function(a,b,c,d){a=Z.getProgramInfoLog(S[a]);null===a&&(a=
"(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(G[c>>2]=b)},B:function(a,b,c){if(c)if(a>=lb)X(1281);else{var d=W[a];if(d)if(35716==b)a=Z.getProgramInfoLog(S[a]),null===a&&(a="(unknown error)"),G[c>>2]=a.length+1;else if(35719==b)G[c>>2]=d.Eb;else if(35722==b){if(-1==d.zb){a=S[a];var g=Z.getProgramParameter(a,35721);for(b=d.zb=0;b<g;++b)d.zb=Math.max(d.zb,Z.getActiveAttrib(a,b).name.length+1)}G[c>>2]=d.zb}else if(35381==b){if(-1==d.Ab)for(a=S[a],g=Z.getProgramParameter(a,35382),b=d.Ab=0;b<g;++b)d.Ab=
Math.max(d.Ab,Z.getActiveUniformBlockName(a,b).length+1);G[c>>2]=d.Ab}else G[c>>2]=Z.getProgramParameter(S[a],b);else X(1282)}else X(1281)},wa:function(a,b,c,d){a=Z.getShaderInfoLog(U[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(G[c>>2]=b)},z:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(U[a]),null===a&&(a="(unknown error)"),G[c>>2]=a.length+1):35720==b?(a=Z.getShaderSource(U[a]),G[c>>2]=null===a||0==a.length?0:a.length+1):G[c>>2]=Z.getShaderParameter(U[a],b):X(1281)},La:function(a){if(tb[a])return tb[a];
switch(a){case 7939:var b=Z.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Cb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Z.getParameter(a))||X(1280);b=Cb(b);break;case 7938:b=Z.getParameter(7938);b=2<=V.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Cb(b);break;case 35724:b=Z.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=
Cb(b);break;default:return X(1280),0}return tb[a]=b},Ka:function(a,b){if(2>V.version)return X(1282),0;var c=ub[a];if(c)return 0>b||b>=c.length?(X(1281),0):c[b];switch(a){case 7939:return c=Z.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Cb(d)}),c=ub[a]=c,0>b||b>=c.length?(X(1281),0):c[b];default:return X(1280),0}},k:function(a,b){b=E(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,
d)}return(a=W[a]&&W[a].Mb[b])&&0<=c&&c<a[0]?a[1]+c:-1},Ca:function(a){Z.linkProgram(S[a]);var b=S[a];a=W[a]={Mb:{},Eb:0,zb:-1,Ab:-1};for(var c=a.Mb,d=Z.getProgramParameter(b,35718),g=0;g<d;++g){var l=Z.getActiveUniform(b,g),f=l.name;a.Eb=Math.max(a.Eb,f.length+1);"]"==f.slice(-1)&&(f=f.slice(0,f.lastIndexOf("[")));var m=Z.getUniformLocation(b,f);if(m){var n=Y(T);c[f]=[l.size,n];T[n]=m;for(var p=1;p<l.size;++p)m=Z.getUniformLocation(b,f+"["+p+"]"),n=Y(T),T[n]=m}}},J:function(a,b){Z.polygonOffset(a,
b)},i:function(a){Z.readBuffer(a)},ra:function(a,b,c,d){Z.scissor(a,b,c,d)},za:function(a,b,c,d){for(var g="",l=0;l<b;++l){var f=d?G[d+4*l>>2]:-1;g+=E(G[c+4*l>>2],0>f?void 0:f)}Z.shaderSource(U[a],g)},Ga:function(a,b,c){Z.stencilFunc(a,b,c)},x:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},r:function(a){Z.stencilMask(a)},Fa:function(a,b,c){Z.stencilOp(a,b,c)},w:function(a,b,c,d){Z.stencilOpSeparate(a,b,c,d)},v:function(a,b){Z.uniform1i(T[a],b)},la:function(a){Z.useProgram(S[a])},ja:function(a,
b){Z.vertexAttribDivisor(a,b)},ka:function(a,b,c,d,g,l){Z.vertexAttribPointer(a,b,c,!!d,g,l)},sa:function(a,b,c,d){Z.viewport(a,b,c,d)},memory:A,Pa:function(){e.Kb=function(a){0!=Gb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",e.Kb)},Oa:function(){e.Lb=function(a){a=a.clipboardData.getData("text");oa([a])};window.addEventListener("paste",e.Lb)},o:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";
a.addEventListener("focusout",function(){Hb()});document.body.append(a)},n:function(){document.getElementById("_sokol_app_input_element").focus()},m:function(){document.getElementById("_sokol_app_input_element").blur()},Na:function(){window.removeEventListener("beforeunload",e.Kb)},Ma:function(){window.removeEventListener("paste",e.Lb)},table:la},Jb=function(){function a(g){e.asm=g.exports;I--;e.monitorRunDependencies&&e.monitorRunDependencies(I);0==I&&(null!==Fa&&(clearInterval(Fa),Fa=null),J&&(g=
J,J=null,g()))}function b(g){a(g.instance)}function c(g){return Ja().then(function(l){return WebAssembly.instantiate(l,d)}).then(g,function(l){y("failed to asynchronously prepare wasm: "+l);ja(l)})}var d={a:Ib};I++;e.monitorRunDependencies&&e.monitorRunDependencies(I);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(g){return y("Module.instantiateWasm callback failed with error: "+g),!1}(function(){if(z||"function"!==typeof WebAssembly.instantiateStreaming||Ga()||"function"!==typeof fetch)return c(b);
fetch(K,{credentials:"same-origin"}).then(function(g){return WebAssembly.instantiateStreaming(g,d).then(b,function(l){y("wasm streaming compile failed: "+l);y("falling back to ArrayBuffer instantiation");c(b)})})})();return{}}();e.asm=Jb;var Ka=e.___wasm_call_ctors=function(){return(Ka=e.___wasm_call_ctors=e.asm.Ra).apply(null,arguments)},Hb=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Hb=e.__sapp_emsc_notify_keyboard_hidden=e.asm.Sa).apply(null,arguments)};
e.___em_js__sapp_js_create_textfield=function(){return(e.___em_js__sapp_js_create_textfield=e.asm.Ta).apply(null,arguments)};e.___em_js__sapp_js_focus_textfield=function(){return(e.___em_js__sapp_js_focus_textfield=e.asm.Ua).apply(null,arguments)};e.___em_js__sapp_js_unfocus_textfield=function(){return(e.___em_js__sapp_js_unfocus_textfield=e.asm.Va).apply(null,arguments)};e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.Wa).apply(null,arguments)};
var Gb=e.__sapp_html5_get_ask_leave_site=function(){return(Gb=e.__sapp_html5_get_ask_leave_site=e.asm.Xa).apply(null,arguments)};e.___em_js__sapp_add_js_hook_beforeunload=function(){return(e.___em_js__sapp_add_js_hook_beforeunload=e.asm.Ya).apply(null,arguments)};e.___em_js__sapp_remove_js_hook_beforeunload=function(){return(e.___em_js__sapp_remove_js_hook_beforeunload=e.asm.Za).apply(null,arguments)};
e.___em_js__sapp_add_js_hook_clipboard=function(){return(e.___em_js__sapp_add_js_hook_clipboard=e.asm._a).apply(null,arguments)};e.___em_js__sapp_remove_js_hook_clipboard=function(){return(e.___em_js__sapp_remove_js_hook_clipboard=e.asm.$a).apply(null,arguments)};e.___em_js__sapp_js_write_clipboard=function(){return(e.___em_js__sapp_js_write_clipboard=e.asm.ab).apply(null,arguments)};e._main=function(){return(e._main=e.asm.bb).apply(null,arguments)};
e.___em_js__stm_js_perfnow=function(){return(e.___em_js__stm_js_perfnow=e.asm.cb).apply(null,arguments)};e.__saudio_emsc_pull=function(){return(e.__saudio_emsc_pull=e.asm.db).apply(null,arguments)};e.___em_js__saudio_js_init=function(){return(e.___em_js__saudio_js_init=e.asm.eb).apply(null,arguments)};e.___em_js__saudio_js_sample_rate=function(){return(e.___em_js__saudio_js_sample_rate=e.asm.fb).apply(null,arguments)};
e.___em_js__saudio_js_buffer_frames=function(){return(e.___em_js__saudio_js_buffer_frames=e.asm.gb).apply(null,arguments)};e.___em_js__sfetch_js_send_head_request=function(){return(e.___em_js__sfetch_js_send_head_request=e.asm.hb).apply(null,arguments)};e.___em_js__sfetch_js_send_get_request=function(){return(e.___em_js__sfetch_js_send_get_request=e.asm.ib).apply(null,arguments)};e.__sfetch_emsc_head_response=function(){return(e.__sfetch_emsc_head_response=e.asm.jb).apply(null,arguments)};
e.__sfetch_emsc_get_response=function(){return(e.__sfetch_emsc_get_response=e.asm.kb).apply(null,arguments)};e.__sfetch_emsc_failed_http_status=function(){return(e.__sfetch_emsc_failed_http_status=e.asm.lb).apply(null,arguments)};e.__sfetch_emsc_failed_buffer_too_small=function(){return(e.__sfetch_emsc_failed_buffer_too_small=e.asm.mb).apply(null,arguments)};
var P=e._malloc=function(){return(P=e._malloc=e.asm.nb).apply(null,arguments)},qa=e.stackSave=function(){return(qa=e.stackSave=e.asm.ob).apply(null,arguments)},B=e.stackAlloc=function(){return(B=e.stackAlloc=e.asm.pb).apply(null,arguments)},ra=e.stackRestore=function(){return(ra=e.stackRestore=e.asm.qb).apply(null,arguments)};e.dynCall_vi=function(){return(e.dynCall_vi=e.asm.rb).apply(null,arguments)};e.dynCall_v=function(){return(e.dynCall_v=e.asm.sb).apply(null,arguments)};
var Q=e.dynCall_iiii=function(){return(Q=e.dynCall_iiii=e.asm.tb).apply(null,arguments)},Fb=e.dynCall_idi=function(){return(Fb=e.dynCall_idi=e.asm.ub).apply(null,arguments)};e.asm=Jb;var Kb;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}J=function Lb(){Kb||Mb();Kb||(J=Lb)};
function Mb(a){function b(){if(!Kb&&(Kb=!0,e.calledRun=!0,!ma)){ya(Aa);ya(Ba);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Nb){var c=a,d=e._main;c=c||[];var g=c.length+1,l=B(4*(g+1));G[l>>2]=ua(aa);for(var f=1;f<g;f++)G[(l>>2)+f]=ua(c[f-1]);G[(l>>2)+g]=0;try{var m=d(g,l);if(!noExitRuntime||0!==m){if(!noExitRuntime&&(ma=!0,e.onExit))e.onExit(m);t(m,new ia(m))}}catch(n){n instanceof ia||("unwind"==n?noExitRuntime=!0:((c=n)&&"object"===typeof n&&n.stack&&(c=[n,n.stack]),y("exception thrown: "+
c),t(1,n)))}finally{}}if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)c=e.postRun.shift(),Da.unshift(c);ya(Da)}}a=a||r;if(!(0<I)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ea();ya(za);0<I||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Mb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();
var Nb=!0;e.noInitialRun&&(Nb=!1);noExitRuntime=!0;Mb();
