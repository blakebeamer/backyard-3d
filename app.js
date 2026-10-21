var Kc="160",Xe={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},rn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},tf=0,Yl=1,ef=2;var Pu=1,jc=2,Kn=3,xi=0,Ne=1,Ee=2;var mi=0,Es=1,ql=2,Zl=3,$l=4,nf=5,Ni=100,sf=101,rf=102,Jl=103,Kl=104,of=200,af=201,cf=202,lf=203,ac=204,cc=205,hf=206,uf=207,df=208,ff=209,pf=210,mf=211,gf=212,_f=213,xf=214,yf=0,vf=1,Mf=2,mo=3,Ef=4,Sf=5,bf=6,wf=7,Lu=0,Tf=1,Af=2,gi=0,Rf=1,Cf=2,Pf=3,Qc=4,Lf=5,If=6;var Iu=300,ws=301,Ts=302,lc=303,hc=304,$o=306,ar=1e3,Rn=1001,uc=1002,sn=1003,jl=1004;var Ta=1005;var yn=1006,Df=1007;var Hi=1008;var _i=1009,Uf=1010,Nf=1011,tl=1012,Du=1013,fi=1014,pi=1015,cr=1016,Uu=1017,Nu=1018,Fi=1020,Of=1021,Cn=1023,Ff=1024,Bf=1025,Bi=1026,As=1027,zf=1028,Ou=1029,Hf=1030,Fu=1031,Bu=1033,Aa=33776,Ra=33777,Ca=33778,Pa=33779,Ql=35840,th=35841,eh=35842,nh=35843,zu=36196,ih=37492,sh=37496,rh=37808,oh=37809,ah=37810,ch=37811,lh=37812,hh=37813,uh=37814,dh=37815,fh=37816,ph=37817,mh=37818,gh=37819,_h=37820,xh=37821,La=36492,yh=36494,vh=36495,kf=36283,Mh=36284,Eh=36285,Sh=36286;var go=2300,_o=2301,Ia=2302,bh=2400,wh=2401,Th=2402;var Hu=3e3,zi=3001,Vf=3200,Gf=3201,ku=0,Wf=1,vn="",Re="srgb",Qn="srgb-linear",el="display-p3",Jo="display-p3-linear",xo="linear",pe="srgb",yo="rec709",vo="p3";var ts=7680;var Ah=519,Xf=512,Yf=513,qf=514,Vu=515,Zf=516,$f=517,Jf=518,Kf=519,Rh=35044,Gu=35048;var Ch="300 es",dc=1035,jn=2e3,Mo=2001,Hn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ph=1234567,er=Math.PI/180,lr=180/Math.PI;function qi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function Ue(i,t,e){return Math.max(t,Math.min(e,i))}function nl(i,t){return(i%t+t)%t}function jf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Qf(i,t,e){return i!==t?(e-i)/(t-i):0}function nr(i,t,e){return(1-e)*i+e*t}function tp(i,t,e,n){return nr(i,t,1-Math.exp(-e*n))}function ep(i,t=1){return t-Math.abs(nl(i,t*2)-t)}function np(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ip(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function sp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function rp(i,t){return i+Math.random()*(t-i)}function op(i){return i*(.5-Math.random())}function ap(i){i!==void 0&&(Ph=i);let t=Ph+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function cp(i){return i*er}function lp(i){return i*lr}function fc(i){return(i&i-1)===0&&i!==0}function hp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Eo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function up(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _s(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function en(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Wu={DEG2RAD:er,RAD2DEG:lr,generateUUID:qi,clamp:Ue,euclideanModulo:nl,mapLinear:jf,inverseLerp:Qf,lerp:nr,damp:tp,pingpong:ep,smoothstep:np,smootherstep:ip,randInt:sp,randFloat:rp,randFloatSpread:op,seededRandom:ap,degToRad:cp,radToDeg:lp,isPowerOfTwo:fc,ceilPowerOfTwo:hp,floorPowerOfTwo:Eo,setQuaternionFromProperEuler:up,normalize:en,denormalize:_s},tt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},jt=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],y=s[1],x=s[4],M=s[7],T=s[2],A=s[5],b=s[8];return r[0]=a*_+o*y+c*T,r[3]=a*m+o*x+c*A,r[6]=a*p+o*M+c*b,r[1]=l*_+h*y+u*T,r[4]=l*m+h*x+u*A,r[7]=l*p+h*M+u*b,r[2]=d*_+f*y+g*T,r[5]=d*m+f*x+g*A,r[8]=d*p+f*M+g*b,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Da.makeScale(t,e)),this}rotate(t){return this.premultiply(Da.makeRotation(-t)),this}translate(t,e){return this.premultiply(Da.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Da=new jt;function Xu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function hr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function dp(){let i=hr("canvas");return i.style.display="block",i}var Lh={};function ir(i){i in Lh||(Lh[i]=!0,console.warn(i))}var Ih=new jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dh=new jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Hr={[Qn]:{transfer:xo,primaries:yo,toReference:i=>i,fromReference:i=>i},[Re]:{transfer:pe,primaries:yo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Jo]:{transfer:xo,primaries:vo,toReference:i=>i.applyMatrix3(Dh),fromReference:i=>i.applyMatrix3(Ih)},[el]:{transfer:pe,primaries:vo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Dh),fromReference:i=>i.applyMatrix3(Ih).convertLinearToSRGB()}},fp=new Set([Qn,Jo]),he={enabled:!0,_workingColorSpace:Qn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!fp.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Hr[t].toReference,s=Hr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Hr[i].primaries},getTransfer:function(i){return i===vn?xo:Hr[i].transfer}};function Ss(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ua(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var es,So=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{es===void 0&&(es=hr("canvas")),es.width=t.width,es.height=t.height;let n=es.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=es}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=hr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ss(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ss(e[n]/255)*255):e[n]=Ss(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},pp=0,bo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=qi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Na(s[a].image)):r.push(Na(s[a]))}else r=Na(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Na(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?So.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var mp=0,fn=class i extends Hn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Rn,s=Rn,r=yn,a=Hi,o=Cn,c=_i,l=i.DEFAULT_ANISOTROPY,h=vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=qi(),this.name="",this.source=new bo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ir("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===zi?Re:vn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Iu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ar:t.x=t.x-Math.floor(t.x);break;case Rn:t.x=t.x<0?0:1;break;case uc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ar:t.y=t.y-Math.floor(t.y);break;case Rn:t.y=t.y<0?0:1;break;case uc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ir("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Re?zi:Hu}set encoding(t){ir("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===zi?Re:vn}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Iu;fn.DEFAULT_ANISOTROPY=1;var ye=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(l+1)/2,M=(f+1)/2,T=(p+1)/2,A=(h+d)/4,b=(u+_)/4,I=(g+m)/4;return x>M&&x>T?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=A/n,r=b/n):M>T?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=A/s,r=I/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=b/r,s=I/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},pc=class extends Hn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(ir("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===zi?Re:vn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new fn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new bo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ti=class extends pc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},wo=class extends fn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mc=class extends fn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-o,p=c*d+l*f+h*g+u*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let T=Math.sqrt(x),A=Math.atan2(T,p*y);m=Math.sin(m*A)/T,o=Math.sin(o*A)/T}let M=o*y;if(c=c*m+d*M,l=l*m+f*M,h=h*m+g*M,u=u*m+_*M,m===1-o){let T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-o*f,t[e+2]=l*g+h*f+o*d-c*u,t[e+3]=h*g-o*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Oa.copy(this).projectOnVector(t),this.sub(Oa)}reflect(t){return this.sub(Oa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Oa=new C,Uh=new pn,ei=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,bn):bn.fromBufferAttribute(r,a),bn.applyMatrix4(t.matrixWorld),this.expandByPoint(bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),kr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),kr.copy(n.boundingBox)),kr.applyMatrix4(t.matrixWorld),this.union(kr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,bn),bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zs),Vr.subVectors(this.max,Zs),ns.subVectors(t.a,Zs),is.subVectors(t.b,Zs),ss.subVectors(t.c,Zs),ci.subVectors(is,ns),li.subVectors(ss,is),Pi.subVectors(ns,ss);let e=[0,-ci.z,ci.y,0,-li.z,li.y,0,-Pi.z,Pi.y,ci.z,0,-ci.x,li.z,0,-li.x,Pi.z,0,-Pi.x,-ci.y,ci.x,0,-li.y,li.x,0,-Pi.y,Pi.x,0];return!Fa(e,ns,is,ss,Vr)||(e=[1,0,0,0,1,0,0,0,1],!Fa(e,ns,is,ss,Vr))?!1:(Gr.crossVectors(ci,li),e=[Gr.x,Gr.y,Gr.z],Fa(e,ns,is,ss,Vr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Yn=[new C,new C,new C,new C,new C,new C,new C,new C],bn=new C,kr=new ei,ns=new C,is=new C,ss=new C,ci=new C,li=new C,Pi=new C,Zs=new C,Vr=new C,Gr=new C,Li=new C;function Fa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Li.fromArray(i,r);let o=s.x*Math.abs(Li.x)+s.y*Math.abs(Li.y)+s.z*Math.abs(Li.z),c=t.dot(Li),l=e.dot(Li),h=n.dot(Li);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var gp=new ei,$s=new C,Ba=new C,yi=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):gp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$s.subVectors(t,this.center);let e=$s.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector($s,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ba.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($s.copy(t.center).add(Ba)),this.expandByPoint($s.copy(t.center).sub(Ba))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},qn=new C,za=new C,Wr=new C,hi=new C,Ha=new C,Xr=new C,ka=new C,ki=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qn.copy(this.origin).addScaledVector(this.direction,e),qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){za.copy(t).add(e).multiplyScalar(.5),Wr.copy(e).sub(t).normalize(),hi.copy(this.origin).sub(za);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Wr),o=hi.dot(this.direction),c=-hi.dot(Wr),l=hi.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(za).addScaledVector(Wr,d),f}intersectSphere(t,e){qn.subVectors(t.center,this.origin);let n=qn.dot(this.direction),s=qn.dot(qn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,qn)!==null}intersectTriangle(t,e,n,s,r){Ha.subVectors(e,t),Xr.subVectors(n,t),ka.crossVectors(Ha,Xr);let a=this.direction.dot(ka),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;hi.subVectors(this.origin,t);let c=o*this.direction.dot(Xr.crossVectors(hi,Xr));if(c<0)return null;let l=o*this.direction.dot(Ha.cross(hi));if(l<0||c+l>a)return null;let h=-o*hi.dot(ka);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oe=class i{constructor(t,e,n,s,r,a,o,c,l,h,u,d,f,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,d,f,g,_,m)}set(t,e,n,s,r,a,o,c,l,h,u,d,f,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/rs.setFromMatrixColumn(t,0).length(),r=1/rs.setFromMatrixColumn(t,1).length(),a=1/rs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-o*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d+_*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=_+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*h,f=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){let d=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_p,t,xp)}lookAt(t,e,n){let s=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),ui.crossVectors(n,un),ui.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),ui.crossVectors(n,un)),ui.normalize(),Yr.crossVectors(un,ui),s[0]=ui.x,s[4]=Yr.x,s[8]=un.x,s[1]=ui.y,s[5]=Yr.y,s[9]=un.y,s[2]=ui.z,s[6]=Yr.z,s[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],x=n[7],M=n[11],T=n[15],A=s[0],b=s[4],I=s[8],v=s[12],E=s[1],U=s[5],O=s[9],G=s[13],P=s[2],N=s[6],z=s[10],q=s[14],$=s[3],W=s[7],J=s[11],rt=s[15];return r[0]=a*A+o*E+c*P+l*$,r[4]=a*b+o*U+c*N+l*W,r[8]=a*I+o*O+c*z+l*J,r[12]=a*v+o*G+c*q+l*rt,r[1]=h*A+u*E+d*P+f*$,r[5]=h*b+u*U+d*N+f*W,r[9]=h*I+u*O+d*z+f*J,r[13]=h*v+u*G+d*q+f*rt,r[2]=g*A+_*E+m*P+p*$,r[6]=g*b+_*U+m*N+p*W,r[10]=g*I+_*O+m*z+p*J,r[14]=g*v+_*G+m*q+p*rt,r[3]=y*A+x*E+M*P+T*$,r[7]=y*b+x*U+M*N+T*W,r[11]=y*I+x*O+M*z+T*J,r[15]=y*v+x*G+M*q+T*rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*f-n*c*f)+_*(+e*c*f-e*l*d+r*a*d-s*a*f+s*l*h-r*c*h)+m*(+e*l*u-e*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-s*o*h-e*c*u+e*o*d+s*a*u-n*a*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],y=u*m*l-_*d*l+_*c*f-o*m*f-u*c*p+o*d*p,x=g*d*l-h*m*l-g*c*f+a*m*f+h*c*p-a*d*p,M=h*_*l-g*u*l+g*o*f-a*_*f-h*o*p+a*u*p,T=g*u*c-h*_*c-g*o*d+a*_*d+h*o*m-a*u*m,A=e*y+n*x+s*M+r*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/A;return t[0]=y*b,t[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*b,t[2]=(o*m*r-_*c*r+_*s*l-n*m*l-o*s*p+n*c*p)*b,t[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*f-n*c*f)*b,t[4]=x*b,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*b,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*p-e*c*p)*b,t[7]=(a*d*r-h*c*r+h*s*l-e*d*l-a*s*f+e*c*f)*b,t[8]=M*b,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*b,t[10]=(a*_*r-g*o*r+g*n*l-e*_*l-a*n*p+e*o*p)*b,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*f-e*o*f)*b,t[12]=T*b,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*b,t[14]=(g*o*s-a*_*s-g*n*c+e*_*c+a*n*m-e*o*m)*b,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*d+e*o*d)*b,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,_=a*h,m=a*u,p=o*u,y=c*l,x=c*h,M=c*u,T=n.x,A=n.y,b=n.z;return s[0]=(1-(_+p))*T,s[1]=(f+M)*T,s[2]=(g-x)*T,s[3]=0,s[4]=(f-M)*A,s[5]=(1-(d+p))*A,s[6]=(m+y)*A,s[7]=0,s[8]=(g+x)*b,s[9]=(m-y)*b,s[10]=(1-(d+_))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=rs.set(s[0],s[1],s[2]).length(),a=rs.set(s[4],s[5],s[6]).length(),o=rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],wn.copy(this);let l=1/r,h=1/a,u=1/o;return wn.elements[0]*=l,wn.elements[1]*=l,wn.elements[2]*=l,wn.elements[4]*=h,wn.elements[5]*=h,wn.elements[6]*=h,wn.elements[8]*=u,wn.elements[9]*=u,wn.elements[10]*=u,e.setFromRotationMatrix(wn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=jn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,g;if(o===jn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Mo)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=jn){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*l,f=(n+s)*h,g,_;if(o===jn)g=(a+r)*u,_=-2*u;else if(o===Mo)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},rs=new C,wn=new oe,_p=new C(0,0,0),xp=new C(1,1,1),ui=new C,Yr=new C,un=new C,Nh=new oe,Oh=new pn,To=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ue(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ue(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Nh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Oh.setFromEuler(this),this.setFromQuaternion(Oh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};To.DEFAULT_ORDER="XYZ";var ur=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},yp=0,Fh=new C,os=new pn,Zn=new oe,qr=new C,Js=new C,vp=new C,Mp=new pn,Bh=new C(1,0,0),zh=new C(0,1,0),Hh=new C(0,0,1),Ep={type:"added"},Sp={type:"removed"},Ge=class i extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new C,e=new To,n=new pn,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new jt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ur,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.multiply(os),this}rotateOnWorldAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.premultiply(os),this}rotateX(t){return this.rotateOnAxis(Bh,t)}rotateY(t){return this.rotateOnAxis(zh,t)}rotateZ(t){return this.rotateOnAxis(Hh,t)}translateOnAxis(t,e){return Fh.copy(t).applyQuaternion(this.quaternion),this.position.add(Fh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bh,t)}translateY(t){return this.translateOnAxis(zh,t)}translateZ(t){return this.translateOnAxis(Hh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?qr.copy(t):qr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Js,qr,this.up):Zn.lookAt(qr,Js,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),os.setFromRotationMatrix(Zn),this.quaternion.premultiply(os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Ep)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sp)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,t,vp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,Mp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ge.DEFAULT_UP=new C(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tn=new C,$n=new C,Va=new C,Jn=new C,as=new C,cs=new C,kh=new C,Ga=new C,Wa=new C,Xa=new C,Zr=!1,xs=class i{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Tn.subVectors(t,e),s.cross(Tn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Tn.subVectors(s,e),$n.subVectors(n,e),Va.subVectors(t,e);let a=Tn.dot(Tn),o=Tn.dot($n),c=Tn.dot(Va),l=$n.dot($n),h=$n.dot(Va),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getUV(t,e,n,s,r,a,o,c){return Zr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zr=!0),this.getInterpolation(t,e,n,s,r,a,o,c)}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Jn.x),c.addScaledVector(a,Jn.y),c.addScaledVector(o,Jn.z),c)}static isFrontFacing(t,e,n,s){return Tn.subVectors(n,e),$n.subVectors(t,e),Tn.cross($n).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),Tn.cross($n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Zr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zr=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;as.subVectors(s,n),cs.subVectors(r,n),Ga.subVectors(t,n);let c=as.dot(Ga),l=cs.dot(Ga);if(c<=0&&l<=0)return e.copy(n);Wa.subVectors(t,s);let h=as.dot(Wa),u=cs.dot(Wa);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(as,a);Xa.subVectors(t,r);let f=as.dot(Xa),g=cs.dot(Xa);if(g>=0&&f<=g)return e.copy(r);let _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(cs,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return kh.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(kh,o);let p=1/(m+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector(as,a).addScaledVector(cs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Yu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},$r={h:0,s:0,l:0};function Ya(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ut=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=he.workingColorSpace){if(t=nl(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ya(a,r,t+1/3),this.g=Ya(a,r,t),this.b=Ya(a,r,t-1/3)}return he.toWorkingColorSpace(this,s),this}setStyle(t,e=Re){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Re){let n=Yu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ss(t.r),this.g=Ss(t.g),this.b=Ss(t.b),this}copyLinearToSRGB(t){return this.r=Ua(t.r),this.g=Ua(t.g),this.b=Ua(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Re){return he.fromWorkingColorSpace($e.copy(this),t),Math.round(Ue($e.r*255,0,255))*65536+Math.round(Ue($e.g*255,0,255))*256+Math.round(Ue($e.b*255,0,255))}getHexString(t=Re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace($e.copy(this),e);let n=$e.r,s=$e.g,r=$e.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=Re){he.fromWorkingColorSpace($e.copy(this),t);let e=$e.r,n=$e.g,s=$e.b;return t!==Re?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(di),this.setHSL(di.h+t,di.s+e,di.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(di),t.getHSL($r);let n=nr(di.h,$r.h,e),s=nr(di.s,$r.s,e),r=nr(di.l,$r.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$e=new Ut;Ut.NAMES=Yu;var bp=0,vi=class extends Hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=qi(),this.name="",this.type="Material",this.blending=Es,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ac,this.blendDst=cc,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ah,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(n.blending=this.blending),this.side!==xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ac&&(n.blendSrc=this.blendSrc),this.blendDst!==cc&&(n.blendDst=this.blendDst),this.blendEquation!==Ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==mo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ah&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ni=class extends vi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Lu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Pe=new C,Jr=new tt,me=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Rh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Jr.fromBufferAttribute(this,e),Jr.applyMatrix3(t),this.setXY(e,Jr.x,Jr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_s(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=en(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_s(e,this.array)),e}setX(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_s(e,this.array)),e}setY(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_s(e,this.array)),e}setZ(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_s(e,this.array)),e}setW(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array),s=en(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array),s=en(s,this.array),r=en(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Rh&&(t.usage=this.usage),t}};var Ao=class extends me{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ro=class extends me{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ft=class extends me{constructor(t,e,n){super(new Float32Array(t),e,n)}};var wp=0,xn=new oe,qa=new Ge,ls=new C,dn=new ei,Ks=new ei,Ve=new C,ue=class i extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=qi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xu(t)?Ro:Ao)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,n){return xn.makeTranslation(t,e,n),this.applyMatrix4(xn),this}scale(t,e,n){return xn.makeScale(t,e,n),this.applyMatrix4(xn),this}lookAt(t){return qa.lookAt(t),qa.updateMatrix(),this.applyMatrix4(qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ft(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ks.setFromBufferAttribute(o),this.morphTargetsRelative?(Ve.addVectors(dn.min,Ks.min),dn.expandByPoint(Ve),Ve.addVectors(dn.max,Ks.max),dn.expandByPoint(Ve)):(dn.expandByPoint(Ks.min),dn.expandByPoint(Ks.max))}dn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ve));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ve.fromBufferAttribute(o,l),c&&(ls.fromBufferAttribute(t,l),Ve.add(ls)),s=Math.max(s,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new me(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let E=0;E<o;E++)l[E]=new C,h[E]=new C;let u=new C,d=new C,f=new C,g=new tt,_=new tt,m=new tt,p=new C,y=new C;function x(E,U,O){u.fromArray(s,E*3),d.fromArray(s,U*3),f.fromArray(s,O*3),g.fromArray(a,E*2),_.fromArray(a,U*2),m.fromArray(a,O*2),d.sub(u),f.sub(u),_.sub(g),m.sub(g);let G=1/(_.x*m.y-m.x*_.y);isFinite(G)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-_.y).multiplyScalar(G),y.copy(f).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(G),l[E].add(p),l[U].add(p),l[O].add(p),h[E].add(y),h[U].add(y),h[O].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let E=0,U=M.length;E<U;++E){let O=M[E],G=O.start,P=O.count;for(let N=G,z=G+P;N<z;N+=3)x(n[N+0],n[N+1],n[N+2])}let T=new C,A=new C,b=new C,I=new C;function v(E){b.fromArray(r,E*3),I.copy(b);let U=l[E];T.copy(U),T.sub(b.multiplyScalar(b.dot(U))).normalize(),A.crossVectors(I,U);let G=A.dot(h[E])<0?-1:1;c[E*4]=T.x,c[E*4+1]=T.y,c[E*4+2]=T.z,c[E*4+3]=G}for(let E=0,U=M.length;E<U;++E){let O=M[E],G=O.start,P=O.count;for(let N=G,z=G+P;N<z;N+=3)v(n[N+0]),v(n[N+1]),v(n[N+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new me(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new C,r=new C,a=new C,o=new C,c=new C,l=new C,h=new C,u=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new me(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vh=new oe,Ii=new ki,Kr=new yi,Gh=new C,hs=new C,us=new C,ds=new C,Za=new C,jr=new C,Qr=new tt,to=new tt,eo=new tt,Wh=new C,Xh=new C,Yh=new C,no=new C,io=new C,j=class extends Ge{constructor(t=new ue,e=new ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){jr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Za.fromBufferAttribute(u,t),a?jr.addScaledVector(Za,h):jr.addScaledVector(Za.sub(e),h))}e.add(jr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(r),Ii.copy(t.ray).recast(t.near),!(Kr.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(Kr,Gh)===null||Ii.origin.distanceToSquared(Gh)>(t.far-t.near)**2))&&(Vh.copy(r).invert(),Ii.copy(t.ray).applyMatrix4(Vh),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ii)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,T=x;M<T;M+=3){let A=o.getX(M),b=o.getX(M+1),I=o.getX(M+2);s=so(this,p,t,n,l,h,u,A,b,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let y=o.getX(m),x=o.getX(m+1),M=o.getX(m+2);s=so(this,a,t,n,l,h,u,y,x,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,T=x;M<T;M+=3){let A=M,b=M+1,I=M+2;s=so(this,p,t,n,l,h,u,A,b,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let y=m,x=m+1,M=m+2;s=so(this,a,t,n,l,h,u,y,x,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Tp(i,t,e,n,s,r,a,o){let c;if(t.side===Ne?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===xi,o),c===null)return null;io.copy(o),io.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(io);return l<e.near||l>e.far?null:{distance:l,point:io.clone(),object:i}}function so(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,hs),i.getVertexPosition(c,us),i.getVertexPosition(l,ds);let h=Tp(i,t,e,n,hs,us,ds,no);if(h){s&&(Qr.fromBufferAttribute(s,o),to.fromBufferAttribute(s,c),eo.fromBufferAttribute(s,l),h.uv=xs.getInterpolation(no,hs,us,ds,Qr,to,eo,new tt)),r&&(Qr.fromBufferAttribute(r,o),to.fromBufferAttribute(r,c),eo.fromBufferAttribute(r,l),h.uv1=xs.getInterpolation(no,hs,us,ds,Qr,to,eo,new tt),h.uv2=h.uv1),a&&(Wh.fromBufferAttribute(a,o),Xh.fromBufferAttribute(a,c),Yh.fromBufferAttribute(a,l),h.normal=xs.getInterpolation(no,hs,us,ds,Wh,Xh,Yh,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new C,materialIndex:0};xs.getNormal(hs,us,ds,u.normal),h.face=u}return h}var Le=class i extends ue{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ft(l,3)),this.setAttribute("normal",new Ft(h,3)),this.setAttribute("uv",new Ft(u,2));function g(_,m,p,y,x,M,T,A,b,I,v){let E=M/b,U=T/I,O=M/2,G=T/2,P=A/2,N=b+1,z=I+1,q=0,$=0,W=new C;for(let J=0;J<z;J++){let rt=J*U-G;for(let gt=0;gt<N;gt++){let Y=gt*E-O;W[_]=Y*y,W[m]=rt*x,W[p]=P,l.push(W.x,W.y,W.z),W[_]=0,W[m]=0,W[p]=A>0?1:-1,h.push(W.x,W.y,W.z),u.push(gt/b),u.push(1-J/I),q+=1}}for(let J=0;J<I;J++)for(let rt=0;rt<b;rt++){let gt=d+rt+N*J,Y=d+rt+N*(J+1),Q=d+(rt+1)+N*(J+1),mt=d+(rt+1)+N*J;c.push(gt,Y,mt),c.push(Y,Q,mt),$+=6}o.addGroup(f,$,v),f+=$,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Rs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function nn(i){let t={};for(let e=0;e<i.length;e++){let n=Rs(i[e]);for(let s in n)t[s]=n[s]}return t}function Ap(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function qu(i){return i.getRenderTarget()===null?i.outputColorSpace:he.workingColorSpace}var Rp={clone:Rs,merge:nn},Cp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ln=class extends vi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cp,this.fragmentShader=Pp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rs(t.uniforms),this.uniformsGroups=Ap(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Co=class extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Je=class extends Co{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=lr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(er*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return lr*2*Math.atan(Math.tan(er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(er*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},fs=-90,ps=1,gc=class extends Ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Je(fs,ps,t,e);s.layers=this.layers,this.add(s);let r=new Je(fs,ps,t,e);r.layers=this.layers,this.add(r);let a=new Je(fs,ps,t,e);a.layers=this.layers,this.add(a);let o=new Je(fs,ps,t,e);o.layers=this.layers,this.add(o);let c=new Je(fs,ps,t,e);c.layers=this.layers,this.add(c);let l=new Je(fs,ps,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Mo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Po=class extends fn{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ws,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},_c=class extends ti{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(ir("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===zi?Re:vn),this.texture=new Po(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:yn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Le(5,5,5),r=new Ln({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ne,blending:mi});r.uniforms.tEquirect.value=e;let a=new j(s,r),o=e.minFilter;return e.minFilter===Hi&&(e.minFilter=yn),new gc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},$a=new C,Lp=new C,Ip=new jt,An=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=$a.subVectors(n,e).cross(Lp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta($a),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ip.getNormalMatrix(t),s=this.coplanarPoint($a).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Di=new yi,ro=new C,dr=class{constructor(t=new An,e=new An,n=new An,s=new An,r=new An,a=new An){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=jn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],y=s[13],x=s[14],M=s[15];if(n[0].setComponents(c-r,d-l,m-f,M-p).normalize(),n[1].setComponents(c+r,d+l,m+f,M+p).normalize(),n[2].setComponents(c+a,d+h,m+g,M+y).normalize(),n[3].setComponents(c-a,d-h,m-g,M-y).normalize(),n[4].setComponents(c-o,d-u,m-_,M-x).normalize(),e===jn)n[5].setComponents(c+o,d+u,m+_,M+x).normalize();else if(e===Mo)n[5].setComponents(o,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(t){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(t.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ro.x=s.normal.x>0?t.max.x:t.min.x,ro.y=s.normal.y>0?t.max.y:t.min.y,ro.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ro)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Zu(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Dp(i,t){let e=t.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,d=l.usage,f=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,d),l.onUploadCallback();let _;if(u instanceof Float32Array)_=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=i.SHORT;else if(u instanceof Uint32Array)_=i.UNSIGNED_INT;else if(u instanceof Int32Array)_=i.INT;else if(u instanceof Int8Array)_=i.BYTE;else if(u instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,h,u){let d=h.array,f=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,l),f.count===-1&&g.length===0&&i.bufferSubData(u,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){let p=g[_];e?i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(e?i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:a,remove:o,update:c}}var Ke=class i extends ue{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,d=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let y=p*d-a;for(let x=0;x<l;x++){let M=x*u-r;g.push(M,-y,0),_.push(0,0,1),m.push(x/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){let x=y+l*p,M=y+l*(p+1),T=y+1+l*(p+1),A=y+1+l*p;f.push(x,M,A),f.push(M,T,A)}this.setIndex(f),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(_,3)),this.setAttribute("uv",new Ft(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Up=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Np=`#ifdef USE_ALPHAHASH
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
#endif`,Op=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,zp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hp=`#ifdef USE_AOMAP
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
#endif`,kp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vp=`#ifdef USE_BATCHING
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
#endif`,Gp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Wp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qp=`#ifdef USE_IRIDESCENCE
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
#endif`,Zp=`#ifdef USE_BUMPMAP
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
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,nm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,im=`#define PI 3.141592653589793
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
} // validated`,sm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rm=`vec3 transformedNormal = objectNormal;
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
#endif`,om=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,am=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hm="gl_FragColor = linearToOutputTexel( gl_FragColor );",um=`
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
}`,dm=`#ifdef USE_ENVMAP
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
#endif`,fm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pm=`#ifdef USE_ENVMAP
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
#endif`,mm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gm=`#ifdef USE_ENVMAP
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
#endif`,_m=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ym=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mm=`#ifdef USE_GRADIENTMAP
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
}`,Em=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Sm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tm=`uniform bool receiveShadow;
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
#endif`,Am=`#ifdef USE_ENVMAP
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
#endif`,Rm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Im=`PhysicalMaterial material;
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
#endif`,Dm=`struct PhysicalMaterial {
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
}`,Um=`
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
#endif`,Nm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Om=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Hm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,km=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wm=`#if defined( USE_POINTS_UV )
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
#endif`,Xm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ym=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zm=`#ifdef USE_MORPHNORMALS
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
#endif`,$m=`#ifdef USE_MORPHTARGETS
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
#endif`,Jm=`#ifdef USE_MORPHTARGETS
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
#endif`,Km=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,n0=`#ifdef USE_NORMALMAP
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
#endif`,i0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,s0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,r0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,o0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,a0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,c0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,l0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,h0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,u0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,d0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,f0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,p0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,m0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,g0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,x0=`float getShadowMask() {
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
}`,y0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,v0=`#ifdef USE_SKINNING
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
#endif`,M0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,E0=`#ifdef USE_SKINNING
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
#endif`,S0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,b0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,w0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,T0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,A0=`#ifdef USE_TRANSMISSION
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
#endif`,R0=`#ifdef USE_TRANSMISSION
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
#endif`,C0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,D0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,U0=`uniform sampler2D t2D;
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
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`#include <common>
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
}`,H0=`#if DEPTH_PACKING == 3200
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
}`,k0=`#define DISTANCE
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
}`,V0=`#define DISTANCE
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
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,W0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X0=`uniform float scale;
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
}`,Y0=`uniform vec3 diffuse;
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
}`,q0=`#include <common>
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
}`,Z0=`uniform vec3 diffuse;
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
}`,$0=`#define LAMBERT
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
}`,J0=`#define LAMBERT
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
}`,K0=`#define MATCAP
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
}`,j0=`#define MATCAP
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
}`,Q0=`#define NORMAL
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
}`,tg=`#define NORMAL
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
}`,eg=`#define PHONG
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
}`,ng=`#define PHONG
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
}`,ig=`#define STANDARD
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
}`,sg=`#define STANDARD
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
}`,rg=`#define TOON
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
}`,og=`#define TOON
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
}`,ag=`uniform float size;
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
}`,cg=`uniform vec3 diffuse;
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
}`,lg=`#include <common>
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
}`,hg=`uniform vec3 color;
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
}`,ug=`uniform float rotation;
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
}`,dg=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:Up,alphahash_pars_fragment:Np,alphamap_fragment:Op,alphamap_pars_fragment:Fp,alphatest_fragment:Bp,alphatest_pars_fragment:zp,aomap_fragment:Hp,aomap_pars_fragment:kp,batching_pars_vertex:Vp,batching_vertex:Gp,begin_vertex:Wp,beginnormal_vertex:Xp,bsdfs:Yp,iridescence_fragment:qp,bumpmap_pars_fragment:Zp,clipping_planes_fragment:$p,clipping_planes_pars_fragment:Jp,clipping_planes_pars_vertex:Kp,clipping_planes_vertex:jp,color_fragment:Qp,color_pars_fragment:tm,color_pars_vertex:em,color_vertex:nm,common:im,cube_uv_reflection_fragment:sm,defaultnormal_vertex:rm,displacementmap_pars_vertex:om,displacementmap_vertex:am,emissivemap_fragment:cm,emissivemap_pars_fragment:lm,colorspace_fragment:hm,colorspace_pars_fragment:um,envmap_fragment:dm,envmap_common_pars_fragment:fm,envmap_pars_fragment:pm,envmap_pars_vertex:mm,envmap_physical_pars_fragment:Am,envmap_vertex:gm,fog_vertex:_m,fog_pars_vertex:xm,fog_fragment:ym,fog_pars_fragment:vm,gradientmap_pars_fragment:Mm,lightmap_fragment:Em,lightmap_pars_fragment:Sm,lights_lambert_fragment:bm,lights_lambert_pars_fragment:wm,lights_pars_begin:Tm,lights_toon_fragment:Rm,lights_toon_pars_fragment:Cm,lights_phong_fragment:Pm,lights_phong_pars_fragment:Lm,lights_physical_fragment:Im,lights_physical_pars_fragment:Dm,lights_fragment_begin:Um,lights_fragment_maps:Nm,lights_fragment_end:Om,logdepthbuf_fragment:Fm,logdepthbuf_pars_fragment:Bm,logdepthbuf_pars_vertex:zm,logdepthbuf_vertex:Hm,map_fragment:km,map_pars_fragment:Vm,map_particle_fragment:Gm,map_particle_pars_fragment:Wm,metalnessmap_fragment:Xm,metalnessmap_pars_fragment:Ym,morphcolor_vertex:qm,morphnormal_vertex:Zm,morphtarget_pars_vertex:$m,morphtarget_vertex:Jm,normal_fragment_begin:Km,normal_fragment_maps:jm,normal_pars_fragment:Qm,normal_pars_vertex:t0,normal_vertex:e0,normalmap_pars_fragment:n0,clearcoat_normal_fragment_begin:i0,clearcoat_normal_fragment_maps:s0,clearcoat_pars_fragment:r0,iridescence_pars_fragment:o0,opaque_fragment:a0,packing:c0,premultiplied_alpha_fragment:l0,project_vertex:h0,dithering_fragment:u0,dithering_pars_fragment:d0,roughnessmap_fragment:f0,roughnessmap_pars_fragment:p0,shadowmap_pars_fragment:m0,shadowmap_pars_vertex:g0,shadowmap_vertex:_0,shadowmask_pars_fragment:x0,skinbase_vertex:y0,skinning_pars_vertex:v0,skinning_vertex:M0,skinnormal_vertex:E0,specularmap_fragment:S0,specularmap_pars_fragment:b0,tonemapping_fragment:w0,tonemapping_pars_fragment:T0,transmission_fragment:A0,transmission_pars_fragment:R0,uv_pars_fragment:C0,uv_pars_vertex:P0,uv_vertex:L0,worldpos_vertex:I0,background_vert:D0,background_frag:U0,backgroundCube_vert:N0,backgroundCube_frag:O0,cube_vert:F0,cube_frag:B0,depth_vert:z0,depth_frag:H0,distanceRGBA_vert:k0,distanceRGBA_frag:V0,equirect_vert:G0,equirect_frag:W0,linedashed_vert:X0,linedashed_frag:Y0,meshbasic_vert:q0,meshbasic_frag:Z0,meshlambert_vert:$0,meshlambert_frag:J0,meshmatcap_vert:K0,meshmatcap_frag:j0,meshnormal_vert:Q0,meshnormal_frag:tg,meshphong_vert:eg,meshphong_frag:ng,meshphysical_vert:ig,meshphysical_frag:sg,meshtoon_vert:rg,meshtoon_frag:og,points_vert:ag,points_frag:cg,shadow_vert:lg,shadow_frag:hg,sprite_vert:ug,sprite_frag:dg},pt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},zn={basic:{uniforms:nn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:nn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:nn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:nn([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:nn([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:nn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:nn([pt.points,pt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:nn([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:nn([pt.common,pt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:nn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:nn([pt.sprite,pt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:nn([pt.common,pt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:nn([pt.lights,pt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};zn.physical={uniforms:nn([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var oo={r:0,b:0,g:0};function fg(i,t,e,n,s,r,a){let o=new Ut(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(m,p){let y=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?_(o,c):x&&x.isColor&&(_(x,1),y=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===$o)?(h===void 0&&(h=new j(new Le(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:Rs(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=he.getTransfer(x.colorSpace)!==pe,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new j(new Ke(2,2),new Ln({name:"BackgroundMaterial",uniforms:Rs(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=he.getTransfer(x.colorSpace)!==pe,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,p){m.getRGB(oo,qu(i)),n.buffers.color.setClear(oo.r,oo.g,oo.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),c=p,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(o,c)},render:g}}function pg(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=m(null),l=c,h=!1;function u(P,N,z,q,$){let W=!1;if(a){let J=_(q,z,N);l!==J&&(l=J,f(l.object)),W=p(P,q,z,$),W&&y(P,q,z,$)}else{let J=N.wireframe===!0;(l.geometry!==q.id||l.program!==z.id||l.wireframe!==J)&&(l.geometry=q.id,l.program=z.id,l.wireframe=J,W=!0)}$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,I(P,N,z,q),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(P){return n.isWebGL2?i.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?i.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function _(P,N,z){let q=z.wireframe===!0,$=o[P.id];$===void 0&&($={},o[P.id]=$);let W=$[N.id];W===void 0&&(W={},$[N.id]=W);let J=W[q];return J===void 0&&(J=m(d()),W[q]=J),J}function m(P){let N=[],z=[],q=[];for(let $=0;$<s;$++)N[$]=0,z[$]=0,q[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:z,attributeDivisors:q,object:P,attributes:{},index:null}}function p(P,N,z,q){let $=l.attributes,W=N.attributes,J=0,rt=z.getAttributes();for(let gt in rt)if(rt[gt].location>=0){let Q=$[gt],mt=W[gt];if(mt===void 0&&(gt==="instanceMatrix"&&P.instanceMatrix&&(mt=P.instanceMatrix),gt==="instanceColor"&&P.instanceColor&&(mt=P.instanceColor)),Q===void 0||Q.attribute!==mt||mt&&Q.data!==mt.data)return!0;J++}return l.attributesNum!==J||l.index!==q}function y(P,N,z,q){let $={},W=N.attributes,J=0,rt=z.getAttributes();for(let gt in rt)if(rt[gt].location>=0){let Q=W[gt];Q===void 0&&(gt==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),gt==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor));let mt={};mt.attribute=Q,Q&&Q.data&&(mt.data=Q.data),$[gt]=mt,J++}l.attributes=$,l.attributesNum=J,l.index=q}function x(){let P=l.newAttributes;for(let N=0,z=P.length;N<z;N++)P[N]=0}function M(P){T(P,0)}function T(P,N){let z=l.newAttributes,q=l.enabledAttributes,$=l.attributeDivisors;z[P]=1,q[P]===0&&(i.enableVertexAttribArray(P),q[P]=1),$[P]!==N&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,N),$[P]=N)}function A(){let P=l.newAttributes,N=l.enabledAttributes;for(let z=0,q=N.length;z<q;z++)N[z]!==P[z]&&(i.disableVertexAttribArray(z),N[z]=0)}function b(P,N,z,q,$,W,J){J===!0?i.vertexAttribIPointer(P,N,z,$,W):i.vertexAttribPointer(P,N,z,q,$,W)}function I(P,N,z,q){if(n.isWebGL2===!1&&(P.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let $=q.attributes,W=z.getAttributes(),J=N.defaultAttributeValues;for(let rt in W){let gt=W[rt];if(gt.location>=0){let Y=$[rt];if(Y===void 0&&(rt==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),rt==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor)),Y!==void 0){let Q=Y.normalized,mt=Y.itemSize,Et=e.get(Y);if(Et===void 0)continue;let St=Et.buffer,Nt=Et.type,Bt=Et.bytesPerElement,Pt=n.isWebGL2===!0&&(Nt===i.INT||Nt===i.UNSIGNED_INT||Y.gpuType===Du);if(Y.isInterleavedBufferAttribute){let Mt=Y.data,F=Mt.stride,qt=Y.offset;if(Mt.isInstancedInterleavedBuffer){for(let bt=0;bt<gt.locationSize;bt++)T(gt.location+bt,Mt.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let bt=0;bt<gt.locationSize;bt++)M(gt.location+bt);i.bindBuffer(i.ARRAY_BUFFER,St);for(let bt=0;bt<gt.locationSize;bt++)b(gt.location+bt,mt/gt.locationSize,Nt,Q,F*Bt,(qt+mt/gt.locationSize*bt)*Bt,Pt)}else{if(Y.isInstancedBufferAttribute){for(let Mt=0;Mt<gt.locationSize;Mt++)T(gt.location+Mt,Y.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Mt=0;Mt<gt.locationSize;Mt++)M(gt.location+Mt);i.bindBuffer(i.ARRAY_BUFFER,St);for(let Mt=0;Mt<gt.locationSize;Mt++)b(gt.location+Mt,mt/gt.locationSize,Nt,Q,mt*Bt,mt/gt.locationSize*Mt*Bt,Pt)}}else if(J!==void 0){let Q=J[rt];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(gt.location,Q);break;case 3:i.vertexAttrib3fv(gt.location,Q);break;case 4:i.vertexAttrib4fv(gt.location,Q);break;default:i.vertexAttrib1fv(gt.location,Q)}}}}A()}function v(){O();for(let P in o){let N=o[P];for(let z in N){let q=N[z];for(let $ in q)g(q[$].object),delete q[$];delete N[z]}delete o[P]}}function E(P){if(o[P.id]===void 0)return;let N=o[P.id];for(let z in N){let q=N[z];for(let $ in q)g(q[$].object),delete q[$];delete N[z]}delete o[P.id]}function U(P){for(let N in o){let z=o[N];if(z[P.id]===void 0)continue;let q=z[P.id];for(let $ in q)g(q[$].object),delete q[$];delete z[P.id]}}function O(){G(),h=!0,l!==c&&(l=c,f(l.object))}function G(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:O,resetDefaultState:G,dispose:v,releaseStatesOfGeometry:E,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:M,disableUnusedAttributes:A}}function mg(i,t,e,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function c(h,u,d){if(d===0)return;let f,g;if(s)f=i,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),e.update(u,r,d)}function l(h,u,d){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function gg(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,M=a||t.has("OES_texture_float"),T=x&&M,A=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:T,maxSamples:A}}function _g(i){let t=this,e=null,n=0,s=!1,r=!1,a=new An,o=new jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let y=r?0:n,x=y*4,M=p.clippingState||null;c.value=M,M=h(g,d,x,f);for(let T=0;T!==x;++T)M[T]=e[T];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let p=f+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,M=f;x!==_;++x,M+=4)a.copy(u[x]).applyMatrix4(y,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function xg(i){let t=new WeakMap;function e(a,o){return o===lc?a.mapping=ws:o===hc&&(a.mapping=Ts),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===lc||o===hc)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new _c(c.height/2);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Lo=class extends Co{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ys=4,qh=[.125,.215,.35,.446,.526,.582],Oi=20,Ja=new Lo,Zh=new Ut,Ka=null,ja=0,Qa=0,Ui=(1+Math.sqrt(5))/2,ms=1/Ui,$h=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Ui,ms),new C(0,Ui,-ms),new C(ms,0,Ui),new C(-ms,0,Ui),new C(Ui,ms,0),new C(-Ui,ms,0)],Cs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ka=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ka,ja,Qa),t.scissorTest=!1,ao(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ws||t.mapping===Ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ka=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:cr,format:Cn,colorSpace:Qn,depthBuffer:!1},s=Jh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yg(r)),this._blurMaterial=vg(r,t,e)}return s}_compileMaterial(t){let e=new j(this._lodPlanes[0],t);this._renderer.compile(e,Ja)}_sceneToCubeUV(t,e,n,s){let o=new Je(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Zh),h.toneMapping=gi,h.autoClear=!1;let f=new ni({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1}),g=new j(new Le,f),_=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(Zh),_=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):y===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));let x=this._cubeSize;ao(s,y*x,p>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ws||t.mapping===Ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new j(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;ao(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Ja)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=$h[(s-1)%$h.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new j(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Oi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Oi;m>Oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Oi}`);let p=[],y=0;for(let b=0;b<Oi;++b){let I=b/_,v=Math.exp(-I*I/2);p.push(v),b===0?y+=v:b<m&&(y+=2*v)}for(let b=0;b<p.length;b++)p[b]=p[b]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;let M=this._sizeLods[s],T=3*M*(s>x-ys?s-x+ys:0),A=4*(this._cubeSize-M);ao(e,T,A,3*M,2*M),c.setRenderTarget(e),c.render(u,Ja)}};function yg(i){let t=[],e=[],n=[],s=i,r=i-ys+1+qh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-ys?c=qh[a-i+ys-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),x=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let A=0;A<f;A++){let b=A%3*2/3-1,I=A>2?0:-1,v=[b,I,0,b+2/3,I,0,b+2/3,I+1,0,b,I,0,b+2/3,I+1,0,b,I+1,0];y.set(v,_*g*A),x.set(d,m*g*A);let E=[A,A,A,A,A,A];M.set(E,p*g*A)}let T=new ue;T.setAttribute("position",new me(y,_)),T.setAttribute("uv",new me(x,m)),T.setAttribute("faceIndex",new me(M,p)),t.push(T),s>ys&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Jh(i,t,e){let n=new ti(i,t,e);return n.texture.mapping=$o,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ao(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function vg(i,t,e){let n=new Float32Array(Oi),s=new C(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:il(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Kh(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:il(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function jh(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function il(){return`

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
	`}function Mg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===lc||c===hc,h=c===ws||c===Ts;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new Cs(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(l&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Cs(i));let d=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Eg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Sg(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,g=u.attributes.position,_=0;if(f!==null){let y=f.array;_=f.version;for(let x=0,M=y.length;x<M;x+=3){let T=y[x+0],A=y[x+1],b=y[x+2];d.push(T,A,A,b,b,T)}}else if(g!==void 0){let y=g.array;_=g.version;for(let x=0,M=y.length/3-1;x<M;x+=3){let T=x+0,A=x+1,b=x+2;d.push(T,A,A,b,b,T)}}else return;let m=new(Xu(d)?Ro:Ao)(d,1);m.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function bg(i,t,e,n){let s=n.isWebGL2,r;function a(f){r=f}let o,c;function l(f){o=f.type,c=f.bytesPerElement}function h(f,g){i.drawElements(r,g,o,f*c),e.update(g,r,1)}function u(f,g,_){if(_===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,f*c,_),e.update(g,r,_)}function d(f,g,_){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(f[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,f,0,_);let p=0;for(let y=0;y<_;y++)p+=g[y];e.update(p,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function wg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Tg(i,t){return i[0]-t[0]}function Ag(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Rg(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,a=new ye,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(t.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,_=r.get(h);if(_===void 0||_.count!==g){let P=function(){O.dispose(),r.delete(h),h.removeEventListener("dispose",P)};_!==void 0&&_.texture.dispose();let y=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,T=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],b=h.morphAttributes.color||[],I=0;y===!0&&(I=1),x===!0&&(I=2),M===!0&&(I=3);let v=h.attributes.position.count*I,E=1;v>t.maxTextureSize&&(E=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let U=new Float32Array(v*E*4*g),O=new wo(U,v,E,g);O.type=pi,O.needsUpdate=!0;let G=I*4;for(let N=0;N<g;N++){let z=T[N],q=A[N],$=b[N],W=v*E*4*N;for(let J=0;J<z.count;J++){let rt=J*G;y===!0&&(a.fromBufferAttribute(z,J),U[W+rt+0]=a.x,U[W+rt+1]=a.y,U[W+rt+2]=a.z,U[W+rt+3]=0),x===!0&&(a.fromBufferAttribute(q,J),U[W+rt+4]=a.x,U[W+rt+5]=a.y,U[W+rt+6]=a.z,U[W+rt+7]=0),M===!0&&(a.fromBufferAttribute($,J),U[W+rt+8]=a.x,U[W+rt+9]=a.y,U[W+rt+10]=a.z,U[W+rt+11]=$.itemSize===4?a.w:1)}}_={count:g,texture:O,size:new tt(v,E)},r.set(h,_),h.addEventListener("dispose",P)}let m=0;for(let y=0;y<d.length;y++)m+=d[y];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",p),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",_.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{let f=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==f){g=[];for(let x=0;x<f;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<f;x++){let M=g[x];M[0]=x,M[1]=d[x]}g.sort(Ag);for(let x=0;x<8;x++)x<f&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Tg);let _=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let M=o[x],T=M[0],A=M[1];T!==Number.MAX_SAFE_INTEGER&&A?(_&&h.getAttribute("morphTarget"+x)!==_[T]&&h.setAttribute("morphTarget"+x,_[T]),m&&h.getAttribute("morphNormal"+x)!==m[T]&&h.setAttribute("morphNormal"+x,m[T]),s[x]=A,p+=A):(_&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let y=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function Cg(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var Io=class extends fn{constructor(t,e,n,s,r,a,o,c,l,h){if(h=h!==void 0?h:Bi,h!==Bi&&h!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Bi&&(n=fi),n===void 0&&h===As&&(n=Fi),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:sn,this.minFilter=c!==void 0?c:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},$u=new fn,Ju=new Io(1,1);Ju.compareFunction=Vu;var Ku=new wo,ju=new mc,Qu=new Po,Qh=[],tu=[],eu=new Float32Array(16),nu=new Float32Array(9),iu=new Float32Array(4);function Os(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Qh[s];if(r===void 0&&(r=new Float32Array(s),Qh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ko(i,t){let e=tu[t];e===void 0&&(e=new Int32Array(t),tu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Pg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2fv(this.addr,t),Fe(e,t)}}function Ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;i.uniform3fv(this.addr,t),Fe(e,t)}}function Dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4fv(this.addr,t),Fe(e,t)}}function Ug(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Oe(e,n))return;iu.set(n),i.uniformMatrix2fv(this.addr,!1,iu),Fe(e,n)}}function Ng(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Oe(e,n))return;nu.set(n),i.uniformMatrix3fv(this.addr,!1,nu),Fe(e,n)}}function Og(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Oe(e,n))return;eu.set(n),i.uniformMatrix4fv(this.addr,!1,eu),Fe(e,n)}}function Fg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2iv(this.addr,t),Fe(e,t)}}function zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3iv(this.addr,t),Fe(e,t)}}function Hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4iv(this.addr,t),Fe(e,t)}}function kg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2uiv(this.addr,t),Fe(e,t)}}function Gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3uiv(this.addr,t),Fe(e,t)}}function Wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4uiv(this.addr,t),Fe(e,t)}}function Xg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Ju:$u;e.setTexture2D(t||r,s)}function Yg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ju,s)}function qg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Qu,s)}function Zg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ku,s)}function $g(i){switch(i){case 5126:return Pg;case 35664:return Lg;case 35665:return Ig;case 35666:return Dg;case 35674:return Ug;case 35675:return Ng;case 35676:return Og;case 5124:case 35670:return Fg;case 35667:case 35671:return Bg;case 35668:case 35672:return zg;case 35669:case 35673:return Hg;case 5125:return kg;case 36294:return Vg;case 36295:return Gg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return Yg;case 35680:case 36300:case 36308:case 36293:return qg;case 36289:case 36303:case 36311:case 36292:return Zg}}function Jg(i,t){i.uniform1fv(this.addr,t)}function Kg(i,t){let e=Os(t,this.size,2);i.uniform2fv(this.addr,e)}function jg(i,t){let e=Os(t,this.size,3);i.uniform3fv(this.addr,e)}function Qg(i,t){let e=Os(t,this.size,4);i.uniform4fv(this.addr,e)}function t1(i,t){let e=Os(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function e1(i,t){let e=Os(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function n1(i,t){let e=Os(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function i1(i,t){i.uniform1iv(this.addr,t)}function s1(i,t){i.uniform2iv(this.addr,t)}function r1(i,t){i.uniform3iv(this.addr,t)}function o1(i,t){i.uniform4iv(this.addr,t)}function a1(i,t){i.uniform1uiv(this.addr,t)}function c1(i,t){i.uniform2uiv(this.addr,t)}function l1(i,t){i.uniform3uiv(this.addr,t)}function h1(i,t){i.uniform4uiv(this.addr,t)}function u1(i,t,e){let n=this.cache,s=t.length,r=Ko(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||$u,r[a])}function d1(i,t,e){let n=this.cache,s=t.length,r=Ko(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||ju,r[a])}function f1(i,t,e){let n=this.cache,s=t.length,r=Ko(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Qu,r[a])}function p1(i,t,e){let n=this.cache,s=t.length,r=Ko(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ku,r[a])}function m1(i){switch(i){case 5126:return Jg;case 35664:return Kg;case 35665:return jg;case 35666:return Qg;case 35674:return t1;case 35675:return e1;case 35676:return n1;case 5124:case 35670:return i1;case 35667:case 35671:return s1;case 35668:case 35672:return r1;case 35669:case 35673:return o1;case 5125:return a1;case 36294:return c1;case 36295:return l1;case 36296:return h1;case 35678:case 36198:case 36298:case 36306:case 35682:return u1;case 35679:case 36299:case 36307:return d1;case 35680:case 36300:case 36308:case 36293:return f1;case 36289:case 36303:case 36311:case 36292:return p1}}var xc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$g(e.type)}},yc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=m1(e.type)}},vc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},tc=/(\w+)(\])?(\[|\.)?/g;function su(i,t){i.seq.push(t),i.map[t.id]=t}function g1(i,t,e){let n=i.name,s=n.length;for(tc.lastIndex=0;;){let r=tc.exec(n),a=tc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){su(e,l===void 0?new xc(o,i,t):new yc(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new vc(o),su(e,u)),e=u}}}var bs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);g1(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function ru(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var _1=37297,x1=0;function y1(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function v1(i){let t=he.getPrimaries(he.workingColorSpace),e=he.getPrimaries(i),n;switch(t===e?n="":t===vo&&e===yo?n="LinearDisplayP3ToLinearSRGB":t===yo&&e===vo&&(n="LinearSRGBToLinearDisplayP3"),i){case Qn:case Jo:return[n,"LinearTransferOETF"];case Re:case el:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ou(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+y1(i.getShaderSource(t),a)}else return s}function M1(i,t){let e=v1(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function E1(i,t){let e;switch(t){case Rf:e="Linear";break;case Cf:e="Reinhard";break;case Pf:e="OptimizedCineon";break;case Qc:e="ACESFilmic";break;case If:e="AgX";break;case Lf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function S1(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vs).join(`
`)}function b1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(vs).join(`
`)}function w1(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function T1(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function vs(i){return i!==""}function au(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var A1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mc(i){return i.replace(A1,C1)}var R1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function C1(i,t){let e=Xt[t];if(e===void 0){let n=R1.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Mc(e)}var P1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lu(i){return i.replace(P1,L1)}function L1(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hu(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function I1(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Pu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===jc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Kn&&(t="SHADOWMAP_TYPE_VSM"),t}function D1(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ws:case Ts:t="ENVMAP_TYPE_CUBE";break;case $o:t="ENVMAP_TYPE_CUBE_UV";break}return t}function U1(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ts:t="ENVMAP_MODE_REFRACTION";break}return t}function N1(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Lu:t="ENVMAP_BLENDING_MULTIPLY";break;case Tf:t="ENVMAP_BLENDING_MIX";break;case Af:t="ENVMAP_BLENDING_ADD";break}return t}function O1(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function F1(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=I1(e),l=D1(e),h=U1(e),u=N1(e),d=O1(e),f=e.isWebGL2?"":S1(e),g=b1(e),_=w1(r),m=s.createProgram(),p,y,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(vs).join(`
`),p.length>0&&(p+=`
`),y=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(vs).join(`
`),y.length>0&&(y+=`
`)):(p=[hu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vs).join(`
`),y=[f,hu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gi?"#define TONE_MAPPING":"",e.toneMapping!==gi?Xt.tonemapping_pars_fragment:"",e.toneMapping!==gi?E1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,M1("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vs).join(`
`)),a=Mc(a),a=au(a,e),a=cu(a,e),o=Mc(o),o=au(o,e),o=cu(o,e),a=lu(a),o=lu(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let M=x+p+a,T=x+y+o,A=ru(s,s.VERTEX_SHADER,M),b=ru(s,s.FRAGMENT_SHADER,T);s.attachShader(m,A),s.attachShader(m,b),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function I(O){if(i.debug.checkShaderErrors){let G=s.getProgramInfoLog(m).trim(),P=s.getShaderInfoLog(A).trim(),N=s.getShaderInfoLog(b).trim(),z=!0,q=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,A,b);else{let $=ou(s,A,"vertex"),W=ou(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+G+`
`+$+`
`+W)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(P===""||N==="")&&(q=!1);q&&(O.diagnostics={runnable:z,programLog:G,vertexShader:{log:P,prefix:p},fragmentShader:{log:N,prefix:y}})}s.deleteShader(A),s.deleteShader(b),v=new bs(s,m),E=T1(s,m)}let v;this.getUniforms=function(){return v===void 0&&I(this),v};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(m,_1)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=x1++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=b,this}var B1=0,Ec=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Sc(t),e.set(t,n)),n}},Sc=class{constructor(t){this.id=B1++,this.code=t,this.usedTimes=0}};function z1(i,t,e,n,s,r,a){let o=new ur,c=new Ec,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===0?"uv":`uv${v}`}function m(v,E,U,O,G){let P=O.fog,N=G.geometry,z=v.isMeshStandardMaterial?O.environment:null,q=(v.isMeshStandardMaterial?e:t).get(v.envMap||z),$=q&&q.mapping===$o?q.image.height:null,W=g[v.type];v.precision!==null&&(f=s.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let J=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,rt=J!==void 0?J.length:0,gt=0;N.morphAttributes.position!==void 0&&(gt=1),N.morphAttributes.normal!==void 0&&(gt=2),N.morphAttributes.color!==void 0&&(gt=3);let Y,Q,mt,Et;if(W){let Qe=zn[W];Y=Qe.vertexShader,Q=Qe.fragmentShader}else Y=v.vertexShader,Q=v.fragmentShader,c.update(v),mt=c.getVertexShaderID(v),Et=c.getFragmentShaderID(v);let St=i.getRenderTarget(),Nt=G.isInstancedMesh===!0,Bt=G.isBatchedMesh===!0,Pt=!!v.map,Mt=!!v.matcap,F=!!q,qt=!!v.aoMap,bt=!!v.lightMap,zt=!!v.bumpMap,wt=!!v.normalMap,fe=!!v.displacementMap,kt=!!v.emissiveMap,R=!!v.metalnessMap,S=!!v.roughnessMap,H=v.anisotropy>0,at=v.clearcoat>0,st=v.iridescence>0,ot=v.sheen>0,Tt=v.transmission>0,_t=H&&!!v.anisotropyMap,vt=at&&!!v.clearcoatMap,Dt=at&&!!v.clearcoatNormalMap,Gt=at&&!!v.clearcoatRoughnessMap,nt=st&&!!v.iridescenceMap,ee=st&&!!v.iridescenceThicknessMap,L=ot&&!!v.sheenColorMap,et=ot&&!!v.sheenRoughnessMap,ft=!!v.specularMap,ct=!!v.specularColorMap,At=!!v.specularIntensityMap,Jt=Tt&&!!v.transmissionMap,ne=Tt&&!!v.thicknessMap,Zt=!!v.gradientMap,dt=!!v.alphaMap,D=v.alphaTest>0,ht=!!v.alphaHash,ut=!!v.extensions,It=!!N.attributes.uv1,Rt=!!N.attributes.uv2,ie=!!N.attributes.uv3,se=gi;return v.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(se=i.toneMapping),{isWebGL2:h,shaderID:W,shaderType:v.type,shaderName:v.name,vertexShader:Y,fragmentShader:Q,defines:v.defines,customVertexShaderID:mt,customFragmentShaderID:Et,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Bt,instancing:Nt,instancingColor:Nt&&G.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:St===null?i.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:Qn,map:Pt,matcap:Mt,envMap:F,envMapMode:F&&q.mapping,envMapCubeUVHeight:$,aoMap:qt,lightMap:bt,bumpMap:zt,normalMap:wt,displacementMap:d&&fe,emissiveMap:kt,normalMapObjectSpace:wt&&v.normalMapType===Wf,normalMapTangentSpace:wt&&v.normalMapType===ku,metalnessMap:R,roughnessMap:S,anisotropy:H,anisotropyMap:_t,clearcoat:at,clearcoatMap:vt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Gt,iridescence:st,iridescenceMap:nt,iridescenceThicknessMap:ee,sheen:ot,sheenColorMap:L,sheenRoughnessMap:et,specularMap:ft,specularColorMap:ct,specularIntensityMap:At,transmission:Tt,transmissionMap:Jt,thicknessMap:ne,gradientMap:Zt,opaque:v.transparent===!1&&v.blending===Es,alphaMap:dt,alphaTest:D,alphaHash:ht,combine:v.combine,mapUv:Pt&&_(v.map.channel),aoMapUv:qt&&_(v.aoMap.channel),lightMapUv:bt&&_(v.lightMap.channel),bumpMapUv:zt&&_(v.bumpMap.channel),normalMapUv:wt&&_(v.normalMap.channel),displacementMapUv:fe&&_(v.displacementMap.channel),emissiveMapUv:kt&&_(v.emissiveMap.channel),metalnessMapUv:R&&_(v.metalnessMap.channel),roughnessMapUv:S&&_(v.roughnessMap.channel),anisotropyMapUv:_t&&_(v.anisotropyMap.channel),clearcoatMapUv:vt&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:L&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:et&&_(v.sheenRoughnessMap.channel),specularMapUv:ft&&_(v.specularMap.channel),specularColorMapUv:ct&&_(v.specularColorMap.channel),specularIntensityMapUv:At&&_(v.specularIntensityMap.channel),transmissionMapUv:Jt&&_(v.transmissionMap.channel),thicknessMapUv:ne&&_(v.thicknessMap.channel),alphaMapUv:dt&&_(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(wt||H),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:It,vertexUv2s:Rt,vertexUv3s:ie,pointsUvs:G.isPoints===!0&&!!N.attributes.uv&&(Pt||dt),fog:!!P,useFog:v.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:G.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:gt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:se,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Pt&&v.map.isVideoTexture===!0&&he.getTransfer(v.map.colorSpace)===pe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ee,flipSided:v.side===Ne,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:ut&&v.extensions.derivatives===!0,extensionFragDepth:ut&&v.extensions.fragDepth===!0,extensionDrawBuffers:ut&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:ut&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ut&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){let E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(let U in v.defines)E.push(U),E.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(y(E,v),x(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function y(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function x(v,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),v.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),v.push(o.mask)}function M(v){let E=g[v.type],U;if(E){let O=zn[E];U=Rp.clone(O.uniforms)}else U=v.uniforms;return U}function T(v,E){let U;for(let O=0,G=l.length;O<G;O++){let P=l[O];if(P.cacheKey===E){U=P,++U.usedTimes;break}}return U===void 0&&(U=new F1(i,E,v,r),l.push(U)),U}function A(v){if(--v.usedTimes===0){let E=l.indexOf(v);l[E]=l[l.length-1],l.pop(),v.destroy()}}function b(v){c.remove(v)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:T,releaseProgram:A,releaseShaderCache:b,programs:l,dispose:I}}function H1(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function k1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function uu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function du(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function o(u,d,f,g,_,m){let p=a(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,g,_,m){let p=a(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||k1),n.length>1&&n.sort(d||uu),s.length>1&&s.sort(d||uu)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function V1(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new du,i.set(n,[a])):s>=r.length?(a=new du,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function G1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Ut};break;case"SpotLight":e={position:new C,direction:new C,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function W1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var X1=0;function Y1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function q1(i,t){let e=new G1,n=W1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new C);let r=new C,a=new oe,o=new oe;function c(h,u){let d=0,f=0,g=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let _=0,m=0,p=0,y=0,x=0,M=0,T=0,A=0,b=0,I=0,v=0;h.sort(Y1);let E=u===!0?Math.PI:1;for(let O=0,G=h.length;O<G;O++){let P=h[O],N=P.color,z=P.intensity,q=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=N.r*z*E,f+=N.g*z*E,g+=N.b*z*E;else if(P.isLightProbe){for(let W=0;W<9;W++)s.probe[W].addScaledVector(P.sh.coefficients[W],z);v++}else if(P.isDirectionalLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity*E),P.castShadow){let J=P.shadow,rt=n.get(P);rt.shadowBias=J.bias,rt.shadowNormalBias=J.normalBias,rt.shadowRadius=J.radius,rt.shadowMapSize=J.mapSize,s.directionalShadow[_]=rt,s.directionalShadowMap[_]=$,s.directionalShadowMatrix[_]=P.shadow.matrix,M++}s.directional[_]=W,_++}else if(P.isSpotLight){let W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(N).multiplyScalar(z*E),W.distance=q,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,s.spot[p]=W;let J=P.shadow;if(P.map&&(s.spotLightMap[b]=P.map,b++,J.updateMatrices(P),P.castShadow&&I++),s.spotLightMatrix[p]=J.matrix,P.castShadow){let rt=n.get(P);rt.shadowBias=J.bias,rt.shadowNormalBias=J.normalBias,rt.shadowRadius=J.radius,rt.shadowMapSize=J.mapSize,s.spotShadow[p]=rt,s.spotShadowMap[p]=$,A++}p++}else if(P.isRectAreaLight){let W=e.get(P);W.color.copy(N).multiplyScalar(z),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),s.rectArea[y]=W,y++}else if(P.isPointLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity*E),W.distance=P.distance,W.decay=P.decay,P.castShadow){let J=P.shadow,rt=n.get(P);rt.shadowBias=J.bias,rt.shadowNormalBias=J.normalBias,rt.shadowRadius=J.radius,rt.shadowMapSize=J.mapSize,rt.shadowCameraNear=J.camera.near,rt.shadowCameraFar=J.camera.far,s.pointShadow[m]=rt,s.pointShadowMap[m]=$,s.pointShadowMatrix[m]=P.shadow.matrix,T++}s.point[m]=W,m++}else if(P.isHemisphereLight){let W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(z*E),W.groundColor.copy(P.groundColor).multiplyScalar(z*E),s.hemi[x]=W,x++}}y>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=pt.LTC_FLOAT_1,s.rectAreaLTC2=pt.LTC_FLOAT_2):(s.rectAreaLTC1=pt.LTC_HALF_1,s.rectAreaLTC2=pt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=pt.LTC_FLOAT_1,s.rectAreaLTC2=pt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=pt.LTC_HALF_1,s.rectAreaLTC2=pt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=g;let U=s.hash;(U.directionalLength!==_||U.pointLength!==m||U.spotLength!==p||U.rectAreaLength!==y||U.hemiLength!==x||U.numDirectionalShadows!==M||U.numPointShadows!==T||U.numSpotShadows!==A||U.numSpotMaps!==b||U.numLightProbes!==v)&&(s.directional.length=_,s.spot.length=p,s.rectArea.length=y,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=T,s.pointShadowMap.length=T,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=T,s.spotLightMatrix.length=A+b-I,s.spotLightMap.length=b,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=v,U.directionalLength=_,U.pointLength=m,U.spotLength=p,U.rectAreaLength=y,U.hemiLength=x,U.numDirectionalShadows=M,U.numPointShadows=T,U.numSpotShadows=A,U.numSpotMaps=b,U.numLightProbes=v,s.version=X1++)}function l(h,u){let d=0,f=0,g=0,_=0,m=0,p=u.matrixWorldInverse;for(let y=0,x=h.length;y<x;y++){let M=h[y];if(M.isDirectionalLight){let T=s.directional[d];T.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),d++}else if(M.isSpotLight){let T=s.spot[g];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let T=s.rectArea[_];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(p),o.identity(),a.copy(M.matrixWorld),a.premultiply(p),o.extractRotation(a),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){let T=s.point[f];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let T=s.hemi[m];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:s}}function fu(i,t){let e=new q1(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Z1(i,t){let e=new WeakMap;function n(r,a=0){let o=e.get(r),c;return o===void 0?(c=new fu(i,t),e.set(r,[c])):a>=o.length?(c=new fu(i,t),o.push(c)):c=o[a],c}function s(){e=new WeakMap}return{get:n,dispose:s}}var bc=class extends vi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},wc=class extends vi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},$1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J1=`uniform sampler2D shadow_pass;
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
}`;function K1(i,t,e){let n=new dr,s=new tt,r=new tt,a=new ye,o=new bc({depthPacking:Gf}),c=new wc,l={},h=e.maxTextureSize,u={[xi]:Ne,[Ne]:xi,[Ee]:Ee},d=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:$1,fragmentShader:J1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new ue;g.setAttribute("position",new me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new j(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pu;let p=this.type;this.render=function(A,b,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let v=i.getRenderTarget(),E=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),O=i.state;O.setBlending(mi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let G=p!==Kn&&this.type===Kn,P=p===Kn&&this.type!==Kn;for(let N=0,z=A.length;N<z;N++){let q=A[N],$=q.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let W=$.getFrameExtents();if(s.multiply(W),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,$.mapSize.y=r.y)),$.map===null||G===!0||P===!0){let rt=this.type!==Kn?{minFilter:sn,magFilter:sn}:{};$.map!==null&&$.map.dispose(),$.map=new ti(s.x,s.y,rt),$.map.texture.name=q.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();let J=$.getViewportCount();for(let rt=0;rt<J;rt++){let gt=$.getViewport(rt);a.set(r.x*gt.x,r.y*gt.y,r.x*gt.z,r.y*gt.w),O.viewport(a),$.updateMatrices(q,rt),n=$.getFrustum(),M(b,I,$.camera,q,this.type)}$.isPointLightShadow!==!0&&this.type===Kn&&y($,I),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(v,E,U)};function y(A,b){let I=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ti(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(b,null,I,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(b,null,I,f,_,null)}function x(A,b,I,v){let E=null,U=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)E=U;else if(E=I.isPointLight===!0?c:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let O=E.uuid,G=b.uuid,P=l[O];P===void 0&&(P={},l[O]=P);let N=P[G];N===void 0&&(N=E.clone(),P[G]=N,b.addEventListener("dispose",T)),E=N}if(E.visible=b.visible,E.wireframe=b.wireframe,v===Kn?E.side=b.shadowSide!==null?b.shadowSide:b.side:E.side=b.shadowSide!==null?b.shadowSide:u[b.side],E.alphaMap=b.alphaMap,E.alphaTest=b.alphaTest,E.map=b.map,E.clipShadows=b.clipShadows,E.clippingPlanes=b.clippingPlanes,E.clipIntersection=b.clipIntersection,E.displacementMap=b.displacementMap,E.displacementScale=b.displacementScale,E.displacementBias=b.displacementBias,E.wireframeLinewidth=b.wireframeLinewidth,E.linewidth=b.linewidth,I.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let O=i.properties.get(E);O.light=I}return E}function M(A,b,I,v,E){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===Kn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);let G=t.update(A),P=A.material;if(Array.isArray(P)){let N=G.groups;for(let z=0,q=N.length;z<q;z++){let $=N[z],W=P[$.materialIndex];if(W&&W.visible){let J=x(A,W,v,E);A.onBeforeShadow(i,A,b,I,G,J,$),i.renderBufferDirect(I,null,G,J,A,$),A.onAfterShadow(i,A,b,I,G,J,$)}}}else if(P.visible){let N=x(A,P,v,E);A.onBeforeShadow(i,A,b,I,G,N,null),i.renderBufferDirect(I,null,G,N,A,null),A.onAfterShadow(i,A,b,I,G,N,null)}}let O=A.children;for(let G=0,P=O.length;G<P;G++)M(O[G],b,I,v,E)}function T(A){A.target.removeEventListener("dispose",T);for(let I in l){let v=l[I],E=A.target.uuid;E in v&&(v[E].dispose(),delete v[E])}}}function j1(i,t,e){let n=e.isWebGL2;function s(){let D=!1,ht=new ye,ut=null,It=new ye(0,0,0,0);return{setMask:function(Rt){ut!==Rt&&!D&&(i.colorMask(Rt,Rt,Rt,Rt),ut=Rt)},setLocked:function(Rt){D=Rt},setClear:function(Rt,ie,se,He,Qe){Qe===!0&&(Rt*=He,ie*=He,se*=He),ht.set(Rt,ie,se,He),It.equals(ht)===!1&&(i.clearColor(Rt,ie,se,He),It.copy(ht))},reset:function(){D=!1,ut=null,It.set(-1,0,0,0)}}}function r(){let D=!1,ht=null,ut=null,It=null;return{setTest:function(Rt){Rt?Bt(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function(Rt){ht!==Rt&&!D&&(i.depthMask(Rt),ht=Rt)},setFunc:function(Rt){if(ut!==Rt){switch(Rt){case yf:i.depthFunc(i.NEVER);break;case vf:i.depthFunc(i.ALWAYS);break;case Mf:i.depthFunc(i.LESS);break;case mo:i.depthFunc(i.LEQUAL);break;case Ef:i.depthFunc(i.EQUAL);break;case Sf:i.depthFunc(i.GEQUAL);break;case bf:i.depthFunc(i.GREATER);break;case wf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ut=Rt}},setLocked:function(Rt){D=Rt},setClear:function(Rt){It!==Rt&&(i.clearDepth(Rt),It=Rt)},reset:function(){D=!1,ht=null,ut=null,It=null}}}function a(){let D=!1,ht=null,ut=null,It=null,Rt=null,ie=null,se=null,He=null,Qe=null;return{setTest:function(de){D||(de?Bt(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function(de){ht!==de&&!D&&(i.stencilMask(de),ht=de)},setFunc:function(de,tn,Bn){(ut!==de||It!==tn||Rt!==Bn)&&(i.stencilFunc(de,tn,Bn),ut=de,It=tn,Rt=Bn)},setOp:function(de,tn,Bn){(ie!==de||se!==tn||He!==Bn)&&(i.stencilOp(de,tn,Bn),ie=de,se=tn,He=Bn)},setLocked:function(de){D=de},setClear:function(de){Qe!==de&&(i.clearStencil(de),Qe=de)},reset:function(){D=!1,ht=null,ut=null,It=null,Rt=null,ie=null,se=null,He=null,Qe=null}}}let o=new s,c=new r,l=new a,h=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,_=[],m=null,p=!1,y=null,x=null,M=null,T=null,A=null,b=null,I=null,v=new Ut(0,0,0),E=0,U=!1,O=null,G=null,P=null,N=null,z=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,W=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(J)[1]),$=W>=1):J.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),$=W>=2);let rt=null,gt={},Y=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),mt=new ye().fromArray(Y),Et=new ye().fromArray(Q);function St(D,ht,ut,It){let Rt=new Uint8Array(4),ie=i.createTexture();i.bindTexture(D,ie),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let se=0;se<ut;se++)n&&(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)?i.texImage3D(ht,0,i.RGBA,1,1,It,0,i.RGBA,i.UNSIGNED_BYTE,Rt):i.texImage2D(ht+se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Rt);return ie}let Nt={};Nt[i.TEXTURE_2D]=St(i.TEXTURE_2D,i.TEXTURE_2D,1),Nt[i.TEXTURE_CUBE_MAP]=St(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Nt[i.TEXTURE_2D_ARRAY]=St(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Nt[i.TEXTURE_3D]=St(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Bt(i.DEPTH_TEST),c.setFunc(mo),kt(!1),R(Yl),Bt(i.CULL_FACE),wt(mi);function Bt(D){d[D]!==!0&&(i.enable(D),d[D]=!0)}function Pt(D){d[D]!==!1&&(i.disable(D),d[D]=!1)}function Mt(D,ht){return f[D]!==ht?(i.bindFramebuffer(D,ht),f[D]=ht,n&&(D===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ht),D===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ht)),!0):!1}function F(D,ht){let ut=_,It=!1;if(D)if(ut=g.get(ht),ut===void 0&&(ut=[],g.set(ht,ut)),D.isWebGLMultipleRenderTargets){let Rt=D.texture;if(ut.length!==Rt.length||ut[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,se=Rt.length;ie<se;ie++)ut[ie]=i.COLOR_ATTACHMENT0+ie;ut.length=Rt.length,It=!0}}else ut[0]!==i.COLOR_ATTACHMENT0&&(ut[0]=i.COLOR_ATTACHMENT0,It=!0);else ut[0]!==i.BACK&&(ut[0]=i.BACK,It=!0);It&&(e.isWebGL2?i.drawBuffers(ut):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ut))}function qt(D){return m!==D?(i.useProgram(D),m=D,!0):!1}let bt={[Ni]:i.FUNC_ADD,[sf]:i.FUNC_SUBTRACT,[rf]:i.FUNC_REVERSE_SUBTRACT};if(n)bt[Jl]=i.MIN,bt[Kl]=i.MAX;else{let D=t.get("EXT_blend_minmax");D!==null&&(bt[Jl]=D.MIN_EXT,bt[Kl]=D.MAX_EXT)}let zt={[of]:i.ZERO,[af]:i.ONE,[cf]:i.SRC_COLOR,[ac]:i.SRC_ALPHA,[pf]:i.SRC_ALPHA_SATURATE,[df]:i.DST_COLOR,[hf]:i.DST_ALPHA,[lf]:i.ONE_MINUS_SRC_COLOR,[cc]:i.ONE_MINUS_SRC_ALPHA,[ff]:i.ONE_MINUS_DST_COLOR,[uf]:i.ONE_MINUS_DST_ALPHA,[mf]:i.CONSTANT_COLOR,[gf]:i.ONE_MINUS_CONSTANT_COLOR,[_f]:i.CONSTANT_ALPHA,[xf]:i.ONE_MINUS_CONSTANT_ALPHA};function wt(D,ht,ut,It,Rt,ie,se,He,Qe,de){if(D===mi){p===!0&&(Pt(i.BLEND),p=!1);return}if(p===!1&&(Bt(i.BLEND),p=!0),D!==nf){if(D!==y||de!==U){if((x!==Ni||A!==Ni)&&(i.blendEquation(i.FUNC_ADD),x=Ni,A=Ni),de)switch(D){case Es:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ql:i.blendFunc(i.ONE,i.ONE);break;case Zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $l:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ql:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $l:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,T=null,b=null,I=null,v.set(0,0,0),E=0,y=D,U=de}return}Rt=Rt||ht,ie=ie||ut,se=se||It,(ht!==x||Rt!==A)&&(i.blendEquationSeparate(bt[ht],bt[Rt]),x=ht,A=Rt),(ut!==M||It!==T||ie!==b||se!==I)&&(i.blendFuncSeparate(zt[ut],zt[It],zt[ie],zt[se]),M=ut,T=It,b=ie,I=se),(He.equals(v)===!1||Qe!==E)&&(i.blendColor(He.r,He.g,He.b,Qe),v.copy(He),E=Qe),y=D,U=!1}function fe(D,ht){D.side===Ee?Pt(i.CULL_FACE):Bt(i.CULL_FACE);let ut=D.side===Ne;ht&&(ut=!ut),kt(ut),D.blending===Es&&D.transparent===!1?wt(mi):wt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),o.setMask(D.colorWrite);let It=D.stencilWrite;l.setTest(It),It&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),H(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Bt(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function kt(D){O!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),O=D)}function R(D){D!==tf?(Bt(i.CULL_FACE),D!==G&&(D===Yl?i.cullFace(i.BACK):D===ef?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),G=D}function S(D){D!==P&&($&&i.lineWidth(D),P=D)}function H(D,ht,ut){D?(Bt(i.POLYGON_OFFSET_FILL),(N!==ht||z!==ut)&&(i.polygonOffset(ht,ut),N=ht,z=ut)):Pt(i.POLYGON_OFFSET_FILL)}function at(D){D?Bt(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function st(D){D===void 0&&(D=i.TEXTURE0+q-1),rt!==D&&(i.activeTexture(D),rt=D)}function ot(D,ht,ut){ut===void 0&&(rt===null?ut=i.TEXTURE0+q-1:ut=rt);let It=gt[ut];It===void 0&&(It={type:void 0,texture:void 0},gt[ut]=It),(It.type!==D||It.texture!==ht)&&(rt!==ut&&(i.activeTexture(ut),rt=ut),i.bindTexture(D,ht||Nt[D]),It.type=D,It.texture=ht)}function Tt(){let D=gt[rt];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function _t(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Dt(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Gt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function L(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ct(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function At(D){mt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),mt.copy(D))}function Jt(D){Et.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Et.copy(D))}function ne(D,ht){let ut=u.get(ht);ut===void 0&&(ut=new WeakMap,u.set(ht,ut));let It=ut.get(D);It===void 0&&(It=i.getUniformBlockIndex(ht,D.name),ut.set(D,It))}function Zt(D,ht){let It=u.get(ht).get(D);h.get(ht)!==It&&(i.uniformBlockBinding(ht,It,D.__bindingPointIndex),h.set(ht,It))}function dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},rt=null,gt={},f={},g=new WeakMap,_=[],m=null,p=!1,y=null,x=null,M=null,T=null,A=null,b=null,I=null,v=new Ut(0,0,0),E=0,U=!1,O=null,G=null,P=null,N=null,z=null,mt.set(0,0,i.canvas.width,i.canvas.height),Et.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Bt,disable:Pt,bindFramebuffer:Mt,drawBuffers:F,useProgram:qt,setBlending:wt,setMaterial:fe,setFlipSided:kt,setCullFace:R,setLineWidth:S,setPolygonOffset:H,setScissorTest:at,activeTexture:st,bindTexture:ot,unbindTexture:Tt,compressedTexImage2D:_t,compressedTexImage3D:vt,texImage2D:ft,texImage3D:ct,updateUBOMapping:ne,uniformBlockBinding:Zt,texStorage2D:L,texStorage3D:et,texSubImage2D:Dt,texSubImage3D:Gt,compressedTexSubImage2D:nt,compressedTexSubImage3D:ee,scissor:At,viewport:Jt,reset:dt}}function Q1(i,t,e,n,s,r,a){let o=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return f?new OffscreenCanvas(R,S):hr("canvas")}function _(R,S,H,at){let st=1;if((R.width>at||R.height>at)&&(st=at/Math.max(R.width,R.height)),st<1||S===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){let ot=S?Eo:Math.floor,Tt=ot(st*R.width),_t=ot(st*R.height);u===void 0&&(u=g(Tt,_t));let vt=H?g(Tt,_t):u;return vt.width=Tt,vt.height=_t,vt.getContext("2d").drawImage(R,0,0,Tt,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Tt+"x"+_t+")."),vt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return fc(R.width)&&fc(R.height)}function p(R){return o?!1:R.wrapS!==Rn||R.wrapT!==Rn||R.minFilter!==sn&&R.minFilter!==yn}function y(R,S){return R.generateMipmaps&&S&&R.minFilter!==sn&&R.minFilter!==yn}function x(R){i.generateMipmap(R)}function M(R,S,H,at,st=!1){if(o===!1)return S;if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ot=S;if(S===i.RED&&(H===i.FLOAT&&(ot=i.R32F),H===i.HALF_FLOAT&&(ot=i.R16F),H===i.UNSIGNED_BYTE&&(ot=i.R8)),S===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(ot=i.R8UI),H===i.UNSIGNED_SHORT&&(ot=i.R16UI),H===i.UNSIGNED_INT&&(ot=i.R32UI),H===i.BYTE&&(ot=i.R8I),H===i.SHORT&&(ot=i.R16I),H===i.INT&&(ot=i.R32I)),S===i.RG&&(H===i.FLOAT&&(ot=i.RG32F),H===i.HALF_FLOAT&&(ot=i.RG16F),H===i.UNSIGNED_BYTE&&(ot=i.RG8)),S===i.RGBA){let Tt=st?xo:he.getTransfer(at);H===i.FLOAT&&(ot=i.RGBA32F),H===i.HALF_FLOAT&&(ot=i.RGBA16F),H===i.UNSIGNED_BYTE&&(ot=Tt===pe?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(ot=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(ot=i.RGB5_A1)}return(ot===i.R16F||ot===i.R32F||ot===i.RG16F||ot===i.RG32F||ot===i.RGBA16F||ot===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function T(R,S,H){return y(R,H)===!0||R.isFramebufferTexture&&R.minFilter!==sn&&R.minFilter!==yn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function A(R){return R===sn||R===jl||R===Ta?i.NEAREST:i.LINEAR}function b(R){let S=R.target;S.removeEventListener("dispose",b),v(S),S.isVideoTexture&&h.delete(S)}function I(R){let S=R.target;S.removeEventListener("dispose",I),U(S)}function v(R){let S=n.get(R);if(S.__webglInit===void 0)return;let H=R.source,at=d.get(H);if(at){let st=at[S.__cacheKey];st.usedTimes--,st.usedTimes===0&&E(R),Object.keys(at).length===0&&d.delete(H)}n.remove(R)}function E(R){let S=n.get(R);i.deleteTexture(S.__webglTexture);let H=R.source,at=d.get(H);delete at[S.__cacheKey],a.memory.textures--}function U(R){let S=R.texture,H=n.get(R),at=n.get(S);if(at.__webglTexture!==void 0&&(i.deleteTexture(at.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(H.__webglFramebuffer[st]))for(let ot=0;ot<H.__webglFramebuffer[st].length;ot++)i.deleteFramebuffer(H.__webglFramebuffer[st][ot]);else i.deleteFramebuffer(H.__webglFramebuffer[st]);H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer[st])}else{if(Array.isArray(H.__webglFramebuffer))for(let st=0;st<H.__webglFramebuffer.length;st++)i.deleteFramebuffer(H.__webglFramebuffer[st]);else i.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&i.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let st=0;st<H.__webglColorRenderbuffer.length;st++)H.__webglColorRenderbuffer[st]&&i.deleteRenderbuffer(H.__webglColorRenderbuffer[st]);H.__webglDepthRenderbuffer&&i.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let st=0,ot=S.length;st<ot;st++){let Tt=n.get(S[st]);Tt.__webglTexture&&(i.deleteTexture(Tt.__webglTexture),a.memory.textures--),n.remove(S[st])}n.remove(S),n.remove(R)}let O=0;function G(){O=0}function P(){let R=O;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),O+=1,R}function N(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function z(R,S){let H=n.get(R);if(R.isVideoTexture&&fe(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){let at=R.image;if(at===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(H,R,S);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+S)}function q(R,S){let H=n.get(R);if(R.version>0&&H.__version!==R.version){mt(H,R,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+S)}function $(R,S){let H=n.get(R);if(R.version>0&&H.__version!==R.version){mt(H,R,S);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+S)}function W(R,S){let H=n.get(R);if(R.version>0&&H.__version!==R.version){Et(H,R,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+S)}let J={[ar]:i.REPEAT,[Rn]:i.CLAMP_TO_EDGE,[uc]:i.MIRRORED_REPEAT},rt={[sn]:i.NEAREST,[jl]:i.NEAREST_MIPMAP_NEAREST,[Ta]:i.NEAREST_MIPMAP_LINEAR,[yn]:i.LINEAR,[Df]:i.LINEAR_MIPMAP_NEAREST,[Hi]:i.LINEAR_MIPMAP_LINEAR},gt={[Xf]:i.NEVER,[Kf]:i.ALWAYS,[Yf]:i.LESS,[Vu]:i.LEQUAL,[qf]:i.EQUAL,[Jf]:i.GEQUAL,[Zf]:i.GREATER,[$f]:i.NOTEQUAL};function Y(R,S,H){if(H?(i.texParameteri(R,i.TEXTURE_WRAP_S,J[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,J[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,J[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,rt[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,rt[S.minFilter])):(i.texParameteri(R,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(R,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(S.wrapS!==Rn||S.wrapT!==Rn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(R,i.TEXTURE_MAG_FILTER,A(S.magFilter)),i.texParameteri(R,i.TEXTURE_MIN_FILTER,A(S.minFilter)),S.minFilter!==sn&&S.minFilter!==yn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,gt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let at=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===sn||S.minFilter!==Ta&&S.minFilter!==Hi||S.type===pi&&t.has("OES_texture_float_linear")===!1||o===!1&&S.type===cr&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(R,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Q(R,S){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",b));let at=S.source,st=d.get(at);st===void 0&&(st={},d.set(at,st));let ot=N(S);if(ot!==R.__cacheKey){st[ot]===void 0&&(st[ot]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),st[ot].usedTimes++;let Tt=st[R.__cacheKey];Tt!==void 0&&(st[R.__cacheKey].usedTimes--,Tt.usedTimes===0&&E(S)),R.__cacheKey=ot,R.__webglTexture=st[ot].texture}return H}function mt(R,S,H){let at=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(at=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(at=i.TEXTURE_3D);let st=Q(R,S),ot=S.source;e.bindTexture(at,R.__webglTexture,i.TEXTURE0+H);let Tt=n.get(ot);if(ot.version!==Tt.__version||st===!0){e.activeTexture(i.TEXTURE0+H);let _t=he.getPrimaries(he.workingColorSpace),vt=S.colorSpace===vn?null:he.getPrimaries(S.colorSpace),Dt=S.colorSpace===vn||_t===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let Gt=p(S)&&m(S.image)===!1,nt=_(S.image,Gt,!1,s.maxTextureSize);nt=kt(S,nt);let ee=m(nt)||o,L=r.convert(S.format,S.colorSpace),et=r.convert(S.type),ft=M(S.internalFormat,L,et,S.colorSpace,S.isVideoTexture);Y(at,S,ee);let ct,At=S.mipmaps,Jt=o&&S.isVideoTexture!==!0&&ft!==zu,ne=Tt.__version===void 0||st===!0,Zt=T(S,nt,ee);if(S.isDepthTexture)ft=i.DEPTH_COMPONENT,o?S.type===pi?ft=i.DEPTH_COMPONENT32F:S.type===fi?ft=i.DEPTH_COMPONENT24:S.type===Fi?ft=i.DEPTH24_STENCIL8:ft=i.DEPTH_COMPONENT16:S.type===pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Bi&&ft===i.DEPTH_COMPONENT&&S.type!==tl&&S.type!==fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=fi,et=r.convert(S.type)),S.format===As&&ft===i.DEPTH_COMPONENT&&(ft=i.DEPTH_STENCIL,S.type!==Fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Fi,et=r.convert(S.type))),ne&&(Jt?e.texStorage2D(i.TEXTURE_2D,1,ft,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,ft,nt.width,nt.height,0,L,et,null));else if(S.isDataTexture)if(At.length>0&&ee){Jt&&ne&&e.texStorage2D(i.TEXTURE_2D,Zt,ft,At[0].width,At[0].height);for(let dt=0,D=At.length;dt<D;dt++)ct=At[dt],Jt?e.texSubImage2D(i.TEXTURE_2D,dt,0,0,ct.width,ct.height,L,et,ct.data):e.texImage2D(i.TEXTURE_2D,dt,ft,ct.width,ct.height,0,L,et,ct.data);S.generateMipmaps=!1}else Jt?(ne&&e.texStorage2D(i.TEXTURE_2D,Zt,ft,nt.width,nt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,nt.width,nt.height,L,et,nt.data)):e.texImage2D(i.TEXTURE_2D,0,ft,nt.width,nt.height,0,L,et,nt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Jt&&ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Zt,ft,At[0].width,At[0].height,nt.depth);for(let dt=0,D=At.length;dt<D;dt++)ct=At[dt],S.format!==Cn?L!==null?Jt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,ct.width,ct.height,nt.depth,L,ct.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,dt,ft,ct.width,ct.height,nt.depth,0,ct.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,ct.width,ct.height,nt.depth,L,et,ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,dt,ft,ct.width,ct.height,nt.depth,0,L,et,ct.data)}else{Jt&&ne&&e.texStorage2D(i.TEXTURE_2D,Zt,ft,At[0].width,At[0].height);for(let dt=0,D=At.length;dt<D;dt++)ct=At[dt],S.format!==Cn?L!==null?Jt?e.compressedTexSubImage2D(i.TEXTURE_2D,dt,0,0,ct.width,ct.height,L,ct.data):e.compressedTexImage2D(i.TEXTURE_2D,dt,ft,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?e.texSubImage2D(i.TEXTURE_2D,dt,0,0,ct.width,ct.height,L,et,ct.data):e.texImage2D(i.TEXTURE_2D,dt,ft,ct.width,ct.height,0,L,et,ct.data)}else if(S.isDataArrayTexture)Jt?(ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Zt,ft,nt.width,nt.height,nt.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,L,et,nt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,ft,nt.width,nt.height,nt.depth,0,L,et,nt.data);else if(S.isData3DTexture)Jt?(ne&&e.texStorage3D(i.TEXTURE_3D,Zt,ft,nt.width,nt.height,nt.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,L,et,nt.data)):e.texImage3D(i.TEXTURE_3D,0,ft,nt.width,nt.height,nt.depth,0,L,et,nt.data);else if(S.isFramebufferTexture){if(ne)if(Jt)e.texStorage2D(i.TEXTURE_2D,Zt,ft,nt.width,nt.height);else{let dt=nt.width,D=nt.height;for(let ht=0;ht<Zt;ht++)e.texImage2D(i.TEXTURE_2D,ht,ft,dt,D,0,L,et,null),dt>>=1,D>>=1}}else if(At.length>0&&ee){Jt&&ne&&e.texStorage2D(i.TEXTURE_2D,Zt,ft,At[0].width,At[0].height);for(let dt=0,D=At.length;dt<D;dt++)ct=At[dt],Jt?e.texSubImage2D(i.TEXTURE_2D,dt,0,0,L,et,ct):e.texImage2D(i.TEXTURE_2D,dt,ft,L,et,ct);S.generateMipmaps=!1}else Jt?(ne&&e.texStorage2D(i.TEXTURE_2D,Zt,ft,nt.width,nt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,L,et,nt)):e.texImage2D(i.TEXTURE_2D,0,ft,L,et,nt);y(S,ee)&&x(at),Tt.__version=ot.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Et(R,S,H){if(S.image.length!==6)return;let at=Q(R,S),st=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+H);let ot=n.get(st);if(st.version!==ot.__version||at===!0){e.activeTexture(i.TEXTURE0+H);let Tt=he.getPrimaries(he.workingColorSpace),_t=S.colorSpace===vn?null:he.getPrimaries(S.colorSpace),vt=S.colorSpace===vn||Tt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let Dt=S.isCompressedTexture||S.image[0].isCompressedTexture,Gt=S.image[0]&&S.image[0].isDataTexture,nt=[];for(let dt=0;dt<6;dt++)!Dt&&!Gt?nt[dt]=_(S.image[dt],!1,!0,s.maxCubemapSize):nt[dt]=Gt?S.image[dt].image:S.image[dt],nt[dt]=kt(S,nt[dt]);let ee=nt[0],L=m(ee)||o,et=r.convert(S.format,S.colorSpace),ft=r.convert(S.type),ct=M(S.internalFormat,et,ft,S.colorSpace),At=o&&S.isVideoTexture!==!0,Jt=ot.__version===void 0||at===!0,ne=T(S,ee,L);Y(i.TEXTURE_CUBE_MAP,S,L);let Zt;if(Dt){At&&Jt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ne,ct,ee.width,ee.height);for(let dt=0;dt<6;dt++){Zt=nt[dt].mipmaps;for(let D=0;D<Zt.length;D++){let ht=Zt[D];S.format!==Cn?et!==null?At?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,D,0,0,ht.width,ht.height,et,ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,D,ct,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):At?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,D,0,0,ht.width,ht.height,et,ft,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,D,ct,ht.width,ht.height,0,et,ft,ht.data)}}}else{Zt=S.mipmaps,At&&Jt&&(Zt.length>0&&ne++,e.texStorage2D(i.TEXTURE_CUBE_MAP,ne,ct,nt[0].width,nt[0].height));for(let dt=0;dt<6;dt++)if(Gt){At?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,nt[dt].width,nt[dt].height,et,ft,nt[dt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,ct,nt[dt].width,nt[dt].height,0,et,ft,nt[dt].data);for(let D=0;D<Zt.length;D++){let ut=Zt[D].image[dt].image;At?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,D+1,0,0,ut.width,ut.height,et,ft,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,D+1,ct,ut.width,ut.height,0,et,ft,ut.data)}}else{At?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,et,ft,nt[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,ct,et,ft,nt[dt]);for(let D=0;D<Zt.length;D++){let ht=Zt[D];At?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,D+1,0,0,et,ft,ht.image[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,D+1,ct,et,ft,ht.image[dt])}}}y(S,L)&&x(i.TEXTURE_CUBE_MAP),ot.__version=st.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function St(R,S,H,at,st,ot){let Tt=r.convert(H.format,H.colorSpace),_t=r.convert(H.type),vt=M(H.internalFormat,Tt,_t,H.colorSpace);if(!n.get(S).__hasExternalTextures){let Gt=Math.max(1,S.width>>ot),nt=Math.max(1,S.height>>ot);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,ot,vt,Gt,nt,S.depth,0,Tt,_t,null):e.texImage2D(st,ot,vt,Gt,nt,0,Tt,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),wt(S)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,st,n.get(H).__webglTexture,0,zt(S)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,at,st,n.get(H).__webglTexture,ot),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(R,S,H){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer&&!S.stencilBuffer){let at=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(H||wt(S)){let st=S.depthTexture;st&&st.isDepthTexture&&(st.type===pi?at=i.DEPTH_COMPONENT32F:st.type===fi&&(at=i.DEPTH_COMPONENT24));let ot=zt(S);wt(S)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,at,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,at,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,at,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,R)}else if(S.depthBuffer&&S.stencilBuffer){let at=zt(S);H&&wt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,i.DEPTH24_STENCIL8,S.width,S.height):wt(S)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,R)}else{let at=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let st=0;st<at.length;st++){let ot=at[st],Tt=r.convert(ot.format,ot.colorSpace),_t=r.convert(ot.type),vt=M(ot.internalFormat,Tt,_t,ot.colorSpace),Dt=zt(S);H&&wt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,vt,S.width,S.height):wt(S)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt,vt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,vt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Bt(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),z(S.depthTexture,0);let at=n.get(S.depthTexture).__webglTexture,st=zt(S);if(S.depthTexture.format===Bi)wt(S)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0);else if(S.depthTexture.format===As)wt(S)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function Pt(R){let S=n.get(R),H=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Bt(S.__webglFramebuffer,R)}else if(H){S.__webglDepthbuffer=[];for(let at=0;at<6;at++)e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[at]),S.__webglDepthbuffer[at]=i.createRenderbuffer(),Nt(S.__webglDepthbuffer[at],R,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),Nt(S.__webglDepthbuffer,R,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Mt(R,S,H){let at=n.get(R);S!==void 0&&St(at.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Pt(R)}function F(R){let S=R.texture,H=n.get(R),at=n.get(S);R.addEventListener("dispose",I),R.isWebGLMultipleRenderTargets!==!0&&(at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture()),at.__version=S.version,a.memory.textures++);let st=R.isWebGLCubeRenderTarget===!0,ot=R.isWebGLMultipleRenderTargets===!0,Tt=m(R)||o;if(st){H.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(o&&S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[_t]=[];for(let vt=0;vt<S.mipmaps.length;vt++)H.__webglFramebuffer[_t][vt]=i.createFramebuffer()}else H.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let _t=0;_t<S.mipmaps.length;_t++)H.__webglFramebuffer[_t]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(ot)if(s.drawBuffers){let _t=R.texture;for(let vt=0,Dt=_t.length;vt<Dt;vt++){let Gt=n.get(_t[vt]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&wt(R)===!1){let _t=ot?S:[S];H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let vt=0;vt<_t.length;vt++){let Dt=_t[vt];H.__webglColorRenderbuffer[vt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[vt]);let Gt=r.convert(Dt.format,Dt.colorSpace),nt=r.convert(Dt.type),ee=M(Dt.internalFormat,Gt,nt,Dt.colorSpace,R.isXRRenderTarget===!0),L=zt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,L,ee,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,H.__webglColorRenderbuffer[vt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Nt(H.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(st){e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),Y(i.TEXTURE_CUBE_MAP,S,Tt);for(let _t=0;_t<6;_t++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let vt=0;vt<S.mipmaps.length;vt++)St(H.__webglFramebuffer[_t][vt],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,vt);else St(H.__webglFramebuffer[_t],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);y(S,Tt)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ot){let _t=R.texture;for(let vt=0,Dt=_t.length;vt<Dt;vt++){let Gt=_t[vt],nt=n.get(Gt);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture),Y(i.TEXTURE_2D,Gt,Tt),St(H.__webglFramebuffer,R,Gt,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,0),y(Gt,Tt)&&x(i.TEXTURE_2D)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?_t=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(_t,at.__webglTexture),Y(_t,S,Tt),o&&S.mipmaps&&S.mipmaps.length>0)for(let vt=0;vt<S.mipmaps.length;vt++)St(H.__webglFramebuffer[vt],R,S,i.COLOR_ATTACHMENT0,_t,vt);else St(H.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,_t,0);y(S,Tt)&&x(_t),e.unbindTexture()}R.depthBuffer&&Pt(R)}function qt(R){let S=m(R)||o,H=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let at=0,st=H.length;at<st;at++){let ot=H[at];if(y(ot,S)){let Tt=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,_t=n.get(ot).__webglTexture;e.bindTexture(Tt,_t),x(Tt),e.unbindTexture()}}}function bt(R){if(o&&R.samples>0&&wt(R)===!1){let S=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],H=R.width,at=R.height,st=i.COLOR_BUFFER_BIT,ot=[],Tt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(R),vt=R.isWebGLMultipleRenderTargets===!0;if(vt)for(let Dt=0;Dt<S.length;Dt++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let Dt=0;Dt<S.length;Dt++){ot.push(i.COLOR_ATTACHMENT0+Dt),R.depthBuffer&&ot.push(Tt);let Gt=_t.__ignoreDepthValues!==void 0?_t.__ignoreDepthValues:!1;if(Gt===!1&&(R.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),vt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[Dt]),Gt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Tt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Tt])),vt){let nt=n.get(S[Dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,nt,0)}i.blitFramebuffer(0,0,H,at,0,0,H,at,st,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ot)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),vt)for(let Dt=0;Dt<S.length;Dt++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,_t.__webglColorRenderbuffer[Dt]);let Gt=n.get(S[Dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}}function zt(R){return Math.min(s.maxSamples,R.samples)}function wt(R){let S=n.get(R);return o&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function fe(R){let S=a.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function kt(R,S){let H=R.colorSpace,at=R.format,st=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===dc||H!==Qn&&H!==vn&&(he.getTransfer(H)===pe?o===!1?t.has("EXT_sRGB")===!0&&at===Cn?(R.format=dc,R.minFilter=yn,R.generateMipmaps=!1):S=So.sRGBToLinear(S):(at!==Cn||st!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}this.allocateTextureUnit=P,this.resetTextureUnits=G,this.setTexture2D=z,this.setTexture2DArray=q,this.setTexture3D=$,this.setTextureCube=W,this.rebindTextures=Mt,this.setupRenderTarget=F,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=wt}function t_(i,t,e){let n=e.isWebGL2;function s(r,a=vn){let o,c=he.getTransfer(a);if(r===_i)return i.UNSIGNED_BYTE;if(r===Uu)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Nu)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Uf)return i.BYTE;if(r===Nf)return i.SHORT;if(r===tl)return i.UNSIGNED_SHORT;if(r===Du)return i.INT;if(r===fi)return i.UNSIGNED_INT;if(r===pi)return i.FLOAT;if(r===cr)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Of)return i.ALPHA;if(r===Cn)return i.RGBA;if(r===Ff)return i.LUMINANCE;if(r===Bf)return i.LUMINANCE_ALPHA;if(r===Bi)return i.DEPTH_COMPONENT;if(r===As)return i.DEPTH_STENCIL;if(r===dc)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===zf)return i.RED;if(r===Ou)return i.RED_INTEGER;if(r===Hf)return i.RG;if(r===Fu)return i.RG_INTEGER;if(r===Bu)return i.RGBA_INTEGER;if(r===Aa||r===Ra||r===Ca||r===Pa)if(c===pe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Aa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ra)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ca)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Pa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Aa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ra)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ca)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Pa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ql||r===th||r===eh||r===nh)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Ql)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===th)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===eh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===nh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===zu)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ih||r===sh)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===ih)return c===pe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===sh)return c===pe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===rh||r===oh||r===ah||r===ch||r===lh||r===hh||r===uh||r===dh||r===fh||r===ph||r===mh||r===gh||r===_h||r===xh)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===rh)return c===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===oh)return c===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ah)return c===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ch)return c===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===lh)return c===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===hh)return c===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===uh)return c===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===dh)return c===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===fh)return c===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ph)return c===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===mh)return c===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===gh)return c===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===_h)return c===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===xh)return c===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===La||r===yh||r===vh)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===La)return c===pe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===yh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===vh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===kf||r===Mh||r===Eh||r===Sh)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===La)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Mh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Eh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Sh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Fi?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Tc=class extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},re=class extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}},e_={type:"move"},sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(e_)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ac=class extends Hn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,_=e.getContextAttributes(),m=null,p=null,y=[],x=[],M=new tt,T=null,A=new Je;A.layers.enable(1),A.viewport=new ye;let b=new Je;b.layers.enable(2),b.viewport=new ye;let I=[A,b],v=new Tc;v.layers.enable(1),v.layers.enable(2);let E=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=y[Y];return Q===void 0&&(Q=new sr,y[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=y[Y];return Q===void 0&&(Q=new sr,y[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=y[Y];return Q===void 0&&(Q=new sr,y[Y]=Q),Q.getHandSpace()};function O(Y){let Q=x.indexOf(Y.inputSource);if(Q===-1)return;let mt=y[Q];mt!==void 0&&(mt.update(Y.inputSource,Y.frame,l||a),mt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",P);for(let Y=0;Y<y.length;Y++){let Q=x[Y];Q!==null&&(x[Y]=null,y[Y].disconnect(Q))}E=null,U=null,t.setRenderTarget(m),f=null,d=null,u=null,s=null,p=null,gt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",G),s.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(M),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let Q={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new ti(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:_i,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let Q=null,mt=null,Et=null;_.depth&&(Et=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=_.stencil?As:Bi,mt=_.stencil?Fi:fi);let St={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(St),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new ti(d.textureWidth,d.textureHeight,{format:Cn,type:_i,depthTexture:new Io(d.textureWidth,d.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});let Nt=t.properties.get(p);Nt.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),gt.setContext(s),gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(Y){for(let Q=0;Q<Y.removed.length;Q++){let mt=Y.removed[Q],Et=x.indexOf(mt);Et>=0&&(x[Et]=null,y[Et].disconnect(mt))}for(let Q=0;Q<Y.added.length;Q++){let mt=Y.added[Q],Et=x.indexOf(mt);if(Et===-1){for(let Nt=0;Nt<y.length;Nt++)if(Nt>=x.length){x.push(mt),Et=Nt;break}else if(x[Nt]===null){x[Nt]=mt,Et=Nt;break}if(Et===-1)break}let St=y[Et];St&&St.connect(mt)}}let N=new C,z=new C;function q(Y,Q,mt){N.setFromMatrixPosition(Q.matrixWorld),z.setFromMatrixPosition(mt.matrixWorld);let Et=N.distanceTo(z),St=Q.projectionMatrix.elements,Nt=mt.projectionMatrix.elements,Bt=St[14]/(St[10]-1),Pt=St[14]/(St[10]+1),Mt=(St[9]+1)/St[5],F=(St[9]-1)/St[5],qt=(St[8]-1)/St[0],bt=(Nt[8]+1)/Nt[0],zt=Bt*qt,wt=Bt*bt,fe=Et/(-qt+bt),kt=fe*-qt;Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(kt),Y.translateZ(fe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();let R=Bt+fe,S=Pt+fe,H=zt-kt,at=wt+(Et-kt),st=Mt*Pt/S*R,ot=F*Pt/S*R;Y.projectionMatrix.makePerspective(H,at,st,ot,R,S),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function $(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;v.near=b.near=A.near=Y.near,v.far=b.far=A.far=Y.far,(E!==v.near||U!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,U=v.far);let Q=Y.parent,mt=v.cameras;$(v,Q);for(let Et=0;Et<mt.length;Et++)$(mt[Et],Q);mt.length===2?q(v,A,b):v.projectionMatrix.copy(A.projectionMatrix),W(Y,v,Q)};function W(Y,Q,mt){mt===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(mt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=lr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)};let J=null;function rt(Y,Q){if(h=Q.getViewerPose(l||a),g=Q,h!==null){let mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let Et=!1;mt.length!==v.cameras.length&&(v.cameras.length=0,Et=!0);for(let St=0;St<mt.length;St++){let Nt=mt[St],Bt=null;if(f!==null)Bt=f.getViewport(Nt);else{let Mt=u.getViewSubImage(d,Nt);Bt=Mt.viewport,St===0&&(t.setRenderTargetTextures(p,Mt.colorTexture,d.ignoreDepthValues?void 0:Mt.depthStencilTexture),t.setRenderTarget(p))}let Pt=I[St];Pt===void 0&&(Pt=new Je,Pt.layers.enable(St),Pt.viewport=new ye,I[St]=Pt),Pt.matrix.fromArray(Nt.transform.matrix),Pt.matrix.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.projectionMatrix.fromArray(Nt.projectionMatrix),Pt.projectionMatrixInverse.copy(Pt.projectionMatrix).invert(),Pt.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),St===0&&(v.matrix.copy(Pt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Et===!0&&v.cameras.push(Pt)}}for(let mt=0;mt<y.length;mt++){let Et=x[mt],St=y[mt];Et!==null&&St!==void 0&&St.update(Et,Q,l||a)}J&&J(Y,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let gt=new Zu;gt.setAnimationLoop(rt),this.setAnimationLoop=function(Y){J=Y},this.dispose=function(){}}};function n_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,qu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,y,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ne&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ne&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let x=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ne&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function i_(i,t,e,n){let s={},r={},a=[],o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,x){let M=x.program;n.uniformBlockBinding(y,M)}function l(y,x){let M=s[y.id];M===void 0&&(g(y),M=h(y),s[y.id]=M,y.addEventListener("dispose",m));let T=x.program;n.updateUBOMapping(y,T);let A=t.render.frame;r[y.id]!==A&&(d(y),r[y.id]=A)}function h(y){let x=u();y.__bindingPointIndex=x;let M=i.createBuffer(),T=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,T,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,M),M}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let x=s[y.id],M=y.uniforms,T=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let A=0,b=M.length;A<b;A++){let I=Array.isArray(M[A])?M[A]:[M[A]];for(let v=0,E=I.length;v<E;v++){let U=I[v];if(f(U,A,v,T)===!0){let O=U.__offset,G=Array.isArray(U.value)?U.value:[U.value],P=0;for(let N=0;N<G.length;N++){let z=G[N],q=_(z);typeof z=="number"||typeof z=="boolean"?(U.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,O+P,U.__data)):z.isMatrix3?(U.__data[0]=z.elements[0],U.__data[1]=z.elements[1],U.__data[2]=z.elements[2],U.__data[3]=0,U.__data[4]=z.elements[3],U.__data[5]=z.elements[4],U.__data[6]=z.elements[5],U.__data[7]=0,U.__data[8]=z.elements[6],U.__data[9]=z.elements[7],U.__data[10]=z.elements[8],U.__data[11]=0):(z.toArray(U.__data,P),P+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,x,M,T){let A=y.value,b=x+"_"+M;if(T[b]===void 0)return typeof A=="number"||typeof A=="boolean"?T[b]=A:T[b]=A.clone(),!0;{let I=T[b];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return T[b]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(y){let x=y.uniforms,M=0,T=16;for(let b=0,I=x.length;b<I;b++){let v=Array.isArray(x[b])?x[b]:[x[b]];for(let E=0,U=v.length;E<U;E++){let O=v[E],G=Array.isArray(O.value)?O.value:[O.value];for(let P=0,N=G.length;P<N;P++){let z=G[P],q=_(z),$=M%T;$!==0&&T-$<q.boundary&&(M+=T-$),O.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=q.storage}}}let A=M%T;return A>0&&(M+=T-A),y.__size=M,y.__cache={},this}function _(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){let x=y.target;x.removeEventListener("dispose",m);let M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}var fr=class{constructor(t={}){let{canvas:e=dp(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let f=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Re,this._useLegacyLights=!1,this.toneMapping=gi,this.toneMappingExposure=1;let x=this,M=!1,T=0,A=0,b=null,I=-1,v=null,E=new ye,U=new ye,O=null,G=new Ut(0),P=0,N=e.width,z=e.height,q=1,$=null,W=null,J=new ye(0,0,N,z),rt=new ye(0,0,N,z),gt=!1,Y=new dr,Q=!1,mt=!1,Et=null,St=new oe,Nt=new tt,Bt=new C,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Mt(){return b===null?q:1}let F=n;function qt(w,B){for(let V=0;V<w.length;V++){let X=w[V],k=e.getContext(X,B);if(k!==null)return k}return null}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Kc}`),e.addEventListener("webglcontextlost",dt,!1),e.addEventListener("webglcontextrestored",D,!1),e.addEventListener("webglcontextcreationerror",ht,!1),F===null){let B=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&B.shift(),F=qt(B,w),F===null)throw qt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let bt,zt,wt,fe,kt,R,S,H,at,st,ot,Tt,_t,vt,Dt,Gt,nt,ee,L,et,ft,ct,At,Jt;function ne(){bt=new Eg(F),zt=new gg(F,bt,t),bt.init(zt),ct=new t_(F,bt,zt),wt=new j1(F,bt,zt),fe=new wg(F),kt=new H1,R=new Q1(F,bt,wt,kt,zt,ct,fe),S=new xg(x),H=new Mg(x),at=new Dp(F,zt),At=new pg(F,bt,at,zt),st=new Sg(F,at,fe,At),ot=new Cg(F,st,at,fe),L=new Rg(F,zt,R),Gt=new _g(kt),Tt=new z1(x,S,H,bt,zt,At,Gt),_t=new n_(x,kt),vt=new V1,Dt=new Z1(bt,zt),ee=new fg(x,S,H,wt,ot,d,c),nt=new K1(x,ot,zt),Jt=new i_(F,fe,zt,wt),et=new mg(F,bt,fe,zt),ft=new bg(F,bt,fe,zt),fe.programs=Tt.programs,x.capabilities=zt,x.extensions=bt,x.properties=kt,x.renderLists=vt,x.shadowMap=nt,x.state=wt,x.info=fe}ne();let Zt=new Ac(x,F);this.xr=Zt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let w=bt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=bt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(N,z,!1))},this.getSize=function(w){return w.set(N,z)},this.setSize=function(w,B,V=!0){if(Zt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=w,z=B,e.width=Math.floor(w*q),e.height=Math.floor(B*q),V===!0&&(e.style.width=w+"px",e.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(N*q,z*q).floor()},this.setDrawingBufferSize=function(w,B,V){N=w,z=B,q=V,e.width=Math.floor(w*V),e.height=Math.floor(B*V),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(E)},this.getViewport=function(w){return w.copy(J)},this.setViewport=function(w,B,V,X){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,B,V,X),wt.viewport(E.copy(J).multiplyScalar(q).floor())},this.getScissor=function(w){return w.copy(rt)},this.setScissor=function(w,B,V,X){w.isVector4?rt.set(w.x,w.y,w.z,w.w):rt.set(w,B,V,X),wt.scissor(U.copy(rt).multiplyScalar(q).floor())},this.getScissorTest=function(){return gt},this.setScissorTest=function(w){wt.setScissorTest(gt=w)},this.setOpaqueSort=function(w){$=w},this.setTransparentSort=function(w){W=w},this.getClearColor=function(w){return w.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(w=!0,B=!0,V=!0){let X=0;if(w){let k=!1;if(b!==null){let yt=b.texture.format;k=yt===Bu||yt===Fu||yt===Ou}if(k){let yt=b.texture.type,Ct=yt===_i||yt===fi||yt===tl||yt===Fi||yt===Uu||yt===Nu,Ot=ee.getClearColor(),Ht=ee.getClearAlpha(),$t=Ot.r,Vt=Ot.g,Wt=Ot.b;Ct?(f[0]=$t,f[1]=Vt,f[2]=Wt,f[3]=Ht,F.clearBufferuiv(F.COLOR,0,f)):(g[0]=$t,g[1]=Vt,g[2]=Wt,g[3]=Ht,F.clearBufferiv(F.COLOR,0,g))}else X|=F.COLOR_BUFFER_BIT}B&&(X|=F.DEPTH_BUFFER_BIT),V&&(X|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",dt,!1),e.removeEventListener("webglcontextrestored",D,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),vt.dispose(),Dt.dispose(),kt.dispose(),S.dispose(),H.dispose(),ot.dispose(),At.dispose(),Jt.dispose(),Tt.dispose(),Zt.dispose(),Zt.removeEventListener("sessionstart",Qe),Zt.removeEventListener("sessionend",de),Et&&(Et.dispose(),Et=null),tn.stop()};function dt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let w=fe.autoReset,B=nt.enabled,V=nt.autoUpdate,X=nt.needsUpdate,k=nt.type;ne(),fe.autoReset=w,nt.enabled=B,nt.autoUpdate=V,nt.needsUpdate=X,nt.type=k}function ht(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ut(w){let B=w.target;B.removeEventListener("dispose",ut),It(B)}function It(w){Rt(w),kt.remove(w)}function Rt(w){let B=kt.get(w).programs;B!==void 0&&(B.forEach(function(V){Tt.releaseProgram(V)}),w.isShaderMaterial&&Tt.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,V,X,k,yt){B===null&&(B=Pt);let Ct=k.isMesh&&k.matrixWorld.determinant()<0,Ot=Jd(w,B,V,X,k);wt.setMaterial(X,Ct);let Ht=V.index,$t=1;if(X.wireframe===!0){if(Ht=st.getWireframeAttribute(V),Ht===void 0)return;$t=2}let Vt=V.drawRange,Wt=V.attributes.position,Ae=Vt.start*$t,hn=(Vt.start+Vt.count)*$t;yt!==null&&(Ae=Math.max(Ae,yt.start*$t),hn=Math.min(hn,(yt.start+yt.count)*$t)),Ht!==null?(Ae=Math.max(Ae,0),hn=Math.min(hn,Ht.count)):Wt!=null&&(Ae=Math.max(Ae,0),hn=Math.min(hn,Wt.count));let ke=hn-Ae;if(ke<0||ke===1/0)return;At.setup(k,X,Ot,V,Ht);let Xn,Me=et;if(Ht!==null&&(Xn=at.get(Ht),Me=ft,Me.setIndex(Xn)),k.isMesh)X.wireframe===!0?(wt.setLineWidth(X.wireframeLinewidth*Mt()),Me.setMode(F.LINES)):Me.setMode(F.TRIANGLES);else if(k.isLine){let Kt=X.linewidth;Kt===void 0&&(Kt=1),wt.setLineWidth(Kt*Mt()),k.isLineSegments?Me.setMode(F.LINES):k.isLineLoop?Me.setMode(F.LINE_LOOP):Me.setMode(F.LINE_STRIP)}else k.isPoints?Me.setMode(F.POINTS):k.isSprite&&Me.setMode(F.TRIANGLES);if(k.isBatchedMesh)Me.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)Me.renderInstances(Ae,ke,k.count);else if(V.isInstancedBufferGeometry){let Kt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ea=Math.min(V.instanceCount,Kt);Me.renderInstances(Ae,ke,Ea)}else Me.render(Ae,ke)};function ie(w,B,V){w.transparent===!0&&w.side===Ee&&w.forceSinglePass===!1?(w.side=Ne,w.needsUpdate=!0,zr(w,B,V),w.side=xi,w.needsUpdate=!0,zr(w,B,V),w.side=Ee):zr(w,B,V)}this.compile=function(w,B,V=null){V===null&&(V=w),m=Dt.get(V),m.init(),y.push(m),V.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),w!==V&&w.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights(x._useLegacyLights);let X=new Set;return w.traverse(function(k){let yt=k.material;if(yt)if(Array.isArray(yt))for(let Ct=0;Ct<yt.length;Ct++){let Ot=yt[Ct];ie(Ot,V,k),X.add(Ot)}else ie(yt,V,k),X.add(yt)}),y.pop(),m=null,X},this.compileAsync=function(w,B,V=null){let X=this.compile(w,B,V);return new Promise(k=>{function yt(){if(X.forEach(function(Ct){kt.get(Ct).currentProgram.isReady()&&X.delete(Ct)}),X.size===0){k(w);return}setTimeout(yt,10)}bt.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let se=null;function He(w){se&&se(w)}function Qe(){tn.stop()}function de(){tn.start()}let tn=new Zu;tn.setAnimationLoop(He),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(w){se=w,Zt.setAnimationLoop(w),w===null?tn.stop():tn.start()},Zt.addEventListener("sessionstart",Qe),Zt.addEventListener("sessionend",de),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Zt.enabled===!0&&Zt.isPresenting===!0&&(Zt.cameraAutoUpdate===!0&&Zt.updateCamera(B),B=Zt.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,B,b),m=Dt.get(w,y.length),m.init(),y.push(m),St.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Y.setFromProjectionMatrix(St),mt=this.localClippingEnabled,Q=Gt.init(this.clippingPlanes,mt),_=vt.get(w,p.length),_.init(),p.push(_),Bn(w,B,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort($,W),this.info.render.frame++,Q===!0&&Gt.beginShadows();let V=m.state.shadowsArray;if(nt.render(V,w,B),Q===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(_,w),m.setupLights(x._useLegacyLights),B.isArrayCamera){let X=B.cameras;for(let k=0,yt=X.length;k<yt;k++){let Ct=X[k];Hl(_,w,Ct,Ct.viewport)}}else Hl(_,w,B);b!==null&&(R.updateMultisampleRenderTarget(b),R.updateRenderTargetMipmap(b)),w.isScene===!0&&w.onAfterRender(x,w,B),At.resetDefaultState(),I=-1,v=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Bn(w,B,V,X){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Y.intersectsSprite(w)){X&&Bt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(St);let Ct=ot.update(w),Ot=w.material;Ot.visible&&_.push(w,Ct,Ot,V,Bt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Y.intersectsObject(w))){let Ct=ot.update(w),Ot=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Bt.copy(w.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Bt.copy(Ct.boundingSphere.center)),Bt.applyMatrix4(w.matrixWorld).applyMatrix4(St)),Array.isArray(Ot)){let Ht=Ct.groups;for(let $t=0,Vt=Ht.length;$t<Vt;$t++){let Wt=Ht[$t],Ae=Ot[Wt.materialIndex];Ae&&Ae.visible&&_.push(w,Ct,Ae,V,Bt.z,Wt)}}else Ot.visible&&_.push(w,Ct,Ot,V,Bt.z,null)}}let yt=w.children;for(let Ct=0,Ot=yt.length;Ct<Ot;Ct++)Bn(yt[Ct],B,V,X)}function Hl(w,B,V,X){let k=w.opaque,yt=w.transmissive,Ct=w.transparent;m.setupLightsView(V),Q===!0&&Gt.setGlobalState(x.clippingPlanes,V),yt.length>0&&$d(k,yt,B,V),X&&wt.viewport(E.copy(X)),k.length>0&&Br(k,B,V),yt.length>0&&Br(yt,B,V),Ct.length>0&&Br(Ct,B,V),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function $d(w,B,V,X){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;let yt=zt.isWebGL2;Et===null&&(Et=new ti(1,1,{generateMipmaps:!0,type:bt.has("EXT_color_buffer_half_float")?cr:_i,minFilter:Hi,samples:yt?4:0})),x.getDrawingBufferSize(Nt),yt?Et.setSize(Nt.x,Nt.y):Et.setSize(Eo(Nt.x),Eo(Nt.y));let Ct=x.getRenderTarget();x.setRenderTarget(Et),x.getClearColor(G),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();let Ot=x.toneMapping;x.toneMapping=gi,Br(w,V,X),R.updateMultisampleRenderTarget(Et),R.updateRenderTargetMipmap(Et);let Ht=!1;for(let $t=0,Vt=B.length;$t<Vt;$t++){let Wt=B[$t],Ae=Wt.object,hn=Wt.geometry,ke=Wt.material,Xn=Wt.group;if(ke.side===Ee&&Ae.layers.test(X.layers)){let Me=ke.side;ke.side=Ne,ke.needsUpdate=!0,kl(Ae,V,X,hn,ke,Xn),ke.side=Me,ke.needsUpdate=!0,Ht=!0}}Ht===!0&&(R.updateMultisampleRenderTarget(Et),R.updateRenderTargetMipmap(Et)),x.setRenderTarget(Ct),x.setClearColor(G,P),x.toneMapping=Ot}function Br(w,B,V){let X=B.isScene===!0?B.overrideMaterial:null;for(let k=0,yt=w.length;k<yt;k++){let Ct=w[k],Ot=Ct.object,Ht=Ct.geometry,$t=X===null?Ct.material:X,Vt=Ct.group;Ot.layers.test(V.layers)&&kl(Ot,B,V,Ht,$t,Vt)}}function kl(w,B,V,X,k,yt){w.onBeforeRender(x,B,V,X,k,yt),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(x,B,V,X,w,yt),k.transparent===!0&&k.side===Ee&&k.forceSinglePass===!1?(k.side=Ne,k.needsUpdate=!0,x.renderBufferDirect(V,B,X,k,w,yt),k.side=xi,k.needsUpdate=!0,x.renderBufferDirect(V,B,X,k,w,yt),k.side=Ee):x.renderBufferDirect(V,B,X,k,w,yt),w.onAfterRender(x,B,V,X,k,yt)}function zr(w,B,V){B.isScene!==!0&&(B=Pt);let X=kt.get(w),k=m.state.lights,yt=m.state.shadowsArray,Ct=k.state.version,Ot=Tt.getParameters(w,k.state,yt,B,V),Ht=Tt.getProgramCacheKey(Ot),$t=X.programs;X.environment=w.isMeshStandardMaterial?B.environment:null,X.fog=B.fog,X.envMap=(w.isMeshStandardMaterial?H:S).get(w.envMap||X.environment),$t===void 0&&(w.addEventListener("dispose",ut),$t=new Map,X.programs=$t);let Vt=$t.get(Ht);if(Vt!==void 0){if(X.currentProgram===Vt&&X.lightsStateVersion===Ct)return Gl(w,Ot),Vt}else Ot.uniforms=Tt.getUniforms(w),w.onBuild(V,Ot,x),w.onBeforeCompile(Ot,x),Vt=Tt.acquireProgram(Ot,Ht),$t.set(Ht,Vt),X.uniforms=Ot.uniforms;let Wt=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Wt.clippingPlanes=Gt.uniform),Gl(w,Ot),X.needsLights=jd(w),X.lightsStateVersion=Ct,X.needsLights&&(Wt.ambientLightColor.value=k.state.ambient,Wt.lightProbe.value=k.state.probe,Wt.directionalLights.value=k.state.directional,Wt.directionalLightShadows.value=k.state.directionalShadow,Wt.spotLights.value=k.state.spot,Wt.spotLightShadows.value=k.state.spotShadow,Wt.rectAreaLights.value=k.state.rectArea,Wt.ltc_1.value=k.state.rectAreaLTC1,Wt.ltc_2.value=k.state.rectAreaLTC2,Wt.pointLights.value=k.state.point,Wt.pointLightShadows.value=k.state.pointShadow,Wt.hemisphereLights.value=k.state.hemi,Wt.directionalShadowMap.value=k.state.directionalShadowMap,Wt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Wt.spotShadowMap.value=k.state.spotShadowMap,Wt.spotLightMatrix.value=k.state.spotLightMatrix,Wt.spotLightMap.value=k.state.spotLightMap,Wt.pointShadowMap.value=k.state.pointShadowMap,Wt.pointShadowMatrix.value=k.state.pointShadowMatrix),X.currentProgram=Vt,X.uniformsList=null,Vt}function Vl(w){if(w.uniformsList===null){let B=w.currentProgram.getUniforms();w.uniformsList=bs.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function Gl(w,B){let V=kt.get(w);V.outputColorSpace=B.outputColorSpace,V.batching=B.batching,V.instancing=B.instancing,V.instancingColor=B.instancingColor,V.skinning=B.skinning,V.morphTargets=B.morphTargets,V.morphNormals=B.morphNormals,V.morphColors=B.morphColors,V.morphTargetsCount=B.morphTargetsCount,V.numClippingPlanes=B.numClippingPlanes,V.numIntersection=B.numClipIntersection,V.vertexAlphas=B.vertexAlphas,V.vertexTangents=B.vertexTangents,V.toneMapping=B.toneMapping}function Jd(w,B,V,X,k){B.isScene!==!0&&(B=Pt),R.resetTextureUnits();let yt=B.fog,Ct=X.isMeshStandardMaterial?B.environment:null,Ot=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Qn,Ht=(X.isMeshStandardMaterial?H:S).get(X.envMap||Ct),$t=X.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Vt=!!V.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Wt=!!V.morphAttributes.position,Ae=!!V.morphAttributes.normal,hn=!!V.morphAttributes.color,ke=gi;X.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(ke=x.toneMapping);let Xn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Me=Xn!==void 0?Xn.length:0,Kt=kt.get(X),Ea=m.state.lights;if(Q===!0&&(mt===!0||w!==v)){let _n=w===v&&X.id===I;Gt.setState(X,w,_n)}let Te=!1;X.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Ea.state.version||Kt.outputColorSpace!==Ot||k.isBatchedMesh&&Kt.batching===!1||!k.isBatchedMesh&&Kt.batching===!0||k.isInstancedMesh&&Kt.instancing===!1||!k.isInstancedMesh&&Kt.instancing===!0||k.isSkinnedMesh&&Kt.skinning===!1||!k.isSkinnedMesh&&Kt.skinning===!0||k.isInstancedMesh&&Kt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Kt.instancingColor===!1&&k.instanceColor!==null||Kt.envMap!==Ht||X.fog===!0&&Kt.fog!==yt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Gt.numPlanes||Kt.numIntersection!==Gt.numIntersection)||Kt.vertexAlphas!==$t||Kt.vertexTangents!==Vt||Kt.morphTargets!==Wt||Kt.morphNormals!==Ae||Kt.morphColors!==hn||Kt.toneMapping!==ke||zt.isWebGL2===!0&&Kt.morphTargetsCount!==Me)&&(Te=!0):(Te=!0,Kt.__version=X.version);let Ri=Kt.currentProgram;Te===!0&&(Ri=zr(X,B,k));let Wl=!1,qs=!1,Sa=!1,qe=Ri.getUniforms(),Ci=Kt.uniforms;if(wt.useProgram(Ri.program)&&(Wl=!0,qs=!0,Sa=!0),X.id!==I&&(I=X.id,qs=!0),Wl||v!==w){qe.setValue(F,"projectionMatrix",w.projectionMatrix),qe.setValue(F,"viewMatrix",w.matrixWorldInverse);let _n=qe.map.cameraPosition;_n!==void 0&&_n.setValue(F,Bt.setFromMatrixPosition(w.matrixWorld)),zt.logarithmicDepthBuffer&&qe.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&qe.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),v!==w&&(v=w,qs=!0,Sa=!0)}if(k.isSkinnedMesh){qe.setOptional(F,k,"bindMatrix"),qe.setOptional(F,k,"bindMatrixInverse");let _n=k.skeleton;_n&&(zt.floatVertexTextures?(_n.boneTexture===null&&_n.computeBoneTexture(),qe.setValue(F,"boneTexture",_n.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(qe.setOptional(F,k,"batchingTexture"),qe.setValue(F,"batchingTexture",k._matricesTexture,R));let ba=V.morphAttributes;if((ba.position!==void 0||ba.normal!==void 0||ba.color!==void 0&&zt.isWebGL2===!0)&&L.update(k,V,Ri),(qs||Kt.receiveShadow!==k.receiveShadow)&&(Kt.receiveShadow=k.receiveShadow,qe.setValue(F,"receiveShadow",k.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Ci.envMap.value=Ht,Ci.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),qs&&(qe.setValue(F,"toneMappingExposure",x.toneMappingExposure),Kt.needsLights&&Kd(Ci,Sa),yt&&X.fog===!0&&_t.refreshFogUniforms(Ci,yt),_t.refreshMaterialUniforms(Ci,X,q,z,Et),bs.upload(F,Vl(Kt),Ci,R)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(bs.upload(F,Vl(Kt),Ci,R),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&qe.setValue(F,"center",k.center),qe.setValue(F,"modelViewMatrix",k.modelViewMatrix),qe.setValue(F,"normalMatrix",k.normalMatrix),qe.setValue(F,"modelMatrix",k.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let _n=X.uniformsGroups;for(let wa=0,Qd=_n.length;wa<Qd;wa++)if(zt.isWebGL2){let Xl=_n[wa];Jt.update(Xl,Ri),Jt.bind(Xl,Ri)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ri}function Kd(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function jd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(w,B,V){kt.get(w.texture).__webglTexture=B,kt.get(w.depthTexture).__webglTexture=V;let X=kt.get(w);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=V===void 0,X.__autoAllocateDepthBuffer||bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,B){let V=kt.get(w);V.__webglFramebuffer=B,V.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,V=0){b=w,T=B,A=V;let X=!0,k=null,yt=!1,Ct=!1;if(w){let Ht=kt.get(w);Ht.__useDefaultFramebuffer!==void 0?(wt.bindFramebuffer(F.FRAMEBUFFER,null),X=!1):Ht.__webglFramebuffer===void 0?R.setupRenderTarget(w):Ht.__hasExternalTextures&&R.rebindTextures(w,kt.get(w.texture).__webglTexture,kt.get(w.depthTexture).__webglTexture);let $t=w.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Ct=!0);let Vt=kt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Vt[B])?k=Vt[B][V]:k=Vt[B],yt=!0):zt.isWebGL2&&w.samples>0&&R.useMultisampledRTT(w)===!1?k=kt.get(w).__webglMultisampledFramebuffer:Array.isArray(Vt)?k=Vt[V]:k=Vt,E.copy(w.viewport),U.copy(w.scissor),O=w.scissorTest}else E.copy(J).multiplyScalar(q).floor(),U.copy(rt).multiplyScalar(q).floor(),O=gt;if(wt.bindFramebuffer(F.FRAMEBUFFER,k)&&zt.drawBuffers&&X&&wt.drawBuffers(w,k),wt.viewport(E),wt.scissor(U),wt.setScissorTest(O),yt){let Ht=kt.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ht.__webglTexture,V)}else if(Ct){let Ht=kt.get(w.texture),$t=B||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ht.__webglTexture,V||0,$t)}I=-1},this.readRenderTargetPixels=function(w,B,V,X,k,yt,Ct){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=kt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ot=Ot[Ct]),Ot){wt.bindFramebuffer(F.FRAMEBUFFER,Ot);try{let Ht=w.texture,$t=Ht.format,Vt=Ht.type;if($t!==Cn&&ct.convert($t)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Wt=Vt===cr&&(bt.has("EXT_color_buffer_half_float")||zt.isWebGL2&&bt.has("EXT_color_buffer_float"));if(Vt!==_i&&ct.convert(Vt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Vt===pi&&(zt.isWebGL2||bt.has("OES_texture_float")||bt.has("WEBGL_color_buffer_float")))&&!Wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-X&&V>=0&&V<=w.height-k&&F.readPixels(B,V,X,k,ct.convert($t),ct.convert(Vt),yt)}finally{let Ht=b!==null?kt.get(b).__webglFramebuffer:null;wt.bindFramebuffer(F.FRAMEBUFFER,Ht)}}},this.copyFramebufferToTexture=function(w,B,V=0){let X=Math.pow(2,-V),k=Math.floor(B.image.width*X),yt=Math.floor(B.image.height*X);R.setTexture2D(B,0),F.copyTexSubImage2D(F.TEXTURE_2D,V,0,0,w.x,w.y,k,yt),wt.unbindTexture()},this.copyTextureToTexture=function(w,B,V,X=0){let k=B.image.width,yt=B.image.height,Ct=ct.convert(V.format),Ot=ct.convert(V.type);R.setTexture2D(V,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,V.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,V.unpackAlignment),B.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,X,w.x,w.y,k,yt,Ct,Ot,B.image.data):B.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,X,w.x,w.y,B.mipmaps[0].width,B.mipmaps[0].height,Ct,B.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,X,w.x,w.y,Ct,Ot,B.image),X===0&&V.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),wt.unbindTexture()},this.copyTextureToTexture3D=function(w,B,V,X,k=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let yt=w.max.x-w.min.x+1,Ct=w.max.y-w.min.y+1,Ot=w.max.z-w.min.z+1,Ht=ct.convert(X.format),$t=ct.convert(X.type),Vt;if(X.isData3DTexture)R.setTexture3D(X,0),Vt=F.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)R.setTexture2DArray(X,0),Vt=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,X.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,X.unpackAlignment);let Wt=F.getParameter(F.UNPACK_ROW_LENGTH),Ae=F.getParameter(F.UNPACK_IMAGE_HEIGHT),hn=F.getParameter(F.UNPACK_SKIP_PIXELS),ke=F.getParameter(F.UNPACK_SKIP_ROWS),Xn=F.getParameter(F.UNPACK_SKIP_IMAGES),Me=V.isCompressedTexture?V.mipmaps[k]:V.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,Me.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Me.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,w.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,w.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,w.min.z),V.isDataTexture||V.isData3DTexture?F.texSubImage3D(Vt,k,B.x,B.y,B.z,yt,Ct,Ot,Ht,$t,Me.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Vt,k,B.x,B.y,B.z,yt,Ct,Ot,Ht,Me.data)):F.texSubImage3D(Vt,k,B.x,B.y,B.z,yt,Ct,Ot,Ht,$t,Me),F.pixelStorei(F.UNPACK_ROW_LENGTH,Wt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ae),F.pixelStorei(F.UNPACK_SKIP_PIXELS,hn),F.pixelStorei(F.UNPACK_SKIP_ROWS,ke),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Xn),k===0&&X.generateMipmaps&&F.generateMipmap(Vt),wt.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),wt.unbindTexture()},this.resetState=function(){T=0,A=0,b=null,wt.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===el?"display-p3":"srgb",e.unpackColorSpace=he.workingColorSpace===Jo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Re?zi:Hu}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===zi?Re:Qn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Rc=class extends fr{};Rc.prototype.isWebGL1Renderer=!0;var Do=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ut(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ps=class extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var pr=class extends me{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},gs=new oe,pu=new oe,co=[],mu=new ei,s_=new oe,js=new j,Qs=new yi,mr=class extends j{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new pr(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,s_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ei),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,gs),mu.copy(t.boundingBox).applyMatrix4(gs),this.boundingBox.union(mu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new yi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,gs),Qs.copy(t.boundingSphere).applyMatrix4(gs),this.boundingSphere.union(Qs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,s=this.count;if(js.geometry=this.geometry,js.material=this.material,js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qs.copy(this.boundingSphere),Qs.applyMatrix4(n),t.ray.intersectsSphere(Qs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,gs),pu.multiplyMatrices(n,gs),js.matrixWorld=pu,js.raycast(t,co);for(let a=0,o=co.length;a<o;a++){let c=co[a];c.instanceId=r,c.object=this,e.push(c)}co.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new pr(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var gr=class extends vi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},gu=new C,_u=new C,xu=new oe,ec=new ki,lo=new yi,Cc=class extends Ge{constructor(t=new ue,e=new gr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)gu.fromBufferAttribute(e,s-1),_u.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=gu.distanceTo(_u);t.setAttribute("lineDistance",new Ft(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(s),lo.radius+=r,t.ray.intersectsSphere(lo)===!1)return;xu.copy(s).invert(),ec.copy(t.ray).applyMatrix4(xu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new C,h=new C,u=new C,d=new C,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let p=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count);for(let x=p,M=y-1;x<M;x+=f){let T=g.getX(x),A=g.getX(x+1);if(l.fromBufferAttribute(m,T),h.fromBufferAttribute(m,A),ec.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let I=t.ray.origin.distanceTo(d);I<t.near||I>t.far||e.push({distance:I,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let x=p,M=y-1;x<M;x+=f){if(l.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),ec.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let A=t.ray.origin.distanceTo(d);A<t.near||A>t.far||e.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},yu=new C,vu=new C,Uo=class extends Cc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)yu.fromBufferAttribute(e,s),vu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+yu.distanceTo(vu);t.setAttribute("lineDistance",new Ft(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var No=class extends fn{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new tt:new C);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new C,s=[],r=[],a=[],o=new C,c=new oe;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ue(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ue(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},_r=class extends Mn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e){let n=e||new tt,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Pc=class extends _r{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function sl(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var ho=new C,nc=new sl,ic=new sl,sc=new sl,ii=class extends Mn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(ho.subVectors(s[0],s[1]).add(s[0]),l=ho);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ho.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ho),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),nc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),ic.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),sc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(nc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),ic.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),sc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(nc.calc(c),ic.calc(c),sc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Mu(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function r_(i,t){let e=1-i;return e*e*t}function o_(i,t){return 2*(1-i)*i*t}function a_(i,t){return i*i*t}function rr(i,t,e,n){return r_(i,t)+o_(i,e)+a_(i,n)}function c_(i,t){let e=1-i;return e*e*e*t}function l_(i,t){let e=1-i;return 3*e*e*i*t}function h_(i,t){return 3*(1-i)*i*i*t}function u_(i,t){return i*i*i*t}function or(i,t,e,n,s){return c_(i,t)+l_(i,e)+h_(i,n)+u_(i,s)}var Oo=class extends Mn{constructor(t=new tt,e=new tt,n=new tt,s=new tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new tt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(or(t,s.x,r.x,a.x,o.x),or(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Lc=class extends Mn{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(or(t,s.x,r.x,a.x,o.x),or(t,s.y,r.y,a.y,o.y),or(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Fo=class extends Mn{constructor(t=new tt,e=new tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new tt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ic=class extends Mn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Bo=class extends Mn{constructor(t=new tt,e=new tt,n=new tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new tt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(rr(t,s.x,r.x,a.x),rr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zo=class extends Mn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(rr(t,s.x,r.x,a.x),rr(t,s.y,r.y,a.y),rr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ho=class extends Mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new tt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Mu(o,c.x,l.x,h.x,u.x),Mu(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new tt().fromArray(s))}return this}},Dc=Object.freeze({__proto__:null,ArcCurve:Pc,CatmullRomCurve3:ii,CubicBezierCurve:Oo,CubicBezierCurve3:Lc,EllipseCurve:_r,LineCurve:Fo,LineCurve3:Ic,QuadraticBezierCurve:Bo,QuadraticBezierCurve3:zo,SplineCurve:Ho}),Uc=class extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Dc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Dc[s.type]().fromJSON(s))}return this}},Vi=class extends Uc{constructor(t){super(),this.type="Path",this.currentPoint=new tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Fo(this.currentPoint.clone(),new tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Bo(this.currentPoint.clone(),new tt(t,e),new tt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Oo(this.currentPoint.clone(),new tt(t,e),new tt(n,s),new tt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ho(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){let l=new _r(t,e,n,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ls=class i extends ue{constructor(t=[new tt(0,-.5),new tt(.5,0),new tt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ue(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/e,u=new C,d=new tt,f=new C,g=new C,_=new C,m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let y=0;y<=e;y++){let x=n+y*h*s,M=Math.sin(x),T=Math.cos(x);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*M,u.y=t[A].y,u.z=t[A].x*T,a.push(u.x,u.y,u.z),d.x=y/e,d.y=A/(t.length-1),o.push(d.x,d.y);let b=c[3*A+0]*M,I=c[3*A+1],v=c[3*A+0]*T;l.push(b,I,v)}}for(let y=0;y<e;y++)for(let x=0;x<t.length-1;x++){let M=x+y*t.length,T=M,A=M+t.length,b=M+t.length+1,I=M+1;r.push(T,A,I),r.push(b,I,A)}this.setIndex(r),this.setAttribute("position",new Ft(a,3)),this.setAttribute("uv",new Ft(o,2)),this.setAttribute("normal",new Ft(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},ko=class i extends Ls{constructor(t=1,e=1,n=4,s=8){let r=new Vi;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},Is=class i extends ue{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new C,h=new tt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ft(a,3)),this.setAttribute("normal",new Ft(o,3)),this.setAttribute("uv",new Ft(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ie=class i extends ue{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,_=[],m=n/2,p=0;y(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Ft(u,3)),this.setAttribute("normal",new Ft(d,3)),this.setAttribute("uv",new Ft(f,2));function y(){let M=new C,T=new C,A=0,b=(e-t)/n;for(let I=0;I<=r;I++){let v=[],E=I/r,U=E*(e-t)+t;for(let O=0;O<=s;O++){let G=O/s,P=G*c+o,N=Math.sin(P),z=Math.cos(P);T.x=U*N,T.y=-E*n+m,T.z=U*z,u.push(T.x,T.y,T.z),M.set(N,b,z).normalize(),d.push(M.x,M.y,M.z),f.push(G,1-E),v.push(g++)}_.push(v)}for(let I=0;I<s;I++)for(let v=0;v<r;v++){let E=_[v][I],U=_[v+1][I],O=_[v+1][I+1],G=_[v][I+1];h.push(E,U,G),h.push(U,O,G),A+=6}l.addGroup(p,A,0),p+=A}function x(M){let T=g,A=new tt,b=new C,I=0,v=M===!0?t:e,E=M===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*E,0),d.push(0,E,0),f.push(.5,.5),g++;let U=g;for(let O=0;O<=s;O++){let P=O/s*c+o,N=Math.cos(P),z=Math.sin(P);b.x=v*z,b.y=m*E,b.z=v*N,u.push(b.x,b.y,b.z),d.push(0,E,0),A.x=N*.5+.5,A.y=z*.5*E+.5,f.push(A.x,A.y),g++}for(let O=0;O<s;O++){let G=T+O,P=U+O;M===!0?h.push(P,P+1,G):h.push(P+1,P,G),I+=3}l.addGroup(p,I,M===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Gi=class i extends Ie{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Nc=class i extends ue{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new Ft(r,3)),this.setAttribute("normal",new Ft(r.slice(),3)),this.setAttribute("uv",new Ft(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let x=new C,M=new C,T=new C;for(let A=0;A<e.length;A+=3)f(e[A+0],x),f(e[A+1],M),f(e[A+2],T),c(x,M,T,y)}function c(y,x,M,T){let A=T+1,b=[];for(let I=0;I<=A;I++){b[I]=[];let v=y.clone().lerp(M,I/A),E=x.clone().lerp(M,I/A),U=A-I;for(let O=0;O<=U;O++)O===0&&I===A?b[I][O]=v:b[I][O]=v.clone().lerp(E,O/U)}for(let I=0;I<A;I++)for(let v=0;v<2*(A-I)-1;v++){let E=Math.floor(v/2);v%2===0?(d(b[I][E+1]),d(b[I+1][E]),d(b[I][E])):(d(b[I][E+1]),d(b[I+1][E+1]),d(b[I+1][E]))}}function l(y){let x=new C;for(let M=0;M<r.length;M+=3)x.x=r[M+0],x.y=r[M+1],x.z=r[M+2],x.normalize().multiplyScalar(y),r[M+0]=x.x,r[M+1]=x.y,r[M+2]=x.z}function h(){let y=new C;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];let M=m(y)/2/Math.PI+.5,T=p(y)/Math.PI+.5;a.push(M,1-T)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){let x=a[y+0],M=a[y+2],T=a[y+4],A=Math.max(x,M,T),b=Math.min(x,M,T);A>.9&&b<.1&&(x<.2&&(a[y+0]+=1),M<.2&&(a[y+2]+=1),T<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,x){let M=y*3;x.x=t[M+0],x.y=t[M+1],x.z=t[M+2]}function g(){let y=new C,x=new C,M=new C,T=new C,A=new tt,b=new tt,I=new tt;for(let v=0,E=0;v<r.length;v+=9,E+=6){y.set(r[v+0],r[v+1],r[v+2]),x.set(r[v+3],r[v+4],r[v+5]),M.set(r[v+6],r[v+7],r[v+8]),A.set(a[E+0],a[E+1]),b.set(a[E+2],a[E+3]),I.set(a[E+4],a[E+5]),T.copy(y).add(x).add(M).divideScalar(3);let U=m(T);_(A,E+0,y,U),_(b,E+2,x,U),_(I,E+4,M,U)}}function _(y,x,M,T){T<0&&y.x===1&&(a[x]=y.x-1),M.x===0&&M.z===0&&(a[x]=T/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Ds=class extends Vi{constructor(t){super(t),this.uuid=qi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Vi().fromJSON(s))}return this}},d_={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=td(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,d,f;if(n&&(r=__(i,t,r,e)),i.length>80*e){o=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-o,h-c),f=f!==0?32767/f:0}return xr(r,a,e,o,c,f,0),a}};function td(i,t,e,n,s){let r,a;if(s===R_(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Eu(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Eu(r,i[r],i[r+1],a);return a&&jo(a,a.next)&&(vr(a),a=a.next),a}function Wi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(jo(e,e.next)||Se(e.prev,e,e.next)===0)){if(vr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function xr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&E_(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?p_(i,n,s,r):f_(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),vr(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=m_(Wi(i),t,e),xr(i,t,e,n,s,r,2)):a===2&&g_(i,t,e,n,s,r):xr(Wi(i),t,e,n,s,r,1);break}}}function f_(i){let t=i.prev,e=i,n=i.next;if(Se(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,d=s>r?s>a?s:a:r>a?r:a,f=o>c?o>l?o:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Ms(s,o,r,c,a,l,g.x,g.y)&&Se(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function p_(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Se(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,d=a.y,f=o<c?o<l?o:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,_=o>c?o>l?o:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=Oc(f,g,t,e,n),y=Oc(_,m,t,e,n),x=i.prevZ,M=i.nextZ;for(;x&&x.z>=p&&M&&M.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&Ms(o,h,c,u,l,d,x.x,x.y)&&Se(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Ms(o,h,c,u,l,d,M.x,M.y)&&Se(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&Ms(o,h,c,u,l,d,x.x,x.y)&&Se(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=y;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Ms(o,h,c,u,l,d,M.x,M.y)&&Se(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function m_(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!jo(s,r)&&ed(s,n,n.next,r)&&yr(s,r)&&yr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),vr(n),vr(n.next),n=i=r),n=n.next}while(n!==i);return Wi(n)}function g_(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&w_(a,o)){let c=nd(a,o);a=Wi(a,a.next),c=Wi(c,c.next),xr(a,t,e,n,s,r,0),xr(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function __(i,t,e,n){let s=[],r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=td(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(b_(l));for(s.sort(x_),r=0;r<s.length;r++)e=y_(s[r],e);return e}function x_(i,t){return i.x-t.x}function y_(i,t){let e=v_(i,t);if(!e)return t;let n=nd(e,i);return Wi(n,n.next),Wi(e,e.next)}function v_(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Ms(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),yr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&M_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function M_(i,t){return Se(i.prev,i,t.prev)<0&&Se(t.next,i,i.next)<0}function E_(i,t,e,n){let s=i;do s.z===0&&(s.z=Oc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,S_(s)}function S_(i){let t,e,n,s,r,a,o,c,l=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(a>1);return i}function Oc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function b_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ms(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function w_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!T_(i,t)&&(yr(i,t)&&yr(t,i)&&A_(i,t)&&(Se(i.prev,i,t.prev)||Se(i,t.prev,t))||jo(i,t)&&Se(i.prev,i,i.next)>0&&Se(t.prev,t,t.next)>0)}function Se(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function jo(i,t){return i.x===t.x&&i.y===t.y}function ed(i,t,e,n){let s=fo(Se(i,t,e)),r=fo(Se(i,t,n)),a=fo(Se(e,n,i)),o=fo(Se(e,n,t));return!!(s!==r&&a!==o||s===0&&uo(i,e,t)||r===0&&uo(i,n,t)||a===0&&uo(e,i,n)||o===0&&uo(e,t,n))}function uo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function fo(i){return i>0?1:i<0?-1:0}function T_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&ed(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function yr(i,t){return Se(i.prev,i,i.next)<0?Se(i,t,i.next)>=0&&Se(i,i.prev,t)>=0:Se(i,t,i.prev)<0||Se(i,i.next,t)<0}function A_(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function nd(i,t){let e=new Fc(i.i,i.x,i.y),n=new Fc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Eu(i,t,e,n){let s=new Fc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function vr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Fc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function R_(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Pn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Su(t),bu(n,t);let a=t.length;e.forEach(Su);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,bu(n,e[c]);let o=d_.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Su(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function bu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Mi=class i extends Nc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Mr=class i extends ue{constructor(t=new Ds([new tt(0,.5),new tt(-.5,-.5),new tt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Ft(s,3)),this.setAttribute("normal",new Ft(r,3)),this.setAttribute("uv",new Ft(a,2));function l(h){let u=s.length/3,d=h.extractPoints(e),f=d.shape,g=d.holes;Pn.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let y=g[m];Pn.isClockWise(y)===!0&&(g[m]=y.reverse())}let _=Pn.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let y=g[m];f=f.concat(y)}for(let m=0,p=f.length;m<p;m++){let y=f[m];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let m=0,p=_.length;m<p;m++){let y=_[m],x=y[0]+u,M=y[1]+u,T=y[2]+u;n.push(x,M,T),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return C_(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function C_(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Us=class i extends ue{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new C,d=new C,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let y=[],x=p/n,M=0;p===0&&a===0?M=.5/e:p===n&&c===Math.PI&&(M=-.5/e);for(let T=0;T<=e;T++){let A=T/e;u.x=-t*Math.cos(s+A*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(s+A*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(A+M,1-x),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let x=h[p][y+1],M=h[p][y],T=h[p+1][y],A=h[p+1][y+1];(p!==0||a>0)&&f.push(x,M,A),(p!==n-1||c<Math.PI)&&f.push(M,T,A)}this.setIndex(f),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(_,3)),this.setAttribute("uv",new Ft(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Vo=class i extends ue{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new C,u=new C,d=new C;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let _=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,y=(s+1)*f+g;a.push(_,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new Ft(o,3)),this.setAttribute("normal",new Ft(c,3)),this.setAttribute("uv",new Ft(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ei=class i extends ue{constructor(t=new zo(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new C,c=new C,l=new tt,h=new C,u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Ft(u,3)),this.setAttribute("normal",new Ft(d,3)),this.setAttribute("uv",new Ft(f,2));function _(){for(let x=0;x<e;x++)m(x);m(r===!1?e:0),y(),p()}function m(x){h=t.getPointAt(x/e,h);let M=a.normals[x],T=a.binormals[x];for(let A=0;A<=s;A++){let b=A/s*Math.PI*2,I=Math.sin(b),v=-Math.cos(b);c.x=v*M.x+I*T.x,c.y=v*M.y+I*T.y,c.z=v*M.z+I*T.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}function p(){for(let x=1;x<=e;x++)for(let M=1;M<=s;M++){let T=(s+1)*(x-1)+(M-1),A=(s+1)*x+(M-1),b=(s+1)*x+M,I=(s+1)*(x-1)+M;g.push(T,A,I),g.push(A,b,I)}}function y(){for(let x=0;x<=e;x++)for(let M=0;M<=s;M++)l.x=x/e,l.y=M/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Dc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var xt=class extends vi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ku,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function po(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function P_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ns=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Bc=class extends Ns{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bh,endingEnd:bh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case wh:r=t,o=2*e-n;break;case Th:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case wh:a=t,c=2*n-e;break;case Th:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,y=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*_+.5*g,M=f*m-f*_;for(let T=0;T!==o;++T)r[T]=p*a[h+T]+y*a[l+T]+x*a[c+T]+M*a[u+T];return r}},zc=class extends Ns{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},Hc=class extends Ns{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},In=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=po(e,this.TimeBufferType),this.values=po(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:po(t.times,Array),values:po(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Hc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new zc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Bc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case go:e=this.InterpolantFactoryMethodDiscrete;break;case _o:e=this.InterpolantFactoryMethodLinear;break;case Ia:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return go;case this.InterpolantFactoryMethodLinear:return _o;case this.InterpolantFactoryMethodSmooth:return Ia}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&P_(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ia,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[d+g]||_!==e[f+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=_o;var Xi=class extends In{};Xi.prototype.ValueTypeName="bool";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=go;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var kc=class extends In{};kc.prototype.ValueTypeName="color";var Vc=class extends In{};Vc.prototype.ValueTypeName="number";var Gc=class extends Ns{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)pn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Er=class extends In{InterpolantFactoryMethodLinear(t){return new Gc(this.times,this.values,this.getValueSize(),t)}};Er.prototype.ValueTypeName="quaternion";Er.prototype.DefaultInterpolation=_o;Er.prototype.InterpolantFactoryMethodSmooth=void 0;var Yi=class extends In{};Yi.prototype.ValueTypeName="string";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=go;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Wc=class extends In{};Wc.prototype.ValueTypeName="vector";var wu={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Xc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},L_=new Xc,Sr=class{constructor(t){this.manager=t!==void 0?t:L_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Sr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Yc=class extends Sr{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=wu.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;let o=hr("img");function c(){h(),wu.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}};var Go=class extends Sr{constructor(t){super(t)}load(t,e,n,s){let r=new fn,a=new Yc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},br=class extends Ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Wo=class extends br{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},rc=new oe,Tu=new C,Au=new C,Xo=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dr,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Tu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Tu),Au.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Au),e.updateMatrixWorld(),rc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(rc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Ru=new oe,tr=new C,oc=new C,qc=class extends Xo{constructor(){super(new Je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new tt(4,2),this._viewportCount=6,this._viewports=[new ye(2,1,1,1),new ye(0,1,1,1),new ye(3,1,1,1),new ye(1,1,1,1),new ye(3,0,1,1),new ye(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),tr.setFromMatrixPosition(t.matrixWorld),n.position.copy(tr),oc.copy(n.position),oc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(oc),n.updateMatrixWorld(),s.makeTranslation(-tr.x,-tr.y,-tr.z),Ru.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ru)}},Yo=class extends br{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new qc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Zc=class extends Xo{constructor(){super(new Lo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qo=class extends br{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.shadow=new Zc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var rl="\\[\\]\\.:\\/",I_=new RegExp("["+rl+"]","g"),ol="[^"+rl+"]",D_="[^"+rl.replace("\\.","")+"]",U_=/((?:WC+[\/:])*)/.source.replace("WC",ol),N_=/(WCOD+)?/.source.replace("WCOD",D_),O_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ol),F_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ol),B_=new RegExp("^"+U_+N_+O_+F_+"$"),z_=["material","materials","bones","map"],$c=class{constructor(t,e,n){let s=n||xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},xe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(I_,"")}static parseTrackName(t){let e=B_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);z_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xe.Composite=$c;xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xe.prototype.GetterByBindingType=[xe.prototype._getValue_direct,xe.prototype._getValue_array,xe.prototype._getValue_arrayElement,xe.prototype._getValue_toArray];xe.prototype.SetterByBindingTypeAndVersioning=[[xe.prototype._setValue_direct,xe.prototype._setValue_direct_setNeedsUpdate,xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_array,xe.prototype._setValue_array_setNeedsUpdate,xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_arrayElement,xe.prototype._setValue_arrayElement_setNeedsUpdate,xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_fromArray,xe.prototype._setValue_fromArray_setNeedsUpdate,xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Rx=new Float32Array(1);var Zo=class{constructor(t,e,n=0,s=1/0){this.ray=new ki(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ur,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Jc(t,this,n,e),n.sort(Cu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Jc(t[s],this,n,e);return n.sort(Cu),n}};function Cu(i,t){return i.distance-t.distance}function Jc(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)Jc(s[r],t,e,!0)}}var wr=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ue(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kc);var id={type:"change"},al={type:"start"},sd={type:"end"},Qo=new ki,rd=new An,k_=Math.cos(70*Wu.DEG2RAD),ta=class extends Hn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xe.ROTATE,MIDDLE:Xe.DOLLY,RIGHT:Xe.PAN},this.touches={ONE:rn.ROTATE,TWO:rn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",ot),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ot),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(id),n.update(),r=s.NONE},this.update=function(){let L=new C,et=new pn().setFromUnitVectors(t.up,new C(0,1,0)),ft=et.clone().invert(),ct=new C,At=new pn,Jt=new C,ne=2*Math.PI;return function(dt=null){let D=n.object.position;L.copy(D).sub(n.target),L.applyQuaternion(et),o.setFromVector3(L),n.autoRotate&&r===s.NONE&&U(v(dt)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let ht=n.minAzimuthAngle,ut=n.maxAzimuthAngle;isFinite(ht)&&isFinite(ut)&&(ht<-Math.PI?ht+=ne:ht>Math.PI&&(ht-=ne),ut<-Math.PI?ut+=ne:ut>Math.PI&&(ut-=ne),ht<=ut?o.theta=Math.max(ht,Math.min(ut,o.theta)):o.theta=o.theta>(ht+ut)/2?Math.max(ht,o.theta):Math.min(ut,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&A||n.object.isOrthographicCamera?o.radius=W(o.radius):o.radius=W(o.radius*l),L.setFromSpherical(o),L.applyQuaternion(ft),D.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0));let It=!1;if(n.zoomToCursor&&A){let Rt=null;if(n.object.isPerspectiveCamera){let ie=L.length();Rt=W(ie*l);let se=ie-Rt;n.object.position.addScaledVector(M,se),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let ie=new C(T.x,T.y,0);ie.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),It=!0;let se=new C(T.x,T.y,0);se.unproject(n.object),n.object.position.sub(se).add(ie),n.object.updateMatrixWorld(),Rt=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Rt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Rt).add(n.object.position):(Qo.origin.copy(n.object.position),Qo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Qo.direction))<k_?t.lookAt(n.target):(rd.setFromNormalAndCoplanarPoint(n.object.up,n.target),Qo.intersectPlane(rd,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),It=!0);return l=1,A=!1,It||ct.distanceToSquared(n.object.position)>a||8*(1-At.dot(n.object.quaternion))>a||Jt.distanceToSquared(n.target)>0?(n.dispatchEvent(id),ct.copy(n.object.position),At.copy(n.object.quaternion),Jt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",vt),n.domElement.removeEventListener("pointerdown",kt),n.domElement.removeEventListener("pointercancel",S),n.domElement.removeEventListener("wheel",st),n.domElement.removeEventListener("pointermove",R),n.domElement.removeEventListener("pointerup",S),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ot),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,a=1e-6,o=new wr,c=new wr,l=1,h=new C,u=new tt,d=new tt,f=new tt,g=new tt,_=new tt,m=new tt,p=new tt,y=new tt,x=new tt,M=new C,T=new tt,A=!1,b=[],I={};function v(L){return L!==null?2*Math.PI/60*n.autoRotateSpeed*L:2*Math.PI/60/60*n.autoRotateSpeed}function E(L){let et=Math.abs(L)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*et)}function U(L){c.theta-=L}function O(L){c.phi-=L}let G=function(){let L=new C;return function(ft,ct){L.setFromMatrixColumn(ct,0),L.multiplyScalar(-ft),h.add(L)}}(),P=function(){let L=new C;return function(ft,ct){n.screenSpacePanning===!0?L.setFromMatrixColumn(ct,1):(L.setFromMatrixColumn(ct,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(ft),h.add(L)}}(),N=function(){let L=new C;return function(ft,ct){let At=n.domElement;if(n.object.isPerspectiveCamera){let Jt=n.object.position;L.copy(Jt).sub(n.target);let ne=L.length();ne*=Math.tan(n.object.fov/2*Math.PI/180),G(2*ft*ne/At.clientHeight,n.object.matrix),P(2*ct*ne/At.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(G(ft*(n.object.right-n.object.left)/n.object.zoom/At.clientWidth,n.object.matrix),P(ct*(n.object.top-n.object.bottom)/n.object.zoom/At.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function z(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(L,et){if(!n.zoomToCursor)return;A=!0;let ft=n.domElement.getBoundingClientRect(),ct=L-ft.left,At=et-ft.top,Jt=ft.width,ne=ft.height;T.x=ct/Jt*2-1,T.y=-(At/ne)*2+1,M.set(T.x,T.y,1).unproject(n.object).sub(n.object.position).normalize()}function W(L){return Math.max(n.minDistance,Math.min(n.maxDistance,L))}function J(L){u.set(L.clientX,L.clientY)}function rt(L){$(L.clientX,L.clientX),p.set(L.clientX,L.clientY)}function gt(L){g.set(L.clientX,L.clientY)}function Y(L){d.set(L.clientX,L.clientY),f.subVectors(d,u).multiplyScalar(n.rotateSpeed);let et=n.domElement;U(2*Math.PI*f.x/et.clientHeight),O(2*Math.PI*f.y/et.clientHeight),u.copy(d),n.update()}function Q(L){y.set(L.clientX,L.clientY),x.subVectors(y,p),x.y>0?z(E(x.y)):x.y<0&&q(E(x.y)),p.copy(y),n.update()}function mt(L){_.set(L.clientX,L.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),N(m.x,m.y),g.copy(_),n.update()}function Et(L){$(L.clientX,L.clientY),L.deltaY<0?q(E(L.deltaY)):L.deltaY>0&&z(E(L.deltaY)),n.update()}function St(L){let et=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?O(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,n.keyPanSpeed),et=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?O(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,-n.keyPanSpeed),et=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?U(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(n.keyPanSpeed,0),et=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?U(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(-n.keyPanSpeed,0),et=!0;break}et&&(L.preventDefault(),n.update())}function Nt(L){if(b.length===1)u.set(L.pageX,L.pageY);else{let et=ee(L),ft=.5*(L.pageX+et.x),ct=.5*(L.pageY+et.y);u.set(ft,ct)}}function Bt(L){if(b.length===1)g.set(L.pageX,L.pageY);else{let et=ee(L),ft=.5*(L.pageX+et.x),ct=.5*(L.pageY+et.y);g.set(ft,ct)}}function Pt(L){let et=ee(L),ft=L.pageX-et.x,ct=L.pageY-et.y,At=Math.sqrt(ft*ft+ct*ct);p.set(0,At)}function Mt(L){n.enableZoom&&Pt(L),n.enablePan&&Bt(L)}function F(L){n.enableZoom&&Pt(L),n.enableRotate&&Nt(L)}function qt(L){if(b.length==1)d.set(L.pageX,L.pageY);else{let ft=ee(L),ct=.5*(L.pageX+ft.x),At=.5*(L.pageY+ft.y);d.set(ct,At)}f.subVectors(d,u).multiplyScalar(n.rotateSpeed);let et=n.domElement;U(2*Math.PI*f.x/et.clientHeight),O(2*Math.PI*f.y/et.clientHeight),u.copy(d)}function bt(L){if(b.length===1)_.set(L.pageX,L.pageY);else{let et=ee(L),ft=.5*(L.pageX+et.x),ct=.5*(L.pageY+et.y);_.set(ft,ct)}m.subVectors(_,g).multiplyScalar(n.panSpeed),N(m.x,m.y),g.copy(_)}function zt(L){let et=ee(L),ft=L.pageX-et.x,ct=L.pageY-et.y,At=Math.sqrt(ft*ft+ct*ct);y.set(0,At),x.set(0,Math.pow(y.y/p.y,n.zoomSpeed)),z(x.y),p.copy(y);let Jt=(L.pageX+et.x)*.5,ne=(L.pageY+et.y)*.5;$(Jt,ne)}function wt(L){n.enableZoom&&zt(L),n.enablePan&&bt(L)}function fe(L){n.enableZoom&&zt(L),n.enableRotate&&qt(L)}function kt(L){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",R),n.domElement.addEventListener("pointerup",S)),Dt(L),L.pointerType==="touch"?Tt(L):H(L))}function R(L){n.enabled!==!1&&(L.pointerType==="touch"?_t(L):at(L))}function S(L){Gt(L),b.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",R),n.domElement.removeEventListener("pointerup",S)),n.dispatchEvent(sd),r=s.NONE}function H(L){let et;switch(L.button){case 0:et=n.mouseButtons.LEFT;break;case 1:et=n.mouseButtons.MIDDLE;break;case 2:et=n.mouseButtons.RIGHT;break;default:et=-1}switch(et){case Xe.DOLLY:if(n.enableZoom===!1)return;rt(L),r=s.DOLLY;break;case Xe.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;gt(L),r=s.PAN}else{if(n.enableRotate===!1)return;J(L),r=s.ROTATE}break;case Xe.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;J(L),r=s.ROTATE}else{if(n.enablePan===!1)return;gt(L),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(al)}function at(L){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;Y(L);break;case s.DOLLY:if(n.enableZoom===!1)return;Q(L);break;case s.PAN:if(n.enablePan===!1)return;mt(L);break}}function st(L){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(L.preventDefault(),n.dispatchEvent(al),Et(L),n.dispatchEvent(sd))}function ot(L){n.enabled===!1||n.enablePan===!1||St(L)}function Tt(L){switch(nt(L),b.length){case 1:switch(n.touches.ONE){case rn.ROTATE:if(n.enableRotate===!1)return;Nt(L),r=s.TOUCH_ROTATE;break;case rn.PAN:if(n.enablePan===!1)return;Bt(L),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case rn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Mt(L),r=s.TOUCH_DOLLY_PAN;break;case rn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;F(L),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(al)}function _t(L){switch(nt(L),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;qt(L),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;bt(L),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;wt(L),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;fe(L),n.update();break;default:r=s.NONE}}function vt(L){n.enabled!==!1&&L.preventDefault()}function Dt(L){b.push(L.pointerId)}function Gt(L){delete I[L.pointerId];for(let et=0;et<b.length;et++)if(b[et]==L.pointerId){b.splice(et,1);return}}function nt(L){let et=I[L.pointerId];et===void 0&&(et=new tt,I[L.pointerId]=et),et.set(L.pageX,L.pageY)}function ee(L){let et=L.pointerId===b[0]?b[1]:b[0];return I[et]}n.domElement.addEventListener("contextmenu",vt),n.domElement.addEventListener("pointerdown",kt),n.domElement.addEventListener("pointercancel",S),n.domElement.addEventListener("wheel",st,{passive:!1}),this.update()}};var ea=class extends ta{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:Xe.PAN,MIDDLE:Xe.DOLLY,RIGHT:Xe.ROTATE},this.touches={ONE:rn.PAN,TWO:rn.DOLLY_ROTATE}}};var Tr=new C;function En(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Tr.copy(t),Tr[n]=0,Tr.normalize();let l=.5*a/(a+o),h=1-Tr.angleTo(i)/c;return Math.sign(Tr[e])===1?h*l:o/(a+o)+l+l*(1-h)}var Fs=class extends Le{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new C,c=new C,l=new C(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new C,_=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(o.fromArray(h,m),c.copy(o),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),h[m+0]=l.x*Math.sign(o.x)+c.x*r,h[m+1]=l.y*Math.sign(o.y)+c.y*r,h[m+2]=l.z*Math.sign(o.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=En(g,c,"z","y",r,n),d[p+1]=1-En(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),d[p+0]=1-En(g,c,"z","y",r,n),d[p+1]=1-En(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),d[p+0]=1-En(g,c,"x","z",r,t),d[p+1]=En(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[p+0]=1-En(g,c,"x","z",r,t),d[p+1]=1-En(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[p+0]=1-En(g,c,"x","y",r,t),d[p+1]=1-En(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),d[p+0]=En(g,c,"x","y",r,t),d[p+1]=1-En(g,c,"y","x",r,e);break}}};function na(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new ue,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=od(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let _=0;_<a[h].length;++_)f.push(a[h][_][d]);let g=od(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function od(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let a=new t(r),o=0;for(let l=0;l<i.length;++l)a.set(i[l].array,o),o+=i[l].array.length;let c=new me(a,e,n);return s!==void 0&&(c.gpuType=s),c}function cl(i,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,a=0,o=Object.keys(i.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let y=0,x=o.length;y<x;y++){let M=o[y],T=i.attributes[M];c[M]=new me(new T.array.constructor(T.count*T.itemSize),T.itemSize,T.normalized);let A=i.morphAttributes[M];A&&(l[M]=new me(new A.array.constructor(A.count*A.itemSize),A.itemSize,A.normalized))}let f=t*.5,g=Math.log10(1/t),_=Math.pow(10,g),m=f*_;for(let y=0;y<r;y++){let x=n?n.getX(y):y,M="";for(let T=0,A=o.length;T<A;T++){let b=o[T],I=i.getAttribute(b),v=I.itemSize;for(let E=0;E<v;E++)M+=`${~~(I[u[E]](x)*_+m)},`}if(M in e)h.push(e[M]);else{for(let T=0,A=o.length;T<A;T++){let b=o[T],I=i.getAttribute(b),v=i.morphAttributes[b],E=I.itemSize,U=c[b],O=l[b];for(let G=0;G<E;G++){let P=u[G],N=d[G];if(U[N](a,I[P](x)),v)for(let z=0,q=v.length;z<q;z++)O[z][N](a,v[z][P](x))}}e[M]=a,h.push(a),a++}}let p=i.clone();for(let y in i.attributes){let x=c[y];if(p.setAttribute(y,new me(x.array.slice(0,a*x.itemSize),x.itemSize,x.normalized)),y in l)for(let M=0;M<l[y].length;M++){let T=l[y][M];p.morphAttributes[y][M]=new me(T.array.slice(0,a*T.itemSize),T.itemSize,T.normalized)}}return p.setIndex(h),p}var ia=class extends Ps{constructor(t=null){super();let e=new Le;e.deleteAttribute("uv");let n=new xt({side:Ne}),s=new xt,r=5;t!==null&&t._useLegacyLights===!1&&(r=900);let a=new Yo(16777215,r,28,2);a.position.set(.418,16.199,.3),this.add(a);let o=new j(e,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let c=new j(e,s);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);let l=new j(e,s);l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),this.add(l);let h=new j(e,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let u=new j(e,s);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let d=new j(e,s);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);let f=new j(e,s);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);let g=new j(e,Bs(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let _=new j(e,Bs(50));_.position.set(-16.109,18.021,-8.207),_.scale.set(.1,2.425,2.751),this.add(_);let m=new j(e,Bs(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let p=new j(e,Bs(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let y=new j(e,Bs(20));y.position.set(3.235,11.486,-12.541),y.scale.set(2.5,2,.1),this.add(y);let x=new j(e,Bs(100));x.position.set(0,20,0),x.scale.set(1,.1,1),this.add(x)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Bs(i){let t=new ni;return t.color.setScalar(i),t}var sa=class extends Ge{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new tt(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof Element&&e.element.parentNode!==null&&e.element.parentNode.removeChild(e.element)})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}},zs=new C,ad=new oe,cd=new oe,ld=new C,hd=new C,ra=class{constructor(t={}){let e=this,n,s,r,a,o={objects:new WeakMap},c=t.element!==void 0?t.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c,this.getSize=function(){return{width:n,height:s}},this.render=function(f,g){f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),ad.copy(g.matrixWorldInverse),cd.multiplyMatrices(g.projectionMatrix,ad),l(f,f,g),d(f)},this.setSize=function(f,g){n=f,s=g,r=n/2,a=s/2,c.style.width=f+"px",c.style.height=g+"px"};function l(f,g,_){if(f.isCSS2DObject){zs.setFromMatrixPosition(f.matrixWorld),zs.applyMatrix4(cd);let m=f.visible===!0&&zs.z>=-1&&zs.z<=1&&f.layers.test(_.layers)===!0;if(f.element.style.display=m===!0?"":"none",m===!0){f.onBeforeRender(e,g,_);let y=f.element;y.style.transform="translate("+-100*f.center.x+"%,"+-100*f.center.y+"%)translate("+(zs.x*r+r)+"px,"+(-zs.y*a+a)+"px)",y.parentNode!==c&&c.appendChild(y),f.onAfterRender(e,g,_)}let p={distanceToCameraSquared:h(_,f)};o.objects.set(f,p)}for(let m=0,p=f.children.length;m<p;m++)l(f.children[m],g,_)}function h(f,g){return ld.setFromMatrixPosition(f.matrixWorld),hd.setFromMatrixPosition(g.matrixWorld),ld.distanceToSquared(hd)}function u(f){let g=[];return f.traverse(function(_){_.isCSS2DObject&&g.push(_)}),g}function d(f){let g=u(f).sort(function(m,p){if(m.renderOrder!==p.renderOrder)return p.renderOrder-m.renderOrder;let y=o.objects.get(m).distanceToCameraSquared,x=o.objects.get(p).distanceToCameraSquared;return y-x}),_=g.length;for(let m=0,p=g.length;m<p;m++)g[m].element.style.zIndex=_-m}}};var cn={lot:[[1400,1686],[482,1686],[482,100],[1384.33,100],[1400,1686]],roofA:[[1311,700.47],[883.85,710],[880.64,644.31],[568.52,652.79],[563,368.37],[593.95,367.74],[595.24,367.72],[802.87,363.48],[875.05,362],[873.45,468.62],[1308.7,467.03],[1309.35,533.52],[1311,700.47]],roofB:[[568.48,652.83],[570.58,963.98],[1306.12,953.37],[1305.07,700.52],[881.28,710.05],[878.13,644.36],[568.48,652.83]],patio:[[1306.12,953.37],[1306.68,1107.32],[1023.4,1109],[1024.54,957.39],[1306.12,953.37]],awning:[[957.14,909.69],[956.54,965.41],[1027.63,963.12],[1028.14,908.68],[957.14,909.69]],awningC:[994.56,925.43,13.12],awningLow:[[1027.63,963.12],[956.54,965.41],[957.14,909.69],[956.73,947.86],[1027.58,946.02],[1027.63,963.12]],driveway:[[841.46,363.73],[805,364.58],[598.94,369.43],[597.67,369.45],[592.14,99.81],[830.97,99.81],[841.46,363.73]],porch:[[966.76,369.45],[967.14,469.74],[874.96,470.08],[876.54,368.11],[966.76,369.45]],frontRock:[[1359.75,537.27],[1307.4,534.81],[1306.75,468.49],[874.96,470.08],[876.54,363.73],[804.93,365.21],[805,364.58],[841.45,363.73],[830.97,99.81],[928.25,99.81],[930.26,104.15],[935.55,116.52],[942.96,135.93],[951.39,161.4],[959.67,191.94],[966.69,226.57],[971.31,264.31],[972.39,304.16],[972.27,307.43],[972.17,316.13],[972.5,328.64],[973.65,343.32],[976.03,358.53],[980.05,372.65],[986.09,384.03],[994.58,391.03],[1016.28,392.74],[1057.5,391.8],[1111.89,391.89],[1173.12,396.72],[1234.86,409.98],[1290.77,435.36],[1334.51,476.56],[1359.75,537.27]],trees:[[1249.39,149.05,54.05],[1201.45,196.43,44.99],[1189.9,141.33,31.8],[1245.93,203.33,34.71],[1370.34,541.88,38.64],[1336.05,575.75,32.16],[1327.8,536.36,22.75],[1367.85,580.7,24.82]],basalt:[[1394.6,1681.46],[1389.61,1106.37],[1027.36,1108.7],[1027.5,1051.5],[1027.5,957.5],[574.54,970.78],[573.18,765.33],[485.87,765.33],[485.87,1049.75],[717.86,1047.18],[949.85,1044.61],[949.85,1679.5],[1394.6,1681.46]],edgeLine:[[488,1049],[950,1044]],acPad:[[516,958],[516,866],[488,866],[488,958],[516,958]],mulch:[[949.85,988.06],[574.61,991.42],[574.54,964.07],[949.85,957.65],[949.85,988.06]],bins:[[[[516.6,798.42],[516.6,773.4],[494.91,773.4],[494.91,798.42],[516.6,798.42]],"#5671BC"],[[[516.6,828.5],[516.6,803.48],[494.91,803.48],[494.91,828.5],[516.6,828.5]],"#B07953"],[[[516.6,859.91],[516.6,834.89],[494.91,834.89],[494.91,859.91],[516.6,859.91]],"#73965D"]],wedge:[[1306.68,1107],[1386,1106.61],[1385.47,1053.07],[1306,951],[1306.68,1107]],fence:[[573.18,765.33],[485.87,765.33],[485.87,1681.46],[1394.6,1681.46],[1387.64,1052.39],[1304,945.5]],nbr:[[[[1409,318.54],[1799,292.42],[1799,765.33],[1452.79,773.4],[1409,318.54]],"#918A98"],[[[1460.3,1077.33],[1452.79,773.4],[1799,765.33],[1799,1080.37],[1460.3,1077.33]],"#BEB3B2"],[[[1452.79,99.81],[1452.79,318.54],[1799,292.42],[1799,99.81],[1452.79,99.81]],"#E5CFC2"],[[[1389.77,598.19],[1395,1053.69],[1402.5,1811.19],[1800.5,1811.19],[1800.5,1080.56],[1462.32,1077.52],[1454.82,773.59],[1411.08,318.73],[1454.82,318.73],[1454.82,100],[1386,100],[1389.77,598.19]],"#9BA773"],[[[1682.15,1586.34],[1445.86,1586.34],[1445.86,1738.26],[1682.15,1738.26],[1682.15,1586.34]],"#F1FBEA"],[[[481.51,1811],[1402.25,1811],[1399.85,1685.98],[481.51,1686.03],[481.51,1811]],"#9BA773"],[[[270.8,99.81],[481.51,99.81],[481.51,1811],[95,1811],[95,1099.19],[399.37,1077.33],[270.8,99.81]],"#9BA773"],[[[402.79,387.72],[95,387.72],[95,732.39],[402.79,732.39],[402.79,387.72]],"#918A98"],[[[402.79,1077.33],[402.79,732.39],[95,732.39],[95,1099.19],[402.79,1077.33]],"#BEB3B2"],[[[339.57,99.81],[95,99.81],[95,387.72],[339.57,387.72],[339.57,99.81]],"#E5CFC2"]],chips:[[1367,1679],[1027,1678.9],[1027.58,1108.56],[1367,1106],[1367,1392.5],[1367,1679]],wallBase:[[1025,1108],[1036,1108],[1036,1679],[1025,1679]],pavers:[[980.68,1331.36,1004.84,1354.55],[980.68,1365.64,1004.84,1388.83],[980.68,1297.11,1004.84,1320.3],[980.68,1262.83,1004.84,1286.02],[980.68,1228.55,1004.84,1251.74],[980.68,1194.27,1004.84,1217.46],[980.68,1160.02,1004.84,1183.2],[980.68,1125.74,1004.84,1148.92],[980.68,1605.57,1004.84,1628.76],[980.68,1639.83,1004.84,1663.02],[980.68,1571.29,1004.84,1594.48],[980.68,1537.02,1004.84,1560.2],[980.68,1502.74,1004.84,1525.93],[980.68,1468.48,1004.84,1491.67],[980.68,1434.2,1004.84,1457.39],[980.68,1399.94,1004.84,1423.13],[980.68,1091.46,1004.84,1114.65],[980.68,1057.18,1004.84,1080.37],[980.68,1022.92,1004.84,1046.11],[980.68,988.64,1004.84,1011.83],[522.28,938.02,543.97,961.83],[522.28,972.3,543.97,994.9],[522.26,824.4,543.95,848.22],[522.28,900.14,543.97,923.95],[522.28,862.26,543.97,886.08],[522.26,786.52,543.95,810.34],[548.38,938.02,570.07,961.83],[548.38,824.4,570.07,848.22],[548.4,900.14,570.09,923.95],[548.4,862.28,570.09,886.1],[548.38,786.52,570.07,810.34],[557.28,1008.14,580.58,1032.36],[522.26,1008.39,545.56,1032.6],[592.28,1007.87,615.58,1032.09],[627.3,1007.63,650.6,1031.84],[662.32,1007.36,685.62,1031.6],[697.32,1007.11,720.62,1031.33],[732.34,1006.87,755.64,1031.08],[767.34,1006.6,790.67,1030.84],[802.36,1006.35,825.66,1030.57],[837.38,1006.11,860.69,1030.32],[872.38,1005.84,895.69,1030.06],[907.4,1005.59,930.71,1029.81],[1063,1336.44,1086.97,1360.89],[1096.84,1336.44,1120.8,1360.89],[1096.75,1408.55,1120.71,1433],[1063,1408.55,1086.97,1433],[1063,1372.49,1086.97,1396.95],[1097.03,1372.49,1121,1396.95]],walls:[[950,958,961,966,0],[949.85,966.6,960.83,980.71,0],[949.85,981.4,960.83,995.51,0],[949.85,996.22,960.83,1010.33,0],[949.85,1011.03,960.83,1025.13,0],[949.85,1025.83,960.83,1039.94,0],[949.85,1040.65,960.83,1054.76,0],[949.85,1055.46,960.83,1069.57,0],[949.85,1070.28,960.83,1084.39,0],[949.85,1529.46,960.83,1543.57,0],[949.85,1544.26,960.83,1558.37,0],[949.85,1559.09,960.83,1573.2,0],[949.85,1573.89,960.83,1588,0],[949.85,1588.71,960.83,1602.82,0],[949.85,1603.52,960.83,1617.63,0],[949.85,1618.32,960.83,1632.43,0],[949.85,1633.14,960.83,1647.25,0],[949.85,1647.95,960.83,1662.05,0],[950,1663,961,1679,0],[949.85,1085.08,960.83,1099.19,0],[949.85,1099.91,960.83,1114.02,0],[949.85,1114.71,960.83,1128.82,0],[949.85,1129.51,960.83,1143.62,0],[949.85,1144.34,960.83,1158.45,0],[949.85,1159.14,960.83,1173.25,0],[949.85,1173.97,960.83,1188.08,0],[949.85,1188.77,960.83,1202.88,0],[949.85,1203.6,960.83,1217.71,0],[949.85,1218.4,960.83,1232.51,0],[949.85,1233.2,960.83,1247.31,0],[949.85,1248.03,960.83,1262.14,0],[949.85,1262.83,960.83,1276.94,0],[949.85,1277.65,960.83,1291.76,0],[949.85,1292.46,960.83,1306.57,0],[949.85,1307.26,960.83,1321.37,0],[949.85,1322.08,960.83,1336.19,0],[949.85,1336.89,960.83,1351,0],[949.85,1351.71,960.83,1365.82,0],[949.85,1366.52,960.83,1380.63,0],[949.85,1381.34,960.83,1395.45,0],[949.85,1396.14,960.83,1410.25,0],[949.85,1410.95,960.83,1425.06,0],[949.85,1425.77,960.83,1439.88,0],[949.85,1440.57,960.83,1454.68,0],[949.85,1455.4,960.83,1469.51,0],[949.85,1470.2,960.83,1484.31,0],[949.85,1485.03,960.83,1499.14,0],[949.85,1499.83,960.83,1513.94,0],[949.85,1514.63,960.83,1528.74,0],[1025,1108,1036,1123.13,0],[1025,1124.13,1036,1139.26,0],[1025,1140.26,1036,1155.4,0],[1025,1156.4,1036,1171.53,0],[1025,1172.53,1036,1187.66,0],[1025,1188.66,1035.98,1203.53,0],[1025,1204.53,1035.98,1219.39,0],[1025,1220.39,1035.98,1235.26,0],[1025,1236.26,1035.98,1251.12,0],[1025,1252.12,1035.98,1266.99,0],[1025,1267.99,1035.98,1282.85,0],[1025,1283.85,1035.98,1298.72,0],[1025,1299.72,1035.98,1314.58,0],[1025,1315.58,1035.98,1330.45,0],[1025,1331.45,1035.98,1346.31,0],[1025,1347.31,1035.98,1362.18,0],[1025,1363.18,1035.98,1378.04,0],[1025,1379.04,1035.98,1393.91,0],[1025,1394.91,1035.98,1409.77,0],[1025,1410.77,1035.98,1425.64,0],[1025,1426.64,1035.98,1441.5,0],[1025,1442.5,1035.98,1457.37,0],[1025,1458.37,1035.98,1473.23,0],[1025,1474.23,1035.98,1489.1,0],[1025,1490.1,1035.98,1504.96,0],[1025,1505.96,1035.98,1520.83,0],[1025,1521.83,1035.98,1536.7,0],[1025,1537.7,1035.98,1552.56,0],[1025,1553.56,1035.98,1568.43,0],[1025,1569.43,1035.98,1584.29,0],[1025,1585.29,1035.98,1600.16,0],[1025,1601.16,1035.98,1616.02,0],[1025,1617.02,1035.98,1631.89,0],[1025,1632.89,1035.98,1647.75,0],[1025,1648.75,1035.98,1663.62,0],[1025,1664.62,1036,1678.62,0],[1032,1454,1367,1465,1],[1359.55,1454,1374.42,1464.98,1],[1343.69,1454,1358.55,1464.98,1],[1327.82,1454,1342.69,1464.98,1],[1311.96,1454,1326.82,1464.98,1],[1296.09,1454,1310.96,1464.98,1],[1280.23,1454,1295.09,1464.98,1],[1264.36,1454,1279.23,1464.98,1],[1248.5,1454,1263.36,1464.98,1],[1232.63,1454,1247.5,1464.98,1],[1216.77,1454,1231.63,1464.98,1],[1200.9,1454,1215.77,1464.98,1],[1185.04,1454,1199.9,1464.98,1],[1169.17,1454,1184.04,1464.98,1],[1153.3,1454,1168.17,1464.98,1],[1137.44,1454,1152.3,1464.98,1],[1121.57,1454,1136.44,1464.98,1],[1105.71,1454,1120.57,1464.98,1],[1089.84,1454,1104.71,1464.98,1],[1073.98,1454,1088.84,1464.98,1],[1058.11,1454,1072.98,1464.98,1],[1042.25,1454,1057.11,1464.98,1],[1026.38,1454,1041.25,1464.98,1]],pad:[[1344,1319],[1305.73,1319],[1300.06,1306.35],[1292.61,1294.82],[1283.56,1284.58],[1273.08,1275.8],[1261.35,1268.67],[1248.55,1263.35],[1234.85,1260.04],[1220.43,1258.89],[1206.01,1260.04],[1192.31,1263.35],[1179.51,1268.67],[1167.78,1275.8],[1157.3,1284.58],[1148.25,1294.82],[1140.8,1306.35],[1135.13,1319],[1057,1319],[1057,1151],[1344,1151],[1344,1319]],ring:[1219.87,1349.94,86],hose:[[1276.74,1368.21],[1318.31,1366.79],[1317.44,1341.4],[1291.5,1342.44]],pumpOuter:[1318.05,1361.86,13.49],pumpInner:[1318.05,1361.86,8.5],pool:[1218.87,1349.99,72.5],furniture:{"furniture-1":{frame:[[1207.14,1166.31],[1182.15,1167.04],[1184.01,1246],[1209,1245.27],[1207.14,1166.31]],back:[[1207.14,1166.21],[1182.15,1166.94],[1182.93,1200.13],[1207.92,1199.41],[1207.14,1166.21]]},"furniture-2":{frame:[[1266,1168.19],[1241,1168.19],[1241,1247],[1266,1247],[1266,1168.19]],back:[[1266,1168.11],[1241,1168.11],[1241,1195.82],[1266,1195.82],[1266,1168.11]]},"furniture-3":{frame:[[1219,1177.69],[1219,1184.56],[1219.08,1185.37],[1219.31,1186.12],[1219.68,1186.8],[1220.17,1187.39],[1220.76,1187.88],[1221.44,1188.25],[1222.19,1188.48],[1223,1188.56],[1231,1188.56],[1231.81,1188.48],[1232.56,1188.25],[1233.24,1187.88],[1233.83,1187.39],[1234.32,1186.8],[1234.69,1186.12],[1234.92,1185.37],[1235,1184.56],[1235,1177.69],[1234.92,1176.88],[1234.69,1176.13],[1234.32,1175.45],[1233.83,1174.86],[1233.24,1174.37],[1232.56,1174],[1231.81,1173.77],[1231,1173.69],[1223,1173.69],[1222.19,1173.77],[1221.44,1174],[1220.76,1174.37],[1220.17,1174.86],[1219.68,1175.45],[1219.31,1176.13],[1219.08,1176.88],[1219,1177.69]]},"furniture-4":{frame:[[1321,1168.19],[1296,1168.19],[1296,1247],[1321,1247],[1321,1168.19]],back:[[1321,1168.11],[1296,1168.11],[1296,1195.82],[1321,1195.82],[1321,1168.11]]},"furniture-5":{frame:[[1274,1177.69],[1274,1184.56],[1274.08,1185.37],[1274.31,1186.12],[1274.68,1186.8],[1275.17,1187.39],[1275.76,1187.88],[1276.44,1188.25],[1277.19,1188.48],[1278,1188.56],[1286,1188.56],[1286.81,1188.48],[1287.56,1188.25],[1288.24,1187.88],[1288.83,1187.39],[1289.32,1186.8],[1289.69,1186.12],[1289.92,1185.37],[1290,1184.56],[1290,1177.69],[1289.92,1176.88],[1289.69,1176.13],[1289.32,1175.45],[1288.83,1174.86],[1288.24,1174.37],[1287.56,1174],[1286.81,1173.77],[1286,1173.69],[1278,1173.69],[1277.19,1173.77],[1276.44,1174],[1275.76,1174.37],[1275.17,1174.86],[1274.68,1175.45],[1274.31,1176.13],[1274.08,1176.88],[1274,1177.69]]},"furniture-6":{frame:[[1080.34,1267.08],[1082.71,1295.59],[1123.62,1292.19],[1121.25,1263.68],[1080.34,1267.08]],back:[[1080.29,1267.09],[1082.66,1295.59],[1099.85,1294.17],[1097.48,1265.66],[1080.29,1267.09]]},"furniture-7":{frame:[[1098.55,1198.84],[1086.52,1224.8],[1123.77,1242.05],[1135.8,1216.1],[1098.55,1198.84]],back:[[1098.5,1198.82],[1086.48,1224.78],[1102.13,1232.03],[1114.16,1206.07],[1098.5,1198.82]]},"furniture-8":{frame:[[1086.19,1244.65],[1084.83,1252.53],[1084.77,1253.34],[1084.87,1254.12],[1085.12,1254.85],[1085.5,1255.52],[1086,1256.1],[1086.6,1256.58],[1087.3,1256.93],[1088.08,1257.15],[1095.96,1258.52],[1096.77,1258.58],[1097.55,1258.48],[1098.28,1258.23],[1098.95,1257.85],[1099.53,1257.35],[1100.01,1256.75],[1100.37,1256.05],[1100.59,1255.27],[1101.96,1247.38],[1102.02,1246.57],[1101.92,1245.8],[1101.67,1245.06],[1101.29,1244.4],[1100.79,1243.82],[1100.18,1243.34],[1099.48,1242.98],[1098.7,1242.76],[1090.82,1241.39],[1090.01,1241.33],[1089.23,1241.43],[1088.5,1241.68],[1087.83,1242.06],[1087.25,1242.56],[1086.77,1243.17],[1086.41,1243.87],[1086.19,1244.65]]}},turf:[[1055,1649],[1055,1492],[1352,1492],[1352,1649]],shed:[[1287,1505.38],[1287,1602.87],[1339,1602.87],[1339,1505.38],[1287,1505.38]],planters:[[[1289.08,1410.01,10.78],[1289.08,1410.01,9.47],[1289.08,1410.01,6.86]],[[1321.07,1321.01,10.78],[1321.08,1321.01,9.47],[1321.08,1321.01,6.86]],[[1085.93,1181.87,10.78],[1085.93,1181.87,9.47],[1085.93,1181.87,6.86]],[[1103.93,1171.87,10.78],[1103.93,1171.87,9.47],[1103.93,1171.87,6.86]],[[1301.08,1387.01,10.78],[1301.08,1387.01,9.47],[1301.08,1387.01,6.86]],[[1316.15,1408.08,16.61],[1316.15,1408.08,14.6],[1316.15,1408.08,10.57]]],boulders:[[[1278.32,1429.2,7.45,"#D4C8BE"],[1287.22,1424.16,2.77,"#CAC6C3"],[1276.32,1421.69,2.77,"#CAC6C3"],[1273.37,1441.72,2.77,"#CAC6C3"],[1276.85,1437.96,2.77,"#A38B7A"],[1267.74,1430.09,2.77,"#CAC6C3"],[1269.47,1420.91,6.55,"#A38B7A"],[1261.74,1430.68,4.93,"#AAA29B"],[1276.7,1414.02,4.93,"#AAA29B"],[1282.49,1421.05,3.46,"#AAA29B"],[1267.89,1437.82,3.28,"#CAC6C3"]],[[1158.32,1429.2,7.45,"#D4C8BE"],[1167.22,1424.16,2.77,"#CAC6C3"],[1156.32,1421.69,2.77,"#CAC6C3"],[1153.37,1441.72,2.77,"#CAC6C3"],[1156.85,1437.96,2.77,"#A38B7A"],[1147.74,1430.09,2.77,"#CAC6C3"],[1149.47,1420.91,6.55,"#A38B7A"],[1141.74,1430.68,4.93,"#AAA29B"],[1156.7,1414.02,4.93,"#AAA29B"],[1162.49,1421.05,3.46,"#AAA29B"],[1147.89,1437.82,3.28,"#CAC6C3"]]],umbrella:[[[1164.96,1472.43],[1257.43,1351.47],[1136.47,1259.01],[1044.01,1379.96],[1164.96,1472.43]],[[1157.63,1417.49],[1202.49,1358.81],[1143.81,1313.95],[1098.95,1372.63],[1157.63,1417.49]],[[1106.18,1445.65],[1127.87,1417.28],[1099.5,1395.59],[1077.81,1423.96],[1106.18,1445.65]]],epanel:[[[1326,1497],[1341,1497],[1341,1500],[1326,1500]],[[1329.75,1500],[1337.25,1500],[1337.25,1506],[1329.75,1506]]]};{let i=(t,e,n)=>t.forEach(s=>{s[0]+=e,s[1]+=n});cn.umbrella.forEach(t=>i(t,62,13)),cn.boulders[1].forEach((t,e)=>{let n=[[1185.33,1433.6,10.06],[1178.35,1422.23,3.74],[1187.04,1446.44,3.74],[1139.51,1429.14,3.74],[1148.29,1413.93,3.74],[1164.8,1407.92,3.74],[1146.03,1440.43,8.84],[1148.35,1424.1,6.66],[1158.3,1415.75,6.66],[1178.67,1445.24,4.67],[1170.95,1416.69,4.43]][e];t[0]=n[0],t[1]=n[1],t[2]=n[2]}),i(cn.boulders[0],-14,14)}var Lt=14.35,Ur=1036,Nr=1108,Qt=1/12,$i=4/12,K=i=>(i-Ur)/Lt,it=i=>(i-Nr)/Lt,an=(i,t,e)=>Math.min(e,Math.max(t,i)),We=Math.PI*2;function V_(i,t,e){let n=Math.imul(i|0,374761393)^Math.imul(t|0,668265263)^Math.imul(e|0,2147483647);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function wi(i,t,e){let n=Math.floor(i),s=Math.floor(t),r=Math.floor(e),a=i-n,o=t-s,c=e-r,l=g=>g*g*(3-2*g),h=l(a),u=l(o),d=l(c),f=0;for(let g=0;g<2;g++)for(let _=0;_<2;_++)for(let m=0;m<2;m++)f+=V_(n+g,s+_,r+m)*(g?h:1-h)*(_?u:1-u)*(m?d:1-d);return f}function pa(i,t,e,n,s=1){let r=i.attributes.position;for(let a=0;a<r.count;a++){let o=r.getX(a),c=r.getY(a),l=r.getZ(a),h=wi(o*e+n,c*e+n*1.7,l*e-n*.3)*.65+wi(o*e*2.3+n,c*e*2.3,l*e*2.3)*.35,u=1-t/2+t*h;r.setXYZ(a,o*u,c*u*s,l*u)}return i.computeVertexNormals(),i}function _e(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var lt={mode:"proposed",pad:-1*Qt,step1:7*Qt,step2:7*Qt,sink:12*Qt,pitch:1.5,walkFall:18*Qt,lawnFall:12*Qt,eastFall:7*Qt,time:16.5,month:10,north:0,view:"overview",cdepth:18*Qt,under:!1,layers:{pool:!0,furniture:!0,umbrella:!0,planters:!0,shed:!0,electrical:!0,context:!0}},Ed="backyard_3d_v3",ud={cdepth:18*Qt,pad:-1*Qt,step1:7*Qt,step2:7*Qt,sink:12*Qt,pitch:1.5,walkFall:18*Qt,eastFall:7*Qt};try{let i=JSON.parse(localStorage.getItem(Ed)||"null");if(i){for(let t of["drag","cdepth","pad","step1","step2","sink","walkFall","north"])i[t]!==void 0&&(lt[t]=i[t]);i.layers&&Object.assign(lt.layers,i.layers)}}catch{}function Or(){try{localStorage.setItem(Ed,JSON.stringify(lt))}catch{}}var oi=1459.5,Ye=1324.5,Be=1367,Pr=960.83,ln=Pr+56*Qt*Lt,gn=[ln,ln+11],ve=[1219.87,1349.94],ca=83,la=i=>an((i-1108)/573,0,1),G_=i=>an((i-1036)/354,0,1),Lr=i=>-.35-lt.walkFall*la(i),ma=(i,t)=>-.25-lt.lawnFall*la(t),je=(i,t)=>-.35-lt.walkFall*la(t)-lt.eastFall*G_(i)*(.3+.7*la(t)),Il=()=>lt.pad,ga=()=>lt.pad-lt.step1,W_=()=>lt.pad-lt.step1-lt.step2,Sd=i=>W_()-lt.pitch/100*Math.max(0,i-oi)/Lt,X_=(i,t)=>Math.hypot(i-ve[0],t-ve[1])<ca;function Gs(i,t){return i>=Be?je(i,t):t>=oi?Sd(t):t>=Ye||X_(i,t)?ga():Il()}var _a=i=>i<950?ma(i,1681):i<gn[1]?Lr(1681):je(i,1681);function mn(i,t){if(t>=1108){if(lt.mode==="proposed"&&i>=gn[1])return Gs(i,t);if(lt.mode==="existing"&&i>=ln)return je(i,t)}return i>=Pr&&i<ln&&t>=958?Lr(t):i<950&&t>=1049?ma(i,t):-.25}var xa=Math.sqrt(ca*ca-(Ye-ve[1])**2),gl=ve[0]-xa,_l=ve[0]+xa,xl=Math.atan2(Ye-ve[1],-xa),yl=Math.atan2(Ye-ve[1],xa),vl=(i,t,e=ca,n=24)=>Array.from({length:n-1},(s,r)=>{let a=i+(t-i)*(r+1)/n;return[ve[0]+Math.cos(a)*e,ve[1]+Math.sin(a)*e]}),Ir=document.getElementById("wrap"),Ml=Math.min(screen.width,screen.height)<700,De=new fr({antialias:!0,powerPreference:"high-performance"});De.setPixelRatio(Math.min(devicePixelRatio,Ml?1.75:2));De.shadowMap.enabled=!0;De.shadowMap.type=jc;De.shadowMap.autoUpdate=!1;De.toneMapping=Qc;De.toneMappingExposure=1;De.outputColorSpace=Re;Ir.prepend(De.domElement);var le=new Ps,we=new Je(55,1,.08,4e3),ce=new ea(we,De.domElement);ce.enableDamping=!0;ce.dampingFactor=.14;ce.zoomSpeed=3.2;ce.zoomToCursor=!0;ce.rotateSpeed=1.1;ce.panSpeed=1;ce.maxPolarAngle=Math.PI*.495;ce.minDistance=.3;ce.maxDistance=320;ce.screenSpacePanning=!1;var Y_=new Cs(De);le.environment=Y_.fromScene(new ia,.04).texture;var bd=De.capabilities.getMaxAnisotropy(),q_=()=>le.traverse(i=>{if(i.isMesh)for(let t of[].concat(i.material))t.envMapIntensity===1&&(t.envMapIntensity=.35)});function ze(i,t,e,n,s=!0){let r=document.createElement("canvas");r.width=i,r.height=t;let a=r.getContext("2d");e(a,i,t);let o=new No(r);return o.wrapS=o.wrapT=ar,n&&o.repeat.set(n[0],n[1]),o.anisotropy=bd,s&&(o.colorSpace=Re),o}function Fn(i,t,e,n,s,r,a,o){for(let c=0;c<n;c++){i.fillStyle=s[Math.floor(o()*s.length)],i.globalAlpha=.25+o()*.6;let l=r+o()*(a-r);i.beginPath(),i.arc(o()*t,o()*e,l,0,We),i.fill()}i.globalAlpha=1}function Xs(i,t,e,n,s,r,a=60){i.fillStyle=n,i.fillRect(0,0,t,e);for(let o=0;o<a;o++){let c=t*(.05+r()*.2),l=r()*t,h=r()*e,u=i.createRadialGradient(l,h,0,l,h,c),d=(r()-.5)*s;u.addColorStop(0,d>0?`rgba(255,255,255,${d})`:`rgba(0,0,0,${-d})`),u.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=u;for(let f of[-t,0,t])for(let g of[-e,0,e])i.save(),i.translate(f,g),i.fillRect(l-c,h-c,2*c,2*c),i.restore()}}var Yt={};Yt.block=ze(256,256,(i,t,e)=>{let n=_e(11);Xs(i,t,e,"#d9ccb4",.16,n,40),Fn(i,t,e,1600,["#a8987c","#efe6d4","#bfae90","#8f7f66"],.4,1.6,n);for(let s=0;s<40;s++)i.fillStyle="rgba(90,75,55,0.35)",i.beginPath(),i.ellipse(n()*t,n()*e,1+n()*3,1+n()*2,n()*3,0,We),i.fill()},null);Yt.stone=ze(256,256,(i,t,e)=>{let n=_e(5);Xs(i,t,e,"#d8c6b0",.1,n,30),Fn(i,t,e,2600,["#b9a68e","#efe3d2","#a08c76","#cdb79e"],.4,1.3,n)},null);Yt.concrete=ze(512,512,(i,t,e)=>{let n=_e(21);Xs(i,t,e,"#c9ae95",.16,n,70),Fn(i,t,e,5e3,["#a88e76","#dcc6b0","#b39880"],.3,1.1,n);for(let s=0;s<9;s++)i.strokeStyle="rgba(80,60,45,0.18)",i.lineWidth=1+n()*2,i.beginPath(),i.ellipse(n()*t,n()*e,20+n()*80,10+n()*50,n()*3,0,We),i.stroke();i.globalAlpha=.05;for(let s=0;s<e;s+=2)i.fillStyle=n()<.5?"#000":"#fff",i.fillRect(0,s,t,1);i.globalAlpha=1},[1,1]);Yt.siding=ze(256,256,(i,t,e)=>{let n=_e(3);i.fillStyle="#a9b7a4",i.fillRect(0,0,t,e);let s=7;for(let r=0;r<s;r++){let a=r*e/s,o=i.createLinearGradient(0,a,0,a+e/s);o.addColorStop(0,"rgba(255,255,255,0.10)"),o.addColorStop(.85,"rgba(0,0,0,0.02)"),o.addColorStop(.92,"rgba(0,0,0,0.22)"),o.addColorStop(1,"rgba(0,0,0,0.3)"),i.fillStyle=o,i.fillRect(0,a,t,e/s)}Fn(i,t,e,400,["#93a28f","#bccab8"],.3,1,n)},null);Yt.shingle=ze(256,256,(i,t,e)=>{let n=_e(9);i.fillStyle="#5d5f61",i.fillRect(0,0,t,e);let s=8,r=t/6;for(let a=0;a<s;a++){let o=a*e/s,c=a%2*r/2;for(let l=-1;l<7;l++){let h=Math.floor(80+n()*30);i.fillStyle=`rgb(${h},${h+2},${h+5})`,i.fillRect(l*r+c+1,o+1,r-2,e/s-2)}i.fillStyle="rgba(0,0,0,0.45)",i.fillRect(0,o+e/s-3,t,3)}Fn(i,t,e,3e3,["#3c3e41","#8a8c8e","#6e7174"],.3,.9,n)},null);Yt.board=ze(512,512,(i,t,e)=>{let n=_e(17),s=9;for(let r=0;r<s;r++){let a=n(),o=[118+a*40,104+a*34,88+a*28];i.fillStyle=`rgb(${o.map(Math.round)})`,i.fillRect(r*t/s,0,t/s,e);for(let c=0;c<26;c++){i.strokeStyle=`rgba(${n()<.5?"40,30,22":"210,200,185"},${.08+n()*.12})`,i.lineWidth=.6+n()*1.4;let l=r*t/s+n()*t/s;i.beginPath(),i.moveTo(l,0),i.bezierCurveTo(l+n()*6-3,e*.3,l+n()*6-3,e*.6,l+n()*4-2,e),i.stroke()}i.fillStyle="rgba(20,14,10,0.55)",i.fillRect(r*t/s,0,2,e),n()<.7&&(i.fillStyle="rgba(40,28,20,0.5)",i.beginPath(),i.ellipse(r*t/s+n()*t/s,n()*e,3+n()*4,5+n()*6,0,0,We),i.fill())}},null);Yt.stoneWall=ze(1024,1024,(i,t,e)=>{let n=_e(83);i.fillStyle="#e6dfd2",i.fillRect(0,0,t,e);let s=["#eadfca","#f0e6d4","#e3d2b6","#ead8bc","#dcc7a6","#f2eadb","#e2cba9","#d9bd97","#ecd9bf","#e8d4b8"],r=0;for(;r<e;){let a=Math.min(e-r,58+Math.floor(n()*4)*30),o=-n()*120;for(;o<t;){let c=110+n()*260,l=s[Math.floor(n()*s.length)],h=4+n()*2,u=o+h,d=r+h,f=c-h*2,g=a-h*2,_=n()<.3&&g>90,m=_?[[d,g*.48],[d+g*.52,g*.48]]:[[d,g]];for(let[p,y]of m){i.fillStyle=_?s[Math.floor(n()*s.length)]:l,i.beginPath(),i.moveTo(u+n()*6,p+n()*4),i.lineTo(u+f-n()*6,p+n()*4),i.lineTo(u+f-n()*5,p+y-n()*5),i.lineTo(u+n()*5,p+y-n()*5),i.closePath(),i.fill();let x=i.createLinearGradient(u,p,u+f*.3,p+y);x.addColorStop(0,"rgba(255,255,255,0.18)"),x.addColorStop(1,"rgba(90,70,45,0.14)"),i.fillStyle=x,i.fill();for(let M=0;M<f*y/70;M++)i.fillStyle=`rgba(${n()<.5?"120,98,70":"255,250,240"},${.1+n()*.16})`,i.fillRect(u+n()*f,p+n()*y,1+n()*2.5,1+n()*2.5);n()<.35&&(i.strokeStyle="rgba(120,95,65,0.18)",i.lineWidth=1,i.beginPath(),i.moveTo(u+n()*f,p+n()*y),i.lineTo(u+n()*f,p+n()*y),i.stroke())}o+=c}r+=a}},null);Yt.garage=ze(512,224,(i,t,e)=>{i.fillStyle="#ecebe6",i.fillRect(0,0,t,e);let n=4,s=8;for(let r=0;r<n;r++){i.fillStyle="rgba(0,0,0,0.22)",i.fillRect(0,r*e/n-1,t,2);for(let a=0;a<s;a++){let o=a*t/s+7,c=r*e/n+8,l=t/s-14,h=e/n-16;i.fillStyle="#e2e1db",i.fillRect(o,c,l,h),i.strokeStyle="rgba(255,255,255,0.9)",i.lineWidth=2,i.beginPath(),i.moveTo(o,c+h),i.lineTo(o,c),i.lineTo(o+l,c),i.stroke(),i.strokeStyle="rgba(0,0,0,0.18)",i.beginPath(),i.moveTo(o+l,c),i.lineTo(o+l,c+h),i.lineTo(o,c+h),i.stroke()}}},[1,1]);Yt.chips=ze(256,256,(i,t,e)=>{let n=_e(91);i.fillStyle="#d9d4c9",i.fillRect(0,0,t,e);for(let s=0;s<2600;s++){let r=Math.round(200+n()*55);i.fillStyle=`rgb(${r},${r-4-n()*8},${r-12-n()*10})`;let a=1.5+n()*4;i.save(),i.translate(n()*t,n()*e),i.rotate(n()*3),i.fillRect(-a,-a*.7,a*2,a*1.4),i.restore()}Fn(i,t,e,900,["#8d8476","#a59c8d"],.4,1.4,n)},null);Yt.asphalt=ze(256,256,(i,t,e)=>{let n=_e(97);Xs(i,t,e,"#6b6c6c",.12,n,40),Fn(i,t,e,6e3,["#4e4f50","#858684","#5c5d5e"],.3,1.1,n)},null);Yt.mesh=ze(64,64,(i,t,e)=>{i.clearRect(0,0,t,e),i.fillStyle="#2c241c",i.fillRect(0,0,t,3),i.fillRect(0,0,3,e)},null);Yt.corr=ze(64,8,(i,t,e)=>{for(let n=0;n<t;n++){let s=Math.sin(n/t*We*2),r=Math.round(128+s*80);i.fillStyle=`rgb(${r},${r},${r})`,i.fillRect(n,0,1,e)}},null,!1);var wd=[.17,.235,.3,.365,.43,.6,.665,.9];Yt.tank=ze(512,512,(i,t,e)=>{let n=_e(61);i.fillStyle="#c9cfd2",i.fillRect(0,0,t,e);for(let r=0;r<900;r++){let a=n()*t,o=n()*e,c=6+n()*26,l=Math.round(178+n()*62);i.fillStyle=`rgba(${l},${l+3},${l+6},${.35+n()*.45})`,i.beginPath();let h=5+Math.floor(n()*3);for(let u=0;u<h;u++){let d=u/h*We+n()*.6,f=c*(.6+n()*.5);i.lineTo(a+Math.cos(d)*f,o+Math.sin(d)*f*.8)}i.closePath(),i.fill()}Fn(i,t,e,2500,["#9ea6ab","#e9edef","#b4bcc0"],.4,1.2,n);for(let r of wd){let a=r*e,o=i.createLinearGradient(0,a-9,0,a+9);o.addColorStop(0,"rgba(255,255,255,0)"),o.addColorStop(.3,"rgba(255,255,255,0.55)"),o.addColorStop(.55,"rgba(90,98,104,0.45)"),o.addColorStop(1,"rgba(90,98,104,0)"),i.fillStyle=o,i.fillRect(0,a-9,t,18)}let s=i.createLinearGradient(0,0,0,e);s.addColorStop(0,"rgba(0,0,0,0.12)"),s.addColorStop(.12,"rgba(0,0,0,0)"),s.addColorStop(1,"rgba(0,0,0,0.06)"),i.fillStyle=s,i.fillRect(0,0,t,e)},null);Yt.tankBump=ze(16,512,(i,t,e)=>{i.fillStyle="#808080",i.fillRect(0,0,t,e);for(let n of wd){let s=n*e,r=i.createLinearGradient(0,s-8,0,s+8);r.addColorStop(0,"#808080"),r.addColorStop(.5,"#f0f0f0"),r.addColorStop(1,"#808080"),i.fillStyle=r,i.fillRect(0,s-8,t,16)}},null,!1);Yt.caustic=ze(512,512,(i,t,e)=>{let n=_e(71),s=Array.from({length:46},()=>[n()*t,n()*e]),r=i.createImageData(t,e),a=r.data;for(let o=0;o<e;o++)for(let c=0;c<t;c++){let l=1e9,h=1e9;for(let[_,m]of s){let p=Math.abs(c-_),y=Math.abs(o-m);p=Math.min(p,t-p),y=Math.min(y,e-y);let x=p*p+y*y;x<l?(h=l,l=x):x<h&&(h=x)}let u=Math.sqrt(h)-Math.sqrt(l),d=Math.pow(Math.max(0,1-u/3.2),2)*.55,f=wi(c/40,o/40,3)*14,g=(o*t+c)*4;a[g]=128+f+95*d,a[g+1]=146+f+90*d,a[g+2]=146+f+82*d,a[g+3]=255}i.putImageData(r,0,0)},[3,3]);Yt.dirt=ze(1024,1536,(i,t,e)=>{let n=_e(31),s=i.createImageData(t,e),r=s.data;for(let a=0;a<e;a++)for(let o=0;o<t;o++){let c=(a*t+o)*4,l=wi(o/90,a/90,1)*.6+wi(o/22,a/22,5)*.4,h=wi(o/7,a/7,9),u=176+l*34-h*14,d=150+l*30-h*14,f=124+l*26-h*12,g=a/e,_=wi(o/60,a/60,21)*.7+wi(o/14,a/14,33)*.3,m=.72-g*.42;if(_>m){let y=an((_-m)*6,0,1)*(.55+n()*.45);u=u*(1-y)+(78+n()*40)*y,d=d*(1-y)+(104+n()*44)*y,f=f*(1-y)+(52+n()*20)*y}let p=n();p<.05?(u*=.78,d*=.76,f*=.74):p>.975&&(u=u*.5+118,d=d*.5+112,f=f*.5+104),r[c]=u,r[c+1]=d,r[c+2]=f,r[c+3]=255}i.putImageData(s,0,0);for(let a=0;a<70;a++){i.fillStyle=`rgba(${215+n()*25},${205+n()*25},${185+n()*20},0.9)`;let o=2+n()*5;i.save(),i.translate(n()*t,n()*e),i.rotate(n()*3),i.fillRect(-o,-o*.6,o*2,o*1.2),i.restore()}},null);Yt.grassFar=ze(256,256,(i,t,e)=>{let n=_e(41);Xs(i,t,e,"#5f7a3e",.18,n,50),Fn(i,t,e,4e3,["#4c6a30","#7d9550","#6a8445"],.4,1.2,n)},[1,1]);Yt.brush=ze(256,256,(i,t,e)=>{let n=_e(43);Xs(i,t,e,"#5b6338",.25,n,60),Fn(i,t,e,5e3,["#3d4a26","#7a7646","#6b5f3e"],.5,2,n)},[1,1]);Yt.leaf=ze(128,128,(i,t,e)=>{let n=_e(47);i.fillStyle="#808080",i.fillRect(0,0,t,e),Fn(i,t,e,900,["#5a5a5a","#a5a5a5","#3e3e3e","#c4c4c4"],.8,2.6,n)},[1,1]);var Z={ground:new xt({color:10133626,roughness:.97}),dirt:new xt({map:Yt.dirt,roughness:1}),outside:new xt({map:Yt.grassFar,roughness:1}),brush:new xt({map:Yt.brush,roughness:1}),block:new xt({map:Yt.block,roughness:.92,color:16777215}),stone:new xt({map:Yt.stone,roughness:.9}),concrete:new xt({map:Yt.concrete,roughness:.9,side:Ee}),siding:new xt({map:Yt.siding,roughness:.8}),stoneWall:new xt({map:Yt.stoneWall,roughness:.9,emissive:2761752,emissiveIntensity:.35}),garageDoor:new xt({map:Yt.garage,roughness:.55}),frontDoor:new xt({color:7219746,roughness:.5}),chips:new xt({map:Yt.chips,roughness:1}),asphalt:new xt({map:Yt.asphalt,roughness:.95}),trim:new xt({color:15921386,roughness:.6}),skirt:new xt({color:12033408,roughness:.95}),shingle:new xt({map:Yt.shingle,roughness:.95}),glassDark:new xt({color:2435888,roughness:.08,metalness:.2,envMapIntensity:1.4}),blinds:new xt({color:14867661,roughness:.7}),board:new xt({map:Yt.board,roughness:.95}),steelPost:new xt({color:10133411,roughness:.45,metalness:.7}),hogFrame:new xt({color:3877922,roughness:.7,metalness:.4}),hogMesh:new xt({map:Yt.mesh,color:16777215,alphaTest:.4,side:Ee,roughness:.6,metalness:.4}),edging:new xt({color:9128491,roughness:.85,metalness:.25}),wood:new xt({color:5980464,roughness:.85,side:Ee}),white:new xt({color:15657956,roughness:.65}),corr:new xt({color:12041922,roughness:.5,metalness:.55,bumpMap:Yt.corr,bumpScale:.8,side:Ee}),tank:new xt({map:Yt.tank,bumpMap:Yt.tankBump,bumpScale:3,roughness:.34,metalness:.45,envMapIntensity:1.1}),tankIn:new xt({map:Yt.tank,bumpMap:Yt.tankBump,bumpScale:2,color:14212832,roughness:.4,metalness:.35,side:Ne,envMapIntensity:1}),rim:new xt({color:13883611,roughness:.3,metalness:.55,envMapIntensity:1.1}),water:new xt({color:5942962,roughness:.03,metalness:.05,transparent:!0,opacity:.42,envMapIntensity:1.4,depthWrite:!1}),poolFloor:new xt({map:Yt.caustic,roughness:.5,metalness:.25}),jet:new xt({color:1776670,roughness:.45}),pump:new xt({color:7239037,roughness:.5,metalness:.3}),hose:new xt({color:1908513,roughness:.6}),frame:new xt({color:4868163,roughness:.6,metalness:.3}),cushion:new xt({color:15525078,roughness:.95}),teak:new xt({color:9267788,roughness:.75}),canopy:new xt({color:14857890,roughness:.95,side:Ee,emissive:9067078,emissiveIntensity:.45}),terracotta:new xt({color:12085578,roughness:.9}),soil:new xt({color:4075300,roughness:1}),agave:new xt({color:8363156,roughness:.7,flatShading:!0}),grassPlant:new xt({color:10135653,roughness:.9,side:Ee}),shed:new xt({color:11775395,roughness:.85}),shedRoof:new xt({color:4935250,roughness:.6,metalness:.4}),cover:new xt({color:1776670,roughness:.95}),trunk:new xt({color:5062966,roughness:1}),canopyTree:new xt({vertexColors:!0,map:Yt.leaf,roughness:1,emissive:1911314,emissiveIntensity:.5}),bulb:new xt({color:16773840,emissive:16766346,emissiveIntensity:.6}),wire:new xt({color:1710618,roughness:.8}),sail:new xt({color:2792086,roughness:.9,side:Ee})};function Dl(i){let t=i.attributes.position,e=new Float32Array(t.count*2);for(let n=0;n<t.count;n++){let s=t.getX(n)*Lt+Ur,r=t.getZ(n)*Lt+Nr;e[n*2]=(s-470)/940,e[n*2+1]=1-(r-940)/760}return i.setAttribute("uv",new me(e,2)),i}function Td(i,t,e,n,s){let r=Math.max(1,Math.ceil((e-i)/Lt/s)),a=Math.max(1,Math.ceil((n-t)/Lt/s)),o=new Ke(1,1,r,a),c=o.attributes.position;for(let l=0;l<c.count;l++){let h=c.getX(l)+.5,u=.5-c.getY(l);c.setXYZ(l,K(i+(e-i)*h),0,it(t+(n-t)*u))}return o.userData={px0:i,py0:t,px1:e,py1:n},o}function Ul(i,t){let e=i.geometry,n=e.attributes.position;for(let s=0;s<n.count;s++)n.setY(s,t(n.getX(s)*Lt+Ur,n.getZ(s)*Lt+Nr));n.needsUpdate=!0,e.computeVertexNormals(),e.computeBoundingSphere()}function Z_(i){return i.map(([t,e])=>new tt(K(t),it(e)))}function El(i,t,e,n){let s=Z_(i);s.length>2&&s[0].distanceTo(s[s.length-1])<.001&&s.pop(),Pn.isClockWise(s)&&(s=s.reverse());let r=Pn.triangulateShape(s,[]),a=[];for(let d of r)for(let f of[d[0],d[2],d[1]])a.push(s[f].x,e,s[f].y);let o=new ue;if(o.setAttribute("position",new Ft(a,3)),o.computeVertexNormals(),n)Dl(o);else{let d=o.attributes.position,f=[];for(let g=0;g<d.count;g++)f.push(d.getX(g)/6,d.getZ(g)/6);o.setAttribute("uv",new Ft(f,2))}let c=[],l=[],h=0;for(let d=0;d<s.length;d++){let f=s[d],g=s[(d+1)%s.length],_=f.distanceTo(g);c.push(f.x,t,f.y,g.x,t,g.y,g.x,e,g.y,f.x,t,f.y,g.x,e,g.y,f.x,e,f.y),l.push(h/4,t/4,(h+_)/4,t/4,(h+_)/4,e/4,h/4,t/4,(h+_)/4,e/4,h/4,e/4),h+=_}let u=new ue;return u.setAttribute("position",new Ft(c,3)),u.setAttribute("uv",new Ft(l,2)),u.computeVertexNormals(),{top:o,side:u}}function te(i,t,e,n,s,r,a,o,c=0){let l=new j(new Le(i,t,e),n);return l.position.set(s,r,a),l.rotation.y=c,l.castShadow=l.receiveShadow=!0,(o||le).add(l),l}function Ji(i,t,e){let n=i.attributes.uv;for(let s=0;s<n.count;s++)n.setXY(s,n.getX(s)*t,n.getY(s)*e);return i}var si={};function ji(i){return si[i]||(si[i]=new re,si[i].name=i,le.add(si[i])),si[i]}var Ad=[],Rd=i=>typeof i=="function"?i():i;function Nn(i,t,e,n=0){return Ad.push([i,t,e,n]),i.position.y=mn(t,e)+Rd(n),i}var Vn={};function Ti(i,t,e,n,s,r,a,o=1){let c=Td(t,e,n,s,o),l=new j(c,a);return l.receiveShadow=!0,l.userData.h=r,le.add(l),Vn[i]=l,Ul(l,r),a===Z.ground&&Dl(c),l}Ti("lawn",486,1049,950,1681,ma,Z.ground,1.5);Ti("strip",486,940,950,1049,()=>-.25,Z.ground,2);Ti("walk",Pr,958,ln,1681,(i,t)=>Lr(t),Z.ground,.75);Ti("patioZone",ln,940,1395,1108,()=>-.3,Z.ground,3);Ti("sideNorth",486,765,574,940,()=>-.25,Z.ground,3);Vn.sideNorth.material=new xt({color:3421754,roughness:1});function ll(i,t,e,n){let s=t.map(([u,d])=>new tt(K(u),it(d)));Pn.isClockWise(s)&&(s=s.reverse());let r=e.map(u=>{let d=u.map(([f,g])=>new tt(K(f),it(g)));return Pn.isClockWise(d)||(d=d.reverse()),d}),a=Pn.triangulateShape(s,r),o=s.concat(...r),c=[];for(let u of a)for(let d of[u[0],u[2],u[1]]){let f=o[d];c.push(f.x,n(f.x*Lt+Ur,f.y*Lt+Nr),f.y)}let l=new ue;if(l.setAttribute("position",new Ft(c,3)),l.computeVertexNormals(),l.attributes.normal.getY(0)<0){let u=l.attributes.position.array;for(let d=0;d<u.length;d+=9)for(let f=0;f<3;f++){let g=u[d+3+f];u[d+3+f]=u[d+6+f],u[d+6+f]=g}l.computeVertexNormals()}Dl(l);let h=new j(l,Z.ground);return h.receiveShadow=!0,le.add(h),Vn[i]=h,h}function $_(){for(let e of["fEx","pUp","pPool","pTurf","edgeStrip"])Vn[e]&&(le.remove(Vn[e]),Vn[e].geometry.dispose(),delete Vn[e]);if(lt.mode==="existing"){let e=Ti("fEx",ln,1108,1394.6,1681,je,Z.dirt,.75),n=e.geometry.attributes.position,s=new Float32Array(n.count*2);for(let r=0;r<n.count;r++){let a=n.getX(r)*Lt+Ur,o=n.getZ(r)*Lt+Nr;s[r*2]=(a-ln)/(1394.6-ln),s[r*2+1]=1-(o-1108)/573}e.geometry.setAttribute("uv",new me(s,2));return}let i=gn[1];ll("pUp",[[i,1108],[Be,1108],[Be,Ye],[_l,Ye],...vl(yl,xl),[gl,Ye],[i,Ye]],[],()=>Il());let t=Array.from({length:56},(e,n)=>{let s=n/56*We;return[ve[0]+Math.cos(s)*73.5,ve[1]+Math.sin(s)*73.5]});ll("pPool",[[i,Ye],[gl,Ye],...vl(xl,yl),[_l,Ye],[Be,Ye],[Be,oi],[i,oi]],[t],()=>ga()),ll("pTurf",[[i,oi],[Be,oi],[Be,1681],[i,1681]],[],(e,n)=>Sd(n)),Ti("edgeStrip",Be,1108,1394.6,1681,je,Z.ground,.75)}{let i=new Ds([new tt(K(-900),it(-900)),new tt(K(3e3),it(-900)),new tt(K(3e3),it(3200)),new tt(K(-900),it(3200))]);i.holes.push(new Vi([new tt(K(486),it(940)),new tt(K(486),it(2700)),new tt(K(1394.6),it(2700)),new tt(K(1394.6),it(940))]));let t=new Mr(i);t.rotateX(Math.PI/2);let e=t.attributes.position;for(let r=0;r<e.count;r++)e.setY(r,-.32);let n=t.attributes.uv;for(let r=0;r<n.count;r++)n.setXY(r,e.getX(r)/14,e.getZ(r)/14);t.computeVertexNormals();let s=new j(t,Z.outside);if(s.receiveShadow=!0,s.geometry.attributes.normal.getY(0)<0){let r=t.index.array;for(let a=0;a<r.length;a+=3){let o=r[a+1];r[a+1]=r[a+2],r[a+2]=o}t.computeVertexNormals()}le.add(s)}{let i=Ti("greenbelt",486,1681,1394.6,2700,(n,s)=>_a(an(n,486,1394))-.3-Math.pow(Math.max(0,(s-1690)/Lt),1.15)*.16,Z.brush,4),t=i.geometry.attributes.position,e=new Float32Array(t.count*2);for(let n=0;n<t.count;n++)e[n*2]=t.getX(n)/12,e[n*2+1]=t.getZ(n)/12;i.geometry.setAttribute("uv",new me(e,2))}{let i=El(cn.patio,-.6,0,!1),t=new j(i.top,Z.concrete),e=new j(i.side,Z.concrete);t.receiveShadow=e.receiveShadow=!0,le.add(t,e);let n=El(cn.wedge,-.6,.04,!0),s=new j(n.top,Z.ground),r=new j(n.side,Z.wood);s.receiveShadow=!0,r.castShadow=!0,le.add(s,r)}var Sl=new re;le.add(Sl);function J_(){if(Sl.clear(),lt.mode!=="existing")return;let i=24;for(let t=0;t<i;t++){let e=1e3+679*t/i,n=1e3+679*(t+1)/i,s=(e+n)/2,r=Math.min(Lr(s),je(ln+2,s)),a=Math.max(Lr(s),je(ln+2,s))+.12,o=new j(new Le(.03,a-r+.4,(n-e)/Lt+.01),Z.edging);o.position.set(K(ln),(a+r-.4)/2,it(s)),o.castShadow=!0,Sl.add(o)}}var K_=14.85/Lt,j_=11/Lt,Q_=new Fs(1,$i,j_,2,.035),Un=new mr(Q_,Z.block,3e3);Un.castShadow=Un.receiveShadow=!0;Un.instanceMatrix.setUsage(Gu);le.add(Un);var dd=(gn[0]+gn[1])/2,Cd=[{key:"west",name:"Walkway west wall",built:!0,path:[[955.34,958],[955.34,1679]],aName:"walkway",bName:"lawn",flip:!0},{key:"east",name:"Walkway east wall",path:[[dd,1108.35],[dd,1679]],aName:"walkway",bName:"terrace side"},{key:"step",name:"Pad to pool wall",path:[[gn[1],Ye],[gl,Ye],...vl(xl,yl),[_l,Ye],[Be,Ye]],aName:"pool side",bName:"pad side",need:()=>lt.step1>=Qt},{key:"cross",name:"Pool to turf wall",path:[[gn[1],oi],[Be,oi]],aName:"turf side",bName:"pool side",need:()=>lt.step2>=Qt}];for(let i of Cd){i.segs=[];let t=0;for(let e=0;e<i.path.length-1;e++){let[n,s]=i.path[e],[r,a]=i.path[e+1],o=Math.hypot(r-n,a-s);i.segs.push({ax:n,ay:s,dx:(r-n)/o,dy:(a-s)/o,s0:t,L:o}),t+=o}i.len=t}function tx(i,t){let e=i.segs[i.segs.length-1];for(let s of i.segs)if(t<=s.s0+s.L){e=s;break}let n=an(t-e.s0,0,e.L);return{x:e.ax+e.dx*n,y:e.ay+e.dy*n,tx:e.dx,ty:e.dy}}var Pd=new C(0,1,0),ha=new oe,ua=new pn,da=new C,fa=new C,fd=new Ut;function ex(){let i=0,t=[],e=12;for(let n of Cd){let s=(n.built||lt.mode==="proposed")&&(!n.need||n.need()),r={r:n,count:0,maxFace:0,maxSide:"",len:n.len/Lt,on:s};if(!s){t.push(r);continue}let a=u=>{let d=tx(n,u),f=-d.ty,g=d.tx,_=n.flip?-1:1,m=mn(d.x+f*e*_,d.y+g*e*_),p=mn(d.x-f*e*_,d.y-g*e*_);return{p:d,A:m,B:p,top:Math.ceil((Math.max(m,p)-.04)/$i),bot:Math.floor((Math.min(m,p)+.04)/$i)-1}},o=K_*Lt,c=1e9,l=-1e9;for(let u=0;u<=n.len;u+=o/2){let d=a(u);c=Math.min(c,d.bot),l=Math.max(l,d.top)}let h=_e(n.key.length*97);for(let u=c;u<l;u++){let d=(u%2+2)%2?o/2:0;for(let f=-d;f<n.len;f+=o){let g=Math.max(f,0),_=Math.min(f+o,n.len);if(_-g<o*.18)continue;let m=(g+_)/2,p=a(m);if(u<p.bot||u>=p.top)continue;let y=Math.max(p.top*$i-Math.min(p.A,p.B),0);y>r.maxFace&&(r.maxFace=y,r.maxSide=p.A<p.B?n.aName:n.bName);let x=(_-g)/Lt-.012,M=(h()-.5)*.03;fa.set(K(p.p.x)-p.p.ty*M,u*$i+$i/2,it(p.p.y)+p.p.tx*M),ua.setFromAxisAngle(Pd,Math.atan2(-p.p.ty,p.p.tx)),da.set(x,1,1),ha.compose(fa,ua,da),Un.setMatrixAt(i,ha);let T=.9+h()*.16;fd.setRGB(T,T*(.98+h()*.03),T*(.95+h()*.05)),Un.setColorAt(i,fd),i++,r.count++}}t.push(r)}return Un.count=i,Un.instanceMatrix.needsUpdate=!0,Un.instanceColor&&(Un.instanceColor.needsUpdate=!0),Un.computeBoundingSphere(),t}var pd=["#c9b3a3","#b9a99b","#a39a92","#d4c5b6","#9da3a8","#c2a597","#8f8a86","#e0d6ca","#b7aea6","#a9998c","#cfc0b0"].map(i=>new Ut(i)),nx=[0,1,2].map(i=>{let t=new Mi(1,2);return t.deleteAttribute("uv"),t.deleteAttribute("normal"),pa(cl(t),.28,1.1,17+i*31,1)}),ix=new xt({color:16777215,roughness:.55,metalness:.02}),bl=nx.map(i=>{let t=new mr(i,ix,1400);return t.castShadow=t.receiveShadow=!0,le.add(t),t}),sx=(()=>{let i=_e(909),t=[],e=8,n=new Map,s=(c,l)=>c+","+l,r=(c,l,h)=>{let u=Math.floor(c/e),d=Math.floor(l/e);for(let f=u-2;f<=u+2;f++)for(let g=d-2;g<=d+2;g++)for(let _ of n.get(s(f,g))||[])if(Math.hypot(_.px-c,_.py-l)<(_.ru+h)*.92)return!1;return!0},a=c=>{t.push(c);let l=s(Math.floor(c.px/e),Math.floor(c.py/e));n.has(l)||n.set(l,[]),n.get(l).push(c)},o=[{edge:c=>1108.6-(c-1036)*(2.35/329),depth:c=>(37.6-(c-1036)*(3.7/329))/2+3,dir:1},{edge:()=>1679,depth:()=>17,dir:-1}];for(let c of o)for(let l=0;l<9e3;l++){let h=gn[1]+2+i()*(Be-gn[1]-4),u=c.depth(h),d=Math.pow(i(),1.25)*1.25;if(d>1&&i()>.25)continue;let f=c.edge(h)+c.dir*d*u,g=(3.2-2*Math.min(d,1))*(.7+i()*.45),_=g/12*Lt;r(h,f,_)&&a({px:h,py:f,ru:_,r:g/12,v:Math.floor(i()*3),rot:i()*We,sx:1+i()*.35,sz:.75+i()*.3,sy:.42+i()*.18,c:pd[Math.floor(i()*pd.length)].clone().offsetHSL(0,0,(i()-.5)*.08)})}return t})();function rx(){let i=[0,0,0];if(lt.mode==="proposed")for(let e of sx){let n=bl[e.v],s=i[e.v]++,r=mn(e.px,e.py);fa.set(K(e.px),r+e.r*e.sy*.45,it(e.py)),ua.setFromAxisAngle(Pd,e.rot),da.set(e.r*e.sx,e.r*e.sy,e.r*e.sz),ha.compose(fa,ua,da),n.setMatrixAt(s,ha),n.setColorAt(s,e.c)}bl.forEach((e,n)=>{e.count=i[n],e.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.needsUpdate=!0),e.computeBoundingSphere()})}var wl=new re;le.add(wl);function ox(){wl.clear();let i=0;if(lt.mode!=="proposed")return 0;let t=48;for(let e=0;e<t;e++){let n=1108+573*e/t,s=1108+573*(e+1)/t,r=(n+s)/2,a=Gs(Be-3,r),o=je(Be+3,r);i=Math.max(i,Math.abs(a-o));let c=Math.max(a,o)+Qt,l=Math.min(a,o)-.3,h=new j(new Le(.04,c-l,(s-n)/Lt+.005),Z.edging);h.position.set(K(Be),(c+l)/2,it(r)),h.castShadow=h.receiveShadow=!0,wl.add(h)}return i}var Tl=new re;le.add(Tl);var ax=new Fs(23*Qt,.16,23*Qt,2,.03),Nl=new re;le.add(Nl);for(let i of cn.pavers){let t=(i[0]+i[2])/2,e=(i[1]+i[3])/2;if(i[0]>975&&i[0]<990){let n=new j(ax,Z.stone);n.position.set(K((Pr+ln)/2),0,it(e)),n.rotation.y=(_e(Math.round(e))()-.5)*.02,n.castShadow=n.receiveShadow=!0,Tl.add(n),Nn(n,(Pr+ln)/2,e,.05)}else{let n=(i[2]-i[0])/Lt,s=(i[3]-i[1])/Lt,r=new j(new Fs(n,.14,s,2,.025),Z.stone);r.position.set(K(t),0,it(e)),r.castShadow=r.receiveShadow=!0,i[0]>1050?(Nl.add(r),Nn(r,t,e,.04)):(Tl.add(r),Nn(r,t,e,.05))}}var ae=new re;le.add(ae);var Si=580,Ar=1296,Zi=376,Hs=950,md=8.7,cx=.35;{let s=function(b,I,v,E,U,O,G){let P=Math.hypot(v-b,E-I)/Lt,N=new Ke(P,i-.05);Ji(N,P/G,(i-.05)/G);let z=new j(N,O);if(z.castShadow=z.receiveShadow=!0,z.position.set(K((b+v)/2),-.3+(i-.05)/2,it((I+E)/2)),z.rotation.y=U,ae.add(z),O===Z.siding){let q=new j(new Ke(P,1.1),Z.skirt);q.position.set(z.position.x+Math.sin(U)*.01,.25,z.position.z+Math.cos(U)*.01),q.rotation.y=U,q.receiveShadow=!0,ae.add(q)}return z},a=function(b,I,v,E){let O=K(b)-1.2,G=K(v)+1.2,P=it(I)-1.2,N=it(E)+1.2,z=G-O>=N-P,q=(z?N-P:G-O)/2,$=q*4/12,W=md-.25,J=W+$,rt=[],gt=[],Y=Math.hypot(q,$),Q=(Mt,F,qt,bt)=>{rt.push(...Mt,...F,...qt,...Mt,...qt,...bt),gt.push(Mt[0]/3+Mt[2]/3,0,F[0]/3+F[2]/3,0,qt[0]/3+qt[2]/3,Y/3,Mt[0]/3+Mt[2]/3,0,qt[0]/3+qt[2]/3,Y/3,bt[0]/3+bt[2]/3,Y/3)},mt=(Mt,F,qt)=>{rt.push(...Mt,...F,...qt),gt.push(Mt[0]/3+Mt[2]/3,0,F[0]/3+F[2]/3,0,qt[0]/3+qt[2]/3,Y/3)};if(z){let Mt=(P+N)/2,F=O+q,qt=G-q;Q([O,W,N],[G,W,N],[qt,J,Mt],[F,J,Mt]),Q([G,W,P],[O,W,P],[F,J,Mt],[qt,J,Mt]),mt([O,W,P],[O,W,N],[F,J,Mt]),mt([G,W,N],[G,W,P],[qt,J,Mt])}else{let Mt=(O+G)/2,F=P+q,qt=N-q;Q([G,W,N],[G,W,P],[Mt,J,F],[Mt,J,qt]),Q([O,W,P],[O,W,N],[Mt,J,qt],[Mt,J,F]),mt([G,W,P],[O,W,P],[Mt,J,F]),mt([O,W,N],[G,W,N],[Mt,J,qt])}let Et=new ue;Et.setAttribute("position",new Ft(rt,3)),Et.setAttribute("uv",new Ft(gt,2)),Et.computeVertexNormals();let St=new j(Et,Z.shingle);St.castShadow=St.receiveShadow=!0,ae.add(St);let Nt=(O+G)/2,Bt=(P+N)/2;for(let[Mt,F,qt,bt]of[[G-O,.08,Nt,N],[G-O,.08,Nt,P],[.08,N-P,O,Bt],[.08,N-P,G,Bt]])te(Mt,.55,F,Z.trim,qt,W-.2,bt,ae);let Pt=new j(new Ke(G-O,N-P),Z.trim);Pt.rotation.x=Math.PI/2,Pt.position.set(Nt,W-.45,Bt),ae.add(Pt)},i=md+.35,t=480,e=875,n=967;s(Si,Hs,Ar,Hs,0,Z.siding,4),s(Ar,t,Ar,Hs,Math.PI/2,Z.siding,4),s(Si,t,Si,Hs,-Math.PI/2,Z.siding,4),s(Si,Zi,Si,t,-Math.PI/2,Z.siding,4),s(Si,Zi,e,Zi,Math.PI,Z.stoneWall,8),s(e,Zi,e,t,Math.PI/2,Z.stoneWall,8),s(e,t,Ar,t,Math.PI,Z.stoneWall,8);let r=te(1.3,i-.6,1.3,Z.stoneWall,K(n)-.65,-.3+(i-.6)/2,it(Zi)+.65,ae);Ji(r.geometry,1.3/8,(i-.6)/8),a(Si,t,Ar,Hs),a(Si,Zi,n,t+30);let o=it(Zi)-.03,c=it(t)-.03;{let b=new j(new Ke(16,7),Z.garageDoor);b.position.set(K(727),-.3+3.5,o),b.rotation.y=Math.PI,ae.add(b);for(let[I,v,E,U]of[[16.6,.35,0,3.65],[.3,7,-8.15,0],[.3,7,8.15,0]])te(I,v,.15,Z.trim,K(727)+E,-.3+3.5+U,o-.05,ae)}{let b=new j(new Ke(3,6.8),Z.frontDoor);b.position.set(K(902),-.15+3.4,c),b.rotation.y=Math.PI,ae.add(b);for(let[E,U]of[[902,3]])for(let[O,G,P,N]of[[U+.5,.3,0,3.55],[.25,6.8,-U/2-.12,0],[.25,6.8,U/2+.12,0]])te(O,G,.12,Z.trim,K(E)+P,-.15+3.4+N,c-.05,ae);let I=new j(new Ke(1.6,6.4),Z.blinds);I.position.set(K(940),-.15+3.4,c),I.rotation.y=Math.PI,ae.add(I);for(let[E,U,O,G]of[[2.1,.25,0,3.3],[.22,6.6,-.9,0],[.22,6.6,.9,0]])te(E,U,.12,Z.trim,K(940)+O,-.15+3.4+G,c-.05,ae);let v=new j(new Us(.09,10,8),Z.steelPost);v.position.set(K(902)-1.15,3.1,c-.08),ae.add(v)}{let b=K(1150),I=3.4,v=4.6,E=2.9,U=new j(new Ke(I,v),Z.blinds);U.position.set(b,E+v/2,c),U.rotation.y=Math.PI,ae.add(U);for(let[O,G,P,N]of[[I+.6,.3,0,v/2+.15],[I+.8,.25,0,-v/2-.12],[.3,v,-I/2-.15,0],[.3,v,I/2+.15,0],[I,.08,0,0]])te(O,G,.14,Z.trim,b+P,E+v/2+N,c-.06,ae)}let l=(b,I,v)=>{let E=El(b,-.6,I,!1),U=new j(E.top,v),O=new j(E.side,v);return U.receiveShadow=O.receiveShadow=!0,ae.add(U,O),U};l(cn.driveway.map(([b,I])=>[b,I]).concat([]),-.2,Z.concrete),l([[876,383],[967,383],[967,470],[876,470]],-.08,Z.concrete),l([[598,36],[840,36],[840,100],[598,100]],-.2,Z.concrete);{let b=l(cn.frontRock,-.26,Z.chips)}l([[-900,40],[3e3,40],[3e3,98],[-900,98]],-.17,Z.concrete),te(3900/Lt,.42,.5,Z.concrete,K(1050),-.36,it(36),ae),l([[-900,-700],[3e3,-700],[3e3,34],[-900,34]],-.3,Z.asphalt);let h=_e(55);for(let[b,I,v]of[[1278,505,2.3],[1240,500,1.4],[1060,500,1.1],[990,495,1],[1205,498,1.2]]){let E=new j(pa(new Mi(v,2),.35,1.4/v,h()*40,.85),new xt({color:new Ut().setHSL(.27,.35,.24+h()*.06),roughness:1}));E.position.set(K(b),v*.6-.3,it(I)-1.6),E.castShadow=E.receiveShadow=!0,ae.add(E)}let u=it(Hs)+.02;for(let[b,I,v,E,U]of[[690,2.4,2,5,"grid"],[815,3.4,4,3,"blinds"],[905,3.6,4.6,2.7,"blinds"],[1080,6,6.8,cx,"door"],[1185,4.4,4,3,"blinds"]]){let O=K(b),G=new j(new Ke(I,v),U==="blinds"?Z.blinds:Z.glassDark);G.position.set(O,E+v/2,u+.01),ae.add(G);for(let[P,N,z,q]of[[I+.5,.28,0,v/2+.14],[I+.5,.22,0,-v/2-.11],[.25,v,-I/2-.12,0],[.25,v,I/2+.12,0]])te(P,N,.12,Z.trim,O+z,E+v/2+q,u+.05,ae);if(U==="grid"){te(.06,v,.05,Z.trim,O,E+v/2,u+.04,ae);for(let P of[-1/6,1/6])te(I,.06,.05,Z.trim,O,E+v/2+P*v,u+.04,ae)}U==="door"&&te(.12,v,.06,Z.trim,O,E+v/2,u+.05,ae)}let d=K(957),f=K(1028),g=it(909),_=it(965),m=f-d,p=_-g,y=16.6,x=new j(Ji(new Le(m,y+.3,p),m/4,y/4),Z.siding);x.position.set((d+f)/2,(y-.3)/2,(g+_)/2),x.castShadow=x.receiveShadow=!0,ae.add(x),te(m+.35,.25,p+.35,Z.steelPost,(d+f)/2,y+.1,(g+_)/2,ae);let M=new j(new Ie(.33,.33,1.1,16),Z.steelPost);M.position.set(K(994.56),y+.75,it(925.43)),M.castShadow=!0,ae.add(M);let T=new j(new Gi(.55,.4,16),Z.steelPost);T.position.set(K(994.56),y+1.5,it(925.43)),ae.add(T);let A=_e(77);for(let b=600;b<945;b+=26+A()*10){let I=new j(new Mi(.9+A()*.5,1),new xt({color:new Ut().setHSL(.27+A()*.05,.32,.22+A()*.08),roughness:1,flatShading:!0}));I.scale.y=.75,I.position.set(K(b),.3,it(975)),I.castShadow=!0,ae.add(I)}}{let i=new re;le.add(i);let t=K(1022),e=K(1306),n=it(951),s=it(1098),r=it(1112),a=8.25,o=7.35,c=(a-o)/(s-n),l=m=>a-(m-n)*c;for(let m of[1032,1170,1298])te(.3,o-.55,.3,Z.white,K(m),(o-.55)/2,s,i);te(e-t,.6,.32,Z.white,(t+e)/2,o-.3,s,i),te(e-t,.45,.2,Z.white,(t+e)/2,a-.2,n+.12,i);let h=Math.atan(c),u=(r-n)/Math.cos(h);for(let m=t+.2;m<=e;m+=2){let p=te(.15,.45,u,Z.wood,m,l((n+r)/2)+.2,(n+r)/2,i);p.rotation.x=h}for(let m=n+1.2;m<r;m+=2.4){let p=te(e-t+.4,.12,.25,Z.wood,(t+e)/2,l(m)+.5,m,i);p.rotation.x=h}let d=new Ke(e-t+.6,u+.3),f=d.attributes.uv;for(let m=0;m<f.count;m++)f.setXY(m,f.getX(m)*(e-t)/.44,f.getY(m));let g=new j(d,Z.corr);g.rotation.x=-Math.PI/2+h,g.position.set((t+e)/2,l((n+r)/2)+.6,(n+r)/2),g.castShadow=g.receiveShadow=!0,i.add(g);let _=_e(5);for(let[m,p]of[[[t+1,s],[e-1,n+1]],[[t+1,n+1],[e-1,s-.5]]]){let y=[];for(let M=0;M<=24;M++){let T=M/24,A=m[0]+(p[0]-m[0])*T,b=m[1]+(p[1]-m[1])*T;y.push(new C(A,l(b)-.2-Math.sin(T*Math.PI)*.9,b))}let x=new ii(y);i.add(new j(new Ei(x,48,.02,4),Z.wire));for(let M=1;M<12;M++){let T=x.getPoint(M/12),A=new j(new Us(.11,8,6),Z.bulb);A.position.copy(T).y-=.25,i.add(A)}}te(2.1,3.9,4.4,Z.cover,K(1350),1.95+.04,it(1050),i,.06)}var ai=new re;le.add(ai);var hl=i=>Math.min(_a(i),i>gn[1]&&lt.mode==="proposed"?Gs(i,1681):99);function Rr(i,t,e){let[n,s]=i,[r,a]=t,o=Math.hypot(r-n,a-s)/Lt,c=Math.max(1,Math.round(o/8)),l=Math.atan2(-(it(a)-it(s)),K(r)-K(n));for(let h=0;h<c;h++){let u=h/c,d=(h+1)/c,f=(u+d)/2,g=n+(r-n)*f,_=s+(a-s)*f,m=1e9;for(let I of[u,f,d])m=Math.min(m,e.ground(n+(r-n)*I,s+(a-s)*I));let p=Math.min(m,e.minBase??1e9)-.15,y=6+.15,x=o/c,M=Ji(new Le(x,y,.07),x/4,y/6),T=new j(M,Z.board);if(T.position.set(K(g),p+y/2,it(_)),T.rotation.y=l,T.castShadow=T.receiveShadow=!0,ai.add(T),e.cap){let I=te(x+.05,.12,.5,Z.board,K(g),p+y+.06,it(_),ai,l)}let A=n+(r-n)*u,b=s+(a-s)*u;if(e.steel){let I=new j(new Ie(.12,.12,y+.2,10),Z.steelPost),v=Math.sin(l)*e.side,E=Math.cos(l)*e.side;I.position.set(K(A)+v*.15,p+(y+.2)/2,it(b)+E*.15),I.castShadow=!0,ai.add(I)}else te(.3,y+.1,.3,Z.board,K(A),p+(y+.1)/2,it(b),ai,l)}}function lx(){ai.clear(),Rr([573.18,765.33],[485.87,765.33],{ground:()=>-.25,steel:!0,side:1}),Rr([485.87,765.33],[485.87,1681],{ground:(i,t)=>t<1049?-.25:ma(486,t),steel:!0,side:-1}),Rr([1394.6,1681.46],[1387.64,1052.39],{ground:(i,t)=>je(1390,t),cap:!0}),Rr([1387.64,1052.39],[1304,945.5],{ground:()=>-.3,cap:!0}),Rr([485.87,1681],[540,1681],{ground:i=>_a(i)});{let e=Math.round(854.5999999999999/Lt/8);for(let n=0;n<e;n++){let s=540+854.5999999999999*n/e,r=540+(1394.6-540)*(n+1)/e,a=(s+r)/2,o=Math.min(hl(s),hl(r),hl(a))+.25,c=(r-s)/Lt,l=4,h=it(1681);for(let[f,g,_,m]of[[c,.14,K(a),o+l],[c,.14,K(a),o+.07],[.14,l,K(s)+.07,o+l/2],[.14,l,K(r)-.07,o+l/2]])te(f,g,.14,Z.hogFrame,_,m,h,ai);let u=new Ke(c-.2,l-.2);Ji(u,(c-.2)/(4*Qt),(l-.2)/(4*Qt));let d=new j(u,Z.hogMesh);d.position.set(K(a),o+l/2,h),d.castShadow=!0,ai.add(d),te(.2,l+.6+.3,.2,Z.hogFrame,K(s),o+(l+.3)/2-.15,h,ai)}}}var ge=[1318,1482],Gn=[1336,1497],Ki=[1340.5,1552],Dr=[1299,1094],ri=([i,t])=>Math.hypot(i-ve[0],t-ve[1])/Lt-72.5/Lt,hx=new xt({color:10196364,roughness:1}),ul=ji("pool");{let i=72.5/Lt,t=K(1219.87),e=it(1349.99),n=new re;n.position.set(t,0,e),ul.add(n),Nn(n,1219.87,1349.99,()=>-lt.sink);let s=new j(new Ie(i,i,1.9,96,1,!0),Z.tank);Ji(s.geometry,Math.round(We*i/1.6),1),s.position.y=.95,s.castShadow=s.receiveShadow=!0,n.add(s);let r=new j(new Ie(i-.03,i-.03,1.9,96,1,!0),Z.tankIn);Ji(r.geometry,Math.round(We*i/1.6),1),r.position.y=.95,r.receiveShadow=!0,n.add(r);let a=[[i-.06,1.86],[i-.07,1.98],[i-.02,2.04],[i+.12,2.05],[i+.2,2],[i+.21,1.9],[i+.17,1.86]].map(([m,p])=>new tt(m,p)),o=new j(new Ls(a,120),Z.rim);o.castShadow=o.receiveShadow=!0,n.add(o);let c=new j(new Ie(i+.6,i+.6,.35,48),hx);c.position.y=-.18,c.receiveShadow=!0,n.add(c);let l=new j(new Is(i-.02,64),Z.poolFloor);l.rotation.x=-Math.PI/2,l.position.y=.04,l.receiveShadow=!0,n.add(l);let h=new j(new Is(i-.04,64),Z.water);h.rotation.x=-Math.PI/2,h.position.y=1.68,h.renderOrder=2,n.add(h);{let m=Math.atan2(it(ge[1])-it(ve[1]),K(ge[0])-K(ve[0]))-.18,p=new re;p.position.set(Math.cos(m)*(i+.05),0,Math.sin(m)*(i+.05)),p.rotation.y=-m,n.add(p);let y=new j(new ko(.17,.3,6,16),Z.jet);y.rotation.z=Math.PI/2,y.position.set(-.05,2.12,0),y.castShadow=!0,p.add(y);let x=new j(new Ie(.12,.12,.4,16),Z.jet);x.position.set(-.3,1.9,0),p.add(x);let M=new j(new Ie(.17,.15,.6,16),Z.jet);M.position.set(.34,1.8,0),p.add(M)}{let m=Math.atan2(it(ge[1])-it(ve[1]),K(ge[0])-K(ve[0]))+.18,p=new re;p.position.set(Math.cos(m)*i,0,Math.sin(m)*i),p.rotation.y=-m,n.add(p),te(.75,.6,.55,Z.jet,-.12,1.85,0,p),te(.55,.08,.7,Z.jet,.02,2.12,0,p)}let u=new re;u.position.set(K(ge[0]),0,it(ge[1])),ul.add(u),Nn(u,ge[0],ge[1],0);let d=new j(new Le(2.2,.15,1.6),Z.concrete);d.position.y=.07,d.receiveShadow=d.castShadow=!0,u.add(d);let f=new j(new Ie(.5,.55,1.5,24),Z.pump);f.position.set(-.35,.9,0),f.castShadow=!0,u.add(f);let g=new j(new Ie(.28,.28,.8,16),Z.pump);g.rotation.z=Math.PI/2,g.position.set(.35,.5,0),g.castShadow=!0,u.add(g);let _=new re;ul.add(_),window.__buildHoses=()=>{_.clear();let m=mn(...ge),p=mn(1270,1440),y=mn(...ve)-lt.sink,x=y+2.05,M=72.5/Lt,T=Math.atan2(it(ge[1])-it(ve[1]),K(ge[0])-K(ve[0])),A=K(ge[0]),b=it(ge[1]),I=K(ve[0]),v=it(ve[1]);for(let[O,G,P]of[[-.18,[-.35,1.2],.06],[.18,[.75,.5],.06]]){let N=T+O,z=Math.cos(N),q=Math.sin(N),$=[new C(A+G[0],m+G[1],b),new C(A+G[0]*.4,m+.12,b-.9),new C(I+z*(M+2.6),Math.max(p,m)+.12,v+q*(M+2.6)),new C(I+z*(M+.35),Math.max(p,y)+.12,v+q*(M+.35)),new C(I+z*(M+.3),x+.25,v+q*(M+.3)),new C(I+z*(M-.2),x+.1,v+q*(M-.2))],W=new j(new Ei(new ii($,!1,"catmullrom",.3),60,P,8),Z.hose);W.castShadow=!0,_.add(W)}let E=[new C(A+.7,m+.55,b+.3),new C(A+.9,m+.12,b+.8),new C(K(Gn[0])+.1,m+.3,it(Gn[1])-.35),new C(K(Gn[0]),m+.75,it(Gn[1])-.2)],U=new j(new Ei(new ii(E),30,.03,6),Z.hose);_.add(U)}}var Ld=ji("furniture");function gd(i){let t=i.slice(0,4),e=t.reduce((c,l)=>[c[0]+l[0]/4,c[1]+l[1]/4],[0,0]),n=[t[1][0]-t[0][0],t[1][1]-t[0][1]],s=[t[2][0]-t[1][0],t[2][1]-t[1][1]],r=Math.hypot(...n),a=Math.hypot(...s),o=r>a?n:s;return{c:e,L:Math.max(r,a)/Lt,W:Math.min(r,a)/Lt,ax:[o[0]/Math.hypot(...o),o[1]/Math.hypot(...o)]}}function ux(i){let t=gd(i.frame),e=gd(i.back),n=[e.c[0]-t.c[0],e.c[1]-t.c[1]],s=Math.sign(n[0]*t.ax[0]+n[1]*t.ax[1])||1,r=[t.ax[0]*s,t.ax[1]*s],a=new re;a.position.set(K(t.c[0]),0,it(t.c[1])),a.rotation.y=Math.atan2(-r[1],r[0]),Ld.add(a),Nn(a,t.c[0],t.c[1],.04);let o=t.L,c=t.W,l=Math.min(e.L,o*.45),h=t.L>4?1:1.2;for(let d of[-1,1])for(let f of[-1,1])te(.1,h,.1,Z.frame,d*(o/2-.15),h/2,f*(c/2-.1),a);te(o,.1,c,Z.frame,0,h,0,a),te(o-l,.28,c*.94,Z.cushion,-l/2,h+.18,0,a);let u=new re;u.position.set(o/2-l,h+.1,0),u.rotation.z=t.L>4?.75:.95,a.add(u),te(l*1.15,.28,c*.94,Z.cushion,l*.57,.14,0,u)}function dx(i){let t=i.frame.map(c=>c[0]),e=i.frame.map(c=>c[1]),n=(Math.min(...t)+Math.max(...t))/2,s=(Math.min(...e)+Math.max(...e))/2,r=(Math.max(...t)-Math.min(...t))/Lt,a=(Math.max(...e)-Math.min(...e))/Lt,o=new re;o.position.set(K(n),0,it(s)),Ld.add(o),Nn(o,n,s,.04),te(r,.08,a,Z.teak,0,1.4,0,o);for(let c of[-1,1])for(let l of[-1,1])te(.08,1.4,.08,Z.teak,c*(r/2-.08),.7,l*(a/2-.08),o)}for(let i of Object.values(cn.furniture))i.back?ux(i):dx(i);var fx=ji("umbrella");{let i=cn.umbrella[0],t=i.slice(0,4).reduce((m,p)=>m+p[0]/4,0),e=i.slice(0,4).reduce((m,p)=>m+p[1]/4,0),n=Math.hypot(i[1][0]-i[0][0],i[1][1]-i[0][1])/Lt,s=Math.atan2(-(i[1][1]-i[0][1]),i[1][0]-i[0][0]),r=cn.umbrella[2],a=r.slice(0,4).reduce((m,p)=>m+p[0]/4,0),o=r.slice(0,4).reduce((m,p)=>m+p[1]/4,0),c=new re;fx.add(c),Nn(c,a,o,0),c.position.x=K(a),c.position.z=it(o),te(2.4,.35,2.4,Z.frame,0,.18,0,c);let l=K(t)-K(a),h=it(e)-it(o),u=new j(new Ie(.08,.09,9.6,12),Z.frame);u.position.y=4.8,u.castShadow=!0,c.add(u);let d=Math.hypot(l,h),f=new j(new Ie(.06,.06,d,10),Z.frame);f.rotation.z=Math.PI/2,f.rotation.y=Math.atan2(-h,l),f.position.set(l/2,9.5,h/2),c.add(f);let g=new j(new Gi(n/Math.SQRT2,1.5,4,1,!0),Z.canopy);g.position.set(l,9,h),g.rotation.y=Math.PI/4+s,g.castShadow=!0,g.receiveShadow=!0,c.add(g);let _=new j(new Ie(.04,.04,.9,8),Z.frame);_.position.set(l,9.3,h),c.add(_)}var _d=ji("planters");{let i=_e(13);cn.planters.forEach((t,e)=>{let[n,s,r]=t[0];e===1&&(n=1330,s=1298);let a=r/Lt,o=Math.min(a*1.9,2.4),c=new re;c.position.set(K(n),0,it(s)),_d.add(c),Nn(c,n,s,0);let l=[[a*.66,0],[a*.7,.06],[a*.9,o*.84],[a*1.02,o*.86],[a*1.03,o],[a*.93,o],[a*.9,o*.88]].map(([d,f])=>new tt(d,f)),h=new j(new Ls(l,40),Z.terracotta);h.castShadow=h.receiveShadow=!0,c.add(h);let u=new j(new Is(a*.9,24),Z.soil);if(u.rotation.x=-Math.PI/2,u.position.y=o*.88,c.add(u),e%2===0){let f=[];for(let _=0;_<16;_++){let m=a*(1+i()*.6),p=new Gi(.11*a*1.4,m,4);p.translate(0,m/2,0),p.scale(1,1,.35),p.rotateZ(-(.35+i()*.75)),p.rotateY(_/16*We+i()*.3),f.push(p)}let g=new j(na(f),Z.agave);g.position.y=o*.88,g.castShadow=!0,c.add(g)}else{let d=[];for(let g=0;g<44;g++){let _=1.2+i()*1.3,m=new Gi(.035,_,3);m.translate(0,_/2,0),m.rotateZ((i()-.5)*.9),m.rotateY(i()*We),m.translate((i()-.5)*a*.8,0,(i()-.5)*a*.8),d.push(m)}let f=new j(na(d),Z.grassPlant);f.position.y=o*.88,f.castShadow=!0,c.add(f)}});for(let t of cn.boulders)for(let[e,n,s,r]of t){let a=s/Lt,o=_e(Math.round(e*7+n)),c=pa(new Mi(a,2),.45,1.6/Math.max(a,.2),o()*50,.62),l=new j(c,new xt({color:r,roughness:.95,flatShading:!0}));l.position.set(K(e),0,it(n)),l.rotation.y=o()*We,l.castShadow=l.receiveShadow=!0,_d.add(l),Nn(l,e,n,a*.18)}}var Ce=ji("electrical"),Cr=[[1304.5,527],[1304.5,929.5],[1337,988],[1337,1488],[1354,1506],[1354,1552],[Ki[0]+1,Ki[1]]],px=[{name:"Pump circuit",pts:[[Ki[0]+1,1558],[1357,1558],[1357,1503],[Gn[0],1503],[Gn[0],Gn[1]]]},{name:"Patio outlet circuit",pts:[[1306,930],[1306,1050],[Dr[0],Dr[1]]],from:"house"}],mx=[{p:[1304.5,527],name:"Main panel",kind:"panel"},{p:[1306,930],name:"Exterior outlet",sub:"GFCI, in-use cover",kind:"wall"},{p:Ki,name:"Subpanel",kind:"sub"},{p:Gn,name:"Pump receptacle",kind:"post"},{p:Dr,name:"Patio outlet",kind:"patio"}],Dn={pipe:new xt({color:14236223,emissive:7999508,emissiveIntensity:.55,roughness:.5}),box:new xt({color:12172736,roughness:.45,metalness:.5}),post:new xt({color:8216648,roughness:.9}),copper:new xt({color:13136954,emissive:5909004,emissiveIntensity:.5,roughness:.35,metalness:.8}),rcpt:new xt({color:7304312,roughness:.5,metalness:.3}),tape:new ni({color:16762941,transparent:!0,opacity:.85,side:Ee,depthWrite:!1})},Al=(i,t)=>t>=1108?je(i,t):t>=950?-.32:-.28;function Rl(i=4){let t=[];for(let e=0;e<Cr.length-1;e++){let[n,s]=Cr[e],[r,a]=Cr[e+1],o=Math.max(1,Math.ceil(Math.hypot(r-n,a-s)/i));for(let c=0;c<(e===Cr.length-2?o+1:o);c++){let l=c/o;t.push([n+(r-n)*l,s+(a-s)*l])}}return t}var Ws=[];function ks(i,t,e,n,s){let r=document.createElement("div");r.className="lbl",r.innerHTML=i;let a=new sa(r);return a.position.set(e,n,s),t.add(a),Ws.push(a),a}function xd(i,t,e,n){let s=[];for(let o=0;o<i.length-1;o++){let[c,l]=i[o],[h,u]=i[o+1],d=Math.max(1,Math.ceil(Math.hypot(h-c,u-l)/4));for(let f=0;f<d;f++){let g=f/d,_=c+(h-c)*g,m=l+(u-l)*g;s.push(new C(K(_),t(_,m),it(m)))}}let[r,a]=i[i.length-1];return s.push(new C(K(r),t(r,a),it(a))),new j(new Ei(new ii(s,!1,"catmullrom",.05),s.length*3,e,8),n)}var gx=new ni({color:4173418,transparent:!0,opacity:.1,depthWrite:!1,side:Ee});function _x(){for(let s of Ws)s.removeFromParent(),s.element.remove();Ws.length=0,Ce.clear();let i=lt.cdepth,t=(s,r)=>Al(s,r)-i;Ce.add(xd(Cr,t,.09,Dn.pipe));for(let s of px){let r=xd(s.pts,s.from==="house"?(a,o)=>-1.8:(a,o)=>t(a,o)+.15,.06,Dn.pipe);Ce.add(r)}let e=Rl(8);for(let s=0;s<e.length-1;s++){let[r,a]=e[s],[o,c]=e[s+1],l=Math.hypot(o-r,c-a)/Lt;if(l<.2)continue;let h=new j(new Ke(.25,l),Dn.tape);h.rotation.x=-Math.PI/2,h.rotation.z=Math.atan2(-(o-r),c-a);let u=(r+o)/2,d=(a+c)/2;h.position.set(K(u),Math.min(t(u,d)+1,mn(u,d)-.15),it(d)),Ce.add(h)}for(let s of mx){let[r,a]=s.p,o=mn(r,a),c=K(r),l=it(a),h=s.kind==="patio"||s.kind==="wall"?-1.8:t(r,a),u,d,f,g=.32,_=c,m=l;if(s.kind==="panel")u=4.2,d=1.2,f=2;else if(s.kind==="wall")u=1.6,d=.4,f=.55;else if(s.kind==="sub")u=o+3.6,d=.3,f=1.5,g=1.05,_=c+.12;else if(s.kind==="post"){u=o+.85,d=.42,f=.6,g=.38;let M=new j(new Le(.33,3,.33),Dn.post);M.position.set(c,o,l+.3),M.castShadow=!0,Ce.add(M)}else s.kind==="patio"&&(u=1.4,d=.42,f=.6,g=.38,_=c+.3);let p=new j(new Ie(s.kind==="post"||s.kind==="patio"?.05:.07,s.kind==="post"||s.kind==="patio"?.05:.07,u-h,10),Dn.pipe);p.position.set(c,(u+h)/2,l),Ce.add(p);let y=new j(new Le(d,f,g),s.kind==="post"||s.kind==="patio"?Dn.rcpt:Dn.box);y.position.set(_,u+f/2-.05,m),y.castShadow=!0,Ce.add(y);let x=s.sub||"";if(s.kind==="sub"){let M=new j(new Ie(.03,.03,8,8),Dn.copper);M.position.set(c+.6,o-4+.1,l+1.2),Ce.add(M),ks("Ground rod<small>8 ft, beside the subpanel</small>",Ce,c+.6,o-6,l+1.2);let T=new j(new Le(3,6.5,2.5),gx);T.position.set(c+.2+1.5,o+3.25,l),T.visible=lt.under,T.userData.xrayOnly=!0,Ce.add(T),x=`On the shed's east wall \xB7 ${ri(Ki).toFixed(1)} ft from tank`}s.kind==="post"&&(x=`Twist-lock, GFCI, in-use cover \xB7 ${ri(Gn).toFixed(1)} ft from tank`),s.kind==="patio"&&(x=`GFCI, in-use cover, by the grill \xB7 ${ri(Dr).toFixed(1)} ft from tank`),ks(`${s.name}<small>${x}</small>`,Ce,_,u+f+.25,m)}if(lt.sink>0){let s=72.5/Lt+1.75,r=ga()-.42,a=K(ve[0]),o=it(ve[1]),c=new j(new Vo(s,.035,8,120),Dn.copper);c.rotation.x=Math.PI/2,c.position.set(a,r,o),Ce.add(c);for(let d=0;d<4;d++){let f=d/4*We+.4,g=Math.cos(f),_=Math.sin(f),m=new j(new Ie(.03,.03,1.75,6),Dn.copper);m.rotation.z=Math.PI/2,m.rotation.y=-f,m.position.set(a+g*(s-.875),r,o+_*(s-.875)),Ce.add(m)}let l=Math.atan2(it(ge[1])-o,K(ge[0])-a),h=mn(...ge),u=[new C(a+Math.cos(l)*s,r,o+Math.sin(l)*s),new C(K(ge[0]),h-.42,it(ge[1])-.6),new C(K(ge[0])+.4,h+.3,it(ge[1]))];Ce.add(new j(new Ei(new ii(u),24,.03,6),Dn.copper)),ks("Bonding ring<small>#8 solid copper \xB7 18 to 24 in out \xB7 4 to 6 in down</small>",Ce,a-Math.cos(l)*s,r,o-Math.sin(l)*s)}{let s=mn(...ge);ks(`Pool pump<small>${ri(ge).toFixed(1)} ft from tank \xB7 short cord to its post</small>`,Ce,K(ge[0]),s+2.2,it(ge[1]))}let n=[1337,1400];ks(`Feeder conduit<small>${on(i)} below today's grade</small>`,Ce,K(n[0]),t(...n),it(n[1]));for(let s of Ws)s.visible=lt.under&&Ce.visible}var xx=new xt({color:14256458,transparent:!0,opacity:.32,depthWrite:!1,side:Ee,roughness:1}),yx=new gr({color:11887914,transparent:!0,opacity:.45,depthWrite:!1}),kn=null;function Id(){if(kn&&(le.remove(kn),kn.geometry.dispose(),kn=null),!(lt.under&&lt.mode==="proposed"))return;let i=Td(gn[1],1108,Be,1681,2);kn=new j(i,xx),Ul(kn,(t,e)=>je(t,e)-.02);{let t=[],e=2*Lt;for(let s=gn[1];s<=Be+.1;s+=e)for(let r=1108;r<1681;r+=e/4)t.push(K(s),je(s,r),it(r),K(s),je(s,Math.min(r+e/4,1681)),it(Math.min(r+e/4,1681)));for(let s=1108;s<=1681;s+=e)for(let r=gn[1];r<Be;r+=e/4){let a=Math.min(r+e/4,Be);t.push(K(r),je(r,s),it(s),K(a),je(a,s),it(s))}let n=new ue;n.setAttribute("position",new Ft(t,3)),kn.add(new Uo(n,yx))}kn.renderOrder=3,le.add(kn),ks("Today's grade<small>fill sits above this sheet</small>",kn,K(1180),je(1180,1560),it(1560))}var vx=()=>[Z.ground,Z.dirt,Z.outside,Z.brush,Z.concrete,Vn.sideNorth.material];function Ol(){let i=lt.under;be("xray").setAttribute("aria-pressed",String(i));for(let t of vx())t.transparent=i,t.opacity=i?.22:1,t.depthWrite=!i,t.needsUpdate=!0;ce.maxPolarAngle=i?Math.PI*.6:Math.PI*.495,Id();for(let t of Ws)t.visible=i&&Ce.visible;Ce.traverse(t=>{t.userData.xrayOnly&&(t.visible=i)}),Ma()}var Mx=ji("shed");{let i=K(1287),t=K(1339),e=it(1505.38),n=it(1602.87),s=t-i,r=n-e,a=new re;a.position.set((i+t)/2,0,(e+n)/2),Mx.add(a),Nn(a,1313,1554,0);let o=6.2,c=6.9,l=te(s,c,r,Z.shed,0,c/2,0,a),h=te(s+.6,.15,r+.6,Z.shedRoof,0,(o+c)/2+.1,0,a);h.rotation.z=Math.atan((c-o)/s),te(.06,5.6,2.6,Z.trim,-s/2-.02,2.9,0,a),te(.07,5.2,2.2,Z.shed,-s/2-.04,2.75,0,a)}var ya=ji("context");function Dd(i,t,e,n,s,r,a=8.6,o=4/12){let c=new re;ya.add(c);let l=(e-i)/Lt,h=(n-t)/Lt,u=K((i+e)/2),d=it((t+n)/2),f=new j(new Le(l,a+.3,h),new xt({color:s,roughness:.85}));f.position.set(u,(a+.3)/2-.3,d),f.castShadow=f.receiveShadow=!0,c.add(f);let g=1.2,_=u-l/2-g,m=u+l/2+g,p=d-h/2-g,y=d+h/2+g,x=m-_>=y-p,M=(x?y-p:m-_)/2,T=a+M*o,A=[];if(x){let v=(p+y)/2,E=_+M,U=m-M;A.push(_,a,y,m,a,y,U,T,v,_,a,y,U,T,v,E,T,v,m,a,p,_,a,p,E,T,v,m,a,p,E,T,v,U,T,v,_,a,p,_,a,y,E,T,v,m,a,y,m,a,p,U,T,v)}else{let v=(_+m)/2,E=p+M,U=y-M;A.push(m,a,y,m,a,p,v,T,E,m,a,y,v,T,E,v,T,U,_,a,p,_,a,y,v,T,U,_,a,p,v,T,U,v,T,E,m,a,p,_,a,p,v,T,E,_,a,y,m,a,y,v,T,U)}let b=new ue;b.setAttribute("position",new Ft(A,3)),b.computeVertexNormals();let I=new j(b,new xt({color:r,roughness:.95,side:Ee}));return I.castShadow=!0,c.add(I),c}Dd(1460,300,1800,1077,10135206,7172212);Dd(95,390,402,1095,15328990,6974576);{let i=K(1446),t=K(1682),e=it(1586),n=it(1738),s=t-i,r=n-e,a=-.4,o=new re;o.position.set((i+t)/2,a,(e+n)/2),ya.add(o),te(s,7,r,new xt({color:10264476,roughness:.85}),0,3.5,0,o);let c=[[-s/2-.4,7],[-s/2+1.3,10.2],[0,11.6],[s/2-1.3,10.2],[s/2+.4,7]],l=[];for(let d=0;d<c.length-1;d++){let[f,g]=c[d],[_,m]=c[d+1];l.push(f,g,-r/2-.4,_,m,-r/2-.4,_,m,r/2+.4,f,g,-r/2-.4,_,m,r/2+.4,f,g,r/2+.4)}let h=new ue;h.setAttribute("position",new Ft(l,3)),h.computeVertexNormals();let u=new j(h,new xt({color:12240588,roughness:.4,metalness:.6,side:Ee}));u.castShadow=!0,o.add(u);for(let d of[-1,1]){let f=new Ds([new tt(-s/2,7),...c.slice(1,4).map(([_,m])=>new tt(_,m)),new tt(s/2,7)]),g=new j(new Mr(f),new xt({color:10264476,roughness:.85,side:Ee}));g.position.z=d*r/2,o.add(g)}}{let i=new ue;i.setAttribute("position",new Ft([K(300),9.5,it(1020),K(470),8.2,it(1010),K(420),9.8,it(1150),K(300),9.5,it(1020),K(420),9.8,it(1150),K(310),8,it(1160)],3)),i.computeVertexNormals();let t=new j(i,Z.sail);t.castShadow=!0,ya.add(t)}function oa(i,t,e,n,s,r,a){let o=_e(a),c=new re;c.position.set(i,e,t);let l=r==="juniper"?n*.25:n*.42,h=Z.trunk.clone(),u=new j(new Ie(s*.05,s*.08,l,8),h);u.position.y=l/2,u.castShadow=!0,c.add(u);let d=[],f=r==="juniper"?9:18,g=r==="juniper"?new Ut(4021303):r==="fall"?new Ut(10852949):new Ut(5797949);for(let y=0;y<f;y++){let x=y/f,M,T,A,b;if(r==="juniper")T=l+x*(n-l)*.95,b=s*(1-x*.75)*(.7+o()*.3),M=(o()-.5)*s*.4,A=(o()-.5)*s*.4;else{let G=o()*We,P=o()*s*.75;M=Math.cos(G)*P,A=Math.sin(G)*P,T=l+s*.35+o()*(n-l-s*.7),b=s*(.32+o()*.26)}let I=new Mi(b,2);I.deleteAttribute("uv"),I.deleteAttribute("normal");let v=pa(cl(I),.55,1.2/b,o()*90,.82),E=v.attributes.position;v.translate(M,T,A);let U=new Float32Array(E.count*3),O=g.clone().offsetHSL((o()-.5)*.03,(o()-.5)*.1,(o()-.5)*.08);for(let G=0;G<E.count;G++){let P=.95+.35*(E.getY(G)-T+b)/(2*b);U[G*3]=O.r*P,U[G*3+1]=O.g*P,U[G*3+2]=O.b*P}v.setAttribute("color",new me(U,3)),v.setAttribute("uv",new me(new Float32Array(E.count*2).map((G,P)=>P%2?E.getY(P>>1)/3:(E.getX(P>>1)+E.getZ(P>>1))/3),2)),d.push(v)}let _=Z.canopyTree.clone(),m=new j(na(d),_);m.castShadow=!0,m.receiveShadow=!0,c.add(m),ya.add(c),m.geometry.computeBoundingSphere();let p=m.geometry.boundingSphere;return Ud.push({mesh:m,mat:_,tmat:h,c:p.center.clone().add(c.position),r:p.radius*.85,x:c.position.x,z:c.position.z,top:c.position.y+n,rh:s*.95}),c}var Ud=[];{let i=_e(2024);for(let t=0;t<54;t++){let e=380+i()*1450,n=1800+Math.pow(i(),.8)*700,s=i()<.22?"juniper":i()<.15?"fall":"oak",r=_a(an(e,486,1394))-.3-Math.pow(Math.max(0,(n-1690)/Lt),1.15)*.16;oa(K(e),it(n),e>1394||e<486?-.4:r,26+i()*22,7+i()*6,s,t+1)}oa(K(1560),it(1520),-.4,30,9,"fall",901);for(let[t,e,n,s]of[[300,1250,34,15],[260,700,30,13],[1560,640,32,13],[1620,980,28,12],[900,230,30,14],[700,260,26,11]])oa(K(t),it(e),-.3,n,s,"oak",t+e);cn.trees.forEach(([t,e,n],s)=>oa(K(t),it(e),-.3,18+n/4,n/Lt*2.2,"oak",300+s))}var Vs={top:{value:new Ut},hor:{value:new Ut},sunDir:{value:new C},glow:{value:new Ut}},va=new j(new Us(3e3,32,16),new Ln({side:Ne,depthWrite:!1,uniforms:Vs,vertexShader:"varying vec3 vD;void main(){vD=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform vec3 top,hor,glow,sunDir;varying vec3 vD;void main(){float h=clamp(vD.y,0.,1.);vec3 c=mix(hor,top,pow(h,0.55));float s=max(dot(normalize(vD),normalize(sunDir)),0.);c+=glow*(pow(s,8.)*0.35+pow(s,600.)*2.);if(vD.y<0.)c=mix(hor,hor*0.8,clamp(-vD.y*4.,0.,1.));gl_FragColor=vec4(c,1.);}"}));va.renderOrder=-1;le.add(va);var Nd=new Wo(14674418,7167047,.7);le.add(Nd);var On=new qo(16777215,2.6);On.castShadow=!0;On.shadow.mapSize.set(Ml?2048:4096,Ml?2048:4096);var Ys=On.shadow.camera;Ys.left=-58;Ys.right=58;Ys.top=58;Ys.bottom=-58;Ys.near=1;Ys.far=400;On.shadow.bias=-4e-4;On.shadow.normalBias=.03;var Od=new C(K(1e3),0,it(1150));On.target.position.copy(Od);le.add(On,On.target);le.fog=new Do(14542054,220,1400);function Fd(i,t){let e=30.27*Math.PI/180,n=-97.74,s=[21,52,80,111,141,172,202,233,264,294,325,355][i-1],r=i>=3&&i<=10?1:0,a=23.44*Math.sin(We/365*(s-81))*Math.PI/180,o=We/365*(s-81),c=9.87*Math.sin(2*o)-7.53*Math.cos(o)-1.5*Math.sin(o),h=(t-r+(4*(n+90)+c)/60-12)*15*Math.PI/180,u=Math.asin(Math.sin(e)*Math.sin(a)+Math.cos(e)*Math.cos(a)*Math.cos(h)),d=(Math.atan2(Math.sin(h),Math.cos(h)*Math.sin(e)-Math.tan(a)*Math.cos(e))+Math.PI)%We;return{el:u,az:d}}function Fl(){let{el:i,az:t}=Fd(lt.month,lt.time),e=t-lt.north*Math.PI/180,n=new C(Math.cos(i)*Math.sin(e),Math.sin(i),-Math.cos(i)*Math.cos(e));On.position.copy(Od).addScaledVector(n,220);let s=Math.max(i,0),r=an(Math.sin(s)*3,0,1),a=new Ut().setHSL(.08,.85,.6).lerp(new Ut(16774890),an(Math.sin(s)*2.2,0,1));On.color.copy(a),On.intensity=i>0?.4+2.4*r:0,Nd.intensity=.35+.45*an(Math.sin(i+.1)*2,0,1),Vs.top.value.setHSL(.58,.45,.25+.4*an(Math.sin(i+.12)*2,0,1)),Vs.hor.value.setHSL(i<.15?.07:.57,i<.15?.4:.25,.55+.3*an(Math.sin(i+.1)*3,0,1)),Vs.glow.value.copy(a),Vs.sunDir.value.copy(n),le.fog.color.copy(Vs.hor.value),De.toneMappingExposure=i>0?1:.9,document.getElementById("needle").setAttribute("transform",`rotate(${-lt.north})`);let o=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];document.getElementById("o-north").textContent=`${o[Math.round(lt.north/22.5)%16]} \xB7 ${lt.north}\xB0`,Bd(),kd(),Ma()}function Bd(){let i=Math.atan2(Pl.x,-Pl.z)*180/Math.PI;document.getElementById("needle").setAttribute("transform",`rotate(${-(lt.north+i)})`)}var on=i=>`${Math.round(i*12)} in`,be=i=>document.getElementById(i);function Wn(){$_();for(let r of["lawn","walk"])Ul(Vn[r],Vn[r].userData.h);for(let[r,a,o,c]of Ad)r.position.y=mn(a,o)+Rd(c);J_(),lx();let i=ex(),t=ox();window.__buildHoses(),rx();let e=document.getElementById("stats");e.innerHTML="";let n=(r,a,o)=>{let c=document.createElement("div");c.className="stat"+(o?" warn":""),c.innerHTML=`<b>${r}</b>`+a.map(l=>`<span>${l}</span>`).join(""),e.appendChild(c)};if(lt.mode==="existing")n("Proposed walls",["Not built yet. Switch to Proposed to see them."]);else{for(let a of i){if(a.r.built)continue;if(!a.on){n(a.r.name,["None: the two levels are merged."]);continue}let o=Math.round(a.maxFace/$i);n(a.r.name,[`${a.len.toFixed(0)} ft run \xB7 \u2248 ${a.count} blocks`,`Tallest face ${on(a.maxFace)} (${o} courses) on the ${a.maxSide}`])}n("Corten edge, east fence",[`Tall heavy-duty corten \xB7 ${(573/Lt).toFixed(0)} ft run`,`Retains up to ${on(t)} where the fill is deepest`,`Order at least ${Math.ceil((Math.round(t*12)+5)/2)*2} in tall so 4 to 6 in stays buried`]);{let a=Rl(4).filter(([p,y])=>y>=1108),o=1e9,c=0;for(let[p,y]of a){let x=Gs(p,y)-(Al(p,y)-lt.cdepth);o=Math.min(o,x),c=Math.max(c,x)}let l=1e9;for(let[p,y]of Rl(2))l=Math.min(l,ri([p,y]));let h=lt.sink>0,u=ri(Gn),d=ri(ge),f=ri(Ki),g=ri(Dr),_=(p,y)=>`${p===!0?"OK":p===!1?"Fix":"Check"} \xB7 ${y}`,m=[];m.push(h?"Sunk tank counts as a permanently installed pool: bonding and the 3 ft cord limit apply.":"Tank on grade counts as a storable pool: no bonding grid needed."),m.push(_(f>=5,`Subpanel on the shed's east wall, ${f.toFixed(1)} ft from the tank, with its own ground rod.`));{let y=Ki[0]+.3*Lt,x=(1393-y)/Lt,M=(Be-y)/Lt;m.push(_(x>=3?"check":!1,`Panel working space is 36 in deep. The corten edge is ${(M*12).toFixed(0)} in out and the fence ${(x*12).toFixed(0)} in, so keep the ground level and clear in front of the panel; notch the edge around it.`))}m.push(_(u>=6&&u<=20,`Pump receptacle on its own short post, ${u.toFixed(1)} ft from the tank: twist-lock, GFCI, in-use cover.`)),m.push(_("check","The subpanel is out of sight from the pump now, so the pump needs a disconnect it can see. The twist-lock plug usually serves; ask the inspector, or add a small switch on that post.")),m.push(_(!0,h?`Pump on its own pad ${d.toFixed(1)} ft out, cord 3 ft or less.`:`Double-insulated storable-pool pump on GFCI, ${d.toFixed(1)} ft out.`)),m.push(_(g>=6&&g<=20,`Patio outlet on the east cover post by the grill, ${g.toFixed(1)} ft from the tank: GFCI, in-use cover. Also counts as the pool's required convenience outlet.`)),m.push(_(!0,`Feeder: existing PVC run, ${on(o)} to ${on(c)} of cover after fill. Passes ${l.toFixed(1)} ft from the tank, so keep it in conduit there.`));for(let[p,y,x]of[[Ye,lt.step1>=Qt,"pad-to-pool"],[oi,lt.step2>=Qt,"pool-to-turf"]]){if(!y)continue;let T=Math.min(Gs(1337,p-12),Gs(1337,p+12))-10*Qt-(Al(1337,p)-lt.cdepth+.07);m.push(_(T>=4*Qt,T>=4*Qt?`Crosses the ${x} wall; trench stays ${on(T)} above it.`:`The ${x} wall trench comes within ${on(Math.max(T,0))} of the feeder. Hand-dig there.`))}h&&m.push(_(!0,"Bond the tank (4 points), pump, water (bonded fitting) and paving within 3 ft to a #8 copper ring.")),m.push(_(!0,"Shed subpanel: 4-wire feeder, separate neutral and ground bars.")),m.push("Skip the 2D plan's pool outlet; at 4 ft from the tank it is too close."),n("Electrical plan",m,m.some(p=>p.startsWith("Fix")||p.startsWith("Check")))}let r=ga()-lt.sink+2-Il();n("Pool",[`Rim ${on(Math.abs(r))} ${r>=0?"above":"below"} the pad`,`Tank buried ${on(lt.sink)} on the pool level`].concat(lt.sink>0?["Backfill with gravel and wrap the buried steel."]:[]))}let s=r=>r===0?"flush with patio":`${on(-r)} below patio`;be("o-pad").textContent=s(lt.pad),be("o-step1").textContent=lt.step1<Qt?"none":on(lt.step1),be("o-step2").textContent=lt.step2<Qt?"none":on(lt.step2),be("o-sink").textContent=lt.sink<Qt?"sits on grade":on(lt.sink),be("o-walk").textContent=on(lt.walkFall);for(let r of["pool","furniture","umbrella","planters","shed"])si[r].visible=lt.mode==="proposed"&&lt.layers[r];Nl.visible=lt.mode==="proposed",si.context.visible=lt.layers.context,aa=!0,Ce.visible=lt.layers.electrical,be("o-cdepth").textContent=on(lt.cdepth),_x(),Id(),kd(),Ma()}var Ex=4.7,zd=[{key:"overview",name:"Overview",sub:"Whole yard",pos:[700,1700,46],tgt:[1130,1270,-2]},{key:"hero",name:"Patio, west post",sub:"Photo 5",pos:[1046,1098,"eye"],tgt:[1320,1590,"tgt"]},{key:"chimney",name:"From the chimney",sub:"Photo 1",pos:[1042,1e3,"eye"],tgt:[1080,1600,"tgt"]},{key:"patioE",name:"Patio, east end",sub:"Photo 2",pos:[1292,1030,"eye"],tgt:[1170,1600,"tgt"]},{key:"back",name:"Back fence, walkway",sub:"Photo 3",pos:[994,1668,"eye"],tgt:[994,950,6]},{key:"corner",name:"Back-right, by the shed",sub:"Near photo 4",pos:[1262,1668,"eye"],tgt:[1010,980,5]},{key:"pool",name:"Lounger on the pad",sub:"Eye level, seated",pos:[1250,1186,3.3],tgt:[1185,1560,.8]},{key:"equip",name:"Pool equipment",sub:"Pump, post, bonding",pos:[1232,1410,6.2],tgt:[1326,1490,.4],under:!0},{key:"subpanel",name:"Behind the shed",sub:"Subpanel",pos:[1383,1668,6],tgt:[1343,1548,2.6],under:!0},{key:"patioOut",name:"Patio outlet",sub:"By the grill",pos:[1352,1150,5],tgt:[1300,1092,1.6],under:!0},{key:"conduit",name:"Conduit route",sub:"Underground",pos:[1381,1585,6],tgt:[1334,1230,-2.4],under:!0},{key:"top",name:"Plan view",sub:"Straight down",pos:[1130,1395,150],tgt:[1130,1394,0]}];function Sx(i){let t=i.pos[2]==="eye"?mn(i.pos[0],i.pos[1])+Ex:i.pos[2],e=i.tgt[2]==="tgt"?t-1.2:i.tgt[2];return{pos:new C(K(i.pos[0]),t,it(i.pos[1])),tgt:new C(K(i.tgt[0]),e,it(i.tgt[1]))}}var Sn=null,Hd=matchMedia("(prefers-reduced-motion: reduce)").matches;function Bl(i,t){let e=zd.find(r=>r.key===i);if(!e)return;lt.view=i,e.under&&!lt.under&&(lt.under=!0,Ol());let{pos:n,tgt:s}=Sx(e);we.fov=i==="top"?40:e.pos[2]==="eye"||i==="pool"?68:50,we.updateProjectionMatrix(),t||Hd?(we.position.copy(n),ce.target.copy(s),ce.update(),Ai()):Sn={t0:performance.now(),p0:we.position.clone(),t0v:ce.target.clone(),p1:n,t1:s},document.querySelectorAll("#views button").forEach(r=>r.setAttribute("aria-pressed",String(r.dataset.key===i))),Ai()}{let i=document.getElementById("views");for(let t of zd){let e=document.createElement("button");e.type="button",e.dataset.key=t.key,e.id="v-"+t.key,e.innerHTML=`${t.name}<small>${t.sub}</small>`,e.onclick=()=>Bl(t.key),i.appendChild(e)}}ce.addEventListener("start",()=>{Sn=null,document.querySelectorAll("#views button").forEach(i=>i.setAttribute("aria-pressed","false"))});function Qi(i,t,e,n,s){let r=be(i);r.value=n(lt[t]),typeof Cl<"u"&&Cl.push([r,t,n]),r.addEventListener("input",()=>{lt[t]=e(+r.value),s(),Or()})}var Cl=[];Qi("g-pad","pad",i=>i*Qt,i=>Math.round(i*12),Wn);Qi("g-step1","step1",i=>i*Qt,i=>Math.round(i*12),Wn);Qi("g-step2","step2",i=>i*Qt,i=>Math.round(i*12),Wn);Qi("g-sink","sink",i=>i*Qt,i=>Math.round(i*12),Wn);Qi("g-cdepth","cdepth",i=>i*Qt,i=>Math.round(i*12),Wn);Qi("g-walk","walkFall",i=>i*Qt,i=>Math.round(i*12),Wn);be("g-reset").addEventListener("click",()=>{Object.assign(lt,ud);for(let[i,t,e]of Cl)t in ud&&(i.value=e(lt[t]));Wn(),Or()});Qi("s-north","north",i=>i,i=>i,Fl);lt.mode="proposed";{let i=[["pool","Pool + pump"],["furniture","Loungers"],["umbrella","Umbrella"],["planters","Pots + boulders"],["shed","Shed"],["electrical","Buried conduit"],["context","Neighbors + trees"]],t=be("layers");for(let[e,n]of i){let s=document.createElement("label");s.innerHTML=`<input type="checkbox" id="l-${e}"${lt.layers[e]?" checked":""}> ${n}`,s.querySelector("input").addEventListener("change",r=>{lt.layers[e]=r.target.checked,Wn(),Or()}),t.appendChild(s)}}function kd(){let{el:i}=Fd(lt.month,lt.time);be("badge").innerHTML=`<b>Late October afternoon</b>${i<=0?" \xB7 sun is down":` \xB7 sun ${Math.round(i*180/Math.PI)}\xB0 up`}`}var bi=!0,aa=!0;function Ai(){bi=!0}function Ma(){De.shadowMap.needsUpdate=!0,bi=!0}var jx=new C,Qx=new C;function bx(){if(!si.context.visible)return!1;let i=we.position,t=ce.target,e=t.x-i.x,n=t.z-i.z,s=e*e+n*n||1e-6,r=Math.sqrt(s),a=!1;for(let o of Ud){let c=an(((o.x-i.x)*e+(o.z-i.z)*n)/s,0,1),l=i.x+e*c,h=i.z+n*c,u=Math.hypot(o.x-l,o.z-h),d=i.y+(t.y-i.y)*c,g=c>0&&c<1&&u<o.rh+r*c*.12&&d<o.top||o.c.distanceTo(i)<o.r*1.05?0:1,_=o.mat.opacity;if(_=Hd?g:_+(g-_)*.3,Math.abs(_-g)<.05?_=g:a=!0,_!==o.mat.opacity){let m=_<.999;for(let p of[o.mat,o.tmat])p.opacity=_,p.colorWrite=_>.02,p.transparent!==m&&(p.transparent=m,p.depthWrite=!m,p.needsUpdate=!0)}}return a}ce.addEventListener("change",Ai);var Pl=new C,Vd=new ra({element:be("labels")});function Gd(){let i=Ir.clientWidth,t=Ir.clientHeight;!i||!t||(De.setSize(i,t,!1),Vd.setSize(i,t),we.aspect=i/t,we.updateProjectionMatrix(),Ai())}new ResizeObserver(Gd).observe(Ir);function Wd(i){if(requestAnimationFrame(Wd),Sn){let t=an((i-Sn.t0)/900,0,1),e=t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;we.position.lerpVectors(Sn.p0,Sn.p1,e),ce.target.lerpVectors(Sn.t0v,Sn.t1,e),t>=1&&(Sn=null),bi=!0}ce.update()&&(bi=!0),(bi||aa)&&(aa=bx(),aa&&(bi=!0)),bi&&(bi=!1,we.getWorldDirection(Pl),Bd(),va.position.copy(we.position),De.render(le,we),lt.under&&(Vd.render(le,we),wx()))}function wx(){let i=[];for(let t of Ws){let e=t.element;if(!t.visible||e.style.display==="none")continue;e.style.opacity="1";let n=e.getBoundingClientRect();if(i.some(s=>n.left<s.right+4&&n.right>s.left-4&&n.top<s.bottom+2&&n.bottom>s.top-2)){e.style.opacity="0";continue}i.push(n)}}var dl=new Zo,yd=new tt,Tx=new C;function Ax(){let i=[];return le.traverse(t=>{if(!(t.isMesh||t.isInstancedMesh)||t===va||!t.visible||bl.includes(t))return;let e=t,n=!1;for(;e;){if(e.visible===!1){n=!0;break}if(e===si.context){n=!0;break}e=e.parent}n||i.push(t)}),i}var fl=null,vd=0;function zl(i,t){let e=De.domElement.getBoundingClientRect();yd.set((i-e.left)/e.width*2-1,-(t-e.top)/e.height*2+1),dl.setFromCamera(yd,we);let n=performance.now();(!fl||n-vd>800)&&(fl=Ax()),vd=n;let s=dl.intersectObjects(fl,!1);for(let r of s){let a=[].concat(r.object.material)[0];if(!(a&&a.opacity<.5&&!lt.under)&&!(a&&a.wireframe))return r.point}return dl.ray.at(Math.max(we.position.distanceTo(ce.target),5),Tx).clone()}var pl=null,ml=[0,0],Md=0;function Xd(i,t){let e=we.position.distanceTo(i);t<1&&e*t<.35&&(t=.35/e),!(t>1&&we.position.distanceTo(ce.target)*t>ce.maxDistance)&&(we.position.sub(i).multiplyScalar(t).add(i),ce.target.sub(i).multiplyScalar(t).add(i),Sn=null,ce.update(),Ai())}Ir.addEventListener("wheel",i=>{i.preventDefault(),i.stopPropagation();let t=performance.now();(!pl||t-Md>220||Math.hypot(i.clientX-ml[0],i.clientY-ml[1])>6)&&(pl=zl(i.clientX,i.clientY),ml=[i.clientX,i.clientY]),Md=t;let e=i.deltaY*(i.deltaMode===1?33:i.deltaMode===2?400:1),n=i.ctrlKey?.022:.0042;Xd(pl,an(Math.exp(e*n),.45,2.2))},{capture:!0,passive:!1});function Yd(i,t){let e=zl(i,t),n=we.position.clone().sub(e),s=n.length(),r=an(s*.3,1.2,30);Sn={t0:performance.now(),p0:we.position.clone(),t0v:ce.target.clone(),p1:e.clone().add(n.multiplyScalar(r/s)),t1:e.clone()},Ai()}De.domElement.addEventListener("dblclick",i=>{i.preventDefault(),Yd(i.clientX,i.clientY)});{let i=0,t=0,e=0;De.domElement.addEventListener("pointerup",n=>{if(n.pointerType!=="touch")return;let s=performance.now();s-i<320&&Math.hypot(n.clientX-t,n.clientY-e)<24?(Yd(n.clientX,n.clientY),i=0):(i=s,t=n.clientX,e=n.clientY)})}function qd(i){let t=De.domElement.getBoundingClientRect();Xd(zl(t.left+t.width/2,t.top+t.height/2),i)}be("z-in").onclick=()=>qd(.55);be("z-out").onclick=()=>qd(1.8);be("xray").onclick=()=>{lt.under=!lt.under,Ol(),Or()};function Fr(i){lt.drag=i;let t=i==="rotate";ce.mouseButtons={LEFT:t?Xe.ROTATE:Xe.PAN,MIDDLE:Xe.DOLLY,RIGHT:t?Xe.PAN:Xe.ROTATE},ce.touches={ONE:t?rn.ROTATE:rn.PAN,TWO:t?rn.DOLLY_PAN:rn.DOLLY_ROTATE},be("d-move").setAttribute("aria-pressed",String(!t)),be("d-rot").setAttribute("aria-pressed",String(t)),Or()}be("d-move").onclick=()=>Fr("move");be("d-rot").onclick=()=>Fr("rotate");addEventListener("keydown",i=>{(i.key==="r"||i.key==="R")&&!i.repeat&&!/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)&&lt.drag!=="rotate"&&(lt._held=!0,Fr("rotate"))});addEventListener("keyup",i=>{(i.key==="r"||i.key==="R")&&lt._held&&(lt._held=!1,Fr("move"))});Fr(lt.drag==="rotate"?"rotate":"move");var Zd=be("prog").firstElementChild,Ll=be("pn-sub");Zd.style.width="45%";Wn();Fl();Gd();Bl("overview",!0);q_();Ol();requestAnimationFrame(Wd);Ll.textContent="Loading ground textures\u2026";Zd.style.width="70%";new Go().load("ground.webp",i=>{i.colorSpace=Re,i.anisotropy=bd;let t=De.capabilities.maxTextureSize;i.minFilter=Hi,Z.ground.map=i,Z.ground.color.set(16777215),Z.ground.needsUpdate=!0,Ma(),Ll.textContent="To scale from the plan \xB7 feet",be("prog").hidden=!0,window.__ready=!0,Ai()},void 0,()=>{Ll.textContent="Ground textures did not load; showing flat colours.",be("prog").hidden=!0,window.__ready=!0});window.__cam=(i,t)=>{Sn=null,we.position.set(K(i[0]),i[2],it(i[1])),ce.target.set(K(t[0]),t[2],it(t[1])),we.fov=55,we.updateProjectionMatrix(),ce.update(),Ai()};window.__goView=Bl;window.__P=lt;window.__update=()=>{Wn(),Fl()};
