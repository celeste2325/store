import{a as O}from"./chunk-KINJF56O.js";import{$ as j,Ca as g,Da as k,Ea as E,Ga as I,Ha as P,Ia as i,Ja as r,Ka as D,La as F,Ma as v,Na as x,P as m,Ra as d,S as w,Sa as _,Ta as b,Ua as B,Xa as S,Ya as U,Za as V,_ as T,na as u,ob as $,pb as z,qa as o,wa as f,wb as M}from"./chunk-FCINEQUJ.js";function A(l,n){if(l&1){let a=F();i(0,"img",13),v("click",function(){let c=T(a).$implicit,t=x();return j(t.changeCover(c))}),r()}if(l&2){let a=n.$implicit,e=x();k("border-red-400",a===e.cover()),g("src",a,u)}}var Q=(()=>{let n=class n{constructor(){this.productSelected=f(null),this.cover=f(""),this.productService=m(O),this.cartService=m(M)}ngOnInit(){this.id&&this.productService.getOne(this.id).subscribe({next:e=>{console.log(e),this.productSelected.set(e),e.images.length>0&&this.cover.set(e.images[0])}})}changeCover(e){this.cover.set(e)}addToCart(){let e=this.productSelected();e&&this.cartService.addToCart(e)}};n.\u0275fac=function(c){return new(c||n)},n.\u0275cmp=w({type:n,selectors:[["app-product-detail"]],inputs:{id:"id"},standalone:!0,features:[B],decls:21,vars:12,consts:[[1,"w-full","flex","space-x-10"],[1,"flex","flex-col","w-1/3"],[1,"w-full","rounded","border","border-gray-200"],["alt","ecommerce",1,"w-full","object-cover","object-center",3,"src"],[1,"flex","items-center","justify-center","mt-1"],[1,"grid","grid-cols-3","gap-1"],["alt","ecommerce",1,"object-cover","object-center","rounded","border-2","border-gray-200",3,"src","border-red-400"],[1,"mt-5","w-full"],[1,"text-sm","title-font","text-gray-500","tracking-widest"],[1,"text-gray-900","text-3xl","title-font","font-medium","mb-1"],[1,"leading-relaxed"],[1,"title-font","font-medium","text-2xl","text-gray-900","mt-5"],[1,"flex","text-white","bg-red-500","border-0","py-2","px-6","focus:outline-none","hover:bg-red-600","rounded",3,"click"],["alt","ecommerce",1,"object-cover","object-center","rounded","border-2","border-gray-200",3,"click","src"]],template:function(c,t){if(c&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),D(3,"img",3),r(),i(4,"div",4)(5,"div",5),I(6,A,1,3,"img",6,E),r()()(),i(8,"div",7)(9,"h2",8),d(10),S(11,"uppercase"),r(),i(12,"h1",9),d(13),r(),i(14,"p",10),d(15),r(),i(16,"p",11),d(17),S(18,"currency"),r(),i(19,"button",12),v("click",function(){return t.addToCart()}),d(20," Add To Cart "),r()()()),c&2){let p,s,h,y,C;o(3),g("src",t.cover(),u),o(3),P((p=t.productSelected())==null?null:p.images),o(4),_(U(11,5,(s=t.productSelected())==null||s.category==null?null:s.category.name)),o(3),b(" ",(h=t.productSelected())==null?null:h.title," "),o(2),_((y=t.productSelected())==null?null:y.description),o(2),b(" ",V(18,7,(C=t.productSelected())==null?null:C.price,"$","symbol","1.0")," ")}},dependencies:[z,$]});let l=n;return l})();export{Q as default};