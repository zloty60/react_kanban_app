(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports={editTitle:"EditTask_editTitle__3Ern_",editDescription:"EditTask_editDescription__3EJ2A",editBtn:"EditTask_editBtn__hoWZH",cancelBtn:"EditTask_cancelBtn__1bnBj"}},24:function(e,t,a){e.exports={wrapper:"Search_wrapper__3Dzb4",searchForm:"Search_searchForm__2nZEu",tasks:"Search_tasks__1rJDj"}},28:function(e,t,a){e.exports={options:"OptionsView_options__3kXiu",appear:"OptionsView_appear__g1iYe",layer:"OptionsView_layer__GZCWQ"}},29:function(e,t,a){e.exports={task:"OnlyViewTask_task__24N3e",title:"OnlyViewTask_title__1Ct93"}},35:function(e,t,a){e.exports=a.p+"static/media/search.85aeb9e3.svg"},37:function(e,t,a){e.exports={wrapper:"Main_wrapper__2zCij"}},38:function(e,t,a){e.exports={btnClose:"CloseButton_btnClose__1F_1A"}},39:function(e,t,a){e.exports=a.p+"static/media/close.ddc2583a.svg"},41:function(e,t,a){e.exports=a(52)},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(15),r=a.n(l),s=a(53),c=a(55),o=a(36),d=a(3),p=a(56),u=a(9),m=a.n(u),E=a(28),k=a.n(E);function _(e){return{type:"TOGGLE_OPTION_VIEW",payload:e}}var h=Object(d.b)(null,{toggleIsOptionsView:_,deleteTask:function(e){return{type:"DELETE_TASK",payload:e}},editTask:function(e){return{type:"EDIT_TASK",payload:e}},changeTypeTask:function(e,t){return{type:"CHANGE_TYPE_TASK",payload:{id:e,type:t}}}})(function(e){var t=e.id,a=e.type,n=e.toggleIsOptionsView,l=e.deleteTask,r=e.editTask,s=e.changeTypeTask;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:k.a.options},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("button",{onClick:function(){return l(t)}},"usun")),i.a.createElement("li",null,i.a.createElement("button",{onClick:function(){return r(t)}},"edytuj")),"todo"===a?i.a.createElement(i.a.Fragment,null,i.a.createElement("li",null,i.a.createElement("button",{onClick:function(){return s(t,"doing")}},"w trakcie")),i.a.createElement("li",null,i.a.createElement("button",{onClick:function(){return s(t,"done")}},"zrobiono"))):null,"doing"===a?i.a.createElement(i.a.Fragment,null,i.a.createElement("li",null,i.a.createElement("button",{onClick:function(){return s(t,"todo")}},"do zrobienia")),i.a.createElement("li",null,i.a.createElement("button",{onClick:function(){return s(t,"done")}},"zrobiono"))):null,"done"===a?i.a.createElement(i.a.Fragment,null,i.a.createElement("li",null,i.a.createElement("button",{onClick:function(){return s(t,"doing")}},"w trakcie")),i.a.createElement("li",null,i.a.createElement("button",{onClick:function(){return s(t,"todo")}},"do zrobienia"))):null)),i.a.createElement("div",{className:k.a.layer,onClick:function(){return n(t)}}))}),y=a(11),O=a(16),b=a(17),f=a(22),v=a(18),w=a(23),N=i.a.createContext(),T=a(13),j=a.n(T),A=function(e){function t(){var e,a;Object(O.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(i)))).state={title:a.props.title,description:a.props.description},a.handleInput=function(e){a.setState(Object(y.a)({},e.target.name,e.target.value))},a.handleCancel=function(){a.setState({title:a.props.title,description:a.props.description}),a.context.cancelEditTaskFn(a.props.id)},a}return Object(w.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("input",{type:"text",name:"title",value:this.state.title,onChange:this.handleInput,className:j.a.editTitle}),i.a.createElement("textarea",{name:"description",type:"text",onChange:this.handleInput,value:this.state.description,className:j.a.editDescription}),i.a.createElement("button",{onClick:function(){return e.props.confirmTask(e.props.id,e.state.title,e.state.description)},className:j.a.editBtn},"zatwierdz"),i.a.createElement("button",{onClick:function(){return e.props.canceEditTask(e.props.id)},className:j.a.cancelBtn},"anuluj"))}}]),t}(n.Component);A.contextType=N;var g=Object(d.b)(null,{confirmTask:function(e,t,a){return{type:"CONFIRM_TASK",payload:{id:e,title:t,description:a}}},canceEditTask:function(e){return{type:"CANCEL_EDIT_TASK",payload:e}}})(A),C=Object(d.b)(null,{toggleIsOptionsView:_})(function(e){var t=e.title,a=e.id,n=e.type,l=e.isOptionsView,r=e.isEdit,s=e.description,c=e.toggleIsOptionsView;return i.a.createElement("li",{className:["col-12","col-m-6","col-xl-4",m.a.mb].join(" ")},i.a.createElement("div",{className:m.a.box},i.a.createElement(i.a.Fragment,null,r?i.a.createElement(g,{id:a,title:t,description:s}):i.a.createElement("div",null,i.a.createElement("h2",{className:m.a.title},t),i.a.createElement("p",null,s)),l&&i.a.createElement(h,{id:a,type:n,isOptionsView:l}),i.a.createElement("div",{className:m.a.dots},i.a.createElement("button",{onClick:function(){return c(a)}},i.a.createElement("span",{className:m.a.dot}),i.a.createElement("span",{className:m.a.dot}),i.a.createElement("span",{className:m.a.dot}))))))}),z=function(e){var t=e.tasks;return i.a.createElement(i.a.Fragment,null,t.length?i.a.createElement("ul",{className:"row"},t.map(function(e){return i.a.createElement(C,Object.assign({key:e.id},e))})):i.a.createElement("p",null,"Tabilca jest pusta dodaj cos"))};function M(e,t){return e.filter(function(e){return e.type===t})}var S=Object(p.a)(Object(d.b)(function(e){return{tasks:e.tasksReducer.tasks}})(function(e){var t=e.tasks;return i.a.createElement(z,{tasks:M(t,"todo")})}));var x=Object(p.a)(Object(d.b)(function(e){return{tasks:e.tasksReducer.tasks}})(function(e){var t=e.tasks;return i.a.createElement(z,{tasks:M(t,"doing")})}));var D=Object(p.a)(Object(d.b)(function(e){return{tasks:e.tasksReducer.tasks}})(function(e){var t=e.tasks;return i.a.createElement(z,{tasks:M(t,"done")})})),F=function(){return i.a.createElement("p",null,"Podana strona nie istnieje ")},V=a(54),I=a(6),L=a.n(I),R=a(35),B=a.n(R),K=function(e){var t=e.openAddModalFn,a=e.openSearchdModalFn;return i.a.createElement("header",{className:L.a.wrapper},i.a.createElement("nav",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12 col-m-12"},i.a.createElement("ul",{className:L.a.list},i.a.createElement("li",null,i.a.createElement(V.a,{exact:!0,to:"/",activeClassName:L.a.linkActive,className:L.a.link},"do zrobienia")),i.a.createElement("li",null,i.a.createElement(V.a,{exact:!0,to:"/doing",activeClassName:L.a.linkActive,className:L.a.link},"w trakcie")),i.a.createElement("li",null,i.a.createElement(V.a,{exact:!0,to:"/done",activeClassName:L.a.linkActive,className:L.a.link},"zrobione")),i.a.createElement("li",null,i.a.createElement("button",{onClick:t,className:L.a.btn},"dodaj")),i.a.createElement("li",null,i.a.createElement("button",{onClick:a,className:""},i.a.createElement("span",{className:L.a.searchTxt},"szukaj"),i.a.createElement("img",{src:B.a,alt:"search icon",className:L.a.searchIcon}))))))))},P=a(37),W=a.n(P),G=function(e){var t=e.children;return i.a.createElement("main",{className:W.a.wrapper},i.a.createElement("div",{className:"container"},t))},H=a(12),Z=a(29),J=a.n(Z),X=function(e){var t=e.title,a=e.type;return i.a.createElement("div",{className:"col-12 col-m-6"},i.a.createElement("div",{className:J.a.task},i.a.createElement("p",{className:J.a.title},t),i.a.createElement("p",null,"status: ",a)))},Q=a(8),U=a.n(Q),Y=a(38),q=a.n(Y),$=a(39),ee=a.n($),te=function(e){var t=e.closeFn;return i.a.createElement("button",{onClick:t,className:q.a.btnClose},i.a.createElement("img",{src:ee.a,alt:"ikona zamykania"}))};var ae={todo:"todo",doing:"doing",done:"done"},ne=function(e){function t(){var e,a;Object(O.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(i)))).state={type:ae.todo,title:"",description:"",validAlert:!1},a.handleForm=function(e){e.preventDefault()},a.handleType=function(e){a.setState({type:e})},a.handleInput=function(e){a.setState(Object(y.a)({},e.target.name,e.target.value))},a.handleAddTaskBtn=function(){var e=a.state,t=e.title,n=e.type,i=e.description;if(""!==t&&""!==n&&""!==i){var l=function(e){var t;return e.length>0?(t=Math.max.apply(Math,Object(H.a)(e.map(function(e){return e.id}))),t++):t=0,t}(a.props.tasks);a.props.createTask(l,t,n,i),a.props.closeAddModal()}else a.setState({validAlert:!0})},a.showLastTask=function(){return Object(H.a)(a.props.tasks).sort(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"MIN";return function(a,n){var i=0;return(a=a[e])>(n=n[e])?i=1:a<n&&(i=-1),"MAX"===t?-1*i:i}}("id","MAX"))},a}return Object(w.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:U.a.wrapper},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-m-12 col-xl-6"},i.a.createElement("div",{className:"row"},i.a.createElement("h2",{className:"col-12 col-m-12"},"Dodaj zadanie"),i.a.createElement("div",{className:"col-12 col-m-12"},i.a.createElement("form",{onSubmit:this.handleForm},i.a.createElement("input",{type:"text",name:"title",placeholder:"wpisz tytul zadania",onChange:this.handleInput,value:this.state.title,className:U.a.searchForm}),i.a.createElement("br",null),i.a.createElement("textarea",{type:"text",name:"description",placeholder:"wpisz opis",onChange:this.handleInput,value:this.state.description,className:U.a.searchForm}),i.a.createElement("div",{className:U.a.options},i.a.createElement("p",{className:"col-m-12"},"Status zadania"),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12 col-m-4"},i.a.createElement("div",{className:U.a.radioWrapper},i.a.createElement("label",null,i.a.createElement("span",null,"do zrobienia"),i.a.createElement("input",{type:"radio",checked:this.state.type===ae.todo,onChange:function(){return e.handleType(ae.todo)}})))),i.a.createElement("div",{className:"col-12 col-m-4"},i.a.createElement("div",{className:U.a.radioWrapper},i.a.createElement("label",null,i.a.createElement("span",null,"w trakcie"),i.a.createElement("input",{type:"radio",checked:this.state.type===ae.doing,onChange:function(){return e.handleType(ae.doing)}})))),i.a.createElement("div",{className:"col-12 col-m-4"},i.a.createElement("div",{className:U.a.radioWrapper},i.a.createElement("label",null,i.a.createElement("span",null,"zrobione"),i.a.createElement("input",{type:"radio",checked:this.state.type===ae.done,onChange:function(){return e.handleType(ae.done)}})))))),i.a.createElement("div",{className:"col-m-12"},i.a.createElement("button",{type:"button",onClick:this.handleAddTaskBtn,className:U.a.btnAdd},"dodaj")),this.state.validAlert&&i.a.createElement("p",null,"wszystkie pola musza byc wypelnione"))))),i.a.createElement("div",{className:["col-m-12, col-xl-6",U.a.lastTasks].join(" ")},i.a.createElement("div",{className:"row"},i.a.createElement("h2",{className:"col-m-12"},"Ostatnio dodane zadania"),this.showLastTask().slice(0,window.innerWidth>1100?6:4).map(function(e){return i.a.createElement(X,Object.assign({key:e.id},e))}))))),i.a.createElement(te,{closeFn:this.props.closeAddModal})))}}]),t}(n.Component),ie=Object(d.b)(function(e){return{tasks:e.tasksReducer.tasks}},{closeAddModal:function(){return{type:"CLOSE_ADD_MODAL"}},createTask:function(e,t,a,n){return{type:"CREATE_TASK",payload:{id:e,title:t,type:a,description:n}}}})(ne),le=a(40),re=a(24),se=a.n(re),ce=Object(d.b)(function(e){return{tasks:e.tasksReducer.tasks}},{closeSearchModal:function(){return{type:"CLOSE_SEARCH_MODAL"}}})(function(e){var t=e.closeSearchModal,a=e.tasks,l=[],r=Object(n.useState)(""),s=Object(le.a)(r,2),c=s[0],o=s[1];return i.a.createElement("div",{className:se.a.wrapper},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"col-m-12"},i.a.createElement("input",{type:"text",onChange:function(e){o(e.target.value)},className:se.a.searchForm,placeholder:"wpisz tytul zadania"})),i.a.createElement("div",{className:se.a.tasks},i.a.createElement("div",{className:"row"},a.map(function(e){return e.title.toUpperCase().indexOf(c.toUpperCase())>-1?(l.push(!0),i.a.createElement(X,Object.assign({key:e.id},e))):(l.push(!1),null)}),l.indexOf(!0)>-1?null:i.a.createElement("p",{className:"col-m-6"},"nic nie znaleziono")))),i.a.createElement(te,{closeFn:t}))});var oe=Object(d.b)(function(e){return{isAddModalOpen:e.layout.isAddModalOpen,isSearcModalhOpen:e.layout.isSearcModalhOpen}},{openAddModal:function(){return{type:"OPEN_ADD_MODAL"}},openSearchdModal:function(){return{type:"OPEN_SEARCH_MODAL"}}})(function(e){var t=e.isAddModalOpen,a=e.openAddModal,n=e.openSearchdModal,l=e.isSearcModalhOpen;return i.a.createElement(s.a,null,i.a.createElement(i.a.Fragment,null,i.a.createElement(K,{openAddModalFn:a,openSearchdModalFn:n}),i.a.createElement(G,null,i.a.createElement(c.a,null,i.a.createElement(o.a,{exact:!0,path:"/",component:S}),i.a.createElement(o.a,{path:"/doing",component:x}),i.a.createElement(o.a,{path:"/done",component:D}),i.a.createElement(o.a,{component:F}))),t&&i.a.createElement(ie,null),l&&i.a.createElement(ce,null)))}),de=(a(51),a(10)),pe=a(7),ue={tasks:[{id:0,title:"Stylowanie komponet\xf3w",type:"todo",description:"Doda\u0107 do aplikacji Semanitic UI / styled components",isEdit:!1,isOptionsView:!1},{id:1,title:"Data utworzenia",type:"todo",description:"Doda\u0107 do ka\u017cdego zadania date utworzenia",isEdit:!1,isOptionsView:!1},{id:2,title:"Filtrowanie zada\u0144",type:"todo",description:"Doda\u0107 filtrowanie dla zada\u0144 alfabetycznie , najnowsze, najstarsze",isEdit:!1,isOptionsView:!1},{id:3,title:"Animacje",type:"todo",description:"Doda\u0107 animacje przej\u015bcia mi\u0119dzy stronami",isEdit:!1,isOptionsView:!1},{id:4,title:"Refaktoryzacja kodu",type:"doing",description:"Podzieli\u0107 aplikacj\u0119 na wi\u0119cej komponent\xf3w wielokrotnego u\u017cytku",isEdit:!1,isOptionsView:!1},{id:5,title:"Firebase",type:"todo",description:"Zintegrowa\u0107 aplikacj\u0119 z Firebase , aby by\u0142a mo\u017cliwos\u0107 utworzenia konta i zapisywania tablic na serwerze",isEdit:!1,isOptionsView:!1},{id:6,title:"Priorytetowe zadania",type:"todo",description:"wyswietlaja sie jako pierwsze i maj\u0105 inny kolor",isEdit:!1,isOptionsView:!1},{id:7,title:"podstawowa funkcjonalno\u015b\u0107",type:"done",description:"dodawanie , usuwanie , edytowanie ,przenoszenie zadan",isEdit:!1,isOptionsView:!1},{id:8,title:"Redux",type:"doing",description:"Doda\u0107 redux do zarz\u0105dzania stanem aplikacji",isEdit:!1,isOptionsView:!1},{id:9,title:"Optymalizacja wydajno\u015bci",type:"todo",description:"Doda\u0107 techiniki , przyspieszaj\u0105ce dzia\u0142anie aplikacji",isEdit:!1,isOptionsView:!1}]},me={isAddModalOpen:!1,isSearcModalhOpen:!1},Ee=Object(de.b)({tasksReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_OPTION_VIEW":return{tasks:e.tasks.map(function(e){return e.id===t.payload?Object(pe.a)({},e,{isOptionsView:!e.isOptionsView}):e})};case"DELETE_TASK":return{tasks:e.tasks.filter(function(e){return e.id!==t.payload})};case"EDIT_TASK":return{tasks:e.tasks.map(function(e){return e.id===t.payload?Object(pe.a)({},e,{isEdit:!0,isOptionsView:!1}):e})};case"CONFIRM_TASK":return{tasks:e.tasks.map(function(e){return e.id===t.payload.id?Object(pe.a)({},e,{isEdit:!1,description:t.payload.description,title:t.payload.title}):e})};case"CANCEL_EDIT_TASK":return{tasks:e.tasks.map(function(e){return e.id===t.payload?Object(pe.a)({},e,{isEdit:!1}):e})};case"CHANGE_TYPE_TASK":return{tasks:e.tasks.map(function(e){return e.id===t.payload.id?Object(pe.a)({},e,{type:t.payload.type,isOptionsView:!1}):e})};case"CREATE_TASK":return{tasks:[].concat(Object(H.a)(e.tasks),[{id:t.payload.id,title:t.payload.title,type:t.payload.type,description:t.payload.description,isEdit:!1,isOptionsView:!1}])};default:return e}},layout:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me;switch((arguments.length>1?arguments[1]:void 0).type){case"OPEN_ADD_MODAL":return Object(pe.a)({},e,{isAddModalOpen:!0});case"CLOSE_ADD_MODAL":return Object(pe.a)({},e,{isAddModalOpen:!1});case"OPEN_SEARCH_MODAL":return Object(pe.a)({},e,{isSearcModalhOpen:!0});case"CLOSE_SEARCH_MODAL":return Object(pe.a)({},e,{isSearcModalhOpen:!1});default:return e}}}),ke=Object(de.c)(Ee);r.a.render(i.a.createElement(d.a,{store:ke},i.a.createElement(oe,null)),document.getElementById("root"))},6:function(e,t,a){e.exports={wrapper:"Menu_wrapper__1XxAc",list:"Menu_list__1IhGb",link:"Menu_link__3O6qD",linkActive:"Menu_linkActive__2nQ-n",searchList:"Menu_searchList__LhfzS",search:"Menu_search__3rdAT",searchIcon:"Menu_searchIcon__1yDhC",searchTxt:"Menu_searchTxt__3C4Bf"}},8:function(e,t,a){e.exports={wrapper:"AddTask_wrapper__ZHdL2",lastTasks:"AddTask_lastTasks__2BA90",btnAdd:"AddTask_btnAdd__3Pqti",searchForm:"AddTask_searchForm__Zc5eR",options:"AddTask_options__2pgzG",radioWrapper:"AddTask_radioWrapper__2CRoZ"}},9:function(e,t,a){e.exports={box:"Task_box__3jkO5",dots:"Task_dots__3nuz9",dot:"Task_dot__2na-A",title:"Task_title__2JJbE",mb:"Task_mb__2L-DQ"}}},[[41,1,2]]]);
//# sourceMappingURL=main.4f4a8386.chunk.js.map