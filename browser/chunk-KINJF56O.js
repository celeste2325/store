import{K as o,P as i,ub as c}from"./chunk-FCINEQUJ.js";var u=(()=>{let t=class t{constructor(){this.http=i(c)}getProducts(e){let r=new URL("https://api.escuelajs.co/api/v1/products");return e&&r.searchParams.set("categoryId",e),this.http.get(r.toString())}getOne(e){return this.http.get(`https://api.escuelajs.co/api/v1/products/${e}`)}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"});let s=t;return s})();export{u as a};
