(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(t,e,a){t.exports=a(19)},16:function(t,e,a){},17:function(t,e,a){},19:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),l=a(4),o=a.n(l),s=(a(16),a(2)),c=a(5),r=a(6),A=a(9),u=a(7),h=a(10),g=a(8),p=a.n(g),f=(a(17),a(1)),k=a.n(f),Q=function(t){function e(){var t,a;Object(c.a)(this,e);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(A.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(i)))).state={location:[0,435],dir:0,vertical_walls:[{height:420,left:0,top:0},{height:205,left:65,top:80},{height:70,left:115,top:350},{height:50,left:250,top:15},{height:70,left:250,top:215},{height:50,left:335,top:300},{height:120,left:400,top:80},{height:70,left:420,top:350},{height:435,left:485,top:65}],horizontal_walls:[{size:485,left:15,top:0},{size:135,left:65,top:65},{size:165,left:250,top:65},{size:165,left:250,top:200},{size:200,left:65,top:285},{size:150,left:335,top:285},{size:150,left:200,top:350},{size:435,left:0,top:420},{size:485,left:0,top:485}],width:50,widthOfWalls:15},a}return Object(h.a)(e,t),Object(r.a)(e,[{key:"isThereAWall",value:function(t){var e,a=this,n=Object(s.a)(this.state.vertical_walls),i=Object(s.a)(this.state.horizontal_walls);if(t<2){var l=n.filter((function(t){return t.top+t.height<=a.state.location[1]||t.top>=a.state.location[1]+a.state.width}));if(l.length===n.length)return null;if(e=(n=n.filter((function(t){return!l.includes(t)}))).reduce((function(t,e){return Math.pow(e.left-a.state.location[0],2)<Math.pow(t.left-a.state.location[0],2)?e:t})),0===t){if(e.left>=this.state.location[0]){if(0===n.indexOf(e))return null;e=n[n.indexOf(e)-1]}}else if(e.left<=this.state.location[0]){if(n.indexOf(e)===n.length-1)return null;e=n[n.indexOf(e)+1]}}else{var o=i.filter((function(t){return t.left+t.size<=a.state.location[0]||t.left>=a.state.location[0]+a.state.width}));if(o.length===i.length)return null;if(e=(i=i.filter((function(t){return!o.includes(t)}))).reduce((function(t,e){return Math.pow(e.top-a.state.location[1],2)<Math.pow(t.top-a.state.location[1],2)?e:t})),2===t){if(e.top>=this.state.location[1]){if(0===i.indexOf(e))return null;e=i[i.indexOf(e)-1],console.log(e)}}else if(e.top<=this.state.location[1]){if(i.indexOf(e)===i.length-1)return null;e=i[i.indexOf(e)+1]}}return e}},{key:"animation",value:function(t){var e=this.state.location[0],a=this.state.location[1],n=this.isThereAWall(t);switch(console.log(n,"WALL"),t){case 0:e=null===n?0:n.left+this.state.widthOfWalls;break;case 1:e=null===n?450:n.left-this.state.width;break;case 2:a=null===n?0:n.top+this.state.widthOfWalls;break;case 3:a=null===n?450:n.top-this.state.width}this.setState({location:[e,a]})}},{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:"App"},i.a.createElement("header",null,i.a.createElement("h1",null,"Labyrinth"),i.a.createElement("nav",{className:"mainNav"},i.a.createElement("ul",null,i.a.createElement("li",null,"Status"),i.a.createElement("li",null,"Points"),i.a.createElement("li",null,"Money")))),i.a.createElement("div",{className:"container"},i.a.createElement("section",{className:"game"},i.a.createElement("img",{src:p.a,className:"ball",style:{transition:"margin 0.7s",margin:"".concat(this.state.location[1],"px 0 0 ").concat(this.state.location[0],"px")},alt:"",width:"50",height:"50"}),this.state.vertical_walls.map((function(e){return i.a.createElement("div",{key:k()(),className:"wall",style:{margin:"".concat(e.top,"px 0 0 ").concat(e.left,"px"),width:t.state.widthOfWalls,height:e.height}})})),this.state.horizontal_walls.map((function(e){return i.a.createElement("div",{key:k()(),className:"wall",style:{margin:"".concat(e.top,"px 0 0 ").concat(e.left,"px"),width:e.size,height:t.state.widthOfWalls}})}))),i.a.createElement("button",{onClick:function(){return t.animation(0)}},"Left"),i.a.createElement("button",{onClick:function(){return t.animation(1)}},"Right"),i.a.createElement("button",{onClick:function(){return t.animation(2)}},"Top"),i.a.createElement("button",{onClick:function(){return t.animation(3)}},"Bottom")))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},8:function(t,e){t.exports="data:image/jpeg;base64,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"}},[[11,1,2]]]);
//# sourceMappingURL=main.6e190ea2.chunk.js.map