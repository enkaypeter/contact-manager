(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,a,t){e.exports=t(36)},28:function(e,a,t){},29:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(16),l=t.n(c),o=(t(28),t(3)),s=t(4),i=t(6),m=t(5),u=t(7),p=t(39),d=t(40),h=t(41),E=(t(29),t(30),t(20)),b=t(12),f=r.a.createContext(),v=function(e,a){switch(a.type){case"DELETE_CONTACT":return Object(b.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==a.payload})});case"ADD_CONTACT":return Object(b.a)({},e,{contacts:[a.payload].concat(Object(E.a)(e.contacts))});default:return e}},y=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={contacts:[{id:1,name:"Enkay Osomo",email:"enkay@peter.com",phone:"888-990-321-3"},{id:2,name:"Bruce Wayne",email:"BruceWayne@corp.com",phone:"444-444-222-1"},{id:3,name:"Linda Luthor",email:"Linda@luthorcorp.com",phone:"555-555-344-2"}],dispatch:function(e){return t.setState(function(a){return v(a,e)})}},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(f.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),N=f.Consumer,C=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},t.onShowClick=function(e){t.setState({showContactInfo:!t.state.showContactInfo})},t.onDeleteClick=function(e,a){a({type:"DELETE_CONTACT",payload:e})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.props.contact,t=a.name,n=a.email,c=a.phone,l=a.id,o=this.state.showContactInfo;return r.a.createElement(N,null,function(a){var s=a.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,t,r.a.createElement("i",{onClick:e.onShowClick,className:"fas fa-sort-down",style:{cursor:"pointer"}}),r.a.createElement("i",{onClick:e.onDeleteClick.bind(e,l,s),className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"}})),o?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"}," Email: ",n," "),r.a.createElement("li",{className:"list-group-item"}," Phone: ",c," ")):null)})}}]),a}(n.Component),g=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(N,null,function(e){var a=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-primary"},"Contact")," List"),a.map(function(e){return r.a.createElement(C,{key:e.id,contact:e})}))})}}]),a}(n.Component),O=t(9),j=t(17),k=t.n(j),w=function(e){var a=e.label,t=e.name,n=e.value,c=e.placeholder,l=e.type,o=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",{type:l,className:k()("form-control form-control-lg",{"is-invalid":s}),placeholder:c,value:n,onChange:o}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))};w.defaultProps={type:"text"};var A=w,S=t(18),x=t.n(S),T=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onSubmit=function(e,a){a.preventDefault();var n=t.state,r=n.name,c=n.email,l=n.phone;""!==r?""!==c?""!==l?(e({type:"ADD_CONTACT",payload:{id:x()(),name:r,email:c,phone:l}}),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/")):t.setState({errors:{name:"Phone is required"}}):t.setState({errors:{name:"Email is required"}}):t.setState({errors:{name:"Name is required"}})},t.onChange=function(e){return t.setState(Object(O.a)({},e.target.name,e.target.value))},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.phone,c=a.email,l=a.errors;return r.a.createElement(N,null,function(a){var o=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,o)},r.a.createElement(A,{label:"Name",name:"name",placeholder:"Enter Name",value:t,onChange:e.onChange,error:l.name}),r.a.createElement(A,{label:"Email",name:"email",type:"email",placeholder:"Enter Email",value:c,onChange:e.onChange,error:l.email}),r.a.createElement(A,{label:"Phone",name:"phone",placeholder:"Enter Phone",value:n,onChange:e.onChange,error:l.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"}))))})}}]),a}(n.Component),D=t(38),P=function(e){var a=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement(D.a,{to:"/",className:"navbar-brand"},a),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(D.a,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"}),"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(D.a,{to:"/contacts/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"}),"Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(D.a,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"}),"About")))))};P.defaultProps={branding:"My App"};var L=P;function I(){return r.a.createElement("div",null,r.a.createElement("h3",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Simple app to manage Contacts"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))}function q(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"}," ",r.a.createElement("span",{className:"text-danger"},"404")," Page Not Found"),r.a.createElement("p",{className:"lead"},"Sorry, this page does not exist"))}var B=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(y,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(L,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(d.a,null,r.a.createElement(h.a,{exact:!0,path:"/",component:g}),r.a.createElement(h.a,{exact:!0,path:"/contact/add",component:T}),r.a.createElement(h.a,{exact:!0,path:"/about",component:I}),r.a.createElement(h.a,{component:q}))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.cea69f3e.chunk.js.map