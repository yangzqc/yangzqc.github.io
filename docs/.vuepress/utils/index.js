export const getThemeNavbar = () => {
  return [
    {
      text: "首页",
      link: "/",
    },
    {
      text: "城市",
      children: [
        {
          text: "深圳",
          link: "/picture/shenzhen/",
        },
        {
          text: "清远",
          link: "/picture/qingyuan/",
        },
        {
          text: "西安",
          link: "/picture/xian/",
        },
        {
          text: "广州",
          link: "/picture/guangzhou/",
        },
        {
          text: "北京",
          link: "/picture/beijing/",
        },
      ],
    },
    // {
    //   text: "视频",
    //   link: "/video/tianshui/",
    // },
  ];
};
