(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{202:function(e,n,t){"use strict";t.r(n);var l=t(0),o=t(40),r=t.n(o),c=(t(171),t(8)),a=t(90),s=t(215),i=t(227),u=t(219),j=t(126),p=t(225),d=t(224),f=t(37),b=t.n(f),x=t(29),h=t(64),m=h.onCallTimes,O=h.rulesByPerson,y=h.rulesBySlot,g=h.slots,k=h.slotCount,C=h.onCallTimeCount,v=function(){var e=Object(l.useState)({slots:g,people:[{key:0,text:"Personne"},{key:1,text:"Personne"},{key:2,text:"Personne"},{key:3,text:"Personne"},{key:4,text:"Personne"},{key:5,text:"Personne"},{key:6,text:"Personne"},{key:7,text:"Personne"},{key:8,text:"Personne"},{key:9,text:"Personne"}],onCallTimes:m,rulesByPerson:O,rulesBySlot:y,planning:{0:{0:null,1:null,2:null,3:null,4:null,5:null,6:null,7:null,8:null},1:{0:null,1:null,2:null,3:null,4:null,5:null,6:null,7:null,8:null},2:{0:null,1:null,2:null,3:null,4:null,5:null,6:null,7:null,8:null},3:{0:null,1:null,2:null,3:null,4:null,5:null,6:null,7:null,8:null},4:{0:null,1:null,2:null,3:null,4:null,5:null,6:null,7:null,8:null},5:{0:null,1:null,2:null,3:null,4:null,5:null,6:null,7:null,8:null},6:{0:null,1:null,2:null,3:null,4:null,5:null,6:null,7:null,8:null},7:{0:null,1:null,2:null,3:null,4:null,5:null,6:null,7:null,8:null},8:{0:null,1:null,2:null,3:null,4:null,5:null,6:null,7:null,8:null},9:{0:null,1:null,2:null,3:null,4:null,5:null,6:null,7:null,8:null}},callback:{error:!1,message:{status:null,statusMsg:null}},onCallTimeCount:C,slotCount:k,personCount:0,loading:!1,confirmOpen:!1}),n=Object(x.a)(e,2);return{data:n[0],setData:n[1],colors:["blue","red","orange","yellow","olive","green","teal","violet","purple","pink","brown"]}},T=t(63),_=t(220),S=t(87),P=t.n(S),B=t(65),w=t.n(B),E=t(125),A=t(55),R=t(129),D=t.n(R),I={API_URL:"https://resplanning-back.herokuapp.com"},N=function(e,n){e.slots=[].concat(Object(A.a)(e.slots),[{key:e.slotCount,text:"00h00"}]),e.people.forEach((function(n){var t=n.key;return e.planning[t][e.slotCount]=null})),e.slotCount+=1,n(Object(c.a)({},e))},L=function(e,n){e.people=[].concat(Object(A.a)(e.people),[{key:e.personCount,text:"Personne"}]),e.planning[e.personCount]={},e.slots.forEach((function(n){e.planning[e.personCount][n.key]=null})),e.personCount+=1,n(Object(c.a)({},e))},M=function(e,n,t){e.slots=e.slots.filter((function(e){return e.key!==t})),e.people.forEach((function(n){return delete e.planning[n.key][t]})),e.rulesBySlot.forEach((function(e){return e.slots=e.slots.filter((function(e){return e!==t}))})),e.rulesByPerson.forEach((function(e){return e.people=e.people.filter((function(e){return e!==t}))})),n(Object(c.a)({},e))},F=function(e,n,t){e.people=e.people.filter((function(e){return e.key!==t})),delete e.planning[t],e.rulesBySlot.forEach((function(e){return e.slots=e.slots.filter((function(e){return e!==t}))})),e.rulesByPerson.forEach((function(e){return e.people=e.people.filter((function(e){return e!==t}))})),n(Object(c.a)({},e))},J=function(e,n){e.people.forEach((function(t){var l=t.key;F(e,n,l)}))},H=function(e,n,t){e.onCallTimes=e.onCallTimes.filter((function(e){return e.key!==t})),e.people.forEach((function(n){e.slots.forEach((function(l){l.key in e.planning[n.key]&&e.planning[n.key][l.key]===t&&(e.planning[n.key][l.key]=null)}))})),n(Object(c.a)({},e))},z=function(e,n){e.onCallTimes.forEach((function(t){var l=t.key;0!==l&&H(e,n,l)}))},V=function(e,n){e.slots.forEach((function(t){var l=t.key;M(e,n,l)}))},U=function(e,n,t){var l=null;if(t in e.planning[n]&&(l=e.planning[n][t]),null!==l){var o=e.onCallTimes.find((function(e){return e.key===l}));if(o)return o.value}return null},q=function(e){var n=[["Personnes"]];return e.slots.forEach((function(e){n[0].push(e.text)})),e.people.forEach((function(t){var l=[e.people.find((function(e){return e.key===t.key})).text];e.slots.forEach((function(n){var o=null;n.key in e.planning[t.key]&&(o=e.planning[t.key][n.key]),l.push(null!==o?e.onCallTimes.find((function(e){return e.key===o})).text:null)})),n.push(l)})),n},G=function(e){var n=[];return e.forEach((function(e){return n.push(e.key)})),n},W=function(e,n){return n.forEach((function(n){n.slots.length>0&&-1!==n.slots[0]?n.slots=n.slots.filter((function(n){return e.slots.find((function(e){return e.key===n}))})):n.slots=[-1],n.people.length>0&&-1!==n.people[0]?n.people=n.people.filter((function(n){return e.people.find((function(e){return e.key===n}))})):n.people=[-1]})),n},K=function(){var e=Object(E.a)(w.a.mark((function e(n,t,l,o,r){var a,s,i,u,j,p;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===l){e.next=13;break}return a="{}",e.next=4,new Promise((function(e){var n=new FileReader;n.onload=function(){a=n.result,e()},n.readAsText(l)}));case 4:s=JSON.parse(a),i=s.onCallTimes,u=s.rulesByPerson,j=s.rulesBySlot,p=s.onCallTimeCount,z(n,t),n.onCallTimes=i,n.rulesBySlot=W(n,j),n.rulesByPerson=W(n,u),n.onCallTimeCount=p,t(Object(c.a)({},n)),o(null);case 13:r(!1);case 14:case"end":return e.stop()}}),e)})));return function(n,t,l,o,r){return e.apply(this,arguments)}}(),Q=function(){var e=Object(E.a)(w.a.mark((function e(n,t,l,o,r){var a,s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.loading=!0,t(Object(c.a)({},n)),null===l){e.next=8;break}return(a=new FormData).append("file",l),s={method:"POST",url:I.API_URL+"/parse-csv/",data:a},e.next=8,D()(s).then((function(e){J(n,t),V(n,t),n.people=JSON.parse(JSON.stringify(e.data.people)),n.slots=JSON.parse(JSON.stringify(e.data.slots)),n.personCount=n.people.length,n.slotCount=n.slots.length,n.planning=JSON.parse(JSON.stringify(e.data.planning))})).catch((function(e){console.log(e)}));case 8:o(null),r(!1),n.loading=!1,t(Object(c.a)({},n));case 12:case"end":return e.stop()}}),e)})));return function(n,t,l,o,r){return e.apply(this,arguments)}}(),X=function(){var e=Object(E.a)(w.a.mark((function e(n,t){var l,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.loading=!0,t(Object(c.a)({},n)),l=JSON.stringify({planning:n.planning,on_call_times:G(n.onCallTimes),slots:G(n.slots),people:G(n.people),rules_by_person:n.rulesByPerson,rules_by_slot:n.rulesBySlot}),o={method:"POST",url:I.API_URL+"/generate/",headers:{"Content-Type":"application/json"},data:l},e.next=6,D()(o).then((function(e){n.planning=JSON.parse(JSON.stringify(e.data.planning)),n.loading=!1,t(Object(c.a)({},n)),console.log(n.planning)})).catch((function(e){var l,o;n.callback.error=!0,n.callback.message={status:null===e||void 0===e||null===(l=e.response)||void 0===l?void 0:l.status,statusMsg:null===e||void 0===e||null===(o=e.response)||void 0===o?void 0:o.statusText},n.loading=!1,t(Object(c.a)({},n))}));case 6:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),Y=t(1),Z=function(e){var n=e.data,t=e.setData,l=v().colors;return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)("div",{children:Object(Y.jsx)("b",{children:"La premi\xe8re permanence compl\xe8te le planning par d\xe9faut"})}),n.onCallTimes.map((function(e){var o=e.key,r=e.text;return Object(Y.jsxs)(a.a,{color:l[o%l.length],horizontal:!0,style:{marginTop:"1vh"},children:[0!==o&&Object(Y.jsx)(T.a,{name:"remove",style:{cursor:"pointer"},onClick:function(){return H(n,t,o)}}),Object(Y.jsx)(P.a,{initialValue:r,save:function(e){return function(e,n,t,l){e.onCallTimes.find((function(e){return e.key===l})).text=t,n(Object(c.a)({},e))}(n,t,e,o)}})]},o)})),Object(Y.jsx)(_.a,{content:"Ajouter une permanence",inverted:!0,basic:!0,trigger:Object(Y.jsx)(T.a,{color:"green",name:"add",style:{cursor:"pointer"},onClick:function(){return function(e,n){e.onCallTimes=[].concat(Object(A.a)(e.onCallTimes),[{key:e.onCallTimeCount,text:"Perm",value:e.onCallTimeCount}]),e.onCallTimeCount+=1,n(Object(c.a)({},e))}(n,t)}})})]})},$=t(223),ee=t(132),ne=function(e){var n=e.data,t=e.setData;return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsxs)($.a,{celled:!0,padded:!0,color:"green",children:[Object(Y.jsx)($.a.Header,{children:Object(Y.jsxs)($.a.Row,{textAlign:"center",children:[Object(Y.jsx)($.a.HeaderCell,{singleLine:!0,width:4,children:"Personnes"}),n.slots.map((function(e){return Object(Y.jsxs)($.a.HeaderCell,{singleLine:!0,children:[Object(Y.jsx)(T.a,{color:"red",name:"remove",style:{cursor:"pointer"},onClick:function(){return M(n,t,e.key)}}),Object(Y.jsx)(P.a,{initialValue:e.text,save:function(l){return function(e,n,t,l){e.slots.find((function(e){return e.key===l})).text=t,n(Object(c.a)({},e))}(n,t,l,e.key)}})]},e.key)})),Object(Y.jsx)($.a.Cell,{children:Object(Y.jsx)(ee.a,{circular:!0,color:"green",icon:"add",onClick:function(){return N(n,t)}})})]})}),Object(Y.jsx)($.a.Body,{children:n.people.map((function(e){return Object(Y.jsxs)($.a.Row,{children:[Object(Y.jsxs)($.a.Cell,{singleLine:!0,textAlign:"center",children:[Object(Y.jsx)(T.a,{color:"red",name:"remove",style:{cursor:"pointer"},onClick:function(){return F(n,t,e.key)}}),Object(Y.jsx)(P.a,{initialValue:e.text,save:function(l){return function(e,n,t,l){e.people.find((function(e){return e.key===l})).text=t.normalize("NFD").replace(/[\u0300-\u036f]/g,""),n(Object(c.a)({},e))}(n,t,l,e.key)}})]}),n.slots.map((function(l){return Object(Y.jsx)($.a.Cell,{selectable:!0,positive:l.key in n.planning[e.key],negative:!(l.key in n.planning[e.key]),onClick:function(){!function(e,n,t,l){l in e.planning[t]?delete e.planning[t][l]:e.planning[t][l]=null,n(Object(c.a)({},e))}(n,t,e.key,l.key)}},e+l+e.key+l.key)}))]},e.key)}))})]}),Object(Y.jsx)(ee.a,{color:"green",onClick:function(){L(n,t)},children:"Ajouter une personne"})]})},te=t(221),le=function(e){var n=e.data,t=e.setData,l=v().colors;return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)("b",{children:"Pense \xe0 vider le planning si tu veux en g\xe9n\xe9rer un nouveau"}),Object(Y.jsxs)($.a,{celled:!0,padded:!0,color:"green",children:[Object(Y.jsx)($.a.Header,{children:Object(Y.jsxs)($.a.Row,{textAlign:"center",children:[Object(Y.jsx)($.a.HeaderCell,{singleLine:!0,width:4,children:"Personnes"}),n.slots.map((function(e){return Object(Y.jsxs)($.a.HeaderCell,{singleLine:!0,children:[Object(Y.jsx)(T.a,{color:"red",name:"remove",style:{cursor:"pointer"},onClick:function(){return M(n,t,e.key)}}),e.text]},e.key)})),Object(Y.jsx)($.a.Cell,{children:Object(Y.jsx)(ee.a,{circular:!0,color:"green",icon:"add",onClick:function(){return N(n,t)}})})]})}),Object(Y.jsx)($.a.Body,{children:n.people.map((function(e){return Object(Y.jsxs)($.a.Row,{children:[Object(Y.jsxs)($.a.Cell,{singleLine:!0,textAlign:"center",children:[Object(Y.jsx)(T.a,{color:"red",name:"remove",style:{cursor:"pointer"},onClick:function(){return F(n,t,e.key)}}),e.text]}),n.slots.map((function(o){return Object(Y.jsx)($.a.Cell,{singleLine:!0,children:o.key in n.planning[e.key]?Object(Y.jsx)(ee.a.Group,{color:null!==U(n,e.key,o.key)?l[U(n,e.key,o.key)%l.length]:null,children:Object(Y.jsx)(te.a,{clearable:!0,className:"button",placeholder:"Perm",fluid:!0,value:U(n,e.key,o.key),options:n.onCallTimes,onChange:function(l,r){!function(e,n,t,l,o){e.planning[l][o]=""!==t?e.onCallTimes.find((function(e){return e.value===t})).key:null,n(Object(c.a)({},e))}(n,t,r.value,e.key,o.key)},selection:!0,style:{width:"100%"}})}):null},e+o+e.key+o.key)}))]},e.key)}))})]}),Object(Y.jsx)(ee.a,{color:"green",onClick:function(){L(n,t)},children:"Ajouter une personne"}),Object(Y.jsx)(ee.a,{color:"red",onClick:function(){return function(e,n){e.people.forEach((function(n){e.slots.forEach((function(t){t.key in e.planning[n.key]&&(e.planning[n.key][t.key]=null)}))})),n(Object(c.a)({},e))}(n,t)},children:"Vider"})]})},oe=t(230),re=t(228),ce=t(216),ae=t(217),se=function(e,n,t){var o=e.onCallTimes,r=e.people,a=e.slots,s=e.rulesBySlot,i=e.rulesByPerson,u="slot"===n?s[t]:i[t],j=Object(l.useState)(u?Object(c.a)({},u):{method:"exact",param:0,counter:-1,slots:[],people:[],on_call_times:[],exigency:0,disable:!1}),p=Object(x.a)(j,2),d=p[0],f=p[1],b=-1!==d.people[0]?[{key:-1,text:"Tout le monde",value:-1}].concat(r.filter((function(e){var n=e.key;return!d.people.includes(n)}))):[],h=-1!==d.slots[0]?[{key:-1,text:"Tous les cr\xe9neaux",value:-1}].concat(a.filter((function(e){var n=e.key;return!d.slots.includes(n)}))):[],m=Object(l.useState)({onCallTimesChoice:o.filter((function(e){var n=e.key;return!d.on_call_times.includes(String(n))})),peopleChoice:b,slotsChoice:h}),O=Object(x.a)(m,2),y=O[0],g=O[1];return{rule:d,setRule:f,formData:y,setFormData:g}},ie=function(e,n){e.isOpen=!1,n(Object(c.a)({},e))},ue=function(e){var n=e.modalSettings,t=e.setModalSettings,l=e.ruleName,o=e.ruleId,r=e.data,i=e.setData,u=se(r,l,o),j=u.rule,p=u.setRule,d=u.formData,f=u.setFormData,b=r.onCallTimes,x=r.people,h=r.slots,m=d.onCallTimesChoice,O=d.peopleChoice,y=d.slotsChoice,g=j.on_call_times,k=j.people,C=j.slots,_=v().colors;return Object(Y.jsxs)(s.a,{children:[Object(Y.jsxs)(re.a,{children:[Object(Y.jsxs)(re.a.Row,{columns:4,children:[Object(Y.jsx)(re.a.Column,{children:Object(Y.jsx)("h3",{children:"M\xe9thode :"})}),Object(Y.jsx)(re.a.Column,{children:Object(Y.jsx)(te.a,{clearable:"exact"!==j.method,value:j.method,selection:!0,onChange:function(e,n){return function(e,n,t){e.method=t||"exact",n(Object(c.a)({},e))}(j,p,n.value)},options:[{key:"exact",value:"exact",text:"Exactement"},{key:"at_least",value:"at_least",text:"Au moins"},{key:"at_most",value:"at_most",text:"Au plus"}]})}),Object(Y.jsx)(re.a.Column,{children:Object(Y.jsx)("h3",{children:"Param\xe8tre :"})}),Object(Y.jsx)(re.a.Column,{children:Object(Y.jsx)(ce.a,{value:j.param,min:0,onChange:function(e,n){return function(e,n,t){e.param=parseInt(t),n(Object(c.a)({},e))}(j,p,n.value)},type:"number"})})]}),Object(Y.jsxs)(re.a.Row,{columns:2,children:[Object(Y.jsx)(re.a.Column,{children:Object(Y.jsx)("h3",{children:"Permanences :"})}),Object(Y.jsx)(re.a.Column,{children:g.map((function(e){return Object(Y.jsxs)(a.a,{color:_[e%_.length],style:{marginTop:"0.5vh"},children:[Object(Y.jsx)(T.a,{name:"remove",style:{cursor:"pointer"},onClick:function(){return function(e,n,t,l,o,r){e.on_call_times=e.on_call_times.filter((function(e){return e!==r})),t.onCallTimesChoice=o.onCallTimes.filter((function(n){var t=n.key;return!e.on_call_times.includes(String(t))})),n(Object(c.a)({},e)),l(Object(c.a)({},t))}(j,p,d,f,r,e)}}),b.find((function(n){return n.key===parseInt(e)})).text]},e)}))})]}),Object(Y.jsx)(re.a.Row,{children:m.map((function(e){var n=e.key,t=e.text;return Object(Y.jsx)(a.a,{horizontal:!0,color:_[n%_.length],style:{cursor:"pointer",marginTop:"0.5vh"},onClick:function(){return function(e,n,t,l,o){e.on_call_times=[].concat(Object(A.a)(e.on_call_times),[String(o)]).sort(),t.onCallTimesChoice=t.onCallTimesChoice.filter((function(e){return e.key!==o})),n(Object(c.a)({},e)),l(Object(c.a)({},t))}(j,p,d,f,n)},children:t},n)}))}),Object(Y.jsxs)(re.a.Row,{columns:2,children:[Object(Y.jsx)(re.a.Column,{children:Object(Y.jsx)("h3",{children:"Cr\xe9neaux :"})}),Object(Y.jsx)(re.a.Column,{children:C.map((function(e){return Object(Y.jsxs)(a.a,{horizontal:!0,color:-1===e?"purple":_[e%_.length],style:{marginTop:"0.5vh"},children:[Object(Y.jsx)(T.a,{name:"remove",style:{cursor:"pointer"},onClick:function(){return function(e,n,t,l,o,r){e.slots=e.slots.filter((function(e){return e!==r})),t.slotsChoice=[{key:-1,text:"Tous les cr\xe9neaux",value:-1}].concat(o.filter((function(n){var t=n.key;return!e.slots.includes(t)}))),n(Object(c.a)({},e)),l(Object(c.a)({},t))}(j,p,d,f,h,e)}}),-1===e?"Tous les cr\xe9neaux":h.find((function(n){return n.key===e})).text]},e)}))})]}),Object(Y.jsx)(re.a.Row,{children:y.map((function(e){var n=e.key,t=e.text;return Object(Y.jsx)(a.a,{color:-1===n?"purple":_[n%_.length],style:{cursor:"pointer",marginTop:"0.5vh"},onClick:function(){return function(e,n,t,l,o){e.slots=-1===o?[o]:[].concat(Object(A.a)(e.slots),[o]).sort((function(e,n){return e.key-n.key})),t.slotsChoice=-1===o?[]:t.slotsChoice.filter((function(e){return e.key!==o})),n(Object(c.a)({},e)),l(Object(c.a)({},t))}(j,p,d,f,n)},children:t},n)}))}),Object(Y.jsxs)(re.a.Row,{columns:2,children:[Object(Y.jsx)(re.a.Column,{children:Object(Y.jsx)("h3",{children:"Personnes :"})}),Object(Y.jsx)(re.a.Column,{children:k.map((function(e){return Object(Y.jsxs)(a.a,{horizontal:!0,color:-1===e?"teal":_[e%_.length],style:{marginTop:"0.5vh"},children:[Object(Y.jsx)(T.a,{name:"remove",style:{cursor:"pointer"},onClick:function(){return function(e,n,t,l,o,r){e.people=e.people.filter((function(e){return e!==r})),t.peopleChoice=[{key:-1,text:"Tout le monde",value:-1}].concat(o.filter((function(n){var t=n.key;return!e.people.includes(t)}))),n(Object(c.a)({},e)),l(Object(c.a)({},t))}(j,p,d,f,x,e)}}),-1===e?"Tout le monde":x.find((function(n){return n.key===e})).text]},e)}))})]}),Object(Y.jsx)(re.a.Row,{children:O.map((function(e){var n=e.key,t=e.text;return Object(Y.jsx)(a.a,{color:-1===n?"teal":_[n%_.length],style:{cursor:"pointer",marginTop:"0.5vh"},onClick:function(){return function(e,n,t,l,o){e.people=-1===o?[o]:[].concat(Object(A.a)(e.people),[o]).sort((function(e,n){return e.key-n.key})),t.peopleChoice=-1===o?[]:t.peopleChoice.filter((function(e){return e.key!==o})),n(Object(c.a)({},e)),l(Object(c.a)({},t))}(j,p,d,f,n)},children:t},n)}))}),"person"===l&&Object(Y.jsxs)(re.a.Row,{columns:4,children:[Object(Y.jsx)(re.a.Column,{children:Object(Y.jsx)("h3",{children:"Lot :"})}),Object(Y.jsx)(re.a.Column,{children:Object(Y.jsx)(ce.a,{value:j.counter,min:-1,onChange:function(e,n){return function(e,n,t){e.counter=parseInt(t),n(Object(c.a)({},e))}(j,p,n.value)},type:"number"})})]})]}),Object(Y.jsx)(ae.a,{}),Object(Y.jsx)(ee.a,{negative:!0,onClick:function(){return ie(n,t)},children:"Annuler"}),Object(Y.jsx)(ee.a,{positive:!0,onClick:function(){return function(e,n,t,l,o,r,a){var s=r.rulesBySlot,i=r.rulesByPerson,u="slot"===l?s:i;u[o]?u[o]=t:u.push(t),a(Object(c.a)({},r)),e.isOpen=!1,n(Object(c.a)({},e))}(n,t,j,l,o,r,i)},children:"Sauvegarder"})]})},je=function(){var e=Object(l.useState)({isOpen:!1,ruleId:null}),n=Object(x.a)(e,2);return{modalSettings:n[0],setModalSettings:n[1]}},pe=function(e){var n=e.name,t=e.data,l=e.setData,o=v().colors,r="slot"===n?t.rulesBySlot:t.rulesByPerson,s=je(),i=s.modalSettings,u=s.setModalSettings,p="person"===n?["","","M\xe9thode","Param\xe8tre","Permanences","Cr\xe9neaux","Personnes","Lot","Actif"]:["","","M\xe9thode","Param\xe8tre","Permanences","Cr\xe9neaux","Personnes","Actif"];return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsxs)(j.a,{open:i.isOpen,onClose:function(){return ie(i,u)},children:[Object(Y.jsxs)(j.a.Header,{children:["R\xe8gle par ","slot"===n?"cr\xe9neau":"personne"]}),Object(Y.jsx)(j.a.Content,{children:Object(Y.jsx)(ue,{modalSettings:i,setModalSettings:u,ruleId:i.ruleId,ruleName:n,data:t,setData:l})})]}),"slot"===n&&Object(Y.jsx)("div",{children:Object(Y.jsx)("b",{children:"Si une permanence n'appara\xeet pas sur un cr\xe9neau, elle est automatiquement d\xe9sactiv\xe9e"})}),Object(Y.jsxs)($.a,{celled:!0,padded:!0,color:"blue",children:[Object(Y.jsx)($.a.Header,{children:Object(Y.jsx)($.a.Row,{children:p.map((function(e,n){return Object(Y.jsx)($.a.HeaderCell,{children:e},n)}))})}),Object(Y.jsx)($.a.Body,{children:r.map((function(e,r){return Object(Y.jsxs)($.a.Row,{children:[Object(Y.jsx)($.a.Cell,{style:{textAlign:"center"},children:Object(Y.jsx)(T.a,{color:"red",name:"remove",style:{cursor:"pointer"},onClick:function(){return function(e,n,t,l){"slot"===e?n.rulesBySlot=n.rulesBySlot.filter((function(e,n){return n!==l})):"person"===e&&(n.rulesByPerson=n.rulesByPerson.filter((function(e,n){return n!==l}))),t(Object(c.a)({},n))}(n,t,l,r)}})}),Object(Y.jsx)($.a.Cell,{style:{textAlign:"center"},children:Object(Y.jsx)(T.a,{color:"blue",name:"edit",style:{cursor:"pointer"},onClick:function(){return function(e,n,t){e.isOpen=!0,e.ruleId=t,n(Object(c.a)({},e))}(i,u,r)}})}),Object(Y.jsxs)($.a.Cell,{children:["at_least"===e.method&&"Au moins","at_most"===e.method&&"Au plus","exact"===e.method&&"Exactement"]}),Object(Y.jsx)($.a.Cell,{style:{textAlign:"center"},children:e.param}),Object(Y.jsx)($.a.Cell,{children:e.on_call_times.map((function(e){var n=t.onCallTimes.filter((function(n){return e.split("+").map((function(e){return parseInt(e)})).includes(n.key)}));return Object(f.isEmpty)(n)?null:Object(Y.jsxs)(a.a,{color:o[n.length>1?10*n.reduce((function(e,n){return e+n.key}),0)%o.length:n[0].key%o.length],horizontal:!0,style:{marginTop:"1vh"},children:[n[0].text,n.filter((function(e){return e.key!==n[0].key})).map((function(e){return" + "+e.text}))]},e)}))}),Object(Y.jsx)($.a.Cell,{children:e.slots.map((function(e){var n;return Object(Y.jsx)(a.a,{color:-1===e?"purple":o[e%o.length],style:{marginTop:"1vh"},children:-1===e?"Tous les cr\xe9neaux":null===(n=t.slots.find((function(n){return n.key===e})))||void 0===n?void 0:n.text},e)}))}),Object(Y.jsx)($.a.Cell,{children:e.people.map((function(e){return Object(Y.jsx)(a.a,{color:-1===e?"teal":o[e%o.length],style:{marginTop:"1vh"},children:-1===e?"Tout le monde":t.people.find((function(n){return n.key===e})).text},e)}))}),"person"===n&&Object(Y.jsx)($.a.Cell,{style:{textAlign:"center"},children:(-1!==e.counter||Object(f.isEmpty)(e.people)||-1!==e.people[0]?-1===e.counter&&!Object(f.isEmpty)(e.people)&&-1!==e.people[0]&&e.people.length:"Tous")||-1===e.counter&&Object(f.isEmpty)(e.people)&&0||-1!==e.counter&&e.counter}),Object(Y.jsx)($.a.Cell,{style:{textAlign:"center"},children:Object(Y.jsx)(oe.a,{toggle:!0,checked:!e.disable,onChange:function(){e.disable=!e.disable,l(Object(c.a)({},t))}})})]},e+r)}))})]}),Object(Y.jsx)(ee.a,{positive:!0,onClick:function(){return function(e,n){e.isOpen=!0,e.ruleId=null,n(Object(c.a)({},e))}(i,u)},children:"Ajouter une r\xe8gle"})]})},de=function(e){var n=e.data,t=e.setData,l=[{title:"R\xe8gles par cr\xe9neau",content:Object(Y.jsx)(pe,{name:"slot",data:n,setData:t})},{title:"R\xe8gles par personne",content:Object(Y.jsx)(pe,{name:"person",data:n,setData:t})}],o=b.a.times(l.length,(function(e){return{key:"panel-".concat(e),title:{content:Object(Y.jsx)(a.a,{color:"black",content:l[e].title})},content:{content:l[e].content}}}));return Object(Y.jsx)(s.a,{children:Object(Y.jsx)(d.a,{exclusive:!1,panels:o})})},fe=t(222),be=t(218),xe=t(155),he=t(131),me=function(e){var n=e.data,t=e.setData,o=Object(l.useState)(!1),r=Object(x.a)(o,2),i=r[0],u=r[1],p=Object(l.useState)(!1),d=Object(x.a)(p,2),f=d[0],b=d[1],h=Object(l.useState)(null),m=Object(x.a)(h,2),O=m[0],y=m[1],g=Object(l.useState)(null),k=Object(x.a)(g,2),C=k[0],v=k[1];return Object(Y.jsx)(fe.a,{className:"ui fixed inverted menu",children:Object(Y.jsxs)(s.a,{children:[Object(Y.jsx)(fe.a.Item,{header:!0,children:"Resplanning"}),Object(Y.jsx)(fe.a.Item,{onClick:function(){return X(Object(c.a)({},n),t)},children:Object(Y.jsx)(ee.a,{color:"teal",children:"G\xe9n\xe9ration Planning"})}),Object(Y.jsxs)(fe.a.Menu,{position:"right",children:[Object(Y.jsxs)(fe.a.Item,{children:[Object(Y.jsx)(ee.a,{color:"orange",onClick:function(){return b(!0)},children:"Options R\xe8gles"}),Object(Y.jsxs)(j.a,{open:f,onClose:function(){return b(!1)},children:[Object(Y.jsxs)(j.a.Content,{children:[Object(Y.jsx)(a.a,{color:"olive",onClick:function(){return Object(he.a)({data:{onCallTimes:n.onCallTimes,rulesByPerson:n.rulesByPerson,rulesBySlot:n.rulesBySlot,slots:n.slots,slotCount:n.slotCount,onCallTimesCount:n.onCallTimesCount},fileName:"resplanning-config",exportType:he.a.types.json})},style:{cursor:"pointer"},children:"Exporter"}),Object(Y.jsx)(ae.a,{}),Object(Y.jsx)("label",{htmlFor:"file",style:{cursor:"pointer",fontWeight:"bold",marginRight:"0.5vw"},children:Object(Y.jsx)(a.a,{color:"violet",children:"Importer"})}),Object(Y.jsx)(ce.a,{id:"file",type:"file",accept:".json",onChange:function(e){return y(e.target.files[0])},style:{display:"none"}}),O?Object(Y.jsx)(T.a,{color:"green",name:"circle"}):Object(Y.jsx)(T.a,{color:"red",name:"circle outline"})]}),Object(Y.jsxs)(j.a.Actions,{children:[Object(Y.jsx)(ee.a,{color:"red",onClick:function(){return b(!1)},children:"Annuler"}),Object(Y.jsx)(ee.a,{color:"green",onClick:function(){return K(n,t,O,y,b)},children:"Valider"})]})]})]}),Object(Y.jsxs)(fe.a.Item,{children:[Object(Y.jsx)(ee.a,{color:"violet",onClick:function(){return u(!0)},children:"Importation Frama"}),Object(Y.jsxs)(j.a,{open:i,onClose:function(){v(null),u(!1)},children:[Object(Y.jsxs)(j.a.Content,{style:{textAlign:"center"},children:[Object(Y.jsx)("label",{htmlFor:"file",style:{cursor:"pointer",fontWeight:"bold",marginRight:"0.5vw"},children:Object(Y.jsx)(a.a,{color:"violet",children:"Upload un fichier"})}),Object(Y.jsx)(ce.a,{id:"file",type:"file",accept:".csv",onChange:function(e){return v(e.target.files[0])},style:{display:"none"}}),C?Object(Y.jsx)(T.a,{color:"green",name:"circle"}):Object(Y.jsx)(T.a,{color:"red",name:"circle outline"})]}),Object(Y.jsxs)(j.a.Actions,{children:[Object(Y.jsx)(ee.a,{color:"red",onClick:function(){v(null),u(!1)},children:"Annuler"}),Object(Y.jsx)(ee.a,{color:"green",onClick:function(){return Q(n,t,C,v,u)},children:"Valider"})]})]})]}),Object(Y.jsx)(fe.a.Item,{children:Object(Y.jsx)(xe.CSVLink,{data:q(n),filename:"planning.csv",children:Object(Y.jsx)(ee.a,{color:"brown",children:"Exportation Planning"})})}),Object(Y.jsxs)(fe.a.Item,{children:[Object(Y.jsx)(ee.a,{onClick:function(){return function(e,n){e.confirmOpen=!0,n(Object(c.a)({},e))}(n,t)},color:"red",children:"Remise \xe0 z\xe9ro"}),Object(Y.jsx)(be.a,{open:n.confirmOpen,content:"Es-tu s\xfbr.e de vouloir remettre \xe0 z\xe9ro TOUTES les donn\xe9es de la page (permanences, r\xe8gles, personnes...) ?",onCancel:function(){return function(e,n){e.confirmOpen=!1,n(Object(c.a)({},e))}(n,t)},onConfirm:function(){return function(e,n){e={slots:[],people:[],onCallTimes:[{key:0,text:"Pause",value:0}],rulesByPerson:[],rulesBySlot:[],planning:{},callback:{error:!1,message:{status:null,statusMsg:null}},onCallTimeCount:1,slotCount:0,personCount:0,loading:!1,confirmOpen:!1},n(Object(c.a)({},e))}(n,t)}})]})]})]})})};var Oe=function(){var e=v(),n=e.data,t=e.setData,l=[{title:"Permanences",content:Object(Y.jsx)(Z,{data:n,setData:t})},{title:"R\xe8gles",content:Object(Y.jsx)(de,{data:n,setData:t})},{title:"Disponibilit\xe9s",content:Object(Y.jsx)(ne,{data:n,setData:t})},{title:"Planning",content:Object(Y.jsx)(le,{data:n,setData:t})}],o=b.a.times(l.length,(function(e){return{key:"panel-".concat(e),title:{content:Object(Y.jsx)(a.a,{basic:!0,color:"black",size:"massive",content:l[e].title})},content:{content:l[e].content}}}));return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(me,{data:n,setData:t}),Object(Y.jsxs)(s.a,{fluid:!0,style:{paddingLeft:"3vw",paddingTop:"10vh",overflow:"scroll",minHeight:"100vh"},children:[n.loading&&Object(Y.jsx)(i.a,{active:!0,page:!0,children:Object(Y.jsx)(u.a,{size:"massive",children:"Loading"})}),Object(Y.jsx)(j.a,{basic:!0,open:n.callback.error,onClose:function(){n.callback.error=!1,n.callback.message={status:null,statusMsg:null},t(Object(c.a)({},n))},children:Object(Y.jsxs)(p.a,{negative:!0,children:[Object(Y.jsxs)(p.a.Header,{children:[404===n.callback.message.status&&"Mod\xe8le introuvable",400===n.callback.message.status&&"Donn\xe9es invalides",409===n.callback.message.status&&"Erreur avec le solveur",500===n.callback.message.status&&"Erreur syst\xe8me"]}),Object(Y.jsxs)(p.a.Content,{children:[404===n.callback.message.status&&"Trop de contraintes li\xe9es aux r\xe8gles ou manque de personnes",500===n.callback.message.status&&"Contactes le dev"]})]})}),Object(Y.jsx)(d.a,{panels:o,exclusive:!1,fluid:!0})]})]})};r.a.render(Object(Y.jsx)(Oe,{}),document.getElementById("root"))},64:function(e){e.exports=JSON.parse('{"onCallTimes":[{"key":0,"text":"Pause","value":0},{"key":1,"text":"S\xe9cu pente","value":1},{"key":2,"text":"S\xe9cu escalier","value":2},{"key":3,"text":"Bar","value":3},{"key":4,"text":"Caisse","value":4},{"key":5,"text":"M\xe9nage","value":5},{"key":6,"text":"S\xe9cu trottoir","value":6}],"rulesByPerson":[{"method":"at_most","param":2,"counter":-1,"slots":[-1],"people":[-1],"on_call_times":["1","2"],"exigency":0,"disable":false},{"method":"at_most","param":3,"counter":-1,"slots":[-1],"people":[-1],"on_call_times":["1+2"],"exigency":0,"disable":false},{"method":"at_most","param":1,"counter":2,"slots":[-1],"people":[-1],"on_call_times":["1+2","0"],"exigency":0,"disable":false},{"method":"at_most","param":2,"counter":3,"slots":[-1],"people":[-1],"on_call_times":["3"],"exigency":0,"disable":false}],"rulesBySlot":[{"method":"exact","param":2,"counter":-1,"slots":[0,1,2,3,4,5,6],"people":[-1],"on_call_times":["1","2"],"exigency":0,"disable":false},{"method":"exact","param":1,"counter":-1,"slots":[0,1,2,3,4,5,6],"people":[-1],"exigency":0,"on_call_times":["4"],"disable":false},{"method":"at_least","param":5,"counter":-1,"slots":[0,1,2,3,4,5,6],"people":[-1],"exigency":0,"on_call_times":["3"],"disable":false},{"method":"at_most","param":6,"counter":-1,"slots":[0,1,2,3,4,5,6],"people":[-1],"exigency":0,"on_call_times":["3"],"disable":false},{"method":"exact","param":4,"counter":-1,"slots":[7],"people":[-1],"exigency":0,"on_call_times":["6"],"disable":false},{"method":"at_least","param":1,"counter":-1,"slots":[7,8],"people":[-1],"on_call_times":["5"],"exigency":0,"disable":false},{"method":"exact","param":0,"counter":-1,"slots":[7,8],"people":[-1],"on_call_times":["0"],"exigency":0,"disable":false}],"slots":[{"key":0,"text":"18h20"},{"key":1,"text":"19h00"},{"key":2,"text":"19h30"},{"key":3,"text":"20h00"},{"key":4,"text":"20h30"},{"key":5,"text":"21h00"},{"key":6,"text":"21h30"},{"key":7,"text":"22h00"},{"key":8,"text":"22h30"}],"slotCount":9,"onCallTimeCount":7}')}},[[202,1,2]]]);
//# sourceMappingURL=main.5cfd4ac9.chunk.js.map