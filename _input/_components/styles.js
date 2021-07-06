const { readFileSync } = require("fs");
const path = require("path");
const CleanCSS = require("clean-css");
const sass = require("sass");

module.exports = () => {
  const stylesheet = sass.renderSync({
    file: path.resolve(__dirname, "../styles/theme.scss"),
  });
  return `<style>
  ${new CleanCSS().minify(stylesheet.css).styles}
</style>`;
};
