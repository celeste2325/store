import"./chunk-6J5FOLK6.js";import{a as j}from"./chunk-CM52V5KD.js";import{c as B}from"./chunk-A6T74STL.js";import{a as M}from"./chunk-BG62JP5R.js";import{$ as x,Ca as k,Ea as m,Ga as L,Ha as u,Ja as g,K as C,Ka as f,La as a,Ma as s,Na as D,Oa as I,P as c,Pa as l,Qa as h,S as _,Ua as v,Va as F,Xa as O,Z as y,Za as H,_ as w,aa as b,ba as S,pa as T,ra as p,xa as d,xb as P,zb as E}from"./chunk-KSSMYZ4O.js";var V=(()=>{let t=class t{constructor(){this.http=c(P)}getAll(){return this.http.get("https://api.escuelajs.co/api/v1/categories")}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var z=e=>({categoryId:e});function G(e,t){if(e&1&&(a(0,"li")(1,"a",8),v(2),s()()),e&2){let r=t.$implicit;p(),m("queryParams",H(2,z,r.id)),p(),F(r.name)}}function N(e,t){if(e&1&&(a(0,"div",4)(1,"div",7)(2,"ul"),g(3,G,3,4,"li",null,u),s()()()),e&2){let r=h();p(3),f(r.categories())}}function R(e,t){if(e&1){let r=I();a(0,"app-product",9),l("addToCart",function(){let i=w(r).$implicit,n=h();return x(n.addToCart(i))}),s()}if(e&2){let r=t.$implicit;m("product",r)}}var pt=(()=>{let t=class t{constructor(){this.products=d([]),this.categories=d([]),this.isDropdownOpen=d(!1),this.cartService=c(E),this.productService=c(M),this.categoryService=c(V)}ngOnInit(){this.getCategories()}ngOnChanges(){this.getProducts()}addToCart(o){this.cartService.addToCart(o)}getProducts(){this.productService.getProducts(this.categoryId).subscribe({next:o=>{this.products.set(o)}})}getCategories(){this.categoryService.getAll().subscribe({next:o=>{this.categories.set(o)}})}toggleDropdown(){this.isDropdownOpen.set(!this.isDropdownOpen())}onDocumentClick(o){let i=o.target;!i.closest("#options-menu")&&!i.closest(".origin-top-right")&&this.isDropdownOpen.set(!1)}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=_({type:t,selectors:[["app-list"]],hostBindings:function(i,n){i&1&&l("click",function(q){return n.onDocumentClick(q)},!1,T)},inputs:{categoryId:"categoryId"},standalone:!0,features:[y,O],decls:10,vars:1,consts:[[1,"relative","inline-block","text-center","items-center","w-full"],["aria-expanded","true","aria-haspopup","true","id","options-menu","type","button",1,"inline-flex","rounded-md","border","border-gray-300","shadow-sm","px-4","py-2","bg-white","text-sm","font-medium","text-gray-700","hover:bg-gray-50","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-indigo-500",3,"click"],["aria-hidden","true","fill","currentColor","viewBox","0 0 20 20","xmlns","http://www.w3.org/2000/svg",1,"-mr-1","ml-2","h-5","w-5"],["clip-rule","evenodd","d","M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","fill-rule","evenodd"],["aria-labelledby","options-menu","aria-orientation","vertical","role","menu",1,"absolute","left-1/2","transform","-translate-x-1/2","mt-2","w-56","rounded-md","shadow-lg","bg-white","ring-1","ring-black","ring-opacity-5"],[1,"grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-4","gap-8","w-full","mt-5"],[3,"product"],["role","none",1,"py-1"],["routerLink","/",3,"queryParams"],[3,"addToCart","product"]],template:function(i,n){i&1&&(a(0,"div",0)(1,"div")(2,"button",1),l("click",function(){return n.toggleDropdown()}),v(3," Categories "),b(),a(4,"svg",2),D(5,"path",3),s()()(),k(6,N,5,0,"div",4),s(),S(),a(7,"div",5),g(8,R,1,1,"app-product",6,u),s()),i&2&&(p(6),L(6,n.isDropdownOpen()?6:-1),p(2),f(n.products()))},dependencies:[j,B]});let e=t;return e})();export{pt as default};
