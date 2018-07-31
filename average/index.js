const helper = require("../helper")

function runnable(data) {
  return data[0].number
}

const result = helper.execute(helper.loadDouble(), runnable)

helper.setExpectation("7208.279233693349")
helper.test(result)