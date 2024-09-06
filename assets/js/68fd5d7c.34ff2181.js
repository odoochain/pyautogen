"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[456],{39992:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=t(85893),o=t(11151);const i={sidebar_label:"token_count_utils",title:"token_count_utils"},r=void 0,l={id:"reference/token_count_utils",title:"token_count_utils",description:"token\\_left",source:"@site/docs/reference/token_count_utils.md",sourceDirName:"reference",slug:"/reference/token_count_utils",permalink:"/autogen/docs/reference/token_count_utils",draft:!1,unlisted:!1,editUrl:"https://github.com/autogen-ai/autogen/edit/main/website/docs/reference/token_count_utils.md",tags:[],version:"current",frontMatter:{sidebar_label:"token_count_utils",title:"token_count_utils"},sidebar:"referenceSideBar",previous:{title:"runtime_logging",permalink:"/autogen/docs/reference/runtime_logging"}},c={},d=[{value:"token_left",id:"token_left",level:3},{value:"count_token",id:"count_token",level:3},{value:"num_tokens_from_functions",id:"num_tokens_from_functions",level:3}];function u(n){const e={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h3,{id:"token_left",children:"token_left"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'def token_left(input: Union[str, List, Dict],\n               model="gpt-3.5-turbo-0613") -> int\n'})}),"\n",(0,s.jsx)(e.p,{children:"Count number of tokens left for an OpenAI model."}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"input"})," - (str, list, dict): Input to the model."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"model"})," - (str): Model name."]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"int"})," - Number of tokens left that the model can use for completion."]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"count_token",children:"count_token"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'def count_token(input: Union[str, List, Dict],\n                model: str = "gpt-3.5-turbo-0613") -> int\n'})}),"\n",(0,s.jsx)(e.p,{children:"Count number of tokens used by an OpenAI model."}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"input"})," - (str, list, dict): Input to the model."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"model"})," - (str): Model name."]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"int"})," - Number of tokens from the input."]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"num_tokens_from_functions",children:"num_tokens_from_functions"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'def num_tokens_from_functions(functions, model="gpt-3.5-turbo-0613") -> int\n'})}),"\n",(0,s.jsx)(e.p,{children:"Return the number of tokens used by a list of functions."}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"functions"})," - (list): List of function descriptions that will be passed in model."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"model"})," - (str): Model name."]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"int"})," - Number of tokens from the function descriptions."]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>l,a:()=>r});var s=t(67294);const o={},i=s.createContext(o);function r(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);