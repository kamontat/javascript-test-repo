const Helper = require("../helper")

/**
 * 
 * @param {Helper} helper helper class
 */
const method = (helper) => {
  helper.startCase()

  /* set runnable function with resource and value */
  helper.setRunnable(function (value1) {
    A = value1[0]
    B = value1[1]
    C = value1[2]
    console.log(A, B, C)


  })

  helper.addRunnableValue([3, 5, 6])
  helper.setTestLabel("find ABC of 3 5 6")
  helper.setTestExpected("ABC")
  helper.test()

  helper.addRunnableValue([8, 1, 3])
  helper.setTestLabel("find ABC of 8 1 3")
  helper.setTestExpected("BCA")
  helper.test()

  helper.addRunnableValue([9, 0, -4])
  helper.setTestLabel("find ABC of 9 0 -4")
  helper.setTestExpected("CBA")
  helper.test()

  helper.addRunnableValue([5, 3, 20])
  helper.setTestLabel("find ABC of 5 3 20")
  helper.setTestExpected("BAC")
  helper.test()

  helper.addRunnableValue([6, 5, 3, 1])
  helper.setTestLabel("find ABC of 6 5 3 1")
  helper.setTestExpected("DCBA")
  helper.test()

  helper.addRunnableValue([6, -1, 2, 0, 10, -4])
  helper.setTestLabel("find ABC of 6 -1 2 0 10 -4")
  helper.setTestExpected("EBDCFA")
  helper.test()

  /* get test result */
  return helper.endCase();
}

exports = module.exports = method