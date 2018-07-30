const helper = require("../helper")

function runnable(data) {
  return data[0].number
}

const result = helper.execute(helper.loadData(), runnable)

helper.setExpectation("-992375.166816")
helper.test(result)