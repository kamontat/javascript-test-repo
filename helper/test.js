const color = require("./color")

class Test {
  constructor() {
    this.label = ""
    this.actual = {}
    this.expected = {}

    this.testFn = (a, e) => a == e;
  }

  setLabel(l) {
    this.label = l;
  }

  setActual(actual) {
    this.actual = actual;
  }

  setExpected(expected) {
    this.expected = expected;
  }

  setTestFunction(fn) {
    this.testFn = fn;
  }

  run() {
    return this.testFn(this.actual, this.expected);
  }

  getCompareString() {
    return `${color.getActualTitleColor()}
${color.getActualColor(this.actual)}

${color.getExpectedTitleColor()}
${color.getExpectedColor(this.expected)}`;
  }
}

exports = module.exports = new Test();