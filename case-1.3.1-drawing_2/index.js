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
    let square = ""
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        square += dot + " "
      }
      square += "\n"
    }
    return square

  })

  helper.addRunnableValue(4)
  helper.setTestLabel("draw square (hard) size 4")
  helper.setTestExpected(`* * * *
* * * *
* * * *
* * * *
`)
  helper.test()

  helper.addRunnableValue(8)
  helper.setTestLabel("draw square (hard) size 8")
  helper.setTestExpected(`* * * * * * * *
* * * * * * * *
* * * * * * * *
* * * * * * * *
* * * * * * * *
* * * * * * * *
* * * * * * * *
* * * * * * * *
`)
  helper.test()

  helper.addRunnableValue(1)
  helper.setTestLabel("draw square (hard) size 1")
  helper.setTestExpected(`*
`)
  helper.test()

  helper.addRunnableValue(-1)
  helper.setTestLabel("draw square (hard) size -1")
  helper.setTestExpected(``)
  helper.test()

  helper.addRunnableValue(-99)
  helper.setTestLabel("draw square (hard) size -99")
  helper.setTestExpected(``)
  helper.test()

  /* get test result */
  return helper.endCase();
}

exports = module.exports = method