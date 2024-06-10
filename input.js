function fitlerName(name) {
  if (!name) {
    return (name = "Unknown");
  }
  if (name.startsWith(" ") || name.endsWith(" ")) {
    return name.trim();
  }
  if (name.length > 10) {
    return name.slice(0, 10);
  }
  if (name.trim().startsWith("_")) {
    return name.split("_").join("").slice(0, 10);
  }
}

module.exports = fitlerName;
