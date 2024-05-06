"use strict";(self.webpackChunkreact_native_testing_library_website=self.webpackChunkreact_native_testing_library_website||[]).push([[968],{8662:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>x,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var s=n(5893),i=n(1151),l=n(3901);const c={id:"jest-matchers",title:"Jest Matchers"},a=void 0,r={id:"jest-matchers",title:"Jest Matchers",description:"Built-in Jest matchers require RNTL v12.4.0 or later.",source:"@site/docs/JestMatchers.md",sourceDirName:".",slug:"/jest-matchers",permalink:"/react-native-testing-library/docs/jest-matchers",draft:!1,unlisted:!1,editUrl:"https://github.com/callstack/react-native-testing-library/blob/main/website/docs/JestMatchers.md",tags:[],version:"current",frontMatter:{id:"jest-matchers",title:"Jest Matchers"},sidebar:"docs",previous:{title:"Queries",permalink:"/react-native-testing-library/docs/queries"},next:{title:"User Event",permalink:"/react-native-testing-library/docs/user-event"}},o={},d=[{value:"Setup",id:"setup",level:2},{value:"Migration from legacy Jest Native matchers.",id:"migration-from-legacy-jest-native-matchers",level:2},{value:"Checking element existence",id:"checking-element-existence",level:2},{value:"<code>toBeOnTheScreen()</code>",id:"tobeonthescreen",level:3},{value:"Element Content",id:"element-content",level:2},{value:"<code>toHaveTextContent()</code>",id:"tohavetextcontent",level:3},{value:"<code>toContainElement()</code>",id:"tocontainelement",level:3},{value:"<code>toBeEmptyElement()</code>",id:"tobeemptyelement",level:3},{value:"Checking element state",id:"checking-element-state",level:2},{value:"<code>toHaveDisplayValue()</code>",id:"tohavedisplayvalue",level:3},{value:"<code>toHaveAccessibilityValue()</code>",id:"tohaveaccessibilityvalue",level:3},{value:"<code>toBeEnabled()</code> / <code>toBeDisabled</code>",id:"tobeenabled",level:3},{value:"<code>toBeSelected()</code>",id:"tobeselected",level:3},{value:"<code>toBeChecked()</code> / <code>toBePartiallyChecked()</code>",id:"tobechecked",level:3},{value:"<code>toBeExpanded()</code> / <code>toBeCollapsed()</code>",id:"tobeexpanded",level:3},{value:"<code>toBeBusy()</code>",id:"tobebusy",level:3},{value:"Checking element style",id:"checking-element-style",level:2},{value:"<code>toBeVisible()</code>",id:"tobevisible",level:3},{value:"<code>toHaveStyle()</code>",id:"tohavestyle",level:3},{value:"Other matchers",id:"other-matchers",level:2},{value:"<code>toHaveAccessibleName()</code>",id:"tohaveaccessiblename",level:3},{value:"<code>toHaveProp()</code>",id:"tohaveprop",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"Built-in Jest matchers require RNTL v12.4.0 or later."})}),"\n",(0,s.jsx)(t.p,{children:"This guide describes built-in Jest matchers, we recommend using these matchers as they provide readable tests, accessibility support, and a better developer experience."}),"\n","\n",(0,s.jsx)(l.Z,{toc:d}),"\n",(0,s.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsxs)(t.p,{children:["You can use the built-in matchers by adding the following line to your ",(0,s.jsx)(t.code,{children:"jest-setup.ts"})," file (configured using ",(0,s.jsx)(t.a,{href:"https://jestjs.io/docs/configuration#setupfilesafterenv-array",children:(0,s.jsx)(t.code,{children:"setupFilesAfterEnv"})}),"):"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import '@testing-library/react-native/extend-expect';\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Alternatively, you can add above script to your Jest configuration (usually located either in the ",(0,s.jsx)(t.code,{children:"jest.config.js"})," file or in the ",(0,s.jsx)(t.code,{children:"package.json"})," file under the ",(0,s.jsx)(t.code,{children:'"jest"'})," key):"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "preset": "react-native",\n  "setupFilesAfterEnv": ["@testing-library/react-native/extend-expect"]\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"migration-from-legacy-jest-native-matchers",children:"Migration from legacy Jest Native matchers."}),"\n",(0,s.jsxs)(t.p,{children:["If you are already using legacy Jest Native matchers we have a ",(0,s.jsx)(t.a,{href:"migration-jest-native",children:"migration guide"})," for moving to the built-in matchers."]}),"\n",(0,s.jsx)(t.h2,{id:"checking-element-existence",children:"Checking element existence"}),"\n",(0,s.jsx)(t.h3,{id:"tobeonthescreen",children:(0,s.jsx)(t.code,{children:"toBeOnTheScreen()"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"expect(element).toBeOnTheScreen();\n"})}),"\n",(0,s.jsx)(t.p,{children:"This allows you to assert whether an element is attached to the element tree or not. If you hold a reference to an element and it gets unmounted during the test it will no longer pass this assertion."}),"\n",(0,s.jsx)(t.h2,{id:"element-content",children:"Element Content"}),"\n",(0,s.jsx)(t.h3,{id:"tohavetextcontent",children:(0,s.jsx)(t.code,{children:"toHaveTextContent()"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"expect(element).toHaveTextContent(\n  text: string | RegExp,\n  options?: {\n    exact?: boolean;\n    normalizer?: (text: string) => string;\n  },\n)\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This allows you to assert whether the given element has the given text content or not. It accepts either ",(0,s.jsx)(t.code,{children:"string"})," or ",(0,s.jsx)(t.code,{children:"RegExp"})," matchers, as well as ",(0,s.jsx)(t.a,{href:"/react-native-testing-library/docs/queries#text-match-options",children:"text match options"})," of ",(0,s.jsx)(t.code,{children:"exact"})," and ",(0,s.jsx)(t.code,{children:"normalizer"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"tocontainelement",children:(0,s.jsx)(t.code,{children:"toContainElement()"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"expect(container).toContainElement(\n  element: ReactTestInstance | null,\n)\n"})}),"\n",(0,s.jsx)(t.p,{children:"This allows you to assert whether the given container element does contain another host element."}),"\n",(0,s.jsx)(t.h3,{id:"tobeemptyelement",children:(0,s.jsx)(t.code,{children:"toBeEmptyElement()"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"expect(element).toBeEmptyElement();\n"})}),"\n",(0,s.jsx)(t.p,{children:"This allows you to assert whether the given element does not have any host child elements or text content."}),"\n",(0,s.jsx)(t.h2,{id:"checking-element-state",children:"Checking element state"}),"\n",(0,s.jsx)(t.h3,{id:"tohavedisplayvalue",children:(0,s.jsx)(t.code,{children:"toHaveDisplayValue()"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"expect(element).toHaveDisplayValue(\n  value: string | RegExp,\n  options?: {\n    exact?: boolean;\n    normalizer?: (text: string) => string;\n  },\n)\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This allows you to assert whether the given ",(0,s.jsx)(t.code,{children:"TextInput"})," element has a specified display value. It accepts either ",(0,s.jsx)(t.code,{children:"string"})," or ",(0,s.jsx)(t.code,{children:"RegExp"})," matchers, as well as ",(0,s.jsx)(t.a,{href:"/react-native-testing-library/docs/queries#text-match-options",children:"text match options"})," of ",(0,s.jsx)(t.code,{children:"exact"})," and ",(0,s.jsx)(t.code,{children:"normalizer"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"tohaveaccessibilityvalue",children:(0,s.jsx)(t.code,{children:"toHaveAccessibilityValue()"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"expect(element).toHaveAccessibilityValue(\n  value: {\n    min?: number;\n    max?: number;\n    now?: number;\n    text?: string | RegExp;\n  },\n)\n"})}),"\n",(0,s.jsx)(t.p,{children:"This allows you to assert whether the given element has a specified accessible value."}),"\n",(0,s.jsxs)(t.p,{children:["This matcher will assert accessibility value based on ",(0,s.jsx)(t.code,{children:"aria-valuemin"}),", ",(0,s.jsx)(t.code,{children:"aria-valuemax"}),", ",(0,s.jsx)(t.code,{children:"aria-valuenow"}),", ",(0,s.jsx)(t.code,{children:"aria-valuetext"})," and ",(0,s.jsx)(t.code,{children:"accessibilityValue"})," props. Only defined value entries will be used in the assertion, the element might have additional accessibility value entries and still be matched."]}),"\n",(0,s.jsxs)(t.p,{children:["When querying by ",(0,s.jsx)(t.code,{children:"text"})," entry a string or ",(0,s.jsx)(t.code,{children:"RegExp"})," might be used."]}),"\n",(0,s.jsxs)(t.h3,{id:"tobeenabled",children:[(0,s.jsx)(t.code,{children:"toBeEnabled()"})," / ",(0,s.jsx)(t.code,{children:"toBeDisabled"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"expect(element).toBeEnabled();\nexpect(element).toBeDisabled();\n"})}),"\n",(0,s.jsxs)(t.p,{children:["These allow you to assert whether the given element is enabled or disabled from the user's perspective. It relies on the accessibility disabled state as set by ",(0,s.jsx)(t.code,{children:"aria-disabled"})," or ",(0,s.jsx)(t.code,{children:"accessibilityState.disabled"})," props. It will consider a given element disabled when it or any of its ancestors is disabled."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"These matchers are the negation of each other, and both are provided to avoid double negations in your assertions."})}),"\n",(0,s.jsx)(t.h3,{id:"tobeselected",children:(0,s.jsx)(t.code,{children:"toBeSelected()"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"expect(element).toBeSelected();\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This allows you to assert whether the given element is selected from the user's perspective. It relies on the accessibility selected state as set by ",(0,s.jsx)(t.code,{children:"aria-selected"})," or ",(0,s.jsx)(t.code,{children:"accessibilityState.selected"})," props."]}),"\n",(0,s.jsxs)(t.h3,{id:"tobechecked",children:[(0,s.jsx)(t.code,{children:"toBeChecked()"})," / ",(0,s.jsx)(t.code,{children:"toBePartiallyChecked()"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"expect(element).toBeChecked();\nexpect(element).toBePartiallyChecked();\n"})}),"\n",(0,s.jsxs)(t.p,{children:["These allow you to assert whether the given element is checked or partially checked from the user's perspective. It relies on the accessibility checked state as set by ",(0,s.jsx)(t.code,{children:"aria-checked"})," or ",(0,s.jsx)(t.code,{children:"accessibilityState.checked"})," props."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"toBeChecked()"})," matcher works only on elements with the ",(0,s.jsx)(t.code,{children:"checkbox"})," or ",(0,s.jsx)(t.code,{children:"radio"})," role."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"toBePartiallyChecked()"})," matcher works only on elements with the ",(0,s.jsx)(t.code,{children:"checkbox"})," role."]}),"\n"]})}),"\n",(0,s.jsxs)(t.h3,{id:"tobeexpanded",children:[(0,s.jsx)(t.code,{children:"toBeExpanded()"})," / ",(0,s.jsx)(t.code,{children:"toBeCollapsed()"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"expect(element).toBeExpanded();\nexpect(element).toBeCollapsed();\n"})}),"\n",(0,s.jsxs)(t.p,{children:["These allows you to assert whether the given element is expanded or collapsed from the user's perspective. It relies on the accessibility disabled state as set by ",(0,s.jsx)(t.code,{children:"aria-expanded"})," or ",(0,s.jsx)(t.code,{children:"accessibilityState.expanded"})," props."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["These matchers are the negation of each other for expandable elements (elements with explicit ",(0,s.jsx)(t.code,{children:"aria-expanded"})," or ",(0,s.jsx)(t.code,{children:"accessibilityState.expanded"})," props). However, both won't pass for non-expandable elements (ones without explicit ",(0,s.jsx)(t.code,{children:"aria-expanded"})," or ",(0,s.jsx)(t.code,{children:"accessibilityState.expanded"})," props)."]})}),"\n",(0,s.jsx)(t.h3,{id:"tobebusy",children:(0,s.jsx)(t.code,{children:"toBeBusy()"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"expect(element).toBeBusy();\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This allows you to assert whether the given element is busy from the user's perspective. It relies on the accessibility selected state as set by ",(0,s.jsx)(t.code,{children:"aria-busy"})," or ",(0,s.jsx)(t.code,{children:"accessibilityState.busy"})," props."]}),"\n",(0,s.jsx)(t.h2,{id:"checking-element-style",children:"Checking element style"}),"\n",(0,s.jsx)(t.h3,{id:"tobevisible",children:(0,s.jsx)(t.code,{children:"toBeVisible()"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"expect(element).toBeVisible();\n"})}),"\n",(0,s.jsx)(t.p,{children:"This allows you to assert whether the given element is visible from the user's perspective."}),"\n",(0,s.jsxs)(t.p,{children:["The element is considered invisible when itself or any of its ancestors has ",(0,s.jsx)(t.code,{children:"display: none"})," or ",(0,s.jsx)(t.code,{children:"opacity: 0"})," styles, as well as when it's hidden from accessibility."]}),"\n",(0,s.jsx)(t.h3,{id:"tohavestyle",children:(0,s.jsx)(t.code,{children:"toHaveStyle()"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"expect(element).toHaveStyle(\n  style: StyleProp<Style>,\n)\n"})}),"\n",(0,s.jsx)(t.p,{children:"This allows you to assert whether the given element has given styles."}),"\n",(0,s.jsx)(t.h2,{id:"other-matchers",children:"Other matchers"}),"\n",(0,s.jsx)(t.h3,{id:"tohaveaccessiblename",children:(0,s.jsx)(t.code,{children:"toHaveAccessibleName()"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"expect(element).toHaveAccessibleName(\n  name?: string | RegExp,\n  options?: {\n    exact?: boolean;\n    normalizer?: (text: string) => string;\n  },\n)\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This allows you to assert whether the given element has a specified accessible name. It accepts either ",(0,s.jsx)(t.code,{children:"string"})," or ",(0,s.jsx)(t.code,{children:"RegExp"})," matchers, as well as ",(0,s.jsx)(t.a,{href:"/react-native-testing-library/docs/queries#text-match-options",children:"text match options"})," of ",(0,s.jsx)(t.code,{children:"exact"})," and ",(0,s.jsx)(t.code,{children:"normalizer"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The accessible name will be computed based on ",(0,s.jsx)(t.code,{children:"aria-labelledby"}),", ",(0,s.jsx)(t.code,{children:"accessibilityLabelledBy"}),", ",(0,s.jsx)(t.code,{children:"aria-label"}),", and ",(0,s.jsx)(t.code,{children:"accessibilityLabel"})," props, in the absence of these props, the element text content will be used."]}),"\n",(0,s.jsxs)(t.p,{children:["When the ",(0,s.jsx)(t.code,{children:"name"})," parameter is ",(0,s.jsx)(t.code,{children:"undefined"})," it will only check if the element has any accessible name."]}),"\n",(0,s.jsx)(t.h3,{id:"tohaveprop",children:(0,s.jsx)(t.code,{children:"toHaveProp()"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"expect(element).toHaveProp(\n  name: string,\n  value?: unknown,\n)\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This allows you to assert whether the given element has a given prop. When the ",(0,s.jsx)(t.code,{children:"value"})," parameter is ",(0,s.jsx)(t.code,{children:"undefined"})," it will only check for existence of the prop, and when ",(0,s.jsx)(t.code,{children:"value"})," is defined it will check if the actual value matches passed value."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"This matcher should be treated as an escape hatch to be used when all other matchers are not suitable."})})]})}function x(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},3901:(e,t,n)=>{n.d(t,{Z:()=>c});n(7294);var s=n(3743);const i={tableOfContentsInline:"tableOfContentsInline_prmo"};var l=n(5893);function c(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:c}=e;return(0,l.jsx)("div",{className:i.tableOfContentsInline,children:(0,l.jsx)(s.Z,{toc:t,minHeadingLevel:n,maxHeadingLevel:c,className:"table-of-contents",linkClassName:null})})}},3743:(e,t,n)=>{n.d(t,{Z:()=>p});var s=n(7294),i=n(6668);function l(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...i}=e;n>=0?t[n].children.push(i):s.push(i)})),s}function c(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function a(e){const t=e.getBoundingClientRect();return t.top===t.bottom?a(e.parentNode):t}function r(e,t){var n;let{anchorTopOffset:s}=t;const i=e.find((e=>a(e).top>=s));if(i){var l;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(a(i))?i:null!=(l=e[e.indexOf(i)-1])?l:null}return null!=(n=e[e.length-1])?n:null}function o(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,i.L)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,s.useRef)(void 0),n=o();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:i,minHeadingLevel:l,maxHeadingLevel:c}=e;function a(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),a=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let i=t;i<=n;i+=1)s.push("h"+i+".anchor");return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:l,maxHeadingLevel:c}),o=r(a,{anchorTopOffset:n.current}),d=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(i),e.classList.add(i),t.current=e):e.classList.remove(i)}(e,e===d)}))}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),()=>{document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}),[e,n])}var h=n(3692),x=n(5893);function m(e){let{toc:t,className:n,linkClassName:s,isChild:i}=e;return t.length?(0,x.jsx)("ul",{className:i?void 0:n,children:t.map((e=>(0,x.jsxs)("li",{children:[(0,x.jsx)(h.Z,{to:"#"+e.id,className:null!=s?s:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,x.jsx)(m,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const u=s.memo(m);function p(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:o,maxHeadingLevel:h,...m}=e;const p=(0,i.L)(),v=null!=o?o:p.tableOfContents.minHeadingLevel,j=null!=h?h:p.tableOfContents.maxHeadingLevel,g=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return(0,s.useMemo)((()=>c({toc:l(t),minHeadingLevel:n,maxHeadingLevel:i})),[t,n,i])}({toc:t,minHeadingLevel:v,maxHeadingLevel:j});return d((0,s.useMemo)((()=>{if(a&&r)return{linkClassName:a,linkActiveClassName:r,minHeadingLevel:v,maxHeadingLevel:j}}),[a,r,v,j])),(0,x.jsx)(u,{toc:g,className:n,linkClassName:a,...m})}},1151:(e,t,n)=>{n.d(t,{a:()=>c});var s=n(7294);const i={},l=s.createContext(i);function c(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}}}]);