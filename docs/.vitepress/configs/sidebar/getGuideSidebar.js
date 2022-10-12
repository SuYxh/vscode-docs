module.exports = function getGuideSidebar() {
  return [
    {
      text: '简介',
      children: [
        {
          text: '有必要学习插件开发吗',
          link: '/guide/有必要学习插件开发吗',
        },
        {
          text: '插件能做什么',
          link: '/guide/插件能做什么',
        },
      ],
    },
    {
      text: '工程创建',
      link: '/guide/工程创建',
    },
    {
      text: '目录结构',
      link: '/guide/目录结构',
    },
    {
      text: '运行调试',
      link: '/guide/运行调试',
    },
    {
      text: '常用功能',
      children: [
        {
          text: '添加右键菜单',
          link: '/guide/function/添加右键菜单/index',
        },
        {
          text: '添加快捷键',
          link: '/guide/function/添加快捷键/index',
        },
      ],
    },
    {
      text: '打包、发布、升级',
      link: '/guide/打包、发布、升级',
    },
  ]
}
