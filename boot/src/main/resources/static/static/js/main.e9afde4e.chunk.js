(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{302:function(e,t,a){},304:function(e,t,a){"use strict";a.r(t);var n=a(27),s=a(0),c=a(30),i=a.n(c),l=a(159),r=a(131),o=a(132),d=a(160),u=a(155),h=a(49),m=a(306),j=a(308),g=a(309),b=a(307),f=a(92),O=a.n(f),p=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={userName:"",email:"",columns:[{title:"ID",dataIndex:"id",key:"id"},{title:"\u59d3\u540d",dataIndex:"userName",key:"userName"},{title:"\u7535\u5b50\u90ae\u4ef6",dataIndex:"email",key:"email"},{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"regTime",key:"regTime"}],data:[],loading:!1,selectedRowKeys:[],selectedRows:[]},e.getUser=function(){e.setState({loading:!0}),O.a.get("/rest/user").then((function(t){if(t&&200===t.status){var a=t.data;e.setState({data:a&&a.length?a.map((function(e){return Object(l.a)({key:e.id},e)})):[],loading:!1})}})).catch((function(e){console.log(e)}))},e.addUser=function(t,a){e.setState({loading:!0}),O.a.post("/rest/user",{userName:t,email:a}).then((function(t){t&&200===t.status&&(e.getUser(),e.setState({userName:"",email:""}))})).catch((function(e){console.log(e)}))},e.headleUserName=function(t){var a=t.target.value;e.setState({userName:a})},e.headleEmail=function(t){var a=t.target.value;e.setState({email:a})},e.headleSubmit=function(){var t=e.state,a=t.userName,n=t.email;e.addUser(a,n)},e.headleDetele=function(){O.a.delete("/rest/user").then((function(t){t&&200===t.status&&e.getUser()})).catch((function(e){console.log(e)}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getUser()}},{key:"render",value:function(){var e=this,t=this.state,a=t.columns,s=t.data,c=t.userName,i=t.email,l=t.loading,r=t.selectedRowKeys;return Object(n.jsxs)("div",{style:{width:"98%",margin:"auto"},children:[Object(n.jsxs)(j.a,{style:{margin:"0.5rem"},children:[Object(n.jsx)(g.a,{span:1,children:Object(n.jsx)(b.a,{placeholder:"User Name",value:c,onChange:this.headleUserName})}),Object(n.jsx)(g.a,{span:1,children:Object(n.jsx)(b.a,{placeholder:"Email",value:i,onChange:this.headleEmail})}),Object(n.jsx)(g.a,{span:1,children:Object(n.jsx)(h.a,{type:"primary",onClick:this.headleSubmit,children:"\u63d0\u4ea4"})}),Object(n.jsx)(g.a,{span:1,children:Object(n.jsx)(h.a,{onClick:function(){e.getUser()},children:"\u5237\u65b0"})}),Object(n.jsx)(g.a,{span:1,children:Object(n.jsx)(h.a,{onClick:this.headleDetele,children:"\u5220\u9664"})})]}),Object(n.jsx)(m.a,{columns:a,dataSource:s,loading:l,rowSelection:{selectedRowKeys:r,onChange:function(t,a){console.log(a),e.setState({selectedRowKeys:t,selectedRows:a})}}})]})}}]),a}(s.Component);a(302);function x(){return Object(n.jsx)("div",{children:Object(n.jsx)(p,{})})}i.a.render(Object(n.jsx)(x,{}),document.getElementById("root"))}},[[304,1,2]]]);
//# sourceMappingURL=main.e9afde4e.chunk.js.map