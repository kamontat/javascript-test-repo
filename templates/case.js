const Helper = require("../helper")

/**
 * 
 * @param {Helper} helper helper class
 */
const method = (helper) => {
  helper.startCase()

  /* for load resource file */
  // helper.getResource().loadDouble() 

  /* set runnable function with resource and value */
  // helper.setRunnable(function ([resource], [value1], [value2], ...) {
  //   return ""
  // })

  /* set runnable value array */
  // helper.addRunnableValue("value1")
  // helper.addRunnableValue("value2")

  /* set test label */
  // helper.setTestLabel("")

  /* set test expected value */
  // helper.setTestExpected("")

  /* execute test */
  // helper.test()

  /* get test result */
  return helper.endCase();
}

exports = module.exports = method