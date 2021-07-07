const collectionList = require("./_components/collection-list");
const collectionPagination = require("./_components/collection-pagination");

exports.data = {
  title: "Hector C Zacharias - My blog",
  templateEngineOverride: "11ty.js,md",
  layout: "index",
  pagination: {
    data: "collections.post",
    size: 12,
    reverse: true,
  },
};

exports.render = (data) => {
  const paginatedArticles = data.pagination;

  return `<main>
  
  # My Articles

  Here is a list of my articles, in chronological order (newest first):

  ${collectionList(data, paginatedArticles.items)}
  ${collectionPagination(data.pagination)}

  </main>`;
};
