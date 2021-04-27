(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n.n(i),s=n(7),l=n.n(s),c=n(0),o=function(){return Object(c.jsx)("h1",{children:"CV Application"})},r=n(2),d=n(3),h=n(5),j=n(4),u=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(t){return Object(r.a)(this,n),e.call(this,t)}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props.form,e=t.firstName,n=t.lastName,i=t.email,a=t.phoneNo;return Object(c.jsxs)("div",{id:"edited-info",children:[Object(c.jsxs)("p",{children:["First Name: ",e]}),Object(c.jsxs)("p",{children:["Last Name: ",n]}),Object(c.jsxs)("p",{children:["Email: ",i]}),Object(c.jsxs)("p",{children:["Phone no.: ",a]}),Object(c.jsx)("button",{onClick:this.props.onclick,children:"Edit"})]})}}]),n}(i.Component),b=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).handleFirstName=function(e){t.setState({firstName:e.target.value})},t.handleLastName=function(e){t.setState({lastName:e.target.value})},t.handleEmail=function(e){t.setState({email:e.target.value})},t.handlePhoneNo=function(e){t.setState({phoneNo:e.target.value})},t.handleClick=function(e){t.setState({renderOverview:!t.state.renderOverview})},t.state={firstName:"",lastName:"",email:"",phoneNo:"",renderOverview:!1},t}return Object(d.a)(n,[{key:"render",value:function(){return this.state.renderOverview?Object(c.jsx)(u,{form:this.state,onclick:this.handleClick}):Object(c.jsxs)("form",{id:"general-info-form",children:[Object(c.jsxs)("label",{for:"first-name",children:["First Name: ",Object(c.jsx)("input",{type:"input",id:"first-name",value:this.state.firstName,onChange:this.handleFirstName})]}),Object(c.jsxs)("label",{for:"last-name",children:["Last Name: ",Object(c.jsx)("input",{type:"input",id:"last-name",value:this.state.lastName,onChange:this.handleLastName})]}),Object(c.jsxs)("label",{for:"email",children:[Object(c.jsx)("span",{children:"Email:"})," ",Object(c.jsx)("input",{type:"email",id:"email",value:this.state.email,onChange:this.handleEmail})]}),Object(c.jsxs)("label",{for:"phone-no",children:[Object(c.jsx)("span",{children:"Phone No.:"})," ",Object(c.jsx)("input",{type:"tel",id:"phone-no",value:this.state.phoneNo,onChange:this.handlePhoneNo})]}),Object(c.jsx)("button",{onClick:this.handleClick,children:"Submit"})]})}}]),n}(i.Component),O=function(){return Object(c.jsx)("h2",{children:"General information"})},m=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(t){return Object(r.a)(this,n),e.call(this,t)}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props.form,e=t.institution,n=t.typeOfStudies,i=t.fieldOfStudies,a=t.dateFrom,s=t.dateTo;return Object(c.jsxs)("div",{id:"edited-education",children:[Object(c.jsxs)("p",{children:["Institution: ",e]}),Object(c.jsxs)("p",{children:["Diploma: ",n]}),Object(c.jsxs)("p",{children:["Field of studies: ",i]}),Object(c.jsxs)("p",{children:["From: ",a]}),Object(c.jsxs)("p",{children:["Until: ",s]}),Object(c.jsx)("button",{onClick:this.props.handleClick,children:"Edit"})]})}}]),n}(i.Component),f=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).handleInstitution=function(e){t.setState({institution:e.target.value})},t.handleTypeOfStudies=function(e){t.setState({typeOfStudies:e.target.value})},t.handleFieldOfStudies=function(e){t.setState({fieldOfStudies:e.target.value})},t.handleDateFrom=function(e){t.setState({dateFrom:e.target.value})},t.handleDateTo=function(e){t.setState({dateTo:e.target.value})},t.handleSubmit=function(){t.setState({edited:!t.state.edited})},t.state={institution:"",typeOfStudies:"",fieldOfStudies:"",dateFrom:"",dateTo:"",edited:!1},t}return Object(d.a)(n,[{key:"render",value:function(){return this.state.edited?Object(c.jsx)(m,{form:this.state,handleClick:this.handleSubmit}):Object(c.jsxs)("form",{children:[Object(c.jsxs)("label",{for:"institution",children:["Institution: ",Object(c.jsx)("input",{type:"text",id:"institution",value:this.state.institution,onChange:this.handleInstitution})]}),Object(c.jsxs)("label",{for:"type-of-studies",children:["Diploma: ",Object(c.jsx)("input",{id:"type-of-studies",value:this.state.typeOfStudies,onChange:this.handleTypeOfStudies})]}),Object(c.jsxs)("label",{for:"field-of-studies",children:["Field of studies: ",Object(c.jsx)("input",{id:"field-of-studies",value:this.state.fieldOfStudies,onChange:this.handleFieldOfStudies})]}),Object(c.jsxs)("label",{for:"dateFrom",children:["From: ",Object(c.jsx)("input",{type:"date",id:"dateFrom",value:this.state.dateFrom,onChange:this.handleDateFrom})]}),Object(c.jsxs)("label",{for:"dateTo",children:["Until: ",Object(c.jsx)("input",{type:"date",id:"dateTo",value:this.state.dateTo,onChange:this.handleDateTo})]}),Object(c.jsx)("button",{onClick:this.handleSubmit,children:"Submit"})]})}}]),n}(i.Component),p=(n(13),function(){return Object(c.jsx)("h2",{children:"Education"})}),x=function(){return Object(c.jsx)("h2",{children:"Work"})},v=function(t){var e=t.form,n=e.companyName,i=e.positionTitle,a=e.mainTasks,s=e.dateFrom,l=e.dateUntil;return Object(c.jsxs)("div",{id:"edited-experience",children:[Object(c.jsxs)("p",{children:["Company name: ",n]}),Object(c.jsxs)("p",{children:["Position title: ",i]}),Object(c.jsxs)("p",{children:["Main tasks: ",a]}),Object(c.jsxs)("p",{children:["Date: ",s]}),Object(c.jsxs)("p",{children:["Until: ",l]}),Object(c.jsx)("button",{onClick:t.handleClick,children:"Edit"})]})},S=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).handleCompanyName=function(e){t.setState({companyName:e.target.value})},t.handlePositionTitle=function(e){t.setState({positionTitle:e.target.value})},t.handleMainTasks=function(e){t.setState({mainTasks:e.target.value})},t.handleDateFrom=function(e){t.setState({dateFrom:e.target.value})},t.handleDateUntil=function(e){t.setState({dateUntil:e.target.value})},t.handleOnSubmit=function(){t.setState({edited:!t.state.edited})},t.handleNewSection=function(){return Object(c.jsx)(n,{})},t.state={companyName:"",positionTitle:"",mainTasks:"",dateFrom:"",dateUntil:"",edited:!1},t}return Object(d.a)(n,[{key:"render",value:function(){return this.state.edited?Object(c.jsx)(v,{form:this.state,handleClick:this.handleOnSubmit}):Object(c.jsxs)("form",{children:[Object(c.jsxs)("label",{for:"company-name",children:["Company name: ",Object(c.jsx)("input",{id:"company-name",value:this.state.companyName,onChange:this.handleCompanyName})]}),Object(c.jsxs)("label",{for:"position-title",children:["Position title: ",Object(c.jsx)("input",{id:"position-title",value:this.state.positionTitle,onChange:this.handlePositionTitle})]}),Object(c.jsxs)("label",{for:"main-tasks",children:["Main tasks: ",Object(c.jsx)("textarea",{id:"main-tasks",value:this.state.mainTasks,onChange:this.handleMainTasks})]}),Object(c.jsxs)("label",{for:"date-from",children:["From: ",Object(c.jsx)("input",{type:"date",id:"date-from",value:this.state.dateFrom,onChange:this.handleDateFrom})]}),Object(c.jsxs)("label",{for:"date-until",children:[" Until: ",Object(c.jsx)("input",{type:"date",id:"date-until",value:this.state.dateUntil,onChange:this.handleDateUntil})]}),Object(c.jsx)("button",{onClick:this.handleOnSubmit,children:"Submit"})]})}}]),n}(i.Component);var C=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(o,{}),Object(c.jsx)(O,{}),Object(c.jsx)(b,{}),Object(c.jsx)(p,{}),Object(c.jsx)(f,{}),Object(c.jsx)(x,{}),Object(c.jsx)(S,{})]})};l.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(C,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.85dfdae9.chunk.js.map