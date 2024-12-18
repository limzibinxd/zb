"use strict";(self.webpackChunkmy_tutorial=self.webpackChunkmy_tutorial||[]).push([[3519],{4753:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"week1/1-3","title":"1-3 Docker Engine Installation","description":"### Requirement","source":"@site/docs/week1/1-3.md","sourceDirName":"week1","slug":"/week1/1-3","permalink":"/zb/docs/week1/1-3","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/week1/1-3.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"1-3 Docker Engine Installation","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"1-2 SSH Connection","permalink":"/zb/docs/week1/1-2"},"next":{"title":"1-4 Create Dev Container","permalink":"/zb/docs/week1/1-4"}}');var o=t(4848),r=t(8453);const i={title:"1-3 Docker Engine Installation",sidebar_position:3},a=void 0,l={},c=[{value:"Requirement",id:"requirement",level:3},{value:"Introduction",id:"introduction",level:3},{value:"Step 1: Uninstall Old Versions",id:"step-1-uninstall-old-versions",level:3},{value:"Step 2: Set up Docker&#39;s apt repository",id:"step-2-set-up-dockers-apt-repository",level:3},{value:"Step 3: Install the Docker packages",id:"step-3-install-the-docker-packages",level:3},{value:"Step 4: Verify the installation",id:"step-4-verify-the-installation",level:3},{value:"Step 5: Manage Docker as a non-root user (Post-installation)",id:"step-5-manage-docker-as-a-non-root-user-post-installation",level:3},{value:"References",id:"references",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.h3,{id:"requirement",children:"Requirement"}),"\n",(0,o.jsx)(n.p,{children:"To install Docker Engine, you need the 64-bit version of one of these Ubuntu versions:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Ubuntu Oracular 24.10"}),"\n",(0,o.jsx)(n.li,{children:"Ubuntu Noble 24.04 (LTS)"}),"\n",(0,o.jsx)(n.li,{children:"Ubuntu Jammy 22.04 (LTS)"}),"\n",(0,o.jsx)(n.li,{children:"Ubuntu Focal 20.04 (LTS)"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(n.p,{children:"Docker Engine is an open source containerization technology for building and containerizing your applications. Docker Engine acts as a client-server application with:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"A server with a long-running daemon process dockerd."}),"\n",(0,o.jsx)(n.li,{children:"APIs which specify interfaces that programs can use to talk to and instruct the Docker daemon."}),"\n",(0,o.jsx)(n.li,{children:"A command line interface (CLI) client docker."}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"step-1-uninstall-old-versions",children:"Step 1: Uninstall Old Versions"}),"\n",(0,o.jsx)(n.p,{children:"Before you can install Docker Engine, you need to uninstall any conflicting packages."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title="Uninstall conflicting packages"',children:"for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done\n"})}),"\n",(0,o.jsx)(n.h3,{id:"step-2-set-up-dockers-apt-repository",children:"Step 2: Set up Docker's apt repository"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title="Add Docker\'s official GPG key:"',children:"sudo apt update\r\nsudo apt install ca-certificates curl\r\nsudo install -m 0755 -d /etc/apt/keyrings\r\nsudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc\r\nsudo chmod a+r /etc/apt/keyrings/docker.asc\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title="Add repository to Apt sources:"',children:'echo \\\r\n  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \\\r\n  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \\\r\n  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\r\nsudo apt-get update\n'})}),"\n",(0,o.jsx)(n.h3,{id:"step-3-install-the-docker-packages",children:"Step 3: Install the Docker packages"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title="Install the latest version"',children:"sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin\n"})}),"\n",(0,o.jsx)(n.h3,{id:"step-4-verify-the-installation",children:"Step 4: Verify the installation"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title="Verify that installation is successful by running hello-world image:"',children:"sudo docker run hello-world\n"})}),"\n",(0,o.jsx)(n.h3,{id:"step-5-manage-docker-as-a-non-root-user-post-installation",children:"Step 5: Manage Docker as a non-root user (Post-installation)"}),"\n",(0,o.jsx)(n.p,{children:"If you don't want to preface the docker command with sudo, create a Unix group called docker and add users to it. When the Docker daemon starts, it creates a Unix socket accessible by members of the docker group."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title="1. Create the docker group"',children:"sudo groupadd docker\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title="2. Add your user to the docker group"',children:"sudo usermod -aG docker $USER\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title="3. Log out and log back in so that your group membership is re-evaluated"',children:"newgrp docker\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title="4. Verify that you can run docker commands without sudo"',children:"docker run hello-world\n"})}),"\n",(0,o.jsx)(n.h3,{id:"references",children:"References"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://docs.docker.com/engine/install/ubuntu/",children:"Install Docker Engine on Ubuntu"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://docs.docker.com/engine/install/linux-postinstall/",children:"Linux post-installation steps for Docker Engine"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var s=t(6540);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);