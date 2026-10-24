var xl="160",je={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},un={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Af=0,ch=1,Rf=2;var Yu=1,yl=2,si=3,Ai=0,ke=1,Se=2;var Si=0,Bs=1,lh=2,hh=3,uh=4,Cf=5,Ji=100,Pf=101,Lf=102,dh=103,fh=104,If=200,Df=201,Uf=202,Nf=203,Rc=204,Cc=205,Of=206,Ff=207,Bf=208,Hf=209,zf=210,kf=211,Gf=212,Vf=213,Wf=214,Xf=0,Yf=1,qf=2,Io=3,Zf=4,$f=5,Jf=6,Kf=7,qu=0,jf=1,Qf=2,wi=0,tp=1,ep=2,np=3,vl=4,ip=5,sp=6;var Zu=300,ks=301,Gs=302,Pc=303,Lc=304,fa=306,Ri=1e3,Dn=1001,Ic=1002,hn=1003,ph=1004;var qa=1005;var Sn=1006,rp=1007;var es=1008;var Ti=1009,op=1010,ap=1011,Ml=1012,$u=1013,Ei=1014,bi=1015,Er=1016,Ju=1017,Ku=1018,ji=1020,cp=1021,Un=1023,lp=1024,hp=1025,Qi=1026,Vs=1027,up=1028,ju=1029,dp=1030,Qu=1031,td=1033,Za=33776,$a=33777,Ja=33778,Ka=33779,mh=35840,gh=35841,_h=35842,xh=35843,ed=36196,yh=37492,vh=37496,Mh=37808,Eh=37809,bh=37810,Sh=37811,wh=37812,Th=37813,Ah=37814,Rh=37815,Ch=37816,Ph=37817,Lh=37818,Ih=37819,Dh=37820,Uh=37821,ja=36492,Nh=36494,Oh=36495,fp=36283,Fh=36284,Bh=36285,Hh=36286;var Do=2300,Uo=2301,Qa=2302,zh=2400,kh=2401,Gh=2402;var nd=3e3,ts=3001,pp=3200,mp=3201,id=0,gp=1,wn="",Oe="srgb",oi="srgb-linear",El="display-p3",pa="display-p3-linear",No="linear",Ae="srgb",Oo="rec709",Fo="p3";var gs=7680;var Vh=519,_p=512,xp=513,yp=514,sd=515,vp=516,Mp=517,Ep=518,bp=519,Wh=35044,rd=35048;var Xh="300 es",Dc=1035,ri=2e3,Bo=2001,qn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yh=1234567,gr=Math.PI/180,br=180/Math.PI;function as(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function ze(i,t,e){return Math.max(t,Math.min(e,i))}function bl(i,t){return(i%t+t)%t}function Sp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function wp(i,t,e){return i!==t?(e-i)/(t-i):0}function _r(i,t,e){return(1-e)*i+e*t}function Tp(i,t,e,n){return _r(i,t,1-Math.exp(-e*n))}function Ap(i,t=1){return t-Math.abs(bl(i,t*2)-t)}function Rp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Cp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Pp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Lp(i,t){return i+Math.random()*(t-i)}function Ip(i){return i*(.5-Math.random())}function Dp(i){i!==void 0&&(Yh=i);let t=Yh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Up(i){return i*gr}function Np(i){return i*br}function Uc(i){return(i&i-1)===0&&i!==0}function Op(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ho(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Fp(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ds(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function cn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var od={DEG2RAD:gr,RAD2DEG:br,generateUUID:as,clamp:ze,euclideanModulo:bl,mapLinear:Sp,inverseLerp:wp,lerp:_r,damp:Tp,pingpong:Ap,smoothstep:Rp,smootherstep:Cp,randInt:Pp,randFloat:Lp,randFloatSpread:Ip,seededRandom:Dp,degToRad:Up,radToDeg:Np,isPowerOfTwo:Uc,ceilPowerOfTwo:Op,floorPowerOfTwo:Ho,setQuaternionFromProperEuler:Fp,normalize:cn,denormalize:Ds},ht=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ne=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],y=s[1],x=s[4],M=s[7],b=s[2],T=s[5],S=s[8];return r[0]=o*_+a*y+c*b,r[3]=o*m+a*x+c*T,r[6]=o*p+a*M+c*S,r[1]=l*_+h*y+u*b,r[4]=l*m+h*x+u*T,r[7]=l*p+h*M+u*S,r[2]=f*_+d*y+g*b,r[5]=f*m+d*x+g*T,r[8]=f*p+d*M+g*S,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(tc.makeScale(t,e)),this}rotate(t){return this.premultiply(tc.makeRotation(-t)),this}translate(t,e){return this.premultiply(tc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},tc=new ne;function ad(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Sr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bp(){let i=Sr("canvas");return i.style.display="block",i}var qh={};function xr(i){i in qh||(qh[i]=!0,console.warn(i))}var Zh=new ne().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$h=new ne().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),io={[oi]:{transfer:No,primaries:Oo,toReference:i=>i,fromReference:i=>i},[Oe]:{transfer:Ae,primaries:Oo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[pa]:{transfer:No,primaries:Fo,toReference:i=>i.applyMatrix3($h),fromReference:i=>i.applyMatrix3(Zh)},[El]:{transfer:Ae,primaries:Fo,toReference:i=>i.convertSRGBToLinear().applyMatrix3($h),fromReference:i=>i.applyMatrix3(Zh).convertLinearToSRGB()}},Hp=new Set([oi,pa]),ye={enabled:!0,_workingColorSpace:oi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Hp.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=io[t].toReference,s=io[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return io[i].primaries},getTransfer:function(i){return i===wn?No:io[i].transfer}};function Hs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ec(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var _s,zo=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{_s===void 0&&(_s=Sr("canvas")),_s.width=t.width,_s.height=t.height;let n=_s.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=_s}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Sr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Hs(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Hs(e[n]/255)*255):e[n]=Hs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},zp=0,ko=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=as(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(nc(s[o].image)):r.push(nc(s[o]))}else r=nc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function nc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?zo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var kp=0,vn=class i extends qn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Dn,s=Dn,r=Sn,o=es,a=Un,c=Ti,l=i.DEFAULT_ANISOTROPY,h=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=as(),this.name="",this.source=new ko(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(xr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ts?Oe:wn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ri:t.x=t.x-Math.floor(t.x);break;case Dn:t.x=t.x<0?0:1;break;case Ic:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ri:t.y=t.y-Math.floor(t.y);break;case Dn:t.y=t.y<0?0:1;break;case Ic:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return xr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Oe?ts:nd}set encoding(t){xr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ts?Oe:wn}};vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Zu;vn.DEFAULT_ANISOTROPY=1;var Pe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(l+1)/2,M=(d+1)/2,b=(p+1)/2,T=(h+f)/4,S=(u+_)/4,L=(g+m)/4;return x>M&&x>b?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=S/n):M>b?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=L/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=S/r,s=L/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(f-h)/y,this.w=Math.acos((l+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Nc=class extends qn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(xr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ts?Oe:wn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new vn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ko(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ai=class extends Nc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Go=class extends vn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Oc=class extends vn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==f||l!==d||h!==g){let m=1-a,p=c*f+l*d+h*g+u*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let b=Math.sqrt(x),T=Math.atan2(b,p*y);m=Math.sin(m*T)/b,a=Math.sin(a*T)/b}let M=a*y;if(c=c*m+f*M,l=l*m+d*M,h=h*m+g*M,u=u*m+_*M,m===1-a){let b=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=b,l*=b,h*=b,u*=b}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*d-l*f,t[e+1]=c*g+h*f+l*u-a*d,t[e+2]=l*g+h*d+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ic.copy(this).projectOnVector(t),this.sub(ic)}reflect(t){return this.sub(ic.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ic=new C,Jh=new mn,ci=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Cn):Cn.fromBufferAttribute(r,o),Cn.applyMatrix4(t.matrixWorld),this.expandByPoint(Cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),so.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),so.copy(n.boundingBox)),so.applyMatrix4(t.matrixWorld),this.union(so)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Cn),Cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(lr),ro.subVectors(this.max,lr),xs.subVectors(t.a,lr),ys.subVectors(t.b,lr),vs.subVectors(t.c,lr),_i.subVectors(ys,xs),xi.subVectors(vs,ys),Xi.subVectors(xs,vs);let e=[0,-_i.z,_i.y,0,-xi.z,xi.y,0,-Xi.z,Xi.y,_i.z,0,-_i.x,xi.z,0,-xi.x,Xi.z,0,-Xi.x,-_i.y,_i.x,0,-xi.y,xi.x,0,-Xi.y,Xi.x,0];return!sc(e,xs,ys,vs,ro)||(e=[1,0,0,0,1,0,0,0,1],!sc(e,xs,ys,vs,ro))?!1:(oo.crossVectors(_i,xi),e=[oo.x,oo.y,oo.z],sc(e,xs,ys,vs,ro))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Qn=[new C,new C,new C,new C,new C,new C,new C,new C],Cn=new C,so=new ci,xs=new C,ys=new C,vs=new C,_i=new C,xi=new C,Xi=new C,lr=new C,ro=new C,oo=new C,Yi=new C;function sc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Yi.fromArray(i,r);let a=s.x*Math.abs(Yi.x)+s.y*Math.abs(Yi.y)+s.z*Math.abs(Yi.z),c=t.dot(Yi),l=e.dot(Yi),h=n.dot(Yi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Gp=new ci,hr=new C,rc=new C,Ci=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Gp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hr.subVectors(t,this.center);let e=hr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(hr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hr.copy(t.center).add(rc)),this.expandByPoint(hr.copy(t.center).sub(rc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ti=new C,oc=new C,ao=new C,yi=new C,ac=new C,co=new C,cc=new C,ns=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ti.copy(this.origin).addScaledVector(this.direction,e),ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){oc.copy(t).add(e).multiplyScalar(.5),ao.copy(e).sub(t).normalize(),yi.copy(this.origin).sub(oc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ao),a=yi.dot(this.direction),c=-yi.dot(ao),l=yi.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(oc).addScaledVector(ao,f),d}intersectSphere(t,e){ti.subVectors(t.center,this.origin);let n=ti.dot(this.direction),s=ti.dot(ti)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ti)!==null}intersectTriangle(t,e,n,s,r){ac.subVectors(e,t),co.subVectors(n,t),cc.crossVectors(ac,co);let o=this.direction.dot(cc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yi.subVectors(this.origin,t);let c=a*this.direction.dot(co.crossVectors(yi,co));if(c<0)return null;let l=a*this.direction.dot(ac.cross(yi));if(l<0||c+l>o)return null;let h=-a*yi.dot(cc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ge=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,f,d,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,f,d,g,_,m)}set(t,e,n,s,r,o,a,c,l,h,u,f,d,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ms.setFromMatrixColumn(t,0).length(),r=1/Ms.setFromMatrixColumn(t,1).length(),o=1/Ms.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,g=l*h,_=l*u;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,g=l*h,_=l*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-d,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){let f=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vp,t,Wp)}lookAt(t,e,n){let s=this.elements;return xn.subVectors(t,e),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),vi.crossVectors(n,xn),vi.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),vi.crossVectors(n,xn)),vi.normalize(),lo.crossVectors(xn,vi),s[0]=vi.x,s[4]=lo.x,s[8]=xn.x,s[1]=vi.y,s[5]=lo.y,s[9]=xn.y,s[2]=vi.z,s[6]=lo.z,s[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],x=n[7],M=n[11],b=n[15],T=s[0],S=s[4],L=s[8],v=s[12],E=s[1],U=s[5],F=s[9],q=s[13],P=s[2],D=s[6],O=s[10],H=s[14],X=s[3],k=s[7],Y=s[11],nt=s[15];return r[0]=o*T+a*E+c*P+l*X,r[4]=o*S+a*U+c*D+l*k,r[8]=o*L+a*F+c*O+l*Y,r[12]=o*v+a*q+c*H+l*nt,r[1]=h*T+u*E+f*P+d*X,r[5]=h*S+u*U+f*D+d*k,r[9]=h*L+u*F+f*O+d*Y,r[13]=h*v+u*q+f*H+d*nt,r[2]=g*T+_*E+m*P+p*X,r[6]=g*S+_*U+m*D+p*k,r[10]=g*L+_*F+m*O+p*Y,r[14]=g*v+_*q+m*H+p*nt,r[3]=y*T+x*E+M*P+b*X,r[7]=y*S+x*U+M*D+b*k,r[11]=y*L+x*F+M*O+b*Y,r[15]=y*v+x*q+M*H+b*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*d-n*c*d)+_*(+e*c*d-e*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+m*(+e*l*u-e*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*f+s*o*u-n*o*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],y=u*m*l-_*f*l+_*c*d-a*m*d-u*c*p+a*f*p,x=g*f*l-h*m*l-g*c*d+o*m*d+h*c*p-o*f*p,M=h*_*l-g*u*l+g*a*d-o*_*d-h*a*p+o*u*p,b=g*u*c-h*_*c-g*a*f+o*_*f+h*a*m-o*u*m,T=e*y+n*x+s*M+r*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/T;return t[0]=y*S,t[1]=(_*f*r-u*m*r-_*s*d+n*m*d+u*s*p-n*f*p)*S,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*S,t[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*d-n*c*d)*S,t[4]=x*S,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*S,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*S,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*d+e*c*d)*S,t[8]=M*S,t[9]=(g*u*r-h*_*r-g*n*d+e*_*d+h*n*p-e*u*p)*S,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*S,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*d-e*a*d)*S,t[12]=b*S,t[13]=(h*_*s-g*u*s+g*n*f-e*_*f-h*n*m+e*u*m)*S,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*S,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*f+e*a*f)*S,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,g=r*u,_=o*h,m=o*u,p=a*u,y=c*l,x=c*h,M=c*u,b=n.x,T=n.y,S=n.z;return s[0]=(1-(_+p))*b,s[1]=(d+M)*b,s[2]=(g-x)*b,s[3]=0,s[4]=(d-M)*T,s[5]=(1-(f+p))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(g+x)*S,s[9]=(m-y)*S,s[10]=(1-(f+_))*S,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ms.set(s[0],s[1],s[2]).length(),o=Ms.set(s[4],s[5],s[6]).length(),a=Ms.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Pn.copy(this);let l=1/r,h=1/o,u=1/a;return Pn.elements[0]*=l,Pn.elements[1]*=l,Pn.elements[2]*=l,Pn.elements[4]*=h,Pn.elements[5]*=h,Pn.elements[6]*=h,Pn.elements[8]*=u,Pn.elements[9]*=u,Pn.elements[10]*=u,e.setFromRotationMatrix(Pn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=ri){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),d,g;if(a===ri)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Bo)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ri){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*l,d=(n+s)*h,g,_;if(a===ri)g=(o+r)*u,_=-2*u;else if(a===Bo)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ms=new C,Pn=new ge,Vp=new C(0,0,0),Wp=new C(1,1,1),vi=new C,lo=new C,xn=new C,Kh=new ge,jh=new mn,Vo=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jh.setFromEuler(this),this.setFromQuaternion(jh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vo.DEFAULT_ORDER="XYZ";var wr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Xp=0,Qh=new C,Es=new mn,ei=new ge,ho=new C,ur=new C,Yp=new C,qp=new mn,tu=new C(1,0,0),eu=new C(0,1,0),nu=new C(0,0,1),Zp={type:"added"},$p={type:"removed"},$e=class i extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new C,e=new Vo,n=new mn,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ge},normalMatrix:{value:new ne}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Es.setFromAxisAngle(t,e),this.quaternion.multiply(Es),this}rotateOnWorldAxis(t,e){return Es.setFromAxisAngle(t,e),this.quaternion.premultiply(Es),this}rotateX(t){return this.rotateOnAxis(tu,t)}rotateY(t){return this.rotateOnAxis(eu,t)}rotateZ(t){return this.rotateOnAxis(nu,t)}translateOnAxis(t,e){return Qh.copy(t).applyQuaternion(this.quaternion),this.position.add(Qh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(tu,t)}translateY(t){return this.translateOnAxis(eu,t)}translateZ(t){return this.translateOnAxis(nu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ho.copy(t):ho.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(ur,ho,this.up):ei.lookAt(ho,ur,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),Es.setFromRotationMatrix(ei),this.quaternion.premultiply(Es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Zp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($p)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,t,Yp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,qp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};$e.DEFAULT_UP=new C(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ln=new C,ni=new C,lc=new C,ii=new C,bs=new C,Ss=new C,iu=new C,hc=new C,uc=new C,dc=new C,uo=!1,Us=class i{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ln.subVectors(t,e),s.cross(Ln);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ln.subVectors(s,e),ni.subVectors(n,e),lc.subVectors(t,e);let o=Ln.dot(Ln),a=Ln.dot(ni),c=Ln.dot(lc),l=ni.dot(ni),h=ni.dot(lc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getUV(t,e,n,s,r,o,a,c){return uo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),uo=!0),this.getInterpolation(t,e,n,s,r,o,a,c)}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,ii)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ii.x),c.addScaledVector(o,ii.y),c.addScaledVector(a,ii.z),c)}static isFrontFacing(t,e,n,s){return Ln.subVectors(n,e),ni.subVectors(t,e),Ln.cross(ni).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Ln.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return uo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),uo=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;bs.subVectors(s,n),Ss.subVectors(r,n),hc.subVectors(t,n);let c=bs.dot(hc),l=Ss.dot(hc);if(c<=0&&l<=0)return e.copy(n);uc.subVectors(t,s);let h=bs.dot(uc),u=Ss.dot(uc);if(h>=0&&u<=h)return e.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(bs,o);dc.subVectors(t,r);let d=bs.dot(dc),g=Ss.dot(dc);if(g>=0&&d<=g)return e.copy(r);let _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Ss,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return iu.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(iu,a);let p=1/(m+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(bs,o).addScaledVector(Ss,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},cd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},fo={h:0,s:0,l:0};function fc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ye.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ye.workingColorSpace){return this.r=t,this.g=e,this.b=n,ye.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ye.workingColorSpace){if(t=bl(t,1),e=ze(e,0,1),n=ze(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=fc(o,r,t+1/3),this.g=fc(o,r,t),this.b=fc(o,r,t-1/3)}return ye.toWorkingColorSpace(this,s),this}setStyle(t,e=Oe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){let n=cd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hs(t.r),this.g=Hs(t.g),this.b=Hs(t.b),this}copyLinearToSRGB(t){return this.r=ec(t.r),this.g=ec(t.g),this.b=ec(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return ye.fromWorkingColorSpace(en.copy(this),t),Math.round(ze(en.r*255,0,255))*65536+Math.round(ze(en.g*255,0,255))*256+Math.round(ze(en.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ye.workingColorSpace){ye.fromWorkingColorSpace(en.copy(this),e);let n=en.r,s=en.g,r=en.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ye.workingColorSpace){return ye.fromWorkingColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=Oe){ye.fromWorkingColorSpace(en.copy(this),t);let e=en.r,n=en.g,s=en.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Mi),this.setHSL(Mi.h+t,Mi.s+e,Mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Mi),t.getHSL(fo);let n=_r(Mi.h,fo.h,e),s=_r(Mi.s,fo.s,e),r=_r(Mi.l,fo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new zt;zt.NAMES=cd;var Jp=0,Pi=class extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=as(),this.name="",this.type="Material",this.blending=Bs,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rc,this.blendDst=Cc,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(n.blending=this.blending),this.side!==Ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Rc&&(n.blendSrc=this.blendSrc),this.blendDst!==Cc&&(n.blendDst=this.blendDst),this.blendEquation!==Ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Io&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},li=class extends Pi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Be=new C,po=new ht,ve=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)po.fromBufferAttribute(this,e),po.applyMatrix3(t),this.setXY(e,po.x,po.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ds(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=cn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ds(e,this.array)),e}setX(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ds(e,this.array)),e}setY(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ds(e,this.array)),e}setZ(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ds(e,this.array)),e}setW(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array),r=cn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wh&&(t.usage=this.usage),t}};var Wo=class extends ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Xo=class extends ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Nt=class extends ve{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Kp=0,bn=new ge,pc=new $e,ws=new C,yn=new ci,dr=new ci,Ze=new C,de=class i extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ad(t)?Xo:Wo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ne().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return bn.makeRotationFromQuaternion(t),this.applyMatrix4(bn),this}rotateX(t){return bn.makeRotationX(t),this.applyMatrix4(bn),this}rotateY(t){return bn.makeRotationY(t),this.applyMatrix4(bn),this}rotateZ(t){return bn.makeRotationZ(t),this.applyMatrix4(bn),this}translate(t,e,n){return bn.makeTranslation(t,e,n),this.applyMatrix4(bn),this}scale(t,e,n){return bn.makeScale(t,e,n),this.applyMatrix4(bn),this}lookAt(t){return pc.lookAt(t),pc.updateMatrix(),this.applyMatrix4(pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Nt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(yn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];dr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ze.addVectors(yn.min,dr.min),yn.expandByPoint(Ze),Ze.addVectors(yn.max,dr.max),yn.expandByPoint(Ze)):(yn.expandByPoint(dr.min),yn.expandByPoint(dr.max))}yn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ze));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ze.fromBufferAttribute(a,l),c&&(ws.fromBufferAttribute(t,l),Ze.add(ws)),s=Math.max(s,n.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ve(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let E=0;E<a;E++)l[E]=new C,h[E]=new C;let u=new C,f=new C,d=new C,g=new ht,_=new ht,m=new ht,p=new C,y=new C;function x(E,U,F){u.fromArray(s,E*3),f.fromArray(s,U*3),d.fromArray(s,F*3),g.fromArray(o,E*2),_.fromArray(o,U*2),m.fromArray(o,F*2),f.sub(u),d.sub(u),_.sub(g),m.sub(g);let q=1/(_.x*m.y-m.x*_.y);isFinite(q)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-_.y).multiplyScalar(q),y.copy(d).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(q),l[E].add(p),l[U].add(p),l[F].add(p),h[E].add(y),h[U].add(y),h[F].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let E=0,U=M.length;E<U;++E){let F=M[E],q=F.start,P=F.count;for(let D=q,O=q+P;D<O;D+=3)x(n[D+0],n[D+1],n[D+2])}let b=new C,T=new C,S=new C,L=new C;function v(E){S.fromArray(r,E*3),L.copy(S);let U=l[E];b.copy(U),b.sub(S.multiplyScalar(S.dot(U))).normalize(),T.crossVectors(L,U);let q=T.dot(h[E])<0?-1:1;c[E*4]=b.x,c[E*4+1]=b.y,c[E*4+2]=b.z,c[E*4+3]=q}for(let E=0,U=M.length;E<U;++E){let F=M[E],q=F.start,P=F.count;for(let D=q,O=q+P;D<O;D+=3)v(n[D+0]),v(n[D+1]),v(n[D+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new C,r=new C,o=new C,a=new C,c=new C,l=new C,h=new C,u=new C;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new ve(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},su=new ge,qi=new ns,mo=new Ci,ru=new C,Ts=new C,As=new C,Rs=new C,mc=new C,go=new C,_o=new ht,xo=new ht,yo=new ht,ou=new C,au=new C,cu=new C,vo=new C,Mo=new C,j=class extends $e{constructor(t=new de,e=new li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){go.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(mc.fromBufferAttribute(u,t),o?go.addScaledVector(mc,h):go.addScaledVector(mc.sub(e),h))}e.add(go)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(r),qi.copy(t.ray).recast(t.near),!(mo.containsPoint(qi.origin)===!1&&(qi.intersectSphere(mo,ru)===null||qi.origin.distanceToSquared(ru)>(t.far-t.near)**2))&&(su.copy(r).invert(),qi.copy(t.ray).applyMatrix4(su),!(n.boundingBox!==null&&qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,qi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=y,b=x;M<b;M+=3){let T=a.getX(M),S=a.getX(M+1),L=a.getX(M+2);s=Eo(this,p,t,n,l,h,u,T,S,L),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let y=a.getX(m),x=a.getX(m+1),M=a.getX(m+2);s=Eo(this,o,t,n,l,h,u,y,x,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let M=y,b=x;M<b;M+=3){let T=M,S=M+1,L=M+2;s=Eo(this,p,t,n,l,h,u,T,S,L),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let y=m,x=m+1,M=m+2;s=Eo(this,o,t,n,l,h,u,y,x,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function jp(i,t,e,n,s,r,o,a){let c;if(t.side===ke?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Ai,a),c===null)return null;Mo.copy(a),Mo.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Mo);return l<e.near||l>e.far?null:{distance:l,point:Mo.clone(),object:i}}function Eo(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Ts),i.getVertexPosition(c,As),i.getVertexPosition(l,Rs);let h=jp(i,t,e,n,Ts,As,Rs,vo);if(h){s&&(_o.fromBufferAttribute(s,a),xo.fromBufferAttribute(s,c),yo.fromBufferAttribute(s,l),h.uv=Us.getInterpolation(vo,Ts,As,Rs,_o,xo,yo,new ht)),r&&(_o.fromBufferAttribute(r,a),xo.fromBufferAttribute(r,c),yo.fromBufferAttribute(r,l),h.uv1=Us.getInterpolation(vo,Ts,As,Rs,_o,xo,yo,new ht),h.uv2=h.uv1),o&&(ou.fromBufferAttribute(o,a),au.fromBufferAttribute(o,c),cu.fromBufferAttribute(o,l),h.normal=Us.getInterpolation(vo,Ts,As,Rs,ou,au,cu,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new C,materialIndex:0};Us.getNormal(Ts,As,Rs,u.normal),h.face=u}return h}var we=class i extends de{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Nt(l,3)),this.setAttribute("normal",new Nt(h,3)),this.setAttribute("uv",new Nt(u,2));function g(_,m,p,y,x,M,b,T,S,L,v){let E=M/S,U=b/L,F=M/2,q=b/2,P=T/2,D=S+1,O=L+1,H=0,X=0,k=new C;for(let Y=0;Y<O;Y++){let nt=Y*U-q;for(let ot=0;ot<D;ot++){let V=ot*E-F;k[_]=V*y,k[m]=nt*x,k[p]=P,l.push(k.x,k.y,k.z),k[_]=0,k[m]=0,k[p]=T>0?1:-1,h.push(k.x,k.y,k.z),u.push(ot/S),u.push(1-Y/L),H+=1}}for(let Y=0;Y<L;Y++)for(let nt=0;nt<S;nt++){let ot=f+nt+D*Y,V=f+nt+D*(Y+1),et=f+(nt+1)+D*(Y+1),st=f+(nt+1)+D*Y;c.push(ot,V,st),c.push(V,et,st),X+=6}a.addGroup(d,X,v),d+=X,f+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ws(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ln(i){let t={};for(let e=0;e<i.length;e++){let n=Ws(i[e]);for(let s in n)t[s]=n[s]}return t}function Qp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ld(i){return i.getRenderTarget()===null?i.outputColorSpace:ye.workingColorSpace}var tm={clone:Ws,merge:ln},em=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,On=class extends Pi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=em,this.fragmentShader=nm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ws(t.uniforms),this.uniformsGroups=Qp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Yo=class extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=ri}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},nn=class extends Yo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=br*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(gr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return br*2*Math.atan(Math.tan(gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(gr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Cs=-90,Ps=1,Fc=class extends $e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new nn(Cs,Ps,t,e);s.layers=this.layers,this.add(s);let r=new nn(Cs,Ps,t,e);r.layers=this.layers,this.add(r);let o=new nn(Cs,Ps,t,e);o.layers=this.layers,this.add(o);let a=new nn(Cs,Ps,t,e);a.layers=this.layers,this.add(a);let c=new nn(Cs,Ps,t,e);c.layers=this.layers,this.add(c);let l=new nn(Cs,Ps,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===ri)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Bo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},qo=class extends vn{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ks,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Bc=class extends ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(xr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ts?Oe:wn),this.texture=new qo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new we(5,5,5),r=new On({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:Si});r.uniforms.tEquirect.value=e;let o=new j(s,r),a=e.minFilter;return e.minFilter===es&&(e.minFilter=Sn),new Fc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},gc=new C,im=new C,sm=new ne,In=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=gc.subVectors(n,e).cross(im.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(gc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||sm.getNormalMatrix(t),s=this.coplanarPoint(gc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Zi=new Ci,bo=new C,Tr=class{constructor(t=new In,e=new In,n=new In,s=new In,r=new In,o=new In){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ri){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],y=s[13],x=s[14],M=s[15];if(n[0].setComponents(c-r,f-l,m-d,M-p).normalize(),n[1].setComponents(c+r,f+l,m+d,M+p).normalize(),n[2].setComponents(c+o,f+h,m+g,M+y).normalize(),n[3].setComponents(c-o,f-h,m-g,M-y).normalize(),n[4].setComponents(c-a,f-u,m-_,M-x).normalize(),e===ri)n[5].setComponents(c+a,f+u,m+_,M+x).normalize();else if(e===Bo)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(t){return Zi.center.set(0,0,0),Zi.radius=.7071067811865476,Zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(bo.x=s.normal.x>0?t.max.x:t.min.x,bo.y=s.normal.y>0?t.max.y:t.min.y,bo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(bo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function hd(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function rm(i,t){let e=t.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,f=l.usage,d=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,f),l.onUploadCallback();let _;if(u instanceof Float32Array)_=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=i.SHORT;else if(u instanceof Uint32Array)_=i.UNSIGNED_INT;else if(u instanceof Int32Array)_=i.INT;else if(u instanceof Int8Array)_=i.BYTE;else if(u instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:d}}function r(l,h,u){let f=h.array,d=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,l),d.count===-1&&g.length===0&&i.bufferSubData(u,0,f),g.length!==0){for(let _=0,m=g.length;_<m;_++){let p=g[_];e?i.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):i.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(e?i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var Ke=class i extends de{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let y=p*f-o;for(let x=0;x<l;x++){let M=x*u-r;g.push(M,-y,0),_.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){let x=y+l*p,M=y+l*(p+1),b=y+1+l*(p+1),T=y+1+l*p;d.push(x,M,T),d.push(M,b,T)}this.setIndex(d),this.setAttribute("position",new Nt(g,3)),this.setAttribute("normal",new Nt(_,3)),this.setAttribute("uv",new Nt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},om=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,am=`#ifdef USE_ALPHAHASH
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
#endif`,cm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,um=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dm=`#ifdef USE_AOMAP
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
#endif`,fm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pm=`#ifdef USE_BATCHING
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
#endif`,mm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,gm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_m=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ym=`#ifdef USE_IRIDESCENCE
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
#endif`,vm=`#ifdef USE_BUMPMAP
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
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Am=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Rm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Cm=`#define PI 3.141592653589793
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
} // validated`,Pm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lm=`vec3 transformedNormal = objectNormal;
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
#endif`,Im=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Um=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Om="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fm=`
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
}`,Bm=`#ifdef USE_ENVMAP
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
#endif`,Hm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zm=`#ifdef USE_ENVMAP
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
#endif`,km=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Vm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ym=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qm=`#ifdef USE_GRADIENTMAP
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
}`,Zm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,$m=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jm=`uniform bool receiveShadow;
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
#endif`,Qm=`#ifdef USE_ENVMAP
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
#endif`,t0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,e0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,n0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,i0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s0=`PhysicalMaterial material;
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
#endif`,r0=`struct PhysicalMaterial {
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
}`,o0=`
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
#endif`,a0=`#if defined( RE_IndirectDiffuse )
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
#endif`,c0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,l0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,d0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,f0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,p0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,m0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,g0=`#if defined( USE_POINTS_UV )
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
#endif`,_0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,v0=`#ifdef USE_MORPHNORMALS
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
#endif`,M0=`#ifdef USE_MORPHTARGETS
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
#endif`,E0=`#ifdef USE_MORPHTARGETS
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
#endif`,b0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,S0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,w0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,R0=`#ifdef USE_NORMALMAP
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
#endif`,C0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,P0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,L0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,I0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,D0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,N0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,O0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,F0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,H0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,z0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,W0=`float getShadowMask() {
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
}`,X0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Y0=`#ifdef USE_SKINNING
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
#endif`,q0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Z0=`#ifdef USE_SKINNING
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
#endif`,$0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,K0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,j0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Q0=`#ifdef USE_TRANSMISSION
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
#endif`,tg=`#ifdef USE_TRANSMISSION
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
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,rg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,og=`uniform sampler2D t2D;
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
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ug=`#include <common>
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
}`,dg=`#if DEPTH_PACKING == 3200
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
}`,fg=`#define DISTANCE
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
}`,pg=`#define DISTANCE
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
}`,mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_g=`uniform float scale;
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
}`,xg=`uniform vec3 diffuse;
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
}`,yg=`#include <common>
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
}`,vg=`uniform vec3 diffuse;
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
}`,Mg=`#define LAMBERT
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
}`,Eg=`#define LAMBERT
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
}`,bg=`#define MATCAP
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
}`,Sg=`#define MATCAP
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
}`,wg=`#define NORMAL
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
}`,Tg=`#define NORMAL
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
}`,Ag=`#define PHONG
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
}`,Rg=`#define PHONG
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
}`,Cg=`#define STANDARD
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
}`,Pg=`#define STANDARD
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
}`,Lg=`#define TOON
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
}`,Ig=`#define TOON
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
}`,Dg=`uniform float size;
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
}`,Ug=`uniform vec3 diffuse;
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
}`,Ng=`#include <common>
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
}`,Og=`uniform vec3 color;
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
}`,Fg=`uniform float rotation;
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
}`,Bg=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:om,alphahash_pars_fragment:am,alphamap_fragment:cm,alphamap_pars_fragment:lm,alphatest_fragment:hm,alphatest_pars_fragment:um,aomap_fragment:dm,aomap_pars_fragment:fm,batching_pars_vertex:pm,batching_vertex:mm,begin_vertex:gm,beginnormal_vertex:_m,bsdfs:xm,iridescence_fragment:ym,bumpmap_pars_fragment:vm,clipping_planes_fragment:Mm,clipping_planes_pars_fragment:Em,clipping_planes_pars_vertex:bm,clipping_planes_vertex:Sm,color_fragment:wm,color_pars_fragment:Tm,color_pars_vertex:Am,color_vertex:Rm,common:Cm,cube_uv_reflection_fragment:Pm,defaultnormal_vertex:Lm,displacementmap_pars_vertex:Im,displacementmap_vertex:Dm,emissivemap_fragment:Um,emissivemap_pars_fragment:Nm,colorspace_fragment:Om,colorspace_pars_fragment:Fm,envmap_fragment:Bm,envmap_common_pars_fragment:Hm,envmap_pars_fragment:zm,envmap_pars_vertex:km,envmap_physical_pars_fragment:Qm,envmap_vertex:Gm,fog_vertex:Vm,fog_pars_vertex:Wm,fog_fragment:Xm,fog_pars_fragment:Ym,gradientmap_pars_fragment:qm,lightmap_fragment:Zm,lightmap_pars_fragment:$m,lights_lambert_fragment:Jm,lights_lambert_pars_fragment:Km,lights_pars_begin:jm,lights_toon_fragment:t0,lights_toon_pars_fragment:e0,lights_phong_fragment:n0,lights_phong_pars_fragment:i0,lights_physical_fragment:s0,lights_physical_pars_fragment:r0,lights_fragment_begin:o0,lights_fragment_maps:a0,lights_fragment_end:c0,logdepthbuf_fragment:l0,logdepthbuf_pars_fragment:h0,logdepthbuf_pars_vertex:u0,logdepthbuf_vertex:d0,map_fragment:f0,map_pars_fragment:p0,map_particle_fragment:m0,map_particle_pars_fragment:g0,metalnessmap_fragment:_0,metalnessmap_pars_fragment:x0,morphcolor_vertex:y0,morphnormal_vertex:v0,morphtarget_pars_vertex:M0,morphtarget_vertex:E0,normal_fragment_begin:b0,normal_fragment_maps:S0,normal_pars_fragment:w0,normal_pars_vertex:T0,normal_vertex:A0,normalmap_pars_fragment:R0,clearcoat_normal_fragment_begin:C0,clearcoat_normal_fragment_maps:P0,clearcoat_pars_fragment:L0,iridescence_pars_fragment:I0,opaque_fragment:D0,packing:U0,premultiplied_alpha_fragment:N0,project_vertex:O0,dithering_fragment:F0,dithering_pars_fragment:B0,roughnessmap_fragment:H0,roughnessmap_pars_fragment:z0,shadowmap_pars_fragment:k0,shadowmap_pars_vertex:G0,shadowmap_vertex:V0,shadowmask_pars_fragment:W0,skinbase_vertex:X0,skinning_pars_vertex:Y0,skinning_vertex:q0,skinnormal_vertex:Z0,specularmap_fragment:$0,specularmap_pars_fragment:J0,tonemapping_fragment:K0,tonemapping_pars_fragment:j0,transmission_fragment:Q0,transmission_pars_fragment:tg,uv_pars_fragment:eg,uv_pars_vertex:ng,uv_vertex:ig,worldpos_vertex:sg,background_vert:rg,background_frag:og,backgroundCube_vert:ag,backgroundCube_frag:cg,cube_vert:lg,cube_frag:hg,depth_vert:ug,depth_frag:dg,distanceRGBA_vert:fg,distanceRGBA_frag:pg,equirect_vert:mg,equirect_frag:gg,linedashed_vert:_g,linedashed_frag:xg,meshbasic_vert:yg,meshbasic_frag:vg,meshlambert_vert:Mg,meshlambert_frag:Eg,meshmatcap_vert:bg,meshmatcap_frag:Sg,meshnormal_vert:wg,meshnormal_frag:Tg,meshphong_vert:Ag,meshphong_frag:Rg,meshphysical_vert:Cg,meshphysical_frag:Pg,meshtoon_vert:Lg,meshtoon_frag:Ig,points_vert:Dg,points_frag:Ug,shadow_vert:Ng,shadow_frag:Og,sprite_vert:Fg,sprite_frag:Bg},xt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},Yn={basic:{uniforms:ln([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:ln([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:ln([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:ln([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:ln([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:ln([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:ln([xt.points,xt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:ln([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:ln([xt.common,xt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:ln([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:ln([xt.sprite,xt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:ln([xt.common,xt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:ln([xt.lights,xt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Yn.physical={uniforms:ln([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var So={r:0,b:0,g:0};function Hg(i,t,e,n,s,r,o){let a=new zt(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(m,p){let y=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?_(a,c):x&&x.isColor&&(_(x,1),y=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===fa)?(h===void 0&&(h=new j(new we(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:Ws(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,T,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=ye.getTransfer(x.colorSpace)!==Ae,(u!==x||f!==x.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new j(new Ke(2,2),new On({name:"BackgroundMaterial",uniforms:Ws(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=ye.getTransfer(x.colorSpace)!==Ae,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,d=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,p){m.getRGB(So,ld(i)),n.buffers.color.setClear(So.r,So.g,So.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(a,c)},render:g}}function zg(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null),l=c,h=!1;function u(P,D,O,H,X){let k=!1;if(o){let Y=_(H,O,D);l!==Y&&(l=Y,d(l.object)),k=p(P,H,O,X),k&&y(P,H,O,X)}else{let Y=D.wireframe===!0;(l.geometry!==H.id||l.program!==O.id||l.wireframe!==Y)&&(l.geometry=H.id,l.program=O.id,l.wireframe=Y,k=!0)}X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(k||h)&&(h=!1,L(P,D,O,H),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function d(P){return n.isWebGL2?i.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?i.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function _(P,D,O){let H=O.wireframe===!0,X=a[P.id];X===void 0&&(X={},a[P.id]=X);let k=X[D.id];k===void 0&&(k={},X[D.id]=k);let Y=k[H];return Y===void 0&&(Y=m(f()),k[H]=Y),Y}function m(P){let D=[],O=[],H=[];for(let X=0;X<s;X++)D[X]=0,O[X]=0,H[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:H,object:P,attributes:{},index:null}}function p(P,D,O,H){let X=l.attributes,k=D.attributes,Y=0,nt=O.getAttributes();for(let ot in nt)if(nt[ot].location>=0){let et=X[ot],st=k[ot];if(st===void 0&&(ot==="instanceMatrix"&&P.instanceMatrix&&(st=P.instanceMatrix),ot==="instanceColor"&&P.instanceColor&&(st=P.instanceColor)),et===void 0||et.attribute!==st||st&&et.data!==st.data)return!0;Y++}return l.attributesNum!==Y||l.index!==H}function y(P,D,O,H){let X={},k=D.attributes,Y=0,nt=O.getAttributes();for(let ot in nt)if(nt[ot].location>=0){let et=k[ot];et===void 0&&(ot==="instanceMatrix"&&P.instanceMatrix&&(et=P.instanceMatrix),ot==="instanceColor"&&P.instanceColor&&(et=P.instanceColor));let st={};st.attribute=et,et&&et.data&&(st.data=et.data),X[ot]=st,Y++}l.attributes=X,l.attributesNum=Y,l.index=H}function x(){let P=l.newAttributes;for(let D=0,O=P.length;D<O;D++)P[D]=0}function M(P){b(P,0)}function b(P,D){let O=l.newAttributes,H=l.enabledAttributes,X=l.attributeDivisors;O[P]=1,H[P]===0&&(i.enableVertexAttribArray(P),H[P]=1),X[P]!==D&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,D),X[P]=D)}function T(){let P=l.newAttributes,D=l.enabledAttributes;for(let O=0,H=D.length;O<H;O++)D[O]!==P[O]&&(i.disableVertexAttribArray(O),D[O]=0)}function S(P,D,O,H,X,k,Y){Y===!0?i.vertexAttribIPointer(P,D,O,X,k):i.vertexAttribPointer(P,D,O,H,X,k)}function L(P,D,O,H){if(n.isWebGL2===!1&&(P.isInstancedMesh||H.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let X=H.attributes,k=O.getAttributes(),Y=D.defaultAttributeValues;for(let nt in k){let ot=k[nt];if(ot.location>=0){let V=X[nt];if(V===void 0&&(nt==="instanceMatrix"&&P.instanceMatrix&&(V=P.instanceMatrix),nt==="instanceColor"&&P.instanceColor&&(V=P.instanceColor)),V!==void 0){let et=V.normalized,st=V.itemSize,Mt=e.get(V);if(Mt===void 0)continue;let vt=Mt.buffer,Ct=Mt.type,It=Mt.bytesPerElement,At=n.isWebGL2===!0&&(Ct===i.INT||Ct===i.UNSIGNED_INT||V.gpuType===$u);if(V.isInterleavedBufferAttribute){let ft=V.data,B=ft.stride,Rt=V.offset;if(ft.isInstancedInterleavedBuffer){for(let Et=0;Et<ot.locationSize;Et++)b(ot.location+Et,ft.meshPerAttribute);P.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Et=0;Et<ot.locationSize;Et++)M(ot.location+Et);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let Et=0;Et<ot.locationSize;Et++)S(ot.location+Et,st/ot.locationSize,Ct,et,B*It,(Rt+st/ot.locationSize*Et)*It,At)}else{if(V.isInstancedBufferAttribute){for(let ft=0;ft<ot.locationSize;ft++)b(ot.location+ft,V.meshPerAttribute);P.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ft=0;ft<ot.locationSize;ft++)M(ot.location+ft);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let ft=0;ft<ot.locationSize;ft++)S(ot.location+ft,st/ot.locationSize,Ct,et,st*It,st/ot.locationSize*ft*It,At)}}else if(Y!==void 0){let et=Y[nt];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(ot.location,et);break;case 3:i.vertexAttrib3fv(ot.location,et);break;case 4:i.vertexAttrib4fv(ot.location,et);break;default:i.vertexAttrib1fv(ot.location,et)}}}}T()}function v(){F();for(let P in a){let D=a[P];for(let O in D){let H=D[O];for(let X in H)g(H[X].object),delete H[X];delete D[O]}delete a[P]}}function E(P){if(a[P.id]===void 0)return;let D=a[P.id];for(let O in D){let H=D[O];for(let X in H)g(H[X].object),delete H[X];delete D[O]}delete a[P.id]}function U(P){for(let D in a){let O=a[D];if(O[P.id]===void 0)continue;let H=O[P.id];for(let X in H)g(H[X].object),delete H[X];delete O[P.id]}}function F(){q(),h=!0,l!==c&&(l=c,d(l.object))}function q(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:F,resetDefaultState:q,dispose:v,releaseStatesOfGeometry:E,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:M,disableUnusedAttributes:T}}function kg(i,t,e,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function c(h,u,f){if(f===0)return;let d,g;if(s)d=i,g="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,h,u,f),e.update(u,r,f)}function l(h,u,f){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Gg(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let S=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,M=o||t.has("OES_texture_float"),b=x&&M,T=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:b,maxSamples:T}}function Vg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new In,a=new ne,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let y=r?0:n,x=y*4,M=p.clippingState||null;c.value=M,M=h(g,f,x,d);for(let b=0;b!==x;++b)M[b]=e[b];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let p=d+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,M=d;x!==_;++x,M+=4)o.copy(u[x]).applyMatrix4(y,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Wg(i){let t=new WeakMap;function e(o,a){return a===Pc?o.mapping=ks:a===Lc&&(o.mapping=Gs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Pc||a===Lc)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Bc(c.height/2);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Zo=class extends Yo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ns=4,lu=[.125,.215,.35,.446,.526,.582],Ki=20,_c=new Zo,hu=new zt,xc=null,yc=0,vc=0,$i=(1+Math.sqrt(5))/2,Ls=1/$i,uu=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,$i,Ls),new C(0,$i,-Ls),new C(Ls,0,$i),new C(-Ls,0,$i),new C($i,Ls,0),new C(-$i,Ls,0)],Xs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){xc=this._renderer.getRenderTarget(),yc=this._renderer.getActiveCubeFace(),vc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xc,yc,vc),t.scissorTest=!1,wo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ks||t.mapping===Gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xc=this._renderer.getRenderTarget(),yc=this._renderer.getActiveCubeFace(),vc=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Er,format:Un,colorSpace:oi,depthBuffer:!1},s=du(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=du(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xg(r)),this._blurMaterial=Yg(r,t,e)}return s}_compileMaterial(t){let e=new j(this._lodPlanes[0],t);this._renderer.compile(e,_c)}_sceneToCubeUV(t,e,n,s){let a=new nn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(hu),h.toneMapping=wi,h.autoClear=!1;let d=new li({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),g=new j(new we,d),_=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(hu),_=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let x=this._cubeSize;wo(s,y*x,p>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ks||t.mapping===Gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=pu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new j(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;wo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,_c)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=uu[(s-1)%uu.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new j(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ki-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ki;m>Ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ki}`);let p=[],y=0;for(let S=0;S<Ki;++S){let L=S/_,v=Math.exp(-L*L/2);p.push(v),S===0?y+=v:S<m&&(y+=2*v)}for(let S=0;S<p.length;S++)p[S]=p[S]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;let M=this._sizeLods[s],b=3*M*(s>x-Ns?s-x+Ns:0),T=4*(this._cubeSize-M);wo(e,b,T,3*M,2*M),c.setRenderTarget(e),c.render(u,_c)}};function Xg(i){let t=[],e=[],n=[],s=i,r=i-Ns+1+lu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ns?c=lu[o-i+Ns-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*d),x=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let T=0;T<d;T++){let S=T%3*2/3-1,L=T>2?0:-1,v=[S,L,0,S+2/3,L,0,S+2/3,L+1,0,S,L,0,S+2/3,L+1,0,S,L+1,0];y.set(v,_*g*T),x.set(f,m*g*T);let E=[T,T,T,T,T,T];M.set(E,p*g*T)}let b=new de;b.setAttribute("position",new ve(y,_)),b.setAttribute("uv",new ve(x,m)),b.setAttribute("faceIndex",new ve(M,p)),t.push(b),s>Ns&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function du(i,t,e){let n=new ai(i,t,e);return n.texture.mapping=fa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Yg(i,t,e){let n=new Float32Array(Ki),s=new C(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Sl(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function fu(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sl(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function pu(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Sl(){return`

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
	`}function qg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Pc||c===Lc,h=c===ks||c===Gs;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Xs(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Xs(i));let f=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Zg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function $g(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(u){let f=[],d=u.index,g=u.attributes.position,_=0;if(d!==null){let y=d.array;_=d.version;for(let x=0,M=y.length;x<M;x+=3){let b=y[x+0],T=y[x+1],S=y[x+2];f.push(b,T,T,S,S,b)}}else if(g!==void 0){let y=g.array;_=g.version;for(let x=0,M=y.length/3-1;x<M;x+=3){let b=x+0,T=x+1,S=x+2;f.push(b,T,T,S,S,b)}}else return;let m=new(ad(f)?Xo:Wo)(f,1);m.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Jg(i,t,e,n){let s=n.isWebGL2,r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function h(d,g){i.drawElements(r,g,a,d*c),e.update(g,r,1)}function u(d,g,_){if(_===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,d*c,_),e.update(g,r,_)}function f(d,g,_){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(d[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,d,0,_);let p=0;for(let y=0;y<_;y++)p+=g[y];e.update(p,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function Kg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function jg(i,t){return i[0]-t[0]}function Qg(i,t){return Math.abs(t[1])-Math.abs(i[1])}function t1(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,o=new Pe,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let f=l.morphTargetInfluences;if(t.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=d!==void 0?d.length:0,_=r.get(h);if(_===void 0||_.count!==g){let P=function(){F.dispose(),r.delete(h),h.removeEventListener("dispose",P)};_!==void 0&&_.texture.dispose();let y=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],S=h.morphAttributes.color||[],L=0;y===!0&&(L=1),x===!0&&(L=2),M===!0&&(L=3);let v=h.attributes.position.count*L,E=1;v>t.maxTextureSize&&(E=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let U=new Float32Array(v*E*4*g),F=new Go(U,v,E,g);F.type=bi,F.needsUpdate=!0;let q=L*4;for(let D=0;D<g;D++){let O=b[D],H=T[D],X=S[D],k=v*E*4*D;for(let Y=0;Y<O.count;Y++){let nt=Y*q;y===!0&&(o.fromBufferAttribute(O,Y),U[k+nt+0]=o.x,U[k+nt+1]=o.y,U[k+nt+2]=o.z,U[k+nt+3]=0),x===!0&&(o.fromBufferAttribute(H,Y),U[k+nt+4]=o.x,U[k+nt+5]=o.y,U[k+nt+6]=o.z,U[k+nt+7]=0),M===!0&&(o.fromBufferAttribute(X,Y),U[k+nt+8]=o.x,U[k+nt+9]=o.y,U[k+nt+10]=o.z,U[k+nt+11]=X.itemSize===4?o.w:1)}}_={count:g,texture:F,size:new ht(v,E)},r.set(h,_),h.addEventListener("dispose",P)}let m=0;for(let y=0;y<f.length;y++)m+=f[y];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",p),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",_.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{let d=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==d){g=[];for(let x=0;x<d;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<d;x++){let M=g[x];M[0]=x,M[1]=f[x]}g.sort(Qg);for(let x=0;x<8;x++)x<d&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(jg);let _=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let M=a[x],b=M[0],T=M[1];b!==Number.MAX_SAFE_INTEGER&&T?(_&&h.getAttribute("morphTarget"+x)!==_[b]&&h.setAttribute("morphTarget"+x,_[b]),m&&h.getAttribute("morphNormal"+x)!==m[b]&&h.setAttribute("morphNormal"+x,m[b]),s[x]=T,p+=T):(_&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let y=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function e1(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var $o=class extends vn{constructor(t,e,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:Qi,h!==Qi&&h!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Qi&&(n=Ei),n===void 0&&h===Vs&&(n=ji),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:hn,this.minFilter=c!==void 0?c:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ud=new vn,dd=new $o(1,1);dd.compareFunction=sd;var fd=new Go,pd=new Oc,md=new qo,mu=[],gu=[],_u=new Float32Array(16),xu=new Float32Array(9),yu=new Float32Array(4);function Ks(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=mu[s];if(r===void 0&&(r=new Float32Array(s),mu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ma(i,t){let e=gu[t];e===void 0&&(e=new Int32Array(t),gu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function n1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function i1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2fv(this.addr,t),Ve(e,t)}}function s1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ge(e,t))return;i.uniform3fv(this.addr,t),Ve(e,t)}}function r1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4fv(this.addr,t),Ve(e,t)}}function o1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(Ge(e,n))return;yu.set(n),i.uniformMatrix2fv(this.addr,!1,yu),Ve(e,n)}}function a1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(Ge(e,n))return;xu.set(n),i.uniformMatrix3fv(this.addr,!1,xu),Ve(e,n)}}function c1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(Ge(e,n))return;_u.set(n),i.uniformMatrix4fv(this.addr,!1,_u),Ve(e,n)}}function l1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function h1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2iv(this.addr,t),Ve(e,t)}}function u1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;i.uniform3iv(this.addr,t),Ve(e,t)}}function d1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4iv(this.addr,t),Ve(e,t)}}function f1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function p1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2uiv(this.addr,t),Ve(e,t)}}function m1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;i.uniform3uiv(this.addr,t),Ve(e,t)}}function g1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4uiv(this.addr,t),Ve(e,t)}}function _1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?dd:ud;e.setTexture2D(t||r,s)}function x1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||pd,s)}function y1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||md,s)}function v1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||fd,s)}function M1(i){switch(i){case 5126:return n1;case 35664:return i1;case 35665:return s1;case 35666:return r1;case 35674:return o1;case 35675:return a1;case 35676:return c1;case 5124:case 35670:return l1;case 35667:case 35671:return h1;case 35668:case 35672:return u1;case 35669:case 35673:return d1;case 5125:return f1;case 36294:return p1;case 36295:return m1;case 36296:return g1;case 35678:case 36198:case 36298:case 36306:case 35682:return _1;case 35679:case 36299:case 36307:return x1;case 35680:case 36300:case 36308:case 36293:return y1;case 36289:case 36303:case 36311:case 36292:return v1}}function E1(i,t){i.uniform1fv(this.addr,t)}function b1(i,t){let e=Ks(t,this.size,2);i.uniform2fv(this.addr,e)}function S1(i,t){let e=Ks(t,this.size,3);i.uniform3fv(this.addr,e)}function w1(i,t){let e=Ks(t,this.size,4);i.uniform4fv(this.addr,e)}function T1(i,t){let e=Ks(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function A1(i,t){let e=Ks(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function R1(i,t){let e=Ks(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function C1(i,t){i.uniform1iv(this.addr,t)}function P1(i,t){i.uniform2iv(this.addr,t)}function L1(i,t){i.uniform3iv(this.addr,t)}function I1(i,t){i.uniform4iv(this.addr,t)}function D1(i,t){i.uniform1uiv(this.addr,t)}function U1(i,t){i.uniform2uiv(this.addr,t)}function N1(i,t){i.uniform3uiv(this.addr,t)}function O1(i,t){i.uniform4uiv(this.addr,t)}function F1(i,t,e){let n=this.cache,s=t.length,r=ma(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||ud,r[o])}function B1(i,t,e){let n=this.cache,s=t.length,r=ma(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||pd,r[o])}function H1(i,t,e){let n=this.cache,s=t.length,r=ma(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||md,r[o])}function z1(i,t,e){let n=this.cache,s=t.length,r=ma(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||fd,r[o])}function k1(i){switch(i){case 5126:return E1;case 35664:return b1;case 35665:return S1;case 35666:return w1;case 35674:return T1;case 35675:return A1;case 35676:return R1;case 5124:case 35670:return C1;case 35667:case 35671:return P1;case 35668:case 35672:return L1;case 35669:case 35673:return I1;case 5125:return D1;case 36294:return U1;case 36295:return N1;case 36296:return O1;case 35678:case 36198:case 36298:case 36306:case 35682:return F1;case 35679:case 36299:case 36307:return B1;case 35680:case 36300:case 36308:case 36293:return H1;case 36289:case 36303:case 36311:case 36292:return z1}}var Hc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=M1(e.type)}},zc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=k1(e.type)}},kc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Mc=/(\w+)(\])?(\[|\.)?/g;function vu(i,t){i.seq.push(t),i.map[t.id]=t}function G1(i,t,e){let n=i.name,s=n.length;for(Mc.lastIndex=0;;){let r=Mc.exec(n),o=Mc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){vu(e,l===void 0?new Hc(a,i,t):new zc(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new kc(a),vu(e,u)),e=u}}}var zs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);G1(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Mu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var V1=37297,W1=0;function X1(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Y1(i){let t=ye.getPrimaries(ye.workingColorSpace),e=ye.getPrimaries(i),n;switch(t===e?n="":t===Fo&&e===Oo?n="LinearDisplayP3ToLinearSRGB":t===Oo&&e===Fo&&(n="LinearSRGBToLinearDisplayP3"),i){case oi:case pa:return[n,"LinearTransferOETF"];case Oe:case El:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Eu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+X1(i.getShaderSource(t),o)}else return s}function q1(i,t){let e=Y1(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Z1(i,t){let e;switch(t){case tp:e="Linear";break;case ep:e="Reinhard";break;case np:e="OptimizedCineon";break;case vl:e="ACESFilmic";break;case sp:e="AgX";break;case ip:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function $1(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Os).join(`
`)}function J1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Os).join(`
`)}function K1(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function j1(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Os(i){return i!==""}function bu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Su(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Q1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gc(i){return i.replace(Q1,e_)}var t_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function e_(i,t){let e=Jt[t];if(e===void 0){let n=t_.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Gc(e)}var n_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wu(i){return i.replace(n_,i_)}function i_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Tu(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function s_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Yu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===yl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===si&&(t="SHADOWMAP_TYPE_VSM"),t}function r_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ks:case Gs:t="ENVMAP_TYPE_CUBE";break;case fa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function o_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Gs:t="ENVMAP_MODE_REFRACTION";break}return t}function a_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case qu:t="ENVMAP_BLENDING_MULTIPLY";break;case jf:t="ENVMAP_BLENDING_MIX";break;case Qf:t="ENVMAP_BLENDING_ADD";break}return t}function c_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function l_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=s_(e),l=r_(e),h=o_(e),u=a_(e),f=c_(e),d=e.isWebGL2?"":$1(e),g=J1(e),_=K1(r),m=s.createProgram(),p,y,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Os).join(`
`),p.length>0&&(p+=`
`),y=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Os).join(`
`),y.length>0&&(y+=`
`)):(p=[Tu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),y=[d,Tu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wi?"#define TONE_MAPPING":"",e.toneMapping!==wi?Jt.tonemapping_pars_fragment:"",e.toneMapping!==wi?Z1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,q1("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Os).join(`
`)),o=Gc(o),o=bu(o,e),o=Su(o,e),a=Gc(a),a=bu(a,e),a=Su(a,e),o=wu(o),a=wu(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let M=x+p+o,b=x+y+a,T=Mu(s,s.VERTEX_SHADER,M),S=Mu(s,s.FRAGMENT_SHADER,b);s.attachShader(m,T),s.attachShader(m,S),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function L(F){if(i.debug.checkShaderErrors){let q=s.getProgramInfoLog(m).trim(),P=s.getShaderInfoLog(T).trim(),D=s.getShaderInfoLog(S).trim(),O=!0,H=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,T,S);else{let X=Eu(s,T,"vertex"),k=Eu(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+X+`
`+k)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(P===""||D==="")&&(H=!1);H&&(F.diagnostics={runnable:O,programLog:q,vertexShader:{log:P,prefix:p},fragmentShader:{log:D,prefix:y}})}s.deleteShader(T),s.deleteShader(S),v=new zs(s,m),E=j1(s,m)}let v;this.getUniforms=function(){return v===void 0&&L(this),v};let E;this.getAttributes=function(){return E===void 0&&L(this),E};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(m,V1)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=W1++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=S,this}var h_=0,Vc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Wc(t),e.set(t,n)),n}},Wc=class{constructor(t){this.id=h_++,this.code=t,this.usedTimes=0}};function u_(i,t,e,n,s,r,o){let a=new wr,c=new Vc,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===0?"uv":`uv${v}`}function m(v,E,U,F,q){let P=F.fog,D=q.geometry,O=v.isMeshStandardMaterial?F.environment:null,H=(v.isMeshStandardMaterial?e:t).get(v.envMap||O),X=H&&H.mapping===fa?H.image.height:null,k=g[v.type];v.precision!==null&&(d=s.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let Y=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,nt=Y!==void 0?Y.length:0,ot=0;D.morphAttributes.position!==void 0&&(ot=1),D.morphAttributes.normal!==void 0&&(ot=2),D.morphAttributes.color!==void 0&&(ot=3);let V,et,st,Mt;if(k){let on=Yn[k];V=on.vertexShader,et=on.fragmentShader}else V=v.vertexShader,et=v.fragmentShader,c.update(v),st=c.getVertexShaderID(v),Mt=c.getFragmentShaderID(v);let vt=i.getRenderTarget(),Ct=q.isInstancedMesh===!0,It=q.isBatchedMesh===!0,At=!!v.map,ft=!!v.matcap,B=!!H,Rt=!!v.aoMap,Et=!!v.lightMap,Ht=!!v.bumpMap,wt=!!v.normalMap,se=!!v.displacementMap,Dt=!!v.emissiveMap,R=!!v.metalnessMap,w=!!v.roughnessMap,W=v.anisotropy>0,lt=v.clearcoat>0,it=v.iridescence>0,at=v.sheen>0,Pt=v.transmission>0,yt=W&&!!v.anisotropyMap,Tt=lt&&!!v.clearcoatMap,Gt=lt&&!!v.clearcoatNormalMap,qt=lt&&!!v.clearcoatRoughnessMap,ct=it&&!!v.iridescenceMap,ae=it&&!!v.iridescenceThicknessMap,I=at&&!!v.sheenColorMap,rt=at&&!!v.sheenRoughnessMap,_t=!!v.specularMap,dt=!!v.specularColorMap,Ut=!!v.specularIntensityMap,te=Pt&&!!v.transmissionMap,ce=Pt&&!!v.thicknessMap,Kt=!!v.gradientMap,gt=!!v.alphaMap,N=v.alphaTest>0,pt=!!v.alphaHash,mt=!!v.extensions,kt=!!D.attributes.uv1,Ot=!!D.attributes.uv2,ue=!!D.attributes.uv3,pe=wi;return v.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(pe=i.toneMapping),{isWebGL2:h,shaderID:k,shaderType:v.type,shaderName:v.name,vertexShader:V,fragmentShader:et,defines:v.defines,customVertexShaderID:st,customFragmentShaderID:Mt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:It,instancing:Ct,instancingColor:Ct&&q.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:vt===null?i.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:oi,map:At,matcap:ft,envMap:B,envMapMode:B&&H.mapping,envMapCubeUVHeight:X,aoMap:Rt,lightMap:Et,bumpMap:Ht,normalMap:wt,displacementMap:f&&se,emissiveMap:Dt,normalMapObjectSpace:wt&&v.normalMapType===gp,normalMapTangentSpace:wt&&v.normalMapType===id,metalnessMap:R,roughnessMap:w,anisotropy:W,anisotropyMap:yt,clearcoat:lt,clearcoatMap:Tt,clearcoatNormalMap:Gt,clearcoatRoughnessMap:qt,iridescence:it,iridescenceMap:ct,iridescenceThicknessMap:ae,sheen:at,sheenColorMap:I,sheenRoughnessMap:rt,specularMap:_t,specularColorMap:dt,specularIntensityMap:Ut,transmission:Pt,transmissionMap:te,thicknessMap:ce,gradientMap:Kt,opaque:v.transparent===!1&&v.blending===Bs,alphaMap:gt,alphaTest:N,alphaHash:pt,combine:v.combine,mapUv:At&&_(v.map.channel),aoMapUv:Rt&&_(v.aoMap.channel),lightMapUv:Et&&_(v.lightMap.channel),bumpMapUv:Ht&&_(v.bumpMap.channel),normalMapUv:wt&&_(v.normalMap.channel),displacementMapUv:se&&_(v.displacementMap.channel),emissiveMapUv:Dt&&_(v.emissiveMap.channel),metalnessMapUv:R&&_(v.metalnessMap.channel),roughnessMapUv:w&&_(v.roughnessMap.channel),anisotropyMapUv:yt&&_(v.anisotropyMap.channel),clearcoatMapUv:Tt&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qt&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:I&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:rt&&_(v.sheenRoughnessMap.channel),specularMapUv:_t&&_(v.specularMap.channel),specularColorMapUv:dt&&_(v.specularColorMap.channel),specularIntensityMapUv:Ut&&_(v.specularIntensityMap.channel),transmissionMapUv:te&&_(v.transmissionMap.channel),thicknessMapUv:ce&&_(v.thicknessMap.channel),alphaMapUv:gt&&_(v.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(wt||W),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:kt,vertexUv2s:Ot,vertexUv3s:ue,pointsUvs:q.isPoints===!0&&!!D.attributes.uv&&(At||gt),fog:!!P,useFog:v.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:q.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:ot,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,useLegacyLights:i._useLegacyLights,decodeVideoTexture:At&&v.map.isVideoTexture===!0&&ye.getTransfer(v.map.colorSpace)===Ae,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Se,flipSided:v.side===ke,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:mt&&v.extensions.derivatives===!0,extensionFragDepth:mt&&v.extensions.fragDepth===!0,extensionDrawBuffers:mt&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:mt&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:mt&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){let E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(let U in v.defines)E.push(U),E.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(y(E,v),x(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function y(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function x(v,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),v.push(a.mask)}function M(v){let E=g[v.type],U;if(E){let F=Yn[E];U=tm.clone(F.uniforms)}else U=v.uniforms;return U}function b(v,E){let U;for(let F=0,q=l.length;F<q;F++){let P=l[F];if(P.cacheKey===E){U=P,++U.usedTimes;break}}return U===void 0&&(U=new l_(i,E,v,r),l.push(U)),U}function T(v){if(--v.usedTimes===0){let E=l.indexOf(v);l[E]=l[l.length-1],l.pop(),v.destroy()}}function S(v){c.remove(v)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:b,releaseProgram:T,releaseShaderCache:S,programs:l,dispose:L}}function d_(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function f_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Au(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ru(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,f,d,g,_,m){let p=o(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(u,f,d,g,_,m){let p=o(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||f_),n.length>1&&n.sort(f||Au),s.length>1&&s.sort(f||Au)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function p_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Ru,i.set(n,[o])):s>=r.length?(o=new Ru,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function m_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new zt};break;case"SpotLight":e={position:new C,direction:new C,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function g_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var __=0;function x_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function y_(i,t){let e=new m_,n=g_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new C);let r=new C,o=new ge,a=new ge;function c(h,u){let f=0,d=0,g=0;for(let F=0;F<9;F++)s.probe[F].set(0,0,0);let _=0,m=0,p=0,y=0,x=0,M=0,b=0,T=0,S=0,L=0,v=0;h.sort(x_);let E=u===!0?Math.PI:1;for(let F=0,q=h.length;F<q;F++){let P=h[F],D=P.color,O=P.intensity,H=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=D.r*O*E,d+=D.g*O*E,g+=D.b*O*E;else if(P.isLightProbe){for(let k=0;k<9;k++)s.probe[k].addScaledVector(P.sh.coefficients[k],O);v++}else if(P.isDirectionalLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity*E),P.castShadow){let Y=P.shadow,nt=n.get(P);nt.shadowBias=Y.bias,nt.shadowNormalBias=Y.normalBias,nt.shadowRadius=Y.radius,nt.shadowMapSize=Y.mapSize,s.directionalShadow[_]=nt,s.directionalShadowMap[_]=X,s.directionalShadowMatrix[_]=P.shadow.matrix,M++}s.directional[_]=k,_++}else if(P.isSpotLight){let k=e.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(D).multiplyScalar(O*E),k.distance=H,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,s.spot[p]=k;let Y=P.shadow;if(P.map&&(s.spotLightMap[S]=P.map,S++,Y.updateMatrices(P),P.castShadow&&L++),s.spotLightMatrix[p]=Y.matrix,P.castShadow){let nt=n.get(P);nt.shadowBias=Y.bias,nt.shadowNormalBias=Y.normalBias,nt.shadowRadius=Y.radius,nt.shadowMapSize=Y.mapSize,s.spotShadow[p]=nt,s.spotShadowMap[p]=X,T++}p++}else if(P.isRectAreaLight){let k=e.get(P);k.color.copy(D).multiplyScalar(O),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),s.rectArea[y]=k,y++}else if(P.isPointLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity*E),k.distance=P.distance,k.decay=P.decay,P.castShadow){let Y=P.shadow,nt=n.get(P);nt.shadowBias=Y.bias,nt.shadowNormalBias=Y.normalBias,nt.shadowRadius=Y.radius,nt.shadowMapSize=Y.mapSize,nt.shadowCameraNear=Y.camera.near,nt.shadowCameraFar=Y.camera.far,s.pointShadow[m]=nt,s.pointShadowMap[m]=X,s.pointShadowMatrix[m]=P.shadow.matrix,b++}s.point[m]=k,m++}else if(P.isHemisphereLight){let k=e.get(P);k.skyColor.copy(P.color).multiplyScalar(O*E),k.groundColor.copy(P.groundColor).multiplyScalar(O*E),s.hemi[x]=k,x++}}y>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=xt.LTC_FLOAT_1,s.rectAreaLTC2=xt.LTC_FLOAT_2):(s.rectAreaLTC1=xt.LTC_HALF_1,s.rectAreaLTC2=xt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=xt.LTC_FLOAT_1,s.rectAreaLTC2=xt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=xt.LTC_HALF_1,s.rectAreaLTC2=xt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=d,s.ambient[2]=g;let U=s.hash;(U.directionalLength!==_||U.pointLength!==m||U.spotLength!==p||U.rectAreaLength!==y||U.hemiLength!==x||U.numDirectionalShadows!==M||U.numPointShadows!==b||U.numSpotShadows!==T||U.numSpotMaps!==S||U.numLightProbes!==v)&&(s.directional.length=_,s.spot.length=p,s.rectArea.length=y,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=b,s.pointShadowMap.length=b,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=b,s.spotLightMatrix.length=T+S-L,s.spotLightMap.length=S,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=v,U.directionalLength=_,U.pointLength=m,U.spotLength=p,U.rectAreaLength=y,U.hemiLength=x,U.numDirectionalShadows=M,U.numPointShadows=b,U.numSpotShadows=T,U.numSpotMaps=S,U.numLightProbes=v,s.version=__++)}function l(h,u){let f=0,d=0,g=0,_=0,m=0,p=u.matrixWorldInverse;for(let y=0,x=h.length;y<x;y++){let M=h[y];if(M.isDirectionalLight){let b=s.directional[f];b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),f++}else if(M.isSpotLight){let b=s.spot[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let b=s.rectArea[_];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),a.identity(),o.copy(M.matrixWorld),o.premultiply(p),a.extractRotation(o),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){let b=s.point[d];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){let b=s.hemi[m];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:s}}function Cu(i,t){let e=new y_(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function v_(i,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),c;return a===void 0?(c=new Cu(i,t),e.set(r,[c])):o>=a.length?(c=new Cu(i,t),a.push(c)):c=a[o],c}function s(){e=new WeakMap}return{get:n,dispose:s}}var Xc=class extends Pi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Yc=class extends Pi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},M_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,E_=`uniform sampler2D shadow_pass;
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
}`;function b_(i,t,e){let n=new Tr,s=new ht,r=new ht,o=new Pe,a=new Xc({depthPacking:mp}),c=new Yc,l={},h=e.maxTextureSize,u={[Ai]:ke,[ke]:Ai,[Se]:Se},f=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:M_,fragmentShader:E_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new de;g.setAttribute("position",new ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new j(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yu;let p=this.type;this.render=function(T,S,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let v=i.getRenderTarget(),E=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Si),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let q=p!==si&&this.type===si,P=p===si&&this.type!==si;for(let D=0,O=T.length;D<O;D++){let H=T[D],X=H.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let k=X.getFrameExtents();if(s.multiply(k),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/k.x),s.x=r.x*k.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/k.y),s.y=r.y*k.y,X.mapSize.y=r.y)),X.map===null||q===!0||P===!0){let nt=this.type!==si?{minFilter:hn,magFilter:hn}:{};X.map!==null&&X.map.dispose(),X.map=new ai(s.x,s.y,nt),X.map.texture.name=H.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let Y=X.getViewportCount();for(let nt=0;nt<Y;nt++){let ot=X.getViewport(nt);o.set(r.x*ot.x,r.y*ot.y,r.x*ot.z,r.y*ot.w),F.viewport(o),X.updateMatrices(H,nt),n=X.getFrustum(),M(S,L,X.camera,H,this.type)}X.isPointLightShadow!==!0&&this.type===si&&y(X,L),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(v,E,U)};function y(T,S){let L=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ai(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(S,null,L,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(S,null,L,d,_,null)}function x(T,S,L,v){let E=null,U=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)E=U;else if(E=L.isPointLight===!0?c:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let F=E.uuid,q=S.uuid,P=l[F];P===void 0&&(P={},l[F]=P);let D=P[q];D===void 0&&(D=E.clone(),P[q]=D,S.addEventListener("dispose",b)),E=D}if(E.visible=S.visible,E.wireframe=S.wireframe,v===si?E.side=S.shadowSide!==null?S.shadowSide:S.side:E.side=S.shadowSide!==null?S.shadowSide:u[S.side],E.alphaMap=S.alphaMap,E.alphaTest=S.alphaTest,E.map=S.map,E.clipShadows=S.clipShadows,E.clippingPlanes=S.clippingPlanes,E.clipIntersection=S.clipIntersection,E.displacementMap=S.displacementMap,E.displacementScale=S.displacementScale,E.displacementBias=S.displacementBias,E.wireframeLinewidth=S.wireframeLinewidth,E.linewidth=S.linewidth,L.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let F=i.properties.get(E);F.light=L}return E}function M(T,S,L,v,E){if(T.visible===!1)return;if(T.layers.test(S.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===si)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);let q=t.update(T),P=T.material;if(Array.isArray(P)){let D=q.groups;for(let O=0,H=D.length;O<H;O++){let X=D[O],k=P[X.materialIndex];if(k&&k.visible){let Y=x(T,k,v,E);T.onBeforeShadow(i,T,S,L,q,Y,X),i.renderBufferDirect(L,null,q,Y,T,X),T.onAfterShadow(i,T,S,L,q,Y,X)}}}else if(P.visible){let D=x(T,P,v,E);T.onBeforeShadow(i,T,S,L,q,D,null),i.renderBufferDirect(L,null,q,D,T,null),T.onAfterShadow(i,T,S,L,q,D,null)}}let F=T.children;for(let q=0,P=F.length;q<P;q++)M(F[q],S,L,v,E)}function b(T){T.target.removeEventListener("dispose",b);for(let L in l){let v=l[L],E=T.target.uuid;E in v&&(v[E].dispose(),delete v[E])}}}function S_(i,t,e){let n=e.isWebGL2;function s(){let N=!1,pt=new Pe,mt=null,kt=new Pe(0,0,0,0);return{setMask:function(Ot){mt!==Ot&&!N&&(i.colorMask(Ot,Ot,Ot,Ot),mt=Ot)},setLocked:function(Ot){N=Ot},setClear:function(Ot,ue,pe,Ye,on){on===!0&&(Ot*=Ye,ue*=Ye,pe*=Ye),pt.set(Ot,ue,pe,Ye),kt.equals(pt)===!1&&(i.clearColor(Ot,ue,pe,Ye),kt.copy(pt))},reset:function(){N=!1,mt=null,kt.set(-1,0,0,0)}}}function r(){let N=!1,pt=null,mt=null,kt=null;return{setTest:function(Ot){Ot?It(i.DEPTH_TEST):At(i.DEPTH_TEST)},setMask:function(Ot){pt!==Ot&&!N&&(i.depthMask(Ot),pt=Ot)},setFunc:function(Ot){if(mt!==Ot){switch(Ot){case Xf:i.depthFunc(i.NEVER);break;case Yf:i.depthFunc(i.ALWAYS);break;case qf:i.depthFunc(i.LESS);break;case Io:i.depthFunc(i.LEQUAL);break;case Zf:i.depthFunc(i.EQUAL);break;case $f:i.depthFunc(i.GEQUAL);break;case Jf:i.depthFunc(i.GREATER);break;case Kf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}mt=Ot}},setLocked:function(Ot){N=Ot},setClear:function(Ot){kt!==Ot&&(i.clearDepth(Ot),kt=Ot)},reset:function(){N=!1,pt=null,mt=null,kt=null}}}function o(){let N=!1,pt=null,mt=null,kt=null,Ot=null,ue=null,pe=null,Ye=null,on=null;return{setTest:function(be){N||(be?It(i.STENCIL_TEST):At(i.STENCIL_TEST))},setMask:function(be){pt!==be&&!N&&(i.stencilMask(be),pt=be)},setFunc:function(be,an,Xn){(mt!==be||kt!==an||Ot!==Xn)&&(i.stencilFunc(be,an,Xn),mt=be,kt=an,Ot=Xn)},setOp:function(be,an,Xn){(ue!==be||pe!==an||Ye!==Xn)&&(i.stencilOp(be,an,Xn),ue=be,pe=an,Ye=Xn)},setLocked:function(be){N=be},setClear:function(be){on!==be&&(i.clearStencil(be),on=be)},reset:function(){N=!1,pt=null,mt=null,kt=null,Ot=null,ue=null,pe=null,Ye=null,on=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap,f={},d={},g=new WeakMap,_=[],m=null,p=!1,y=null,x=null,M=null,b=null,T=null,S=null,L=null,v=new zt(0,0,0),E=0,U=!1,F=null,q=null,P=null,D=null,O=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,k=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=k>=1):Y.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=k>=2);let nt=null,ot={},V=i.getParameter(i.SCISSOR_BOX),et=i.getParameter(i.VIEWPORT),st=new Pe().fromArray(V),Mt=new Pe().fromArray(et);function vt(N,pt,mt,kt){let Ot=new Uint8Array(4),ue=i.createTexture();i.bindTexture(N,ue),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let pe=0;pe<mt;pe++)n&&(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)?i.texImage3D(pt,0,i.RGBA,1,1,kt,0,i.RGBA,i.UNSIGNED_BYTE,Ot):i.texImage2D(pt+pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ot);return ue}let Ct={};Ct[i.TEXTURE_2D]=vt(i.TEXTURE_2D,i.TEXTURE_2D,1),Ct[i.TEXTURE_CUBE_MAP]=vt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ct[i.TEXTURE_2D_ARRAY]=vt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ct[i.TEXTURE_3D]=vt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),It(i.DEPTH_TEST),c.setFunc(Io),Dt(!1),R(ch),It(i.CULL_FACE),wt(Si);function It(N){f[N]!==!0&&(i.enable(N),f[N]=!0)}function At(N){f[N]!==!1&&(i.disable(N),f[N]=!1)}function ft(N,pt){return d[N]!==pt?(i.bindFramebuffer(N,pt),d[N]=pt,n&&(N===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=pt),N===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=pt)),!0):!1}function B(N,pt){let mt=_,kt=!1;if(N)if(mt=g.get(pt),mt===void 0&&(mt=[],g.set(pt,mt)),N.isWebGLMultipleRenderTargets){let Ot=N.texture;if(mt.length!==Ot.length||mt[0]!==i.COLOR_ATTACHMENT0){for(let ue=0,pe=Ot.length;ue<pe;ue++)mt[ue]=i.COLOR_ATTACHMENT0+ue;mt.length=Ot.length,kt=!0}}else mt[0]!==i.COLOR_ATTACHMENT0&&(mt[0]=i.COLOR_ATTACHMENT0,kt=!0);else mt[0]!==i.BACK&&(mt[0]=i.BACK,kt=!0);kt&&(e.isWebGL2?i.drawBuffers(mt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(mt))}function Rt(N){return m!==N?(i.useProgram(N),m=N,!0):!1}let Et={[Ji]:i.FUNC_ADD,[Pf]:i.FUNC_SUBTRACT,[Lf]:i.FUNC_REVERSE_SUBTRACT};if(n)Et[dh]=i.MIN,Et[fh]=i.MAX;else{let N=t.get("EXT_blend_minmax");N!==null&&(Et[dh]=N.MIN_EXT,Et[fh]=N.MAX_EXT)}let Ht={[If]:i.ZERO,[Df]:i.ONE,[Uf]:i.SRC_COLOR,[Rc]:i.SRC_ALPHA,[zf]:i.SRC_ALPHA_SATURATE,[Bf]:i.DST_COLOR,[Of]:i.DST_ALPHA,[Nf]:i.ONE_MINUS_SRC_COLOR,[Cc]:i.ONE_MINUS_SRC_ALPHA,[Hf]:i.ONE_MINUS_DST_COLOR,[Ff]:i.ONE_MINUS_DST_ALPHA,[kf]:i.CONSTANT_COLOR,[Gf]:i.ONE_MINUS_CONSTANT_COLOR,[Vf]:i.CONSTANT_ALPHA,[Wf]:i.ONE_MINUS_CONSTANT_ALPHA};function wt(N,pt,mt,kt,Ot,ue,pe,Ye,on,be){if(N===Si){p===!0&&(At(i.BLEND),p=!1);return}if(p===!1&&(It(i.BLEND),p=!0),N!==Cf){if(N!==y||be!==U){if((x!==Ji||T!==Ji)&&(i.blendEquation(i.FUNC_ADD),x=Ji,T=Ji),be)switch(N){case Bs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lh:i.blendFunc(i.ONE,i.ONE);break;case hh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Bs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case hh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,b=null,S=null,L=null,v.set(0,0,0),E=0,y=N,U=be}return}Ot=Ot||pt,ue=ue||mt,pe=pe||kt,(pt!==x||Ot!==T)&&(i.blendEquationSeparate(Et[pt],Et[Ot]),x=pt,T=Ot),(mt!==M||kt!==b||ue!==S||pe!==L)&&(i.blendFuncSeparate(Ht[mt],Ht[kt],Ht[ue],Ht[pe]),M=mt,b=kt,S=ue,L=pe),(Ye.equals(v)===!1||on!==E)&&(i.blendColor(Ye.r,Ye.g,Ye.b,on),v.copy(Ye),E=on),y=N,U=!1}function se(N,pt){N.side===Se?At(i.CULL_FACE):It(i.CULL_FACE);let mt=N.side===ke;pt&&(mt=!mt),Dt(mt),N.blending===Bs&&N.transparent===!1?wt(Si):wt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),c.setFunc(N.depthFunc),c.setTest(N.depthTest),c.setMask(N.depthWrite),a.setMask(N.colorWrite);let kt=N.stencilWrite;l.setTest(kt),kt&&(l.setMask(N.stencilWriteMask),l.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),l.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),W(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?It(i.SAMPLE_ALPHA_TO_COVERAGE):At(i.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(N){F!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),F=N)}function R(N){N!==Af?(It(i.CULL_FACE),N!==q&&(N===ch?i.cullFace(i.BACK):N===Rf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):At(i.CULL_FACE),q=N}function w(N){N!==P&&(X&&i.lineWidth(N),P=N)}function W(N,pt,mt){N?(It(i.POLYGON_OFFSET_FILL),(D!==pt||O!==mt)&&(i.polygonOffset(pt,mt),D=pt,O=mt)):At(i.POLYGON_OFFSET_FILL)}function lt(N){N?It(i.SCISSOR_TEST):At(i.SCISSOR_TEST)}function it(N){N===void 0&&(N=i.TEXTURE0+H-1),nt!==N&&(i.activeTexture(N),nt=N)}function at(N,pt,mt){mt===void 0&&(nt===null?mt=i.TEXTURE0+H-1:mt=nt);let kt=ot[mt];kt===void 0&&(kt={type:void 0,texture:void 0},ot[mt]=kt),(kt.type!==N||kt.texture!==pt)&&(nt!==mt&&(i.activeTexture(mt),nt=mt),i.bindTexture(N,pt||Ct[N]),kt.type=N,kt.texture=pt)}function Pt(){let N=ot[nt];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function yt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Gt(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function qt(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ae(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function I(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _t(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function dt(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ut(N){st.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),st.copy(N))}function te(N){Mt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Mt.copy(N))}function ce(N,pt){let mt=u.get(pt);mt===void 0&&(mt=new WeakMap,u.set(pt,mt));let kt=mt.get(N);kt===void 0&&(kt=i.getUniformBlockIndex(pt,N.name),mt.set(N,kt))}function Kt(N,pt){let kt=u.get(pt).get(N);h.get(pt)!==kt&&(i.uniformBlockBinding(pt,kt,N.__bindingPointIndex),h.set(pt,kt))}function gt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},nt=null,ot={},d={},g=new WeakMap,_=[],m=null,p=!1,y=null,x=null,M=null,b=null,T=null,S=null,L=null,v=new zt(0,0,0),E=0,U=!1,F=null,q=null,P=null,D=null,O=null,st.set(0,0,i.canvas.width,i.canvas.height),Mt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:It,disable:At,bindFramebuffer:ft,drawBuffers:B,useProgram:Rt,setBlending:wt,setMaterial:se,setFlipSided:Dt,setCullFace:R,setLineWidth:w,setPolygonOffset:W,setScissorTest:lt,activeTexture:it,bindTexture:at,unbindTexture:Pt,compressedTexImage2D:yt,compressedTexImage3D:Tt,texImage2D:_t,texImage3D:dt,updateUBOMapping:ce,uniformBlockBinding:Kt,texStorage2D:I,texStorage3D:rt,texSubImage2D:Gt,texSubImage3D:qt,compressedTexSubImage2D:ct,compressedTexSubImage3D:ae,scissor:Ut,viewport:te,reset:gt}}function w_(i,t,e,n,s,r,o){let a=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,w){return d?new OffscreenCanvas(R,w):Sr("canvas")}function _(R,w,W,lt){let it=1;if((R.width>lt||R.height>lt)&&(it=lt/Math.max(R.width,R.height)),it<1||w===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){let at=w?Ho:Math.floor,Pt=at(it*R.width),yt=at(it*R.height);u===void 0&&(u=g(Pt,yt));let Tt=W?g(Pt,yt):u;return Tt.width=Pt,Tt.height=yt,Tt.getContext("2d").drawImage(R,0,0,Pt,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Pt+"x"+yt+")."),Tt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return Uc(R.width)&&Uc(R.height)}function p(R){return a?!1:R.wrapS!==Dn||R.wrapT!==Dn||R.minFilter!==hn&&R.minFilter!==Sn}function y(R,w){return R.generateMipmaps&&w&&R.minFilter!==hn&&R.minFilter!==Sn}function x(R){i.generateMipmap(R)}function M(R,w,W,lt,it=!1){if(a===!1)return w;if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let at=w;if(w===i.RED&&(W===i.FLOAT&&(at=i.R32F),W===i.HALF_FLOAT&&(at=i.R16F),W===i.UNSIGNED_BYTE&&(at=i.R8)),w===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(at=i.R8UI),W===i.UNSIGNED_SHORT&&(at=i.R16UI),W===i.UNSIGNED_INT&&(at=i.R32UI),W===i.BYTE&&(at=i.R8I),W===i.SHORT&&(at=i.R16I),W===i.INT&&(at=i.R32I)),w===i.RG&&(W===i.FLOAT&&(at=i.RG32F),W===i.HALF_FLOAT&&(at=i.RG16F),W===i.UNSIGNED_BYTE&&(at=i.RG8)),w===i.RGBA){let Pt=it?No:ye.getTransfer(lt);W===i.FLOAT&&(at=i.RGBA32F),W===i.HALF_FLOAT&&(at=i.RGBA16F),W===i.UNSIGNED_BYTE&&(at=Pt===Ae?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(at=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(at=i.RGB5_A1)}return(at===i.R16F||at===i.R32F||at===i.RG16F||at===i.RG32F||at===i.RGBA16F||at===i.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function b(R,w,W){return y(R,W)===!0||R.isFramebufferTexture&&R.minFilter!==hn&&R.minFilter!==Sn?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function T(R){return R===hn||R===ph||R===qa?i.NEAREST:i.LINEAR}function S(R){let w=R.target;w.removeEventListener("dispose",S),v(w),w.isVideoTexture&&h.delete(w)}function L(R){let w=R.target;w.removeEventListener("dispose",L),U(w)}function v(R){let w=n.get(R);if(w.__webglInit===void 0)return;let W=R.source,lt=f.get(W);if(lt){let it=lt[w.__cacheKey];it.usedTimes--,it.usedTimes===0&&E(R),Object.keys(lt).length===0&&f.delete(W)}n.remove(R)}function E(R){let w=n.get(R);i.deleteTexture(w.__webglTexture);let W=R.source,lt=f.get(W);delete lt[w.__cacheKey],o.memory.textures--}function U(R){let w=R.texture,W=n.get(R),lt=n.get(w);if(lt.__webglTexture!==void 0&&(i.deleteTexture(lt.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(W.__webglFramebuffer[it]))for(let at=0;at<W.__webglFramebuffer[it].length;at++)i.deleteFramebuffer(W.__webglFramebuffer[it][at]);else i.deleteFramebuffer(W.__webglFramebuffer[it]);W.__webglDepthbuffer&&i.deleteRenderbuffer(W.__webglDepthbuffer[it])}else{if(Array.isArray(W.__webglFramebuffer))for(let it=0;it<W.__webglFramebuffer.length;it++)i.deleteFramebuffer(W.__webglFramebuffer[it]);else i.deleteFramebuffer(W.__webglFramebuffer);if(W.__webglDepthbuffer&&i.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&i.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let it=0;it<W.__webglColorRenderbuffer.length;it++)W.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(W.__webglColorRenderbuffer[it]);W.__webglDepthRenderbuffer&&i.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let it=0,at=w.length;it<at;it++){let Pt=n.get(w[it]);Pt.__webglTexture&&(i.deleteTexture(Pt.__webglTexture),o.memory.textures--),n.remove(w[it])}n.remove(w),n.remove(R)}let F=0;function q(){F=0}function P(){let R=F;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),F+=1,R}function D(R){let w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function O(R,w){let W=n.get(R);if(R.isVideoTexture&&se(R),R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){let lt=R.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(W,R,w);return}}e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+w)}function H(R,w){let W=n.get(R);if(R.version>0&&W.__version!==R.version){st(W,R,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+w)}function X(R,w){let W=n.get(R);if(R.version>0&&W.__version!==R.version){st(W,R,w);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+w)}function k(R,w){let W=n.get(R);if(R.version>0&&W.__version!==R.version){Mt(W,R,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+w)}let Y={[Ri]:i.REPEAT,[Dn]:i.CLAMP_TO_EDGE,[Ic]:i.MIRRORED_REPEAT},nt={[hn]:i.NEAREST,[ph]:i.NEAREST_MIPMAP_NEAREST,[qa]:i.NEAREST_MIPMAP_LINEAR,[Sn]:i.LINEAR,[rp]:i.LINEAR_MIPMAP_NEAREST,[es]:i.LINEAR_MIPMAP_LINEAR},ot={[_p]:i.NEVER,[bp]:i.ALWAYS,[xp]:i.LESS,[sd]:i.LEQUAL,[yp]:i.EQUAL,[Ep]:i.GEQUAL,[vp]:i.GREATER,[Mp]:i.NOTEQUAL};function V(R,w,W){if(W?(i.texParameteri(R,i.TEXTURE_WRAP_S,Y[w.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Y[w.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Y[w.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,nt[w.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,nt[w.minFilter])):(i.texParameteri(R,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(R,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(w.wrapS!==Dn||w.wrapT!==Dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(R,i.TEXTURE_MAG_FILTER,T(w.magFilter)),i.texParameteri(R,i.TEXTURE_MIN_FILTER,T(w.minFilter)),w.minFilter!==hn&&w.minFilter!==Sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,ot[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let lt=t.get("EXT_texture_filter_anisotropic");if(w.magFilter===hn||w.minFilter!==qa&&w.minFilter!==es||w.type===bi&&t.has("OES_texture_float_linear")===!1||a===!1&&w.type===Er&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(i.texParameterf(R,lt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function et(R,w){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",S));let lt=w.source,it=f.get(lt);it===void 0&&(it={},f.set(lt,it));let at=D(w);if(at!==R.__cacheKey){it[at]===void 0&&(it[at]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),it[at].usedTimes++;let Pt=it[R.__cacheKey];Pt!==void 0&&(it[R.__cacheKey].usedTimes--,Pt.usedTimes===0&&E(w)),R.__cacheKey=at,R.__webglTexture=it[at].texture}return W}function st(R,w,W){let lt=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(lt=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(lt=i.TEXTURE_3D);let it=et(R,w),at=w.source;e.bindTexture(lt,R.__webglTexture,i.TEXTURE0+W);let Pt=n.get(at);if(at.version!==Pt.__version||it===!0){e.activeTexture(i.TEXTURE0+W);let yt=ye.getPrimaries(ye.workingColorSpace),Tt=w.colorSpace===wn?null:ye.getPrimaries(w.colorSpace),Gt=w.colorSpace===wn||yt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let qt=p(w)&&m(w.image)===!1,ct=_(w.image,qt,!1,s.maxTextureSize);ct=Dt(w,ct);let ae=m(ct)||a,I=r.convert(w.format,w.colorSpace),rt=r.convert(w.type),_t=M(w.internalFormat,I,rt,w.colorSpace,w.isVideoTexture);V(lt,w,ae);let dt,Ut=w.mipmaps,te=a&&w.isVideoTexture!==!0&&_t!==ed,ce=Pt.__version===void 0||it===!0,Kt=b(w,ct,ae);if(w.isDepthTexture)_t=i.DEPTH_COMPONENT,a?w.type===bi?_t=i.DEPTH_COMPONENT32F:w.type===Ei?_t=i.DEPTH_COMPONENT24:w.type===ji?_t=i.DEPTH24_STENCIL8:_t=i.DEPTH_COMPONENT16:w.type===bi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Qi&&_t===i.DEPTH_COMPONENT&&w.type!==Ml&&w.type!==Ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Ei,rt=r.convert(w.type)),w.format===Vs&&_t===i.DEPTH_COMPONENT&&(_t=i.DEPTH_STENCIL,w.type!==ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=ji,rt=r.convert(w.type))),ce&&(te?e.texStorage2D(i.TEXTURE_2D,1,_t,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,_t,ct.width,ct.height,0,I,rt,null));else if(w.isDataTexture)if(Ut.length>0&&ae){te&&ce&&e.texStorage2D(i.TEXTURE_2D,Kt,_t,Ut[0].width,Ut[0].height);for(let gt=0,N=Ut.length;gt<N;gt++)dt=Ut[gt],te?e.texSubImage2D(i.TEXTURE_2D,gt,0,0,dt.width,dt.height,I,rt,dt.data):e.texImage2D(i.TEXTURE_2D,gt,_t,dt.width,dt.height,0,I,rt,dt.data);w.generateMipmaps=!1}else te?(ce&&e.texStorage2D(i.TEXTURE_2D,Kt,_t,ct.width,ct.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct.width,ct.height,I,rt,ct.data)):e.texImage2D(i.TEXTURE_2D,0,_t,ct.width,ct.height,0,I,rt,ct.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){te&&ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Kt,_t,Ut[0].width,Ut[0].height,ct.depth);for(let gt=0,N=Ut.length;gt<N;gt++)dt=Ut[gt],w.format!==Un?I!==null?te?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,dt.width,dt.height,ct.depth,I,dt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,gt,_t,dt.width,dt.height,ct.depth,0,dt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?e.texSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,dt.width,dt.height,ct.depth,I,rt,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,gt,_t,dt.width,dt.height,ct.depth,0,I,rt,dt.data)}else{te&&ce&&e.texStorage2D(i.TEXTURE_2D,Kt,_t,Ut[0].width,Ut[0].height);for(let gt=0,N=Ut.length;gt<N;gt++)dt=Ut[gt],w.format!==Un?I!==null?te?e.compressedTexSubImage2D(i.TEXTURE_2D,gt,0,0,dt.width,dt.height,I,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,gt,_t,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?e.texSubImage2D(i.TEXTURE_2D,gt,0,0,dt.width,dt.height,I,rt,dt.data):e.texImage2D(i.TEXTURE_2D,gt,_t,dt.width,dt.height,0,I,rt,dt.data)}else if(w.isDataArrayTexture)te?(ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Kt,_t,ct.width,ct.height,ct.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,I,rt,ct.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,_t,ct.width,ct.height,ct.depth,0,I,rt,ct.data);else if(w.isData3DTexture)te?(ce&&e.texStorage3D(i.TEXTURE_3D,Kt,_t,ct.width,ct.height,ct.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,I,rt,ct.data)):e.texImage3D(i.TEXTURE_3D,0,_t,ct.width,ct.height,ct.depth,0,I,rt,ct.data);else if(w.isFramebufferTexture){if(ce)if(te)e.texStorage2D(i.TEXTURE_2D,Kt,_t,ct.width,ct.height);else{let gt=ct.width,N=ct.height;for(let pt=0;pt<Kt;pt++)e.texImage2D(i.TEXTURE_2D,pt,_t,gt,N,0,I,rt,null),gt>>=1,N>>=1}}else if(Ut.length>0&&ae){te&&ce&&e.texStorage2D(i.TEXTURE_2D,Kt,_t,Ut[0].width,Ut[0].height);for(let gt=0,N=Ut.length;gt<N;gt++)dt=Ut[gt],te?e.texSubImage2D(i.TEXTURE_2D,gt,0,0,I,rt,dt):e.texImage2D(i.TEXTURE_2D,gt,_t,I,rt,dt);w.generateMipmaps=!1}else te?(ce&&e.texStorage2D(i.TEXTURE_2D,Kt,_t,ct.width,ct.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,I,rt,ct)):e.texImage2D(i.TEXTURE_2D,0,_t,I,rt,ct);y(w,ae)&&x(lt),Pt.__version=at.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function Mt(R,w,W){if(w.image.length!==6)return;let lt=et(R,w),it=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+W);let at=n.get(it);if(it.version!==at.__version||lt===!0){e.activeTexture(i.TEXTURE0+W);let Pt=ye.getPrimaries(ye.workingColorSpace),yt=w.colorSpace===wn?null:ye.getPrimaries(w.colorSpace),Tt=w.colorSpace===wn||Pt===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let Gt=w.isCompressedTexture||w.image[0].isCompressedTexture,qt=w.image[0]&&w.image[0].isDataTexture,ct=[];for(let gt=0;gt<6;gt++)!Gt&&!qt?ct[gt]=_(w.image[gt],!1,!0,s.maxCubemapSize):ct[gt]=qt?w.image[gt].image:w.image[gt],ct[gt]=Dt(w,ct[gt]);let ae=ct[0],I=m(ae)||a,rt=r.convert(w.format,w.colorSpace),_t=r.convert(w.type),dt=M(w.internalFormat,rt,_t,w.colorSpace),Ut=a&&w.isVideoTexture!==!0,te=at.__version===void 0||lt===!0,ce=b(w,ae,I);V(i.TEXTURE_CUBE_MAP,w,I);let Kt;if(Gt){Ut&&te&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ce,dt,ae.width,ae.height);for(let gt=0;gt<6;gt++){Kt=ct[gt].mipmaps;for(let N=0;N<Kt.length;N++){let pt=Kt[N];w.format!==Un?rt!==null?Ut?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,N,0,0,pt.width,pt.height,rt,pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,N,dt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,N,0,0,pt.width,pt.height,rt,_t,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,N,dt,pt.width,pt.height,0,rt,_t,pt.data)}}}else{Kt=w.mipmaps,Ut&&te&&(Kt.length>0&&ce++,e.texStorage2D(i.TEXTURE_CUBE_MAP,ce,dt,ct[0].width,ct[0].height));for(let gt=0;gt<6;gt++)if(qt){Ut?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,ct[gt].width,ct[gt].height,rt,_t,ct[gt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,dt,ct[gt].width,ct[gt].height,0,rt,_t,ct[gt].data);for(let N=0;N<Kt.length;N++){let mt=Kt[N].image[gt].image;Ut?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,N+1,0,0,mt.width,mt.height,rt,_t,mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,N+1,dt,mt.width,mt.height,0,rt,_t,mt.data)}}else{Ut?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,rt,_t,ct[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,dt,rt,_t,ct[gt]);for(let N=0;N<Kt.length;N++){let pt=Kt[N];Ut?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,N+1,0,0,rt,_t,pt.image[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,N+1,dt,rt,_t,pt.image[gt])}}}y(w,I)&&x(i.TEXTURE_CUBE_MAP),at.__version=it.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function vt(R,w,W,lt,it,at){let Pt=r.convert(W.format,W.colorSpace),yt=r.convert(W.type),Tt=M(W.internalFormat,Pt,yt,W.colorSpace);if(!n.get(w).__hasExternalTextures){let qt=Math.max(1,w.width>>at),ct=Math.max(1,w.height>>at);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,at,Tt,qt,ct,w.depth,0,Pt,yt,null):e.texImage2D(it,at,Tt,qt,ct,0,Pt,yt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),wt(w)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,it,n.get(W).__webglTexture,0,Ht(w)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,lt,it,n.get(W).__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(R,w,W){if(i.bindRenderbuffer(i.RENDERBUFFER,R),w.depthBuffer&&!w.stencilBuffer){let lt=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(W||wt(w)){let it=w.depthTexture;it&&it.isDepthTexture&&(it.type===bi?lt=i.DEPTH_COMPONENT32F:it.type===Ei&&(lt=i.DEPTH_COMPONENT24));let at=Ht(w);wt(w)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,lt,w.width,w.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,at,lt,w.width,w.height)}else i.renderbufferStorage(i.RENDERBUFFER,lt,w.width,w.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,R)}else if(w.depthBuffer&&w.stencilBuffer){let lt=Ht(w);W&&wt(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,i.DEPTH24_STENCIL8,w.width,w.height):wt(w)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,i.DEPTH24_STENCIL8,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,R)}else{let lt=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let it=0;it<lt.length;it++){let at=lt[it],Pt=r.convert(at.format,at.colorSpace),yt=r.convert(at.type),Tt=M(at.internalFormat,Pt,yt,at.colorSpace),Gt=Ht(w);W&&wt(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,Tt,w.width,w.height):wt(w)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt,Tt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function It(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),O(w.depthTexture,0);let lt=n.get(w.depthTexture).__webglTexture,it=Ht(w);if(w.depthTexture.format===Qi)wt(w)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0);else if(w.depthTexture.format===Vs)wt(w)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function At(R){let w=n.get(R),W=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");It(w.__webglFramebuffer,R)}else if(W){w.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[lt]),w.__webglDepthbuffer[lt]=i.createRenderbuffer(),Ct(w.__webglDepthbuffer[lt],R,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=i.createRenderbuffer(),Ct(w.__webglDepthbuffer,R,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(R,w,W){let lt=n.get(R);w!==void 0&&vt(lt.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&At(R)}function B(R){let w=R.texture,W=n.get(R),lt=n.get(w);R.addEventListener("dispose",L),R.isWebGLMultipleRenderTargets!==!0&&(lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture()),lt.__version=w.version,o.memory.textures++);let it=R.isWebGLCubeRenderTarget===!0,at=R.isWebGLMultipleRenderTargets===!0,Pt=m(R)||a;if(it){W.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(a&&w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer[yt]=[];for(let Tt=0;Tt<w.mipmaps.length;Tt++)W.__webglFramebuffer[yt][Tt]=i.createFramebuffer()}else W.__webglFramebuffer[yt]=i.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer=[];for(let yt=0;yt<w.mipmaps.length;yt++)W.__webglFramebuffer[yt]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(at)if(s.drawBuffers){let yt=R.texture;for(let Tt=0,Gt=yt.length;Tt<Gt;Tt++){let qt=n.get(yt[Tt]);qt.__webglTexture===void 0&&(qt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&wt(R)===!1){let yt=at?w:[w];W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Tt=0;Tt<yt.length;Tt++){let Gt=yt[Tt];W.__webglColorRenderbuffer[Tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[Tt]);let qt=r.convert(Gt.format,Gt.colorSpace),ct=r.convert(Gt.type),ae=M(Gt.internalFormat,qt,ct,Gt.colorSpace,R.isXRRenderTarget===!0),I=Ht(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,I,ae,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,W.__webglColorRenderbuffer[Tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Ct(W.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture),V(i.TEXTURE_CUBE_MAP,w,Pt);for(let yt=0;yt<6;yt++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let Tt=0;Tt<w.mipmaps.length;Tt++)vt(W.__webglFramebuffer[yt][Tt],R,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Tt);else vt(W.__webglFramebuffer[yt],R,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);y(w,Pt)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){let yt=R.texture;for(let Tt=0,Gt=yt.length;Tt<Gt;Tt++){let qt=yt[Tt],ct=n.get(qt);e.bindTexture(i.TEXTURE_2D,ct.__webglTexture),V(i.TEXTURE_2D,qt,Pt),vt(W.__webglFramebuffer,R,qt,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,0),y(qt,Pt)&&x(i.TEXTURE_2D)}e.unbindTexture()}else{let yt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?yt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(yt,lt.__webglTexture),V(yt,w,Pt),a&&w.mipmaps&&w.mipmaps.length>0)for(let Tt=0;Tt<w.mipmaps.length;Tt++)vt(W.__webglFramebuffer[Tt],R,w,i.COLOR_ATTACHMENT0,yt,Tt);else vt(W.__webglFramebuffer,R,w,i.COLOR_ATTACHMENT0,yt,0);y(w,Pt)&&x(yt),e.unbindTexture()}R.depthBuffer&&At(R)}function Rt(R){let w=m(R)||a,W=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let lt=0,it=W.length;lt<it;lt++){let at=W[lt];if(y(at,w)){let Pt=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,yt=n.get(at).__webglTexture;e.bindTexture(Pt,yt),x(Pt),e.unbindTexture()}}}function Et(R){if(a&&R.samples>0&&wt(R)===!1){let w=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],W=R.width,lt=R.height,it=i.COLOR_BUFFER_BIT,at=[],Pt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(R),Tt=R.isWebGLMultipleRenderTargets===!0;if(Tt)for(let Gt=0;Gt<w.length;Gt++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let Gt=0;Gt<w.length;Gt++){at.push(i.COLOR_ATTACHMENT0+Gt),R.depthBuffer&&at.push(Pt);let qt=yt.__ignoreDepthValues!==void 0?yt.__ignoreDepthValues:!1;if(qt===!1&&(R.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),Tt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[Gt]),qt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Pt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Pt])),Tt){let ct=n.get(w[Gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ct,0)}i.blitFramebuffer(0,0,W,lt,0,0,W,lt,it,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,at)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Tt)for(let Gt=0;Gt<w.length;Gt++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.RENDERBUFFER,yt.__webglColorRenderbuffer[Gt]);let qt=n.get(w[Gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.TEXTURE_2D,qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}}function Ht(R){return Math.min(s.maxSamples,R.samples)}function wt(R){let w=n.get(R);return a&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function se(R){let w=o.render.frame;h.get(R)!==w&&(h.set(R,w),R.update())}function Dt(R,w){let W=R.colorSpace,lt=R.format,it=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Dc||W!==oi&&W!==wn&&(ye.getTransfer(W)===Ae?a===!1?t.has("EXT_sRGB")===!0&&lt===Un?(R.format=Dc,R.minFilter=Sn,R.generateMipmaps=!1):w=zo.sRGBToLinear(w):(lt!==Un||it!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),w}this.allocateTextureUnit=P,this.resetTextureUnits=q,this.setTexture2D=O,this.setTexture2DArray=H,this.setTexture3D=X,this.setTextureCube=k,this.rebindTextures=ft,this.setupRenderTarget=B,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=wt}function T_(i,t,e){let n=e.isWebGL2;function s(r,o=wn){let a,c=ye.getTransfer(o);if(r===Ti)return i.UNSIGNED_BYTE;if(r===Ju)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Ku)return i.UNSIGNED_SHORT_5_5_5_1;if(r===op)return i.BYTE;if(r===ap)return i.SHORT;if(r===Ml)return i.UNSIGNED_SHORT;if(r===$u)return i.INT;if(r===Ei)return i.UNSIGNED_INT;if(r===bi)return i.FLOAT;if(r===Er)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===cp)return i.ALPHA;if(r===Un)return i.RGBA;if(r===lp)return i.LUMINANCE;if(r===hp)return i.LUMINANCE_ALPHA;if(r===Qi)return i.DEPTH_COMPONENT;if(r===Vs)return i.DEPTH_STENCIL;if(r===Dc)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===up)return i.RED;if(r===ju)return i.RED_INTEGER;if(r===dp)return i.RG;if(r===Qu)return i.RG_INTEGER;if(r===td)return i.RGBA_INTEGER;if(r===Za||r===$a||r===Ja||r===Ka)if(c===Ae)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Za)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===$a)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ja)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ka)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Za)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===$a)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ja)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ka)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===mh||r===gh||r===_h||r===xh)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===mh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===gh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===_h)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===xh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ed)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===yh||r===vh)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===yh)return c===Ae?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===vh)return c===Ae?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Mh||r===Eh||r===bh||r===Sh||r===wh||r===Th||r===Ah||r===Rh||r===Ch||r===Ph||r===Lh||r===Ih||r===Dh||r===Uh)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Mh)return c===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Eh)return c===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===bh)return c===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Sh)return c===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===wh)return c===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Th)return c===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ah)return c===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Rh)return c===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ch)return c===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ph)return c===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Lh)return c===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ih)return c===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Dh)return c===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Uh)return c===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ja||r===Nh||r===Oh)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===ja)return c===Ae?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Nh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Oh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===fp||r===Fh||r===Bh||r===Hh)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===ja)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Fh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Bh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Hh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ji?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var qc=class extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},me=class extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}},A_={type:"move"},yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(A_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new me;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Zc=class extends qn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null,_=e.getContextAttributes(),m=null,p=null,y=[],x=[],M=new ht,b=null,T=new nn;T.layers.enable(1),T.viewport=new Pe;let S=new nn;S.layers.enable(2),S.viewport=new Pe;let L=[T,S],v=new qc;v.layers.enable(1),v.layers.enable(2);let E=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let et=y[V];return et===void 0&&(et=new yr,y[V]=et),et.getTargetRaySpace()},this.getControllerGrip=function(V){let et=y[V];return et===void 0&&(et=new yr,y[V]=et),et.getGripSpace()},this.getHand=function(V){let et=y[V];return et===void 0&&(et=new yr,y[V]=et),et.getHandSpace()};function F(V){let et=x.indexOf(V.inputSource);if(et===-1)return;let st=y[et];st!==void 0&&(st.update(V.inputSource,V.frame,l||o),st.dispatchEvent({type:V.type,data:V.inputSource}))}function q(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",P);for(let V=0;V<y.length;V++){let et=x[V];et!==null&&(x[V]=null,y[V].disconnect(et))}E=null,U=null,t.setRenderTarget(m),d=null,f=null,u=null,s=null,p=null,ot.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",q),s.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(M),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let et={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new ai(d.framebufferWidth,d.framebufferHeight,{format:Un,type:Ti,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let et=null,st=null,Mt=null;_.depth&&(Mt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=_.stencil?Vs:Qi,st=_.stencil?ji:Ei);let vt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(vt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),p=new ai(f.textureWidth,f.textureHeight,{format:Un,type:Ti,depthTexture:new $o(f.textureWidth,f.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});let Ct=t.properties.get(p);Ct.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ot.setContext(s),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(V){for(let et=0;et<V.removed.length;et++){let st=V.removed[et],Mt=x.indexOf(st);Mt>=0&&(x[Mt]=null,y[Mt].disconnect(st))}for(let et=0;et<V.added.length;et++){let st=V.added[et],Mt=x.indexOf(st);if(Mt===-1){for(let Ct=0;Ct<y.length;Ct++)if(Ct>=x.length){x.push(st),Mt=Ct;break}else if(x[Ct]===null){x[Ct]=st,Mt=Ct;break}if(Mt===-1)break}let vt=y[Mt];vt&&vt.connect(st)}}let D=new C,O=new C;function H(V,et,st){D.setFromMatrixPosition(et.matrixWorld),O.setFromMatrixPosition(st.matrixWorld);let Mt=D.distanceTo(O),vt=et.projectionMatrix.elements,Ct=st.projectionMatrix.elements,It=vt[14]/(vt[10]-1),At=vt[14]/(vt[10]+1),ft=(vt[9]+1)/vt[5],B=(vt[9]-1)/vt[5],Rt=(vt[8]-1)/vt[0],Et=(Ct[8]+1)/Ct[0],Ht=It*Rt,wt=It*Et,se=Mt/(-Rt+Et),Dt=se*-Rt;et.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Dt),V.translateZ(se),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();let R=It+se,w=At+se,W=Ht-Dt,lt=wt+(Mt-Dt),it=ft*At/w*R,at=B*At/w*R;V.projectionMatrix.makePerspective(W,lt,it,at,R,w),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function X(V,et){et===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(et.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;v.near=S.near=T.near=V.near,v.far=S.far=T.far=V.far,(E!==v.near||U!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,U=v.far);let et=V.parent,st=v.cameras;X(v,et);for(let Mt=0;Mt<st.length;Mt++)X(st[Mt],et);st.length===2?H(v,T,S):v.projectionMatrix.copy(T.projectionMatrix),k(V,v,et)};function k(V,et,st){st===null?V.matrix.copy(et.matrixWorld):(V.matrix.copy(st.matrixWorld),V.matrix.invert(),V.matrix.multiply(et.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(et.projectionMatrix),V.projectionMatrixInverse.copy(et.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=br*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(V){c=V,f!==null&&(f.fixedFoveation=V),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=V)};let Y=null;function nt(V,et){if(h=et.getViewerPose(l||o),g=et,h!==null){let st=h.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let Mt=!1;st.length!==v.cameras.length&&(v.cameras.length=0,Mt=!0);for(let vt=0;vt<st.length;vt++){let Ct=st[vt],It=null;if(d!==null)It=d.getViewport(Ct);else{let ft=u.getViewSubImage(f,Ct);It=ft.viewport,vt===0&&(t.setRenderTargetTextures(p,ft.colorTexture,f.ignoreDepthValues?void 0:ft.depthStencilTexture),t.setRenderTarget(p))}let At=L[vt];At===void 0&&(At=new nn,At.layers.enable(vt),At.viewport=new Pe,L[vt]=At),At.matrix.fromArray(Ct.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(Ct.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(It.x,It.y,It.width,It.height),vt===0&&(v.matrix.copy(At.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Mt===!0&&v.cameras.push(At)}}for(let st=0;st<y.length;st++){let Mt=x[st],vt=y[st];Mt!==null&&vt!==void 0&&vt.update(Mt,et,l||o)}Y&&Y(V,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}let ot=new hd;ot.setAnimationLoop(nt),this.setAnimationLoop=function(V){Y=V},this.dispose=function(){}}};function R_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ld(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,y,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ke&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ke&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let x=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ke&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function C_(i,t,e,n){let s={},r={},o=[],a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,x){let M=x.program;n.uniformBlockBinding(y,M)}function l(y,x){let M=s[y.id];M===void 0&&(g(y),M=h(y),s[y.id]=M,y.addEventListener("dispose",m));let b=x.program;n.updateUBOMapping(y,b);let T=t.render.frame;r[y.id]!==T&&(f(y),r[y.id]=T)}function h(y){let x=u();y.__bindingPointIndex=x;let M=i.createBuffer(),b=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,b,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,M),M}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let x=s[y.id],M=y.uniforms,b=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,S=M.length;T<S;T++){let L=Array.isArray(M[T])?M[T]:[M[T]];for(let v=0,E=L.length;v<E;v++){let U=L[v];if(d(U,T,v,b)===!0){let F=U.__offset,q=Array.isArray(U.value)?U.value:[U.value],P=0;for(let D=0;D<q.length;D++){let O=q[D],H=_(O);typeof O=="number"||typeof O=="boolean"?(U.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,F+P,U.__data)):O.isMatrix3?(U.__data[0]=O.elements[0],U.__data[1]=O.elements[1],U.__data[2]=O.elements[2],U.__data[3]=0,U.__data[4]=O.elements[3],U.__data[5]=O.elements[4],U.__data[6]=O.elements[5],U.__data[7]=0,U.__data[8]=O.elements[6],U.__data[9]=O.elements[7],U.__data[10]=O.elements[8],U.__data[11]=0):(O.toArray(U.__data,P),P+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,x,M,b){let T=y.value,S=x+"_"+M;if(b[S]===void 0)return typeof T=="number"||typeof T=="boolean"?b[S]=T:b[S]=T.clone(),!0;{let L=b[S];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return b[S]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function g(y){let x=y.uniforms,M=0,b=16;for(let S=0,L=x.length;S<L;S++){let v=Array.isArray(x[S])?x[S]:[x[S]];for(let E=0,U=v.length;E<U;E++){let F=v[E],q=Array.isArray(F.value)?F.value:[F.value];for(let P=0,D=q.length;P<D;P++){let O=q[P],H=_(O),X=M%b;X!==0&&b-X<H.boundary&&(M+=b-X),F.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=H.storage}}}let T=M%b;return T>0&&(M+=b-T),y.__size=M,y.__cache={},this}function _(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){let x=y.target;x.removeEventListener("dispose",m);let M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Ar=class{constructor(t={}){let{canvas:e=Bp(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let d=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Oe,this._useLegacyLights=!1,this.toneMapping=wi,this.toneMappingExposure=1;let x=this,M=!1,b=0,T=0,S=null,L=-1,v=null,E=new Pe,U=new Pe,F=null,q=new zt(0),P=0,D=e.width,O=e.height,H=1,X=null,k=null,Y=new Pe(0,0,D,O),nt=new Pe(0,0,D,O),ot=!1,V=new Tr,et=!1,st=!1,Mt=null,vt=new ge,Ct=new ht,It=new C,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ft(){return S===null?H:1}let B=n;function Rt(A,G){for(let $=0;$<A.length;$++){let J=A[$],Z=e.getContext(J,G);if(Z!==null)return Z}return null}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xl}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",N,!1),e.addEventListener("webglcontextcreationerror",pt,!1),B===null){let G=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&G.shift(),B=Rt(G,A),B===null)throw Rt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Et,Ht,wt,se,Dt,R,w,W,lt,it,at,Pt,yt,Tt,Gt,qt,ct,ae,I,rt,_t,dt,Ut,te;function ce(){Et=new Zg(B),Ht=new Gg(B,Et,t),Et.init(Ht),dt=new T_(B,Et,Ht),wt=new S_(B,Et,Ht),se=new Kg(B),Dt=new d_,R=new w_(B,Et,wt,Dt,Ht,dt,se),w=new Wg(x),W=new qg(x),lt=new rm(B,Ht),Ut=new zg(B,Et,lt,Ht),it=new $g(B,lt,se,Ut),at=new e1(B,it,lt,se),I=new t1(B,Ht,R),qt=new Vg(Dt),Pt=new u_(x,w,W,Et,Ht,Ut,qt),yt=new R_(x,Dt),Tt=new p_,Gt=new v_(Et,Ht),ae=new Hg(x,w,W,wt,at,f,c),ct=new b_(x,at,Ht),te=new C_(B,se,Ht,wt),rt=new kg(B,Et,se,Ht),_t=new Jg(B,Et,se,Ht),se.programs=Pt.programs,x.capabilities=Ht,x.extensions=Et,x.properties=Dt,x.renderLists=Tt,x.shadowMap=ct,x.state=wt,x.info=se}ce();let Kt=new Zc(x,B);this.xr=Kt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let A=Et.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Et.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(A){A!==void 0&&(H=A,this.setSize(D,O,!1))},this.getSize=function(A){return A.set(D,O)},this.setSize=function(A,G,$=!0){if(Kt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=A,O=G,e.width=Math.floor(A*H),e.height=Math.floor(G*H),$===!0&&(e.style.width=A+"px",e.style.height=G+"px"),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(D*H,O*H).floor()},this.setDrawingBufferSize=function(A,G,$){D=A,O=G,H=$,e.width=Math.floor(A*$),e.height=Math.floor(G*$),this.setViewport(0,0,A,G)},this.getCurrentViewport=function(A){return A.copy(E)},this.getViewport=function(A){return A.copy(Y)},this.setViewport=function(A,G,$,J){A.isVector4?Y.set(A.x,A.y,A.z,A.w):Y.set(A,G,$,J),wt.viewport(E.copy(Y).multiplyScalar(H).floor())},this.getScissor=function(A){return A.copy(nt)},this.setScissor=function(A,G,$,J){A.isVector4?nt.set(A.x,A.y,A.z,A.w):nt.set(A,G,$,J),wt.scissor(U.copy(nt).multiplyScalar(H).floor())},this.getScissorTest=function(){return ot},this.setScissorTest=function(A){wt.setScissorTest(ot=A)},this.setOpaqueSort=function(A){X=A},this.setTransparentSort=function(A){k=A},this.getClearColor=function(A){return A.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(A=!0,G=!0,$=!0){let J=0;if(A){let Z=!1;if(S!==null){let bt=S.texture.format;Z=bt===td||bt===Qu||bt===ju}if(Z){let bt=S.texture.type,Ft=bt===Ti||bt===Ei||bt===Ml||bt===ji||bt===Ju||bt===Ku,Vt=ae.getClearColor(),Xt=ae.getClearAlpha(),jt=Vt.r,Yt=Vt.g,Zt=Vt.b;Ft?(d[0]=jt,d[1]=Yt,d[2]=Zt,d[3]=Xt,B.clearBufferuiv(B.COLOR,0,d)):(g[0]=jt,g[1]=Yt,g[2]=Zt,g[3]=Xt,B.clearBufferiv(B.COLOR,0,g))}else J|=B.COLOR_BUFFER_BIT}G&&(J|=B.DEPTH_BUFFER_BIT),$&&(J|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",N,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),Tt.dispose(),Gt.dispose(),Dt.dispose(),w.dispose(),W.dispose(),at.dispose(),Ut.dispose(),te.dispose(),Pt.dispose(),Kt.dispose(),Kt.removeEventListener("sessionstart",on),Kt.removeEventListener("sessionend",be),Mt&&(Mt.dispose(),Mt=null),an.stop()};function gt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let A=se.autoReset,G=ct.enabled,$=ct.autoUpdate,J=ct.needsUpdate,Z=ct.type;ce(),se.autoReset=A,ct.enabled=G,ct.autoUpdate=$,ct.needsUpdate=J,ct.type=Z}function pt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function mt(A){let G=A.target;G.removeEventListener("dispose",mt),kt(G)}function kt(A){Ot(A),Dt.remove(A)}function Ot(A){let G=Dt.get(A).programs;G!==void 0&&(G.forEach(function($){Pt.releaseProgram($)}),A.isShaderMaterial&&Pt.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,$,J,Z,bt){G===null&&(G=At);let Ft=Z.isMesh&&Z.matrixWorld.determinant()<0,Vt=bf(A,G,$,J,Z);wt.setMaterial(J,Ft);let Xt=$.index,jt=1;if(J.wireframe===!0){if(Xt=it.getWireframeAttribute($),Xt===void 0)return;jt=2}let Yt=$.drawRange,Zt=$.attributes.position,Ne=Yt.start*jt,_n=(Yt.start+Yt.count)*jt;bt!==null&&(Ne=Math.max(Ne,bt.start*jt),_n=Math.min(_n,(bt.start+bt.count)*jt)),Xt!==null?(Ne=Math.max(Ne,0),_n=Math.min(_n,Xt.count)):Zt!=null&&(Ne=Math.max(Ne,0),_n=Math.min(_n,Zt.count));let qe=_n-Ne;if(qe<0||qe===1/0)return;Ut.setup(Z,J,Vt,$,Xt);let jn,Le=rt;if(Xt!==null&&(jn=lt.get(Xt),Le=_t,Le.setIndex(jn)),Z.isMesh)J.wireframe===!0?(wt.setLineWidth(J.wireframeLinewidth*ft()),Le.setMode(B.LINES)):Le.setMode(B.TRIANGLES);else if(Z.isLine){let ee=J.linewidth;ee===void 0&&(ee=1),wt.setLineWidth(ee*ft()),Z.isLineSegments?Le.setMode(B.LINES):Z.isLineLoop?Le.setMode(B.LINE_LOOP):Le.setMode(B.LINE_STRIP)}else Z.isPoints?Le.setMode(B.POINTS):Z.isSprite&&Le.setMode(B.TRIANGLES);if(Z.isBatchedMesh)Le.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else if(Z.isInstancedMesh)Le.renderInstances(Ne,qe,Z.count);else if($.isInstancedBufferGeometry){let ee=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Va=Math.min($.instanceCount,ee);Le.renderInstances(Ne,qe,Va)}else Le.render(Ne,qe)};function ue(A,G,$){A.transparent===!0&&A.side===Se&&A.forceSinglePass===!1?(A.side=ke,A.needsUpdate=!0,no(A,G,$),A.side=Ai,A.needsUpdate=!0,no(A,G,$),A.side=Se):no(A,G,$)}this.compile=function(A,G,$=null){$===null&&($=A),m=Gt.get($),m.init(),y.push(m),$.traverseVisible(function(Z){Z.isLight&&Z.layers.test(G.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),A!==$&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(G.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),m.setupLights(x._useLegacyLights);let J=new Set;return A.traverse(function(Z){let bt=Z.material;if(bt)if(Array.isArray(bt))for(let Ft=0;Ft<bt.length;Ft++){let Vt=bt[Ft];ue(Vt,$,Z),J.add(Vt)}else ue(bt,$,Z),J.add(bt)}),y.pop(),m=null,J},this.compileAsync=function(A,G,$=null){let J=this.compile(A,G,$);return new Promise(Z=>{function bt(){if(J.forEach(function(Ft){Dt.get(Ft).currentProgram.isReady()&&J.delete(Ft)}),J.size===0){Z(A);return}setTimeout(bt,10)}Et.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let pe=null;function Ye(A){pe&&pe(A)}function on(){an.stop()}function be(){an.start()}let an=new hd;an.setAnimationLoop(Ye),typeof self<"u"&&an.setContext(self),this.setAnimationLoop=function(A){pe=A,Kt.setAnimationLoop(A),A===null?an.stop():an.start()},Kt.addEventListener("sessionstart",on),Kt.addEventListener("sessionend",be),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Kt.enabled===!0&&Kt.isPresenting===!0&&(Kt.cameraAutoUpdate===!0&&Kt.updateCamera(G),G=Kt.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,G,S),m=Gt.get(A,y.length),m.init(),y.push(m),vt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),V.setFromProjectionMatrix(vt),st=this.localClippingEnabled,et=qt.init(this.clippingPlanes,st),_=Tt.get(A,p.length),_.init(),p.push(_),Xn(A,G,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(X,k),this.info.render.frame++,et===!0&&qt.beginShadows();let $=m.state.shadowsArray;if(ct.render($,A,G),et===!0&&qt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ae.render(_,A),m.setupLights(x._useLegacyLights),G.isArrayCamera){let J=G.cameras;for(let Z=0,bt=J.length;Z<bt;Z++){let Ft=J[Z];nh(_,A,Ft,Ft.viewport)}}else nh(_,A,G);S!==null&&(R.updateMultisampleRenderTarget(S),R.updateRenderTargetMipmap(S)),A.isScene===!0&&A.onAfterRender(x,A,G),Ut.resetDefaultState(),L=-1,v=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Xn(A,G,$,J){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||V.intersectsSprite(A)){J&&It.setFromMatrixPosition(A.matrixWorld).applyMatrix4(vt);let Ft=at.update(A),Vt=A.material;Vt.visible&&_.push(A,Ft,Vt,$,It.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||V.intersectsObject(A))){let Ft=at.update(A),Vt=A.material;if(J&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),It.copy(A.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),It.copy(Ft.boundingSphere.center)),It.applyMatrix4(A.matrixWorld).applyMatrix4(vt)),Array.isArray(Vt)){let Xt=Ft.groups;for(let jt=0,Yt=Xt.length;jt<Yt;jt++){let Zt=Xt[jt],Ne=Vt[Zt.materialIndex];Ne&&Ne.visible&&_.push(A,Ft,Ne,$,It.z,Zt)}}else Vt.visible&&_.push(A,Ft,Vt,$,It.z,null)}}let bt=A.children;for(let Ft=0,Vt=bt.length;Ft<Vt;Ft++)Xn(bt[Ft],G,$,J)}function nh(A,G,$,J){let Z=A.opaque,bt=A.transmissive,Ft=A.transparent;m.setupLightsView($),et===!0&&qt.setGlobalState(x.clippingPlanes,$),bt.length>0&&Ef(Z,bt,G,$),J&&wt.viewport(E.copy(J)),Z.length>0&&eo(Z,G,$),bt.length>0&&eo(bt,G,$),Ft.length>0&&eo(Ft,G,$),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function Ef(A,G,$,J){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;let bt=Ht.isWebGL2;Mt===null&&(Mt=new ai(1,1,{generateMipmaps:!0,type:Et.has("EXT_color_buffer_half_float")?Er:Ti,minFilter:es,samples:bt?4:0})),x.getDrawingBufferSize(Ct),bt?Mt.setSize(Ct.x,Ct.y):Mt.setSize(Ho(Ct.x),Ho(Ct.y));let Ft=x.getRenderTarget();x.setRenderTarget(Mt),x.getClearColor(q),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();let Vt=x.toneMapping;x.toneMapping=wi,eo(A,$,J),R.updateMultisampleRenderTarget(Mt),R.updateRenderTargetMipmap(Mt);let Xt=!1;for(let jt=0,Yt=G.length;jt<Yt;jt++){let Zt=G[jt],Ne=Zt.object,_n=Zt.geometry,qe=Zt.material,jn=Zt.group;if(qe.side===Se&&Ne.layers.test(J.layers)){let Le=qe.side;qe.side=ke,qe.needsUpdate=!0,ih(Ne,$,J,_n,qe,jn),qe.side=Le,qe.needsUpdate=!0,Xt=!0}}Xt===!0&&(R.updateMultisampleRenderTarget(Mt),R.updateRenderTargetMipmap(Mt)),x.setRenderTarget(Ft),x.setClearColor(q,P),x.toneMapping=Vt}function eo(A,G,$){let J=G.isScene===!0?G.overrideMaterial:null;for(let Z=0,bt=A.length;Z<bt;Z++){let Ft=A[Z],Vt=Ft.object,Xt=Ft.geometry,jt=J===null?Ft.material:J,Yt=Ft.group;Vt.layers.test($.layers)&&ih(Vt,G,$,Xt,jt,Yt)}}function ih(A,G,$,J,Z,bt){A.onBeforeRender(x,G,$,J,Z,bt),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(x,G,$,J,A,bt),Z.transparent===!0&&Z.side===Se&&Z.forceSinglePass===!1?(Z.side=ke,Z.needsUpdate=!0,x.renderBufferDirect($,G,J,Z,A,bt),Z.side=Ai,Z.needsUpdate=!0,x.renderBufferDirect($,G,J,Z,A,bt),Z.side=Se):x.renderBufferDirect($,G,J,Z,A,bt),A.onAfterRender(x,G,$,J,Z,bt)}function no(A,G,$){G.isScene!==!0&&(G=At);let J=Dt.get(A),Z=m.state.lights,bt=m.state.shadowsArray,Ft=Z.state.version,Vt=Pt.getParameters(A,Z.state,bt,G,$),Xt=Pt.getProgramCacheKey(Vt),jt=J.programs;J.environment=A.isMeshStandardMaterial?G.environment:null,J.fog=G.fog,J.envMap=(A.isMeshStandardMaterial?W:w).get(A.envMap||J.environment),jt===void 0&&(A.addEventListener("dispose",mt),jt=new Map,J.programs=jt);let Yt=jt.get(Xt);if(Yt!==void 0){if(J.currentProgram===Yt&&J.lightsStateVersion===Ft)return rh(A,Vt),Yt}else Vt.uniforms=Pt.getUniforms(A),A.onBuild($,Vt,x),A.onBeforeCompile(Vt,x),Yt=Pt.acquireProgram(Vt,Xt),jt.set(Xt,Yt),J.uniforms=Vt.uniforms;let Zt=J.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Zt.clippingPlanes=qt.uniform),rh(A,Vt),J.needsLights=wf(A),J.lightsStateVersion=Ft,J.needsLights&&(Zt.ambientLightColor.value=Z.state.ambient,Zt.lightProbe.value=Z.state.probe,Zt.directionalLights.value=Z.state.directional,Zt.directionalLightShadows.value=Z.state.directionalShadow,Zt.spotLights.value=Z.state.spot,Zt.spotLightShadows.value=Z.state.spotShadow,Zt.rectAreaLights.value=Z.state.rectArea,Zt.ltc_1.value=Z.state.rectAreaLTC1,Zt.ltc_2.value=Z.state.rectAreaLTC2,Zt.pointLights.value=Z.state.point,Zt.pointLightShadows.value=Z.state.pointShadow,Zt.hemisphereLights.value=Z.state.hemi,Zt.directionalShadowMap.value=Z.state.directionalShadowMap,Zt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Zt.spotShadowMap.value=Z.state.spotShadowMap,Zt.spotLightMatrix.value=Z.state.spotLightMatrix,Zt.spotLightMap.value=Z.state.spotLightMap,Zt.pointShadowMap.value=Z.state.pointShadowMap,Zt.pointShadowMatrix.value=Z.state.pointShadowMatrix),J.currentProgram=Yt,J.uniformsList=null,Yt}function sh(A){if(A.uniformsList===null){let G=A.currentProgram.getUniforms();A.uniformsList=zs.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function rh(A,G){let $=Dt.get(A);$.outputColorSpace=G.outputColorSpace,$.batching=G.batching,$.instancing=G.instancing,$.instancingColor=G.instancingColor,$.skinning=G.skinning,$.morphTargets=G.morphTargets,$.morphNormals=G.morphNormals,$.morphColors=G.morphColors,$.morphTargetsCount=G.morphTargetsCount,$.numClippingPlanes=G.numClippingPlanes,$.numIntersection=G.numClipIntersection,$.vertexAlphas=G.vertexAlphas,$.vertexTangents=G.vertexTangents,$.toneMapping=G.toneMapping}function bf(A,G,$,J,Z){G.isScene!==!0&&(G=At),R.resetTextureUnits();let bt=G.fog,Ft=J.isMeshStandardMaterial?G.environment:null,Vt=S===null?x.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:oi,Xt=(J.isMeshStandardMaterial?W:w).get(J.envMap||Ft),jt=J.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Yt=!!$.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Zt=!!$.morphAttributes.position,Ne=!!$.morphAttributes.normal,_n=!!$.morphAttributes.color,qe=wi;J.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(qe=x.toneMapping);let jn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Le=jn!==void 0?jn.length:0,ee=Dt.get(J),Va=m.state.lights;if(et===!0&&(st===!0||A!==v)){let En=A===v&&J.id===L;qt.setState(J,A,En)}let Ue=!1;J.version===ee.__version?(ee.needsLights&&ee.lightsStateVersion!==Va.state.version||ee.outputColorSpace!==Vt||Z.isBatchedMesh&&ee.batching===!1||!Z.isBatchedMesh&&ee.batching===!0||Z.isInstancedMesh&&ee.instancing===!1||!Z.isInstancedMesh&&ee.instancing===!0||Z.isSkinnedMesh&&ee.skinning===!1||!Z.isSkinnedMesh&&ee.skinning===!0||Z.isInstancedMesh&&ee.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&ee.instancingColor===!1&&Z.instanceColor!==null||ee.envMap!==Xt||J.fog===!0&&ee.fog!==bt||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==qt.numPlanes||ee.numIntersection!==qt.numIntersection)||ee.vertexAlphas!==jt||ee.vertexTangents!==Yt||ee.morphTargets!==Zt||ee.morphNormals!==Ne||ee.morphColors!==_n||ee.toneMapping!==qe||Ht.isWebGL2===!0&&ee.morphTargetsCount!==Le)&&(Ue=!0):(Ue=!0,ee.__version=J.version);let Vi=ee.currentProgram;Ue===!0&&(Vi=no(J,G,Z));let oh=!1,cr=!1,Wa=!1,Qe=Vi.getUniforms(),Wi=ee.uniforms;if(wt.useProgram(Vi.program)&&(oh=!0,cr=!0,Wa=!0),J.id!==L&&(L=J.id,cr=!0),oh||v!==A){Qe.setValue(B,"projectionMatrix",A.projectionMatrix),Qe.setValue(B,"viewMatrix",A.matrixWorldInverse);let En=Qe.map.cameraPosition;En!==void 0&&En.setValue(B,It.setFromMatrixPosition(A.matrixWorld)),Ht.logarithmicDepthBuffer&&Qe.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Qe.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),v!==A&&(v=A,cr=!0,Wa=!0)}if(Z.isSkinnedMesh){Qe.setOptional(B,Z,"bindMatrix"),Qe.setOptional(B,Z,"bindMatrixInverse");let En=Z.skeleton;En&&(Ht.floatVertexTextures?(En.boneTexture===null&&En.computeBoneTexture(),Qe.setValue(B,"boneTexture",En.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Z.isBatchedMesh&&(Qe.setOptional(B,Z,"batchingTexture"),Qe.setValue(B,"batchingTexture",Z._matricesTexture,R));let Xa=$.morphAttributes;if((Xa.position!==void 0||Xa.normal!==void 0||Xa.color!==void 0&&Ht.isWebGL2===!0)&&I.update(Z,$,Vi),(cr||ee.receiveShadow!==Z.receiveShadow)&&(ee.receiveShadow=Z.receiveShadow,Qe.setValue(B,"receiveShadow",Z.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Wi.envMap.value=Xt,Wi.flipEnvMap.value=Xt.isCubeTexture&&Xt.isRenderTargetTexture===!1?-1:1),cr&&(Qe.setValue(B,"toneMappingExposure",x.toneMappingExposure),ee.needsLights&&Sf(Wi,Wa),bt&&J.fog===!0&&yt.refreshFogUniforms(Wi,bt),yt.refreshMaterialUniforms(Wi,J,H,O,Mt),zs.upload(B,sh(ee),Wi,R)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(zs.upload(B,sh(ee),Wi,R),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Qe.setValue(B,"center",Z.center),Qe.setValue(B,"modelViewMatrix",Z.modelViewMatrix),Qe.setValue(B,"normalMatrix",Z.normalMatrix),Qe.setValue(B,"modelMatrix",Z.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let En=J.uniformsGroups;for(let Ya=0,Tf=En.length;Ya<Tf;Ya++)if(Ht.isWebGL2){let ah=En[Ya];te.update(ah,Vi),te.bind(ah,Vi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vi}function Sf(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function wf(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(A,G,$){Dt.get(A.texture).__webglTexture=G,Dt.get(A.depthTexture).__webglTexture=$;let J=Dt.get(A);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=$===void 0,J.__autoAllocateDepthBuffer||Et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,G){let $=Dt.get(A);$.__webglFramebuffer=G,$.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(A,G=0,$=0){S=A,b=G,T=$;let J=!0,Z=null,bt=!1,Ft=!1;if(A){let Xt=Dt.get(A);Xt.__useDefaultFramebuffer!==void 0?(wt.bindFramebuffer(B.FRAMEBUFFER,null),J=!1):Xt.__webglFramebuffer===void 0?R.setupRenderTarget(A):Xt.__hasExternalTextures&&R.rebindTextures(A,Dt.get(A.texture).__webglTexture,Dt.get(A.depthTexture).__webglTexture);let jt=A.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Ft=!0);let Yt=Dt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Yt[G])?Z=Yt[G][$]:Z=Yt[G],bt=!0):Ht.isWebGL2&&A.samples>0&&R.useMultisampledRTT(A)===!1?Z=Dt.get(A).__webglMultisampledFramebuffer:Array.isArray(Yt)?Z=Yt[$]:Z=Yt,E.copy(A.viewport),U.copy(A.scissor),F=A.scissorTest}else E.copy(Y).multiplyScalar(H).floor(),U.copy(nt).multiplyScalar(H).floor(),F=ot;if(wt.bindFramebuffer(B.FRAMEBUFFER,Z)&&Ht.drawBuffers&&J&&wt.drawBuffers(A,Z),wt.viewport(E),wt.scissor(U),wt.setScissorTest(F),bt){let Xt=Dt.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+G,Xt.__webglTexture,$)}else if(Ft){let Xt=Dt.get(A.texture),jt=G||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Xt.__webglTexture,$||0,jt)}L=-1},this.readRenderTargetPixels=function(A,G,$,J,Z,bt,Ft){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=Dt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ft!==void 0&&(Vt=Vt[Ft]),Vt){wt.bindFramebuffer(B.FRAMEBUFFER,Vt);try{let Xt=A.texture,jt=Xt.format,Yt=Xt.type;if(jt!==Un&&dt.convert(jt)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Zt=Yt===Er&&(Et.has("EXT_color_buffer_half_float")||Ht.isWebGL2&&Et.has("EXT_color_buffer_float"));if(Yt!==Ti&&dt.convert(Yt)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Yt===bi&&(Ht.isWebGL2||Et.has("OES_texture_float")||Et.has("WEBGL_color_buffer_float")))&&!Zt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-J&&$>=0&&$<=A.height-Z&&B.readPixels(G,$,J,Z,dt.convert(jt),dt.convert(Yt),bt)}finally{let Xt=S!==null?Dt.get(S).__webglFramebuffer:null;wt.bindFramebuffer(B.FRAMEBUFFER,Xt)}}},this.copyFramebufferToTexture=function(A,G,$=0){let J=Math.pow(2,-$),Z=Math.floor(G.image.width*J),bt=Math.floor(G.image.height*J);R.setTexture2D(G,0),B.copyTexSubImage2D(B.TEXTURE_2D,$,0,0,A.x,A.y,Z,bt),wt.unbindTexture()},this.copyTextureToTexture=function(A,G,$,J=0){let Z=G.image.width,bt=G.image.height,Ft=dt.convert($.format),Vt=dt.convert($.type);R.setTexture2D($,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,$.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,$.unpackAlignment),G.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,J,A.x,A.y,Z,bt,Ft,Vt,G.image.data):G.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,J,A.x,A.y,G.mipmaps[0].width,G.mipmaps[0].height,Ft,G.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,J,A.x,A.y,Ft,Vt,G.image),J===0&&$.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),wt.unbindTexture()},this.copyTextureToTexture3D=function(A,G,$,J,Z=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let bt=A.max.x-A.min.x+1,Ft=A.max.y-A.min.y+1,Vt=A.max.z-A.min.z+1,Xt=dt.convert(J.format),jt=dt.convert(J.type),Yt;if(J.isData3DTexture)R.setTexture3D(J,0),Yt=B.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)R.setTexture2DArray(J,0),Yt=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,J.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,J.unpackAlignment);let Zt=B.getParameter(B.UNPACK_ROW_LENGTH),Ne=B.getParameter(B.UNPACK_IMAGE_HEIGHT),_n=B.getParameter(B.UNPACK_SKIP_PIXELS),qe=B.getParameter(B.UNPACK_SKIP_ROWS),jn=B.getParameter(B.UNPACK_SKIP_IMAGES),Le=$.isCompressedTexture?$.mipmaps[Z]:$.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,Le.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Le.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,A.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,A.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,A.min.z),$.isDataTexture||$.isData3DTexture?B.texSubImage3D(Yt,Z,G.x,G.y,G.z,bt,Ft,Vt,Xt,jt,Le.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Yt,Z,G.x,G.y,G.z,bt,Ft,Vt,Xt,Le.data)):B.texSubImage3D(Yt,Z,G.x,G.y,G.z,bt,Ft,Vt,Xt,jt,Le),B.pixelStorei(B.UNPACK_ROW_LENGTH,Zt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ne),B.pixelStorei(B.UNPACK_SKIP_PIXELS,_n),B.pixelStorei(B.UNPACK_SKIP_ROWS,qe),B.pixelStorei(B.UNPACK_SKIP_IMAGES,jn),Z===0&&J.generateMipmaps&&B.generateMipmap(Yt),wt.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),wt.unbindTexture()},this.resetState=function(){b=0,T=0,S=null,wt.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===El?"display-p3":"srgb",e.unpackColorSpace=ye.workingColorSpace===pa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Oe?ts:nd}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ts?Oe:oi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},$c=class extends Ar{};$c.prototype.isWebGL1Renderer=!0;var Jo=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new zt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ys=class extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var Rr=class extends ve{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Is=new ge,Pu=new ge,To=[],Lu=new ci,P_=new ge,fr=new j,pr=new Ci,qs=class extends j{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Rr(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,P_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ci),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Is),Lu.copy(t.boundingBox).applyMatrix4(Is),this.boundingBox.union(Lu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ci),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Is),pr.copy(t.boundingSphere).applyMatrix4(Is),this.boundingSphere.union(pr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,s=this.count;if(fr.geometry=this.geometry,fr.material=this.material,fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pr.copy(this.boundingSphere),pr.applyMatrix4(n),t.ray.intersectsSphere(pr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Is),Pu.multiplyMatrices(n,Is),fr.matrixWorld=Pu,fr.raycast(t,To);for(let o=0,a=To.length;o<a;o++){let c=To[o];c.instanceId=r,c.object=this,e.push(c)}To.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Rr(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Cr=class extends Pi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Iu=new C,Du=new C,Uu=new ge,Ec=new ns,Ao=new Ci,Jc=class extends $e{constructor(t=new de,e=new Cr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Iu.fromBufferAttribute(e,s-1),Du.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Iu.distanceTo(Du);t.setAttribute("lineDistance",new Nt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ao.copy(n.boundingSphere),Ao.applyMatrix4(s),Ao.radius+=r,t.ray.intersectsSphere(Ao)===!1)return;Uu.copy(s).invert(),Ec.copy(t.ray).applyMatrix4(Uu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new C,h=new C,u=new C,f=new C,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let p=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let x=p,M=y-1;x<M;x+=d){let b=g.getX(x),T=g.getX(x+1);if(l.fromBufferAttribute(m,b),h.fromBufferAttribute(m,T),Ec.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let L=t.ray.origin.distanceTo(f);L<t.near||L>t.far||e.push({distance:L,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let x=p,M=y-1;x<M;x+=d){if(l.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),Ec.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let T=t.ray.origin.distanceTo(f);T<t.near||T>t.far||e.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},Nu=new C,Ou=new C,Ko=class extends Jc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Nu.fromBufferAttribute(e,s),Ou.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Nu.distanceTo(Ou);t.setAttribute("lineDistance",new Nt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var jo=class extends vn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Tn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ht:new C);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new C,s=[],r=[],o=[],a=new C,c=new ge;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ze(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ze(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Pr=class extends Tn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e){let n=e||new ht,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Kc=class extends Pr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function wl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Ro=new C,bc=new wl,Sc=new wl,wc=new wl,Fn=class extends Tn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Ro.subVectors(s[0],s[1]).add(s[0]),l=Ro);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ro.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ro),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),bc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,_,m),Sc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,_,m),wc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(bc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Sc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),wc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(bc.calc(c),Sc.calc(c),wc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Fu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function L_(i,t){let e=1-i;return e*e*t}function I_(i,t){return 2*(1-i)*i*t}function D_(i,t){return i*i*t}function vr(i,t,e,n){return L_(i,t)+I_(i,e)+D_(i,n)}function U_(i,t){let e=1-i;return e*e*e*t}function N_(i,t){let e=1-i;return 3*e*e*i*t}function O_(i,t){return 3*(1-i)*i*i*t}function F_(i,t){return i*i*i*t}function Mr(i,t,e,n,s){return U_(i,t)+N_(i,e)+O_(i,n)+F_(i,s)}var Qo=class extends Tn{constructor(t=new ht,e=new ht,n=new ht,s=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ht){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Mr(t,s.x,r.x,o.x,a.x),Mr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},jc=class extends Tn{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Mr(t,s.x,r.x,o.x,a.x),Mr(t,s.y,r.y,o.y,a.y),Mr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ta=class extends Tn{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qc=class extends Tn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ea=class extends Tn{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(vr(t,s.x,r.x,o.x),vr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},na=class extends Tn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(vr(t,s.x,r.x,o.x),vr(t,s.y,r.y,o.y),vr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ia=class extends Tn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Fu(a,c.x,l.x,h.x,u.x),Fu(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ht().fromArray(s))}return this}},tl=Object.freeze({__proto__:null,ArcCurve:Kc,CatmullRomCurve3:Fn,CubicBezierCurve:Qo,CubicBezierCurve3:jc,EllipseCurve:Pr,LineCurve:ta,LineCurve3:Qc,QuadraticBezierCurve:ea,QuadraticBezierCurve3:na,SplineCurve:ia}),el=class extends Tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new tl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new tl[s.type]().fromJSON(s))}return this}},sa=class extends el{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ta(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ea(this.currentPoint.clone(),new ht(t,e),new ht(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Qo(this.currentPoint.clone(),new ht(t,e),new ht(n,s),new ht(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ia(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new Pr(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Lr=class i extends de{constructor(t=[new ht(0,-.5),new ht(.5,0),new ht(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ze(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,u=new C,f=new ht,d=new C,g=new C,_=new C,m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(g)}for(let y=0;y<=e;y++){let x=n+y*h*s,M=Math.sin(x),b=Math.cos(x);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*M,u.y=t[T].y,u.z=t[T].x*b,o.push(u.x,u.y,u.z),f.x=y/e,f.y=T/(t.length-1),a.push(f.x,f.y);let S=c[3*T+0]*M,L=c[3*T+1],v=c[3*T+0]*b;l.push(S,L,v)}}for(let y=0;y<e;y++)for(let x=0;x<t.length-1;x++){let M=x+y*t.length,b=M,T=M+t.length,S=M+t.length+1,L=M+1;r.push(b,T,L),r.push(S,L,T)}this.setIndex(r),this.setAttribute("position",new Nt(o,3)),this.setAttribute("uv",new Nt(a,2)),this.setAttribute("normal",new Nt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Zs=class i extends de{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new C,h=new ht;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Nt(o,3)),this.setAttribute("normal",new Nt(a,3)),this.setAttribute("uv",new Nt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ee=class i extends de{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,_=[],m=n/2,p=0;y(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Nt(u,3)),this.setAttribute("normal",new Nt(f,3)),this.setAttribute("uv",new Nt(d,2));function y(){let M=new C,b=new C,T=0,S=(e-t)/n;for(let L=0;L<=r;L++){let v=[],E=L/r,U=E*(e-t)+t;for(let F=0;F<=s;F++){let q=F/s,P=q*c+a,D=Math.sin(P),O=Math.cos(P);b.x=U*D,b.y=-E*n+m,b.z=U*O,u.push(b.x,b.y,b.z),M.set(D,S,O).normalize(),f.push(M.x,M.y,M.z),d.push(q,1-E),v.push(g++)}_.push(v)}for(let L=0;L<s;L++)for(let v=0;v<r;v++){let E=_[v][L],U=_[v+1][L],F=_[v+1][L+1],q=_[v][L+1];h.push(E,U,q),h.push(U,F,q),T+=6}l.addGroup(p,T,0),p+=T}function x(M){let b=g,T=new ht,S=new C,L=0,v=M===!0?t:e,E=M===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*E,0),f.push(0,E,0),d.push(.5,.5),g++;let U=g;for(let F=0;F<=s;F++){let P=F/s*c+a,D=Math.cos(P),O=Math.sin(P);S.x=v*O,S.y=m*E,S.z=v*D,u.push(S.x,S.y,S.z),f.push(0,E,0),T.x=D*.5+.5,T.y=O*.5*E+.5,d.push(T.x,T.y),g++}for(let F=0;F<s;F++){let q=b+F,P=U+F;M===!0?h.push(P,P+1,q):h.push(P+1,P,q),L+=3}l.addGroup(p,L,M===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},is=class i extends Ee{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},nl=class i extends de{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Nt(r,3)),this.setAttribute("normal",new Nt(r.slice(),3)),this.setAttribute("uv",new Nt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let x=new C,M=new C,b=new C;for(let T=0;T<e.length;T+=3)d(e[T+0],x),d(e[T+1],M),d(e[T+2],b),c(x,M,b,y)}function c(y,x,M,b){let T=b+1,S=[];for(let L=0;L<=T;L++){S[L]=[];let v=y.clone().lerp(M,L/T),E=x.clone().lerp(M,L/T),U=T-L;for(let F=0;F<=U;F++)F===0&&L===T?S[L][F]=v:S[L][F]=v.clone().lerp(E,F/U)}for(let L=0;L<T;L++)for(let v=0;v<2*(T-L)-1;v++){let E=Math.floor(v/2);v%2===0?(f(S[L][E+1]),f(S[L+1][E]),f(S[L][E])):(f(S[L][E+1]),f(S[L+1][E+1]),f(S[L+1][E]))}}function l(y){let x=new C;for(let M=0;M<r.length;M+=3)x.x=r[M+0],x.y=r[M+1],x.z=r[M+2],x.normalize().multiplyScalar(y),r[M+0]=x.x,r[M+1]=x.y,r[M+2]=x.z}function h(){let y=new C;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];let M=m(y)/2/Math.PI+.5,b=p(y)/Math.PI+.5;o.push(M,1-b)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){let x=o[y+0],M=o[y+2],b=o[y+4],T=Math.max(x,M,b),S=Math.min(x,M,b);T>.9&&S<.1&&(x<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),b<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,x){let M=y*3;x.x=t[M+0],x.y=t[M+1],x.z=t[M+2]}function g(){let y=new C,x=new C,M=new C,b=new C,T=new ht,S=new ht,L=new ht;for(let v=0,E=0;v<r.length;v+=9,E+=6){y.set(r[v+0],r[v+1],r[v+2]),x.set(r[v+3],r[v+4],r[v+5]),M.set(r[v+6],r[v+7],r[v+8]),T.set(o[E+0],o[E+1]),S.set(o[E+2],o[E+3]),L.set(o[E+4],o[E+5]),b.copy(y).add(x).add(M).divideScalar(3);let U=m(b);_(T,E+0,y,U),_(S,E+2,x,U),_(L,E+4,M,U)}}function _(y,x,M,b){b<0&&y.x===1&&(o[x]=y.x-1),M.x===0&&M.z===0&&(o[x]=b/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var $s=class extends sa{constructor(t){super(t),this.uuid=as(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new sa().fromJSON(s))}return this}},B_={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=gd(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,d;if(n&&(r=V_(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],f=i[g+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return Ir(r,o,e,a,c,d,0),o}};function gd(i,t,e,n,s){let r,o;if(s===tx(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Bu(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Bu(r,i[r],i[r+1],o);return o&&ga(o,o.next)&&(Ur(o),o=o.next),o}function ss(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ga(e,e.next)||Ie(e.prev,e,e.next)===0)){if(Ur(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ir(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Z_(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?z_(i,n,s,r):H_(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Ur(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=k_(ss(i),t,e),Ir(i,t,e,n,s,r,2)):o===2&&G_(i,t,e,n,s,r):Ir(ss(i),t,e,n,s,r,1);break}}}function H_(i){let t=i.prev,e=i,n=i.next;if(Ie(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Fs(s,a,r,c,o,l,g.x,g.y)&&Ie(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function z_(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ie(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,_=a>c?a>l?a:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,p=il(d,g,t,e,n),y=il(_,m,t,e,n),x=i.prevZ,M=i.nextZ;for(;x&&x.z>=p&&M&&M.z<=y;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Fs(a,h,c,u,l,f,x.x,x.y)&&Ie(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Fs(a,h,c,u,l,f,M.x,M.y)&&Ie(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Fs(a,h,c,u,l,f,x.x,x.y)&&Ie(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=y;){if(M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Fs(a,h,c,u,l,f,M.x,M.y)&&Ie(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function k_(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!ga(s,r)&&_d(s,n,n.next,r)&&Dr(s,r)&&Dr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ur(n),Ur(n.next),n=i=r),n=n.next}while(n!==i);return ss(n)}function G_(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&K_(o,a)){let c=xd(o,a);o=ss(o,o.next),c=ss(c,c.next),Ir(o,t,e,n,s,r,0),Ir(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function V_(i,t,e,n){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=gd(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(J_(l));for(s.sort(W_),r=0;r<s.length;r++)e=X_(s[r],e);return e}function W_(i,t){return i.x-t.x}function X_(i,t){let e=Y_(i,t);if(!e)return t;let n=xd(e,i);return ss(n,n.next),ss(e,e.next)}function Y_(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Fs(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Dr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&q_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function q_(i,t){return Ie(i.prev,i,t.prev)<0&&Ie(t.next,i,i.next)<0}function Z_(i,t,e,n){let s=i;do s.z===0&&(s.z=il(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,$_(s)}function $_(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function il(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function J_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Fs(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function K_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!j_(i,t)&&(Dr(i,t)&&Dr(t,i)&&Q_(i,t)&&(Ie(i.prev,i,t.prev)||Ie(i,t.prev,t))||ga(i,t)&&Ie(i.prev,i,i.next)>0&&Ie(t.prev,t,t.next)>0)}function Ie(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ga(i,t){return i.x===t.x&&i.y===t.y}function _d(i,t,e,n){let s=Po(Ie(i,t,e)),r=Po(Ie(i,t,n)),o=Po(Ie(e,n,i)),a=Po(Ie(e,n,t));return!!(s!==r&&o!==a||s===0&&Co(i,e,t)||r===0&&Co(i,n,t)||o===0&&Co(e,i,n)||a===0&&Co(e,t,n))}function Co(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Po(i){return i>0?1:i<0?-1:0}function j_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&_d(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Dr(i,t){return Ie(i.prev,i,i.next)<0?Ie(i,t,i.next)>=0&&Ie(i,i.prev,t)>=0:Ie(i,t,i.prev)<0||Ie(i,i.next,t)<0}function Q_(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function xd(i,t){let e=new sl(i.i,i.x,i.y),n=new sl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Bu(i,t,e,n){let s=new sl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ur(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function sl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function tx(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Nn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Hu(t),zu(n,t);let o=t.length;e.forEach(Hu);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,zu(n,e[c]);let a=B_.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Hu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function zu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Li=class i extends nl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var ra=class i extends de{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,f=(e-t)/s,d=new C,g=new ht;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){let p=r+m/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<s;_++){let m=_*(n+1);for(let p=0;p<n;p++){let y=p+m,x=y,M=y+n+1,b=y+n+2,T=y+1;a.push(x,M,T),a.push(M,b,T)}}this.setIndex(a),this.setAttribute("position",new Nt(c,3)),this.setAttribute("normal",new Nt(l,3)),this.setAttribute("uv",new Nt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Nr=class i extends de{constructor(t=new $s([new ht(0,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Nt(s,3)),this.setAttribute("normal",new Nt(r,3)),this.setAttribute("uv",new Nt(o,2));function l(h){let u=s.length/3,f=h.extractPoints(e),d=f.shape,g=f.holes;Nn.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){let y=g[m];Nn.isClockWise(y)===!0&&(g[m]=y.reverse())}let _=Nn.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){let y=g[m];d=d.concat(y)}for(let m=0,p=d.length;m<p;m++){let y=d[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,p=_.length;m<p;m++){let y=_[m],x=y[0]+u,M=y[1]+u,b=y[2]+u;n.push(x,M,b),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return ex(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function ex(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Ii=class i extends de{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new C,f=new C,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let y=[],x=p/n,M=0;p===0&&o===0?M=.5/e:p===n&&c===Math.PI&&(M=-.5/e);for(let b=0;b<=e;b++){let T=b/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(T+M,1-x),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let x=h[p][y+1],M=h[p][y],b=h[p+1][y],T=h[p+1][y+1];(p!==0||o>0)&&d.push(x,M,T),(p!==n-1||c<Math.PI)&&d.push(M,b,T)}this.setIndex(d),this.setAttribute("position",new Nt(g,3)),this.setAttribute("normal",new Nt(_,3)),this.setAttribute("uv",new Nt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var oa=class i extends de{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new C,u=new C,f=new C;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){let _=g/s*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){let _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,y=(s+1)*d+g;o.push(_,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new Nt(a,3)),this.setAttribute("normal",new Nt(c,3)),this.setAttribute("uv",new Nt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Zn=class i extends de{constructor(t=new na(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new C,c=new C,l=new ht,h=new C,u=[],f=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Nt(u,3)),this.setAttribute("normal",new Nt(f,3)),this.setAttribute("uv",new Nt(d,2));function _(){for(let x=0;x<e;x++)m(x);m(r===!1?e:0),y(),p()}function m(x){h=t.getPointAt(x/e,h);let M=o.normals[x],b=o.binormals[x];for(let T=0;T<=s;T++){let S=T/s*Math.PI*2,L=Math.sin(S),v=-Math.cos(S);c.x=v*M.x+L*b.x,c.y=v*M.y+L*b.y,c.z=v*M.z+L*b.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=e;x++)for(let M=1;M<=s;M++){let b=(s+1)*(x-1)+(M-1),T=(s+1)*x+(M-1),S=(s+1)*x+M,L=(s+1)*(x-1)+M;g.push(b,T,L),g.push(T,S,L)}}function y(){for(let x=0;x<=e;x++)for(let M=0;M<=s;M++)l.x=x/e,l.y=M/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new tl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var ut=class extends Pi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=id,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Lo(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function nx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Js=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},rl=class extends Js{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zh,endingEnd:zh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case kh:r=t,a=2*e-n;break;case Gh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case kh:o=t,c=2*n-e;break;case Gh:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,y=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-d)*m+(1.5+d)*_+.5*g,M=d*m-d*_;for(let b=0;b!==a;++b)r[b]=p*o[h+b]+y*o[l+b]+x*o[c+b]+M*o[u+b];return r}},ol=class extends Js{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},al=class extends Js{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Bn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Lo(e,this.TimeBufferType),this.values=Lo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Lo(t.times,Array),values:Lo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new al(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ol(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new rl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Do:e=this.InterpolantFactoryMethodDiscrete;break;case Uo:e=this.InterpolantFactoryMethodLinear;break;case Qa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Do;case this.InterpolantFactoryMethodLinear:return Uo;case this.InterpolantFactoryMethodSmooth:return Qa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&nx(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Qa,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[f+g]||_!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=Uo;var rs=class extends Bn{};rs.prototype.ValueTypeName="bool";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=Do;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var cl=class extends Bn{};cl.prototype.ValueTypeName="color";var ll=class extends Bn{};ll.prototype.ValueTypeName="number";var hl=class extends Js{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)mn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Or=class extends Bn{InterpolantFactoryMethodLinear(t){return new hl(this.times,this.values,this.getValueSize(),t)}};Or.prototype.ValueTypeName="quaternion";Or.prototype.DefaultInterpolation=Uo;Or.prototype.InterpolantFactoryMethodSmooth=void 0;var os=class extends Bn{};os.prototype.ValueTypeName="string";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=Do;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;var ul=class extends Bn{};ul.prototype.ValueTypeName="vector";var ku={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},dl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},ix=new dl,Fr=class{constructor(t){this.manager=t!==void 0?t:ix,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Fr.DEFAULT_MATERIAL_NAME="__DEFAULT";var fl=class extends Fr{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=ku.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=Sr("img");function c(){h(),ku.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var aa=class extends Fr{constructor(t){super(t)}load(t,e,n,s){let r=new vn,o=new fl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Br=class extends $e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},ca=class extends Br{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Tc=new ge,Gu=new C,Vu=new C,la=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tr,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new Pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Gu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Gu),Vu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Vu),e.updateMatrixWorld(),Tc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Tc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Wu=new ge,mr=new C,Ac=new C,pl=class extends la{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new Pe(2,1,1,1),new Pe(0,1,1,1),new Pe(3,1,1,1),new Pe(1,1,1,1),new Pe(3,0,1,1),new Pe(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),mr.setFromMatrixPosition(t.matrixWorld),n.position.copy(mr),Ac.copy(n.position),Ac.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ac),n.updateMatrixWorld(),s.makeTranslation(-mr.x,-mr.y,-mr.z),Wu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wu)}},ha=class extends Br{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new pl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},ml=class extends la{constructor(){super(new Zo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ua=class extends Br{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.shadow=new ml}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Tl="\\[\\]\\.:\\/",sx=new RegExp("["+Tl+"]","g"),Al="[^"+Tl+"]",rx="[^"+Tl.replace("\\.","")+"]",ox=/((?:WC+[\/:])*)/.source.replace("WC",Al),ax=/(WCOD+)?/.source.replace("WCOD",rx),cx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Al),lx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Al),hx=new RegExp("^"+ox+ax+cx+lx+"$"),ux=["material","materials","bones","map"],gl=class{constructor(t,e,n){let s=n||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ce=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(sx,"")}static parseTrackName(t){let e=hx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ux.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=gl;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yy=new Float32Array(1);var da=class{constructor(t,e,n=0,s=1/0){this.ray=new ns(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new wr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return _l(t,this,n,e),n.sort(Xu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)_l(t[s],this,n,e);return n.sort(Xu),n}};function Xu(i,t){return i.distance-t.distance}function _l(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)_l(s[r],t,e,!0)}}var Hr=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ze(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xl);var yd={type:"change"},Rl={type:"start"},vd={type:"end"},_a=new ns,Md=new In,fx=Math.cos(70*od.DEG2RAD),xa=class extends qn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:je.ROTATE,MIDDLE:je.DOLLY,RIGHT:je.PAN},this.touches={ONE:un.ROTATE,TWO:un.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(I){I.addEventListener("keydown",at),this._domElementKeyEvents=I},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",at),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(yd),n.update(),r=s.NONE},this.update=function(){let I=new C,rt=new mn().setFromUnitVectors(t.up,new C(0,1,0)),_t=rt.clone().invert(),dt=new C,Ut=new mn,te=new C,ce=2*Math.PI;return function(gt=null){let N=n.object.position;I.copy(N).sub(n.target),I.applyQuaternion(rt),a.setFromVector3(I),n.autoRotate&&r===s.NONE&&U(v(gt)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let pt=n.minAzimuthAngle,mt=n.maxAzimuthAngle;isFinite(pt)&&isFinite(mt)&&(pt<-Math.PI?pt+=ce:pt>Math.PI&&(pt-=ce),mt<-Math.PI?mt+=ce:mt>Math.PI&&(mt-=ce),pt<=mt?a.theta=Math.max(pt,Math.min(mt,a.theta)):a.theta=a.theta>(pt+mt)/2?Math.max(pt,a.theta):Math.min(mt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&T||n.object.isOrthographicCamera?a.radius=k(a.radius):a.radius=k(a.radius*l),I.setFromSpherical(a),I.applyQuaternion(_t),N.copy(n.target).add(I),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0));let kt=!1;if(n.zoomToCursor&&T){let Ot=null;if(n.object.isPerspectiveCamera){let ue=I.length();Ot=k(ue*l);let pe=ue-Ot;n.object.position.addScaledVector(M,pe),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let ue=new C(b.x,b.y,0);ue.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),kt=!0;let pe=new C(b.x,b.y,0);pe.unproject(n.object),n.object.position.sub(pe).add(ue),n.object.updateMatrixWorld(),Ot=I.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ot!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ot).add(n.object.position):(_a.origin.copy(n.object.position),_a.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(_a.direction))<fx?t.lookAt(n.target):(Md.setFromNormalAndCoplanarPoint(n.object.up,n.target),_a.intersectPlane(Md,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),kt=!0);return l=1,T=!1,kt||dt.distanceToSquared(n.object.position)>o||8*(1-Ut.dot(n.object.quaternion))>o||te.distanceToSquared(n.target)>0?(n.dispatchEvent(yd),dt.copy(n.object.position),Ut.copy(n.object.quaternion),te.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Tt),n.domElement.removeEventListener("pointerdown",Dt),n.domElement.removeEventListener("pointercancel",w),n.domElement.removeEventListener("wheel",it),n.domElement.removeEventListener("pointermove",R),n.domElement.removeEventListener("pointerup",w),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",at),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,o=1e-6,a=new Hr,c=new Hr,l=1,h=new C,u=new ht,f=new ht,d=new ht,g=new ht,_=new ht,m=new ht,p=new ht,y=new ht,x=new ht,M=new C,b=new ht,T=!1,S=[],L={};function v(I){return I!==null?2*Math.PI/60*n.autoRotateSpeed*I:2*Math.PI/60/60*n.autoRotateSpeed}function E(I){let rt=Math.abs(I)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*rt)}function U(I){c.theta-=I}function F(I){c.phi-=I}let q=function(){let I=new C;return function(_t,dt){I.setFromMatrixColumn(dt,0),I.multiplyScalar(-_t),h.add(I)}}(),P=function(){let I=new C;return function(_t,dt){n.screenSpacePanning===!0?I.setFromMatrixColumn(dt,1):(I.setFromMatrixColumn(dt,0),I.crossVectors(n.object.up,I)),I.multiplyScalar(_t),h.add(I)}}(),D=function(){let I=new C;return function(_t,dt){let Ut=n.domElement;if(n.object.isPerspectiveCamera){let te=n.object.position;I.copy(te).sub(n.target);let ce=I.length();ce*=Math.tan(n.object.fov/2*Math.PI/180),q(2*_t*ce/Ut.clientHeight,n.object.matrix),P(2*dt*ce/Ut.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(q(_t*(n.object.right-n.object.left)/n.object.zoom/Ut.clientWidth,n.object.matrix),P(dt*(n.object.top-n.object.bottom)/n.object.zoom/Ut.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function O(I){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(I){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(I,rt){if(!n.zoomToCursor)return;T=!0;let _t=n.domElement.getBoundingClientRect(),dt=I-_t.left,Ut=rt-_t.top,te=_t.width,ce=_t.height;b.x=dt/te*2-1,b.y=-(Ut/ce)*2+1,M.set(b.x,b.y,1).unproject(n.object).sub(n.object.position).normalize()}function k(I){return Math.max(n.minDistance,Math.min(n.maxDistance,I))}function Y(I){u.set(I.clientX,I.clientY)}function nt(I){X(I.clientX,I.clientX),p.set(I.clientX,I.clientY)}function ot(I){g.set(I.clientX,I.clientY)}function V(I){f.set(I.clientX,I.clientY),d.subVectors(f,u).multiplyScalar(n.rotateSpeed);let rt=n.domElement;U(2*Math.PI*d.x/rt.clientHeight),F(2*Math.PI*d.y/rt.clientHeight),u.copy(f),n.update()}function et(I){y.set(I.clientX,I.clientY),x.subVectors(y,p),x.y>0?O(E(x.y)):x.y<0&&H(E(x.y)),p.copy(y),n.update()}function st(I){_.set(I.clientX,I.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),D(m.x,m.y),g.copy(_),n.update()}function Mt(I){X(I.clientX,I.clientY),I.deltaY<0?H(E(I.deltaY)):I.deltaY>0&&O(E(I.deltaY)),n.update()}function vt(I){let rt=!1;switch(I.code){case n.keys.UP:I.ctrlKey||I.metaKey||I.shiftKey?F(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,n.keyPanSpeed),rt=!0;break;case n.keys.BOTTOM:I.ctrlKey||I.metaKey||I.shiftKey?F(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,-n.keyPanSpeed),rt=!0;break;case n.keys.LEFT:I.ctrlKey||I.metaKey||I.shiftKey?U(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(n.keyPanSpeed,0),rt=!0;break;case n.keys.RIGHT:I.ctrlKey||I.metaKey||I.shiftKey?U(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(-n.keyPanSpeed,0),rt=!0;break}rt&&(I.preventDefault(),n.update())}function Ct(I){if(S.length===1)u.set(I.pageX,I.pageY);else{let rt=ae(I),_t=.5*(I.pageX+rt.x),dt=.5*(I.pageY+rt.y);u.set(_t,dt)}}function It(I){if(S.length===1)g.set(I.pageX,I.pageY);else{let rt=ae(I),_t=.5*(I.pageX+rt.x),dt=.5*(I.pageY+rt.y);g.set(_t,dt)}}function At(I){let rt=ae(I),_t=I.pageX-rt.x,dt=I.pageY-rt.y,Ut=Math.sqrt(_t*_t+dt*dt);p.set(0,Ut)}function ft(I){n.enableZoom&&At(I),n.enablePan&&It(I)}function B(I){n.enableZoom&&At(I),n.enableRotate&&Ct(I)}function Rt(I){if(S.length==1)f.set(I.pageX,I.pageY);else{let _t=ae(I),dt=.5*(I.pageX+_t.x),Ut=.5*(I.pageY+_t.y);f.set(dt,Ut)}d.subVectors(f,u).multiplyScalar(n.rotateSpeed);let rt=n.domElement;U(2*Math.PI*d.x/rt.clientHeight),F(2*Math.PI*d.y/rt.clientHeight),u.copy(f)}function Et(I){if(S.length===1)_.set(I.pageX,I.pageY);else{let rt=ae(I),_t=.5*(I.pageX+rt.x),dt=.5*(I.pageY+rt.y);_.set(_t,dt)}m.subVectors(_,g).multiplyScalar(n.panSpeed),D(m.x,m.y),g.copy(_)}function Ht(I){let rt=ae(I),_t=I.pageX-rt.x,dt=I.pageY-rt.y,Ut=Math.sqrt(_t*_t+dt*dt);y.set(0,Ut),x.set(0,Math.pow(y.y/p.y,n.zoomSpeed)),O(x.y),p.copy(y);let te=(I.pageX+rt.x)*.5,ce=(I.pageY+rt.y)*.5;X(te,ce)}function wt(I){n.enableZoom&&Ht(I),n.enablePan&&Et(I)}function se(I){n.enableZoom&&Ht(I),n.enableRotate&&Rt(I)}function Dt(I){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(I.pointerId),n.domElement.addEventListener("pointermove",R),n.domElement.addEventListener("pointerup",w)),Gt(I),I.pointerType==="touch"?Pt(I):W(I))}function R(I){n.enabled!==!1&&(I.pointerType==="touch"?yt(I):lt(I))}function w(I){qt(I),S.length===0&&(n.domElement.releasePointerCapture(I.pointerId),n.domElement.removeEventListener("pointermove",R),n.domElement.removeEventListener("pointerup",w)),n.dispatchEvent(vd),r=s.NONE}function W(I){let rt;switch(I.button){case 0:rt=n.mouseButtons.LEFT;break;case 1:rt=n.mouseButtons.MIDDLE;break;case 2:rt=n.mouseButtons.RIGHT;break;default:rt=-1}switch(rt){case je.DOLLY:if(n.enableZoom===!1)return;nt(I),r=s.DOLLY;break;case je.ROTATE:if(I.ctrlKey||I.metaKey||I.shiftKey){if(n.enablePan===!1)return;ot(I),r=s.PAN}else{if(n.enableRotate===!1)return;Y(I),r=s.ROTATE}break;case je.PAN:if(I.ctrlKey||I.metaKey||I.shiftKey){if(n.enableRotate===!1)return;Y(I),r=s.ROTATE}else{if(n.enablePan===!1)return;ot(I),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Rl)}function lt(I){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;V(I);break;case s.DOLLY:if(n.enableZoom===!1)return;et(I);break;case s.PAN:if(n.enablePan===!1)return;st(I);break}}function it(I){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(I.preventDefault(),n.dispatchEvent(Rl),Mt(I),n.dispatchEvent(vd))}function at(I){n.enabled===!1||n.enablePan===!1||vt(I)}function Pt(I){switch(ct(I),S.length){case 1:switch(n.touches.ONE){case un.ROTATE:if(n.enableRotate===!1)return;Ct(I),r=s.TOUCH_ROTATE;break;case un.PAN:if(n.enablePan===!1)return;It(I),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case un.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ft(I),r=s.TOUCH_DOLLY_PAN;break;case un.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;B(I),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Rl)}function yt(I){switch(ct(I),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Rt(I),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;Et(I),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;wt(I),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;se(I),n.update();break;default:r=s.NONE}}function Tt(I){n.enabled!==!1&&I.preventDefault()}function Gt(I){S.push(I.pointerId)}function qt(I){delete L[I.pointerId];for(let rt=0;rt<S.length;rt++)if(S[rt]==I.pointerId){S.splice(rt,1);return}}function ct(I){let rt=L[I.pointerId];rt===void 0&&(rt=new ht,L[I.pointerId]=rt),rt.set(I.pageX,I.pageY)}function ae(I){let rt=I.pointerId===S[0]?S[1]:S[0];return L[rt]}n.domElement.addEventListener("contextmenu",Tt),n.domElement.addEventListener("pointerdown",Dt),n.domElement.addEventListener("pointercancel",w),n.domElement.addEventListener("wheel",it,{passive:!1}),this.update()}};var ya=class extends xa{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:je.PAN,MIDDLE:je.DOLLY,RIGHT:je.ROTATE},this.touches={ONE:un.PAN,TWO:un.DOLLY_ROTATE}}};var zr=new C;function An(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;zr.copy(t),zr[n]=0,zr.normalize();let l=.5*o/(o+a),h=1-zr.angleTo(i)/c;return Math.sign(zr[e])===1?h*l:a/(o+a)+l+l*(1-h)}var cs=class extends we{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new C,c=new C,l=new C(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,d=h.length/6,g=new C,_=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/d)){case 0:g.set(1,0,0),f[p+0]=An(g,c,"z","y",r,n),f[p+1]=1-An(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),f[p+0]=1-An(g,c,"z","y",r,n),f[p+1]=1-An(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),f[p+0]=1-An(g,c,"x","z",r,t),f[p+1]=An(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),f[p+0]=1-An(g,c,"x","z",r,t),f[p+1]=1-An(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),f[p+0]=1-An(g,c,"x","y",r,t),f[p+1]=1-An(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),f[p+0]=An(g,c,"x","y",r,t),f[p+1]=1-An(g,c,"y","x",r,e);break}}};function va(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new de,l=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=i[f].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Ed(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][f]);let g=Ed(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Ed(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let o=new t(r),a=0;for(let l=0;l<i.length;++l)o.set(i[l].array,a),a+=i[l].array.length;let c=new ve(o,e,n);return s!==void 0&&(c.gpuType=s),c}function Cl(i,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let y=0,x=a.length;y<x;y++){let M=a[y],b=i.attributes[M];c[M]=new ve(new b.array.constructor(b.count*b.itemSize),b.itemSize,b.normalized);let T=i.morphAttributes[M];T&&(l[M]=new ve(new T.array.constructor(T.count*T.itemSize),T.itemSize,T.normalized))}let d=t*.5,g=Math.log10(1/t),_=Math.pow(10,g),m=d*_;for(let y=0;y<r;y++){let x=n?n.getX(y):y,M="";for(let b=0,T=a.length;b<T;b++){let S=a[b],L=i.getAttribute(S),v=L.itemSize;for(let E=0;E<v;E++)M+=`${~~(L[u[E]](x)*_+m)},`}if(M in e)h.push(e[M]);else{for(let b=0,T=a.length;b<T;b++){let S=a[b],L=i.getAttribute(S),v=i.morphAttributes[S],E=L.itemSize,U=c[S],F=l[S];for(let q=0;q<E;q++){let P=u[q],D=f[q];if(U[D](o,L[P](x)),v)for(let O=0,H=v.length;O<H;O++)F[O][D](o,v[O][P](x))}}e[M]=o,h.push(o),o++}}let p=i.clone();for(let y in i.attributes){let x=c[y];if(p.setAttribute(y,new ve(x.array.slice(0,o*x.itemSize),x.itemSize,x.normalized)),y in l)for(let M=0;M<l[y].length;M++){let b=l[y][M];p.morphAttributes[y][M]=new ve(b.array.slice(0,o*b.itemSize),b.itemSize,b.normalized)}}return p.setIndex(h),p}var Ma=class extends Ys{constructor(t=null){super();let e=new we;e.deleteAttribute("uv");let n=new ut({side:ke}),s=new ut,r=5;t!==null&&t._useLegacyLights===!1&&(r=900);let o=new ha(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new j(e,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let c=new j(e,s);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);let l=new j(e,s);l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),this.add(l);let h=new j(e,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let u=new j(e,s);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let f=new j(e,s);f.position.set(2.291,-.756,-2.621),f.rotation.set(0,-.286,0),f.scale.set(1.546,1.552,1.496),this.add(f);let d=new j(e,s);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);let g=new j(e,js(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let _=new j(e,js(50));_.position.set(-16.109,18.021,-8.207),_.scale.set(.1,2.425,2.751),this.add(_);let m=new j(e,js(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let p=new j(e,js(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let y=new j(e,js(20));y.position.set(3.235,11.486,-12.541),y.scale.set(2.5,2,.1),this.add(y);let x=new j(e,js(100));x.position.set(0,20,0),x.scale.set(1,.1,1),this.add(x)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function js(i){let t=new li;return t.color.setScalar(i),t}var Ea=class extends $e{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new ht(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof Element&&e.element.parentNode!==null&&e.element.parentNode.removeChild(e.element)})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}},Qs=new C,bd=new ge,Sd=new ge,wd=new C,Td=new C,ba=class{constructor(t={}){let e=this,n,s,r,o,a={objects:new WeakMap},c=t.element!==void 0?t.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c,this.getSize=function(){return{width:n,height:s}},this.render=function(d,g){d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),bd.copy(g.matrixWorldInverse),Sd.multiplyMatrices(g.projectionMatrix,bd),l(d,d,g),f(d)},this.setSize=function(d,g){n=d,s=g,r=n/2,o=s/2,c.style.width=d+"px",c.style.height=g+"px"};function l(d,g,_){if(d.isCSS2DObject){Qs.setFromMatrixPosition(d.matrixWorld),Qs.applyMatrix4(Sd);let m=d.visible===!0&&Qs.z>=-1&&Qs.z<=1&&d.layers.test(_.layers)===!0;if(d.element.style.display=m===!0?"":"none",m===!0){d.onBeforeRender(e,g,_);let y=d.element;y.style.transform="translate("+-100*d.center.x+"%,"+-100*d.center.y+"%)translate("+(Qs.x*r+r)+"px,"+(-Qs.y*o+o)+"px)",y.parentNode!==c&&c.appendChild(y),d.onAfterRender(e,g,_)}let p={distanceToCameraSquared:h(_,d)};a.objects.set(d,p)}for(let m=0,p=d.children.length;m<p;m++)l(d.children[m],g,_)}function h(d,g){return wd.setFromMatrixPosition(d.matrixWorld),Td.setFromMatrixPosition(g.matrixWorld),wd.distanceToSquared(Td)}function u(d){let g=[];return d.traverse(function(_){_.isCSS2DObject&&g.push(_)}),g}function f(d){let g=u(d).sort(function(m,p){if(m.renderOrder!==p.renderOrder)return p.renderOrder-m.renderOrder;let y=a.objects.get(m).distanceToCameraSquared,x=a.objects.get(p).distanceToCameraSquared;return y-x}),_=g.length;for(let m=0,p=g.length;m<p;m++)g[m].element.style.zIndex=_-m}}};var Xe={lot:[[1400,1686],[482,1686],[482,100],[1384.33,100],[1400,1686]],roofA:[[1311,700.47],[883.85,710],[880.64,644.31],[568.52,652.79],[563,368.37],[593.95,367.74],[595.24,367.72],[802.87,363.48],[875.05,362],[873.45,468.62],[1308.7,467.03],[1309.35,533.52],[1311,700.47]],roofB:[[568.48,652.83],[570.58,963.98],[1306.12,953.37],[1305.07,700.52],[881.28,710.05],[878.13,644.36],[568.48,652.83]],patio:[[1306.12,953.37],[1306.68,1107.32],[1023.4,1109],[1024.54,957.39],[1306.12,953.37]],awning:[[957.14,909.69],[956.54,965.41],[1027.63,963.12],[1028.14,908.68],[957.14,909.69]],awningC:[994.56,925.43,13.12],awningLow:[[1027.63,963.12],[956.54,965.41],[957.14,909.69],[956.73,947.86],[1027.58,946.02],[1027.63,963.12]],driveway:[[841.46,363.73],[598.94,369.43],[592,-97],[841,-97]],porch:[[966.76,369.45],[967.14,469.74],[874.96,470.08],[876.54,368.11],[966.76,369.45]],frontRock:[[1359.75,537.27],[1307.4,534.81],[1306.75,468.49],[874.96,470.08],[876.54,363.73],[804.93,365.21],[805,364.58],[841.45,363.73],[841,52],[868,62],[898,92],[924,128],[944,168],[958,214],[966,262],[971,304],[972.27,307.43],[972.17,316.13],[972.5,328.64],[973.65,343.32],[976.03,358.53],[980.05,372.65],[986.09,384.03],[994.58,391.03],[1016.28,392.74],[1057.5,391.8],[1111.89,391.89],[1173.12,396.72],[1234.86,409.98],[1290.77,435.36],[1334.51,476.56],[1359.75,537.27]],trees:[[1249.39,149.05,54.05],[1201.45,196.43,44.99],[1189.9,141.33,31.8],[1245.93,203.33,34.71],[1370.34,541.88,38.64],[1336.05,575.75,32.16],[1327.8,536.36,22.75],[1367.85,580.7,24.82]],basalt:[[1394.6,1681.46],[1389.61,1106.37],[1027.36,1108.7],[1027.5,1051.5],[1027.5,957.5],[574.54,970.78],[573.18,765.33],[485.87,765.33],[485.87,1049.75],[717.86,1047.18],[949.85,1044.61],[949.85,1679.5],[1394.6,1681.46]],edgeLine:[[488,1049],[950,1044]],acPad:[[516,958],[516,866],[488,866],[488,958],[516,958]],mulch:[[949.85,988.06],[574.61,991.42],[574.54,964.07],[949.85,957.65],[949.85,988.06]],bins:[[[[516.6,798.42],[516.6,773.4],[494.91,773.4],[494.91,798.42],[516.6,798.42]],"#5671BC"],[[[516.6,828.5],[516.6,803.48],[494.91,803.48],[494.91,828.5],[516.6,828.5]],"#B07953"],[[[516.6,859.91],[516.6,834.89],[494.91,834.89],[494.91,859.91],[516.6,859.91]],"#73965D"]],wedge:[[1306.68,1107],[1386,1106.61],[1385.47,1053.07],[1306,951],[1306.68,1107]],fence:[[573.18,765.33],[485.87,765.33],[485.87,1681.46],[1394.6,1681.46],[1387.64,1052.39],[1304,945.5]],nbr:[[[[1409,318.54],[1799,292.42],[1799,765.33],[1452.79,773.4],[1409,318.54]],"#918A98"],[[[1460.3,1077.33],[1452.79,773.4],[1799,765.33],[1799,1080.37],[1460.3,1077.33]],"#BEB3B2"],[[[1452.79,99.81],[1452.79,318.54],[1799,292.42],[1799,99.81],[1452.79,99.81]],"#E5CFC2"],[[[1389.77,598.19],[1395,1053.69],[1402.5,1811.19],[1800.5,1811.19],[1800.5,1080.56],[1462.32,1077.52],[1454.82,773.59],[1411.08,318.73],[1454.82,318.73],[1454.82,100],[1386,100],[1389.77,598.19]],"#9BA773"],[[[1682.15,1586.34],[1445.86,1586.34],[1445.86,1738.26],[1682.15,1738.26],[1682.15,1586.34]],"#F1FBEA"],[[[481.51,1811],[1402.25,1811],[1399.85,1685.98],[481.51,1686.03],[481.51,1811]],"#9BA773"],[[[270.8,99.81],[481.51,99.81],[481.51,1811],[95,1811],[95,1099.19],[399.37,1077.33],[270.8,99.81]],"#9BA773"],[[[402.79,387.72],[95,387.72],[95,732.39],[402.79,732.39],[402.79,387.72]],"#918A98"],[[[402.79,1077.33],[402.79,732.39],[95,732.39],[95,1099.19],[402.79,1077.33]],"#BEB3B2"],[[[339.57,99.81],[95,99.81],[95,387.72],[339.57,387.72],[339.57,99.81]],"#E5CFC2"]],chips:[[1367,1679],[1027,1678.9],[1027.58,1108.56],[1367,1106],[1367,1392.5],[1367,1679]],wallBase:[[1025,1108],[1036,1108],[1036,1679],[1025,1679]],pavers:[[980.68,1331.36,1004.84,1354.55],[980.68,1365.64,1004.84,1388.83],[980.68,1297.11,1004.84,1320.3],[980.68,1262.83,1004.84,1286.02],[980.68,1228.55,1004.84,1251.74],[980.68,1194.27,1004.84,1217.46],[980.68,1160.02,1004.84,1183.2],[980.68,1125.74,1004.84,1148.92],[980.68,1605.57,1004.84,1628.76],[980.68,1639.83,1004.84,1663.02],[980.68,1571.29,1004.84,1594.48],[980.68,1537.02,1004.84,1560.2],[980.68,1502.74,1004.84,1525.93],[980.68,1468.48,1004.84,1491.67],[980.68,1434.2,1004.84,1457.39],[980.68,1399.94,1004.84,1423.13],[980.68,1091.46,1004.84,1114.65],[980.68,1057.18,1004.84,1080.37],[980.68,1022.92,1004.84,1046.11],[980.68,988.64,1004.84,1011.83],[522.28,938.02,543.97,961.83],[522.28,972.3,543.97,994.9],[522.26,824.4,543.95,848.22],[522.28,900.14,543.97,923.95],[522.28,862.26,543.97,886.08],[522.26,786.52,543.95,810.34],[548.38,938.02,570.07,961.83],[548.38,824.4,570.07,848.22],[548.4,900.14,570.09,923.95],[548.4,862.28,570.09,886.1],[548.38,786.52,570.07,810.34],[557.28,1008.14,580.58,1032.36],[522.26,1008.39,545.56,1032.6],[592.28,1007.87,615.58,1032.09],[627.3,1007.63,650.6,1031.84],[662.32,1007.36,685.62,1031.6],[697.32,1007.11,720.62,1031.33],[732.34,1006.87,755.64,1031.08],[767.34,1006.6,790.67,1030.84],[802.36,1006.35,825.66,1030.57],[837.38,1006.11,860.69,1030.32],[872.38,1005.84,895.69,1030.06],[907.4,1005.59,930.71,1029.81],[1063,1336.44,1086.97,1360.89],[1096.84,1336.44,1120.8,1360.89],[1096.75,1408.55,1120.71,1433],[1063,1408.55,1086.97,1433],[1063,1372.49,1086.97,1396.95],[1097.03,1372.49,1121,1396.95]],walls:[[950,958,961,966,0],[949.85,966.6,960.83,980.71,0],[949.85,981.4,960.83,995.51,0],[949.85,996.22,960.83,1010.33,0],[949.85,1011.03,960.83,1025.13,0],[949.85,1025.83,960.83,1039.94,0],[949.85,1040.65,960.83,1054.76,0],[949.85,1055.46,960.83,1069.57,0],[949.85,1070.28,960.83,1084.39,0],[949.85,1529.46,960.83,1543.57,0],[949.85,1544.26,960.83,1558.37,0],[949.85,1559.09,960.83,1573.2,0],[949.85,1573.89,960.83,1588,0],[949.85,1588.71,960.83,1602.82,0],[949.85,1603.52,960.83,1617.63,0],[949.85,1618.32,960.83,1632.43,0],[949.85,1633.14,960.83,1647.25,0],[949.85,1647.95,960.83,1662.05,0],[950,1663,961,1679,0],[949.85,1085.08,960.83,1099.19,0],[949.85,1099.91,960.83,1114.02,0],[949.85,1114.71,960.83,1128.82,0],[949.85,1129.51,960.83,1143.62,0],[949.85,1144.34,960.83,1158.45,0],[949.85,1159.14,960.83,1173.25,0],[949.85,1173.97,960.83,1188.08,0],[949.85,1188.77,960.83,1202.88,0],[949.85,1203.6,960.83,1217.71,0],[949.85,1218.4,960.83,1232.51,0],[949.85,1233.2,960.83,1247.31,0],[949.85,1248.03,960.83,1262.14,0],[949.85,1262.83,960.83,1276.94,0],[949.85,1277.65,960.83,1291.76,0],[949.85,1292.46,960.83,1306.57,0],[949.85,1307.26,960.83,1321.37,0],[949.85,1322.08,960.83,1336.19,0],[949.85,1336.89,960.83,1351,0],[949.85,1351.71,960.83,1365.82,0],[949.85,1366.52,960.83,1380.63,0],[949.85,1381.34,960.83,1395.45,0],[949.85,1396.14,960.83,1410.25,0],[949.85,1410.95,960.83,1425.06,0],[949.85,1425.77,960.83,1439.88,0],[949.85,1440.57,960.83,1454.68,0],[949.85,1455.4,960.83,1469.51,0],[949.85,1470.2,960.83,1484.31,0],[949.85,1485.03,960.83,1499.14,0],[949.85,1499.83,960.83,1513.94,0],[949.85,1514.63,960.83,1528.74,0],[1025,1108,1036,1123.13,0],[1025,1124.13,1036,1139.26,0],[1025,1140.26,1036,1155.4,0],[1025,1156.4,1036,1171.53,0],[1025,1172.53,1036,1187.66,0],[1025,1188.66,1035.98,1203.53,0],[1025,1204.53,1035.98,1219.39,0],[1025,1220.39,1035.98,1235.26,0],[1025,1236.26,1035.98,1251.12,0],[1025,1252.12,1035.98,1266.99,0],[1025,1267.99,1035.98,1282.85,0],[1025,1283.85,1035.98,1298.72,0],[1025,1299.72,1035.98,1314.58,0],[1025,1315.58,1035.98,1330.45,0],[1025,1331.45,1035.98,1346.31,0],[1025,1347.31,1035.98,1362.18,0],[1025,1363.18,1035.98,1378.04,0],[1025,1379.04,1035.98,1393.91,0],[1025,1394.91,1035.98,1409.77,0],[1025,1410.77,1035.98,1425.64,0],[1025,1426.64,1035.98,1441.5,0],[1025,1442.5,1035.98,1457.37,0],[1025,1458.37,1035.98,1473.23,0],[1025,1474.23,1035.98,1489.1,0],[1025,1490.1,1035.98,1504.96,0],[1025,1505.96,1035.98,1520.83,0],[1025,1521.83,1035.98,1536.7,0],[1025,1537.7,1035.98,1552.56,0],[1025,1553.56,1035.98,1568.43,0],[1025,1569.43,1035.98,1584.29,0],[1025,1585.29,1035.98,1600.16,0],[1025,1601.16,1035.98,1616.02,0],[1025,1617.02,1035.98,1631.89,0],[1025,1632.89,1035.98,1647.75,0],[1025,1648.75,1035.98,1663.62,0],[1025,1664.62,1036,1678.62,0],[1032,1454,1367,1465,1],[1359.55,1454,1374.42,1464.98,1],[1343.69,1454,1358.55,1464.98,1],[1327.82,1454,1342.69,1464.98,1],[1311.96,1454,1326.82,1464.98,1],[1296.09,1454,1310.96,1464.98,1],[1280.23,1454,1295.09,1464.98,1],[1264.36,1454,1279.23,1464.98,1],[1248.5,1454,1263.36,1464.98,1],[1232.63,1454,1247.5,1464.98,1],[1216.77,1454,1231.63,1464.98,1],[1200.9,1454,1215.77,1464.98,1],[1185.04,1454,1199.9,1464.98,1],[1169.17,1454,1184.04,1464.98,1],[1153.3,1454,1168.17,1464.98,1],[1137.44,1454,1152.3,1464.98,1],[1121.57,1454,1136.44,1464.98,1],[1105.71,1454,1120.57,1464.98,1],[1089.84,1454,1104.71,1464.98,1],[1073.98,1454,1088.84,1464.98,1],[1058.11,1454,1072.98,1464.98,1],[1042.25,1454,1057.11,1464.98,1],[1026.38,1454,1041.25,1464.98,1]],pad:[[1344,1319],[1305.73,1319],[1300.06,1306.35],[1292.61,1294.82],[1283.56,1284.58],[1273.08,1275.8],[1261.35,1268.67],[1248.55,1263.35],[1234.85,1260.04],[1220.43,1258.89],[1206.01,1260.04],[1192.31,1263.35],[1179.51,1268.67],[1167.78,1275.8],[1157.3,1284.58],[1148.25,1294.82],[1140.8,1306.35],[1135.13,1319],[1057,1319],[1057,1151],[1344,1151],[1344,1319]],ring:[1219.87,1349.94,86],hose:[[1276.74,1368.21],[1318.31,1366.79],[1317.44,1341.4],[1291.5,1342.44]],pumpOuter:[1318.05,1361.86,13.49],pumpInner:[1318.05,1361.86,8.5],pool:[1218.87,1349.99,72.5],furniture:{"furniture-1":{frame:[[1207.14,1166.31],[1182.15,1167.04],[1184.01,1246],[1209,1245.27],[1207.14,1166.31]],back:[[1207.14,1166.21],[1182.15,1166.94],[1182.93,1200.13],[1207.92,1199.41],[1207.14,1166.21]]},"furniture-2":{frame:[[1266,1168.19],[1241,1168.19],[1241,1247],[1266,1247],[1266,1168.19]],back:[[1266,1168.11],[1241,1168.11],[1241,1195.82],[1266,1195.82],[1266,1168.11]]},"furniture-3":{frame:[[1219,1177.69],[1219,1184.56],[1219.08,1185.37],[1219.31,1186.12],[1219.68,1186.8],[1220.17,1187.39],[1220.76,1187.88],[1221.44,1188.25],[1222.19,1188.48],[1223,1188.56],[1231,1188.56],[1231.81,1188.48],[1232.56,1188.25],[1233.24,1187.88],[1233.83,1187.39],[1234.32,1186.8],[1234.69,1186.12],[1234.92,1185.37],[1235,1184.56],[1235,1177.69],[1234.92,1176.88],[1234.69,1176.13],[1234.32,1175.45],[1233.83,1174.86],[1233.24,1174.37],[1232.56,1174],[1231.81,1173.77],[1231,1173.69],[1223,1173.69],[1222.19,1173.77],[1221.44,1174],[1220.76,1174.37],[1220.17,1174.86],[1219.68,1175.45],[1219.31,1176.13],[1219.08,1176.88],[1219,1177.69]]},"furniture-4":{frame:[[1321,1168.19],[1296,1168.19],[1296,1247],[1321,1247],[1321,1168.19]],back:[[1321,1168.11],[1296,1168.11],[1296,1195.82],[1321,1195.82],[1321,1168.11]]},"furniture-5":{frame:[[1274,1177.69],[1274,1184.56],[1274.08,1185.37],[1274.31,1186.12],[1274.68,1186.8],[1275.17,1187.39],[1275.76,1187.88],[1276.44,1188.25],[1277.19,1188.48],[1278,1188.56],[1286,1188.56],[1286.81,1188.48],[1287.56,1188.25],[1288.24,1187.88],[1288.83,1187.39],[1289.32,1186.8],[1289.69,1186.12],[1289.92,1185.37],[1290,1184.56],[1290,1177.69],[1289.92,1176.88],[1289.69,1176.13],[1289.32,1175.45],[1288.83,1174.86],[1288.24,1174.37],[1287.56,1174],[1286.81,1173.77],[1286,1173.69],[1278,1173.69],[1277.19,1173.77],[1276.44,1174],[1275.76,1174.37],[1275.17,1174.86],[1274.68,1175.45],[1274.31,1176.13],[1274.08,1176.88],[1274,1177.69]]},"furniture-6":{frame:[[1080.34,1267.08],[1082.71,1295.59],[1123.62,1292.19],[1121.25,1263.68],[1080.34,1267.08]],back:[[1080.29,1267.09],[1082.66,1295.59],[1099.85,1294.17],[1097.48,1265.66],[1080.29,1267.09]]},"furniture-7":{frame:[[1098.55,1198.84],[1086.52,1224.8],[1123.77,1242.05],[1135.8,1216.1],[1098.55,1198.84]],back:[[1098.5,1198.82],[1086.48,1224.78],[1102.13,1232.03],[1114.16,1206.07],[1098.5,1198.82]]},"furniture-8":{frame:[[1086.19,1244.65],[1084.83,1252.53],[1084.77,1253.34],[1084.87,1254.12],[1085.12,1254.85],[1085.5,1255.52],[1086,1256.1],[1086.6,1256.58],[1087.3,1256.93],[1088.08,1257.15],[1095.96,1258.52],[1096.77,1258.58],[1097.55,1258.48],[1098.28,1258.23],[1098.95,1257.85],[1099.53,1257.35],[1100.01,1256.75],[1100.37,1256.05],[1100.59,1255.27],[1101.96,1247.38],[1102.02,1246.57],[1101.92,1245.8],[1101.67,1245.06],[1101.29,1244.4],[1100.79,1243.82],[1100.18,1243.34],[1099.48,1242.98],[1098.7,1242.76],[1090.82,1241.39],[1090.01,1241.33],[1089.23,1241.43],[1088.5,1241.68],[1087.83,1242.06],[1087.25,1242.56],[1086.77,1243.17],[1086.41,1243.87],[1086.19,1244.65]]}},turf:[[1055,1649],[1055,1492],[1352,1492],[1352,1649]],shed:[[1287,1505.38],[1287,1602.87],[1339,1602.87],[1339,1505.38],[1287,1505.38]],planters:[[[1289.08,1410.01,10.78],[1289.08,1410.01,9.47],[1289.08,1410.01,6.86]],[[1321.07,1321.01,10.78],[1321.08,1321.01,9.47],[1321.08,1321.01,6.86]],[[1085.93,1181.87,10.78],[1085.93,1181.87,9.47],[1085.93,1181.87,6.86]],[[1103.93,1171.87,10.78],[1103.93,1171.87,9.47],[1103.93,1171.87,6.86]],[[1301.08,1387.01,10.78],[1301.08,1387.01,9.47],[1301.08,1387.01,6.86]],[[1316.15,1408.08,16.61],[1316.15,1408.08,14.6],[1316.15,1408.08,10.57]]],boulders:[[[1278.32,1429.2,7.45,"#D4C8BE"],[1287.22,1424.16,2.77,"#CAC6C3"],[1276.32,1421.69,2.77,"#CAC6C3"],[1273.37,1441.72,2.77,"#CAC6C3"],[1276.85,1437.96,2.77,"#A38B7A"],[1267.74,1430.09,2.77,"#CAC6C3"],[1269.47,1420.91,6.55,"#A38B7A"],[1261.74,1430.68,4.93,"#AAA29B"],[1276.7,1414.02,4.93,"#AAA29B"],[1282.49,1421.05,3.46,"#AAA29B"],[1267.89,1437.82,3.28,"#CAC6C3"]],[[1158.32,1429.2,7.45,"#D4C8BE"],[1167.22,1424.16,2.77,"#CAC6C3"],[1156.32,1421.69,2.77,"#CAC6C3"],[1153.37,1441.72,2.77,"#CAC6C3"],[1156.85,1437.96,2.77,"#A38B7A"],[1147.74,1430.09,2.77,"#CAC6C3"],[1149.47,1420.91,6.55,"#A38B7A"],[1141.74,1430.68,4.93,"#AAA29B"],[1156.7,1414.02,4.93,"#AAA29B"],[1162.49,1421.05,3.46,"#AAA29B"],[1147.89,1437.82,3.28,"#CAC6C3"]]],umbrella:[[[1164.96,1472.43],[1257.43,1351.47],[1136.47,1259.01],[1044.01,1379.96],[1164.96,1472.43]],[[1157.63,1417.49],[1202.49,1358.81],[1143.81,1313.95],[1098.95,1372.63],[1157.63,1417.49]],[[1106.18,1445.65],[1127.87,1417.28],[1099.5,1395.59],[1077.81,1423.96],[1106.18,1445.65]]],epanel:[[[1326,1497],[1341,1497],[1341,1500],[1326,1500]],[[1329.75,1500],[1337.25,1500],[1337.25,1506],[1329.75,1506]]]};Xe.pavers.forEach(i=>{i[0]>1050&&i[0]<1130&&i[1]>1330&&(i[0]-=5.67,i[2]-=5.67,i[1]+=7.28,i[3]+=7.28)});{let i=(t,e,n)=>t.forEach(s=>{s[0]+=e,s[1]+=n});Xe.umbrella.forEach(t=>i(t,62,13)),Xe.boulders[1].forEach((t,e)=>{let n=[[1185.33,1433.6,10.06],[1178.35,1422.23,3.74],[1187.04,1446.44,3.74],[1139.51,1429.14,3.74],[1148.29,1413.93,3.74],[1164.8,1407.92,3.74],[1146.03,1440.43,8.84],[1148.35,1424.1,6.66],[1158.3,1415.75,6.66],[1178.67,1445.24,4.67],[1170.95,1416.69,4.43]][e];t[0]=n[0],t[1]=n[1],t[2]=n[2]}),i(Xe.boulders[0],-14,14)}var St=14.35,mi=1036,gi=1108,Qt=1/12,Ni=4/12,K=i=>(i-mi)/St,tt=i=>(i-gi)/St,rn=(i,t,e)=>Math.min(e,Math.max(t,i)),De=Math.PI*2;function px(i,t,e){let n=Math.imul(i|0,374761393)^Math.imul(t|0,668265263)^Math.imul(e|0,2147483647);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function di(i,t,e){let n=Math.floor(i),s=Math.floor(t),r=Math.floor(e),o=i-n,a=t-s,c=e-r,l=g=>g*g*(3-2*g),h=l(o),u=l(a),f=l(c),d=0;for(let g=0;g<2;g++)for(let _=0;_<2;_++)for(let m=0;m<2;m++)d+=px(n+g,s+_,r+m)*(g?h:1-h)*(_?u:1-u)*(m?f:1-f);return d}function Na(i,t,e,n,s=1){let r=i.attributes.position;for(let o=0;o<r.count;o++){let a=r.getX(o),c=r.getY(o),l=r.getZ(o),h=di(a*e+n,c*e+n*1.7,l*e-n*.3)*.65+di(a*e*2.3+n,c*e*2.3,l*e*2.3)*.35,u=1-t/2+t*h;r.setXYZ(o,a*u,c*u*s,l*u)}return i.computeVertexNormals(),i}function re(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Q={mode:"proposed",pad:-1*Qt,step1:7*Qt,step2:7*Qt,sink:0,pitch:1.5,walkFall:18*Qt,lawnFall:12*Qt,eastFall:7*Qt,time:16.5,month:10,north:0,view:"overview",cdepth:18*Qt,under:!1,padSurf:"brick",ver:"plan",fbPat:"90",fbEdge:"block",fbColor:"red",pumpAt:"post",layers:{pool:!0,furniture:!0,umbrella:!0,planters:!0,shed:!0,electrical:!0,context:!0}},kd="backyard_3d_v5",Ad={pad:-1*Qt,step1:7*Qt,step2:7*Qt,sink:0,pitch:1.5,walkFall:18*Qt,eastFall:7*Qt};try{let i=JSON.parse(localStorage.getItem(kd)||"null");if(i){for(let t of["fbColor","fbEdge","fbPat","pumpAt","ver","padSurf","drag","cdepth","pad","step1","step2","walkFall","north"])i[t]!==void 0&&(Q[t]=i[t]);i.layers&&Object.assign(Q.layers,i.layers)}}catch{}function Wn(){try{localStorage.setItem(kd,JSON.stringify(Q))}catch{}}var zn=1459.5,Re=1324.5,fe=1367,mx=()=>fe,Pl=[[fe,1108],[fe,1681]],Aa=960.83,gn=1023.6,pn=[gn,gn+11],Lt=[1219.87,1345],Jr=83,Gd=80,Ra=i=>rn((i-1108)/573,0,1),gx=i=>rn((i-1036)/354,0,1),Kr=i=>-.35-Q.walkFall*Ra(i),Oa=(i,t)=>-.25-Q.lawnFall*Ra(t),Je=(i,t)=>-.35-Q.walkFall*Ra(t)-Q.eastFall*gx(i)*(.3+.7*Ra(t)),fn=()=>Q.pad,kn=()=>Q.pad-Q.step1,_x=()=>Q.pad-Q.step1-Q.step2,Ca=i=>_x()-Q.pitch/100*Math.max(0,i-zn)/St,Kn=Jr,xx=()=>Q.ver==="feedback"&&!ki()?Gd+5.5:Jr,yx=(i,t)=>Math.hypot(i-Lt[0],t-Lt[1])<Kn,ki=()=>Q.ver==="quote"||Q.ver==="feedback"&&Q.fbEdge==="steel";var Vd=()=>fe;var Te=1319,Jn=Math.hypot(1305.73-Lt[0],1319-Lt[1]);function Bl(i,t){return i>=Vd(t)?Je(i,t):t>=zn?Ca(t):t>=Te||Math.hypot(i-Lt[0],t-Lt[1])<Jn?kn():fn()}function jr(i,t){return ki()?Bl(i,t):i>=mx(t)?Je(i,t):t>=zn?Ca(t):t>=Re||yx(i,t)?kn():fn()}var Zl=i=>i<950?Oa(i,1681):i<pn[1]?Kr(1681):Je(i,1681);function He(i,t){if(t>=1108){if(Q.mode==="proposed"&&i>=pn[1])return jr(i,t);if(Q.mode==="existing"&&i>=gn)return Je(i,t)}return i>=Aa&&i<gn&&t>=958?Kr(t):i<950&&t>=1049?Oa(i,t):-.25}var Fa=Math.sqrt(Jr*Jr-(Re-Lt[1])**2),vx=Lt[0]-Fa,Mx=Lt[0]+Fa,Ex=Math.atan2(Re-Lt[1],-Fa),bx=Math.atan2(Re-Lt[1],Fa),ir=(i,t,e=Jr,n=24)=>Array.from({length:n-1},(s,r)=>{let o=i+(t-i)*(r+1)/n;return[Lt[0]+Math.cos(o)*e,Lt[1]+Math.sin(o)*e]}),Qr=document.getElementById("wrap"),Hl=Math.min(screen.width,screen.height)<700,Fe=new Ar({antialias:!0,powerPreference:"high-performance"});Fe.setPixelRatio(Math.min(devicePixelRatio,Hl?1.75:2));Fe.shadowMap.enabled=!0;Fe.shadowMap.type=yl;Fe.shadowMap.autoUpdate=!1;Fe.toneMapping=vl;Fe.toneMappingExposure=1;Fe.outputColorSpace=Oe;Qr.prepend(Fe.domElement);var oe=new Ys,Me=new nn(55,1,.08,4e3),le=new ya(Me,Fe.domElement);le.enableDamping=!0;le.dampingFactor=.14;le.zoomSpeed=3.2;le.zoomToCursor=!0;le.rotateSpeed=1.1;le.panSpeed=1;le.maxPolarAngle=Math.PI*.495;le.minDistance=.3;le.maxDistance=320;le.screenSpacePanning=!1;var Sx=new Xs(Fe);oe.environment=Sx.fromScene(new Ma,.04).texture;var Wd=Fe.capabilities.getMaxAnisotropy(),wx=()=>oe.traverse(i=>{if(i.isMesh)for(let t of[].concat(i.material))t.envMapIntensity===1&&(t.envMapIntensity=.35)});function xe(i,t,e,n,s=!0){let r=document.createElement("canvas");r.width=i,r.height=t;let o=r.getContext("2d");e(o,i,t);let a=new jo(r);return a.wrapS=a.wrapT=Ri,n&&a.repeat.set(n[0],n[1]),a.anisotropy=Wd,s&&(a.colorSpace=Oe),a}function We(i,t,e,n,s,r,o,a){for(let c=0;c<n;c++){i.fillStyle=s[Math.floor(a()*s.length)],i.globalAlpha=.25+a()*.6;let l=r+a()*(o-r);i.beginPath(),i.arc(a()*t,a()*e,l,0,De),i.fill()}i.globalAlpha=1}function Gi(i,t,e,n,s,r,o=60){i.fillStyle=n,i.fillRect(0,0,t,e);for(let a=0;a<o;a++){let c=t*(.05+r()*.2),l=r()*t,h=r()*e,u=i.createRadialGradient(l,h,0,l,h,c),f=(r()-.5)*s;u.addColorStop(0,f>0?`rgba(255,255,255,${f})`:`rgba(0,0,0,${-f})`),u.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=u;for(let d of[-t,0,t])for(let g of[-e,0,e])i.save(),i.translate(d,g),i.fillRect(l-c,h-c,2*c,2*c),i.restore()}}var Wt={};Wt.block=xe(256,256,(i,t,e)=>{let n=re(11);Gi(i,t,e,"#d9ccb4",.16,n,40),We(i,t,e,1600,["#a8987c","#efe6d4","#bfae90","#8f7f66"],.4,1.6,n);for(let s=0;s<40;s++)i.fillStyle="rgba(90,75,55,0.35)",i.beginPath(),i.ellipse(n()*t,n()*e,1+n()*3,1+n()*2,n()*3,0,De),i.fill()},null);Wt.stone=xe(256,256,(i,t,e)=>{let n=re(5);Gi(i,t,e,"#d8c6b0",.1,n,30),We(i,t,e,2600,["#b9a68e","#efe3d2","#a08c76","#cdb79e"],.4,1.3,n)},null);Wt.concrete=xe(512,512,(i,t,e)=>{let n=re(21);Gi(i,t,e,"#c9ae95",.16,n,70),We(i,t,e,5e3,["#a88e76","#dcc6b0","#b39880"],.3,1.1,n);for(let s=0;s<9;s++)i.strokeStyle="rgba(80,60,45,0.18)",i.lineWidth=1+n()*2,i.beginPath(),i.ellipse(n()*t,n()*e,20+n()*80,10+n()*50,n()*3,0,De),i.stroke();i.globalAlpha=.05;for(let s=0;s<e;s+=2)i.fillStyle=n()<.5?"#000":"#fff",i.fillRect(0,s,t,1);i.globalAlpha=1},[1,1]);Wt.siding=xe(256,256,(i,t,e)=>{let n=re(3);i.fillStyle="#a9b7a4",i.fillRect(0,0,t,e);let s=7;for(let r=0;r<s;r++){let o=r*e/s,a=i.createLinearGradient(0,o,0,o+e/s);a.addColorStop(0,"rgba(255,255,255,0.10)"),a.addColorStop(.85,"rgba(0,0,0,0.02)"),a.addColorStop(.92,"rgba(0,0,0,0.22)"),a.addColorStop(1,"rgba(0,0,0,0.3)"),i.fillStyle=a,i.fillRect(0,o,t,e/s)}We(i,t,e,400,["#93a28f","#bccab8"],.3,1,n)},null);Wt.shingle=xe(256,256,(i,t,e)=>{let n=re(9);i.fillStyle="#5d5f61",i.fillRect(0,0,t,e);let s=8,r=t/6;for(let o=0;o<s;o++){let a=o*e/s,c=o%2*r/2;for(let l=-1;l<7;l++){let h=Math.floor(80+n()*30);i.fillStyle=`rgb(${h},${h+2},${h+5})`,i.fillRect(l*r+c+1,a+1,r-2,e/s-2)}i.fillStyle="rgba(0,0,0,0.45)",i.fillRect(0,a+e/s-3,t,3)}We(i,t,e,3e3,["#3c3e41","#8a8c8e","#6e7174"],.3,.9,n)},null);Wt.board=xe(512,512,(i,t,e)=>{let n=re(17),s=9;for(let r=0;r<s;r++){let o=n(),a=[118+o*40,104+o*34,88+o*28];i.fillStyle=`rgb(${a.map(Math.round)})`,i.fillRect(r*t/s,0,t/s,e);for(let c=0;c<26;c++){i.strokeStyle=`rgba(${n()<.5?"40,30,22":"210,200,185"},${.08+n()*.12})`,i.lineWidth=.6+n()*1.4;let l=r*t/s+n()*t/s;i.beginPath(),i.moveTo(l,0),i.bezierCurveTo(l+n()*6-3,e*.3,l+n()*6-3,e*.6,l+n()*4-2,e),i.stroke()}i.fillStyle="rgba(20,14,10,0.55)",i.fillRect(r*t/s,0,2,e),n()<.7&&(i.fillStyle="rgba(40,28,20,0.5)",i.beginPath(),i.ellipse(r*t/s+n()*t/s,n()*e,3+n()*4,5+n()*6,0,0,De),i.fill())}},null);Wt.stoneWall=xe(1024,1024,(i,t,e)=>{let n=re(83);i.fillStyle="#e6dfd2",i.fillRect(0,0,t,e);let s=["#eadfca","#f0e6d4","#e3d2b6","#ead8bc","#dcc7a6","#f2eadb","#e2cba9","#d9bd97","#ecd9bf","#e8d4b8"],r=0;for(;r<e;){let o=Math.min(e-r,58+Math.floor(n()*4)*30),a=-n()*120;for(;a<t;){let c=110+n()*260,l=s[Math.floor(n()*s.length)],h=4+n()*2,u=a+h,f=r+h,d=c-h*2,g=o-h*2,_=n()<.3&&g>90,m=_?[[f,g*.48],[f+g*.52,g*.48]]:[[f,g]];for(let[p,y]of m){i.fillStyle=_?s[Math.floor(n()*s.length)]:l,i.beginPath(),i.moveTo(u+n()*6,p+n()*4),i.lineTo(u+d-n()*6,p+n()*4),i.lineTo(u+d-n()*5,p+y-n()*5),i.lineTo(u+n()*5,p+y-n()*5),i.closePath(),i.fill();let x=i.createLinearGradient(u,p,u+d*.3,p+y);x.addColorStop(0,"rgba(255,255,255,0.18)"),x.addColorStop(1,"rgba(90,70,45,0.14)"),i.fillStyle=x,i.fill();for(let M=0;M<d*y/70;M++)i.fillStyle=`rgba(${n()<.5?"120,98,70":"255,250,240"},${.1+n()*.16})`,i.fillRect(u+n()*d,p+n()*y,1+n()*2.5,1+n()*2.5);n()<.35&&(i.strokeStyle="rgba(120,95,65,0.18)",i.lineWidth=1,i.beginPath(),i.moveTo(u+n()*d,p+n()*y),i.lineTo(u+n()*d,p+n()*y),i.stroke())}a+=c}r+=o}},null);Wt.garage=xe(512,224,(i,t,e)=>{i.fillStyle="#ecebe6",i.fillRect(0,0,t,e);let n=4,s=8;for(let r=0;r<n;r++){i.fillStyle="rgba(0,0,0,0.22)",i.fillRect(0,r*e/n-1,t,2);for(let o=0;o<s;o++){let a=o*t/s+7,c=r*e/n+8,l=t/s-14,h=e/n-16;i.fillStyle="#e2e1db",i.fillRect(a,c,l,h),i.strokeStyle="rgba(255,255,255,0.9)",i.lineWidth=2,i.beginPath(),i.moveTo(a,c+h),i.lineTo(a,c),i.lineTo(a+l,c),i.stroke(),i.strokeStyle="rgba(0,0,0,0.18)",i.beginPath(),i.moveTo(a+l,c),i.lineTo(a+l,c+h),i.lineTo(a,c+h),i.stroke()}}},[1,1]);Wt.chips=xe(256,256,(i,t,e)=>{let n=re(91);i.fillStyle="#d9d4c9",i.fillRect(0,0,t,e);for(let s=0;s<2600;s++){let r=Math.round(200+n()*55);i.fillStyle=`rgb(${r},${r-4-n()*8},${r-12-n()*10})`;let o=1.5+n()*4;i.save(),i.translate(n()*t,n()*e),i.rotate(n()*3),i.fillRect(-o,-o*.7,o*2,o*1.4),i.restore()}We(i,t,e,900,["#8d8476","#a59c8d"],.4,1.4,n)},null);Wt.asphalt=xe(256,256,(i,t,e)=>{let n=re(97);Gi(i,t,e,"#6b6c6c",.12,n,40),We(i,t,e,6e3,["#4e4f50","#858684","#5c5d5e"],.3,1.1,n)},null);function hi(i,t,e,n,s,r,o,a){for(let c of[-t,0,t])for(let l of[-e,0,e])i.fillStyle=a,i.fillRect(n+c,s+l,r,o)}var $r={cbrick:{span:64/12,tex:xe(1024,1024,(i,t,e)=>{let n=re(101),s=t/16,r=5;i.fillStyle="#7d6658",i.fillRect(0,0,t,e);let o=["#a65a41","#b4684b","#9a5038","#bf7656","#a9603f","#b06a52","#94553d","#c17f62"],a=(l,h)=>(l%h+h)%h,c=l=>{let h=Math.imul(l^2654435769,2654435761)>>>0;return h=(h^h>>>15)>>>0,h/4294967296};for(let l=-20;l<36;l++)for(let h=-10;h<10;h++){let u=(l+h*4)*s,f=l*s,d=a(l+h*4,16)*64+a(l,16)*2;for(let[g,_,m,p,y]of[[u,f,2*s,s,0],[u,f+s,s,2*s,1]]){let x=o[Math.floor(c(d+y)*o.length)],M=a(g,t)+r/2,b=a(_,e)+r/2;hi(i,t,e,M,b,m-r,p-r,x),hi(i,t,e,M,b,m-r,2,"rgba(255,235,215,0.22)"),hi(i,t,e,M,b+p-r-2,m-r,2,"rgba(40,20,10,0.25)")}}We(i,t,e,26e3,["#7a4430","#d29a7c","#8f5a44"],.5,1.6,n)},[1,1])},amaretto:{span:64/12,tex:xe(1024,1024,(i,t,e)=>{let n=re(131),s=t/16,r=5;i.fillStyle="#8c7766",i.fillRect(0,0,t,e);let o=["#c39a72","#b98a62","#cfa77b","#a87a57","#d3ae84","#b5845c","#c99c70","#9f7353"],a=(l,h)=>(l%h+h)%h,c=l=>{let h=Math.imul(l^2135587861,2246822519)>>>0;return h=(h^h>>>13)>>>0,h/4294967296};for(let l=-20;l<36;l++)for(let h=-10;h<10;h++){let u=(l+h*4)*s,f=l*s,d=a(l+h*4,16)*64+a(l,16)*2;for(let[g,_,m,p,y]of[[u,f,2*s,s,0],[u,f+s,s,2*s,1]]){let x=o[Math.floor(c(d+y)*o.length)],M=a(g,t)+r/2,b=a(_,e)+r/2;hi(i,t,e,M,b,m-r,p-r,x),hi(i,t,e,M,b,m-r,2,"rgba(255,240,220,0.25)"),hi(i,t,e,M,b+p-r-2,m-r,2,"rgba(50,30,15,0.22)")}}We(i,t,e,26e3,["#8a6a4e","#e2c6a2","#a0805f"],.5,1.6,n)},[1,1])},anthracite:{span:32/12,tex:xe(512,512,(i,t,e)=>{let n=re(137),s=t/8,r=t/4,o=5;i.fillStyle="#2a2a2c",i.fillRect(0,0,t,e);for(let a=0;a<8;a++)for(let c=0;c<4;c++){let l=58+Math.floor(n()*22);i.fillStyle=`rgb(${l},${l},${l+3})`,i.fillRect(a*s+o/2,c*r+o/2,s-o,r-o)}We(i,t,e,6e3,["#2e2e30","#777779","#4a4a4d"],.4,1.3,n)},[1,1])},amaSoldier:{span:32/12,tex:xe(512,512,(i,t,e)=>{let n=re(139),s=t/8,r=t/4,o=5;i.fillStyle="#8c7766",i.fillRect(0,0,t,e);let a=["#c39a72","#b98a62","#cfa77b","#a87a57","#d3ae84","#b5845c"];for(let c=0;c<8;c++)for(let l=0;l<4;l++)i.fillStyle=a[Math.floor(n()*a.length)],i.fillRect(c*s+o/2,l*r+o/2,s-o,r-o);We(i,t,e,6e3,["#8a6a4e","#e2c6a2","#a0805f"],.4,1.3,n)},[1,1])},...(()=>{let i={},t={red:{c:["#a65a41","#b4684b","#9a5038","#bf7656","#a9603f","#b06a52","#94553d","#8a4a35"],g:"#6e5a4d",s:["#7a4430","#d29a7c","#8f5a44"]},walnut:{c:["#6b4a35","#7a5640","#5e4030","#86614a","#704f3a","#55392a","#8c6850"],g:"#45372d",s:["#4a3426","#a07d62","#5e4434"]},charcoal:{c:["#4b4744","#5a5550","#3f3c3a","#6b645c","#55504a","#7a6f62","#47423d"],g:"#2c2a28",s:["#2e2c2a","#8d8478","#4e4944"]}};for(let[e,n]of Object.entries(t))i["hb_"+e]={span:64/12,tex:xe(1024,1024,(s,r,o)=>{let a=re(e.length*31+7),c=r/16,l=5;s.fillStyle=n.g,s.fillRect(0,0,r,o);let h=(f,d)=>(f%d+d)%d,u=f=>{let d=Math.imul(f^1540483477,2654435761)>>>0;return d=(d^d>>>15)>>>0,d/4294967296};for(let f=-20;f<36;f++)for(let d=-10;d<10;d++){let g=(f+d*4)*c,_=f*c,m=h(f+d*4,16)*64+h(f,16)*2;for(let[p,y,x,M,b]of[[g,_,2*c,c,0],[g,_+c,c,2*c,1]]){let T=n.c[Math.floor(u(m+b+e.length)*n.c.length)],S=h(p,r)+l/2,L=h(y,o)+l/2;hi(s,r,o,S,L,x-l,M-l,T),hi(s,r,o,S,L,x-l,2,"rgba(255,240,220,0.14)"),hi(s,r,o,S,L+M-l-2,x-l,2,"rgba(0,0,0,0.28)")}}We(s,r,o,26e3,n.s,.5,1.6,a)},[1,1])},i["so_"+e]={span:32/12,tex:xe(512,512,(s,r,o)=>{let a=re(e.length*17+3),c=r/8,l=r/4,h=5;s.fillStyle=n.g,s.fillRect(0,0,r,o);for(let u=0;u<8;u++)for(let f=0;f<4;f++)s.fillStyle=n.c[Math.floor(a()*n.c.length)],s.fillRect(u*c+h/2,f*l+h/2,c-h,l-h);We(s,r,o,6e3,n.s,.4,1.3,a)},[1,1])};return i})(),slab:{span:4,tex:xe(512,512,(i,t,e)=>{let n=re(103);i.fillStyle="#8f8a82",i.fillRect(0,0,t,e);let s=t/2,r=5;for(let o=0;o<2;o++)for(let a=0;a<2;a++)i.fillStyle=["#d8c6b0","#d2c0a9","#dccab4","#d4c3ad"][o*2+a],i.fillRect(o*s+r/2,a*s+r/2,s-r,s-r);We(i,t,e,6e3,["#b9a68e","#efe3d2","#a08c76"],.4,1.3,n)},[1,1])},conc:{span:8,tex:xe(1024,1024,(i,t,e)=>{let n=re(107);Gi(i,t,e,"#cdb9a3",.12,n,80),We(i,t,e,16e3,["#b29c86","#e0cfbd","#bba690"],.3,1,n),i.globalAlpha=.06;for(let s=0;s<e;s+=3)i.fillStyle=n()<.5?"#000":"#fff",i.fillRect(0,s,t,1);i.globalAlpha=1,i.fillStyle="rgba(60,45,35,0.55)",i.fillRect(0,0,t,3),i.fillRect(0,0,3,e),i.fillRect(0,e/2-1,t,3),i.fillRect(t/2-1,0,3,e)},[1,1])}};Wt.turf=xe(512,512,(i,t,e)=>{let n=re(151);Gi(i,t,e,"#4f7a32",.12,n,40);for(let s=0;s<26e3;s++){let r=90+n()*70;i.strokeStyle=`rgba(${40+n()*40},${r},${30+n()*25},${.35+n()*.4})`,i.lineWidth=.8+n()*.8;let o=n()*t,a=n()*e,c=-Math.PI/2+(n()-.5)*.9,l=2+n()*5;i.beginPath(),i.moveTo(o,a),i.lineTo(o+Math.cos(c)*l,a+Math.sin(c)*l),i.stroke()}},null);Wt.pea=xe(256,256,(i,t,e)=>{let n=re(161);i.fillStyle="#5b4b3c",i.fillRect(0,0,t,e);for(let s=0;s<3800;s++){let r=n();i.fillStyle=r<.35?"#d6c3a2":r<.6?"#a8916f":r<.8?"#7a6650":"#efe3cc",i.beginPath(),i.ellipse(n()*t,n()*e,1.2+n()*1.8,1+n()*1.4,n()*3,0,De),i.fill()}},null);Wt.mesh=xe(64,64,(i,t,e)=>{i.clearRect(0,0,t,e),i.fillStyle="#2c241c",i.fillRect(0,0,t,3),i.fillRect(0,0,3,e)},null);Wt.corr=xe(64,8,(i,t,e)=>{for(let n=0;n<t;n++){let s=Math.sin(n/t*De*2),r=Math.round(128+s*80);i.fillStyle=`rgb(${r},${r},${r})`,i.fillRect(n,0,1,e)}},null,!1);var Xd=[.17,.235,.3,.365,.43,.6,.665,.9];Wt.tank=xe(512,512,(i,t,e)=>{let n=re(61);i.fillStyle="#c9cfd2",i.fillRect(0,0,t,e);for(let r=0;r<900;r++){let o=n()*t,a=n()*e,c=6+n()*26,l=Math.round(178+n()*62);i.fillStyle=`rgba(${l},${l+3},${l+6},${.35+n()*.45})`,i.beginPath();let h=5+Math.floor(n()*3);for(let u=0;u<h;u++){let f=u/h*De+n()*.6,d=c*(.6+n()*.5);i.lineTo(o+Math.cos(f)*d,a+Math.sin(f)*d*.8)}i.closePath(),i.fill()}We(i,t,e,2500,["#9ea6ab","#e9edef","#b4bcc0"],.4,1.2,n);for(let r of Xd){let o=r*e,a=i.createLinearGradient(0,o-9,0,o+9);a.addColorStop(0,"rgba(255,255,255,0)"),a.addColorStop(.3,"rgba(255,255,255,0.55)"),a.addColorStop(.55,"rgba(90,98,104,0.45)"),a.addColorStop(1,"rgba(90,98,104,0)"),i.fillStyle=a,i.fillRect(0,o-9,t,18)}let s=i.createLinearGradient(0,0,0,e);s.addColorStop(0,"rgba(0,0,0,0.12)"),s.addColorStop(.12,"rgba(0,0,0,0)"),s.addColorStop(1,"rgba(0,0,0,0.06)"),i.fillStyle=s,i.fillRect(0,0,t,e)},null);Wt.tankBump=xe(16,512,(i,t,e)=>{i.fillStyle="#808080",i.fillRect(0,0,t,e);for(let n of Xd){let s=n*e,r=i.createLinearGradient(0,s-8,0,s+8);r.addColorStop(0,"#808080"),r.addColorStop(.5,"#f0f0f0"),r.addColorStop(1,"#808080"),i.fillStyle=r,i.fillRect(0,s-8,t,16)}},null,!1);Wt.caustic=xe(512,512,(i,t,e)=>{let n=i.createImageData(t,e),s=n.data;for(let r=0;r<e;r++)for(let o=0;o<t;o++){let a=di(o/38,r/38,4)*.6+di(o/13,r/13,8)*.4,c=Math.pow(Math.max(0,a-.5)*2.4,2)*.6,l=(r*t+o)*4;s[l]=196+40*c,s[l+1]=212+34*c,s[l+2]=214+30*c,s[l+3]=255}i.putImageData(n,0,0)},[2,2]);Wt.dirt=xe(1024,1536,(i,t,e)=>{let n=re(31),s=i.createImageData(t,e),r=s.data;for(let o=0;o<e;o++)for(let a=0;a<t;a++){let c=(o*t+a)*4,l=di(a/90,o/90,1)*.6+di(a/22,o/22,5)*.4,h=di(a/7,o/7,9),u=176+l*34-h*14,f=150+l*30-h*14,d=124+l*26-h*12,g=o/e,_=di(a/60,o/60,21)*.7+di(a/14,o/14,33)*.3,m=.72-g*.42;if(_>m){let y=rn((_-m)*6,0,1)*(.55+n()*.45);u=u*(1-y)+(78+n()*40)*y,f=f*(1-y)+(104+n()*44)*y,d=d*(1-y)+(52+n()*20)*y}let p=n();p<.05?(u*=.78,f*=.76,d*=.74):p>.975&&(u=u*.5+118,f=f*.5+112,d=d*.5+104),r[c]=u,r[c+1]=f,r[c+2]=d,r[c+3]=255}i.putImageData(s,0,0);for(let o=0;o<70;o++){i.fillStyle=`rgba(${215+n()*25},${205+n()*25},${185+n()*20},0.9)`;let a=2+n()*5;i.save(),i.translate(n()*t,n()*e),i.rotate(n()*3),i.fillRect(-a,-a*.6,a*2,a*1.2),i.restore()}},null);Wt.grassFar=xe(256,256,(i,t,e)=>{let n=re(41);Gi(i,t,e,"#5f7a3e",.18,n,50),We(i,t,e,4e3,["#4c6a30","#7d9550","#6a8445"],.4,1.2,n)},[1,1]);Wt.brush=xe(256,256,(i,t,e)=>{let n=re(43);Gi(i,t,e,"#5b6338",.25,n,60),We(i,t,e,5e3,["#3d4a26","#7a7646","#6b5f3e"],.5,2,n)},[1,1]);Wt.leaf=xe(128,128,(i,t,e)=>{let n=re(47);i.fillStyle="#808080",i.fillRect(0,0,t,e),We(i,t,e,900,["#5a5a5a","#a5a5a5","#3e3e3e","#c4c4c4"],.8,2.6,n)},[1,1]);var z={ground:new ut({color:10133626,roughness:.97}),dirt:new ut({map:Wt.dirt,roughness:1}),outside:new ut({map:Wt.grassFar,roughness:1}),brush:new ut({map:Wt.brush,roughness:1}),block:new ut({map:Wt.block,roughness:.92,color:16777215}),stone:new ut({map:Wt.stone,roughness:.9}),concrete:new ut({map:Wt.concrete,roughness:.9,side:Se}),siding:new ut({map:Wt.siding,roughness:.8}),stoneWall:new ut({map:Wt.stoneWall,roughness:.9,emissive:2761752,emissiveIntensity:.35}),garageDoor:new ut({map:Wt.garage,roughness:.55}),frontDoor:new ut({color:7219746,roughness:.5}),chips:new ut({map:Wt.chips,roughness:1}),asphalt:new ut({map:Wt.asphalt,roughness:.95}),trim:new ut({color:15921386,roughness:.6}),skirt:new ut({color:12033408,roughness:.95}),shingle:new ut({map:Wt.shingle,roughness:.95}),glassDark:new ut({color:2435888,roughness:.08,metalness:.2,envMapIntensity:1.4}),blinds:new ut({color:14867661,roughness:.7}),board:new ut({map:Wt.board,roughness:.95}),steelPost:new ut({color:10133411,roughness:.45,metalness:.7}),hogFrame:new ut({color:3877922,roughness:.7,metalness:.4}),hogMesh:new ut({map:Wt.mesh,color:16777215,alphaTest:.4,side:Se,roughness:.6,metalness:.4}),limeTint:null,skirtSoil:new ut({color:9403752,roughness:1,side:Se}),edging:new ut({color:9128491,roughness:.85,metalness:.25}),wood:new ut({color:5980464,roughness:.85,side:Se}),white:new ut({color:15657956,roughness:.65}),corr:new ut({color:12041922,roughness:.5,metalness:.55,bumpMap:Wt.corr,bumpScale:.8,side:Se}),tank:new ut({map:Wt.tank,bumpMap:Wt.tankBump,bumpScale:3,roughness:.34,metalness:.45,envMapIntensity:1.1}),tankIn:new ut({bumpMap:Wt.tankBump,bumpScale:2.5,color:13227737,roughness:.55,metalness:.05,side:ke,envMapIntensity:.6}),rim:new ut({color:13883611,roughness:.3,metalness:.55,envMapIntensity:1.1,side:Se}),water:new ut({color:5682109,roughness:.02,metalness:.1,transparent:!0,opacity:.24,envMapIntensity:1.4,depthWrite:!1}),poolFloor:new ut({map:Wt.caustic,color:12180189,roughness:.6,metalness:.02}),jet:new ut({color:1776670,roughness:.45}),pvc:new ut({color:15855852,roughness:.5}),valve:new ut({color:12597547,roughness:.5}),sleeve:new ut({color:8030870,roughness:.6,transparent:!0,opacity:.7}),pump:new ut({color:7239037,roughness:.5,metalness:.3}),hose:new ut({color:1908513,roughness:.6}),frame:new ut({color:4868163,roughness:.6,metalness:.3}),cushion:new ut({color:15525078,roughness:.95}),teak:new ut({color:9267788,roughness:.75}),canopy:new ut({color:14857890,roughness:.95,side:Se,emissive:9067078,emissiveIntensity:.45}),terracotta:new ut({color:12085578,roughness:.9}),soil:new ut({color:4075300,roughness:1}),agave:new ut({color:8363156,roughness:.7,flatShading:!0}),grassPlant:new ut({color:10135653,roughness:.9,side:Se}),shed:new ut({color:11775395,roughness:.85}),shedRoof:new ut({color:4935250,roughness:.6,metalness:.4}),cover:new ut({color:1776670,roughness:.95}),trunk:new ut({color:5062966,roughness:1}),canopyTree:new ut({vertexColors:!0,map:Wt.leaf,roughness:1,emissive:1911314,emissiveIntensity:.5}),bulb:new ut({color:16773840,emissive:16766346,emissiveIntensity:.6}),wire:new ut({color:1710618,roughness:.8}),sail:new ut({color:2792086,roughness:.9,side:Se})};function $l(i){let t=i.attributes.position,e=new Float32Array(t.count*2);for(let n=0;n<t.count;n++){let s=t.getX(n)*St+mi,r=t.getZ(n)*St+gi;e[n*2]=(s-470)/940,e[n*2+1]=1-(r-940)/760}return i.setAttribute("uv",new ve(e,2)),i}function Yd(i,t,e,n,s){let r=Math.max(1,Math.ceil((e-i)/St/s)),o=Math.max(1,Math.ceil((n-t)/St/s)),a=new Ke(1,1,r,o),c=a.attributes.position;for(let l=0;l<c.count;l++){let h=c.getX(l)+.5,u=.5-c.getY(l);c.setXYZ(l,K(i+(e-i)*h),0,tt(t+(n-t)*u))}return a.userData={px0:i,py0:t,px1:e,py1:n},a}function Jl(i,t){let e=i.geometry,n=e.attributes.position;for(let s=0;s<n.count;s++)n.setY(s,t(n.getX(s)*St+mi,n.getZ(s)*St+gi));n.needsUpdate=!0,e.computeVertexNormals(),e.computeBoundingSphere()}function Tx(i){return i.map(([t,e])=>new ht(K(t),tt(e)))}function Bi(i,t,e,n){let s=Tx(i);s.length>2&&s[0].distanceTo(s[s.length-1])<.001&&s.pop(),Nn.isClockWise(s)&&(s=s.reverse());let r=Nn.triangulateShape(s,[]),o=[];for(let f of r)for(let d of[f[0],f[2],f[1]])o.push(s[d].x,e,s[d].y);let a=new de;if(a.setAttribute("position",new Nt(o,3)),a.computeVertexNormals(),n)$l(a);else{let f=a.attributes.position,d=[];for(let g=0;g<f.count;g++)d.push(f.getX(g)/6,f.getZ(g)/6);a.setAttribute("uv",new Nt(d,2))}let c=[],l=[],h=0;for(let f=0;f<s.length;f++){let d=s[f],g=s[(f+1)%s.length],_=d.distanceTo(g);c.push(d.x,t,d.y,g.x,t,g.y,g.x,e,g.y,d.x,t,d.y,g.x,e,g.y,d.x,e,d.y),l.push(h/4,t/4,(h+_)/4,t/4,(h+_)/4,e/4,h/4,t/4,(h+_)/4,e/4,h/4,e/4),h+=_}let u=new de;return u.setAttribute("position",new Nt(c,3)),u.setAttribute("uv",new Nt(l,2)),u.computeVertexNormals(),{top:a,side:u}}function $t(i,t,e,n,s,r,o,a,c=0){let l=new j(new we(i,t,e),n);return l.position.set(s,r,o),l.rotation.y=c,l.castShadow=l.receiveShadow=!0,(a||oe).add(l),l}function rr(i,t,e){let n=i.attributes.uv;for(let s=0;s<n.count;s++)n.setXY(s,n.getX(s)*t,n.getY(s)*e);return i}var fi={};function ms(i){return fi[i]||(fi[i]=new me,fi[i].name=i,oe.add(fi[i])),fi[i]}var or=[],qd=i=>typeof i=="function"?i():i;function Gn(i,t,e,n=0){return or.push([i,t,e,n]),i.position.y=He(t,e)+qd(n),i}var he={};function Hi(i,t,e,n,s,r,o,a=1){let c=Yd(t,e,n,s,a),l=new j(c,o);return l.receiveShadow=!0,l.userData.h=r,oe.add(l),he[i]=l,Jl(l,r),o===z.ground&&$l(c),l}Hi("lawn",486,1049,950,1681,Oa,z.ground,1.5);Hi("strip",486,940,950,1049,()=>-.25,z.ground,2);Hi("walk",Aa,958,gn,1681,(i,t)=>Kr(t),z.ground,.75);Hi("patioZone",gn,940,1395,1108,()=>-.3,z.ground,3);Hi("sideNorth",486,765,574,940,()=>-.25,z.ground,3);he.sideNorth.material=new ut({color:3421754,roughness:1});function kr(i,t,e,n){let s=t.map(([u,f])=>new ht(K(u),tt(f)));Nn.isClockWise(s)&&(s=s.reverse());let r=e.map(u=>{let f=u.map(([d,g])=>new ht(K(d),tt(g)));return Nn.isClockWise(f)||(f=f.reverse()),f}),o=Nn.triangulateShape(s,r),a=s.concat(...r),c=[];for(let u of o)for(let f of[u[0],u[2],u[1]]){let d=a[f];c.push(d.x,n(d.x*St+mi,d.y*St+gi),d.y)}let l=new de;if(l.setAttribute("position",new Nt(c,3)),l.computeVertexNormals(),l.attributes.normal.getY(0)<0){let u=l.attributes.position.array;for(let f=0;f<u.length;f+=9)for(let d=0;d<3;d++){let g=u[f+3+d];u[f+3+d]=u[f+6+d],u[f+6+d]=g}l.computeVertexNormals()}$l(l);{let u=l.attributes.uv,f=568/940;for(let d=0;d<u.count;d++)u.getX(d)<f&&u.setX(d,f)}let h=new j(l,z.ground);h.receiveShadow=!0,oe.add(h),he[i]=h;{let u=[];for(let g=0;g<s.length;g++){let _=s[g],m=s[(g+1)%s.length],p=n(_.x*St+mi,_.y*St+gi),y=n(m.x*St+mi,m.y*St+gi);u.push(_.x,p,_.y,m.x,y,m.y,m.x,y-2.5,m.y,_.x,p,_.y,m.x,y-2.5,m.y,_.x,p-2.5,_.y)}let f=new de;f.setAttribute("position",new Nt(u,3)),f.computeVertexNormals();let d=new j(f,z.skirtSoil);d.receiveShadow=!0,h.add(d)}return h}function Ax(){for(let r of["fEx","pUp","pPool","pTurf","edgeStrip","edgeBay","fQ"])he[r]&&(oe.remove(he[r]),he[r].geometry.dispose(),delete he[r]);if(Q.mode==="existing"){let r=Hi("fEx",gn,1108,1394.6,1681,Je,z.dirt,.75),o=r.geometry.attributes.position,a=new Float32Array(o.count*2);for(let c=0;c<o.count;c++){let l=o.getX(c)*St+mi,h=o.getZ(c)*St+gi;a[c*2]=(l-gn)/(1394.6-gn),a[c*2+1]=1-(h-1108)/573}r.geometry.setAttribute("uv",new ve(a,2));return}let i=pn[1],t=5.5,e=(r,o)=>{let a=Math.sqrt(Math.max(r*r-(o-Lt[1])**2,1));return{dx:a,aR:Math.atan2(o-Lt[1],a),aL:Math.atan2(o-Lt[1],-a)}},n=Array.from({length:56},(r,o)=>{let a=o/56*De;return[Lt[0]+Math.cos(a)*73.5,Lt[1]+Math.sin(a)*73.5]}),s=Q.step2>=Qt?t:0;if(ki()){let r=e(Jn,Te);kr("pUp",[[i,1108],[fe,1108],[fe,Te],[Lt[0]+r.dx,Te],...ir(r.aR,r.aL,Jn),[Lt[0]-r.dx,Te],[i,Te]],[],()=>fn()),kr("pPool",[[i,Te],[Lt[0]-r.dx,Te],...ir(r.aL,r.aR,Jn),[Lt[0]+r.dx,Te],[fe,Te],[fe,zn-s],[i,zn-s]],[n],()=>kn())}else{let r=Q.step1>=Qt?t:0,o=e(Kn+r,Re-r),a=e(Kn-r,Re+r);kr("pUp",[[i,1108],[fe,1108],[fe,Re-r],[Lt[0]+o.dx,Re-r],...ir(o.aR,o.aL,Kn+r),[Lt[0]-o.dx,Re-r],[i,Re-r]],[],()=>fn()),kr("pPool",[[i,Re+r],[Lt[0]-a.dx,Re+r],...ir(a.aL,a.aR,Kn-r),[Lt[0]+a.dx,Re+r],[fe,Re+r],[fe,zn-s],[i,zn-s]],[n],()=>kn())}if(Q.ver!=="plan"){z.limeTint||(z.limeTint=z.ground.clone(),z.limeTint.color.set(16512750)),z.limeTint.map=z.ground.map,z.limeTint.needsUpdate=!0;{if(!z.limeChips){let u=Wt.chips.clone();u.needsUpdate=!0,u.wrapS=u.wrapT=Ri,z.limeChips=new ut({map:u,color:16644594,roughness:1})}let r=he.pPool.geometry,o=r.attributes.position,a=r.attributes.uv;for(let u=0;u<o.count;u++)a.setXY(u,o.getX(u)/3,o.getZ(u)/3);a.needsUpdate=!0,he.pPool.material=z.limeChips,he.peaRing&&(oe.remove(he.peaRing),he.peaRing.geometry.dispose());let c=new ra(70/St,Gd/St,96,1);c.rotateX(-Math.PI/2);let l=c.attributes.uv,h=c.attributes.position;for(let u=0;u<h.count;u++)l.setXY(u,h.getX(u)/1.5,h.getZ(u)/1.5);z.pea||(Wt.pea.wrapS=Wt.pea.wrapT=Ri,z.pea=new ut({map:Wt.pea,roughness:1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),he.peaRing=new j(c,z.pea),he.peaRing.position.set(K(Lt[0]),kn()+.01,tt(Lt[1])),he.peaRing.receiveShadow=!0,oe.add(he.peaRing)}if(!z.limeChips){let r=Wt.chips.clone();r.needsUpdate=!0,r.wrapS=r.wrapT=Ri,z.limeChips=new ut({map:r,color:16644594,roughness:1})}{let r=he.pUp.geometry,o=r.attributes.position,a=r.attributes.uv;for(let c=0;c<o.count;c++)a.setXY(c,o.getX(c)/3,o.getZ(c)/3);a.needsUpdate=!0,he.pUp.material=z.limeChips}he._limeTurf=!0}else he._limeTurf=!1;if(kr("pTurf",[[i,zn+s],[fe,zn+s],[fe,1681],[i,1681]],[],(r,o)=>Ca(o)),he.turfTop&&(oe.remove(he.turfTop),he.turfTop.geometry.dispose(),he.turfTop=null),he._limeTurf){let r=he.pTurf.geometry,o=r.attributes.position,a=r.attributes.uv;for(let d=0;d<o.count;d++)a.setXY(d,o.getX(d)/3,o.getZ(d)/3);a.needsUpdate=!0,he.pTurf.material=z.limeChips;let c=Xe.turf.map(([d,g])=>[d,g]),l=new de,h=Bi(c,0,0,!1).top,u=h.attributes.position,f=new Float32Array(u.count*2);for(let d=0;d<u.count;d++){let g=u.getX(d)*St+mi,_=u.getZ(d)*St+gi;u.setY(d,Ca(_)+.04),f[d*2]=u.getX(d)/5,f[d*2+1]=u.getZ(d)/5}h.setAttribute("uv",new ve(f,2)),h.computeVertexNormals(),z.turf||(Wt.turf.repeat.set(1,1),z.turf=new ut({map:Wt.turf,color:11188380,roughness:.95,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),he.turfTop=new j(h,z.turf),he.turfTop.receiveShadow=!0,oe.add(he.turfTop)}Hi("edgeStrip",fe,1108,1394.6,1681,Je,z.ground,.75)}{let i=new $s([[-900,-900],[3e3,-900],[3e3,1681],[1394.6,1681],[1394.6,940],[486,940],[486,1681],[-900,1681]].map(([r,o])=>new ht(K(r),tt(o)))),t=new Nr(i);t.rotateX(Math.PI/2);let e=t.attributes.position;for(let r=0;r<e.count;r++)e.setY(r,-.32);let n=t.attributes.uv;for(let r=0;r<n.count;r++)n.setXY(r,e.getX(r)/14,e.getZ(r)/14);t.computeVertexNormals();let s=new j(t,z.outside);if(s.receiveShadow=!0,s.geometry.attributes.normal.getY(0)<0){let r=t.index.array;for(let o=0;o<r.length;o+=3){let a=r[o+1];r[o+1]=r[o+2],r[o+2]=a}t.computeVertexNormals()}oe.add(s)}var Zd=(i,t)=>{let e=i>=486&&i<=1394.6?Zl(rn(i,486,1394))-.3:-.32,n=rn((t-1681)/150,0,1);return e+(-.32-e)*n-Math.pow(rn((t-1690)/St,0,110),1.1)*.06};{let i=Hi("greenbelt",-900,1681,3e3,4600,Zd,z.brush,5),t=i.geometry.attributes.position,e=new Float32Array(t.count*2);for(let n=0;n<t.count;n++)e[n*2]=t.getX(n)/12,e[n*2+1]=t.getZ(n)/12;i.geometry.setAttribute("uv",new ve(e,2))}{let i=Bi(Xe.patio,-.6,0,!1),t=new j(i.top,z.concrete),e=new j(i.side,z.concrete);t.receiveShadow=e.receiveShadow=!0,oe.add(t,e);let n=Bi(Xe.wedge,-.6,.04,!0),s=new j(n.top,z.ground),r=new j(n.side,z.wood);s.receiveShadow=!0,r.castShadow=!0,oe.add(s,r)}var zl=new me;oe.add(zl);function Rx(){if(zl.clear(),Q.mode!=="existing")return;let i=24;for(let t=0;t<i;t++){let e=1e3+679*t/i,n=1e3+679*(t+1)/i,s=(e+n)/2,r=Math.min(Kr(s),Je(gn+2,s)),o=Math.max(Kr(s),Je(gn+2,s))+.12,a=new j(new we(.03,o-r+.4,(n-e)/St+.01),z.edging);a.position.set(K(gn),(o+r-.4)/2,tt(s)),a.castShadow=!0,zl.add(a)}}var Cx=14.85/St,Px=11/St,Lx=new cs(1,Ni,Px,2,.035),Hn=new qs(Lx,z.block,3e3);Hn.castShadow=Hn.receiveShadow=!0;Hn.instanceMatrix.setUsage(rd);oe.add(Hn);var Rd=(pn[0]+pn[1])/2,kl=[{key:"west",name:"Walkway west wall",built:!0,path:[[955.34,958],[955.34,1679]],aName:"walkway",bName:"lawn",flip:!0},{key:"east",name:"Walkway east wall",path:[[Rd,1108.35],[Rd,1679]],aName:"walkway",bName:"terrace side"},{key:"step",name:"Pad to pool wall",path:[[pn[1],Re],[vx,Re],...ir(Ex,bx),[Mx,Re],[fe,Re]],aName:"pool side",bName:"pad side",need:()=>Q.step1>=Qt&&!ki()},{key:"cross",name:"Pool to turf wall",path:[[pn[1],zn],[fe,zn]],aName:"turf side",bName:"pool side",need:()=>Q.step2>=Qt}];for(let i of kl){i.segs=[];let t=0;for(let e=0;e<i.path.length-1;e++){let[n,s]=i.path[e],[r,o]=i.path[e+1],a=Math.hypot(r-n,o-s);i.segs.push({ax:n,ay:s,dx:(r-n)/a,dy:(o-s)/a,s0:t,L:a}),t+=a}i.len=t}function Ix(i,t){let e=i.segs[i.segs.length-1];for(let s of i.segs)if(t<=s.s0+s.L){e=s;break}let n=rn(t-e.s0,0,e.L);return{x:e.ax+e.dx*n,y:e.ay+e.dy*n,tx:e.dx,ty:e.dy}}var Kl=new C(0,1,0),Pa=new ge,La=new mn,Ia=new C,Da=new C,Cd=new zt;function Dx(){let i=Math.sqrt(Kn*Kn-(Re-Lt[1])**2),t=Math.atan2(Re-Lt[1],-i),e=Math.atan2(Re-Lt[1],i);return[[pn[1],Re],[Lt[0]-i,Re],...ir(t,e,Kn),[Lt[0]+i,Re],[fe,Re]]}function Ux(i){i.segs=[];let t=0;for(let e=0;e<i.path.length-1;e++){let[n,s]=i.path[e],[r,o]=i.path[e+1],a=Math.hypot(r-n,o-s);i.segs.push({ax:n,ay:s,dx:(r-n)/a,dy:(o-s)/a,s0:t,L:a}),t+=a}i.len=t}function Nx(){{let n=kl.find(s=>s.key==="step");n.path=Dx(),Ux(n)}let i=0,t=[],e=12;for(let n of kl){let s=(n.built||Q.mode==="proposed")&&(!n.need||n.need()),r={r:n,count:0,maxFace:0,maxSide:"",len:n.len/St,on:s};if(!s){t.push(r);continue}let o=u=>{let f=Ix(n,u),d=-f.ty,g=f.tx,_=n.flip?-1:1,m=He(f.x+d*e*_,f.y+g*e*_),p=He(f.x-d*e*_,f.y-g*e*_);return{p:f,A:m,B:p,top:Math.ceil((Math.max(m,p)-.04)/Ni),bot:Math.floor((Math.min(m,p)+.04)/Ni)-1}},a=Cx*St,c=1e9,l=-1e9;for(let u=0;u<=n.len;u+=a/2){let f=o(u);c=Math.min(c,f.bot),l=Math.max(l,f.top)}let h=re(n.key.length*97);for(let u=c;u<l;u++){let f=(u%2+2)%2?a/2:0;for(let d=-f;d<n.len;d+=a){let g=Math.max(d,0),_=Math.min(d+a,n.len);if(_-g<a*.18)continue;let m=(g+_)/2,p=o(m);if(u<p.bot||u>=p.top)continue;let y=Math.max(p.top*Ni-Math.min(p.A,p.B),0);y>r.maxFace&&(r.maxFace=y,r.maxSide=p.A<p.B?n.aName:n.bName);let x=(_-g)/St-.012,M=(h()-.5)*.03;Da.set(K(p.p.x)-p.p.ty*M,u*Ni+Ni/2,tt(p.p.y)+p.p.tx*M),La.setFromAxisAngle(Kl,Math.atan2(-p.p.ty,p.p.tx)),Ia.set(x,1,1),Pa.compose(Da,La,Ia),Hn.setMatrixAt(i,Pa);let b=.9+h()*.16;Cd.setRGB(b,b*(.98+h()*.03),b*(.95+h()*.05)),Hn.setColorAt(i,Cd),i++,r.count++}}t.push(r)}return Hn.count=i,Hn.instanceMatrix.needsUpdate=!0,Hn.instanceColor&&(Hn.instanceColor.needsUpdate=!0),Hn.computeBoundingSphere(),t}var Pd=["#c9b3a3","#b9a99b","#a39a92","#d4c5b6","#9da3a8","#c2a597","#8f8a86","#e0d6ca","#b7aea6","#a9998c","#cfc0b0"].map(i=>new zt(i)),Ox=[0,1,2].map(i=>{let t=new Li(1,2);return t.deleteAttribute("uv"),t.deleteAttribute("normal"),Na(Cl(t),.28,1.1,17+i*31,1)}),Fx=new ut({color:16777215,roughness:.55,metalness:.02}),Gl=Ox.map(i=>{let t=new qs(i,Fx,1400);return t.castShadow=t.receiveShadow=!0,oe.add(t),t}),Bx=(()=>{let i=re(909),t=[],e=8,n=new Map,s=(c,l)=>c+","+l,r=(c,l,h)=>{let u=Math.floor(c/e),f=Math.floor(l/e);for(let d=u-2;d<=u+2;d++)for(let g=f-2;g<=f+2;g++)for(let _ of n.get(s(d,g))||[])if(Math.hypot(_.px-c,_.py-l)<(_.ru+h)*.92)return!1;return!0},o=c=>{t.push(c);let l=s(Math.floor(c.px/e),Math.floor(c.py/e));n.has(l)||n.set(l,[]),n.get(l).push(c)},a=[{edge:c=>1108.6-(c-1036)*(2.35/329),depth:c=>(37.6-(c-1036)*(3.7/329))/2+3,dir:1},{edge:()=>1679,depth:()=>17,dir:-1}];for(let c of a)for(let l=0;l<9e3;l++){let h=pn[1]+2+i()*(fe-pn[1]-4),u=c.depth(h),f=Math.pow(i(),1.25)*1.25;if(f>1&&i()>.25)continue;let d=c.edge(h)+c.dir*f*u,g=(3.2-2*Math.min(f,1))*(.7+i()*.45),_=g/12*St;r(h,d,_)&&o({px:h,py:d,ru:_,r:g/12,v:Math.floor(i()*3),rot:i()*De,sx:1+i()*.35,sz:.75+i()*.3,sy:.42+i()*.18,c:Pd[Math.floor(i()*Pd.length)].clone().offsetHSL(0,0,(i()-.5)*.08)})}return t})();function Hx(){let i=[0,0,0];if(Q.mode==="proposed")for(let e of Bx){let n=Gl[e.v],s=i[e.v]++,r=He(e.px,e.py);Da.set(K(e.px),r+e.r*e.sy*.45,tt(e.py)),La.setFromAxisAngle(Kl,e.rot),Ia.set(e.r*e.sx,e.r*e.sy,e.r*e.sz),Pa.compose(Da,La,Ia),n.setMatrixAt(s,Pa),n.setColorAt(s,e.c)}Gl.forEach((e,n)=>{e.count=i[n],e.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.needsUpdate=!0),e.computeBoundingSphere()})}var ps=new me;oe.add(ps);var Gr=new ut({color:2829101,roughness:.55,metalness:.6});function Vr(i,t,e,n,s=.03){let r=i.length,o=t?r:r-1;for(let a=0;a<o;a++){let[c,l]=i[a],[h,u]=i[(a+1)%r],f=Math.hypot(h-c,u-l);if(f<.5)continue;let d=Math.max(1,Math.ceil(f/10)),g=(h-c)/f,_=(u-l)/f;for(let x=0;x<d;x++){let M=x/d*f,b=(x+1)/d*f,T=(M+b)/2,S=c+g*T,L=l+_*T,[v,E]=e(S,L,-_,g),U=new j(new we(s,v-E,(b-M)/St+.004),n);U.position.set(K(S),(v+E)/2,tt(L)),U.rotation.y=Math.atan2(g,_),U.castShadow=U.receiveShadow=!0,ps.add(U)}let[m,p]=e(h,u,-_,g),y=new j(new we(s*1.6,m-p,s*1.6),n);y.position.set(K(h),(m+p)/2,tt(u)),y.rotation.y=Math.atan2(g,_),ps.add(y)}}var zx=new ut({color:12108488,roughness:.35,metalness:.6,emissive:5924976,emissiveIntensity:.6}),kx=new ut({color:13617339,roughness:.95,emissive:3814959,emissiveIntensity:.4});function Gx(){let i=[];for(let e=1108;e<=1681;e+=573/40)i.push([Vd(e),e]);if(Vr(i,!1,(e,n)=>{let s=jr(e-4,n),r=Je(e+4,n);return[Math.ceil((Math.max(s,r)+.5*Qt)/Ni)*Ni,Math.min(s,r)-.35]},Gr),ki()){let e=[],n=fn(),s=Math.sqrt(Jn*Jn-(Lt[1]-Te)**2),r=3.5*St,o=2*St;for(let m=1057+r/2;m<1344;m+=r)Math.abs(m-Lt[0])<s+4||e.push([m,Te,0,-1]);let a=Math.atan2(Te-Lt[1],s),c=Math.atan2(Te-Lt[1],-s),l=(a-c+De)%De,h=Math.max(2,Math.round(l*Jn/r));for(let m=0;m<h;m++){let p=a-l*(m+.5)/h;e.push([Lt[0]+Math.cos(p)*Jn,Lt[1]+Math.sin(p)*Jn,Math.cos(p),Math.sin(p)])}for(let[m,p,y,x]of e){let M=m+y*o,b=p+x*o,T=n-.5,S=new j(new we(.15,.15,o/St),zx);S.position.set(K((m+M)/2),T,tt((p+b)/2)),S.rotation.y=Math.atan2(y,x),ps.add(S);let L=new j(new Ee(.42,.42,1.6,16),kx);L.position.set(K(M),T-.6,tt(b)),ps.add(L)}Vr(Xe.pad,!0,(m,p,y,x)=>{let M=Bl(m+y*4,p+x*4),b=Bl(m-y*4,p-x*4),T=Math.min(M,b,fn()-2*Qt);return[fn()+.4*Qt,T-.3]},Gr);for(let m of[[[pn[1],Te],[1057,Te]],[[1344,Te],[fe,Te]]])Vr(m,!1,()=>[fn()+.4*Qt,kn()-.3],Gr);let u=1072,f=1108,d=Te,g=Te+15,_=(fn()+kn())/2;Vr([[u,d],[u,g],[f,g],[f,d]],!1,()=>[_+.4*Qt,kn()-.3],Gr)}let t=Xe.turf;return Vr([[t[0][0],t[0][1]],[t[1][0],t[1][1]],[t[2][0],t[2][1]],[t[3][0],t[3][1]]],!0,(e,n)=>{let s=jr(e,n);return[s+.4*Qt,s-.3]},Gr,.02),0}function Vx(){ps.clear();let i=0;if(Q.mode!=="proposed")return 0;if(Q.ver!=="plan")return Gx();for(let t=0;t<Pl.length-1;t++){let[e,n]=Pl[t],[s,r]=Pl[t+1],o=Math.hypot(s-e,r-n),a=Math.max(1,Math.ceil(o/12)),c=(s-e)/o,l=(r-n)/o;for(let h=0;h<a;h++){let u=h/a*o,f=(h+1)/a*o,d=(u+f)/2,g=e+c*d,_=n+l*d,m=jr(g-Math.abs(l)*3,_-(c!==0?t===1?3:-3:0)),p=Je(g+Math.abs(l)*3,_+(c!==0?t===1?3:-3:0));i=Math.max(i,Math.abs(m-p));let y=Math.max(m,p)+Qt,x=Math.min(m,p)-.3,M=new j(new we(.04,y-x,(f-u)/St+.005),z.edging);M.position.set(K(g),(y+x)/2,tt(_)),M.rotation.y=Math.atan2(c,l),M.castShadow=M.receiveShadow=!0,ps.add(M)}}return i}var Vl=new me;oe.add(Vl);var Wx=new cs(23*Qt,.16,23*Qt,2,.03),jl=new me;oe.add(jl);var ls=null,qr=new me;oe.add(qr);function Ld(i,t,e,n,s){let o=Bi(i,0,0,!1).top,a=o.attributes.position,c=new Float32Array(a.count*2),l=$r[e].span,h=Math.cos(n),u=Math.sin(n);for(let g=0;g<a.count;g++){a.setY(g,t);let _=a.getX(g),m=a.getZ(g);c[g*2]=(_*h+m*u)/l,c[g*2+1]=(-_*u+m*h)/l}o.setAttribute("uv",new ve(c,2)),o.computeVertexNormals();let f=new ut({map:$r[e].tex,roughness:.85,transparent:Q.under,opacity:Q.under?.22:1,depthWrite:!Q.under,polygonOffset:!0,polygonOffsetFactor:-2-s,polygonOffsetUnits:-2-s}),d=new j(o,f);return d.receiveShadow=!0,d.renderOrder=s,d}var Xx=()=>ki()?Jn:Kn+5.5;function wa(i){let t=1057+i,e=1344-i,n=1151+i,s=Te-i,r=Xx()+i,o=Math.sqrt(r*r-(Lt[1]-s)**2),a=Math.atan2(s-Lt[1],o),c=Math.atan2(s-Lt[1],-o),l=[];for(let h=1;h<24;h++){let u=a+(c-a)*h/24;l.push([Lt[0]+Math.cos(u)*r,Lt[1]+Math.sin(u)*r])}return[[t,n],[e,n],[e,s],[Lt[0]+o,s],...l,[Lt[0]-o,s],[t,s]]}var Id={anthracite:["#3e3e41","#46464a","#4f4f53","#38383b","#555559","#424245"],amaretto:["#c39a72","#b98a62","#cfa77b","#a87a57","#d3ae84","#b5845c"],red:["#a65a41","#b4684b","#9a5038","#bf7656","#a9603f","#b06a52","#94553d"],walnut:["#6b4a35","#7a5640","#5e4030","#86614a","#704f3a","#55392a"],charcoal:["#4b4744","#5a5550","#3f3c3a","#6b645c","#55504a","#7a6f62"]},Yx={anthracite:2829101,amaretto:9205606,red:7232077,walnut:4536109,charcoal:2894376},qx=new cs(1,.06,1,1,.012);function Zx(i){let t=new me,e=fn()+.012,n=Q.under,s=new ut({color:Yx[i],roughness:1,transparent:n,opacity:n?.22:1,depthWrite:!n}),r=wa(0),o=wa(8*Qt*St),a=new j(Bi(r,0,0,!1).top,s);a.geometry.translate(0,e,0),a.receiveShadow=!0,t.add(a);let c=wa(4*Qt*St).map(([P,D])=>[K(P),tt(D)]),l=c.length,h=4*Qt,u=8*Qt,f=.25*Qt,d=P=>{let D=c[(P-1+l)%l],O=c[P],H=c[(P+1)%l],X=Math.atan2(O[1]-D[1],O[0]-D[0]),k=Math.atan2(H[1]-O[1],H[0]-O[0]),Y=Math.abs(k-X);return Y>Math.PI&&(Y=De-Y),Y},g=c.map((P,D)=>d(D)>.4),_=[],m={},p={},y=[];g.forEach((P,D)=>{P&&y.push(D)}),y.length||(y=[0]);for(let P=0;P<y.length;P++){let D=y[P],O=y[(P+1)%y.length],H=[],X=D;do H.push(c[X]),X=(X+1)%l;while(X!==O);H.push(c[O]);let k=[0];for(let V=1;V<H.length;V++)k.push(k[V-1]+Math.hypot(H[V][0]-H[V-1][0],H[V][1]-H[V-1][1]));let Y=k[k.length-1],nt=Math.max(1,Math.floor((Y-u)/(h+f))),ot=(Y-nt*(h+f))/2;m[O]=ot,p[D]=ot;for(let V=0;V<nt;V++){let et=ot+(V+.5)*(h+f),st=1;for(;st<k.length-1&&k[st]<et;)st++;let Mt=(et-k[st-1])/(k[st]-k[st-1]||1),vt=H[st-1][0]+(H[st][0]-H[st-1][0])*Mt,Ct=H[st-1][1]+(H[st][1]-H[st-1][1])*Mt,It=Math.atan2(H[st][1]-H[st-1][1],H[st][0]-H[st-1][0]);_.push([vt,Ct,It,h,u])}}let x=Id[i],M=re(i.length*7+3);c.forEach((P,D)=>{if(!g[D])return;let O=c[(D-1+l)%l],H=c[(D+1)%l],X=[P[0]-O[0],P[1]-O[1]],k=Math.hypot(...X),Y=[H[0]-P[0],H[1]-P[1]],nt=Math.hypot(...Y);X[0]/=k,X[1]/=k,Y[0]/=nt,Y[1]/=nt;let ot=[K(r[D][0]),tt(r[D][1])],V=[K(o[D][0]),tt(o[D][1])],et=se=>{let Dt=-se[1],R=se[0];return Math.sign((ot[0]-P[0])*Dt+(ot[1]-P[1])*R)||1},st=(m[D]??u/2)-f/2,Mt=(p[D]??u/2)-f/2,vt=[P[0]-X[0]*st,P[1]-X[1]*st],Ct=[P[0]+Y[0]*Mt,P[1]+Y[1]*Mt],It=et(X),At=et(Y),ft=[-X[1]*It,X[0]*It],B=[-Y[1]*At,Y[0]*At],Rt=u/2-f/2,Et=[[vt[0]+ft[0]*Rt,vt[1]+ft[1]*Rt],ot,[Ct[0]+B[0]*Rt,Ct[1]+B[1]*Rt],[Ct[0]-B[0]*Rt,Ct[1]-B[1]*Rt],V,[vt[0]-ft[0]*Rt,vt[1]-ft[1]*Rt]].map(([se,Dt])=>[se*St+mi,Dt*St+gi]),Ht=Bi(Et,0,.05,!1),wt=new ut({color:x[Math.floor(M()*x.length)],roughness:.85,transparent:n,opacity:n?.22:1,depthWrite:!n});for(let se of[Ht.top,Ht.side]){let Dt=new j(se,wt);Dt.position.y=e-.012,Dt.receiveShadow=!0,t.add(Dt)}});let b=Id[i],T=new ut({color:16777215,roughness:.85,transparent:n,opacity:n?.22:1,depthWrite:!n}),S=new qs(qx,T,_.length),L=re(i.length*13+_.length),v=new ge,E=new mn,U=new C,F=new C,q=new zt;return _.forEach(([P,D,O,H,X],k)=>{F.set(P,e-.012,D),E.setFromAxisAngle(Kl,-O),U.set(H-f,1,X-f),v.compose(F,E,U),S.setMatrixAt(k,v),q.set(b[Math.floor(L()*b.length)]),S.setColorAt(k,q)}),S.receiveShadow=!0,t.add(S),t}function $x(){if(qr.clear(),Q.ver==="plan")return;let i=Q.ver==="feedback",t=i&&Q.fbPat==="90"?0:Math.PI/4,e=i?Q.fbColor:"amaretto",n=e==="amaretto"?"amaretto":"hb_"+e,s=i?e==="amaretto"?"amaSoldier":"so_"+e:"anthracite";qr.add(Zx(!i||e==="amaretto"?"anthracite":e)),qr.add(Ld(wa(8*Qt*St),fn()+.016,n,t,2));let r=(fn()+kn())/2;ki()&&qr.add(Ld([[1072,Te],[1108,Te],[1108,Te+15],[1072,Te+15]],r,n,t,2))}function $d(){$x(),ls&&(oe.remove(ls),ls.geometry.dispose(),ls=null);let i=Q.padSurf;if(Q.ver!=="plan"||i==="brick"||!$r[i])return;let e=Bi(Xe.pad,0,0,!1).top,n=e.attributes.position,s=new Float32Array(n.count*2),r=$r[i].span;for(let a=0;a<n.count;a++)n.setY(a,fn()+.012),s[a*2]=n.getX(a)/r,s[a*2+1]=n.getZ(a)/r;e.setAttribute("uv",new ve(s,2)),e.computeVertexNormals();let o=new ut({map:$r[i].tex,roughness:i==="conc"?.9:.85,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});ls=new j(e,o),ls.receiveShadow=!0,oe.add(ls)}for(let i of Xe.pavers){let t=(i[0]+i[2])/2,e=(i[1]+i[3])/2;if(i[0]>975&&i[0]<990){let n=new j(Wx,z.stone);n.position.set(K((Aa+gn)/2),0,tt(e)),n.rotation.y=(re(Math.round(e))()-.5)*.02,n.castShadow=n.receiveShadow=!0,Vl.add(n),Gn(n,(Aa+gn)/2,e,.05)}else{let n=(i[2]-i[0])/St,s=(i[3]-i[1])/St,r=new j(new cs(n,.14,s,2,.025),z.stone);r.position.set(K(t),0,tt(e)),r.castShadow=r.receiveShadow=!0,i[0]>1050?(jl.add(r),Gn(r,t,e,.04)):(Vl.add(r),Gn(r,t,e,.05))}}var ie=new me;oe.add(ie);var hs=580,Wr=1296,tr=376,us=950,Sa=8.7,Jx=.35;{let s=function(S,L,v,E,U,F,q){let P=Math.hypot(v-S,E-L)/St,D=new Ke(P,i-.05);rr(D,P/q,(i-.05)/q);let O=new j(D,F);if(O.castShadow=O.receiveShadow=!0,O.position.set(K((S+v)/2),-.3+(i-.05)/2,tt((L+E)/2)),O.rotation.y=U,ie.add(O),F===z.siding){let H=new j(new Ke(P,1.1),z.skirt);H.position.set(O.position.x+Math.sin(U)*.01,.25,O.position.z+Math.cos(U)*.01),H.rotation.y=U,H.receiveShadow=!0,ie.add(H)}return O},r=function(S,L,v,E){let F=K(S)-1.2,q=K(v)+1.2,P=tt(L)-1.2,D=tt(E)+1.2,O=q-F>=D-P,H=(O?D-P:q-F)/2,X=H*4/12,k=Sa-.25,Y=k+X,nt=[],ot=[],V=Math.hypot(H,X),et=(ft,B,Rt,Et)=>{nt.push(...ft,...B,...Rt,...ft,...Rt,...Et),ot.push(ft[0]/3+ft[2]/3,0,B[0]/3+B[2]/3,0,Rt[0]/3+Rt[2]/3,V/3,ft[0]/3+ft[2]/3,0,Rt[0]/3+Rt[2]/3,V/3,Et[0]/3+Et[2]/3,V/3)},st=(ft,B,Rt)=>{nt.push(...ft,...B,...Rt),ot.push(ft[0]/3+ft[2]/3,0,B[0]/3+B[2]/3,0,Rt[0]/3+Rt[2]/3,V/3)};if(O){let ft=(P+D)/2,B=F+H,Rt=q-H;et([F,k,D],[q,k,D],[Rt,Y,ft],[B,Y,ft]),et([q,k,P],[F,k,P],[B,Y,ft],[Rt,Y,ft]),st([F,k,P],[F,k,D],[B,Y,ft]),st([q,k,D],[q,k,P],[Rt,Y,ft])}else{let ft=(F+q)/2,B=P+H,Rt=D-H;et([q,k,D],[q,k,P],[ft,Y,B],[ft,Y,Rt]),et([F,k,P],[F,k,D],[ft,Y,Rt],[ft,Y,B]),st([q,k,P],[F,k,P],[ft,Y,B]),st([F,k,D],[q,k,D],[ft,Y,Rt])}let Mt=new de;Mt.setAttribute("position",new Nt(nt,3)),Mt.setAttribute("uv",new Nt(ot,2)),Mt.computeVertexNormals();let vt=new j(Mt,z.shingle);vt.castShadow=vt.receiveShadow=!0,ie.add(vt);let Ct=(F+q)/2,It=(P+D)/2;for(let[ft,B,Rt,Et]of[[q-F,.08,Ct,D],[q-F,.08,Ct,P],[.08,D-P,F,It],[.08,D-P,q,It]])$t(ft,.55,B,z.trim,Rt,k-.2,Et,ie);let At=new j(new Ke(q-F,D-P),z.trim);At.rotation.x=Math.PI/2,At.position.set(Ct,k-.45,It),ie.add(At)},o=function(S,L,v,E,U,F,q){let D=.3333333333333333,O=K(S)-U,H=K(v)+F,X=tt(L)-1.2,k=tt(E)+1.2,Y=(X+k)/2,nt=Sa-.25,ot=nt+(Y-X)*D,V=Math.hypot(Y-X,ot-nt),et=[],st=[],Mt=(ft,B,Rt,Et)=>{et.push(...ft,...B,...Rt,...ft,...Rt,...Et),st.push(ft[0]/3,0,B[0]/3,0,Rt[0]/3,V/3,ft[0]/3,0,Rt[0]/3,V/3,Et[0]/3,V/3)};Mt([H,nt,X],[O,nt,X],[O,ot,Y],[H,ot,Y]),Mt([O,nt,k],[H,nt,k],[H,ot,Y],[O,ot,Y]);let vt=new de;if(vt.setAttribute("position",new Nt(et,3)),vt.setAttribute("uv",new Nt(st,2)),vt.computeVertexNormals(),vt.attributes.normal.getY(0)<0){let ft=vt.attributes.position;for(let B=0;B<ft.count;B+=3)for(let Rt of[0,1,2]){let Et=ft.getComponent(B+1,Rt);ft.setComponent(B+1,Rt,ft.getComponent(B+2,Rt)),ft.setComponent(B+2,Rt,Et)}vt.computeVertexNormals()}let Ct=new j(vt,z.shingle);Ct.castShadow=Ct.receiveShadow=!0,ie.add(Ct);let It=(O+H)/2;for(let ft of[X,k])$t(H-O,.55,.08,z.trim,It,nt-.2,ft,ie);$t(H-O,.12,.25,z.trim,It,ot+.03,Y,ie);let At=new j(new Ke(H-O,k-X),z.trim);At.rotation.x=Math.PI/2,At.position.set(It,nt-.45,Y),ie.add(At),z.gableEnd||(z.gableEnd=z.siding.clone(),z.gableEnd.side=Se);for(let[ft,B,Rt]of[["w",O,K(S)],["e",H,K(v)]]){if(!q.includes(ft))continue;let Et=tt(L),Ht=tt(E),wt=nt+(Et-X)*D,se=Sa-.35,Dt=[Et,se,Ht,se,Ht,wt,Et,se,Ht,wt,Y,ot-.05,Et,se,Y,ot-.05,Et,wt],R=[],w=[];for(let it=0;it<Dt.length;it+=2)R.push(Rt+(ft==="w"?-.02:.02),Dt[it+1],Dt[it]),w.push(Dt[it]/4,Dt[it+1]/4);let W=new de;W.setAttribute("position",new Nt(R,3)),W.setAttribute("uv",new Nt(w,2)),W.computeVertexNormals();let lt=new j(W,z.gableEnd);lt.castShadow=lt.receiveShadow=!0,ie.add(lt);for(let[it,at]of[[X,Y],[k,Y]]){let Pt=Math.hypot(at-it,ot-nt),yt=new j(new we(.1,.5,Pt),z.trim);yt.position.set(B,(nt+ot)/2-.18,(it+at)/2),yt.rotation.x=-Math.atan2(ot-nt,at-it),ie.add(yt)}}},i=Sa+.35,t=480,e=875,n=967;s(hs,us,Wr,us,0,z.siding,4),s(Wr,t,Wr,us,Math.PI/2,z.siding,4),s(hs,t,hs,us,-Math.PI/2,z.siding,4),s(hs,tr,hs,t,-Math.PI/2,z.siding,4),s(hs,tr,e,tr,Math.PI,z.stoneWall,8),s(e,tr,e,t,Math.PI/2,z.stoneWall,8),s(e,t,Wr,t,Math.PI,z.stoneWall,8),o(hs,tr,e,us,1.2,0,["w","e"]),o(e,t,Wr,us,0,1.2,["e"]);let a=tt(tr)-.03,c=tt(t)-.03;{let S=new j(new Ke(16,7),z.garageDoor);S.position.set(K(727),-.3+3.5,a),S.rotation.y=Math.PI,ie.add(S);for(let[L,v,E,U]of[[16.6,.35,0,3.65],[.3,7,-8.15,0],[.3,7,8.15,0]])$t(L,v,.15,z.trim,K(727)+E,-.3+3.5+U,a-.05,ie)}{let S=new j(new Ke(3,6.8),z.frontDoor);S.position.set(K(902),-.15+3.4,c),S.rotation.y=Math.PI,ie.add(S);for(let[E,U]of[[902,3]])for(let[F,q,P,D]of[[U+.5,.3,0,3.55],[.25,6.8,-U/2-.12,0],[.25,6.8,U/2+.12,0]])$t(F,q,.12,z.trim,K(E)+P,-.15+3.4+D,c-.05,ie);let L=new j(new Ke(1.6,6.4),z.blinds);L.position.set(K(940),-.15+3.4,c),L.rotation.y=Math.PI,ie.add(L);for(let[E,U,F,q]of[[2.1,.25,0,3.3],[.22,6.6,-.9,0],[.22,6.6,.9,0]])$t(E,U,.12,z.trim,K(940)+F,-.15+3.4+q,c-.05,ie);let v=new j(new Ii(.09,10,8),z.steelPost);v.position.set(K(902)-1.15,3.1,c-.08),ie.add(v)}{let S=K(1150),L=3.4,v=4.6,E=2.9,U=new j(new Ke(L,v),z.blinds);U.position.set(S,E+v/2,c),U.rotation.y=Math.PI,ie.add(U);for(let[F,q,P,D]of[[L+.6,.3,0,v/2+.15],[L+.8,.25,0,-v/2-.12],[.3,v,-L/2-.15,0],[.3,v,L/2+.15,0],[L,.08,0,0]])$t(F,q,.14,z.trim,S+P,E+v/2+D,c-.06,ie)}let l=(S,L,v)=>{let E=Bi(S,-.6,L,!1),U=new j(E.top,v),F=new j(E.side,v);return U.receiveShadow=F.receiveShadow=!0,ie.add(U,F),U};l(Xe.driveway.map(([S,L])=>[S,L]).concat([]),-.2,z.concrete),l([[876,383],[967,383],[967,470],[876,470]],-.08,z.concrete),l([[592,-160],[841,-160],[841,-97],[592,-97]],-.19,z.concrete);{let S=l(Xe.frontRock,-.26,z.chips)}l([[-900,-153],[3e3,-153],[3e3,-97],[-900,-97]],-.17,z.concrete),$t(3900/St,.42,.5,z.concrete,K(1050),-.36,tt(-158),ie),l([[-900,-680],[3e3,-680],[3e3,-160],[-900,-160]],-.3,z.asphalt),$t(3900/St,.42,.5,z.concrete,K(1050),-.36,tt(-682),ie),l([[-900,-745],[3e3,-745],[3e3,-688],[-900,-688]],-.17,z.concrete);{let S=new j(new Ee(.16,.22,24,10),z.steelPost);S.position.set(K(505),11.7,tt(-122)),S.castShadow=!0,ie.add(S);let L=$t(5,.18,.18,z.steelPost,K(505)+2.4,23.4,tt(-122),ie);L.rotation.z=0,$t(1.6,.35,.7,z.steelPost,K(505)+4.6,23.2,tt(-122),ie)}let h=re(55);for(let[S,L,v]of[[1278,505,2.3],[1240,500,1.4],[1060,500,1.1],[990,495,1],[1205,498,1.2]]){let E=new j(Na(new Li(v,2),.35,1.4/v,h()*40,.85),new ut({color:new zt().setHSL(.27,.35,.24+h()*.06),roughness:1}));E.position.set(K(S),v*.6-.3,tt(L)-1.6),E.castShadow=E.receiveShadow=!0,ie.add(E)}let u=tt(us)+.02;for(let[S,L,v,E,U]of[[690,2.4,2,5,"grid"],[815,3.4,4,3,"blinds"],[905,3.6,4.6,2.7,"blinds"],[1080,6,6.8,Jx,"door"],[1185,4.4,4,3,"blinds"]]){let F=K(S),q=new j(new Ke(L,v),U==="blinds"?z.blinds:z.glassDark);q.position.set(F,E+v/2,u+.01),ie.add(q);for(let[P,D,O,H]of[[L+.5,.28,0,v/2+.14],[L+.5,.22,0,-v/2-.11],[.25,v,-L/2-.12,0],[.25,v,L/2+.12,0]])$t(P,D,.12,z.trim,F+O,E+v/2+H,u+.05,ie);if(U==="grid"){$t(.06,v,.05,z.trim,F,E+v/2,u+.04,ie);for(let P of[-1/6,1/6])$t(L,.06,.05,z.trim,F,E+v/2+P*v,u+.04,ie)}U==="door"&&$t(.12,v,.06,z.trim,F,E+v/2,u+.05,ie)}let f=K(957),d=K(1028),g=tt(909),_=tt(965),m=d-f,p=_-g,y=16.6,x=new j(rr(new we(m,y+.3,p),m/4,y/4),z.siding);x.position.set((f+d)/2,(y-.3)/2,(g+_)/2),x.castShadow=x.receiveShadow=!0,ie.add(x),$t(m+.35,.25,p+.35,z.steelPost,(f+d)/2,y+.1,(g+_)/2,ie);let M=new j(new Ee(.33,.33,1.1,16),z.steelPost);M.position.set(K(994.56),y+.75,tt(925.43)),M.castShadow=!0,ie.add(M);let b=new j(new is(.55,.4,16),z.steelPost);b.position.set(K(994.56),y+1.5,tt(925.43)),ie.add(b);let T=re(77);for(let S=600;S<945;S+=26+T()*10){let L=new j(new Li(.9+T()*.5,1),new ut({color:new zt().setHSL(.27+T()*.05,.32,.22+T()*.08),roughness:1,flatShading:!0}));L.scale.y=.75,L.position.set(K(S),.3,tt(975)),L.castShadow=!0,ie.add(L)}}{let i=new me;oe.add(i);let t=K(1022),e=K(1306),n=tt(951),s=tt(1098),r=tt(1112),o=8.25,a=7.35,c=(o-a)/(s-n),l=m=>o-(m-n)*c;for(let m of[1032,1170,1298])$t(.3,a-.55,.3,z.white,K(m),(a-.55)/2,s,i);$t(e-t,.6,.32,z.white,(t+e)/2,a-.3,s,i),$t(e-t,.45,.2,z.white,(t+e)/2,o-.2,n+.12,i);let h=Math.atan(c),u=(r-n)/Math.cos(h);for(let m=t+.2;m<=e;m+=2){let p=$t(.15,.45,u,z.wood,m,l((n+r)/2)+.2,(n+r)/2,i);p.rotation.x=h}for(let m=n+1.2;m<r;m+=2.4){let p=$t(e-t+.4,.12,.25,z.wood,(t+e)/2,l(m)+.5,m,i);p.rotation.x=h}let f=new Ke(e-t+.6,u+.3),d=f.attributes.uv;for(let m=0;m<d.count;m++)d.setXY(m,d.getX(m)*(e-t)/.44,d.getY(m));let g=new j(f,z.corr);g.rotation.x=-Math.PI/2+h,g.position.set((t+e)/2,l((n+r)/2)+.6,(n+r)/2),g.castShadow=g.receiveShadow=!0,i.add(g);let _=re(5);for(let[m,p]of[[[t+1,s],[e-1,n+1]],[[t+1,n+1],[e-1,s-.5]]]){let y=[];for(let M=0;M<=24;M++){let b=M/24,T=m[0]+(p[0]-m[0])*b,S=m[1]+(p[1]-m[1])*b;y.push(new C(T,l(S)-.2-Math.sin(b*Math.PI)*.9,S))}let x=new Fn(y);i.add(new j(new Zn(x,48,.02,4),z.wire));for(let M=1;M<12;M++){let b=x.getPoint(M/12),T=new j(new Ii(.11,8,6),z.bulb);T.position.copy(b).y-=.25,i.add(T)}}}var pi=new me;oe.add(pi);var Ll=i=>Math.min(Zl(i),i>pn[1]&&Q.mode==="proposed"?jr(i,1681):99);function Xr(i,t,e){let[n,s]=i,[r,o]=t,a=Math.hypot(r-n,o-s)/St,c=Math.max(1,Math.round(a/8)),l=Math.atan2(-(tt(o)-tt(s)),K(r)-K(n));for(let h=0;h<c;h++){let u=h/c,f=(h+1)/c,d=(u+f)/2,g=n+(r-n)*d,_=s+(o-s)*d,m=1e9;for(let L of[u,d,f])m=Math.min(m,e.ground(n+(r-n)*L,s+(o-s)*L));let p=Math.min(m,e.minBase??1e9)-.15,y=6+.15,x=a/c,M=rr(new we(x,y,.07),x/4,y/6),b=new j(M,z.board);if(b.position.set(K(g),p+y/2,tt(_)),b.rotation.y=l,b.castShadow=b.receiveShadow=!0,pi.add(b),e.cap){let L=$t(x+.05,.12,.5,z.board,K(g),p+y+.06,tt(_),pi,l)}let T=n+(r-n)*u,S=s+(o-s)*u;if(e.steel){let L=new j(new Ee(.12,.12,y+.2,10),z.steelPost),v=Math.sin(l)*e.side,E=Math.cos(l)*e.side;L.position.set(K(T)+v*.15,p+(y+.2)/2,tt(S)+E*.15),L.castShadow=!0,pi.add(L)}else $t(.3,y+.1,.3,z.board,K(T),p+(y+.1)/2,tt(S),pi,l)}}function Kx(){pi.clear(),Xr([573.18,765.33],[485.87,765.33],{ground:()=>-.25,steel:!0,side:1}),Xr([485.87,765.33],[485.87,1681],{ground:(i,t)=>t<1049?-.25:Oa(486,t),steel:!0,side:-1}),Xr([1394.6,1681.46],[1387.64,1052.39],{ground:(i,t)=>Je(1390,t),cap:!0}),Xr([1387.64,1052.39],[1304,945.5],{ground:()=>-.3,cap:!0}),Xr([485.87,1681],[540,1681],{ground:i=>Zl(i)});{let e=Math.round(854.5999999999999/St/8);for(let n=0;n<e;n++){let s=540+854.5999999999999*n/e,r=540+(1394.6-540)*(n+1)/e,o=(s+r)/2,a=Math.min(Ll(s),Ll(r),Ll(o))+.25,c=(r-s)/St,l=4,h=tt(1681);for(let[d,g,_,m]of[[c,.14,K(o),a+l],[c,.14,K(o),a+.07],[.14,l,K(s)+.07,a+l/2],[.14,l,K(r)-.07,a+l/2]])$t(d,g,.14,z.hogFrame,_,m,h,pi);let u=new Ke(c-.2,l-.2);rr(u,(c-.2)/(4*Qt),(l-.2)/(4*Qt));let f=new j(u,z.hogMesh);f.position.set(K(o),a+l/2,h),f.castShadow=!0,pi.add(f),$t(.2,l+.6+.3,.2,z.hogFrame,K(s),a+(l+.3)/2-.15,h,pi)}}}var Dd={post:[1352,1548],planters:[1352,1414]},fs=[1364,1440],Oi=[1342.3,1513],Wl=[1342.3,1513],sn=[1352,1548],jx=[1299,1094],er=[[1345,1440],[1345,1526]],Ua=Math.atan2(tt(1380)-tt(Lt[1]),K(1360)-K(Lt[0])),Yr=([i,t])=>Math.hypot(i-Lt[0],t-Lt[1])/St-72.5/St,Qx=new ut({color:10196364,roughness:1}),Il=ms("pool");{let i=72.5/St,t=K(Lt[0]),e=tt(Lt[1]),n=new me;n.position.set(t,0,e),Il.add(n),Gn(n,Lt[0],Lt[1],()=>-Q.sink);let s=new j(new Ee(i,i,1.9,96,1,!0),z.tank);rr(s.geometry,Math.round(De*i/1.6),1),s.position.y=.95,s.castShadow=s.receiveShadow=!0,n.add(s);let r=new j(new Ee(i-.03,i-.03,1.9,96,1,!0),z.tankIn);rr(r.geometry,Math.round(De*i/1.6),1),r.position.y=.95,r.receiveShadow=!0,n.add(r);let o=[[i-.06,1.86],[i-.07,1.98],[i-.02,2.04],[i+.12,2.05],[i+.2,2],[i+.21,1.9],[i+.17,1.86]].map(([b,T])=>new ht(b,T)),a=new j(new Lr(o,120),z.rim);a.castShadow=a.receiveShadow=!0,n.add(a);let c=new j(new Ee(i+.6,i+.6,.35,48),Qx);c.position.y=-.18,c.receiveShadow=!0,n.add(c);let l=new j(new Zs(i-.02,64),z.poolFloor);l.rotation.x=-Math.PI/2,l.position.y=.04,l.receiveShadow=!0,n.add(l);let h=new j(new Zs(i-.04,64),z.water);h.rotation.x=-Math.PI/2,h.position.y=1.68,h.renderOrder=2,n.add(h);{let b=new me;n.add(b);for(let[T,S]of[[.1,"skim"],[-.1,"ret"]]){let L=Ua+T,v=new me;if(v.position.set(Math.cos(L)*i,0,Math.sin(L)*i),v.rotation.y=-L,b.add(v),S==="skim"){$t(.06,.42,.62,z.white,-.04,1.55,0,v),$t(.02,.3,.48,z.jet,-.075,1.55,0,v),$t(.55,.75,.7,z.jet,.3,1.4,0,v);let E=new j(new Ee(.075,.075,.3,12),z.pvc);E.position.set(.3,.9,0),v.add(E)}else{let E=new j(new Ii(.12,14,10),z.white);E.position.set(-.05,.85,0),v.add(E);let U=new j(new Ee(.17,.17,.06,18),z.white);U.rotation.z=Math.PI/2,U.position.set(-.03,.85,0),v.add(U);let F=new j(new Ee(.08,.08,.5,12),z.pvc);F.rotation.z=Math.PI/2,F.position.set(.25,.85,0),v.add(F)}}}let u=new me;u.position.set(K(sn[0]),0,tt(sn[1])),Il.add(u),Gn(u,sn[0],sn[1],0);let f=or[or.length-1];window.__placePump=()=>{let b=Dd[Q.pumpAt]||Dd.post;sn[0]=b[0],sn[1]=b[1],f[1]=b[0],f[2]=b[1],u.position.set(K(b[0]),He(...b),tt(b[1])),u.rotation.y=Q.pumpAt==="planters"?Math.PI:0,Kd.forEach((T,S)=>{if(!T)return;let L=Q.pumpAt==="planters"&&Od[S]?Od[S]:T.home;T.a[1]=L[0],T.a[2]=L[1],T.g.position.set(K(L[0]),He(...L),tt(L[1]))}),u.updateMatrixWorld(!0)};let d=new j(new we(1.3,.12,2.1),z.concrete);d.position.y=.06,d.receiveShadow=d.castShadow=!0,u.add(d);let g=new j(new Ee(.3,.33,.75,24),z.pump);g.position.set(0,.5,-.45),g.castShadow=!0,u.add(g);let _=new j(new Ee(.2,.2,.5,16),z.pump);_.rotation.x=Math.PI/2,_.position.set(0,.34,-.85),_.castShadow=!0,u.add(_);let m=new j(new Ee(.36,.36,1.6,24),z.white);m.position.set(0,.92,.5),m.castShadow=!0,u.add(m);let p=new j(new Ii(.36,24,12,0,De,0,Math.PI/2),z.white);p.position.set(0,1.72,.5),u.add(p);let y=new j(new Ee(.09,.09,.05,14),z.steelPost);y.rotation.z=Math.PI/2,y.position.set(-.05,1.98,.5),u.add(y);for(let[b,T,S,L]of[[.12,.5,0,0],[.5,.5,0,-.12],[.12,.7,.95,.95],[.7,.7,.95,.8]]){let v=Math.hypot(T-b,L-S)||.01,E=new j(new Ee(.06,.06,v,10),z.pvc);E.position.set(.2,(b+T)/2,(S+L)/2),L!==S&&(E.rotation.x=Math.PI/2),u.add(E)}for(let[b,T]of[[.3,0],[.42,.95]]){let S=new j(new we(.1,.07,.24),z.valve);S.position.set(.2,b+.12,T),u.add(S)}let x=new me;Il.add(x);let M=new ut({color:16053231,roughness:.55});window.__buildHoses=()=>{x.clear();let b=72.5/St,T=K(Lt[0]),S=tt(Lt[1]),L=He(...Lt)-Q.sink,v=He(...sn),E=Q.pumpAt!=="planters",U=(D,O,H=.06)=>new C(K(D),He(D,O)+H,tt(O)),F=D=>Math.max(He(fe-3,D),He(fe+3,D))+Qt+.11;[[.1,.95,.45,-1],[-.1,.85,.6,1]].forEach(([D,O,H,X],k)=>{let Y=Ua+D,nt=[new C(T+Math.cos(Y)*(b+H),L+O,S+Math.sin(Y)*(b+H)),new C(T+Math.cos(Y)*(b+H+.5),L+.12,S+Math.sin(Y)*(b+H+.5))];if(E){let et=1394+X*4,st=1538+X*5,Mt=1379+X*3;nt.push(U(1340,et),U(fe-5,et),new C(K(fe),F(et),tt(et)),U(fe+5,et+2,-.02),U(Mt,et+10,-.04),U(Mt,1460,-.04),U(Mt,st-10,-.04),U(fe+5,st-2,-.02),new C(K(fe),F(st),tt(st)),U(fe-5,st))}else nt.push(U(1312,1388+X*3),U(1332,1404+X*3));let ot=u.localToWorld(new C(.22,.14,k?.55:-.2));nt.push(new C(ot.x,v+.1,ot.z+(E?-.6:.6)),ot);let V=new j(new Zn(new Fn(nt,!1,"catmullrom",.2),200,.07,10),M);V.castShadow=V.receiveShadow=!0,x.add(V)});let q=u.localToWorld(new C(0,.34,-1.1)),P;if(E){let D=new C(K(Wl[0]),v+1.45,tt(Wl[1])+.36);P=[q,new C(q.x-.2,v+.12,q.z-.3),new C(D.x+.05,v+.6,D.z+.4),D]}else{let D=He(...fs),O=new C(K(fs[0]),D+1.45,tt(fs[1])-.33);P=[q,new C(q.x+.2,v+.1,q.z+.3),new C(O.x-.1,D+.5,O.z-.3),O]}x.add(new j(new Zn(new Fn(P,!1,"catmullrom",.3),80,.03,6),z.hose))}}var Jd=ms("furniture");function Ud(i){let t=i.slice(0,4),e=t.reduce((c,l)=>[c[0]+l[0]/4,c[1]+l[1]/4],[0,0]),n=[t[1][0]-t[0][0],t[1][1]-t[0][1]],s=[t[2][0]-t[1][0],t[2][1]-t[1][1]],r=Math.hypot(...n),o=Math.hypot(...s),a=r>o?n:s;return{c:e,L:Math.max(r,o)/St,W:Math.min(r,o)/St,ax:[a[0]/Math.hypot(...a),a[1]/Math.hypot(...a)]}}function ty(i){let t=Ud(i.frame),e=Ud(i.back),n=[e.c[0]-t.c[0],e.c[1]-t.c[1]],s=Math.sign(n[0]*t.ax[0]+n[1]*t.ax[1])||1,r=[t.ax[0]*s,t.ax[1]*s],o=new me;o.position.set(K(t.c[0]),0,tt(t.c[1])),o.rotation.y=Math.atan2(-r[1],r[0]),Jd.add(o),Gn(o,t.c[0],t.c[1],.04);let a=t.L,c=t.W,l=Math.min(e.L,a*.45),h=t.L>4?1:1.2;for(let f of[-1,1])for(let d of[-1,1])$t(.1,h,.1,z.frame,f*(a/2-.15),h/2,d*(c/2-.1),o);$t(a,.1,c,z.frame,0,h,0,o),$t(a-l,.28,c*.94,z.cushion,-l/2,h+.18,0,o);let u=new me;u.position.set(a/2-l,h+.1,0),u.rotation.z=t.L>4?.75:.95,o.add(u),$t(l*1.15,.28,c*.94,z.cushion,l*.57,.14,0,u)}function ey(i){let t=i.frame.map(c=>c[0]),e=i.frame.map(c=>c[1]),n=(Math.min(...t)+Math.max(...t))/2,s=(Math.min(...e)+Math.max(...e))/2,r=(Math.max(...t)-Math.min(...t))/St,o=(Math.max(...e)-Math.min(...e))/St,a=new me;a.position.set(K(n),0,tt(s)),Jd.add(a),Gn(a,n,s,.04),$t(r,.08,o,z.teak,0,1.4,0,a);for(let c of[-1,1])for(let l of[-1,1])$t(.08,1.4,.08,z.teak,c*(r/2-.08),.7,l*(o/2-.08),a)}for(let i of Object.values(Xe.furniture))i.back?ty(i):ey(i);var ny=ms("umbrella");{let i=Xe.umbrella[0],t=i.slice(0,4).reduce((m,p)=>m+p[0]/4,0),e=i.slice(0,4).reduce((m,p)=>m+p[1]/4,0),n=Math.hypot(i[1][0]-i[0][0],i[1][1]-i[0][1])/St,s=Math.atan2(-(i[1][1]-i[0][1]),i[1][0]-i[0][0]),r=Xe.umbrella[2],o=r.slice(0,4).reduce((m,p)=>m+p[0]/4,0),a=r.slice(0,4).reduce((m,p)=>m+p[1]/4,0),c=new me;ny.add(c),Gn(c,o,a,0),c.position.x=K(o),c.position.z=tt(a),$t(2.4,.35,2.4,z.frame,0,.18,0,c);let l=K(t)-K(o),h=tt(e)-tt(a),u=new j(new Ee(.08,.09,9.6,12),z.frame);u.position.y=4.8,u.castShadow=!0,c.add(u);let f=Math.hypot(l,h),d=new j(new Ee(.06,.06,f,10),z.frame);d.rotation.z=Math.PI/2,d.rotation.y=Math.atan2(-h,l),d.position.set(l/2,9.5,h/2),c.add(d);let g=new j(new is(n/Math.SQRT2,1.5,4,1,!0),z.canopy);g.position.set(l,9,h),g.rotation.y=Math.PI/4+s,g.castShadow=!0,g.receiveShadow=!0,c.add(g);let _=new j(new Ee(.04,.04,.9,8),z.frame);_.position.set(l,9.3,h),c.add(_)}var Nd=ms("planters"),Kd=[],Od={5:[1338,1380],4:[1318,1416],0:[1328,1442]};{let i=re(13);Xe.planters.forEach((t,e)=>{let[n,s,r]=t[0];e===1&&(n=1330,s=1298);let o=r/St,a=Math.min(o*1.9,2.4),c=new me;c.position.set(K(n),0,tt(s)),Nd.add(c),Gn(c,n,s,0),Kd[e]={g:c,a:or[or.length-1],home:[n,s]};let l=[[o*.66,0],[o*.7,.06],[o*.9,a*.84],[o*1.02,a*.86],[o*1.03,a],[o*.93,a],[o*.9,a*.88]].map(([f,d])=>new ht(f,d)),h=new j(new Lr(l,40),z.terracotta);h.castShadow=h.receiveShadow=!0,c.add(h);let u=new j(new Zs(o*.9,24),z.soil);if(u.rotation.x=-Math.PI/2,u.position.y=a*.88,c.add(u),e%2===0){let d=[];for(let _=0;_<16;_++){let m=o*(1+i()*.6),p=new is(.11*o*1.4,m,4);p.translate(0,m/2,0),p.scale(1,1,.35),p.rotateZ(-(.35+i()*.75)),p.rotateY(_/16*De+i()*.3),d.push(p)}let g=new j(va(d),z.agave);g.position.y=a*.88,g.castShadow=!0,c.add(g)}else{let f=[];for(let g=0;g<44;g++){let _=1.2+i()*1.3,m=new is(.035,_,3);m.translate(0,_/2,0),m.rotateZ((i()-.5)*.9),m.rotateY(i()*De),m.translate((i()-.5)*o*.8,0,(i()-.5)*o*.8),f.push(m)}let d=new j(va(f),z.grassPlant);d.position.y=a*.88,d.castShadow=!0,c.add(d)}});for(let t of Xe.boulders)for(let[e,n,s,r]of t){let o=s/St,a=re(Math.round(e*7+n)),c=Na(new Li(o,2),.45,1.6/Math.max(o,.2),a()*50,.62),l=new j(c,new ut({color:r,roughness:.95,flatShading:!0}));l.position.set(K(e),0,tt(n)),l.rotation.y=a()*De,l.castShadow=l.receiveShadow=!0,Nd.add(l),Gn(l,e,n,o*.18)}}var _e=ms("electrical"),ds=[[1298.5,560],[1298.5,935]],Fi=[[1300,940],[1337,988],[1337,1500],[Oi[0],1506],[Oi[0],Oi[1]]],iy=[],Fd=[{p:[1298.5,527],name:"Main panel",kind:"panel"},{p:[1296.8,933],name:"Corner junction box",sub:"No outlet. Feeder turns down here",kind:"jbox"},{p:Oi,name:"Subpanel",kind:"sub"}],dn={pipe:new ut({color:14236223,emissive:7999508,emissiveIntensity:.55,roughness:.5}),box:new ut({color:12172736,roughness:.45,metalness:.5}),post:new ut({color:8216648,roughness:.9}),copper:new ut({color:13136954,emissive:5909004,emissiveIntensity:.5,roughness:.35,metalness:.8}),rcpt:new ut({color:7304312,roughness:.5,metalness:.3}),tape:new li({color:16762941,transparent:!0,opacity:.85,side:Se,depthWrite:!1})},sy=(i,t)=>t>=1108?Je(i,t):t>=950?-.32:-.28;function ry(i=4){let t=[];for(let e=0;e<Fi.length-1;e++){let[n,s]=Fi[e],[r,o]=Fi[e+1],a=Math.max(1,Math.ceil(Math.hypot(r-n,o-s)/i));for(let c=0;c<(e===Fi.length-2?a+1:a);c++){let l=c/a;t.push([n+(r-n)*l,s+(o-s)*l])}}return t}var sr=[];function Di(i,t,e,n,s){let r=document.createElement("div");r.className="lbl",r.innerHTML=i;let o=new Ea(r);return o.position.set(e,n,s),t.add(o),sr.push(o),o}function Dl(i,t,e,n){let s=[];for(let a=0;a<i.length-1;a++){let[c,l]=i[a],[h,u]=i[a+1],f=Math.max(1,Math.ceil(Math.hypot(h-c,u-l)/4));for(let d=0;d<f;d++){let g=d/f,_=c+(h-c)*g,m=l+(u-l)*g;s.push(new C(K(_),t(_,m),tt(m)))}}let[r,o]=i[i.length-1];return s.push(new C(K(r),t(r,o),tt(o))),new j(new Zn(new Fn(s,!1,"catmullrom",.05),s.length*3,e,8),n)}var oy=new li({color:4173418,transparent:!0,opacity:.1,depthWrite:!1,side:Se});function ay(){for(let r of sr)r.removeFromParent(),r.element.remove();sr.length=0,_e.clear();let i=Q.cdepth,t=(r,o)=>sy(r,o)-i;_e.add(Dl(Fi,t,.09,dn.pipe));{let r=K(1296)+.12,o=.9,a=t(...Fi[0]),c=[[r,3,tt(ds[0][1])-2.3],[r,o+.3,tt(ds[0][1])-1.6],[r,o,tt(ds[0][1])],[r,o,tt(ds[1][1])],[r+.05,-.3,tt(ds[1][1])+.15],[K(Fi[0][0]),a,tt(Fi[0][1])]].map(h=>new C(...h)),l=new j(new Zn(new Fn(c,!1,"catmullrom",.08),90,.08,10),z.white);l.castShadow=!0,_e.add(l),Di("Surface conduit<small>On the house wall, then underground at the back corner</small>",_e,r,o+.6,tt((ds[0][1]+ds[1][1])/2))}for(let r of iy){let o=Dl(r.pts,r.from==="house"?(a,c)=>-1.8:(a,c)=>t(a,c)+.15,.06,dn.pipe);_e.add(o)}let e=ry(8);for(let r=0;r<e.length-1;r++){let[o,a]=e[r],[c,l]=e[r+1],h=Math.hypot(c-o,l-a)/St;if(h<.2)continue;let u=new j(new Ke(.25,h),dn.tape);u.rotation.x=-Math.PI/2,u.rotation.z=Math.atan2(-(c-o),l-a);let f=(o+c)/2,d=(a+l)/2;u.position.set(K(f),Math.min(t(f,d)+1,He(f,d)-.15),tt(d)),_e.add(u)}let n=Q.pumpAt==="planters"?Fd.concat([{p:fs,name:"Pump outlet",kind:"pout"}]):Fd;Q.pumpAt==="planters"&&_e.add(Dl([[Oi[0]-2,Oi[1]],[Oi[0]-2,1508],[1339,1500],[1339,1428],[fs[0],fs[1]]],(r,o)=>t(r,o)+.2,.055,dn.pipe));for(let r of n){let[o,a]=r.p,c=He(o,a),l=K(o),h=tt(a),u=t(o,a),f,d,g,_=.32,m=l,p=h;if(r.kind==="panel")f=3,d=.32,g=2,_=1.2,m=K(1296)+.17;else if(r.kind==="jbox")f=.62,d=.28,g=.55,_=.55,m=K(1296)+.14;else if(r.kind==="sub"){f=c+3.6,d=.3,g=1.5,_=1.05,m=l+.32;let M=new j(new we(.29,6.6,.29),dn.post);M.position.set(l,c+6.6/2-1.4,h),M.castShadow=M.receiveShadow=!0,_e.add(M),$t(.55,.08,1.4,dn.post,l+.12,c+5.25,h,_e)}else if(r.kind==="pout"){f=c+1.2,d=.38,g=.6,_=.42,p=h-.33;let M=new j(new we(.29,3.6,.29),dn.post);M.position.set(l,c+.3,h),M.castShadow=M.receiveShadow=!0,_e.add(M)}else if(r.kind==="rcpt"){f=c+1.2,d=.38,g=.6,_=.42,p=h+.33;let M=new j(new Ee(.045,.045,1.5,10),dn.box);M.position.set(l+.1,f+g+.7,h+.3),_e.add(M)}else if(r.kind==="patio"){f=1.4,d=.42,g=.6,_=.38,m=l+.3;let M=tt(951),b=tt(1098),T=v=>8.25-(v-M)*(.9/(b-M)),S=K(1296)+.12,L=[[S,1.15,tt(933)],[S,7,tt(933)],[S,7,M+.2],[K(1300.5),T(M+.6)-.25,M+.6],[K(1300.5),T(b-.3)-.25,b-.3],[K(1298)+.19,6.6,b],[K(1298)+.19,f+g+.05,b]].map(v=>new C(...v));_e.add(new j(new Zn(new Fn(L,!1,"catmullrom",.02),80,.04,8),z.white))}if(r.kind!=="rcpt"&&r.kind!=="patio"&&r.kind!=="panel"&&r.kind!=="jbox"&&r.kind!=="pout"){let M=new j(new Ee(r.kind==="post"||r.kind==="patio"?.05:.07,r.kind==="post"||r.kind==="patio"?.05:.07,f-u,10),dn.pipe);M.position.set(l,(f+u)/2,h),_e.add(M)}let y=new j(new we(d,g,_),r.kind==="rcpt"||r.kind==="patio"||r.kind==="pout"?dn.rcpt:dn.box);y.position.set(m,f+g/2-.05,p),y.castShadow=!0,_e.add(y);let x=r.sub||"";if(r.kind==="sub"){let M=new j(new Ee(.03,.03,8,8),dn.copper);M.position.set(l+.5,c-4+.1,h-.6),_e.add(M),Di("Ground rod<small>8 ft, at the post</small>",_e,l+.5,c-6,h-.6);let b=new j(new we(3,6.5,2.5),oy);b.position.set(l+.47+1.5,c+3.25,h),b.visible=Q.under,b.userData.xrayOnly=!0,_e.add(b),x=`On a post at the shed's corner, facing the fence \xB7 ${Yr(Oi).toFixed(1)} ft from tank`}r.kind==="pout"&&(x=`GFCI, in-use cover, short post by the fence \xB7 ${Yr(fs).toFixed(1)} ft from tank`),r.kind==="rcpt"&&(x=`Same post, toward the pump \xB7 GFCI, in-use cover \xB7 ${Yr(Wl).toFixed(1)} ft from tank`),r.kind==="patio"&&(x=`Own 20 A circuit, surface conduit \xB7 GFCI \xB7 ${Yr(jx).toFixed(1)} ft from tank`),Di(`${r.name}<small>${x}</small>`,_e,m,f+g+.25,p)}if(Q.sink>0){let r=72.5/St+1.75,o=kn()-.42,a=K(Lt[0]),c=tt(Lt[1]),l=new j(new oa(r,.035,8,120),dn.copper);l.rotation.x=Math.PI/2,l.position.set(a,o,c),_e.add(l);for(let d=0;d<4;d++){let g=d/4*De+.4,_=Math.cos(g),m=Math.sin(g),p=new j(new Ee(.03,.03,1.75,6),dn.copper);p.rotation.z=Math.PI/2,p.rotation.y=-g,p.position.set(a+_*(r-.875),o,c+m*(r-.875)),_e.add(p)}let h=Math.atan2(tt(sn[1])-c,K(sn[0])-a),u=He(...sn),f=[new C(a+Math.cos(Ua)*r,o,c+Math.sin(Ua)*r),new C(K(er[0][0])+.3,He(...er[0])-.55,tt(er[0][1])),new C(K(er[1][0])+.3,He(...er[1])-.55,tt(er[1][1])),new C(K(sn[0])+.5,u+.3,tt(sn[1])+.5)];_e.add(new j(new Zn(new Fn(f),24,.03,6),dn.copper)),Di("Bonding ring<small>#8 solid copper \xB7 18 to 24 in out \xB7 4 to 6 in down</small>",_e,a-Math.cos(h)*r,o,c-Math.sin(h)*r)}{let r=He(...sn);Di(Q.pumpAt==="planters"?`Pump + filter<small>Behind the big pot \xB7 ${Yr(sn).toFixed(1)} ft from tank \xB7 4 ft hoses</small>`:"Pump + filter<small>At the shed \xB7 hoses run in the basalt strip, about 20 ft</small>",_e,K(sn[0]),r+2.6,tt(sn[1]))}ki()&&Di("Square tube returns<small>Welded behind the \xBC in steel every ~3.5 ft, each set in a concrete footing</small>",_e,K(1100),fn()-.5,tt(Te-2*St));let s=[1337,1400];Di(`Feeder, underground<small>Main panel to the shed subpanel \xB7 ${Zr(i)} below today's grade</small>`,_e,K(s[0]),t(...s),tt(s[1]));for(let r of sr)r.visible=Q.under&&_e.visible}var cy=new ut({color:14256458,transparent:!0,opacity:.32,depthWrite:!1,side:Se,roughness:1}),ly=new Cr({color:11887914,transparent:!0,opacity:.45,depthWrite:!1}),$n=null;function jd(){if($n&&(oe.remove($n),$n.geometry.dispose(),$n=null),!(Q.under&&Q.mode==="proposed"))return;let i=Yd(pn[1],1108,fe,1681,2);$n=new j(i,cy),Jl($n,(t,e)=>Je(t,e)-.02);{let t=[],e=2*St;for(let s=pn[1];s<=fe+.1;s+=e)for(let r=1108;r<1681;r+=e/4)t.push(K(s),Je(s,r),tt(r),K(s),Je(s,Math.min(r+e/4,1681)),tt(Math.min(r+e/4,1681)));for(let s=1108;s<=1681;s+=e)for(let r=pn[1];r<fe;r+=e/4){let o=Math.min(r+e/4,fe);t.push(K(r),Je(r,s),tt(s),K(o),Je(o,s),tt(s))}let n=new de;n.setAttribute("position",new Nt(t,3)),$n.add(new Ko(n,ly))}$n.renderOrder=3,oe.add($n),Di("Today's grade<small>fill sits above this sheet</small>",$n,K(1180),Je(1180,1560),tt(1560))}var hy=()=>[z.ground,z.dirt,z.outside,z.brush,z.concrete,z.skirtSoil,he.sideNorth.material].concat(z.limeTint?[z.limeTint]:[],z.limeChips?[z.limeChips]:[],z.turf?[z.turf]:[]);function Ql(){let i=Q.under;Bt("xray").setAttribute("aria-pressed",String(i));for(let t of hy())t.transparent=i,t.opacity=i?.22:1,t.depthWrite=!i,t.needsUpdate=!0;le.maxPolarAngle=i?Math.PI*.6:Math.PI*.495,$d(),Bt("labels").hidden=!i,jd();for(let t of sr)t.visible=i&&_e.visible;_e.traverse(t=>{t.userData.xrayOnly&&(t.visible=i)}),ka()}var uy=ms("shed");{let i=K(1287),t=K(1339),e=tt(1505.38),n=tt(1602.87),s=t-i,r=n-e,o=new me;o.position.set((i+t)/2,0,(e+n)/2),uy.add(o),Gn(o,1313,1554,0);let a=6.2,c=6.9,l=$t(s,c,r,z.shed,0,c/2,0,o),h=$t(s+.6,.15,r+.6,z.shedRoof,0,(a+c)/2+.1,0,o);h.rotation.z=Math.atan((c-a)/s),$t(.06,5.6,2.6,z.trim,-s/2-.02,2.9,0,o),$t(.07,5.2,2.2,z.shed,-s/2-.04,2.75,0,o)}var Ba=ms("context");function Qd(i,t,e,n,s,r,o=8.6,a=4/12){let c=new me;Ba.add(c);let l=(e-i)/St,h=(n-t)/St,u=K((i+e)/2),f=tt((t+n)/2),d=new j(new we(l,o+.3,h),new ut({color:s,roughness:.85}));d.position.set(u,(o+.3)/2-.3,f),d.castShadow=d.receiveShadow=!0,c.add(d);let g=1.2,_=u-l/2-g,m=u+l/2+g,p=f-h/2-g,y=f+h/2+g,x=m-_>=y-p,M=(x?y-p:m-_)/2,b=o+M*a,T=[];if(x){let v=(p+y)/2,E=_+M,U=m-M;T.push(_,o,y,m,o,y,U,b,v,_,o,y,U,b,v,E,b,v,m,o,p,_,o,p,E,b,v,m,o,p,E,b,v,U,b,v,_,o,p,_,o,y,E,b,v,m,o,y,m,o,p,U,b,v)}else{let v=(_+m)/2,E=p+M,U=y-M;T.push(m,o,y,m,o,p,v,b,E,m,o,y,v,b,E,v,b,U,_,o,p,_,o,y,v,b,U,_,o,p,v,b,U,v,b,E,m,o,p,_,o,p,v,b,E,_,o,y,m,o,y,v,b,U)}let S=new de;S.setAttribute("position",new Nt(T,3)),S.computeVertexNormals();let L=new j(S,new ut({color:r,roughness:.95,side:Se}));return L.castShadow=!0,c.add(L),c}Qd(1460,300,1800,1077,10135206,7172212);Qd(95,390,402,1095,15328990,6974576);{let i=K(1446),t=K(1682),e=tt(1586),n=tt(1738),s=t-i,r=n-e,o=-.4,a=new me;a.position.set((i+t)/2,o,(e+n)/2),Ba.add(a),$t(s,7,r,new ut({color:10264476,roughness:.85}),0,3.5,0,a);let c=[[-s/2-.4,7],[-s/2+1.3,10.2],[0,11.6],[s/2-1.3,10.2],[s/2+.4,7]],l=[];for(let f=0;f<c.length-1;f++){let[d,g]=c[f],[_,m]=c[f+1];l.push(d,g,-r/2-.4,_,m,-r/2-.4,_,m,r/2+.4,d,g,-r/2-.4,_,m,r/2+.4,d,g,r/2+.4)}let h=new de;h.setAttribute("position",new Nt(l,3)),h.computeVertexNormals();let u=new j(h,new ut({color:12240588,roughness:.4,metalness:.6,side:Se}));u.castShadow=!0,a.add(u);for(let f of[-1,1]){let d=new $s([new ht(-s/2,7),...c.slice(1,4).map(([_,m])=>new ht(_,m)),new ht(s/2,7)]),g=new j(new Nr(d),new ut({color:10264476,roughness:.85,side:Se}));g.position.z=f*r/2,a.add(g)}}{let i=new de;i.setAttribute("position",new Nt([K(300),9.5,tt(1020),K(470),8.2,tt(1010),K(420),9.8,tt(1150),K(300),9.5,tt(1020),K(420),9.8,tt(1150),K(310),8,tt(1160)],3)),i.computeVertexNormals();let t=new j(i,z.sail);t.castShadow=!0,Ba.add(t)}function ui(i,t,e,n,s,r,o,a={}){let c=re(o),l=new me;l.position.set(i,e,t);let[h,u]=a.lean||[0,0],f=r==="juniper"?n*.25:n*.42,d=z.trunk.clone(),g=new j(new Ee(s*.05,s*.08,f,8),d);if(g.position.y=f/2,g.castShadow=!0,l.add(g),h||u){let b=new C(h*.7,f+s*.3,u*.7);g.position.copy(b).multiplyScalar(.5),g.quaternion.setFromUnitVectors(new C(0,1,0),b.clone().normalize()),g.scale.y=b.length()/f}let _=[],m=r==="juniper"?9:18,p=a.col?new zt(a.col):r==="juniper"?new zt(4021303):r==="fall"?new zt(10852949):new zt(5797949);for(let b=0;b<m;b++){let T=b/m,S,L,v,E;if(r==="juniper")L=f+T*(n-f)*.95,E=s*(1-T*.75)*(.7+c()*.3),S=(c()-.5)*s*.4,v=(c()-.5)*s*.4;else{let O=c()*De,H=c()*s*.75;S=Math.cos(O)*H,v=Math.sin(O)*H,L=f+s*.35+c()*(n-f-s*.7),E=s*(.32+c()*.26)}let U=new Li(E,2);U.deleteAttribute("uv"),U.deleteAttribute("normal");let F=Na(Cl(U),.55,1.2/E,c()*90,.82),q=F.attributes.position;F.translate(S+h,L,v+u);let P=new Float32Array(q.count*3),D=p.clone().offsetHSL((c()-.5)*.03,(c()-.5)*.1,(c()-.5)*.08);for(let O=0;O<q.count;O++){let H=.95+.35*(q.getY(O)-L+E)/(2*E);P[O*3]=D.r*H,P[O*3+1]=D.g*H,P[O*3+2]=D.b*H}F.setAttribute("color",new ve(P,3)),F.setAttribute("uv",new ve(new Float32Array(q.count*2).map((O,H)=>H%2?q.getY(H>>1)/3:(q.getX(H>>1)+q.getZ(H>>1))/3),2)),_.push(F)}let y=z.canopyTree.clone(),x=new j(va(_),y);x.castShadow=!0,x.receiveShadow=!0,l.add(x),Ba.add(l),x.geometry.computeBoundingSphere();let M=x.geometry.boundingSphere;return tf.push({mesh:x,mat:y,tmat:d,c:M.center.clone().add(l.position),r:M.radius*.85,x:l.position.x,z:l.position.z,top:l.position.y+n,rh:s*.95,front:!!a.front}),l}var tf=[];{let i=re(2024);for(let t=0;t<54;t++){let e=380+i()*1450,n=1800+Math.pow(i(),.8)*700,s=i()<.22?"juniper":i()<.15?"fall":"oak",r=Zd(e,n);ui(K(e),tt(n),r,26+i()*22,7+i()*6,s,t+1)}ui(K(1560),tt(1520),-.4,30,9,"fall",901);for(let[t,e,n,s]of[[300,1250,34,15],[1640,1135,28,12]])ui(K(t),tt(e),-.3,n,s,"oak",t+e);ui(K(884),tt(-40),-.3,26,10,"oak",611,{front:1,col:10119742,lean:[-5.5,-4.5]}),ui(K(1092),tt(-62),-.3,30,11.5,"oak",612,{front:1,col:8225877,lean:[.5,-4]}),ui(K(1112),tt(92),-.3,17,5,"oak",613,{front:1,col:4151859}),ui(K(1770),tt(40),-.3,34,17,"oak",614,{col:10633263}),ui(K(-60),tt(330),-.3,28,11,"oak",615,{col:11565626}),Xe.trees.slice(4).forEach(([t,e,n],s)=>ui(K(t),tt(e),-.3,18+n/4,n/St*2.2,"oak",300+s))}var nr={top:{value:new zt},hor:{value:new zt},sunDir:{value:new C},glow:{value:new zt}},Ha=new j(new Ii(3e3,32,16),new On({side:ke,depthWrite:!1,uniforms:nr,vertexShader:"varying vec3 vD;void main(){vD=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform vec3 top,hor,glow,sunDir;varying vec3 vD;void main(){float h=clamp(vD.y,0.,1.);vec3 c=mix(hor,top,pow(h,0.55));float s=max(dot(normalize(vD),normalize(sunDir)),0.);c+=glow*(pow(s,8.)*0.35+pow(s,600.)*2.);if(vD.y<0.)c=mix(hor,hor*0.8,clamp(-vD.y*4.,0.,1.));gl_FragColor=vec4(c,1.);}"}));Ha.renderOrder=-1;oe.add(Ha);var ef=new ca(14674418,7167047,.7);oe.add(ef);var Vn=new ua(16777215,2.6);Vn.castShadow=!0;Vn.shadow.mapSize.set(Hl?2048:4096,Hl?2048:4096);var ar=Vn.shadow.camera;ar.left=-58;ar.right=58;ar.top=58;ar.bottom=-58;ar.near=1;ar.far=400;Vn.shadow.bias=-4e-4;Vn.shadow.normalBias=.03;var nf=new C(K(1e3),0,tt(1150));Vn.target.position.copy(nf);oe.add(Vn,Vn.target);oe.fog=new Jo(14542054,220,1400);function sf(i,t){let e=30.27*Math.PI/180,n=-97.74,s=[21,52,80,111,141,172,202,233,264,294,325,355][i-1],r=i>=3&&i<=10?1:0,o=23.44*Math.sin(De/365*(s-81))*Math.PI/180,a=De/365*(s-81),c=9.87*Math.sin(2*a)-7.53*Math.cos(a)-1.5*Math.sin(a),h=(t-r+(4*(n+90)+c)/60-12)*15*Math.PI/180,u=Math.asin(Math.sin(e)*Math.sin(o)+Math.cos(e)*Math.cos(o)*Math.cos(h)),f=(Math.atan2(Math.sin(h),Math.cos(h)*Math.sin(e)-Math.tan(o)*Math.cos(e))+Math.PI)%De;return{el:u,az:f}}function rf(){let{el:i,az:t}=sf(Q.month,Q.time),e=t-Q.north*Math.PI/180,n=new C(Math.cos(i)*Math.sin(e),Math.sin(i),-Math.cos(i)*Math.cos(e));Vn.position.copy(nf).addScaledVector(n,220);let s=Math.max(i,0),r=rn(Math.sin(s)*3,0,1),o=new zt().setHSL(.08,.85,.6).lerp(new zt(16774890),rn(Math.sin(s)*2.2,0,1));Vn.color.copy(o),Vn.intensity=i>0?.4+2.4*r:0,ef.intensity=.35+.45*rn(Math.sin(i+.1)*2,0,1),nr.top.value.setHSL(.58,.45,.25+.4*rn(Math.sin(i+.12)*2,0,1)),nr.hor.value.setHSL(i<.15?.07:.57,i<.15?.4:.25,.55+.3*rn(Math.sin(i+.1)*3,0,1)),nr.glow.value.copy(o),nr.sunDir.value.copy(n),oe.fog.color.copy(nr.hor.value),Fe.toneMappingExposure=i>0?1:.9,document.getElementById("needle").setAttribute("transform",`rotate(${-Q.north})`),of(),pf(),ka()}function of(){let i=Math.atan2(Yl.x,-Yl.z)*180/Math.PI;document.getElementById("needle").setAttribute("transform",`rotate(${-(Q.north+i)})`)}var Zr=i=>`${Math.round(i*12)} in`,Bt=i=>document.getElementById(i);function Mn(){Kn=xx(),window.__placePump(),Ax();for(let r of["lawn","walk"])Jl(he[r],he[r].userData.h);for(let[r,o,a,c]of or)r.position.y=He(o,a)+qd(c);Rx(),Kx();let i=Nx(),t=Vx();window.__buildHoses(),Hx();let e=document.getElementById("stats");e.innerHTML="";let n=(r,o,a)=>{let c=document.createElement("div");c.className="stat"+(a?" warn":""),c.innerHTML=`<b>${r}</b>`+o.map(l=>`<span>${l}</span>`).join(""),e.appendChild(c)};{let r=kn()-Q.sink+2-fn();n("Pool",[`Rim ${Zr(Math.abs(r))} ${r>=0?"above":"below"} the pad`,"Tank sits on grade on the pool level"].concat(Q.sink>0?["Backfill with gravel and wrap the buried steel."]:[]))}let s=r=>r===0?"flush with patio":`${Zr(-r)} below patio`;Bt("o-pad").textContent=s(Q.pad),Bt("o-step1").textContent=Q.step1<Qt?"none":Zr(Q.step1),Bt("o-step2").textContent=Q.step2<Qt?"none":Zr(Q.step2);for(let r of["pool","furniture","umbrella","planters","shed"])fi[r].visible=Q.mode==="proposed"&&Q.layers[r];jl.visible=Q.mode==="proposed",$d(),fi.context.visible=Q.layers.context,Ta=!0,_e.visible=Q.layers.electrical,ay(),jd(),pf(),ka()}var dy=4.7,af=[{key:"overview",name:"Overview",sub:"Whole yard",pos:[700,1700,46],tgt:[1130,1270,-2]},{key:"hero",name:"Patio, west post",sub:"Photo 5",pos:[1046,1098,"eye"],tgt:[1320,1590,"tgt"]},{key:"chimney",name:"From the chimney",sub:"Photo 1",pos:[1042,1e3,"eye"],tgt:[1080,1600,"tgt"]},{key:"patioE",name:"Patio, east end",sub:"Photo 2",pos:[1292,1030,"eye"],tgt:[1170,1600,"tgt"]},{key:"back",name:"Back fence, walkway",sub:"Photo 3",pos:[994,1668,"eye"],tgt:[994,950,6]},{key:"corner",name:"Back-right, by the shed",sub:"Near photo 4",pos:[1262,1668,"eye"],tgt:[1010,980,5]},{key:"pool",name:"Lounger on the pad",sub:"Eye level, seated",pos:[1250,1186,3.3],tgt:[1185,1560,.8]},{key:"equip",name:"Pump + outlet",sub:"Behind the planters",pos:[1300,1470,6],tgt:[1358,1420,.5]},{key:"subp",name:"Subpanel",sub:"Shed corner",pos:[1410,1640,8],tgt:[1342,1510,3.2]},{key:"conduit",name:"Conduit route",sub:"Underground",pos:[1381,1585,6],tgt:[1334,1230,-2.4],under:!0},{key:"top",name:"Plan view",sub:"Straight down",pos:[1130,1395,150],tgt:[1130,1394,0]}];function fy(i){let t=i.pos[2]==="eye"?He(i.pos[0],i.pos[1])+dy:i.pos[2],e=i.tgt[2]==="tgt"?t-1.2:i.tgt[2];return{pos:new C(K(i.pos[0]),t,tt(i.pos[1])),tgt:new C(K(i.tgt[0]),e,tt(i.tgt[1]))}}var Rn=null,cf=matchMedia("(prefers-reduced-motion: reduce)").matches;function th(i,t){let e=af.find(r=>r.key===i);if(!e)return;Q.view=i,e.under&&!Q.under&&(Q.under=!0,Ql());let{pos:n,tgt:s}=fy(e);Me.fov=i==="top"?40:e.pos[2]==="eye"||i==="pool"?68:50,Me.updateProjectionMatrix(),t||cf?(Me.position.copy(n),le.target.copy(s),le.update(),zi()):Rn={t0:performance.now(),p0:Me.position.clone(),t0v:le.target.clone(),p1:n,t1:s},document.querySelectorAll("#views button").forEach(r=>r.setAttribute("aria-pressed",String(r.dataset.key===i))),zi()}{let i=document.getElementById("views");for(let t of af){let e=document.createElement("button");e.type="button",e.dataset.key=t.key,e.id="v-"+t.key,e.innerHTML=`${t.name}<small>${t.sub}</small>`,e.onclick=()=>th(t.key),i.appendChild(e)}}le.addEventListener("start",()=>{Rn=null;{let i=Fe.domElement.getBoundingClientRect(),t=Ga(i.left+i.width/2,i.top+i.height/2),e=t.distanceTo(Me.position);e>1.5&&e<400&&Math.abs(e-Me.position.distanceTo(le.target))>.5&&(le.target.copy(t),le.update())}document.querySelectorAll("#views button").forEach(i=>i.setAttribute("aria-pressed","false"))});function eh(i,t,e,n,s){let r=Bt(i);r.value=n(Q[t]),typeof Xl<"u"&&Xl.push([r,t,n]),r.addEventListener("input",()=>{Q[t]=e(+r.value),s(),Wn()})}var Xl=[];eh("g-pad","pad",i=>i*Qt,i=>Math.round(i*12),Mn);eh("g-step1","step1",i=>i*Qt,i=>Math.round(i*12),Mn);eh("g-step2","step2",i=>i*Qt,i=>Math.round(i*12),Mn);Q.padSurf!=="cbrick"&&(Q.padSurf="brick");Q.ver="feedback";Q.fbPat!=="45"&&(Q.fbPat="90");Q.fbEdge!=="steel"&&(Q.fbEdge="block");["red","amaretto","walnut"].includes(Q.fbColor)||(Q.fbColor="red");var lf=["red","amaretto","walnut"];function py(i){Q.fbColor=i,lf.forEach(t=>Bt("fc-"+t).setAttribute("aria-pressed",String(t===i))),Mn(),Wn()}lf.forEach(i=>{Bt("fc-"+i).onclick=()=>py(i),Bt("fc-"+i).setAttribute("aria-pressed",String(i===Q.fbColor))});function hf(i){Q.fbEdge=i,Bt("fe-steel").setAttribute("aria-pressed",String(i==="steel")),Bt("fe-block").setAttribute("aria-pressed",String(i==="block")),Mn(),Wn()}Bt("fe-steel").onclick=()=>hf("steel");Bt("fe-block").onclick=()=>hf("block");Bt("fe-steel").setAttribute("aria-pressed",String(Q.fbEdge==="steel"));Bt("fe-block").setAttribute("aria-pressed",String(Q.fbEdge==="block"));function uf(i){Q.fbPat=i,Bt("fb-45").setAttribute("aria-pressed",String(i==="45")),Bt("fb-90").setAttribute("aria-pressed",String(i==="90")),Mn(),Wn()}Bt("fb-45").onclick=()=>uf("45");Bt("fb-90").onclick=()=>uf("90");Bt("fb-45").setAttribute("aria-pressed",String(Q.fbPat==="45"));Bt("fb-90").setAttribute("aria-pressed",String(Q.fbPat==="90"));function za(i){Q.ver=i,Bt("v-plan").setAttribute("aria-pressed",String(i==="plan")),Bt("v-quote").setAttribute("aria-pressed",String(i==="quote")),Bt("v-fb").setAttribute("aria-pressed",String(i==="feedback")),Q.fbPat="90",Q.fbEdge="block",Q.pumpAt=i==="feedback"?"planters":"post",Bt("v-hint").textContent=i==="feedback"?"Austin Creative Landscaping quote with your changes: brick red blend pavers in 90\xB0 herringbone with a matching soldier border, a wall block tier holding the pad level instead of the steel wall, crushed limestone, and the pump tucked behind the planters on its own outlet.":i==="quote"?"Austin Creative Landscaping, Oct 20 quote: steel-edged Amaretto herringbone pad with an Anthracite border, tank area one step down, 12 in stepped steel wall 16 in off the fence, steel-edged turf, crushed limestone instead of marble.":"Block step walls around the pool level, corten edge along the fence, your choice of pad brick.",Mn(),Wn()}Q.pumpAt!=="planters"&&(Q.pumpAt="post");function df(i){Q.pumpAt=i,Bt("pp-post").setAttribute("aria-pressed",String(i==="post")),Bt("pp-plant").setAttribute("aria-pressed",String(i==="planters")),Mn(),Wn()}Bt("pp-post").onclick=()=>df("post");Bt("pp-plant").onclick=()=>df("planters");Bt("pp-post").setAttribute("aria-pressed",String(Q.pumpAt==="post"));Bt("pp-plant").setAttribute("aria-pressed",String(Q.pumpAt==="planters"));Bt("v-plan").onclick=()=>za("plan");Bt("v-fb").onclick=()=>za("feedback");Bt("v-quote").onclick=()=>za("quote");function ff(i){Q.padSurf=i,Bt("ps-brick").setAttribute("aria-pressed",String(i==="brick")),Bt("ps-cbrick").setAttribute("aria-pressed",String(i==="cbrick")),Mn(),Wn()}Bt("ps-brick").onclick=()=>ff("brick");Bt("ps-cbrick").onclick=()=>ff("cbrick");Bt("ps-cbrick").setAttribute("aria-pressed",String(Q.padSurf==="cbrick"));Bt("ps-brick").setAttribute("aria-pressed",String(Q.padSurf==="brick"));Bt("g-reset").addEventListener("click",()=>{Object.assign(Q,Ad);for(let[i,t,e]of Xl)t in Ad&&(i.value=e(Q[t]));Mn(),Wn()});Q.mode="proposed";{let i=[["pool","Pool + pump"],["furniture","Loungers"],["umbrella","Umbrella"],["planters","Pots + boulders"],["shed","Shed"],["electrical","Buried conduit"],["context","Neighbors + trees"]],t=Bt("layers");for(let[e,n]of i){let s=document.createElement("label");s.innerHTML=`<input type="checkbox" id="l-${e}"${Q.layers[e]?" checked":""}> ${n}`,s.querySelector("input").addEventListener("change",r=>{Q.layers[e]=r.target.checked,Mn(),Wn()}),t.appendChild(s)}}function pf(){let{el:i}=sf(Q.month,Q.time);Bt("badge").innerHTML=`<b>Late October afternoon</b>${i<=0?" \xB7 sun is down":` \xB7 sun ${Math.round(i*180/Math.PI)}\xB0 up`}`}var Ui=!0,Ta=!0;function zi(){Ui=!0}function ka(){Fe.shadowMap.needsUpdate=!0,Ui=!0}var Vy=new C,Wy=new C;function my(){if(!fi.context.visible)return!1;let i=Me.position,t=le.target,e=t.x-i.x,n=t.z-i.z,s=e*e+n*n||1e-6,r=Math.sqrt(s),o=!1;for(let a of tf){let c=rn(((a.x-i.x)*e+(a.z-i.z)*n)/s,0,1),l=i.x+e*c,h=i.z+n*c,u=Math.hypot(a.x-l,a.z-h),f=i.y+(t.y-i.y)*c,g=!(a.front&&i.z<tt(376))&&c>0&&c<1&&u<a.rh+r*c*.12&&f<a.top||a.c.distanceTo(i)<a.r*1.05?0:1,_=a.mat.opacity;if(_=cf?g:_+(g-_)*.3,Math.abs(_-g)<.05?_=g:o=!0,_!==a.mat.opacity){let m=_<.999;for(let p of[a.mat,a.tmat])p.opacity=_,p.colorWrite=_>.02,p.transparent!==m&&(p.transparent=m,p.depthWrite=!m,p.needsUpdate=!0)}}return o}le.addEventListener("change",zi);var Yl=new C,mf=new ba({element:Bt("labels")});function gf(){let i=Qr.clientWidth,t=Qr.clientHeight;!i||!t||(Fe.setSize(i,t,!1),mf.setSize(i,t),Me.aspect=i/t,Me.updateProjectionMatrix(),zi())}new ResizeObserver(gf).observe(Qr);function _f(i){if(requestAnimationFrame(_f),Rn){let t=rn((i-Rn.t0)/900,0,1),e=t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;Me.position.lerpVectors(Rn.p0,Rn.p1,e),le.target.lerpVectors(Rn.t0v,Rn.t1,e),t>=1&&(Rn=null),Ui=!0}le.update()&&(Ui=!0),(Ui||Ta)&&(Ta=my(),Ta&&(Ui=!0)),Ui&&(Ui=!1,Me.getWorldDirection(Yl),of(),Ha.position.copy(Me.position),Fe.render(oe,Me),Q.under&&(mf.render(oe,Me),gy()))}function gy(){let i=[];for(let t of sr){let e=t.element;if(!t.visible||e.style.display==="none")continue;e.style.opacity="1";let n=e.getBoundingClientRect();if(i.some(s=>n.left<s.right+4&&n.right>s.left-4&&n.top<s.bottom+2&&n.bottom>s.top-2)){e.style.opacity="0";continue}i.push(n)}}var Ul=new da,Bd=new ht,_y=new C;function xy(){let i=[];return oe.traverse(t=>{if(!(t.isMesh||t.isInstancedMesh)||t===Ha||!t.visible||Gl.includes(t))return;let e=t,n=!1;for(;e;){if(e.visible===!1){n=!0;break}if(e===fi.context){n=!0;break}e=e.parent}n||i.push(t)}),i}var Nl=null,Hd=0;function Ga(i,t){let e=Fe.domElement.getBoundingClientRect();Bd.set((i-e.left)/e.width*2-1,-(t-e.top)/e.height*2+1),Ul.setFromCamera(Bd,Me);let n=performance.now();(!Nl||n-Hd>800)&&(Nl=xy()),Hd=n;let s=Ul.intersectObjects(Nl,!1);for(let r of s){let o=[].concat(r.object.material)[0];if(!(o&&o.opacity<.5&&!Q.under)&&!(o&&o.wireframe))return r.point}return Ul.ray.at(Math.max(Me.position.distanceTo(le.target),5),_y).clone()}var Ol=null,Fl=[0,0],zd=0;function xf(i,t){let e=Me.position.distanceTo(i);if(t<1&&e*t<2&&(t=Math.min(1,2/e)),!(t>=1&&t<1.0001)&&!(t>1&&Me.position.distanceTo(le.target)*t>le.maxDistance)){Me.position.sub(i).multiplyScalar(t).add(i),le.target.sub(i).multiplyScalar(t).add(i);{let n=le.target.clone().sub(Me.position).normalize(),s=i.clone().sub(Me.position).dot(n);s>1.5&&le.target.copy(Me.position).addScaledVector(n,s)}Rn=null,le.update(),zi()}}Qr.addEventListener("wheel",i=>{i.preventDefault(),i.stopPropagation();let t=performance.now();(!Ol||t-zd>220||Math.hypot(i.clientX-Fl[0],i.clientY-Fl[1])>6)&&(Ol=Ga(i.clientX,i.clientY),Fl=[i.clientX,i.clientY]),zd=t;let e=i.deltaY*(i.deltaMode===1?33:i.deltaMode===2?400:1),n=i.ctrlKey?.022:.0042;xf(Ol,rn(Math.exp(e*n),.45,2.2))},{capture:!0,passive:!1});function yf(i,t){let e=Ga(i,t),n=Me.position.clone().sub(e),s=n.length(),r=rn(s*.3,1.2,30);Rn={t0:performance.now(),p0:Me.position.clone(),t0v:le.target.clone(),p1:e.clone().add(n.multiplyScalar(r/s)),t1:e.clone()},zi()}Fe.domElement.addEventListener("dblclick",i=>{i.preventDefault(),yf(i.clientX,i.clientY)});{let i=0,t=0,e=0;Fe.domElement.addEventListener("pointerup",n=>{if(n.pointerType!=="touch")return;let s=performance.now();s-i<320&&Math.hypot(n.clientX-t,n.clientY-e)<24?(yf(n.clientX,n.clientY),i=0):(i=s,t=n.clientX,e=n.clientY)})}function vf(i){let t=Fe.domElement.getBoundingClientRect();xf(Ga(t.left+t.width/2,t.top+t.height/2),i)}Bt("z-in").onclick=()=>vf(.55);Bt("z-out").onclick=()=>vf(1.8);Bt("xray").onclick=()=>{Q.under=!Q.under,Ql(),Wn()};function to(i){Q.drag=i;let t=i==="rotate";le.mouseButtons={LEFT:t?je.ROTATE:je.PAN,MIDDLE:je.DOLLY,RIGHT:t?je.PAN:je.ROTATE},le.touches={ONE:t?un.ROTATE:un.PAN,TWO:t?un.DOLLY_PAN:un.DOLLY_ROTATE},Bt("d-move").setAttribute("aria-pressed",String(!t)),Bt("d-rot").setAttribute("aria-pressed",String(t)),Wn()}Bt("d-move").onclick=()=>to("move");Bt("d-rot").onclick=()=>to("rotate");addEventListener("keydown",i=>{(i.key==="r"||i.key==="R")&&!i.repeat&&!/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)&&Q.drag!=="rotate"&&(Q._held=!0,to("rotate"))});addEventListener("keyup",i=>{(i.key==="r"||i.key==="R")&&Q._held&&(Q._held=!1,to("move"))});to(Q.drag==="rotate"?"rotate":"move");var Mf=Bt("prog").firstElementChild,ql=Bt("pn-sub");Mf.style.width="45%";za(Q.ver);rf();gf();th("overview",!0);wx();Ql();requestAnimationFrame(_f);ql.textContent="Loading ground textures\u2026";Mf.style.width="70%";new aa().load("ground.webp",i=>{i.colorSpace=Oe,i.anisotropy=Wd;let t=Fe.capabilities.maxTextureSize;i.minFilter=es,z.ground.map=i,z.ground.color.set(16777215),z.ground.needsUpdate=!0,Mn(),ka(),ql.textContent="To scale from the plan \xB7 feet",Bt("prog").hidden=!0,window.__ready=!0,zi()},void 0,()=>{ql.textContent="Ground textures did not load; showing flat colours.",Bt("prog").hidden=!0,window.__ready=!0});window.__cam=(i,t)=>{Rn=null,Me.position.set(K(i[0]),i[2],tt(i[1])),le.target.set(K(t[0]),t[2],tt(t[1])),Me.fov=55,Me.updateProjectionMatrix(),le.update(),zi()};window.__goView=th;window.__P=Q;window.__update=()=>{Mn(),rf()};
