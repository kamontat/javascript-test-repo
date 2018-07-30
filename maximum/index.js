const helper = require("../helper")

function runnable(data) {
  return data[0].number
}

const result = helper.execute(helper.loadData(), runnable)

helper.setExpectation("999395.37085")
helper.test(result)