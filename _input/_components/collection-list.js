module.exports = function (data, collection) {
  return `<ul>
    ${collection
      .map(
        (i) =>
          `<li${data.page.url === i.url ? `class="active"` : ""}>
      <a href="${i.url}">
        ${i.data.title}
      </a>
    </li>`
      )
      .join("\n")}
  </ul>`;
};
