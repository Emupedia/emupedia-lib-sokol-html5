
var e;e||(e=typeof Module !== 'undefined' ? Module : {});var g={},h;for(h in e)e.hasOwnProperty(h)&&(g[h]=e[h]);var r=[],aa="./this.program";function t(a,b){throw b;}var ba=!1,u=!1,ca=!1,da=!1;ba="object"===typeof window;u="function"===typeof importScripts;ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;da=!ba&&!ca&&!u;var w="",ea,x,fa,ha;
if(ca)w=u?require("path").dirname(w)+"/":__dirname+"/",ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);return fa.readFileSync(a,b?null:"utf8")},x=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",
ja),t=function(a){process.exit(a)},e.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),x=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ba||u)u?w=self.location.href:document.currentScript&&(w=document.currentScript.src),w=0!==w.indexOf("blob:")?w.substr(0,w.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(x=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ka=e.print||console.log.bind(console),y=e.printErr||console.warn.bind(console);for(h in g)g.hasOwnProperty(h)&&(e[h]=g[h]);g=null;e.arguments&&(r=e.arguments);e.thisProgram&&(aa=e.thisProgram);e.quit&&(t=e.quit);var z;e.wasmBinary&&(z=e.wasmBinary);var noExitRuntime;e.noExitRuntime&&(noExitRuntime=e.noExitRuntime);"object"!==typeof WebAssembly&&y("no native wasm support detected");var A,la=new WebAssembly.Table({initial:19,maximum:19,element:"anyfunc"}),ma=!1;
function assert(a,b){a||ja("Assertion failed: "+b)}function na(){var a=e.__sapp_emsc_onpaste;assert(a,"Cannot call unknown function _sapp_emsc_onpaste, make sure it is exported");return a}
function oa(a){var b=["string"],c={string:function(m){var q=0;if(null!==m&&void 0!==m&&0!==m){var p=(m.length<<2)+1;q=B(p);C(m,D,q,p)}return q},array:function(m){var q=B(m.length);pa.set(m,q);return q}},d=na(),f=[],l=0;if(a)for(var k=0;k<a.length;k++){var n=c[b[k]];n?(0===l&&(l=qa()),f[k]=n(a[k])):f[k]=a[k]}d.apply(null,f);0!==l&&ra(l)}var sa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function E(a,b){if(a){var c=D,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&sa)a=sa.decode(c.subarray(a,b));else{for(d="";a<b;){var f=c[a++];if(f&128){var l=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|l);else{var k=c[a++]&63;f=224==(f&240)?(f&15)<<12|l<<6|k:(f&7)<<18|l<<12|k<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}a=d}}else a="";return a}
function C(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var l=0;l<a.length;++l){var k=a.charCodeAt(l);if(55296<=k&&57343>=k){var n=a.charCodeAt(++l);k=65536+((k&1023)<<10)|n&1023}if(127>=k){if(c>=d)break;b[c++]=k}else{if(2047>=k){if(c+1>=d)break;b[c++]=192|k>>6}else{if(65535>=k){if(c+2>=d)break;b[c++]=224|k>>12}else{if(c+3>=d)break;b[c++]=240|k>>18;b[c++]=128|k>>12&63}b[c++]=128|k>>6&63}b[c++]=128|k&63}}b[c]=0;return c-f}
function ta(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ua(a){var b=ta(a)+1,c=B(b);C(a,pa,c,b);return c}var F,pa,D,va,G,H;
function wa(a){F=a;e.HEAP8=pa=new Int8Array(a);e.HEAP16=va=new Int16Array(a);e.HEAP32=G=new Int32Array(a);e.HEAPU8=D=new Uint8Array(a);e.HEAPU16=new Uint16Array(a);e.HEAPU32=new Uint32Array(a);e.HEAPF32=new Float32Array(a);e.HEAPF64=H=new Float64Array(a)}var xa=e.INITIAL_MEMORY||33554432;e.wasmMemory?A=e.wasmMemory:A=new WebAssembly.Memory({initial:xa/65536,maximum:32768});A&&(F=A.buffer);xa=F.byteLength;wa(F);G[6572]=5269328;
function ya(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.Pb;"number"===typeof c?void 0===b.Db?e.dynCall_v(c):e.dynCall_vi(c,b.Db):c(void 0===b.Db?null:b.Db)}}}var za=[],Aa=[],Ba=[],Ca=[],Da=[];function Ea(){var a=e.preRun.shift();za.unshift(a)}var I=0,Fa=null,J=null;e.preloadedImages={};e.preloadedAudios={};function ja(a){if(e.onAbort)e.onAbort(a);ka(a);y(a);ma=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}
function Ga(a){var b=K;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Ha(){return Ga("data:application/octet-stream;base64,")}var K="bufferoffsets-sapp.wasm";if(!Ha()){var Ia=K;K=e.locateFile?e.locateFile(Ia,w):w+Ia}function Ja(){try{if(z)return new Uint8Array(z);if(x)return x(K);throw"both async and sync fetching of the wasm failed";}catch(a){ja(a)}}
function Ka(){return z||!ba&&!u||"function"!==typeof fetch||Ga("file://")?new Promise(function(a){a(Ja())}):fetch(K,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+K+"'";return a.arrayBuffer()}).catch(function(){return Ja()})}Aa.push({Pb:function(){La()}});function Ma(){for(var a=L.length-1;0<=a;--a)Na(a);L=[];Oa=[]}var Oa=[];function Pa(){if(Qa.Ib&&Ra.Bb)for(var a=0;a<Oa.length;++a){var b=Oa[a];Oa.splice(a,1);--a;b.bc.apply(null,b.Ub)}}var L=[];
function Na(a){var b=L[a];b.target.removeEventListener(b.vb,b.Nb,b.wb);L.splice(a,1)}function M(a){function b(d){++Qa.Ib;Ra=a;Pa();a.yb(d);Pa();--Qa.Ib}if(a.xb)a.Nb=b,a.target.addEventListener(a.vb,b,a.wb),L.push(a),Sa||(Ca.push(Ma),Sa=!0);else for(var c=0;c<L.length;++c)L[c].target==a.target&&L[c].vb==a.vb&&Na(c--)}var Qa={},Sa,Ra,Ta,Ua,Va,Wa,Xa,Ya,Za,$a=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function N(a){a=2<a?E(a):a;return $a[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function ab(a){return 0>$a.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function bb(a,b,c,d,f,l){Ta||(Ta=O(164));a={target:N(a),Bb:!0,vb:l,xb:d,yb:function(k){var n=Ta,m=n>>2;G[m]=k.location;G[m+1]=k.ctrlKey;G[m+2]=k.shiftKey;G[m+3]=k.altKey;G[m+4]=k.metaKey;G[m+5]=k.repeat;G[m+6]=k.charCode;G[m+7]=k.keyCode;G[m+8]=k.which;C(k.key||"",D,n+36,32);C(k.code||"",D,n+68,32);C(k.char||"",D,n+100,32);C(k.locale||"",D,n+132,32);P(d,f,n,b)&&k.preventDefault()},wb:c};M(a)}
function cb(a,b,c){G[a>>2]=b.screenX;G[a+4>>2]=b.screenY;G[a+8>>2]=b.clientX;G[a+12>>2]=b.clientY;G[a+16>>2]=b.ctrlKey;G[a+20>>2]=b.shiftKey;G[a+24>>2]=b.altKey;G[a+28>>2]=b.metaKey;va[a+32>>1]=b.button;va[a+34>>1]=b.buttons;var d=b.movementY||b.screenY-Va;G[a+36>>2]=b.movementX||b.screenX-Ua;G[a+40>>2]=d;c=ab(c);G[a+44>>2]=b.clientX-c.left;G[a+48>>2]=b.clientY-c.top;"wheel"!==b.type&&(Ua=b.screenX,Va=b.screenY)}
function Q(a,b,c,d,f,l){Wa||(Wa=O(64));a=N(a);M({target:a,Bb:"mousemove"!=l&&"mouseenter"!=l&&"mouseleave"!=l,vb:l,xb:d,yb:function(k){k=k||event;cb(Wa,k,a);P(d,f,Wa,b)&&k.preventDefault()},wb:c})}
function fb(a,b,c,d){Xa||(Xa=O(36));a=N(a);M({target:a,vb:"resize",xb:d,yb:function(f){f=f||event;if(f.target==a){var l=Xa,k=document.body;G[l>>2]=f.detail;G[l+4>>2]=k.clientWidth;G[l+8>>2]=k.clientHeight;G[l+12>>2]=innerWidth;G[l+16>>2]=innerHeight;G[l+20>>2]=outerWidth;G[l+24>>2]=outerHeight;G[l+28>>2]=pageXOffset;G[l+32>>2]=pageYOffset;P(d,10,l,b)&&f.preventDefault()}},wb:c})}
function gb(a,b,c,d,f,l){Ya||(Ya=O(1684));a=N(a);M({target:a,Bb:"touchstart"==l||"touchend"==l,vb:l,xb:d,yb:function(k){for(var n={},m=k.touches,q=0;q<m.length;++q){var p=m[q];n[p.identifier]=p}m=k.changedTouches;for(q=0;q<m.length;++q)p=m[q],p.Rb=1,n[p.identifier]=p;m=k.targetTouches;for(q=0;q<m.length;++q)n[m[q].identifier].Sb=1;m=Ya;p=m>>2;G[p+1]=k.ctrlKey;G[p+2]=k.shiftKey;G[p+3]=k.altKey;G[p+4]=k.metaKey;p+=5;var db=ab(a),eb=0;for(q in n){var v=n[q];G[p]=v.identifier;G[p+1]=v.screenX;G[p+2]=
v.screenY;G[p+3]=v.clientX;G[p+4]=v.clientY;G[p+5]=v.pageX;G[p+6]=v.pageY;G[p+7]=v.Rb;G[p+8]=v.Sb;G[p+9]=v.clientX-db.left;G[p+10]=v.clientY-db.top;p+=13;if(31<++eb)break}G[m>>2]=eb;P(d,f,m,b)&&k.preventDefault()},wb:c})}function hb(a,b,c,d,f,l){a={target:N(a),vb:l,xb:d,yb:function(k){k=k||event;P(d,f,0,b)&&k.preventDefault()},wb:c};M(a)}
function ib(a,b,c,d){Za||(Za=O(96));M({target:a,Bb:!0,vb:"wheel",xb:d,yb:function(f){f=f||event;var l=Za;cb(l,f,a);H[l+64>>3]=f.deltaX;H[l+72>>3]=f.deltaY;H[l+80>>3]=f.deltaZ;G[l+88>>2]=f.deltaMode;P(d,9,l,b)&&f.preventDefault()},wb:c})}
function jb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,l){b.drawArraysInstancedANGLE(c,d,f,l)},a.drawElementsInstanced=function(c,d,f,l,k){b.drawElementsInstancedANGLE(c,d,f,l,k)})}
function kb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function lb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function mb(a){a.Wb=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}var nb=1,ob=[],R=[],pb=[],qb=[],rb=[],S=[],T=[],sb=[],tb=[],U={},ub={},vb={};function V(a){wb||(wb=a)}function W(a){for(var b=nb++,c=a.length;c<b;c++)a[c]=null;return b}
function xb(a){a||(a=X);if(!a.Qb){a.Qb=!0;var b=a.Cb;jb(b);kb(b);lb(b);mb(b);b.Xb=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod EXT_texture_norm16 WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2 WEBKIT_WEBGL_compressed_texture_pvrtc".split(" ");(b.getSupportedExtensions()||
[]).forEach(function(d){-1!=c.indexOf(d)&&b.getExtension(d)})}}var wb,X,yb=["default","low-power","high-performance"];function zb(a,b,c,d){for(var f=0;f<a;f++){var l=Y[c](),k=l&&W(d);l?(l.name=k,d[k]=l):V(1282);G[b+4*f>>2]=k}}
function Ab(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>X.version){V(1282);return}c=2*(Y.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>X.version){V(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":V(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:V(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)G[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){V(1280);y("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:V(1280);y("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}G[b>>2]=c}else V(1281)}
function Z(a){var b=ta(a)+1,c=O(b);C(a,D,c,b);return c}
var Y,Eb={U:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},da:function(a,b,c){a=N(a);if(!a)return-4;a=ab(a);H[b>>3]=a.width;H[c>>3]=a.height;return 0},ea:function(a,b,c){D.copyWithin(a,b,b+c)},Ga:function(a,b){function c(d){Bb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},fa:function(a){a>>>=0;var b=D.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);
a:{try{A.grow(Math.min(2147483648,d)-F.byteLength+65535>>>16);wa(A.buffer);var f=1;break a}catch(l){}f=void 0}if(f)return!0}return!1},P:function(a,b,c){a=N(a);if(!a)return-4;a.width=b;a.height=c;return 0},Z:function(a,b,c,d){bb(a,b,c,d,2,"keydown");return 0},X:function(a,b,c,d){bb(a,b,c,d,1,"keypress");return 0},Y:function(a,b,c,d){bb(a,b,c,d,3,"keyup");return 0},u:function(a,b,c,d){Q(a,b,c,d,5,"mousedown");return 0},aa:function(a,b,c,d){Q(a,b,c,d,33,"mouseenter");return 0},$:function(a,b,c,d){Q(a,
b,c,d,34,"mouseleave");return 0},ba:function(a,b,c,d){Q(a,b,c,d,8,"mousemove");return 0},ca:function(a,b,c,d){Q(a,b,c,d,6,"mouseup");return 0},Pa:function(a,b,c,d){fb(a,b,c,d);return 0},S:function(a,b,c,d){gb(a,b,c,d,25,"touchcancel");return 0},T:function(a,b,c,d){gb(a,b,c,d,23,"touchend");return 0},V:function(a,b,c,d){gb(a,b,c,d,24,"touchmove");return 0},W:function(a,b,c,d){gb(a,b,c,d,22,"touchstart");return 0},R:function(a,b,c,d){hb(a,b,c,d,31,"webglcontextlost");return 0},Q:function(a,b,c,d){hb(a,
b,c,d,32,"webglcontextrestored");return 0},_:function(a,b,c,d){a=N(a);return"undefined"!==typeof a.onwheel?(ib(a,b,c,d),0):-1},C:function(a,b){var c={};b>>=2;c.alpha=!!G[b];c.depth=!!G[b+1];c.stencil=!!G[b+2];c.antialias=!!G[b+3];c.premultipliedAlpha=!!G[b+4];c.preserveDrawingBuffer=!!G[b+5];c.powerPreference=yb[G[b+6]];c.failIfMajorPerformanceCaveat=!!G[b+7];c.Jb=G[b+8];c.Zb=G[b+9];c.Hb=G[b+10];c.Ob=G[b+11];c.$b=G[b+12];c.ac=G[b+13];if(a=N(a))if(c.Ob)c=-1;else if(a=1<c.Jb?a.getContext("webgl2",c):
a.getContext("webgl",c)){b=W(tb);var d={Yb:b,attributes:c,version:c.Jb,Cb:a};a.canvas&&(a.canvas.Tb=d);tb[b]=d;("undefined"===typeof c.Hb||c.Hb)&&xb(d);c=b}else c=0;else c=-4;return c},qa:function(a,b){a=tb[a];b=E(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&jb(Y);"OES_vertex_array_object"==b&&kb(Y);"WEBGL_draw_buffers"==b&&lb(Y);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&mb(Y);return!!a.Cb.getExtension(b)},Da:function(a){a>>=2;for(var b=0;14>b;++b)G[a+b]=0;G[a]=
G[a+1]=G[a+3]=G[a+4]=G[a+8]=G[a+10]=1},xa:function(a){X=tb[a];e.Vb=Y=X&&X.Cb;return!a||Y?0:-5},k:function(a){Y.activeTexture(a)},D:function(a,b){Y.attachShader(R[a],T[b])},d:function(a,b){35051==a?Y.Fb=b:35052==a&&(Y.Gb=b);Y.bindBuffer(a,ob[b])},f:function(a,b){Y.bindFramebuffer(a,pb[b])},a:function(a,b){Y.bindTexture(a,rb[b])},O:function(a){Y.bindVertexArray(sb[a])},K:function(a,b,c,d){Y.blendColor(a,b,c,d)},L:function(a,b){Y.blendEquationSeparate(a,b)},M:function(a,b,c,d){Y.blendFuncSeparate(a,
b,c,d)},h:function(a,b,c,d,f,l,k,n,m,q){Y.blitFramebuffer(a,b,c,d,f,l,k,n,m,q)},F:function(a,b,c,d){2<=X.version?c?Y.bufferData(a,D,d,c,b):Y.bufferData(a,b,d):Y.bufferData(a,c?D.subarray(c,c+b):b,d)},E:function(a,b,c,d){2<=X.version?Y.bufferSubData(a,b,D,d,c):Y.bufferSubData(a,b,D.subarray(d,d+c))},la:function(a){Y.clear(a)},oa:function(a,b,c,d){Y.clearColor(a,b,c,d)},na:function(a){Y.clearDepth(a)},ma:function(a){Y.clearStencil(a)},q:function(a,b,c,d){Y.colorMask(!!a,!!b,!!c,!!d)},wa:function(a){Y.compileShader(T[a])},
Ca:function(){var a=W(R),b=Y.createProgram();b.name=a;R[a]=b;return a},za:function(a){var b=W(T);T[b]=Y.createShader(a);return b},H:function(a){Y.cullFace(a)},ta:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],f=ob[d];f&&(Y.deleteBuffer(f),f.name=0,ob[d]=null,d==Y.Fb&&(Y.Fb=0),d==Y.Gb&&(Y.Gb=0))}},g:function(a,b){for(var c=0;c<a;++c){var d=G[b+4*c>>2],f=pb[d];f&&(Y.deleteFramebuffer(f),f.name=0,pb[d]=null)}},A:function(a){if(a){var b=R[a];b?(Y.deleteProgram(b),b.name=0,R[a]=null,U[a]=null):V(1281)}},
x:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],f=qb[d];f&&(Y.deleteRenderbuffer(f),f.name=0,qb[d]=null)}},p:function(a){if(a){var b=T[a];b?(Y.deleteShader(b),T[a]=null):V(1281)}},sa:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],f=rb[d];f&&(Y.deleteTexture(f),f.name=0,rb[d]=null)}},Ia:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2];Y.deleteVertexArray(sb[d]);sb[d]=null}},t:function(a){Y.depthFunc(a)},s:function(a){Y.depthMask(!!a)},b:function(a){Y.disable(a)},N:function(a){Y.disableVertexAttribArray(a)},
ga:function(a,b,c){Y.drawArrays(a,b,c)},ha:function(a,b,c,d){Y.drawElements(a,b,c,d)},e:function(a){Y.enable(a)},ia:function(a){Y.enableVertexAttribArray(a)},I:function(a){Y.frontFace(a)},G:function(a,b){zb(a,b,"createBuffer",ob)},Ha:function(a,b){zb(a,b,"createVertexArray",sb)},ua:function(a,b){return Y.getAttribLocation(R[a],E(b))},c:function(a,b){Ab(a,b)},Aa:function(a,b,c,d){a=Y.getProgramInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(G[c>>2]=b)},B:function(a,b,c){if(c)if(a>=
nb)V(1281);else{var d=U[a];if(d)if(35716==b)a=Y.getProgramInfoLog(R[a]),null===a&&(a="(unknown error)"),G[c>>2]=a.length+1;else if(35719==b)G[c>>2]=d.Eb;else if(35722==b){if(-1==d.zb){a=R[a];var f=Y.getProgramParameter(a,35721);for(b=d.zb=0;b<f;++b)d.zb=Math.max(d.zb,Y.getActiveAttrib(a,b).name.length+1)}G[c>>2]=d.zb}else if(35381==b){if(-1==d.Ab)for(a=R[a],f=Y.getProgramParameter(a,35382),b=d.Ab=0;b<f;++b)d.Ab=Math.max(d.Ab,Y.getActiveUniformBlockName(a,b).length+1);G[c>>2]=d.Ab}else G[c>>2]=Y.getProgramParameter(R[a],
b);else V(1282)}else V(1281)},va:function(a,b,c,d){a=Y.getShaderInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(G[c>>2]=b)},y:function(a,b,c){c?35716==b?(a=Y.getShaderInfoLog(T[a]),null===a&&(a="(unknown error)"),G[c>>2]=a.length+1):35720==b?(a=Y.getShaderSource(T[a]),G[c>>2]=null===a||0==a.length?0:a.length+1):G[c>>2]=Y.getShaderParameter(T[a],b):V(1281)},Ka:function(a){if(ub[a])return ub[a];switch(a){case 7939:var b=Y.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+
d}));b=Z(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Y.getParameter(a))||V(1280);b=Z(b);break;case 7938:b=Y.getParameter(7938);b=2<=X.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Z(b);break;case 35724:b=Y.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Z(b);break;default:return V(1280),0}return ub[a]=b},Ja:function(a,b){if(2>X.version)return V(1282),0;
var c=vb[a];if(c)return 0>b||b>=c.length?(V(1281),0):c[b];switch(a){case 7939:return c=Y.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Z(d)}),c=vb[a]=c,0>b||b>=c.length?(V(1281),0):c[b];default:return V(1280),0}},j:function(a,b){b=E(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=U[a]&&U[a].Mb[b])&&0<=c&&c<a[0]?a[1]+c:-1},Ba:function(a){Y.linkProgram(R[a]);var b=R[a];a=
U[a]={Mb:{},Eb:0,zb:-1,Ab:-1};for(var c=a.Mb,d=Y.getProgramParameter(b,35718),f=0;f<d;++f){var l=Y.getActiveUniform(b,f),k=l.name;a.Eb=Math.max(a.Eb,k.length+1);"]"==k.slice(-1)&&(k=k.slice(0,k.lastIndexOf("[")));var n=Y.getUniformLocation(b,k);if(n){var m=W(S);c[k]=[l.size,m];S[m]=n;for(var q=1;q<l.size;++q)n=Y.getUniformLocation(b,k+"["+q+"]"),m=W(S),S[m]=n}}},J:function(a,b){Y.polygonOffset(a,b)},i:function(a){Y.readBuffer(a)},pa:function(a,b,c,d){Y.scissor(a,b,c,d)},ya:function(a,b,c,d){for(var f=
"",l=0;l<b;++l){var k=d?G[d+4*l>>2]:-1;f+=E(G[c+4*l>>2],0>k?void 0:k)}Y.shaderSource(T[a],f)},Fa:function(a,b,c){Y.stencilFunc(a,b,c)},w:function(a,b,c,d){Y.stencilFuncSeparate(a,b,c,d)},r:function(a){Y.stencilMask(a)},Ea:function(a,b,c){Y.stencilOp(a,b,c)},v:function(a,b,c,d){Y.stencilOpSeparate(a,b,c,d)},z:function(a,b){Y.uniform1i(S[a],b)},o:function(a){Y.useProgram(R[a])},ja:function(a,b){Y.vertexAttribDivisor(a,b)},ka:function(a,b,c,d,f,l){Y.vertexAttribPointer(a,b,c,!!d,f,l)},ra:function(a,
b,c,d){Y.viewport(a,b,c,d)},memory:A,Oa:function(){e.Kb=function(a){0!=Cb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",e.Kb)},Na:function(){e.Lb=function(a){a=a.clipboardData.getData("text");oa([a])};window.addEventListener("paste",e.Lb)},n:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Db()});document.body.append(a)},m:function(){document.getElementById("_sokol_app_input_element").focus()},
l:function(){document.getElementById("_sokol_app_input_element").blur()},Ma:function(){window.removeEventListener("beforeunload",e.Kb)},La:function(){window.removeEventListener("paste",e.Lb)},table:la};
(function(){function a(f){e.asm=f.exports;I--;e.monitorRunDependencies&&e.monitorRunDependencies(I);0==I&&(null!==Fa&&(clearInterval(Fa),Fa=null),J&&(f=J,J=null,f()))}function b(f){a(f.instance)}function c(f){return Ka().then(function(l){return WebAssembly.instantiate(l,d)}).then(f,function(l){y("failed to asynchronously prepare wasm: "+l);ja(l)})}var d={a:Eb};I++;e.monitorRunDependencies&&e.monitorRunDependencies(I);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return y("Module.instantiateWasm callback failed with error: "+
f),!1}(function(){if(z||"function"!==typeof WebAssembly.instantiateStreaming||Ha()||Ga("file://")||"function"!==typeof fetch)return c(b);fetch(K,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(l){y("wasm streaming compile failed: "+l);y("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
var La=e.___wasm_call_ctors=function(){return(La=e.___wasm_call_ctors=e.asm.Qa).apply(null,arguments)},Db=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Db=e.__sapp_emsc_notify_keyboard_hidden=e.asm.Ra).apply(null,arguments)};e.___em_js__sapp_js_create_textfield=function(){return(e.___em_js__sapp_js_create_textfield=e.asm.Sa).apply(null,arguments)};e.___em_js__sapp_js_focus_textfield=function(){return(e.___em_js__sapp_js_focus_textfield=e.asm.Ta).apply(null,arguments)};
e.___em_js__sapp_js_unfocus_textfield=function(){return(e.___em_js__sapp_js_unfocus_textfield=e.asm.Ua).apply(null,arguments)};e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.Va).apply(null,arguments)};var Cb=e.__sapp_html5_get_ask_leave_site=function(){return(Cb=e.__sapp_html5_get_ask_leave_site=e.asm.Wa).apply(null,arguments)};e.___em_js__sapp_add_js_hook_beforeunload=function(){return(e.___em_js__sapp_add_js_hook_beforeunload=e.asm.Xa).apply(null,arguments)};
e.___em_js__sapp_remove_js_hook_beforeunload=function(){return(e.___em_js__sapp_remove_js_hook_beforeunload=e.asm.Ya).apply(null,arguments)};e.___em_js__sapp_add_js_hook_clipboard=function(){return(e.___em_js__sapp_add_js_hook_clipboard=e.asm.Za).apply(null,arguments)};e.___em_js__sapp_remove_js_hook_clipboard=function(){return(e.___em_js__sapp_remove_js_hook_clipboard=e.asm._a).apply(null,arguments)};
e.___em_js__sapp_js_write_clipboard=function(){return(e.___em_js__sapp_js_write_clipboard=e.asm.$a).apply(null,arguments)};e._main=function(){return(e._main=e.asm.ab).apply(null,arguments)};e.___em_js__stm_js_perfnow=function(){return(e.___em_js__stm_js_perfnow=e.asm.bb).apply(null,arguments)};e.__saudio_emsc_pull=function(){return(e.__saudio_emsc_pull=e.asm.cb).apply(null,arguments)};e.___em_js__saudio_js_init=function(){return(e.___em_js__saudio_js_init=e.asm.db).apply(null,arguments)};
e.___em_js__saudio_js_shutdown=function(){return(e.___em_js__saudio_js_shutdown=e.asm.eb).apply(null,arguments)};e.___em_js__saudio_js_sample_rate=function(){return(e.___em_js__saudio_js_sample_rate=e.asm.fb).apply(null,arguments)};e.___em_js__saudio_js_buffer_frames=function(){return(e.___em_js__saudio_js_buffer_frames=e.asm.gb).apply(null,arguments)};e.___em_js__sfetch_js_send_head_request=function(){return(e.___em_js__sfetch_js_send_head_request=e.asm.hb).apply(null,arguments)};
e.___em_js__sfetch_js_send_get_request=function(){return(e.___em_js__sfetch_js_send_get_request=e.asm.ib).apply(null,arguments)};e.__sfetch_emsc_head_response=function(){return(e.__sfetch_emsc_head_response=e.asm.jb).apply(null,arguments)};e.__sfetch_emsc_get_response=function(){return(e.__sfetch_emsc_get_response=e.asm.kb).apply(null,arguments)};e.__sfetch_emsc_failed_http_status=function(){return(e.__sfetch_emsc_failed_http_status=e.asm.lb).apply(null,arguments)};
e.__sfetch_emsc_failed_buffer_too_small=function(){return(e.__sfetch_emsc_failed_buffer_too_small=e.asm.mb).apply(null,arguments)};var O=e._malloc=function(){return(O=e._malloc=e.asm.nb).apply(null,arguments)},qa=e.stackSave=function(){return(qa=e.stackSave=e.asm.ob).apply(null,arguments)},ra=e.stackRestore=function(){return(ra=e.stackRestore=e.asm.pb).apply(null,arguments)},B=e.stackAlloc=function(){return(B=e.stackAlloc=e.asm.qb).apply(null,arguments)};
e.dynCall_vi=function(){return(e.dynCall_vi=e.asm.rb).apply(null,arguments)};e.dynCall_v=function(){return(e.dynCall_v=e.asm.sb).apply(null,arguments)};var P=e.dynCall_iiii=function(){return(P=e.dynCall_iiii=e.asm.tb).apply(null,arguments)},Bb=e.dynCall_idi=function(){return(Bb=e.dynCall_idi=e.asm.ub).apply(null,arguments)},Fb;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}J=function Gb(){Fb||Hb();Fb||(J=Gb)};
function Hb(a){function b(){if(!Fb&&(Fb=!0,e.calledRun=!0,!ma)){ya(Aa);ya(Ba);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Ib){var c=a,d=e._main;c=c||[];var f=c.length+1,l=B(4*(f+1));G[l>>2]=ua(aa);for(var k=1;k<f;k++)G[(l>>2)+k]=ua(c[k-1]);G[(l>>2)+f]=0;try{var n=d(f,l);if(!noExitRuntime||0!==n){if(!noExitRuntime&&(ma=!0,e.onExit))e.onExit(n);t(n,new ia(n))}}catch(m){m instanceof ia||("unwind"==m?noExitRuntime=!0:((c=m)&&"object"===typeof m&&m.stack&&(c=[m,m.stack]),y("exception thrown: "+
c),t(1,m)))}finally{}}if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)c=e.postRun.shift(),Da.unshift(c);ya(Da)}}a=a||r;if(!(0<I)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ea();ya(za);0<I||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Hb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();
var Ib=!0;e.noInitialRun&&(Ib=!1);noExitRuntime=!0;Hb();
