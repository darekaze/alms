(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["userprofile"],{"0466":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",{attrs:{"justify-center":"","mt-4":"","mb-4":""}},[e.isUserLoggedIn?r("v-flex",{attrs:{xs12:"",sm10:"",md8:"",lg6:""}},[r("panel",{attrs:{title:"User profile"}},[r("v-text-field",{attrs:{label:"Name","prepend-icon":"face",required:""},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}}),r("v-text-field",{attrs:{label:"Phone No.","prepend-icon":"phone_android",required:""},model:{value:e.user.phonenumber,callback:function(t){e.$set(e.user,"phonenumber",t)},expression:"user.phonenumber"}}),r("v-textarea",{attrs:{label:"Shipping Address","prepend-icon":"home"},model:{value:e.user.address,callback:function(t){e.$set(e.user,"address",t)},expression:"user.address"}}),r("v-btn",{attrs:{color:"primary"},on:{click:e.save}},[e._v("Update")])],1),r("v-dialog",{attrs:{"max-width":"290"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("v-card-text",[e._v("\n          Personal information updated!\n        ")]),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:function(t){e.dialog=!1}}},[e._v("\n            Close\n          ")])],1)],1)],1)],1):r("v-flex",{attrs:{xs10:""}},[r("h3",[e._v("Please Login to use this function")])])],1)},a=[],s=r("a34a"),o=r.n(s),i=r("2f62"),u=r("9c97"),l=r("ca6b"),c={update:function(e){return Object(l["a"])().put("userprofile",e)}};function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){p(e,t,r[t])})}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t,r,n,a,s,o){try{var i=e[s](o),u=i.value}catch(l){return void r(l)}i.done?t(u):Promise.resolve(u).then(n,a)}function v(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var s=e.apply(t,r);function o(e){f(s,n,a,o,i,"next",e)}function i(e){f(s,n,a,o,i,"throw",e)}o(void 0)})}}var h={data:function(){return{user:{name:null,phonenumber:null,address:null},dialog:!1}},components:{Panel:u["a"]},methods:{save:function(){var e=v(o.a.mark(function e(){var t;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.update(this.user);case 3:if(t=e.sent.data.updated,this.$store.dispatch("updateUser",this.user),t){e.next=7;break}throw new Error("Fail to update");case 7:this.dialog=!0,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log(e.t0);case 13:case"end":return e.stop()}},e,this,[[0,10]])}));return function(){return e.apply(this,arguments)}}()},computed:d({},Object(i["b"])({isUserLoggedIn:function(e){return e.auth.isUserLoggedIn}})),mounted:function(){this.isUserLoggedIn?(this.user.address=this.$store.state.auth.user.address,this.user.name=this.$store.state.auth.user.name,this.user.phonenumber=this.$store.state.auth.user.phonenumber):this.$router.push("/")}},b=h,m=r("2877"),g=r("6544"),x=r.n(g),w=r("8336"),_=r("b0af"),y=r("99d9"),k=r("169a"),O=r("0e8f"),P=r("a722"),V=r("9910"),j=r("2677"),$=r("a844"),U=Object(m["a"])(b,n,a,!1,null,null,null);U.options.__file="UserProfile.vue";t["default"]=U.exports;x()(U,{VBtn:w["a"],VCard:_["a"],VCardActions:y["a"],VCardText:y["b"],VDialog:k["a"],VFlex:O["a"],VLayout:P["a"],VSpacer:V["a"],VTextField:j["a"],VTextarea:$["a"]})},"9c97":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"elevation-2"},[r("v-toolbar",{staticClass:"primary",attrs:{flat:"",dense:"",dark:""}},[r("v-toolbar-title",[e._v(e._s(e.title))])],1),r("div",{staticClass:"pl-4 pr-4 pt-2 pb-2"},[e._t("default",[e._v("\n      No slot content defined\n    ")])],2)],1)},a=[],s={props:["title"]},o=s,i=r("2877"),u=r("6544"),l=r.n(u),c=r("71d9"),d=r("2a7f"),p=Object(i["a"])(o,n,a,!1,null,null,null);p.options.__file="Panel.vue";t["a"]=p.exports;l()(p,{VToolbar:c["a"],VToolbarTitle:d["b"]})}}]);
//# sourceMappingURL=userprofile.9ebe2c8d.js.map