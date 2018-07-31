const helper = require("../helper")
helper.reset()

const dot = "*"

// return square of *, size will be same as input (value)
function runnable(value) {
  return dot;
}

helper.setCaseWithValue("draw square (hard) size 4", 4, `* * * *
* * * *
* * * *
* * * *
`, runnable)