webpackJsonp([1],{"2mV7":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("gNcp"),n={};i.keys().forEach(function(t){"./index.js"!==t&&(n[t.replace(/(\.\/|\.js)/g,"")]=i(t).default)}),e.default=n},"3Wch":function(t,e){},"4jPK":function(t,e){},AUlb:function(t,e){},BQGY:function(t,e){},Evho:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={state:{IDList:[{name:"居民身份证",type:"IDCARD"},{name:"军官证",type:"OFFICER"},{name:"士兵证",type:"SOLDIER"},{name:"军官离退休证",type:"RETIRED"},{name:"境外人员身份证",type:"OUTSIDE"},{name:"外交人员身份证明",type:"DIPLOMATIC"}],licenseList:["A1","A2","A3","B1","B2"]},mutations:{},actions:{}}},GAYP:function(t,e){},GYl7:function(t,e){},IcnI:function(t,e,s){"use strict";var i=s("7+uW"),n=s("NYxO"),a=s("2mV7");i.default.use(n.a),e.a=new n.a.Store({modules:a.default,strict:!1})},"J+Ay":function(t,e){},K1GB:function(t,e){},N18P:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),n=s("IcnI"),a={name:"App",$store:n.a},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=s("VU/8")(a,o,!1,function(t){s("kw81")},null,null).exports,l=s("/ocq"),c={name:"header-box",data:function(){return{}},props:{title:{type:String,default:""},backStatus:{type:Boolean,default:!1},infoStatus:{type:Boolean,default:!1}},computed:{phone:function(){return this.$store.state.login.phone},loginStatus:function(){return this.$store.state.status.loginStatus}},methods:{goBack:function(){history.back(-1)},goInfo:function(){var t="";t=this.loginStatus?"/self-info":"/login",this.$router.push(t)}},mounted:function(){}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header-box"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.backStatus,expression:"backStatus"}],staticClass:"back",on:{click:function(e){t.goBack()}}},[s("i",{staticClass:"el-icon-arrow-left"})]),t._v(" "),s("div",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.infoStatus,expression:"infoStatus"}],staticClass:"mobile",on:{click:function(e){t.goInfo()}}},[t._v(t._s(t.phone))])])},staticRenderFns:[]};var d=s("VU/8")(c,u,!1,function(t){s("BQGY")},null,null).exports,v={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"test-tips-box"},[e("div",{staticClass:"tips-main"},[e("div",[this._v("\n      满分教育：适用于在一个违法记分周期内累积记分达到12分及以上的机动车驾驶人。\n    ")]),this._v(" "),e("div",[this._v("审验教育：适用于持有大型客车、牵引车、城市公交车、中型客车、大型货车（以下简称大中型客货车）驾驶证一个记分周期内有记分且尚未达到12分的，持有其他准驾车型驾驶证发生交通事故造成人员死亡承担同等以上责任未被吊销驾驶证的，以及校车驾驶人。")])])])}]};var p={name:"home-box",data:function(){return{headerTitle:"教育管理平台"}},computed:{loginStatus:function(){return this.$store.state.login.loginStatus}},components:{Header:d,Banner:s("VU/8")({name:"test-tips-box",data:function(){return{}}},v,!1,function(t){s("xRwX")},null,null).exports},methods:{goSub:function(t,e){"1"===t&&(this.loginStatus?this.$router.push(e):this.$router.push("/login")),"2"===t&&this.$router.push(e)}},mounted:function(){this.$store.dispatch("getCode",{type:"register",phone:"15010626364"})}},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home-box"},[s("Header",{attrs:{title:t.headerTitle,"info-status":!0}}),t._v(" "),s("Banner"),t._v(" "),s("div",{staticClass:"home-list"},[s("div",{staticClass:"home-list-one"},[s("div",{staticClass:"home-item",on:{click:function(e){t.goSub("1","/book-fullmark")}}},[t._v("满分教育预约")]),t._v(" "),s("div",{staticClass:"home-item",on:{click:function(e){t.goSub("1","/book-exam")}}},[t._v("审验教育预约")]),t._v(" "),s("div",{staticClass:"home-item",on:{click:function(e){t.goSub("1","/book-pra")}}},[t._v("体验教育预约")]),t._v(" "),s("div",{staticClass:"home-item",on:{click:function(e){t.goSub("1","/book-fullmark")}}},[t._v("参加体验教育")])]),t._v(" "),s("div",{staticClass:"home-list-two"},[s("div",{staticClass:"home-item",on:{click:function(e){t.goSub("1","/self-info")}}},[t._v("个人信息")]),t._v(" "),s("div",{staticClass:"home-item",on:{click:function(e){t.goSub("1","/book-list")}}},[t._v("我的预约单")]),t._v(" "),s("div",{staticClass:"home-item",on:{click:function(e){t.goSub("2","/audit-query")}}},[t._v("审核状态查询")]),t._v(" "),s("div",{staticClass:"home-item",on:{click:function(e){t.goSub("2","/update")}}},[t._v("修改手机号码")])])])],1)},staticRenderFns:[]};var f=s("VU/8")(p,h,!1,function(t){s("K1GB")},null,null).exports,m=s("PJh5"),_=s.n(m);function g(t){return!!/^1[34578]\d{9}$/.test(t)}var y={name:"get-code",data:function(){return{phone:""}},props:{type:{type:String,default:"login"}},computed:{verifyCode:function(){return this.$store.state.login.verify.code},getCodeBtnStatus:function(){return!g(this.phone)},apiStatus:function(){return this.$store.state.login.api.status},apiMsg:function(){return this.$store.state.login.api.msg},apiType:function(){return this.$store.state.login.api.type}},watch:{apiStatus:function(){"0x0000"!==this.apiStatus&&"code"===this.apiType&&(alert(this.apiMsg),this.$store.dispatch("resetApi"))}},methods:{getCode:function(){var t=this.type,e=this.phone;this.$store.dispatch("getCode",{type:t,phone:e})}}},C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"get-code"},[s("div",{staticClass:"page-item"},[s("el-input",{attrs:{placeholder:"请输入手机号码"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),t._v(" "),s("div",{staticClass:"get-btn page-item"},[s("el-input",{attrs:{placeholder:"请输入验证码"},model:{value:t.verifyCode,callback:function(e){t.verifyCode=e},expression:"verifyCode"}}),t._v(" "),s("el-button",{attrs:{disabled:t.getCodeBtnStatus},on:{click:function(e){t.getCode()}}},[t._v("获取")])],1)])},staticRenderFns:[]};var k=s("VU/8")(y,C,!1,function(t){s("vDXM")},null,null).exports,b={name:"login",components:{Header:d,GetCode:k},data:function(){return{headerTitle:"登录",idType:"",idNo:""}},computed:{apiStatus:function(){return this.$store.state.login.api.status},apiMsg:function(){return this.$store.state.login.api.msg},apiType:function(){return this.$store.state.login.api.type},phone:function(){return this.$store.state.login.verify.phone},verifyCodeToken:function(){return this.$store.state.login.verify.token},verifyCode:function(){return this.$store.state.login.verify.code},getCodeBtnStatus:function(){return!checkPhone(this.phone)},IDList:function(){return this.$store.state.data.IDList},loginBtnStatu:function(){return!(this.idType&&this.idNo&&this.phone&&this.verifyCode)}},watch:{apiStatus:function(){"login"===this.apiType&&("0x0000"!==this.apiStatus?(alert(this.apiMsg),this.$store.dispatch("resetApi")):this.pageChage("/home"))}},methods:{login:function(){this.$store.dispatch("userLogin",{username:this.phone,password:this.verifyCode,verifyCodeToken:this.verifyCodeToken})},reg:function(){this.pageChage("/reg")},update:function(){this.pageChage("/update")},auditQuery:function(){this.pageChage("/audit-query")},pageChage:function(t){this.$router.push(t)}},mounted:function(){this.$store.dispatch("resetApi"),this.$store.dispatch("resetVerify")}},j={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[s("Header",{attrs:{title:t.headerTitle,"back-status":!0}}),t._v(" "),s("div",{staticClass:"page-title"},[t._v("\n    登录驾驶人用户\n  ")]),t._v(" "),s("div",{staticClass:"page-main"},[s("div",{staticClass:" page-item"},[s("el-select",{attrs:{placeholder:"请选择证件类型"},model:{value:t.idType,callback:function(e){t.idType=e},expression:"idType"}},t._l(t.IDList,function(t){return s("el-option",{key:t.type,attrs:{label:t.name,value:t.type}})}))],1),t._v(" "),s("div",{staticClass:"page-item"},[s("el-input",{attrs:{disabled:!t.idType,placeholder:"请输入证件号"},model:{value:t.idNo,callback:function(e){t.idNo=e},expression:"idNo"}})],1),t._v(" "),s("GetCode",{attrs:{type:"login"}}),t._v(" "),s("div",{staticClass:"login-btn page-item"},[s("el-button",{attrs:{type:"primary",disabled:t.loginBtnStatu},on:{click:function(e){t.login()}}},[t._v("登录")])],1),t._v(" "),s("div",{staticClass:"login-other"},[s("div",{on:{click:function(e){t.reg()}}},[t._v("注册用户")]),t._v(" "),s("div",{on:{click:function(e){t.update()}}},[t._v("更换手机")]),t._v(" "),s("div",{on:{click:function(e){t.auditQuery()}}},[t._v("查询审核状态")])])],1)],1)},staticRenderFns:[]};var T=s("VU/8")(b,j,!1,function(t){s("3Wch")},null,null).exports,S={name:"reg",components:{Header:d,GetCode:k},data:function(){return{headerTitle:"教育管理平台",idType:"",idNo:"",licenseType:"",licenseNo:"",licenseBeginDate:0,licenseEndDate:0,idCardImgUrlToken:"",headUrlToken:""}},computed:{apiStatus:function(){return this.$store.state.login.api.status},apiMsg:function(){return this.$store.state.login.api.msg},apiType:function(){return this.$store.state.login.api.type},phone:function(){return this.$store.state.login.verify.phone},verifyCodeToken:function(){return this.$store.state.login.verify.token},verifyCode:function(){return this.$store.state.login.verify.code},IDList:function(){return this.$store.state.data.IDList},licenseList:function(){return this.$store.state.data.licenseList},getCodeBtnStatus:function(){return!checkPhone(this.phone)},regBtnStatus:function(){return!(this.idType&&this.idNo&&this.licenseType&&this.licenseNo&&this.licenseBeginDate&&this.licenseEndDate&&this.phone&&this.verifyCode)}},watch:{apiStatus:function(){"register"===this.apiType&&("0x0000"!==this.apiStatus?(alert(this.apiMsg),this.$store.dispatch("resetApi")):this.$router.push("/login"))}},methods:{handleSuccessIDPic:function(t){this.idCardImgUrlToken=t.data.token},handleSuccessSelfPic:function(t){this.headUrlToken=t.data.token},reg:function(){this.$store.dispatch("userRegister",{idType:this.idType,idNo:this.idNo,idCardImgUrlToken:this.idCardImgUrlToken,licenseType:this.licenseType,licenseNo:this.licenseNo,licenseBeginDate:this.licenseBeginDate,licenseEndDate:this.licenseEndDate,headUrlToken:this.headUrlToken,phone:this.phone,verifyCode:this.verifyCode,verifyCodeToken:this.verifyCodeToken})}},mounted:function(){this.$store.dispatch("resetApi"),this.$store.dispatch("resetVerify")}},D={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"reg"},[s("Header",{attrs:{title:t.headerTitle,"back-status":!0}}),t._v(" "),s("div",{staticClass:"page-title"},[t._v("\n    注册驾驶人用户\n  ")]),t._v(" "),s("div",{staticClass:"page-main"},[s("div",{staticClass:" page-item"},[s("el-select",{attrs:{placeholder:"请选择证件类型"},model:{value:t.idType,callback:function(e){t.idType=e},expression:"idType"}},t._l(t.IDList,function(t){return s("el-option",{key:t.type,attrs:{label:t.name,value:t.type}})}))],1),t._v(" "),s("div",{staticClass:"page-item"},[s("el-input",{attrs:{disabled:!t.idType,placeholder:"请输入证件号"},model:{value:t.idNo,callback:function(e){t.idNo=e},expression:"idNo"}})],1),t._v(" "),s("div",{staticClass:" page-item"},[s("el-select",{attrs:{placeholder:"请选择准驾车型"},model:{value:t.licenseType,callback:function(e){t.licenseType=e},expression:"licenseType"}},t._l(t.licenseList,function(t){return s("el-option",{key:t,attrs:{label:t,value:t}})}))],1),t._v(" "),s("div",{staticClass:" page-item"},[s("el-input",{attrs:{disabled:!t.licenseType,placeholder:"请输入驾驶证档案编号"},model:{value:t.licenseNo,callback:function(e){t.licenseNo=e},expression:"licenseNo"}})],1),t._v(" "),s("div",{staticClass:"page-item"},[s("el-date-picker",{attrs:{type:"date",placeholder:"驾驶证开始时间","value-format":"timestamp"},model:{value:t.licenseBeginDate,callback:function(e){t.licenseBeginDate=e},expression:"licenseBeginDate"}})],1),t._v(" "),s("div",{staticClass:" page-item"},[s("el-date-picker",{attrs:{type:"date",placeholder:"驾驶证结束时间","value-format":"timestamp"},model:{value:t.licenseEndDate,callback:function(e){t.licenseEndDate=e},expression:"licenseEndDate"}})],1),t._v(" "),s("div",{staticClass:"page-item"},[s("el-upload",{staticClass:"upload-demo",attrs:{action:"http://47.95.250.247/driver-api/file/upload","on-success":t.handleSuccessIDPic}},[s("el-button",{attrs:{size:"small",type:"primary"}},[t._v("上传驾驶人证件图片")])],1)],1),t._v(" "),s("div",{staticClass:"page-item"},[s("el-upload",{staticClass:"upload-demo",attrs:{action:"http://47.95.250.247/driver-api/file/upload","on-success":t.handleSuccessSelfPic}},[s("el-button",{attrs:{size:"small",type:"primary"}},[t._v("上传驾驶人本人头像")])],1)],1),t._v(" "),s("GetCode",{attrs:{type:"register"}}),t._v(" "),s("div",{staticClass:"login-btn page-item"},[s("el-button",{attrs:{type:"primary",disabled:t.regBtnStatus},on:{click:function(e){t.reg()}}},[t._v("注册")])],1),t._v(" "),t._m(0)],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-tips page-item"},[e("div",{staticClass:"tips-title"},[this._v("提示：")]),this._v(" "),e("div",[this._v("\n        请如实填写以上信息，注册虚假注册信息可能会导致黑名单\n      ")])])}]};var x=s("VU/8")(S,D,!1,function(t){s("N18P")},null,null).exports,E={name:"test-tips-box",components:{Header:d},data:function(){return{testTipsTitle:"考试须知"}}},$={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"test-tips-box"},[e("Header",{attrs:{title:this.testTipsTitle}}),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tips-main"},[e("div",[this._v("\n            满分教育：适用于在一个违法记分周期内累积记分达到12分及以上的机动车驾驶人。\n        ")]),this._v(" "),e("div",[this._v("审验教育：适用于持有大型客车、牵引车、城市公交车、中型客车、大型货车（以下简称大中型客货车）驾驶证一个记分周期内有记分且尚未达到12分的，持有其他准驾车型驾驶证发生交通事故造成人员死亡承担同等以上责任未被吊销驾驶证的，以及校车驾驶人。")])])}]};var U=s("VU/8")(E,$,!1,function(t){s("WoMh")},null,null).exports,A={name:"book-list",data:function(){return{headerTitle:"教育管理平台",bookList:["",""]}},components:{Header:d},methods:{goDetail:function(){this.$router.push("/book-detail")}}},N={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"book-list"},[s("Header",{attrs:{title:t.headerTitle,"back-status":!0,"info-status":!0}}),t._v(" "),s("div",{staticClass:"page-title"},[t._v("\n    我的预约单\n  ")]),t._v(" "),s("div",{staticClass:"page-main page-item"},[t._m(0),t._v(" "),t._l(t.bookList,function(e,i){return s("div",{key:i,staticClass:"book-item",on:{click:function(e){t.goDetail()}}},[s("div",[t._v(t._s(e))]),t._v(" "),s("div",{staticClass:"book-item-main"},[t._v("151850106")]),t._v(" "),s("div",{staticClass:"book-item-main"},[t._v("满分教育")]),t._v(" "),s("div",{staticClass:"book-item-main"},[t._v("2018-06-10 上午场（8:00-12:00）")])])})],2)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"list-title"},[e("div",{staticClass:"title-row"},[this._v("预约单号")]),this._v(" "),e("div",{staticClass:"title-row"},[this._v("预约类型")]),this._v(" "),e("div",{staticClass:"title-row"},[this._v("场次")])])}]};var P=s("VU/8")(A,N,!1,function(t){s("4jPK")},null,null).exports,I={name:"book-detail",data:function(){return{headerTitle:"预约"}},components:{Header:d},methods:{cancelBook:function(){},goBack:function(){this.$router.push("/book-list")}}},w={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"book-detail"},[s("Header",{attrs:{title:t.headerTitle,"back-status":!0,"info-status":!0}}),t._v(" "),s("div",{staticClass:"page-title"},[t._v("\n    预约单\n  ")]),t._v(" "),s("div",{staticClass:"page-main"},[s("div",{staticClass:"page-tips"},[t._v("请出示预约信息参加教育")]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"book-info page-item"},[s("div",[t._v("预约场次")]),t._v(" "),s("div",[t._v("审验教育")]),t._v(" "),s("div",[t._v("2018-06-10 上午场（8:00-12:00）")]),t._v(" "),s("div",{staticClass:"page-item"},[s("el-button",{attrs:{type:"primary"},on:{click:function(e){t.cancelBook()}}},[t._v("取消预约")]),t._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:function(e){t.goBack()}}},[t._v("返回")])],1)])])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-info page-item"},[s("div",[t._v("预约单号：83771723123")]),t._v(" "),s("div",[t._v("驾驶人姓名：古龙")]),t._v(" "),s("div",[t._v("驾驶人手机：1844444422")]),t._v(" "),s("div",[t._v("驾驶人证件：12883712344")]),t._v(" "),s("div",[t._v("驾驶证编号：123712364123")])])}]};var B=s("VU/8")(I,w,!1,function(t){s("GAYP")},null,null).exports,L={name:"self-info",data:function(){return{headerTitle:"教育管理平台"}},computed:{loginStatus:function(){return this.$store.state.login.loginStatus}},watch:{loginStatus:function(){this.loginStatus||this.$router.push("/home")}},components:{Header:d},methods:{logout:function(){this.$store.dispatch("userLogout")}}},R={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"self-info"},[s("Header",{attrs:{title:t.headerTitle,"back-status":!0}}),t._v(" "),s("div",{staticClass:"page-title"},[t._v("\n    个人信息\n  ")]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"page-item"},[s("el-button",{attrs:{type:"primary"},on:{click:function(e){t.logout()}}},[t._v("退出登录")])],1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:" page-main page-item self-info-main"},[s("div",[t._v("手机号码：18511112222")]),t._v(" "),s("div",[t._v("准驾车型：A1")]),t._v(" "),s("div",[t._v("驾驶证号：71238d81238")]),t._v(" "),s("div",[t._v("驾驶证有效期：2018-06-17至2018-06-17")]),t._v(" "),s("div",[t._v("证件类型：身份证")]),t._v(" "),s("div",[t._v("证件号码：71238d81238")]),t._v(" "),s("div",[t._v("注册时间：2018-06-09 22:11:53")]),t._v(" "),s("div",[t._v("审核状态：已通过/未通过/待审核")]),t._v(" "),s("div",[t._v("审核时间：2018-06-17 16:07:42")])])}]};var z=s("VU/8")(L,R,!1,function(t){s("J+Ay")},null,null).exports,Q={name:"expe-book",data:function(){return{headerTitle:"预约",effectiveDate:""}},components:{Header:d},computed:{},methods:{},mounted:function(){}},H={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"expe-book"},[s("Header",{attrs:{title:t.headerTitle,"back-status":!0,"info-status":!0}}),t._v(" "),s("div",{staticClass:"page-title"},[t._v("体验教育预约")]),t._v(" "),s("div",{staticClass:"page-main"},[s("div",{staticClass:"page-tips"},[t._v("请选择所要预约的教育时间")]),t._v(" "),s("div",{staticClass:"page-item"},[s("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:t.effectiveDate,callback:function(e){t.effectiveDate=e},expression:"effectiveDate"}})],1),t._v(" "),s("div",{staticClass:"page-item current-status"},[t._v("\n      满分场（8:00-12:00） 现已预约12/20人\n    ")]),t._v(" "),s("div",{staticClass:"page-item current-status"},[t._v("\n      下午场（1:30-5:30） 现已预约3/20人\n    ")]),t._v(" "),s("div",{staticClass:"page-item"},[s("el-button",{attrs:{type:"primary"}},[t._v("提交预约")])],1),t._v(" "),t._m(0)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-tips page-item"},[e("p",[this._v("请认真阅读信息，按照实际情况选择预约：")]),this._v(" "),e("p",[this._v("1、驾驶人审验教育时间不得少于3小时。")]),this._v(" "),e("p",[this._v("2、对在一个记分周期内累积记分达到9至11分的大中型客货车驾驶人和校车驾驶人，以及持有其他准驾车型驾驶证发生交通事故造成人员死亡承担同等以上责任未被吊销驾驶证的驾驶人，应当采用现场审验教育形式。")])])}]},F=s("VU/8")(Q,H,!1,null,null,null).exports,V={name:"exam-book",data:function(){return{headerTitle:"预约",effectiveDate:""}},components:{Header:d},computed:{},methods:{},mounted:function(){}},O={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"exam-book"},[s("Header",{attrs:{title:t.headerTitle,"back-status":!0,"info-status":!0}}),t._v(" "),s("div",{staticClass:"page-title"},[t._v("满分教育预约")]),t._v(" "),s("div",{staticClass:"page-main"},[s("div",{staticClass:"page-tips"},[t._v("请选择所要预约的教育时间")]),t._v(" "),s("div",{staticClass:"page-item"},[s("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:t.effectiveDate,callback:function(e){t.effectiveDate=e},expression:"effectiveDate"}})],1),t._v(" "),s("div",{staticClass:"page-item current-status"},[t._v("\n      满分场（8:00-12:00） 现已预约12/20人\n    ")]),t._v(" "),s("div",{staticClass:"page-item current-status"},[t._v("\n      下午场（1:30-5:30） 现已预约3/20人\n    ")]),t._v(" "),s("div",{staticClass:"page-item"},[s("el-button",{attrs:{type:"primary"}},[t._v("提交预约")])],1),t._v(" "),t._m(0)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-tips page-item"},[e("p",[this._v("请认真阅读信息，按照实际情况选择预约：")]),this._v(" "),e("p",[this._v("1、驾驶人审验教育时间不得少于3小时。")]),this._v(" "),e("p",[this._v("2、对在一个记分周期内累积记分达到9至11分的大中型客货车驾驶人和校车驾驶人，以及持有其他准驾车型驾驶证发生交通事故造成人员死亡承担同等以上责任未被吊销驾驶证的驾驶人，应当采用现场审验教育形式。")])])}]},q=s("VU/8")(V,O,!1,null,null,null).exports,M={name:"edu-book",data:function(){return{headerTitle:"预约",effectiveDate:"",dialogVisible:!0}},components:{Header:d},computed:{},methods:{},mounted:function(){}},G={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"edu-book"},[s("Header",{attrs:{title:t.headerTitle,"back-status":!0,"info-status":!0}}),t._v(" "),s("div",{staticClass:"page-title"},[t._v("满分教育预约")]),t._v(" "),s("div",{staticClass:"page-main"},[s("div",{staticClass:"page-tips"},[t._v("请选择所要预约的教育时间")]),t._v(" "),s("div",{staticClass:"page-item"},[s("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:t.effectiveDate,callback:function(e){t.effectiveDate=e},expression:"effectiveDate"}})],1),t._v(" "),s("div",{staticClass:"page-item current-status"},[t._v("\n      满分场（8:00-12:00） 现已预约12/20人\n    ")]),t._v(" "),s("div",{staticClass:"page-item"},[s("el-button",{attrs:{type:"primary"}},[t._v("提交预约")])],1),t._v(" "),t._m(0)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-tips page-item"},[e("p",[this._v("请认真阅读信息，按照实际情况选择预约：")]),this._v(" "),e("p",[this._v("1、驾驶人满分教育时间为7日，每日教育时间不得少于4小时，其中现场教育时间不得少于3日。")]),this._v(" "),e("p",[this._v("2、大中型客货车、校车驾驶人，以及在一个记分周期内有两次以上达到12分或者累积记分达到24分以上的驾驶人，现场教育时间不得少于5日。")])])}]};var Y=s("VU/8")(M,G,!1,function(t){s("AUlb")},null,null).exports,W={name:"audit-query",components:{Header:d},data:function(){return{headerTitle:"查询审核状态",phone:""}},computed:{auditQueryStatus:function(){return this.$store.state.login.auditQueryStatus},auditQueryData:function(){return this.$store.state.login.auditQueryData},verifyCodeToken:function(){return this.$store.state.login.verifyCodeToken},verifyCode:function(){return this.$store.state.login.verifyCode},getCodeBtnStatus:function(){return!g(this.phone)},auditQueryBtnStatus:function(){return!this.phone||!this.verifyCode}},methods:{formatTime:function(t){return function(t){return _()(t).format("YYYY-MM-DD")}(t)},getCode:function(){var t=this.phone;this.$store.dispatch("getCode",{type:"auditstate",phone:t})},auditQuery:function(){this.$store.dispatch("auditQuery",{phone:this.phone,verifyCode:this.verifyCode,verifyCodeToken:this.verifyCodeToken})},update:function(){}}},X={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"audit-query"},[s("Header",{attrs:{title:t.headerTitle,"back-status":!0}}),t._v(" "),s("div",{staticClass:"page-title"},[t._v("\n    查询审核状态\n  ")]),t._v(" "),s("div",{staticClass:"page-main"},[s("div",{staticClass:"page-item"},[s("el-input",{attrs:{placeholder:"请输入手机号码"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),t._v(" "),s("div",{staticClass:"get-btn page-item"},[s("el-input",{attrs:{placeholder:"请输入验证码"},model:{value:t.verifyCode,callback:function(e){t.verifyCode=e},expression:"verifyCode"}}),t._v(" "),s("el-button",{attrs:{disabled:t.getCodeBtnStatus},on:{click:function(e){t.getCode()}}},[t._v("获取")])],1),t._v(" "),s("div",{staticClass:"page-item"},[s("el-button",{attrs:{type:"primary",disabled:t.auditQueryBtnStatus},on:{click:function(e){t.auditQuery()}}},[t._v("查询")])],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.auditQueryStatus,expression:"auditQueryStatus"}],staticClass:"page-item self-info-main"},[s("div",[t._v("手机号码："+t._s(t.auditQueryData.phone))]),t._v(" "),s("div",[t._v("准驾车型："+t._s(t.auditQueryData.licenseType))]),t._v(" "),s("div",[t._v("驾驶证号："+t._s(t.auditQueryData.licenseNo))]),t._v(" "),s("div",[t._v("驾驶证有效期："+t._s(t.formatTime(t.auditQueryData.licenseBeginDate))+"--"+t._s(t.formatTime(t.auditQueryData.licenseEndDate)))]),t._v(" "),s("div",[t._v("证件类型："+t._s(t.auditQueryData.idType))]),t._v(" "),s("div",[t._v("证件号码："+t._s(t.auditQueryData.idNo))]),t._v(" "),s("div",[t._v("注册时间："+t._s(t.formatTime(t.auditQueryData.createTime)))]),t._v(" "),s("div",[t._v("审核状态："+t._s(t.auditQueryData.auditState))]),t._v(" "),s("div",[t._v("审核时间："+t._s(t.formatTime(t.auditQueryData.auditTime)))]),t._v(" "),s("div",{staticClass:"page-item"},[s("el-button",{attrs:{type:"primary"},on:{click:function(e){t.update()}}},[t._v("修改信息")])],1)])])],1)},staticRenderFns:[]};var K=s("VU/8")(W,X,!1,function(t){s("cHT0")},null,null).exports,J={name:"reg",components:{Header:d},data:function(){return{headerTitle:"教育管理平台",idType:"",idNo:"",licenseType:"",licenseNo:"",phone:"",oldPhone:"",verifyCode:""}},computed:{IDList:function(){return this.$store.state.data.IDList},licenseList:function(){return this.$store.state.data.licenseList},regBtnStatu:function(){return!(this.idType&&this.idNo&&this.licenseType&&this.licenseNo&&this.licenseBeginDate&&this.licenseEndDate&&this.phone&&this.verifyCode)}}},Z={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"reg"},[s("Header",{attrs:{title:t.headerTitle,"back-status":!0}}),t._v(" "),s("div",{staticClass:"page-title"},[t._v("\n        更换绑定手机\n    ")]),t._v(" "),s("div",{staticClass:"page-main"},[s("div",{staticClass:" page-item"},[s("el-select",{attrs:{placeholder:"请选择证件类型"},model:{value:t.idType,callback:function(e){t.idType=e},expression:"idType"}},t._l(t.IDList,function(t){return s("el-option",{key:t.type,attrs:{label:t.name,value:t.type}})}))],1),t._v(" "),s("div",{staticClass:"page-item"},[s("el-input",{attrs:{disabled:!t.idType,placeholder:"请输入证件号"},model:{value:t.idNo,callback:function(e){t.idNo=e},expression:"idNo"}})],1),t._v(" "),s("div",{staticClass:" page-item"},[s("el-select",{attrs:{placeholder:"请选择准驾车型"},model:{value:t.licenseType,callback:function(e){t.licenseType=e},expression:"licenseType"}},t._l(t.licenseList,function(t){return s("el-option",{key:t,attrs:{label:t,value:t}})}))],1),t._v(" "),s("div",{staticClass:" page-item"},[s("el-input",{attrs:{disabled:!t.licenseType,placeholder:"请输入驾驶证档案编号"},model:{value:t.licenseNo,callback:function(e){t.licenseNo=e},expression:"licenseNo"}})],1),t._v(" "),s("div",{staticClass:"page-item"},[s("el-input",{attrs:{placeholder:"请输入手机号码"},model:{value:t.oldPhone,callback:function(e){t.oldPhone=e},expression:"oldPhone"}})],1),t._v(" "),s("div",{staticClass:"page-item"},[s("el-input",{attrs:{placeholder:"请输入手机号码"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),t._v(" "),s("div",{staticClass:"get-btn page-item"},[s("el-input",{attrs:{placeholder:"请输入验证码"},model:{value:t.verifyCode,callback:function(e){t.verifyCode=e},expression:"verifyCode"}}),t._v(" "),s("el-button",[t._v("获取")])],1),t._v(" "),s("div",{staticClass:"login-btn page-item"},[s("el-button",{attrs:{type:"primary",disabled:t.regBtnStatu}},[t._v("提交")])],1),t._v(" "),t._m(0)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-tips page-item"},[e("div",{staticClass:"tips-title"},[this._v("提示：")]),this._v(" "),e("div",[this._v("\n                请如实填写以上信息，注册虚假注册信息可能会导致黑名单\n            ")])])}]};var tt=s("VU/8")(J,Z,!1,function(t){s("izyf")},null,null).exports,et={data:function(){return{fileList:[]}},$store:n.a,methods:{handleProgress:function(t){console.log(t.name)},handleSuccess:function(t){console.log(t)}}},st={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("el-upload",{staticClass:"upload-demo",attrs:{action:"http://47.95.250.247/driver-api/file/upload","before-upload":this.handleProgress,"on-success":this.handleSuccess}},[e("el-button",{attrs:{size:"small",type:"primary"}},[this._v("点击上传")])],1)],1)},staticRenderFns:[]},it=s("VU/8")(et,st,!1,null,null,null).exports;i.default.use(l.a);var nt=new l.a({routes:[{path:"/",name:"Home",component:f},{path:"/home",name:"Home",component:f},{path:"/login",name:"Login",component:T},{path:"/reg",name:"Reg",component:x},{path:"/test-tips",name:"TestTips",component:U},{path:"/book-list",name:"BookList",component:P},{path:"/book-detail",name:"BookDetail",component:B},{path:"/self-info",name:"SelfInfo",component:z},{path:"/book-pra",name:"BookPra",component:F},{path:"/book-exam",name:"BookExam",component:q},{path:"/book-fullmark",name:"BookFullMark",component:Y},{path:"/audit-query",name:"AuditQuery",component:K},{path:"/update",name:"Update",component:tt},{path:"/test",name:"Test",component:it}]}),at=s("zL8q"),ot=s.n(at);s("tvR6"),s("GYl7");i.default.use(ot.a),i.default.config.productionTip=!1,new i.default({el:"#app",router:nt,store:n.a,components:{App:r},template:"<App/>"})},QkNq:function(t,e){t.exports={service:{host:"http://47.95.250.247/driver-api"}}},WoMh:function(t,e){},cHT0:function(t,e){},gNcp:function(t,e,s){var i={"./data.js":"Evho","./index.js":"2mV7","./login.js":"jeSg","./status.js":"iUI+"};function n(t){return s(a(t))}function a(t){var e=i[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}n.keys=function(){return Object.keys(i)},n.resolve=a,t.exports=n,n.id="gNcp"},"iUI+":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={state:{loginStatus:!1},mutations:{UPDATE_LOGIN_STATUS:function(t,e){t.loginStatus=e}},actions:{updateLoginStatus:function(t,e){(0,t.commit)("UPDATE_LOGIN_STATUS",e)}}}},izyf:function(t,e){},jeSg:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("woOf"),n=s.n(i),a=s("Zrlr"),o=s.n(a),r=s("wxAW"),l=s.n(r),c=s("mtWM"),u=s.n(c),d=s("QkNq"),v=s.n(d),p=s("IcnI"),h=new(function(){function t(){o()(this,t)}return l()(t,[{key:"getAuthorization",value:function(){return{authKey:p.a.state.login.authKey}}},{key:"getCode",value:function(t,e){return u.a.get(v.a.service.host+"/verifycode/send/"+t+"?phone="+e)}},{key:"userRegister",value:function(t){return u.a.post(v.a.service.host+"/user/register",t)}},{key:"userLogin",value:function(t){return u.a.post(v.a.service.host+"/user/login",t)}},{key:"userLogout",value:function(){return u.a.post(v.a.service.host+"/user/logout",{headers:this.getAuthorization()})}},{key:"auditQuery",value:function(t){return u.a.post(v.a.service.host+"/user/audit/query",t)}}]),t}()),f={UPDATE_API:function(t,e){t.api=n()(t.api,e)},UPDATE_LOGIN_STATUS:function(t,e){t.loginStatus=e},GET_VERIFY_DATA:function(t,e){t.verify=n()(t.verify,e)},UPDATE_AUDIT_QUERY_STATUS:function(t,e){t.auditQueryStatus=e},GET_AUDIT_QUERY_DATA:function(t,e){t.auditQueryData=n()(t.auditQueryData,e)}},m={resetApi:function(t){(0,t.commit)("UPDATE_API",{status:"",msg:"",type:""})},resetVerify:function(t){(0,t.commit)("GET_VERIFY_DATA",{code:"",token:"",phone:""})},getCode:function(t,e){var s=t.commit,i=e.type,n=e.phone;h.getCode(i,n).then(function(t){var e=t.data;s("UPDATE_API",{status:e.status,msg:e.message,type:"code"}),e.data&&s("GET_VERIFY_DATA",e.data)}).catch(function(t){console.log("[httpService-getCode-fail]",t)})},userRegister:function(t,e){var s=t.commit;console.log(e),h.userRegister(e).then(function(t){var e=t.data;s("UPDATE_API",{status:e.status,msg:e.message,type:"register"})}).catch(function(t){throw t})},userLogin:function(t,e){var s=t.commit;h.userLogin(e).then(function(t){var e=t.data;s("UPDATE_API",{status:e.status,msg:e.message,type:"login"})}).catch(function(t){console.log("[httpService-userLogin-fail]",t)})},userLogout:function(t){var e=t.commit;h.userLogout().then(function(t){e("UPDATE_LOGIN_STATUS",!1),console.log("[httpService-userLogout-success]",t)}).catch(function(t){e("UPDATE_LOGIN_STATUS",!0),console.log("[httpService-userLogout-fail]",t)})},auditQuery:function(t,e){var s=t.commit;h.auditQuery(e).then(function(t){s("UPDATE_AUDIT_QUERY_STATUS",!0),console.log("[httpService-auditQuery-success]",t)}).catch(function(t){s("UPDATE_AUDIT_QUERY_STATUS",!1),console.log("[httpService-auditQuery-fail]",t)})},userUpdate:function(){}};e.default={state:{phone:"登录",authKey:"",loginStatus:"",auditQueryStatus:!1,auditQueryData:{},api:{status:"",msg:"",type:""},verify:{code:"",token:"",phone:""}},mutations:f,actions:m}},kw81:function(t,e){},tvR6:function(t,e){},uslO:function(t,e,s){var i={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function n(t){return s(a(t))}function a(t){var e=i[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}n.keys=function(){return Object.keys(i)},n.resolve=a,t.exports=n,n.id="uslO"},vDXM:function(t,e){},xRwX:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1fe6000045504182d6fd.js.map