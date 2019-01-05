const Data = require('data-bite');

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions

  let preset = 'fortune';
  let service = new Data(preset).service();

  let {resource} = configOptions;

  // Transform
  const processEntity = entity => {
    const nodeId = createNodeId(`jsonapi-${resource}-${entity.id}`)
    const nodeContent = JSON.stringify(entity)
    const nodeData = Object.assign({}, entity, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `JsonApi${resource}`,
        content: nodeContent,
        contentDigest: createContentDigest(entity),
      },
    })

    return nodeData
  }

  return service.get(resource)
    .then( (res) => {
      return res.data;
    }).then(entities => {
      entities.forEach(entity => {
        let nodeData = processEntity(entity)
        createNode(nodeData)
      });
    });
}
