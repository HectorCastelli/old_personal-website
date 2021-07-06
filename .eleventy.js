const inclusiveLangPlugin = require("@11ty/eleventy-plugin-inclusive-language");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(inclusiveLangPlugin);

  return {
    dir: {
      input: "_input",
      layouts: "_layouts",
      output: "_site",
    },
  };
};
