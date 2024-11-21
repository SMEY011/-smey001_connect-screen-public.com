(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["2522"],{521:function(e,n,t){"use strict";t.r(n);var s=t("5893"),r=t("65");function i(e){let n=Object.assign({h1:"h1",a:"a",div:"div",p:"p",h2:"h2",code:"code",ul:"ul",li:"li",strong:"strong",pre:"pre",h3:"h3"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"testing-environment",children:["Testing environment",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#testing-environment",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive info",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:["\n",(0,s.jsx)(n.p,{children:"This document is intended for a more advanced audience who want to understand the internals of our testing environment better, e.g., to contribute to the codebase. You should be able to write integration or component tests without reading this."}),"\n"]})]}),"\n",(0,s.jsx)(n.p,{children:"React Native Testing Library allows you to write integration and component tests for your React Native app or library. While the JSX code used in tests closely resembles your React Native app, things are not as simple as they might appear. This document will describe the key elements of our testing environment and highlight things to be aware of when writing more advanced tests or diagnosing issues."}),"\n",(0,s.jsxs)(n.h2,{id:"react-renderers",children:["React renderers",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#react-renderers",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["React allows you to write declarative code using JSX, write function or class components, or use hooks like ",(0,s.jsx)(n.code,{children:"useState"}),". You need to use a renderer to output the results of your components. Every React app uses some renderer:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"React Native is a renderer for mobile apps,"}),"\n",(0,s.jsx)(n.li,{children:"React DOM is a renderer for web apps,"}),"\n",(0,s.jsxs)(n.li,{children:["There are other more ",(0,s.jsx)(n.a,{href:"https://github.com/chentsulin/awesome-react-renderer",target:"_blank",rel:"noopener noreferrer",children:"specialized renderers"})," that can e.g., render to console or HTML canvas."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["When you run your tests in the React Native Testing Library, somewhat contrary to what the name suggests, they are actually ",(0,s.jsx)(n.strong,{children:"not"})," using React Native renderer. This is because this renderer needs to be run on an iOS or Android operating system, so it would need to run on a device or simulator."]}),"\n",(0,s.jsxs)(n.h2,{id:"react-test-renderer",children:["React Test Renderer",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#react-test-renderer",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Instead, RNTL uses React Test Renderer, a specialized renderer that allows rendering to pure JavaScript objects without access to mobile OS and can run in a Node.js environment using Jest (or any other JavaScript test runner)."}),"\n",(0,s.jsx)(n.p,{children:"Using React Test Renderer has pros and cons."}),"\n",(0,s.jsx)(n.p,{children:"Benefits:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"tests can run on most CIs (Linux, etc) and do not require a mobile device or emulator"}),"\n",(0,s.jsx)(n.li,{children:"faster test execution"}),"\n",(0,s.jsx)(n.li,{children:"light runtime environment"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Disadvantages:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Tests do not execute native code"}),"\n",(0,s.jsx)(n.li,{children:"Tests are unaware of the view state that would be managed by native components, e.g., focus, unmanaged text boxes, etc."}),"\n",(0,s.jsx)(n.li,{children:"Assertions do not operate on native view hierarchy"}),"\n",(0,s.jsx)(n.li,{children:"Runtime behaviors are simulated, sometimes imperfectly"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["It's worth noting that the React Testing Library (web one) works a bit differently. While RTL also runs in Jest, it has access to a simulated browser DOM environment from the ",(0,s.jsx)(n.code,{children:"jsdom"})," package, which allows it to use a regular React DOM renderer. Unfortunately, there is no similar React Native runtime environment package. This is probably because while the browser environment is well-defined and highly standardized, the React Native environment constantly evolves in sync with the evolution of underlying OS-es. Maintaining such an environment would require duplicating countless React Native behaviors and keeping them in sync as React Native develops."]}),"\n",(0,s.jsxs)(n.h2,{id:"element-tree",children:["Element tree",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#element-tree",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Calling the ",(0,s.jsx)(n.code,{children:"render()"})," function creates an element tree. This is done internally by invoking ",(0,s.jsx)(n.code,{children:"TestRenderer.create()"}),' method. The output tree represents your React Native component tree, and each node of that tree is an "instance" of some React component (to be more precise, each node represents a React fiber, and only class components have instances, while function components store the hook state using fibers).']}),"\n",(0,s.jsxs)(n.p,{children:["These tree elements are represented by ",(0,s.jsx)(n.code,{children:"ReactTestInstance"})," type:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"interface ReactTestInstance {\n  type: ElementType;\n  props: { [propName: string]: any };\n  parent: ReactTestInstance | null;\n  children: Array<ReactTestInstance | string>;\n\n  // Other props and methods\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Based on: ",(0,s.jsx)(n.a,{href:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react-test-renderer/index.d.ts",target:"_blank",rel:"noopener noreferrer",children:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react-test-renderer/index.d.ts"})]}),"\n",(0,s.jsxs)(n.h2,{id:"host-and-composite-components",children:["Host and composite components",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#host-and-composite-components",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"One of the most important aspects of the element tree is that it is composed of both host and composite components:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://reactnative.dev/architecture/glossary#react-host-components-or-host-components",target:"_blank",rel:"noopener noreferrer",children:"Host components"})," will have direct counterparts in the native view tree. Typical examples are ",(0,s.jsx)(n.code,{children:"<View>"}),", ",(0,s.jsx)(n.code,{children:"<Text>"})," , ",(0,s.jsx)(n.code,{children:"<TextInput>"}),", and ",(0,s.jsx)(n.code,{children:"<Image>"})," from React Native. You can think of these as an analog of ",(0,s.jsx)(n.code,{children:"<div>"}),", ",(0,s.jsx)(n.code,{children:"<span>"})," etc on the Web. You can also create custom host views as native modules or import them from 3rd party libraries, like React Navigation or React Native Gesture Handler."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://reactnative.dev/architecture/glossary#react-composite-components",target:"_blank",rel:"noopener noreferrer",children:"Composite components"})," are React code organization units that exist only on the JavaScript side of your app. Typical examples are components you create (function and class components), components imported from React Native (",(0,s.jsx)(n.code,{children:"View"}),", ",(0,s.jsx)(n.code,{children:"Text"}),", etc.), or 3rd party packages."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["That might initially sound confusing since we put React Native's ",(0,s.jsx)(n.code,{children:"View"})," in both categories. There are two ",(0,s.jsx)(n.code,{children:"View"})," components: composite and host. The relation between them is as follows:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["composite ",(0,s.jsx)(n.code,{children:"View"})," is the type imported from the ",(0,s.jsx)(n.code,{children:"react-native"})," package. It is a JavaScript component that renders the host ",(0,s.jsx)(n.code,{children:"View"})," as its only child in the element tree."]}),"\n",(0,s.jsxs)(n.li,{children:["host ",(0,s.jsx)(n.code,{children:"View"}),", which you do not render directly. React Native takes the props you pass to the composite ",(0,s.jsx)(n.code,{children:"View"}),", does some processing on them and passes them to the host ",(0,s.jsx)(n.code,{children:"View"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The part of the tree looks as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"* <View> (composite)\n  * <View> (host)\n    * children prop passed in JSX\n"})}),"\n",(0,s.jsxs)(n.p,{children:["A similar relation exists between other composite and host pairs: e.g. ",(0,s.jsx)(n.code,{children:"Text"})," , ",(0,s.jsx)(n.code,{children:"TextInput"}),", and ",(0,s.jsx)(n.code,{children:"Image"})," components:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"* <Text> (composite)\n  * <Text> (host)\n    * string (or mixed) content\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Not all React Native components are organized this way, e.g., when you use ",(0,s.jsx)(n.code,{children:"Pressable"})," (or ",(0,s.jsx)(n.code,{children:"TouchableOpacity"}),"), there is no host ",(0,s.jsx)(n.code,{children:"Pressable"}),", but composite ",(0,s.jsx)(n.code,{children:"Pressable"})," is rendering a host ",(0,s.jsx)(n.code,{children:"View"})," with specific props being set:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"* <Pressable> (composite)\n  * <View accessible={true} {...}> (host)\n    * children prop passed in JSX\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"differentiating-between-host-and-composite-elements",children:["Differentiating between host and composite elements",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#differentiating-between-host-and-composite-elements",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Any easy way to differentiate between host and composite elements is the ",(0,s.jsx)(n.code,{children:"type"})," prop of ",(0,s.jsx)(n.code,{children:"ReactTestInstance"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["for host components, it's always a string value representing a component name, e.g., ",(0,s.jsx)(n.code,{children:'"View"'})]}),"\n",(0,s.jsx)(n.li,{children:"for composite components, it's a function or class corresponding to the component"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"You can use the following code to check if a given element is a host one:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"function isHostElement(element: ReactTestInstance) {\n  return typeof element.type === 'string';\n}\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"tree-nodes",children:["Tree nodes",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tree-nodes",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"We encourage you to only assert values on host views in your tests because they represent the user interface view and controls which the user can see and interact with. Users cannot see or interact with composite views as they exist purely in the JavaScript domain and do not generate any visible UI."}),"\n",(0,s.jsxs)(n.h3,{id:"asserting-props",children:["Asserting props",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#asserting-props",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["For example, suppose you assert a ",(0,s.jsx)(n.code,{children:"style"})," prop of a composite element. In that case, there is no guarantee that the style will be visible to the user, as the component author can forget to pass this prop to some underlying ",(0,s.jsx)(n.code,{children:"View"})," or other host component. Similarly ",(0,s.jsx)(n.code,{children:"onPress"})," event handler on a composite prop can be unreachable by the user."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"function ForgotToPassPropsButton({ title, onPress, style }) {\n  return (\n    <Pressable>\n      <Text>{title}</Text>\n    </Pressable>\n  );\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In the above example, user-defined components accept both ",(0,s.jsx)(n.code,{children:"onPress"})," and ",(0,s.jsx)(n.code,{children:"style"})," props but do not pass them (through ",(0,s.jsx)(n.code,{children:"Pressable"}),") to host views, so they will not affect the user interface. Additionally, React Native and other libraries might pass some of the props under different names or transform their values between composite and host components."]}),"\n",(0,s.jsxs)(n.h2,{id:"tree-navigation",children:["Tree navigation",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tree-navigation",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive caution",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"CAUTION"}),(0,s.jsx)(n.div,{className:"rspress-directive-content",children:(0,s.jsx)(n.p,{children:"You should avoid navigating over the element tree, as this makes your testing code fragile and may result in false positives. This section is more relevant for people who want to contribute to our codebase."})})]}),"\n",(0,s.jsxs)(n.p,{children:["You will encounter host and composite elements when navigating a tree of react elements using ",(0,s.jsx)(n.code,{children:"parent"})," or ",(0,s.jsx)(n.code,{children:"children"})," props of a ",(0,s.jsx)(n.code,{children:"ReactTestInstance"})," element. You should be careful when navigating the element tree, as the tree structure for third-party components can change independently from your code and cause unexpected test failures."]}),"\n",(0,s.jsxs)(n.p,{children:["Inside RNTL, we have various tree navigation helpers: ",(0,s.jsx)(n.code,{children:"getHostParent"}),", ",(0,s.jsx)(n.code,{children:"getHostChildren"}),", etc. These are intentionally not exported, as using them is not recommended."]}),"\n",(0,s.jsxs)(n.h2,{id:"queries",children:["Queries",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#queries",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"All recommended Testing Library queries return host components to encourage the best practices described above."}),"\n",(0,s.jsxs)(n.p,{children:["Only ",(0,s.jsx)(n.code,{children:"UNSAFE_*ByType"})," and ",(0,s.jsx)(n.code,{children:"UNSAFE_*ByProps"})," queries can return both host and composite components depending on used predicates. They are marked as unsafe precisely because testing composite components makes your test more fragile."]})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}n.default=o,o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["13.x-next%2Fdocs%2Fadvanced%2Ftesting-env.mdx"]={toc:[{text:"React renderers",id:"react-renderers",depth:2},{text:"React Test Renderer",id:"react-test-renderer",depth:2},{text:"Element tree",id:"element-tree",depth:2},{text:"Host and composite components",id:"host-and-composite-components",depth:2},{text:"Differentiating between host and composite elements",id:"differentiating-between-host-and-composite-elements",depth:3},{text:"Tree nodes",id:"tree-nodes",depth:2},{text:"Asserting props",id:"asserting-props",depth:3},{text:"Tree navigation",id:"tree-navigation",depth:2},{text:"Queries",id:"queries",depth:2}],title:"Testing environment",frontmatter:{}}}}]);