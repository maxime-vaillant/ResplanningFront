(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{201:function(e,n,t){"use strict";t.r(n);var l=t(0),o=t(40),r=t.n(o),c=(t(170),t(8)),a=t(89),s=t(214),i=t(226),u=t(218),j=t(125),p=t(224),d=t(223),b=t(37),f=t.n(b),h=t(29),x=[{method:"exact",param:2,counter:-1,slots:[-1],people:[-1],on_call_times:["0","1"],exigency:0,disable:!1},{method:"at_most",param:1,counter:-1,slots:[0,1,2,3,4,5,6,7],people:[-1],exigency:0,on_call_times:["3"],disable:!0},{method:"at_least",param:3,counter:-1,slots:[0,1,2,3,4,5,6,7],people:[-1],exigency:0,on_call_times:["2"],disable:!0},{method:"at_most",param:6,counter:-1,slots:[0,1,2,3,4,5,6,7],people:[-1],exigency:0,on_call_times:["2"],disable:!0},{method:"exact",param:0,counter:-1,slots:[0,1,2,3,4,5,6,7],people:[-1],exigency:0,on_call_times:["4","5"],disable:!0},{method:"exact",param:0,counter:-1,slots:[8,9],people:[-1],exigency:0,on_call_times:["2","6","3"],disable:!0},{method:"at_most",param:3,counter:-1,slots:[8,9],people:[-1],exigency:0,on_call_times:["5"],disable:!0}],O=[{method:"at_most",param:2,counter:-1,slots:[-1],people:[-1],on_call_times:["0","1"],exigency:0,disable:!0},{method:"at_most",param:3,counter:-1,slots:[-1],people:[-1],on_call_times:["0+1"],exigency:0,disable:!0},{method:"at_most",param:1,counter:2,slots:[-1],people:[-1],on_call_times:["0+1","6"],exigency:0,disable:!0},{method:"at_most",param:2,counter:3,slots:[-1],people:[-1],on_call_times:["2"],exigency:0,disable:!0}],m=[{key:0,text:"S\xe9cu pente",value:0},{key:1,text:"S\xe9cu escalier",value:1},{key:2,text:"Bar",value:2},{key:3,text:"Caisse",value:3},{key:4,text:"M\xe9nage",value:4},{key:5,text:"S\xe9cu trottoir",value:5},{key:6,text:"Pause",value:6}],y=[{key:0,text:"18h00"},{key:1,text:"18h30"},{key:2,text:"19h00"},{key:3,text:"19h30"},{key:4,text:"20h00"},{key:5,text:"20h30"},{key:6,text:"21h00"},{key:7,text:"21h30"},{key:8,text:"22h00"},{key:9,text:"22h30"}],g=function(){var e=Object(l.useState)({slots:y,people:[],onCallTimes:m,rulesByPerson:O,rulesBySlot:x,planning:{},callback:{error:!1,message:{status:null,statusMsg:null}},onCallTimeCount:m.length,slotCount:y.length,personCount:0,loading:!1,confirmOpen:!1}),n=Object(h.a)(e,2);return{data:n[0],setData:n[1],colors:["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown"]}},k=t(63),C=t(219),v=t(86),T=t.n(v),_=t(64),S=t.n(_),P=t(124),w=t(55),B=t(128),E=t.n(B),A=function(e,n){e.slots=[].concat(Object(w.a)(e.slots),[{key:e.slotCount,text:"00h00"}]),e.people.forEach((function(n){var t=n.key;return e.planning[t][e.slotCount]=null})),e.slotCount+=1,n(Object(c.a)({},e))},D=function(e,n){e.people=[].concat(Object(w.a)(e.people),[{key:e.personCount,text:"Personne"}]),e.planning[e.personCount]={},e.slots.forEach((function(n){e.planning[e.personCount][n.key]=null})),e.personCount+=1,n(Object(c.a)({},e))},R=function(e,n,t){e.slots=e.slots.filter((function(e){return e.key!==t})),e.people.forEach((function(n){return delete e.planning[n.key][t]})),e.rulesBySlot.forEach((function(e){return e.slots=e.slots.filter((function(e){return e!==t}))})),e.rulesByPerson.forEach((function(e){return e.people=e.people.filter((function(e){return e!==t}))})),n(Object(c.a)({},e))},I=function(e,n,t){e.people=e.people.filter((function(e){return e.key!==t})),delete e.planning[t],e.rulesBySlot.forEach((function(e){return e.slots=e.slots.filter((function(e){return e!==t}))})),e.rulesByPerson.forEach((function(e){return e.people=e.people.filter((function(e){return e!==t}))})),n(Object(c.a)({},e))},N=function(e,n){e.people.forEach((function(t){var l=t.key;I(e,n,l)}))},M=function(e,n,t){e.onCallTimes=e.onCallTimes.filter((function(e){return e.key!==t})),e.people.forEach((function(n){e.slots.forEach((function(l){l.key in e.planning[n.key]&&e.planning[n.key][l.key]===t&&(e.planning[n.key][l.key]=null)}))})),n(Object(c.a)({},e))},F=function(e,n){e.onCallTimes.forEach((function(t){var l=t.key;M(e,n,l)}))},J=function(e,n){e.slots.forEach((function(t){var l=t.key;R(e,n,l)}))},L=function(e,n,t){var l=null;if(t in e.planning[n]&&(l=e.planning[n][t]),null!==l){var o=e.onCallTimes.find((function(e){return e.key===l}));if(o)return o.value}return null},H=function(e){var n=[["Personnes"]];return e.slots.forEach((function(e){n[0].push(e.text)})),e.people.forEach((function(t){var l=[e.people.find((function(e){return e.key===t.key})).text];e.slots.forEach((function(n){var o=null;n.key in e.planning[t.key]&&(o=e.planning[t.key][n.key]),l.push(null!==o?e.onCallTimes.find((function(e){return e.key===o})).text:null)})),n.push(l)})),n},z=function(e){var n=[];return e.forEach((function(e){return n.push(e.key)})),n},V=function(){var e=Object(P.a)(S.a.mark((function e(n,t,l,o,r){var a,s,i,u,j,p;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===l){e.next=13;break}return a="{}",e.next=4,new Promise((function(e){var n=new FileReader;n.onload=function(){a=n.result,e()},n.readAsText(l)}));case 4:s=JSON.parse(a),i=s.onCallTimes,u=s.rulesByPerson,j=s.rulesBySlot,p=s.onCallTimeCount,F(n,t),n.onCallTimes=i,n.rulesBySlot=j,n.rulesByPerson=u,n.onCallTimeCount=p,t(Object(c.a)({},n)),o(null);case 13:r(!1);case 14:case"end":return e.stop()}}),e)})));return function(n,t,l,o,r){return e.apply(this,arguments)}}(),G=function(){var e=Object(P.a)(S.a.mark((function e(n,t,l,o,r){var a,s;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.loading=!0,t(Object(c.a)({},n)),null===l){e.next=8;break}return(a=new FormData).append("file",l),s={method:"POST",url:"http://localhost:8000/parse-csv/",data:a},e.next=8,E()(s).then((function(e){N(n,t),J(n,t),n.people=JSON.parse(JSON.stringify(e.data.people)),n.slots=JSON.parse(JSON.stringify(e.data.slots)),n.personCount=n.people.length,n.slotCount=n.slots.length,n.planning=JSON.parse(JSON.stringify(e.data.planning))})).catch((function(e){console.log(e)}));case 8:o(null),r(!1),n.loading=!1,t(Object(c.a)({},n));case 12:case"end":return e.stop()}}),e)})));return function(n,t,l,o,r){return e.apply(this,arguments)}}(),U=function(){var e=Object(P.a)(S.a.mark((function e(n,t){var l,o;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.loading=!0,t(Object(c.a)({},n)),l=JSON.stringify({planning:n.planning,on_call_times:z(n.onCallTimes),slots:z(n.slots),people:z(n.people),rules_by_person:n.rulesByPerson,rules_by_slot:n.rulesBySlot}),o={method:"POST",url:"https://resplanning-back.herokuapp.com/generate/",headers:{"Content-Type":"application/json"},data:l},e.next=6,E()(o).then((function(e){n.planning=JSON.parse(JSON.stringify(e.data.planning)),n.loading=!1,t(Object(c.a)({},n)),console.log(n.planning)})).catch((function(e){n.callback.error=!0,n.callback.message={status:e.response.status,statusMsg:e.response.statusText},n.loading=!1,t(Object(c.a)({},n))}));case 6:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),q=t(1),W=function(e){var n=e.data,t=e.setData,l=g().colors;return Object(q.jsxs)(q.Fragment,{children:[n.onCallTimes.map((function(e){return Object(q.jsxs)(a.a,{color:l[e.key%l.length],horizontal:!0,style:{marginTop:"1vh"},children:[Object(q.jsx)(k.a,{name:"remove",style:{cursor:"pointer"},onClick:function(){return M(n,t,e.key)}}),Object(q.jsx)(T.a,{initialValue:e.text,save:function(l){return function(e,n,t,l){e.onCallTimes.find((function(e){return e.key===l})).text=t,n(Object(c.a)({},e))}(n,t,l,e.key)}})]},e.key)})),Object(q.jsx)(C.a,{content:"Ajouter une permanence",inverted:!0,basic:!0,trigger:Object(q.jsx)(k.a,{color:"green",name:"add",style:{cursor:"pointer"},onClick:function(){return function(e,n){e.onCallTimes=[].concat(Object(w.a)(e.onCallTimes),[{key:e.onCallTimeCount,text:"Perm",value:e.onCallTimeCount}]),e.onCallTimeCount+=1,n(Object(c.a)({},e))}(n,t)}})})]})},K=t(222),Q=t(131),X=function(e){var n=e.data,t=e.setData;return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsxs)(K.a,{celled:!0,padded:!0,color:"green",children:[Object(q.jsx)(K.a.Header,{children:Object(q.jsxs)(K.a.Row,{textAlign:"center",children:[Object(q.jsx)(K.a.HeaderCell,{singleLine:!0,width:4,children:"Personnes"}),n.slots.map((function(e){return Object(q.jsxs)(K.a.HeaderCell,{singleLine:!0,children:[Object(q.jsx)(k.a,{color:"red",name:"remove",style:{cursor:"pointer"},onClick:function(){return R(n,t,e.key)}}),Object(q.jsx)(T.a,{initialValue:e.text,save:function(l){return function(e,n,t,l){e.slots.find((function(e){return e.key===l})).text=t,n(Object(c.a)({},e))}(n,t,l,e.key)}})]},e.key)})),Object(q.jsx)(K.a.Cell,{children:Object(q.jsx)(Q.a,{circular:!0,color:"green",icon:"add",onClick:function(){return A(n,t)}})}),Object(q.jsx)(K.a.Cell,{children:Object(q.jsx)(Q.a,{color:"green",onClick:function(){return A(n,t)},children:"Ins\xe9rer"})})]})}),Object(q.jsx)(K.a.Body,{children:n.people.map((function(e){return Object(q.jsxs)(K.a.Row,{children:[Object(q.jsxs)(K.a.Cell,{singleLine:!0,textAlign:"center",children:[Object(q.jsx)(k.a,{color:"red",name:"remove",style:{cursor:"pointer"},onClick:function(){return I(n,t,e.key)}}),Object(q.jsx)(T.a,{initialValue:e.text,save:function(l){return function(e,n,t,l){e.people.find((function(e){return e.key===l})).text=t.normalize("NFD").replace(/[\u0300-\u036f]/g,""),n(Object(c.a)({},e))}(n,t,l,e.key)}})]}),n.slots.map((function(l){return Object(q.jsx)(K.a.Cell,{selectable:!0,positive:l.key in n.planning[e.key],negative:!(l.key in n.planning[e.key]),onClick:function(){!function(e,n,t,l){l in e.planning[t]?delete e.planning[t][l]:e.planning[t][l]=null,n(Object(c.a)({},e))}(n,t,e.key,l.key)}},e+l+e.key+l.key)}))]},e.key)}))})]}),Object(q.jsx)(Q.a,{color:"green",onClick:function(){D(n,t)},children:"Ajouter une personne"})]})},Y=t(220),Z=function(e){var n=e.data,t=e.setData,l=g().colors;return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)("b",{children:"Pense \xe0 vider le planning si tu veux en g\xe9n\xe9rer un nouveau"}),Object(q.jsxs)(K.a,{celled:!0,padded:!0,color:"green",children:[Object(q.jsx)(K.a.Header,{children:Object(q.jsxs)(K.a.Row,{textAlign:"center",children:[Object(q.jsx)(K.a.HeaderCell,{singleLine:!0,width:4,children:"Personnes"}),n.slots.map((function(e){return Object(q.jsxs)(K.a.HeaderCell,{singleLine:!0,children:[Object(q.jsx)(k.a,{color:"red",name:"remove",style:{cursor:"pointer"},onClick:function(){return R(n,t,e.key)}}),e.text]},e.key)})),Object(q.jsx)(K.a.Cell,{children:Object(q.jsx)(Q.a,{circular:!0,color:"green",icon:"add",onClick:function(){return A(n,t)}})})]})}),Object(q.jsx)(K.a.Body,{children:n.people.map((function(e){return Object(q.jsxs)(K.a.Row,{children:[Object(q.jsxs)(K.a.Cell,{singleLine:!0,textAlign:"center",children:[Object(q.jsx)(k.a,{color:"red",name:"remove",style:{cursor:"pointer"},onClick:function(){return I(n,t,e.key)}}),e.text]}),n.slots.map((function(o){return Object(q.jsx)(K.a.Cell,{singleLine:!0,children:o.key in n.planning[e.key]?Object(q.jsx)(Q.a.Group,{color:null!==L(n,e.key,o.key)?l[L(n,e.key,o.key)%l.length]:null,children:Object(q.jsx)(Y.a,{clearable:!0,className:"button",placeholder:"Perm",fluid:!0,value:L(n,e.key,o.key),options:n.onCallTimes,onChange:function(l,r){!function(e,n,t,l,o){e.planning[l][o]=""!==t?e.onCallTimes.find((function(e){return e.value===t})).key:null,n(Object(c.a)({},e))}(n,t,r.value,e.key,o.key)},selection:!0,style:{width:"100%"}})}):null},e+o+e.key+o.key)}))]},e.key)}))})]}),Object(q.jsx)(Q.a,{color:"green",onClick:function(){D(n,t)},children:"Ajouter une personne"}),Object(q.jsx)(Q.a,{color:"red",onClick:function(){return function(e,n){e.people.forEach((function(n){e.slots.forEach((function(t){t.key in e.planning[n.key]&&(e.planning[n.key][t.key]=null)}))})),n(Object(c.a)({},e))}(n,t)},children:"Vider"})]})},$=t(229),ee=t(227),ne=t(215),te=t(216),le=function(e,n,t){var o=e.onCallTimes,r=e.people,a=e.slots,s=e.rulesBySlot,i=e.rulesByPerson,u="slot"===n?s[t]:i[t],j=Object(l.useState)(u?Object(c.a)({},u):{method:"exact",param:0,counter:-1,slots:[],people:[],on_call_times:[],exigency:0,disable:!1}),p=Object(h.a)(j,2),d=p[0],b=p[1],f=-1!==d.people[0]?[{key:-1,text:"Tout le monde",value:-1}].concat(r.filter((function(e){var n=e.key;return!d.people.includes(n)}))):[],x=-1!==d.slots[0]?[{key:-1,text:"Tous les cr\xe9neaux",value:-1}].concat(a.filter((function(e){var n=e.key;return!d.slots.includes(n)}))):[],O=Object(l.useState)({onCallTimesChoice:o.filter((function(e){var n=e.key;return!d.on_call_times.includes(String(n))})),peopleChoice:f,slotsChoice:x}),m=Object(h.a)(O,2),y=m[0],g=m[1];return{rule:d,setRule:b,formData:y,setFormData:g}},oe=function(e,n){e.isOpen=!1,n(Object(c.a)({},e))},re=function(e){var n=e.modalSettings,t=e.setModalSettings,l=e.ruleName,o=e.ruleId,r=e.data,i=e.setData,u=le(r,l,o),j=u.rule,p=u.setRule,d=u.formData,b=u.setFormData,f=r.onCallTimes,h=r.people,x=r.slots,O=d.onCallTimesChoice,m=d.peopleChoice,y=d.slotsChoice,C=j.on_call_times,v=j.people,T=j.slots,_=g().colors;return Object(q.jsxs)(s.a,{children:[Object(q.jsxs)(ee.a,{children:[Object(q.jsxs)(ee.a.Row,{columns:4,children:[Object(q.jsx)(ee.a.Column,{children:Object(q.jsx)("h3",{children:"M\xe9thode :"})}),Object(q.jsx)(ee.a.Column,{children:Object(q.jsx)(Y.a,{clearable:"exact"!==j.method,value:j.method,selection:!0,onChange:function(e,n){return function(e,n,t){e.method=t||"exact",n(Object(c.a)({},e))}(j,p,n.value)},options:[{key:"exact",value:"exact",text:"Exactement"},{key:"at_least",value:"at_least",text:"Au moins"},{key:"at_most",value:"at_most",text:"Au plus"}]})}),Object(q.jsx)(ee.a.Column,{children:Object(q.jsx)("h3",{children:"Param\xe8tre :"})}),Object(q.jsx)(ee.a.Column,{children:Object(q.jsx)(ne.a,{value:j.param,min:0,onChange:function(e,n){return function(e,n,t){e.param=parseInt(t),n(Object(c.a)({},e))}(j,p,n.value)},type:"number"})})]}),Object(q.jsxs)(ee.a.Row,{columns:2,children:[Object(q.jsx)(ee.a.Column,{children:Object(q.jsx)("h3",{children:"Permanences :"})}),Object(q.jsx)(ee.a.Column,{children:C.map((function(e){return Object(q.jsxs)(a.a,{color:_[e%_.length],style:{marginTop:"0.5vh"},children:[Object(q.jsx)(k.a,{name:"remove",style:{cursor:"pointer"},onClick:function(){return function(e,n,t,l,o,r){e.on_call_times=e.on_call_times.filter((function(e){return e!==r})),t.onCallTimesChoice=o.onCallTimes.filter((function(n){var t=n.key;return!e.on_call_times.includes(String(t))})),n(Object(c.a)({},e)),l(Object(c.a)({},t))}(j,p,d,b,r,e)}}),f.find((function(n){return n.key===parseInt(e)})).text]},e)}))})]}),Object(q.jsx)(ee.a.Row,{children:O.map((function(e){var n=e.key,t=e.text;return Object(q.jsx)(a.a,{horizontal:!0,color:_[n%_.length],style:{cursor:"pointer",marginTop:"0.5vh"},onClick:function(){return function(e,n,t,l,o){e.on_call_times=[].concat(Object(w.a)(e.on_call_times),[String(o)]).sort(),t.onCallTimesChoice=t.onCallTimesChoice.filter((function(e){return e.key!==o})),n(Object(c.a)({},e)),l(Object(c.a)({},t))}(j,p,d,b,n)},children:t},n)}))}),Object(q.jsxs)(ee.a.Row,{columns:2,children:[Object(q.jsx)(ee.a.Column,{children:Object(q.jsx)("h3",{children:"Cr\xe9neaux :"})}),Object(q.jsx)(ee.a.Column,{children:T.map((function(e){return Object(q.jsxs)(a.a,{horizontal:!0,color:-1===e?"purple":_[e%_.length],style:{marginTop:"0.5vh"},children:[Object(q.jsx)(k.a,{name:"remove",style:{cursor:"pointer"},onClick:function(){return function(e,n,t,l,o,r){e.slots=e.slots.filter((function(e){return e!==r})),t.slotsChoice=[{key:-1,text:"Tous les cr\xe9neaux",value:-1}].concat(o.filter((function(n){var t=n.key;return!e.slots.includes(t)}))),n(Object(c.a)({},e)),l(Object(c.a)({},t))}(j,p,d,b,x,e)}}),-1===e?"Tous les cr\xe9neaux":x.find((function(n){return n.key===e})).text]},e)}))})]}),Object(q.jsx)(ee.a.Row,{children:y.map((function(e){var n=e.key,t=e.text;return Object(q.jsx)(a.a,{color:-1===n?"purple":_[n%_.length],style:{cursor:"pointer",marginTop:"0.5vh"},onClick:function(){return function(e,n,t,l,o){e.slots=-1===o?[o]:[].concat(Object(w.a)(e.slots),[o]).sort((function(e,n){return e.key-n.key})),t.slotsChoice=-1===o?[]:t.slotsChoice.filter((function(e){return e.key!==o})),n(Object(c.a)({},e)),l(Object(c.a)({},t))}(j,p,d,b,n)},children:t},n)}))}),Object(q.jsxs)(ee.a.Row,{columns:2,children:[Object(q.jsx)(ee.a.Column,{children:Object(q.jsx)("h3",{children:"Personnes :"})}),Object(q.jsx)(ee.a.Column,{children:v.map((function(e){return Object(q.jsxs)(a.a,{horizontal:!0,color:-1===e?"teal":_[e%_.length],style:{marginTop:"0.5vh"},children:[Object(q.jsx)(k.a,{name:"remove",style:{cursor:"pointer"},onClick:function(){return function(e,n,t,l,o,r){e.people=e.people.filter((function(e){return e!==r})),t.peopleChoice=[{key:-1,text:"Tout le monde",value:-1}].concat(o.filter((function(n){var t=n.key;return!e.people.includes(t)}))),n(Object(c.a)({},e)),l(Object(c.a)({},t))}(j,p,d,b,h,e)}}),-1===e?"Tout le monde":h.find((function(n){return n.key===e})).text]},e)}))})]}),Object(q.jsx)(ee.a.Row,{children:m.map((function(e){var n=e.key,t=e.text;return Object(q.jsx)(a.a,{color:-1===n?"teal":_[n%_.length],style:{cursor:"pointer",marginTop:"0.5vh"},onClick:function(){return function(e,n,t,l,o){e.people=-1===o?[o]:[].concat(Object(w.a)(e.people),[o]).sort((function(e,n){return e.key-n.key})),t.peopleChoice=-1===o?[]:t.peopleChoice.filter((function(e){return e.key!==o})),n(Object(c.a)({},e)),l(Object(c.a)({},t))}(j,p,d,b,n)},children:t},n)}))}),"person"===l&&Object(q.jsxs)(ee.a.Row,{columns:4,children:[Object(q.jsx)(ee.a.Column,{children:Object(q.jsx)("h3",{children:"Lot :"})}),Object(q.jsx)(ee.a.Column,{children:Object(q.jsx)(ne.a,{value:j.counter,min:-1,onChange:function(e,n){return function(e,n,t){e.counter=parseInt(t),n(Object(c.a)({},e))}(j,p,n.value)},type:"number"})})]})]}),Object(q.jsx)(te.a,{}),Object(q.jsx)(Q.a,{negative:!0,onClick:function(){return oe(n,t)},children:"Annuler"}),Object(q.jsx)(Q.a,{positive:!0,onClick:function(){return function(e,n,t,l,o,r,a){var s=r.rulesBySlot,i=r.rulesByPerson,u="slot"===l?s:i;u[o]?u[o]=t:u.push(t),a(Object(c.a)({},r)),e.isOpen=!1,n(Object(c.a)({},e))}(n,t,j,l,o,r,i)},children:"Sauvegarder"})]})},ce=function(){var e=Object(l.useState)({isOpen:!1,ruleId:null}),n=Object(h.a)(e,2);return{modalSettings:n[0],setModalSettings:n[1]}},ae=function(e){var n=e.name,t=e.data,l=e.setData,o=g().colors,r="slot"===n?t.rulesBySlot:t.rulesByPerson,s=ce(),i=s.modalSettings,u=s.setModalSettings,p="person"===n?["","","M\xe9thode","Param\xe8tre","Permanences","Cr\xe9neaux","Personnes","Lot","Exigence","Actif"]:["","","M\xe9thode","Param\xe8tre","Permanences","Cr\xe9neaux","Personnes","Exigence","Actif"];return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsxs)(j.a,{open:i.isOpen,onClose:function(){return oe(i,u)},children:[Object(q.jsxs)(j.a.Header,{children:["R\xe8gle par ","slot"===n?"cr\xe9neau":"personne"]}),Object(q.jsx)(j.a.Content,{children:Object(q.jsx)(re,{modalSettings:i,setModalSettings:u,ruleId:i.ruleId,ruleName:n,data:t,setData:l})})]}),Object(q.jsxs)(K.a,{celled:!0,padded:!0,color:"blue",children:[Object(q.jsx)(K.a.Header,{children:Object(q.jsx)(K.a.Row,{children:p.map((function(e,n){return Object(q.jsx)(K.a.HeaderCell,{children:e},n)}))})}),Object(q.jsx)(K.a.Body,{children:r.map((function(e,r){return Object(q.jsxs)(K.a.Row,{children:[Object(q.jsx)(K.a.Cell,{style:{textAlign:"center"},children:Object(q.jsx)(k.a,{color:"red",name:"remove",style:{cursor:"pointer"},onClick:function(){return function(e,n,t,l){"slot"===e?n.rulesBySlot=n.rulesBySlot.filter((function(e,n){return n!==l})):"person"===e&&(n.rulesByPerson=n.rulesByPerson.filter((function(e,n){return n!==l}))),t(Object(c.a)({},n))}(n,t,l,r)}})}),Object(q.jsx)(K.a.Cell,{style:{textAlign:"center"},children:Object(q.jsx)(k.a,{color:"blue",name:"edit",style:{cursor:"pointer"},onClick:function(){return function(e,n,t){e.isOpen=!0,e.ruleId=t,n(Object(c.a)({},e))}(i,u,r)}})}),Object(q.jsxs)(K.a.Cell,{children:["at_least"===e.method&&"Au moins","at_most"===e.method&&"Au plus","exact"===e.method&&"Exactement"]}),Object(q.jsx)(K.a.Cell,{style:{textAlign:"center"},children:e.param}),Object(q.jsx)(K.a.Cell,{children:e.on_call_times.map((function(e){var n=t.onCallTimes.filter((function(n){return e.split("+").map((function(e){return parseInt(e)})).includes(n.key)}));return Object(b.isEmpty)(n)?null:Object(q.jsxs)(a.a,{color:o[n.length>1?10*n.reduce((function(e,n){return e+n.key}),0)%o.length:n[0].key%o.length],horizontal:!0,style:{marginTop:"1vh"},children:[n[0].text,n.filter((function(e){return e.key!==n[0].key})).map((function(e){return" + "+e.text}))]},e)}))}),Object(q.jsx)(K.a.Cell,{children:e.slots.map((function(e){var n;return Object(q.jsx)(a.a,{color:-1===e?"purple":o[e%o.length],style:{marginTop:"1vh"},children:-1===e?"Tous les cr\xe9neaux":null===(n=t.slots.find((function(n){return n.key===e})))||void 0===n?void 0:n.text},e)}))}),Object(q.jsx)(K.a.Cell,{children:e.people.map((function(e){return Object(q.jsx)(a.a,{color:-1===e?"teal":o[e%o.length],style:{marginTop:"1vh"},children:-1===e?"Tout le monde":t.people.find((function(n){return n.key===e})).text},e)}))}),"person"===n&&Object(q.jsx)(K.a.Cell,{style:{textAlign:"center"},children:(-1!==e.counter||Object(b.isEmpty)(e.people)||-1!==e.people[0]?-1===e.counter&&!Object(b.isEmpty)(e.people)&&-1!==e.people[0]&&e.people.length:"Tous")||-1===e.counter&&Object(b.isEmpty)(e.people)&&0||-1!==e.counter&&e.counter}),Object(q.jsx)(K.a.Cell,{style:{textAlign:"center"},children:Object(q.jsx)(a.a,{circular:!0,color:"red",children:e.exigency})}),Object(q.jsx)(K.a.Cell,{style:{textAlign:"center"},children:Object(q.jsx)($.a,{toggle:!0,checked:!e.disable,onChange:function(){e.disable=!e.disable,l(Object(c.a)({},t))}})})]},e+r)}))})]}),Object(q.jsx)(Q.a,{positive:!0,onClick:function(){return function(e,n){e.isOpen=!0,e.ruleId=null,n(Object(c.a)({},e))}(i,u)},children:"Ajouter une r\xe8gle"})]})},se=function(e){var n=e.data,t=e.setData,l=[{title:"R\xe8gles par cr\xe9neau",content:Object(q.jsx)(ae,{name:"slot",data:n,setData:t})},{title:"R\xe8gles par personne",content:Object(q.jsx)(ae,{name:"person",data:n,setData:t})}],o=f.a.times(l.length,(function(e){return{key:"panel-".concat(e),title:{content:Object(q.jsx)(a.a,{color:"black",content:l[e].title})},content:{content:l[e].content}}}));return Object(q.jsx)(s.a,{children:Object(q.jsx)(d.a,{exclusive:!1,panels:o})})},ie=t(221),ue=t(217),je=t(154),pe=t(130),de=function(e){var n=e.data,t=e.setData,o=Object(l.useState)(!1),r=Object(h.a)(o,2),i=r[0],u=r[1],p=Object(l.useState)(!1),d=Object(h.a)(p,2),b=d[0],f=d[1],x=Object(l.useState)(null),O=Object(h.a)(x,2),m=O[0],y=O[1],g=Object(l.useState)(null),C=Object(h.a)(g,2),v=C[0],T=C[1];return Object(q.jsx)(ie.a,{className:"ui fixed inverted menu",children:Object(q.jsxs)(s.a,{children:[Object(q.jsx)(ie.a.Item,{header:!0,children:"Resplanning"}),Object(q.jsx)(ie.a.Item,{onClick:function(){return U(Object(c.a)({},n),t)},children:Object(q.jsx)(Q.a,{color:"teal",children:"G\xe9n\xe9ration Planning"})}),Object(q.jsxs)(ie.a.Menu,{position:"right",children:[Object(q.jsxs)(ie.a.Item,{children:[Object(q.jsx)(Q.a,{color:"orange",onClick:function(){return f(!0)},children:"Options R\xe8gles"}),Object(q.jsxs)(j.a,{open:b,onClose:function(){return f(!1)},children:[Object(q.jsx)(j.a.Content,{children:Object(q.jsx)(a.a,{color:"olive",onClick:function(){return Object(pe.a)({data:{onCallTimes:n.onCallTimes,rulesByPerson:n.rulesByPerson,rulesBySlot:n.rulesBySlot,onCallTimesCount:n.onCallTimesCount,slots:n.slots,slotCount:n.slotCount},fileName:"resplanning-config",exportType:pe.a.types.json})},style:{cursor:"pointer"},children:"Exporter"})}),Object(q.jsxs)(j.a.Actions,{children:[Object(q.jsx)(Q.a,{color:"red",onClick:function(){return f(!1)},children:"Annuler"}),Object(q.jsx)(Q.a,{color:"green",onClick:function(){return V(n,t,m,y,f)},children:"Valider"})]})]})]}),Object(q.jsxs)(ie.a.Item,{children:[Object(q.jsx)(Q.a,{color:"violet",onClick:function(){return u(!0)},children:"Importation Frama"}),Object(q.jsxs)(j.a,{open:i,onClose:function(){T(null),u(!1)},children:[Object(q.jsxs)(j.a.Content,{style:{textAlign:"center"},children:[Object(q.jsx)("label",{htmlFor:"file",style:{cursor:"pointer",fontWeight:"bold",marginRight:"0.5vw"},children:Object(q.jsx)(a.a,{color:"violet",children:"Upload un fichier"})}),Object(q.jsx)(ne.a,{id:"file",type:"file",accept:".csv",onChange:function(e){return T(e.target.files[0])},style:{display:"none"}}),v?Object(q.jsx)(k.a,{color:"green",name:"circle"}):Object(q.jsx)(k.a,{color:"red",name:"circle outline"})]}),Object(q.jsxs)(j.a.Actions,{children:[Object(q.jsx)(Q.a,{color:"red",onClick:function(){T(null),u(!1)},children:"Annuler"}),Object(q.jsx)(Q.a,{color:"green",onClick:function(){return G(n,t,v,T,u)},children:"Valider"})]})]})]}),Object(q.jsx)(ie.a.Item,{children:Object(q.jsx)(je.CSVLink,{data:H(n),filename:"planning.csv",children:Object(q.jsx)(Q.a,{color:"brown",children:"Exportation Planning"})})}),Object(q.jsxs)(ie.a.Item,{children:[Object(q.jsx)(Q.a,{onClick:function(){return function(e,n){e.confirmOpen=!0,n(Object(c.a)({},e))}(n,t)},color:"red",children:"Remise \xe0 z\xe9ro"}),Object(q.jsx)(ue.a,{open:n.confirmOpen,content:"Es-tu s\xfbr.e de vouloir remettre \xe0 z\xe9ro TOUTES les donn\xe9es de la page (permanences, r\xe8gles, personnes...) ?",onCancel:function(){return function(e,n){e.confirmOpen=!1,n(Object(c.a)({},e))}(n,t)},onConfirm:function(){return function(e,n){e={slots:[],people:[],onCallTimes:[],rulesByPerson:[],rulesBySlot:[],planning:{},callback:{error:!1,message:{status:null,statusMsg:null}},onCallTimeCount:0,slotCount:0,personCount:0,loading:!1,confirmOpen:!1},n(Object(c.a)({},e))}(n,t)}})]})]})]})})};var be=function(){var e=g(),n=e.data,t=e.setData,l=[{title:"Permanences",content:Object(q.jsx)(W,{data:n,setData:t})},{title:"R\xe8gles",content:Object(q.jsx)(se,{data:n,setData:t})},{title:"Disponibilit\xe9s",content:Object(q.jsx)(X,{data:n,setData:t})},{title:"Planning",content:Object(q.jsx)(Z,{data:n,setData:t})}],o=f.a.times(l.length,(function(e){return{key:"panel-".concat(e),title:{content:Object(q.jsx)(a.a,{basic:!0,color:"black",size:"massive",content:l[e].title})},content:{content:l[e].content}}}));return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(de,{data:n,setData:t}),Object(q.jsxs)(s.a,{fluid:!0,style:{paddingLeft:"3vw",paddingTop:"10vh",overflow:"scroll",minHeight:"100vh"},children:[n.loading&&Object(q.jsx)(i.a,{active:!0,page:!0,children:Object(q.jsx)(u.a,{size:"massive",children:"Loading"})}),Object(q.jsx)(j.a,{basic:!0,open:n.callback.error,onClose:function(){n.callback.error=!1,n.callback.message={status:null,statusMsg:null},t(Object(c.a)({},n))},children:Object(q.jsxs)(p.a,{negative:!0,children:[Object(q.jsxs)(p.a.Header,{children:[404===n.callback.message.status&&"Mod\xe8le introuvable",400===n.callback.message.status&&"Donn\xe9es invalides",409===n.callback.message.status&&"Erreur avec le solveur",500===n.callback.message.status&&"Erreur syst\xe8me"]}),Object(q.jsxs)(p.a.Content,{children:[404===n.callback.message.status&&"Trop de contraintes li\xe9es aux r\xe8gles ou manque de personnes",500===n.callback.message.status&&"Contactes le dev"]})]})}),Object(q.jsx)(d.a,{panels:o,exclusive:!1,fluid:!0})]})]})};r.a.render(Object(q.jsx)(be,{}),document.getElementById("root"))}},[[201,1,2]]]);
//# sourceMappingURL=main.4a65ba71.chunk.js.map