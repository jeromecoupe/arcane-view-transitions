function characters(collection) {
  return collection.getFilteredByGlob("./src/content/characters/*.md");
}

export { characters };
