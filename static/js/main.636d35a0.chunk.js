(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{35:function(t,e,n){t.exports={formGroup:"ContactForm_formGroup__1oaXq","form-group":"ContactForm_form-group___Rk7y",button:"ContactForm_button__zr10w"}},38:function(t,e,n){t.exports={button:"ContactList_button__1Wn92",listItem:"ContactList_listItem__3UkNU"}},49:function(t,e,n){},50:function(t,e,n){},57:function(t,e,n){},60:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(10),r=n.n(c),s=(n(49),n(40)),i=n(34),u=n(22),l=n(23),b=n(27),d=n(26),m=(n(50),n(21)),p=n(35),j=n.n(p),h=n(78),f=n(37),O=n.n(f),g=n(2),C=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={name:"",number:""},t.handleInputOnChange=function(e){var n=e.currentTarget,a=n.name,o=n.value;t.setState(Object(m.a)({},a,o))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(g.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(g.jsxs)("div",{className:j.a.formGroup,children:[Object(g.jsxs)("label",{children:["Name"," ",Object(g.jsx)("input",{type:"text",name:"name",value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleInputOnChange})]}),Object(g.jsxs)("label",{children:["Number"," ",Object(g.jsx)("input",{type:"tel",name:"number",value:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleInputOnChange})]})]}),Object(g.jsx)(h.a,{type:"submit",variant:"contained",startIcon:Object(g.jsx)(O.a,{}),children:"Add contact"})]})}}]),n}(a.Component),v=n(38),x=n.n(v),y=n(77),k=n(39),S=n.n(k),_=Object(y.a)({root:{background:"grey",border:0,borderRadius:3,color:"black",padding:"2px 5px",margin:"5px 15px",cursor:"pointer"}}),w=function(t){var e=t.name,n=t.number,a=t.onClick,o=_();return Object(g.jsxs)(g.Fragment,{children:[e,": ",n,Object(g.jsx)(h.a,{type:"button",variant:"contained",color:"secondary",className:o.root,startIcon:Object(g.jsx)(S.a,{}),onClick:a,children:"Delete"})]})},I=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(g.jsx)("ol",{children:e.map((function(t){var e=t.name,a=t.number,o=t.id;return Object(g.jsx)("li",{className:x.a.listItem,children:Object(g.jsx)(w,{name:e,number:a,onClick:function(){return n(o)}})},o)}))})},A=n(79),N=(n(57),function(t){var e=t.value,n=t.onChange;return Object(g.jsxs)("label",{children:[" ","Find contacts by name",Object(g.jsx)("input",{type:"text",value:e,onChange:n})]})}),D=n(28),L=(n(58),function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={contacts:[],filter:""},t.contactId=Object(A.a)(),t.formSubmitHandler=function(e){if(t.state.contacts.map((function(t){return t.name.toLowerCase()})).includes(e.name.toLowerCase()))D.b.warn("".concat(e.name," is already in phonebook !"));else{var n=Object(i.a)({id:t.contactId},e);D.b.success("".concat(e.name," is added in phonebook !")),t.setState((function(t){var e=t.contacts;return{contacts:[].concat(Object(s.a)(e),[n])}}))}},t.onDeleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.seachContactByName=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){console.log("App componentDidMount");var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e}),console.log(e)}},{key:"componentDidUpdate",value:function(t,e){console.log("App componentDidUpdate"),this.state.contacts!==e.contacts&&(console.log("Update"),localStorage.setItem("contacts",JSON.stringify(this.state.contacts)))}},{key:"render",value:function(){console.log("App render");var t=this.state.filter,e=this.getVisibleContacts();return Object(g.jsxs)("div",{className:"Container",children:[Object(g.jsx)("h1",{children:"Phonebook"}),Object(g.jsx)(C,{onSubmit:this.formSubmitHandler}),Object(g.jsx)(N,{value:t,onChange:this.seachContactByName}),Object(g.jsx)("h2",{children:"Contacts"}),Object(g.jsx)(I,{contacts:e,onDeleteContact:this.onDeleteContact}),Object(g.jsx)(D.a,{position:"top-center",autoClose:2e3,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!1,draggable:!1})]})}}]),n}(a.Component));r.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(L,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.636d35a0.chunk.js.map