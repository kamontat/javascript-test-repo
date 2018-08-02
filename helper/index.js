const color = require("./color");

class Helper {
  constructor() {
    this._CONSTANT_SHOW_SHORT = true;

    this._caseIndex = 0;
    this._totalIndex = 0;

    this._pass = 0;
    this._fail = 0;
    this._overallPass = 0;
    this._overallFail = 0;

    this._time = require("./time");

    this._runnable = null;
    this._value = [];

    this._resource = require("./resource");

    this._testModule = require("./test")
  }

  _test() {
    if (this._testModule.run()) {
      this._pass++;
      console.log(`${color.getSuccessColor()} ${color.getTimeColor(this._time.getMiliSecondTimeString().time + " ms")}`);
    } else {
      this._fail++;
      console.log(`${color.getFailureColor()} ${color.getTimeColor(this._time.getMiliSecondTimeString().time + " ms")}`);
      if (!this.isShortResult()) console.log(this._testModule.getCompareString());
    }
  }

  test() {
    this._startEach();
    let args = [];
    if (this._resource.isExist())
      args = [this._resource.data];
    if (this._value.length > 0)
      args = args.concat(this._value)
    this._setTestActual(this._runnable(...args));
    this._endEach();
  }

  getResult() {
    return {
      "pass": this._pass,
      "fail": this._fail,
      "overall": {
        "case": this._totalIndex,
        "time": this._time,
        "pass": this._overallPass,
        "hasPass": this._overallPass > 0,
        "fail": this._overallFail,
        "hasFail": this._overallFail > 0,
      }
    };
  }

  setTestExpected(expected) {
    this._testModule.setExpected(expected);
  }

  _setTestActual(actual) {
    this._testModule.setActual(actual);
  }

  setTestLabel(label) {
    this._testModule.setLabel(label);
  }

  setTestFunction(fn) {
    this._testModule.setTestFunction(fn);
  }

  setRunnable(fn) {
    this._runnable = fn;
  }

  addRunnableValue(...value) {
    this._value.push(...value)
  }

  getResource() {
    return this._resource;
  }

  getTime() {
    return this._time;
  }

  isShortResult() {
    return this._CONSTANT_SHOW_SHORT;
  }

  toggleShowResult() {
    this._CONSTANT_SHOW_SHORT = !this._CONSTANT_SHOW_SHORT;
  }

  startCase() {
    this.summaryCase();

    // reset
    this._caseIndex = 0;
    this._pass = this._fail = 0;
  }

  endCase() {
    return this.getResult();
  }

  summaryCase() {
    this._overallPass += this._pass;
    this._overallFail += this._fail;

    this._totalIndex += this._caseIndex;

    return this.getResult().overall;
  }

  _startEach() {
    process.stdout.write(
      `${color.getCaseTitleColor(++this._caseIndex)} ${this._testModule.label.padEnd(30)}:  `
    );

    this._time.start();
  }

  _endEach() {
    this._time.end();

    this._test();
    this._value = [];
  }
}

exports = module.exports = new Helper();