const helper = require("../helper")
helper.reset()

function runnable(data) {
  var minItem = data[0].number
  for (i = 1; i < data.length; i++)
    if (data[i].number < minItem) {
      minItem = data[i].number
    }
  return minItem
}

helper.setCaseWithData("show minimum of double.json",
  helper.loadDouble(),
  "-992375.166816",
  runnable)