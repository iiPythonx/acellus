"use strict";(self.webpackChunkacellus=self.webpackChunkacellus||[]).push([[3313,2466],{44505:function(t,e,r){r.d(e,{r:function(){return d}});var i,n=r(47313),o=["title","titleId"];function a(){return a=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},a.apply(this,arguments)}function s(t,e){if(null==t)return{};var r,i,n=function(t,e){if(null==t)return{};var r,i,n={},o=Object.keys(t);for(i=0;i<o.length;i++)r=o[i],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function l(t,e){var r=t.title,l=t.titleId,d=s(t,o);return n.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",ref:e,"aria-labelledby":l},d),r?n.createElement("title",{id:l},r):null,i||(i=n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"})))}var d=n.forwardRef(l);r.p},90219:function(t,e,r){r.d(e,{ZP:function(){return p}});var i,n=r(30168),o=r(29439),a=r(43681),s=r(47313),l=r(58222),d=r(77533),c=r(44505),u=r(46417);function p(t){var e=t.course,r=t.link,i=void 0!==r&&r,n=t.remove,a=void 0===n?function(){}:n,l=t.add,d=void 0===l?function(){}:l,c=t.disabled,p=void 0!==c&&c,g=t.small,f=void 0!==g&&g,v=(0,s.useState)(!0),b=(0,o.Z)(v,2),w=b[0],x=b[1];return(0,u.jsx)(m,{disabled:p,small:f,children:(0,u.jsx)(h,{active:w,link:i,add:function(){x(!0),d(e)},remove:function(){x(!1),a(e)},course:e})})}function h(t){var e=t.course,r=t.link,i=t.add,n=t.remove,o=t.active;return(0,u.jsxs)(g,{children:[(0,u.jsx)(f,{children:e.courseName}),(0,u.jsxs)(v,{children:[r&&(0,u.jsx)(w,{href:r,target:"_blank","aria-label":"Details","data-testid":"course-details","data-tooltip":"title",children:(0,u.jsx)(x,{"aria-hidden":"true"})}),o?(0,u.jsx)(b,{type:"button","aria-label":"Remove","data-testid":"remove-course","data-tooltip":"title",onClick:n,children:(0,u.jsx)(y,{"aria-hidden":"true"})}):(0,u.jsx)(b,{type:"button","aria-label":"Add","data-testid":"add-course","data-tooltip":"title",onClick:i,children:(0,u.jsx)(j,{"aria-hidden":"true"})})]})]})}var m=a.Z.div(i||(i=(0,n.Z)(["\n  ","\n  ","\n  ","\n"])),{display:"flex",width:"100%",alignItems:"center",justifyContent:"space-between",borderRadius:"0.75rem","--tw-bg-opacity":"1",backgroundColor:"rgb(199 215 245 / var(--tw-bg-opacity))",padding:"0.5rem",paddingLeft:"1rem",paddingRight:"0.75rem",fontSize:"1.4rem",fontWeight:"600","--tw-text-opacity":"1",color:"rgb(55 106 215 / var(--tw-text-opacity))","@media (min-width: 768px)":{fontSize:"1.6rem"},"@media (min-width: 1280px)":{padding:"0.75rem",paddingLeft:"1.5rem",paddingRight:"1.25rem"}},(function(t){return t.disabled&&{"--tw-grayscale":"grayscale(100%)",filter:"var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"}}),(function(t){return t.small&&{"@media (min-width: 500px)":{width:"fit-content"}}})),g=a.Z.div({display:"flex",width:"100%",alignItems:"center",justifyContent:"space-between",gap:"1rem"}),f=a.Z.p({"--tw-text-opacity":"1",color:"rgb(55 106 215 / var(--tw-text-opacity))"}),v=a.Z.div({display:"flex",flexDirection:"row",gap:"1rem"}),b=a.Z.button({position:"relative",borderRadius:"0.5rem",padding:"0.25rem",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"200ms",":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgb(162 187 236 / var(--tw-bg-opacity))"},":hover svg":{"--tw-text-opacity":"1",color:"rgb(41 93 204 / var(--tw-text-opacity))"}}),w=a.Z.a({position:"relative",borderRadius:"0.5rem","--tw-text-opacity":"1",color:"rgb(55 106 215 / var(--tw-text-opacity))",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"200ms",":hover":{backgroundColor:"rgb(255 255 255 / 0.2)"}}),x=(0,a.Z)(l.r)({marginTop:"auto",marginBottom:"auto",height:"2rem",width:"2rem",strokeWidth:"2"}),y=(0,a.Z)(d.r)({marginTop:"auto",marginBottom:"auto",height:"1.75rem",width:"1.75rem",strokeWidth:"2","@media (min-width: 1024px)":{height:"2rem",width:"2rem"}}),j=(0,a.Z)(c.r)({marginTop:"auto",marginBottom:"auto",height:"1.75rem",width:"1.75rem",strokeWidth:"2","@media (min-width: 1024px)":{height:"2rem",width:"2rem"}});a.Z.span({textAlign:"center",fontSize:"1.2rem","--tw-text-opacity":"1",color:"rgb(55 65 81 / var(--tw-text-opacity))"}),a.Z.div({display:"flex",width:"100%",alignItems:"center",justifyContent:"space-between"})},82466:function(t,e,r){r.d(e,{ZP:function(){return c},ib:function(){return u},ol:function(){return h},tK:function(){return m},vs:function(){return C}});var i=r(43681),n=r(58467),o=r(2135),a=r(77533),s=r(11126),l=r(25685),d=r(46417);function c(t){var e=t.bgColor,r=t.children,i=t.getConfirmation,o=t.headerStyles,a=t.noPaddingX,s=t.onClose,c=t.small,p=t.modalBaseContentStyles,g=t.contentWrapperStyles,f=t.customHeaderContent,w=t.title,x=t.customButtons,y=t.modalStyles,j=(0,n.TH)().search.includes("write-a-book");return(0,d.jsxs)(l.Z,{bgColor:e,modalBaseContentStyles:p,getConfirmation:i,onClose:s,small:c,modalStyles:y,children:[w&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(u,{isStudDetails:!0,headerStyles:o,bgColor:e,children:(0,d.jsxs)(v,{children:[(0,d.jsx)("h1",{children:w}),(0,d.jsxs)(b,{children:[x,(0,d.jsx)(h,{onClick:s}),(0,d.jsx)(m,{onClick:s})]})]})}),(0,d.jsx)("div",{children:f})]}),(0,d.jsx)(C,{id:"contentWrapper",customStyles:g,noPaddingX:a,small:c,isBookApprovalModal:j,children:r})]})}function u(t){var e=t.headerStyles,r=t.bgColor,i=t.showShadow,n=t.hideBorder,o=t.children,a=(0,s.Z)(0,"modal");return(0,d.jsx)(p,{isScrolling:a,hideBorder:n,showShadow:i,headerStyles:e,bgColor:r,children:(0,d.jsx)(j,{children:o})})}var p=i.Z.div((function(t){var e=t.headerStyles,r=t.bgColor,i=t.isScrolling,n=t.showShadow;return[{position:"sticky",top:"0px",zIndex:"40",paddingLeft:"var(--spacing)",paddingRight:"var(--spacing)",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms"},!t.hideBorder&&{borderBottomWidth:"1px"},e||(r||{"--tw-border-opacity":"1",borderColor:"rgb(255 255 255 / var(--tw-border-opacity))",backgroundColor:"rgb(255 255 255 / 80)"}),i&&n?{borderBottomWidth:"1px",borderColor:"rgb(0 0 0 / 0.1)","--tw-shadow":"0 1px 2px 0 rgb(0 0 0 / 0.05)","--tw-shadow-colored":"0 1px 2px 0 var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)","--tw-backdrop-blur":"blur(16px)",backdropFilter:"var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)"}:{"--tw-backdrop-blur":"blur(16px)",backdropFilter:"var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)"}]}));function h(t){var e=t.onClick,r=(0,n.TH)();return e?(0,d.jsx)(w,{onClick:e,"aria-label":"Close Modal","data-tooltip":"title",children:(0,d.jsx)(y,{"aria-hidden":"true"})}):(0,d.jsx)(g,{to:r.pathname,onClick:e,"aria-label":"Close Modal","data-tooltip":"title",children:(0,d.jsx)(y,{"aria-hidden":"true"})})}function m(t){var e=t.onClick,r=(0,n.TH)();return e?(0,d.jsx)(x,{onClick:e,"aria-label":"Close Modal","data-tooltip":"title",children:(0,d.jsx)(y,{"aria-hidden":"true"})}):(0,d.jsx)(f,{to:r.pathname,onClick:e,"aria-label":"Close Modal","data-tooltip":"title",children:(0,d.jsx)(y,{"aria-hidden":"true"})})}var g=(0,i.Z)(o.Link)({position:"relative",zIndex:"50",display:"none","@media (min-width: 640px)":{display:"block"}}),f=(0,i.Z)(o.Link)({position:"relative",display:"block","@media (min-width: 640px)":{display:"none"}}),v=i.Z.div({display:"flex",width:"100%",justifyContent:"space-between"}),b=i.Z.div({display:"flex",gap:"1rem"}),w=i.Z.button({position:"relative",zIndex:"50",display:"none","@media (min-width: 640px)":{display:"block"}}),x=i.Z.button({position:"relative",display:"block","@media (min-width: 640px)":{display:"none"}}),y=(0,i.Z)(a.r)({height:"2.25rem",width:"2.25rem",strokeWidth:"2px","--tw-text-opacity":"1",color:"rgb(107 114 128 / var(--tw-text-opacity))",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms",":hover":{"--tw-text-opacity":"1",color:"rgb(75 85 99 / var(--tw-text-opacity))"}}),j=(i.Z.div({marginLeft:"auto",marginRight:"auto",width:"100%",paddingLeft:"2.5rem",paddingRight:"2.5rem","@media (min-width: 1280px)":{paddingLeft:"5rem",paddingRight:"5rem"}}),i.Z.div({display:"flex",width:"100%",flexDirection:"column",justifyContent:"space-between",paddingTop:"1rem",paddingBottom:"1rem","@media (min-width: 640px)":{flexDirection:"row",paddingTop:"1.5rem",paddingBottom:"1.5rem"},"@media (min-width: 1280px)":{paddingTop:"2rem",paddingBottom:"2rem"}})),C=i.Z.div((function(t){var e=t.noPaddingX,r=t.small;return[!e&&!r&&{paddingLeft:"var(--spacing)",paddingRight:"var(--spacing)"},t.customStyles,t.isBookApprovalModal&&{height:"100%"}]}))},92755:function(t,e,r){r.d(e,{Z:function(){return l}});var i=r(29439),n=r(47313),o=r(7752),a=r(81517),s=r(58229);function l(t){var e=t.addCoursePopupState,r=t.courseKey,l=(t.courseName,t.courses),d=t.deleteCourse,c=t.doNotFilter,u=t.doNotSearch,p=t.gradeLevel,h=t.inUse,m=t.noSubjects,g=t.setAddCoursePopupState,f=t.subject,v=(0,a.Av)(),b=null===v||void 0===v?void 0:v.teacher.adminLevel,w=(0,n.useState)((null===e||void 0===e?void 0:e.gradeFilter)||p),x=(0,i.Z)(w,2),y=x[0],j=x[1],C=(0,n.useState)((null===e||void 0===e?void 0:e.subjectFilter)||""),k=(0,i.Z)(C,2),Z=k[0],S=k[1],D=(0,n.useState)([]),I=(0,i.Z)(D,2),R=I[0],F=I[1],A=(0,n.useState)(null===e||void 0===e?void 0:e.query),P=(0,i.Z)(A,2),B=P[0],T=P[1],L=(0,n.useState)(!1),z=(0,i.Z)(L,2),W=z[0],M=z[1],O=(0,n.useState)((null===e||void 0===e?void 0:e.searchResults)||null),E=(0,i.Z)(O,2),N=E[0],H=E[1],U=(0,n.useState)(!1),q=(0,i.Z)(U,2),G=q[0],Q=q[1],X=(0,n.useState)(null===e||void 0===e?void 0:e.newCourse),K=(0,i.Z)(X,2),Y=K[0],_=K[1],J=(0,n.useCallback)((function(t){if(!t.active)return!1;if(!t.ageRange)return!1;if((null===c||void 0===c||!c.some((function(e){return e.displayCourseID===t.displayCourseID})))&&l.find((function(e){return r?e[1].displayCourseID===t.displayCourseID&&e[0]!==r:e.displayCourseID===t.displayCourseID})))return!1;var e=y||r&&p;if(!["-","",void 0].includes(e)){var i=t.ageRange.split("-"),n=i[0],o=i[1]||i[0],a=(0,s.zv)(e);return a>=n&&a<=o}return!0}),[r,l,c,y,p]),V=(0,n.useCallback)((function(t){var e,r,i,n=new AbortController,a={inUse:h},s=Z||f;return""!==(null===t||void 0===t||null===(e=t.trim)||void 0===e?void 0:e.call(t))&&B&&(a.search=null===(r=B.trim)||void 0===r?void 0:r.call(B)),s&&"All"!==s?(a.subject=s,a.limit=100):null!==B&&void 0!==B&&null!==(i=B.trim)&&void 0!==i&&i.call(B)||(a.limit=400),M(!0),o.Z.get(a,n.signal).then((function(t){var e;return H(null===(e=t.courses)||void 0===e?void 0:e.sort((function(t,e){var r,i,n,o;if(!h){if(t.inUse&&!e.inUse)return-1;if(!t.inUse&&e.inUse)return 1}return t.starred&&!e.starred?-1:!t.starred&&e.starred?1:null!==(r=t.ageRange)&&void 0!==r&&r.includes("-")||null===(i=e.ageRange)||void 0===i||!i.includes("-")?null===(n=t.ageRange)||void 0===n||!n.includes("-")||null!==(o=e.ageRange)&&void 0!==o&&o.includes("-")?t.courseNumber<e.courseNumber?-1:t.courseNumber>e.courseNumber?1:0:1:-1})))})).catch((function(t){3948!==t.status&&toast.error("Course Search Failed\n".concat(t.message)),H(null)})).finally((function(){return M(!1)})),function(){return n.abort()}}),[h,Z,f,B]);(0,n.useEffect)((function(){if(!u&&!m){var t=new AbortController,e=y||r&&p;return o.Z.getSubjects(e?(0,s.zv)(e):void 0,t.signal).then((function(t){var e=["Math","Language Arts/Reading","Science","Social Studies"].filter((function(e){return t.subjects.includes(e)})),i=t.subjects.filter((function(t){return t&&!e.includes(t)})),n=e.concat(i);n.unshift("All");var o=Object.fromEntries(l);"P"!==p||y||!o[r].subject||o[r].displayCourseID?(n.includes(Z||f)||S("All"),F(n)):n.includes(o[r].subject)?(n.includes(Z)||S("All"),F(n)):d(r)})).catch((function(t){3948!==t.status&&toast.error("Error getting subjects.\n".concat(t.message))})),function(){return t.abort()}}}),[r,d,u,y,p,m,f]),(0,n.useEffect)((function(){if(!u)return V()}),[u,Z]);var $=(0,n.useMemo)((function(){return null===N||void 0===N?void 0:N.filter(J)}),[N,J]);return{adminLevel:b,gradeFilter:y,setGradeFilter:j,subjectFilter:Z,setSubjectFilter:S,subjects:R,query:B,setQuery:T,showResults:G,setShowResults:Q,search:V,loading:W,searchResults:N,filteredResults:$,newCourse:Y,setNewCourse:_,saveState:function(){return null===g||void 0===g?void 0:g({gradeFilter:y,subjectFilter:Z,query:B,searchResults:N,newCourse:Y})}}}},72083:function(t,e,r){r.d(e,{A:function(){return C},Z:function(){return k}});var i=r(93433),n=r(29439),o=r(43681),a=r(47313),s=r(58467),l=r(35541),d=r(64687),c=r(79250),u=r(20388),p=r(45952),h=r(46959),m=r(13797),g=r(90219),f=r(92755),v=r(57830),b=r(58229),w=r(35667),x=r(56766),y=r(46417),j=b.ny.slice(0,13);j.unshift({name:"All",value:""}),j.push({name:"12th Grade+",value:"12"});var C=50;function k(t){var e=t.acellusID,r=t.isMyCourses,o=t.setShowModal,d=t.courses,b=t.setCourses,k=(0,a.useState)(!!e),P=(0,n.Z)(k,2),B=P[0],T=P[1],L=(0,a.useState)(d||[]),z=(0,n.Z)(L,2),W=z[0],M=z[1],O=(0,a.useState)([]),E=(0,n.Z)(O,2),N=E[0],H=E[1],U=(0,a.useState)(!1),q=(0,n.Z)(U,2),G=q[0],Q=q[1],X=(0,a.useState)(!1),K=(0,n.Z)(X,2),Y=K[0],_=K[1],J=e?[N,H]:[d,b],V=(0,n.Z)(J,2),$=V[0],tt=V[1],et=$.length>C?0:C-$.length,rt=(0,a.useState)(!1),it=(0,n.Z)(rt,2),nt=it[0],ot=it[1],at=(0,f.Z)({courses:$,addCoursePopupState:{subjectFilter:"All"},doNotFilter:$}),st=at.setGradeFilter,lt=at.subjectFilter,dt=at.setSubjectFilter,ct=at.subjects,ut=at.query,pt=at.setQuery,ht=at.loading,mt=at.searchResults,gt=at.showResults,ft=at.setShowResults,vt=at.search,bt=at.filteredResults,wt=(0,a.useMemo)((function(){return null===bt||void 0===bt?void 0:bt.filter((function(t){return!$.some((function(e){return e.displayCourseID===t.displayCourseID}))}))}),[$,bt]),xt=(0,a.useRef)();(0,a.useEffect)((function(){if(e){var t=new AbortController;return l.Z.get(e,"active",t.signal).then((function(t){M(t.courses),tt(t.courses)})).catch((function(){return toast.error("Error loading courses")})).finally((function(){return T(!1)})),function(){return t.abort()}}}),[e,tt]);var yt=function(t){tt((function(e){return e.filter((function(e){return e.displayCourseID!==t.displayCourseID}))}))},jt=(0,s.xW)().revalidate;return(0,y.jsxs)(x.Z,{header:"Manage Course Access",subHeader:"Modify which courses ".concat(r?"you manage":"this teacher manages","."),closeFunc:function(){var t=$.length!==W.length||$.length>0&&$.some((function(t){return!W.find((function(e){return e.displayCourseID===t.displayCourseID}))}));e&&t?toast.confirm("Exit without saving?",(function(t){t&&o(!1)})):(t&&tt(W),o(!1))},saveFunc:e?function(){_(!1);var t=$.filter((function(t){return!W.find((function(e){return e.displayCourseID===t.displayCourseID}))})),r=W.filter((function(t){return!$.find((function(e){return e.displayCourseID===t.displayCourseID}))}));t.length+r.length!==0&&(Q(!0),Promise.all((0,i.Z)(r.map((function(t){return l.Z.delete(e,t.displayCourseID)})))).then((function(){return Promise.all((0,i.Z)(t.map((function(t){return l.Z.post(e,t.displayCourseID)}))))})).then((function(){M($),jt()})).catch((function(t){_(!0),toast.error(t.message||"Error changing course access")})).finally((function(){return Q(!1)})))}:function(){return o(!1)},isSubmitting:G,error:Y,counter:et<=C/2&&et,shake:nt,hasCancelButton:!0,children:[(0,y.jsxs)(S,{children:[(0,y.jsxs)(R,{children:[(0,y.jsx)(F,{children:"Grade:"}),(0,y.jsx)(I,{"data-testid":"input",children:(0,y.jsx)(u.Z,{data:j,getLabel:function(t){return"".concat(t.name)},hoverStyles:{"--tw-bg-opacity":"1",backgroundColor:"rgb(55 106 215 / var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgb(255 255 255 / var(--tw-text-opacity))"},onChange:function(t){st(t.value),!mt&&t.value&&vt()},dropDownStyle:{zIndex:"50"}})})]}),(0,y.jsxs)(R,{children:[(0,y.jsx)(F,{children:"Subject:"}),(0,y.jsx)(I,{"data-testid":"input",children:(0,y.jsx)(u.Z,{data:ct,selected:lt,getLabel:function(t){return"".concat(t)},hoverStyles:{"--tw-bg-opacity":"1",backgroundColor:"rgb(55 106 215 / var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgb(255 255 255 / var(--tw-text-opacity))"},onChange:dt,dropDownStyle:{zIndex:"50"}})})]})]}),(0,y.jsx)("hr",{}),(0,y.jsxs)(Z,{children:[(0,y.jsxs)(R,{children:[(0,y.jsx)(p.Z,{targetRef:xt,isStatic:!0,children:(0,y.jsx)(p.k,{children:"Grayed out courses do not have any students enrolled in them."})}),(0,y.jsxs)(F,{children:["Courses:",(0,y.jsx)(D,{onMouseEnter:function(t){return xt.current=t.target},"aria-hidden":"true"})]}),(0,y.jsx)(I,{children:(0,y.jsx)(m.ZP,{comboStyle:"white",format:"course",keepFocus:!0,keepOpen:!0,loading:ht,onFocus:function(){return ft(!0)},onHide:function(){return ft(!1)},onSearch:vt,onSelection:function(t){if($.length>=C&&!$.some((function(e){return e.displayCourseID===t.displayCourseID})))return ot(!0),void setTimeout((function(){return ot(!1)}),3e3);tt((function(e){return e.some((function(e){return e.displayCourseID===t.displayCourseID}))?e.filter((function(e){return e.displayCourseID!==t.displayCourseID})):[].concat((0,i.Z)(e),[t])}))},placeholder:"Add a course",query:ut,results:bt,selection:$,setQuery:pt,showResults:gt,z:50})}),(null===wt||void 0===wt?void 0:wt.length)>0&&wt.length+$.length<=C&&(0,y.jsx)(h.Z,{color:"teacherBlue",colorNum:600,onClick:function(){return tt((function(t){return t.concat(bt)}))},children:"Add ".concat(wt.length>1?"all ":"").concat((0,v.bh)(wt.length,"course"))})]}),B?(0,y.jsx)(c.Z,{}):(0,y.jsxs)(A,{courses:$,children:[null===$||void 0===$?void 0:$.map((function(t){return(0,y.jsx)(g.ZP,{small:!0,remove:yt,course:t},t.displayCourseID)})),0===(null===$||void 0===$?void 0:$.length)&&(0,y.jsx)(w.Z,{title:"All Courses",subtext:"".concat(r?"You are":"This teacher is"," currently recieving notifications for all students in the school. Adding courses above will limit ").concat(r?"your":"their","  access to the selected course(s).")})]})]})]})}var Z=o.Z.div({padding:"var(--spacing)","@media (min-width: 640px)":{paddingLeft:"3rem",paddingRight:"3rem",paddingTop:"2.5rem",paddingBottom:"2.5rem"}}),S=o.Z.div({display:"flex",flexDirection:"column",gap:"3rem",padding:"var(--spacing)","@media (min-width: 640px)":{paddingLeft:"3rem",paddingRight:"3rem",paddingTop:"2.5rem",paddingBottom:"2.5rem"}}),D=(0,o.Z)(d.r)({display:"flex",height:"2rem",width:"2rem",cursor:"pointer","--tw-text-opacity":"1",color:"rgb(156 163 175 / var(--tw-text-opacity))",transitionProperty:"color, background-color, border-color, text-decoration-color, fill, stroke",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"200ms",":hover":{"--tw-text-opacity":"1",color:"rgb(41 93 204 / var(--tw-text-opacity))"},"@media (min-width: 1280px)":{cursor:"default"}}),I=o.Z.div({width:"100%","@media (min-width: 640px)":{width:"40%"}}),R=o.Z.div({display:"flex",flexDirection:"column",gap:"0.5rem","@media (min-width: 640px)":{flexDirection:"row",alignItems:"center",gap:"1rem"}}),F=o.Z.span({display:"flex",width:"13rem",gap:"0.5rem",fontSize:"1.6rem",fontWeight:"600","--tw-text-opacity":"1",color:"rgb(107 114 128 / var(--tw-text-opacity))"}),A=o.Z.div((function(t){var e=t.courses;return[0===(null===e||void 0===e?void 0:e.length)?{marginTop:"0px",display:"none"}:{marginTop:"1.5rem","@media (min-width: 768px)":{marginTop:"2rem"},"@media (min-width: 1280px)":{marginTop:"2.5rem"}},{display:"flex",maxHeight:"13rem",flexDirection:"row",flexWrap:"wrap",gap:"1rem",overflow:"scroll","@media (min-width: 640px)":{maxHeight:"32rem"}}]}))},56766:function(t,e,r){r.d(e,{Z:function(){return d}});var i=r(43681),n=r(77533),o=r(46959),a=r(82466),s=r(72083),l=r(46417);function d(t){var e=t.header,r=t.subHeader,i=t.buttonLabel,n=void 0===i?"Save":i,d=t.closeFunc,b=t.saveFunc,w=t.isSubmitting,x=t.error,y=t.counter,j=t.shake,C=t.hasCancelButton,k=t.buttonWrapperStyles,Z=t.contentWrapperStyles,S=t.children;return(0,l.jsxs)(a.ZP,{small:!0,onClose:d,contentWrapperStyles:Z,children:[(0,l.jsxs)(h,{children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:e}),(0,l.jsx)("p",{children:r})]}),(0,l.jsx)(c,{"aria-label":"Close","data-tooltip":"title",onClick:d,"data-testid":"close-button",children:(0,l.jsx)(u,{"aria-hidden":"true"})})]}),(0,l.jsx)(p,{}),S,(0,l.jsx)(p,{}),(0,l.jsxs)(m,{customStyles:k,counter:y,children:["number"===typeof y&&(0,l.jsxs)(g,{shake:j,children:[y,"/",s.A," courses remaining"]}),(0,l.jsxs)(f,{children:[(0,l.jsx)(o.Z,{color:"teacherBlue",colorNum:600,width:v,onClick:b,isSubmitting:w,error:x,children:n}),C&&(0,l.jsx)(o.Z,{onClick:d,width:{width:"100%","@media (min-width: 640px)":{width:"fit-content"}},children:"Cancel"})]})]})]})}var c=i.Z.button({height:"2rem","--tw-text-opacity":"1",color:"rgb(107 114 128 / var(--tw-text-opacity))",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms",":hover":{"--tw-text-opacity":"1",color:"rgb(75 85 99 / var(--tw-text-opacity))"}}),u=(0,i.Z)(n.r)({height:"2.5rem",width:"2.5rem",strokeWidth:"2"}),p=i.Z.hr({minHeight:"2px",flexShrink:"0"}),h=i.Z.div({display:"flex",justifyContent:"space-between",padding:"var(--smallModalPadding)"}),m=i.Z.div((function(t){return[{display:"flex",flexDirection:"column",alignItems:"center",gap:"2.5rem",padding:"var(--smallModalPadding)","@media (min-width: 640px)":{flexDirection:"row"}},"number"===typeof t.counter?{justifyContent:"space-between"}:{justifyContent:"flex-end"},t.customStyles]})),g=i.Z.p([function(t){return t.shake&&{"@keyframes wrongAnswer":{"0%":{transform:"none"},"15%":{transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},"30%":{transform:"translate3d(4%, 0, 0) rotate3d(0, 0, 1, 0.8deg)"},"45%":{transform:"translate3d(-3%, 0, 0) rotate3d(0, 0, 1, -0.6deg)"},"60%":{transform:"translate3d(2%, 0, 0) rotate3d(0, 0, 1, 0.4deg)"},"75%":{transform:"translate3d(-1%, 0, 0) rotate3d(0, 0, 1, -0.2deg)"},"100%":{transform:"none"}},animation:"wrongAnswer 0.7s ease-in-out 1"}},{fontSize:"1.4rem",fontWeight:"500"}]),f=i.Z.span({display:"flex",width:"100%",flexDirection:"column",alignItems:"center",gap:"1rem","@media (min-width: 640px)":{width:"auto",flexDirection:"row",justifyContent:"flex-end"}}),v={width:"100%","@media (min-width: 640px)":{width:"fit-content"}}}}]);