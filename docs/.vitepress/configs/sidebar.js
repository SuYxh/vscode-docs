const { getPath } = require('./utils')
const getGuideSidebar = require('./sidebar/getGuideSidebar');
const getComponentsSidebar = require('./sidebar/getComponentsSidebar');
const getUsingDocumentSidebar = require('./sidebar/getUsingDocumentSidebar');

module.exports = {
  [getPath('/api/')]: 'auto',
  [getPath('/components/')]: getComponentsSidebar(),
  [getPath('/guide/')]: getGuideSidebar(),
  [getPath('/usingDocument/')]: getUsingDocumentSidebar()
}


