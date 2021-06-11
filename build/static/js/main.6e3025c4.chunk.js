(this["webpackJsonplambda-eats"]=this["webpackJsonplambda-eats"]||[]).push([[0],{207:function(e,a,n){"use strict";n.r(a);var t=n(0),l=n.n(t),c=n(75),r=n.n(c),s=(n(86),n(18)),i=n(16),o=n(8);function m(e){var a=e.options,n=e.submit,t=e.change,c=e.disabled,r=e.errors,s=function(e){var a=e.target,n=a.name,l=a.value,c=a.type,r=a.checked;t(n,"checkbox"===c?r:l)};return l.a.createElement("form",{className:"pizzaBuilder",onSubmit:function(e){e.preventDefault(),n()}},l.a.createElement("label",null,"Customer Details: ",l.a.createElement("br",null),l.a.createElement("label",null,"Name: \xa0",l.a.createElement("input",{type:"text",placeholder:"first",name:"first_name",onChange:s,value:a.first_name}),l.a.createElement("input",{type:"text",placeholder:"last",name:"last_name",onChange:s,value:a.last_name})),l.a.createElement("label",null)),l.a.createElement("h2",null,"Build your own Pizza"),l.a.createElement("label",{className:"size pane"},"Choose your Size: \xa0",l.a.createElement("select",{name:"size",onChange:s,value:a.size},l.a.createElement("option",{value:""},"Select Size"),l.a.createElement("option",{value:"S"},"Small"),l.a.createElement("option",{value:"M"},"Medium"),l.a.createElement("option",{value:"L"},"Large"),l.a.createElement("option",{value:"XL"},"X-tra Large"))),l.a.createElement("label",{className:"sauce pane"},"Choose your sauce:",l.a.createElement("input",{type:"radio",value:"none",name:"sauce",checked:"none"===a.sauce,onChange:s}),"None",l.a.createElement("input",{type:"radio",value:"classic",name:"sauce",checked:"classic"===a.sauce,onChange:s}),"Classic Tomato",l.a.createElement("input",{type:"radio",value:"bbq",name:"sauce",checked:"bbq"===a.sauce,onChange:s}),"Tangy Barbecue",l.a.createElement("input",{type:"radio",value:"alfredo",name:"sauce",checked:"alfredo"===a.sauce,onChange:s}),"Alfredo"),l.a.createElement("label",{className:"toppings pane"},"Choose your Toppings:",l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",name:"cheese",checked:a.cheese,onChange:s}),"Cheese"),l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",name:"pepperoni",checked:a.pepperoni,onChange:s}),"Pepperoni"),l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",name:"sausage",checked:a.sausage,onChange:s}),"Sausage"),l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",name:"greenPeppers",checked:a.greenPeppers,onChange:s}),"Green Peppers"),l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",name:"onion",checked:a.onion,onChange:s}),"Onion"),l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",name:"blackOlives",checked:a.blackOlives,onChange:s}),"Black Olives"),l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",name:"greenOlives",checked:a.greenOlives,onChange:s}),"Green Olives"),l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",name:"mushroom",checked:a.mushroom,onChange:s}),"Mushroom"),l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",name:"bananaPeppers",checked:a.bananaPeppers,onChange:s}),"Banana Peppers"),l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",name:"pineapple",checked:a.pineapple,onChange:s}),"Pineapple")),l.a.createElement("label",{className:"instructions pane"},"Special Instructions: \xa0",l.a.createElement("input",{type:"text",placeholder:"(pepperonis in a smiley face)",name:"specialInstructions",onChange:s,value:a.specialInstructions})),l.a.createElement("div",{className:"errors"},l.a.createElement("div",null,r.last_name),l.a.createElement("div",null,r.first_name),l.a.createElement("div",null,r.size),l.a.createElement("div",null,r.sauce)),l.a.createElement("button",{disabled:c,className:"orderButton"},"Place Order"))}var u=n(1),p=n(13);function E(){return l.a.createElement("div",{className:"restaurantPanel"},l.a.createElement("img",{src:"https://picsum.photos/536/354",alt:"random"}),l.a.createElement("h4",null,"Resturant Name"),l.a.createElement("p",null,"cost-genre-genre-genre"),l.a.createElement("div",null,"ETA"),l.a.createElement("span",null,"Fee"))}function h(){return l.a.createElement("div",null,l.a.createElement("div",{className:"restaurantPanels top"},l.a.createElement(E,null),l.a.createElement(E,null),l.a.createElement(E,null)),l.a.createElement("div",{className:"restaurantPanels bottom"},l.a.createElement(E,null),l.a.createElement(E,null),l.a.createElement(E,null)))}function d(){return l.a.createElement("div",{className:"homePage"},l.a.createElement("div",{className:"pizzaHeader"},l.a.createElement("p",null,"Your Favorite Food, Delivered While Coding"),l.a.createElement(p.b,{className:"pizzaLink",to:"/pizza"},"Want Pizza? Click Here!")),l.a.createElement("h3",null,"Food Delivery Near here"),l.a.createElement(h,null))}var b=n(3),g=b.b().shape({first_name:b.d().min(2).required("First Name is required"),last_name:b.d().min(2).required("Last Name is required"),size:b.d().oneOf(["S","M","L","XL"]),sauce:b.d().oneOf(["none","classic","bbq","alfredo"]),cheese:b.a(),pepperoni:b.a(),sausage:b.a(),greenPeppers:b.a(),onion:b.a(),blackOlives:b.a(),greenOlives:b.a(),mushroom:b.a(),bananaPeppers:b.a(),pineapple:b.a(),specialInstructions:b.d()}),v=n(80),f=n.n(v);function z(e){var a=e.toppings;return a?l.a.createElement("div",{className:"toppingsList"},l.a.createElement("p",null,"Toppings:"),l.a.createElement("ul",null,a.map((function(e){return l.a.createElement("li",null,e)})))):l.a.createElement("p",null,"Toppings: None Selected")}function k(e){var a=e.options;return a?l.a.createElement("div",{className:"confirmationPage"},l.a.createElement("h2",null,"Congrats! Pizza is on its way!"),l.a.createElement("div",{className:"orderDetails"},l.a.createElement("p",null,"Name: \xa0 ",a.first_name,"\xa0",a.last_name),l.a.createElement("p",null,"Size: \xa0 ",a.size),l.a.createElement("p",null,"Sauce: \xa0 ",a.sauce),l.a.createElement(z,{toppings:a.toppings}),l.a.createElement("p",null,"Special Instructions: \xa0 ",a.specialInstructions)),l.a.createElement("div",{className:"pizzaDog"},l.a.createElement("h3",null,"While you wait, how about a dog with a pizza"),l.a.createElement("img",{src:"https://www.rover.com/blog/wp-content/uploads/2017/03/800_9397.jpg",alt:"\r dog\r Pizza"}))):l.a.createElement("h3",null,"Working fetching your Order details...")}var O={first_name:"",last_name:"",size:"",sauce:"",cheese:!1,pepperoni:!1,sausage:!1,greenPeppers:!1,onion:!1,blackOlives:!1,greenOlives:!1,mushroom:!1,bananaPeppers:!1,pineapple:!1,specialInstructions:""},y={first_name:"",last_name:"",size:"",sauce:"",specialInstructions:""},C=function(){var e=Object(t.useState)([]),a=Object(o.a)(e,2),n=a[0],c=a[1],r=Object(t.useState)(O),E=Object(o.a)(r,2),h=E[0],v=E[1],z=Object(t.useState)(y),C=Object(o.a)(z,2),N=C[0],P=C[1],j=Object(t.useState)(!0),_=Object(o.a)(j,2),x=_[0],S=_[1],w=Object(u.f)();return Object(t.useEffect)((function(){g.isValid(h).then((function(e){S(!e)}))}),[h]),l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",null,l.a.createElement("h1",null,"Lambda Eats"),l.a.createElement("div",null,l.a.createElement(p.b,{to:"/"},"Home"),l.a.createElement(p.b,{to:"/help"},"Help"))),l.a.createElement(u.c,null,l.a.createElement(u.a,{exact:!0,path:"/pizza"},l.a.createElement(m,{options:h,change:function(e,a){b.c(g,e).validate(a).then((function(){P(Object(i.a)(Object(i.a)({},N),{},Object(s.a)({},e,"")))})).catch((function(a){P(Object(i.a)(Object(i.a)({},N),{},Object(s.a)({},e,a.errors[0])))})),v(Object(i.a)(Object(i.a)({},h),{},Object(s.a)({},e,a)))},submit:function(){!function(e){f.a.post("https://reqres.in/api/pizza",e).then((function(e){console.log(e.data),c(e.data),v(O)})).catch((function(e){v(O),console.log("There was an error making the pizza")}))}({first_name:h.first_name.trim(),last_name:h.last_name.trim(),size:h.size,sauce:h.sauce,toppings:["cheese","pepperoni","sausage","greenPeppers","onion","blackOlives","greenOlives","mushroom","bananaPeppers","pineapple"].filter((function(e){return h[e]})),specialInstructions:h.specialInstructions}),w.push("/confirmation")},disabled:x,errors:N})),l.a.createElement(u.a,{exact:!0,path:"/confirmation"},l.a.createElement(k,{options:n})),l.a.createElement(u.a,{path:"/"},l.a.createElement(d,null))))};r.a.render(l.a.createElement(p.a,null,l.a.createElement(C,null)),document.getElementById("root"))},81:function(e,a,n){e.exports=n(207)},86:function(e,a,n){}},[[81,1,2]]]);
//# sourceMappingURL=main.6e3025c4.chunk.js.map