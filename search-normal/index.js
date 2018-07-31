const helper = require("../helper")

// runnable is for search value (value) in array (data) and return index of that value.
// first param  - array of oject that load from integer.json
// second param - value to be searching
function runnable(data, value) {
  return 0
}

// for testing purpose.
helper.setValue(101004)
const result = helper.executeWithValue(helper.loadInteger(), runnable)

helper.setExpectation(41)
helper.test(result)
