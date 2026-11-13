import { AppConfig } from "@/config/config";

/*
 * @Author: kasuie
 * @Date: 2024-06-13 10:00:42
 * @LastEditors: kasuie
 * @LastEditTime: 2025-04-17 18:01:58
 * @Description:
 */
export const defaultAppConfig: AppConfig = {
  name: "我的主页✨",
  favicon: "/favicon.ico",
  keywords: "remio,rem,mio,C.C.,KASUIE,个人主页,主页",
  description: "KASUIEの次元，兴趣至上，内容随缘，个人主页",
  domain: "",
  avatarConfig: {
    src: "https://s2.loli.net/2024/06/19/8zlOyDUnGjXeHpi.webp",
    size: 150,
    round: "full",
    hoverAnimate: "top",
    style: "glint",
  },
  bgConfig: {
    bg: "https://s2.loli.net/2024/06/21/euQ48saP7UgMyDr.webp",
    mbg: "https://s2.loli.net/2024/06/21/59b6eRscAvQWHT1.webp",
    bgStyle: "snow",
    blur: "sm",
    cardOpacity: 0.1,
    carousel: true,
    carouselGap: 5,
    transitionTime: 0.7,
    transitionStyle: "default",
    autoAnimate: false,
  },
  globalStyle: {
    theme: "light",
    primaryColor: "#229fff",
    fallback: "",
    fonts: [],
  },
  layoutConfig: {
    gapSize: "md",
    style: "vertical",
    istTransition: true,
  },
  subTitle: "https://v1.hitokoto.cn?c=a&c=b&c=c",
  subTitleConfig: {
    typing: false,
    loading: "",
    loopTyping: false,
    shadow: false,
    typingCursor: true,
    typingGap: 10,
    heart: true,
    showFrom: true,
    style: "",
    gapDelay: 0.05,
    content: "Hello💫",
    desc: "这里是我の主页",
  },
  links: [
    {
      title: "qq",
      color: "#dfba00",
      url: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=zIvBSvLDRr4MvqFSHcioDwS090ljUYHT&authKey=THHoVVpDZWHfnpZoNf57rDWzwrXmTWtnlN70ljCM6cG9eZ5KTIJcTxrvc7%2B7YdVI&noverify=0&group_code=793752494",
      icon: "qq",
    },
    {
      title: "github",
      color: "#000000",
      url: "https://github.com/kasuie",
      icon: "github",
    },
    {
      title: "email",
      color: "#fd3232",
      url: "mailto:i@kasuie.cc",
      icon: "email",
    },
    {
      title: "bilibili",
      color: "#0088cc",
      url: "https://space.bilibili.com/85447052",
      icon: "bilibili",
    },
  ],
  sites: [
    {
      icon: "https://cs.kasuie.cc/icons/d5570e8a-a826-47be-91b2-f6949b743111.webp!cover",
      title: "KASUIEの次元",
      url: "https://kasuie.cc",
      desc: "博客主页",
    },
    {
      icon: "https://cs.kasuie.cc/icons/1419ac35-0a57-4359-bb2f-55a26fc52bd8.png!cover",
      title: "Mio 导航",
      url: "https://nav.kasuie.cc",
      desc: "Mio 网站导航",
    },
    {
      icon: "https://cs.kasuie.cc/icons/a8cb45a8-c0ec-41e7-ab8f-ff4fe8817230.jpg!cover",
      title: "KASUIEのAI",
      url: "https://ai.kasuie.cc",
      desc: "ChatGPT",
    },
    {
      icon: "https://cs.kasuie.cc/icons/1419ac35-0a57-4359-bb2f-55a26fc52bd8.png!cover",
      title: "KASUIEの库",
      url: "https://dist.kasuie.cc",
      desc: "网盘挂载程序",
    },
    {
      icon: "https://cs.kasuie.cc/icons/0d2e7fe7-3cca-4989-9bb4-4a39cee77801.png!cover",
      title: "KASUIEの图床",
      url: "https://upload.kasuie.cc",
      desc: "图床服务",
    },
    {
      icon: "https://cs.kasuie.cc/icons/d5570e8a-a826-47be-91b2-f6949b743111.webp!cover",
      title: "监控服务",
      url: "https://status.kasuie.cc/status",
      desc: "服务程序监控",
    },
    {
      icon: "https://cs.kasuie.cc/icons/d5570e8a-a826-47be-91b2-f6949b743111.webp!cover",
      title: "KASUIEのDocs",
      url: "https://docs.kasuie.cc",
      desc: "文档服务",
    },
    {
      icon: "https://cs.kasuie.cc/icons/1419ac35-0a57-4359-bb2f-55a26fc52bd8.png!cover",
      title: "喜好生成表",
      url: "https://like.kasuie.cc",
      desc: "个人喜好生成表",
    },
  ],
  sitesConfig: {
    hidden: false,
    cardStyle: "",
    hoverBlur: false,
    hoverScale: false,
    hoverFlip: true,
    direction: "",
    modal: false,
    modalTips: "",
    modalTitle: "",
  },
  socialConfig: {
    loading: "default",
    ripple: true,
  },
  sliders: {
    data: [],
    title: "技能加点",
    color: "#fff",
    hidden: true,
    column: 2,
  },
  footer: {
    text: "© 2020 - 2024 By KASUIE",
    url: "https://kasuie.cc",
    ICP: "ICP备xxxxxxxx号",
    direction: "col-reverse",
    isExternal: true,
  },
  resources: {
    css: [],
    js: [],
    bodyHtml: "",
  },
};
