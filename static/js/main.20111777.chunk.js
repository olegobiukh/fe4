(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/avatar.9caedb42.png"},function(e,a,t){e.exports=t(23)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(8),s=t.n(c),m=(t(16),t(17),t(2)),i=t(3),r=t(5),o=t(4),u=t(6),_=t(1),d=t.n(_),p=(t(18),function(e){function a(){return Object(m.a)(this,a),Object(r.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){d()(document).ready(function(){d()(window).scroll(function(){d()(document).scrollTop()>600&&d()(window).width()>768?d()(".Navigation").addClass("navigation__top"):d()(".Navigation").removeClass("navigation__top")})})}},{key:"render",value:function(){return l.a.createElement("header",{className:"header",id:"home"},l.a.createElement("nav",{className:"navigation container"},l.a.createElement("span",{className:"navigation__logo"},"</>"),l.a.createElement("input",{type:"checkbox",id:"burger",className:"burger"}),l.a.createElement("label",{htmlFor:"burger",className:"burger-icon"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("ul",{className:"navigation__list container"},l.a.createElement("li",{className:"navigation__item"},l.a.createElement("a",{href:"#home",className:"navigation__link"},"home")),l.a.createElement("li",{className:"navigation__item"},l.a.createElement("a",{href:"#about",className:"navigation__link"},"about")),l.a.createElement("li",{className:"navigation__item"},l.a.createElement("a",{href:"#skills",className:"navigation__link"},"skills")),l.a.createElement("li",{className:"navigation__item"},l.a.createElement("a",{href:"#contact",className:"navigation__link"},"contact")))),l.a.createElement("h1",{className:"header__title"},"Oleg Obiukh"),l.a.createElement("p",{className:"header__subtitle"},"front-end developer"))}}]),a}(l.a.Component)),E=(t(19),t(9)),v=t.n(E);var N=function(){return l.a.createElement("section",{className:"about",id:"about"},l.a.createElement("h1",{className:"about__title"},"about"),l.a.createElement("div",{className:"about__container container"},l.a.createElement("div",{className:"about__box about__box-left"},l.a.createElement("h2",{className:"about__subtitle"},"Goals"),l.a.createElement("p",{className:"about__text"},"Lorem ipsum dolor sit amet, ac erat dolor quisque magna consectetur leo, pede nec phasellus praesent adipiscing. Nullam diam magna at mauris amet, non ut urna a commodo. Donec vivamus semper nisi velit, proin id turpis, vehicula amet nullam convallis adipiscing ut sit, sit viverra. Duis interdum eu eu sodales nec ut, non nibh accumsan eleifend. Purus ut vitae sapien dui duis dolores, porttitor tempus nascetur id ut, integer ut dignissim harum.")),l.a.createElement("div",{className:"about__box-img"},l.a.createElement("img",{src:v.a,alt:"user"})),l.a.createElement("div",{className:"about__box"},l.a.createElement("h2",{className:"about__subtitle"},"Dreams"),l.a.createElement("p",{className:"about__text"},"Lorem ipsum dolor sit amet, ac erat dolor quisque magna consectetur leo, pede nec phasellus praesent adipiscing. Nullam diam magna at mauris amet, non ut urna a commodo. Donec vivamus semper nisi velit, proin id turpis, vehicula amet nullam convallis adipiscing ut sit, sit viverra. Duis interdum eu eu sodales nec ut, non nibh accumsan eleifend. Purus ut vitae sapien dui duis dolores, porttitor tempus nascetur id ut, integer ut dignissim harum."))))};t(20);var g=function(e){var a=e.data;return l.a.createElement("section",{className:"skills",id:"skills"},l.a.createElement("h2",{className:"skills__title"},"skills"),l.a.createElement("div",{className:"skills__wrapper container"},a.map(function(e){return l.a.createElement("div",{key:e.name,className:"skill container"},l.a.createElement("div",{className:"skill__name"},e.name),l.a.createElement("div",{className:"skill__level container"},Array(10).fill("").map(function(a,t){return e.level>t?l.a.createElement("div",{key:t,className:"skill__dot skill__dot-dark"}):l.a.createElement("div",{key:t,className:"skill__dot skill__dot-grey"})})))})))},b=(t(21),function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(r.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).state={name:"",email:"",message:""},t.handleSubmit=function(e){e.preventDefault();var a=t.state,n=a.email,l=a.name,c=a.message;console.log("name: ".concat(l,",\nemail: ").concat(n,",\nmessage: ").concat(c)),t.setState({name:"",email:"",message:""})},t.handleEmailChange=function(e){t.setState({email:e.target.value})},t.handleNameChange=function(e){t.setState({name:e.target.value})},t.handleMessageChange=function(e){t.setState({message:e.target.value})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state,a=e.name,t=e.email,n=e.message;return l.a.createElement("form",{className:"contact__form container",onSubmit:this.handleSubmit},l.a.createElement("input",{className:"contact__item",type:"text",placeholder:"Name",value:a,onChange:this.handleNameChange,required:!0}),l.a.createElement("input",{className:"contact__item",type:"email",placeholder:"Email",value:t,onChange:this.handleEmailChange,required:!0}),l.a.createElement("textarea",{className:"contact__item contact__message",rows:"3",placeholder:"Send a message",value:n,onChange:this.handleMessageChange}),l.a.createElement("button",{className:"contact__item contact__btn"},"Send"))}}]),a}(l.a.Component));var h=function(){return l.a.createElement("section",{className:"contact",id:"contact"},l.a.createElement("h2",{className:"contact__title"},"contact"),l.a.createElement("div",{className:"contact__container container"},l.a.createElement("div",{className:"contact__info"},l.a.createElement("div",{className:"contact__box"},l.a.createElement("p",{className:"contact__name"},"Phone number:"),l.a.createElement("p",{className:"contact__subname"},"+38066-66-66-666")),l.a.createElement("div",{className:"contact__box"},l.a.createElement("p",{className:"contact__name"},"Email:"),l.a.createElement("p",{className:"contact__subname"},"mail@gmail.com")),l.a.createElement("div",{className:"contact__box"},l.a.createElement("p",{className:"contact__name"},"Skype"),l.a.createElement("p",{className:"contact__subname"},"mySkypeAcc"))),l.a.createElement(b,null)))};t(22);var f=function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"footer__container container"},l.a.createElement("div",{className:"footer__info"},l.a.createElement("p",{className:"footer__box"},l.a.createElement("span",{className:"footer__name"},"Mobile:"),l.a.createElement("span",{className:"footer__subname"},"+38066-66-66-666")),l.a.createElement("p",{className:"footer__box"},l.a.createElement("span",{className:"footer__name"},"Email:"),l.a.createElement("span",{className:"footer__subname"},"mail@gmail.com")),l.a.createElement("p",{className:"footer__box"},l.a.createElement("span",{className:"footer__name"},"Skype"),l.a.createElement("span",{className:"footer__subname"},"mySkypeAcc"))),l.a.createElement("span",{className:"footer__logo"},"</>")))},k=[{name:"HTML5",level:8},{name:"CSS3",level:5},{name:"JavaScript",level:10},{name:"ReactJS",level:8},{name:"AngularJS",level:8}];var y=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,null),l.a.createElement(N,null),l.a.createElement(g,{data:k}),l.a.createElement(h,null),l.a.createElement(f,null))},S=document.getElementById("root");s.a.render(l.a.createElement(y,null),S)}],[[10,1,2]]]);
//# sourceMappingURL=main.20111777.chunk.js.map