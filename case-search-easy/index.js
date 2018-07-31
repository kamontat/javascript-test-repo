const helper = require("../helper")
helper.reset()

// runnable is for search value (value) in array (data) and return index of that value.
// first param  - array of oject that load from integer.json
// second param - value to be searching
function runnable(data, value) {
  return 0
}

helper.setCaseWithDataAndValue("search number 101004",
  helper.loadInteger(), 101004, 41, runnable)

helper.setCaseWithDataAndValue("search number 125259",
  helper.loadInteger(), 125259, 70, runnable)

helper.setCaseWithDataAndValue("search number 683413",
  helper.loadInteger(), 683413, 20, runnable)