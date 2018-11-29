const $l = function (selector) {
  if (typeof selector === "string"){
    let matches = Array.from(document.querySelectorAll(selector));
    return matches;
  }
};

window.$l = $l;
