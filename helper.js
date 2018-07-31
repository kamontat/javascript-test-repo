const assert = require("assert");

var expected
var value

exports = module.exports = {
  loadDouble: () => {
    return require("./_res/double.json");
  },
  loadInteger: () => {
    return require("./_res/integer.json");
  },
  execute: (data, fn) => {
    return fn(data);
  },
  executeWithValue: (data, fn) => {
    return fn(data, value);
  },
  setValue: (v) => {
    value = v;
  },
  setExpectation: (expect) => {
    expected = expect;
  },
  test: (result) => {
    assert.ok(result == expected, `${result} is not equals ${expected}`);
    console.log("Success!! your code is correct!!");
  }
}