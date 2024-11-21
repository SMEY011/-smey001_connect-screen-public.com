(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["21"],{935:function(e,n,s){"use strict";s.r(n);var i=s("5893"),t=s("65");function r(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",ol:"ol",li:"li",strong:"strong",h3:"h3",pre:"pre",code:"code",h4:"h4",ul:"ul"},(0,t.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"async-tests",children:["Async tests",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#async-tests",children:"#"})]}),"\n",(0,i.jsxs)(n.h2,{id:"summary",children:["Summary",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#summary",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Typically, you would write synchronous tests, as they are simple and get the work done. However, there are cases when using asynchronous (async) tests might be necessary or beneficial. The two most common cases are:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Testing Code with asynchronous operations"}),": When your code relies on asynchronous operations, such as network calls or database queries, async tests are essential. Even though you should mock these network calls, the mock should act similarly to the actual behavior and hence by async."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"UserEvent API:"})," Using the ",(0,i.jsx)(n.a,{href:"/docs/api/events/user-event",children:"User Event API"})," in your tests creates more realistic event handling. These interactions introduce delays (even though these are typically event-loop ticks with 0 ms delays), requiring async tests to handle the timing correctly."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Using async tests when\xa0needed ensures your tests\xa0are\xa0reliable and\xa0simulate\xa0real-world conditions\xa0accurately."}),"\n",(0,i.jsxs)(n.h3,{id:"example",children:["Example",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Consider a basic asynchronous test for a user signing in with correct credentials:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"test('User can sign in with correct credentials', async () => {\n  // Typical test setup\n  const user = userEvent.setup();\n  render(<App />);\n\n  // No need to use async here, components are already rendered\n  expect(screen.getByRole('header', { name: 'Sign in to Hello World App!' })).toBeOnTheScreen();\n\n  // Using await as User Event requires it\n  await user.type(screen.getByLabelText('Username'), 'admin');\n  await user.type(screen.getByLabelText('Password'), 'admin1');\n  await user.press(screen.getByRole('button', { name: 'Sign In' }));\n\n  // Using await as sign in operation is asynchronous\n  expect(await screen.findByRole('header', { name: 'Welcome admin!' })).toBeOnTheScreen();\n\n  // Follow-up assertions do not need to be async, as we already waited for sign in operation to complete\n  expect(\n    screen.queryByRole('header', { name: 'Sign in to Hello World App' })\n  ).not.toBeOnTheScreen();\n  expect(screen.queryByLabelText('Username')).not.toBeOnTheScreen();\n  expect(screen.queryByLabelText('Password')).not.toBeOnTheScreen();\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"async-utilities",children:["Async utilities",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#async-utilities",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"There are several asynchronous utilities you might use in your tests."}),"\n",(0,i.jsxs)(n.h3,{id:"findby-queries",children:[(0,i.jsx)(n.code,{children:"findBy*"})," queries",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#findby-queries",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["The most common are the ",(0,i.jsxs)(n.a,{href:"/docs/api/queries#find-by",children:[(0,i.jsx)(n.code,{children:"findBy*"})," queries"]}),". These are useful when waiting for a matching element to appear. They can be understood as a ",(0,i.jsxs)(n.a,{href:"/docs/api/queries#get-by",children:[(0,i.jsx)(n.code,{children:"getBy*"})," queries"]})," used in conjunction with a ",(0,i.jsxs)(n.a,{href:"/docs/api/misc/async#waitfor",children:[(0,i.jsx)(n.code,{children:"waitFor"})," function"]}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["They accept the same predicates as ",(0,i.jsx)(n.code,{children:"getBy*"})," queries like ",(0,i.jsx)(n.code,{children:"findByRole"}),", ",(0,i.jsx)(n.code,{children:"findByTest"}),", etc. They also have a multiple elements variant called ",(0,i.jsx)(n.a,{href:"/docs/api/queries#find-all-by",children:(0,i.jsx)(n.code,{children:"findAllBy*"})}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"function findByRole: (\n  role: TextMatch,\n  queryOptions?: {\n    // Query specific options\n  }\n  waitForOptions?: {\n    timeout?: number;\n    interval?: number;\n    // ..\n  }\n): Promise<ReactTestInstance>;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Each query has a default ",(0,i.jsx)(n.code,{children:"timeout"})," value of 1000 ms and a default ",(0,i.jsx)(n.code,{children:"interval"})," of 50 ms. Custom timeout and check intervals can be specified if needed, as shown below:"]}),"\n",(0,i.jsxs)(n.h4,{id:"example-1",children:["Example",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example-1",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"const button = await screen.findByRole('button'), { name: 'Start' }, { timeout: 1000, interval: 50 });\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Alternatively, a default global ",(0,i.jsx)(n.code,{children:"timeout"})," value can be set using the ",(0,i.jsxs)(n.a,{href:"/docs/api/misc/config#configure",children:[(0,i.jsx)(n.code,{children:"configure"})," function"]}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"configure({ asyncUtilTimeout: timeout });\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"waitfor-function",children:[(0,i.jsx)(n.code,{children:"waitFor"})," function",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#waitfor-function",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"waitFor"})," function is another option, serving as a lower-level utility in more advanced cases."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"function waitFor<T>(\n  expectation: () => T,\n  options?: {\n    timeout: number;\n    interval: number;\n  }\n): Promise<T>;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["It accepts an ",(0,i.jsx)(n.code,{children:"expectation"})," to be validated and repeats the check every defined interval until it no longer throws an error. Similarly to ",(0,i.jsx)(n.code,{children:"findBy*"})," queries they accept ",(0,i.jsx)(n.code,{children:"timeout"})," and ",(0,i.jsx)(n.code,{children:"interval"})," options and have the same default values of 1000ms for timeout, and a checking interval of 50 ms."]}),"\n",(0,i.jsxs)(n.h4,{id:"example-2",children:["Example",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example-2",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"await waitFor(() => expect(mockAPI).toHaveBeenCalledTimes(1));\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you want to use it with ",(0,i.jsx)(n.code,{children:"getBy*"})," queries, use the ",(0,i.jsx)(n.code,{children:"findBy*"})," queries instead, as they essentially do the same, but offer better developer experience."]}),"\n",(0,i.jsxs)(n.h3,{id:"waitforelementtoberemoved-function",children:[(0,i.jsx)(n.code,{children:"waitForElementToBeRemoved"})," function",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#waitforelementtoberemoved-function",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["A specialized function, ",(0,i.jsx)(n.a,{href:"/docs/api/misc/async#waitforelementtoberemoved",children:(0,i.jsx)(n.code,{children:"waitForElementToBeRemoved"})}),", is used to verify that a matching element was present but has since been removed."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"function waitForElementToBeRemoved<T>(\n  expectation: () => T,\n  options?: {\n    timeout: number;\n    interval: number;\n  }\n): Promise<T> {}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This function is, in a way, the negation of ",(0,i.jsx)(n.code,{children:"waitFor"})," as it expects the initial expectation to be true (not throw an error), only to turn invalid (start throwing errors) on subsequent runs. It operates using the same ",(0,i.jsx)(n.code,{children:"timeout"})," and ",(0,i.jsx)(n.code,{children:"interval"})," parameters as ",(0,i.jsx)(n.code,{children:"findBy*"})," queries and ",(0,i.jsx)(n.code,{children:"waitFor"}),"."]}),"\n",(0,i.jsxs)(n.h4,{id:"example-3",children:["Example",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example-3",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"await waitForElementToBeRemoved(() => getByText('Hello World'));\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"fake-timers",children:["Fake Timers",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#fake-timers",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Asynchronous tests can take long to execute due to the delays introduced by asynchronous operations. To mitigate this, fake timers can be used. These are particularly useful when delays are mere waits, such as the 130 milliseconds wait introduced by the UserEvent ",(0,i.jsx)(n.code,{children:"press()"})," event due to React Native runtime behavior or simulated 1000 wait in a API call mock. Fake timers allow for precise fast-forwarding through these wait periods."]}),"\n",(0,i.jsxs)(n.p,{children:["Here are the basics of using ",(0,i.jsx)(n.a,{href:"https://jestjs.io/docs/timer-mocks",target:"_blank",rel:"noopener noreferrer",children:"Jest fake timers"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Enable fake timers with: ",(0,i.jsx)(n.code,{children:"jest.useFakeTimers()"})]}),"\n",(0,i.jsxs)(n.li,{children:["Disable fake timers with: ",(0,i.jsx)(n.code,{children:"jest.useRealTimers()"})]}),"\n",(0,i.jsxs)(n.li,{children:["Advance fake timers forward with: ",(0,i.jsx)(n.code,{children:"jest.advanceTimersByTime(interval)"})]}),"\n",(0,i.jsxs)(n.li,{children:["Run ",(0,i.jsx)(n.strong,{children:"all timers"})," to completion with: ",(0,i.jsx)(n.code,{children:"jest.runAllTimers()"})]}),"\n",(0,i.jsxs)(n.li,{children:["Run ",(0,i.jsx)(n.strong,{children:"currently pending timers"})," to completion with: ",(0,i.jsx)(n.code,{children:"jest.runOnlyPendingTimers()"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Be cautious when running all timers to completion as it might create an infinite loop if these timers schedule follow-up timers. In such cases, it's safer to use ",(0,i.jsx)(n.code,{children:"jest.runOnlyPendingTimers()"})," to avoid ending up in an infinite loop of scheduled tasks."]}),"\n",(0,i.jsxs)(n.p,{children:["You can use both built-in Jest fake timers, as well as ",(0,i.jsx)(n.a,{href:"https://sinonjs.org/releases/latest/fake-timers/",target:"_blank",rel:"noopener noreferrer",children:"Sinon.JS fake timers"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Note: you do not need to advance timers by hand when using User Event API, as it's automatically."})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}n.default=a,a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["13.x-next%2Fcookbook%2Fbasics%2Fasync-tests.md"]={toc:[{text:"Summary",id:"summary",depth:2},{text:"Example",id:"example",depth:3},{text:"Async utilities",id:"async-utilities",depth:2},{text:"`findBy*` queries",id:"findby-queries",depth:3},{text:"Example",id:"example-1",depth:4},{text:"`waitFor` function",id:"waitfor-function",depth:3},{text:"Example",id:"example-2",depth:4},{text:"`waitForElementToBeRemoved` function",id:"waitforelementtoberemoved-function",depth:3},{text:"Example",id:"example-3",depth:4},{text:"Fake Timers",id:"fake-timers",depth:2}],title:"Async tests",frontmatter:{}}}}]);