
var e;e||(e=typeof Module !== 'undefined' ? Module : {});var h={},l;for(l in e)e.hasOwnProperty(l)&&(h[l]=e[l]);var r=[],aa="./this.program";function t(a,b){throw b;}var ba=!1,u=!1,ca=!1,da=!1;ba="object"===typeof window;u="function"===typeof importScripts;ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;da=!ba&&!ca&&!u;var v="",ea,w,fa,ha;
if(ca)v=u?require("path").dirname(v)+"/":__dirname+"/",ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);return fa.readFileSync(a,b?null:"utf8")},w=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",
ja),t=function(a){process.exit(a)},e.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),w=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ba||u)u?v=self.location.href:document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(w=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ka=e.print||console.log.bind(console),x=e.printErr||console.warn.bind(console);for(l in h)h.hasOwnProperty(l)&&(e[l]=h[l]);h=null;e.arguments&&(r=e.arguments);e.thisProgram&&(aa=e.thisProgram);e.quit&&(t=e.quit);var z;e.wasmBinary&&(z=e.wasmBinary);var noExitRuntime;e.noExitRuntime&&(noExitRuntime=e.noExitRuntime);"object"!==typeof WebAssembly&&x("no native wasm support detected");var A,la=new WebAssembly.Table({initial:82,maximum:82,element:"anyfunc"}),ma=!1;
function assert(a,b){a||ja("Assertion failed: "+b)}function na(){var a=e.__sapp_emsc_onpaste;assert(a,"Cannot call unknown function _sapp_emsc_onpaste, make sure it is exported");return a}
function oa(a){var b=["string"],c={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var q=(n.length<<2)+1;p=B(q);C(n,D,p,q)}return p},array:function(n){var p=B(n.length);pa.set(n,p);return p}},d=na(),f=[],k=0;if(a)for(var g=0;g<a.length;g++){var m=c[b[g]];m?(0===k&&(k=qa()),f[g]=m(a[g])):f[g]=a[g]}d.apply(null,f);0!==k&&ra(k)}var sa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function E(a,b){if(a){var c=D,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&sa)a=sa.decode(c.subarray(a,b));else{for(d="";a<b;){var f=c[a++];if(f&128){var k=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|k);else{var g=c[a++]&63;f=224==(f&240)?(f&15)<<12|k<<6|g:(f&7)<<18|k<<12|g<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}a=d}}else a="";return a}
function C(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var k=0;k<a.length;++k){var g=a.charCodeAt(k);if(55296<=g&&57343>=g){var m=a.charCodeAt(++k);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-f}
function ta(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ua(a){var b=ta(a)+1,c=B(b);C(a,pa,c,b);return c}var va,pa,D,wa,xa,F,ya,G,H;
function za(a){va=a;e.HEAP8=pa=new Int8Array(a);e.HEAP16=wa=new Int16Array(a);e.HEAP32=F=new Int32Array(a);e.HEAPU8=D=new Uint8Array(a);e.HEAPU16=xa=new Uint16Array(a);e.HEAPU32=ya=new Uint32Array(a);e.HEAPF32=G=new Float32Array(a);e.HEAPF64=H=new Float64Array(a)}var Aa=e.INITIAL_MEMORY||33554432;e.wasmMemory?A=e.wasmMemory:A=new WebAssembly.Memory({initial:Aa/65536,maximum:32768});A&&(va=A.buffer);Aa=va.byteLength;za(va);F[428060]=6955280;
function Ba(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.qc;"number"===typeof c?void 0===b.ec?e.dynCall_v(c):e.dynCall_vi(c,b.ec):c(void 0===b.ec?null:b.ec)}}}var Ca=[],Da=[],Ea=[],Fa=[],Ga=[];function Ha(){var a=e.preRun.shift();Ca.unshift(a)}var I=0,Ia=null,Ja=null;e.preloadedImages={};e.preloadedAudios={};function ja(a){if(e.onAbort)e.onAbort(a);ka(a);x(a);ma=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}
function Ka(a){var b=J;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function La(){return Ka("data:application/octet-stream;base64,")}var J="debugtext-context-sapp-ui.wasm";if(!La()){var Ma=J;J=e.locateFile?e.locateFile(Ma,v):v+Ma}function Na(){try{if(z)return new Uint8Array(z);if(w)return w(J);throw"both async and sync fetching of the wasm failed";}catch(a){ja(a)}}
function Oa(){return z||!ba&&!u||"function"!==typeof fetch||Ka("file://")?new Promise(function(a){a(Na())}):fetch(J,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+J+"'";return a.arrayBuffer()}).catch(function(){return Na()})}Da.push({qc:function(){Pa()}});var Qa=0,Ra=0,K=0,Sa=0,Ta=0,Ua=null,Va=null,Wa=!1;function Xa(){for(var a=L.length-1;0<=a;--a)Ya(a);L=[];Za=[]}var Za=[];
function $a(){if(ab&&bb.cc)for(var a=0;a<Za.length;++a){var b=Za[a];Za.splice(a,1);--a;b.Cc.apply(null,b.uc)}}var ab=0,bb=null,L=[];function Ya(a){var b=L[a];b.target.removeEventListener(b.Wb,b.oc,b.Xb);L.splice(a,1)}function M(a){function b(d){++ab;bb=a;$a();a.$b(d);$a();--ab}if(a.Yb)a.oc=b,a.target.addEventListener(a.Wb,b,a.Xb),L.push(a),Wa||(Fa.push(Xa),Wa=!0);else for(var c=0;c<L.length;++c)L[c].target==a.target&&L[c].Wb==a.Wb&&Ya(c--)}
var cb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function N(a){a=2<a?E(a):a;return cb[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function db(a){return 0>cb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function eb(a,b,c,d,f,k){Qa||(Qa=O(164));a={target:N(a),cc:!0,Wb:k,Yb:d,$b:function(g){g=g||event;var m=Qa;C(g.key?g.key:"",D,m+0,32);C(g.code?g.code:"",D,m+32,32);F[m+64>>2]=g.location;F[m+68>>2]=g.ctrlKey;F[m+72>>2]=g.shiftKey;F[m+76>>2]=g.altKey;F[m+80>>2]=g.metaKey;F[m+84>>2]=g.repeat;C(g.locale?g.locale:"",D,m+88,32);C(g.char?g.char:"",D,m+120,32);F[m+152>>2]=g.charCode;F[m+156>>2]=g.keyCode;F[m+160>>2]=g.which;P(d,f,m,b)&&g.preventDefault()},Xb:c};M(a)}
function fb(a,b,c){F[a>>2]=b.screenX;F[a+4>>2]=b.screenY;F[a+8>>2]=b.clientX;F[a+12>>2]=b.clientY;F[a+16>>2]=b.ctrlKey;F[a+20>>2]=b.shiftKey;F[a+24>>2]=b.altKey;F[a+28>>2]=b.metaKey;wa[a+32>>1]=b.button;wa[a+34>>1]=b.buttons;var d=b.movementY||b.screenY-Va;F[a+36>>2]=b.movementX||b.screenX-Ua;F[a+40>>2]=d;c=db(c);F[a+44>>2]=b.clientX-c.left;F[a+48>>2]=b.clientY-c.top;"wheel"!==b.type&&"mousewheel"!==b.type&&(Ua=b.screenX,Va=b.screenY)}
function gb(a,b,c,d,f,k){Ra||(Ra=O(64));a=N(a);M({target:a,cc:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,Wb:k,Yb:d,$b:function(g){g=g||event;fb(Ra,g,a);P(d,f,Ra,b)&&g.preventDefault()},Xb:c})}
function hb(a,b,c,d){Sa||(Sa=O(36));a=N(a);M({target:a,Wb:"resize",Yb:d,$b:function(f){f=f||event;if(f.target==a){var k=Sa,g=document.body;F[k>>2]=f.detail;F[k+4>>2]=g.clientWidth;F[k+8>>2]=g.clientHeight;F[k+12>>2]=innerWidth;F[k+16>>2]=innerHeight;F[k+20>>2]=outerWidth;F[k+24>>2]=outerHeight;F[k+28>>2]=pageXOffset;F[k+32>>2]=pageYOffset;P(d,10,k,b)&&f.preventDefault()}},Xb:c})}
function ib(a,b,c,d,f,k){Ta||(Ta=O(1684));a=N(a);M({target:a,cc:"touchstart"==k||"touchend"==k,Wb:k,Yb:d,$b:function(g){g=g||event;for(var m={},n=0;n<g.touches.length;++n){var p=g.touches[n];p.hc=!1;m[p.identifier]=p}for(n=0;n<g.changedTouches.length;++n)p=g.changedTouches[n],m[p.identifier]=p,p.hc=!0;for(n=0;n<g.targetTouches.length;++n)p=g.targetTouches[n],m[p.identifier].sc=!0;var q=p=Ta;F[q+4>>2]=g.ctrlKey;F[q+8>>2]=g.shiftKey;F[q+12>>2]=g.altKey;F[q+16>>2]=g.metaKey;q+=20;var mb=db(a),nb=0;for(n in m){var y=
m[n];F[q>>2]=y.identifier;F[q+4>>2]=y.screenX;F[q+8>>2]=y.screenY;F[q+12>>2]=y.clientX;F[q+16>>2]=y.clientY;F[q+20>>2]=y.pageX;F[q+24>>2]=y.pageY;F[q+28>>2]=y.hc;F[q+32>>2]=y.sc;F[q+36>>2]=y.clientX-mb.left;F[q+40>>2]=y.clientY-mb.top;q+=52;if(32<=++nb)break}F[p>>2]=nb;P(d,f,p,b)&&g.preventDefault()},Xb:c})}function jb(a,b,c,d,f,k){a={target:N(a),Wb:k,Yb:d,$b:function(g){g=g||event;P(d,f,0,b)&&g.preventDefault()},Xb:c};M(a)}
function kb(a,b,c,d,f){function k(m){m=m||event;fb(K,m,a);H[K+64>>3]=m.wheelDeltaX||0;H[K+72>>3]=-(m.wheelDeltaY||m.wheelDelta);H[K+80>>3]=0;F[K+88>>2]=0;P(d,9,K,b)&&m.preventDefault()}function g(m){m=m||event;var n=K;fb(n,m,a);H[n+64>>3]=m.deltaX;H[n+72>>3]=m.deltaY;H[n+80>>3]=m.deltaZ;F[n+88>>2]=m.deltaMode;P(d,9,n,b)&&m.preventDefault()}K||(K=O(96));M({target:a,cc:!0,Wb:f,Yb:d,$b:"wheel"==f?g:k,Xb:c})}
function lb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,k){b.drawArraysInstancedANGLE(c,d,f,k)},a.drawElementsInstanced=function(c,d,f,k,g){b.drawElementsInstancedANGLE(c,d,f,k,g)})}
function ob(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function pb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function qb(a){a.wc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}var rb=1,sb=0,tb=[],Q=[],ub=[],vb=[],R=[],S=[],T=[],wb=[],xb=[],U=null,yb={},zb={},Ab={};function V(a){sb||(sb=a)}function W(a){for(var b=rb++,c=a.length;c<b;c++)a[c]=null;return b}var X=[0];
function Bb(a){a||(a=U);if(!a.rc){a.rc=!0;var b=a.dc;lb(b);ob(b);pb(b);qb(b);b.xc=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod EXT_texture_norm16 WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2 WEBKIT_WEBGL_compressed_texture_pvrtc".split(" ");(b.getSupportedExtensions()||
[]).forEach(function(d){-1!=c.indexOf(d)&&b.getExtension(d)})}}var Cb,Db,Eb=["default","low-power","high-performance"],Fb=[];function Gb(a,b,c,d){for(var f=0;f<a;f++){var k=Y[c](),g=k&&W(d);k?(k.name=g,d[g]=k):V(1282);F[b+4*f>>2]=g}}
function Hb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>U.version){V(1282);return}c=2*(Y.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>U.version){V(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":V(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:V(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)F[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){V(1280);x("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:V(1280);x("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}F[b>>2]=c}else V(1281)}
function Ib(a){var b=ta(a)+1,c=O(b);C(a,D,c,b);return c}function Jb(a){a-=5120;return 0==a?pa:1==a?D:2==a?wa:4==a?F:6==a?G:5==a||28922==a||28520==a||30779==a||30782==a?ya:xa}function Kb(a,b,c,d,f){a=Jb(a);var k=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(f>>k,f+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<k)+4-1&-4)>>k)}for(var Y,Lb=new Float32Array(256),Z=0;256>Z;Z++)X[Z]=Lb.subarray(0,Z+1);for(Z=0;256>Z;Z++);for(var Mb=0;32>Mb;Mb++)Fb.push(Array(Mb));
var Qb={ea:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},ua:function(a,b,c){a=N(a);if(!a)return-4;a=db(a);H[b>>3]=a.width;H[c>>3]=a.height;return 0},$a:function(a,b,c){D.copyWithin(a,b,b+c)},Ra:function(a,b){function c(d){Nb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},ab:function(a){a>>>=0;var b=D.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);
a:{try{A.grow(Math.min(2147483648,d)-va.byteLength+65535>>>16);za(A.buffer);var f=1;break a}catch(k){}f=void 0}if(f)return!0}return!1},$:function(a,b,c){a=N(a);if(!a)return-4;a.width=b;a.height=c;return 0},ja:function(a,b,c,d){eb(a,b,c,d,2,"keydown");return 0},ha:function(a,b,c,d){eb(a,b,c,d,1,"keypress");return 0},ia:function(a,b,c,d){eb(a,b,c,d,3,"keyup");return 0},I:function(a,b,c,d){gb(a,b,c,d,5,"mousedown");return 0},na:function(a,b,c,d){gb(a,b,c,d,33,"mouseenter");return 0},la:function(a,b,
c,d){gb(a,b,c,d,34,"mouseleave");return 0},oa:function(a,b,c,d){gb(a,b,c,d,8,"mousemove");return 0},ta:function(a,b,c,d){gb(a,b,c,d,6,"mouseup");return 0},ob:function(a,b,c,d){hb(a,b,c,d);return 0},ca:function(a,b,c,d){ib(a,b,c,d,25,"touchcancel");return 0},da:function(a,b,c,d){ib(a,b,c,d,23,"touchend");return 0},fa:function(a,b,c,d){ib(a,b,c,d,24,"touchmove");return 0},ga:function(a,b,c,d){ib(a,b,c,d,22,"touchstart");return 0},ba:function(a,b,c,d){jb(a,b,c,d,31,"webglcontextlost");return 0},aa:function(a,
b,c,d){jb(a,b,c,d,32,"webglcontextrestored");return 0},ka:function(a,b,c,d){a=N(a);return"undefined"!==typeof a.onwheel?(kb(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(kb(a,b,c,d,"mousewheel"),0):-1},P:function(a,b){var c={};b>>=2;c.alpha=!!F[b];c.depth=!!F[b+1];c.stencil=!!F[b+2];c.antialias=!!F[b+3];c.premultipliedAlpha=!!F[b+4];c.preserveDrawingBuffer=!!F[b+5];c.powerPreference=Eb[F[b+6]];c.failIfMajorPerformanceCaveat=!!F[b+7];c.kc=F[b+8];c.zc=F[b+9];c.jc=F[b+10];c.pc=F[b+11];c.Ac=
F[b+12];c.Bc=F[b+13];if(a=N(a))if(c.pc)c=-1;else if(a=1<c.kc?a.getContext("webgl2",c):a.getContext("webgl",c)){b=W(xb);var d={yc:b,attributes:c,version:c.kc,dc:a};a.canvas&&(a.canvas.tc=d);xb[b]=d;("undefined"===typeof c.jc||c.jc)&&Bb(d);c=b}else c=0;else c=-4;return c},Ba:function(a,b){a=xb[a];b=E(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&lb(Y);"OES_vertex_array_object"==b&&ob(Y);"WEBGL_draw_buffers"==b&&pb(Y);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&qb(Y);
return!!a.dc.getExtension(b)},Oa:function(a){a>>=2;for(var b=0;14>b;++b)F[a+b]=0;F[a]=F[a+1]=F[a+3]=F[a+4]=F[a+8]=F[a+10]=1},Ha:function(a){U=xb[a];e.vc=Y=U&&U.dc;return!a||Y?0:-5},m:function(a){Y.activeTexture(a)},L:function(a,b){Y.attachShader(Q[a],T[b])},d:function(a,b){35051==a?Y.ic=b:35052==a&&(Y.Zb=b);Y.bindBuffer(a,tb[b])},c:function(a,b){Y.bindFramebuffer(a,ub[b])},O:function(a,b){Y.bindRenderbuffer(a,vb[b])},b:function(a,b){Y.bindTexture(a,R[b])},_:function(a){Y.bindVertexArray(wb[a])},W:function(a,
b,c,d){Y.blendColor(a,b,c,d)},X:function(a,b){Y.blendEquationSeparate(a,b)},Y:function(a,b,c,d){Y.blendFuncSeparate(a,b,c,d)},z:function(a,b,c,d,f,k,g,m,n,p){Y.blitFramebuffer(a,b,c,d,f,k,g,m,n,p)},R:function(a,b,c,d){2<=U.version?c?Y.bufferData(a,D,d,c,b):Y.bufferData(a,b,d):Y.bufferData(a,c?D.subarray(c,c+b):b,d)},v:function(a,b,c,d){2<=U.version?Y.bufferSubData(a,b,D,d,c):Y.bufferSubData(a,b,D.subarray(d,d+c))},n:function(a){return Y.checkFramebufferStatus(a)},sa:function(a){Y.clear(a)},nb:function(a,
b,c,d){Y.clearBufferfi(a,b,c,d)},p:function(a,b,c){Y.clearBufferfv(a,b,G,c>>2)},mb:function(a,b,c){Y.clearBufferuiv(a,b,ya,c>>2)},xa:function(a,b,c,d){Y.clearColor(a,b,c,d)},wa:function(a){Y.clearDepth(a)},va:function(a){Y.clearStencil(a)},C:function(a,b,c,d){Y.colorMask(!!a,!!b,!!c,!!d)},Aa:function(a){Y.compileShader(T[a])},La:function(a,b,c,d,f,k,g,m){2<=U.version?Y.Zb?Y.compressedTexImage2D(a,b,c,d,f,k,g,m):Y.compressedTexImage2D(a,b,c,d,f,k,D,m,g):Y.compressedTexImage2D(a,b,c,d,f,k,m?D.subarray(m,
m+g):null)},Ja:function(a,b,c,d,f,k,g,m,n){Y.Zb?Y.compressedTexImage3D(a,b,c,d,f,k,g,m,n):Y.compressedTexImage3D(a,b,c,d,f,k,g,D,n,m)},Ga:function(){var a=W(Q),b=Y.createProgram();b.name=a;Q[a]=b;return a},Da:function(a){var b=W(T);T[b]=Y.createShader(a);return b},T:function(a){Y.cullFace(a)},H:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],f=tb[d];f&&(Y.deleteBuffer(f),f.name=0,tb[d]=null,d==Cb&&(Cb=0),d==Db&&(Db=0),d==Y.ic&&(Y.ic=0),d==Y.Zb&&(Y.Zb=0))}},k:function(a,b){for(var c=0;c<a;++c){var d=
F[b+4*c>>2],f=ub[d];f&&(Y.deleteFramebuffer(f),f.name=0,ub[d]=null)}},u:function(a){if(a){var b=Q[a];b?(Y.deleteProgram(b),b.name=0,Q[a]=null,yb[a]=null):V(1281)}},s:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],f=vb[d];f&&(Y.deleteRenderbuffer(f),f.name=0,vb[d]=null)}},B:function(a){if(a){var b=T[a];b?(Y.deleteShader(b),T[a]=null):V(1281)}},G:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],f=R[d];f&&(Y.deleteTexture(f),f.name=0,R[d]=null)}},Ta:function(a,b){for(var c=0;c<a;c++){var d=
F[b+4*c>>2];Y.deleteVertexArray(wb[d]);wb[d]=null}},F:function(a){Y.depthFunc(a)},E:function(a){Y.depthMask(!!a)},e:function(a){Y.disable(a)},Z:function(a){Y.disableVertexAttribArray(a)},bb:function(a,b,c){Y.drawArrays(a,b,c)},j:function(a,b){for(var c=Fb[a],d=0;d<a;d++)c[d]=F[b+4*d>>2];Y.drawBuffers(c)},cb:function(a,b,c,d){Y.drawElements(a,b,c,d)},i:function(a){Y.enable(a)},ib:function(a){Y.enableVertexAttribArray(a)},l:function(a,b,c,d){Y.framebufferRenderbuffer(a,b,c,vb[d])},a:function(a,b,c,
d,f){Y.framebufferTexture2D(a,b,c,R[d],f)},g:function(a,b,c,d,f){Y.framebufferTextureLayer(a,b,R[c],d,f)},U:function(a){Y.frontFace(a)},S:function(a,b){Gb(a,b,"createBuffer",tb)},o:function(a,b){Gb(a,b,"createFramebuffer",ub)},Q:function(a,b){Gb(a,b,"createRenderbuffer",vb)},Ma:function(a,b){Gb(a,b,"createTexture",R)},Sa:function(a,b){Gb(a,b,"createVertexArray",wb)},ya:function(a,b){return Y.getAttribLocation(Q[a],E(b))},f:function(a,b){Hb(a,b)},Ea:function(a,b,c,d){a=Y.getProgramInfoLog(Q[a]);null===
a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(F[c>>2]=b)},K:function(a,b,c){if(c)if(a>=rb)V(1281);else{var d=yb[a];if(d)if(35716==b)a=Y.getProgramInfoLog(Q[a]),null===a&&(a="(unknown error)"),F[c>>2]=a.length+1;else if(35719==b)F[c>>2]=d.fc;else if(35722==b){if(-1==d.ac){a=Q[a];var f=Y.getProgramParameter(a,35721);for(b=d.ac=0;b<f;++b)d.ac=Math.max(d.ac,Y.getActiveAttrib(a,b).name.length+1)}F[c>>2]=d.ac}else if(35381==b){if(-1==d.bc)for(a=Q[a],f=Y.getProgramParameter(a,35382),b=d.bc=0;b<f;++b)d.bc=
Math.max(d.bc,Y.getActiveUniformBlockName(a,b).length+1);F[c>>2]=d.bc}else F[c>>2]=Y.getProgramParameter(Q[a],b);else V(1282)}else V(1281)},za:function(a,b,c,d){a=Y.getShaderInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(F[c>>2]=b)},J:function(a,b,c){c?35716==b?(a=Y.getShaderInfoLog(T[a]),null===a&&(a="(unknown error)"),F[c>>2]=a.length+1):35720==b?(a=Y.getShaderSource(T[a]),F[c>>2]=null===a||0==a.length?0:a.length+1):F[c>>2]=Y.getShaderParameter(T[a],b):V(1281)},Va:function(a){if(zb[a])return zb[a];
switch(a){case 7939:var b=Y.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Ib(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Y.getParameter(a))||V(1280);b=Ib(b);break;case 7938:b=Y.getParameter(7938);b=2<=U.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Ib(b);break;case 35724:b=Y.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=
Ib(b);break;default:return V(1280),0}return zb[a]=b},Ua:function(a,b){if(2>U.version)return V(1282),0;var c=Ab[a];if(c)return 0>b||b>=c.length?(V(1281),0):c[b];switch(a){case 7939:return c=Y.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Ib(d)}),c=Ab[a]=c,0>b||b>=c.length?(V(1281),0):c[b];default:return V(1280),0}},t:function(a,b){b=E(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,
d)}return(a=yb[a]&&yb[a].nc[b])&&0<=c&&c<a[0]?a[1]+c:-1},Fa:function(a){Y.linkProgram(Q[a]);var b=Q[a];a=yb[a]={nc:{},fc:0,ac:-1,bc:-1};for(var c=a.nc,d=Y.getProgramParameter(b,35718),f=0;f<d;++f){var k=Y.getActiveUniform(b,f),g=k.name;a.fc=Math.max(a.fc,g.length+1);"]"==g.slice(-1)&&(g=g.slice(0,g.lastIndexOf("[")));var m=Y.getUniformLocation(b,g);if(m){var n=W(S);c[g]=[k.size,n];S[n]=m;for(var p=1;p<k.size;++p)m=Y.getUniformLocation(b,g+"["+p+"]"),n=W(S),S[n]=m}}},V:function(a,b){Y.polygonOffset(a,
b)},A:function(a){Y.readBuffer(a)},Na:function(a,b,c,d){Y.renderbufferStorage(a,b,c,d)},N:function(a,b,c,d,f){Y.renderbufferStorageMultisample(a,b,c,d,f)},q:function(a,b,c,d){Y.scissor(a,b,c,d)},Ca:function(a,b,c,d){for(var f="",k=0;k<b;++k){var g=d?F[d+4*k>>2]:-1;f+=E(F[c+4*k>>2],0>g?void 0:g)}Y.shaderSource(T[a],f)},Qa:function(a,b,c){Y.stencilFunc(a,b,c)},ra:function(a,b,c,d){Y.stencilFuncSeparate(a,b,c,d)},D:function(a){Y.stencilMask(a)},Pa:function(a,b,c){Y.stencilOp(a,b,c)},qa:function(a,b,
c,d){Y.stencilOpSeparate(a,b,c,d)},Ka:function(a,b,c,d,f,k,g,m,n){if(2<=U.version)if(Y.Zb)Y.texImage2D(a,b,c,d,f,k,g,m,n);else if(n){var p=Jb(m);Y.texImage2D(a,b,c,d,f,k,g,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else Y.texImage2D(a,b,c,d,f,k,g,m,null);else Y.texImage2D(a,b,c,d,f,k,g,m,n?Kb(m,g,d,f,n):null)},Ia:function(a,b,c,d,f,k,g,m,n,p){if(Y.Zb)Y.texImage3D(a,b,c,d,f,k,g,m,n,p);else if(p){var q=Jb(n);Y.texImage3D(a,b,c,d,f,k,g,m,n,q,p>>31-Math.clz32(q.BYTES_PER_ELEMENT))}else Y.texImage3D(a,
b,c,d,f,k,g,m,n,null)},M:function(a,b,c){Y.texParameterf(a,b,c)},h:function(a,b,c){Y.texParameteri(a,b,c)},hb:function(a,b,c){if(2<=U.version)Y.uniform1fv(S[a],G,c>>2,b);else{if(256>=b)for(var d=X[b-1],f=0;f<b;++f)d[f]=G[c+4*f>>2];else d=G.subarray(c>>2,c+4*b>>2);Y.uniform1fv(S[a],d)}},pa:function(a,b){Y.uniform1i(S[a],b)},gb:function(a,b,c){if(2<=U.version)Y.uniform2fv(S[a],G,c>>2,2*b);else{if(256>=2*b)for(var d=X[2*b-1],f=0;f<2*b;f+=2)d[f]=G[c+4*f>>2],d[f+1]=G[c+(4*f+4)>>2];else d=G.subarray(c>>
2,c+8*b>>2);Y.uniform2fv(S[a],d)}},fb:function(a,b,c){if(2<=U.version)Y.uniform3fv(S[a],G,c>>2,3*b);else{if(256>=3*b)for(var d=X[3*b-1],f=0;f<3*b;f+=3)d[f]=G[c+4*f>>2],d[f+1]=G[c+(4*f+4)>>2],d[f+2]=G[c+(4*f+8)>>2];else d=G.subarray(c>>2,c+12*b>>2);Y.uniform3fv(S[a],d)}},eb:function(a,b,c){if(2<=U.version)Y.uniform4fv(S[a],G,c>>2,4*b);else{if(256>=4*b){var d=X[4*b-1],f=G;c>>=2;for(var k=0;k<4*b;k+=4){var g=c+k;d[k]=f[g];d[k+1]=f[g+1];d[k+2]=f[g+2];d[k+3]=f[g+3]}}else d=G.subarray(c>>2,c+16*b>>2);Y.uniform4fv(S[a],
d)}},db:function(a,b,c,d){if(2<=U.version)Y.uniformMatrix4fv(S[a],!!c,G,d>>2,16*b);else{if(256>=16*b){var f=X[16*b-1],k=G;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;f[g]=k[m];f[g+1]=k[m+1];f[g+2]=k[m+2];f[g+3]=k[m+3];f[g+4]=k[m+4];f[g+5]=k[m+5];f[g+6]=k[m+6];f[g+7]=k[m+7];f[g+8]=k[m+8];f[g+9]=k[m+9];f[g+10]=k[m+10];f[g+11]=k[m+11];f[g+12]=k[m+12];f[g+13]=k[m+13];f[g+14]=k[m+14];f[g+15]=k[m+15]}}else f=G.subarray(d>>2,d+64*b>>2);Y.uniformMatrix4fv(S[a],!!c,f)}},lb:function(a){Y.useProgram(Q[a])},jb:function(a,
b){Y.vertexAttribDivisor(a,b)},kb:function(a,b,c,d,f,k){Y.vertexAttribPointer(a,b,c,!!d,f,k)},r:function(a,b,c,d){Y.viewport(a,b,c,d)},memory:A,_a:function(){e.lc=function(a){0!=Ob()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",e.lc)},Za:function(){e.mc=function(a){a=a.clipboardData.getData("text");oa([a])};window.addEventListener("paste",e.mc)},y:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";
a.addEventListener("focusout",function(){Pb()});document.body.append(a)},x:function(){document.getElementById("_sokol_app_input_element").focus()},w:function(){document.getElementById("_sokol_app_input_element").blur()},Wa:function(a){a=E(a);var b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=
1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},Ya:function(){window.removeEventListener("beforeunload",e.lc)},Xa:function(){window.removeEventListener("paste",e.mc)},ma:function(){return navigator.userAgent.includes("Macintosh")?1:0},table:la},Rb=function(){function a(f){e.asm=f.exports;I--;e.monitorRunDependencies&&e.monitorRunDependencies(I);0==I&&(null!==Ia&&(clearInterval(Ia),Ia=null),Ja&&(f=Ja,Ja=null,f()))}function b(f){a(f.instance)}
function c(f){return Oa().then(function(k){return WebAssembly.instantiate(k,d)}).then(f,function(k){x("failed to asynchronously prepare wasm: "+k);ja(k)})}var d={a:Qb};I++;e.monitorRunDependencies&&e.monitorRunDependencies(I);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return x("Module.instantiateWasm callback failed with error: "+f),!1}(function(){if(z||"function"!==typeof WebAssembly.instantiateStreaming||La()||Ka("file://")||"function"!==typeof fetch)return c(b);fetch(J,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,
d).then(b,function(k){x("wasm streaming compile failed: "+k);x("falling back to ArrayBuffer instantiation");c(b)})})})();return{}}();e.asm=Rb;var Pa=e.___wasm_call_ctors=function(){return(Pa=e.___wasm_call_ctors=e.asm.pb).apply(null,arguments)},O=e._malloc=function(){return(O=e._malloc=e.asm.qb).apply(null,arguments)},Pb=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Pb=e.__sapp_emsc_notify_keyboard_hidden=e.asm.rb).apply(null,arguments)};
e.___em_js__sapp_js_create_textfield=function(){return(e.___em_js__sapp_js_create_textfield=e.asm.sb).apply(null,arguments)};e.___em_js__sapp_js_focus_textfield=function(){return(e.___em_js__sapp_js_focus_textfield=e.asm.tb).apply(null,arguments)};e.___em_js__sapp_js_unfocus_textfield=function(){return(e.___em_js__sapp_js_unfocus_textfield=e.asm.ub).apply(null,arguments)};e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.vb).apply(null,arguments)};
var Ob=e.__sapp_html5_get_ask_leave_site=function(){return(Ob=e.__sapp_html5_get_ask_leave_site=e.asm.wb).apply(null,arguments)};e.___em_js__sapp_add_js_hook_beforeunload=function(){return(e.___em_js__sapp_add_js_hook_beforeunload=e.asm.xb).apply(null,arguments)};e.___em_js__sapp_remove_js_hook_beforeunload=function(){return(e.___em_js__sapp_remove_js_hook_beforeunload=e.asm.yb).apply(null,arguments)};
e.___em_js__sapp_add_js_hook_clipboard=function(){return(e.___em_js__sapp_add_js_hook_clipboard=e.asm.zb).apply(null,arguments)};e.___em_js__sapp_remove_js_hook_clipboard=function(){return(e.___em_js__sapp_remove_js_hook_clipboard=e.asm.Ab).apply(null,arguments)};e.___em_js__sapp_js_write_clipboard=function(){return(e.___em_js__sapp_js_write_clipboard=e.asm.Bb).apply(null,arguments)};e._main=function(){return(e._main=e.asm.Cb).apply(null,arguments)};
e.___em_js__stm_js_perfnow=function(){return(e.___em_js__stm_js_perfnow=e.asm.Db).apply(null,arguments)};e.__saudio_emsc_pull=function(){return(e.__saudio_emsc_pull=e.asm.Eb).apply(null,arguments)};e.___em_js__saudio_js_init=function(){return(e.___em_js__saudio_js_init=e.asm.Fb).apply(null,arguments)};e.___em_js__saudio_js_sample_rate=function(){return(e.___em_js__saudio_js_sample_rate=e.asm.Gb).apply(null,arguments)};
e.___em_js__saudio_js_buffer_frames=function(){return(e.___em_js__saudio_js_buffer_frames=e.asm.Hb).apply(null,arguments)};e.___em_js__sfetch_js_send_head_request=function(){return(e.___em_js__sfetch_js_send_head_request=e.asm.Ib).apply(null,arguments)};e.___em_js__sfetch_js_send_get_request=function(){return(e.___em_js__sfetch_js_send_get_request=e.asm.Jb).apply(null,arguments)};e.__sfetch_emsc_head_response=function(){return(e.__sfetch_emsc_head_response=e.asm.Kb).apply(null,arguments)};
e.__sfetch_emsc_get_response=function(){return(e.__sfetch_emsc_get_response=e.asm.Lb).apply(null,arguments)};e.__sfetch_emsc_failed_http_status=function(){return(e.__sfetch_emsc_failed_http_status=e.asm.Mb).apply(null,arguments)};e.__sfetch_emsc_failed_buffer_too_small=function(){return(e.__sfetch_emsc_failed_buffer_too_small=e.asm.Nb).apply(null,arguments)};e.___em_js__simgui_js_is_osx=function(){return(e.___em_js__simgui_js_is_osx=e.asm.Ob).apply(null,arguments)};
var qa=e.stackSave=function(){return(qa=e.stackSave=e.asm.Pb).apply(null,arguments)},B=e.stackAlloc=function(){return(B=e.stackAlloc=e.asm.Qb).apply(null,arguments)},ra=e.stackRestore=function(){return(ra=e.stackRestore=e.asm.Rb).apply(null,arguments)};e.dynCall_vi=function(){return(e.dynCall_vi=e.asm.Sb).apply(null,arguments)};var P=e.dynCall_iiii=function(){return(P=e.dynCall_iiii=e.asm.Tb).apply(null,arguments)};e.dynCall_v=function(){return(e.dynCall_v=e.asm.Ub).apply(null,arguments)};
var Nb=e.dynCall_idi=function(){return(Nb=e.dynCall_idi=e.asm.Vb).apply(null,arguments)};e.asm=Rb;var Sb;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}Ja=function Tb(){Sb||Ub();Sb||(Ja=Tb)};
function Ub(a){function b(){if(!Sb&&(Sb=!0,e.calledRun=!0,!ma)){Ba(Da);Ba(Ea);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Vb){var c=a,d=e._main;c=c||[];var f=c.length+1,k=B(4*(f+1));F[k>>2]=ua(aa);for(var g=1;g<f;g++)F[(k>>2)+g]=ua(c[g-1]);F[(k>>2)+f]=0;try{var m=d(f,k);if(!noExitRuntime||0!==m){if(!noExitRuntime&&(ma=!0,e.onExit))e.onExit(m);t(m,new ia(m))}}catch(n){n instanceof ia||("unwind"==n?noExitRuntime=!0:((c=n)&&"object"===typeof n&&n.stack&&(c=[n,n.stack]),x("exception thrown: "+
c),t(1,n)))}finally{}}if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)c=e.postRun.shift(),Ga.unshift(c);Ba(Ga)}}a=a||r;if(!(0<I)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ha();Ba(Ca);0<I||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Ub;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();
var Vb=!0;e.noInitialRun&&(Vb=!1);noExitRuntime=!0;Ub();
