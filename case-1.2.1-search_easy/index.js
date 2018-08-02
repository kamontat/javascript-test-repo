const Helper = require("../helper")

/**
 * runnable is for search value (value) in array (data) and return index of that value.
 * first param  - array of oject that load from integer.json
 * second param - value to be searching
 * 
 * @param {Helper} helper helper class
 */
const method = (helper) => {
  helper.startCase()

  /* for load resource file */
  helper.getResource().loadInteger()

  /* set runnable function with resource and value */
  helper.setRunnable((data, value) => {
    for (i = 0; i < data.length; i++)
      if (value === data[i].integer) {
        return i
      }
    return -1
  })

  helper.addRunnableValue(101004)
  helper.setTestLabel("search number 101004")
  helper.setTestExpected(41)
  helper.test()

  helper.addRunnableValue(125259)
  helper.setTestLabel("search number 125259")
  helper.setTestExpected(70)
  helper.test()

  helper.addRunnableValue(683413)
  helper.setTestLabel("search number 683413")
  helper.setTestExpected(19)
  helper.test()

  helper.addRunnableValue(1)
  helper.setTestLabel("search number 1")
  helper.setTestExpected(-1)
  helper.test()

  /* get test result */
  return helper.endCase();
}

exports = module.exports = method