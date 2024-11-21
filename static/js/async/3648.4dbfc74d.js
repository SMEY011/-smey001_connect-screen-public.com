(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["3648"],{979:function(e,s,t){"use strict";t.r(s);var a=t("5893"),i=t("65");function r(e){let s=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",h3:"h3",pre:"pre",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.h1,{id:"migration-to-built-in-jest-matchers",children:["Migration to built-in Jest matchers",(0,a.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#migration-to-built-in-jest-matchers",children:"#"})]}),"\n",(0,a.jsxs)(s.p,{children:["This guide describes the steps necessary to migrate from ",(0,a.jsx)(s.a,{href:"https://github.com/testing-library/jest-native",target:"_blank",rel:"noopener noreferrer",children:"legacy Jest Native matchers v5"})," to ",(0,a.jsx)(s.a,{href:"/docs/api/jest-matchers",children:"built-in Jest matchers"}),"."]}),"\n",(0,a.jsxs)(s.h2,{id:"general-notes",children:["General notes",(0,a.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#general-notes",children:"#"})]}),"\n",(0,a.jsxs)(s.p,{children:["All of the built-in Jest matchers provided by the React Native Testing Library support only host elements. This should not be an issue, as all RNTL v12 queries already return only host elements. When this guide states that a given matcher should work the same it assumes behavior only host elements. If you need to assert the status of composite elements use Jest Native matchers in ",(0,a.jsx)(s.a,{href:"#gradual-migration",children:"legacy mode"}),"."]}),"\n",(0,a.jsxs)(s.h2,{id:"usage",children:["Usage",(0,a.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,a.jsxs)(s.p,{children:["You don't need to do anything to use the built-in matchers. They are automatically available when you import anything from ",(0,a.jsx)(s.code,{children:"@testing-library/react-native"}),"."]}),"\n",(0,a.jsxs)(s.h3,{id:"gradual-migration",children:["Gradual migration",(0,a.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#gradual-migration",children:"#"})]}),"\n",(0,a.jsxs)(s.p,{children:["You can use the built-in matchers alongside legacy Jest Native matchers by changing their import in your ",(0,a.jsx)(s.code,{children:"jest-setup.ts"})," file:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-ts",children:"// Replace this:\n// import '@testing-library/jest-native/extend-expect';\n\n// With this:\nimport '@testing-library/jest-native/legacy-extend-expect';\n"})}),"\n",(0,a.jsxs)(s.p,{children:["In this case legacy matchers will be available using the ",(0,a.jsx)(s.code,{children:"legacy_"})," prefix, e.g.:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-ts",children:"expect(element).legacy_toHaveAccessibilityState({ busy: true });\n"})}),"\n",(0,a.jsxs)(s.h2,{id:"migration-details",children:["Migration details",(0,a.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#migration-details",children:"#"})]}),"\n",(0,a.jsxs)(s.h3,{id:"matchers-not-requiring-changes",children:["Matchers not requiring changes",(0,a.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#matchers-not-requiring-changes",children:"#"})]}),"\n",(0,a.jsx)(s.p,{children:"The following matchers should work the same:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"/docs/api/jest-matchers#tobeemptyelement",children:(0,a.jsx)(s.code,{children:"toBeEmptyElement()"})})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsxs)(s.a,{href:"/docs/api/jest-matchers#tobeenabled",children:[(0,a.jsx)(s.code,{children:"toBeEnabled()"})," / ",(0,a.jsx)(s.code,{children:"toBeDisabled()"})]})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"/docs/api/jest-matchers#tobeonthescreen",children:(0,a.jsx)(s.code,{children:"toBeOnTheScreen()"})})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"/docs/api/jest-matchers#tobevisible",children:(0,a.jsx)(s.code,{children:"toBeVisible()"})})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"/docs/api/jest-matchers#tocontainelement",children:(0,a.jsx)(s.code,{children:"toContainElement()"})})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"/docs/api/jest-matchers#tohaveaccessibilityvalue",children:(0,a.jsx)(s.code,{children:"toHaveAccessibilityValue()"})})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"/docs/api/jest-matchers#tohavedisplayvalue",children:(0,a.jsx)(s.code,{children:"toHaveDisplayValue()"})})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"/docs/api/jest-matchers#tohaveprop",children:(0,a.jsx)(s.code,{children:"toHaveProp()"})})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"/docs/api/jest-matchers#tohavestyle",children:(0,a.jsx)(s.code,{children:"toHaveStyle()"})})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"/docs/api/jest-matchers#tohavetextcontent",children:(0,a.jsx)(s.code,{children:"toHaveTextContent()"})})}),"\n"]}),"\n",(0,a.jsxs)(s.h3,{id:"replaced-matchers",children:["Replaced matchers",(0,a.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#replaced-matchers",children:"#"})]}),"\n",(0,a.jsxs)(s.p,{children:["The ",(0,a.jsx)(s.code,{children:"toHaveAccessibilityState()"})," matcher has been replaced by the following matchers:"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["enabled state: ",(0,a.jsxs)(s.a,{href:"/docs/api/jest-matchers#tobeenabled",children:[(0,a.jsx)(s.code,{children:"toBeEnabled()"})," / ",(0,a.jsx)(s.code,{children:"toBeDisabled()"})]})]}),"\n",(0,a.jsxs)(s.li,{children:["checked state: ",(0,a.jsxs)(s.a,{href:"/docs/api/jest-matchers#tobechecked",children:[(0,a.jsx)(s.code,{children:"toBeChecked()"})," / ",(0,a.jsx)(s.code,{children:"toBePartiallyChecked()"})]})]}),"\n",(0,a.jsxs)(s.li,{children:["selected state: ",(0,a.jsx)(s.a,{href:"/docs/api/jest-matchers#tobeselected",children:(0,a.jsx)(s.code,{children:"toBeSelected()"})})]}),"\n",(0,a.jsxs)(s.li,{children:["expanded state: ",(0,a.jsxs)(s.a,{href:"/docs/api/jest-matchers#tobeexpanded",children:[(0,a.jsx)(s.code,{children:"toBeExpanded()"})," / ",(0,a.jsx)(s.code,{children:"toBeCollapsed()"})]})]}),"\n",(0,a.jsxs)(s.li,{children:["busy state: ",(0,a.jsx)(s.a,{href:"/docs/api/jest-matchers#tobebusy",children:(0,a.jsx)(s.code,{children:"toBeBusy()"})})]}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["The new matchers support both ",(0,a.jsx)(s.code,{children:"accessibilityState"})," and ",(0,a.jsx)(s.code,{children:"aria-*"})," props."]}),"\n",(0,a.jsxs)(s.h3,{id:"added-matchers",children:["Added matchers",(0,a.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#added-matchers",children:"#"})]}),"\n",(0,a.jsxs)(s.p,{children:["New ",(0,a.jsx)(s.a,{href:"/docs/api/jest-matchers#tohaveaccessiblename",children:(0,a.jsx)(s.code,{children:"toHaveAccessibleName()"})})," has been added."]}),"\n",(0,a.jsxs)(s.h3,{id:"noteworthy-details",children:["Noteworthy details",(0,a.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#noteworthy-details",children:"#"})]}),"\n",(0,a.jsx)(s.p,{children:"You should be aware of the following details:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsxs)(s.a,{href:"/docs/api/jest-matchers#tobeenabled",children:[(0,a.jsx)(s.code,{children:"toBeEnabled()"})," / ",(0,a.jsx)(s.code,{children:"toBeDisabled()"})]})," matchers also check the disabled state for the element's ancestors and not only the element itself. This is the same as in legacy Jest Native matchers of the same name but differs from the removed ",(0,a.jsx)(s.code,{children:"toHaveAccessibilityState()"})," matcher."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.a,{href:"/docs/api/jest-matchers#tobechecked",children:(0,a.jsx)(s.code,{children:"toBeChecked()"})})," matcher supports only elements with a ",(0,a.jsx)(s.code,{children:"checkbox"}),", ",(0,a.jsx)(s.code,{children:"radio"})," and 'switch' role"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.a,{href:"/docs/api/jest-matchers#tobechecked",children:(0,a.jsx)(s.code,{children:"toBePartiallyChecked()"})})," matcher supports only elements with ",(0,a.jsx)(s.code,{children:"checkbox"})," role"]}),"\n"]})]})}function n(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}s.default=n,n.__RSPRESS_PAGE_META={},n.__RSPRESS_PAGE_META["13.x-next%2Fdocs%2Fmigration%2Fprevious%2Fjest-matchers.mdx"]={toc:[{text:"General notes",id:"general-notes",depth:2},{text:"Usage",id:"usage",depth:2},{text:"Gradual migration",id:"gradual-migration",depth:3},{text:"Migration details",id:"migration-details",depth:2},{text:"Matchers not requiring changes",id:"matchers-not-requiring-changes",depth:3},{text:"Replaced matchers",id:"replaced-matchers",depth:3},{text:"Added matchers",id:"added-matchers",depth:3},{text:"Noteworthy details",id:"noteworthy-details",depth:3}],title:"Migration to built-in Jest matchers",frontmatter:{}}}}]);