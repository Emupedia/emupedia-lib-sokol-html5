
var e;e||(e=typeof Module !== 'undefined' ? Module : {});var h={},l;for(l in e)e.hasOwnProperty(l)&&(h[l]=e[l]);var r=[],aa="./this.program";function t(a,b){throw b;}var ba=!1,u=!1,ca=!1,da=!1;ba="object"===typeof window;u="function"===typeof importScripts;ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;da=!ba&&!ca&&!u;var v="",ea,w,fa,ha;
if(ca)v=u?require("path").dirname(v)+"/":__dirname+"/",ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);return fa.readFileSync(a,b?null:"utf8")},w=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",
ja),t=function(a){process.exit(a)},e.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),w=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ba||u)u?v=self.location.href:document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(w=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ka=e.print||console.log.bind(console),x=e.printErr||console.warn.bind(console);for(l in h)h.hasOwnProperty(l)&&(e[l]=h[l]);h=null;e.arguments&&(r=e.arguments);e.thisProgram&&(aa=e.thisProgram);e.quit&&(t=e.quit);var z;e.wasmBinary&&(z=e.wasmBinary);var noExitRuntime;e.noExitRuntime&&(noExitRuntime=e.noExitRuntime);"object"!==typeof WebAssembly&&x("no native wasm support detected");var A,la=new WebAssembly.Table({initial:19,maximum:19,element:"anyfunc"}),ma=!1;
function assert(a,b){a||ja("Assertion failed: "+b)}function na(){var a=e.__sapp_emsc_onpaste;assert(a,"Cannot call unknown function _sapp_emsc_onpaste, make sure it is exported");return a}
function oa(a){var b=["string"],c={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var q=(n.length<<2)+1;p=B(q);C(n,D,p,q)}return p},array:function(n){var p=B(n.length);pa.set(n,p);return p}},d=na(),f=[],k=0;if(a)for(var g=0;g<a.length;g++){var m=c[b[g]];m?(0===k&&(k=qa()),f[g]=m(a[g])):f[g]=a[g]}d.apply(null,f);0!==k&&ra(k)}var sa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function E(a,b){if(a){var c=D,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&sa)a=sa.decode(c.subarray(a,b));else{for(d="";a<b;){var f=c[a++];if(f&128){var k=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|k);else{var g=c[a++]&63;f=224==(f&240)?(f&15)<<12|k<<6|g:(f&7)<<18|k<<12|g<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}a=d}}else a="";return a}
function C(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var k=0;k<a.length;++k){var g=a.charCodeAt(k);if(55296<=g&&57343>=g){var m=a.charCodeAt(++k);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-f}
function ta(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function ua(a){var b=ta(a)+1,c=B(b);C(a,pa,c,b);return c}var F,pa,D,va,wa,G,xa,H,I;
function ya(a){F=a;e.HEAP8=pa=new Int8Array(a);e.HEAP16=va=new Int16Array(a);e.HEAP32=G=new Int32Array(a);e.HEAPU8=D=new Uint8Array(a);e.HEAPU16=wa=new Uint16Array(a);e.HEAPU32=xa=new Uint32Array(a);e.HEAPF32=H=new Float32Array(a);e.HEAPF64=I=new Float64Array(a)}var za=e.INITIAL_MEMORY||33554432;e.wasmMemory?A=e.wasmMemory:A=new WebAssembly.Memory({initial:za/65536,maximum:32768});A&&(F=A.buffer);za=F.byteLength;ya(F);G[94680]=5621760;
function Aa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.ec;"number"===typeof c?void 0===b.Ub?e.dynCall_v(c):e.dynCall_vi(c,b.Ub):c(void 0===b.Ub?null:b.Ub)}}}var Ba=[],Ca=[],Da=[],Ea=[],Fa=[];function Ga(){var a=e.preRun.shift();Ba.unshift(a)}var J=0,Ha=null,Ia=null;e.preloadedImages={};e.preloadedAudios={};function ja(a){if(e.onAbort)e.onAbort(a);ka(a);x(a);ma=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}
function Ja(){var a=K;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var K="mipmap-sapp.wasm";if(!Ja()){var Ka=K;K=e.locateFile?e.locateFile(Ka,v):v+Ka}function La(){try{if(z)return new Uint8Array(z);if(w)return w(K);throw"both async and sync fetching of the wasm failed";}catch(a){ja(a)}}
function Ma(){return z||!ba&&!u||"function"!==typeof fetch?new Promise(function(a){a(La())}):fetch(K,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+K+"'";return a.arrayBuffer()}).catch(function(){return La()})}Ca.push({ec:function(){Na()}});var Oa=0,Pa=0,L=0,Qa=0,Ra=0,Sa=null,Ta=null,Ua=!1;function Va(){for(var a=M.length-1;0<=a;--a)Wa(a);M=[];Xa=[]}var Xa=[];
function Ya(){if(Za&&$a.Sb)for(var a=0;a<Xa.length;++a){var b=Xa[a];Xa.splice(a,1);--a;b.qc.apply(null,b.jc)}}var Za=0,$a=null,M=[];function Wa(a){var b=M[a];b.target.removeEventListener(b.Lb,b.cc,b.Mb);M.splice(a,1)}function N(a){function b(d){++Za;$a=a;Ya();a.Pb(d);Ya();--Za}if(a.Nb)a.cc=b,a.target.addEventListener(a.Lb,b,a.Mb),M.push(a),Ua||(Ea.push(Va),Ua=!0);else for(var c=0;c<M.length;++c)M[c].target==a.target&&M[c].Lb==a.Lb&&Wa(c--)}function ab(a){return a===a+0?E(a):a}
var bb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function O(a){return bb[a]||("undefined"!==typeof document?document.querySelector(ab(a)):void 0)}function cb(a){return 0>bb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function db(a,b,c,d,f,k){Oa||(Oa=P(164));a={target:O(a),Sb:!0,Lb:k,Nb:d,Pb:function(g){g=g||event;var m=Oa;C(g.key?g.key:"",D,m+0,32);C(g.code?g.code:"",D,m+32,32);G[m+64>>2]=g.location;G[m+68>>2]=g.ctrlKey;G[m+72>>2]=g.shiftKey;G[m+76>>2]=g.altKey;G[m+80>>2]=g.metaKey;G[m+84>>2]=g.repeat;C(g.locale?g.locale:"",D,m+88,32);C(g.char?g.char:"",D,m+120,32);G[m+152>>2]=g.charCode;G[m+156>>2]=g.keyCode;G[m+160>>2]=g.which;Q(d,f,m,b)&&g.preventDefault()},Mb:c};N(a)}
function eb(a,b,c){G[a>>2]=b.screenX;G[a+4>>2]=b.screenY;G[a+8>>2]=b.clientX;G[a+12>>2]=b.clientY;G[a+16>>2]=b.ctrlKey;G[a+20>>2]=b.shiftKey;G[a+24>>2]=b.altKey;G[a+28>>2]=b.metaKey;va[a+32>>1]=b.button;va[a+34>>1]=b.buttons;var d=b.movementY||b.screenY-Ta;G[a+36>>2]=b.movementX||b.screenX-Sa;G[a+40>>2]=d;c=cb(c);G[a+44>>2]=b.clientX-c.left;G[a+48>>2]=b.clientY-c.top;"wheel"!==b.type&&"mousewheel"!==b.type&&(Sa=b.screenX,Ta=b.screenY)}
function fb(a,b,c,d,f,k){Pa||(Pa=P(64));a=O(a);N({target:a,Sb:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,Lb:k,Nb:d,Pb:function(g){g=g||event;eb(Pa,g,a);Q(d,f,Pa,b)&&g.preventDefault()},Mb:c})}
function gb(a,b,c,d){Qa||(Qa=P(36));a=O(a);N({target:a,Lb:"resize",Nb:d,Pb:function(f){f=f||event;if(f.target==a){var k=Qa,g=document.body;G[k>>2]=f.detail;G[k+4>>2]=g.clientWidth;G[k+8>>2]=g.clientHeight;G[k+12>>2]=innerWidth;G[k+16>>2]=innerHeight;G[k+20>>2]=outerWidth;G[k+24>>2]=outerHeight;G[k+28>>2]=pageXOffset;G[k+32>>2]=pageYOffset;Q(d,10,k,b)&&f.preventDefault()}},Mb:c})}
function hb(a,b,c,d,f,k){Ra||(Ra=P(1684));a=O(a);N({target:a,Sb:"touchstart"==k||"touchend"==k,Lb:k,Nb:d,Pb:function(g){g=g||event;for(var m={},n=0;n<g.touches.length;++n){var p=g.touches[n];p.Wb=!1;m[p.identifier]=p}for(n=0;n<g.changedTouches.length;++n)p=g.changedTouches[n],m[p.identifier]=p,p.Wb=!0;for(n=0;n<g.targetTouches.length;++n)p=g.targetTouches[n],m[p.identifier].hc=!0;var q=p=Ra;G[q+4>>2]=g.ctrlKey;G[q+8>>2]=g.shiftKey;G[q+12>>2]=g.altKey;G[q+16>>2]=g.metaKey;q+=20;var lb=cb(a),mb=0;for(n in m){var y=
m[n];G[q>>2]=y.identifier;G[q+4>>2]=y.screenX;G[q+8>>2]=y.screenY;G[q+12>>2]=y.clientX;G[q+16>>2]=y.clientY;G[q+20>>2]=y.pageX;G[q+24>>2]=y.pageY;G[q+28>>2]=y.Wb;G[q+32>>2]=y.hc;G[q+36>>2]=y.clientX-lb.left;G[q+40>>2]=y.clientY-lb.top;q+=52;if(32<=++mb)break}G[p>>2]=mb;Q(d,f,p,b)&&g.preventDefault()},Mb:c})}function ib(a,b,c,d,f,k){a={target:O(a),Lb:k,Nb:d,Pb:function(g){g=g||event;Q(d,f,0,b)&&g.preventDefault()},Mb:c};N(a)}
function jb(a,b,c,d,f){function k(m){m=m||event;eb(L,m,a);I[L+64>>3]=m.wheelDeltaX||0;I[L+72>>3]=-(m.wheelDeltaY||m.wheelDelta);I[L+80>>3]=0;G[L+88>>2]=0;Q(d,9,L,b)&&m.preventDefault()}function g(m){m=m||event;var n=L;eb(n,m,a);I[n+64>>3]=m.deltaX;I[n+72>>3]=m.deltaY;I[n+80>>3]=m.deltaZ;G[n+88>>2]=m.deltaMode;Q(d,9,n,b)&&m.preventDefault()}L||(L=P(96));N({target:a,Sb:!0,Lb:f,Nb:d,Pb:"wheel"==f?g:k,Mb:c})}
function kb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,k){b.drawArraysInstancedANGLE(c,d,f,k)},a.drawElementsInstanced=function(c,d,f,k,g){b.drawElementsInstancedANGLE(c,d,f,k,g)})}
function nb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function ob(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
var pb=1,qb=0,rb=[],R=[],sb=[],tb=[],ub=[],S=[],T=[],vb=[],wb=[],U=null,xb={},yb={},zb={};function V(a){qb||(qb=a)}function W(a){for(var b=pb++,c=a.length;c<b;c++)a[c]=null;return b}var X=[0];
function Ab(a){a||(a=U);if(!a.fc){a.fc=!0;var b=a.Tb;2>a.version&&(kb(b),nb(b),ob(b));b.lc=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod EXT_texture_norm16 WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2 WEBKIT_WEBGL_compressed_texture_pvrtc".split(" ");(b.getSupportedExtensions()||
[]).forEach(function(d){-1!=c.indexOf(d)&&b.getExtension(d)})}}var Bb,Cb,Db=["default","low-power","high-performance"],Eb=[];function Fb(a,b,c,d){for(var f=0;f<a;f++){var k=Y[c](),g=k&&W(d);k?(k.name=g,d[g]=k):V(1282);G[b+4*f>>2]=g}}
function Gb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>U.version){V(1282);return}c=2*(Y.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>U.version){V(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":V(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 35097:case 36389:case 34068:c=
0;break;default:V(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)G[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){V(1280);x("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:V(1280);x("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}G[b>>2]=c}else V(1281)}
function Hb(a){var b=ta(a)+1,c=P(b);C(a,D,c,b);return c}function Ib(a){a-=5120;return 0==a?pa:1==a?D:2==a?va:4==a?G:6==a?H:5==a||28922==a||28520==a||30779==a||30782==a?xa:wa}function Jb(a,b,c,d,f){a=Ib(a);var k=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(f>>k,f+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<k)+4-1&-4)>>k)}for(var Y,Kb=new Float32Array(256),Z=0;256>Z;Z++)X[Z]=Kb.subarray(0,Z+1);for(Z=0;256>Z;Z++);for(var Lb=0;32>Lb;Lb++)Eb.push(Array(Lb));
var Pb={Z:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},ia:function(a,b,c){a=O(a);if(!a)return-4;a=cb(a);I[b>>3]=a.width;I[c>>3]=a.height;return 0},Va:function(a,b,c){D.copyWithin(a,b,b+c)},Ma:function(a,b){function c(d){Mb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Wa:function(a){var b=D.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);a:{try{A.grow(Math.min(2147483648,
d)-F.byteLength+65535>>>16);ya(A.buffer);var f=1;break a}catch(k){}f=void 0}if(f)return!0}return!1},U:function(a,b,c){a=O(a);if(!a)return-4;a.width=b;a.height=c;return 0},ca:function(a,b,c,d){db(a,b,c,d,2,"keydown");return 0},aa:function(a,b,c,d){db(a,b,c,d,1,"keypress");return 0},ba:function(a,b,c,d){db(a,b,c,d,3,"keyup");return 0},y:function(a,b,c,d){fb(a,b,c,d,5,"mousedown");return 0},fa:function(a,b,c,d){fb(a,b,c,d,33,"mouseenter");return 0},ea:function(a,b,c,d){fb(a,b,c,d,34,"mouseleave");return 0},
ga:function(a,b,c,d){fb(a,b,c,d,8,"mousemove");return 0},ha:function(a,b,c,d){fb(a,b,c,d,6,"mouseup");return 0},eb:function(a,b,c,d){gb(a,b,c,d);return 0},X:function(a,b,c,d){hb(a,b,c,d,25,"touchcancel");return 0},Y:function(a,b,c,d){hb(a,b,c,d,23,"touchend");return 0},_:function(a,b,c,d){hb(a,b,c,d,24,"touchmove");return 0},$:function(a,b,c,d){hb(a,b,c,d,22,"touchstart");return 0},W:function(a,b,c,d){ib(a,b,c,d,31,"webglcontextlost");return 0},V:function(a,b,c,d){ib(a,b,c,d,32,"webglcontextrestored");
return 0},da:function(a,b,c,d){a=O(a);return"undefined"!==typeof a.onwheel?(jb(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(jb(a,b,c,d,"mousewheel"),0):-1},G:function(a,b){var c={};b>>=2;c.alpha=!!G[b];c.depth=!!G[b+1];c.stencil=!!G[b+2];c.antialias=!!G[b+3];c.premultipliedAlpha=!!G[b+4];c.preserveDrawingBuffer=!!G[b+5];c.powerPreference=Db[G[b+6]];c.failIfMajorPerformanceCaveat=!!G[b+7];c.Zb=G[b+8];c.nc=G[b+9];c.Yb=G[b+10];c.dc=G[b+11];c.oc=G[b+12];c.pc=G[b+13];a=O(a);if(!a||c.dc)c=0;
else if(a=1<c.Zb?a.getContext("webgl2",c):a.getContext("webgl",c)){b=W(wb);var d={mc:b,attributes:c,version:c.Zb,Tb:a};a.canvas&&(a.canvas.ic=d);wb[b]=d;("undefined"===typeof c.Yb||c.Yb)&&Ab(d);c=b}else c=0;return c},va:function(a,b){a=wb[a];b=E(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b?kb(Y):"OES_vertex_array_object"==b?nb(Y):"WEBGL_draw_buffers"==b&&ob(Y);return!!a.Tb.getExtension(b)},Ja:function(a){a>>=2;for(var b=0;14>b;++b)G[a+b]=0;G[a]=G[a+1]=G[a+3]=G[a+4]=G[a+8]=G[a+
10]=1},Ba:function(a){U=wb[a];e.kc=Y=U&&U.Tb;return!a||Y?0:-5},i:function(a){Y.activeTexture(a)},D:function(a,b){Y.attachShader(R[a],T[b])},c:function(a,b){35051==a?Y.Xb=b:35052==a&&(Y.Ob=b);Y.bindBuffer(a,rb[b])},g:function(a,b){Y.bindFramebuffer(a,sb[b])},H:function(a,b){Y.bindRenderbuffer(a,tb[b])},a:function(a,b){Y.bindTexture(a,ub[b])},T:function(a){Y.bindVertexArray(vb[a])},P:function(a,b,c,d){Y.blendColor(a,b,c,d)},Q:function(a,b){Y.blendEquationSeparate(a,b)},R:function(a,b,c,d){Y.blendFuncSeparate(a,
b,c,d)},o:function(a,b,c,d,f,k,g,m,n,p){Y.blitFramebuffer(a,b,c,d,f,k,g,m,n,p)},K:function(a,b,c,d){2<=U.version?c?Y.bufferData(a,D,d,c,b):Y.bufferData(a,b,d):Y.bufferData(a,c?D.subarray(c,c+b):b,d)},J:function(a,b,c,d){2<=U.version?Y.bufferSubData(a,b,D,d,c):Y.bufferSubData(a,b,D.subarray(d,d+c))},la:function(a){Y.clear(a)},oa:function(a,b,c,d){Y.clearColor(a,b,c,d)},na:function(a){Y.clearDepth(a)},ma:function(a){Y.clearStencil(a)},r:function(a,b,c,d){Y.colorMask(!!a,!!b,!!c,!!d)},wa:function(a){Y.compileShader(T[a])},
Ga:function(a,b,c,d,f,k,g,m){2<=U.version?Y.Ob?Y.compressedTexImage2D(a,b,c,d,f,k,g,m):Y.compressedTexImage2D(a,b,c,d,f,k,D,m,g):Y.compressedTexImage2D(a,b,c,d,f,k,m?D.subarray(m,m+g):null)},Ea:function(a,b,c,d,f,k,g,m,n){Y.Ob?Y.compressedTexImage3D(a,b,c,d,f,k,g,m,n):Y.compressedTexImage3D(a,b,c,d,f,k,g,D,n,m)},Ca:function(){var a=W(R),b=Y.createProgram();b.name=a;R[a]=b;return a},ya:function(a){var b=W(T);T[b]=Y.createShader(a);return b},M:function(a){Y.cullFace(a)},sa:function(a,b){for(var c=0;c<
a;c++){var d=G[b+4*c>>2],f=rb[d];f&&(Y.deleteBuffer(f),f.name=0,rb[d]=null,d==Bb&&(Bb=0),d==Cb&&(Cb=0),d==Y.Xb&&(Y.Xb=0),d==Y.Ob&&(Y.Ob=0))}},h:function(a,b){for(var c=0;c<a;++c){var d=G[b+4*c>>2],f=sb[d];f&&(Y.deleteFramebuffer(f),f.name=0,sb[d]=null)}},B:function(a){if(a){var b=R[a];b?(Y.deleteProgram(b),b.name=0,R[a]=null,xb[a]=null):V(1281)}},z:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],f=tb[d];f&&(Y.deleteRenderbuffer(f),f.name=0,tb[d]=null)}},q:function(a){if(a){var b=T[a];b?(Y.deleteShader(b),
T[a]=null):V(1281)}},ra:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],f=ub[d];f&&(Y.deleteTexture(f),f.name=0,ub[d]=null)}},Oa:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2];Y.deleteVertexArray(vb[d]);vb[d]=null}},u:function(a){Y.depthFunc(a)},t:function(a){Y.depthMask(!!a)},b:function(a){Y.disable(a)},S:function(a){Y.disableVertexAttribArray(a)},Xa:function(a,b,c){Y.drawArrays(a,b,c)},j:function(a,b){for(var c=Eb[a],d=0;d<a;d++)c[d]=G[b+4*d>>2];Y.drawBuffers(c)},Ya:function(a,b,c,d){Y.drawElements(a,
b,c,d)},f:function(a){Y.enable(a)},cb:function(a){Y.enableVertexAttribArray(a)},N:function(a){Y.frontFace(a)},L:function(a,b){Fb(a,b,"createBuffer",rb)},I:function(a,b){Fb(a,b,"createRenderbuffer",tb)},Ha:function(a,b){Fb(a,b,"createTexture",ub)},Na:function(a,b){Fb(a,b,"createVertexArray",vb)},ta:function(a,b){return Y.getAttribLocation(R[a],E(b))},d:function(a,b){Gb(a,b)},za:function(a,b,c,d){a=Y.getProgramInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(G[c>>2]=b)},C:function(a,
b,c){if(c)if(a>=pb)V(1281);else{var d=xb[a];if(d)if(35716==b)a=Y.getProgramInfoLog(R[a]),null===a&&(a="(unknown error)"),G[c>>2]=a.length+1;else if(35719==b)G[c>>2]=d.Vb;else if(35722==b){if(-1==d.Qb){a=R[a];var f=Y.getProgramParameter(a,35721);for(b=d.Qb=0;b<f;++b)d.Qb=Math.max(d.Qb,Y.getActiveAttrib(a,b).name.length+1)}G[c>>2]=d.Qb}else if(35381==b){if(-1==d.Rb)for(a=R[a],f=Y.getProgramParameter(a,35382),b=d.Rb=0;b<f;++b)d.Rb=Math.max(d.Rb,Y.getActiveUniformBlockName(a,b).length+1);G[c>>2]=d.Rb}else G[c>>
2]=Y.getProgramParameter(R[a],b);else V(1282)}else V(1281)},ua:function(a,b,c,d){a=Y.getShaderInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(G[c>>2]=b)},A:function(a,b,c){c?35716==b?(a=Y.getShaderInfoLog(T[a]),null===a&&(a="(unknown error)"),G[c>>2]=a.length+1):35720==b?(a=Y.getShaderSource(T[a]),G[c>>2]=null===a||0==a.length?0:a.length+1):G[c>>2]=Y.getShaderParameter(T[a],b):V(1281)},Qa:function(a){if(yb[a])return yb[a];switch(a){case 7939:var b=Y.getSupportedExtensions()||
[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Hb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Y.getParameter(a))||V(1280);b=Hb(b);break;case 7938:b=Y.getParameter(7938);b=2<=U.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Hb(b);break;case 35724:b=Y.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Hb(b);break;default:return V(1280),0}return yb[a]=b},
Pa:function(a,b){if(2>U.version)return V(1282),0;var c=zb[a];if(c)return 0>b||b>=c.length?(V(1281),0):c[b];switch(a){case 7939:return c=Y.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Hb(d)}),c=zb[a]=c,0>b||b>=c.length?(V(1281),0):c[b];default:return V(1280),0}},k:function(a,b){b=E(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=xb[a]&&xb[a].bc[b])&&0<=c&&c<a[0]?a[1]+c:
-1},Aa:function(a){Y.linkProgram(R[a]);var b=R[a];a=xb[a]={bc:{},Vb:0,Qb:-1,Rb:-1};for(var c=a.bc,d=Y.getProgramParameter(b,35718),f=0;f<d;++f){var k=Y.getActiveUniform(b,f),g=k.name;a.Vb=Math.max(a.Vb,g.length+1);"]"==g.slice(-1)&&(g=g.slice(0,g.lastIndexOf("[")));var m=Y.getUniformLocation(b,g);if(m){var n=W(S);c[g]=[k.size,n];S[n]=m;for(var p=1;p<k.size;++p)m=Y.getUniformLocation(b,g+"["+p+"]"),n=W(S),S[n]=m}}},O:function(a,b){Y.polygonOffset(a,b)},p:function(a){Y.readBuffer(a)},Ia:function(a,
b,c,d){Y.renderbufferStorage(a,b,c,d)},F:function(a,b,c,d,f){Y.renderbufferStorageMultisample(a,b,c,d,f)},pa:function(a,b,c,d){Y.scissor(a,b,c,d)},xa:function(a,b,c,d){for(var f="",k=0;k<b;++k){var g=d?G[d+4*k>>2]:-1;f+=E(G[c+4*k>>2],0>g?void 0:g)}Y.shaderSource(T[a],f)},La:function(a,b,c){Y.stencilFunc(a,b,c)},x:function(a,b,c,d){Y.stencilFuncSeparate(a,b,c,d)},s:function(a){Y.stencilMask(a)},Ka:function(a,b,c){Y.stencilOp(a,b,c)},w:function(a,b,c,d){Y.stencilOpSeparate(a,b,c,d)},Fa:function(a,b,
c,d,f,k,g,m,n){if(2<=U.version)if(Y.Ob)Y.texImage2D(a,b,c,d,f,k,g,m,n);else if(n){var p=Ib(m);Y.texImage2D(a,b,c,d,f,k,g,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else Y.texImage2D(a,b,c,d,f,k,g,m,null);else Y.texImage2D(a,b,c,d,f,k,g,m,n?Jb(m,g,d,f,n):null)},Da:function(a,b,c,d,f,k,g,m,n,p){if(Y.Ob)Y.texImage3D(a,b,c,d,f,k,g,m,n,p);else if(p){var q=Ib(n);Y.texImage3D(a,b,c,d,f,k,g,m,n,q,p>>31-Math.clz32(q.BYTES_PER_ELEMENT))}else Y.texImage3D(a,b,c,d,f,k,g,m,n,null)},E:function(a,b,c){Y.texParameterf(a,
b,c)},e:function(a,b,c){Y.texParameteri(a,b,c)},bb:function(a,b,c){if(2<=U.version)Y.uniform1fv(S[a],H,c>>2,b);else{if(256>=b)for(var d=X[b-1],f=0;f<b;++f)d[f]=H[c+4*f>>2];else d=H.subarray(c>>2,c+4*b>>2);Y.uniform1fv(S[a],d)}},v:function(a,b){Y.uniform1i(S[a],b)},ab:function(a,b,c){if(2<=U.version)Y.uniform2fv(S[a],H,c>>2,2*b);else{if(256>=2*b)for(var d=X[2*b-1],f=0;f<2*b;f+=2)d[f]=H[c+4*f>>2],d[f+1]=H[c+(4*f+4)>>2];else d=H.subarray(c>>2,c+8*b>>2);Y.uniform2fv(S[a],d)}},$a:function(a,b,c){if(2<=
U.version)Y.uniform3fv(S[a],H,c>>2,3*b);else{if(256>=3*b)for(var d=X[3*b-1],f=0;f<3*b;f+=3)d[f]=H[c+4*f>>2],d[f+1]=H[c+(4*f+4)>>2],d[f+2]=H[c+(4*f+8)>>2];else d=H.subarray(c>>2,c+12*b>>2);Y.uniform3fv(S[a],d)}},_a:function(a,b,c){if(2<=U.version)Y.uniform4fv(S[a],H,c>>2,4*b);else{if(256>=4*b){var d=X[4*b-1],f=H;c>>=2;for(var k=0;k<4*b;k+=4){var g=c+k;d[k]=f[g];d[k+1]=f[g+1];d[k+2]=f[g+2];d[k+3]=f[g+3]}}else d=H.subarray(c>>2,c+16*b>>2);Y.uniform4fv(S[a],d)}},Za:function(a,b,c,d){if(2<=U.version)Y.uniformMatrix4fv(S[a],
!!c,H,d>>2,16*b);else{if(256>=16*b){var f=X[16*b-1],k=H;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;f[g]=k[m];f[g+1]=k[m+1];f[g+2]=k[m+2];f[g+3]=k[m+3];f[g+4]=k[m+4];f[g+5]=k[m+5];f[g+6]=k[m+6];f[g+7]=k[m+7];f[g+8]=k[m+8];f[g+9]=k[m+9];f[g+10]=k[m+10];f[g+11]=k[m+11];f[g+12]=k[m+12];f[g+13]=k[m+13];f[g+14]=k[m+14];f[g+15]=k[m+15]}}else f=H.subarray(d>>2,d+64*b>>2);Y.uniformMatrix4fv(S[a],!!c,f)}},ka:function(a){Y.useProgram(R[a])},db:function(a,b){Y.vertexAttribDivisor(a,b)},ja:function(a,b,c,d,f,k){Y.vertexAttribPointer(a,
b,c,!!d,f,k)},qa:function(a,b,c,d){Y.viewport(a,b,c,d)},memory:A,Ua:function(){e.$b=function(a){0!=Nb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",e.$b)},Ta:function(){e.ac=function(a){a=a.clipboardData.getData("text");oa([a])};window.addEventListener("paste",e.ac)},n:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Ob()});document.body.append(a)},m:function(){document.getElementById("_sokol_app_input_element").focus()},
l:function(){document.getElementById("_sokol_app_input_element").blur()},Sa:function(){window.removeEventListener("beforeunload",e.$b)},Ra:function(){window.removeEventListener("paste",e.ac)},table:la},Qb=function(){function a(f){e.asm=f.exports;J--;e.monitorRunDependencies&&e.monitorRunDependencies(J);0==J&&(null!==Ha&&(clearInterval(Ha),Ha=null),Ia&&(f=Ia,Ia=null,f()))}function b(f){a(f.instance)}function c(f){return Ma().then(function(k){return WebAssembly.instantiate(k,d)}).then(f,function(k){x("failed to asynchronously prepare wasm: "+
k);ja(k)})}var d={a:Pb};J++;e.monitorRunDependencies&&e.monitorRunDependencies(J);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return x("Module.instantiateWasm callback failed with error: "+f),!1}(function(){if(z||"function"!==typeof WebAssembly.instantiateStreaming||Ja()||"function"!==typeof fetch)return c(b);fetch(K,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(k){x("wasm streaming compile failed: "+k);x("falling back to ArrayBuffer instantiation");
c(b)})})})();return{}}();e.asm=Qb;var Na=e.___wasm_call_ctors=function(){return(Na=e.___wasm_call_ctors=e.asm.fb).apply(null,arguments)},Ob=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Ob=e.__sapp_emsc_notify_keyboard_hidden=e.asm.gb).apply(null,arguments)};e.___em_js__sapp_js_create_textfield=function(){return(e.___em_js__sapp_js_create_textfield=e.asm.hb).apply(null,arguments)};
e.___em_js__sapp_js_focus_textfield=function(){return(e.___em_js__sapp_js_focus_textfield=e.asm.ib).apply(null,arguments)};e.___em_js__sapp_js_unfocus_textfield=function(){return(e.___em_js__sapp_js_unfocus_textfield=e.asm.jb).apply(null,arguments)};e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.kb).apply(null,arguments)};var Nb=e.__sapp_html5_get_ask_leave_site=function(){return(Nb=e.__sapp_html5_get_ask_leave_site=e.asm.lb).apply(null,arguments)};
e.___em_js__sapp_add_js_hook_beforeunload=function(){return(e.___em_js__sapp_add_js_hook_beforeunload=e.asm.mb).apply(null,arguments)};e.___em_js__sapp_remove_js_hook_beforeunload=function(){return(e.___em_js__sapp_remove_js_hook_beforeunload=e.asm.nb).apply(null,arguments)};e.___em_js__sapp_add_js_hook_clipboard=function(){return(e.___em_js__sapp_add_js_hook_clipboard=e.asm.ob).apply(null,arguments)};
e.___em_js__sapp_remove_js_hook_clipboard=function(){return(e.___em_js__sapp_remove_js_hook_clipboard=e.asm.pb).apply(null,arguments)};e.___em_js__sapp_js_write_clipboard=function(){return(e.___em_js__sapp_js_write_clipboard=e.asm.qb).apply(null,arguments)};e._main=function(){return(e._main=e.asm.rb).apply(null,arguments)};e.___em_js__stm_js_perfnow=function(){return(e.___em_js__stm_js_perfnow=e.asm.sb).apply(null,arguments)};
e.__saudio_emsc_pull=function(){return(e.__saudio_emsc_pull=e.asm.tb).apply(null,arguments)};e.___em_js__saudio_js_init=function(){return(e.___em_js__saudio_js_init=e.asm.ub).apply(null,arguments)};e.___em_js__saudio_js_sample_rate=function(){return(e.___em_js__saudio_js_sample_rate=e.asm.vb).apply(null,arguments)};e.___em_js__saudio_js_buffer_frames=function(){return(e.___em_js__saudio_js_buffer_frames=e.asm.wb).apply(null,arguments)};
e.___em_js__sfetch_js_send_head_request=function(){return(e.___em_js__sfetch_js_send_head_request=e.asm.xb).apply(null,arguments)};e.___em_js__sfetch_js_send_get_request=function(){return(e.___em_js__sfetch_js_send_get_request=e.asm.yb).apply(null,arguments)};e.__sfetch_emsc_head_response=function(){return(e.__sfetch_emsc_head_response=e.asm.zb).apply(null,arguments)};e.__sfetch_emsc_get_response=function(){return(e.__sfetch_emsc_get_response=e.asm.Ab).apply(null,arguments)};
e.__sfetch_emsc_failed_http_status=function(){return(e.__sfetch_emsc_failed_http_status=e.asm.Bb).apply(null,arguments)};e.__sfetch_emsc_failed_buffer_too_small=function(){return(e.__sfetch_emsc_failed_buffer_too_small=e.asm.Cb).apply(null,arguments)};
var P=e._malloc=function(){return(P=e._malloc=e.asm.Db).apply(null,arguments)},qa=e.stackSave=function(){return(qa=e.stackSave=e.asm.Eb).apply(null,arguments)},B=e.stackAlloc=function(){return(B=e.stackAlloc=e.asm.Fb).apply(null,arguments)},ra=e.stackRestore=function(){return(ra=e.stackRestore=e.asm.Gb).apply(null,arguments)};e.dynCall_vi=function(){return(e.dynCall_vi=e.asm.Hb).apply(null,arguments)};e.dynCall_v=function(){return(e.dynCall_v=e.asm.Ib).apply(null,arguments)};
var Q=e.dynCall_iiii=function(){return(Q=e.dynCall_iiii=e.asm.Jb).apply(null,arguments)},Mb=e.dynCall_idi=function(){return(Mb=e.dynCall_idi=e.asm.Kb).apply(null,arguments)};e.asm=Qb;var Rb;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}Ia=function Sb(){Rb||Tb();Rb||(Ia=Sb)};
function Tb(a){function b(){if(!Rb&&(Rb=!0,e.calledRun=!0,!ma)){Aa(Ca);Aa(Da);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Ub){var c=a,d=e._main;c=c||[];var f=c.length+1,k=B(4*(f+1));G[k>>2]=ua(aa);for(var g=1;g<f;g++)G[(k>>2)+g]=ua(c[g-1]);G[(k>>2)+f]=0;try{var m=d(f,k);if(!noExitRuntime||0!==m){if(!noExitRuntime&&(ma=!0,e.onExit))e.onExit(m);t(m,new ia(m))}}catch(n){n instanceof ia||("unwind"==n?noExitRuntime=!0:((c=n)&&"object"===typeof n&&n.stack&&(c=[n,n.stack]),x("exception thrown: "+
c),t(1,n)))}finally{}}if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)c=e.postRun.shift(),Fa.unshift(c);Aa(Fa)}}a=a||r;if(!(0<J)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ga();Aa(Ba);0<J||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Tb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();
var Ub=!0;e.noInitialRun&&(Ub=!1);noExitRuntime=!0;Tb();
