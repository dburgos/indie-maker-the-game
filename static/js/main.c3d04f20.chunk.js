(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(49)},25:function(e,t,n){},27:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),i=n(19),r=n.n(i),c=(n(25),n(53)),o=n(50),u=n(6),s=n(7),m=n(9),d=n(8),p=n(10),v=n(29),h=function(e){return l.a.createElement("span",{className:"emoji",role:"img","aria-label":e.label?e.label:"","aria-hidden":e.label?"false":"true"},e.symbol)},b=(n(27),function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"Start"},l.a.createElement("h1",null,l.a.createElement(h,{symbol:"\ud83d\udc68\u200d\ud83d\udcbb"})),l.a.createElement("h1",null,"Indie Maker"),l.a.createElement("h5",null,"The Game"),l.a.createElement(v.a,{to:"/make",className:"PlayBtn"},"Play"))}}]),t}(a.Component)),y=n(4),f=function(e){var t,n=[{value:1,symbol:""},{value:1e3,symbol:"K"},{value:1e6,symbol:"M"},{value:1e9,symbol:"G"},{value:1e12,symbol:"T"},{value:1e15,symbol:"P"},{value:1e18,symbol:"E"}];for(t=n.length-1;t>0&&!(e>=n[t].value);t--);return(e/n[t].value).toFixed(0).replace(/\.0+$|(\.[0-9]*[1-9])0+$/,"$1")+n[t].symbol},E=(n(38),Object(y.b)(function(e){return e.make})(function(e){return l.a.createElement("header",{className:"Header"},l.a.createElement("h1",null,l.a.createElement(h,{symbol:"\ud83d\udcb5",label:"money"}),l.a.createElement("br",null),"$",f(e.money)),l.a.createElement("h1",null,l.a.createElement(h,{symbol:"\ud83d\udde3",label:"followers"}),l.a.createElement("br",null),f(e.followers)),e.level>0?l.a.createElement("h1",null,l.a.createElement(h,{symbol:"\ud83c\udfc5",label:"level"}),l.a.createElement("br",null),e.level):null)})),k=n(51),g=(n(40),function(){return l.a.createElement("footer",null,l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(k.a,{to:"".concat("/indie-maker-the-game","/upgrades"),activeClassName:"active"},l.a.createElement(h,{symbol:"\ud83d\udcb8",label:"money"}),l.a.createElement("br",null),"Upgrades")),l.a.createElement("li",null,l.a.createElement(k.a,{to:"".concat("/indie-maker-the-game","/make"),activeClassName:"active"},l.a.createElement(h,{symbol:"\ud83d\udc68\u200d\ud83d\udcbb",label:"money"}),l.a.createElement("br",null),"Make")),l.a.createElement("li",null,l.a.createElement(k.a,{to:"".concat("/indie-maker-the-game","/achievements"),activeClassName:"active"},l.a.createElement(h,{symbol:"\ud83c\udfc6",label:"money"}),l.a.createElement("br",null),"Achievements")))))}),w=Object(y.b)(function(e){return e.make})(function(e){return l.a.createElement("div",{className:"make-tip"},l.a.createElement("h1",null,"Build something and spread the word!"),l.a.createElement("h3",null,"Or is it viceversa? ",l.a.createElement(h,{symbol:"\ud83e\udd14"})))}),O=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={animated:!1},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"onClick",value:function(e){var t=this;e.preventDefault(),this.props.dispatch({type:"BUILD"}),this.setState({animated:!0}),setTimeout(function(e){t.setState({animated:!1})},200)}},{key:"render",value:function(e){return l.a.createElement("button",{id:"build-btn",className:"green button "+(this.state.animated?"animated":""),onClick:this.onClick.bind(this)},l.a.createElement("h1",null,l.a.createElement(h,{symbol:"\ud83d\ude80"})),"Build")}}]),t}(l.a.Component),j=Object(y.b)()(O),C=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={animated:!1},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"onClick",value:function(e){var t=this;e.preventDefault(),this.props.dispatch({type:"MARKETING"}),this.setState({animated:!0}),setTimeout(function(e){t.setState({animated:!1})},500)}},{key:"render",value:function(e){return l.a.createElement("button",{id:"marketing-btn",className:"pink button "+(this.state.animated?"animated":""),onClick:this.onClick.bind(this)},l.a.createElement("h1",null,l.a.createElement(h,{symbol:"\ud83c\udfb2"})),"Marketing")}}]),t}(l.a.Component),N=Object(y.b)()(C),A=(n(43),function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(w,null),l.a.createElement(j,null),l.a.createElement(N,null),l.a.createElement(g,null))}}]),t}(a.Component)),q=(n(45),Object(y.b)(function(e){return e})(function(e){return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement("ul",{className:"upgrades list-group list-group-flush"},e.upgrades.map(function(t){return t.acquired?null:l.a.createElement("li",{className:"list-group-item",key:t.id},l.a.createElement("div",{style:{display:"inline-block",width:"100%"}},l.a.createElement("h3",null,l.a.createElement(h,{symbol:t.icon})," ",t.title),l.a.createElement("p",null,t.description),l.a.createElement("button",{className:"green button",disabled:e.make.money<t.cost,onClick:function(n){n.preventDefault(),e.dispatch({type:"BUY",id:t.id});var a=t.update;a.cost=t.cost,e.dispatch({type:"UPGRADE",payload:a})}},"Buy for $",t.cost)))})),l.a.createElement(g,null))})),T=(n(47),Object(y.b)(function(e){return e})(function(e){return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement("ul",{className:"achievements list-group list-group-flush"},e.achievements.map(function(e){return e.acquired?null:l.a.createElement("li",{className:e.unlocked?"":"locked",key:e.id},l.a.createElement("h1",null,l.a.createElement(h,{symbol:e.icon,label:"Achievement"})),l.a.createElement("h3",null,e.title),l.a.createElement("p",null,e.description))})),l.a.createElement(g,null))})),I=n(11),P=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).timer=n.timer.bind(Object(I.a)(Object(I.a)(n))),n.checkAchievements=n.checkAchievements.bind(Object(I.a)(Object(I.a)(n))),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.interval=setInterval(this.timer,60),this.intervalAchievements=setInterval(this.checkAchievements,2e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval),clearInterval(this.intervalAchievements)}},{key:"timer",value:function(){this.props.dispatch({type:"UPDATE"})}},{key:"checkAchievements",value:function(){this.props.dispatch({type:"UNLOCK",stats:this.props})}},{key:"render",value:function(e){return null}}]),t}(l.a.Component),D=Object(y.b)(function(e){return e.make})(P),U=function(){return l.a.createElement("main",null,l.a.createElement(D,null),l.a.createElement(c.a,{basename:"/indie-maker-the-game"},l.a.createElement(o.a,{exact:!0,path:"".concat("/indie-maker-the-game","/"),component:b}),l.a.createElement(o.a,{exact:!0,path:"".concat("/indie-maker-the-game","/make"),component:A}),l.a.createElement(o.a,{exact:!0,path:"".concat("/indie-maker-the-game","/upgrades"),component:q}),l.a.createElement(o.a,{exact:!0,path:"".concat("/indie-maker-the-game","/achievements"),component:T})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=n(52),M=n(12),S={builds:0,marketing:0,followers:0,money:100,level:0,conversion:1,productivity:10,upgrades:0,playTime:0,startPlay:new Date},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BUILD":return Object.assign({},e,{builds:e.builds+1});case"MARKETING":return Object.assign({},e,{marketing:e.marketing+1});case"UPDATE":if(100*Math.random()<90)return e;var n=e.marketing*e.productivity/300,a=e.builds*e.productivity/1e3;return Object.assign({},e,{money:e.money+parseInt(e.followers*e.conversion/1e3,10),followers:0===e.marketing?0:e.followers+parseInt(n+a,10)+e.level,level:e.followers.toString().length>2?e.followers.toString().length-2:0,playTime:((new Date).getTime()-e.startPlay.getTime())/1e3});case"UPGRADE":var l=t.payload;return Object.assign({},e,{upgrades:e.upgrades+1,money:e.money-(l.cost||0),marketing:e.marketing+(l.payload||0),followers:e.followers+(l.followers||0),level:e.level+(l.level||0),conversion:e.conversion+(l.conversion||0),productivity:e.productivity+(l.productivity||0)});default:return e}},V=[{id:1,icon:"\u26a1\ufe0f",title:"Upgrade to SSD servers",description:"Conversion +5%",cost:250,acquired:!1,update:{conversion:5}},{id:2,icon:"\ud83d\udc69\u200d\ud83c\udfa8",title:"Influencer Campaign",description:"Followers +225",cost:1e3,acquired:!1,update:{followers:225}},{id:3,icon:"\ud83d\udcbb",title:"New powerful laptop",description:"Productivity +10%",cost:2500,acquired:!1,update:{productivity:10}},{id:4,icon:"\ud83d\udd2e",title:"Ads Campaign #1",description:"Followers +357",cost:3e3,acquired:!1,update:{followers:357}},{id:5,icon:"\ud83d\udc71\u200d\u2640\ufe0f",title:"Hire blogger",description:"Conversion +3%",cost:3e4,acquired:!1,update:{conversion:3}},{id:6,icon:"\ud83e\udddb\u200d\u2642\ufe0f",title:"Hire lawyer",description:"Productivity +2%",cost:5e4,acquired:!1,update:{productivity:2}},{id:7,icon:"\ud83d\udcca",title:"Use Ghostboard for the blog",description:"Productivity +10%",cost:500,acquired:!1,update:{productivity:10}},{id:8,icon:"\ud83e\udd16",title:"Automatize some tasks",description:"Productivity +7%",cost:9e3,acquired:!1,update:{productivity:7}},{id:9,icon:"\ud83d\udd2e",title:"Ads Campaign #2",description:"Followers +2,000",cost:45e3,acquired:!1,update:{followers:2e3}},{id:10,icon:"\ud83d\udc69",title:"Hire a marketer",description:"Conversion +5%",cost:69e3,acquired:!1,update:{conversion:5}},{id:11,icon:"\ud83d\udc69\u200d\ud83d\udcbb",title:"Hire a dev",description:"Builds +1,000",cost:95e3,acquired:!1,update:{builds:1e3}},{id:12,icon:"\ud83d\udd25",title:"Rise salaries",description:"Productivity +10%",cost:1e5,acquired:!1,update:{productivity:10}},{id:13,icon:"\ud83d\udcfa",title:"TV ad",description:"Followers +10,000",cost:125e3,acquired:!1,update:{followers:1e4}},{id:14,icon:"\ud83d\udd2e",title:"Ads Campaign #3",description:"Followers +5,000",cost:15e4,acquired:!1,update:{followers:5e3}},{id:15,icon:"\ud83c\udfc8",title:"SuperBowl Ad",description:"Followers +500,000",cost:1e6,acquired:!1,update:{followers:5e5}}],F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BUY":return e.map(function(e){return e.id===t.id?(e.acquired=!0,e):e});default:return e}},$=[{key:1,icon:"\ud83d\udcb0",title:"The first one",description:"Get a $1M for your first time",field:"money",minValue:1e6,unlocked:!1},{key:2,icon:"\ud83d\ude02",title:"Look Zuck!",description:"Grow your audience to 10M people",field:"followers",minValue:1e7,unlocked:!1},{key:3,icon:"\u2728",title:"The Key",description:"Do more than 1,000 marketing actions",field:"marketing",minValue:1e3,unlocked:!1},{key:5,icon:"\ud83d\uded2",title:"I take everything, thanks",description:"Buy all upgrades",field:"upgrades",minValue:15,unlocked:!1},{key:4,icon:"\ud83c\udfb1",title:"I feel lucky",description:"Can you reach level 8?",field:"level",minValue:8,unlocked:!1},{key:6,icon:"\ud83e\udd70",title:"Thank you!",description:"Play 1 hour",field:"playTime",minValue:3600,unlocked:!1}],x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UNLOCK":var n=t.stats;return e.map(function(e){if(!e.unlocked){var t=n[e.field]>=e.minValue;e.unlocked=t}return e});default:return e}},K=Object(M.b)({make:G,upgrades:F,achievements:x}),H=Object(M.c)(K);r.a.render(l.a.createElement(y.a,{store:H},l.a.createElement(B.a,null,l.a.createElement(U,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.c3d04f20.chunk.js.map