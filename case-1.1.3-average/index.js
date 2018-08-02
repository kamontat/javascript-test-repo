const Helper = require("../helper")

/**
 * 
 * @param {Helper} helper helper class
 */
const method = (helper) => {
  helper.startCase()

  /* for load resource file */
  helper.getResource().loadDouble()

  /* set runnable function with resource and value */
  helper.setRunnable(function (data) {
    var average
    var sum = data[0].number
    for (i = 1; i < data.length; i++)
      sum = sum + data[i].number
    average = sum / data.length
    return average
  })

  helper.setTestLabel("find average of double.json")
  helper.setTestExpected("7208.279233693349")
  helper.test()

  /* get test result */
  return helper.endCase();
}

exports = module.exports = method