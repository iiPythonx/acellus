"use strict";(self.webpackChunkacellus=self.webpackChunkacellus||[]).push([[3797],{13797:function(e,r,t){t.d(r,{ZP:function(){return D}});var o,n,i=t(30168),a=t(1413),l=t(29439),s=t(44925),c=t(30686),u=t(43681),d=t(47313),p=t(1168),f=t(96091),g=t(79125),w=t(22872),v=t(67615),h=t(90628),x=t(21645),m=t(41428),b=t(30059),y=t(51237),k=t(58229),S=t(72159),Z=t(75178),j=t(46417),C=["acellusID"],I=["acellusID","gradeLevel"],T=["autocomplete","children","comboStyle","courseCompleted","downIcon","error","errorTooltip","fixed","format","keepFocus","keepOpen","labelText","onBlur","onFocus","onHide","onSearch","onSelection","placeholder","query","results","selection","setQuery","setShowResults","showResults","selectedItemIcon"];function E(e){var r=e.result.courseName;return(0,j.jsx)(Q,{children:r})}var R={user:{parse:function(e){return(0,k.Pp)(e)},Elem:function(e){var r=e.result,t=r.acellusID,o=(0,s.Z)(r,C),n=(0,k.Pp)(o);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(h.Z,{acellusID:t,name:n,customStyles:$,avatarStyles:ee}),(0,j.jsx)(Q,{children:n})]})}},course:{parse:function(e){return e.courseName},Elem:E},nameValue:{parse:function(e){return e.name},Elem:function(e){var r=e.result.name;return(0,j.jsx)(Q,{children:r})}},userWithGradeLevel:{parse:function(e){return(0,k.Pp)(e)},Elem:function(e){var r=e.result,t=r.acellusID,o=r.gradeLevel,n=(0,s.Z)(r,I),i=(0,k.Pp)(n),a=(0,k.eJ)(o);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(h.Z,{acellusID:t,name:i,customStyles:$,avatarStyles:ee}),(0,j.jsxs)("span",{className:"flex flex-col",children:[(0,j.jsx)(U,{children:i}),(0,j.jsx)(_,{children:a})]})]})}}};function D(e){var r=e.autocomplete,t=void 0!==r&&r,o=e.children,n=e.comboStyle,i=void 0===n?"white":n,c=e.courseCompleted,u=e.downIcon,f=e.error,g=e.errorTooltip,h=e.fixed,x=void 0!==h&&h,Z=e.format,C=void 0===Z?"user":Z,I=e.keepFocus,D=void 0!==I&&I,B=e.keepOpen,z=void 0!==B&&B,M=e.labelText,J=e.onBlur,Q=e.onFocus,U=e.onHide,_=e.onSearch,G=e.onSelection,K=e.placeholder,V=e.query,$=e.results,ee=e.selection,re=e.setQuery,te=e.setShowResults,oe=e.showResults,ne=e.selectedItemIcon,ie=(0,s.Z)(e,T),ae=(0,d.useState)(!0),le=(0,l.Z)(ae,2),se=le[0],ce=le[1],ue=(0,d.useState)(!1),de=(0,l.Z)(ue,2),pe=de[0],fe=de[1],ge=(0,d.useRef)(!1),we=(0,m.Z)((function(){_&&!ge.current&&(_(V),ce(!1),ye({index:void 0,group:void 0}))}),[V]),ve=(0,d.useMemo)((function(){return Object.entries($&&!Array.isArray($)?$:{results:$}).filter((function(e){var r=(0,l.Z)(e,2);r[0];return!!r[1]}))}),[$]);C="string"===typeof C?R[C]:C;var he=Array.isArray(ee),xe=(0,d.useState)({index:void 0,group:void 0}),me=(0,l.Z)(xe,2),be=me[0],ye=me[1],ke=(0,d.useState)(ee),Se=(0,l.Z)(ke,2),Ze=Se[0],je=Se[1],Ce=(0,d.useRef)(null),Ie=(0,d.useRef)(null),Te=(0,d.useRef)(),Ee=(0,d.useRef)([Ce,Ie]),Re=(0,d.useCallback)((function(){ce(!0),t&&Ze&&(V?(ge.current=!0,re(C.parse(Ze))):(je(null),G(null))),U&&U(),J&&J()}),[t,Ze,U,J,V,G,re,C]);(0,b.Z)(Re,Ee),(0,d.useEffect)((function(){return ce(!oe)}),[oe]),(0,d.useEffect)((function(){var e;Ze&&ve.forEach((function(r,t){var o=(0,l.Z)(r,2)[1].findIndex((function(e){return e===Ze}));-1!==o&&(e={index:o,group:t})})),ye(e||(V?{index:0,group:0}:{index:void 0,group:void 0}))}),[ve,se]);var De=(0,d.useCallback)((function(){var e=Ce.current;if(e){var r=Ie.current;if(r){var t=e.getBoundingClientRect(),o=document.getElementById("root").getBoundingClientRect(),n=x?0:o.top,i=x?0:o.left;r.style.top="".concat(t.bottom-n,"px"),r.style.left="".concat(t.left-i,"px"),r.style.width="".concat(t.width+1.8,"px")}}}),[x]),Oe=(0,d.useRef)();(0,d.useEffect)((function(){var e=function(){clearTimeout(Oe.current),Oe.current=setTimeout(De,250),De()};De();var r=[(0,k.Oo)("wheel",e,void 0,window),(0,k.Oo)("touchmove",e,void 0,window)];return function(){return r.forEach((function(e){return e()}))}}),[De,$]),(0,d.useEffect)((function(){var e;pe&&Ie.current&&(Ie.current.scrollTop=null===(e=Te.current)||void 0===e?void 0:e.offsetTop)}),[pe,Te,be]);var Be=(0,d.useMemo)((function(){return[Ce,function(){return Ce.current.closest("#modal")}]}),[]);(0,y.Z)(De),(0,y.Z)(De,Be);var ze=(0,d.useCallback)((function(){var e=ve[be.group][0],r=ve[be.group][1][be.index];ge.current=!0,he||re(t?C.parse(r):""),je(r),G(r,e),z||(ce(!0),U&&U()),D||Ce.current.querySelector("& > input").blur()}),[t,C,ve,be.group,be.index,D,z,U,G,he,re]),Pe=(0,d.useCallback)((function(e,r){return null===e||void 0===e?void 0:e.map((function(e,t){var o=t===be.index&&r===be.group,n=ve[r][1][t],i=he?ee.some((function(e){return e.displayCourseID===n.displayCourseID})):Ze===n,a=null===c||void 0===c?void 0:c(e.displayCourseID);return(0,j.jsxs)(X,{isCompleted:a,gray:C.Elem===E&&!e.inUse,isHighlighted:o,downIcon:u,onMouseOver:function(){fe(!1),ye({index:t,group:r})},onTouchStart:function(){fe(!1),ye({index:t,group:r})},onMouseDown:function(e){return e.preventDefault()},onClick:ze,ref:o?Te:null,isSelected:i,children:[(u||he)&&(0,j.jsx)(Y,{isSelected:i}),(0,j.jsx)(C.Elem,{result:e,index:t,groupIndex:r}),a&&(0,j.jsx)(q,{children:"COMPLETED"})]},JSON.stringify(e))}))}),[u,C.Elem,ve,ze,be.group,be.index,c,Ze,ee,he]);return(0,j.jsxs)(P,{onKeyDown:function(e){switch(e.stopPropagation(),e.key){case"Enter":if(e.preventDefault(),se)ce(!1);else if(Te.current){var r=Ce.current.getElementsByTagName("input")[0];D||r.blur();var o=ve[be.group][1].findIndex((function(e){return e===Ze}));t&&Ze&&be.index===o?(ce(!0),re(""),je(null),G(null),U&&U()):ze()}else we(),je(null),G(null),ce(!0),U&&U();break;case"ArrowUp":if(fe(!0),null==be.index){ye({index:0,group:0});break}if(0===be.index){var n;if(0===be.group){n=ve[ve.length-1][1],ye({group:ve.length-1,index:n.length-1});break}n=ve[be.group-1][1],ye({group:be.group-1,index:n.length-1});break}ye((0,a.Z)((0,a.Z)({},be),{},{index:be.index-1}));break;case"ArrowDown":if(fe(!0),null==be.index){ye({index:0,group:0});break}var i=ve[be.group][1];if(be.index===i.length-1){if(be.group===ve.length-1){ye({group:0,index:0});break}ye({group:be.group+1,index:0});break}ye((0,a.Z)((0,a.Z)({},be),{},{index:be.index+1}));break;case"Escape":Re()}},labelText:M,children:[M&&(0,j.jsx)(S.__,{children:M}),f&&(0,j.jsx)(S.Bc,{errorText:f,errorTooltip:g}),(0,j.jsxs)(F,{ref:Ce,children:[(0,j.jsx)(W,{type:"text",onClick:function(){return $&&ce(!1)},comboStyle:i,value:V,onChange:function(e){ge.current&&(ge.current=!1),re(e.target.value)},placeholder:K,autocomplete:"off",onFocus:Q,onBlur:function(){J&&setTimeout((function(){t&&Ze&&V&&V!==C.parse(Ze)&&(ge.current=!0,re(C.parse(Ze))),J(),ce(!0)}),100)},error:f}),!u&&!(Ze&&t)&&(0,j.jsx)(A,{downIcon:u,"aria-label":"Show / hide options",type:"button",onClick:function(){we(),V&&_(V),te((function(e){return!e}))},error:f,children:u?(0,j.jsx)(H,{"aria-hidden":"true",open:oe}):(0,j.jsx)(v.r,{"aria-hidden":"true"})}),(0,j.jsxs)(L,{children:[t&&Ze&&(ne||(0,j.jsx)(N,{"aria-label":"Remove Selection",onClick:function(){ce(!0),re(""),je(null),G(null)},children:(0,j.jsx)(w.r,{"aria-hidden":"true"})})),o]})]}),$&&(0,p.createPortal)((0,j.jsx)(O,(0,a.Z)((0,a.Z)({ref:Ie},ie),{},{resultLoop:Pe,updatePosition:De,fixed:x,hideOptions:se,groups:ve})),document.getElementById("root"))]})}var O=(0,d.forwardRef)((function(e,r){var t=e.fixed,o=e.hideOptions,n=e.groups,i=e.customOptionsStyles,a=e.loading,s=void 0!==a&&a,c=e.notFoundLabel,u=e.z,p=void 0===u?0:u,f=e.resultLoop,g=e.updatePosition;return(0,d.useLayoutEffect)((function(){g()}),[g]),(0,j.jsx)(M,{fixed:t,z:p,ref:r,hidden:o,customOptionsStyles:i,children:s?(0,j.jsx)(J,{children:(0,j.jsx)(Z.Z,{customStyles:{height:"4rem",stroke:"#3b82f6"}})}):n.length?n.map((function(e,r){var t=(0,l.Z)(e,2),o=t[0],n=t[1];return(0,j.jsxs)(j.Fragment,{children:[0!==n.length&&"results"!==o&&(0,j.jsx)(V,{children:o},"".concat(o,":header")),0===n.length?(0,j.jsx)(G,{children:c||"Nothing found..."}):(0,j.jsx)(K,{children:f(n,r)},"".concat(o,":container"))]})})):(0,j.jsx)(G,{children:c||"Nothing found..."})})})),B={white:{borderRadius:"0.75rem","--tw-bg-opacity":"1",backgroundColor:"rgb(255 255 255 / var(--tw-bg-opacity))",paddingTop:"1rem",paddingBottom:"1rem",paddingLeft:"1.25rem",paddingRight:"3.5rem",fontSize:"1.4rem",lineHeight:"2rem"},gray:{borderRadius:"9999px","--tw-bg-opacity":"1",backgroundColor:"rgb(243 244 246 / var(--tw-bg-opacity))",paddingTop:"1rem",paddingBottom:"1rem",paddingLeft:"1.5rem",paddingRight:"3.5rem",fontSize:"1.2rem"}},z=(0,c.iv)(o||(o=(0,i.Z)(["\n  ","\n\n  svg {\n    color: red;\n  }\n  /* Placeholder text styles for Chrome, Firefox, Opera, Safari 10.1+ */\n  &::placeholder {\n    color: red;\n    opacity: 1; /* Firefox */\n  }\n\n  /* Placeholder text styles for Microsoft Edge */\n  &::-ms-input-placeholder {\n    color: red;\n  }\n"])),{"--tw-border-opacity":"1",borderColor:"rgb(239 68 68 / var(--tw-border-opacity))","--tw-bg-opacity":"1",backgroundColor:"rgb(254 226 226 / var(--tw-bg-opacity))"}),P=u.Z.div((function(e){return[{position:"relative",display:"flex",width:"100%",flexDirection:"column"},e.labelText&&{gap:"0.5rem"}]})),F=u.Z.span({position:"relative",display:"flex",width:"100%",cursor:"default",alignItems:"center",overflow:"visible",textAlign:"left","@media (min-width: 640px)":{fontSize:"1.4rem"}}),L=u.Z.div({position:"absolute",right:"1rem",top:"50%",display:"flex",height:"1.75rem",width:"1.75rem","--tw-translate-y":"-50%",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"}),W=u.Z.input((function(e){var r=e.comboStyle,t=e.error;return[{width:"100%",borderWidth:"1px","--tw-border-opacity":"1",borderColor:"rgb(209 213 219 / var(--tw-border-opacity))","--tw-text-opacity":"1",color:"rgb(17 24 39 / var(--tw-text-opacity))","--tw-shadow":"0 1px 2px 0 rgb(0 0 0 / 0.05)","--tw-shadow-colored":"0 1px 2px 0 var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)","::placeholder":{"--tw-text-opacity":"1",color:"rgb(156 163 175 / var(--tw-text-opacity))"},":focus":{"--tw-border-opacity":"1",borderColor:"rgb(83 126 220 / var(--tw-border-opacity))",outline:"2px solid transparent",outlineOffset:"2px","--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":"var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)",boxShadow:"var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)","--tw-ring-opacity":"1","--tw-ring-color":"rgb(83 126 220 / var(--tw-ring-opacity))"}},B[r],t&&z]})),A=u.Z.button((function(e){var r=e.error;return[{position:"absolute",display:"flex",alignItems:"center","& svg":{color:"rgb(107 114 128 / 0.9)"}},e.downIcon?{right:"0.75rem",top:"1rem","& svg":{height:"2.25rem",width:"2.25rem",strokeWidth:"1"}}:{right:"1rem","@media (min-width: 500px)":{right:"1.25rem"},"& svg":{height:"1.75rem",width:"1.75rem"}},r&&{"& svg":{"--tw-text-opacity":"1",color:"rgb(239 68 68 / var(--tw-text-opacity))"}}]})),N=u.Z.button({"& svg":{color:"rgb(107 114 128 / 0.9)",transitionProperty:"color, background-color, border-color, text-decoration-color, fill, stroke",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms"},"svg:hover":{color:"rgb(156 163 175 / 0.9)"}}),H=(0,u.Z)(g.r)((function(e){return[{strokeWidth:"2",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms"},e.open?{"--tw-rotate":"180deg",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"}:{"--tw-rotate":"0deg",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"}]})),M=u.Z.ul((function(e){var r=e.hidden,t=e.customOptionsStyles,o=e.fixed,a=e.z;return[{position:"absolute",marginTop:"0.5rem",maxHeight:"18rem",width:"100%",listStyleType:"disc",overflow:"auto",scrollBehavior:"smooth",borderRadius:"0.75rem",borderWidth:"1px","--tw-border-opacity":"1",borderColor:"rgb(209 213 219 / var(--tw-border-opacity))","--tw-bg-opacity":"1",backgroundColor:"rgb(255 255 255 / var(--tw-bg-opacity))",padding:"0.5rem","--tw-shadow":"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)","--tw-shadow-colored":"0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)","--tw-ring-opacity":"0.05",":focus":{outline:"2px solid transparent",outlineOffset:"2px"}},r&&{display:"none"},x.I,o&&{position:"fixed"},a&&(0,c.iv)(n||(n=(0,i.Z)(["\n      z-index: ",";\n    "])),a),t]})),X=u.Z.li((function(e){var r=e.isCompleted,t=e.downIcon,o=e.isHighlighted,n=e.gray;return[{position:"relative",display:"flex",width:"100%",cursor:"pointer",userSelect:"none",alignItems:"center",gap:"1rem",borderRadius:"0.75rem",padding:"1rem",fontSize:"1.4rem","--tw-text-opacity":"1",color:"rgb(55 65 81 / var(--tw-text-opacity))",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms"},r&&{justifyContent:"space-between"},t&&{fontWeight:"500"},o&&{"--tw-bg-opacity":"1",backgroundColor:"rgb(223 232 249 / var(--tw-bg-opacity))",color:"rgb(30 58 138 / 0.9)"},e.isSelected&&{fontWeight:"600"},n&&{opacity:"0.6","--tw-grayscale":"grayscale(20%)",filter:"var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"}]})),Y=(0,u.Z)(f.r)((function(e){return[{display:"block",height:"2rem",width:"2rem",flexShrink:"0","--tw-text-opacity":"1",color:"rgb(83 126 220 / var(--tw-text-opacity))"},!e.isSelected&&{opacity:"0"}]})),q=u.Z.span({alignSelf:"flex-end",borderRadius:"0.375rem",backgroundColor:"rgb(55 106 215 / 0.2)",paddingLeft:"0.75rem",paddingRight:"0.75rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",fontWeight:"500"}),J=u.Z.div({display:"flex",alignItems:"center",justifyContent:"center",paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"0.5rem",paddingBottom:"0.5rem"}),Q=u.Z.span({display:"block",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontSize:"1.4rem"}),U=u.Z.span({display:"block",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontSize:"1.4rem",fontWeight:"600"}),_=u.Z.span({display:"block",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontSize:"1rem"}),G=u.Z.div({position:"relative",cursor:"default",userSelect:"none",paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",fontSize:"1.4rem","--tw-text-opacity":"1",color:"rgb(55 65 81 / var(--tw-text-opacity))"}),K=u.Z.div({display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem"}),V=u.Z.li({marginTop:"0.5rem",marginBottom:"0.5rem",marginLeft:"0.5rem",fontWeight:"600","--tw-text-opacity":"1",color:"rgb(107 114 128 / var(--tw-text-opacity))"}),$={height:"3rem",width:"3rem",borderWidth:"1px"},ee={borderWidth:"1px"}},41428:function(e,r,t){t.d(r,{Z:function(){return i}});var o=t(93433),n=t(47313);function i(e,r){var t=function(e,r){var t=(0,n.useRef)(),o=(0,n.useRef)(e);(0,n.useEffect)((function(){o.current=e}),[e]);var i=(0,n.useCallback)((function(){t.current=setTimeout((function(){return o.current()}),r)}),[r]),a=(0,n.useCallback)((function(){t.current&&clearTimeout(t.current)}),[]),l=(0,n.useCallback)((function(){a(),i()}),[a,i]);return(0,n.useEffect)((function(){return i(),a}),[r,i,a]),{clear:a,reset:l}}(e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:300),i=t.reset,a=t.clear;return(0,n.useEffect)(i,[].concat((0,o.Z)(r),[i])),(0,n.useEffect)(a,[a]),a}}}]);