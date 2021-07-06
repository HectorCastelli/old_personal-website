const styles = require("../_components/styles");

exports.data = {
  title: "Hector C Zacharias",
};

exports.render = (data) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.title}</title>
    ${styles()}
  </head>
  <body>
    <header>
      <nav>
        <a href="/">Home 🏠</a>
        <a href="/about-me">About Me 👨🏻</a>
        <a href="/contact">Contact Info 📧</a>
        <a href="/blog">My Blog 📚</a>
      </nav>
    </header>
    ${data.content}
    <footer>
      <p>© Copyright ${new Date().getFullYear()} by Hector Castelli Zacharias. All rights reserved.</p>
    </footer>
  </body>
</html>`;
};
