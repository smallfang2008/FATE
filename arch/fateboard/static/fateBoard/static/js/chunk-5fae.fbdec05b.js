(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5fae"],{C9MU:function(n,t,e){var o=e("RMZv");"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);(0,e("SZ7m").default)("9e62a6e4",o,!0,{})},RMZv:function(n,t,e){(n.exports=e("I1BE")(!1)).push([n.i,".running-container {\n  height: 100%;\n  padding: 50px calc((25vw - 110px) / 2);\n}\n.running-container .job-list > li {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    position: relative;\n    width: 25vw;\n    height: 16.5vw;\n    margin: 15px;\n    background: #fff;\n    border-radius: 15px;\n    /*box-shadow: 2px 0 10px 5px #eee;*/\n}\n.running-container .job-list > li .job-id {\n      position: absolute;\n      left: 15px;\n      top: 15px;\n}\n.running-container .job-list > li .status {\n      cursor: pointer;\n}\n.running-container .job-list > li .status .text {\n        left: 50%;\n        top: 50%;\n        width: 100px;\n        height: 100px;\n        margin-left: -50px;\n        margin-top: -50px;\n        text-align: center;\n        line-height: 100px;\n}\n.running-container .job-list > li .enter {\n      position: absolute;\n      right: 15px;\n      bottom: 15px;\n}\n",""])},"b/+g":function(n,t,e){"use strict";e.r(t);var o=e("dv4G"),i={components:{},directives:{hoverText:{inserted:function(n){n.onmouseover=function(){var t=n.children[0].innerText;n.children[0].innerText="KILL",n.onmouseout=function(){n.children[0].innerText=t}}}}},data:function(){return{loading:!0,jobList:[]}},mounted:function(){this.getJobList()},methods:{getJobList:function(){var n=this;this.jobList=[],this.loading=!0,Object(o.b)().then(function(t){n.loading=!1,t.data.forEach(function(t){var e=t.fJobId,o=t.fStatus,i=t.fProgress,s="running"===o?i+"%":o;n.jobList.push({jobId:e,status:s,statusProgress:i})})})},initWebSocket:function(){var n=this;n.websocket=new WebSocket("ws://172.16.153.113:16688/log/1/1/1/1"),console.log(n.websocket),n.websocket.onopen=function(){console.log("websocket onopen"),n.isSocket=!0},n.websocket.onmessage=function(t){var e=JSON.parse(t.data);switch(console.log("websocket请求回来的数据"),console.log(e),e.Command){case"8801":n.fullscreenLoading=!1,0===e.code?(n.photograph=e.Body.photoUrl,n.getRecordInfo(),n.$message.success(e.Msg)):(n.code=1,n.$message.error(e.Msg));break;case"8300":n.$message.success(e.Msg),n.selectTempId=null,n.textSend="";break;default:n.$message.error(e.Msg),n.selectTempId=null,n.textSend="",n.photograph=""}},n.websocket.onerror=function(){n.initWebSocket()}},enter:function(n){this.$router.push({path:"/dashboard",query:{jobId:n}})},handleKillJob:function(n){var t=this;this.$confirm("You can't undo this action","Are you sure you want to kill this job?",{confirmButtonText:"Sure",cancelButtonText:"Cancel",type:"warning"}).then(function(){t.submitKillJob(n)}).catch(function(){console.log("cancel kill")})},submitKillJob:function(n){var t=this;Object(o.g)(n).then(function(e){console.log("kill job:"+n),t.getJobList()})}}},s=(e("jfYB"),e("KHd+")),r=Object(s.a)(i,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticClass:"running-container bg-dark"},[e("ul",{staticClass:"job-list flex flex-center flex-wrap"},n._l(n.jobList,function(t){return e("li",{key:t.jobId,staticClass:"flex flex-center justify-center"},[e("span",{staticClass:"job-id"},[n._v(n._s(t.jobId))]),n._v(" "),e("div",{directives:[{name:"hover-text",rawName:"v-hover-text"}],staticClass:"status pos-r",on:{click:function(e){n.handleKillJob(t.jobId)}}},[e("span",{staticClass:"text pos-a"},[n._v(n._s(t.status))]),n._v(" "),e("el-progress",{attrs:{percentage:t.statusProgress,"show-text":!1,width:100,type:"circle"}})],1),n._v(" "),e("span",{staticClass:"enter text-primary pointer",on:{click:function(e){n.enter(t.jobId)}}},[n._v("Enter")])])}))])},[],!1,null,null,null);r.options.__file="index.vue";t.default=r.exports},dv4G:function(n,t,e){"use strict";e.d(t,"a",function(){return i}),e.d(t,"b",function(){return s}),e.d(t,"g",function(){return r}),e.d(t,"e",function(){return a}),e.d(t,"d",function(){return c}),e.d(t,"c",function(){return u}),e.d(t,"f",function(){return l}),e.d(t,"h",function(){return d});var o=e("t3Un");function i(n){return Object(o.a)({url:"/job/query/all",method:"get",params:n})}function s(n){return Object(o.a)({url:"/job/query/status",method:"get",params:n})}function r(n){return Object(o.a)({url:"/job/v1/pipeline/job/stop",method:"post",data:{job_id:n}})}function a(n){return Object(o.a)({url:"/job/query/"+n,method:"get"})}function c(n){return Object(o.a)({url:"/v1/pipeline/dag/dependencies",method:"post",data:{job_id:n}})}function u(n){return Object(o.a)({url:"/v1/tracking/component/parameters",method:"post",data:n})}function l(n){return Object(o.a)({url:"/v1/tracking/component/output/model",method:"post",data:n})}function d(n){var t=n.componentId,e=n.jobId,i=n.begin,s=n.end;return Object(o.a)({url:"/queryLogWithSize/"+t+"/"+e+"/"+i+"/"+s+"  ",method:"get"})}},jfYB:function(n,t,e){"use strict";var o=e("C9MU");e.n(o).a}}]);