const util = require("util");
const color = require("./color");

let CONSTANT_SHOW_SHORT = true;

var overallPass = 0;
var overallFail = 0;
var pass = 0;
var fail = 0;

var case_index = 1;
var expected;
var value;

const toggleShow = () => {
  CONSTANT_SHOW_SHORT = !CONSTANT_SHOW_SHORT;
}

const ld = () => {
  return require("./_res/double.json");
};

const li = () => {
  return require("./_res/integer.json");
};

const lia = () => {
  return require("./_res/integer-array.json").array;
};

const lsa = () => {
  return require("./_res/string-array.json").array;
};

const execV = (fn) => {
  return fn(value);
};

const execD = (data, fn) => {
  return fn(data);
};

const execDV = (data, fn) => {
  return fn(data, value);
};

const setV = (v) => {
  value = v;
};

const setE = (expect) => {
  expected = expect;
};

const test = (result) => {
  if (result == expected) {
    pass++;
    console.log(`${color.FgGreen}Success!!${color.Reset}`);
    return true;
  } else {
    fail++;
    console.error(`${color.FgRed}Failure!!${color.Reset}`);
    if (!CONSTANT_SHOW_SHORT) {
      console.error(`${color.FgBlue}${color.Underscore}Actual:${color.Reset}
${color.FgBlue}${result}${color.Reset}
      
${color.FgRed}${color.Underscore}Expected:${color.Reset}
${color.FgRed}${expected}${color.Reset}
`);
    };

  }

  return false;
}

const PrintCaseTitle = (name) => {
  process.stdout.write(`${color.FgMagenta}${color.Dim}Run case ${color.Underscore}#${case_index++}${color.Reset} ${name.padEnd(30)}:  `);
};

const setCaseV = (name, value, expectation, fn) => {
  PrintCaseTitle(name)

  setV(value);
  const result = execV(fn)

  setE(expectation)
  return test(result)
};

const setCaseD = (name, data, expectation, fn) => {
  PrintCaseTitle(name)

  const result = execD(data, fn);

  setE(expectation)
  return test(result)
};

const setCaseDV = (name, data, value, expectation, fn) => {
  PrintCaseTitle(name)

  setV(value);
  const result = execDV(data, fn);

  setE(expectation)
  return test(result)
};

const reset = () => {
  case_index = 1;

  overallPass += pass;
  overallFail += fail;

  pass = fail = 0
}

const getResult = () => {
  return {
    pass: pass,
    fail: fail,
    overall: {
      pass: overallPass,
      fail: overallFail,
    }
  }
};

exports = module.exports = {
  toggleShow: toggleShow,
  loadDouble: ld,
  loadInteger: li,
  loadArrayInteger: lia,
  loadArrayString: lsa,
  setCaseWithValue: setCaseV,
  setCaseWithData: setCaseD,
  setCaseWithDataAndValue: setCaseDV,
  reset: reset,
  getResult: getResult,
  getSummary: () => {
    reset();
    return getResult().overall;
  }
}