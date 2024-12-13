// collections
import { characters } from "./src/_11ty/collections/characters.js";

export default async function (eleventyConfig) {
  // collections
  eleventyConfig.addCollection("characters", characters);

  // ignores
  eleventyConfig.ignores.add("src/assets/**/*");
  eleventyConfig.watchIgnores.add("src/assets/**/*");

  // passthrough copy
  eleventyConfig.setServerPassthroughCopyBehavior("copy");
  eleventyConfig.addPassthroughCopy({ "./src/static": "/" });
  eleventyConfig.addPassthroughCopy("./src/assets/img");
  eleventyConfig.addPassthroughCopy("./src/assets/fonts");

  // server config
  eleventyConfig.setServerOptions({
    watch: ["./dist/assets/css/**/*.css"],
    port: 3000,
  });
}

export const config = {
  dir: {
    input: "src",
    output: "dist",
    includes: "_includes",
    data: "_data",
  },
  templateFormats: ["njk", "md"],
  htmlTemplateEngine: "njk",
  markdownTemplateEngine: "njk",
};
