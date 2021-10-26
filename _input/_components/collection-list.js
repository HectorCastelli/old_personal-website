module.exports = (data, collection, renderFunc = null) => {
  if (renderFunc === null) {
    renderFunc = defaultRenderFunction;
  }

  return `<ul>
  ${collection.map((i) => renderFunc(i, data.page.url === i.url)).join("\n")}
</ul>`;
};

const defaultRenderFunction = (item, isCurrentPage) => `<li ${
  isCurrentPage ? `class="active"` : ""
}>
<a href="${item.url}">
  ${item.data.title}
</a>
</li>`;
