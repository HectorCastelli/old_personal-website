const tagsToIgnore = ["post", ""];

const tagsToHuman = {
  career: "Career",
  self: "Self-Improvement",
  gamedev: "Game Development",
  web: "Web Development",
};

module.exports = {
  render: (tag) =>
    tagsToHuman[tag] ? tagsToHuman[tag] : stringToCapitalized(tag),
  filter: (tags) => tags.filter((t) => !tagsToIgnore.includes(t)),
};

const stringToCapitalized = (text) =>
  text
    .trim()
    .toLowerCase()
    .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
