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

  helper.addRunnableValue(4)
  helper.setTestLabel("draw square size 4")
  helper.setTestExpected(`****
****
****
****
`)
  helper.test()

  helper.addRunnableValue(8)
  helper.setTestLabel("draw square size 8")
  helper.setTestExpected(`********
********
********
********
********
********
********
********
`)
  helper.test()

  helper.addRunnableValue(1)
  helper.setTestLabel("draw square size 1")
  helper.setTestExpected(`*
`)
  helper.test()

  helper.addRunnableValue(-1)
  helper.setTestLabel("draw square size -1")
  helper.setTestExpected(``)
  helper.test()

  helper.addRunnableValue(-99)
  helper.setTestLabel("draw square size -99")
  helper.setTestExpected(``)
  helper.test()

  /* get test result */
  return helper.endCase();
}

exports = module.exports = method