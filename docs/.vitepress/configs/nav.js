const { getPath } = require('./utils')

module.exports = [
  { text: 'Yao', link: '/usingDocument/简介' },
  { text: '开发指南', link: '/guide/' },
  { text: '组件', link: '/components/button', activeMatch: getPath('^/components/') },
  { text: 'API 参考', link: '/api/' },
  {
    text: '更新日志',
    link:
      'https://github.com/SuYxh/vitepress-demo'
  }
]
