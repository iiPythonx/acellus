"use strict";(self.webpackChunkacellus=self.webpackChunkacellus||[]).push([[1745],{61745:function(e,t,i){i.r(t),i.d(t,{default:function(){return H}});var r,n,o,s,a,l=i(43681),d=i(62953),p=i(94567),c=i(70032),u=i(2135),m=i(30168),h=i(1413),x=i(29439),g=i(30686),v=i(47313),b=i(76109),y=i(58864),w=i(67674),f=i(84777),j=i(25067),Z=i(81517),I=i(23562),D=i(46417);function T(e){var t=e.courseID,i=e.step,r=(0,v.useState)([]),n=(0,x.Z)(r,2),o=n[0],s=n[1];console.log(t);var a=(0,v.useState)({}),l=(0,x.Z)(a,2),d=l[0],p=l[1],c=(0,v.useState)(!1),u=(0,x.Z)(c,2),m=u[0],h=u[1],g=function(e){h(!1),p(e)};return(0,v.useEffect)((function(){console.log(t),b.Z.getProblems({courseID:i.courseID,syllabusStepID:i.syllabusStepID}).then((function(e){if(!e.error){var t=e.problems;console.log(t),s(t),g(t[0])}}))}),[]),(0,D.jsxs)(M,{children:[(0,D.jsx)(E,{children:o.map((function(e){return(0,D.jsx)(C,{problem:e,setProblem:g},e.problemStepID)}))}),d&&(0,D.jsx)(k,{problem:d,editing:m,setEditing:h})]})}function k(e){var t,i=e.problem,r=e.editing,n=e.setEditing,o=(0,v.useState)(""),s=(0,x.Z)(o,2),a=s[0],l=s[1],d=(0,v.useState)(!0),p=(0,x.Z)(d,2),c=p[0],u=p[1],m=(0,Z.Av)().teacher,h=(0,I.M6)(i),g=i.problemID,y="question";h.options.length>0&&(y="question-with-options");var w=function(){l("pending"),b.Z.getEditStatus(i.courseID,"problem",{problemID:g}).then((function(e){(0,j.isErrorResponse)(e)?l("There was an error locking the Problem for Editing. Try again later..."):e.lockedBy>0&&m.acellusID!==e.lockedBy?l("Someone else is editing this Problem. Try again later..."):b.Z.lockForEdit(i.courseID,"problem",{problemID:g}).then((function(e){(0,j.isErrorResponse)(e)?5===e.error?u(!1):l("There was an error locking this Problem for Editing. Try again later..."):e.alreadyLocked?l("Someone else is editing this Problem. Try again later..."):(l(""),n(!0))}))}))};return(0,D.jsxs)(z,{children:[(0,D.jsxs)("h4",{children:[i.problemNum,": ",i.problemType]}),a&&(0,D.jsx)(D.Fragment,{children:a}),(0,D.jsxs)(F,{children:["image"===h.question.type&&(0,D.jsxs)(D.Fragment,{children:[!r&&(0,D.jsx)("img",{src:"/media/"+h.question.value,alt:h.question.value,onDoubleClick:function(){w()}}),r&&!0===c&&(0,D.jsx)(q,{editing:function(){w()},type:y,element:h.question.element,props:i.problemComponents[h.question.element]},h.question.element)]}),"image"!==h.question.type&&(0,D.jsx)(D.Fragment,{children:h.question.value})]}),(0,D.jsx)(A,{layout:h.option.layout,children:"Input"!==h.option.type&&(null===(t=h.options)||void 0===t?void 0:t.map((function(e){return console.log(e),(0,D.jsxs)(D.Fragment,{children:[!r&&(0,D.jsx)(S,{type:h.option.type,option:e},"option-"+e.answer),r&&"Image"===h.option.type&&(0,D.jsx)(q,{editing:function(){n(!0)},type:"option",element:e.element,props:i.problemComponents[e.element]},e.element)]})})))}),(0,D.jsx)(L,{to:"../../course/".concat(i.courseID,"/").concat(i.syllabusStepID,"/preview?problem=").concat(i.problemStepID),target:"_blank",children:"Preview Problem"})]})}function C(e){var t,i=e.problem,r=e.setProblem,n=(0,I.M6)(i);return(0,D.jsxs)(P,{onClick:function(){r(i)},children:[(0,D.jsxs)("h4",{children:[i.problemNum,": ",i.problemType]}),"image"===n.question.type&&(0,D.jsx)(F,{children:(0,D.jsx)("img",{src:"/media/"+n.question.value,alt:n.question.value})}),(0,D.jsx)(A,{layout:n.option.layout,children:"Input"!==n.option.type&&(null===(t=n.options)||void 0===t?void 0:t.map((function(e){return(0,D.jsx)(S,{type:n.option.type,option:e},"option-"+e.answer)})))})]},i.problemStepID)}function S(e){var t=e.type,i=e.option;return(0,D.jsx)(B,{"data-testid":"option-wrapper","aria-label":"Text"===t&&i.value,"aria-hidden":"Image"===t?"true":"false",children:(0,D.jsx)(N,{className:"front",children:"Text"===t?(0,D.jsx)(f.Z,{htmlToClean:i.value,as:"span",customStyles:{width:"100%",paddingTop:"1rem",paddingBottom:"1rem",textAlign:"center","@media (min-width: 1280px)":{paddingTop:"1.5rem",paddingBottom:"1.5rem"}}}):"Image"===t&&(0,D.jsx)(W,{src:i.value,alt:i.alt,"aria-hidden":"true"})})},i.answer)}function q(e){var t,i=e.element,r=e.props,n=e.type,o=e.editing;return console.log(i,r,n),(0,D.jsx)(O,{onDoubleClick:void o(!1),type:n,children:r&&(null===(t=Object.entries(r))||void 0===t?void 0:t.map((function(e){return(0,D.jsx)(R,(0,h.Z)({},e[1]))})))})}function R(e){var t=e.type,i=e.text,n=e.clipArtName,o=e.height,s=e.left,a=e.top,l=e.width,d=e.zIndex;return 1===t?(0,D.jsx)("img",{src:"/media/"+n,alt:n,style:{position:"absolute",top:a+"px",left:s+"px",height:o+"px",width:l+"px",zIndex:d}}):i.length>0?(0,D.jsx)(f.Z,{htmlToClean:i,customStyles:[{position:"absolute"},(0,g.iv)(r||(r=(0,m.Z)(["\n            top: ","px;\n            left: ","px;\n            height: ","px;\n            z-index: ",";\n          "])),a,s,o,d)]}):void 0}var E=l.Z.div({float:"left",height:"75dvh",width:"25%",overflow:"auto"}),P=l.Z.div({width:"100%","--tw-text-opacity":"1",color:"rgb(0 0 0 / var(--tw-text-opacity))"}),z=l.Z.div({top:"0px",float:"right",margin:"1.25rem",width:"66.666667%","--tw-text-opacity":"1",color:"rgb(0 0 0 / var(--tw-text-opacity))"}),F=l.Z.div({width:"100%"}),A=l.Z.div((function(e){var t=e.layout;return[t&&t[1]>1?t[1]*t[0]>3?[{display:"grid"},(0,g.iv)(n||(n=(0,m.Z)(["\n            @media (max-width: 480px) {\n              grid-template-rows: repeat(calc(","*2), minmax(0, 1fr));\n              grid-template-columns: repeat(calc("," / 2), minmax(0, 1fr));\n            }\n            @media (min-width: 480px) {\n              grid-template-rows: repeat(",", minmax(0, 1fr));\n              grid-template-columns: repeat(",", minmax(0, 1fr));\n            }\n          "])),t[0],t[1],t[0],t[1])]:[{display:"grid"},(0,g.iv)(o||(o=(0,m.Z)(["\n            grid-template-rows: repeat(",", minmax(0, 1fr));\n            grid-template-columns: repeat(",", minmax(0, 1fr));\n          "])),t[0],t[1])]:{display:"flex",flexDirection:"column"}]})),B=l.Z.div({position:"relative",display:"flex",width:"100%",cursor:"default",alignItems:"center",justifyContent:"center",borderRadius:"1.5rem","@media (min-width: 1024px)":{borderRadius:"3rem"}}),N=l.Z.div((function(e){var t=e.optColor,i=e.optTextColor,r=e.fontFamily,n=e.textStyles;return[{position:"relative",zIndex:"0",display:"flex",height:"100%",width:"100%",cursor:"pointer",alignItems:"center",justifyContent:"center",borderRadius:"1.5rem",padding:"1rem","@media (min-width: 1024px)":{borderRadius:"3rem"},"& span":{flexWrap:"wrap"}},t&&t,{},(0,g.iv)(s||(s=(0,m.Z)(["\n    span *,\n    span {\n      ","\n      ","\n      ","\n    }\n  "])),i&&i,r?"font-family:"+r+";":"font-family: SF Compact Rounded;",n&&n)]})),W=l.Z.img({height:"auto",width:"100%",borderRadius:"1rem",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms","@media (min-width: 1024px)":{borderRadius:"2.25rem"}}),L=(l.Z.div({zIndex:"20","& svg":{stroke:"#fff"}}),(0,l.Z)(y.Z)({height:"4rem",borderRadius:"0.75rem","--tw-bg-opacity":"1",backgroundColor:"rgb(59 130 246 / var(--tw-bg-opacity))",":hover":{"--tw-scale-x":"1.025","--tw-scale-y":"1.025",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))","--tw-bg-opacity":"1",backgroundColor:"rgb(96 165 250 / var(--tw-bg-opacity))"},"@media (min-width: 1024px)":{borderRadius:"1rem"}}),(0,l.Z)(w.r)({marginRight:"0px !important",height:"1.5rem",width:"1.5rem",strokeWidth:"2 !important","@media (min-width: 500px)":{height:"2rem",width:"2rem"}}),(0,l.Z)(u.Link)({"--tw-text-opacity":"1",color:"rgb(0 0 0 / var(--tw-text-opacity))"})),M=l.Z.div({height:"100%",width:"100%"}),O=l.Z.div(a||(a=(0,m.Z)(["\n  ","\n  ","\n  ","\n  ","\n"])),{position:"relative",borderRadius:"0.5rem",borderWidth:"2px","--tw-bg-opacity":"1",backgroundColor:"rgb(233 213 255 / var(--tw-bg-opacity))"},(function(e){return"question"===e.type&&{height:"360px",width:"480px"}}),(function(e){return"question-with-options"===e.type&&{height:"180px",width:"480px"}}),(function(e){return"option"===e.type&&{height:"180px",width:"240px"}})),U=i(2084);function X(e){e.courseID;var t=e.step,i=e.syllabus,r=t.unitsToReview,n=t.examType,o=[];o=r.indexOf("-")>-1?r.split("-"):[r,r];var s=i.steps.filter((function(e){return"undefined"!==typeof e.unit&&e.unit>=o[0]&&e.unit<=o[1]})),a=(0,U.testCountField)(n),l=0;return(0,D.jsxs)(Y,{children:[(0,D.jsxs)(G,{children:["Exam Type: ",(0,U.examTypeValue)(n)," | Unit(s) to Review: ",r]}),(0,D.jsxs)(Q,{children:[(0,D.jsx)("b",{children:(0,D.jsx)(V,{children:"Step Title"})}),(0,D.jsx)("b",{children:(0,D.jsx)(V,{children:"Unit"})}),(0,D.jsx)("b",{children:(0,D.jsx)(V,{children:"Count in Exam"})})]}),null===s||void 0===s?void 0:s.map((function(e,t){console.log(e);var i=e[a]>0?e[a]:0;return l+=i,(0,D.jsxs)(Q,{children:[(0,D.jsx)(V,{children:e.stepTitle}),(0,D.jsx)(V,{children:e.unit}),(0,D.jsx)(V,{children:i})]})})),(0,D.jsxs)(Q,{children:[(0,D.jsx)("b",{children:(0,D.jsx)(V,{children:"Total Problems In Exam:"})}),(0,D.jsx)(V,{}),(0,D.jsx)("b",{children:(0,D.jsx)(V,{bold:!0,children:l})})]})]})}var Y=l.Z.div({height:"100%",width:"100%",borderRadius:"0.5rem",borderWidth:"2px","--tw-border-opacity":"1",borderColor:"rgb(231 229 228 / var(--tw-border-opacity))","--tw-bg-opacity":"1",backgroundColor:"rgb(207 250 254 / var(--tw-bg-opacity))",padding:"0.75rem"}),G=l.Z.h6({height:"5rem",width:"100%"}),Q=l.Z.div({margin:"0.25rem",display:"grid",width:"100%",gridTemplateColumns:"repeat(3, minmax(0, 1fr))"}),V=l.Z.div({fontSize:"1.6rem"});var _=function(e){var t=e.step,i=(e.courseID,t.videoA),r=t.videoB,n=t.videoC,o=t.videoD;return(0,D.jsxs)("div",{children:[" ","videoA: ",i,", videoB: ",r,", videoC: ",n,", videoD: ",o]})};function H(){var e=(0,d.Qi)(),t=e.course,i=e.syllabus,r=(0,p.wG)().step,n=r.videoA,o=r.stepType,s=r.stepNum,a=r.stepTitle;console.log(t),console.log(r);var l=(0,c.q7)(o);return(0,D.jsxs)(K,{children:[(0,D.jsx)(ne,{to:"../",children:" < Syllabus"}),(0,D.jsxs)(te,{children:[(0,D.jsx)(ie,{children:t.courseName}),(0,D.jsxs)(ee,{children:[(0,D.jsx)(J,{src:l}),(0,D.jsxs)($,{children:[s,". ",a]})]}),n]}),(0,D.jsxs)(re,{children:[["problem","drill","special-lesson","book","writing-tutor"].includes(o)&&(0,D.jsx)(T,{courseID:t.courseID,step:r}),["exam","review"].includes(o)&&(0,D.jsx)(X,{courseID:t.courseID,step:r,syllabus:i}),"video"===o&&(0,D.jsx)(_,{courseID:t.courseID,step:r})]})]})}var J=l.Z.img({margin:"0.75rem",height:"5rem",width:"5rem"}),K=l.Z.div({height:"100%",width:"100%"}),$=l.Z.h2({marginTop:"1.25rem",display:"flex"}),ee=l.Z.div({display:"flex",width:"33.333333%"}),te=l.Z.div({display:"flex",width:"100%",flex:"1 1 0%",justifyContent:"space-between"}),ie=l.Z.h2({marginTop:"1.25rem",fontSize:"2.5rem"}),re=l.Z.div({width:"100%"}),ne=(0,l.Z)(u.Link)({fontSize:"1.4rem","--tw-text-opacity":"1",color:"rgb(0 0 0 / var(--tw-text-opacity))"})}}]);