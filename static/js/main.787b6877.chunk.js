(window["webpackJsonprobot-app"]=window["webpackJsonprobot-app"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),c=n.n(r),s=(n(13),n(3)),i=n(4),l=n(6),m=n(5),u=n(7),h=(n(14),function(e){return o.a.createElement("div",{className:"card"},o.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id)}),o.a.createElement("h1",{className:"font"},e.monster.name),o.a.createElement("h4",{className:"font"},e.monster.email))}),d=(n(15),function(e){return o.a.createElement("div",{className:"cardList"},e.monsters.map(function(e){return o.a.createElement(h,{key:e.id,monster:e},e.name)}))}),f=(n(16),function(e){var t=e.placeholder,n=e.onchange;return o.a.createElement("div",{className:"search"},o.a.createElement("input",{type:"search",placeholder:t,onChange:n}))}),p=(n(17),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={monsters:[],searchField:""},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({monsters:t})})}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,a=t.searchField,r=n.filter(function(e){return e.name.toLowerCase().includes(a.toLowerCase())});return o.a.createElement("div",{className:"App"},o.a.createElement("h1",{className:"logo"},"RoboFriends"),o.a.createElement(f,{placeholder:"robo search",onchange:function(t){return e.setState({searchField:t.target.value})}}),o.a.createElement(d,{monsters:r}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.787b6877.chunk.js.map