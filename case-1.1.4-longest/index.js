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

  helper.setTestLabel("search the longest string")
  helper.setTestExpected(`Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.`)
  helper.test()

  /* get test result */
  return helper.endCase();
}

exports = module.exports = method
