(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),c=a.n(r),u=(a(14),a(3)),i=a(4),o=a(6),s=a(5),m=a(7),d=[{id:1,name:"Play Station 4",price:500,quantity:3},{id:2,name:"iPhone XS",price:1e3,quantity:2},{id:3,name:"Samsung Galaxy S10",price:1e3,quantity:5}],p=function(e){var t=e.value,a=e.handleInput,n=e.handleClick;return l.a.createElement("div",{className:"input-group"},l.a.createElement("input",{onChange:a,value:t,type:"text",className:"form-control",placeholder:"Search"}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("button",{onClick:n,className:"btn btn-secondary",type:"button"},l.a.createElement("i",{className:"fa fa-search"}))))};var v=function(e){var t=e.data;return l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,t.map(function(e){return Object.keys(e)})[0].map(function(e,t){return l.a.createElement("th",{scope:"col",key:t},e)}))),l.a.createElement("tbody",null,t.map(function(e){return Object.entries(e)}).map(function(e,t){return l.a.createElement("tr",{key:t},e.map(function(e,t){return l.a.createElement("td",{key:t},e[1])}))})))},h=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={data:d,value:""},a.handleInput=function(e){var t=e.target.value;a.setState({value:t})},a.handleClick=function(){var e=a.state.value;a.setState({data:d.filter(function(t){return t.name.toLowerCase().includes(e.toLowerCase())}),value:""})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.data,a=e.value;return l.a.createElement("div",{className:"container App"},l.a.createElement("div",{className:"mb-4 mt-3 row justify-content-center"},l.a.createElement("h1",null,"Data table")),l.a.createElement("div",{className:"mb-3 row justify-content-end"},l.a.createElement("div",{className:"col-9 col-sm-7 col-md-5 col-lg-4"},l.a.createElement(p,{value:a,handleInput:this.handleInput,handleClick:this.handleClick}))),l.a.createElement("div",{className:"row"},t.length>0?l.a.createElement(v,{data:t}):""))}}]),t}(n.Component);c.a.render(l.a.createElement(h,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.fffc1a4a.chunk.js.map