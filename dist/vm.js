var VM=function(){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(a=n.key,o=void 0,"symbol"==typeof(o=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(a,"string"))?o:String(o)),n)}var a,o}function r(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var a=[Array,ArrayBuffer,Atomics,Boolean,DataView,Date,Error,EvalError,Float32Array,Float64Array,Function,1/0,Int16Array,Int32Array,Int8Array,JSON,Map,Math,NaN,Number,Object,Promise,Proxy,RangeError,ReferenceError,Reflect,RegExp,Set,String,Symbol,SyntaxError,TypeError,URIError,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,WeakMap,WeakSet,console,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,escape,eval,isFinite,isNaN,parseFloat,parseInt,void 0,unescape,"window"];function o(e){for(var t=e.length;--t>=0;)e[t]=0}o(new Array(576)),o(new Array(60)),o(new Array(512)),o(new Array(256)),o(new Array(29)),o(new Array(30));var i=function(e,t,r,n){for(var a=65535&e|0,o=e>>>16&65535|0,i=0;0!==r;){r-=i=r>2e3?2e3:r;do{o=o+(a=a+t[n++]|0)|0}while(--i);a%=65521,o%=65521}return a|o<<16|0},s=new Uint32Array(function(){for(var e,t=[],r=0;r<256;r++){e=r;for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1;t[r]=e}return t}()),c=function(e,t,r,n){var a=s,o=n+r;e^=-1;for(var i=n;i<o;i++)e=e>>>8^a[255&(e^t[i])];return-1^e},l={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},d={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8},f=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},h=function(t){for(var r=Array.prototype.slice.call(arguments,1);r.length;){var n=r.shift();if(n){if("object"!==e(n))throw new TypeError(n+"must be non-object");for(var a in n)f(n,a)&&(t[a]=n[a])}}return t},u=function(e){for(var t=0,r=0,n=e.length;r<n;r++)t+=e[r].length;for(var a=new Uint8Array(t),o=0,i=0,s=e.length;o<s;o++){var c=e[o];a.set(c,i),i+=c.length}return a},p=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(e){p=!1}for(var w=new Uint8Array(256),k=0;k<256;k++)w[k]=k>=252?6:k>=248?5:k>=240?4:k>=224?3:k>=192?2:1;w[254]=w[254]=1;var b=function(e){if("function"==typeof TextEncoder&&TextEncoder.prototype.encode)return(new TextEncoder).encode(e);var t,r,n,a,o,i=e.length,s=0;for(a=0;a<i;a++)55296==(64512&(r=e.charCodeAt(a)))&&a+1<i&&56320==(64512&(n=e.charCodeAt(a+1)))&&(r=65536+(r-55296<<10)+(n-56320),a++),s+=r<128?1:r<2048?2:r<65536?3:4;for(t=new Uint8Array(s),o=0,a=0;o<s;a++)55296==(64512&(r=e.charCodeAt(a)))&&a+1<i&&56320==(64512&(n=e.charCodeAt(a+1)))&&(r=65536+(r-55296<<10)+(n-56320),a++),r<128?t[o++]=r:r<2048?(t[o++]=192|r>>>6,t[o++]=128|63&r):r<65536?(t[o++]=224|r>>>12,t[o++]=128|r>>>6&63,t[o++]=128|63&r):(t[o++]=240|r>>>18,t[o++]=128|r>>>12&63,t[o++]=128|r>>>6&63,t[o++]=128|63&r);return t},m=function(e,t){var r,n,a=t||e.length;if("function"==typeof TextDecoder&&TextDecoder.prototype.decode)return(new TextDecoder).decode(e.subarray(0,t));var o=new Array(2*a);for(n=0,r=0;r<a;){var i=e[r++];if(i<128)o[n++]=i;else{var s=w[i];if(s>4)o[n++]=65533,r+=s-1;else{for(i&=2===s?31:3===s?15:7;s>1&&r<a;)i=i<<6|63&e[r++],s--;s>1?o[n++]=65533:i<65536?o[n++]=i:(i-=65536,o[n++]=55296|i>>10&1023,o[n++]=56320|1023&i)}}}return function(e,t){if(t<65534&&e.subarray&&p)return String.fromCharCode.apply(null,e.length===t?e:e.subarray(0,t));for(var r="",n=0;n<t;n++)r+=String.fromCharCode(e[n]);return r}(o,n)},v=function(e,t){(t=t||e.length)>e.length&&(t=e.length);for(var r=t-1;r>=0&&128==(192&e[r]);)r--;return r<0||0===r?t:r+w[e[r]]>t?r:t};var y=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0},g=16209,_=function(e,t){var r,n,a,o,i,s,c,l,d,f,h,u,p,w,k,b,m,v,y,_,E,x,A,H,S=e.state;r=e.next_in,A=e.input,n=r+(e.avail_in-5),a=e.next_out,H=e.output,o=a-(t-e.avail_out),i=a+(e.avail_out-257),s=S.dmax,c=S.wsize,l=S.whave,d=S.wnext,f=S.window,h=S.hold,u=S.bits,p=S.lencode,w=S.distcode,k=(1<<S.lenbits)-1,b=(1<<S.distbits)-1;e:do{u<15&&(h+=A[r++]<<u,u+=8,h+=A[r++]<<u,u+=8),m=p[h&k];t:for(;;){if(h>>>=v=m>>>24,u-=v,0===(v=m>>>16&255))H[a++]=65535&m;else{if(!(16&v)){if(0==(64&v)){m=p[(65535&m)+(h&(1<<v)-1)];continue t}if(32&v){S.mode=16191;break e}e.msg="invalid literal/length code",S.mode=g;break e}y=65535&m,(v&=15)&&(u<v&&(h+=A[r++]<<u,u+=8),y+=h&(1<<v)-1,h>>>=v,u-=v),u<15&&(h+=A[r++]<<u,u+=8,h+=A[r++]<<u,u+=8),m=w[h&b];r:for(;;){if(h>>>=v=m>>>24,u-=v,!(16&(v=m>>>16&255))){if(0==(64&v)){m=w[(65535&m)+(h&(1<<v)-1)];continue r}e.msg="invalid distance code",S.mode=g;break e}if(_=65535&m,u<(v&=15)&&(h+=A[r++]<<u,(u+=8)<v&&(h+=A[r++]<<u,u+=8)),(_+=h&(1<<v)-1)>s){e.msg="invalid distance too far back",S.mode=g;break e}if(h>>>=v,u-=v,_>(v=a-o)){if((v=_-v)>l&&S.sane){e.msg="invalid distance too far back",S.mode=g;break e}if(E=0,x=f,0===d){if(E+=c-v,v<y){y-=v;do{H[a++]=f[E++]}while(--v);E=a-_,x=H}}else if(d<v){if(E+=c+d-v,(v-=d)<y){y-=v;do{H[a++]=f[E++]}while(--v);if(E=0,d<y){y-=v=d;do{H[a++]=f[E++]}while(--v);E=a-_,x=H}}}else if(E+=d-v,v<y){y-=v;do{H[a++]=f[E++]}while(--v);E=a-_,x=H}for(;y>2;)H[a++]=x[E++],H[a++]=x[E++],H[a++]=x[E++],y-=3;y&&(H[a++]=x[E++],y>1&&(H[a++]=x[E++]))}else{E=a-_;do{H[a++]=H[E++],H[a++]=H[E++],H[a++]=H[E++],y-=3}while(y>2);y&&(H[a++]=H[E++],y>1&&(H[a++]=H[E++]))}break}}break}}while(r<n&&a<i);r-=y=u>>3,h&=(1<<(u-=y<<3))-1,e.next_in=r,e.next_out=a,e.avail_in=r<n?n-r+5:5-(r-n),e.avail_out=a<i?i-a+257:257-(a-i),S.hold=h,S.bits=u},E=15,x=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),A=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),H=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),S=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),I=function(e,t,r,n,a,o,i,s){var c,l,d,f,h,u,p,w,k,b=s.bits,m=0,v=0,y=0,g=0,_=0,I=0,R=0,N=0,U=0,T=0,D=null,C=new Uint16Array(16),Z=new Uint16Array(16),O=null;for(m=0;m<=E;m++)C[m]=0;for(v=0;v<n;v++)C[t[r+v]]++;for(_=b,g=E;g>=1&&0===C[g];g--);if(_>g&&(_=g),0===g)return a[o++]=20971520,a[o++]=20971520,s.bits=1,0;for(y=1;y<g&&0===C[y];y++);for(_<y&&(_=y),N=1,m=1;m<=E;m++)if(N<<=1,(N-=C[m])<0)return-1;if(N>0&&(0===e||1!==g))return-1;for(Z[1]=0,m=1;m<E;m++)Z[m+1]=Z[m]+C[m];for(v=0;v<n;v++)0!==t[r+v]&&(i[Z[t[r+v]]++]=v);if(0===e?(D=O=i,u=20):1===e?(D=x,O=A,u=257):(D=H,O=S,u=0),T=0,v=0,m=y,h=o,I=_,R=0,d=-1,f=(U=1<<_)-1,1===e&&U>852||2===e&&U>592)return 1;for(;;){p=m-R,i[v]+1<u?(w=0,k=i[v]):i[v]>=u?(w=O[i[v]-u],k=D[i[v]-u]):(w=96,k=0),c=1<<m-R,y=l=1<<I;do{a[h+(T>>R)+(l-=c)]=p<<24|w<<16|k|0}while(0!==l);for(c=1<<m-1;T&c;)c>>=1;if(0!==c?(T&=c-1,T+=c):T=0,v++,0==--C[m]){if(m===g)break;m=t[r+i[v]]}if(m>_&&(T&f)!==d){for(0===R&&(R=_),h+=y,N=1<<(I=m-R);I+R<g&&!((N-=C[I+R])<=0);)I++,N<<=1;if(U+=1<<I,1===e&&U>852||2===e&&U>592)return 1;a[d=T&f]=_<<24|I<<16|h-o|0}}return 0!==T&&(a[h+T]=m-R<<24|64<<16|0),s.bits=_,0},R=d.Z_FINISH,N=d.Z_BLOCK,U=d.Z_TREES,T=d.Z_OK,D=d.Z_STREAM_END,C=d.Z_NEED_DICT,Z=d.Z_STREAM_ERROR,O=d.Z_DATA_ERROR,F=d.Z_MEM_ERROR,B=d.Z_BUF_ERROR,L=d.Z_DEFLATED,M=16180,j=16190,z=16191,P=16192,V=16194,K=16199,G=16200,Y=16206,W=16209,X=function(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)};function J(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}var $,q,Q=function(e){if(!e)return 1;var t=e.state;return!t||t.strm!==e||t.mode<M||t.mode>16211?1:0},ee=function(e){if(Q(e))return Z;var t=e.state;return e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=M,t.last=0,t.havedict=0,t.flags=-1,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new Int32Array(852),t.distcode=t.distdyn=new Int32Array(592),t.sane=1,t.back=-1,T},te=function(e){if(Q(e))return Z;var t=e.state;return t.wsize=0,t.whave=0,t.wnext=0,ee(e)},re=function(e,t){var r;if(Q(e))return Z;var n=e.state;return t<0?(r=0,t=-t):(r=5+(t>>4),t<48&&(t&=15)),t&&(t<8||t>15)?Z:(null!==n.window&&n.wbits!==t&&(n.window=null),n.wrap=r,n.wbits=t,te(e))},ne=function(e,t){if(!e)return Z;var r=new J;e.state=r,r.strm=e,r.window=null,r.mode=M;var n=re(e,t);return n!==T&&(e.state=null),n},ae=!0,oe=function(e){if(ae){$=new Int32Array(512),q=new Int32Array(32);for(var t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(I(1,e.lens,0,288,$,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;I(2,e.lens,0,32,q,0,e.work,{bits:5}),ae=!1}e.lencode=$,e.lenbits=9,e.distcode=q,e.distbits=5},ie=function(e,t,r,n){var a,o=e.state;return null===o.window&&(o.wsize=1<<o.wbits,o.wnext=0,o.whave=0,o.window=new Uint8Array(o.wsize)),n>=o.wsize?(o.window.set(t.subarray(r-o.wsize,r),0),o.wnext=0,o.whave=o.wsize):((a=o.wsize-o.wnext)>n&&(a=n),o.window.set(t.subarray(r-n,r-n+a),o.wnext),(n-=a)?(o.window.set(t.subarray(r-n,r),0),o.wnext=n,o.whave=o.wsize):(o.wnext+=a,o.wnext===o.wsize&&(o.wnext=0),o.whave<o.wsize&&(o.whave+=a))),0},se={inflateReset:te,inflateReset2:re,inflateResetKeep:ee,inflateInit:function(e){return ne(e,15)},inflateInit2:ne,inflate:function(e,t){var r,n,a,o,s,l,d,f,h,u,p,w,k,b,m,v,y,g,E,x,A,H,S,J,$=0,q=new Uint8Array(4),ee=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(Q(e)||!e.output||!e.input&&0!==e.avail_in)return Z;(r=e.state).mode===z&&(r.mode=P),s=e.next_out,a=e.output,d=e.avail_out,o=e.next_in,n=e.input,l=e.avail_in,f=r.hold,h=r.bits,u=l,p=d,H=T;e:for(;;)switch(r.mode){case M:if(0===r.wrap){r.mode=P;break}for(;h<16;){if(0===l)break e;l--,f+=n[o++]<<h,h+=8}if(2&r.wrap&&35615===f){0===r.wbits&&(r.wbits=15),r.check=0,q[0]=255&f,q[1]=f>>>8&255,r.check=c(r.check,q,2,0),f=0,h=0,r.mode=16181;break}if(r.head&&(r.head.done=!1),!(1&r.wrap)||(((255&f)<<8)+(f>>8))%31){e.msg="incorrect header check",r.mode=W;break}if((15&f)!==L){e.msg="unknown compression method",r.mode=W;break}if(h-=4,A=8+(15&(f>>>=4)),0===r.wbits&&(r.wbits=A),A>15||A>r.wbits){e.msg="invalid window size",r.mode=W;break}r.dmax=1<<r.wbits,r.flags=0,e.adler=r.check=1,r.mode=512&f?16189:z,f=0,h=0;break;case 16181:for(;h<16;){if(0===l)break e;l--,f+=n[o++]<<h,h+=8}if(r.flags=f,(255&r.flags)!==L){e.msg="unknown compression method",r.mode=W;break}if(57344&r.flags){e.msg="unknown header flags set",r.mode=W;break}r.head&&(r.head.text=f>>8&1),512&r.flags&&4&r.wrap&&(q[0]=255&f,q[1]=f>>>8&255,r.check=c(r.check,q,2,0)),f=0,h=0,r.mode=16182;case 16182:for(;h<32;){if(0===l)break e;l--,f+=n[o++]<<h,h+=8}r.head&&(r.head.time=f),512&r.flags&&4&r.wrap&&(q[0]=255&f,q[1]=f>>>8&255,q[2]=f>>>16&255,q[3]=f>>>24&255,r.check=c(r.check,q,4,0)),f=0,h=0,r.mode=16183;case 16183:for(;h<16;){if(0===l)break e;l--,f+=n[o++]<<h,h+=8}r.head&&(r.head.xflags=255&f,r.head.os=f>>8),512&r.flags&&4&r.wrap&&(q[0]=255&f,q[1]=f>>>8&255,r.check=c(r.check,q,2,0)),f=0,h=0,r.mode=16184;case 16184:if(1024&r.flags){for(;h<16;){if(0===l)break e;l--,f+=n[o++]<<h,h+=8}r.length=f,r.head&&(r.head.extra_len=f),512&r.flags&&4&r.wrap&&(q[0]=255&f,q[1]=f>>>8&255,r.check=c(r.check,q,2,0)),f=0,h=0}else r.head&&(r.head.extra=null);r.mode=16185;case 16185:if(1024&r.flags&&((w=r.length)>l&&(w=l),w&&(r.head&&(A=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Uint8Array(r.head.extra_len)),r.head.extra.set(n.subarray(o,o+w),A)),512&r.flags&&4&r.wrap&&(r.check=c(r.check,n,w,o)),l-=w,o+=w,r.length-=w),r.length))break e;r.length=0,r.mode=16186;case 16186:if(2048&r.flags){if(0===l)break e;w=0;do{A=n[o+w++],r.head&&A&&r.length<65536&&(r.head.name+=String.fromCharCode(A))}while(A&&w<l);if(512&r.flags&&4&r.wrap&&(r.check=c(r.check,n,w,o)),l-=w,o+=w,A)break e}else r.head&&(r.head.name=null);r.length=0,r.mode=16187;case 16187:if(4096&r.flags){if(0===l)break e;w=0;do{A=n[o+w++],r.head&&A&&r.length<65536&&(r.head.comment+=String.fromCharCode(A))}while(A&&w<l);if(512&r.flags&&4&r.wrap&&(r.check=c(r.check,n,w,o)),l-=w,o+=w,A)break e}else r.head&&(r.head.comment=null);r.mode=16188;case 16188:if(512&r.flags){for(;h<16;){if(0===l)break e;l--,f+=n[o++]<<h,h+=8}if(4&r.wrap&&f!==(65535&r.check)){e.msg="header crc mismatch",r.mode=W;break}f=0,h=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),e.adler=r.check=0,r.mode=z;break;case 16189:for(;h<32;){if(0===l)break e;l--,f+=n[o++]<<h,h+=8}e.adler=r.check=X(f),f=0,h=0,r.mode=j;case j:if(0===r.havedict)return e.next_out=s,e.avail_out=d,e.next_in=o,e.avail_in=l,r.hold=f,r.bits=h,C;e.adler=r.check=1,r.mode=z;case z:if(t===N||t===U)break e;case P:if(r.last){f>>>=7&h,h-=7&h,r.mode=Y;break}for(;h<3;){if(0===l)break e;l--,f+=n[o++]<<h,h+=8}switch(r.last=1&f,h-=1,3&(f>>>=1)){case 0:r.mode=16193;break;case 1:if(oe(r),r.mode=K,t===U){f>>>=2,h-=2;break e}break;case 2:r.mode=16196;break;case 3:e.msg="invalid block type",r.mode=W}f>>>=2,h-=2;break;case 16193:for(f>>>=7&h,h-=7&h;h<32;){if(0===l)break e;l--,f+=n[o++]<<h,h+=8}if((65535&f)!=(f>>>16^65535)){e.msg="invalid stored block lengths",r.mode=W;break}if(r.length=65535&f,f=0,h=0,r.mode=V,t===U)break e;case V:r.mode=16195;case 16195:if(w=r.length){if(w>l&&(w=l),w>d&&(w=d),0===w)break e;a.set(n.subarray(o,o+w),s),l-=w,o+=w,d-=w,s+=w,r.length-=w;break}r.mode=z;break;case 16196:for(;h<14;){if(0===l)break e;l--,f+=n[o++]<<h,h+=8}if(r.nlen=257+(31&f),f>>>=5,h-=5,r.ndist=1+(31&f),f>>>=5,h-=5,r.ncode=4+(15&f),f>>>=4,h-=4,r.nlen>286||r.ndist>30){e.msg="too many length or distance symbols",r.mode=W;break}r.have=0,r.mode=16197;case 16197:for(;r.have<r.ncode;){for(;h<3;){if(0===l)break e;l--,f+=n[o++]<<h,h+=8}r.lens[ee[r.have++]]=7&f,f>>>=3,h-=3}for(;r.have<19;)r.lens[ee[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,S={bits:r.lenbits},H=I(0,r.lens,0,19,r.lencode,0,r.work,S),r.lenbits=S.bits,H){e.msg="invalid code lengths set",r.mode=W;break}r.have=0,r.mode=16198;case 16198:for(;r.have<r.nlen+r.ndist;){for(;v=($=r.lencode[f&(1<<r.lenbits)-1])>>>16&255,y=65535&$,!((m=$>>>24)<=h);){if(0===l)break e;l--,f+=n[o++]<<h,h+=8}if(y<16)f>>>=m,h-=m,r.lens[r.have++]=y;else{if(16===y){for(J=m+2;h<J;){if(0===l)break e;l--,f+=n[o++]<<h,h+=8}if(f>>>=m,h-=m,0===r.have){e.msg="invalid bit length repeat",r.mode=W;break}A=r.lens[r.have-1],w=3+(3&f),f>>>=2,h-=2}else if(17===y){for(J=m+3;h<J;){if(0===l)break e;l--,f+=n[o++]<<h,h+=8}h-=m,A=0,w=3+(7&(f>>>=m)),f>>>=3,h-=3}else{for(J=m+7;h<J;){if(0===l)break e;l--,f+=n[o++]<<h,h+=8}h-=m,A=0,w=11+(127&(f>>>=m)),f>>>=7,h-=7}if(r.have+w>r.nlen+r.ndist){e.msg="invalid bit length repeat",r.mode=W;break}for(;w--;)r.lens[r.have++]=A}}if(r.mode===W)break;if(0===r.lens[256]){e.msg="invalid code -- missing end-of-block",r.mode=W;break}if(r.lenbits=9,S={bits:r.lenbits},H=I(1,r.lens,0,r.nlen,r.lencode,0,r.work,S),r.lenbits=S.bits,H){e.msg="invalid literal/lengths set",r.mode=W;break}if(r.distbits=6,r.distcode=r.distdyn,S={bits:r.distbits},H=I(2,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,S),r.distbits=S.bits,H){e.msg="invalid distances set",r.mode=W;break}if(r.mode=K,t===U)break e;case K:r.mode=G;case G:if(l>=6&&d>=258){e.next_out=s,e.avail_out=d,e.next_in=o,e.avail_in=l,r.hold=f,r.bits=h,_(e,p),s=e.next_out,a=e.output,d=e.avail_out,o=e.next_in,n=e.input,l=e.avail_in,f=r.hold,h=r.bits,r.mode===z&&(r.back=-1);break}for(r.back=0;v=($=r.lencode[f&(1<<r.lenbits)-1])>>>16&255,y=65535&$,!((m=$>>>24)<=h);){if(0===l)break e;l--,f+=n[o++]<<h,h+=8}if(v&&0==(240&v)){for(g=m,E=v,x=y;v=($=r.lencode[x+((f&(1<<g+E)-1)>>g)])>>>16&255,y=65535&$,!(g+(m=$>>>24)<=h);){if(0===l)break e;l--,f+=n[o++]<<h,h+=8}f>>>=g,h-=g,r.back+=g}if(f>>>=m,h-=m,r.back+=m,r.length=y,0===v){r.mode=16205;break}if(32&v){r.back=-1,r.mode=z;break}if(64&v){e.msg="invalid literal/length code",r.mode=W;break}r.extra=15&v,r.mode=16201;case 16201:if(r.extra){for(J=r.extra;h<J;){if(0===l)break e;l--,f+=n[o++]<<h,h+=8}r.length+=f&(1<<r.extra)-1,f>>>=r.extra,h-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=16202;case 16202:for(;v=($=r.distcode[f&(1<<r.distbits)-1])>>>16&255,y=65535&$,!((m=$>>>24)<=h);){if(0===l)break e;l--,f+=n[o++]<<h,h+=8}if(0==(240&v)){for(g=m,E=v,x=y;v=($=r.distcode[x+((f&(1<<g+E)-1)>>g)])>>>16&255,y=65535&$,!(g+(m=$>>>24)<=h);){if(0===l)break e;l--,f+=n[o++]<<h,h+=8}f>>>=g,h-=g,r.back+=g}if(f>>>=m,h-=m,r.back+=m,64&v){e.msg="invalid distance code",r.mode=W;break}r.offset=y,r.extra=15&v,r.mode=16203;case 16203:if(r.extra){for(J=r.extra;h<J;){if(0===l)break e;l--,f+=n[o++]<<h,h+=8}r.offset+=f&(1<<r.extra)-1,f>>>=r.extra,h-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){e.msg="invalid distance too far back",r.mode=W;break}r.mode=16204;case 16204:if(0===d)break e;if(w=p-d,r.offset>w){if((w=r.offset-w)>r.whave&&r.sane){e.msg="invalid distance too far back",r.mode=W;break}w>r.wnext?(w-=r.wnext,k=r.wsize-w):k=r.wnext-w,w>r.length&&(w=r.length),b=r.window}else b=a,k=s-r.offset,w=r.length;w>d&&(w=d),d-=w,r.length-=w;do{a[s++]=b[k++]}while(--w);0===r.length&&(r.mode=G);break;case 16205:if(0===d)break e;a[s++]=r.length,d--,r.mode=G;break;case Y:if(r.wrap){for(;h<32;){if(0===l)break e;l--,f|=n[o++]<<h,h+=8}if(p-=d,e.total_out+=p,r.total+=p,4&r.wrap&&p&&(e.adler=r.check=r.flags?c(r.check,a,p,s-p):i(r.check,a,p,s-p)),p=d,4&r.wrap&&(r.flags?f:X(f))!==r.check){e.msg="incorrect data check",r.mode=W;break}f=0,h=0}r.mode=16207;case 16207:if(r.wrap&&r.flags){for(;h<32;){if(0===l)break e;l--,f+=n[o++]<<h,h+=8}if(4&r.wrap&&f!==(4294967295&r.total)){e.msg="incorrect length check",r.mode=W;break}f=0,h=0}r.mode=16208;case 16208:H=D;break e;case W:H=O;break e;case 16210:return F;default:return Z}return e.next_out=s,e.avail_out=d,e.next_in=o,e.avail_in=l,r.hold=f,r.bits=h,(r.wsize||p!==e.avail_out&&r.mode<W&&(r.mode<Y||t!==R))&&ie(e,e.output,e.next_out,p-e.avail_out),u-=e.avail_in,p-=e.avail_out,e.total_in+=u,e.total_out+=p,r.total+=p,4&r.wrap&&p&&(e.adler=r.check=r.flags?c(r.check,a,p,e.next_out-p):i(r.check,a,p,e.next_out-p)),e.data_type=r.bits+(r.last?64:0)+(r.mode===z?128:0)+(r.mode===K||r.mode===V?256:0),(0===u&&0===p||t===R)&&H===T&&(H=B),H},inflateEnd:function(e){if(Q(e))return Z;var t=e.state;return t.window&&(t.window=null),e.state=null,T},inflateGetHeader:function(e,t){if(Q(e))return Z;var r=e.state;return 0==(2&r.wrap)?Z:(r.head=t,t.done=!1,T)},inflateSetDictionary:function(e,t){var r,n=t.length;return Q(e)||0!==(r=e.state).wrap&&r.mode!==j?Z:r.mode===j&&i(1,t,n,0)!==r.check?O:ie(e,t,n,n)?(r.mode=16210,F):(r.havedict=1,T)},inflateInfo:"pako inflate (from Nodeca project)"};var ce=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1},le=Object.prototype.toString,de=d.Z_NO_FLUSH,fe=d.Z_FINISH,he=d.Z_OK,ue=d.Z_STREAM_END,pe=d.Z_NEED_DICT,we=d.Z_STREAM_ERROR,ke=d.Z_DATA_ERROR,be=d.Z_MEM_ERROR;function me(e){this.options=h({chunkSize:65536,windowBits:15,to:""},e||{});var t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(t.windowBits>=0&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&0==(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new y,this.strm.avail_out=0;var r=se.inflateInit2(this.strm,t.windowBits);if(r!==he)throw new Error(l[r]);if(this.header=new ce,se.inflateGetHeader(this.strm,this.header),t.dictionary&&("string"==typeof t.dictionary?t.dictionary=b(t.dictionary):"[object ArrayBuffer]"===le.call(t.dictionary)&&(t.dictionary=new Uint8Array(t.dictionary)),t.raw&&(r=se.inflateSetDictionary(this.strm,t.dictionary))!==he))throw new Error(l[r])}function ve(e,t){var r=new me(t);if(r.push(e),r.err)throw r.msg||l[r.err];return r.result}me.prototype.push=function(e,t){var r,n,a,o=this.strm,i=this.options.chunkSize,s=this.options.dictionary;if(this.ended)return!1;for(n=t===~~t?t:!0===t?fe:de,"[object ArrayBuffer]"===le.call(e)?o.input=new Uint8Array(e):o.input=e,o.next_in=0,o.avail_in=o.input.length;;){for(0===o.avail_out&&(o.output=new Uint8Array(i),o.next_out=0,o.avail_out=i),(r=se.inflate(o,n))===pe&&s&&((r=se.inflateSetDictionary(o,s))===he?r=se.inflate(o,n):r===ke&&(r=pe));o.avail_in>0&&r===ue&&o.state.wrap>0&&0!==e[o.next_in];)se.inflateReset(o),r=se.inflate(o,n);switch(r){case we:case ke:case pe:case be:return this.onEnd(r),this.ended=!0,!1}if(a=o.avail_out,o.next_out&&(0===o.avail_out||r===ue))if("string"===this.options.to){var c=v(o.output,o.next_out),l=o.next_out-c,d=m(o.output,c);o.next_out=l,o.avail_out=i-l,l&&o.output.set(o.output.subarray(c,c+l),0),this.onData(d)}else this.onData(o.output.length===o.next_out?o.output:o.output.subarray(0,o.next_out));if(r!==he||0!==a){if(r===ue)return r=se.inflateEnd(this.strm),this.onEnd(r),this.ended=!0,!0;if(0===o.avail_in)break}}return!0},me.prototype.onData=function(e){this.chunks.push(e)},me.prototype.onEnd=function(e){e===he&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=u(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg};var ye={Inflate:me,inflate:ve,inflateRaw:function(e,t){return(t=t||{}).raw=!0,ve(e,t)},ungzip:ve,constants:d}.inflateRaw,ge=function(){function n(e,t,r){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.bytecode=this.decodeBytecode(e),this.strings=t,this.dependencies=a.map((function(e){return"window"!==e?e:globalThis})),this.opcodeHandlers=[],this.stack=[],this.localVariables=[],this.lookUpTable=r,this.exitToPreviousContext=[function(){o.programCounter=o.bytecode.length+1}],this.programCounter=0,this.initOpcodeHandlers()}var o,i,s;return o=n,(i=[{key:"decodeBytecode",value:function(e){var t;t="undefined"!=typeof window?atob(e):Buffer.from(e,"base64").toString("ascii");for(var r=new Uint8Array(t.length),n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return ye(r)}},{key:"byteArrayToLong",value:function(e){return e.reverse(),e.reduce((function(e,t){return 256*e+t}))}},{key:"load8ByteArray",value:function(){for(var e=[],t=0;t<8;t++)e.push(this.bytecode[this.programCounter++]);return Uint8Array.from(e)}},{key:"getValue",value:function(){switch(this.bytecode[this.programCounter++]){case 0:var e=this.byteArrayToLong(this.load8ByteArray());return this.strings[e];case 1:return this.byteArrayToLong(this.load8ByteArray());case 2:return this.stack.pop();case 3:var t=this.bytecode[this.programCounter++];return this.localVariables[t];case 4:var r=this.bytecode[this.programCounter++];return this.dependencies[r];case 5:return;case 6:return[];case 7:return{}}}},{key:"jmpToBlock",value:function(e){var t=this,r=this.programCounter;this.exitToPreviousContext.push((function(){t.programCounter=r})),this.programCounter=e}},{key:"initOpcodeHandlers",value:function(){var t=this;this.opcodeHandlers[0]=function(){var e=t.stack.pop(),r=t.stack.pop();t.stack.push(r+e)},this.opcodeHandlers[1]=function(){var e=t.stack.pop(),r=t.stack.pop();t.stack.push(r-e)},this.opcodeHandlers[2]=function(){var e=t.stack.pop(),r=t.stack.pop();t.stack.push(r*e)},this.opcodeHandlers[3]=function(){var e=t.stack.pop(),r=t.stack.pop();t.stack.push(r/e)},this.opcodeHandlers[4]=function(){var e=t.stack.pop(),r=t.stack.pop();t.stack.push(r%e)},this.opcodeHandlers[5]=function(){var e=t.stack.pop();t.stack.push(!e)},this.opcodeHandlers[6]=function(){var e=t.getValue();t.localVariables[e]=t.getValue()},this.opcodeHandlers[7]=function(){var e=t.stack.pop(),r=t.stack.pop();t.stack.push(r[e])},this.opcodeHandlers[8]=function(){throw"UNFINISHED"},this.opcodeHandlers[9]=function(){throw"UNFINISHED"},this.opcodeHandlers[10]=function(){throw"UNFINISHED"},this.opcodeHandlers[11]=function(){throw"UNFINISHED"},this.opcodeHandlers[12]=function(){throw"UNFINISHED"},this.opcodeHandlers[13]=function(){var r=t.stack.pop();t.stack.push(e(r))},this.opcodeHandlers[14]=function(){var e=t.stack.pop(),n=t.stack.pop();t.stack.push(n.call.apply(n,[t].concat(r(e))))},this.opcodeHandlers[15]=function(){var e=t.stack.pop(),r=t.stack.pop();t.stack.push(r==e)},this.opcodeHandlers[16]=function(){var e=t.stack.pop(),r=t.stack.pop();t.stack.push(r!=e)},this.opcodeHandlers[17]=function(){var e=t.stack.pop(),r=t.stack.pop();t.stack.push(r<e)},this.opcodeHandlers[18]=function(){var e=t.stack.pop(),r=t.stack.pop();t.stack.push(r<=e)},this.opcodeHandlers[19]=function(){var e=t.stack.pop(),r=t.stack.pop();t.stack.push(r===e)},this.opcodeHandlers[20]=function(){var e=t.stack.pop(),r=t.stack.pop();t.stack.push(r!==e)},this.opcodeHandlers[21]=function(){var e=t.stack.pop(),r=t.stack.pop();t.stack.push(r>e)},this.opcodeHandlers[22]=function(){var e=t.stack.pop(),r=t.stack.pop();t.stack.push(r>=e)},this.opcodeHandlers[23]=function(){var e,r=t.stack.pop(),n=t.stack.pop();if(t.stack.pop())e=t.lookUpTable[n];else{if(void 0===r)return;e=t.lookUpTable[r]}if(void 0===e)throw"ILLEGAL_JMP";t.jmpToBlock(e)},this.opcodeHandlers[24]=function(){var e=t.stack.pop(),r=t.stack.pop();t.stack.push(r&&e)},this.opcodeHandlers[25]=function(){throw"UNFINISHED"},this.opcodeHandlers[26]=function(){var e=t.stack.pop();t.stack.push(!e)},this.opcodeHandlers[27]=function(){throw"UNFINISHED"},this.opcodeHandlers[28]=function(){throw"UNFINISHED"},this.opcodeHandlers[29]=function(){throw"UNFINISHED"},this.opcodeHandlers[30]=function(){throw"UNFINISHED"},this.opcodeHandlers[31]=function(){throw"UNFINISHED"},this.opcodeHandlers[32]=function(){throw"UNFINISHED"},this.opcodeHandlers[33]=function(){t.stack.push(t.getValue())},this.opcodeHandlers[34]=function(){var e=t.getValue();t.localVariables[e]=t.stack.pop()},this.opcodeHandlers[35]=function(){var e=t.stack.pop(),r=t.stack.pop();t.stack.push(new r(e))},this.opcodeHandlers[36]=function(){var e=t.stack.pop();t.stack.push([e])},this.opcodeHandlers[37]=function(){var e=t.exitToPreviousContext.pop();if(void 0===e)throw"EMPTY_TRACEBACK";e()},this.opcodeHandlers[38]=function(){throw"UNFINISHED"},this.opcodeHandlers[39]=function(){throw"UNFINISHED"},this.opcodeHandlers[40]=function(){throw"UNFINISHED"},this.opcodeHandlers[41]=function(){var e=t.stack.pop(),r=t.stack.pop(),n=t.stack.pop();t.stack.push(n.apply(r,e))},this.opcodeHandlers[42]=function(){var e,n=t.stack.pop(),a=t.stack.pop(),o=t.stack.pop();t.stack.push((e=o[a]).call.apply(e,[t].concat(r(n))))}}},{key:"start",value:function(){for(;this.programCounter<this.bytecode.length;){var e=this.programCounter++,t=this.bytecode[e];console.warn("EXECUTING: ".concat(t));var r=this.opcodeHandlers[t];if(void 0===r)throw"UNKNOWN_OPCODE";r()}}}])&&t(o.prototype,i),s&&t(o,s),Object.defineProperty(o,"prototype",{writable:!1}),n}();return ge}();
