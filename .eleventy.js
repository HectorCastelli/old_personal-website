const inclusiveLangPlugin = require("@11ty/eleventy-plugin-inclusive-language");
const htmlminifier = require("html-minifier");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(inclusiveLangPlugin, {
    templateFormats: ["md", "html", "js"],
  });

  eleventyConfig.addWatchTarget("./_input/styles/");

  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      let minified = htmlminifier.minify(content, {
        useShortDoctype: false,
        removeComments: true,
        collapseWhitespace: true,
        html5: true,
      });
      return minified;
    }

    return content;
  });

  return {
    dir: {
      input: "_input",
      layouts: "_layouts",
      output: "_site",
    },
  };
};
