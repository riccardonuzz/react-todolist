(this["webpackJsonpreact-todo-list"]=this["webpackJsonpreact-todo-list"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(8),n=c.n(a),o=c(7),l=c(6),r=c(3),i=c(0),d=function(e){var t=e.addTodo,c=Object(s.useState)(""),a=Object(r.a)(c,2),n=a[0],o=a[1],l=function(){""!==n&&(t(n),o(""))};return Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col-12",children:Object(i.jsxs)("div",{className:"input-group",onKeyPress:function(e){"Enter"===e.key&&l()},children:[Object(i.jsx)("input",{type:"text",value:n,onChange:function(e){o(e.target.value)},className:"form-control",placeholder:"Add a task...","aria-label":"Add a task..."}),Object(i.jsx)("span",{className:"input-group-btn",children:Object(i.jsx)("button",{className:"btn btn-primary",type:"button",onClick:l,disabled:!n,children:"Add"})})]})})})},j=function(){return Object(i.jsx)("nav",{className:"navbar navbar-light bg-light justify-content-center",children:Object(i.jsx)("div",{className:"d-flex align-items-center container-full",children:Object(i.jsx)("span",{className:"fs-5",children:"\ud83d\udccb My tasks"})})})},b=function(e){var t=e.id,c=e.name,s=e.completed,a=e.deleteTodo,n=e.markTodoAsCompleted,o=s?Object(i.jsx)("del",{children:c}):c;return Object(i.jsx)("li",{className:"list-group-item",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)("div",{className:"col-1 col-lg-1",children:[Object(i.jsxs)("label",{className:"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0",children:[Object(i.jsx)("input",{type:"checkbox",checked:s,className:"custom-control-input",onChange:function(){n(t)}}),Object(i.jsx)("span",{className:"custom-control-indicator"})]}),Object(i.jsx)("div",{className:"contaner"})]}),Object(i.jsx)("div",{className:"col-6 col-lg-6",children:o}),Object(i.jsx)("div",{className:"col-5 col-lg-5 d-flex justify-content-end",children:Object(i.jsx)("button",{type:"button",className:"btn btn-danger btn-sm",onClick:function(){return a(t)},children:"Delete"})})]})})},m=function(e){var t=e.todos,c=void 0===t?[]:t,s=e.deleteTodo,a=e.markTodoAsCompleted,n=c.map((function(e){return Object(i.jsx)(b,{id:e.id,name:e.name,completed:e.completed,deleteTodo:s,markTodoAsCompleted:a},e.id)}));return Object(i.jsx)(i.Fragment,{children:c.length?Object(i.jsx)("ul",{className:"list-group",children:n}):Object(i.jsx)("p",{className:"text-black-50",children:"No things todo available, add one by typing on the above field \u2b06\ufe0f"})})},u=function(e){var t=e.nTodos,c=void 0===t?0:t,s=e.nCompleted,a=void 0===s?0:s,n=a/c*100||0,o={width:"".concat(n,"%")};return Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-sm-6",children:Object(i.jsx)("div",{className:"card mb-1",children:Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsxs)("h4",{className:"card-title",children:["Completed tasks: ",a]}),Object(i.jsx)("div",{className:"progress mb-2",children:Object(i.jsxs)("div",{className:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":n,"aria-valuemin":"0","aria-valuemax":"100",style:o,children:[n.toFixed(1),"%"]})})]})})}),Object(i.jsx)("div",{className:"col-sm-6",children:Object(i.jsx)("div",{className:"card mb-1",children:Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsx)("h4",{className:"card-title",children:"Total tasks"}),Object(i.jsx)("p",{className:"card-text",children:c})]})})})]})})},O={display:"inherit",position:"fixed",top:30,right:10},x=function(e){var t=e.setShow;return Object(s.useEffect)((function(){return setTimeout((function(){return t(!1)}),2e3)}),[t]),Object(i.jsx)("div",{style:O,className:"toast align-items-center text-white bg-primary border-0",role:"alert","aria-live":"assertive","aria-atomic":"true",children:Object(i.jsxs)("div",{className:"d-flex",children:[Object(i.jsx)("div",{className:"toast-body",children:"Successfully added a new task to the list."}),Object(i.jsx)("button",{onClick:function(){return t(!1)},type:"button",className:"btn-close btn-close-white me-2 m-auto","aria-label":"Close"})]})})},h=function(){var e=Object(s.useState)((function(){return JSON.parse(localStorage.getItem("todos"))||[]})),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(!1),b=Object(r.a)(n,2),O=b[0],h=b[1],p=function(e){localStorage.setItem("todos",JSON.stringify(e))};return Object(i.jsxs)("div",{children:[Object(i.jsx)(j,{}),Object(i.jsx)("br",{}),Object(i.jsx)(u,{nCompleted:c.reduce((function(e,t){return e+t.completed}),0),nTodos:c.length}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(d,{addTodo:function(e){var t=c.length?c[c.length-1].id+1:1,s=[].concat(Object(l.a)(c),[{id:t,name:e,completed:!1}]);a(s),p(s),h(!0)}}),Object(i.jsx)("br",{}),Object(i.jsx)(m,{deleteTodo:function(e){var t=c.filter((function(t){return t.id!==e}));a(t),p(t)},todos:c,markTodoAsCompleted:function(e){var t=c.map((function(t){return t.id===e?Object(o.a)(Object(o.a)({},t),{},{completed:!t.completed}):t}));a(Object(l.a)(t)),p(t)}}),Object(i.jsx)("br",{})]}),O&&Object(i.jsx)(x,{setShow:h})]})};c(14);n.a.render(Object(i.jsx)(h,{}),document.querySelector("#root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.34db76b0.chunk.js.map