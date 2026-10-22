var ul="160",Je={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},hn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ff=0,th=1,pf=2;var Bu=1,dl=2,ti=3,yi=0,He=1,Se=2;var gi=0,Cs=1,eh=2,nh=3,ih=4,mf=5,zi=100,gf=101,_f=102,sh=103,rh=104,xf=200,yf=201,vf=202,Mf=203,Mc=204,Ec=205,Ef=206,Sf=207,bf=208,wf=209,Tf=210,Af=211,Rf=212,Cf=213,Pf=214,Lf=0,If=1,Df=2,Ro=3,Uf=4,Nf=5,Of=6,Ff=7,Hu=0,Bf=1,Hf=2,_i=0,zf=1,kf=2,Vf=3,fl=4,Gf=5,Wf=6;var zu=300,Is=301,Ds=302,Sc=303,bc=304,aa=306,dr=1e3,In=1001,wc=1002,ln=1003,oh=1004;var za=1005;var Sn=1006,Xf=1007;var Xi=1008;var xi=1009,Yf=1010,qf=1011,pl=1012,ku=1013,pi=1014,mi=1015,fr=1016,Vu=1017,Gu=1018,Vi=1020,Zf=1021,Dn=1023,$f=1024,Jf=1025,Gi=1026,Us=1027,Kf=1028,Wu=1029,jf=1030,Xu=1031,Yu=1033,ka=33776,Va=33777,Ga=33778,Wa=33779,ah=35840,ch=35841,lh=35842,hh=35843,qu=36196,uh=37492,dh=37496,fh=37808,ph=37809,mh=37810,gh=37811,_h=37812,xh=37813,yh=37814,vh=37815,Mh=37816,Eh=37817,Sh=37818,bh=37819,wh=37820,Th=37821,Xa=36492,Ah=36494,Rh=36495,Qf=36283,Ch=36284,Ph=36285,Lh=36286;var Co=2300,Po=2301,Ya=2302,Ih=2400,Dh=2401,Uh=2402;var Zu=3e3,Wi=3001,tp=3200,ep=3201,$u=0,np=1,bn="",Ie="srgb",ni="srgb-linear",ml="display-p3",ca="display-p3-linear",Lo="linear",ye="srgb",Io="rec709",Do="p3";var as=7680;var Nh=519,ip=512,sp=513,rp=514,Ju=515,op=516,ap=517,cp=518,lp=519,Oh=35044,Ku=35048;var Fh="300 es",Tc=1035,ei=2e3,Uo=2001,Gn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bh=1234567,or=Math.PI/180,pr=180/Math.PI;function Ki(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qe[i&255]+Qe[i>>8&255]+Qe[i>>16&255]+Qe[i>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[e&63|128]+Qe[e>>8&255]+"-"+Qe[e>>16&255]+Qe[e>>24&255]+Qe[n&255]+Qe[n>>8&255]+Qe[n>>16&255]+Qe[n>>24&255]).toLowerCase()}function Be(i,t,e){return Math.max(t,Math.min(e,i))}function gl(i,t){return(i%t+t)%t}function hp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function up(i,t,e){return i!==t?(e-i)/(t-i):0}function ar(i,t,e){return(1-e)*i+e*t}function dp(i,t,e,n){return ar(i,t,1-Math.exp(-e*n))}function fp(i,t=1){return t-Math.abs(gl(i,t*2)-t)}function pp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function mp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function gp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function _p(i,t){return i+Math.random()*(t-i)}function xp(i){return i*(.5-Math.random())}function yp(i){i!==void 0&&(Bh=i);let t=Bh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function vp(i){return i*or}function Mp(i){return i*pr}function Ac(i){return(i&i-1)===0&&i!==0}function Ep(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function No(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Sp(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),f=a((t-n)/2),d=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,c*u,c*f,o*l);break;case"YZY":i.set(c*f,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*f,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*d,o*l);break;case"YXY":i.set(c*d,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*d,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function bs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function an(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ju={DEG2RAD:or,RAD2DEG:pr,generateUUID:Ki,clamp:Be,euclideanModulo:gl,mapLinear:hp,inverseLerp:up,lerp:ar,damp:dp,pingpong:fp,smoothstep:pp,smootherstep:mp,randInt:gp,randFloat:_p,randFloatSpread:xp,seededRandom:yp,degToRad:vp,radToDeg:Mp,isPowerOfTwo:Ac,ceilPowerOfTwo:Ep,floorPowerOfTwo:No,setQuaternionFromProperEuler:Sp,normalize:an,denormalize:bs},et=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},te=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],y=s[1],x=s[4],M=s[7],b=s[2],T=s[5],w=s[8];return r[0]=a*_+o*y+c*b,r[3]=a*m+o*x+c*T,r[6]=a*p+o*M+c*w,r[1]=l*_+h*y+u*b,r[4]=l*m+h*x+u*T,r[7]=l*p+h*M+u*w,r[2]=f*_+d*y+g*b,r[5]=f*m+d*x+g*T,r[8]=f*p+d*M+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,f=o*c-h*r,d=l*r-a*c,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=f*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-o*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(qa.makeScale(t,e)),this}rotate(t){return this.premultiply(qa.makeRotation(-t)),this}translate(t,e){return this.premultiply(qa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},qa=new te;function Qu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bp(){let i=mr("canvas");return i.style.display="block",i}var Hh={};function cr(i){i in Hh||(Hh[i]=!0,console.warn(i))}var zh=new te().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),kh=new te().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qr={[ni]:{transfer:Lo,primaries:Io,toReference:i=>i,fromReference:i=>i},[Ie]:{transfer:ye,primaries:Io,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ca]:{transfer:Lo,primaries:Do,toReference:i=>i.applyMatrix3(kh),fromReference:i=>i.applyMatrix3(zh)},[ml]:{transfer:ye,primaries:Do,toReference:i=>i.convertSRGBToLinear().applyMatrix3(kh),fromReference:i=>i.applyMatrix3(zh).convertLinearToSRGB()}},wp=new Set([ni,ca]),fe={enabled:!0,_workingColorSpace:ni,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!wp.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Qr[t].toReference,s=Qr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Qr[i].primaries},getTransfer:function(i){return i===bn?Lo:Qr[i].transfer}};function Ps(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Za(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var cs,Oo=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{cs===void 0&&(cs=mr("canvas")),cs.width=t.width,cs.height=t.height;let n=cs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=cs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=mr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ps(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ps(e[n]/255)*255):e[n]=Ps(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Tp=0,Fo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Ki(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push($a(s[a].image)):r.push($a(s[a]))}else r=$a(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function $a(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Oo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ap=0,_n=class i extends Gn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=In,s=In,r=Sn,a=Xi,o=Dn,c=xi,l=i.DEFAULT_ANISOTROPY,h=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=Ki(),this.name="",this.source=new Fo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Wi?Ie:bn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dr:t.x=t.x-Math.floor(t.x);break;case In:t.x=t.x<0?0:1;break;case wc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dr:t.y=t.y-Math.floor(t.y);break;case In:t.y=t.y<0?0:1;break;case wc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ie?Wi:Zu}set encoding(t){cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Wi?Ie:bn}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=zu;_n.DEFAULT_ANISOTROPY=1;var Ee=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(l+1)/2,M=(d+1)/2,b=(p+1)/2,T=(h+f)/4,w=(u+_)/4,L=(g+m)/4;return x>M&&x>b?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=w/n):M>b?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=L/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=w/r,s=L/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(f-h)/y,this.w=Math.acos((l+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Rc=class extends Gn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(cr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Wi?Ie:bn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new _n(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Fo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ii=class extends Rc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Bo=class extends _n{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cc=class extends _n{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],d=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==f||l!==d||h!==g){let m=1-o,p=c*f+l*d+h*g+u*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let b=Math.sqrt(x),T=Math.atan2(b,p*y);m=Math.sin(m*T)/b,o=Math.sin(o*T)/b}let M=o*y;if(c=c*m+f*M,l=l*m+d*M,h=h*m+g*M,u=u*m+_*M,m===1-o){let b=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=b,l*=b,h*=b,u*=b}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*u+c*d-l*f,t[e+1]=c*g+h*f+l*u-o*d,t[e+2]=l*g+h*d+o*f-c*u,t[e+3]=h*g-o*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ja.copy(this).projectOnVector(t),this.sub(Ja)}reflect(t){return this.sub(Ja.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ja=new C,Vh=new xn,si=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Rn):Rn.fromBufferAttribute(r,a),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),to.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),to.copy(n.boundingBox)),to.applyMatrix4(t.matrixWorld),this.union(to)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qs),eo.subVectors(this.max,Qs),ls.subVectors(t.a,Qs),hs.subVectors(t.b,Qs),us.subVectors(t.c,Qs),li.subVectors(hs,ls),hi.subVectors(us,hs),Ni.subVectors(ls,us);let e=[0,-li.z,li.y,0,-hi.z,hi.y,0,-Ni.z,Ni.y,li.z,0,-li.x,hi.z,0,-hi.x,Ni.z,0,-Ni.x,-li.y,li.x,0,-hi.y,hi.x,0,-Ni.y,Ni.x,0];return!Ka(e,ls,hs,us,eo)||(e=[1,0,0,0,1,0,0,0,1],!Ka(e,ls,hs,us,eo))?!1:(no.crossVectors(li,hi),e=[no.x,no.y,no.z],Ka(e,ls,hs,us,eo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},$n=[new C,new C,new C,new C,new C,new C,new C,new C],Rn=new C,to=new si,ls=new C,hs=new C,us=new C,li=new C,hi=new C,Ni=new C,Qs=new C,eo=new C,no=new C,Oi=new C;function Ka(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Oi.fromArray(i,r);let o=s.x*Math.abs(Oi.x)+s.y*Math.abs(Oi.y)+s.z*Math.abs(Oi.z),c=t.dot(Oi),l=e.dot(Oi),h=n.dot(Oi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Rp=new si,tr=new C,ja=new C,vi=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Rp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;tr.subVectors(t,this.center);let e=tr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(tr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ja.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(tr.copy(t.center).add(ja)),this.expandByPoint(tr.copy(t.center).sub(ja))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Jn=new C,Qa=new C,io=new C,ui=new C,tc=new C,so=new C,ec=new C,Yi=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Jn.copy(this.origin).addScaledVector(this.direction,e),Jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Qa.copy(t).add(e).multiplyScalar(.5),io.copy(e).sub(t).normalize(),ui.copy(this.origin).sub(Qa);let r=t.distanceTo(e)*.5,a=-this.direction.dot(io),o=ui.dot(this.direction),c=-ui.dot(io),l=ui.lengthSq(),h=Math.abs(1-a*a),u,f,d,g;if(h>0)if(u=a*c-o,f=a*o-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Qa).addScaledVector(io,f),d}intersectSphere(t,e){Jn.subVectors(t.center,this.origin);let n=Jn.dot(this.direction),s=Jn.dot(Jn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Jn)!==null}intersectTriangle(t,e,n,s,r){tc.subVectors(e,t),so.subVectors(n,t),ec.crossVectors(tc,so);let a=this.direction.dot(ec),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ui.subVectors(this.origin,t);let c=o*this.direction.dot(so.crossVectors(ui,so));if(c<0)return null;let l=o*this.direction.dot(tc.cross(ui));if(l<0||c+l>a)return null;let h=-o*ui.dot(ec);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},he=class i{constructor(t,e,n,s,r,a,o,c,l,h,u,f,d,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,f,d,g,_,m)}set(t,e,n,s,r,a,o,c,l,h,u,f,d,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ds.setFromMatrixColumn(t,0).length(),r=1/ds.setFromMatrixColumn(t,1).length(),a=1/ds.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,d=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=f-_*l,e[9]=-o*c,e[2]=_-f*l,e[6]=g+d*l,e[10]=a*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,g=l*h,_=l*u;e[0]=f+_*o,e[4]=g*o-d,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=_+f*o,e[10]=a*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,g=l*h,_=l*u;e[0]=f-_*o,e[4]=-a*u,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let f=a*h,d=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=g*l-d,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=d*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let f=a*c,d=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){let f=a*c,d=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=a*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=o*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cp,t,Pp)}lookAt(t,e,n){let s=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),di.crossVectors(n,mn),di.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),di.crossVectors(n,mn)),di.normalize(),ro.crossVectors(mn,di),s[0]=di.x,s[4]=ro.x,s[8]=mn.x,s[1]=di.y,s[5]=ro.y,s[9]=mn.y,s[2]=di.z,s[6]=ro.z,s[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],x=n[7],M=n[11],b=n[15],T=s[0],w=s[4],L=s[8],v=s[12],E=s[1],D=s[5],O=s[9],V=s[13],P=s[2],N=s[6],H=s[10],Z=s[14],J=s[3],W=s[7],j=s[11],st=s[15];return r[0]=a*T+o*E+c*P+l*J,r[4]=a*w+o*D+c*N+l*W,r[8]=a*L+o*O+c*H+l*j,r[12]=a*v+o*V+c*Z+l*st,r[1]=h*T+u*E+f*P+d*J,r[5]=h*w+u*D+f*N+d*W,r[9]=h*L+u*O+f*H+d*j,r[13]=h*v+u*V+f*Z+d*st,r[2]=g*T+_*E+m*P+p*J,r[6]=g*w+_*D+m*N+p*W,r[10]=g*L+_*O+m*H+p*j,r[14]=g*v+_*V+m*Z+p*st,r[3]=y*T+x*E+M*P+b*J,r[7]=y*w+x*D+M*N+b*W,r[11]=y*L+x*O+M*H+b*j,r[15]=y*v+x*V+M*Z+b*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*o*f+n*l*f+s*o*d-n*c*d)+_*(+e*c*d-e*l*f+r*a*f-s*a*d+s*l*h-r*c*h)+m*(+e*l*u-e*o*d-r*a*u+n*a*d+r*o*h-n*l*h)+p*(-s*o*h-e*c*u+e*o*f+s*a*u-n*a*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],y=u*m*l-_*f*l+_*c*d-o*m*d-u*c*p+o*f*p,x=g*f*l-h*m*l-g*c*d+a*m*d+h*c*p-a*f*p,M=h*_*l-g*u*l+g*o*d-a*_*d-h*o*p+a*u*p,b=g*u*c-h*_*c-g*o*f+a*_*f+h*o*m-a*u*m,T=e*y+n*x+s*M+r*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/T;return t[0]=y*w,t[1]=(_*f*r-u*m*r-_*s*d+n*m*d+u*s*p-n*f*p)*w,t[2]=(o*m*r-_*c*r+_*s*l-n*m*l-o*s*p+n*c*p)*w,t[3]=(u*c*r-o*f*r-u*s*l+n*f*l+o*s*d-n*c*d)*w,t[4]=x*w,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*w,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*p-e*c*p)*w,t[7]=(a*f*r-h*c*r+h*s*l-e*f*l-a*s*d+e*c*d)*w,t[8]=M*w,t[9]=(g*u*r-h*_*r-g*n*d+e*_*d+h*n*p-e*u*p)*w,t[10]=(a*_*r-g*o*r+g*n*l-e*_*l-a*n*p+e*o*p)*w,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*d-e*o*d)*w,t[12]=b*w,t[13]=(h*_*s-g*u*s+g*n*f-e*_*f-h*n*m+e*u*m)*w,t[14]=(g*o*s-a*_*s-g*n*c+e*_*c+a*n*m-e*o*m)*w,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*f+e*o*f)*w,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,f=r*l,d=r*h,g=r*u,_=a*h,m=a*u,p=o*u,y=c*l,x=c*h,M=c*u,b=n.x,T=n.y,w=n.z;return s[0]=(1-(_+p))*b,s[1]=(d+M)*b,s[2]=(g-x)*b,s[3]=0,s[4]=(d-M)*T,s[5]=(1-(f+p))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(g+x)*w,s[9]=(m-y)*w,s[10]=(1-(f+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ds.set(s[0],s[1],s[2]).length(),a=ds.set(s[4],s[5],s[6]).length(),o=ds.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Cn.copy(this);let l=1/r,h=1/a,u=1/o;return Cn.elements[0]*=l,Cn.elements[1]*=l,Cn.elements[2]*=l,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=u,Cn.elements[9]*=u,Cn.elements[10]*=u,e.setFromRotationMatrix(Cn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=ei){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),d,g;if(o===ei)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Uo)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=ei){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(a-r),f=(e+t)*l,d=(n+s)*h,g,_;if(o===ei)g=(a+r)*u,_=-2*u;else if(o===Uo)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ds=new C,Cn=new he,Cp=new C(0,0,0),Pp=new C(1,1,1),di=new C,ro=new C,mn=new C,Gh=new he,Wh=new xn,Ho=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Gh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wh.setFromEuler(this),this.setFromQuaternion(Wh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ho.DEFAULT_ORDER="XYZ";var gr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Lp=0,Xh=new C,fs=new xn,Kn=new he,oo=new C,er=new C,Ip=new C,Dp=new xn,Yh=new C(1,0,0),qh=new C(0,1,0),Zh=new C(0,0,1),Up={type:"added"},Np={type:"removed"},qe=class i extends Gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new C,e=new Ho,n=new xn,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new te}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(Yh,t)}rotateY(t){return this.rotateOnAxis(qh,t)}rotateZ(t){return this.rotateOnAxis(Zh,t)}translateOnAxis(t,e){return Xh.copy(t).applyQuaternion(this.quaternion),this.position.add(Xh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yh,t)}translateY(t){return this.translateOnAxis(qh,t)}translateZ(t){return this.translateOnAxis(Zh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?oo.copy(t):oo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(er,oo,this.up):Kn.lookAt(oo,er,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),fs.setFromRotationMatrix(Kn),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Up)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Np)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Kn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,t,Ip),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,Dp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};qe.DEFAULT_UP=new C(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pn=new C,jn=new C,nc=new C,Qn=new C,ps=new C,ms=new C,$h=new C,ic=new C,sc=new C,rc=new C,ao=!1,ws=class i{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Pn.subVectors(t,e),s.cross(Pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Pn.subVectors(s,e),jn.subVectors(n,e),nc.subVectors(t,e);let a=Pn.dot(Pn),o=Pn.dot(jn),c=Pn.dot(nc),l=jn.dot(jn),h=jn.dot(nc),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-o*h)*f,g=(a*h-o*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getUV(t,e,n,s,r,a,o,c){return ao===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ao=!0),this.getInterpolation(t,e,n,s,r,a,o,c)}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Qn.x),c.addScaledVector(a,Qn.y),c.addScaledVector(o,Qn.z),c)}static isFrontFacing(t,e,n,s){return Pn.subVectors(n,e),jn.subVectors(t,e),Pn.cross(jn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Pn.cross(jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return ao===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ao=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ps.subVectors(s,n),ms.subVectors(r,n),ic.subVectors(t,n);let c=ps.dot(ic),l=ms.dot(ic);if(c<=0&&l<=0)return e.copy(n);sc.subVectors(t,s);let h=ps.dot(sc),u=ms.dot(sc);if(h>=0&&u<=h)return e.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(ps,a);rc.subVectors(t,r);let d=ps.dot(rc),g=ms.dot(rc);if(g>=0&&d<=g)return e.copy(r);let _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(ms,o);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return $h.subVectors(r,s),o=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector($h,o);let p=1/(m+_+f);return a=_*p,o=f*p,e.copy(n).addScaledVector(ps,a).addScaledVector(ms,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},td={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},co={h:0,s:0,l:0};function oc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ut=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,fe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=fe.workingColorSpace){if(t=gl(t,1),e=Be(e,0,1),n=Be(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=oc(a,r,t+1/3),this.g=oc(a,r,t),this.b=oc(a,r,t-1/3)}return fe.toWorkingColorSpace(this,s),this}setStyle(t,e=Ie){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){let n=td[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ps(t.r),this.g=Ps(t.g),this.b=Ps(t.b),this}copyLinearToSRGB(t){return this.r=Za(t.r),this.g=Za(t.g),this.b=Za(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return fe.fromWorkingColorSpace(tn.copy(this),t),Math.round(Be(tn.r*255,0,255))*65536+Math.round(Be(tn.g*255,0,255))*256+Math.round(Be(tn.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.fromWorkingColorSpace(tn.copy(this),e);let n=tn.r,s=tn.g,r=tn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=fe.workingColorSpace){return fe.fromWorkingColorSpace(tn.copy(this),e),t.r=tn.r,t.g=tn.g,t.b=tn.b,t}getStyle(t=Ie){fe.fromWorkingColorSpace(tn.copy(this),t);let e=tn.r,n=tn.g,s=tn.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(co);let n=ar(fi.h,co.h,e),s=ar(fi.s,co.s,e),r=ar(fi.l,co.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new Ut;Ut.NAMES=td;var Op=0,Mi=class extends Gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=Cs,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mc,this.blendDst=Ec,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(n.blending=this.blending),this.side!==yi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Mc&&(n.blendSrc=this.blendSrc),this.blendDst!==Ec&&(n.blendDst=this.blendDst),this.blendEquation!==zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ro&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(n.stencilFail=this.stencilFail),this.stencilZFail!==as&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ri=class extends Mi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Oe=new C,lo=new et,me=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Oh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)lo.fromBufferAttribute(this,e),lo.applyMatrix3(t),this.setXY(e,lo.x,lo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=bs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=an(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=bs(e,this.array)),e}setX(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=bs(e,this.array)),e}setY(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=bs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=bs(e,this.array)),e}setW(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),n=an(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),n=an(n,this.array),s=an(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),n=an(n,this.array),s=an(s,this.array),r=an(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Oh&&(t.usage=this.usage),t}};var zo=class extends me{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ko=class extends me{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Nt=class extends me{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Fp=0,En=new he,ac=new qe,gs=new C,gn=new si,nr=new si,Ye=new C,pe=class i extends Gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qu(t)?ko:zo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,n){return En.makeTranslation(t,e,n),this.applyMatrix4(En),this}scale(t,e,n){return En.makeScale(t,e,n),this.applyMatrix4(En),this}lookAt(t){return ac.lookAt(t),ac.updateMatrix(),this.applyMatrix4(ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Nt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];nr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ye.addVectors(gn.min,nr.min),gn.expandByPoint(Ye),Ye.addVectors(gn.max,nr.max),gn.expandByPoint(Ye)):(gn.expandByPoint(nr.min),gn.expandByPoint(nr.max))}gn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ye.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ye));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ye.fromBufferAttribute(o,l),c&&(gs.fromBufferAttribute(t,l),Ye.add(gs)),s=Math.max(s,n.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new me(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let E=0;E<o;E++)l[E]=new C,h[E]=new C;let u=new C,f=new C,d=new C,g=new et,_=new et,m=new et,p=new C,y=new C;function x(E,D,O){u.fromArray(s,E*3),f.fromArray(s,D*3),d.fromArray(s,O*3),g.fromArray(a,E*2),_.fromArray(a,D*2),m.fromArray(a,O*2),f.sub(u),d.sub(u),_.sub(g),m.sub(g);let V=1/(_.x*m.y-m.x*_.y);isFinite(V)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-_.y).multiplyScalar(V),y.copy(d).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(V),l[E].add(p),l[D].add(p),l[O].add(p),h[E].add(y),h[D].add(y),h[O].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let E=0,D=M.length;E<D;++E){let O=M[E],V=O.start,P=O.count;for(let N=V,H=V+P;N<H;N+=3)x(n[N+0],n[N+1],n[N+2])}let b=new C,T=new C,w=new C,L=new C;function v(E){w.fromArray(r,E*3),L.copy(w);let D=l[E];b.copy(D),b.sub(w.multiplyScalar(w.dot(D))).normalize(),T.crossVectors(L,D);let V=T.dot(h[E])<0?-1:1;c[E*4]=b.x,c[E*4+1]=b.y,c[E*4+2]=b.z,c[E*4+3]=V}for(let E=0,D=M.length;E<D;++E){let O=M[E],V=O.start,P=O.count;for(let N=V,H=V+P;N<H;N+=3)v(n[N+0]),v(n[N+1]),v(n[N+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new me(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new C,r=new C,a=new C,o=new C,c=new C,l=new C,h=new C,u=new C;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ye.fromBufferAttribute(t,e),Ye.normalize(),t.setXYZ(e,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?d=c[_]*o.data.stride+o.offset:d=c[_]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new me(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jh=new he,Fi=new Yi,ho=new vi,Kh=new C,_s=new C,xs=new C,ys=new C,cc=new C,uo=new C,fo=new et,po=new et,mo=new et,jh=new C,Qh=new C,tu=new C,go=new C,_o=new C,K=class extends qe{constructor(t=new pe,e=new ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){uo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(cc.fromBufferAttribute(u,t),a?uo.addScaledVector(cc,h):uo.addScaledVector(cc.sub(e),h))}e.add(uo)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(r),Fi.copy(t.ray).recast(t.near),!(ho.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(ho,Kh)===null||Fi.origin.distanceToSquared(Kh)>(t.far-t.near)**2))&&(Jh.copy(r).invert(),Fi.copy(t.ray).applyMatrix4(Jh),!(n.boundingBox!==null&&Fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Fi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let M=y,b=x;M<b;M+=3){let T=o.getX(M),w=o.getX(M+1),L=o.getX(M+2);s=xo(this,p,t,n,l,h,u,T,w,L),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let y=o.getX(m),x=o.getX(m+1),M=o.getX(m+2);s=xo(this,a,t,n,l,h,u,y,x,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let M=y,b=x;M<b;M+=3){let T=M,w=M+1,L=M+2;s=xo(this,p,t,n,l,h,u,T,w,L),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let y=m,x=m+1,M=m+2;s=xo(this,a,t,n,l,h,u,y,x,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Bp(i,t,e,n,s,r,a,o){let c;if(t.side===He?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===yi,o),c===null)return null;_o.copy(o),_o.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(_o);return l<e.near||l>e.far?null:{distance:l,point:_o.clone(),object:i}}function xo(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,_s),i.getVertexPosition(c,xs),i.getVertexPosition(l,ys);let h=Bp(i,t,e,n,_s,xs,ys,go);if(h){s&&(fo.fromBufferAttribute(s,o),po.fromBufferAttribute(s,c),mo.fromBufferAttribute(s,l),h.uv=ws.getInterpolation(go,_s,xs,ys,fo,po,mo,new et)),r&&(fo.fromBufferAttribute(r,o),po.fromBufferAttribute(r,c),mo.fromBufferAttribute(r,l),h.uv1=ws.getInterpolation(go,_s,xs,ys,fo,po,mo,new et),h.uv2=h.uv1),a&&(jh.fromBufferAttribute(a,o),Qh.fromBufferAttribute(a,c),tu.fromBufferAttribute(a,l),h.normal=ws.getInterpolation(go,_s,xs,ys,jh,Qh,tu,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new C,materialIndex:0};ws.getNormal(_s,xs,ys,u.normal),h.face=u}return h}var Pe=class i extends pe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Nt(l,3)),this.setAttribute("normal",new Nt(h,3)),this.setAttribute("uv",new Nt(u,2));function g(_,m,p,y,x,M,b,T,w,L,v){let E=M/w,D=b/L,O=M/2,V=b/2,P=T/2,N=w+1,H=L+1,Z=0,J=0,W=new C;for(let j=0;j<H;j++){let st=j*D-V;for(let gt=0;gt<N;gt++){let X=gt*E-O;W[_]=X*y,W[m]=st*x,W[p]=P,l.push(W.x,W.y,W.z),W[_]=0,W[m]=0,W[p]=T>0?1:-1,h.push(W.x,W.y,W.z),u.push(gt/w),u.push(1-j/L),Z+=1}}for(let j=0;j<L;j++)for(let st=0;st<w;st++){let gt=f+st+N*j,X=f+st+N*(j+1),Q=f+(st+1)+N*(j+1),_t=f+(st+1)+N*j;c.push(gt,X,_t),c.push(X,Q,_t),J+=6}o.addGroup(d,J,v),d+=J,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ns(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function cn(i){let t={};for(let e=0;e<i.length;e++){let n=Ns(i[e]);for(let s in n)t[s]=n[s]}return t}function Hp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ed(i){return i.getRenderTarget()===null?i.outputColorSpace:fe.workingColorSpace}var zp={clone:Ns,merge:cn},kp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Nn=class extends Mi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kp,this.fragmentShader=Vp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ns(t.uniforms),this.uniformsGroups=Hp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Vo=class extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=ei}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},en=class extends Vo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=pr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(or*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pr*2*Math.atan(Math.tan(or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(or*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},vs=-90,Ms=1,Pc=class extends qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new en(vs,Ms,t,e);s.layers=this.layers,this.add(s);let r=new en(vs,Ms,t,e);r.layers=this.layers,this.add(r);let a=new en(vs,Ms,t,e);a.layers=this.layers,this.add(a);let o=new en(vs,Ms,t,e);o.layers=this.layers,this.add(o);let c=new en(vs,Ms,t,e);c.layers=this.layers,this.add(c);let l=new en(vs,Ms,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Uo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Go=class extends _n{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Is,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Lc=class extends ii{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(cr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Wi?Ie:bn),this.texture=new Go(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pe(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:Ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:gi});r.uniforms.tEquirect.value=e;let a=new K(s,r),o=e.minFilter;return e.minFilter===Xi&&(e.minFilter=Sn),new Pc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},lc=new C,Gp=new C,Wp=new te,Ln=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=lc.subVectors(n,e).cross(Gp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(lc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Wp.getNormalMatrix(t),s=this.coplanarPoint(lc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Bi=new vi,yo=new C,_r=class{constructor(t=new Ln,e=new Ln,n=new Ln,s=new Ln,r=new Ln,a=new Ln){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ei){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],y=s[13],x=s[14],M=s[15];if(n[0].setComponents(c-r,f-l,m-d,M-p).normalize(),n[1].setComponents(c+r,f+l,m+d,M+p).normalize(),n[2].setComponents(c+a,f+h,m+g,M+y).normalize(),n[3].setComponents(c-a,f-h,m-g,M-y).normalize(),n[4].setComponents(c-o,f-u,m-_,M-x).normalize(),e===ei)n[5].setComponents(c+o,f+u,m+_,M+x).normalize();else if(e===Uo)n[5].setComponents(o,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(t){return Bi.center.set(0,0,0),Bi.radius=.7071067811865476,Bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(yo.x=s.normal.x>0?t.max.x:t.min.x,yo.y=s.normal.y>0?t.max.y:t.min.y,yo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(yo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function nd(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Xp(i,t){let e=t.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,f=l.usage,d=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,f),l.onUploadCallback();let _;if(u instanceof Float32Array)_=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=i.SHORT;else if(u instanceof Uint32Array)_=i.UNSIGNED_INT;else if(u instanceof Int32Array)_=i.INT;else if(u instanceof Int8Array)_=i.BYTE;else if(u instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:d}}function r(l,h,u){let f=h.array,d=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,l),d.count===-1&&g.length===0&&i.bufferSubData(u,0,f),g.length!==0){for(let _=0,m=g.length;_<m;_++){let p=g[_];e?i.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):i.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(e?i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:a,remove:o,update:c}}var nn=class i extends pe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,f=e/c,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let y=p*f-a;for(let x=0;x<l;x++){let M=x*u-r;g.push(M,-y,0),_.push(0,0,1),m.push(x/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){let x=y+l*p,M=y+l*(p+1),b=y+1+l*(p+1),T=y+1+l*p;d.push(x,M,T),d.push(M,b,T)}this.setIndex(d),this.setAttribute("position",new Nt(g,3)),this.setAttribute("normal",new Nt(_,3)),this.setAttribute("uv",new Nt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Yp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qp=`#ifdef USE_ALPHAHASH
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
#endif`,Zp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$p=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Kp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jp=`#ifdef USE_AOMAP
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
#endif`,Qp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tm=`#ifdef USE_BATCHING
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
#endif`,em=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,nm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,im=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rm=`#ifdef USE_IRIDESCENCE
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
#endif`,om=`#ifdef USE_BUMPMAP
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
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,um=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,mm=`#define PI 3.141592653589793
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
} // validated`,gm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_m=`vec3 transformedNormal = objectNormal;
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
#endif`,xm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ym=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Em="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sm=`
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
}`,bm=`#ifdef USE_ENVMAP
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
#endif`,wm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tm=`#ifdef USE_ENVMAP
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
#endif`,Am=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rm=`#ifdef USE_ENVMAP
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
#endif`,Cm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Im=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dm=`#ifdef USE_GRADIENTMAP
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
}`,Um=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Nm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Om=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bm=`uniform bool receiveShadow;
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
#endif`,Hm=`#ifdef USE_ENVMAP
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
#endif`,zm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wm=`PhysicalMaterial material;
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
#endif`,Xm=`struct PhysicalMaterial {
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
}`,Ym=`
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
#endif`,qm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$m=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Km=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,jm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Qm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,t0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,e0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,n0=`#if defined( USE_POINTS_UV )
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
#endif`,i0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,s0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,r0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,o0=`#ifdef USE_MORPHNORMALS
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
#endif`,a0=`#ifdef USE_MORPHTARGETS
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
#endif`,c0=`#ifdef USE_MORPHTARGETS
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
#endif`,l0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,h0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,u0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,p0=`#ifdef USE_NORMALMAP
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
#endif`,m0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,g0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,x0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,y0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,M0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,E0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,S0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,w0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,R0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,C0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,P0=`float getShadowMask() {
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
}`,L0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,I0=`#ifdef USE_SKINNING
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
#endif`,D0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,U0=`#ifdef USE_SKINNING
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
#endif`,N0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,B0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,H0=`#ifdef USE_TRANSMISSION
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
#endif`,z0=`#ifdef USE_TRANSMISSION
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
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,X0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Y0=`uniform sampler2D t2D;
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
}`,q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K0=`#include <common>
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
}`,j0=`#if DEPTH_PACKING == 3200
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
}`,Q0=`#define DISTANCE
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
}`,tg=`#define DISTANCE
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
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ng=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ig=`uniform float scale;
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
}`,sg=`uniform vec3 diffuse;
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
}`,rg=`#include <common>
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
}`,og=`uniform vec3 diffuse;
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
}`,ag=`#define LAMBERT
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
}`,cg=`#define LAMBERT
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
}`,lg=`#define MATCAP
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
}`,hg=`#define MATCAP
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
}`,ug=`#define NORMAL
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
}`,dg=`#define NORMAL
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
}`,fg=`#define PHONG
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
}`,pg=`#define PHONG
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
}`,mg=`#define STANDARD
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
}`,gg=`#define STANDARD
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
}`,_g=`#define TOON
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
}`,xg=`#define TOON
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
}`,yg=`uniform float size;
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
}`,vg=`uniform vec3 diffuse;
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
}`,Mg=`#include <common>
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
}`,Eg=`uniform vec3 color;
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
}`,Sg=`uniform float rotation;
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
}`,bg=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:Yp,alphahash_pars_fragment:qp,alphamap_fragment:Zp,alphamap_pars_fragment:$p,alphatest_fragment:Jp,alphatest_pars_fragment:Kp,aomap_fragment:jp,aomap_pars_fragment:Qp,batching_pars_vertex:tm,batching_vertex:em,begin_vertex:nm,beginnormal_vertex:im,bsdfs:sm,iridescence_fragment:rm,bumpmap_pars_fragment:om,clipping_planes_fragment:am,clipping_planes_pars_fragment:cm,clipping_planes_pars_vertex:lm,clipping_planes_vertex:hm,color_fragment:um,color_pars_fragment:dm,color_pars_vertex:fm,color_vertex:pm,common:mm,cube_uv_reflection_fragment:gm,defaultnormal_vertex:_m,displacementmap_pars_vertex:xm,displacementmap_vertex:ym,emissivemap_fragment:vm,emissivemap_pars_fragment:Mm,colorspace_fragment:Em,colorspace_pars_fragment:Sm,envmap_fragment:bm,envmap_common_pars_fragment:wm,envmap_pars_fragment:Tm,envmap_pars_vertex:Am,envmap_physical_pars_fragment:Hm,envmap_vertex:Rm,fog_vertex:Cm,fog_pars_vertex:Pm,fog_fragment:Lm,fog_pars_fragment:Im,gradientmap_pars_fragment:Dm,lightmap_fragment:Um,lightmap_pars_fragment:Nm,lights_lambert_fragment:Om,lights_lambert_pars_fragment:Fm,lights_pars_begin:Bm,lights_toon_fragment:zm,lights_toon_pars_fragment:km,lights_phong_fragment:Vm,lights_phong_pars_fragment:Gm,lights_physical_fragment:Wm,lights_physical_pars_fragment:Xm,lights_fragment_begin:Ym,lights_fragment_maps:qm,lights_fragment_end:Zm,logdepthbuf_fragment:$m,logdepthbuf_pars_fragment:Jm,logdepthbuf_pars_vertex:Km,logdepthbuf_vertex:jm,map_fragment:Qm,map_pars_fragment:t0,map_particle_fragment:e0,map_particle_pars_fragment:n0,metalnessmap_fragment:i0,metalnessmap_pars_fragment:s0,morphcolor_vertex:r0,morphnormal_vertex:o0,morphtarget_pars_vertex:a0,morphtarget_vertex:c0,normal_fragment_begin:l0,normal_fragment_maps:h0,normal_pars_fragment:u0,normal_pars_vertex:d0,normal_vertex:f0,normalmap_pars_fragment:p0,clearcoat_normal_fragment_begin:m0,clearcoat_normal_fragment_maps:g0,clearcoat_pars_fragment:_0,iridescence_pars_fragment:x0,opaque_fragment:y0,packing:v0,premultiplied_alpha_fragment:M0,project_vertex:E0,dithering_fragment:S0,dithering_pars_fragment:b0,roughnessmap_fragment:w0,roughnessmap_pars_fragment:T0,shadowmap_pars_fragment:A0,shadowmap_pars_vertex:R0,shadowmap_vertex:C0,shadowmask_pars_fragment:P0,skinbase_vertex:L0,skinning_pars_vertex:I0,skinning_vertex:D0,skinnormal_vertex:U0,specularmap_fragment:N0,specularmap_pars_fragment:O0,tonemapping_fragment:F0,tonemapping_pars_fragment:B0,transmission_fragment:H0,transmission_pars_fragment:z0,uv_pars_fragment:k0,uv_pars_vertex:V0,uv_vertex:G0,worldpos_vertex:W0,background_vert:X0,background_frag:Y0,backgroundCube_vert:q0,backgroundCube_frag:Z0,cube_vert:$0,cube_frag:J0,depth_vert:K0,depth_frag:j0,distanceRGBA_vert:Q0,distanceRGBA_frag:tg,equirect_vert:eg,equirect_frag:ng,linedashed_vert:ig,linedashed_frag:sg,meshbasic_vert:rg,meshbasic_frag:og,meshlambert_vert:ag,meshlambert_frag:cg,meshmatcap_vert:lg,meshmatcap_frag:hg,meshnormal_vert:ug,meshnormal_frag:dg,meshphong_vert:fg,meshphong_frag:pg,meshphysical_vert:mg,meshphysical_frag:gg,meshtoon_vert:_g,meshtoon_frag:xg,points_vert:yg,points_frag:vg,shadow_vert:Mg,shadow_frag:Eg,sprite_vert:Sg,sprite_frag:bg},mt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},Vn={basic:{uniforms:cn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:cn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:cn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:cn([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:cn([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:cn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:cn([mt.points,mt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:cn([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:cn([mt.common,mt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:cn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:cn([mt.sprite,mt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:cn([mt.common,mt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:cn([mt.lights,mt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Vn.physical={uniforms:cn([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var vo={r:0,b:0,g:0};function wg(i,t,e,n,s,r,a){let o=new Ut(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(m,p){let y=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?_(o,c):x&&x.isColor&&(_(x,1),y=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===aa)?(h===void 0&&(h=new K(new Pe(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Ns(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=fe.getTransfer(x.colorSpace)!==ye,(u!==x||f!==x.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new K(new nn(2,2),new Nn({name:"BackgroundMaterial",uniforms:Ns(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=fe.getTransfer(x.colorSpace)!==ye,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,d=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,p){m.getRGB(vo,ed(i)),n.buffers.color.setClear(vo.r,vo.g,vo.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),c=p,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(o,c)},render:g}}function Tg(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=m(null),l=c,h=!1;function u(P,N,H,Z,J){let W=!1;if(a){let j=_(Z,H,N);l!==j&&(l=j,d(l.object)),W=p(P,Z,H,J),W&&y(P,Z,H,J)}else{let j=N.wireframe===!0;(l.geometry!==Z.id||l.program!==H.id||l.wireframe!==j)&&(l.geometry=Z.id,l.program=H.id,l.wireframe=j,W=!0)}J!==null&&e.update(J,i.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,L(P,N,H,Z),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function d(P){return n.isWebGL2?i.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?i.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function _(P,N,H){let Z=H.wireframe===!0,J=o[P.id];J===void 0&&(J={},o[P.id]=J);let W=J[N.id];W===void 0&&(W={},J[N.id]=W);let j=W[Z];return j===void 0&&(j=m(f()),W[Z]=j),j}function m(P){let N=[],H=[],Z=[];for(let J=0;J<s;J++)N[J]=0,H[J]=0,Z[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:H,attributeDivisors:Z,object:P,attributes:{},index:null}}function p(P,N,H,Z){let J=l.attributes,W=N.attributes,j=0,st=H.getAttributes();for(let gt in st)if(st[gt].location>=0){let Q=J[gt],_t=W[gt];if(_t===void 0&&(gt==="instanceMatrix"&&P.instanceMatrix&&(_t=P.instanceMatrix),gt==="instanceColor"&&P.instanceColor&&(_t=P.instanceColor)),Q===void 0||Q.attribute!==_t||_t&&Q.data!==_t.data)return!0;j++}return l.attributesNum!==j||l.index!==Z}function y(P,N,H,Z){let J={},W=N.attributes,j=0,st=H.getAttributes();for(let gt in st)if(st[gt].location>=0){let Q=W[gt];Q===void 0&&(gt==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),gt==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor));let _t={};_t.attribute=Q,Q&&Q.data&&(_t.data=Q.data),J[gt]=_t,j++}l.attributes=J,l.attributesNum=j,l.index=Z}function x(){let P=l.newAttributes;for(let N=0,H=P.length;N<H;N++)P[N]=0}function M(P){b(P,0)}function b(P,N){let H=l.newAttributes,Z=l.enabledAttributes,J=l.attributeDivisors;H[P]=1,Z[P]===0&&(i.enableVertexAttribArray(P),Z[P]=1),J[P]!==N&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,N),J[P]=N)}function T(){let P=l.newAttributes,N=l.enabledAttributes;for(let H=0,Z=N.length;H<Z;H++)N[H]!==P[H]&&(i.disableVertexAttribArray(H),N[H]=0)}function w(P,N,H,Z,J,W,j){j===!0?i.vertexAttribIPointer(P,N,H,J,W):i.vertexAttribPointer(P,N,H,Z,J,W)}function L(P,N,H,Z){if(n.isWebGL2===!1&&(P.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let J=Z.attributes,W=H.getAttributes(),j=N.defaultAttributeValues;for(let st in W){let gt=W[st];if(gt.location>=0){let X=J[st];if(X===void 0&&(st==="instanceMatrix"&&P.instanceMatrix&&(X=P.instanceMatrix),st==="instanceColor"&&P.instanceColor&&(X=P.instanceColor)),X!==void 0){let Q=X.normalized,_t=X.itemSize,Et=e.get(X);if(Et===void 0)continue;let St=Et.buffer,Ot=Et.type,Bt=Et.bytesPerElement,Lt=n.isWebGL2===!0&&(Ot===i.INT||Ot===i.UNSIGNED_INT||X.gpuType===ku);if(X.isInterleavedBufferAttribute){let Mt=X.data,F=Mt.stride,Zt=X.offset;if(Mt.isInstancedInterleavedBuffer){for(let bt=0;bt<gt.locationSize;bt++)b(gt.location+bt,Mt.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let bt=0;bt<gt.locationSize;bt++)M(gt.location+bt);i.bindBuffer(i.ARRAY_BUFFER,St);for(let bt=0;bt<gt.locationSize;bt++)w(gt.location+bt,_t/gt.locationSize,Ot,Q,F*Bt,(Zt+_t/gt.locationSize*bt)*Bt,Lt)}else{if(X.isInstancedBufferAttribute){for(let Mt=0;Mt<gt.locationSize;Mt++)b(gt.location+Mt,X.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Mt=0;Mt<gt.locationSize;Mt++)M(gt.location+Mt);i.bindBuffer(i.ARRAY_BUFFER,St);for(let Mt=0;Mt<gt.locationSize;Mt++)w(gt.location+Mt,_t/gt.locationSize,Ot,Q,_t*Bt,_t/gt.locationSize*Mt*Bt,Lt)}}else if(j!==void 0){let Q=j[st];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(gt.location,Q);break;case 3:i.vertexAttrib3fv(gt.location,Q);break;case 4:i.vertexAttrib4fv(gt.location,Q);break;default:i.vertexAttrib1fv(gt.location,Q)}}}}T()}function v(){O();for(let P in o){let N=o[P];for(let H in N){let Z=N[H];for(let J in Z)g(Z[J].object),delete Z[J];delete N[H]}delete o[P]}}function E(P){if(o[P.id]===void 0)return;let N=o[P.id];for(let H in N){let Z=N[H];for(let J in Z)g(Z[J].object),delete Z[J];delete N[H]}delete o[P.id]}function D(P){for(let N in o){let H=o[N];if(H[P.id]===void 0)continue;let Z=H[P.id];for(let J in Z)g(Z[J].object),delete Z[J];delete H[P.id]}}function O(){V(),h=!0,l!==c&&(l=c,d(l.object))}function V(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:O,resetDefaultState:V,dispose:v,releaseStatesOfGeometry:E,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:M,disableUnusedAttributes:T}}function Ag(i,t,e,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function c(h,u,f){if(f===0)return;let d,g;if(s)d=i,g="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,h,u,f),e.update(u,r,f)}function l(h,u,f){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function Rg(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,M=a||t.has("OES_texture_float"),b=x&&M,T=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:b,maxSamples:T}}function Cg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Ln,o=new te,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let y=r?0:n,x=y*4,M=p.clippingState||null;c.value=M,M=h(g,f,x,d);for(let b=0;b!==x;++b)M[b]=e[b];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let p=d+_*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,M=d;x!==_;++x,M+=4)a.copy(u[x]).applyMatrix4(y,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Pg(i){let t=new WeakMap;function e(a,o){return o===Sc?a.mapping=Is:o===bc&&(a.mapping=Ds),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Sc||o===bc)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Lc(c.height/2);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Wo=class extends Vo{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ts=4,eu=[.125,.215,.35,.446,.526,.582],ki=20,hc=new Wo,nu=new Ut,uc=null,dc=0,fc=0,Hi=(1+Math.sqrt(5))/2,Es=1/Hi,iu=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Hi,Es),new C(0,Hi,-Es),new C(Es,0,Hi),new C(-Es,0,Hi),new C(Hi,Es,0),new C(-Hi,Es,0)],Os=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){uc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ou(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ru(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(uc,dc,fc),t.scissorTest=!1,Mo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Is||t.mapping===Ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),uc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:fr,format:Dn,colorSpace:ni,depthBuffer:!1},s=su(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=su(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lg(r)),this._blurMaterial=Ig(r,t,e)}return s}_compileMaterial(t){let e=new K(this._lodPlanes[0],t);this._renderer.compile(e,hc)}_sceneToCubeUV(t,e,n,s){let o=new en(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(nu),h.toneMapping=_i,h.autoClear=!1;let d=new ri({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),g=new K(new Pe,d),_=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(nu),_=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):y===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));let x=this._cubeSize;Mo(s,y*x,p>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Is||t.mapping===Ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ou()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ru());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new K(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Mo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,hc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=iu[(s-1)%iu.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new K(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ki-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ki;m>ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ki}`);let p=[],y=0;for(let w=0;w<ki;++w){let L=w/_,v=Math.exp(-L*L/2);p.push(v),w===0?y+=v:w<m&&(y+=2*v)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;let M=this._sizeLods[s],b=3*M*(s>x-Ts?s-x+Ts:0),T=4*(this._cubeSize-M);Mo(e,b,T,3*M,2*M),c.setRenderTarget(e),c.render(u,hc)}};function Lg(i){let t=[],e=[],n=[],s=i,r=i-Ts+1+eu.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Ts?c=eu[a-i+Ts-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*d),x=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let T=0;T<d;T++){let w=T%3*2/3-1,L=T>2?0:-1,v=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];y.set(v,_*g*T),x.set(f,m*g*T);let E=[T,T,T,T,T,T];M.set(E,p*g*T)}let b=new pe;b.setAttribute("position",new me(y,_)),b.setAttribute("uv",new me(x,m)),b.setAttribute("faceIndex",new me(M,p)),t.push(b),s>Ts&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function su(i,t,e){let n=new ii(i,t,e);return n.texture.mapping=aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Mo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Ig(i,t,e){let n=new Float32Array(ki),s=new C(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_l(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function ru(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_l(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function ou(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function _l(){return`

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
	`}function Dg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Sc||c===bc,h=c===Is||c===Ds;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new Os(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(l&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Os(i));let f=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Ug(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ng(i,t,e,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",a),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(u){let f=[],d=u.index,g=u.attributes.position,_=0;if(d!==null){let y=d.array;_=d.version;for(let x=0,M=y.length;x<M;x+=3){let b=y[x+0],T=y[x+1],w=y[x+2];f.push(b,T,T,w,w,b)}}else if(g!==void 0){let y=g.array;_=g.version;for(let x=0,M=y.length/3-1;x<M;x+=3){let b=x+0,T=x+1,w=x+2;f.push(b,T,T,w,w,b)}}else return;let m=new(Qu(f)?ko:zo)(f,1);m.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Og(i,t,e,n){let s=n.isWebGL2,r;function a(d){r=d}let o,c;function l(d){o=d.type,c=d.bytesPerElement}function h(d,g){i.drawElements(r,g,o,d*c),e.update(g,r,1)}function u(d,g,_){if(_===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,d*c,_),e.update(g,r,_)}function f(d,g,_){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(d[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,d,0,_);let p=0;for(let y=0;y<_;y++)p+=g[y];e.update(p,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function Fg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Bg(i,t){return i[0]-t[0]}function Hg(i,t){return Math.abs(t[1])-Math.abs(i[1])}function zg(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,a=new Ee,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){let f=l.morphTargetInfluences;if(t.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=d!==void 0?d.length:0,_=r.get(h);if(_===void 0||_.count!==g){let P=function(){O.dispose(),r.delete(h),h.removeEventListener("dispose",P)};_!==void 0&&_.texture.dispose();let y=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],w=h.morphAttributes.color||[],L=0;y===!0&&(L=1),x===!0&&(L=2),M===!0&&(L=3);let v=h.attributes.position.count*L,E=1;v>t.maxTextureSize&&(E=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let D=new Float32Array(v*E*4*g),O=new Bo(D,v,E,g);O.type=mi,O.needsUpdate=!0;let V=L*4;for(let N=0;N<g;N++){let H=b[N],Z=T[N],J=w[N],W=v*E*4*N;for(let j=0;j<H.count;j++){let st=j*V;y===!0&&(a.fromBufferAttribute(H,j),D[W+st+0]=a.x,D[W+st+1]=a.y,D[W+st+2]=a.z,D[W+st+3]=0),x===!0&&(a.fromBufferAttribute(Z,j),D[W+st+4]=a.x,D[W+st+5]=a.y,D[W+st+6]=a.z,D[W+st+7]=0),M===!0&&(a.fromBufferAttribute(J,j),D[W+st+8]=a.x,D[W+st+9]=a.y,D[W+st+10]=a.z,D[W+st+11]=J.itemSize===4?a.w:1)}}_={count:g,texture:O,size:new et(v,E)},r.set(h,_),h.addEventListener("dispose",P)}let m=0;for(let y=0;y<f.length;y++)m+=f[y];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",p),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",_.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{let d=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==d){g=[];for(let x=0;x<d;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<d;x++){let M=g[x];M[0]=x,M[1]=f[x]}g.sort(Hg);for(let x=0;x<8;x++)x<d&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Bg);let _=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let M=o[x],b=M[0],T=M[1];b!==Number.MAX_SAFE_INTEGER&&T?(_&&h.getAttribute("morphTarget"+x)!==_[b]&&h.setAttribute("morphTarget"+x,_[b]),m&&h.getAttribute("morphNormal"+x)!==m[b]&&h.setAttribute("morphNormal"+x,m[b]),s[x]=T,p+=T):(_&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let y=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function kg(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var Xo=class extends _n{constructor(t,e,n,s,r,a,o,c,l,h){if(h=h!==void 0?h:Gi,h!==Gi&&h!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Gi&&(n=pi),n===void 0&&h===Us&&(n=Vi),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ln,this.minFilter=c!==void 0?c:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},id=new _n,sd=new Xo(1,1);sd.compareFunction=Ju;var rd=new Bo,od=new Cc,ad=new Go,au=[],cu=[],lu=new Float32Array(16),hu=new Float32Array(9),uu=new Float32Array(4);function Vs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=au[s];if(r===void 0&&(r=new Float32Array(s),au[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function la(i,t){let e=cu[t];e===void 0&&(e=new Int32Array(t),cu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Vg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2fv(this.addr,t),ke(e,t)}}function Wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;i.uniform3fv(this.addr,t),ke(e,t)}}function Xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4fv(this.addr,t),ke(e,t)}}function Yg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;uu.set(n),i.uniformMatrix2fv(this.addr,!1,uu),ke(e,n)}}function qg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;hu.set(n),i.uniformMatrix3fv(this.addr,!1,hu),ke(e,n)}}function Zg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;lu.set(n),i.uniformMatrix4fv(this.addr,!1,lu),ke(e,n)}}function $g(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2iv(this.addr,t),ke(e,t)}}function Kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3iv(this.addr,t),ke(e,t)}}function jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4iv(this.addr,t),ke(e,t)}}function Qg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function t1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2uiv(this.addr,t),ke(e,t)}}function e1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3uiv(this.addr,t),ke(e,t)}}function n1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4uiv(this.addr,t),ke(e,t)}}function i1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?sd:id;e.setTexture2D(t||r,s)}function s1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||od,s)}function r1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ad,s)}function o1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||rd,s)}function a1(i){switch(i){case 5126:return Vg;case 35664:return Gg;case 35665:return Wg;case 35666:return Xg;case 35674:return Yg;case 35675:return qg;case 35676:return Zg;case 5124:case 35670:return $g;case 35667:case 35671:return Jg;case 35668:case 35672:return Kg;case 35669:case 35673:return jg;case 5125:return Qg;case 36294:return t1;case 36295:return e1;case 36296:return n1;case 35678:case 36198:case 36298:case 36306:case 35682:return i1;case 35679:case 36299:case 36307:return s1;case 35680:case 36300:case 36308:case 36293:return r1;case 36289:case 36303:case 36311:case 36292:return o1}}function c1(i,t){i.uniform1fv(this.addr,t)}function l1(i,t){let e=Vs(t,this.size,2);i.uniform2fv(this.addr,e)}function h1(i,t){let e=Vs(t,this.size,3);i.uniform3fv(this.addr,e)}function u1(i,t){let e=Vs(t,this.size,4);i.uniform4fv(this.addr,e)}function d1(i,t){let e=Vs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function f1(i,t){let e=Vs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function p1(i,t){let e=Vs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function m1(i,t){i.uniform1iv(this.addr,t)}function g1(i,t){i.uniform2iv(this.addr,t)}function _1(i,t){i.uniform3iv(this.addr,t)}function x1(i,t){i.uniform4iv(this.addr,t)}function y1(i,t){i.uniform1uiv(this.addr,t)}function v1(i,t){i.uniform2uiv(this.addr,t)}function M1(i,t){i.uniform3uiv(this.addr,t)}function E1(i,t){i.uniform4uiv(this.addr,t)}function S1(i,t,e){let n=this.cache,s=t.length,r=la(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||id,r[a])}function b1(i,t,e){let n=this.cache,s=t.length,r=la(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||od,r[a])}function w1(i,t,e){let n=this.cache,s=t.length,r=la(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ad,r[a])}function T1(i,t,e){let n=this.cache,s=t.length,r=la(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||rd,r[a])}function A1(i){switch(i){case 5126:return c1;case 35664:return l1;case 35665:return h1;case 35666:return u1;case 35674:return d1;case 35675:return f1;case 35676:return p1;case 5124:case 35670:return m1;case 35667:case 35671:return g1;case 35668:case 35672:return _1;case 35669:case 35673:return x1;case 5125:return y1;case 36294:return v1;case 36295:return M1;case 36296:return E1;case 35678:case 36198:case 36298:case 36306:case 35682:return S1;case 35679:case 36299:case 36307:return b1;case 35680:case 36300:case 36308:case 36293:return w1;case 36289:case 36303:case 36311:case 36292:return T1}}var Ic=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=a1(e.type)}},Dc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=A1(e.type)}},Uc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},pc=/(\w+)(\])?(\[|\.)?/g;function du(i,t){i.seq.push(t),i.map[t.id]=t}function R1(i,t,e){let n=i.name,s=n.length;for(pc.lastIndex=0;;){let r=pc.exec(n),a=pc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){du(e,l===void 0?new Ic(o,i,t):new Dc(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Uc(o),du(e,u)),e=u}}}var Ls=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);R1(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function fu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var C1=37297,P1=0;function L1(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function I1(i){let t=fe.getPrimaries(fe.workingColorSpace),e=fe.getPrimaries(i),n;switch(t===e?n="":t===Do&&e===Io?n="LinearDisplayP3ToLinearSRGB":t===Io&&e===Do&&(n="LinearSRGBToLinearDisplayP3"),i){case ni:case ca:return[n,"LinearTransferOETF"];case Ie:case ml:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function pu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+L1(i.getShaderSource(t),a)}else return s}function D1(i,t){let e=I1(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function U1(i,t){let e;switch(t){case zf:e="Linear";break;case kf:e="Reinhard";break;case Vf:e="OptimizedCineon";break;case fl:e="ACESFilmic";break;case Wf:e="AgX";break;case Gf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function N1(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(As).join(`
`)}function O1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(As).join(`
`)}function F1(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function B1(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function As(i){return i!==""}function mu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var H1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nc(i){return i.replace(H1,k1)}var z1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function k1(i,t){let e=Xt[t];if(e===void 0){let n=z1.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Nc(e)}var V1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _u(i){return i.replace(V1,G1)}function G1(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xu(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function W1(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Bu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===dl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ti&&(t="SHADOWMAP_TYPE_VSM"),t}function X1(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Is:case Ds:t="ENVMAP_TYPE_CUBE";break;case aa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Y1(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ds:t="ENVMAP_MODE_REFRACTION";break}return t}function q1(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Hu:t="ENVMAP_BLENDING_MULTIPLY";break;case Bf:t="ENVMAP_BLENDING_MIX";break;case Hf:t="ENVMAP_BLENDING_ADD";break}return t}function Z1(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function $1(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=W1(e),l=X1(e),h=Y1(e),u=q1(e),f=Z1(e),d=e.isWebGL2?"":N1(e),g=O1(e),_=F1(r),m=s.createProgram(),p,y,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(As).join(`
`),p.length>0&&(p+=`
`),y=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(As).join(`
`),y.length>0&&(y+=`
`)):(p=[xu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),y=[d,xu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_i?"#define TONE_MAPPING":"",e.toneMapping!==_i?Xt.tonemapping_pars_fragment:"",e.toneMapping!==_i?U1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,D1("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(As).join(`
`)),a=Nc(a),a=mu(a,e),a=gu(a,e),o=Nc(o),o=mu(o,e),o=gu(o,e),a=_u(a),o=_u(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let M=x+p+a,b=x+y+o,T=fu(s,s.VERTEX_SHADER,M),w=fu(s,s.FRAGMENT_SHADER,b);s.attachShader(m,T),s.attachShader(m,w),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function L(O){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(m).trim(),P=s.getShaderInfoLog(T).trim(),N=s.getShaderInfoLog(w).trim(),H=!0,Z=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,T,w);else{let J=pu(s,T,"vertex"),W=pu(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+V+`
`+J+`
`+W)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(P===""||N==="")&&(Z=!1);Z&&(O.diagnostics={runnable:H,programLog:V,vertexShader:{log:P,prefix:p},fragmentShader:{log:N,prefix:y}})}s.deleteShader(T),s.deleteShader(w),v=new Ls(s,m),E=B1(s,m)}let v;this.getUniforms=function(){return v===void 0&&L(this),v};let E;this.getAttributes=function(){return E===void 0&&L(this),E};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(m,C1)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=P1++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=w,this}var J1=0,Oc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Fc(t),e.set(t,n)),n}},Fc=class{constructor(t){this.id=J1++,this.code=t,this.usedTimes=0}};function K1(i,t,e,n,s,r,a){let o=new gr,c=new Oc,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===0?"uv":`uv${v}`}function m(v,E,D,O,V){let P=O.fog,N=V.geometry,H=v.isMeshStandardMaterial?O.environment:null,Z=(v.isMeshStandardMaterial?e:t).get(v.envMap||H),J=Z&&Z.mapping===aa?Z.image.height:null,W=g[v.type];v.precision!==null&&(d=s.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let j=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,st=j!==void 0?j.length:0,gt=0;N.morphAttributes.position!==void 0&&(gt=1),N.morphAttributes.normal!==void 0&&(gt=2),N.morphAttributes.color!==void 0&&(gt=3);let X,Q,_t,Et;if(W){let rn=Vn[W];X=rn.vertexShader,Q=rn.fragmentShader}else X=v.vertexShader,Q=v.fragmentShader,c.update(v),_t=c.getVertexShaderID(v),Et=c.getFragmentShaderID(v);let St=i.getRenderTarget(),Ot=V.isInstancedMesh===!0,Bt=V.isBatchedMesh===!0,Lt=!!v.map,Mt=!!v.matcap,F=!!Z,Zt=!!v.aoMap,bt=!!v.lightMap,Ht=!!v.bumpMap,wt=!!v.normalMap,xe=!!v.displacementMap,kt=!!v.emissiveMap,R=!!v.metalnessMap,S=!!v.roughnessMap,z=v.anisotropy>0,ct=v.clearcoat>0,ot=v.iridescence>0,at=v.sheen>0,Tt=v.transmission>0,xt=z&&!!v.anisotropyMap,vt=ct&&!!v.clearcoatMap,Dt=ct&&!!v.clearcoatNormalMap,Gt=ct&&!!v.clearcoatRoughnessMap,rt=ot&&!!v.iridescenceMap,ne=ot&&!!v.iridescenceThicknessMap,I=at&&!!v.sheenColorMap,it=at&&!!v.sheenRoughnessMap,pt=!!v.specularMap,lt=!!v.specularColorMap,At=!!v.specularIntensityMap,jt=Tt&&!!v.transmissionMap,ie=Tt&&!!v.thicknessMap,$t=!!v.gradientMap,dt=!!v.alphaMap,U=v.alphaTest>0,ht=!!v.alphaHash,ut=!!v.extensions,It=!!N.attributes.uv1,Rt=!!N.attributes.uv2,re=!!N.attributes.uv3,ae=_i;return v.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(ae=i.toneMapping),{isWebGL2:h,shaderID:W,shaderType:v.type,shaderName:v.name,vertexShader:X,fragmentShader:Q,defines:v.defines,customVertexShaderID:_t,customFragmentShaderID:Et,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Bt,instancing:Ot,instancingColor:Ot&&V.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:St===null?i.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:ni,map:Lt,matcap:Mt,envMap:F,envMapMode:F&&Z.mapping,envMapCubeUVHeight:J,aoMap:Zt,lightMap:bt,bumpMap:Ht,normalMap:wt,displacementMap:f&&xe,emissiveMap:kt,normalMapObjectSpace:wt&&v.normalMapType===np,normalMapTangentSpace:wt&&v.normalMapType===$u,metalnessMap:R,roughnessMap:S,anisotropy:z,anisotropyMap:xt,clearcoat:ct,clearcoatMap:vt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Gt,iridescence:ot,iridescenceMap:rt,iridescenceThicknessMap:ne,sheen:at,sheenColorMap:I,sheenRoughnessMap:it,specularMap:pt,specularColorMap:lt,specularIntensityMap:At,transmission:Tt,transmissionMap:jt,thicknessMap:ie,gradientMap:$t,opaque:v.transparent===!1&&v.blending===Cs,alphaMap:dt,alphaTest:U,alphaHash:ht,combine:v.combine,mapUv:Lt&&_(v.map.channel),aoMapUv:Zt&&_(v.aoMap.channel),lightMapUv:bt&&_(v.lightMap.channel),bumpMapUv:Ht&&_(v.bumpMap.channel),normalMapUv:wt&&_(v.normalMap.channel),displacementMapUv:xe&&_(v.displacementMap.channel),emissiveMapUv:kt&&_(v.emissiveMap.channel),metalnessMapUv:R&&_(v.metalnessMap.channel),roughnessMapUv:S&&_(v.roughnessMap.channel),anisotropyMapUv:xt&&_(v.anisotropyMap.channel),clearcoatMapUv:vt&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:I&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:it&&_(v.sheenRoughnessMap.channel),specularMapUv:pt&&_(v.specularMap.channel),specularColorMapUv:lt&&_(v.specularColorMap.channel),specularIntensityMapUv:At&&_(v.specularIntensityMap.channel),transmissionMapUv:jt&&_(v.transmissionMap.channel),thicknessMapUv:ie&&_(v.thicknessMap.channel),alphaMapUv:dt&&_(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(wt||z),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:It,vertexUv2s:Rt,vertexUv3s:re,pointsUvs:V.isPoints===!0&&!!N.attributes.uv&&(Lt||dt),fog:!!P,useFog:v.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:V.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:gt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:ae,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Lt&&v.map.isVideoTexture===!0&&fe.getTransfer(v.map.colorSpace)===ye,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Se,flipSided:v.side===He,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:ut&&v.extensions.derivatives===!0,extensionFragDepth:ut&&v.extensions.fragDepth===!0,extensionDrawBuffers:ut&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:ut&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ut&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){let E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(let D in v.defines)E.push(D),E.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(y(E,v),x(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function y(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function x(v,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),v.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),v.push(o.mask)}function M(v){let E=g[v.type],D;if(E){let O=Vn[E];D=zp.clone(O.uniforms)}else D=v.uniforms;return D}function b(v,E){let D;for(let O=0,V=l.length;O<V;O++){let P=l[O];if(P.cacheKey===E){D=P,++D.usedTimes;break}}return D===void 0&&(D=new $1(i,E,v,r),l.push(D)),D}function T(v){if(--v.usedTimes===0){let E=l.indexOf(v);l[E]=l[l.length-1],l.pop(),v.destroy()}}function w(v){c.remove(v)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:b,releaseProgram:T,releaseShaderCache:w,programs:l,dispose:L}}function j1(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function Q1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function yu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function vu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,d,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function o(u,f,d,g,_,m){let p=a(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(u,f,d,g,_,m){let p=a(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||Q1),n.length>1&&n.sort(f||yu),s.length>1&&s.sort(f||yu)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function t_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new vu,i.set(n,[a])):s>=r.length?(a=new vu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function e_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Ut};break;case"SpotLight":e={position:new C,direction:new C,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function n_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var i_=0;function s_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function r_(i,t){let e=new e_,n=n_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new C);let r=new C,a=new he,o=new he;function c(h,u){let f=0,d=0,g=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let _=0,m=0,p=0,y=0,x=0,M=0,b=0,T=0,w=0,L=0,v=0;h.sort(s_);let E=u===!0?Math.PI:1;for(let O=0,V=h.length;O<V;O++){let P=h[O],N=P.color,H=P.intensity,Z=P.distance,J=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=N.r*H*E,d+=N.g*H*E,g+=N.b*H*E;else if(P.isLightProbe){for(let W=0;W<9;W++)s.probe[W].addScaledVector(P.sh.coefficients[W],H);v++}else if(P.isDirectionalLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity*E),P.castShadow){let j=P.shadow,st=n.get(P);st.shadowBias=j.bias,st.shadowNormalBias=j.normalBias,st.shadowRadius=j.radius,st.shadowMapSize=j.mapSize,s.directionalShadow[_]=st,s.directionalShadowMap[_]=J,s.directionalShadowMatrix[_]=P.shadow.matrix,M++}s.directional[_]=W,_++}else if(P.isSpotLight){let W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(N).multiplyScalar(H*E),W.distance=Z,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,s.spot[p]=W;let j=P.shadow;if(P.map&&(s.spotLightMap[w]=P.map,w++,j.updateMatrices(P),P.castShadow&&L++),s.spotLightMatrix[p]=j.matrix,P.castShadow){let st=n.get(P);st.shadowBias=j.bias,st.shadowNormalBias=j.normalBias,st.shadowRadius=j.radius,st.shadowMapSize=j.mapSize,s.spotShadow[p]=st,s.spotShadowMap[p]=J,T++}p++}else if(P.isRectAreaLight){let W=e.get(P);W.color.copy(N).multiplyScalar(H),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),s.rectArea[y]=W,y++}else if(P.isPointLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity*E),W.distance=P.distance,W.decay=P.decay,P.castShadow){let j=P.shadow,st=n.get(P);st.shadowBias=j.bias,st.shadowNormalBias=j.normalBias,st.shadowRadius=j.radius,st.shadowMapSize=j.mapSize,st.shadowCameraNear=j.camera.near,st.shadowCameraFar=j.camera.far,s.pointShadow[m]=st,s.pointShadowMap[m]=J,s.pointShadowMatrix[m]=P.shadow.matrix,b++}s.point[m]=W,m++}else if(P.isHemisphereLight){let W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(H*E),W.groundColor.copy(P.groundColor).multiplyScalar(H*E),s.hemi[x]=W,x++}}y>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=mt.LTC_FLOAT_1,s.rectAreaLTC2=mt.LTC_FLOAT_2):(s.rectAreaLTC1=mt.LTC_HALF_1,s.rectAreaLTC2=mt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=mt.LTC_FLOAT_1,s.rectAreaLTC2=mt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=mt.LTC_HALF_1,s.rectAreaLTC2=mt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=d,s.ambient[2]=g;let D=s.hash;(D.directionalLength!==_||D.pointLength!==m||D.spotLength!==p||D.rectAreaLength!==y||D.hemiLength!==x||D.numDirectionalShadows!==M||D.numPointShadows!==b||D.numSpotShadows!==T||D.numSpotMaps!==w||D.numLightProbes!==v)&&(s.directional.length=_,s.spot.length=p,s.rectArea.length=y,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=b,s.pointShadowMap.length=b,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=b,s.spotLightMatrix.length=T+w-L,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=v,D.directionalLength=_,D.pointLength=m,D.spotLength=p,D.rectAreaLength=y,D.hemiLength=x,D.numDirectionalShadows=M,D.numPointShadows=b,D.numSpotShadows=T,D.numSpotMaps=w,D.numLightProbes=v,s.version=i_++)}function l(h,u){let f=0,d=0,g=0,_=0,m=0,p=u.matrixWorldInverse;for(let y=0,x=h.length;y<x;y++){let M=h[y];if(M.isDirectionalLight){let b=s.directional[f];b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),f++}else if(M.isSpotLight){let b=s.spot[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let b=s.rectArea[_];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),o.identity(),a.copy(M.matrixWorld),a.premultiply(p),o.extractRotation(a),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){let b=s.point[d];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){let b=s.hemi[m];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:s}}function Mu(i,t){let e=new r_(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function o_(i,t){let e=new WeakMap;function n(r,a=0){let o=e.get(r),c;return o===void 0?(c=new Mu(i,t),e.set(r,[c])):a>=o.length?(c=new Mu(i,t),o.push(c)):c=o[a],c}function s(){e=new WeakMap}return{get:n,dispose:s}}var Bc=class extends Mi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Hc=class extends Mi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},a_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c_=`uniform sampler2D shadow_pass;
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
}`;function l_(i,t,e){let n=new _r,s=new et,r=new et,a=new Ee,o=new Bc({depthPacking:ep}),c=new Hc,l={},h=e.maxTextureSize,u={[yi]:He,[He]:yi,[Se]:Se},f=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:a_,fragmentShader:c_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new pe;g.setAttribute("position",new me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new K(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bu;let p=this.type;this.render=function(T,w,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let v=i.getRenderTarget(),E=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),O=i.state;O.setBlending(gi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let V=p!==ti&&this.type===ti,P=p===ti&&this.type!==ti;for(let N=0,H=T.length;N<H;N++){let Z=T[N],J=Z.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let W=J.getFrameExtents();if(s.multiply(W),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,J.mapSize.y=r.y)),J.map===null||V===!0||P===!0){let st=this.type!==ti?{minFilter:ln,magFilter:ln}:{};J.map!==null&&J.map.dispose(),J.map=new ii(s.x,s.y,st),J.map.texture.name=Z.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();let j=J.getViewportCount();for(let st=0;st<j;st++){let gt=J.getViewport(st);a.set(r.x*gt.x,r.y*gt.y,r.x*gt.z,r.y*gt.w),O.viewport(a),J.updateMatrices(Z,st),n=J.getFrustum(),M(w,L,J.camera,Z,this.type)}J.isPointLightShadow!==!0&&this.type===ti&&y(J,L),J.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(v,E,D)};function y(T,w){let L=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ii(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,L,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,L,d,_,null)}function x(T,w,L,v){let E=null,D=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)E=D;else if(E=L.isPointLight===!0?c:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let O=E.uuid,V=w.uuid,P=l[O];P===void 0&&(P={},l[O]=P);let N=P[V];N===void 0&&(N=E.clone(),P[V]=N,w.addEventListener("dispose",b)),E=N}if(E.visible=w.visible,E.wireframe=w.wireframe,v===ti?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:u[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,L.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let O=i.properties.get(E);O.light=L}return E}function M(T,w,L,v,E){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===ti)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);let V=t.update(T),P=T.material;if(Array.isArray(P)){let N=V.groups;for(let H=0,Z=N.length;H<Z;H++){let J=N[H],W=P[J.materialIndex];if(W&&W.visible){let j=x(T,W,v,E);T.onBeforeShadow(i,T,w,L,V,j,J),i.renderBufferDirect(L,null,V,j,T,J),T.onAfterShadow(i,T,w,L,V,j,J)}}}else if(P.visible){let N=x(T,P,v,E);T.onBeforeShadow(i,T,w,L,V,N,null),i.renderBufferDirect(L,null,V,N,T,null),T.onAfterShadow(i,T,w,L,V,N,null)}}let O=T.children;for(let V=0,P=O.length;V<P;V++)M(O[V],w,L,v,E)}function b(T){T.target.removeEventListener("dispose",b);for(let L in l){let v=l[L],E=T.target.uuid;E in v&&(v[E].dispose(),delete v[E])}}}function h_(i,t,e){let n=e.isWebGL2;function s(){let U=!1,ht=new Ee,ut=null,It=new Ee(0,0,0,0);return{setMask:function(Rt){ut!==Rt&&!U&&(i.colorMask(Rt,Rt,Rt,Rt),ut=Rt)},setLocked:function(Rt){U=Rt},setClear:function(Rt,re,ae,We,rn){rn===!0&&(Rt*=We,re*=We,ae*=We),ht.set(Rt,re,ae,We),It.equals(ht)===!1&&(i.clearColor(Rt,re,ae,We),It.copy(ht))},reset:function(){U=!1,ut=null,It.set(-1,0,0,0)}}}function r(){let U=!1,ht=null,ut=null,It=null;return{setTest:function(Rt){Rt?Bt(i.DEPTH_TEST):Lt(i.DEPTH_TEST)},setMask:function(Rt){ht!==Rt&&!U&&(i.depthMask(Rt),ht=Rt)},setFunc:function(Rt){if(ut!==Rt){switch(Rt){case Lf:i.depthFunc(i.NEVER);break;case If:i.depthFunc(i.ALWAYS);break;case Df:i.depthFunc(i.LESS);break;case Ro:i.depthFunc(i.LEQUAL);break;case Uf:i.depthFunc(i.EQUAL);break;case Nf:i.depthFunc(i.GEQUAL);break;case Of:i.depthFunc(i.GREATER);break;case Ff:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ut=Rt}},setLocked:function(Rt){U=Rt},setClear:function(Rt){It!==Rt&&(i.clearDepth(Rt),It=Rt)},reset:function(){U=!1,ht=null,ut=null,It=null}}}function a(){let U=!1,ht=null,ut=null,It=null,Rt=null,re=null,ae=null,We=null,rn=null;return{setTest:function(ge){U||(ge?Bt(i.STENCIL_TEST):Lt(i.STENCIL_TEST))},setMask:function(ge){ht!==ge&&!U&&(i.stencilMask(ge),ht=ge)},setFunc:function(ge,on,kn){(ut!==ge||It!==on||Rt!==kn)&&(i.stencilFunc(ge,on,kn),ut=ge,It=on,Rt=kn)},setOp:function(ge,on,kn){(re!==ge||ae!==on||We!==kn)&&(i.stencilOp(ge,on,kn),re=ge,ae=on,We=kn)},setLocked:function(ge){U=ge},setClear:function(ge){rn!==ge&&(i.clearStencil(ge),rn=ge)},reset:function(){U=!1,ht=null,ut=null,It=null,Rt=null,re=null,ae=null,We=null,rn=null}}}let o=new s,c=new r,l=new a,h=new WeakMap,u=new WeakMap,f={},d={},g=new WeakMap,_=[],m=null,p=!1,y=null,x=null,M=null,b=null,T=null,w=null,L=null,v=new Ut(0,0,0),E=0,D=!1,O=null,V=null,P=null,N=null,H=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,W=0,j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(j)[1]),J=W>=1):j.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),J=W>=2);let st=null,gt={},X=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),_t=new Ee().fromArray(X),Et=new Ee().fromArray(Q);function St(U,ht,ut,It){let Rt=new Uint8Array(4),re=i.createTexture();i.bindTexture(U,re),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ae=0;ae<ut;ae++)n&&(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)?i.texImage3D(ht,0,i.RGBA,1,1,It,0,i.RGBA,i.UNSIGNED_BYTE,Rt):i.texImage2D(ht+ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Rt);return re}let Ot={};Ot[i.TEXTURE_2D]=St(i.TEXTURE_2D,i.TEXTURE_2D,1),Ot[i.TEXTURE_CUBE_MAP]=St(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ot[i.TEXTURE_2D_ARRAY]=St(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ot[i.TEXTURE_3D]=St(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Bt(i.DEPTH_TEST),c.setFunc(Ro),kt(!1),R(th),Bt(i.CULL_FACE),wt(gi);function Bt(U){f[U]!==!0&&(i.enable(U),f[U]=!0)}function Lt(U){f[U]!==!1&&(i.disable(U),f[U]=!1)}function Mt(U,ht){return d[U]!==ht?(i.bindFramebuffer(U,ht),d[U]=ht,n&&(U===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ht),U===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ht)),!0):!1}function F(U,ht){let ut=_,It=!1;if(U)if(ut=g.get(ht),ut===void 0&&(ut=[],g.set(ht,ut)),U.isWebGLMultipleRenderTargets){let Rt=U.texture;if(ut.length!==Rt.length||ut[0]!==i.COLOR_ATTACHMENT0){for(let re=0,ae=Rt.length;re<ae;re++)ut[re]=i.COLOR_ATTACHMENT0+re;ut.length=Rt.length,It=!0}}else ut[0]!==i.COLOR_ATTACHMENT0&&(ut[0]=i.COLOR_ATTACHMENT0,It=!0);else ut[0]!==i.BACK&&(ut[0]=i.BACK,It=!0);It&&(e.isWebGL2?i.drawBuffers(ut):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ut))}function Zt(U){return m!==U?(i.useProgram(U),m=U,!0):!1}let bt={[zi]:i.FUNC_ADD,[gf]:i.FUNC_SUBTRACT,[_f]:i.FUNC_REVERSE_SUBTRACT};if(n)bt[sh]=i.MIN,bt[rh]=i.MAX;else{let U=t.get("EXT_blend_minmax");U!==null&&(bt[sh]=U.MIN_EXT,bt[rh]=U.MAX_EXT)}let Ht={[xf]:i.ZERO,[yf]:i.ONE,[vf]:i.SRC_COLOR,[Mc]:i.SRC_ALPHA,[Tf]:i.SRC_ALPHA_SATURATE,[bf]:i.DST_COLOR,[Ef]:i.DST_ALPHA,[Mf]:i.ONE_MINUS_SRC_COLOR,[Ec]:i.ONE_MINUS_SRC_ALPHA,[wf]:i.ONE_MINUS_DST_COLOR,[Sf]:i.ONE_MINUS_DST_ALPHA,[Af]:i.CONSTANT_COLOR,[Rf]:i.ONE_MINUS_CONSTANT_COLOR,[Cf]:i.CONSTANT_ALPHA,[Pf]:i.ONE_MINUS_CONSTANT_ALPHA};function wt(U,ht,ut,It,Rt,re,ae,We,rn,ge){if(U===gi){p===!0&&(Lt(i.BLEND),p=!1);return}if(p===!1&&(Bt(i.BLEND),p=!0),U!==mf){if(U!==y||ge!==D){if((x!==zi||T!==zi)&&(i.blendEquation(i.FUNC_ADD),x=zi,T=zi),ge)switch(U){case Cs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case eh:i.blendFunc(i.ONE,i.ONE);break;case nh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ih:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case eh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case nh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ih:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,b=null,w=null,L=null,v.set(0,0,0),E=0,y=U,D=ge}return}Rt=Rt||ht,re=re||ut,ae=ae||It,(ht!==x||Rt!==T)&&(i.blendEquationSeparate(bt[ht],bt[Rt]),x=ht,T=Rt),(ut!==M||It!==b||re!==w||ae!==L)&&(i.blendFuncSeparate(Ht[ut],Ht[It],Ht[re],Ht[ae]),M=ut,b=It,w=re,L=ae),(We.equals(v)===!1||rn!==E)&&(i.blendColor(We.r,We.g,We.b,rn),v.copy(We),E=rn),y=U,D=!1}function xe(U,ht){U.side===Se?Lt(i.CULL_FACE):Bt(i.CULL_FACE);let ut=U.side===He;ht&&(ut=!ut),kt(ut),U.blending===Cs&&U.transparent===!1?wt(gi):wt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),c.setFunc(U.depthFunc),c.setTest(U.depthTest),c.setMask(U.depthWrite),o.setMask(U.colorWrite);let It=U.stencilWrite;l.setTest(It),It&&(l.setMask(U.stencilWriteMask),l.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),l.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),z(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Bt(i.SAMPLE_ALPHA_TO_COVERAGE):Lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function kt(U){O!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),O=U)}function R(U){U!==ff?(Bt(i.CULL_FACE),U!==V&&(U===th?i.cullFace(i.BACK):U===pf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Lt(i.CULL_FACE),V=U}function S(U){U!==P&&(J&&i.lineWidth(U),P=U)}function z(U,ht,ut){U?(Bt(i.POLYGON_OFFSET_FILL),(N!==ht||H!==ut)&&(i.polygonOffset(ht,ut),N=ht,H=ut)):Lt(i.POLYGON_OFFSET_FILL)}function ct(U){U?Bt(i.SCISSOR_TEST):Lt(i.SCISSOR_TEST)}function ot(U){U===void 0&&(U=i.TEXTURE0+Z-1),st!==U&&(i.activeTexture(U),st=U)}function at(U,ht,ut){ut===void 0&&(st===null?ut=i.TEXTURE0+Z-1:ut=st);let It=gt[ut];It===void 0&&(It={type:void 0,texture:void 0},gt[ut]=It),(It.type!==U||It.texture!==ht)&&(st!==ut&&(i.activeTexture(ut),st=ut),i.bindTexture(U,ht||Ot[U]),It.type=U,It.texture=ht)}function Tt(){let U=gt[st];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function xt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function vt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Dt(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Gt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function I(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function lt(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function At(U){_t.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),_t.copy(U))}function jt(U){Et.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Et.copy(U))}function ie(U,ht){let ut=u.get(ht);ut===void 0&&(ut=new WeakMap,u.set(ht,ut));let It=ut.get(U);It===void 0&&(It=i.getUniformBlockIndex(ht,U.name),ut.set(U,It))}function $t(U,ht){let It=u.get(ht).get(U);h.get(ht)!==It&&(i.uniformBlockBinding(ht,It,U.__bindingPointIndex),h.set(ht,It))}function dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},st=null,gt={},d={},g=new WeakMap,_=[],m=null,p=!1,y=null,x=null,M=null,b=null,T=null,w=null,L=null,v=new Ut(0,0,0),E=0,D=!1,O=null,V=null,P=null,N=null,H=null,_t.set(0,0,i.canvas.width,i.canvas.height),Et.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Bt,disable:Lt,bindFramebuffer:Mt,drawBuffers:F,useProgram:Zt,setBlending:wt,setMaterial:xe,setFlipSided:kt,setCullFace:R,setLineWidth:S,setPolygonOffset:z,setScissorTest:ct,activeTexture:ot,bindTexture:at,unbindTexture:Tt,compressedTexImage2D:xt,compressedTexImage3D:vt,texImage2D:pt,texImage3D:lt,updateUBOMapping:ie,uniformBlockBinding:$t,texStorage2D:I,texStorage3D:it,texSubImage2D:Dt,texSubImage3D:Gt,compressedTexSubImage2D:rt,compressedTexSubImage3D:ne,scissor:At,viewport:jt,reset:dt}}function u_(i,t,e,n,s,r,a){let o=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return d?new OffscreenCanvas(R,S):mr("canvas")}function _(R,S,z,ct){let ot=1;if((R.width>ct||R.height>ct)&&(ot=ct/Math.max(R.width,R.height)),ot<1||S===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){let at=S?No:Math.floor,Tt=at(ot*R.width),xt=at(ot*R.height);u===void 0&&(u=g(Tt,xt));let vt=z?g(Tt,xt):u;return vt.width=Tt,vt.height=xt,vt.getContext("2d").drawImage(R,0,0,Tt,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Tt+"x"+xt+")."),vt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return Ac(R.width)&&Ac(R.height)}function p(R){return o?!1:R.wrapS!==In||R.wrapT!==In||R.minFilter!==ln&&R.minFilter!==Sn}function y(R,S){return R.generateMipmaps&&S&&R.minFilter!==ln&&R.minFilter!==Sn}function x(R){i.generateMipmap(R)}function M(R,S,z,ct,ot=!1){if(o===!1)return S;if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let at=S;if(S===i.RED&&(z===i.FLOAT&&(at=i.R32F),z===i.HALF_FLOAT&&(at=i.R16F),z===i.UNSIGNED_BYTE&&(at=i.R8)),S===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(at=i.R8UI),z===i.UNSIGNED_SHORT&&(at=i.R16UI),z===i.UNSIGNED_INT&&(at=i.R32UI),z===i.BYTE&&(at=i.R8I),z===i.SHORT&&(at=i.R16I),z===i.INT&&(at=i.R32I)),S===i.RG&&(z===i.FLOAT&&(at=i.RG32F),z===i.HALF_FLOAT&&(at=i.RG16F),z===i.UNSIGNED_BYTE&&(at=i.RG8)),S===i.RGBA){let Tt=ot?Lo:fe.getTransfer(ct);z===i.FLOAT&&(at=i.RGBA32F),z===i.HALF_FLOAT&&(at=i.RGBA16F),z===i.UNSIGNED_BYTE&&(at=Tt===ye?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(at=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(at=i.RGB5_A1)}return(at===i.R16F||at===i.R32F||at===i.RG16F||at===i.RG32F||at===i.RGBA16F||at===i.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function b(R,S,z){return y(R,z)===!0||R.isFramebufferTexture&&R.minFilter!==ln&&R.minFilter!==Sn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function T(R){return R===ln||R===oh||R===za?i.NEAREST:i.LINEAR}function w(R){let S=R.target;S.removeEventListener("dispose",w),v(S),S.isVideoTexture&&h.delete(S)}function L(R){let S=R.target;S.removeEventListener("dispose",L),D(S)}function v(R){let S=n.get(R);if(S.__webglInit===void 0)return;let z=R.source,ct=f.get(z);if(ct){let ot=ct[S.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&E(R),Object.keys(ct).length===0&&f.delete(z)}n.remove(R)}function E(R){let S=n.get(R);i.deleteTexture(S.__webglTexture);let z=R.source,ct=f.get(z);delete ct[S.__cacheKey],a.memory.textures--}function D(R){let S=R.texture,z=n.get(R),ct=n.get(S);if(ct.__webglTexture!==void 0&&(i.deleteTexture(ct.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(z.__webglFramebuffer[ot]))for(let at=0;at<z.__webglFramebuffer[ot].length;at++)i.deleteFramebuffer(z.__webglFramebuffer[ot][at]);else i.deleteFramebuffer(z.__webglFramebuffer[ot]);z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer[ot])}else{if(Array.isArray(z.__webglFramebuffer))for(let ot=0;ot<z.__webglFramebuffer.length;ot++)i.deleteFramebuffer(z.__webglFramebuffer[ot]);else i.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&i.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let ot=0;ot<z.__webglColorRenderbuffer.length;ot++)z.__webglColorRenderbuffer[ot]&&i.deleteRenderbuffer(z.__webglColorRenderbuffer[ot]);z.__webglDepthRenderbuffer&&i.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ot=0,at=S.length;ot<at;ot++){let Tt=n.get(S[ot]);Tt.__webglTexture&&(i.deleteTexture(Tt.__webglTexture),a.memory.textures--),n.remove(S[ot])}n.remove(S),n.remove(R)}let O=0;function V(){O=0}function P(){let R=O;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),O+=1,R}function N(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function H(R,S){let z=n.get(R);if(R.isVideoTexture&&xe(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){let ct=R.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_t(z,R,S);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+S)}function Z(R,S){let z=n.get(R);if(R.version>0&&z.__version!==R.version){_t(z,R,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+S)}function J(R,S){let z=n.get(R);if(R.version>0&&z.__version!==R.version){_t(z,R,S);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+S)}function W(R,S){let z=n.get(R);if(R.version>0&&z.__version!==R.version){Et(z,R,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+S)}let j={[dr]:i.REPEAT,[In]:i.CLAMP_TO_EDGE,[wc]:i.MIRRORED_REPEAT},st={[ln]:i.NEAREST,[oh]:i.NEAREST_MIPMAP_NEAREST,[za]:i.NEAREST_MIPMAP_LINEAR,[Sn]:i.LINEAR,[Xf]:i.LINEAR_MIPMAP_NEAREST,[Xi]:i.LINEAR_MIPMAP_LINEAR},gt={[ip]:i.NEVER,[lp]:i.ALWAYS,[sp]:i.LESS,[Ju]:i.LEQUAL,[rp]:i.EQUAL,[cp]:i.GEQUAL,[op]:i.GREATER,[ap]:i.NOTEQUAL};function X(R,S,z){if(z?(i.texParameteri(R,i.TEXTURE_WRAP_S,j[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,j[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,j[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,st[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,st[S.minFilter])):(i.texParameteri(R,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(R,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(S.wrapS!==In||S.wrapT!==In)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(R,i.TEXTURE_MAG_FILTER,T(S.magFilter)),i.texParameteri(R,i.TEXTURE_MIN_FILTER,T(S.minFilter)),S.minFilter!==ln&&S.minFilter!==Sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,gt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let ct=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===ln||S.minFilter!==za&&S.minFilter!==Xi||S.type===mi&&t.has("OES_texture_float_linear")===!1||o===!1&&S.type===fr&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(R,ct.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Q(R,S){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",w));let ct=S.source,ot=f.get(ct);ot===void 0&&(ot={},f.set(ct,ot));let at=N(S);if(at!==R.__cacheKey){ot[at]===void 0&&(ot[at]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ot[at].usedTimes++;let Tt=ot[R.__cacheKey];Tt!==void 0&&(ot[R.__cacheKey].usedTimes--,Tt.usedTimes===0&&E(S)),R.__cacheKey=at,R.__webglTexture=ot[at].texture}return z}function _t(R,S,z){let ct=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ct=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ct=i.TEXTURE_3D);let ot=Q(R,S),at=S.source;e.bindTexture(ct,R.__webglTexture,i.TEXTURE0+z);let Tt=n.get(at);if(at.version!==Tt.__version||ot===!0){e.activeTexture(i.TEXTURE0+z);let xt=fe.getPrimaries(fe.workingColorSpace),vt=S.colorSpace===bn?null:fe.getPrimaries(S.colorSpace),Dt=S.colorSpace===bn||xt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let Gt=p(S)&&m(S.image)===!1,rt=_(S.image,Gt,!1,s.maxTextureSize);rt=kt(S,rt);let ne=m(rt)||o,I=r.convert(S.format,S.colorSpace),it=r.convert(S.type),pt=M(S.internalFormat,I,it,S.colorSpace,S.isVideoTexture);X(ct,S,ne);let lt,At=S.mipmaps,jt=o&&S.isVideoTexture!==!0&&pt!==qu,ie=Tt.__version===void 0||ot===!0,$t=b(S,rt,ne);if(S.isDepthTexture)pt=i.DEPTH_COMPONENT,o?S.type===mi?pt=i.DEPTH_COMPONENT32F:S.type===pi?pt=i.DEPTH_COMPONENT24:S.type===Vi?pt=i.DEPTH24_STENCIL8:pt=i.DEPTH_COMPONENT16:S.type===mi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Gi&&pt===i.DEPTH_COMPONENT&&S.type!==pl&&S.type!==pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=pi,it=r.convert(S.type)),S.format===Us&&pt===i.DEPTH_COMPONENT&&(pt=i.DEPTH_STENCIL,S.type!==Vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Vi,it=r.convert(S.type))),ie&&(jt?e.texStorage2D(i.TEXTURE_2D,1,pt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,pt,rt.width,rt.height,0,I,it,null));else if(S.isDataTexture)if(At.length>0&&ne){jt&&ie&&e.texStorage2D(i.TEXTURE_2D,$t,pt,At[0].width,At[0].height);for(let dt=0,U=At.length;dt<U;dt++)lt=At[dt],jt?e.texSubImage2D(i.TEXTURE_2D,dt,0,0,lt.width,lt.height,I,it,lt.data):e.texImage2D(i.TEXTURE_2D,dt,pt,lt.width,lt.height,0,I,it,lt.data);S.generateMipmaps=!1}else jt?(ie&&e.texStorage2D(i.TEXTURE_2D,$t,pt,rt.width,rt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,I,it,rt.data)):e.texImage2D(i.TEXTURE_2D,0,pt,rt.width,rt.height,0,I,it,rt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){jt&&ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,$t,pt,At[0].width,At[0].height,rt.depth);for(let dt=0,U=At.length;dt<U;dt++)lt=At[dt],S.format!==Dn?I!==null?jt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,lt.width,lt.height,rt.depth,I,lt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,dt,pt,lt.width,lt.height,rt.depth,0,lt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,lt.width,lt.height,rt.depth,I,it,lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,dt,pt,lt.width,lt.height,rt.depth,0,I,it,lt.data)}else{jt&&ie&&e.texStorage2D(i.TEXTURE_2D,$t,pt,At[0].width,At[0].height);for(let dt=0,U=At.length;dt<U;dt++)lt=At[dt],S.format!==Dn?I!==null?jt?e.compressedTexSubImage2D(i.TEXTURE_2D,dt,0,0,lt.width,lt.height,I,lt.data):e.compressedTexImage2D(i.TEXTURE_2D,dt,pt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?e.texSubImage2D(i.TEXTURE_2D,dt,0,0,lt.width,lt.height,I,it,lt.data):e.texImage2D(i.TEXTURE_2D,dt,pt,lt.width,lt.height,0,I,it,lt.data)}else if(S.isDataArrayTexture)jt?(ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,$t,pt,rt.width,rt.height,rt.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,I,it,rt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,pt,rt.width,rt.height,rt.depth,0,I,it,rt.data);else if(S.isData3DTexture)jt?(ie&&e.texStorage3D(i.TEXTURE_3D,$t,pt,rt.width,rt.height,rt.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,I,it,rt.data)):e.texImage3D(i.TEXTURE_3D,0,pt,rt.width,rt.height,rt.depth,0,I,it,rt.data);else if(S.isFramebufferTexture){if(ie)if(jt)e.texStorage2D(i.TEXTURE_2D,$t,pt,rt.width,rt.height);else{let dt=rt.width,U=rt.height;for(let ht=0;ht<$t;ht++)e.texImage2D(i.TEXTURE_2D,ht,pt,dt,U,0,I,it,null),dt>>=1,U>>=1}}else if(At.length>0&&ne){jt&&ie&&e.texStorage2D(i.TEXTURE_2D,$t,pt,At[0].width,At[0].height);for(let dt=0,U=At.length;dt<U;dt++)lt=At[dt],jt?e.texSubImage2D(i.TEXTURE_2D,dt,0,0,I,it,lt):e.texImage2D(i.TEXTURE_2D,dt,pt,I,it,lt);S.generateMipmaps=!1}else jt?(ie&&e.texStorage2D(i.TEXTURE_2D,$t,pt,rt.width,rt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,I,it,rt)):e.texImage2D(i.TEXTURE_2D,0,pt,I,it,rt);y(S,ne)&&x(ct),Tt.__version=at.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Et(R,S,z){if(S.image.length!==6)return;let ct=Q(R,S),ot=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+z);let at=n.get(ot);if(ot.version!==at.__version||ct===!0){e.activeTexture(i.TEXTURE0+z);let Tt=fe.getPrimaries(fe.workingColorSpace),xt=S.colorSpace===bn?null:fe.getPrimaries(S.colorSpace),vt=S.colorSpace===bn||Tt===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let Dt=S.isCompressedTexture||S.image[0].isCompressedTexture,Gt=S.image[0]&&S.image[0].isDataTexture,rt=[];for(let dt=0;dt<6;dt++)!Dt&&!Gt?rt[dt]=_(S.image[dt],!1,!0,s.maxCubemapSize):rt[dt]=Gt?S.image[dt].image:S.image[dt],rt[dt]=kt(S,rt[dt]);let ne=rt[0],I=m(ne)||o,it=r.convert(S.format,S.colorSpace),pt=r.convert(S.type),lt=M(S.internalFormat,it,pt,S.colorSpace),At=o&&S.isVideoTexture!==!0,jt=at.__version===void 0||ct===!0,ie=b(S,ne,I);X(i.TEXTURE_CUBE_MAP,S,I);let $t;if(Dt){At&&jt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ie,lt,ne.width,ne.height);for(let dt=0;dt<6;dt++){$t=rt[dt].mipmaps;for(let U=0;U<$t.length;U++){let ht=$t[U];S.format!==Dn?it!==null?At?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,U,0,0,ht.width,ht.height,it,ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,U,lt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):At?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,U,0,0,ht.width,ht.height,it,pt,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,U,lt,ht.width,ht.height,0,it,pt,ht.data)}}}else{$t=S.mipmaps,At&&jt&&($t.length>0&&ie++,e.texStorage2D(i.TEXTURE_CUBE_MAP,ie,lt,rt[0].width,rt[0].height));for(let dt=0;dt<6;dt++)if(Gt){At?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,rt[dt].width,rt[dt].height,it,pt,rt[dt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,lt,rt[dt].width,rt[dt].height,0,it,pt,rt[dt].data);for(let U=0;U<$t.length;U++){let ut=$t[U].image[dt].image;At?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,U+1,0,0,ut.width,ut.height,it,pt,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,U+1,lt,ut.width,ut.height,0,it,pt,ut.data)}}else{At?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,it,pt,rt[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,lt,it,pt,rt[dt]);for(let U=0;U<$t.length;U++){let ht=$t[U];At?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,U+1,0,0,it,pt,ht.image[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,U+1,lt,it,pt,ht.image[dt])}}}y(S,I)&&x(i.TEXTURE_CUBE_MAP),at.__version=ot.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function St(R,S,z,ct,ot,at){let Tt=r.convert(z.format,z.colorSpace),xt=r.convert(z.type),vt=M(z.internalFormat,Tt,xt,z.colorSpace);if(!n.get(S).__hasExternalTextures){let Gt=Math.max(1,S.width>>at),rt=Math.max(1,S.height>>at);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,at,vt,Gt,rt,S.depth,0,Tt,xt,null):e.texImage2D(ot,at,vt,Gt,rt,0,Tt,xt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),wt(S)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,ot,n.get(z).__webglTexture,0,Ht(S)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ct,ot,n.get(z).__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(R,S,z){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer&&!S.stencilBuffer){let ct=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(z||wt(S)){let ot=S.depthTexture;ot&&ot.isDepthTexture&&(ot.type===mi?ct=i.DEPTH_COMPONENT32F:ot.type===pi&&(ct=i.DEPTH_COMPONENT24));let at=Ht(S);wt(S)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,ct,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,at,ct,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,ct,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,R)}else if(S.depthBuffer&&S.stencilBuffer){let ct=Ht(S);z&&wt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,i.DEPTH24_STENCIL8,S.width,S.height):wt(S)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,R)}else{let ct=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ot=0;ot<ct.length;ot++){let at=ct[ot],Tt=r.convert(at.format,at.colorSpace),xt=r.convert(at.type),vt=M(at.internalFormat,Tt,xt,at.colorSpace),Dt=Ht(S);z&&wt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,vt,S.width,S.height):wt(S)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt,vt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,vt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Bt(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),H(S.depthTexture,0);let ct=n.get(S.depthTexture).__webglTexture,ot=Ht(S);if(S.depthTexture.format===Gi)wt(S)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0);else if(S.depthTexture.format===Us)wt(S)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function Lt(R){let S=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Bt(S.__webglFramebuffer,R)}else if(z){S.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ct]),S.__webglDepthbuffer[ct]=i.createRenderbuffer(),Ot(S.__webglDepthbuffer[ct],R,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),Ot(S.__webglDepthbuffer,R,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Mt(R,S,z){let ct=n.get(R);S!==void 0&&St(ct.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Lt(R)}function F(R){let S=R.texture,z=n.get(R),ct=n.get(S);R.addEventListener("dispose",L),R.isWebGLMultipleRenderTargets!==!0&&(ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture()),ct.__version=S.version,a.memory.textures++);let ot=R.isWebGLCubeRenderTarget===!0,at=R.isWebGLMultipleRenderTargets===!0,Tt=m(R)||o;if(ot){z.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(o&&S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[xt]=[];for(let vt=0;vt<S.mipmaps.length;vt++)z.__webglFramebuffer[xt][vt]=i.createFramebuffer()}else z.__webglFramebuffer[xt]=i.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let xt=0;xt<S.mipmaps.length;xt++)z.__webglFramebuffer[xt]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(at)if(s.drawBuffers){let xt=R.texture;for(let vt=0,Dt=xt.length;vt<Dt;vt++){let Gt=n.get(xt[vt]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&wt(R)===!1){let xt=at?S:[S];z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let vt=0;vt<xt.length;vt++){let Dt=xt[vt];z.__webglColorRenderbuffer[vt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[vt]);let Gt=r.convert(Dt.format,Dt.colorSpace),rt=r.convert(Dt.type),ne=M(Dt.internalFormat,Gt,rt,Dt.colorSpace,R.isXRRenderTarget===!0),I=Ht(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,I,ne,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,z.__webglColorRenderbuffer[vt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ot(z.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),X(i.TEXTURE_CUBE_MAP,S,Tt);for(let xt=0;xt<6;xt++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let vt=0;vt<S.mipmaps.length;vt++)St(z.__webglFramebuffer[xt][vt],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,vt);else St(z.__webglFramebuffer[xt],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);y(S,Tt)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){let xt=R.texture;for(let vt=0,Dt=xt.length;vt<Dt;vt++){let Gt=xt[vt],rt=n.get(Gt);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),X(i.TEXTURE_2D,Gt,Tt),St(z.__webglFramebuffer,R,Gt,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,0),y(Gt,Tt)&&x(i.TEXTURE_2D)}e.unbindTexture()}else{let xt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?xt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(xt,ct.__webglTexture),X(xt,S,Tt),o&&S.mipmaps&&S.mipmaps.length>0)for(let vt=0;vt<S.mipmaps.length;vt++)St(z.__webglFramebuffer[vt],R,S,i.COLOR_ATTACHMENT0,xt,vt);else St(z.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,xt,0);y(S,Tt)&&x(xt),e.unbindTexture()}R.depthBuffer&&Lt(R)}function Zt(R){let S=m(R)||o,z=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ct=0,ot=z.length;ct<ot;ct++){let at=z[ct];if(y(at,S)){let Tt=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,xt=n.get(at).__webglTexture;e.bindTexture(Tt,xt),x(Tt),e.unbindTexture()}}}function bt(R){if(o&&R.samples>0&&wt(R)===!1){let S=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],z=R.width,ct=R.height,ot=i.COLOR_BUFFER_BIT,at=[],Tt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(R),vt=R.isWebGLMultipleRenderTargets===!0;if(vt)for(let Dt=0;Dt<S.length;Dt++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let Dt=0;Dt<S.length;Dt++){at.push(i.COLOR_ATTACHMENT0+Dt),R.depthBuffer&&at.push(Tt);let Gt=xt.__ignoreDepthValues!==void 0?xt.__ignoreDepthValues:!1;if(Gt===!1&&(R.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),vt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[Dt]),Gt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Tt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Tt])),vt){let rt=n.get(S[Dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,rt,0)}i.blitFramebuffer(0,0,z,ct,0,0,z,ct,ot,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,at)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),vt)for(let Dt=0;Dt<S.length;Dt++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,xt.__webglColorRenderbuffer[Dt]);let Gt=n.get(S[Dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}}function Ht(R){return Math.min(s.maxSamples,R.samples)}function wt(R){let S=n.get(R);return o&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function xe(R){let S=a.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function kt(R,S){let z=R.colorSpace,ct=R.format,ot=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Tc||z!==ni&&z!==bn&&(fe.getTransfer(z)===ye?o===!1?t.has("EXT_sRGB")===!0&&ct===Dn?(R.format=Tc,R.minFilter=Sn,R.generateMipmaps=!1):S=Oo.sRGBToLinear(S):(ct!==Dn||ot!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}this.allocateTextureUnit=P,this.resetTextureUnits=V,this.setTexture2D=H,this.setTexture2DArray=Z,this.setTexture3D=J,this.setTextureCube=W,this.rebindTextures=Mt,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=wt}function d_(i,t,e){let n=e.isWebGL2;function s(r,a=bn){let o,c=fe.getTransfer(a);if(r===xi)return i.UNSIGNED_BYTE;if(r===Vu)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Gu)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Yf)return i.BYTE;if(r===qf)return i.SHORT;if(r===pl)return i.UNSIGNED_SHORT;if(r===ku)return i.INT;if(r===pi)return i.UNSIGNED_INT;if(r===mi)return i.FLOAT;if(r===fr)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Zf)return i.ALPHA;if(r===Dn)return i.RGBA;if(r===$f)return i.LUMINANCE;if(r===Jf)return i.LUMINANCE_ALPHA;if(r===Gi)return i.DEPTH_COMPONENT;if(r===Us)return i.DEPTH_STENCIL;if(r===Tc)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Kf)return i.RED;if(r===Wu)return i.RED_INTEGER;if(r===jf)return i.RG;if(r===Xu)return i.RG_INTEGER;if(r===Yu)return i.RGBA_INTEGER;if(r===ka||r===Va||r===Ga||r===Wa)if(c===ye)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ka)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Va)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ga)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Wa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ka)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Va)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ga)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Wa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ah||r===ch||r===lh||r===hh)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===ah)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ch)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===lh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===hh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===qu)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===uh||r===dh)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===uh)return c===ye?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===dh)return c===ye?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===fh||r===ph||r===mh||r===gh||r===_h||r===xh||r===yh||r===vh||r===Mh||r===Eh||r===Sh||r===bh||r===wh||r===Th)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===fh)return c===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ph)return c===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===mh)return c===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===gh)return c===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_h)return c===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xh)return c===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===yh)return c===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===vh)return c===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Mh)return c===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Eh)return c===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Sh)return c===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===bh)return c===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===wh)return c===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Th)return c===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Xa||r===Ah||r===Rh)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Xa)return c===ye?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ah)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Rh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Qf||r===Ch||r===Ph||r===Lh)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Xa)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Ch)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ph)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Lh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Vi?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var zc=class extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ce=class extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}},f_={type:"move"},lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(f_)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ce;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},kc=class extends Gn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null,_=e.getContextAttributes(),m=null,p=null,y=[],x=[],M=new et,b=null,T=new en;T.layers.enable(1),T.viewport=new Ee;let w=new en;w.layers.enable(2),w.viewport=new Ee;let L=[T,w],v=new zc;v.layers.enable(1),v.layers.enable(2);let E=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=y[X];return Q===void 0&&(Q=new lr,y[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=y[X];return Q===void 0&&(Q=new lr,y[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=y[X];return Q===void 0&&(Q=new lr,y[X]=Q),Q.getHandSpace()};function O(X){let Q=x.indexOf(X.inputSource);if(Q===-1)return;let _t=y[Q];_t!==void 0&&(_t.update(X.inputSource,X.frame,l||a),_t.dispatchEvent({type:X.type,data:X.inputSource}))}function V(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",P);for(let X=0;X<y.length;X++){let Q=x[X];Q!==null&&(x[X]=null,y[X].disconnect(Q))}E=null,D=null,t.setRenderTarget(m),d=null,f=null,u=null,s=null,p=null,gt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",V),s.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(M),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let Q={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new ii(d.framebufferWidth,d.framebufferHeight,{format:Dn,type:xi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let Q=null,_t=null,Et=null;_.depth&&(Et=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=_.stencil?Us:Gi,_t=_.stencil?Vi:pi);let St={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(St),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),p=new ii(f.textureWidth,f.textureHeight,{format:Dn,type:xi,depthTexture:new Xo(f.textureWidth,f.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});let Ot=t.properties.get(p);Ot.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),gt.setContext(s),gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(X){for(let Q=0;Q<X.removed.length;Q++){let _t=X.removed[Q],Et=x.indexOf(_t);Et>=0&&(x[Et]=null,y[Et].disconnect(_t))}for(let Q=0;Q<X.added.length;Q++){let _t=X.added[Q],Et=x.indexOf(_t);if(Et===-1){for(let Ot=0;Ot<y.length;Ot++)if(Ot>=x.length){x.push(_t),Et=Ot;break}else if(x[Ot]===null){x[Ot]=_t,Et=Ot;break}if(Et===-1)break}let St=y[Et];St&&St.connect(_t)}}let N=new C,H=new C;function Z(X,Q,_t){N.setFromMatrixPosition(Q.matrixWorld),H.setFromMatrixPosition(_t.matrixWorld);let Et=N.distanceTo(H),St=Q.projectionMatrix.elements,Ot=_t.projectionMatrix.elements,Bt=St[14]/(St[10]-1),Lt=St[14]/(St[10]+1),Mt=(St[9]+1)/St[5],F=(St[9]-1)/St[5],Zt=(St[8]-1)/St[0],bt=(Ot[8]+1)/Ot[0],Ht=Bt*Zt,wt=Bt*bt,xe=Et/(-Zt+bt),kt=xe*-Zt;Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(kt),X.translateZ(xe),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();let R=Bt+xe,S=Lt+xe,z=Ht-kt,ct=wt+(Et-kt),ot=Mt*Lt/S*R,at=F*Lt/S*R;X.projectionMatrix.makePerspective(z,ct,ot,at,R,S),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function J(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;v.near=w.near=T.near=X.near,v.far=w.far=T.far=X.far,(E!==v.near||D!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,D=v.far);let Q=X.parent,_t=v.cameras;J(v,Q);for(let Et=0;Et<_t.length;Et++)J(_t[Et],Q);_t.length===2?Z(v,T,w):v.projectionMatrix.copy(T.projectionMatrix),W(X,v,Q)};function W(X,Q,_t){_t===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(_t.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=pr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)};let j=null;function st(X,Q){if(h=Q.getViewerPose(l||a),g=Q,h!==null){let _t=h.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let Et=!1;_t.length!==v.cameras.length&&(v.cameras.length=0,Et=!0);for(let St=0;St<_t.length;St++){let Ot=_t[St],Bt=null;if(d!==null)Bt=d.getViewport(Ot);else{let Mt=u.getViewSubImage(f,Ot);Bt=Mt.viewport,St===0&&(t.setRenderTargetTextures(p,Mt.colorTexture,f.ignoreDepthValues?void 0:Mt.depthStencilTexture),t.setRenderTarget(p))}let Lt=L[St];Lt===void 0&&(Lt=new en,Lt.layers.enable(St),Lt.viewport=new Ee,L[St]=Lt),Lt.matrix.fromArray(Ot.transform.matrix),Lt.matrix.decompose(Lt.position,Lt.quaternion,Lt.scale),Lt.projectionMatrix.fromArray(Ot.projectionMatrix),Lt.projectionMatrixInverse.copy(Lt.projectionMatrix).invert(),Lt.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),St===0&&(v.matrix.copy(Lt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Et===!0&&v.cameras.push(Lt)}}for(let _t=0;_t<y.length;_t++){let Et=x[_t],St=y[_t];Et!==null&&St!==void 0&&St.update(Et,Q,l||a)}j&&j(X,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let gt=new nd;gt.setAnimationLoop(st),this.setAnimationLoop=function(X){j=X},this.dispose=function(){}}};function p_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ed(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,y,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===He&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===He&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let x=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===He&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function m_(i,t,e,n){let s={},r={},a=[],o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,x){let M=x.program;n.uniformBlockBinding(y,M)}function l(y,x){let M=s[y.id];M===void 0&&(g(y),M=h(y),s[y.id]=M,y.addEventListener("dispose",m));let b=x.program;n.updateUBOMapping(y,b);let T=t.render.frame;r[y.id]!==T&&(f(y),r[y.id]=T)}function h(y){let x=u();y.__bindingPointIndex=x;let M=i.createBuffer(),b=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,b,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,M),M}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let x=s[y.id],M=y.uniforms,b=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,w=M.length;T<w;T++){let L=Array.isArray(M[T])?M[T]:[M[T]];for(let v=0,E=L.length;v<E;v++){let D=L[v];if(d(D,T,v,b)===!0){let O=D.__offset,V=Array.isArray(D.value)?D.value:[D.value],P=0;for(let N=0;N<V.length;N++){let H=V[N],Z=_(H);typeof H=="number"||typeof H=="boolean"?(D.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,O+P,D.__data)):H.isMatrix3?(D.__data[0]=H.elements[0],D.__data[1]=H.elements[1],D.__data[2]=H.elements[2],D.__data[3]=0,D.__data[4]=H.elements[3],D.__data[5]=H.elements[4],D.__data[6]=H.elements[5],D.__data[7]=0,D.__data[8]=H.elements[6],D.__data[9]=H.elements[7],D.__data[10]=H.elements[8],D.__data[11]=0):(H.toArray(D.__data,P),P+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,x,M,b){let T=y.value,w=x+"_"+M;if(b[w]===void 0)return typeof T=="number"||typeof T=="boolean"?b[w]=T:b[w]=T.clone(),!0;{let L=b[w];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return b[w]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function g(y){let x=y.uniforms,M=0,b=16;for(let w=0,L=x.length;w<L;w++){let v=Array.isArray(x[w])?x[w]:[x[w]];for(let E=0,D=v.length;E<D;E++){let O=v[E],V=Array.isArray(O.value)?O.value:[O.value];for(let P=0,N=V.length;P<N;P++){let H=V[P],Z=_(H),J=M%b;J!==0&&b-J<Z.boundary&&(M+=b-J),O.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=Z.storage}}}let T=M%b;return T>0&&(M+=b-T),y.__size=M,y.__cache={},this}function _(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){let x=y.target;x.removeEventListener("dispose",m);let M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}var xr=class{constructor(t={}){let{canvas:e=bp(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;let d=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ie,this._useLegacyLights=!1,this.toneMapping=_i,this.toneMappingExposure=1;let x=this,M=!1,b=0,T=0,w=null,L=-1,v=null,E=new Ee,D=new Ee,O=null,V=new Ut(0),P=0,N=e.width,H=e.height,Z=1,J=null,W=null,j=new Ee(0,0,N,H),st=new Ee(0,0,N,H),gt=!1,X=new _r,Q=!1,_t=!1,Et=null,St=new he,Ot=new et,Bt=new C,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Mt(){return w===null?Z:1}let F=n;function Zt(A,B){for(let G=0;G<A.length;G++){let Y=A[G],k=e.getContext(Y,B);if(k!==null)return k}return null}try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ul}`),e.addEventListener("webglcontextlost",dt,!1),e.addEventListener("webglcontextrestored",U,!1),e.addEventListener("webglcontextcreationerror",ht,!1),F===null){let B=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&B.shift(),F=Zt(B,A),F===null)throw Zt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let bt,Ht,wt,xe,kt,R,S,z,ct,ot,at,Tt,xt,vt,Dt,Gt,rt,ne,I,it,pt,lt,At,jt;function ie(){bt=new Ug(F),Ht=new Rg(F,bt,t),bt.init(Ht),lt=new d_(F,bt,Ht),wt=new h_(F,bt,Ht),xe=new Fg(F),kt=new j1,R=new u_(F,bt,wt,kt,Ht,lt,xe),S=new Pg(x),z=new Dg(x),ct=new Xp(F,Ht),At=new Tg(F,bt,ct,Ht),ot=new Ng(F,ct,xe,At),at=new kg(F,ot,ct,xe),I=new zg(F,Ht,R),Gt=new Cg(kt),Tt=new K1(x,S,z,bt,Ht,At,Gt),xt=new p_(x,kt),vt=new t_,Dt=new o_(bt,Ht),ne=new wg(x,S,z,wt,at,f,c),rt=new l_(x,at,Ht),jt=new m_(F,xe,Ht,wt),it=new Ag(F,bt,xe,Ht),pt=new Og(F,bt,xe,Ht),xe.programs=Tt.programs,x.capabilities=Ht,x.extensions=bt,x.properties=kt,x.renderLists=vt,x.shadowMap=rt,x.state=wt,x.info=xe}ie();let $t=new kc(x,F);this.xr=$t,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let A=bt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=bt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(A){A!==void 0&&(Z=A,this.setSize(N,H,!1))},this.getSize=function(A){return A.set(N,H)},this.setSize=function(A,B,G=!0){if($t.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=A,H=B,e.width=Math.floor(A*Z),e.height=Math.floor(B*Z),G===!0&&(e.style.width=A+"px",e.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(N*Z,H*Z).floor()},this.setDrawingBufferSize=function(A,B,G){N=A,H=B,Z=G,e.width=Math.floor(A*G),e.height=Math.floor(B*G),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(E)},this.getViewport=function(A){return A.copy(j)},this.setViewport=function(A,B,G,Y){A.isVector4?j.set(A.x,A.y,A.z,A.w):j.set(A,B,G,Y),wt.viewport(E.copy(j).multiplyScalar(Z).floor())},this.getScissor=function(A){return A.copy(st)},this.setScissor=function(A,B,G,Y){A.isVector4?st.set(A.x,A.y,A.z,A.w):st.set(A,B,G,Y),wt.scissor(D.copy(st).multiplyScalar(Z).floor())},this.getScissorTest=function(){return gt},this.setScissorTest=function(A){wt.setScissorTest(gt=A)},this.setOpaqueSort=function(A){J=A},this.setTransparentSort=function(A){W=A},this.getClearColor=function(A){return A.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(A=!0,B=!0,G=!0){let Y=0;if(A){let k=!1;if(w!==null){let yt=w.texture.format;k=yt===Yu||yt===Xu||yt===Wu}if(k){let yt=w.texture.type,Ct=yt===xi||yt===pi||yt===pl||yt===Vi||yt===Vu||yt===Gu,Ft=ne.getClearColor(),zt=ne.getClearAlpha(),Jt=Ft.r,Vt=Ft.g,Wt=Ft.b;Ct?(d[0]=Jt,d[1]=Vt,d[2]=Wt,d[3]=zt,F.clearBufferuiv(F.COLOR,0,d)):(g[0]=Jt,g[1]=Vt,g[2]=Wt,g[3]=zt,F.clearBufferiv(F.COLOR,0,g))}else Y|=F.COLOR_BUFFER_BIT}B&&(Y|=F.DEPTH_BUFFER_BIT),G&&(Y|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",dt,!1),e.removeEventListener("webglcontextrestored",U,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),vt.dispose(),Dt.dispose(),kt.dispose(),S.dispose(),z.dispose(),at.dispose(),At.dispose(),jt.dispose(),Tt.dispose(),$t.dispose(),$t.removeEventListener("sessionstart",rn),$t.removeEventListener("sessionend",ge),Et&&(Et.dispose(),Et=null),on.stop()};function dt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let A=xe.autoReset,B=rt.enabled,G=rt.autoUpdate,Y=rt.needsUpdate,k=rt.type;ie(),xe.autoReset=A,rt.enabled=B,rt.autoUpdate=G,rt.needsUpdate=Y,rt.type=k}function ht(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ut(A){let B=A.target;B.removeEventListener("dispose",ut),It(B)}function It(A){Rt(A),kt.remove(A)}function Rt(A){let B=kt.get(A).programs;B!==void 0&&(B.forEach(function(G){Tt.releaseProgram(G)}),A.isShaderMaterial&&Tt.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,G,Y,k,yt){B===null&&(B=Lt);let Ct=k.isMesh&&k.matrixWorld.determinant()<0,Ft=lf(A,B,G,Y,k);wt.setMaterial(Y,Ct);let zt=G.index,Jt=1;if(Y.wireframe===!0){if(zt=ot.getWireframeAttribute(G),zt===void 0)return;Jt=2}let Vt=G.drawRange,Wt=G.attributes.position,Le=Vt.start*Jt,pn=(Vt.start+Vt.count)*Jt;yt!==null&&(Le=Math.max(Le,yt.start*Jt),pn=Math.min(pn,(yt.start+yt.count)*Jt)),zt!==null?(Le=Math.max(Le,0),pn=Math.min(pn,zt.count)):Wt!=null&&(Le=Math.max(Le,0),pn=Math.min(pn,Wt.count));let Xe=pn-Le;if(Xe<0||Xe===1/0)return;At.setup(k,Y,Ft,G,zt);let Zn,we=it;if(zt!==null&&(Zn=ct.get(zt),we=pt,we.setIndex(Zn)),k.isMesh)Y.wireframe===!0?(wt.setLineWidth(Y.wireframeLinewidth*Mt()),we.setMode(F.LINES)):we.setMode(F.TRIANGLES);else if(k.isLine){let Qt=Y.linewidth;Qt===void 0&&(Qt=1),wt.setLineWidth(Qt*Mt()),k.isLineSegments?we.setMode(F.LINES):k.isLineLoop?we.setMode(F.LINE_LOOP):we.setMode(F.LINE_STRIP)}else k.isPoints?we.setMode(F.POINTS):k.isSprite&&we.setMode(F.TRIANGLES);if(k.isBatchedMesh)we.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)we.renderInstances(Le,Xe,k.count);else if(G.isInstancedBufferGeometry){let Qt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Oa=Math.min(G.instanceCount,Qt);we.renderInstances(Le,Xe,Oa)}else we.render(Le,Xe)};function re(A,B,G){A.transparent===!0&&A.side===Se&&A.forceSinglePass===!1?(A.side=He,A.needsUpdate=!0,jr(A,B,G),A.side=yi,A.needsUpdate=!0,jr(A,B,G),A.side=Se):jr(A,B,G)}this.compile=function(A,B,G=null){G===null&&(G=A),m=Dt.get(G),m.init(),y.push(m),G.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),A!==G&&A.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights(x._useLegacyLights);let Y=new Set;return A.traverse(function(k){let yt=k.material;if(yt)if(Array.isArray(yt))for(let Ct=0;Ct<yt.length;Ct++){let Ft=yt[Ct];re(Ft,G,k),Y.add(Ft)}else re(yt,G,k),Y.add(yt)}),y.pop(),m=null,Y},this.compileAsync=function(A,B,G=null){let Y=this.compile(A,B,G);return new Promise(k=>{function yt(){if(Y.forEach(function(Ct){kt.get(Ct).currentProgram.isReady()&&Y.delete(Ct)}),Y.size===0){k(A);return}setTimeout(yt,10)}bt.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let ae=null;function We(A){ae&&ae(A)}function rn(){on.stop()}function ge(){on.start()}let on=new nd;on.setAnimationLoop(We),typeof self<"u"&&on.setContext(self),this.setAnimationLoop=function(A){ae=A,$t.setAnimationLoop(A),A===null?on.stop():on.start()},$t.addEventListener("sessionstart",rn),$t.addEventListener("sessionend",ge),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),$t.enabled===!0&&$t.isPresenting===!0&&($t.cameraAutoUpdate===!0&&$t.updateCamera(B),B=$t.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,B,w),m=Dt.get(A,y.length),m.init(),y.push(m),St.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),X.setFromProjectionMatrix(St),_t=this.localClippingEnabled,Q=Gt.init(this.clippingPlanes,_t),_=vt.get(A,p.length),_.init(),p.push(_),kn(A,B,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(J,W),this.info.render.frame++,Q===!0&&Gt.beginShadows();let G=m.state.shadowsArray;if(rt.render(G,A,B),Q===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(_,A),m.setupLights(x._useLegacyLights),B.isArrayCamera){let Y=B.cameras;for(let k=0,yt=Y.length;k<yt;k++){let Ct=Y[k];Zl(_,A,Ct,Ct.viewport)}}else Zl(_,A,B);w!==null&&(R.updateMultisampleRenderTarget(w),R.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(x,A,B),At.resetDefaultState(),L=-1,v=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function kn(A,B,G,Y){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)G=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||X.intersectsSprite(A)){Y&&Bt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(St);let Ct=at.update(A),Ft=A.material;Ft.visible&&_.push(A,Ct,Ft,G,Bt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||X.intersectsObject(A))){let Ct=at.update(A),Ft=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Bt.copy(A.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Bt.copy(Ct.boundingSphere.center)),Bt.applyMatrix4(A.matrixWorld).applyMatrix4(St)),Array.isArray(Ft)){let zt=Ct.groups;for(let Jt=0,Vt=zt.length;Jt<Vt;Jt++){let Wt=zt[Jt],Le=Ft[Wt.materialIndex];Le&&Le.visible&&_.push(A,Ct,Le,G,Bt.z,Wt)}}else Ft.visible&&_.push(A,Ct,Ft,G,Bt.z,null)}}let yt=A.children;for(let Ct=0,Ft=yt.length;Ct<Ft;Ct++)kn(yt[Ct],B,G,Y)}function Zl(A,B,G,Y){let k=A.opaque,yt=A.transmissive,Ct=A.transparent;m.setupLightsView(G),Q===!0&&Gt.setGlobalState(x.clippingPlanes,G),yt.length>0&&cf(k,yt,B,G),Y&&wt.viewport(E.copy(Y)),k.length>0&&Kr(k,B,G),yt.length>0&&Kr(yt,B,G),Ct.length>0&&Kr(Ct,B,G),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function cf(A,B,G,Y){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;let yt=Ht.isWebGL2;Et===null&&(Et=new ii(1,1,{generateMipmaps:!0,type:bt.has("EXT_color_buffer_half_float")?fr:xi,minFilter:Xi,samples:yt?4:0})),x.getDrawingBufferSize(Ot),yt?Et.setSize(Ot.x,Ot.y):Et.setSize(No(Ot.x),No(Ot.y));let Ct=x.getRenderTarget();x.setRenderTarget(Et),x.getClearColor(V),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();let Ft=x.toneMapping;x.toneMapping=_i,Kr(A,G,Y),R.updateMultisampleRenderTarget(Et),R.updateRenderTargetMipmap(Et);let zt=!1;for(let Jt=0,Vt=B.length;Jt<Vt;Jt++){let Wt=B[Jt],Le=Wt.object,pn=Wt.geometry,Xe=Wt.material,Zn=Wt.group;if(Xe.side===Se&&Le.layers.test(Y.layers)){let we=Xe.side;Xe.side=He,Xe.needsUpdate=!0,$l(Le,G,Y,pn,Xe,Zn),Xe.side=we,Xe.needsUpdate=!0,zt=!0}}zt===!0&&(R.updateMultisampleRenderTarget(Et),R.updateRenderTargetMipmap(Et)),x.setRenderTarget(Ct),x.setClearColor(V,P),x.toneMapping=Ft}function Kr(A,B,G){let Y=B.isScene===!0?B.overrideMaterial:null;for(let k=0,yt=A.length;k<yt;k++){let Ct=A[k],Ft=Ct.object,zt=Ct.geometry,Jt=Y===null?Ct.material:Y,Vt=Ct.group;Ft.layers.test(G.layers)&&$l(Ft,B,G,zt,Jt,Vt)}}function $l(A,B,G,Y,k,yt){A.onBeforeRender(x,B,G,Y,k,yt),A.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),k.onBeforeRender(x,B,G,Y,A,yt),k.transparent===!0&&k.side===Se&&k.forceSinglePass===!1?(k.side=He,k.needsUpdate=!0,x.renderBufferDirect(G,B,Y,k,A,yt),k.side=yi,k.needsUpdate=!0,x.renderBufferDirect(G,B,Y,k,A,yt),k.side=Se):x.renderBufferDirect(G,B,Y,k,A,yt),A.onAfterRender(x,B,G,Y,k,yt)}function jr(A,B,G){B.isScene!==!0&&(B=Lt);let Y=kt.get(A),k=m.state.lights,yt=m.state.shadowsArray,Ct=k.state.version,Ft=Tt.getParameters(A,k.state,yt,B,G),zt=Tt.getProgramCacheKey(Ft),Jt=Y.programs;Y.environment=A.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(A.isMeshStandardMaterial?z:S).get(A.envMap||Y.environment),Jt===void 0&&(A.addEventListener("dispose",ut),Jt=new Map,Y.programs=Jt);let Vt=Jt.get(zt);if(Vt!==void 0){if(Y.currentProgram===Vt&&Y.lightsStateVersion===Ct)return Kl(A,Ft),Vt}else Ft.uniforms=Tt.getUniforms(A),A.onBuild(G,Ft,x),A.onBeforeCompile(Ft,x),Vt=Tt.acquireProgram(Ft,zt),Jt.set(zt,Vt),Y.uniforms=Ft.uniforms;let Wt=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Wt.clippingPlanes=Gt.uniform),Kl(A,Ft),Y.needsLights=uf(A),Y.lightsStateVersion=Ct,Y.needsLights&&(Wt.ambientLightColor.value=k.state.ambient,Wt.lightProbe.value=k.state.probe,Wt.directionalLights.value=k.state.directional,Wt.directionalLightShadows.value=k.state.directionalShadow,Wt.spotLights.value=k.state.spot,Wt.spotLightShadows.value=k.state.spotShadow,Wt.rectAreaLights.value=k.state.rectArea,Wt.ltc_1.value=k.state.rectAreaLTC1,Wt.ltc_2.value=k.state.rectAreaLTC2,Wt.pointLights.value=k.state.point,Wt.pointLightShadows.value=k.state.pointShadow,Wt.hemisphereLights.value=k.state.hemi,Wt.directionalShadowMap.value=k.state.directionalShadowMap,Wt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Wt.spotShadowMap.value=k.state.spotShadowMap,Wt.spotLightMatrix.value=k.state.spotLightMatrix,Wt.spotLightMap.value=k.state.spotLightMap,Wt.pointShadowMap.value=k.state.pointShadowMap,Wt.pointShadowMatrix.value=k.state.pointShadowMatrix),Y.currentProgram=Vt,Y.uniformsList=null,Vt}function Jl(A){if(A.uniformsList===null){let B=A.currentProgram.getUniforms();A.uniformsList=Ls.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function Kl(A,B){let G=kt.get(A);G.outputColorSpace=B.outputColorSpace,G.batching=B.batching,G.instancing=B.instancing,G.instancingColor=B.instancingColor,G.skinning=B.skinning,G.morphTargets=B.morphTargets,G.morphNormals=B.morphNormals,G.morphColors=B.morphColors,G.morphTargetsCount=B.morphTargetsCount,G.numClippingPlanes=B.numClippingPlanes,G.numIntersection=B.numClipIntersection,G.vertexAlphas=B.vertexAlphas,G.vertexTangents=B.vertexTangents,G.toneMapping=B.toneMapping}function lf(A,B,G,Y,k){B.isScene!==!0&&(B=Lt),R.resetTextureUnits();let yt=B.fog,Ct=Y.isMeshStandardMaterial?B.environment:null,Ft=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:ni,zt=(Y.isMeshStandardMaterial?z:S).get(Y.envMap||Ct),Jt=Y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Vt=!!G.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Wt=!!G.morphAttributes.position,Le=!!G.morphAttributes.normal,pn=!!G.morphAttributes.color,Xe=_i;Y.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Xe=x.toneMapping);let Zn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,we=Zn!==void 0?Zn.length:0,Qt=kt.get(Y),Oa=m.state.lights;if(Q===!0&&(_t===!0||A!==v)){let Mn=A===v&&Y.id===L;Gt.setState(Y,A,Mn)}let Ce=!1;Y.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==Oa.state.version||Qt.outputColorSpace!==Ft||k.isBatchedMesh&&Qt.batching===!1||!k.isBatchedMesh&&Qt.batching===!0||k.isInstancedMesh&&Qt.instancing===!1||!k.isInstancedMesh&&Qt.instancing===!0||k.isSkinnedMesh&&Qt.skinning===!1||!k.isSkinnedMesh&&Qt.skinning===!0||k.isInstancedMesh&&Qt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Qt.instancingColor===!1&&k.instanceColor!==null||Qt.envMap!==zt||Y.fog===!0&&Qt.fog!==yt||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==Gt.numPlanes||Qt.numIntersection!==Gt.numIntersection)||Qt.vertexAlphas!==Jt||Qt.vertexTangents!==Vt||Qt.morphTargets!==Wt||Qt.morphNormals!==Le||Qt.morphColors!==pn||Qt.toneMapping!==Xe||Ht.isWebGL2===!0&&Qt.morphTargetsCount!==we)&&(Ce=!0):(Ce=!0,Qt.__version=Y.version);let Di=Qt.currentProgram;Ce===!0&&(Di=jr(Y,B,k));let jl=!1,js=!1,Fa=!1,je=Di.getUniforms(),Ui=Qt.uniforms;if(wt.useProgram(Di.program)&&(jl=!0,js=!0,Fa=!0),Y.id!==L&&(L=Y.id,js=!0),jl||v!==A){je.setValue(F,"projectionMatrix",A.projectionMatrix),je.setValue(F,"viewMatrix",A.matrixWorldInverse);let Mn=je.map.cameraPosition;Mn!==void 0&&Mn.setValue(F,Bt.setFromMatrixPosition(A.matrixWorld)),Ht.logarithmicDepthBuffer&&je.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&je.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),v!==A&&(v=A,js=!0,Fa=!0)}if(k.isSkinnedMesh){je.setOptional(F,k,"bindMatrix"),je.setOptional(F,k,"bindMatrixInverse");let Mn=k.skeleton;Mn&&(Ht.floatVertexTextures?(Mn.boneTexture===null&&Mn.computeBoneTexture(),je.setValue(F,"boneTexture",Mn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(je.setOptional(F,k,"batchingTexture"),je.setValue(F,"batchingTexture",k._matricesTexture,R));let Ba=G.morphAttributes;if((Ba.position!==void 0||Ba.normal!==void 0||Ba.color!==void 0&&Ht.isWebGL2===!0)&&I.update(k,G,Di),(js||Qt.receiveShadow!==k.receiveShadow)&&(Qt.receiveShadow=k.receiveShadow,je.setValue(F,"receiveShadow",k.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Ui.envMap.value=zt,Ui.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),js&&(je.setValue(F,"toneMappingExposure",x.toneMappingExposure),Qt.needsLights&&hf(Ui,Fa),yt&&Y.fog===!0&&xt.refreshFogUniforms(Ui,yt),xt.refreshMaterialUniforms(Ui,Y,Z,H,Et),Ls.upload(F,Jl(Qt),Ui,R)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ls.upload(F,Jl(Qt),Ui,R),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&je.setValue(F,"center",k.center),je.setValue(F,"modelViewMatrix",k.modelViewMatrix),je.setValue(F,"normalMatrix",k.normalMatrix),je.setValue(F,"modelMatrix",k.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let Mn=Y.uniformsGroups;for(let Ha=0,df=Mn.length;Ha<df;Ha++)if(Ht.isWebGL2){let Ql=Mn[Ha];jt.update(Ql,Di),jt.bind(Ql,Di)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Di}function hf(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function uf(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,B,G){kt.get(A.texture).__webglTexture=B,kt.get(A.depthTexture).__webglTexture=G;let Y=kt.get(A);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=G===void 0,Y.__autoAllocateDepthBuffer||bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,B){let G=kt.get(A);G.__webglFramebuffer=B,G.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,G=0){w=A,b=B,T=G;let Y=!0,k=null,yt=!1,Ct=!1;if(A){let zt=kt.get(A);zt.__useDefaultFramebuffer!==void 0?(wt.bindFramebuffer(F.FRAMEBUFFER,null),Y=!1):zt.__webglFramebuffer===void 0?R.setupRenderTarget(A):zt.__hasExternalTextures&&R.rebindTextures(A,kt.get(A.texture).__webglTexture,kt.get(A.depthTexture).__webglTexture);let Jt=A.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Ct=!0);let Vt=kt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Vt[B])?k=Vt[B][G]:k=Vt[B],yt=!0):Ht.isWebGL2&&A.samples>0&&R.useMultisampledRTT(A)===!1?k=kt.get(A).__webglMultisampledFramebuffer:Array.isArray(Vt)?k=Vt[G]:k=Vt,E.copy(A.viewport),D.copy(A.scissor),O=A.scissorTest}else E.copy(j).multiplyScalar(Z).floor(),D.copy(st).multiplyScalar(Z).floor(),O=gt;if(wt.bindFramebuffer(F.FRAMEBUFFER,k)&&Ht.drawBuffers&&Y&&wt.drawBuffers(A,k),wt.viewport(E),wt.scissor(D),wt.setScissorTest(O),yt){let zt=kt.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,zt.__webglTexture,G)}else if(Ct){let zt=kt.get(A.texture),Jt=B||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,zt.__webglTexture,G||0,Jt)}L=-1},this.readRenderTargetPixels=function(A,B,G,Y,k,yt,Ct){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=kt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ft=Ft[Ct]),Ft){wt.bindFramebuffer(F.FRAMEBUFFER,Ft);try{let zt=A.texture,Jt=zt.format,Vt=zt.type;if(Jt!==Dn&&lt.convert(Jt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Wt=Vt===fr&&(bt.has("EXT_color_buffer_half_float")||Ht.isWebGL2&&bt.has("EXT_color_buffer_float"));if(Vt!==xi&&lt.convert(Vt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Vt===mi&&(Ht.isWebGL2||bt.has("OES_texture_float")||bt.has("WEBGL_color_buffer_float")))&&!Wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-Y&&G>=0&&G<=A.height-k&&F.readPixels(B,G,Y,k,lt.convert(Jt),lt.convert(Vt),yt)}finally{let zt=w!==null?kt.get(w).__webglFramebuffer:null;wt.bindFramebuffer(F.FRAMEBUFFER,zt)}}},this.copyFramebufferToTexture=function(A,B,G=0){let Y=Math.pow(2,-G),k=Math.floor(B.image.width*Y),yt=Math.floor(B.image.height*Y);R.setTexture2D(B,0),F.copyTexSubImage2D(F.TEXTURE_2D,G,0,0,A.x,A.y,k,yt),wt.unbindTexture()},this.copyTextureToTexture=function(A,B,G,Y=0){let k=B.image.width,yt=B.image.height,Ct=lt.convert(G.format),Ft=lt.convert(G.type);R.setTexture2D(G,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment),B.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Y,A.x,A.y,k,yt,Ct,Ft,B.image.data):B.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Y,A.x,A.y,B.mipmaps[0].width,B.mipmaps[0].height,Ct,B.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,Y,A.x,A.y,Ct,Ft,B.image),Y===0&&G.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),wt.unbindTexture()},this.copyTextureToTexture3D=function(A,B,G,Y,k=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let yt=A.max.x-A.min.x+1,Ct=A.max.y-A.min.y+1,Ft=A.max.z-A.min.z+1,zt=lt.convert(Y.format),Jt=lt.convert(Y.type),Vt;if(Y.isData3DTexture)R.setTexture3D(Y,0),Vt=F.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)R.setTexture2DArray(Y,0),Vt=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Y.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Y.unpackAlignment);let Wt=F.getParameter(F.UNPACK_ROW_LENGTH),Le=F.getParameter(F.UNPACK_IMAGE_HEIGHT),pn=F.getParameter(F.UNPACK_SKIP_PIXELS),Xe=F.getParameter(F.UNPACK_SKIP_ROWS),Zn=F.getParameter(F.UNPACK_SKIP_IMAGES),we=G.isCompressedTexture?G.mipmaps[k]:G.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,we.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,we.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,A.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,A.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,A.min.z),G.isDataTexture||G.isData3DTexture?F.texSubImage3D(Vt,k,B.x,B.y,B.z,yt,Ct,Ft,zt,Jt,we.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Vt,k,B.x,B.y,B.z,yt,Ct,Ft,zt,we.data)):F.texSubImage3D(Vt,k,B.x,B.y,B.z,yt,Ct,Ft,zt,Jt,we),F.pixelStorei(F.UNPACK_ROW_LENGTH,Wt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Le),F.pixelStorei(F.UNPACK_SKIP_PIXELS,pn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Xe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Zn),k===0&&Y.generateMipmaps&&F.generateMipmap(Vt),wt.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),wt.unbindTexture()},this.resetState=function(){b=0,T=0,w=null,wt.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===ml?"display-p3":"srgb",e.unpackColorSpace=fe.workingColorSpace===ca?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ie?Wi:Zu}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Wi?Ie:ni}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Vc=class extends xr{};Vc.prototype.isWebGL1Renderer=!0;var Yo=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ut(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Fs=class extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var yr=class extends me{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ss=new he,Eu=new he,Eo=[],Su=new si,g_=new he,ir=new K,sr=new vi,vr=class extends K{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new yr(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,g_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new si),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ss),Su.copy(t.boundingBox).applyMatrix4(Ss),this.boundingBox.union(Su)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new vi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ss),sr.copy(t.boundingSphere).applyMatrix4(Ss),this.boundingSphere.union(sr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ir.geometry=this.geometry,ir.material=this.material,ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sr.copy(this.boundingSphere),sr.applyMatrix4(n),t.ray.intersectsSphere(sr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ss),Eu.multiplyMatrices(n,Ss),ir.matrixWorld=Eu,ir.raycast(t,Eo);for(let a=0,o=Eo.length;a<o;a++){let c=Eo[a];c.instanceId=r,c.object=this,e.push(c)}Eo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new yr(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Mr=class extends Mi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},bu=new C,wu=new C,Tu=new he,mc=new Yi,So=new vi,Gc=class extends qe{constructor(t=new pe,e=new Mr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)bu.fromBufferAttribute(e,s-1),wu.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=bu.distanceTo(wu);t.setAttribute("lineDistance",new Nt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere),So.applyMatrix4(s),So.radius+=r,t.ray.intersectsSphere(So)===!1)return;Tu.copy(s).invert(),mc.copy(t.ray).applyMatrix4(Tu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new C,h=new C,u=new C,f=new C,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let p=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count);for(let x=p,M=y-1;x<M;x+=d){let b=g.getX(x),T=g.getX(x+1);if(l.fromBufferAttribute(m,b),h.fromBufferAttribute(m,T),mc.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let L=t.ray.origin.distanceTo(f);L<t.near||L>t.far||e.push({distance:L,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let x=p,M=y-1;x<M;x+=d){if(l.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),mc.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let T=t.ray.origin.distanceTo(f);T<t.near||T>t.far||e.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},Au=new C,Ru=new C,qo=class extends Gc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Au.fromBufferAttribute(e,s),Ru.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Au.distanceTo(Ru);t.setAttribute("lineDistance",new Nt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Zo=class extends _n{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new et:new C);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new C,s=[],r=[],a=[],o=new C,c=new he;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Be(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Be(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Er=class extends wn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e){let n=e||new et,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Wc=class extends Er{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function xl(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let f=(a-r)/l-(o-r)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+u)+(c-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var bo=new C,gc=new xl,_c=new xl,xc=new xl,On=class extends wn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(bo.subVectors(s[0],s[1]).add(s[0]),l=bo);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(bo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=bo),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),gc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,_,m),_c.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,_,m),xc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(gc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),_c.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),xc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(gc.calc(c),_c.calc(c),xc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Cu(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function __(i,t){let e=1-i;return e*e*t}function x_(i,t){return 2*(1-i)*i*t}function y_(i,t){return i*i*t}function hr(i,t,e,n){return __(i,t)+x_(i,e)+y_(i,n)}function v_(i,t){let e=1-i;return e*e*e*t}function M_(i,t){let e=1-i;return 3*e*e*i*t}function E_(i,t){return 3*(1-i)*i*i*t}function S_(i,t){return i*i*i*t}function ur(i,t,e,n,s){return v_(i,t)+M_(i,e)+E_(i,n)+S_(i,s)}var $o=class extends wn{constructor(t=new et,e=new et,n=new et,s=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new et){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ur(t,s.x,r.x,a.x,o.x),ur(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Xc=class extends wn{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ur(t,s.x,r.x,a.x,o.x),ur(t,s.y,r.y,a.y,o.y),ur(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Jo=class extends wn{constructor(t=new et,e=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new et){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Yc=class extends wn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ko=class extends wn{constructor(t=new et,e=new et,n=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new et){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(hr(t,s.x,r.x,a.x),hr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jo=class extends wn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(hr(t,s.x,r.x,a.x),hr(t,s.y,r.y,a.y),hr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qo=class extends wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new et){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Cu(o,c.x,l.x,h.x,u.x),Cu(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new et().fromArray(s))}return this}},qc=Object.freeze({__proto__:null,ArcCurve:Wc,CatmullRomCurve3:On,CubicBezierCurve:$o,CubicBezierCurve3:Xc,EllipseCurve:Er,LineCurve:Jo,LineCurve3:Yc,QuadraticBezierCurve:Ko,QuadraticBezierCurve3:jo,SplineCurve:Qo}),Zc=class extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new qc[s.type]().fromJSON(s))}return this}},Bs=class extends Zc{constructor(t){super(),this.type="Path",this.currentPoint=new et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Jo(this.currentPoint.clone(),new et(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Ko(this.currentPoint.clone(),new et(t,e),new et(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new $o(this.currentPoint.clone(),new et(t,e),new et(n,s),new et(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Qo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){let l=new Er(t,e,n,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Sr=class i extends pe{constructor(t=[new et(0,-.5),new et(.5,0),new et(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Be(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/e,u=new C,f=new et,d=new C,g=new C,_=new C,m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(g)}for(let y=0;y<=e;y++){let x=n+y*h*s,M=Math.sin(x),b=Math.cos(x);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*M,u.y=t[T].y,u.z=t[T].x*b,a.push(u.x,u.y,u.z),f.x=y/e,f.y=T/(t.length-1),o.push(f.x,f.y);let w=c[3*T+0]*M,L=c[3*T+1],v=c[3*T+0]*b;l.push(w,L,v)}}for(let y=0;y<e;y++)for(let x=0;x<t.length-1;x++){let M=x+y*t.length,b=M,T=M+t.length,w=M+t.length+1,L=M+1;r.push(b,T,L),r.push(w,L,T)}this.setIndex(r),this.setAttribute("position",new Nt(a,3)),this.setAttribute("uv",new Nt(o,2)),this.setAttribute("normal",new Nt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Hs=class i extends pe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new C,h=new et;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Nt(a,3)),this.setAttribute("normal",new Nt(o,3)),this.setAttribute("uv",new Nt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ve=class i extends pe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,_=[],m=n/2,p=0;y(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Nt(u,3)),this.setAttribute("normal",new Nt(f,3)),this.setAttribute("uv",new Nt(d,2));function y(){let M=new C,b=new C,T=0,w=(e-t)/n;for(let L=0;L<=r;L++){let v=[],E=L/r,D=E*(e-t)+t;for(let O=0;O<=s;O++){let V=O/s,P=V*c+o,N=Math.sin(P),H=Math.cos(P);b.x=D*N,b.y=-E*n+m,b.z=D*H,u.push(b.x,b.y,b.z),M.set(N,w,H).normalize(),f.push(M.x,M.y,M.z),d.push(V,1-E),v.push(g++)}_.push(v)}for(let L=0;L<s;L++)for(let v=0;v<r;v++){let E=_[v][L],D=_[v+1][L],O=_[v+1][L+1],V=_[v][L+1];h.push(E,D,V),h.push(D,O,V),T+=6}l.addGroup(p,T,0),p+=T}function x(M){let b=g,T=new et,w=new C,L=0,v=M===!0?t:e,E=M===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*E,0),f.push(0,E,0),d.push(.5,.5),g++;let D=g;for(let O=0;O<=s;O++){let P=O/s*c+o,N=Math.cos(P),H=Math.sin(P);w.x=v*H,w.y=m*E,w.z=v*N,u.push(w.x,w.y,w.z),f.push(0,E,0),T.x=N*.5+.5,T.y=H*.5*E+.5,d.push(T.x,T.y),g++}for(let O=0;O<s;O++){let V=b+O,P=D+O;M===!0?h.push(P,P+1,V):h.push(P+1,P,V),L+=3}l.addGroup(p,L,M===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},qi=class i extends ve{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},$c=class i extends pe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new Nt(r,3)),this.setAttribute("normal",new Nt(r.slice(),3)),this.setAttribute("uv",new Nt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let x=new C,M=new C,b=new C;for(let T=0;T<e.length;T+=3)d(e[T+0],x),d(e[T+1],M),d(e[T+2],b),c(x,M,b,y)}function c(y,x,M,b){let T=b+1,w=[];for(let L=0;L<=T;L++){w[L]=[];let v=y.clone().lerp(M,L/T),E=x.clone().lerp(M,L/T),D=T-L;for(let O=0;O<=D;O++)O===0&&L===T?w[L][O]=v:w[L][O]=v.clone().lerp(E,O/D)}for(let L=0;L<T;L++)for(let v=0;v<2*(T-L)-1;v++){let E=Math.floor(v/2);v%2===0?(f(w[L][E+1]),f(w[L+1][E]),f(w[L][E])):(f(w[L][E+1]),f(w[L+1][E+1]),f(w[L+1][E]))}}function l(y){let x=new C;for(let M=0;M<r.length;M+=3)x.x=r[M+0],x.y=r[M+1],x.z=r[M+2],x.normalize().multiplyScalar(y),r[M+0]=x.x,r[M+1]=x.y,r[M+2]=x.z}function h(){let y=new C;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];let M=m(y)/2/Math.PI+.5,b=p(y)/Math.PI+.5;a.push(M,1-b)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){let x=a[y+0],M=a[y+2],b=a[y+4],T=Math.max(x,M,b),w=Math.min(x,M,b);T>.9&&w<.1&&(x<.2&&(a[y+0]+=1),M<.2&&(a[y+2]+=1),b<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,x){let M=y*3;x.x=t[M+0],x.y=t[M+1],x.z=t[M+2]}function g(){let y=new C,x=new C,M=new C,b=new C,T=new et,w=new et,L=new et;for(let v=0,E=0;v<r.length;v+=9,E+=6){y.set(r[v+0],r[v+1],r[v+2]),x.set(r[v+3],r[v+4],r[v+5]),M.set(r[v+6],r[v+7],r[v+8]),T.set(a[E+0],a[E+1]),w.set(a[E+2],a[E+3]),L.set(a[E+4],a[E+5]),b.copy(y).add(x).add(M).divideScalar(3);let D=m(b);_(T,E+0,y,D),_(w,E+2,x,D),_(L,E+4,M,D)}}function _(y,x,M,b){b<0&&y.x===1&&(a[x]=y.x-1),M.x===0&&M.z===0&&(a[x]=b/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var zs=class extends Bs{constructor(t){super(t),this.uuid=Ki(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Bs().fromJSON(s))}return this}},b_={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=cd(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,f,d;if(n&&(r=C_(i,t,r,e)),i.length>80*e){o=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],f=i[g+1],u<o&&(o=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-o,h-c),d=d!==0?32767/d:0}return br(r,a,e,o,c,d,0),a}};function cd(i,t,e,n,s){let r,a;if(s===z_(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Pu(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Pu(r,i[r],i[r+1],a);return a&&ha(a,a.next)&&(Tr(a),a=a.next),a}function Zi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ha(e,e.next)||Te(e.prev,e,e.next)===0)){if(Tr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function br(i,t,e,n,s,r,a){if(!i)return;!a&&r&&U_(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?T_(i,n,s,r):w_(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Tr(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=A_(Zi(i),t,e),br(i,t,e,n,s,r,2)):a===2&&R_(i,t,e,n,s,r):br(Zi(i),t,e,n,s,r,1);break}}}function w_(i){let t=i.prev,e=i,n=i.next;if(Te(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,f=s>r?s>a?s:a:r>a?r:a,d=o>c?o>l?o:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Rs(s,o,r,c,a,l,g.x,g.y)&&Te(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function T_(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Te(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,f=a.y,d=o<c?o<l?o:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,_=o>c?o>l?o:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,p=Jc(d,g,t,e,n),y=Jc(_,m,t,e,n),x=i.prevZ,M=i.nextZ;for(;x&&x.z>=p&&M&&M.z<=y;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&Rs(o,h,c,u,l,f,x.x,x.y)&&Te(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Rs(o,h,c,u,l,f,M.x,M.y)&&Te(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&Rs(o,h,c,u,l,f,x.x,x.y)&&Te(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=y;){if(M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Rs(o,h,c,u,l,f,M.x,M.y)&&Te(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function A_(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!ha(s,r)&&ld(s,n,n.next,r)&&wr(s,r)&&wr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Tr(n),Tr(n.next),n=i=r),n=n.next}while(n!==i);return Zi(n)}function R_(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&F_(a,o)){let c=hd(a,o);a=Zi(a,a.next),c=Zi(c,c.next),br(a,t,e,n,s,r,0),br(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function C_(i,t,e,n){let s=[],r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=cd(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(O_(l));for(s.sort(P_),r=0;r<s.length;r++)e=L_(s[r],e);return e}function P_(i,t){return i.x-t.x}function L_(i,t){let e=I_(i,t);if(!e)return t;let n=hd(e,i);return Zi(n,n.next),Zi(e,e.next)}function I_(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Rs(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),wr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&D_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function D_(i,t){return Te(i.prev,i,t.prev)<0&&Te(t.next,i,i.next)<0}function U_(i,t,e,n){let s=i;do s.z===0&&(s.z=Jc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,N_(s)}function N_(i){let t,e,n,s,r,a,o,c,l=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(a>1);return i}function Jc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function O_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Rs(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function F_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!B_(i,t)&&(wr(i,t)&&wr(t,i)&&H_(i,t)&&(Te(i.prev,i,t.prev)||Te(i,t.prev,t))||ha(i,t)&&Te(i.prev,i,i.next)>0&&Te(t.prev,t,t.next)>0)}function Te(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ha(i,t){return i.x===t.x&&i.y===t.y}function ld(i,t,e,n){let s=To(Te(i,t,e)),r=To(Te(i,t,n)),a=To(Te(e,n,i)),o=To(Te(e,n,t));return!!(s!==r&&a!==o||s===0&&wo(i,e,t)||r===0&&wo(i,n,t)||a===0&&wo(e,i,n)||o===0&&wo(e,t,n))}function wo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function To(i){return i>0?1:i<0?-1:0}function B_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&ld(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function wr(i,t){return Te(i.prev,i,i.next)<0?Te(i,t,i.next)>=0&&Te(i,i.prev,t)>=0:Te(i,t,i.prev)<0||Te(i,i.next,t)<0}function H_(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function hd(i,t){let e=new Kc(i.i,i.x,i.y),n=new Kc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Pu(i,t,e,n){let s=new Kc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Tr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Kc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function z_(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Un=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Lu(t),Iu(n,t);let a=t.length;e.forEach(Lu);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,Iu(n,e[c]);let o=b_.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Lu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Iu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ei=class i extends $c{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Ar=class i extends pe{constructor(t=new zs([new et(0,.5),new et(-.5,-.5),new et(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Nt(s,3)),this.setAttribute("normal",new Nt(r,3)),this.setAttribute("uv",new Nt(a,2));function l(h){let u=s.length/3,f=h.extractPoints(e),d=f.shape,g=f.holes;Un.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){let y=g[m];Un.isClockWise(y)===!0&&(g[m]=y.reverse())}let _=Un.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){let y=g[m];d=d.concat(y)}for(let m=0,p=d.length;m<p;m++){let y=d[m];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let m=0,p=_.length;m<p;m++){let y=_[m],x=y[0]+u,M=y[1]+u,b=y[2]+u;n.push(x,M,b),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return k_(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function k_(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Si=class i extends pe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new C,f=new C,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let y=[],x=p/n,M=0;p===0&&a===0?M=.5/e:p===n&&c===Math.PI&&(M=-.5/e);for(let b=0;b<=e;b++){let T=b/e;u.x=-t*Math.cos(s+T*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(s+T*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(T+M,1-x),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let x=h[p][y+1],M=h[p][y],b=h[p+1][y],T=h[p+1][y+1];(p!==0||a>0)&&d.push(x,M,T),(p!==n-1||c<Math.PI)&&d.push(M,b,T)}this.setIndex(d),this.setAttribute("position",new Nt(g,3)),this.setAttribute("normal",new Nt(_,3)),this.setAttribute("uv",new Nt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ta=class i extends pe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new C,u=new C,f=new C;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){let _=g/s*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){let _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,y=(s+1)*d+g;a.push(_,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new Nt(o,3)),this.setAttribute("normal",new Nt(c,3)),this.setAttribute("uv",new Nt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Wn=class i extends pe{constructor(t=new jo(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new C,c=new C,l=new et,h=new C,u=[],f=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Nt(u,3)),this.setAttribute("normal",new Nt(f,3)),this.setAttribute("uv",new Nt(d,2));function _(){for(let x=0;x<e;x++)m(x);m(r===!1?e:0),y(),p()}function m(x){h=t.getPointAt(x/e,h);let M=a.normals[x],b=a.binormals[x];for(let T=0;T<=s;T++){let w=T/s*Math.PI*2,L=Math.sin(w),v=-Math.cos(w);c.x=v*M.x+L*b.x,c.y=v*M.y+L*b.y,c.z=v*M.z+L*b.z,c.normalize(),f.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}function p(){for(let x=1;x<=e;x++)for(let M=1;M<=s;M++){let b=(s+1)*(x-1)+(M-1),T=(s+1)*x+(M-1),w=(s+1)*x+M,L=(s+1)*(x-1)+M;g.push(b,T,L),g.push(T,w,L)}}function y(){for(let x=0;x<=e;x++)for(let M=0;M<=s;M++)l.x=x/e,l.y=M/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new qc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var ft=class extends Mi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$u,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ao(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function V_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ks=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},jc=class extends ks{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ih,endingEnd:Ih}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Dh:r=t,o=2*e-n;break;case Uh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Dh:a=t,c=2*n-e;break;case Uh:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,y=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-d)*m+(1.5+d)*_+.5*g,M=d*m-d*_;for(let b=0;b!==o;++b)r[b]=p*a[h+b]+y*a[l+b]+x*a[c+b]+M*a[u+b];return r}},Qc=class extends ks{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*u+a[c+f]*h;return r}},tl=class extends ks{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Fn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ao(e,this.TimeBufferType),this.values=Ao(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ao(t.times,Array),values:Ao(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Qc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new jc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Co:e=this.InterpolantFactoryMethodDiscrete;break;case Po:e=this.InterpolantFactoryMethodLinear;break;case Ya:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Co;case this.InterpolantFactoryMethodLinear:return Po;case this.InterpolantFactoryMethodSmooth:return Ya}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&V_(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ya,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let u=o*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[f+g]||_!==e[d+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=Po;var $i=class extends Fn{};$i.prototype.ValueTypeName="bool";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=Co;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var el=class extends Fn{};el.prototype.ValueTypeName="color";var nl=class extends Fn{};nl.prototype.ValueTypeName="number";var il=class extends ks{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)xn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Rr=class extends Fn{InterpolantFactoryMethodLinear(t){return new il(this.times,this.values,this.getValueSize(),t)}};Rr.prototype.ValueTypeName="quaternion";Rr.prototype.DefaultInterpolation=Po;Rr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ji=class extends Fn{};Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=Co;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var sl=class extends Fn{};sl.prototype.ValueTypeName="vector";var Du={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},rl=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},G_=new rl,Cr=class{constructor(t){this.manager=t!==void 0?t:G_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Cr.DEFAULT_MATERIAL_NAME="__DEFAULT";var ol=class extends Cr{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Du.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;let o=mr("img");function c(){h(),Du.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}};var ea=class extends Cr{constructor(t){super(t)}load(t,e,n,s){let r=new _n,a=new ol(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Pr=class extends qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},na=class extends Pr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},yc=new he,Uu=new C,Nu=new C,ia=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _r,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Uu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Uu),Nu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Nu),e.updateMatrixWorld(),yc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(yc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Ou=new he,rr=new C,vc=new C,al=class extends ia{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new Ee(2,1,1,1),new Ee(0,1,1,1),new Ee(3,1,1,1),new Ee(1,1,1,1),new Ee(3,0,1,1),new Ee(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),rr.setFromMatrixPosition(t.matrixWorld),n.position.copy(rr),vc.copy(n.position),vc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(vc),n.updateMatrixWorld(),s.makeTranslation(-rr.x,-rr.y,-rr.z),Ou.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ou)}},sa=class extends Pr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new al}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},cl=class extends ia{constructor(){super(new Wo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ra=class extends Pr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.shadow=new cl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var yl="\\[\\]\\.:\\/",W_=new RegExp("["+yl+"]","g"),vl="[^"+yl+"]",X_="[^"+yl.replace("\\.","")+"]",Y_=/((?:WC+[\/:])*)/.source.replace("WC",vl),q_=/(WCOD+)?/.source.replace("WCOD",X_),Z_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vl),$_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vl),J_=new RegExp("^"+Y_+q_+Z_+$_+"$"),K_=["material","materials","bones","map"],ll=class{constructor(t,e,n){let s=n||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(W_,"")}static parseTrackName(t){let e=J_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);K_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=ll;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Kx=new Float32Array(1);var oa=class{constructor(t,e,n=0,s=1/0){this.ray=new Yi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new gr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return hl(t,this,n,e),n.sort(Fu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)hl(t[s],this,n,e);return n.sort(Fu),n}};function Fu(i,t){return i.distance-t.distance}function hl(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)hl(s[r],t,e,!0)}}var Lr=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Be(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ul}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ul);var ud={type:"change"},Ml={type:"start"},dd={type:"end"},ua=new Yi,fd=new Ln,Q_=Math.cos(70*ju.DEG2RAD),da=class extends Gn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Je.ROTATE,MIDDLE:Je.DOLLY,RIGHT:Je.PAN},this.touches={ONE:hn.ROTATE,TWO:hn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(I){I.addEventListener("keydown",at),this._domElementKeyEvents=I},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",at),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(ud),n.update(),r=s.NONE},this.update=function(){let I=new C,it=new xn().setFromUnitVectors(t.up,new C(0,1,0)),pt=it.clone().invert(),lt=new C,At=new xn,jt=new C,ie=2*Math.PI;return function(dt=null){let U=n.object.position;I.copy(U).sub(n.target),I.applyQuaternion(it),o.setFromVector3(I),n.autoRotate&&r===s.NONE&&D(v(dt)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let ht=n.minAzimuthAngle,ut=n.maxAzimuthAngle;isFinite(ht)&&isFinite(ut)&&(ht<-Math.PI?ht+=ie:ht>Math.PI&&(ht-=ie),ut<-Math.PI?ut+=ie:ut>Math.PI&&(ut-=ie),ht<=ut?o.theta=Math.max(ht,Math.min(ut,o.theta)):o.theta=o.theta>(ht+ut)/2?Math.max(ht,o.theta):Math.min(ut,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&T||n.object.isOrthographicCamera?o.radius=W(o.radius):o.radius=W(o.radius*l),I.setFromSpherical(o),I.applyQuaternion(pt),U.copy(n.target).add(I),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0));let It=!1;if(n.zoomToCursor&&T){let Rt=null;if(n.object.isPerspectiveCamera){let re=I.length();Rt=W(re*l);let ae=re-Rt;n.object.position.addScaledVector(M,ae),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let re=new C(b.x,b.y,0);re.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),It=!0;let ae=new C(b.x,b.y,0);ae.unproject(n.object),n.object.position.sub(ae).add(re),n.object.updateMatrixWorld(),Rt=I.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Rt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Rt).add(n.object.position):(ua.origin.copy(n.object.position),ua.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(ua.direction))<Q_?t.lookAt(n.target):(fd.setFromNormalAndCoplanarPoint(n.object.up,n.target),ua.intersectPlane(fd,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),It=!0);return l=1,T=!1,It||lt.distanceToSquared(n.object.position)>a||8*(1-At.dot(n.object.quaternion))>a||jt.distanceToSquared(n.target)>0?(n.dispatchEvent(ud),lt.copy(n.object.position),At.copy(n.object.quaternion),jt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",vt),n.domElement.removeEventListener("pointerdown",kt),n.domElement.removeEventListener("pointercancel",S),n.domElement.removeEventListener("wheel",ot),n.domElement.removeEventListener("pointermove",R),n.domElement.removeEventListener("pointerup",S),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",at),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,a=1e-6,o=new Lr,c=new Lr,l=1,h=new C,u=new et,f=new et,d=new et,g=new et,_=new et,m=new et,p=new et,y=new et,x=new et,M=new C,b=new et,T=!1,w=[],L={};function v(I){return I!==null?2*Math.PI/60*n.autoRotateSpeed*I:2*Math.PI/60/60*n.autoRotateSpeed}function E(I){let it=Math.abs(I)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*it)}function D(I){c.theta-=I}function O(I){c.phi-=I}let V=function(){let I=new C;return function(pt,lt){I.setFromMatrixColumn(lt,0),I.multiplyScalar(-pt),h.add(I)}}(),P=function(){let I=new C;return function(pt,lt){n.screenSpacePanning===!0?I.setFromMatrixColumn(lt,1):(I.setFromMatrixColumn(lt,0),I.crossVectors(n.object.up,I)),I.multiplyScalar(pt),h.add(I)}}(),N=function(){let I=new C;return function(pt,lt){let At=n.domElement;if(n.object.isPerspectiveCamera){let jt=n.object.position;I.copy(jt).sub(n.target);let ie=I.length();ie*=Math.tan(n.object.fov/2*Math.PI/180),V(2*pt*ie/At.clientHeight,n.object.matrix),P(2*lt*ie/At.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(V(pt*(n.object.right-n.object.left)/n.object.zoom/At.clientWidth,n.object.matrix),P(lt*(n.object.top-n.object.bottom)/n.object.zoom/At.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function H(I){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(I){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(I,it){if(!n.zoomToCursor)return;T=!0;let pt=n.domElement.getBoundingClientRect(),lt=I-pt.left,At=it-pt.top,jt=pt.width,ie=pt.height;b.x=lt/jt*2-1,b.y=-(At/ie)*2+1,M.set(b.x,b.y,1).unproject(n.object).sub(n.object.position).normalize()}function W(I){return Math.max(n.minDistance,Math.min(n.maxDistance,I))}function j(I){u.set(I.clientX,I.clientY)}function st(I){J(I.clientX,I.clientX),p.set(I.clientX,I.clientY)}function gt(I){g.set(I.clientX,I.clientY)}function X(I){f.set(I.clientX,I.clientY),d.subVectors(f,u).multiplyScalar(n.rotateSpeed);let it=n.domElement;D(2*Math.PI*d.x/it.clientHeight),O(2*Math.PI*d.y/it.clientHeight),u.copy(f),n.update()}function Q(I){y.set(I.clientX,I.clientY),x.subVectors(y,p),x.y>0?H(E(x.y)):x.y<0&&Z(E(x.y)),p.copy(y),n.update()}function _t(I){_.set(I.clientX,I.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),N(m.x,m.y),g.copy(_),n.update()}function Et(I){J(I.clientX,I.clientY),I.deltaY<0?Z(E(I.deltaY)):I.deltaY>0&&H(E(I.deltaY)),n.update()}function St(I){let it=!1;switch(I.code){case n.keys.UP:I.ctrlKey||I.metaKey||I.shiftKey?O(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,n.keyPanSpeed),it=!0;break;case n.keys.BOTTOM:I.ctrlKey||I.metaKey||I.shiftKey?O(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,-n.keyPanSpeed),it=!0;break;case n.keys.LEFT:I.ctrlKey||I.metaKey||I.shiftKey?D(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(n.keyPanSpeed,0),it=!0;break;case n.keys.RIGHT:I.ctrlKey||I.metaKey||I.shiftKey?D(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(-n.keyPanSpeed,0),it=!0;break}it&&(I.preventDefault(),n.update())}function Ot(I){if(w.length===1)u.set(I.pageX,I.pageY);else{let it=ne(I),pt=.5*(I.pageX+it.x),lt=.5*(I.pageY+it.y);u.set(pt,lt)}}function Bt(I){if(w.length===1)g.set(I.pageX,I.pageY);else{let it=ne(I),pt=.5*(I.pageX+it.x),lt=.5*(I.pageY+it.y);g.set(pt,lt)}}function Lt(I){let it=ne(I),pt=I.pageX-it.x,lt=I.pageY-it.y,At=Math.sqrt(pt*pt+lt*lt);p.set(0,At)}function Mt(I){n.enableZoom&&Lt(I),n.enablePan&&Bt(I)}function F(I){n.enableZoom&&Lt(I),n.enableRotate&&Ot(I)}function Zt(I){if(w.length==1)f.set(I.pageX,I.pageY);else{let pt=ne(I),lt=.5*(I.pageX+pt.x),At=.5*(I.pageY+pt.y);f.set(lt,At)}d.subVectors(f,u).multiplyScalar(n.rotateSpeed);let it=n.domElement;D(2*Math.PI*d.x/it.clientHeight),O(2*Math.PI*d.y/it.clientHeight),u.copy(f)}function bt(I){if(w.length===1)_.set(I.pageX,I.pageY);else{let it=ne(I),pt=.5*(I.pageX+it.x),lt=.5*(I.pageY+it.y);_.set(pt,lt)}m.subVectors(_,g).multiplyScalar(n.panSpeed),N(m.x,m.y),g.copy(_)}function Ht(I){let it=ne(I),pt=I.pageX-it.x,lt=I.pageY-it.y,At=Math.sqrt(pt*pt+lt*lt);y.set(0,At),x.set(0,Math.pow(y.y/p.y,n.zoomSpeed)),H(x.y),p.copy(y);let jt=(I.pageX+it.x)*.5,ie=(I.pageY+it.y)*.5;J(jt,ie)}function wt(I){n.enableZoom&&Ht(I),n.enablePan&&bt(I)}function xe(I){n.enableZoom&&Ht(I),n.enableRotate&&Zt(I)}function kt(I){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(I.pointerId),n.domElement.addEventListener("pointermove",R),n.domElement.addEventListener("pointerup",S)),Dt(I),I.pointerType==="touch"?Tt(I):z(I))}function R(I){n.enabled!==!1&&(I.pointerType==="touch"?xt(I):ct(I))}function S(I){Gt(I),w.length===0&&(n.domElement.releasePointerCapture(I.pointerId),n.domElement.removeEventListener("pointermove",R),n.domElement.removeEventListener("pointerup",S)),n.dispatchEvent(dd),r=s.NONE}function z(I){let it;switch(I.button){case 0:it=n.mouseButtons.LEFT;break;case 1:it=n.mouseButtons.MIDDLE;break;case 2:it=n.mouseButtons.RIGHT;break;default:it=-1}switch(it){case Je.DOLLY:if(n.enableZoom===!1)return;st(I),r=s.DOLLY;break;case Je.ROTATE:if(I.ctrlKey||I.metaKey||I.shiftKey){if(n.enablePan===!1)return;gt(I),r=s.PAN}else{if(n.enableRotate===!1)return;j(I),r=s.ROTATE}break;case Je.PAN:if(I.ctrlKey||I.metaKey||I.shiftKey){if(n.enableRotate===!1)return;j(I),r=s.ROTATE}else{if(n.enablePan===!1)return;gt(I),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Ml)}function ct(I){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;X(I);break;case s.DOLLY:if(n.enableZoom===!1)return;Q(I);break;case s.PAN:if(n.enablePan===!1)return;_t(I);break}}function ot(I){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(I.preventDefault(),n.dispatchEvent(Ml),Et(I),n.dispatchEvent(dd))}function at(I){n.enabled===!1||n.enablePan===!1||St(I)}function Tt(I){switch(rt(I),w.length){case 1:switch(n.touches.ONE){case hn.ROTATE:if(n.enableRotate===!1)return;Ot(I),r=s.TOUCH_ROTATE;break;case hn.PAN:if(n.enablePan===!1)return;Bt(I),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case hn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Mt(I),r=s.TOUCH_DOLLY_PAN;break;case hn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;F(I),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Ml)}function xt(I){switch(rt(I),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Zt(I),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;bt(I),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;wt(I),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xe(I),n.update();break;default:r=s.NONE}}function vt(I){n.enabled!==!1&&I.preventDefault()}function Dt(I){w.push(I.pointerId)}function Gt(I){delete L[I.pointerId];for(let it=0;it<w.length;it++)if(w[it]==I.pointerId){w.splice(it,1);return}}function rt(I){let it=L[I.pointerId];it===void 0&&(it=new et,L[I.pointerId]=it),it.set(I.pageX,I.pageY)}function ne(I){let it=I.pointerId===w[0]?w[1]:w[0];return L[it]}n.domElement.addEventListener("contextmenu",vt),n.domElement.addEventListener("pointerdown",kt),n.domElement.addEventListener("pointercancel",S),n.domElement.addEventListener("wheel",ot,{passive:!1}),this.update()}};var fa=class extends da{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:Je.PAN,MIDDLE:Je.DOLLY,RIGHT:Je.ROTATE},this.touches={ONE:hn.PAN,TWO:hn.DOLLY_ROTATE}}};var Ir=new C;function Tn(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Ir.copy(t),Ir[n]=0,Ir.normalize();let l=.5*a/(a+o),h=1-Ir.angleTo(i)/c;return Math.sign(Ir[e])===1?h*l:o/(a+o)+l+l*(1-h)}var Gs=class extends Pe{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new C,c=new C,l=new C(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,d=h.length/6,g=new C,_=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(o.fromArray(h,m),c.copy(o),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),h[m+0]=l.x*Math.sign(o.x)+c.x*r,h[m+1]=l.y*Math.sign(o.y)+c.y*r,h[m+2]=l.z*Math.sign(o.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/d)){case 0:g.set(1,0,0),f[p+0]=Tn(g,c,"z","y",r,n),f[p+1]=1-Tn(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),f[p+0]=1-Tn(g,c,"z","y",r,n),f[p+1]=1-Tn(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),f[p+0]=1-Tn(g,c,"x","z",r,t),f[p+1]=Tn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),f[p+0]=1-Tn(g,c,"x","z",r,t),f[p+1]=1-Tn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),f[p+0]=1-Tn(g,c,"x","y",r,t),f[p+1]=1-Tn(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),f[p+0]=Tn(g,c,"x","y",r,t),f[p+1]=1-Tn(g,c,"y","x",r,e);break}}};function pa(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new pe,l=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=i[f].attributes.position.count}c.setIndex(u)}for(let h in r){let u=pd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let _=0;_<a[h].length;++_)d.push(a[h][_][f]);let g=pd(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function pd(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let a=new t(r),o=0;for(let l=0;l<i.length;++l)a.set(i[l].array,o),o+=i[l].array.length;let c=new me(a,e,n);return s!==void 0&&(c.gpuType=s),c}function El(i,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,a=0,o=Object.keys(i.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let y=0,x=o.length;y<x;y++){let M=o[y],b=i.attributes[M];c[M]=new me(new b.array.constructor(b.count*b.itemSize),b.itemSize,b.normalized);let T=i.morphAttributes[M];T&&(l[M]=new me(new T.array.constructor(T.count*T.itemSize),T.itemSize,T.normalized))}let d=t*.5,g=Math.log10(1/t),_=Math.pow(10,g),m=d*_;for(let y=0;y<r;y++){let x=n?n.getX(y):y,M="";for(let b=0,T=o.length;b<T;b++){let w=o[b],L=i.getAttribute(w),v=L.itemSize;for(let E=0;E<v;E++)M+=`${~~(L[u[E]](x)*_+m)},`}if(M in e)h.push(e[M]);else{for(let b=0,T=o.length;b<T;b++){let w=o[b],L=i.getAttribute(w),v=i.morphAttributes[w],E=L.itemSize,D=c[w],O=l[w];for(let V=0;V<E;V++){let P=u[V],N=f[V];if(D[N](a,L[P](x)),v)for(let H=0,Z=v.length;H<Z;H++)O[H][N](a,v[H][P](x))}}e[M]=a,h.push(a),a++}}let p=i.clone();for(let y in i.attributes){let x=c[y];if(p.setAttribute(y,new me(x.array.slice(0,a*x.itemSize),x.itemSize,x.normalized)),y in l)for(let M=0;M<l[y].length;M++){let b=l[y][M];p.morphAttributes[y][M]=new me(b.array.slice(0,a*b.itemSize),b.itemSize,b.normalized)}}return p.setIndex(h),p}var ma=class extends Fs{constructor(t=null){super();let e=new Pe;e.deleteAttribute("uv");let n=new ft({side:He}),s=new ft,r=5;t!==null&&t._useLegacyLights===!1&&(r=900);let a=new sa(16777215,r,28,2);a.position.set(.418,16.199,.3),this.add(a);let o=new K(e,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let c=new K(e,s);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);let l=new K(e,s);l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),this.add(l);let h=new K(e,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let u=new K(e,s);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let f=new K(e,s);f.position.set(2.291,-.756,-2.621),f.rotation.set(0,-.286,0),f.scale.set(1.546,1.552,1.496),this.add(f);let d=new K(e,s);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);let g=new K(e,Ws(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let _=new K(e,Ws(50));_.position.set(-16.109,18.021,-8.207),_.scale.set(.1,2.425,2.751),this.add(_);let m=new K(e,Ws(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let p=new K(e,Ws(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let y=new K(e,Ws(20));y.position.set(3.235,11.486,-12.541),y.scale.set(2.5,2,.1),this.add(y);let x=new K(e,Ws(100));x.position.set(0,20,0),x.scale.set(1,.1,1),this.add(x)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ws(i){let t=new ri;return t.color.setScalar(i),t}var ga=class extends qe{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new et(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof Element&&e.element.parentNode!==null&&e.element.parentNode.removeChild(e.element)})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}},Xs=new C,md=new he,gd=new he,_d=new C,xd=new C,_a=class{constructor(t={}){let e=this,n,s,r,a,o={objects:new WeakMap},c=t.element!==void 0?t.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c,this.getSize=function(){return{width:n,height:s}},this.render=function(d,g){d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),md.copy(g.matrixWorldInverse),gd.multiplyMatrices(g.projectionMatrix,md),l(d,d,g),f(d)},this.setSize=function(d,g){n=d,s=g,r=n/2,a=s/2,c.style.width=d+"px",c.style.height=g+"px"};function l(d,g,_){if(d.isCSS2DObject){Xs.setFromMatrixPosition(d.matrixWorld),Xs.applyMatrix4(gd);let m=d.visible===!0&&Xs.z>=-1&&Xs.z<=1&&d.layers.test(_.layers)===!0;if(d.element.style.display=m===!0?"":"none",m===!0){d.onBeforeRender(e,g,_);let y=d.element;y.style.transform="translate("+-100*d.center.x+"%,"+-100*d.center.y+"%)translate("+(Xs.x*r+r)+"px,"+(-Xs.y*a+a)+"px)",y.parentNode!==c&&c.appendChild(y),d.onAfterRender(e,g,_)}let p={distanceToCameraSquared:h(_,d)};o.objects.set(d,p)}for(let m=0,p=d.children.length;m<p;m++)l(d.children[m],g,_)}function h(d,g){return _d.setFromMatrixPosition(d.matrixWorld),xd.setFromMatrixPosition(g.matrixWorld),_d.distanceToSquared(xd)}function u(d){let g=[];return d.traverse(function(_){_.isCSS2DObject&&g.push(_)}),g}function f(d){let g=u(d).sort(function(m,p){if(m.renderOrder!==p.renderOrder)return p.renderOrder-m.renderOrder;let y=o.objects.get(m).distanceToCameraSquared,x=o.objects.get(p).distanceToCameraSquared;return y-x}),_=g.length;for(let m=0,p=g.length;m<p;m++)g[m].element.style.zIndex=_-m}}};var Ve={lot:[[1400,1686],[482,1686],[482,100],[1384.33,100],[1400,1686]],roofA:[[1311,700.47],[883.85,710],[880.64,644.31],[568.52,652.79],[563,368.37],[593.95,367.74],[595.24,367.72],[802.87,363.48],[875.05,362],[873.45,468.62],[1308.7,467.03],[1309.35,533.52],[1311,700.47]],roofB:[[568.48,652.83],[570.58,963.98],[1306.12,953.37],[1305.07,700.52],[881.28,710.05],[878.13,644.36],[568.48,652.83]],patio:[[1306.12,953.37],[1306.68,1107.32],[1023.4,1109],[1024.54,957.39],[1306.12,953.37]],awning:[[957.14,909.69],[956.54,965.41],[1027.63,963.12],[1028.14,908.68],[957.14,909.69]],awningC:[994.56,925.43,13.12],awningLow:[[1027.63,963.12],[956.54,965.41],[957.14,909.69],[956.73,947.86],[1027.58,946.02],[1027.63,963.12]],driveway:[[841.46,363.73],[805,364.58],[598.94,369.43],[597.67,369.45],[592.14,99.81],[830.97,99.81],[841.46,363.73]],porch:[[966.76,369.45],[967.14,469.74],[874.96,470.08],[876.54,368.11],[966.76,369.45]],frontRock:[[1359.75,537.27],[1307.4,534.81],[1306.75,468.49],[874.96,470.08],[876.54,363.73],[804.93,365.21],[805,364.58],[841.45,363.73],[830.97,99.81],[928.25,99.81],[930.26,104.15],[935.55,116.52],[942.96,135.93],[951.39,161.4],[959.67,191.94],[966.69,226.57],[971.31,264.31],[972.39,304.16],[972.27,307.43],[972.17,316.13],[972.5,328.64],[973.65,343.32],[976.03,358.53],[980.05,372.65],[986.09,384.03],[994.58,391.03],[1016.28,392.74],[1057.5,391.8],[1111.89,391.89],[1173.12,396.72],[1234.86,409.98],[1290.77,435.36],[1334.51,476.56],[1359.75,537.27]],trees:[[1249.39,149.05,54.05],[1201.45,196.43,44.99],[1189.9,141.33,31.8],[1245.93,203.33,34.71],[1370.34,541.88,38.64],[1336.05,575.75,32.16],[1327.8,536.36,22.75],[1367.85,580.7,24.82]],basalt:[[1394.6,1681.46],[1389.61,1106.37],[1027.36,1108.7],[1027.5,1051.5],[1027.5,957.5],[574.54,970.78],[573.18,765.33],[485.87,765.33],[485.87,1049.75],[717.86,1047.18],[949.85,1044.61],[949.85,1679.5],[1394.6,1681.46]],edgeLine:[[488,1049],[950,1044]],acPad:[[516,958],[516,866],[488,866],[488,958],[516,958]],mulch:[[949.85,988.06],[574.61,991.42],[574.54,964.07],[949.85,957.65],[949.85,988.06]],bins:[[[[516.6,798.42],[516.6,773.4],[494.91,773.4],[494.91,798.42],[516.6,798.42]],"#5671BC"],[[[516.6,828.5],[516.6,803.48],[494.91,803.48],[494.91,828.5],[516.6,828.5]],"#B07953"],[[[516.6,859.91],[516.6,834.89],[494.91,834.89],[494.91,859.91],[516.6,859.91]],"#73965D"]],wedge:[[1306.68,1107],[1386,1106.61],[1385.47,1053.07],[1306,951],[1306.68,1107]],fence:[[573.18,765.33],[485.87,765.33],[485.87,1681.46],[1394.6,1681.46],[1387.64,1052.39],[1304,945.5]],nbr:[[[[1409,318.54],[1799,292.42],[1799,765.33],[1452.79,773.4],[1409,318.54]],"#918A98"],[[[1460.3,1077.33],[1452.79,773.4],[1799,765.33],[1799,1080.37],[1460.3,1077.33]],"#BEB3B2"],[[[1452.79,99.81],[1452.79,318.54],[1799,292.42],[1799,99.81],[1452.79,99.81]],"#E5CFC2"],[[[1389.77,598.19],[1395,1053.69],[1402.5,1811.19],[1800.5,1811.19],[1800.5,1080.56],[1462.32,1077.52],[1454.82,773.59],[1411.08,318.73],[1454.82,318.73],[1454.82,100],[1386,100],[1389.77,598.19]],"#9BA773"],[[[1682.15,1586.34],[1445.86,1586.34],[1445.86,1738.26],[1682.15,1738.26],[1682.15,1586.34]],"#F1FBEA"],[[[481.51,1811],[1402.25,1811],[1399.85,1685.98],[481.51,1686.03],[481.51,1811]],"#9BA773"],[[[270.8,99.81],[481.51,99.81],[481.51,1811],[95,1811],[95,1099.19],[399.37,1077.33],[270.8,99.81]],"#9BA773"],[[[402.79,387.72],[95,387.72],[95,732.39],[402.79,732.39],[402.79,387.72]],"#918A98"],[[[402.79,1077.33],[402.79,732.39],[95,732.39],[95,1099.19],[402.79,1077.33]],"#BEB3B2"],[[[339.57,99.81],[95,99.81],[95,387.72],[339.57,387.72],[339.57,99.81]],"#E5CFC2"]],chips:[[1367,1679],[1027,1678.9],[1027.58,1108.56],[1367,1106],[1367,1392.5],[1367,1679]],wallBase:[[1025,1108],[1036,1108],[1036,1679],[1025,1679]],pavers:[[980.68,1331.36,1004.84,1354.55],[980.68,1365.64,1004.84,1388.83],[980.68,1297.11,1004.84,1320.3],[980.68,1262.83,1004.84,1286.02],[980.68,1228.55,1004.84,1251.74],[980.68,1194.27,1004.84,1217.46],[980.68,1160.02,1004.84,1183.2],[980.68,1125.74,1004.84,1148.92],[980.68,1605.57,1004.84,1628.76],[980.68,1639.83,1004.84,1663.02],[980.68,1571.29,1004.84,1594.48],[980.68,1537.02,1004.84,1560.2],[980.68,1502.74,1004.84,1525.93],[980.68,1468.48,1004.84,1491.67],[980.68,1434.2,1004.84,1457.39],[980.68,1399.94,1004.84,1423.13],[980.68,1091.46,1004.84,1114.65],[980.68,1057.18,1004.84,1080.37],[980.68,1022.92,1004.84,1046.11],[980.68,988.64,1004.84,1011.83],[522.28,938.02,543.97,961.83],[522.28,972.3,543.97,994.9],[522.26,824.4,543.95,848.22],[522.28,900.14,543.97,923.95],[522.28,862.26,543.97,886.08],[522.26,786.52,543.95,810.34],[548.38,938.02,570.07,961.83],[548.38,824.4,570.07,848.22],[548.4,900.14,570.09,923.95],[548.4,862.28,570.09,886.1],[548.38,786.52,570.07,810.34],[557.28,1008.14,580.58,1032.36],[522.26,1008.39,545.56,1032.6],[592.28,1007.87,615.58,1032.09],[627.3,1007.63,650.6,1031.84],[662.32,1007.36,685.62,1031.6],[697.32,1007.11,720.62,1031.33],[732.34,1006.87,755.64,1031.08],[767.34,1006.6,790.67,1030.84],[802.36,1006.35,825.66,1030.57],[837.38,1006.11,860.69,1030.32],[872.38,1005.84,895.69,1030.06],[907.4,1005.59,930.71,1029.81],[1063,1336.44,1086.97,1360.89],[1096.84,1336.44,1120.8,1360.89],[1096.75,1408.55,1120.71,1433],[1063,1408.55,1086.97,1433],[1063,1372.49,1086.97,1396.95],[1097.03,1372.49,1121,1396.95]],walls:[[950,958,961,966,0],[949.85,966.6,960.83,980.71,0],[949.85,981.4,960.83,995.51,0],[949.85,996.22,960.83,1010.33,0],[949.85,1011.03,960.83,1025.13,0],[949.85,1025.83,960.83,1039.94,0],[949.85,1040.65,960.83,1054.76,0],[949.85,1055.46,960.83,1069.57,0],[949.85,1070.28,960.83,1084.39,0],[949.85,1529.46,960.83,1543.57,0],[949.85,1544.26,960.83,1558.37,0],[949.85,1559.09,960.83,1573.2,0],[949.85,1573.89,960.83,1588,0],[949.85,1588.71,960.83,1602.82,0],[949.85,1603.52,960.83,1617.63,0],[949.85,1618.32,960.83,1632.43,0],[949.85,1633.14,960.83,1647.25,0],[949.85,1647.95,960.83,1662.05,0],[950,1663,961,1679,0],[949.85,1085.08,960.83,1099.19,0],[949.85,1099.91,960.83,1114.02,0],[949.85,1114.71,960.83,1128.82,0],[949.85,1129.51,960.83,1143.62,0],[949.85,1144.34,960.83,1158.45,0],[949.85,1159.14,960.83,1173.25,0],[949.85,1173.97,960.83,1188.08,0],[949.85,1188.77,960.83,1202.88,0],[949.85,1203.6,960.83,1217.71,0],[949.85,1218.4,960.83,1232.51,0],[949.85,1233.2,960.83,1247.31,0],[949.85,1248.03,960.83,1262.14,0],[949.85,1262.83,960.83,1276.94,0],[949.85,1277.65,960.83,1291.76,0],[949.85,1292.46,960.83,1306.57,0],[949.85,1307.26,960.83,1321.37,0],[949.85,1322.08,960.83,1336.19,0],[949.85,1336.89,960.83,1351,0],[949.85,1351.71,960.83,1365.82,0],[949.85,1366.52,960.83,1380.63,0],[949.85,1381.34,960.83,1395.45,0],[949.85,1396.14,960.83,1410.25,0],[949.85,1410.95,960.83,1425.06,0],[949.85,1425.77,960.83,1439.88,0],[949.85,1440.57,960.83,1454.68,0],[949.85,1455.4,960.83,1469.51,0],[949.85,1470.2,960.83,1484.31,0],[949.85,1485.03,960.83,1499.14,0],[949.85,1499.83,960.83,1513.94,0],[949.85,1514.63,960.83,1528.74,0],[1025,1108,1036,1123.13,0],[1025,1124.13,1036,1139.26,0],[1025,1140.26,1036,1155.4,0],[1025,1156.4,1036,1171.53,0],[1025,1172.53,1036,1187.66,0],[1025,1188.66,1035.98,1203.53,0],[1025,1204.53,1035.98,1219.39,0],[1025,1220.39,1035.98,1235.26,0],[1025,1236.26,1035.98,1251.12,0],[1025,1252.12,1035.98,1266.99,0],[1025,1267.99,1035.98,1282.85,0],[1025,1283.85,1035.98,1298.72,0],[1025,1299.72,1035.98,1314.58,0],[1025,1315.58,1035.98,1330.45,0],[1025,1331.45,1035.98,1346.31,0],[1025,1347.31,1035.98,1362.18,0],[1025,1363.18,1035.98,1378.04,0],[1025,1379.04,1035.98,1393.91,0],[1025,1394.91,1035.98,1409.77,0],[1025,1410.77,1035.98,1425.64,0],[1025,1426.64,1035.98,1441.5,0],[1025,1442.5,1035.98,1457.37,0],[1025,1458.37,1035.98,1473.23,0],[1025,1474.23,1035.98,1489.1,0],[1025,1490.1,1035.98,1504.96,0],[1025,1505.96,1035.98,1520.83,0],[1025,1521.83,1035.98,1536.7,0],[1025,1537.7,1035.98,1552.56,0],[1025,1553.56,1035.98,1568.43,0],[1025,1569.43,1035.98,1584.29,0],[1025,1585.29,1035.98,1600.16,0],[1025,1601.16,1035.98,1616.02,0],[1025,1617.02,1035.98,1631.89,0],[1025,1632.89,1035.98,1647.75,0],[1025,1648.75,1035.98,1663.62,0],[1025,1664.62,1036,1678.62,0],[1032,1454,1367,1465,1],[1359.55,1454,1374.42,1464.98,1],[1343.69,1454,1358.55,1464.98,1],[1327.82,1454,1342.69,1464.98,1],[1311.96,1454,1326.82,1464.98,1],[1296.09,1454,1310.96,1464.98,1],[1280.23,1454,1295.09,1464.98,1],[1264.36,1454,1279.23,1464.98,1],[1248.5,1454,1263.36,1464.98,1],[1232.63,1454,1247.5,1464.98,1],[1216.77,1454,1231.63,1464.98,1],[1200.9,1454,1215.77,1464.98,1],[1185.04,1454,1199.9,1464.98,1],[1169.17,1454,1184.04,1464.98,1],[1153.3,1454,1168.17,1464.98,1],[1137.44,1454,1152.3,1464.98,1],[1121.57,1454,1136.44,1464.98,1],[1105.71,1454,1120.57,1464.98,1],[1089.84,1454,1104.71,1464.98,1],[1073.98,1454,1088.84,1464.98,1],[1058.11,1454,1072.98,1464.98,1],[1042.25,1454,1057.11,1464.98,1],[1026.38,1454,1041.25,1464.98,1]],pad:[[1344,1319],[1305.73,1319],[1300.06,1306.35],[1292.61,1294.82],[1283.56,1284.58],[1273.08,1275.8],[1261.35,1268.67],[1248.55,1263.35],[1234.85,1260.04],[1220.43,1258.89],[1206.01,1260.04],[1192.31,1263.35],[1179.51,1268.67],[1167.78,1275.8],[1157.3,1284.58],[1148.25,1294.82],[1140.8,1306.35],[1135.13,1319],[1057,1319],[1057,1151],[1344,1151],[1344,1319]],ring:[1219.87,1349.94,86],hose:[[1276.74,1368.21],[1318.31,1366.79],[1317.44,1341.4],[1291.5,1342.44]],pumpOuter:[1318.05,1361.86,13.49],pumpInner:[1318.05,1361.86,8.5],pool:[1218.87,1349.99,72.5],furniture:{"furniture-1":{frame:[[1207.14,1166.31],[1182.15,1167.04],[1184.01,1246],[1209,1245.27],[1207.14,1166.31]],back:[[1207.14,1166.21],[1182.15,1166.94],[1182.93,1200.13],[1207.92,1199.41],[1207.14,1166.21]]},"furniture-2":{frame:[[1266,1168.19],[1241,1168.19],[1241,1247],[1266,1247],[1266,1168.19]],back:[[1266,1168.11],[1241,1168.11],[1241,1195.82],[1266,1195.82],[1266,1168.11]]},"furniture-3":{frame:[[1219,1177.69],[1219,1184.56],[1219.08,1185.37],[1219.31,1186.12],[1219.68,1186.8],[1220.17,1187.39],[1220.76,1187.88],[1221.44,1188.25],[1222.19,1188.48],[1223,1188.56],[1231,1188.56],[1231.81,1188.48],[1232.56,1188.25],[1233.24,1187.88],[1233.83,1187.39],[1234.32,1186.8],[1234.69,1186.12],[1234.92,1185.37],[1235,1184.56],[1235,1177.69],[1234.92,1176.88],[1234.69,1176.13],[1234.32,1175.45],[1233.83,1174.86],[1233.24,1174.37],[1232.56,1174],[1231.81,1173.77],[1231,1173.69],[1223,1173.69],[1222.19,1173.77],[1221.44,1174],[1220.76,1174.37],[1220.17,1174.86],[1219.68,1175.45],[1219.31,1176.13],[1219.08,1176.88],[1219,1177.69]]},"furniture-4":{frame:[[1321,1168.19],[1296,1168.19],[1296,1247],[1321,1247],[1321,1168.19]],back:[[1321,1168.11],[1296,1168.11],[1296,1195.82],[1321,1195.82],[1321,1168.11]]},"furniture-5":{frame:[[1274,1177.69],[1274,1184.56],[1274.08,1185.37],[1274.31,1186.12],[1274.68,1186.8],[1275.17,1187.39],[1275.76,1187.88],[1276.44,1188.25],[1277.19,1188.48],[1278,1188.56],[1286,1188.56],[1286.81,1188.48],[1287.56,1188.25],[1288.24,1187.88],[1288.83,1187.39],[1289.32,1186.8],[1289.69,1186.12],[1289.92,1185.37],[1290,1184.56],[1290,1177.69],[1289.92,1176.88],[1289.69,1176.13],[1289.32,1175.45],[1288.83,1174.86],[1288.24,1174.37],[1287.56,1174],[1286.81,1173.77],[1286,1173.69],[1278,1173.69],[1277.19,1173.77],[1276.44,1174],[1275.76,1174.37],[1275.17,1174.86],[1274.68,1175.45],[1274.31,1176.13],[1274.08,1176.88],[1274,1177.69]]},"furniture-6":{frame:[[1080.34,1267.08],[1082.71,1295.59],[1123.62,1292.19],[1121.25,1263.68],[1080.34,1267.08]],back:[[1080.29,1267.09],[1082.66,1295.59],[1099.85,1294.17],[1097.48,1265.66],[1080.29,1267.09]]},"furniture-7":{frame:[[1098.55,1198.84],[1086.52,1224.8],[1123.77,1242.05],[1135.8,1216.1],[1098.55,1198.84]],back:[[1098.5,1198.82],[1086.48,1224.78],[1102.13,1232.03],[1114.16,1206.07],[1098.5,1198.82]]},"furniture-8":{frame:[[1086.19,1244.65],[1084.83,1252.53],[1084.77,1253.34],[1084.87,1254.12],[1085.12,1254.85],[1085.5,1255.52],[1086,1256.1],[1086.6,1256.58],[1087.3,1256.93],[1088.08,1257.15],[1095.96,1258.52],[1096.77,1258.58],[1097.55,1258.48],[1098.28,1258.23],[1098.95,1257.85],[1099.53,1257.35],[1100.01,1256.75],[1100.37,1256.05],[1100.59,1255.27],[1101.96,1247.38],[1102.02,1246.57],[1101.92,1245.8],[1101.67,1245.06],[1101.29,1244.4],[1100.79,1243.82],[1100.18,1243.34],[1099.48,1242.98],[1098.7,1242.76],[1090.82,1241.39],[1090.01,1241.33],[1089.23,1241.43],[1088.5,1241.68],[1087.83,1242.06],[1087.25,1242.56],[1086.77,1243.17],[1086.41,1243.87],[1086.19,1244.65]]}},turf:[[1055,1649],[1055,1492],[1352,1492],[1352,1649]],shed:[[1287,1505.38],[1287,1602.87],[1339,1602.87],[1339,1505.38],[1287,1505.38]],planters:[[[1289.08,1410.01,10.78],[1289.08,1410.01,9.47],[1289.08,1410.01,6.86]],[[1321.07,1321.01,10.78],[1321.08,1321.01,9.47],[1321.08,1321.01,6.86]],[[1085.93,1181.87,10.78],[1085.93,1181.87,9.47],[1085.93,1181.87,6.86]],[[1103.93,1171.87,10.78],[1103.93,1171.87,9.47],[1103.93,1171.87,6.86]],[[1301.08,1387.01,10.78],[1301.08,1387.01,9.47],[1301.08,1387.01,6.86]],[[1316.15,1408.08,16.61],[1316.15,1408.08,14.6],[1316.15,1408.08,10.57]]],boulders:[[[1278.32,1429.2,7.45,"#D4C8BE"],[1287.22,1424.16,2.77,"#CAC6C3"],[1276.32,1421.69,2.77,"#CAC6C3"],[1273.37,1441.72,2.77,"#CAC6C3"],[1276.85,1437.96,2.77,"#A38B7A"],[1267.74,1430.09,2.77,"#CAC6C3"],[1269.47,1420.91,6.55,"#A38B7A"],[1261.74,1430.68,4.93,"#AAA29B"],[1276.7,1414.02,4.93,"#AAA29B"],[1282.49,1421.05,3.46,"#AAA29B"],[1267.89,1437.82,3.28,"#CAC6C3"]],[[1158.32,1429.2,7.45,"#D4C8BE"],[1167.22,1424.16,2.77,"#CAC6C3"],[1156.32,1421.69,2.77,"#CAC6C3"],[1153.37,1441.72,2.77,"#CAC6C3"],[1156.85,1437.96,2.77,"#A38B7A"],[1147.74,1430.09,2.77,"#CAC6C3"],[1149.47,1420.91,6.55,"#A38B7A"],[1141.74,1430.68,4.93,"#AAA29B"],[1156.7,1414.02,4.93,"#AAA29B"],[1162.49,1421.05,3.46,"#AAA29B"],[1147.89,1437.82,3.28,"#CAC6C3"]]],umbrella:[[[1164.96,1472.43],[1257.43,1351.47],[1136.47,1259.01],[1044.01,1379.96],[1164.96,1472.43]],[[1157.63,1417.49],[1202.49,1358.81],[1143.81,1313.95],[1098.95,1372.63],[1157.63,1417.49]],[[1106.18,1445.65],[1127.87,1417.28],[1099.5,1395.59],[1077.81,1423.96],[1106.18,1445.65]]],epanel:[[[1326,1497],[1341,1497],[1341,1500],[1326,1500]],[[1329.75,1500],[1337.25,1500],[1337.25,1506],[1329.75,1506]]]};Ve.pavers.forEach(i=>{i[0]>1050&&i[0]<1130&&i[1]>1330&&(i[0]-=5.67,i[2]-=5.67,i[1]+=7.28,i[3]+=7.28)});{let i=(t,e,n)=>t.forEach(s=>{s[0]+=e,s[1]+=n});Ve.umbrella.forEach(t=>i(t,62,13)),Ve.boulders[1].forEach((t,e)=>{let n=[[1185.33,1433.6,10.06],[1178.35,1422.23,3.74],[1187.04,1446.44,3.74],[1139.51,1429.14,3.74],[1148.29,1413.93,3.74],[1164.8,1407.92,3.74],[1146.03,1440.43,8.84],[1148.35,1424.1,6.66],[1158.3,1415.75,6.66],[1178.67,1445.24,4.67],[1170.95,1416.69,4.43]][e];t[0]=n[0],t[1]=n[1],t[2]=n[2]}),i(Ve.boulders[0],-14,14)}var Pt=14.35,ns=1036,is=1108,se=1/12,Ti=4/12,$=i=>(i-ns)/Pt,tt=i=>(i-is)/Pt,un=(i,t,e)=>Math.min(e,Math.max(t,i)),Ge=Math.PI*2;function tx(i,t,e){let n=Math.imul(i|0,374761393)^Math.imul(t|0,668265263)^Math.imul(e|0,2147483647);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function Ai(i,t,e){let n=Math.floor(i),s=Math.floor(t),r=Math.floor(e),a=i-n,o=t-s,c=e-r,l=g=>g*g*(3-2*g),h=l(a),u=l(o),f=l(c),d=0;for(let g=0;g<2;g++)for(let _=0;_<2;_++)for(let m=0;m<2;m++)d+=tx(n+g,s+_,r+m)*(g?h:1-h)*(_?u:1-u)*(m?f:1-f);return d}function Ca(i,t,e,n,s=1){let r=i.attributes.position;for(let a=0;a<r.count;a++){let o=r.getX(a),c=r.getY(a),l=r.getZ(a),h=Ai(o*e+n,c*e+n*1.7,l*e-n*.3)*.65+Ai(o*e*2.3+n,c*e*2.3,l*e*2.3)*.35,u=1-t/2+t*h;r.setXYZ(a,o*u,c*u*s,l*u)}return i.computeVertexNormals(),i}function le(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var nt={mode:"proposed",pad:-1*se,step1:7*se,step2:7*se,sink:0,pitch:1.5,walkFall:18*se,lawnFall:12*se,eastFall:7*se,time:16.5,month:10,north:0,view:"overview",cdepth:18*se,under:!1,padSurf:"brick",ver:"plan",pumpAt:"post",layers:{pool:!0,furniture:!0,umbrella:!0,planters:!0,shed:!0,electrical:!0,context:!0}},Ld="backyard_3d_v4",yd={pad:-1*se,step1:7*se,step2:7*se,sink:0,pitch:1.5,walkFall:18*se,eastFall:7*se};try{let i=JSON.parse(localStorage.getItem(Ld)||"null");if(i){for(let t of["pumpAt","ver","padSurf","drag","cdepth","pad","step1","step2","walkFall","north"])i[t]!==void 0&&(nt[t]=i[t]);i.layers&&Object.assign(nt.layers,i.layers)}}catch{}function Ii(){try{localStorage.setItem(Ld,JSON.stringify(nt))}catch{}}var De=1459.5,Ze=1324.5,Ae=1367,ex=()=>Ae,Sl=[[Ae,1108],[Ae,1681]],Yr=960.83,dn=Yr+56*se*Pt,fn=[dn,dn+11],qt=[1219.87,1349.94],Ri=83,va=i=>un((i-1108)/573,0,1),nx=i=>un((i-1036)/354,0,1),qr=i=>-.35-nt.walkFall*va(i),Pa=(i,t)=>-.25-nt.lawnFall*va(t),$e=(i,t)=>-.35-nt.walkFall*va(t)-nt.eastFall*nx(i)*(.3+.7*va(t)),vn=()=>nt.pad,qn=()=>nt.pad-nt.step1,ix=()=>nt.pad-nt.step1-nt.step2,Bl=i=>ix()-nt.pitch/100*Math.max(0,i-De)/Pt,sx=(i,t)=>Math.hypot(i-qt[0],t-qt[1])<Ri;var Id=()=>Ae;var Ue=1319,Gr=Math.hypot(1305.73-qt[0],1319-qt[1]);function Hr(i,t){return i>=Id(t)?$e(i,t):t>=De?Bl(t):t>=Ue||Math.hypot(i-qt[0],t-qt[1])<Gr?qn():vn()}function Hl(i,t){return nt.ver==="quote"?Hr(i,t):i>=ex(t)?$e(i,t):t>=De?Bl(t):t>=Ze||sx(i,t)?qn():vn()}var La=i=>i<950?Pa(i,1681):i<fn[1]?qr(1681):$e(i,1681);function Ne(i,t){if(t>=1108){if(nt.mode==="proposed"&&i>=fn[1])return Hl(i,t);if(nt.mode==="existing"&&i>=dn)return $e(i,t)}return i>=Yr&&i<dn&&t>=958?qr(t):i<950&&t>=1049?Pa(i,t):-.25}var Ia=Math.sqrt(Ri*Ri-(Ze-qt[1])**2),rx=qt[0]-Ia,ox=qt[0]+Ia,ax=Math.atan2(Ze-qt[1],-Ia),cx=Math.atan2(Ze-qt[1],Ia),zr=(i,t,e=Ri,n=24)=>Array.from({length:n-1},(s,r)=>{let a=i+(t-i)*(r+1)/n;return[qt[0]+Math.cos(a)*e,qt[1]+Math.sin(a)*e]}),Zr=document.getElementById("wrap"),Ll=Math.min(screen.width,screen.height)<700,Fe=new xr({antialias:!0,powerPreference:"high-performance"});Fe.setPixelRatio(Math.min(devicePixelRatio,Ll?1.75:2));Fe.shadowMap.enabled=!0;Fe.shadowMap.type=dl;Fe.shadowMap.autoUpdate=!1;Fe.toneMapping=fl;Fe.toneMappingExposure=1;Fe.outputColorSpace=Ie;Zr.prepend(Fe.domElement);var oe=new Fs,Re=new en(55,1,.08,4e3),de=new fa(Re,Fe.domElement);de.enableDamping=!0;de.dampingFactor=.14;de.zoomSpeed=3.2;de.zoomToCursor=!0;de.rotateSpeed=1.1;de.panSpeed=1;de.maxPolarAngle=Math.PI*.495;de.minDistance=.3;de.maxDistance=320;de.screenSpacePanning=!1;var lx=new Os(Fe);oe.environment=lx.fromScene(new ma,.04).texture;var Dd=Fe.capabilities.getMaxAnisotropy(),hx=()=>oe.traverse(i=>{if(i.isMesh)for(let t of[].concat(i.material))t.envMapIntensity===1&&(t.envMapIntensity=.35)});function be(i,t,e,n,s=!0){let r=document.createElement("canvas");r.width=i,r.height=t;let a=r.getContext("2d");e(a,i,t);let o=new Zo(r);return o.wrapS=o.wrapT=dr,n&&o.repeat.set(n[0],n[1]),o.anisotropy=Dd,s&&(o.colorSpace=Ie),o}function sn(i,t,e,n,s,r,a,o){for(let c=0;c<n;c++){i.fillStyle=s[Math.floor(o()*s.length)],i.globalAlpha=.25+o()*.6;let l=r+o()*(a-r);i.beginPath(),i.arc(o()*t,o()*e,l,0,Ge),i.fill()}i.globalAlpha=1}function rs(i,t,e,n,s,r,a=60){i.fillStyle=n,i.fillRect(0,0,t,e);for(let o=0;o<a;o++){let c=t*(.05+r()*.2),l=r()*t,h=r()*e,u=i.createRadialGradient(l,h,0,l,h,c),f=(r()-.5)*s;u.addColorStop(0,f>0?`rgba(255,255,255,${f})`:`rgba(0,0,0,${-f})`),u.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=u;for(let d of[-t,0,t])for(let g of[-e,0,e])i.save(),i.translate(d,g),i.fillRect(l-c,h-c,2*c,2*c),i.restore()}}var Yt={};Yt.block=be(256,256,(i,t,e)=>{let n=le(11);rs(i,t,e,"#d9ccb4",.16,n,40),sn(i,t,e,1600,["#a8987c","#efe6d4","#bfae90","#8f7f66"],.4,1.6,n);for(let s=0;s<40;s++)i.fillStyle="rgba(90,75,55,0.35)",i.beginPath(),i.ellipse(n()*t,n()*e,1+n()*3,1+n()*2,n()*3,0,Ge),i.fill()},null);Yt.stone=be(256,256,(i,t,e)=>{let n=le(5);rs(i,t,e,"#d8c6b0",.1,n,30),sn(i,t,e,2600,["#b9a68e","#efe3d2","#a08c76","#cdb79e"],.4,1.3,n)},null);Yt.concrete=be(512,512,(i,t,e)=>{let n=le(21);rs(i,t,e,"#c9ae95",.16,n,70),sn(i,t,e,5e3,["#a88e76","#dcc6b0","#b39880"],.3,1.1,n);for(let s=0;s<9;s++)i.strokeStyle="rgba(80,60,45,0.18)",i.lineWidth=1+n()*2,i.beginPath(),i.ellipse(n()*t,n()*e,20+n()*80,10+n()*50,n()*3,0,Ge),i.stroke();i.globalAlpha=.05;for(let s=0;s<e;s+=2)i.fillStyle=n()<.5?"#000":"#fff",i.fillRect(0,s,t,1);i.globalAlpha=1},[1,1]);Yt.siding=be(256,256,(i,t,e)=>{let n=le(3);i.fillStyle="#a9b7a4",i.fillRect(0,0,t,e);let s=7;for(let r=0;r<s;r++){let a=r*e/s,o=i.createLinearGradient(0,a,0,a+e/s);o.addColorStop(0,"rgba(255,255,255,0.10)"),o.addColorStop(.85,"rgba(0,0,0,0.02)"),o.addColorStop(.92,"rgba(0,0,0,0.22)"),o.addColorStop(1,"rgba(0,0,0,0.3)"),i.fillStyle=o,i.fillRect(0,a,t,e/s)}sn(i,t,e,400,["#93a28f","#bccab8"],.3,1,n)},null);Yt.shingle=be(256,256,(i,t,e)=>{let n=le(9);i.fillStyle="#5d5f61",i.fillRect(0,0,t,e);let s=8,r=t/6;for(let a=0;a<s;a++){let o=a*e/s,c=a%2*r/2;for(let l=-1;l<7;l++){let h=Math.floor(80+n()*30);i.fillStyle=`rgb(${h},${h+2},${h+5})`,i.fillRect(l*r+c+1,o+1,r-2,e/s-2)}i.fillStyle="rgba(0,0,0,0.45)",i.fillRect(0,o+e/s-3,t,3)}sn(i,t,e,3e3,["#3c3e41","#8a8c8e","#6e7174"],.3,.9,n)},null);Yt.board=be(512,512,(i,t,e)=>{let n=le(17),s=9;for(let r=0;r<s;r++){let a=n(),o=[118+a*40,104+a*34,88+a*28];i.fillStyle=`rgb(${o.map(Math.round)})`,i.fillRect(r*t/s,0,t/s,e);for(let c=0;c<26;c++){i.strokeStyle=`rgba(${n()<.5?"40,30,22":"210,200,185"},${.08+n()*.12})`,i.lineWidth=.6+n()*1.4;let l=r*t/s+n()*t/s;i.beginPath(),i.moveTo(l,0),i.bezierCurveTo(l+n()*6-3,e*.3,l+n()*6-3,e*.6,l+n()*4-2,e),i.stroke()}i.fillStyle="rgba(20,14,10,0.55)",i.fillRect(r*t/s,0,2,e),n()<.7&&(i.fillStyle="rgba(40,28,20,0.5)",i.beginPath(),i.ellipse(r*t/s+n()*t/s,n()*e,3+n()*4,5+n()*6,0,0,Ge),i.fill())}},null);Yt.stoneWall=be(1024,1024,(i,t,e)=>{let n=le(83);i.fillStyle="#e6dfd2",i.fillRect(0,0,t,e);let s=["#eadfca","#f0e6d4","#e3d2b6","#ead8bc","#dcc7a6","#f2eadb","#e2cba9","#d9bd97","#ecd9bf","#e8d4b8"],r=0;for(;r<e;){let a=Math.min(e-r,58+Math.floor(n()*4)*30),o=-n()*120;for(;o<t;){let c=110+n()*260,l=s[Math.floor(n()*s.length)],h=4+n()*2,u=o+h,f=r+h,d=c-h*2,g=a-h*2,_=n()<.3&&g>90,m=_?[[f,g*.48],[f+g*.52,g*.48]]:[[f,g]];for(let[p,y]of m){i.fillStyle=_?s[Math.floor(n()*s.length)]:l,i.beginPath(),i.moveTo(u+n()*6,p+n()*4),i.lineTo(u+d-n()*6,p+n()*4),i.lineTo(u+d-n()*5,p+y-n()*5),i.lineTo(u+n()*5,p+y-n()*5),i.closePath(),i.fill();let x=i.createLinearGradient(u,p,u+d*.3,p+y);x.addColorStop(0,"rgba(255,255,255,0.18)"),x.addColorStop(1,"rgba(90,70,45,0.14)"),i.fillStyle=x,i.fill();for(let M=0;M<d*y/70;M++)i.fillStyle=`rgba(${n()<.5?"120,98,70":"255,250,240"},${.1+n()*.16})`,i.fillRect(u+n()*d,p+n()*y,1+n()*2.5,1+n()*2.5);n()<.35&&(i.strokeStyle="rgba(120,95,65,0.18)",i.lineWidth=1,i.beginPath(),i.moveTo(u+n()*d,p+n()*y),i.lineTo(u+n()*d,p+n()*y),i.stroke())}o+=c}r+=a}},null);Yt.garage=be(512,224,(i,t,e)=>{i.fillStyle="#ecebe6",i.fillRect(0,0,t,e);let n=4,s=8;for(let r=0;r<n;r++){i.fillStyle="rgba(0,0,0,0.22)",i.fillRect(0,r*e/n-1,t,2);for(let a=0;a<s;a++){let o=a*t/s+7,c=r*e/n+8,l=t/s-14,h=e/n-16;i.fillStyle="#e2e1db",i.fillRect(o,c,l,h),i.strokeStyle="rgba(255,255,255,0.9)",i.lineWidth=2,i.beginPath(),i.moveTo(o,c+h),i.lineTo(o,c),i.lineTo(o+l,c),i.stroke(),i.strokeStyle="rgba(0,0,0,0.18)",i.beginPath(),i.moveTo(o+l,c),i.lineTo(o+l,c+h),i.lineTo(o,c+h),i.stroke()}}},[1,1]);Yt.chips=be(256,256,(i,t,e)=>{let n=le(91);i.fillStyle="#d9d4c9",i.fillRect(0,0,t,e);for(let s=0;s<2600;s++){let r=Math.round(200+n()*55);i.fillStyle=`rgb(${r},${r-4-n()*8},${r-12-n()*10})`;let a=1.5+n()*4;i.save(),i.translate(n()*t,n()*e),i.rotate(n()*3),i.fillRect(-a,-a*.7,a*2,a*1.4),i.restore()}sn(i,t,e,900,["#8d8476","#a59c8d"],.4,1.4,n)},null);Yt.asphalt=be(256,256,(i,t,e)=>{let n=le(97);rs(i,t,e,"#6b6c6c",.12,n,40),sn(i,t,e,6e3,["#4e4f50","#858684","#5c5d5e"],.3,1.1,n)},null);function Ys(i,t,e,n,s,r,a,o){for(let c of[-t,0,t])for(let l of[-e,0,e])i.fillStyle=o,i.fillRect(n+c,s+l,r,a)}var Wr={cbrick:{span:64/12,tex:be(1024,1024,(i,t,e)=>{let n=le(101),s=t/16,r=5;i.fillStyle="#7d6658",i.fillRect(0,0,t,e);let a=["#a65a41","#b4684b","#9a5038","#bf7656","#a9603f","#b06a52","#94553d","#c17f62"],o=(l,h)=>(l%h+h)%h,c=l=>{let h=Math.imul(l^2654435769,2654435761)>>>0;return h=(h^h>>>15)>>>0,h/4294967296};for(let l=-20;l<36;l++)for(let h=-10;h<10;h++){let u=(l+h*4)*s,f=l*s,d=o(l+h*4,16)*64+o(l,16)*2;for(let[g,_,m,p,y]of[[u,f,2*s,s,0],[u,f+s,s,2*s,1]]){let x=a[Math.floor(c(d+y)*a.length)],M=o(g,t)+r/2,b=o(_,e)+r/2;Ys(i,t,e,M,b,m-r,p-r,x),Ys(i,t,e,M,b,m-r,2,"rgba(255,235,215,0.22)"),Ys(i,t,e,M,b+p-r-2,m-r,2,"rgba(40,20,10,0.25)")}}sn(i,t,e,26e3,["#7a4430","#d29a7c","#8f5a44"],.5,1.6,n)},[1,1])},amaretto:{span:64/12,tex:be(1024,1024,(i,t,e)=>{let n=le(131),s=t/16,r=5;i.fillStyle="#8c7766",i.fillRect(0,0,t,e);let a=["#c39a72","#b98a62","#cfa77b","#a87a57","#d3ae84","#b5845c","#c99c70","#9f7353"],o=(l,h)=>(l%h+h)%h,c=l=>{let h=Math.imul(l^2135587861,2246822519)>>>0;return h=(h^h>>>13)>>>0,h/4294967296};for(let l=-20;l<36;l++)for(let h=-10;h<10;h++){let u=(l+h*4)*s,f=l*s,d=o(l+h*4,16)*64+o(l,16)*2;for(let[g,_,m,p,y]of[[u,f,2*s,s,0],[u,f+s,s,2*s,1]]){let x=a[Math.floor(c(d+y)*a.length)],M=o(g,t)+r/2,b=o(_,e)+r/2;Ys(i,t,e,M,b,m-r,p-r,x),Ys(i,t,e,M,b,m-r,2,"rgba(255,240,220,0.25)"),Ys(i,t,e,M,b+p-r-2,m-r,2,"rgba(50,30,15,0.22)")}}sn(i,t,e,26e3,["#8a6a4e","#e2c6a2","#a0805f"],.5,1.6,n)},[1,1])},anthracite:{span:32/12,tex:be(512,512,(i,t,e)=>{let n=le(137),s=t/8,r=t/4,a=5;i.fillStyle="#2a2a2c",i.fillRect(0,0,t,e);for(let o=0;o<8;o++)for(let c=0;c<4;c++){let l=58+Math.floor(n()*22);i.fillStyle=`rgb(${l},${l},${l+3})`,i.fillRect(o*s+a/2,c*r+a/2,s-a,r-a)}sn(i,t,e,6e3,["#2e2e30","#777779","#4a4a4d"],.4,1.3,n)},[1,1])},slab:{span:4,tex:be(512,512,(i,t,e)=>{let n=le(103);i.fillStyle="#8f8a82",i.fillRect(0,0,t,e);let s=t/2,r=5;for(let a=0;a<2;a++)for(let o=0;o<2;o++)i.fillStyle=["#d8c6b0","#d2c0a9","#dccab4","#d4c3ad"][a*2+o],i.fillRect(a*s+r/2,o*s+r/2,s-r,s-r);sn(i,t,e,6e3,["#b9a68e","#efe3d2","#a08c76"],.4,1.3,n)},[1,1])},conc:{span:8,tex:be(1024,1024,(i,t,e)=>{let n=le(107);rs(i,t,e,"#cdb9a3",.12,n,80),sn(i,t,e,16e3,["#b29c86","#e0cfbd","#bba690"],.3,1,n),i.globalAlpha=.06;for(let s=0;s<e;s+=3)i.fillStyle=n()<.5?"#000":"#fff",i.fillRect(0,s,t,1);i.globalAlpha=1,i.fillStyle="rgba(60,45,35,0.55)",i.fillRect(0,0,t,3),i.fillRect(0,0,3,e),i.fillRect(0,e/2-1,t,3),i.fillRect(t/2-1,0,3,e)},[1,1])}};Yt.mesh=be(64,64,(i,t,e)=>{i.clearRect(0,0,t,e),i.fillStyle="#2c241c",i.fillRect(0,0,t,3),i.fillRect(0,0,3,e)},null);Yt.corr=be(64,8,(i,t,e)=>{for(let n=0;n<t;n++){let s=Math.sin(n/t*Ge*2),r=Math.round(128+s*80);i.fillStyle=`rgb(${r},${r},${r})`,i.fillRect(n,0,1,e)}},null,!1);var Ud=[.17,.235,.3,.365,.43,.6,.665,.9];Yt.tank=be(512,512,(i,t,e)=>{let n=le(61);i.fillStyle="#c9cfd2",i.fillRect(0,0,t,e);for(let r=0;r<900;r++){let a=n()*t,o=n()*e,c=6+n()*26,l=Math.round(178+n()*62);i.fillStyle=`rgba(${l},${l+3},${l+6},${.35+n()*.45})`,i.beginPath();let h=5+Math.floor(n()*3);for(let u=0;u<h;u++){let f=u/h*Ge+n()*.6,d=c*(.6+n()*.5);i.lineTo(a+Math.cos(f)*d,o+Math.sin(f)*d*.8)}i.closePath(),i.fill()}sn(i,t,e,2500,["#9ea6ab","#e9edef","#b4bcc0"],.4,1.2,n);for(let r of Ud){let a=r*e,o=i.createLinearGradient(0,a-9,0,a+9);o.addColorStop(0,"rgba(255,255,255,0)"),o.addColorStop(.3,"rgba(255,255,255,0.55)"),o.addColorStop(.55,"rgba(90,98,104,0.45)"),o.addColorStop(1,"rgba(90,98,104,0)"),i.fillStyle=o,i.fillRect(0,a-9,t,18)}let s=i.createLinearGradient(0,0,0,e);s.addColorStop(0,"rgba(0,0,0,0.12)"),s.addColorStop(.12,"rgba(0,0,0,0)"),s.addColorStop(1,"rgba(0,0,0,0.06)"),i.fillStyle=s,i.fillRect(0,0,t,e)},null);Yt.tankBump=be(16,512,(i,t,e)=>{i.fillStyle="#808080",i.fillRect(0,0,t,e);for(let n of Ud){let s=n*e,r=i.createLinearGradient(0,s-8,0,s+8);r.addColorStop(0,"#808080"),r.addColorStop(.5,"#f0f0f0"),r.addColorStop(1,"#808080"),i.fillStyle=r,i.fillRect(0,s-8,t,16)}},null,!1);Yt.caustic=be(512,512,(i,t,e)=>{let n=le(71),s=Array.from({length:46},()=>[n()*t,n()*e]),r=i.createImageData(t,e),a=r.data;for(let o=0;o<e;o++)for(let c=0;c<t;c++){let l=1e9,h=1e9;for(let[_,m]of s){let p=Math.abs(c-_),y=Math.abs(o-m);p=Math.min(p,t-p),y=Math.min(y,e-y);let x=p*p+y*y;x<l?(h=l,l=x):x<h&&(h=x)}let u=Math.sqrt(h)-Math.sqrt(l),f=Math.pow(Math.max(0,1-u/3.2),2)*.55,d=Ai(c/40,o/40,3)*14,g=(o*t+c)*4;a[g]=128+d+95*f,a[g+1]=146+d+90*f,a[g+2]=146+d+82*f,a[g+3]=255}i.putImageData(r,0,0)},[3,3]);Yt.dirt=be(1024,1536,(i,t,e)=>{let n=le(31),s=i.createImageData(t,e),r=s.data;for(let a=0;a<e;a++)for(let o=0;o<t;o++){let c=(a*t+o)*4,l=Ai(o/90,a/90,1)*.6+Ai(o/22,a/22,5)*.4,h=Ai(o/7,a/7,9),u=176+l*34-h*14,f=150+l*30-h*14,d=124+l*26-h*12,g=a/e,_=Ai(o/60,a/60,21)*.7+Ai(o/14,a/14,33)*.3,m=.72-g*.42;if(_>m){let y=un((_-m)*6,0,1)*(.55+n()*.45);u=u*(1-y)+(78+n()*40)*y,f=f*(1-y)+(104+n()*44)*y,d=d*(1-y)+(52+n()*20)*y}let p=n();p<.05?(u*=.78,f*=.76,d*=.74):p>.975&&(u=u*.5+118,f=f*.5+112,d=d*.5+104),r[c]=u,r[c+1]=f,r[c+2]=d,r[c+3]=255}i.putImageData(s,0,0);for(let a=0;a<70;a++){i.fillStyle=`rgba(${215+n()*25},${205+n()*25},${185+n()*20},0.9)`;let o=2+n()*5;i.save(),i.translate(n()*t,n()*e),i.rotate(n()*3),i.fillRect(-o,-o*.6,o*2,o*1.2),i.restore()}},null);Yt.grassFar=be(256,256,(i,t,e)=>{let n=le(41);rs(i,t,e,"#5f7a3e",.18,n,50),sn(i,t,e,4e3,["#4c6a30","#7d9550","#6a8445"],.4,1.2,n)},[1,1]);Yt.brush=be(256,256,(i,t,e)=>{let n=le(43);rs(i,t,e,"#5b6338",.25,n,60),sn(i,t,e,5e3,["#3d4a26","#7a7646","#6b5f3e"],.5,2,n)},[1,1]);Yt.leaf=be(128,128,(i,t,e)=>{let n=le(47);i.fillStyle="#808080",i.fillRect(0,0,t,e),sn(i,t,e,900,["#5a5a5a","#a5a5a5","#3e3e3e","#c4c4c4"],.8,2.6,n)},[1,1]);var q={ground:new ft({color:10133626,roughness:.97}),dirt:new ft({map:Yt.dirt,roughness:1}),outside:new ft({map:Yt.grassFar,roughness:1}),brush:new ft({map:Yt.brush,roughness:1}),block:new ft({map:Yt.block,roughness:.92,color:16777215}),stone:new ft({map:Yt.stone,roughness:.9}),concrete:new ft({map:Yt.concrete,roughness:.9,side:Se}),siding:new ft({map:Yt.siding,roughness:.8}),stoneWall:new ft({map:Yt.stoneWall,roughness:.9,emissive:2761752,emissiveIntensity:.35}),garageDoor:new ft({map:Yt.garage,roughness:.55}),frontDoor:new ft({color:7219746,roughness:.5}),chips:new ft({map:Yt.chips,roughness:1}),asphalt:new ft({map:Yt.asphalt,roughness:.95}),trim:new ft({color:15921386,roughness:.6}),skirt:new ft({color:12033408,roughness:.95}),shingle:new ft({map:Yt.shingle,roughness:.95}),glassDark:new ft({color:2435888,roughness:.08,metalness:.2,envMapIntensity:1.4}),blinds:new ft({color:14867661,roughness:.7}),board:new ft({map:Yt.board,roughness:.95}),steelPost:new ft({color:10133411,roughness:.45,metalness:.7}),hogFrame:new ft({color:3877922,roughness:.7,metalness:.4}),hogMesh:new ft({map:Yt.mesh,color:16777215,alphaTest:.4,side:Se,roughness:.6,metalness:.4}),skirtSoil:new ft({color:9403752,roughness:1,side:Se}),edging:new ft({color:9128491,roughness:.85,metalness:.25}),wood:new ft({color:5980464,roughness:.85,side:Se}),white:new ft({color:15657956,roughness:.65}),corr:new ft({color:12041922,roughness:.5,metalness:.55,bumpMap:Yt.corr,bumpScale:.8,side:Se}),tank:new ft({map:Yt.tank,bumpMap:Yt.tankBump,bumpScale:3,roughness:.34,metalness:.45,envMapIntensity:1.1}),tankIn:new ft({map:Yt.tank,bumpMap:Yt.tankBump,bumpScale:2,color:14212832,roughness:.4,metalness:.35,side:He,envMapIntensity:1}),rim:new ft({color:13883611,roughness:.3,metalness:.55,envMapIntensity:1.1}),water:new ft({color:5942962,roughness:.03,metalness:.05,transparent:!0,opacity:.42,envMapIntensity:1.4,depthWrite:!1}),poolFloor:new ft({map:Yt.caustic,roughness:.5,metalness:.25}),jet:new ft({color:1776670,roughness:.45}),pvc:new ft({color:15855852,roughness:.5}),valve:new ft({color:12597547,roughness:.5}),sleeve:new ft({color:8030870,roughness:.6,transparent:!0,opacity:.7}),pump:new ft({color:7239037,roughness:.5,metalness:.3}),hose:new ft({color:1908513,roughness:.6}),frame:new ft({color:4868163,roughness:.6,metalness:.3}),cushion:new ft({color:15525078,roughness:.95}),teak:new ft({color:9267788,roughness:.75}),canopy:new ft({color:14857890,roughness:.95,side:Se,emissive:9067078,emissiveIntensity:.45}),terracotta:new ft({color:12085578,roughness:.9}),soil:new ft({color:4075300,roughness:1}),agave:new ft({color:8363156,roughness:.7,flatShading:!0}),grassPlant:new ft({color:10135653,roughness:.9,side:Se}),shed:new ft({color:11775395,roughness:.85}),shedRoof:new ft({color:4935250,roughness:.6,metalness:.4}),cover:new ft({color:1776670,roughness:.95}),trunk:new ft({color:5062966,roughness:1}),canopyTree:new ft({vertexColors:!0,map:Yt.leaf,roughness:1,emissive:1911314,emissiveIntensity:.5}),bulb:new ft({color:16773840,emissive:16766346,emissiveIntensity:.6}),wire:new ft({color:1710618,roughness:.8}),sail:new ft({color:2792086,roughness:.9,side:Se})};function zl(i){let t=i.attributes.position,e=new Float32Array(t.count*2);for(let n=0;n<t.count;n++){let s=t.getX(n)*Pt+ns,r=t.getZ(n)*Pt+is;e[n*2]=(s-470)/940,e[n*2+1]=1-(r-940)/760}return i.setAttribute("uv",new me(e,2)),i}function Nd(i,t,e,n,s){let r=Math.max(1,Math.ceil((e-i)/Pt/s)),a=Math.max(1,Math.ceil((n-t)/Pt/s)),o=new nn(1,1,r,a),c=o.attributes.position;for(let l=0;l<c.count;l++){let h=c.getX(l)+.5,u=.5-c.getY(l);c.setXYZ(l,$(i+(e-i)*h),0,tt(t+(n-t)*u))}return o.userData={px0:i,py0:t,px1:e,py1:n},o}function kl(i,t){let e=i.geometry,n=e.attributes.position;for(let s=0;s<n.count;s++)n.setY(s,t(n.getX(s)*Pt+ns,n.getZ(s)*Pt+is));n.needsUpdate=!0,e.computeVertexNormals(),e.computeBoundingSphere()}function ux(i){return i.map(([t,e])=>new et($(t),tt(e)))}function $r(i,t,e,n){let s=ux(i);s.length>2&&s[0].distanceTo(s[s.length-1])<.001&&s.pop(),Un.isClockWise(s)&&(s=s.reverse());let r=Un.triangulateShape(s,[]),a=[];for(let f of r)for(let d of[f[0],f[2],f[1]])a.push(s[d].x,e,s[d].y);let o=new pe;if(o.setAttribute("position",new Nt(a,3)),o.computeVertexNormals(),n)zl(o);else{let f=o.attributes.position,d=[];for(let g=0;g<f.count;g++)d.push(f.getX(g)/6,f.getZ(g)/6);o.setAttribute("uv",new Nt(d,2))}let c=[],l=[],h=0;for(let f=0;f<s.length;f++){let d=s[f],g=s[(f+1)%s.length],_=d.distanceTo(g);c.push(d.x,t,d.y,g.x,t,g.y,g.x,e,g.y,d.x,t,d.y,g.x,e,g.y,d.x,e,d.y),l.push(h/4,t/4,(h+_)/4,t/4,(h+_)/4,e/4,h/4,t/4,(h+_)/4,e/4,h/4,e/4),h+=_}let u=new pe;return u.setAttribute("position",new Nt(c,3)),u.setAttribute("uv",new Nt(l,2)),u.computeVertexNormals(),{top:o,side:u}}function ee(i,t,e,n,s,r,a,o,c=0){let l=new K(new Pe(i,t,e),n);return l.position.set(s,r,a),l.rotation.y=c,l.castShadow=l.receiveShadow=!0,(o||oe).add(l),l}function ss(i,t,e){let n=i.attributes.uv;for(let s=0;s<n.count;s++)n.setXY(s,n.getX(s)*t,n.getY(s)*e);return i}var oi={};function os(i){return oi[i]||(oi[i]=new ce,oi[i].name=i,oe.add(oi[i])),oi[i]}var Ma=[],Od=i=>typeof i=="function"?i():i;function Hn(i,t,e,n=0){return Ma.push([i,t,e,n]),i.position.y=Ne(t,e)+Od(n),i}var Yn={};function Pi(i,t,e,n,s,r,a,o=1){let c=Nd(t,e,n,s,o),l=new K(c,a);return l.receiveShadow=!0,l.userData.h=r,oe.add(l),Yn[i]=l,kl(l,r),a===q.ground&&zl(c),l}Pi("lawn",486,1049,950,1681,Pa,q.ground,1.5);Pi("strip",486,940,950,1049,()=>-.25,q.ground,2);Pi("walk",Yr,958,dn,1681,(i,t)=>qr(t),q.ground,.75);Pi("patioZone",dn,940,1395,1108,()=>-.3,q.ground,3);Pi("sideNorth",486,765,574,940,()=>-.25,q.ground,3);Yn.sideNorth.material=new ft({color:3421754,roughness:1});function Dr(i,t,e,n){let s=t.map(([u,f])=>new et($(u),tt(f)));Un.isClockWise(s)&&(s=s.reverse());let r=e.map(u=>{let f=u.map(([d,g])=>new et($(d),tt(g)));return Un.isClockWise(f)||(f=f.reverse()),f}),a=Un.triangulateShape(s,r),o=s.concat(...r),c=[];for(let u of a)for(let f of[u[0],u[2],u[1]]){let d=o[f];c.push(d.x,n(d.x*Pt+ns,d.y*Pt+is),d.y)}let l=new pe;if(l.setAttribute("position",new Nt(c,3)),l.computeVertexNormals(),l.attributes.normal.getY(0)<0){let u=l.attributes.position.array;for(let f=0;f<u.length;f+=9)for(let d=0;d<3;d++){let g=u[f+3+d];u[f+3+d]=u[f+6+d],u[f+6+d]=g}l.computeVertexNormals()}zl(l);let h=new K(l,q.ground);h.receiveShadow=!0,oe.add(h),Yn[i]=h;{let u=[];for(let g=0;g<s.length;g++){let _=s[g],m=s[(g+1)%s.length],p=n(_.x*Pt+ns,_.y*Pt+is),y=n(m.x*Pt+ns,m.y*Pt+is);u.push(_.x,p,_.y,m.x,y,m.y,m.x,y-2.5,m.y,_.x,p,_.y,m.x,y-2.5,m.y,_.x,p-2.5,_.y)}let f=new pe;f.setAttribute("position",new Nt(u,3)),f.computeVertexNormals();let d=new K(f,q.skirtSoil);d.receiveShadow=!0,h.add(d)}return h}function dx(){for(let r of["fEx","pUp","pPool","pTurf","edgeStrip","edgeBay","fQ"])Yn[r]&&(oe.remove(Yn[r]),Yn[r].geometry.dispose(),delete Yn[r]);if(nt.mode==="existing"){let r=Pi("fEx",dn,1108,1394.6,1681,$e,q.dirt,.75),a=r.geometry.attributes.position,o=new Float32Array(a.count*2);for(let c=0;c<a.count;c++){let l=a.getX(c)*Pt+ns,h=a.getZ(c)*Pt+is;o[c*2]=(l-dn)/(1394.6-dn),o[c*2+1]=1-(h-1108)/573}r.geometry.setAttribute("uv",new me(o,2));return}let i=fn[1],t=5.5,e=(r,a)=>{let o=Math.sqrt(Math.max(r*r-(a-qt[1])**2,1));return{dx:o,aR:Math.atan2(a-qt[1],o),aL:Math.atan2(a-qt[1],-o)}},n=Array.from({length:56},(r,a)=>{let o=a/56*Ge;return[qt[0]+Math.cos(o)*73.5,qt[1]+Math.sin(o)*73.5]}),s=nt.step2>=se?t:0;if(nt.ver==="quote"){let r=e(Gr,Ue);Dr("pUp",[[i,1108],[Ae,1108],[Ae,Ue],[qt[0]+r.dx,Ue],...zr(r.aR,r.aL,Gr),[qt[0]-r.dx,Ue],[i,Ue]],[],()=>vn()),Dr("pPool",[[i,Ue],[qt[0]-r.dx,Ue],...zr(r.aL,r.aR,Gr),[qt[0]+r.dx,Ue],[Ae,Ue],[Ae,De-s],[i,De-s]],[n],()=>qn())}else{let r=nt.step1>=se?t:0,a=e(Ri+r,Ze-r),o=e(Ri-r,Ze+r);Dr("pUp",[[i,1108],[Ae,1108],[Ae,Ze-r],[qt[0]+a.dx,Ze-r],...zr(a.aR,a.aL,Ri+r),[qt[0]-a.dx,Ze-r],[i,Ze-r]],[],()=>vn()),Dr("pPool",[[i,Ze+r],[qt[0]-o.dx,Ze+r],...zr(o.aL,o.aR,Ri-r),[qt[0]+o.dx,Ze+r],[Ae,Ze+r],[Ae,De-s],[i,De-s]],[n],()=>qn())}Dr("pTurf",[[i,De+s],[Ae,De+s],[Ae,1681],[i,1681]],[],(r,a)=>Bl(a)),Pi("edgeStrip",Ae,1108,1394.6,1681,$e,q.ground,.75)}{let i=new zs([new et($(-900),tt(-900)),new et($(3e3),tt(-900)),new et($(3e3),tt(3200)),new et($(-900),tt(3200))]);i.holes.push(new Bs([new et($(486),tt(940)),new et($(486),tt(2700)),new et($(1394.6),tt(2700)),new et($(1394.6),tt(940))]));let t=new Ar(i);t.rotateX(Math.PI/2);let e=t.attributes.position;for(let r=0;r<e.count;r++)e.setY(r,-.32);let n=t.attributes.uv;for(let r=0;r<n.count;r++)n.setXY(r,e.getX(r)/14,e.getZ(r)/14);t.computeVertexNormals();let s=new K(t,q.outside);if(s.receiveShadow=!0,s.geometry.attributes.normal.getY(0)<0){let r=t.index.array;for(let a=0;a<r.length;a+=3){let o=r[a+1];r[a+1]=r[a+2],r[a+2]=o}t.computeVertexNormals()}oe.add(s)}{let i=Pi("greenbelt",486,1681,1394.6,2700,(n,s)=>La(un(n,486,1394))-.3-Math.pow(Math.max(0,(s-1690)/Pt),1.15)*.16,q.brush,4),t=i.geometry.attributes.position,e=new Float32Array(t.count*2);for(let n=0;n<t.count;n++)e[n*2]=t.getX(n)/12,e[n*2+1]=t.getZ(n)/12;i.geometry.setAttribute("uv",new me(e,2))}{let i=$r(Ve.patio,-.6,0,!1),t=new K(i.top,q.concrete),e=new K(i.side,q.concrete);t.receiveShadow=e.receiveShadow=!0,oe.add(t,e);let n=$r(Ve.wedge,-.6,.04,!0),s=new K(n.top,q.ground),r=new K(n.side,q.wood);s.receiveShadow=!0,r.castShadow=!0,oe.add(s,r)}var Il=new ce;oe.add(Il);function fx(){if(Il.clear(),nt.mode!=="existing")return;let i=24;for(let t=0;t<i;t++){let e=1e3+679*t/i,n=1e3+679*(t+1)/i,s=(e+n)/2,r=Math.min(qr(s),$e(dn+2,s)),a=Math.max(qr(s),$e(dn+2,s))+.12,o=new K(new Pe(.03,a-r+.4,(n-e)/Pt+.01),q.edging);o.position.set($(dn),(a+r-.4)/2,tt(s)),o.castShadow=!0,Il.add(o)}}var px=14.85/Pt,mx=11/Pt,gx=new Gs(1,Ti,mx,2,.035),Bn=new vr(gx,q.block,3e3);Bn.castShadow=Bn.receiveShadow=!0;Bn.instanceMatrix.setUsage(Ku);oe.add(Bn);var vd=(fn[0]+fn[1])/2,Fd=[{key:"west",name:"Walkway west wall",built:!0,path:[[955.34,958],[955.34,1679]],aName:"walkway",bName:"lawn",flip:!0},{key:"east",name:"Walkway east wall",path:[[vd,1108.35],[vd,1679]],aName:"walkway",bName:"terrace side"},{key:"step",name:"Pad to pool wall",path:[[fn[1],Ze],[rx,Ze],...zr(ax,cx),[ox,Ze],[Ae,Ze]],aName:"pool side",bName:"pad side",need:()=>nt.step1>=se&&nt.ver!=="quote"},{key:"cross",name:"Pool to turf wall",path:[[fn[1],De],[Ae,De]],aName:"turf side",bName:"pool side",need:()=>nt.step2>=se}];for(let i of Fd){i.segs=[];let t=0;for(let e=0;e<i.path.length-1;e++){let[n,s]=i.path[e],[r,a]=i.path[e+1],o=Math.hypot(r-n,a-s);i.segs.push({ax:n,ay:s,dx:(r-n)/o,dy:(a-s)/o,s0:t,L:o}),t+=o}i.len=t}function _x(i,t){let e=i.segs[i.segs.length-1];for(let s of i.segs)if(t<=s.s0+s.L){e=s;break}let n=un(t-e.s0,0,e.L);return{x:e.ax+e.dx*n,y:e.ay+e.dy*n,tx:e.dx,ty:e.dy}}var Bd=new C(0,1,0),Ea=new he,Sa=new xn,ba=new C,wa=new C,Md=new Ut;function xx(){let i=0,t=[],e=12;for(let n of Fd){let s=(n.built||nt.mode==="proposed")&&(!n.need||n.need()),r={r:n,count:0,maxFace:0,maxSide:"",len:n.len/Pt,on:s};if(!s){t.push(r);continue}let a=u=>{let f=_x(n,u),d=-f.ty,g=f.tx,_=n.flip?-1:1,m=Ne(f.x+d*e*_,f.y+g*e*_),p=Ne(f.x-d*e*_,f.y-g*e*_);return{p:f,A:m,B:p,top:Math.ceil((Math.max(m,p)-.04)/Ti),bot:Math.floor((Math.min(m,p)+.04)/Ti)-1}},o=px*Pt,c=1e9,l=-1e9;for(let u=0;u<=n.len;u+=o/2){let f=a(u);c=Math.min(c,f.bot),l=Math.max(l,f.top)}let h=le(n.key.length*97);for(let u=c;u<l;u++){let f=(u%2+2)%2?o/2:0;for(let d=-f;d<n.len;d+=o){let g=Math.max(d,0),_=Math.min(d+o,n.len);if(_-g<o*.18)continue;let m=(g+_)/2,p=a(m);if(u<p.bot||u>=p.top)continue;let y=Math.max(p.top*Ti-Math.min(p.A,p.B),0);y>r.maxFace&&(r.maxFace=y,r.maxSide=p.A<p.B?n.aName:n.bName);let x=(_-g)/Pt-.012,M=(h()-.5)*.03;wa.set($(p.p.x)-p.p.ty*M,u*Ti+Ti/2,tt(p.p.y)+p.p.tx*M),Sa.setFromAxisAngle(Bd,Math.atan2(-p.p.ty,p.p.tx)),ba.set(x,1,1),Ea.compose(wa,Sa,ba),Bn.setMatrixAt(i,Ea);let b=.9+h()*.16;Md.setRGB(b,b*(.98+h()*.03),b*(.95+h()*.05)),Bn.setColorAt(i,Md),i++,r.count++}}t.push(r)}return Bn.count=i,Bn.instanceMatrix.needsUpdate=!0,Bn.instanceColor&&(Bn.instanceColor.needsUpdate=!0),Bn.computeBoundingSphere(),t}var Ed=["#c9b3a3","#b9a99b","#a39a92","#d4c5b6","#9da3a8","#c2a597","#8f8a86","#e0d6ca","#b7aea6","#a9998c","#cfc0b0"].map(i=>new Ut(i)),yx=[0,1,2].map(i=>{let t=new Ei(1,2);return t.deleteAttribute("uv"),t.deleteAttribute("normal"),Ca(El(t),.28,1.1,17+i*31,1)}),vx=new ft({color:16777215,roughness:.55,metalness:.02}),Dl=yx.map(i=>{let t=new vr(i,vx,1400);return t.castShadow=t.receiveShadow=!0,oe.add(t),t}),Mx=(()=>{let i=le(909),t=[],e=8,n=new Map,s=(c,l)=>c+","+l,r=(c,l,h)=>{let u=Math.floor(c/e),f=Math.floor(l/e);for(let d=u-2;d<=u+2;d++)for(let g=f-2;g<=f+2;g++)for(let _ of n.get(s(d,g))||[])if(Math.hypot(_.px-c,_.py-l)<(_.ru+h)*.92)return!1;return!0},a=c=>{t.push(c);let l=s(Math.floor(c.px/e),Math.floor(c.py/e));n.has(l)||n.set(l,[]),n.get(l).push(c)},o=[{edge:c=>1108.6-(c-1036)*(2.35/329),depth:c=>(37.6-(c-1036)*(3.7/329))/2+3,dir:1},{edge:()=>1679,depth:()=>17,dir:-1}];for(let c of o)for(let l=0;l<9e3;l++){let h=fn[1]+2+i()*(Ae-fn[1]-4),u=c.depth(h),f=Math.pow(i(),1.25)*1.25;if(f>1&&i()>.25)continue;let d=c.edge(h)+c.dir*f*u,g=(3.2-2*Math.min(f,1))*(.7+i()*.45),_=g/12*Pt;r(h,d,_)&&a({px:h,py:d,ru:_,r:g/12,v:Math.floor(i()*3),rot:i()*Ge,sx:1+i()*.35,sz:.75+i()*.3,sy:.42+i()*.18,c:Ed[Math.floor(i()*Ed.length)].clone().offsetHSL(0,0,(i()-.5)*.08)})}return t})();function Ex(){let i=[0,0,0];if(nt.mode==="proposed")for(let e of Mx){let n=Dl[e.v],s=i[e.v]++,r=Ne(e.px,e.py);wa.set($(e.px),r+e.r*e.sy*.45,tt(e.py)),Sa.setFromAxisAngle(Bd,e.rot),ba.set(e.r*e.sx,e.r*e.sy,e.r*e.sz),Ea.compose(wa,Sa,ba),n.setMatrixAt(s,Ea),n.setColorAt(s,e.c)}Dl.forEach((e,n)=>{e.count=i[n],e.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.needsUpdate=!0),e.computeBoundingSphere()})}var Ta=new ce;oe.add(Ta);var Ur=new ft({color:2829101,roughness:.55,metalness:.6});function Nr(i,t,e,n,s=.03){let r=i.length,a=t?r:r-1;for(let o=0;o<a;o++){let[c,l]=i[o],[h,u]=i[(o+1)%r],f=Math.hypot(h-c,u-l);if(f<.5)continue;let d=Math.max(1,Math.ceil(f/10)),g=(h-c)/f,_=(u-l)/f;for(let m=0;m<d;m++){let p=m/d*f,y=(m+1)/d*f,x=(p+y)/2,M=c+g*x,b=l+_*x,[T,w]=e(M,b,-_,g),L=new K(new Pe(s,T-w,(y-p)/Pt+.004),n);L.position.set($(M),(T+w)/2,tt(b)),L.rotation.y=Math.atan2(g,_),L.castShadow=L.receiveShadow=!0,Ta.add(L)}}}function Sx(){let i=[];for(let o=1108;o<=1681;o+=573/40)i.push([Id(o),o]);Nr(i,!1,(o,c)=>{let l=Hr(o-4,c),h=$e(o+4,c);return[Math.ceil((Math.max(l,h)+.5*se)/Ti)*Ti,Math.min(l,h)-.35]},Ur),Nr(Ve.pad,!0,(o,c,l,h)=>{let u=Hr(o+l*4,c+h*4),f=Hr(o-l*4,c-h*4),d=Math.min(u,f,vn()-2*se);return[vn()+.4*se,d-.3]},Ur);for(let o of[[[fn[1],Ue],[1057,Ue]],[[1344,Ue],[Ae,Ue]]])Nr(o,!1,()=>[vn()+.4*se,qn()-.3],Ur);let t=1072,e=1108,n=Ue,s=Ue+15,r=(vn()+qn())/2;Nr([[t,n],[t,s],[e,s],[e,n]],!1,()=>[r+.4*se,qn()-.3],Ur);let a=Ve.turf;return Nr([[a[0][0],a[0][1]],[a[1][0],a[1][1]],[a[2][0],a[2][1]],[a[3][0],a[3][1]]],!0,(o,c)=>{let l=Hr(o,c);return[l+.4*se,l-.3]},Ur,.02),0}function bx(){Ta.clear();let i=0;if(nt.mode!=="proposed")return 0;if(nt.ver==="quote")return Sx();for(let t=0;t<Sl.length-1;t++){let[e,n]=Sl[t],[s,r]=Sl[t+1],a=Math.hypot(s-e,r-n),o=Math.max(1,Math.ceil(a/12)),c=(s-e)/a,l=(r-n)/a;for(let h=0;h<o;h++){let u=h/o*a,f=(h+1)/o*a,d=(u+f)/2,g=e+c*d,_=n+l*d,m=Hl(g-Math.abs(l)*3,_-(c!==0?t===1?3:-3:0)),p=$e(g+Math.abs(l)*3,_+(c!==0?t===1?3:-3:0));i=Math.max(i,Math.abs(m-p));let y=Math.max(m,p)+se,x=Math.min(m,p)-.3,M=new K(new Pe(.04,y-x,(f-u)/Pt+.005),q.edging);M.position.set($(g),(y+x)/2,tt(_)),M.rotation.y=Math.atan2(c,l),M.castShadow=M.receiveShadow=!0,Ta.add(M)}}return i}var Ul=new ce;oe.add(Ul);var wx=new Gs(23*se,.16,23*se,2,.03),Vl=new ce;oe.add(Vl);var ji=null,kr=new ce;oe.add(kr);function bl(i,t,e,n,s){let a=$r(i,0,0,!1).top,o=a.attributes.position,c=new Float32Array(o.count*2),l=Wr[e].span,h=Math.cos(n),u=Math.sin(n);for(let g=0;g<o.count;g++){o.setY(g,t);let _=o.getX(g),m=o.getZ(g);c[g*2]=(_*h+m*u)/l,c[g*2+1]=(-_*u+m*h)/l}a.setAttribute("uv",new me(c,2)),a.computeVertexNormals();let f=new ft({map:Wr[e].tex,roughness:.85,polygonOffset:!0,polygonOffsetFactor:-2-s,polygonOffsetUnits:-2-s}),d=new K(a,f);return d.receiveShadow=!0,d.renderOrder=s,d}function Tx(i){let t=1057+i,e=1344-i,n=1151+i,s=Ue-i,r=Gr+i,a=Math.sqrt(r*r-(qt[1]-s)**2),o=Math.atan2(s-qt[1],a),c=Math.atan2(s-qt[1],-a),l=[];for(let h=1;h<24;h++){let u=o+(c-o)*h/24;l.push([qt[0]+Math.cos(u)*r,qt[1]+Math.sin(u)*r])}return[[t,n],[e,n],[e,s],[qt[0]+a,s],...l,[qt[0]-a,s],[t,s]]}function Ax(){if(kr.clear(),nt.ver!=="quote")return;kr.add(bl(Ve.pad,vn()+.012,"anthracite",0,1)),kr.add(bl(Tx(8*se*Pt),vn()+.016,"amaretto",Math.PI/4,2));let i=(vn()+qn())/2;kr.add(bl([[1072,Ue],[1108,Ue],[1108,Ue+15],[1072,Ue+15]],i,"amaretto",Math.PI/4,2))}function Rx(){Ax(),ji&&(oe.remove(ji),ji.geometry.dispose(),ji=null);let i=nt.padSurf;if(nt.ver==="quote"||i==="brick"||!Wr[i])return;let e=$r(Ve.pad,0,0,!1).top,n=e.attributes.position,s=new Float32Array(n.count*2),r=Wr[i].span;for(let o=0;o<n.count;o++)n.setY(o,vn()+.012),s[o*2]=n.getX(o)/r,s[o*2+1]=n.getZ(o)/r;e.setAttribute("uv",new me(s,2)),e.computeVertexNormals();let a=new ft({map:Wr[i].tex,roughness:i==="conc"?.9:.85,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});ji=new K(e,a),ji.receiveShadow=!0,oe.add(ji)}for(let i of Ve.pavers){let t=(i[0]+i[2])/2,e=(i[1]+i[3])/2;if(i[0]>975&&i[0]<990){let n=new K(wx,q.stone);n.position.set($((Yr+dn)/2),0,tt(e)),n.rotation.y=(le(Math.round(e))()-.5)*.02,n.castShadow=n.receiveShadow=!0,Ul.add(n),Hn(n,(Yr+dn)/2,e,.05)}else{let n=(i[2]-i[0])/Pt,s=(i[3]-i[1])/Pt,r=new K(new Gs(n,.14,s,2,.025),q.stone);r.position.set($(t),0,tt(e)),r.castShadow=r.receiveShadow=!0,i[0]>1050?(Vl.add(r),Hn(r,t,e,.04)):(Ul.add(r),Hn(r,t,e,.05))}}var ue=new ce;oe.add(ue);var bi=580,Or=1296,Qi=376,qs=950,Sd=8.7,Cx=.35;{let s=function(w,L,v,E,D,O,V){let P=Math.hypot(v-w,E-L)/Pt,N=new nn(P,i-.05);ss(N,P/V,(i-.05)/V);let H=new K(N,O);if(H.castShadow=H.receiveShadow=!0,H.position.set($((w+v)/2),-.3+(i-.05)/2,tt((L+E)/2)),H.rotation.y=D,ue.add(H),O===q.siding){let Z=new K(new nn(P,1.1),q.skirt);Z.position.set(H.position.x+Math.sin(D)*.01,.25,H.position.z+Math.cos(D)*.01),Z.rotation.y=D,Z.receiveShadow=!0,ue.add(Z)}return H},a=function(w,L,v,E){let O=$(w)-1.2,V=$(v)+1.2,P=tt(L)-1.2,N=tt(E)+1.2,H=V-O>=N-P,Z=(H?N-P:V-O)/2,J=Z*4/12,W=Sd-.25,j=W+J,st=[],gt=[],X=Math.hypot(Z,J),Q=(Mt,F,Zt,bt)=>{st.push(...Mt,...F,...Zt,...Mt,...Zt,...bt),gt.push(Mt[0]/3+Mt[2]/3,0,F[0]/3+F[2]/3,0,Zt[0]/3+Zt[2]/3,X/3,Mt[0]/3+Mt[2]/3,0,Zt[0]/3+Zt[2]/3,X/3,bt[0]/3+bt[2]/3,X/3)},_t=(Mt,F,Zt)=>{st.push(...Mt,...F,...Zt),gt.push(Mt[0]/3+Mt[2]/3,0,F[0]/3+F[2]/3,0,Zt[0]/3+Zt[2]/3,X/3)};if(H){let Mt=(P+N)/2,F=O+Z,Zt=V-Z;Q([O,W,N],[V,W,N],[Zt,j,Mt],[F,j,Mt]),Q([V,W,P],[O,W,P],[F,j,Mt],[Zt,j,Mt]),_t([O,W,P],[O,W,N],[F,j,Mt]),_t([V,W,N],[V,W,P],[Zt,j,Mt])}else{let Mt=(O+V)/2,F=P+Z,Zt=N-Z;Q([V,W,N],[V,W,P],[Mt,j,F],[Mt,j,Zt]),Q([O,W,P],[O,W,N],[Mt,j,Zt],[Mt,j,F]),_t([V,W,P],[O,W,P],[Mt,j,F]),_t([O,W,N],[V,W,N],[Mt,j,Zt])}let Et=new pe;Et.setAttribute("position",new Nt(st,3)),Et.setAttribute("uv",new Nt(gt,2)),Et.computeVertexNormals();let St=new K(Et,q.shingle);St.castShadow=St.receiveShadow=!0,ue.add(St);let Ot=(O+V)/2,Bt=(P+N)/2;for(let[Mt,F,Zt,bt]of[[V-O,.08,Ot,N],[V-O,.08,Ot,P],[.08,N-P,O,Bt],[.08,N-P,V,Bt]])ee(Mt,.55,F,q.trim,Zt,W-.2,bt,ue);let Lt=new K(new nn(V-O,N-P),q.trim);Lt.rotation.x=Math.PI/2,Lt.position.set(Ot,W-.45,Bt),ue.add(Lt)},i=Sd+.35,t=480,e=875,n=967;s(bi,qs,Or,qs,0,q.siding,4),s(Or,t,Or,qs,Math.PI/2,q.siding,4),s(bi,t,bi,qs,-Math.PI/2,q.siding,4),s(bi,Qi,bi,t,-Math.PI/2,q.siding,4),s(bi,Qi,e,Qi,Math.PI,q.stoneWall,8),s(e,Qi,e,t,Math.PI/2,q.stoneWall,8),s(e,t,Or,t,Math.PI,q.stoneWall,8);let r=ee(1.3,i-.6,1.3,q.stoneWall,$(n)-.65,-.3+(i-.6)/2,tt(Qi)+.65,ue);ss(r.geometry,1.3/8,(i-.6)/8),a(bi,t,Or,qs),a(bi,Qi,n,t+30);let o=tt(Qi)-.03,c=tt(t)-.03;{let w=new K(new nn(16,7),q.garageDoor);w.position.set($(727),-.3+3.5,o),w.rotation.y=Math.PI,ue.add(w);for(let[L,v,E,D]of[[16.6,.35,0,3.65],[.3,7,-8.15,0],[.3,7,8.15,0]])ee(L,v,.15,q.trim,$(727)+E,-.3+3.5+D,o-.05,ue)}{let w=new K(new nn(3,6.8),q.frontDoor);w.position.set($(902),-.15+3.4,c),w.rotation.y=Math.PI,ue.add(w);for(let[E,D]of[[902,3]])for(let[O,V,P,N]of[[D+.5,.3,0,3.55],[.25,6.8,-D/2-.12,0],[.25,6.8,D/2+.12,0]])ee(O,V,.12,q.trim,$(E)+P,-.15+3.4+N,c-.05,ue);let L=new K(new nn(1.6,6.4),q.blinds);L.position.set($(940),-.15+3.4,c),L.rotation.y=Math.PI,ue.add(L);for(let[E,D,O,V]of[[2.1,.25,0,3.3],[.22,6.6,-.9,0],[.22,6.6,.9,0]])ee(E,D,.12,q.trim,$(940)+O,-.15+3.4+V,c-.05,ue);let v=new K(new Si(.09,10,8),q.steelPost);v.position.set($(902)-1.15,3.1,c-.08),ue.add(v)}{let w=$(1150),L=3.4,v=4.6,E=2.9,D=new K(new nn(L,v),q.blinds);D.position.set(w,E+v/2,c),D.rotation.y=Math.PI,ue.add(D);for(let[O,V,P,N]of[[L+.6,.3,0,v/2+.15],[L+.8,.25,0,-v/2-.12],[.3,v,-L/2-.15,0],[.3,v,L/2+.15,0],[L,.08,0,0]])ee(O,V,.14,q.trim,w+P,E+v/2+N,c-.06,ue)}let l=(w,L,v)=>{let E=$r(w,-.6,L,!1),D=new K(E.top,v),O=new K(E.side,v);return D.receiveShadow=O.receiveShadow=!0,ue.add(D,O),D};l(Ve.driveway.map(([w,L])=>[w,L]).concat([]),-.2,q.concrete),l([[876,383],[967,383],[967,470],[876,470]],-.08,q.concrete),l([[598,36],[840,36],[840,100],[598,100]],-.2,q.concrete);{let w=l(Ve.frontRock,-.26,q.chips)}l([[-900,40],[3e3,40],[3e3,98],[-900,98]],-.17,q.concrete),ee(3900/Pt,.42,.5,q.concrete,$(1050),-.36,tt(36),ue),l([[-900,-700],[3e3,-700],[3e3,34],[-900,34]],-.3,q.asphalt);let h=le(55);for(let[w,L,v]of[[1278,505,2.3],[1240,500,1.4],[1060,500,1.1],[990,495,1],[1205,498,1.2]]){let E=new K(Ca(new Ei(v,2),.35,1.4/v,h()*40,.85),new ft({color:new Ut().setHSL(.27,.35,.24+h()*.06),roughness:1}));E.position.set($(w),v*.6-.3,tt(L)-1.6),E.castShadow=E.receiveShadow=!0,ue.add(E)}let u=tt(qs)+.02;for(let[w,L,v,E,D]of[[690,2.4,2,5,"grid"],[815,3.4,4,3,"blinds"],[905,3.6,4.6,2.7,"blinds"],[1080,6,6.8,Cx,"door"],[1185,4.4,4,3,"blinds"]]){let O=$(w),V=new K(new nn(L,v),D==="blinds"?q.blinds:q.glassDark);V.position.set(O,E+v/2,u+.01),ue.add(V);for(let[P,N,H,Z]of[[L+.5,.28,0,v/2+.14],[L+.5,.22,0,-v/2-.11],[.25,v,-L/2-.12,0],[.25,v,L/2+.12,0]])ee(P,N,.12,q.trim,O+H,E+v/2+Z,u+.05,ue);if(D==="grid"){ee(.06,v,.05,q.trim,O,E+v/2,u+.04,ue);for(let P of[-1/6,1/6])ee(L,.06,.05,q.trim,O,E+v/2+P*v,u+.04,ue)}D==="door"&&ee(.12,v,.06,q.trim,O,E+v/2,u+.05,ue)}let f=$(957),d=$(1028),g=tt(909),_=tt(965),m=d-f,p=_-g,y=16.6,x=new K(ss(new Pe(m,y+.3,p),m/4,y/4),q.siding);x.position.set((f+d)/2,(y-.3)/2,(g+_)/2),x.castShadow=x.receiveShadow=!0,ue.add(x),ee(m+.35,.25,p+.35,q.steelPost,(f+d)/2,y+.1,(g+_)/2,ue);let M=new K(new ve(.33,.33,1.1,16),q.steelPost);M.position.set($(994.56),y+.75,tt(925.43)),M.castShadow=!0,ue.add(M);let b=new K(new qi(.55,.4,16),q.steelPost);b.position.set($(994.56),y+1.5,tt(925.43)),ue.add(b);let T=le(77);for(let w=600;w<945;w+=26+T()*10){let L=new K(new Ei(.9+T()*.5,1),new ft({color:new Ut().setHSL(.27+T()*.05,.32,.22+T()*.08),roughness:1,flatShading:!0}));L.scale.y=.75,L.position.set($(w),.3,tt(975)),L.castShadow=!0,ue.add(L)}}{let i=new ce;oe.add(i);let t=$(1022),e=$(1306),n=tt(951),s=tt(1098),r=tt(1112),a=8.25,o=7.35,c=(a-o)/(s-n),l=m=>a-(m-n)*c;for(let m of[1032,1170,1298])ee(.3,o-.55,.3,q.white,$(m),(o-.55)/2,s,i);ee(e-t,.6,.32,q.white,(t+e)/2,o-.3,s,i),ee(e-t,.45,.2,q.white,(t+e)/2,a-.2,n+.12,i);let h=Math.atan(c),u=(r-n)/Math.cos(h);for(let m=t+.2;m<=e;m+=2){let p=ee(.15,.45,u,q.wood,m,l((n+r)/2)+.2,(n+r)/2,i);p.rotation.x=h}for(let m=n+1.2;m<r;m+=2.4){let p=ee(e-t+.4,.12,.25,q.wood,(t+e)/2,l(m)+.5,m,i);p.rotation.x=h}let f=new nn(e-t+.6,u+.3),d=f.attributes.uv;for(let m=0;m<d.count;m++)d.setXY(m,d.getX(m)*(e-t)/.44,d.getY(m));let g=new K(f,q.corr);g.rotation.x=-Math.PI/2+h,g.position.set((t+e)/2,l((n+r)/2)+.6,(n+r)/2),g.castShadow=g.receiveShadow=!0,i.add(g);let _=le(5);for(let[m,p]of[[[t+1,s],[e-1,n+1]],[[t+1,n+1],[e-1,s-.5]]]){let y=[];for(let M=0;M<=24;M++){let b=M/24,T=m[0]+(p[0]-m[0])*b,w=m[1]+(p[1]-m[1])*b;y.push(new C(T,l(w)-.2-Math.sin(b*Math.PI)*.9,w))}let x=new On(y);i.add(new K(new Wn(x,48,.02,4),q.wire));for(let M=1;M<12;M++){let b=x.getPoint(M/12),T=new K(new Si(.11,8,6),q.bulb);T.position.copy(b).y-=.25,i.add(T)}}}var ai=new ce;oe.add(ai);var wl=i=>Math.min(La(i),i>fn[1]&&nt.mode==="proposed"?Hl(i,1681):99);function Fr(i,t,e){let[n,s]=i,[r,a]=t,o=Math.hypot(r-n,a-s)/Pt,c=Math.max(1,Math.round(o/8)),l=Math.atan2(-(tt(a)-tt(s)),$(r)-$(n));for(let h=0;h<c;h++){let u=h/c,f=(h+1)/c,d=(u+f)/2,g=n+(r-n)*d,_=s+(a-s)*d,m=1e9;for(let L of[u,d,f])m=Math.min(m,e.ground(n+(r-n)*L,s+(a-s)*L));let p=Math.min(m,e.minBase??1e9)-.15,y=6+.15,x=o/c,M=ss(new Pe(x,y,.07),x/4,y/6),b=new K(M,q.board);if(b.position.set($(g),p+y/2,tt(_)),b.rotation.y=l,b.castShadow=b.receiveShadow=!0,ai.add(b),e.cap){let L=ee(x+.05,.12,.5,q.board,$(g),p+y+.06,tt(_),ai,l)}let T=n+(r-n)*u,w=s+(a-s)*u;if(e.steel){let L=new K(new ve(.12,.12,y+.2,10),q.steelPost),v=Math.sin(l)*e.side,E=Math.cos(l)*e.side;L.position.set($(T)+v*.15,p+(y+.2)/2,tt(w)+E*.15),L.castShadow=!0,ai.add(L)}else ee(.3,y+.1,.3,q.board,$(T),p+(y+.1)/2,tt(w),ai,l)}}function Px(){ai.clear(),Fr([573.18,765.33],[485.87,765.33],{ground:()=>-.25,steel:!0,side:1}),Fr([485.87,765.33],[485.87,1681],{ground:(i,t)=>t<1049?-.25:Pa(486,t),steel:!0,side:-1}),Fr([1394.6,1681.46],[1387.64,1052.39],{ground:(i,t)=>$e(1390,t),cap:!0}),Fr([1387.64,1052.39],[1304,945.5],{ground:()=>-.3,cap:!0}),Fr([485.87,1681],[540,1681],{ground:i=>La(i)});{let e=Math.round(854.5999999999999/Pt/8);for(let n=0;n<e;n++){let s=540+854.5999999999999*n/e,r=540+(1394.6-540)*(n+1)/e,a=(s+r)/2,o=Math.min(wl(s),wl(r),wl(a))+.25,c=(r-s)/Pt,l=4,h=tt(1681);for(let[d,g,_,m]of[[c,.14,$(a),o+l],[c,.14,$(a),o+.07],[.14,l,$(s)+.07,o+l/2],[.14,l,$(r)-.07,o+l/2]])ee(d,g,.14,q.hogFrame,_,m,h,ai);let u=new nn(c-.2,l-.2);ss(u,(c-.2)/(4*se),(l-.2)/(4*se));let f=new K(u,q.hogMesh);f.position.set($(a),o+l/2,h),f.castShadow=!0,ai.add(f),ee(.2,l+.6+.3,.2,q.hogFrame,$(s),o+(l+.3)/2-.15,h,ai)}}}var bd={post:[1352,1548],planters:[1350,1420]},Xr=[1342.3,1513],Aa=[1342.3,1513],Ke=[1352,1548],Hd=[1299,1094],Zs=[[1345,1440],[1345,1526]],Ra=Math.atan2(tt(1380)-tt(1349.94),$(1360)-$(1219.87)),Br=([i,t])=>Math.hypot(i-qt[0],t-qt[1])/Pt-72.5/Pt,Lx=new ft({color:10196364,roughness:1}),Tl=os("pool");{let i=72.5/Pt,t=$(1219.87),e=tt(1349.99),n=new ce;n.position.set(t,0,e),Tl.add(n),Hn(n,1219.87,1349.99,()=>-nt.sink);let s=new K(new ve(i,i,1.9,96,1,!0),q.tank);ss(s.geometry,Math.round(Ge*i/1.6),1),s.position.y=.95,s.castShadow=s.receiveShadow=!0,n.add(s);let r=new K(new ve(i-.03,i-.03,1.9,96,1,!0),q.tankIn);ss(r.geometry,Math.round(Ge*i/1.6),1),r.position.y=.95,r.receiveShadow=!0,n.add(r);let a=[[i-.06,1.86],[i-.07,1.98],[i-.02,2.04],[i+.12,2.05],[i+.2,2],[i+.21,1.9],[i+.17,1.86]].map(([b,T])=>new et(b,T)),o=new K(new Sr(a,120),q.rim);o.castShadow=o.receiveShadow=!0,n.add(o);let c=new K(new ve(i+.6,i+.6,.35,48),Lx);c.position.y=-.18,c.receiveShadow=!0,n.add(c);let l=new K(new Hs(i-.02,64),q.poolFloor);l.rotation.x=-Math.PI/2,l.position.y=.04,l.receiveShadow=!0,n.add(l);let h=new K(new Hs(i-.04,64),q.water);h.rotation.x=-Math.PI/2,h.position.y=1.68,h.renderOrder=2,n.add(h);{let b=new ce;n.add(b);for(let[T,w]of[[.1,"skim"],[-.1,"ret"]]){let L=Ra+T,v=new ce;if(v.position.set(Math.cos(L)*i,0,Math.sin(L)*i),v.rotation.y=-L,b.add(v),w==="skim"){ee(.06,.42,.62,q.white,-.04,1.55,0,v),ee(.02,.3,.48,q.jet,-.075,1.55,0,v),ee(.55,.75,.7,q.jet,.3,1.4,0,v);let E=new K(new ve(.075,.075,.3,12),q.pvc);E.position.set(.3,.9,0),v.add(E)}else{let E=new K(new Si(.12,14,10),q.white);E.position.set(-.05,.85,0),v.add(E);let D=new K(new ve(.17,.17,.06,18),q.white);D.rotation.z=Math.PI/2,D.position.set(-.03,.85,0),v.add(D);let O=new K(new ve(.08,.08,.5,12),q.pvc);O.rotation.z=Math.PI/2,O.position.set(.25,.85,0),v.add(O)}}}let u=new ce;u.position.set($(Ke[0]),0,tt(Ke[1])),Tl.add(u),Hn(u,Ke[0],Ke[1],0);let f=Ma[Ma.length-1];window.__placePump=()=>{let b=bd[nt.pumpAt]||bd.post;Ke[0]=b[0],Ke[1]=b[1],f[1]=b[0],f[2]=b[1],u.position.set($(b[0]),Ne(...b),tt(b[1])),u.rotation.y=nt.pumpAt==="planters"?Math.PI:0,u.updateMatrixWorld(!0)};let d=new K(new Pe(1.3,.12,2.1),q.concrete);d.position.y=.06,d.receiveShadow=d.castShadow=!0,u.add(d);let g=new K(new ve(.3,.33,.75,24),q.pump);g.position.set(0,.5,-.45),g.castShadow=!0,u.add(g);let _=new K(new ve(.2,.2,.5,16),q.pump);_.rotation.x=Math.PI/2,_.position.set(0,.34,-.85),_.castShadow=!0,u.add(_);let m=new K(new ve(.36,.36,1.6,24),q.white);m.position.set(0,.92,.5),m.castShadow=!0,u.add(m);let p=new K(new Si(.36,24,12,0,Ge,0,Math.PI/2),q.white);p.position.set(0,1.72,.5),u.add(p);let y=new K(new ve(.09,.09,.05,14),q.steelPost);y.rotation.z=Math.PI/2,y.position.set(-.05,1.98,.5),u.add(y);for(let[b,T,w,L]of[[.12,.5,0,0],[.5,.5,0,-.12],[.12,.7,.95,.95],[.7,.7,.95,.8]]){let v=Math.hypot(T-b,L-w)||.01,E=new K(new ve(.06,.06,v,10),q.pvc);E.position.set(.2,(b+T)/2,(w+L)/2),L!==w&&(E.rotation.x=Math.PI/2),u.add(E)}for(let[b,T]of[[.3,0],[.42,.95]]){let w=new K(new Pe(.1,.07,.24),q.valve);w.position.set(.2,b+.12,T),u.add(w)}let x=new ce;Tl.add(x);let M=new ft({color:16053231,roughness:.55});window.__buildHoses=()=>{x.clear();let b=72.5/Pt,T=$(qt[0]),w=tt(qt[1]),L=Ne(...qt)-nt.sink,v=Ne(...Ke),E=nt.pumpAt!=="planters",D=(N,H,Z=.06)=>new C($(N),Ne(N,H)+Z,tt(H));[[.1,.95,.45,-4],[-.1,.85,.6,4]].forEach(([N,H,Z,J],W)=>{let j=Ra+N,st=[new C(T+Math.cos(j)*(b+Z),L+H,w+Math.sin(j)*(b+Z)),new C(T+Math.cos(j)*(b+Z+.5),L+.12,w+Math.sin(j)*(b+Z+.5))];if(E){let Q=1350+J;st.push(D(1330,1374+J),D(Q,1395),D(Q,1440),new C($(Q),Ne(Q,De-12)+.1,tt(De-8)),new C($(Q),Ne(Q,De-12)+.1,tt(De+7)),D(Q,De+14),D(Q,1500),D(Q,1522))}else st.push(D(1328,1376+J),D(1346+J,1394));let gt=u.localToWorld(new C(.22,.14,W?.55:-.2));st.push(new C(gt.x,v+.1,gt.z+(E?-.6:.6)),gt);let X=new K(new Wn(new On(st,!1,"catmullrom",.25),140,.07,10),M);X.castShadow=X.receiveShadow=!0,x.add(X)});let O=u.localToWorld(new C(0,.34,-1.1)),V=new C($(Aa[0]),v+1.45,tt(Aa[1])+(E?.36:-.36)),P;E?P=[O,new C(O.x-.2,v+.12,O.z-.3),new C(V.x+.05,v+.6,V.z+.4),V]:P=[O,new C(O.x+.3,Ne(1360,1440)+.04,O.z+.4),D(1360,1440,.04),new C($(1360),Ne(1360,De-12)+.05,tt(De-8)),new C($(1360),Ne(1360,De-12)+.05,tt(De+7)),D(1360,De+14,.04),D(1360,1490,.04),new C(V.x+.3,v+.08,V.z-.5),V],x.add(new K(new Wn(new On(P,!1,"catmullrom",.3),80,.03,6),q.hose))}}var zd=os("furniture");function wd(i){let t=i.slice(0,4),e=t.reduce((c,l)=>[c[0]+l[0]/4,c[1]+l[1]/4],[0,0]),n=[t[1][0]-t[0][0],t[1][1]-t[0][1]],s=[t[2][0]-t[1][0],t[2][1]-t[1][1]],r=Math.hypot(...n),a=Math.hypot(...s),o=r>a?n:s;return{c:e,L:Math.max(r,a)/Pt,W:Math.min(r,a)/Pt,ax:[o[0]/Math.hypot(...o),o[1]/Math.hypot(...o)]}}function Ix(i){let t=wd(i.frame),e=wd(i.back),n=[e.c[0]-t.c[0],e.c[1]-t.c[1]],s=Math.sign(n[0]*t.ax[0]+n[1]*t.ax[1])||1,r=[t.ax[0]*s,t.ax[1]*s],a=new ce;a.position.set($(t.c[0]),0,tt(t.c[1])),a.rotation.y=Math.atan2(-r[1],r[0]),zd.add(a),Hn(a,t.c[0],t.c[1],.04);let o=t.L,c=t.W,l=Math.min(e.L,o*.45),h=t.L>4?1:1.2;for(let f of[-1,1])for(let d of[-1,1])ee(.1,h,.1,q.frame,f*(o/2-.15),h/2,d*(c/2-.1),a);ee(o,.1,c,q.frame,0,h,0,a),ee(o-l,.28,c*.94,q.cushion,-l/2,h+.18,0,a);let u=new ce;u.position.set(o/2-l,h+.1,0),u.rotation.z=t.L>4?.75:.95,a.add(u),ee(l*1.15,.28,c*.94,q.cushion,l*.57,.14,0,u)}function Dx(i){let t=i.frame.map(c=>c[0]),e=i.frame.map(c=>c[1]),n=(Math.min(...t)+Math.max(...t))/2,s=(Math.min(...e)+Math.max(...e))/2,r=(Math.max(...t)-Math.min(...t))/Pt,a=(Math.max(...e)-Math.min(...e))/Pt,o=new ce;o.position.set($(n),0,tt(s)),zd.add(o),Hn(o,n,s,.04),ee(r,.08,a,q.teak,0,1.4,0,o);for(let c of[-1,1])for(let l of[-1,1])ee(.08,1.4,.08,q.teak,c*(r/2-.08),.7,l*(a/2-.08),o)}for(let i of Object.values(Ve.furniture))i.back?Ix(i):Dx(i);var Ux=os("umbrella");{let i=Ve.umbrella[0],t=i.slice(0,4).reduce((m,p)=>m+p[0]/4,0),e=i.slice(0,4).reduce((m,p)=>m+p[1]/4,0),n=Math.hypot(i[1][0]-i[0][0],i[1][1]-i[0][1])/Pt,s=Math.atan2(-(i[1][1]-i[0][1]),i[1][0]-i[0][0]),r=Ve.umbrella[2],a=r.slice(0,4).reduce((m,p)=>m+p[0]/4,0),o=r.slice(0,4).reduce((m,p)=>m+p[1]/4,0),c=new ce;Ux.add(c),Hn(c,a,o,0),c.position.x=$(a),c.position.z=tt(o),ee(2.4,.35,2.4,q.frame,0,.18,0,c);let l=$(t)-$(a),h=tt(e)-tt(o),u=new K(new ve(.08,.09,9.6,12),q.frame);u.position.y=4.8,u.castShadow=!0,c.add(u);let f=Math.hypot(l,h),d=new K(new ve(.06,.06,f,10),q.frame);d.rotation.z=Math.PI/2,d.rotation.y=Math.atan2(-h,l),d.position.set(l/2,9.5,h/2),c.add(d);let g=new K(new qi(n/Math.SQRT2,1.5,4,1,!0),q.canopy);g.position.set(l,9,h),g.rotation.y=Math.PI/4+s,g.castShadow=!0,g.receiveShadow=!0,c.add(g);let _=new K(new ve(.04,.04,.9,8),q.frame);_.position.set(l,9.3,h),c.add(_)}var Td=os("planters");{let i=le(13);Ve.planters.forEach((t,e)=>{let[n,s,r]=t[0];e===1&&(n=1330,s=1298);let a=r/Pt,o=Math.min(a*1.9,2.4),c=new ce;c.position.set($(n),0,tt(s)),Td.add(c),Hn(c,n,s,0);let l=[[a*.66,0],[a*.7,.06],[a*.9,o*.84],[a*1.02,o*.86],[a*1.03,o],[a*.93,o],[a*.9,o*.88]].map(([f,d])=>new et(f,d)),h=new K(new Sr(l,40),q.terracotta);h.castShadow=h.receiveShadow=!0,c.add(h);let u=new K(new Hs(a*.9,24),q.soil);if(u.rotation.x=-Math.PI/2,u.position.y=o*.88,c.add(u),e%2===0){let d=[];for(let _=0;_<16;_++){let m=a*(1+i()*.6),p=new qi(.11*a*1.4,m,4);p.translate(0,m/2,0),p.scale(1,1,.35),p.rotateZ(-(.35+i()*.75)),p.rotateY(_/16*Ge+i()*.3),d.push(p)}let g=new K(pa(d),q.agave);g.position.y=o*.88,g.castShadow=!0,c.add(g)}else{let f=[];for(let g=0;g<44;g++){let _=1.2+i()*1.3,m=new qi(.035,_,3);m.translate(0,_/2,0),m.rotateZ((i()-.5)*.9),m.rotateY(i()*Ge),m.translate((i()-.5)*a*.8,0,(i()-.5)*a*.8),f.push(m)}let d=new K(pa(f),q.grassPlant);d.position.y=o*.88,d.castShadow=!0,c.add(d)}});for(let t of Ve.boulders)for(let[e,n,s,r]of t){let a=s/Pt,o=le(Math.round(e*7+n)),c=Ca(new Ei(a,2),.45,1.6/Math.max(a,.2),o()*50,.62),l=new K(c,new ft({color:r,roughness:.95,flatShading:!0}));l.position.set($(e),0,tt(n)),l.rotation.y=o()*Ge,l.castShadow=l.receiveShadow=!0,Td.add(l),Hn(l,e,n,a*.18)}}var _e=os("electrical"),ts=[[1298.5,560],[1298.5,935]],Ci=[[1300,940],[1337,988],[1337,1500],[Xr[0],1506],[Xr[0],Xr[1]]],Nx=[],Ox=[{p:[1298.5,527],name:"Main panel",kind:"panel"},{p:[1296.8,933],name:"Corner junction box",sub:"No outlet. Feeder turns down here, patio circuit turns up",kind:"jbox"},{p:Xr,name:"Subpanel",kind:"sub"},{p:Aa,name:"Pump receptacle",kind:"rcpt"},{p:Hd,name:"Patio outlet",kind:"patio"}],yn={pipe:new ft({color:14236223,emissive:7999508,emissiveIntensity:.55,roughness:.5}),box:new ft({color:12172736,roughness:.45,metalness:.5}),post:new ft({color:8216648,roughness:.9}),copper:new ft({color:13136954,emissive:5909004,emissiveIntensity:.5,roughness:.35,metalness:.8}),rcpt:new ft({color:7304312,roughness:.5,metalness:.3}),tape:new ri({color:16762941,transparent:!0,opacity:.85,side:Se,depthWrite:!1})},Fx=(i,t)=>t>=1108?$e(i,t):t>=950?-.32:-.28;function Bx(i=4){let t=[];for(let e=0;e<Ci.length-1;e++){let[n,s]=Ci[e],[r,a]=Ci[e+1],o=Math.max(1,Math.ceil(Math.hypot(r-n,a-s)/i));for(let c=0;c<(e===Ci.length-2?o+1:o);c++){let l=c/o;t.push([n+(r-n)*l,s+(a-s)*l])}}return t}var Js=[];function es(i,t,e,n,s){let r=document.createElement("div");r.className="lbl",r.innerHTML=i;let a=new ga(r);return a.position.set(e,n,s),t.add(a),Js.push(a),a}function Ad(i,t,e,n){let s=[];for(let o=0;o<i.length-1;o++){let[c,l]=i[o],[h,u]=i[o+1],f=Math.max(1,Math.ceil(Math.hypot(h-c,u-l)/4));for(let d=0;d<f;d++){let g=d/f,_=c+(h-c)*g,m=l+(u-l)*g;s.push(new C($(_),t(_,m),tt(m)))}}let[r,a]=i[i.length-1];return s.push(new C($(r),t(r,a),tt(a))),new K(new Wn(new On(s,!1,"catmullrom",.05),s.length*3,e,8),n)}var Hx=new ri({color:4173418,transparent:!0,opacity:.1,depthWrite:!1,side:Se});function zx(){for(let s of Js)s.removeFromParent(),s.element.remove();Js.length=0,_e.clear();let i=nt.cdepth,t=(s,r)=>Fx(s,r)-i;_e.add(Ad(Ci,t,.09,yn.pipe));{let s=$(1296)+.12,r=.9,a=t(...Ci[0]),o=[[s,3,tt(ts[0][1])-2.3],[s,r+.3,tt(ts[0][1])-1.6],[s,r,tt(ts[0][1])],[s,r,tt(ts[1][1])],[s+.05,-.3,tt(ts[1][1])+.15],[$(Ci[0][0]),a,tt(Ci[0][1])]].map(l=>new C(...l)),c=new K(new Wn(new On(o,!1,"catmullrom",.08),90,.08,10),q.white);c.castShadow=!0,_e.add(c),es("Surface conduit<small>On the house wall, then underground at the back corner</small>",_e,s,r+.6,tt((ts[0][1]+ts[1][1])/2))}for(let s of Nx){let r=Ad(s.pts,s.from==="house"?(a,o)=>-1.8:(a,o)=>t(a,o)+.15,.06,yn.pipe);_e.add(r)}let e=Bx(8);for(let s=0;s<e.length-1;s++){let[r,a]=e[s],[o,c]=e[s+1],l=Math.hypot(o-r,c-a)/Pt;if(l<.2)continue;let h=new K(new nn(.25,l),yn.tape);h.rotation.x=-Math.PI/2,h.rotation.z=Math.atan2(-(o-r),c-a);let u=(r+o)/2,f=(a+c)/2;h.position.set($(u),Math.min(t(u,f)+1,Ne(u,f)-.15),tt(f)),_e.add(h)}for(let s of Ox){let[r,a]=s.p,o=Ne(r,a),c=$(r),l=tt(a),h=t(r,a),u,f,d,g=.32,_=c,m=l;if(s.kind==="panel")u=3,f=.32,d=2,g=1.2,_=$(1296)+.17;else if(s.kind==="jbox")u=.62,f=.28,d=.55,g=.55,_=$(1296)+.14;else if(s.kind==="sub"){u=o+3.6,f=.3,d=1.5,g=1.05,_=c+.32;let x=new K(new Pe(.29,6.6,.29),yn.post);x.position.set(c,o+6.6/2-1.4,l),x.castShadow=x.receiveShadow=!0,_e.add(x),ee(.55,.08,1.4,yn.post,c+.12,o+5.25,l,_e)}else if(s.kind==="rcpt"){u=o+1.2,f=.38,d=.6,g=.42,m=l+(nt.pumpAt==="planters"?-.33:.33);let x=new K(new ve(.045,.045,1.5,10),yn.box);x.position.set(c+.1,u+d+.7,l+.3),_e.add(x)}else if(s.kind==="patio"){u=1.4,f=.42,d=.6,g=.38,_=c+.3;let x=tt(951),M=tt(1098),b=L=>8.25-(L-x)*(.9/(M-x)),T=$(1296)+.12,w=[[T,1.15,tt(933)],[T,7,tt(933)],[T,7,x+.2],[$(1300.5),b(x+.6)-.25,x+.6],[$(1300.5),b(M-.3)-.25,M-.3],[$(1298)+.19,6.6,M],[$(1298)+.19,u+d+.05,M]].map(L=>new C(...L));_e.add(new K(new Wn(new On(w,!1,"catmullrom",.02),80,.04,8),q.white))}if(s.kind!=="rcpt"&&s.kind!=="patio"&&s.kind!=="panel"&&s.kind!=="jbox"){let x=new K(new ve(s.kind==="post"||s.kind==="patio"?.05:.07,s.kind==="post"||s.kind==="patio"?.05:.07,u-h,10),yn.pipe);x.position.set(c,(u+h)/2,l),_e.add(x)}let p=new K(new Pe(f,d,g),s.kind==="rcpt"||s.kind==="patio"?yn.rcpt:yn.box);p.position.set(_,u+d/2-.05,m),p.castShadow=!0,_e.add(p);let y=s.sub||"";if(s.kind==="sub"){let x=new K(new ve(.03,.03,8,8),yn.copper);x.position.set(c+.5,o-4+.1,l-.6),_e.add(x),es("Ground rod<small>8 ft, at the post</small>",_e,c+.5,o-6,l-.6);let M=new K(new Pe(3,6.5,2.5),Hx);M.position.set(c+.47+1.5,o+3.25,l),M.visible=nt.under,M.userData.xrayOnly=!0,_e.add(M),y=`On a post at the shed's corner, facing the fence \xB7 ${Br(Xr).toFixed(1)} ft from tank`}s.kind==="rcpt"&&(y=`Same post, toward the pump \xB7 GFCI, in-use cover \xB7 ${Br(Aa).toFixed(1)} ft from tank`),s.kind==="patio"&&(y=`Own 20 A circuit, surface conduit \xB7 GFCI \xB7 ${Br(Hd).toFixed(1)} ft from tank`),es(`${s.name}<small>${y}</small>`,_e,_,u+d+.25,m)}if(nt.sink>0){let s=72.5/Pt+1.75,r=qn()-.42,a=$(qt[0]),o=tt(qt[1]),c=new K(new ta(s,.035,8,120),yn.copper);c.rotation.x=Math.PI/2,c.position.set(a,r,o),_e.add(c);for(let f=0;f<4;f++){let d=f/4*Ge+.4,g=Math.cos(d),_=Math.sin(d),m=new K(new ve(.03,.03,1.75,6),yn.copper);m.rotation.z=Math.PI/2,m.rotation.y=-d,m.position.set(a+g*(s-.875),r,o+_*(s-.875)),_e.add(m)}let l=Math.atan2(tt(Ke[1])-o,$(Ke[0])-a),h=Ne(...Ke),u=[new C(a+Math.cos(Ra)*s,r,o+Math.sin(Ra)*s),new C($(Zs[0][0])+.3,Ne(...Zs[0])-.55,tt(Zs[0][1])),new C($(Zs[1][0])+.3,Ne(...Zs[1])-.55,tt(Zs[1][1])),new C($(Ke[0])+.5,h+.3,tt(Ke[1])+.5)];_e.add(new K(new Wn(new On(u),24,.03,6),yn.copper)),es("Bonding ring<small>#8 solid copper \xB7 18 to 24 in out \xB7 4 to 6 in down</small>",_e,a-Math.cos(l)*s,r,o-Math.sin(l)*s)}{let s=Ne(...Ke);es(nt.pumpAt==="planters"?`Pump + filter<small>Behind the planters \xB7 ${Br(Ke).toFixed(1)} ft from tank \xB7 cord runs to the post</small>`:`Pump + filter<small>Under the post's outlet \xB7 ${Br(Ke).toFixed(1)} ft from tank \xB7 hoses run in the gravel</small>`,_e,$(Ke[0]),s+2.6,tt(Ke[1]))}let n=[1337,1400];es(`Feeder, underground<small>${Vr(i)} below today's grade</small>`,_e,$(n[0]),t(...n),tt(n[1]));for(let s of Js)s.visible=nt.under&&_e.visible}var kx=new ft({color:14256458,transparent:!0,opacity:.32,depthWrite:!1,side:Se,roughness:1}),Vx=new Mr({color:11887914,transparent:!0,opacity:.45,depthWrite:!1}),Xn=null;function kd(){if(Xn&&(oe.remove(Xn),Xn.geometry.dispose(),Xn=null),!(nt.under&&nt.mode==="proposed"))return;let i=Nd(fn[1],1108,Ae,1681,2);Xn=new K(i,kx),kl(Xn,(t,e)=>$e(t,e)-.02);{let t=[],e=2*Pt;for(let s=fn[1];s<=Ae+.1;s+=e)for(let r=1108;r<1681;r+=e/4)t.push($(s),$e(s,r),tt(r),$(s),$e(s,Math.min(r+e/4,1681)),tt(Math.min(r+e/4,1681)));for(let s=1108;s<=1681;s+=e)for(let r=fn[1];r<Ae;r+=e/4){let a=Math.min(r+e/4,Ae);t.push($(r),$e(r,s),tt(s),$(a),$e(a,s),tt(s))}let n=new pe;n.setAttribute("position",new Nt(t,3)),Xn.add(new qo(n,Vx))}Xn.renderOrder=3,oe.add(Xn),es("Today's grade<small>fill sits above this sheet</small>",Xn,$(1180),$e(1180,1560),tt(1560))}var Gx=()=>[q.ground,q.dirt,q.outside,q.brush,q.concrete,Yn.sideNorth.material];function Gl(){let i=nt.under;Kt("xray").setAttribute("aria-pressed",String(i));for(let t of Gx())t.transparent=i,t.opacity=i?.22:1,t.depthWrite=!i,t.needsUpdate=!0;de.maxPolarAngle=i?Math.PI*.6:Math.PI*.495,Kt("labels").hidden=!i,kd();for(let t of Js)t.visible=i&&_e.visible;_e.traverse(t=>{t.userData.xrayOnly&&(t.visible=i)}),Na()}var Wx=os("shed");{let i=$(1287),t=$(1339),e=tt(1505.38),n=tt(1602.87),s=t-i,r=n-e,a=new ce;a.position.set((i+t)/2,0,(e+n)/2),Wx.add(a),Hn(a,1313,1554,0);let o=6.2,c=6.9,l=ee(s,c,r,q.shed,0,c/2,0,a),h=ee(s+.6,.15,r+.6,q.shedRoof,0,(o+c)/2+.1,0,a);h.rotation.z=Math.atan((c-o)/s),ee(.06,5.6,2.6,q.trim,-s/2-.02,2.9,0,a),ee(.07,5.2,2.2,q.shed,-s/2-.04,2.75,0,a)}var Da=os("context");function Vd(i,t,e,n,s,r,a=8.6,o=4/12){let c=new ce;Da.add(c);let l=(e-i)/Pt,h=(n-t)/Pt,u=$((i+e)/2),f=tt((t+n)/2),d=new K(new Pe(l,a+.3,h),new ft({color:s,roughness:.85}));d.position.set(u,(a+.3)/2-.3,f),d.castShadow=d.receiveShadow=!0,c.add(d);let g=1.2,_=u-l/2-g,m=u+l/2+g,p=f-h/2-g,y=f+h/2+g,x=m-_>=y-p,M=(x?y-p:m-_)/2,b=a+M*o,T=[];if(x){let v=(p+y)/2,E=_+M,D=m-M;T.push(_,a,y,m,a,y,D,b,v,_,a,y,D,b,v,E,b,v,m,a,p,_,a,p,E,b,v,m,a,p,E,b,v,D,b,v,_,a,p,_,a,y,E,b,v,m,a,y,m,a,p,D,b,v)}else{let v=(_+m)/2,E=p+M,D=y-M;T.push(m,a,y,m,a,p,v,b,E,m,a,y,v,b,E,v,b,D,_,a,p,_,a,y,v,b,D,_,a,p,v,b,D,v,b,E,m,a,p,_,a,p,v,b,E,_,a,y,m,a,y,v,b,D)}let w=new pe;w.setAttribute("position",new Nt(T,3)),w.computeVertexNormals();let L=new K(w,new ft({color:r,roughness:.95,side:Se}));return L.castShadow=!0,c.add(L),c}Vd(1460,300,1800,1077,10135206,7172212);Vd(95,390,402,1095,15328990,6974576);{let i=$(1446),t=$(1682),e=tt(1586),n=tt(1738),s=t-i,r=n-e,a=-.4,o=new ce;o.position.set((i+t)/2,a,(e+n)/2),Da.add(o),ee(s,7,r,new ft({color:10264476,roughness:.85}),0,3.5,0,o);let c=[[-s/2-.4,7],[-s/2+1.3,10.2],[0,11.6],[s/2-1.3,10.2],[s/2+.4,7]],l=[];for(let f=0;f<c.length-1;f++){let[d,g]=c[f],[_,m]=c[f+1];l.push(d,g,-r/2-.4,_,m,-r/2-.4,_,m,r/2+.4,d,g,-r/2-.4,_,m,r/2+.4,d,g,r/2+.4)}let h=new pe;h.setAttribute("position",new Nt(l,3)),h.computeVertexNormals();let u=new K(h,new ft({color:12240588,roughness:.4,metalness:.6,side:Se}));u.castShadow=!0,o.add(u);for(let f of[-1,1]){let d=new zs([new et(-s/2,7),...c.slice(1,4).map(([_,m])=>new et(_,m)),new et(s/2,7)]),g=new K(new Ar(d),new ft({color:10264476,roughness:.85,side:Se}));g.position.z=f*r/2,o.add(g)}}{let i=new pe;i.setAttribute("position",new Nt([$(300),9.5,tt(1020),$(470),8.2,tt(1010),$(420),9.8,tt(1150),$(300),9.5,tt(1020),$(420),9.8,tt(1150),$(310),8,tt(1160)],3)),i.computeVertexNormals();let t=new K(i,q.sail);t.castShadow=!0,Da.add(t)}function xa(i,t,e,n,s,r,a){let o=le(a),c=new ce;c.position.set(i,e,t);let l=r==="juniper"?n*.25:n*.42,h=q.trunk.clone(),u=new K(new ve(s*.05,s*.08,l,8),h);u.position.y=l/2,u.castShadow=!0,c.add(u);let f=[],d=r==="juniper"?9:18,g=r==="juniper"?new Ut(4021303):r==="fall"?new Ut(10852949):new Ut(5797949);for(let y=0;y<d;y++){let x=y/d,M,b,T,w;if(r==="juniper")b=l+x*(n-l)*.95,w=s*(1-x*.75)*(.7+o()*.3),M=(o()-.5)*s*.4,T=(o()-.5)*s*.4;else{let V=o()*Ge,P=o()*s*.75;M=Math.cos(V)*P,T=Math.sin(V)*P,b=l+s*.35+o()*(n-l-s*.7),w=s*(.32+o()*.26)}let L=new Ei(w,2);L.deleteAttribute("uv"),L.deleteAttribute("normal");let v=Ca(El(L),.55,1.2/w,o()*90,.82),E=v.attributes.position;v.translate(M,b,T);let D=new Float32Array(E.count*3),O=g.clone().offsetHSL((o()-.5)*.03,(o()-.5)*.1,(o()-.5)*.08);for(let V=0;V<E.count;V++){let P=.95+.35*(E.getY(V)-b+w)/(2*w);D[V*3]=O.r*P,D[V*3+1]=O.g*P,D[V*3+2]=O.b*P}v.setAttribute("color",new me(D,3)),v.setAttribute("uv",new me(new Float32Array(E.count*2).map((V,P)=>P%2?E.getY(P>>1)/3:(E.getX(P>>1)+E.getZ(P>>1))/3),2)),f.push(v)}let _=q.canopyTree.clone(),m=new K(pa(f),_);m.castShadow=!0,m.receiveShadow=!0,c.add(m),Da.add(c),m.geometry.computeBoundingSphere();let p=m.geometry.boundingSphere;return Gd.push({mesh:m,mat:_,tmat:h,c:p.center.clone().add(c.position),r:p.radius*.85,x:c.position.x,z:c.position.z,top:c.position.y+n,rh:s*.95}),c}var Gd=[];{let i=le(2024);for(let t=0;t<54;t++){let e=380+i()*1450,n=1800+Math.pow(i(),.8)*700,s=i()<.22?"juniper":i()<.15?"fall":"oak",r=La(un(e,486,1394))-.3-Math.pow(Math.max(0,(n-1690)/Pt),1.15)*.16;xa($(e),tt(n),e>1394||e<486?-.4:r,26+i()*22,7+i()*6,s,t+1)}xa($(1560),tt(1520),-.4,30,9,"fall",901);for(let[t,e,n,s]of[[300,1250,34,15],[260,700,30,13],[1560,640,32,13],[1620,980,28,12],[900,230,30,14],[700,260,26,11]])xa($(t),tt(e),-.3,n,s,"oak",t+e);Ve.trees.forEach(([t,e,n],s)=>xa($(t),tt(e),-.3,18+n/4,n/Pt*2.2,"oak",300+s))}var $s={top:{value:new Ut},hor:{value:new Ut},sunDir:{value:new C},glow:{value:new Ut}},Ua=new K(new Si(3e3,32,16),new Nn({side:He,depthWrite:!1,uniforms:$s,vertexShader:"varying vec3 vD;void main(){vD=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform vec3 top,hor,glow,sunDir;varying vec3 vD;void main(){float h=clamp(vD.y,0.,1.);vec3 c=mix(hor,top,pow(h,0.55));float s=max(dot(normalize(vD),normalize(sunDir)),0.);c+=glow*(pow(s,8.)*0.35+pow(s,600.)*2.);if(vD.y<0.)c=mix(hor,hor*0.8,clamp(-vD.y*4.,0.,1.));gl_FragColor=vec4(c,1.);}"}));Ua.renderOrder=-1;oe.add(Ua);var Wd=new na(14674418,7167047,.7);oe.add(Wd);var zn=new ra(16777215,2.6);zn.castShadow=!0;zn.shadow.mapSize.set(Ll?2048:4096,Ll?2048:4096);var Ks=zn.shadow.camera;Ks.left=-58;Ks.right=58;Ks.top=58;Ks.bottom=-58;Ks.near=1;Ks.far=400;zn.shadow.bias=-4e-4;zn.shadow.normalBias=.03;var Xd=new C($(1e3),0,tt(1150));zn.target.position.copy(Xd);oe.add(zn,zn.target);oe.fog=new Yo(14542054,220,1400);function Yd(i,t){let e=30.27*Math.PI/180,n=-97.74,s=[21,52,80,111,141,172,202,233,264,294,325,355][i-1],r=i>=3&&i<=10?1:0,a=23.44*Math.sin(Ge/365*(s-81))*Math.PI/180,o=Ge/365*(s-81),c=9.87*Math.sin(2*o)-7.53*Math.cos(o)-1.5*Math.sin(o),h=(t-r+(4*(n+90)+c)/60-12)*15*Math.PI/180,u=Math.asin(Math.sin(e)*Math.sin(a)+Math.cos(e)*Math.cos(a)*Math.cos(h)),f=(Math.atan2(Math.sin(h),Math.cos(h)*Math.sin(e)-Math.tan(a)*Math.cos(e))+Math.PI)%Ge;return{el:u,az:f}}function qd(){let{el:i,az:t}=Yd(nt.month,nt.time),e=t-nt.north*Math.PI/180,n=new C(Math.cos(i)*Math.sin(e),Math.sin(i),-Math.cos(i)*Math.cos(e));zn.position.copy(Xd).addScaledVector(n,220);let s=Math.max(i,0),r=un(Math.sin(s)*3,0,1),a=new Ut().setHSL(.08,.85,.6).lerp(new Ut(16774890),un(Math.sin(s)*2.2,0,1));zn.color.copy(a),zn.intensity=i>0?.4+2.4*r:0,Wd.intensity=.35+.45*un(Math.sin(i+.1)*2,0,1),$s.top.value.setHSL(.58,.45,.25+.4*un(Math.sin(i+.12)*2,0,1)),$s.hor.value.setHSL(i<.15?.07:.57,i<.15?.4:.25,.55+.3*un(Math.sin(i+.1)*3,0,1)),$s.glow.value.copy(a),$s.sunDir.value.copy(n),oe.fog.color.copy($s.hor.value),Fe.toneMappingExposure=i>0?1:.9,document.getElementById("needle").setAttribute("transform",`rotate(${-nt.north})`),Zd(),Qd(),Na()}function Zd(){let i=Math.atan2(Ol.x,-Ol.z)*180/Math.PI;document.getElementById("needle").setAttribute("transform",`rotate(${-(nt.north+i)})`)}var Vr=i=>`${Math.round(i*12)} in`,Kt=i=>document.getElementById(i);function ci(){window.__placePump(),dx();for(let r of["lawn","walk"])kl(Yn[r],Yn[r].userData.h);for(let[r,a,o,c]of Ma)r.position.y=Ne(a,o)+Od(c);fx(),Px();let i=xx(),t=bx();window.__buildHoses(),Ex();let e=document.getElementById("stats");e.innerHTML="";let n=(r,a,o)=>{let c=document.createElement("div");c.className="stat"+(o?" warn":""),c.innerHTML=`<b>${r}</b>`+a.map(l=>`<span>${l}</span>`).join(""),e.appendChild(c)};{let r=qn()-nt.sink+2-vn();n("Pool",[`Rim ${Vr(Math.abs(r))} ${r>=0?"above":"below"} the pad`,"Tank sits on grade on the pool level"].concat(nt.sink>0?["Backfill with gravel and wrap the buried steel."]:[]))}let s=r=>r===0?"flush with patio":`${Vr(-r)} below patio`;Kt("o-pad").textContent=s(nt.pad),Kt("o-step1").textContent=nt.step1<se?"none":Vr(nt.step1),Kt("o-step2").textContent=nt.step2<se?"none":Vr(nt.step2);for(let r of["pool","furniture","umbrella","planters","shed"])oi[r].visible=nt.mode==="proposed"&&nt.layers[r];Vl.visible=nt.mode==="proposed",Rx(),oi.context.visible=nt.layers.context,ya=!0,_e.visible=nt.layers.electrical,zx(),kd(),Qd(),Na()}var Xx=4.7,$d=[{key:"overview",name:"Overview",sub:"Whole yard",pos:[700,1700,46],tgt:[1130,1270,-2]},{key:"hero",name:"Patio, west post",sub:"Photo 5",pos:[1046,1098,"eye"],tgt:[1320,1590,"tgt"]},{key:"chimney",name:"From the chimney",sub:"Photo 1",pos:[1042,1e3,"eye"],tgt:[1080,1600,"tgt"]},{key:"patioE",name:"Patio, east end",sub:"Photo 2",pos:[1292,1030,"eye"],tgt:[1170,1600,"tgt"]},{key:"back",name:"Back fence, walkway",sub:"Photo 3",pos:[994,1668,"eye"],tgt:[994,950,6]},{key:"corner",name:"Back-right, by the shed",sub:"Near photo 4",pos:[1262,1668,"eye"],tgt:[1010,980,5]},{key:"pool",name:"Lounger on the pad",sub:"Eye level, seated",pos:[1250,1186,3.3],tgt:[1185,1560,.8]},{key:"equip",name:"Pool equipment",sub:"Shed corner",pos:[1386,1610,6.5],tgt:[1345,1525,1.4]},{key:"plumb",name:"Pool hoses",sub:"Tank to pump",pos:[1262,1452,7.5],tgt:[1350,1450,-.6]},{key:"patioOut",name:"Patio outlet",sub:"By the deck",pos:[1352,1150,5],tgt:[1300,1092,1.6],under:!0},{key:"conduit",name:"Conduit route",sub:"Underground",pos:[1381,1585,6],tgt:[1334,1230,-2.4],under:!0},{key:"top",name:"Plan view",sub:"Straight down",pos:[1130,1395,150],tgt:[1130,1394,0]}];function Yx(i){let t=i.pos[2]==="eye"?Ne(i.pos[0],i.pos[1])+Xx:i.pos[2],e=i.tgt[2]==="tgt"?t-1.2:i.tgt[2];return{pos:new C($(i.pos[0]),t,tt(i.pos[1])),tgt:new C($(i.tgt[0]),e,tt(i.tgt[1]))}}var An=null,Jd=matchMedia("(prefers-reduced-motion: reduce)").matches;function Wl(i,t){let e=$d.find(r=>r.key===i);if(!e)return;nt.view=i,e.under&&!nt.under&&(nt.under=!0,Gl());let{pos:n,tgt:s}=Yx(e);Re.fov=i==="top"?40:e.pos[2]==="eye"||i==="pool"?68:50,Re.updateProjectionMatrix(),t||Jd?(Re.position.copy(n),de.target.copy(s),de.update(),Li()):An={t0:performance.now(),p0:Re.position.clone(),t0v:de.target.clone(),p1:n,t1:s},document.querySelectorAll("#views button").forEach(r=>r.setAttribute("aria-pressed",String(r.dataset.key===i))),Li()}{let i=document.getElementById("views");for(let t of $d){let e=document.createElement("button");e.type="button",e.dataset.key=t.key,e.id="v-"+t.key,e.innerHTML=`${t.name}<small>${t.sub}</small>`,e.onclick=()=>Wl(t.key),i.appendChild(e)}}de.addEventListener("start",()=>{An=null,document.querySelectorAll("#views button").forEach(i=>i.setAttribute("aria-pressed","false"))});function Xl(i,t,e,n,s){let r=Kt(i);r.value=n(nt[t]),typeof Nl<"u"&&Nl.push([r,t,n]),r.addEventListener("input",()=>{nt[t]=e(+r.value),s(),Ii()})}var Nl=[];Xl("g-pad","pad",i=>i*se,i=>Math.round(i*12),ci);Xl("g-step1","step1",i=>i*se,i=>Math.round(i*12),ci);Xl("g-step2","step2",i=>i*se,i=>Math.round(i*12),ci);nt.padSurf!=="cbrick"&&(nt.padSurf="brick");nt.ver!=="quote"&&(nt.ver="plan");function Yl(i){nt.ver=i,Kt("v-plan").setAttribute("aria-pressed",String(i==="plan")),Kt("v-quote").setAttribute("aria-pressed",String(i==="quote")),Kt("sec-pad").hidden=i==="quote",Kt("v-hint").textContent=i==="quote"?"Austin Creative Landscaping, Oct 20 quote: steel-edged Amaretto herringbone pad with an Anthracite border, tank area one step down, 12 in stepped steel wall 16 in off the fence, steel-edged turf.":"Block step walls around the pool level, corten edge along the fence, your choice of pad brick.",ci(),Ii()}nt.pumpAt!=="planters"&&(nt.pumpAt="post");function Kd(i){nt.pumpAt=i,Kt("pp-post").setAttribute("aria-pressed",String(i==="post")),Kt("pp-plant").setAttribute("aria-pressed",String(i==="planters")),ci(),Ii()}Kt("pp-post").onclick=()=>Kd("post");Kt("pp-plant").onclick=()=>Kd("planters");Kt("pp-post").setAttribute("aria-pressed",String(nt.pumpAt==="post"));Kt("pp-plant").setAttribute("aria-pressed",String(nt.pumpAt==="planters"));Kt("v-plan").onclick=()=>Yl("plan");Kt("v-quote").onclick=()=>Yl("quote");function jd(i){nt.padSurf=i,Kt("ps-brick").setAttribute("aria-pressed",String(i==="brick")),Kt("ps-cbrick").setAttribute("aria-pressed",String(i==="cbrick")),ci(),Ii()}Kt("ps-brick").onclick=()=>jd("brick");Kt("ps-cbrick").onclick=()=>jd("cbrick");Kt("ps-cbrick").setAttribute("aria-pressed",String(nt.padSurf==="cbrick"));Kt("ps-brick").setAttribute("aria-pressed",String(nt.padSurf==="brick"));Kt("g-reset").addEventListener("click",()=>{Object.assign(nt,yd);for(let[i,t,e]of Nl)t in yd&&(i.value=e(nt[t]));ci(),Ii()});nt.mode="proposed";{let i=[["pool","Pool + pump"],["furniture","Loungers"],["umbrella","Umbrella"],["planters","Pots + boulders"],["shed","Shed"],["electrical","Buried conduit"],["context","Neighbors + trees"]],t=Kt("layers");for(let[e,n]of i){let s=document.createElement("label");s.innerHTML=`<input type="checkbox" id="l-${e}"${nt.layers[e]?" checked":""}> ${n}`,s.querySelector("input").addEventListener("change",r=>{nt.layers[e]=r.target.checked,ci(),Ii()}),t.appendChild(s)}}function Qd(){let{el:i}=Yd(nt.month,nt.time);Kt("badge").innerHTML=`<b>Late October afternoon</b>${i<=0?" \xB7 sun is down":` \xB7 sun ${Math.round(i*180/Math.PI)}\xB0 up`}`}var wi=!0,ya=!0;function Li(){wi=!0}function Na(){Fe.shadowMap.needsUpdate=!0,wi=!0}var My=new C,Ey=new C;function qx(){if(!oi.context.visible)return!1;let i=Re.position,t=de.target,e=t.x-i.x,n=t.z-i.z,s=e*e+n*n||1e-6,r=Math.sqrt(s),a=!1;for(let o of Gd){let c=un(((o.x-i.x)*e+(o.z-i.z)*n)/s,0,1),l=i.x+e*c,h=i.z+n*c,u=Math.hypot(o.x-l,o.z-h),f=i.y+(t.y-i.y)*c,g=c>0&&c<1&&u<o.rh+r*c*.12&&f<o.top||o.c.distanceTo(i)<o.r*1.05?0:1,_=o.mat.opacity;if(_=Jd?g:_+(g-_)*.3,Math.abs(_-g)<.05?_=g:a=!0,_!==o.mat.opacity){let m=_<.999;for(let p of[o.mat,o.tmat])p.opacity=_,p.colorWrite=_>.02,p.transparent!==m&&(p.transparent=m,p.depthWrite=!m,p.needsUpdate=!0)}}return a}de.addEventListener("change",Li);var Ol=new C,tf=new _a({element:Kt("labels")});function ef(){let i=Zr.clientWidth,t=Zr.clientHeight;!i||!t||(Fe.setSize(i,t,!1),tf.setSize(i,t),Re.aspect=i/t,Re.updateProjectionMatrix(),Li())}new ResizeObserver(ef).observe(Zr);function nf(i){if(requestAnimationFrame(nf),An){let t=un((i-An.t0)/900,0,1),e=t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;Re.position.lerpVectors(An.p0,An.p1,e),de.target.lerpVectors(An.t0v,An.t1,e),t>=1&&(An=null),wi=!0}de.update()&&(wi=!0),(wi||ya)&&(ya=qx(),ya&&(wi=!0)),wi&&(wi=!1,Re.getWorldDirection(Ol),Zd(),Ua.position.copy(Re.position),Fe.render(oe,Re),nt.under&&(tf.render(oe,Re),Zx()))}function Zx(){let i=[];for(let t of Js){let e=t.element;if(!t.visible||e.style.display==="none")continue;e.style.opacity="1";let n=e.getBoundingClientRect();if(i.some(s=>n.left<s.right+4&&n.right>s.left-4&&n.top<s.bottom+2&&n.bottom>s.top-2)){e.style.opacity="0";continue}i.push(n)}}var Al=new oa,Rd=new et,$x=new C;function Jx(){let i=[];return oe.traverse(t=>{if(!(t.isMesh||t.isInstancedMesh)||t===Ua||!t.visible||Dl.includes(t))return;let e=t,n=!1;for(;e;){if(e.visible===!1){n=!0;break}if(e===oi.context){n=!0;break}e=e.parent}n||i.push(t)}),i}var Rl=null,Cd=0;function ql(i,t){let e=Fe.domElement.getBoundingClientRect();Rd.set((i-e.left)/e.width*2-1,-(t-e.top)/e.height*2+1),Al.setFromCamera(Rd,Re);let n=performance.now();(!Rl||n-Cd>800)&&(Rl=Jx()),Cd=n;let s=Al.intersectObjects(Rl,!1);for(let r of s){let a=[].concat(r.object.material)[0];if(!(a&&a.opacity<.5&&!nt.under)&&!(a&&a.wireframe))return r.point}return Al.ray.at(Math.max(Re.position.distanceTo(de.target),5),$x).clone()}var Cl=null,Pl=[0,0],Pd=0;function sf(i,t){let e=Re.position.distanceTo(i);t<1&&e*t<.35&&(t=.35/e),!(t>1&&Re.position.distanceTo(de.target)*t>de.maxDistance)&&(Re.position.sub(i).multiplyScalar(t).add(i),de.target.sub(i).multiplyScalar(t).add(i),An=null,de.update(),Li())}Zr.addEventListener("wheel",i=>{i.preventDefault(),i.stopPropagation();let t=performance.now();(!Cl||t-Pd>220||Math.hypot(i.clientX-Pl[0],i.clientY-Pl[1])>6)&&(Cl=ql(i.clientX,i.clientY),Pl=[i.clientX,i.clientY]),Pd=t;let e=i.deltaY*(i.deltaMode===1?33:i.deltaMode===2?400:1),n=i.ctrlKey?.022:.0042;sf(Cl,un(Math.exp(e*n),.45,2.2))},{capture:!0,passive:!1});function rf(i,t){let e=ql(i,t),n=Re.position.clone().sub(e),s=n.length(),r=un(s*.3,1.2,30);An={t0:performance.now(),p0:Re.position.clone(),t0v:de.target.clone(),p1:e.clone().add(n.multiplyScalar(r/s)),t1:e.clone()},Li()}Fe.domElement.addEventListener("dblclick",i=>{i.preventDefault(),rf(i.clientX,i.clientY)});{let i=0,t=0,e=0;Fe.domElement.addEventListener("pointerup",n=>{if(n.pointerType!=="touch")return;let s=performance.now();s-i<320&&Math.hypot(n.clientX-t,n.clientY-e)<24?(rf(n.clientX,n.clientY),i=0):(i=s,t=n.clientX,e=n.clientY)})}function of(i){let t=Fe.domElement.getBoundingClientRect();sf(ql(t.left+t.width/2,t.top+t.height/2),i)}Kt("z-in").onclick=()=>of(.55);Kt("z-out").onclick=()=>of(1.8);Kt("xray").onclick=()=>{nt.under=!nt.under,Gl(),Ii()};function Jr(i){nt.drag=i;let t=i==="rotate";de.mouseButtons={LEFT:t?Je.ROTATE:Je.PAN,MIDDLE:Je.DOLLY,RIGHT:t?Je.PAN:Je.ROTATE},de.touches={ONE:t?hn.ROTATE:hn.PAN,TWO:t?hn.DOLLY_PAN:hn.DOLLY_ROTATE},Kt("d-move").setAttribute("aria-pressed",String(!t)),Kt("d-rot").setAttribute("aria-pressed",String(t)),Ii()}Kt("d-move").onclick=()=>Jr("move");Kt("d-rot").onclick=()=>Jr("rotate");addEventListener("keydown",i=>{(i.key==="r"||i.key==="R")&&!i.repeat&&!/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)&&nt.drag!=="rotate"&&(nt._held=!0,Jr("rotate"))});addEventListener("keyup",i=>{(i.key==="r"||i.key==="R")&&nt._held&&(nt._held=!1,Jr("move"))});Jr(nt.drag==="rotate"?"rotate":"move");var af=Kt("prog").firstElementChild,Fl=Kt("pn-sub");af.style.width="45%";Yl(nt.ver);qd();ef();Wl("overview",!0);hx();Gl();requestAnimationFrame(nf);Fl.textContent="Loading ground textures\u2026";af.style.width="70%";new ea().load("ground.webp",i=>{i.colorSpace=Ie,i.anisotropy=Dd;let t=Fe.capabilities.maxTextureSize;i.minFilter=Xi,q.ground.map=i,q.ground.color.set(16777215),q.ground.needsUpdate=!0,Na(),Fl.textContent="To scale from the plan \xB7 feet",Kt("prog").hidden=!0,window.__ready=!0,Li()},void 0,()=>{Fl.textContent="Ground textures did not load; showing flat colours.",Kt("prog").hidden=!0,window.__ready=!0});window.__cam=(i,t)=>{An=null,Re.position.set($(i[0]),i[2],tt(i[1])),de.target.set($(t[0]),t[2],tt(t[1])),Re.fov=55,Re.updateProjectionMatrix(),de.update(),Li()};window.__goView=Wl;window.__P=nt;window.__update=()=>{ci(),qd()};
