exports.data = {
  title: "Hector C Zacharias",
};

exports.render = function (data) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.title}</title>
  </head>
  <body>
    <header>
    </header>
    ${data.content}
    <footer>
      <p>©Copyright ${new Date().getFullYear()} by Hector Castelli Zacharias. All rights reversed.</p>
    </footer>
  </body>
</html>`;
};
