"use strict";(self.webpackChunkacellus=self.webpackChunkacellus||[]).push([[3708,4531],{42888:function(e,r,t){t.d(r,{Z:function(){return U}});var n=t(29439),a=t(43681),o=t(1413),i=t(44925),s=t(47313),l=t(36497),u=t(6971),c=t(83352),d=t(6698),p=t(93433),f=t(20200),h=t(21267),m=t(71464),v=["id","passive"],g=(0,s.createContext)(null);function E(){var e=(0,s.useContext)(g);if(null===e){var r=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(r,E),r}return e}function x(){var e=(0,s.useState)([]),r=(0,n.Z)(e,2),t=r[0],a=r[1];return[t.length>0?t.join(" "):void 0,(0,s.useMemo)((function(){return function(e){var r=(0,m.z)((function(e){return a((function(r){return[].concat((0,p.Z)(r),[e])})),function(){return a((function(r){var t=r.slice(),n=t.indexOf(e);return-1!==n&&t.splice(n,1),t}))}})),t=(0,s.useMemo)((function(){return{register:r,slot:e.slot,name:e.name,props:e.props}}),[r,e.slot,e.name,e.props]);return s.createElement(g.Provider,{value:t},e.children)}}),[a])]}var Z=(0,l.yV)((function(e,r){var t=(0,u.M)(),n=e.id,a=void 0===n?"headlessui-label-".concat(t):n,s=e.passive,c=void 0!==s&&s,d=(0,i.Z)(e,v),p=E(),m=(0,h.T)(r);(0,f.e)((function(){return p.register(a)}),[a,p.register]);var g=(0,o.Z)((0,o.Z)({ref:m},p.props),{},{id:a});return c&&("onClick"in g&&(delete g.htmlFor,delete g.onClick),"onClick"in d&&delete d.onClick),(0,l.sY)({ourProps:g,theirProps:d,slot:p.slot||{},defaultTag:"label",name:p.name||"Label"})})),w=Object.assign(Z,{}),T=["id"],b=(0,s.createContext)(null);function S(){var e=(0,s.useContext)(b);if(null===e){var r=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(r,S),r}return e}var y=(0,l.yV)((function(e,r){var t=(0,u.M)(),n=e.id,a=void 0===n?"headlessui-description-".concat(t):n,s=(0,i.Z)(e,T),c=S(),d=(0,h.T)(r);(0,f.e)((function(){return c.register(a)}),[a,c.register]);var p=(0,o.Z)((0,o.Z)({ref:d},c.props),{},{id:a});return(0,l.sY)({ourProps:p,theirProps:s,slot:c.slot||{},defaultTag:"p",name:c.name||"Description"})})),C=Object.assign(y,{}),D=t(54527),j=t(32224),k=t(40375),_=t(44186),R=t(5218),G=["id","checked","defaultChecked","onChange","name","value","form"],L=(0,s.createContext)(null);L.displayName="GroupContext";var A=s.Fragment;var N=(0,l.yV)((function(e,r){var t=(0,u.M)(),a=e.id,p=void 0===a?"headlessui-switch-".concat(t):a,f=e.checked,v=e.defaultChecked,g=void 0!==v&&v,E=e.onChange,x=e.name,Z=e.value,w=e.form,T=(0,i.Z)(e,G),b=(0,s.useContext)(L),S=(0,s.useRef)(null),y=(0,h.T)(S,r,null===b?null:b.setSwitch),C=(0,_.q)(f,E,g),A=(0,n.Z)(C,2),N=A[0],I=A[1],P=(0,m.z)((function(){return null==I?void 0:I(!N)})),O=(0,m.z)((function(e){if((0,d.P)(e.currentTarget))return e.preventDefault();e.preventDefault(),P()})),U=(0,m.z)((function(e){e.key===c.R.Space?(e.preventDefault(),P()):e.key===c.R.Enter&&(0,k.g)(e.currentTarget)})),M=(0,m.z)((function(e){return e.preventDefault()})),V=(0,s.useMemo)((function(){return{checked:N}}),[N]),F={id:p,ref:y,role:"switch",type:(0,D.f)(e,S),tabIndex:0,"aria-checked":N,"aria-labelledby":null==b?void 0:b.labelledby,"aria-describedby":null==b?void 0:b.describedby,onClick:O,onKeyUp:U,onKeyPress:M},z=(0,R.G)();return(0,s.useEffect)((function(){var e,r=null==(e=S.current)?void 0:e.closest("form");r&&void 0!==g&&z.addEventListener(r,"reset",(function(){I(g)}))}),[S,I]),s.createElement(s.Fragment,null,null!=x&&N&&s.createElement(j._,(0,o.Z)({features:j.A.Hidden},(0,l.oA)({as:"input",type:"checkbox",hidden:!0,readOnly:!0,form:w,checked:N,name:x,value:Z}))),(0,l.sY)({ourProps:F,theirProps:T,slot:V,defaultTag:"button",name:"Switch"}))})),I=function(e){var r,t=(0,s.useState)(null),a=(0,n.Z)(t,2),o=a[0],i=a[1],u=x(),c=(0,n.Z)(u,2),d=c[0],f=c[1],h=function(){var e=(0,s.useState)([]),r=(0,n.Z)(e,2),t=r[0],a=r[1];return[t.length>0?t.join(" "):void 0,(0,s.useMemo)((function(){return function(e){var r=(0,m.z)((function(e){return a((function(r){return[].concat((0,p.Z)(r),[e])})),function(){return a((function(r){var t=r.slice(),n=t.indexOf(e);return-1!==n&&t.splice(n,1),t}))}})),t=(0,s.useMemo)((function(){return{register:r,slot:e.slot,name:e.name,props:e.props}}),[r,e.slot,e.name,e.props]);return s.createElement(b.Provider,{value:t},e.children)}}),[a])]}(),v=(0,n.Z)(h,2),g=v[0],E=v[1],Z=(0,s.useMemo)((function(){return{switch:o,setSwitch:i,labelledby:d,describedby:g}}),[o,i,d,g]),w=e;return s.createElement(E,{name:"Switch.Description"},s.createElement(f,{name:"Switch.Label",props:{htmlFor:null==(r=Z.switch)?void 0:r.id,onClick:function(e){o&&("LABEL"===e.currentTarget.tagName&&e.preventDefault(),o.click(),o.focus({preventScroll:!0}))}}},s.createElement(L.Provider,{value:Z},(0,l.sY)({ourProps:{},theirProps:w,defaultTag:A,name:"Switch.Group"}))))},P=Object.assign(N,{Group:I,Label:w,Description:C}),O=t(46417);function U(e){var r=e.defaultChecked,t=e.name,a=e.labelText,o=e.checked,i=e.value,l=e.disabled,u=e.onChange,c=e.switchStyles,d=e.leverStyles,p=e.testId,f=(0,s.useState)(void 0!==o?o:r),h=(0,n.Z)(f,2),m=h[0],v=h[1];(0,s.useEffect)((function(){void 0!==o&&v(o)}),[o,i]);return(0,O.jsx)(P.Group,{children:(0,O.jsxs)(M,{"data-testid":p,children:[a&&(0,O.jsx)(P.Label,{children:a}),(0,O.jsx)("input",{"data-testid":"toggle-input",name:t,type:"hidden",value:m}),(0,O.jsx)(P,{defaultChecked:r,checked:m,onChange:function(e){l||(v(e),"function"===typeof u&&u(e))},value:i,as:s.Fragment,children:function(e){var r=e.checked;return(0,O.jsx)(V,{"data-testid":"toggle-button",checked:r,disabled:l,customStyles:c,children:(0,O.jsx)(F,{checked:r,disabled:l,customStyles:d})})}})]})})}var M=a.Z.div({display:"flex",alignItems:"center"}),V=a.Z.button((function(e){var r=e.checked,t=e.disabled,n=e.customStyles;return[{position:"relative",display:"inline-flex",height:"2rem",width:"3.5rem",alignItems:"center",borderRadius:"9999px"},r?{"--tw-bg-opacity":"1",backgroundColor:"rgb(55 106 215 / var(--tw-bg-opacity))"}:{"--tw-bg-opacity":"1",backgroundColor:"rgb(229 231 235 / var(--tw-bg-opacity))"},t&&{"--tw-bg-opacity":"1",backgroundColor:"rgb(156 163 175 / var(--tw-bg-opacity))"},r?null===n||void 0===n?void 0:n.checked:null===n||void 0===n?void 0:n.unChecked]})),F=a.Z.span((function(e){return[{position:"absolute",display:"inline-block",height:"1.25rem",width:"1.25rem",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",borderRadius:"9999px","--tw-bg-opacity":"1",backgroundColor:"rgb(255 255 255 / var(--tw-bg-opacity))",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms"},e.checked?{left:"calc(100% - 0.25rem)","--tw-translate-x":"-100%",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"}:{left:"0.25rem"},e.disabled&&{"--tw-bg-opacity":"1",backgroundColor:"rgb(229 231 235 / var(--tw-bg-opacity))"},e.customStyles]}))},31239:function(e,r,t){t.d(r,{A:function(){return d}});var n=t(1413),a=t(29439),o=t(47313),i=t(47292);function s(e,r){var t,a,o=r.payload,s={},l={};switch(o&&(o.error?(s=o).action=r.type:l=o),r.type){case i.cS:return(0,n.Z)((0,n.Z)({},e),{},{error:"",called:r.next,loading:!0});case i.aE:return(0,n.Z)((0,n.Z)({},e),{},{error:s,teacherDevCourses:l,loading:!1});case i.pV:return(0,n.Z)((0,n.Z)({},e),{},{error:s,settings:l,loading:!1});case i.I4:var u=e.settings;return l.contactInfo?u.contactInfo=l.contactInfo:l.features?u.features=l.features:l.grading?u.grading=l.grading:u=e.settings,(0,n.Z)((0,n.Z)({},e),{},{error:s,settings:u,loading:!1});case i.fU:return(0,n.Z)((0,n.Z)({},e),{},{error:s,mediaServers:l,loading:!1});case i.fo:return(0,n.Z)((0,n.Z)({},e),{},{error:s,users:l,usersCalled:!0,loading:!1});case i.KC:var c=e.mediaServers;return l.length?c.mediaServers=l:c=e.mediaServers,(0,n.Z)((0,n.Z)({},e),{},{error:s,mediaServers:c,loading:!1});case i.zE:return(0,n.Z)((0,n.Z)({},e),{},{error:s,enrollmentGroups:l,loading:!1});case i.nZ:var d=e.enrollmentGroups;return l.enrollmentGroupID?null===(t=d.groups)||void 0===t||t.push(l):d=e.enrollmentGroups,(0,n.Z)((0,n.Z)({},e),{},{error:s,enrollmentGroups:d,loading:!1});case i.dO:return(0,n.Z)((0,n.Z)({},e),{},{error:s,transferData:l,loading:!1});case i.ag:var p=e.enrollmentGroups;return l.enrollmentGroupID?null===(a=p.groups)||void 0===a||a.find((function(e){return e.enrollmentGroupID===l.enrollmentGroupID})).courses.push(l.course):p=e.enrollmentGroups,(0,n.Z)((0,n.Z)({},e),{},{error:s,enrollmentGroups:p,loading:!1});case i.vh:return(0,n.Z)((0,n.Z)({},e),{},{usersCalled:!1});default:throw Error("Unhandled Action: ".concat(r.type))}}var l=t(46417),u=(0,o.createContext)(),c={teacherDevCourses:{},settings:{},mediaServers:{},enrollmentGroups:{},users:{},usersCalled:!1,called:"",error:{},loading:!1,licenses:[],spreadSheet:"",transferData:{}};function d(e){var r=(0,o.useReducer)(s,c),t=(0,a.Z)(r,2),i=t[0],d=t[1];return(0,l.jsx)(u.Provider,{value:(0,n.Z)((0,n.Z)({},i),{},{dispatch:d}),children:e.children})}},47292:function(e,r,t){t.d(r,{Dn:function(){return o},Et:function(){return S},I4:function(){return T},Jw:function(){return j},KC:function(){return w},QJ:function(){return n},VQ:function(){return p},Wy:function(){return a},a9:function(){return v},aE:function(){return g},ag:function(){return C},cS:function(){return Z},dO:function(){return h},eQ:function(){return c},fU:function(){return i},fl:function(){return d},fo:function(){return E},gy:function(){return x},nZ:function(){return y},pV:function(){return l},sZ:function(){return u},uV:function(){return s},vh:function(){return D},x:function(){return b},zE:function(){return f},zk:function(){return m}});var n="GET_ANSWER_DATA",a="GET_CLASSES",o="GET_ALERTS",i="GET_MEDIA_SERVERS",s="GET_MONITOR_LIST",l="GET_SETTINGS",u="GET_STUDENT",c="GET_STUDENT_ENROLLMENT",d="GET_STUDENT_ENROLLMENT_COMP",p="GET_STUDENT_ENROLLMENT_ARCHIVED",f="GET_COURSE_ENROLLMENT",h="GET_TRANSFER_STUDENT",m="GET_STUDENT_GRADES",v="GET_STUDENT_STEPS_COMPLETED",g="GET_TEACHER_DEV_COURSES",E="GET_USERS",x="RESET_STUDENT_DATA",Z="SET_LOADING",w="UPDATE_MEDIA_SERVERS",T="UPDATE_SETTINGS",b="UPDATE_STUDENT",S="UPDATE_COURSE_ENROLLMENT",y="ADD_ENROLLMENT_GROUP",C="ADD_COURSE_TO_ENROLLMENT",D="DELETE_STUDENTS",j="DELETE_COURSE_ENROLLMENT"},16533:function(e,r,t){t.d(r,{G:function(){return o}});var n=t(47313),a=t(58467);function o(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=(0,a._Z)(r),o=(0,n.useRef)();return(0,n.useEffect)((function(){if("blocked"===t.state)return o.current=toast.confirm(e,(function(e){var r;null===t||void 0===t||null===(r=t[e?"proceed":"reset"])||void 0===r||r.call(t),o.current=void 0})),function(){return toast.close(o.current)}}),[t,e]),(0,n.useEffect)((function(){var e;"blocked"!==t.state||r||null===t||void 0===t||null===(e=t.reset)||void 0===e||e.call(t)}),[t,r]),{toastRef:o}}},44531:function(e,r,t){t.r(r),t.d(r,{SubpageWrapper:function(){return w},default:function(){return g}});var n=t(29439),a=t(43681),o=t(47313),i=t(58467),s=t(79250),l=t(70187),u=t(51083),c=t(31239),d=t(1413),p=t(47292);function f(e,r){var t=r.payload,n={},a={};switch(t&&(t.error?(n=t).action=r.type:a=t),r.type){case p.QJ:return(0,d.Z)((0,d.Z)({},e),{},{error:n,answerData:a,loading:!1});case p.Wy:return(0,d.Z)((0,d.Z)({},e),{},{error:n,classes:a,loading:!1});case p.Dn:return(0,d.Z)((0,d.Z)({},e),{},{error:n,alerts:a,loading:!1});case p.uV:return(0,d.Z)((0,d.Z)({},e),{},{error:n,monitorList:a,loading:!1});case p.sZ:return(0,d.Z)((0,d.Z)({},e),{},{error:n,student:a,loading:!1});case p.eQ:return(0,d.Z)((0,d.Z)({},e),{},{error:n,enrollmentData:a,loading:!1});case p.VQ:return(0,d.Z)((0,d.Z)({},e),{},{error:n,enrollmentArchivedData:a,loading:!1});case p.fl:return(0,d.Z)((0,d.Z)({},e),{},{error:n,enrollmentCompletedData:a,loading:!1});case p.zk:return(0,d.Z)((0,d.Z)({},e),{},{error:n,assignmentData:a,loading:!1});case p.a9:return(0,d.Z)((0,d.Z)({},e),{},{error:n,stepsCompletedData:a,loading:!1});case p.gy:return(0,d.Z)((0,d.Z)({},e),{},{assignmentData:{},answerData:{},classes:{},monitorList:{},enrollmentData:{},student:{},stepsCompletedData:{}});case p.cS:return(0,d.Z)((0,d.Z)({},e),{},{error:"",called:r.next,loading:!0});case p.x:var o=(0,d.Z)((0,d.Z)({},e.student),a);return(0,d.Z)((0,d.Z)({},e),{},{error:n,student:o,loading:!1});case p.Et:var i=e.enrollmentData;return void 0!==a.displayCourseID?i.courses.find((function(e){return e.displayCourseID===a.displayCourseID})).currentPosition=a.id:i=e.enrollmentData,(0,d.Z)((0,d.Z)({},e),{},{enrollmentData:i,loading:!1,error:n});case p.Jw:i=e.enrollmentData;return void 0!==a.displayCourseID?i.courses=i.courses.filter((function(e){return e.displayCourseID!==a.displayCourseID})):i=e.enrollmentData,(0,d.Z)((0,d.Z)({},e),{},{enrollmentData:i,loading:!1,error:n});default:throw Error("Unhandled Action: ".concat(r.type))}}var h=t(46417),m=(0,o.createContext)();function v(e){var r=(0,o.useReducer)(f,{alerts:{},answerData:{},assignmentData:{},called:"",classDetails:{},classes:{},enrollmentArchivedData:{},enrollmentCompletedData:{},enrollmentData:{},error:{},loading:!1,monitorList:{},stepsCompletedData:{},student:{}}),t=(0,n.Z)(r,2),a=t[0],i=t[1];return(0,h.jsx)(m.Provider,{value:(0,d.Z)((0,d.Z)({},a),{},{dispatch:i}),children:e.children})}function g(){return(0,h.jsx)(v,{children:(0,h.jsx)(Z,{})})}function E(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(h.Fragment,{children:"Transfer"}),(0,h.jsx)(C,{children:"\xa0Student"})]})}var x=[{name:"General",path:["","/teacher/manage-users/course-enrollment","/teacher/manage-users/add-student","/teacher/manage-users/add-teacher","/teacher/manage-users/import-students","/teacher/manage-users/year-end","/teacher/manage-users"],exact:!0},{name:(0,h.jsx)(E,{}),path:"transfer-student"},{name:"Sign In Cards",path:"sign-in-cards"},{name:"Licenses",path:"licenses"},{name:"Action Log",path:"action-log"},{name:"Archives",path:"archives"}];function Z(){var e=(0,o.useState)(""),r=(0,n.Z)(e,2),t=r[0],a=r[1];return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l.ZP,{fullWidth:!0,type:"route",navigation:x,selectedTab:t,setSelectedTab:a,textStyle:T,buttonStyles:b,barStyle:S,mobilePath:"/teacher/manage-users/"}),(0,h.jsx)(c.A,{children:(0,h.jsx)(w,{children:(0,h.jsx)(o.Suspense,{fallback:(0,h.jsx)(s.Z,{strokeStyle:y}),children:(0,h.jsx)(i.j3,{})})})})]})}var w=(0,a.Z)(u.i)({flex:"1 1 0%",paddingBottom:"var(--spacing)",paddingTop:"var(--spacing)","@media (min-width: 1024px)":{paddingTop:"2.5rem"}}),T={"--tw-text-opacity":"1",color:"rgb(55 106 215 / var(--tw-text-opacity))"},b={paddingTop:"0.5rem","@media (min-width: 768px)":{width:"9rem !important"},"@media (min-width: 1024px)":{width:"10rem !important"},"@media (min-width: 1280px)":{width:"15rem !important"},"@media (min-width: 1536px)":{width:"15rem !important"},"@media (min-width: 1750px)":{width:"16rem !important"}},S={"--tw-border-opacity":"1",borderColor:"rgb(55 106 215 / var(--tw-border-opacity))","--tw-bg-opacity":"1",backgroundColor:"rgb(55 106 215 / var(--tw-bg-opacity))","@media (min-width: 768px)":{width:"9rem"},"@media (min-width: 1024px)":{width:"10rem"},"@media (min-width: 1280px)":{width:"15rem"},"@media (min-width: 1536px)":{width:"15rem"},"@media (min-width: 1750px)":{width:"16rem"}},y={stroke:"#537EDC"},C=a.Z.span({display:"none",fontSize:"inherit",color:"inherit","@media (min-width: 1280px)":{display:"block"}})},77028:function(e,r,t){t.r(r),t.d(r,{ExamProctors:function(){return v},default:function(){return g}});var n=t(29439),a=t(43681),o=t(47313),i=t(2135),s=t(20388),l=t(58500),u=t(42888),c=t(41066),d=t(16533),p=t(81570),f=t(58229),h=t(44531),m=t(46417),v=[{value:0,name:"None"},{value:1,name:"All Exams"},{value:2,name:"Mid Term & Final Exams"}];function g(){var e,r,t,a,g=(0,c.Av)().settings,T=(0,i.useFetcher)(),b=(0,o.useState)(!1),S=(0,n.Z)(b,2),y=S[0],C=S[1],D=(0,o.useCallback)((function(){return C(!0)}),[]);(0,o.useEffect)((function(){"idle"!==T.state||!T.data||T.data instanceof Error||C(!1)}),[T]);var j=(0,d.G)("Leave without saving?",y).toastRef;return(0,o.useEffect)((function(){return(0,f.Oo)("toast-confirm",(function(e){e.detail.id===j.current&&e.detail.confirmed&&C(!1)}))}),[C,j]),(0,m.jsx)(h.SubpageWrapper,{"data-testid":"features-wrapper",children:(0,m.jsxs)(T.Form,{noValidate:!0,action:"/teacher/settings",method:"post",children:[(0,m.jsx)("h2",{children:"Features"}),(0,m.jsx)("p",{children:"Choose which features to use in your school."}),(0,m.jsxs)(E,{children:[(0,m.jsxs)(x,{children:[(0,m.jsx)("h6",{children:"Video Playback Speed Controls"}),(0,m.jsx)("p",{children:"Allow students to change the playback speed of their videos."})]}),(0,m.jsx)(l.J9,{children:(0,m.jsx)(w,{children:(0,m.jsx)(u.Z,{testId:"controls",name:"features.videoSpeedControls",onChange:D,defaultChecked:null===(e=g.features)||void 0===e?void 0:e.videoSpeedControls})})})]}),(0,m.jsxs)(E,{children:[(0,m.jsxs)(Z,{children:[(0,m.jsx)("h6",{children:"Exam Proctoring"}),(0,m.jsx)("p",{children:"Require a teacher to unlock exams (from the Live Class Monitor) before letting the student proceed."})]}),(0,m.jsx)(l.fY,{children:(0,m.jsx)(s.Z,{data:v,name:"features.proctorExams",onChange:D,defaultSelected:v.find((function(e){var r;return e.value===(null===(r=g.features)||void 0===r?void 0:r.proctorExams)})),testId:"proctor"})})]}),(0,m.jsxs)(E,{children:[(0,m.jsxs)(x,{children:[(0,m.jsx)("h6",{children:"Pre Tests"}),(0,m.jsx)("p",{children:"Require students to complete Pre-Tests before beginning the course."})]}),(0,m.jsx)(l.J9,{children:(0,m.jsx)(w,{children:(0,m.jsx)(u.Z,{testId:"pretests",name:"features.preTests",onChange:D,defaultChecked:null===(r=g.features)||void 0===r?void 0:r.preTests})})})]}),(0,m.jsxs)(E,{children:[(0,m.jsxs)(x,{children:[(0,m.jsx)("h6",{children:"Parent Monthly Email Reports"}),(0,m.jsx)("p",{children:"Email monthly reports to parents who have access to the student."})]}),(0,m.jsx)(l.J9,{children:(0,m.jsx)(w,{children:(0,m.jsx)(u.Z,{testId:"report",name:"features.parentReport",onChange:D,defaultChecked:null===(t=g.features)||void 0===t?void 0:t.parentReport})})})]}),(0,m.jsxs)(E,{children:[(0,m.jsxs)(x,{children:[(0,m.jsx)("h6",{children:"Auto Enrollment"}),(0,m.jsx)("p",{children:"Automatically enroll students in the next course (when available)."})]}),(0,m.jsx)(l.J9,{children:(0,m.jsx)(w,{children:(0,m.jsx)(u.Z,{testId:"autoEnroll",name:"features.autoEnroll",onChange:D,defaultChecked:null===(a=g.features)||void 0===a?void 0:a.autoEnroll})})})]}),(0,m.jsx)(l.ZL,{isSubmitting:"submitting"===T.state,isSuccessful:T.data instanceof p.Z,noBottomPadding:!0})]})})}var E=(0,a.Z)(l.n5)({alignItems:"center",paddingTop:"2.5rem",paddingBottom:"2.5rem"}),x=a.Z.div({gridColumn:"span 10 / span 10"}),Z=a.Z.div({gridColumn:"span 12 / span 12","@media (min-width: 768px)":{gridColumn:"span 8 / span 8"}}),w=a.Z.div({display:"flex",justifyContent:"flex-end"})}}]);