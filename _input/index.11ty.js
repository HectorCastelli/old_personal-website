const collectionList = require("./_components/collection-list");

exports.data = {
  title: "Hector C Zacharias",
  templateEngineOverride: "11ty.js,md",
  layout: "index",
};

exports.render = (data) => {
  const mostRecentArticles = data.collections.post.reverse().slice(0, 5);

  return `<main id="main-content">
  
  # Welcome!
  
  It is my pleasure to welcome you into my website.

  This site is mostly a way for me to share my ramblings about things that interest me,
  as well as centralize some information regarding myself.
  
  # Recent articles:
  ${collectionList(data, mostRecentArticles)}
  </main>`;
};
