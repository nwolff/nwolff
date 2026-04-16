module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("screenshots");
  eleventyConfig.addPassthroughCopy("about.html");
  eleventyConfig.ignores.add("README.md");
};
