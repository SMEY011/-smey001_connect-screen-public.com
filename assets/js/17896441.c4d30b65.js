(self.webpackChunkreact_native_testing_library_website=self.webpackChunkreact_native_testing_library_website||[]).push([[918],{4411:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Rt});var s=n(7294),a=n(833),o=n(902),i=n(5893);const l=s.createContext(null);function c(e){let{children:t,content:n}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,i.jsx)(l.Provider,{value:a,children:t})}function r(){const e=(0,s.useContext)(l);if(null===e)throw new o.i6("DocProvider");return e}function d(){var e;const{metadata:t,frontMatter:n,assets:s}=r();return(0,i.jsx)(a.d,{title:t.title,description:t.description,keywords:n.keywords,image:null!=(e=s.image)?e:n.image})}var u=n(512),m=n(7524),h=n(5999),p=n(3692);function f(e){const{permalink:t,title:n,subLabel:s,isNext:a}=e;return(0,i.jsxs)(p.Z,{className:(0,u.Z)("pagination-nav__link",a?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}function x(e){const{previous:t,next:n}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,i.jsx)(f,{...t,subLabel:(0,i.jsx)(h.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,i.jsx)(f,{...n,subLabel:(0,i.jsx)(h.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function b(){const{metadata:e}=r();return(0,i.jsx)(x,{previous:e.previous,next:e.next})}var g=n(2263),v=n(143),j=n(5281),N=n(373),C=n(4477);const k={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,i.jsx)(h.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,i.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,i.jsx)(h.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,i.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function y(e){const t=k[e.versionMetadata.banner];return(0,i.jsx)(t,{...e})}function L(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,i.jsx)(h.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,i.jsx)("b",{children:(0,i.jsx)(p.Z,{to:n,onClick:s,children:(0,i.jsx)(h.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function _(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:s}}=(0,g.Z)(),{pluginId:a}=(0,v.gA)({failfast:!0}),{savePreferredVersionName:o}=(0,N.J)(a),{latestDocSuggestion:l,latestVersionSuggestion:c}=(0,v.Jo)(a),r=null!=l?l:(d=c).docs.find((e=>e.id===d.mainDocId));var d;return(0,i.jsxs)("div",{className:(0,u.Z)(t,j.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,i.jsx)("div",{children:(0,i.jsx)(y,{siteTitle:s,versionMetadata:n})}),(0,i.jsx)("div",{className:"margin-top--md",children:(0,i.jsx)(L,{versionLabel:c.label,to:r.path,onClick:()=>o(c.name)})})]})}function B(e){let{className:t}=e;const n=(0,C.E)();return n.banner?(0,i.jsx)(_,{className:t,versionMetadata:n}):null}function w(e){let{className:t}=e;const n=(0,C.E)();return n.badge?(0,i.jsx)("span",{className:(0,u.Z)(t,j.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,i.jsx)(h.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}const Z={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function T(e){let{permalink:t,label:n,count:s}=e;return(0,i.jsxs)(p.Z,{href:t,className:(0,u.Z)(Z.tag,s?Z.tagWithCount:Z.tagRegular),children:[n,s&&(0,i.jsx)("span",{children:s})]})}const E={tags:"tags_jXut",tag:"tag_QGVx"};function H(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(h.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,u.Z)(E.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:n}=e;return(0,i.jsx)("li",{className:E.tag,children:(0,i.jsx)(T,{label:t,permalink:n})},n)}))})]})}const A={iconEdit:"iconEdit_Z9Sw"};function I(e){let{className:t,...n}=e;return(0,i.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.Z)(A.iconEdit,t),"aria-hidden":"true",...n,children:(0,i.jsx)("g",{children:(0,i.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function M(e){let{editUrl:t}=e;return(0,i.jsxs)(p.Z,{to:t,className:j.k.common.editThisPage,children:[(0,i.jsx)(I,{}),(0,i.jsx)(h.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}function S(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,g.Z)(),n=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,g.Z)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:n,...e})}function U(e){let{lastUpdatedAt:t}=e;const n=new Date(t),s=S({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(n);return(0,i.jsx)(h.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,i.jsx)("b",{children:(0,i.jsx)("time",{dateTime:n.toISOString(),itemProp:"dateModified",children:s})})},children:" on {date}"})}function z(e){let{lastUpdatedBy:t}=e;return(0,i.jsx)(h.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,i.jsx)("b",{children:t})},children:" by {user}"})}function V(e){let{lastUpdatedAt:t,lastUpdatedBy:n}=e;return(0,i.jsxs)("span",{className:j.k.common.lastUpdated,children:[(0,i.jsx)(h.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,i.jsx)(U,{lastUpdatedAt:t}):"",byUser:n?(0,i.jsx)(z,{lastUpdatedBy:n}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const R={lastUpdated:"lastUpdated_JAkA"};function O(e){let{className:t,editUrl:n,lastUpdatedAt:s,lastUpdatedBy:a}=e;return(0,i.jsxs)("div",{className:(0,u.Z)("row",t),children:[(0,i.jsx)("div",{className:"col",children:n&&(0,i.jsx)(M,{editUrl:n})}),(0,i.jsx)("div",{className:(0,u.Z)("col",R.lastUpdated),children:(s||a)&&(0,i.jsx)(V,{lastUpdatedAt:s,lastUpdatedBy:a})})]})}function P(){const{metadata:e}=r(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,tags:a}=e,o=a.length>0,l=!!(t||n||s);return o||l?(0,i.jsxs)("footer",{className:(0,u.Z)(j.k.docs.docFooter,"docusaurus-mt-lg"),children:[o&&(0,i.jsx)("div",{className:(0,u.Z)("row margin-top--sm",j.k.docs.docFooterTagsRow),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(H,{tags:a})})}),l&&(0,i.jsx)(O,{className:(0,u.Z)("margin-top--sm",j.k.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s})]}):null}var D=n(6043),W=n(3743);const F={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function q(e){let{collapsed:t,...n}=e;return(0,i.jsx)("button",{type:"button",...n,className:(0,u.Z)("clean-btn",F.tocCollapsibleButton,!t&&F.tocCollapsibleButtonExpanded,n.className),children:(0,i.jsx)(h.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const G={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function J(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:o,toggleCollapsed:l}=(0,D.u)({initialState:!0});return(0,i.jsxs)("div",{className:(0,u.Z)(G.tocCollapsible,!o&&G.tocCollapsibleExpanded,n),children:[(0,i.jsx)(q,{collapsed:o,onClick:l}),(0,i.jsx)(D.z,{lazy:!0,className:G.tocCollapsibleContent,collapsed:o,children:(0,i.jsx)(W.Z,{toc:t,minHeadingLevel:s,maxHeadingLevel:a})})]})}const $={tocMobile:"tocMobile_ITEo"};function Y(){const{toc:e,frontMatter:t}=r();return(0,i.jsx)(J,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.Z)(j.k.docs.docTocMobile,$.tocMobile)})}const Q={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},X="table-of-contents__link toc-highlight",K="table-of-contents__link--active";function ee(e){let{className:t,...n}=e;return(0,i.jsx)("div",{className:(0,u.Z)(Q.tableOfContents,"thin-scrollbar",t),children:(0,i.jsx)(W.Z,{...n,linkClassName:X,linkActiveClassName:K})})}function te(){const{toc:e,frontMatter:t}=r();return(0,i.jsx)(ee,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:j.k.docs.docTocDesktop})}var ne=n(2503);const se={},ae=s.createContext(se);function oe(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(se):e.components||se:function(e){const t=s.useContext(ae);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}(e.components),s.createElement(ae.Provider,{value:t},e.children)}var ie=n(5742),le=n(2389),ce=n(2949),re=n(6668);function de(){const{prism:e}=(0,re.L)(),{colorMode:t}=(0,ce.I)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}var ue=n(7594),me=n.n(ue);const he=/title=(?<quote>["'])(?<title>.*?)\1/,pe=/\{(?<range>[\d,-]+)\}/,fe={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},xe={...fe,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},be=Object.keys(fe);function ge(e,t){const n=e.map((e=>{const{start:n,end:s}=xe[e];return"(?:"+n+"\\s*("+t.flatMap((e=>{var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+s+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function ve(e,t){let n=e.replace(/\n$/,"");const{language:s,magicComments:a,metastring:o}=t;if(o&&pe.test(o)){const e=o.match(pe).groups.range;if(0===a.length)throw new Error("A highlight range has been given in code block's metastring (``` "+o+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");const t=a[0].className,s=me()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(s),code:n}}if(void 0===s)return{lineClassNames:{},code:n};const i=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return ge(["js","jsBlock"],t);case"jsx":case"tsx":return ge(["js","jsBlock","jsx"],t);case"html":return ge(["js","jsBlock","html"],t);case"python":case"py":case"bash":return ge(["bash"],t);case"markdown":case"md":return ge(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return ge(["tex"],t);case"lua":case"haskell":case"sql":return ge(["lua"],t);case"wasm":return ge(["wasm"],t);case"vb":case"vba":case"visual-basic":return ge(["vb","rem"],t);case"vbnet":return ge(["vbnet","rem"],t);case"batch":return ge(["rem"],t);case"basic":return ge(["rem","f90"],t);case"fsharp":return ge(["js","ml"],t);case"ocaml":case"sml":return ge(["ml"],t);case"fortran":return ge(["f90"],t);case"cobol":return ge(["cobol"],t);default:return ge(be,t)}}(s,a),l=n.split("\n"),c=Object.fromEntries(a.map((e=>[e.className,{start:0,range:""}]))),r=Object.fromEntries(a.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),d=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),u=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let h=0;h<l.length;){const e=l[h].match(i);if(!e){h+=1;continue}const t=e.slice(1).find((e=>void 0!==e));r[t]?c[r[t]].range+=h+",":d[t]?c[d[t]].start=h:u[t]&&(c[u[t]].range+=c[u[t]].start+"-"+(h-1)+","),l.splice(h,1)}n=l.join("\n");const m={};return Object.entries(c).forEach((e=>{let[t,{range:n}]=e;me()(n).forEach((e=>{null!=m[e]||(m[e]=[]),m[e].push(t)}))})),{lineClassNames:m,code:n}}const je={codeBlockContainer:"codeBlockContainer_Ckt0"};function Ne(e){let{as:t,...n}=e;const s=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[s,a]=e;const o=t[s];o&&"string"==typeof a&&(n[o]=a)})),n}(de());return(0,i.jsx)(t,{...n,style:s,className:(0,u.Z)(n.className,je.codeBlockContainer,j.k.common.codeBlock)})}const Ce={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function ke(e){let{children:t,className:n}=e;return(0,i.jsx)(Ne,{as:"pre",tabIndex:0,className:(0,u.Z)(Ce.codeBlockStandalone,"thin-scrollbar",n),children:(0,i.jsx)("code",{className:Ce.codeBlockLines,children:t})})}const ye={attributes:!0,characterData:!0,childList:!0,subtree:!0};function Le(e,t){const[n,a]=(0,s.useState)(),i=(0,s.useCallback)((()=>{var t;a(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,a]);(0,s.useEffect)((()=>{i()}),[i]),function(e,t,n){void 0===n&&(n=ye);const a=(0,o.zX)(t),i=(0,o.Ql)(n);(0,s.useEffect)((()=>{const t=new MutationObserver(a);return e&&t.observe(e,i),()=>t.disconnect()}),[e,a,i])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),i())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var _e=n(2573);const Be={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function we(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:a,getTokenProps:o}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const l=a({line:t,className:(0,u.Z)(n,s&&Be.codeLine)}),c=t.map(((e,t)=>(0,i.jsx)("span",{...o({token:e})},t)));return(0,i.jsxs)("span",{...l,children:[s?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:Be.codeLineNumber}),(0,i.jsx)("span",{className:Be.codeLineContent,children:c})]}):c,(0,i.jsx)("br",{})]})}function Ze(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function Te(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const Ee={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function He(e){let{code:t,className:n}=e;const[a,o]=(0,s.useState)(!1),l=(0,s.useRef)(void 0),c=(0,s.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError("Expected parameter `text` to be a `string`, got `"+typeof e+"`.");const s=document.createElement("textarea"),a=document.activeElement;s.value=e,s.setAttribute("readonly",""),s.style.contain="strict",s.style.position="absolute",s.style.left="-9999px",s.style.fontSize="12pt";const o=document.getSelection(),i=o.rangeCount>0&&o.getRangeAt(0);n.append(s),s.select(),s.selectionStart=0,s.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}s.remove(),i&&(o.removeAllRanges(),o.addRange(i)),a&&a.focus()}(t),o(!0),l.current=window.setTimeout((()=>{o(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(l.current)),[]),(0,i.jsx)("button",{type:"button","aria-label":a?(0,h.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,h.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,h.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,u.Z)("clean-btn",n,Ee.copyButton,a&&Ee.copyButtonCopied),onClick:c,children:(0,i.jsxs)("span",{className:Ee.copyButtonIcons,"aria-hidden":"true",children:[(0,i.jsx)(Ze,{className:Ee.copyButtonIcon}),(0,i.jsx)(Te,{className:Ee.copyButtonSuccessIcon})]})})}function Ae(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const Ie={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function Me(e){let{className:t,onClick:n,isEnabled:s}=e;const a=(0,h.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,i.jsx)("button",{type:"button",onClick:n,className:(0,u.Z)("clean-btn",t,s&&Ie.wordWrapButtonEnabled),"aria-label":a,title:a,children:(0,i.jsx)(Ae,{className:Ie.wordWrapButtonIcon,"aria-hidden":"true"})})}function Se(e){var t;let{children:n,className:a="",metastring:o,title:l,showLineNumbers:c,language:r}=e;const{prism:{defaultLanguage:d,magicComments:m}}=(0,re.L)(),h=function(e){return null==e?void 0:e.toLowerCase()}(null!=(t=null!=r?r:function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(a))?t:d),p=de(),f=function(){const[e,t]=(0,s.useState)(!1),[n,a]=(0,s.useState)(!1),o=(0,s.useRef)(null),i=(0,s.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),l=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");a(n)}),[o]);return Le(o,l),(0,s.useEffect)((()=>{l()}),[e,l]),(0,s.useEffect)((()=>(window.addEventListener("resize",l,{passive:!0}),()=>{window.removeEventListener("resize",l)})),[l]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:i}}(),x=function(e){var t,n;return null!=(t=null==e||null==(n=e.match(he))?void 0:n.groups.title)?t:""}(o)||l,{lineClassNames:b,code:g}=ve(n,{metastring:o,language:h,magicComments:m}),v=null!=c?c:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(o);return(0,i.jsxs)(Ne,{as:"div",className:(0,u.Z)(a,h&&!a.includes("language-"+h)&&"language-"+h),children:[x&&(0,i.jsx)("div",{className:Ce.codeBlockTitle,children:x}),(0,i.jsxs)("div",{className:Ce.codeBlockContent,children:[(0,i.jsx)(_e.y$,{theme:p,code:g,language:null!=h?h:"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:a,getTokenProps:o}=e;return(0,i.jsx)("pre",{tabIndex:0,ref:f.codeBlockRef,className:(0,u.Z)(t,Ce.codeBlock,"thin-scrollbar"),style:n,children:(0,i.jsx)("code",{className:(0,u.Z)(Ce.codeBlockLines,v&&Ce.codeBlockLinesWithNumbering),children:s.map(((e,t)=>(0,i.jsx)(we,{line:e,getLineProps:a,getTokenProps:o,classNames:b[t],showLineNumbers:v},t)))})})}}),(0,i.jsxs)("div",{className:Ce.buttonGroup,children:[(f.isEnabled||f.isCodeScrollable)&&(0,i.jsx)(Me,{className:Ce.codeButton,onClick:()=>f.toggle(),isEnabled:f.isEnabled}),(0,i.jsx)(He,{className:Ce.codeButton,code:g})]})]})]})}function Ue(e){let{children:t,...n}=e;const a=(0,le.Z)(),o=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof o?Se:ke;return(0,i.jsx)(l,{...n,children:o},String(a))}function ze(e){return(0,i.jsx)("code",{...e})}var Ve=n(8138);const Re={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function Oe(e){return!!e&&("SUMMARY"===e.tagName||Oe(e.parentElement))}function Pe(e,t){return!!e&&(e===t||Pe(e.parentElement,t))}function De(e){let{summary:t,children:n,...a}=e;(0,Ve.Z)().collectAnchor(a.id);const o=(0,le.Z)(),l=(0,s.useRef)(null),{collapsed:c,setCollapsed:r}=(0,D.u)({initialState:!a.open}),[d,m]=(0,s.useState)(a.open),h=s.isValidElement(t)?t:(0,i.jsx)("summary",{children:null!=t?t:"Details"});return(0,i.jsxs)("details",{...a,ref:l,open:d,"data-collapsed":c,className:(0,u.Z)(Re.details,o&&Re.isBrowser,a.className),onMouseDown:e=>{Oe(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;Oe(t)&&Pe(t,l.current)&&(e.preventDefault(),c?(r(!1),m(!0)):r(!0))},children:[h,(0,i.jsx)(D.z,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{r(e),m(!e)},children:(0,i.jsx)("div",{className:Re.collapsibleContent,children:n})})]})}const We={details:"details_b_Ee"},Fe="alert alert--info";function qe(e){let{...t}=e;return(0,i.jsx)(De,{...t,className:(0,u.Z)(Fe,We.details,t.className)})}function Ge(e){const t=s.Children.toArray(e.children),n=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),a=(0,i.jsx)(i.Fragment,{children:t.filter((e=>e!==n))});return(0,i.jsx)(qe,{...e,summary:n,children:a})}function Je(e){return(0,i.jsx)(ne.Z,{...e})}const $e={containsTaskList:"containsTaskList_mC6p"};function Ye(e){if(void 0!==e)return(0,u.Z)(e,(null==e?void 0:e.includes("contains-task-list"))&&$e.containsTaskList)}const Qe={img:"img_ev3q"};function Xe(e){var t;const{mdxAdmonitionTitle:n,rest:a}=function(e){const t=s.Children.toArray(e),n=t.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),a=t.filter((e=>e!==n));return{mdxAdmonitionTitle:null==n?void 0:n.props.children,rest:a.length>0?(0,i.jsx)(i.Fragment,{children:a}):null}}(e.children),o=null!=(t=e.title)?t:n;return{...e,...o&&{title:o},children:a}}const Ke={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function et(e){let{type:t,className:n,children:s}=e;return(0,i.jsx)("div",{className:(0,u.Z)(j.k.common.admonition,j.k.common.admonitionType(t),Ke.admonition,n),children:s})}function tt(e){let{icon:t,title:n}=e;return(0,i.jsxs)("div",{className:Ke.admonitionHeading,children:[(0,i.jsx)("span",{className:Ke.admonitionIcon,children:t}),n]})}function nt(e){let{children:t}=e;return t?(0,i.jsx)("div",{className:Ke.admonitionContent,children:t}):null}function st(e){const{type:t,icon:n,title:s,children:a,className:o}=e;return(0,i.jsxs)(et,{type:t,className:o,children:[s||n?(0,i.jsx)(tt,{title:s,icon:n}):null,(0,i.jsx)(nt,{children:a})]})}function at(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const ot={icon:(0,i.jsx)(at,{}),title:(0,i.jsx)(h.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function it(e){return(0,i.jsx)(st,{...ot,...e,className:(0,u.Z)("alert alert--secondary",e.className),children:e.children})}function lt(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const ct={icon:(0,i.jsx)(lt,{}),title:(0,i.jsx)(h.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function rt(e){return(0,i.jsx)(st,{...ct,...e,className:(0,u.Z)("alert alert--success",e.className),children:e.children})}function dt(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const ut={icon:(0,i.jsx)(dt,{}),title:(0,i.jsx)(h.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function mt(e){return(0,i.jsx)(st,{...ut,...e,className:(0,u.Z)("alert alert--info",e.className),children:e.children})}function ht(e){return(0,i.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const pt={icon:(0,i.jsx)(ht,{}),title:(0,i.jsx)(h.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function ft(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const xt={icon:(0,i.jsx)(ft,{}),title:(0,i.jsx)(h.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const bt={icon:(0,i.jsx)(ht,{}),title:(0,i.jsx)(h.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const gt={...{note:it,tip:rt,info:mt,warning:function(e){return(0,i.jsx)(st,{...pt,...e,className:(0,u.Z)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,i.jsx)(st,{...xt,...e,className:(0,u.Z)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,i.jsx)(it,{title:"secondary",...e}),important:e=>(0,i.jsx)(mt,{title:"important",...e}),success:e=>(0,i.jsx)(rt,{title:"success",...e}),caution:function(e){return(0,i.jsx)(st,{...bt,...e,className:(0,u.Z)("alert alert--warning",e.className),children:e.children})}}};function vt(e){const t=Xe(e),n=(s=t.type,gt[s]||(console.warn('No admonition component found for admonition type "'+s+'". Using Info as fallback.'),gt.info));var s;return(0,i.jsx)(n,{...t})}const jt={Head:ie.Z,details:Ge,Details:Ge,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,i.jsx)(ze,{...e}):(0,i.jsx)(Ue,{...e})},a:function(e){return(0,i.jsx)(p.Z,{...e})},pre:function(e){return(0,i.jsx)(i.Fragment,{children:e.children})},ul:function(e){return(0,i.jsx)("ul",{...e,className:Ye(e.className)})},li:function(e){return(0,Ve.Z)().collectAnchor(e.id),(0,i.jsx)("li",{...e})},img:function(e){return(0,i.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,u.Z)(t,Qe.img))});var t},h1:e=>(0,i.jsx)(Je,{as:"h1",...e}),h2:e=>(0,i.jsx)(Je,{as:"h2",...e}),h3:e=>(0,i.jsx)(Je,{as:"h3",...e}),h4:e=>(0,i.jsx)(Je,{as:"h4",...e}),h5:e=>(0,i.jsx)(Je,{as:"h5",...e}),h6:e=>(0,i.jsx)(Je,{as:"h6",...e}),admonition:vt,mermaid:()=>null};function Nt(e){let{children:t}=e;return(0,i.jsx)(oe,{components:jt,children:t})}function Ct(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=r();return t.hide_title||void 0!==n?null:e.title}();return(0,i.jsxs)("div",{className:(0,u.Z)(j.k.docs.docMarkdown,"markdown"),children:[n&&(0,i.jsx)("header",{children:(0,i.jsx)(ne.Z,{as:"h1",children:n})}),(0,i.jsx)(Nt,{children:t})]})}var kt=n(3438),yt=n(8596),Lt=n(4996);function _t(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const Bt={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function wt(){const e=(0,Lt.Z)("/");return(0,i.jsx)("li",{className:"breadcrumbs__item",children:(0,i.jsx)(p.Z,{"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,i.jsx)(_t,{className:Bt.breadcrumbHomeIcon})})})}const Zt={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function Tt(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,i.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,i.jsx)(p.Z,{className:a,href:n,itemProp:"item",children:(0,i.jsx)("span",{itemProp:"name",children:t})}):(0,i.jsx)("span",{className:a,children:t})}function Et(e){let{children:t,active:n,index:s,addMicrodata:a}=e;return(0,i.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,i.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function Ht(){const e=(0,kt.s1)(),t=(0,yt.Ns)();return e?(0,i.jsx)("nav",{className:(0,u.Z)(j.k.docs.docBreadcrumbs,Zt.breadcrumbsContainer),"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,i.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,i.jsx)(wt,{}),e.map(((t,n)=>{const s=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,i.jsx)(Et,{active:s,index:n,addMicrodata:!!a,children:(0,i.jsx)(Tt,{href:a,isLast:s,children:t.label})},n)}))]})}):null}function At(){return(0,i.jsx)(h.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function It(){return(0,i.jsx)(h.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function Mt(){return(0,i.jsx)(ie.Z,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function St(e){let{className:t}=e;return(0,i.jsx)(vt,{type:"caution",title:(0,i.jsx)(At,{}),className:(0,u.Z)(t,j.k.common.unlistedBanner),children:(0,i.jsx)(It,{})})}function Ut(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Mt,{}),(0,i.jsx)(St,{...e})]})}const zt={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function Vt(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=r(),n=(0,m.i)(),s=e.hide_table_of_contents,a=!s&&t.length>0;return{hidden:s,mobile:a?(0,i.jsx)(Y,{}):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:(0,i.jsx)(te,{})}}(),{metadata:{unlisted:s}}=r();return(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:(0,u.Z)("col",!n.hidden&&zt.docItemCol),children:[s&&(0,i.jsx)(Ut,{}),(0,i.jsx)(B,{}),(0,i.jsxs)("div",{className:zt.docItemContainer,children:[(0,i.jsxs)("article",{children:[(0,i.jsx)(Ht,{}),(0,i.jsx)(w,{}),n.mobile,(0,i.jsx)(Ct,{children:t}),(0,i.jsx)(P,{})]}),(0,i.jsx)(b,{})]})]}),n.desktop&&(0,i.jsx)("div",{className:"col col--3",children:n.desktop})]})}function Rt(e){const t="docs-doc-id-"+e.content.metadata.id,n=e.content;return(0,i.jsx)(c,{content:e.content,children:(0,i.jsxs)(a.FG,{className:t,children:[(0,i.jsx)(d,{}),(0,i.jsx)(Vt,{children:(0,i.jsx)(n,{})})]})})}},3743:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var s=n(7294),a=n(6668);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):s.push(a)})),s}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function l(e){const t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function c(e,t){var n;let{anchorTopOffset:s}=t;const a=e.find((e=>l(e).top>=s));if(a){var o;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(a))?a:null!=(o=e[e.indexOf(a)-1])?o:null}return null!=(n=e[e.length-1])?n:null}function r(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.L)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,s.useRef)(void 0),n=r();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:i}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let a=t;a<=n;a+=1)s.push("h"+a+".anchor");return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:o,maxHeadingLevel:i}),r=c(l,{anchorTopOffset:n.current}),d=e.find((e=>r&&r.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}var u=n(3692),m=n(5893);function h(e){let{toc:t,className:n,linkClassName:s,isChild:a}=e;return t.length?(0,m.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.Z,{to:"#"+e.id,className:null!=s?s:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const p=s.memo(h);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:r,maxHeadingLevel:u,...h}=e;const f=(0,a.L)(),x=null!=r?r:f.tableOfContents.minHeadingLevel,b=null!=u?u:f.tableOfContents.maxHeadingLevel,g=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>i({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:x,maxHeadingLevel:b});return d((0,s.useMemo)((()=>{if(l&&c)return{linkClassName:l,linkActiveClassName:c,minHeadingLevel:x,maxHeadingLevel:b}}),[l,c,x,b])),(0,m.jsx)(p,{toc:g,className:n,linkClassName:l,...h})}},7594:(e,t)=>{function n(e){let t,n=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))n.push(parseInt(s,10));else if(t=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,a,o]=t;if(s&&o){s=parseInt(s),o=parseInt(o);const e=s<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=s;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);