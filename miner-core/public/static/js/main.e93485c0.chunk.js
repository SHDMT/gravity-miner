(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{180:function(e,t,a){e.exports=a(430)},185:function(e,t,a){},187:function(e,t,a){},414:function(e,t,a){},422:function(e,t,a){},426:function(e,t,a){},428:function(e,t,a){},430:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(9),i=a.n(r),l=(a(185),a(11)),c=a(12),o=a(14),u=a(13),m=a(15),d=a(436),h=a(177),g=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).pages=[];var n=!0,s=!1,r=void 0;try{for(var i,c=e.pages.entries()[Symbol.iterator]();!(n=(i=c.next()).done);n=!0){var m=i.value,d=Object(h.a)(m,2),g=(d[0],d[1]);a.pages.push(g)}}catch(p){s=!0,r=p}finally{try{n||null==c.return||c.return()}finally{if(s)throw r}}return a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.selected;return s.a.createElement("div",{className:"pagecontainer-area"},this.pages.map(function(t,a){var n=e==a?"":"none";return t.refresh?e==a?s.a.createElement("div",{key:a},t.obj):null:s.a.createElement("div",{key:a,style:{display:n}},t.obj)}))}}]),t}(n.Component),p=function(e){function t(e){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"navpage-logo"},s.a.createElement("img",{className:"navpage-logo-icon",src:"../imgs/logo.png"}),s.a.createElement("div",{className:"navpage-logo-title"},this.props.title))}}]),t}(n.Component);var v={selectPage:function(e){var t=new CustomEvent("selectpage",{detail:e});window.dispatchEvent(t)}},f=a(28),E=a(433),b=(a(187),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).pages=e.pages,a.invokeSelectPage=e.selectPage,a.itemList=[],a.setupPage(),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"setupPage",value:function(){var e=this;this.pages.forEach(function(t,a){var n=t.name,s="../../../../imgs/"+t.name.toLowerCase()+"_icon.png",r=t.title,i=t.icon;e.itemList.push({id:a,name:n,title:r,img:s,icon:i})})}},{key:"handleClick",value:function(e){v.selectPage(e)}},{key:"buildIcon",value:function(e,t,a){return e?s.a.createElement("img",{className:"navpage-item-icon",src:t}):s.a.createElement(f.a,{type:a})}},{key:"render",value:function(){var e=this,t=this.props.showLogo?s.a.createElement(p,{title:this.props.title}):"";return s.a.createElement("div",{className:"navpage-area"},t,s.a.createElement(E.a,{defaultSelectedKeys:[this.props.selected+""],defaultOpenKeys:[this.props.selected+""],mode:"inline"},this.itemList.map(function(t){return s.a.createElement(E.a.Item,{onClick:function(){return e.handleClick(t.id)},key:t.id,title:t.title},e.buildIcon(e.props.customIcon,t.img,t.icon),s.a.createElement("p",{className:"navpage-item-name"},t.title))})))}}]),t}(n.Component)),y=a(269),j=a(278),k=a(432),O=a(116),w=a.n(O),C=a(169),N=a.n(C),S="http://127.0.0.1:8000/api/";var I=function(e,t,a){null!=t?w.a.post(S+e,N.a.stringify(t)).then(function(e){a(e.data)}).catch(function(e){a({status:500,data:e})}):w.a.post(S+e).then(function(e){a(e.data)}).catch(function(e){a({status:500,data:e})})},P=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={height:0,mci:0,isCommittee:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"onInterval",value:function(){var e=this;I("getinfo",{},function(t){200===t.status&&e.setState({height:t.data.info.currentHeight,mci:t.data.info.currentMCI,isCommittee:t.data.isCommittee})})}},{key:"componentDidMount",value:function(){var e=this;this.intervalObj=setInterval(function(){return e.onInterval()},5e3),this.onInterval()}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalObj)}},{key:"render",value:function(){return s.a.createElement("div",{className:"homepage-panel blockchaininfo-panel"},s.a.createElement("h2",{className:"panel-title"},"\u533a\u5757\u94fe\u4fe1\u606f"),s.a.createElement(y.a,{gutter:16},s.a.createElement(j.a,{className:"gutter-row",span:1}),s.a.createElement(j.a,{className:"gutter-row",span:7},s.a.createElement(k.a,{className:"blockchaininfo-card",title:"\u533a\u5757\u9ad8\u5ea6",bordered:!1,style:{width:300}},s.a.createElement("h3",null,this.state.height))),s.a.createElement(j.a,{className:"gutter-row",span:7},s.a.createElement(k.a,{className:"blockchaininfo-card",title:"\u4e3b\u94fe\u7d22\u5f15",bordered:!1,style:{width:300}},s.a.createElement("h3",null,this.state.mci))),s.a.createElement(j.a,{className:"gutter-row",span:7},s.a.createElement(k.a,{className:"blockchaininfo-card",title:"\u59d4\u5458\u4f1a",bordered:!1,style:{width:300}},s.a.createElement("h3",null,this.state.isCommittee?"\u662f":"\u5426"))),s.a.createElement(j.a,{className:"gutter-row",span:1})))}}]),t}(n.Component),L=a(437),H=a(161),M=a(172),A={labels:[],datasets:[{label:"\u6316\u77ff\u901f\u5ea6",fill:"start",lineTension:.1,backgroundColor:"rgba(64,169,255,0.4)",borderColor:"rgba(64,169,255,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(64,169,255,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(64,169,255,1)",pointHoverBorderColor:"rgba(64,169,255,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[]}]},D={animation:!1,scales:{yAxes:[{ticks:{beginAtZero:!0}}]}},F=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={ismining:!1,data:A},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleStopMining",value:function(){var e=this;I("stopmining",{},function(t){200===t.status?(e.setState({ismining:!e.state.ismining}),console.log(t),L.a.success("\u505c\u6b62\u6316\u77ff\u6210\u529f!"),e.stopRecord()):(console.log(t.data),L.a.error("\u505c\u6b62\u6316\u77ff\u5931\u8d25!"))})}},{key:"handleStartMining",value:function(){var e=this;I("getminingaddr",{},function(t){var a=t.data;console.log(a),200==t.status?I("startmining",{ncore:4,address:a},function(t){200===t.status?(e.setState({ismining:!e.state.ismining}),console.log(t),L.a.success("\u542f\u52a8\u6316\u77ff\u6210\u529f!"),e.startRecord()):(console.log(t.data),L.a.error("\u542f\u52a8\u6316\u77ff\u5931\u8d25!"))}):L.a.error("\u83b7\u53d6\u6316\u77ff\u5730\u5740\u9519\u8bef\uff01\u8bf7\u91cd\u65b0\u8bbe\u7f6e\u6316\u77ff\u5730\u5740")})}},{key:"timeFormat",value:function(e){var t=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+" ";return t=t+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()}},{key:"onInterval",value:function(){var e=this,t=this.timeFormat(new Date);I("getcurrentspeed",{},function(a){e.state.data.datasets[0].data.length>=10&&(e.state.data.datasets[0].data.splice(0,1),e.state.data.labels.splice(0,1)),e.state.data.datasets[0].data.push(a.data),e.state.data.labels.push(t),e.setState({data:e.state.data})})}},{key:"componentDidMount",value:function(){var e=this;I("ismining",{},function(t){200==t.status&&t.data&&(e.setState({ismining:t.data}),e.startRecord())})}},{key:"startRecord",value:function(){var e=this;this.intervalObj=setInterval(function(){return e.onInterval()},1e3),this.onInterval()}},{key:"stopRecord",value:function(){for(var e=0;e<10;e++)this.state.data.datasets[0].data[e]=0;clearInterval(this.intervalObj)}},{key:"render",value:function(){var e=this,t=s.a.createElement(H.a,{onClick:function(){return e.handleStartMining()},type:"primary"},"\u542f\u52a8\u6316\u77ff");return this.state.ismining&&(t=s.a.createElement(H.a,{onClick:function(){return e.handleStopMining()}},"\u505c\u6b62\u6316\u77ff")),s.a.createElement("div",{className:"homepage-panel mining-controller"},s.a.createElement("h2",{className:"panel-title"},"\u6316\u77ff\u63a7\u5236"),s.a.createElement(y.a,{gutter:16},s.a.createElement(j.a,{span:1}),s.a.createElement(j.a,{span:7},t),s.a.createElement(j.a,{span:1})),s.a.createElement(y.a,{gutter:16},s.a.createElement(j.a,{span:1}),s.a.createElement(j.a,{span:24},s.a.createElement(M.a,{data:this.state.data,options:D,height:"90",redraw:!0})),s.a.createElement(j.a,{span:1})))}}]),t}(n.Component),B=(a(414),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"homepage"},s.a.createElement(P,null),s.a.createElement(F,null))}}]),t}(n.Component)),R=(n.Component,n.Component,a(431)),x=a(435),W=R.a.Item,J=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={miningAddress:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;I("getminingaddr",{},function(t){200==t.status&&e.setState({miningAddress:t.data})})}},{key:"handleMiningAddress",value:function(e){this.setState({miningAddress:e.target.value})}},{key:"handleSubmit",value:function(){var e=this.state.miningAddress;I("updateminingaddr",{address:e},function(e){200==e.status?L.a.success("\u6316\u77ff\u5730\u5740\u4fee\u6539\u6210\u529f!"):L.a.error("\u6316\u77ff\u5730\u5740\u4fee\u6539\u5931\u8d25!")})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("div",{className:"setting-item"},s.a.createElement("p",null,"\u6316\u77ff\u5730\u5740\uff1a"),s.a.createElement(W,{hasFeedback:!0,validateStatus:"",help:""},s.a.createElement(x.a,{style:{width:400},placeholder:"\u8bf7\u8f93\u5165\u6316\u77ff\u5730\u5740",onChange:function(t){return e.handleMiningAddress(t)},value:this.state.miningAddress}))),s.a.createElement(H.a,{type:"primary",onClick:function(){return e.handleSubmit()}},"\u66f4\u6539"))}}]),t}(n.Component),K=a(434),U=(a(422),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).menu=s.a.createElement("div",{className:"account-panel-menu-area"},s.a.createElement(E.a,{selectedKeys:[]},s.a.createElement(E.a.Item,{key:"0",onClick:function(){return a.handleLogout()}},s.a.createElement(f.a,{type:"lock",theme:"outlined"}),"\u9000\u51fa\u767b\u9646"))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleLogout",value:function(){var e=new CustomEvent("login",{detail:!1});window.dispatchEvent(e)}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(K.a,{overlay:this.menu,trigger:["click"]},s.a.createElement("div",{className:"user-panel"},s.a.createElement(f.a,{style:{fontSize:20},type:"user"}),s.a.createElement("span",{className:"user-panel-name"},"Admin"))))}}]),t}(n.Component)),G=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null)}}]),t}(n.Component),z=d.a.Header,T=d.a.Content,Y=d.a.Sider,Z=d.a.Footer,$=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).currentID=0,a.state={pages:new Map,selectedPage:0},a.setupPages(),window.addEventListener("selectpage",function(e){return a.selectPage(e)}),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"setupPages",value:function(){this.addPage("Home","\u4e3b\u9875",s.a.createElement(B,null),"home"),this.addPage("Setting","\u8bbe\u7f6e",s.a.createElement(J,null),"setting")}},{key:"selectPage",value:function(e){var t=e.detail;this.state.selected!=t&&this.setState({selected:t}),this.setState({selectedPage:t}),sessionStorage.setItem("selectedPage",t)}},{key:"addPage",value:function(e,t,a,n){var s=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return this.state.pages.set(this.currentID,{id:this.currentID,name:e,title:t,obj:a,icon:n,refresh:s}),this.currentID++}},{key:"render",value:function(){var e=sessionStorage.getItem("selectedPage");return null==e&&(e=0),s.a.createElement(d.a,{className:"app-content"},s.a.createElement(d.a,null,s.a.createElement(Y,{className:"sider"},s.a.createElement(b,{customIcon:!1,pages:this.state.pages,selected:e,showLogo:!0,title:"Gravity"})),s.a.createElement(d.a,null,s.a.createElement(z,{className:"header"},s.a.createElement(U,null)),s.a.createElement(T,{className:"content"},s.a.createElement(g,{pages:this.state.pages,selected:e})),s.a.createElement(Z,{className:"footer"},s.a.createElement(G,null)))))}}]),t}(n.Component),_=R.a.Item,q=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={uname:"",password:"",passwordHelp:{status:"",help:""}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleUserName",value:function(e){this.setState({uname:e.target.value})}},{key:"handlePasswordName",value:function(e){this.setState({password:e.target.value})}},{key:"handleLogin",value:function(){var e=this,t={uname:this.state.uname,password:this.state.password};I("login",t,function(t){if(200===t.status&&"success"===t.data){e.setPasswordFormStatus("","");var a=new CustomEvent("login",{detail:!0});window.dispatchEvent(a)}else e.setPasswordFormStatus("error","\u5bc6\u7801\u8f93\u5165\u9519\u8bef\uff01")})}},{key:"setPasswordFormStatus",value:function(e,t){this.setState({passwordHelp:{status:e,help:t}})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"login-page"},s.a.createElement("div",{className:"login-form",style:{margin:"0 auto",width:"405px"}},s.a.createElement(y.a,{gutter:16},s.a.createElement(j.a,{span:24},s.a.createElement("div",{className:"login-logo"},s.a.createElement("img",{className:"login-logo-icon",src:"../imgs/logo.png"}),s.a.createElement("div",{className:"login-logo-title"},"Gravity\u6316\u77ff\u7a0b\u5e8f")))),s.a.createElement(y.a,{gutter:16},s.a.createElement(j.a,{span:7},s.a.createElement("div",{className:"login-item"},s.a.createElement(_,{hasFeedback:!0,validateStatus:"",help:""},s.a.createElement(x.a,{prefix:s.a.createElement(f.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),style:{width:400},placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d",onChange:function(t){return e.handleUserName(t)},value:this.state.uname}))),s.a.createElement("div",{className:"login-item"},s.a.createElement(_,{hasFeedback:!0,validateStatus:this.state.passwordHelp.status,help:this.state.passwordHelp.help},s.a.createElement(x.a,{prefix:s.a.createElement(f.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),style:{width:400},placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",type:"password",onChange:function(t){return e.handlePasswordName(t)},value:this.state.password}))))),s.a.createElement(H.a,{style:{float:"right"},type:"primary",onClick:function(){return e.handleLogin()}},"\u767b\u9646")))}}]),t}(n.Component),Q=(a(424),a(426),a(428),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={isLogin:!1},window.addEventListener("login",function(e){return a.setLogin(e)}),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"setLogin",value:function(e){console.log(">>>>>",e),e.detail?sessionStorage.setItem("login",e):sessionStorage.removeItem("login"),this.setState({isLogin:e})}},{key:"render",value:function(){return null==sessionStorage.getItem("login")?s.a.createElement("div",{className:"App"},s.a.createElement(q,null)):s.a.createElement("div",{className:"App"},s.a.createElement($,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[180,2,1]]]);
//# sourceMappingURL=main.e93485c0.chunk.js.map