module.exports = function getUsingDocumentSidebar() {
  return [
    {
      text: '简介',
      link: '/usingDocument/简介',
    },
    {
      text: '安装',
      link: '/usingDocument/安装',
    },
    {
      text: '核心功能',
      children: [
        {
          text: '现有功能',
          link: '/usingDocument/FunctionArea/index',
        },
        {
          text: '自动补全',
          link: '/usingDocument/FunctionArea/AutoCompletion',
        },
        {
          text: '自动导入',
          link: '/usingDocument/FunctionArea/AutoImport',
        },
        {
          text: '代码片段',
          link: '/usingDocument/FunctionArea/snippet',
        },
      ],
    },
  ]
}
