(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30bd5072"],{5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,o){var l=o("1d80"),c=o("5899"),n="["+c+"]",a=RegExp("^"+n+n+"*"),r=RegExp(n+n+"*$"),d=function(e){return function(t){var o=String(l(t));return 1&e&&(o=o.replace(a,"")),2&e&&(o=o.replace(r,"")),o}};e.exports={start:d(1),end:d(2),trim:d(3)}},7156:function(e,t,o){var l=o("861d"),c=o("d2bb");e.exports=function(e,t,o){var n,a;return c&&"function"==typeof(n=t.constructor)&&n!==o&&l(a=n.prototype)&&a!==o.prototype&&c(e,a),e}},a704:function(e,t,o){"use strict";o.r(t);var l=o("7a23"),c={class:"d-flex justify-content-end mt-4"},n={class:"table mt-4 text-center"},a=Object(l["createElementVNode"])("thead",null,[Object(l["createElementVNode"])("tr",null,[Object(l["createElementVNode"])("th",{width:"120"},"訂單建立時間"),Object(l["createElementVNode"])("th",{width:"240"},"訂單編號"),Object(l["createElementVNode"])("th",{width:"100",class:"text-start"},"金額"),Object(l["createElementVNode"])("th",{width:"100"},"付款狀態"),Object(l["createElementVNode"])("th",{width:"200"},"付款時間"),Object(l["createElementVNode"])("th",{width:"100"},"編輯")])],-1),r={key:0},d=Object(l["createElementVNode"])("td",{class:"fst-italic text-center py-5",colspan:"6"},"無訂單",-1),s=[d],i={class:"m-0"},b={class:"m-0",style:{"font-size":"12px"}},u={class:"text-start"},m={key:0,class:"text-success"},O={key:1},p={key:0},j={class:"m-0"},h={class:"m-0",style:{"font-size":"12px"}},N={key:1},E={class:"btn-group"},f=["onClick"],V=["onClick"],g={class:"d-flex justify-content-center"};function v(e,t,o,d,v,y){var k=Object(l["resolveComponent"])("Pagination"),w=Object(l["resolveComponent"])("OrderModal"),D=Object(l["resolveComponent"])("OrderDelModal"),M=Object(l["resolveComponent"])("OrderDelAllModal"),S=Object(l["resolveComponent"])("loading");return Object(l["openBlock"])(),Object(l["createElementBlock"])(l["Fragment"],null,[Object(l["createElementVNode"])("div",c,[Object(l["createElementVNode"])("button",{class:Object(l["normalizeClass"])(["btn btn-danger text-white",{disabled:!v.orders.length}]),onClick:t[0]||(t[0]=function(){return y.openDelAllModal&&y.openDelAllModal.apply(y,arguments)})},"刪除全部訂單",2)]),Object(l["createElementVNode"])("table",n,[a,Object(l["createElementVNode"])("tbody",null,[v.orders.length?Object(l["createCommentVNode"])("",!0):(Object(l["openBlock"])(),Object(l["createElementBlock"])("tr",r,s)),(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(v.orders,(function(t){return Object(l["openBlock"])(),Object(l["createElementBlock"])("tr",{key:t.id},[Object(l["createElementVNode"])("td",null,[Object(l["createElementVNode"])("div",null,[Object(l["createElementVNode"])("p",i,Object(l["toDisplayString"])(new Date(1e3*t.create_at).toLocaleDateString()),1),Object(l["createElementVNode"])("p",b,Object(l["toDisplayString"])(new Date(1e3*t.create_at).toLocaleTimeString()),1)])]),Object(l["createElementVNode"])("td",null,Object(l["toDisplayString"])(t.id),1),Object(l["createElementVNode"])("td",u,"NT. "+Object(l["toDisplayString"])(e.toCurrency(t.total)),1),Object(l["createElementVNode"])("td",null,[t.is_paid?(Object(l["openBlock"])(),Object(l["createElementBlock"])("span",m,"已付款")):(Object(l["openBlock"])(),Object(l["createElementBlock"])("span",O,"未付款"))]),Object(l["createElementVNode"])("td",null,[t.is_paid?(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",p,[Object(l["createElementVNode"])("p",j,Object(l["toDisplayString"])(new Date(1e3*t.paid_date).toLocaleDateString()),1),Object(l["createElementVNode"])("p",h,Object(l["toDisplayString"])(new Date(1e3*t.paid_date).toLocaleTimeString()),1)])):(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",N))]),Object(l["createElementVNode"])("td",null,[Object(l["createElementVNode"])("div",E,[Object(l["createElementVNode"])("button",{type:"button",class:"btn btn-outline-dark btn-sm rounded-start",onClick:function(e){return y.openModal(t.id)}}," 查看 ",8,f),Object(l["createElementVNode"])("button",{type:"button",class:"btn btn-outline-danger btn-sm rounded-end",onClick:function(e){return y.openDelModal(t)}}," 刪除 ",8,V)])])])})),128))])]),Object(l["createElementVNode"])("div",g,[Object(l["createVNode"])(k,{page:v.pagination,onGetProduct:y.getOrders},null,8,["page","onGetProduct"])]),Object(l["createVNode"])(w,{ref:"modal",order:v.tempOrder},null,8,["order"]),Object(l["createVNode"])(D,{ref:"delModal",order:v.tempOrder,onDelOrder:y.delOrder},null,8,["order","onDelOrder"]),Object(l["createVNode"])(M,{ref:"delAllModal",onDelAllOrder:y.delAllOrder},null,8,["onDelAllOrder"]),Object(l["createVNode"])(S,{active:v.isLoading,"is-full-page":v.fullPage},null,8,["active","is-full-page"])],64)}var y=o("5530"),k=(o("99af"),o("0eb3")),w=(o("b0c0"),o("a9e3"),{class:"modal fade",ref:"orderModal",id:"orderModal",tabindex:"-1","aria-labelledby":"orderModalLabel","aria-hidden":"true"}),D={class:"modal-dialog"},M={class:"modal-content"},S=Object(l["createElementVNode"])("div",{class:"modal-header"},[Object(l["createElementVNode"])("h5",{class:"modal-title",id:"orderModalLabel"},"訂單詳情"),Object(l["createElementVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),x={class:"modal-body"},B={class:"orderStatus border p-2"},C={class:"m-0 py-1"},A=Object(l["createTextVNode"])(" 訂單編號："),I={class:"orderId"},T={class:"m-0 py-1"},L=Object(l["createTextVNode"])(" 付款狀態： "),_={key:0,class:"text-success"},$={key:1},F=Object(l["createTextVNode"])(" 未付款 "),H={class:"d-flex justify-content-between p-2 mt-4"},P={class:"orderInfo w-100"},U=Object(l["createElementVNode"])("h6",{class:"pb-1"},"訂購資訊",-1),G=Object(l["createElementVNode"])("th",{scope:"row",style:{width:"40%"},class:"align-top"},"建立時間",-1),z={class:"d-block"},R={style:{"font-size":"12px"}},q=Object(l["createElementVNode"])("th",{scope:"row"},"email",-1),J=Object(l["createElementVNode"])("th",{scope:"row"},"姓名",-1),X=Object(l["createElementVNode"])("th",{scope:"row"},"手機",-1),Y=Object(l["createElementVNode"])("th",{scope:"row"},"地址",-1),K=Object(l["createElementVNode"])("th",{scope:"row"},"備註",-1),Q={key:0},W={key:1},Z={class:"orderContent w-100"},ee=Object(l["createElementVNode"])("h6",null,"訂單內容",-1),te={class:"pb-3"},oe=["src"],le={class:"pb-3"},ce={class:"m-0"},ne={class:"m-0"},ae={class:"m-0"},re={class:"text-end py-2 border-top h6"};function de(e,t,o,c,n,a){var r,d,s,i,b,u,m,O,p,j,h;return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",w,[Object(l["createElementVNode"])("div",D,[Object(l["createElementVNode"])("div",M,[S,Object(l["createElementVNode"])("div",x,[Object(l["createElementVNode"])("div",B,[Object(l["createElementVNode"])("p",C,[A,Object(l["createElementVNode"])("span",I,Object(l["toDisplayString"])(o.order.id),1)]),Object(l["createElementVNode"])("p",T,[L,o.order.is_paid?(Object(l["openBlock"])(),Object(l["createElementBlock"])("span",_,"已付款")):(Object(l["openBlock"])(),Object(l["createElementBlock"])("span",$,[F,Object(l["createElementVNode"])("button",{onClick:t[0]||(t[0]=function(){return a.copyUrl&&a.copyUrl.apply(a,arguments)}),class:"btn btn-dark rounded px-2 py-1 ms-2"},"付款連結")]))])]),Object(l["createElementVNode"])("div",H,[Object(l["createElementVNode"])("div",P,[U,Object(l["createElementVNode"])("table",null,[Object(l["createElementVNode"])("tbody",null,[Object(l["createElementVNode"])("tr",null,[G,Object(l["createElementVNode"])("td",null,[Object(l["createElementVNode"])("span",z,Object(l["toDisplayString"])(new Date(1e3*(null===(r=o.order)||void 0===r?void 0:r.create_at)).toLocaleDateString()),1),Object(l["createElementVNode"])("span",R,Object(l["toDisplayString"])(new Date(1e3*(null===(d=o.order)||void 0===d?void 0:d.create_at)).toLocaleTimeString()),1)])]),Object(l["createElementVNode"])("tr",null,[q,Object(l["createElementVNode"])("td",null,Object(l["toDisplayString"])(null===(s=o.order)||void 0===s||null===(i=s.user)||void 0===i?void 0:i.email),1)]),Object(l["createElementVNode"])("tr",null,[J,Object(l["createElementVNode"])("td",null,Object(l["toDisplayString"])(null===(b=o.order)||void 0===b||null===(u=b.user)||void 0===u?void 0:u.name),1)]),Object(l["createElementVNode"])("tr",null,[X,Object(l["createElementVNode"])("td",null,Object(l["toDisplayString"])(null===(m=o.order)||void 0===m||null===(O=m.user)||void 0===O?void 0:O.tel),1)]),Object(l["createElementVNode"])("tr",null,[Y,Object(l["createElementVNode"])("td",null,Object(l["toDisplayString"])(null===(p=o.order)||void 0===p||null===(j=p.user)||void 0===j?void 0:j.address),1)]),Object(l["createElementVNode"])("tr",null,[K,o.order.message?(Object(l["openBlock"])(),Object(l["createElementBlock"])("td",Q,Object(l["toDisplayString"])(null===(h=o.order)||void 0===h?void 0:h.message),1)):(Object(l["openBlock"])(),Object(l["createElementBlock"])("td",W,"無備註"))])])])]),Object(l["createElementVNode"])("div",Z,[ee,Object(l["createElementVNode"])("table",null,[(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(o.order.products,(function(t){return Object(l["openBlock"])(),Object(l["createElementBlock"])("tbody",{key:t.id},[Object(l["createElementVNode"])("tr",null,[Object(l["createElementVNode"])("td",te,[Object(l["createElementVNode"])("img",{src:t.product.imageUrl,width:"60",height:"60",style:{"object-fit":"cover"},class:"me-3"},null,8,oe)]),Object(l["createElementVNode"])("td",le,[Object(l["createElementVNode"])("p",ce,Object(l["toDisplayString"])(t.product.title),1),Object(l["createElementVNode"])("p",ne,"價格：NT. "+Object(l["toDisplayString"])(e.toCurrency(Number(t.product.price))),1),Object(l["createElementVNode"])("p",ae,"數量："+Object(l["toDisplayString"])(t.qty),1)])])])})),128))]),Object(l["createElementVNode"])("p",re," 總計：NT. "+Object(l["toDisplayString"])(e.toCurrency(Number(o.order.total))),1)])])])])])],512)}var se=o("7c2b"),ie=o.n(se),be={props:{order:{type:Object,default:function(){return{}}}},data:function(){return{orderModal:""}},methods:{show:function(){this.orderModal.show()},hide:function(){this.orderModal.hide()},copyUrl:function(){var e=document.querySelector(".orderId");navigator.clipboard.writeText("https://shiiinnooo.github.io/table/#/checkout/step3/".concat(e.textContent)),alert("已複製連結")}},mounted:function(){this.orderModal=new ie.a(this.$refs.orderModal)}},ue=o("6b0d"),me=o.n(ue);const Oe=me()(be,[["render",de]]);var pe=Oe,je={class:"modal",ref:"orderDelModal",tabindex:"-1"},he={class:"modal-dialog"},Ne={class:"modal-content"},Ee=Object(l["createElementVNode"])("div",{class:"modal-header bg-dark text-white"},[Object(l["createElementVNode"])("h5",{class:"modal-title"},"刪除訂單"),Object(l["createElementVNode"])("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1),fe={class:"modal-body"},Ve=Object(l["createTextVNode"])(" 確認要刪除 "),ge={class:"text-danger"},ve=Object(l["createTextVNode"])(" 此筆訂單嗎？（刪除後不可再修復） "),ye={class:"modal-footer"},ke=Object(l["createElementVNode"])("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function we(e,t,o,c,n,a){return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",je,[Object(l["createElementVNode"])("div",he,[Object(l["createElementVNode"])("div",Ne,[Ee,Object(l["createElementVNode"])("div",fe,[Object(l["createElementVNode"])("p",null,[Ve,Object(l["createElementVNode"])("span",ge,Object(l["toDisplayString"])(o.order.id),1),ve])]),Object(l["createElementVNode"])("div",ye,[ke,Object(l["createElementVNode"])("button",{type:"button",class:"btn btn-danger",onClick:t[0]||(t[0]=function(t){return e.$emit("del-order",o.order.id)})}," 刪除 ")])])])],512)}var De={props:{order:{type:Object,default:function(){return{}}}},emits:["del-order"],data:function(){return{delModal:""}},mounted:function(){this.delModal=new ie.a(this.$refs.orderDelModal)},methods:{show:function(){this.delModal.show()},hide:function(){this.delModal.hide()}}};const Me=me()(De,[["render",we]]);var Se=Me,xe={class:"modal",ref:"orderDelAllModal",tabindex:"-1"},Be={class:"modal-dialog"},Ce={class:"modal-content"},Ae=Object(l["createStaticVNode"])('<div class="modal-header bg-dark text-white"><h5 class="modal-title">刪除全部訂單</h5><button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><p> 確認要<span class="text-danger fw-bold">刪除全部</span>訂單嗎？（刪除後不可再修復） </p></div>',2),Ie={class:"modal-footer"},Te=Object(l["createElementVNode"])("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Le(e,t,o,c,n,a){return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",xe,[Object(l["createElementVNode"])("div",Be,[Object(l["createElementVNode"])("div",Ce,[Ae,Object(l["createElementVNode"])("div",Ie,[Te,Object(l["createElementVNode"])("button",{type:"button",class:"btn btn-danger",onClick:t[0]||(t[0]=function(t){return e.$emit("del-allOrder")})}," 刪除 ")])])])],512)}var _e={emits:["del-allOrder"],data:function(){return{delModal:""}},mounted:function(){this.delModal=new ie.a(this.$refs.orderDelAllModal)},methods:{show:function(){this.delModal.show()},hide:function(){this.delModal.hide()}}};const $e=me()(_e,[["render",Le]]);var Fe=$e,He={data:function(){return{orders:[],tempOrder:{},pagination:{},isLoading:!1,fullPage:!0}},components:{Pagination:k["a"],OrderModal:pe,OrderDelModal:Se,OrderDelAllModal:Fe},methods:{getOrders:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.loadingShow();var o="".concat("https://vue3-course-api.hexschool.io","/api/").concat("smile0919a","/admin/orders?page=").concat(t);this.$http.get(o).then((function(t){if(t.data.success){var o=t.data,l=o.orders,c=o.pagination;e.orders=l,e.pagination=c,e.loadingHide()}else e.loadingHide(),alert(t.data.message)}))},delOrder:function(e){var t=this;this.loadingShow();var o="".concat("https://vue3-course-api.hexschool.io","/api/").concat("smile0919a","/admin/order/").concat(e);this.$http.delete(o).then((function(e){e.data.success?(t.loadingHide(),t.$refs.delModal.hide(),t.getOrders()):(t.loadingHide(),alert(e.data.message))}))},delAllOrder:function(){var e=this;this.loadingShow();var t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("smile0919a","/admin/orders/all");this.$http.delete(t).then((function(t){t.data.success?(e.loadingHide(),e.$refs.delAllModal.hide(),e.getOrders()):(e.loadingHide(),alert(t.data.message))}))},openModal:function(e){var t=this;this.loadingShow();var o="".concat("https://vue3-course-api.hexschool.io","/api/").concat("smile0919a","/order/").concat(e);this.$http.get(o).then((function(e){e.data.success&&(t.tempOrder=e.data.order,t.loadingHide(),t.$refs.modal.show())}))},openDelModal:function(e){this.tempOrder=Object(y["a"])({},e),this.$refs.delModal.show()},openDelAllModal:function(){this.$refs.delAllModal.show()},loadingShow:function(){this.isLoading=!0},loadingHide:function(){this.isLoading=!1}},created:function(){this.getOrders()}};const Pe=me()(He,[["render",v]]);t["default"]=Pe},a9e3:function(e,t,o){"use strict";var l=o("83ab"),c=o("da84"),n=o("94ca"),a=o("6eeb"),r=o("5135"),d=o("c6b6"),s=o("7156"),i=o("c04e"),b=o("d039"),u=o("7c73"),m=o("241c").f,O=o("06cf").f,p=o("9bf2").f,j=o("58a8").trim,h="Number",N=c[h],E=N.prototype,f=d(u(E))==h,V=function(e){var t,o,l,c,n,a,r,d,s=i(e,!1);if("string"==typeof s&&s.length>2)if(s=j(s),t=s.charCodeAt(0),43===t||45===t){if(o=s.charCodeAt(2),88===o||120===o)return NaN}else if(48===t){switch(s.charCodeAt(1)){case 66:case 98:l=2,c=49;break;case 79:case 111:l=8,c=55;break;default:return+s}for(n=s.slice(2),a=n.length,r=0;r<a;r++)if(d=n.charCodeAt(r),d<48||d>c)return NaN;return parseInt(n,l)}return+s};if(n(h,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var g,v=function(e){var t=arguments.length<1?0:e,o=this;return o instanceof v&&(f?b((function(){E.valueOf.call(o)})):d(o)!=h)?s(new N(V(t)),o,v):V(t)},y=l?m(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),k=0;y.length>k;k++)r(N,g=y[k])&&!r(v,g)&&p(v,g,O(N,g));v.prototype=E,E.constructor=v,a(c,h,v)}}}]);
//# sourceMappingURL=chunk-30bd5072.53d90526.js.map