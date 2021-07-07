const inclusiveLangPlugin = require("@11ty/eleventy-plugin-inclusive-language");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(inclusiveLangPlugin, {
    templateFormats: ["md", "html", "js"],
  });

  eleventyConfig.addWatchTarget("./_input/styles/");

  return {
    dir: {
      input: "_input",
      layouts: "_layouts",
      output: "_site",
    },
  };
};
