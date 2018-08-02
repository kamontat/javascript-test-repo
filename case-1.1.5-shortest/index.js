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
    return ""
  })

  helper.setTestLabel("search the shortest string")
  helper.setTestExpected(`Nam dui.`)
  helper.test()

  /* get test result */
  return helper.endCase();
}

exports = module.exports = method
