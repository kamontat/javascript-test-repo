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
  helper.setRunnable(function (resource) {
    var minItem = resource[0].number
    for (i = 1; i < resource.length; i++)
      if (resource[i].number < minItem) {
        minItem = resource[i].number
      }
    return minItem
  })

  /* set test label */
  helper.setTestLabel("show minimum of double.json")

  /* set test expected value */
  helper.setTestExpected("-992375.166816")

  /* execute test */
  helper.test()

  /* get test result */
  return helper.endCase();
}

exports = module.exports = method
