"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[7725],{1710:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>u,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>t});const l=JSON.parse('{"id":"os/guide/README","title":"\u64cd\u4f5c\u7cfb\u7edf","description":"\u7cfb\u7edf\u5b89\u88c5","source":"@site/docs/os/guide/README.md","sourceDirName":"os/guide","slug":"/os/guide/","permalink":"/deploy_docusaurus_docs/docs/os/guide/","draft":false,"unlisted":false,"editUrl":"https://github.com/user00000001/docusaurus_docs/tree/master/blog/docs/os/guide/README.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u64cd\u4f5c\u7cfb\u7edf","permalink":"/deploy_docusaurus_docs/docs/category/\u64cd\u4f5c\u7cfb\u7edf"},"next":{"title":"qemu usage","permalink":"/deploy_docusaurus_docs/docs/os/vm/qemu"}}');var d=n(5105),s=n(3331);const o={},u="\u64cd\u4f5c\u7cfb\u7edf",r={},t=[{value:"\u7cfb\u7edf\u5b89\u88c5",id:"\u7cfb\u7edf\u5b89\u88c5",level:2},{value:"0. \u523b\u5f55\u5230\u5149\u76d8\u6216\u8005U\u76d8\u542f\u52a8\uff0c\u89e3\u51b3\u7edd\u5927\u90e8\u5206\u7cfb\u7edf\u5b89\u88c5\u95ee\u9898",id:"0-\u523b\u5f55\u5230\u5149\u76d8\u6216\u8005u\u76d8\u542f\u52a8\u89e3\u51b3\u7edd\u5927\u90e8\u5206\u7cfb\u7edf\u5b89\u88c5\u95ee\u9898",level:3},{value:"1. UEFI\u786c\u76d8\u901a\u7528\u5b89\u88c5",id:"1-uefi\u786c\u76d8\u901a\u7528\u5b89\u88c5",level:3},{value:"\u627e\u5230\u4e00\u5757\u5206\u533a\u5e76\u683c\u5f0f\u5316\u6210FAT32\uff0c\u5c06\u7cfb\u7edfISO\u6587\u4ef6\u89e3\u538b\u5230\u8be5\u5206\u533a\uff0c\u91cd\u65b0\u542f\u52a8\uff0c\u7136\u540e\u5728\u542f\u52a8\u9879\u91cc\u9009\u62e9\u65b0\u51fa\u73b0\u7684\u9879\u76ee\uff0c\u8fdb\u5165\u5b89\u88c5\u6d41\u7a0b\uff0c\u671f\u95f4\u53ef\u80fd\u9700\u8981easyuefi\u7b49\u6307\u5b9a\u542f\u52a8efi\u6587\u4ef6\uff0c\u6b64\u65b9\u5f0f\u53ef\u4ee5\u5b89\u88c5ubuntu\u3001Windows\u7b49\u64cd\u4f5c\u7cfb\u7edf",id:"\u627e\u5230\u4e00\u5757\u5206\u533a\u5e76\u683c\u5f0f\u5316\u6210fat32\u5c06\u7cfb\u7edfiso\u6587\u4ef6\u89e3\u538b\u5230\u8be5\u5206\u533a\u91cd\u65b0\u542f\u52a8\u7136\u540e\u5728\u542f\u52a8\u9879\u91cc\u9009\u62e9\u65b0\u51fa\u73b0\u7684\u9879\u76ee\u8fdb\u5165\u5b89\u88c5\u6d41\u7a0b\u671f\u95f4\u53ef\u80fd\u9700\u8981easyuefi\u7b49\u6307\u5b9a\u542f\u52a8efi\u6587\u4ef6\u6b64\u65b9\u5f0f\u53ef\u4ee5\u5b89\u88c5ubuntuwindows\u7b49\u64cd\u4f5c\u7cfb\u7edf",level:4},{value:"2. Deepin uefi\u5b89\u88c5",id:"2-deepin-uefi\u5b89\u88c5",level:3},{value:"\u82e5\u6709grub\u542f\u52a8\uff0c\u5219\u76f4\u63a5\u5728/boot/grub/grub.cfg\u5185\u6dfb\u52a0\u542f\u52a8\u4fe1\u606f\u5982\u4e0b",id:"\u82e5\u6709grub\u542f\u52a8\u5219\u76f4\u63a5\u5728bootgrubgrubcfg\u5185\u6dfb\u52a0\u542f\u52a8\u4fe1\u606f\u5982\u4e0b",level:4},{value:"\u4e5f\u53ef\u8fdb\u5165ubuntu\u7684grub\u63a7\u5236\u53f0\u8f93\u5165\u4ee5\u4e0a\u547d\u4ee4\u624b\u52a8\u5f15\u5bfc\u542f\u52a8\uff0c\u4e5f\u9002\u7528\u4e8eKali\u7cfb\u7edf\u5b89\u88c5",id:"\u4e5f\u53ef\u8fdb\u5165ubuntu\u7684grub\u63a7\u5236\u53f0\u8f93\u5165\u4ee5\u4e0a\u547d\u4ee4\u624b\u52a8\u5f15\u5bfc\u542f\u52a8\u4e5f\u9002\u7528\u4e8ekali\u7cfb\u7edf\u5b89\u88c5",level:4},{value:"3. Kali linux rolling uefi\u5b89\u88c5",id:"3-kali-linux-rolling-uefi\u5b89\u88c5",level:3},{value:"\u62ffkali-linux-2023.1-installer-everything-amd64.iso\u4e3a\u4f8b\uff0c\u6bcf\u4e2aiso\u53ef\u80fd\u6709\u4e0d\u540c\u7684\u95ee\u9898\uff0c\u7ed9\u51fa\u4e00\u822c\u6392\u67e5\u5b9a\u4f4d\u6d41\u7a0b",id:"\u62ffkali-linux-20231-installer-everything-amd64iso\u4e3a\u4f8b\u6bcf\u4e2aiso\u53ef\u80fd\u6709\u4e0d\u540c\u7684\u95ee\u9898\u7ed9\u51fa\u4e00\u822c\u6392\u67e5\u5b9a\u4f4d\u6d41\u7a0b",level:4},{value:"\u89e3\u538b\u5230\u4e00\u4e2a\u5408\u9002\u5927\u5c0f\u7684FAT32\u5206\u533a\uff0cbios\u81ea\u52a8\u68c0\u6d4b\u6b64\u5206\u533aEFI\uff0c\u6216EasyUEFI\u624b\u52a8\u5f15\u5bfc\uff0c\u5f00\u673a\u8fdb\u5165\u6b63\u5e38\u5b89\u88c5\u6d41\u7a0b\uff0c\u9047\u5230\u95ee\u9898\uff0cCTRL+Fx \u8fdb\u5165\u7ec8\u7aef\u64cd\u4f5c\uff0c\u4ece\u67d0\u4e00\u4e2aFx\u53ef\u4ee5\u770b\u5230\u5b89\u88c5\u65e5\u5fd7\uff0c\u518d\u6839\u636e\u65e5\u5fd7\u62a5\u9519\u5224\u65ad",id:"\u89e3\u538b\u5230\u4e00\u4e2a\u5408\u9002\u5927\u5c0f\u7684fat32\u5206\u533abios\u81ea\u52a8\u68c0\u6d4b\u6b64\u5206\u533aefi\u6216easyuefi\u624b\u52a8\u5f15\u5bfc\u5f00\u673a\u8fdb\u5165\u6b63\u5e38\u5b89\u88c5\u6d41\u7a0b\u9047\u5230\u95ee\u9898ctrlfx-\u8fdb\u5165\u7ec8\u7aef\u64cd\u4f5c\u4ece\u67d0\u4e00\u4e2afx\u53ef\u4ee5\u770b\u5230\u5b89\u88c5\u65e5\u5fd7\u518d\u6839\u636e\u65e5\u5fd7\u62a5\u9519\u5224\u65ad",level:4},{value:"1\uff0cNo Media\u5904\u7406",id:"1no-media\u5904\u7406",level:5},{value:"2\uff0c\u8f6f\u4ef6\u5305\u9009\u62e9\u9519\u8bef\u5904\u7406",id:"2\u8f6f\u4ef6\u5305\u9009\u62e9\u9519\u8bef\u5904\u7406",level:5},{value:"\u5907\u4efd\u79fb\u690d\u7cfb\u7edf\u5206\u533a",id:"\u5907\u4efd\u79fb\u690d\u7cfb\u7edf\u5206\u533a",level:2},{value:"1. \u5206\u533a\u64cd\u4f5c",id:"1-\u5206\u533a\u64cd\u4f5c",level:3},{value:"\u4f7f\u7528\u5206\u533a\u5de5\u5177gparted/diskgenius\u7b49\u5c06\u7cfb\u7edf\u6240\u5728\u5206\u533a\u8fdb\u884c\u5bb9\u91cf\u7f29\u51cf\uff0c\u6700\u597d\u4fdd\u7559\u4e00\u5b9a\u5927\u5c0f\u7684\u4f38\u7f29\u7a7a\u95f4\uff0c\u4f7f\u7528dd\u5c06\u7cfb\u7edf\u5206\u533a\u4fdd\u7559\u6210\u6587\u4ef6",id:"\u4f7f\u7528\u5206\u533a\u5de5\u5177gparteddiskgenius\u7b49\u5c06\u7cfb\u7edf\u6240\u5728\u5206\u533a\u8fdb\u884c\u5bb9\u91cf\u7f29\u51cf\u6700\u597d\u4fdd\u7559\u4e00\u5b9a\u5927\u5c0f\u7684\u4f38\u7f29\u7a7a\u95f4\u4f7f\u7528dd\u5c06\u7cfb\u7edf\u5206\u533a\u4fdd\u7559\u6210\u6587\u4ef6",level:4},{value:"\u7559\u51fa\u5f85\u88c5\u5165\u7cfb\u7edf\u5206\u533a\uff0c\u5fc5\u987b\u5927\u4e8e\u7cfb\u7edf\u5907\u4efd\u6587\u4ef6\u5927\u4fa0\uff0c\u8fdb\u884c\u78c1\u76d8\u6587\u4ef6\u5199\u5165",id:"\u7559\u51fa\u5f85\u88c5\u5165\u7cfb\u7edf\u5206\u533a\u5fc5\u987b\u5927\u4e8e\u7cfb\u7edf\u5907\u4efd\u6587\u4ef6\u5927\u4fa0\u8fdb\u884c\u78c1\u76d8\u6587\u4ef6\u5199\u5165",level:4},{value:"\u7531\u4e8e\u5199\u5165\u7cfb\u7edf\u6587\u4ef6\u5185\u7684\u5206\u533a\u5927\u5c0f\u4e0e\u6b64\u65f6\u7cfb\u7edf\u5206\u533a\u7684\u5927\u5c0f\u53ef\u80fd\u4e0d\u7b26\uff0c\u9700\u8981\u5bf9\u73b0\u5206\u533a\u8fdb\u884c\u7f29\u5c0f\u518d\u6269\u5c55\uff0c\u624d\u80fd\u4f7f\u7cfb\u7edf\u5206\u533a\u56de\u5230\u771f\u5b9e\u5bb9\u91cf",id:"\u7531\u4e8e\u5199\u5165\u7cfb\u7edf\u6587\u4ef6\u5185\u7684\u5206\u533a\u5927\u5c0f\u4e0e\u6b64\u65f6\u7cfb\u7edf\u5206\u533a\u7684\u5927\u5c0f\u53ef\u80fd\u4e0d\u7b26\u9700\u8981\u5bf9\u73b0\u5206\u533a\u8fdb\u884c\u7f29\u5c0f\u518d\u6269\u5c55\u624d\u80fd\u4f7f\u7cfb\u7edf\u5206\u533a\u56de\u5230\u771f\u5b9e\u5bb9\u91cf",level:4},{value:"2. linux\u7cfb\u7edf\u6062\u590d\u64cd\u4f5c",id:"2-linux\u7cfb\u7edf\u6062\u590d\u64cd\u4f5c",level:3},{value:"\u8fdb\u5165\u5176\u4ed6liunx\u7cfb\u7edf\uff0c\u6302\u8f7d\u7cfb\u7edf\u5206\u533a\uff0c\u82e5\u4e3auefi\u6a21\u5f0f\uff0c\u9700\u8981\u6302\u8f7defi\u5206\u533a",id:"\u8fdb\u5165\u5176\u4ed6liunx\u7cfb\u7edf\u6302\u8f7d\u7cfb\u7edf\u5206\u533a\u82e5\u4e3auefi\u6a21\u5f0f\u9700\u8981\u6302\u8f7defi\u5206\u533a",level:4},{value:"\u4fee\u590d\u7cfb\u7edf\u542f\u52a8grub\u5f15\u5bfc\u6570\u636e\uff0c\u5c06/etc/fstab\u6302\u8f7d\u4fe1\u606f\u66f4\u65b0\u6210\u73b0\u7cfb\u7edf\u9700\u8981\u7684\u5206\u533a",id:"\u4fee\u590d\u7cfb\u7edf\u542f\u52a8grub\u5f15\u5bfc\u6570\u636e\u5c06etcfstab\u6302\u8f7d\u4fe1\u606f\u66f4\u65b0\u6210\u73b0\u7cfb\u7edf\u9700\u8981\u7684\u5206\u533a",level:4},{value:"\u5927\u4f53\u4fee\u590d\u5b8c\u6210\uff0c\u7ec6\u8282\u8fdb\u5165\u7cfb\u7edf\u518d\u8c03\u6574",id:"\u5927\u4f53\u4fee\u590d\u5b8c\u6210\u7ec6\u8282\u8fdb\u5165\u7cfb\u7edf\u518d\u8c03\u6574",level:4},{value:"3. Windows\u7cfb\u7edf\u6062\u590d\u64cd\u4f5c",id:"3-windows\u7cfb\u7edf\u6062\u590d\u64cd\u4f5c",level:3},{value:"Windows\u76f4\u63a5\u8fdb\u5165\uff0c\u4f1a\u5728\u7528\u6237\u767b\u5f55\u754c\u9762\uff0c\u754c\u9762\u53cd\u590d\u91cd\u542f\uff0c\u5feb\u6377\u952e\u8fdb\u5165\u4ece\u4efb\u52a1\u7ba1\u7406\u5668\uff0c\u518d\u8fd0\u884ccmd\u540e\u53d1\u73b0\u4e0d\u662f\u9ed8\u8ba4C\u76d8\uff0c\u9700\u8981\u5bf9\u5907\u4efd\u524d\u7684\u76d8\u7b26\u6620\u5c04\u8868\u8fdb\u884c\u6e05\u9664\u6216\u4fee\u6539",id:"windows\u76f4\u63a5\u8fdb\u5165\u4f1a\u5728\u7528\u6237\u767b\u5f55\u754c\u9762\u754c\u9762\u53cd\u590d\u91cd\u542f\u5feb\u6377\u952e\u8fdb\u5165\u4ece\u4efb\u52a1\u7ba1\u7406\u5668\u518d\u8fd0\u884ccmd\u540e\u53d1\u73b0\u4e0d\u662f\u9ed8\u8ba4c\u76d8\u9700\u8981\u5bf9\u5907\u4efd\u524d\u7684\u76d8\u7b26\u6620\u5c04\u8868\u8fdb\u884c\u6e05\u9664\u6216\u4fee\u6539",level:4},{value:"4. \u542f\u52a8\u987a\u5e8f\u8c03\u6574",id:"4-\u542f\u52a8\u987a\u5e8f\u8c03\u6574",level:3},{value:"5. Mac\u7cfb\u7edf\u5206\u533a\u79fb\u52a8\u6062\u590d",id:"5-mac\u7cfb\u7edf\u5206\u533a\u79fb\u52a8\u6062\u590d",level:3}];function a(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",pre:"pre",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.header,{children:(0,d.jsx)(i.h1,{id:"\u64cd\u4f5c\u7cfb\u7edf",children:"\u64cd\u4f5c\u7cfb\u7edf"})}),"\n",(0,d.jsx)(i.h2,{id:"\u7cfb\u7edf\u5b89\u88c5",children:"\u7cfb\u7edf\u5b89\u88c5"}),"\n",(0,d.jsx)(i.h3,{id:"0-\u523b\u5f55\u5230\u5149\u76d8\u6216\u8005u\u76d8\u542f\u52a8\u89e3\u51b3\u7edd\u5927\u90e8\u5206\u7cfb\u7edf\u5b89\u88c5\u95ee\u9898",children:"0. \u523b\u5f55\u5230\u5149\u76d8\u6216\u8005U\u76d8\u542f\u52a8\uff0c\u89e3\u51b3\u7edd\u5927\u90e8\u5206\u7cfb\u7edf\u5b89\u88c5\u95ee\u9898"}),"\n",(0,d.jsx)(i.h3,{id:"1-uefi\u786c\u76d8\u901a\u7528\u5b89\u88c5",children:"1. UEFI\u786c\u76d8\u901a\u7528\u5b89\u88c5"}),"\n",(0,d.jsx)(i.h4,{id:"\u627e\u5230\u4e00\u5757\u5206\u533a\u5e76\u683c\u5f0f\u5316\u6210fat32\u5c06\u7cfb\u7edfiso\u6587\u4ef6\u89e3\u538b\u5230\u8be5\u5206\u533a\u91cd\u65b0\u542f\u52a8\u7136\u540e\u5728\u542f\u52a8\u9879\u91cc\u9009\u62e9\u65b0\u51fa\u73b0\u7684\u9879\u76ee\u8fdb\u5165\u5b89\u88c5\u6d41\u7a0b\u671f\u95f4\u53ef\u80fd\u9700\u8981easyuefi\u7b49\u6307\u5b9a\u542f\u52a8efi\u6587\u4ef6\u6b64\u65b9\u5f0f\u53ef\u4ee5\u5b89\u88c5ubuntuwindows\u7b49\u64cd\u4f5c\u7cfb\u7edf",children:"\u627e\u5230\u4e00\u5757\u5206\u533a\u5e76\u683c\u5f0f\u5316\u6210FAT32\uff0c\u5c06\u7cfb\u7edfISO\u6587\u4ef6\u89e3\u538b\u5230\u8be5\u5206\u533a\uff0c\u91cd\u65b0\u542f\u52a8\uff0c\u7136\u540e\u5728\u542f\u52a8\u9879\u91cc\u9009\u62e9\u65b0\u51fa\u73b0\u7684\u9879\u76ee\uff0c\u8fdb\u5165\u5b89\u88c5\u6d41\u7a0b\uff0c\u671f\u95f4\u53ef\u80fd\u9700\u8981easyuefi\u7b49\u6307\u5b9a\u542f\u52a8efi\u6587\u4ef6\uff0c\u6b64\u65b9\u5f0f\u53ef\u4ee5\u5b89\u88c5ubuntu\u3001Windows\u7b49\u64cd\u4f5c\u7cfb\u7edf"}),"\n",(0,d.jsx)(i.h3,{id:"2-deepin-uefi\u5b89\u88c5",children:"2. Deepin uefi\u5b89\u88c5"}),"\n",(0,d.jsx)(i.h4,{id:"\u82e5\u6709grub\u542f\u52a8\u5219\u76f4\u63a5\u5728bootgrubgrubcfg\u5185\u6dfb\u52a0\u542f\u52a8\u4fe1\u606f\u5982\u4e0b",children:"\u82e5\u6709grub\u542f\u52a8\uff0c\u5219\u76f4\u63a5\u5728/boot/grub/grub.cfg\u5185\u6dfb\u52a0\u542f\u52a8\u4fe1\u606f\u5982\u4e0b"}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-shell",children:"set timeout=3\n\ninsmod part_gpt\ninsmod ext2\ninsmod efi_gop\ninsmod efi_uga\ninsmod video_bochs\ninsmod video_cirrus\ninsmod loopback\ninsmod part_msdos\ninsmod fat\ninsmod ntfs\ninsmod ntfscomp\n\nmenuentry 'deepin install' {\n    search --label --set=root DATA\n    set isofile=\"/deepin-15.10.1-amd64.iso\"\n    loopback loop $isofile\n    linux (loop)/live/vmlinuz.efi  boot=live union=overlay username=user quiet  live-config noprompt noeject findiso=$isofile locales=zh_CN.UTF-8\n    initrd (loop)/live/initrd.lz\n}\n"})}),"\n",(0,d.jsx)(i.h4,{id:"\u4e5f\u53ef\u8fdb\u5165ubuntu\u7684grub\u63a7\u5236\u53f0\u8f93\u5165\u4ee5\u4e0a\u547d\u4ee4\u624b\u52a8\u5f15\u5bfc\u542f\u52a8\u4e5f\u9002\u7528\u4e8ekali\u7cfb\u7edf\u5b89\u88c5",children:"\u4e5f\u53ef\u8fdb\u5165ubuntu\u7684grub\u63a7\u5236\u53f0\u8f93\u5165\u4ee5\u4e0a\u547d\u4ee4\u624b\u52a8\u5f15\u5bfc\u542f\u52a8\uff0c\u4e5f\u9002\u7528\u4e8eKali\u7cfb\u7edf\u5b89\u88c5"}),"\n",(0,d.jsx)(i.h3,{id:"3-kali-linux-rolling-uefi\u5b89\u88c5",children:"3. Kali linux rolling uefi\u5b89\u88c5"}),"\n",(0,d.jsxs)(i.h4,{id:"\u62ffkali-linux-20231-installer-everything-amd64iso\u4e3a\u4f8b\u6bcf\u4e2aiso\u53ef\u80fd\u6709\u4e0d\u540c\u7684\u95ee\u9898\u7ed9\u51fa\u4e00\u822c\u6392\u67e5\u5b9a\u4f4d\u6d41\u7a0b",children:["\u62ff",(0,d.jsx)(i.a,{href:"https://cdimage.kali.org/kali-2023.1/kali-linux-2023.1-installer-everything-amd64.iso.torrent",children:"kali-linux-2023.1-installer-everything-amd64.iso"}),"\u4e3a\u4f8b\uff0c\u6bcf\u4e2aiso\u53ef\u80fd\u6709\u4e0d\u540c\u7684\u95ee\u9898\uff0c\u7ed9\u51fa\u4e00\u822c\u6392\u67e5\u5b9a\u4f4d\u6d41\u7a0b"]}),"\n",(0,d.jsx)(i.h4,{id:"\u89e3\u538b\u5230\u4e00\u4e2a\u5408\u9002\u5927\u5c0f\u7684fat32\u5206\u533abios\u81ea\u52a8\u68c0\u6d4b\u6b64\u5206\u533aefi\u6216easyuefi\u624b\u52a8\u5f15\u5bfc\u5f00\u673a\u8fdb\u5165\u6b63\u5e38\u5b89\u88c5\u6d41\u7a0b\u9047\u5230\u95ee\u9898ctrlfx-\u8fdb\u5165\u7ec8\u7aef\u64cd\u4f5c\u4ece\u67d0\u4e00\u4e2afx\u53ef\u4ee5\u770b\u5230\u5b89\u88c5\u65e5\u5fd7\u518d\u6839\u636e\u65e5\u5fd7\u62a5\u9519\u5224\u65ad",children:"\u89e3\u538b\u5230\u4e00\u4e2a\u5408\u9002\u5927\u5c0f\u7684FAT32\u5206\u533a\uff0cbios\u81ea\u52a8\u68c0\u6d4b\u6b64\u5206\u533aEFI\uff0c\u6216EasyUEFI\u624b\u52a8\u5f15\u5bfc\uff0c\u5f00\u673a\u8fdb\u5165\u6b63\u5e38\u5b89\u88c5\u6d41\u7a0b\uff0c\u9047\u5230\u95ee\u9898\uff0cCTRL+Fx \u8fdb\u5165\u7ec8\u7aef\u64cd\u4f5c\uff0c\u4ece\u67d0\u4e00\u4e2aFx\u53ef\u4ee5\u770b\u5230\u5b89\u88c5\u65e5\u5fd7\uff0c\u518d\u6839\u636e\u65e5\u5fd7\u62a5\u9519\u5224\u65ad"}),"\n",(0,d.jsx)(i.h5,{id:"1no-media\u5904\u7406",children:"1\uff0cNo Media\u5904\u7406"}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-shell",children:"mkdir /cdrom\nmount /div<FAT32 Device> /cdrom\n"})}),"\n",(0,d.jsx)(i.h5,{id:"2\u8f6f\u4ef6\u5305\u9009\u62e9\u9519\u8bef\u5904\u7406",children:"2\uff0c\u8f6f\u4ef6\u5305\u9009\u62e9\u9519\u8bef\u5904\u7406"}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-shell",children:"cp /target/etc/apt/sources.list /target/etc/apt/sources.list.new\n"})}),"\n",(0,d.jsx)(i.h2,{id:"\u5907\u4efd\u79fb\u690d\u7cfb\u7edf\u5206\u533a",children:"\u5907\u4efd\u79fb\u690d\u7cfb\u7edf\u5206\u533a"}),"\n",(0,d.jsx)(i.h3,{id:"1-\u5206\u533a\u64cd\u4f5c",children:"1. \u5206\u533a\u64cd\u4f5c"}),"\n",(0,d.jsx)(i.h4,{id:"\u4f7f\u7528\u5206\u533a\u5de5\u5177gparteddiskgenius\u7b49\u5c06\u7cfb\u7edf\u6240\u5728\u5206\u533a\u8fdb\u884c\u5bb9\u91cf\u7f29\u51cf\u6700\u597d\u4fdd\u7559\u4e00\u5b9a\u5927\u5c0f\u7684\u4f38\u7f29\u7a7a\u95f4\u4f7f\u7528dd\u5c06\u7cfb\u7edf\u5206\u533a\u4fdd\u7559\u6210\u6587\u4ef6",children:"\u4f7f\u7528\u5206\u533a\u5de5\u5177gparted/diskgenius\u7b49\u5c06\u7cfb\u7edf\u6240\u5728\u5206\u533a\u8fdb\u884c\u5bb9\u91cf\u7f29\u51cf\uff0c\u6700\u597d\u4fdd\u7559\u4e00\u5b9a\u5927\u5c0f\u7684\u4f38\u7f29\u7a7a\u95f4\uff0c\u4f7f\u7528dd\u5c06\u7cfb\u7edf\u5206\u533a\u4fdd\u7559\u6210\u6587\u4ef6"}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-shell",children:"dd if=/dev/<\u7cfb\u7edf\u5206\u533a> of=/media/<\u5b58\u50a8\u4f4d\u7f6e>/<\u6307\u5b9a\u6587\u4ef6\u540d> status=progress\n"})}),"\n",(0,d.jsx)(i.h4,{id:"\u7559\u51fa\u5f85\u88c5\u5165\u7cfb\u7edf\u5206\u533a\u5fc5\u987b\u5927\u4e8e\u7cfb\u7edf\u5907\u4efd\u6587\u4ef6\u5927\u4fa0\u8fdb\u884c\u78c1\u76d8\u6587\u4ef6\u5199\u5165",children:"\u7559\u51fa\u5f85\u88c5\u5165\u7cfb\u7edf\u5206\u533a\uff0c\u5fc5\u987b\u5927\u4e8e\u7cfb\u7edf\u5907\u4efd\u6587\u4ef6\u5927\u4fa0\uff0c\u8fdb\u884c\u78c1\u76d8\u6587\u4ef6\u5199\u5165"}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-shell",children:"dd if=/media/<\u5b58\u50a8\u4f4d\u7f6e>/<\u6587\u4ef6\u540d> of=/dev/<\u5f85\u88c5\u5165\u7cfb\u7edf\u5206\u533a> status=progress\n"})}),"\n",(0,d.jsx)(i.h4,{id:"\u7531\u4e8e\u5199\u5165\u7cfb\u7edf\u6587\u4ef6\u5185\u7684\u5206\u533a\u5927\u5c0f\u4e0e\u6b64\u65f6\u7cfb\u7edf\u5206\u533a\u7684\u5927\u5c0f\u53ef\u80fd\u4e0d\u7b26\u9700\u8981\u5bf9\u73b0\u5206\u533a\u8fdb\u884c\u7f29\u5c0f\u518d\u6269\u5c55\u624d\u80fd\u4f7f\u7cfb\u7edf\u5206\u533a\u56de\u5230\u771f\u5b9e\u5bb9\u91cf",children:"\u7531\u4e8e\u5199\u5165\u7cfb\u7edf\u6587\u4ef6\u5185\u7684\u5206\u533a\u5927\u5c0f\u4e0e\u6b64\u65f6\u7cfb\u7edf\u5206\u533a\u7684\u5927\u5c0f\u53ef\u80fd\u4e0d\u7b26\uff0c\u9700\u8981\u5bf9\u73b0\u5206\u533a\u8fdb\u884c\u7f29\u5c0f\u518d\u6269\u5c55\uff0c\u624d\u80fd\u4f7f\u7cfb\u7edf\u5206\u533a\u56de\u5230\u771f\u5b9e\u5bb9\u91cf"}),"\n",(0,d.jsx)(i.h3,{id:"2-linux\u7cfb\u7edf\u6062\u590d\u64cd\u4f5c",children:"2. linux\u7cfb\u7edf\u6062\u590d\u64cd\u4f5c"}),"\n",(0,d.jsx)(i.h4,{id:"\u8fdb\u5165\u5176\u4ed6liunx\u7cfb\u7edf\u6302\u8f7d\u7cfb\u7edf\u5206\u533a\u82e5\u4e3auefi\u6a21\u5f0f\u9700\u8981\u6302\u8f7defi\u5206\u533a",children:"\u8fdb\u5165\u5176\u4ed6liunx\u7cfb\u7edf\uff0c\u6302\u8f7d\u7cfb\u7edf\u5206\u533a\uff0c\u82e5\u4e3auefi\u6a21\u5f0f\uff0c\u9700\u8981\u6302\u8f7defi\u5206\u533a"}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-shell",children:"mount /dev/<\u7cfb\u7edf\u5206\u533a> /mnt\nmount /dev/<efi\u5206\u533a> /mnt/boot/efi # uefi\u542f\u52a8\u6a21\u5f0f\u9700\u8981\nmount -o bind /dev /mnt/dev/\nmount -o bind /proc /mnt/proc/\nmount -o bind /sys /mnt/sys/\n"})}),"\n",(0,d.jsx)(i.h4,{id:"\u4fee\u590d\u7cfb\u7edf\u542f\u52a8grub\u5f15\u5bfc\u6570\u636e\u5c06etcfstab\u6302\u8f7d\u4fe1\u606f\u66f4\u65b0\u6210\u73b0\u7cfb\u7edf\u9700\u8981\u7684\u5206\u533a",children:"\u4fee\u590d\u7cfb\u7edf\u542f\u52a8grub\u5f15\u5bfc\u6570\u636e\uff0c\u5c06/etc/fstab\u6302\u8f7d\u4fe1\u606f\u66f4\u65b0\u6210\u73b0\u7cfb\u7edf\u9700\u8981\u7684\u5206\u533a"}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{children:"**********************!!!PROTECTION POLICY!!!**********************\nWaiting For The Next Deployment, Maybe It Would Be Displayed After That.\n"})}),"\n",(0,d.jsx)(i.h4,{id:"\u5927\u4f53\u4fee\u590d\u5b8c\u6210\u7ec6\u8282\u8fdb\u5165\u7cfb\u7edf\u518d\u8c03\u6574",children:"\u5927\u4f53\u4fee\u590d\u5b8c\u6210\uff0c\u7ec6\u8282\u8fdb\u5165\u7cfb\u7edf\u518d\u8c03\u6574"}),"\n",(0,d.jsx)(i.h3,{id:"3-windows\u7cfb\u7edf\u6062\u590d\u64cd\u4f5c",children:"3. Windows\u7cfb\u7edf\u6062\u590d\u64cd\u4f5c"}),"\n",(0,d.jsx)(i.h4,{id:"windows\u76f4\u63a5\u8fdb\u5165\u4f1a\u5728\u7528\u6237\u767b\u5f55\u754c\u9762\u754c\u9762\u53cd\u590d\u91cd\u542f\u5feb\u6377\u952e\u8fdb\u5165\u4ece\u4efb\u52a1\u7ba1\u7406\u5668\u518d\u8fd0\u884ccmd\u540e\u53d1\u73b0\u4e0d\u662f\u9ed8\u8ba4c\u76d8\u9700\u8981\u5bf9\u5907\u4efd\u524d\u7684\u76d8\u7b26\u6620\u5c04\u8868\u8fdb\u884c\u6e05\u9664\u6216\u4fee\u6539",children:"Windows\u76f4\u63a5\u8fdb\u5165\uff0c\u4f1a\u5728\u7528\u6237\u767b\u5f55\u754c\u9762\uff0c\u754c\u9762\u53cd\u590d\u91cd\u542f\uff0c\u5feb\u6377\u952e\u8fdb\u5165\u4ece\u4efb\u52a1\u7ba1\u7406\u5668\uff0c\u518d\u8fd0\u884ccmd\u540e\u53d1\u73b0\u4e0d\u662f\u9ed8\u8ba4C\u76d8\uff0c\u9700\u8981\u5bf9\u5907\u4efd\u524d\u7684\u76d8\u7b26\u6620\u5c04\u8868\u8fdb\u884c\u6e05\u9664\u6216\u4fee\u6539"}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-shell",children:"# \u8fdb\u5165PE\u6216\u5176\u4ed6Windows\u7cfb\u7edf\uff0c\u6253\u5f00regedit\u6ce8\u518c\u8868\u7f16\u8f91\u5668\uff0c\u9ed8\u8ba4\u4e3aPE\u6216\u73b0\u7cfb\u7edf\u7684\u6ce8\u518c\u8868\u3002\u70b9\u51fb\u6ce8\u518c\u8868\u5de6\u4fa7\u680f\u4efb\u4e00\u9879\uff0c\u518d\u83dc\u5355\u5185File->Load Hive\uff0c\u627e\u5230\u9700\u8981\u4fee\u590d\u5f15\u5bfc\u7684\u7cfb\u7edf\u5206\u533a\uff0c\u9009\u62e9Windows\\System32\\config\\SYSTEM\u8def\u5f84\u6587\u4ef6\uff0c\u4fdd\u5b58\u4e3a\u4efb\u610f\u540d\uff0c\u8fdb\u5165\u65b0\u547d\u540d\u9879\uff0c\u5220\u9664MountedDevices\u76ee\u5f55\u9879\u6216\u8005\u8fdb\u5165\u66f4\u65b0\u7cfb\u7edf\u5206\u533a\u53c2\u6570\u4fe1\u606f\uff0c\u64cd\u4f5c\u5b8c\u6210\u540e\u9000\u51faregedit\n\n# \u5927\u4f53\u4fee\u590d\u5b8c\u6210\uff0c\u7ec6\u8282\u8fdb\u5165\u7cfb\u7edf\u518d\u8c03\u6574\uff0c\u53ef\u80fd\u9700\u8981\u5728PE\u5185\u4fee\u590d\u5f15\u5bfc\n"})}),"\n",(0,d.jsx)(i.h3,{id:"4-\u542f\u52a8\u987a\u5e8f\u8c03\u6574",children:"4. \u542f\u52a8\u987a\u5e8f\u8c03\u6574"}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{children:"**********************!!!PROTECTION POLICY!!!**********************\nWaiting For The Next Deployment, Maybe It Would Be Displayed After That.\n"})}),"\n",(0,d.jsx)(i.h3,{id:"5-mac\u7cfb\u7edf\u5206\u533a\u79fb\u52a8\u6062\u590d",children:"5. Mac\u7cfb\u7edf\u5206\u533a\u79fb\u52a8\u6062\u590d"}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{children:"**********************!!!PROTECTION POLICY!!!**********************\nWaiting For The Next Deployment, Maybe It Would Be Displayed After That.\n"})})]})}function c(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,d.jsx)(i,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},3331:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>u});var l=n(8101);const d={},s=l.createContext(d);function o(e){const i=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function u(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),l.createElement(s.Provider,{value:i},e.children)}}}]);