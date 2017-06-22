'use strict';

module.exports = function split(numberOfGroups) {
  const itemsPerGroup = Math.round(this.items.length / numberOfGroups);

  const items = JSON.parse(JSON.stringify(this.items));
  const collection = [];

  for (let iterator = 0; iterator < numberOfGroups; iterator++) {
    collection.push(items.splice(0, itemsPerGroup));
  }

  return collection;
};
