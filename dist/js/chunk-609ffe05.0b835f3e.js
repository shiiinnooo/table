(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-609ffe05"],{"1dde":function(t,e,n){var c=n("d039"),o=n("b622"),r=n("2d00"),a=o("species");t.exports=function(t){return r>=51||!c((function(){var e=[],n=e.constructor={};return n[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"3a7e":function(t,e,n){"use strict";n("e50b")},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var c=n("1d80"),o=n("5899"),r="["+o+"]",a=RegExp("^"+r+r+"*"),i=RegExp(r+r+"*$"),s=function(t){return function(e){var n=String(c(e));return 1&t&&(n=n.replace(a,"")),2&t&&(n=n.replace(i,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},"65f0":function(t,e,n){var c=n("861d"),o=n("e8b5"),r=n("b622"),a=r("species");t.exports=function(t,e){var n;return o(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?c(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},7156:function(t,e,n){var c=n("861d"),o=n("d2bb");t.exports=function(t,e,n){var r,a;return o&&"function"==typeof(r=e.constructor)&&r!==n&&c(a=r.prototype)&&a!==n.prototype&&o(t,a),t}},8418:function(t,e,n){"use strict";var c=n("c04e"),o=n("9bf2"),r=n("5c6c");t.exports=function(t,e,n){var a=c(e);a in t?o.f(t,a,r(0,n)):t[a]=n}},"99af":function(t,e,n){"use strict";var c=n("23e7"),o=n("d039"),r=n("e8b5"),a=n("861d"),i=n("7b0b"),s=n("50c4"),u=n("8418"),d=n("65f0"),p=n("1dde"),b=n("b622"),l=n("2d00"),f=b("isConcatSpreadable"),h=9007199254740991,v="Maximum allowed index exceeded",m=l>=51||!o((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),O=p("concat"),j=function(t){if(!a(t))return!1;var e=t[f];return void 0!==e?!!e:r(t)},y=!m||!O;c({target:"Array",proto:!0,forced:y},{concat:function(t){var e,n,c,o,r,a=i(this),p=d(a,0),b=0;for(e=-1,c=arguments.length;e<c;e++)if(r=-1===e?a:arguments[e],j(r)){if(o=s(r.length),b+o>h)throw TypeError(v);for(n=0;n<o;n++,b++)n in r&&u(p,b,r[n])}else{if(b>=h)throw TypeError(v);u(p,b++,r)}return p.length=b,p}})},a9e3:function(t,e,n){"use strict";var c=n("83ab"),o=n("da84"),r=n("94ca"),a=n("6eeb"),i=n("5135"),s=n("c6b6"),u=n("7156"),d=n("c04e"),p=n("d039"),b=n("7c73"),l=n("241c").f,f=n("06cf").f,h=n("9bf2").f,v=n("58a8").trim,m="Number",O=o[m],j=O.prototype,y=s(b(j))==m,g=function(t){var e,n,c,o,r,a,i,s,u=d(t,!1);if("string"==typeof u&&u.length>2)if(u=v(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:c=2,o=49;break;case 79:case 111:c=8,o=55;break;default:return+u}for(r=u.slice(2),a=r.length,i=0;i<a;i++)if(s=r.charCodeAt(i),s<48||s>o)return NaN;return parseInt(r,c)}return+u};if(r(m,!O(" 0o1")||!O("0b1")||O("+0x1"))){for(var x,N=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof N&&(y?p((function(){j.valueOf.call(n)})):s(n)!=m)?u(new O(g(e)),n,N):g(e)},C=c?l(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),w=0;C.length>w;w++)i(O,x=C[w])&&!i(N,x)&&h(N,x,f(O,x));N.prototype=j,j.constructor=N,a(o,m,N)}},d62c:function(t,e,n){"use strict";n.r(e);n("a9e3");var c=n("7a23"),o=Object(c["S"])("data-v-66eb2dcb");Object(c["z"])("data-v-66eb2dcb");var r={class:"shopping-bag container-lg bg-white mt-4 px-4 pb-4 px-sm-5"},a=Object(c["h"])("h2",{class:"py-4 fw-bold",style:{"font-family":"'Playfair Display', 'Noto Sans TC', serif","letter-spacing":"0.8px"}}," Your shopping bag ",-1),i={key:0},s=Object(c["h"])("p",{class:"text-center py-5"},"購物車無商品",-1),u={key:1},d={class:"col-4 col-sm-3 text-md-center"},p={class:"col-8 col-sm-6 ps-0 ps-lg-3 d-flex flex-column justify-content-center"},b={class:"m-0 p-0"},l={class:"m-0 p-0"},f=Object(c["g"])(" 單價 "),h={key:0,class:"text-decoration-line-through ms-2"},v={class:"m-0 p-0"},m=Object(c["g"])(" 小計 "),O={class:"col-12 col-sm-3 py-3 py-sm-0 d-flex flex-column justify-content-center"},j=Object(c["f"])('<option disabled data-v-66eb2dcb>選擇數量</option><option value="1" data-v-66eb2dcb>1</option><option value="2" data-v-66eb2dcb>2</option><option value="3" data-v-66eb2dcb>3</option><option value="4" data-v-66eb2dcb>4</option><option value="5" data-v-66eb2dcb>5</option><option value="6" data-v-66eb2dcb>6</option><option value="7" data-v-66eb2dcb>7</option><option value="8" data-v-66eb2dcb>8</option><option value="9" data-v-66eb2dcb>9</option><option value="10" data-v-66eb2dcb>10</option>',11),y={class:"text-end py-3"},g=Object(c["g"])(" 總計: "),x={class:"fs-3 fw-bold"},N={class:"text-sm-end d-none d-md-block"},C=Object(c["g"])(" Continue "),w=Object(c["h"])("span",{class:"material-icons-outlined fs-6 align-middle"}," east ",-1),k={class:"d-block d-md-none"},I=Object(c["g"])(" Continue "),A=Object(c["h"])("span",{class:"material-icons-outlined fs-6 align-middle"}," east ",-1);Object(c["x"])();var E=o((function(t,e,n,o,E,T){var _;return Object(c["w"])(),Object(c["d"])("div",r,[a,null!==(_=E.carts.carts)&&void 0!==_&&_.length?(Object(c["w"])(),Object(c["d"])("div",u,[(Object(c["w"])(!0),Object(c["d"])(c["a"],null,Object(c["D"])(E.carts.carts,(function(e){return Object(c["w"])(),Object(c["d"])("div",{class:"row border-bottom py-3",key:e.id},[Object(c["h"])("div",d,[Object(c["h"])("img",{src:e.product.imageUrl},null,8,["src"])]),Object(c["h"])("div",p,[Object(c["h"])("p",b,Object(c["H"])(e.product.title),1),Object(c["h"])("p",l,[f,Object(c["h"])("span",null,"NT. "+Object(c["H"])(t.toCurrency(Number(e.product.price))),1),e.product.price!==e.product.origin_price?(Object(c["w"])(),Object(c["d"])("span",h," NT. "+Object(c["H"])(t.toCurrency(Number(e.product.origin_price))),1)):Object(c["e"])("",!0)]),Object(c["h"])("p",v,[m,Object(c["h"])("span",null,"NT. "+Object(c["H"])(t.toCurrency(Number(e.total))),1)])]),Object(c["h"])("div",O,[Object(c["Q"])(Object(c["h"])("select",{class:"form-select rounded d-inline-block d-sm-block text-center py-1","onUpdate:modelValue":function(t){return e.qty=t},onChange:function(t){return T.updateCart(e)}},[j],40,["onUpdate:modelValue","onChange"]),[[c["L"],e.qty,void 0,{number:!0}]]),Object(c["h"])("button",{type:"button",class:"btn btn-outline-secondary btn-sm my-2 py-1\n              rounded d-inline-block d-sm-block",onClick:function(t){return T.delCartItem(e.id)}}," 刪除 ",8,["onClick"])])])})),128)),Object(c["h"])("p",y,[g,Object(c["h"])("span",x," NT. "+Object(c["H"])(t.toCurrency(Number(E.carts.total))),1)]),Object(c["h"])("div",N,[Object(c["h"])("button",{class:"btn btn-primary rounded w-25",type:"button",onClick:e[2]||(e[2]=function(e){return t.$router.push("/checkout/step2")})},[C,w])]),Object(c["h"])("div",k,[Object(c["h"])("button",{class:"btn btn-primary rounded w-100",type:"button",onClick:e[3]||(e[3]=function(e){return t.$router.push("/checkout/step2")})},[I,A])])])):(Object(c["w"])(),Object(c["d"])("div",i,[s,Object(c["h"])("button",{class:"btn btn-primary rounded w-100 py-2",type:"button",onClick:e[1]||(e[1]=function(e){return t.$router.push("/product")})}," 前往購物 ")]))])})),T=(n("99af"),n("e4f3")),_={data:function(){return{carts:{}}},methods:{getCarts:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("smile0919a","/cart");this.$http.get(e).then((function(e){e.data.success&&(t.carts=e.data.data)}))},delCartItem:function(t){var e=this,n="".concat("https://vue3-course-api.hexschool.io","/api/").concat("smile0919a","/cart/").concat(t);this.$http.delete(n).then((function(t){t.data.success&&(e.getCarts(),T["a"].emit("update-cart"),T["a"].emit("get-cart-offcanvas"))}))},updateCart:function(t){var e=this,n="".concat("https://vue3-course-api.hexschool.io","/api/").concat("smile0919a","/cart/").concat(t.id),c={product_id:t.product.id,qty:t.qty};this.$http.put(n,{data:c}).then((function(t){t.data.success&&(e.getCarts(),T["a"].emit("update-cart"),T["a"].emit("get-cart-offcanvas"))}))}},created:function(){this.getCarts()}};n("3a7e");_.render=E,_.__scopeId="data-v-66eb2dcb";e["default"]=_},e4f3:function(t,e,n){"use strict";var c=function(t){return{all:t=t||new Map,on:function(e,n){var c=t.get(e);c?c.push(n):t.set(e,[n])},off:function(e,n){var c=t.get(e);c&&(n?c.splice(c.indexOf(n)>>>0,1):t.set(e,[]))},emit:function(e,n){var c=t.get(e);c&&c.slice().map((function(t){t(n)})),(c=t.get("*"))&&c.slice().map((function(t){t(e,n)}))}}},o=c();e["a"]=o},e50b:function(t,e,n){},e8b5:function(t,e,n){var c=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==c(t)}}}]);
//# sourceMappingURL=chunk-609ffe05.0b835f3e.js.map