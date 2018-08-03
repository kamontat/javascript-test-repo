const Helper = require("../helper")

/**
 * 
 * @param {Helper} helper helper class
 */
const method = (helper) => {
  helper.startCase()

  /* for load resource file */
  helper.getResource().loadStringArray()

  /* set runnable function with resource and value */
  helper.setRunnable(function (data) {
    var shortLetter = data[0].length
    var str = ""
    for (i = 0; i < data.length; i++)
      if (data[i].length < shortLetter) {
        shortLetter = data[i].length
        str = data[i]
      }
    return str
  })

  helper.setTestLabel("search the shortest string")
  helper.setTestExpected(`Nam dui.`)
  helper.test()

  /* get test result */
  return helper.endCase();
}

exports = module.exports = method
