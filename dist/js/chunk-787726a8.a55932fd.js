(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-787726a8"],{"1dde":function(e,t,a){var r=a("d039"),n=a("b622"),o=a("2d00"),c=n("species");e.exports=function(e){return o>=51||!r((function(){var t=[],a=t.constructor={};return a[c]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"51ab":function(e,t,a){"use strict";a.r(t);a("b0c0");var r=a("7a23"),n=Object(r["S"])("data-v-00096e9c");Object(r["z"])("data-v-00096e9c");var o={class:"shopping-info bg-white container-lg mt-4 px-4 pb-4 px-sm-5"},c=Object(r["h"])("h2",{class:"py-4 fw-bold",style:{"font-family":"'Playfair Display', 'Noto Sans TC', serif","letter-spacing":"0.8px"}}," Shipping info ",-1),s={class:"justify-content-center"},l={class:"mb-3"},i=Object(r["h"])("label",{for:"email",class:"form-label"},"E-mail",-1),u={class:"mb-3"},d=Object(r["h"])("label",{for:"name",class:"form-label"},"收件人姓名",-1),f={class:"mb-3"},m=Object(r["h"])("label",{for:"tel",class:"form-label"},"收件人手機號碼",-1),b={class:"mb-3"},p=Object(r["h"])("label",{for:"address",class:"form-label"},"收件人地址",-1),h={class:"mb-3"},v=Object(r["h"])("label",{for:"message",class:"form-label"},"留言",-1),O={class:"d-flex justify-content-between"},j=Object(r["h"])("span",{class:"material-icons-outlined fs-6 align-middle"}," west ",-1),g=Object(r["g"])(" 修改訂單 "),y=Object(r["h"])("button",{type:"submit",class:"btn btn-primary rounded"},"建立訂單",-1);Object(r["x"])();var x=n((function(e,t,a,x,w,k){var V=Object(r["E"])("Field"),E=Object(r["E"])("ErrorMessage"),S=Object(r["E"])("Form");return Object(r["w"])(),Object(r["d"])("div",o,[c,Object(r["h"])("div",s,[Object(r["h"])(S,{ref:"form",onSubmit:k.createOrder},{default:n((function(e){var a=e.errors;return[Object(r["h"])("div",l,[i,Object(r["h"])(V,{id:"email",name:"Email",placeholder:"請輸入 E-mail",type:"email",class:["form-control",{"is-invalid":a["Email"],"is-valid":!a["Email"]&&w.form.user.email}],rules:"email|required",modelValue:w.form.user.email,"onUpdate:modelValue":t[1]||(t[1]=function(e){return w.form.user.email=e})},null,8,["modelValue","class"]),Object(r["h"])(E,{name:"Email",class:"invalid-feedback"})]),Object(r["h"])("div",u,[d,Object(r["h"])(V,{id:"name",name:"姓名",type:"text",class:["form-control",{"is-invalid":a["姓名"],"is-valid":!a["姓名"]&&w.form.user.name}],rules:"required",placeholder:"請輸入姓名",modelValue:w.form.user.name,"onUpdate:modelValue":t[2]||(t[2]=function(e){return w.form.user.name=e})},null,8,["modelValue","class"]),Object(r["h"])(E,{name:"姓名",class:"invalid-feedback"})]),Object(r["h"])("div",f,[m,Object(r["h"])(V,{id:"tel",name:"電話",type:"text",class:["form-control",{"is-invalid":a["電話"],"is-valid":!a["電話"]&&w.form.user.tel}],rules:k.isPhone,placeholder:"請輸入手機號碼",modelValue:w.form.user.tel,"onUpdate:modelValue":t[3]||(t[3]=function(e){return w.form.user.tel=e})},null,8,["rules","modelValue","class"]),Object(r["h"])(E,{name:"電話",class:"invalid-feedback"})]),Object(r["h"])("div",b,[p,Object(r["h"])(V,{id:"address",name:"地址",type:"text",class:["form-control",{"is-invalid":a["地址"],"is-valid":!a["地址"]&&w.form.user.address}],rules:"required",placeholder:"請輸入地址",modelValue:w.form.user.address,"onUpdate:modelValue":t[4]||(t[4]=function(e){return w.form.user.address=e})},null,8,["modelValue","class"]),Object(r["h"])(E,{name:"地址",class:"invalid-feedback"})]),Object(r["h"])("div",h,[v,Object(r["Q"])(Object(r["h"])("textarea",{name:"",id:"message",class:"form-control",cols:"20",rows:"5",placeholder:"備註","onUpdate:modelValue":t[5]||(t[5]=function(e){return w.form.message=e})},null,512),[[r["M"],w.form.message]])]),Object(r["h"])("div",O,[Object(r["h"])("button",{type:"button",class:"btn btn-outline-secondary rounded",onClick:t[6]||(t[6]=function(){return k.goBack&&k.goBack.apply(k,arguments)})},[j,g]),y])]})),_:1},8,["onSubmit"])])])})),w=(a("99af"),a("e4f3")),k={data:function(){return{form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{isPhone:function(e){var t=/^(09)[0-9]{8}$/;return e?!!t.test(e)||"手機號碼格式不正確":"手機號碼 為必填"},createOrder:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("smile0919a","/order");this.$http.post(t,{data:this.form}).then((function(t){if(t.data.success){w["a"].emit("update-cart"),w["a"].emit("get-cart-offcanvas");var a=t.data.orderId;e.$refs.form.resetForm(),e.form={user:{name:"",email:"",tel:"",address:""},message:""},e.$router.push("/checkout/step3/".concat(a))}}))},goBack:function(){this.$router.back()}}};a("ca4e");k.render=x,k.__scopeId="data-v-00096e9c";t["default"]=k},"65f0":function(e,t,a){var r=a("861d"),n=a("e8b5"),o=a("b622"),c=o("species");e.exports=function(e,t){var a;return n(e)&&(a=e.constructor,"function"!=typeof a||a!==Array&&!n(a.prototype)?r(a)&&(a=a[c],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===t?0:t)}},8418:function(e,t,a){"use strict";var r=a("c04e"),n=a("9bf2"),o=a("5c6c");e.exports=function(e,t,a){var c=r(t);c in e?n.f(e,c,o(0,a)):e[c]=a}},"99af":function(e,t,a){"use strict";var r=a("23e7"),n=a("d039"),o=a("e8b5"),c=a("861d"),s=a("7b0b"),l=a("50c4"),i=a("8418"),u=a("65f0"),d=a("1dde"),f=a("b622"),m=a("2d00"),b=f("isConcatSpreadable"),p=9007199254740991,h="Maximum allowed index exceeded",v=m>=51||!n((function(){var e=[];return e[b]=!1,e.concat()[0]!==e})),O=d("concat"),j=function(e){if(!c(e))return!1;var t=e[b];return void 0!==t?!!t:o(e)},g=!v||!O;r({target:"Array",proto:!0,forced:g},{concat:function(e){var t,a,r,n,o,c=s(this),d=u(c,0),f=0;for(t=-1,r=arguments.length;t<r;t++)if(o=-1===t?c:arguments[t],j(o)){if(n=l(o.length),f+n>p)throw TypeError(h);for(a=0;a<n;a++,f++)a in o&&i(d,f,o[a])}else{if(f>=p)throw TypeError(h);i(d,f++,o)}return d.length=f,d}})},b0c0:function(e,t,a){var r=a("83ab"),n=a("9bf2").f,o=Function.prototype,c=o.toString,s=/^\s*function ([^ (]*)/,l="name";r&&!(l in o)&&n(o,l,{configurable:!0,get:function(){try{return c.call(this).match(s)[1]}catch(e){return""}}})},b143:function(e,t,a){},ca4e:function(e,t,a){"use strict";a("b143")},e4f3:function(e,t,a){"use strict";var r=function(e){return{all:e=e||new Map,on:function(t,a){var r=e.get(t);r?r.push(a):e.set(t,[a])},off:function(t,a){var r=e.get(t);r&&(a?r.splice(r.indexOf(a)>>>0,1):e.set(t,[]))},emit:function(t,a){var r=e.get(t);r&&r.slice().map((function(e){e(a)})),(r=e.get("*"))&&r.slice().map((function(e){e(t,a)}))}}},n=r();t["a"]=n},e8b5:function(e,t,a){var r=a("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}}}]);
//# sourceMappingURL=chunk-787726a8.a55932fd.js.map