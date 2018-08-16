const Helper = require("../helper")

const dot = "*"

/**
 * 
 * @param {Helper} helper helper class
 */
const method = (helper) => {
  helper.startCase()

  /* set runnable function with resource and value */
  helper.setRunnable((size) => {
    return dot + "\n";
  })

  helper.addRunnableValue(3)
  helper.setTestLabel("draw triangle (hard) size 3")
  helper.setTestExpected(` * 
***
`)
  helper.test()

  helper.addRunnableValue(5)
  helper.setTestLabel("draw triangle (hard) size 5")
  helper.setTestExpected(`  *  
 *** 
*****
`)
  helper.test()

  helper.addRunnableValue(4)
  helper.setTestLabel("draw triangle (hard) size 4")
  helper.setTestExpected(`error`)
  helper.test()

  helper.addRunnableValue(10)
  helper.setTestLabel("draw triangle (hard) size 10")
  helper.setTestExpected(`error`)
  helper.test()

  helper.addRunnableValue(-1)
  helper.setTestLabel("draw triangle (hard) size -1")
  helper.setTestExpected(`error`)
  helper.test()

  helper.addRunnableValue(-10)
  helper.setTestLabel("draw triangle (hard) size -10")
  helper.setTestExpected(`error`)
  helper.test()

  /* get test result */
  return helper.endCase();
}

exports = module.exports = method