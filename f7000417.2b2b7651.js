(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{200:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var i=r(2),n=r(6),a=(r(0),r(211)),o={id:"class-filechooser",title:"class: FileChooser"},l={unversionedId:"api/class-filechooser",id:"api/class-filechooser",isDocsHomePage:!1,title:"class: FileChooser",description:"FileChooser] objects are dispatched by the page in the ['filechooser' event.",source:"@site/docs/api/class-filechooser.md",slug:"/api/class-filechooser",permalink:"/playwright/docs/next/api/class-filechooser",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/class-filechooser.md",version:"current",sidebar:"api",previous:{title:"class: Video",permalink:"/playwright/docs/next/api/class-video"},next:{title:"class: Keyboard",permalink:"/playwright/docs/next/api/class-keyboard"}},s=[{value:"fileChooser.element()",id:"filechooserelement",children:[]},{value:"fileChooser.isMultiple()",id:"filechooserismultiple",children:[]},{value:"fileChooser.page()",id:"filechooserpage",children:[]},{value:"fileChooser.setFiles(files, options)",id:"filechoosersetfilesfiles-options",children:[]}],c={rightToc:s};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"[FileChooser]"," objects are dispatched by the page in the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"#event-filechooser"}),"'filechooser'")," event."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"page.on('filechooser', async (fileChooser) => {\n  await fileChooser.setFiles('/tmp/myfile.pdf');\n});\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"#filechooserelement"}),"fileChooser.element()")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"#filechooserismultiple"}),"fileChooser.isMultiple()")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"#filechooserpage"}),"fileChooser.page()")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"#filechoosersetfilesfiles-options"}),"fileChooser.setFiles(files[, options])"))),Object(a.b)("h2",{id:"filechooserelement"},"fileChooser.element()"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"returns: <","[ElementHandle]",">")),Object(a.b)("p",null,"Returns input element associated with this file chooser."),Object(a.b)("h2",{id:"filechooserismultiple"},"fileChooser.isMultiple()"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"returns: <","[boolean]",">")),Object(a.b)("p",null,"Returns whether this file chooser accepts multiple files."),Object(a.b)("h2",{id:"filechooserpage"},"fileChooser.page()"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"returns: <","[Page]",">")),Object(a.b)("p",null,"Returns page this file chooser belongs to."),Object(a.b)("h2",{id:"filechoosersetfilesfiles-options"},"fileChooser.setFiles(files","[, options]",")"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"files")," <","[string]","|","[Array]","<","[string]",">|","[Object]","|","[Array]","<","[Object]",">>",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"name")," <","[string]","> ","[File]"," name ",Object(a.b)("strong",{parentName:"li"},"required")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"mimeType")," <","[string]","> ","[File]"," type ",Object(a.b)("strong",{parentName:"li"},"required")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"buffer")," <","[Buffer]","> File content ",Object(a.b)("strong",{parentName:"li"},"required")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"options")," <","[Object]",">",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"noWaitAfter")," <","[boolean]","> Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"timeout")," <","[number]","> Maximum time in milliseconds, defaults to 30 seconds, pass ",Object(a.b)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"#browsercontextsetdefaulttimeouttimeout"}),"browserContext.setDefaultTimeout(timeout)")," or ",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"#pagesetdefaulttimeouttimeout"}),"page.setDefaultTimeout(timeout)")," methods."))),Object(a.b)("li",{parentName:"ul"},"returns: <","[Promise]",">")),Object(a.b)("p",null,"Sets the value of the file input this chooser is associated with. If some of the ",Object(a.b)("inlineCode",{parentName:"p"},"filePaths")," are relative paths, then they are resolved relative to the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://nodejs.org/api/process.html#process_process_cwd"}),"current working directory"),". For empty array, clears the selected files."))}p.isMDXComponent=!0},211:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var i=r(0),n=r.n(i);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),p=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=p(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=n.a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(r),f=i,m=b["".concat(o,".").concat(f)]||b[f]||u[f]||a;return r?n.a.createElement(m,l(l({ref:t},c),{},{components:r})):n.a.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);