const collectionList = require("./_components/collection-list");

exports.data = {
  title: "Hector C Zacharias",
  templateEngineOverride: "11ty.js,md",
  layout: "index",
};

exports.render = function (data) {
  return `# Welcome
  
  It is my pleasure to welcome you into my website.
  
  # Recent articles:
  ${collectionList(data, data.collections.post)}
  `;
};
