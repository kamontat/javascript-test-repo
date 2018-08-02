const helper = require("../helper")
helper.reset()

const dot = "*"

// return square of *, size will be same as input (value)
function runnable(value) {
  return dot + "\n";
}

helper.setCaseWithValue("draw square size 4", 4, `****
****
****
****
`, runnable)

helper.setCaseWithValue("draw square size 8", 8, `********
********
********
********
********
********
********
********
`, runnable)

helper.setCaseWithValue("draw square size 1", 1, `*
`, runnable)

helper.setCaseWithValue("draw square size -1", -1, ``, runnable)

helper.setCaseWithValue("draw square size -99", -99, ``, runnable)