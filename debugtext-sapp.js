
var e;e||(e=typeof Module !== 'undefined' ? Module : {});var g={},l;for(l in e)e.hasOwnProperty(l)&&(g[l]=e[l]);var r=[],aa="./this.program";function t(a,b){throw b;}var ba=!1,u=!1,ca=!1,da=!1;ba="object"===typeof window;u="function"===typeof importScripts;ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;da=!ba&&!ca&&!u;var v="",ea,x,fa,ha;
if(ca)v=u?require("path").dirname(v)+"/":__dirname+"/",ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);return fa.readFileSync(a,b?null:"utf8")},x=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",
ja),t=function(a){process.exit(a)},e.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),x=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ba||u)u?v=self.location.href:document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(x=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ka=e.print||console.log.bind(console),y=e.printErr||console.warn.bind(console);for(l in g)g.hasOwnProperty(l)&&(e[l]=g[l]);g=null;e.arguments&&(r=e.arguments);e.thisProgram&&(aa=e.thisProgram);e.quit&&(t=e.quit);var z;e.wasmBinary&&(z=e.wasmBinary);var noExitRuntime;e.noExitRuntime&&(noExitRuntime=e.noExitRuntime);"object"!==typeof WebAssembly&&y("no native wasm support detected");var A,la=new WebAssembly.Table({initial:19,maximum:19,element:"anyfunc"}),ma=!1;
function assert(a,b){a||ja("Assertion failed: "+b)}function na(){var a=e.__sapp_emsc_onpaste;assert(a,"Cannot call unknown function _sapp_emsc_onpaste, make sure it is exported");return a}
function oa(a){var b=["string"],c={string:function(m){var p=0;if(null!==m&&void 0!==m&&0!==m){var q=(m.length<<2)+1;p=B(q);C(m,D,p,q)}return p},array:function(m){var p=B(m.length);pa.set(m,p);return p}},d=na(),f=[],k=0;if(a)for(var h=0;h<a.length;h++){var n=c[b[h]];n?(0===k&&(k=qa()),f[h]=n(a[h])):f[h]=a[h]}d.apply(null,f);0!==k&&ra(k)}var sa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function E(a,b){if(a){var c=D,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&sa)a=sa.decode(c.subarray(a,b));else{for(d="";a<b;){var f=c[a++];if(f&128){var k=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|k);else{var h=c[a++]&63;f=224==(f&240)?(f&15)<<12|k<<6|h:(f&7)<<18|k<<12|h<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}a=d}}else a="";return a}
function C(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var k=0;k<a.length;++k){var h=a.charCodeAt(k);if(55296<=h&&57343>=h){var n=a.charCodeAt(++k);h=65536+((h&1023)<<10)|n&1023}if(127>=h){if(c>=d)break;b[c++]=h}else{if(2047>=h){if(c+1>=d)break;b[c++]=192|h>>6}else{if(65535>=h){if(c+2>=d)break;b[c++]=224|h>>12}else{if(c+3>=d)break;b[c++]=240|h>>18;b[c++]=128|h>>12&63}b[c++]=128|h>>6&63}b[c++]=128|h&63}}b[c]=0;return c-f}
function ta(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ua(a){var b=ta(a)+1,c=B(b);C(a,pa,c,b);return c}var F,pa,D,va,wa,G,xa,ya,H;
function za(a){F=a;e.HEAP8=pa=new Int8Array(a);e.HEAP16=va=new Int16Array(a);e.HEAP32=G=new Int32Array(a);e.HEAPU8=D=new Uint8Array(a);e.HEAPU16=wa=new Uint16Array(a);e.HEAPU32=xa=new Uint32Array(a);e.HEAPF32=ya=new Float32Array(a);e.HEAPF64=H=new Float64Array(a)}var Aa=e.INITIAL_MEMORY||33554432;e.wasmMemory?A=e.wasmMemory:A=new WebAssembly.Memory({initial:Aa/65536,maximum:32768});A&&(F=A.buffer);Aa=F.byteLength;za(F);G[41356]=5408464;
function Ba(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.$b;"number"===typeof c?void 0===b.Pb?e.dynCall_v(c):e.dynCall_vi(c,b.Pb):c(void 0===b.Pb?null:b.Pb)}}}var Ca=[],Da=[],Ea=[],Fa=[],Ga=[];function Ha(){var a=e.preRun.shift();Ca.unshift(a)}var I=0,Ia=null,J=null;e.preloadedImages={};e.preloadedAudios={};function ja(a){if(e.onAbort)e.onAbort(a);ka(a);y(a);ma=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}
function Ja(a){var b=K;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Ka(){return Ja("data:application/octet-stream;base64,")}var K="debugtext-sapp.wasm";if(!Ka()){var La=K;K=e.locateFile?e.locateFile(La,v):v+La}function Ma(){try{if(z)return new Uint8Array(z);if(x)return x(K);throw"both async and sync fetching of the wasm failed";}catch(a){ja(a)}}
function Na(){return z||!ba&&!u||"function"!==typeof fetch||Ja("file://")?new Promise(function(a){a(Ma())}):fetch(K,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+K+"'";return a.arrayBuffer()}).catch(function(){return Ma()})}Da.push({$b:function(){Oa()}});function Pa(){for(var a=L.length-1;0<=a;--a)Qa(a);L=[];Ra=[]}var Ra=[];function Sa(){if(Ta.Tb&&Ua.Nb)for(var a=0;a<Ra.length;++a){var b=Ra[a];Ra.splice(a,1);--a;b.nc.apply(null,b.ec)}}var L=[];
function Qa(a){var b=L[a];b.target.removeEventListener(b.Gb,b.Yb,b.Hb);L.splice(a,1)}function M(a){function b(d){++Ta.Tb;Ua=a;Sa();a.Kb(d);Sa();--Ta.Tb}if(a.Ib)a.Yb=b,a.target.addEventListener(a.Gb,b,a.Hb),L.push(a),Va||(Fa.push(Pa),Va=!0);else for(var c=0;c<L.length;++c)L[c].target==a.target&&L[c].Gb==a.Gb&&Qa(c--)}var Ta={},Va,Ua,Wa,Xa,Ya,Za,$a,ab,bb,cb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function N(a){a=2<a?E(a):a;return cb[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function db(a){return 0>cb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function eb(a,b,c,d,f,k){Wa||(Wa=O(164));a={target:N(a),Nb:!0,Gb:k,Ib:d,Kb:function(h){var n=Wa,m=n>>2;G[m]=h.location;G[m+1]=h.ctrlKey;G[m+2]=h.shiftKey;G[m+3]=h.altKey;G[m+4]=h.metaKey;G[m+5]=h.repeat;G[m+6]=h.charCode;G[m+7]=h.keyCode;G[m+8]=h.which;C(h.key||"",D,n+36,32);C(h.code||"",D,n+68,32);C(h.char||"",D,n+100,32);C(h.locale||"",D,n+132,32);P(d,f,n,b)&&h.preventDefault()},Hb:c};M(a)}
function fb(a,b,c){G[a>>2]=b.screenX;G[a+4>>2]=b.screenY;G[a+8>>2]=b.clientX;G[a+12>>2]=b.clientY;G[a+16>>2]=b.ctrlKey;G[a+20>>2]=b.shiftKey;G[a+24>>2]=b.altKey;G[a+28>>2]=b.metaKey;va[a+32>>1]=b.button;va[a+34>>1]=b.buttons;var d=b.movementY||b.screenY-Ya;G[a+36>>2]=b.movementX||b.screenX-Xa;G[a+40>>2]=d;c=db(c);G[a+44>>2]=b.clientX-c.left;G[a+48>>2]=b.clientY-c.top;"wheel"!==b.type&&(Xa=b.screenX,Ya=b.screenY)}
function Q(a,b,c,d,f,k){Za||(Za=O(64));a=N(a);M({target:a,Nb:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,Gb:k,Ib:d,Kb:function(h){h=h||event;fb(Za,h,a);P(d,f,Za,b)&&h.preventDefault()},Hb:c})}
function gb(a,b,c,d){$a||($a=O(36));a=N(a);M({target:a,Gb:"resize",Ib:d,Kb:function(f){f=f||event;if(f.target==a){var k=$a,h=document.body;G[k>>2]=f.detail;G[k+4>>2]=h.clientWidth;G[k+8>>2]=h.clientHeight;G[k+12>>2]=innerWidth;G[k+16>>2]=innerHeight;G[k+20>>2]=outerWidth;G[k+24>>2]=outerHeight;G[k+28>>2]=pageXOffset;G[k+32>>2]=pageYOffset;P(d,10,k,b)&&f.preventDefault()}},Hb:c})}
function hb(a,b,c,d,f,k){ab||(ab=O(1684));a=N(a);M({target:a,Nb:"touchstart"==k||"touchend"==k,Gb:k,Ib:d,Kb:function(h){for(var n={},m=h.touches,p=0;p<m.length;++p){var q=m[p];n[q.identifier]=q}m=h.changedTouches;for(p=0;p<m.length;++p)q=m[p],q.bc=1,n[q.identifier]=q;m=h.targetTouches;for(p=0;p<m.length;++p)n[m[p].identifier].cc=1;m=ab;q=m>>2;G[q+1]=h.ctrlKey;G[q+2]=h.shiftKey;G[q+3]=h.altKey;G[q+4]=h.metaKey;q+=5;var jb=db(a),kb=0;for(p in n){var w=n[p];G[q]=w.identifier;G[q+1]=w.screenX;G[q+2]=
w.screenY;G[q+3]=w.clientX;G[q+4]=w.clientY;G[q+5]=w.pageX;G[q+6]=w.pageY;G[q+7]=w.bc;G[q+8]=w.cc;G[q+9]=w.clientX-jb.left;G[q+10]=w.clientY-jb.top;q+=13;if(31<++kb)break}G[m>>2]=kb;P(d,f,m,b)&&h.preventDefault()},Hb:c})}function ib(a,b,c,d,f,k){a={target:N(a),Gb:k,Ib:d,Kb:function(h){h=h||event;P(d,f,0,b)&&h.preventDefault()},Hb:c};M(a)}
function lb(a,b,c,d){bb||(bb=O(96));M({target:a,Nb:!0,Gb:"wheel",Ib:d,Kb:function(f){f=f||event;var k=bb;fb(k,f,a);H[k+64>>3]=f.deltaX;H[k+72>>3]=f.deltaY;H[k+80>>3]=f.deltaZ;G[k+88>>2]=f.deltaMode;P(d,9,k,b)&&f.preventDefault()},Hb:c})}
function mb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,k){b.drawArraysInstancedANGLE(c,d,f,k)},a.drawElementsInstanced=function(c,d,f,k,h){b.drawElementsInstancedANGLE(c,d,f,k,h)})}
function nb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function ob(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function pb(a){a.hc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}var qb=1,rb=[],R=[],sb=[],tb=[],ub=[],S=[],T=[],vb=[],wb=[],U={},xb={},yb={};function V(a){zb||(zb=a)}function W(a){for(var b=qb++,c=a.length;c<b;c++)a[c]=null;return b}
function Ab(a){a||(a=X);if(!a.ac){a.ac=!0;var b=a.Ob;mb(b);nb(b);ob(b);pb(b);b.ic=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod EXT_texture_norm16 WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2 WEBKIT_WEBGL_compressed_texture_pvrtc".split(" ");(b.getSupportedExtensions()||
[]).forEach(function(d){-1!=c.indexOf(d)&&b.getExtension(d)})}}var zb,X,Bb=["default","low-power","high-performance"];function Cb(a,b,c,d){for(var f=0;f<a;f++){var k=Y[c](),h=k&&W(d);k?(k.name=h,d[h]=k):V(1282);G[b+4*f>>2]=h}}
function Db(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>X.version){V(1282);return}c=2*(Y.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>X.version){V(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":V(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:V(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)G[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){V(1280);y("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:V(1280);y("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}G[b>>2]=c}else V(1281)}
function Z(a){var b=ta(a)+1,c=O(b);C(a,D,c,b);return c}function Eb(a){a-=5120;return 0==a?pa:1==a?D:2==a?va:4==a?G:6==a?ya:5==a||28922==a||28520==a||30779==a||30782==a?xa:wa}function Fb(a,b,c,d,f){a=Eb(a);var k=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(f>>k,f+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<k)+4-1&-4)>>k)}
var Y,Jb={Y:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},ha:function(a,b,c){a=N(a);if(!a)return-4;a=db(a);H[b>>3]=a.width;H[c>>3]=a.height;return 0},Va:function(a,b,c){D.copyWithin(a,b,b+c)},Ma:function(a,b){function c(d){Gb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Wa:function(a){a>>>=0;var b=D.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);
a:{try{A.grow(Math.min(2147483648,d)-F.byteLength+65535>>>16);za(A.buffer);var f=1;break a}catch(k){}f=void 0}if(f)return!0}return!1},T:function(a,b,c){a=N(a);if(!a)return-4;a.width=b;a.height=c;return 0},ba:function(a,b,c,d){eb(a,b,c,d,2,"keydown");return 0},$:function(a,b,c,d){eb(a,b,c,d,1,"keypress");return 0},aa:function(a,b,c,d){eb(a,b,c,d,3,"keyup");return 0},A:function(a,b,c,d){Q(a,b,c,d,5,"mousedown");return 0},ea:function(a,b,c,d){Q(a,b,c,d,33,"mouseenter");return 0},da:function(a,b,c,d){Q(a,
b,c,d,34,"mouseleave");return 0},fa:function(a,b,c,d){Q(a,b,c,d,8,"mousemove");return 0},ga:function(a,b,c,d){Q(a,b,c,d,6,"mouseup");return 0},_a:function(a,b,c,d){gb(a,b,c,d);return 0},W:function(a,b,c,d){hb(a,b,c,d,25,"touchcancel");return 0},X:function(a,b,c,d){hb(a,b,c,d,23,"touchend");return 0},Z:function(a,b,c,d){hb(a,b,c,d,24,"touchmove");return 0},_:function(a,b,c,d){hb(a,b,c,d,22,"touchstart");return 0},V:function(a,b,c,d){ib(a,b,c,d,31,"webglcontextlost");return 0},U:function(a,b,c,d){ib(a,
b,c,d,32,"webglcontextrestored");return 0},ca:function(a,b,c,d){a=N(a);return"undefined"!==typeof a.onwheel?(lb(a,b,c,d),0):-1},I:function(a,b){var c={};b>>=2;c.alpha=!!G[b];c.depth=!!G[b+1];c.stencil=!!G[b+2];c.antialias=!!G[b+3];c.premultipliedAlpha=!!G[b+4];c.preserveDrawingBuffer=!!G[b+5];c.powerPreference=Bb[G[b+6]];c.failIfMajorPerformanceCaveat=!!G[b+7];c.Ub=G[b+8];c.kc=G[b+9];c.Sb=G[b+10];c.Zb=G[b+11];c.lc=G[b+12];c.mc=G[b+13];if(a=N(a))if(c.Zb)c=-1;else if(a=1<c.Ub?a.getContext("webgl2",
c):a.getContext("webgl",c)){b=W(wb);var d={jc:b,attributes:c,version:c.Ub,Ob:a};a.canvas&&(a.canvas.dc=d);wb[b]=d;("undefined"===typeof c.Sb||c.Sb)&&Ab(d);c=b}else c=0;else c=-4;return c},ua:function(a,b){a=wb[a];b=E(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&mb(Y);"OES_vertex_array_object"==b&&nb(Y);"WEBGL_draw_buffers"==b&&ob(Y);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&pb(Y);return!!a.Ob.getExtension(b)},Ja:function(a){a>>=2;for(var b=0;14>b;++b)G[a+b]=0;G[a]=
G[a+1]=G[a+3]=G[a+4]=G[a+8]=G[a+10]=1},ya:function(a){X=wb[a];e.fc=Y=X&&X.Ob;return!a||Y?0:-5},i:function(a){Y.activeTexture(a)},G:function(a,b){Y.attachShader(R[a],T[b])},b:function(a,b){35051==a?Y.Rb=b:35052==a&&(Y.Jb=b);Y.bindBuffer(a,rb[b])},g:function(a,b){Y.bindFramebuffer(a,sb[b])},Ha:function(a,b){Y.bindRenderbuffer(a,tb[b])},a:function(a,b){Y.bindTexture(a,ub[b])},S:function(a){Y.bindVertexArray(vb[a])},O:function(a,b,c,d){Y.blendColor(a,b,c,d)},P:function(a,b){Y.blendEquationSeparate(a,
b)},Q:function(a,b,c,d){Y.blendFuncSeparate(a,b,c,d)},p:function(a,b,c,d,f,k,h,n,m,p){Y.blitFramebuffer(a,b,c,d,f,k,h,n,m,p)},J:function(a,b,c,d){2<=X.version?c?Y.bufferData(a,D,d,c,b):Y.bufferData(a,b,d):Y.bufferData(a,c?D.subarray(c,c+b):b,d)},l:function(a,b,c,d){2<=X.version?Y.bufferSubData(a,b,D,d,c):Y.bufferSubData(a,b,D.subarray(d,d+c))},ka:function(a){Y.clear(a)},na:function(a,b,c,d){Y.clearColor(a,b,c,d)},ma:function(a){Y.clearDepth(a)},la:function(a){Y.clearStencil(a)},u:function(a,b,c,d){Y.colorMask(!!a,
!!b,!!c,!!d)},sa:function(a){Y.compileShader(T[a])},Da:function(a,b,c,d,f,k,h,n){2<=X.version?Y.Jb?Y.compressedTexImage2D(a,b,c,d,f,k,h,n):Y.compressedTexImage2D(a,b,c,d,f,k,D,n,h):Y.compressedTexImage2D(a,b,c,d,f,k,n?D.subarray(n,n+h):null)},Ba:function(a,b,c,d,f,k,h,n,m){Y.Jb?Y.compressedTexImage3D(a,b,c,d,f,k,h,n,m):Y.compressedTexImage3D(a,b,c,d,f,k,h,D,m,n)},za:function(){var a=W(R),b=Y.createProgram();b.name=a;R[a]=b;return a},va:function(a){var b=W(T);T[b]=Y.createShader(a);return b},L:function(a){Y.cullFace(a)},
C:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],f=rb[d];f&&(Y.deleteBuffer(f),f.name=0,rb[d]=null,d==Y.Rb&&(Y.Rb=0),d==Y.Jb&&(Y.Jb=0))}},h:function(a,b){for(var c=0;c<a;++c){var d=G[b+4*c>>2],f=sb[d];f&&(Y.deleteFramebuffer(f),f.name=0,sb[d]=null)}},s:function(a){if(a){var b=R[a];b?(Y.deleteProgram(b),b.name=0,R[a]=null,U[a]=null):V(1281)}},j:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],f=tb[d];f&&(Y.deleteRenderbuffer(f),f.name=0,tb[d]=null)}},t:function(a){if(a){var b=T[a];b?(Y.deleteShader(b),
T[a]=null):V(1281)}},B:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],f=ub[d];f&&(Y.deleteTexture(f),f.name=0,ub[d]=null)}},Oa:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2];Y.deleteVertexArray(vb[d]);vb[d]=null}},x:function(a){Y.depthFunc(a)},w:function(a){Y.depthMask(!!a)},c:function(a){Y.disable(a)},R:function(a){Y.disableVertexAttribArray(a)},Xa:function(a,b,c){Y.drawArrays(a,b,c)},Ya:function(a,b,c,d){Y.drawElements(a,b,c,d)},f:function(a){Y.enable(a)},Za:function(a){Y.enableVertexAttribArray(a)},
M:function(a){Y.frontFace(a)},K:function(a,b){Cb(a,b,"createBuffer",rb)},Ia:function(a,b){Cb(a,b,"createRenderbuffer",tb)},Ea:function(a,b){Cb(a,b,"createTexture",ub)},Na:function(a,b){Cb(a,b,"createVertexArray",vb)},qa:function(a,b){return Y.getAttribLocation(R[a],E(b))},d:function(a,b){Db(a,b)},wa:function(a,b,c,d){a=Y.getProgramInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(G[c>>2]=b)},F:function(a,b,c){if(c)if(a>=qb)V(1281);else{var d=U[a];if(d)if(35716==b)a=Y.getProgramInfoLog(R[a]),
null===a&&(a="(unknown error)"),G[c>>2]=a.length+1;else if(35719==b)G[c>>2]=d.Qb;else if(35722==b){if(-1==d.Lb){a=R[a];var f=Y.getProgramParameter(a,35721);for(b=d.Lb=0;b<f;++b)d.Lb=Math.max(d.Lb,Y.getActiveAttrib(a,b).name.length+1)}G[c>>2]=d.Lb}else if(35381==b){if(-1==d.Mb)for(a=R[a],f=Y.getProgramParameter(a,35382),b=d.Mb=0;b<f;++b)d.Mb=Math.max(d.Mb,Y.getActiveUniformBlockName(a,b).length+1);G[c>>2]=d.Mb}else G[c>>2]=Y.getProgramParameter(R[a],b);else V(1282)}else V(1281)},ra:function(a,b,c,
d){a=Y.getShaderInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(G[c>>2]=b)},D:function(a,b,c){c?35716==b?(a=Y.getShaderInfoLog(T[a]),null===a&&(a="(unknown error)"),G[c>>2]=a.length+1):35720==b?(a=Y.getShaderSource(T[a]),G[c>>2]=null===a||0==a.length?0:a.length+1):G[c>>2]=Y.getShaderParameter(T[a],b):V(1281)},Qa:function(a){if(xb[a])return xb[a];switch(a){case 7939:var b=Y.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Z(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=
Y.getParameter(a))||V(1280);b=Z(b);break;case 7938:b=Y.getParameter(7938);b=2<=X.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Z(b);break;case 35724:b=Y.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Z(b);break;default:return V(1280),0}return xb[a]=b},Pa:function(a,b){if(2>X.version)return V(1282),0;var c=yb[a];if(c)return 0>b||b>=c.length?(V(1281),0):c[b];switch(a){case 7939:return c=
Y.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Z(d)}),c=yb[a]=c,0>b||b>=c.length?(V(1281),0):c[b];default:return V(1280),0}},k:function(a,b){b=E(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=U[a]&&U[a].Xb[b])&&0<=c&&c<a[0]?a[1]+c:-1},xa:function(a){Y.linkProgram(R[a]);var b=R[a];a=U[a]={Xb:{},Qb:0,Lb:-1,Mb:-1};for(var c=a.Xb,d=Y.getProgramParameter(b,35718),f=0;f<d;++f){var k=
Y.getActiveUniform(b,f),h=k.name;a.Qb=Math.max(a.Qb,h.length+1);"]"==h.slice(-1)&&(h=h.slice(0,h.lastIndexOf("[")));var n=Y.getUniformLocation(b,h);if(n){var m=W(S);c[h]=[k.size,m];S[m]=n;for(var p=1;p<k.size;++p)n=Y.getUniformLocation(b,h+"["+p+"]"),m=W(S),S[m]=n}}},N:function(a,b){Y.polygonOffset(a,b)},q:function(a){Y.readBuffer(a)},Fa:function(a,b,c,d){Y.renderbufferStorage(a,b,c,d)},Ga:function(a,b,c,d,f){Y.renderbufferStorageMultisample(a,b,c,d,f)},oa:function(a,b,c,d){Y.scissor(a,b,c,d)},ta:function(a,
b,c,d){for(var f="",k=0;k<b;++k){var h=d?G[d+4*k>>2]:-1;f+=E(G[c+4*k>>2],0>h?void 0:h)}Y.shaderSource(T[a],f)},La:function(a,b,c){Y.stencilFunc(a,b,c)},z:function(a,b,c,d){Y.stencilFuncSeparate(a,b,c,d)},v:function(a){Y.stencilMask(a)},Ka:function(a,b,c){Y.stencilOp(a,b,c)},y:function(a,b,c,d){Y.stencilOpSeparate(a,b,c,d)},Ca:function(a,b,c,d,f,k,h,n,m){if(2<=X.version)if(Y.Jb)Y.texImage2D(a,b,c,d,f,k,h,n,m);else if(m){var p=Eb(n);Y.texImage2D(a,b,c,d,f,k,h,n,p,m>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else Y.texImage2D(a,
b,c,d,f,k,h,n,null);else Y.texImage2D(a,b,c,d,f,k,h,n,m?Fb(n,h,d,f,m):null)},Aa:function(a,b,c,d,f,k,h,n,m,p){if(Y.Jb)Y.texImage3D(a,b,c,d,f,k,h,n,m,p);else if(p){var q=Eb(m);Y.texImage3D(a,b,c,d,f,k,h,n,m,q,p>>31-Math.clz32(q.BYTES_PER_ELEMENT))}else Y.texImage3D(a,b,c,d,f,k,h,n,m,null)},H:function(a,b,c){Y.texParameterf(a,b,c)},e:function(a,b,c){Y.texParameteri(a,b,c)},E:function(a,b){Y.uniform1i(S[a],b)},r:function(a){Y.useProgram(R[a])},ia:function(a,b){Y.vertexAttribDivisor(a,b)},ja:function(a,
b,c,d,f,k){Y.vertexAttribPointer(a,b,c,!!d,f,k)},pa:function(a,b,c,d){Y.viewport(a,b,c,d)},memory:A,Ua:function(){e.Vb=function(a){0!=Hb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",e.Vb)},Ta:function(){e.Wb=function(a){a=a.clipboardData.getData("text");oa([a])};window.addEventListener("paste",e.Wb)},o:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Ib()});
document.body.append(a)},n:function(){document.getElementById("_sokol_app_input_element").focus()},m:function(){document.getElementById("_sokol_app_input_element").blur()},Sa:function(){window.removeEventListener("beforeunload",e.Vb)},Ra:function(){window.removeEventListener("paste",e.Wb)},table:la};
(function(){function a(f){e.asm=f.exports;I--;e.monitorRunDependencies&&e.monitorRunDependencies(I);0==I&&(null!==Ia&&(clearInterval(Ia),Ia=null),J&&(f=J,J=null,f()))}function b(f){a(f.instance)}function c(f){return Na().then(function(k){return WebAssembly.instantiate(k,d)}).then(f,function(k){y("failed to asynchronously prepare wasm: "+k);ja(k)})}var d={a:Jb};I++;e.monitorRunDependencies&&e.monitorRunDependencies(I);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return y("Module.instantiateWasm callback failed with error: "+
f),!1}(function(){if(z||"function"!==typeof WebAssembly.instantiateStreaming||Ka()||Ja("file://")||"function"!==typeof fetch)return c(b);fetch(K,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(k){y("wasm streaming compile failed: "+k);y("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
var Oa=e.___wasm_call_ctors=function(){return(Oa=e.___wasm_call_ctors=e.asm.$a).apply(null,arguments)},O=e._malloc=function(){return(O=e._malloc=e.asm.ab).apply(null,arguments)},Ib=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Ib=e.__sapp_emsc_notify_keyboard_hidden=e.asm.bb).apply(null,arguments)};e.___em_js__sapp_js_create_textfield=function(){return(e.___em_js__sapp_js_create_textfield=e.asm.cb).apply(null,arguments)};
e.___em_js__sapp_js_focus_textfield=function(){return(e.___em_js__sapp_js_focus_textfield=e.asm.db).apply(null,arguments)};e.___em_js__sapp_js_unfocus_textfield=function(){return(e.___em_js__sapp_js_unfocus_textfield=e.asm.eb).apply(null,arguments)};e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.fb).apply(null,arguments)};var Hb=e.__sapp_html5_get_ask_leave_site=function(){return(Hb=e.__sapp_html5_get_ask_leave_site=e.asm.gb).apply(null,arguments)};
e.___em_js__sapp_add_js_hook_beforeunload=function(){return(e.___em_js__sapp_add_js_hook_beforeunload=e.asm.hb).apply(null,arguments)};e.___em_js__sapp_remove_js_hook_beforeunload=function(){return(e.___em_js__sapp_remove_js_hook_beforeunload=e.asm.ib).apply(null,arguments)};e.___em_js__sapp_add_js_hook_clipboard=function(){return(e.___em_js__sapp_add_js_hook_clipboard=e.asm.jb).apply(null,arguments)};
e.___em_js__sapp_remove_js_hook_clipboard=function(){return(e.___em_js__sapp_remove_js_hook_clipboard=e.asm.kb).apply(null,arguments)};e.___em_js__sapp_js_write_clipboard=function(){return(e.___em_js__sapp_js_write_clipboard=e.asm.lb).apply(null,arguments)};e._main=function(){return(e._main=e.asm.mb).apply(null,arguments)};e.___em_js__stm_js_perfnow=function(){return(e.___em_js__stm_js_perfnow=e.asm.nb).apply(null,arguments)};
e.__saudio_emsc_pull=function(){return(e.__saudio_emsc_pull=e.asm.ob).apply(null,arguments)};e.___em_js__saudio_js_init=function(){return(e.___em_js__saudio_js_init=e.asm.pb).apply(null,arguments)};e.___em_js__saudio_js_shutdown=function(){return(e.___em_js__saudio_js_shutdown=e.asm.qb).apply(null,arguments)};e.___em_js__saudio_js_sample_rate=function(){return(e.___em_js__saudio_js_sample_rate=e.asm.rb).apply(null,arguments)};
e.___em_js__saudio_js_buffer_frames=function(){return(e.___em_js__saudio_js_buffer_frames=e.asm.sb).apply(null,arguments)};e.___em_js__sfetch_js_send_head_request=function(){return(e.___em_js__sfetch_js_send_head_request=e.asm.tb).apply(null,arguments)};e.___em_js__sfetch_js_send_get_request=function(){return(e.___em_js__sfetch_js_send_get_request=e.asm.ub).apply(null,arguments)};e.__sfetch_emsc_head_response=function(){return(e.__sfetch_emsc_head_response=e.asm.vb).apply(null,arguments)};
e.__sfetch_emsc_get_response=function(){return(e.__sfetch_emsc_get_response=e.asm.wb).apply(null,arguments)};e.__sfetch_emsc_failed_http_status=function(){return(e.__sfetch_emsc_failed_http_status=e.asm.xb).apply(null,arguments)};e.__sfetch_emsc_failed_buffer_too_small=function(){return(e.__sfetch_emsc_failed_buffer_too_small=e.asm.yb).apply(null,arguments)};
var qa=e.stackSave=function(){return(qa=e.stackSave=e.asm.zb).apply(null,arguments)},ra=e.stackRestore=function(){return(ra=e.stackRestore=e.asm.Ab).apply(null,arguments)},B=e.stackAlloc=function(){return(B=e.stackAlloc=e.asm.Bb).apply(null,arguments)};e.dynCall_vi=function(){return(e.dynCall_vi=e.asm.Cb).apply(null,arguments)};e.dynCall_v=function(){return(e.dynCall_v=e.asm.Db).apply(null,arguments)};
var P=e.dynCall_iiii=function(){return(P=e.dynCall_iiii=e.asm.Eb).apply(null,arguments)},Gb=e.dynCall_idi=function(){return(Gb=e.dynCall_idi=e.asm.Fb).apply(null,arguments)},Kb;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}J=function Lb(){Kb||Mb();Kb||(J=Lb)};
function Mb(a){function b(){if(!Kb&&(Kb=!0,e.calledRun=!0,!ma)){Ba(Da);Ba(Ea);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Nb){var c=a,d=e._main;c=c||[];var f=c.length+1,k=B(4*(f+1));G[k>>2]=ua(aa);for(var h=1;h<f;h++)G[(k>>2)+h]=ua(c[h-1]);G[(k>>2)+f]=0;try{var n=d(f,k);if(!noExitRuntime||0!==n){if(!noExitRuntime&&(ma=!0,e.onExit))e.onExit(n);t(n,new ia(n))}}catch(m){m instanceof ia||("unwind"==m?noExitRuntime=!0:((c=m)&&"object"===typeof m&&m.stack&&(c=[m,m.stack]),y("exception thrown: "+
c),t(1,m)))}finally{}}if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)c=e.postRun.shift(),Ga.unshift(c);Ba(Ga)}}a=a||r;if(!(0<I)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ha();Ba(Ca);0<I||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Mb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();
var Nb=!0;e.noInitialRun&&(Nb=!1);noExitRuntime=!0;Mb();
