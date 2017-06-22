'use strict';

module.exports = function whereIn(key, values) {
  const collection = this.items.filter(function(item) {
    return values.indexOf(item[key]) !== -1;
  });

  return new this.constructor(collection);
};
