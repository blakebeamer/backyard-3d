var pl="160",Je={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ln={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bf=0,ih=1,Sf=2;var ku=1,ml=2,ii=3,Ei=0,He=1,Te=2;var yi=0,Us=1,sh=2,rh=3,oh=4,wf=5,Wi=100,Tf=101,Af=102,ah=103,ch=104,Rf=200,Cf=201,Pf=202,Lf=203,Sc=204,wc=205,If=206,Df=207,Uf=208,Nf=209,Of=210,Ff=211,Bf=212,Hf=213,zf=214,kf=0,Gf=1,Vf=2,Io=3,Wf=4,Xf=5,qf=6,Yf=7,Gu=0,Zf=1,$f=2,vi=0,Jf=1,Kf=2,jf=3,gl=4,Qf=5,tp=6;var Vu=300,Fs=301,Bs=302,Tc=303,Ac=304,ua=306,vr=1e3,In=1001,Rc=1002,cn=1003,lh=1004;var Va=1005;var En=1006,ep=1007;var $i=1008;var Mi=1009,np=1010,ip=1011,_l=1012,Wu=1013,_i=1014,xi=1015,Mr=1016,Xu=1017,qu=1018,qi=1020,sp=1021,Dn=1023,rp=1024,op=1025,Yi=1026,Hs=1027,ap=1028,Yu=1029,cp=1030,Zu=1031,$u=1033,Wa=33776,Xa=33777,qa=33778,Ya=33779,hh=35840,uh=35841,dh=35842,fh=35843,Ju=36196,ph=37492,mh=37496,gh=37808,_h=37809,xh=37810,yh=37811,vh=37812,Mh=37813,Eh=37814,bh=37815,Sh=37816,wh=37817,Th=37818,Ah=37819,Rh=37820,Ch=37821,Za=36492,Ph=36494,Lh=36495,lp=36283,Ih=36284,Dh=36285,Uh=36286;var Do=2300,Uo=2301,$a=2302,Nh=2400,Oh=2401,Fh=2402;var Ku=3e3,Zi=3001,hp=3200,up=3201,ju=0,dp=1,bn="",Ue="srgb",ri="srgb-linear",xl="display-p3",da="display-p3-linear",No="linear",be="srgb",Oo="rec709",Fo="p3";var ds=7680;var Bh=519,fp=512,pp=513,mp=514,Qu=515,gp=516,_p=517,xp=518,yp=519,Hh=35044,td=35048;var zh="300 es",Cc=1035,si=2e3,Bo=2001,qn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kh=1234567,pr=Math.PI/180,Er=180/Math.PI;function es(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function Be(i,t,e){return Math.max(t,Math.min(e,i))}function yl(i,t){return(i%t+t)%t}function vp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Mp(i,t,e){return i!==t?(e-i)/(t-i):0}function mr(i,t,e){return(1-e)*i+e*t}function Ep(i,t,e,n){return mr(i,t,1-Math.exp(-e*n))}function bp(i,t=1){return t-Math.abs(yl(i,t*2)-t)}function Sp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function wp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Tp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ap(i,t){return i+Math.random()*(t-i)}function Rp(i){return i*(.5-Math.random())}function Cp(i){i!==void 0&&(kh=i);let t=kh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Pp(i){return i*pr}function Lp(i){return i*Er}function Pc(i){return(i&i-1)===0&&i!==0}function Ip(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ho(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Dp(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Cs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function on(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ed={DEG2RAD:pr,RAD2DEG:Er,generateUUID:es,clamp:Be,euclideanModulo:yl,mapLinear:vp,inverseLerp:Mp,lerp:mr,damp:Ep,pingpong:bp,smoothstep:Sp,smootherstep:wp,randInt:Tp,randFloat:Ap,randFloatSpread:Rp,seededRandom:Cp,degToRad:Pp,radToDeg:Lp,isPowerOfTwo:Pc,ceilPowerOfTwo:Ip,floorPowerOfTwo:Ho,setQuaternionFromProperEuler:Dp,normalize:on,denormalize:Cs},nt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ee=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],y=s[1],x=s[4],M=s[7],b=s[2],T=s[5],S=s[8];return r[0]=a*_+o*y+c*b,r[3]=a*m+o*x+c*T,r[6]=a*p+o*M+c*S,r[1]=l*_+h*y+u*b,r[4]=l*m+h*x+u*T,r[7]=l*p+h*M+u*S,r[2]=d*_+f*y+g*b,r[5]=d*m+f*x+g*T,r[8]=d*p+f*M+g*S,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ja.makeScale(t,e)),this}rotate(t){return this.premultiply(Ja.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ja.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ja=new ee;function nd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Up(){let i=br("canvas");return i.style.display="block",i}var Gh={};function gr(i){i in Gh||(Gh[i]=!0,console.warn(i))}var Vh=new ee().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wh=new ee().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),io={[ri]:{transfer:No,primaries:Oo,toReference:i=>i,fromReference:i=>i},[Ue]:{transfer:be,primaries:Oo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[da]:{transfer:No,primaries:Fo,toReference:i=>i.applyMatrix3(Wh),fromReference:i=>i.applyMatrix3(Vh)},[xl]:{transfer:be,primaries:Fo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Wh),fromReference:i=>i.applyMatrix3(Vh).convertLinearToSRGB()}},Np=new Set([ri,da]),me={enabled:!0,_workingColorSpace:ri,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Np.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=io[t].toReference,s=io[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return io[i].primaries},getTransfer:function(i){return i===bn?No:io[i].transfer}};function Ns(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ka(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var fs,zo=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{fs===void 0&&(fs=br("canvas")),fs.width=t.width,fs.height=t.height;let n=fs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=fs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=br("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ns(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ns(e[n]/255)*255):e[n]=Ns(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Op=0,ko=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=es(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ja(s[a].image)):r.push(ja(s[a]))}else r=ja(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ja(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?zo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Fp=0,yn=class i extends qn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=In,s=In,r=En,a=$i,o=Dn,c=Mi,l=i.DEFAULT_ANISOTROPY,h=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=es(),this.name="",this.source=new ko(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Zi?Ue:bn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vr:t.x=t.x-Math.floor(t.x);break;case In:t.x=t.x<0?0:1;break;case Rc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vr:t.y=t.y-Math.floor(t.y);break;case In:t.y=t.y<0?0:1;break;case Rc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ue?Zi:Ku}set encoding(t){gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Zi?Ue:bn}};yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Vu;yn.DEFAULT_ANISOTROPY=1;var we=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(l+1)/2,M=(f+1)/2,b=(p+1)/2,T=(h+d)/4,S=(u+_)/4,P=(g+m)/4;return x>M&&x>b?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=S/n):M>b?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=P/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=S/r,s=P/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Lc=class extends qn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(gr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Zi?Ue:bn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new yn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ko(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},oi=class extends Lc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Go=class extends yn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ic=class extends yn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-o,p=c*d+l*f+h*g+u*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let b=Math.sqrt(x),T=Math.atan2(b,p*y);m=Math.sin(m*T)/b,o=Math.sin(o*T)/b}let M=o*y;if(c=c*m+d*M,l=l*m+f*M,h=h*m+g*M,u=u*m+_*M,m===1-o){let b=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=b,l*=b,h*=b,u*=b}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-o*f,t[e+2]=l*g+h*f+o*d-c*u,t[e+3]=h*g-o*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qa.copy(this).projectOnVector(t),this.sub(Qa)}reflect(t){return this.sub(Qa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Qa=new C,Xh=new fn,ai=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Rn):Rn.fromBufferAttribute(r,a),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),so.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),so.copy(n.boundingBox)),so.applyMatrix4(t.matrixWorld),this.union(so)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ar),ro.subVectors(this.max,ar),ps.subVectors(t.a,ar),ms.subVectors(t.b,ar),gs.subVectors(t.c,ar),di.subVectors(ms,ps),fi.subVectors(gs,ms),Hi.subVectors(ps,gs);let e=[0,-di.z,di.y,0,-fi.z,fi.y,0,-Hi.z,Hi.y,di.z,0,-di.x,fi.z,0,-fi.x,Hi.z,0,-Hi.x,-di.y,di.x,0,-fi.y,fi.x,0,-Hi.y,Hi.x,0];return!tc(e,ps,ms,gs,ro)||(e=[1,0,0,0,1,0,0,0,1],!tc(e,ps,ms,gs,ro))?!1:(oo.crossVectors(di,fi),e=[oo.x,oo.y,oo.z],tc(e,ps,ms,gs,ro))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},jn=[new C,new C,new C,new C,new C,new C,new C,new C],Rn=new C,so=new ai,ps=new C,ms=new C,gs=new C,di=new C,fi=new C,Hi=new C,ar=new C,ro=new C,oo=new C,zi=new C;function tc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){zi.fromArray(i,r);let o=s.x*Math.abs(zi.x)+s.y*Math.abs(zi.y)+s.z*Math.abs(zi.z),c=t.dot(zi),l=e.dot(zi),h=n.dot(zi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Bp=new ai,cr=new C,ec=new C,bi=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Bp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cr.subVectors(t,this.center);let e=cr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(cr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ec.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cr.copy(t.center).add(ec)),this.expandByPoint(cr.copy(t.center).sub(ec))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Qn=new C,nc=new C,ao=new C,pi=new C,ic=new C,co=new C,sc=new C,Ji=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qn.copy(this.origin).addScaledVector(this.direction,e),Qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){nc.copy(t).add(e).multiplyScalar(.5),ao.copy(e).sub(t).normalize(),pi.copy(this.origin).sub(nc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ao),o=pi.dot(this.direction),c=-pi.dot(ao),l=pi.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(nc).addScaledVector(ao,d),f}intersectSphere(t,e){Qn.subVectors(t.center,this.origin);let n=Qn.dot(this.direction),s=Qn.dot(Qn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Qn)!==null}intersectTriangle(t,e,n,s,r){ic.subVectors(e,t),co.subVectors(n,t),sc.crossVectors(ic,co);let a=this.direction.dot(sc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;pi.subVectors(this.origin,t);let c=o*this.direction.dot(co.crossVectors(pi,co));if(c<0)return null;let l=o*this.direction.dot(ic.cross(pi));if(l<0||c+l>a)return null;let h=-o*pi.dot(sc);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ue=class i{constructor(t,e,n,s,r,a,o,c,l,h,u,d,f,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,d,f,g,_,m)}set(t,e,n,s,r,a,o,c,l,h,u,d,f,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/_s.setFromMatrixColumn(t,0).length(),r=1/_s.setFromMatrixColumn(t,1).length(),a=1/_s.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-o*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d+_*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=_+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*h,f=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){let d=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hp,t,zp)}lookAt(t,e,n){let s=this.elements;return _n.subVectors(t,e),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),mi.crossVectors(n,_n),mi.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),mi.crossVectors(n,_n)),mi.normalize(),lo.crossVectors(_n,mi),s[0]=mi.x,s[4]=lo.x,s[8]=_n.x,s[1]=mi.y,s[5]=lo.y,s[9]=_n.y,s[2]=mi.z,s[6]=lo.z,s[10]=_n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],x=n[7],M=n[11],b=n[15],T=s[0],S=s[4],P=s[8],v=s[12],E=s[1],D=s[5],O=s[9],H=s[13],L=s[2],N=s[6],k=s[10],q=s[14],K=s[3],z=s[7],Q=s[11],it=s[15];return r[0]=a*T+o*E+c*L+l*K,r[4]=a*S+o*D+c*N+l*z,r[8]=a*P+o*O+c*k+l*Q,r[12]=a*v+o*H+c*q+l*it,r[1]=h*T+u*E+d*L+f*K,r[5]=h*S+u*D+d*N+f*z,r[9]=h*P+u*O+d*k+f*Q,r[13]=h*v+u*H+d*q+f*it,r[2]=g*T+_*E+m*L+p*K,r[6]=g*S+_*D+m*N+p*z,r[10]=g*P+_*O+m*k+p*Q,r[14]=g*v+_*H+m*q+p*it,r[3]=y*T+x*E+M*L+b*K,r[7]=y*S+x*D+M*N+b*z,r[11]=y*P+x*O+M*k+b*Q,r[15]=y*v+x*H+M*q+b*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*f-n*c*f)+_*(+e*c*f-e*l*d+r*a*d-s*a*f+s*l*h-r*c*h)+m*(+e*l*u-e*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-s*o*h-e*c*u+e*o*d+s*a*u-n*a*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],y=u*m*l-_*d*l+_*c*f-o*m*f-u*c*p+o*d*p,x=g*d*l-h*m*l-g*c*f+a*m*f+h*c*p-a*d*p,M=h*_*l-g*u*l+g*o*f-a*_*f-h*o*p+a*u*p,b=g*u*c-h*_*c-g*o*d+a*_*d+h*o*m-a*u*m,T=e*y+n*x+s*M+r*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/T;return t[0]=y*S,t[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*S,t[2]=(o*m*r-_*c*r+_*s*l-n*m*l-o*s*p+n*c*p)*S,t[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*f-n*c*f)*S,t[4]=x*S,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*S,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*p-e*c*p)*S,t[7]=(a*d*r-h*c*r+h*s*l-e*d*l-a*s*f+e*c*f)*S,t[8]=M*S,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*S,t[10]=(a*_*r-g*o*r+g*n*l-e*_*l-a*n*p+e*o*p)*S,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*f-e*o*f)*S,t[12]=b*S,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*S,t[14]=(g*o*s-a*_*s-g*n*c+e*_*c+a*n*m-e*o*m)*S,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*d+e*o*d)*S,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,_=a*h,m=a*u,p=o*u,y=c*l,x=c*h,M=c*u,b=n.x,T=n.y,S=n.z;return s[0]=(1-(_+p))*b,s[1]=(f+M)*b,s[2]=(g-x)*b,s[3]=0,s[4]=(f-M)*T,s[5]=(1-(d+p))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(g+x)*S,s[9]=(m-y)*S,s[10]=(1-(d+_))*S,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=_s.set(s[0],s[1],s[2]).length(),a=_s.set(s[4],s[5],s[6]).length(),o=_s.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Cn.copy(this);let l=1/r,h=1/a,u=1/o;return Cn.elements[0]*=l,Cn.elements[1]*=l,Cn.elements[2]*=l,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=u,Cn.elements[9]*=u,Cn.elements[10]*=u,e.setFromRotationMatrix(Cn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=si){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,g;if(o===si)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Bo)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=si){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*l,f=(n+s)*h,g,_;if(o===si)g=(a+r)*u,_=-2*u;else if(o===Bo)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},_s=new C,Cn=new ue,Hp=new C(0,0,0),zp=new C(1,1,1),mi=new C,lo=new C,_n=new C,qh=new ue,Yh=new fn,Vo=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return qh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yh.setFromEuler(this),this.setFromQuaternion(Yh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vo.DEFAULT_ORDER="XYZ";var Sr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},kp=0,Zh=new C,xs=new fn,ti=new ue,ho=new C,lr=new C,Gp=new C,Vp=new fn,$h=new C(1,0,0),Jh=new C(0,1,0),Kh=new C(0,0,1),Wp={type:"added"},Xp={type:"removed"},Ye=class i extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new C,e=new Vo,n=new fn,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new ee}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.multiply(xs),this}rotateOnWorldAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.premultiply(xs),this}rotateX(t){return this.rotateOnAxis($h,t)}rotateY(t){return this.rotateOnAxis(Jh,t)}rotateZ(t){return this.rotateOnAxis(Kh,t)}translateOnAxis(t,e){return Zh.copy(t).applyQuaternion(this.quaternion),this.position.add(Zh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($h,t)}translateY(t){return this.translateOnAxis(Jh,t)}translateZ(t){return this.translateOnAxis(Kh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ho.copy(t):ho.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(lr,ho,this.up):ti.lookAt(ho,lr,this.up),this.quaternion.setFromRotationMatrix(ti),s&&(ti.extractRotation(s.matrixWorld),xs.setFromRotationMatrix(ti),this.quaternion.premultiply(xs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Wp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xp)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(ti),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,t,Gp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,Vp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ye.DEFAULT_UP=new C(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pn=new C,ei=new C,rc=new C,ni=new C,ys=new C,vs=new C,jh=new C,oc=new C,ac=new C,cc=new C,uo=!1,Ps=class i{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Pn.subVectors(t,e),s.cross(Pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Pn.subVectors(s,e),ei.subVectors(n,e),rc.subVectors(t,e);let a=Pn.dot(Pn),o=Pn.dot(ei),c=Pn.dot(rc),l=ei.dot(ei),h=ei.dot(rc),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getUV(t,e,n,s,r,a,o,c){return uo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),uo=!0),this.getInterpolation(t,e,n,s,r,a,o,c)}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ni.x),c.addScaledVector(a,ni.y),c.addScaledVector(o,ni.z),c)}static isFrontFacing(t,e,n,s){return Pn.subVectors(n,e),ei.subVectors(t,e),Pn.cross(ei).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Pn.cross(ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return uo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),uo=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ys.subVectors(s,n),vs.subVectors(r,n),oc.subVectors(t,n);let c=ys.dot(oc),l=vs.dot(oc);if(c<=0&&l<=0)return e.copy(n);ac.subVectors(t,s);let h=ys.dot(ac),u=vs.dot(ac);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(ys,a);cc.subVectors(t,r);let f=ys.dot(cc),g=vs.dot(cc);if(g>=0&&f<=g)return e.copy(r);let _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(vs,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return jh.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(jh,o);let p=1/(m+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector(ys,a).addScaledVector(vs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},fo={h:0,s:0,l:0};function lc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ut=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=me.workingColorSpace){if(t=yl(t,1),e=Be(e,0,1),n=Be(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=lc(a,r,t+1/3),this.g=lc(a,r,t),this.b=lc(a,r,t-1/3)}return me.toWorkingColorSpace(this,s),this}setStyle(t,e=Ue){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){let n=id[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ns(t.r),this.g=Ns(t.g),this.b=Ns(t.b),this}copyLinearToSRGB(t){return this.r=Ka(t.r),this.g=Ka(t.g),this.b=Ka(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return me.fromWorkingColorSpace(Qe.copy(this),t),Math.round(Be(Qe.r*255,0,255))*65536+Math.round(Be(Qe.g*255,0,255))*256+Math.round(Be(Qe.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.fromWorkingColorSpace(Qe.copy(this),e);let n=Qe.r,s=Qe.g,r=Qe.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=me.workingColorSpace){return me.fromWorkingColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=Ue){me.fromWorkingColorSpace(Qe.copy(this),t);let e=Qe.r,n=Qe.g,s=Qe.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(gi),this.setHSL(gi.h+t,gi.s+e,gi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gi),t.getHSL(fo);let n=mr(gi.h,fo.h,e),s=mr(gi.s,fo.s,e),r=mr(gi.l,fo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qe=new Ut;Ut.NAMES=id;var qp=0,Si=class extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=es(),this.name="",this.type="Material",this.blending=Us,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sc,this.blendDst=wc,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(n.blending=this.blending),this.side!==Ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sc&&(n.blendSrc=this.blendSrc),this.blendDst!==wc&&(n.blendDst=this.blendDst),this.blendEquation!==Wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Io&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ci=class extends Si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Gu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ne=new C,po=new nt,_e=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Hh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)po.fromBufferAttribute(this,e),po.applyMatrix3(t),this.setXY(e,po.x,po.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Cs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=on(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cs(e,this.array)),e}setX(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cs(e,this.array)),e}setY(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cs(e,this.array)),e}setW(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array),s=on(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array),s=on(s,this.array),r=on(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Hh&&(t.usage=this.usage),t}};var Wo=class extends _e{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Xo=class extends _e{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ot=class extends _e{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Yp=0,Mn=new ue,hc=new Ye,Ms=new C,xn=new ai,hr=new ai,qe=new C,ge=class i extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=es(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nd(t)?Xo:Wo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ee().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,n){return Mn.makeTranslation(t,e,n),this.applyMatrix4(Mn),this}scale(t,e,n){return Mn.makeScale(t,e,n),this.applyMatrix4(Mn),this}lookAt(t){return hc.lookAt(t),hc.updateMatrix(),this.applyMatrix4(hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ot(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(xn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];hr.setFromBufferAttribute(o),this.morphTargetsRelative?(qe.addVectors(xn.min,hr.min),xn.expandByPoint(qe),qe.addVectors(xn.max,hr.max),xn.expandByPoint(qe)):(xn.expandByPoint(hr.min),xn.expandByPoint(hr.max))}xn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)qe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(qe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)qe.fromBufferAttribute(o,l),c&&(Ms.fromBufferAttribute(t,l),qe.add(Ms)),s=Math.max(s,n.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _e(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let E=0;E<o;E++)l[E]=new C,h[E]=new C;let u=new C,d=new C,f=new C,g=new nt,_=new nt,m=new nt,p=new C,y=new C;function x(E,D,O){u.fromArray(s,E*3),d.fromArray(s,D*3),f.fromArray(s,O*3),g.fromArray(a,E*2),_.fromArray(a,D*2),m.fromArray(a,O*2),d.sub(u),f.sub(u),_.sub(g),m.sub(g);let H=1/(_.x*m.y-m.x*_.y);isFinite(H)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-_.y).multiplyScalar(H),y.copy(f).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(H),l[E].add(p),l[D].add(p),l[O].add(p),h[E].add(y),h[D].add(y),h[O].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let E=0,D=M.length;E<D;++E){let O=M[E],H=O.start,L=O.count;for(let N=H,k=H+L;N<k;N+=3)x(n[N+0],n[N+1],n[N+2])}let b=new C,T=new C,S=new C,P=new C;function v(E){S.fromArray(r,E*3),P.copy(S);let D=l[E];b.copy(D),b.sub(S.multiplyScalar(S.dot(D))).normalize(),T.crossVectors(P,D);let H=T.dot(h[E])<0?-1:1;c[E*4]=b.x,c[E*4+1]=b.y,c[E*4+2]=b.z,c[E*4+3]=H}for(let E=0,D=M.length;E<D;++E){let O=M[E],H=O.start,L=O.count;for(let N=H,k=H+L;N<k;N+=3)v(n[N+0]),v(n[N+1]),v(n[N+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new C,r=new C,a=new C,o=new C,c=new C,l=new C,h=new C,u=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new _e(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qh=new ue,ki=new Ji,mo=new bi,tu=new C,Es=new C,bs=new C,Ss=new C,uc=new C,go=new C,_o=new nt,xo=new nt,yo=new nt,eu=new C,nu=new C,iu=new C,vo=new C,Mo=new C,j=class extends Ye{constructor(t=new ge,e=new ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){go.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(uc.fromBufferAttribute(u,t),a?go.addScaledVector(uc,h):go.addScaledVector(uc.sub(e),h))}e.add(go)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(r),ki.copy(t.ray).recast(t.near),!(mo.containsPoint(ki.origin)===!1&&(ki.intersectSphere(mo,tu)===null||ki.origin.distanceToSquared(tu)>(t.far-t.near)**2))&&(Qh.copy(r).invert(),ki.copy(t.ray).applyMatrix4(Qh),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ki)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,b=x;M<b;M+=3){let T=o.getX(M),S=o.getX(M+1),P=o.getX(M+2);s=Eo(this,p,t,n,l,h,u,T,S,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let y=o.getX(m),x=o.getX(m+1),M=o.getX(m+2);s=Eo(this,a,t,n,l,h,u,y,x,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,b=x;M<b;M+=3){let T=M,S=M+1,P=M+2;s=Eo(this,p,t,n,l,h,u,T,S,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let y=m,x=m+1,M=m+2;s=Eo(this,a,t,n,l,h,u,y,x,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Zp(i,t,e,n,s,r,a,o){let c;if(t.side===He?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Ei,o),c===null)return null;Mo.copy(o),Mo.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Mo);return l<e.near||l>e.far?null:{distance:l,point:Mo.clone(),object:i}}function Eo(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Es),i.getVertexPosition(c,bs),i.getVertexPosition(l,Ss);let h=Zp(i,t,e,n,Es,bs,Ss,vo);if(h){s&&(_o.fromBufferAttribute(s,o),xo.fromBufferAttribute(s,c),yo.fromBufferAttribute(s,l),h.uv=Ps.getInterpolation(vo,Es,bs,Ss,_o,xo,yo,new nt)),r&&(_o.fromBufferAttribute(r,o),xo.fromBufferAttribute(r,c),yo.fromBufferAttribute(r,l),h.uv1=Ps.getInterpolation(vo,Es,bs,Ss,_o,xo,yo,new nt),h.uv2=h.uv1),a&&(eu.fromBufferAttribute(a,o),nu.fromBufferAttribute(a,c),iu.fromBufferAttribute(a,l),h.normal=Ps.getInterpolation(vo,Es,bs,Ss,eu,nu,iu,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new C,materialIndex:0};Ps.getNormal(Es,bs,Ss,u.normal),h.face=u}return h}var Ae=class i extends ge{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ot(l,3)),this.setAttribute("normal",new Ot(h,3)),this.setAttribute("uv",new Ot(u,2));function g(_,m,p,y,x,M,b,T,S,P,v){let E=M/S,D=b/P,O=M/2,H=b/2,L=T/2,N=S+1,k=P+1,q=0,K=0,z=new C;for(let Q=0;Q<k;Q++){let it=Q*D-H;for(let gt=0;gt<N;gt++){let Y=gt*E-O;z[_]=Y*y,z[m]=it*x,z[p]=L,l.push(z.x,z.y,z.z),z[_]=0,z[m]=0,z[p]=T>0?1:-1,h.push(z.x,z.y,z.z),u.push(gt/S),u.push(1-Q/P),q+=1}}for(let Q=0;Q<P;Q++)for(let it=0;it<S;it++){let gt=d+it+N*Q,Y=d+it+N*(Q+1),et=d+(it+1)+N*(Q+1),ft=d+(it+1)+N*Q;c.push(gt,Y,ft),c.push(Y,et,ft),K+=6}o.addGroup(f,K,v),f+=K,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function zs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function an(i){let t={};for(let e=0;e<i.length;e++){let n=zs(i[e]);for(let s in n)t[s]=n[s]}return t}function $p(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function sd(i){return i.getRenderTarget()===null?i.outputColorSpace:me.workingColorSpace}var Jp={clone:zs,merge:an},Kp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Nn=class extends Si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kp,this.fragmentShader=jp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zs(t.uniforms),this.uniformsGroups=$p(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},qo=class extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=si}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},tn=class extends qo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Er*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(pr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Er*2*Math.atan(Math.tan(pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(pr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ws=-90,Ts=1,Dc=class extends Ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new tn(ws,Ts,t,e);s.layers=this.layers,this.add(s);let r=new tn(ws,Ts,t,e);r.layers=this.layers,this.add(r);let a=new tn(ws,Ts,t,e);a.layers=this.layers,this.add(a);let o=new tn(ws,Ts,t,e);o.layers=this.layers,this.add(o);let c=new tn(ws,Ts,t,e);c.layers=this.layers,this.add(c);let l=new tn(ws,Ts,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Bo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Yo=class extends yn{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Fs,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Uc=class extends oi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(gr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Zi?Ue:bn),this.texture=new Yo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:En}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ae(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:yi});r.uniforms.tEquirect.value=e;let a=new j(s,r),o=e.minFilter;return e.minFilter===$i&&(e.minFilter=En),new Dc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},dc=new C,Qp=new C,tm=new ee,Ln=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=dc.subVectors(n,e).cross(Qp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(dc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||tm.getNormalMatrix(t),s=this.coplanarPoint(dc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Gi=new bi,bo=new C,wr=class{constructor(t=new Ln,e=new Ln,n=new Ln,s=new Ln,r=new Ln,a=new Ln){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=si){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],y=s[13],x=s[14],M=s[15];if(n[0].setComponents(c-r,d-l,m-f,M-p).normalize(),n[1].setComponents(c+r,d+l,m+f,M+p).normalize(),n[2].setComponents(c+a,d+h,m+g,M+y).normalize(),n[3].setComponents(c-a,d-h,m-g,M-y).normalize(),n[4].setComponents(c-o,d-u,m-_,M-x).normalize(),e===si)n[5].setComponents(c+o,d+u,m+_,M+x).normalize();else if(e===Bo)n[5].setComponents(o,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(t){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(bo.x=s.normal.x>0?t.max.x:t.min.x,bo.y=s.normal.y>0?t.max.y:t.min.y,bo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(bo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function rd(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function em(i,t){let e=t.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,d=l.usage,f=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,d),l.onUploadCallback();let _;if(u instanceof Float32Array)_=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=i.SHORT;else if(u instanceof Uint32Array)_=i.UNSIGNED_INT;else if(u instanceof Int32Array)_=i.INT;else if(u instanceof Int8Array)_=i.BYTE;else if(u instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,h,u){let d=h.array,f=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,l),f.count===-1&&g.length===0&&i.bufferSubData(u,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){let p=g[_];e?i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(e?i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:a,remove:o,update:c}}var en=class i extends ge{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,d=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let y=p*d-a;for(let x=0;x<l;x++){let M=x*u-r;g.push(M,-y,0),_.push(0,0,1),m.push(x/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){let x=y+l*p,M=y+l*(p+1),b=y+1+l*(p+1),T=y+1+l*p;f.push(x,M,T),f.push(M,b,T)}this.setIndex(f),this.setAttribute("position",new Ot(g,3)),this.setAttribute("normal",new Ot(_,3)),this.setAttribute("uv",new Ot(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},nm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,im=`#ifdef USE_ALPHAHASH
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
#endif`,sm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,om=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,am=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cm=`#ifdef USE_AOMAP
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
#endif`,lm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hm=`#ifdef USE_BATCHING
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
#endif`,um=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,dm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mm=`#ifdef USE_IRIDESCENCE
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
#endif`,gm=`#ifdef USE_BUMPMAP
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
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Sm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,wm=`#define PI 3.141592653589793
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
} // validated`,Tm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Am=`vec3 transformedNormal = objectNormal;
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
#endif`,Rm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Im="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dm=`
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
}`,Um=`#ifdef USE_ENVMAP
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
#endif`,Nm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Om=`#ifdef USE_ENVMAP
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
#endif`,Fm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bm=`#ifdef USE_ENVMAP
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
#endif`,Hm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,km=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vm=`#ifdef USE_GRADIENTMAP
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
}`,Wm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Xm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zm=`uniform bool receiveShadow;
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
#endif`,$m=`#ifdef USE_ENVMAP
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
#endif`,Jm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,t0=`PhysicalMaterial material;
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
#endif`,e0=`struct PhysicalMaterial {
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
}`,n0=`
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
#endif`,i0=`#if defined( RE_IndirectDiffuse )
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
#endif`,s0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,r0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,o0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,c0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,l0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,h0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,u0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,d0=`#if defined( USE_POINTS_UV )
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
#endif`,f0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,p0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,m0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,g0=`#ifdef USE_MORPHNORMALS
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
#endif`,_0=`#ifdef USE_MORPHTARGETS
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
#endif`,x0=`#ifdef USE_MORPHTARGETS
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
#endif`,y0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,v0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,M0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,S0=`#ifdef USE_NORMALMAP
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
#endif`,w0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,T0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,A0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,R0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,C0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,L0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,D0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,U0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,N0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,O0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,F0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,B0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,H0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,z0=`float getShadowMask() {
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
}`,k0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,G0=`#ifdef USE_SKINNING
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
#endif`,V0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,W0=`#ifdef USE_SKINNING
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
#endif`,X0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,q0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Y0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Z0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$0=`#ifdef USE_TRANSMISSION
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
#endif`,J0=`#ifdef USE_TRANSMISSION
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
#endif`,K0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,eg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ng=`uniform sampler2D t2D;
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
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,og=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ag=`#include <common>
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
}`,cg=`#if DEPTH_PACKING == 3200
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
}`,lg=`#define DISTANCE
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
}`,hg=`#define DISTANCE
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
}`,ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fg=`uniform float scale;
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
}`,pg=`uniform vec3 diffuse;
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
}`,mg=`#include <common>
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
}`,gg=`uniform vec3 diffuse;
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
}`,_g=`#define LAMBERT
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
}`,xg=`#define LAMBERT
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
}`,yg=`#define MATCAP
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
}`,vg=`#define MATCAP
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
}`,Mg=`#define NORMAL
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
}`,Eg=`#define NORMAL
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
}`,bg=`#define PHONG
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
}`,Sg=`#define PHONG
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
}`,wg=`#define STANDARD
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
}`,Tg=`#define STANDARD
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
}`,Ag=`#define TOON
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
}`,Rg=`#define TOON
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
}`,Cg=`uniform float size;
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
}`,Pg=`uniform vec3 diffuse;
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
}`,Lg=`#include <common>
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
}`,Ig=`uniform vec3 color;
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
}`,Dg=`uniform float rotation;
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
}`,Ug=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:nm,alphahash_pars_fragment:im,alphamap_fragment:sm,alphamap_pars_fragment:rm,alphatest_fragment:om,alphatest_pars_fragment:am,aomap_fragment:cm,aomap_pars_fragment:lm,batching_pars_vertex:hm,batching_vertex:um,begin_vertex:dm,beginnormal_vertex:fm,bsdfs:pm,iridescence_fragment:mm,bumpmap_pars_fragment:gm,clipping_planes_fragment:_m,clipping_planes_pars_fragment:xm,clipping_planes_pars_vertex:ym,clipping_planes_vertex:vm,color_fragment:Mm,color_pars_fragment:Em,color_pars_vertex:bm,color_vertex:Sm,common:wm,cube_uv_reflection_fragment:Tm,defaultnormal_vertex:Am,displacementmap_pars_vertex:Rm,displacementmap_vertex:Cm,emissivemap_fragment:Pm,emissivemap_pars_fragment:Lm,colorspace_fragment:Im,colorspace_pars_fragment:Dm,envmap_fragment:Um,envmap_common_pars_fragment:Nm,envmap_pars_fragment:Om,envmap_pars_vertex:Fm,envmap_physical_pars_fragment:$m,envmap_vertex:Bm,fog_vertex:Hm,fog_pars_vertex:zm,fog_fragment:km,fog_pars_fragment:Gm,gradientmap_pars_fragment:Vm,lightmap_fragment:Wm,lightmap_pars_fragment:Xm,lights_lambert_fragment:qm,lights_lambert_pars_fragment:Ym,lights_pars_begin:Zm,lights_toon_fragment:Jm,lights_toon_pars_fragment:Km,lights_phong_fragment:jm,lights_phong_pars_fragment:Qm,lights_physical_fragment:t0,lights_physical_pars_fragment:e0,lights_fragment_begin:n0,lights_fragment_maps:i0,lights_fragment_end:s0,logdepthbuf_fragment:r0,logdepthbuf_pars_fragment:o0,logdepthbuf_pars_vertex:a0,logdepthbuf_vertex:c0,map_fragment:l0,map_pars_fragment:h0,map_particle_fragment:u0,map_particle_pars_fragment:d0,metalnessmap_fragment:f0,metalnessmap_pars_fragment:p0,morphcolor_vertex:m0,morphnormal_vertex:g0,morphtarget_pars_vertex:_0,morphtarget_vertex:x0,normal_fragment_begin:y0,normal_fragment_maps:v0,normal_pars_fragment:M0,normal_pars_vertex:E0,normal_vertex:b0,normalmap_pars_fragment:S0,clearcoat_normal_fragment_begin:w0,clearcoat_normal_fragment_maps:T0,clearcoat_pars_fragment:A0,iridescence_pars_fragment:R0,opaque_fragment:C0,packing:P0,premultiplied_alpha_fragment:L0,project_vertex:I0,dithering_fragment:D0,dithering_pars_fragment:U0,roughnessmap_fragment:N0,roughnessmap_pars_fragment:O0,shadowmap_pars_fragment:F0,shadowmap_pars_vertex:B0,shadowmap_vertex:H0,shadowmask_pars_fragment:z0,skinbase_vertex:k0,skinning_pars_vertex:G0,skinning_vertex:V0,skinnormal_vertex:W0,specularmap_fragment:X0,specularmap_pars_fragment:q0,tonemapping_fragment:Y0,tonemapping_pars_fragment:Z0,transmission_fragment:$0,transmission_pars_fragment:J0,uv_pars_fragment:K0,uv_pars_vertex:j0,uv_vertex:Q0,worldpos_vertex:tg,background_vert:eg,background_frag:ng,backgroundCube_vert:ig,backgroundCube_frag:sg,cube_vert:rg,cube_frag:og,depth_vert:ag,depth_frag:cg,distanceRGBA_vert:lg,distanceRGBA_frag:hg,equirect_vert:ug,equirect_frag:dg,linedashed_vert:fg,linedashed_frag:pg,meshbasic_vert:mg,meshbasic_frag:gg,meshlambert_vert:_g,meshlambert_frag:xg,meshmatcap_vert:yg,meshmatcap_frag:vg,meshnormal_vert:Mg,meshnormal_frag:Eg,meshphong_vert:bg,meshphong_frag:Sg,meshphysical_vert:wg,meshphysical_frag:Tg,meshtoon_vert:Ag,meshtoon_frag:Rg,points_vert:Cg,points_frag:Pg,shadow_vert:Lg,shadow_frag:Ig,sprite_vert:Dg,sprite_frag:Ug},_t={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},Xn={basic:{uniforms:an([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:an([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:an([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:an([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:an([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:an([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:an([_t.points,_t.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:an([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:an([_t.common,_t.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:an([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:an([_t.sprite,_t.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:an([_t.common,_t.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:an([_t.lights,_t.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Xn.physical={uniforms:an([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var So={r:0,b:0,g:0};function Ng(i,t,e,n,s,r,a){let o=new Ut(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(m,p){let y=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?_(o,c):x&&x.isColor&&(_(x,1),y=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===ua)?(h===void 0&&(h=new j(new Ae(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:zs(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,T,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=me.getTransfer(x.colorSpace)!==be,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new j(new en(2,2),new Nn({name:"BackgroundMaterial",uniforms:zs(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=me.getTransfer(x.colorSpace)!==be,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,p){m.getRGB(So,sd(i)),n.buffers.color.setClear(So.r,So.g,So.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),c=p,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(o,c)},render:g}}function Og(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=m(null),l=c,h=!1;function u(L,N,k,q,K){let z=!1;if(a){let Q=_(q,k,N);l!==Q&&(l=Q,f(l.object)),z=p(L,q,k,K),z&&y(L,q,k,K)}else{let Q=N.wireframe===!0;(l.geometry!==q.id||l.program!==k.id||l.wireframe!==Q)&&(l.geometry=q.id,l.program=k.id,l.wireframe=Q,z=!0)}K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),(z||h)&&(h=!1,P(L,N,k,q),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function _(L,N,k){let q=k.wireframe===!0,K=o[L.id];K===void 0&&(K={},o[L.id]=K);let z=K[N.id];z===void 0&&(z={},K[N.id]=z);let Q=z[q];return Q===void 0&&(Q=m(d()),z[q]=Q),Q}function m(L){let N=[],k=[],q=[];for(let K=0;K<s;K++)N[K]=0,k[K]=0,q[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:k,attributeDivisors:q,object:L,attributes:{},index:null}}function p(L,N,k,q){let K=l.attributes,z=N.attributes,Q=0,it=k.getAttributes();for(let gt in it)if(it[gt].location>=0){let et=K[gt],ft=z[gt];if(ft===void 0&&(gt==="instanceMatrix"&&L.instanceMatrix&&(ft=L.instanceMatrix),gt==="instanceColor"&&L.instanceColor&&(ft=L.instanceColor)),et===void 0||et.attribute!==ft||ft&&et.data!==ft.data)return!0;Q++}return l.attributesNum!==Q||l.index!==q}function y(L,N,k,q){let K={},z=N.attributes,Q=0,it=k.getAttributes();for(let gt in it)if(it[gt].location>=0){let et=z[gt];et===void 0&&(gt==="instanceMatrix"&&L.instanceMatrix&&(et=L.instanceMatrix),gt==="instanceColor"&&L.instanceColor&&(et=L.instanceColor));let ft={};ft.attribute=et,et&&et.data&&(ft.data=et.data),K[gt]=ft,Q++}l.attributes=K,l.attributesNum=Q,l.index=q}function x(){let L=l.newAttributes;for(let N=0,k=L.length;N<k;N++)L[N]=0}function M(L){b(L,0)}function b(L,N){let k=l.newAttributes,q=l.enabledAttributes,K=l.attributeDivisors;k[L]=1,q[L]===0&&(i.enableVertexAttribArray(L),q[L]=1),K[L]!==N&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,N),K[L]=N)}function T(){let L=l.newAttributes,N=l.enabledAttributes;for(let k=0,q=N.length;k<q;k++)N[k]!==L[k]&&(i.disableVertexAttribArray(k),N[k]=0)}function S(L,N,k,q,K,z,Q){Q===!0?i.vertexAttribIPointer(L,N,k,K,z):i.vertexAttribPointer(L,N,k,q,K,z)}function P(L,N,k,q){if(n.isWebGL2===!1&&(L.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let K=q.attributes,z=k.getAttributes(),Q=N.defaultAttributeValues;for(let it in z){let gt=z[it];if(gt.location>=0){let Y=K[it];if(Y===void 0&&(it==="instanceMatrix"&&L.instanceMatrix&&(Y=L.instanceMatrix),it==="instanceColor"&&L.instanceColor&&(Y=L.instanceColor)),Y!==void 0){let et=Y.normalized,ft=Y.itemSize,vt=e.get(Y);if(vt===void 0)continue;let bt=vt.buffer,Ft=vt.type,Ht=vt.bytesPerElement,It=n.isWebGL2===!0&&(Ft===i.INT||Ft===i.UNSIGNED_INT||Y.gpuType===Wu);if(Y.isInterleavedBufferAttribute){let Et=Y.data,F=Et.stride,$t=Y.offset;if(Et.isInstancedInterleavedBuffer){for(let Tt=0;Tt<gt.locationSize;Tt++)b(gt.location+Tt,Et.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let Tt=0;Tt<gt.locationSize;Tt++)M(gt.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,bt);for(let Tt=0;Tt<gt.locationSize;Tt++)S(gt.location+Tt,ft/gt.locationSize,Ft,et,F*Ht,($t+ft/gt.locationSize*Tt)*Ht,It)}else{if(Y.isInstancedBufferAttribute){for(let Et=0;Et<gt.locationSize;Et++)b(gt.location+Et,Y.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Et=0;Et<gt.locationSize;Et++)M(gt.location+Et);i.bindBuffer(i.ARRAY_BUFFER,bt);for(let Et=0;Et<gt.locationSize;Et++)S(gt.location+Et,ft/gt.locationSize,Ft,et,ft*Ht,ft/gt.locationSize*Et*Ht,It)}}else if(Q!==void 0){let et=Q[it];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(gt.location,et);break;case 3:i.vertexAttrib3fv(gt.location,et);break;case 4:i.vertexAttrib4fv(gt.location,et);break;default:i.vertexAttrib1fv(gt.location,et)}}}}T()}function v(){O();for(let L in o){let N=o[L];for(let k in N){let q=N[k];for(let K in q)g(q[K].object),delete q[K];delete N[k]}delete o[L]}}function E(L){if(o[L.id]===void 0)return;let N=o[L.id];for(let k in N){let q=N[k];for(let K in q)g(q[K].object),delete q[K];delete N[k]}delete o[L.id]}function D(L){for(let N in o){let k=o[N];if(k[L.id]===void 0)continue;let q=k[L.id];for(let K in q)g(q[K].object),delete q[K];delete k[L.id]}}function O(){H(),h=!0,l!==c&&(l=c,f(l.object))}function H(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:O,resetDefaultState:H,dispose:v,releaseStatesOfGeometry:E,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:M,disableUnusedAttributes:T}}function Fg(i,t,e,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function c(h,u,d){if(d===0)return;let f,g;if(s)f=i,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),e.update(u,r,d)}function l(h,u,d){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function Bg(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let S=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,M=a||t.has("OES_texture_float"),b=x&&M,T=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:b,maxSamples:T}}function Hg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Ln,o=new ee,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let y=r?0:n,x=y*4,M=p.clippingState||null;c.value=M,M=h(g,d,x,f);for(let b=0;b!==x;++b)M[b]=e[b];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let p=f+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,M=f;x!==_;++x,M+=4)a.copy(u[x]).applyMatrix4(y,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function zg(i){let t=new WeakMap;function e(a,o){return o===Tc?a.mapping=Fs:o===Ac&&(a.mapping=Bs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Tc||o===Ac)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Uc(c.height/2);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Zo=class extends qo{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ls=4,su=[.125,.215,.35,.446,.526,.582],Xi=20,fc=new Zo,ru=new Ut,pc=null,mc=0,gc=0,Vi=(1+Math.sqrt(5))/2,As=1/Vi,ou=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Vi,As),new C(0,Vi,-As),new C(As,0,Vi),new C(-As,0,Vi),new C(Vi,As,0),new C(-Vi,As,0)],ks=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),gc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(pc,mc,gc),t.scissorTest=!1,wo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Fs||t.mapping===Bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),gc=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:Mr,format:Dn,colorSpace:ri,depthBuffer:!1},s=au(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=au(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kg(r)),this._blurMaterial=Gg(r,t,e)}return s}_compileMaterial(t){let e=new j(this._lodPlanes[0],t);this._renderer.compile(e,fc)}_sceneToCubeUV(t,e,n,s){let o=new tn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ru),h.toneMapping=vi,h.autoClear=!1;let f=new ci({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),g=new j(new Ae,f),_=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(ru),_=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):y===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));let x=this._cubeSize;wo(s,y*x,p>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Fs||t.mapping===Bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new j(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;wo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,fc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ou[(s-1)%ou.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new j(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Xi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Xi;m>Xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xi}`);let p=[],y=0;for(let S=0;S<Xi;++S){let P=S/_,v=Math.exp(-P*P/2);p.push(v),S===0?y+=v:S<m&&(y+=2*v)}for(let S=0;S<p.length;S++)p[S]=p[S]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;let M=this._sizeLods[s],b=3*M*(s>x-Ls?s-x+Ls:0),T=4*(this._cubeSize-M);wo(e,b,T,3*M,2*M),c.setRenderTarget(e),c.render(u,fc)}};function kg(i){let t=[],e=[],n=[],s=i,r=i-Ls+1+su.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Ls?c=su[a-i+Ls-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),x=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let T=0;T<f;T++){let S=T%3*2/3-1,P=T>2?0:-1,v=[S,P,0,S+2/3,P,0,S+2/3,P+1,0,S,P,0,S+2/3,P+1,0,S,P+1,0];y.set(v,_*g*T),x.set(d,m*g*T);let E=[T,T,T,T,T,T];M.set(E,p*g*T)}let b=new ge;b.setAttribute("position",new _e(y,_)),b.setAttribute("uv",new _e(x,m)),b.setAttribute("faceIndex",new _e(M,p)),t.push(b),s>Ls&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function au(i,t,e){let n=new oi(i,t,e);return n.texture.mapping=ua,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Gg(i,t,e){let n=new Float32Array(Xi),s=new C(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vl(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function cu(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vl(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function lu(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function vl(){return`

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
	`}function Vg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Tc||c===Ac,h=c===Fs||c===Bs;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new ks(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(l&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new ks(i));let d=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Wg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Xg(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,g=u.attributes.position,_=0;if(f!==null){let y=f.array;_=f.version;for(let x=0,M=y.length;x<M;x+=3){let b=y[x+0],T=y[x+1],S=y[x+2];d.push(b,T,T,S,S,b)}}else if(g!==void 0){let y=g.array;_=g.version;for(let x=0,M=y.length/3-1;x<M;x+=3){let b=x+0,T=x+1,S=x+2;d.push(b,T,T,S,S,b)}}else return;let m=new(nd(d)?Xo:Wo)(d,1);m.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function qg(i,t,e,n){let s=n.isWebGL2,r;function a(f){r=f}let o,c;function l(f){o=f.type,c=f.bytesPerElement}function h(f,g){i.drawElements(r,g,o,f*c),e.update(g,r,1)}function u(f,g,_){if(_===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,f*c,_),e.update(g,r,_)}function d(f,g,_){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(f[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,f,0,_);let p=0;for(let y=0;y<_;y++)p+=g[y];e.update(p,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Yg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Zg(i,t){return i[0]-t[0]}function $g(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Jg(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,a=new we,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(t.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,_=r.get(h);if(_===void 0||_.count!==g){let L=function(){O.dispose(),r.delete(h),h.removeEventListener("dispose",L)};_!==void 0&&_.texture.dispose();let y=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],S=h.morphAttributes.color||[],P=0;y===!0&&(P=1),x===!0&&(P=2),M===!0&&(P=3);let v=h.attributes.position.count*P,E=1;v>t.maxTextureSize&&(E=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let D=new Float32Array(v*E*4*g),O=new Go(D,v,E,g);O.type=xi,O.needsUpdate=!0;let H=P*4;for(let N=0;N<g;N++){let k=b[N],q=T[N],K=S[N],z=v*E*4*N;for(let Q=0;Q<k.count;Q++){let it=Q*H;y===!0&&(a.fromBufferAttribute(k,Q),D[z+it+0]=a.x,D[z+it+1]=a.y,D[z+it+2]=a.z,D[z+it+3]=0),x===!0&&(a.fromBufferAttribute(q,Q),D[z+it+4]=a.x,D[z+it+5]=a.y,D[z+it+6]=a.z,D[z+it+7]=0),M===!0&&(a.fromBufferAttribute(K,Q),D[z+it+8]=a.x,D[z+it+9]=a.y,D[z+it+10]=a.z,D[z+it+11]=K.itemSize===4?a.w:1)}}_={count:g,texture:O,size:new nt(v,E)},r.set(h,_),h.addEventListener("dispose",L)}let m=0;for(let y=0;y<d.length;y++)m+=d[y];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",p),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",_.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{let f=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==f){g=[];for(let x=0;x<f;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<f;x++){let M=g[x];M[0]=x,M[1]=d[x]}g.sort($g);for(let x=0;x<8;x++)x<f&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Zg);let _=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let M=o[x],b=M[0],T=M[1];b!==Number.MAX_SAFE_INTEGER&&T?(_&&h.getAttribute("morphTarget"+x)!==_[b]&&h.setAttribute("morphTarget"+x,_[b]),m&&h.getAttribute("morphNormal"+x)!==m[b]&&h.setAttribute("morphNormal"+x,m[b]),s[x]=T,p+=T):(_&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let y=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function Kg(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var $o=class extends yn{constructor(t,e,n,s,r,a,o,c,l,h){if(h=h!==void 0?h:Yi,h!==Yi&&h!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Yi&&(n=_i),n===void 0&&h===Hs&&(n=qi),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:cn,this.minFilter=c!==void 0?c:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},od=new yn,ad=new $o(1,1);ad.compareFunction=Qu;var cd=new Go,ld=new Ic,hd=new Yo,hu=[],uu=[],du=new Float32Array(16),fu=new Float32Array(9),pu=new Float32Array(4);function Zs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=hu[s];if(r===void 0&&(r=new Float32Array(s),hu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function fa(i,t){let e=uu[t];e===void 0&&(e=new Int32Array(t),uu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function jg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2fv(this.addr,t),ke(e,t)}}function t1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;i.uniform3fv(this.addr,t),ke(e,t)}}function e1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4fv(this.addr,t),ke(e,t)}}function n1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;pu.set(n),i.uniformMatrix2fv(this.addr,!1,pu),ke(e,n)}}function i1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;fu.set(n),i.uniformMatrix3fv(this.addr,!1,fu),ke(e,n)}}function s1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;du.set(n),i.uniformMatrix4fv(this.addr,!1,du),ke(e,n)}}function r1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function o1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2iv(this.addr,t),ke(e,t)}}function a1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3iv(this.addr,t),ke(e,t)}}function c1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4iv(this.addr,t),ke(e,t)}}function l1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function h1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2uiv(this.addr,t),ke(e,t)}}function u1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3uiv(this.addr,t),ke(e,t)}}function d1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4uiv(this.addr,t),ke(e,t)}}function f1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?ad:od;e.setTexture2D(t||r,s)}function p1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ld,s)}function m1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||hd,s)}function g1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||cd,s)}function _1(i){switch(i){case 5126:return jg;case 35664:return Qg;case 35665:return t1;case 35666:return e1;case 35674:return n1;case 35675:return i1;case 35676:return s1;case 5124:case 35670:return r1;case 35667:case 35671:return o1;case 35668:case 35672:return a1;case 35669:case 35673:return c1;case 5125:return l1;case 36294:return h1;case 36295:return u1;case 36296:return d1;case 35678:case 36198:case 36298:case 36306:case 35682:return f1;case 35679:case 36299:case 36307:return p1;case 35680:case 36300:case 36308:case 36293:return m1;case 36289:case 36303:case 36311:case 36292:return g1}}function x1(i,t){i.uniform1fv(this.addr,t)}function y1(i,t){let e=Zs(t,this.size,2);i.uniform2fv(this.addr,e)}function v1(i,t){let e=Zs(t,this.size,3);i.uniform3fv(this.addr,e)}function M1(i,t){let e=Zs(t,this.size,4);i.uniform4fv(this.addr,e)}function E1(i,t){let e=Zs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function b1(i,t){let e=Zs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function S1(i,t){let e=Zs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function w1(i,t){i.uniform1iv(this.addr,t)}function T1(i,t){i.uniform2iv(this.addr,t)}function A1(i,t){i.uniform3iv(this.addr,t)}function R1(i,t){i.uniform4iv(this.addr,t)}function C1(i,t){i.uniform1uiv(this.addr,t)}function P1(i,t){i.uniform2uiv(this.addr,t)}function L1(i,t){i.uniform3uiv(this.addr,t)}function I1(i,t){i.uniform4uiv(this.addr,t)}function D1(i,t,e){let n=this.cache,s=t.length,r=fa(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||od,r[a])}function U1(i,t,e){let n=this.cache,s=t.length,r=fa(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||ld,r[a])}function N1(i,t,e){let n=this.cache,s=t.length,r=fa(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||hd,r[a])}function O1(i,t,e){let n=this.cache,s=t.length,r=fa(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||cd,r[a])}function F1(i){switch(i){case 5126:return x1;case 35664:return y1;case 35665:return v1;case 35666:return M1;case 35674:return E1;case 35675:return b1;case 35676:return S1;case 5124:case 35670:return w1;case 35667:case 35671:return T1;case 35668:case 35672:return A1;case 35669:case 35673:return R1;case 5125:return C1;case 36294:return P1;case 36295:return L1;case 36296:return I1;case 35678:case 36198:case 36298:case 36306:case 35682:return D1;case 35679:case 36299:case 36307:return U1;case 35680:case 36300:case 36308:case 36293:return N1;case 36289:case 36303:case 36311:case 36292:return O1}}var Nc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=_1(e.type)}},Oc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=F1(e.type)}},Fc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},_c=/(\w+)(\])?(\[|\.)?/g;function mu(i,t){i.seq.push(t),i.map[t.id]=t}function B1(i,t,e){let n=i.name,s=n.length;for(_c.lastIndex=0;;){let r=_c.exec(n),a=_c.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){mu(e,l===void 0?new Nc(o,i,t):new Oc(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Fc(o),mu(e,u)),e=u}}}var Os=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);B1(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function gu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var H1=37297,z1=0;function k1(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function G1(i){let t=me.getPrimaries(me.workingColorSpace),e=me.getPrimaries(i),n;switch(t===e?n="":t===Fo&&e===Oo?n="LinearDisplayP3ToLinearSRGB":t===Oo&&e===Fo&&(n="LinearSRGBToLinearDisplayP3"),i){case ri:case da:return[n,"LinearTransferOETF"];case Ue:case xl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function _u(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+k1(i.getShaderSource(t),a)}else return s}function V1(i,t){let e=G1(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function W1(i,t){let e;switch(t){case Jf:e="Linear";break;case Kf:e="Reinhard";break;case jf:e="OptimizedCineon";break;case gl:e="ACESFilmic";break;case tp:e="AgX";break;case Qf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function X1(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Is).join(`
`)}function q1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Is).join(`
`)}function Y1(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Z1(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Is(i){return i!==""}function xu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var $1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bc(i){return i.replace($1,K1)}var J1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function K1(i,t){let e=Yt[t];if(e===void 0){let n=J1.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Bc(e)}var j1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vu(i){return i.replace(j1,Q1)}function Q1(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mu(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function t_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ku?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ml?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ii&&(t="SHADOWMAP_TYPE_VSM"),t}function e_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Fs:case Bs:t="ENVMAP_TYPE_CUBE";break;case ua:t="ENVMAP_TYPE_CUBE_UV";break}return t}function n_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Bs:t="ENVMAP_MODE_REFRACTION";break}return t}function i_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Gu:t="ENVMAP_BLENDING_MULTIPLY";break;case Zf:t="ENVMAP_BLENDING_MIX";break;case $f:t="ENVMAP_BLENDING_ADD";break}return t}function s_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function r_(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=t_(e),l=e_(e),h=n_(e),u=i_(e),d=s_(e),f=e.isWebGL2?"":X1(e),g=q1(e),_=Y1(r),m=s.createProgram(),p,y,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Is).join(`
`),p.length>0&&(p+=`
`),y=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Is).join(`
`),y.length>0&&(y+=`
`)):(p=[Mu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),y=[f,Mu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vi?"#define TONE_MAPPING":"",e.toneMapping!==vi?Yt.tonemapping_pars_fragment:"",e.toneMapping!==vi?W1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,V1("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Is).join(`
`)),a=Bc(a),a=xu(a,e),a=yu(a,e),o=Bc(o),o=xu(o,e),o=yu(o,e),a=vu(a),o=vu(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===zh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let M=x+p+a,b=x+y+o,T=gu(s,s.VERTEX_SHADER,M),S=gu(s,s.FRAGMENT_SHADER,b);s.attachShader(m,T),s.attachShader(m,S),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function P(O){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(T).trim(),N=s.getShaderInfoLog(S).trim(),k=!0,q=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,T,S);else{let K=_u(s,T,"vertex"),z=_u(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+H+`
`+K+`
`+z)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(L===""||N==="")&&(q=!1);q&&(O.diagnostics={runnable:k,programLog:H,vertexShader:{log:L,prefix:p},fragmentShader:{log:N,prefix:y}})}s.deleteShader(T),s.deleteShader(S),v=new Os(s,m),E=Z1(s,m)}let v;this.getUniforms=function(){return v===void 0&&P(this),v};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(m,H1)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=z1++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=S,this}var o_=0,Hc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new zc(t),e.set(t,n)),n}},zc=class{constructor(t){this.id=o_++,this.code=t,this.usedTimes=0}};function a_(i,t,e,n,s,r,a){let o=new Sr,c=new Hc,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===0?"uv":`uv${v}`}function m(v,E,D,O,H){let L=O.fog,N=H.geometry,k=v.isMeshStandardMaterial?O.environment:null,q=(v.isMeshStandardMaterial?e:t).get(v.envMap||k),K=q&&q.mapping===ua?q.image.height:null,z=g[v.type];v.precision!==null&&(f=s.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let Q=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,it=Q!==void 0?Q.length:0,gt=0;N.morphAttributes.position!==void 0&&(gt=1),N.morphAttributes.normal!==void 0&&(gt=2),N.morphAttributes.color!==void 0&&(gt=3);let Y,et,ft,vt;if(z){let sn=Xn[z];Y=sn.vertexShader,et=sn.fragmentShader}else Y=v.vertexShader,et=v.fragmentShader,c.update(v),ft=c.getVertexShaderID(v),vt=c.getFragmentShaderID(v);let bt=i.getRenderTarget(),Ft=H.isInstancedMesh===!0,Ht=H.isBatchedMesh===!0,It=!!v.map,Et=!!v.matcap,F=!!q,$t=!!v.aoMap,Tt=!!v.lightMap,kt=!!v.bumpMap,At=!!v.normalMap,Ee=!!v.displacementMap,Vt=!!v.emissiveMap,R=!!v.metalnessMap,w=!!v.roughnessMap,G=v.anisotropy>0,ct=v.clearcoat>0,ot=v.iridescence>0,at=v.sheen>0,Rt=v.transmission>0,xt=G&&!!v.anisotropyMap,Mt=ct&&!!v.clearcoatMap,Nt=ct&&!!v.clearcoatNormalMap,Xt=ct&&!!v.clearcoatRoughnessMap,rt=ot&&!!v.iridescenceMap,ie=ot&&!!v.iridescenceThicknessMap,I=at&&!!v.sheenColorMap,st=at&&!!v.sheenRoughnessMap,mt=!!v.specularMap,lt=!!v.specularColorMap,Ct=!!v.specularIntensityMap,Qt=Rt&&!!v.transmissionMap,se=Rt&&!!v.thicknessMap,Jt=!!v.gradientMap,pt=!!v.alphaMap,U=v.alphaTest>0,ut=!!v.alphaHash,dt=!!v.extensions,Dt=!!N.attributes.uv1,Pt=!!N.attributes.uv2,oe=!!N.attributes.uv3,ce=vi;return v.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(ce=i.toneMapping),{isWebGL2:h,shaderID:z,shaderType:v.type,shaderName:v.name,vertexShader:Y,fragmentShader:et,defines:v.defines,customVertexShaderID:ft,customFragmentShaderID:vt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Ht,instancing:Ft,instancingColor:Ft&&H.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:bt===null?i.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:ri,map:It,matcap:Et,envMap:F,envMapMode:F&&q.mapping,envMapCubeUVHeight:K,aoMap:$t,lightMap:Tt,bumpMap:kt,normalMap:At,displacementMap:d&&Ee,emissiveMap:Vt,normalMapObjectSpace:At&&v.normalMapType===dp,normalMapTangentSpace:At&&v.normalMapType===ju,metalnessMap:R,roughnessMap:w,anisotropy:G,anisotropyMap:xt,clearcoat:ct,clearcoatMap:Mt,clearcoatNormalMap:Nt,clearcoatRoughnessMap:Xt,iridescence:ot,iridescenceMap:rt,iridescenceThicknessMap:ie,sheen:at,sheenColorMap:I,sheenRoughnessMap:st,specularMap:mt,specularColorMap:lt,specularIntensityMap:Ct,transmission:Rt,transmissionMap:Qt,thicknessMap:se,gradientMap:Jt,opaque:v.transparent===!1&&v.blending===Us,alphaMap:pt,alphaTest:U,alphaHash:ut,combine:v.combine,mapUv:It&&_(v.map.channel),aoMapUv:$t&&_(v.aoMap.channel),lightMapUv:Tt&&_(v.lightMap.channel),bumpMapUv:kt&&_(v.bumpMap.channel),normalMapUv:At&&_(v.normalMap.channel),displacementMapUv:Ee&&_(v.displacementMap.channel),emissiveMapUv:Vt&&_(v.emissiveMap.channel),metalnessMapUv:R&&_(v.metalnessMap.channel),roughnessMapUv:w&&_(v.roughnessMap.channel),anisotropyMapUv:xt&&_(v.anisotropyMap.channel),clearcoatMapUv:Mt&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:I&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:st&&_(v.sheenRoughnessMap.channel),specularMapUv:mt&&_(v.specularMap.channel),specularColorMapUv:lt&&_(v.specularColorMap.channel),specularIntensityMapUv:Ct&&_(v.specularIntensityMap.channel),transmissionMapUv:Qt&&_(v.transmissionMap.channel),thicknessMapUv:se&&_(v.thicknessMap.channel),alphaMapUv:pt&&_(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(At||G),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Dt,vertexUv2s:Pt,vertexUv3s:oe,pointsUvs:H.isPoints===!0&&!!N.attributes.uv&&(It||pt),fog:!!L,useFog:v.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:H.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:gt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,useLegacyLights:i._useLegacyLights,decodeVideoTexture:It&&v.map.isVideoTexture===!0&&me.getTransfer(v.map.colorSpace)===be,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Te,flipSided:v.side===He,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:dt&&v.extensions.derivatives===!0,extensionFragDepth:dt&&v.extensions.fragDepth===!0,extensionDrawBuffers:dt&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:dt&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:dt&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){let E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(let D in v.defines)E.push(D),E.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(y(E,v),x(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function y(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function x(v,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),v.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),v.push(o.mask)}function M(v){let E=g[v.type],D;if(E){let O=Xn[E];D=Jp.clone(O.uniforms)}else D=v.uniforms;return D}function b(v,E){let D;for(let O=0,H=l.length;O<H;O++){let L=l[O];if(L.cacheKey===E){D=L,++D.usedTimes;break}}return D===void 0&&(D=new r_(i,E,v,r),l.push(D)),D}function T(v){if(--v.usedTimes===0){let E=l.indexOf(v);l[E]=l[l.length-1],l.pop(),v.destroy()}}function S(v){c.remove(v)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:b,releaseProgram:T,releaseShaderCache:S,programs:l,dispose:P}}function c_(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function l_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Eu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function bu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function o(u,d,f,g,_,m){let p=a(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,g,_,m){let p=a(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||l_),n.length>1&&n.sort(d||Eu),s.length>1&&s.sort(d||Eu)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function h_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new bu,i.set(n,[a])):s>=r.length?(a=new bu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function u_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Ut};break;case"SpotLight":e={position:new C,direction:new C,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function d_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var f_=0;function p_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function m_(i,t){let e=new u_,n=d_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new C);let r=new C,a=new ue,o=new ue;function c(h,u){let d=0,f=0,g=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let _=0,m=0,p=0,y=0,x=0,M=0,b=0,T=0,S=0,P=0,v=0;h.sort(p_);let E=u===!0?Math.PI:1;for(let O=0,H=h.length;O<H;O++){let L=h[O],N=L.color,k=L.intensity,q=L.distance,K=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=N.r*k*E,f+=N.g*k*E,g+=N.b*k*E;else if(L.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(L.sh.coefficients[z],k);v++}else if(L.isDirectionalLight){let z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){let Q=L.shadow,it=n.get(L);it.shadowBias=Q.bias,it.shadowNormalBias=Q.normalBias,it.shadowRadius=Q.radius,it.shadowMapSize=Q.mapSize,s.directionalShadow[_]=it,s.directionalShadowMap[_]=K,s.directionalShadowMatrix[_]=L.shadow.matrix,M++}s.directional[_]=z,_++}else if(L.isSpotLight){let z=e.get(L);z.position.setFromMatrixPosition(L.matrixWorld),z.color.copy(N).multiplyScalar(k*E),z.distance=q,z.coneCos=Math.cos(L.angle),z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),z.decay=L.decay,s.spot[p]=z;let Q=L.shadow;if(L.map&&(s.spotLightMap[S]=L.map,S++,Q.updateMatrices(L),L.castShadow&&P++),s.spotLightMatrix[p]=Q.matrix,L.castShadow){let it=n.get(L);it.shadowBias=Q.bias,it.shadowNormalBias=Q.normalBias,it.shadowRadius=Q.radius,it.shadowMapSize=Q.mapSize,s.spotShadow[p]=it,s.spotShadowMap[p]=K,T++}p++}else if(L.isRectAreaLight){let z=e.get(L);z.color.copy(N).multiplyScalar(k),z.halfWidth.set(L.width*.5,0,0),z.halfHeight.set(0,L.height*.5,0),s.rectArea[y]=z,y++}else if(L.isPointLight){let z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity*E),z.distance=L.distance,z.decay=L.decay,L.castShadow){let Q=L.shadow,it=n.get(L);it.shadowBias=Q.bias,it.shadowNormalBias=Q.normalBias,it.shadowRadius=Q.radius,it.shadowMapSize=Q.mapSize,it.shadowCameraNear=Q.camera.near,it.shadowCameraFar=Q.camera.far,s.pointShadow[m]=it,s.pointShadowMap[m]=K,s.pointShadowMatrix[m]=L.shadow.matrix,b++}s.point[m]=z,m++}else if(L.isHemisphereLight){let z=e.get(L);z.skyColor.copy(L.color).multiplyScalar(k*E),z.groundColor.copy(L.groundColor).multiplyScalar(k*E),s.hemi[x]=z,x++}}y>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=_t.LTC_FLOAT_1,s.rectAreaLTC2=_t.LTC_FLOAT_2):(s.rectAreaLTC1=_t.LTC_HALF_1,s.rectAreaLTC2=_t.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=_t.LTC_FLOAT_1,s.rectAreaLTC2=_t.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=_t.LTC_HALF_1,s.rectAreaLTC2=_t.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=g;let D=s.hash;(D.directionalLength!==_||D.pointLength!==m||D.spotLength!==p||D.rectAreaLength!==y||D.hemiLength!==x||D.numDirectionalShadows!==M||D.numPointShadows!==b||D.numSpotShadows!==T||D.numSpotMaps!==S||D.numLightProbes!==v)&&(s.directional.length=_,s.spot.length=p,s.rectArea.length=y,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=b,s.pointShadowMap.length=b,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=b,s.spotLightMatrix.length=T+S-P,s.spotLightMap.length=S,s.numSpotLightShadowsWithMaps=P,s.numLightProbes=v,D.directionalLength=_,D.pointLength=m,D.spotLength=p,D.rectAreaLength=y,D.hemiLength=x,D.numDirectionalShadows=M,D.numPointShadows=b,D.numSpotShadows=T,D.numSpotMaps=S,D.numLightProbes=v,s.version=f_++)}function l(h,u){let d=0,f=0,g=0,_=0,m=0,p=u.matrixWorldInverse;for(let y=0,x=h.length;y<x;y++){let M=h[y];if(M.isDirectionalLight){let b=s.directional[d];b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),d++}else if(M.isSpotLight){let b=s.spot[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let b=s.rectArea[_];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),o.identity(),a.copy(M.matrixWorld),a.premultiply(p),o.extractRotation(a),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){let b=s.point[f];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let b=s.hemi[m];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:s}}function Su(i,t){let e=new m_(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function g_(i,t){let e=new WeakMap;function n(r,a=0){let o=e.get(r),c;return o===void 0?(c=new Su(i,t),e.set(r,[c])):a>=o.length?(c=new Su(i,t),o.push(c)):c=o[a],c}function s(){e=new WeakMap}return{get:n,dispose:s}}var kc=class extends Si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Gc=class extends Si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},__=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x_=`uniform sampler2D shadow_pass;
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
}`;function y_(i,t,e){let n=new wr,s=new nt,r=new nt,a=new we,o=new kc({depthPacking:up}),c=new Gc,l={},h=e.maxTextureSize,u={[Ei]:He,[He]:Ei,[Te]:Te},d=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:__,fragmentShader:x_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new ge;g.setAttribute("position",new _e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new j(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ku;let p=this.type;this.render=function(T,S,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let v=i.getRenderTarget(),E=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),O=i.state;O.setBlending(yi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let H=p!==ii&&this.type===ii,L=p===ii&&this.type!==ii;for(let N=0,k=T.length;N<k;N++){let q=T[N],K=q.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let z=K.getFrameExtents();if(s.multiply(z),r.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/z.x),s.x=r.x*z.x,K.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/z.y),s.y=r.y*z.y,K.mapSize.y=r.y)),K.map===null||H===!0||L===!0){let it=this.type!==ii?{minFilter:cn,magFilter:cn}:{};K.map!==null&&K.map.dispose(),K.map=new oi(s.x,s.y,it),K.map.texture.name=q.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();let Q=K.getViewportCount();for(let it=0;it<Q;it++){let gt=K.getViewport(it);a.set(r.x*gt.x,r.y*gt.y,r.x*gt.z,r.y*gt.w),O.viewport(a),K.updateMatrices(q,it),n=K.getFrustum(),M(S,P,K.camera,q,this.type)}K.isPointLightShadow!==!0&&this.type===ii&&y(K,P),K.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(v,E,D)};function y(T,S){let P=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new oi(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(S,null,P,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(S,null,P,f,_,null)}function x(T,S,P,v){let E=null,D=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)E=D;else if(E=P.isPointLight===!0?c:o,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let O=E.uuid,H=S.uuid,L=l[O];L===void 0&&(L={},l[O]=L);let N=L[H];N===void 0&&(N=E.clone(),L[H]=N,S.addEventListener("dispose",b)),E=N}if(E.visible=S.visible,E.wireframe=S.wireframe,v===ii?E.side=S.shadowSide!==null?S.shadowSide:S.side:E.side=S.shadowSide!==null?S.shadowSide:u[S.side],E.alphaMap=S.alphaMap,E.alphaTest=S.alphaTest,E.map=S.map,E.clipShadows=S.clipShadows,E.clippingPlanes=S.clippingPlanes,E.clipIntersection=S.clipIntersection,E.displacementMap=S.displacementMap,E.displacementScale=S.displacementScale,E.displacementBias=S.displacementBias,E.wireframeLinewidth=S.wireframeLinewidth,E.linewidth=S.linewidth,P.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let O=i.properties.get(E);O.light=P}return E}function M(T,S,P,v,E){if(T.visible===!1)return;if(T.layers.test(S.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===ii)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);let H=t.update(T),L=T.material;if(Array.isArray(L)){let N=H.groups;for(let k=0,q=N.length;k<q;k++){let K=N[k],z=L[K.materialIndex];if(z&&z.visible){let Q=x(T,z,v,E);T.onBeforeShadow(i,T,S,P,H,Q,K),i.renderBufferDirect(P,null,H,Q,T,K),T.onAfterShadow(i,T,S,P,H,Q,K)}}}else if(L.visible){let N=x(T,L,v,E);T.onBeforeShadow(i,T,S,P,H,N,null),i.renderBufferDirect(P,null,H,N,T,null),T.onAfterShadow(i,T,S,P,H,N,null)}}let O=T.children;for(let H=0,L=O.length;H<L;H++)M(O[H],S,P,v,E)}function b(T){T.target.removeEventListener("dispose",b);for(let P in l){let v=l[P],E=T.target.uuid;E in v&&(v[E].dispose(),delete v[E])}}}function v_(i,t,e){let n=e.isWebGL2;function s(){let U=!1,ut=new we,dt=null,Dt=new we(0,0,0,0);return{setMask:function(Pt){dt!==Pt&&!U&&(i.colorMask(Pt,Pt,Pt,Pt),dt=Pt)},setLocked:function(Pt){U=Pt},setClear:function(Pt,oe,ce,We,sn){sn===!0&&(Pt*=We,oe*=We,ce*=We),ut.set(Pt,oe,ce,We),Dt.equals(ut)===!1&&(i.clearColor(Pt,oe,ce,We),Dt.copy(ut))},reset:function(){U=!1,dt=null,Dt.set(-1,0,0,0)}}}function r(){let U=!1,ut=null,dt=null,Dt=null;return{setTest:function(Pt){Pt?Ht(i.DEPTH_TEST):It(i.DEPTH_TEST)},setMask:function(Pt){ut!==Pt&&!U&&(i.depthMask(Pt),ut=Pt)},setFunc:function(Pt){if(dt!==Pt){switch(Pt){case kf:i.depthFunc(i.NEVER);break;case Gf:i.depthFunc(i.ALWAYS);break;case Vf:i.depthFunc(i.LESS);break;case Io:i.depthFunc(i.LEQUAL);break;case Wf:i.depthFunc(i.EQUAL);break;case Xf:i.depthFunc(i.GEQUAL);break;case qf:i.depthFunc(i.GREATER);break;case Yf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}dt=Pt}},setLocked:function(Pt){U=Pt},setClear:function(Pt){Dt!==Pt&&(i.clearDepth(Pt),Dt=Pt)},reset:function(){U=!1,ut=null,dt=null,Dt=null}}}function a(){let U=!1,ut=null,dt=null,Dt=null,Pt=null,oe=null,ce=null,We=null,sn=null;return{setTest:function(ye){U||(ye?Ht(i.STENCIL_TEST):It(i.STENCIL_TEST))},setMask:function(ye){ut!==ye&&!U&&(i.stencilMask(ye),ut=ye)},setFunc:function(ye,rn,Wn){(dt!==ye||Dt!==rn||Pt!==Wn)&&(i.stencilFunc(ye,rn,Wn),dt=ye,Dt=rn,Pt=Wn)},setOp:function(ye,rn,Wn){(oe!==ye||ce!==rn||We!==Wn)&&(i.stencilOp(ye,rn,Wn),oe=ye,ce=rn,We=Wn)},setLocked:function(ye){U=ye},setClear:function(ye){sn!==ye&&(i.clearStencil(ye),sn=ye)},reset:function(){U=!1,ut=null,dt=null,Dt=null,Pt=null,oe=null,ce=null,We=null,sn=null}}}let o=new s,c=new r,l=new a,h=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,_=[],m=null,p=!1,y=null,x=null,M=null,b=null,T=null,S=null,P=null,v=new Ut(0,0,0),E=0,D=!1,O=null,H=null,L=null,N=null,k=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,z=0,Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(Q)[1]),K=z>=1):Q.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),K=z>=2);let it=null,gt={},Y=i.getParameter(i.SCISSOR_BOX),et=i.getParameter(i.VIEWPORT),ft=new we().fromArray(Y),vt=new we().fromArray(et);function bt(U,ut,dt,Dt){let Pt=new Uint8Array(4),oe=i.createTexture();i.bindTexture(U,oe),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ce=0;ce<dt;ce++)n&&(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)?i.texImage3D(ut,0,i.RGBA,1,1,Dt,0,i.RGBA,i.UNSIGNED_BYTE,Pt):i.texImage2D(ut+ce,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pt);return oe}let Ft={};Ft[i.TEXTURE_2D]=bt(i.TEXTURE_2D,i.TEXTURE_2D,1),Ft[i.TEXTURE_CUBE_MAP]=bt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ft[i.TEXTURE_2D_ARRAY]=bt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ft[i.TEXTURE_3D]=bt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ht(i.DEPTH_TEST),c.setFunc(Io),Vt(!1),R(ih),Ht(i.CULL_FACE),At(yi);function Ht(U){d[U]!==!0&&(i.enable(U),d[U]=!0)}function It(U){d[U]!==!1&&(i.disable(U),d[U]=!1)}function Et(U,ut){return f[U]!==ut?(i.bindFramebuffer(U,ut),f[U]=ut,n&&(U===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ut),U===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ut)),!0):!1}function F(U,ut){let dt=_,Dt=!1;if(U)if(dt=g.get(ut),dt===void 0&&(dt=[],g.set(ut,dt)),U.isWebGLMultipleRenderTargets){let Pt=U.texture;if(dt.length!==Pt.length||dt[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,ce=Pt.length;oe<ce;oe++)dt[oe]=i.COLOR_ATTACHMENT0+oe;dt.length=Pt.length,Dt=!0}}else dt[0]!==i.COLOR_ATTACHMENT0&&(dt[0]=i.COLOR_ATTACHMENT0,Dt=!0);else dt[0]!==i.BACK&&(dt[0]=i.BACK,Dt=!0);Dt&&(e.isWebGL2?i.drawBuffers(dt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(dt))}function $t(U){return m!==U?(i.useProgram(U),m=U,!0):!1}let Tt={[Wi]:i.FUNC_ADD,[Tf]:i.FUNC_SUBTRACT,[Af]:i.FUNC_REVERSE_SUBTRACT};if(n)Tt[ah]=i.MIN,Tt[ch]=i.MAX;else{let U=t.get("EXT_blend_minmax");U!==null&&(Tt[ah]=U.MIN_EXT,Tt[ch]=U.MAX_EXT)}let kt={[Rf]:i.ZERO,[Cf]:i.ONE,[Pf]:i.SRC_COLOR,[Sc]:i.SRC_ALPHA,[Of]:i.SRC_ALPHA_SATURATE,[Uf]:i.DST_COLOR,[If]:i.DST_ALPHA,[Lf]:i.ONE_MINUS_SRC_COLOR,[wc]:i.ONE_MINUS_SRC_ALPHA,[Nf]:i.ONE_MINUS_DST_COLOR,[Df]:i.ONE_MINUS_DST_ALPHA,[Ff]:i.CONSTANT_COLOR,[Bf]:i.ONE_MINUS_CONSTANT_COLOR,[Hf]:i.CONSTANT_ALPHA,[zf]:i.ONE_MINUS_CONSTANT_ALPHA};function At(U,ut,dt,Dt,Pt,oe,ce,We,sn,ye){if(U===yi){p===!0&&(It(i.BLEND),p=!1);return}if(p===!1&&(Ht(i.BLEND),p=!0),U!==wf){if(U!==y||ye!==D){if((x!==Wi||T!==Wi)&&(i.blendEquation(i.FUNC_ADD),x=Wi,T=Wi),ye)switch(U){case Us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sh:i.blendFunc(i.ONE,i.ONE);break;case rh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case oh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case rh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case oh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,b=null,S=null,P=null,v.set(0,0,0),E=0,y=U,D=ye}return}Pt=Pt||ut,oe=oe||dt,ce=ce||Dt,(ut!==x||Pt!==T)&&(i.blendEquationSeparate(Tt[ut],Tt[Pt]),x=ut,T=Pt),(dt!==M||Dt!==b||oe!==S||ce!==P)&&(i.blendFuncSeparate(kt[dt],kt[Dt],kt[oe],kt[ce]),M=dt,b=Dt,S=oe,P=ce),(We.equals(v)===!1||sn!==E)&&(i.blendColor(We.r,We.g,We.b,sn),v.copy(We),E=sn),y=U,D=!1}function Ee(U,ut){U.side===Te?It(i.CULL_FACE):Ht(i.CULL_FACE);let dt=U.side===He;ut&&(dt=!dt),Vt(dt),U.blending===Us&&U.transparent===!1?At(yi):At(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),c.setFunc(U.depthFunc),c.setTest(U.depthTest),c.setMask(U.depthWrite),o.setMask(U.colorWrite);let Dt=U.stencilWrite;l.setTest(Dt),Dt&&(l.setMask(U.stencilWriteMask),l.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),l.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),G(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Ht(i.SAMPLE_ALPHA_TO_COVERAGE):It(i.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(U){O!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),O=U)}function R(U){U!==bf?(Ht(i.CULL_FACE),U!==H&&(U===ih?i.cullFace(i.BACK):U===Sf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):It(i.CULL_FACE),H=U}function w(U){U!==L&&(K&&i.lineWidth(U),L=U)}function G(U,ut,dt){U?(Ht(i.POLYGON_OFFSET_FILL),(N!==ut||k!==dt)&&(i.polygonOffset(ut,dt),N=ut,k=dt)):It(i.POLYGON_OFFSET_FILL)}function ct(U){U?Ht(i.SCISSOR_TEST):It(i.SCISSOR_TEST)}function ot(U){U===void 0&&(U=i.TEXTURE0+q-1),it!==U&&(i.activeTexture(U),it=U)}function at(U,ut,dt){dt===void 0&&(it===null?dt=i.TEXTURE0+q-1:dt=it);let Dt=gt[dt];Dt===void 0&&(Dt={type:void 0,texture:void 0},gt[dt]=Dt),(Dt.type!==U||Dt.texture!==ut)&&(it!==dt&&(i.activeTexture(dt),it=dt),i.bindTexture(U,ut||Ft[U]),Dt.type=U,Dt.texture=ut)}function Rt(){let U=gt[it];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function xt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Mt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Nt(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Xt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function I(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function st(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function mt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function lt(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ct(U){ft.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ft.copy(U))}function Qt(U){vt.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),vt.copy(U))}function se(U,ut){let dt=u.get(ut);dt===void 0&&(dt=new WeakMap,u.set(ut,dt));let Dt=dt.get(U);Dt===void 0&&(Dt=i.getUniformBlockIndex(ut,U.name),dt.set(U,Dt))}function Jt(U,ut){let Dt=u.get(ut).get(U);h.get(ut)!==Dt&&(i.uniformBlockBinding(ut,Dt,U.__bindingPointIndex),h.set(ut,Dt))}function pt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},it=null,gt={},f={},g=new WeakMap,_=[],m=null,p=!1,y=null,x=null,M=null,b=null,T=null,S=null,P=null,v=new Ut(0,0,0),E=0,D=!1,O=null,H=null,L=null,N=null,k=null,ft.set(0,0,i.canvas.width,i.canvas.height),vt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Ht,disable:It,bindFramebuffer:Et,drawBuffers:F,useProgram:$t,setBlending:At,setMaterial:Ee,setFlipSided:Vt,setCullFace:R,setLineWidth:w,setPolygonOffset:G,setScissorTest:ct,activeTexture:ot,bindTexture:at,unbindTexture:Rt,compressedTexImage2D:xt,compressedTexImage3D:Mt,texImage2D:mt,texImage3D:lt,updateUBOMapping:se,uniformBlockBinding:Jt,texStorage2D:I,texStorage3D:st,texSubImage2D:Nt,texSubImage3D:Xt,compressedTexSubImage2D:rt,compressedTexSubImage3D:ie,scissor:Ct,viewport:Qt,reset:pt}}function M_(i,t,e,n,s,r,a){let o=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,w){return f?new OffscreenCanvas(R,w):br("canvas")}function _(R,w,G,ct){let ot=1;if((R.width>ct||R.height>ct)&&(ot=ct/Math.max(R.width,R.height)),ot<1||w===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){let at=w?Ho:Math.floor,Rt=at(ot*R.width),xt=at(ot*R.height);u===void 0&&(u=g(Rt,xt));let Mt=G?g(Rt,xt):u;return Mt.width=Rt,Mt.height=xt,Mt.getContext("2d").drawImage(R,0,0,Rt,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Rt+"x"+xt+")."),Mt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return Pc(R.width)&&Pc(R.height)}function p(R){return o?!1:R.wrapS!==In||R.wrapT!==In||R.minFilter!==cn&&R.minFilter!==En}function y(R,w){return R.generateMipmaps&&w&&R.minFilter!==cn&&R.minFilter!==En}function x(R){i.generateMipmap(R)}function M(R,w,G,ct,ot=!1){if(o===!1)return w;if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let at=w;if(w===i.RED&&(G===i.FLOAT&&(at=i.R32F),G===i.HALF_FLOAT&&(at=i.R16F),G===i.UNSIGNED_BYTE&&(at=i.R8)),w===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(at=i.R8UI),G===i.UNSIGNED_SHORT&&(at=i.R16UI),G===i.UNSIGNED_INT&&(at=i.R32UI),G===i.BYTE&&(at=i.R8I),G===i.SHORT&&(at=i.R16I),G===i.INT&&(at=i.R32I)),w===i.RG&&(G===i.FLOAT&&(at=i.RG32F),G===i.HALF_FLOAT&&(at=i.RG16F),G===i.UNSIGNED_BYTE&&(at=i.RG8)),w===i.RGBA){let Rt=ot?No:me.getTransfer(ct);G===i.FLOAT&&(at=i.RGBA32F),G===i.HALF_FLOAT&&(at=i.RGBA16F),G===i.UNSIGNED_BYTE&&(at=Rt===be?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(at=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(at=i.RGB5_A1)}return(at===i.R16F||at===i.R32F||at===i.RG16F||at===i.RG32F||at===i.RGBA16F||at===i.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function b(R,w,G){return y(R,G)===!0||R.isFramebufferTexture&&R.minFilter!==cn&&R.minFilter!==En?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function T(R){return R===cn||R===lh||R===Va?i.NEAREST:i.LINEAR}function S(R){let w=R.target;w.removeEventListener("dispose",S),v(w),w.isVideoTexture&&h.delete(w)}function P(R){let w=R.target;w.removeEventListener("dispose",P),D(w)}function v(R){let w=n.get(R);if(w.__webglInit===void 0)return;let G=R.source,ct=d.get(G);if(ct){let ot=ct[w.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&E(R),Object.keys(ct).length===0&&d.delete(G)}n.remove(R)}function E(R){let w=n.get(R);i.deleteTexture(w.__webglTexture);let G=R.source,ct=d.get(G);delete ct[w.__cacheKey],a.memory.textures--}function D(R){let w=R.texture,G=n.get(R),ct=n.get(w);if(ct.__webglTexture!==void 0&&(i.deleteTexture(ct.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(G.__webglFramebuffer[ot]))for(let at=0;at<G.__webglFramebuffer[ot].length;at++)i.deleteFramebuffer(G.__webglFramebuffer[ot][at]);else i.deleteFramebuffer(G.__webglFramebuffer[ot]);G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer[ot])}else{if(Array.isArray(G.__webglFramebuffer))for(let ot=0;ot<G.__webglFramebuffer.length;ot++)i.deleteFramebuffer(G.__webglFramebuffer[ot]);else i.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&i.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ot=0;ot<G.__webglColorRenderbuffer.length;ot++)G.__webglColorRenderbuffer[ot]&&i.deleteRenderbuffer(G.__webglColorRenderbuffer[ot]);G.__webglDepthRenderbuffer&&i.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ot=0,at=w.length;ot<at;ot++){let Rt=n.get(w[ot]);Rt.__webglTexture&&(i.deleteTexture(Rt.__webglTexture),a.memory.textures--),n.remove(w[ot])}n.remove(w),n.remove(R)}let O=0;function H(){O=0}function L(){let R=O;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),O+=1,R}function N(R){let w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function k(R,w){let G=n.get(R);if(R.isVideoTexture&&Ee(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){let ct=R.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ft(G,R,w);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+w)}function q(R,w){let G=n.get(R);if(R.version>0&&G.__version!==R.version){ft(G,R,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+w)}function K(R,w){let G=n.get(R);if(R.version>0&&G.__version!==R.version){ft(G,R,w);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+w)}function z(R,w){let G=n.get(R);if(R.version>0&&G.__version!==R.version){vt(G,R,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+w)}let Q={[vr]:i.REPEAT,[In]:i.CLAMP_TO_EDGE,[Rc]:i.MIRRORED_REPEAT},it={[cn]:i.NEAREST,[lh]:i.NEAREST_MIPMAP_NEAREST,[Va]:i.NEAREST_MIPMAP_LINEAR,[En]:i.LINEAR,[ep]:i.LINEAR_MIPMAP_NEAREST,[$i]:i.LINEAR_MIPMAP_LINEAR},gt={[fp]:i.NEVER,[yp]:i.ALWAYS,[pp]:i.LESS,[Qu]:i.LEQUAL,[mp]:i.EQUAL,[xp]:i.GEQUAL,[gp]:i.GREATER,[_p]:i.NOTEQUAL};function Y(R,w,G){if(G?(i.texParameteri(R,i.TEXTURE_WRAP_S,Q[w.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Q[w.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Q[w.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,it[w.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,it[w.minFilter])):(i.texParameteri(R,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(R,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(w.wrapS!==In||w.wrapT!==In)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(R,i.TEXTURE_MAG_FILTER,T(w.magFilter)),i.texParameteri(R,i.TEXTURE_MIN_FILTER,T(w.minFilter)),w.minFilter!==cn&&w.minFilter!==En&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,gt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let ct=t.get("EXT_texture_filter_anisotropic");if(w.magFilter===cn||w.minFilter!==Va&&w.minFilter!==$i||w.type===xi&&t.has("OES_texture_float_linear")===!1||o===!1&&w.type===Mr&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(i.texParameterf(R,ct.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function et(R,w){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",S));let ct=w.source,ot=d.get(ct);ot===void 0&&(ot={},d.set(ct,ot));let at=N(w);if(at!==R.__cacheKey){ot[at]===void 0&&(ot[at]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ot[at].usedTimes++;let Rt=ot[R.__cacheKey];Rt!==void 0&&(ot[R.__cacheKey].usedTimes--,Rt.usedTimes===0&&E(w)),R.__cacheKey=at,R.__webglTexture=ot[at].texture}return G}function ft(R,w,G){let ct=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ct=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ct=i.TEXTURE_3D);let ot=et(R,w),at=w.source;e.bindTexture(ct,R.__webglTexture,i.TEXTURE0+G);let Rt=n.get(at);if(at.version!==Rt.__version||ot===!0){e.activeTexture(i.TEXTURE0+G);let xt=me.getPrimaries(me.workingColorSpace),Mt=w.colorSpace===bn?null:me.getPrimaries(w.colorSpace),Nt=w.colorSpace===bn||xt===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let Xt=p(w)&&m(w.image)===!1,rt=_(w.image,Xt,!1,s.maxTextureSize);rt=Vt(w,rt);let ie=m(rt)||o,I=r.convert(w.format,w.colorSpace),st=r.convert(w.type),mt=M(w.internalFormat,I,st,w.colorSpace,w.isVideoTexture);Y(ct,w,ie);let lt,Ct=w.mipmaps,Qt=o&&w.isVideoTexture!==!0&&mt!==Ju,se=Rt.__version===void 0||ot===!0,Jt=b(w,rt,ie);if(w.isDepthTexture)mt=i.DEPTH_COMPONENT,o?w.type===xi?mt=i.DEPTH_COMPONENT32F:w.type===_i?mt=i.DEPTH_COMPONENT24:w.type===qi?mt=i.DEPTH24_STENCIL8:mt=i.DEPTH_COMPONENT16:w.type===xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Yi&&mt===i.DEPTH_COMPONENT&&w.type!==_l&&w.type!==_i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=_i,st=r.convert(w.type)),w.format===Hs&&mt===i.DEPTH_COMPONENT&&(mt=i.DEPTH_STENCIL,w.type!==qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=qi,st=r.convert(w.type))),se&&(Qt?e.texStorage2D(i.TEXTURE_2D,1,mt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,mt,rt.width,rt.height,0,I,st,null));else if(w.isDataTexture)if(Ct.length>0&&ie){Qt&&se&&e.texStorage2D(i.TEXTURE_2D,Jt,mt,Ct[0].width,Ct[0].height);for(let pt=0,U=Ct.length;pt<U;pt++)lt=Ct[pt],Qt?e.texSubImage2D(i.TEXTURE_2D,pt,0,0,lt.width,lt.height,I,st,lt.data):e.texImage2D(i.TEXTURE_2D,pt,mt,lt.width,lt.height,0,I,st,lt.data);w.generateMipmaps=!1}else Qt?(se&&e.texStorage2D(i.TEXTURE_2D,Jt,mt,rt.width,rt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,I,st,rt.data)):e.texImage2D(i.TEXTURE_2D,0,mt,rt.width,rt.height,0,I,st,rt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Qt&&se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Jt,mt,Ct[0].width,Ct[0].height,rt.depth);for(let pt=0,U=Ct.length;pt<U;pt++)lt=Ct[pt],w.format!==Dn?I!==null?Qt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,lt.width,lt.height,rt.depth,I,lt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pt,mt,lt.width,lt.height,rt.depth,0,lt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,lt.width,lt.height,rt.depth,I,st,lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,pt,mt,lt.width,lt.height,rt.depth,0,I,st,lt.data)}else{Qt&&se&&e.texStorage2D(i.TEXTURE_2D,Jt,mt,Ct[0].width,Ct[0].height);for(let pt=0,U=Ct.length;pt<U;pt++)lt=Ct[pt],w.format!==Dn?I!==null?Qt?e.compressedTexSubImage2D(i.TEXTURE_2D,pt,0,0,lt.width,lt.height,I,lt.data):e.compressedTexImage2D(i.TEXTURE_2D,pt,mt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?e.texSubImage2D(i.TEXTURE_2D,pt,0,0,lt.width,lt.height,I,st,lt.data):e.texImage2D(i.TEXTURE_2D,pt,mt,lt.width,lt.height,0,I,st,lt.data)}else if(w.isDataArrayTexture)Qt?(se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Jt,mt,rt.width,rt.height,rt.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,I,st,rt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,mt,rt.width,rt.height,rt.depth,0,I,st,rt.data);else if(w.isData3DTexture)Qt?(se&&e.texStorage3D(i.TEXTURE_3D,Jt,mt,rt.width,rt.height,rt.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,I,st,rt.data)):e.texImage3D(i.TEXTURE_3D,0,mt,rt.width,rt.height,rt.depth,0,I,st,rt.data);else if(w.isFramebufferTexture){if(se)if(Qt)e.texStorage2D(i.TEXTURE_2D,Jt,mt,rt.width,rt.height);else{let pt=rt.width,U=rt.height;for(let ut=0;ut<Jt;ut++)e.texImage2D(i.TEXTURE_2D,ut,mt,pt,U,0,I,st,null),pt>>=1,U>>=1}}else if(Ct.length>0&&ie){Qt&&se&&e.texStorage2D(i.TEXTURE_2D,Jt,mt,Ct[0].width,Ct[0].height);for(let pt=0,U=Ct.length;pt<U;pt++)lt=Ct[pt],Qt?e.texSubImage2D(i.TEXTURE_2D,pt,0,0,I,st,lt):e.texImage2D(i.TEXTURE_2D,pt,mt,I,st,lt);w.generateMipmaps=!1}else Qt?(se&&e.texStorage2D(i.TEXTURE_2D,Jt,mt,rt.width,rt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,I,st,rt)):e.texImage2D(i.TEXTURE_2D,0,mt,I,st,rt);y(w,ie)&&x(ct),Rt.__version=at.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function vt(R,w,G){if(w.image.length!==6)return;let ct=et(R,w),ot=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+G);let at=n.get(ot);if(ot.version!==at.__version||ct===!0){e.activeTexture(i.TEXTURE0+G);let Rt=me.getPrimaries(me.workingColorSpace),xt=w.colorSpace===bn?null:me.getPrimaries(w.colorSpace),Mt=w.colorSpace===bn||Rt===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let Nt=w.isCompressedTexture||w.image[0].isCompressedTexture,Xt=w.image[0]&&w.image[0].isDataTexture,rt=[];for(let pt=0;pt<6;pt++)!Nt&&!Xt?rt[pt]=_(w.image[pt],!1,!0,s.maxCubemapSize):rt[pt]=Xt?w.image[pt].image:w.image[pt],rt[pt]=Vt(w,rt[pt]);let ie=rt[0],I=m(ie)||o,st=r.convert(w.format,w.colorSpace),mt=r.convert(w.type),lt=M(w.internalFormat,st,mt,w.colorSpace),Ct=o&&w.isVideoTexture!==!0,Qt=at.__version===void 0||ct===!0,se=b(w,ie,I);Y(i.TEXTURE_CUBE_MAP,w,I);let Jt;if(Nt){Ct&&Qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,se,lt,ie.width,ie.height);for(let pt=0;pt<6;pt++){Jt=rt[pt].mipmaps;for(let U=0;U<Jt.length;U++){let ut=Jt[U];w.format!==Dn?st!==null?Ct?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,U,0,0,ut.width,ut.height,st,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,U,lt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ct?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,U,0,0,ut.width,ut.height,st,mt,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,U,lt,ut.width,ut.height,0,st,mt,ut.data)}}}else{Jt=w.mipmaps,Ct&&Qt&&(Jt.length>0&&se++,e.texStorage2D(i.TEXTURE_CUBE_MAP,se,lt,rt[0].width,rt[0].height));for(let pt=0;pt<6;pt++)if(Xt){Ct?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,rt[pt].width,rt[pt].height,st,mt,rt[pt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,lt,rt[pt].width,rt[pt].height,0,st,mt,rt[pt].data);for(let U=0;U<Jt.length;U++){let dt=Jt[U].image[pt].image;Ct?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,U+1,0,0,dt.width,dt.height,st,mt,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,U+1,lt,dt.width,dt.height,0,st,mt,dt.data)}}else{Ct?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,st,mt,rt[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,lt,st,mt,rt[pt]);for(let U=0;U<Jt.length;U++){let ut=Jt[U];Ct?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,U+1,0,0,st,mt,ut.image[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,U+1,lt,st,mt,ut.image[pt])}}}y(w,I)&&x(i.TEXTURE_CUBE_MAP),at.__version=ot.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function bt(R,w,G,ct,ot,at){let Rt=r.convert(G.format,G.colorSpace),xt=r.convert(G.type),Mt=M(G.internalFormat,Rt,xt,G.colorSpace);if(!n.get(w).__hasExternalTextures){let Xt=Math.max(1,w.width>>at),rt=Math.max(1,w.height>>at);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,at,Mt,Xt,rt,w.depth,0,Rt,xt,null):e.texImage2D(ot,at,Mt,Xt,rt,0,Rt,xt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),At(w)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,ot,n.get(G).__webglTexture,0,kt(w)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ct,ot,n.get(G).__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(R,w,G){if(i.bindRenderbuffer(i.RENDERBUFFER,R),w.depthBuffer&&!w.stencilBuffer){let ct=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(G||At(w)){let ot=w.depthTexture;ot&&ot.isDepthTexture&&(ot.type===xi?ct=i.DEPTH_COMPONENT32F:ot.type===_i&&(ct=i.DEPTH_COMPONENT24));let at=kt(w);At(w)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,ct,w.width,w.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,at,ct,w.width,w.height)}else i.renderbufferStorage(i.RENDERBUFFER,ct,w.width,w.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,R)}else if(w.depthBuffer&&w.stencilBuffer){let ct=kt(w);G&&At(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,i.DEPTH24_STENCIL8,w.width,w.height):At(w)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,i.DEPTH24_STENCIL8,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,R)}else{let ct=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ot=0;ot<ct.length;ot++){let at=ct[ot],Rt=r.convert(at.format,at.colorSpace),xt=r.convert(at.type),Mt=M(at.internalFormat,Rt,xt,at.colorSpace),Nt=kt(w);G&&At(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,Mt,w.width,w.height):At(w)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Nt,Mt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ht(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),k(w.depthTexture,0);let ct=n.get(w.depthTexture).__webglTexture,ot=kt(w);if(w.depthTexture.format===Yi)At(w)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0);else if(w.depthTexture.format===Hs)At(w)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function It(R){let w=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ht(w.__webglFramebuffer,R)}else if(G){w.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[ct]),w.__webglDepthbuffer[ct]=i.createRenderbuffer(),Ft(w.__webglDepthbuffer[ct],R,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=i.createRenderbuffer(),Ft(w.__webglDepthbuffer,R,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(R,w,G){let ct=n.get(R);w!==void 0&&bt(ct.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&It(R)}function F(R){let w=R.texture,G=n.get(R),ct=n.get(w);R.addEventListener("dispose",P),R.isWebGLMultipleRenderTargets!==!0&&(ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture()),ct.__version=w.version,a.memory.textures++);let ot=R.isWebGLCubeRenderTarget===!0,at=R.isWebGLMultipleRenderTargets===!0,Rt=m(R)||o;if(ot){G.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(o&&w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[xt]=[];for(let Mt=0;Mt<w.mipmaps.length;Mt++)G.__webglFramebuffer[xt][Mt]=i.createFramebuffer()}else G.__webglFramebuffer[xt]=i.createFramebuffer()}else{if(o&&w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let xt=0;xt<w.mipmaps.length;xt++)G.__webglFramebuffer[xt]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(at)if(s.drawBuffers){let xt=R.texture;for(let Mt=0,Nt=xt.length;Mt<Nt;Mt++){let Xt=n.get(xt[Mt]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&At(R)===!1){let xt=at?w:[w];G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Mt=0;Mt<xt.length;Mt++){let Nt=xt[Mt];G.__webglColorRenderbuffer[Mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[Mt]);let Xt=r.convert(Nt.format,Nt.colorSpace),rt=r.convert(Nt.type),ie=M(Nt.internalFormat,Xt,rt,Nt.colorSpace,R.isXRRenderTarget===!0),I=kt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,I,ie,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,G.__webglColorRenderbuffer[Mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Ft(G.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),Y(i.TEXTURE_CUBE_MAP,w,Rt);for(let xt=0;xt<6;xt++)if(o&&w.mipmaps&&w.mipmaps.length>0)for(let Mt=0;Mt<w.mipmaps.length;Mt++)bt(G.__webglFramebuffer[xt][Mt],R,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Mt);else bt(G.__webglFramebuffer[xt],R,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);y(w,Rt)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){let xt=R.texture;for(let Mt=0,Nt=xt.length;Mt<Nt;Mt++){let Xt=xt[Mt],rt=n.get(Xt);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),Y(i.TEXTURE_2D,Xt,Rt),bt(G.__webglFramebuffer,R,Xt,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,0),y(Xt,Rt)&&x(i.TEXTURE_2D)}e.unbindTexture()}else{let xt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?xt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(xt,ct.__webglTexture),Y(xt,w,Rt),o&&w.mipmaps&&w.mipmaps.length>0)for(let Mt=0;Mt<w.mipmaps.length;Mt++)bt(G.__webglFramebuffer[Mt],R,w,i.COLOR_ATTACHMENT0,xt,Mt);else bt(G.__webglFramebuffer,R,w,i.COLOR_ATTACHMENT0,xt,0);y(w,Rt)&&x(xt),e.unbindTexture()}R.depthBuffer&&It(R)}function $t(R){let w=m(R)||o,G=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ct=0,ot=G.length;ct<ot;ct++){let at=G[ct];if(y(at,w)){let Rt=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,xt=n.get(at).__webglTexture;e.bindTexture(Rt,xt),x(Rt),e.unbindTexture()}}}function Tt(R){if(o&&R.samples>0&&At(R)===!1){let w=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],G=R.width,ct=R.height,ot=i.COLOR_BUFFER_BIT,at=[],Rt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(R),Mt=R.isWebGLMultipleRenderTargets===!0;if(Mt)for(let Nt=0;Nt<w.length;Nt++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let Nt=0;Nt<w.length;Nt++){at.push(i.COLOR_ATTACHMENT0+Nt),R.depthBuffer&&at.push(Rt);let Xt=xt.__ignoreDepthValues!==void 0?xt.__ignoreDepthValues:!1;if(Xt===!1&&(R.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),Mt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[Nt]),Xt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Rt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Rt])),Mt){let rt=n.get(w[Nt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,rt,0)}i.blitFramebuffer(0,0,G,ct,0,0,G,ct,ot,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,at)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Mt)for(let Nt=0;Nt<w.length;Nt++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,xt.__webglColorRenderbuffer[Nt]);let Xt=n.get(w[Nt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,Xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}}function kt(R){return Math.min(s.maxSamples,R.samples)}function At(R){let w=n.get(R);return o&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ee(R){let w=a.render.frame;h.get(R)!==w&&(h.set(R,w),R.update())}function Vt(R,w){let G=R.colorSpace,ct=R.format,ot=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Cc||G!==ri&&G!==bn&&(me.getTransfer(G)===be?o===!1?t.has("EXT_sRGB")===!0&&ct===Dn?(R.format=Cc,R.minFilter=En,R.generateMipmaps=!1):w=zo.sRGBToLinear(w):(ct!==Dn||ot!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}this.allocateTextureUnit=L,this.resetTextureUnits=H,this.setTexture2D=k,this.setTexture2DArray=q,this.setTexture3D=K,this.setTextureCube=z,this.rebindTextures=Et,this.setupRenderTarget=F,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=At}function E_(i,t,e){let n=e.isWebGL2;function s(r,a=bn){let o,c=me.getTransfer(a);if(r===Mi)return i.UNSIGNED_BYTE;if(r===Xu)return i.UNSIGNED_SHORT_4_4_4_4;if(r===qu)return i.UNSIGNED_SHORT_5_5_5_1;if(r===np)return i.BYTE;if(r===ip)return i.SHORT;if(r===_l)return i.UNSIGNED_SHORT;if(r===Wu)return i.INT;if(r===_i)return i.UNSIGNED_INT;if(r===xi)return i.FLOAT;if(r===Mr)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===sp)return i.ALPHA;if(r===Dn)return i.RGBA;if(r===rp)return i.LUMINANCE;if(r===op)return i.LUMINANCE_ALPHA;if(r===Yi)return i.DEPTH_COMPONENT;if(r===Hs)return i.DEPTH_STENCIL;if(r===Cc)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===ap)return i.RED;if(r===Yu)return i.RED_INTEGER;if(r===cp)return i.RG;if(r===Zu)return i.RG_INTEGER;if(r===$u)return i.RGBA_INTEGER;if(r===Wa||r===Xa||r===qa||r===Ya)if(c===be)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Wa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Xa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===qa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ya)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Wa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Xa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===qa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ya)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===hh||r===uh||r===dh||r===fh)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===hh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===uh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===dh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===fh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ju)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ph||r===mh)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===ph)return c===be?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===mh)return c===be?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===gh||r===_h||r===xh||r===yh||r===vh||r===Mh||r===Eh||r===bh||r===Sh||r===wh||r===Th||r===Ah||r===Rh||r===Ch)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===gh)return c===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===_h)return c===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===xh)return c===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===yh)return c===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===vh)return c===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Mh)return c===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Eh)return c===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===bh)return c===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Sh)return c===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===wh)return c===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Th)return c===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ah)return c===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Rh)return c===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ch)return c===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Za||r===Ph||r===Lh)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Za)return c===be?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ph)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Lh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===lp||r===Ih||r===Dh||r===Uh)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Za)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Ih)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Dh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Uh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qi?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Vc=class extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},le=class extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}},b_={type:"move"},_r=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(b_)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new le;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Wc=class extends qn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,_=e.getContextAttributes(),m=null,p=null,y=[],x=[],M=new nt,b=null,T=new tn;T.layers.enable(1),T.viewport=new we;let S=new tn;S.layers.enable(2),S.viewport=new we;let P=[T,S],v=new Vc;v.layers.enable(1),v.layers.enable(2);let E=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let et=y[Y];return et===void 0&&(et=new _r,y[Y]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Y){let et=y[Y];return et===void 0&&(et=new _r,y[Y]=et),et.getGripSpace()},this.getHand=function(Y){let et=y[Y];return et===void 0&&(et=new _r,y[Y]=et),et.getHandSpace()};function O(Y){let et=x.indexOf(Y.inputSource);if(et===-1)return;let ft=y[et];ft!==void 0&&(ft.update(Y.inputSource,Y.frame,l||a),ft.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",L);for(let Y=0;Y<y.length;Y++){let et=x[Y];et!==null&&(x[Y]=null,y[Y].disconnect(et))}E=null,D=null,t.setRenderTarget(m),f=null,d=null,u=null,s=null,p=null,gt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",H),s.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(M),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let et={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new oi(f.framebufferWidth,f.framebufferHeight,{format:Dn,type:Mi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let et=null,ft=null,vt=null;_.depth&&(vt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=_.stencil?Hs:Yi,ft=_.stencil?qi:_i);let bt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(bt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new oi(d.textureWidth,d.textureHeight,{format:Dn,type:Mi,depthTexture:new $o(d.textureWidth,d.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});let Ft=t.properties.get(p);Ft.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),gt.setContext(s),gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(Y){for(let et=0;et<Y.removed.length;et++){let ft=Y.removed[et],vt=x.indexOf(ft);vt>=0&&(x[vt]=null,y[vt].disconnect(ft))}for(let et=0;et<Y.added.length;et++){let ft=Y.added[et],vt=x.indexOf(ft);if(vt===-1){for(let Ft=0;Ft<y.length;Ft++)if(Ft>=x.length){x.push(ft),vt=Ft;break}else if(x[Ft]===null){x[Ft]=ft,vt=Ft;break}if(vt===-1)break}let bt=y[vt];bt&&bt.connect(ft)}}let N=new C,k=new C;function q(Y,et,ft){N.setFromMatrixPosition(et.matrixWorld),k.setFromMatrixPosition(ft.matrixWorld);let vt=N.distanceTo(k),bt=et.projectionMatrix.elements,Ft=ft.projectionMatrix.elements,Ht=bt[14]/(bt[10]-1),It=bt[14]/(bt[10]+1),Et=(bt[9]+1)/bt[5],F=(bt[9]-1)/bt[5],$t=(bt[8]-1)/bt[0],Tt=(Ft[8]+1)/Ft[0],kt=Ht*$t,At=Ht*Tt,Ee=vt/(-$t+Tt),Vt=Ee*-$t;et.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Vt),Y.translateZ(Ee),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();let R=Ht+Ee,w=It+Ee,G=kt-Vt,ct=At+(vt-Vt),ot=Et*It/w*R,at=F*It/w*R;Y.projectionMatrix.makePerspective(G,ct,ot,at,R,w),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function K(Y,et){et===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(et.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;v.near=S.near=T.near=Y.near,v.far=S.far=T.far=Y.far,(E!==v.near||D!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,D=v.far);let et=Y.parent,ft=v.cameras;K(v,et);for(let vt=0;vt<ft.length;vt++)K(ft[vt],et);ft.length===2?q(v,T,S):v.projectionMatrix.copy(T.projectionMatrix),z(Y,v,et)};function z(Y,et,ft){ft===null?Y.matrix.copy(et.matrixWorld):(Y.matrix.copy(ft.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(et.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Er*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)};let Q=null;function it(Y,et){if(h=et.getViewerPose(l||a),g=et,h!==null){let ft=h.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let vt=!1;ft.length!==v.cameras.length&&(v.cameras.length=0,vt=!0);for(let bt=0;bt<ft.length;bt++){let Ft=ft[bt],Ht=null;if(f!==null)Ht=f.getViewport(Ft);else{let Et=u.getViewSubImage(d,Ft);Ht=Et.viewport,bt===0&&(t.setRenderTargetTextures(p,Et.colorTexture,d.ignoreDepthValues?void 0:Et.depthStencilTexture),t.setRenderTarget(p))}let It=P[bt];It===void 0&&(It=new tn,It.layers.enable(bt),It.viewport=new we,P[bt]=It),It.matrix.fromArray(Ft.transform.matrix),It.matrix.decompose(It.position,It.quaternion,It.scale),It.projectionMatrix.fromArray(Ft.projectionMatrix),It.projectionMatrixInverse.copy(It.projectionMatrix).invert(),It.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),bt===0&&(v.matrix.copy(It.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),vt===!0&&v.cameras.push(It)}}for(let ft=0;ft<y.length;ft++){let vt=x[ft],bt=y[ft];vt!==null&&bt!==void 0&&bt.update(vt,et,l||a)}Q&&Q(Y,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}let gt=new rd;gt.setAnimationLoop(it),this.setAnimationLoop=function(Y){Q=Y},this.dispose=function(){}}};function S_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,sd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,y,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===He&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===He&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let x=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===He&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function w_(i,t,e,n){let s={},r={},a=[],o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,x){let M=x.program;n.uniformBlockBinding(y,M)}function l(y,x){let M=s[y.id];M===void 0&&(g(y),M=h(y),s[y.id]=M,y.addEventListener("dispose",m));let b=x.program;n.updateUBOMapping(y,b);let T=t.render.frame;r[y.id]!==T&&(d(y),r[y.id]=T)}function h(y){let x=u();y.__bindingPointIndex=x;let M=i.createBuffer(),b=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,b,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,M),M}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let x=s[y.id],M=y.uniforms,b=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,S=M.length;T<S;T++){let P=Array.isArray(M[T])?M[T]:[M[T]];for(let v=0,E=P.length;v<E;v++){let D=P[v];if(f(D,T,v,b)===!0){let O=D.__offset,H=Array.isArray(D.value)?D.value:[D.value],L=0;for(let N=0;N<H.length;N++){let k=H[N],q=_(k);typeof k=="number"||typeof k=="boolean"?(D.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,O+L,D.__data)):k.isMatrix3?(D.__data[0]=k.elements[0],D.__data[1]=k.elements[1],D.__data[2]=k.elements[2],D.__data[3]=0,D.__data[4]=k.elements[3],D.__data[5]=k.elements[4],D.__data[6]=k.elements[5],D.__data[7]=0,D.__data[8]=k.elements[6],D.__data[9]=k.elements[7],D.__data[10]=k.elements[8],D.__data[11]=0):(k.toArray(D.__data,L),L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,x,M,b){let T=y.value,S=x+"_"+M;if(b[S]===void 0)return typeof T=="number"||typeof T=="boolean"?b[S]=T:b[S]=T.clone(),!0;{let P=b[S];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return b[S]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(y){let x=y.uniforms,M=0,b=16;for(let S=0,P=x.length;S<P;S++){let v=Array.isArray(x[S])?x[S]:[x[S]];for(let E=0,D=v.length;E<D;E++){let O=v[E],H=Array.isArray(O.value)?O.value:[O.value];for(let L=0,N=H.length;L<N;L++){let k=H[L],q=_(k),K=M%b;K!==0&&b-K<q.boundary&&(M+=b-K),O.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=q.storage}}}let T=M%b;return T>0&&(M+=b-T),y.__size=M,y.__cache={},this}function _(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){let x=y.target;x.removeEventListener("dispose",m);let M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Tr=class{constructor(t={}){let{canvas:e=Up(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let f=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ue,this._useLegacyLights=!1,this.toneMapping=vi,this.toneMappingExposure=1;let x=this,M=!1,b=0,T=0,S=null,P=-1,v=null,E=new we,D=new we,O=null,H=new Ut(0),L=0,N=e.width,k=e.height,q=1,K=null,z=null,Q=new we(0,0,N,k),it=new we(0,0,N,k),gt=!1,Y=new wr,et=!1,ft=!1,vt=null,bt=new ue,Ft=new nt,Ht=new C,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Et(){return S===null?q:1}let F=n;function $t(A,B){for(let W=0;W<A.length;W++){let Z=A[W],V=e.getContext(Z,B);if(V!==null)return V}return null}try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${pl}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",U,!1),e.addEventListener("webglcontextcreationerror",ut,!1),F===null){let B=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&B.shift(),F=$t(B,A),F===null)throw $t(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Tt,kt,At,Ee,Vt,R,w,G,ct,ot,at,Rt,xt,Mt,Nt,Xt,rt,ie,I,st,mt,lt,Ct,Qt;function se(){Tt=new Wg(F),kt=new Bg(F,Tt,t),Tt.init(kt),lt=new E_(F,Tt,kt),At=new v_(F,Tt,kt),Ee=new Yg(F),Vt=new c_,R=new M_(F,Tt,At,Vt,kt,lt,Ee),w=new zg(x),G=new Vg(x),ct=new em(F,kt),Ct=new Og(F,Tt,ct,kt),ot=new Xg(F,ct,Ee,Ct),at=new Kg(F,ot,ct,Ee),I=new Jg(F,kt,R),Xt=new Hg(Vt),Rt=new a_(x,w,G,Tt,kt,Ct,Xt),xt=new S_(x,Vt),Mt=new h_,Nt=new g_(Tt,kt),ie=new Ng(x,w,G,At,at,d,c),rt=new y_(x,at,kt),Qt=new w_(F,Ee,kt,At),st=new Fg(F,Tt,Ee,kt),mt=new qg(F,Tt,Ee,kt),Ee.programs=Rt.programs,x.capabilities=kt,x.extensions=Tt,x.properties=Vt,x.renderLists=Mt,x.shadowMap=rt,x.state=At,x.info=Ee}se();let Jt=new Wc(x,F);this.xr=Jt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let A=Tt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Tt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(A){A!==void 0&&(q=A,this.setSize(N,k,!1))},this.getSize=function(A){return A.set(N,k)},this.setSize=function(A,B,W=!0){if(Jt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=A,k=B,e.width=Math.floor(A*q),e.height=Math.floor(B*q),W===!0&&(e.style.width=A+"px",e.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(N*q,k*q).floor()},this.setDrawingBufferSize=function(A,B,W){N=A,k=B,q=W,e.width=Math.floor(A*W),e.height=Math.floor(B*W),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(E)},this.getViewport=function(A){return A.copy(Q)},this.setViewport=function(A,B,W,Z){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,B,W,Z),At.viewport(E.copy(Q).multiplyScalar(q).floor())},this.getScissor=function(A){return A.copy(it)},this.setScissor=function(A,B,W,Z){A.isVector4?it.set(A.x,A.y,A.z,A.w):it.set(A,B,W,Z),At.scissor(D.copy(it).multiplyScalar(q).floor())},this.getScissorTest=function(){return gt},this.setScissorTest=function(A){At.setScissorTest(gt=A)},this.setOpaqueSort=function(A){K=A},this.setTransparentSort=function(A){z=A},this.getClearColor=function(A){return A.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(A=!0,B=!0,W=!0){let Z=0;if(A){let V=!1;if(S!==null){let yt=S.texture.format;V=yt===$u||yt===Zu||yt===Yu}if(V){let yt=S.texture.type,Lt=yt===Mi||yt===_i||yt===_l||yt===qi||yt===Xu||yt===qu,Bt=ie.getClearColor(),Gt=ie.getClearAlpha(),Kt=Bt.r,Wt=Bt.g,qt=Bt.b;Lt?(f[0]=Kt,f[1]=Wt,f[2]=qt,f[3]=Gt,F.clearBufferuiv(F.COLOR,0,f)):(g[0]=Kt,g[1]=Wt,g[2]=qt,g[3]=Gt,F.clearBufferiv(F.COLOR,0,g))}else Z|=F.COLOR_BUFFER_BIT}B&&(Z|=F.DEPTH_BUFFER_BIT),W&&(Z|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",U,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),Mt.dispose(),Nt.dispose(),Vt.dispose(),w.dispose(),G.dispose(),at.dispose(),Ct.dispose(),Qt.dispose(),Rt.dispose(),Jt.dispose(),Jt.removeEventListener("sessionstart",sn),Jt.removeEventListener("sessionend",ye),vt&&(vt.dispose(),vt=null),rn.stop()};function pt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let A=Ee.autoReset,B=rt.enabled,W=rt.autoUpdate,Z=rt.needsUpdate,V=rt.type;se(),Ee.autoReset=A,rt.enabled=B,rt.autoUpdate=W,rt.needsUpdate=Z,rt.type=V}function ut(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function dt(A){let B=A.target;B.removeEventListener("dispose",dt),Dt(B)}function Dt(A){Pt(A),Vt.remove(A)}function Pt(A){let B=Vt.get(A).programs;B!==void 0&&(B.forEach(function(W){Rt.releaseProgram(W)}),A.isShaderMaterial&&Rt.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,W,Z,V,yt){B===null&&(B=It);let Lt=V.isMesh&&V.matrixWorld.determinant()<0,Bt=yf(A,B,W,Z,V);At.setMaterial(Z,Lt);let Gt=W.index,Kt=1;if(Z.wireframe===!0){if(Gt=ot.getWireframeAttribute(W),Gt===void 0)return;Kt=2}let Wt=W.drawRange,qt=W.attributes.position,De=Wt.start*Kt,gn=(Wt.start+Wt.count)*Kt;yt!==null&&(De=Math.max(De,yt.start*Kt),gn=Math.min(gn,(yt.start+yt.count)*Kt)),Gt!==null?(De=Math.max(De,0),gn=Math.min(gn,Gt.count)):qt!=null&&(De=Math.max(De,0),gn=Math.min(gn,qt.count));let Xe=gn-De;if(Xe<0||Xe===1/0)return;Ct.setup(V,Z,Bt,W,Gt);let Kn,Re=st;if(Gt!==null&&(Kn=ct.get(Gt),Re=mt,Re.setIndex(Kn)),V.isMesh)Z.wireframe===!0?(At.setLineWidth(Z.wireframeLinewidth*Et()),Re.setMode(F.LINES)):Re.setMode(F.TRIANGLES);else if(V.isLine){let te=Z.linewidth;te===void 0&&(te=1),At.setLineWidth(te*Et()),V.isLineSegments?Re.setMode(F.LINES):V.isLineLoop?Re.setMode(F.LINE_LOOP):Re.setMode(F.LINE_STRIP)}else V.isPoints?Re.setMode(F.POINTS):V.isSprite&&Re.setMode(F.TRIANGLES);if(V.isBatchedMesh)Re.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)Re.renderInstances(De,Xe,V.count);else if(W.isInstancedBufferGeometry){let te=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ha=Math.min(W.instanceCount,te);Re.renderInstances(De,Xe,Ha)}else Re.render(De,Xe)};function oe(A,B,W){A.transparent===!0&&A.side===Te&&A.forceSinglePass===!1?(A.side=He,A.needsUpdate=!0,no(A,B,W),A.side=Ei,A.needsUpdate=!0,no(A,B,W),A.side=Te):no(A,B,W)}this.compile=function(A,B,W=null){W===null&&(W=A),m=Nt.get(W),m.init(),y.push(m),W.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),A!==W&&A.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(x._useLegacyLights);let Z=new Set;return A.traverse(function(V){let yt=V.material;if(yt)if(Array.isArray(yt))for(let Lt=0;Lt<yt.length;Lt++){let Bt=yt[Lt];oe(Bt,W,V),Z.add(Bt)}else oe(yt,W,V),Z.add(yt)}),y.pop(),m=null,Z},this.compileAsync=function(A,B,W=null){let Z=this.compile(A,B,W);return new Promise(V=>{function yt(){if(Z.forEach(function(Lt){Vt.get(Lt).currentProgram.isReady()&&Z.delete(Lt)}),Z.size===0){V(A);return}setTimeout(yt,10)}Tt.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let ce=null;function We(A){ce&&ce(A)}function sn(){rn.stop()}function ye(){rn.start()}let rn=new rd;rn.setAnimationLoop(We),typeof self<"u"&&rn.setContext(self),this.setAnimationLoop=function(A){ce=A,Jt.setAnimationLoop(A),A===null?rn.stop():rn.start()},Jt.addEventListener("sessionstart",sn),Jt.addEventListener("sessionend",ye),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Jt.enabled===!0&&Jt.isPresenting===!0&&(Jt.cameraAutoUpdate===!0&&Jt.updateCamera(B),B=Jt.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,B,S),m=Nt.get(A,y.length),m.init(),y.push(m),bt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Y.setFromProjectionMatrix(bt),ft=this.localClippingEnabled,et=Xt.init(this.clippingPlanes,ft),_=Mt.get(A,p.length),_.init(),p.push(_),Wn(A,B,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(K,z),this.info.render.frame++,et===!0&&Xt.beginShadows();let W=m.state.shadowsArray;if(rt.render(W,A,B),et===!0&&Xt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ie.render(_,A),m.setupLights(x._useLegacyLights),B.isArrayCamera){let Z=B.cameras;for(let V=0,yt=Z.length;V<yt;V++){let Lt=Z[V];Kl(_,A,Lt,Lt.viewport)}}else Kl(_,A,B);S!==null&&(R.updateMultisampleRenderTarget(S),R.updateRenderTargetMipmap(S)),A.isScene===!0&&A.onAfterRender(x,A,B),Ct.resetDefaultState(),P=-1,v=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Wn(A,B,W,Z){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Y.intersectsSprite(A)){Z&&Ht.setFromMatrixPosition(A.matrixWorld).applyMatrix4(bt);let Lt=at.update(A),Bt=A.material;Bt.visible&&_.push(A,Lt,Bt,W,Ht.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Y.intersectsObject(A))){let Lt=at.update(A),Bt=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ht.copy(A.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Ht.copy(Lt.boundingSphere.center)),Ht.applyMatrix4(A.matrixWorld).applyMatrix4(bt)),Array.isArray(Bt)){let Gt=Lt.groups;for(let Kt=0,Wt=Gt.length;Kt<Wt;Kt++){let qt=Gt[Kt],De=Bt[qt.materialIndex];De&&De.visible&&_.push(A,Lt,De,W,Ht.z,qt)}}else Bt.visible&&_.push(A,Lt,Bt,W,Ht.z,null)}}let yt=A.children;for(let Lt=0,Bt=yt.length;Lt<Bt;Lt++)Wn(yt[Lt],B,W,Z)}function Kl(A,B,W,Z){let V=A.opaque,yt=A.transmissive,Lt=A.transparent;m.setupLightsView(W),et===!0&&Xt.setGlobalState(x.clippingPlanes,W),yt.length>0&&xf(V,yt,B,W),Z&&At.viewport(E.copy(Z)),V.length>0&&eo(V,B,W),yt.length>0&&eo(yt,B,W),Lt.length>0&&eo(Lt,B,W),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function xf(A,B,W,Z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;let yt=kt.isWebGL2;vt===null&&(vt=new oi(1,1,{generateMipmaps:!0,type:Tt.has("EXT_color_buffer_half_float")?Mr:Mi,minFilter:$i,samples:yt?4:0})),x.getDrawingBufferSize(Ft),yt?vt.setSize(Ft.x,Ft.y):vt.setSize(Ho(Ft.x),Ho(Ft.y));let Lt=x.getRenderTarget();x.setRenderTarget(vt),x.getClearColor(H),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();let Bt=x.toneMapping;x.toneMapping=vi,eo(A,W,Z),R.updateMultisampleRenderTarget(vt),R.updateRenderTargetMipmap(vt);let Gt=!1;for(let Kt=0,Wt=B.length;Kt<Wt;Kt++){let qt=B[Kt],De=qt.object,gn=qt.geometry,Xe=qt.material,Kn=qt.group;if(Xe.side===Te&&De.layers.test(Z.layers)){let Re=Xe.side;Xe.side=He,Xe.needsUpdate=!0,jl(De,W,Z,gn,Xe,Kn),Xe.side=Re,Xe.needsUpdate=!0,Gt=!0}}Gt===!0&&(R.updateMultisampleRenderTarget(vt),R.updateRenderTargetMipmap(vt)),x.setRenderTarget(Lt),x.setClearColor(H,L),x.toneMapping=Bt}function eo(A,B,W){let Z=B.isScene===!0?B.overrideMaterial:null;for(let V=0,yt=A.length;V<yt;V++){let Lt=A[V],Bt=Lt.object,Gt=Lt.geometry,Kt=Z===null?Lt.material:Z,Wt=Lt.group;Bt.layers.test(W.layers)&&jl(Bt,B,W,Gt,Kt,Wt)}}function jl(A,B,W,Z,V,yt){A.onBeforeRender(x,B,W,Z,V,yt),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(x,B,W,Z,A,yt),V.transparent===!0&&V.side===Te&&V.forceSinglePass===!1?(V.side=He,V.needsUpdate=!0,x.renderBufferDirect(W,B,Z,V,A,yt),V.side=Ei,V.needsUpdate=!0,x.renderBufferDirect(W,B,Z,V,A,yt),V.side=Te):x.renderBufferDirect(W,B,Z,V,A,yt),A.onAfterRender(x,B,W,Z,V,yt)}function no(A,B,W){B.isScene!==!0&&(B=It);let Z=Vt.get(A),V=m.state.lights,yt=m.state.shadowsArray,Lt=V.state.version,Bt=Rt.getParameters(A,V.state,yt,B,W),Gt=Rt.getProgramCacheKey(Bt),Kt=Z.programs;Z.environment=A.isMeshStandardMaterial?B.environment:null,Z.fog=B.fog,Z.envMap=(A.isMeshStandardMaterial?G:w).get(A.envMap||Z.environment),Kt===void 0&&(A.addEventListener("dispose",dt),Kt=new Map,Z.programs=Kt);let Wt=Kt.get(Gt);if(Wt!==void 0){if(Z.currentProgram===Wt&&Z.lightsStateVersion===Lt)return th(A,Bt),Wt}else Bt.uniforms=Rt.getUniforms(A),A.onBuild(W,Bt,x),A.onBeforeCompile(Bt,x),Wt=Rt.acquireProgram(Bt,Gt),Kt.set(Gt,Wt),Z.uniforms=Bt.uniforms;let qt=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(qt.clippingPlanes=Xt.uniform),th(A,Bt),Z.needsLights=Mf(A),Z.lightsStateVersion=Lt,Z.needsLights&&(qt.ambientLightColor.value=V.state.ambient,qt.lightProbe.value=V.state.probe,qt.directionalLights.value=V.state.directional,qt.directionalLightShadows.value=V.state.directionalShadow,qt.spotLights.value=V.state.spot,qt.spotLightShadows.value=V.state.spotShadow,qt.rectAreaLights.value=V.state.rectArea,qt.ltc_1.value=V.state.rectAreaLTC1,qt.ltc_2.value=V.state.rectAreaLTC2,qt.pointLights.value=V.state.point,qt.pointLightShadows.value=V.state.pointShadow,qt.hemisphereLights.value=V.state.hemi,qt.directionalShadowMap.value=V.state.directionalShadowMap,qt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,qt.spotShadowMap.value=V.state.spotShadowMap,qt.spotLightMatrix.value=V.state.spotLightMatrix,qt.spotLightMap.value=V.state.spotLightMap,qt.pointShadowMap.value=V.state.pointShadowMap,qt.pointShadowMatrix.value=V.state.pointShadowMatrix),Z.currentProgram=Wt,Z.uniformsList=null,Wt}function Ql(A){if(A.uniformsList===null){let B=A.currentProgram.getUniforms();A.uniformsList=Os.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function th(A,B){let W=Vt.get(A);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function yf(A,B,W,Z,V){B.isScene!==!0&&(B=It),R.resetTextureUnits();let yt=B.fog,Lt=Z.isMeshStandardMaterial?B.environment:null,Bt=S===null?x.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:ri,Gt=(Z.isMeshStandardMaterial?G:w).get(Z.envMap||Lt),Kt=Z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Wt=!!W.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),qt=!!W.morphAttributes.position,De=!!W.morphAttributes.normal,gn=!!W.morphAttributes.color,Xe=vi;Z.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Xe=x.toneMapping);let Kn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Re=Kn!==void 0?Kn.length:0,te=Vt.get(Z),Ha=m.state.lights;if(et===!0&&(ft===!0||A!==v)){let vn=A===v&&Z.id===P;Xt.setState(Z,A,vn)}let Le=!1;Z.version===te.__version?(te.needsLights&&te.lightsStateVersion!==Ha.state.version||te.outputColorSpace!==Bt||V.isBatchedMesh&&te.batching===!1||!V.isBatchedMesh&&te.batching===!0||V.isInstancedMesh&&te.instancing===!1||!V.isInstancedMesh&&te.instancing===!0||V.isSkinnedMesh&&te.skinning===!1||!V.isSkinnedMesh&&te.skinning===!0||V.isInstancedMesh&&te.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&te.instancingColor===!1&&V.instanceColor!==null||te.envMap!==Gt||Z.fog===!0&&te.fog!==yt||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==Xt.numPlanes||te.numIntersection!==Xt.numIntersection)||te.vertexAlphas!==Kt||te.vertexTangents!==Wt||te.morphTargets!==qt||te.morphNormals!==De||te.morphColors!==gn||te.toneMapping!==Xe||kt.isWebGL2===!0&&te.morphTargetsCount!==Re)&&(Le=!0):(Le=!0,te.__version=Z.version);let Fi=te.currentProgram;Le===!0&&(Fi=no(Z,B,V));let eh=!1,or=!1,za=!1,Ke=Fi.getUniforms(),Bi=te.uniforms;if(At.useProgram(Fi.program)&&(eh=!0,or=!0,za=!0),Z.id!==P&&(P=Z.id,or=!0),eh||v!==A){Ke.setValue(F,"projectionMatrix",A.projectionMatrix),Ke.setValue(F,"viewMatrix",A.matrixWorldInverse);let vn=Ke.map.cameraPosition;vn!==void 0&&vn.setValue(F,Ht.setFromMatrixPosition(A.matrixWorld)),kt.logarithmicDepthBuffer&&Ke.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Ke.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),v!==A&&(v=A,or=!0,za=!0)}if(V.isSkinnedMesh){Ke.setOptional(F,V,"bindMatrix"),Ke.setOptional(F,V,"bindMatrixInverse");let vn=V.skeleton;vn&&(kt.floatVertexTextures?(vn.boneTexture===null&&vn.computeBoneTexture(),Ke.setValue(F,"boneTexture",vn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(Ke.setOptional(F,V,"batchingTexture"),Ke.setValue(F,"batchingTexture",V._matricesTexture,R));let ka=W.morphAttributes;if((ka.position!==void 0||ka.normal!==void 0||ka.color!==void 0&&kt.isWebGL2===!0)&&I.update(V,W,Fi),(or||te.receiveShadow!==V.receiveShadow)&&(te.receiveShadow=V.receiveShadow,Ke.setValue(F,"receiveShadow",V.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Bi.envMap.value=Gt,Bi.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),or&&(Ke.setValue(F,"toneMappingExposure",x.toneMappingExposure),te.needsLights&&vf(Bi,za),yt&&Z.fog===!0&&xt.refreshFogUniforms(Bi,yt),xt.refreshMaterialUniforms(Bi,Z,q,k,vt),Os.upload(F,Ql(te),Bi,R)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Os.upload(F,Ql(te),Bi,R),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Ke.setValue(F,"center",V.center),Ke.setValue(F,"modelViewMatrix",V.modelViewMatrix),Ke.setValue(F,"normalMatrix",V.normalMatrix),Ke.setValue(F,"modelMatrix",V.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let vn=Z.uniformsGroups;for(let Ga=0,Ef=vn.length;Ga<Ef;Ga++)if(kt.isWebGL2){let nh=vn[Ga];Qt.update(nh,Fi),Qt.bind(nh,Fi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Fi}function vf(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function Mf(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(A,B,W){Vt.get(A.texture).__webglTexture=B,Vt.get(A.depthTexture).__webglTexture=W;let Z=Vt.get(A);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=W===void 0,Z.__autoAllocateDepthBuffer||Tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,B){let W=Vt.get(A);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,W=0){S=A,b=B,T=W;let Z=!0,V=null,yt=!1,Lt=!1;if(A){let Gt=Vt.get(A);Gt.__useDefaultFramebuffer!==void 0?(At.bindFramebuffer(F.FRAMEBUFFER,null),Z=!1):Gt.__webglFramebuffer===void 0?R.setupRenderTarget(A):Gt.__hasExternalTextures&&R.rebindTextures(A,Vt.get(A.texture).__webglTexture,Vt.get(A.depthTexture).__webglTexture);let Kt=A.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Lt=!0);let Wt=Vt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Wt[B])?V=Wt[B][W]:V=Wt[B],yt=!0):kt.isWebGL2&&A.samples>0&&R.useMultisampledRTT(A)===!1?V=Vt.get(A).__webglMultisampledFramebuffer:Array.isArray(Wt)?V=Wt[W]:V=Wt,E.copy(A.viewport),D.copy(A.scissor),O=A.scissorTest}else E.copy(Q).multiplyScalar(q).floor(),D.copy(it).multiplyScalar(q).floor(),O=gt;if(At.bindFramebuffer(F.FRAMEBUFFER,V)&&kt.drawBuffers&&Z&&At.drawBuffers(A,V),At.viewport(E),At.scissor(D),At.setScissorTest(O),yt){let Gt=Vt.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,Gt.__webglTexture,W)}else if(Lt){let Gt=Vt.get(A.texture),Kt=B||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Gt.__webglTexture,W||0,Kt)}P=-1},this.readRenderTargetPixels=function(A,B,W,Z,V,yt,Lt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=Vt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Lt!==void 0&&(Bt=Bt[Lt]),Bt){At.bindFramebuffer(F.FRAMEBUFFER,Bt);try{let Gt=A.texture,Kt=Gt.format,Wt=Gt.type;if(Kt!==Dn&&lt.convert(Kt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let qt=Wt===Mr&&(Tt.has("EXT_color_buffer_half_float")||kt.isWebGL2&&Tt.has("EXT_color_buffer_float"));if(Wt!==Mi&&lt.convert(Wt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Wt===xi&&(kt.isWebGL2||Tt.has("OES_texture_float")||Tt.has("WEBGL_color_buffer_float")))&&!qt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-Z&&W>=0&&W<=A.height-V&&F.readPixels(B,W,Z,V,lt.convert(Kt),lt.convert(Wt),yt)}finally{let Gt=S!==null?Vt.get(S).__webglFramebuffer:null;At.bindFramebuffer(F.FRAMEBUFFER,Gt)}}},this.copyFramebufferToTexture=function(A,B,W=0){let Z=Math.pow(2,-W),V=Math.floor(B.image.width*Z),yt=Math.floor(B.image.height*Z);R.setTexture2D(B,0),F.copyTexSubImage2D(F.TEXTURE_2D,W,0,0,A.x,A.y,V,yt),At.unbindTexture()},this.copyTextureToTexture=function(A,B,W,Z=0){let V=B.image.width,yt=B.image.height,Lt=lt.convert(W.format),Bt=lt.convert(W.type);R.setTexture2D(W,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment),B.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Z,A.x,A.y,V,yt,Lt,Bt,B.image.data):B.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Z,A.x,A.y,B.mipmaps[0].width,B.mipmaps[0].height,Lt,B.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,Z,A.x,A.y,Lt,Bt,B.image),Z===0&&W.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),At.unbindTexture()},this.copyTextureToTexture3D=function(A,B,W,Z,V=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let yt=A.max.x-A.min.x+1,Lt=A.max.y-A.min.y+1,Bt=A.max.z-A.min.z+1,Gt=lt.convert(Z.format),Kt=lt.convert(Z.type),Wt;if(Z.isData3DTexture)R.setTexture3D(Z,0),Wt=F.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)R.setTexture2DArray(Z,0),Wt=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Z.unpackAlignment);let qt=F.getParameter(F.UNPACK_ROW_LENGTH),De=F.getParameter(F.UNPACK_IMAGE_HEIGHT),gn=F.getParameter(F.UNPACK_SKIP_PIXELS),Xe=F.getParameter(F.UNPACK_SKIP_ROWS),Kn=F.getParameter(F.UNPACK_SKIP_IMAGES),Re=W.isCompressedTexture?W.mipmaps[V]:W.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,Re.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Re.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,A.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,A.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,A.min.z),W.isDataTexture||W.isData3DTexture?F.texSubImage3D(Wt,V,B.x,B.y,B.z,yt,Lt,Bt,Gt,Kt,Re.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Wt,V,B.x,B.y,B.z,yt,Lt,Bt,Gt,Re.data)):F.texSubImage3D(Wt,V,B.x,B.y,B.z,yt,Lt,Bt,Gt,Kt,Re),F.pixelStorei(F.UNPACK_ROW_LENGTH,qt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,De),F.pixelStorei(F.UNPACK_SKIP_PIXELS,gn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Xe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Kn),V===0&&Z.generateMipmaps&&F.generateMipmap(Wt),At.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),At.unbindTexture()},this.resetState=function(){b=0,T=0,S=null,At.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===xl?"display-p3":"srgb",e.unpackColorSpace=me.workingColorSpace===da?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ue?Zi:Ku}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Zi?Ue:ri}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Xc=class extends Tr{};Xc.prototype.isWebGL1Renderer=!0;var Jo=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ut(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Gs=class extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var Ar=class extends _e{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Rs=new ue,wu=new ue,To=[],Tu=new ai,T_=new ue,ur=new j,dr=new bi,Vs=class extends j{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ar(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,T_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ai),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Rs),Tu.copy(t.boundingBox).applyMatrix4(Rs),this.boundingBox.union(Tu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new bi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Rs),dr.copy(t.boundingSphere).applyMatrix4(Rs),this.boundingSphere.union(dr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ur.geometry=this.geometry,ur.material=this.material,ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dr.copy(this.boundingSphere),dr.applyMatrix4(n),t.ray.intersectsSphere(dr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Rs),wu.multiplyMatrices(n,Rs),ur.matrixWorld=wu,ur.raycast(t,To);for(let a=0,o=To.length;a<o;a++){let c=To[a];c.instanceId=r,c.object=this,e.push(c)}To.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ar(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Rr=class extends Si{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Au=new C,Ru=new C,Cu=new ue,xc=new Ji,Ao=new bi,qc=class extends Ye{constructor(t=new ge,e=new Rr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Au.fromBufferAttribute(e,s-1),Ru.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Au.distanceTo(Ru);t.setAttribute("lineDistance",new Ot(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ao.copy(n.boundingSphere),Ao.applyMatrix4(s),Ao.radius+=r,t.ray.intersectsSphere(Ao)===!1)return;Cu.copy(s).invert(),xc.copy(t.ray).applyMatrix4(Cu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new C,h=new C,u=new C,d=new C,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let p=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count);for(let x=p,M=y-1;x<M;x+=f){let b=g.getX(x),T=g.getX(x+1);if(l.fromBufferAttribute(m,b),h.fromBufferAttribute(m,T),xc.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let P=t.ray.origin.distanceTo(d);P<t.near||P>t.far||e.push({distance:P,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let x=p,M=y-1;x<M;x+=f){if(l.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),xc.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let T=t.ray.origin.distanceTo(d);T<t.near||T>t.far||e.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},Pu=new C,Lu=new C,Ko=class extends qc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Pu.fromBufferAttribute(e,s),Lu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Pu.distanceTo(Lu);t.setAttribute("lineDistance",new Ot(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var jo=class extends yn{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Sn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new nt:new C);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new C,s=[],r=[],a=[],o=new C,c=new ue;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Be(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Be(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Cr=class extends Sn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e){let n=e||new nt,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Yc=class extends Cr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ml(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Ro=new C,yc=new Ml,vc=new Ml,Mc=new Ml,On=class extends Sn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Ro.subVectors(s[0],s[1]).add(s[0]),l=Ro);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ro.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ro),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),yc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),vc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),Mc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(yc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),vc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Mc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(yc.calc(c),vc.calc(c),Mc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Iu(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function A_(i,t){let e=1-i;return e*e*t}function R_(i,t){return 2*(1-i)*i*t}function C_(i,t){return i*i*t}function xr(i,t,e,n){return A_(i,t)+R_(i,e)+C_(i,n)}function P_(i,t){let e=1-i;return e*e*e*t}function L_(i,t){let e=1-i;return 3*e*e*i*t}function I_(i,t){return 3*(1-i)*i*i*t}function D_(i,t){return i*i*i*t}function yr(i,t,e,n,s){return P_(i,t)+L_(i,e)+I_(i,n)+D_(i,s)}var Qo=class extends Sn{constructor(t=new nt,e=new nt,n=new nt,s=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new nt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(yr(t,s.x,r.x,a.x,o.x),yr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Zc=class extends Sn{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(yr(t,s.x,r.x,a.x,o.x),yr(t,s.y,r.y,a.y,o.y),yr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ta=class extends Sn{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$c=class extends Sn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ea=class extends Sn{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(xr(t,s.x,r.x,a.x),xr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},na=class extends Sn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(xr(t,s.x,r.x,a.x),xr(t,s.y,r.y,a.y),xr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ia=class extends Sn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Iu(o,c.x,l.x,h.x,u.x),Iu(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new nt().fromArray(s))}return this}},Jc=Object.freeze({__proto__:null,ArcCurve:Yc,CatmullRomCurve3:On,CubicBezierCurve:Qo,CubicBezierCurve3:Zc,EllipseCurve:Cr,LineCurve:ta,LineCurve3:$c,QuadraticBezierCurve:ea,QuadraticBezierCurve3:na,SplineCurve:ia}),Kc=class extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Jc[s.type]().fromJSON(s))}return this}},Ws=class extends Kc{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ta(this.currentPoint.clone(),new nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ea(this.currentPoint.clone(),new nt(t,e),new nt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Qo(this.currentPoint.clone(),new nt(t,e),new nt(n,s),new nt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ia(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){let l=new Cr(t,e,n,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Pr=class i extends ge{constructor(t=[new nt(0,-.5),new nt(.5,0),new nt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Be(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/e,u=new C,d=new nt,f=new C,g=new C,_=new C,m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let y=0;y<=e;y++){let x=n+y*h*s,M=Math.sin(x),b=Math.cos(x);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*M,u.y=t[T].y,u.z=t[T].x*b,a.push(u.x,u.y,u.z),d.x=y/e,d.y=T/(t.length-1),o.push(d.x,d.y);let S=c[3*T+0]*M,P=c[3*T+1],v=c[3*T+0]*b;l.push(S,P,v)}}for(let y=0;y<e;y++)for(let x=0;x<t.length-1;x++){let M=x+y*t.length,b=M,T=M+t.length,S=M+t.length+1,P=M+1;r.push(b,T,P),r.push(S,P,T)}this.setIndex(r),this.setAttribute("position",new Ot(a,3)),this.setAttribute("uv",new Ot(o,2)),this.setAttribute("normal",new Ot(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Xs=class i extends ge{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new C,h=new nt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ot(a,3)),this.setAttribute("normal",new Ot(o,3)),this.setAttribute("uv",new Ot(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ve=class i extends ge{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,_=[],m=n/2,p=0;y(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Ot(u,3)),this.setAttribute("normal",new Ot(d,3)),this.setAttribute("uv",new Ot(f,2));function y(){let M=new C,b=new C,T=0,S=(e-t)/n;for(let P=0;P<=r;P++){let v=[],E=P/r,D=E*(e-t)+t;for(let O=0;O<=s;O++){let H=O/s,L=H*c+o,N=Math.sin(L),k=Math.cos(L);b.x=D*N,b.y=-E*n+m,b.z=D*k,u.push(b.x,b.y,b.z),M.set(N,S,k).normalize(),d.push(M.x,M.y,M.z),f.push(H,1-E),v.push(g++)}_.push(v)}for(let P=0;P<s;P++)for(let v=0;v<r;v++){let E=_[v][P],D=_[v+1][P],O=_[v+1][P+1],H=_[v][P+1];h.push(E,D,H),h.push(D,O,H),T+=6}l.addGroup(p,T,0),p+=T}function x(M){let b=g,T=new nt,S=new C,P=0,v=M===!0?t:e,E=M===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*E,0),d.push(0,E,0),f.push(.5,.5),g++;let D=g;for(let O=0;O<=s;O++){let L=O/s*c+o,N=Math.cos(L),k=Math.sin(L);S.x=v*k,S.y=m*E,S.z=v*N,u.push(S.x,S.y,S.z),d.push(0,E,0),T.x=N*.5+.5,T.y=k*.5*E+.5,f.push(T.x,T.y),g++}for(let O=0;O<s;O++){let H=b+O,L=D+O;M===!0?h.push(L,L+1,H):h.push(L+1,L,H),P+=3}l.addGroup(p,P,M===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ki=class i extends ve{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},jc=class i extends ge{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new Ot(r,3)),this.setAttribute("normal",new Ot(r.slice(),3)),this.setAttribute("uv",new Ot(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let x=new C,M=new C,b=new C;for(let T=0;T<e.length;T+=3)f(e[T+0],x),f(e[T+1],M),f(e[T+2],b),c(x,M,b,y)}function c(y,x,M,b){let T=b+1,S=[];for(let P=0;P<=T;P++){S[P]=[];let v=y.clone().lerp(M,P/T),E=x.clone().lerp(M,P/T),D=T-P;for(let O=0;O<=D;O++)O===0&&P===T?S[P][O]=v:S[P][O]=v.clone().lerp(E,O/D)}for(let P=0;P<T;P++)for(let v=0;v<2*(T-P)-1;v++){let E=Math.floor(v/2);v%2===0?(d(S[P][E+1]),d(S[P+1][E]),d(S[P][E])):(d(S[P][E+1]),d(S[P+1][E+1]),d(S[P+1][E]))}}function l(y){let x=new C;for(let M=0;M<r.length;M+=3)x.x=r[M+0],x.y=r[M+1],x.z=r[M+2],x.normalize().multiplyScalar(y),r[M+0]=x.x,r[M+1]=x.y,r[M+2]=x.z}function h(){let y=new C;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];let M=m(y)/2/Math.PI+.5,b=p(y)/Math.PI+.5;a.push(M,1-b)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){let x=a[y+0],M=a[y+2],b=a[y+4],T=Math.max(x,M,b),S=Math.min(x,M,b);T>.9&&S<.1&&(x<.2&&(a[y+0]+=1),M<.2&&(a[y+2]+=1),b<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,x){let M=y*3;x.x=t[M+0],x.y=t[M+1],x.z=t[M+2]}function g(){let y=new C,x=new C,M=new C,b=new C,T=new nt,S=new nt,P=new nt;for(let v=0,E=0;v<r.length;v+=9,E+=6){y.set(r[v+0],r[v+1],r[v+2]),x.set(r[v+3],r[v+4],r[v+5]),M.set(r[v+6],r[v+7],r[v+8]),T.set(a[E+0],a[E+1]),S.set(a[E+2],a[E+3]),P.set(a[E+4],a[E+5]),b.copy(y).add(x).add(M).divideScalar(3);let D=m(b);_(T,E+0,y,D),_(S,E+2,x,D),_(P,E+4,M,D)}}function _(y,x,M,b){b<0&&y.x===1&&(a[x]=y.x-1),M.x===0&&M.z===0&&(a[x]=b/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var qs=class extends Ws{constructor(t){super(t),this.uuid=es(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ws().fromJSON(s))}return this}},U_={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=ud(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,d,f;if(n&&(r=H_(i,t,r,e)),i.length>80*e){o=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-o,h-c),f=f!==0?32767/f:0}return Lr(r,a,e,o,c,f,0),a}};function ud(i,t,e,n,s){let r,a;if(s===J_(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Du(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Du(r,i[r],i[r+1],a);return a&&pa(a,a.next)&&(Dr(a),a=a.next),a}function ji(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(pa(e,e.next)||Ce(e.prev,e,e.next)===0)){if(Dr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Lr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&W_(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?O_(i,n,s,r):N_(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Dr(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=F_(ji(i),t,e),Lr(i,t,e,n,s,r,2)):a===2&&B_(i,t,e,n,s,r):Lr(ji(i),t,e,n,s,r,1);break}}}function N_(i){let t=i.prev,e=i,n=i.next;if(Ce(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,d=s>r?s>a?s:a:r>a?r:a,f=o>c?o>l?o:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Ds(s,o,r,c,a,l,g.x,g.y)&&Ce(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function O_(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Ce(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,d=a.y,f=o<c?o<l?o:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,_=o>c?o>l?o:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=Qc(f,g,t,e,n),y=Qc(_,m,t,e,n),x=i.prevZ,M=i.nextZ;for(;x&&x.z>=p&&M&&M.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&Ds(o,h,c,u,l,d,x.x,x.y)&&Ce(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Ds(o,h,c,u,l,d,M.x,M.y)&&Ce(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&Ds(o,h,c,u,l,d,x.x,x.y)&&Ce(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=y;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Ds(o,h,c,u,l,d,M.x,M.y)&&Ce(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function F_(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!pa(s,r)&&dd(s,n,n.next,r)&&Ir(s,r)&&Ir(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Dr(n),Dr(n.next),n=i=r),n=n.next}while(n!==i);return ji(n)}function B_(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Y_(a,o)){let c=fd(a,o);a=ji(a,a.next),c=ji(c,c.next),Lr(a,t,e,n,s,r,0),Lr(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function H_(i,t,e,n){let s=[],r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=ud(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(q_(l));for(s.sort(z_),r=0;r<s.length;r++)e=k_(s[r],e);return e}function z_(i,t){return i.x-t.x}function k_(i,t){let e=G_(i,t);if(!e)return t;let n=fd(e,i);return ji(n,n.next),ji(e,e.next)}function G_(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Ds(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Ir(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&V_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function V_(i,t){return Ce(i.prev,i,t.prev)<0&&Ce(t.next,i,i.next)<0}function W_(i,t,e,n){let s=i;do s.z===0&&(s.z=Qc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,X_(s)}function X_(i){let t,e,n,s,r,a,o,c,l=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(a>1);return i}function Qc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function q_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ds(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Y_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Z_(i,t)&&(Ir(i,t)&&Ir(t,i)&&$_(i,t)&&(Ce(i.prev,i,t.prev)||Ce(i,t.prev,t))||pa(i,t)&&Ce(i.prev,i,i.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function pa(i,t){return i.x===t.x&&i.y===t.y}function dd(i,t,e,n){let s=Po(Ce(i,t,e)),r=Po(Ce(i,t,n)),a=Po(Ce(e,n,i)),o=Po(Ce(e,n,t));return!!(s!==r&&a!==o||s===0&&Co(i,e,t)||r===0&&Co(i,n,t)||a===0&&Co(e,i,n)||o===0&&Co(e,t,n))}function Co(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Po(i){return i>0?1:i<0?-1:0}function Z_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&dd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ir(i,t){return Ce(i.prev,i,i.next)<0?Ce(i,t,i.next)>=0&&Ce(i,i.prev,t)>=0:Ce(i,t,i.prev)<0||Ce(i,i.next,t)<0}function $_(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function fd(i,t){let e=new tl(i.i,i.x,i.y),n=new tl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Du(i,t,e,n){let s=new tl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Dr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function tl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function J_(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Un=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Uu(t),Nu(n,t);let a=t.length;e.forEach(Uu);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,Nu(n,e[c]);let o=U_.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Uu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Nu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var wi=class i extends jc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Ur=class i extends ge{constructor(t=new qs([new nt(0,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Ot(s,3)),this.setAttribute("normal",new Ot(r,3)),this.setAttribute("uv",new Ot(a,2));function l(h){let u=s.length/3,d=h.extractPoints(e),f=d.shape,g=d.holes;Un.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let y=g[m];Un.isClockWise(y)===!0&&(g[m]=y.reverse())}let _=Un.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let y=g[m];f=f.concat(y)}for(let m=0,p=f.length;m<p;m++){let y=f[m];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let m=0,p=_.length;m<p;m++){let y=_[m],x=y[0]+u,M=y[1]+u,b=y[2]+u;n.push(x,M,b),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return K_(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function K_(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Ti=class i extends ge{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new C,d=new C,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let y=[],x=p/n,M=0;p===0&&a===0?M=.5/e:p===n&&c===Math.PI&&(M=-.5/e);for(let b=0;b<=e;b++){let T=b/e;u.x=-t*Math.cos(s+T*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(s+T*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+M,1-x),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let x=h[p][y+1],M=h[p][y],b=h[p+1][y],T=h[p+1][y+1];(p!==0||a>0)&&f.push(x,M,T),(p!==n-1||c<Math.PI)&&f.push(M,b,T)}this.setIndex(f),this.setAttribute("position",new Ot(g,3)),this.setAttribute("normal",new Ot(_,3)),this.setAttribute("uv",new Ot(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var sa=class i extends ge{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new C,u=new C,d=new C;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let _=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,y=(s+1)*f+g;a.push(_,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new Ot(o,3)),this.setAttribute("normal",new Ot(c,3)),this.setAttribute("uv",new Ot(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Yn=class i extends ge{constructor(t=new na(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new C,c=new C,l=new nt,h=new C,u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Ot(u,3)),this.setAttribute("normal",new Ot(d,3)),this.setAttribute("uv",new Ot(f,2));function _(){for(let x=0;x<e;x++)m(x);m(r===!1?e:0),y(),p()}function m(x){h=t.getPointAt(x/e,h);let M=a.normals[x],b=a.binormals[x];for(let T=0;T<=s;T++){let S=T/s*Math.PI*2,P=Math.sin(S),v=-Math.cos(S);c.x=v*M.x+P*b.x,c.y=v*M.y+P*b.y,c.z=v*M.z+P*b.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}function p(){for(let x=1;x<=e;x++)for(let M=1;M<=s;M++){let b=(s+1)*(x-1)+(M-1),T=(s+1)*x+(M-1),S=(s+1)*x+M,P=(s+1)*(x-1)+M;g.push(b,T,P),g.push(T,S,P)}}function y(){for(let x=0;x<=e;x++)for(let M=0;M<=s;M++)l.x=x/e,l.y=M/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Jc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var ht=class extends Si{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ju,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Lo(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function j_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ys=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},el=class extends Ys{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nh,endingEnd:Nh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Oh:r=t,o=2*e-n;break;case Fh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Oh:a=t,c=2*n-e;break;case Fh:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,y=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*_+.5*g,M=f*m-f*_;for(let b=0;b!==o;++b)r[b]=p*a[h+b]+y*a[l+b]+x*a[c+b]+M*a[u+b];return r}},nl=class extends Ys{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},il=class extends Ys{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Fn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Lo(e,this.TimeBufferType),this.values=Lo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Lo(t.times,Array),values:Lo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new il(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new nl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new el(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Do:e=this.InterpolantFactoryMethodDiscrete;break;case Uo:e=this.InterpolantFactoryMethodLinear;break;case $a:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Do;case this.InterpolantFactoryMethodLinear:return Uo;case this.InterpolantFactoryMethodSmooth:return $a}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&j_(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===$a,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[d+g]||_!==e[f+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=Uo;var Qi=class extends Fn{};Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Do;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var sl=class extends Fn{};sl.prototype.ValueTypeName="color";var rl=class extends Fn{};rl.prototype.ValueTypeName="number";var ol=class extends Ys{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)fn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Nr=class extends Fn{InterpolantFactoryMethodLinear(t){return new ol(this.times,this.values,this.getValueSize(),t)}};Nr.prototype.ValueTypeName="quaternion";Nr.prototype.DefaultInterpolation=Uo;Nr.prototype.InterpolantFactoryMethodSmooth=void 0;var ts=class extends Fn{};ts.prototype.ValueTypeName="string";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Do;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var al=class extends Fn{};al.prototype.ValueTypeName="vector";var Ou={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},cl=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Q_=new cl,Or=class{constructor(t){this.manager=t!==void 0?t:Q_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Or.DEFAULT_MATERIAL_NAME="__DEFAULT";var ll=class extends Or{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Ou.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;let o=br("img");function c(){h(),Ou.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}};var ra=class extends Or{constructor(t){super(t)}load(t,e,n,s){let r=new yn,a=new ll(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Fr=class extends Ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},oa=class extends Fr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ec=new ue,Fu=new C,Bu=new C,aa=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wr,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Fu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fu),Bu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bu),e.updateMatrixWorld(),Ec.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ec),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ec)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Hu=new ue,fr=new C,bc=new C,hl=class extends aa{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new we(2,1,1,1),new we(0,1,1,1),new we(3,1,1,1),new we(1,1,1,1),new we(3,0,1,1),new we(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),fr.setFromMatrixPosition(t.matrixWorld),n.position.copy(fr),bc.copy(n.position),bc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(bc),n.updateMatrixWorld(),s.makeTranslation(-fr.x,-fr.y,-fr.z),Hu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hu)}},ca=class extends Fr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new hl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},ul=class extends aa{constructor(){super(new Zo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},la=class extends Fr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new ul}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var El="\\[\\]\\.:\\/",tx=new RegExp("["+El+"]","g"),bl="[^"+El+"]",ex="[^"+El.replace("\\.","")+"]",nx=/((?:WC+[\/:])*)/.source.replace("WC",bl),ix=/(WCOD+)?/.source.replace("WCOD",ex),sx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bl),rx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bl),ox=new RegExp("^"+nx+ix+sx+rx+"$"),ax=["material","materials","bones","map"],dl=class{constructor(t,e,n){let s=n||Se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Se=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(tx,"")}static parseTrackName(t){let e=ox.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ax.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Se.Composite=dl;Se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Se.prototype.GetterByBindingType=[Se.prototype._getValue_direct,Se.prototype._getValue_array,Se.prototype._getValue_arrayElement,Se.prototype._getValue_toArray];Se.prototype.SetterByBindingTypeAndVersioning=[[Se.prototype._setValue_direct,Se.prototype._setValue_direct_setNeedsUpdate,Se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_array,Se.prototype._setValue_array_setNeedsUpdate,Se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_arrayElement,Se.prototype._setValue_arrayElement_setNeedsUpdate,Se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_fromArray,Se.prototype._setValue_fromArray_setNeedsUpdate,Se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var uy=new Float32Array(1);var ha=class{constructor(t,e,n=0,s=1/0){this.ray=new Ji(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Sr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return fl(t,this,n,e),n.sort(zu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)fl(t[s],this,n,e);return n.sort(zu),n}};function zu(i,t){return i.distance-t.distance}function fl(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)fl(s[r],t,e,!0)}}var Br=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Be(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pl);var pd={type:"change"},Sl={type:"start"},md={type:"end"},ma=new Ji,gd=new Ln,lx=Math.cos(70*ed.DEG2RAD),ga=class extends qn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Je.ROTATE,MIDDLE:Je.DOLLY,RIGHT:Je.PAN},this.touches={ONE:ln.ROTATE,TWO:ln.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(I){I.addEventListener("keydown",at),this._domElementKeyEvents=I},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",at),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(pd),n.update(),r=s.NONE},this.update=function(){let I=new C,st=new fn().setFromUnitVectors(t.up,new C(0,1,0)),mt=st.clone().invert(),lt=new C,Ct=new fn,Qt=new C,se=2*Math.PI;return function(pt=null){let U=n.object.position;I.copy(U).sub(n.target),I.applyQuaternion(st),o.setFromVector3(I),n.autoRotate&&r===s.NONE&&D(v(pt)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let ut=n.minAzimuthAngle,dt=n.maxAzimuthAngle;isFinite(ut)&&isFinite(dt)&&(ut<-Math.PI?ut+=se:ut>Math.PI&&(ut-=se),dt<-Math.PI?dt+=se:dt>Math.PI&&(dt-=se),ut<=dt?o.theta=Math.max(ut,Math.min(dt,o.theta)):o.theta=o.theta>(ut+dt)/2?Math.max(ut,o.theta):Math.min(dt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&T||n.object.isOrthographicCamera?o.radius=z(o.radius):o.radius=z(o.radius*l),I.setFromSpherical(o),I.applyQuaternion(mt),U.copy(n.target).add(I),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0));let Dt=!1;if(n.zoomToCursor&&T){let Pt=null;if(n.object.isPerspectiveCamera){let oe=I.length();Pt=z(oe*l);let ce=oe-Pt;n.object.position.addScaledVector(M,ce),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let oe=new C(b.x,b.y,0);oe.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Dt=!0;let ce=new C(b.x,b.y,0);ce.unproject(n.object),n.object.position.sub(ce).add(oe),n.object.updateMatrixWorld(),Pt=I.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Pt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Pt).add(n.object.position):(ma.origin.copy(n.object.position),ma.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(ma.direction))<lx?t.lookAt(n.target):(gd.setFromNormalAndCoplanarPoint(n.object.up,n.target),ma.intersectPlane(gd,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Dt=!0);return l=1,T=!1,Dt||lt.distanceToSquared(n.object.position)>a||8*(1-Ct.dot(n.object.quaternion))>a||Qt.distanceToSquared(n.target)>0?(n.dispatchEvent(pd),lt.copy(n.object.position),Ct.copy(n.object.quaternion),Qt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Mt),n.domElement.removeEventListener("pointerdown",Vt),n.domElement.removeEventListener("pointercancel",w),n.domElement.removeEventListener("wheel",ot),n.domElement.removeEventListener("pointermove",R),n.domElement.removeEventListener("pointerup",w),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",at),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,a=1e-6,o=new Br,c=new Br,l=1,h=new C,u=new nt,d=new nt,f=new nt,g=new nt,_=new nt,m=new nt,p=new nt,y=new nt,x=new nt,M=new C,b=new nt,T=!1,S=[],P={};function v(I){return I!==null?2*Math.PI/60*n.autoRotateSpeed*I:2*Math.PI/60/60*n.autoRotateSpeed}function E(I){let st=Math.abs(I)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*st)}function D(I){c.theta-=I}function O(I){c.phi-=I}let H=function(){let I=new C;return function(mt,lt){I.setFromMatrixColumn(lt,0),I.multiplyScalar(-mt),h.add(I)}}(),L=function(){let I=new C;return function(mt,lt){n.screenSpacePanning===!0?I.setFromMatrixColumn(lt,1):(I.setFromMatrixColumn(lt,0),I.crossVectors(n.object.up,I)),I.multiplyScalar(mt),h.add(I)}}(),N=function(){let I=new C;return function(mt,lt){let Ct=n.domElement;if(n.object.isPerspectiveCamera){let Qt=n.object.position;I.copy(Qt).sub(n.target);let se=I.length();se*=Math.tan(n.object.fov/2*Math.PI/180),H(2*mt*se/Ct.clientHeight,n.object.matrix),L(2*lt*se/Ct.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(H(mt*(n.object.right-n.object.left)/n.object.zoom/Ct.clientWidth,n.object.matrix),L(lt*(n.object.top-n.object.bottom)/n.object.zoom/Ct.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function k(I){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(I){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(I,st){if(!n.zoomToCursor)return;T=!0;let mt=n.domElement.getBoundingClientRect(),lt=I-mt.left,Ct=st-mt.top,Qt=mt.width,se=mt.height;b.x=lt/Qt*2-1,b.y=-(Ct/se)*2+1,M.set(b.x,b.y,1).unproject(n.object).sub(n.object.position).normalize()}function z(I){return Math.max(n.minDistance,Math.min(n.maxDistance,I))}function Q(I){u.set(I.clientX,I.clientY)}function it(I){K(I.clientX,I.clientX),p.set(I.clientX,I.clientY)}function gt(I){g.set(I.clientX,I.clientY)}function Y(I){d.set(I.clientX,I.clientY),f.subVectors(d,u).multiplyScalar(n.rotateSpeed);let st=n.domElement;D(2*Math.PI*f.x/st.clientHeight),O(2*Math.PI*f.y/st.clientHeight),u.copy(d),n.update()}function et(I){y.set(I.clientX,I.clientY),x.subVectors(y,p),x.y>0?k(E(x.y)):x.y<0&&q(E(x.y)),p.copy(y),n.update()}function ft(I){_.set(I.clientX,I.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),N(m.x,m.y),g.copy(_),n.update()}function vt(I){K(I.clientX,I.clientY),I.deltaY<0?q(E(I.deltaY)):I.deltaY>0&&k(E(I.deltaY)),n.update()}function bt(I){let st=!1;switch(I.code){case n.keys.UP:I.ctrlKey||I.metaKey||I.shiftKey?O(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,n.keyPanSpeed),st=!0;break;case n.keys.BOTTOM:I.ctrlKey||I.metaKey||I.shiftKey?O(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,-n.keyPanSpeed),st=!0;break;case n.keys.LEFT:I.ctrlKey||I.metaKey||I.shiftKey?D(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(n.keyPanSpeed,0),st=!0;break;case n.keys.RIGHT:I.ctrlKey||I.metaKey||I.shiftKey?D(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(-n.keyPanSpeed,0),st=!0;break}st&&(I.preventDefault(),n.update())}function Ft(I){if(S.length===1)u.set(I.pageX,I.pageY);else{let st=ie(I),mt=.5*(I.pageX+st.x),lt=.5*(I.pageY+st.y);u.set(mt,lt)}}function Ht(I){if(S.length===1)g.set(I.pageX,I.pageY);else{let st=ie(I),mt=.5*(I.pageX+st.x),lt=.5*(I.pageY+st.y);g.set(mt,lt)}}function It(I){let st=ie(I),mt=I.pageX-st.x,lt=I.pageY-st.y,Ct=Math.sqrt(mt*mt+lt*lt);p.set(0,Ct)}function Et(I){n.enableZoom&&It(I),n.enablePan&&Ht(I)}function F(I){n.enableZoom&&It(I),n.enableRotate&&Ft(I)}function $t(I){if(S.length==1)d.set(I.pageX,I.pageY);else{let mt=ie(I),lt=.5*(I.pageX+mt.x),Ct=.5*(I.pageY+mt.y);d.set(lt,Ct)}f.subVectors(d,u).multiplyScalar(n.rotateSpeed);let st=n.domElement;D(2*Math.PI*f.x/st.clientHeight),O(2*Math.PI*f.y/st.clientHeight),u.copy(d)}function Tt(I){if(S.length===1)_.set(I.pageX,I.pageY);else{let st=ie(I),mt=.5*(I.pageX+st.x),lt=.5*(I.pageY+st.y);_.set(mt,lt)}m.subVectors(_,g).multiplyScalar(n.panSpeed),N(m.x,m.y),g.copy(_)}function kt(I){let st=ie(I),mt=I.pageX-st.x,lt=I.pageY-st.y,Ct=Math.sqrt(mt*mt+lt*lt);y.set(0,Ct),x.set(0,Math.pow(y.y/p.y,n.zoomSpeed)),k(x.y),p.copy(y);let Qt=(I.pageX+st.x)*.5,se=(I.pageY+st.y)*.5;K(Qt,se)}function At(I){n.enableZoom&&kt(I),n.enablePan&&Tt(I)}function Ee(I){n.enableZoom&&kt(I),n.enableRotate&&$t(I)}function Vt(I){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(I.pointerId),n.domElement.addEventListener("pointermove",R),n.domElement.addEventListener("pointerup",w)),Nt(I),I.pointerType==="touch"?Rt(I):G(I))}function R(I){n.enabled!==!1&&(I.pointerType==="touch"?xt(I):ct(I))}function w(I){Xt(I),S.length===0&&(n.domElement.releasePointerCapture(I.pointerId),n.domElement.removeEventListener("pointermove",R),n.domElement.removeEventListener("pointerup",w)),n.dispatchEvent(md),r=s.NONE}function G(I){let st;switch(I.button){case 0:st=n.mouseButtons.LEFT;break;case 1:st=n.mouseButtons.MIDDLE;break;case 2:st=n.mouseButtons.RIGHT;break;default:st=-1}switch(st){case Je.DOLLY:if(n.enableZoom===!1)return;it(I),r=s.DOLLY;break;case Je.ROTATE:if(I.ctrlKey||I.metaKey||I.shiftKey){if(n.enablePan===!1)return;gt(I),r=s.PAN}else{if(n.enableRotate===!1)return;Q(I),r=s.ROTATE}break;case Je.PAN:if(I.ctrlKey||I.metaKey||I.shiftKey){if(n.enableRotate===!1)return;Q(I),r=s.ROTATE}else{if(n.enablePan===!1)return;gt(I),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Sl)}function ct(I){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;Y(I);break;case s.DOLLY:if(n.enableZoom===!1)return;et(I);break;case s.PAN:if(n.enablePan===!1)return;ft(I);break}}function ot(I){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(I.preventDefault(),n.dispatchEvent(Sl),vt(I),n.dispatchEvent(md))}function at(I){n.enabled===!1||n.enablePan===!1||bt(I)}function Rt(I){switch(rt(I),S.length){case 1:switch(n.touches.ONE){case ln.ROTATE:if(n.enableRotate===!1)return;Ft(I),r=s.TOUCH_ROTATE;break;case ln.PAN:if(n.enablePan===!1)return;Ht(I),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case ln.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Et(I),r=s.TOUCH_DOLLY_PAN;break;case ln.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;F(I),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Sl)}function xt(I){switch(rt(I),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;$t(I),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;Tt(I),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;At(I),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ee(I),n.update();break;default:r=s.NONE}}function Mt(I){n.enabled!==!1&&I.preventDefault()}function Nt(I){S.push(I.pointerId)}function Xt(I){delete P[I.pointerId];for(let st=0;st<S.length;st++)if(S[st]==I.pointerId){S.splice(st,1);return}}function rt(I){let st=P[I.pointerId];st===void 0&&(st=new nt,P[I.pointerId]=st),st.set(I.pageX,I.pageY)}function ie(I){let st=I.pointerId===S[0]?S[1]:S[0];return P[st]}n.domElement.addEventListener("contextmenu",Mt),n.domElement.addEventListener("pointerdown",Vt),n.domElement.addEventListener("pointercancel",w),n.domElement.addEventListener("wheel",ot,{passive:!1}),this.update()}};var _a=class extends ga{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:Je.PAN,MIDDLE:Je.DOLLY,RIGHT:Je.ROTATE},this.touches={ONE:ln.PAN,TWO:ln.DOLLY_ROTATE}}};var Hr=new C;function wn(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Hr.copy(t),Hr[n]=0,Hr.normalize();let l=.5*a/(a+o),h=1-Hr.angleTo(i)/c;return Math.sign(Hr[e])===1?h*l:o/(a+o)+l+l*(1-h)}var ns=class extends Ae{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new C,c=new C,l=new C(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new C,_=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(o.fromArray(h,m),c.copy(o),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),h[m+0]=l.x*Math.sign(o.x)+c.x*r,h[m+1]=l.y*Math.sign(o.y)+c.y*r,h[m+2]=l.z*Math.sign(o.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=wn(g,c,"z","y",r,n),d[p+1]=1-wn(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),d[p+0]=1-wn(g,c,"z","y",r,n),d[p+1]=1-wn(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),d[p+0]=1-wn(g,c,"x","z",r,t),d[p+1]=wn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[p+0]=1-wn(g,c,"x","z",r,t),d[p+1]=1-wn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[p+0]=1-wn(g,c,"x","y",r,t),d[p+1]=1-wn(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),d[p+0]=wn(g,c,"x","y",r,t),d[p+1]=1-wn(g,c,"y","x",r,e);break}}};function xa(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new ge,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=_d(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let _=0;_<a[h].length;++_)f.push(a[h][_][d]);let g=_d(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function _d(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let a=new t(r),o=0;for(let l=0;l<i.length;++l)a.set(i[l].array,o),o+=i[l].array.length;let c=new _e(a,e,n);return s!==void 0&&(c.gpuType=s),c}function wl(i,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,a=0,o=Object.keys(i.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let y=0,x=o.length;y<x;y++){let M=o[y],b=i.attributes[M];c[M]=new _e(new b.array.constructor(b.count*b.itemSize),b.itemSize,b.normalized);let T=i.morphAttributes[M];T&&(l[M]=new _e(new T.array.constructor(T.count*T.itemSize),T.itemSize,T.normalized))}let f=t*.5,g=Math.log10(1/t),_=Math.pow(10,g),m=f*_;for(let y=0;y<r;y++){let x=n?n.getX(y):y,M="";for(let b=0,T=o.length;b<T;b++){let S=o[b],P=i.getAttribute(S),v=P.itemSize;for(let E=0;E<v;E++)M+=`${~~(P[u[E]](x)*_+m)},`}if(M in e)h.push(e[M]);else{for(let b=0,T=o.length;b<T;b++){let S=o[b],P=i.getAttribute(S),v=i.morphAttributes[S],E=P.itemSize,D=c[S],O=l[S];for(let H=0;H<E;H++){let L=u[H],N=d[H];if(D[N](a,P[L](x)),v)for(let k=0,q=v.length;k<q;k++)O[k][N](a,v[k][L](x))}}e[M]=a,h.push(a),a++}}let p=i.clone();for(let y in i.attributes){let x=c[y];if(p.setAttribute(y,new _e(x.array.slice(0,a*x.itemSize),x.itemSize,x.normalized)),y in l)for(let M=0;M<l[y].length;M++){let b=l[y][M];p.morphAttributes[y][M]=new _e(b.array.slice(0,a*b.itemSize),b.itemSize,b.normalized)}}return p.setIndex(h),p}var ya=class extends Gs{constructor(t=null){super();let e=new Ae;e.deleteAttribute("uv");let n=new ht({side:He}),s=new ht,r=5;t!==null&&t._useLegacyLights===!1&&(r=900);let a=new ca(16777215,r,28,2);a.position.set(.418,16.199,.3),this.add(a);let o=new j(e,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let c=new j(e,s);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);let l=new j(e,s);l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),this.add(l);let h=new j(e,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let u=new j(e,s);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let d=new j(e,s);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);let f=new j(e,s);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);let g=new j(e,$s(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let _=new j(e,$s(50));_.position.set(-16.109,18.021,-8.207),_.scale.set(.1,2.425,2.751),this.add(_);let m=new j(e,$s(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let p=new j(e,$s(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let y=new j(e,$s(20));y.position.set(3.235,11.486,-12.541),y.scale.set(2.5,2,.1),this.add(y);let x=new j(e,$s(100));x.position.set(0,20,0),x.scale.set(1,.1,1),this.add(x)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function $s(i){let t=new ci;return t.color.setScalar(i),t}var va=class extends Ye{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new nt(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof Element&&e.element.parentNode!==null&&e.element.parentNode.removeChild(e.element)})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}},Js=new C,xd=new ue,yd=new ue,vd=new C,Md=new C,Ma=class{constructor(t={}){let e=this,n,s,r,a,o={objects:new WeakMap},c=t.element!==void 0?t.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c,this.getSize=function(){return{width:n,height:s}},this.render=function(f,g){f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),xd.copy(g.matrixWorldInverse),yd.multiplyMatrices(g.projectionMatrix,xd),l(f,f,g),d(f)},this.setSize=function(f,g){n=f,s=g,r=n/2,a=s/2,c.style.width=f+"px",c.style.height=g+"px"};function l(f,g,_){if(f.isCSS2DObject){Js.setFromMatrixPosition(f.matrixWorld),Js.applyMatrix4(yd);let m=f.visible===!0&&Js.z>=-1&&Js.z<=1&&f.layers.test(_.layers)===!0;if(f.element.style.display=m===!0?"":"none",m===!0){f.onBeforeRender(e,g,_);let y=f.element;y.style.transform="translate("+-100*f.center.x+"%,"+-100*f.center.y+"%)translate("+(Js.x*r+r)+"px,"+(-Js.y*a+a)+"px)",y.parentNode!==c&&c.appendChild(y),f.onAfterRender(e,g,_)}let p={distanceToCameraSquared:h(_,f)};o.objects.set(f,p)}for(let m=0,p=f.children.length;m<p;m++)l(f.children[m],g,_)}function h(f,g){return vd.setFromMatrixPosition(f.matrixWorld),Md.setFromMatrixPosition(g.matrixWorld),vd.distanceToSquared(Md)}function u(f){let g=[];return f.traverse(function(_){_.isCSS2DObject&&g.push(_)}),g}function d(f){let g=u(f).sort(function(m,p){if(m.renderOrder!==p.renderOrder)return p.renderOrder-m.renderOrder;let y=o.objects.get(m).distanceToCameraSquared,x=o.objects.get(p).distanceToCameraSquared;return y-x}),_=g.length;for(let m=0,p=g.length;m<p;m++)g[m].element.style.zIndex=_-m}}};var Ve={lot:[[1400,1686],[482,1686],[482,100],[1384.33,100],[1400,1686]],roofA:[[1311,700.47],[883.85,710],[880.64,644.31],[568.52,652.79],[563,368.37],[593.95,367.74],[595.24,367.72],[802.87,363.48],[875.05,362],[873.45,468.62],[1308.7,467.03],[1309.35,533.52],[1311,700.47]],roofB:[[568.48,652.83],[570.58,963.98],[1306.12,953.37],[1305.07,700.52],[881.28,710.05],[878.13,644.36],[568.48,652.83]],patio:[[1306.12,953.37],[1306.68,1107.32],[1023.4,1109],[1024.54,957.39],[1306.12,953.37]],awning:[[957.14,909.69],[956.54,965.41],[1027.63,963.12],[1028.14,908.68],[957.14,909.69]],awningC:[994.56,925.43,13.12],awningLow:[[1027.63,963.12],[956.54,965.41],[957.14,909.69],[956.73,947.86],[1027.58,946.02],[1027.63,963.12]],driveway:[[841.46,363.73],[805,364.58],[598.94,369.43],[597.67,369.45],[592.14,99.81],[830.97,99.81],[841.46,363.73]],porch:[[966.76,369.45],[967.14,469.74],[874.96,470.08],[876.54,368.11],[966.76,369.45]],frontRock:[[1359.75,537.27],[1307.4,534.81],[1306.75,468.49],[874.96,470.08],[876.54,363.73],[804.93,365.21],[805,364.58],[841.45,363.73],[830.97,99.81],[928.25,99.81],[930.26,104.15],[935.55,116.52],[942.96,135.93],[951.39,161.4],[959.67,191.94],[966.69,226.57],[971.31,264.31],[972.39,304.16],[972.27,307.43],[972.17,316.13],[972.5,328.64],[973.65,343.32],[976.03,358.53],[980.05,372.65],[986.09,384.03],[994.58,391.03],[1016.28,392.74],[1057.5,391.8],[1111.89,391.89],[1173.12,396.72],[1234.86,409.98],[1290.77,435.36],[1334.51,476.56],[1359.75,537.27]],trees:[[1249.39,149.05,54.05],[1201.45,196.43,44.99],[1189.9,141.33,31.8],[1245.93,203.33,34.71],[1370.34,541.88,38.64],[1336.05,575.75,32.16],[1327.8,536.36,22.75],[1367.85,580.7,24.82]],basalt:[[1394.6,1681.46],[1389.61,1106.37],[1027.36,1108.7],[1027.5,1051.5],[1027.5,957.5],[574.54,970.78],[573.18,765.33],[485.87,765.33],[485.87,1049.75],[717.86,1047.18],[949.85,1044.61],[949.85,1679.5],[1394.6,1681.46]],edgeLine:[[488,1049],[950,1044]],acPad:[[516,958],[516,866],[488,866],[488,958],[516,958]],mulch:[[949.85,988.06],[574.61,991.42],[574.54,964.07],[949.85,957.65],[949.85,988.06]],bins:[[[[516.6,798.42],[516.6,773.4],[494.91,773.4],[494.91,798.42],[516.6,798.42]],"#5671BC"],[[[516.6,828.5],[516.6,803.48],[494.91,803.48],[494.91,828.5],[516.6,828.5]],"#B07953"],[[[516.6,859.91],[516.6,834.89],[494.91,834.89],[494.91,859.91],[516.6,859.91]],"#73965D"]],wedge:[[1306.68,1107],[1386,1106.61],[1385.47,1053.07],[1306,951],[1306.68,1107]],fence:[[573.18,765.33],[485.87,765.33],[485.87,1681.46],[1394.6,1681.46],[1387.64,1052.39],[1304,945.5]],nbr:[[[[1409,318.54],[1799,292.42],[1799,765.33],[1452.79,773.4],[1409,318.54]],"#918A98"],[[[1460.3,1077.33],[1452.79,773.4],[1799,765.33],[1799,1080.37],[1460.3,1077.33]],"#BEB3B2"],[[[1452.79,99.81],[1452.79,318.54],[1799,292.42],[1799,99.81],[1452.79,99.81]],"#E5CFC2"],[[[1389.77,598.19],[1395,1053.69],[1402.5,1811.19],[1800.5,1811.19],[1800.5,1080.56],[1462.32,1077.52],[1454.82,773.59],[1411.08,318.73],[1454.82,318.73],[1454.82,100],[1386,100],[1389.77,598.19]],"#9BA773"],[[[1682.15,1586.34],[1445.86,1586.34],[1445.86,1738.26],[1682.15,1738.26],[1682.15,1586.34]],"#F1FBEA"],[[[481.51,1811],[1402.25,1811],[1399.85,1685.98],[481.51,1686.03],[481.51,1811]],"#9BA773"],[[[270.8,99.81],[481.51,99.81],[481.51,1811],[95,1811],[95,1099.19],[399.37,1077.33],[270.8,99.81]],"#9BA773"],[[[402.79,387.72],[95,387.72],[95,732.39],[402.79,732.39],[402.79,387.72]],"#918A98"],[[[402.79,1077.33],[402.79,732.39],[95,732.39],[95,1099.19],[402.79,1077.33]],"#BEB3B2"],[[[339.57,99.81],[95,99.81],[95,387.72],[339.57,387.72],[339.57,99.81]],"#E5CFC2"]],chips:[[1367,1679],[1027,1678.9],[1027.58,1108.56],[1367,1106],[1367,1392.5],[1367,1679]],wallBase:[[1025,1108],[1036,1108],[1036,1679],[1025,1679]],pavers:[[980.68,1331.36,1004.84,1354.55],[980.68,1365.64,1004.84,1388.83],[980.68,1297.11,1004.84,1320.3],[980.68,1262.83,1004.84,1286.02],[980.68,1228.55,1004.84,1251.74],[980.68,1194.27,1004.84,1217.46],[980.68,1160.02,1004.84,1183.2],[980.68,1125.74,1004.84,1148.92],[980.68,1605.57,1004.84,1628.76],[980.68,1639.83,1004.84,1663.02],[980.68,1571.29,1004.84,1594.48],[980.68,1537.02,1004.84,1560.2],[980.68,1502.74,1004.84,1525.93],[980.68,1468.48,1004.84,1491.67],[980.68,1434.2,1004.84,1457.39],[980.68,1399.94,1004.84,1423.13],[980.68,1091.46,1004.84,1114.65],[980.68,1057.18,1004.84,1080.37],[980.68,1022.92,1004.84,1046.11],[980.68,988.64,1004.84,1011.83],[522.28,938.02,543.97,961.83],[522.28,972.3,543.97,994.9],[522.26,824.4,543.95,848.22],[522.28,900.14,543.97,923.95],[522.28,862.26,543.97,886.08],[522.26,786.52,543.95,810.34],[548.38,938.02,570.07,961.83],[548.38,824.4,570.07,848.22],[548.4,900.14,570.09,923.95],[548.4,862.28,570.09,886.1],[548.38,786.52,570.07,810.34],[557.28,1008.14,580.58,1032.36],[522.26,1008.39,545.56,1032.6],[592.28,1007.87,615.58,1032.09],[627.3,1007.63,650.6,1031.84],[662.32,1007.36,685.62,1031.6],[697.32,1007.11,720.62,1031.33],[732.34,1006.87,755.64,1031.08],[767.34,1006.6,790.67,1030.84],[802.36,1006.35,825.66,1030.57],[837.38,1006.11,860.69,1030.32],[872.38,1005.84,895.69,1030.06],[907.4,1005.59,930.71,1029.81],[1063,1336.44,1086.97,1360.89],[1096.84,1336.44,1120.8,1360.89],[1096.75,1408.55,1120.71,1433],[1063,1408.55,1086.97,1433],[1063,1372.49,1086.97,1396.95],[1097.03,1372.49,1121,1396.95]],walls:[[950,958,961,966,0],[949.85,966.6,960.83,980.71,0],[949.85,981.4,960.83,995.51,0],[949.85,996.22,960.83,1010.33,0],[949.85,1011.03,960.83,1025.13,0],[949.85,1025.83,960.83,1039.94,0],[949.85,1040.65,960.83,1054.76,0],[949.85,1055.46,960.83,1069.57,0],[949.85,1070.28,960.83,1084.39,0],[949.85,1529.46,960.83,1543.57,0],[949.85,1544.26,960.83,1558.37,0],[949.85,1559.09,960.83,1573.2,0],[949.85,1573.89,960.83,1588,0],[949.85,1588.71,960.83,1602.82,0],[949.85,1603.52,960.83,1617.63,0],[949.85,1618.32,960.83,1632.43,0],[949.85,1633.14,960.83,1647.25,0],[949.85,1647.95,960.83,1662.05,0],[950,1663,961,1679,0],[949.85,1085.08,960.83,1099.19,0],[949.85,1099.91,960.83,1114.02,0],[949.85,1114.71,960.83,1128.82,0],[949.85,1129.51,960.83,1143.62,0],[949.85,1144.34,960.83,1158.45,0],[949.85,1159.14,960.83,1173.25,0],[949.85,1173.97,960.83,1188.08,0],[949.85,1188.77,960.83,1202.88,0],[949.85,1203.6,960.83,1217.71,0],[949.85,1218.4,960.83,1232.51,0],[949.85,1233.2,960.83,1247.31,0],[949.85,1248.03,960.83,1262.14,0],[949.85,1262.83,960.83,1276.94,0],[949.85,1277.65,960.83,1291.76,0],[949.85,1292.46,960.83,1306.57,0],[949.85,1307.26,960.83,1321.37,0],[949.85,1322.08,960.83,1336.19,0],[949.85,1336.89,960.83,1351,0],[949.85,1351.71,960.83,1365.82,0],[949.85,1366.52,960.83,1380.63,0],[949.85,1381.34,960.83,1395.45,0],[949.85,1396.14,960.83,1410.25,0],[949.85,1410.95,960.83,1425.06,0],[949.85,1425.77,960.83,1439.88,0],[949.85,1440.57,960.83,1454.68,0],[949.85,1455.4,960.83,1469.51,0],[949.85,1470.2,960.83,1484.31,0],[949.85,1485.03,960.83,1499.14,0],[949.85,1499.83,960.83,1513.94,0],[949.85,1514.63,960.83,1528.74,0],[1025,1108,1036,1123.13,0],[1025,1124.13,1036,1139.26,0],[1025,1140.26,1036,1155.4,0],[1025,1156.4,1036,1171.53,0],[1025,1172.53,1036,1187.66,0],[1025,1188.66,1035.98,1203.53,0],[1025,1204.53,1035.98,1219.39,0],[1025,1220.39,1035.98,1235.26,0],[1025,1236.26,1035.98,1251.12,0],[1025,1252.12,1035.98,1266.99,0],[1025,1267.99,1035.98,1282.85,0],[1025,1283.85,1035.98,1298.72,0],[1025,1299.72,1035.98,1314.58,0],[1025,1315.58,1035.98,1330.45,0],[1025,1331.45,1035.98,1346.31,0],[1025,1347.31,1035.98,1362.18,0],[1025,1363.18,1035.98,1378.04,0],[1025,1379.04,1035.98,1393.91,0],[1025,1394.91,1035.98,1409.77,0],[1025,1410.77,1035.98,1425.64,0],[1025,1426.64,1035.98,1441.5,0],[1025,1442.5,1035.98,1457.37,0],[1025,1458.37,1035.98,1473.23,0],[1025,1474.23,1035.98,1489.1,0],[1025,1490.1,1035.98,1504.96,0],[1025,1505.96,1035.98,1520.83,0],[1025,1521.83,1035.98,1536.7,0],[1025,1537.7,1035.98,1552.56,0],[1025,1553.56,1035.98,1568.43,0],[1025,1569.43,1035.98,1584.29,0],[1025,1585.29,1035.98,1600.16,0],[1025,1601.16,1035.98,1616.02,0],[1025,1617.02,1035.98,1631.89,0],[1025,1632.89,1035.98,1647.75,0],[1025,1648.75,1035.98,1663.62,0],[1025,1664.62,1036,1678.62,0],[1032,1454,1367,1465,1],[1359.55,1454,1374.42,1464.98,1],[1343.69,1454,1358.55,1464.98,1],[1327.82,1454,1342.69,1464.98,1],[1311.96,1454,1326.82,1464.98,1],[1296.09,1454,1310.96,1464.98,1],[1280.23,1454,1295.09,1464.98,1],[1264.36,1454,1279.23,1464.98,1],[1248.5,1454,1263.36,1464.98,1],[1232.63,1454,1247.5,1464.98,1],[1216.77,1454,1231.63,1464.98,1],[1200.9,1454,1215.77,1464.98,1],[1185.04,1454,1199.9,1464.98,1],[1169.17,1454,1184.04,1464.98,1],[1153.3,1454,1168.17,1464.98,1],[1137.44,1454,1152.3,1464.98,1],[1121.57,1454,1136.44,1464.98,1],[1105.71,1454,1120.57,1464.98,1],[1089.84,1454,1104.71,1464.98,1],[1073.98,1454,1088.84,1464.98,1],[1058.11,1454,1072.98,1464.98,1],[1042.25,1454,1057.11,1464.98,1],[1026.38,1454,1041.25,1464.98,1]],pad:[[1344,1319],[1305.73,1319],[1300.06,1306.35],[1292.61,1294.82],[1283.56,1284.58],[1273.08,1275.8],[1261.35,1268.67],[1248.55,1263.35],[1234.85,1260.04],[1220.43,1258.89],[1206.01,1260.04],[1192.31,1263.35],[1179.51,1268.67],[1167.78,1275.8],[1157.3,1284.58],[1148.25,1294.82],[1140.8,1306.35],[1135.13,1319],[1057,1319],[1057,1151],[1344,1151],[1344,1319]],ring:[1219.87,1349.94,86],hose:[[1276.74,1368.21],[1318.31,1366.79],[1317.44,1341.4],[1291.5,1342.44]],pumpOuter:[1318.05,1361.86,13.49],pumpInner:[1318.05,1361.86,8.5],pool:[1218.87,1349.99,72.5],furniture:{"furniture-1":{frame:[[1207.14,1166.31],[1182.15,1167.04],[1184.01,1246],[1209,1245.27],[1207.14,1166.31]],back:[[1207.14,1166.21],[1182.15,1166.94],[1182.93,1200.13],[1207.92,1199.41],[1207.14,1166.21]]},"furniture-2":{frame:[[1266,1168.19],[1241,1168.19],[1241,1247],[1266,1247],[1266,1168.19]],back:[[1266,1168.11],[1241,1168.11],[1241,1195.82],[1266,1195.82],[1266,1168.11]]},"furniture-3":{frame:[[1219,1177.69],[1219,1184.56],[1219.08,1185.37],[1219.31,1186.12],[1219.68,1186.8],[1220.17,1187.39],[1220.76,1187.88],[1221.44,1188.25],[1222.19,1188.48],[1223,1188.56],[1231,1188.56],[1231.81,1188.48],[1232.56,1188.25],[1233.24,1187.88],[1233.83,1187.39],[1234.32,1186.8],[1234.69,1186.12],[1234.92,1185.37],[1235,1184.56],[1235,1177.69],[1234.92,1176.88],[1234.69,1176.13],[1234.32,1175.45],[1233.83,1174.86],[1233.24,1174.37],[1232.56,1174],[1231.81,1173.77],[1231,1173.69],[1223,1173.69],[1222.19,1173.77],[1221.44,1174],[1220.76,1174.37],[1220.17,1174.86],[1219.68,1175.45],[1219.31,1176.13],[1219.08,1176.88],[1219,1177.69]]},"furniture-4":{frame:[[1321,1168.19],[1296,1168.19],[1296,1247],[1321,1247],[1321,1168.19]],back:[[1321,1168.11],[1296,1168.11],[1296,1195.82],[1321,1195.82],[1321,1168.11]]},"furniture-5":{frame:[[1274,1177.69],[1274,1184.56],[1274.08,1185.37],[1274.31,1186.12],[1274.68,1186.8],[1275.17,1187.39],[1275.76,1187.88],[1276.44,1188.25],[1277.19,1188.48],[1278,1188.56],[1286,1188.56],[1286.81,1188.48],[1287.56,1188.25],[1288.24,1187.88],[1288.83,1187.39],[1289.32,1186.8],[1289.69,1186.12],[1289.92,1185.37],[1290,1184.56],[1290,1177.69],[1289.92,1176.88],[1289.69,1176.13],[1289.32,1175.45],[1288.83,1174.86],[1288.24,1174.37],[1287.56,1174],[1286.81,1173.77],[1286,1173.69],[1278,1173.69],[1277.19,1173.77],[1276.44,1174],[1275.76,1174.37],[1275.17,1174.86],[1274.68,1175.45],[1274.31,1176.13],[1274.08,1176.88],[1274,1177.69]]},"furniture-6":{frame:[[1080.34,1267.08],[1082.71,1295.59],[1123.62,1292.19],[1121.25,1263.68],[1080.34,1267.08]],back:[[1080.29,1267.09],[1082.66,1295.59],[1099.85,1294.17],[1097.48,1265.66],[1080.29,1267.09]]},"furniture-7":{frame:[[1098.55,1198.84],[1086.52,1224.8],[1123.77,1242.05],[1135.8,1216.1],[1098.55,1198.84]],back:[[1098.5,1198.82],[1086.48,1224.78],[1102.13,1232.03],[1114.16,1206.07],[1098.5,1198.82]]},"furniture-8":{frame:[[1086.19,1244.65],[1084.83,1252.53],[1084.77,1253.34],[1084.87,1254.12],[1085.12,1254.85],[1085.5,1255.52],[1086,1256.1],[1086.6,1256.58],[1087.3,1256.93],[1088.08,1257.15],[1095.96,1258.52],[1096.77,1258.58],[1097.55,1258.48],[1098.28,1258.23],[1098.95,1257.85],[1099.53,1257.35],[1100.01,1256.75],[1100.37,1256.05],[1100.59,1255.27],[1101.96,1247.38],[1102.02,1246.57],[1101.92,1245.8],[1101.67,1245.06],[1101.29,1244.4],[1100.79,1243.82],[1100.18,1243.34],[1099.48,1242.98],[1098.7,1242.76],[1090.82,1241.39],[1090.01,1241.33],[1089.23,1241.43],[1088.5,1241.68],[1087.83,1242.06],[1087.25,1242.56],[1086.77,1243.17],[1086.41,1243.87],[1086.19,1244.65]]}},turf:[[1055,1649],[1055,1492],[1352,1492],[1352,1649]],shed:[[1287,1505.38],[1287,1602.87],[1339,1602.87],[1339,1505.38],[1287,1505.38]],planters:[[[1289.08,1410.01,10.78],[1289.08,1410.01,9.47],[1289.08,1410.01,6.86]],[[1321.07,1321.01,10.78],[1321.08,1321.01,9.47],[1321.08,1321.01,6.86]],[[1085.93,1181.87,10.78],[1085.93,1181.87,9.47],[1085.93,1181.87,6.86]],[[1103.93,1171.87,10.78],[1103.93,1171.87,9.47],[1103.93,1171.87,6.86]],[[1301.08,1387.01,10.78],[1301.08,1387.01,9.47],[1301.08,1387.01,6.86]],[[1316.15,1408.08,16.61],[1316.15,1408.08,14.6],[1316.15,1408.08,10.57]]],boulders:[[[1278.32,1429.2,7.45,"#D4C8BE"],[1287.22,1424.16,2.77,"#CAC6C3"],[1276.32,1421.69,2.77,"#CAC6C3"],[1273.37,1441.72,2.77,"#CAC6C3"],[1276.85,1437.96,2.77,"#A38B7A"],[1267.74,1430.09,2.77,"#CAC6C3"],[1269.47,1420.91,6.55,"#A38B7A"],[1261.74,1430.68,4.93,"#AAA29B"],[1276.7,1414.02,4.93,"#AAA29B"],[1282.49,1421.05,3.46,"#AAA29B"],[1267.89,1437.82,3.28,"#CAC6C3"]],[[1158.32,1429.2,7.45,"#D4C8BE"],[1167.22,1424.16,2.77,"#CAC6C3"],[1156.32,1421.69,2.77,"#CAC6C3"],[1153.37,1441.72,2.77,"#CAC6C3"],[1156.85,1437.96,2.77,"#A38B7A"],[1147.74,1430.09,2.77,"#CAC6C3"],[1149.47,1420.91,6.55,"#A38B7A"],[1141.74,1430.68,4.93,"#AAA29B"],[1156.7,1414.02,4.93,"#AAA29B"],[1162.49,1421.05,3.46,"#AAA29B"],[1147.89,1437.82,3.28,"#CAC6C3"]]],umbrella:[[[1164.96,1472.43],[1257.43,1351.47],[1136.47,1259.01],[1044.01,1379.96],[1164.96,1472.43]],[[1157.63,1417.49],[1202.49,1358.81],[1143.81,1313.95],[1098.95,1372.63],[1157.63,1417.49]],[[1106.18,1445.65],[1127.87,1417.28],[1099.5,1395.59],[1077.81,1423.96],[1106.18,1445.65]]],epanel:[[[1326,1497],[1341,1497],[1341,1500],[1326,1500]],[[1329.75,1500],[1337.25,1500],[1337.25,1506],[1329.75,1506]]]};Ve.pavers.forEach(i=>{i[0]>1050&&i[0]<1130&&i[1]>1330&&(i[0]-=5.67,i[2]-=5.67,i[1]+=7.28,i[3]+=7.28)});{let i=(t,e,n)=>t.forEach(s=>{s[0]+=e,s[1]+=n});Ve.umbrella.forEach(t=>i(t,62,13)),Ve.boulders[1].forEach((t,e)=>{let n=[[1185.33,1433.6,10.06],[1178.35,1422.23,3.74],[1187.04,1446.44,3.74],[1139.51,1429.14,3.74],[1148.29,1413.93,3.74],[1164.8,1407.92,3.74],[1146.03,1440.43,8.84],[1148.35,1424.1,6.66],[1158.3,1415.75,6.66],[1178.67,1445.24,4.67],[1170.95,1416.69,4.43]][e];t[0]=n[0],t[1]=n[1],t[2]=n[2]}),i(Ve.boulders[0],-14,14)}var wt=14.35,as=1036,cs=1108,jt=1/12,Pi=4/12,J=i=>(i-as)/wt,tt=i=>(i-cs)/wt,un=(i,t,e)=>Math.min(e,Math.max(t,i)),Ie=Math.PI*2;function hx(i,t,e){let n=Math.imul(i|0,374761393)^Math.imul(t|0,668265263)^Math.imul(e|0,2147483647);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function Li(i,t,e){let n=Math.floor(i),s=Math.floor(t),r=Math.floor(e),a=i-n,o=t-s,c=e-r,l=g=>g*g*(3-2*g),h=l(a),u=l(o),d=l(c),f=0;for(let g=0;g<2;g++)for(let _=0;_<2;_++)for(let m=0;m<2;m++)f+=hx(n+g,s+_,r+m)*(g?h:1-h)*(_?u:1-u)*(m?d:1-d);return f}function La(i,t,e,n,s=1){let r=i.attributes.position;for(let a=0;a<r.count;a++){let o=r.getX(a),c=r.getY(a),l=r.getZ(a),h=Li(o*e+n,c*e+n*1.7,l*e-n*.3)*.65+Li(o*e*2.3+n,c*e*2.3,l*e*2.3)*.35,u=1-t/2+t*h;r.setXYZ(a,o*u,c*u*s,l*u)}return i.computeVertexNormals(),i}function re(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var $={mode:"proposed",pad:-1*jt,step1:7*jt,step2:7*jt,sink:0,pitch:1.5,walkFall:18*jt,lawnFall:12*jt,eastFall:7*jt,time:16.5,month:10,north:0,view:"overview",cdepth:18*jt,under:!1,padSurf:"brick",ver:"plan",fbPat:"90",fbEdge:"block",fbColor:"red",pumpAt:"post",layers:{pool:!0,furniture:!0,umbrella:!0,planters:!0,shed:!0,electrical:!0,context:!0}},Od="backyard_3d_v4",Ed={pad:-1*jt,step1:7*jt,step2:7*jt,sink:0,pitch:1.5,walkFall:18*jt,eastFall:7*jt};try{let i=JSON.parse(localStorage.getItem(Od)||"null");if(i){for(let t of["fbColor","fbEdge","fbPat","pumpAt","ver","padSurf","drag","cdepth","pad","step1","step2","walkFall","north"])i[t]!==void 0&&($[t]=i[t]);i.layers&&Object.assign($.layers,i.layers)}}catch{}function Vn(){try{localStorage.setItem(Od,JSON.stringify($))}catch{}}var Hn=1459.5,Ze=1324.5,he=1367,ux=()=>he,Tl=[[he,1108],[he,1681]],Jr=960.83,pn=Jr+56*jt*wt,mn=[pn,pn+11],zt=[1219.87,1349.94],Ii=83,Sa=i=>un((i-1108)/573,0,1),dx=i=>un((i-1036)/354,0,1),Kr=i=>-.35-$.walkFall*Sa(i),Ia=(i,t)=>-.25-$.lawnFall*Sa(t),$e=(i,t)=>-.35-$.walkFall*Sa(t)-$.eastFall*dx(i)*(.3+.7*Sa(t)),dn=()=>$.pad,Jn=()=>$.pad-$.step1,fx=()=>$.pad-$.step1-$.step2,Gl=i=>fx()-$.pitch/100*Math.max(0,i-Hn)/wt,px=(i,t)=>Math.hypot(i-zt[0],t-zt[1])<Ii,sr=()=>$.ver==="quote"||$.ver==="feedback"&&$.fbEdge==="steel";var Fd=()=>he;var Me=1319,$n=Math.hypot(1305.73-zt[0],1319-zt[1]);function Ul(i,t){return i>=Fd(t)?$e(i,t):t>=Hn?Gl(t):t>=Me||Math.hypot(i-zt[0],t-zt[1])<$n?Jn():dn()}function jr(i,t){return sr()?Ul(i,t):i>=ux(t)?$e(i,t):t>=Hn?Gl(t):t>=Ze||px(i,t)?Jn():dn()}var Da=i=>i<950?Ia(i,1681):i<mn[1]?Kr(1681):$e(i,1681);function Oe(i,t){if(t>=1108){if($.mode==="proposed"&&i>=mn[1])return jr(i,t);if($.mode==="existing"&&i>=pn)return $e(i,t)}return i>=Jr&&i<pn&&t>=958?Kr(t):i<950&&t>=1049?Ia(i,t):-.25}var Ua=Math.sqrt(Ii*Ii-(Ze-zt[1])**2),mx=zt[0]-Ua,gx=zt[0]+Ua,_x=Math.atan2(Ze-zt[1],-Ua),xx=Math.atan2(Ze-zt[1],Ua),qr=(i,t,e=Ii,n=24)=>Array.from({length:n-1},(s,r)=>{let a=i+(t-i)*(r+1)/n;return[zt[0]+Math.cos(a)*e,zt[1]+Math.sin(a)*e]}),Qr=document.getElementById("wrap"),Nl=Math.min(screen.width,screen.height)<700,Fe=new Tr({antialias:!0,powerPreference:"high-performance"});Fe.setPixelRatio(Math.min(devicePixelRatio,Nl?1.75:2));Fe.shadowMap.enabled=!0;Fe.shadowMap.type=ml;Fe.shadowMap.autoUpdate=!1;Fe.toneMapping=gl;Fe.toneMappingExposure=1;Fe.outputColorSpace=Ue;Qr.prepend(Fe.domElement);var ae=new Gs,Pe=new tn(55,1,.08,4e3),pe=new _a(Pe,Fe.domElement);pe.enableDamping=!0;pe.dampingFactor=.14;pe.zoomSpeed=3.2;pe.zoomToCursor=!0;pe.rotateSpeed=1.1;pe.panSpeed=1;pe.maxPolarAngle=Math.PI*.495;pe.minDistance=.3;pe.maxDistance=320;pe.screenSpacePanning=!1;var yx=new ks(Fe);ae.environment=yx.fromScene(new ya,.04).texture;var Bd=Fe.capabilities.getMaxAnisotropy(),vx=()=>ae.traverse(i=>{if(i.isMesh)for(let t of[].concat(i.material))t.envMapIntensity===1&&(t.envMapIntensity=.35)});function xe(i,t,e,n,s=!0){let r=document.createElement("canvas");r.width=i,r.height=t;let a=r.getContext("2d");e(a,i,t);let o=new jo(r);return o.wrapS=o.wrapT=vr,n&&o.repeat.set(n[0],n[1]),o.anisotropy=Bd,s&&(o.colorSpace=Ue),o}function Ge(i,t,e,n,s,r,a,o){for(let c=0;c<n;c++){i.fillStyle=s[Math.floor(o()*s.length)],i.globalAlpha=.25+o()*.6;let l=r+o()*(a-r);i.beginPath(),i.arc(o()*t,o()*e,l,0,Ie),i.fill()}i.globalAlpha=1}function hs(i,t,e,n,s,r,a=60){i.fillStyle=n,i.fillRect(0,0,t,e);for(let o=0;o<a;o++){let c=t*(.05+r()*.2),l=r()*t,h=r()*e,u=i.createRadialGradient(l,h,0,l,h,c),d=(r()-.5)*s;u.addColorStop(0,d>0?`rgba(255,255,255,${d})`:`rgba(0,0,0,${-d})`),u.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=u;for(let f of[-t,0,t])for(let g of[-e,0,e])i.save(),i.translate(f,g),i.fillRect(l-c,h-c,2*c,2*c),i.restore()}}var Zt={};Zt.block=xe(256,256,(i,t,e)=>{let n=re(11);hs(i,t,e,"#d9ccb4",.16,n,40),Ge(i,t,e,1600,["#a8987c","#efe6d4","#bfae90","#8f7f66"],.4,1.6,n);for(let s=0;s<40;s++)i.fillStyle="rgba(90,75,55,0.35)",i.beginPath(),i.ellipse(n()*t,n()*e,1+n()*3,1+n()*2,n()*3,0,Ie),i.fill()},null);Zt.stone=xe(256,256,(i,t,e)=>{let n=re(5);hs(i,t,e,"#d8c6b0",.1,n,30),Ge(i,t,e,2600,["#b9a68e","#efe3d2","#a08c76","#cdb79e"],.4,1.3,n)},null);Zt.concrete=xe(512,512,(i,t,e)=>{let n=re(21);hs(i,t,e,"#c9ae95",.16,n,70),Ge(i,t,e,5e3,["#a88e76","#dcc6b0","#b39880"],.3,1.1,n);for(let s=0;s<9;s++)i.strokeStyle="rgba(80,60,45,0.18)",i.lineWidth=1+n()*2,i.beginPath(),i.ellipse(n()*t,n()*e,20+n()*80,10+n()*50,n()*3,0,Ie),i.stroke();i.globalAlpha=.05;for(let s=0;s<e;s+=2)i.fillStyle=n()<.5?"#000":"#fff",i.fillRect(0,s,t,1);i.globalAlpha=1},[1,1]);Zt.siding=xe(256,256,(i,t,e)=>{let n=re(3);i.fillStyle="#a9b7a4",i.fillRect(0,0,t,e);let s=7;for(let r=0;r<s;r++){let a=r*e/s,o=i.createLinearGradient(0,a,0,a+e/s);o.addColorStop(0,"rgba(255,255,255,0.10)"),o.addColorStop(.85,"rgba(0,0,0,0.02)"),o.addColorStop(.92,"rgba(0,0,0,0.22)"),o.addColorStop(1,"rgba(0,0,0,0.3)"),i.fillStyle=o,i.fillRect(0,a,t,e/s)}Ge(i,t,e,400,["#93a28f","#bccab8"],.3,1,n)},null);Zt.shingle=xe(256,256,(i,t,e)=>{let n=re(9);i.fillStyle="#5d5f61",i.fillRect(0,0,t,e);let s=8,r=t/6;for(let a=0;a<s;a++){let o=a*e/s,c=a%2*r/2;for(let l=-1;l<7;l++){let h=Math.floor(80+n()*30);i.fillStyle=`rgb(${h},${h+2},${h+5})`,i.fillRect(l*r+c+1,o+1,r-2,e/s-2)}i.fillStyle="rgba(0,0,0,0.45)",i.fillRect(0,o+e/s-3,t,3)}Ge(i,t,e,3e3,["#3c3e41","#8a8c8e","#6e7174"],.3,.9,n)},null);Zt.board=xe(512,512,(i,t,e)=>{let n=re(17),s=9;for(let r=0;r<s;r++){let a=n(),o=[118+a*40,104+a*34,88+a*28];i.fillStyle=`rgb(${o.map(Math.round)})`,i.fillRect(r*t/s,0,t/s,e);for(let c=0;c<26;c++){i.strokeStyle=`rgba(${n()<.5?"40,30,22":"210,200,185"},${.08+n()*.12})`,i.lineWidth=.6+n()*1.4;let l=r*t/s+n()*t/s;i.beginPath(),i.moveTo(l,0),i.bezierCurveTo(l+n()*6-3,e*.3,l+n()*6-3,e*.6,l+n()*4-2,e),i.stroke()}i.fillStyle="rgba(20,14,10,0.55)",i.fillRect(r*t/s,0,2,e),n()<.7&&(i.fillStyle="rgba(40,28,20,0.5)",i.beginPath(),i.ellipse(r*t/s+n()*t/s,n()*e,3+n()*4,5+n()*6,0,0,Ie),i.fill())}},null);Zt.stoneWall=xe(1024,1024,(i,t,e)=>{let n=re(83);i.fillStyle="#e6dfd2",i.fillRect(0,0,t,e);let s=["#eadfca","#f0e6d4","#e3d2b6","#ead8bc","#dcc7a6","#f2eadb","#e2cba9","#d9bd97","#ecd9bf","#e8d4b8"],r=0;for(;r<e;){let a=Math.min(e-r,58+Math.floor(n()*4)*30),o=-n()*120;for(;o<t;){let c=110+n()*260,l=s[Math.floor(n()*s.length)],h=4+n()*2,u=o+h,d=r+h,f=c-h*2,g=a-h*2,_=n()<.3&&g>90,m=_?[[d,g*.48],[d+g*.52,g*.48]]:[[d,g]];for(let[p,y]of m){i.fillStyle=_?s[Math.floor(n()*s.length)]:l,i.beginPath(),i.moveTo(u+n()*6,p+n()*4),i.lineTo(u+f-n()*6,p+n()*4),i.lineTo(u+f-n()*5,p+y-n()*5),i.lineTo(u+n()*5,p+y-n()*5),i.closePath(),i.fill();let x=i.createLinearGradient(u,p,u+f*.3,p+y);x.addColorStop(0,"rgba(255,255,255,0.18)"),x.addColorStop(1,"rgba(90,70,45,0.14)"),i.fillStyle=x,i.fill();for(let M=0;M<f*y/70;M++)i.fillStyle=`rgba(${n()<.5?"120,98,70":"255,250,240"},${.1+n()*.16})`,i.fillRect(u+n()*f,p+n()*y,1+n()*2.5,1+n()*2.5);n()<.35&&(i.strokeStyle="rgba(120,95,65,0.18)",i.lineWidth=1,i.beginPath(),i.moveTo(u+n()*f,p+n()*y),i.lineTo(u+n()*f,p+n()*y),i.stroke())}o+=c}r+=a}},null);Zt.garage=xe(512,224,(i,t,e)=>{i.fillStyle="#ecebe6",i.fillRect(0,0,t,e);let n=4,s=8;for(let r=0;r<n;r++){i.fillStyle="rgba(0,0,0,0.22)",i.fillRect(0,r*e/n-1,t,2);for(let a=0;a<s;a++){let o=a*t/s+7,c=r*e/n+8,l=t/s-14,h=e/n-16;i.fillStyle="#e2e1db",i.fillRect(o,c,l,h),i.strokeStyle="rgba(255,255,255,0.9)",i.lineWidth=2,i.beginPath(),i.moveTo(o,c+h),i.lineTo(o,c),i.lineTo(o+l,c),i.stroke(),i.strokeStyle="rgba(0,0,0,0.18)",i.beginPath(),i.moveTo(o+l,c),i.lineTo(o+l,c+h),i.lineTo(o,c+h),i.stroke()}}},[1,1]);Zt.chips=xe(256,256,(i,t,e)=>{let n=re(91);i.fillStyle="#d9d4c9",i.fillRect(0,0,t,e);for(let s=0;s<2600;s++){let r=Math.round(200+n()*55);i.fillStyle=`rgb(${r},${r-4-n()*8},${r-12-n()*10})`;let a=1.5+n()*4;i.save(),i.translate(n()*t,n()*e),i.rotate(n()*3),i.fillRect(-a,-a*.7,a*2,a*1.4),i.restore()}Ge(i,t,e,900,["#8d8476","#a59c8d"],.4,1.4,n)},null);Zt.asphalt=xe(256,256,(i,t,e)=>{let n=re(97);hs(i,t,e,"#6b6c6c",.12,n,40),Ge(i,t,e,6e3,["#4e4f50","#858684","#5c5d5e"],.3,1.1,n)},null);function li(i,t,e,n,s,r,a,o){for(let c of[-t,0,t])for(let l of[-e,0,e])i.fillStyle=o,i.fillRect(n+c,s+l,r,a)}var $r={cbrick:{span:64/12,tex:xe(1024,1024,(i,t,e)=>{let n=re(101),s=t/16,r=5;i.fillStyle="#7d6658",i.fillRect(0,0,t,e);let a=["#a65a41","#b4684b","#9a5038","#bf7656","#a9603f","#b06a52","#94553d","#c17f62"],o=(l,h)=>(l%h+h)%h,c=l=>{let h=Math.imul(l^2654435769,2654435761)>>>0;return h=(h^h>>>15)>>>0,h/4294967296};for(let l=-20;l<36;l++)for(let h=-10;h<10;h++){let u=(l+h*4)*s,d=l*s,f=o(l+h*4,16)*64+o(l,16)*2;for(let[g,_,m,p,y]of[[u,d,2*s,s,0],[u,d+s,s,2*s,1]]){let x=a[Math.floor(c(f+y)*a.length)],M=o(g,t)+r/2,b=o(_,e)+r/2;li(i,t,e,M,b,m-r,p-r,x),li(i,t,e,M,b,m-r,2,"rgba(255,235,215,0.22)"),li(i,t,e,M,b+p-r-2,m-r,2,"rgba(40,20,10,0.25)")}}Ge(i,t,e,26e3,["#7a4430","#d29a7c","#8f5a44"],.5,1.6,n)},[1,1])},amaretto:{span:64/12,tex:xe(1024,1024,(i,t,e)=>{let n=re(131),s=t/16,r=5;i.fillStyle="#8c7766",i.fillRect(0,0,t,e);let a=["#c39a72","#b98a62","#cfa77b","#a87a57","#d3ae84","#b5845c","#c99c70","#9f7353"],o=(l,h)=>(l%h+h)%h,c=l=>{let h=Math.imul(l^2135587861,2246822519)>>>0;return h=(h^h>>>13)>>>0,h/4294967296};for(let l=-20;l<36;l++)for(let h=-10;h<10;h++){let u=(l+h*4)*s,d=l*s,f=o(l+h*4,16)*64+o(l,16)*2;for(let[g,_,m,p,y]of[[u,d,2*s,s,0],[u,d+s,s,2*s,1]]){let x=a[Math.floor(c(f+y)*a.length)],M=o(g,t)+r/2,b=o(_,e)+r/2;li(i,t,e,M,b,m-r,p-r,x),li(i,t,e,M,b,m-r,2,"rgba(255,240,220,0.25)"),li(i,t,e,M,b+p-r-2,m-r,2,"rgba(50,30,15,0.22)")}}Ge(i,t,e,26e3,["#8a6a4e","#e2c6a2","#a0805f"],.5,1.6,n)},[1,1])},anthracite:{span:32/12,tex:xe(512,512,(i,t,e)=>{let n=re(137),s=t/8,r=t/4,a=5;i.fillStyle="#2a2a2c",i.fillRect(0,0,t,e);for(let o=0;o<8;o++)for(let c=0;c<4;c++){let l=58+Math.floor(n()*22);i.fillStyle=`rgb(${l},${l},${l+3})`,i.fillRect(o*s+a/2,c*r+a/2,s-a,r-a)}Ge(i,t,e,6e3,["#2e2e30","#777779","#4a4a4d"],.4,1.3,n)},[1,1])},amaSoldier:{span:32/12,tex:xe(512,512,(i,t,e)=>{let n=re(139),s=t/8,r=t/4,a=5;i.fillStyle="#8c7766",i.fillRect(0,0,t,e);let o=["#c39a72","#b98a62","#cfa77b","#a87a57","#d3ae84","#b5845c"];for(let c=0;c<8;c++)for(let l=0;l<4;l++)i.fillStyle=o[Math.floor(n()*o.length)],i.fillRect(c*s+a/2,l*r+a/2,s-a,r-a);Ge(i,t,e,6e3,["#8a6a4e","#e2c6a2","#a0805f"],.4,1.3,n)},[1,1])},...(()=>{let i={},t={red:{c:["#a65a41","#b4684b","#9a5038","#bf7656","#a9603f","#b06a52","#94553d","#8a4a35"],g:"#6e5a4d",s:["#7a4430","#d29a7c","#8f5a44"]},walnut:{c:["#6b4a35","#7a5640","#5e4030","#86614a","#704f3a","#55392a","#8c6850"],g:"#45372d",s:["#4a3426","#a07d62","#5e4434"]},charcoal:{c:["#4b4744","#5a5550","#3f3c3a","#6b645c","#55504a","#7a6f62","#47423d"],g:"#2c2a28",s:["#2e2c2a","#8d8478","#4e4944"]}};for(let[e,n]of Object.entries(t))i["hb_"+e]={span:64/12,tex:xe(1024,1024,(s,r,a)=>{let o=re(e.length*31+7),c=r/16,l=5;s.fillStyle=n.g,s.fillRect(0,0,r,a);let h=(d,f)=>(d%f+f)%f,u=d=>{let f=Math.imul(d^1540483477,2654435761)>>>0;return f=(f^f>>>15)>>>0,f/4294967296};for(let d=-20;d<36;d++)for(let f=-10;f<10;f++){let g=(d+f*4)*c,_=d*c,m=h(d+f*4,16)*64+h(d,16)*2;for(let[p,y,x,M,b]of[[g,_,2*c,c,0],[g,_+c,c,2*c,1]]){let T=n.c[Math.floor(u(m+b+e.length)*n.c.length)],S=h(p,r)+l/2,P=h(y,a)+l/2;li(s,r,a,S,P,x-l,M-l,T),li(s,r,a,S,P,x-l,2,"rgba(255,240,220,0.14)"),li(s,r,a,S,P+M-l-2,x-l,2,"rgba(0,0,0,0.28)")}}Ge(s,r,a,26e3,n.s,.5,1.6,o)},[1,1])},i["so_"+e]={span:32/12,tex:xe(512,512,(s,r,a)=>{let o=re(e.length*17+3),c=r/8,l=r/4,h=5;s.fillStyle=n.g,s.fillRect(0,0,r,a);for(let u=0;u<8;u++)for(let d=0;d<4;d++)s.fillStyle=n.c[Math.floor(o()*n.c.length)],s.fillRect(u*c+h/2,d*l+h/2,c-h,l-h);Ge(s,r,a,6e3,n.s,.4,1.3,o)},[1,1])};return i})(),slab:{span:4,tex:xe(512,512,(i,t,e)=>{let n=re(103);i.fillStyle="#8f8a82",i.fillRect(0,0,t,e);let s=t/2,r=5;for(let a=0;a<2;a++)for(let o=0;o<2;o++)i.fillStyle=["#d8c6b0","#d2c0a9","#dccab4","#d4c3ad"][a*2+o],i.fillRect(a*s+r/2,o*s+r/2,s-r,s-r);Ge(i,t,e,6e3,["#b9a68e","#efe3d2","#a08c76"],.4,1.3,n)},[1,1])},conc:{span:8,tex:xe(1024,1024,(i,t,e)=>{let n=re(107);hs(i,t,e,"#cdb9a3",.12,n,80),Ge(i,t,e,16e3,["#b29c86","#e0cfbd","#bba690"],.3,1,n),i.globalAlpha=.06;for(let s=0;s<e;s+=3)i.fillStyle=n()<.5?"#000":"#fff",i.fillRect(0,s,t,1);i.globalAlpha=1,i.fillStyle="rgba(60,45,35,0.55)",i.fillRect(0,0,t,3),i.fillRect(0,0,3,e),i.fillRect(0,e/2-1,t,3),i.fillRect(t/2-1,0,3,e)},[1,1])}};Zt.mesh=xe(64,64,(i,t,e)=>{i.clearRect(0,0,t,e),i.fillStyle="#2c241c",i.fillRect(0,0,t,3),i.fillRect(0,0,3,e)},null);Zt.corr=xe(64,8,(i,t,e)=>{for(let n=0;n<t;n++){let s=Math.sin(n/t*Ie*2),r=Math.round(128+s*80);i.fillStyle=`rgb(${r},${r},${r})`,i.fillRect(n,0,1,e)}},null,!1);var Hd=[.17,.235,.3,.365,.43,.6,.665,.9];Zt.tank=xe(512,512,(i,t,e)=>{let n=re(61);i.fillStyle="#c9cfd2",i.fillRect(0,0,t,e);for(let r=0;r<900;r++){let a=n()*t,o=n()*e,c=6+n()*26,l=Math.round(178+n()*62);i.fillStyle=`rgba(${l},${l+3},${l+6},${.35+n()*.45})`,i.beginPath();let h=5+Math.floor(n()*3);for(let u=0;u<h;u++){let d=u/h*Ie+n()*.6,f=c*(.6+n()*.5);i.lineTo(a+Math.cos(d)*f,o+Math.sin(d)*f*.8)}i.closePath(),i.fill()}Ge(i,t,e,2500,["#9ea6ab","#e9edef","#b4bcc0"],.4,1.2,n);for(let r of Hd){let a=r*e,o=i.createLinearGradient(0,a-9,0,a+9);o.addColorStop(0,"rgba(255,255,255,0)"),o.addColorStop(.3,"rgba(255,255,255,0.55)"),o.addColorStop(.55,"rgba(90,98,104,0.45)"),o.addColorStop(1,"rgba(90,98,104,0)"),i.fillStyle=o,i.fillRect(0,a-9,t,18)}let s=i.createLinearGradient(0,0,0,e);s.addColorStop(0,"rgba(0,0,0,0.12)"),s.addColorStop(.12,"rgba(0,0,0,0)"),s.addColorStop(1,"rgba(0,0,0,0.06)"),i.fillStyle=s,i.fillRect(0,0,t,e)},null);Zt.tankBump=xe(16,512,(i,t,e)=>{i.fillStyle="#808080",i.fillRect(0,0,t,e);for(let n of Hd){let s=n*e,r=i.createLinearGradient(0,s-8,0,s+8);r.addColorStop(0,"#808080"),r.addColorStop(.5,"#f0f0f0"),r.addColorStop(1,"#808080"),i.fillStyle=r,i.fillRect(0,s-8,t,16)}},null,!1);Zt.caustic=xe(512,512,(i,t,e)=>{let n=re(71),s=Array.from({length:46},()=>[n()*t,n()*e]),r=i.createImageData(t,e),a=r.data;for(let o=0;o<e;o++)for(let c=0;c<t;c++){let l=1e9,h=1e9;for(let[_,m]of s){let p=Math.abs(c-_),y=Math.abs(o-m);p=Math.min(p,t-p),y=Math.min(y,e-y);let x=p*p+y*y;x<l?(h=l,l=x):x<h&&(h=x)}let u=Math.sqrt(h)-Math.sqrt(l),d=Math.pow(Math.max(0,1-u/3.2),2)*.55,f=Li(c/40,o/40,3)*14,g=(o*t+c)*4;a[g]=128+f+95*d,a[g+1]=146+f+90*d,a[g+2]=146+f+82*d,a[g+3]=255}i.putImageData(r,0,0)},[3,3]);Zt.dirt=xe(1024,1536,(i,t,e)=>{let n=re(31),s=i.createImageData(t,e),r=s.data;for(let a=0;a<e;a++)for(let o=0;o<t;o++){let c=(a*t+o)*4,l=Li(o/90,a/90,1)*.6+Li(o/22,a/22,5)*.4,h=Li(o/7,a/7,9),u=176+l*34-h*14,d=150+l*30-h*14,f=124+l*26-h*12,g=a/e,_=Li(o/60,a/60,21)*.7+Li(o/14,a/14,33)*.3,m=.72-g*.42;if(_>m){let y=un((_-m)*6,0,1)*(.55+n()*.45);u=u*(1-y)+(78+n()*40)*y,d=d*(1-y)+(104+n()*44)*y,f=f*(1-y)+(52+n()*20)*y}let p=n();p<.05?(u*=.78,d*=.76,f*=.74):p>.975&&(u=u*.5+118,d=d*.5+112,f=f*.5+104),r[c]=u,r[c+1]=d,r[c+2]=f,r[c+3]=255}i.putImageData(s,0,0);for(let a=0;a<70;a++){i.fillStyle=`rgba(${215+n()*25},${205+n()*25},${185+n()*20},0.9)`;let o=2+n()*5;i.save(),i.translate(n()*t,n()*e),i.rotate(n()*3),i.fillRect(-o,-o*.6,o*2,o*1.2),i.restore()}},null);Zt.grassFar=xe(256,256,(i,t,e)=>{let n=re(41);hs(i,t,e,"#5f7a3e",.18,n,50),Ge(i,t,e,4e3,["#4c6a30","#7d9550","#6a8445"],.4,1.2,n)},[1,1]);Zt.brush=xe(256,256,(i,t,e)=>{let n=re(43);hs(i,t,e,"#5b6338",.25,n,60),Ge(i,t,e,5e3,["#3d4a26","#7a7646","#6b5f3e"],.5,2,n)},[1,1]);Zt.leaf=xe(128,128,(i,t,e)=>{let n=re(47);i.fillStyle="#808080",i.fillRect(0,0,t,e),Ge(i,t,e,900,["#5a5a5a","#a5a5a5","#3e3e3e","#c4c4c4"],.8,2.6,n)},[1,1]);var X={ground:new ht({color:10133626,roughness:.97}),dirt:new ht({map:Zt.dirt,roughness:1}),outside:new ht({map:Zt.grassFar,roughness:1}),brush:new ht({map:Zt.brush,roughness:1}),block:new ht({map:Zt.block,roughness:.92,color:16777215}),stone:new ht({map:Zt.stone,roughness:.9}),concrete:new ht({map:Zt.concrete,roughness:.9,side:Te}),siding:new ht({map:Zt.siding,roughness:.8}),stoneWall:new ht({map:Zt.stoneWall,roughness:.9,emissive:2761752,emissiveIntensity:.35}),garageDoor:new ht({map:Zt.garage,roughness:.55}),frontDoor:new ht({color:7219746,roughness:.5}),chips:new ht({map:Zt.chips,roughness:1}),asphalt:new ht({map:Zt.asphalt,roughness:.95}),trim:new ht({color:15921386,roughness:.6}),skirt:new ht({color:12033408,roughness:.95}),shingle:new ht({map:Zt.shingle,roughness:.95}),glassDark:new ht({color:2435888,roughness:.08,metalness:.2,envMapIntensity:1.4}),blinds:new ht({color:14867661,roughness:.7}),board:new ht({map:Zt.board,roughness:.95}),steelPost:new ht({color:10133411,roughness:.45,metalness:.7}),hogFrame:new ht({color:3877922,roughness:.7,metalness:.4}),hogMesh:new ht({map:Zt.mesh,color:16777215,alphaTest:.4,side:Te,roughness:.6,metalness:.4}),limeTint:null,skirtSoil:new ht({color:9403752,roughness:1,side:Te}),edging:new ht({color:9128491,roughness:.85,metalness:.25}),wood:new ht({color:5980464,roughness:.85,side:Te}),white:new ht({color:15657956,roughness:.65}),corr:new ht({color:12041922,roughness:.5,metalness:.55,bumpMap:Zt.corr,bumpScale:.8,side:Te}),tank:new ht({map:Zt.tank,bumpMap:Zt.tankBump,bumpScale:3,roughness:.34,metalness:.45,envMapIntensity:1.1}),tankIn:new ht({map:Zt.tank,bumpMap:Zt.tankBump,bumpScale:2,color:14212832,roughness:.4,metalness:.35,side:He,envMapIntensity:1}),rim:new ht({color:13883611,roughness:.3,metalness:.55,envMapIntensity:1.1}),water:new ht({color:5942962,roughness:.03,metalness:.05,transparent:!0,opacity:.42,envMapIntensity:1.4,depthWrite:!1}),poolFloor:new ht({map:Zt.caustic,roughness:.5,metalness:.25}),jet:new ht({color:1776670,roughness:.45}),pvc:new ht({color:15855852,roughness:.5}),valve:new ht({color:12597547,roughness:.5}),sleeve:new ht({color:8030870,roughness:.6,transparent:!0,opacity:.7}),pump:new ht({color:7239037,roughness:.5,metalness:.3}),hose:new ht({color:1908513,roughness:.6}),frame:new ht({color:4868163,roughness:.6,metalness:.3}),cushion:new ht({color:15525078,roughness:.95}),teak:new ht({color:9267788,roughness:.75}),canopy:new ht({color:14857890,roughness:.95,side:Te,emissive:9067078,emissiveIntensity:.45}),terracotta:new ht({color:12085578,roughness:.9}),soil:new ht({color:4075300,roughness:1}),agave:new ht({color:8363156,roughness:.7,flatShading:!0}),grassPlant:new ht({color:10135653,roughness:.9,side:Te}),shed:new ht({color:11775395,roughness:.85}),shedRoof:new ht({color:4935250,roughness:.6,metalness:.4}),cover:new ht({color:1776670,roughness:.95}),trunk:new ht({color:5062966,roughness:1}),canopyTree:new ht({vertexColors:!0,map:Zt.leaf,roughness:1,emissive:1911314,emissiveIntensity:.5}),bulb:new ht({color:16773840,emissive:16766346,emissiveIntensity:.6}),wire:new ht({color:1710618,roughness:.8}),sail:new ht({color:2792086,roughness:.9,side:Te})};function Vl(i){let t=i.attributes.position,e=new Float32Array(t.count*2);for(let n=0;n<t.count;n++){let s=t.getX(n)*wt+as,r=t.getZ(n)*wt+cs;e[n*2]=(s-470)/940,e[n*2+1]=1-(r-940)/760}return i.setAttribute("uv",new _e(e,2)),i}function zd(i,t,e,n,s){let r=Math.max(1,Math.ceil((e-i)/wt/s)),a=Math.max(1,Math.ceil((n-t)/wt/s)),o=new en(1,1,r,a),c=o.attributes.position;for(let l=0;l<c.count;l++){let h=c.getX(l)+.5,u=.5-c.getY(l);c.setXYZ(l,J(i+(e-i)*h),0,tt(t+(n-t)*u))}return o.userData={px0:i,py0:t,px1:e,py1:n},o}function Wl(i,t){let e=i.geometry,n=e.attributes.position;for(let s=0;s<n.count;s++)n.setY(s,t(n.getX(s)*wt+as,n.getZ(s)*wt+cs));n.needsUpdate=!0,e.computeVertexNormals(),e.computeBoundingSphere()}function Mx(i){return i.map(([t,e])=>new nt(J(t),tt(e)))}function er(i,t,e,n){let s=Mx(i);s.length>2&&s[0].distanceTo(s[s.length-1])<.001&&s.pop(),Un.isClockWise(s)&&(s=s.reverse());let r=Un.triangulateShape(s,[]),a=[];for(let d of r)for(let f of[d[0],d[2],d[1]])a.push(s[f].x,e,s[f].y);let o=new ge;if(o.setAttribute("position",new Ot(a,3)),o.computeVertexNormals(),n)Vl(o);else{let d=o.attributes.position,f=[];for(let g=0;g<d.count;g++)f.push(d.getX(g)/6,d.getZ(g)/6);o.setAttribute("uv",new Ot(f,2))}let c=[],l=[],h=0;for(let d=0;d<s.length;d++){let f=s[d],g=s[(d+1)%s.length],_=f.distanceTo(g);c.push(f.x,t,f.y,g.x,t,g.y,g.x,e,g.y,f.x,t,f.y,g.x,e,g.y,f.x,e,f.y),l.push(h/4,t/4,(h+_)/4,t/4,(h+_)/4,e/4,h/4,t/4,(h+_)/4,e/4,h/4,e/4),h+=_}let u=new ge;return u.setAttribute("position",new Ot(c,3)),u.setAttribute("uv",new Ot(l,2)),u.computeVertexNormals(),{top:o,side:u}}function ne(i,t,e,n,s,r,a,o,c=0){let l=new j(new Ae(i,t,e),n);return l.position.set(s,r,a),l.rotation.y=c,l.castShadow=l.receiveShadow=!0,(o||ae).add(l),l}function ls(i,t,e){let n=i.attributes.uv;for(let s=0;s<n.count;s++)n.setXY(s,n.getX(s)*t,n.getY(s)*e);return i}var hi={};function us(i){return hi[i]||(hi[i]=new le,hi[i].name=i,ae.add(hi[i])),hi[i]}var nr=[],kd=i=>typeof i=="function"?i():i;function kn(i,t,e,n=0){return nr.push([i,t,e,n]),i.position.y=Oe(t,e)+kd(n),i}var zn={};function Ni(i,t,e,n,s,r,a,o=1){let c=zd(t,e,n,s,o),l=new j(c,a);return l.receiveShadow=!0,l.userData.h=r,ae.add(l),zn[i]=l,Wl(l,r),a===X.ground&&Vl(c),l}Ni("lawn",486,1049,950,1681,Ia,X.ground,1.5);Ni("strip",486,940,950,1049,()=>-.25,X.ground,2);Ni("walk",Jr,958,pn,1681,(i,t)=>Kr(t),X.ground,.75);Ni("patioZone",pn,940,1395,1108,()=>-.3,X.ground,3);Ni("sideNorth",486,765,574,940,()=>-.25,X.ground,3);zn.sideNorth.material=new ht({color:3421754,roughness:1});function zr(i,t,e,n){let s=t.map(([u,d])=>new nt(J(u),tt(d)));Un.isClockWise(s)&&(s=s.reverse());let r=e.map(u=>{let d=u.map(([f,g])=>new nt(J(f),tt(g)));return Un.isClockWise(d)||(d=d.reverse()),d}),a=Un.triangulateShape(s,r),o=s.concat(...r),c=[];for(let u of a)for(let d of[u[0],u[2],u[1]]){let f=o[d];c.push(f.x,n(f.x*wt+as,f.y*wt+cs),f.y)}let l=new ge;if(l.setAttribute("position",new Ot(c,3)),l.computeVertexNormals(),l.attributes.normal.getY(0)<0){let u=l.attributes.position.array;for(let d=0;d<u.length;d+=9)for(let f=0;f<3;f++){let g=u[d+3+f];u[d+3+f]=u[d+6+f],u[d+6+f]=g}l.computeVertexNormals()}Vl(l);let h=new j(l,X.ground);h.receiveShadow=!0,ae.add(h),zn[i]=h;{let u=[];for(let g=0;g<s.length;g++){let _=s[g],m=s[(g+1)%s.length],p=n(_.x*wt+as,_.y*wt+cs),y=n(m.x*wt+as,m.y*wt+cs);u.push(_.x,p,_.y,m.x,y,m.y,m.x,y-2.5,m.y,_.x,p,_.y,m.x,y-2.5,m.y,_.x,p-2.5,_.y)}let d=new ge;d.setAttribute("position",new Ot(u,3)),d.computeVertexNormals();let f=new j(d,X.skirtSoil);f.receiveShadow=!0,h.add(f)}return h}function Ex(){for(let r of["fEx","pUp","pPool","pTurf","edgeStrip","edgeBay","fQ"])zn[r]&&(ae.remove(zn[r]),zn[r].geometry.dispose(),delete zn[r]);if($.mode==="existing"){let r=Ni("fEx",pn,1108,1394.6,1681,$e,X.dirt,.75),a=r.geometry.attributes.position,o=new Float32Array(a.count*2);for(let c=0;c<a.count;c++){let l=a.getX(c)*wt+as,h=a.getZ(c)*wt+cs;o[c*2]=(l-pn)/(1394.6-pn),o[c*2+1]=1-(h-1108)/573}r.geometry.setAttribute("uv",new _e(o,2));return}let i=mn[1],t=5.5,e=(r,a)=>{let o=Math.sqrt(Math.max(r*r-(a-zt[1])**2,1));return{dx:o,aR:Math.atan2(a-zt[1],o),aL:Math.atan2(a-zt[1],-o)}},n=Array.from({length:56},(r,a)=>{let o=a/56*Ie;return[zt[0]+Math.cos(o)*73.5,zt[1]+Math.sin(o)*73.5]}),s=$.step2>=jt?t:0;if(sr()){let r=e($n,Me);zr("pUp",[[i,1108],[he,1108],[he,Me],[zt[0]+r.dx,Me],...qr(r.aR,r.aL,$n),[zt[0]-r.dx,Me],[i,Me]],[],()=>dn()),zr("pPool",[[i,Me],[zt[0]-r.dx,Me],...qr(r.aL,r.aR,$n),[zt[0]+r.dx,Me],[he,Me],[he,Hn-s],[i,Hn-s]],[n],()=>Jn())}else{let r=$.step1>=jt?t:0,a=e(Ii+r,Ze-r),o=e(Ii-r,Ze+r);zr("pUp",[[i,1108],[he,1108],[he,Ze-r],[zt[0]+a.dx,Ze-r],...qr(a.aR,a.aL,Ii+r),[zt[0]-a.dx,Ze-r],[i,Ze-r]],[],()=>dn()),zr("pPool",[[i,Ze+r],[zt[0]-o.dx,Ze+r],...qr(o.aL,o.aR,Ii-r),[zt[0]+o.dx,Ze+r],[he,Ze+r],[he,Hn-s],[i,Hn-s]],[n],()=>Jn())}if($.ver!=="plan"){X.limeTint||(X.limeTint=X.ground.clone(),X.limeTint.color.set(15786696)),X.limeTint.map=X.ground.map,X.limeTint.needsUpdate=!0;for(let r of["pUp","pPool"])zn[r].material=X.limeTint}zr("pTurf",[[i,Hn+s],[he,Hn+s],[he,1681],[i,1681]],[],(r,a)=>Gl(a)),Ni("edgeStrip",he,1108,1394.6,1681,$e,X.ground,.75)}{let i=new qs([new nt(J(-900),tt(-900)),new nt(J(3e3),tt(-900)),new nt(J(3e3),tt(3200)),new nt(J(-900),tt(3200))]);i.holes.push(new Ws([new nt(J(486),tt(940)),new nt(J(486),tt(2700)),new nt(J(1394.6),tt(2700)),new nt(J(1394.6),tt(940))]));let t=new Ur(i);t.rotateX(Math.PI/2);let e=t.attributes.position;for(let r=0;r<e.count;r++)e.setY(r,-.32);let n=t.attributes.uv;for(let r=0;r<n.count;r++)n.setXY(r,e.getX(r)/14,e.getZ(r)/14);t.computeVertexNormals();let s=new j(t,X.outside);if(s.receiveShadow=!0,s.geometry.attributes.normal.getY(0)<0){let r=t.index.array;for(let a=0;a<r.length;a+=3){let o=r[a+1];r[a+1]=r[a+2],r[a+2]=o}t.computeVertexNormals()}ae.add(s)}{let i=Ni("greenbelt",486,1681,1394.6,2700,(n,s)=>Da(un(n,486,1394))-.3-Math.pow(Math.max(0,(s-1690)/wt),1.15)*.16,X.brush,4),t=i.geometry.attributes.position,e=new Float32Array(t.count*2);for(let n=0;n<t.count;n++)e[n*2]=t.getX(n)/12,e[n*2+1]=t.getZ(n)/12;i.geometry.setAttribute("uv",new _e(e,2))}{let i=er(Ve.patio,-.6,0,!1),t=new j(i.top,X.concrete),e=new j(i.side,X.concrete);t.receiveShadow=e.receiveShadow=!0,ae.add(t,e);let n=er(Ve.wedge,-.6,.04,!0),s=new j(n.top,X.ground),r=new j(n.side,X.wood);s.receiveShadow=!0,r.castShadow=!0,ae.add(s,r)}var Ol=new le;ae.add(Ol);function bx(){if(Ol.clear(),$.mode!=="existing")return;let i=24;for(let t=0;t<i;t++){let e=1e3+679*t/i,n=1e3+679*(t+1)/i,s=(e+n)/2,r=Math.min(Kr(s),$e(pn+2,s)),a=Math.max(Kr(s),$e(pn+2,s))+.12,o=new j(new Ae(.03,a-r+.4,(n-e)/wt+.01),X.edging);o.position.set(J(pn),(a+r-.4)/2,tt(s)),o.castShadow=!0,Ol.add(o)}}var Sx=14.85/wt,wx=11/wt,Tx=new ns(1,Pi,wx,2,.035),Bn=new Vs(Tx,X.block,3e3);Bn.castShadow=Bn.receiveShadow=!0;Bn.instanceMatrix.setUsage(td);ae.add(Bn);var bd=(mn[0]+mn[1])/2,Gd=[{key:"west",name:"Walkway west wall",built:!0,path:[[955.34,958],[955.34,1679]],aName:"walkway",bName:"lawn",flip:!0},{key:"east",name:"Walkway east wall",path:[[bd,1108.35],[bd,1679]],aName:"walkway",bName:"terrace side"},{key:"step",name:"Pad to pool wall",path:[[mn[1],Ze],[mx,Ze],...qr(_x,xx),[gx,Ze],[he,Ze]],aName:"pool side",bName:"pad side",need:()=>$.step1>=jt&&!sr()},{key:"cross",name:"Pool to turf wall",path:[[mn[1],Hn],[he,Hn]],aName:"turf side",bName:"pool side",need:()=>$.step2>=jt}];for(let i of Gd){i.segs=[];let t=0;for(let e=0;e<i.path.length-1;e++){let[n,s]=i.path[e],[r,a]=i.path[e+1],o=Math.hypot(r-n,a-s);i.segs.push({ax:n,ay:s,dx:(r-n)/o,dy:(a-s)/o,s0:t,L:o}),t+=o}i.len=t}function Ax(i,t){let e=i.segs[i.segs.length-1];for(let s of i.segs)if(t<=s.s0+s.L){e=s;break}let n=un(t-e.s0,0,e.L);return{x:e.ax+e.dx*n,y:e.ay+e.dy*n,tx:e.dx,ty:e.dy}}var Xl=new C(0,1,0),wa=new ue,Ta=new fn,Aa=new C,Ra=new C,Sd=new Ut;function Rx(){let i=0,t=[],e=12;for(let n of Gd){let s=(n.built||$.mode==="proposed")&&(!n.need||n.need()),r={r:n,count:0,maxFace:0,maxSide:"",len:n.len/wt,on:s};if(!s){t.push(r);continue}let a=u=>{let d=Ax(n,u),f=-d.ty,g=d.tx,_=n.flip?-1:1,m=Oe(d.x+f*e*_,d.y+g*e*_),p=Oe(d.x-f*e*_,d.y-g*e*_);return{p:d,A:m,B:p,top:Math.ceil((Math.max(m,p)-.04)/Pi),bot:Math.floor((Math.min(m,p)+.04)/Pi)-1}},o=Sx*wt,c=1e9,l=-1e9;for(let u=0;u<=n.len;u+=o/2){let d=a(u);c=Math.min(c,d.bot),l=Math.max(l,d.top)}let h=re(n.key.length*97);for(let u=c;u<l;u++){let d=(u%2+2)%2?o/2:0;for(let f=-d;f<n.len;f+=o){let g=Math.max(f,0),_=Math.min(f+o,n.len);if(_-g<o*.18)continue;let m=(g+_)/2,p=a(m);if(u<p.bot||u>=p.top)continue;let y=Math.max(p.top*Pi-Math.min(p.A,p.B),0);y>r.maxFace&&(r.maxFace=y,r.maxSide=p.A<p.B?n.aName:n.bName);let x=(_-g)/wt-.012,M=(h()-.5)*.03;Ra.set(J(p.p.x)-p.p.ty*M,u*Pi+Pi/2,tt(p.p.y)+p.p.tx*M),Ta.setFromAxisAngle(Xl,Math.atan2(-p.p.ty,p.p.tx)),Aa.set(x,1,1),wa.compose(Ra,Ta,Aa),Bn.setMatrixAt(i,wa);let b=.9+h()*.16;Sd.setRGB(b,b*(.98+h()*.03),b*(.95+h()*.05)),Bn.setColorAt(i,Sd),i++,r.count++}}t.push(r)}return Bn.count=i,Bn.instanceMatrix.needsUpdate=!0,Bn.instanceColor&&(Bn.instanceColor.needsUpdate=!0),Bn.computeBoundingSphere(),t}var wd=["#c9b3a3","#b9a99b","#a39a92","#d4c5b6","#9da3a8","#c2a597","#8f8a86","#e0d6ca","#b7aea6","#a9998c","#cfc0b0"].map(i=>new Ut(i)),Cx=[0,1,2].map(i=>{let t=new wi(1,2);return t.deleteAttribute("uv"),t.deleteAttribute("normal"),La(wl(t),.28,1.1,17+i*31,1)}),Px=new ht({color:16777215,roughness:.55,metalness:.02}),Fl=Cx.map(i=>{let t=new Vs(i,Px,1400);return t.castShadow=t.receiveShadow=!0,ae.add(t),t}),Lx=(()=>{let i=re(909),t=[],e=8,n=new Map,s=(c,l)=>c+","+l,r=(c,l,h)=>{let u=Math.floor(c/e),d=Math.floor(l/e);for(let f=u-2;f<=u+2;f++)for(let g=d-2;g<=d+2;g++)for(let _ of n.get(s(f,g))||[])if(Math.hypot(_.px-c,_.py-l)<(_.ru+h)*.92)return!1;return!0},a=c=>{t.push(c);let l=s(Math.floor(c.px/e),Math.floor(c.py/e));n.has(l)||n.set(l,[]),n.get(l).push(c)},o=[{edge:c=>1108.6-(c-1036)*(2.35/329),depth:c=>(37.6-(c-1036)*(3.7/329))/2+3,dir:1},{edge:()=>1679,depth:()=>17,dir:-1}];for(let c of o)for(let l=0;l<9e3;l++){let h=mn[1]+2+i()*(he-mn[1]-4),u=c.depth(h),d=Math.pow(i(),1.25)*1.25;if(d>1&&i()>.25)continue;let f=c.edge(h)+c.dir*d*u,g=(3.2-2*Math.min(d,1))*(.7+i()*.45),_=g/12*wt;r(h,f,_)&&a({px:h,py:f,ru:_,r:g/12,v:Math.floor(i()*3),rot:i()*Ie,sx:1+i()*.35,sz:.75+i()*.3,sy:.42+i()*.18,c:wd[Math.floor(i()*wd.length)].clone().offsetHSL(0,0,(i()-.5)*.08)})}return t})();function Ix(){let i=[0,0,0];if($.mode==="proposed")for(let e of Lx){let n=Fl[e.v],s=i[e.v]++,r=Oe(e.px,e.py);Ra.set(J(e.px),r+e.r*e.sy*.45,tt(e.py)),Ta.setFromAxisAngle(Xl,e.rot),Aa.set(e.r*e.sx,e.r*e.sy,e.r*e.sz),wa.compose(Ra,Ta,Aa),n.setMatrixAt(s,wa),n.setColorAt(s,e.c)}Fl.forEach((e,n)=>{e.count=i[n],e.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.needsUpdate=!0),e.computeBoundingSphere()})}var ir=new le;ae.add(ir);var kr=new ht({color:2829101,roughness:.55,metalness:.6});function Gr(i,t,e,n,s=.03){let r=i.length,a=t?r:r-1;for(let o=0;o<a;o++){let[c,l]=i[o],[h,u]=i[(o+1)%r],d=Math.hypot(h-c,u-l);if(d<.5)continue;let f=Math.max(1,Math.ceil(d/10)),g=(h-c)/d,_=(u-l)/d;for(let m=0;m<f;m++){let p=m/f*d,y=(m+1)/f*d,x=(p+y)/2,M=c+g*x,b=l+_*x,[T,S]=e(M,b,-_,g),P=new j(new Ae(s,T-S,(y-p)/wt+.004),n);P.position.set(J(M),(T+S)/2,tt(b)),P.rotation.y=Math.atan2(g,_),P.castShadow=P.receiveShadow=!0,ir.add(P)}}}var Dx=new ht({color:12108488,roughness:.35,metalness:.6,emissive:5924976,emissiveIntensity:.6}),Ux=new ht({color:13617339,roughness:.95,emissive:3814959,emissiveIntensity:.4});function Nx(){let i=[];for(let e=1108;e<=1681;e+=573/40)i.push([Fd(e),e]);if(Gr(i,!1,(e,n)=>{let s=jr(e-4,n),r=$e(e+4,n);return[Math.ceil((Math.max(s,r)+.5*jt)/Pi)*Pi,Math.min(s,r)-.35]},kr),sr()){let e=[],n=dn(),s=Math.sqrt($n*$n-(zt[1]-Me)**2),r=3.5*wt,a=2*wt;for(let m=1057+r/2;m<1344;m+=r)Math.abs(m-zt[0])<s+4||e.push([m,Me,0,-1]);let o=Math.atan2(Me-zt[1],s),c=Math.atan2(Me-zt[1],-s),l=(o-c+Ie)%Ie,h=Math.max(2,Math.round(l*$n/r));for(let m=0;m<h;m++){let p=o-l*(m+.5)/h;e.push([zt[0]+Math.cos(p)*$n,zt[1]+Math.sin(p)*$n,Math.cos(p),Math.sin(p)])}for(let[m,p,y,x]of e){let M=m+y*a,b=p+x*a,T=n-.5,S=new j(new Ae(.15,.15,a/wt),Dx);S.position.set(J((m+M)/2),T,tt((p+b)/2)),S.rotation.y=Math.atan2(y,x),ir.add(S);let P=new j(new ve(.42,.42,1.6,16),Ux);P.position.set(J(M),T-.6,tt(b)),ir.add(P)}Gr(Ve.pad,!0,(m,p,y,x)=>{let M=Ul(m+y*4,p+x*4),b=Ul(m-y*4,p-x*4),T=Math.min(M,b,dn()-2*jt);return[dn()+.4*jt,T-.3]},kr);for(let m of[[[mn[1],Me],[1057,Me]],[[1344,Me],[he,Me]]])Gr(m,!1,()=>[dn()+.4*jt,Jn()-.3],kr);let u=1072,d=1108,f=Me,g=Me+15,_=(dn()+Jn())/2;Gr([[u,f],[u,g],[d,g],[d,f]],!1,()=>[_+.4*jt,Jn()-.3],kr)}let t=Ve.turf;return Gr([[t[0][0],t[0][1]],[t[1][0],t[1][1]],[t[2][0],t[2][1]],[t[3][0],t[3][1]]],!0,(e,n)=>{let s=jr(e,n);return[s+.4*jt,s-.3]},kr,.02),0}function Ox(){ir.clear();let i=0;if($.mode!=="proposed")return 0;if($.ver!=="plan")return Nx();for(let t=0;t<Tl.length-1;t++){let[e,n]=Tl[t],[s,r]=Tl[t+1],a=Math.hypot(s-e,r-n),o=Math.max(1,Math.ceil(a/12)),c=(s-e)/a,l=(r-n)/a;for(let h=0;h<o;h++){let u=h/o*a,d=(h+1)/o*a,f=(u+d)/2,g=e+c*f,_=n+l*f,m=jr(g-Math.abs(l)*3,_-(c!==0?t===1?3:-3:0)),p=$e(g+Math.abs(l)*3,_+(c!==0?t===1?3:-3:0));i=Math.max(i,Math.abs(m-p));let y=Math.max(m,p)+jt,x=Math.min(m,p)-.3,M=new j(new Ae(.04,y-x,(d-u)/wt+.005),X.edging);M.position.set(J(g),(y+x)/2,tt(_)),M.rotation.y=Math.atan2(c,l),M.castShadow=M.receiveShadow=!0,ir.add(M)}}return i}var Bl=new le;ae.add(Bl);var Fx=new ns(23*jt,.16,23*jt,2,.03),ql=new le;ae.add(ql);var is=null,Yr=new le;ae.add(Yr);function Td(i,t,e,n,s){let a=er(i,0,0,!1).top,o=a.attributes.position,c=new Float32Array(o.count*2),l=$r[e].span,h=Math.cos(n),u=Math.sin(n);for(let g=0;g<o.count;g++){o.setY(g,t);let _=o.getX(g),m=o.getZ(g);c[g*2]=(_*h+m*u)/l,c[g*2+1]=(-_*u+m*h)/l}a.setAttribute("uv",new _e(c,2)),a.computeVertexNormals();let d=new ht({map:$r[e].tex,roughness:.85,transparent:$.under,opacity:$.under?.22:1,depthWrite:!$.under,polygonOffset:!0,polygonOffsetFactor:-2-s,polygonOffsetUnits:-2-s}),f=new j(a,d);return f.receiveShadow=!0,f.renderOrder=s,f}function Vd(i){let t=1057+i,e=1344-i,n=1151+i,s=Me-i,r=$n+i,a=Math.sqrt(r*r-(zt[1]-s)**2),o=Math.atan2(s-zt[1],a),c=Math.atan2(s-zt[1],-a),l=[];for(let h=1;h<24;h++){let u=o+(c-o)*h/24;l.push([zt[0]+Math.cos(u)*r,zt[1]+Math.sin(u)*r])}return[[t,n],[e,n],[e,s],[zt[0]+a,s],...l,[zt[0]-a,s],[t,s]]}var Bx={anthracite:["#3e3e41","#46464a","#4f4f53","#38383b","#555559","#424245"],amaretto:["#c39a72","#b98a62","#cfa77b","#a87a57","#d3ae84","#b5845c"],red:["#a65a41","#b4684b","#9a5038","#bf7656","#a9603f","#b06a52","#94553d"],walnut:["#6b4a35","#7a5640","#5e4030","#86614a","#704f3a","#55392a"],charcoal:["#4b4744","#5a5550","#3f3c3a","#6b645c","#55504a","#7a6f62"]},Hx={anthracite:2829101,amaretto:9205606,red:7232077,walnut:4536109,charcoal:2894376},zx=new ns(1,.06,1,1,.012);function kx(i){let t=new le,e=dn()+.012,n=$.under,s=new ht({color:Hx[i],roughness:1,transparent:n,opacity:n?.22:1,depthWrite:!n}),r=new j(er(Ve.pad,0,0,!1).top,s);r.geometry.translate(0,e,0),r.receiveShadow=!0,t.add(r);let a=Vd(4*jt*wt).map(([P,v])=>[J(P),tt(v)]),o=a.length,c=4*jt,l=8*jt,h=.25*jt,u=P=>{let v=a[(P-1+o)%o],E=a[P],D=a[(P+1)%o],O=Math.atan2(E[1]-v[1],E[0]-v[0]),H=Math.atan2(D[1]-E[1],D[0]-E[0]),L=Math.abs(H-O);return L>Math.PI&&(L=Ie-L),L},d=a.map((P,v)=>u(v)>.4),f=[],g=[];d.forEach((P,v)=>{P&&g.push(v)}),g.length||(g=[0]);for(let P=0;P<g.length;P++){let v=g[P],E=g[(P+1)%g.length],D=[],O=v;do D.push(a[O]),O=(O+1)%o;while(O!==E);D.push(a[E]);let H=[0];for(let q=1;q<D.length;q++)H.push(H[q-1]+Math.hypot(D[q][0]-D[q-1][0],D[q][1]-D[q-1][1]));let L=H[H.length-1],N=Math.max(1,Math.floor((L-l)/(c+h))),k=(L-N*(c+h))/2;for(let q=0;q<N;q++){let K=k+(q+.5)*(c+h),z=1;for(;z<H.length-1&&H[z]<K;)z++;let Q=(K-H[z-1])/(H[z]-H[z-1]||1),it=D[z-1][0]+(D[z][0]-D[z-1][0])*Q,gt=D[z-1][1]+(D[z][1]-D[z-1][1])*Q,Y=Math.atan2(D[z][1]-D[z-1][1],D[z][0]-D[z-1][0]);f.push([it,gt,Y,c,l])}}a.forEach((P,v)=>{if(!d[v])return;let E=a[(v-1+o)%o];f.push([P[0],P[1],Math.atan2(P[1]-E[1],P[0]-E[0]),l,l])});let _=Bx[i],m=new ht({color:16777215,roughness:.85,transparent:n,opacity:n?.22:1,depthWrite:!n}),p=new Vs(zx,m,f.length),y=re(i.length*13+f.length),x=new ue,M=new fn,b=new C,T=new C,S=new Ut;return f.forEach(([P,v,E,D,O],H)=>{T.set(P,e-.012,v),M.setFromAxisAngle(Xl,-E),b.set(D-h,1,O-h),x.compose(T,M,b),p.setMatrixAt(H,x),S.set(_[Math.floor(y()*_.length)]),p.setColorAt(H,S)}),p.receiveShadow=!0,t.add(p),t}function Gx(){if(Yr.clear(),$.ver==="plan")return;let i=$.ver==="feedback",t=i&&$.fbPat==="90"?0:Math.PI/4,e=i?$.fbColor:"amaretto",n=e==="amaretto"?"amaretto":"hb_"+e,s=i?e==="amaretto"?"amaSoldier":"so_"+e:"anthracite";Yr.add(kx(i?e:"anthracite")),Yr.add(Td(Vd(8*jt*wt),dn()+.016,n,t,2));let r=(dn()+Jn())/2;sr()&&Yr.add(Td([[1072,Me],[1108,Me],[1108,Me+15],[1072,Me+15]],r,n,t,2))}function Wd(){Gx(),is&&(ae.remove(is),is.geometry.dispose(),is=null);let i=$.padSurf;if($.ver!=="plan"||i==="brick"||!$r[i])return;let e=er(Ve.pad,0,0,!1).top,n=e.attributes.position,s=new Float32Array(n.count*2),r=$r[i].span;for(let o=0;o<n.count;o++)n.setY(o,dn()+.012),s[o*2]=n.getX(o)/r,s[o*2+1]=n.getZ(o)/r;e.setAttribute("uv",new _e(s,2)),e.computeVertexNormals();let a=new ht({map:$r[i].tex,roughness:i==="conc"?.9:.85,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});is=new j(e,a),is.receiveShadow=!0,ae.add(is)}for(let i of Ve.pavers){let t=(i[0]+i[2])/2,e=(i[1]+i[3])/2;if(i[0]>975&&i[0]<990){let n=new j(Fx,X.stone);n.position.set(J((Jr+pn)/2),0,tt(e)),n.rotation.y=(re(Math.round(e))()-.5)*.02,n.castShadow=n.receiveShadow=!0,Bl.add(n),kn(n,(Jr+pn)/2,e,.05)}else{let n=(i[2]-i[0])/wt,s=(i[3]-i[1])/wt,r=new j(new ns(n,.14,s,2,.025),X.stone);r.position.set(J(t),0,tt(e)),r.castShadow=r.receiveShadow=!0,i[0]>1050?(ql.add(r),kn(r,t,e,.04)):(Bl.add(r),kn(r,t,e,.05))}}var de=new le;ae.add(de);var Ai=580,Vr=1296,ss=376,Ks=950,Ad=8.7,Vx=.35;{let s=function(S,P,v,E,D,O,H){let L=Math.hypot(v-S,E-P)/wt,N=new en(L,i-.05);ls(N,L/H,(i-.05)/H);let k=new j(N,O);if(k.castShadow=k.receiveShadow=!0,k.position.set(J((S+v)/2),-.3+(i-.05)/2,tt((P+E)/2)),k.rotation.y=D,de.add(k),O===X.siding){let q=new j(new en(L,1.1),X.skirt);q.position.set(k.position.x+Math.sin(D)*.01,.25,k.position.z+Math.cos(D)*.01),q.rotation.y=D,q.receiveShadow=!0,de.add(q)}return k},a=function(S,P,v,E){let O=J(S)-1.2,H=J(v)+1.2,L=tt(P)-1.2,N=tt(E)+1.2,k=H-O>=N-L,q=(k?N-L:H-O)/2,K=q*4/12,z=Ad-.25,Q=z+K,it=[],gt=[],Y=Math.hypot(q,K),et=(Et,F,$t,Tt)=>{it.push(...Et,...F,...$t,...Et,...$t,...Tt),gt.push(Et[0]/3+Et[2]/3,0,F[0]/3+F[2]/3,0,$t[0]/3+$t[2]/3,Y/3,Et[0]/3+Et[2]/3,0,$t[0]/3+$t[2]/3,Y/3,Tt[0]/3+Tt[2]/3,Y/3)},ft=(Et,F,$t)=>{it.push(...Et,...F,...$t),gt.push(Et[0]/3+Et[2]/3,0,F[0]/3+F[2]/3,0,$t[0]/3+$t[2]/3,Y/3)};if(k){let Et=(L+N)/2,F=O+q,$t=H-q;et([O,z,N],[H,z,N],[$t,Q,Et],[F,Q,Et]),et([H,z,L],[O,z,L],[F,Q,Et],[$t,Q,Et]),ft([O,z,L],[O,z,N],[F,Q,Et]),ft([H,z,N],[H,z,L],[$t,Q,Et])}else{let Et=(O+H)/2,F=L+q,$t=N-q;et([H,z,N],[H,z,L],[Et,Q,F],[Et,Q,$t]),et([O,z,L],[O,z,N],[Et,Q,$t],[Et,Q,F]),ft([H,z,L],[O,z,L],[Et,Q,F]),ft([O,z,N],[H,z,N],[Et,Q,$t])}let vt=new ge;vt.setAttribute("position",new Ot(it,3)),vt.setAttribute("uv",new Ot(gt,2)),vt.computeVertexNormals();let bt=new j(vt,X.shingle);bt.castShadow=bt.receiveShadow=!0,de.add(bt);let Ft=(O+H)/2,Ht=(L+N)/2;for(let[Et,F,$t,Tt]of[[H-O,.08,Ft,N],[H-O,.08,Ft,L],[.08,N-L,O,Ht],[.08,N-L,H,Ht]])ne(Et,.55,F,X.trim,$t,z-.2,Tt,de);let It=new j(new en(H-O,N-L),X.trim);It.rotation.x=Math.PI/2,It.position.set(Ft,z-.45,Ht),de.add(It)},i=Ad+.35,t=480,e=875,n=967;s(Ai,Ks,Vr,Ks,0,X.siding,4),s(Vr,t,Vr,Ks,Math.PI/2,X.siding,4),s(Ai,t,Ai,Ks,-Math.PI/2,X.siding,4),s(Ai,ss,Ai,t,-Math.PI/2,X.siding,4),s(Ai,ss,e,ss,Math.PI,X.stoneWall,8),s(e,ss,e,t,Math.PI/2,X.stoneWall,8),s(e,t,Vr,t,Math.PI,X.stoneWall,8);let r=ne(1.3,i-.6,1.3,X.stoneWall,J(n)-.65,-.3+(i-.6)/2,tt(ss)+.65,de);ls(r.geometry,1.3/8,(i-.6)/8),a(Ai,t,Vr,Ks),a(Ai,ss,n,t+30);let o=tt(ss)-.03,c=tt(t)-.03;{let S=new j(new en(16,7),X.garageDoor);S.position.set(J(727),-.3+3.5,o),S.rotation.y=Math.PI,de.add(S);for(let[P,v,E,D]of[[16.6,.35,0,3.65],[.3,7,-8.15,0],[.3,7,8.15,0]])ne(P,v,.15,X.trim,J(727)+E,-.3+3.5+D,o-.05,de)}{let S=new j(new en(3,6.8),X.frontDoor);S.position.set(J(902),-.15+3.4,c),S.rotation.y=Math.PI,de.add(S);for(let[E,D]of[[902,3]])for(let[O,H,L,N]of[[D+.5,.3,0,3.55],[.25,6.8,-D/2-.12,0],[.25,6.8,D/2+.12,0]])ne(O,H,.12,X.trim,J(E)+L,-.15+3.4+N,c-.05,de);let P=new j(new en(1.6,6.4),X.blinds);P.position.set(J(940),-.15+3.4,c),P.rotation.y=Math.PI,de.add(P);for(let[E,D,O,H]of[[2.1,.25,0,3.3],[.22,6.6,-.9,0],[.22,6.6,.9,0]])ne(E,D,.12,X.trim,J(940)+O,-.15+3.4+H,c-.05,de);let v=new j(new Ti(.09,10,8),X.steelPost);v.position.set(J(902)-1.15,3.1,c-.08),de.add(v)}{let S=J(1150),P=3.4,v=4.6,E=2.9,D=new j(new en(P,v),X.blinds);D.position.set(S,E+v/2,c),D.rotation.y=Math.PI,de.add(D);for(let[O,H,L,N]of[[P+.6,.3,0,v/2+.15],[P+.8,.25,0,-v/2-.12],[.3,v,-P/2-.15,0],[.3,v,P/2+.15,0],[P,.08,0,0]])ne(O,H,.14,X.trim,S+L,E+v/2+N,c-.06,de)}let l=(S,P,v)=>{let E=er(S,-.6,P,!1),D=new j(E.top,v),O=new j(E.side,v);return D.receiveShadow=O.receiveShadow=!0,de.add(D,O),D};l(Ve.driveway.map(([S,P])=>[S,P]).concat([]),-.2,X.concrete),l([[876,383],[967,383],[967,470],[876,470]],-.08,X.concrete),l([[598,36],[840,36],[840,100],[598,100]],-.2,X.concrete);{let S=l(Ve.frontRock,-.26,X.chips)}l([[-900,40],[3e3,40],[3e3,98],[-900,98]],-.17,X.concrete),ne(3900/wt,.42,.5,X.concrete,J(1050),-.36,tt(36),de),l([[-900,-700],[3e3,-700],[3e3,34],[-900,34]],-.3,X.asphalt);let h=re(55);for(let[S,P,v]of[[1278,505,2.3],[1240,500,1.4],[1060,500,1.1],[990,495,1],[1205,498,1.2]]){let E=new j(La(new wi(v,2),.35,1.4/v,h()*40,.85),new ht({color:new Ut().setHSL(.27,.35,.24+h()*.06),roughness:1}));E.position.set(J(S),v*.6-.3,tt(P)-1.6),E.castShadow=E.receiveShadow=!0,de.add(E)}let u=tt(Ks)+.02;for(let[S,P,v,E,D]of[[690,2.4,2,5,"grid"],[815,3.4,4,3,"blinds"],[905,3.6,4.6,2.7,"blinds"],[1080,6,6.8,Vx,"door"],[1185,4.4,4,3,"blinds"]]){let O=J(S),H=new j(new en(P,v),D==="blinds"?X.blinds:X.glassDark);H.position.set(O,E+v/2,u+.01),de.add(H);for(let[L,N,k,q]of[[P+.5,.28,0,v/2+.14],[P+.5,.22,0,-v/2-.11],[.25,v,-P/2-.12,0],[.25,v,P/2+.12,0]])ne(L,N,.12,X.trim,O+k,E+v/2+q,u+.05,de);if(D==="grid"){ne(.06,v,.05,X.trim,O,E+v/2,u+.04,de);for(let L of[-1/6,1/6])ne(P,.06,.05,X.trim,O,E+v/2+L*v,u+.04,de)}D==="door"&&ne(.12,v,.06,X.trim,O,E+v/2,u+.05,de)}let d=J(957),f=J(1028),g=tt(909),_=tt(965),m=f-d,p=_-g,y=16.6,x=new j(ls(new Ae(m,y+.3,p),m/4,y/4),X.siding);x.position.set((d+f)/2,(y-.3)/2,(g+_)/2),x.castShadow=x.receiveShadow=!0,de.add(x),ne(m+.35,.25,p+.35,X.steelPost,(d+f)/2,y+.1,(g+_)/2,de);let M=new j(new ve(.33,.33,1.1,16),X.steelPost);M.position.set(J(994.56),y+.75,tt(925.43)),M.castShadow=!0,de.add(M);let b=new j(new Ki(.55,.4,16),X.steelPost);b.position.set(J(994.56),y+1.5,tt(925.43)),de.add(b);let T=re(77);for(let S=600;S<945;S+=26+T()*10){let P=new j(new wi(.9+T()*.5,1),new ht({color:new Ut().setHSL(.27+T()*.05,.32,.22+T()*.08),roughness:1,flatShading:!0}));P.scale.y=.75,P.position.set(J(S),.3,tt(975)),P.castShadow=!0,de.add(P)}}{let i=new le;ae.add(i);let t=J(1022),e=J(1306),n=tt(951),s=tt(1098),r=tt(1112),a=8.25,o=7.35,c=(a-o)/(s-n),l=m=>a-(m-n)*c;for(let m of[1032,1170,1298])ne(.3,o-.55,.3,X.white,J(m),(o-.55)/2,s,i);ne(e-t,.6,.32,X.white,(t+e)/2,o-.3,s,i),ne(e-t,.45,.2,X.white,(t+e)/2,a-.2,n+.12,i);let h=Math.atan(c),u=(r-n)/Math.cos(h);for(let m=t+.2;m<=e;m+=2){let p=ne(.15,.45,u,X.wood,m,l((n+r)/2)+.2,(n+r)/2,i);p.rotation.x=h}for(let m=n+1.2;m<r;m+=2.4){let p=ne(e-t+.4,.12,.25,X.wood,(t+e)/2,l(m)+.5,m,i);p.rotation.x=h}let d=new en(e-t+.6,u+.3),f=d.attributes.uv;for(let m=0;m<f.count;m++)f.setXY(m,f.getX(m)*(e-t)/.44,f.getY(m));let g=new j(d,X.corr);g.rotation.x=-Math.PI/2+h,g.position.set((t+e)/2,l((n+r)/2)+.6,(n+r)/2),g.castShadow=g.receiveShadow=!0,i.add(g);let _=re(5);for(let[m,p]of[[[t+1,s],[e-1,n+1]],[[t+1,n+1],[e-1,s-.5]]]){let y=[];for(let M=0;M<=24;M++){let b=M/24,T=m[0]+(p[0]-m[0])*b,S=m[1]+(p[1]-m[1])*b;y.push(new C(T,l(S)-.2-Math.sin(b*Math.PI)*.9,S))}let x=new On(y);i.add(new j(new Yn(x,48,.02,4),X.wire));for(let M=1;M<12;M++){let b=x.getPoint(M/12),T=new j(new Ti(.11,8,6),X.bulb);T.position.copy(b).y-=.25,i.add(T)}}}var ui=new le;ae.add(ui);var Al=i=>Math.min(Da(i),i>mn[1]&&$.mode==="proposed"?jr(i,1681):99);function Wr(i,t,e){let[n,s]=i,[r,a]=t,o=Math.hypot(r-n,a-s)/wt,c=Math.max(1,Math.round(o/8)),l=Math.atan2(-(tt(a)-tt(s)),J(r)-J(n));for(let h=0;h<c;h++){let u=h/c,d=(h+1)/c,f=(u+d)/2,g=n+(r-n)*f,_=s+(a-s)*f,m=1e9;for(let P of[u,f,d])m=Math.min(m,e.ground(n+(r-n)*P,s+(a-s)*P));let p=Math.min(m,e.minBase??1e9)-.15,y=6+.15,x=o/c,M=ls(new Ae(x,y,.07),x/4,y/6),b=new j(M,X.board);if(b.position.set(J(g),p+y/2,tt(_)),b.rotation.y=l,b.castShadow=b.receiveShadow=!0,ui.add(b),e.cap){let P=ne(x+.05,.12,.5,X.board,J(g),p+y+.06,tt(_),ui,l)}let T=n+(r-n)*u,S=s+(a-s)*u;if(e.steel){let P=new j(new ve(.12,.12,y+.2,10),X.steelPost),v=Math.sin(l)*e.side,E=Math.cos(l)*e.side;P.position.set(J(T)+v*.15,p+(y+.2)/2,tt(S)+E*.15),P.castShadow=!0,ui.add(P)}else ne(.3,y+.1,.3,X.board,J(T),p+(y+.1)/2,tt(S),ui,l)}}function Wx(){ui.clear(),Wr([573.18,765.33],[485.87,765.33],{ground:()=>-.25,steel:!0,side:1}),Wr([485.87,765.33],[485.87,1681],{ground:(i,t)=>t<1049?-.25:Ia(486,t),steel:!0,side:-1}),Wr([1394.6,1681.46],[1387.64,1052.39],{ground:(i,t)=>$e(1390,t),cap:!0}),Wr([1387.64,1052.39],[1304,945.5],{ground:()=>-.3,cap:!0}),Wr([485.87,1681],[540,1681],{ground:i=>Da(i)});{let e=Math.round(854.5999999999999/wt/8);for(let n=0;n<e;n++){let s=540+854.5999999999999*n/e,r=540+(1394.6-540)*(n+1)/e,a=(s+r)/2,o=Math.min(Al(s),Al(r),Al(a))+.25,c=(r-s)/wt,l=4,h=tt(1681);for(let[f,g,_,m]of[[c,.14,J(a),o+l],[c,.14,J(a),o+.07],[.14,l,J(s)+.07,o+l/2],[.14,l,J(r)-.07,o+l/2]])ne(f,g,.14,X.hogFrame,_,m,h,ui);let u=new en(c-.2,l-.2);ls(u,(c-.2)/(4*jt),(l-.2)/(4*jt));let d=new j(u,X.hogMesh);d.position.set(J(a),o+l/2,h),d.castShadow=!0,ui.add(d),ne(.2,l+.6+.3,.2,X.hogFrame,J(s),o+(l+.3)/2-.15,h,ui)}}}var Rd={post:[1352,1548],planters:[1352,1414]},os=[1364,1440],Di=[1342.3,1513],Ca=[1342.3,1513],nn=[1352,1548],Xd=[1299,1094],js=[[1345,1440],[1345,1526]],Pa=Math.atan2(tt(1380)-tt(1349.94),J(1360)-J(1219.87)),Xr=([i,t])=>Math.hypot(i-zt[0],t-zt[1])/wt-72.5/wt,Xx=new ht({color:10196364,roughness:1}),Rl=us("pool");{let i=72.5/wt,t=J(1219.87),e=tt(1349.99),n=new le;n.position.set(t,0,e),Rl.add(n),kn(n,1219.87,1349.99,()=>-$.sink);let s=new j(new ve(i,i,1.9,96,1,!0),X.tank);ls(s.geometry,Math.round(Ie*i/1.6),1),s.position.y=.95,s.castShadow=s.receiveShadow=!0,n.add(s);let r=new j(new ve(i-.03,i-.03,1.9,96,1,!0),X.tankIn);ls(r.geometry,Math.round(Ie*i/1.6),1),r.position.y=.95,r.receiveShadow=!0,n.add(r);let a=[[i-.06,1.86],[i-.07,1.98],[i-.02,2.04],[i+.12,2.05],[i+.2,2],[i+.21,1.9],[i+.17,1.86]].map(([b,T])=>new nt(b,T)),o=new j(new Pr(a,120),X.rim);o.castShadow=o.receiveShadow=!0,n.add(o);let c=new j(new ve(i+.6,i+.6,.35,48),Xx);c.position.y=-.18,c.receiveShadow=!0,n.add(c);let l=new j(new Xs(i-.02,64),X.poolFloor);l.rotation.x=-Math.PI/2,l.position.y=.04,l.receiveShadow=!0,n.add(l);let h=new j(new Xs(i-.04,64),X.water);h.rotation.x=-Math.PI/2,h.position.y=1.68,h.renderOrder=2,n.add(h);{let b=new le;n.add(b);for(let[T,S]of[[.1,"skim"],[-.1,"ret"]]){let P=Pa+T,v=new le;if(v.position.set(Math.cos(P)*i,0,Math.sin(P)*i),v.rotation.y=-P,b.add(v),S==="skim"){ne(.06,.42,.62,X.white,-.04,1.55,0,v),ne(.02,.3,.48,X.jet,-.075,1.55,0,v),ne(.55,.75,.7,X.jet,.3,1.4,0,v);let E=new j(new ve(.075,.075,.3,12),X.pvc);E.position.set(.3,.9,0),v.add(E)}else{let E=new j(new Ti(.12,14,10),X.white);E.position.set(-.05,.85,0),v.add(E);let D=new j(new ve(.17,.17,.06,18),X.white);D.rotation.z=Math.PI/2,D.position.set(-.03,.85,0),v.add(D);let O=new j(new ve(.08,.08,.5,12),X.pvc);O.rotation.z=Math.PI/2,O.position.set(.25,.85,0),v.add(O)}}}let u=new le;u.position.set(J(nn[0]),0,tt(nn[1])),Rl.add(u),kn(u,nn[0],nn[1],0);let d=nr[nr.length-1];window.__placePump=()=>{let b=Rd[$.pumpAt]||Rd.post;nn[0]=b[0],nn[1]=b[1],d[1]=b[0],d[2]=b[1],u.position.set(J(b[0]),Oe(...b),tt(b[1])),u.rotation.y=$.pumpAt==="planters"?Math.PI:0,Yd.forEach((T,S)=>{if(!T)return;let P=$.pumpAt==="planters"&&Ld[S]?Ld[S]:T.home;T.a[1]=P[0],T.a[2]=P[1],T.g.position.set(J(P[0]),Oe(...P),tt(P[1]))}),u.updateMatrixWorld(!0)};let f=new j(new Ae(1.3,.12,2.1),X.concrete);f.position.y=.06,f.receiveShadow=f.castShadow=!0,u.add(f);let g=new j(new ve(.3,.33,.75,24),X.pump);g.position.set(0,.5,-.45),g.castShadow=!0,u.add(g);let _=new j(new ve(.2,.2,.5,16),X.pump);_.rotation.x=Math.PI/2,_.position.set(0,.34,-.85),_.castShadow=!0,u.add(_);let m=new j(new ve(.36,.36,1.6,24),X.white);m.position.set(0,.92,.5),m.castShadow=!0,u.add(m);let p=new j(new Ti(.36,24,12,0,Ie,0,Math.PI/2),X.white);p.position.set(0,1.72,.5),u.add(p);let y=new j(new ve(.09,.09,.05,14),X.steelPost);y.rotation.z=Math.PI/2,y.position.set(-.05,1.98,.5),u.add(y);for(let[b,T,S,P]of[[.12,.5,0,0],[.5,.5,0,-.12],[.12,.7,.95,.95],[.7,.7,.95,.8]]){let v=Math.hypot(T-b,P-S)||.01,E=new j(new ve(.06,.06,v,10),X.pvc);E.position.set(.2,(b+T)/2,(S+P)/2),P!==S&&(E.rotation.x=Math.PI/2),u.add(E)}for(let[b,T]of[[.3,0],[.42,.95]]){let S=new j(new Ae(.1,.07,.24),X.valve);S.position.set(.2,b+.12,T),u.add(S)}let x=new le;Rl.add(x);let M=new ht({color:16053231,roughness:.55});window.__buildHoses=()=>{x.clear();let b=72.5/wt,T=J(zt[0]),S=tt(zt[1]),P=Oe(...zt)-$.sink,v=Oe(...nn),E=$.pumpAt!=="planters",D=(N,k,q=.06)=>new C(J(N),Oe(N,k)+q,tt(k)),O=N=>Math.max(Oe(he-3,N),Oe(he+3,N))+jt+.11;[[.1,.95,.45,-1],[-.1,.85,.6,1]].forEach(([N,k,q,K],z)=>{let Q=Pa+N,it=[new C(T+Math.cos(Q)*(b+q),P+k,S+Math.sin(Q)*(b+q)),new C(T+Math.cos(Q)*(b+q+.5),P+.12,S+Math.sin(Q)*(b+q+.5))];if(E){let et=1394+K*4,ft=1538+K*5,vt=1379+K*3;it.push(D(1340,et),D(he-5,et),new C(J(he),O(et),tt(et)),D(he+5,et+2,-.02),D(vt,et+10,-.04),D(vt,1460,-.04),D(vt,ft-10,-.04),D(he+5,ft-2,-.02),new C(J(he),O(ft),tt(ft)),D(he-5,ft))}else it.push(D(1312,1388+K*3),D(1332,1404+K*3));let gt=u.localToWorld(new C(.22,.14,z?.55:-.2));it.push(new C(gt.x,v+.1,gt.z+(E?-.6:.6)),gt);let Y=new j(new Yn(new On(it,!1,"catmullrom",.2),200,.07,10),M);Y.castShadow=Y.receiveShadow=!0,x.add(Y)});let H=u.localToWorld(new C(0,.34,-1.1)),L;if(E){let N=new C(J(Ca[0]),v+1.45,tt(Ca[1])+.36);L=[H,new C(H.x-.2,v+.12,H.z-.3),new C(N.x+.05,v+.6,N.z+.4),N]}else{let N=Oe(...os),k=new C(J(os[0]),N+1.45,tt(os[1])-.33);L=[H,new C(H.x+.2,v+.1,H.z+.3),new C(k.x-.1,N+.5,k.z-.3),k]}x.add(new j(new Yn(new On(L,!1,"catmullrom",.3),80,.03,6),X.hose))}}var qd=us("furniture");function Cd(i){let t=i.slice(0,4),e=t.reduce((c,l)=>[c[0]+l[0]/4,c[1]+l[1]/4],[0,0]),n=[t[1][0]-t[0][0],t[1][1]-t[0][1]],s=[t[2][0]-t[1][0],t[2][1]-t[1][1]],r=Math.hypot(...n),a=Math.hypot(...s),o=r>a?n:s;return{c:e,L:Math.max(r,a)/wt,W:Math.min(r,a)/wt,ax:[o[0]/Math.hypot(...o),o[1]/Math.hypot(...o)]}}function qx(i){let t=Cd(i.frame),e=Cd(i.back),n=[e.c[0]-t.c[0],e.c[1]-t.c[1]],s=Math.sign(n[0]*t.ax[0]+n[1]*t.ax[1])||1,r=[t.ax[0]*s,t.ax[1]*s],a=new le;a.position.set(J(t.c[0]),0,tt(t.c[1])),a.rotation.y=Math.atan2(-r[1],r[0]),qd.add(a),kn(a,t.c[0],t.c[1],.04);let o=t.L,c=t.W,l=Math.min(e.L,o*.45),h=t.L>4?1:1.2;for(let d of[-1,1])for(let f of[-1,1])ne(.1,h,.1,X.frame,d*(o/2-.15),h/2,f*(c/2-.1),a);ne(o,.1,c,X.frame,0,h,0,a),ne(o-l,.28,c*.94,X.cushion,-l/2,h+.18,0,a);let u=new le;u.position.set(o/2-l,h+.1,0),u.rotation.z=t.L>4?.75:.95,a.add(u),ne(l*1.15,.28,c*.94,X.cushion,l*.57,.14,0,u)}function Yx(i){let t=i.frame.map(c=>c[0]),e=i.frame.map(c=>c[1]),n=(Math.min(...t)+Math.max(...t))/2,s=(Math.min(...e)+Math.max(...e))/2,r=(Math.max(...t)-Math.min(...t))/wt,a=(Math.max(...e)-Math.min(...e))/wt,o=new le;o.position.set(J(n),0,tt(s)),qd.add(o),kn(o,n,s,.04),ne(r,.08,a,X.teak,0,1.4,0,o);for(let c of[-1,1])for(let l of[-1,1])ne(.08,1.4,.08,X.teak,c*(r/2-.08),.7,l*(a/2-.08),o)}for(let i of Object.values(Ve.furniture))i.back?qx(i):Yx(i);var Zx=us("umbrella");{let i=Ve.umbrella[0],t=i.slice(0,4).reduce((m,p)=>m+p[0]/4,0),e=i.slice(0,4).reduce((m,p)=>m+p[1]/4,0),n=Math.hypot(i[1][0]-i[0][0],i[1][1]-i[0][1])/wt,s=Math.atan2(-(i[1][1]-i[0][1]),i[1][0]-i[0][0]),r=Ve.umbrella[2],a=r.slice(0,4).reduce((m,p)=>m+p[0]/4,0),o=r.slice(0,4).reduce((m,p)=>m+p[1]/4,0),c=new le;Zx.add(c),kn(c,a,o,0),c.position.x=J(a),c.position.z=tt(o),ne(2.4,.35,2.4,X.frame,0,.18,0,c);let l=J(t)-J(a),h=tt(e)-tt(o),u=new j(new ve(.08,.09,9.6,12),X.frame);u.position.y=4.8,u.castShadow=!0,c.add(u);let d=Math.hypot(l,h),f=new j(new ve(.06,.06,d,10),X.frame);f.rotation.z=Math.PI/2,f.rotation.y=Math.atan2(-h,l),f.position.set(l/2,9.5,h/2),c.add(f);let g=new j(new Ki(n/Math.SQRT2,1.5,4,1,!0),X.canopy);g.position.set(l,9,h),g.rotation.y=Math.PI/4+s,g.castShadow=!0,g.receiveShadow=!0,c.add(g);let _=new j(new ve(.04,.04,.9,8),X.frame);_.position.set(l,9.3,h),c.add(_)}var Pd=us("planters"),Yd=[],Ld={5:[1338,1380],4:[1318,1416],0:[1328,1442]};{let i=re(13);Ve.planters.forEach((t,e)=>{let[n,s,r]=t[0];e===1&&(n=1330,s=1298);let a=r/wt,o=Math.min(a*1.9,2.4),c=new le;c.position.set(J(n),0,tt(s)),Pd.add(c),kn(c,n,s,0),Yd[e]={g:c,a:nr[nr.length-1],home:[n,s]};let l=[[a*.66,0],[a*.7,.06],[a*.9,o*.84],[a*1.02,o*.86],[a*1.03,o],[a*.93,o],[a*.9,o*.88]].map(([d,f])=>new nt(d,f)),h=new j(new Pr(l,40),X.terracotta);h.castShadow=h.receiveShadow=!0,c.add(h);let u=new j(new Xs(a*.9,24),X.soil);if(u.rotation.x=-Math.PI/2,u.position.y=o*.88,c.add(u),e%2===0){let f=[];for(let _=0;_<16;_++){let m=a*(1+i()*.6),p=new Ki(.11*a*1.4,m,4);p.translate(0,m/2,0),p.scale(1,1,.35),p.rotateZ(-(.35+i()*.75)),p.rotateY(_/16*Ie+i()*.3),f.push(p)}let g=new j(xa(f),X.agave);g.position.y=o*.88,g.castShadow=!0,c.add(g)}else{let d=[];for(let g=0;g<44;g++){let _=1.2+i()*1.3,m=new Ki(.035,_,3);m.translate(0,_/2,0),m.rotateZ((i()-.5)*.9),m.rotateY(i()*Ie),m.translate((i()-.5)*a*.8,0,(i()-.5)*a*.8),d.push(m)}let f=new j(xa(d),X.grassPlant);f.position.y=o*.88,f.castShadow=!0,c.add(f)}});for(let t of Ve.boulders)for(let[e,n,s,r]of t){let a=s/wt,o=re(Math.round(e*7+n)),c=La(new wi(a,2),.45,1.6/Math.max(a,.2),o()*50,.62),l=new j(c,new ht({color:r,roughness:.95,flatShading:!0}));l.position.set(J(e),0,tt(n)),l.rotation.y=o()*Ie,l.castShadow=l.receiveShadow=!0,Pd.add(l),kn(l,e,n,a*.18)}}var fe=us("electrical"),rs=[[1298.5,560],[1298.5,935]],Ui=[[1300,940],[1337,988],[1337,1500],[Di[0],1506],[Di[0],Di[1]]],$x=[],Id=[{p:[1298.5,527],name:"Main panel",kind:"panel"},{p:[1296.8,933],name:"Corner junction box",sub:"No outlet. Feeder turns down here, patio circuit turns up",kind:"jbox"},{p:Di,name:"Subpanel",kind:"sub"},{p:Ca,name:"Pump receptacle",kind:"rcpt"},{p:Xd,name:"Patio outlet",kind:"patio"}],hn={pipe:new ht({color:14236223,emissive:7999508,emissiveIntensity:.55,roughness:.5}),box:new ht({color:12172736,roughness:.45,metalness:.5}),post:new ht({color:8216648,roughness:.9}),copper:new ht({color:13136954,emissive:5909004,emissiveIntensity:.5,roughness:.35,metalness:.8}),rcpt:new ht({color:7304312,roughness:.5,metalness:.3}),tape:new ci({color:16762941,transparent:!0,opacity:.85,side:Te,depthWrite:!1})},Jx=(i,t)=>t>=1108?$e(i,t):t>=950?-.32:-.28;function Kx(i=4){let t=[];for(let e=0;e<Ui.length-1;e++){let[n,s]=Ui[e],[r,a]=Ui[e+1],o=Math.max(1,Math.ceil(Math.hypot(r-n,a-s)/i));for(let c=0;c<(e===Ui.length-2?o+1:o);c++){let l=c/o;t.push([n+(r-n)*l,s+(a-s)*l])}}return t}var tr=[];function Ri(i,t,e,n,s){let r=document.createElement("div");r.className="lbl",r.innerHTML=i;let a=new va(r);return a.position.set(e,n,s),t.add(a),tr.push(a),a}function Cl(i,t,e,n){let s=[];for(let o=0;o<i.length-1;o++){let[c,l]=i[o],[h,u]=i[o+1],d=Math.max(1,Math.ceil(Math.hypot(h-c,u-l)/4));for(let f=0;f<d;f++){let g=f/d,_=c+(h-c)*g,m=l+(u-l)*g;s.push(new C(J(_),t(_,m),tt(m)))}}let[r,a]=i[i.length-1];return s.push(new C(J(r),t(r,a),tt(a))),new j(new Yn(new On(s,!1,"catmullrom",.05),s.length*3,e,8),n)}var jx=new ci({color:4173418,transparent:!0,opacity:.1,depthWrite:!1,side:Te});function Qx(){for(let r of tr)r.removeFromParent(),r.element.remove();tr.length=0,fe.clear();let i=$.cdepth,t=(r,a)=>Jx(r,a)-i;fe.add(Cl(Ui,t,.09,hn.pipe));{let r=J(1296)+.12,a=.9,o=t(...Ui[0]),c=[[r,3,tt(rs[0][1])-2.3],[r,a+.3,tt(rs[0][1])-1.6],[r,a,tt(rs[0][1])],[r,a,tt(rs[1][1])],[r+.05,-.3,tt(rs[1][1])+.15],[J(Ui[0][0]),o,tt(Ui[0][1])]].map(h=>new C(...h)),l=new j(new Yn(new On(c,!1,"catmullrom",.08),90,.08,10),X.white);l.castShadow=!0,fe.add(l),Ri("Surface conduit<small>On the house wall, then underground at the back corner</small>",fe,r,a+.6,tt((rs[0][1]+rs[1][1])/2))}for(let r of $x){let a=Cl(r.pts,r.from==="house"?(o,c)=>-1.8:(o,c)=>t(o,c)+.15,.06,hn.pipe);fe.add(a)}let e=Kx(8);for(let r=0;r<e.length-1;r++){let[a,o]=e[r],[c,l]=e[r+1],h=Math.hypot(c-a,l-o)/wt;if(h<.2)continue;let u=new j(new en(.25,h),hn.tape);u.rotation.x=-Math.PI/2,u.rotation.z=Math.atan2(-(c-a),l-o);let d=(a+c)/2,f=(o+l)/2;u.position.set(J(d),Math.min(t(d,f)+1,Oe(d,f)-.15),tt(f)),fe.add(u)}let n=$.pumpAt==="planters"?Id.concat([{p:os,name:"Pump outlet",kind:"pout"}]):Id;$.pumpAt==="planters"&&fe.add(Cl([[Di[0]-2,Di[1]],[Di[0]-2,1508],[1339,1500],[1339,1428],[os[0],os[1]]],(r,a)=>t(r,a)+.2,.055,hn.pipe));for(let r of n){let[a,o]=r.p,c=Oe(a,o),l=J(a),h=tt(o),u=t(a,o),d,f,g,_=.32,m=l,p=h;if(r.kind==="panel")d=3,f=.32,g=2,_=1.2,m=J(1296)+.17;else if(r.kind==="jbox")d=.62,f=.28,g=.55,_=.55,m=J(1296)+.14;else if(r.kind==="sub"){d=c+3.6,f=.3,g=1.5,_=1.05,m=l+.32;let M=new j(new Ae(.29,6.6,.29),hn.post);M.position.set(l,c+6.6/2-1.4,h),M.castShadow=M.receiveShadow=!0,fe.add(M),ne(.55,.08,1.4,hn.post,l+.12,c+5.25,h,fe)}else if(r.kind==="pout"){d=c+1.2,f=.38,g=.6,_=.42,p=h-.33;let M=new j(new Ae(.29,3.6,.29),hn.post);M.position.set(l,c+.3,h),M.castShadow=M.receiveShadow=!0,fe.add(M)}else if(r.kind==="rcpt"){d=c+1.2,f=.38,g=.6,_=.42,p=h+.33;let M=new j(new ve(.045,.045,1.5,10),hn.box);M.position.set(l+.1,d+g+.7,h+.3),fe.add(M)}else if(r.kind==="patio"){d=1.4,f=.42,g=.6,_=.38,m=l+.3;let M=tt(951),b=tt(1098),T=v=>8.25-(v-M)*(.9/(b-M)),S=J(1296)+.12,P=[[S,1.15,tt(933)],[S,7,tt(933)],[S,7,M+.2],[J(1300.5),T(M+.6)-.25,M+.6],[J(1300.5),T(b-.3)-.25,b-.3],[J(1298)+.19,6.6,b],[J(1298)+.19,d+g+.05,b]].map(v=>new C(...v));fe.add(new j(new Yn(new On(P,!1,"catmullrom",.02),80,.04,8),X.white))}if(r.kind!=="rcpt"&&r.kind!=="patio"&&r.kind!=="panel"&&r.kind!=="jbox"&&r.kind!=="pout"){let M=new j(new ve(r.kind==="post"||r.kind==="patio"?.05:.07,r.kind==="post"||r.kind==="patio"?.05:.07,d-u,10),hn.pipe);M.position.set(l,(d+u)/2,h),fe.add(M)}let y=new j(new Ae(f,g,_),r.kind==="rcpt"||r.kind==="patio"||r.kind==="pout"?hn.rcpt:hn.box);y.position.set(m,d+g/2-.05,p),y.castShadow=!0,fe.add(y);let x=r.sub||"";if(r.kind==="sub"){let M=new j(new ve(.03,.03,8,8),hn.copper);M.position.set(l+.5,c-4+.1,h-.6),fe.add(M),Ri("Ground rod<small>8 ft, at the post</small>",fe,l+.5,c-6,h-.6);let b=new j(new Ae(3,6.5,2.5),jx);b.position.set(l+.47+1.5,c+3.25,h),b.visible=$.under,b.userData.xrayOnly=!0,fe.add(b),x=`On a post at the shed's corner, facing the fence \xB7 ${Xr(Di).toFixed(1)} ft from tank`}r.kind==="pout"&&(x=`GFCI, in-use cover, short post by the fence \xB7 ${Xr(os).toFixed(1)} ft from tank`),r.kind==="rcpt"&&(x=`Same post, toward the pump \xB7 GFCI, in-use cover \xB7 ${Xr(Ca).toFixed(1)} ft from tank`),r.kind==="patio"&&(x=`Own 20 A circuit, surface conduit \xB7 GFCI \xB7 ${Xr(Xd).toFixed(1)} ft from tank`),Ri(`${r.name}<small>${x}</small>`,fe,m,d+g+.25,p)}if($.sink>0){let r=72.5/wt+1.75,a=Jn()-.42,o=J(zt[0]),c=tt(zt[1]),l=new j(new sa(r,.035,8,120),hn.copper);l.rotation.x=Math.PI/2,l.position.set(o,a,c),fe.add(l);for(let f=0;f<4;f++){let g=f/4*Ie+.4,_=Math.cos(g),m=Math.sin(g),p=new j(new ve(.03,.03,1.75,6),hn.copper);p.rotation.z=Math.PI/2,p.rotation.y=-g,p.position.set(o+_*(r-.875),a,c+m*(r-.875)),fe.add(p)}let h=Math.atan2(tt(nn[1])-c,J(nn[0])-o),u=Oe(...nn),d=[new C(o+Math.cos(Pa)*r,a,c+Math.sin(Pa)*r),new C(J(js[0][0])+.3,Oe(...js[0])-.55,tt(js[0][1])),new C(J(js[1][0])+.3,Oe(...js[1])-.55,tt(js[1][1])),new C(J(nn[0])+.5,u+.3,tt(nn[1])+.5)];fe.add(new j(new Yn(new On(d),24,.03,6),hn.copper)),Ri("Bonding ring<small>#8 solid copper \xB7 18 to 24 in out \xB7 4 to 6 in down</small>",fe,o-Math.cos(h)*r,a,c-Math.sin(h)*r)}{let r=Oe(...nn);Ri($.pumpAt==="planters"?`Pump + filter<small>Behind the big pot \xB7 ${Xr(nn).toFixed(1)} ft from tank \xB7 4 ft hoses</small>`:"Pump + filter<small>At the shed \xB7 hoses run in the basalt strip, about 20 ft</small>",fe,J(nn[0]),r+2.6,tt(nn[1]))}sr()&&Ri("Square tube returns<small>Welded behind the \xBC in steel every ~3.5 ft, each set in a concrete footing</small>",fe,J(1100),dn()-.5,tt(Me-2*wt));let s=[1337,1400];Ri(`Feeder, underground<small>${Zr(i)} below today's grade</small>`,fe,J(s[0]),t(...s),tt(s[1]));for(let r of tr)r.visible=$.under&&fe.visible}var ty=new ht({color:14256458,transparent:!0,opacity:.32,depthWrite:!1,side:Te,roughness:1}),ey=new Rr({color:11887914,transparent:!0,opacity:.45,depthWrite:!1}),Zn=null;function Zd(){if(Zn&&(ae.remove(Zn),Zn.geometry.dispose(),Zn=null),!($.under&&$.mode==="proposed"))return;let i=zd(mn[1],1108,he,1681,2);Zn=new j(i,ty),Wl(Zn,(t,e)=>$e(t,e)-.02);{let t=[],e=2*wt;for(let s=mn[1];s<=he+.1;s+=e)for(let r=1108;r<1681;r+=e/4)t.push(J(s),$e(s,r),tt(r),J(s),$e(s,Math.min(r+e/4,1681)),tt(Math.min(r+e/4,1681)));for(let s=1108;s<=1681;s+=e)for(let r=mn[1];r<he;r+=e/4){let a=Math.min(r+e/4,he);t.push(J(r),$e(r,s),tt(s),J(a),$e(a,s),tt(s))}let n=new ge;n.setAttribute("position",new Ot(t,3)),Zn.add(new Ko(n,ey))}Zn.renderOrder=3,ae.add(Zn),Ri("Today's grade<small>fill sits above this sheet</small>",Zn,J(1180),$e(1180,1560),tt(1560))}var ny=()=>[X.ground,X.dirt,X.outside,X.brush,X.concrete,X.skirtSoil,zn.sideNorth.material].concat(X.limeTint?[X.limeTint]:[]);function Yl(){let i=$.under;St("xray").setAttribute("aria-pressed",String(i));for(let t of ny())t.transparent=i,t.opacity=i?.22:1,t.depthWrite=!i,t.needsUpdate=!0;pe.maxPolarAngle=i?Math.PI*.6:Math.PI*.495,Wd(),St("labels").hidden=!i,Zd();for(let t of tr)t.visible=i&&fe.visible;fe.traverse(t=>{t.userData.xrayOnly&&(t.visible=i)}),Ba()}var iy=us("shed");{let i=J(1287),t=J(1339),e=tt(1505.38),n=tt(1602.87),s=t-i,r=n-e,a=new le;a.position.set((i+t)/2,0,(e+n)/2),iy.add(a),kn(a,1313,1554,0);let o=6.2,c=6.9,l=ne(s,c,r,X.shed,0,c/2,0,a),h=ne(s+.6,.15,r+.6,X.shedRoof,0,(o+c)/2+.1,0,a);h.rotation.z=Math.atan((c-o)/s),ne(.06,5.6,2.6,X.trim,-s/2-.02,2.9,0,a),ne(.07,5.2,2.2,X.shed,-s/2-.04,2.75,0,a)}var Na=us("context");function $d(i,t,e,n,s,r,a=8.6,o=4/12){let c=new le;Na.add(c);let l=(e-i)/wt,h=(n-t)/wt,u=J((i+e)/2),d=tt((t+n)/2),f=new j(new Ae(l,a+.3,h),new ht({color:s,roughness:.85}));f.position.set(u,(a+.3)/2-.3,d),f.castShadow=f.receiveShadow=!0,c.add(f);let g=1.2,_=u-l/2-g,m=u+l/2+g,p=d-h/2-g,y=d+h/2+g,x=m-_>=y-p,M=(x?y-p:m-_)/2,b=a+M*o,T=[];if(x){let v=(p+y)/2,E=_+M,D=m-M;T.push(_,a,y,m,a,y,D,b,v,_,a,y,D,b,v,E,b,v,m,a,p,_,a,p,E,b,v,m,a,p,E,b,v,D,b,v,_,a,p,_,a,y,E,b,v,m,a,y,m,a,p,D,b,v)}else{let v=(_+m)/2,E=p+M,D=y-M;T.push(m,a,y,m,a,p,v,b,E,m,a,y,v,b,E,v,b,D,_,a,p,_,a,y,v,b,D,_,a,p,v,b,D,v,b,E,m,a,p,_,a,p,v,b,E,_,a,y,m,a,y,v,b,D)}let S=new ge;S.setAttribute("position",new Ot(T,3)),S.computeVertexNormals();let P=new j(S,new ht({color:r,roughness:.95,side:Te}));return P.castShadow=!0,c.add(P),c}$d(1460,300,1800,1077,10135206,7172212);$d(95,390,402,1095,15328990,6974576);{let i=J(1446),t=J(1682),e=tt(1586),n=tt(1738),s=t-i,r=n-e,a=-.4,o=new le;o.position.set((i+t)/2,a,(e+n)/2),Na.add(o),ne(s,7,r,new ht({color:10264476,roughness:.85}),0,3.5,0,o);let c=[[-s/2-.4,7],[-s/2+1.3,10.2],[0,11.6],[s/2-1.3,10.2],[s/2+.4,7]],l=[];for(let d=0;d<c.length-1;d++){let[f,g]=c[d],[_,m]=c[d+1];l.push(f,g,-r/2-.4,_,m,-r/2-.4,_,m,r/2+.4,f,g,-r/2-.4,_,m,r/2+.4,f,g,r/2+.4)}let h=new ge;h.setAttribute("position",new Ot(l,3)),h.computeVertexNormals();let u=new j(h,new ht({color:12240588,roughness:.4,metalness:.6,side:Te}));u.castShadow=!0,o.add(u);for(let d of[-1,1]){let f=new qs([new nt(-s/2,7),...c.slice(1,4).map(([_,m])=>new nt(_,m)),new nt(s/2,7)]),g=new j(new Ur(f),new ht({color:10264476,roughness:.85,side:Te}));g.position.z=d*r/2,o.add(g)}}{let i=new ge;i.setAttribute("position",new Ot([J(300),9.5,tt(1020),J(470),8.2,tt(1010),J(420),9.8,tt(1150),J(300),9.5,tt(1020),J(420),9.8,tt(1150),J(310),8,tt(1160)],3)),i.computeVertexNormals();let t=new j(i,X.sail);t.castShadow=!0,Na.add(t)}function Ea(i,t,e,n,s,r,a){let o=re(a),c=new le;c.position.set(i,e,t);let l=r==="juniper"?n*.25:n*.42,h=X.trunk.clone(),u=new j(new ve(s*.05,s*.08,l,8),h);u.position.y=l/2,u.castShadow=!0,c.add(u);let d=[],f=r==="juniper"?9:18,g=r==="juniper"?new Ut(4021303):r==="fall"?new Ut(10852949):new Ut(5797949);for(let y=0;y<f;y++){let x=y/f,M,b,T,S;if(r==="juniper")b=l+x*(n-l)*.95,S=s*(1-x*.75)*(.7+o()*.3),M=(o()-.5)*s*.4,T=(o()-.5)*s*.4;else{let H=o()*Ie,L=o()*s*.75;M=Math.cos(H)*L,T=Math.sin(H)*L,b=l+s*.35+o()*(n-l-s*.7),S=s*(.32+o()*.26)}let P=new wi(S,2);P.deleteAttribute("uv"),P.deleteAttribute("normal");let v=La(wl(P),.55,1.2/S,o()*90,.82),E=v.attributes.position;v.translate(M,b,T);let D=new Float32Array(E.count*3),O=g.clone().offsetHSL((o()-.5)*.03,(o()-.5)*.1,(o()-.5)*.08);for(let H=0;H<E.count;H++){let L=.95+.35*(E.getY(H)-b+S)/(2*S);D[H*3]=O.r*L,D[H*3+1]=O.g*L,D[H*3+2]=O.b*L}v.setAttribute("color",new _e(D,3)),v.setAttribute("uv",new _e(new Float32Array(E.count*2).map((H,L)=>L%2?E.getY(L>>1)/3:(E.getX(L>>1)+E.getZ(L>>1))/3),2)),d.push(v)}let _=X.canopyTree.clone(),m=new j(xa(d),_);m.castShadow=!0,m.receiveShadow=!0,c.add(m),Na.add(c),m.geometry.computeBoundingSphere();let p=m.geometry.boundingSphere;return Jd.push({mesh:m,mat:_,tmat:h,c:p.center.clone().add(c.position),r:p.radius*.85,x:c.position.x,z:c.position.z,top:c.position.y+n,rh:s*.95}),c}var Jd=[];{let i=re(2024);for(let t=0;t<54;t++){let e=380+i()*1450,n=1800+Math.pow(i(),.8)*700,s=i()<.22?"juniper":i()<.15?"fall":"oak",r=Da(un(e,486,1394))-.3-Math.pow(Math.max(0,(n-1690)/wt),1.15)*.16;Ea(J(e),tt(n),e>1394||e<486?-.4:r,26+i()*22,7+i()*6,s,t+1)}Ea(J(1560),tt(1520),-.4,30,9,"fall",901);for(let[t,e,n,s]of[[300,1250,34,15],[260,700,30,13],[1560,640,32,13],[1620,980,28,12],[900,230,30,14],[700,260,26,11]])Ea(J(t),tt(e),-.3,n,s,"oak",t+e);Ve.trees.forEach(([t,e,n],s)=>Ea(J(t),tt(e),-.3,18+n/4,n/wt*2.2,"oak",300+s))}var Qs={top:{value:new Ut},hor:{value:new Ut},sunDir:{value:new C},glow:{value:new Ut}},Oa=new j(new Ti(3e3,32,16),new Nn({side:He,depthWrite:!1,uniforms:Qs,vertexShader:"varying vec3 vD;void main(){vD=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform vec3 top,hor,glow,sunDir;varying vec3 vD;void main(){float h=clamp(vD.y,0.,1.);vec3 c=mix(hor,top,pow(h,0.55));float s=max(dot(normalize(vD),normalize(sunDir)),0.);c+=glow*(pow(s,8.)*0.35+pow(s,600.)*2.);if(vD.y<0.)c=mix(hor,hor*0.8,clamp(-vD.y*4.,0.,1.));gl_FragColor=vec4(c,1.);}"}));Oa.renderOrder=-1;ae.add(Oa);var Kd=new oa(14674418,7167047,.7);ae.add(Kd);var Gn=new la(16777215,2.6);Gn.castShadow=!0;Gn.shadow.mapSize.set(Nl?2048:4096,Nl?2048:4096);var rr=Gn.shadow.camera;rr.left=-58;rr.right=58;rr.top=58;rr.bottom=-58;rr.near=1;rr.far=400;Gn.shadow.bias=-4e-4;Gn.shadow.normalBias=.03;var jd=new C(J(1e3),0,tt(1150));Gn.target.position.copy(jd);ae.add(Gn,Gn.target);ae.fog=new Jo(14542054,220,1400);function Qd(i,t){let e=30.27*Math.PI/180,n=-97.74,s=[21,52,80,111,141,172,202,233,264,294,325,355][i-1],r=i>=3&&i<=10?1:0,a=23.44*Math.sin(Ie/365*(s-81))*Math.PI/180,o=Ie/365*(s-81),c=9.87*Math.sin(2*o)-7.53*Math.cos(o)-1.5*Math.sin(o),h=(t-r+(4*(n+90)+c)/60-12)*15*Math.PI/180,u=Math.asin(Math.sin(e)*Math.sin(a)+Math.cos(e)*Math.cos(a)*Math.cos(h)),d=(Math.atan2(Math.sin(h),Math.cos(h)*Math.sin(e)-Math.tan(a)*Math.cos(e))+Math.PI)%Ie;return{el:u,az:d}}function tf(){let{el:i,az:t}=Qd($.month,$.time),e=t-$.north*Math.PI/180,n=new C(Math.cos(i)*Math.sin(e),Math.sin(i),-Math.cos(i)*Math.cos(e));Gn.position.copy(jd).addScaledVector(n,220);let s=Math.max(i,0),r=un(Math.sin(s)*3,0,1),a=new Ut().setHSL(.08,.85,.6).lerp(new Ut(16774890),un(Math.sin(s)*2.2,0,1));Gn.color.copy(a),Gn.intensity=i>0?.4+2.4*r:0,Kd.intensity=.35+.45*un(Math.sin(i+.1)*2,0,1),Qs.top.value.setHSL(.58,.45,.25+.4*un(Math.sin(i+.12)*2,0,1)),Qs.hor.value.setHSL(i<.15?.07:.57,i<.15?.4:.25,.55+.3*un(Math.sin(i+.1)*3,0,1)),Qs.glow.value.copy(a),Qs.sunDir.value.copy(n),ae.fog.color.copy(Qs.hor.value),Fe.toneMappingExposure=i>0?1:.9,document.getElementById("needle").setAttribute("transform",`rotate(${-$.north})`),ef(),hf(),Ba()}function ef(){let i=Math.atan2(zl.x,-zl.z)*180/Math.PI;document.getElementById("needle").setAttribute("transform",`rotate(${-($.north+i)})`)}var Zr=i=>`${Math.round(i*12)} in`,St=i=>document.getElementById(i);function An(){window.__placePump(),Ex();for(let r of["lawn","walk"])Wl(zn[r],zn[r].userData.h);for(let[r,a,o,c]of nr)r.position.y=Oe(a,o)+kd(c);bx(),Wx();let i=Rx(),t=Ox();window.__buildHoses(),Ix();let e=document.getElementById("stats");e.innerHTML="";let n=(r,a,o)=>{let c=document.createElement("div");c.className="stat"+(o?" warn":""),c.innerHTML=`<b>${r}</b>`+a.map(l=>`<span>${l}</span>`).join(""),e.appendChild(c)};{let r=Jn()-$.sink+2-dn();n("Pool",[`Rim ${Zr(Math.abs(r))} ${r>=0?"above":"below"} the pad`,"Tank sits on grade on the pool level"].concat($.sink>0?["Backfill with gravel and wrap the buried steel."]:[]))}let s=r=>r===0?"flush with patio":`${Zr(-r)} below patio`;St("o-pad").textContent=s($.pad),St("o-step1").textContent=$.step1<jt?"none":Zr($.step1),St("o-step2").textContent=$.step2<jt?"none":Zr($.step2);for(let r of["pool","furniture","umbrella","planters","shed"])hi[r].visible=$.mode==="proposed"&&$.layers[r];ql.visible=$.mode==="proposed",Wd(),hi.context.visible=$.layers.context,ba=!0,fe.visible=$.layers.electrical,Qx(),Zd(),hf(),Ba()}var sy=4.7,nf=[{key:"overview",name:"Overview",sub:"Whole yard",pos:[700,1700,46],tgt:[1130,1270,-2]},{key:"hero",name:"Patio, west post",sub:"Photo 5",pos:[1046,1098,"eye"],tgt:[1320,1590,"tgt"]},{key:"chimney",name:"From the chimney",sub:"Photo 1",pos:[1042,1e3,"eye"],tgt:[1080,1600,"tgt"]},{key:"patioE",name:"Patio, east end",sub:"Photo 2",pos:[1292,1030,"eye"],tgt:[1170,1600,"tgt"]},{key:"back",name:"Back fence, walkway",sub:"Photo 3",pos:[994,1668,"eye"],tgt:[994,950,6]},{key:"corner",name:"Back-right, by the shed",sub:"Near photo 4",pos:[1262,1668,"eye"],tgt:[1010,980,5]},{key:"pool",name:"Lounger on the pad",sub:"Eye level, seated",pos:[1250,1186,3.3],tgt:[1185,1560,.8]},{key:"equip",name:"Pool equipment",sub:"Shed corner",pos:[1386,1610,6.5],tgt:[1345,1525,1.4]},{key:"plumb",name:"Pool hoses",sub:"Tank to pump",pos:[1358,1655,6],tgt:[1366,1400,-1.2]},{key:"patioOut",name:"Patio outlet",sub:"By the deck",pos:[1352,1150,5],tgt:[1300,1092,1.6],under:!0},{key:"returns",name:"Pad steel supports",sub:"Quote, underground",pos:[1085,1385,4.5],tgt:[1120,1290,-1.2],under:!0},{key:"conduit",name:"Conduit route",sub:"Underground",pos:[1381,1585,6],tgt:[1334,1230,-2.4],under:!0},{key:"top",name:"Plan view",sub:"Straight down",pos:[1130,1395,150],tgt:[1130,1394,0]}];function ry(i){let t=i.pos[2]==="eye"?Oe(i.pos[0],i.pos[1])+sy:i.pos[2],e=i.tgt[2]==="tgt"?t-1.2:i.tgt[2];return{pos:new C(J(i.pos[0]),t,tt(i.pos[1])),tgt:new C(J(i.tgt[0]),e,tt(i.tgt[1]))}}var Tn=null,sf=matchMedia("(prefers-reduced-motion: reduce)").matches;function Zl(i,t){let e=nf.find(r=>r.key===i);if(!e)return;$.view=i,e.under&&!$.under&&($.under=!0,Yl());let{pos:n,tgt:s}=ry(e);Pe.fov=i==="top"?40:e.pos[2]==="eye"||i==="pool"?68:50,Pe.updateProjectionMatrix(),t||sf?(Pe.position.copy(n),pe.target.copy(s),pe.update(),Oi()):Tn={t0:performance.now(),p0:Pe.position.clone(),t0v:pe.target.clone(),p1:n,t1:s},document.querySelectorAll("#views button").forEach(r=>r.setAttribute("aria-pressed",String(r.dataset.key===i))),Oi()}{let i=document.getElementById("views");for(let t of nf){let e=document.createElement("button");e.type="button",e.dataset.key=t.key,e.id="v-"+t.key,e.innerHTML=`${t.name}<small>${t.sub}</small>`,e.onclick=()=>Zl(t.key),i.appendChild(e)}}pe.addEventListener("start",()=>{Tn=null,document.querySelectorAll("#views button").forEach(i=>i.setAttribute("aria-pressed","false"))});function $l(i,t,e,n,s){let r=St(i);r.value=n($[t]),typeof Hl<"u"&&Hl.push([r,t,n]),r.addEventListener("input",()=>{$[t]=e(+r.value),s(),Vn()})}var Hl=[];$l("g-pad","pad",i=>i*jt,i=>Math.round(i*12),An);$l("g-step1","step1",i=>i*jt,i=>Math.round(i*12),An);$l("g-step2","step2",i=>i*jt,i=>Math.round(i*12),An);$.padSurf!=="cbrick"&&($.padSurf="brick");["plan","quote","feedback"].includes($.ver)||($.ver="plan");$.fbPat!=="45"&&($.fbPat="90");$.fbEdge!=="steel"&&($.fbEdge="block");["red","amaretto","walnut","charcoal"].includes($.fbColor)||($.fbColor="red");var rf=["red","amaretto","walnut","charcoal"];function oy(i){$.fbColor=i,rf.forEach(t=>St("fc-"+t).setAttribute("aria-pressed",String(t===i))),An(),Vn()}rf.forEach(i=>{St("fc-"+i).onclick=()=>oy(i),St("fc-"+i).setAttribute("aria-pressed",String(i===$.fbColor))});function of(i){$.fbEdge=i,St("fe-steel").setAttribute("aria-pressed",String(i==="steel")),St("fe-block").setAttribute("aria-pressed",String(i==="block")),An(),Vn()}St("fe-steel").onclick=()=>of("steel");St("fe-block").onclick=()=>of("block");St("fe-steel").setAttribute("aria-pressed",String($.fbEdge==="steel"));St("fe-block").setAttribute("aria-pressed",String($.fbEdge==="block"));function af(i){$.fbPat=i,St("fb-45").setAttribute("aria-pressed",String(i==="45")),St("fb-90").setAttribute("aria-pressed",String(i==="90")),An(),Vn()}St("fb-45").onclick=()=>af("45");St("fb-90").onclick=()=>af("90");St("fb-45").setAttribute("aria-pressed",String($.fbPat==="45"));St("fb-90").setAttribute("aria-pressed",String($.fbPat==="90"));function Fa(i){$.ver=i,St("v-plan").setAttribute("aria-pressed",String(i==="plan")),St("v-quote").setAttribute("aria-pressed",String(i==="quote")),St("v-fb").setAttribute("aria-pressed",String(i==="feedback")),St("sec-pad").hidden=i!=="plan",St("sec-fbpad").hidden=i!=="feedback",St("sec-fbedge").hidden=i!=="feedback",St("sec-fbcol").hidden=i!=="feedback",St("v-hint").textContent=i==="feedback"?"The quote with your changes: a darker paver with a matching soldier border, crushed limestone instead of marble, the cheaper 90\xB0 herringbone, and a wall block tier holding the pad level instead of the steel wall.":i==="quote"?"Austin Creative Landscaping, Oct 20 quote: steel-edged Amaretto herringbone pad with an Anthracite border, tank area one step down, 12 in stepped steel wall 16 in off the fence, steel-edged turf, crushed limestone instead of marble.":"Block step walls around the pool level, corten edge along the fence, your choice of pad brick.",An(),Vn()}$.pumpAt!=="planters"&&($.pumpAt="post");function cf(i){$.pumpAt=i,St("pp-post").setAttribute("aria-pressed",String(i==="post")),St("pp-plant").setAttribute("aria-pressed",String(i==="planters")),An(),Vn()}St("pp-post").onclick=()=>cf("post");St("pp-plant").onclick=()=>cf("planters");St("pp-post").setAttribute("aria-pressed",String($.pumpAt==="post"));St("pp-plant").setAttribute("aria-pressed",String($.pumpAt==="planters"));St("v-plan").onclick=()=>Fa("plan");St("v-fb").onclick=()=>Fa("feedback");St("v-quote").onclick=()=>Fa("quote");function lf(i){$.padSurf=i,St("ps-brick").setAttribute("aria-pressed",String(i==="brick")),St("ps-cbrick").setAttribute("aria-pressed",String(i==="cbrick")),An(),Vn()}St("ps-brick").onclick=()=>lf("brick");St("ps-cbrick").onclick=()=>lf("cbrick");St("ps-cbrick").setAttribute("aria-pressed",String($.padSurf==="cbrick"));St("ps-brick").setAttribute("aria-pressed",String($.padSurf==="brick"));St("g-reset").addEventListener("click",()=>{Object.assign($,Ed);for(let[i,t,e]of Hl)t in Ed&&(i.value=e($[t]));An(),Vn()});$.mode="proposed";{let i=[["pool","Pool + pump"],["furniture","Loungers"],["umbrella","Umbrella"],["planters","Pots + boulders"],["shed","Shed"],["electrical","Buried conduit"],["context","Neighbors + trees"]],t=St("layers");for(let[e,n]of i){let s=document.createElement("label");s.innerHTML=`<input type="checkbox" id="l-${e}"${$.layers[e]?" checked":""}> ${n}`,s.querySelector("input").addEventListener("change",r=>{$.layers[e]=r.target.checked,An(),Vn()}),t.appendChild(s)}}function hf(){let{el:i}=Qd($.month,$.time);St("badge").innerHTML=`<b>Late October afternoon</b>${i<=0?" \xB7 sun is down":` \xB7 sun ${Math.round(i*180/Math.PI)}\xB0 up`}`}var Ci=!0,ba=!0;function Oi(){Ci=!0}function Ba(){Fe.shadowMap.needsUpdate=!0,Ci=!0}var Ny=new C,Oy=new C;function ay(){if(!hi.context.visible)return!1;let i=Pe.position,t=pe.target,e=t.x-i.x,n=t.z-i.z,s=e*e+n*n||1e-6,r=Math.sqrt(s),a=!1;for(let o of Jd){let c=un(((o.x-i.x)*e+(o.z-i.z)*n)/s,0,1),l=i.x+e*c,h=i.z+n*c,u=Math.hypot(o.x-l,o.z-h),d=i.y+(t.y-i.y)*c,g=c>0&&c<1&&u<o.rh+r*c*.12&&d<o.top||o.c.distanceTo(i)<o.r*1.05?0:1,_=o.mat.opacity;if(_=sf?g:_+(g-_)*.3,Math.abs(_-g)<.05?_=g:a=!0,_!==o.mat.opacity){let m=_<.999;for(let p of[o.mat,o.tmat])p.opacity=_,p.colorWrite=_>.02,p.transparent!==m&&(p.transparent=m,p.depthWrite=!m,p.needsUpdate=!0)}}return a}pe.addEventListener("change",Oi);var zl=new C,uf=new Ma({element:St("labels")});function df(){let i=Qr.clientWidth,t=Qr.clientHeight;!i||!t||(Fe.setSize(i,t,!1),uf.setSize(i,t),Pe.aspect=i/t,Pe.updateProjectionMatrix(),Oi())}new ResizeObserver(df).observe(Qr);function ff(i){if(requestAnimationFrame(ff),Tn){let t=un((i-Tn.t0)/900,0,1),e=t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;Pe.position.lerpVectors(Tn.p0,Tn.p1,e),pe.target.lerpVectors(Tn.t0v,Tn.t1,e),t>=1&&(Tn=null),Ci=!0}pe.update()&&(Ci=!0),(Ci||ba)&&(ba=ay(),ba&&(Ci=!0)),Ci&&(Ci=!1,Pe.getWorldDirection(zl),ef(),Oa.position.copy(Pe.position),Fe.render(ae,Pe),$.under&&(uf.render(ae,Pe),cy()))}function cy(){let i=[];for(let t of tr){let e=t.element;if(!t.visible||e.style.display==="none")continue;e.style.opacity="1";let n=e.getBoundingClientRect();if(i.some(s=>n.left<s.right+4&&n.right>s.left-4&&n.top<s.bottom+2&&n.bottom>s.top-2)){e.style.opacity="0";continue}i.push(n)}}var Pl=new ha,Dd=new nt,ly=new C;function hy(){let i=[];return ae.traverse(t=>{if(!(t.isMesh||t.isInstancedMesh)||t===Oa||!t.visible||Fl.includes(t))return;let e=t,n=!1;for(;e;){if(e.visible===!1){n=!0;break}if(e===hi.context){n=!0;break}e=e.parent}n||i.push(t)}),i}var Ll=null,Ud=0;function Jl(i,t){let e=Fe.domElement.getBoundingClientRect();Dd.set((i-e.left)/e.width*2-1,-(t-e.top)/e.height*2+1),Pl.setFromCamera(Dd,Pe);let n=performance.now();(!Ll||n-Ud>800)&&(Ll=hy()),Ud=n;let s=Pl.intersectObjects(Ll,!1);for(let r of s){let a=[].concat(r.object.material)[0];if(!(a&&a.opacity<.5&&!$.under)&&!(a&&a.wireframe))return r.point}return Pl.ray.at(Math.max(Pe.position.distanceTo(pe.target),5),ly).clone()}var Il=null,Dl=[0,0],Nd=0;function pf(i,t){let e=Pe.position.distanceTo(i);t<1&&e*t<.35&&(t=.35/e),!(t>1&&Pe.position.distanceTo(pe.target)*t>pe.maxDistance)&&(Pe.position.sub(i).multiplyScalar(t).add(i),pe.target.sub(i).multiplyScalar(t).add(i),Tn=null,pe.update(),Oi())}Qr.addEventListener("wheel",i=>{i.preventDefault(),i.stopPropagation();let t=performance.now();(!Il||t-Nd>220||Math.hypot(i.clientX-Dl[0],i.clientY-Dl[1])>6)&&(Il=Jl(i.clientX,i.clientY),Dl=[i.clientX,i.clientY]),Nd=t;let e=i.deltaY*(i.deltaMode===1?33:i.deltaMode===2?400:1),n=i.ctrlKey?.022:.0042;pf(Il,un(Math.exp(e*n),.45,2.2))},{capture:!0,passive:!1});function mf(i,t){let e=Jl(i,t),n=Pe.position.clone().sub(e),s=n.length(),r=un(s*.3,1.2,30);Tn={t0:performance.now(),p0:Pe.position.clone(),t0v:pe.target.clone(),p1:e.clone().add(n.multiplyScalar(r/s)),t1:e.clone()},Oi()}Fe.domElement.addEventListener("dblclick",i=>{i.preventDefault(),mf(i.clientX,i.clientY)});{let i=0,t=0,e=0;Fe.domElement.addEventListener("pointerup",n=>{if(n.pointerType!=="touch")return;let s=performance.now();s-i<320&&Math.hypot(n.clientX-t,n.clientY-e)<24?(mf(n.clientX,n.clientY),i=0):(i=s,t=n.clientX,e=n.clientY)})}function gf(i){let t=Fe.domElement.getBoundingClientRect();pf(Jl(t.left+t.width/2,t.top+t.height/2),i)}St("z-in").onclick=()=>gf(.55);St("z-out").onclick=()=>gf(1.8);St("xray").onclick=()=>{$.under=!$.under,Yl(),Vn()};function to(i){$.drag=i;let t=i==="rotate";pe.mouseButtons={LEFT:t?Je.ROTATE:Je.PAN,MIDDLE:Je.DOLLY,RIGHT:t?Je.PAN:Je.ROTATE},pe.touches={ONE:t?ln.ROTATE:ln.PAN,TWO:t?ln.DOLLY_PAN:ln.DOLLY_ROTATE},St("d-move").setAttribute("aria-pressed",String(!t)),St("d-rot").setAttribute("aria-pressed",String(t)),Vn()}St("d-move").onclick=()=>to("move");St("d-rot").onclick=()=>to("rotate");addEventListener("keydown",i=>{(i.key==="r"||i.key==="R")&&!i.repeat&&!/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)&&$.drag!=="rotate"&&($._held=!0,to("rotate"))});addEventListener("keyup",i=>{(i.key==="r"||i.key==="R")&&$._held&&($._held=!1,to("move"))});to($.drag==="rotate"?"rotate":"move");var _f=St("prog").firstElementChild,kl=St("pn-sub");_f.style.width="45%";Fa($.ver);tf();df();Zl("overview",!0);vx();Yl();requestAnimationFrame(ff);kl.textContent="Loading ground textures\u2026";_f.style.width="70%";new ra().load("ground.webp",i=>{i.colorSpace=Ue,i.anisotropy=Bd;let t=Fe.capabilities.maxTextureSize;i.minFilter=$i,X.ground.map=i,X.ground.color.set(16777215),X.ground.needsUpdate=!0,Ba(),kl.textContent="To scale from the plan \xB7 feet",St("prog").hidden=!0,window.__ready=!0,Oi()},void 0,()=>{kl.textContent="Ground textures did not load; showing flat colours.",St("prog").hidden=!0,window.__ready=!0});window.__cam=(i,t)=>{Tn=null,Pe.position.set(J(i[0]),i[2],tt(i[1])),pe.target.set(J(t[0]),t[2],tt(t[1])),Pe.fov=55,Pe.updateProjectionMatrix(),pe.update(),Oi()};window.__goView=Zl;window.__P=$;window.__update=()=>{An(),tf()};
