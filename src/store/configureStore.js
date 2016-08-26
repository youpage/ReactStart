if (process.env.NODE_ENV === 'production') {
  //dynamic imports are not supported by ES6, so, use require
  module.exports = require('./configureStore.prod');
} else {
  module.exports = require('./configureStore.dev');
}
