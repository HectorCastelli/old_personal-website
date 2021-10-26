const collectionList = require("./_components/collection-list");
const collectionPagination = require("./_components/collection-pagination");
const tag = require("./_components/tag");

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

  Here is a list of my articles, in reverse chronological order (newest first):

  ${collectionList(data, paginatedArticles.items, renderArticleWithTopics)}
  ${collectionPagination(data.pagination)}

  </main>`;
};

const renderArticleWithTopics = (item, isCurrentPage) => `<li ${
  isCurrentPage ? `class="active"` : ""
}>
<a href="${item.url}">
  ${item.data.title}
</a>
${item.data.tags ? renderTopics(item.data.tags) : ""}
</li>`;

const renderTopics = (tags) => `<p class="small">
Topics: ${tag
  .filter(tags)
  .map((i) => tag.render(i))
  .join(", ")}</p>`;
