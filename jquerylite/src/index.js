const DOMNodeCollection = require("./dom_node_collection.js");

const $l = function (selector) {
  if (typeof selector === "string"){
    let matches = Array.from(document.querySelectorAll(selector));
    matches = new DOMNodeCollection(matches);
    return matches;
  } else if (selector instanceof HTMLElement) {
    let htmlEls = new DOMNodeCollection([selector]);
    return htmlEls;
  }
};

window.$l = $l;
