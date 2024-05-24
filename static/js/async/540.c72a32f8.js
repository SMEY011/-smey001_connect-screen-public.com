(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["540"],{174:function(e,t,n){"use strict";n.r(t);var s=n("5893"),r=n("65");function o(e){let t=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",blockquote:"blockquote",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h1,{id:"introduction",children:["Introduction",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#introduction",children:"#"})]}),"\n",(0,s.jsxs)(t.h2,{id:"the-problem",children:["The problem",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#the-problem",children:"#"})]}),"\n",(0,s.jsx)(t.p,{children:"You want to write maintainable tests for your React Native components. As a part of this goal, you want your tests to avoid including implementation details of your components and focus on making your tests give you the confidence they are intended. As part of this, you want your tests to be maintainable in the long run so refactors of your components (changes to implementation but not functionality) don't break your tests and slow you and your team down."}),"\n",(0,s.jsxs)(t.h2,{id:"this-solution",children:["This solution",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#this-solution",children:"#"})]}),"\n",(0,s.jsx)(t.p,{children:"The React Native Testing Library (RNTL) is a lightweight solution for testing React Native components. It provides light utility functions on top of React Test Renderer, in a way that encourages better testing practices. Its primary guiding principle is:"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"The more your tests resemble how your software is used, the more confidence they can give you."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["This project is inspired by ",(0,s.jsx)(t.a,{href:"https://github.com/testing-library/react-testing-library",target:"_blank",rel:"noopener noreferrer",children:"React Testing Library"}),". It is tested to work with Jest, but it should work with other test runners as well."]}),"\n",(0,s.jsxs)(t.h2,{id:"example",children:["Example",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"import { render, screen, userEvent } from '@testing-library/react-native';\nimport { QuestionsBoard } from '../QuestionsBoard';\n\ntest('form submits two answers', async () => {\n  const questions = ['q1', 'q2'];\n  const onSubmit = jest.fn();\n\n  const user = userEvent.setup();\n  render(<QuestionsBoard questions={questions} onSubmit={onSubmit} />);\n\n  const answerInputs = screen.getAllByLabelText('answer input');\n  await user.type(answerInputs[0], 'a1');\n  await user.type(answerInputs[1], 'a2');\n  await user.press(screen.getByRole('button', { name: 'Submit' }));\n\n  expect(onSubmit).toHaveBeenCalledWith({\n    1: { q: 'q1', a: 'a1' },\n    2: { q: 'q2', a: 'a2' },\n  });\n});\n"})}),"\n",(0,s.jsxs)(t.p,{children:["You can find the source of the ",(0,s.jsx)(t.code,{children:"QuestionsBoard"})," component and this example ",(0,s.jsx)(t.a,{href:"https://github.com/callstack/react-native-testing-library/blob/main/src/__tests__/questionsBoard.test.tsx",target:"_blank",rel:"noopener noreferrer",children:"here"}),"."]})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}t.default=i,i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["12.x%2Fdocs%2Fstart%2Fintro.md"]={toc:[{text:"The problem",id:"the-problem",depth:2},{text:"This solution",id:"this-solution",depth:2},{text:"Example",id:"example",depth:2}],title:"Introduction",frontmatter:{}}}}]);