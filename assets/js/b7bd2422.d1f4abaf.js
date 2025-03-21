"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[2454],{3331:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>d});var r=n(8101);const t={},c=r.createContext(t);function o(e){const s=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(c.Provider,{value:s},e.children)}},4001:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>i});const r=JSON.parse('{"id":"container/k8s/k3s/README","title":"k3s \u5b89\u88c5\u4f7f\u7528","description":"\u5b89\u88c5","source":"@site/docs/container/k8s/k3s/README.md","sourceDirName":"container/k8s/k3s","slug":"/container/k8s/k3s/","permalink":"/deploy_docusaurus_docs/docs/container/k8s/k3s/","draft":false,"unlisted":false,"editUrl":"https://github.com/user00000001/docusaurus_docs/tree/master/blog/docs/container/k8s/k3s/README.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"k8s\u5f00\u53d1\u73af\u5883\u5b89\u88c5","permalink":"/deploy_docusaurus_docs/docs/container/k8s/"},"next":{"title":"microk8s \u5b89\u88c5\u4f7f\u7528","permalink":"/deploy_docusaurus_docs/docs/container/k8s/microk8s/"}}');var t=n(5105),c=n(3331);const o={},d="k3s \u5b89\u88c5\u4f7f\u7528",l={},i=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u5728\u7ebf\u811a\u672c\u5b89\u88c5",id:"\u5728\u7ebf\u811a\u672c\u5b89\u88c5",level:3},{value:"\u4e8c\u8fdb\u5236\u6267\u884c\u6587\u4ef6\u542f\u52a8",id:"\u4e8c\u8fdb\u5236\u6267\u884c\u6587\u4ef6\u542f\u52a8",level:3},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u8bbe\u7f6e\u522b\u540d\u6765\u4f7f\u7528",id:"\u8bbe\u7f6e\u522b\u540d\u6765\u4f7f\u7528",level:3},{value:"\u5347\u7ea7",id:"\u5347\u7ea7",level:2},{value:"\u5148\u7528k3s\u81ea\u5e26\u5de5\u5177\u6e05\u7406k3s\u72b6\u6001",id:"\u5148\u7528k3s\u81ea\u5e26\u5de5\u5177\u6e05\u7406k3s\u72b6\u6001",level:3}];function a(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",pre:"pre",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"k3s-\u5b89\u88c5\u4f7f\u7528",children:"k3s \u5b89\u88c5\u4f7f\u7528"})}),"\n",(0,t.jsx)(s.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,t.jsx)(s.h3,{id:"\u5728\u7ebf\u811a\u672c\u5b89\u88c5",children:"\u5728\u7ebf\u811a\u672c\u5b89\u88c5"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"curl -sfL https://rancher-mirror.rancher.cn/k3s/k3s-install.sh | INSTALL_K3S_MIRROR=cn sh -\n"})}),"\n",(0,t.jsx)(s.h3,{id:"\u4e8c\u8fdb\u5236\u6267\u884c\u6587\u4ef6\u542f\u52a8",children:"\u4e8c\u8fdb\u5236\u6267\u884c\u6587\u4ef6\u542f\u52a8"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"sudo k3s server & # k3s --data-dir \u6216\u8005 \u8f6f\u94fe\u63a5\u5230\u5176\u4ed6\u76ee\u5f55 \u65b9\u4fbf\u6392\u67e5\u7ba1\u7406\n# Kubeconfig is written to /etc/rancher/k3s/k3s.yaml\nsudo k3s kubectl get node\n\n# On a different node run the below command.\n# NODE_TOKEN comes from /var/lib/rancher/k3s/server/node-token on your server\nsudo k3s agent --server https://myserver:6443 --token ${NODE_TOKEN}\n"})}),"\n",(0,t.jsx)(s.h2,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,t.jsx)(s.h3,{id:"\u8bbe\u7f6e\u522b\u540d\u6765\u4f7f\u7528",children:"\u8bbe\u7f6e\u522b\u540d\u6765\u4f7f\u7528"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:'alias kubectl="k3s kubectl"\nkubectl get node\n'})}),"\n",(0,t.jsx)(s.h2,{id:"\u5347\u7ea7",children:"\u5347\u7ea7"}),"\n",(0,t.jsx)(s.h3,{id:"\u5148\u7528k3s\u81ea\u5e26\u5de5\u5177\u6e05\u7406k3s\u72b6\u6001",children:"\u5148\u7528k3s\u81ea\u5e26\u5de5\u5177\u6e05\u7406k3s\u72b6\u6001"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"**********************!!!PROTECTION POLICY!!!**********************\nWaiting For The Next Deployment, Maybe It Would Be Displayed After That.\n"})}),"\n",(0,t.jsx)(s.h3,{id:""})]})}function u(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}}}]);