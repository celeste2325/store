import{c as q}from"./chunk-3HISWDSG.js";import{Ca as k,Ia as g,Ja as y,Ka as X,Ma as N,Ra as w,S as A,Sa as P,U as Y,Ua as R,Wa as _,Xa as S,Ya as F,Za as z,ha as j,na as L,ob as E,pb as H,qa as p,qb as V}from"./chunk-FCINEQUJ.js";function s(t){let e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}var dt=Math.pow(10,8)*24*60*60*1e3,Vt=-dt;var v=43200,T=1440;var mt=3600;var J=mt*24,qt=J*7,lt=J*365.2425,ft=lt/12,Jt=ft*3;var ht={};function Q(){return ht}function C(t){let e=s(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function b(t,e){let n=s(t),r=s(e),o=n.getTime()-r.getTime();return o<0?-1:o>0?1:o}function U(t,e){let n=s(t),r=s(e),o=n.getFullYear()-r.getFullYear(),i=n.getMonth()-r.getMonth();return o*12+i}function B(t){return e=>{let r=(t?Math[t]:Math.trunc)(e);return r===0?0:r}}function K(t,e){return+s(t)-+s(e)}function $(t){let e=s(t);return e.setHours(23,59,59,999),e}function G(t){let e=s(t),n=e.getMonth();return e.setFullYear(e.getFullYear(),n+1,0),e.setHours(23,59,59,999),e}function Z(t){let e=s(t);return+$(e)==+G(e)}function tt(t,e){let n=s(t),r=s(e),o=b(n,r),i=Math.abs(U(n,r)),u;if(i<1)u=0;else{n.getMonth()===1&&n.getDate()>27&&n.setDate(30),n.setMonth(n.getMonth()-o*i);let a=b(n,r)===-o;Z(s(t))&&i===1&&b(t,r)===1&&(a=!1),u=o*(i-Number(a))}return u===0?0:u}function et(t,e,n){let r=K(t,e)/1e3;return B(n?.roundingMethod)(r)}var pt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},nt=(t,e,n)=>{let r,o=pt[t];return typeof o=="string"?r=o:e===1?r=o.one:r=o.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function I(t){return(e={})=>{let n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}var gt={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},yt={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},bt={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},ot={date:I({formats:gt,defaultWidth:"full"}),time:I({formats:yt,defaultWidth:"full"}),dateTime:I({formats:bt,defaultWidth:"full"})};var xt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},rt=(t,e,n,r)=>xt[t];function x(t){return(e,n)=>{let r=n?.context?String(n.context):"standalone",o;if(r==="formatting"&&t.formattingValues){let u=t.defaultFormattingWidth||t.defaultWidth,a=n?.width?String(n.width):u;o=t.formattingValues[a]||t.formattingValues[u]}else{let u=t.defaultWidth,a=n?.width?String(n.width):t.defaultWidth;o=t.values[a]||t.values[u]}let i=t.argumentCallback?t.argumentCallback(e):e;return o[i]}}var Mt={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Dt={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},wt={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},vt={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Pt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},St={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},It=(t,e)=>{let n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},at={ordinalNumber:It,era:x({values:Mt,defaultWidth:"wide"}),quarter:x({values:Dt,defaultWidth:"wide",argumentCallback:t=>t-1}),month:x({values:wt,defaultWidth:"wide"}),day:x({values:vt,defaultWidth:"wide"}),dayPeriod:x({values:Pt,defaultWidth:"wide",formattingValues:St,defaultFormattingWidth:"wide"})};function M(t){return(e,n={})=>{let r=n.width,o=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(o);if(!i)return null;let u=i[0],a=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],m=Array.isArray(a)?kt(a,D=>D.test(u)):Wt(a,D=>D.test(u)),d;d=t.valueCallback?t.valueCallback(m):m,d=n.valueCallback?n.valueCallback(d):d;let l=e.slice(u.length);return{value:d,rest:l}}}function Wt(t,e){for(let n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function kt(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function it(t){return(e,n={})=>{let r=e.match(t.matchPattern);if(!r)return null;let o=r[0],i=e.match(t.parsePattern);if(!i)return null;let u=t.valueCallback?t.valueCallback(i[0]):i[0];u=n.valueCallback?n.valueCallback(u):u;let a=e.slice(o.length);return{value:u,rest:a}}}var Ft=/^(\d+)(th|st|nd|rd)?/i,Tt=/\d+/i,Ct={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Ot={any:[/^b/i,/^(a|c)/i]},At={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Yt={any:[/1/i,/2/i,/3/i,/4/i]},jt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Lt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Xt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Nt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Rt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},_t={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},st={ordinalNumber:it({matchPattern:Ft,parsePattern:Tt,valueCallback:t=>parseInt(t,10)}),era:M({matchPatterns:Ct,defaultMatchWidth:"wide",parsePatterns:Ot,defaultParseWidth:"any"}),quarter:M({matchPatterns:At,defaultMatchWidth:"wide",parsePatterns:Yt,defaultParseWidth:"any",valueCallback:t=>t+1}),month:M({matchPatterns:jt,defaultMatchWidth:"wide",parsePatterns:Lt,defaultParseWidth:"any"}),day:M({matchPatterns:Xt,defaultMatchWidth:"wide",parsePatterns:Nt,defaultParseWidth:"any"}),dayPeriod:M({matchPatterns:Rt,defaultMatchWidth:"any",parsePatterns:_t,defaultParseWidth:"any"})};var O={code:"en-US",formatDistance:nt,formatLong:ot,formatRelative:rt,localize:at,match:st,options:{weekStartsOn:0,firstWeekContainsDate:1}};function ut(t,e,n){let r=Q(),o=n?.locale??r.locale??O,i=2520,u=b(t,e);if(isNaN(u))throw new RangeError("Invalid time value");let a=Object.assign({},n,{addSuffix:n?.addSuffix,comparison:u}),m,d;u>0?(m=s(e),d=s(t)):(m=s(t),d=s(e));let l=et(d,m),D=(C(d)-C(m))/1e3,c=Math.round((l-D)/60),h;if(c<2)return n?.includeSeconds?l<5?o.formatDistance("lessThanXSeconds",5,a):l<10?o.formatDistance("lessThanXSeconds",10,a):l<20?o.formatDistance("lessThanXSeconds",20,a):l<40?o.formatDistance("halfAMinute",0,a):l<60?o.formatDistance("lessThanXMinutes",1,a):o.formatDistance("xMinutes",1,a):c===0?o.formatDistance("lessThanXMinutes",1,a):o.formatDistance("xMinutes",c,a);if(c<45)return o.formatDistance("xMinutes",c,a);if(c<90)return o.formatDistance("aboutXHours",1,a);if(c<T){let f=Math.round(c/60);return o.formatDistance("aboutXHours",f,a)}else{if(c<i)return o.formatDistance("xDays",1,a);if(c<v){let f=Math.round(c/T);return o.formatDistance("xDays",f,a)}else if(c<v*2)return h=Math.round(c/v),o.formatDistance("aboutXMonths",h,a)}if(h=tt(d,m),h<12){let f=Math.round(c/v);return o.formatDistance("xMonths",f,a)}else{let f=h%12,W=Math.trunc(h/12);return f<3?o.formatDistance("aboutXYears",W,a):f<9?o.formatDistance("overXYears",W,a):o.formatDistance("almostXYears",W+1,a)}}var ct=(()=>{let e=class e{transform(r){let o=new Date,i=new Date(r);return ut(o,i)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275pipe=Y({name:"timeAgo",type:e,pure:!0,standalone:!0});let t=e;return t})();var Et=t=>["product",t],sn=(()=>{let e=class e{constructor(){this.addToCart=new j}addToCartHandler(){this.addToCart.emit(this.product)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=A({type:e,selectors:[["app-product"]],inputs:{product:"product"},outputs:{addToCart:"addToCart"},standalone:!0,features:[R],decls:15,vars:17,consts:[[1,"group","rounded-lg","border"],[1,"w-full","overflow-hidden","rounded-t-lg","bg-gray-200",3,"routerLink"],[1,"h-full","w-full","object-cover","object-center","group-hover:opacity-75",3,"alt","src"],[1,"flex","flex-col","space-y-2","p-4"],[1,"text-sm","text-gray-700"],[1,"text-lg","font-medium","text-gray-900"],[1,"text-xs","font-light","text-gray-600"],[1,"text-black","bg-gray-200","font-medium","rounded-lg","text-sm","px-5","py-2.5","w-full",3,"click"]],template:function(o,i){o&1&&(g(0,"div",0)(1,"a",1),X(2,"img",2),y(),g(3,"div",3)(4,"h3",4),w(5),S(6,"uppercase"),y(),g(7,"p",5),w(8),S(9,"currency"),y(),g(10,"p",6),w(11),S(12,"timeAgo"),y(),g(13,"button",7),N("click",function(){return i.addToCartHandler()}),w(14,"Add to cart "),y()()()),o&2&&(p(),k("routerLink",_(15,Et,i.product.id)),p(),k("alt",i.product.title)("src",i.product.images[0],L),p(3),P(F(6,6,i.product.title)),p(3),P(z(9,8,i.product.price,"$","symbol","1.0")),p(3),P(F(12,13,i.product.creationAt)))},dependencies:[V,E,H,ct,q]});let t=e;return t})();export{sn as a};