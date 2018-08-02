const NS_PER_SEC = 1e9;
const MS_PER_SEC = 1e3;
const MS_PER_NS = 1e-6;
const SEC_PER_NS = 1e-9;

class Time {
  constructor() {
    this._start = [0, 0];
    this._end = [0, 0];

    this._total = [0, 0];
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

  getSecondTimeString() {
    return {
      time: this.toSecond(this._end),
      total: this.toSecond(this._total),
    }
  }

  getMiliSecondTimeString() {
    return {
      time: this.toMiliSecond(this._end),
      total: this.toMiliSecond(this._total),
    }
  }

  getNanoSecondTimeString() {
    return {
      time: this.toNanoSecond(this._end),
      total: this.toNanoSecond(this._total),
    }
  }

  toNanoSecond(tuple) {
    return `${(tuple[0] * NS_PER_SEC) + tuple[1]}`;
  }

  toMiliSecond(tuple) {
    return Number.parseFloat(`${(tuple[0] * MS_PER_SEC) + (tuple[1] * MS_PER_NS)}`).toFixed(3)
  }

  toSecond(tuple) {
    return Number.parseFloat(`${tuple[0] + (tuple[1] * SEC_PER_NS)}`).toFixed(3)
  }
}

exports = module.exports = new Time();