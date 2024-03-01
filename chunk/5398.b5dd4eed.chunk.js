"use strict";(self.webpackChunkacellus=self.webpackChunkacellus||[]).push([[5398],{82367:function(e,t,r){r.d(t,{r:function(){return c}});var n,o=r(47313),i=["title","titleId"];function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function l(e,t){var r=e.title,l=e.titleId,c=s(e,i);return o.createElement("svg",a({fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",ref:t,"aria-labelledby":l},c),r?o.createElement("title",{id:l},r):null,n||(n=o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"})))}var c=o.forwardRef(l);r.p},15790:function(e,t,r){r.d(t,{Z:function(){return v}});var n,o,i,a=r(30168),s=r(1413),l=r(29439),c=r(44925),d=r(30686),u=r(43681),p=r(47313),f=r(31222),g=r(61435),h=r(51237),m=r(69293),x=r(79250),w=r(46417),b=["courseName","currentPage","file","setPage","title","totalPages","setTotalPages","containerStyles","toggle","children"];function v(e){var t=e.courseName,r=e.currentPage,n=void 0===r?1:r,o=e.file,i=e.setPage,a=e.title,d=e.totalPages,u=e.setTotalPages,f=e.containerStyles,v=e.toggle,T=e.children,U=(0,c.Z)(e,b),X=(0,m.Z)(),Y=null===o||void 0===o?void 0:o.url,q="application/pdf"===(null===o||void 0===o?void 0:o.type),K=(0,p.useRef)(),V=(0,p.useState)(""),J=(0,l.Z)(V,2),Q=(J[0],J[1]),_=((0,p.useCallback)((function(e,t){_.current=e,Q(t)}),[]),(0,p.useRef)(null)),$=(0,p.useRef)(null),ee=(0,p.useState)(),te=(0,l.Z)(ee,2),re=te[0],ne=te[1],oe=(0,p.useCallback)((function(){var e,t=null===$||void 0===$||null===(e=$.current)||void 0===e?void 0:e.clientWidth,r=parseInt((t/438/100*1e3).toFixed(2));ne(r)}),[]);return(0,h.Z)(oe,[window]),(0,p.useEffect)((function(){Y&&oe()}),[oe,Y]),(0,w.jsx)(w.Fragment,{children:Y?(0,w.jsxs)(y,{customStyles:f,isPDF:q,children:[(0,w.jsx)(Z,{singlePage:1===d,children:d>1&&(0,w.jsxs)(C,{children:[n>1?(0,w.jsx)(S,{"aria-label":"Previous Page","data-tooltip":"true",onClick:function(){return i((function(e){return Math.max(e-1,1)}))},children:(0,w.jsx)(R,{"aria-hidden":"true"})}):(0,w.jsx)(j,{}),(0,w.jsx)(k,{children:"Page "+n+" of "+(d||1)}),n<d?(0,w.jsx)(S,{"aria-label":"Next Page","data-tooltip":"true",onClick:function(){return i((function(e){return Math.min(e+1,d)}))},children:(0,w.jsx)(R,{right:!0,"aria-hidden":"true"})}):(0,w.jsx)(j,{})]})}),(0,w.jsx)(D,{ref:K,children:q?(0,w.jsx)(g.Z,{file:Y,pageNumber:n,containerRef:K,setMaxPages:u}):(0,w.jsxs)(I,{multiplePages:d>1,children:[(0,w.jsxs)(L,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(W,{scale:re,children:t}),"Student Resource"===v&&(0,w.jsx)(B,{scale:re,children:"Name: "})]}),(0,w.jsxs)(z,{children:[(0,w.jsxs)(O,{scale:re,children:[" Page ",n," "]}),(0,w.jsx)(N,{scale:re,children:a}),(0,w.jsxs)(E,{scale:re,children:[" Page ",n," "]})]})]}),(0,w.jsx)(F,{src:Y,alt:"Instructions"}),(0,w.jsxs)(M,{ref:$,children:[(0,w.jsx)(A,{scale:re,children:"Copyright \xa9 International Academy of Science. All Rights Reserved"}),(0,w.jsx)(A,{scale:re,children:"www.acellus.com"})]})]})}),(0,w.jsx)(H,(0,s.Z)((0,s.Z)({schoolLevel:X},U),{},{children:(0,w.jsx)(G,{children:T})}))]}):(0,w.jsx)(x.Z,{})})}var y=u.Z.div((function(e){var t=e.customStyles;return[{display:"flex",height:"fit-content",maxHeight:"100%",minHeight:"50rem",width:"100%",maxWidth:"70rem",flexDirection:"column",alignItems:"center",justifyContent:"center"},e.isPDF&&{height:"100%"},t]})),Z=u.Z.div((function(e){return[{display:"flex",width:"100%",flexShrink:"0",justifyContent:"center"},e.singlePage&&{display:"none"}]})),C=u.Z.div({inset:"0px",zIndex:"10",display:"flex",width:"calc(100% - 2rem)",maxWidth:"70rem",alignItems:"center",justifyContent:"space-between",paddingTop:"0.5rem",paddingBottom:"0.5rem","--tw-text-opacity":"1",color:"rgb(31 41 55 / var(--tw-text-opacity))","@media (min-width: 640px)":{width:"calc(100% - 4rem)",paddingTop:"1rem",paddingBottom:"1rem"}}),S=u.Z.button({borderRadius:"0.75rem",padding:"0.5rem",transitionProperty:"color, background-color, border-color, text-decoration-color, fill, stroke",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms",":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgb(199 215 245 / var(--tw-bg-opacity))"}}),j=u.Z.div({height:"3rem",width:"3rem"}),k=u.Z.span({userSelect:"none",fontSize:"1.2rem",fontWeight:"500","--tw-text-opacity":"1",color:"rgb(55 65 81 / var(--tw-text-opacity))",":is(.dark &)":{"--tw-text-opacity":"1",color:"rgb(255 255 255 / var(--tw-text-opacity))"}}),R=(0,u.Z)(f.r)((function(e){return[{height:"1.5rem",width:"1.5rem",cursor:"pointer",strokeWidth:"2","--tw-text-opacity":"1",color:"rgb(107 114 128 / var(--tw-text-opacity))",":is(.dark &)":{"--tw-text-opacity":"1",color:"rgb(255 255 255 / var(--tw-text-opacity))"},"@media (min-width: 640px)":{height:"2rem",width:"2rem"}},e.larger&&{height:"3rem",width:"3rem"},e.right&&{"--tw-rotate":"180deg",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"}]})),D=u.Z.div({position:"relative",marginLeft:"auto",marginRight:"auto",display:"flex",width:"calc(100% - 2rem)",flexDirection:"column",overflow:"auto",borderTopLeftRadius:"1rem",borderTopRightRadius:"1rem",borderLeftWidth:"1px",borderRightWidth:"1px",borderTopWidth:"1px","--tw-border-opacity":"1",borderColor:"rgb(209 213 219 / var(--tw-border-opacity))","--tw-bg-opacity":"1",backgroundColor:"rgb(255 255 255 / var(--tw-bg-opacity))","--tw-shadow":"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)","--tw-shadow-colored":"0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",transform:"translateZ(0)","::-webkit-scrollbar":{borderTopRightRadius:"1.5rem"},"::-webkit-scrollbar-track":{marginTop:"1rem"},"::-webkit-scrollbar-thumb":{backgroundColor:"rgb(0 0 0 / 0.25)"},":is(.dark &)":{borderColor:"rgb(75 85 99 / 0.5)"},"@media (min-width: 640px)":{width:"calc(100% - 4rem)"}}),I=u.Z.div({display:"flex",height:"fit-content",width:"100%",flexDirection:"column",gap:"0.5rem",padding:"2.5rem","@media (min-width: 500px)":{padding:"3.5rem"},"@media (min-width: 640px)":{padding:"4rem"},"@media (min-width: 768px)":{padding:"5rem"}}),L=u.Z.div({display:"flex",width:"100%",flexDirection:"column"}),P=u.Z.div({display:"flex",width:"100%",gap:"1rem",borderBottomWidth:"1px","--tw-border-opacity":"1",borderColor:"rgb(107 114 128 / var(--tw-border-opacity))",paddingBottom:"0.5rem"}),T=u.Z.span((function(e){var t=e.scale;return[{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontWeight:"500","--tw-text-opacity":"1",color:"rgb(55 65 81 / var(--tw-text-opacity))"},t&&(0,d.iv)(n||(n=(0,a.Z)(["\n      font-size: ","px;\n    "])),t)]})),W=(0,u.Z)(T)({width:"0px",flex:"1 1 0%","--tw-text-opacity":"1",color:"rgb(55 65 81 / var(--tw-text-opacity))"}),B=(0,u.Z)(T)({width:"33.333333%",flex:"0 1 auto"}),z=u.Z.div({position:"relative",display:"flex",width:"100%",justifyContent:"space-between",gap:"1rem"}),E=u.Z.span((function(e){var t=e.scale;return[{width:"fit-content",flex:"0 1 auto",whiteSpace:"nowrap",paddingTop:"0.5rem",fontWeight:"500","--tw-text-opacity":"1",color:"rgb(75 85 99 / var(--tw-text-opacity))"},t&&(0,d.iv)(o||(o=(0,a.Z)(["\n      font-size: ","px;\n    "])),t/1.2)]})),O=(0,u.Z)(E)({pointerEvents:"none",opacity:"0"}),N=u.Z.span((function(e){var t=e.scale;return[{width:"fit-content",flex:"0 1 auto",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",paddingTop:"2rem",fontWeight:"600","--tw-text-opacity":"1",color:"rgb(55 65 81 / var(--tw-text-opacity))","@media (min-width: 640px)":{maxWidth:"80%"}},t&&(0,d.iv)(i||(i=(0,a.Z)(["\n      font-size: ","px;\n    "])),1.6*t)]})),F=u.Z.img({width:"100%",userSelect:"none","--tw-bg-opacity":"1",backgroundColor:"rgb(255 255 255 / var(--tw-bg-opacity))"}),M=u.Z.div({display:"flex",justifyContent:"space-between",gap:"1rem",borderTopWidth:"1px","--tw-border-opacity":"1",borderColor:"rgb(107 114 128 / var(--tw-border-opacity))",paddingTop:"0.5rem"}),A=(0,u.Z)(T)({}),H=u.Z.div({position:"sticky",bottom:"0px",width:"100%",borderRadius:"1rem",borderWidth:"1px","--tw-border-opacity":"1",borderColor:"rgb(209 213 219 / var(--tw-border-opacity))","--tw-bg-opacity":"1",backgroundColor:"rgb(255 255 255 / var(--tw-bg-opacity))","--tw-shadow":"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)","--tw-shadow-colored":"0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",":is(.dark &)":{borderColor:"rgb(75 85 99 / 0.5)","--tw-bg-opacity":"1",backgroundColor:"rgb(51 65 85 / var(--tw-bg-opacity))"}}),G=u.Z.div({display:"flex",gap:"1rem",padding:"1.25rem"})},31518:function(e,t,r){r.d(t,{ZP:function(){return I},bO:function(){return P},es:function(){return W},it:function(){return T}});var n=r(4942),o=r(1413),i=r(74165),a=r(15861),s=r(93433),l=r(29439),c=r(43681),d=r(47313),u=r(2135),p=r(58467),f=r(99974),g=r(40290),h=r(77931),m=r(61435),x=r(72159),w=r(79250),b=r(41543),v=r(84777),y=r(20388),Z=r(65240),C=r(46959),S=r(68720),j=r(25067),k=r(81570),R=r(58229),D=r(46417);function I(e){var t=e.alertsState,r=e.assignment,c=e.isParent,m=e.revalidate,v=e.student,I=(0,u.useSearchParams)(),z=(0,l.Z)(I,1)[0],E=parseInt(z.get("displayCourseID")),O=(0,l.Z)(t,2),N=O[0],F=O[1],X=v.archived,Y="Processing"===r.status,q=(0,d.useState)([]),K=(0,l.Z)(q,2),V=K[0],J=K[1],Q=(0,d.useMemo)((function(){return V.filter((function(e){return!!e}))}),[V]),_=(0,d.useState)(),$=(0,l.Z)(_,2),ee=$[0],te=$[1],re=(0,d.useState)(Q[0]),ne=(0,l.Z)(re,2),oe=ne[0],ie=ne[1],ae=function(e,t){return J((function(r){var n=(0,s.Z)(r);return n[t]=e,n}))};(0,d.useEffect)((function(){return ie(Q[0])}),[Q]),(0,d.useEffect)((function(){var e=new AbortController,t=h.Z.getSpecialLessons(E,e.signal).then((function(e){if((0,j.isErrorResponse)(e))throw new k.Z(e);return e.specialLessons.find((function(e){return e.id===r.syllabusStepID}))})),n=["Student Work",null];Y||(n=h.Z.getAnswerHistoryFile(v.acellusID,r.assignmentID,e.signal).then(function(){var t=(0,a.Z)((0,i.Z)().mark((function t(r){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(0,j.isErrorResponse)(r)){t.next=2;break}throw new k.Z(r);case 2:if(!r.mock){t.next=4;break}return t.abrupt("return",(0,S.loadResources)(r.mock,e.signal));case 4:if("text/"!==r.type){t.next=10;break}return t.next=7,r.text();case 7:return t.t0=t.sent,t.t1=r.type,t.abrupt("return",{content:t.t0,type:t.t1});case 10:return t.abrupt("return",{url:URL.createObjectURL(r),type:r.type});case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).then((function(e){return["Student Work",e]})).finally((function(){return ae("Student Work",0)})));var o=t.then((function(t){return(0,S.loadResources)(t.teacherResource,e.signal)})).then((function(e){return e&&ae("Teacher Resource",1),["Teacher Resource",e]})),s=t.then((function(t){return(0,S.loadResources)(t.studentResource,e.signal)})).then((function(e){return e&&ae("Student Resource",2),["Student Resource",e]}));return te(Promise.all([n,o,s]).then((function(e){return Object.fromEntries(e)}))),function(){return e.abort()}}),[r.assignmentID,v.acellusID,E,r.syllabusStepID,Y]);var se=(0,d.useState)({}),le=(0,l.Z)(se,2),ce=le[0],de=le[1],ue=function(e,t){return de((function(r){return(0,o.Z)((0,o.Z)({},r),{},(0,n.Z)({},e,t))}))||!0},pe=function(e){return de((function(t){var r=(0,o.Z)({},t);return delete r[e],r}))},fe=function(e){var t=!1;if(void 0!==e.score){var r=Number(e.score);r<0?t=ue("score","Score must at least be 0."):r>100&&(t=ue("score","Score must at most be 100."))}return t},ge=(0,d.useState)(!1),he=(0,l.Z)(ge,2),me=he[0],xe=he[1],we=function(e){return pe(e.target.name)},be=function(e){return fe((0,n.Z)({},e.target.name,e.target.value))};return(0,D.jsxs)(D.Fragment,{children:[(null===Q||void 0===Q?void 0:Q.length)&&(0,D.jsx)(B,{children:(0,D.jsx)(Z.Z,{sliderStyles:W,textStyles:P,containerStyles:T,toggle:oe,setToggle:ie,toggles:Q})}),ee&&(0,D.jsx)(d.Suspense,{fallback:(0,D.jsx)(w.Z,{}),children:(0,D.jsx)(p.KP,{resolve:ee,errorElement:(0,D.jsx)(b.Z,{}),children:oe&&(0,D.jsx)(L,{toggle:oe})})}),!Y&&!X&&!c&&(0,D.jsx)("form",{onSubmit:function(e){e.preventDefault();var t=new FormData(e.target),n=Object.fromEntries(t.entries());if(xe(!0),pe("submission"),fe(n))return xe(!1);var o=(0,R.ue)(n),i=N.actionItems.filter((function(e){return e.meta.assignmentID===r.assignmentID&&e.displayCourseID===E&&e.meta.stepID===r.syllabusStepID}));g.Z.postGrade(v.acellusID,E,r.assignmentID,o).then((function(e){if((0,j.isErrorResponse)(e))throw new k.Z(e,"Failed to Submit Grading.");toast.alert("Successfully Submitted Grading."),"function"===typeof m&&m(),alert&&i.forEach((function(e){f.Z.delete(e.alertID,e.acellusID).then((function(t){(0,j.isErrorResponse)(t)||F((function(t){return{actionItems:t.actionItems.filter((function(t){return t.alertID!==e.alertID}))}}))}))}))})).catch((function(e){ue("submission",e),toast.error(e.error_msg||e.message)})).finally((function(){xe(!1)}))},children:(0,D.jsxs)(M,{children:[(0,D.jsx)(A,{children:(0,D.jsx)(x.II,{autoComplete:"off","aria-label":"Score Percentage",onChange:we,onFocus:we,onBlur:be,type:"number",error:ce.score,name:"score",defaultValue:"100",min:"0",max:"100",step:"1",disabled:Y||me})}),(0,D.jsx)(H,{"data-tooltip":"title","aria-label":"This feature is no longer supported",children:(0,D.jsx)(y.Z,{data:["Complete"],disabled:!0})}),(0,D.jsx)(G,{children:(0,D.jsx)(x.II,{noAutoComplete:!0,"aria-label":"Comments",onChange:we,onFocus:we,onBlur:be,type:"text",error:ce.teacherComments,placeholder:"Comments",name:"teacherComment",disabled:Y||me})}),(0,D.jsx)(C.Z,{width:U,color:"teacherBlue",colorNum:500,type:"submit",disabled:Y,isSubmitting:me,error:ce.submission,children:"Submit"})]})})]})}function L(e){var t=e.toggle,r=(0,p.qv)()[t],n=(0,d.useState)(1),o=(0,l.Z)(n,2),i=o[0],a=o[1],s=(0,d.useState)(r.length),c=(0,l.Z)(s,2),u=c[0],f=c[1],g=(0,d.useState)(Array.isArray(r)?r[0].type.startsWith("image/")?r[i-1]:null===r||void 0===r?void 0:r[0]:r),h=(0,l.Z)(g,2),x=h[0],w=h[1];(0,d.useEffect)((function(){a(1),f(r.length)}),[r]),(0,d.useEffect)((function(){w((function(){if(!Array.isArray(r))return r;if(r[0].type.startsWith("image/")){var e=r[i-1];return e||r[0]}return r[0]}))}),[r,i]);return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(z,{children:(0,D.jsx)(C.Z,{onClick:function(){return printFile([x])},disabled:(0,j.isErrorResponse)(x),children:"Print"})}),u>1&&(0,D.jsxs)(O,{children:[(0,D.jsx)(C.Z,{onClick:function(){return a((function(e){return Math.max(e-1,1)}))},children:"Prev"}),(0,D.jsxs)(N,{children:[i," / ",u]}),(0,D.jsx)(C.Z,{onClick:function(){return a((function(e){return Math.min(e+1,u)}))},children:"Next"})]}),(0,D.jsx)(E,{children:x.type.startsWith("text/")?(0,D.jsx)(v.Z,{htmlToClean:x.content}):x.type.startsWith("image/")?(0,D.jsx)(F,{alt:"preview",src:x.url}):(0,D.jsx)(m.Z,{file:x.url,setMaxPages:f,pageNumber:i,setPageNumber:a})})]})}var P=function(e){return e.active&&{"--tw-text-opacity":"1",color:"rgb(255 255 255 / var(--tw-text-opacity))"}},T={"--tw-bg-opacity":"1",backgroundColor:"rgb(255 255 255 / var(--tw-bg-opacity))"},W={"--tw-bg-opacity":"1",backgroundColor:"rgb(83 126 220 / var(--tw-bg-opacity))"},B=c.Z.div({paddingTop:"6rem","@media (min-width: 1024px)":{paddingTop:"0px"}}),z=c.Z.div({position:"absolute",left:"0px",top:"0px"}),E=c.Z.div({marginLeft:"auto",marginRight:"auto",marginTop:"2.5rem",marginBottom:"2.5rem",maxWidth:"60rem",borderRadius:"0.75rem",borderWidth:"1px","--tw-border-opacity":"1",borderColor:"rgb(229 231 235 / var(--tw-border-opacity))",padding:"2.5rem","--tw-shadow":"0 25px 50px -12px rgb(0 0 0 / 0.25)","--tw-shadow-colored":"0 25px 50px -12px var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"}),O=c.Z.div({position:"absolute",right:"0px",top:"0px",display:"flex",gap:"1rem"}),N=c.Z.span({alignSelf:"center"}),F=c.Z.img({marginLeft:"auto",marginRight:"auto",objectFit:"contain"}),M=c.Z.div({display:"flex",width:"100%",alignItems:"flex-end",justifyContent:"space-between",gap:"1rem",borderRadius:"1.5rem",borderWidth:"1px","--tw-border-opacity":"1",borderColor:"rgb(229 231 235 / var(--tw-border-opacity))","--tw-bg-opacity":"1",backgroundColor:"rgb(255 255 255 / var(--tw-bg-opacity))",padding:"2.5rem","--tw-shadow":"0 1px 2px 0 rgb(0 0 0 / 0.05)","--tw-shadow-colored":"0 1px 2px 0 var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"}),A=c.Z.div({width:"16.666667%","@media (min-width: 1750px)":{width:"8.333333%","@-moz-document url-prefix()":{width:"8.333333%"}},"@-moz-document url-prefix()":{width:"20%"}}),H=c.Z.div({width:"20%"}),G=c.Z.div({width:"100%"}),U={"@media (min-width: 1024px)":{width:"14rem"}}},44583:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(29439),o=r(47313),i=r(58229),a=r(30424);function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0,s=arguments.length>3?arguments[3]:void 0,l=(0,o.useState)(!1),c=(0,n.Z)(l,2),d=c[0],u=c[1],p=(0,a.Z)().height;return(0,o.useEffect)((function(){if(null!==s&&void 0!==s&&s.current||r){var n=(null===s||void 0===s?void 0:s.current)||(r?document.getElementById(r):document.documentElement);if(!n)return logger.log("useScrolledToBottom: element not found"),u(!1);return(0,i.Oo)("scroll",(function(){n.scrollTop+n.clientHeight>=n.scrollHeight-t&&(null===e||void 0===e||e())}),void 0,(null===s||void 0===s?void 0:s.current)||(r?n:void 0))}}),[e,p,r,t,s]),d}},68720:function(e,t,r){r.r(t),r.d(t,{LessonList:function(){return J},PreviewModal:function(){return $},default:function(){return Y},loadResources:function(){return te},useCourseContext:function(){return K}});var n,o,i,a=r(30168),s=r(4942),l=r(1413),c=r(29439),d=r(30686),u=r(43681),p=r(47313),f=r(58467),g=r(32547),h=r(7752),m=r(60199),x=r(77931),w=r.p+"static/media/Montserrat-Regular.a04b5e24af93da353f0e.woff",b=r.p+"static/media/Montserrat-Regular.58a8d7ebc386843b62c5.woff2",v=r(82367),y=r(16337),Z=r(35667),C=r(72159),S=r(85096),j=r(79250),k=r(41543),R=r(15790),D=r(65240),I=r(51083),L=r(46959),P=r(13797),T=r(82466),W=r(31518),B=r(75641),z=r(60106),E=r(41428),O=r(11126),N=r(44583),F=r(29079),M=r(43370),A=r(25067),H=r(57830),G=r(11360),U=r(58229),X=r(46417);function Y(){var e=(0,B.G)().enrollment,t=(0,p.useState)(!0),r=(0,c.Z)(t,2),n=r[0],o=r[1],i=(0,p.useState)((null===e||void 0===e?void 0:e.courses)||[]),a=(0,c.Z)(i,2),d=a[0],u=a[1],f=(0,p.useState)({}),g=(0,c.Z)(f,2),m=g[0],w=g[1],b=(0,p.useState)(0),y=(0,c.Z)(b,2),C=y[0],S=y[1],k=(0,p.useState)(""),R=(0,c.Z)(k,2),D=R[0],I=R[1],L=(0,p.useDeferredValue)(D);(0,E.Z)((function(){return S(10)}),[D]);var T=(0,p.useCallback)((function(e,t){return e.starred&&!t.starred?-1:!e.starred&&t.starred?1:e.courseNumber<t.courseNumber?-1:e.courseNumber>t.courseNumber?1:0}),[]),W=(0,p.useCallback)((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:400;e>=t||setTimeout((function(){var r=Math.min(2*e,e+16);S(r),W(r,t)}),300)}),[]);(0,p.useEffect)((function(){var t,r,n=new AbortController,i=Math.max(.5,C);if(null!==e&&void 0!==e&&null!==(t=e.courses)&&void 0!==t&&t.length){o(!0);var a=e.courses.filter((function(e){return!1!==m[e.displayCourseID]})).sort(T),s=Math.min(a.length,4);u(a),Promise.all(H(a,m,n)).then((function(e){null!==e&&void 0!==e&&e.some((function(e){return e}))&&W(i,s)})).catch((function(e){return toast.error(e.message)})).finally((function(){return o(!1)}))}else h.Z.get({inUse:!0,limit:400},n.signal).then((function(e){u(e.courses.filter((function(e){return!1!==m[e.displayCourseID]})).sort(T)),W(i,4),r=setTimeout((function(){return H(e.courses.slice(4),m,n)}),2e3)})).catch((function(e){return toast.error(e.message)})).finally((function(){return o(!1)}));return function(){n.abort(),clearTimeout(r)}}),[e.courses,W,T]);var F=(0,z.Z)("sm")?34:42,M=(0,O.Z)(F);(0,N.Z)((function(){return W(C,Math.min(d.length,2*C,C+16))}),5);var A=(0,p.useCallback)((function(e){u((function(t){return t.filter((function(t){return t.displayCourseID!==e}))}))}),[]),H=(0,p.useCallback)((function(e,t,r){return e.map((function(e){var n;return null!==(n=t[e.displayCourseID])&&void 0!==n?n:x.Z.getSpecialLessons(e.displayCourseID,r.signal).then((function(t){var r,n=null===(r=t.specialLessons)||void 0===r?void 0:r.filter((function(e){return e.studentResource}));return w((function(t){return(0,l.Z)((0,l.Z)({},t),{},(0,s.Z)({},e.displayCourseID,!(null===n||void 0===n||!n.length)&&n))})),!(null===n||void 0===n||!n.length)||(A(e.displayCourseID),!1)}))}))}),[A]),G=(0,p.useMemo)((function(){var e=L?d.filter((function(e){var t;return null===(t=e.courseName)||void 0===t?void 0:t.toLowerCase().includes(L.toLowerCase())})):d;return(0,X.jsxs)(X.Fragment,{children:[e.slice(0,C).map((function(e,t){return(0,X.jsx)(V,{course:e,deleteCourse:A,index:t,setSpecialLessons:w,specialLessons:m[e.displayCourseID]},e.displayCourseID)})),L&&!e.length&&(0,X.jsx)(Z.Z,{customStyles:se,title:"No Special Lessons Found","aria-label":"No Special Lessons Found",subtext:"There are no Special Lessons for the course you searched.",bgColor:le,children:(0,X.jsx)(v.r,{"aria-hidden":"true"})})]})}),[d,L,A,C]);return(0,X.jsx)(q.Provider,{value:d,children:(0,X.jsxs)(re,{children:[(0,X.jsxs)(ne,{mobileOffset:F,mobileStyles:M,children:[(0,X.jsx)(oe,{children:"Special Lessons"}),(0,X.jsx)(ie,{children:(0,X.jsx)(P.ZP,{placeholder:"Search by Course Name",query:D,setQuery:I})})]}),n?(0,X.jsx)(j.Z,{}):d.length?(0,X.jsx)(ae,{stale:D!==L,children:G}):(0,X.jsx)(Z.Z,{customStyles:se,title:"No Special Lessons Found","aria-label":"No Special Lessons Found",subtext:"There are no Special Lessons in your courses.",bgColor:le,children:(0,X.jsx)(v.r,{"aria-hidden":"true"})})]})})}var q=(0,p.createContext)(null);function K(){var e=(0,p.useContext)(q);if(!e)throw new Error("useCourseContext can only be called within a Course Context Provider");return e}function V(e){var t=e.course,r=e.deleteCourse,n=e.index,o=e.setSpecialLessons,i=e.specialLessons,a=(0,p.useState)(),d=(0,c.Z)(a,2),u=d[0],g=d[1],h=(0,p.useState)(!1),m=(0,c.Z)(h,2),w=m[0],b=m[1],v=(0,p.useCallback)((function(){var e=new AbortController;return i?x.Z.getSpecialLessons(t.displayCourseID,e.signal).then((function(e){return o((function(r){return(0,l.Z)((0,l.Z)({},r),{},(0,s.Z)({},t.displayCourseID,e.specialLessons))}))})):g(x.Z.getSpecialLessons(t.displayCourseID,e.signal)),function(){return e.abort()}}),[t.displayCourseID,o,i]);return(0,p.useEffect)((function(){void 0===i&&v()}),[]),(0,X.jsxs)(ce,{hide:w,children:[(0,X.jsx)(de,{children:(0,X.jsx)(ue,{firstElement:0===n,children:t.courseName})}),(0,X.jsx)(S.r,{noMaxWidth:!0,customStyles:pe,children:i?i.map((function(e){return(0,X.jsx)(Q,{displayCourseID:t.displayCourseID,lesson:e,refresh:v},e.id)})):(0,X.jsx)(p.Suspense,{fallback:(0,X.jsx)(j.Z,{}),children:(0,X.jsx)(f.KP,{resolve:u,errorElement:(0,X.jsx)(k.Z,{}),children:(0,X.jsx)(J,{deleteCourse:r,displayCourseID:t.displayCourseID,hideRow:w,refresh:v,setHideRow:b,setSpecialLessons:o})})})})]})}function J(e){var t=e.deleteCourse,r=e.displayCourseID,n=e.hideRow,o=e.refresh,i=e.setHideRow,a=e.setSpecialLessons,c=(0,f.qv)(),d=(0,p.useMemo)((function(){var e;return null===c||void 0===c||null===(e=c.specialLessons)||void 0===e?void 0:e.filter((function(e){return e.studentResource}))}),[c]);return(0,p.useEffect)((function(){d&&(a((function(e){return(0,l.Z)((0,l.Z)({},e),{},(0,s.Z)({},r,!(null===d||void 0===d||!d.length)&&d))})),null!==d&&void 0!==d&&d.length||t(r))}),[t,r,d,a]),(0,p.useEffect)((function(){return i(!!c&&!(null!==d&&void 0!==d&&d.length))}),[null===d||void 0===d?void 0:d.length,c,i]),null===d||void 0===d?void 0:d.map((function(e){return(0,X.jsx)(Q,{displayCourseID:r,hideRow:n,lesson:e,refresh:o},"".concat(r,"-").concat(e.id))}))}function Q(e){var t=e.displayCourseID,r=e.hideRow,n=e.lesson,o=e.refresh,i=(0,p.useState)(null),a=(0,c.Z)(i,2),s=a[0],l=a[1],d=(0,p.useState)(),u=(0,c.Z)(d,2),f=u[0],g=u[1];(0,p.useEffect)((function(){if(n.assignedBy&&!r){var e=new AbortController;return m.Z.get(n.assignedBy,e.signal).then((function(e){return g(e)})),function(){return e.abort()}}}),[r,n.assignedBy]);var h=n.assignedBy?"Last assigned ".concat(n.lastAssigned?"".concat((0,G.Sy)((0,G.zL)(n.lastAssigned))," "):"").concat(f&&"by ".concat((0,U.Pp)(f,{salutation:"initial",firstName:!f.salutation}))):"This assignment has not been sent yet";return(0,X.jsxs)(X.Fragment,{children:[s&&(0,X.jsx)($,{displayCourseID:t,lesson:s,onClose:function(){return l(null)},refresh:o}),(0,X.jsxs)(fe,{children:[(0,X.jsx)(he,{children:n.title}),(0,X.jsxs)(me,{children:[(0,X.jsxs)(xe,{children:[h,"."]}),(0,X.jsx)(ge,{color:"teacherBlue",colorNum:800,onClick:function(){return l(n)},children:"Let's Go"})]})]})]})}var _=["Student Resource","Teacher Resource"];function $(e){var t,r=e.displayCourseID,n=e.lesson,o=e.onClose,i=e.refresh,a=(0,p.useState)("Student Resource"),s=(0,c.Z)(a,2),l=s[0],d=s[1],u=(0,p.useState)(),f=(0,c.Z)(u,2),g=f[0],h=f[1],m=(0,p.useMemo)((function(){return null===n||void 0===n?void 0:n["Student Resource"===l?"studentResource":"teacherResource"]}),[n,l]),x=(0,p.useState)(!1),C=(0,c.Z)(x,2),S=C[0],k=C[1],R=(0,p.useState)(null),I=(0,c.Z)(R,2),L=I[0],P=I[1],B=(0,p.useState)(),z=(0,c.Z)(B,2),E=z[0],O=z[1],N=(0,p.useState)(1),F=(0,c.Z)(N,2),M=F[0],A=F[1],H=null===(t=K().find((function(e){return e.displayCourseID===r})))||void 0===t?void 0:t.courseName;return(0,p.useEffect)((function(){if(m){k(!0);var e=new AbortController;return te(m,e.signal).then((function(e){return P(e)})).catch((function(e){return toast.error(e.message)})).finally((function(){return k(!1)})),function(){return e.abort()}}P(null)}),[m]),(0,X.jsx)(T.ZP,{title:"Assign Special Lesson",onClose:o,modalBaseContentStyles:Se,contentWrapperStyles:ke,headerStyles:be,bgColor:{"--tw-bg-opacity":"1",backgroundColor:"rgb(223 232 249 / var(--tw-bg-opacity))"},customHeaderContent:(0,X.jsx)(ye,{singlePage:1===g,children:(0,X.jsx)(D.Z,{toggles:_,toggle:l,setToggle:d,wrapperStyles:Ce,textStyles:W.bO,containerStyles:W.it,sliderStyles:W.es})}),customButtons:(0,X.jsx)(Ze,{"aria-label":"Print","data-tooltip":"true",onClick:function(){var e;if(null!==L&&void 0!==L&&null!==(e=L[0])&&void 0!==e&&e.type.startsWith("image/")){printFile(L,(function(e){return"\n        <head> \n        <style>\n        @font-face {\n          font-family: 'Montserrat';\n          font-style: normal;\n          font-weight: 400;\n          src: url(".concat((0,U.CM)(w),") format('woff'), url(").concat((0,U.CM)(b),") format('woff2');\n        }\n\n        </style> \n        </head> \n        <header style=\"display: flex; flex-direction: column; gap:0.5rem;\" >\n          <div id=\"thisDiv\" style='border-bottom: 1px solid #6b7280;display:flex;padding-bottom:5px;width:100%;gap:0.5rem;font-family:Montserrat;font-size: 12px;font-weight:500;line-height:1.25rem;color:rgb(17 24 39);'>\n            <span style='width:66%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;'>\n              ").concat(H,"\n            </span>\n            ").concat("Student Resource"===l?"<span> Name </span>":"","\n          </div>\n          <div style='display:flex;width:100%;gap:1rem;justify-content:space-between;position:relative;'>\n            <span style='width:fit-content;font-size:10px;font-weight:500;flex: 0 1 auto;opacity:0;pointer-events:none;'>\n              Page ").concat(e,"\n            </span>\n            <span style='font-family:Montserrat;font-size: 20px;padding-top:20px;line-height:1.75rem;font-weight:600;max-width:80%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color: rgb(17 24 39);'>\n              ").concat(n.title,"\n            </span>\n            <span style='font-family:Montserrat;font-weight:500;font-size:10px;width:fit-content;flex: 0 1 auto;'>\n              Page ").concat(e,"\n            </span>\n          </div>\n        </header>")}),"<footer style='display:flex;border-top: 1px solid #6b7280;justify-content:space-between;font-family:Montserrat;font-size:10px;padding-top:5px;'>\n          <span>Copyright \xa9 Acellus Corporation. All Rights Reserved.</span>\n          <span>www.acellus.com</span>\n        </footer>")}else printFile(L)},disabled:!E,children:(0,X.jsx)(y.r,{"aria-hidden":"true"})}),children:(0,X.jsx)(we,{children:m&&S?(0,X.jsx)(j.Z,{}):L?(0,X.jsx)(ee,{toggle:l,courseName:H,displayCourseID:r,file:E,lesson:n,refresh:i,files:L,page:M,setFile:O,setPage:A,totalPages:g,setTotalPages:h}):(0,X.jsx)(Z.Z,{customStyles:se,"aria-label":"There is no ".concat(l," for this Special Lesson."),title:"No Resource",subtext:"There is no ".concat(l," for this Special Lesson."),children:(0,X.jsx)(v.r,{"aria-hidden":"true"})})})})}function ee(e){var t=e.courseName,r=e.displayCourseID,n=e.file,o=e.files,i=e.lesson,a=e.page,s=e.refresh,l=e.setFile,d=e.setPage,u=e.toggle,f=e.totalPages,h=e.setTotalPages,w=(0,p.useState)(""),b=(0,c.Z)(w,2),v=b[0],y=b[1],Z=(0,p.useState)(!1),S=(0,c.Z)(Z,2),j=S[0],k=S[1],D=(0,p.useState)(!1),I=(0,c.Z)(D,2),P=I[0],T=I[1],W=(0,F.ZP)().events,B=function(){T(!1),k(!0),x.Z.postSpecialLesson(r,i.id,!0).then((function(){return s()})),m.Z.getSearch(void 0,{displayCourseID:r,role:"student",status:"active"}).then((function(e){var r;return null===(r=e.result)||void 0===r?void 0:r.forEach((function(e){W&&W.emit("specialLesson",{to:e.acellusID,message:(0,H.r)(v),resource:{title:i.title,courseName:t,resources:i.studentResource}})}))})).catch((function(e){return console.log(e.message)})),g.Z.post(r,100,JSON.stringify({type:"Special Lesson",title:i.title,courseName:t,studentResource:i.studentResource,message:(0,H.r)(v)})).catch((function(e){toast.error(e.message||"Error sending to students"),T(!0)})).finally((function(){return k(!1)}))};return(0,p.useEffect)((function(){d(1),h(o.length)}),[o,h,d]),(0,p.useEffect)((function(){var e;o&&l(o[0]instanceof Blob?o[0]:null!==(e=o[0].type)&&void 0!==e&&e.startsWith("image/")?o[a-1]:o[0])}),[a,o,l]),(0,X.jsx)(X.Fragment,{children:(0,X.jsxs)(R.Z,{toggle:u,file:n,courseName:t,currentPage:a,setPage:d,title:i.title,totalPages:f,setTotalPages:h,containerStyles:je,children:[(0,X.jsx)(C.II,{placeholder:"Type your message...",value:v,onChange:function(e){return y(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&B()}}),(0,X.jsx)(L.Z,{color:"teacherBlue",colorNum:500,customStyles:ve,error:P,isSubmitting:j,onClick:B,children:"Send"})]})})}function te(e,t){return e?(Array.isArray(e)||(e=[e]),Promise.all(e.map((function(e){return(0,A.get)((0,U.yB)(e)?e:"/media/".concat(e),void 0,{Accept:"application/octet-stream"},t).then((function(e){return{url:URL.createObjectURL(e),type:e.type}})).catch((function(e){return toast.error(e.message)}))})))):null}var re=(0,u.Z)(I.i)({display:"flex",minHeight:"100%",flexDirection:"column",gap:"3rem","--tw-bg-opacity":"1",backgroundColor:"rgb(242 246 253 / var(--tw-bg-opacity))",paddingLeft:"0px",paddingRight:"0px",paddingTop:"var(--spacing)",paddingBottom:"var(--spacing)","@media (min-width: 1024px)":{paddingTop:"0px"}}),ne=u.Z.div((function(e){var t=e.mobileOffset,r=e.mobileStyles;return[{position:"sticky",zIndex:"20",display:"flex",flexDirection:"column",gap:"1rem",borderBottomWidth:"1px",borderColor:"transparent",backgroundColor:"rgb(242 246 253 / 0.75)",paddingLeft:"var(--spacing)",paddingRight:"var(--spacing)",paddingBottom:"1rem","--tw-backdrop-blur":"blur(8px)",backdropFilter:"var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms","@media (min-width: 1024px)":{position:"static",minHeight:"0px",borderStyle:"none",paddingBottom:"0px"}},(0,d.iv)(n||(n=(0,a.Z)(["\n    top: ","px;\n  "])),t),r&&{"--tw-border-opacity":"1",borderColor:"rgb(209 213 219 / var(--tw-border-opacity))","--tw-shadow":"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)","--tw-shadow-colored":"0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)","@media (min-width: 1024px)":{"--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"}}]})),oe=u.Z.h1((function(e){return[{transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"200ms",transitionDelay:"100ms","@media (min-width: 1024px)":{display:"none"}},e.mobileLessons&&{paddingLeft:"2rem"}]})),ie=(0,u.Z)(T.vs)({paddingLeft:"0px",paddingRight:"0px","@media (min-width: 1024px)":{position:"absolute",top:"1.5rem",width:"fit-content",minWidth:"33rem",alignSelf:"flex-end"}}),ae=u.Z.div((function(e){return[e.stale?{opacity:"0.5"}:{opacity:"1"},{display:"flex",height:"100%",flexDirection:"column",gap:"3rem",transitionProperty:"opacity",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms"}]})),se={height:"0px",flex:"1 1 0%"},le={"--tw-bg-opacity":"1",backgroundColor:"rgb(242 246 253 / var(--tw-bg-opacity))"},ce=u.Z.div((function(e){return e.hide&&{display:"none"}})),de=(0,u.Z)(T.vs)({display:"flex",alignItems:"center",justifyContent:"space-between",paddingLeft:"var(--spacing)",paddingRight:"var(--spacing)"}),ue=u.Z.h3((function(e){return[{maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap","--tw-text-opacity":"1",color:"rgb(30 58 138 / var(--tw-text-opacity))"},e.firstElement&&{"@media (min-width: 1024px)":{maxWidth:"calc(100% - 35rem)"}}]})),pe={gap:"var(--gapSize) !important",paddingTop:"1.5rem",paddingBottom:"1.5rem","--gapSize":"1.5rem","--numberOfCards":"1.5","::-webkit-scrollbar-thumb":{backgroundColor:"rgb(0 0 0 / 0.2) !important"},"@media (min-width: 500px)":{"--numberOfCards":"2"},"@media (min-width: 640px)":{"--numberOfCards":"3"},"@media (min-width: 768px)":{"--gapSize":"2%","--numberOfCards":"2"},"@media (min-width: 1024px)":{"--numberOfCards":"3"},"@media (min-width: 1280px)":{"--numberOfCards":"4"},"@media (min-width: 1536px)":{"--numberOfCards":"5"},"@media (min-width: 1750px)":{"--gapSize":"1.5%","--numberOfCards":"6"},"@media (min-width: 1950px)":{"--gapSize":"1%","--numberOfCards":"7"}},fe=u.Z.div([{position:"relative",display:"flex",aspectRatio:"1/1.2",width:"calc((100% - (var(--gapSize) * (var(--numberOfCards) - 1))) / var(--numberOfCards))",flexShrink:"0",scrollSnapAlign:"start",flexDirection:"column",justifyContent:"space-between",overflow:"hidden",scrollBehavior:"smooth",borderRadius:"1.5rem",borderWidth:"1px","--tw-border-opacity":"1",borderColor:"rgb(209 213 219 / var(--tw-border-opacity))",backgroundSize:"175%",backgroundPosition:"left top",backgroundRepeat:"no-repeat","--tw-shadow":"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)","--tw-shadow-colored":"0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms",containerType:"inline-size",containerName:"CardContainer","::after":{content:"var(--tw-content)",position:"absolute",inset:"0px","--tw-bg-opacity":"1",backgroundColor:"rgb(239 68 68 / var(--tw-bg-opacity))","--tw-content":"''","--teacherBlue-500":"#537edc",background:"linear-gradient(to bottom, var(--teacherBlue-500) 0%, transparent 20%);"}},(0,d.iv)(o||(o=(0,a.Z)(["\n    background-image: url(",");\n  "])),M.TeacherBG)]),ge=(0,u.Z)(L.Z)({fontSize:"1.2rem","@container CardContainer (min-width: 250px)":{fontSize:"1.4rem"}}),he=u.Z.span({position:"absolute",top:"20%",overflow:"hidden",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:"2",paddingLeft:"1.5rem",paddingRight:"1.5rem",fontSize:"1.6rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(255 255 255 / var(--tw-text-opacity))","@container CardContainer (min-width: 250px)":{marginBottom:"2rem",paddingLeft:"2rem",paddingRight:"2rem",fontSize:"1.8rem"}}),me=u.Z.div([{position:"absolute",bottom:"0px",zIndex:"10",marginBottom:"-1px",display:"flex",height:"60%",width:"100%",flexDirection:"column",placeContent:"end",alignContent:"flex-end",alignItems:"flex-end",justifyContent:"space-between",borderBottomRightRadius:"0.75rem",borderBottomLeftRadius:"0.75rem",backgroundSize:"cover",paddingLeft:"var(--paddingLeftRight)",paddingRight:"var(--paddingLeftRight)",paddingBottom:"2rem",paddingTop:"calc(var(--paddingLeftRight) + var(--curveHeight))","--curveHeight":"8.5%","--paddingLeftRight":"1.5rem","@container CardContainer (min-width: 250px)":{"--paddingLeftRight":"2rem"}},(0,d.iv)(i||(i=(0,a.Z)(["\n    background-image: url(",");\n  "])),M.SpecialLessonWhiteMask)]),xe=u.Z.span({overflow:"hidden",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:"2",width:"100%",flexWrap:"wrap",textAlign:"start",fontSize:"1.2rem",fontWeight:"500","--tw-text-opacity":"1",color:"rgb(107 114 128 / var(--tw-text-opacity))","@container CardContainer (min-width: 205px)":{overflow:"hidden",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:"3"},"@container CardContainer (min-width: 250px)":{fontSize:"1.4rem"}}),we=u.Z.div({display:"flex",height:"100%",flexDirection:"column",alignItems:"center",justifyContent:"center"}),be={borderWidth:"0px","@media (min-width: 640px)":{"> div":{flexDirection:"column"}}},ve={fontSize:"1.6rem",fontWeight:"500","--tw-text-opacity":"1",color:"rgb(255 255 255 / var(--tw-text-opacity))"},ye=u.Z.div((function(e){return[{display:"flex",flexDirection:"column"},e.singlePage&&{paddingBottom:"var(--spacing)","@media (min-width: 1536px)":{paddingBottom:"2.5rem"}}]})),Ze=u.Z.button({zIndex:"50",borderRadius:"9999px",borderWidth:"1px",padding:"0.5rem",outlineColor:"#1E3A8A",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms",":hover":{"--tw-scale-x":"1.1","--tw-scale-y":"1.1",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"},"& svg":{height:"2rem",width:"2rem",stroke:"#1E3A8A"}}),Ce={flex:"1 1 0%"},Se={display:"flex",height:"100%",flexDirection:"column"},je={width:"100%"},ke={marginLeft:"auto",marginRight:"auto",height:"0px",width:"calc(100% - (var(--spacing) * 2))",flex:"1 1 0%",paddingLeft:"0px",paddingRight:"0px"}}}]);