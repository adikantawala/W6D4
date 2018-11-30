class DOMNodeCollection {
  constructor (htmlArray) {
    this.htmlArray = htmlArray;
  }
}

DOMNodeCollection.prototype.html = function (arg) {
  if (typeof arg === 'undefined') {
    return this.htmlArray[0].innerHTML;
  } else {
    for (let i = 0; i < this.htmlArray.length; i++) {
      this.htmlArray[i].innerHTML = arg;
    }
  }
};

DOMNodeCollection.prototype.empty = function(){
  for (var i = 0; i < this.htmlArray.length; i++) {
    this.htmlArray[i].innerHTML = "";
  }
};

DOMNodeCollection.prototype.append = function (args) {
  for (var i = 0; i < array.length; i++) {
    array[i]
  }
};

module.exports = DOMNodeCollection;
