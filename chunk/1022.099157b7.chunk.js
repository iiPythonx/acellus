"use strict";(self.webpackChunkacellus=self.webpackChunkacellus||[]).push([[1022],{69475:function(t,e,r){r.d(e,{Z:function(){return c}});var a,o=r(30168),i=r(43681),n=r(31222),l=r(2135),s=r(99717),d=r(46417);function c(t){var e=t.color,r=t.colorNum,a=t.isScrolling,o=t.returnText,i=t.ariaLabel,n=t.customStyles,l=t.onClick,s=t.fade,c=t.scrollStyles,x=t.sticky,h=t.svgStyles;return(0,d.jsxs)(p,{"data-testid":"return-container",onClick:l,customStyles:n,"aria-label":i,"data-tooltip":"title",isScrolling:a,fade:s,scrollStyles:c,sticky:x,children:[(0,d.jsx)(u,{color:e,colorNum:r,children:(0,d.jsx)(m,{isScrolling:a,svgStyles:h})}),o&&(0,d.jsx)(w,{"data-testid":"return-text",isScrolling:a,children:o})]})}var p=i.Z.button((function(t){var e=t.isScrolling,r=t.customStyles,a=t.scrollStyles,o=t.fade;return[{position:"fixed",left:"0px",top:"13rem",zIndex:"19",display:"flex",width:"min-content",alignItems:"center",justifyContent:"center",borderWidth:"1px",borderColor:"transparent",paddingTop:"0.75rem",paddingBottom:"0.75rem","--tw-backdrop-blur":"blur(8px)",backdropFilter:"var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"200ms","@media (min-width: 1024px)":{top:"15rem",marginLeft:"0px"}},e&&{borderRadius:"9999px",borderWidth:"2px","--tw-border-opacity":"0.3",borderColor:"rgb(255 255 255 / var(--tw-border-opacity))","--tw-bg-opacity":"0.4",backgroundColor:"rgb(255 255 255 / var(--tw-bg-opacity))",padding:"0.75rem","--tw-shadow":"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)","--tw-shadow-colored":"0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"},r&&r,a&&e&&a,!0===o&&!1===e?{opacity:"0"}:!0===o&&!0===e&&{opacity:"1"},t.sticky&&{position:"sticky",top:"13rem"}]})),u=(0,i.Z)(l.Link)(a||(a=(0,o.Z)(["\n  color: ",";\n"])),(function(t){var e=t.color,r=t.colorNum;return e&&r?s.xF[e][r]:{"--tw-text-opacity":"1",color:"rgb(17 24 39 / var(--tw-text-opacity))",":hover":{"--tw-scale-x":"1.1","--tw-scale-y":"1.1",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"}}})),m=(0,i.Z)(n.r)((function(t){var e=t.svgStyles;return[{height:"2rem",width:"2rem",cursor:"pointer",strokeWidth:"2",transitionProperty:"transform",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"200ms",":hover":{"--tw-scale-x":"1.1","--tw-scale-y":"1.1",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"},"@media (min-width: 1536px)":{height:"2.5rem",width:"2.5rem"}},e&&e]})),w=i.Z.p((function(t){return[{position:"absolute",marginLeft:"auto",marginRight:"auto",display:"none",transformOrigin:"left",paddingLeft:"2rem","--tw-text-opacity":"1",color:"rgb(41 93 204 / var(--tw-text-opacity))",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"200ms","@media (min-width: 500px)":{display:"block"}},t.isScrolling?{left:"2.5rem","--tw-scale-x":"0",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"}:{left:"0.25rem","--tw-scale-x":"1",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"}]}))},10800:function(t,e,r){r.d(e,{Z:function(){return d}});var a=r(43681),o=r(58467),i=r(11126),n=r(72363),l=r(69475),s=r(46417);function d(t){var e,r=t.header,a=t.subHeader,n=t.buttonText,d=t.onClick,b=t.path,y=t.children;window.innerWidth<=639||window.innerWidth>=640&&window.innerWidth<=1023?e=70:window.innerWidth>=1024&&(e=65);var f=(0,o.TH)(),k=(0,o.s0)(),S=(0,i.Z)(e);return(0,s.jsxs)(c,{isForm:f.pathname.includes("/add-student")||f.pathname.includes("/add-teacher")||f.pathname.includes("/year-end")||f.pathname.includes("/course-enrollment"),children:[(0,s.jsxs)(p,{children:[(0,s.jsx)(l.Z,{customStyles:u,onClick:function(){return k("/teacher/manage-users")},color:"gray",isScrolling:S,colorNum:700,ariaLabel:"Return",svgStyles:m,scrollStyles:w}),(0,s.jsx)(x,{role:"heading","aria-level":"2",children:r}),n&&(0,s.jsx)(g,{path:b,width:"100%",onClick:d,target:"_blank",download:"Template.csv","data-testid":"wrapper-button",children:n})]}),(0,s.jsx)(h,{buttonText:n,children:a}),n&&(0,s.jsx)(v,{path:b,width:"100%",onClick:d,target:"_blank",download:"Template.csv","data-testid":"wrapper-button",children:n}),y]})}var c=a.Z.div((function(t){return[{position:"relative",height:"100%"},t.isForm&&{maxWidth:"150rem"}]})),p=a.Z.div({display:"contents"}),u={position:"sticky",top:"8rem",display:"inline-block",padding:"0px","@media (min-width: 1024px)":{top:"8rem"},"@media (min-width: 1280px)":{top:"8rem"}},m={marginBottom:"-0.25rem",height:"2rem !important",width:"2rem !important"},w={padding:"0.5rem","& svg":{marginBottom:"0px"}},x=a.Z.span({marginLeft:"0.5rem",display:"inline-block",fontSize:"2rem",fontWeight:"700"}),h=a.Z.p((function(t){return[{"@media (min-width: 1024px)":{width:"60%"}},t.buttonText&&{maxWidth:"100%"}]})),v=(0,a.Z)(n.Z)({marginTop:"1.5rem",marginBottom:"1.5rem",display:"flex",alignItems:"center","@media (min-width: 1024px)":{display:"none"}}),g=(0,a.Z)(n.Z)({display:"none","@media (min-width: 1024px)":{float:"right",marginTop:"0.5rem",marginBottom:"0px",display:"inline-flex",width:"fit-content",alignItems:"center"}})},51022:function(t,e,r){r.r(e),r.d(e,{administrationLevels:function(){return j},default:function(){return Z}});var a=r(4942),o=r(1413),i=r(74165),n=r(15861),l=r(29439),s=r(43681),d=r(47012),c=r(47313),p=r(58467),u=r(77533),m=r(23305),w=r(72159),x=r(90628),h=r(20388),v=r(58500),g=r(10800),b=r(92109),y=r(72083),f=r(25067),k=r(81570),S=r(58229),C=r(46417),j=[{name:"Teacher",desc:"Access to all teaching features such as reposition and goal adjusting, but no enrollment functions.",value:0},{name:"Administrative Teacher",desc:"Access to teaching features as well as the ability to add or remove students from courses.",value:1},{name:"School Administrator",desc:"Access to managing teacher privileges, SIS Sync, and Schoolwide Reports.",value:2},{name:"Executive",desc:"Access to districtwide reports and Success Zone features.",value:3}];function Z(){var t,e,r,s,u,Z,M,O,U,_,J,V,G,K,Q,$=(0,p.s0)(),tt=(0,c.useRef)(),et=(0,c.useState)(),rt=(0,l.Z)(et,2),at=rt[0],ot=rt[1],it=(0,c.useState)(!1),nt=(0,l.Z)(it,2),lt=nt[0],st=nt[1],dt=(0,c.useState)(),ct=(0,l.Z)(dt,2),pt=ct[0],ut=ct[1],mt=(0,c.useState)(),wt=(0,l.Z)(mt,2),xt=wt[0],ht=wt[1],vt=(0,c.useState)([]),gt=(0,l.Z)(vt,2),bt=gt[0],yt=gt[1],ft=(0,c.useState)(!1),kt=(0,l.Z)(ft,2),St=kt[0],Ct=kt[1],jt=(0,c.useState)(),Zt=(0,l.Z)(jt,2),Tt=Zt[0],It=Zt[1],Ft=function(){var t=(0,n.Z)((0,i.Z)().mark((function t(e){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=It,t.next=3,(0,S.yo)(e);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Lt=(0,b.Z)((function(t,e){switch(t){case"firstName":if(!e.length)return{text:"Required",tooltip:"First name is required."};break;case"lastName":if(!e.length)return{text:"Required",tooltip:"Last name is required."};break;case"phone":if(!e.length)break;if(e.length<10)return{text:"Invalid",tooltip:"Phone number must be at least 10 digits."};if(!(0,S.aH)(e))return{text:"Invalid",tooltip:"Phone number is invalid."};break;case"email":if(!e.length)return{text:"Required",tooltip:"Email is required."};if(!(0,S.oP)(e))return{text:"Invalid",tooltip:"Email is invalid."};break;case"adminLevel":if(!e)return{text:"Required",tooltip:"Admin level is required."}}})),Nt=Lt.handleChange,Dt=Lt.handleFocus,zt=Lt.handleBlur,Bt=Lt.setIsDirty,Rt=Lt.fetcher,Wt=Lt.handleSubmit,Pt=Lt.errors,At=Lt.checkError,Et=Lt.clearErrors,Xt=function(t){ot((function(e){return(0,o.Z)((0,o.Z)({},e),{},(0,a.Z)({},t.target.name,t.target.value))})),Nt(t)};(0,c.useEffect)((function(){var t;Ct(!0),Rt.data instanceof k.Z||null!==(t=Rt.data)&&void 0!==t&&t.existingUser||(Array.from(tt.current.getElementsByTagName("input")).forEach((function(t){return t.value=""})),yt([]),ot(),It(),ut(null))}),[Rt.data]);return(0,C.jsxs)(C.Fragment,{children:[(null===(t=Rt.data)||void 0===t?void 0:t.existingUser)&&St&&(0,C.jsxs)(X,{children:["Email already in use",(0,C.jsx)(q,{onClick:function(){var t;return $("/teacher/manage-users/add-teacher?modal=profile&acellusID=".concat(null===(t=Rt.data)||void 0===t?void 0:t.acellusID))},children:"View Profile"}),(0,C.jsx)("button",{"aria-label":"Close",onClick:function(){return Ct(!1)},children:(0,C.jsx)(Y,{"aria-hidden":"true"})})]}),lt&&(0,C.jsx)(y.Z,{setShowModal:st,courses:bt,setCourses:yt}),(0,C.jsx)(g.Z,{buttonText:"Manage Course Access",onClick:function(){return st(!0)},header:"Add a Teacher",subHeader:"This information will be displayed to students.",children:(0,C.jsxs)(Rt.Form,{method:"POST",action:"/teacher/manage-users/add-teacher",onSubmit:Wt,ref:tt,children:[(0,C.jsxs)(E,{children:[(0,C.jsxs)(W,{children:[(0,C.jsx)(R,{children:"Photo"}),(0,C.jsx)(A,{children:(0,C.jsx)(d.J,{as:"div",children:function(t){var e=t.close;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(x.Z,{name:(0,S.Pp)(at),customStyles:L,avatarStyles:N,url:Tt}),(0,C.jsx)(m.Z,{task:Ft,close:e,buttonColor:"teacherBlue",buttonColorNum:600,popoverColor:"white",borderColor:"white"})]})}})})]}),(0,C.jsxs)(P,{"data-testid":"the-wrapper",children:[(0,C.jsx)("input",{type:"hidden",value:Tt,name:"profileImg"}),bt.map((function(t,e){return(0,C.jsx)("input",{type:"hidden",value:t.displayCourseID,name:"courses[".concat(e,"]")},t.displayCourseID)})),(0,C.jsx)(D,{children:(0,C.jsx)(h.Z,{labelText:"Salutation",name:"salutation",data:S.DD,selected:void 0!==xt?xt:S.DD[0],dropDownStyle:H,onChange:function(t,e,r){ht(t),Et(r),Bt(!0)},error:null===(e=Pt.salutation)||void 0===e?void 0:e.text,errorTooltip:null===(r=Pt.salutation)||void 0===r?void 0:r.tooltip})}),(0,C.jsx)(D,{children:(0,C.jsx)(w.II,{name:"firstName",type:"text",labelText:"First Name",error:null===(s=Pt.firstName)||void 0===s?void 0:s.text,errorTooltip:null===(u=Pt.firstName)||void 0===u?void 0:u.tooltip,onChange:Xt,onBlur:zt,onFocus:Dt,placeholder:"First Name"})}),(0,C.jsx)(D,{children:(0,C.jsx)(w.II,{name:"middleName",type:"text",labelText:"Middle Name",onBlur:zt,onFocus:Dt,placeholder:"Middle Name"})}),(0,C.jsx)(D,{children:(0,C.jsx)(w.II,{name:"lastName",type:"text",labelText:"Last Name",error:null===(Z=Pt.lastName)||void 0===Z?void 0:Z.text,errorTooltip:null===(M=Pt.lastName)||void 0===M?void 0:M.tooltip,onChange:Xt,onBlur:zt,onFocus:Dt,placeholder:"Last Name"})}),(0,C.jsx)(B,{children:(0,C.jsx)(w.II,{name:"title",type:"text",labelText:"Title",error:null===(O=Pt.title)||void 0===O?void 0:O.text,errorTooltip:null===(U=Pt.title)||void 0===U?void 0:U.tooltip,onChange:Nt,onBlur:zt,onFocus:Dt,placeholder:"Title"})}),(0,C.jsx)(B,{children:(0,C.jsx)(w.II,{name:"phone",type:"tel",labelText:"Phone",error:null===(_=Pt.phone)||void 0===_?void 0:_.text,errorTooltip:null===(J=Pt.phone)||void 0===J?void 0:J.tooltip,onChange:Nt,onBlur:zt,onFocus:Dt,placeholder:"Phone Number"})}),(0,C.jsx)(B,{children:(0,C.jsx)(w.II,{name:"email",type:"email",labelText:"Email",error:null===(V=Pt.email)||void 0===V?void 0:V.text,errorTooltip:null===(G=Pt.email)||void 0===G?void 0:G.tooltip,onChange:Nt,onBlur:zt,onFocus:Dt,placeholder:"Email Address"})}),(0,C.jsx)(z,{children:(0,C.jsx)(h.Z,{selected:pt,name:"adminLevel",data:j,error:null===(K=Pt.adminLevel)||void 0===K?void 0:K.text,errorTooltip:null===(Q=Pt.adminLevel)||void 0===Q?void 0:Q.tooltip,dropDownStyle:T,customOptionStyles:I,customIconStyles:F,"data-testid":"dropdown",labelText:"Admin Level",placeholder:"Select an Administrator Level",onClose:function(t,e,r){return At(r,e)},onOpen:function(t,e,r){return Et(r)},onChange:function(t,e,r){ut(t),Et(r),Bt(!0)}})})]})]}),(0,C.jsx)(v.ZL,{isSubmitting:"submitting"===Rt.state,error:(0,f.isErrorResponse)(Rt.data)||!(0,S.z)(Pt),noBottomPadding:!0})]})})]})}var T={position:"absolute",zIndex:"20",marginTop:"0.5rem",maxHeight:"26rem",width:"100%",overflow:"auto",borderRadius:"0.375rem",borderWidth:"1px","--tw-border-opacity":"1",borderColor:"rgb(209 213 219 / var(--tw-border-opacity))","--tw-bg-opacity":"1",backgroundColor:"rgb(255 255 255 / var(--tw-bg-opacity))",padding:"0px",fontSize:"1.4rem","--tw-shadow":"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)","--tw-shadow-colored":"0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)","@media (min-width: 640px)":{fontSize:"1.6rem"}},I=function(t){var e=t.active;return[{borderRadius:"0px",borderBottomWidth:"1px","--tw-border-opacity":"1",borderColor:"rgb(229 231 235 / var(--tw-border-opacity))","--tw-bg-opacity":"1",backgroundColor:"rgb(255 255 255 / var(--tw-bg-opacity))",padding:"2rem",fontSize:"1.4rem","--tw-text-opacity":"1",color:"rgb(107 114 128 / var(--tw-text-opacity))",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms",":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgb(55 106 215 / var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgb(199 215 245 / var(--tw-text-opacity))"}},e&&{"--tw-bg-opacity":"1",backgroundColor:"rgb(55 106 215 / var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgb(199 215 245 / var(--tw-text-opacity))"},e?{":hover":{"--tw-text-opacity":"1",color:"rgb(199 215 245 / var(--tw-text-opacity))"},"> div:first-of-type":{"--tw-text-opacity":"1",color:"rgb(255 255 255 / var(--tw-text-opacity))"}}:{"> div:first-of-type":{"--tw-text-opacity":"1",color:"rgb(31 41 55 / var(--tw-text-opacity))"}}]},F=function(t){return t.active&&{"--tw-text-opacity":"1",color:"rgb(255 255 255 / var(--tw-text-opacity))"}},L={height:"14rem",width:"14rem"},N={borderStyle:"none"},D=s.Z.div({gridColumn:"span 12 / span 12","@media (min-width: 768px)":{gridColumn:"span 6 / span 6"},"@media (min-width: 1024px)":{gridColumn:"span 3 / span 3"},"@media (min-width: 1280px)":{gridColumn:"span 2 / span 2"}}),z=s.Z.div({gridColumn:"span 12 / span 12","@media (min-width: 1024px)":{gridColumn:"span 6 / span 6"},"@media (min-width: 1280px)":{gridColumn:"span 4 / span 4"}}),B=s.Z.div({gridColumn:"span 12 / span 12","@media (min-width: 768px)":{gridColumn:"span 6 / span 6"},"@media (min-width: 1280px)":{gridColumn:"span 4 / span 4"}}),R=s.Z.label({marginLeft:"auto",marginRight:"auto",display:"block",fontSize:"1.4rem",fontWeight:"500","--tw-text-opacity":"1",color:"rgb(31 41 55 / var(--tw-text-opacity))"}),W=s.Z.div({marginLeft:"auto",marginRight:"auto",marginTop:"2.5rem",alignSelf:"flex-start"}),P=(0,s.Z)(v.n5)({borderWidth:"0px"}),A=s.Z.div({position:"relative",zIndex:"10",marginLeft:"auto",marginRight:"auto",width:"fit-content","@media (min-width: 768px)":{margin:"0px"}}),E=s.Z.div({display:"flex",maxWidth:"150rem",flexDirection:"column",alignItems:"center",gap:"2.5rem",borderBottomWidth:"1px","@media (min-width: 1280px)":{flexDirection:"row"},"@media (min-width: 1280px) and (max-width: 1387px)":{flexDirection:"column"}}),X=s.Z.div({marginBottom:"2.5rem",display:"flex",width:"100%",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",borderRadius:"0.75rem","--tw-bg-opacity":"1",backgroundColor:"rgb(223 232 249 / var(--tw-bg-opacity))",padding:"1.25rem",fontSize:"1.2rem",fontWeight:"600","@media (min-width: 500px)":{fontSize:"1.6rem"}}),Y=(0,s.Z)(u.r)({height:"2.5rem",transitionProperty:"transform",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"200ms",":hover":{"--tw-scale-x":"1.05","--tw-scale-y":"1.05",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"}}),q=s.Z.button({order:"3",marginTop:"1.25rem",display:"flex",width:"100%",alignItems:"center",justifyContent:"space-around",borderRadius:"0.5rem","--tw-border-opacity":"1",borderColor:"rgb(229 231 235 / var(--tw-border-opacity))","--tw-bg-opacity":"1",backgroundColor:"rgb(255 255 255 / var(--tw-bg-opacity))",paddingLeft:"1.5rem",paddingRight:"1.5rem",paddingTop:"1rem",paddingBottom:"1rem",fontSize:"1.4rem","--tw-text-opacity":"1",color:"rgb(107 114 128 / var(--tw-text-opacity))","--tw-shadow":"0 1px 2px 0 rgb(0 0 0 / 0.05)","--tw-shadow-colored":"0 1px 2px 0 var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"200ms",":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgb(243 244 246 / var(--tw-bg-opacity))"},"@media (min-width: 640px)":{order:"2",margin:"auto",width:"auto"}}),H={zIndex:"50"}}}]);