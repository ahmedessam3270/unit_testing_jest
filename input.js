/**
 * @desc the function takes a string and returns it after making some modifications on it, if there's no entered string it will return "Unknown", if the string is longer than 10 characters it will return the first 10 characters, if the string starts with a space or ends with a space it will remove it, and if the string starts with an underscore it will remove it and return the first 10 characters.
 * @param {string} name - The name to be filtered.
 * @returns {string} - The filtered name, after applying the modifications.
 */
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
  if (name === "hell") {
    throw new Error("this word is prohipted");
  }
}

module.exports = fitlerName;

/*
when adding the code below and assign these values,
 the coverage will run with testing itself,
 and if you want the repoters to be in html only you can assign coverageReporters to "html"

,
  "jest": {
    "collectCoverage": true,
    "coverageReporters": [
      "html"
    ]
  }

*/
