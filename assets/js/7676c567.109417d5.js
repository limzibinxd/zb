"use strict";(self.webpackChunkmy_tutorial=self.webpackChunkmy_tutorial||[]).push([[1522],{512:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"week4/4-1","title":"Prepare the ToolChain","description":"Step 1: Build Yocto Project","source":"@site/docs/week4/4-1.md","sourceDirName":"week4","slug":"/week4/4-1","permalink":"/zb/docs/week4/4-1","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/week4/4-1.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Prepare the ToolChain","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/zb/docs/week3/3-4"},"next":{"title":"Qt Creator Installation","permalink":"/zb/docs/week4/4-2"}}');var i=o(4848),s=o(8453);const c={title:"Prepare the ToolChain",sidebar_position:1},l=void 0,r={},a=[{value:"Step 1: Build Yocto Project",id:"step-1-build-yocto-project",level:3},{value:"Step 2: Check Output Script",id:"step-2-check-output-script",level:3},{value:"Step 3: Allow Permission",id:"step-3-allow-permission",level:3},{value:"Step 4: Install Toolchain",id:"step-4-install-toolchain",level:3},{value:"Step 5: Check Installed Location",id:"step-5-check-installed-location",level:3}];function d(e){const t={code:"code",h3:"h3",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h3,{id:"step-1-build-yocto-project",children:"Step 1: Build Yocto Project"}),"\n",(0,i.jsxs)(t.p,{children:["Within the docker container Ubutu 20.04, please build the yocto project with appended parameters ",(0,i.jsx)(t.code,{children:"-c polulate_sdk"})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"sudo MACHINE=smarc-rzg2l bitbake core-image-qt -c populate_sdk\n"})}),"\n",(0,i.jsx)(t.h3,{id:"step-2-check-output-script",children:"Step 2: Check Output Script"}),"\n",(0,i.jsx)(t.p,{children:"After the build of Yocto project, the output script can be used to installed on your system, which would be located at"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"<work_dir>/build/tmp/deploy/sdk poky-glibc-x86_64-core-image-qt-aarch64-smarc-rzg2l-toolchain-3.1.31.sh"})}),"\n",(0,i.jsx)(t.h3,{id:"step-3-allow-permission",children:"Step 3: Allow Permission"}),"\n",(0,i.jsxs)(t.p,{children:["Right click on the file, then click on the checkbox Permission ",(0,i.jsx)(t.code,{children:"Allow executing file as program"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"settings",src:o(7678).A+"",width:"488",height:"569"})}),"\n",(0,i.jsx)(t.h3,{id:"step-4-install-toolchain",children:"Step 4: Install Toolchain"}),"\n",(0,i.jsx)(t.p,{children:"Now you can run the script to install the toolchain on your Ubuntu 22.04."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"sudo sudo sh ./poky-glibc-x86_64-core-image-qt-aarch64-toolchain-3.1.31.sh\n"})}),"\n",(0,i.jsx)(t.h3,{id:"step-5-check-installed-location",children:"Step 5: Check Installed Location"}),"\n",(0,i.jsx)(t.p,{children:"The default installed location would be"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"/opt/poky/3.1.31"})}),"\n",(0,i.jsx)(t.p,{children:"All the tools under this floder will be used in the kits settings of Qt Creator."})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},7678:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/4-1-7598f33777c022845ed6ab87bcb61a1a.png"},8453:(e,t,o)=>{o.d(t,{R:()=>c,x:()=>l});var n=o(6540);const i={},s=n.createContext(i);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);