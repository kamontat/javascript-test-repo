const helper = require("../helper")
helper.reset()

function runnable(data) {
  var average
  var sum = data[0].number
  for (i = 1; i < data.length; i++)
    sum = sum + data[i].number
  average = sum / data.length
  return average
}

helper.setCaseWithData("find average of double.json",
  helper.loadDouble(),
  "7208.279233693349",
  runnable)