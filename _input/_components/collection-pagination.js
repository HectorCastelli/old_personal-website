module.exports = (pagination) => {
  const currentPageNumber = pagination.pageNumber + 1;
  const maxPageNumber = pagination.hrefs.length;

  return `<nav>
<p>Page ${currentPageNumber} of ${maxPageNumber}</p>
${
  pagination.page.first !== pagination.page.last
    ? `<a href="${pagination.href.first}">First ⏪</a>`
    : ""
}
${
  pagination.page.previous
    ? `<a href="${pagination.href.previous}">Previous ◀️</a>`
    : `<span class="disabled">Previous</span>`
}
${
  pagination.page.next
    ? `<a href="${pagination.href.next}">Next ▶️</a>`
    : `<span class="disabled">Next</span>`
}
${
  pagination.page.last !== pagination.page.first
    ? `<a href="${pagination.href.last}">Last ⏩</a>`
    : ""
}
</nav>`;
};
