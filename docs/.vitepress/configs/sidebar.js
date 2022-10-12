const { getPath } = require('./utils')
const getGuideSidebar = require('./sidebar/getGuideSidebar');
const getComponentsSidebar = require('./sidebar/getComponentsSidebar');

module.exports = {
  [getPath('/api/')]: 'auto',
  [getPath('/components/')]: getComponentsSidebar(),
  [getPath('/guide/')]: getGuideSidebar()
}


