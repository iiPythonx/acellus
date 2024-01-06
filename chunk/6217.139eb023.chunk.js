"use strict";(self.webpackChunkacellus=self.webpackChunkacellus||[]).push([[6217,2466],{58222:function(e,t,r){r.d(t,{r:function(){return d}});var n,i=r(47313),o=["title","titleId"];function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function s(e,t){var r=e.title,s=e.titleId,d=l(e,o);return i.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",ref:t,"aria-labelledby":s},d),r?i.createElement("title",{id:s},r):null,n||(n=i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"})))}var d=i.forwardRef(s);r.p},59350:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(74165),i=r(15861),o=r(29439),a=r(47313),l=r(58229),s=r(28987),d=r(46417);function u(e){var t=e.videoPath,r=e.title,u=e.setVideoPath,p=(0,a.useRef)(),v=(0,a.useState)(t),b=(0,o.Z)(v,2),f=b[0],h=b[1];(0,a.useEffect)((function(){h(t)}),[t]);var g=(0,a.useCallback)((0,i.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.S0)(f,h,void 0,t.includes(".m3u8"));case 2:case"end":return e.stop()}}),e)}))),[f,t]);return f&&t&&(0,d.jsx)(s.Z,{title:r,src:f,playerRef:p,autoplay:!0,showControls:!0,showSpeedControls:!0,speedOptions:c,onError:g,onClose:function(){return u(null)}})}var c=[1,1.25,1.5,2]},82466:function(e,t,r){r.d(t,{ZP:function(){return u},ib:function(){return c},ol:function(){return v},tK:function(){return b},vs:function(){return k}});var n=r(43681),i=r(58467),o=r(2135),a=r(77533),l=r(11126),s=r(25685),d=r(46417);function u(e){var t=e.bgColor,r=e.children,n=e.getConfirmation,o=e.headerStyles,a=e.noPaddingX,l=e.onClose,u=e.small,p=e.modalBaseContentStyles,f=e.contentWrapperStyles,h=e.customHeaderContent,w=e.title,y=e.customButtons,x=e.modalStyles,C=(0,i.TH)().search.includes("write-a-book");return(0,d.jsxs)(s.Z,{bgColor:t,modalBaseContentStyles:p,getConfirmation:n,onClose:l,small:u,modalStyles:x,children:[w&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(c,{isStudDetails:!0,headerStyles:o,bgColor:t,children:(0,d.jsxs)(g,{children:[(0,d.jsx)("h1",{children:w}),(0,d.jsxs)(m,{children:[y,(0,d.jsx)(v,{onClick:l}),(0,d.jsx)(b,{onClick:l})]})]})}),(0,d.jsx)("div",{children:h})]}),(0,d.jsx)(k,{id:"contentWrapper",customStyles:f,noPaddingX:a,small:u,isBookApprovalModal:C,children:r})]})}function c(e){var t=e.headerStyles,r=e.bgColor,n=e.showShadow,i=e.hideBorder,o=e.children,a=(0,l.Z)(0,"modal");return(0,d.jsx)(p,{isScrolling:a,hideBorder:i,showShadow:n,headerStyles:t,bgColor:r,children:(0,d.jsx)(C,{children:o})})}var p=n.Z.div((function(e){var t=e.headerStyles,r=e.bgColor,n=e.isScrolling,i=e.showShadow;return[{position:"sticky",top:"0px",zIndex:"40",paddingLeft:"var(--spacing)",paddingRight:"var(--spacing)",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms"},!e.hideBorder&&{borderBottomWidth:"1px"},t||(r||{"--tw-border-opacity":"1",borderColor:"rgb(255 255 255 / var(--tw-border-opacity))",backgroundColor:"rgb(255 255 255 / 80)"}),n&&i?{borderBottomWidth:"1px",borderColor:"rgb(0 0 0 / 0.1)","--tw-shadow":"0 1px 2px 0 rgb(0 0 0 / 0.05)","--tw-shadow-colored":"0 1px 2px 0 var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)","--tw-backdrop-blur":"blur(16px)",backdropFilter:"var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)"}:{"--tw-backdrop-blur":"blur(16px)",backdropFilter:"var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)"}]}));function v(e){var t=e.onClick,r=(0,i.TH)();return t?(0,d.jsx)(w,{onClick:t,"aria-label":"Close Modal","data-tooltip":"title",children:(0,d.jsx)(x,{"aria-hidden":"true"})}):(0,d.jsx)(f,{to:r.pathname,onClick:t,"aria-label":"Close Modal","data-tooltip":"title",children:(0,d.jsx)(x,{"aria-hidden":"true"})})}function b(e){var t=e.onClick,r=(0,i.TH)();return t?(0,d.jsx)(y,{onClick:t,"aria-label":"Close Modal","data-tooltip":"title",children:(0,d.jsx)(x,{"aria-hidden":"true"})}):(0,d.jsx)(h,{to:r.pathname,onClick:t,"aria-label":"Close Modal","data-tooltip":"title",children:(0,d.jsx)(x,{"aria-hidden":"true"})})}var f=(0,n.Z)(o.Link)({position:"relative",zIndex:"50",display:"none","@media (min-width: 640px)":{display:"block"}}),h=(0,n.Z)(o.Link)({position:"relative",display:"block","@media (min-width: 640px)":{display:"none"}}),g=n.Z.div({display:"flex",width:"100%",justifyContent:"space-between"}),m=n.Z.div({display:"flex",gap:"1rem"}),w=n.Z.button({position:"relative",zIndex:"50",display:"none","@media (min-width: 640px)":{display:"block"}}),y=n.Z.button({position:"relative",display:"block","@media (min-width: 640px)":{display:"none"}}),x=(0,n.Z)(a.r)({height:"2.25rem",width:"2.25rem",strokeWidth:"2px","--tw-text-opacity":"1",color:"rgb(107 114 128 / var(--tw-text-opacity))",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms",":hover":{"--tw-text-opacity":"1",color:"rgb(75 85 99 / var(--tw-text-opacity))"}}),C=(n.Z.div({marginLeft:"auto",marginRight:"auto",width:"100%",paddingLeft:"2.5rem",paddingRight:"2.5rem","@media (min-width: 1280px)":{paddingLeft:"5rem",paddingRight:"5rem"}}),n.Z.div({display:"flex",width:"100%",flexDirection:"column",justifyContent:"space-between",paddingTop:"1rem",paddingBottom:"1rem","@media (min-width: 640px)":{flexDirection:"row",paddingTop:"1.5rem",paddingBottom:"1.5rem"},"@media (min-width: 1280px)":{paddingTop:"2rem",paddingBottom:"2rem"}})),k=n.Z.div((function(e){var t=e.noPaddingX,r=e.small;return[!t&&!r&&{paddingLeft:"var(--spacing)",paddingRight:"var(--spacing)"},e.customStyles,e.isBookApprovalModal&&{height:"100%"}]}))},92755:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(29439),i=r(47313),o=r(7752),a=r(81517),l=r(58229);function s(e){var t=e.addCoursePopupState,r=e.courseKey,s=(e.courseName,e.courses),d=e.deleteCourse,u=e.doNotFilter,c=e.doNotSearch,p=e.gradeLevel,v=e.inUse,b=e.noSubjects,f=e.setAddCoursePopupState,h=e.subject,g=(0,a.Av)(),m=null===g||void 0===g?void 0:g.teacher.adminLevel,w=(0,i.useState)((null===t||void 0===t?void 0:t.gradeFilter)||p),y=(0,n.Z)(w,2),x=y[0],C=y[1],k=(0,i.useState)((null===t||void 0===t?void 0:t.subjectFilter)||""),j=(0,n.Z)(k,2),S=j[0],Z=j[1],R=(0,i.useState)([]),F=(0,n.Z)(R,2),A=F[0],B=F[1],L=(0,i.useState)(null===t||void 0===t?void 0:t.query),O=(0,n.Z)(L,2),P=O[0],I=O[1],D=(0,i.useState)(!1),E=(0,n.Z)(D,2),M=E[0],N=E[1],T=(0,i.useState)((null===t||void 0===t?void 0:t.searchResults)||null),z=(0,n.Z)(T,2),U=z[0],W=z[1],H=(0,i.useState)(!1),q=(0,n.Z)(H,2),X=q[0],K=q[1],V=(0,i.useState)(null===t||void 0===t?void 0:t.newCourse),G=(0,n.Z)(V,2),Q=G[0],J=G[1],Y=(0,i.useCallback)((function(e){if(!e.active)return!1;if(!e.ageRange)return!1;if((null===u||void 0===u||!u.some((function(t){return t.displayCourseID===e.displayCourseID})))&&s.find((function(t){return r?t[1].displayCourseID===e.displayCourseID&&t[0]!==r:t.displayCourseID===e.displayCourseID})))return!1;var t=x||r&&p;if(!["-","",void 0].includes(t)){var n=e.ageRange.split("-"),i=n[0],o=n[1]||n[0],a=(0,l.zv)(t);return a>=i&&a<=o}return!0}),[r,s,u,x,p]),$=(0,i.useCallback)((function(e){var t,r,n,i=new AbortController,a={inUse:v},l=S||h;return""!==(null===e||void 0===e||null===(t=e.trim)||void 0===t?void 0:t.call(e))&&P&&(a.search=null===(r=P.trim)||void 0===r?void 0:r.call(P)),l&&"All"!==l?(a.subject=l,a.limit=100):null!==P&&void 0!==P&&null!==(n=P.trim)&&void 0!==n&&n.call(P)||(a.limit=400),N(!0),o.Z.get(a,i.signal).then((function(e){var t;return W(null===(t=e.courses)||void 0===t?void 0:t.sort((function(e,t){var r,n,i,o;if(!v){if(e.inUse&&!t.inUse)return-1;if(!e.inUse&&t.inUse)return 1}return e.starred&&!t.starred?-1:!e.starred&&t.starred?1:null!==(r=e.ageRange)&&void 0!==r&&r.includes("-")||null===(n=t.ageRange)||void 0===n||!n.includes("-")?null===(i=e.ageRange)||void 0===i||!i.includes("-")||null!==(o=t.ageRange)&&void 0!==o&&o.includes("-")?e.courseNumber<t.courseNumber?-1:e.courseNumber>t.courseNumber?1:0:1:-1})))})).catch((function(e){3948!==e.status&&toast.error("Course Search Failed\n".concat(e.message)),W(null)})).finally((function(){return N(!1)})),function(){return i.abort()}}),[v,S,h,P]);(0,i.useEffect)((function(){if(!c&&!b){var e=new AbortController,t=x||r&&p;return o.Z.getSubjects(t?(0,l.zv)(t):void 0,e.signal).then((function(e){var t=["Math","Language Arts/Reading","Science","Social Studies"].filter((function(t){return e.subjects.includes(t)})),n=e.subjects.filter((function(e){return e&&!t.includes(e)})),i=t.concat(n);i.unshift("All");var o=Object.fromEntries(s);"P"!==p||x||!o[r].subject||o[r].displayCourseID?(i.includes(S||h)||Z("All"),B(i)):i.includes(o[r].subject)?(i.includes(S)||Z("All"),B(i)):d(r)})).catch((function(e){3948!==e.status&&toast.error("Error getting subjects.\n".concat(e.message))})),function(){return e.abort()}}}),[r,d,c,x,p,b,h]),(0,i.useEffect)((function(){if(!c)return $()}),[c,S]);var _=(0,i.useMemo)((function(){return null===U||void 0===U?void 0:U.filter(Y)}),[U,Y]);return{adminLevel:m,gradeFilter:x,setGradeFilter:C,subjectFilter:S,setSubjectFilter:Z,subjects:A,query:P,setQuery:I,showResults:X,setShowResults:K,search:$,loading:M,searchResults:U,filteredResults:_,newCourse:Q,setNewCourse:J,saveState:function(){return null===f||void 0===f?void 0:f({gradeFilter:x,subjectFilter:S,query:P,searchResults:U,newCourse:Q})}}}},32667:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});var n=r(43681),i=r(22469),o=r(51083),a=r(46417);function l(){return(0,a.jsx)(s,{id:"stud-form-wrapper",children:(0,a.jsx)(i.Z,{})})}var s=(0,n.Z)(o.i)({padding:"var(--spacing)"})}}]);