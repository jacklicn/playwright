(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{188:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return l})),i.d(t,"metadata",(function(){return o})),i.d(t,"rightToc",(function(){return c})),i.d(t,"default",(function(){return b}));var n=i(2),a=i(6),r=(i(0),i(211)),l={id:"class-accessibility",title:"class: Accessibility"},o={unversionedId:"api/class-accessibility",id:"api/class-accessibility",isDocsHomePage:!1,title:"class: Accessibility",description:"The Accessibility class provides methods for inspecting Chromium's accessibility tree. The accessibility tree is used by assistive technology such as screen readers or switches.",source:"@site/docs/api/class-accessibility.md",slug:"/api/class-accessibility",permalink:"/playwright/docs/next/api/class-accessibility",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/class-accessibility.md",version:"current",sidebar:"api",previous:{title:"class: TimeoutError",permalink:"/playwright/docs/next/api/class-timeouterror"},next:{title:"class: Worker",permalink:"/playwright/docs/next/api/class-worker"}},c=[{value:"accessibility.snapshot(options)",id:"accessibilitysnapshotoptions",children:[]}],s={rightToc:c};function b(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The Accessibility class provides methods for inspecting Chromium's accessibility tree. The accessibility tree is used by assistive technology such as ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Screen_reader"}),"screen readers")," or ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Switch_access"}),"switches"),"."),Object(r.b)("p",null,"Accessibility is a very platform-specific thing. On different platforms, there are different screen readers that might have wildly different output."),Object(r.b)("p",null,'Blink - Chromium\'s rendering engine - has a concept of "accessibility tree", which is then translated into different platform-specific APIs. Accessibility namespace gives users\naccess to the Blink Accessibility Tree.'),Object(r.b)("p",null,'Most of the accessibility tree gets filtered out when converting from Blink AX Tree to Platform-specific AX-Tree or by assistive technologies themselves. By default, Playwright tries to approximate this filtering, exposing only the "interesting" nodes of the tree.'),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#accessibilitysnapshotoptions"}),"accessibility.snapshot([options])"))),Object(r.b)("h2",{id:"accessibilitysnapshotoptions"},"accessibility.snapshot(","[options]",")"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"options")," <","[Object]",">",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"interestingOnly")," <","[boolean]","> Prune uninteresting nodes from the tree. Defaults to ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"root")," <","[ElementHandle]","> The root DOM element for the snapshot. Defaults to the whole page."))),Object(r.b)("li",{parentName:"ul"},"returns: <","[Promise]","<","[null]","|","[Object]",">> An ","[AXNode]"," object with the following properties:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"role")," <","[string]","> The ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.w3.org/TR/wai-aria/#usage_intro"}),"role"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"name")," <","[string]","> A human readable name for the node."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"value")," <","[string]","|","[number]","> The current value of the node, if applicable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"description")," <","[string]","> An additional human readable description of the node, if applicable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"keyshortcuts")," <","[string]","> Keyboard shortcuts associated with this node, if applicable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"roledescription")," <","[string]","> A human readable alternative to the role, if applicable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"valuetext")," <","[string]","> A description of the current value, if applicable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"disabled")," <","[boolean]","> Whether the node is disabled, if applicable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"expanded")," <","[boolean]","> Whether the node is expanded or collapsed, if applicable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"focused")," <","[boolean]","> Whether the node is focused, if applicable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"modal")," <","[boolean]","> Whether the node is ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Modal_window"}),"modal"),", if applicable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"multiline")," <","[boolean]","> Whether the node text input supports multiline, if applicable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"multiselectable")," <","[boolean]","> Whether more than one child can be selected, if applicable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"readonly")," <","[boolean]","> Whether the node is read only, if applicable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"required")," <","[boolean]","> Whether the node is required, if applicable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"selected")," <","[boolean]","> Whether the node is selected in its parent node, if applicable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"checked")," <","[boolean]",'|"mixed"> Whether the checkbox is checked, or "mixed", if applicable.'),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"pressed")," <","[boolean]",'|"mixed"> Whether the toggle button is checked, or "mixed", if applicable.'),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"level")," <","[number]","> The level of a heading, if applicable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"valuemin")," <","[number]","> The minimum value in a node, if applicable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"valuemax")," <","[number]","> The maximum value in a node, if applicable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"autocomplete")," <","[string]","> What kind of autocomplete is supported by a control, if applicable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"haspopup")," <","[string]","> What kind of popup is currently being shown for a node, if applicable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"invalid")," <","[string]","> Whether and in what way this node's value is invalid, if applicable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"orientation")," <","[string]","> Whether the node is oriented horizontally or vertically, if applicable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"children")," <","[Array]","<","[Object]",">> Child ","[AXNode]","s of this node, if any, if applicable.")))),Object(r.b)("p",null,"Captures the current state of the accessibility tree. The returned object represents the root accessible node of the page."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"NOTE")," The Chromium accessibility tree contains nodes that go unused on most platforms and by\nmost screen readers. Playwright will discard them as well for an easier to process tree,\nunless ",Object(r.b)("inlineCode",{parentName:"p"},"interestingOnly")," is set to ",Object(r.b)("inlineCode",{parentName:"p"},"false"),".")),Object(r.b)("p",null,"An example of dumping the entire accessibility tree:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const snapshot = await page.accessibility.snapshot();\nconsole.log(snapshot);\n")),Object(r.b)("p",null,"An example of logging the focused node's name:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const snapshot = await page.accessibility.snapshot();\nconst node = findFocusedNode(snapshot);\nconsole.log(node && node.name);\n\nfunction findFocusedNode(node) {\n  if (node.focused)\n    return node;\n  for (const child of node.children || []) {\n    const foundNode = findFocusedNode(child);\n    return foundNode;\n  }\n  return null;\n}\n")))}b.isMDXComponent=!0},211:function(e,t,i){"use strict";i.d(t,"a",(function(){return p})),i.d(t,"b",(function(){return m}));var n=i(0),a=i.n(n);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(i),u=n,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||r;return i?a.a.createElement(m,o(o({ref:t},s),{},{components:i})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,l=new Array(r);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<r;s++)l[s]=i[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,i)}u.displayName="MDXCreateElement"}}]);