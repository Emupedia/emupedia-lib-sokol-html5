var e;e||(e=typeof Module !== 'undefined' ? Module : {});var f={},k;for(k in e)e.hasOwnProperty(k)&&(f[k]=e[k]);e.arguments=[];e.thisProgram="./this.program";e.quit=function(a,b){throw b;};e.preRun=[];e.postRun=[];var q=!1,r=!1,t=!1,aa=!1;q="object"===typeof window;r="function"===typeof importScripts;t="object"===typeof process&&"function"===typeof require&&!q&&!r;aa=!q&&!t&&!r;var u="";
if(t){u=__dirname+"/";var v,w;e.read=function(a,b){v||(v=require("fs"));w||(w=require("path"));a=w.normalize(a);a=v.readFileSync(a);return b?a:a.toString()};e.readBinary=function(a){a=e.read(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||x("Assertion failed: undefined");return a};1<process.argv.length&&(e.thisProgram=process.argv[1].replace(/\\/g,"/"));e.arguments=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=e);process.on("uncaughtException",function(a){if(!(a instanceof y))throw a;
});process.on("unhandledRejection",x);e.quit=function(a){process.exit(a)};e.inspect=function(){return"[Emscripten Module object]"}}else if(aa)"undefined"!=typeof read&&(e.read=function(a){return read(a)}),e.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||x("Assertion failed: undefined");return a},"undefined"!=typeof scriptArgs?e.arguments=scriptArgs:"undefined"!=typeof arguments&&(e.arguments=arguments),"function"===
typeof quit&&(e.quit=function(a){quit(a)});else if(q||r)r?u=self.location.href:document.currentScript&&(u=document.currentScript.src),u=0!==u.indexOf("blob:")?u.substr(0,u.lastIndexOf("/")+1):"",e.read=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},r&&(e.readBinary=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),e.readAsync=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",
a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)},e.setWindowTitle=function(a){document.title=a};var ba=e.print||("undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null),z=e.printErr||("undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||ba);for(k in f)f.hasOwnProperty(k)&&(e[k]=f[k]);f=void 0;
var ca={"f64-rem":function(a,b){return a%b},"debugger":function(){debugger}};"object"!==typeof WebAssembly&&z("no native wasm support detected");var da,ea=!1,fa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ha(a){if(a){for(var b=A,c=a+void 0,d=a;b[d]&&!(d>=c);)++d;if(16<d-a&&b.subarray&&fa)a=fa.decode(b.subarray(a,d));else{for(c="";a<d;){var g=b[a++];if(g&128){var h=b[a++]&63;if(192==(g&224))c+=String.fromCharCode((g&31)<<6|h);else{var l=b[a++]&63;g=224==(g&240)?(g&15)<<12|h<<6|l:(g&7)<<18|h<<12|l<<6|b[a++]&63;65536>g?c+=String.fromCharCode(g):(g-=65536,c+=String.fromCharCode(55296|g>>10,56320|g&1023))}}else c+=String.fromCharCode(g)}a=c}}else a="";return a}
function B(a,b,c,d){if(0<d){d=c+d-1;for(var g=0;g<a.length;++g){var h=a.charCodeAt(g);if(55296<=h&&57343>=h){var l=a.charCodeAt(++g);h=65536+((h&1023)<<10)|l&1023}if(127>=h){if(c>=d)break;b[c++]=h}else{if(2047>=h){if(c+1>=d)break;b[c++]=192|h>>6}else{if(65535>=h){if(c+2>=d)break;b[c++]=224|h>>12}else{if(c+3>=d)break;b[c++]=240|h>>18;b[c++]=128|h>>12&63}b[c++]=128|h>>6&63}b[c++]=128|h&63}}b[c]=0}}
function ia(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function ja(a){var b=ia(a)+1,c=ka(b);B(a,la,c,b);return c}var buffer,la,A,na,C,D,E=e.TOTAL_MEMORY||134217728;5242880>E&&z("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+E+"! (TOTAL_STACK=5242880)");
e.buffer?buffer=e.buffer:"object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(da=new WebAssembly.Memory({initial:E/65536,maximum:E/65536}),buffer=da.buffer):buffer=new ArrayBuffer(E);e.HEAP8=la=new Int8Array(buffer);e.HEAP16=na=new Int16Array(buffer);e.HEAP32=C=new Int32Array(buffer);e.HEAPU8=A=new Uint8Array(buffer);e.HEAPU16=new Uint16Array(buffer);e.HEAPU32=new Uint32Array(buffer);e.HEAPF32=new Float32Array(buffer);e.HEAPF64=D=new Float64Array(buffer);C[2564]=5253168;
function F(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.Xa;"number"===typeof c?void 0===b.Ia?e.dynCall_v(c):e.dynCall_vi(c,b.Ia):c(void 0===b.Ia?null:b.Ia)}}}var oa=[],pa=[],qa=[],ra=[],sa=[],G=!1;function ta(){var a=e.preRun.shift();oa.unshift(a)}var H=0,ua=null,I=null;e.preloadedImages={};e.preloadedAudios={};
function va(){var a=J;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var J="clear-sapp.wasm";if(!va()){var wa=J;J=e.locateFile?e.locateFile(wa,u):u+wa}function xa(){try{if(e.wasmBinary)return new Uint8Array(e.wasmBinary);if(e.readBinary)return e.readBinary(J);throw"both async and sync fetching of the wasm failed";}catch(a){x(a)}}
function ya(){return e.wasmBinary||!q&&!r||"function"!==typeof fetch?new Promise(function(a){a(xa())}):fetch(J,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+J+"'";return a.arrayBuffer()}).catch(function(){return xa()})}
function za(a){function b(a){e.asm=a.exports;H--;e.monitorRunDependencies&&e.monitorRunDependencies(H);0==H&&(null!==ua&&(clearInterval(ua),ua=null),I&&(a=I,I=null,a()))}function c(a){b(a.instance)}function d(a){ya().then(function(a){return WebAssembly.instantiate(a,g)}).then(a,function(a){z("failed to asynchronously prepare wasm: "+a);x(a)})}var g={env:a,global:{NaN:NaN,Infinity:Infinity},"global.Math":Math,asm2wasm:ca};H++;e.monitorRunDependencies&&e.monitorRunDependencies(H);if(e.instantiateWasm)try{return e.instantiateWasm(g,
b)}catch(h){return z("Module.instantiateWasm callback failed with error: "+h),!1}e.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||va()||"function"!==typeof fetch?d(c):WebAssembly.instantiateStreaming(fetch(J,{credentials:"same-origin"}),g).then(c,function(a){z("wasm streaming compile failed: "+a);z("falling back to ArrayBuffer instantiation");d(c)});return{}}
e.asm=function(a,b){b.memory=da;b.table=new WebAssembly.Table({initial:27,maximum:27,element:"anyfunc"});b.__memory_base=1024;b.__table_base=0;return za(b)};var Aa=0,K=0,L=0,Ba=0,Ca=0,Da=null,Ea=null,Fa=!1;function Ga(){for(var a=M.length-1;0<=a;--a)Ha(a);M=[];N=[]}var N=[];function Ia(){if(Ja&&Ka.Ea)for(var a=0;a<N.length;++a){var b=N[a];N.splice(a,1);--a;b.bb.apply(this,b.Ua)}}var Ja=0,Ka=null,M=[];
function La(){return-1!==navigator.userAgent.indexOf("MSIE")||0<navigator.appVersion.indexOf("Trident/")}function Ha(a){var b=M[a];b.target.removeEventListener(b.Da,b.Pa,b.Fa);M.splice(a,1)}function O(a){function b(b){++Ja;Ka=a;Ia();a.Ha(b);Ia();--Ja}if(a.Ga)a.Pa=b,a.target.addEventListener(a.Da,b,a.Fa),M.push(a),Fa||(ra.push(Ga),Fa=!0);else for(var c=0;c<M.length;++c)M[c].target==a.target&&M[c].Da==a.Da&&Ha(c--)}
var Ma=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function P(a){try{if(!a)return window;"number"===typeof a&&(a=Ma[a]||ha(a));return"#window"===a?window:"#document"===a?document:"#screen"===a?screen:"#canvas"===a?e.canvas:"string"===typeof a?document.getElementById(a):a}catch(b){return null}}function Na(){x("OOM")}
function Oa(a){"number"===typeof a&&(a=ha(a));return a&&"#canvas"!==a?"undefined"!==typeof Ra&&Q[a]?Q[a]:P(a):"undefined"!==typeof Ra&&Q.canvas?Q.canvas:e.canvas}
function Sa(a,b,c,d,g,h){Aa||(Aa=R(164));a={target:P(a),Ea:La()?!1:!0,Da:h,Ga:d,Ha:function(a){a=a||window.event;var c=Aa;B(a.key?a.key:"",A,c+0,32);B(a.code?a.code:"",A,c+32,32);C[c+64>>2]=a.location;C[c+68>>2]=a.ctrlKey;C[c+72>>2]=a.shiftKey;C[c+76>>2]=a.altKey;C[c+80>>2]=a.metaKey;C[c+84>>2]=a.repeat;B(a.locale?a.locale:"",A,c+88,32);B(a.char?a.char:"",A,c+120,32);C[c+152>>2]=a.charCode;C[c+156>>2]=a.keyCode;C[c+160>>2]=a.which;S(d,g,c,b)&&a.preventDefault()},Fa:c};O(a)}
function Ta(a,b,c){D[a>>3]=window.performance&&window.performance.now?window.performance.now():Date.now();C[a+8>>2]=b.screenX;C[a+12>>2]=b.screenY;C[a+16>>2]=b.clientX;C[a+20>>2]=b.clientY;C[a+24>>2]=b.ctrlKey;C[a+28>>2]=b.shiftKey;C[a+32>>2]=b.altKey;C[a+36>>2]=b.metaKey;na[a+40>>1]=b.button;na[a+42>>1]=b.buttons;C[a+44>>2]=b.movementX||b.mozMovementX||b.webkitMovementX||b.screenX-Da;C[a+48>>2]=b.movementY||b.mozMovementY||b.webkitMovementY||b.screenY-Ea;if(e.canvas){var d=e.canvas.getBoundingClientRect();
C[a+60>>2]=b.clientX-d.left;C[a+64>>2]=b.clientY-d.top}else C[a+60>>2]=0,C[a+64>>2]=0;c?(d=c.getBoundingClientRect?c.getBoundingClientRect():{left:0,top:0},C[a+52>>2]=b.clientX-d.left,C[a+56>>2]=b.clientY-d.top):(C[a+52>>2]=0,C[a+56>>2]=0);"wheel"!==b.type&&"mousewheel"!==b.type&&(Da=b.screenX,Ea=b.screenY)}
function T(a,b,c,d,g,h){K||(K=R(72));a=P(a);c={target:a,Ea:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Da:h,Ga:d,Ha:function(c){c=c||window.event;Ta(K,c,a);S(d,g,K,b)&&c.preventDefault()},Fa:c};La()&&"mousedown"==h&&(c.Ea=!1);O(c)}
function Ua(a,b,c,d){Ba||(Ba=R(36));a=P(a);O({target:a,Ea:!1,Da:"resize",Ga:d,Ha:function(c){c=c||window.event;if(c.target==a){var g=0<window.pageXOffset||0<window.pageYOffset?[window.pageXOffset,window.pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.scrollLeft|0,document.body.scrollTop|0],l=Ba;C[l>>2]=c.detail;C[l+4>>2]=document.body.clientWidth;
C[l+8>>2]=document.body.clientHeight;C[l+12>>2]=window.innerWidth;C[l+16>>2]=window.innerHeight;C[l+20>>2]=window.outerWidth;C[l+24>>2]=window.outerHeight;C[l+28>>2]=g[0];C[l+32>>2]=g[1];S(d,10,l,b)&&c.preventDefault()}},Fa:c})}
function U(a,b,c,d,g,h){Ca||(Ca=R(1684));a=P(a);O({target:a,Ea:"touchstart"==h||"touchend"==h,Da:h,Ga:d,Ha:function(c){c=c||window.event;for(var h={},l=0;l<c.touches.length;++l){var n=c.touches[l];h[n.identifier]=n}for(l=0;l<c.changedTouches.length;++l)n=c.changedTouches[l],h[n.identifier]=n,n.Oa=!0;for(l=0;l<c.targetTouches.length;++l)n=c.targetTouches[l],h[n.identifier].Sa=!0;var m=n=Ca;C[m+4>>2]=c.ctrlKey;C[m+8>>2]=c.shiftKey;C[m+12>>2]=c.altKey;C[m+16>>2]=c.metaKey;m+=20;var ma=e.canvas?e.canvas.getBoundingClientRect():
void 0,Pa=a.getBoundingClientRect?a.getBoundingClientRect():{left:0,top:0},Qa=0;for(l in h){var p=h[l];C[m>>2]=p.identifier;C[m+4>>2]=p.screenX;C[m+8>>2]=p.screenY;C[m+12>>2]=p.clientX;C[m+16>>2]=p.clientY;C[m+20>>2]=p.pageX;C[m+24>>2]=p.pageY;C[m+28>>2]=p.Oa;C[m+32>>2]=p.Sa;ma?(C[m+44>>2]=p.clientX-ma.left,C[m+48>>2]=p.clientY-ma.top):(C[m+44>>2]=0,C[m+48>>2]=0);C[m+36>>2]=p.clientX-Pa.left;C[m+40>>2]=p.clientY-Pa.top;m+=52;if(32<=++Qa)break}C[n>>2]=Qa;S(d,g,n,b)&&c.preventDefault()},Fa:c})}
function Va(a,b,c,d,g,h){a||(a=e.canvas);a={target:P(a),Ea:!1,Da:h,Ga:d,Ha:function(a){a=a||window.event;S(d,g,0,b)&&a.preventDefault()},Fa:c};O(a)}
function Wa(a,b,c,d,g){function h(c){c=c||window.event;Ta(L,c,a);D[L+72>>3]=c.wheelDeltaX||0;D[L+80>>3]=-(c.wheelDeltaY?c.wheelDeltaY:c.wheelDelta);D[L+88>>3]=0;C[L+96>>2]=0;S(d,9,L,b)&&c.preventDefault()}function l(c){c=c||window.event;var g=L;Ta(g,c,a);D[g+72>>3]=c.deltaX;D[g+80>>3]=c.deltaY;D[g+88>>3]=c.deltaZ;C[g+96>>2]=c.deltaMode;S(d,9,g,b)&&c.preventDefault()}L||(L=R(104));O({target:a,Ea:!0,Da:g,Ga:d,Ha:"wheel"==g?l:h,Fa:c})}
var Xa=1,Ya=0,Za=[],$a=[],ab=[],bb=[],cb=[],V=[],db={},W=null,Q={},eb={};function X(a){Ya||(Ya=a)}function fb(a,b){function c(){var a=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return a?parseInt(a[2],10):!1}var d=R(8),g={handle:d,attributes:b,version:b.Na,Ja:a};g.ab=2<=g.version&&(!1===c()||58<=c());a.canvas&&(a.canvas.Ta=g);db[d]=g;("undefined"===typeof b.Ma||b.Ma)&&gb(g);return d}
function gb(a){a||(a=W);if(!a.Ra){a.Ra=!0;var b=a.Ja;if(2>a.version){var c=b.getExtension("ANGLE_instanced_arrays");c&&(b.vertexAttribDivisor=function(a,b){c.vertexAttribDivisorANGLE(a,b)},b.drawArraysInstanced=function(a,b,d,g){c.drawArraysInstancedANGLE(a,b,d,g)},b.drawElementsInstanced=function(a,b,d,g,h){c.drawElementsInstancedANGLE(a,b,d,g,h)});var d=b.getExtension("OES_vertex_array_object");d&&(b.createVertexArray=function(){return d.createVertexArrayOES()},b.deleteVertexArray=function(a){d.deleteVertexArrayOES(a)},
b.bindVertexArray=function(a){d.bindVertexArrayOES(a)},b.isVertexArray=function(a){return d.isVertexArrayOES(a)});var g=b.getExtension("WEBGL_draw_buffers");g&&(b.drawBuffers=function(a,b){g.drawBuffersWEBGL(a,b)})}b.Wa=b.getExtension("EXT_disjoint_timer_query");var h="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");
(a=b.getSupportedExtensions())&&0<a.length&&b.getSupportedExtensions().forEach(function(a){-1!=h.indexOf(a)&&b.getExtension(a)})}}var Ra={},hb,ib,jb=["default","low-power","high-performance"],kb=[];
function mb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>W.version){X(1282);return}d=Y.getSupportedExtensions();c=null===d?0:2*d.length;break;case 33307:case 33308:if(2>W.version){X(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":X(1280);return;case "object":if(null===
d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 35097:case 36389:case 34068:c=0;break;default:X(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)C[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(g){X(1280);z("GL_INVALID_ENUM in glGetIntegerv: Unknown object returned from WebGL getParameter("+a+")! (error: "+g+")");return}}break;default:X(1280);return}C[b>>2]=c}else X(1281)}
function Z(a){var b=ia(a)+1,c=R(b);B(a,A,c,b);return c}for(var Y,ob=0;256>ob;ob++);for(var pb=0;32>pb;pb++)kb.push(Array(pb));
var rb=e.asm({},{c:x,w:function(a){e.___errno_location&&(C[e.___errno_location()>>2]=a);return a},v:function(){return window.devicePixelRatio||1},s:function(a,b,c){a=a?P(a):e.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),D[b>>3]=a.right-a.left,D[c>>3]=a.bottom-a.top):(D[b>>3]=a.clientWidth,D[c>>3]=a.clientHeight);return 0},P:function(){return la.length},J:function(a,b,c){A.set(A.subarray(b,b+c),a)},D:function(a,b){function c(d){qb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},
y:function(a){Na(a)},k:function(a,b,c){a=Oa(a);if(!a)return-4;a.width=b;a.height=c;return 0},x:function(a,b,c,d){Sa(a,b,c,d,2,"keydown");return 0},la:function(a,b,c,d){Sa(a,b,c,d,1,"keypress");return 0},ka:function(a,b,c,d){Sa(a,b,c,d,3,"keyup");return 0},ja:function(a,b,c,d){T(a,b,c,d,5,"mousedown");return 0},ia:function(a,b,c,d){T(a,b,c,d,33,"mouseenter");return 0},ha:function(a,b,c,d){T(a,b,c,d,34,"mouseleave");return 0},ga:function(a,b,c,d){T(a,b,c,d,8,"mousemove");return 0},fa:function(a,b,c,
d){T(a,b,c,d,6,"mouseup");return 0},ea:function(a,b,c,d){Ua(a,b,c,d);return 0},da:function(a,b,c,d){U(a,b,c,d,25,"touchcancel");return 0},ca:function(a,b,c,d){U(a,b,c,d,23,"touchend");return 0},ba:function(a,b,c,d){U(a,b,c,d,24,"touchmove");return 0},aa:function(a,b,c,d){U(a,b,c,d,22,"touchstart");return 0},$:function(a,b,c,d){Va(a,b,c,d,31,"webglcontextlost");return 0},_:function(a,b,c,d){Va(a,b,c,d,32,"webglcontextrestored");return 0},Z:function(a,b,c,d){a=P(a);return"undefined"!==typeof a.onwheel?
(Wa(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(Wa(a,b,c,d,"mousewheel"),0):-1},u:function(a,b){var c={};b>>=2;c.alpha=!!C[b];c.depth=!!C[b+1];c.stencil=!!C[b+2];c.antialias=!!C[b+3];c.premultipliedAlpha=!!C[b+4];c.preserveDrawingBuffer=!!C[b+5];c.powerPreference=jb[C[b+6]];c.failIfMajorPerformanceCaveat=!!C[b+7];c.Na=C[b+8];c.Ya=C[b+9];c.Ma=C[b+10];c.Qa=C[b+11];c.Za=C[b+12];c.$a=C[b+13];a=Oa(a);!a||c.Qa?c=0:c=(a=1<c.Na?a.getContext("webgl2",c):a.getContext("webgl",c)||a.getContext("experimental-webgl",
c))&&fb(a,c);return c},Y:function(a){a>>=2;for(var b=0;14>b;++b)C[a+b]=0;C[a]=C[a+1]=C[a+3]=C[a+4]=C[a+8]=C[a+10]=1},X:function(a){W=db[a];e.Va=Y=W&&W.Ja;return!a||Y?0:-5},t:function(a,b){35051==a?Y.Ka=b:35052==a&&(Y.La=b);Y.bindBuffer(a,Za[b])},d:function(a,b){Y.bindFramebuffer(a,ab[b])},r:function(a){Y.bindVertexArray(V[a])},W:function(a,b,c,d){Y.blendColor(a,b,c,d)},V:function(a,b){Y.blendEquationSeparate(a,b)},U:function(a,b,c,d){Y.blendFuncSeparate(a,b,c,d)},i:function(a,b,c,d,g,h,l,lb,nb,n){Y.blitFramebuffer(a,
b,c,d,g,h,l,lb,nb,n)},T:function(a){Y.clear(a)},S:function(a,b,c,d){Y.clearColor(a,b,c,d)},R:function(a){Y.clearDepth(a)},Q:function(a){Y.clearStencil(a)},q:function(a,b,c,d){Y.colorMask(!!a,!!b,!!c,!!d)},O:function(a){Y.cullFace(a)},N:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],g=Za[d];g&&(Y.deleteBuffer(g),g.name=0,Za[d]=null,d==hb&&(hb=0),d==ib&&(ib=0),d==Y.Ka&&(Y.Ka=0),d==Y.La&&(Y.La=0))}},f:function(a,b){for(var c=0;c<a;++c){var d=C[b+4*c>>2],g=ab[d];g&&(Y.deleteFramebuffer(g),g.name=
0,ab[d]=null)}},M:function(a){if(a){var b=$a[a];b?(Y.deleteProgram(b),b.name=0,$a[a]=null):X(1281)}},p:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],g=bb[d];g&&(Y.deleteRenderbuffer(g),g.name=0,bb[d]=null)}},L:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],g=cb[d];g&&(Y.deleteTexture(g),g.name=0,cb[d]=null)}},K:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2];Y.deleteVertexArray(V[d]);V[d]=null}},o:function(a){Y.depthFunc(a)},n:function(a){Y.depthMask(!!a)},e:function(a){Y.disable(a)},
b:function(a){Y.disableVertexAttribArray(a)},h:function(a,b){for(var c=kb[a],d=0;d<a;d++)c[d]=C[b+4*d>>2];Y.drawBuffers(c)},j:function(a){Y.enable(a)},I:function(a){Y.frontFace(a)},H:function(a,b){for(var c=0;c<a;c++){var d=Y.createVertexArray(),g;if(g=d){g=V;for(var h=Xa++,l=g.length;l<h;l++)g[l]=null;g=h}d?(d.name=g,V[g]=d):X(1282);C[b+4*c>>2]=g}},m:function(a,b){mb(a,b)},G:function(a){if(eb[a])return eb[a];switch(a){case 7939:var b=Y.getSupportedExtensions();for(var c=[],d=0;d<b.length;++d)c.push(b[d]),
c.push("GL_"+b[d]);b=Z(c.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Y.getParameter(a))||X(1280);b=Z(b);break;case 7938:b=Y.getParameter(Y.VERSION);b=2<=W.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Z(b);break;case 35724:b=Y.getParameter(Y.SHADING_LANGUAGE_VERSION);c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Z(b);break;default:return X(1280),0}return eb[a]=b},F:function(a,
b){Y.polygonOffset(a,b)},g:function(a){Y.readBuffer(a)},E:function(a,b,c,d){Y.scissor(a,b,c,d)},C:function(a,b,c){Y.stencilFunc(a,b,c)},l:function(a){Y.stencilMask(a)},B:function(a,b,c){Y.stencilOp(a,b,c)},A:function(a,b,c,d){Y.viewport(a,b,c,d)},z:Na,a:10256},buffer);e.asm=rb;e.___em_js___sapp_js_create_textfield=function(){return e.asm.ma.apply(null,arguments)};e.___em_js___sapp_js_focus_textfield=function(){return e.asm.na.apply(null,arguments)};
e.___em_js___sapp_js_unfocus_textfield=function(){return e.asm.oa.apply(null,arguments)};e.___em_js___saudio_js_buffer_frames=function(){return e.asm.pa.apply(null,arguments)};e.___em_js___saudio_js_init=function(){return e.asm.qa.apply(null,arguments)};e.___em_js___saudio_js_sample_rate=function(){return e.asm.ra.apply(null,arguments)};e.___em_js___stm_js_perfnow=function(){return e.asm.sa.apply(null,arguments)};e.__sapp_emsc_notify_keyboard_hidden=function(){return e.asm.ta.apply(null,arguments)};
e.__saudio_emsc_pull=function(){return e.asm.ua.apply(null,arguments)};e._free=function(){return e.asm.va.apply(null,arguments)};e._main=function(){return e.asm.wa.apply(null,arguments)};var R=e._malloc=function(){return e.asm.xa.apply(null,arguments)},ka=e.stackAlloc=function(){return e.asm.Ca.apply(null,arguments)},qb=e.dynCall_idi=function(){return e.asm.ya.apply(null,arguments)},S=e.dynCall_iiii=function(){return e.asm.za.apply(null,arguments)};
e.dynCall_v=function(){return e.asm.Aa.apply(null,arguments)};e.dynCall_vi=function(){return e.asm.Ba.apply(null,arguments)};e.asm=rb;function y(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}y.prototype=Error();y.prototype.constructor=y;I=function sb(){e.calledRun||tb();e.calledRun||(I=sb)};
e.callMain=function(a){a=a||[];G||(G=!0,F(pa));var b=a.length+1,c=ka(4*(b+1));C[c>>2]=ja(e.thisProgram);for(var d=1;d<b;d++)C[(c>>2)+d]=ja(a[d-1]);C[(c>>2)+b]=0;try{var g=e._main(b,c,0);if(!e.noExitRuntime||0!==g){if(!e.noExitRuntime&&(ea=!0,e.onExit))e.onExit(g);e.quit(g,new y(g))}}catch(h){h instanceof y||("SimulateInfiniteLoop"==h?e.noExitRuntime=!0:((a=h)&&"object"===typeof h&&h.stack&&(a=[h,h.stack]),z("exception thrown: "+a),e.quit(1,h)))}finally{}};
function tb(a){function b(){if(!e.calledRun&&(e.calledRun=!0,!ea)){G||(G=!0,F(pa));F(qa);if(e.onRuntimeInitialized)e.onRuntimeInitialized();e._main&&ub&&e.callMain(a);if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var b=e.postRun.shift();sa.unshift(b)}F(sa)}}a=a||e.arguments;if(!(0<H)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)ta();F(oa);0<H||e.calledRun||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},
1);b()},1)):b())}}e.run=tb;function x(a){if(e.onAbort)e.onAbort(a);void 0!==a?(ba(a),z(a),a=JSON.stringify(a)):a="";ea=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}e.abort=x;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();var ub=!0;e.noInitialRun&&(ub=!1);e.noExitRuntime=!0;tb();
