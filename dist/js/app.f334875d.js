(function(t){function e(e){for(var s,c,a=e[0],i=e[1],u=e[2],p=0,f=[];p<a.length;p++)c=a[p],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],s=!0,a=1;a<n.length;a++){var i=n[a];0!==r[i]&&(s=!1)}s&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var s={},r={app:0},o=[];function c(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=s,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(n,s,function(e){return t[e]}.bind(null,s));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=i;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"2ac0":function(t,e,n){"use strict";n("e821")},"38f3":function(t,e,n){t.exports=n.p+"img/1.0fbfdd3f.jpg"},"49c4":function(t,e,n){"use strict";n("b5e6")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("wrapper")],1)},o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("tHeader"),n("div",{staticClass:"main"},[n("div",{staticClass:"sidebar"},[n("div",{staticClass:"sidebar-list"},[n("router-link",{staticClass:"btn-sisebar",attrs:{to:"/"}},[t._v("users")]),n("router-link",{staticClass:"btn-sisebar",attrs:{to:{name:"cartlist",params:{seluser_data:t.SELUSER}}}},[t._v("selected users")])],1)]),n("div",{staticClass:"content"},[n("router-view")],1)]),n("tFooter",{staticClass:"footer"})],1)},a=[],i=n("5530"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("tSort",{staticClass:"sorted",attrs:{options:t.options,selected:t.selected},on:{select:t.sortCategories}})],1)},l=[],p=(n("d81d"),n("b0c0"),n("2f62")),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sorted"},[n("p",{staticClass:"title",on:{click:function(e){t.areOptionsVisible=!t.areOptionsVisible}}},[t._v(" "+t._s(t.selected)+" ")]),t.areOptionsVisible?n("div",{staticClass:"options"},t._l(t.options,(function(e){return n("p",{key:e.value,on:{click:function(n){return t.selectOption(e)}}},[t._v(" "+t._s(e.name)+" ")])})),0):t._e()])},d=[],m={name:"tSort",components:{},props:{options:{type:Array,default:function(){return[]}},selected:{type:String,default:""}},data:function(){return{areOptionsVisible:!1}},computed:{},methods:{selectOption:function(t){this.$emit("select",t),this.areOptionsVisible=!1},hideSelect:function(){this.areOptionsVisible=!1}},watch:{},mounted:function(){document.addEventListener("click",this.hideSelect.bind(this),!0)},beforeDestroy:function(){document.removeEventListener("click",this.hideSelect)}},_=m,h=(n("b462"),n("2877")),b=Object(h["a"])(_,f,d,!1,null,null,null),v=b.exports,E={name:"tHeader",components:{tSort:v},props:{},data:function(){return{options:[{name:"Search",value:"all"},{name:"id",value:"1"},{name:"login",value:"userName"}],selected:"Search",sortedUsers:[]}},computed:Object(i["a"])({},Object(p["c"])(["USERS","SELUSER"])),methods:{sortCategories:function(t){this.sortedUsers=[];var e=this;this.USERS.map((function(n){n.options===t.name&&e.sortedUsers.push(n)})),this.selected=t.name},optionSelect:function(t){this.selected=t.name}},watch:{},mounted:function(){}},S=E,O=(n("2ac0"),Object(h["a"])(S,u,l,!1,null,null,null)),U=O.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("p",[t._v(t._s(t.title))])])},C=[],R={name:"tFooter",components:{},props:{},data:function(){return{title:"test app footer"}},computed:{},methods:{},watch:{},mounted:function(){}},w=R,g=(n("7914"),Object(h["a"])(w,j,C,!1,null,null,null)),y=g.exports,T={name:"wrapper",components:{tHeader:U,tFooter:y},props:{},data:function(){return{}},computed:Object(i["a"])({},Object(p["c"])(["SELUSER"])),methods:{},watch:{},mounted:function(){}},P=T,x=(n("92bc"),Object(h["a"])(P,c,a,!1,null,null,null)),k=x.exports,L={name:"App",components:{wrapper:k}},$=L,V=(n("034f"),Object(h["a"])($,r,o,!1,null,null,null)),I=V.exports,F=n("8c4f"),M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"users"},t._l(t.USERS,(function(e){return n("userItem",{key:e.name,attrs:{user_data:e},on:{selectedUser:t.selectedUser}})})),1)},A=[],D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"users__item"},[s("img",{staticClass:"avatar",attrs:{src:n("38f3"),alt:"users-avatar"}}),t.isVisiblePop?s("tPopup",{staticClass:"popup__pos",on:{closePop:t.closePop}},[s("p",[t._v(t._s(t.user_data.info))])]):t._e(),s("a",{staticClass:"show-info",attrs:{href:"#user-info"},on:{click:t.showInfo}},[s("h3",[t._v(t._s(t.user_data.name))])]),s("p",[t._v("Login: "+t._s(t.user_data.login))]),s("button",{on:{click:t.selectedUser}},[t._v("select")])],1)},G=[],H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"popup"},[n("div",{staticClass:"popup__header"},[n("p",[t._v(t._s(t.title))])]),n("div",{staticClass:"popup__content"},[t._t("default")],2),n("div",{staticClass:"popup__footer"},[n("button",{on:{click:t.closePop}},[t._v("Close")])])])},J=[],N={name:"tPopup",components:{},props:{},data:function(){return{title:"Truck number"}},computed:{},methods:{closePop:function(){this.$emit("closePop")}},watch:{},mounted:function(){}},q=N,z=(n("b31a"),Object(h["a"])(q,H,J,!1,null,null,null)),B=z.exports;n("b680");function K(t){return t=parseFloat(t),t.toFixed(2)}var Q={name:"users",components:{tPopup:B},props:{user_data:{type:Object,default:function(){return{}}}},data:function(){return{isVisiblePop:!1}},filters:{toFix:K},computed:{},methods:{showInfo:function(){this.isVisiblePop=!0},closePop:function(){this.isVisiblePop=!1},selectedUser:function(){this.$emit("selectedUser",this.user_data)}},watch:{},mounted:function(){}},W=Q,X=(n("69a6"),Object(h["a"])(W,D,G,!1,null,null,null)),Y=X.exports,Z={name:"users",components:{userItem:Y},props:{},data:function(){return{}},computed:Object(i["a"])({},Object(p["c"])(["USERS","SELUSER"])),methods:Object(i["a"])(Object(i["a"])({},Object(p["b"])(["GET_USERS_FROM_API","SELECTED_USER"])),{},{selectedUser:function(t){this.SELECTED_USER(t)}}),watch:{},mounted:function(){this.GET_USERS_FROM_API().then((function(t){t.data&&console.log("Data arrived!")}))}},tt=Z,et=(n("bca5"),Object(h["a"])(tt,M,A,!1,null,null,null)),nt=et.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cart-users"},[n("h3",[t._v("selected users")]),t._l(t.seluser_data,(function(e,s){return n("cartUserItem",{key:e.name,attrs:{seluser_item:e},on:{deleteUser:function(e){return t.deleteUser(s)}}})}))],2)},rt=[],ot=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cart-user-item"},[s("img",{attrs:{src:n("38f3"),alt:"users-avatar"}}),s("div",{staticClass:"cart-user-item-info"},[s("p",[t._v(t._s(t.seluser_item.name))]),s("p",[t._v(t._s(t.seluser_item.login))])]),s("button",{on:{click:t.deleteUser}},[t._v("delete")])])},ct=[],at={name:"cartUserItem",components:{},props:{seluser_item:{type:Object,default:function(){return{}}}},data:function(){return{}},computed:{},methods:{deleteUser:function(){this.$emit("deleteUser")}},watch:{},mounted:function(){}},it=at,ut=(n("f65a"),Object(h["a"])(it,ot,ct,!1,null,null,null)),lt=ut.exports,pt={name:"cartUsers",components:{cartUserItem:lt},props:{seluser_data:{type:Array,default:function(){return[]}}},data:function(){return{}},computed:{},methods:Object(i["a"])(Object(i["a"])({},Object(p["b"])(["DELETE_USER"])),{},{deleteUser:function(t){this.DELETE_USER(t)}}),watch:{},mounted:function(){}},ft=pt,dt=(n("49c4"),Object(h["a"])(ft,st,rt,!1,null,null,null)),mt=dt.exports;s["a"].use(F["a"]);var _t=new F["a"]({routes:[{path:"/",name:"list",component:nt,props:!0},{path:"/cartlist",name:"cartlist",component:mt,props:!0}]}),ht=_t,bt=(n("fb6a"),n("a434"),n("bc3a")),vt=n.n(bt);s["a"].use(p["a"]);var Et=new p["a"].Store({state:{users:[],seluser:[]},mutations:{SET_USERS_TO_STATE:function(t,e){t.users=e},SET_SELUSER:function(t,e){if(t.seluser.length){var n=!1;t.seluser.map((function(s){s.name===e.name&&(n=!0,t.seluser.slice(e))})),n||t.seluser.push(e)}else t.seluser.push(e)},REMOVE_USER:function(t,e){t.seluser.splice(e,1)}},actions:{GET_USERS_FROM_API:function(t){var e=t.commit;return vt()("http://localhost:3000/users",{method:"GET"}).then((function(t){return e("SET_USERS_TO_STATE",t.data),t})).catch((function(t){return console.log(t),t}))},SELECTED_USER:function(t,e){var n=t.commit;n("SET_SELUSER",e),console.log("SET_SELUSER",e)},DELETE_USER:function(t,e){var n=t.commit;n("REMOVE_USER",e)}},getters:{USERS:function(t){return t.users},SELUSER:function(t){return t.seluser}}}),St=Et;n("d1e78");s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(I)},store:St,router:ht}).$mount("#app")},"69a6":function(t,e,n){"use strict";n("9c83")},"71c9":function(t,e,n){},7914:function(t,e,n){"use strict";n("acca")},"85ec":function(t,e,n){},"91e8":function(t,e,n){},"92bc":function(t,e,n){"use strict";n("ec57")},"9c83":function(t,e,n){},acca:function(t,e,n){},b31a:function(t,e,n){"use strict";n("71c9")},b462:function(t,e,n){"use strict";n("be00")},b5e6:function(t,e,n){},bca5:function(t,e,n){"use strict";n("91e8")},be00:function(t,e,n){},cfb9:function(t,e,n){},e821:function(t,e,n){},ec57:function(t,e,n){},f65a:function(t,e,n){"use strict";n("cfb9")}});
//# sourceMappingURL=app.f334875d.js.map