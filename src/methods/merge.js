'use strict';

module.exports = function merge(objectOrArray) {
  if (Array.isArray(objectOrArray)) {
    return new this.constructor(this.items.concat(objectOrArray));
  }

  const collection = Object.create(this.items);

  Object.keys(objectOrArray).map(function(key) {
    collection[key] = objectOrArray[key];
  });

  return new this.constructor(collection);
};
