var kh=Object.defineProperty;var zh=(n,e,t)=>e in n?kh(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var re=(n,e,t)=>zh(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const el="170",Gh=0,Cl=1,Hh=2,iu=1,Vh=2,An=3,ii=0,Ot=1,Rn=2,Jn=0,ji=1,Pl=2,Ll=3,Dl=4,Wh=5,_i=100,Xh=101,qh=102,$h=103,Yh=104,Kh=200,jh=201,Zh=202,Jh=203,to=204,no=205,Qh=206,ed=207,td=208,nd=209,id=210,rd=211,sd=212,ad=213,od=214,io=0,ro=1,so=2,tr=3,ao=4,oo=5,lo=6,co=7,ru=0,ld=1,cd=2,Qn=0,ud=1,hd=2,dd=3,fd=4,pd=5,md=6,gd=7,su=300,nr=301,ir=302,uo=303,ho=304,Qs=306,fo=1e3,yi=1001,po=1002,Tt=1003,vd=1004,is=1005,St=1006,ma=1007,Mi=1008,un=1009,au=1010,ou=1011,Or=1012,tl=1013,Ti=1014,on=1015,si=1016,nl=1017,il=1018,rr=1020,lu=35902,cu=1021,uu=1022,Vt=1023,hu=1024,du=1025,Zi=1026,sr=1027,rl=1028,sl=1029,fu=1030,al=1031,ol=1033,Ds=33776,Is=33777,Us=33778,Fs=33779,mo=35840,go=35841,vo=35842,_o=35843,xo=36196,yo=37492,Mo=37496,So=37808,bo=37809,Eo=37810,wo=37811,To=37812,Ao=37813,Ro=37814,Co=37815,Po=37816,Lo=37817,Do=37818,Io=37819,Uo=37820,Fo=37821,Ns=36492,No=36494,Oo=36495,pu=36283,Bo=36284,ko=36285,zo=36286,_d=3200,xd=3201,yd=0,Md=1,$n="",jt="srgb",dr="srgb-linear",ea="linear",st="srgb",Ci=7680,Il=519,Sd=512,bd=513,Ed=514,mu=515,wd=516,Td=517,Ad=518,Rd=519,Ul=35044,Fl="300 es",Ln=2e3,Gs=2001;class fr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ga=Math.PI/180,Go=180/Math.PI;function Vr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]).toLowerCase()}function Dt(n,e,t){return Math.max(e,Math.min(t,n))}function Cd(n,e){return(n%e+e)%e}function va(n,e,t){return(1-t)*n+t*e}function Sr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,t,i,r,s,a,o,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],m=i[5],g=i[8],v=r[0],p=r[3],u=r[6],S=r[1],E=r[4],x=r[7],L=r[2],A=r[5],T=r[8];return s[0]=a*v+o*S+l*L,s[3]=a*p+o*E+l*A,s[6]=a*u+o*x+l*T,s[1]=c*v+d*S+h*L,s[4]=c*p+d*E+h*A,s[7]=c*u+d*x+h*T,s[2]=f*v+m*S+g*L,s[5]=f*p+m*E+g*A,s[8]=f*u+m*x+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*a-o*c,f=o*l-d*s,m=c*s-a*l,g=t*h+i*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(r*c-d*i)*v,e[2]=(o*i-r*a)*v,e[3]=f*v,e[4]=(d*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(_a.makeScale(e,t)),this}rotate(e){return this.premultiply(_a.makeRotation(-e)),this}translate(e,t){return this.premultiply(_a.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _a=new Fe;function gu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Hs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Pd(){const n=Hs("canvas");return n.style.display="block",n}const Nl={};function Dr(n){n in Nl||(Nl[n]=!0,console.warn(n))}function Ld(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Dd(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Id(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ke={enabled:!0,workingColorSpace:dr,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===st&&(n.r=Dn(n.r),n.g=Dn(n.g),n.b=Dn(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===st&&(n.r=Ji(n.r),n.g=Ji(n.g),n.b=Ji(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===$n?ea:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Dn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ji(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Ol=[.64,.33,.3,.6,.15,.06],Bl=[.2126,.7152,.0722],kl=[.3127,.329],zl=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gl=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ke.define({[dr]:{primaries:Ol,whitePoint:kl,transfer:ea,toXYZ:zl,fromXYZ:Gl,luminanceCoefficients:Bl,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:Ol,whitePoint:kl,transfer:st,toXYZ:zl,fromXYZ:Gl,luminanceCoefficients:Bl,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}});let Pi;class Ud{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Pi===void 0&&(Pi=Hs("canvas")),Pi.width=e.width,Pi.height=e.height;const i=Pi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Pi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Hs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Dn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Dn(t[i]/255)*255):t[i]=Dn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fd=0;class vu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Vr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(xa(r[a].image)):s.push(xa(r[a]))}else s=xa(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function xa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ud.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nd=0;class Pt extends fr{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,i=yi,r=yi,s=St,a=Mi,o=Vt,l=un,c=Pt.DEFAULT_ANISOTROPY,d=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=Vr(),this.name="",this.source=new vu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==su)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fo:e.x=e.x-Math.floor(e.x);break;case yi:e.x=e.x<0?0:1;break;case po:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fo:e.y=e.y-Math.floor(e.y);break;case yi:e.y=e.y<0?0:1;break;case po:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=su;Pt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,i=0,r=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],m=l[5],g=l[9],v=l[2],p=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,x=(m+1)/2,L=(u+1)/2,A=(d+f)/4,T=(h+v)/4,C=(g+p)/4;return E>x&&E>L?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=A/i,s=T/i):x>L?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=A/r,s=C/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=T/s,r=C/s),this.set(i,r,s,t),this}let S=Math.sqrt((p-g)*(p-g)+(h-v)*(h-v)+(f-d)*(f-d));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(h-v)/S,this.z=(f-d)/S,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Od extends fr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:St,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Pt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new vu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kt extends Od{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Vs extends Pt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bd extends Pt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3];const f=s[a+0],m=s[a+1],g=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==f||c!==m||d!==g){let p=1-o;const u=l*f+c*m+d*g+h*v,S=u>=0?1:-1,E=1-u*u;if(E>Number.EPSILON){const L=Math.sqrt(E),A=Math.atan2(L,u*S);p=Math.sin(p*A)/L,o=Math.sin(o*A)/L}const x=o*S;if(l=l*p+f*x,c=c*p+m*x,d=d*p+g*x,h=h*p+v*x,p===1-o){const L=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=L,c*=L,d*=L,h*=L}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[a],f=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+d*h+l*m-c*f,e[t+1]=l*g+d*f+c*h-o*m,e[t+2]=c*g+d*m+o*f-l*h,e[t+3]=d*g-o*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),h=o(s/2),f=l(i/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*d*h+c*m*g,this._y=c*m*h-f*d*g,this._z=c*d*g+f*m*h,this._w=c*d*h-f*m*g;break;case"YXZ":this._x=f*d*h+c*m*g,this._y=c*m*h-f*d*g,this._z=c*d*g-f*m*h,this._w=c*d*h+f*m*g;break;case"ZXY":this._x=f*d*h-c*m*g,this._y=c*m*h+f*d*g,this._z=c*d*g+f*m*h,this._w=c*d*h-f*m*g;break;case"ZYX":this._x=f*d*h-c*m*g,this._y=c*m*h+f*d*g,this._z=c*d*g-f*m*h,this._w=c*d*h+f*m*g;break;case"YZX":this._x=f*d*h+c*m*g,this._y=c*m*h+f*d*g,this._z=c*d*g-f*m*h,this._w=c*d*h-f*m*g;break;case"XZY":this._x=f*d*h-c*m*g,this._y=c*m*h-f*d*g,this._z=c*d*g+f*m*h,this._w=c*d*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],h=t[10],f=i+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(d-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),h=Math.sin((1-t)*d)/c,f=Math.sin(t*d)/c;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+l*c+a*h-o*d,this.y=i+l*d+o*c-s*h,this.z=r+l*h+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ya.copy(this).projectOnVector(e),this.sub(ya)}reflect(e){return this.sub(ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ya=new G,Hl=new Wr;class Xr{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,tn):tn.fromBufferAttribute(s,a),tn.applyMatrix4(e.matrixWorld),this.expandByPoint(tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),rs.copy(i.boundingBox)),rs.applyMatrix4(e.matrixWorld),this.union(rs)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,tn),tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(br),ss.subVectors(this.max,br),Li.subVectors(e.a,br),Di.subVectors(e.b,br),Ii.subVectors(e.c,br),Gn.subVectors(Di,Li),Hn.subVectors(Ii,Di),oi.subVectors(Li,Ii);let t=[0,-Gn.z,Gn.y,0,-Hn.z,Hn.y,0,-oi.z,oi.y,Gn.z,0,-Gn.x,Hn.z,0,-Hn.x,oi.z,0,-oi.x,-Gn.y,Gn.x,0,-Hn.y,Hn.x,0,-oi.y,oi.x,0];return!Ma(t,Li,Di,Ii,ss)||(t=[1,0,0,0,1,0,0,0,1],!Ma(t,Li,Di,Ii,ss))?!1:(as.crossVectors(Gn,Hn),t=[as.x,as.y,as.z],Ma(t,Li,Di,Ii,ss))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yn=[new G,new G,new G,new G,new G,new G,new G,new G],tn=new G,rs=new Xr,Li=new G,Di=new G,Ii=new G,Gn=new G,Hn=new G,oi=new G,br=new G,ss=new G,as=new G,li=new G;function Ma(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){li.fromArray(n,s);const o=r.x*Math.abs(li.x)+r.y*Math.abs(li.y)+r.z*Math.abs(li.z),l=e.dot(li),c=t.dot(li),d=i.dot(li);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const kd=new Xr,Er=new G,Sa=new G;class ta{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):kd.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Er.subVectors(e,this.center);const t=Er.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Er,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Er.copy(e.center).add(Sa)),this.expandByPoint(Er.copy(e.center).sub(Sa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new G,ba=new G,os=new G,Vn=new G,Ea=new G,ls=new G,wa=new G;class _u{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.origin).addScaledVector(this.direction,t),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ba.copy(e).add(t).multiplyScalar(.5),os.copy(t).sub(e).normalize(),Vn.copy(this.origin).sub(ba);const s=e.distanceTo(t)*.5,a=-this.direction.dot(os),o=Vn.dot(this.direction),l=-Vn.dot(os),c=Vn.lengthSq(),d=Math.abs(1-a*a);let h,f,m,g;if(d>0)if(h=a*l-o,f=a*o-l,g=s*d,h>=0)if(f>=-g)if(f<=g){const v=1/d;h*=v,f*=v,m=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ba).addScaledVector(os,f),m}intersectSphere(e,t){Mn.subVectors(e.center,this.origin);const i=Mn.dot(this.direction),r=Mn.dot(Mn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,i,r,s){Ea.subVectors(t,e),ls.subVectors(i,e),wa.crossVectors(Ea,ls);let a=this.direction.dot(wa),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Vn.subVectors(this.origin,e);const l=o*this.direction.dot(ls.crossVectors(Vn,ls));if(l<0)return null;const c=o*this.direction.dot(Ea.cross(Vn));if(c<0||l+c>a)return null;const d=-o*Vn.dot(wa);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,t,i,r,s,a,o,l,c,d,h,f,m,g,v,p){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,d,h,f,m,g,v,p)}set(e,t,i,r,s,a,o,l,c,d,h,f,m,g,v,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=m,u[7]=g,u[11]=v,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ui.setFromMatrixColumn(e,0).length(),s=1/Ui.setFromMatrixColumn(e,1).length(),a=1/Ui.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*d,m=a*h,g=o*d,v=o*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*d,m=l*h,g=c*d,v=c*h;t[0]=f+v*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*h,t[5]=a*d,t[9]=-o,t[2]=m*o-g,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*d,m=l*h,g=c*d,v=c*h;t[0]=f-v*o,t[4]=-a*h,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*d,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*d,m=a*h,g=o*d,v=o*h;t[0]=l*d,t[4]=g*c-m,t[8]=f*c+v,t[1]=l*h,t[5]=v*c+f,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,g=o*l,v=o*c;t[0]=l*d,t[4]=v-f*h,t[8]=g*h+m,t[1]=h,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=m*h+g,t[10]=f-v*h}else if(e.order==="XZY"){const f=a*l,m=a*c,g=o*l,v=o*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=f*h+v,t[5]=a*d,t[9]=m*h-g,t[2]=g*h-m,t[6]=o*d,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zd,e,Gd)}lookAt(e,t,i){const r=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Wn.crossVectors(i,Gt),Wn.lengthSq()===0&&(Math.abs(i.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Wn.crossVectors(i,Gt)),Wn.normalize(),cs.crossVectors(Gt,Wn),r[0]=Wn.x,r[4]=cs.x,r[8]=Gt.x,r[1]=Wn.y,r[5]=cs.y,r[9]=Gt.y,r[2]=Wn.z,r[6]=cs.z,r[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],m=i[13],g=i[2],v=i[6],p=i[10],u=i[14],S=i[3],E=i[7],x=i[11],L=i[15],A=r[0],T=r[4],C=r[8],b=r[12],y=r[1],R=r[5],O=r[9],N=r[13],X=r[2],q=r[6],W=r[10],j=r[14],H=r[3],ie=r[7],ae=r[11],Ee=r[15];return s[0]=a*A+o*y+l*X+c*H,s[4]=a*T+o*R+l*q+c*ie,s[8]=a*C+o*O+l*W+c*ae,s[12]=a*b+o*N+l*j+c*Ee,s[1]=d*A+h*y+f*X+m*H,s[5]=d*T+h*R+f*q+m*ie,s[9]=d*C+h*O+f*W+m*ae,s[13]=d*b+h*N+f*j+m*Ee,s[2]=g*A+v*y+p*X+u*H,s[6]=g*T+v*R+p*q+u*ie,s[10]=g*C+v*O+p*W+u*ae,s[14]=g*b+v*N+p*j+u*Ee,s[3]=S*A+E*y+x*X+L*H,s[7]=S*T+E*R+x*q+L*ie,s[11]=S*C+E*O+x*W+L*ae,s[15]=S*b+E*N+x*j+L*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],m=e[14],g=e[3],v=e[7],p=e[11],u=e[15];return g*(+s*l*h-r*c*h-s*o*f+i*c*f+r*o*m-i*l*m)+v*(+t*l*m-t*c*f+s*a*f-r*a*m+r*c*d-s*l*d)+p*(+t*c*h-t*o*m-s*a*h+i*a*m+s*o*d-i*c*d)+u*(-r*o*d-t*l*h+t*o*f+r*a*h-i*a*f+i*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],m=e[11],g=e[12],v=e[13],p=e[14],u=e[15],S=h*p*c-v*f*c+v*l*m-o*p*m-h*l*u+o*f*u,E=g*f*c-d*p*c-g*l*m+a*p*m+d*l*u-a*f*u,x=d*v*c-g*h*c+g*o*m-a*v*m-d*o*u+a*h*u,L=g*h*l-d*v*l-g*o*f+a*v*f+d*o*p-a*h*p,A=t*S+i*E+r*x+s*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=S*T,e[1]=(v*f*s-h*p*s-v*r*m+i*p*m+h*r*u-i*f*u)*T,e[2]=(o*p*s-v*l*s+v*r*c-i*p*c-o*r*u+i*l*u)*T,e[3]=(h*l*s-o*f*s-h*r*c+i*f*c+o*r*m-i*l*m)*T,e[4]=E*T,e[5]=(d*p*s-g*f*s+g*r*m-t*p*m-d*r*u+t*f*u)*T,e[6]=(g*l*s-a*p*s-g*r*c+t*p*c+a*r*u-t*l*u)*T,e[7]=(a*f*s-d*l*s+d*r*c-t*f*c-a*r*m+t*l*m)*T,e[8]=x*T,e[9]=(g*h*s-d*v*s-g*i*m+t*v*m+d*i*u-t*h*u)*T,e[10]=(a*v*s-g*o*s+g*i*c-t*v*c-a*i*u+t*o*u)*T,e[11]=(d*o*s-a*h*s-d*i*c+t*h*c+a*i*m-t*o*m)*T,e[12]=L*T,e[13]=(d*v*r-g*h*r+g*i*f-t*v*f-d*i*p+t*h*p)*T,e[14]=(g*o*r-a*v*r-g*i*l+t*v*l+a*i*p-t*o*p)*T,e[15]=(a*h*r-d*o*r+d*i*l-t*h*l-a*i*f+t*o*f)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,d=a+a,h=o+o,f=s*c,m=s*d,g=s*h,v=a*d,p=a*h,u=o*h,S=l*c,E=l*d,x=l*h,L=i.x,A=i.y,T=i.z;return r[0]=(1-(v+u))*L,r[1]=(m+x)*L,r[2]=(g-E)*L,r[3]=0,r[4]=(m-x)*A,r[5]=(1-(f+u))*A,r[6]=(p+S)*A,r[7]=0,r[8]=(g+E)*T,r[9]=(p-S)*T,r[10]=(1-(f+v))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ui.set(r[0],r[1],r[2]).length();const a=Ui.set(r[4],r[5],r[6]).length(),o=Ui.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],nn.copy(this);const c=1/s,d=1/a,h=1/o;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=d,nn.elements[5]*=d,nn.elements[6]*=d,nn.elements[8]*=h,nn.elements[9]*=h,nn.elements[10]*=h,t.setFromRotationMatrix(nn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Ln){const l=this.elements,c=2*s/(t-e),d=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let m,g;if(o===Ln)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Gs)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Ln){const l=this.elements,c=1/(t-e),d=1/(i-r),h=1/(a-s),f=(t+e)*c,m=(i+r)*d;let g,v;if(o===Ln)g=(a+s)*h,v=-2*h;else if(o===Gs)g=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ui=new G,nn=new xt,zd=new G(0,0,0),Gd=new G(1,1,1),Wn=new G,cs=new G,Gt=new G,Vl=new xt,Wl=new Wr;class Fn{constructor(e=0,t=0,i=0,r=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],h=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Vl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wl.setFromEuler(this),this.setFromQuaternion(Wl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class xu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hd=0;const Xl=new G,Fi=new Wr,Sn=new xt,us=new G,wr=new G,Vd=new G,Wd=new Wr,ql=new G(1,0,0),$l=new G(0,1,0),Yl=new G(0,0,1),Kl={type:"added"},Xd={type:"removed"},Ni={type:"childadded",child:null},Ta={type:"childremoved",child:null};class Bt extends fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=Vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new G,t=new Fn,i=new Wr,r=new G(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new Fe}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.premultiply(Fi),this}rotateX(e){return this.rotateOnAxis(ql,e)}rotateY(e){return this.rotateOnAxis($l,e)}rotateZ(e){return this.rotateOnAxis(Yl,e)}translateOnAxis(e,t){return Xl.copy(e).applyQuaternion(this.quaternion),this.position.add(Xl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ql,e)}translateY(e){return this.translateOnAxis($l,e)}translateZ(e){return this.translateOnAxis(Yl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?us.copy(e):us.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(wr,us,this.up):Sn.lookAt(us,wr,this.up),this.quaternion.setFromRotationMatrix(Sn),r&&(Sn.extractRotation(r.matrixWorld),Fi.setFromRotationMatrix(Sn),this.quaternion.premultiply(Fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kl),Ni.child=e,this.dispatchEvent(Ni),Ni.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xd),Ta.child=e,this.dispatchEvent(Ta),Ta.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kl),Ni.child=e,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,e,Vd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,Wd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Bt.DEFAULT_UP=new G(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new G,bn=new G,Aa=new G,En=new G,Oi=new G,Bi=new G,jl=new G,Ra=new G,Ca=new G,Pa=new G,La=new pt,Da=new pt,Ia=new pt;class an{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),rn.subVectors(e,t),r.cross(rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){rn.subVectors(r,t),bn.subVectors(i,t),Aa.subVectors(e,t);const a=rn.dot(rn),o=rn.dot(bn),l=rn.dot(Aa),c=bn.dot(bn),d=bn.dot(Aa),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(c*l-o*d)*f,g=(a*d-o*l)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,En.x),l.addScaledVector(a,En.y),l.addScaledVector(o,En.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return La.setScalar(0),Da.setScalar(0),Ia.setScalar(0),La.fromBufferAttribute(e,t),Da.fromBufferAttribute(e,i),Ia.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(La,s.x),a.addScaledVector(Da,s.y),a.addScaledVector(Ia,s.z),a}static isFrontFacing(e,t,i,r){return rn.subVectors(i,t),bn.subVectors(e,t),rn.cross(bn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),rn.cross(bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return an.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Oi.subVectors(r,i),Bi.subVectors(s,i),Ra.subVectors(e,i);const l=Oi.dot(Ra),c=Bi.dot(Ra);if(l<=0&&c<=0)return t.copy(i);Ca.subVectors(e,r);const d=Oi.dot(Ca),h=Bi.dot(Ca);if(d>=0&&h<=d)return t.copy(r);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(i).addScaledVector(Oi,a);Pa.subVectors(e,s);const m=Oi.dot(Pa),g=Bi.dot(Pa);if(g>=0&&m<=g)return t.copy(s);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Bi,o);const p=d*g-m*h;if(p<=0&&h-d>=0&&m-g>=0)return jl.subVectors(s,r),o=(h-d)/(h-d+(m-g)),t.copy(r).addScaledVector(jl,o);const u=1/(p+v+f);return a=v*u,o=f*u,t.copy(i).addScaledVector(Oi,a).addScaledVector(Bi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const yu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},hs={h:0,s:0,l:0};function Ua(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ke.workingColorSpace){if(e=Cd(e,1),t=Dt(t,0,1),i=Dt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Ua(a,s,e+1/3),this.g=Ua(a,s,e),this.b=Ua(a,s,e-1/3)}return Ke.toWorkingColorSpace(this,r),this}setStyle(e,t=jt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){const i=yu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dn(e.r),this.g=Dn(e.g),this.b=Dn(e.b),this}copyLinearToSRGB(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return Ke.fromWorkingColorSpace(Ct.copy(this),e),Math.round(Dt(Ct.r*255,0,255))*65536+Math.round(Dt(Ct.g*255,0,255))*256+Math.round(Dt(Ct.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Ct.copy(this),t);const i=Ct.r,r=Ct.g,s=Ct.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=jt){Ke.fromWorkingColorSpace(Ct.copy(this),e);const t=Ct.r,i=Ct.g,r=Ct.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Xn),this.setHSL(Xn.h+e,Xn.s+t,Xn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xn),e.getHSL(hs);const i=va(Xn.h,hs.h,t),r=va(Xn.s,hs.s,t),s=va(Xn.l,hs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new qe;qe.NAMES=yu;let qd=0;class qr extends fr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Vr(),this.name="",this.blending=ji,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=to,this.blendDst=no,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Il,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(i.blending=this.blending),this.side!==ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==to&&(i.blendSrc=this.blendSrc),this.blendDst!==no&&(i.blendDst=this.blendDst),this.blendEquation!==_i&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==tr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Il&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Mu extends qr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=ru,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Cn=$d();function $d(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,r[l]=24,r[l|256]=24):(i[l]=31744,i[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,d=0;for(;(c&8388608)===0;)c<<=1,d-=8388608;c&=-8388609,d+=947912704,s[l]=c|d}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function Yd(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=Dt(n,-65504,65504),Cn.floatView[0]=n;const e=Cn.uint32View[0],t=e>>23&511;return Cn.baseTable[t]+((e&8388607)>>Cn.shiftTable[t])}function Kd(n){const e=n>>10;return Cn.uint32View[0]=Cn.mantissaTable[Cn.offsetTable[e]+(n&1023)]+Cn.exponentTable[e],Cn.floatView[0]}const Fa={toHalfFloat:Yd,fromHalfFloat:Kd},Mt=new G,ds=new Be;class Zt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ul,this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ds.fromBufferAttribute(this,t),ds.applyMatrix3(e),this.setXY(t,ds.x,ds.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Sr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),r=Ut(r,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ul&&(e.usage=this.usage),e}}class Su extends Zt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class bu extends Zt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Si extends Zt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let jd=0;const $t=new xt,Na=new Bt,ki=new G,Ht=new Xr,Tr=new Xr,wt=new G;class On extends fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=Vr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gu(e)?bu:Su)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $t.makeRotationFromQuaternion(e),this.applyMatrix4($t),this}rotateX(e){return $t.makeRotationX(e),this.applyMatrix4($t),this}rotateY(e){return $t.makeRotationY(e),this.applyMatrix4($t),this}rotateZ(e){return $t.makeRotationZ(e),this.applyMatrix4($t),this}translate(e,t,i){return $t.makeTranslation(e,t,i),this.applyMatrix4($t),this}scale(e,t,i){return $t.makeScale(e,t,i),this.applyMatrix4($t),this}lookAt(e){return Na.lookAt(e),Na.updateMatrix(),this.applyMatrix4(Na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Si(i,3))}else{for(let i=0,r=t.count;i<r;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ht.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ta);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Tr.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(Ht.min,Tr.min),Ht.expandByPoint(wt),wt.addVectors(Ht.max,Tr.max),Ht.expandByPoint(wt)):(Ht.expandByPoint(Tr.min),Ht.expandByPoint(Tr.max))}Ht.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(wt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)wt.fromBufferAttribute(o,c),l&&(ki.fromBufferAttribute(e,c),wt.add(ki)),r=Math.max(r,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<i.count;C++)o[C]=new G,l[C]=new G;const c=new G,d=new G,h=new G,f=new Be,m=new Be,g=new Be,v=new G,p=new G;function u(C,b,y){c.fromBufferAttribute(i,C),d.fromBufferAttribute(i,b),h.fromBufferAttribute(i,y),f.fromBufferAttribute(s,C),m.fromBufferAttribute(s,b),g.fromBufferAttribute(s,y),d.sub(c),h.sub(c),m.sub(f),g.sub(f);const R=1/(m.x*g.y-g.x*m.y);isFinite(R)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(R),p.copy(h).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(R),o[C].add(v),o[b].add(v),o[y].add(v),l[C].add(p),l[b].add(p),l[y].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let C=0,b=S.length;C<b;++C){const y=S[C],R=y.start,O=y.count;for(let N=R,X=R+O;N<X;N+=3)u(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const E=new G,x=new G,L=new G,A=new G;function T(C){L.fromBufferAttribute(r,C),A.copy(L);const b=o[C];E.copy(b),E.sub(L.multiplyScalar(L.dot(b))).normalize(),x.crossVectors(A,b);const R=x.dot(l[C])<0?-1:1;a.setXYZW(C,E.x,E.y,E.z,R)}for(let C=0,b=S.length;C<b;++C){const y=S[C],R=y.start,O=y.count;for(let N=R,X=R+O;N<X;N+=3)T(e.getX(N+0)),T(e.getX(N+1)),T(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new G,s=new G,a=new G,o=new G,l=new G,c=new G,d=new G,h=new G;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),o.add(d),l.add(d),c.add(d),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,f=new c.constructor(l.length*d);let m=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*d;for(let u=0;u<d;u++)f[g++]=c[m++]}return new Zt(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new On,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,h=c.length;d<h;d++){const f=c[d],m=e(f,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let f=0,m=h.length;f<m;f++)d.push(h[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zl=new xt,ci=new _u,fs=new ta,Jl=new G,ps=new G,ms=new G,gs=new G,Oa=new G,vs=new G,Ql=new G,_s=new G;class Nt extends Bt{constructor(e=new On,t=new Mu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){vs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],h=s[l];d!==0&&(Oa.fromBufferAttribute(h,e),a?vs.addScaledVector(Oa,d):vs.addScaledVector(Oa.sub(t),d))}t.add(vs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fs.copy(i.boundingSphere),fs.applyMatrix4(s),ci.copy(e.ray).recast(e.near),!(fs.containsPoint(ci.origin)===!1&&(ci.intersectSphere(fs,Jl)===null||ci.origin.distanceToSquared(Jl)>(e.far-e.near)**2))&&(Zl.copy(s).invert(),ci.copy(e.ray).applyMatrix4(Zl),!(i.boundingBox!==null&&ci.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ci)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const p=f[g],u=a[p.materialIndex],S=Math.max(p.start,m.start),E=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let x=S,L=E;x<L;x+=3){const A=o.getX(x),T=o.getX(x+1),C=o.getX(x+2);r=xs(this,u,e,i,c,d,h,A,T,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=g,u=v;p<u;p+=3){const S=o.getX(p),E=o.getX(p+1),x=o.getX(p+2);r=xs(this,a,e,i,c,d,h,S,E,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const p=f[g],u=a[p.materialIndex],S=Math.max(p.start,m.start),E=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let x=S,L=E;x<L;x+=3){const A=x,T=x+1,C=x+2;r=xs(this,u,e,i,c,d,h,A,T,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=g,u=v;p<u;p+=3){const S=p,E=p+1,x=p+2;r=xs(this,a,e,i,c,d,h,S,E,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Zd(n,e,t,i,r,s,a,o){let l;if(e.side===Ot?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ii,o),l===null)return null;_s.copy(o),_s.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(_s);return c<t.near||c>t.far?null:{distance:c,point:_s.clone(),object:n}}function xs(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,ps),n.getVertexPosition(l,ms),n.getVertexPosition(c,gs);const d=Zd(n,e,t,i,ps,ms,gs,Ql);if(d){const h=new G;an.getBarycoord(Ql,ps,ms,gs,h),r&&(d.uv=an.getInterpolatedAttribute(r,o,l,c,h,new Be)),s&&(d.uv1=an.getInterpolatedAttribute(s,o,l,c,h,new Be)),a&&(d.normal=an.getInterpolatedAttribute(a,o,l,c,h,new G),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new G,materialIndex:0};an.getNormal(ps,ms,gs,f.normal),d.face=f,d.barycoord=h}return d}class $r extends On{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Si(c,3)),this.setAttribute("normal",new Si(d,3)),this.setAttribute("uv",new Si(h,2));function g(v,p,u,S,E,x,L,A,T,C,b){const y=x/T,R=L/C,O=x/2,N=L/2,X=A/2,q=T+1,W=C+1;let j=0,H=0;const ie=new G;for(let ae=0;ae<W;ae++){const Ee=ae*R-N;for(let ze=0;ze<q;ze++){const at=ze*y-O;ie[v]=at*S,ie[p]=Ee*E,ie[u]=X,c.push(ie.x,ie.y,ie.z),ie[v]=0,ie[p]=0,ie[u]=A>0?1:-1,d.push(ie.x,ie.y,ie.z),h.push(ze/T),h.push(1-ae/C),j+=1}}for(let ae=0;ae<C;ae++)for(let Ee=0;Ee<T;Ee++){const ze=f+Ee+q*ae,at=f+Ee+q*(ae+1),K=f+(Ee+1)+q*(ae+1),ne=f+(Ee+1)+q*ae;l.push(ze,at,ne),l.push(at,K,ne),H+=6}o.addGroup(m,H,b),m+=H,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ar(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Lt(n){const e={};for(let t=0;t<n.length;t++){const i=ar(n[t]);for(const r in i)e[r]=i[r]}return e}function Jd(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Eu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const Qd={clone:ar,merge:Lt};var ef=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yt extends qr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ef,this.fragmentShader=tf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ar(e.uniforms),this.uniformsGroups=Jd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class wu extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Ln}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qn=new G,ec=new Be,tc=new Be;class sn extends wu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Go*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ga*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Go*2*Math.atan(Math.tan(ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qn.x,qn.y).multiplyScalar(-e/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qn.x,qn.y).multiplyScalar(-e/qn.z)}getViewSize(e,t){return this.getViewBounds(e,ec,tc),t.subVectors(tc,ec)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ga*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zi=-90,Gi=1;class nf extends Bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new sn(zi,Gi,e,t);r.layers=this.layers,this.add(r);const s=new sn(zi,Gi,e,t);s.layers=this.layers,this.add(s);const a=new sn(zi,Gi,e,t);a.layers=this.layers,this.add(a);const o=new sn(zi,Gi,e,t);o.layers=this.layers,this.add(o);const l=new sn(zi,Gi,e,t);l.layers=this.layers,this.add(l);const c=new sn(zi,Gi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Ln)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Gs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,d),e.setRenderTarget(h,f,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Tu extends Pt{constructor(e,t,i,r,s,a,o,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:nr,super(e,t,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rf extends kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Tu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:St}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new $r(5,5,5),s=new yt({name:"CubemapFromEquirect",uniforms:ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ot,blending:Jn});s.uniforms.tEquirect.value=t;const a=new Nt(r,s),o=t.minFilter;return t.minFilter===Mi&&(t.minFilter=St),new nf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Ba=new G,sf=new G,af=new Fe;class mi{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ba.subVectors(i,t).cross(sf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ba),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||af.getNormalMatrix(e),r=this.coplanarPoint(Ba).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new ta,ys=new G;class Au{constructor(e=new mi,t=new mi,i=new mi,r=new mi,s=new mi,a=new mi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ln){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],d=r[5],h=r[6],f=r[7],m=r[8],g=r[9],v=r[10],p=r[11],u=r[12],S=r[13],E=r[14],x=r[15];if(i[0].setComponents(l-s,f-c,p-m,x-u).normalize(),i[1].setComponents(l+s,f+c,p+m,x+u).normalize(),i[2].setComponents(l+a,f+d,p+g,x+S).normalize(),i[3].setComponents(l-a,f-d,p-g,x-S).normalize(),i[4].setComponents(l-o,f-h,p-v,x-E).normalize(),t===Ln)i[5].setComponents(l+o,f+h,p+v,x+E).normalize();else if(t===Gs)i[5].setComponents(o,h,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(e){return ui.center.set(0,0,0),ui.radius=.7071067811865476,ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ys.x=r.normal.x>0?e.max.x:e.min.x,ys.y=r.normal.y>0?e.max.y:e.min.y,ys.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ys)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ru(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function of(n){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const d=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,d);else{h.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<h.length;m++){const g=h[f],v=h[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let m=0,g=h.length;m<g;m++){const v=h[m];n.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Bn extends On{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,h=e/o,f=t/l,m=[],g=[],v=[],p=[];for(let u=0;u<d;u++){const S=u*f-a;for(let E=0;E<c;E++){const x=E*h-s;g.push(x,-S,0),v.push(0,0,1),p.push(E/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let S=0;S<o;S++){const E=S+c*u,x=S+c*(u+1),L=S+1+c*(u+1),A=S+1+c*u;m.push(E,x,A),m.push(x,L,A)}this.setIndex(m),this.setAttribute("position",new Si(g,3)),this.setAttribute("normal",new Si(v,3)),this.setAttribute("uv",new Si(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bn(e.width,e.height,e.widthSegments,e.heightSegments)}}var lf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cf=`#ifdef USE_ALPHAHASH
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
#endif`,uf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,df=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ff=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pf=`#ifdef USE_AOMAP
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
#endif`,mf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,vf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_f=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mf=`#ifdef USE_IRIDESCENCE
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
#endif`,Sf=`#ifdef USE_BUMPMAP
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
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Lf=`#define PI 3.141592653589793
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
} // validated`,Df=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,If=`vec3 transformedNormal = objectNormal;
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
#endif`,Uf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ff=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Of=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bf="gl_FragColor = linearToOutputTexel( gl_FragColor );",kf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zf=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Gf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hf=`#ifdef USE_ENVMAP
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
#endif`,Vf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wf=`#ifdef USE_ENVMAP
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
#endif`,Xf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$f=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kf=`#ifdef USE_GRADIENTMAP
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
}`,jf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qf=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,ep=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,tp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ip=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sp=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,ap=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,op=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,lp=`#if defined( RE_IndirectDiffuse )
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
#endif`,cp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,up=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vp=`#if defined( USE_POINTS_UV )
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
#endif`,_p=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ep=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pp=`#ifdef USE_NORMALMAP
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
#endif`,Lp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ip=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Up=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Np=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Op=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Wp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$p=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yp=`#ifdef USE_SKINNING
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
#endif`,Kp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jp=`#ifdef USE_SKINNING
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
#endif`,Zp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,em=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tm=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nm=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,am=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const om=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lm=`uniform sampler2D t2D;
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
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,um=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fm=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,pm=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mm=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,gm=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_m=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xm=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ym=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mm=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Sm=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,bm=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,Em=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,wm=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,Tm=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Am=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,Rm=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cm=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,Pm=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Lm=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,Dm=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Im=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,Um=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Fm=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Nm=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Om=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Bm=`uniform vec3 color;
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
}`,km=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,zm=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Oe={alphahash_fragment:lf,alphahash_pars_fragment:cf,alphamap_fragment:uf,alphamap_pars_fragment:hf,alphatest_fragment:df,alphatest_pars_fragment:ff,aomap_fragment:pf,aomap_pars_fragment:mf,batching_pars_vertex:gf,batching_vertex:vf,begin_vertex:_f,beginnormal_vertex:xf,bsdfs:yf,iridescence_fragment:Mf,bumpmap_pars_fragment:Sf,clipping_planes_fragment:bf,clipping_planes_pars_fragment:Ef,clipping_planes_pars_vertex:wf,clipping_planes_vertex:Tf,color_fragment:Af,color_pars_fragment:Rf,color_pars_vertex:Cf,color_vertex:Pf,common:Lf,cube_uv_reflection_fragment:Df,defaultnormal_vertex:If,displacementmap_pars_vertex:Uf,displacementmap_vertex:Ff,emissivemap_fragment:Nf,emissivemap_pars_fragment:Of,colorspace_fragment:Bf,colorspace_pars_fragment:kf,envmap_fragment:zf,envmap_common_pars_fragment:Gf,envmap_pars_fragment:Hf,envmap_pars_vertex:Vf,envmap_physical_pars_fragment:ep,envmap_vertex:Wf,fog_vertex:Xf,fog_pars_vertex:qf,fog_fragment:$f,fog_pars_fragment:Yf,gradientmap_pars_fragment:Kf,lightmap_pars_fragment:jf,lights_lambert_fragment:Zf,lights_lambert_pars_fragment:Jf,lights_pars_begin:Qf,lights_toon_fragment:tp,lights_toon_pars_fragment:np,lights_phong_fragment:ip,lights_phong_pars_fragment:rp,lights_physical_fragment:sp,lights_physical_pars_fragment:ap,lights_fragment_begin:op,lights_fragment_maps:lp,lights_fragment_end:cp,logdepthbuf_fragment:up,logdepthbuf_pars_fragment:hp,logdepthbuf_pars_vertex:dp,logdepthbuf_vertex:fp,map_fragment:pp,map_pars_fragment:mp,map_particle_fragment:gp,map_particle_pars_fragment:vp,metalnessmap_fragment:_p,metalnessmap_pars_fragment:xp,morphinstance_vertex:yp,morphcolor_vertex:Mp,morphnormal_vertex:Sp,morphtarget_pars_vertex:bp,morphtarget_vertex:Ep,normal_fragment_begin:wp,normal_fragment_maps:Tp,normal_pars_fragment:Ap,normal_pars_vertex:Rp,normal_vertex:Cp,normalmap_pars_fragment:Pp,clearcoat_normal_fragment_begin:Lp,clearcoat_normal_fragment_maps:Dp,clearcoat_pars_fragment:Ip,iridescence_pars_fragment:Up,opaque_fragment:Fp,packing:Np,premultiplied_alpha_fragment:Op,project_vertex:Bp,dithering_fragment:kp,dithering_pars_fragment:zp,roughnessmap_fragment:Gp,roughnessmap_pars_fragment:Hp,shadowmap_pars_fragment:Vp,shadowmap_pars_vertex:Wp,shadowmap_vertex:Xp,shadowmask_pars_fragment:qp,skinbase_vertex:$p,skinning_pars_vertex:Yp,skinning_vertex:Kp,skinnormal_vertex:jp,specularmap_fragment:Zp,specularmap_pars_fragment:Jp,tonemapping_fragment:Qp,tonemapping_pars_fragment:em,transmission_fragment:tm,transmission_pars_fragment:nm,uv_pars_fragment:im,uv_pars_vertex:rm,uv_vertex:sm,worldpos_vertex:am,background_vert:om,background_frag:lm,backgroundCube_vert:cm,backgroundCube_frag:um,cube_vert:hm,cube_frag:dm,depth_vert:fm,depth_frag:pm,distanceRGBA_vert:mm,distanceRGBA_frag:gm,equirect_vert:vm,equirect_frag:_m,linedashed_vert:xm,linedashed_frag:ym,meshbasic_vert:Mm,meshbasic_frag:Sm,meshlambert_vert:bm,meshlambert_frag:Em,meshmatcap_vert:wm,meshmatcap_frag:Tm,meshnormal_vert:Am,meshnormal_frag:Rm,meshphong_vert:Cm,meshphong_frag:Pm,meshphysical_vert:Lm,meshphysical_frag:Dm,meshtoon_vert:Im,meshtoon_frag:Um,points_vert:Fm,points_frag:Nm,shadow_vert:Om,shadow_frag:Bm,sprite_vert:km,sprite_frag:zm},se={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},fn={basic:{uniforms:Lt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Lt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new qe(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Lt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Lt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Lt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new qe(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Lt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Lt([se.points,se.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Lt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Lt([se.common,se.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Lt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Lt([se.sprite,se.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Lt([se.common,se.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Lt([se.lights,se.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};fn.physical={uniforms:Lt([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Ms={r:0,b:0,g:0},hi=new Fn,Gm=new xt;function Hm(n,e,t,i,r,s,a){const o=new qe(0);let l=s===!0?0:1,c,d,h=null,f=0,m=null;function g(S){let E=S.isScene===!0?S.background:null;return E&&E.isTexture&&(E=(S.backgroundBlurriness>0?t:e).get(E)),E}function v(S){let E=!1;const x=g(S);x===null?u(o,l):x&&x.isColor&&(u(x,1),E=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(S,E){const x=g(E);x&&(x.isCubeTexture||x.mapping===Qs)?(d===void 0&&(d=new Nt(new $r(1,1,1),new yt({name:"BackgroundCubeMaterial",uniforms:ar(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),hi.copy(E.backgroundRotation),hi.x*=-1,hi.y*=-1,hi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),d.material.uniforms.envMap.value=x,d.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Gm.makeRotationFromEuler(hi)),d.material.toneMapped=Ke.getTransfer(x.colorSpace)!==st,(h!==x||f!==x.version||m!==n.toneMapping)&&(d.material.needsUpdate=!0,h=x,f=x.version,m=n.toneMapping),d.layers.enableAll(),S.unshift(d,d.geometry,d.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Nt(new Bn(2,2),new yt({name:"BackgroundMaterial",uniforms:ar(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(x.colorSpace)!==st,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,m=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function u(S,E){S.getRGB(Ms,Eu(n)),i.buffers.color.setClear(Ms.r,Ms.g,Ms.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(S,E=1){o.set(S),l=E,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,u(o,l)},render:v,addToRenderList:p}}function Vm(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(y,R,O,N,X){let q=!1;const W=h(N,O,R);s!==W&&(s=W,c(s.object)),q=m(y,N,O,X),q&&g(y,N,O,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,x(y,R,O,N),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function d(y){return n.deleteVertexArray(y)}function h(y,R,O){const N=O.wireframe===!0;let X=i[y.id];X===void 0&&(X={},i[y.id]=X);let q=X[R.id];q===void 0&&(q={},X[R.id]=q);let W=q[N];return W===void 0&&(W=f(l()),q[N]=W),W}function f(y){const R=[],O=[],N=[];for(let X=0;X<t;X++)R[X]=0,O[X]=0,N[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:O,attributeDivisors:N,object:y,attributes:{},index:null}}function m(y,R,O,N){const X=s.attributes,q=R.attributes;let W=0;const j=O.getAttributes();for(const H in j)if(j[H].location>=0){const ae=X[H];let Ee=q[H];if(Ee===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(Ee=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(Ee=y.instanceColor)),ae===void 0||ae.attribute!==Ee||Ee&&ae.data!==Ee.data)return!0;W++}return s.attributesNum!==W||s.index!==N}function g(y,R,O,N){const X={},q=R.attributes;let W=0;const j=O.getAttributes();for(const H in j)if(j[H].location>=0){let ae=q[H];ae===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(ae=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(ae=y.instanceColor));const Ee={};Ee.attribute=ae,ae&&ae.data&&(Ee.data=ae.data),X[H]=Ee,W++}s.attributes=X,s.attributesNum=W,s.index=N}function v(){const y=s.newAttributes;for(let R=0,O=y.length;R<O;R++)y[R]=0}function p(y){u(y,0)}function u(y,R){const O=s.newAttributes,N=s.enabledAttributes,X=s.attributeDivisors;O[y]=1,N[y]===0&&(n.enableVertexAttribArray(y),N[y]=1),X[y]!==R&&(n.vertexAttribDivisor(y,R),X[y]=R)}function S(){const y=s.newAttributes,R=s.enabledAttributes;for(let O=0,N=R.length;O<N;O++)R[O]!==y[O]&&(n.disableVertexAttribArray(O),R[O]=0)}function E(y,R,O,N,X,q,W){W===!0?n.vertexAttribIPointer(y,R,O,X,q):n.vertexAttribPointer(y,R,O,N,X,q)}function x(y,R,O,N){v();const X=N.attributes,q=O.getAttributes(),W=R.defaultAttributeValues;for(const j in q){const H=q[j];if(H.location>=0){let ie=X[j];if(ie===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(ie=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(ie=y.instanceColor)),ie!==void 0){const ae=ie.normalized,Ee=ie.itemSize,ze=e.get(ie);if(ze===void 0)continue;const at=ze.buffer,K=ze.type,ne=ze.bytesPerElement,ye=K===n.INT||K===n.UNSIGNED_INT||ie.gpuType===tl;if(ie.isInterleavedBufferAttribute){const le=ie.data,Ce=le.stride,De=ie.offset;if(le.isInstancedInterleavedBuffer){for(let Ge=0;Ge<H.locationSize;Ge++)u(H.location+Ge,le.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ge=0;Ge<H.locationSize;Ge++)p(H.location+Ge);n.bindBuffer(n.ARRAY_BUFFER,at);for(let Ge=0;Ge<H.locationSize;Ge++)E(H.location+Ge,Ee/H.locationSize,K,ae,Ce*ne,(De+Ee/H.locationSize*Ge)*ne,ye)}else{if(ie.isInstancedBufferAttribute){for(let le=0;le<H.locationSize;le++)u(H.location+le,ie.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let le=0;le<H.locationSize;le++)p(H.location+le);n.bindBuffer(n.ARRAY_BUFFER,at);for(let le=0;le<H.locationSize;le++)E(H.location+le,Ee/H.locationSize,K,ae,Ee*ne,Ee/H.locationSize*le*ne,ye)}}else if(W!==void 0){const ae=W[j];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv(H.location,ae);break;case 3:n.vertexAttrib3fv(H.location,ae);break;case 4:n.vertexAttrib4fv(H.location,ae);break;default:n.vertexAttrib1fv(H.location,ae)}}}}S()}function L(){C();for(const y in i){const R=i[y];for(const O in R){const N=R[O];for(const X in N)d(N[X].object),delete N[X];delete R[O]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;const R=i[y.id];for(const O in R){const N=R[O];for(const X in N)d(N[X].object),delete N[X];delete R[O]}delete i[y.id]}function T(y){for(const R in i){const O=i[R];if(O[y.id]===void 0)continue;const N=O[y.id];for(const X in N)d(N[X].object),delete N[X];delete O[y.id]}}function C(){b(),a=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:p,disableUnusedAttributes:S}}function Wm(n,e,t){let i;function r(c){i=c}function s(c,d){n.drawArrays(i,c,d),t.update(d,i,1)}function a(c,d,h){h!==0&&(n.drawArraysInstanced(i,c,d,h),t.update(d,i,h))}function o(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,h);let m=0;for(let g=0;g<h;g++)m+=d[g];t.update(m,i,1)}function l(c,d,h,f){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],d[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,d,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=d[v]*f[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Xm(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==Vt&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const C=T===si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==un&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==on&&!C)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:L,maxSamples:A}}function qm(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new mi,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=d(h,f,0)},this.setState=function(h,f,m){const g=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,u=n.get(h);if(!r||g===null||g.length===0||s&&!p)s?d(null):c();else{const S=s?0:i,E=S*4;let x=u.clippingState||null;l.value=x,x=d(g,f,E,m);for(let L=0;L!==E;++L)x[L]=t[L];u.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,m,g){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const u=m+v*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<u)&&(p=new Float32Array(u));for(let E=0,x=m;E!==v;++E,x+=4)a.copy(h[E]).applyMatrix4(S,o),a.normal.toArray(p,x),p[x+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function $m(n){let e=new WeakMap;function t(a,o){return o===uo?a.mapping=nr:o===ho&&(a.mapping=ir),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===uo||o===ho)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new rf(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Cu extends wu{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const $i=4,nc=[.125,.215,.35,.446,.526,.582],xi=20,ka=new Cu,ic=new qe;let za=null,Ga=0,Ha=0,Va=!1;const gi=(1+Math.sqrt(5))/2,Hi=1/gi,rc=[new G(-gi,Hi,0),new G(gi,Hi,0),new G(-Hi,0,gi),new G(Hi,0,gi),new G(0,gi,-Hi),new G(0,gi,Hi),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class sc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){za=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(za,Ga,Ha),this._renderer.xr.enabled=Va,e.scissorTest=!1,Ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===nr||e.mapping===ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),za=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:St,minFilter:St,generateMipmaps:!1,type:si,format:Vt,colorSpace:dr,depthBuffer:!1},r=ac(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ac(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ym(s)),this._blurMaterial=Km(s,e,t)}return r}_compileMaterial(e){const t=new Nt(this._lodPlanes[0],e);this._renderer.compile(t,ka)}_sceneToCubeUV(e,t,i,r){const o=new sn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(ic),d.toneMapping=Qn,d.autoClear=!1;const m=new Mu({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),g=new Nt(new $r,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(ic),v=!0);for(let u=0;u<6;u++){const S=u%3;S===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):S===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const E=this._cubeSize;Ss(r,S*E,u>2?E:0,E,E),d.setRenderTarget(r),v&&d.render(g,o),d.render(e,o)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===nr||e.mapping===ir;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Nt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ss(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ka)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=rc[(r-s-1)%rc.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Nt(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*xi-1),v=s/g,p=isFinite(s)?1+Math.floor(d*v):xi;p>xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${xi}`);const u=[];let S=0;for(let T=0;T<xi;++T){const C=T/v,b=Math.exp(-C*C/2);u.push(b),T===0?S+=b:T<p&&(S+=2*b)}for(let T=0;T<u.length;T++)u[T]=u[T]/S;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-i;const x=this._sizeLods[r],L=3*x*(r>E-$i?r-E+$i:0),A=4*(this._cubeSize-x);Ss(t,L,A,3*x,2*x),l.setRenderTarget(t),l.render(h,ka)}}function Ym(n){const e=[],t=[],i=[];let r=n;const s=n-$i+1+nc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-$i?l=nc[a-n+$i-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,g=6,v=3,p=2,u=1,S=new Float32Array(v*g*m),E=new Float32Array(p*g*m),x=new Float32Array(u*g*m);for(let A=0;A<m;A++){const T=A%3*2/3-1,C=A>2?0:-1,b=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];S.set(b,v*g*A),E.set(f,p*g*A);const y=[A,A,A,A,A,A];x.set(y,u*g*A)}const L=new On;L.setAttribute("position",new Zt(S,v)),L.setAttribute("uv",new Zt(E,p)),L.setAttribute("faceIndex",new Zt(x,u)),e.push(L),r>$i&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ac(n,e,t){const i=new kt(n,e,t);return i.texture.mapping=Qs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ss(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Km(n,e,t){const i=new Float32Array(xi),r=new G(0,1,0);return new yt({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ll(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function oc(){return new yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ll(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function lc(){return new yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function ll(){return`

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
	`}function jm(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===uo||l===ho,d=l===nr||l===ir;if(c||d){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new sc(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return c&&m&&m.height>0||d&&m&&r(m)?(t===null&&(t=new sc(n)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Zm(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Dr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Jm(n,e,t,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let p=0,u=v.length;p<u;p++)e.remove(v[p])}f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const v=m[g];for(let p=0,u=v.length;p<u;p++)e.update(v[p],n.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,g=h.attributes.position;let v=0;if(m!==null){const S=m.array;v=m.version;for(let E=0,x=S.length;E<x;E+=3){const L=S[E+0],A=S[E+1],T=S[E+2];f.push(L,A,A,T,T,L)}}else if(g!==void 0){const S=g.array;v=g.version;for(let E=0,x=S.length/3-1;E<x;E+=3){const L=E+0,A=E+1,T=E+2;f.push(L,A,A,T,T,L)}}else return;const p=new(gu(f)?bu:Su)(f,1);p.version=v;const u=s.get(h);u&&e.remove(u),s.set(h,p)}function d(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function Qm(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,m){n.drawElements(i,m,s,f*a),t.update(m,i,1)}function c(f,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,f*a,g),t.update(m,i,g))}function d(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,g);let p=0;for(let u=0;u<g;u++)p+=m[u];t.update(p,i,1)}function h(f,m,g,v){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<f.length;u++)c(f[u]/a,m[u],v[u]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,v,0,g);let u=0;for(let S=0;S<g;S++)u+=m[S]*v[S];t.update(u,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function eg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function tg(n,e,t){const i=new WeakMap,r=new pt;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let y=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var m=y;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),p===!0&&(x=3);let L=o.attributes.position.count*x,A=1;L>e.maxTextureSize&&(A=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const T=new Float32Array(L*A*4*h),C=new Vs(T,L,A,h);C.type=on,C.needsUpdate=!0;const b=x*4;for(let R=0;R<h;R++){const O=u[R],N=S[R],X=E[R],q=L*A*4*R;for(let W=0;W<O.count;W++){const j=W*b;g===!0&&(r.fromBufferAttribute(O,W),T[q+j+0]=r.x,T[q+j+1]=r.y,T[q+j+2]=r.z,T[q+j+3]=0),v===!0&&(r.fromBufferAttribute(N,W),T[q+j+4]=r.x,T[q+j+5]=r.y,T[q+j+6]=r.z,T[q+j+7]=0),p===!0&&(r.fromBufferAttribute(X,W),T[q+j+8]=r.x,T[q+j+9]=r.y,T[q+j+10]=r.z,T[q+j+11]=X.itemSize===4?r.w:1)}}f={count:h,texture:C,size:new Be(L,A)},i.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function ng(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Pu extends Pt{constructor(e,t,i,r,s,a,o,l,c,d=Zi){if(d!==Zi&&d!==sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Zi&&(i=Ti),i===void 0&&d===sr&&(i=rr),super(null,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Tt,this.minFilter=l!==void 0?l:Tt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Lu=new Pt,cc=new Pu(1,1),Du=new Vs,Iu=new Bd,Uu=new Tu,uc=[],hc=[],dc=new Float32Array(16),fc=new Float32Array(9),pc=new Float32Array(4);function pr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=uc[r];if(s===void 0&&(s=new Float32Array(r),uc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Et(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function na(n,e){let t=hc[e];t===void 0&&(t=new Int32Array(e),hc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ig(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function rg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2fv(this.addr,e),Et(t,e)}}function sg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;n.uniform3fv(this.addr,e),Et(t,e)}}function ag(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4fv(this.addr,e),Et(t,e)}}function og(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(bt(t,i))return;pc.set(i),n.uniformMatrix2fv(this.addr,!1,pc),Et(t,i)}}function lg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(bt(t,i))return;fc.set(i),n.uniformMatrix3fv(this.addr,!1,fc),Et(t,i)}}function cg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(bt(t,i))return;dc.set(i),n.uniformMatrix4fv(this.addr,!1,dc),Et(t,i)}}function ug(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function hg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2iv(this.addr,e),Et(t,e)}}function dg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3iv(this.addr,e),Et(t,e)}}function fg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4iv(this.addr,e),Et(t,e)}}function pg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function mg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2uiv(this.addr,e),Et(t,e)}}function gg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3uiv(this.addr,e),Et(t,e)}}function vg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4uiv(this.addr,e),Et(t,e)}}function _g(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(cc.compareFunction=mu,s=cc):s=Lu,t.setTexture2D(e||s,r)}function xg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Iu,r)}function yg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Uu,r)}function Mg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Du,r)}function Sg(n){switch(n){case 5126:return ig;case 35664:return rg;case 35665:return sg;case 35666:return ag;case 35674:return og;case 35675:return lg;case 35676:return cg;case 5124:case 35670:return ug;case 35667:case 35671:return hg;case 35668:case 35672:return dg;case 35669:case 35673:return fg;case 5125:return pg;case 36294:return mg;case 36295:return gg;case 36296:return vg;case 35678:case 36198:case 36298:case 36306:case 35682:return _g;case 35679:case 36299:case 36307:return xg;case 35680:case 36300:case 36308:case 36293:return yg;case 36289:case 36303:case 36311:case 36292:return Mg}}function bg(n,e){n.uniform1fv(this.addr,e)}function Eg(n,e){const t=pr(e,this.size,2);n.uniform2fv(this.addr,t)}function wg(n,e){const t=pr(e,this.size,3);n.uniform3fv(this.addr,t)}function Tg(n,e){const t=pr(e,this.size,4);n.uniform4fv(this.addr,t)}function Ag(n,e){const t=pr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Rg(n,e){const t=pr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Cg(n,e){const t=pr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Pg(n,e){n.uniform1iv(this.addr,e)}function Lg(n,e){n.uniform2iv(this.addr,e)}function Dg(n,e){n.uniform3iv(this.addr,e)}function Ig(n,e){n.uniform4iv(this.addr,e)}function Ug(n,e){n.uniform1uiv(this.addr,e)}function Fg(n,e){n.uniform2uiv(this.addr,e)}function Ng(n,e){n.uniform3uiv(this.addr,e)}function Og(n,e){n.uniform4uiv(this.addr,e)}function Bg(n,e,t){const i=this.cache,r=e.length,s=na(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Lu,s[a])}function kg(n,e,t){const i=this.cache,r=e.length,s=na(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Iu,s[a])}function zg(n,e,t){const i=this.cache,r=e.length,s=na(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Uu,s[a])}function Gg(n,e,t){const i=this.cache,r=e.length,s=na(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Du,s[a])}function Hg(n){switch(n){case 5126:return bg;case 35664:return Eg;case 35665:return wg;case 35666:return Tg;case 35674:return Ag;case 35675:return Rg;case 35676:return Cg;case 5124:case 35670:return Pg;case 35667:case 35671:return Lg;case 35668:case 35672:return Dg;case 35669:case 35673:return Ig;case 5125:return Ug;case 36294:return Fg;case 36295:return Ng;case 36296:return Og;case 35678:case 36198:case 36298:case 36306:case 35682:return Bg;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return zg;case 36289:case 36303:case 36311:case 36292:return Gg}}class Vg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Sg(t.type)}}class Wg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hg(t.type)}}class Xg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Wa=/(\w+)(\])?(\[|\.)?/g;function mc(n,e){n.seq.push(e),n.map[e.id]=e}function qg(n,e,t){const i=n.name,r=i.length;for(Wa.lastIndex=0;;){const s=Wa.exec(i),a=Wa.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){mc(t,c===void 0?new Vg(o,n,e):new Wg(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new Xg(o),mc(t,h)),t=h}}}class Os{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);qg(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function gc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const $g=37297;let Yg=0;function Kg(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const vc=new Fe;function jg(n){Ke._getMatrix(vc,Ke.workingColorSpace,n);const e=`mat3( ${vc.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(n)){case ea:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function _c(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Kg(n.getShaderSource(e),a)}else return r}function Zg(n,e){const t=jg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Jg(n,e){let t;switch(e){case ud:t="Linear";break;case hd:t="Reinhard";break;case dd:t="Cineon";break;case fd:t="ACESFilmic";break;case md:t="AgX";break;case gd:t="Neutral";break;case pd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const bs=new G;function Qg(){Ke.getLuminanceCoefficients(bs);const n=bs.x.toFixed(4),e=bs.y.toFixed(4),t=bs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function e0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function t0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function n0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ir(n){return n!==""}function xc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const i0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ho(n){return n.replace(i0,s0)}const r0=new Map;function s0(n,e){let t=Oe[e];if(t===void 0){const i=r0.get(e);if(i!==void 0)t=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ho(t)}const a0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mc(n){return n.replace(a0,o0)}function o0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Sc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function l0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===iu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Vh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===An&&(e="SHADOWMAP_TYPE_VSM"),e}function c0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case nr:case ir:e="ENVMAP_TYPE_CUBE";break;case Qs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function u0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ir:e="ENVMAP_MODE_REFRACTION";break}return e}function h0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ru:e="ENVMAP_BLENDING_MULTIPLY";break;case ld:e="ENVMAP_BLENDING_MIX";break;case cd:e="ENVMAP_BLENDING_ADD";break}return e}function d0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function f0(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=l0(t),c=c0(t),d=u0(t),h=h0(t),f=d0(t),m=e0(t),g=t0(s),v=r.createProgram();let p,u,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ir).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ir).join(`
`),u.length>0&&(u+=`
`)):(p=[Sc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),u=[Sc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Qn?Jg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Zg("linearToOutputTexel",t.outputColorSpace),Qg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ir).join(`
`)),a=Ho(a),a=xc(a,t),a=yc(a,t),o=Ho(o),o=xc(o,t),o=yc(o,t),a=Mc(a),o=Mc(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",t.glslVersion===Fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const E=S+p+a,x=S+u+o,L=gc(r,r.VERTEX_SHADER,E),A=gc(r,r.FRAGMENT_SHADER,x);r.attachShader(v,L),r.attachShader(v,A),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function T(R){if(n.debug.checkShaderErrors){const O=r.getProgramInfoLog(v).trim(),N=r.getShaderInfoLog(L).trim(),X=r.getShaderInfoLog(A).trim();let q=!0,W=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,L,A);else{const j=_c(r,L,"vertex"),H=_c(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+O+`
`+j+`
`+H)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(N===""||X==="")&&(W=!1);W&&(R.diagnostics={runnable:q,programLog:O,vertexShader:{log:N,prefix:p},fragmentShader:{log:X,prefix:u}})}r.deleteShader(L),r.deleteShader(A),C=new Os(r,v),b=n0(r,v)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(v,$g)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Yg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=A,this}let p0=0;class m0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new g0(e),t.set(e,i)),i}}class g0{constructor(e){this.id=p0++,this.code=e,this.usedTimes=0}}function v0(n,e,t,i,r,s,a){const o=new xu,l=new m0,c=new Set,d=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function p(b,y,R,O,N){const X=O.fog,q=N.geometry,W=b.isMeshStandardMaterial?O.environment:null,j=(b.isMeshStandardMaterial?t:e).get(b.envMap||W),H=j&&j.mapping===Qs?j.image.height:null,ie=g[b.type];b.precision!==null&&(m=r.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const ae=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ee=ae!==void 0?ae.length:0;let ze=0;q.morphAttributes.position!==void 0&&(ze=1),q.morphAttributes.normal!==void 0&&(ze=2),q.morphAttributes.color!==void 0&&(ze=3);let at,K,ne,ye;if(ie){const it=fn[ie];at=it.vertexShader,K=it.fragmentShader}else at=b.vertexShader,K=b.fragmentShader,l.update(b),ne=l.getVertexShaderID(b),ye=l.getFragmentShaderID(b);const le=n.getRenderTarget(),Ce=n.state.buffers.depth.getReversed(),De=N.isInstancedMesh===!0,Ge=N.isBatchedMesh===!0,mt=!!b.map,$e=!!b.matcap,vt=!!j,F=!!b.aoMap,Xt=!!b.lightMap,Ve=!!b.bumpMap,We=!!b.normalMap,Te=!!b.displacementMap,ut=!!b.emissiveMap,we=!!b.metalnessMap,w=!!b.roughnessMap,_=b.anisotropy>0,B=b.clearcoat>0,Z=b.dispersion>0,Q=b.iridescence>0,Y=b.sheen>0,Me=b.transmission>0,ce=_&&!!b.anisotropyMap,fe=B&&!!b.clearcoatMap,Ye=B&&!!b.clearcoatNormalMap,ee=B&&!!b.clearcoatRoughnessMap,pe=Q&&!!b.iridescenceMap,Re=Q&&!!b.iridescenceThicknessMap,Pe=Y&&!!b.sheenColorMap,me=Y&&!!b.sheenRoughnessMap,Xe=!!b.specularMap,Ne=!!b.specularColorMap,lt=!!b.specularIntensityMap,D=Me&&!!b.transmissionMap,oe=Me&&!!b.thicknessMap,V=!!b.gradientMap,J=!!b.alphaMap,de=b.alphaTest>0,ue=!!b.alphaHash,Ie=!!b.extensions;let gt=Qn;b.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(gt=n.toneMapping);const At={shaderID:ie,shaderType:b.type,shaderName:b.name,vertexShader:at,fragmentShader:K,defines:b.defines,customVertexShaderID:ne,customFragmentShaderID:ye,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:Ge,batchingColor:Ge&&N._colorsTexture!==null,instancing:De,instancingColor:De&&N.instanceColor!==null,instancingMorph:De&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:le===null?n.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:dr,alphaToCoverage:!!b.alphaToCoverage,map:mt,matcap:$e,envMap:vt,envMapMode:vt&&j.mapping,envMapCubeUVHeight:H,aoMap:F,lightMap:Xt,bumpMap:Ve,normalMap:We,displacementMap:f&&Te,emissiveMap:ut,normalMapObjectSpace:We&&b.normalMapType===Md,normalMapTangentSpace:We&&b.normalMapType===yd,metalnessMap:we,roughnessMap:w,anisotropy:_,anisotropyMap:ce,clearcoat:B,clearcoatMap:fe,clearcoatNormalMap:Ye,clearcoatRoughnessMap:ee,dispersion:Z,iridescence:Q,iridescenceMap:pe,iridescenceThicknessMap:Re,sheen:Y,sheenColorMap:Pe,sheenRoughnessMap:me,specularMap:Xe,specularColorMap:Ne,specularIntensityMap:lt,transmission:Me,transmissionMap:D,thicknessMap:oe,gradientMap:V,opaque:b.transparent===!1&&b.blending===ji&&b.alphaToCoverage===!1,alphaMap:J,alphaTest:de,alphaHash:ue,combine:b.combine,mapUv:mt&&v(b.map.channel),aoMapUv:F&&v(b.aoMap.channel),lightMapUv:Xt&&v(b.lightMap.channel),bumpMapUv:Ve&&v(b.bumpMap.channel),normalMapUv:We&&v(b.normalMap.channel),displacementMapUv:Te&&v(b.displacementMap.channel),emissiveMapUv:ut&&v(b.emissiveMap.channel),metalnessMapUv:we&&v(b.metalnessMap.channel),roughnessMapUv:w&&v(b.roughnessMap.channel),anisotropyMapUv:ce&&v(b.anisotropyMap.channel),clearcoatMapUv:fe&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:me&&v(b.sheenRoughnessMap.channel),specularMapUv:Xe&&v(b.specularMap.channel),specularColorMapUv:Ne&&v(b.specularColorMap.channel),specularIntensityMapUv:lt&&v(b.specularIntensityMap.channel),transmissionMapUv:D&&v(b.transmissionMap.channel),thicknessMapUv:oe&&v(b.thicknessMap.channel),alphaMapUv:J&&v(b.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(We||_),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!q.attributes.uv&&(mt||J),fog:!!X,useFog:b.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ce,skinning:N.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:ze,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:gt,decodeVideoTexture:mt&&b.map.isVideoTexture===!0&&Ke.getTransfer(b.map.colorSpace)===st,decodeVideoTextureEmissive:ut&&b.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(b.emissiveMap.colorSpace)===st,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Rn,flipSided:b.side===Ot,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ie&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&b.extensions.multiDraw===!0||Ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return At.vertexUv1s=c.has(1),At.vertexUv2s=c.has(2),At.vertexUv3s=c.has(3),c.clear(),At}function u(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const R in b.defines)y.push(R),y.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(S(y,b),E(y,b),y.push(n.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function S(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function E(b,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),b.push(o.mask)}function x(b){const y=g[b.type];let R;if(y){const O=fn[y];R=Qd.clone(O.uniforms)}else R=b.uniforms;return R}function L(b,y){let R;for(let O=0,N=d.length;O<N;O++){const X=d[O];if(X.cacheKey===y){R=X,++R.usedTimes;break}}return R===void 0&&(R=new f0(n,y,b,s),d.push(R)),R}function A(b){if(--b.usedTimes===0){const y=d.indexOf(b);d[y]=d[d.length-1],d.pop(),b.destroy()}}function T(b){l.remove(b)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:x,acquireProgram:L,releaseProgram:A,releaseShaderCache:T,programs:d,dispose:C}}function _0(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function x0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function bc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ec(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h,f,m,g,v,p){let u=n[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:v,group:p},n[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=h.renderOrder,u.z=v,u.group=p),e++,u}function o(h,f,m,g,v,p){const u=a(h,f,m,g,v,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):t.push(u)}function l(h,f,m,g,v,p){const u=a(h,f,m,g,v,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function c(h,f){t.length>1&&t.sort(h||x0),i.length>1&&i.sort(f||bc),r.length>1&&r.sort(f||bc)}function d(){for(let h=e,f=n.length;h<f;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:d,sort:c}}function y0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Ec,n.set(i,[a])):r>=s.length?(a=new Ec,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function M0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new qe};break;case"SpotLight":t={position:new G,direction:new G,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function S0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let b0=0;function E0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function w0(n){const e=new M0,t=S0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const r=new G,s=new xt,a=new xt;function o(c){let d=0,h=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let m=0,g=0,v=0,p=0,u=0,S=0,E=0,x=0,L=0,A=0,T=0;c.sort(E0);for(let b=0,y=c.length;b<y;b++){const R=c[b],O=R.color,N=R.intensity,X=R.distance,q=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=O.r*N,h+=O.g*N,f+=O.b*N;else if(R.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(R.sh.coefficients[W],N);T++}else if(R.isDirectionalLight){const W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const j=R.shadow,H=t.get(R);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,i.directionalShadow[m]=H,i.directionalShadowMap[m]=q,i.directionalShadowMatrix[m]=R.shadow.matrix,S++}i.directional[m]=W,m++}else if(R.isSpotLight){const W=e.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(O).multiplyScalar(N),W.distance=X,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,i.spot[v]=W;const j=R.shadow;if(R.map&&(i.spotLightMap[L]=R.map,L++,j.updateMatrices(R),R.castShadow&&A++),i.spotLightMatrix[v]=j.matrix,R.castShadow){const H=t.get(R);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,i.spotShadow[v]=H,i.spotShadowMap[v]=q,x++}v++}else if(R.isRectAreaLight){const W=e.get(R);W.color.copy(O).multiplyScalar(N),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),i.rectArea[p]=W,p++}else if(R.isPointLight){const W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){const j=R.shadow,H=t.get(R);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=R.shadow.matrix,E++}i.point[g]=W,g++}else if(R.isHemisphereLight){const W=e.get(R);W.skyColor.copy(R.color).multiplyScalar(N),W.groundColor.copy(R.groundColor).multiplyScalar(N),i.hemi[u]=W,u++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const C=i.hash;(C.directionalLength!==m||C.pointLength!==g||C.spotLength!==v||C.rectAreaLength!==p||C.hemiLength!==u||C.numDirectionalShadows!==S||C.numPointShadows!==E||C.numSpotShadows!==x||C.numSpotMaps!==L||C.numLightProbes!==T)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=p,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=x+L-A,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,C.directionalLength=m,C.pointLength=g,C.spotLength=v,C.rectAreaLength=p,C.hemiLength=u,C.numDirectionalShadows=S,C.numPointShadows=E,C.numSpotShadows=x,C.numSpotMaps=L,C.numLightProbes=T,i.version=b0++)}function l(c,d){let h=0,f=0,m=0,g=0,v=0;const p=d.matrixWorldInverse;for(let u=0,S=c.length;u<S;u++){const E=c[u];if(E.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(p),h++}else if(E.isSpotLight){const x=i.spot[m];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(p),m++}else if(E.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(p),a.identity(),s.copy(E.matrixWorld),s.premultiply(p),a.extractRotation(s),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(p),f++}else if(E.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(p),v++}}}return{setup:o,setupView:l,state:i}}function wc(n){const e=new w0(n),t=[],i=[];function r(d){c.camera=d,t.length=0,i.length=0}function s(d){t.push(d)}function a(d){i.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function T0(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new wc(n),e.set(r,[o])):s>=a.length?(o=new wc(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class A0 extends qr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=_d,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class R0 extends qr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const C0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P0=`uniform sampler2D shadow_pass;
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
}`;function L0(n,e,t){let i=new Au;const r=new Be,s=new Be,a=new pt,o=new A0({depthPacking:xd}),l=new R0,c={},d=t.maxTextureSize,h={[ii]:Ot,[Ot]:ii,[Rn]:Rn},f=new yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:C0,fragmentShader:P0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new On;g.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Nt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=iu;let u=this.type;this.render=function(A,T,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const b=n.getRenderTarget(),y=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Jn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const N=u!==An&&this.type===An,X=u===An&&this.type!==An;for(let q=0,W=A.length;q<W;q++){const j=A[q],H=j.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const ie=H.getFrameExtents();if(r.multiply(ie),s.copy(H.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/ie.x),r.x=s.x*ie.x,H.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/ie.y),r.y=s.y*ie.y,H.mapSize.y=s.y)),H.map===null||N===!0||X===!0){const Ee=this.type!==An?{minFilter:Tt,magFilter:Tt}:{};H.map!==null&&H.map.dispose(),H.map=new kt(r.x,r.y,Ee),H.map.texture.name=j.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const ae=H.getViewportCount();for(let Ee=0;Ee<ae;Ee++){const ze=H.getViewport(Ee);a.set(s.x*ze.x,s.y*ze.y,s.x*ze.z,s.y*ze.w),O.viewport(a),H.updateMatrices(j,Ee),i=H.getFrustum(),x(T,C,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===An&&S(H,C),H.needsUpdate=!1}u=this.type,p.needsUpdate=!1,n.setRenderTarget(b,y,R)};function S(A,T){const C=e.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new kt(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(T,null,C,f,v,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(T,null,C,m,v,null)}function E(A,T,C,b){let y=null;const R=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)y=R;else if(y=C.isPointLight===!0?l:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const O=y.uuid,N=T.uuid;let X=c[O];X===void 0&&(X={},c[O]=X);let q=X[N];q===void 0&&(q=y.clone(),X[N]=q,T.addEventListener("dispose",L)),y=q}if(y.visible=T.visible,y.wireframe=T.wireframe,b===An?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:h[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=n.properties.get(y);O.light=C}return y}function x(A,T,C,b,y){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===An)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const N=e.update(A),X=A.material;if(Array.isArray(X)){const q=N.groups;for(let W=0,j=q.length;W<j;W++){const H=q[W],ie=X[H.materialIndex];if(ie&&ie.visible){const ae=E(A,ie,b,y);A.onBeforeShadow(n,A,T,C,N,ae,H),n.renderBufferDirect(C,null,N,ae,A,H),A.onAfterShadow(n,A,T,C,N,ae,H)}}}else if(X.visible){const q=E(A,X,b,y);A.onBeforeShadow(n,A,T,C,N,q,null),n.renderBufferDirect(C,null,N,q,A,null),A.onAfterShadow(n,A,T,C,N,q,null)}}const O=A.children;for(let N=0,X=O.length;N<X;N++)x(O[N],T,C,b,y)}function L(A){A.target.removeEventListener("dispose",L);for(const C in c){const b=c[C],y=A.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const D0={[io]:ro,[so]:lo,[ao]:co,[tr]:oo,[ro]:io,[lo]:so,[co]:ao,[oo]:tr};function I0(n,e){function t(){let D=!1;const oe=new pt;let V=null;const J=new pt(0,0,0,0);return{setMask:function(de){V!==de&&!D&&(n.colorMask(de,de,de,de),V=de)},setLocked:function(de){D=de},setClear:function(de,ue,Ie,gt,At){At===!0&&(de*=gt,ue*=gt,Ie*=gt),oe.set(de,ue,Ie,gt),J.equals(oe)===!1&&(n.clearColor(de,ue,Ie,gt),J.copy(oe))},reset:function(){D=!1,V=null,J.set(-1,0,0,0)}}}function i(){let D=!1,oe=!1,V=null,J=null,de=null;return{setReversed:function(ue){if(oe!==ue){const Ie=e.get("EXT_clip_control");oe?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT);const gt=de;de=null,this.setClear(gt)}oe=ue},getReversed:function(){return oe},setTest:function(ue){ue?le(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(ue){V!==ue&&!D&&(n.depthMask(ue),V=ue)},setFunc:function(ue){if(oe&&(ue=D0[ue]),J!==ue){switch(ue){case io:n.depthFunc(n.NEVER);break;case ro:n.depthFunc(n.ALWAYS);break;case so:n.depthFunc(n.LESS);break;case tr:n.depthFunc(n.LEQUAL);break;case ao:n.depthFunc(n.EQUAL);break;case oo:n.depthFunc(n.GEQUAL);break;case lo:n.depthFunc(n.GREATER);break;case co:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=ue}},setLocked:function(ue){D=ue},setClear:function(ue){de!==ue&&(oe&&(ue=1-ue),n.clearDepth(ue),de=ue)},reset:function(){D=!1,V=null,J=null,de=null,oe=!1}}}function r(){let D=!1,oe=null,V=null,J=null,de=null,ue=null,Ie=null,gt=null,At=null;return{setTest:function(it){D||(it?le(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(it){oe!==it&&!D&&(n.stencilMask(it),oe=it)},setFunc:function(it,Qt,_n){(V!==it||J!==Qt||de!==_n)&&(n.stencilFunc(it,Qt,_n),V=it,J=Qt,de=_n)},setOp:function(it,Qt,_n){(ue!==it||Ie!==Qt||gt!==_n)&&(n.stencilOp(it,Qt,_n),ue=it,Ie=Qt,gt=_n)},setLocked:function(it){D=it},setClear:function(it){At!==it&&(n.clearStencil(it),At=it)},reset:function(){D=!1,oe=null,V=null,J=null,de=null,ue=null,Ie=null,gt=null,At=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let d={},h={},f=new WeakMap,m=[],g=null,v=!1,p=null,u=null,S=null,E=null,x=null,L=null,A=null,T=new qe(0,0,0),C=0,b=!1,y=null,R=null,O=null,N=null,X=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,j=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=j>=1):H.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=j>=2);let ie=null,ae={};const Ee=n.getParameter(n.SCISSOR_BOX),ze=n.getParameter(n.VIEWPORT),at=new pt().fromArray(Ee),K=new pt().fromArray(ze);function ne(D,oe,V,J){const de=new Uint8Array(4),ue=n.createTexture();n.bindTexture(D,ue),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ie=0;Ie<V;Ie++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(oe,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(oe+Ie,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return ue}const ye={};ye[n.TEXTURE_2D]=ne(n.TEXTURE_2D,n.TEXTURE_2D,1),ye[n.TEXTURE_CUBE_MAP]=ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[n.TEXTURE_2D_ARRAY]=ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ye[n.TEXTURE_3D]=ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),le(n.DEPTH_TEST),a.setFunc(tr),Ve(!1),We(Cl),le(n.CULL_FACE),F(Jn);function le(D){d[D]!==!0&&(n.enable(D),d[D]=!0)}function Ce(D){d[D]!==!1&&(n.disable(D),d[D]=!1)}function De(D,oe){return h[D]!==oe?(n.bindFramebuffer(D,oe),h[D]=oe,D===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=oe),D===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=oe),!0):!1}function Ge(D,oe){let V=m,J=!1;if(D){V=f.get(oe),V===void 0&&(V=[],f.set(oe,V));const de=D.textures;if(V.length!==de.length||V[0]!==n.COLOR_ATTACHMENT0){for(let ue=0,Ie=de.length;ue<Ie;ue++)V[ue]=n.COLOR_ATTACHMENT0+ue;V.length=de.length,J=!0}}else V[0]!==n.BACK&&(V[0]=n.BACK,J=!0);J&&n.drawBuffers(V)}function mt(D){return g!==D?(n.useProgram(D),g=D,!0):!1}const $e={[_i]:n.FUNC_ADD,[Xh]:n.FUNC_SUBTRACT,[qh]:n.FUNC_REVERSE_SUBTRACT};$e[$h]=n.MIN,$e[Yh]=n.MAX;const vt={[Kh]:n.ZERO,[jh]:n.ONE,[Zh]:n.SRC_COLOR,[to]:n.SRC_ALPHA,[id]:n.SRC_ALPHA_SATURATE,[td]:n.DST_COLOR,[Qh]:n.DST_ALPHA,[Jh]:n.ONE_MINUS_SRC_COLOR,[no]:n.ONE_MINUS_SRC_ALPHA,[nd]:n.ONE_MINUS_DST_COLOR,[ed]:n.ONE_MINUS_DST_ALPHA,[rd]:n.CONSTANT_COLOR,[sd]:n.ONE_MINUS_CONSTANT_COLOR,[ad]:n.CONSTANT_ALPHA,[od]:n.ONE_MINUS_CONSTANT_ALPHA};function F(D,oe,V,J,de,ue,Ie,gt,At,it){if(D===Jn){v===!0&&(Ce(n.BLEND),v=!1);return}if(v===!1&&(le(n.BLEND),v=!0),D!==Wh){if(D!==p||it!==b){if((u!==_i||x!==_i)&&(n.blendEquation(n.FUNC_ADD),u=_i,x=_i),it)switch(D){case ji:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pl:n.blendFunc(n.ONE,n.ONE);break;case Ll:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Dl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ji:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ll:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Dl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,E=null,L=null,A=null,T.set(0,0,0),C=0,p=D,b=it}return}de=de||oe,ue=ue||V,Ie=Ie||J,(oe!==u||de!==x)&&(n.blendEquationSeparate($e[oe],$e[de]),u=oe,x=de),(V!==S||J!==E||ue!==L||Ie!==A)&&(n.blendFuncSeparate(vt[V],vt[J],vt[ue],vt[Ie]),S=V,E=J,L=ue,A=Ie),(gt.equals(T)===!1||At!==C)&&(n.blendColor(gt.r,gt.g,gt.b,At),T.copy(gt),C=At),p=D,b=!1}function Xt(D,oe){D.side===Rn?Ce(n.CULL_FACE):le(n.CULL_FACE);let V=D.side===Ot;oe&&(V=!V),Ve(V),D.blending===ji&&D.transparent===!1?F(Jn):F(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const J=D.stencilWrite;o.setTest(J),J&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ut(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?le(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(D){y!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),y=D)}function We(D){D!==Gh?(le(n.CULL_FACE),D!==R&&(D===Cl?n.cullFace(n.BACK):D===Hh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),R=D}function Te(D){D!==O&&(W&&n.lineWidth(D),O=D)}function ut(D,oe,V){D?(le(n.POLYGON_OFFSET_FILL),(N!==oe||X!==V)&&(n.polygonOffset(oe,V),N=oe,X=V)):Ce(n.POLYGON_OFFSET_FILL)}function we(D){D?le(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function w(D){D===void 0&&(D=n.TEXTURE0+q-1),ie!==D&&(n.activeTexture(D),ie=D)}function _(D,oe,V){V===void 0&&(ie===null?V=n.TEXTURE0+q-1:V=ie);let J=ae[V];J===void 0&&(J={type:void 0,texture:void 0},ae[V]=J),(J.type!==D||J.texture!==oe)&&(ie!==V&&(n.activeTexture(V),ie=V),n.bindTexture(D,oe||ye[D]),J.type=D,J.texture=oe)}function B(){const D=ae[ie];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ye(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(D){at.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),at.copy(D))}function me(D){K.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),K.copy(D))}function Xe(D,oe){let V=c.get(oe);V===void 0&&(V=new WeakMap,c.set(oe,V));let J=V.get(D);J===void 0&&(J=n.getUniformBlockIndex(oe,D.name),V.set(D,J))}function Ne(D,oe){const J=c.get(oe).get(D);l.get(oe)!==J&&(n.uniformBlockBinding(oe,J,D.__bindingPointIndex),l.set(oe,J))}function lt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ie=null,ae={},h={},f=new WeakMap,m=[],g=null,v=!1,p=null,u=null,S=null,E=null,x=null,L=null,A=null,T=new qe(0,0,0),C=0,b=!1,y=null,R=null,O=null,N=null,X=null,at.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:le,disable:Ce,bindFramebuffer:De,drawBuffers:Ge,useProgram:mt,setBlending:F,setMaterial:Xt,setFlipSided:Ve,setCullFace:We,setLineWidth:Te,setPolygonOffset:ut,setScissorTest:we,activeTexture:w,bindTexture:_,unbindTexture:B,compressedTexImage2D:Z,compressedTexImage3D:Q,texImage2D:pe,texImage3D:Re,updateUBOMapping:Xe,uniformBlockBinding:Ne,texStorage2D:Ye,texStorage3D:ee,texSubImage2D:Y,texSubImage3D:Me,compressedTexSubImage2D:ce,compressedTexSubImage3D:fe,scissor:Pe,viewport:me,reset:lt}}function Tc(n,e,t,i){const r=U0(i);switch(t){case cu:return n*e;case hu:return n*e;case du:return n*e*2;case rl:return n*e/r.components*r.byteLength;case sl:return n*e/r.components*r.byteLength;case fu:return n*e*2/r.components*r.byteLength;case al:return n*e*2/r.components*r.byteLength;case uu:return n*e*3/r.components*r.byteLength;case Vt:return n*e*4/r.components*r.byteLength;case ol:return n*e*4/r.components*r.byteLength;case Ds:case Is:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Us:case Fs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case go:case _o:return Math.max(n,16)*Math.max(e,8)/4;case mo:case vo:return Math.max(n,8)*Math.max(e,8)/2;case xo:case yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Mo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case So:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Eo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case wo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case To:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ao:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ro:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Co:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Po:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Do:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Io:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Uo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Fo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ns:case No:case Oo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case pu:case Bo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ko:case zo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function U0(n){switch(n){case un:case au:return{byteLength:1,components:1};case Or:case ou:case si:return{byteLength:2,components:1};case nl:case il:return{byteLength:2,components:4};case Ti:case tl:case on:return{byteLength:4,components:1};case lu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function F0(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,d=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,_){return m?new OffscreenCanvas(w,_):Hs("canvas")}function v(w,_,B){let Z=1;const Q=we(w);if((Q.width>B||Q.height>B)&&(Z=B/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Y=Math.floor(Z*Q.width),Me=Math.floor(Z*Q.height);h===void 0&&(h=g(Y,Me));const ce=_?g(Y,Me):h;return ce.width=Y,ce.height=Me,ce.getContext("2d").drawImage(w,0,0,Y,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Y+"x"+Me+")."),ce}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),w;return w}function p(w){return w.generateMipmaps}function u(w){n.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(w,_,B,Z,Q=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Y=_;if(_===n.RED&&(B===n.FLOAT&&(Y=n.R32F),B===n.HALF_FLOAT&&(Y=n.R16F),B===n.UNSIGNED_BYTE&&(Y=n.R8)),_===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(Y=n.R8UI),B===n.UNSIGNED_SHORT&&(Y=n.R16UI),B===n.UNSIGNED_INT&&(Y=n.R32UI),B===n.BYTE&&(Y=n.R8I),B===n.SHORT&&(Y=n.R16I),B===n.INT&&(Y=n.R32I)),_===n.RG&&(B===n.FLOAT&&(Y=n.RG32F),B===n.HALF_FLOAT&&(Y=n.RG16F),B===n.UNSIGNED_BYTE&&(Y=n.RG8)),_===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(Y=n.RG8UI),B===n.UNSIGNED_SHORT&&(Y=n.RG16UI),B===n.UNSIGNED_INT&&(Y=n.RG32UI),B===n.BYTE&&(Y=n.RG8I),B===n.SHORT&&(Y=n.RG16I),B===n.INT&&(Y=n.RG32I)),_===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),B===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),B===n.UNSIGNED_INT&&(Y=n.RGB32UI),B===n.BYTE&&(Y=n.RGB8I),B===n.SHORT&&(Y=n.RGB16I),B===n.INT&&(Y=n.RGB32I)),_===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),B===n.UNSIGNED_INT&&(Y=n.RGBA32UI),B===n.BYTE&&(Y=n.RGBA8I),B===n.SHORT&&(Y=n.RGBA16I),B===n.INT&&(Y=n.RGBA32I)),_===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),_===n.RGBA){const Me=Q?ea:Ke.getTransfer(Z);B===n.FLOAT&&(Y=n.RGBA32F),B===n.HALF_FLOAT&&(Y=n.RGBA16F),B===n.UNSIGNED_BYTE&&(Y=Me===st?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function x(w,_){let B;return w?_===null||_===Ti||_===rr?B=n.DEPTH24_STENCIL8:_===on?B=n.DEPTH32F_STENCIL8:_===Or&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ti||_===rr?B=n.DEPTH_COMPONENT24:_===on?B=n.DEPTH_COMPONENT32F:_===Or&&(B=n.DEPTH_COMPONENT16),B}function L(w,_){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==Tt&&w.minFilter!==St?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function A(w){const _=w.target;_.removeEventListener("dispose",A),C(_),_.isVideoTexture&&d.delete(_)}function T(w){const _=w.target;_.removeEventListener("dispose",T),y(_)}function C(w){const _=i.get(w);if(_.__webglInit===void 0)return;const B=w.source,Z=f.get(B);if(Z){const Q=Z[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(w),Object.keys(Z).length===0&&f.delete(B)}i.remove(w)}function b(w){const _=i.get(w);n.deleteTexture(_.__webglTexture);const B=w.source,Z=f.get(B);delete Z[_.__cacheKey],a.memory.textures--}function y(w){const _=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(_.__webglFramebuffer[Z]))for(let Q=0;Q<_.__webglFramebuffer[Z].length;Q++)n.deleteFramebuffer(_.__webglFramebuffer[Z][Q]);else n.deleteFramebuffer(_.__webglFramebuffer[Z]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[Z])}else{if(Array.isArray(_.__webglFramebuffer))for(let Z=0;Z<_.__webglFramebuffer.length;Z++)n.deleteFramebuffer(_.__webglFramebuffer[Z]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Z=0;Z<_.__webglColorRenderbuffer.length;Z++)_.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[Z]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const B=w.textures;for(let Z=0,Q=B.length;Z<Q;Z++){const Y=i.get(B[Z]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),a.memory.textures--),i.remove(B[Z])}i.remove(w)}let R=0;function O(){R=0}function N(){const w=R;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),R+=1,w}function X(w){const _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function q(w,_){const B=i.get(w);if(w.isVideoTexture&&Te(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){const Z=w.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(B,w,_);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+_)}function W(w,_){const B=i.get(w);if(w.version>0&&B.__version!==w.version){K(B,w,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+_)}function j(w,_){const B=i.get(w);if(w.version>0&&B.__version!==w.version){K(B,w,_);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+_)}function H(w,_){const B=i.get(w);if(w.version>0&&B.__version!==w.version){ne(B,w,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+_)}const ie={[fo]:n.REPEAT,[yi]:n.CLAMP_TO_EDGE,[po]:n.MIRRORED_REPEAT},ae={[Tt]:n.NEAREST,[vd]:n.NEAREST_MIPMAP_NEAREST,[is]:n.NEAREST_MIPMAP_LINEAR,[St]:n.LINEAR,[ma]:n.LINEAR_MIPMAP_NEAREST,[Mi]:n.LINEAR_MIPMAP_LINEAR},Ee={[Sd]:n.NEVER,[Rd]:n.ALWAYS,[bd]:n.LESS,[mu]:n.LEQUAL,[Ed]:n.EQUAL,[Ad]:n.GEQUAL,[wd]:n.GREATER,[Td]:n.NOTEQUAL};function ze(w,_){if(_.type===on&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===St||_.magFilter===ma||_.magFilter===is||_.magFilter===Mi||_.minFilter===St||_.minFilter===ma||_.minFilter===is||_.minFilter===Mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,ie[_.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,ie[_.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,ie[_.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,ae[_.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,ae[_.minFilter]),_.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Ee[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Tt||_.minFilter!==is&&_.minFilter!==Mi||_.type===on&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function at(w,_){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",A));const Z=_.source;let Q=f.get(Z);Q===void 0&&(Q={},f.set(Z,Q));const Y=X(_);if(Y!==w.__cacheKey){Q[Y]===void 0&&(Q[Y]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Q[Y].usedTimes++;const Me=Q[w.__cacheKey];Me!==void 0&&(Q[w.__cacheKey].usedTimes--,Me.usedTimes===0&&b(_)),w.__cacheKey=Y,w.__webglTexture=Q[Y].texture}return B}function K(w,_,B){let Z=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Z=n.TEXTURE_3D);const Q=at(w,_),Y=_.source;t.bindTexture(Z,w.__webglTexture,n.TEXTURE0+B);const Me=i.get(Y);if(Y.version!==Me.__version||Q===!0){t.activeTexture(n.TEXTURE0+B);const ce=Ke.getPrimaries(Ke.workingColorSpace),fe=_.colorSpace===$n?null:Ke.getPrimaries(_.colorSpace),Ye=_.colorSpace===$n||ce===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let ee=v(_.image,!1,r.maxTextureSize);ee=ut(_,ee);const pe=s.convert(_.format,_.colorSpace),Re=s.convert(_.type);let Pe=E(_.internalFormat,pe,Re,_.colorSpace,_.isVideoTexture);ze(Z,_);let me;const Xe=_.mipmaps,Ne=_.isVideoTexture!==!0,lt=Me.__version===void 0||Q===!0,D=Y.dataReady,oe=L(_,ee);if(_.isDepthTexture)Pe=x(_.format===sr,_.type),lt&&(Ne?t.texStorage2D(n.TEXTURE_2D,1,Pe,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,Pe,ee.width,ee.height,0,pe,Re,null));else if(_.isDataTexture)if(Xe.length>0){Ne&&lt&&t.texStorage2D(n.TEXTURE_2D,oe,Pe,Xe[0].width,Xe[0].height);for(let V=0,J=Xe.length;V<J;V++)me=Xe[V],Ne?D&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,me.width,me.height,pe,Re,me.data):t.texImage2D(n.TEXTURE_2D,V,Pe,me.width,me.height,0,pe,Re,me.data);_.generateMipmaps=!1}else Ne?(lt&&t.texStorage2D(n.TEXTURE_2D,oe,Pe,ee.width,ee.height),D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ee.width,ee.height,pe,Re,ee.data)):t.texImage2D(n.TEXTURE_2D,0,Pe,ee.width,ee.height,0,pe,Re,ee.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ne&&lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,Pe,Xe[0].width,Xe[0].height,ee.depth);for(let V=0,J=Xe.length;V<J;V++)if(me=Xe[V],_.format!==Vt)if(pe!==null)if(Ne){if(D)if(_.layerUpdates.size>0){const de=Tc(me.width,me.height,_.format,_.type);for(const ue of _.layerUpdates){const Ie=me.data.subarray(ue*de/me.data.BYTES_PER_ELEMENT,(ue+1)*de/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,ue,me.width,me.height,1,pe,Ie)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,me.width,me.height,ee.depth,pe,me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,V,Pe,me.width,me.height,ee.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,me.width,me.height,ee.depth,pe,Re,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,V,Pe,me.width,me.height,ee.depth,0,pe,Re,me.data)}else{Ne&&lt&&t.texStorage2D(n.TEXTURE_2D,oe,Pe,Xe[0].width,Xe[0].height);for(let V=0,J=Xe.length;V<J;V++)me=Xe[V],_.format!==Vt?pe!==null?Ne?D&&t.compressedTexSubImage2D(n.TEXTURE_2D,V,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(n.TEXTURE_2D,V,Pe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?D&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,me.width,me.height,pe,Re,me.data):t.texImage2D(n.TEXTURE_2D,V,Pe,me.width,me.height,0,pe,Re,me.data)}else if(_.isDataArrayTexture)if(Ne){if(lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,Pe,ee.width,ee.height,ee.depth),D)if(_.layerUpdates.size>0){const V=Tc(ee.width,ee.height,_.format,_.type);for(const J of _.layerUpdates){const de=ee.data.subarray(J*V/ee.data.BYTES_PER_ELEMENT,(J+1)*V/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,ee.width,ee.height,1,pe,Re,de)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,pe,Re,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,ee.width,ee.height,ee.depth,0,pe,Re,ee.data);else if(_.isData3DTexture)Ne?(lt&&t.texStorage3D(n.TEXTURE_3D,oe,Pe,ee.width,ee.height,ee.depth),D&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,pe,Re,ee.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,ee.width,ee.height,ee.depth,0,pe,Re,ee.data);else if(_.isFramebufferTexture){if(lt)if(Ne)t.texStorage2D(n.TEXTURE_2D,oe,Pe,ee.width,ee.height);else{let V=ee.width,J=ee.height;for(let de=0;de<oe;de++)t.texImage2D(n.TEXTURE_2D,de,Pe,V,J,0,pe,Re,null),V>>=1,J>>=1}}else if(Xe.length>0){if(Ne&&lt){const V=we(Xe[0]);t.texStorage2D(n.TEXTURE_2D,oe,Pe,V.width,V.height)}for(let V=0,J=Xe.length;V<J;V++)me=Xe[V],Ne?D&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,pe,Re,me):t.texImage2D(n.TEXTURE_2D,V,Pe,pe,Re,me);_.generateMipmaps=!1}else if(Ne){if(lt){const V=we(ee);t.texStorage2D(n.TEXTURE_2D,oe,Pe,V.width,V.height)}D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,Re,ee)}else t.texImage2D(n.TEXTURE_2D,0,Pe,pe,Re,ee);p(_)&&u(Z),Me.__version=Y.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function ne(w,_,B){if(_.image.length!==6)return;const Z=at(w,_),Q=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+B);const Y=i.get(Q);if(Q.version!==Y.__version||Z===!0){t.activeTexture(n.TEXTURE0+B);const Me=Ke.getPrimaries(Ke.workingColorSpace),ce=_.colorSpace===$n?null:Ke.getPrimaries(_.colorSpace),fe=_.colorSpace===$n||Me===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Ye=_.isCompressedTexture||_.image[0].isCompressedTexture,ee=_.image[0]&&_.image[0].isDataTexture,pe=[];for(let J=0;J<6;J++)!Ye&&!ee?pe[J]=v(_.image[J],!0,r.maxCubemapSize):pe[J]=ee?_.image[J].image:_.image[J],pe[J]=ut(_,pe[J]);const Re=pe[0],Pe=s.convert(_.format,_.colorSpace),me=s.convert(_.type),Xe=E(_.internalFormat,Pe,me,_.colorSpace),Ne=_.isVideoTexture!==!0,lt=Y.__version===void 0||Z===!0,D=Q.dataReady;let oe=L(_,Re);ze(n.TEXTURE_CUBE_MAP,_);let V;if(Ye){Ne&&lt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,oe,Xe,Re.width,Re.height);for(let J=0;J<6;J++){V=pe[J].mipmaps;for(let de=0;de<V.length;de++){const ue=V[de];_.format!==Vt?Pe!==null?Ne?D&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,0,0,ue.width,ue.height,Pe,ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,Xe,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,0,0,ue.width,ue.height,Pe,me,ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,Xe,ue.width,ue.height,0,Pe,me,ue.data)}}}else{if(V=_.mipmaps,Ne&&lt){V.length>0&&oe++;const J=we(pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,oe,Xe,J.width,J.height)}for(let J=0;J<6;J++)if(ee){Ne?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,pe[J].width,pe[J].height,Pe,me,pe[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Xe,pe[J].width,pe[J].height,0,Pe,me,pe[J].data);for(let de=0;de<V.length;de++){const Ie=V[de].image[J].image;Ne?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,0,0,Ie.width,Ie.height,Pe,me,Ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,Xe,Ie.width,Ie.height,0,Pe,me,Ie.data)}}else{Ne?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Pe,me,pe[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Xe,Pe,me,pe[J]);for(let de=0;de<V.length;de++){const ue=V[de];Ne?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,0,0,Pe,me,ue.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,Xe,Pe,me,ue.image[J])}}}p(_)&&u(n.TEXTURE_CUBE_MAP),Y.__version=Q.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function ye(w,_,B,Z,Q,Y){const Me=s.convert(B.format,B.colorSpace),ce=s.convert(B.type),fe=E(B.internalFormat,Me,ce,B.colorSpace),Ye=i.get(_),ee=i.get(B);if(ee.__renderTarget=_,!Ye.__hasExternalTextures){const pe=Math.max(1,_.width>>Y),Re=Math.max(1,_.height>>Y);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,Y,fe,pe,Re,_.depth,0,Me,ce,null):t.texImage2D(Q,Y,fe,pe,Re,0,Me,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),We(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,Q,ee.__webglTexture,0,Ve(_)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,Q,ee.__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(w,_,B){if(n.bindRenderbuffer(n.RENDERBUFFER,w),_.depthBuffer){const Z=_.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,Y=x(_.stencilBuffer,Q),Me=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=Ve(_);We(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,Y,_.width,_.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,Y,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Y,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,w)}else{const Z=_.textures;for(let Q=0;Q<Z.length;Q++){const Y=Z[Q],Me=s.convert(Y.format,Y.colorSpace),ce=s.convert(Y.type),fe=E(Y.internalFormat,Me,ce,Y.colorSpace),Ye=Ve(_);B&&We(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye,fe,_.width,_.height):We(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ye,fe,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,fe,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ce(w,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(_.depthTexture);Z.__renderTarget=_,(!Z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q(_.depthTexture,0);const Q=Z.__webglTexture,Y=Ve(_);if(_.depthTexture.format===Zi)We(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(_.depthTexture.format===sr)We(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function De(w){const _=i.get(w),B=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){const Z=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Z){const Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=Z}if(w.depthTexture&&!_.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ce(_.__webglFramebuffer,w)}else if(B){_.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[Z]),_.__webglDepthbuffer[Z]===void 0)_.__webglDepthbuffer[Z]=n.createRenderbuffer(),le(_.__webglDepthbuffer[Z],w,!1);else{const Q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),le(_.__webglDepthbuffer,w,!1);else{const Z=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,Q)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ge(w,_,B){const Z=i.get(w);_!==void 0&&ye(Z.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&De(w)}function mt(w){const _=w.texture,B=i.get(w),Z=i.get(_);w.addEventListener("dispose",T);const Q=w.textures,Y=w.isWebGLCubeRenderTarget===!0,Me=Q.length>1;if(Me||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=_.version,a.memory.textures++),Y){B.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[ce]=[];for(let fe=0;fe<_.mipmaps.length;fe++)B.__webglFramebuffer[ce][fe]=n.createFramebuffer()}else B.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let ce=0;ce<_.mipmaps.length;ce++)B.__webglFramebuffer[ce]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Me)for(let ce=0,fe=Q.length;ce<fe;ce++){const Ye=i.get(Q[ce]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&We(w)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ce=0;ce<Q.length;ce++){const fe=Q[ce];B.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[ce]);const Ye=s.convert(fe.format,fe.colorSpace),ee=s.convert(fe.type),pe=E(fe.internalFormat,Ye,ee,fe.colorSpace,w.isXRRenderTarget===!0),Re=Ve(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,pe,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,B.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),le(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),ze(n.TEXTURE_CUBE_MAP,_);for(let ce=0;ce<6;ce++)if(_.mipmaps&&_.mipmaps.length>0)for(let fe=0;fe<_.mipmaps.length;fe++)ye(B.__webglFramebuffer[ce][fe],w,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,fe);else ye(B.__webglFramebuffer[ce],w,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);p(_)&&u(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ce=0,fe=Q.length;ce<fe;ce++){const Ye=Q[ce],ee=i.get(Ye);t.bindTexture(n.TEXTURE_2D,ee.__webglTexture),ze(n.TEXTURE_2D,Ye),ye(B.__webglFramebuffer,w,Ye,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),p(Ye)&&u(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ce=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,Z.__webglTexture),ze(ce,_),_.mipmaps&&_.mipmaps.length>0)for(let fe=0;fe<_.mipmaps.length;fe++)ye(B.__webglFramebuffer[fe],w,_,n.COLOR_ATTACHMENT0,ce,fe);else ye(B.__webglFramebuffer,w,_,n.COLOR_ATTACHMENT0,ce,0);p(_)&&u(ce),t.unbindTexture()}w.depthBuffer&&De(w)}function $e(w){const _=w.textures;for(let B=0,Z=_.length;B<Z;B++){const Q=_[B];if(p(Q)){const Y=S(w),Me=i.get(Q).__webglTexture;t.bindTexture(Y,Me),u(Y),t.unbindTexture()}}}const vt=[],F=[];function Xt(w){if(w.samples>0){if(We(w)===!1){const _=w.textures,B=w.width,Z=w.height;let Q=n.COLOR_BUFFER_BIT;const Y=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(w),ce=_.length>1;if(ce)for(let fe=0;fe<_.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let fe=0;fe<_.length;fe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[fe]);const Ye=i.get(_[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ye,0)}n.blitFramebuffer(0,0,B,Z,0,0,B,Z,Q,n.NEAREST),l===!0&&(vt.length=0,F.length=0,vt.push(n.COLOR_ATTACHMENT0+fe),w.depthBuffer&&w.resolveDepthBuffer===!1&&(vt.push(Y),F.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,F)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,vt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let fe=0;fe<_.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,Me.__webglColorRenderbuffer[fe]);const Ye=i.get(_[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,Ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const _=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function Ve(w){return Math.min(r.maxSamples,w.samples)}function We(w){const _=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Te(w){const _=a.render.frame;d.get(w)!==_&&(d.set(w,_),w.update())}function ut(w,_){const B=w.colorSpace,Z=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==dr&&B!==$n&&(Ke.getTransfer(B)===st?(Z!==Vt||Q!==un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),_}function we(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=O,this.setTexture2D=q,this.setTexture2DArray=W,this.setTexture3D=j,this.setTextureCube=H,this.rebindTextures=Ge,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=We}function N0(n,e){function t(i,r=$n){let s;const a=Ke.getTransfer(r);if(i===un)return n.UNSIGNED_BYTE;if(i===nl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===il)return n.UNSIGNED_SHORT_5_5_5_1;if(i===lu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===au)return n.BYTE;if(i===ou)return n.SHORT;if(i===Or)return n.UNSIGNED_SHORT;if(i===tl)return n.INT;if(i===Ti)return n.UNSIGNED_INT;if(i===on)return n.FLOAT;if(i===si)return n.HALF_FLOAT;if(i===cu)return n.ALPHA;if(i===uu)return n.RGB;if(i===Vt)return n.RGBA;if(i===hu)return n.LUMINANCE;if(i===du)return n.LUMINANCE_ALPHA;if(i===Zi)return n.DEPTH_COMPONENT;if(i===sr)return n.DEPTH_STENCIL;if(i===rl)return n.RED;if(i===sl)return n.RED_INTEGER;if(i===fu)return n.RG;if(i===al)return n.RG_INTEGER;if(i===ol)return n.RGBA_INTEGER;if(i===Ds||i===Is||i===Us||i===Fs)if(a===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ds)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Is)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Us)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ds)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Is)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Us)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===mo||i===go||i===vo||i===_o)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===mo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===go)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_o)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xo||i===yo||i===Mo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===xo||i===yo)return a===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Mo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===So||i===bo||i===Eo||i===wo||i===To||i===Ao||i===Ro||i===Co||i===Po||i===Lo||i===Do||i===Io||i===Uo||i===Fo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===So)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Eo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===To)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ao)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ro)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Co)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Po)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Lo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Do)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Io)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Uo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ns||i===No||i===Oo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ns)return a===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===No)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Oo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===pu||i===Bo||i===ko||i===zo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ns)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Bo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ko)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===rr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class O0 extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Es extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const B0={type:"move"};class Xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),u=this._getHandJoint(c,v);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(B0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Es;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const k0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class G0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Pt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new yt({vertexShader:k0,fragmentShader:z0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Nt(new Bn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class H0 extends fr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,f=null,m=null,g=null;const v=new G0,p=t.getContextAttributes();let u=null,S=null;const E=[],x=[],L=new Be;let A=null;const T=new sn;T.viewport=new pt;const C=new sn;C.viewport=new pt;const b=[T,C],y=new O0;let R=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ne=E[K];return ne===void 0&&(ne=new Xa,E[K]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(K){let ne=E[K];return ne===void 0&&(ne=new Xa,E[K]=ne),ne.getGripSpace()},this.getHand=function(K){let ne=E[K];return ne===void 0&&(ne=new Xa,E[K]=ne),ne.getHandSpace()};function N(K){const ne=x.indexOf(K.inputSource);if(ne===-1)return;const ye=E[ne];ye!==void 0&&(ye.update(K.inputSource,K.frame,c||a),ye.dispatchEvent({type:K.type,data:K.inputSource}))}function X(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",q);for(let K=0;K<E.length;K++){const ne=x[K];ne!==null&&(x[K]=null,E[K].disconnect(ne))}R=null,O=null,v.reset(),e.setRenderTarget(u),m=null,f=null,h=null,r=null,S=null,at.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",X),r.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0){const ne={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new kt(m.framebufferWidth,m.framebufferHeight,{format:Vt,type:un,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ne=null,ye=null,le=null;p.depth&&(le=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=p.stencil?sr:Zi,ye=p.stencil?rr:Ti);const Ce={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(Ce),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new kt(f.textureWidth,f.textureHeight,{format:Vt,type:un,depthTexture:new Pu(f.textureWidth,f.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),at.setContext(r),at.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function q(K){for(let ne=0;ne<K.removed.length;ne++){const ye=K.removed[ne],le=x.indexOf(ye);le>=0&&(x[le]=null,E[le].disconnect(ye))}for(let ne=0;ne<K.added.length;ne++){const ye=K.added[ne];let le=x.indexOf(ye);if(le===-1){for(let De=0;De<E.length;De++)if(De>=x.length){x.push(ye),le=De;break}else if(x[De]===null){x[De]=ye,le=De;break}if(le===-1)break}const Ce=E[le];Ce&&Ce.connect(ye)}}const W=new G,j=new G;function H(K,ne,ye){W.setFromMatrixPosition(ne.matrixWorld),j.setFromMatrixPosition(ye.matrixWorld);const le=W.distanceTo(j),Ce=ne.projectionMatrix.elements,De=ye.projectionMatrix.elements,Ge=Ce[14]/(Ce[10]-1),mt=Ce[14]/(Ce[10]+1),$e=(Ce[9]+1)/Ce[5],vt=(Ce[9]-1)/Ce[5],F=(Ce[8]-1)/Ce[0],Xt=(De[8]+1)/De[0],Ve=Ge*F,We=Ge*Xt,Te=le/(-F+Xt),ut=Te*-F;if(ne.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ut),K.translateZ(Te),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ce[10]===-1)K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const we=Ge+Te,w=mt+Te,_=Ve-ut,B=We+(le-ut),Z=$e*mt/w*we,Q=vt*mt/w*we;K.projectionMatrix.makePerspective(_,B,Z,Q,we,w),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ie(K,ne){ne===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ne.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ne=K.near,ye=K.far;v.texture!==null&&(v.depthNear>0&&(ne=v.depthNear),v.depthFar>0&&(ye=v.depthFar)),y.near=C.near=T.near=ne,y.far=C.far=T.far=ye,(R!==y.near||O!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,O=y.far),T.layers.mask=K.layers.mask|2,C.layers.mask=K.layers.mask|4,y.layers.mask=T.layers.mask|C.layers.mask;const le=K.parent,Ce=y.cameras;ie(y,le);for(let De=0;De<Ce.length;De++)ie(Ce[De],le);Ce.length===2?H(y,T,C):y.projectionMatrix.copy(T.projectionMatrix),ae(K,y,le)};function ae(K,ne,ye){ye===null?K.matrix.copy(ne.matrixWorld):(K.matrix.copy(ye.matrixWorld),K.matrix.invert(),K.matrix.multiply(ne.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Go*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let Ee=null;function ze(K,ne){if(d=ne.getViewerPose(c||a),g=ne,d!==null){const ye=d.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let le=!1;ye.length!==y.cameras.length&&(y.cameras.length=0,le=!0);for(let De=0;De<ye.length;De++){const Ge=ye[De];let mt=null;if(m!==null)mt=m.getViewport(Ge);else{const vt=h.getViewSubImage(f,Ge);mt=vt.viewport,De===0&&(e.setRenderTargetTextures(S,vt.colorTexture,f.ignoreDepthValues?void 0:vt.depthStencilTexture),e.setRenderTarget(S))}let $e=b[De];$e===void 0&&($e=new sn,$e.layers.enable(De),$e.viewport=new pt,b[De]=$e),$e.matrix.fromArray(Ge.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(Ge.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(mt.x,mt.y,mt.width,mt.height),De===0&&(y.matrix.copy($e.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),le===!0&&y.cameras.push($e)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const De=h.getDepthInformation(ye[0]);De&&De.isValid&&De.texture&&v.init(e,De,r.renderState)}}for(let ye=0;ye<E.length;ye++){const le=x[ye],Ce=E[ye];le!==null&&Ce!==void 0&&Ce.update(le,ne,c||a)}Ee&&Ee(K,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const at=new Ru;at.setAnimationLoop(ze),this.setAnimationLoop=function(K){Ee=K},this.dispose=function(){}}}const di=new Fn,V0=new xt;function W0(n,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Eu(n)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,S,E,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),h(p,u)):u.isMeshPhongMaterial?(s(p,u),d(p,u)):u.isMeshStandardMaterial?(s(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,x)):u.isMeshMatcapMaterial?(s(p,u),g(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),v(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,S,E):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Ot&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Ot&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const S=e.get(u),E=S.envMap,x=S.envMapRotation;E&&(p.envMap.value=E,di.copy(x),di.x*=-1,di.y*=-1,di.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),p.envMapRotation.value.setFromMatrix4(V0.makeRotationFromEuler(di)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,S,E){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*S,p.scale.value=E*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,S){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ot&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function v(p,u){const S=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function X0(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){const x=E.program;i.uniformBlockBinding(S,x)}function c(S,E){let x=r[S.id];x===void 0&&(g(S),x=d(S),r[S.id]=x,S.addEventListener("dispose",p));const L=E.program;i.updateUBOMapping(S,L);const A=e.render.frame;s[S.id]!==A&&(f(S),s[S.id]=A)}function d(S){const E=h();S.__bindingPointIndex=E;const x=n.createBuffer(),L=S.__size,A=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,L,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,x),x}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const E=r[S.id],x=S.uniforms,L=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let A=0,T=x.length;A<T;A++){const C=Array.isArray(x[A])?x[A]:[x[A]];for(let b=0,y=C.length;b<y;b++){const R=C[b];if(m(R,A,b,L)===!0){const O=R.__offset,N=Array.isArray(R.value)?R.value:[R.value];let X=0;for(let q=0;q<N.length;q++){const W=N[q],j=v(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,O+X,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,X),X+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(S,E,x,L){const A=S.value,T=E+"_"+x;if(L[T]===void 0)return typeof A=="number"||typeof A=="boolean"?L[T]=A:L[T]=A.clone(),!0;{const C=L[T];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return L[T]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(S){const E=S.uniforms;let x=0;const L=16;for(let T=0,C=E.length;T<C;T++){const b=Array.isArray(E[T])?E[T]:[E[T]];for(let y=0,R=b.length;y<R;y++){const O=b[y],N=Array.isArray(O.value)?O.value:[O.value];for(let X=0,q=N.length;X<q;X++){const W=N[X],j=v(W),H=x%L,ie=H%j.boundary,ae=H+ie;x+=ie,ae!==0&&L-ae<j.storage&&(x+=L-ae),O.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=j.storage}}}const A=x%L;return A>0&&(x+=L-A),S.__size=x,S.__cache={},this}function v(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),E}function p(S){const E=S.target;E.removeEventListener("dispose",p);const x=a.indexOf(E.__bindingPointIndex);a.splice(x,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function u(){for(const S in r)n.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class q0{constructor(e={}){const{canvas:t=Pd(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),v=new Int32Array(4);let p=null,u=null;const S=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jt,this.toneMapping=Qn,this.toneMappingExposure=1;const x=this;let L=!1,A=0,T=0,C=null,b=-1,y=null;const R=new pt,O=new pt;let N=null;const X=new qe(0);let q=0,W=t.width,j=t.height,H=1,ie=null,ae=null;const Ee=new pt(0,0,W,j),ze=new pt(0,0,W,j);let at=!1;const K=new Au;let ne=!1,ye=!1;const le=new xt,Ce=new xt,De=new G,Ge=new pt,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function vt(){return C===null?H:1}let F=i;function Xt(M,I){return t.getContext(M,I)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${el}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",ue,!1),F===null){const I="webgl2";if(F=Xt(I,M),F===null)throw Xt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ve,We,Te,ut,we,w,_,B,Z,Q,Y,Me,ce,fe,Ye,ee,pe,Re,Pe,me,Xe,Ne,lt,D;function oe(){Ve=new Zm(F),Ve.init(),Ne=new N0(F,Ve),We=new Xm(F,Ve,e,Ne),Te=new I0(F,Ve),We.reverseDepthBuffer&&f&&Te.buffers.depth.setReversed(!0),ut=new eg(F),we=new _0,w=new F0(F,Ve,Te,we,We,Ne,ut),_=new $m(x),B=new jm(x),Z=new of(F),lt=new Vm(F,Z),Q=new Jm(F,Z,ut,lt),Y=new ng(F,Q,Z,ut),Pe=new tg(F,We,w),ee=new qm(we),Me=new v0(x,_,B,Ve,We,lt,ee),ce=new W0(x,we),fe=new y0,Ye=new T0(Ve),Re=new Hm(x,_,B,Te,Y,m,l),pe=new L0(x,Y,We),D=new X0(F,ut,We,Te),me=new Wm(F,Ve,ut),Xe=new Qm(F,Ve,ut),ut.programs=Me.programs,x.capabilities=We,x.extensions=Ve,x.properties=we,x.renderLists=fe,x.shadowMap=pe,x.state=Te,x.info=ut}oe();const V=new H0(x,F);this.xr=V,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const M=Ve.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ve.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(M){M!==void 0&&(H=M,this.setSize(W,j,!1))},this.getSize=function(M){return M.set(W,j)},this.setSize=function(M,I,k=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=M,j=I,t.width=Math.floor(M*H),t.height=Math.floor(I*H),k===!0&&(t.style.width=M+"px",t.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(W*H,j*H).floor()},this.setDrawingBufferSize=function(M,I,k){W=M,j=I,H=k,t.width=Math.floor(M*k),t.height=Math.floor(I*k),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(R)},this.getViewport=function(M){return M.copy(Ee)},this.setViewport=function(M,I,k,z){M.isVector4?Ee.set(M.x,M.y,M.z,M.w):Ee.set(M,I,k,z),Te.viewport(R.copy(Ee).multiplyScalar(H).round())},this.getScissor=function(M){return M.copy(ze)},this.setScissor=function(M,I,k,z){M.isVector4?ze.set(M.x,M.y,M.z,M.w):ze.set(M,I,k,z),Te.scissor(O.copy(ze).multiplyScalar(H).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(M){Te.setScissorTest(at=M)},this.setOpaqueSort=function(M){ie=M},this.setTransparentSort=function(M){ae=M},this.getClearColor=function(M){return M.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(M=!0,I=!0,k=!0){let z=0;if(M){let U=!1;if(C!==null){const te=C.texture.format;U=te===ol||te===al||te===sl}if(U){const te=C.texture.type,he=te===un||te===Ti||te===Or||te===rr||te===nl||te===il,ve=Re.getClearColor(),_e=Re.getClearAlpha(),Le=ve.r,Ue=ve.g,xe=ve.b;he?(g[0]=Le,g[1]=Ue,g[2]=xe,g[3]=_e,F.clearBufferuiv(F.COLOR,0,g)):(v[0]=Le,v[1]=Ue,v[2]=xe,v[3]=_e,F.clearBufferiv(F.COLOR,0,v))}else z|=F.COLOR_BUFFER_BIT}I&&(z|=F.DEPTH_BUFFER_BIT),k&&(z|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),fe.dispose(),Ye.dispose(),we.dispose(),_.dispose(),B.dispose(),Y.dispose(),lt.dispose(),D.dispose(),Me.dispose(),V.dispose(),V.removeEventListener("sessionstart",Ml),V.removeEventListener("sessionend",Sl),ai.stop()};function J(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const M=ut.autoReset,I=pe.enabled,k=pe.autoUpdate,z=pe.needsUpdate,U=pe.type;oe(),ut.autoReset=M,pe.enabled=I,pe.autoUpdate=k,pe.needsUpdate=z,pe.type=U}function ue(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ie(M){const I=M.target;I.removeEventListener("dispose",Ie),gt(I)}function gt(M){At(M),we.remove(M)}function At(M){const I=we.get(M).programs;I!==void 0&&(I.forEach(function(k){Me.releaseProgram(k)}),M.isShaderMaterial&&Me.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,k,z,U,te){I===null&&(I=mt);const he=U.isMesh&&U.matrixWorld.determinant()<0,ve=Nh(M,I,k,z,U);Te.setMaterial(z,he);let _e=k.index,Le=1;if(z.wireframe===!0){if(_e=Q.getWireframeAttribute(k),_e===void 0)return;Le=2}const Ue=k.drawRange,xe=k.attributes.position;let je=Ue.start*Le,ct=(Ue.start+Ue.count)*Le;te!==null&&(je=Math.max(je,te.start*Le),ct=Math.min(ct,(te.start+te.count)*Le)),_e!==null?(je=Math.max(je,0),ct=Math.min(ct,_e.count)):xe!=null&&(je=Math.max(je,0),ct=Math.min(ct,xe.count));const ht=ct-je;if(ht<0||ht===1/0)return;lt.setup(U,z,ve,k,_e);let It,et=me;if(_e!==null&&(It=Z.get(_e),et=Xe,et.setIndex(It)),U.isMesh)z.wireframe===!0?(Te.setLineWidth(z.wireframeLinewidth*vt()),et.setMode(F.LINES)):et.setMode(F.TRIANGLES);else if(U.isLine){let Se=z.linewidth;Se===void 0&&(Se=1),Te.setLineWidth(Se*vt()),U.isLineSegments?et.setMode(F.LINES):U.isLineLoop?et.setMode(F.LINE_LOOP):et.setMode(F.LINE_STRIP)}else U.isPoints?et.setMode(F.POINTS):U.isSprite&&et.setMode(F.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)et.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))et.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Se=U._multiDrawStarts,xn=U._multiDrawCounts,tt=U._multiDrawCount,en=_e?Z.get(_e).bytesPerElement:1,Ri=we.get(z).currentProgram.getUniforms();for(let zt=0;zt<tt;zt++)Ri.setValue(F,"_gl_DrawID",zt),et.render(Se[zt]/en,xn[zt])}else if(U.isInstancedMesh)et.renderInstances(je,ht,U.count);else if(k.isInstancedBufferGeometry){const Se=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,xn=Math.min(k.instanceCount,Se);et.renderInstances(je,ht,xn)}else et.render(je,ht)};function it(M,I,k){M.transparent===!0&&M.side===Rn&&M.forceSinglePass===!1?(M.side=Ot,M.needsUpdate=!0,ns(M,I,k),M.side=ii,M.needsUpdate=!0,ns(M,I,k),M.side=Rn):ns(M,I,k)}this.compile=function(M,I,k=null){k===null&&(k=M),u=Ye.get(k),u.init(I),E.push(u),k.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),M!==k&&M.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),u.setupLights();const z=new Set;return M.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const te=U.material;if(te)if(Array.isArray(te))for(let he=0;he<te.length;he++){const ve=te[he];it(ve,k,U),z.add(ve)}else it(te,k,U),z.add(te)}),E.pop(),u=null,z},this.compileAsync=function(M,I,k=null){const z=this.compile(M,I,k);return new Promise(U=>{function te(){if(z.forEach(function(he){we.get(he).currentProgram.isReady()&&z.delete(he)}),z.size===0){U(M);return}setTimeout(te,10)}Ve.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let Qt=null;function _n(M){Qt&&Qt(M)}function Ml(){ai.stop()}function Sl(){ai.start()}const ai=new Ru;ai.setAnimationLoop(_n),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(M){Qt=M,V.setAnimationLoop(M),M===null?ai.stop():ai.start()},V.addEventListener("sessionstart",Ml),V.addEventListener("sessionend",Sl),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(I),I=V.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,I,C),u=Ye.get(M,E.length),u.init(I),E.push(u),Ce.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),K.setFromProjectionMatrix(Ce),ye=this.localClippingEnabled,ne=ee.init(this.clippingPlanes,ye),p=fe.get(M,S.length),p.init(),S.push(p),V.enabled===!0&&V.isPresenting===!0){const te=x.xr.getDepthSensingMesh();te!==null&&pa(te,I,-1/0,x.sortObjects)}pa(M,I,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(ie,ae),$e=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,$e&&Re.addToRenderList(p,M),this.info.render.frame++,ne===!0&&ee.beginShadows();const k=u.state.shadowsArray;pe.render(k,M,I),ne===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=p.opaque,U=p.transmissive;if(u.setupLights(),I.isArrayCamera){const te=I.cameras;if(U.length>0)for(let he=0,ve=te.length;he<ve;he++){const _e=te[he];El(z,U,M,_e)}$e&&Re.render(M);for(let he=0,ve=te.length;he<ve;he++){const _e=te[he];bl(p,M,_e,_e.viewport)}}else U.length>0&&El(z,U,M,I),$e&&Re.render(M),bl(p,M,I);C!==null&&(w.updateMultisampleRenderTarget(C),w.updateRenderTargetMipmap(C)),M.isScene===!0&&M.onAfterRender(x,M,I),lt.resetDefaultState(),b=-1,y=null,E.pop(),E.length>0?(u=E[E.length-1],ne===!0&&ee.setGlobalState(x.clippingPlanes,u.state.camera)):u=null,S.pop(),S.length>0?p=S[S.length-1]:p=null};function pa(M,I,k,z){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)k=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)u.pushLight(M),M.castShadow&&u.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||K.intersectsSprite(M)){z&&Ge.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ce);const he=Y.update(M),ve=M.material;ve.visible&&p.push(M,he,ve,k,Ge.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||K.intersectsObject(M))){const he=Y.update(M),ve=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ge.copy(M.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Ge.copy(he.boundingSphere.center)),Ge.applyMatrix4(M.matrixWorld).applyMatrix4(Ce)),Array.isArray(ve)){const _e=he.groups;for(let Le=0,Ue=_e.length;Le<Ue;Le++){const xe=_e[Le],je=ve[xe.materialIndex];je&&je.visible&&p.push(M,he,je,k,Ge.z,xe)}}else ve.visible&&p.push(M,he,ve,k,Ge.z,null)}}const te=M.children;for(let he=0,ve=te.length;he<ve;he++)pa(te[he],I,k,z)}function bl(M,I,k,z){const U=M.opaque,te=M.transmissive,he=M.transparent;u.setupLightsView(k),ne===!0&&ee.setGlobalState(x.clippingPlanes,k),z&&Te.viewport(R.copy(z)),U.length>0&&ts(U,I,k),te.length>0&&ts(te,I,k),he.length>0&&ts(he,I,k),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function El(M,I,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[z.id]===void 0&&(u.state.transmissionRenderTarget[z.id]=new kt(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?si:un,minFilter:Mi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const te=u.state.transmissionRenderTarget[z.id],he=z.viewport||R;te.setSize(he.z,he.w);const ve=x.getRenderTarget();x.setRenderTarget(te),x.getClearColor(X),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),$e&&Re.render(k);const _e=x.toneMapping;x.toneMapping=Qn;const Le=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),u.setupLightsView(z),ne===!0&&ee.setGlobalState(x.clippingPlanes,z),ts(M,k,z),w.updateMultisampleRenderTarget(te),w.updateRenderTargetMipmap(te),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let xe=0,je=I.length;xe<je;xe++){const ct=I[xe],ht=ct.object,It=ct.geometry,et=ct.material,Se=ct.group;if(et.side===Rn&&ht.layers.test(z.layers)){const xn=et.side;et.side=Ot,et.needsUpdate=!0,wl(ht,k,z,It,et,Se),et.side=xn,et.needsUpdate=!0,Ue=!0}}Ue===!0&&(w.updateMultisampleRenderTarget(te),w.updateRenderTargetMipmap(te))}x.setRenderTarget(ve),x.setClearColor(X,q),Le!==void 0&&(z.viewport=Le),x.toneMapping=_e}function ts(M,I,k){const z=I.isScene===!0?I.overrideMaterial:null;for(let U=0,te=M.length;U<te;U++){const he=M[U],ve=he.object,_e=he.geometry,Le=z===null?he.material:z,Ue=he.group;ve.layers.test(k.layers)&&wl(ve,I,k,_e,Le,Ue)}}function wl(M,I,k,z,U,te){M.onBeforeRender(x,I,k,z,U,te),M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.onBeforeRender(x,I,k,z,M,te),U.transparent===!0&&U.side===Rn&&U.forceSinglePass===!1?(U.side=Ot,U.needsUpdate=!0,x.renderBufferDirect(k,I,z,U,M,te),U.side=ii,U.needsUpdate=!0,x.renderBufferDirect(k,I,z,U,M,te),U.side=Rn):x.renderBufferDirect(k,I,z,U,M,te),M.onAfterRender(x,I,k,z,U,te)}function ns(M,I,k){I.isScene!==!0&&(I=mt);const z=we.get(M),U=u.state.lights,te=u.state.shadowsArray,he=U.state.version,ve=Me.getParameters(M,U.state,te,I,k),_e=Me.getProgramCacheKey(ve);let Le=z.programs;z.environment=M.isMeshStandardMaterial?I.environment:null,z.fog=I.fog,z.envMap=(M.isMeshStandardMaterial?B:_).get(M.envMap||z.environment),z.envMapRotation=z.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,Le===void 0&&(M.addEventListener("dispose",Ie),Le=new Map,z.programs=Le);let Ue=Le.get(_e);if(Ue!==void 0){if(z.currentProgram===Ue&&z.lightsStateVersion===he)return Al(M,ve),Ue}else ve.uniforms=Me.getUniforms(M),M.onBeforeCompile(ve,x),Ue=Me.acquireProgram(ve,_e),Le.set(_e,Ue),z.uniforms=ve.uniforms;const xe=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(xe.clippingPlanes=ee.uniform),Al(M,ve),z.needsLights=Bh(M),z.lightsStateVersion=he,z.needsLights&&(xe.ambientLightColor.value=U.state.ambient,xe.lightProbe.value=U.state.probe,xe.directionalLights.value=U.state.directional,xe.directionalLightShadows.value=U.state.directionalShadow,xe.spotLights.value=U.state.spot,xe.spotLightShadows.value=U.state.spotShadow,xe.rectAreaLights.value=U.state.rectArea,xe.ltc_1.value=U.state.rectAreaLTC1,xe.ltc_2.value=U.state.rectAreaLTC2,xe.pointLights.value=U.state.point,xe.pointLightShadows.value=U.state.pointShadow,xe.hemisphereLights.value=U.state.hemi,xe.directionalShadowMap.value=U.state.directionalShadowMap,xe.directionalShadowMatrix.value=U.state.directionalShadowMatrix,xe.spotShadowMap.value=U.state.spotShadowMap,xe.spotLightMatrix.value=U.state.spotLightMatrix,xe.spotLightMap.value=U.state.spotLightMap,xe.pointShadowMap.value=U.state.pointShadowMap,xe.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Ue,z.uniformsList=null,Ue}function Tl(M){if(M.uniformsList===null){const I=M.currentProgram.getUniforms();M.uniformsList=Os.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function Al(M,I){const k=we.get(M);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.batchingColor=I.batchingColor,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.instancingMorph=I.instancingMorph,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function Nh(M,I,k,z,U){I.isScene!==!0&&(I=mt),w.resetTextureUnits();const te=I.fog,he=z.isMeshStandardMaterial?I.environment:null,ve=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:dr,_e=(z.isMeshStandardMaterial?B:_).get(z.envMap||he),Le=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ue=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),xe=!!k.morphAttributes.position,je=!!k.morphAttributes.normal,ct=!!k.morphAttributes.color;let ht=Qn;z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ht=x.toneMapping);const It=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,et=It!==void 0?It.length:0,Se=we.get(z),xn=u.state.lights;if(ne===!0&&(ye===!0||M!==y)){const qt=M===y&&z.id===b;ee.setState(z,M,qt)}let tt=!1;z.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==xn.state.version||Se.outputColorSpace!==ve||U.isBatchedMesh&&Se.batching===!1||!U.isBatchedMesh&&Se.batching===!0||U.isBatchedMesh&&Se.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Se.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Se.instancing===!1||!U.isInstancedMesh&&Se.instancing===!0||U.isSkinnedMesh&&Se.skinning===!1||!U.isSkinnedMesh&&Se.skinning===!0||U.isInstancedMesh&&Se.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Se.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Se.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Se.instancingMorph===!1&&U.morphTexture!==null||Se.envMap!==_e||z.fog===!0&&Se.fog!==te||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==ee.numPlanes||Se.numIntersection!==ee.numIntersection)||Se.vertexAlphas!==Le||Se.vertexTangents!==Ue||Se.morphTargets!==xe||Se.morphNormals!==je||Se.morphColors!==ct||Se.toneMapping!==ht||Se.morphTargetsCount!==et)&&(tt=!0):(tt=!0,Se.__version=z.version);let en=Se.currentProgram;tt===!0&&(en=ns(z,I,U));let Ri=!1,zt=!1,yr=!1;const dt=en.getUniforms(),dn=Se.uniforms;if(Te.useProgram(en.program)&&(Ri=!0,zt=!0,yr=!0),z.id!==b&&(b=z.id,zt=!0),Ri||y!==M){Te.buffers.depth.getReversed()?(le.copy(M.projectionMatrix),Dd(le),Id(le),dt.setValue(F,"projectionMatrix",le)):dt.setValue(F,"projectionMatrix",M.projectionMatrix),dt.setValue(F,"viewMatrix",M.matrixWorldInverse);const kn=dt.map.cameraPosition;kn!==void 0&&kn.setValue(F,De.setFromMatrixPosition(M.matrixWorld)),We.logarithmicDepthBuffer&&dt.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&dt.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,zt=!0,yr=!0)}if(U.isSkinnedMesh){dt.setOptional(F,U,"bindMatrix"),dt.setOptional(F,U,"bindMatrixInverse");const qt=U.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),dt.setValue(F,"boneTexture",qt.boneTexture,w))}U.isBatchedMesh&&(dt.setOptional(F,U,"batchingTexture"),dt.setValue(F,"batchingTexture",U._matricesTexture,w),dt.setOptional(F,U,"batchingIdTexture"),dt.setValue(F,"batchingIdTexture",U._indirectTexture,w),dt.setOptional(F,U,"batchingColorTexture"),U._colorsTexture!==null&&dt.setValue(F,"batchingColorTexture",U._colorsTexture,w));const Mr=k.morphAttributes;if((Mr.position!==void 0||Mr.normal!==void 0||Mr.color!==void 0)&&Pe.update(U,k,en),(zt||Se.receiveShadow!==U.receiveShadow)&&(Se.receiveShadow=U.receiveShadow,dt.setValue(F,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(dn.envMap.value=_e,dn.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&I.environment!==null&&(dn.envMapIntensity.value=I.environmentIntensity),zt&&(dt.setValue(F,"toneMappingExposure",x.toneMappingExposure),Se.needsLights&&Oh(dn,yr),te&&z.fog===!0&&ce.refreshFogUniforms(dn,te),ce.refreshMaterialUniforms(dn,z,H,j,u.state.transmissionRenderTarget[M.id]),Os.upload(F,Tl(Se),dn,w)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Os.upload(F,Tl(Se),dn,w),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&dt.setValue(F,"center",U.center),dt.setValue(F,"modelViewMatrix",U.modelViewMatrix),dt.setValue(F,"normalMatrix",U.normalMatrix),dt.setValue(F,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const qt=z.uniformsGroups;for(let kn=0,zn=qt.length;kn<zn;kn++){const Rl=qt[kn];D.update(Rl,en),D.bind(Rl,en)}}return en}function Oh(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function Bh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(M,I,k){we.get(M.texture).__webglTexture=I,we.get(M.depthTexture).__webglTexture=k;const z=we.get(M);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=k===void 0,z.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,I){const k=we.get(M);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,k=0){C=M,A=I,T=k;let z=!0,U=null,te=!1,he=!1;if(M){const _e=we.get(M);if(_e.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(F.FRAMEBUFFER,null),z=!1;else if(_e.__webglFramebuffer===void 0)w.setupRenderTarget(M);else if(_e.__hasExternalTextures)w.rebindTextures(M,we.get(M.texture).__webglTexture,we.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const xe=M.depthTexture;if(_e.__boundDepthTexture!==xe){if(xe!==null&&we.has(xe)&&(M.width!==xe.image.width||M.height!==xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(M)}}const Le=M.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(he=!0);const Ue=we.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ue[I])?U=Ue[I][k]:U=Ue[I],te=!0):M.samples>0&&w.useMultisampledRTT(M)===!1?U=we.get(M).__webglMultisampledFramebuffer:Array.isArray(Ue)?U=Ue[k]:U=Ue,R.copy(M.viewport),O.copy(M.scissor),N=M.scissorTest}else R.copy(Ee).multiplyScalar(H).floor(),O.copy(ze).multiplyScalar(H).floor(),N=at;if(Te.bindFramebuffer(F.FRAMEBUFFER,U)&&z&&Te.drawBuffers(M,U),Te.viewport(R),Te.scissor(O),Te.setScissorTest(N),te){const _e=we.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+I,_e.__webglTexture,k)}else if(he){const _e=we.get(M.texture),Le=I||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,_e.__webglTexture,k||0,Le)}b=-1},this.readRenderTargetPixels=function(M,I,k,z,U,te,he){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=we.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&he!==void 0&&(ve=ve[he]),ve){Te.bindFramebuffer(F.FRAMEBUFFER,ve);try{const _e=M.texture,Le=_e.format,Ue=_e.type;if(!We.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-z&&k>=0&&k<=M.height-U&&F.readPixels(I,k,z,U,Ne.convert(Le),Ne.convert(Ue),te)}finally{const _e=C!==null?we.get(C).__webglFramebuffer:null;Te.bindFramebuffer(F.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(M,I,k,z,U,te,he){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=we.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&he!==void 0&&(ve=ve[he]),ve){const _e=M.texture,Le=_e.format,Ue=_e.type;if(!We.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=M.width-z&&k>=0&&k<=M.height-U){Te.bindFramebuffer(F.FRAMEBUFFER,ve);const xe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,xe),F.bufferData(F.PIXEL_PACK_BUFFER,te.byteLength,F.STREAM_READ),F.readPixels(I,k,z,U,Ne.convert(Le),Ne.convert(Ue),0);const je=C!==null?we.get(C).__webglFramebuffer:null;Te.bindFramebuffer(F.FRAMEBUFFER,je);const ct=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Ld(F,ct,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,xe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,te),F.deleteBuffer(xe),F.deleteSync(ct),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,I=null,k=0){M.isTexture!==!0&&(Dr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,M=arguments[1]);const z=Math.pow(2,-k),U=Math.floor(M.image.width*z),te=Math.floor(M.image.height*z),he=I!==null?I.x:0,ve=I!==null?I.y:0;w.setTexture2D(M,0),F.copyTexSubImage2D(F.TEXTURE_2D,k,0,0,he,ve,U,te),Te.unbindTexture()},this.copyTextureToTexture=function(M,I,k=null,z=null,U=0){M.isTexture!==!0&&(Dr("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,M=arguments[1],I=arguments[2],U=arguments[3]||0,k=null);let te,he,ve,_e,Le,Ue,xe,je,ct;const ht=M.isCompressedTexture?M.mipmaps[U]:M.image;k!==null?(te=k.max.x-k.min.x,he=k.max.y-k.min.y,ve=k.isBox3?k.max.z-k.min.z:1,_e=k.min.x,Le=k.min.y,Ue=k.isBox3?k.min.z:0):(te=ht.width,he=ht.height,ve=ht.depth||1,_e=0,Le=0,Ue=0),z!==null?(xe=z.x,je=z.y,ct=z.z):(xe=0,je=0,ct=0);const It=Ne.convert(I.format),et=Ne.convert(I.type);let Se;I.isData3DTexture?(w.setTexture3D(I,0),Se=F.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(w.setTexture2DArray(I,0),Se=F.TEXTURE_2D_ARRAY):(w.setTexture2D(I,0),Se=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,I.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,I.unpackAlignment);const xn=F.getParameter(F.UNPACK_ROW_LENGTH),tt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),en=F.getParameter(F.UNPACK_SKIP_PIXELS),Ri=F.getParameter(F.UNPACK_SKIP_ROWS),zt=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ht.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ht.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,_e),F.pixelStorei(F.UNPACK_SKIP_ROWS,Le),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ue);const yr=M.isDataArrayTexture||M.isData3DTexture,dt=I.isDataArrayTexture||I.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){const dn=we.get(M),Mr=we.get(I),qt=we.get(dn.__renderTarget),kn=we.get(Mr.__renderTarget);Te.bindFramebuffer(F.READ_FRAMEBUFFER,qt.__webglFramebuffer),Te.bindFramebuffer(F.DRAW_FRAMEBUFFER,kn.__webglFramebuffer);for(let zn=0;zn<ve;zn++)yr&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,we.get(M).__webglTexture,U,Ue+zn),M.isDepthTexture?(dt&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,we.get(I).__webglTexture,U,ct+zn),F.blitFramebuffer(_e,Le,te,he,xe,je,te,he,F.DEPTH_BUFFER_BIT,F.NEAREST)):dt?F.copyTexSubImage3D(Se,U,xe,je,ct+zn,_e,Le,te,he):F.copyTexSubImage2D(Se,U,xe,je,ct+zn,_e,Le,te,he);Te.bindFramebuffer(F.READ_FRAMEBUFFER,null),Te.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else dt?M.isDataTexture||M.isData3DTexture?F.texSubImage3D(Se,U,xe,je,ct,te,he,ve,It,et,ht.data):I.isCompressedArrayTexture?F.compressedTexSubImage3D(Se,U,xe,je,ct,te,he,ve,It,ht.data):F.texSubImage3D(Se,U,xe,je,ct,te,he,ve,It,et,ht):M.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,U,xe,je,te,he,It,et,ht.data):M.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,U,xe,je,ht.width,ht.height,It,ht.data):F.texSubImage2D(F.TEXTURE_2D,U,xe,je,te,he,It,et,ht);F.pixelStorei(F.UNPACK_ROW_LENGTH,xn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,tt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,en),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ri),F.pixelStorei(F.UNPACK_SKIP_IMAGES,zt),U===0&&I.generateMipmaps&&F.generateMipmap(Se),Te.unbindTexture()},this.copyTextureToTexture3D=function(M,I,k=null,z=null,U=0){return M.isTexture!==!0&&(Dr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,z=arguments[1]||null,M=arguments[2],I=arguments[3],U=arguments[4]||0),Dr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,I,k,z,U)},this.initRenderTarget=function(M){we.get(M).__webglFramebuffer===void 0&&w.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?w.setTextureCube(M,0):M.isData3DTexture?w.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?w.setTexture2DArray(M,0):w.setTexture2D(M,0),Te.unbindTexture()},this.resetState=function(){A=0,T=0,C=null,Te.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}class Yr extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class $0 extends Pt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Tt,d=Tt,h,f){super(null,a,o,l,c,d,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Y0 extends qr{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ac=new xt,Vo=new _u,ws=new ta,Ts=new G;class K0 extends Bt{constructor(e=new On,t=new Y0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ws.copy(i.boundingSphere),ws.applyMatrix4(r),ws.radius+=s,e.ray.intersectsSphere(ws)===!1)return;Ac.copy(r).invert(),Vo.copy(e.ray).applyMatrix4(Ac);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=f,v=m;g<v;g++){const p=c.getX(g);Ts.fromBufferAttribute(h,p),Rc(Ts,p,l,r,e,t,this)}}else{const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=f,v=m;g<v;g++)Ts.fromBufferAttribute(h,g),Rc(Ts,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Rc(n,e,t,i,r,s,a){const o=Vo.distanceSqToPoint(n);if(o<t){const l=new G;Vo.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Fu extends Pt{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class j0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Cc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Cc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Cc(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:el}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=el);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class gn{constructor(e,t,i,r,s="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),gn.nextNameID=gn.nextNameID||0,this.$name.id=`lil-gui-name-${++gn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Z0 extends gn{constructor(e,t,i){super(e,t,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Wo(n){let e,t;return(e=n.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const J0={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:Wo,toHexString:Wo},Br={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},Q0={isPrimitive:!1,match:n=>Array.isArray(n),fromHexString(n,e,t=1){const i=Br.fromHexString(n);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([n,e,t],i=1){i=255/i;const r=n*i<<16^e*i<<8^t*i<<0;return Br.toHexString(r)}},ev={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,e,t=1){const i=Br.fromHexString(n);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r:n,g:e,b:t},i=1){i=255/i;const r=n*i<<16^e*i<<8^t*i<<0;return Br.toHexString(r)}},tv=[J0,Br,Q0,ev];function nv(n){return tv.find(e=>e.match(n))}class iv extends gn{constructor(e,t,i,r){super(e,t,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=nv(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Wo(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class qa extends gn{constructor(e,t,i){super(e,t,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class rv extends gn{constructor(e,t,i,r,s,a){super(e,t,i,"number"),this._initInput(),this.min(r),this.max(s);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let S=parseFloat(this.$input.value);isNaN(S)||(this._stepExplicit&&(S=this._snap(S)),this.setValue(this._clamp(S)))},i=S=>{const E=parseFloat(this.$input.value);isNaN(E)||(this._snapClampSetValue(E+S),this.$input.value=this.getValue())},r=S=>{S.key==="Enter"&&this.$input.blur(),S.code==="ArrowUp"&&(S.preventDefault(),i(this._step*this._arrowKeyMultiplier(S))),S.code==="ArrowDown"&&(S.preventDefault(),i(this._step*this._arrowKeyMultiplier(S)*-1))},s=S=>{this._inputFocused&&(S.preventDefault(),i(this._step*this._normalizeMouseWheel(S)))};let a=!1,o,l,c,d,h;const f=5,m=S=>{o=S.clientX,l=c=S.clientY,a=!0,d=this.getValue(),h=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",v)},g=S=>{if(a){const E=S.clientX-o,x=S.clientY-l;Math.abs(x)>f?(S.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(E)>f&&v()}if(!a){const E=S.clientY-c;h-=E*this._step*this._arrowKeyMultiplier(S),d+h>this._max?h=this._max-d:d+h<this._min&&(h=this._min-d),this._snapClampSetValue(d+h)}c=S.clientY},v=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",v)},p=()=>{this._inputFocused=!0},u=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",r),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",m),this.$input.addEventListener("focus",p),this.$input.addEventListener("blur",u)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(u,S,E,x,L)=>(u-S)/(E-S)*(L-x)+x,t=u=>{const S=this.$slider.getBoundingClientRect();let E=e(u,S.left,S.right,this._min,this._max);this._snapClampSetValue(E)},i=u=>{this._setDraggingStyle(!0),t(u.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",s)},r=u=>{t(u.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",s)};let a=!1,o,l;const c=u=>{u.preventDefault(),this._setDraggingStyle(!0),t(u.touches[0].clientX),a=!1},d=u=>{u.touches.length>1||(this._hasScrollBar?(o=u.touches[0].clientX,l=u.touches[0].clientY,a=!0):c(u),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",f))},h=u=>{if(a){const S=u.touches[0].clientX-o,E=u.touches[0].clientY-l;Math.abs(S)>Math.abs(E)?c(u):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",f))}else u.preventDefault(),t(u.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",f)},m=this._callOnFinishChange.bind(this),g=400;let v;const p=u=>{if(Math.abs(u.deltaX)<Math.abs(u.deltaY)&&this._hasScrollBar)return;u.preventDefault();const E=this._normalizeMouseWheel(u)*this._step;this._snapClampSetValue(this.getValue()+E),this.$input.value=this.getValue(),clearTimeout(v),v=setTimeout(m,g)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",d,{passive:!1}),this.$slider.addEventListener("wheel",p,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class sv extends gn{constructor(e,t,i,r){super(e,t,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const i=document.createElement("option");i.textContent=t,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class av extends gn{constructor(e,t,i){super(e,t,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var ov=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function lv(n){const e=document.createElement("style");e.innerHTML=n;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Pc=!1;class cl{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:r,title:s="Controls",closeFolders:a=!1,injectStyles:o=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!Pc&&o&&(lv(ov),Pc=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this._closeFolders=a}add(e,t,i,r,s){if(Object(i)===i)return new sv(this,e,t,i);const a=e[t];switch(typeof a){case"number":return new rv(this,e,t,i,r,s);case"boolean":return new Z0(this,e,t);case"string":return new av(this,e,t);case"function":return new qa(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,i=1){return new iv(this,e,t,i)}addFolder(e){const t=new cl({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof qa||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof qa)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const i=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const cv=8,uv=`
// --- simplex noise 3D (Ashima / Ian McEwan, MIT) ---
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

`,mr=`
#define MAXG ${cv}
uniform float uTime;
uniform highp sampler2DArray uFromArr;
uniform highp sampler2DArray uToArr;
uniform int uCount;
uniform vec2 uGPos[MAXG];
uniform float uGSize[MAXG];
uniform float uGMorph[MAXG];
uniform vec4 uGXform[MAXG];   // inverse linear map (rotate/skew/stretch), row-major
uniform float uBlend;         // smooth-union radius between letters (shared)
uniform float uShapeWarpScale;
uniform float uShapeWarpSpeed;
uniform float uGSoft[MAXG];   // per glyph: corner softening
uniform float uGGrow[MAXG];   // per glyph: weight, >0 fatter, <0 thinner (short-side units)
uniform float uGWarp[MAXG];   // per glyph: noise warp of the letterform
uniform float uGOut[MAXG];    // per glyph: outline thickness in short-side units (0 = solid fill)
uniform vec3 uGFill[MAXG];    // per glyph: fill colour
uniform vec3 uGStroke[MAXG];  // per glyph: outline colour
uniform float uGOp[MAXG];     // per glyph: opacity
uniform highp sampler2DArray uImgArr; // colour pixels of imported images, one layer per glyph (premultiplied)
uniform float uGImg[MAXG];    // per glyph: 1 = draw the image's own colours
uniform int uGOrder[MAXG];    // glyph indices from back to front
uniform float uReact;         // 0 = the layer being drawn ignores the glyphs (set per base layer; 1 everywhere else)
${uv}

float sampleGlyph(int i, vec2 c) {
  vec3 p = vec3(c, float(i));
  return mix(texture(uFromArr, p).r, texture(uToArr, p).r, uGMorph[i]);
}

// Where world point q lands in glyph i's own texture space (after warp, move, rotate, skew and stretch).
vec2 glyphUV(int i, vec2 q) {
  if (uGWarp[i] > 0.001) {
    vec3 wp = vec3(q * uShapeWarpScale + 3.7 + float(i) * 1.7, uTime * uShapeWarpSpeed);
    q += uGWarp[i] * 0.05 * vec2(snoise(wp), snoise(wp + vec3(7.1, 3.3, 0.0)));
  }
  vec4 m = uGXform[i];
  vec2 pp = (q - uGPos[i]) / uGSize[i];
  return vec2(m.x * pp.x + m.y * pp.y, m.z * pp.x + m.w * pp.y) + 0.5;
}

float glyphOne(int i, vec2 q) {
  float sz = uGSize[i];
  vec2 uv = glyphUV(i, q);
  vec2 c = clamp(uv, 0.0, 1.0);
  float d;
  if (uGSoft[i] > 0.001) {
    // averaging the distance field rounds corners and fills thin gaps
    float r = uGSoft[i] * 0.04;
    d = 0.4 * sampleGlyph(i, c)
      + 0.15 * (sampleGlyph(i, clamp(c + vec2(r, 0.0), 0.0, 1.0)) + sampleGlyph(i, clamp(c - vec2(r, 0.0), 0.0, 1.0))
              + sampleGlyph(i, clamp(c + vec2(0.0, r), 0.0, 1.0)) + sampleGlyph(i, clamp(c - vec2(0.0, r), 0.0, 1.0)));
  } else {
    d = sampleGlyph(i, c);
  }
  d += length(uv - c); // continue the field past the texture border
  return d * sz - uGGrow[i];
}

float smin(float a, float b, float k) {
  float h = max(k - abs(a - b), 0.0) / k;
  return min(a, b) - h * h * k * 0.25;
}

float glyphDist(vec2 q) {
  if (uReact < 0.5) return 4.0; // far from every letter: nothing bends around them
  float k = uBlend * 0.25;
  float best = 1e3;
  for (int i = 0; i < MAXG; i++) {
    if (i >= uCount) break;
    float d = glyphOne(i, q);
    best = k > 0.0001 ? smin(best, d, k) : min(best, d);
  }
  return best;
}

// What is drawn for the letters at this pixel: rgb = colour, a = coverage * opacity. Solid glyphs are filled with
// their own colour (where glyphs fuse, colours cross-fade by closeness), outlined glyphs keep a band of thickness
// uGOut just inside their edge in their outline colour. cover = coverage regardless of opacity.
// imgFrac = how much of the fill is an imported picture.
// (Distance queries elsewhere still use the whole letter shape.)
vec4 glyphPaint(vec2 q, out float cover, out float imgFrac) {
  float k = uBlend * 0.25;
  float best = 1e3;
  float ringCover = 0.0;
  vec3 rgbP = vec3(0.0); // premultiplied, composited back to front
  float aT = 0.0;
  float imgA = 0.0;
  for (int r = 0; r < MAXG; r++) {
    if (r >= uCount) break;
    int i = uGOrder[r];
    float d = glyphOne(i, q);
    float fd = max(fwidth(d), 1e-6);
    vec3 c;
    float a;
    float isImg = 0.0;
    if (uGOut[i] > 0.0) {
      float ring = smoothstep(-fd, fd, d + uGOut[i]) * (1.0 - smoothstep(-fd, fd, d));
      a = ring * uGOp[i];
      c = uGStroke[i];
      ringCover = max(ringCover, ring);
    } else {
      best = k > 0.0001 ? smin(best, d, k) : min(best, d);
      a = (1.0 - smoothstep(-fd, fd, d)) * uGOp[i];
      c = uGFill[i];
      if (uGImg[i] > 0.5) {
        // imported picture: its own colours (stored premultiplied, so edges do not pick up a dark fringe)
        vec4 t = texture(uImgArr, vec3(clamp(glyphUV(i, q), 0.0, 1.0), float(i)));
        c = t.rgb / max(t.a, 1e-3);
        isImg = 1.0;
      }
    }
    rgbP = rgbP * (1.0 - a) + c * a;
    imgA = imgA * (1.0 - a) + isImg * a;
    aT = aT + a * (1.0 - aT);
  }
  float fdF = max(fwidth(best), 1e-6);
  cover = max(1.0 - smoothstep(-fdF, fdF, best), ringCover);
  imgFrac = imgA / max(aT, 1e-5); // share of the paint that comes from pictures (drawn above the contour lines)
  return vec4(rgbP / max(aT, 1e-5), aT);
}
`,Jt=`
void main() {
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,hv=`
precision highp float;

uniform vec2 uRes;
${mr}
uniform int uMode;          // 0 offset lines, 1 mountain, 2 basin
uniform float uInfluence;   // how far the glyph reshapes the land
uniform float uSlope;       // glyph height gradient
uniform float uWobble;      // terrain amplitude kept at the glyph edge (0..1)
uniform float uRough;
uniform float uFreq;
uniform float uWarp;
uniform float uDrift;
uniform float uSeed;
uniform float uSpacing;
uniform float uLineW;
uniform float uTint;
uniform float uShade;
uniform float uGrain;
uniform sampler2D uMask;   // detail layer: white where contour lines are knocked out
uniform float uMaskOn;
uniform float uOutputH;    // 1 = write the raw height field (for CPU contour tracing)
uniform float uMarks;      // 1 = output only the marks (lines, bands, grout), with transparency elsewhere
float gMark = 1.0;         // coverage of the marks, written by each look
uniform int uLook;         // 0 topographic, 1 ridgeline, 2 op-art bands, 3 dungeon, 4 warped grid (5 = particle sea, drawn by its own passes)
uniform float uLookA;      // look-specific sliders (see lookDefs in main.ts)
uniform float uLookB;
uniform float uLookC;
uniform float uLookD;
uniform sampler2D uHeightTex; // height field, half resolution (ridgeline only)

uniform vec3 uPaper;
uniform vec3 uInk;
uniform vec3 uIndex;
uniform vec3 uLow;
uniform vec3 uMid;
uniform vec3 uHigh;

float fbm(vec3 p) {
  float a = 0.5;
  float s = 0.0;
  for (int i = 0; i < 5; i++) {
    s += a * snoise(p);
    p = p * 2.03 + vec3(17.1, 3.7, 0.0);
    a *= 0.5;
  }
  return s;
}

float terrain(vec2 q) {
  vec3 p = vec3(q * uFreq + uSeed * 13.7, uTime * uDrift);
  vec2 w = vec2(snoise(p + vec3(5.2, 1.3, 0.0)), snoise(p + vec3(1.7, 9.2, 0.0)));
  p.xy += w * uWarp;
  return fbm(p) * 0.5 + 0.5;
}

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

vec2 hash22(vec2 p) {
  return vec2(hash(p), hash(p + 19.19));
}

vec3 ramp(float t) {
  return t < 0.5 ? mix(uLow, uMid, t * 2.0) : mix(uMid, uHigh, t * 2.0 - 1.0);
}

float lineMask(float dist, float fw, float widthPx) {
  return clamp(widthPx * 0.5 - dist / max(fw, 1e-6) + 0.5, 0.0, 1.0);
}

// The landscape: terrain, reshaped around the letters. Also returns the distance to the letters.
float fieldAt(vec2 q, out float d) {
  d = glyphDist(q);
  float w = 1.0 - smoothstep(0.0, uInfluence, max(d, 0.0));
  float g = uMode == 0 ? abs(d) : (uMode == 1 ? -d : d);
  float amp = mix(1.0, uWobble, w);
  return terrain(q) * uRough * amp + g * uSlope * w;
}

float toneOf(float H) {
  return smoothstep(-0.15, uRough + 0.2, H);
}

// ---- look 0: topographic contour map
vec3 lookTopo(float d, float H) {
  float v = H / uSpacing;
  float fw = fwidth(v);
  float dist = abs(fract(v - 0.5) - 0.5);
  float band = floor(v + 0.5);
  float isIndex = step(mod(band, 5.0), 0.5);

  // hypsometric tint, banded per index interval
  float Hq = floor(v / 5.0) * 5.0 * uSpacing;
  vec3 col = mix(uPaper, ramp(toneOf(Hq)), uTint);

  // hillshade from screen-space slope
  vec2 grad = vec2(dFdx(H), dFdy(H)) * uRes.y * 0.8;
  vec3 n = normalize(vec3(-grad, 1.0));
  vec3 L = normalize(vec3(-0.5, 0.6, 0.7));
  col += (dot(n, L) - L.z) * uShade;

  // glyph fill (or outline)
  float cv;
  float imf;
  vec4 gp = glyphPaint((gl_FragCoord.xy - 0.5 * uRes) / min(uRes.x, uRes.y), cv, imf);
  col = mix(col, gp.rgb, gp.a * (1.0 - imf));

  // contours
  float minor = lineMask(dist, fw, uLineW);
  float major = lineMask(dist, fw, uLineW * 2.2);
  float knock = uMaskOn > 0.5 ? 1.0 - texture(uMask, gl_FragCoord.xy / uRes).r : 1.0;
  minor *= knock;
  major *= knock;
  col = mix(col, uInk, minor * (1.0 - isIndex) * 0.9);
  col = mix(col, uIndex, major * isIndex);
  gMark = max(minor * (1.0 - isIndex) * 0.9, major * isIndex);
  col = mix(col, gp.rgb, gp.a * imf); // pictures sit on top of the contour lines
  return col;
}

// ---- look 1: ridgeline. Horizontal lines pushed up by the terrain, front lines hide the ones behind.
vec3 lookRidge(vec2 fc) {
  const int K = 12;
  float rows = max(uLookA, 4.0);
  float S = uRes.y / rows;                       // row spacing in px
  float scale = uLookB * uRes.y * 0.35;           // px of lift per unit of height
  float k0 = floor(fc.y / S);
  vec3 ink = uIndex;
  vec3 col = uPaper;
  float cov = 0.0;
  for (int j = K; j >= -K; j--) {                // back (top) to front (bottom)
    float rk = (k0 + float(j) + 0.5) * S;
    vec2 hd = texture(uHeightTex, vec2(fc.x / uRes.x, rk / uRes.y)).rg; // height, distance to the letters
    float h = hd.x + uLookC * 0.25 * (1.0 - smoothstep(-0.015, 0.015, hd.y)); // letters rise as plateaus
    float yk = rk + clamp(h * scale, -float(K) * S, float(K) * S);
    if (fc.y < yk) { col = uPaper; cov = 0.0; }   // hide whatever is behind this line
    float sl = abs(dFdx(yk));
    float m = lineMask(abs(fc.y - yk) / sqrt(1.0 + sl * sl), 1.0, max(uLineW * 1.4, 1.0));
    col = mix(col, ink, m);
    cov = mix(cov, 1.0, m);
  }
  gMark = cov;
  return col;
}

// ---- look 2: op-art bands. The height field as bold alternating two-tone bands.
vec3 lookBands(float H) {
  float v = H / uSpacing;
  float tri = abs(fract(v * 0.5) - 0.5) * 2.0;    // triangle wave, one period per two bands
  float aa = max(fwidth(tri), 1e-4);
  float m = smoothstep(uLookA - aa, uLookA + aa, tri);
  vec3 light = mix(uPaper, ramp(toneOf(floor(v) * uSpacing)), uTint);
  gMark = m;
  return mix(light, uInk, m);
}

// ---- look 3: dungeon. Cracked flagstone wall in the dark, lit by torchlight from the letters: molten seams, grit, grain.
vec3 lookDungeon(vec2 q) {
  float dg;
  float H = fieldAt(q, dg);                                    // terrain, reshaped around the letters (dg = distance to them)
  float scale = max(uLookA, 2.0);
  float t = uTime;

  // flagstones: wobbled Voronoi cells, the gaps between them are the cracks
  vec2 wob = vec2(fbm(vec3(q * 2.6, uSeed)), fbm(vec3(q * 2.6 + 7.3, uSeed))) - 0.5;
  vec2 p = q * scale + wob * 1.3;
  vec2 ip = floor(p);
  vec2 fp = fract(p);
  float F1 = 8.0;
  float F2 = 8.0;
  vec2 cid = vec2(0.0);
  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 g = vec2(float(i), float(j));
      vec2 o = hash22(ip + g + uSeed * 13.0);
      vec2 r = g + o - fp;
      float dd = dot(r, r);
      if (dd < F1) { F2 = F1; F1 = dd; cid = ip + g; }
      else if (dd < F2) { F2 = dd; }
    }
  }
  float edge = sqrt(F2) - sqrt(F1);                            // 0 along the cracks
  float crack = 1.0 - smoothstep(0.015, 0.1 + 0.05 * hash(cid), edge);
  float dome = smoothstep(0.0, 0.4, edge);                     // every stone is slightly domed
  float tone = hash(cid + 3.1);

  // relief: domes, pitting and noise, plus the terrain so the letters push up out of the wall
  float pit = fbm(vec3(q * 70.0, uSeed + 2.0)) * 0.6 + snoise(vec3(q * 240.0, uSeed)) * 0.4;
  float hgt = dome * 0.6 + pit * (0.1 + 0.12 * uLookB) + H * uLookD * 0.7;
  vec2 gr = vec2(dFdx(hgt), dFdy(hgt)) * uRes.y * 0.35 * (0.4 + uLookD);
  vec3 n = normalize(vec3(-gr, 1.0));

  // torchlight: a flickering warm pool around the letters, plus a faint cold fill
  float flick = 0.8 + 0.2 * snoise(vec3(q * 2.5, t * 2.6)) + 0.06 * sin(t * 17.0 + q.x * 4.0);
  float torch = exp(-max(dg, 0.0) * 8.0) * uLookC * flick;
  vec3 L = normalize(vec3(-0.45 + 0.1 * sin(t * 1.3), 0.55, 0.6));
  float diff = max(dot(n, L), 0.0);
  vec3 glowCol = mix(vec3(1.0, 0.46, 0.12), uIndex, 0.2);

  // the stone itself: near-black, each block a different grey, palette bleeds in through tint
  vec3 stone = mix(vec3(0.08, 0.075, 0.072), vec3(0.3, 0.28, 0.26), tone);
  stone = mix(stone, stone * (0.5 + 1.5 * uMid), uTint * 0.55);
  stone *= 0.5 + 1.0 * fbm(vec3(q * 5.0, uSeed + 5.0));        // stains and damp patches
  vec3 col = stone * (vec3(0.2, 0.22, 0.27) + 1.1 * diff * (0.45 + torch * 1.6) + torch * 1.4 * glowCol); // cold fill, warm torch
  col *= 1.0 - crack * 0.85;                                   // the gaps swallow the light

  // molten seams: the cracks near the letters glow
  float lava = crack * pow(clamp(torch, 0.0, 2.0), 0.75) * (0.7 + 0.3 * snoise(vec3(p * 1.5, t * 1.5)));
  col += glowCol * lava * 2.2;

  // grit: animated film grain, mottling and dust specks
  float gh = hash(gl_FragCoord.xy + fract(t * 9.0) * 61.0);
  col *= 1.0 + (gh - 0.5) * uLookB * 0.8;
  float dust = step(0.9975, hash(gl_FragCoord.xy * 1.37 + 5.0)) * (0.15 + 0.6 * hash(gl_FragCoord.xy));
  col += vec3(0.8, 0.75, 0.7) * dust * uLookB * 0.35 * (0.3 + torch);
  gMark = clamp(crack * 0.95 + lava * 0.5 + dust * uLookB * 0.3, 0.0, 1.0);
  return max(col, 0.0);
}

// ---- look 4: warped grid. A layout grid bent like a lens around the letters (with a hint of terrain).
float lensField(vec2 q) {
  float d = glyphDist(q);
  float w = 1.0 - smoothstep(0.0, uInfluence, max(d, 0.0));
  float g = uMode == 0 ? abs(d) : (uMode == 1 ? -d : d);
  return g * w + 0.08 * terrain(q) * uRough;
}

vec3 lookGrid(vec2 q, float H) {
  float e = 0.02;
  float L0 = lensField(q);
  vec2 grad = vec2(lensField(q + vec2(e, 0.0)) - L0, lensField(q + vec2(0.0, e)) - L0) / e;
  vec2 disp = grad * uLookB * 0.012;
  disp *= min(1.0, 0.12 / max(length(disp), 1e-4));
  vec2 p = (q - disp) * uLookA;
  vec2 gp = abs(fract(p - 0.5) - 0.5);
  vec2 fw = fwidth(p);
  vec2 idx = floor(p + 0.5);
  vec2 isMajor = step(mod(idx, 5.0), vec2(0.5));
  float lx = lineMask(gp.x, fw.x, uLineW * (1.0 + isMajor.x));
  float ly = lineMask(gp.y, fw.y, uLineW * (1.0 + isMajor.y));
  vec3 col = mix(uPaper, ramp(toneOf(H)), uTint * 0.8);
  float m = max(lx, ly);
  float major = max(lx * isMajor.x, ly * isMajor.y);
  col = mix(col, uInk, m * 0.85);
  gMark = max(m * 0.85, major);
  return mix(col, uIndex, major);
}

void main() {
  vec2 q = (gl_FragCoord.xy - 0.5 * uRes) / min(uRes.x, uRes.y);

  float d;
  float H = fieldAt(q, d);
  if (uOutputH > 0.5) {
    gl_FragColor = vec4(H, d, 0.0, 1.0); // height + distance to the glyphs
    return;
  }

  vec3 col;
  if (uLook == 1) col = lookRidge(gl_FragCoord.xy);
  else if (uLook == 2) col = lookBands(H);
  else if (uLook == 3) col = lookDungeon(q);
  else if (uLook == 4) col = lookGrid(q, H);
  else col = lookTopo(d, H);

  if (uLook != 0 && uMarks < 0.5) {
    // the letters' fill sits on top of the other looks
    float cv;
    float imf;
    vec4 gp = glyphPaint(q, cv, imf);
    col = mix(col, gp.rgb, gp.a);
  }

  col += (hash(gl_FragCoord.xy) - 0.5) * uGrain;
  gl_FragColor = vec4(col, uMarks > 0.5 ? gMark : 1.0);
}
`,dv=`
precision highp float;

uniform vec2 uRes;
uniform sampler2D uScene;
uniform sampler2D uOverlay;
uniform float uOverlayOn;
uniform sampler2D uBlurTex; // background blurred without the glyph areas (premultiplied)
uniform float uBlur;
uniform float uGlass;
uniform float uGlassLight; // scales the additive light: sheen, rim and edge line
${mr}

vec3 sceneAt(vec2 uv) {
  vec3 c = texture(uScene, uv).rgb;
  if (uOverlayOn > 0.5) {
    vec4 o = texture(uOverlay, uv);
    c = mix(c, o.rgb, o.a);
  }
  return c;
}

float blurMix() {
  return smoothstep(0.0, 0.08, uBlur);
}

vec3 bgAt(vec2 uv) {
  vec3 s = sceneAt(uv);
  if (uBlur > 0.001) {
    vec4 b = texture(uBlurTex, uv);
    s = mix(s, b.rgb / max(b.a, 0.02), blurMix());
  }
  return s;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  vec3 sharp = sceneAt(uv);
  if (uGlass < 0.001 && uBlur < 0.001) {
    gl_FragColor = vec4(sharp, 1.0);
    return;
  }

  // glyph areas stay sharp: always with blur, fading in with the letter fill for the glass alone
  vec2 q = (gl_FragCoord.xy - 0.5 * uRes) / min(uRes.x, uRes.y);
  float cv;
  float imf;
  vec4 gp = glyphPaint(q, cv, imf);
  float excl = mix(clamp(gp.a * 4.0, 0.0, 1.0), cv, blurMix());

  vec3 col;
  if (uGlass < 0.001) {
    col = bgAt(uv);
  } else {
    float aspect = uRes.x / uRes.y;
    vec2 c = uv - 0.5;
    vec2 cp = c * vec2(aspect, 1.0);                       // isotropic coordinates
    float r = length(cp) / length(vec2(aspect, 1.0) * 0.5); // 0 centre .. 1 corners
    float r2 = r * r;

    // barrel distortion: corners sample slightly inwards, so no empty borders appear
    vec2 uvd = 0.5 + c * (1.0 - uGlass * 0.06 * r2);

    // chromatic aberration: spectral smear along the radial direction, strongest in the corners
    vec2 dir = normalize(cp + 1e-5) / vec2(aspect, 1.0);
    float off = uGlass * 0.016 * pow(r, 2.4);
    vec3 acc = vec3(0.0);
    vec3 wsum = vec3(0.0);
    for (int i = 0; i < 7; i++) {
      float t = float(i) / 6.0;
      vec3 w = vec3(smoothstep(0.3, 1.0, t), max(0.0, 1.0 - abs(t - 0.5) * 2.5), smoothstep(0.7, 0.0, t));
      acc += bgAt(uvd + dir * off * (t - 0.5) * 2.0) * w;
      wsum += w;
    }
    col = acc / wsum;

    // glass: soft diagonal sheen, brighter rim towards the corners, thin edge light, faint cool tint
    float diag = dot(c, normalize(vec2(0.7, 1.0)));
    float sheen = exp(-pow((diag - 0.12) * 5.5, 2.0)) * 0.09 + exp(-pow((diag + 0.24) * 14.0, 2.0)) * 0.045;
    float rim = smoothstep(0.55, 1.0, r);
    float edgePx = min(min(uv.x, 1.0 - uv.x) * uRes.x, min(uv.y, 1.0 - uv.y) * uRes.y);
    float edge = 1.0 - smoothstep(0.0, 2.5 * uRes.y / 800.0, edgePx);
    col *= mix(vec3(1.0), vec3(0.96, 0.99, 1.03), 0.5 * uGlass);
    col *= 1.0 - rim * 0.12 * uGlass;
    col += uGlass * uGlassLight * (sheen + rim * 0.06 + edge * 0.16);
  }

  gl_FragColor = vec4(mix(col, sharp, excl), 1.0);
}
`,fv=`
precision highp float;

uniform vec2 uRes;     // full-size buffer
uniform vec2 uOutRes;  // size of the target being rendered
uniform sampler2D uScene;
uniform sampler2D uOverlay;
uniform float uOverlayOn;
${mr}

vec3 sceneAt(vec2 uv) {
  vec3 c = texture(uScene, uv).rgb;
  if (uOverlayOn > 0.5) {
    vec4 o = texture(uOverlay, uv);
    c = mix(c, o.rgb, o.a);
  }
  return c;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uOutRes;
  vec2 px = 0.5 / uRes;
  vec3 c = 0.25 * (sceneAt(uv + px * vec2(-1.0, -1.0)) + sceneAt(uv + px * vec2(1.0, -1.0))
                 + sceneAt(uv + px * vec2(-1.0, 1.0)) + sceneAt(uv + px * vec2(1.0, 1.0)));
  float m = min(uRes.x, uRes.y);
  float d = glyphDist((uv - 0.5) * uRes / m);
  // 1 outside, 0 inside; the mask is grown a little so glyph edge pixels never leak into the blur
  float a = smoothstep(-2.0 / m, 2.0 / m, d - 3.0 / m);
  gl_FragColor = vec4(c * a, a);
}
`,pv=`
precision highp float;

uniform sampler2D uSrc;
uniform vec2 uSrcRes;
uniform vec2 uOutRes;

void main() {
  vec2 uv = gl_FragCoord.xy / uOutRes;
  vec2 px = 0.5 / uSrcRes;
  gl_FragColor = 0.25 * (texture(uSrc, uv + px * vec2(-1.0, -1.0)) + texture(uSrc, uv + px * vec2(1.0, -1.0))
                       + texture(uSrc, uv + px * vec2(-1.0, 1.0)) + texture(uSrc, uv + px * vec2(1.0, 1.0)));
}
`,mv=`
precision highp float;

uniform sampler2D uSrc;
uniform vec2 uOutRes;
uniform vec2 uDir;     // (1,0) or (0,1)
uniform float uSigma;  // in texels of this target

void main() {
  vec2 uv = gl_FragCoord.xy / uOutRes;
  float stride = max(1.0, uSigma / 4.0);
  vec4 acc = vec4(0.0);
  float wsum = 0.0;
  for (int i = -12; i <= 12; i++) {
    float x = float(i) * stride;
    float w = exp(-0.5 * x * x / max(uSigma * uSigma, 1e-4));
    acc += texture(uSrc, uv + uDir * x / uOutRes) * w;
    wsum += w;
  }
  gl_FragColor = acc / wsum;
}
`,gv=`
precision highp float;

uniform vec2 uRes;
uniform sampler2D uScene;
uniform sampler2D uOverlay;
uniform float uOverlayOn;

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  vec3 c = texture(uScene, uv).rgb;
  if (uOverlayOn > 0.5) {
    vec4 o = texture(uOverlay, uv);
    c = mix(c, o.rgb, o.a);
  }
  gl_FragColor = vec4(c, 1.0);
}
`,vv=`
precision highp float;
uniform float uSeed;
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}
void main() {
  vec2 ij = floor(gl_FragCoord.xy);
  gl_FragColor = vec4((hash(ij + uSeed) - 0.5) * 2.6, hash(ij + 17.3 + uSeed) - 0.5, 0.0, 0.0);
}
`,_v=`
precision highp float;

uniform sampler2D uState;
uniform vec2 uOutRes;
uniform float uDt;
uniform float uAspect;
uniform float uLookB;      // current speed
uniform float uLookC;      // letters: attract (<0) .. repel (>0)
uniform float uLookD;      // slide along the letter edges
uniform float uDrift;      // how fast the current itself evolves
uniform float uSeed;
uniform float uFreq;       // size of the swells
uniform float uWarp;       // turbulence
uniform float uInfluence;  // how far from the letters they are felt
${mr}

const float LIFE = 9.0;
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float psi(vec2 p, float t) {
  vec3 q = vec3(p * uFreq * 1.1 + uSeed * 3.1, t);
  return snoise(q) + 0.5 * snoise(vec3(q.xy * 2.1 + 7.3, q.z * 1.4));
}

// the sea's own current: steady drift + rolling swells + curl-noise eddies (divergence free)
vec2 current(vec2 p, float t) {
  float S = uLookB;
  vec2 v = vec2(0.22 * S, 0.0);
  v.y += 0.07 * S * sin(p.x * uFreq * 2.4 - t * 1.3 + uSeed);   // rolling swell (depends on x only, so it never squeezes particles)
  float e = 0.012 / max(uFreq, 0.2);
  float tt = t * uDrift * 3.0;
  vec2 g = vec2(psi(p + vec2(0.0, e), tt) - psi(p - vec2(0.0, e), tt),
               -(psi(p + vec2(e, 0.0), tt) - psi(p - vec2(e, 0.0), tt))) / (2.0 * e);
  v += g * S * 0.035 * (0.4 + uWarp);
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uOutRes;
  vec4 st = texture(uState, uv);
  vec2 p = st.xy;
  vec2 vel = st.zw;
  float t = uTime;

  float R = max(uInfluence, 0.06);
  float d = glyphDist(p);
  float e = 0.004;
  vec2 n = vec2(glyphDist(p + vec2(e, 0.0)) - d, glyphDist(p + vec2(0.0, e)) - d);
  n /= max(length(n), 1e-5);
  vec2 tang = vec2(-n.y, n.x);

  vec2 target = current(p, t);
  float k = 1.0 - smoothstep(0.0, R, max(d, 0.0));          // closeness to a letter
  float push = abs(uLookC);

  // letters are obstacles: remove the part of the current that runs into them, slide along the edge instead
  float into = min(dot(target, n), 0.0);
  target -= n * into * k * (0.35 + 0.65 * push);
  float sgn = dot(target, tang) >= 0.0 ? 1.0 : -1.0;
  target += tang * sgn * uLookD * k * length(target) * 1.2;

  // repel (or attract) in a soft shell around the edge; inside a letter, eject (or hold) firmly
  // (a thin hard edge keeps each letter a crisp shape; the wider range above only bends the current)
  float edge = 1.0 - smoothstep(0.0, 0.008 + 0.014 * push, max(d, 0.0));
  target += n * uLookC * (edge * edge * 0.5 + step(d, 0.0) * 0.6);
  target += n * min(uLookC, 0.0) * k * 0.3;                          // attract: a long-range pull towards the letters
  if (d < 0.0 && uLookC < 0.0) target = target * mix(1.0, 0.1, push);   // ...and dots settle once inside

  float follow = min(1.0, uDt * (2.5 + 5.0 * k));
  vel += (target - vel) * follow;
  p += vel * uDt;

  // the sea has no edges: wrap around
  float A = uAspect * 0.5 + 0.04;
  p.x = mod(p.x + A, 2.0 * A) - A;
  p.y = mod(p.y + 0.54, 1.08) - 0.54;

  // every particle lives LIFE seconds (at its own phase), then is reborn somewhere random: keeps the sea evenly filled
  vec2 ij = floor(gl_FragCoord.xy);
  float ph = t / LIFE + hash(ij + 91.0);
  if (uDt > 0.0 && floor(ph) != floor(ph - uDt / LIFE)) {
    float gen = floor(ph);
    p = vec2((hash(ij + gen * 13.1) - 0.5) * (uAspect + 0.08), hash(ij + gen * 7.7 + 3.0) - 0.5);
    vel = vec2(0.0);
  }
  gl_FragColor = vec4(p, vel);
}
`,xv=`
precision highp float;
uniform sampler2D uState;
uniform vec2 uRes;
uniform float uPx;
uniform float uTime;
uniform float uSide;
attribute vec2 ref;
varying float vB;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

void main() {
  vec4 st = texture(uState, ref);
  float aspect = uRes.x / uRes.y;
  gl_Position = vec4(st.x / (aspect * 0.5), st.y / 0.5, 0.0, 1.0);
  float h = hash(ref * 977.0);
  float speed = length(st.zw);
  float age = fract(uTime / 9.0 + hash(floor(ref * uSide) + 91.0)) * 9.0;     // same phase as the simulation
  float fade = smoothstep(0.0, 0.9, age) * (1.0 - smoothstep(8.1, 9.0, age));
  vB = (0.35 + 0.65 * h) * (0.7 + 0.3 * smoothstep(0.0, 0.2, speed)) * fade;
  gl_PointSize = max(1.0, uPx * (0.65 + 0.7 * hash(ref * 31.7 + 5.0)));
}
`,yv=`
precision highp float;
uniform vec3 uDotColor;
varying float vB;
void main() {
  float r = length(gl_PointCoord - 0.5) * 2.0;
  float a = 1.0 - smoothstep(0.55, 1.0, r);
  gl_FragColor = vec4(uDotColor, a * vB);
}
`,Mv=`
precision highp float;
uniform vec2 uRes;
uniform vec3 uPaper;
uniform float uPattern;     // 1 = draw the canvas background (colour + pattern), 0 = plain palette paper
uniform vec3 uBgColor;
uniform vec3 uBgLine;
uniform int uBgType;        // 0 solid, 1 grid, 2 horizontal, 3 vertical, 4 dots, 5 diagonal
uniform float uBgSpacing;   // share of the short side
uniform float uBgWeight;    // px
uniform float uBgStrength;
uniform float uGrain;
${mr}
float bgLine(float v, float period) {
  float d = abs(fract(v / period - 0.5) - 0.5) * period;
  return clamp(uBgWeight * 0.5 - d + 0.5, 0.0, 1.0);
}
void main() {
  vec2 q = (gl_FragCoord.xy - 0.5 * uRes) / min(uRes.x, uRes.y);
  vec3 base = uPattern > 0.5 ? uBgColor : uPaper;
  if (uPattern > 0.5 && uBgType > 0) {
    float period = max(uBgSpacing * min(uRes.x, uRes.y), 3.0);
    vec2 p = gl_FragCoord.xy;
    float m = 0.0;
    if (uBgType == 1) m = max(bgLine(p.x, period), bgLine(p.y, period));
    else if (uBgType == 2) m = bgLine(p.y, period);
    else if (uBgType == 3) m = bgLine(p.x, period);
    else if (uBgType == 5) m = bgLine((p.x + p.y) * 0.70710678, period);
    else {
      vec2 c = (floor(p / period) + 0.5) * period;
      m = clamp(uBgWeight * 1.2 - length(p - c) + 0.5, 0.0, 1.0);
    }
    base = mix(base, uBgLine, m * uBgStrength);
  }
  float cv;
  float imf;
  vec4 gp = glyphPaint(q, cv, imf);
  vec3 col = mix(base, gp.rgb, gp.a);
  col += (fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) * uGrain;
  gl_FragColor = vec4(col, 1.0);
}
`,Sv=`
precision highp float;
uniform sampler2D uBase;
uniform sampler2D uLayer;
uniform vec2 uOutRes;
uniform int uBlendMode;   // 0 normal, 1 marks only (normal), 2 multiply, 3 screen, 4 overlay, 5 difference, 6 add
uniform float uOpacity;
void main() {
  vec2 uv = gl_FragCoord.xy / uOutRes;
  vec3 b = texture(uBase, uv).rgb;
  vec4 l = texture(uLayer, uv);
  vec3 s = l.rgb / max(l.a, 1e-4);
  float a = l.a * uOpacity;
  vec3 r = s;
  if (uBlendMode == 2) r = b * s;
  else if (uBlendMode == 3) r = 1.0 - (1.0 - b) * (1.0 - s);
  else if (uBlendMode == 4) r = mix(2.0 * b * s, 1.0 - 2.0 * (1.0 - b) * (1.0 - s), step(0.5, b));
  else if (uBlendMode == 5) r = abs(b - s);
  else if (uBlendMode == 6) r = min(b + s, 1.0);
  gl_FragColor = vec4(mix(b, r, a), 1.0);
}
`,bv=`
precision highp float;
uniform sampler2D uSrc;
uniform vec2 uOutRes;
void main() {
  gl_FragColor = vec4(texture(uSrc, gl_FragCoord.xy / uOutRes).rgb, 1.0);
}
`,Ev=["normal","add","multiply","screen","overlay","difference"],ge=(n,e,t,i,r=.01)=>({label:n,min:e,max:t,step:r,value:i}),kr=[{id:"halftone",name:"Halftone",blurb:"Rotated dot screen; darker areas get bigger dots.",params:[ge("cell size",.4,6,1.4,.05),ge("angle",0,90,45,.5),ge("softness",0,1,.25),ge("contrast",.3,3,1.3)],c1:{label:"dots",value:"#1d1a16"},c2:{label:"paper",value:"#f0e8d2"},glsl:`
float cell = max(P0 * 0.01 * uRes.y, 2.0);
float a = radians(P1);
vec2 g = rot2(gl_FragCoord.xy, -a) / cell;
vec2 id = floor(g);
vec2 f = fract(g) - 0.5;
vec2 cc = rot2((id + 0.5) * cell, a);
float lum = luma(prevAt(clamp(cc / uRes, 0.0, 1.0)));
float r = 0.75 * sqrt(clamp((1.0 - lum) * P3, 0.0, 1.0));
float s = 0.02 + P2 * 0.4;
float m = 1.0 - smoothstep(-s, s, length(f) - r);
return mix(C2, C1, m);`},{id:"pixelate",name:"Pixelate",blurb:"Chunky mosaic pixels.",params:[ge("pixel size",.3,10,2.2,.05)],glsl:`
float cell = max(P0 * 0.01 * uRes.y, 1.0);
vec2 p = (floor(gl_FragCoord.xy / cell) + 0.5) * cell;
return prevAt(p / uRes);`},{id:"scanlines",name:"CRT scanlines",blurb:"Monitor lines, vignette and a little flicker.",params:[ge("line size",.2,3,.8),ge("darkness",0,1,.45),ge("vignette",0,1,.35),ge("flicker",0,1,.15)],glsl:`
float lh = max(P0 * 0.01 * uRes.y, 1.5);
float l = 0.5 + 0.5 * sin(gl_FragCoord.y / lh * 6.2831853);
float fl = 1.0 + (hash12(vec2(floor(uTime * 24.0), 1.0)) - 0.5) * P3 * 0.2;
vec2 c = uv - 0.5;
float vig = 1.0 - P2 * dot(c, c) * 2.2;
return src * (1.0 - P1 * (1.0 - l)) * fl * vig;`},{id:"glitch",name:"Glitch slices",blurb:"Sliced rows shift sideways with an RGB split.",params:[ge("amount",0,1,.5),ge("slices",4,80,24,1),ge("speed",0,2,.8),ge("rgb split",0,3,1)],glsl:`
float row = floor(uv.y * floor(P1));
float t = floor(uTime * (1.0 + P2 * 8.0));
float on = step(1.0 - 0.35 * P0 - 0.02, hash12(vec2(row, t)));
float shift = (hash12(vec2(row * 1.7, t + 3.0)) - 0.5) * 0.25 * P0 * on;
float sp = 0.01 * P3 * on * (0.3 + P0);
return vec3(prevAt(vec2(uv.x + shift + sp, uv.y)).r, prevAt(vec2(uv.x + shift, uv.y)).g, prevAt(vec2(uv.x + shift - sp, uv.y)).b);`},{id:"wave",name:"Wave warp",blurb:"Sine waves bend the whole image.",params:[ge("amplitude",0,.08,.02,.001),ge("frequency",1,40,12,.5),ge("speed",0,4,1),ge("angle",0,180,0,1)],glsl:`
float aspect = uRes.x / uRes.y;
float a = radians(P3);
vec2 dir = vec2(cos(a), sin(a));
vec2 perp = vec2(-dir.y, dir.x);
float ph = dot((uv - 0.5) * vec2(aspect, 1.0), dir) * P1 * 6.2831853 + uTime * P2 * 3.0;
return prevAt(uv + perp * P0 * sin(ph) / vec2(aspect, 1.0));`},{id:"liquid",name:"Liquid flow",blurb:"Noise-driven flowing distortion.",params:[ge("amount",0,.12,.03,.001),ge("scale",.3,8,2.5,.05),ge("speed",0,1,.2)],glsl:`
float aspect = uRes.x / uRes.y;
vec3 p = vec3((uv - 0.5) * vec2(aspect, 1.0) * P1, uTime * P2);
vec2 d = vec2(snoise(p), snoise(p + vec3(9.1, 4.7, 0.0)));
return prevAt(uv + d * P0);`},{id:"gradientmap",name:"Duotone",blurb:"Map brightness onto a two-colour gradient, optionally posterized.",params:[ge("contrast",.4,3,1.2),ge("posterize steps (0 = off)",0,12,0,1),ge("keep original colour",0,1,0)],c1:{label:"shadows",value:"#1b1340"},c2:{label:"highlights",value:"#ffb347"},glsl:`
float t = clamp((luma(src) - 0.5) * P0 + 0.5, 0.0, 1.0);
if (P1 > 1.5) t = min(floor(t * P1), P1 - 1.0) / (P1 - 1.0);
return mix(mix(C1, C2, t), src, P2);`},{id:"neon",name:"Neon glow",blurb:"Glowing halo and bright edge around the letters.",blend:"add",params:[ge("radius",.005,.3,.08),ge("intensity",0,3,1.2),ge("edge line",0,.02,.004,5e-4),ge("inner glow",0,2,.3)],c1:{label:"glow",value:"#ff2fb3"},glsl:`
float d = gdist(uv);
float r = max(P0, 1e-3);
float outer = exp(-max(d, 0.0) / r * 3.0) * P1 * step(0.0, d);
float inner = exp(min(d, 0.0) / r * 3.0) * P3 * step(d, 0.0);
float core = 1.0 - smoothstep(0.0, max(P2, fwidth(d)), abs(d));
return src + C1 * (outer * 0.7 + inner * 0.6 + core * 1.2);`},{id:"echo",name:"Echo outlines",blurb:"Repeating rings radiating from the letter edges.",params:[ge("line width",5e-4,.01,.0025,5e-4),ge("spacing",.01,.1,.035,.001),ge("rings",1,16,6,1),ge("fade",0,1,.7)],c1:{label:"lines",value:"#ff5a36"},glsl:`
float d = gdist(uv);
float fd = max(fwidth(d), 1e-5);
float n = clamp(floor(d / P1 + 0.5), 1.0, floor(P2));
float m = 1.0 - smoothstep(P0 * 0.5 - fd, P0 * 0.5 + fd, abs(d - n * P1));
float alpha = (1.0 - (n - 1.0) / max(P2, 1.0) * P3) * step(0.5 * P1, d);
return mix(src, C1, m * alpha);`},{id:"shadow",name:"Drop shadow",blurb:"Soft shadow cast by the letters.",params:[ge("offset x",-.1,.1,.02,.001),ge("offset y",-.1,.1,-.025,.001),ge("softness",.001,.1,.02,.001),ge("opacity",0,1,.55)],c1:{label:"shadow",value:"#000000"},glsl:`
vec2 q = worldQ(uv);
float d = glyphDist(q);
float ds = glyphDist(q - vec2(P0, P1));
float outside = smoothstep(-max(fwidth(d), 1e-5), max(fwidth(d), 1e-5), d);
return mix(src, C1, (1.0 - smoothstep(-P2, P2, ds)) * outside * P3);`},{id:"gradfill",name:"Gradient fill",blurb:"Fills the letters with a two-colour gradient.",params:[ge("angle",0,360,90,1),ge("scale",.2,6,2.2,.05),ge("steps (0 = smooth)",0,10,0,1),ge("amount",0,1,1)],c1:{label:"from",value:"#ff5f6d"},c2:{label:"to",value:"#ffc371"},glsl:`
vec2 q = worldQ(uv);
float d = glyphDist(q);
float fd = max(fwidth(d), 1e-5);
float inside = 1.0 - smoothstep(-fd, fd, d);
float a = radians(P0);
float t = clamp(dot(q, vec2(cos(a), sin(a))) * P1 + 0.5, 0.0, 1.0);
if (P2 > 1.5) t = min(floor(t * P2), P2 - 1.0) / (P2 - 1.0);
return mix(src, mix(C1, C2, t), inside * P3);`},{id:"hatch",name:"Hatch fill",blurb:"Pen-style hatching inside the letters.",params:[ge("angle",0,180,45,1),ge("spacing",.2,4,1.2,.05),ge("thickness",.05,.95,.35),ge("base fill",0,1,0),ge("cross-hatch",0,1,0)],c1:{label:"lines",value:"#111111"},c2:{label:"base",value:"#f4ede0"},glsl:`
vec2 q = worldQ(uv);
float d = glyphDist(q);
float fd = max(fwidth(d), 1e-5);
float inside = 1.0 - smoothstep(-fd, fd, d);
float sp = max(P1 * 0.01, 0.002);
float a = radians(P0);
vec2 dir = vec2(cos(a), sin(a));
float x1 = dot(q, vec2(-dir.y, dir.x)) / sp;
float x2 = dot(q, dir) / sp;
float aa1 = max(fwidth(x1), 1e-4);
float aa2 = max(fwidth(x2), 1e-4);
float s1 = 1.0 - smoothstep(P2 * 0.5 - aa1, P2 * 0.5 + aa1, abs(fract(x1) - 0.5));
float s2 = (1.0 - smoothstep(P2 * 0.5 - aa2, P2 * 0.5 + aa2, abs(fract(x2) - 0.5))) * P4;
return mix(src, mix(mix(src, C2, P3), C1, max(s1, s2)), inside);`},{id:"bevel",name:"Bevel & shine",blurb:"Embossed, lit letter edges.",params:[ge("bevel width",.004,.1,.03,.001),ge("strength",0,4,1.6),ge("light angle",0,360,135,1),ge("shine",0,1,.5)],glsl:`
vec2 q = worldQ(uv);
float d = glyphDist(q);
float fd = max(fwidth(d), 1e-5);
float inside = 1.0 - smoothstep(-fd, fd, d);
if (inside < 0.001) return src;
float w = max(P0, 1e-3);
float e = max(P0 * 0.15, 0.0008);
float hx = smoothstep(0.0, w, -glyphDist(q + vec2(e, 0.0))) - smoothstep(0.0, w, -glyphDist(q - vec2(e, 0.0)));
float hy = smoothstep(0.0, w, -glyphDist(q + vec2(0.0, e))) - smoothstep(0.0, w, -glyphDist(q - vec2(0.0, e)));
vec3 n = normalize(vec3(-hx * P1 * 2.0, -hy * P1 * 2.0, 1.0));
float a = radians(P2);
vec3 L = normalize(vec3(cos(a), sin(a), 0.9));
float shade = dot(n, L) - L.z;
vec3 col = src * (1.0 + shade * 0.9);
col += pow(max(dot(reflect(-L, n), vec3(0.0, 0.0, 1.0)), 0.0), 24.0) * P3 * 0.6;
return mix(src, col, inside);`},{id:"vignette",name:"Vignette",blurb:"Darkens (or tints) the edges.",params:[ge("strength",0,1,.6),ge("radius",.2,1.2,.75),ge("softness",.05,1,.5)],c1:{label:"colour",value:"#000000"},glsl:`
vec2 c = (uv - 0.5) * vec2(uRes.x / uRes.y, 1.0);
return mix(src, C1, smoothstep(P1, P1 + max(P2, 0.01), length(c)) * P0);`},{id:"grain",name:"Film grain",blurb:"Fine noise, mono or coloured.",params:[ge("amount",0,.6,.18),ge("size",.5,6,1.2,.05),ge("animate",0,1,1,1),ge("colour",0,1,.2)],glsl:`
vec2 p = floor(gl_FragCoord.xy / max(P1, 0.5));
float t = P2 > 0.5 ? floor(uTime * 24.0) * 17.0 : 0.0;
float n = hash12(p + t) - 0.5;
vec3 c = vec3(hash12(p + 3.1 + t), hash12(p + 7.7 + t), hash12(p + 11.3 + t)) - 0.5;
return src + (n * (1.0 - P3) + c * P3) * P0 * 2.0;`},{id:"kaleido",name:"Kaleidoscope",blurb:"Mirrors the image into repeating segments.",params:[ge("segments",2,16,6,1),ge("rotation",0,360,0,1),ge("zoom",.3,3,1)],glsl:`
float aspect = uRes.x / uRes.y;
vec2 p = (uv - 0.5) * vec2(aspect, 1.0) / max(P2, 0.05);
float seg = 6.2831853 / max(P0, 2.0);
float ang = abs(mod(atan(p.y, p.x) + radians(P1), seg) - seg * 0.5);
vec2 p2 = length(p) * vec2(cos(ang), sin(ang));
return prevAt(clamp(p2 / vec2(aspect, 1.0) + 0.5, 0.0, 1.0));`},{id:"grid",name:"Design grid",blurb:"Layout grid with major lines or crosses.",params:[ge("spacing",1,20,5,.1),ge("thickness",.5,4,1,.1),ge("major every",0,10,4,1),ge("crosses only",0,1,0)],c1:{label:"lines",value:"#4aa3ff"},glsl:`
float sp = max(P0 * 0.01 * uRes.y, 4.0);
vec2 g = gl_FragCoord.xy / sp;
vec2 f = abs(fract(g - 0.5) - 0.5) * sp;
vec2 gi = floor(g + 0.5);
vec2 major = P1 > 0.0 && P2 > 0.5 ? step(mod(gi, max(P2, 1.0)), vec2(0.5)) : vec2(0.0);
vec2 th = P1 * 0.5 * (uRes.y / 800.0) * (1.0 + major);
vec2 l = 1.0 - smoothstep(th - 0.5, th + 0.5, f);
float m = mix(max(l.x, l.y), l.x * l.y, P3);
return mix(src, C1, m);`}],wv=n=>kr.find(e=>e.id===n);function Nu(n){var e,t;return{id:n.id,on:!0,opacity:1,blend:n.blend??"normal",p:n.params.map(i=>i.value),c1:((e=n.c1)==null?void 0:e.value)??"#ffffff",c2:((t=n.c2)==null?void 0:t.value)??"#000000"}}function Tv(n){return`
precision highp float;

uniform vec2 uRes;
uniform sampler2D uPrev;
uniform float uOpacity;
uniform int uLayerBlend;
uniform vec4 uA;
uniform vec4 uB;
uniform vec3 uC1;
uniform vec3 uC2;
${mr}

#define P0 uA.x
#define P1 uA.y
#define P2 uA.z
#define P3 uA.w
#define P4 uB.x
#define P5 uB.y
#define P6 uB.z
#define P7 uB.w
#define C1 uC1
#define C2 uC2

float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }
float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
vec2 rot2(vec2 v, float a) { return vec2(cos(a) * v.x - sin(a) * v.y, sin(a) * v.x + cos(a) * v.y); }
vec3 prevAt(vec2 uv) { return texture(uPrev, uv).rgb; }
vec2 worldQ(vec2 uv) { return (uv - 0.5) * uRes / min(uRes.x, uRes.y); }
float gdist(vec2 uv) { return glyphDist(worldQ(uv)); }

vec3 blendMode(vec3 b, vec3 t, int m) {
  if (m == 1) return min(b + t, 1.0);
  if (m == 2) return b * t;
  if (m == 3) return 1.0 - (1.0 - b) * (1.0 - t);
  if (m == 4) return mix(2.0 * b * t, 1.0 - 2.0 * (1.0 - b) * (1.0 - t), step(0.5, b));
  if (m == 5) return abs(b - t);
  return t;
}

vec3 effect(vec2 uv, vec3 src) {
${n.glsl}
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  vec3 src = prevAt(uv);
  vec3 fx = effect(uv, src);
  gl_FragColor = vec4(mix(src, clamp(blendMode(src, fx, uLayerBlend), 0.0, 1.0), uOpacity), 1.0);
}
`}const Je=(n,e,t)=>{const i=document.createElement(n);return e&&(i.className=e),t!==void 0&&(i.textContent=t),i};class Av{constructor(e){re(this,"root",Je("div"));re(this,"list",Je("div","fx-list"));re(this,"gallery",Je("div","fx-gallery"));re(this,"open",new WeakSet);re(this,"thumbs",new Map);this.host=e,this.root.id="effects";const t=Je("button","fx-title","Effects");t.addEventListener("click",()=>{this.root.classList.toggle("collapsed"),this.root.classList.contains("collapsed")||this.host.requestThumbs()});const i=Je("div","fx-body-wrap");i.append(Je("div","fx-section","Layers"),this.list);const r=Je("div","fx-section");r.append(Je("span",void 0,"Add effect"));const s=Je("button","fx-mini","Refresh");s.title="Re-render the previews from the current artwork",s.addEventListener("click",()=>this.host.requestThumbs()),r.append(s),i.append(r,this.gallery);for(const a of kr){const o=Je("button","fx-card");o.title=a.blurb;const l=Je("canvas");l.width=this.host.thumbSize.w,l.height=this.host.thumbSize.h,this.thumbs.set(a.id,l),o.append(l,Je("span",void 0,a.name)),o.addEventListener("click",()=>{const c=Nu(a);this.open.add(c),this.host.setLayers([...this.host.getLayers(),c]),this.rebuild(),this.list.scrollIntoView({block:"nearest"})}),this.gallery.append(o)}this.root.append(t,i),this.rebuild()}setThumbnail(e,t,i,r){const s=this.thumbs.get(e),a=s==null?void 0:s.getContext("2d");if(!s||!a)return;(s.width!==i||s.height!==r)&&(s.width=i,s.height=r);const o=a.createImageData(i,r);for(let l=0;l<r;l++)o.data.set(t.subarray((r-1-l)*i*4,(r-l)*i*4),l*i*4);a.putImageData(o,0,0)}get collapsed(){return this.root.classList.contains("collapsed")}rebuild(){this.list.replaceChildren();const e=this.host.getLayers();if(!e.length){this.list.append(Je("div","fx-empty","No effects yet. Pick one from the gallery below and stack as many as you like."));return}for(let t=e.length-1;t>=0;t--)this.list.append(this.layerCard(e,t))}layerCard(e,t){const i=e[t],r=wv(i.id),s=Je("div","fx-layer");if(!r)return s;const a=Je("div","fx-head"),o=Je("input");o.type="checkbox",o.checked=i.on,o.title="show / hide",o.addEventListener("change",()=>i.on=o.checked);const l=Je("button","fx-name",r.name);l.addEventListener("click",()=>{this.open.has(i)?this.open.delete(i):this.open.add(i),this.rebuild()});const c=v=>{const p=t+v;if(p<0||p>=e.length)return;const u=[...e];[u[t],u[p]]=[u[p],u[t]],this.host.setLayers(u),this.rebuild()},d=(v,p,u)=>{const S=Je("button","fx-mini",v);return S.title=p,S.addEventListener("click",u),S},h=Je("span","fx-btns");if(h.append(d("↑","move up (apply later)",()=>c(1)),d("↓","move down (apply earlier)",()=>c(-1)),d("✕","remove",()=>{this.host.setLayers(e.filter((v,p)=>p!==t)),this.rebuild()})),a.append(o,l,h),s.append(a),!this.open.has(i))return s;const f=Je("div","fx-body");f.append(this.slider("opacity",0,1,.01,i.opacity,v=>i.opacity=v));const m=Je("select");for(const v of Ev)m.append(new Option(v,v,!1,v===i.blend));m.addEventListener("change",()=>i.blend=m.value);const g=Je("label","fx-row");return g.append(Je("span",void 0,"blend"),m),f.append(g),r.params.forEach((v,p)=>{f.append(this.slider(v.label,v.min,v.max,v.step,i.p[p]??v.value,u=>i.p[p]=u))}),r.c1&&f.append(this.colour(r.c1.label,i.c1,v=>i.c1=v)),r.c2&&f.append(this.colour(r.c2.label,i.c2,v=>i.c2=v)),s.append(f),s}slider(e,t,i,r,s,a){const o=Je("label","fx-row"),l=Je("input");l.type="range",l.min=String(t),l.max=String(i),l.step=String(r),l.value=String(s);const c=Je("output",void 0,this.fmt(s,r));return l.addEventListener("input",()=>{const d=Number(l.value);a(d),c.textContent=this.fmt(d,r)}),o.append(Je("span",void 0,e),l,c),o}colour(e,t,i){const r=Je("label","fx-row"),s=Je("input");return s.type="color",s.value=t,s.addEventListener("input",()=>i(s.value)),r.append(Je("span",void 0,e),s,Je("output")),r}fmt(e,t){const i=Math.max(0,Math.min(4,Math.ceil(-Math.log10(t))));return e.toFixed(i)}}const Lc=[{key:"grow",label:"Weight",min:-.05,max:.08,step:.001,group:"shape",title:"Bolder or thinner letterforms"},{key:"soft",label:"Soften",min:0,max:1,step:.005,group:"shape"},{key:"warp",label:"Warp",min:0,max:1,step:.005,group:"shape",title:"Noise warp of the letterform"},{key:"size",label:"Size",min:.2,max:4,step:.01,group:"xform",title:"Or drag a corner handle / scroll on the selected glyph"},{key:"rot",label:"Rotation",min:-180,max:180,step:.5,group:"xform"},{key:"skew",label:"Skew",min:-.8,max:.8,step:.005,group:"xform"},{key:"stretch",label:"Stretch",min:.3,max:3,step:.01,group:"xform"},{key:"morph",label:"Morph amount",min:0,max:1,step:.001,group:"morph"}],$a=.002,Dc=.05;function Ae(n,e,t){const i=document.createElement(n);return e&&(i.className=e),t!==void 0&&(i.textContent=t),i}class Rv{constructor(e){re(this,"root",Ae("div"));re(this,"idEl",Ae("span","gt-id"));re(this,"sizeEl",Ae("span","gt-size"));re(this,"solidBtn",Ae("button","gt-seg","Solid"));re(this,"lineBtn",Ae("button","gt-seg","Outline"));re(this,"slider",Ae("input"));re(this,"readout",Ae("output","gt-read"));re(this,"strokeRow",Ae("div","gt-row"));re(this,"colorIn",Ae("input"));re(this,"colorRow",Ae("div","gt-row"));re(this,"imgRow",Ae("div","gt-row"));re(this,"origBtn",Ae("button","gt-seg","Original"));re(this,"tintBtn",Ae("button","gt-seg","One colour"));re(this,"autoBtn",Ae("button","gt-auto","Palette"));re(this,"opacityIn",Ae("input"));re(this,"opacityRead",Ae("output","gt-read"));re(this,"layerRow",Ae("div","gt-row"));re(this,"layerBtns",[]);re(this,"textIn",Ae("input","gt-text"));re(this,"text2In",Ae("input","gt-text"));re(this,"fontSel",Ae("select","gt-select"));re(this,"fontKey","");re(this,"nums",new Map);re(this,"textSec",Ae("div","gt-sec"));re(this,"shapeSec",Ae("div","gt-sec"));re(this,"xformSec",Ae("div","gt-sec"));re(this,"morphRow");re(this,"useTextBtn",Ae("button","gt-ghost","Use text instead"));re(this,"delBtn",Ae("button","gt-danger","Delete glyph"));this.host=e;const t=this.root;t.id="glyph-tools",t.hidden=!0;const i=Ae("div","gt-head");i.append(this.idEl,this.sizeEl);const r=Ae("div","gt-row"),s=Ae("div","gt-segs");s.append(this.solidBtn,this.lineBtn),r.append(Ae("span","gt-label","Fill"),s),this.slider.type="range",this.slider.min=String($a),this.slider.max=String(Dc),this.slider.step="0.0005",this.slider.className="gt-slider",this.slider.title="outline thickness",this.strokeRow.append(Ae("span","gt-label","Thickness"),this.slider,this.readout),this.colorIn.type="color",this.colorIn.className="gt-color",this.colorIn.title="colour of this glyph";const a=this.colorRow;this.autoBtn.title="Go back to the palette colours";const o=Ae("div","gt-colorwrap");o.append(this.colorIn,this.autoBtn),a.append(Ae("span","gt-label","Colour"),o),this.opacityIn.type="range",this.opacityIn.min="0",this.opacityIn.max="1",this.opacityIn.step="0.01",this.opacityIn.className="gt-slider",this.opacityIn.title="opacity";const l=Ae("div","gt-row");l.append(Ae("span","gt-label","Opacity"),this.opacityIn,this.opacityRead);const c=Ae("div","gt-segs");c.append(this.origBtn,this.tintBtn),this.imgRow.append(Ae("span","gt-label","Image"),c);const d=Ae("div","gt-segs four"),h=[["⤓","Send to back","back"],["↓","Move back one step","down"],["↑","Move forward one step","up"],["⤒","Bring to front","front"]];for(const[S,E,x]of h){const L=Ae("button","gt-seg",S);L.title=E,L.addEventListener("click",()=>e.moveLayer(x)),this.layerBtns.push(L),d.append(L)}this.layerRow.append(Ae("span","gt-label","Layer"),d);const f=(S,E,x=!0)=>{const L=Ae("button","gt-sec-head",E),A=Ae("div","gt-sec-body");return S.append(L,A),S.classList.toggle("closed",!x),L.addEventListener("click",()=>S.classList.toggle("closed")),A},m=f(this.textSec,"Text");this.textIn.type="text",this.textIn.title="The letters of this glyph (or just type on the canvas)",this.textIn.addEventListener("change",()=>e.setText(this.textIn.value)),this.textIn.addEventListener("keydown",S=>{S.key==="Enter"&&this.textIn.blur()}),this.fontSel.addEventListener("change",()=>e.setFont(this.fontSel.value)),this.text2In.type="text",this.text2In.placeholder="A second text to blend towards",this.text2In.addEventListener("change",()=>e.setText2(this.text2In.value)),this.text2In.addEventListener("keydown",S=>{S.key==="Enter"&&this.text2In.blur()});const g=(S,...E)=>{const x=Ae("div","gt-row");return x.append(Ae("span","gt-label",S),...E),x};m.append(g("Text",this.textIn),g("Font",this.fontSel),g("Morph to",this.text2In));const v=f(this.shapeSec,"Shape"),p=f(this.xformSec,"Transform");for(const S of Lc){const E=Ae("input","gt-slider");E.type="range",E.min=String(S.min),E.max=String(S.max),E.step=String(S.step),S.title&&(E.title=S.title);const x=Ae("output","gt-read"),L=Ae("div","gt-row");L.append(Ae("span","gt-label",S.label),E,x),E.addEventListener("input",()=>e.setNum(S.key,Number(E.value))),this.nums.set(S.key,{row:L,input:E,read:x}),(S.group==="shape"?v:S.group==="morph"?m:p).append(L)}this.morphRow=this.nums.get("morph").row;const u=Ae("button","gt-ghost","Reset transform");u.addEventListener("click",()=>e.resetTransform()),p.append(u),this.useTextBtn.addEventListener("click",()=>e.useText()),this.delBtn.addEventListener("click",()=>e.remove()),this.delBtn.title="Remove this glyph (Delete key)",t.append(i,r,this.imgRow,a,l,this.strokeRow,this.layerRow,this.textSec,this.shapeSec,this.xformSec,this.useTextBtn,this.delBtn),this.solidBtn.addEventListener("click",()=>e.setOutline(!1)),this.lineBtn.addEventListener("click",()=>e.setOutline(!0)),this.slider.addEventListener("input",()=>e.setThickness(Number(this.slider.value))),this.colorIn.addEventListener("input",()=>e.setColor(this.colorIn.value)),this.autoBtn.addEventListener("click",()=>e.usePalette()),this.origBtn.addEventListener("click",()=>e.setImageColor(!0)),this.tintBtn.addEventListener("click",()=>e.setImageColor(!1)),this.opacityIn.addEventListener("input",()=>e.setOpacity(Number(this.opacityIn.value))),t.addEventListener("pointerdown",S=>S.stopPropagation())}update(e){const t=e?this.host.get():null;if(this.root.hidden=!t||!e,!t||!e)return;this.idEl.textContent=`Glyph ${t.index+1} · ${t.text.trim().slice(0,10)||"—"}`,this.sizeEl.textContent=`${t.size.toFixed(2)}×`,this.solidBtn.classList.toggle("on",!t.outline),this.lineBtn.classList.toggle("on",t.outline),this.strokeRow.classList.toggle("off",!t.outline),this.slider.disabled=!t.outline,Number(this.slider.value)!==t.outlineW&&(this.slider.value=String(t.outlineW)),this.readout.textContent=`${(t.outlineW*t.shortSide).toFixed(0)} px`,this.colorIn.value!==t.color.toLowerCase()&&(this.colorIn.value=t.color),this.autoBtn.hidden=!t.custom,this.imgRow.hidden=!t.image||t.outline,this.origBtn.classList.toggle("on",t.imageColor),this.tintBtn.classList.toggle("on",!t.imageColor),this.colorRow.hidden=t.image&&t.imageColor&&!t.outline,Number(this.opacityIn.value)!==t.opacity&&(this.opacityIn.value=String(t.opacity)),this.opacityRead.textContent=`${Math.round(t.opacity*100)}%`,this.opacityIn.style.setProperty("--fill",`${t.opacity*100}%`),this.layerRow.title=`Layer ${t.layer+1} of ${t.layers}`,this.layerRow.hidden=t.layers<2,this.layerBtns[0].disabled=this.layerBtns[1].disabled=t.layer===0,this.layerBtns[2].disabled=this.layerBtns[3].disabled=t.layer===t.layers-1,this.slider.style.setProperty("--fill",`${(t.outlineW-$a)/(Dc-$a)*100}%`),this.textSec.hidden=t.image,this.useTextBtn.hidden=!t.image,this.delBtn.hidden=t.count<2,document.activeElement!==this.textIn&&this.textIn.value!==t.rawText&&(this.textIn.value=t.rawText),document.activeElement!==this.text2In&&this.text2In.value!==t.text2&&(this.text2In.value=t.text2);const i=t.fonts.join(`
`);i!==this.fontKey&&(this.fontKey=i,this.fontSel.replaceChildren(...t.fonts.map(v=>{const p=Ae("option",void 0,v);return p.value=v,p}))),this.fontSel.value=t.font;for(const v of Lc){const p=this.nums.get(v.key),u=t[v.key];Number(p.input.value)!==u&&(p.input.value=String(u)),p.read.textContent=v.step>=1?String(Math.round(u)):u.toFixed(v.step>=.1?1:v.step>=.01?2:3),p.input.style.setProperty("--fill",`${(u-v.min)/(v.max-v.min)*100}%`)}this.morphRow.hidden=!t.text2.trim();const r=this.root.offsetWidth||236,s=this.root.offsetHeight||104,a=window.innerWidth,o=window.innerHeight,l=14,c=Math.min(Math.max(8,e.x0-8),Math.max(8,a-r-8));if(e.y1+l+8+s<=o-8){this.root.style.left=`${c}px`,this.root.style.top=`${e.y1+l+8}px`;return}if(e.y0-l-40-s>=8){this.root.style.left=`${c}px`,this.root.style.top=`${e.y0-l-40-s}px`;return}const d=document.getElementById("effects"),h=document.querySelector(".lil-gui.root"),f=Math.max(8,d&&!d.classList.contains("collapsed")?d.getBoundingClientRect().right+8:8),m=Math.min(a-8,h?h.getBoundingClientRect().left-8:a-8);let g=e.x1+l+8;g+r>m&&(g=e.x0-l-8-r),g<f&&(g=Math.min(e.x1,m)-r-l),g=Math.max(f,Math.min(g,m-r)),this.root.style.left=`${g}px`,this.root.style.top=`${Math.min(Math.max(8,e.y0),Math.max(8,o-s-8))}px`}}const Ic=8,Xo=["Topographic","Ridgeline","Op-art bands","Dungeon","Warped grid","Particle sea"],In=5,Ou=0,Uc={0:[null,null,null,null],1:[{label:"Rows",min:16,max:160,step:1},{label:"Relief",min:0,max:4,step:.01},{label:"Letter lift",min:0,max:2,step:.01},null],2:[{label:"Thickness",min:.1,max:.9,step:.01},null,null,null],3:[{label:"Stones",min:3,max:30,step:.5},{label:"Grit",min:0,max:2,step:.01},{label:"Torchlight",min:0,max:2,step:.01},{label:"Relief",min:0,max:2,step:.01}],4:[{label:"Cells",min:6,max:90,step:.5},{label:"Lens",min:0,max:14,step:.05},null,null],5:[{label:"Particles (k)",min:10,max:400,step:1},{label:"Current",min:0,max:1.5,step:.01},{label:"Attract ↔ repel",min:-1,max:1,step:.01},{label:"Edge slide",min:0,max:1,step:.01}]},Bu=[{id:"free",label:"Freeform"},{id:"full",label:"Full canvas"},{id:"1:1",label:"Square 1:1 · 1080 × 1080",w:1080,h:1080},{id:"4:5",label:"Portrait 4:5 · 1080 × 1350",w:1080,h:1350},{id:"9:16",label:"Story 9:16 · 1080 × 1920",w:1080,h:1920},{id:"16:9",label:"Landscape 16:9 · 1920 × 1080",w:1920,h:1080},{id:"3:2",label:"Photo 3:2 · 1800 × 1200",w:1800,h:1200},{id:"2:3",label:"Poster 2:3 · 1200 × 1800",w:1200,h:1800},{id:"a4",label:"A4 portrait · 2480 × 3508",w:2480,h:3508},{id:"3:1",label:"Banner 3:1 · 1500 × 500",w:1500,h:500},{id:"21:9",label:"Cinema 21:9 · 2560 × 1080",w:2560,h:1080}];function Cv(n,e,t){if(n==="full")return{x0:0,y0:0,x1:1,y1:1};const i=Bu.find(o=>o.id===n);if(!i||!i.w||!i.h)return null;const r=Math.min(.86*e/i.w,.86*t/i.h),s=i.w*r/e,a=i.h*r/t;return{x0:(1-s)/2,y0:(1-a)/2,x1:(1+s)/2,y1:(1+a)/2}}const Pv=["Solid colour","Grid","Horizontal lines","Vertical lines","Dots","Diagonal lines"];function gr(n){const e=t=>n[t].z??t;return n.map((t,i)=>i).sort((t,i)=>e(t)-e(i)||t-i)}const Fc=[{key:"influence",label:"Reach",min:.02,max:.8,step:.01,looks:null},{key:"slope",label:"Relief",min:0,max:3,step:.01,looks:[0,1,2,3,4]},{key:"rough",label:"Roughness",min:0,max:1.5,step:.01,looks:[0,1,2,3,4]},{key:"freq",label:"Scale",min:.3,max:8,step:.01,looks:null},{key:"warp",label:"Turbulence",min:0,max:2,step:.01,looks:null},{key:"drift",label:"Evolution",min:0,max:.3,step:.001,looks:null},{key:"seed",label:"Seed",min:0,max:10,step:.001,looks:null},{key:"spacing",label:"Interval",min:.004,max:.06,step:.001,looks:[0,2]},{key:"lineWidth",label:"Line weight",min:.3,max:4,step:.05,looks:[0,1,4,5]},{key:"tint",label:"Tint",min:0,max:1,step:.01,looks:[0,2,3,4]},{key:"shade",label:"Hillshade",min:0,max:1,step:.01,looks:[0]}],Lv=["Offset lines","Mountain","Basin"],Dv=["Normal","Marks only","Multiply","Screen","Overlay","Difference","Add"];function ot(n,e,t){const i=document.createElement(n);return e&&(i.className=e),t!==void 0&&(i.textContent=t),i}function Iv(n){const e=ot("label","lb-slider"),t=ot("span","lb-label"),i=ot("input");i.type="range";const r=ot("output","lb-read");return e.append(t,i,r),i.addEventListener("input",()=>n(Number(i.value))),{wrap:e,label:t,input:i,read:r}}function Ya(n,e,t,i,r){n.input.min!==String(t)&&(n.input.min=String(t)),n.input.max!==String(i)&&(n.input.max=String(i)),n.input.step!==String(r)&&(n.input.step=String(r)),Number(n.input.value)!==e&&(n.input.value=String(e)),n.read.textContent=r>=1?String(Math.round(e)):e.toFixed(r>=.1?1:2),n.input.style.setProperty("--fill",`${(e-t)/(i-t)*100}%`)}class Uv{constructor(e){re(this,"root",ot("div"));re(this,"lookBtns",[]);re(this,"hint",ot("span","lb-hint"));re(this,"tabs",ot("div","lb-tabs"));re(this,"tabKey","");re(this,"bgBtn",ot("button","lb-btn","Background"));re(this,"bgRow",ot("div","lb-row"));re(this,"bgOpen",!1);re(this,"bgType",ot("select","lb-select"));re(this,"bgColor",ot("input"));re(this,"bgLine",ot("input"));re(this,"bgPalette",ot("button","lb-btn","Palette"));re(this,"bgLineWrap",ot("label","lb-field"));re(this,"bgSliders",[]);this.host=e;const t=this.root;t.id="layerbar";const i=ot("div","lb-row lb-top");i.append(ot("span","lb-title","Base layer"));const r=ot("div","lb-chips");Xo.forEach((c,d)=>{const h=ot("button","lb-chip",c);h.title=`Draw a ${c.toLowerCase()} layer: click, then drag a rectangle on the canvas`,h.addEventListener("click",()=>e.arm(d)),this.lookBtns.push(h),r.append(h)}),this.bgBtn.title="What the canvas looks like behind and around the base layers",this.bgBtn.addEventListener("click",()=>{this.bgOpen=!this.bgOpen,this.update()}),i.append(this.hint,this.bgBtn),this.tabs.hidden=!0,this.bgType.title="Background pattern",Pv.forEach((c,d)=>{const h=ot("option",void 0,c);h.value=String(d),this.bgType.append(h)}),this.bgType.addEventListener("change",()=>e.setBg({type:Number(this.bgType.value)}));const s=ot("label","lb-field");s.append(ot("span","lb-label","Pattern"),this.bgType),this.bgColor.type="color",this.bgColor.className="lb-color",this.bgColor.addEventListener("input",()=>e.setBg({color:this.bgColor.value}));const a=ot("label","lb-field");a.append(ot("span","lb-label","Colour"),this.bgColor),this.bgLine.type="color",this.bgLine.className="lb-color",this.bgLine.addEventListener("input",()=>e.setBg({line:this.bgLine.value})),this.bgLineWrap.append(ot("span","lb-label","Lines"),this.bgLine),this.bgPalette.title="Use the palette colours again",this.bgPalette.addEventListener("click",()=>e.setBg({color:"",line:""}));const o=[["spacing","Spacing"],["weight","Weight"],["strength","Strength"]],l=ot("div","lb-sliders");for(const[c,d]of o){const h=Iv(f=>e.setBg({[c]:f}));h.label.textContent=d,this.bgSliders.push(h),l.append(h.wrap)}this.bgRow.append(s,a,this.bgLineWrap,this.bgPalette,l),this.bgRow.hidden=!0,t.append(i,r,this.tabs,this.bgRow),t.addEventListener("pointerdown",c=>c.stopPropagation())}update(){const e=this.host.state();this.lookBtns.forEach((i,r)=>i.classList.toggle("on",e.armed===r)),this.hint.textContent=e.armed>=0?"Drag on the canvas to size it · Esc cancels":"",this.hint.hidden=e.armed<0,this.bgBtn.classList.toggle("on",this.bgOpen);const t=e.order.map(i=>`${i.index}:${i.look}`).join(",")+`|${e.selected}`;if(this.tabs.hidden=e.order.length===0,t!==this.tabKey&&(this.tabKey=t,this.tabs.replaceChildren(ot("span","lb-label","Layers")),e.order.forEach((i,r)=>{const s=ot("button","lb-tab",`${r+1} ${Xo[i.look]}`);s.classList.toggle("on",i.index===e.selected),s.addEventListener("click",()=>this.host.select(i.index)),this.tabs.append(s)})),this.bgRow.hidden=!this.bgOpen,this.bgOpen){const i=e.bg;this.bgType.value=String(i.type);const r=i.color||e.paper,s=i.line||e.ink;this.bgColor.value!==r.toLowerCase()&&(this.bgColor.value=r),this.bgLine.value!==s.toLowerCase()&&(this.bgLine.value=s),this.bgPalette.hidden=!i.color&&!i.line;const a=i.type!==0;this.bgLineWrap.hidden=!a,this.bgSliders.forEach(o=>o.wrap.hidden=!a),a&&(Ya(this.bgSliders[0],i.spacing,.01,.2,.001),Ya(this.bgSliders[1],i.weight,.5,6,.1),Ya(this.bgSliders[2],i.strength,.05,1,.01))}}}function He(n,e,t){const i=document.createElement(n);return e&&(i.className=e),t!==void 0&&(i.textContent=t),i}function Ka(n){const e=He("div","gt-row"),t=He("span","gt-label"),i=He("input","gt-slider");i.type="range";const r=He("output","gt-read");return e.append(t,i,r),i.addEventListener("input",()=>n(Number(i.value))),{row:e,label:t,input:i,read:r}}function ja(n,e,t,i,r){n.input.min!==String(t)&&(n.input.min=String(t)),n.input.max!==String(i)&&(n.input.max=String(i)),n.input.step!==String(r)&&(n.input.step=String(r)),Number(n.input.value)!==e&&(n.input.value=String(e)),n.read.textContent=r>=1?String(Math.round(e)):e.toFixed(r>=.1?1:r>=.01?2:3),n.input.style.setProperty("--fill",`${(e-t)/(i-t)*100}%`)}function Ar(n,e){const t=He("div","gt-row");return t.append(He("span","gt-label",n),e),t}class Fv{constructor(e){re(this,"root",He("div"));re(this,"idEl",He("span","gt-id"));re(this,"sizeEl",He("span","gt-size"));re(this,"sizeSel",He("select","gt-select"));re(this,"lookRows",[]);re(this,"blendSel",He("select","gt-select"));re(this,"reactBtns",[]);re(this,"opacityRow");re(this,"modeSel",He("select","gt-select"));re(this,"modeRow");re(this,"palSel",He("select","gt-select"));re(this,"palKey","");re(this,"styleRows",[]);re(this,"layerBtns",[]);re(this,"layerRow",He("div","gt-row"));re(this,"presetSel",He("select","gt-select"));re(this,"presetKey","");re(this,"nameIn",He("input","gt-text"));re(this,"delPreset",He("button","gt-auto","Delete"));re(this,"picked","");this.host=e;const t=this.root;t.id="layer-tools",t.hidden=!0;const i=He("div","gt-head");i.append(this.idEl,this.sizeEl),t.append(i),this.presetSel.addEventListener("change",()=>{this.picked=this.presetSel.value,this.picked&&e.applyPreset(this.picked)}),this.nameIn.type="text",this.nameIn.placeholder="Name this layer…",this.nameIn.maxLength=40,this.nameIn.addEventListener("keydown",h=>{h.stopPropagation(),h.key==="Enter"&&this.save()});const r=He("button","gt-auto","Save");r.title="Save this layer's look and settings as a preset",r.addEventListener("click",()=>this.save()),this.delPreset.title="Delete the preset chosen above",this.delPreset.addEventListener("click",()=>{this.picked&&(e.deletePreset(this.picked),this.picked="")});const s=He("div","gt-row gt-save");s.append(this.nameIn,r,this.delPreset),t.append(Ar("Preset",this.presetSel),s,He("div","gt-rule"));for(const h of Bu){const f=He("option",void 0,h.label);f.value=h.id,this.sizeSel.append(f)}this.sizeSel.addEventListener("change",()=>e.setSize(this.sizeSel.value)),t.append(Ar("Size",this.sizeSel)),Dv.forEach((h,f)=>{const m=He("option",void 0,h);m.value=String(f),this.blendSel.append(m)}),this.blendSel.title="How this layer combines with what is below it. Marks only hides its background and keeps just the lines, bands, grout or particles",this.blendSel.addEventListener("change",()=>e.setStyle("blend",Number(this.blendSel.value))),this.opacityRow=Ka(h=>e.setStyle("opacity",h)),this.opacityRow.label.textContent="Opacity";const a=He("div","gt-segs");for(const[h,f]of[["On",!0],["Off",!1]]){const m=He("button","gt-seg",h);m.title=f?"The glyphs shape this layer":"This layer ignores the glyphs",m.addEventListener("click",()=>e.setStyle("react",f)),this.reactBtns.push(m),a.append(m)}const o=He("div","gt-row");o.append(He("span","gt-label","Glyphs"),a),t.append(o,Ar("Blend",this.blendSel),this.opacityRow.row);for(let h=0;h<4;h++){const f=Ka(m=>e.setValue(h,m));this.lookRows.push(f),t.append(f.row)}t.append(He("div","gt-rule")),Lv.forEach((h,f)=>{const m=He("option",void 0,h);m.value=String(f),this.modeSel.append(m)}),this.modeSel.addEventListener("change",()=>e.setStyle("mode",Number(this.modeSel.value))),this.modeRow=Ar("Letters",this.modeSel),this.modeSel.title="How the letters act on the terrain",this.palSel.addEventListener("change",()=>e.setStyle("palette",this.palSel.value)),t.append(this.modeRow,Ar("Palette",this.palSel));for(const h of Fc){const f=Ka(m=>e.setStyle(h.key,m));f.label.textContent=h.label,this.styleRows.push(f),t.append(f.row)}t.append(He("div","gt-rule"));const l=He("div","gt-segs four"),c=[["⤓","Send to back","back"],["↓","Move back one step","down"],["↑","Move forward one step","up"],["⤒","Bring to front","front"]];for(const[h,f,m]of c){const g=He("button","gt-seg",h);g.title=f,g.addEventListener("click",()=>e.moveLayer(m)),this.layerBtns.push(g),l.append(g)}this.layerRow.append(He("span","gt-label","Layer"),l);const d=He("button","gt-danger","Delete layer");d.title="Remove this base layer (Delete key)",d.addEventListener("click",()=>e.remove()),t.append(this.layerRow,d),t.addEventListener("pointerdown",h=>h.stopPropagation()),t.addEventListener("wheel",h=>h.stopPropagation())}save(){const e=this.nameIn.value.trim();if(!e){this.nameIn.focus();return}this.host.savePreset(e),this.picked=e,this.nameIn.value=""}update(e){const t=e?this.host.get():null;if(this.root.hidden=!t||!e,!t||!e)return;const i=t.layer;this.idEl.textContent=`Layer ${t.pos+1} · ${Xo[i.look]}`,this.sizeEl.textContent=`${Math.round(e.x1-e.x0)}×${Math.round(e.y1-e.y0)}`;const r=this.host.presetNames(),s=r.join(`
`)+`|${this.picked}`;s!==this.presetKey&&(this.presetKey=s,r.includes(this.picked)||(this.picked=""),this.presetSel.replaceChildren(...[""].concat(r).map(A=>{const T=He("option",void 0,A||(r.length?"Choose a preset…":"None saved yet"));return T.value=A,T})),this.presetSel.value=this.picked),this.delPreset.hidden=!this.picked,this.sizeSel.value=i.size,this.blendSel.value=String(i.blend),this.reactBtns[0].classList.toggle("on",i.react!==!1),this.reactBtns[1].classList.toggle("on",i.react===!1),ja(this.opacityRow,i.opacity,0,1,.01);const a=[i.a,i.b,i.c,i.d],o=Uc[i.look]??Uc[0];this.lookRows.forEach((A,T)=>{const C=o[T];A.row.hidden=!C,C&&(A.label.textContent=C.label,ja(A,a[T],C.min,C.max,C.step))});const l=t.paletteNames.join();this.palKey!==l&&(this.palKey=l,this.palSel.replaceChildren(...["",...t.paletteNames].map(A=>{const T=He("option",void 0,A||"Canvas palette");return T.value=A,T}))),this.palSel.value=i.palette,this.modeRow.hidden=i.look===5,this.modeSel.value=String(i.mode),Fc.forEach((A,T)=>{const C=this.styleRows[T];C.row.hidden=!!A.looks&&!A.looks.includes(i.look),C.row.hidden||ja(C,i[A.key],A.min,A.max,A.step)}),this.layerRow.hidden=t.count<2,this.layerBtns[0].disabled=this.layerBtns[1].disabled=t.pos===0,this.layerBtns[2].disabled=this.layerBtns[3].disabled=t.pos===t.count-1;const c=this.root.offsetWidth||252,d=this.root.offsetHeight||300,h=14,f=window.innerWidth,m=window.innerHeight,g=document.getElementById("effects"),v=document.querySelector(".lil-gui.root"),p=Math.max(8,g&&!g.classList.contains("collapsed")?g.getBoundingClientRect().right+8:8),u=Math.min(f-8,v?v.getBoundingClientRect().left-8:f-8),S=document.getElementById("layerbar"),E=S?S.getBoundingClientRect().bottom+8:8;let x=e.x1+h;x+c>u&&(x=e.x0-h-c),x<p&&(x=Math.min(e.x1,u)-c-h),x=Math.max(p,Math.min(x,u-c));const L=Math.min(Math.max(E,e.y0),Math.max(E,m-d-8));this.root.style.left=`${x}px`,this.root.style.top=`${L}px`}}const ia=512,Ur=1e20;function Nv(n,e,t=.55){const i=ia,r=document.createElement("canvas");r.width=r.height=i;const s=r.getContext("2d",{willReadFrequently:!0});s.fillStyle="#000",s.fillRect(0,0,i,i),s.fillStyle="#fff",s.textAlign="left",s.textBaseline="alphabetic";const a=g=>s.font=`${e.weight} ${g}px "${e.family}", sans-serif`;a(100);let o=s.measureText(n);const l=o.actualBoundingBoxLeft+o.actualBoundingBoxRight||1,c=o.actualBoundingBoxAscent+o.actualBoundingBoxDescent||1,d=100*t*i/Math.max(l,c);a(d),o=s.measureText(n);const h=i/2-(o.actualBoundingBoxRight-o.actualBoundingBoxLeft)/2,f=i/2+(o.actualBoundingBoxAscent-o.actualBoundingBoxDescent)/2;s.fillText(n,h,f);const m=s.getImageData(0,0,i,i).data;return ku(g=>m[g*4]/255)}function ku(n){const e=ia,t=new Float64Array(e*e),i=new Float64Array(e*e);for(let s=0;s<e*e;s++){const a=n(s);a>=1?(t[s]=0,i[s]=Ur):a<=0?(t[s]=Ur,i[s]=0):(t[s]=a<.5?(.5-a)**2:0,i[s]=a>.5?(a-.5)**2:0)}Oc(t,e),Oc(i,e);const r=new Float32Array(e*e);for(let s=0;s<e*e;s++)r[s]=(Math.sqrt(t[s])-Math.sqrt(i[s]))/e;return Nc(r,e,2),Nc(r,e,2),r}const Yt=768;async function zu(n){const e=new Image;return e.src=n,await e.decode(),e}async function Ov(n,e=.55){const t=URL.createObjectURL(n);try{const i=await zu(t),r=Yt,s=i.naturalWidth||i.width,a=i.naturalHeight||i.height,o=e*r/Math.max(s,a,1),l=document.createElement("canvas");l.width=l.height=r;const c=l.getContext("2d");c.imageSmoothingQuality="high",c.drawImage(i,(r-s*o)/2,(r-a*o)/2,s*o,a*o);let d=l.toDataURL("image/webp",.92);return d.startsWith("data:image/webp")||(d=l.toDataURL("image/png")),{dataUrl:d}}finally{URL.revokeObjectURL(t)}}async function Bv(n){const e=await zu(n),t=Yt,i=document.createElement("canvas");i.width=i.height=t;const r=i.getContext("2d",{willReadFrequently:!0});r.drawImage(e,0,0,t,t);const s=r.getImageData(0,0,t,t).data,a=new Uint8Array(t*t*4);for(let h=0;h<t;h++){const f=(t-1-h)*t;for(let m=0;m<t;m++){const g=(f+m)*4,v=(h*t+m)*4,p=s[g+3];a[v]=s[g]*p/255,a[v+1]=s[g+1]*p/255,a[v+2]=s[g+2]*p/255,a[v+3]=p}}const o=ia,l=document.createElement("canvas");l.width=l.height=o;const c=l.getContext("2d",{willReadFrequently:!0});c.drawImage(i,0,0,o,o);const d=c.getImageData(0,0,o,o).data;return{sdf:ku(h=>d[h*4+3]/255),rgba:a}}function Nc(n,e,t){const i=new Float32Array(e),r=2*t+1,s=(a,o)=>{let l=0;for(let c=-t;c<=t;c++)l+=n[a+Math.min(Math.max(c,0),e-1)*o];for(let c=0;c<e;c++)i[c]=l/r,l+=n[a+Math.min(c+t+1,e-1)*o]-n[a+Math.max(c-t,0)*o];for(let c=0;c<e;c++)n[a+c*o]=i[c]};for(let a=0;a<e;a++)s(a*e,1);for(let a=0;a<e;a++)s(a,e)}function Oc(n,e){const t=new Float64Array(e),i=new Uint16Array(e),r=new Float64Array(e+1);for(let s=0;s<e;s++)Bc(n,s,e,e,t,i,r);for(let s=0;s<e;s++)Bc(n,s*e,1,e,t,i,r)}function Bc(n,e,t,i,r,s,a){s[0]=0,a[0]=-Ur,a[1]=Ur,r[0]=n[e];for(let o=1,l=0,c=0;o<i;o++){r[o]=n[e+o*t];const d=o*o;do{const h=s[l];c=(r[o]-r[h]+d-h*h)/(o-h)/2}while(c<=a[l]&&--l>-1);l++,s[l]=o,a[l]=c,a[l+1]=Ur}for(let o=0,l=0;o<i;o++){for(;a[l+1]<o;)l++;const c=s[l],d=o-c;n[e+o*t]=r[c]+d*d}}const nt=8,rt=ia,ul={u0:.25,u1:.75,v0:.25,v1:.75};function kv(n,e){return{u0:Math.min(n.u0,e.u0),u1:Math.max(n.u1,e.u1),v0:Math.min(n.v0,e.v0),v1:Math.max(n.v1,e.v1)}}function qo(n){let e=rt,t=-1,i=rt,r=-1;for(let s=0;s<rt;s++)for(let a=0;a<rt;a++)n[s*rt+a]<0&&(a<e&&(e=a),a>t&&(t=a),s<i&&(i=s),s>r&&(r=s));return t<0?null:{u0:e/rt,u1:(t+1)/rt,v0:1-(r+1)/rt,v1:1-i/rt}}class zv{constructor(){re(this,"fromTex");re(this,"toTex");re(this,"imgTex");re(this,"imgData",new Uint8Array(new ArrayBuffer(Yt*Yt*4*nt)));re(this,"sdf",Array.from({length:nt},()=>null));re(this,"bounds",Array.from({length:nt},()=>({...ul})));re(this,"fromData",new Uint16Array(new ArrayBuffer(rt*rt*nt*2)));re(this,"toData",new Uint16Array(new ArrayBuffer(rt*rt*nt*2)));const e=Fa.toHalfFloat(1);this.fromData.fill(e),this.toData.fill(e);const t=r=>{const s=new Vs(r,rt,rt,nt);return s.format=rl,s.type=si,s.minFilter=s.magFilter=St,s.generateMipmaps=!1,s.needsUpdate=!0,s};this.fromTex=t(this.fromData),this.toTex=t(this.toData);const i=new Vs(this.imgData,Yt,Yt,nt);i.format=Vt,i.type=un,i.minFilter=i.magFilter=St,i.generateMipmaps=!1,i.needsUpdate=!0,this.imgTex=i}write(e,t,i){const r=t*rt*rt;if(!i){e.fill(Fa.toHalfFloat(1),r,r+rt*rt);return}for(let s=0;s<rt;s++){const a=(rt-1-s)*rt;for(let o=0;o<rt;o++)e[r+s*rt+o]=Fa.toHalfFloat(i[a+o])}}set(e,t,i,r){const s=e*rt*rt;r?this.fromData.set(this.toData.subarray(s,s+rt*rt),s):this.write(this.fromData,e,t),this.write(this.toData,e,t),this.sdf[e]=t,this.bounds[e]=i,this.fromTex.needsUpdate=!0,this.toTex.needsUpdate=!0}setPair(e,t,i,r){this.write(this.fromData,e,t),this.write(this.toData,e,i),this.sdf[e]=t,this.bounds[e]=r,this.fromTex.needsUpdate=!0,this.toTex.needsUpdate=!0}setImage(e,t){this.imgData.set(t,e*Yt*Yt*4),this.imgTex.needsUpdate=!0}clear(e){this.imgData.fill(0,e*Yt*Yt*4,(e+1)*Yt*Yt*4),this.imgTex.needsUpdate=!0,this.write(this.fromData,e,null),this.write(this.toData,e,null),this.sdf[e]=null,this.fromTex.needsUpdate=!0,this.toTex.needsUpdate=!0}}const Gv=[{family:"Inter",weight:800},{family:"Playfair Display",weight:900},{family:"Bebas Neue",weight:400},{family:"Space Grotesk",weight:700},{family:"DM Serif Display",weight:400},{family:"Archivo Black",weight:400},{family:"Abril Fatface",weight:400},{family:"Pacifico",weight:400},{family:"Roboto Mono",weight:700},{family:"serif",weight:700},{family:"sans-serif",weight:700}];async function Hv(n,e){try{await document.fonts.load(`${n.weight} 100px "${n.family}"`,e)}catch{}}async function Vv(n,e){const t=`Custom ${e} (${n.name.replace(/\.[^.]+$/,"")})`,i=new FontFace(t,await n.arrayBuffer());return await i.load(),document.fonts.add(i),{family:t,weight:400}}const Nn={Survey:{paper:"#f1ead8",ink:"#7a6350",index:"#2e2118",low:"#cfd9b5",mid:"#ead9a8",high:"#c9a27a"},Blueprint:{paper:"#0d2a4a",ink:"#6fa6d8",index:"#eaf4ff",low:"#123a63",mid:"#1b5189",high:"#2f73b3"},Midnight:{paper:"#0b0d12",ink:"#4b5568",index:"#ff7a59",low:"#11151d",mid:"#1c2330",high:"#2d3850"},Aurora:{paper:"#070c18",ink:"#3ddbd9",index:"#f0f6ff",low:"#0d1a33",mid:"#1b3b66",high:"#5a3a92"},Ink:{paper:"#f7f7f5",ink:"#8a8a86",index:"#111111",low:"#efefec",mid:"#deded9",high:"#c8c8c2"},"White dots":{paper:"#030304",ink:"#6d6d74",index:"#ffffff",low:"#0a0a0d",mid:"#15151a",high:"#22222a"},Ember:{paper:"#1a0f0c",ink:"#c4623a",index:"#ffd7a8",low:"#2a1612",mid:"#4a2218",high:"#7a3820"}},Ws=Object.keys(Nn),fi='"JetBrains Mono", "Roboto Mono", ui-monospace, Menlo, monospace';function Wv(n){let e=Math.floor(n*1e6)>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function kc(n,e,t){const i=n.x*e+n.y*t,r=Math.cos(n.a),s=Math.sin(n.a),a=Math.abs(r*e+s*t)*n.w/2+Math.abs(-s*e+r*t)*n.h/2;return[i-a,i+a]}function Xv(n,e){const t=[[Math.cos(n.a),Math.sin(n.a)],[-Math.sin(n.a),Math.cos(n.a)],[Math.cos(e.a),Math.sin(e.a)],[-Math.sin(e.a),Math.cos(e.a)]];for(const[i,r]of t){const s=kc(n,i,r),a=kc(e,i,r);if(s[1]<a[0]||a[1]<s[0])return!1}return!0}function qv(n){const e=Math.cos(n.a),t=Math.sin(n.a);return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([i,r])=>{const s=i*n.w/2,a=r*n.h/2;return[n.x+s*e-a*t,n.y+s*t+a*e]})}function $v(n,e){const{field:t,gw:i,gh:r,W:s,H:a}=n,o=s/i,l=a/r,c=new Map;for(let m=0;m<r-1;m++)for(let g=0;g<i-1;g++){const v=m*i+g,p=t[v],u=t[v+1],S=t[v+i],E=t[v+i+1],x=Math.ceil(Math.min(p,u,S,E)/e),L=Math.floor(Math.max(p,u,S,E)/e);for(let A=x;A<=L;A++){const T=A*e,C=p>=T!=u>=T,b=u>=T!=E>=T,y=S>=T!=E>=T,R=p>=T!=S>=T,O=+C+ +b+ +y+ +R;if(O===0)continue;const N=[v*2,g+(T-p)/(u-p),m],X=[(v+1)*2+1,g+1,m+(T-u)/(E-u)],q=[(v+i)*2,g+(T-S)/(E-S),m+1],W=[v*2+1,g,m+(T-p)/(S-p)];let j=c.get(A);j||c.set(A,j=[]);const H=(ie,ae)=>j.push(ie[0],ae[0],ie[1],ie[2],ae[1],ae[2]);if(O===2){const ie=[C&&N,b&&X,y&&q,R&&W].filter(Boolean);H(ie[0],ie[1])}else(p+u+S+E)/4>=T===p>=T?(H(N,X),H(q,W)):(H(N,W),H(X,q))}}const d=m=>(m+.5)*o,h=m=>a-(m+.5)*l,f=[];for(const[m,g]of c){const v=g.length/6,p=new Map,u=(x,L)=>{const A=p.get(x);A?A.push(L):p.set(x,[L])};for(let x=0;x<v;x++)u(g[x*6],x),u(g[x*6+1],x);const S=new Uint8Array(v),E=(x,L)=>{const A=[];let T=L,C=x;for(;;){const b=(p.get(C)??[]).find(O=>!S[O]&&O!==T);if(b===void 0)break;S[b]=1;const y=g[b*6]===C,R=b*6;A.push(d(y?g[R+4]:g[R+2]),h(y?g[R+5]:g[R+3])),C=y?g[R+1]:g[R],T=b}return{pts:A,edge:C}};for(let x=0;x<v;x++){if(S[x])continue;S[x]=1;const L=x*6,A=E(g[L+1],x),C=A.edge===g[L]?{pts:[]}:E(g[L],x),b=[];for(let O=C.pts.length-2;O>=0;O-=2)b.push(C.pts[O],C.pts[O+1]);const y=[...b,d(g[L+2]),h(g[L+3]),d(g[L+4]),h(g[L+5]),...A.pts],R=[0];for(let O=2;O<y.length;O+=2)R.push(R[R.length-1]+Math.hypot(y[O]-y[O-2],y[O+1]-y[O-1]));f.push({pts:y,cum:R,length:R[R.length-1],k:m})}}return f}function Za(n,e){let t=0,i=n.cum.length-1;for(;i-t>1;){const a=t+i>>1;n.cum[a]<=e?t=a:i=a}const r=n.cum[i]-n.cum[t]||1,s=(e-n.cum[t])/r;return[n.pts[t*2]+(n.pts[i*2]-n.pts[t*2])*s,n.pts[t*2+1]+(n.pts[i*2+1]-n.pts[t*2+1])*s]}const zc=[(n,e)=>{n.beginPath(),n.arc(0,0,e*.46,0,Math.PI*2),n.stroke(),n.save(),n.rotate(.7),n.beginPath(),n.moveTo(0,-e*.3),n.lineTo(e*.1,0),n.lineTo(0,e*.3),n.lineTo(-e*.1,0),n.closePath(),n.fill(),n.restore()},(n,e)=>{n.beginPath(),n.arc(0,-e*.1,e*.3,150*Math.PI/180,390*Math.PI/180),n.lineTo(0,e*.5),n.closePath(),n.stroke(),n.beginPath(),n.arc(0,-e*.1,e*.09,0,Math.PI*2),n.fill()},(n,e)=>{n.beginPath(),n.moveTo(-e*.5,e*.25),n.lineTo(-e*.15,-e*.22),n.lineTo(e*.05,e*.06),n.lineTo(e*.2,-e*.12),n.lineTo(e*.5,e*.25),n.stroke()},(n,e)=>{n.beginPath(),n.moveTo(0,-e*.5),n.lineTo(e*.36,e*.44),n.lineTo(0,e*.22),n.lineTo(-e*.36,e*.44),n.closePath(),n.stroke()},(n,e)=>{n.beginPath(),n.moveTo(0,-e*.45),n.lineTo(0,e*.45),n.moveTo(-e*.16,-e*.28),n.lineTo(0,-e*.45),n.lineTo(e*.16,-e*.28),n.moveTo(-e*.16,e*.28),n.lineTo(0,e*.45),n.lineTo(e*.16,e*.28),n.stroke()},(n,e)=>{n.beginPath(),n.rect(-e*.45,-e*.36,e*.9,e*.72),n.moveTo(-e*.15,-e*.36),n.lineTo(-e*.15,e*.36),n.moveTo(e*.15,-e*.36),n.lineTo(e*.15,e*.36),n.stroke()}];function Yv(n,e,t,i){const{W:r,H:s,glyphDist:a}=n,o=n.cx,l=n.cy,c=Math.min(r,s)/800,d=Wv(e.seed),h=[],f=36*c;t.clearRect(0,0,r,s),i.fillStyle="#000",i.fillRect(0,0,r,s);const m=(u,S=0)=>{const E={...u,w:u.w+S*2,h:u.h+S*2};return!h.some(x=>Xv(E,x))},g=u=>qv(u).every(([S,E])=>S>f&&S<r-f&&E>f&&E<s-f),v=(u,S)=>{const E=Math.cos(u.a),x=Math.sin(u.a);for(let L=-1;L<=1;L+=2/Math.max(2,Math.ceil(u.w/(22*c))))for(const A of[-1,0,1]){const T=L*u.w/2,C=A*u.h/2;if(a(u.x+T*E-C*x,u.y+T*x+C*E)<S)return!1}return!0};if(t.fillStyle=e.textColor,t.strokeStyle=e.textColor,t.lineWidth=1.3*c,t.lineCap="round",t.lineJoin="round",t.textBaseline="middle",e.notes){const u=[],S=()=>zc[Math.floor(d()*zc.length)],E=e.words.length?e.words:[];for(const L of E){const A=15*c;t.font=`700 ${A}px ${fi}`;const T=t.measureText(L).width,C=d()<.7,b=18*c,y=8*c,R=d()<.5,O=S(),N=T+(C?y+b:0);u.push({w:N,h:Math.max(A*1.2,C?b:0),draw:(X,q)=>{const W=X-N/2,j=C&&R?W+b+y:W;t.font=`700 ${A}px ${fi}`,t.textAlign="left",t.fillText(L,j,q),C&&(t.save(),t.translate(R?W+b/2:W+N-b/2,q),O(t,b),t.restore())}})}if(e.caption.trim()){const L=7.5*c;t.font=`700 ${L}px ${fi}`;const A=22,T=[];let C="";for(const R of e.caption.toUpperCase().split(/\s+/))(C+" "+R).trim().length>A?(T.push(C),C=R):C=(C+" "+R).trim();C&&T.push(C);const b=L*1.45,y=Math.max(...T.map(R=>t.measureText(R).width));u.push({w:y,h:b*T.length,draw:(R,O)=>{t.font=`700 ${L}px ${fi}`,t.textAlign="left",T.forEach((N,X)=>t.fillText(N,R-y/2,O-b*(T.length-1)/2+X*b))}})}for(let L=0;L<3;L++){const A=S(),T=20*c;u.push({w:T,h:T,draw:(C,b)=>{t.save(),t.translate(C,b),A(t,T),t.restore()}})}const x=String(10+Math.floor(d()*89));u.push({w:14*c,h:10*c,draw:(L,A)=>{t.font=`700 ${8*c}px ${fi}`,t.textAlign="center",t.fillText(x,L,A)}});for(const L of u)for(let A=0;A<600;A++){const T=d()*Math.PI*2,C=.1+.8*Math.pow(d(),1.15),b=o+Math.cos(T)*C*(r/2-f),y=l+Math.sin(T)*C*(s/2-f),R={x:b,y,w:L.w,h:L.h,a:0};if(!(!g(R)||!m(R,9*c)||!v(R,12*c))){h.push(R),L.draw(b,y);break}}}const p=u=>Math.round(e.baseElevation+u/e.spacing*e.metersPerLine);if(e.spots){const{field:u,gw:S,gh:E}=n,x=4,L=Math.floor(S/x),A=Math.floor(E/x),T=new Float32Array(L*A);for(let O=0;O<A;O++)for(let N=0;N<L;N++)T[O*L+N]=u[O*x*S+N*x];const C=7,b=[];for(let O=C;O<A-C;O++)for(let N=C;N<L-C;N++){const X=T[O*L+N];let q=!0;for(let W=-C;W<=C&&q;W++)for(let j=-C;j<=C;j++)if(T[(O+W)*L+N+j]>X){q=!1;break}q&&b.push({h:X,x:(N*x+.5)/S*r,y:s-(O*x+.5)/E*s})}b.sort((O,N)=>N.h-O.h);const y=10*c;let R=0;for(const O of b){if(R>=4)break;const N=`${p(O.h)}m`;t.font=`700 ${y}px ${fi}`;const X=t.measureText(N).width,q={x:O.x+(X+12*c)/2-6*c,y:O.y,w:X+14*c,h:14*c,a:0};!g(q)||!m(q,30*c)||!v(q,10*c)||(h.push(q),R++,t.save(),t.translate(O.x,O.y),t.beginPath(),t.moveTo(0,-4.5*c),t.lineTo(4.5*c,3.5*c),t.lineTo(-4.5*c,3.5*c),t.closePath(),t.fill(),t.restore(),t.textAlign="left",t.fillText(N,O.x+9*c,O.y))}}if(e.labels){const u=$v(n,e.spacing);u.sort((x,L)=>+(L.k%5===0)-+(x.k%5===0)||L.length-x.length);const S=e.labelSize*c,E=230*c;for(const x of u){const L=x.k%5===0;t.font=`${L?700:400} ${S}px ${fi}`;const A=`${Math.round(e.baseElevation+x.k*e.metersPerLine)}m`,T=t.measureText(A).width;if(x.length<T*1.7)continue;const C=(x.k*7919+Math.floor(x.pts[0]))%97/97;for(let b=T+C*E;b<x.length-T;b+=E)for(const y of[0,.7,-.7,1.4,-1.4]){const R=b+y*T;if(R<T||R>x.length-T)continue;const[O,N]=Za(x,R-T/2),[X,q]=Za(x,R),[W,j]=Za(x,R+T/2);let H=Math.atan2(j-N,W-O);const ie=Math.abs(Math.atan2(j-q,W-X)-Math.atan2(q-N,X-O));if(Math.min(ie,Math.PI*2-ie)>.4)continue;H>Math.PI/2?H-=Math.PI:H<-Math.PI/2&&(H+=Math.PI);const ae={x:X,y:q,w:T+8*c,h:S*1.3,a:H};if(!(!g(ae)||!m(ae,2*c))&&!(e.avoidGlyph&&a(X,q)<S)){h.push(ae),t.save(),t.translate(X,q),t.rotate(H),t.textAlign="center",t.fillText(A,0,0),t.restore();break}}}}i.fillStyle="#fff";for(const u of h)i.save(),i.translate(u.x,u.y),i.rotate(u.a),i.fillRect(-u.w/2-2*c,-u.h/2-1*c,u.w+4*c,u.h+2*c),i.restore()}const or={text:"A",font:"Playfair Display",size:1,posX:0,posY:0,rot:0,skew:0,stretch:1,text2:"",morph:0,outline:!1,outlineW:.012,image:"",imageColor:!1,color:"",strokeColor:"",opacity:.9,grow:0,soft:0,warp:0},Xs={glyphs:[{...or}],effects:[],mode:0,layers:[],bg:{type:0,color:"",line:"",spacing:.05,weight:1,strength:.35},shapeBlend:0,shapeWarpScale:3,shapeWarpSpeed:.15,influence:.3,slope:1,wobble:.15,rough:.32,freq:1.5,warp:.45,drift:.04,seed:.42,spacing:.014,lineWidth:1.1,palette:"Survey",tint:.7,shade:.12,grain:.035,glass:0,glassLight:1,blur:0,animate:!0,details:!0,showLabels:!0,showSpots:!0,showNotes:!0,labelStep:111,labelBase:500,labelSize:9,textAuto:!0,textFill:"#ffffff",words:"RIDGE, BASIN, SUMMIT, BEARING",caption:"LINES OF EQUAL HEIGHT TRACE THE QUIET SHAPE OF THE LAND BENEATH THE LETTER"},vr={"Blank space":{layers:[],glyphs:[{text:"A",font:"Playfair Display",size:1.1,opacity:1}],animate:!0,details:!1},Default:{},hubworks:{glyphs:[{text:"Hubworks",font:"Inter",size:1.855,posX:-.008,posY:.042,rot:0,skew:.36,stretch:.82,text2:"",morph:0}],effects:[{id:"echo",on:!0,opacity:.1,blend:"normal",p:[.0025,.1,6,1],c1:"#ff5a36",c2:"#000000"},{id:"grid",on:!0,opacity:.05,blend:"normal",p:[5,1,4,.36],c1:"#4aa3ff",c2:"#000000"},{id:"pixelate",on:!1,opacity:.07,blend:"normal",p:[10],c1:"#ffffff",c2:"#000000"},{id:"grain",on:!0,opacity:.1,blend:"normal",p:[.04,1.2,1,.2],c1:"#ffffff",c2:"#000000"},{id:"glitch",on:!0,opacity:.46,blend:"normal",p:[.06,4,.8,0],c1:"#ffffff",c2:"#000000"}],mode:1,shapeBlend:0,shapeSoft:0,shapeGrow:-.001,shapeWarp:.315,shapeWarpScale:6.2,shapeWarpSpeed:.195,influence:.53,slope:.25,wobble:.07,rough:.27,freq:2.31,warp:0,drift:.152,seed:3.854,spacing:.03,lineWidth:1.1,palette:"Midnight",tint:.39,shade:.04,grain:.067,glass:0,glassLight:1,blur:0,fill:1,fillAuto:!0,fillColor:"#111111",animate:!0,details:!1,showLabels:!0,showSpots:!0,showNotes:!0,labelStep:111,labelBase:500,labelSize:9,textAuto:!0,textFill:"#ffffff",words:"RIDGE, BASIN, SUMMIT, BEARING",caption:"LINES OF EQUAL HEIGHT TRACE THE QUIET SHAPE OF THE LAND BENEATH THE LETTER"},"Look: Particle sea":{glyphs:[{text:"Tide",font:"Archivo Black",size:1.5,posX:0,posY:0,rot:0,skew:0,stretch:.9,text2:"",morph:0}],look:5,lookA:170,lookB:.55,lookC:.6,lookD:.55,mode:1,palette:"White dots",fill:.9,fillAuto:!1,fillColor:"#4a4d5a",freq:1.6,warp:.5,influence:.3,drift:.07,lineWidth:1.1,grain:0,animate:!0,details:!1},"Look: Ridgeline":{glyphs:[{text:"Hub",font:"Inter",size:1.3,posX:0,posY:-.02,rot:0,skew:0,stretch:1,text2:"",morph:0}],look:1,lookA:64,lookB:1.8,lookC:.8,mode:1,palette:"Survey",fill:.9,fillColor:"#1d1a16",fillAuto:!1,rough:.32,freq:1.8,warp:.4,influence:.45,slope:.4,wobble:.3,lineWidth:1.1,grain:.05,animate:!1,details:!1},"Look: Op-art bands":{glyphs:[{text:"Hub",font:"Archivo Black",size:1.3,posX:0,posY:0,rot:0,skew:0,stretch:1,text2:"",morph:0}],look:2,lookA:.5,mode:0,palette:"Ink",fill:1,spacing:.03,tint:0,rough:.5,freq:2.2,warp:.6,influence:.7,slope:1,wobble:.25,grain:.02,animate:!1,details:!1},"Look: Dungeon":{glyphs:[{text:"Crypt",font:"Archivo Black",size:1.25,posX:0,posY:0,rot:0,skew:0,stretch:1,text2:"",morph:0}],look:3,lookA:8,lookB:1.2,lookC:1.4,lookD:1,mode:1,palette:"Midnight",fill:1,fillAuto:!1,fillColor:"#d4c8b0",rough:.4,freq:2,warp:.5,influence:.45,slope:.5,wobble:.2,grain:.05,animate:!0,details:!1},"Look: Warped grid":{glyphs:[{text:"Hub",font:"Space Grotesk",size:1.3,posX:0,posY:0,rot:0,skew:0,stretch:1,text2:"",morph:0}],look:4,lookA:28,lookB:6,mode:1,palette:"Blueprint",fill:.9,fillAuto:!0,rough:.3,freq:1.6,warp:.4,influence:.5,slope:.8,wobble:.2,lineWidth:.9,grain:.03,animate:!1,details:!1},"R&D Mountain":{text:"R&D",font:"Pacifico",mode:1,size:.8,influence:.27,slope:.27,wobble:.08,rough:.45,freq:2.04,warp:0,drift:.027,seed:3.239,spacing:.028,lineWidth:.9,palette:"Survey",tint:.26,shade:0,grain:.05,fill:.75,animate:!0},"Cyclopathic Few":{text:"cyclopathic few",font:"Roboto Mono",mode:1,size:.8,influence:.27,slope:.27,wobble:.08,rough:.12,freq:2.04,warp:0,drift:.152,seed:3.854,spacing:.03,lineWidth:1.1,palette:"Midnight",tint:.39,shade:.04,grain:.067,fill:1,animate:!0}},Kv=Object.keys(vr),Gu="typographic-topography:presets";function jv(){try{return JSON.parse(localStorage.getItem(Gu)??"{}")}catch{return{}}}function Gc(n){try{return localStorage.setItem(Gu,JSON.stringify(n)),!0}catch{return!1}}function hl(n){const{text:e,font:t,size:i,posX:r,posY:s,glyphs:a,fill:o,fillAuto:l,fillColor:c,shapeSoft:d,shapeGrow:h,shapeWarp:f,look:m,lookA:g,lookB:v,lookC:p,lookD:u,bg:S,...E}=n,x={};e!==void 0&&(x.text=e),t!==void 0&&(x.font=t),i!==void 0&&(x.size=i),r!==void 0&&(x.posX=r),s!==void 0&&(x.posY=s);const L=a&&a.length?a:[x],A={opacity:o??0,color:l===!1&&c?c:"",soft:d??0,grow:h??0,warp:f??0},T={...structuredClone(Xs),...structuredClone(E)},C=dl(T),b=E.layers?structuredClone(E.layers).map(y=>({...Hc(y.look??0,C),...y,...y.look===3&&(y.a>30||y.b>2)?{a:8,b:1,c:1,d:1}:{}})):[{...Hc(m??0,C),...Zv(g,v,p,u)}];return{...T,layers:b,bg:{...Xs.bg,...S},glyphs:structuredClone(L).map(y=>({...or,...A,...y}))}}const qs={0:[0,0,0,0],1:[64,1.8,.8,0],2:[.5,0,0,0],3:[8,1,1,1],4:[28,6,0,0],5:[170,.55,.6,.55]};function dl(n){const{mode:e,influence:t,slope:i,rough:r,freq:s,warp:a,drift:o,seed:l,spacing:c,lineWidth:d,tint:h,shade:f}=n;return{mode:e,influence:t,slope:i,rough:r,freq:s,warp:a,drift:o,seed:l,spacing:c,lineWidth:d,tint:h,shade:f,palette:""}}function Hc(n,e=dl(Xs)){const[t,i,r,s]=qs[n]??qs[0];return{look:n,a:t,b:i,c:r,d:s,x0:0,y0:0,x1:1,y1:1,size:"full",react:!0,blend:0,opacity:1,...e}}function Zv(n,e,t,i){const r={};return n!==void 0&&(r.a=n),e!==void 0&&(r.b=e),t!==void 0&&(r.c=t),i!==void 0&&(r.d=i),r}const Hu="typographic-topography:layer-presets";function Jv(){try{return JSON.parse(localStorage.getItem(Hu)??"{}")}catch{return{}}}function Vc(n){try{return localStorage.setItem(Hu,JSON.stringify(n)),!0}catch{return!1}}const P=hl(vr["Blank space"]),Un=new zv,Vu=Array.from({length:nt},()=>new Be),Wu=new Array(nt).fill(1),_r=new Array(nt).fill(1),Xu=new Array(nt).fill(0),qu=new Array(nt).fill(0),$u=new Array(nt).fill(0),Yu=new Array(nt).fill(0),Ku=new Array(nt).fill(1),ju=new Array(nt).fill(0),Zu=Array.from({length:nt},(n,e)=>e),Ju=Array.from({length:nt},()=>new qe),Qu=Array.from({length:nt},()=>new qe),eh=Array.from({length:nt},()=>new pt(1,0,0,1)),ei=new Array(nt).fill(-1),Qi=new Array(nt).fill(0);let _t=0,be=-1,Ze=-1,Ft=-1;const ln=document.getElementById("view"),Qe=new q0({canvas:ln,antialias:!1,preserveDrawingBuffer:!0});Qe.setPixelRatio(Math.min(window.devicePixelRatio,2));const ra=new Yr,lr=new Cu(-1,1,1,-1,0,1),Vi=n=>new qe(n),$={uRes:{value:new Be(1,1)},uTime:{value:0},uFromArr:{value:Un.fromTex},uToArr:{value:Un.toTex},uCount:{value:0},uGPos:{value:Vu},uGSize:{value:Wu},uGMorph:{value:_r},uGXform:{value:eh},uGOut:{value:Xu},uBlend:{value:P.shapeBlend},uGSoft:{value:qu},uGGrow:{value:$u},uGWarp:{value:Yu},uGFill:{value:Ju},uGStroke:{value:Qu},uGOp:{value:Ku},uImgArr:{value:Un.imgTex},uGImg:{value:ju},uGOrder:{value:Zu},uShapeWarpScale:{value:P.shapeWarpScale},uShapeWarpSpeed:{value:P.shapeWarpSpeed},uMode:{value:P.mode},uMarks:{value:0},uReact:{value:1},uLook:{value:0},uLookA:{value:0},uLookB:{value:0},uLookC:{value:0},uLookD:{value:0},uHeightTex:{value:null},uInfluence:{value:P.influence},uSlope:{value:P.slope},uWobble:{value:P.wobble},uRough:{value:P.rough},uFreq:{value:P.freq},uWarp:{value:P.warp},uDrift:{value:P.drift},uSeed:{value:P.seed},uSpacing:{value:P.spacing},uLineW:{value:P.lineWidth},uTint:{value:P.tint},uShade:{value:P.shade},uGrain:{value:P.grain},uMask:{value:null},uMaskOn:{value:0},uOutputH:{value:0},uPaper:{value:Vi("#000")},uInk:{value:Vi("#000")},uIndex:{value:Vi("#000")},uLow:{value:Vi("#000")},uMid:{value:Vi("#000")},uHigh:{value:Vi("#000")}},Kr={uTime:$.uTime,uFromArr:$.uFromArr,uToArr:$.uToArr,uCount:$.uCount,uGPos:$.uGPos,uGSize:$.uGSize,uGMorph:$.uGMorph,uGXform:$.uGXform,uGOut:$.uGOut,uBlend:$.uBlend,uGSoft:$.uGSoft,uGGrow:$.uGGrow,uGWarp:$.uGWarp,uGFill:$.uGFill,uGStroke:$.uGStroke,uGOp:$.uGOp,uImgArr:$.uImgArr,uGImg:$.uGImg,uGOrder:$.uGOrder,uReact:$.uReact,uShapeWarpScale:$.uShapeWarpScale,uShapeWarpSpeed:$.uShapeWarpSpeed},Qv=new yt({uniforms:$,vertexShader:Jt,fragmentShader:hv,transparent:!0});ra.add(new Nt(new Bn(2,2),Qv));const cr=document.createElement("canvas"),Wc=cr.getContext("2d"),$s=document.createElement("canvas"),Ja=$s.getContext("2d"),fl=new Fu($s);$.uMask.value=fl;const jr=new Fu(cr),ur=new kt(1,1,{depthBuffer:!1}),ti={uRes:$.uRes,uScene:{value:ur.texture},uOverlay:{value:jr},uOverlayOn:{value:0},uBlurTex:{value:null},uBlur:{value:P.blur},uGlass:{value:P.glass},uGlassLight:{value:P.glassLight},...Kr},th=new Yr;th.add(new Nt(new Bn(2,2),new yt({uniforms:ti,vertexShader:Jt,fragmentShader:dv})));const nh=Qe.extensions.has("EXT_color_buffer_float")||Qe.extensions.has("EXT_color_buffer_half_float"),pl=()=>new kt(1,1,{type:nh?si:un,depthBuffer:!1,minFilter:St,magFilter:St}),Fr=pl(),bi=pl(),$o=pl();ti.uBlurTex.value=bi.texture;const Kt={down:new yt({uniforms:{uRes:$.uRes,uOutRes:{value:new Be},uScene:{value:ur.texture},uOverlay:{value:jr},uOverlayOn:ti.uOverlayOn,...Kr},vertexShader:Jt,fragmentShader:fv}),box:new yt({uniforms:{uSrc:{value:Fr.texture},uSrcRes:{value:new Be},uOutRes:{value:new Be}},vertexShader:Jt,fragmentShader:pv}),gauss:new yt({uniforms:{uSrc:{value:null},uOutRes:{value:new Be},uDir:{value:new Be},uSigma:{value:1}},vertexShader:Jt,fragmentShader:mv})},ih=new Nt(new Bn(2,2),Kt.down),rh=new Yr;rh.add(ih);function cn(n,e){var t,i;ih.material=n,(i=(t=n.uniforms.uOutRes)==null?void 0:t.value)==null||i.set(e.width,e.height),Qe.setRenderTarget(e),Qe.render(rh,lr)}function e_(){cn(Kt.down,Fr),Kt.box.uniforms.uSrcRes.value.set(Fr.width,Fr.height),cn(Kt.box,bi);const n=P.blur*P.blur*.035*$.uRes.value.y/4;Kt.gauss.uniforms.uSigma.value=n,Kt.gauss.uniforms.uSrc.value=bi.texture,Kt.gauss.uniforms.uDir.value.set(1,0),cn(Kt.gauss,$o),Kt.gauss.uniforms.uSrc.value=$o.texture,Kt.gauss.uniforms.uDir.value.set(0,1),cn(Kt.gauss,bi)}const Ys=()=>new kt(1,1,{depthBuffer:!1,minFilter:St,magFilter:St}),Yi=[Ys(),Ys()];let sa=!1;const Xc=new yt({uniforms:{uRes:$.uRes,uScene:{value:ur.texture},uOverlay:{value:jr},uOverlayOn:{value:0}},vertexShader:Jt,fragmentShader:gv}),qc=new Map;function sh(n){let e=qc.get(n.id);return e||(e=new yt({uniforms:{uRes:$.uRes,uPrev:{value:null},uOpacity:{value:1},uLayerBlend:{value:0},uA:{value:new pt},uB:{value:new pt},uC1:{value:new G},uC2:{value:new G},...Kr},vertexShader:Jt,fragmentShader:Tv(n)}),qc.set(n.id,e)),e}const $c=(n,e)=>{const t=parseInt(n.slice(1),16)||0;return e.set((t>>16&255)/255,(t>>8&255)/255,(t&255)/255)},t_={normal:0,add:1,multiply:2,screen:3,overlay:4,difference:5};function ah(n,e,t){const i=n.uniforms,r=e.p;i.uPrev.value=t,i.uOpacity.value=e.opacity,i.uLayerBlend.value=t_[e.blend]??0,i.uA.value.set(r[0]??0,r[1]??0,r[2]??0,r[3]??0),i.uB.value.set(r[4]??0,r[5]??0,r[6]??0,r[7]??0),$c(e.c1,i.uC1.value),$c(e.c2,i.uC2.value)}function n_(){const n=P.effects.filter(t=>t.on&&kr.some(i=>i.id===t.id));if(!n.length)return null;Xc.uniforms.uOverlayOn.value=sa?1:0,cn(Xc,Yi[0]);let e=0;for(const t of n){const i=kr.find(s=>s.id===t.id),r=sh(i);ah(r,t,Yi[e].texture),cn(r,Yi[1-e]),e=1-e}return Yi[e].texture}let wn=null;const oh=new $0(new Uint8Array([0,0,0,255]),1,1);oh.needsUpdate=!0;function i_(){const n=$.uRes.value,e=Math.max(1,Math.ceil(n.x/2)),t=Math.max(1,Math.ceil(n.y/2));(!wn||wn.width!==e||wn.height!==t)&&(wn==null||wn.dispose(),wn=new kt(e,t,{type:si,depthBuffer:!1,minFilter:St,magFilter:St}));const i=n.clone();n.set(e,t),$.uHeightTex.value=oh,$.uOutputH.value=1,Qe.setRenderTarget(wn),Qe.render(ra,lr),$.uOutputH.value=0,n.copy(i),$.uHeightTex.value=wn.texture}let qi=null,Yo=0,Wi=0,jn=0,Ko=!0,pi=null;const Ks=new Yr,vi={uBgColor:{value:new qe("#000")},uBgLine:{value:new qe("#000")},uBgType:{value:0},uBgSpacing:{value:.05},uBgWeight:{value:1},uBgStrength:{value:.35}},lh=n=>new yt({uniforms:{uRes:$.uRes,uPaper:$.uPaper,uGrain:$.uGrain,uPattern:{value:n},...vi,...Kr},vertexShader:Jt,fragmentShader:Mv,depthTest:!1,depthWrite:!1}),zr=new Nt(new Bn(2,2),lh(0));zr.renderOrder=0;zr.frustumCulled=!1;Ks.add(zr);const ch=new Yr;ch.add(new Nt(new Bn(2,2),lh(1)));const As=new yt({uniforms:{uState:{value:null},uOutRes:{value:new Be},uDt:{value:0},uAspect:{value:1},uLookB:$.uLookB,uLookC:$.uLookC,uLookD:$.uLookD,uDrift:$.uDrift,uSeed:$.uSeed,uFreq:$.uFreq,uWarp:$.uWarp,uInfluence:$.uInfluence,...Kr},vertexShader:Jt,fragmentShader:_v}),r_=new yt({uniforms:{uSeed:$.uSeed,uOutRes:{value:new Be}},vertexShader:Jt,fragmentShader:vv}),Ei=new yt({uniforms:{uState:{value:null},uRes:$.uRes,uPx:{value:2},uTime:$.uTime,uSide:{value:1},uDotColor:{value:$.uIndex.value}},vertexShader:xv,fragmentShader:yv,transparent:!0,depthTest:!1,depthWrite:!1}),Zr=()=>P.layers.find(n=>n.look===In);function s_(){var r;const n=Math.ceil(Math.sqrt(Math.max(10,Math.round(((r=Zr())==null?void 0:r.a)??qs[In][0]))*1e3));if(qi&&n===Yo)return;qi==null||qi.forEach(s=>s.dispose()),qi=[0,1].map(()=>new kt(n,n,{type:on,depthBuffer:!1,minFilter:Tt,magFilter:Tt})),Yo=n,Ko=!0;const e=n*n,t=new Float32Array(e*2);for(let s=0;s<e;s++)t[s*2]=(s%n+.5)/n,t[s*2+1]=(Math.floor(s/n)+.5)/n;const i=new On;i.setAttribute("position",new Zt(new Float32Array(e*3),3)),i.setAttribute("ref",new Zt(t,2)),pi&&(Ks.remove(pi),pi.geometry.dispose()),pi=new K0(i,Ei),pi.frustumCulled=!1,pi.renderOrder=1,Ks.add(pi)}window.__warmSea=n=>{const e=jn;jn=1/30;for(let t=0;t<n;t++)Hr+=jn,$.uTime.value=Hr,uh();jn=e};function uh(){var e;s_();const n=qi;Ko&&(cn(r_,n[0]),Ko=!1,Wi=0),jn>0&&(As.uniforms.uState.value=n[Wi].texture,As.uniforms.uDt.value=Math.min(jn,.05),As.uniforms.uAspect.value=$.uRes.value.x/$.uRes.value.y,cn(As,n[1-Wi]),Wi=1-Wi),Ei.uniforms.uState.value=n[Wi].texture,Ei.uniforms.uSide.value=Yo,Ei.uniforms.uPx.value=Math.max(1,(((e=Zr())==null?void 0:e.lineWidth)??1.1)*2.1*($.uRes.value.y/800))}const Rr=new Map;function hh(n,e,t){const i=`${n}${e}x${t}`;let r=Rr.get(i);if(!r){if(Rr.size>8)for(const[s,a]of Rr)a.dispose(),Rr.delete(s);r=new kt(e,t,{depthBuffer:!1,minFilter:St,magFilter:St}),Rr.set(i,r)}return r}const a_=(n,e)=>hh("layer",n,e),o_=(n,e)=>hh("acc",n,e),Cr=new yt({uniforms:{uBase:{value:null},uLayer:{value:null},uOutRes:{value:new Be},uBlendMode:{value:0},uOpacity:{value:1}},vertexShader:Jt,fragmentShader:Sv}),Yc=new yt({uniforms:{uSrc:{value:null},uOutRes:{value:new Be}},vertexShader:Jt,fragmentShader:bv});function jo(n,e=1){$.uMarks.value=n.blend===1?1:0,$.uReact.value=n.react===!1?0:1,$.uLook.value=n.look,$.uLookA.value=n.a,$.uLookB.value=n.b,$.uLookC.value=n.c,$.uLookD.value=n.d,$.uMode.value=n.mode,$.uInfluence.value=n.influence,$.uSlope.value=n.slope,$.uRough.value=n.rough,$.uFreq.value=n.freq,$.uWarp.value=n.warp,$.uDrift.value=n.drift,$.uSeed.value=n.seed,$.uSpacing.value=n.spacing,$.uLineW.value=n.lineWidth*e,$.uTint.value=n.tint,$.uShade.value=n.shade,Gr(n.palette||P.palette)}function dh(n,e=!0,t=1){const i=Zr();i&&(jo(i,t),e&&uh());const r=Qe.autoClear;Qe.autoClear=!1,Qe.setRenderTarget(n),n.scissorTest=!1,Qe.render(ch,lr);const s=n.width,a=n.height;for(const o of gr(P.layers)){const l=P.layers[o];if(l.look===In&&l!==i)continue;jo(l,t),l.look===1&&nh&&i_();const c=l.blend===1,d=l.blend===0&&l.opacity>=.999,h=d?n:a_(s,a);if(!d){Qe.setRenderTarget(h),h.scissorTest=!1;const f=Qe.getClearAlpha();Qe.setClearAlpha(0),Qe.clear(),Qe.setClearAlpha(f)}if(h.scissor.set(Math.floor(l.x0*s),Math.floor((1-l.y1)*a),Math.ceil((l.x1-l.x0)*s),Math.ceil((l.y1-l.y0)*a)),h.scissorTest=!0,Qe.setRenderTarget(h),zr.visible=!c,Qe.render(l.look===In?Ks:ra,lr),zr.visible=!0,h.scissorTest=!1,!d){const f=o_(s,a);Cr.uniforms.uBase.value=n.texture,Cr.uniforms.uLayer.value=h.texture,Cr.uniforms.uBlendMode.value=l.blend,Cr.uniforms.uOpacity.value=l.opacity,cn(Cr,f),Yc.uniforms.uSrc.value=f.texture,cn(Yc,n)}}Qe.autoClear=r,$.uReact.value=1,Gr(P.palette)}function fh(){dh(ur);const n=n_(),e=n??ur.texture;ti.uScene.value=e,Kt.down.uniforms.uScene.value=e,ti.uOverlayOn.value=sa&&!n?1:0,P.blur>.001&&e_(),Qe.setRenderTarget(null),Qe.render(th,lr)}function ph(){Qe.setSize(window.innerWidth,window.innerHeight,!1);const n=Qe.getDrawingBufferSize(new Be);$.uRes.value.copy(n),fl.dispose(),jr.dispose(),ur.setSize(n.x,n.y);const e=Math.max(1,Math.ceil(n.x/2)),t=Math.max(1,Math.ceil(n.y/2));Fr.setSize(e,t),bi.setSize(Math.max(1,Math.ceil(e/2)),Math.max(1,Math.ceil(t/2))),$o.setSize(bi.width,bi.height),Yi[0].setSize(n.x,n.y),Yi[1].setSize(n.x,n.y),cr.width=$s.width=n.x,cr.height=$s.height=n.y}window.addEventListener("resize",ph);ph();const hr=[...Gv];let aa=0;const l_=.9,Pr=new Map;function Kc(n,e){const t=`${n.family}|${e}`;let i=Pr.get(t);return i||(i=Nv(e,n),Pr.set(t,i),Pr.size>32&&Pr.delete(Pr.keys().next().value)),i}let jc=0;function ri(n){let e=document.getElementById("toast");e||(e=document.createElement("div"),e.id="toast",document.body.appendChild(e)),e.textContent=n,e.classList.add("show"),window.clearTimeout(jc),jc=window.setTimeout(()=>e==null?void 0:e.classList.remove("show"),4200)}const c_=n=>{let e=5381;for(let t=0;t<n.length;t++)e=(e<<5)+e+n.charCodeAt(t)|0;return`${n.length}:${e}`},Lr=new Map;async function u_(n,e){const t=P.glyphs[n],i=++Qi[n],r=`img|${c_(t.image)}`;let s=Lr.get(r);if(!s){try{s=await Bv(t.image)}catch{return i!==Qi[n]||!P.glyphs[n]?void 0:(ri("That image could not be read, so the glyph went back to text"),t.image="",vn(n,e))}Lr.set(r,s),Lr.size>8&&Lr.delete(Lr.keys().next().value)}i!==Qi[n]||!P.glyphs[n]||(Un.set(n,s.sdf,qo(s.sdf)??{...ul},e),Un.setImage(n,s.rgba),_r[n]=e?0:1,ei[n]=e?performance.now():-1,aa++)}async function vn(n,e){const t=P.glyphs[n];if(!t)return;if(t.image)return u_(n,e);const i=t.text||" ",r=(t.text2??"").trim(),s=hr.find(c=>c.family===t.font)??hr[0],a=++Qi[n];if(await Hv(s,i+r),a!==Qi[n]||!P.glyphs[n])return;const o=Kc(s,i),l=qo(o)??{...ul};if(r){const c=Kc(s,r);Un.setPair(n,o,c,kv(l,qo(c)??l)),ei[n]=-1}else Un.set(n,o,l,e),_r[n]=e?0:1,ei[n]=e?performance.now():-1;aa++}function ml(n){for(let e=P.glyphs.length;e<nt;e++)Qi[e]++,Un.clear(e),_r[e]=1,ei[e]=-1;return Promise.all(P.glyphs.map((e,t)=>vn(t,n)))}const mh=()=>ei.some(n=>n>=0);function Gr(n){const e=Nn[n]??Nn[P.palette];$.uPaper.value.set(e.paper),$.uInk.value.set(e.ink),$.uIndex.value.set(e.index),$.uLow.value.set(e.low),$.uMid.value.set(e.mid),$.uHigh.value.set(e.high)}function oa(){const n=Nn[P.palette];Gr(P.palette),P.textAuto&&(P.textFill=n.index),document.body.style.background=n.paper}function gh(n){const e=n.rot*Math.PI/180,t=Math.cos(e),i=Math.sin(e),r=n.skew,s=n.stretch,a=[t*s,t*r-i,i*s,i*r+t],o=a[0]*a[3]-a[1]*a[2]||1;return{f:a,inv:[a[3]/o,-a[1]/o,-a[2]/o,a[0]/o]}}const gl=n=>n.color||Nn[P.palette].index,vh=n=>n.strokeColor||gl(n);function js(){const n=Math.min(P.glyphs.length,nt),e=t=>P.glyphs[t].z??t;return Array.from({length:n},(t,i)=>i).sort((t,i)=>e(t)-e(i)||t-i)}function h_(n){if(!P.glyphs[be])return;const t=js(),i=t.indexOf(be),r=n==="back"?0:n==="front"?t.length-1:Math.min(Math.max(i+(n==="up"?1:-1),0),t.length-1);t.splice(i,1),t.splice(r,0,be),t.forEach((s,a)=>{P.glyphs[s].z=a}),ft()}function vl(){ti.uGlass.value=P.glass,ti.uGlassLight.value=P.glassLight,ti.uBlur.value=P.blur;const n=Math.min(P.glyphs.length,nt);$.uCount.value=n,js().forEach((t,i)=>{Zu[i]=t});for(let t=0;t<n;t++){const i=P.glyphs[t];Vu[t].set(i.posX,i.posY),Wu[t]=i.size;const r=gh(i).inv;eh[t].set(r[0],r[1],r[2],r[3]),Xu[t]=i.outline?Math.max(i.outlineW,5e-4):0,qu[t]=i.soft,$u[t]=i.grow,Yu[t]=i.warp,Ku[t]=i.opacity,ju[t]=i.image&&i.imageColor&&!i.outline?1:0,Ju[t].set(gl(i)),Qu[t].set(vh(i)),(i.text2??"").trim()&&(_r[t]=Math.min(Math.max(i.morph,0),1))}const e=P.bg;vi.uBgColor.value.set(e.color||Nn[P.palette].paper),vi.uBgLine.value.set(e.line||Nn[P.palette].ink),vi.uBgType.value=e.type,vi.uBgSpacing.value=e.spacing,vi.uBgWeight.value=e.weight*($.uRes.value.y/800),vi.uBgStrength.value=e.strength,$.uBlend.value=P.shapeBlend,$.uShapeWarpScale.value=P.shapeWarpScale,$.uShapeWarpSpeed.value=P.shapeWarpSpeed,$.uWobble.value=P.wobble,$.uGrain.value=P.grain}window.__params=P;const hn=new cl({title:"Typographic Topography",width:304});hn.domElement.classList.add("ui-modern");const _h={glyph:0};hn.domElement.addEventListener("click",n=>{const e=n.target.closest("button");e&&e.blur()});const ft=()=>{_h.glyph=_t,hn.controllersRecursive().forEach(n=>n.updateDisplay()),Jr()},Wt=(n,e,t)=>Math.round(Math.min(Math.max(n,e),t)*1e3)/1e3,Yn=jv(),Zo=()=>[...Kv,...Object.keys(Yn).filter(n=>!(n in vr))],pn={preset:"Blank space",name:""};function xh(n){Object.assign(P,hl(vr[n]??Yn[n]));for(const e of P.glyphs)hr.some(t=>t.family===e.font)||(e.font=or.font);P.glyphs=P.glyphs.slice(0,nt),_t=0,be=-1,Ze=-1,Ft=-1,oa(),ni(),ft(),es.rebuild(),bh(),Jr(),ft(),ml(!0)}const xr=(n,e)=>(n.domElement.title=e,n),Qa=xr(hn.add(pn,"preset",Zo()).name("Preset").onChange(xh),"Start from a saved look");xr(hn.add(P,"animate").name("Motion"),"Pause to see map labels, resume to animate");const d_={shuffle:()=>ha.randomize()};xr(hn.add(d_,"shuffle").name("Shuffle terrain & palette"),"Random seed, scale and palette for the selected base layer, or all of them (space re-rolls the seed)");const _l=hn.addFolder("Save presets").close(),Zc=_l.add(pn,"name").name("Name"),yh={save(){var t;let n=pn.name.trim();if(!n){(t=Zc.domElement.querySelector("input"))==null||t.focus();return}n in vr&&(n+=" (mine)"),Yn[n]=structuredClone(P);const e=Gc(Yn);Qa.options(Zo()),pn.preset=n,pn.name="",Qa.updateDisplay(),Zc.updateDisplay(),e||ri("Browser storage is full or blocked, so this preset only lasts until you reload (pictures make presets large)")},remove(){pn.preset in Yn&&(delete Yn[pn.preset],Gc(Yn),pn.preset="Default",Qa.options(Zo()),xh("Default"))}};_l.add(yh,"save").name("Save current look");_l.add(yh,"remove").name("Delete selected preset");const wi=()=>P.glyphs[_t]??P.glyphs[0],f_=n=>{const e=P.glyphs[n],t=e.text.trim()||"·",i=e.image?`▣ ${t}`:t;return`${n+1}: ${i.length>12?i.slice(0,11)+"…":i}`};function ni(){const n={};P.glyphs.forEach((e,t)=>n[f_(t)]=t),m_.options(n),Jr(),ft()}const er={add(){if(P.glyphs.length>=nt)return;const n=wi();P.glyphs.push({...n,text:String.fromCharCode(65+P.glyphs.length%26),size:Wt(n.size*.6,.2,4),opacity:n.opacity<.3?.9:n.opacity,posX:Wt(n.posX+.3,-1.2,1.2),posY:Wt(n.posY-.25,-1.2,1.2)}),_t=be=P.glyphs.length-1,vn(_t,!1),ni()},remove(){P.glyphs.length<=1||(P.glyphs.splice(_t,1),_t=Math.min(_t,P.glyphs.length-1),be=-1,ml(!1),ni())},addImage(){Bs.click()},useText(){const n=wi();n.image&&(n.image="",n.text="A",vn(_t,!0),ni())},reset(){const n=wi(),e=hl(vr[pn.preset]??Yn[pn.preset]??{}).glyphs[_t];n.posX=0,n.posY=0,n.rot=0,n.skew=0,n.stretch=1,n.outline=(e==null?void 0:e.outline)??!1,n.outlineW=(e==null?void 0:e.outlineW)??or.outlineW,n.size=(e==null?void 0:e.size)??or.size,ft()}},Mh=[],la=(n,e)=>(Mh.push({show:t=>n.show(t),when:e}),n);function Jr(){for(const n of Mh)n.show(n.when())}const p_=(...n)=>P.layers.some(e=>n.includes(e.look)),Sh=()=>p_(Ou),ca=hn.addFolder("Glyph"),m_=la(ca.add(_h,"glyph",{"1: R&D":0}).name("Editing").onChange(n=>{_t=n,be=n,ft()}),()=>P.glyphs.length>1);ca.add(er,"add").name("+ Add text glyph");xr(ca.add(er,"addImage").name("+ Add image…"),"A PNG with a transparent background; its silhouette becomes a glyph. You can also drop a file on the canvas");la(xr(ca.add(P,"shapeBlend",0,1,.005).name("Blend glyphs"),"Fuses neighbouring glyphs into one shape (shared by all)"),()=>P.glyphs.length>1);const Qr=hn.addFolder("Colour & finish").close();Qr.add(P,"palette",Ws).name("Palette").onChange(()=>{oa(),ft()});Qr.add(P,"grain",0,.2,.001).name("Grain");Qr.add(P,"blur",0,1,.01).name("Background blur");Qr.add(P,"glass",0,1,.01).name("Glass").onChange(()=>Jr());la(Qr.add(P,"glassLight",0,1,.01).name("Glass light"),()=>P.glass>.001);const Ai=la(hn.addFolder("Map labels (when paused)").close(),Sh),ua=()=>{P.details=P.showLabels||P.showSpots||P.showNotes};Ai.add(P,"showLabels").name("Elevation numbers").onChange(ua);Ai.add(P,"showSpots").name("Peak heights").onChange(ua);Ai.add(P,"showNotes").name("Notes & icons").onChange(ua);Ai.add(P,"labelSize",6,16,.5).name("Size");Ai.add(P,"words").name("Words");Ai.add(P,"caption").name("Caption");xr(Ai.addColor(P,"textFill").name("Label colour").onChange(()=>{P.textAuto=!1}),"Follows the palette until you pick your own");function bh(){P.details||(P.showLabels=P.showSpots=P.showNotes=!1),ua()}bh();const ha={randomize(){const n=P.layers[Ze]?[P.layers[Ze]]:P.layers;for(const e of n)e.seed=Math.random()*10,e.freq=1.2+Math.random()*3.5,e.warp=Math.random()*1.2,e.rough=.3+Math.random()*.8,e.spacing=.01+Math.random()*.025;P.palette=Ws[Math.floor(Math.random()*Ws.length)],oa(),ft()},savePNG(){jn=0,fh(),ln.toBlob(n=>{var t;if(!n)return;const e=document.createElement("a");e.href=URL.createObjectURL(n),e.download=`topography-${((t=P.glyphs[0])==null?void 0:t.text)||"glyph"}.png`,e.click(),URL.revokeObjectURL(e.href)})},uploadFont(){ks.click()},copySettings(){const n=JSON.stringify(P,null,2);navigator.clipboard.writeText(n).then(()=>console.info(`Settings copied:
`+n),()=>console.info(n))}},xl=hn.addFolder("Export & tools").close();xl.add(ha,"savePNG").name("Save image (PNG)");xl.add(ha,"copySettings").name("Copy settings (JSON)");xl.add(ha,"uploadFont").name("Upload font…");Jr();const Bs=document.getElementById("image-file");async function Eh(n){if(P.glyphs.length>=nt){ri(`Up to ${nt} glyphs at once`);return}let e;try{e=await Ov(n)}catch{ri("That file could not be read as an image");return}const t=wi(),i=P.glyphs.length===1;P.glyphs.push({...or,text:n.name.replace(/\.[^.]+$/,"").slice(0,24)||"image",font:t.font,image:e.dataUrl,imageColor:!0,opacity:1,size:i?1.1:Wt(t.size*.8,.2,4),posX:i?0:Wt(t.posX+.3,-1.2,1.2),posY:i?0:Wt(t.posY-.25,-1.2,1.2)}),_t=be=P.glyphs.length-1,vn(_t,!1),ni(),ft()}Bs.addEventListener("change",async()=>{for(const n of Array.from(Bs.files??[]))await Eh(n);Bs.value=""});window.addEventListener("dragover",n=>{var e;(e=n.dataTransfer)!=null&&e.types.includes("Files")&&n.preventDefault()});window.addEventListener("drop",async n=>{var t;const e=Array.from(((t=n.dataTransfer)==null?void 0:t.files)??[]).filter(i=>i.type.startsWith("image/"));if(e.length){n.preventDefault();for(const i of e)await Eh(i)}});const ks=document.getElementById("font-file");ks.addEventListener("change",async()=>{var t;const n=(t=ks.files)==null?void 0:t[0];if(!n)return;const e=await Vv(n,hr.length);hr.push(e),wi().font=e.family,ft(),ks.value="",vn(_t,!0)});window.addEventListener("keydown",n=>{const e=n.target;if(!(e.tagName==="INPUT"||e.tagName==="SELECT"||e.tagName==="TEXTAREA")&&!(n.ctrlKey||n.metaKey||n.altKey||n.key.length!==1)){if(n.preventDefault(),n.key===" "){for(const t of P.layers[Ze]?[P.layers[Ze]]:P.layers)t.seed=Math.random()*10;ft();return}wi().image||(wi().text=n.key,vn(_t,!0),ni())}});const wh=Qe.extensions.has("EXT_color_buffer_float");wh||console.warn("EXT_color_buffer_float missing: detail layer disabled");let Tn=null,Zs="",Rs="",Jc=0,eo=!1;const Qc=n=>n.reduce((e,t)=>e+t,0)/Math.max(n.length,1);function eu(){sa=!1,$.uMaskOn.value=0,Zs=""}function Th(){const n=$.uRes.value;return`${JSON.stringify({...P,animate:!1,glass:0,glassLight:0,blur:0,effects:[]})}|${n.x}x${n.y}|${Hr.toFixed(4)}|${aa}`}const Cs=document.createElement("canvas"),Ps=document.createElement("canvas"),Ls=document.createElement("canvas");function g_(n,e,t,i){Ls.width=t,Ls.height=i;const r=Ls.getContext("2d"),s=P.layers[n[e]];r.fillRect(s.x0*t,s.y0*i,(s.x1-s.x0)*t,(s.y1-s.y0)*i),r.globalCompositeOperation="destination-out";for(const a of n.slice(e+1)){const o=P.layers[a];r.fillRect(o.x0*t,o.y0*i,(o.x1-o.x0)*t,(o.y1-o.y0)*i)}return Ls}async function v_(n){if(!eo){eo=!0;try{if(await Promise.all(["400","700"].map(l=>document.fonts.load(`${l} 12px "JetBrains Mono"`).catch(()=>[]))),n!==Th())return;const e=cr.width,t=cr.height,i=Math.min(1,1100/Math.max(e,t)),r=Math.round(e*i),s=Math.round(t*i);(!Tn||Tn.width!==r||Tn.height!==s)&&(Tn==null||Tn.dispose(),Tn=new kt(r,s,{type:on,format:Vt,depthBuffer:!1,minFilter:Tt,magFilter:Tt})),vl();const a=Math.min(e,t);Cs.width=Ps.width=e,Cs.height=Ps.height=t,Wc.clearRect(0,0,e,t),Ja.fillStyle="#000",Ja.fillRect(0,0,e,t);const o=gr(P.layers);for(let l=0;l<o.length;l++){const c=P.layers[o[l]];if(c.look!==Ou)continue;jo(c),Gr(P.palette),$.uReact.value=c.react===!1?0:1;const d=$.uRes.value.clone();$.uRes.value.set(r,s),$.uOutputH.value=1,Qe.setRenderTarget(Tn),Qe.render(ra,lr),Qe.setRenderTarget(null),$.uOutputH.value=0,$.uRes.value.copy(d),$.uReact.value=1;const h=new Float32Array(r*s*4);Qe.readRenderTargetPixels(Tn,0,0,r,s,h);const f=new Float32Array(r*s),m=new Float32Array(r*s);for(let p=0;p<f.length;p++)f[p]=h[p*4],m[p]=h[p*4+1];const g=(p,u)=>{const S=Math.min(r-1,Math.max(0,Math.floor(p/e*r))),E=Math.min(s-1,Math.max(0,Math.floor((t-u)/t*s)));return m[E*r+S]*a};Yv({field:f,gw:r,gh:s,W:e,H:t,cx:e/2+Qc(P.glyphs.map(p=>p.posX))*a,cy:t/2-Qc(P.glyphs.map(p=>p.posY))*a,glyphDist:g},{labels:P.showLabels,spots:P.showSpots,notes:P.showNotes,avoidGlyph:P.glyphs.some(p=>p.opacity>.3),spacing:c.spacing,metersPerLine:P.labelStep,baseElevation:P.labelBase,labelSize:P.labelSize,words:P.words.split(",").map(p=>p.trim()).filter(Boolean),caption:P.caption,seed:c.seed,textColor:P.textAuto?Nn[P.palette].index:P.textFill},Cs.getContext("2d"),Ps.getContext("2d"));const v=g_(o,l,e,t);for(const[p,u,S]of[[Cs,Wc,"source-over"],[Ps,Ja,"lighten"]]){const E=p.getContext("2d");E.globalCompositeOperation="destination-in",E.drawImage(v,0,0),E.globalCompositeOperation="source-over",u.globalCompositeOperation=S,u.drawImage(p,0,0),u.globalCompositeOperation="source-over"}}Gr(P.palette),fl.needsUpdate=!0,jr.needsUpdate=!0,$.uMaskOn.value=1,sa=!0,Zs=n}finally{eo=!1}}}function __(){if(!(wh&&!P.animate&&P.details&&Sh()&&!mh())){(Zs||Rs)&&eu(),Rs="";return}const e=Th();if(e!==Zs){if(e!==Rs){Rs=e,Jc=performance.now()+150,eu();return}performance.now()>=Jc&&v_(e)}}const tu=176,yl=()=>{const n=$.uRes.value;return{w:tu,h:Math.max(1,Math.round(tu*n.y/n.x))}},Nr=[Ys(),Ys()];let Js=[],Jo="",nu=0,zs=!0;const es=new Av({getLayers:()=>P.effects,setLayers:n=>{P.effects=n},requestThumbs:()=>{zs=!0,Jo=""},get thumbSize(){return yl()}});document.body.appendChild(es.root);window.innerWidth<900&&es.root.classList.add("collapsed");function x_(){const{w:n,h:e}=yl();for(const s of Nr)(s.width!==n||s.height!==e)&&s.setSize(n,e);const t=$.uRes.value.clone(),i=$.uMaskOn.value;$.uRes.value.set(n,e),$.uMaskOn.value=0,vl();const r=Ei.uniforms.uPx.value;$.uGrain.value=0,Ei.uniforms.uPx.value=Math.max(1,r*e/t.y),dh(Nr[0],!1,e/t.y),Ei.uniforms.uPx.value=r,Qe.setRenderTarget(null),$.uRes.value.copy(t),$.uMaskOn.value=i,Js=[...kr]}function y_(){const{w:n,h:e}=yl();for(let t=0;t<3&&Js.length;t++){const i=Js.shift(),r=sh(i);ah(r,Nu(i),Nr[0].texture),r.uniforms.uOpacity.value=1;const s=$.uRes.value.clone();$.uRes.value.set(n,e),cn(r,Nr[1]),Qe.setRenderTarget(null);const a=new Uint8Array(n*e*4);Qe.readRenderTargetPixels(Nr[1],0,0,n,e,a),$.uRes.value.copy(s),es.setThumbnail(i.id,a,n,e)}}function M_(){if(es.collapsed)return;if(Js.length){y_();return}const n=`${JSON.stringify({...P,effects:[],animate:!1,glass:0,glassLight:0,blur:0})}|${aa}|${$.uRes.value.x}x${$.uRes.value.y}`;n!==Jo?(Jo=n,nu=performance.now()+700,zs=!0):zs&&performance.now()>=nu&&!mh()&&(zs=!1,x_())}const Pn=document.createElement("div");Pn.id="selection";for(const n of["nw","ne","sw","se"]){const e=document.createElement("div");e.className=`handle ${n}`,e.addEventListener("pointerdown",t=>b_(t)),Pn.appendChild(e)}const da=document.createElement("div");da.className="handle rot";da.title="drag to rotate (hold Shift to snap)";da.addEventListener("pointerdown",n=>S_(n));Pn.appendChild(da);document.body.appendChild(Pn);let ke=null;const Zn=8;function fa(n){const e=P.glyphs[n],t=Math.min(window.innerWidth,window.innerHeight),i=window.innerWidth/2+e.posX*t,r=window.innerHeight/2-e.posY*t,s=Un.bounds[n],a=gh(e).f,o=[],l=[];for(const[c,d]of[[s.u0,s.v0],[s.u1,s.v0],[s.u1,s.v1],[s.u0,s.v1]]){const h=(c-.5)*e.size,f=(d-.5)*e.size;o.push(a[0]*h+a[1]*f),l.push(a[2]*h+a[3]*f)}return{m:t,cx:i,cy:r,x0:i+Math.min(...o)*t,x1:i+Math.max(...o)*t,y0:r-Math.max(...l)*t,y1:r-Math.min(...l)*t}}function Ah(n,e){for(let t=P.glyphs.length-1;t>=0;t--){const i=fa(t);if(n>=i.x0-Zn&&n<=i.x1+Zn&&e>=i.y0-Zn&&e<=i.y1+Zn)return t}return-1}function S_(n){if(be<0)return;n.preventDefault(),n.stopPropagation();const e=fa(be);ke={kind:"rotate",idx:be,cx:e.cx,cy:e.cy,a0:Math.atan2(n.clientY-e.cy,n.clientX-e.cx),rot0:P.glyphs[be].rot}}function b_(n){if(be<0)return;n.preventDefault(),n.stopPropagation();const e=fa(be);ke={kind:"scale",idx:be,cx:e.cx,cy:e.cy,d0:Math.max(10,Math.hypot(n.clientX-e.cx,n.clientY-e.cy)),size0:P.glyphs[be].size}}const Ki=.03,mn=document.createElement("div");mn.id="marquee";const Rh=document.createElement("span");mn.appendChild(Rh);document.body.appendChild(mn);const Kn=document.createElement("div");Kn.id="layerbox";for(const n of["nw","ne","sw","se"]){const e=document.createElement("div");e.className=`handle ${n}`,e.addEventListener("pointerdown",t=>{if(Ze<0)return;t.preventDefault(),t.stopPropagation();const i=P.layers[Ze];ke={kind:"lresize",idx:Ze,corner:n,r0:{x0:i.x0,y0:i.y0,x1:i.x1,y1:i.y1}}}),Kn.appendChild(e)}document.body.appendChild(Kn);function Ch(n,e){const t=n/window.innerWidth,i=e/window.innerHeight,r=gr(P.layers);for(let s=r.length-1;s>=0;s--){const a=P.layers[r[s]];if(t>=a.x0&&t<=a.x1&&i>=a.y0&&i<=a.y1)return r[s]}return-1}function Ph(n,e,t,i){const r=c=>Math.min(Math.max(c,0),1),s=r(n/window.innerWidth),a=r(e/window.innerHeight),o=r(t/window.innerWidth),l=r(i/window.innerHeight);return{x0:Math.min(s,o),y0:Math.min(a,l),x1:Math.max(s,o),y1:Math.max(a,l)}}function Lh(n,e){if((ke==null?void 0:ke.kind)!=="marquee")return;const t=Ph(ke.sx,ke.sy,n,e),i=window.innerWidth,r=window.innerHeight;mn.style.display="block",mn.style.left=`${t.x0*i}px`,mn.style.top=`${t.y0*r}px`,mn.style.width=`${(t.x1-t.x0)*i}px`,mn.style.height=`${(t.y1-t.y0)*r}px`,Rh.textContent=`${Math.round((t.x1-t.x0)*i)} × ${Math.round((t.y1-t.y0)*r)}`}function E_(n,e,t){mn.style.display="none";const i=Ph(n.sx,n.sy,e,t);i.x1-i.x0<Ki||i.y1-i.y0<Ki||w_(Ft,i)}function w_(n,e){if(P.layers.length>=Ic){ri(`Up to ${Ic} base layers`);return}if(n===In&&Zr()){ri("Only one particle sea at a time"),Ft=-1;return}const[t,i,r,s]=qs[n],a=Math.max(-1,...P.layers.map((o,l)=>o.z??l))+1;if(P.layers.push({look:n,a:t,b:i,c:r,d:s,...e,size:"free",z:a,react:!0,blend:0,opacity:1,...dl(Xs),seed:Math.random()*10}),n===In)for(const o of P.glyphs)o.opacity<.3&&(o.opacity=.9);Ze=P.layers.length-1,be=-1,Ft=-1,ft()}function T_(n,e){const t=P.layers[n.idx];if(!t)return;const i=window.innerWidth,r=window.innerHeight,s=n.r0;if(n.kind==="lmove"){const a=s.x1-s.x0,o=s.y1-s.y0,l=Math.min(Math.max((e.clientX-n.sx)/i,-s.x0),1-s.x1),c=Math.min(Math.max((e.clientY-n.sy)/r,-s.y0),1-s.y1);t.x0=s.x0+l,t.y0=s.y0+c,t.x1=t.x0+a,t.y1=t.y0+o}else{const a=Math.min(Math.max(e.clientX/i,0),1),o=Math.min(Math.max(e.clientY/r,0),1);n.corner.includes("w")?t.x0=Math.min(a,s.x1-Ki):t.x1=Math.max(a,s.x0+Ki),n.corner.includes("n")?t.y0=Math.min(o,s.y1-Ki):t.y1=Math.max(o,s.y0+Ki),t.size="free"}}function A_(n){if(!P.layers[Ze])return;const e=gr(P.layers),t=e.indexOf(Ze),i=n==="back"?0:n==="front"?e.length-1:Math.min(Math.max(t+(n==="up"?1:-1),0),e.length-1);e.splice(t,1),e.splice(i,0,Ze),e.forEach((r,s)=>{P.layers[r].z=s})}function Dh(){P.layers[Ze]&&(P.layers.splice(Ze,1),Ze=-1,ft())}window.addEventListener("keydown",n=>{const e=n.target;if(e.tagName==="INPUT"||e.tagName==="SELECT"||e.tagName==="TEXTAREA")return;if(n.key==="Escape"&&Ft>=0){Ft=-1,mn.style.display="none",ke=null;return}const t=be<0?P.layers[Ze]:void 0;if(!t)return;const i=n.shiftKey?.02:.004,r={ArrowLeft:[-i,0],ArrowRight:[i,0],ArrowUp:[0,-i],ArrowDown:[0,i]};if(n.key==="Escape")Ze=-1;else if(n.key==="Delete"||n.key==="Backspace")n.preventDefault(),Dh();else if(r[n.key]){n.preventDefault();const s=Math.min(Math.max(r[n.key][0],-t.x0),1-t.x1),a=Math.min(Math.max(r[n.key][1],-t.y0),1-t.y1);t.x0+=s,t.x1+=s,t.y0+=a,t.y1+=a}});const Ih=new Uv({state:()=>{const n=Nn[P.palette];return{order:gr(P.layers).map(e=>({index:e,look:P.layers[e].look})),selected:Ze,armed:Ft,bg:P.bg,paper:n.paper,ink:n.ink}},arm:n=>{Ft=Ft===n?-1:n,Ft>=0&&(be=Ze=-1)},select:n=>{Ze=n,be=-1,Ft=-1},setBg:n=>{Object.assign(P.bg,n)}}),Xi=Jv(),Uh=new Fv({get:()=>{const n=P.layers[Ze];return n?{index:Ze,layer:n,pos:gr(P.layers).indexOf(Ze),count:P.layers.length,paletteNames:Ws}:null},setValue:(n,e)=>{const t=P.layers[Ze];t&&(t[["a","b","c","d"][n]]=e)},setStyle:(n,e)=>{const t=P.layers[Ze];t&&(t[n]=e)},setSize:n=>{const e=P.layers[Ze];if(!e)return;e.size=n;const t=Cv(n,window.innerWidth,window.innerHeight);t&&Object.assign(e,t)},moveLayer:A_,remove:Dh,presetNames:()=>Object.keys(Xi),savePreset:n=>{const e=P.layers[Ze];if(!e)return;const{x0:t,y0:i,x1:r,y1:s,size:a,z:o,...l}=e;Xi[n]=structuredClone(l),Vc(Xi)||ri("Browser storage is blocked, so this preset only lasts until you reload")},applyPreset:n=>{const e=P.layers[Ze],t=Xi[n];if(!(!e||!t)){if(t.look===In&&e.look!==In&&Zr()){ri("Only one particle sea at a time");return}if(Object.assign(e,structuredClone(t)),e.look===In)for(const i of P.glyphs)i.opacity<.3&&(i.opacity=.9)}},deletePreset:n=>{delete Xi[n],Vc(Xi)}});document.body.appendChild(Uh.root);document.body.appendChild(Ih.root);ln.style.touchAction="none";ln.addEventListener("pointerdown",n=>{var t,i;if((i=(t=document.activeElement)==null?void 0:t.blur)==null||i.call(t),Ft>=0){ke={kind:"marquee",sx:n.clientX,sy:n.clientY},be=Ze=-1,Lh(n.clientX,n.clientY),n.preventDefault();return}const e=Ah(n.clientX,n.clientY);if(e>=0){Ze=-1,be=e,_t=e;const r=P.glyphs[e];ke={kind:"move",idx:e,sx:n.clientX,sy:n.clientY,px:r.posX,py:r.posY},ft(),n.preventDefault()}else{be=-1;const r=Ch(n.clientX,n.clientY);if(Ze=r,r>=0){const s=P.layers[r];ke={kind:"lmove",idx:r,sx:n.clientX,sy:n.clientY,r0:{x0:s.x0,y0:s.y0,x1:s.x1,y1:s.y1}},n.preventDefault()}}});ln.addEventListener("pointermove",n=>{if(ke)return;if(Ft>=0){ln.style.cursor="crosshair";return}const e=Ah(n.clientX,n.clientY);e>=0?ln.style.cursor=e===be?"move":"pointer":ln.style.cursor=Ch(n.clientX,n.clientY)>=0?"pointer":"default"});window.addEventListener("pointermove",n=>{if(!ke)return;if(ke.kind==="marquee"){Lh(n.clientX,n.clientY);return}if(ke.kind==="lmove"||ke.kind==="lresize"){T_(ke,n);return}const e=P.glyphs[ke.idx];if(e){if(ke.kind==="move"){const t=Math.min(window.innerWidth,window.innerHeight);e.posX=Wt(ke.px+(n.clientX-ke.sx)/t,-1.5,1.5),e.posY=Wt(ke.py-(n.clientY-ke.sy)/t,-1.5,1.5)}else if(ke.kind==="rotate"){let t=ke.rot0-(Math.atan2(n.clientY-ke.cy,n.clientX-ke.cx)-ke.a0)*180/Math.PI;t=((t+180)%360+360)%360-180,n.shiftKey&&(t=Math.round(t/15)*15),e.rot=Wt(t,-180,180)}else{const t=Math.hypot(n.clientX-ke.cx,n.clientY-ke.cy);e.size=Wt(ke.size0*(t/ke.d0),.2,4)}ft()}});window.addEventListener("pointerup",n=>{(ke==null?void 0:ke.kind)==="marquee"&&E_(ke,n.clientX,n.clientY),ke=null});ln.addEventListener("wheel",n=>{if(be<0)return;n.preventDefault();const e=P.glyphs[be];e.size=Wt(e.size*Math.exp(-n.deltaY*.0015),.2,4),ft()},{passive:!1});window.addEventListener("keydown",n=>{const e=n.target;if(be<0||e.tagName==="INPUT"||e.tagName==="SELECT"||e.tagName==="TEXTAREA")return;const t=n.shiftKey?.02:.004,i={ArrowLeft:[-t,0],ArrowRight:[t,0],ArrowUp:[0,t],ArrowDown:[0,-t]};if(n.key==="Escape")be=-1;else if(i[n.key]){n.preventDefault();const r=P.glyphs[be];r.posX=Wt(r.posX+i[n.key][0],-1.5,1.5),r.posY=Wt(r.posY+i[n.key][1],-1.5,1.5),ft()}else(n.key==="Delete"||n.key==="Backspace")&&(n.preventDefault(),er.remove())});const Qo=new Rv({get:()=>{const n=P.glyphs[be];return n?{index:be,text:n.image?"Image":n.text,size:n.size,outline:n.outline,outlineW:n.outlineW,shortSide:Math.min($.uRes.value.x,$.uRes.value.y),color:n.outline?vh(n):gl(n),opacity:n.opacity,custom:!!n.color||!!n.strokeColor,image:!!n.image,imageColor:n.imageColor,layer:js().indexOf(be),layers:js().length,rawText:n.text,text2:n.text2??"",font:n.font,fonts:hr.map(e=>e.family),rot:n.rot,skew:n.skew,stretch:n.stretch,grow:n.grow,soft:n.soft,warp:n.warp,morph:n.morph,count:P.glyphs.length}:null},moveLayer:h_,setOutline:n=>{const e=P.glyphs[be];e&&(e.outline=n,n&&e.opacity<.3&&(e.opacity=.9),ft())},setColor:n=>{const e=P.glyphs[be];e&&(e.outline?e.strokeColor=n:e.color=n,ft())},setImageColor:n=>{const e=P.glyphs[be];e&&(e.imageColor=n,ft())},usePalette:()=>{const n=P.glyphs[be];n&&(n.color="",n.strokeColor="",ft())},setOpacity:n=>{const e=P.glyphs[be];e&&(e.opacity=n,ft())},setThickness:n=>{const e=P.glyphs[be];e&&(e.outlineW=n,ft())},setText:n=>{const e=P.glyphs[be];!e||e.image||(e.text=n,_t=be,vn(be,!0),ni())},setText2:n=>{const e=P.glyphs[be];e&&(e.text2=n,_t=be,vn(be,!1))},setFont:n=>{const e=P.glyphs[be];e&&(e.font=n,vn(be,!0))},setNum:(n,e)=>{const t=P.glyphs[be];t&&(t[n]=e),ft()},resetTransform:()=>{_t=be,er.reset()},useText:()=>{_t=be,er.useText()},remove:()=>{_t=be,er.remove()}});document.body.appendChild(Qo.root);function R_(){const n=P.layers[Ze];Kn.style.display=n&&be<0?"block":"none",n&&(Kn.style.left=`${n.x0*window.innerWidth}px`,Kn.style.top=`${n.y0*window.innerHeight}px`,Kn.style.width=`${(n.x1-n.x0)*window.innerWidth}px`,Kn.style.height=`${(n.y1-n.y0)*window.innerHeight}px`),ln.style.cursor=Ft>=0?"crosshair":ln.style.cursor,Uh.update(n&&be<0?{x0:n.x0*window.innerWidth,x1:n.x1*window.innerWidth,y0:n.y0*window.innerHeight,y1:n.y1*window.innerHeight}:null),Ih.update()}function C_(){R_();const n=be>=0&&be<P.glyphs.length;if(Pn.style.display=n?"block":"none",!n){Qo.update(null);return}const e=fa(be);Qo.update(e),Pn.style.left=`${e.x0-Zn}px`,Pn.style.top=`${e.y0-Zn}px`,Pn.style.width=`${e.x1-e.x0+Zn*2}px`,Pn.style.height=`${e.y1-e.y0+Zn*2}px`}const P_=new j0;let Hr=0;function Fh(){const n=P_.getDelta();P.animate&&(Hr+=n),jn=P.animate?n:0,$.uTime.value=Hr;for(let e=0;e<nt;e++){if(ei[e]<0)continue;const t=Math.min((performance.now()-ei[e])/(l_*1e3),1);_r[e]=t*t*(3-2*t),t>=1&&(ei[e]=-1)}vl(),fh(),__(),M_(),C_(),requestAnimationFrame(Fh)}oa();ni();ml(!1);requestAnimationFrame(Fh);
