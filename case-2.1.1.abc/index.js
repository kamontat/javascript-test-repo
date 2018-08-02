const helper = require("../helper")
helper.reset()

function runnable(data) {
  return "ABC"
}

helper.setCaseWithValue("find ABC of 3 5 6", [3, 5, 6], "ABC", runnable)

helper.setCaseWithValue("find ABC of 8 1 3", [8, 1, 3], "CAB", runnable)

helper.setCaseWithValue("find ABC of 9 0 -4", [9, 0, -4], "CBA", runnable)

helper.setCaseWithValue("find ABC of 5 3 20", [5, 3, 20], "BAC", runnable)

helper.setCaseWithValue("find ABC of 6 5 3 1", [6, 5, 3, 1], "DCBA", runnable)

helper.setCaseWithValue("find ABC of 6 -1 2 0 10 -4", [6, -1, 2, 0, 10, -4], "EBDCFA", runnable)