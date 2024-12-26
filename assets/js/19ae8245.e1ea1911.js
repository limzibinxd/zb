"use strict";(self.webpackChunkmy_tutorial=self.webpackChunkmy_tutorial||[]).push([[1548],{7837:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"week2/2-4","title":"2-4 Build Weston and Qt Images","description":"Introduction","source":"@site/docs/week2/2-4.md","sourceDirName":"week2","slug":"/week2/2-4","permalink":"/zb/docs/week2/2-4","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/week2/2-4.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"2-4 Build Weston and Qt Images","sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"2-3 Yocto Build","permalink":"/zb/docs/week2/2-3"},"next":{"title":"2-4 Boot Up RZ/G2L with SD card","permalink":"/zb/docs/week2/2-5"}}');var r=i(4848),o=i(8453);const s={title:"2-4 Build Weston and Qt Images",sidebar_position:4},l=void 0,a={},c=[{value:"Introduction",id:"introduction",level:3},{value:"Step 1: Initialise Build Environment for Yocto",id:"step-1-initialise-build-environment-for-yocto",level:3},{value:"Step 2: Build Images",id:"step-2-build-images",level:3},{value:"Step 3: Check Builded Image File",id:"step-3-check-builded-image-file",level:3}];function d(e){const t={admonition:"admonition",br:"br",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(t.h3,{id:"step-1-initialise-build-environment-for-yocto",children:"Step 1: Initialise Build Environment for Yocto"}),"\n",(0,r.jsx)(t.p,{children:"Initialize a build using the oe-init-build-env script in Poky and set environment variable TEMPLATECONF to the below path."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="dir: ~/work/rzg/yocto"',children:"TEMPLATECONF=$PWD/meta-renesas/meta-rzg2l/docs/template/conf/ source poky/oe-init-build-env build\n"})}),"\n",(0,r.jsx)(t.h3,{id:"step-2-build-images",children:"Step 2: Build Images"}),"\n",(0,r.jsxs)(t.p,{children:["For ",(0,r.jsx)(t.code,{children:"Weston Image"})," :"]}),"\n",(0,r.jsx)(t.p,{children:"Run the following command to build the weston image."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="dir: ~/work/rzg/yocto/build"',children:"MACHINE=smarc-rzg2l bitbake core-image-weston\n"})}),"\n",(0,r.jsx)(t.p,{children:"Run the following command to build cross compiler installer."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="dir: ~/work/rzg/yocto/build"',children:"MACHINE=smarc-rzg2l bitbake core-image-weston -c populate_sdk\n"})}),"\n",(0,r.jsxs)(t.p,{children:["For ",(0,r.jsx)(t.code,{children:"Qt Image"})," :"]}),"\n",(0,r.jsx)(t.p,{children:"Run the following command to add the meta-qt5 layer for qt5."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="dir: ~/work/rzg/yocto/build"',children:"bitbake-layers add-layer ../meta-qt5\n"})}),"\n",(0,r.jsx)(t.p,{children:"and in local.conf file, add the following line."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="file: ~/work/rzg/yocto/build/conf/local.conf"',children:'QT_DEMO = "1"\n'})}),"\n",(0,r.jsx)(t.p,{children:"Run the following command to build the qt5 image."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="dir: ~/work/rzg/yocto/build"',children:"MACHINE=smarc-rzg2l bitbake core-image-qt\n"})}),"\n",(0,r.jsx)(t.p,{children:"Run the following command to build cross compiler installer."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="dir: ~/work/rzg/yocto/build"',children:"MACHINE=smarc-rzg2l bitbake core-image-qt -c populate_sdk\n"})}),"\n",(0,r.jsx)(t.h3,{id:"step-3-check-builded-image-file",children:"Step 3: Check Builded Image File"}),"\n",(0,r.jsxs)(t.p,{children:["To check the image file,",(0,r.jsx)(t.br,{}),"\n","go to ",(0,r.jsx)(t.code,{children:"~/work/rzg/yocto/build/tmp/deploy/images/smarc-rzg2l/"})]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"image name"}),(0,r.jsx)(t.th,{children:"file name"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"core-image-weston"}),(0,r.jsxs)(t.td,{children:["core-image-weston-smarc-rzg2l.wic.gz ",(0,r.jsx)("br",{})," core-image-weston-smarc-rzg2l.wic.bmap"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"core-image-qt"}),(0,r.jsxs)(t.td,{children:["core-image-qt-smarc-rzg2l.wic.gz ",(0,r.jsx)("br",{})," core-image-qt-smarc-rzg2l.wic.bmap"]})]})]})]})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>l});var n=i(6540);const r={},o=n.createContext(r);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);