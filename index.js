const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)){
        collection.forEach(item => callback(item))
      } else {
        Object.values(collection).forEach(item => callback(item))
      }
      return collection
    },

    map: function(collection, callback) {
      if (Array.isArray(collection)){
        return collection.map(item => callback(item))
      } else {
        return Object.values(collection).map(item => callback(item))
      }
    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
