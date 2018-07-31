const helper = require("../helper")
helper.reset()

function runnable(data) {
  var maxItem = data[0].number
  for (i = 1; i < data.length; i++)
    if (data[i].number > maxItem) {
      maxItem = data[i].number
    }
  return maxItem
}

helper.setCaseWithData("show maximum of double.json",
  helper.loadDouble(),
  "999395.37085",
  runnable)