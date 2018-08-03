const NS_PER_SEC = 1e9;
const MS_PER_SEC = 1e3;
const MS_PER_NS = 1e-6;
const SEC_PER_NS = 1e-9;

const MS = ["millisecond", "ms"];
const NS = ["nanosecond", "ns"];
const SEC = ["second", "s"];

class Time {
  constructor() {
    this._start = [0, 0];
    this._end = [0, 0];

    this._total = [0, 0];

    this.output = MS;
  }

  start() {
    this._start = process.hrtime();
  }

  end() {
    this._end = process.hrtime(this._start);
    this._updateTotal();
  }

  timeExist() {
    return this._total[0] > 0 || this._total[1] > 0;
  }

  _updateTotal() {
    // console.log(this._total);
    // console.log(this._end);

    // update second
    this._total[0] += this._end[0];
    // case number exceed 1e9
    if (NS_PER_SEC - this._total[1] <= this._end[1]) {
      this._total[0]++;
      this._total[1] = (NS_PER_SEC - this._total[1]) + this._end[1];
    } else {
      this._total[1] += this._end[1];
    }
  }

  getTime() {
    return {
      time: this._end,
      total: this._total,
    }
  }

  toggleOutputToNS() {
    this.output = NS;
    return this;
  }

  toggleOutputToMS() {
    this.output = MS;
    return this;
  }

  toggleOutputToSEC() {
    this.output = SEC;
    return this;
  }

  /**
   * 
   * @param {boolean} unit is result have unit
   * @param {boolean} short is unit short or long
   */
  getTimeToString(unit, short) {
    if (unit == undefined || unit == null) unit = false;
    if (short == undefined || short == null) short = false;

    let index = 0;
    if (short) index = 1;
    if (this.output == NS) return this._getNanoSecondTimeString(unit, index);
    else if (this.output == MS) return this._getMilliSecondTimeString(unit, index);
    else if (this.output == SEC) return this._getSecondTimeString(unit, index);
    else return this._getMilliSecondTimeString(unit, index);
  }

  _getSecondTimeString(unit, index) {
    return {
      time: this._toSecond(this._end) + this._genUnitString(unit, index),
      total: this._toSecond(this._total) + this._genUnitString(unit, index),
    }
  }

  _getMilliSecondTimeString(unit, index) {
    return {
      time: this._toMiliSecond(this._end) + this._genUnitString(unit, index),
      total: this._toMiliSecond(this._total) + this._genUnitString(unit, index),
    }
  }

  _getNanoSecondTimeString(unit, index) {
    return {
      time: this._toNanoSecond(this._end) + this._genUnitString(unit, index),
      total: this._toNanoSecond(this._total) + this._genUnitString(unit, index),
    }
  }

  _toNanoSecond(tuple) {
    return `${(tuple[0] * NS_PER_SEC) + tuple[1]}`;
  }

  _toMiliSecond(tuple) {
    return Number.parseFloat(`${(tuple[0] * MS_PER_SEC) + (tuple[1] * MS_PER_NS)}`).toFixed(3)
  }

  _toSecond(tuple) {
    return Number.parseFloat(`${tuple[0] + (tuple[1] * SEC_PER_NS)}`).toFixed(3)
  }

  _genUnitString(unit, index) {
    if (unit) {
      return " " + this.output[index];
    }
    return "";
  }
}

exports = module.exports = new Time();