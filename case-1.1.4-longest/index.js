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
    var longLetter = data[0].length
    var str = ""
    for (i = 0; i < data.length; i++)
      if (data[i].length > longLetter) {
        longLetter = data[i].length
        str = data[i]
      }
    return str

  })

  helper.setTestLabel("search the longest string")
  helper.setTestExpected(`Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.`)
  helper.test()

  /* get test result */
  return helper.endCase();
}

exports = module.exports = method
