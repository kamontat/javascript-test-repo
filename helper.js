const assert = require("assert");

var expected

exports = module.exports = {
  loadData: () => {
    return require("./res/data.json");
  },
  execute: (data, fn) => {
    return fn(data);
  },
  setExpectation: (expect) => {
    expected = expect;
  },
  test: (result) => {
    assert.ok(result == expected, `${result} is not equals ${expected}`);

    console.log("Success!! your code is correct!!");
  }
}