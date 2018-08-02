const Helper = require("../helper")

/**
 * 
 * @param {Helper} helper helper class
 */
const method = (helper) => {
  helper.startCase()

  helper.getResource().loadDouble()
  helper.setRunnable(function (data) {
    var maxItem = data[0].number
    for (i = 1; i < data.length; i++)
      if (data[i].number > maxItem) {
        maxItem = data[i].number
      }
    return maxItem
  })

  helper.setTestLabel("show maximum of double.json")
  helper.setTestExpected("999395.37085")
  helper.test()

  return helper.getResult();
}

exports = module.exports = method