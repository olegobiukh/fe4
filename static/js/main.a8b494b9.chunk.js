(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){e.exports=t(18)},16:function(e,a,t){},17:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(8),s=t.n(c),m=(t(16),t(17),t(2)),i=t(3),r=t(5),o=t(4),u=t(6),_=t(1),d=t.n(_),p=function(e){function a(){return Object(m.a)(this,a),Object(r.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){d()(document).ready(function(){d()(window).scroll(function(){d()(document).scrollTop()>600&&d()(window).width()>768?d()(".Navigation").addClass("Navigation__top"):d()(".Navigation").removeClass("Navigation__top")})})}},{key:"render",value:function(){return l.a.createElement("header",{className:"Header",id:"home"},l.a.createElement("nav",{className:"Navigation container"},l.a.createElement("span",{className:"Navigation__logo"},"</>"),l.a.createElement("input",{type:"checkbox",id:"burger",className:"burger"}),l.a.createElement("label",{htmlFor:"burger",className:"burger-icon"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("ul",{className:"Navigation__list container"},l.a.createElement("li",{className:"Navigation__item"},l.a.createElement("a",{href:"#home",className:"Navigation__link"},"home")),l.a.createElement("li",{className:"Navigation__item"},l.a.createElement("a",{href:"#about",className:"Navigation__link"},"about")),l.a.createElement("li",{className:"Navigation__item"},l.a.createElement("a",{href:"#skills",className:"Navigation__link"},"skills")),l.a.createElement("li",{className:"Navigation__item"},l.a.createElement("a",{href:"#contact",className:"Navigation__link"},"contact")))),l.a.createElement("h1",{className:"Header__title"},"name surname"),l.a.createElement("p",{className:"Header__subtitle"},"front-end developer"))}}]),a}(l.a.Component),N=t(9),E=t.n(N);var v=function(){return l.a.createElement("section",{className:"About",id:"about"},l.a.createElement("h1",{className:"About__title"},"about"),l.a.createElement("div",{className:"About__container container"},l.a.createElement("div",{className:"About__box About__box-left"},l.a.createElement("h2",{className:"About__subtitle"},"Goals"),l.a.createElement("p",{className:"About__text"},"Lorem ipsum dolor sit amet, ac erat dolor quisque magna consectetur leo, pede nec phasellus praesent adipiscing. Nullam diam magna at mauris amet, non ut urna a commodo. Donec vivamus semper nisi velit, proin id turpis, vehicula amet nullam convallis adipiscing ut sit, sit viverra. Duis interdum eu eu sodales nec ut, non nibh accumsan eleifend. Purus ut vitae sapien dui duis dolores, porttitor tempus nascetur id ut, integer ut dignissim harum.")),l.a.createElement("div",{className:"About__box-img"},l.a.createElement("img",{src:E.a,alt:"user"})),l.a.createElement("div",{className:"About__box"},l.a.createElement("h2",{className:"About__subtitle"},"Dreams"),l.a.createElement("p",{className:"About__text"},"Lorem ipsum dolor sit amet, ac erat dolor quisque magna consectetur leo, pede nec phasellus praesent adipiscing. Nullam diam magna at mauris amet, non ut urna a commodo. Donec vivamus semper nisi velit, proin id turpis, vehicula amet nullam convallis adipiscing ut sit, sit viverra. Duis interdum eu eu sodales nec ut, non nibh accumsan eleifend. Purus ut vitae sapien dui duis dolores, porttitor tempus nascetur id ut, integer ut dignissim harum."))))};var g=function(e){var a=e.data;return l.a.createElement("section",{className:"Skills",id:"skills"},l.a.createElement("h2",{className:"Skills__title"},"skills"),l.a.createElement("div",{className:"Skills__wrapper container"},a.map(function(e){return l.a.createElement("div",{key:e.name,className:"Skill container"},l.a.createElement("div",{className:"Skill__name"},e.name),l.a.createElement("div",{className:"Skill__level container"},Array(10).fill("").map(function(a,t){return e.level>t?l.a.createElement("div",{key:t,className:"Skill__dot Skill__dot-dark"}):l.a.createElement("div",{key:t,className:"Skill__dot Skill__dot-grey"})})))})))},b=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(r.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).state={name:"",email:"",message:""},t.handleSubmit=function(e){e.preventDefault();var a=t.state,n=a.email,l=a.name,c=a.message;console.log("name: ".concat(l,",\nemail: ").concat(n,",\nmessage: ").concat(c)),t.setState({name:"",email:"",message:""})},t.handleEmailChange=function(e){t.setState({email:e.target.value})},t.handleNameChange=function(e){t.setState({name:e.target.value})},t.handleMessageChange=function(e){t.setState({message:e.target.value})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state,a=e.name,t=e.email,n=e.message;return l.a.createElement("form",{className:"Contact__form container",onSubmit:this.handleSubmit},l.a.createElement("input",{className:"Contact__item",type:"text",placeholder:"Name",value:a,onChange:this.handleNameChange,required:!0}),l.a.createElement("input",{className:"Contact__item",type:"email",placeholder:"Email",value:t,onChange:this.handleEmailChange,required:!0}),l.a.createElement("textarea",{className:"Contact__item Contact__message",rows:"3",placeholder:"Send a message",value:n,onChange:this.handleMessageChange}),l.a.createElement("button",{className:"Contact__item Contact__btn"},"Send"))}}]),a}(l.a.Component);var h=function(){return l.a.createElement("section",{className:"Contact",id:"contact"},l.a.createElement("h2",{className:"Contact__title"},"Contact"),l.a.createElement("div",{className:"Contact__container container"},l.a.createElement("div",{className:"Contact__info"},l.a.createElement("div",{className:"Contact__box"},l.a.createElement("p",{className:"Contact__name"},"Phone number:"),l.a.createElement("p",{className:"Contact__subname"},"+38066-66-66-666")),l.a.createElement("div",{className:"Contact__box"},l.a.createElement("p",{className:"Contact__name"},"Email:"),l.a.createElement("p",{className:"Contact__subname"},"mail@gmail.com")),l.a.createElement("div",{className:"Contact__box"},l.a.createElement("p",{className:"Contact__name"},"Skype"),l.a.createElement("p",{className:"Contact__subname"},"mySkypeAcc"))),l.a.createElement(b,null)))};var f=function(){return l.a.createElement("footer",{className:"Footer"},l.a.createElement("div",{className:"Footer__container container"},l.a.createElement("div",{className:"Footer__info"},l.a.createElement("p",{className:"Footer__box"},l.a.createElement("span",{className:"Footer__name"},"Mobile:"),l.a.createElement("span",{className:"Footer__subname"},"+38066-66-66-666")),l.a.createElement("p",{className:"Footer__box"},l.a.createElement("span",{className:"Footer__name"},"Email:"),l.a.createElement("span",{className:"Footer__subname"},"mail@gmail.com")),l.a.createElement("p",{className:"Footer__box"},l.a.createElement("span",{className:"Footer__name"},"Skype"),l.a.createElement("span",{className:"Footer__subname"},"mySkypeAcc"))),l.a.createElement("span",{className:"Footer__logo"},"</>")))},C=[{name:"HTML5",level:8},{name:"CSS3",level:5},{name:"JavaScript",level:10},{name:"ReactJS",level:8},{name:"AngularJS",level:8}];var k=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,null),l.a.createElement(v,null),l.a.createElement(g,{data:C}),l.a.createElement(h,null),l.a.createElement(f,null))},S=document.getElementById("root");s.a.render(l.a.createElement(k,null),S)},9:function(e,a,t){e.exports=t.p+"static/media/avatar.7a7dc12c.png"}},[[10,1,2]]]);
//# sourceMappingURL=main.a8b494b9.chunk.js.map