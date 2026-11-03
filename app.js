var en={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},pn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sm=0,Su=1,rm=2;var gf=1,th=2,_i=3,si=0,Gt=1,vt=2;var Bi=0,js=1,wu=2,Tu=3,Au=4,am=5,cs=100,om=101,cm=102,Ru=103,Cu=104,lm=200,hm=201,um=202,dm=203,dl=204,fl=205,fm=206,pm=207,mm=208,gm=209,bm=210,_m=211,xm=212,ym=213,vm=214,Mm=0,Em=1,Sm=2,$a=3,wm=4,Tm=5,Am=6,Rm=7,bf=0,Cm=1,Pm=2,zi=0,Lm=1,Im=2,Dm=3,nh=4,Nm=5,Um=6,Pu="attached",Om="detached",_f=300,Zs=301,Js=302,pl=303,ml=304,Uo=306,Yn=1e3,vn=1001,zr=1002,Wt=1003,eo=1004;var Nr=1005;var un=1006,ih=1007;var ri=1008;var Gi=1009,Fm=1010,Hm=1011,sh=1012,xf=1013,Hi=1014,xi=1015,Gr=1016,yf=1017,vf=1018,hs=1020,km=1021,Ln=1023,Bm=1024,zm=1025,us=1026,Qs=1027,Gm=1028,Mf=1029,Vm=1030,Ef=1031,Sf=1033,Pc=33776,Lc=33777,Ic=33778,Dc=33779,Lu=35840,Iu=35841,Du=35842,Nu=35843,wf=36196,Uu=37492,Ou=37496,Fu=37808,Hu=37809,ku=37810,Bu=37811,zu=37812,Gu=37813,Vu=37814,Wu=37815,Xu=37816,qu=37817,ju=37818,Yu=37819,Ku=37820,Zu=37821,Nc=36492,Ju=36494,Qu=36495,Wm=36283,$u=36284,ed=36285,td=36286;var $s=2300,fs=2301,Uc=2302,nd=2400,id=2401,sd=2402,Xm=2500;var Tf=0,Oo=1,la=2,Af=3e3,ds=3001,qm=3200,rh=3201,Rf=0,jm=1,In="",At="srgb",qt="srgb-linear",ah="display-p3",Fo="display-p3-linear",to="linear",Pt="srgb",no="rec709",io="p3";var Ts=7680;var rd=519,Ym=512,Km=513,Zm=514,Cf=515,Jm=516,Qm=517,$m=518,e0=519,gl=35044,Pf=35048;var ad="300 es",bl=1035,yi=2e3,so=2001,ai=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],od=1234567,Ur=Math.PI/180,er=180/Math.PI;function Dn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function zt(i,e,t){return Math.max(e,Math.min(t,i))}function oh(i,e){return(i%e+e)%e}function t0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function n0(i,e,t){return i!==e?(t-i)/(e-i):0}function Or(i,e,t){return(1-t)*i+t*e}function i0(i,e,t,n){return Or(i,e,1-Math.exp(-t*n))}function s0(i,e=1){return e-Math.abs(oh(i,e*2)-e)}function r0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function a0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function o0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function c0(i,e){return i+Math.random()*(e-i)}function l0(i){return i*(.5-Math.random())}function h0(i){i!==void 0&&(od=i);let e=od+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function u0(i){return i*Ur}function d0(i){return i*er}function _l(i){return(i&i-1)===0&&i!==0}function f0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ro(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function p0(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*m,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*m,o*l);break;case"ZYZ":i.set(c*m,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ii(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Tt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ho={DEG2RAD:Ur,RAD2DEG:er,generateUUID:Dn,clamp:zt,euclideanModulo:oh,mapLinear:t0,inverseLerp:n0,lerp:Or,damp:i0,pingpong:s0,smoothstep:r0,smootherstep:a0,randInt:o0,randFloat:c0,randFloatSpread:l0,seededRandom:h0,degToRad:u0,radToDeg:d0,isPowerOfTwo:_l,ceilPowerOfTwo:f0,floorPowerOfTwo:ro,setQuaternionFromProperEuler:p0,normalize:Tt,denormalize:ii},re=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},it=class i{constructor(e,t,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],b=s[0],g=s[3],p=s[6],x=s[1],_=s[4],v=s[7],w=s[2],M=s[5],S=s[8];return r[0]=a*b+o*x+c*w,r[3]=a*g+o*_+c*M,r[6]=a*p+o*v+c*S,r[1]=l*b+h*x+u*w,r[4]=l*g+h*_+u*M,r[7]=l*p+h*v+u*S,r[2]=d*b+f*x+m*w,r[5]=d*g+f*_+m*M,r[8]=d*p+f*v+m*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,m=t*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/m;return e[0]=u*b,e[1]=(s*l-h*n)*b,e[2]=(o*n-s*a)*b,e[3]=d*b,e[4]=(h*t-s*c)*b,e[5]=(s*r-o*t)*b,e[6]=f*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Oc.makeScale(e,t)),this}rotate(e){return this.premultiply(Oc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Oc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Oc=new it;function Lf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Vr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function m0(){let i=Vr("canvas");return i.style.display="block",i}var cd={};function Fr(i){i in cd||(cd[i]=!0,console.warn(i))}var ld=new it().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),hd=new it().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ma={[qt]:{transfer:to,primaries:no,toReference:i=>i,fromReference:i=>i},[At]:{transfer:Pt,primaries:no,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Fo]:{transfer:to,primaries:io,toReference:i=>i.applyMatrix3(hd),fromReference:i=>i.applyMatrix3(ld)},[ah]:{transfer:Pt,primaries:io,toReference:i=>i.convertSRGBToLinear().applyMatrix3(hd),fromReference:i=>i.applyMatrix3(ld).convertLinearToSRGB()}},g0=new Set([qt,Fo]),yt={enabled:!0,_workingColorSpace:qt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!g0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Ma[e].toReference,s=Ma[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ma[i].primaries},getTransfer:function(i){return i===In?to:Ma[i].transfer}};function Ys(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var As,ao=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{As===void 0&&(As=Vr("canvas")),As.width=e.width,As.height=e.height;let n=As.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=As}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Vr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ys(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ys(t[n]/255)*255):t[n]=Ys(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},b0=0,oo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=Dn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Hc(s[a].image)):r.push(Hc(s[a]))}else r=Hc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Hc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ao.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var _0=0,$t=class i extends ai{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=vn,s=vn,r=un,a=ri,o=Ln,c=Gi,l=i.DEFAULT_ANISOTROPY,h=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=Dn(),this.name="",this.source=new oo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ds?At:In),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_f)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yn:e.x=e.x-Math.floor(e.x);break;case vn:e.x=e.x<0?0:1;break;case zr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yn:e.y=e.y-Math.floor(e.y);break;case vn:e.y=e.y<0?0:1;break;case zr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===At?ds:Af}set encoding(e){Fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ds?At:In}};$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=_f;$t.DEFAULT_ANISOTROPY=1;var wt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],b=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-b)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+b)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,v=(f+1)/2,w=(p+1)/2,M=(h+d)/4,S=(u+b)/4,R=(m+g)/4;return _>v&&_>w?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=M/n,r=S/n):v>w?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=M/s,r=R/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=S/r,s=R/r),this.set(n,s,r,t),this}let x=Math.sqrt((g-m)*(g-m)+(u-b)*(u-b)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(u-b)/x,this.z=(d-h)/x,this.w=Math.acos((l+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xl=class extends ai{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(Fr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ds?At:In),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new $t(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new oo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},vi=class extends xl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},co=class extends $t{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yl=class extends $t{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],m=r[a+2],b=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=b;return}if(u!==b||c!==d||l!==f||h!==m){let g=1-o,p=c*d+l*f+h*m+u*b,x=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let w=Math.sqrt(_),M=Math.atan2(w,p*x);g=Math.sin(g*M)/w,o=Math.sin(o*M)/w}let v=o*x;if(c=c*g+d*v,l=l*g+f*v,h=h*g+m*v,u=u*g+b*v,g===1-o){let w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*u+c*f-l*d,e[t+1]=c*m+h*d+l*u-o*f,e[t+2]=l*m+h*f+o*d-c*u,e[t+3]=h*m-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ud.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ud.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return kc.copy(this).projectOnVector(e),this.sub(kc)}reflect(e){return this.sub(kc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},kc=new A,ud=new Qt,gn=class{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Vn):Vn.fromBufferAttribute(r,a),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ea.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ea.copy(n.boundingBox)),Ea.applyMatrix4(e.matrixWorld),this.union(Ea)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ar),Sa.subVectors(this.max,Ar),Rs.subVectors(e.a,Ar),Cs.subVectors(e.b,Ar),Ps.subVectors(e.c,Ar),Di.subVectors(Cs,Rs),Ni.subVectors(Ps,Cs),is.subVectors(Rs,Ps);let t=[0,-Di.z,Di.y,0,-Ni.z,Ni.y,0,-is.z,is.y,Di.z,0,-Di.x,Ni.z,0,-Ni.x,is.z,0,-is.x,-Di.y,Di.x,0,-Ni.y,Ni.x,0,-is.y,is.x,0];return!Bc(t,Rs,Cs,Ps,Sa)||(t=[1,0,0,0,1,0,0,0,1],!Bc(t,Rs,Cs,Ps,Sa))?!1:(wa.crossVectors(Di,Ni),t=[wa.x,wa.y,wa.z],Bc(t,Rs,Cs,Ps,Sa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},di=[new A,new A,new A,new A,new A,new A,new A,new A],Vn=new A,Ea=new gn,Rs=new A,Cs=new A,Ps=new A,Di=new A,Ni=new A,is=new A,Ar=new A,Sa=new A,wa=new A,ss=new A;function Bc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ss.fromArray(i,r);let o=s.x*Math.abs(ss.x)+s.y*Math.abs(ss.y)+s.z*Math.abs(ss.z),c=e.dot(ss),l=t.dot(ss),h=n.dot(ss);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var x0=new gn,Rr=new A,zc=new A,Mn=class{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):x0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rr.subVectors(e,this.center);let t=Rr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Rr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rr.copy(e.center).add(zc)),this.expandByPoint(Rr.copy(e.center).sub(zc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},fi=new A,Gc=new A,Ta=new A,Ui=new A,Vc=new A,Aa=new A,Wc=new A,Mi=class{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Gc.copy(e).add(t).multiplyScalar(.5),Ta.copy(t).sub(e).normalize(),Ui.copy(this.origin).sub(Gc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ta),o=Ui.dot(this.direction),c=-Ui.dot(Ta),l=Ui.lengthSq(),h=Math.abs(1-a*a),u,d,f,m;if(h>0)if(u=a*c-o,d=a*o-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let b=1/h;u*=b,d*=b,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Gc).addScaledVector(Ta,d),f}intersectSphere(e,t){fi.subVectors(e.center,this.origin);let n=fi.dot(this.direction),s=fi.dot(fi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,n,s,r){Vc.subVectors(t,e),Aa.subVectors(n,e),Wc.crossVectors(Vc,Aa);let a=this.direction.dot(Wc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ui.subVectors(this.origin,e);let c=o*this.direction.dot(Aa.crossVectors(Ui,Aa));if(c<0)return null;let l=o*this.direction.dot(Vc.cross(Ui));if(l<0||c+l>a)return null;let h=-o*Ui.dot(Wc);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xe=class i{constructor(e,t,n,s,r,a,o,c,l,h,u,d,f,m,b,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,d,f,m,b,g)}set(e,t,n,s,r,a,o,c,l,h,u,d,f,m,b,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=b,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ls.setFromMatrixColumn(e,0).length(),r=1/Ls.setFromMatrixColumn(e,1).length(),a=1/Ls.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,m=o*h,b=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+m*l,t[5]=d-b*l,t[9]=-o*c,t[2]=b-d*l,t[6]=m+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,m=l*h,b=l*u;t[0]=d+b*o,t[4]=m*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=b+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,m=l*h,b=l*u;t[0]=d-b*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=b-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,m=o*h,b=o*u;t[0]=c*h,t[4]=m*l-f,t[8]=d*l+b,t[1]=c*u,t[5]=b*l+d,t[9]=f*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,m=o*c,b=o*l;t[0]=c*h,t[4]=b-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+m,t[10]=d-b*u}else if(e.order==="XZY"){let d=a*c,f=a*l,m=o*c,b=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+b,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=b*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(y0,e,v0)}lookAt(e,t,n){let s=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Oi.crossVectors(n,xn),Oi.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Oi.crossVectors(n,xn)),Oi.normalize(),Ra.crossVectors(xn,Oi),s[0]=Oi.x,s[4]=Ra.x,s[8]=xn.x,s[1]=Oi.y,s[5]=Ra.y,s[9]=xn.y,s[2]=Oi.z,s[6]=Ra.z,s[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],b=n[6],g=n[10],p=n[14],x=n[3],_=n[7],v=n[11],w=n[15],M=s[0],S=s[4],R=s[8],y=s[12],E=s[1],I=s[5],O=s[9],k=s[13],L=s[2],U=s[6],D=s[10],G=s[14],z=s[3],V=s[7],Q=s[11],te=s[15];return r[0]=a*M+o*E+c*L+l*z,r[4]=a*S+o*I+c*U+l*V,r[8]=a*R+o*O+c*D+l*Q,r[12]=a*y+o*k+c*G+l*te,r[1]=h*M+u*E+d*L+f*z,r[5]=h*S+u*I+d*U+f*V,r[9]=h*R+u*O+d*D+f*Q,r[13]=h*y+u*k+d*G+f*te,r[2]=m*M+b*E+g*L+p*z,r[6]=m*S+b*I+g*U+p*V,r[10]=m*R+b*O+g*D+p*Q,r[14]=m*y+b*k+g*G+p*te,r[3]=x*M+_*E+v*L+w*z,r[7]=x*S+_*I+v*U+w*V,r[11]=x*R+_*O+v*D+w*Q,r[15]=x*y+_*k+v*G+w*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],b=e[7],g=e[11],p=e[15];return m*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*f-n*c*f)+b*(+t*c*f-t*l*d+r*a*d-s*a*f+s*l*h-r*c*h)+g*(+t*l*u-t*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-s*o*h-t*c*u+t*o*d+s*a*u-n*a*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],b=e[13],g=e[14],p=e[15],x=u*g*l-b*d*l+b*c*f-o*g*f-u*c*p+o*d*p,_=m*d*l-h*g*l-m*c*f+a*g*f+h*c*p-a*d*p,v=h*b*l-m*u*l+m*o*f-a*b*f-h*o*p+a*u*p,w=m*u*c-h*b*c-m*o*d+a*b*d+h*o*g-a*u*g,M=t*x+n*_+s*v+r*w;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/M;return e[0]=x*S,e[1]=(b*d*r-u*g*r-b*s*f+n*g*f+u*s*p-n*d*p)*S,e[2]=(o*g*r-b*c*r+b*s*l-n*g*l-o*s*p+n*c*p)*S,e[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*f-n*c*f)*S,e[4]=_*S,e[5]=(h*g*r-m*d*r+m*s*f-t*g*f-h*s*p+t*d*p)*S,e[6]=(m*c*r-a*g*r-m*s*l+t*g*l+a*s*p-t*c*p)*S,e[7]=(a*d*r-h*c*r+h*s*l-t*d*l-a*s*f+t*c*f)*S,e[8]=v*S,e[9]=(m*u*r-h*b*r-m*n*f+t*b*f+h*n*p-t*u*p)*S,e[10]=(a*b*r-m*o*r+m*n*l-t*b*l-a*n*p+t*o*p)*S,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*f-t*o*f)*S,e[12]=w*S,e[13]=(h*b*s-m*u*s+m*n*d-t*b*d-h*n*g+t*u*g)*S,e[14]=(m*o*s-a*b*s-m*n*c+t*b*c+a*n*g-t*o*g)*S,e[15]=(a*u*s-h*o*s+h*n*c-t*u*c-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,m=r*u,b=a*h,g=a*u,p=o*u,x=c*l,_=c*h,v=c*u,w=n.x,M=n.y,S=n.z;return s[0]=(1-(b+p))*w,s[1]=(f+v)*w,s[2]=(m-_)*w,s[3]=0,s[4]=(f-v)*M,s[5]=(1-(d+p))*M,s[6]=(g+x)*M,s[7]=0,s[8]=(m+_)*S,s[9]=(g-x)*S,s[10]=(1-(d+b))*S,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ls.set(s[0],s[1],s[2]).length(),a=Ls.set(s[4],s[5],s[6]).length(),o=Ls.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Wn.copy(this);let l=1/r,h=1/a,u=1/o;return Wn.elements[0]*=l,Wn.elements[1]*=l,Wn.elements[2]*=l,Wn.elements[4]*=h,Wn.elements[5]*=h,Wn.elements[6]*=h,Wn.elements[8]*=u,Wn.elements[9]*=u,Wn.elements[10]*=u,t.setFromRotationMatrix(Wn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=yi){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),f,m;if(o===yi)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===so)f=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=yi){let c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(a-r),d=(t+e)*l,f=(n+s)*h,m,b;if(o===yi)m=(a+r)*u,b=-2*u;else if(o===so)m=r*u,b=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=b,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ls=new A,Wn=new Xe,y0=new A(0,0,0),v0=new A(1,1,1),Oi=new A,Ra=new A,xn=new A,dd=new Xe,fd=new Qt,tr=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return dd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fd.setFromEuler(this),this.setFromQuaternion(fd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};tr.DEFAULT_ORDER="XYZ";var Wr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},M0=0,pd=new A,Is=new Qt,pi=new Xe,Ca=new A,Cr=new A,E0=new A,S0=new Qt,md=new A(1,0,0),gd=new A(0,1,0),bd=new A(0,0,1),w0={type:"added"},T0={type:"removed"},Lt=class i extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new A,t=new tr,n=new Qt,s=new A(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Xe},normalMatrix:{value:new it}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(md,e)}rotateY(e){return this.rotateOnAxis(gd,e)}rotateZ(e){return this.rotateOnAxis(bd,e)}translateOnAxis(e,t){return pd.copy(e).applyQuaternion(this.quaternion),this.position.add(pd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(md,e)}translateY(e){return this.translateOnAxis(gd,e)}translateZ(e){return this.translateOnAxis(bd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ca.copy(e):Ca.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Cr,Ca,this.up):pi.lookAt(Ca,Cr,this.up),this.quaternion.setFromRotationMatrix(pi),s&&(pi.extractRotation(s.matrixWorld),Is.setFromRotationMatrix(pi),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(w0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(T0)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,e,E0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,S0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Lt.DEFAULT_UP=new A(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xn=new A,mi=new A,Xc=new A,gi=new A,Ds=new A,Ns=new A,_d=new A,qc=new A,jc=new A,Yc=new A,Pa=!1,Vs=class i{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Xn.subVectors(e,t),s.cross(Xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Xn.subVectors(s,t),mi.subVectors(n,t),Xc.subVectors(e,t);let a=Xn.dot(Xn),o=Xn.dot(mi),c=Xn.dot(Xc),l=mi.dot(mi),h=mi.dot(Xc),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,m=(a*h-o*c)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getUV(e,t,n,s,r,a,o,c){return Pa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Pa=!0),this.getInterpolation(e,t,n,s,r,a,o,c)}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,gi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,gi.x),c.addScaledVector(a,gi.y),c.addScaledVector(o,gi.z),c)}static isFrontFacing(e,t,n,s){return Xn.subVectors(n,t),mi.subVectors(e,t),Xn.cross(mi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Xn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Pa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Pa=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ds.subVectors(s,n),Ns.subVectors(r,n),qc.subVectors(e,n);let c=Ds.dot(qc),l=Ns.dot(qc);if(c<=0&&l<=0)return t.copy(n);jc.subVectors(e,s);let h=Ds.dot(jc),u=Ns.dot(jc);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Ds,a);Yc.subVectors(e,r);let f=Ds.dot(Yc),m=Ns.dot(Yc);if(m>=0&&f<=m)return t.copy(r);let b=f*l-c*m;if(b<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(Ns,o);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return _d.subVectors(r,s),o=(u-h)/(u-h+(f-m)),t.copy(s).addScaledVector(_d,o);let p=1/(g+b+d);return a=b*p,o=d*p,t.copy(n).addScaledVector(Ds,a).addScaledVector(Ns,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},If={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},La={h:0,s:0,l:0};function Kc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Pe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,yt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=yt.workingColorSpace){if(e=oh(e,1),t=zt(t,0,1),n=zt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Kc(a,r,e+1/3),this.g=Kc(a,r,e),this.b=Kc(a,r,e-1/3)}return yt.toWorkingColorSpace(this,s),this}setStyle(e,t=At){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){let n=If[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}copyLinearToSRGB(e){return this.r=Fc(e.r),this.g=Fc(e.g),this.b=Fc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return yt.fromWorkingColorSpace(an.copy(this),e),Math.round(zt(an.r*255,0,255))*65536+Math.round(zt(an.g*255,0,255))*256+Math.round(zt(an.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace(an.copy(this),t);let n=an.r,s=an.g,r=an.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=At){yt.fromWorkingColorSpace(an.copy(this),e);let t=an.r,n=an.g,s=an.b;return e!==At?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+t,Fi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fi),e.getHSL(La);let n=Or(Fi.h,La.h,t),s=Or(Fi.s,La.s,t),r=Or(Fi.l,La.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},an=new Pe;Pe.NAMES=If;var A0=0,En=class extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=Dn(),this.name="",this.type="Material",this.blending=js,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dl,this.blendDst=fl,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=$a,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dl&&(n.blendSrc=this.blendSrc),this.blendDst!==fl&&(n.blendDst=this.blendDst),this.blendEquation!==cs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$a&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},dn=class extends En{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Bt=new A,Ia=new re,Mt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=gl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ia.fromBufferAttribute(this,t),Ia.applyMatrix3(e),this.setXY(t,Ia.x,Ia.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gl&&(e.usage=this.usage),e}};var lo=class extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ho=class extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ie=class extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var R0=0,Pn=new Xe,Zc=new Lt,Us=new A,yn=new gn,Pr=new gn,Jt=new A,dt=class i extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lf(e)?ho:lo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new it().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,n){return Pn.makeTranslation(e,t,n),this.applyMatrix4(Pn),this}scale(e,t,n){return Pn.makeScale(e,t,n),this.applyMatrix4(Pn),this}lookAt(e){return Zc.lookAt(e),Zc.updateMatrix(),this.applyMatrix4(Zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ie(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new A,1/0);return}if(e){let n=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Pr.setFromBufferAttribute(o),this.morphTargetsRelative?(Jt.addVectors(yn.min,Pr.min),yn.expandByPoint(Jt),Jt.addVectors(yn.max,Pr.max),yn.expandByPoint(Jt)):(yn.expandByPoint(Pr.min),yn.expandByPoint(Pr.max))}yn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Jt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Jt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Jt.fromBufferAttribute(o,l),c&&(Us.fromBufferAttribute(e,l),Jt.add(Us)),s=Math.max(s,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mt(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let E=0;E<o;E++)l[E]=new A,h[E]=new A;let u=new A,d=new A,f=new A,m=new re,b=new re,g=new re,p=new A,x=new A;function _(E,I,O){u.fromArray(s,E*3),d.fromArray(s,I*3),f.fromArray(s,O*3),m.fromArray(a,E*2),b.fromArray(a,I*2),g.fromArray(a,O*2),d.sub(u),f.sub(u),b.sub(m),g.sub(m);let k=1/(b.x*g.y-g.x*b.y);isFinite(k)&&(p.copy(d).multiplyScalar(g.y).addScaledVector(f,-b.y).multiplyScalar(k),x.copy(f).multiplyScalar(b.x).addScaledVector(d,-g.x).multiplyScalar(k),l[E].add(p),l[I].add(p),l[O].add(p),h[E].add(x),h[I].add(x),h[O].add(x))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let E=0,I=v.length;E<I;++E){let O=v[E],k=O.start,L=O.count;for(let U=k,D=k+L;U<D;U+=3)_(n[U+0],n[U+1],n[U+2])}let w=new A,M=new A,S=new A,R=new A;function y(E){S.fromArray(r,E*3),R.copy(S);let I=l[E];w.copy(I),w.sub(S.multiplyScalar(S.dot(I))).normalize(),M.crossVectors(R,I);let k=M.dot(h[E])<0?-1:1;c[E*4]=w.x,c[E*4+1]=w.y,c[E*4+2]=w.z,c[E*4+3]=k}for(let E=0,I=v.length;E<I;++E){let O=v[E],k=O.start,L=O.count;for(let U=k,D=k+L;U<D;U+=3)y(n[U+0]),y(n[U+1]),y(n[U+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new A,r=new A,a=new A,o=new A,c=new A,l=new A,h=new A,u=new A;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),b=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let b=0,g=c.length;b<g;b++){o.isInterleavedBufferAttribute?f=c[b]*o.data.stride+o.offset:f=c[b]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new Mt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},xd=new Xe,rs=new Mi,Da=new Mn,yd=new A,Os=new A,Fs=new A,Hs=new A,Jc=new A,Na=new A,Ua=new re,Oa=new re,Fa=new re,vd=new A,Md=new A,Ed=new A,Ha=new A,ka=new A,q=class extends Lt{constructor(e=new dt,t=new dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Na.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Jc.fromBufferAttribute(u,e),a?Na.addScaledVector(Jc,h):Na.addScaledVector(Jc.sub(t),h))}t.add(Na)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(r),rs.copy(e.ray).recast(e.near),!(Da.containsPoint(rs.origin)===!1&&(rs.intersectSphere(Da,yd)===null||rs.origin.distanceToSquared(yd)>(e.far-e.near)**2))&&(xd.copy(r).invert(),rs.copy(e.ray).applyMatrix4(xd),!(n.boundingBox!==null&&rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,rs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,b=d.length;m<b;m++){let g=d[m],p=a[g.materialIndex],x=Math.max(g.start,f.start),_=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let v=x,w=_;v<w;v+=3){let M=o.getX(v),S=o.getX(v+1),R=o.getX(v+2);s=Ba(this,p,e,n,l,h,u,M,S,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let g=m,p=b;g<p;g+=3){let x=o.getX(g),_=o.getX(g+1),v=o.getX(g+2);s=Ba(this,a,e,n,l,h,u,x,_,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,b=d.length;m<b;m++){let g=d[m],p=a[g.materialIndex],x=Math.max(g.start,f.start),_=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let v=x,w=_;v<w;v+=3){let M=v,S=v+1,R=v+2;s=Ba(this,p,e,n,l,h,u,M,S,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),b=Math.min(c.count,f.start+f.count);for(let g=m,p=b;g<p;g+=3){let x=g,_=g+1,v=g+2;s=Ba(this,a,e,n,l,h,u,x,_,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function C0(i,e,t,n,s,r,a,o){let c;if(e.side===Gt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===si,o),c===null)return null;ka.copy(o),ka.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ka);return l<t.near||l>t.far?null:{distance:l,point:ka.clone(),object:i}}function Ba(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Os),i.getVertexPosition(c,Fs),i.getVertexPosition(l,Hs);let h=C0(i,e,t,n,Os,Fs,Hs,Ha);if(h){s&&(Ua.fromBufferAttribute(s,o),Oa.fromBufferAttribute(s,c),Fa.fromBufferAttribute(s,l),h.uv=Vs.getInterpolation(Ha,Os,Fs,Hs,Ua,Oa,Fa,new re)),r&&(Ua.fromBufferAttribute(r,o),Oa.fromBufferAttribute(r,c),Fa.fromBufferAttribute(r,l),h.uv1=Vs.getInterpolation(Ha,Os,Fs,Hs,Ua,Oa,Fa,new re),h.uv2=h.uv1),a&&(vd.fromBufferAttribute(a,o),Md.fromBufferAttribute(a,c),Ed.fromBufferAttribute(a,l),h.normal=Vs.getInterpolation(Ha,Os,Fs,Hs,vd,Md,Ed,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new A,materialIndex:0};Vs.getNormal(Os,Fs,Hs,u.normal),h.face=u}return h}var mt=class i extends dt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ie(l,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(u,2));function m(b,g,p,x,_,v,w,M,S,R,y){let E=v/S,I=w/R,O=v/2,k=w/2,L=M/2,U=S+1,D=R+1,G=0,z=0,V=new A;for(let Q=0;Q<D;Q++){let te=Q*I-k;for(let ie=0;ie<U;ie++){let Z=ie*E-O;V[b]=Z*x,V[g]=te*_,V[p]=L,l.push(V.x,V.y,V.z),V[b]=0,V[g]=0,V[p]=M>0?1:-1,h.push(V.x,V.y,V.z),u.push(ie/S),u.push(1-Q/R),G+=1}}for(let Q=0;Q<R;Q++)for(let te=0;te<S;te++){let ie=d+te+U*Q,Z=d+te+U*(Q+1),ne=d+(te+1)+U*(Q+1),ue=d+(te+1)+U*Q;c.push(ie,Z,ue),c.push(Z,ne,ue),z+=6}o.addGroup(f,z,y),f+=z,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function nr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function hn(i){let e={};for(let t=0;t<i.length;t++){let n=nr(i[t]);for(let s in n)e[s]=n[s]}return e}function P0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Df(i){return i.getRenderTarget()===null?i.outputColorSpace:yt.workingColorSpace}var L0={clone:nr,merge:hn},I0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,D0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Kn=class extends En{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I0,this.fragmentShader=D0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=nr(e.uniforms),this.uniformsGroups=P0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},uo=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=yi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Xt=class extends uo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=er*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ur*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return er*2*Math.atan(Math.tan(Ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ur*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ks=-90,Bs=1,vl=class extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xt(ks,Bs,e,t);s.layers=this.layers,this.add(s);let r=new Xt(ks,Bs,e,t);r.layers=this.layers,this.add(r);let a=new Xt(ks,Bs,e,t);a.layers=this.layers,this.add(a);let o=new Xt(ks,Bs,e,t);o.layers=this.layers,this.add(o);let c=new Xt(ks,Bs,e,t);c.layers=this.layers,this.add(c);let l=new Xt(ks,Bs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===yi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===so)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},fo=class extends $t{constructor(e,t,n,s,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Zs,super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ml=class extends vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Fr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ds?At:In),this.texture=new fo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new mt(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:Bi});r.uniforms.tEquirect.value=t;let a=new q(s,r),o=t.minFilter;return t.minFilter===ri&&(t.minFilter=un),new vl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Qc=new A,N0=new A,U0=new it,qn=class{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Qc.subVectors(n,t).cross(N0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Qc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||U0.getNormalMatrix(e),s=this.coplanarPoint(Qc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},as=new Mn,za=new A,Xr=class{constructor(e=new qn,t=new qn,n=new qn,s=new qn,r=new qn,a=new qn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yi){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],b=s[10],g=s[11],p=s[12],x=s[13],_=s[14],v=s[15];if(n[0].setComponents(c-r,d-l,g-f,v-p).normalize(),n[1].setComponents(c+r,d+l,g+f,v+p).normalize(),n[2].setComponents(c+a,d+h,g+m,v+x).normalize(),n[3].setComponents(c-a,d-h,g-m,v-x).normalize(),n[4].setComponents(c-o,d-u,g-b,v-_).normalize(),t===yi)n[5].setComponents(c+o,d+u,g+b,v+_).normalize();else if(t===so)n[5].setComponents(o,u,b,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){return as.center.set(0,0,0),as.radius=.7071067811865476,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(za.x=s.normal.x>0?e.max.x:e.min.x,za.y=s.normal.y>0?e.max.y:e.min.y,za.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(za)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Nf(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function O0(i,e){let t=e.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,d=l.usage,f=u.byteLength,m=i.createBuffer();i.bindBuffer(h,m),i.bufferData(h,u,d),l.onUploadCallback();let b;if(u instanceof Float32Array)b=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)b=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)b=i.SHORT;else if(u instanceof Uint32Array)b=i.UNSIGNED_INT;else if(u instanceof Int32Array)b=i.INT;else if(u instanceof Int8Array)b=i.BYTE;else if(u instanceof Uint8Array)b=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)b=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:b,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,h,u){let d=h.array,f=h._updateRange,m=h.updateRanges;if(i.bindBuffer(u,l),f.count===-1&&m.length===0&&i.bufferSubData(u,0,d),m.length!==0){for(let b=0,g=m.length;b<g;b++){let p=m[b];t?i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(t?i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:a,remove:o,update:c}}var Ht=class i extends dt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,f=[],m=[],b=[],g=[];for(let p=0;p<h;p++){let x=p*d-a;for(let _=0;_<l;_++){let v=_*u-r;m.push(v,-x,0),b.push(0,0,1),g.push(_/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){let _=x+l*p,v=x+l*(p+1),w=x+1+l*(p+1),M=x+1+l*p;f.push(_,v,M),f.push(v,w,M)}this.setIndex(f),this.setAttribute("position",new Ie(m,3)),this.setAttribute("normal",new Ie(b,3)),this.setAttribute("uv",new Ie(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},F0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,H0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,k0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,B0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,z0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,G0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,V0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,W0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,X0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,q0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,j0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Y0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,K0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Z0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,J0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Q0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ng=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ig=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,rg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ag=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,og=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,lg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ug=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fg="gl_FragColor = linearToOutputTexel( gl_FragColor );",pg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,mg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_g=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Eg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Tg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ag=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Pg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Lg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ig=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ng=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ug=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Og=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Vg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Wg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Qg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,$g=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,eb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ib=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ab=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ob=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ub=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,db=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_b=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,xb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Mb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Eb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Sb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Tb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ab=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Db=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ub=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ob=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Vb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Wb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Xb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Jb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$b=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,t1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,i1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,s1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,o1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,u1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,d1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,p1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,m1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:F0,alphahash_pars_fragment:H0,alphamap_fragment:k0,alphamap_pars_fragment:B0,alphatest_fragment:z0,alphatest_pars_fragment:G0,aomap_fragment:V0,aomap_pars_fragment:W0,batching_pars_vertex:X0,batching_vertex:q0,begin_vertex:j0,beginnormal_vertex:Y0,bsdfs:K0,iridescence_fragment:Z0,bumpmap_pars_fragment:J0,clipping_planes_fragment:Q0,clipping_planes_pars_fragment:$0,clipping_planes_pars_vertex:eg,clipping_planes_vertex:tg,color_fragment:ng,color_pars_fragment:ig,color_pars_vertex:sg,color_vertex:rg,common:ag,cube_uv_reflection_fragment:og,defaultnormal_vertex:cg,displacementmap_pars_vertex:lg,displacementmap_vertex:hg,emissivemap_fragment:ug,emissivemap_pars_fragment:dg,colorspace_fragment:fg,colorspace_pars_fragment:pg,envmap_fragment:mg,envmap_common_pars_fragment:gg,envmap_pars_fragment:bg,envmap_pars_vertex:_g,envmap_physical_pars_fragment:Pg,envmap_vertex:xg,fog_vertex:yg,fog_pars_vertex:vg,fog_fragment:Mg,fog_pars_fragment:Eg,gradientmap_pars_fragment:Sg,lightmap_fragment:wg,lightmap_pars_fragment:Tg,lights_lambert_fragment:Ag,lights_lambert_pars_fragment:Rg,lights_pars_begin:Cg,lights_toon_fragment:Lg,lights_toon_pars_fragment:Ig,lights_phong_fragment:Dg,lights_phong_pars_fragment:Ng,lights_physical_fragment:Ug,lights_physical_pars_fragment:Og,lights_fragment_begin:Fg,lights_fragment_maps:Hg,lights_fragment_end:kg,logdepthbuf_fragment:Bg,logdepthbuf_pars_fragment:zg,logdepthbuf_pars_vertex:Gg,logdepthbuf_vertex:Vg,map_fragment:Wg,map_pars_fragment:Xg,map_particle_fragment:qg,map_particle_pars_fragment:jg,metalnessmap_fragment:Yg,metalnessmap_pars_fragment:Kg,morphcolor_vertex:Zg,morphnormal_vertex:Jg,morphtarget_pars_vertex:Qg,morphtarget_vertex:$g,normal_fragment_begin:eb,normal_fragment_maps:tb,normal_pars_fragment:nb,normal_pars_vertex:ib,normal_vertex:sb,normalmap_pars_fragment:rb,clearcoat_normal_fragment_begin:ab,clearcoat_normal_fragment_maps:ob,clearcoat_pars_fragment:cb,iridescence_pars_fragment:lb,opaque_fragment:hb,packing:ub,premultiplied_alpha_fragment:db,project_vertex:fb,dithering_fragment:pb,dithering_pars_fragment:mb,roughnessmap_fragment:gb,roughnessmap_pars_fragment:bb,shadowmap_pars_fragment:_b,shadowmap_pars_vertex:xb,shadowmap_vertex:yb,shadowmask_pars_fragment:vb,skinbase_vertex:Mb,skinning_pars_vertex:Eb,skinning_vertex:Sb,skinnormal_vertex:wb,specularmap_fragment:Tb,specularmap_pars_fragment:Ab,tonemapping_fragment:Rb,tonemapping_pars_fragment:Cb,transmission_fragment:Pb,transmission_pars_fragment:Lb,uv_pars_fragment:Ib,uv_pars_vertex:Db,uv_vertex:Nb,worldpos_vertex:Ub,background_vert:Ob,background_frag:Fb,backgroundCube_vert:Hb,backgroundCube_frag:kb,cube_vert:Bb,cube_frag:zb,depth_vert:Gb,depth_frag:Vb,distanceRGBA_vert:Wb,distanceRGBA_frag:Xb,equirect_vert:qb,equirect_frag:jb,linedashed_vert:Yb,linedashed_frag:Kb,meshbasic_vert:Zb,meshbasic_frag:Jb,meshlambert_vert:Qb,meshlambert_frag:$b,meshmatcap_vert:e1,meshmatcap_frag:t1,meshnormal_vert:n1,meshnormal_frag:i1,meshphong_vert:s1,meshphong_frag:r1,meshphysical_vert:a1,meshphysical_frag:o1,meshtoon_vert:c1,meshtoon_frag:l1,points_vert:h1,points_frag:u1,shadow_vert:d1,shadow_frag:f1,sprite_vert:p1,sprite_frag:m1},xe={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},ni={basic:{uniforms:hn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:hn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:hn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:hn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:hn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:hn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:hn([xe.points,xe.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:hn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:hn([xe.common,xe.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:hn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:hn([xe.sprite,xe.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:hn([xe.common,xe.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:hn([xe.lights,xe.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};ni.physical={uniforms:hn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var Ga={r:0,b:0,g:0};function g1(i,e,t,n,s,r,a){let o=new Pe(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(g,p){let x=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?t:e).get(_)),_===null?b(o,c):_&&_.isColor&&(b(_,1),x=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Uo)?(h===void 0&&(h=new q(new mt(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:nr(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,M,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=yt.getTransfer(_.colorSpace)!==Pt,(u!==_||d!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new q(new Ht(2,2),new Kn({name:"BackgroundMaterial",uniforms:nr(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=yt.getTransfer(_.colorSpace)!==Pt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function b(g,p){g.getRGB(Ga,Df(i)),n.buffers.color.setClear(Ga.r,Ga.g,Ga.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(g,p=1){o.set(g),c=p,b(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,b(o,c)},render:m}}function b1(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=g(null),l=c,h=!1;function u(L,U,D,G,z){let V=!1;if(a){let Q=b(G,D,U);l!==Q&&(l=Q,f(l.object)),V=p(L,G,D,z),V&&x(L,G,D,z)}else{let Q=U.wireframe===!0;(l.geometry!==G.id||l.program!==D.id||l.wireframe!==Q)&&(l.geometry=G.id,l.program=D.id,l.wireframe=Q,V=!0)}z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(V||h)&&(h=!1,R(L,U,D,G),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function m(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function b(L,U,D){let G=D.wireframe===!0,z=o[L.id];z===void 0&&(z={},o[L.id]=z);let V=z[U.id];V===void 0&&(V={},z[U.id]=V);let Q=V[G];return Q===void 0&&(Q=g(d()),V[G]=Q),Q}function g(L){let U=[],D=[],G=[];for(let z=0;z<s;z++)U[z]=0,D[z]=0,G[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:D,attributeDivisors:G,object:L,attributes:{},index:null}}function p(L,U,D,G){let z=l.attributes,V=U.attributes,Q=0,te=D.getAttributes();for(let ie in te)if(te[ie].location>=0){let ne=z[ie],ue=V[ie];if(ue===void 0&&(ie==="instanceMatrix"&&L.instanceMatrix&&(ue=L.instanceMatrix),ie==="instanceColor"&&L.instanceColor&&(ue=L.instanceColor)),ne===void 0||ne.attribute!==ue||ue&&ne.data!==ue.data)return!0;Q++}return l.attributesNum!==Q||l.index!==G}function x(L,U,D,G){let z={},V=U.attributes,Q=0,te=D.getAttributes();for(let ie in te)if(te[ie].location>=0){let ne=V[ie];ne===void 0&&(ie==="instanceMatrix"&&L.instanceMatrix&&(ne=L.instanceMatrix),ie==="instanceColor"&&L.instanceColor&&(ne=L.instanceColor));let ue={};ue.attribute=ne,ne&&ne.data&&(ue.data=ne.data),z[ie]=ue,Q++}l.attributes=z,l.attributesNum=Q,l.index=G}function _(){let L=l.newAttributes;for(let U=0,D=L.length;U<D;U++)L[U]=0}function v(L){w(L,0)}function w(L,U){let D=l.newAttributes,G=l.enabledAttributes,z=l.attributeDivisors;D[L]=1,G[L]===0&&(i.enableVertexAttribArray(L),G[L]=1),z[L]!==U&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,U),z[L]=U)}function M(){let L=l.newAttributes,U=l.enabledAttributes;for(let D=0,G=U.length;D<G;D++)U[D]!==L[D]&&(i.disableVertexAttribArray(D),U[D]=0)}function S(L,U,D,G,z,V,Q){Q===!0?i.vertexAttribIPointer(L,U,D,z,V):i.vertexAttribPointer(L,U,D,G,z,V)}function R(L,U,D,G){if(n.isWebGL2===!1&&(L.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let z=G.attributes,V=D.getAttributes(),Q=U.defaultAttributeValues;for(let te in V){let ie=V[te];if(ie.location>=0){let Z=z[te];if(Z===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor)),Z!==void 0){let ne=Z.normalized,ue=Z.itemSize,we=t.get(Z);if(we===void 0)continue;let ve=we.buffer,De=we.type,ke=we.bytesPerElement,de=n.isWebGL2===!0&&(De===i.INT||De===i.UNSIGNED_INT||Z.gpuType===xf);if(Z.isInterleavedBufferAttribute){let ge=Z.data,B=ge.stride,Ge=Z.offset;if(ge.isInstancedInterleavedBuffer){for(let Ee=0;Ee<ie.locationSize;Ee++)w(ie.location+Ee,ge.meshPerAttribute);L.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Ee=0;Ee<ie.locationSize;Ee++)v(ie.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,ve);for(let Ee=0;Ee<ie.locationSize;Ee++)S(ie.location+Ee,ue/ie.locationSize,De,ne,B*ke,(Ge+ue/ie.locationSize*Ee)*ke,de)}else{if(Z.isInstancedBufferAttribute){for(let ge=0;ge<ie.locationSize;ge++)w(ie.location+ge,Z.meshPerAttribute);L.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ge=0;ge<ie.locationSize;ge++)v(ie.location+ge);i.bindBuffer(i.ARRAY_BUFFER,ve);for(let ge=0;ge<ie.locationSize;ge++)S(ie.location+ge,ue/ie.locationSize,De,ne,ue*ke,ue/ie.locationSize*ge*ke,de)}}else if(Q!==void 0){let ne=Q[te];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(ie.location,ne);break;case 3:i.vertexAttrib3fv(ie.location,ne);break;case 4:i.vertexAttrib4fv(ie.location,ne);break;default:i.vertexAttrib1fv(ie.location,ne)}}}}M()}function y(){O();for(let L in o){let U=o[L];for(let D in U){let G=U[D];for(let z in G)m(G[z].object),delete G[z];delete U[D]}delete o[L]}}function E(L){if(o[L.id]===void 0)return;let U=o[L.id];for(let D in U){let G=U[D];for(let z in G)m(G[z].object),delete G[z];delete U[D]}delete o[L.id]}function I(L){for(let U in o){let D=o[U];if(D[L.id]===void 0)continue;let G=D[L.id];for(let z in G)m(G[z].object),delete G[z];delete D[L.id]}}function O(){k(),h=!0,l!==c&&(l=c,f(l.object))}function k(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:O,resetDefaultState:k,dispose:y,releaseStatesOfGeometry:E,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:v,disableUnusedAttributes:M}}function _1(i,e,t,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,u){i.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,d){if(d===0)return;let f,m;if(s)f=i,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,h,u,d),t.update(u,r,d)}function l(h,u,d){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<d;m++)this.render(h[m],u[m]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let m=0;for(let b=0;b<d;b++)m+=u[b];t.update(m,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function x1(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let S=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),b=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,v=a||e.has("OES_texture_float"),w=_&&v,M=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:m,maxAttributes:b,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:v,floatVertexTextures:w,maxSamples:M}}function y1(i){let e=this,t=null,n=0,s=!1,r=!1,a=new qn,o=new it,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,b=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let x=r?0:n,_=x*4,v=p.clippingState||null;c.value=v,v=h(m,d,_,f);for(let w=0;w!==_;++w)v[w]=t[w];p.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let b=u!==null?u.length:0,g=null;if(b!==0){if(g=c.value,m!==!0||g===null){let p=f+b*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,v=f;_!==b;++_,v+=4)a.copy(u[_]).applyMatrix4(x,o),a.normal.toArray(g,v),g[v+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}function v1(i){let e=new WeakMap;function t(a,o){return o===pl?a.mapping=Zs:o===ml&&(a.mapping=Js),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===pl||o===ml)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Ml(c.height/2);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ir=class extends uo{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ws=4,Sd=[.125,.215,.35,.446,.526,.582],ls=20,$c=new ir,wd=new Pe,el=null,tl=0,nl=0,os=(1+Math.sqrt(5))/2,zs=1/os,Td=[new A(1,1,1),new A(-1,1,1),new A(1,1,-1),new A(-1,1,-1),new A(0,os,zs),new A(0,os,-zs),new A(zs,0,os),new A(-zs,0,os),new A(os,zs,0),new A(-os,zs,0)],sr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){el=this._renderer.getRenderTarget(),tl=this._renderer.getActiveCubeFace(),nl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(el,tl,nl),e.scissorTest=!1,Va(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zs||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),el=this._renderer.getRenderTarget(),tl=this._renderer.getActiveCubeFace(),nl=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:Gr,format:Ln,colorSpace:qt,depthBuffer:!1},s=Ad(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ad(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=M1(r)),this._blurMaterial=E1(r,e,t)}return s}_compileMaterial(e){let t=new q(this._lodPlanes[0],e);this._renderer.compile(t,$c)}_sceneToCubeUV(e,t,n,s){let o=new Xt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(wd),h.toneMapping=zi,h.autoClear=!1;let f=new dn({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),m=new q(new mt,f),b=!1,g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,b=!0):(f.color.copy(wd),b=!0);for(let p=0;p<6;p++){let x=p%3;x===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):x===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));let _=this._cubeSize;Va(s,x*_,p>2?_:0,_,_),h.setRenderTarget(s),b&&h.render(m,o),h.render(e,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Zs||e.mapping===Js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new q(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Va(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,$c)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Td[(s-1)%Td.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new q(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ls-1),b=r/m,g=isFinite(r)?1+Math.floor(h*b):ls;g>ls&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ls}`);let p=[],x=0;for(let S=0;S<ls;++S){let R=S/b,y=Math.exp(-R*R/2);p.push(y),S===0?x+=y:S<g&&(x+=2*y)}for(let S=0;S<p.length;S++)p[S]=p[S]/x;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-n;let v=this._sizeLods[s],w=3*v*(s>_-Ws?s-_+Ws:0),M=4*(this._cubeSize-v);Va(t,w,M,3*v,2*v),c.setRenderTarget(t),c.render(u,$c)}};function M1(i){let e=[],t=[],n=[],s=i,r=i-Ws+1+Sd.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Ws?c=Sd[a-i+Ws-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,b=3,g=2,p=1,x=new Float32Array(b*m*f),_=new Float32Array(g*m*f),v=new Float32Array(p*m*f);for(let M=0;M<f;M++){let S=M%3*2/3-1,R=M>2?0:-1,y=[S,R,0,S+2/3,R,0,S+2/3,R+1,0,S,R,0,S+2/3,R+1,0,S,R+1,0];x.set(y,b*m*M),_.set(d,g*m*M);let E=[M,M,M,M,M,M];v.set(E,p*m*M)}let w=new dt;w.setAttribute("position",new Mt(x,b)),w.setAttribute("uv",new Mt(_,g)),w.setAttribute("faceIndex",new Mt(v,p)),e.push(w),s>Ws&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ad(i,e,t){let n=new vi(i,e,t);return n.texture.mapping=Uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Va(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function E1(i,e,t){let n=new Float32Array(ls),s=new A(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Rd(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Cd(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function ch(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function S1(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===pl||c===ml,h=c===Zs||c===Js;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new sr(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(l&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new sr(i));let d=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function w1(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function T1(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);for(let m in d.morphAttributes){let b=d.morphAttributes[m];for(let g=0,p=b.length;g<p;g++)e.remove(b[g])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let m in d)e.update(d[m],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let m in f){let b=f[m];for(let g=0,p=b.length;g<p;g++)e.update(b[g],i.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,m=u.attributes.position,b=0;if(f!==null){let x=f.array;b=f.version;for(let _=0,v=x.length;_<v;_+=3){let w=x[_+0],M=x[_+1],S=x[_+2];d.push(w,M,M,S,S,w)}}else if(m!==void 0){let x=m.array;b=m.version;for(let _=0,v=x.length/3-1;_<v;_+=3){let w=_+0,M=_+1,S=_+2;d.push(w,M,M,S,S,w)}}else return;let g=new(Lf(d)?ho:lo)(d,1);g.version=b;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function A1(i,e,t,n){let s=n.isWebGL2,r;function a(f){r=f}let o,c;function l(f){o=f.type,c=f.bytesPerElement}function h(f,m){i.drawElements(r,m,o,f*c),t.update(m,r,1)}function u(f,m,b){if(b===0)return;let g,p;if(s)g=i,p="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](r,m,o,f*c,b),t.update(m,r,b)}function d(f,m,b){if(b===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<b;p++)this.render(f[p]/c,m[p]);else{g.multiDrawElementsWEBGL(r,m,0,o,f,0,b);let p=0;for(let x=0;x<b;x++)p+=m[x];t.update(p,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function R1(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function C1(i,e){return i[0]-e[0]}function P1(i,e){return Math.abs(e[1])-Math.abs(i[1])}function L1(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new wt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=f!==void 0?f.length:0,b=r.get(h);if(b===void 0||b.count!==m){let L=function(){O.dispose(),r.delete(h),h.removeEventListener("dispose",L)};b!==void 0&&b.texture.dispose();let x=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,v=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],M=h.morphAttributes.normal||[],S=h.morphAttributes.color||[],R=0;x===!0&&(R=1),_===!0&&(R=2),v===!0&&(R=3);let y=h.attributes.position.count*R,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let I=new Float32Array(y*E*4*m),O=new co(I,y,E,m);O.type=xi,O.needsUpdate=!0;let k=R*4;for(let U=0;U<m;U++){let D=w[U],G=M[U],z=S[U],V=y*E*4*U;for(let Q=0;Q<D.count;Q++){let te=Q*k;x===!0&&(a.fromBufferAttribute(D,Q),I[V+te+0]=a.x,I[V+te+1]=a.y,I[V+te+2]=a.z,I[V+te+3]=0),_===!0&&(a.fromBufferAttribute(G,Q),I[V+te+4]=a.x,I[V+te+5]=a.y,I[V+te+6]=a.z,I[V+te+7]=0),v===!0&&(a.fromBufferAttribute(z,Q),I[V+te+8]=a.x,I[V+te+9]=a.y,I[V+te+10]=a.z,I[V+te+11]=z.itemSize===4?a.w:1)}}b={count:m,texture:O,size:new re(y,E)},r.set(h,b),h.addEventListener("dispose",L)}let g=0;for(let x=0;x<d.length;x++)g+=d[x];let p=h.morphTargetsRelative?1:1-g;u.getUniforms().setValue(i,"morphTargetBaseInfluence",p),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",b.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",b.size)}else{let f=d===void 0?0:d.length,m=n[h.id];if(m===void 0||m.length!==f){m=[];for(let _=0;_<f;_++)m[_]=[_,0];n[h.id]=m}for(let _=0;_<f;_++){let v=m[_];v[0]=_,v[1]=d[_]}m.sort(P1);for(let _=0;_<8;_++)_<f&&m[_][1]?(o[_][0]=m[_][0],o[_][1]=m[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(C1);let b=h.morphAttributes.position,g=h.morphAttributes.normal,p=0;for(let _=0;_<8;_++){let v=o[_],w=v[0],M=v[1];w!==Number.MAX_SAFE_INTEGER&&M?(b&&h.getAttribute("morphTarget"+_)!==b[w]&&h.setAttribute("morphTarget"+_,b[w]),g&&h.getAttribute("morphNormal"+_)!==g[w]&&h.setAttribute("morphNormal"+_,g[w]),s[_]=M,p+=M):(b&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),g&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let x=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",x),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function I1(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var po=class extends $t{constructor(e,t,n,s,r,a,o,c,l,h){if(h=h!==void 0?h:us,h!==us&&h!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===us&&(n=Hi),n===void 0&&h===Qs&&(n=hs),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Wt,this.minFilter=c!==void 0?c:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Uf=new $t,Of=new po(1,1);Of.compareFunction=Cf;var Ff=new co,Hf=new yl,kf=new fo,Pd=[],Ld=[],Id=new Float32Array(16),Dd=new Float32Array(9),Nd=new Float32Array(4);function fr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Pd[s];if(r===void 0&&(r=new Float32Array(s),Pd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function jt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ko(i,e){let t=Ld[e];t===void 0&&(t=new Int32Array(e),Ld[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function D1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function N1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2fv(this.addr,e),Yt(t,e)}}function U1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;i.uniform3fv(this.addr,e),Yt(t,e)}}function O1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4fv(this.addr,e),Yt(t,e)}}function F1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(jt(t,n))return;Nd.set(n),i.uniformMatrix2fv(this.addr,!1,Nd),Yt(t,n)}}function H1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(jt(t,n))return;Dd.set(n),i.uniformMatrix3fv(this.addr,!1,Dd),Yt(t,n)}}function k1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(jt(t,n))return;Id.set(n),i.uniformMatrix4fv(this.addr,!1,Id),Yt(t,n)}}function B1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function z1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2iv(this.addr,e),Yt(t,e)}}function G1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3iv(this.addr,e),Yt(t,e)}}function V1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4iv(this.addr,e),Yt(t,e)}}function W1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function X1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2uiv(this.addr,e),Yt(t,e)}}function q1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3uiv(this.addr,e),Yt(t,e)}}function j1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4uiv(this.addr,e),Yt(t,e)}}function Y1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Of:Uf;t.setTexture2D(e||r,s)}function K1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Hf,s)}function Z1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||kf,s)}function J1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ff,s)}function Q1(i){switch(i){case 5126:return D1;case 35664:return N1;case 35665:return U1;case 35666:return O1;case 35674:return F1;case 35675:return H1;case 35676:return k1;case 5124:case 35670:return B1;case 35667:case 35671:return z1;case 35668:case 35672:return G1;case 35669:case 35673:return V1;case 5125:return W1;case 36294:return X1;case 36295:return q1;case 36296:return j1;case 35678:case 36198:case 36298:case 36306:case 35682:return Y1;case 35679:case 36299:case 36307:return K1;case 35680:case 36300:case 36308:case 36293:return Z1;case 36289:case 36303:case 36311:case 36292:return J1}}function $1(i,e){i.uniform1fv(this.addr,e)}function e_(i,e){let t=fr(e,this.size,2);i.uniform2fv(this.addr,t)}function t_(i,e){let t=fr(e,this.size,3);i.uniform3fv(this.addr,t)}function n_(i,e){let t=fr(e,this.size,4);i.uniform4fv(this.addr,t)}function i_(i,e){let t=fr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function s_(i,e){let t=fr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function r_(i,e){let t=fr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function a_(i,e){i.uniform1iv(this.addr,e)}function o_(i,e){i.uniform2iv(this.addr,e)}function c_(i,e){i.uniform3iv(this.addr,e)}function l_(i,e){i.uniform4iv(this.addr,e)}function h_(i,e){i.uniform1uiv(this.addr,e)}function u_(i,e){i.uniform2uiv(this.addr,e)}function d_(i,e){i.uniform3uiv(this.addr,e)}function f_(i,e){i.uniform4uiv(this.addr,e)}function p_(i,e,t){let n=this.cache,s=e.length,r=ko(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Uf,r[a])}function m_(i,e,t){let n=this.cache,s=e.length,r=ko(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Hf,r[a])}function g_(i,e,t){let n=this.cache,s=e.length,r=ko(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||kf,r[a])}function b_(i,e,t){let n=this.cache,s=e.length,r=ko(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Ff,r[a])}function __(i){switch(i){case 5126:return $1;case 35664:return e_;case 35665:return t_;case 35666:return n_;case 35674:return i_;case 35675:return s_;case 35676:return r_;case 5124:case 35670:return a_;case 35667:case 35671:return o_;case 35668:case 35672:return c_;case 35669:case 35673:return l_;case 5125:return h_;case 36294:return u_;case 36295:return d_;case 36296:return f_;case 35678:case 36198:case 36298:case 36306:case 35682:return p_;case 35679:case 36299:case 36307:return m_;case 35680:case 36300:case 36308:case 36293:return g_;case 36289:case 36303:case 36311:case 36292:return b_}}var El=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Q1(t.type)}},Sl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=__(t.type)}},wl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},il=/(\w+)(\])?(\[|\.)?/g;function Ud(i,e){i.seq.push(e),i.map[e.id]=e}function x_(i,e,t){let n=i.name,s=n.length;for(il.lastIndex=0;;){let r=il.exec(n),a=il.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Ud(t,l===void 0?new El(o,i,e):new Sl(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new wl(o),Ud(t,u)),t=u}}}var Ks=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);x_(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Od(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var y_=37297,v_=0;function M_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function E_(i){let e=yt.getPrimaries(yt.workingColorSpace),t=yt.getPrimaries(i),n;switch(e===t?n="":e===io&&t===no?n="LinearDisplayP3ToLinearSRGB":e===no&&t===io&&(n="LinearSRGBToLinearDisplayP3"),i){case qt:case Fo:return[n,"LinearTransferOETF"];case At:case ah:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Fd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+M_(i.getShaderSource(e),a)}else return s}function S_(i,e){let t=E_(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function w_(i,e){let t;switch(e){case Lm:t="Linear";break;case Im:t="Reinhard";break;case Dm:t="OptimizedCineon";break;case nh:t="ACESFilmic";break;case Um:t="AgX";break;case Nm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function T_(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xs).join(`
`)}function A_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Xs).join(`
`)}function R_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function C_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Xs(i){return i!==""}function Hd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var P_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tl(i){return i.replace(P_,I_)}var L_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function I_(i,e){let t=Je[e];if(t===void 0){let n=L_.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Tl(t)}var D_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bd(i){return i.replace(D_,N_)}function N_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zd(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function U_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===gf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===th?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===_i&&(e="SHADOWMAP_TYPE_VSM"),e}function O_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Zs:case Js:e="ENVMAP_TYPE_CUBE";break;case Uo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function F_(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Js&&(e="ENVMAP_MODE_REFRACTION"),e}function H_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case bf:e="ENVMAP_BLENDING_MULTIPLY";break;case Cm:e="ENVMAP_BLENDING_MIX";break;case Pm:e="ENVMAP_BLENDING_ADD";break}return e}function k_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function B_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=U_(t),l=O_(t),h=F_(t),u=H_(t),d=k_(t),f=t.isWebGL2?"":T_(t),m=A_(t),b=R_(r),g=s.createProgram(),p,x,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Xs).join(`
`),p.length>0&&(p+=`
`),x=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Xs).join(`
`),x.length>0&&(x+=`
`)):(p=[zd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),x=[f,zd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zi?"#define TONE_MAPPING":"",t.toneMapping!==zi?Je.tonemapping_pars_fragment:"",t.toneMapping!==zi?w_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,S_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xs).join(`
`)),a=Tl(a),a=Hd(a,t),a=kd(a,t),o=Tl(o),o=Hd(o,t),o=kd(o,t),a=Bd(a),o=Bd(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ad?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ad?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let v=_+p+a,w=_+x+o,M=Od(s,s.VERTEX_SHADER,v),S=Od(s,s.FRAGMENT_SHADER,w);s.attachShader(g,M),s.attachShader(g,S),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function R(O){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(g).trim(),L=s.getShaderInfoLog(M).trim(),U=s.getShaderInfoLog(S).trim(),D=!0,G=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(D=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,M,S);else{let z=Fd(s,M,"vertex"),V=Fd(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+k+`
`+z+`
`+V)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(L===""||U==="")&&(G=!1);G&&(O.diagnostics={runnable:D,programLog:k,vertexShader:{log:L,prefix:p},fragmentShader:{log:U,prefix:x}})}s.deleteShader(M),s.deleteShader(S),y=new Ks(s,g),E=C_(s,g)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(g,y_)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=v_++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=S,this}var z_=0,Al=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Rl(e),t.set(e,n)),n}},Rl=class{constructor(e){this.id=z_++,this.code=e,this.usedTimes=0}};function G_(i,e,t,n,s,r,a){let o=new Wr,c=new Al,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(y){return y===0?"uv":`uv${y}`}function g(y,E,I,O,k){let L=O.fog,U=k.geometry,D=y.isMeshStandardMaterial?O.environment:null,G=(y.isMeshStandardMaterial?t:e).get(y.envMap||D),z=G&&G.mapping===Uo?G.image.height:null,V=m[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let Q=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,te=Q!==void 0?Q.length:0,ie=0;U.morphAttributes.position!==void 0&&(ie=1),U.morphAttributes.normal!==void 0&&(ie=2),U.morphAttributes.color!==void 0&&(ie=3);let Z,ne,ue,we;if(V){let on=ni[V];Z=on.vertexShader,ne=on.fragmentShader}else Z=y.vertexShader,ne=y.fragmentShader,c.update(y),ue=c.getVertexShaderID(y),we=c.getFragmentShaderID(y);let ve=i.getRenderTarget(),De=k.isInstancedMesh===!0,ke=k.isBatchedMesh===!0,de=!!y.map,ge=!!y.matcap,B=!!G,Ge=!!y.aoMap,Ee=!!y.lightMap,Oe=!!y.bumpMap,Te=!!y.normalMap,et=!!y.displacementMap,Be=!!y.emissiveMap,P=!!y.metalnessMap,T=!!y.roughnessMap,Y=y.anisotropy>0,le=y.clearcoat>0,ae=y.iridescence>0,se=y.sheen>0,Le=y.transmission>0,Me=Y&&!!y.anisotropyMap,Ae=le&&!!y.clearcoatMap,Ve=le&&!!y.clearcoatNormalMap,Ye=le&&!!y.clearcoatRoughnessMap,ce=ae&&!!y.iridescenceMap,ht=ae&&!!y.iridescenceThicknessMap,N=se&&!!y.sheenColorMap,oe=se&&!!y.sheenRoughnessMap,_e=!!y.specularMap,he=!!y.specularColorMap,Ne=!!y.specularIntensityMap,tt=Le&&!!y.transmissionMap,ut=Le&&!!y.thicknessMap,Qe=!!y.gradientMap,be=!!y.alphaMap,H=y.alphaTest>0,fe=!!y.alphaHash,pe=!!y.extensions,ze=!!U.attributes.uv1,Fe=!!U.attributes.uv2,bt=!!U.attributes.uv3,xt=zi;return y.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(xt=i.toneMapping),{isWebGL2:h,shaderID:V,shaderType:y.type,shaderName:y.name,vertexShader:Z,fragmentShader:ne,defines:y.defines,customVertexShaderID:ue,customFragmentShaderID:we,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:ke,instancing:De,instancingColor:De&&k.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ve===null?i.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:qt,map:de,matcap:ge,envMap:B,envMapMode:B&&G.mapping,envMapCubeUVHeight:z,aoMap:Ge,lightMap:Ee,bumpMap:Oe,normalMap:Te,displacementMap:d&&et,emissiveMap:Be,normalMapObjectSpace:Te&&y.normalMapType===jm,normalMapTangentSpace:Te&&y.normalMapType===Rf,metalnessMap:P,roughnessMap:T,anisotropy:Y,anisotropyMap:Me,clearcoat:le,clearcoatMap:Ae,clearcoatNormalMap:Ve,clearcoatRoughnessMap:Ye,iridescence:ae,iridescenceMap:ce,iridescenceThicknessMap:ht,sheen:se,sheenColorMap:N,sheenRoughnessMap:oe,specularMap:_e,specularColorMap:he,specularIntensityMap:Ne,transmission:Le,transmissionMap:tt,thicknessMap:ut,gradientMap:Qe,opaque:y.transparent===!1&&y.blending===js,alphaMap:be,alphaTest:H,alphaHash:fe,combine:y.combine,mapUv:de&&b(y.map.channel),aoMapUv:Ge&&b(y.aoMap.channel),lightMapUv:Ee&&b(y.lightMap.channel),bumpMapUv:Oe&&b(y.bumpMap.channel),normalMapUv:Te&&b(y.normalMap.channel),displacementMapUv:et&&b(y.displacementMap.channel),emissiveMapUv:Be&&b(y.emissiveMap.channel),metalnessMapUv:P&&b(y.metalnessMap.channel),roughnessMapUv:T&&b(y.roughnessMap.channel),anisotropyMapUv:Me&&b(y.anisotropyMap.channel),clearcoatMapUv:Ae&&b(y.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&b(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&b(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&b(y.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&b(y.iridescenceThicknessMap.channel),sheenColorMapUv:N&&b(y.sheenColorMap.channel),sheenRoughnessMapUv:oe&&b(y.sheenRoughnessMap.channel),specularMapUv:_e&&b(y.specularMap.channel),specularColorMapUv:he&&b(y.specularColorMap.channel),specularIntensityMapUv:Ne&&b(y.specularIntensityMap.channel),transmissionMapUv:tt&&b(y.transmissionMap.channel),thicknessMapUv:ut&&b(y.thicknessMap.channel),alphaMapUv:be&&b(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Te||Y),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:ze,vertexUv2s:Fe,vertexUv3s:bt,pointsUvs:k.isPoints===!0&&!!U.attributes.uv&&(de||be),fog:!!L,useFog:y.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:k.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:ie,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:xt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:de&&y.map.isVideoTexture===!0&&yt.getTransfer(y.map.colorSpace)===Pt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===vt,flipSided:y.side===Gt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:pe&&y.extensions.derivatives===!0,extensionFragDepth:pe&&y.extensions.fragDepth===!0,extensionDrawBuffers:pe&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pe&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let I in y.defines)E.push(I),E.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(x(E,y),_(E,y),E.push(i.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function x(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function _(y,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),y.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),y.push(o.mask)}function v(y){let E=m[y.type],I;if(E){let O=ni[E];I=L0.clone(O.uniforms)}else I=y.uniforms;return I}function w(y,E){let I;for(let O=0,k=l.length;O<k;O++){let L=l[O];if(L.cacheKey===E){I=L,++I.usedTimes;break}}return I===void 0&&(I=new B_(i,E,y,r),l.push(I)),I}function M(y){if(--y.usedTimes===0){let E=l.indexOf(y);l[E]=l[l.length-1],l.pop(),y.destroy()}}function S(y){c.remove(y)}function R(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:w,releaseProgram:M,releaseShaderCache:S,programs:l,dispose:R}}function V_(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function W_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Gd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Vd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,f,m,b,g){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:b,group:g},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=b,p.group=g),e++,p}function o(u,d,f,m,b,g){let p=a(u,d,f,m,b,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,m,b,g){let p=a(u,d,f,m,b,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||W_),n.length>1&&n.sort(d||Gd),s.length>1&&s.sort(d||Gd)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function X_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Vd,i.set(n,[a])):s>=r.length?(a=new Vd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function q_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new Pe};break;case"SpotLight":t={position:new A,direction:new A,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new A,halfWidth:new A,halfHeight:new A};break}return i[e.id]=t,t}}}function j_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Y_=0;function K_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Z_(i,e){let t=new q_,n=j_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new A);let r=new A,a=new Xe,o=new Xe;function c(h,u){let d=0,f=0,m=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let b=0,g=0,p=0,x=0,_=0,v=0,w=0,M=0,S=0,R=0,y=0;h.sort(K_);let E=u===!0?Math.PI:1;for(let O=0,k=h.length;O<k;O++){let L=h[O],U=L.color,D=L.intensity,G=L.distance,z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=U.r*D*E,f+=U.g*D*E,m+=U.b*D*E;else if(L.isLightProbe){for(let V=0;V<9;V++)s.probe[V].addScaledVector(L.sh.coefficients[V],D);y++}else if(L.isDirectionalLight){let V=t.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){let Q=L.shadow,te=n.get(L);te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,s.directionalShadow[b]=te,s.directionalShadowMap[b]=z,s.directionalShadowMatrix[b]=L.shadow.matrix,v++}s.directional[b]=V,b++}else if(L.isSpotLight){let V=t.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(U).multiplyScalar(D*E),V.distance=G,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,s.spot[p]=V;let Q=L.shadow;if(L.map&&(s.spotLightMap[S]=L.map,S++,Q.updateMatrices(L),L.castShadow&&R++),s.spotLightMatrix[p]=Q.matrix,L.castShadow){let te=n.get(L);te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,s.spotShadow[p]=te,s.spotShadowMap[p]=z,M++}p++}else if(L.isRectAreaLight){let V=t.get(L);V.color.copy(U).multiplyScalar(D),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),s.rectArea[x]=V,x++}else if(L.isPointLight){let V=t.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity*E),V.distance=L.distance,V.decay=L.decay,L.castShadow){let Q=L.shadow,te=n.get(L);te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,te.shadowCameraNear=Q.camera.near,te.shadowCameraFar=Q.camera.far,s.pointShadow[g]=te,s.pointShadowMap[g]=z,s.pointShadowMatrix[g]=L.shadow.matrix,w++}s.point[g]=V,g++}else if(L.isHemisphereLight){let V=t.get(L);V.skyColor.copy(L.color).multiplyScalar(D*E),V.groundColor.copy(L.groundColor).multiplyScalar(D*E),s.hemi[_]=V,_++}}x>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=xe.LTC_FLOAT_1,s.rectAreaLTC2=xe.LTC_FLOAT_2):(s.rectAreaLTC1=xe.LTC_HALF_1,s.rectAreaLTC2=xe.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=xe.LTC_FLOAT_1,s.rectAreaLTC2=xe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=xe.LTC_HALF_1,s.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=m;let I=s.hash;(I.directionalLength!==b||I.pointLength!==g||I.spotLength!==p||I.rectAreaLength!==x||I.hemiLength!==_||I.numDirectionalShadows!==v||I.numPointShadows!==w||I.numSpotShadows!==M||I.numSpotMaps!==S||I.numLightProbes!==y)&&(s.directional.length=b,s.spot.length=p,s.rectArea.length=x,s.point.length=g,s.hemi.length=_,s.directionalShadow.length=v,s.directionalShadowMap.length=v,s.pointShadow.length=w,s.pointShadowMap.length=w,s.spotShadow.length=M,s.spotShadowMap.length=M,s.directionalShadowMatrix.length=v,s.pointShadowMatrix.length=w,s.spotLightMatrix.length=M+S-R,s.spotLightMap.length=S,s.numSpotLightShadowsWithMaps=R,s.numLightProbes=y,I.directionalLength=b,I.pointLength=g,I.spotLength=p,I.rectAreaLength=x,I.hemiLength=_,I.numDirectionalShadows=v,I.numPointShadows=w,I.numSpotShadows=M,I.numSpotMaps=S,I.numLightProbes=y,s.version=Y_++)}function l(h,u){let d=0,f=0,m=0,b=0,g=0,p=u.matrixWorldInverse;for(let x=0,_=h.length;x<_;x++){let v=h[x];if(v.isDirectionalLight){let w=s.directional[d];w.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),d++}else if(v.isSpotLight){let w=s.spot[m];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),m++}else if(v.isRectAreaLight){let w=s.rectArea[b];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(p),o.identity(),a.copy(v.matrixWorld),a.premultiply(p),o.extractRotation(a),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),b++}else if(v.isPointLight){let w=s.point[f];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let w=s.hemi[g];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(p),g++}}}return{setup:c,setupView:l,state:s}}function Wd(i,e){let t=new Z_(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function J_(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),c;return o===void 0?(c=new Wd(i,e),t.set(r,[c])):a>=o.length?(c=new Wd(i,e),o.push(c)):c=o[a],c}function s(){t=new WeakMap}return{get:n,dispose:s}}var qr=class extends En{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Cl=class extends En{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Q_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ex(i,e,t){let n=new Xr,s=new re,r=new re,a=new wt,o=new qr({depthPacking:rh}),c=new Cl,l={},h=t.maxTextureSize,u={[si]:Gt,[Gt]:si,[vt]:vt},d=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:Q_,fragmentShader:$_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new dt;m.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new q(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gf;let p=this.type;this.render=function(M,S,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;let y=i.getRenderTarget(),E=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Bi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let k=p!==_i&&this.type===_i,L=p===_i&&this.type!==_i;for(let U=0,D=M.length;U<D;U++){let G=M[U],z=G.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let V=z.getFrameExtents();if(s.multiply(V),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/V.x),s.x=r.x*V.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/V.y),s.y=r.y*V.y,z.mapSize.y=r.y)),z.map===null||k===!0||L===!0){let te=this.type!==_i?{minFilter:Wt,magFilter:Wt}:{};z.map!==null&&z.map.dispose(),z.map=new vi(s.x,s.y,te),z.map.texture.name=G.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();let Q=z.getViewportCount();for(let te=0;te<Q;te++){let ie=z.getViewport(te);a.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),O.viewport(a),z.updateMatrices(G,te),n=z.getFrustum(),v(S,R,z.camera,G,this.type)}z.isPointLightShadow!==!0&&this.type===_i&&x(z,R),z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(y,E,I)};function x(M,S){let R=e.update(b);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new vi(s.x,s.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(S,null,R,d,b,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(S,null,R,f,b,null)}function _(M,S,R,y){let E=null,I=R.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(I!==void 0)E=I;else if(E=R.isPointLight===!0?c:o,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let O=E.uuid,k=S.uuid,L=l[O];L===void 0&&(L={},l[O]=L);let U=L[k];U===void 0&&(U=E.clone(),L[k]=U,S.addEventListener("dispose",w)),E=U}if(E.visible=S.visible,E.wireframe=S.wireframe,y===_i?E.side=S.shadowSide!==null?S.shadowSide:S.side:E.side=S.shadowSide!==null?S.shadowSide:u[S.side],E.alphaMap=S.alphaMap,E.alphaTest=S.alphaTest,E.map=S.map,E.clipShadows=S.clipShadows,E.clippingPlanes=S.clippingPlanes,E.clipIntersection=S.clipIntersection,E.displacementMap=S.displacementMap,E.displacementScale=S.displacementScale,E.displacementBias=S.displacementBias,E.wireframeLinewidth=S.wireframeLinewidth,E.linewidth=S.linewidth,R.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let O=i.properties.get(E);O.light=R}return E}function v(M,S,R,y,E){if(M.visible===!1)return;if(M.layers.test(S.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&E===_i)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,M.matrixWorld);let k=e.update(M),L=M.material;if(Array.isArray(L)){let U=k.groups;for(let D=0,G=U.length;D<G;D++){let z=U[D],V=L[z.materialIndex];if(V&&V.visible){let Q=_(M,V,y,E);M.onBeforeShadow(i,M,S,R,k,Q,z),i.renderBufferDirect(R,null,k,Q,M,z),M.onAfterShadow(i,M,S,R,k,Q,z)}}}else if(L.visible){let U=_(M,L,y,E);M.onBeforeShadow(i,M,S,R,k,U,null),i.renderBufferDirect(R,null,k,U,M,null),M.onAfterShadow(i,M,S,R,k,U,null)}}let O=M.children;for(let k=0,L=O.length;k<L;k++)v(O[k],S,R,y,E)}function w(M){M.target.removeEventListener("dispose",w);for(let R in l){let y=l[R],E=M.target.uuid;E in y&&(y[E].dispose(),delete y[E])}}}function tx(i,e,t){let n=t.isWebGL2;function s(){let H=!1,fe=new wt,pe=null,ze=new wt(0,0,0,0);return{setMask:function(Fe){pe!==Fe&&!H&&(i.colorMask(Fe,Fe,Fe,Fe),pe=Fe)},setLocked:function(Fe){H=Fe},setClear:function(Fe,bt,xt,Kt,on){on===!0&&(Fe*=Kt,bt*=Kt,xt*=Kt),fe.set(Fe,bt,xt,Kt),ze.equals(fe)===!1&&(i.clearColor(Fe,bt,xt,Kt),ze.copy(fe))},reset:function(){H=!1,pe=null,ze.set(-1,0,0,0)}}}function r(){let H=!1,fe=null,pe=null,ze=null;return{setTest:function(Fe){Fe?ke(i.DEPTH_TEST):de(i.DEPTH_TEST)},setMask:function(Fe){fe!==Fe&&!H&&(i.depthMask(Fe),fe=Fe)},setFunc:function(Fe){if(pe!==Fe){switch(Fe){case Mm:i.depthFunc(i.NEVER);break;case Em:i.depthFunc(i.ALWAYS);break;case Sm:i.depthFunc(i.LESS);break;case $a:i.depthFunc(i.LEQUAL);break;case wm:i.depthFunc(i.EQUAL);break;case Tm:i.depthFunc(i.GEQUAL);break;case Am:i.depthFunc(i.GREATER);break;case Rm:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=Fe}},setLocked:function(Fe){H=Fe},setClear:function(Fe){ze!==Fe&&(i.clearDepth(Fe),ze=Fe)},reset:function(){H=!1,fe=null,pe=null,ze=null}}}function a(){let H=!1,fe=null,pe=null,ze=null,Fe=null,bt=null,xt=null,Kt=null,on=null;return{setTest:function(Rt){H||(Rt?ke(i.STENCIL_TEST):de(i.STENCIL_TEST))},setMask:function(Rt){fe!==Rt&&!H&&(i.stencilMask(Rt),fe=Rt)},setFunc:function(Rt,cn,ti){(pe!==Rt||ze!==cn||Fe!==ti)&&(i.stencilFunc(Rt,cn,ti),pe=Rt,ze=cn,Fe=ti)},setOp:function(Rt,cn,ti){(bt!==Rt||xt!==cn||Kt!==ti)&&(i.stencilOp(Rt,cn,ti),bt=Rt,xt=cn,Kt=ti)},setLocked:function(Rt){H=Rt},setClear:function(Rt){on!==Rt&&(i.clearStencil(Rt),on=Rt)},reset:function(){H=!1,fe=null,pe=null,ze=null,Fe=null,bt=null,xt=null,Kt=null,on=null}}}let o=new s,c=new r,l=new a,h=new WeakMap,u=new WeakMap,d={},f={},m=new WeakMap,b=[],g=null,p=!1,x=null,_=null,v=null,w=null,M=null,S=null,R=null,y=new Pe(0,0,0),E=0,I=!1,O=null,k=null,L=null,U=null,D=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,V=0,Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Q)[1]),z=V>=1):Q.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),z=V>=2);let te=null,ie={},Z=i.getParameter(i.SCISSOR_BOX),ne=i.getParameter(i.VIEWPORT),ue=new wt().fromArray(Z),we=new wt().fromArray(ne);function ve(H,fe,pe,ze){let Fe=new Uint8Array(4),bt=i.createTexture();i.bindTexture(H,bt),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let xt=0;xt<pe;xt++)n&&(H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY)?i.texImage3D(fe,0,i.RGBA,1,1,ze,0,i.RGBA,i.UNSIGNED_BYTE,Fe):i.texImage2D(fe+xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Fe);return bt}let De={};De[i.TEXTURE_2D]=ve(i.TEXTURE_2D,i.TEXTURE_2D,1),De[i.TEXTURE_CUBE_MAP]=ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(De[i.TEXTURE_2D_ARRAY]=ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),De[i.TEXTURE_3D]=ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ke(i.DEPTH_TEST),c.setFunc($a),Be(!1),P(Su),ke(i.CULL_FACE),Te(Bi);function ke(H){d[H]!==!0&&(i.enable(H),d[H]=!0)}function de(H){d[H]!==!1&&(i.disable(H),d[H]=!1)}function ge(H,fe){return f[H]!==fe?(i.bindFramebuffer(H,fe),f[H]=fe,n&&(H===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=fe),H===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=fe)),!0):!1}function B(H,fe){let pe=b,ze=!1;if(H)if(pe=m.get(fe),pe===void 0&&(pe=[],m.set(fe,pe)),H.isWebGLMultipleRenderTargets){let Fe=H.texture;if(pe.length!==Fe.length||pe[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,xt=Fe.length;bt<xt;bt++)pe[bt]=i.COLOR_ATTACHMENT0+bt;pe.length=Fe.length,ze=!0}}else pe[0]!==i.COLOR_ATTACHMENT0&&(pe[0]=i.COLOR_ATTACHMENT0,ze=!0);else pe[0]!==i.BACK&&(pe[0]=i.BACK,ze=!0);ze&&(t.isWebGL2?i.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function Ge(H){return g!==H?(i.useProgram(H),g=H,!0):!1}let Ee={[cs]:i.FUNC_ADD,[om]:i.FUNC_SUBTRACT,[cm]:i.FUNC_REVERSE_SUBTRACT};if(n)Ee[Ru]=i.MIN,Ee[Cu]=i.MAX;else{let H=e.get("EXT_blend_minmax");H!==null&&(Ee[Ru]=H.MIN_EXT,Ee[Cu]=H.MAX_EXT)}let Oe={[lm]:i.ZERO,[hm]:i.ONE,[um]:i.SRC_COLOR,[dl]:i.SRC_ALPHA,[bm]:i.SRC_ALPHA_SATURATE,[mm]:i.DST_COLOR,[fm]:i.DST_ALPHA,[dm]:i.ONE_MINUS_SRC_COLOR,[fl]:i.ONE_MINUS_SRC_ALPHA,[gm]:i.ONE_MINUS_DST_COLOR,[pm]:i.ONE_MINUS_DST_ALPHA,[_m]:i.CONSTANT_COLOR,[xm]:i.ONE_MINUS_CONSTANT_COLOR,[ym]:i.CONSTANT_ALPHA,[vm]:i.ONE_MINUS_CONSTANT_ALPHA};function Te(H,fe,pe,ze,Fe,bt,xt,Kt,on,Rt){if(H===Bi){p===!0&&(de(i.BLEND),p=!1);return}if(p===!1&&(ke(i.BLEND),p=!0),H!==am){if(H!==x||Rt!==I){if((_!==cs||M!==cs)&&(i.blendEquation(i.FUNC_ADD),_=cs,M=cs),Rt)switch(H){case js:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wu:i.blendFunc(i.ONE,i.ONE);break;case Tu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Au:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case js:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Tu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Au:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}v=null,w=null,S=null,R=null,y.set(0,0,0),E=0,x=H,I=Rt}return}Fe=Fe||fe,bt=bt||pe,xt=xt||ze,(fe!==_||Fe!==M)&&(i.blendEquationSeparate(Ee[fe],Ee[Fe]),_=fe,M=Fe),(pe!==v||ze!==w||bt!==S||xt!==R)&&(i.blendFuncSeparate(Oe[pe],Oe[ze],Oe[bt],Oe[xt]),v=pe,w=ze,S=bt,R=xt),(Kt.equals(y)===!1||on!==E)&&(i.blendColor(Kt.r,Kt.g,Kt.b,on),y.copy(Kt),E=on),x=H,I=!1}function et(H,fe){H.side===vt?de(i.CULL_FACE):ke(i.CULL_FACE);let pe=H.side===Gt;fe&&(pe=!pe),Be(pe),H.blending===js&&H.transparent===!1?Te(Bi):Te(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),o.setMask(H.colorWrite);let ze=H.stencilWrite;l.setTest(ze),ze&&(l.setMask(H.stencilWriteMask),l.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),l.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Y(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ke(i.SAMPLE_ALPHA_TO_COVERAGE):de(i.SAMPLE_ALPHA_TO_COVERAGE)}function Be(H){O!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),O=H)}function P(H){H!==sm?(ke(i.CULL_FACE),H!==k&&(H===Su?i.cullFace(i.BACK):H===rm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):de(i.CULL_FACE),k=H}function T(H){H!==L&&(z&&i.lineWidth(H),L=H)}function Y(H,fe,pe){H?(ke(i.POLYGON_OFFSET_FILL),(U!==fe||D!==pe)&&(i.polygonOffset(fe,pe),U=fe,D=pe)):de(i.POLYGON_OFFSET_FILL)}function le(H){H?ke(i.SCISSOR_TEST):de(i.SCISSOR_TEST)}function ae(H){H===void 0&&(H=i.TEXTURE0+G-1),te!==H&&(i.activeTexture(H),te=H)}function se(H,fe,pe){pe===void 0&&(te===null?pe=i.TEXTURE0+G-1:pe=te);let ze=ie[pe];ze===void 0&&(ze={type:void 0,texture:void 0},ie[pe]=ze),(ze.type!==H||ze.texture!==fe)&&(te!==pe&&(i.activeTexture(pe),te=pe),i.bindTexture(H,fe||De[H]),ze.type=H,ze.texture=fe)}function Le(){let H=ie[te];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Me(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ae(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ve(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ye(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ce(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ht(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function N(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function oe(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _e(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function he(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ne(H){ue.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),ue.copy(H))}function tt(H){we.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),we.copy(H))}function ut(H,fe){let pe=u.get(fe);pe===void 0&&(pe=new WeakMap,u.set(fe,pe));let ze=pe.get(H);ze===void 0&&(ze=i.getUniformBlockIndex(fe,H.name),pe.set(H,ze))}function Qe(H,fe){let ze=u.get(fe).get(H);h.get(fe)!==ze&&(i.uniformBlockBinding(fe,ze,H.__bindingPointIndex),h.set(fe,ze))}function be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},te=null,ie={},f={},m=new WeakMap,b=[],g=null,p=!1,x=null,_=null,v=null,w=null,M=null,S=null,R=null,y=new Pe(0,0,0),E=0,I=!1,O=null,k=null,L=null,U=null,D=null,ue.set(0,0,i.canvas.width,i.canvas.height),we.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:ke,disable:de,bindFramebuffer:ge,drawBuffers:B,useProgram:Ge,setBlending:Te,setMaterial:et,setFlipSided:Be,setCullFace:P,setLineWidth:T,setPolygonOffset:Y,setScissorTest:le,activeTexture:ae,bindTexture:se,unbindTexture:Le,compressedTexImage2D:Me,compressedTexImage3D:Ae,texImage2D:_e,texImage3D:he,updateUBOMapping:ut,uniformBlockBinding:Qe,texStorage2D:N,texStorage3D:oe,texSubImage2D:Ve,texSubImage3D:Ye,compressedTexSubImage2D:ce,compressedTexSubImage3D:ht,scissor:Ne,viewport:tt,reset:be}}function nx(i,e,t,n,s,r,a){let o=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,T){return f?new OffscreenCanvas(P,T):Vr("canvas")}function b(P,T,Y,le){let ae=1;if((P.width>le||P.height>le)&&(ae=le/Math.max(P.width,P.height)),ae<1||T===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){let se=T?ro:Math.floor,Le=se(ae*P.width),Me=se(ae*P.height);u===void 0&&(u=m(Le,Me));let Ae=Y?m(Le,Me):u;return Ae.width=Le,Ae.height=Me,Ae.getContext("2d").drawImage(P,0,0,Le,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Le+"x"+Me+")."),Ae}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function g(P){return _l(P.width)&&_l(P.height)}function p(P){return o?!1:P.wrapS!==vn||P.wrapT!==vn||P.minFilter!==Wt&&P.minFilter!==un}function x(P,T){return P.generateMipmaps&&T&&P.minFilter!==Wt&&P.minFilter!==un}function _(P){i.generateMipmap(P)}function v(P,T,Y,le,ae=!1){if(o===!1)return T;if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let se=T;if(T===i.RED&&(Y===i.FLOAT&&(se=i.R32F),Y===i.HALF_FLOAT&&(se=i.R16F),Y===i.UNSIGNED_BYTE&&(se=i.R8)),T===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(se=i.R8UI),Y===i.UNSIGNED_SHORT&&(se=i.R16UI),Y===i.UNSIGNED_INT&&(se=i.R32UI),Y===i.BYTE&&(se=i.R8I),Y===i.SHORT&&(se=i.R16I),Y===i.INT&&(se=i.R32I)),T===i.RG&&(Y===i.FLOAT&&(se=i.RG32F),Y===i.HALF_FLOAT&&(se=i.RG16F),Y===i.UNSIGNED_BYTE&&(se=i.RG8)),T===i.RGBA){let Le=ae?to:yt.getTransfer(le);Y===i.FLOAT&&(se=i.RGBA32F),Y===i.HALF_FLOAT&&(se=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(se=Le===Pt?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)}return(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function w(P,T,Y){return x(P,Y)===!0||P.isFramebufferTexture&&P.minFilter!==Wt&&P.minFilter!==un?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function M(P){return P===Wt||P===eo||P===Nr?i.NEAREST:i.LINEAR}function S(P){let T=P.target;T.removeEventListener("dispose",S),y(T),T.isVideoTexture&&h.delete(T)}function R(P){let T=P.target;T.removeEventListener("dispose",R),I(T)}function y(P){let T=n.get(P);if(T.__webglInit===void 0)return;let Y=P.source,le=d.get(Y);if(le){let ae=le[T.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&E(P),Object.keys(le).length===0&&d.delete(Y)}n.remove(P)}function E(P){let T=n.get(P);i.deleteTexture(T.__webglTexture);let Y=P.source,le=d.get(Y);delete le[T.__cacheKey],a.memory.textures--}function I(P){let T=P.texture,Y=n.get(P),le=n.get(T);if(le.__webglTexture!==void 0&&(i.deleteTexture(le.__webglTexture),a.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(Y.__webglFramebuffer[ae]))for(let se=0;se<Y.__webglFramebuffer[ae].length;se++)i.deleteFramebuffer(Y.__webglFramebuffer[ae][se]);else i.deleteFramebuffer(Y.__webglFramebuffer[ae]);Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer[ae])}else{if(Array.isArray(Y.__webglFramebuffer))for(let ae=0;ae<Y.__webglFramebuffer.length;ae++)i.deleteFramebuffer(Y.__webglFramebuffer[ae]);else i.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let ae=0;ae<Y.__webglColorRenderbuffer.length;ae++)Y.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(Y.__webglColorRenderbuffer[ae]);Y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ae=0,se=T.length;ae<se;ae++){let Le=n.get(T[ae]);Le.__webglTexture&&(i.deleteTexture(Le.__webglTexture),a.memory.textures--),n.remove(T[ae])}n.remove(T),n.remove(P)}let O=0;function k(){O=0}function L(){let P=O;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),O+=1,P}function U(P){let T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function D(P,T){let Y=n.get(P);if(P.isVideoTexture&&et(P),P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){let le=P.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(Y,P,T);return}}t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+T)}function G(P,T){let Y=n.get(P);if(P.version>0&&Y.__version!==P.version){ue(Y,P,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+T)}function z(P,T){let Y=n.get(P);if(P.version>0&&Y.__version!==P.version){ue(Y,P,T);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+T)}function V(P,T){let Y=n.get(P);if(P.version>0&&Y.__version!==P.version){we(Y,P,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+T)}let Q={[Yn]:i.REPEAT,[vn]:i.CLAMP_TO_EDGE,[zr]:i.MIRRORED_REPEAT},te={[Wt]:i.NEAREST,[eo]:i.NEAREST_MIPMAP_NEAREST,[Nr]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[ih]:i.LINEAR_MIPMAP_NEAREST,[ri]:i.LINEAR_MIPMAP_LINEAR},ie={[Ym]:i.NEVER,[e0]:i.ALWAYS,[Km]:i.LESS,[Cf]:i.LEQUAL,[Zm]:i.EQUAL,[$m]:i.GEQUAL,[Jm]:i.GREATER,[Qm]:i.NOTEQUAL};function Z(P,T,Y){if(Y?(i.texParameteri(P,i.TEXTURE_WRAP_S,Q[T.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,Q[T.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,Q[T.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,te[T.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,te[T.minFilter])):(i.texParameteri(P,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(P,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(T.wrapS!==vn||T.wrapT!==vn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(P,i.TEXTURE_MAG_FILTER,M(T.magFilter)),i.texParameteri(P,i.TEXTURE_MIN_FILTER,M(T.minFilter)),T.minFilter!==Wt&&T.minFilter!==un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,ie[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let le=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Wt||T.minFilter!==Nr&&T.minFilter!==ri||T.type===xi&&e.has("OES_texture_float_linear")===!1||o===!1&&T.type===Gr&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(i.texParameterf(P,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function ne(P,T){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",S));let le=T.source,ae=d.get(le);ae===void 0&&(ae={},d.set(le,ae));let se=U(T);if(se!==P.__cacheKey){ae[se]===void 0&&(ae[se]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),ae[se].usedTimes++;let Le=ae[P.__cacheKey];Le!==void 0&&(ae[P.__cacheKey].usedTimes--,Le.usedTimes===0&&E(T)),P.__cacheKey=se,P.__webglTexture=ae[se].texture}return Y}function ue(P,T,Y){let le=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(le=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(le=i.TEXTURE_3D);let ae=ne(P,T),se=T.source;t.bindTexture(le,P.__webglTexture,i.TEXTURE0+Y);let Le=n.get(se);if(se.version!==Le.__version||ae===!0){t.activeTexture(i.TEXTURE0+Y);let Me=yt.getPrimaries(yt.workingColorSpace),Ae=T.colorSpace===In?null:yt.getPrimaries(T.colorSpace),Ve=T.colorSpace===In||Me===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let Ye=p(T)&&g(T.image)===!1,ce=b(T.image,Ye,!1,s.maxTextureSize);ce=Be(T,ce);let ht=g(ce)||o,N=r.convert(T.format,T.colorSpace),oe=r.convert(T.type),_e=v(T.internalFormat,N,oe,T.colorSpace,T.isVideoTexture);Z(le,T,ht);let he,Ne=T.mipmaps,tt=o&&T.isVideoTexture!==!0&&_e!==wf,ut=Le.__version===void 0||ae===!0,Qe=w(T,ce,ht);if(T.isDepthTexture)_e=i.DEPTH_COMPONENT,o?T.type===xi?_e=i.DEPTH_COMPONENT32F:T.type===Hi?_e=i.DEPTH_COMPONENT24:T.type===hs?_e=i.DEPTH24_STENCIL8:_e=i.DEPTH_COMPONENT16:T.type===xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===us&&_e===i.DEPTH_COMPONENT&&T.type!==sh&&T.type!==Hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Hi,oe=r.convert(T.type)),T.format===Qs&&_e===i.DEPTH_COMPONENT&&(_e=i.DEPTH_STENCIL,T.type!==hs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=hs,oe=r.convert(T.type))),ut&&(tt?t.texStorage2D(i.TEXTURE_2D,1,_e,ce.width,ce.height):t.texImage2D(i.TEXTURE_2D,0,_e,ce.width,ce.height,0,N,oe,null));else if(T.isDataTexture)if(Ne.length>0&&ht){tt&&ut&&t.texStorage2D(i.TEXTURE_2D,Qe,_e,Ne[0].width,Ne[0].height);for(let be=0,H=Ne.length;be<H;be++)he=Ne[be],tt?t.texSubImage2D(i.TEXTURE_2D,be,0,0,he.width,he.height,N,oe,he.data):t.texImage2D(i.TEXTURE_2D,be,_e,he.width,he.height,0,N,oe,he.data);T.generateMipmaps=!1}else tt?(ut&&t.texStorage2D(i.TEXTURE_2D,Qe,_e,ce.width,ce.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce.width,ce.height,N,oe,ce.data)):t.texImage2D(i.TEXTURE_2D,0,_e,ce.width,ce.height,0,N,oe,ce.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){tt&&ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Qe,_e,Ne[0].width,Ne[0].height,ce.depth);for(let be=0,H=Ne.length;be<H;be++)he=Ne[be],T.format!==Ln?N!==null?tt?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,be,0,0,0,he.width,he.height,ce.depth,N,he.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,be,_e,he.width,he.height,ce.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?t.texSubImage3D(i.TEXTURE_2D_ARRAY,be,0,0,0,he.width,he.height,ce.depth,N,oe,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,be,_e,he.width,he.height,ce.depth,0,N,oe,he.data)}else{tt&&ut&&t.texStorage2D(i.TEXTURE_2D,Qe,_e,Ne[0].width,Ne[0].height);for(let be=0,H=Ne.length;be<H;be++)he=Ne[be],T.format!==Ln?N!==null?tt?t.compressedTexSubImage2D(i.TEXTURE_2D,be,0,0,he.width,he.height,N,he.data):t.compressedTexImage2D(i.TEXTURE_2D,be,_e,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?t.texSubImage2D(i.TEXTURE_2D,be,0,0,he.width,he.height,N,oe,he.data):t.texImage2D(i.TEXTURE_2D,be,_e,he.width,he.height,0,N,oe,he.data)}else if(T.isDataArrayTexture)tt?(ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Qe,_e,ce.width,ce.height,ce.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,N,oe,ce.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,_e,ce.width,ce.height,ce.depth,0,N,oe,ce.data);else if(T.isData3DTexture)tt?(ut&&t.texStorage3D(i.TEXTURE_3D,Qe,_e,ce.width,ce.height,ce.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,N,oe,ce.data)):t.texImage3D(i.TEXTURE_3D,0,_e,ce.width,ce.height,ce.depth,0,N,oe,ce.data);else if(T.isFramebufferTexture){if(ut)if(tt)t.texStorage2D(i.TEXTURE_2D,Qe,_e,ce.width,ce.height);else{let be=ce.width,H=ce.height;for(let fe=0;fe<Qe;fe++)t.texImage2D(i.TEXTURE_2D,fe,_e,be,H,0,N,oe,null),be>>=1,H>>=1}}else if(Ne.length>0&&ht){tt&&ut&&t.texStorage2D(i.TEXTURE_2D,Qe,_e,Ne[0].width,Ne[0].height);for(let be=0,H=Ne.length;be<H;be++)he=Ne[be],tt?t.texSubImage2D(i.TEXTURE_2D,be,0,0,N,oe,he):t.texImage2D(i.TEXTURE_2D,be,_e,N,oe,he);T.generateMipmaps=!1}else tt?(ut&&t.texStorage2D(i.TEXTURE_2D,Qe,_e,ce.width,ce.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,N,oe,ce)):t.texImage2D(i.TEXTURE_2D,0,_e,N,oe,ce);x(T,ht)&&_(le),Le.__version=se.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function we(P,T,Y){if(T.image.length!==6)return;let le=ne(P,T),ae=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+Y);let se=n.get(ae);if(ae.version!==se.__version||le===!0){t.activeTexture(i.TEXTURE0+Y);let Le=yt.getPrimaries(yt.workingColorSpace),Me=T.colorSpace===In?null:yt.getPrimaries(T.colorSpace),Ae=T.colorSpace===In||Le===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let Ve=T.isCompressedTexture||T.image[0].isCompressedTexture,Ye=T.image[0]&&T.image[0].isDataTexture,ce=[];for(let be=0;be<6;be++)!Ve&&!Ye?ce[be]=b(T.image[be],!1,!0,s.maxCubemapSize):ce[be]=Ye?T.image[be].image:T.image[be],ce[be]=Be(T,ce[be]);let ht=ce[0],N=g(ht)||o,oe=r.convert(T.format,T.colorSpace),_e=r.convert(T.type),he=v(T.internalFormat,oe,_e,T.colorSpace),Ne=o&&T.isVideoTexture!==!0,tt=se.__version===void 0||le===!0,ut=w(T,ht,N);Z(i.TEXTURE_CUBE_MAP,T,N);let Qe;if(Ve){Ne&&tt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ut,he,ht.width,ht.height);for(let be=0;be<6;be++){Qe=ce[be].mipmaps;for(let H=0;H<Qe.length;H++){let fe=Qe[H];T.format!==Ln?oe!==null?Ne?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,H,0,0,fe.width,fe.height,oe,fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,H,he,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,H,0,0,fe.width,fe.height,oe,_e,fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,H,he,fe.width,fe.height,0,oe,_e,fe.data)}}}else{Qe=T.mipmaps,Ne&&tt&&(Qe.length>0&&ut++,t.texStorage2D(i.TEXTURE_CUBE_MAP,ut,he,ce[0].width,ce[0].height));for(let be=0;be<6;be++)if(Ye){Ne?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,ce[be].width,ce[be].height,oe,_e,ce[be].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,he,ce[be].width,ce[be].height,0,oe,_e,ce[be].data);for(let H=0;H<Qe.length;H++){let pe=Qe[H].image[be].image;Ne?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,H+1,0,0,pe.width,pe.height,oe,_e,pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,H+1,he,pe.width,pe.height,0,oe,_e,pe.data)}}else{Ne?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,oe,_e,ce[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,he,oe,_e,ce[be]);for(let H=0;H<Qe.length;H++){let fe=Qe[H];Ne?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,H+1,0,0,oe,_e,fe.image[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,H+1,he,oe,_e,fe.image[be])}}}x(T,N)&&_(i.TEXTURE_CUBE_MAP),se.__version=ae.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function ve(P,T,Y,le,ae,se){let Le=r.convert(Y.format,Y.colorSpace),Me=r.convert(Y.type),Ae=v(Y.internalFormat,Le,Me,Y.colorSpace);if(!n.get(T).__hasExternalTextures){let Ye=Math.max(1,T.width>>se),ce=Math.max(1,T.height>>se);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,se,Ae,Ye,ce,T.depth,0,Le,Me,null):t.texImage2D(ae,se,Ae,Ye,ce,0,Le,Me,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),Te(T)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,ae,n.get(Y).__webglTexture,0,Oe(T)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,le,ae,n.get(Y).__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(P,T,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,P),T.depthBuffer&&!T.stencilBuffer){let le=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(Y||Te(T)){let ae=T.depthTexture;ae&&ae.isDepthTexture&&(ae.type===xi?le=i.DEPTH_COMPONENT32F:ae.type===Hi&&(le=i.DEPTH_COMPONENT24));let se=Oe(T);Te(T)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,le,T.width,T.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,se,le,T.width,T.height)}else i.renderbufferStorage(i.RENDERBUFFER,le,T.width,T.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,P)}else if(T.depthBuffer&&T.stencilBuffer){let le=Oe(T);Y&&Te(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,i.DEPTH24_STENCIL8,T.width,T.height):Te(T)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,i.DEPTH24_STENCIL8,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,P)}else{let le=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ae=0;ae<le.length;ae++){let se=le[ae],Le=r.convert(se.format,se.colorSpace),Me=r.convert(se.type),Ae=v(se.internalFormat,Le,Me,se.colorSpace),Ve=Oe(T);Y&&Te(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,Ae,T.width,T.height):Te(T)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ve,Ae,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Ae,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ke(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),D(T.depthTexture,0);let le=n.get(T.depthTexture).__webglTexture,ae=Oe(T);if(T.depthTexture.format===us)Te(T)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0);else if(T.depthTexture.format===Qs)Te(T)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function de(P){let T=n.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");ke(T.__webglFramebuffer,P)}else if(Y){T.__webglDepthbuffer=[];for(let le=0;le<6;le++)t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[le]),T.__webglDepthbuffer[le]=i.createRenderbuffer(),De(T.__webglDepthbuffer[le],P,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=i.createRenderbuffer(),De(T.__webglDepthbuffer,P,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(P,T,Y){let le=n.get(P);T!==void 0&&ve(le.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&de(P)}function B(P){let T=P.texture,Y=n.get(P),le=n.get(T);P.addEventListener("dispose",R),P.isWebGLMultipleRenderTargets!==!0&&(le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture()),le.__version=T.version,a.memory.textures++);let ae=P.isWebGLCubeRenderTarget===!0,se=P.isWebGLMultipleRenderTargets===!0,Le=g(P)||o;if(ae){Y.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(o&&T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer[Me]=[];for(let Ae=0;Ae<T.mipmaps.length;Ae++)Y.__webglFramebuffer[Me][Ae]=i.createFramebuffer()}else Y.__webglFramebuffer[Me]=i.createFramebuffer()}else{if(o&&T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Me=0;Me<T.mipmaps.length;Me++)Y.__webglFramebuffer[Me]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(se)if(s.drawBuffers){let Me=P.texture;for(let Ae=0,Ve=Me.length;Ae<Ve;Ae++){let Ye=n.get(Me[Ae]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&Te(P)===!1){let Me=se?T:[T];Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Ae=0;Ae<Me.length;Ae++){let Ve=Me[Ae];Y.__webglColorRenderbuffer[Ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[Ae]);let Ye=r.convert(Ve.format,Ve.colorSpace),ce=r.convert(Ve.type),ht=v(Ve.internalFormat,Ye,ce,Ve.colorSpace,P.isXRRenderTarget===!0),N=Oe(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,N,ht,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,Y.__webglColorRenderbuffer[Ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),De(Y.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,le.__webglTexture),Z(i.TEXTURE_CUBE_MAP,T,Le);for(let Me=0;Me<6;Me++)if(o&&T.mipmaps&&T.mipmaps.length>0)for(let Ae=0;Ae<T.mipmaps.length;Ae++)ve(Y.__webglFramebuffer[Me][Ae],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ae);else ve(Y.__webglFramebuffer[Me],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);x(T,Le)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){let Me=P.texture;for(let Ae=0,Ve=Me.length;Ae<Ve;Ae++){let Ye=Me[Ae],ce=n.get(Ye);t.bindTexture(i.TEXTURE_2D,ce.__webglTexture),Z(i.TEXTURE_2D,Ye,Le),ve(Y.__webglFramebuffer,P,Ye,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,0),x(Ye,Le)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let Me=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?Me=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Me,le.__webglTexture),Z(Me,T,Le),o&&T.mipmaps&&T.mipmaps.length>0)for(let Ae=0;Ae<T.mipmaps.length;Ae++)ve(Y.__webglFramebuffer[Ae],P,T,i.COLOR_ATTACHMENT0,Me,Ae);else ve(Y.__webglFramebuffer,P,T,i.COLOR_ATTACHMENT0,Me,0);x(T,Le)&&_(Me),t.unbindTexture()}P.depthBuffer&&de(P)}function Ge(P){let T=g(P)||o,Y=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let le=0,ae=Y.length;le<ae;le++){let se=Y[le];if(x(se,T)){let Le=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Me=n.get(se).__webglTexture;t.bindTexture(Le,Me),_(Le),t.unbindTexture()}}}function Ee(P){if(o&&P.samples>0&&Te(P)===!1){let T=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],Y=P.width,le=P.height,ae=i.COLOR_BUFFER_BIT,se=[],Le=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(P),Ae=P.isWebGLMultipleRenderTargets===!0;if(Ae)for(let Ve=0;Ve<T.length;Ve++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Ve=0;Ve<T.length;Ve++){se.push(i.COLOR_ATTACHMENT0+Ve),P.depthBuffer&&se.push(Le);let Ye=Me.__ignoreDepthValues!==void 0?Me.__ignoreDepthValues:!1;if(Ye===!1&&(P.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),Ae&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[Ve]),Ye===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Le]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Le])),Ae){let ce=n.get(T[Ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ce,0)}i.blitFramebuffer(0,0,Y,le,0,0,Y,le,ae,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ae)for(let Ve=0;Ve<T.length;Ve++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.RENDERBUFFER,Me.__webglColorRenderbuffer[Ve]);let Ye=n.get(T[Ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.TEXTURE_2D,Ye,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}}function Oe(P){return Math.min(s.maxSamples,P.samples)}function Te(P){let T=n.get(P);return o&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function et(P){let T=a.render.frame;h.get(P)!==T&&(h.set(P,T),P.update())}function Be(P,T){let Y=P.colorSpace,le=P.format,ae=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===bl||Y!==qt&&Y!==In&&(yt.getTransfer(Y)===Pt?o===!1?e.has("EXT_sRGB")===!0&&le===Ln?(P.format=bl,P.minFilter=un,P.generateMipmaps=!1):T=ao.sRGBToLinear(T):(le!==Ln||ae!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),T}this.allocateTextureUnit=L,this.resetTextureUnits=k,this.setTexture2D=D,this.setTexture2DArray=G,this.setTexture3D=z,this.setTextureCube=V,this.rebindTextures=ge,this.setupRenderTarget=B,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Te}function ix(i,e,t){let n=t.isWebGL2;function s(r,a=In){let o,c=yt.getTransfer(a);if(r===Gi)return i.UNSIGNED_BYTE;if(r===yf)return i.UNSIGNED_SHORT_4_4_4_4;if(r===vf)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Fm)return i.BYTE;if(r===Hm)return i.SHORT;if(r===sh)return i.UNSIGNED_SHORT;if(r===xf)return i.INT;if(r===Hi)return i.UNSIGNED_INT;if(r===xi)return i.FLOAT;if(r===Gr)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===km)return i.ALPHA;if(r===Ln)return i.RGBA;if(r===Bm)return i.LUMINANCE;if(r===zm)return i.LUMINANCE_ALPHA;if(r===us)return i.DEPTH_COMPONENT;if(r===Qs)return i.DEPTH_STENCIL;if(r===bl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Gm)return i.RED;if(r===Mf)return i.RED_INTEGER;if(r===Vm)return i.RG;if(r===Ef)return i.RG_INTEGER;if(r===Sf)return i.RGBA_INTEGER;if(r===Pc||r===Lc||r===Ic||r===Dc)if(c===Pt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Pc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Lc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ic)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Dc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Pc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Lc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ic)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Dc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Lu||r===Iu||r===Du||r===Nu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Lu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Iu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Du)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Nu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===wf)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Uu||r===Ou)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Uu)return c===Pt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Ou)return c===Pt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Fu||r===Hu||r===ku||r===Bu||r===zu||r===Gu||r===Vu||r===Wu||r===Xu||r===qu||r===ju||r===Yu||r===Ku||r===Zu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Fu)return c===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Hu)return c===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ku)return c===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Bu)return c===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===zu)return c===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Gu)return c===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Vu)return c===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Wu)return c===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Xu)return c===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===qu)return c===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ju)return c===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Yu)return c===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ku)return c===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Zu)return c===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Nc||r===Ju||r===Qu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Nc)return c===Pt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ju)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Qu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Wm||r===$u||r===ed||r===td)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Nc)return o.COMPRESSED_RED_RGTC1_EXT;if(r===$u)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ed)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===td)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===hs?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Pl=class extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},st=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},sx={type:"move"},Hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new st,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new st,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new st,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let b of e.hand.values()){let g=t.getJointPose(b,n),p=this._getHandJoint(l,b);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(sx)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new st;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ll=class extends ai{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,b=t.getContextAttributes(),g=null,p=null,x=[],_=[],v=new re,w=null,M=new Xt;M.layers.enable(1),M.viewport=new wt;let S=new Xt;S.layers.enable(2),S.viewport=new wt;let R=[M,S],y=new Pl;y.layers.enable(1),y.layers.enable(2);let E=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ne=x[Z];return ne===void 0&&(ne=new Hr,x[Z]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Z){let ne=x[Z];return ne===void 0&&(ne=new Hr,x[Z]=ne),ne.getGripSpace()},this.getHand=function(Z){let ne=x[Z];return ne===void 0&&(ne=new Hr,x[Z]=ne),ne.getHandSpace()};function O(Z){let ne=_.indexOf(Z.inputSource);if(ne===-1)return;let ue=x[ne];ue!==void 0&&(ue.update(Z.inputSource,Z.frame,l||a),ue.dispatchEvent({type:Z.type,data:Z.inputSource}))}function k(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",L);for(let Z=0;Z<x.length;Z++){let ne=_[Z];ne!==null&&(_[Z]=null,x[Z].disconnect(ne))}E=null,I=null,e.setRenderTarget(g),f=null,d=null,u=null,s=null,p=null,ie.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(v.width,v.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",k),s.addEventListener("inputsourceschange",L),b.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(v),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ne={antialias:s.renderState.layers===void 0?b.antialias:!0,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new vi(f.framebufferWidth,f.framebufferHeight,{format:Ln,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil})}else{let ne=null,ue=null,we=null;b.depth&&(we=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=b.stencil?Qs:us,ue=b.stencil?hs:Hi);let ve={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(ve),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new vi(d.textureWidth,d.textureHeight,{format:Ln,type:Gi,depthTexture:new po(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0});let De=e.properties.get(p);De.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ie.setContext(s),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(Z){for(let ne=0;ne<Z.removed.length;ne++){let ue=Z.removed[ne],we=_.indexOf(ue);we>=0&&(_[we]=null,x[we].disconnect(ue))}for(let ne=0;ne<Z.added.length;ne++){let ue=Z.added[ne],we=_.indexOf(ue);if(we===-1){for(let De=0;De<x.length;De++)if(De>=_.length){_.push(ue),we=De;break}else if(_[De]===null){_[De]=ue,we=De;break}if(we===-1)break}let ve=x[we];ve&&ve.connect(ue)}}let U=new A,D=new A;function G(Z,ne,ue){U.setFromMatrixPosition(ne.matrixWorld),D.setFromMatrixPosition(ue.matrixWorld);let we=U.distanceTo(D),ve=ne.projectionMatrix.elements,De=ue.projectionMatrix.elements,ke=ve[14]/(ve[10]-1),de=ve[14]/(ve[10]+1),ge=(ve[9]+1)/ve[5],B=(ve[9]-1)/ve[5],Ge=(ve[8]-1)/ve[0],Ee=(De[8]+1)/De[0],Oe=ke*Ge,Te=ke*Ee,et=we/(-Ge+Ee),Be=et*-Ge;ne.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Be),Z.translateZ(et),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();let P=ke+et,T=de+et,Y=Oe-Be,le=Te+(we-Be),ae=ge*de/T*P,se=B*de/T*P;Z.projectionMatrix.makePerspective(Y,le,ae,se,P,T),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function z(Z,ne){ne===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ne.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;y.near=S.near=M.near=Z.near,y.far=S.far=M.far=Z.far,(E!==y.near||I!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,I=y.far);let ne=Z.parent,ue=y.cameras;z(y,ne);for(let we=0;we<ue.length;we++)z(ue[we],ne);ue.length===2?G(y,M,S):y.projectionMatrix.copy(M.projectionMatrix),V(Z,y,ne)};function V(Z,ne,ue){ue===null?Z.matrix.copy(ne.matrixWorld):(Z.matrix.copy(ue.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ne.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ne.projectionMatrix),Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=er*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)};let Q=null;function te(Z,ne){if(h=ne.getViewerPose(l||a),m=ne,h!==null){let ue=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let we=!1;ue.length!==y.cameras.length&&(y.cameras.length=0,we=!0);for(let ve=0;ve<ue.length;ve++){let De=ue[ve],ke=null;if(f!==null)ke=f.getViewport(De);else{let ge=u.getViewSubImage(d,De);ke=ge.viewport,ve===0&&(e.setRenderTargetTextures(p,ge.colorTexture,d.ignoreDepthValues?void 0:ge.depthStencilTexture),e.setRenderTarget(p))}let de=R[ve];de===void 0&&(de=new Xt,de.layers.enable(ve),de.viewport=new wt,R[ve]=de),de.matrix.fromArray(De.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(De.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(ke.x,ke.y,ke.width,ke.height),ve===0&&(y.matrix.copy(de.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),we===!0&&y.cameras.push(de)}}for(let ue=0;ue<x.length;ue++){let we=_[ue],ve=x[ue];we!==null&&ve!==void 0&&ve.update(we,ne,l||a)}Q&&Q(Z,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),m=null}let ie=new Nf;ie.setAnimationLoop(te),this.setAnimationLoop=function(Z){Q=Z},this.dispose=function(){}}};function rx(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Df(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,x,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),b(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,x,_):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Gt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Gt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let x=e.get(p).envMap;if(x&&(g.envMap.value=x,g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;let _=i._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*_,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,x,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=_*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Gt&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function b(g,p){let x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ax(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,_){let v=_.program;n.uniformBlockBinding(x,v)}function l(x,_){let v=s[x.id];v===void 0&&(m(x),v=h(x),s[x.id]=v,x.addEventListener("dispose",g));let w=_.program;n.updateUBOMapping(x,w);let M=e.render.frame;r[x.id]!==M&&(d(x),r[x.id]=M)}function h(x){let _=u();x.__bindingPointIndex=_;let v=i.createBuffer(),w=x.__size,M=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,w,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let _=s[x.id],v=x.uniforms,w=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let M=0,S=v.length;M<S;M++){let R=Array.isArray(v[M])?v[M]:[v[M]];for(let y=0,E=R.length;y<E;y++){let I=R[y];if(f(I,M,y,w)===!0){let O=I.__offset,k=Array.isArray(I.value)?I.value:[I.value],L=0;for(let U=0;U<k.length;U++){let D=k[U],G=b(D);typeof D=="number"||typeof D=="boolean"?(I.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,O+L,I.__data)):D.isMatrix3?(I.__data[0]=D.elements[0],I.__data[1]=D.elements[1],I.__data[2]=D.elements[2],I.__data[3]=0,I.__data[4]=D.elements[3],I.__data[5]=D.elements[4],I.__data[6]=D.elements[5],I.__data[7]=0,I.__data[8]=D.elements[6],I.__data[9]=D.elements[7],I.__data[10]=D.elements[8],I.__data[11]=0):(D.toArray(I.__data,L),L+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,_,v,w){let M=x.value,S=_+"_"+v;if(w[S]===void 0)return typeof M=="number"||typeof M=="boolean"?w[S]=M:w[S]=M.clone(),!0;{let R=w[S];if(typeof M=="number"||typeof M=="boolean"){if(R!==M)return w[S]=M,!0}else if(R.equals(M)===!1)return R.copy(M),!0}return!1}function m(x){let _=x.uniforms,v=0,w=16;for(let S=0,R=_.length;S<R;S++){let y=Array.isArray(_[S])?_[S]:[_[S]];for(let E=0,I=y.length;E<I;E++){let O=y[E],k=Array.isArray(O.value)?O.value:[O.value];for(let L=0,U=k.length;L<U;L++){let D=k[L],G=b(D),z=v%w;z!==0&&w-z<G.boundary&&(v+=w-z),O.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=G.storage}}}let M=v%w;return M>0&&(v+=w-M),x.__size=v,x.__cache={},this}function b(x){let _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function g(x){let _=x.target;_.removeEventListener("dispose",g);let v=a.indexOf(_.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}var jr=class{constructor(e={}){let{canvas:t=m0(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let f=new Uint32Array(4),m=new Int32Array(4),b=null,g=null,p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=At,this._useLegacyLights=!1,this.toneMapping=zi,this.toneMappingExposure=1;let _=this,v=!1,w=0,M=0,S=null,R=-1,y=null,E=new wt,I=new wt,O=null,k=new Pe(0),L=0,U=t.width,D=t.height,G=1,z=null,V=null,Q=new wt(0,0,U,D),te=new wt(0,0,U,D),ie=!1,Z=new Xr,ne=!1,ue=!1,we=null,ve=new Xe,De=new re,ke=new A,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ge(){return S===null?G:1}let B=n;function Ge(C,X){for(let J=0;J<C.length;J++){let $=C[J],K=t.getContext($,X);if(K!==null)return K}return null}try{let C={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",H,!1),t.addEventListener("webglcontextcreationerror",fe,!1),B===null){let X=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&X.shift(),B=Ge(X,C),B===null)throw Ge(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ee,Oe,Te,et,Be,P,T,Y,le,ae,se,Le,Me,Ae,Ve,Ye,ce,ht,N,oe,_e,he,Ne,tt;function ut(){Ee=new w1(B),Oe=new x1(B,Ee,e),Ee.init(Oe),he=new ix(B,Ee,Oe),Te=new tx(B,Ee,Oe),et=new R1(B),Be=new V_,P=new nx(B,Ee,Te,Be,Oe,he,et),T=new v1(_),Y=new S1(_),le=new O0(B,Oe),Ne=new b1(B,Ee,le,Oe),ae=new T1(B,le,et,Ne),se=new I1(B,ae,le,et),N=new L1(B,Oe,P),Ye=new y1(Be),Le=new G_(_,T,Y,Ee,Oe,Ne,Ye),Me=new rx(_,Be),Ae=new X_,Ve=new J_(Ee,Oe),ht=new g1(_,T,Y,Te,se,d,c),ce=new ex(_,se,Oe),tt=new ax(B,et,Oe,Te),oe=new _1(B,Ee,et,Oe),_e=new A1(B,Ee,et,Oe),et.programs=Le.programs,_.capabilities=Oe,_.extensions=Ee,_.properties=Be,_.renderLists=Ae,_.shadowMap=ce,_.state=Te,_.info=et}ut();let Qe=new Ll(_,B);this.xr=Qe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let C=Ee.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=Ee.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(C){C!==void 0&&(G=C,this.setSize(U,D,!1))},this.getSize=function(C){return C.set(U,D)},this.setSize=function(C,X,J=!0){if(Qe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=C,D=X,t.width=Math.floor(C*G),t.height=Math.floor(X*G),J===!0&&(t.style.width=C+"px",t.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(U*G,D*G).floor()},this.setDrawingBufferSize=function(C,X,J){U=C,D=X,G=J,t.width=Math.floor(C*J),t.height=Math.floor(X*J),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(E)},this.getViewport=function(C){return C.copy(Q)},this.setViewport=function(C,X,J,$){C.isVector4?Q.set(C.x,C.y,C.z,C.w):Q.set(C,X,J,$),Te.viewport(E.copy(Q).multiplyScalar(G).floor())},this.getScissor=function(C){return C.copy(te)},this.setScissor=function(C,X,J,$){C.isVector4?te.set(C.x,C.y,C.z,C.w):te.set(C,X,J,$),Te.scissor(I.copy(te).multiplyScalar(G).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(C){Te.setScissorTest(ie=C)},this.setOpaqueSort=function(C){z=C},this.setTransparentSort=function(C){V=C},this.getClearColor=function(C){return C.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor.apply(ht,arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha.apply(ht,arguments)},this.clear=function(C=!0,X=!0,J=!0){let $=0;if(C){let K=!1;if(S!==null){let Re=S.texture.format;K=Re===Sf||Re===Ef||Re===Mf}if(K){let Re=S.texture.type,He=Re===Gi||Re===Hi||Re===sh||Re===hs||Re===yf||Re===vf,We=ht.getClearColor(),qe=ht.getClearAlpha(),$e=We.r,je=We.g,Ke=We.b;He?(f[0]=$e,f[1]=je,f[2]=Ke,f[3]=qe,B.clearBufferuiv(B.COLOR,0,f)):(m[0]=$e,m[1]=je,m[2]=Ke,m[3]=qe,B.clearBufferiv(B.COLOR,0,m))}else $|=B.COLOR_BUFFER_BIT}X&&($|=B.DEPTH_BUFFER_BIT),J&&($|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",H,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),Ae.dispose(),Ve.dispose(),Be.dispose(),T.dispose(),Y.dispose(),se.dispose(),Ne.dispose(),tt.dispose(),Le.dispose(),Qe.dispose(),Qe.removeEventListener("sessionstart",on),Qe.removeEventListener("sessionend",Rt),we&&(we.dispose(),we=null),cn.stop()};function be(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let C=et.autoReset,X=ce.enabled,J=ce.autoUpdate,$=ce.needsUpdate,K=ce.type;ut(),et.autoReset=C,ce.enabled=X,ce.autoUpdate=J,ce.needsUpdate=$,ce.type=K}function fe(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function pe(C){let X=C.target;X.removeEventListener("dispose",pe),ze(X)}function ze(C){Fe(C),Be.remove(C)}function Fe(C){let X=Be.get(C).programs;X!==void 0&&(X.forEach(function(J){Le.releaseProgram(J)}),C.isShaderMaterial&&Le.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,J,$,K,Re){X===null&&(X=de);let He=K.isMesh&&K.matrixWorld.determinant()<0,We=em(C,X,J,$,K);Te.setMaterial($,He);let qe=J.index,$e=1;if($.wireframe===!0){if(qe=ae.getWireframeAttribute(J),qe===void 0)return;$e=2}let je=J.drawRange,Ke=J.attributes.position,Ft=je.start*$e,_n=(je.start+je.count)*$e;Re!==null&&(Ft=Math.max(Ft,Re.start*$e),_n=Math.min(_n,(Re.start+Re.count)*$e)),qe!==null?(Ft=Math.max(Ft,0),_n=Math.min(_n,qe.count)):Ke!=null&&(Ft=Math.max(Ft,0),_n=Math.min(_n,Ke.count));let Zt=_n-Ft;if(Zt<0||Zt===1/0)return;Ne.setup(K,$,We,J,qe);let ui,Dt=oe;if(qe!==null&&(ui=le.get(qe),Dt=_e,Dt.setIndex(ui)),K.isMesh)$.wireframe===!0?(Te.setLineWidth($.wireframeLinewidth*ge()),Dt.setMode(B.LINES)):Dt.setMode(B.TRIANGLES);else if(K.isLine){let nt=$.linewidth;nt===void 0&&(nt=1),Te.setLineWidth(nt*ge()),K.isLineSegments?Dt.setMode(B.LINES):K.isLineLoop?Dt.setMode(B.LINE_LOOP):Dt.setMode(B.LINE_STRIP)}else K.isPoints?Dt.setMode(B.POINTS):K.isSprite&&Dt.setMode(B.TRIANGLES);if(K.isBatchedMesh)Dt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else if(K.isInstancedMesh)Dt.renderInstances(Ft,Zt,K.count);else if(J.isInstancedBufferGeometry){let nt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Tc=Math.min(J.instanceCount,nt);Dt.renderInstances(Ft,Zt,Tc)}else Dt.render(Ft,Zt)};function bt(C,X,J){C.transparent===!0&&C.side===vt&&C.forceSinglePass===!1?(C.side=Gt,C.needsUpdate=!0,va(C,X,J),C.side=si,C.needsUpdate=!0,va(C,X,J),C.side=vt):va(C,X,J)}this.compile=function(C,X,J=null){J===null&&(J=C),g=Ve.get(J),g.init(),x.push(g),J.traverseVisible(function(K){K.isLight&&K.layers.test(X.layers)&&(g.pushLight(K),K.castShadow&&g.pushShadow(K))}),C!==J&&C.traverseVisible(function(K){K.isLight&&K.layers.test(X.layers)&&(g.pushLight(K),K.castShadow&&g.pushShadow(K))}),g.setupLights(_._useLegacyLights);let $=new Set;return C.traverse(function(K){let Re=K.material;if(Re)if(Array.isArray(Re))for(let He=0;He<Re.length;He++){let We=Re[He];bt(We,J,K),$.add(We)}else bt(Re,J,K),$.add(Re)}),x.pop(),g=null,$},this.compileAsync=function(C,X,J=null){let $=this.compile(C,X,J);return new Promise(K=>{function Re(){if($.forEach(function(He){Be.get(He).currentProgram.isReady()&&$.delete(He)}),$.size===0){K(C);return}setTimeout(Re,10)}Ee.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let xt=null;function Kt(C){xt&&xt(C)}function on(){cn.stop()}function Rt(){cn.start()}let cn=new Nf;cn.setAnimationLoop(Kt),typeof self<"u"&&cn.setContext(self),this.setAnimationLoop=function(C){xt=C,Qe.setAnimationLoop(C),C===null?cn.stop():cn.start()},Qe.addEventListener("sessionstart",on),Qe.addEventListener("sessionend",Rt),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Qe.enabled===!0&&Qe.isPresenting===!0&&(Qe.cameraAutoUpdate===!0&&Qe.updateCamera(X),X=Qe.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,X,S),g=Ve.get(C,x.length),g.init(),x.push(g),ve.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Z.setFromProjectionMatrix(ve),ue=this.localClippingEnabled,ne=Ye.init(this.clippingPlanes,ue),b=Ae.get(C,p.length),b.init(),p.push(b),ti(C,X,0,_.sortObjects),b.finish(),_.sortObjects===!0&&b.sort(z,V),this.info.render.frame++,ne===!0&&Ye.beginShadows();let J=g.state.shadowsArray;if(ce.render(J,C,X),ne===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),ht.render(b,C),g.setupLights(_._useLegacyLights),X.isArrayCamera){let $=X.cameras;for(let K=0,Re=$.length;K<Re;K++){let He=$[K];_u(b,C,He,He.viewport)}}else _u(b,C,X);S!==null&&(P.updateMultisampleRenderTarget(S),P.updateRenderTargetMipmap(S)),C.isScene===!0&&C.onAfterRender(_,C,X),Ne.resetDefaultState(),R=-1,y=null,x.pop(),x.length>0?g=x[x.length-1]:g=null,p.pop(),p.length>0?b=p[p.length-1]:b=null};function ti(C,X,J,$){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)J=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Z.intersectsSprite(C)){$&&ke.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ve);let He=se.update(C),We=C.material;We.visible&&b.push(C,He,We,J,ke.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Z.intersectsObject(C))){let He=se.update(C),We=C.material;if($&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ke.copy(C.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),ke.copy(He.boundingSphere.center)),ke.applyMatrix4(C.matrixWorld).applyMatrix4(ve)),Array.isArray(We)){let qe=He.groups;for(let $e=0,je=qe.length;$e<je;$e++){let Ke=qe[$e],Ft=We[Ke.materialIndex];Ft&&Ft.visible&&b.push(C,He,Ft,J,ke.z,Ke)}}else We.visible&&b.push(C,He,We,J,ke.z,null)}}let Re=C.children;for(let He=0,We=Re.length;He<We;He++)ti(Re[He],X,J,$)}function _u(C,X,J,$){let K=C.opaque,Re=C.transmissive,He=C.transparent;g.setupLightsView(J),ne===!0&&Ye.setGlobalState(_.clippingPlanes,J),Re.length>0&&$p(K,Re,X,J),$&&Te.viewport(E.copy($)),K.length>0&&ya(K,X,J),Re.length>0&&ya(Re,X,J),He.length>0&&ya(He,X,J),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function $p(C,X,J,$){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;let Re=Oe.isWebGL2;we===null&&(we=new vi(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?Gr:Gi,minFilter:ri,samples:Re?4:0})),_.getDrawingBufferSize(De),Re?we.setSize(De.x,De.y):we.setSize(ro(De.x),ro(De.y));let He=_.getRenderTarget();_.setRenderTarget(we),_.getClearColor(k),L=_.getClearAlpha(),L<1&&_.setClearColor(16777215,.5),_.clear();let We=_.toneMapping;_.toneMapping=zi,ya(C,J,$),P.updateMultisampleRenderTarget(we),P.updateRenderTargetMipmap(we);let qe=!1;for(let $e=0,je=X.length;$e<je;$e++){let Ke=X[$e],Ft=Ke.object,_n=Ke.geometry,Zt=Ke.material,ui=Ke.group;if(Zt.side===vt&&Ft.layers.test($.layers)){let Dt=Zt.side;Zt.side=Gt,Zt.needsUpdate=!0,xu(Ft,J,$,_n,Zt,ui),Zt.side=Dt,Zt.needsUpdate=!0,qe=!0}}qe===!0&&(P.updateMultisampleRenderTarget(we),P.updateRenderTargetMipmap(we)),_.setRenderTarget(He),_.setClearColor(k,L),_.toneMapping=We}function ya(C,X,J){let $=X.isScene===!0?X.overrideMaterial:null;for(let K=0,Re=C.length;K<Re;K++){let He=C[K],We=He.object,qe=He.geometry,$e=$===null?He.material:$,je=He.group;We.layers.test(J.layers)&&xu(We,X,J,qe,$e,je)}}function xu(C,X,J,$,K,Re){C.onBeforeRender(_,X,J,$,K,Re),C.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(_,X,J,$,C,Re),K.transparent===!0&&K.side===vt&&K.forceSinglePass===!1?(K.side=Gt,K.needsUpdate=!0,_.renderBufferDirect(J,X,$,K,C,Re),K.side=si,K.needsUpdate=!0,_.renderBufferDirect(J,X,$,K,C,Re),K.side=vt):_.renderBufferDirect(J,X,$,K,C,Re),C.onAfterRender(_,X,J,$,K,Re)}function va(C,X,J){X.isScene!==!0&&(X=de);let $=Be.get(C),K=g.state.lights,Re=g.state.shadowsArray,He=K.state.version,We=Le.getParameters(C,K.state,Re,X,J),qe=Le.getProgramCacheKey(We),$e=$.programs;$.environment=C.isMeshStandardMaterial?X.environment:null,$.fog=X.fog,$.envMap=(C.isMeshStandardMaterial?Y:T).get(C.envMap||$.environment),$e===void 0&&(C.addEventListener("dispose",pe),$e=new Map,$.programs=$e);let je=$e.get(qe);if(je!==void 0){if($.currentProgram===je&&$.lightsStateVersion===He)return vu(C,We),je}else We.uniforms=Le.getUniforms(C),C.onBuild(J,We,_),C.onBeforeCompile(We,_),je=Le.acquireProgram(We,qe),$e.set(qe,je),$.uniforms=We.uniforms;let Ke=$.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ke.clippingPlanes=Ye.uniform),vu(C,We),$.needsLights=nm(C),$.lightsStateVersion=He,$.needsLights&&(Ke.ambientLightColor.value=K.state.ambient,Ke.lightProbe.value=K.state.probe,Ke.directionalLights.value=K.state.directional,Ke.directionalLightShadows.value=K.state.directionalShadow,Ke.spotLights.value=K.state.spot,Ke.spotLightShadows.value=K.state.spotShadow,Ke.rectAreaLights.value=K.state.rectArea,Ke.ltc_1.value=K.state.rectAreaLTC1,Ke.ltc_2.value=K.state.rectAreaLTC2,Ke.pointLights.value=K.state.point,Ke.pointLightShadows.value=K.state.pointShadow,Ke.hemisphereLights.value=K.state.hemi,Ke.directionalShadowMap.value=K.state.directionalShadowMap,Ke.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ke.spotShadowMap.value=K.state.spotShadowMap,Ke.spotLightMatrix.value=K.state.spotLightMatrix,Ke.spotLightMap.value=K.state.spotLightMap,Ke.pointShadowMap.value=K.state.pointShadowMap,Ke.pointShadowMatrix.value=K.state.pointShadowMatrix),$.currentProgram=je,$.uniformsList=null,je}function yu(C){if(C.uniformsList===null){let X=C.currentProgram.getUniforms();C.uniformsList=Ks.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function vu(C,X){let J=Be.get(C);J.outputColorSpace=X.outputColorSpace,J.batching=X.batching,J.instancing=X.instancing,J.instancingColor=X.instancingColor,J.skinning=X.skinning,J.morphTargets=X.morphTargets,J.morphNormals=X.morphNormals,J.morphColors=X.morphColors,J.morphTargetsCount=X.morphTargetsCount,J.numClippingPlanes=X.numClippingPlanes,J.numIntersection=X.numClipIntersection,J.vertexAlphas=X.vertexAlphas,J.vertexTangents=X.vertexTangents,J.toneMapping=X.toneMapping}function em(C,X,J,$,K){X.isScene!==!0&&(X=de),P.resetTextureUnits();let Re=X.fog,He=$.isMeshStandardMaterial?X.environment:null,We=S===null?_.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:qt,qe=($.isMeshStandardMaterial?Y:T).get($.envMap||He),$e=$.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,je=!!J.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ke=!!J.morphAttributes.position,Ft=!!J.morphAttributes.normal,_n=!!J.morphAttributes.color,Zt=zi;$.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Zt=_.toneMapping);let ui=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Dt=ui!==void 0?ui.length:0,nt=Be.get($),Tc=g.state.lights;if(ne===!0&&(ue===!0||C!==y)){let Cn=C===y&&$.id===R;Ye.setState($,C,Cn)}let Ut=!1;$.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==Tc.state.version||nt.outputColorSpace!==We||K.isBatchedMesh&&nt.batching===!1||!K.isBatchedMesh&&nt.batching===!0||K.isInstancedMesh&&nt.instancing===!1||!K.isInstancedMesh&&nt.instancing===!0||K.isSkinnedMesh&&nt.skinning===!1||!K.isSkinnedMesh&&nt.skinning===!0||K.isInstancedMesh&&nt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&nt.instancingColor===!1&&K.instanceColor!==null||nt.envMap!==qe||$.fog===!0&&nt.fog!==Re||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==Ye.numPlanes||nt.numIntersection!==Ye.numIntersection)||nt.vertexAlphas!==$e||nt.vertexTangents!==je||nt.morphTargets!==Ke||nt.morphNormals!==Ft||nt.morphColors!==_n||nt.toneMapping!==Zt||Oe.isWebGL2===!0&&nt.morphTargetsCount!==Dt)&&(Ut=!0):(Ut=!0,nt.__version=$.version);let ts=nt.currentProgram;Ut===!0&&(ts=va($,X,K));let Mu=!1,Tr=!1,Ac=!1,sn=ts.getUniforms(),ns=nt.uniforms;if(Te.useProgram(ts.program)&&(Mu=!0,Tr=!0,Ac=!0),$.id!==R&&(R=$.id,Tr=!0),Mu||y!==C){sn.setValue(B,"projectionMatrix",C.projectionMatrix),sn.setValue(B,"viewMatrix",C.matrixWorldInverse);let Cn=sn.map.cameraPosition;Cn!==void 0&&Cn.setValue(B,ke.setFromMatrixPosition(C.matrixWorld)),Oe.logarithmicDepthBuffer&&sn.setValue(B,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&sn.setValue(B,"isOrthographic",C.isOrthographicCamera===!0),y!==C&&(y=C,Tr=!0,Ac=!0)}if(K.isSkinnedMesh){sn.setOptional(B,K,"bindMatrix"),sn.setOptional(B,K,"bindMatrixInverse");let Cn=K.skeleton;Cn&&(Oe.floatVertexTextures?(Cn.boneTexture===null&&Cn.computeBoneTexture(),sn.setValue(B,"boneTexture",Cn.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}K.isBatchedMesh&&(sn.setOptional(B,K,"batchingTexture"),sn.setValue(B,"batchingTexture",K._matricesTexture,P));let Rc=J.morphAttributes;if((Rc.position!==void 0||Rc.normal!==void 0||Rc.color!==void 0&&Oe.isWebGL2===!0)&&N.update(K,J,ts),(Tr||nt.receiveShadow!==K.receiveShadow)&&(nt.receiveShadow=K.receiveShadow,sn.setValue(B,"receiveShadow",K.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(ns.envMap.value=qe,ns.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),Tr&&(sn.setValue(B,"toneMappingExposure",_.toneMappingExposure),nt.needsLights&&tm(ns,Ac),Re&&$.fog===!0&&Me.refreshFogUniforms(ns,Re),Me.refreshMaterialUniforms(ns,$,G,D,we),Ks.upload(B,yu(nt),ns,P)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Ks.upload(B,yu(nt),ns,P),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&sn.setValue(B,"center",K.center),sn.setValue(B,"modelViewMatrix",K.modelViewMatrix),sn.setValue(B,"normalMatrix",K.normalMatrix),sn.setValue(B,"modelMatrix",K.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let Cn=$.uniformsGroups;for(let Cc=0,im=Cn.length;Cc<im;Cc++)if(Oe.isWebGL2){let Eu=Cn[Cc];tt.update(Eu,ts),tt.bind(Eu,ts)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ts}function tm(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function nm(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(C,X,J){Be.get(C.texture).__webglTexture=X,Be.get(C.depthTexture).__webglTexture=J;let $=Be.get(C);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=J===void 0,$.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,X){let J=Be.get(C);J.__webglFramebuffer=X,J.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(C,X=0,J=0){S=C,w=X,M=J;let $=!0,K=null,Re=!1,He=!1;if(C){let qe=Be.get(C);qe.__useDefaultFramebuffer!==void 0?(Te.bindFramebuffer(B.FRAMEBUFFER,null),$=!1):qe.__webglFramebuffer===void 0?P.setupRenderTarget(C):qe.__hasExternalTextures&&P.rebindTextures(C,Be.get(C.texture).__webglTexture,Be.get(C.depthTexture).__webglTexture);let $e=C.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(He=!0);let je=Be.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(je[X])?K=je[X][J]:K=je[X],Re=!0):Oe.isWebGL2&&C.samples>0&&P.useMultisampledRTT(C)===!1?K=Be.get(C).__webglMultisampledFramebuffer:Array.isArray(je)?K=je[J]:K=je,E.copy(C.viewport),I.copy(C.scissor),O=C.scissorTest}else E.copy(Q).multiplyScalar(G).floor(),I.copy(te).multiplyScalar(G).floor(),O=ie;if(Te.bindFramebuffer(B.FRAMEBUFFER,K)&&Oe.drawBuffers&&$&&Te.drawBuffers(C,K),Te.viewport(E),Te.scissor(I),Te.setScissorTest(O),Re){let qe=Be.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+X,qe.__webglTexture,J)}else if(He){let qe=Be.get(C.texture),$e=X||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,qe.__webglTexture,J||0,$e)}R=-1},this.readRenderTargetPixels=function(C,X,J,$,K,Re,He){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=Be.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&He!==void 0&&(We=We[He]),We){Te.bindFramebuffer(B.FRAMEBUFFER,We);try{let qe=C.texture,$e=qe.format,je=qe.type;if($e!==Ln&&he.convert($e)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ke=je===Gr&&(Ee.has("EXT_color_buffer_half_float")||Oe.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(je!==Gi&&he.convert(je)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(je===xi&&(Oe.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-$&&J>=0&&J<=C.height-K&&B.readPixels(X,J,$,K,he.convert($e),he.convert(je),Re)}finally{let qe=S!==null?Be.get(S).__webglFramebuffer:null;Te.bindFramebuffer(B.FRAMEBUFFER,qe)}}},this.copyFramebufferToTexture=function(C,X,J=0){let $=Math.pow(2,-J),K=Math.floor(X.image.width*$),Re=Math.floor(X.image.height*$);P.setTexture2D(X,0),B.copyTexSubImage2D(B.TEXTURE_2D,J,0,0,C.x,C.y,K,Re),Te.unbindTexture()},this.copyTextureToTexture=function(C,X,J,$=0){let K=X.image.width,Re=X.image.height,He=he.convert(J.format),We=he.convert(J.type);P.setTexture2D(J,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,J.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,J.unpackAlignment),X.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,$,C.x,C.y,K,Re,He,We,X.image.data):X.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,$,C.x,C.y,X.mipmaps[0].width,X.mipmaps[0].height,He,X.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,$,C.x,C.y,He,We,X.image),$===0&&J.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(C,X,J,$,K=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Re=C.max.x-C.min.x+1,He=C.max.y-C.min.y+1,We=C.max.z-C.min.z+1,qe=he.convert($.format),$e=he.convert($.type),je;if($.isData3DTexture)P.setTexture3D($,0),je=B.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)P.setTexture2DArray($,0),je=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,$.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,$.unpackAlignment);let Ke=B.getParameter(B.UNPACK_ROW_LENGTH),Ft=B.getParameter(B.UNPACK_IMAGE_HEIGHT),_n=B.getParameter(B.UNPACK_SKIP_PIXELS),Zt=B.getParameter(B.UNPACK_SKIP_ROWS),ui=B.getParameter(B.UNPACK_SKIP_IMAGES),Dt=J.isCompressedTexture?J.mipmaps[K]:J.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,Dt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Dt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,C.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,C.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,C.min.z),J.isDataTexture||J.isData3DTexture?B.texSubImage3D(je,K,X.x,X.y,X.z,Re,He,We,qe,$e,Dt.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(je,K,X.x,X.y,X.z,Re,He,We,qe,Dt.data)):B.texSubImage3D(je,K,X.x,X.y,X.z,Re,He,We,qe,$e,Dt),B.pixelStorei(B.UNPACK_ROW_LENGTH,Ke),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ft),B.pixelStorei(B.UNPACK_SKIP_PIXELS,_n),B.pixelStorei(B.UNPACK_SKIP_ROWS,Zt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ui),K===0&&$.generateMipmaps&&B.generateMipmap(je),Te.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),Te.unbindTexture()},this.resetState=function(){w=0,M=0,S=null,Te.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===ah?"display-p3":"srgb",t.unpackColorSpace=yt.workingColorSpace===Fo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===At?ds:Af}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ds?At:qt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Il=class extends jr{};Il.prototype.isWebGL1Renderer=!0;var mo=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Pe(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},rr=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Yr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=gl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ln=new A,Kr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ii(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Xd=new A,qd=new wt,jd=new wt,ox=new A,Yd=new Xe,Wa=new A,sl=new Mn,Kd=new Xe,rl=new Mi,go=class extends q{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Pu,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new gn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Wa),this.boundingBox.expandByPoint(Wa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Mn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Wa),this.boundingSphere.expandByPoint(Wa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sl.copy(this.boundingSphere),sl.applyMatrix4(s),e.ray.intersectsSphere(sl)!==!1&&(Kd.copy(s).invert(),rl.copy(e.ray).applyMatrix4(Kd),!(this.boundingBox!==null&&rl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,rl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new wt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Pu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Om?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;qd.fromBufferAttribute(s.attributes.skinIndex,e),jd.fromBufferAttribute(s.attributes.skinWeight,e),Xd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=jd.getComponent(r);if(a!==0){let o=qd.getComponent(r);Yd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(ox.copy(Xd).applyMatrix4(Yd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Zr=class extends Lt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Dl=class extends $t{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Wt,h=Wt,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Zd=new Xe,cx=new Xe,bo=class i{constructor(e=[],t=[]){this.uuid=Dn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:cx;Zd.multiplyMatrices(o,t[r]),Zd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Dl(t,e,e,Ln,xi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Zr),this.bones.push(a),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},ps=class extends Mt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Gs=new Xe,Jd=new Xe,Xa=[],Qd=new gn,lx=new Xe,Lr=new q,Ir=new Mn,Ei=class extends q{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ps(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,lx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gs),Qd.copy(e.boundingBox).applyMatrix4(Gs),this.boundingBox.union(Qd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gs),Ir.copy(e.boundingSphere).applyMatrix4(Gs),this.boundingSphere.union(Ir)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Lr.geometry=this.geometry,Lr.material=this.material,Lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ir.copy(this.boundingSphere),Ir.applyMatrix4(n),e.ray.intersectsSphere(Ir)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Gs),Jd.multiplyMatrices(n,Gs),Lr.matrixWorld=Jd,Lr.raycast(e,Xa);for(let a=0,o=Xa.length;a<o;a++){let c=Xa[a];c.instanceId=r,c.object=this,t.push(c)}Xa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ps(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Jr=class extends En{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},$d=new A,ef=new A,tf=new Xe,al=new Mi,qa=new Mn,ar=class extends Lt{constructor(e=new dt,t=new Jr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)$d.fromBufferAttribute(t,s-1),ef.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=$d.distanceTo(ef);e.setAttribute("lineDistance",new Ie(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qa.copy(n.boundingSphere),qa.applyMatrix4(s),qa.radius+=r,e.ray.intersectsSphere(qa)===!1)return;tf.copy(s).invert(),al.copy(e.ray).applyMatrix4(tf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new A,h=new A,u=new A,d=new A,f=this.isLineSegments?2:1,m=n.index,g=n.attributes.position;if(m!==null){let p=Math.max(0,a.start),x=Math.min(m.count,a.start+a.count);for(let _=p,v=x-1;_<v;_+=f){let w=m.getX(_),M=m.getX(_+1);if(l.fromBufferAttribute(g,w),h.fromBufferAttribute(g,M),al.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),x=Math.min(g.count,a.start+a.count);for(let _=p,v=x-1;_<v;_+=f){if(l.fromBufferAttribute(g,_),h.fromBufferAttribute(g,_+1),al.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let M=e.ray.origin.distanceTo(d);M<e.near||M>e.far||t.push({distance:M,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},nf=new A,sf=new A,_o=class extends ar{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)nf.fromBufferAttribute(t,s),sf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+nf.distanceTo(sf);e.setAttribute("lineDistance",new Ie(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},xo=class extends ar{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Qr=class extends En{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},rf=new Xe,Nl=new Mi,ja=new Mn,Ya=new A,yo=class extends Lt{constructor(e=new dt,t=new Qr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere),ja.applyMatrix4(s),ja.radius+=r,e.ray.intersectsSphere(ja)===!1)return;rf.copy(s).invert(),Nl.copy(e.ray).applyMatrix4(rf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let m=d,b=f;m<b;m++){let g=l.getX(m);Ya.fromBufferAttribute(u,g),af(Ya,g,c,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,b=f;m<b;m++)Ya.fromBufferAttribute(u,m),af(Ya,m,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function af(i,e,t,n,s,r,a){let o=Nl.distanceSqToPoint(i);if(o<t){let c=new A;Nl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}var vo=class extends $t{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Nn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new re:new A);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new A,s=[],r=[],a=[],o=new A,c=new Xe;for(let f=0;f<=e;f++){let m=f/e;s[f]=this.getTangentAt(m,new A)}r[0]=new A,a[0]=new A;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(zt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(zt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},$r=class extends Nn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t){let n=t||new re,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ul=class extends $r{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function lh(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Ka=new A,ol=new lh,cl=new lh,ll=new lh,oi=class extends Nn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new A){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Ka.subVectors(s[0],s[1]).add(s[0]),l=Ka);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ka.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ka),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),f),b=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);b<1e-4&&(b=1),m<1e-4&&(m=b),g<1e-4&&(g=b),ol.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,b,g),cl.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,b,g),ll.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,b,g)}else this.curveType==="catmullrom"&&(ol.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),cl.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),ll.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(ol.calc(c),cl.calc(c),ll.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new A().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function of(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function hx(i,e){let t=1-i;return t*t*e}function ux(i,e){return 2*(1-i)*i*e}function dx(i,e){return i*i*e}function kr(i,e,t,n){return hx(i,e)+ux(i,t)+dx(i,n)}function fx(i,e){let t=1-i;return t*t*t*e}function px(i,e){let t=1-i;return 3*t*t*i*e}function mx(i,e){return 3*(1-i)*i*i*e}function gx(i,e){return i*i*i*e}function Br(i,e,t,n,s){return fx(i,e)+px(i,t)+mx(i,n)+gx(i,s)}var Mo=class extends Nn{constructor(e=new re,t=new re,n=new re,s=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new re){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Br(e,s.x,r.x,a.x,o.x),Br(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ol=class extends Nn{constructor(e=new A,t=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new A){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Br(e,s.x,r.x,a.x,o.x),Br(e,s.y,r.y,a.y,o.y),Br(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Eo=class extends Nn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fl=class extends Nn{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},So=class extends Nn{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(kr(e,s.x,r.x,a.x),kr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wo=class extends Nn{constructor(e=new A,t=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(kr(e,s.x,r.x,a.x),kr(e,s.y,r.y,a.y),kr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},To=class extends Nn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(of(o,c.x,l.x,h.x,u.x),of(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new re().fromArray(s))}return this}},Hl=Object.freeze({__proto__:null,ArcCurve:Ul,CatmullRomCurve3:oi,CubicBezierCurve:Mo,CubicBezierCurve3:Ol,EllipseCurve:$r,LineCurve:Eo,LineCurve3:Fl,QuadraticBezierCurve:So,QuadraticBezierCurve3:wo,SplineCurve:To}),kl=class extends Nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Hl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Hl[s.type]().fromJSON(s))}return this}},Ao=class extends kl{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Eo(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new So(this.currentPoint.clone(),new re(e,t),new re(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Mo(this.currentPoint.clone(),new re(e,t),new re(n,s),new re(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new To(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let l=new $r(e,t,n,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ea=class i extends dt{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=zt(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/t,u=new A,d=new re,f=new A,m=new A,b=new A,g=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:g=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-g,f.z=p*0,b.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(b.x,b.y,b.z);break;default:g=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=b.x,f.y+=b.y,f.z+=b.z,f.normalize(),c.push(f.x,f.y,f.z),b.copy(m)}for(let x=0;x<=t;x++){let _=n+x*h*s,v=Math.sin(_),w=Math.cos(_);for(let M=0;M<=e.length-1;M++){u.x=e[M].x*v,u.y=e[M].y,u.z=e[M].x*w,a.push(u.x,u.y,u.z),d.x=x/t,d.y=M/(e.length-1),o.push(d.x,d.y);let S=c[3*M+0]*v,R=c[3*M+1],y=c[3*M+0]*w;l.push(S,R,y)}}for(let x=0;x<t;x++)for(let _=0;_<e.length-1;_++){let v=_+x*e.length,w=v,M=v+e.length,S=v+e.length+1,R=v+1;r.push(w,M,R),r.push(S,R,M)}this.setIndex(r),this.setAttribute("position",new Ie(a,3)),this.setAttribute("uv",new Ie(o,2)),this.setAttribute("normal",new Ie(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var or=class i extends dt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new A,h=new re;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ie(a,3)),this.setAttribute("normal",new Ie(o,3)),this.setAttribute("uv",new Ie(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ft=class i extends dt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,b=[],g=n/2,p=0;x(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Ie(u,3)),this.setAttribute("normal",new Ie(d,3)),this.setAttribute("uv",new Ie(f,2));function x(){let v=new A,w=new A,M=0,S=(t-e)/n;for(let R=0;R<=r;R++){let y=[],E=R/r,I=E*(t-e)+e;for(let O=0;O<=s;O++){let k=O/s,L=k*c+o,U=Math.sin(L),D=Math.cos(L);w.x=I*U,w.y=-E*n+g,w.z=I*D,u.push(w.x,w.y,w.z),v.set(U,S,D).normalize(),d.push(v.x,v.y,v.z),f.push(k,1-E),y.push(m++)}b.push(y)}for(let R=0;R<s;R++)for(let y=0;y<r;y++){let E=b[y][R],I=b[y+1][R],O=b[y+1][R+1],k=b[y][R+1];h.push(E,I,k),h.push(I,O,k),M+=6}l.addGroup(p,M,0),p+=M}function _(v){let w=m,M=new re,S=new A,R=0,y=v===!0?e:t,E=v===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,g*E,0),d.push(0,E,0),f.push(.5,.5),m++;let I=m;for(let O=0;O<=s;O++){let L=O/s*c+o,U=Math.cos(L),D=Math.sin(L);S.x=y*D,S.y=g*E,S.z=y*U,u.push(S.x,S.y,S.z),d.push(0,E,0),M.x=U*.5+.5,M.y=D*.5*E+.5,f.push(M.x,M.y),m++}for(let O=0;O<s;O++){let k=w+O,L=I+O;v===!0?h.push(L,L+1,k):h.push(L+1,L,k),R+=3}l.addGroup(p,R,v===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ms=class i extends ft{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Bl=class i extends dt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new Ie(r,3)),this.setAttribute("normal",new Ie(r.slice(),3)),this.setAttribute("uv",new Ie(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let _=new A,v=new A,w=new A;for(let M=0;M<t.length;M+=3)f(t[M+0],_),f(t[M+1],v),f(t[M+2],w),c(_,v,w,x)}function c(x,_,v,w){let M=w+1,S=[];for(let R=0;R<=M;R++){S[R]=[];let y=x.clone().lerp(v,R/M),E=_.clone().lerp(v,R/M),I=M-R;for(let O=0;O<=I;O++)O===0&&R===M?S[R][O]=y:S[R][O]=y.clone().lerp(E,O/I)}for(let R=0;R<M;R++)for(let y=0;y<2*(M-R)-1;y++){let E=Math.floor(y/2);y%2===0?(d(S[R][E+1]),d(S[R+1][E]),d(S[R][E])):(d(S[R][E+1]),d(S[R+1][E+1]),d(S[R+1][E]))}}function l(x){let _=new A;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(x),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function h(){let x=new A;for(let _=0;_<r.length;_+=3){x.x=r[_+0],x.y=r[_+1],x.z=r[_+2];let v=g(x)/2/Math.PI+.5,w=p(x)/Math.PI+.5;a.push(v,1-w)}m(),u()}function u(){for(let x=0;x<a.length;x+=6){let _=a[x+0],v=a[x+2],w=a[x+4],M=Math.max(_,v,w),S=Math.min(_,v,w);M>.9&&S<.1&&(_<.2&&(a[x+0]+=1),v<.2&&(a[x+2]+=1),w<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,_){let v=x*3;_.x=e[v+0],_.y=e[v+1],_.z=e[v+2]}function m(){let x=new A,_=new A,v=new A,w=new A,M=new re,S=new re,R=new re;for(let y=0,E=0;y<r.length;y+=9,E+=6){x.set(r[y+0],r[y+1],r[y+2]),_.set(r[y+3],r[y+4],r[y+5]),v.set(r[y+6],r[y+7],r[y+8]),M.set(a[E+0],a[E+1]),S.set(a[E+2],a[E+3]),R.set(a[E+4],a[E+5]),w.copy(x).add(_).add(v).divideScalar(3);let I=g(w);b(M,E+0,x,I),b(S,E+2,_,I),b(R,E+4,v,I)}}function b(x,_,v,w){w<0&&x.x===1&&(a[_]=x.x-1),v.x===0&&v.z===0&&(a[_]=w/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var cr=class extends Ao{constructor(e){super(e),this.uuid=Dn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ao().fromJSON(s))}return this}},bx={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Bf(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,d,f;if(n&&(r=Mx(i,e,r,t)),i.length>80*t){o=l=i[0],c=h=i[1];for(let m=t;m<s;m+=t)u=i[m],d=i[m+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-o,h-c),f=f!==0?32767/f:0}return ta(r,a,t,o,c,f,0),a}};function Bf(i,e,t,n,s){let r,a;if(s===Dx(i,e,t,n)>0)for(r=e;r<t;r+=n)a=cf(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=cf(r,i[r],i[r+1],a);return a&&Bo(a,a.next)&&(ia(a),a=a.next),a}function gs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Bo(t,t.next)||Nt(t.prev,t,t.next)===0)){if(ia(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ta(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Ax(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?xx(i,n,s,r):_x(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),ia(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=yx(gs(i),e,t),ta(i,e,t,n,s,r,2)):a===2&&vx(i,e,t,n,s,r):ta(gs(i),e,t,n,s,r,1);break}}}function _x(i){let e=i.prev,t=i,n=i.next;if(Nt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,d=s>r?s>a?s:a:r>a?r:a,f=o>c?o>l?o:l:c>l?c:l,m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&qs(s,o,r,c,a,l,m.x,m.y)&&Nt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function xx(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Nt(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,d=a.y,f=o<c?o<l?o:l:c<l?c:l,m=h<u?h<d?h:d:u<d?u:d,b=o>c?o>l?o:l:c>l?c:l,g=h>u?h>d?h:d:u>d?u:d,p=zl(f,m,e,t,n),x=zl(b,g,e,t,n),_=i.prevZ,v=i.nextZ;for(;_&&_.z>=p&&v&&v.z<=x;){if(_.x>=f&&_.x<=b&&_.y>=m&&_.y<=g&&_!==s&&_!==a&&qs(o,h,c,u,l,d,_.x,_.y)&&Nt(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=f&&v.x<=b&&v.y>=m&&v.y<=g&&v!==s&&v!==a&&qs(o,h,c,u,l,d,v.x,v.y)&&Nt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=b&&_.y>=m&&_.y<=g&&_!==s&&_!==a&&qs(o,h,c,u,l,d,_.x,_.y)&&Nt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=x;){if(v.x>=f&&v.x<=b&&v.y>=m&&v.y<=g&&v!==s&&v!==a&&qs(o,h,c,u,l,d,v.x,v.y)&&Nt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function yx(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Bo(s,r)&&zf(s,n,n.next,r)&&na(s,r)&&na(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),ia(n),ia(n.next),n=i=r),n=n.next}while(n!==i);return gs(n)}function vx(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Px(a,o)){let c=Gf(a,o);a=gs(a,a.next),c=gs(c,c.next),ta(a,e,t,n,s,r,0),ta(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Mx(i,e,t,n){let s=[],r,a,o,c,l;for(r=0,a=e.length;r<a;r++)o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=Bf(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Cx(l));for(s.sort(Ex),r=0;r<s.length;r++)t=Sx(s[r],t);return t}function Ex(i,e){return i.x-e.x}function Sx(i,e){let t=wx(i,e);if(!t)return e;let n=Gf(t,i);return gs(n,n.next),gs(t,t.next)}function wx(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,c=s.x,l=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&qs(a<l?r:n,a,c,l,a<l?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),na(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&Tx(s,t)))&&(s=t,h=u)),t=t.next;while(t!==o);return s}function Tx(i,e){return Nt(i.prev,i,e.prev)<0&&Nt(e.next,i,i.next)<0}function Ax(i,e,t,n){let s=i;do s.z===0&&(s.z=zl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Rx(s)}function Rx(i){let e,t,n,s,r,a,o,c,l=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(a>1);return i}function zl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Cx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function qs(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Px(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Lx(i,e)&&(na(i,e)&&na(e,i)&&Ix(i,e)&&(Nt(i.prev,i,e.prev)||Nt(i,e.prev,e))||Bo(i,e)&&Nt(i.prev,i,i.next)>0&&Nt(e.prev,e,e.next)>0)}function Nt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Bo(i,e){return i.x===e.x&&i.y===e.y}function zf(i,e,t,n){let s=Ja(Nt(i,e,t)),r=Ja(Nt(i,e,n)),a=Ja(Nt(t,n,i)),o=Ja(Nt(t,n,e));return!!(s!==r&&a!==o||s===0&&Za(i,t,e)||r===0&&Za(i,n,e)||a===0&&Za(t,i,n)||o===0&&Za(t,e,n))}function Za(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ja(i){return i>0?1:i<0?-1:0}function Lx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&zf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function na(i,e){return Nt(i.prev,i,i.next)<0?Nt(i,e,i.next)>=0&&Nt(i,i.prev,e)>=0:Nt(i,e,i.prev)<0||Nt(i,i.next,e)<0}function Ix(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Gf(i,e){let t=new Gl(i.i,i.x,i.y),n=new Gl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function cf(i,e,t,n){let s=new Gl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ia(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Gl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Dx(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var jn=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];lf(e),hf(n,e);let a=e.length;t.forEach(lf);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,hf(n,t[c]);let o=bx.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function lf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function hf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var lr=class i extends Bl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Ro=class i extends dt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],u=e,d=(t-e)/s,f=new A,m=new re;for(let b=0;b<=s;b++){for(let g=0;g<=n;g++){let p=r+g/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let b=0;b<s;b++){let g=b*(n+1);for(let p=0;p<n;p++){let x=p+g,_=x,v=x+n+1,w=x+n+2,M=x+1;o.push(_,v,M),o.push(v,w,M)}}this.setIndex(o),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(l,3)),this.setAttribute("uv",new Ie(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},sa=class i extends dt{constructor(e=new cr([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Ie(s,3)),this.setAttribute("normal",new Ie(r,3)),this.setAttribute("uv",new Ie(a,2));function l(h){let u=s.length/3,d=h.extractPoints(t),f=d.shape,m=d.holes;jn.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){let x=m[g];jn.isClockWise(x)===!0&&(m[g]=x.reverse())}let b=jn.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){let x=m[g];f=f.concat(x)}for(let g=0,p=f.length;g<p;g++){let x=f[g];s.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let g=0,p=b.length;g<p;g++){let x=b[g],_=x[0]+u,v=x[1]+u,w=x[2]+u;n.push(_,v,w),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Nx(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function Nx(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var ci=class i extends dt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new A,d=new A,f=[],m=[],b=[],g=[];for(let p=0;p<=n;p++){let x=[],_=p/n,v=0;p===0&&a===0?v=.5/t:p===n&&c===Math.PI&&(v=-.5/t);for(let w=0;w<=t;w++){let M=w/t;u.x=-e*Math.cos(s+M*r)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(s+M*r)*Math.sin(a+_*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),b.push(d.x,d.y,d.z),g.push(M+v,1-_),x.push(l++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){let _=h[p][x+1],v=h[p][x],w=h[p+1][x],M=h[p+1][x+1];(p!==0||a>0)&&f.push(_,v,M),(p!==n-1||c<Math.PI)&&f.push(v,w,M)}this.setIndex(f),this.setAttribute("position",new Ie(m,3)),this.setAttribute("normal",new Ie(b,3)),this.setAttribute("uv",new Ie(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ra=class i extends dt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new A,u=new A,d=new A;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){let b=m/s*r,g=f/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(b),u.y=(e+t*Math.cos(g))*Math.sin(b),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(b),h.y=e*Math.sin(b),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){let b=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,x=(s+1)*f+m;a.push(b,g,x),a.push(g,p,x)}this.setIndex(a),this.setAttribute("position",new Ie(o,3)),this.setAttribute("normal",new Ie(c,3)),this.setAttribute("uv",new Ie(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Si=class i extends dt{constructor(e=new wo(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new A,c=new A,l=new re,h=new A,u=[],d=[],f=[],m=[];b(),this.setIndex(m),this.setAttribute("position",new Ie(u,3)),this.setAttribute("normal",new Ie(d,3)),this.setAttribute("uv",new Ie(f,2));function b(){for(let _=0;_<t;_++)g(_);g(r===!1?t:0),x(),p()}function g(_){h=e.getPointAt(_/t,h);let v=a.normals[_],w=a.binormals[_];for(let M=0;M<=s;M++){let S=M/s*Math.PI*2,R=Math.sin(S),y=-Math.cos(S);c.x=y*v.x+R*w.x,c.y=y*v.y+R*w.y,c.z=y*v.z+R*w.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}function p(){for(let _=1;_<=t;_++)for(let v=1;v<=s;v++){let w=(s+1)*(_-1)+(v-1),M=(s+1)*_+(v-1),S=(s+1)*_+v,R=(s+1)*(_-1)+v;m.push(w,M,R),m.push(M,S,R)}}function x(){for(let _=0;_<=t;_++)for(let v=0;v<=s;v++)l.x=_/t,l.y=v/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Hl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var ee=class extends En{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rf,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},fn=class extends ee{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Qa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ux(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ox(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function uf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function Vf(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Vi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Vl=class extends Vi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nd,endingEnd:nd}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case id:r=e,o=2*t-n;break;case sd:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case id:a=e,c=2*n-t;break;case sd:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),b=m*m,g=b*m,p=-d*g+2*d*b-d*m,x=(1+d)*g+(-1.5-2*d)*b+(-.5+d)*m+1,_=(-1-f)*g+(1.5+f)*b+.5*m,v=f*g-f*b;for(let w=0;w!==o;++w)r[w]=p*a[h+w]+x*a[l+w]+_*a[c+w]+v*a[u+w];return r}},Wl=class extends Vi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},Xl=class extends Vi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Un=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qa(t,this.TimeBufferType),this.values=Qa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Qa(e.times,Array),values:Qa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case $s:t=this.InterpolantFactoryMethodDiscrete;break;case fs:t=this.InterpolantFactoryMethodLinear;break;case Uc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $s;case this.InterpolantFactoryMethodLinear:return fs;case this.InterpolantFactoryMethodSmooth:return Uc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Ux(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Uc,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let b=t[u+m];if(b!==t[d+m]||b!==t[f+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=fs;var Wi=class extends Un{};Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=$s;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Co=class extends Un{};Co.prototype.ValueTypeName="color";var wi=class extends Un{};wi.prototype.ValueTypeName="number";var ql=class extends Vi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)Qt.slerpFlat(r,0,a,l-o,a,l,c);return r}},li=class extends Un{InterpolantFactoryMethodLinear(e){return new ql(this.times,this.values,this.getValueSize(),e)}};li.prototype.ValueTypeName="quaternion";li.prototype.DefaultInterpolation=fs;li.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends Un{};Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=$s;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ti=class extends Un{};Ti.prototype.ValueTypeName="vector";var Po=class{constructor(e,t=-1,n,s=Xm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Dn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Hx(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Un.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=Ox(c);c=uf(c,1,h),l=uf(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new wi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,m,b){if(f.length!==0){let g=[],p=[];Vf(f,g,p,m),g.length!==0&&b.push(new u(d,g,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let b=0;b<d[m].morphTargets.length;b++)f[d[m].morphTargets[b]]=-1;for(let b in f){let g=[],p=[];for(let x=0;x!==d[m].morphTargets.length;++x){let _=d[m];g.push(_.time),p.push(_.morphTarget===b?1:0)}s.push(new wi(".morphTargetInfluence["+b+"]",g,p))}c=f.length*a}else{let f=".bones["+t[u].name+"]";n(Ti,f+".position",d,"pos",s),n(li,f+".quaternion",d,"rot",s),n(Ti,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Fx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return wi;case"vector":case"vector2":case"vector3":case"vector4":return Ti;case"color":return Co;case"quaternion":return li;case"bool":case"boolean":return Wi;case"string":return Xi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Hx(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Fx(i.type);if(i.times===void 0){let t=[],n=[];Vf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var ki={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},jl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},kx=new jl,Ai=class{constructor(e){this.manager=e!==void 0?e:kx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ai.DEFAULT_MATERIAL_NAME="__DEFAULT";var bi={},Yl=class extends Error{constructor(e,t){super(e),this.response=t}},aa=class extends Ai{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ki.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(bi[e]!==void 0){bi[e].push({onLoad:t,onProgress:n,onError:s});return}bi[e]=[],bi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=bi[e],u=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=d?parseInt(d):0,m=f!==0,b=0,g=new ReadableStream({start(p){x();function x(){u.read().then(({done:_,value:v})=>{if(_)p.close();else{b+=v.byteLength;let w=new ProgressEvent("progress",{lengthComputable:m,loaded:b,total:f});for(let M=0,S=h.length;M<S;M++){let R=h[M];R.onProgress&&R.onProgress(w)}p.enqueue(v),x()}})}}});return new Response(g)}else throw new Yl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{ki.add(e,l);let h=bi[e];delete bi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=bi[e];if(h===void 0)throw this.manager.itemError(e),l;delete bi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Kl=class extends Ai{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ki.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Vr("img");function c(){h(),ki.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var bs=class extends Ai{constructor(e){super(e)}load(e,t,n,s){let r=new $t,a=new Kl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},hr=class extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Lo=class extends hr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},hl=new Xe,df=new A,ff=new A,oa=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xr,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;df.setFromMatrixPosition(e.matrixWorld),t.position.copy(df),ff.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ff),t.updateMatrixWorld(),hl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Zl=class extends oa{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=er*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Io=class extends hr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Zl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},pf=new Xe,Dr=new A,ul=new A,Jl=class extends oa{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new re(4,2),this._viewportCount=6,this._viewports=[new wt(2,1,1,1),new wt(0,1,1,1),new wt(3,1,1,1),new wt(1,1,1,1),new wt(3,0,1,1),new wt(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Dr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Dr),ul.copy(n.position),ul.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ul),n.updateMatrixWorld(),s.makeTranslation(-Dr.x,-Dr.y,-Dr.z),pf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pf)}},ur=class extends hr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Jl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ql=class extends oa{constructor(){super(new ir(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},dr=class extends hr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new Ql}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var qi=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Do=class extends Ai{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ki.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ki.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),ki.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ki.add(e,c),r.manager.itemStart(e)}};var hh="\\[\\]\\.:\\/",Bx=new RegExp("["+hh+"]","g"),uh="[^"+hh+"]",zx="[^"+hh.replace("\\.","")+"]",Gx=/((?:WC+[\/:])*)/.source.replace("WC",uh),Vx=/(WCOD+)?/.source.replace("WCOD",zx),Wx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uh),Xx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uh),qx=new RegExp("^"+Gx+Vx+Wx+Xx+"$"),jx=["material","materials","bones","map"],$l=class{constructor(e,t,n){let s=n||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ct=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Bx,"")}static parseTrackName(e){let t=qx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);jx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=$l;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rv=new Float32Array(1);var No=class{constructor(e,t,n=0,s=1/0){this.ray=new Mi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Wr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return eh(e,this,n,t),n.sort(mf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)eh(e[s],this,n,t);return n.sort(mf),n}};function mf(i,e){return i.distance-e.distance}function eh(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)eh(s[r],e,t,!0)}}var ca=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(zt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Wf={type:"change"},dh={type:"start"},Xf={type:"end"},zo=new Mi,qf=new qn,Kx=Math.cos(70*Ho.DEG2RAD),Go=class extends ai{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:en.ROTATE,MIDDLE:en.DOLLY,RIGHT:en.PAN},this.touches={ONE:pn.ROTATE,TWO:pn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(N){N.addEventListener("keydown",se),this._domElementKeyEvents=N},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",se),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Wf),n.update(),r=s.NONE},this.update=(function(){let N=new A,oe=new Qt().setFromUnitVectors(e.up,new A(0,1,0)),_e=oe.clone().invert(),he=new A,Ne=new Qt,tt=new A,ut=2*Math.PI;return function(be=null){let H=n.object.position;N.copy(H).sub(n.target),N.applyQuaternion(oe),o.setFromVector3(N),n.autoRotate&&r===s.NONE&&I(y(be)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let fe=n.minAzimuthAngle,pe=n.maxAzimuthAngle;isFinite(fe)&&isFinite(pe)&&(fe<-Math.PI?fe+=ut:fe>Math.PI&&(fe-=ut),pe<-Math.PI?pe+=ut:pe>Math.PI&&(pe-=ut),fe<=pe?o.theta=Math.max(fe,Math.min(pe,o.theta)):o.theta=o.theta>(fe+pe)/2?Math.max(fe,o.theta):Math.min(pe,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&M||n.object.isOrthographicCamera?o.radius=V(o.radius):o.radius=V(o.radius*l),N.setFromSpherical(o),N.applyQuaternion(_e),H.copy(n.target).add(N),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0));let ze=!1;if(n.zoomToCursor&&M){let Fe=null;if(n.object.isPerspectiveCamera){let bt=N.length();Fe=V(bt*l);let xt=bt-Fe;n.object.position.addScaledVector(v,xt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let bt=new A(w.x,w.y,0);bt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),ze=!0;let xt=new A(w.x,w.y,0);xt.unproject(n.object),n.object.position.sub(xt).add(bt),n.object.updateMatrixWorld(),Fe=N.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Fe!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Fe).add(n.object.position):(zo.origin.copy(n.object.position),zo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(zo.direction))<Kx?e.lookAt(n.target):(qf.setFromNormalAndCoplanarPoint(n.object.up,n.target),zo.intersectPlane(qf,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),ze=!0);return l=1,M=!1,ze||he.distanceToSquared(n.object.position)>a||8*(1-Ne.dot(n.object.quaternion))>a||tt.distanceToSquared(n.target)>0?(n.dispatchEvent(Wf),he.copy(n.object.position),Ne.copy(n.object.quaternion),tt.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ae),n.domElement.removeEventListener("pointerdown",Be),n.domElement.removeEventListener("pointercancel",T),n.domElement.removeEventListener("wheel",ae),n.domElement.removeEventListener("pointermove",P),n.domElement.removeEventListener("pointerup",T),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",se),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,a=1e-6,o=new ca,c=new ca,l=1,h=new A,u=new re,d=new re,f=new re,m=new re,b=new re,g=new re,p=new re,x=new re,_=new re,v=new A,w=new re,M=!1,S=[],R={};function y(N){return N!==null?2*Math.PI/60*n.autoRotateSpeed*N:2*Math.PI/60/60*n.autoRotateSpeed}function E(N){let oe=Math.abs(N)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*oe)}function I(N){c.theta-=N}function O(N){c.phi-=N}let k=(function(){let N=new A;return function(_e,he){N.setFromMatrixColumn(he,0),N.multiplyScalar(-_e),h.add(N)}})(),L=(function(){let N=new A;return function(_e,he){n.screenSpacePanning===!0?N.setFromMatrixColumn(he,1):(N.setFromMatrixColumn(he,0),N.crossVectors(n.object.up,N)),N.multiplyScalar(_e),h.add(N)}})(),U=(function(){let N=new A;return function(_e,he){let Ne=n.domElement;if(n.object.isPerspectiveCamera){let tt=n.object.position;N.copy(tt).sub(n.target);let ut=N.length();ut*=Math.tan(n.object.fov/2*Math.PI/180),k(2*_e*ut/Ne.clientHeight,n.object.matrix),L(2*he*ut/Ne.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(k(_e*(n.object.right-n.object.left)/n.object.zoom/Ne.clientWidth,n.object.matrix),L(he*(n.object.top-n.object.bottom)/n.object.zoom/Ne.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function D(N){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(N){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function z(N,oe){if(!n.zoomToCursor)return;M=!0;let _e=n.domElement.getBoundingClientRect(),he=N-_e.left,Ne=oe-_e.top,tt=_e.width,ut=_e.height;w.x=he/tt*2-1,w.y=-(Ne/ut)*2+1,v.set(w.x,w.y,1).unproject(n.object).sub(n.object.position).normalize()}function V(N){return Math.max(n.minDistance,Math.min(n.maxDistance,N))}function Q(N){u.set(N.clientX,N.clientY)}function te(N){z(N.clientX,N.clientX),p.set(N.clientX,N.clientY)}function ie(N){m.set(N.clientX,N.clientY)}function Z(N){d.set(N.clientX,N.clientY),f.subVectors(d,u).multiplyScalar(n.rotateSpeed);let oe=n.domElement;I(2*Math.PI*f.x/oe.clientHeight),O(2*Math.PI*f.y/oe.clientHeight),u.copy(d),n.update()}function ne(N){x.set(N.clientX,N.clientY),_.subVectors(x,p),_.y>0?D(E(_.y)):_.y<0&&G(E(_.y)),p.copy(x),n.update()}function ue(N){b.set(N.clientX,N.clientY),g.subVectors(b,m).multiplyScalar(n.panSpeed),U(g.x,g.y),m.copy(b),n.update()}function we(N){z(N.clientX,N.clientY),N.deltaY<0?G(E(N.deltaY)):N.deltaY>0&&D(E(N.deltaY)),n.update()}function ve(N){let oe=!1;switch(N.code){case n.keys.UP:N.ctrlKey||N.metaKey||N.shiftKey?O(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(0,n.keyPanSpeed),oe=!0;break;case n.keys.BOTTOM:N.ctrlKey||N.metaKey||N.shiftKey?O(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(0,-n.keyPanSpeed),oe=!0;break;case n.keys.LEFT:N.ctrlKey||N.metaKey||N.shiftKey?I(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(n.keyPanSpeed,0),oe=!0;break;case n.keys.RIGHT:N.ctrlKey||N.metaKey||N.shiftKey?I(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(-n.keyPanSpeed,0),oe=!0;break}oe&&(N.preventDefault(),n.update())}function De(N){if(S.length===1)u.set(N.pageX,N.pageY);else{let oe=ht(N),_e=.5*(N.pageX+oe.x),he=.5*(N.pageY+oe.y);u.set(_e,he)}}function ke(N){if(S.length===1)m.set(N.pageX,N.pageY);else{let oe=ht(N),_e=.5*(N.pageX+oe.x),he=.5*(N.pageY+oe.y);m.set(_e,he)}}function de(N){let oe=ht(N),_e=N.pageX-oe.x,he=N.pageY-oe.y,Ne=Math.sqrt(_e*_e+he*he);p.set(0,Ne)}function ge(N){n.enableZoom&&de(N),n.enablePan&&ke(N)}function B(N){n.enableZoom&&de(N),n.enableRotate&&De(N)}function Ge(N){if(S.length==1)d.set(N.pageX,N.pageY);else{let _e=ht(N),he=.5*(N.pageX+_e.x),Ne=.5*(N.pageY+_e.y);d.set(he,Ne)}f.subVectors(d,u).multiplyScalar(n.rotateSpeed);let oe=n.domElement;I(2*Math.PI*f.x/oe.clientHeight),O(2*Math.PI*f.y/oe.clientHeight),u.copy(d)}function Ee(N){if(S.length===1)b.set(N.pageX,N.pageY);else{let oe=ht(N),_e=.5*(N.pageX+oe.x),he=.5*(N.pageY+oe.y);b.set(_e,he)}g.subVectors(b,m).multiplyScalar(n.panSpeed),U(g.x,g.y),m.copy(b)}function Oe(N){let oe=ht(N),_e=N.pageX-oe.x,he=N.pageY-oe.y,Ne=Math.sqrt(_e*_e+he*he);x.set(0,Ne),_.set(0,Math.pow(x.y/p.y,n.zoomSpeed)),D(_.y),p.copy(x);let tt=(N.pageX+oe.x)*.5,ut=(N.pageY+oe.y)*.5;z(tt,ut)}function Te(N){n.enableZoom&&Oe(N),n.enablePan&&Ee(N)}function et(N){n.enableZoom&&Oe(N),n.enableRotate&&Ge(N)}function Be(N){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(N.pointerId),n.domElement.addEventListener("pointermove",P),n.domElement.addEventListener("pointerup",T)),Ve(N),N.pointerType==="touch"?Le(N):Y(N))}function P(N){n.enabled!==!1&&(N.pointerType==="touch"?Me(N):le(N))}function T(N){Ye(N),S.length===0&&(n.domElement.releasePointerCapture(N.pointerId),n.domElement.removeEventListener("pointermove",P),n.domElement.removeEventListener("pointerup",T)),n.dispatchEvent(Xf),r=s.NONE}function Y(N){let oe;switch(N.button){case 0:oe=n.mouseButtons.LEFT;break;case 1:oe=n.mouseButtons.MIDDLE;break;case 2:oe=n.mouseButtons.RIGHT;break;default:oe=-1}switch(oe){case en.DOLLY:if(n.enableZoom===!1)return;te(N),r=s.DOLLY;break;case en.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enablePan===!1)return;ie(N),r=s.PAN}else{if(n.enableRotate===!1)return;Q(N),r=s.ROTATE}break;case en.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enableRotate===!1)return;Q(N),r=s.ROTATE}else{if(n.enablePan===!1)return;ie(N),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(dh)}function le(N){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;Z(N);break;case s.DOLLY:if(n.enableZoom===!1)return;ne(N);break;case s.PAN:if(n.enablePan===!1)return;ue(N);break}}function ae(N){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(N.preventDefault(),n.dispatchEvent(dh),we(N),n.dispatchEvent(Xf))}function se(N){n.enabled===!1||n.enablePan===!1||ve(N)}function Le(N){switch(ce(N),S.length){case 1:switch(n.touches.ONE){case pn.ROTATE:if(n.enableRotate===!1)return;De(N),r=s.TOUCH_ROTATE;break;case pn.PAN:if(n.enablePan===!1)return;ke(N),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case pn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ge(N),r=s.TOUCH_DOLLY_PAN;break;case pn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;B(N),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(dh)}function Me(N){switch(ce(N),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ge(N),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;Ee(N),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Te(N),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;et(N),n.update();break;default:r=s.NONE}}function Ae(N){n.enabled!==!1&&N.preventDefault()}function Ve(N){S.push(N.pointerId)}function Ye(N){delete R[N.pointerId];for(let oe=0;oe<S.length;oe++)if(S[oe]==N.pointerId){S.splice(oe,1);return}}function ce(N){let oe=R[N.pointerId];oe===void 0&&(oe=new re,R[N.pointerId]=oe),oe.set(N.pageX,N.pageY)}function ht(N){let oe=N.pointerId===S[0]?S[1]:S[0];return R[oe]}n.domElement.addEventListener("contextmenu",Ae),n.domElement.addEventListener("pointerdown",Be),n.domElement.addEventListener("pointercancel",T),n.domElement.addEventListener("wheel",ae,{passive:!1}),this.update()}};var Vo=class extends Go{constructor(e,t){super(e,t),this.screenSpacePanning=!1,this.mouseButtons={LEFT:en.PAN,MIDDLE:en.DOLLY,RIGHT:en.ROTATE},this.touches={ONE:pn.PAN,TWO:pn.DOLLY_ROTATE}}};var ha=new A;function On(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;ha.copy(e),ha[n]=0,ha.normalize();let l=.5*a/(a+o),h=1-ha.angleTo(i)/c;return Math.sign(ha[t])===1?h*l:o/(a+o)+l+l*(1-h)}var _s=class extends mt{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new A,c=new A,l=new A(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,m=new A,b=.5/s;for(let g=0,p=0;g<h.length;g+=3,p+=2)switch(o.fromArray(h,g),c.copy(o),c.x-=Math.sign(c.x)*b,c.y-=Math.sign(c.y)*b,c.z-=Math.sign(c.z)*b,c.normalize(),h[g+0]=l.x*Math.sign(o.x)+c.x*r,h[g+1]=l.y*Math.sign(o.y)+c.y*r,h[g+2]=l.z*Math.sign(o.z)+c.z*r,u[g+0]=c.x,u[g+1]=c.y,u[g+2]=c.z,Math.floor(g/f)){case 0:m.set(1,0,0),d[p+0]=On(m,c,"z","y",r,n),d[p+1]=1-On(m,c,"y","z",r,t);break;case 1:m.set(-1,0,0),d[p+0]=1-On(m,c,"z","y",r,n),d[p+1]=1-On(m,c,"y","z",r,t);break;case 2:m.set(0,1,0),d[p+0]=1-On(m,c,"x","z",r,e),d[p+1]=On(m,c,"z","x",r,n);break;case 3:m.set(0,-1,0),d[p+0]=1-On(m,c,"x","z",r,e),d[p+1]=1-On(m,c,"z","x",r,n);break;case 4:m.set(0,0,1),d[p+0]=1-On(m,c,"x","y",r,e),d[p+1]=1-On(m,c,"y","x",r,t);break;case 5:m.set(0,0,-1),d[p+0]=On(m,c,"x","y",r,e),d[p+1]=1-On(m,c,"y","x",r,t);break}}};function Wo(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new dt,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=jf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let b=0;b<a[h].length;++b)f.push(a[h][b][d]);let m=jf(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function jf(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let a=new e(r),o=0;for(let l=0;l<i.length;++l)a.set(i[l].array,o),o+=i[l].array.length;let c=new Mt(a,t,n);return s!==void 0&&(c.gpuType=s),c}function fh(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,a=0,o=Object.keys(i.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let x=0,_=o.length;x<_;x++){let v=o[x],w=i.attributes[v];c[v]=new Mt(new w.array.constructor(w.count*w.itemSize),w.itemSize,w.normalized);let M=i.morphAttributes[v];M&&(l[v]=new Mt(new M.array.constructor(M.count*M.itemSize),M.itemSize,M.normalized))}let f=e*.5,m=Math.log10(1/e),b=Math.pow(10,m),g=f*b;for(let x=0;x<r;x++){let _=n?n.getX(x):x,v="";for(let w=0,M=o.length;w<M;w++){let S=o[w],R=i.getAttribute(S),y=R.itemSize;for(let E=0;E<y;E++)v+=`${~~(R[u[E]](_)*b+g)},`}if(v in t)h.push(t[v]);else{for(let w=0,M=o.length;w<M;w++){let S=o[w],R=i.getAttribute(S),y=i.morphAttributes[S],E=R.itemSize,I=c[S],O=l[S];for(let k=0;k<E;k++){let L=u[k],U=d[k];if(I[U](a,R[L](_)),y)for(let D=0,G=y.length;D<G;D++)O[D][U](a,y[D][L](_))}}t[v]=a,h.push(a),a++}}let p=i.clone();for(let x in i.attributes){let _=c[x];if(p.setAttribute(x,new Mt(_.array.slice(0,a*_.itemSize),_.itemSize,_.normalized)),x in l)for(let v=0;v<l[x].length;v++){let w=l[x][v];p.morphAttributes[x][v]=new Mt(w.array.slice(0,a*w.itemSize),w.itemSize,w.normalized)}}return p.setIndex(h),p}function ph(i,e){if(e===Tf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===la||e===Oo){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===la)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Xo=class extends rr{constructor(e=null){super();let t=new mt;t.deleteAttribute("uv");let n=new ee({side:Gt}),s=new ee,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let a=new ur(16777215,r,28,2);a.position.set(.418,16.199,.3),this.add(a);let o=new q(t,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let c=new q(t,s);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);let l=new q(t,s);l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),this.add(l);let h=new q(t,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let u=new q(t,s);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let d=new q(t,s);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);let f=new q(t,s);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);let m=new q(t,pr(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);let b=new q(t,pr(50));b.position.set(-16.109,18.021,-8.207),b.scale.set(.1,2.425,2.751),this.add(b);let g=new q(t,pr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let p=new q(t,pr(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let x=new q(t,pr(20));x.position.set(3.235,11.486,-12.541),x.scale.set(2.5,2,.1),this.add(x);let _=new q(t,pr(100));_.position.set(0,20,0),_.scale.set(1,.1,1),this.add(_)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function pr(i){let e=new dn;return e.color.setScalar(i),e}var qo=class extends Lt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new re(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}},mr=new A,Yf=new Xe,Kf=new Xe,Zf=new A,Jf=new A,jo=class{constructor(e={}){let t=this,n,s,r,a,o={objects:new WeakMap},c=e.element!==void 0?e.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c,this.getSize=function(){return{width:n,height:s}},this.render=function(f,m){f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld(),m.parent===null&&m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),Yf.copy(m.matrixWorldInverse),Kf.multiplyMatrices(m.projectionMatrix,Yf),l(f,f,m),d(f)},this.setSize=function(f,m){n=f,s=m,r=n/2,a=s/2,c.style.width=f+"px",c.style.height=m+"px"};function l(f,m,b){if(f.isCSS2DObject){mr.setFromMatrixPosition(f.matrixWorld),mr.applyMatrix4(Kf);let g=f.visible===!0&&mr.z>=-1&&mr.z<=1&&f.layers.test(b.layers)===!0;if(f.element.style.display=g===!0?"":"none",g===!0){f.onBeforeRender(t,m,b);let x=f.element;x.style.transform="translate("+-100*f.center.x+"%,"+-100*f.center.y+"%)translate("+(mr.x*r+r)+"px,"+(-mr.y*a+a)+"px)",x.parentNode!==c&&c.appendChild(x),f.onAfterRender(t,m,b)}let p={distanceToCameraSquared:h(b,f)};o.objects.set(f,p)}for(let g=0,p=f.children.length;g<p;g++)l(f.children[g],m,b)}function h(f,m){return Zf.setFromMatrixPosition(f.matrixWorld),Jf.setFromMatrixPosition(m.matrixWorld),Zf.distanceToSquared(Jf)}function u(f){let m=[];return f.traverse(function(b){b.isCSS2DObject&&m.push(b)}),m}function d(f){let m=u(f).sort(function(g,p){if(g.renderOrder!==p.renderOrder)return p.renderOrder-g.renderOrder;let x=o.objects.get(g).distanceToCameraSquared,_=o.objects.get(p).distanceToCameraSquared;return x-_}),b=m.length;for(let g=0,p=m.length;g<p;g++)m[g].element.style.zIndex=b-g}}};var Yo=class extends Ai{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new vh(t)}),this.register(function(t){return new Ph(t)}),this.register(function(t){return new Lh(t)}),this.register(function(t){return new Ih(t)}),this.register(function(t){return new Eh(t)}),this.register(function(t){return new Sh(t)}),this.register(function(t){return new wh(t)}),this.register(function(t){return new Th(t)}),this.register(function(t){return new yh(t)}),this.register(function(t){return new Ah(t)}),this.register(function(t){return new Mh(t)}),this.register(function(t){return new Ch(t)}),this.register(function(t){return new Rh(t)}),this.register(function(t){return new _h(t)}),this.register(function(t){return new Dh(t)}),this.register(function(t){return new Nh(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=qi.extractUrlBase(e);a=qi.resolveURL(l,this.path)}else a=qi.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new aa(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===np){try{a[ot.KHR_BINARY_GLTF]=new Uh(e)}catch(u){s&&s(u);return}r=JSON.parse(a[ot.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Gh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case ot.KHR_MATERIALS_UNLIT:a[u]=new xh;break;case ot.KHR_DRACO_MESH_COMPRESSION:a[u]=new Oh(r,this.dracoLoader);break;case ot.KHR_TEXTURE_TRANSFORM:a[u]=new Fh;break;case ot.KHR_MESH_QUANTIZATION:a[u]=new Hh;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function Zx(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},_h=class{constructor(e){this.parser=e,this.name=ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Pe(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],qt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new dr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ur(h),l.distance=u;break;case"spot":l=new Io(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Yi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},xh=class{constructor(){this.name=ot.KHR_MATERIALS_UNLIT}getMaterialType(){return dn}extendParams(e,t,n){let s=[];e.color=new Pe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],qt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,At))}return Promise.all(s)}},yh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},vh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new re(o,o)}return Promise.all(r)}},Mh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Eh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Pe(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],qt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,At)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Sh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},wh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Pe().setRGB(o[0],o[1],o[2],qt),Promise.all(r)}},Th=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Ah=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Pe().setRGB(o[0],o[1],o[2],qt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,At)),Promise.all(r)}},Rh=class{constructor(e){this.parser=e,this.name=ot.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Ch=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},Ph=class{constructor(e){this.parser=e,this.name=ot.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Lh=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Ih=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Dh=class{constructor(e){this.name=ot.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},Nh=class{constructor(e){this.name=ot.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Fn.TRIANGLES&&l.mode!==Fn.TRIANGLE_STRIP&&l.mode!==Fn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let m of u){let b=new Xe,g=new A,p=new Qt,x=new A(1,1,1),_=new Ei(m.geometry,m.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&x.fromBufferAttribute(c.SCALE,v),_.setMatrixAt(v,b.compose(g,p,x));for(let v in c)if(v==="_COLOR_0"){let w=c[v];_.instanceColor=new ps(w.array,w.itemSize,w.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&m.geometry.setAttribute(v,c[v]);Lt.prototype.copy.call(_,m),this.parser.assignFinalMaterial(_),f.push(_)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},np="glTF",ua=12,Qf={JSON:1313821514,BIN:5130562},Uh=class{constructor(e){this.name=ot.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ua),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==np)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ua,r=new DataView(e,ua),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===Qf.JSON){let l=new Uint8Array(e,ua+a,o);this.content=n.decode(l)}else if(c===Qf.BIN){let l=ua+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Oh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ot.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=Bh[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Bh[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=gr[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let m in f.attributes){let b=f.attributes[m],g=c[m];g!==void 0&&(b.normalized=g)}u(f)},o,l,qt,d)})})}},Fh=class{constructor(){this.name=ot.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Hh=class{constructor(){this.name=ot.KHR_MESH_QUANTIZATION}},Ko=class extends Vi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,m=e*l,b=m-l,g=-2*f+3*d,p=f-d,x=1-g,_=p-d+u;for(let v=0;v!==o;v++){let w=a[b+v+o],M=a[b+v+c]*h,S=a[m+v+o],R=a[m+v]*h;r[v]=x*w+_*M+g*S+p*R}return r}},Jx=new Qt,kh=class extends Ko{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return Jx.fromArray(r).normalize().toArray(r),r}},Fn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},gr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},$f={9728:Wt,9729:un,9984:eo,9985:ih,9986:Nr,9987:ri},ep={33071:vn,33648:zr,10497:Yn},mh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Bh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ji={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Qx={CUBICSPLINE:void 0,LINEAR:fs,STEP:$s},gh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function $x(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ee({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:si})),i.DefaultMaterial}function xs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Yi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ey(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function ty(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ny(i){let e,t=i.extensions&&i.extensions[ot.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+bh(t.attributes):e=i.indices+":"+bh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+bh(i.targets[n]);return e}function bh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function zh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function iy(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var sy=new Xe,Gh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Zx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||s&&r<98?this.textureLoader=new bs(this.options.manager):this.textureLoader=new Do(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new aa(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return xs(r,o,s),Yi(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ot.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(qi.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=mh[s.type],o=gr[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new Mt(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=mh[s.type],l=gr[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,b,g;if(f&&f!==u){let p=Math.floor(d/f),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,_=t.cache.get(x);_||(b=new l(o,p*f,s.count*f/h),_=new Yr(b,f/h),t.cache.add(x,_)),g=new Kr(_,c,d%f/h,m)}else o===null?b=new l(s.count*c):b=new l(o,d,s.count*c),g=new Mt(b,c,m);if(s.sparse!==void 0){let p=mh.SCALAR,x=gr[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,w=new x(a[1],_,s.sparse.count*p),M=new l(a[2],v,s.sparse.count*c);o!==null&&(g=new Mt(g.array.slice(),g.itemSize,g.normalized));for(let S=0,R=w.length;S<R;S++){let y=w[S];if(g.setX(y,M[S*c]),c>=2&&g.setY(y,M[S*c+1]),c>=3&&g.setZ(y,M[S*c+2]),c>=4&&g.setW(y,M[S*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=$f[d.magFilter]||un,h.minFilter=$f[d.minFilter]||ri,h.wrapS=ep[d.wrapS]||Yn,h.wrapT=ep[d.wrapT]||Yn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(b){let g=new $t(b);g.needsUpdate=!0,d(g)}),t.load(qi.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),u.userData.mimeType=a.mimeType||iy(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[ot.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[ot.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[ot.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Qr,En.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Jr,En.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ee}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[ot.KHR_MATERIALS_UNLIT]){let u=s[ot.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Pe(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],qt),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,At)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=vt);let h=r.alphaMode||gh.OPAQUE;if(h===gh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===gh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==dn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new re(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==dn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==dn){let u=r.emissiveFactor;o.emissive=new Pe().setRGB(u[0],u[1],u[2],qt)}return r.emissiveTexture!==void 0&&a!==dn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,At)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Yi(u,r),t.associations.set(u,{materials:e}),r.extensions&&xs(s,u,r),u})}createUniqueName(e){let t=Ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return tp(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=ny(l),u=s[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[ot.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=tp(new dt,l,t),s[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?$x(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,m=h.length;f<m;f++){let b=h[f],g=a[f],p,x=l[f];if(g.mode===Fn.TRIANGLES||g.mode===Fn.TRIANGLE_STRIP||g.mode===Fn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new go(b,x):new q(b,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Fn.TRIANGLE_STRIP?p.geometry=ph(p.geometry,Oo):g.mode===Fn.TRIANGLE_FAN&&(p.geometry=ph(p.geometry,la));else if(g.mode===Fn.LINES)p=new _o(b,x);else if(g.mode===Fn.LINE_STRIP)p=new ar(b,x);else if(g.mode===Fn.LINE_LOOP)p=new xo(b,x);else if(g.mode===Fn.POINTS)p=new yo(b,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&ty(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Yi(p,r),g.extensions&&xs(s,p,g),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&xs(s,u[0],r),u[0];let d=new st;r.extensions&&xs(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Xt(Ho.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ir(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Yi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new Xe;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new bo(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],m=s.samplers[f.sampler],b=f.target,g=b.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,x=s.parameters!==void 0?s.parameters[m.output]:m.output;b.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),l.push(m),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],m=u[2],b=u[3],g=u[4],p=[];for(let x=0,_=d.length;x<_;x++){let v=d[x],w=f[x],M=m[x],S=b[x],R=g[x];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let y=n._createAnimationTracks(v,w,M,S,R);if(y)for(let E=0;E<y.length;E++)p.push(y[E])}return new Po(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,sy)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new Zr:l.length>1?h=new st:l.length===1?h=l[0]:h=new Lt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Yi(h,r),r.extensions&&xs(n,h,r),r.matrix!==void 0){let u=new Xe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new st;n.name&&(r.name=s.createUniqueName(n.name)),Yi(r,n),n.extensions&&xs(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof En||d instanceof $t)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];ji[r.path]===ji.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(ji[r.path]){case ji.weights:l=wi;break;case ji.rotation:l=li;break;case ji.position:case ji.scale:l=Ti;break;default:n.itemSize===1?l=wi:l=Ti;break}let h=s.interpolation!==void 0?Qx[s.interpolation]:fs,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let m=new l(c[d]+"."+ji[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=zh(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof li?kh:Ko;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function ry(i,e,t){let n=e.attributes,s=new gn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new A(c[0],c[1],c[2]),new A(l[0],l[1],l[2])),o.normalized){let h=zh(gr[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new A,c=new A;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let b=zh(gr[d.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new Mn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function tp(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=Bh[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return yt.workingColorSpace!==qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${yt.workingColorSpace}" not supported.`),Yi(i,e),ry(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?ey(i,e.targets,t):i})}var ip=(function(){"use strict";var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?e:i,r,a=WebAssembly.instantiate(o(s),{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var x=new Uint8Array(p.length),_=0;_<p.length;++_){var v=p.charCodeAt(_);x[_]=v>96?v-97:v>64?v-39:v+4}for(var w=0,_=0;_<p.length;++_)x[w++]=x[_]<60?n[x[_]]:(x[_]-60)*64+x[++_];return x.buffer.slice(0,w)}function c(p,x,_,v,w,M){var S=r.exports.sbrk,R=_+3&-4,y=S(R*v),E=S(w.length),I=new Uint8Array(r.exports.memory.buffer);I.set(w,E);var O=p(y,_,v,E,w.length);if(O==0&&M&&M(y,R,v),x.set(I.subarray(y,y+_*v)),S(y-S(0)),O!=0)throw new Error("Malformed buffer data: "+O)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var x={object:new Worker(p),pending:0,requests:{}};return x.object.onmessage=function(_){var v=_.data;x.pending-=v.count,x.requests[v.id][v.action](v.value),delete x.requests[v.id]},x}function m(p){for(var x="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(s))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+g.toString(),_=new Blob([x],{type:"text/javascript"}),v=URL.createObjectURL(_),w=0;w<p;++w)u[w]=f(v);URL.revokeObjectURL(v)}function b(p,x,_,v,w){for(var M=u[0],S=1;S<u.length;++S)u[S].pending<M.pending&&(M=u[S]);return new Promise(function(R,y){var E=new Uint8Array(_),I=d++;M.pending+=p,M.requests[I]={resolve:R,reject:y},M.object.postMessage({id:I,count:p,size:x,source:E,mode:v,filter:w},[E.buffer])})}function g(p){a.then(function(){var x=p.data;try{var _=new Uint8Array(x.count*x.size);c(r.exports[x.mode],_,x.count,x.size,x.source,r.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:_},[_.buffer])}catch(v){self.postMessage({id:x.id,count:x.count,action:"reject",value:v})}})}return{ready:a,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,x,_,v,w){c(r.exports.meshopt_decodeVertexBuffer,p,x,_,v,r.exports[l[w]])},decodeIndexBuffer:function(p,x,_,v){c(r.exports.meshopt_decodeIndexBuffer,p,x,_,v)},decodeIndexSequence:function(p,x,_,v){c(r.exports.meshopt_decodeIndexSequence,p,x,_,v)},decodeGltfBuffer:function(p,x,_,v,w,M){c(r.exports[h[w]],p,x,_,v,r.exports[l[M]])},decodeGltfBufferAsync:function(p,x,_,v,w){return u.length>0?b(p,x,_,h[v],l[w]):a.then(function(){var M=new Uint8Array(p*x);return c(r.exports[h[v]],M,p,x,_,r.exports[l[w]]),M})}}})();function vp(i,e){let t=new Yo().setMeshoptDecoder(ip);fetch(i+".json").then(n=>n.json()).then(n=>{let s=Uint8Array.from(atob(n.glb),r=>r.charCodeAt(0));t.parse(s.buffer,"",e,()=>{})}).catch(()=>{})}var nn={lot:[[1400,1686],[482,1686],[482,100],[1384.33,100],[1400,1686]],roofA:[[1311,700.47],[883.85,710],[880.64,644.31],[568.52,652.79],[563,368.37],[593.95,367.74],[595.24,367.72],[802.87,363.48],[875.05,362],[873.45,468.62],[1308.7,467.03],[1309.35,533.52],[1311,700.47]],roofB:[[568.48,652.83],[570.58,963.98],[1306.12,953.37],[1305.07,700.52],[881.28,710.05],[878.13,644.36],[568.48,652.83]],patio:[[1306.12,953.37],[1306.68,1107.32],[1023.4,1109],[1024.54,957.39],[1306.12,953.37]],awning:[[957.14,909.69],[956.54,965.41],[1027.63,963.12],[1028.14,908.68],[957.14,909.69]],awningC:[994.56,925.43,13.12],awningLow:[[1027.63,963.12],[956.54,965.41],[957.14,909.69],[956.73,947.86],[1027.58,946.02],[1027.63,963.12]],driveway:[[841.46,363.73],[598.94,369.43],[592,-97],[841,-97]],porch:[[966.76,369.45],[967.14,469.74],[874.96,470.08],[876.54,368.11],[966.76,369.45]],frontRock:[[1359.75,537.27],[1307.4,534.81],[1306.75,468.49],[874.96,470.08],[876.54,363.73],[804.93,365.21],[805,364.58],[841.45,363.73],[841,52],[868,62],[898,92],[924,128],[944,168],[958,214],[966,262],[971,304],[972.27,307.43],[972.17,316.13],[972.5,328.64],[973.65,343.32],[976.03,358.53],[980.05,372.65],[986.09,384.03],[994.58,391.03],[1016.28,392.74],[1057.5,391.8],[1111.89,391.89],[1173.12,396.72],[1234.86,409.98],[1290.77,435.36],[1334.51,476.56],[1359.75,537.27]],trees:[[1249.39,149.05,54.05],[1201.45,196.43,44.99],[1189.9,141.33,31.8],[1245.93,203.33,34.71],[1370.34,541.88,38.64],[1336.05,575.75,32.16],[1327.8,536.36,22.75],[1367.85,580.7,24.82]],basalt:[[1394.6,1681.46],[1389.61,1106.37],[1027.36,1108.7],[1027.5,1051.5],[1027.5,957.5],[574.54,970.78],[573.18,765.33],[485.87,765.33],[485.87,1049.75],[717.86,1047.18],[949.85,1044.61],[949.85,1679.5],[1394.6,1681.46]],edgeLine:[[488,1049],[950,1044]],acPad:[[516,958],[516,866],[488,866],[488,958],[516,958]],mulch:[[949.85,988.06],[574.61,991.42],[574.54,964.07],[949.85,957.65],[949.85,988.06]],bins:[[[[516.6,798.42],[516.6,773.4],[494.91,773.4],[494.91,798.42],[516.6,798.42]],"#5671BC"],[[[516.6,828.5],[516.6,803.48],[494.91,803.48],[494.91,828.5],[516.6,828.5]],"#B07953"],[[[516.6,859.91],[516.6,834.89],[494.91,834.89],[494.91,859.91],[516.6,859.91]],"#73965D"]],wedge:[[1306.68,1107],[1386,1106.61],[1385.47,1053.07],[1306,951],[1306.68,1107]],fence:[[573.18,765.33],[485.87,765.33],[485.87,1681.46],[1394.6,1681.46],[1387.64,1052.39],[1304,945.5]],nbr:[[[[1409,318.54],[1799,292.42],[1799,765.33],[1452.79,773.4],[1409,318.54]],"#918A98"],[[[1460.3,1077.33],[1452.79,773.4],[1799,765.33],[1799,1080.37],[1460.3,1077.33]],"#BEB3B2"],[[[1452.79,99.81],[1452.79,318.54],[1799,292.42],[1799,99.81],[1452.79,99.81]],"#E5CFC2"],[[[1389.77,598.19],[1395,1053.69],[1402.5,1811.19],[1800.5,1811.19],[1800.5,1080.56],[1462.32,1077.52],[1454.82,773.59],[1411.08,318.73],[1454.82,318.73],[1454.82,100],[1386,100],[1389.77,598.19]],"#9BA773"],[[[1682.15,1586.34],[1445.86,1586.34],[1445.86,1738.26],[1682.15,1738.26],[1682.15,1586.34]],"#F1FBEA"],[[[481.51,1811],[1402.25,1811],[1399.85,1685.98],[481.51,1686.03],[481.51,1811]],"#9BA773"],[[[270.8,99.81],[481.51,99.81],[481.51,1811],[95,1811],[95,1099.19],[399.37,1077.33],[270.8,99.81]],"#9BA773"],[[[402.79,387.72],[95,387.72],[95,732.39],[402.79,732.39],[402.79,387.72]],"#918A98"],[[[402.79,1077.33],[402.79,732.39],[95,732.39],[95,1099.19],[402.79,1077.33]],"#BEB3B2"],[[[339.57,99.81],[95,99.81],[95,387.72],[339.57,387.72],[339.57,99.81]],"#E5CFC2"]],chips:[[1367,1679],[1027,1678.9],[1027.58,1108.56],[1367,1106],[1367,1392.5],[1367,1679]],wallBase:[[1025,1108],[1036,1108],[1036,1679],[1025,1679]],pavers:[[980.68,1331.36,1004.84,1354.55],[980.68,1365.64,1004.84,1388.83],[980.68,1297.11,1004.84,1320.3],[980.68,1262.83,1004.84,1286.02],[980.68,1228.55,1004.84,1251.74],[980.68,1194.27,1004.84,1217.46],[980.68,1160.02,1004.84,1183.2],[980.68,1125.74,1004.84,1148.92],[980.68,1605.57,1004.84,1628.76],[980.68,1639.83,1004.84,1663.02],[980.68,1571.29,1004.84,1594.48],[980.68,1537.02,1004.84,1560.2],[980.68,1502.74,1004.84,1525.93],[980.68,1468.48,1004.84,1491.67],[980.68,1434.2,1004.84,1457.39],[980.68,1399.94,1004.84,1423.13],[980.68,1091.46,1004.84,1114.65],[980.68,1057.18,1004.84,1080.37],[980.68,1022.92,1004.84,1046.11],[980.68,988.64,1004.84,1011.83],[522.28,938.02,543.97,961.83],[522.28,972.3,543.97,994.9],[522.26,824.4,543.95,848.22],[522.28,900.14,543.97,923.95],[522.28,862.26,543.97,886.08],[522.26,786.52,543.95,810.34],[548.38,938.02,570.07,961.83],[548.38,824.4,570.07,848.22],[548.4,900.14,570.09,923.95],[548.4,862.28,570.09,886.1],[548.38,786.52,570.07,810.34],[557.28,1008.14,580.58,1032.36],[522.26,1008.39,545.56,1032.6],[592.28,1007.87,615.58,1032.09],[627.3,1007.63,650.6,1031.84],[662.32,1007.36,685.62,1031.6],[697.32,1007.11,720.62,1031.33],[732.34,1006.87,755.64,1031.08],[767.34,1006.6,790.67,1030.84],[802.36,1006.35,825.66,1030.57],[837.38,1006.11,860.69,1030.32],[872.38,1005.84,895.69,1030.06],[907.4,1005.59,930.71,1029.81],[1063,1336.44,1086.97,1360.89],[1096.84,1336.44,1120.8,1360.89],[1096.75,1408.55,1120.71,1433],[1063,1408.55,1086.97,1433],[1063,1372.49,1086.97,1396.95],[1097.03,1372.49,1121,1396.95]],walls:[[950,958,961,966,0],[949.85,966.6,960.83,980.71,0],[949.85,981.4,960.83,995.51,0],[949.85,996.22,960.83,1010.33,0],[949.85,1011.03,960.83,1025.13,0],[949.85,1025.83,960.83,1039.94,0],[949.85,1040.65,960.83,1054.76,0],[949.85,1055.46,960.83,1069.57,0],[949.85,1070.28,960.83,1084.39,0],[949.85,1529.46,960.83,1543.57,0],[949.85,1544.26,960.83,1558.37,0],[949.85,1559.09,960.83,1573.2,0],[949.85,1573.89,960.83,1588,0],[949.85,1588.71,960.83,1602.82,0],[949.85,1603.52,960.83,1617.63,0],[949.85,1618.32,960.83,1632.43,0],[949.85,1633.14,960.83,1647.25,0],[949.85,1647.95,960.83,1662.05,0],[950,1663,961,1679,0],[949.85,1085.08,960.83,1099.19,0],[949.85,1099.91,960.83,1114.02,0],[949.85,1114.71,960.83,1128.82,0],[949.85,1129.51,960.83,1143.62,0],[949.85,1144.34,960.83,1158.45,0],[949.85,1159.14,960.83,1173.25,0],[949.85,1173.97,960.83,1188.08,0],[949.85,1188.77,960.83,1202.88,0],[949.85,1203.6,960.83,1217.71,0],[949.85,1218.4,960.83,1232.51,0],[949.85,1233.2,960.83,1247.31,0],[949.85,1248.03,960.83,1262.14,0],[949.85,1262.83,960.83,1276.94,0],[949.85,1277.65,960.83,1291.76,0],[949.85,1292.46,960.83,1306.57,0],[949.85,1307.26,960.83,1321.37,0],[949.85,1322.08,960.83,1336.19,0],[949.85,1336.89,960.83,1351,0],[949.85,1351.71,960.83,1365.82,0],[949.85,1366.52,960.83,1380.63,0],[949.85,1381.34,960.83,1395.45,0],[949.85,1396.14,960.83,1410.25,0],[949.85,1410.95,960.83,1425.06,0],[949.85,1425.77,960.83,1439.88,0],[949.85,1440.57,960.83,1454.68,0],[949.85,1455.4,960.83,1469.51,0],[949.85,1470.2,960.83,1484.31,0],[949.85,1485.03,960.83,1499.14,0],[949.85,1499.83,960.83,1513.94,0],[949.85,1514.63,960.83,1528.74,0],[1025,1108,1036,1123.13,0],[1025,1124.13,1036,1139.26,0],[1025,1140.26,1036,1155.4,0],[1025,1156.4,1036,1171.53,0],[1025,1172.53,1036,1187.66,0],[1025,1188.66,1035.98,1203.53,0],[1025,1204.53,1035.98,1219.39,0],[1025,1220.39,1035.98,1235.26,0],[1025,1236.26,1035.98,1251.12,0],[1025,1252.12,1035.98,1266.99,0],[1025,1267.99,1035.98,1282.85,0],[1025,1283.85,1035.98,1298.72,0],[1025,1299.72,1035.98,1314.58,0],[1025,1315.58,1035.98,1330.45,0],[1025,1331.45,1035.98,1346.31,0],[1025,1347.31,1035.98,1362.18,0],[1025,1363.18,1035.98,1378.04,0],[1025,1379.04,1035.98,1393.91,0],[1025,1394.91,1035.98,1409.77,0],[1025,1410.77,1035.98,1425.64,0],[1025,1426.64,1035.98,1441.5,0],[1025,1442.5,1035.98,1457.37,0],[1025,1458.37,1035.98,1473.23,0],[1025,1474.23,1035.98,1489.1,0],[1025,1490.1,1035.98,1504.96,0],[1025,1505.96,1035.98,1520.83,0],[1025,1521.83,1035.98,1536.7,0],[1025,1537.7,1035.98,1552.56,0],[1025,1553.56,1035.98,1568.43,0],[1025,1569.43,1035.98,1584.29,0],[1025,1585.29,1035.98,1600.16,0],[1025,1601.16,1035.98,1616.02,0],[1025,1617.02,1035.98,1631.89,0],[1025,1632.89,1035.98,1647.75,0],[1025,1648.75,1035.98,1663.62,0],[1025,1664.62,1036,1678.62,0],[1032,1454,1367,1465,1],[1359.55,1454,1374.42,1464.98,1],[1343.69,1454,1358.55,1464.98,1],[1327.82,1454,1342.69,1464.98,1],[1311.96,1454,1326.82,1464.98,1],[1296.09,1454,1310.96,1464.98,1],[1280.23,1454,1295.09,1464.98,1],[1264.36,1454,1279.23,1464.98,1],[1248.5,1454,1263.36,1464.98,1],[1232.63,1454,1247.5,1464.98,1],[1216.77,1454,1231.63,1464.98,1],[1200.9,1454,1215.77,1464.98,1],[1185.04,1454,1199.9,1464.98,1],[1169.17,1454,1184.04,1464.98,1],[1153.3,1454,1168.17,1464.98,1],[1137.44,1454,1152.3,1464.98,1],[1121.57,1454,1136.44,1464.98,1],[1105.71,1454,1120.57,1464.98,1],[1089.84,1454,1104.71,1464.98,1],[1073.98,1454,1088.84,1464.98,1],[1058.11,1454,1072.98,1464.98,1],[1042.25,1454,1057.11,1464.98,1],[1026.38,1454,1041.25,1464.98,1]],pad:[[1344,1319],[1305.73,1319],[1300.06,1306.35],[1292.61,1294.82],[1283.56,1284.58],[1273.08,1275.8],[1261.35,1268.67],[1248.55,1263.35],[1234.85,1260.04],[1220.43,1258.89],[1206.01,1260.04],[1192.31,1263.35],[1179.51,1268.67],[1167.78,1275.8],[1157.3,1284.58],[1148.25,1294.82],[1140.8,1306.35],[1135.13,1319],[1057,1319],[1057,1151],[1344,1151],[1344,1319]],ring:[1219.87,1349.94,86],hose:[[1276.74,1368.21],[1318.31,1366.79],[1317.44,1341.4],[1291.5,1342.44]],pumpOuter:[1318.05,1361.86,13.49],pumpInner:[1318.05,1361.86,8.5],pool:[1218.87,1349.99,72.5],furniture:{"furniture-1":{frame:[[1207.14,1166.31],[1182.15,1167.04],[1184.01,1246],[1209,1245.27],[1207.14,1166.31]],back:[[1207.14,1166.21],[1182.15,1166.94],[1182.93,1200.13],[1207.92,1199.41],[1207.14,1166.21]]},"furniture-2":{frame:[[1266,1168.19],[1241,1168.19],[1241,1247],[1266,1247],[1266,1168.19]],back:[[1266,1168.11],[1241,1168.11],[1241,1195.82],[1266,1195.82],[1266,1168.11]]},"furniture-3":{frame:[[1219,1177.69],[1219,1184.56],[1219.08,1185.37],[1219.31,1186.12],[1219.68,1186.8],[1220.17,1187.39],[1220.76,1187.88],[1221.44,1188.25],[1222.19,1188.48],[1223,1188.56],[1231,1188.56],[1231.81,1188.48],[1232.56,1188.25],[1233.24,1187.88],[1233.83,1187.39],[1234.32,1186.8],[1234.69,1186.12],[1234.92,1185.37],[1235,1184.56],[1235,1177.69],[1234.92,1176.88],[1234.69,1176.13],[1234.32,1175.45],[1233.83,1174.86],[1233.24,1174.37],[1232.56,1174],[1231.81,1173.77],[1231,1173.69],[1223,1173.69],[1222.19,1173.77],[1221.44,1174],[1220.76,1174.37],[1220.17,1174.86],[1219.68,1175.45],[1219.31,1176.13],[1219.08,1176.88],[1219,1177.69]]},"furniture-4":{frame:[[1321,1168.19],[1296,1168.19],[1296,1247],[1321,1247],[1321,1168.19]],back:[[1321,1168.11],[1296,1168.11],[1296,1195.82],[1321,1195.82],[1321,1168.11]]},"furniture-5":{frame:[[1274,1177.69],[1274,1184.56],[1274.08,1185.37],[1274.31,1186.12],[1274.68,1186.8],[1275.17,1187.39],[1275.76,1187.88],[1276.44,1188.25],[1277.19,1188.48],[1278,1188.56],[1286,1188.56],[1286.81,1188.48],[1287.56,1188.25],[1288.24,1187.88],[1288.83,1187.39],[1289.32,1186.8],[1289.69,1186.12],[1289.92,1185.37],[1290,1184.56],[1290,1177.69],[1289.92,1176.88],[1289.69,1176.13],[1289.32,1175.45],[1288.83,1174.86],[1288.24,1174.37],[1287.56,1174],[1286.81,1173.77],[1286,1173.69],[1278,1173.69],[1277.19,1173.77],[1276.44,1174],[1275.76,1174.37],[1275.17,1174.86],[1274.68,1175.45],[1274.31,1176.13],[1274.08,1176.88],[1274,1177.69]]},"furniture-6":{frame:[[1080.34,1267.08],[1082.71,1295.59],[1123.62,1292.19],[1121.25,1263.68],[1080.34,1267.08]],back:[[1080.29,1267.09],[1082.66,1295.59],[1099.85,1294.17],[1097.48,1265.66],[1080.29,1267.09]]},"furniture-7":{frame:[[1098.55,1198.84],[1086.52,1224.8],[1123.77,1242.05],[1135.8,1216.1],[1098.55,1198.84]],back:[[1098.5,1198.82],[1086.48,1224.78],[1102.13,1232.03],[1114.16,1206.07],[1098.5,1198.82]]},"furniture-8":{frame:[[1086.19,1244.65],[1084.83,1252.53],[1084.77,1253.34],[1084.87,1254.12],[1085.12,1254.85],[1085.5,1255.52],[1086,1256.1],[1086.6,1256.58],[1087.3,1256.93],[1088.08,1257.15],[1095.96,1258.52],[1096.77,1258.58],[1097.55,1258.48],[1098.28,1258.23],[1098.95,1257.85],[1099.53,1257.35],[1100.01,1256.75],[1100.37,1256.05],[1100.59,1255.27],[1101.96,1247.38],[1102.02,1246.57],[1101.92,1245.8],[1101.67,1245.06],[1101.29,1244.4],[1100.79,1243.82],[1100.18,1243.34],[1099.48,1242.98],[1098.7,1242.76],[1090.82,1241.39],[1090.01,1241.33],[1089.23,1241.43],[1088.5,1241.68],[1087.83,1242.06],[1087.25,1242.56],[1086.77,1243.17],[1086.41,1243.87],[1086.19,1244.65]]}},turf:[[1055,1649],[1055,1492],[1352,1492],[1352,1649]],shed:[[1287,1505.38],[1287,1602.87],[1339,1602.87],[1339,1505.38],[1287,1505.38]],planters:[[[1289.08,1410.01,10.78],[1289.08,1410.01,9.47],[1289.08,1410.01,6.86]],[[1321.07,1321.01,10.78],[1321.08,1321.01,9.47],[1321.08,1321.01,6.86]],[[1085.93,1181.87,10.78],[1085.93,1181.87,9.47],[1085.93,1181.87,6.86]],[[1103.93,1171.87,10.78],[1103.93,1171.87,9.47],[1103.93,1171.87,6.86]],[[1301.08,1387.01,10.78],[1301.08,1387.01,9.47],[1301.08,1387.01,6.86]],[[1316.15,1408.08,16.61],[1316.15,1408.08,14.6],[1316.15,1408.08,10.57]]],boulders:[[[1278.32,1429.2,7.45,"#D4C8BE"],[1287.22,1424.16,2.77,"#CAC6C3"],[1276.32,1421.69,2.77,"#CAC6C3"],[1273.37,1441.72,2.77,"#CAC6C3"],[1276.85,1437.96,2.77,"#A38B7A"],[1267.74,1430.09,2.77,"#CAC6C3"],[1269.47,1420.91,6.55,"#A38B7A"],[1261.74,1430.68,4.93,"#AAA29B"],[1276.7,1414.02,4.93,"#AAA29B"],[1282.49,1421.05,3.46,"#AAA29B"],[1267.89,1437.82,3.28,"#CAC6C3"]],[[1158.32,1429.2,7.45,"#D4C8BE"],[1167.22,1424.16,2.77,"#CAC6C3"],[1156.32,1421.69,2.77,"#CAC6C3"],[1153.37,1441.72,2.77,"#CAC6C3"],[1156.85,1437.96,2.77,"#A38B7A"],[1147.74,1430.09,2.77,"#CAC6C3"],[1149.47,1420.91,6.55,"#A38B7A"],[1141.74,1430.68,4.93,"#AAA29B"],[1156.7,1414.02,4.93,"#AAA29B"],[1162.49,1421.05,3.46,"#AAA29B"],[1147.89,1437.82,3.28,"#CAC6C3"]]],umbrella:[[[1164.96,1472.43],[1257.43,1351.47],[1136.47,1259.01],[1044.01,1379.96],[1164.96,1472.43]],[[1157.63,1417.49],[1202.49,1358.81],[1143.81,1313.95],[1098.95,1372.63],[1157.63,1417.49]],[[1106.18,1445.65],[1127.87,1417.28],[1099.5,1395.59],[1077.81,1423.96],[1106.18,1445.65]]],epanel:[[[1326,1497],[1341,1497],[1341,1500],[1326,1500]],[[1329.75,1500],[1337.25,1500],[1337.25,1506],[1329.75,1506]]]};nn.pavers.forEach(i=>{i[0]>1050&&i[0]<1130&&i[1]>1330&&(i[0]-=5.67,i[2]-=5.67,i[1]+=7.28,i[3]+=7.28)});{let i=(e,t,n)=>e.forEach(s=>{s[0]+=t,s[1]+=n});nn.umbrella.forEach(e=>i(e,62,13)),nn.boulders[1].forEach((e,t)=>{let n=[[1185.33,1433.6,10.06],[1178.35,1422.23,3.74],[1187.04,1446.44,3.74],[1139.51,1429.14,3.74],[1148.29,1413.93,3.74],[1164.8,1407.92,3.74],[1146.03,1440.43,8.84],[1148.35,1424.1,6.66],[1158.3,1415.75,6.66],[1178.67,1445.24,4.67],[1170.95,1416.69,4.43]][t];e[0]=n[0],e[1]=n[1],e[2]=n[2]}),i(nn.boulders[0],-14,14)}var Se=14.35,Li=1036,Ii=1108,gt=1/12,Zi=4/12,W=i=>(i-Li)/Se,j=i=>(i-Ii)/Se,mn=(i,e,t)=>Math.min(t,Math.max(e,i)),kt=Math.PI*2;function ay(i,e,t){let n=Math.imul(i|0,374761393)^Math.imul(e|0,668265263)^Math.imul(t|0,2147483647);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function ic(i,e,t){let n=Math.floor(i),s=Math.floor(e),r=Math.floor(t),a=i-n,o=e-s,c=t-r,l=m=>m*m*(3-2*m),h=l(a),u=l(o),d=l(c),f=0;for(let m=0;m<2;m++)for(let b=0;b<2;b++)for(let g=0;g<2;g++)f+=ay(n+m,s+b,r+g)*(m?h:1-h)*(b?u:1-u)*(g?d:1-d);return f}function lu(i,e,t,n,s=1){let r=i.attributes.position;for(let a=0;a<r.count;a++){let o=r.getX(a),c=r.getY(a),l=r.getZ(a),h=ic(o*t+n,c*t+n*1.7,l*t-n*.3)*.65+ic(o*t*2.3+n,c*t*2.3,l*t*2.3)*.35,u=1-e/2+e*h;r.setXYZ(a,o*u,c*u*s,l*u)}return i.computeVertexNormals(),i}function pt(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Ce={cut:!1,pad:-1*gt,step1:7*gt,step2:7*gt,sink:0,pitch:1.5,walkFall:18*gt,lawnFall:12*gt,eastFall:7*gt,time:16.5,month:10,north:0,view:"overview",layers:{pool:!0,furniture:!0,umbrella:!0,planters:!0,shed:!1,electrical:!0,context:!0}},Mp="backyard_3d_v5",sp={pad:-1*gt,step1:7*gt,step2:7*gt,sink:0,pitch:1.5,walkFall:18*gt,eastFall:7*gt};try{let i=JSON.parse(localStorage.getItem(Mp)||"null");if(i){for(let e of["drag","pad","step1","step2","walkFall","north"])i[e]!==void 0&&(Ce[e]=i[e]);i.layers&&Object.assign(Ce.layers,i.layers),i.shedOff2||(Ce.layers.shed=!1)}}catch{}function bc(){try{localStorage.setItem(Mp,JSON.stringify(Object.assign({},Ce,{shedOff2:1})))}catch{}}var Ji=1459.5,It=1324.5,wn=1367,sc=960.83,Es=1023.6,$n=[Es,Es+11],Ze=[1219.87,1345],Jh=83,Ep=80,rc=i=>mn((i-1108)/573,0,1),oy=i=>mn((i-1036)/354,0,1),hu=i=>-.35-Ce.walkFall*rc(i),_c=(i,e)=>-.25-Ce.lawnFall*rc(e),Er=(i,e)=>-.35-Ce.walkFall*rc(e)-Ce.eastFall*oy(i)*(.3+.7*rc(e)),ga=()=>Ce.pad,ac=()=>Ce.pad-Ce.step1,cy=()=>Ce.pad-Ce.step1-Ce.step2,Qh=i=>cy()-Ce.pitch/100*Math.max(0,i-Ji)/Se,Ci=Ep+5.5,ly=(i,e)=>Math.hypot(i-Ze[0],e-Ze[1])<Ci,hy=1319;function oc(i,e){return i>=wn?Er(i,e):e>=Ji?Qh(e):e>=It||ly(i,e)?ac():ga()}var uu=i=>i<950?_c(i,1681):i<$n[1]?hu(1681):Er(i,1681);function tn(i,e){return e>=1108&&i>=$n[1]?oc(i,e):i>=sc&&i<Es&&e>=958?hu(e):i<950&&e>=1049?_c(i,e):-.25}var xc=Math.sqrt(Jh*Jh-(It-Ze[1])**2),uy=Ze[0]-xc,dy=Ze[0]+xc,fy=Math.atan2(It-Ze[1],-xc),py=Math.atan2(It-Ze[1],xc),cc=(i,e,t=Jh,n=24)=>Array.from({length:n-1},(s,r)=>{let a=i+(e-i)*(r+1)/n;return[Ze[0]+Math.cos(a)*t,Ze[1]+Math.sin(a)*t]}),ma=document.getElementById("wrap"),$h=Math.min(screen.width,screen.height)<700,Vt=new jr({antialias:!0,powerPreference:"high-performance"});Vt.setPixelRatio(Math.min(devicePixelRatio,$h?1.75:2));Vt.shadowMap.enabled=!0;Vt.shadowMap.type=th;Vt.shadowMap.autoUpdate=!1;Vt.toneMapping=nh;Vt.toneMappingExposure=1;Vt.outputColorSpace=At;ma.prepend(Vt.domElement);var lt=new rr,_t=new Xt(55,1,.08,4e3),ct=new Vo(_t,Vt.domElement);ct.enableDamping=!0;ct.dampingFactor=.14;ct.zoomSpeed=3.2;ct.zoomToCursor=!0;ct.rotateSpeed=1.1;ct.panSpeed=1;ct.maxPolarAngle=Math.PI*.495;ct.minDistance=.3;ct.maxDistance=320;ct.screenSpacePanning=!1;var my=new sr(Vt);lt.environment=my.fromScene(new Xo,.04).texture;var du=Vt.capabilities.getMaxAnisotropy(),gy=()=>lt.traverse(i=>{if(i.isMesh)for(let e of[].concat(i.material))e.envMapIntensity===1&&(e.envMapIntensity=.35)});function St(i,e,t,n,s=!0){let r=document.createElement("canvas");r.width=i,r.height=e;let a=r.getContext("2d");t(a,i,e);let o=new vo(r);return o.wrapS=o.wrapT=Yn,n&&o.repeat.set(n[0],n[1]),o.anisotropy=du,s&&(o.colorSpace=At),o}function ei(i,e,t,n,s,r,a,o){for(let c=0;c<n;c++){i.fillStyle=s[Math.floor(o()*s.length)],i.globalAlpha=.25+o()*.6;let l=r+o()*(a-r);i.beginPath(),i.arc(o()*e,o()*t,l,0,kt),i.fill()}i.globalAlpha=1}function yc(i,e,t,n,s,r,a=60){i.fillStyle=n,i.fillRect(0,0,e,t);for(let o=0;o<a;o++){let c=e*(.05+r()*.2),l=r()*e,h=r()*t,u=i.createRadialGradient(l,h,0,l,h,c),d=(r()-.5)*s;u.addColorStop(0,d>0?`rgba(255,255,255,${d})`:`rgba(0,0,0,${-d})`),u.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=u;for(let f of[-e,0,e])for(let m of[-t,0,t])i.save(),i.translate(f,m),i.fillRect(l-c,h-c,2*c,2*c),i.restore()}}var Ue={};Ue.stone=St(256,256,(i,e,t)=>{let n=pt(5);yc(i,e,t,"#d8c6b0",.1,n,30),ei(i,e,t,2600,["#b9a68e","#efe3d2","#a08c76","#cdb79e"],.4,1.3,n)},null);Ue.siding=St(256,256,(i,e,t)=>{let n=pt(3);i.fillStyle="#c3cec0",i.fillRect(0,0,e,t);let s=7;for(let r=0;r<s;r++){let a=r*t/s,o=i.createLinearGradient(0,a,0,a+t/s);o.addColorStop(0,"rgba(255,255,255,0.10)"),o.addColorStop(.85,"rgba(0,0,0,0.02)"),o.addColorStop(.92,"rgba(0,0,0,0.22)"),o.addColorStop(1,"rgba(0,0,0,0.3)"),i.fillStyle=o,i.fillRect(0,a,e,t/s)}ei(i,e,t,400,["#aebaa9","#d3dccf"],.3,1,n),i.globalAlpha=.18;for(let r=0;r<120;r++){let a=n()*t,o=20+n()*90,c=n()*e;i.strokeStyle=n()<.5?"#9eab99":"#dde5da",i.lineWidth=.6,i.beginPath(),i.moveTo(c,a),i.bezierCurveTo(c+o/3,a+(n()-.5)*2,c+2*o/3,a+(n()-.5)*2,c+o,a),i.stroke()}i.globalAlpha=1},null);Ue.win=St(256,256,(i,e,t)=>{let n=pt(41);i.fillStyle="#f4f3ef",i.fillRect(0,0,e,t);for(let[s,r]of[[12,110],[134,110]])for(let[a,o]of[[12,110],[134,110]]){i.fillStyle="#d9d8d2",i.fillRect(s,a,r,o);for(let l=a;l<a+o;l+=4)i.fillStyle="#f3f2ee",i.fillRect(s,l,r,3.4),i.fillStyle="#dedcd6",i.fillRect(s,l+3.4,r,.6);for(let l of[s+r*.25,s+r*.75])i.fillStyle="rgba(150,148,140,0.35)",i.fillRect(l,a,1,o);let c=i.createLinearGradient(s,a,s+r,a+o);c.addColorStop(0,"rgba(255,255,255,0.18)"),c.addColorStop(.5,"rgba(255,255,255,0)"),c.addColorStop(1,"rgba(40,50,60,0.12)"),i.fillStyle=c,i.fillRect(s,a,r,o),i.strokeStyle="#cfcdc6",i.lineWidth=3,i.strokeRect(s+1.5,a+1.5,r-3,o-3)}i.fillStyle="#ffffff",i.fillRect(122,0,12,t),i.fillRect(0,122,e,12)},null);Ue.win1=St(128,256,(i,e,t)=>{i.fillStyle="#f4f3ef",i.fillRect(0,0,e,t);for(let[n,s]of[[8,116],[132,116]]){i.fillStyle="#e9e8e3",i.fillRect(8,n,112,s);for(let a=n;a<n+s;a+=4)i.fillStyle="#f6f5f1",i.fillRect(8,a,112,3.3),i.fillStyle="#dcdad4",i.fillRect(8,a+3.3,112,.7);for(let a of[36,92])i.fillStyle="rgba(150,148,140,0.35)",i.fillRect(a,n,1,s);let r=i.createLinearGradient(8,n,120,n+s);r.addColorStop(0,"rgba(255,255,255,0.2)"),r.addColorStop(.5,"rgba(255,255,255,0)"),r.addColorStop(1,"rgba(40,50,60,0.08)"),i.fillStyle=r,i.fillRect(8,n,112,s),i.strokeStyle="#c9c7c0",i.lineWidth=3,i.strokeRect(9.5,n+1.5,109,s-3)}i.fillStyle="#ffffff",i.fillRect(0,124,e,8),i.fillStyle="#d8d6cf",i.fillRect(0,131,e,1)},null);Ue.slider=St(256,256,(i,e,t)=>{let n=pt(43);i.fillStyle="#f5f4f0",i.fillRect(0,0,e,t);for(let[s,r]of[[10,114],[132,114]]){i.fillStyle="#2b3236",i.fillRect(s,10,r,236);for(let o=14;o<240;o+=4)i.fillStyle="#d9dad6",i.fillRect(s+3,o,r-6,3.2),i.fillStyle="#bfc0bb",i.fillRect(s+3,o+3.2,r-6,.8);let a=i.createLinearGradient(s,10,s+r,246);a.addColorStop(0,"rgba(255,255,255,0.22)"),a.addColorStop(.45,"rgba(255,255,255,0.02)"),a.addColorStop(1,"rgba(255,255,255,0.12)"),i.fillStyle=a,i.fillRect(s,10,r,236),i.strokeStyle="#e9e8e3",i.lineWidth=6,i.strokeRect(s+3,13,r-6,230)}i.fillStyle="#ffffff",i.fillRect(124,0,8,t),i.fillStyle="#b9b7b0",i.fillRect(228,118,5,22)},null);Ue.door=St(256,512,(i,e,t)=>{let n=pt(44);i.fillStyle="#cf7a4e",i.fillRect(0,0,e,t);let s=(a,o,c,l,h)=>{i.save(),i.beginPath(),i.rect(a,o,c,l),i.clip(),i.globalAlpha=.22;for(let u=0;u<(h?60:30);u++){if(i.strokeStyle=n()<.5?"#9c4f2b":"#e2945f",i.lineWidth=.6+n()*1.4,i.beginPath(),h){let d=a+n()*c;i.moveTo(d,o),i.bezierCurveTo(d+(n()-.5)*8,o+l/3,d+(n()-.5)*8,o+2*l/3,d+(n()-.5)*5,o+l)}else{let d=o+n()*l;i.moveTo(a,d),i.bezierCurveTo(a+c/3,d+(n()-.5)*5,a+2*c/3,d+(n()-.5)*5,a+c,d)}i.stroke()}for(let u=0;u<2;u++)n()<.5&&(i.globalAlpha=.35,i.fillStyle="#6e2f18",i.beginPath(),i.ellipse(a+n()*c,o+n()*l,3+n()*3,2+n()*2,0,0,kt),i.fill());i.restore(),i.globalAlpha=1};s(0,0,e,t,!0);let r=(a,o,c,l)=>{i.fillStyle="#ad6038",i.fillRect(a,o,c,l),i.fillStyle="#d98653",i.fillRect(a+7,o+7,c-14,l-14),s(a+7,o+7,c-14,l-14,!0),i.strokeStyle="rgba(255,210,170,0.35)",i.lineWidth=2,i.beginPath(),i.moveTo(a+1,o+l-1),i.lineTo(a+1,o+1),i.lineTo(a+c-1,o+1),i.stroke(),i.strokeStyle="rgba(50,15,5,0.45)",i.beginPath(),i.moveTo(a+c-1,o+1),i.lineTo(a+c-1,o+l-1),i.lineTo(a+1,o+l-1),i.stroke()};r(34,212,86,110),r(136,212,86,110),r(34,346,86,130),r(136,346,86,130);for(let a of[34,136]){i.save(),i.beginPath(),i.moveTo(a,190),i.lineTo(a,62),i.quadraticCurveTo(a+86/2,34,a+86,62),i.lineTo(a+86,190),i.closePath(),i.clip(),i.fillStyle="#d9ddd8",i.fillRect(a,30,86,170),i.globalAlpha=.5;for(let c=0;c<70;c++){i.strokeStyle=n()<.5?"#c3c9c4":"#ffffff",i.lineWidth=1+n()*2,i.beginPath();let l=a+n()*86;i.moveTo(l,30);for(let h=1;h<=8;h++)i.lineTo(l+Math.sin(h*1.7+c)*3,30+h*21);i.stroke()}i.globalAlpha=1,i.strokeStyle="#1d1b1a",i.lineWidth=2.4;for(let c=0;c<3;c++)i.beginPath(),i.arc(a+86/2,196,58+c*16,Math.PI*1.08,Math.PI*1.92),i.stroke();for(let c of[1,-1])for(let l=0;l<3;l++)i.beginPath(),i.moveTo(a+86/2+c*(86/2-4),62+l*12),i.lineTo(a+86/2+c*(86/2-16-l*6),48+l*12),i.stroke();i.restore(),i.strokeStyle="#9c4f2b",i.lineWidth=5,i.beginPath(),i.moveTo(a,190),i.lineTo(a,62),i.quadraticCurveTo(a+86/2,34,a+86,62),i.lineTo(a+86,190),i.closePath(),i.stroke()}},null);Ue.gblock=St(320,128,(i,e,t)=>{let n=pt(52);i.fillStyle="#f1f0ea",i.fillRect(0,0,e,t);let s=5,r=2,a=6,o=(e-a)/s,c=(t-a)/r;for(let l=0;l<s;l++)for(let h=0;h<r;h++){let u=a+l*o,d=a+h*c,f=o-a,m=c-a,b=i.createLinearGradient(u,d,u+f,d+m);b.addColorStop(0,"#55615f"),b.addColorStop(.5,"#2e3837"),b.addColorStop(1,"#6b7775"),i.fillStyle=b,i.fillRect(u,d,f,m),i.globalAlpha=.22;for(let g=0;g<4;g++){i.strokeStyle=n()<.5?"#b7c2c0":"#7d8987",i.lineWidth=1+n()*1.5,i.beginPath();let p=d+n()*m;i.moveTo(u,p);for(let x=1;x<=6;x++)i.lineTo(u+f*x/6,p+(n()-.5)*m*.5);i.stroke()}i.globalAlpha=1,i.strokeStyle="#9aa4a2",i.lineWidth=2,i.strokeRect(u+1,d+1,f-2,m-2)}},null);Ue.shedPanel=St(128,128,(i,e,t)=>{let n=pt(61);i.fillStyle="#cfc4b5",i.fillRect(0,0,e,t);for(let s=0;s<4;s++){let r=s*e/4;i.fillStyle="#b3a796",i.fillRect(r,0,2.5,t),i.fillStyle="#ddd4c7",i.fillRect(r+2.5,0,1.5,t)}ei(i,e,t,300,["#c3b8a8","#d8cfc2"],.3,.9,n)},null);Ue.board=St(512,512,(i,e,t)=>{let n=pt(17),s=9;for(let r=0;r<s;r++){let a=n(),o=[118+a*40,104+a*34,88+a*28];i.fillStyle=`rgb(${o.map(Math.round)})`,i.fillRect(r*e/s,0,e/s,t);for(let c=0;c<26;c++){i.strokeStyle=`rgba(${n()<.5?"40,30,22":"210,200,185"},${.08+n()*.12})`,i.lineWidth=.6+n()*1.4;let l=r*e/s+n()*e/s;i.beginPath(),i.moveTo(l,0),i.bezierCurveTo(l+n()*6-3,t*.3,l+n()*6-3,t*.6,l+n()*4-2,t),i.stroke()}i.fillStyle="rgba(20,14,10,0.55)",i.fillRect(r*e/s,0,2,t),n()<.7&&(i.fillStyle="rgba(40,28,20,0.5)",i.beginPath(),i.ellipse(r*e/s+n()*e/s,n()*t,3+n()*4,5+n()*6,0,0,kt),i.fill())}},null);Ue.stoneWall=St(1024,1024,(i,e,t)=>{let n=pt(83);i.fillStyle="#e6dfd2",i.fillRect(0,0,e,t);let s=["#eadfca","#f0e6d4","#e3d2b6","#ead8bc","#dcc7a6","#f2eadb","#e2cba9","#d9bd97","#ecd9bf","#e8d4b8"],r=0;for(;r<t;){let a=Math.min(t-r,58+Math.floor(n()*4)*30),o=-n()*120;for(;o<e;){let c=110+n()*260,l=s[Math.floor(n()*s.length)],h=4+n()*2,u=o+h,d=r+h,f=c-h*2,m=a-h*2,b=n()<.3&&m>90,g=b?[[d,m*.48],[d+m*.52,m*.48]]:[[d,m]];for(let[p,x]of g){i.fillStyle=b?s[Math.floor(n()*s.length)]:l,i.beginPath(),i.moveTo(u+n()*6,p+n()*4),i.lineTo(u+f-n()*6,p+n()*4),i.lineTo(u+f-n()*5,p+x-n()*5),i.lineTo(u+n()*5,p+x-n()*5),i.closePath(),i.fill();let _=i.createLinearGradient(u,p,u+f*.3,p+x);_.addColorStop(0,"rgba(255,255,255,0.18)"),_.addColorStop(1,"rgba(90,70,45,0.14)"),i.fillStyle=_,i.fill();for(let v=0;v<f*x/70;v++)i.fillStyle=`rgba(${n()<.5?"120,98,70":"255,250,240"},${.1+n()*.16})`,i.fillRect(u+n()*f,p+n()*x,1+n()*2.5,1+n()*2.5);n()<.35&&(i.strokeStyle="rgba(120,95,65,0.18)",i.lineWidth=1,i.beginPath(),i.moveTo(u+n()*f,p+n()*x),i.lineTo(u+n()*f,p+n()*x),i.stroke())}o+=c}r+=a}},null);Ue.garage=St(512,224,(i,e,t)=>{i.fillStyle="#c3cec0",i.fillRect(0,0,e,t);let n=4,s=4;for(let r=0;r<n;r++){i.fillStyle="rgba(0,0,0,0.22)",i.fillRect(0,r*t/n-1,e,2);for(let a=0;a<s;a++){let o=a*e/s+7,c=r*t/n+8,l=e/s-14,h=t/n-16;i.fillStyle="#bcc8b9",i.fillRect(o,c,l,h),i.strokeStyle="rgba(255,255,255,0.9)",i.lineWidth=2,i.beginPath(),i.moveTo(o,c+h),i.lineTo(o,c),i.lineTo(o+l,c),i.stroke(),i.strokeStyle="rgba(0,0,0,0.18)",i.beginPath(),i.moveTo(o+l,c),i.lineTo(o+l,c+h),i.lineTo(o,c+h),i.stroke()}}},[1,1]);Ue.asphalt=St(256,256,(i,e,t)=>{let n=pt(97);yc(i,e,t,"#6b6c6c",.12,n,40),ei(i,e,t,6e3,["#4e4f50","#858684","#5c5d5e"],.3,1.1,n)},null);function Qo(i,e,t,n,s,r,a,o){for(let c of[-e,0,e])for(let l of[-t,0,t])i.fillStyle=o,i.fillRect(n+c,s+l,r,a)}var xr=(()=>{let i={},e={hs46:{c:["#564641","#714e45","#6c4b41","#614940","#644f47","#6d544c","#735c54"],g:"#433732",s:["#513d36","#7a5b52","#614841"]}};for(let[t,n]of Object.entries(e))i["hb_"+t]={span:64/12,tex:St(1024,1024,(s,r,a)=>{let o=pt(t.length*31+7),c=r/16,l=5;s.fillStyle=n.g,s.fillRect(0,0,r,a);let h=(d,f)=>(d%f+f)%f,u=d=>{let f=Math.imul(d^1540483477,2654435761)>>>0;return f=(f^f>>>15)>>>0,f/4294967296};for(let d=-20;d<36;d++)for(let f=-10;f<10;f++){let m=(d+f*4)*c,b=d*c,g=h(d+f*4,16)*64+h(d,16)*2;for(let[p,x,_,v,w]of[[m,b,2*c,c,0],[m,b+c,c,2*c,1]]){let M=n.c[Math.floor(u(g+w+t.length)*n.c.length)],S=h(p,r)+l/2,R=h(x,a)+l/2;Qo(s,r,a,S,R,_-l,v-l,M),Qo(s,r,a,S,R,_-l,2,"rgba(255,240,220,0.14)"),Qo(s,r,a,S,R+v-l-2,_-l,2,"rgba(0,0,0,0.28)")}}ei(s,r,a,26e3,n.s,.5,1.6,o)},[1,1])};return i})();{let i=St(1024,1024,(e,t,n)=>{let s=t/16,r=5,a=(o,c)=>(o%c+c)%c;e.fillStyle="#000",e.fillRect(0,0,t,n);for(let o=-20;o<36;o++)for(let c=-10;c<10;c++){let l=(o+c*4)*s,h=o*s;for(let[u,d,f,m]of[[l,h,2*s,s],[l,h+s,s,2*s]]){let b=a(u,t)+r/2,g=a(d,n)+r/2;for(let[p,x]of[[0,"#8a8a8a"],[2,"#c4c4c4"],[4,"#eeeeee"],[7,"#ffffff"]])Qo(e,t,n,b+p,g+p,f-r-2*p,m-r-2*p,x)}}},[1,1],!1);for(let e of Object.keys(xr))xr[e].span===64/12&&(xr[e].bump=i)}Ue.pea=St(256,256,(i,e,t)=>{let n=pt(161);i.fillStyle="#5b4b3c",i.fillRect(0,0,e,t);for(let s=0;s<3800;s++){let r=n();i.fillStyle=r<.35?"#d6c3a2":r<.6?"#a8916f":r<.8?"#7a6650":"#efe3cc",i.beginPath(),i.ellipse(n()*e,n()*t,1.2+n()*1.8,1+n()*1.4,n()*3,0,kt),i.fill()}},null);Ue.mesh=St(64,64,(i,e,t)=>{i.clearRect(0,0,e,t),i.fillStyle="#c9ced1",i.fillRect(0,0,e,3),i.fillRect(0,0,3,t),i.fillStyle="#e9ecee",i.fillRect(0,0,e,1),i.fillRect(0,0,1,t)},null);Ue.corr=St(64,8,(i,e,t)=>{for(let n=0;n<e;n++){let s=Math.sin(n/e*kt*2),r=Math.round(128+s*80);i.fillStyle=`rgb(${r},${r},${r})`,i.fillRect(n,0,1,t)}},null,!1);var Sp=[.17,.235,.3,.365,.43,.6,.665,.9];Ue.tank=St(512,512,(i,e,t)=>{let n=pt(61);i.fillStyle="#c9cfd2",i.fillRect(0,0,e,t);for(let r=0;r<900;r++){let a=n()*e,o=n()*t,c=6+n()*26,l=Math.round(178+n()*62);i.fillStyle=`rgba(${l},${l+3},${l+6},${.35+n()*.45})`,i.beginPath();let h=5+Math.floor(n()*3);for(let u=0;u<h;u++){let d=u/h*kt+n()*.6,f=c*(.6+n()*.5);i.lineTo(a+Math.cos(d)*f,o+Math.sin(d)*f*.8)}i.closePath(),i.fill()}ei(i,e,t,2500,["#9ea6ab","#e9edef","#b4bcc0"],.4,1.2,n);for(let r of Sp){let a=r*t,o=i.createLinearGradient(0,a-9,0,a+9);o.addColorStop(0,"rgba(255,255,255,0)"),o.addColorStop(.3,"rgba(255,255,255,0.55)"),o.addColorStop(.55,"rgba(90,98,104,0.45)"),o.addColorStop(1,"rgba(90,98,104,0)"),i.fillStyle=o,i.fillRect(0,a-9,e,18)}let s=i.createLinearGradient(0,0,0,t);s.addColorStop(0,"rgba(0,0,0,0.12)"),s.addColorStop(.12,"rgba(0,0,0,0)"),s.addColorStop(1,"rgba(0,0,0,0.06)"),i.fillStyle=s,i.fillRect(0,0,e,t)},null);Ue.tankBump=St(16,512,(i,e,t)=>{i.fillStyle="#808080",i.fillRect(0,0,e,t);for(let n of Sp){let s=n*t,r=i.createLinearGradient(0,s-8,0,s+8);r.addColorStop(0,"#808080"),r.addColorStop(.5,"#f0f0f0"),r.addColorStop(1,"#808080"),i.fillStyle=r,i.fillRect(0,s-8,e,16)}},null,!1);Ue.caustic=St(512,512,(i,e,t)=>{let n=i.createImageData(e,t),s=n.data;for(let r=0;r<t;r++)for(let a=0;a<e;a++){let o=ic(a/38,r/38,4)*.6+ic(a/13,r/13,8)*.4,c=Math.pow(Math.max(0,o-.5)*2.4,2)*.6,l=(r*e+a)*4;s[l]=196+40*c,s[l+1]=212+34*c,s[l+2]=214+30*c,s[l+3]=255}i.putImageData(n,0,0)},[2,2]);Ue.grassFar=St(256,256,(i,e,t)=>{let n=pt(41);yc(i,e,t,"#5f7a3e",.18,n,50),ei(i,e,t,4e3,["#4c6a30","#7d9550","#6a8445"],.4,1.2,n)},[1,1]);Ue.brush=St(256,256,(i,e,t)=>{let n=pt(43);yc(i,e,t,"#5b6338",.25,n,60),ei(i,e,t,5e3,["#3d4a26","#7a7646","#6b5f3e"],.5,2,n)},[1,1]);Ue.leaf=St(128,128,(i,e,t)=>{let n=pt(47);i.fillStyle="#808080",i.fillRect(0,0,e,t),ei(i,e,t,900,["#5a5a5a","#a5a5a5","#3e3e3e","#c4c4c4"],.8,2.6,n)},[1,1]);var rt={};{let i=new bs,e=(t,n)=>{let s=i.load("pbr/"+t+".webp",()=>{(s.userData.clones||[]).forEach(r=>r.needsUpdate=!0),Rn()});return s.wrapS=s.wrapT=Yn,s.anisotropy=du,n&&(s.colorSpace=At),s};for(let t of["basalt","limestone","whiterock","lawn","mulch","turf","concrete","flag","block","shingle"])rt[t+"A"]=e(t+"_albedo",!0),rt[t+"N"]=e(t+"_normal");for(let t of["basalt","whiterock","concrete"])rt[t+"O"]=e(t+"_orm");rt.cedarA=e("cedar_albedo",!0),rt.cedarN=e("cedar_normal"),rt.sidingN=e("siding_normal"),rt.rep=(t,n)=>{let s=t.clone();return s.repeat.set(n,n),(t.userData.clones=t.userData.clones||[]).push(s),t.image&&(s.needsUpdate=!0),s}}var F={ground:new ee({color:10133626,roughness:.97}),outside:new ee({map:Ue.grassFar,roughness:1}),brush:new ee({map:Ue.brush,roughness:1}),block:new ee({map:rt.blockA,normalMap:rt.blockN,normalScale:new re(1.4,1.4),roughness:.92,color:16777215}),stone:new ee({map:Ue.stone,roughness:.9}),concrete:new ee({map:rt.rep(rt.concreteA,1.5),normalMap:rt.rep(rt.concreteN,1.5),roughnessMap:rt.rep(rt.concreteO,1.5),roughness:1,side:vt}),siding:new ee({map:Ue.siding,normalMap:rt.sidingN,roughness:.8}),stoneWall:new ee({map:Ue.stoneWall,bumpMap:Ue.stoneWall,bumpScale:4,roughness:.9,emissive:2761752,emissiveIntensity:.35}),garageDoor:new ee({map:Ue.garage,roughness:.55}),frontDoor:new ee({map:Ue.door,roughness:.4,emissive:16777215,emissiveMap:Ue.door,emissiveIntensity:.18}),flag:new ee({map:rt.rep(rt.flagA,1.25),normalMap:rt.rep(rt.flagN,1.25),roughness:.85}),chips:new ee({map:rt.rep(rt.whiterockA,2),normalMap:rt.rep(rt.whiterockN,2),roughnessMap:rt.rep(rt.whiterockO,2),roughness:1}),asphalt:new ee({map:Ue.asphalt,roughness:.95}),trim:new ee({color:15921386,emissive:3947833,roughness:.6}),skirt:new ee({color:13150595,roughness:.95}),shingle:new ee({map:rt.shingleA,normalMap:rt.shingleN,normalScale:new re(1.5,1.5),roughness:.9}),glassDark:new ee({color:2435888,roughness:.08,metalness:.2,envMapIntensity:1.4}),win:new ee({map:Ue.win,roughness:.35}),win1:new ee({map:Ue.win1,roughness:.35,emissive:16777215,emissiveMap:Ue.win1,emissiveIntensity:.22}),slider:new ee({map:Ue.slider,roughness:.2,metalness:.1}),gblock:new ee({map:Ue.gblock,roughness:.15,metalness:.1}),gutter:new ee({color:15987178,emissive:6250587,roughness:.4}),shed2:new ee({map:Ue.shedPanel,roughness:.75}),shedLid:new ee({color:11115917,roughness:.7}),board:new ee({map:Ue.board,roughness:.95}),steelPost:new ee({color:10133411,roughness:.45,metalness:.7}),hogFrame:new ee({color:6961700,roughness:.85,metalness:.35}),hogMesh:new ee({map:Ue.mesh,color:16777215,alphaTest:.4,side:vt,roughness:.5,metalness:.15,emissive:5988452}),limeTint:null,skirtSoil:new ee({color:9403752,roughness:1,side:vt}),wood:new ee({color:5980464,roughness:.85,side:vt}),white:new ee({color:15657956,roughness:.65}),corr:new ee({color:12041922,roughness:.42,metalness:.6,bumpMap:Ue.corr,bumpScale:4,side:vt}),tank:new ee({map:Ue.tank,bumpMap:Ue.tankBump,bumpScale:3,roughness:.34,metalness:.45,envMapIntensity:1.1}),tankIn:new ee({bumpMap:Ue.tankBump,bumpScale:2.5,color:13227737,roughness:.55,metalness:.05,side:Gt,envMapIntensity:.6}),rim:new ee({color:13883611,roughness:.3,metalness:.55,envMapIntensity:1.1,side:vt}),water:new ee({color:5682109,roughness:.02,metalness:.1,transparent:!0,opacity:.24,envMapIntensity:1.4,depthWrite:!1}),poolFloor:new ee({map:Ue.caustic,color:12180189,roughness:.6,metalness:.02}),jet:new ee({color:1776670,roughness:.45}),pvc:new ee({color:15855852,roughness:.5}),valve:new ee({color:12597547,roughness:.5}),pump:new ee({color:7239037,roughness:.5,metalness:.3}),hose:new ee({color:1908513,roughness:.6}),frame:new ee({color:4868163,roughness:.6,metalness:.3}),cushion:new ee({color:15525078,roughness:.95}),teak:new ee({color:9267788,roughness:.75}),canopy:new ee({color:14857890,roughness:.95,side:vt,emissive:9067078,emissiveIntensity:.45}),terracotta:new ee({color:12085578,roughness:.9}),soil:new ee({color:4075300,roughness:1}),agave:new ee({color:8363156,roughness:.7,flatShading:!0}),grassPlant:new ee({color:10135653,roughness:.9,side:vt}),shed:new ee({color:11775395,roughness:.85}),shedRoof:new ee({color:4935250,roughness:.6,metalness:.4}),trunk:new ee({color:5062966,roughness:1}),canopyTree:new ee({vertexColors:!0,map:Ue.leaf,roughness:1,emissive:1911314,emissiveIntensity:.5}),bulb:new ee({color:16773840,emissive:16766346,emissiveIntensity:.6}),wire:new ee({color:1710618,roughness:.8}),sail:new ee({color:2792086,roughness:.9,side:vt})};function fu(i){let e=i.attributes.position,t=new Float32Array(e.count*2);for(let n=0;n<e.count;n++){let s=e.getX(n)*Se+Li,r=e.getZ(n)*Se+Ii;t[n*2]=(s-470)/940,t[n*2+1]=1-(r-940)/760}return i.setAttribute("uv",new Mt(t,2)),i}function by(i,e,t,n,s){let r=Math.max(1,Math.ceil((t-i)/Se/s)),a=Math.max(1,Math.ceil((n-e)/Se/s)),o=new Ht(1,1,r,a),c=o.attributes.position;for(let l=0;l<c.count;l++){let h=c.getX(l)+.5,u=.5-c.getY(l);c.setXYZ(l,W(i+(t-i)*h),0,j(e+(n-e)*u))}return o.userData={px0:i,py0:e,px1:t,py1:n},o}function wp(i,e){let t=i.geometry,n=t.attributes.position;for(let s=0;s<n.count;s++)n.setY(s,e(n.getX(s)*Se+Li,n.getZ(s)*Se+Ii));n.needsUpdate=!0,t.computeVertexNormals(),t.computeBoundingSphere()}function _y(i){return i.map(([e,t])=>new re(W(e),j(t)))}function Ss(i,e,t,n){let s=_y(i);s.length>2&&s[0].distanceTo(s[s.length-1])<.001&&s.pop(),jn.isClockWise(s)&&(s=s.reverse());let r=jn.triangulateShape(s,[]),a=[];for(let d of r)for(let f of[d[0],d[2],d[1]])a.push(s[f].x,t,s[f].y);let o=new dt;if(o.setAttribute("position",new Ie(a,3)),o.computeVertexNormals(),n)fu(o);else{let d=o.attributes.position,f=[];for(let m=0;m<d.count;m++)f.push(d.getX(m)/6,d.getZ(m)/6);o.setAttribute("uv",new Ie(f,2))}let c=[],l=[],h=0;for(let d=0;d<s.length;d++){let f=s[d],m=s[(d+1)%s.length],b=f.distanceTo(m);c.push(f.x,e,f.y,m.x,e,m.y,m.x,t,m.y,f.x,e,f.y,m.x,t,m.y,f.x,t,f.y),l.push(h/4,e/4,(h+b)/4,e/4,(h+b)/4,t/4,h/4,e/4,(h+b)/4,t/4,h/4,t/4),h+=b}let u=new dt;return u.setAttribute("position",new Ie(c,3)),u.setAttribute("uv",new Ie(l,2)),u.computeVertexNormals(),{top:o,side:u}}function me(i,e,t,n,s,r,a,o,c=0){let l=new q(new mt(i,e,t),n);return l.position.set(s,r,a),l.rotation.y=c,l.castShadow=l.receiveShadow=!0,(o||lt).add(l),l}function Pi(i,e,t){let n=i.attributes.uv;for(let s=0;s<n.count;s++)n.setXY(s,n.getX(s)*e,n.getY(s)*t);return i}var An={};function $i(i){return An[i]||(An[i]=new st,An[i].name=i,lt.add(An[i])),An[i]}var vr=[],Tp=i=>typeof i=="function"?i():i;function Jn(i,e,t,n=0){return vr.push([i,e,t,n]),i.position.y=tn(e,t)+Tp(n),i}var Et={},rp=(()=>{let i="jasper",e="#6a625b",t="#544c46",n=St(512,1024,(s,r,a)=>{let o=pt(i.length*31+7);s.fillStyle="#1d1a18",s.fillRect(0,0,r,a);let c=r/4,l=4;for(let h=0;h<4;h++){let u=h*c+l/2,d=c-l,f=h%2?a*.5:0;for(let[m,b]of[[0,f||a],[f,a]]){if(b-m<2)continue;let g=s.createLinearGradient(u,0,u+d,0);g.addColorStop(0,t),g.addColorStop(.5+(o()-.5)*.3,e),g.addColorStop(1,t),s.fillStyle=g,s.fillRect(u,m,d,b-m-(f&&b===f?3:0)),s.globalAlpha=.28;for(let p=0;p<30;p++){s.strokeStyle=o()<.5?t:"#ffffff",s.globalAlpha=o()<.5?.1:.04,s.lineWidth=.8+o()*2.2;let x=u+o()*d;s.beginPath(),s.moveTo(x,m);for(let _=1;_<=8;_++)s.lineTo(x+Math.sin(_*1.3+p)*3*o(),m+(b-m)*_/8);s.stroke()}s.globalAlpha=1}}},null);return{mat:new ee({map:n,roughness:.72}),fascia:new ee({color:t,roughness:.72})}})();function ws(i,e,t,n,s,r,a,o=1){let c=by(e,t,n,s,o),l=new q(c,a);return l.receiveShadow=!0,l.userData.h=r,lt.add(l),Et[i]=l,wp(l,r),a===F.ground&&fu(c),l}ws("lawn",486,1049,950,1681,_c,F.ground,1.5);ws("strip",486,940,950,1049,()=>-.25,F.ground,2);ws("walk",sc,958,Es,1681,(i,e)=>hu(e),F.ground,.75);ws("patioZone",Es,940,1395,1108,()=>-.3,F.ground,3);ws("sideNorth",486,765,574,940,()=>-.25,F.ground,3);Et.sideNorth.material=new ee({color:3421754,roughness:1});function Vh(i,e,t,n){let s=e.map(([u,d])=>new re(W(u),j(d)));jn.isClockWise(s)&&(s=s.reverse());let r=t.map(u=>{let d=u.map(([f,m])=>new re(W(f),j(m)));return jn.isClockWise(d)||(d=d.reverse()),d}),a=jn.triangulateShape(s,r),o=s.concat(...r),c=[];for(let u of a)for(let d of[u[0],u[2],u[1]]){let f=o[d];c.push(f.x,n(f.x*Se+Li,f.y*Se+Ii),f.y)}let l=new dt;if(l.setAttribute("position",new Ie(c,3)),l.computeVertexNormals(),l.attributes.normal.getY(0)<0){let u=l.attributes.position.array;for(let d=0;d<u.length;d+=9)for(let f=0;f<3;f++){let m=u[d+3+f];u[d+3+f]=u[d+6+f],u[d+6+f]=m}l.computeVertexNormals()}fu(l);{let u=l.attributes.uv,d=568/940;for(let f=0;f<u.count;f++)u.getX(f)<d&&u.setX(f,d)}let h=new q(l,F.ground);h.receiveShadow=!0,lt.add(h),Et[i]=h;{let u=[];for(let m=0;m<s.length;m++){let b=s[m],g=s[(m+1)%s.length],p=n(b.x*Se+Li,b.y*Se+Ii),x=n(g.x*Se+Li,g.y*Se+Ii);u.push(b.x,p,b.y,g.x,x,g.y,g.x,x-2.5,g.y,b.x,p,b.y,g.x,x-2.5,g.y,b.x,p-2.5,b.y)}let d=new dt;d.setAttribute("position",new Ie(u,3)),d.computeVertexNormals();let f=new q(d,F.skirtSoil);f.receiveShadow=!0,h.add(f)}return h}function xy(){for(let c of["pUp","pPool","pTurf","edgeStrip"])Et[c]&&(lt.remove(Et[c]),Et[c].geometry.dispose(),delete Et[c]);let i=$n[1],e=5.5,t=(c,l)=>{let h=Math.sqrt(Math.max(c*c-(l-Ze[1])**2,1));return{dx:h,aR:Math.atan2(l-Ze[1],h),aL:Math.atan2(l-Ze[1],-h)}},n=Array.from({length:56},(c,l)=>{let h=l/56*kt;return[Ze[0]+Math.cos(h)*73.5,Ze[1]+Math.sin(h)*73.5]}),s=Ce.step2>=gt?e:0,r=Ce.step1>=gt?e:0,a=t(Ci+r,It-r),o=t(Ci-r,It+r);Vh("pUp",[[i,1108],[wn,1108],[wn,It-r],[Ze[0]+a.dx,It-r],...cc(a.aR,a.aL,Ci+r),[Ze[0]-a.dx,It-r],[i,It-r]],[],()=>ga()),Vh("pPool",[[i,It+r],[Ze[0]-o.dx,It+r],...cc(o.aL,o.aR,Ci-r),[Ze[0]+o.dx,It+r],[wn,It+r],[wn,Ji-s],[i,Ji-s]],[n],()=>ac());{F.limeChips||(F.limeChips=new ee({color:16777215,roughness:.9}),gc(F.limeChips,"lime"));let c=Et.pPool.geometry,l=c.attributes.position,h=c.attributes.uv;for(let m=0;m<l.count;m++)h.setXY(m,l.getX(m)/3,l.getZ(m)/3);h.needsUpdate=!0,Et.pPool.material=F.limeChips,Et.peaRing&&(lt.remove(Et.peaRing),Et.peaRing.geometry.dispose());let u=new Ro(70/Se,Ep/Se,96,1);u.rotateX(-Math.PI/2);let d=u.attributes.uv,f=u.attributes.position;for(let m=0;m<f.count;m++)d.setXY(m,f.getX(m)/1.5,f.getZ(m)/1.5);F.pea||(Ue.pea.wrapS=Ue.pea.wrapT=Yn,F.pea=new ee({map:Ue.pea,roughness:1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),Et.peaRing=new q(u,F.pea),Et.peaRing.position.set(W(Ze[0]),ac()+.01,j(Ze[1])),Et.peaRing.receiveShadow=!0,lt.add(Et.peaRing)}{let c=Et.pUp.geometry,l=c.attributes.position,h=c.attributes.uv;for(let u=0;u<l.count;u++)h.setXY(u,l.getX(u)/3,l.getZ(u)/3);h.needsUpdate=!0,Et.pUp.material=F.limeChips}Vh("pTurf",[[i,Ji+s],[wn,Ji+s],[wn,1681],[i,1681]],[],(c,l)=>Qh(l)),Et.turfTop&&(lt.remove(Et.turfTop),Et.turfTop.geometry.dispose(),Et.turfTop=null);{let c=Et.pTurf.geometry,l=c.attributes.position,h=c.attributes.uv;for(let b=0;b<l.count;b++)h.setXY(b,l.getX(b)/3,l.getZ(b)/3);h.needsUpdate=!0,Et.pTurf.material=F.limeChips;let u=nn.turf.map(([b,g])=>[b,g]),d=Ss(u,0,0,!1).top,f=d.attributes.position,m=new Float32Array(f.count*2);for(let b=0;b<f.count;b++){let g=f.getX(b)*Se+Li,p=f.getZ(b)*Se+Ii;f.setY(b,Qh(p)+.04),m[b*2]=f.getX(b)/5,m[b*2+1]=f.getZ(b)/5}d.setAttribute("uv",new Mt(m,2)),d.computeVertexNormals(),F.turf||(F.turf=new ee({color:16777215,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),gc(F.turf,"turf")),Et.turfTop=new q(d,F.turf),Et.turfTop.receiveShadow=!0,lt.add(Et.turfTop)}ws("edgeStrip",wn,1108,1394.6,1681,Er,F.ground,.75)}{let i=new cr([[-900,-900],[3e3,-900],[3e3,1681],[1394.6,1681],[1394.6,940],[486,940],[486,1681],[-900,1681]].map(([r,a])=>new re(W(r),j(a)))),e=new sa(i);e.rotateX(Math.PI/2);let t=e.attributes.position;for(let r=0;r<t.count;r++)t.setY(r,-.32);let n=e.attributes.uv;for(let r=0;r<n.count;r++)n.setXY(r,t.getX(r)/14,t.getZ(r)/14);e.computeVertexNormals();let s=new q(e,F.outside);if(s.receiveShadow=!0,s.geometry.attributes.normal.getY(0)<0){let r=e.index.array;for(let a=0;a<r.length;a+=3){let o=r[a+1];r[a+1]=r[a+2],r[a+2]=o}e.computeVertexNormals()}lt.add(s)}var Ap=(i,e)=>{let t=i>=486&&i<=1394.6?uu(mn(i,486,1394))-.3:-.32,n=mn((e-1681)/150,0,1);return t+(-.32-t)*n-Math.pow(mn((e-1690)/Se,0,110),1.1)*.06};{let i=ws("greenbelt",-900,1681,3e3,4600,Ap,F.brush,5),e=i.geometry.attributes.position,t=new Float32Array(e.count*2);for(let n=0;n<e.count;n++)t[n*2]=e.getX(n)/12,t[n*2+1]=e.getZ(n)/12;i.geometry.setAttribute("uv",new Mt(t,2))}{let i=Ss(nn.patio,-.6,0,!1),e=j(955),t=1/96;for(let c of[i.top,i.side]){let l=c.attributes.position;for(let h=0;h<l.count;h++)l.getY(h)>-.01&&l.setY(h,-Math.max(0,l.getZ(h)-e)*t);l.needsUpdate=!0,c.computeVertexNormals()}let n=new q(i.top,F.concrete),s=new q(i.side,F.concrete);n.receiveShadow=s.receiveShadow=!0,lt.add(n,s);{let c=j(958),l=j(1108),h=l-c,u=new q(new Ht(.03,h),new ee({color:7167311,roughness:1}));u.rotation.x=-Math.PI/2+Math.atan(t),u.position.set(W(1165),-((c+l)/2-e)*t+.004,(c+l)/2),lt.add(u)}let r=Ss(nn.wedge,-.6,.04,!1);{let c=r.top.attributes.uv,l=r.top.attributes.position;for(let h=0;h<c.count;h++)c.setXY(h,l.getX(h)/1.83,l.getZ(h)/6)}let a=new q(r.top,rp.mat),o=new q(r.side,rp.fascia);a.receiveShadow=!0,o.castShadow=!0,lt.add(a,o)}var yy=14.85/Se,eu=11/Se,vy=new _s(1,Zi,eu,2,.035),Zn=new Ei(vy,F.block,3e3);Zn.castShadow=Zn.receiveShadow=!0;Zn.instanceMatrix.setUsage(Pf);lt.add(Zn);var ap=($n[0]+$n[1])/2,tu=[{key:"west",name:"Walkway west wall",path:[[955.34,958],[955.34,1679]],aName:"walkway",bName:"lawn",flip:!0},{key:"east",name:"Walkway east wall",path:[[ap,1108.35],[ap,1679]],aName:"walkway",bName:"terrace side"},{key:"step",name:"Pad to pool wall",path:[[$n[1],It],[uy,It],...cc(fy,py),[dy,It],[wn,It]],aName:"pool side",bName:"pad side",need:()=>Ce.step1>=gt},{key:"cross",name:"Pool to turf wall",path:[[$n[1],Ji],[wn,Ji]],aName:"turf side",bName:"pool side",need:()=>Ce.step2>=gt}];for(let i of tu){i.segs=[];let e=0;for(let t=0;t<i.path.length-1;t++){let[n,s]=i.path[t],[r,a]=i.path[t+1],o=Math.hypot(r-n,a-s);i.segs.push({ax:n,ay:s,dx:(r-n)/o,dy:(a-s)/o,s0:e,L:o}),e+=o}i.len=e}function My(i,e){let t=i.segs[i.segs.length-1];for(let s of i.segs)if(e<=s.s0+s.L){t=s;break}let n=mn(e-t.s0,0,t.L);return{x:t.ax+t.dx*n,y:t.ay+t.dy*n,tx:t.dx,ty:t.dy}}var pu=new A(0,1,0),lc=new Xe,hc=new Qt,uc=new A,dc=new A,op=new Pe;function Ey(){let i=Math.sqrt(Ci*Ci-(It-Ze[1])**2),e=Math.atan2(It-Ze[1],-i),t=Math.atan2(It-Ze[1],i);return[[$n[1],It],[Ze[0]-i,It],...cc(e,t,Ci),[Ze[0]+i,It],[wn,It]]}function Sy(i){i.segs=[];let e=0;for(let t=0;t<i.path.length-1;t++){let[n,s]=i.path[t],[r,a]=i.path[t+1],o=Math.hypot(r-n,a-s);i.segs.push({ax:n,ay:s,dx:(r-n)/o,dy:(a-s)/o,s0:e,L:o}),e+=o}i.len=e}function wy(){{let n=tu.find(s=>s.key==="step");n.path=Ey(),Sy(n)}let i=0,e=[],t=12;for(let n of tu){let s=!n.need||n.need(),r={r:n,count:0,maxFace:0,maxSide:"",len:n.len/Se,on:s};if(!s){e.push(r);continue}let a=u=>{let d=My(n,u),f=-d.ty,m=d.tx,b=n.flip?-1:1,g=tn(d.x+f*t*b,d.y+m*t*b),p=tn(d.x-f*t*b,d.y-m*t*b);return{p:d,A:g,B:p,top:Math.ceil((Math.max(g,p)-.04)/Zi),bot:Math.floor((Math.min(g,p)+.04)/Zi)-1}},o=yy*Se,c=1e9,l=-1e9;for(let u=0;u<=n.len;u+=o/2){let d=a(u);c=Math.min(c,d.bot),l=Math.max(l,d.top)}let h=pt(n.key.length*97);for(let u=c;u<l;u++){let d=(u%2+2)%2?o/2:0;for(let f=-d;f<n.len;f+=o){let m=Math.max(f,0),b=Math.min(f+o,n.len);if(b-m<o*.18)continue;let g=(m+b)/2,p=a(g);if(u<p.bot||u>=p.top)continue;let x=Math.max(p.top*Zi-Math.min(p.A,p.B),0);x>r.maxFace&&(r.maxFace=x,r.maxSide=p.A<p.B?n.aName:n.bName);let _=(b-m)/Se-.012,v=(h()-.5)*.03,w=n.flip?-1:1,M=(p.A>=p.B?1:-1)*w,S=u===p.top-1&&p.top-p.bot>1,R=(u-p.bot)*.75/12*M-(S?1.25/12*M:0),y=v+R;dc.set(W(p.p.x)-p.p.ty*y,u*Zi+Zi/2,j(p.p.y)+p.p.tx*y),hc.setFromAxisAngle(pu,Math.atan2(-p.p.ty,p.p.tx)),uc.set(_,S?.9:1,S?(eu+1/12)/eu:1),lc.compose(dc,hc,uc),Zn.setMatrixAt(i,lc);let E=.9+h()*.16;op.setRGB(E,E*(.98+h()*.03),E*(.95+h()*.05)),Zn.setColorAt(i,op),i++,r.count++}}e.push(r)}return Zn.count=i,Zn.instanceMatrix.needsUpdate=!0,Zn.instanceColor&&(Zn.instanceColor.needsUpdate=!0),Zn.computeBoundingSphere(),e}var cp=["#c9b3a3","#b9a99b","#a39a92","#d4c5b6","#9da3a8","#c2a597","#8f8a86","#e0d6ca","#b7aea6","#a9998c","#cfc0b0"].map(i=>new Pe(i)),Ty=[0,1,2].map(i=>{let e=new lr(1,2);return e.deleteAttribute("uv"),e.deleteAttribute("normal"),lu(fh(e),.28,1.1,17+i*31,1)}),Ay=new ee({color:16777215,roughness:.55,metalness:.02}),nu=Ty.map(i=>{let e=new Ei(i,Ay,1400);return e.castShadow=e.receiveShadow=!0,lt.add(e),e}),Ry=(()=>{let i=pt(909),e=[],t=8,n=new Map,s=(c,l)=>c+","+l,r=(c,l,h)=>{let u=Math.floor(c/t),d=Math.floor(l/t);for(let f=u-2;f<=u+2;f++)for(let m=d-2;m<=d+2;m++)for(let b of n.get(s(f,m))||[])if(Math.hypot(b.px-c,b.py-l)<(b.ru+h)*.92)return!1;return!0},a=c=>{e.push(c);let l=s(Math.floor(c.px/t),Math.floor(c.py/t));n.has(l)||n.set(l,[]),n.get(l).push(c)},o=[{edge:c=>1108.6-(c-1036)*(2.35/329),depth:c=>(37.6-(c-1036)*(3.7/329))/2+3,dir:1},{edge:()=>1679,depth:()=>17,dir:-1}];for(let c of o)for(let l=0;l<9e3;l++){let h=$n[1]+2+i()*(wn-$n[1]-4),u=c.depth(h),d=Math.pow(i(),1.25)*1.25;if(d>1&&i()>.25)continue;let f=c.edge(h)+c.dir*d*u,m=(3.2-2*Math.min(d,1))*(.7+i()*.45),b=m/12*Se;r(h,f,b)&&a({px:h,py:f,ru:b,r:m/12,v:Math.floor(i()*3),rot:i()*kt,sx:1+i()*.35,sz:.75+i()*.3,sy:.42+i()*.18,c:cp[Math.floor(i()*cp.length)].clone().offsetHSL(0,0,(i()-.5)*.08)})}return e})();function Cy(){let i=[0,0,0];for(let e of Ry){let t=nu[e.v],n=i[e.v]++,s=tn(e.px,e.py);dc.set(W(e.px),s+e.r*e.sy*.45,j(e.py)),hc.setFromAxisAngle(pu,e.rot),uc.set(e.r*e.sx,e.r*e.sy,e.r*e.sz),lc.compose(dc,hc,uc),t.setMatrixAt(n,lc),t.setColorAt(n,e.c)}nu.forEach((e,t)=>{e.count=i[t],e.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.needsUpdate=!0),e.computeBoundingSphere()})}var fc=new st;lt.add(fc);var lp=new ee({color:2829101,roughness:.55,metalness:.6});function hp(i,e,t,n,s=.03){let r=i.length,a=e?r:r-1;for(let o=0;o<a;o++){let[c,l]=i[o],[h,u]=i[(o+1)%r],d=Math.hypot(h-c,u-l);if(d<.5)continue;let f=Math.max(1,Math.ceil(d/10)),m=(h-c)/d,b=(u-l)/d;for(let _=0;_<f;_++){let v=_/f*d,w=(_+1)/f*d,M=(v+w)/2,S=c+m*M,R=l+b*M,[y,E]=t(S,R,-b,m),I=new q(new mt(s,y-E,(w-v)/Se+.004),n);I.position.set(W(S),(y+E)/2,j(R)),I.rotation.y=Math.atan2(m,b),I.castShadow=I.receiveShadow=!0,fc.add(I)}let[g,p]=t(h,u,-b,m),x=new q(new mt(s*1.6,g-p,s*1.6),n);x.position.set(W(h),(g+p)/2,j(u)),x.rotation.y=Math.atan2(m,b),fc.add(x)}}function Py(){fc.clear();let i=[];for(let t=1108;t<=1681;t+=573/40)i.push([wn,t]);hp(i,!1,(t,n)=>{let s=oc(t-4,n),r=Er(t+4,n);return[Math.ceil((Math.max(s,r)+.5*gt)/Zi)*Zi,Math.min(s,r)-.35]},lp);let e=nn.turf;hp([[e[0][0],e[0][1]],[e[1][0],e[1][1]],[e[2][0],e[2][1]],[e[3][0],e[3][1]]],!0,(t,n)=>{let s=oc(t,n);return[s+.4*gt,s-.3]},lp,.02)}var iu=new st;lt.add(iu);var Ly=new _s(23*gt,.16,23*gt,2,.03),Rp=new st;lt.add(Rp);var $o=new st;lt.add($o);function Iy(i,e,t,n,s){let a=Ss(i,0,0,!1).top,o=a.attributes.position,c=new Float32Array(o.count*2),l=xr[t].span,h=Math.cos(n),u=Math.sin(n);for(let m=0;m<o.count;m++){o.setY(m,e);let b=o.getX(m),g=o.getZ(m);c[m*2]=(b*h+g*u)/l,c[m*2+1]=(-b*u+g*h)/l}a.setAttribute("uv",new Mt(c,2)),a.computeVertexNormals();let d=new ee({map:xr[t].tex,bumpMap:xr[t].bump||null,bumpScale:2.2,roughness:.85,polygonOffset:!0,polygonOffsetFactor:-2-s,polygonOffsetUnits:-2-s}),f=new q(a,d);return f.receiveShadow=!0,f.renderOrder=s,f}var Dy=()=>Ci+5.5;function ec(i){let e=1057+i,t=1344-i,n=1151+i,s=hy-i,r=Dy()+i,a=Math.sqrt(r*r-(Ze[1]-s)**2),o=Math.atan2(s-Ze[1],a),c=Math.atan2(s-Ze[1],-a),l=[];for(let h=1;h<24;h++){let u=o+(c-o)*h/24;l.push([Ze[0]+Math.cos(u)*r,Ze[1]+Math.sin(u)*r])}return[[e,n],[t,n],[t,s],[Ze[0]+a,s],...l,[Ze[0]-a,s],[e,s]]}var up={hs46:["#564641","#714e45","#6c4b41","#614940","#644f47","#6d544c"]},Ny={hs46:4405042},Uy=new _s(1,.06,1,1,.012);function Oy(i){let e=new st,t=ga()+.012,n=new ee({color:Ny[i],roughness:1}),s=ec(0),r=ec(8*gt*Se),a=new q(Ss(s,0,0,!1).top,n);a.geometry.translate(0,t,0),a.receiveShadow=!0,e.add(a);let o=ec(4*gt*Se).map(([k,L])=>[W(k),j(L)]),c=o.length,l=4*gt,h=8*gt,u=.25*gt,d=k=>{let L=o[(k-1+c)%c],U=o[k],D=o[(k+1)%c],G=Math.atan2(U[1]-L[1],U[0]-L[0]),z=Math.atan2(D[1]-U[1],D[0]-U[0]),V=Math.abs(z-G);return V>Math.PI&&(V=kt-V),V},f=o.map((k,L)=>d(L)>.4),m=[],b={},g={},p=[];f.forEach((k,L)=>{k&&p.push(L)}),p.length||(p=[0]);for(let k=0;k<p.length;k++){let L=p[k],U=p[(k+1)%p.length],D=[],G=L;do D.push(o[G]),G=(G+1)%c;while(G!==U);D.push(o[U]);let z=[0];for(let ie=1;ie<D.length;ie++)z.push(z[ie-1]+Math.hypot(D[ie][0]-D[ie-1][0],D[ie][1]-D[ie-1][1]));let V=z[z.length-1],Q=Math.max(1,Math.floor((V-h)/(l+u))),te=(V-Q*(l+u))/2;b[U]=te,g[L]=te;for(let ie=0;ie<Q;ie++){let Z=te+(ie+.5)*(l+u),ne=1;for(;ne<z.length-1&&z[ne]<Z;)ne++;let ue=(Z-z[ne-1])/(z[ne]-z[ne-1]||1),we=D[ne-1][0]+(D[ne][0]-D[ne-1][0])*ue,ve=D[ne-1][1]+(D[ne][1]-D[ne-1][1])*ue,De=Math.atan2(D[ne][1]-D[ne-1][1],D[ne][0]-D[ne-1][0]);m.push([we,ve,De,l,h])}}let x=up[i],_=pt(i.length*7+3);o.forEach((k,L)=>{if(!f[L])return;let U=o[(L-1+c)%c],D=o[(L+1)%c],G=[k[0]-U[0],k[1]-U[1]],z=Math.hypot(...G),V=[D[0]-k[0],D[1]-k[1]],Q=Math.hypot(...V);G[0]/=z,G[1]/=z,V[0]/=Q,V[1]/=Q;let te=[W(s[L][0]),j(s[L][1])],ie=[W(r[L][0]),j(r[L][1])],Z=Te=>{let et=-Te[1],Be=Te[0];return Math.sign((te[0]-k[0])*et+(te[1]-k[1])*Be)||1},ne=(b[L]??h/2)-u/2,ue=(g[L]??h/2)-u/2,we=[k[0]-G[0]*ne,k[1]-G[1]*ne],ve=[k[0]+V[0]*ue,k[1]+V[1]*ue],De=Z(G),ke=Z(V),de=[-G[1]*De,G[0]*De],ge=[-V[1]*ke,V[0]*ke],B=h/2-u/2,Ge=[[we[0]+de[0]*B,we[1]+de[1]*B],te,[ve[0]+ge[0]*B,ve[1]+ge[1]*B],[ve[0]-ge[0]*B,ve[1]-ge[1]*B],ie,[we[0]-de[0]*B,we[1]-de[1]*B]].map(([Te,et])=>[Te*Se+Li,et*Se+Ii]),Ee=Ss(Ge,0,.05,!1),Oe=new ee({color:x[Math.floor(_()*x.length)],roughness:.85});for(let Te of[Ee.top,Ee.side]){let et=new q(Te,Oe);et.position.y=t-.012,et.receiveShadow=!0,e.add(et)}});let v=up[i],w=new ee({color:16777215,roughness:.85}),M=new Ei(Uy,w,m.length),S=pt(i.length*13+m.length),R=new Xe,y=new Qt,E=new A,I=new A,O=new Pe;return m.forEach(([k,L,U,D,G],z)=>{I.set(k,t-.012,L),y.setFromAxisAngle(pu,-U),E.set(D-u,1,G-u),R.compose(I,y,E),M.setMatrixAt(z,R),O.set(v[Math.floor(S()*v.length)]),M.setColorAt(z,O)}),M.receiveShadow=!0,e.add(M),e}var dp="hs46";function Fy(){$o.clear(),$o.add(Oy(dp)),$o.add(Iy(ec(8*gt*Se),ga()+.016,"hb_"+dp,0,2))}for(let i of nn.pavers){let e=(i[0]+i[2])/2,t=(i[1]+i[3])/2;if(i[0]>975&&i[0]<990){let n=new q(Ly,F.stone);n.position.set(W((sc+Es)/2),0,j(t)),n.rotation.y=(pt(Math.round(t))()-.5)*.02,n.castShadow=n.receiveShadow=!0,iu.add(n),Jn(n,(sc+Es)/2,t,.05)}else{let n=(i[2]-i[0])/Se,s=(i[3]-i[1])/Se,r=new q(new _s(n,.14,s,2,.025),F.stone);r.position.set(W(e),0,j(t)),r.castShadow=r.receiveShadow=!0,i[0]>1050?(Rp.add(r),Jn(r,e,t,.04)):(iu.add(r),Jn(r,e,t,.05))}}Ue.rosemary=St(256,256,(i,e,t)=>{let n=pt(71);i.clearRect(0,0,e,t),i.fillStyle="rgba(112,126,98,0.012)",i.fillRect(0,0,e,t);let s=["#56664c","#66765a","#78876a","#8a977b","#a3ae94","#5e6e53"];for(let r=0;r<16;r++){let a=30+n()*196,o=250,c=-Math.PI/2+(n()-.5)*.7,l=150+n()*90;i.lineCap="round";for(let h=0;h<l;h+=7){let u=a+Math.cos(c)*7,d=o+Math.sin(c)*7;if(i.strokeStyle="#4a4234",i.lineWidth=1.6,i.beginPath(),i.moveTo(a,o),i.lineTo(u,d),i.stroke(),a=u,o=d,c+=(n()-.5)*.12,h>25)for(let f of[-1,1]){let m=c+f*(.9+n()*.4),b=9+n()*8;i.strokeStyle=s[Math.floor(n()*s.length)],i.lineWidth=2.6,i.beginPath(),i.moveTo(a,o),i.lineTo(a+Math.cos(m)*b,o+Math.sin(m)*b),i.stroke()}}}},null);Ue.boxwood=St(256,256,(i,e,t)=>{let n=pt(72);i.clearRect(0,0,e,t),i.fillStyle="rgba(78,108,56,0.012)",i.fillRect(0,0,e,t);let s=["#3a5530","#476636","#557740","#638847","#77994f","#41603a"];for(let r=0;r<520;r++){let a=n()*Math.PI*2,o=Math.sqrt(n())*118,c=128+Math.cos(a)*o,l=128+Math.sin(a)*o;i.fillStyle=s[Math.floor(n()*s.length)],i.beginPath(),i.ellipse(c,l,4+n()*4,2.5+n()*2.5,n()*Math.PI,0,Math.PI*2),i.fill()}},null);var Cp={},Pp={};for(let i of["rosemary","boxwood"])Cp[i]=new ee({map:Ue[i],alphaTest:.42,side:vt,vertexColors:!0,roughness:.92}),Pp[i]=new qr({depthPacking:rh,map:Ue[i],alphaTest:.42,side:vt});function su(i,e,t,n){let s=pt(n),r=[],a=[],o=[],c=[],l=[],h=e==="rosemary"?new Pe(16777215):new Pe(13096120),u=new A(0,1,0),d=new A,f=new A,m=new A,b=new A,g=new A;for(let[v,w,M,S,R]of i){let y=R/2,E=w+y*.92,I=Math.round((e==="rosemary"?260:150)*S*S*(R/2)+40);l.push([v,E-y*.1,M,S*.72,y*.72]);for(let O=0;O<I;O++){if(d.set(s()*2-1,s()*1.6-.45,s()*2-1),d.lengthSq()<1e-4)continue;d.normalize();let k=.5+.5*Math.sqrt(s());g.set(v+d.x*S*k,Math.max(w+.05,E+d.y*y*k),M+d.z*S*k);let L=(e==="rosemary"?.52:.6)*(.75+s()*.5),U=L*(e==="rosemary"?.7:1),D=L,G=s()*Math.PI*2;f.set(Math.cos(G),0,Math.sin(G)),e==="rosemary"?m.copy(u).addScaledVector(d,.35).normalize():m.set(s()-.5,s()-.5,s()-.5).normalize(),f.sub(m.clone().multiplyScalar(f.dot(m))).normalize(),b.copy(d).addScaledVector(u,.35).normalize();let z=.58+.42*k*(.55+.45*(d.y*.5+.5)),V=h.clone().offsetHSL((s()-.5)*.03,(s()-.5)*.08,(s()-.5)*.06).multiplyScalar(z),Q=[[-.5,0],[.5,0],[.5,1],[-.5,1]].map(([te,ie])=>g.clone().addScaledVector(f,te*U).addScaledVector(m,(ie-(e==="rosemary"?.25:.5))*D));for(let te of[0,1,2,0,2,3]){let ie=Q[te];r.push(ie.x,ie.y,ie.z),a.push(b.x,b.y,b.z),o.push(V.r,V.g,V.b),c.push(te===0||te===3?0:1,te===2||te===3?1:0)}}}let p=new dt;p.setAttribute("position",new Ie(r,3)),p.setAttribute("normal",new Ie(a,3)),p.setAttribute("color",new Ie(o,3)),p.setAttribute("uv",new Ie(c,2));let x=new q(p,Cp[e]);x.customDepthMaterial=Pp[e],x.castShadow=!0,x.receiveShadow=!0,t.add(x);let _=new ee({color:e==="rosemary"?4082230:2307612,roughness:1});for(let[v,w,M,S,R]of l){let y=new q(new ci(1,12,8),_);y.scale.set(S,R,S),y.position.set(v,w,M),y.receiveShadow=!0,t.add(y)}return x}var ye=new st;lt.add(ye);var bn=580,ys=1296,Sn=376,Hn=950,kn=8.7;{let s=function(M,S,R,y,E,I,O){let k=Math.hypot(R-M,y-S)/Se,L=new Ht(k,i-.05);Pi(L,k/O,(i-.05)/O);let U=new q(L,I);if(U.castShadow=U.receiveShadow=!0,U.position.set(W((M+R)/2),-.3+(i-.05)/2,j((S+y)/2)),U.rotation.y=E,ye.add(U),I===F.siding){let D=new q(new Ht(k,1.1),F.skirt);D.position.set(U.position.x+Math.sin(E)*.01,.25,U.position.z+Math.cos(E)*.01),D.rotation.y=E,D.receiveShadow=!0,ye.add(D)}return U},a=function(M,S,R,y){let I=W(M)-1.2,O=W(R)+1.2,k=j(S)-1.2,L=j(y)+1.2,U=O-I>=L-k,D=(U?L-k:O-I)/2,G=D*4/12,z=kn-.25,V=z+G,Q=[],te=[],ie=Math.hypot(D,G),Z=(de,ge,B,Ge)=>{Q.push(...de,...ge,...B,...de,...B,...Ge),te.push(de[0]/3+de[2]/3,0,ge[0]/3+ge[2]/3,0,B[0]/3+B[2]/3,ie/3,de[0]/3+de[2]/3,0,B[0]/3+B[2]/3,ie/3,Ge[0]/3+Ge[2]/3,ie/3)},ne=(de,ge,B)=>{Q.push(...de,...ge,...B),te.push(de[0]/3+de[2]/3,0,ge[0]/3+ge[2]/3,0,B[0]/3+B[2]/3,ie/3)};if(U){let de=(k+L)/2,ge=I+D,B=O-D;Z([I,z,L],[O,z,L],[B,V,de],[ge,V,de]),Z([O,z,k],[I,z,k],[ge,V,de],[B,V,de]),ne([I,z,k],[I,z,L],[ge,V,de]),ne([O,z,L],[O,z,k],[B,V,de])}else{let de=(I+O)/2,ge=k+D,B=L-D;Z([O,z,L],[O,z,k],[de,V,ge],[de,V,B]),Z([I,z,k],[I,z,L],[de,V,B],[de,V,ge]),ne([O,z,k],[I,z,k],[de,V,ge]),ne([I,z,L],[O,z,L],[de,V,B])}let ue=new dt;ue.setAttribute("position",new Ie(Q,3)),ue.setAttribute("uv",new Ie(te,2)),ue.computeVertexNormals();let we=new q(ue,F.shingle);we.castShadow=we.receiveShadow=!0,ye.add(we);let ve=(I+O)/2,De=(k+L)/2;for(let[de,ge,B,Ge]of[[O-I,.08,ve,L],[O-I,.08,ve,k],[.08,L-k,I,De],[.08,L-k,O,De]])me(de,.55,ge,F.trim,B,z-.2,Ge,ye);let ke=new q(new Ht(O-I,L-k),F.trim);ke.rotation.x=Math.PI/2,ke.position.set(ve,z-.45,De),ye.add(ke)},o=function(M,S,R,y,E,I,O,k){let U=.3333333333333333,D=W(M)-E,G=W(R)+I,z=j(S)-1.2,V=j(y)+1.2,Q=(z+V)/2,te=kn-.25,ie=te+(Q-z)*U,Z=Math.hypot(Q-z,ie-te),ne=[],ue=[],we=(ge,B,Ge,Ee)=>{ne.push(...ge,...B,...Ge,...ge,...Ge,...Ee),ue.push(ge[0]/3,0,B[0]/3,0,Ge[0]/3,Z/3,ge[0]/3,0,Ge[0]/3,Z/3,Ee[0]/3,Z/3)};we([G,te,z],[D,te,z],[D,ie,Q],[G,ie,Q]),we([D,te,V],[G,te,V],[G,ie,Q],[D,ie,Q]);let ve=new dt;if(ve.setAttribute("position",new Ie(ne,3)),ve.setAttribute("uv",new Ie(ue,2)),ve.computeVertexNormals(),ve.attributes.normal.getY(0)<0){let ge=ve.attributes.position;for(let B=0;B<ge.count;B+=3)for(let Ge of[0,1,2]){let Ee=ge.getComponent(B+1,Ge);ge.setComponent(B+1,Ge,ge.getComponent(B+2,Ge)),ge.setComponent(B+2,Ge,Ee)}ve.computeVertexNormals()}let De=new q(ve,F.shingle);De.castShadow=De.receiveShadow=!0,ye.add(De),F.soffitUnder||(F.soffitUnder=new ee({color:13225156,emissive:9277577,roughness:.9,side:Gt}));let ke=new q(ve,F.soffitUnder);ke.position.y=-.12,ye.add(ke);let de=(D+G)/2;for(let ge of[z,V])me(G-D,.55,.08,F.trim,de,te-.2,ge,ye);for(let[ge,B]of[[z,-1],[V,1]]){let Ge=B>0&&k?W(k):G,Ee=(D+Ge)/2,Oe=me(Ge-D,.42,.4,F.gutter,Ee,te-.24,ge+B*.24,ye);Oe.castShadow=!0,me(Ge-D,.05,.06,F.gutter,Ee,te-.04,ge+B*.42,ye)}F.ridgeCap||(F.ridgeCap=new ee({color:3882046,roughness:.9})),me(G-D,.1,.7,F.ridgeCap,de,ie+.02,Q,ye),F.soffit||(F.soffit=new ee({color:14080722,emissive:9277577,roughness:.9}));{let ge=W(M),B=W(R),Ge=new q(new Ht(B-ge,V-z),F.soffit);Ge.rotation.x=Math.PI/2,Ge.position.set((ge+B)/2,te-.45,Q),ye.add(Ge)}F.gableEnd||(F.gableEnd=F.siding.clone(),F.gableEnd.side=vt);for(let[ge,B,Ge]of[["w",D,W(M)],["e",G,W(R)]]){if(!O.includes(ge))continue;let Ee=j(S),Oe=j(y),Te=te+(Ee-z)*U,et=kn-.35,Be=[Ee,et,Oe,et,Oe,Te,Ee,et,Oe,Te,Q,ie-.05,Ee,et,Q,ie-.05,Ee,Te],P=[],T=[];for(let se=0;se<Be.length;se+=2)P.push(Ge+(ge==="w"?-.02:.02),Be[se+1],Be[se]),T.push(Be[se]/4,Be[se+1]/4);let Y=new dt;Y.setAttribute("position",new Ie(P,3)),Y.setAttribute("uv",new Ie(T,2)),Y.computeVertexNormals();let le=new q(Y,F.gableEnd);le.castShadow=le.receiveShadow=!0,ye.add(le);let ae=ge==="w"?-1:1;me(.12,.42,Oe-Ee,F.trim,Ge+ae*.08,te-.05,(Ee+Oe)/2,ye),me(.12,1.25,1.9,F.trim,Ge+ae*.07,ie-2.3,Q,ye),F.louver||(F.louver=new ee({color:3817276,roughness:.8}));for(let se=0;se<5;se++)me(.06,.09,1.6,F.louver,Ge+ae*.13,ie-2.3-.45+se*.22,Q,ye);for(let[se,Le]of[[z,Q],[V,Q]]){if(ge==="e"&&se===V&&O.includes("e")&&I===0)continue;let Me=Math.hypot(Le-se,ie-te);F.rake||(F.rake=new ee({color:15921386,emissive:7040102,roughness:.6}));let Ae=new q(new mt(.1,.5,Me),F.rake);Ae.position.set(B,(te+ie)/2-.18,(se+Le)/2),Ae.rotation.x=-Math.atan2(ie-te,Le-se),ye.add(Ae)}}},i=kn+.35,e=480,t=875,n=967;s(bn,Hn,ys,Hn,0,F.siding,4),s(ys,e,ys,Hn,Math.PI/2,F.siding,4),s(bn,e,bn,Hn,-Math.PI/2,F.siding,4),s(bn,Sn,bn,e,-Math.PI/2,F.siding,4),s(bn,Sn,t,Sn,Math.PI,F.siding,4);let r=e+72;s(t,Sn,t,r,Math.PI/2,F.siding,4),s(n,e,ys,e,Math.PI,F.stoneWall,8),s(t,r,n,r,Math.PI,F.siding,4),s(n,e,n,r,-Math.PI/2,F.siding,4),me(.36,kn-.9,.36,F.trim,W(n)-.1,-.3+(kn-.9)/2,j(e)+.1,ye);{let M=(y,E,I)=>{let O=(E-y)/Se,k=.45,L=me(O,i-.45,k,F.stoneWall,W((y+E)/2),-.3+(i-.45)/2,j(Sn)-k/2+.12,ye);if(Pi(L.geometry,O/8,(i-.45)/8),I){let U=me(.45,i-.45,I,F.stoneWall,W(y)-.1,-.3+(i-.45)/2,j(Sn)+I/2-.1,ye);Pi(U.geometry,I/8,(i-.45)/8)}};M(bn,612,1.4),M(842,t,0);let S=St(256,64,(y,E,I)=>{y.clearRect(0,0,E,I),y.fillStyle="#2b2b2b",y.font="italic 44px Georgia,serif",y.textAlign="center",y.textBaseline="middle",y.fillText("7605",E/2,I/2+2)},null),R=new q(new Ht(1.6,.4),new ee({map:S,transparent:!0,roughness:.6}));R.position.set(W(727),7.55,j(Sn)-.1),R.rotation.y=Math.PI,ye.add(R),me(.12,.3,.25,F.steelPost,W(bn)-.08,1.55,j(Sn)+4.2,ye),me(.28,.32,.22,new ee({color:3817283,roughness:.6}),W(bn)-.25,1.15,j(Sn)+4.2,ye)}o(bn,Sn,t,Hn,1.2,0,["w","e"]);{let M=W(bn)-.16,S=j(Hn)-4.6;me(.16,.4,.3,F.trim,M,7.35,S,ye);for(let R of[-.17,.17]){let y=new q(new ci(.13,10,8,0,Math.PI),F.trim);y.position.set(M-.12,7.25,S+R),y.rotation.y=-Math.PI/2,ye.add(y)}}o(t,e,ys,Hn,0,1.2,["e"],957);let c=j(Sn)-.03,l=j(e)-.03;{let M=new q(new Ht(16,7),F.garageDoor);M.position.set(W(727),-.3+3.5,c),M.rotation.y=Math.PI,ye.add(M);for(let[S,R,y,E]of[[16.6,.35,0,3.65],[.3,7,-8.15,0],[.3,7,8.15,0]])me(S,R,.15,F.trim,W(727)+y,-.3+3.5+E,c-.05,ye)}{let M=j(r)-.03,S=new q(new Ht(3,6.67),F.frontDoor);S.position.set(W(902),.25+3.335,M),S.rotation.y=Math.PI,ye.add(S);for(let[R,y]of[[902,3]])for(let[E,I,O,k]of[[y+.9,.38,0,3.53],[.38,6.85,-y/2-.19,-.08],[.38,6.85,y/2+.19,-.08]])me(E,I,.1,F.trim,W(R)+O,.25+3.335+k,M-.05,ye);me(3,.06,.25,new ee({color:1842204,roughness:.7}),W(902),.28,M-.12,ye);{let R=St(128,32,(E,I,O)=>{E.fillStyle="#f4f4f2",E.fillRect(0,0,I,O),E.strokeStyle="#222",E.lineWidth=2,E.strokeRect(1,1,I-2,O-2),E.fillStyle="#111",E.font="bold 15px Arial",E.textAlign="center",E.textBaseline="middle",E.fillText("No Soliciting",I/2,O/2+1)},null),y=new q(new Ht(.7,.17),new ee({map:R,roughness:.5}));y.position.set(W(902),7.62,M-.04),y.rotation.y=Math.PI,ye.add(y)}{let R=new ee({color:13224647,metalness:.8,roughness:.3,emissive:3815994}),y=W(902)+1.2;me(.17,.95,.04,R,y,3.25,M-.04,ye);let E=new q(new ft(.03,.03,.62,10),R);E.position.set(y,3.05,M-.2),ye.add(E);for(let I of[3.32,2.78])me(.05,.05,.18,R,y,I,M-.12,ye);me(.17,.24,.05,R,y,4,M-.04,ye)}{let R=W(948),y=2.75,E=4.6,I=2.35,O=M-.35;me(y+1,kn-.6,.35,F.siding,R,-.3+(kn-.6)/2,M-.17,ye);let k=new q(new Ht(y,E),F.win1);k.position.set(R,I+E/2,O),k.rotation.y=Math.PI,ye.add(k);for(let[U,D,G,z]of[[y+.7,.35,0,E/2+.17],[y+.7,.35,0,-E/2-.17],[.35,E,-y/2-.17,0],[.35,E,y/2+.17,0]])me(U,D,.12,F.trim,R+G,I+E/2+z,O-.05,ye);{let U=new ee({color:12895682,metalness:.8,roughness:.3,emissive:3158064}),D=R-(y+1)/2-.04,G=M-.25;me(.06,.42,.22,U,D,5.15,G,ye),me(.32,.08,.3,U,D-.18,5.5,G,ye),me(.06,.18,.06,U,D-.18,5.62,G,ye);let z=new q(new mt(.24,.42,.24),new ee({color:15987178,emissive:7828846,roughness:.3,transparent:!0,opacity:.9}));z.position.set(D-.18,5.25,G),ye.add(z);for(let V=0;V<4;V++)me(.02,.38,.25,U,D-.08-V*.065,5.25,G-.002,ye);me(.05,.3,.12,new ee({color:2829099,roughness:.4}),D-.01,3.9,G,ye)}let L=new q(new ft(.55,.6,.18,20),new ee({color:16052970,emissive:5591112,roughness:.4}));L.position.set(W(915),kn-.8,(j(e)+M)/2),ye.add(L),me(3.4,.04,1.8,new ee({color:9071170,roughness:1}),W(902),.32,M-1.1,ye)}}{let M=W(1150),S=2.6,R=4.6,y=2.9,E=new q(new Ht(S,R),F.win1);E.position.set(M,y+R/2,l),E.rotation.y=Math.PI,ye.add(E);for(let[I,O,k,L]of[[S+.6,.3,0,R/2+.15],[S+.8,.25,0,-R/2-.12],[.3,R,-S/2-.15,0],[.3,R,S/2+.15,0]])me(I,O,.14,F.sageTrim||(F.sageTrim=new ee({color:9411468,roughness:.6})),M+k,y+R/2+L,l-.06,ye)}let h=(M,S,R)=>{let y=Ss(M,-.6,S,!1),E=new q(y.top,R),I=new q(y.side,R);return E.receiveShadow=I.receiveShadow=!0,ye.add(E,I),E};h(nn.driveway.map(([M,S])=>[M,S]).concat([]),-.2,F.concrete);{let M=h([[876,383],[967,383],[967,r],[876,r]],.25,F.flag),S=M.geometry.attributes.uv,R=M.geometry.attributes.position;for(let y=0;y<S.count;y++)S.setXY(y,R.getX(y)/5,R.getZ(y)/5)}h([[841,425],[880,425],[880,470],[841,470]],-.15,F.concrete),h([[592,-160],[841,-160],[841,-97],[592,-97]],-.19,F.concrete);{let M=h(nn.frontRock,-.26,F.chips)}h([[-900,-153],[3e3,-153],[3e3,-97],[-900,-97]],-.17,F.concrete),me(3900/Se,.42,.5,F.concrete,W(1050),-.36,j(-158),ye),h([[-900,-680],[3e3,-680],[3e3,-160],[-900,-160]],-.3,F.asphalt),me(3900/Se,.42,.5,F.concrete,W(1050),-.36,j(-682),ye),h([[-900,-745],[3e3,-745],[3e3,-688],[-900,-688]],-.17,F.concrete);{let M=new q(new ft(.16,.22,24,10),F.steelPost);M.position.set(W(505),11.7,j(-122)),M.castShadow=!0,ye.add(M);let S=me(5,.18,.18,F.steelPost,W(505)+2.4,23.4,j(-122),ye);S.rotation.z=0,me(1.6,.35,.7,F.steelPost,W(505)+4.6,23.2,j(-122),ye)}su([[1278,505,2.3],[1240,500,1.4],[1060,500,1.1],[990,495,1],[1205,498,1.2]].map(([M,S,R])=>[W(M),-.3,j(S)-1.6,R,R*1.35]),"boxwood",ye,55);let u=j(Hn)+.02;for(let[M,S,R,y,E]of[[624,3.45,1.42,5.7,"gblock"],[815,3.4,4,3,"blinds"],[905,3.6,4.6,2.7,"blinds"],[1090,6,6.7,.9,"slider"],[1166,3.7,3.6,3.5,"blinds"]]){let I=W(M),O=new q(new Ht(S,R),E==="blinds"?F.win:E==="gblock"?F.gblock:E==="slider"?F.slider:F.glassDark);O.position.set(I,y+R/2,u+.01),ye.add(O);{let k=E==="gblock"?.38:.25;for(let[L,U,D,G]of[[S+2*k,k+.03,0,R/2+k/2],[S+2*k,k,0,-R/2-k/2],[k,R,-S/2-k/2,0],[k,R,S/2+k/2,0]])me(L,U,E==="gblock"?.16:.12,F.trim,I+D,y+R/2+G,u+.05,ye)}if(E==="grid"){me(.06,R,.05,F.trim,I,y+R/2,u+.04,ye);for(let k of[-1/6,1/6])me(S,.06,.05,F.trim,I,y+R/2+k*R,u+.04,ye)}E==="door"&&me(.12,R,.06,F.trim,I,y+R/2,u+.05,ye)}{let M=W(1113),S=3.3;me(S,.75,2.7,F.concrete,M,-.3+.375,u+1.35,ye),me(S,1.2,1.35,F.concrete,M,-.3+.6,u+.68,ye);let R=me(.35,.25,.3,F.trim,W(1137),7.35,u+.2,ye);for(let y of[-.18,.18]){let E=new q(new ci(.12,10,8),F.trim);E.position.set(W(1137)+y,7.15,u+.3),ye.add(E)}me(.28,.4,.1,F.trim,W(1140),1.45,u+.06,ye)}for(let[M,S]of[[W(bn)-.08,j(Hn)+.08],[W(ys)+.08,j(Hn)+.08]])me(.36,kn-1.1,.36,F.trim,M,.8+(kn-1.1)/2,S,ye);for(let M of[W(957)-.06,W(1028)+.06])me(.36,16.6-.9,.36,F.trim,M,.75+(16.6-.9)/2,j(965)+.06,ye);{let S=function(R,y,E){let I=W(R),O=y+E*.14,k=y+E*1.45,L=(V,Q)=>{let te=V.distanceTo(Q),ie=new q(new mt(.2,te,.28),F.gutter);ie.position.copy(V).add(Q).multiplyScalar(.5),ie.quaternion.setFromUnitVectors(new A(0,1,0),Q.clone().sub(V).normalize()),ie.castShadow=!0,ye.add(ie)},U=new A(I,M,k),D=new A(I,M-.7,O),G=new A(I,.55,O),z=new A(I,.12,O+E*.55);L(U,D),L(D,G),L(G,z),me(.75,.08,1.25,F.concrete,I,-.26,O+E*1.05,ye)},M=kn-.25-.45;S(bn+5,j(Hn),1),S(948,j(Hn),1),S(ys-5,j(e),-1);{let R=W(bn)-.16,y=j(Sn)+1.5,E=(U,D)=>{let G=U.distanceTo(D),z=new q(new mt(.28,G,.2),F.gutter);z.position.copy(U).add(D).multiplyScalar(.5),z.quaternion.setFromUnitVectors(new A(0,1,0),D.clone().sub(U).normalize()),z.castShadow=!0,ye.add(z)},I=new A(R+.05,M,j(Sn)-1.45),O=new A(R,M-.9,y),k=new A(R,.5,y),L=new A(R-.5,.1,y);E(I,O),E(O,k),E(k,L);for(let U of[0,1.1])me(1.25,.1,.7,F.concrete,R-1-U*.4,-.26,y+U*.6,ye)}}let d=W(957),f=W(1028),m=j(909),b=j(965),g=f-d,p=b-m,x=16.6,_=new q(Pi(new mt(g,x+.3,p),g/4,x/4),F.siding);_.position.set((d+f)/2,(x-.3)/2,(m+b)/2),_.castShadow=_.receiveShadow=!0,ye.add(_),me(g+.35,.25,p+.35,F.steelPost,(d+f)/2,x+.1,(m+b)/2,ye);let v=new q(new ft(.33,.33,1.1,16),F.steelPost);v.position.set(W(994.56),x+.75,j(925.43)),v.castShadow=!0,ye.add(v);let w=new q(new ms(.55,.4,16),F.steelPost);w.position.set(W(994.56),x+1.5,j(925.43)),ye.add(w);{let M=pt(77),S=[];for(let R=606;R<940;R+=28+M()*10)S.push([W(R),-.05,j(976)+(M()-.5)*.6,1.65+M()*.4,2.1+M()*.8]);su(S,"rosemary",ye,77)}}{let i=new st;lt.add(i);let e=W(1022),t=W(1306),n=j(951),s=j(1121),r=j(1141),a=8.25,o=7.35,c=(a-o)/(s-n),l=g=>a-(g-n)*c;for(let g of[1036,1170,1298])me(.3,o-.55+.4,.3,F.white,W(g),(o-.55-.4)/2,s,i);me(t-e,.6,.32,F.wood,(e+t)/2,o-.3,s,i),me(t-e,.45,.2,F.white,(e+t)/2,a-.2,n+.12,i);let h=Math.atan(c),u=(r-n)/Math.cos(h);for(let g=e+.2;g<=t;g+=2){let p=me(.15,.45,u,F.wood,g,l((n+r)/2)+.2,(n+r)/2,i);p.rotation.x=h}for(let g=n+1.2;g<r;g+=2.4){let p=me(t-e+.4,.12,.25,F.wood,(e+t)/2,l(g)+.5,g,i);p.rotation.x=h}let d=new Ht(t-e+.6,u+.3),f=d.attributes.uv;for(let g=0;g<f.count;g++)f.setXY(g,f.getX(g)*(t-e)/.44,f.getY(g));let m=new q(d,F.corr);m.rotation.x=-Math.PI/2+h,m.position.set((e+t)/2,l((n+r)/2)+.6,(n+r)/2),m.castShadow=m.receiveShadow=!0,i.add(m);let b=pt(5);for(let[g,p]of[[[e+1,s],[t-1,n+1]],[[e+1,n+1],[t-1,s-.5]]]){let x=[];for(let v=0;v<=24;v++){let w=v/24,M=g[0]+(p[0]-g[0])*w,S=g[1]+(p[1]-g[1])*w;x.push(new A(M,l(S)-.2-Math.sin(w*Math.PI)*.9,S))}let _=new oi(x);i.add(new q(new Si(_,48,.02,4),F.wire));for(let v=1;v<12;v++){let w=_.getPoint(v/12),M=new q(new ci(.11,8,6),F.bulb);M.position.copy(w).y-=.25,i.add(M)}}}{let i=new st;lt.add(i),Et.car=i;let e=191.5/12;i.rotation.y=-Math.PI/2,i.position.set(W(792),-.2,j(338)-e),vp("car.glb",t=>{t.scene.traverse(n=>{if(!n.isMesh)return;n.castShadow=!0,n.receiveShadow=!0;let s=n.material;s&&(s.envMapIntensity=1.6,s.name==="paint"&&(n.material=new fn({color:13028303,metalness:.5,roughness:.3,clearcoat:1,clearcoatRoughness:.05,envMapIntensity:1.9})),s.name==="glass"&&(n.material=new fn({color:1316891,metalness:.1,roughness:.03,clearcoat:1,envMapIntensity:2.4})),s.name==="chrome"&&(s.envMapIntensity=2.4))}),i.add(t.scene),wr(),Rn()})}{let i=new st;lt.add(i);let e=-.28;{let t=4.466666666666667,n=27.5/12,s=5.55,r=W(487)+.12+n/2,a=j(905),o=new st;o.position.set(r,e,a),i.add(o);for(let[h,u]of[[-.6,-1.5],[-.6,1.5]])me(.3,.12,.6,F.wood,h,.06,u,o);let c=new q(Pi(new mt(n,s,t),1,1),F.shed2);c.position.set(0,.12+s/2,0),c.castShadow=c.receiveShadow=!0,o.add(c),Pi(c.geometry,t/1.6,s/1.6);let l=me(n+.25,.22,t+.2,F.shedLid,.04,.12+s+.09,0,o);l.rotation.z=-.06;for(let[h,u]of[[.12+.12,.24]])me(n+.04,u,t+.04,F.shedLid,0,h,0,o);for(let h of[-t/2,t/2])me(n+.05,s,.12,F.shedLid,0,.12+s/2,h,o);me(.03,s-.5,.03,F.shedLid,n/2+.02,.12+s/2,0,o);for(let h of[-1,1]){let u=new q(new ra(.16,.04,8,16,Math.PI),F.steelPost);u.material=new ee({color:2236962,roughness:.5}),u.position.set(n/2+.06,.12+s*.6,h*.22),u.rotation.y=Math.PI/2,u.rotation.z=h>0?Math.PI/2:-Math.PI/2,o.add(u)}for(let h of[-1,1])me(.06,.3,.06,new ee({color:2236962}),n/2+.03,.12+s*.72,h*.1,o)}{let t=W(487)+.15+.65,n=j(958);me(1.3,1.3,1.75,new ee({color:14274495,roughness:.7}),t,e+.65,n,i);let s=new q(new ra(.45,.07,8,24),new ee({color:2236962,roughness:.6}));s.rotation.y=Math.PI/2,s.position.set(t+.1,e+1.15,n),i.add(s),me(.3,.25,.12,F.steelPost,t+.72,e+.9,n-.4,i)}[[787,2972326],[818,10120005],[849,4156732]].forEach(([t,n])=>{let s=W(487)+.15+1.2,r=j(t),a=new ee({color:n,roughness:.6}),o=new q(new ft(1,.85,3.3,4,1),a);o.rotation.y=Math.PI/4,o.scale.set(1.15,1,.95),o.position.set(s,e+1.65,r),o.castShadow=o.receiveShadow=!0,i.add(o);let c=me(2.45,.12,2,a,s-.05,e+3.36,r,i);for(let l of[-.7,.7]){let h=new q(new ft(.33,.33,.16,14),new ee({color:1973790}));h.rotation.x=Math.PI/2,h.position.set(s-1.05,e+.33,r+l),i.add(h)}}),su([[465,560,2.4,5.2],[468,610,2.6,5.6],[466,662,2.5,5.4],[469,712,2.4,5],[467,750,2.2,4.8]].map(([t,n,s,r])=>[W(t),-.3,j(n),s,r]),"boxwood",i,91);{let t=[1304,945.5],n=[1387.64,1052.39],s=Math.hypot(n[0]-t[0],n[1]-t[1]),r=(n[0]-t[0])/s,a=(n[1]-t[1])/s,o=-a,c=r,l=4,h=4+4*Se,u=t[0]+r*(l+h)/2+o*1.4,d=t[1]+a*(l+h)/2+c*1.4,f=Math.atan2(-a,r),m=(h-l)/Se;for(let g of[.75,3,5.25])me(m,.3,.12,F.board,W(u),g,j(d),i,f);let b=new q(new mt(Math.hypot(m,4.5),.3,.12),F.board);b.position.set(W(u),3,j(d)),b.rotation.set(0,f,0),b.rotateZ(Math.atan2(4.5,m)),b.castShadow=!0,i.add(b)}{let t=j(765.33)+.07,n=W(530),s=W(571),r=s-n;for(let c of[.7,3,5.3])me(r,.3,.12,F.board,(n+s)/2,c,t+.04,i);let a=Math.hypot(r,4.6),o=me(a,.3,.12,F.board,(n+s)/2,3,t+.06,i);o.rotation.z=Math.atan2(4.6,r)}}var Gn=new st;lt.add(Gn);var Wh=i=>Math.min(uu(i),i>$n[1]?oc(i,1681):99),pc=[],Lp=5.5/12,fp=.375/12,ru=.0625;function Hy(){let i=[0,1,2,3].map(o=>{let c=new mt(1,1,1),l=c.attributes.uv;for(let h=0;h<l.count;h++)l.setX(h,(o+l.getX(h))/4);return c});F.cedar||(F.cedar=new ee({map:rt.cedarA,normalMap:rt.cedarN,roughness:.95}));let e=[[],[],[],[]];pc.forEach(o=>e[o[6]].push(o));let t=new Xe,n=new Qt,s=new tr,r=new A,a=new A;e.forEach((o,c)=>{if(!o.length)return;let l=new Ei(i[c],F.cedar,o.length);o.forEach(([h,u,d,f,m,b],g)=>{s.set(0,f,0),n.setFromEuler(s),r.set(Lp,b,ru),a.set(h,u,d),t.compose(a,n,r),l.setMatrixAt(g,t)}),l.castShadow=l.receiveShadow=!0,Gn.add(l)}),pc.length=0}var Zo=[940,1300];function da(i,e,t){let[n,s]=i,[r,a]=e,o=Math.hypot(r-n,a-s)/Se,c=Math.max(1,Math.ceil(o/8-.05)),l=Math.atan2(-(j(a)-j(s)),W(r)-W(n));for(let h=0;h<c;h++){let u=h/c,d=(h+1)/c,f=(u+d)/2,m=n+(r-n)*f,b=s+(a-s)*f,g=1e9;for(let D of[u,f,d])g=Math.min(g,t.ground(n+(r-n)*D,s+(a-s)*D));let p=Math.min(g,t.minBase??1e9)-.15,x=6+.15,_=o/c,v=Math.sin(l),w=Math.cos(l),S=((W(Zo[0])-W(m))*v+(j(Zo[1])-j(b))*w>0?1:-1)*(t.railsOut?-1:1),R=t.rake?t.ground(n+(r-n)*u,s+(a-s)*u)-.15:p,y=t.rake?t.ground(n+(r-n)*d,s+(a-s)*d)-.15:p,E=Math.max(1,Math.floor((_+fp)/(Lp+fp))),I=_/E,O=pt(Math.round(m*13+b*7));for(let D=0;D<E;D++){let G=(D+.5)/E,z=n+(r-n)*(u+(d-u)*G),V=s+(a-s)*(u+(d-u)*G),Q=R+(y-R)*G+(O()-.5)*.02;pc.push([W(z)-v*S*0,Q+x/2,j(V),l,0,x+(O()-.5)*.03,Math.floor(O()*4)])}let k=Math.atan2(y-R,_);for(let D of[.65,3,5.35]){let G=new q(new mt(_,.29,.125),F.cedar||(F.cedar=new ee({map:rt.cedarA,normalMap:rt.cedarN,roughness:.95})));G.position.set(W(m)+v*S*(ru/2+.0625),(R+y)/2+D,j(b)+w*S*(ru/2+.0625)),G.rotation.set(0,l,k),G.castShadow=G.receiveShadow=!0,Gn.add(G)}if(t.cap){let D=new q(new mt(_+.05,.12,.5),F.cedar);D.position.set(W(m),(R+y)/2+x+.06,j(b)),D.rotation.set(0,l,k),D.castShadow=!0,Gn.add(D)}let L=n+(r-n)*u,U=s+(a-s)*u;if(t.steel){let D=new q(new ft(.12,.12,x+.2,10),F.steelPost),G=Math.sin(l)*t.side,z=Math.cos(l)*t.side;D.position.set(W(L)+G*.15,p+(x+.2)/2,j(U)+z*.15),D.castShadow=!0,Gn.add(D)}else{let D=t.rake?t.ground(L,U)-.15:p,G=Math.sin(l),z=Math.cos(l),V=(W(Zo[0])-W(L))*G+(j(Zo[1])-j(U))*z,Q=(V>0?1:-1)*(t.railsOut?-1:1);me(.29,x+.1,.29,F.cedar,W(L)+G*Q*.2,D+(x+.1)/2,j(U)+z*Q*.2,Gn,l)}}if(!t.steel){let h=t.rake?t.ground(r,a)-.15:Math.min(t.ground(r,a),t.minBase??1e9)-.15;me(.29,6.25,.29,F.cedar,W(r),h+3.12,j(a),Gn,l)}}function ky(){Gn.clear(),pc.length=0;try{By()}finally{Hy()}}function By(){da([573.18,765.33],[485.87,765.33],{ground:()=>-.25,steel:!0,side:1}),da([485.87,765.33],[485.87,1681],{ground:(i,e)=>e<1049?-.25:_c(486,e),steel:!0,side:-1}),da([1394.6,1681.46],[1387.64,1052.39],{ground:(i,e)=>Er(1390,e),cap:!0,rake:!0,railsOut:!0}),da([1387.64,1052.39],[1304,945.5],{ground:()=>-.3,cap:!0}),da([485.87,1681],[540,1681],{ground:i=>uu(i)});{let t=Math.ceil(854.5999999999999/Se/8-.05);for(let n=0;n<t;n++){let s=540+854.5999999999999*n/t,r=540+(1394.6-540)*(n+1)/t,a=(s+r)/2,o=Math.min(Wh(s),Wh(r),Wh(a))+.25,c=(r-s)/Se,l=4,h=j(1681);for(let[f,m,b,g]of[[c,.14,W(a),o+l],[c,.14,W(a),o+.07],[.14,l,W(s)+.07,o+l/2],[.14,l,W(r)-.07,o+l/2]])me(f,m,.14,F.hogFrame,b,g,h,Gn);let u=new Ht(c-.2,l-.2);Pi(u,(c-.2)/(4*gt),(l-.2)/(4*gt));let d=new q(u,F.hogMesh);d.position.set(W(a),o+l/2,h),d.castShadow=!0,Gn.add(d),me(.17,l+.3,.17,F.hogFrame,W(s),o+(l+.3)/2-.15,h,Gn);{F.cedar||(F.cedar=new ee({map:rt.cedarA,normalMap:rt.cedarN,roughness:.95}));let f=new q(new mt(c+.12,.125,.46),F.cedar);f.position.set(W(a),o+l+.07+.06,h),f.castShadow=f.receiveShadow=!0,Gn.add(f)}}}}var hi=[1352,1414],yr=[1355,1448],Xh=[1342.3,1513],pp=Math.atan2(j(1380)-j(Ze[1]),W(1360)-W(Ze[0])),zy=new ee({color:10196364,roughness:1}),qh=$i("pool");{let i=72.5/Se,e=W(Ze[0]),t=j(Ze[1]),n=new st;n.position.set(e,0,t),qh.add(n),Jn(n,Ze[0],Ze[1],()=>-Ce.sink);let s=new q(new ft(i,i,1.9,96,1,!0),F.tank);Pi(s.geometry,Math.round(kt*i/1.6),1),s.position.y=.95,s.castShadow=s.receiveShadow=!0,n.add(s);let r=new q(new ft(i-.03,i-.03,1.9,96,1,!0),F.tankIn);Pi(r.geometry,Math.round(kt*i/1.6),1),r.position.y=.95,r.receiveShadow=!0,n.add(r);let a=[[i-.06,1.86],[i-.07,1.98],[i-.02,2.04],[i+.12,2.05],[i+.2,2],[i+.21,1.9],[i+.17,1.86]].map(([w,M])=>new re(w,M)),o=new q(new ea(a,120),F.rim);o.castShadow=o.receiveShadow=!0,n.add(o);let c=new q(new ft(i+.6,i+.6,.35,48),zy);c.position.y=-.18,c.receiveShadow=!0,n.add(c);let l=new q(new or(i-.02,64),F.poolFloor);l.rotation.x=-Math.PI/2,l.position.y=.04,l.receiveShadow=!0,n.add(l);let h=new q(new or(i-.04,64),F.water);h.rotation.x=-Math.PI/2,h.position.y=1.68,h.renderOrder=2,n.add(h);{let w=new st;n.add(w);for(let[M,S]of[[.1,"skim"],[-.1,"ret"]]){let R=pp+M,y=new st;if(y.position.set(Math.cos(R)*i,0,Math.sin(R)*i),y.rotation.y=-R,w.add(y),S==="skim"){me(.06,.42,.62,F.white,-.04,1.55,0,y),me(.02,.3,.48,F.jet,-.075,1.55,0,y),me(.55,.75,.7,F.jet,.3,1.4,0,y);let E=new q(new ft(.075,.075,.3,12),F.pvc);E.position.set(.3,.9,0),y.add(E)}else{let E=new q(new ci(.12,14,10),F.white);E.position.set(-.05,.85,0),y.add(E);let I=new q(new ft(.17,.17,.06,18),F.white);I.rotation.z=Math.PI/2,I.position.set(-.03,.85,0),y.add(I);let O=new q(new ft(.08,.08,.5,12),F.pvc);O.rotation.z=Math.PI/2,O.position.set(.25,.85,0),y.add(O)}}}let u=new st;u.position.set(W(hi[0]),0,j(hi[1])),qh.add(u),Jn(u,hi[0],hi[1],0);let d=vr[vr.length-1];window.__placePump=()=>{d[1]=hi[0],d[2]=hi[1],u.position.set(W(hi[0]),tn(...hi),j(hi[1])),u.rotation.y=Math.PI,Dp.forEach((w,M)=>{if(!w)return;let S=Xy[M]||w.home;w.a[1]=S[0],w.a[2]=S[1],w.g.position.set(W(S[0]),tn(...S),j(S[1]))}),u.updateMatrixWorld(!0)};let f=new q(new mt(1.3,.12,2.1),F.concrete);f.position.y=.06,f.receiveShadow=f.castShadow=!0,u.add(f);let m=new q(new ft(.3,.33,.75,24),F.pump);m.position.set(0,.5,-.45),m.castShadow=!0,u.add(m);let b=new q(new ft(.2,.2,.5,16),F.pump);b.rotation.x=Math.PI/2,b.position.set(0,.34,-.85),b.castShadow=!0,u.add(b);let g=new q(new ft(.36,.36,1.6,24),F.white);g.position.set(0,.92,.5),g.castShadow=!0,u.add(g);let p=new q(new ci(.36,24,12,0,kt,0,Math.PI/2),F.white);p.position.set(0,1.72,.5),u.add(p);let x=new q(new ft(.09,.09,.05,14),F.steelPost);x.rotation.z=Math.PI/2,x.position.set(-.05,1.98,.5),u.add(x);for(let[w,M,S,R]of[[.12,.5,0,0],[.5,.5,0,-.12],[.12,.7,.95,.95],[.7,.7,.95,.8]]){let y=Math.hypot(M-w,R-S)||.01,E=new q(new ft(.06,.06,y,10),F.pvc);E.position.set(.2,(w+M)/2,(S+R)/2),R!==S&&(E.rotation.x=Math.PI/2),u.add(E)}for(let[w,M]of[[.3,0],[.42,.95]]){let S=new q(new mt(.1,.07,.24),F.valve);S.position.set(.2,w+.12,M),u.add(S)}let _=new st;qh.add(_);let v=new ee({color:16053231,roughness:.55});window.__buildHoses=()=>{_.clear();let w=72.5/Se,M=W(Ze[0]),S=j(Ze[1]),R=tn(...Ze)-Ce.sink,y=tn(...hi),E=(k,L,U=.06)=>new A(W(k),tn(k,L)+U,j(L));[[.1,.95,.45,-1],[-.1,.85,.6,1]].forEach(([k,L,U,D],G)=>{let z=pp+k,V=[new A(M+Math.cos(z)*(w+U),R+L,S+Math.sin(z)*(w+U)),new A(M+Math.cos(z)*(w+U+.5),R+.12,S+Math.sin(z)*(w+U+.5))];V.push(E(1312,1388+D*3),E(1332,1404+D*3));let Q=u.localToWorld(new A(.22,.14,G?.55:-.2));V.push(new A(Q.x,y+.1,Q.z+.6),Q);let te=new q(new Si(new oi(V,!1,"catmullrom",.2),200,.07,10),v);te.castShadow=te.receiveShadow=!0,_.add(te)});let I=u.localToWorld(new A(0,.34,-1.1)),O;{let k=tn(...yr),L=new A(W(yr[0]),k+1.45,j(yr[1])-.33);O=[I,new A(I.x+.2,y+.1,I.z+.3),new A(L.x-.1,k+.5,L.z-.3),L]}_.add(new q(new Si(new oi(O,!1,"catmullrom",.3),80,.03,6),F.hose))}}var Ip=$i("furniture");function mp(i){let e=i.slice(0,4),t=e.reduce((c,l)=>[c[0]+l[0]/4,c[1]+l[1]/4],[0,0]),n=[e[1][0]-e[0][0],e[1][1]-e[0][1]],s=[e[2][0]-e[1][0],e[2][1]-e[1][1]],r=Math.hypot(...n),a=Math.hypot(...s),o=r>a?n:s;return{c:t,L:Math.max(r,a)/Se,W:Math.min(r,a)/Se,ax:[o[0]/Math.hypot(...o),o[1]/Math.hypot(...o)]}}function Gy(i){let e=mp(i.frame),t=mp(i.back),n=[t.c[0]-e.c[0],t.c[1]-e.c[1]],s=Math.sign(n[0]*e.ax[0]+n[1]*e.ax[1])||1,r=[e.ax[0]*s,e.ax[1]*s],a=new st;a.position.set(W(e.c[0]),0,j(e.c[1])),a.rotation.y=Math.atan2(-r[1],r[0]),Ip.add(a),Jn(a,e.c[0],e.c[1],.04);let o=e.L,c=e.W,l=Math.min(t.L,o*.45),h=e.L>4?1:1.2;for(let d of[-1,1])for(let f of[-1,1])me(.1,h,.1,F.frame,d*(o/2-.15),h/2,f*(c/2-.1),a);me(o,.1,c,F.frame,0,h,0,a),me(o-l,.28,c*.94,F.cushion,-l/2,h+.18,0,a);let u=new st;u.position.set(o/2-l,h+.1,0),u.rotation.z=e.L>4?.75:.95,a.add(u),me(l*1.15,.28,c*.94,F.cushion,l*.57,.14,0,u)}function Vy(i){let e=i.frame.map(c=>c[0]),t=i.frame.map(c=>c[1]),n=(Math.min(...e)+Math.max(...e))/2,s=(Math.min(...t)+Math.max(...t))/2,r=(Math.max(...e)-Math.min(...e))/Se,a=(Math.max(...t)-Math.min(...t))/Se,o=new st;o.position.set(W(n),0,j(s)),Ip.add(o),Jn(o,n,s,.04),me(r,.08,a,F.teak,0,1.4,0,o);for(let c of[-1,1])for(let l of[-1,1])me(.08,1.4,.08,F.teak,c*(r/2-.08),.7,l*(a/2-.08),o)}for(let i of Object.values(nn.furniture))i.back?Gy(i):Vy(i);var Wy=$i("umbrella");{let i=nn.umbrella[0],e=i.slice(0,4).reduce((g,p)=>g+p[0]/4,0),t=i.slice(0,4).reduce((g,p)=>g+p[1]/4,0),n=Math.hypot(i[1][0]-i[0][0],i[1][1]-i[0][1])/Se,s=Math.atan2(-(i[1][1]-i[0][1]),i[1][0]-i[0][0]),r=nn.umbrella[2],a=r.slice(0,4).reduce((g,p)=>g+p[0]/4,0),o=r.slice(0,4).reduce((g,p)=>g+p[1]/4,0),c=new st;Wy.add(c),Jn(c,a,o,0),c.position.x=W(a),c.position.z=j(o),me(2.4,.35,2.4,F.frame,0,.18,0,c);let l=W(e)-W(a),h=j(t)-j(o),u=new q(new ft(.08,.09,9.6,12),F.frame);u.position.y=4.8,u.castShadow=!0,c.add(u);let d=Math.hypot(l,h),f=new q(new ft(.06,.06,d,10),F.frame);f.rotation.z=Math.PI/2,f.rotation.y=Math.atan2(-h,l),f.position.set(l/2,9.5,h/2),c.add(f);let m=new q(new ms(n/Math.SQRT2,1.5,4,1,!0),F.canopy);m.position.set(l,9,h),m.rotation.y=Math.PI/4+s,m.castShadow=!0,m.receiveShadow=!0,c.add(m);let b=new q(new ft(.04,.04,.9,8),F.frame);b.position.set(l,9.3,h),c.add(b)}var gp=$i("planters"),Dp=[],Xy={5:[1338,1380],4:[1318,1416],0:[1328,1442]};{let i=pt(13);nn.planters.forEach((e,t)=>{let[n,s,r]=e[0];t===1&&(n=1330,s=1298);let a=r/Se,o=Math.min(a*1.9,2.4),c=new st;c.position.set(W(n),0,j(s)),gp.add(c),Jn(c,n,s,0),Dp[t]={g:c,a:vr[vr.length-1],home:[n,s]};let l=[[a*.66,0],[a*.7,.06],[a*.9,o*.84],[a*1.02,o*.86],[a*1.03,o],[a*.93,o],[a*.9,o*.88]].map(([d,f])=>new re(d,f)),h=new q(new ea(l,40),F.terracotta);h.castShadow=h.receiveShadow=!0,c.add(h);let u=new q(new or(a*.9,24),F.soil);if(u.rotation.x=-Math.PI/2,u.position.y=o*.88,c.add(u),t%2===0){let f=[];for(let b=0;b<16;b++){let g=a*(1+i()*.6),p=new ms(.11*a*1.4,g,4);p.translate(0,g/2,0),p.scale(1,1,.35),p.rotateZ(-(.35+i()*.75)),p.rotateY(b/16*kt+i()*.3),f.push(p)}let m=new q(Wo(f),F.agave);m.position.y=o*.88,m.castShadow=!0,c.add(m)}else{let d=[];for(let m=0;m<44;m++){let b=1.2+i()*1.3,g=new ms(.035,b,3);g.translate(0,b/2,0),g.rotateZ((i()-.5)*.9),g.rotateY(i()*kt),g.translate((i()-.5)*a*.8,0,(i()-.5)*a*.8),d.push(g)}let f=new q(Wo(d),F.grassPlant);f.position.y=o*.88,f.castShadow=!0,c.add(f)}});for(let e of nn.boulders)for(let[t,n,s,r]of e){let a=s/Se,o=pt(Math.round(t*7+n)),c=lu(new lr(a,2),.45,1.6/Math.max(a,.2),o()*50,.62),l=new q(c,new ee({color:r,roughness:.95,flatShading:!0}));l.position.set(W(t),0,j(n)),l.rotation.y=o()*kt,l.castShadow=l.receiveShadow=!0,gp.add(l),Jn(l,t,n,a*.18)}}var Ot=$i("electrical"),fa=[[1298.5,560],[1298.5,935]],Qi=[[1300,940],[1337,988],[1337,1500],[Xh[0],1506],[Xh[0],Xh[1]]],qy=18*gt,_r=[1356,1170],bp=[[1300,940],[1337,988],[1337,1440],[yr[0]-.9*Se,yr[1]-.19*Se]],jy=[{p:[1298.5,527],name:"Main panel",kind:"panel"},{p:[1296.8,933],name:"Corner junction box",kind:"jbox"}],vs={pipe:new ee({color:9476e3,roughness:.45}),box:new ee({color:12172736,roughness:.45,metalness:.5}),post:new ee({color:8216648,roughness:.9}),rcpt:new ee({color:7304312,roughness:.5,metalness:.3}),tape:new dn({color:16762941,transparent:!0,opacity:.85,side:vt,depthWrite:!1})},Yy=(i,e)=>e>=1108?Er(i,e):e>=950?-.32:-.28;function Ky(i=4){let e=[];for(let t=0;t<Qi.length-1;t++){let[n,s]=Qi[t],[r,a]=Qi[t+1],o=Math.max(1,Math.ceil(Math.hypot(r-n,a-s)/i));for(let c=0;c<(t===Qi.length-2?o+1:o);c++){let l=c/o;e.push([n+(r-n)*l,s+(a-s)*l])}}return e}function pa(i,e,t,n){let s=[];for(let o=0;o<i.length-1;o++){let[c,l]=i[o],[h,u]=i[o+1],d=Math.max(1,Math.ceil(Math.hypot(h-c,u-l)/4));for(let f=0;f<d;f++){let m=f/d,b=c+(h-c)*m,g=l+(u-l)*m;s.push(new A(W(b),e(b,g),j(g)))}}let[r,a]=i[i.length-1];return s.push(new A(W(r),e(r,a),j(a))),new q(new Si(new oi(s,!1,"catmullrom",.05),s.length*3,t,8),n)}function Np(){Ot.clear();let i=qy,e=(r,a)=>Yy(r,a)-i,t=[1240,1282];Ot.add(pa([...bp.slice(0,2),[1337,t[0]]],e,.044,vs.pipe)),Ot.add(pa([[1337,t[1]],...bp.slice(2)],e,.044,vs.pipe));{let r=new ee({color:14212578,roughness:.15,transparent:!0,opacity:.12,depthWrite:!1,side:vt});Ot.add(pa([[1337,t[0]],[1337,t[1]]],e,.044,r));let a=[[1447446,-.016,.012],[15921906,.016,.012],[12592671,-.016,-.014],[15328480,.016,-.014],[3115578,0,-.001]];for(let[l,h,u]of a){let d=new ft(.0095,.0095,(t[1]-t[0])/Se+.4,10);d.rotateX(Math.PI/2);let f=new q(d,new ee({color:l,roughness:.4}));f.position.set(W(1337)+h,e(1337,(t[0]+t[1])/2)+u,j((t[0]+t[1])/2)),Ot.add(f)}let o=new ft(.0097,.0097,(t[1]-t[0])/Se+.4,10,1,!1,0,.9);o.rotateX(Math.PI/2);let c=new q(o,new ee({color:12592671}));c.position.set(W(1337)+.016,e(1337,(t[0]+t[1])/2)-.014,j((t[0]+t[1])/2)),Ot.add(c)}{let r=new ee({color:9278618,roughness:.6}),a=Qi.map(([m,b],g)=>[m-3.5,b+(g>=3?3.5:0)]);Ot.add(pa(a,(m,b)=>e(m,b)+.035,.079,r));let[o,c]=a[a.length-1],l=tn(o,c),h=e(o,c),u=new q(new ft(.079,.079,l+.35-h,14),r);u.position.set(W(o),(l+.35+h)/2,j(c)),Ot.add(u);let d=new q(new ft(.1,.1,.12,14),new ee({color:2829099,roughness:.5}));d.position.set(W(o),l+.4,j(c)),Ot.add(d);let f=new q(new mt(.07,1.6,.07),new ee({color:15234090,roughness:.6}));f.position.set(W(o)+.35,l+.6,j(c)),f.castShadow=!0,Ot.add(f)}{let r=W(1296)+.12,a=.9,o=e(...Qi[0]),c=[[r,3,j(fa[0][1])-2.3],[r,a+.3,j(fa[0][1])-1.6],[r,a,j(fa[0][1])],[r,a,j(fa[1][1])],[r+.05,-.3,j(fa[1][1])+.15],[W(Qi[0][0]),o,j(Qi[0][1])]].map(h=>new A(...h)),l=new q(new Si(new oi(c,!1,"catmullrom",.08),90,.08,10),F.white);l.castShadow=!0,Ot.add(l)}let n=Ky(8);for(let r=0;r<n.length-1;r++){let[a,o]=n[r],[c,l]=n[r+1],h=Math.hypot(c-a,l-o)/Se;if(h<.2||Ce.cut&&o>1175&&mc(1337,o))continue;let u=new q(new Ht(.25,h),vs.tape);u.rotation.x=-Math.PI/2,u.rotation.z=Math.atan2(-(c-a),l-o);let d=(a+c)/2,f=(o+l)/2;u.position.set(W(d),Math.min(e(d,f)+1,tn(d,f)-.15),j(f)),Ot.add(u)}let s=jy.concat([{p:yr,name:"Pump outlet",kind:"pout"},{p:_r,name:"Pad outlet",kind:"pout"}]);Ot.add(pa([[1337,_r[1]],[_r[0]-.9*Se,_r[1]-.19*Se]],e,.044,vs.pipe));for(let r of s){let[a,o]=r.p,c=tn(a,o),l=W(a),h=j(o),u,d,f,m=.32,b=l,g=h;if(r.kind==="panel")u=3,d=.32,f=2,m=1.2,b=W(1296)+.17;else if(r.kind==="jbox")u=.62,d=.28,f=.55,m=.55,b=W(1296)+.14;else if(r.kind==="pout"){u=c+1.2,d=.38,f=.6,m=.42,g=h-.33;let x=2+2.05,_=new q(new mt(.29,x,.29),vs.post);_.position.set(l,c-2+x/2,h),_.castShadow=_.receiveShadow=!0,Ot.add(_);let v=new q(new ft(.36,.36,.5,16),new ee({map:rt.basaltA,color:12104360,roughness:1}));v.position.set(l,c-2-.25,h),Ot.add(v);let w=e(a,o),M=h-.19,S=new ee({color:6251884,roughness:.45}),R=[[l-.9,w,M],[l-.35,w+.02,M],[l-.08,w+.3,M],[l,w+.75,M],[l,u-.02,M]].map(I=>new A(...I)),y=new q(new Si(new oi(R,!1,"catmullrom",.2),40,.052,12),S);y.castShadow=!0,Ot.add(y);for(let I of[c+.25,u-.35])me(.16,.05,.14,F.steelPost,l,I,M-.02,Ot);let E=new q(new ft(.075,.06,.08,12),new ee({color:2236962}));E.position.set(l,c-.02,M),Ot.add(E)}let p=new q(new mt(d,f,m),r.kind==="pout"?vs.rcpt:vs.box);p.position.set(b,u+f/2-.05,g),p.castShadow=!0,Ot.add(p)}Jy(e)}var Mr={top:3.2,boxes:[[1324,1346,1115,1395],[1346,1366,1158,1184],[1326,1341.5,1395,1433],[1326,1362,1433,1462],[1326,1348,1462,1526]]},Up={uCutOn:{value:0},uCutTop:{value:Mr.top},uCutBox:{value:[...Mr.boxes,[0,0,0,0],[0,0,0,0]].slice(0,6).map(([i,e,t,n])=>new wt(W(i),W(e),j(t),j(n)))}},mc=(i,e)=>Mr.boxes.some(([t,n,s,r])=>i>t&&i<n&&e>s&&e<r);function Zy(i){if(!i||i.userData.cutPatched||i.isShaderMaterial||i.isLineBasicMaterial||i.isPointsMaterial)return;i.userData.cutPatched=!0;let e=i.onBeforeCompile,t=i.customProgramCacheKey;i.onBeforeCompile=function(n,s){e&&e.call(this,n,s),Object.assign(n.uniforms,Up),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vCutW;`).replace("#include <project_vertex>",`#include <project_vertex>
#ifdef USE_INSTANCING
vCutW=(modelMatrix*instanceMatrix*vec4(transformed,1.)).xyz;
#else
vCutW=(modelMatrix*vec4(transformed,1.)).xyz;
#endif`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vCutW;uniform float uCutOn,uCutTop;uniform vec4 uCutBox[6];`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
if(uCutOn>.5&&vCutW.y<uCutTop){for(int i=0;i<6;i++){vec4 b=uCutBox[i];if(vCutW.x>b.x&&vCutW.x<b.y&&vCutW.z>b.z&&vCutW.z<b.w)discard;}}`)},i.customProgramCacheKey=function(){return(t?t.call(this):"")+"|cut1"},i.needsUpdate=!0}var Bn=$i("trench");Bn.visible=!1;Ue.soil=St(256,512,(i,e,t)=>{let n=pt(171),s=i.createLinearGradient(0,0,0,t);s.addColorStop(0,"#8d8478"),s.addColorStop(.12,"#7a6e60"),s.addColorStop(.16,"#5a4636"),s.addColorStop(.45,"#6b5240"),s.addColorStop(.62,"#9b8466"),s.addColorStop(1,"#b8a483"),i.fillStyle=s,i.fillRect(0,0,e,t),ei(i,e,t,2200,["#5a4838","#7d6650","#8f7a5f"],.5,1.3,n);for(let r=0;r<22;r++){let a=t*(.55+n()*.45),o=2+n()*5;i.fillStyle=n()<.5?"#b9ab90":"#a99a7f",i.beginPath(),i.ellipse(n()*e,a,o,o*.7,n()*3,0,kt),i.fill()}for(let r=0;r<60;r++)i.fillStyle="rgba(255,255,255,0.05)",i.fillRect(0,n()*t,e,1);for(let r=0;r<220;r++)i.fillStyle=n()<.5?"#9c9a94":"#7f7d77",i.fillRect(n()*e,n()*t*.12,2+n()*3,2+n()*2)},null);Ue.sand=St(128,128,(i,e,t)=>{let n=pt(173);i.fillStyle="#d8c7a1",i.fillRect(0,0,e,t),ei(i,e,t,1600,["#c4b28b","#e8dbbd","#b9a47c"],.4,1.1,n)},null);function Jy(i){Bn.clear();let e=new ee({map:Ue.soil,roughness:1,side:vt}),t=new ee({map:Ue.sand,roughness:1}),n=c=>i(1337,c),s=c=>n(c)-.044-.25,r=(c,l,h)=>{let u=[],d=[],f=[];c.forEach(([g,p,x,_],v)=>{u.push(g,p,x,g,_,x);let w=h(v);if(d.push(w,1,w,1-(p-_)/2.6),v){let M=v*2;f.push(M-2,M-1,M,M-1,M+1,M)}});let m=new dt;m.setAttribute("position",new Ie(u,3)),m.setAttribute("uv",new Ie(d,2)),m.setIndex(f),m.computeVertexNormals();let b=new q(m,l);b.receiveShadow=!0,Bn.add(b)},a=(c,l,h)=>Mr.boxes.some(([u,d,f,m],b)=>b!==h&&c>u-.3&&c<d+.3&&l>f-.3&&l<m+.3);Mr.boxes.forEach(([c,l,h,u],d)=>{let f=[[[c+.05,h],[c+.05,u]],[[l-.05,h],[l-.05,u]],[[c,h+.05],[l,h+.05]],[[c,u-.05],[l,u-.05]]];for(let[[x,_],[v,w]]of f){let M=Math.hypot(v-x,w-_),S=Math.max(2,Math.ceil(M/6)),R=[],y=()=>{R.length>1&&r(R.map(([E,I])=>[W(E),tn(E,I),j(I),s(I)-.08]),e,E=>{let[I,O]=R[E];return(I+O)/Se/2}),R=[]};for(let E=0;E<=S;E++){let I=x+(v-x)*E/S,O=_+(w-_)*E/S;a(I,O,d)?y():R.push([I,O])}y()}let m=new q(new Ht((l-c)/Se,(u-h)/Se),new ee({color:7033408,roughness:1}));m.rotation.x=-Math.PI/2,m.position.set(W((c+l)/2),s((h+u)/2)-.08,j((h+u)/2)),Bn.add(m);let b=Math.max(c,1328.5),g=Math.min(l,d===2?1360:1341.5),p=new q(new mt((g-b)/Se,.25,(u-h)/Se),t);p.position.set(W((b+g)/2),s((h+u)/2)+.045,j((h+u)/2)),p.receiveShadow=!0,Bn.add(p)});let o=new ee({color:8357518,roughness:.4});for(let c=1155;c<1500;c+=10*Se)if(!(!mc(1337,c)||!mc(1333.5,c)))for(let[l,h,u]of[[1337,.056,0],[1333.5,.098,.035]]){let d=new ft(h,h,h*3.4,24);d.rotateX(Math.PI/2);let f=new q(d,o);f.position.set(W(l),n(c)+u,j(c)),Bn.add(f)}{let c=new ft(.056,.056,.19,24);c.rotateZ(Math.PI/2);let l=new q(c,o);l.position.set(W(1337)+.25,n(_r[1]),j(_r[1])),Bn.add(l)}{let l=tn(1331,1205),h=n(1205)+.044,u=new q(new mt(.015,l-h,.015),new dn({color:1118481}));u.position.set(W(1331),(l+h)/2,j(1205)),Bn.add(u);for(let d of[l,h]){let f=new q(new mt(.22,.015,.015),u.material);f.position.set(W(1331),d,j(1205)),Bn.add(f)}}}function Op(){lt.traverse(i=>{if(!i.isMesh&&!i.isInstancedMesh)return;let e=i;for(;e;){if(e===Bn||e===Ot||e===ba)return;e=e.parent}for(let t of[].concat(i.material))Zy(t)})}function mu(){let i=Ce.cut;Up.uCutOn.value=i?1:0,Bn.visible=i,i&&Op(),An.planters.visible=!i&&Ce.layers.planters,at("labels").hidden=!i,Np(),wr()}var Ms=[{t:"Main panel: two new breakers",w:"House, east side",pin:[1298.5,527,5.4],pos:[1378,640,6.5],tgt:[1298,535,3.4],b:`<ul>
  <li><b>CKT 1, pump:</b> 20 A single-pole</li><li><b>CKT 2, pad outlet:</b> 20 A single-pole</li>
  <li>GFCI protection on both, by GFCI breaker or GFCI receptacle at the device <code>210.8(A)</code></li>
  <li>Label both at the panel directory <code>408.4</code></li></ul>
  <div class="warn">Confirm the panel has two open slots and spare capacity before the trench is dug.</div>`},{t:"Surface run down the house wall",w:"East wall, panel to back corner, ~26 ft",pin:[1298.5,760,1.6],pos:[1388,700,6],tgt:[1298,790,1.2],b:`<ul>
  <li>3/4" Sch 40 PVC (Sch 80 if exposed to damage), painted to match the siding</li>
  <li>Strap within 3 ft of each box and at least every 3 ft <code>352.30</code></li>
  <li>One expansion fitting: a ~26 ft run in full sun moves about 1" through the seasons <code>352.44</code></li>
  <li>LB at the panel; weatherproof fittings throughout</li></ul>`},{t:"Into the ground at the back corner",w:"Junction box at the corner of the house",pin:[1300,940,.8],pos:[1362,870,5.5],tgt:[1305,950,-.6],b:`<ul>
  <li>Weatherproof junction box, no receptacle</li>
  <li>Sch 80 riser from the box into the trench, factory 90\xB0 sweep at the bottom <code>300.5(D)(1)</code></li>
  <li>Bushing or end bell where the conduit leaves the ground <code>300.5(H)</code></li></ul>`},{t:"The trench",w:"Back corner to the shed, ~45 LF",pin:[1337,1205,.6],pos:[1322,1060,11],tgt:[1339,1300,-1.5],b:`<ul>
  <li><b>18" cover</b> to the top of the conduit (12" would do for GFCI branch circuits; 18" keeps the spare legal for a future feeder) <code>Table 300.5</code></li>
  <li>6\u20138" wide, 3" sand bed, smooth backfill with no large rock on the pipe <code>300.5(F)</code></li>
  <li>Both conduits side by side; warning tape 12" above is recommended</li>
  <li>Texas 811 locate before digging; leave open for the underground inspection</li></ul>
  <div class="warn">The trench runs under the new pad-to-pool wall. Lay the conduit before Abey pours that wall's footer.</div>`},{t:"Conduit and wires",w:"Inside the trench, see-through section",pin:[1337,1262,.3],pos:[1352,1222,1.6],tgt:[1336,1262,-1.9],b:`<ul>
  <li><b>Live:</b> 3/4" Sch 40 PVC, 5 \xD7 #12 THWN-2 copper</li>
  <li>CKT 1: black + white \xB7 CKT 2: red + white with red stripe \xB7 one #12 green ground shared <code>250.122</code></li>
  <li>Fill \u2248 33% of the 40% allowed <code>Ch. 9</code></li>
  <li>4 current-carrying wires \u2192 80% derate; #12 at 90 \xB0C: 30 A \xD7 0.8 = 24 A \u2265 20 A <code>310.15(C)(1)</code></li>
  <li>Primer + solvent cement at every coupling; no more than 360\xB0 of bends between pull points <code>352.48, 352.26</code></li></ul>
  <div class="warn">~75 ft one way: #12 drops ~5% at a full 20 A. Use #10 for CKT 2 if it will run heaters or tools.</div>`},{t:"Pad outlet (CKT 2)",w:"East edge of the pad, 10.4 ft from the tank",pin:[1356,1170,1.9],pos:[1305,1105,5.5],tgt:[1350,1172,-.6],b:`<ul>
  <li>WR/TR GFCI receptacle, extra-duty in-use cover <code>406.9(B)</code></li>
  <li>Pressure-treated 4x4 set 24" deep on 6" of gravel, in the limestone strip</li><li>Factory 90\xB0 sweep, Sch 80 riser strapped to the post, bushing at grade</li>
  <li>More than 6 ft from the tank wall <code>680.34</code></li>
  <li>For string lights, a speaker, a fan</li></ul>`},{t:"Pump outlet post (CKT 1)",w:"Behind the planters, 6.7 ft from the tank",pin:[1355,1448,2.2],pos:[1292,1560,7.5],tgt:[1342,1455,-.8],b:`<ul>
  <li>WR/TR GFCI receptacle, extra-duty in-use cover <code>680.32, 406.9(B)</code></li>
  <li>At least 6 ft from the tank wall, measured along the cord's path <code>680.34</code></li>
  <li>Pressure-treated 4x4 set 24" deep on 6" of gravel, about 8" clear of the steel wall</li><li>Factory 90\xB0 sweep, Sch 80 riser strapped to the post, bushing at grade</li>
  <li>Pump is cord-and-plug, double insulated, with a GFCI plug; no extension cords <code>680.31</code></li></ul>`},{t:"Capped stub for the future shed subpanel",w:"Back of the shed",pin:[1338.8,1516.5,1.3],pos:[1290,1580,6],tgt:[1338,1510,-.4],b:`<ul>
  <li>Empty 1-1/2" Sch 40 PVC with a pull string, two 45\xB0 sweeps toward the shed</li>
  <li>Stubbed 6" above grade, glued caps both ends, marker stake; photograph and measure before backfill</li>
  <li>Sized for a future 60\u2013100 A feeder (4-wire, neutral and ground separate at the subpanel)</li></ul>
  <div class="warn">When the bigger shed goes in: mount the subpanel on the shed wall facing the yard (36" clear in front, 110.26), disconnect at the building (225.32), ground rods per 250.53.</div>`}],vc=new st;lt.add(vc);var zn=0,Qy=$i("shed");{let i=W(1287),e=W(1339),t=j(1505.38),n=j(1602.87),s=e-i,r=n-t,a=new st;a.position.set((i+e)/2,0,(t+n)/2),Qy.add(a),Jn(a,1313,1554,0);let o=6.2,c=6.9,l=me(s,c,r,F.shed,0,c/2,0,a),h=me(s+.6,.15,r+.6,F.shedRoof,0,(o+c)/2+.1,0,a);h.rotation.z=Math.atan((c-o)/s),me(.06,5.6,2.6,F.trim,-s/2-.02,2.9,0,a),me(.07,5.2,2.2,F.shed,-s/2-.04,2.75,0,a)}var Mc=$i("context");function Fp(i,e,t,n,s,r,a=8.6,o=4/12){let c=new st;Mc.add(c);let l=(t-i)/Se,h=(n-e)/Se,u=W((i+t)/2),d=j((e+n)/2),f=new q(new mt(l,a+.3,h),new ee({color:s,roughness:.85}));f.position.set(u,(a+.3)/2-.3,d),f.castShadow=f.receiveShadow=!0,c.add(f);let m=1.2,b=u-l/2-m,g=u+l/2+m,p=d-h/2-m,x=d+h/2+m,_=g-b>=x-p,v=(_?x-p:g-b)/2,w=a+v*o,M=[];if(_){let y=(p+x)/2,E=b+v,I=g-v;M.push(b,a,x,g,a,x,I,w,y,b,a,x,I,w,y,E,w,y,g,a,p,b,a,p,E,w,y,g,a,p,E,w,y,I,w,y,b,a,p,b,a,x,E,w,y,g,a,x,g,a,p,I,w,y)}else{let y=(b+g)/2,E=p+v,I=x-v;M.push(g,a,x,g,a,p,y,w,E,g,a,x,y,w,E,y,w,I,b,a,p,b,a,x,y,w,I,b,a,p,y,w,I,y,w,E,g,a,p,b,a,p,y,w,E,b,a,x,g,a,x,y,w,I)}let S=new dt;S.setAttribute("position",new Ie(M,3)),S.computeVertexNormals();let R=new q(S,new ee({color:r,roughness:.95,side:vt}));return R.castShadow=!0,c.add(R),c}Fp(1460,300,1800,1077,10135206,7172212);Fp(95,390,402,1095,15328990,6974576);{let i=W(1446),e=W(1682),t=j(1586),n=j(1738),s=e-i,r=n-t,a=-.4,o=new st;o.position.set((i+e)/2,a,(t+n)/2),Mc.add(o),me(s,7,r,new ee({color:10264476,roughness:.85}),0,3.5,0,o);let c=[[-s/2-.4,7],[-s/2+1.3,10.2],[0,11.6],[s/2-1.3,10.2],[s/2+.4,7]],l=[];for(let d=0;d<c.length-1;d++){let[f,m]=c[d],[b,g]=c[d+1];l.push(f,m,-r/2-.4,b,g,-r/2-.4,b,g,r/2+.4,f,m,-r/2-.4,b,g,r/2+.4,f,m,r/2+.4)}let h=new dt;h.setAttribute("position",new Ie(l,3)),h.computeVertexNormals();let u=new q(h,new ee({color:12240588,roughness:.4,metalness:.6,side:vt}));u.castShadow=!0,o.add(u);for(let d of[-1,1]){let f=new cr([new re(-s/2,7),...c.slice(1,4).map(([b,g])=>new re(b,g)),new re(s/2,7)]),m=new q(new sa(f),new ee({color:10264476,roughness:.85,side:vt}));m.position.z=d*r/2,o.add(m)}}{let i=new dt;i.setAttribute("position",new Ie([W(300),9.5,j(1020),W(470),8.2,j(1010),W(420),9.8,j(1150),W(300),9.5,j(1020),W(420),9.8,j(1150),W(310),8,j(1160)],3)),i.computeVertexNormals();let e=new q(i,F.sail);e.castShadow=!0,Mc.add(e)}function Ri(i,e,t,n,s,r,a,o={}){let c=pt(a),l=new st;l.position.set(i,t,e);let[h,u]=o.lean||[0,0],d=r==="juniper"?n*.25:n*.42,f=F.trunk.clone(),m=new q(new ft(s*.05,s*.08,d,8),f);if(m.position.y=d/2,m.castShadow=!0,l.add(m),h||u){let w=new A(h*.7,d+s*.3,u*.7);m.position.copy(w).multiplyScalar(.5),m.quaternion.setFromUnitVectors(new A(0,1,0),w.clone().normalize()),m.scale.y=w.length()/d}let b=[],g=r==="juniper"?9:18,p=o.col?new Pe(o.col):r==="juniper"?new Pe(4021303):r==="fall"?new Pe(10852949):new Pe(5797949);for(let w=0;w<g;w++){let M=w/g,S,R,y,E;if(r==="juniper")R=d+M*(n-d)*.95,E=s*(1-M*.75)*(.7+c()*.3),S=(c()-.5)*s*.4,y=(c()-.5)*s*.4;else{let D=c()*kt,G=c()*s*.75;S=Math.cos(D)*G,y=Math.sin(D)*G,R=d+s*.35+c()*(n-d-s*.7),E=s*(.32+c()*.26)}let I=new lr(E,2);I.deleteAttribute("uv"),I.deleteAttribute("normal");let O=lu(fh(I),.55,1.2/E,c()*90,.82),k=O.attributes.position;O.translate(S+h,R,y+u);let L=new Float32Array(k.count*3),U=p.clone().offsetHSL((c()-.5)*.03,(c()-.5)*.1,(c()-.5)*.08);for(let D=0;D<k.count;D++){let G=.95+.35*(k.getY(D)-R+E)/(2*E);L[D*3]=U.r*G,L[D*3+1]=U.g*G,L[D*3+2]=U.b*G}O.setAttribute("color",new Mt(L,3)),O.setAttribute("uv",new Mt(new Float32Array(k.count*2).map((D,G)=>G%2?k.getY(G>>1)/3:(k.getX(G>>1)+k.getZ(G>>1))/3),2)),b.push(O)}let x=F.canopyTree.clone(),_=new q(Wo(b),x);_.castShadow=!0,_.receiveShadow=!0,l.add(_),Mc.add(l),_.geometry.computeBoundingSphere();let v=_.geometry.boundingSphere;return tc.push({mesh:_,mat:x,tmat:f,c:v.center.clone().add(l.position),r:v.radius*.85,x:l.position.x,z:l.position.z,top:l.position.y+n,rh:s*.95,front:!!o.front}),Hp.push({g:l,kind:r,H:n,R0:s,col:o.col,seed:a,lean:o.lean,front:!!o.front,t:tc[tc.length-1]}),l}var Hp=[];function $y(){let i={},e=4;for(let n of["oakA","oakB","elm","juniper"])vp("tree_"+n+".glb",s=>{let r=new gn().setFromObject(s.scene),a=r.getSize(new A);i[n]={scene:s.scene,w:Math.max(a.x,a.z),h:a.y},--e===0&&t()});function t(){for(let n of Hp){let s=i[n.kind==="juniper"?"juniper":n.kind==="fall"?"elm":n.front?"oakB":n.seed%2?"oakA":"oakB"];if(!s)continue;let r=n.g;r.children.slice().forEach(d=>{r.remove(d),d.geometry?.dispose()});let o=s.scene.clone(!0),c=n.H/s.h*(n.front?.82:1),l=n.R0*(n.front?2.7:2.25)/s.w;if(o.scale.set(l,c,l),o.rotation.y=n.seed*2.399%kt,n.lean){let d=new Xe().set(1,n.lean[0]/n.H,0,0,0,1,0,0,0,n.lean[1]/n.H,1,0,0,0,0,1);o.updateMatrix(),o.matrix.premultiply(d),o.matrixAutoUpdate=!1}let h=null,u=null;o.traverse(d=>{if(!d.isMesh)return;d.castShadow=!0,d.receiveShadow=!0;let f=d.material.clone();if(d.name.includes("leaves")||f.name==="leaves"){if(f.alphaTest=.4,f.alphaToCoverage=!0,f.side=vt,f.transparent=!1,n.col){let m=new Pe(n.col),b=new Pe(4086828);f.color.setRGB(m.r/b.r*.62,m.g/b.g*.62,m.b/b.b*.62)}h=f}else u=f;d.material=f}),r.add(o),n.t&&h&&(n.t.mat=h,n.t.tmat=u||h)}wr(),Rn()}}var tc=[];{let i=pt(2024);for(let e=0;e<54;e++){let t=380+i()*1450,n=1800+Math.pow(i(),.8)*700,s=i()<.22?"juniper":i()<.15?"fall":"oak",r=Ap(t,n);Ri(W(t),j(n),r,26+i()*22,7+i()*6,s,e+1)}Ri(W(1560),j(1520),-.4,30,9,"fall",901);for(let[e,t,n,s]of[[300,1250,34,15],[1640,1135,28,12]])Ri(W(e),j(t),-.3,n,s,"oak",e+t);Ri(W(884),j(-40),-.3,26,10,"oak",611,{front:1,col:10119742,lean:[-5.5,-4.5]}),Ri(W(1092),j(-62),-.3,30,11.5,"oak",612,{front:1,col:8225877,lean:[.5,-4]}),Ri(W(1112),j(92),-.3,17,5,"oak",613,{front:1,col:4151859}),Ri(W(1770),j(40),-.3,34,17,"oak",614,{col:10633263}),Ri(W(-60),j(330),-.3,28,11,"oak",615,{col:11565626}),nn.trees.slice(4).forEach(([e,t,n],s)=>Ri(W(e),j(t),-.3,18+n/4,n/Se*2.2,"oak",300+s))}var br={top:{value:new Pe},hor:{value:new Pe},sunDir:{value:new A},glow:{value:new Pe}},ba=new q(new ci(3e3,32,16),new Kn({side:Gt,depthWrite:!1,uniforms:br,vertexShader:"varying vec3 vD;void main(){vD=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform vec3 top,hor,glow,sunDir;varying vec3 vD;void main(){float h=clamp(vD.y,0.,1.);vec3 c=mix(hor,top,pow(h,0.55));float s=max(dot(normalize(vD),normalize(sunDir)),0.);c+=glow*(pow(s,8.)*0.35+pow(s,600.)*2.);if(vD.y<0.)c=mix(hor,hor*0.8,clamp(-vD.y*4.,0.,1.));gl_FragColor=vec4(c,1.);}"}));ba.renderOrder=-1;lt.add(ba);var kp=new Lo(14674418,7167047,.7);lt.add(kp);var Qn=new dr(16777215,2.6);Qn.castShadow=!0;Qn.shadow.mapSize.set($h?2048:4096,$h?2048:4096);var Sr=Qn.shadow.camera;Sr.left=-58;Sr.right=58;Sr.top=58;Sr.bottom=-58;Sr.near=1;Sr.far=400;Qn.shadow.bias=-4e-4;Qn.shadow.normalBias=.03;var Bp=new A(W(1e3),0,j(1150));Qn.target.position.copy(Bp);lt.add(Qn,Qn.target);lt.fog=new mo(14542054,220,1400);function zp(i,e){let t=30.27*Math.PI/180,n=-97.74,s=[21,52,80,111,141,172,202,233,264,294,325,355][i-1],r=i>=3&&i<=10?1:0,a=23.44*Math.sin(kt/365*(s-81))*Math.PI/180,o=kt/365*(s-81),c=9.87*Math.sin(2*o)-7.53*Math.cos(o)-1.5*Math.sin(o),h=(e-r+(4*(n+90)+c)/60-12)*15*Math.PI/180,u=Math.asin(Math.sin(t)*Math.sin(a)+Math.cos(t)*Math.cos(a)*Math.cos(h)),d=(Math.atan2(Math.sin(h),Math.cos(h)*Math.sin(t)-Math.tan(a)*Math.cos(t))+Math.PI)%kt;return{el:u,az:d}}function Gp(){let{el:i,az:e}=zp(Ce.month,Ce.time),t=e-Ce.north*Math.PI/180,n=new A(Math.cos(i)*Math.sin(t),Math.sin(i),-Math.cos(i)*Math.cos(t));Qn.position.copy(Bp).addScaledVector(n,220);let s=Math.max(i,0),r=mn(Math.sin(s)*3,0,1),a=new Pe().setHSL(.08,.85,.6).lerp(new Pe(16774890),mn(Math.sin(s)*2.2,0,1));Qn.color.copy(a),Qn.intensity=i>0?.4+2.4*r:0,kp.intensity=.35+.45*mn(Math.sin(i+.1)*2,0,1),br.top.value.setHSL(.58,.45,.25+.4*mn(Math.sin(i+.12)*2,0,1)),br.hor.value.setHSL(i<.15?.07:.57,i<.15?.4:.25,.55+.3*mn(Math.sin(i+.1)*3,0,1)),br.glow.value.copy(a),br.sunDir.value.copy(n),lt.fog.color.copy(br.hor.value),Vt.toneMappingExposure=i>0?1:.9,document.getElementById("needle").setAttribute("transform",`rotate(${-Ce.north})`),Vp(),Xp(),wr()}function Vp(){let i=Math.atan2(ou.x,-ou.z)*180/Math.PI;document.getElementById("needle").setAttribute("transform",`rotate(${-(Ce.north+i)})`)}var Jo=i=>`${Math.round(i*12)} in`,at=i=>document.getElementById(i);function es(){window.__placePump(),xy();for(let s of["lawn","walk"])wp(Et[s],Et[s].userData.h);for(let[s,r,a,o]of vr)s.position.y=tn(r,a)+Tp(o);ky();let i=wy();Py(),window.__buildHoses(),Cy();let e=document.getElementById("stats");e.innerHTML="";let t=(s,r,a)=>{let o=document.createElement("div");o.className="stat"+(a?" warn":""),o.innerHTML=`<b>${s}</b>`+r.map(c=>`<span>${c}</span>`).join(""),e.appendChild(o)};{let s=ac()-Ce.sink+2-ga();t("Pool",[`Rim ${Jo(Math.abs(s))} ${s>=0?"above":"below"} the pad`,"Tank sits on grade on the pool level"].concat(Ce.sink>0?["Backfill with gravel and wrap the buried steel."]:[]))}let n=s=>s===0?"flush with patio":`${Jo(-s)} below patio`;at("o-pad").textContent=n(Ce.pad),at("o-step1").textContent=Ce.step1<gt?"none":Jo(Ce.step1),at("o-step2").textContent=Ce.step2<gt?"none":Jo(Ce.step2);for(let s of["pool","furniture","umbrella","planters","shed"])An[s].visible=Ce.layers[s];Ce.cut&&(An.planters.visible=!1),Fy(),An.context.visible=Ce.layers.context,nc=!0,Ot.visible=Ce.layers.electrical,Np(),Xp(),wr()}var ev=4.7,Wp=[{key:"overview",name:"Overview",sub:"Whole yard",pos:[700,1700,46],tgt:[1130,1270,-2]},{key:"hero",name:"Patio, west post",sub:"Photo 5",pos:[1046,1098,"eye"],tgt:[1320,1590,"tgt"]},{key:"chimney",name:"From the chimney",sub:"Photo 1",pos:[1042,1e3,"eye"],tgt:[1080,1600,"tgt"]},{key:"back",name:"Back fence, walkway",sub:"Photo 3",pos:[994,1668,"eye"],tgt:[994,950,6]},{key:"pool",name:"Lounger on the pad",sub:"Eye level, seated",pos:[1250,1186,3.3],tgt:[1185,1560,.8]},{key:"deck",name:"Gate deck",sub:"Trex, by the patio",pos:[1215,1225,7.5],tgt:[1335,1040,0]},{key:"top",name:"Plan view",sub:"Straight down",pos:[1130,1395,150],tgt:[1130,1394,0]}];function tv(i){let e=i.pos[2]==="eye"?tn(i.pos[0],i.pos[1])+ev:i.pos[2],t=i.tgt[2]==="tgt"?e-1.2:i.tgt[2];return{pos:new A(W(i.pos[0]),e,j(i.pos[1])),tgt:new A(W(i.tgt[0]),t,j(i.tgt[1]))}}var Tn=null,gu=matchMedia("(prefers-reduced-motion: reduce)").matches;Ms.forEach((i,e)=>{let t=document.createElement("div");t.className="pin",t.innerHTML=`${e+1}<span>${i.t}</span>`,t.onclick=()=>_a(e);let n=new qo(t);n.position.set(W(i.pin[0]),i.pin[2],j(i.pin[1])),n.visible=!1,vc.add(n),i.el=t,i.o=n});{let i=at("steps");Ms.forEach((e,t)=>{let n=document.createElement("li");n.innerHTML=`<button type="button" aria-pressed="false"><span class="n">${t+1}</span><span>${e.t}</span></button>`,n.firstChild.onclick=()=>_a(t),i.appendChild(n),e.btn=n.firstChild})}function _a(i,e){zn=Math.max(0,Math.min(Ms.length-1,i));let t=Ms[zn];Ms.forEach((r,a)=>{r.el.classList.toggle("on",a===zn),r.btn.setAttribute("aria-pressed",String(a===zn))}),at("step-card").innerHTML=`<h3>${zn+1}. ${t.t}</h3><div class="where">${t.w}</div>${t.b}`,at("st-prev").disabled=zn===0,at("st-next").textContent=zn===Ms.length-1?"Done":"Next";let n=new A(W(t.pos[0]),t.pos[2],j(t.pos[1])),s=new A(W(t.tgt[0]),t.tgt[2],j(t.tgt[1]));_t.fov=50,_t.updateProjectionMatrix(),e||gu?(_t.position.copy(n),ct.target.copy(s),ct.update()):Tn={t0:performance.now(),p0:_t.position.clone(),t0v:ct.target.clone(),p1:n,t1:s},document.querySelectorAll("#views button").forEach(r=>r.setAttribute("aria-pressed","false")),Rn()}function Ec(i,e){let t=i==="elec";Ce.mode2=i,at("tab-d").setAttribute("aria-pressed",String(!t)),at("tab-e").setAttribute("aria-pressed",String(t)),at("pane-d").hidden=t,at("pane-e").hidden=!t,Ce.cut!==t&&(Ce.cut=t,mu()),at("labels").hidden=!t,vc.children.forEach(n=>n.visible=t),t?(An.electrical.visible||(Ce.layers.electrical=!0,An.electrical.visible=!0),_a(zn,e)):Sc("overview",e),Rn()}function Sc(i,e){let t=Wp.find(r=>r.key===i);if(!t)return;Ce.view=i,Ce.mode2==="elec"&&(Ce.mode2="design",at("tab-d").setAttribute("aria-pressed","true"),at("tab-e").setAttribute("aria-pressed","false"),at("pane-d").hidden=!1,at("pane-e").hidden=!0,Ce.cut=!1,mu(),at("labels").hidden=!0,vc.children.forEach(r=>r.visible=!1));let{pos:n,tgt:s}=tv(t);_t.fov=i==="top"?40:t.pos[2]==="eye"||i==="pool"?68:50,_t.updateProjectionMatrix(),e||gu?(_t.position.copy(n),ct.target.copy(s),ct.update(),Rn()):Tn={t0:performance.now(),p0:_t.position.clone(),t0v:ct.target.clone(),p1:n,t1:s},document.querySelectorAll("#views button").forEach(r=>r.setAttribute("aria-pressed",String(r.dataset.key===i))),Rn()}{let i=document.getElementById("views");for(let e of Wp){let t=document.createElement("button");t.type="button",t.dataset.key=e.key,t.id="v-"+e.key,t.innerHTML=`${e.name}<small>${e.sub}</small>`,t.onclick=()=>Sc(e.key),i.appendChild(t)}}ct.addEventListener("start",()=>{Tn=null;{let i=Vt.domElement.getBoundingClientRect(),e=wc(i.left+i.width/2,i.top+i.height/2),t=e.distanceTo(_t.position);t>1.5&&t<400&&Math.abs(t-_t.position.distanceTo(ct.target))>.5&&(ct.target.copy(e),ct.update())}document.querySelectorAll("#views button").forEach(i=>i.setAttribute("aria-pressed","false"))});function bu(i,e,t,n,s){let r=at(i);r.value=n(Ce[e]),typeof au<"u"&&au.push([r,e,n]),r.addEventListener("input",()=>{Ce[e]=t(+r.value),s(),bc()})}var au=[];bu("g-pad","pad",i=>i*gt,i=>Math.round(i*12),es);bu("g-step1","step1",i=>i*gt,i=>Math.round(i*12),es);bu("g-step2","step2",i=>i*gt,i=>Math.round(i*12),es);at("g-reset").addEventListener("click",()=>{Object.assign(Ce,sp);for(let[i,e,t]of au)e in sp&&(i.value=t(Ce[e]));es(),bc()});{let i=[["pool","Pool + pump"],["furniture","Loungers"],["umbrella","Umbrella"],["planters","Pots + boulders"],["shed","Shed"],["electrical","Buried conduit"],["context","Neighbors + trees"]],e=at("layers");for(let[t,n]of i){let s=document.createElement("label");s.innerHTML=`<input type="checkbox" id="l-${t}"${Ce.layers[t]?" checked":""}> ${n}`,s.querySelector("input").addEventListener("change",r=>{Ce.layers[t]=r.target.checked,es(),bc()}),e.appendChild(s)}}function Xp(){let{el:i}=zp(Ce.month,Ce.time);at("badge").innerHTML=`<b>Late October afternoon</b>${i<=0?" \xB7 sun is down":` \xB7 sun ${Math.round(i*180/Math.PI)}\xB0 up`}`}var Ki=!0,nc=!0;function Rn(){Ki=!0}function wr(){Ce.cut&&Op(),Vt.shadowMap.needsUpdate=!0,Ki=!0}function nv(){if(!An.context.visible)return!1;let i=_t.position,e=ct.target,t=e.x-i.x,n=e.z-i.z,s=t*t+n*n||1e-6,r=Math.sqrt(s),a=!1;for(let o of tc){let c=mn(((o.x-i.x)*t+(o.z-i.z)*n)/s,0,1),l=i.x+t*c,h=i.z+n*c,u=Math.hypot(o.x-l,o.z-h),d=i.y+(e.y-i.y)*c,m=!(o.front&&i.z<j(376))&&c>0&&c<1&&u<o.rh+r*c*.12&&d<o.top||o.c.distanceTo(i)<o.r*1.05?0:1,b=o.mat.opacity;if(b=gu?m:b+(m-b)*.3,Math.abs(b-m)<.05?b=m:a=!0,b!==o.mat.opacity){let g=b<.999;for(let p of[o.mat,o.tmat])p.opacity=b,p.colorWrite=b>.02,p.transparent!==g&&(p.transparent=g,p.depthWrite=!g,p.needsUpdate=!0)}}return a}ct.addEventListener("change",Rn);var ou=new A,qp=new jo({element:at("labels")});function jp(){let i=ma.clientWidth,e=ma.clientHeight;!i||!e||(Vt.setSize(i,e,!1),qp.setSize(i,e),_t.aspect=i/e,_t.updateProjectionMatrix(),Rn())}new ResizeObserver(jp).observe(ma);function Yp(i){if(requestAnimationFrame(Yp),Tn){let e=mn((i-Tn.t0)/900,0,1),t=e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2;_t.position.lerpVectors(Tn.p0,Tn.p1,t),ct.target.lerpVectors(Tn.t0v,Tn.t1,t),e>=1&&(Tn=null),Ki=!0}ct.update()&&(Ki=!0),(Ki||nc)&&(nc=nv(),nc&&(Ki=!0)),Ki&&(Ki=!1,_t.getWorldDirection(ou),Vp(),ba.position.copy(_t.position),Vt.render(lt,_t),Ce.cut&&qp.render(lt,_t))}var jh=new No,_p=new re,iv=new A;function sv(){let i=[];return lt.traverse(e=>{if(!(e.isMesh||e.isInstancedMesh)||e===ba||!e.visible||nu.includes(e))return;let t=e,n=!1;for(;t;){if(t.visible===!1){n=!0;break}if(t===An.context){n=!0;break}t=t.parent}n||i.push(e)}),i}var Yh=null,xp=0;function wc(i,e){let t=Vt.domElement.getBoundingClientRect();_p.set((i-t.left)/t.width*2-1,-(e-t.top)/t.height*2+1),jh.setFromCamera(_p,_t);let n=performance.now();(!Yh||n-xp>800)&&(Yh=sv()),xp=n;let s=jh.intersectObjects(Yh,!1);for(let r of s){if(Ce.cut&&r.point.y<Mr.top&&mc(r.point.x*Se+Li,r.point.z*Se+Ii)){let o=r.object,c=!1;for(;o;){if(o===Bn||o===Ot){c=!0;break}o=o.parent}if(!c)continue}let a=[].concat(r.object.material)[0];if(!(a&&a.opacity<.5)&&!(a&&a.wireframe))return r.point}return jh.ray.at(Math.max(_t.position.distanceTo(ct.target),5),iv).clone()}var Kh=null,Zh=[0,0],yp=0;function Kp(i,e){let t=_t.position.distanceTo(i);if(e<1&&t*e<2&&(e=Math.min(1,2/t)),!(e>=1&&e<1.0001)&&!(e>1&&_t.position.distanceTo(ct.target)*e>ct.maxDistance)){_t.position.sub(i).multiplyScalar(e).add(i),ct.target.sub(i).multiplyScalar(e).add(i);{let n=ct.target.clone().sub(_t.position).normalize(),s=i.clone().sub(_t.position).dot(n);s>1.5&&ct.target.copy(_t.position).addScaledVector(n,s)}Tn=null,ct.update(),Rn()}}ma.addEventListener("wheel",i=>{i.preventDefault(),i.stopPropagation();let e=performance.now();(!Kh||e-yp>220||Math.hypot(i.clientX-Zh[0],i.clientY-Zh[1])>6)&&(Kh=wc(i.clientX,i.clientY),Zh=[i.clientX,i.clientY]),yp=e;let t=i.deltaY*(i.deltaMode===1?33:i.deltaMode===2?400:1),n=i.ctrlKey?.022:.0042;Kp(Kh,mn(Math.exp(t*n),.45,2.2))},{capture:!0,passive:!1});function Zp(i,e){let t=wc(i,e),n=_t.position.clone().sub(t),s=n.length(),r=mn(s*.3,1.2,30);Tn={t0:performance.now(),p0:_t.position.clone(),t0v:ct.target.clone(),p1:t.clone().add(n.multiplyScalar(r/s)),t1:t.clone()},Rn()}Vt.domElement.addEventListener("dblclick",i=>{i.preventDefault(),Zp(i.clientX,i.clientY)});{let i=0,e=0,t=0;Vt.domElement.addEventListener("pointerup",n=>{if(n.pointerType!=="touch")return;let s=performance.now();s-i<320&&Math.hypot(n.clientX-e,n.clientY-t)<24?(Zp(n.clientX,n.clientY),i=0):(i=s,e=n.clientX,t=n.clientY)})}function Jp(i){let e=Vt.domElement.getBoundingClientRect();Kp(wc(e.left+e.width/2,e.top+e.height/2),i)}at("z-in").onclick=()=>Jp(.55);at("z-out").onclick=()=>Jp(1.8);at("tab-d").onclick=()=>Ec("design");at("tab-e").onclick=()=>Ec("elec");at("st-prev").onclick=()=>_a(zn-1);at("st-next").onclick=()=>zn===Ms.length-1?Ec("design"):_a(zn+1);function xa(i){Ce.drag=i;let e=i==="rotate";ct.mouseButtons={LEFT:e?en.ROTATE:en.PAN,MIDDLE:en.DOLLY,RIGHT:e?en.PAN:en.ROTATE},ct.touches={ONE:e?pn.ROTATE:pn.PAN,TWO:e?pn.DOLLY_PAN:pn.DOLLY_ROTATE},at("d-move").setAttribute("aria-pressed",String(!e)),at("d-rot").setAttribute("aria-pressed",String(e)),bc()}at("d-move").onclick=()=>xa("move");at("d-rot").onclick=()=>xa("rotate");addEventListener("keydown",i=>{(i.key==="r"||i.key==="R")&&!i.repeat&&!/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)&&Ce.drag!=="rotate"&&(Ce._held=!0,xa("rotate"))});addEventListener("keyup",i=>{(i.key==="r"||i.key==="R")&&Ce._held&&(Ce._held=!1,xa("move"))});xa(Ce.drag==="rotate"?"rotate":"move");var Qp=at("prog").firstElementChild,cu=at("pn-sub");Qp.style.width="45%";es();Gp();jp();Sc("overview",!0);gy();mu();requestAnimationFrame(Yp);cu.textContent="Loading ground textures\u2026";Qp.style.width="70%";function gc(i,e){i.onBeforeCompile=t=>{for(let n of["basalt","lawn","mulch","limestone","turf"])for(let s of["A","N"])t.uniforms["t_"+n+s]={value:rt[n+s]};t.uniforms.t_basaltO={value:rt.basaltO},t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vGW;`).replace("#include <project_vertex>",`#include <project_vertex>
vGW=(modelMatrix*vec4(transformed,1.)).xyz;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D t_basaltA,t_basaltN,t_basaltO,t_lawnA,t_lawnN,t_mulchA,t_mulchN,t_limestoneA,t_limestoneN,t_turfA,t_turfN;varying vec3 vGW;
float gH(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float gN(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(gH(i),gH(i+vec2(1,0)),f.x),mix(gH(i+vec2(0,1)),gH(i+vec2(1,1)),f.x),f.y);}
const mat2 gR=mat2(.8,.6,-.6,.8);float gBl;vec4 gM;float gT;
vec3 sA(sampler2D t,float sc){return mix(texture2D(t,vGW.xz/sc).rgb,texture2D(t,gR*vGW.xz/(sc*1.37)+.37).rgb,gBl);}
vec3 sN(sampler2D t,float sc){vec3 a=texture2D(t,vGW.xz/sc).xyz*2.-1.,b=texture2D(t,gR*vGW.xz/(sc*1.37)+.37).xyz*2.-1.;b.xy=transpose(gR)*b.xy;return normalize(mix(a,b,gBl));}`).replace("#include <map_fragment>",`#include <map_fragment>
gBl=smoothstep(.25,.75,gN(vGW.xz*.4));float bkL=.1;
#if defined(GP_FORCE)
 gM=vec4(GP_FORCE);gT=GP_TURF;
#elif defined(USE_MAP)
 {vec3 bk=texture2D(map,vMapUv,4.).rgb;float lum=dot(bk,vec3(.299,.587,.114));bkL=lum;float mx=max(bk.r,max(bk.g,bk.b)),mn=min(bk.r,min(bk.g,bk.b));float sat=(mx-mn)/max(mx,1e-3);
  float bas=smoothstep(.115,.075,lum)*smoothstep(.42,.24,sat);
  float law=smoothstep(.0,.015,bk.g-max(bk.r,bk.b))*smoothstep(.18,.32,sat);
  float mul=smoothstep(.0,.02,bk.r-bk.g)*smoothstep(.0,.01,bk.g-bk.b)*smoothstep(.3,.45,sat)*smoothstep(.3,.18,lum);
  float lim=smoothstep(.33,.5,lum)*smoothstep(.22,.1,sat);
  gM=vec4(bas,law,mul,lim);gT=0.;}
#else
 gM=vec4(0.);gT=0.;
#endif
{vec3 c=diffuseColor.rgb;float macro=.9+.2*gN(vGW.xz*.15);
 if(gM.x>0.)c=mix(c,sA(t_basaltA,2.)*macro,gM.x);
 if(gM.y>0.)c=mix(c,sA(t_lawnA,1.5)*macro*clamp(bkL/.105,.82,1.18),gM.y);
 if(gM.z>0.)c=mix(c,sA(t_mulchA,2.)*macro,gM.z);
 if(gM.w>0.)c=mix(c,min(sA(t_limestoneA,2.)*vec3(1.42,1.38,1.3),vec3(1.))*(.95+.08*gN(vGW.xz*.15)),gM.w);
 if(gT>0.){vec3 tc=sA(t_turfA,1.);tc=mix(vec3(dot(tc,vec3(.3,.59,.11))),tc,.8)*1.35;c=mix(c,tc*(.95+.08*gN(vGW.xz*.2)),gT);}
 diffuseColor.rgb=c;}`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
if(gM.x>0.)roughnessFactor=mix(roughnessFactor,mix(texture2D(t_basaltO,vGW.xz/2.).g,texture2D(t_basaltO,gR*vGW.xz/2.74+.37).g,gBl),gM.x);
roughnessFactor=mix(roughnessFactor,.96,clamp(gM.y+gM.z,0.,1.));roughnessFactor=mix(roughnessFactor,.9,gM.w);roughnessFactor=mix(roughnessFactor,.78,gT);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
{vec3 tn=vec3(0.);float w=0.;
 if(gM.x>0.){tn+=sN(t_basaltN,2.)*gM.x;w+=gM.x;}
 if(gM.y>0.){tn+=sN(t_lawnN,1.5)*gM.y;w+=gM.y;}
 if(gM.z>0.){tn+=sN(t_mulchN,2.)*gM.z;w+=gM.z;}
 if(gM.w>0.){tn+=sN(t_limestoneN,2.)*gM.w;w+=gM.w;}
 if(gT>0.){tn+=sN(t_turfN,1.)*gT;w+=gT;}
 if(w>0.){tn=normalize(tn/w);vec3 pv=(viewMatrix*vec4(tn.x/tn.z,0.,tn.y/tn.z,0.)).xyz;normal=normalize(mix(normal,normalize(normal+pv),min(w,1.)));}}`)},e&&(i.defines=Object.assign({},i.defines,{GP_FORCE:e==="lime"?"0.,0.,0.,1.":e==="lawn"?"0.,1.,0.,0.":"0.,0.,0.,0.",GP_TURF:e==="turf"?"1.":"0."})),i.customProgramCacheKey=()=>"groundPBR2"+(e||""),i.needsUpdate=!0}gc(F.ground);gc(F.outside);new bs().load("ground.webp",i=>{i.colorSpace=At,i.anisotropy=du,i.minFilter=ri,F.ground.map=i,F.ground.color.set(16777215),F.ground.needsUpdate=!0,es(),wr(),cu.textContent="To scale from the plan \xB7 feet",at("prog").hidden=!0,window.__ready=!0,Rn()},void 0,()=>{cu.textContent="Ground textures did not load; showing flat colours.",at("prog").hidden=!0,window.__ready=!0});$y();window.__mode=(i,e)=>{e!=null&&(zn=e),Ec(i,!0)};window.__cam=(i,e)=>{Tn=null,_t.position.set(W(i[0]),i[2],j(i[1])),ct.target.set(W(e[0]),e[2],j(e[1])),_t.fov=55,_t.updateProjectionMatrix(),ct.update(),Rn()};window.__goView=Sc;window.__P=Ce;window.__update=()=>{es(),Gp()};
