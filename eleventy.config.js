export default function (eleventyConfig) {
eleventyConfig.addPassthroughCopy("about.html");
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("about.html");
};
