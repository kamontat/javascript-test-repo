const color = require("./colorConstants");

exports = module.exports = {
  getSuccessColor: () => {
    return `${color.FgGreen}Success!!${color.Reset}`;
  },
  getFailureColor: () => {
    return `${color.FgRed}Failure!!${color.Reset}`;
  },
  getTimeColor: (time) => {
    return `${color.Dim}(${time})${color.Reset}`
  },
  getCaseTitleColor: (index) => {
    return `${color.FgCyan}${color.Dim}Case ${color.Underscore}#${index}${color.Reset}`;
  },
  getActualTitleColor: () => {
    return `${color.FgGreen}${color.Underscore}Actual:${color.Reset}`;
  },
  getActualColor: (actual) => {
    return `${color.FgGreen}${color.Dim}${actual}${color.Reset}`;
  },
  getExpectedTitleColor: () => {
    return `${color.FgRed}${color.Underscore}Expected:${color.Reset}`;
  },
  getExpectedColor: (expected) => {
    return `${color.FgRed}${color.Dim}${expected}${color.Reset}`;
  },
  getFileColor: (filename) => {
    return `${color.FgRed}${filename}${color.Reset}`;
  },
  getOptionColor: (option) => {
    return `${color.FgGreen}${option}${color.Reset}`;
  },
  getArgumentColor: (argument) => {
    return `${color.FgCyan}${argument}${color.Reset}`;
  },
  getExampleColor: (example) => {
    return `${color.FgMagenta}${example}${color.Reset}`;
  },
  getIDColor: (id) => {
    return `${color.FgYellow}${color.Bright}${id}${color.Reset}`;
  },
  getLineColor: (line) => {
    return `${color.Dim}${line}${color.Reset}`;
  },
  getStartTitleColor: (title) => {
    return `${color.FgYellow}${color.Dim}Start ${color.Bright}${title}${color.Reset}`;
  },
  getEachSummaryColor: () => {
    return `${color.Underscore}${color.Dim}Summary:${color.Reset}`;
  },
  getEachSummaryPassColor: (pass) => {
    return `${color.FgGreen}${color.Dim}pass=${pass}${color.Reset}`;
  },
  getEachSummaryFailColor: (fail) => {
    return `${color.FgRed}${color.Dim}fail=${fail}${color.Reset}`;
  },
  getSummaryColor: () => {
    return `${color.FgCyan}${color.Bright}Final summary:${color.Reset}`;
  },
  getSummaryPassColor: (pass) => {
    return `${color.BgGreen}${color.FgWhite}${color.Bright}Pass: ${('0' + pass).slice(-2)} cases${color.Reset}`;
  },
  getSummaryFailColor: (fail) => {
    return `${color.BgRed}${color.FgWhite}${color.Bright}Fail: ${('0' + fail).slice(-2)} cases${color.Reset}`;
  },
  getSummaryTimeColor: (time) => {
    return `${color.BgBlue}${color.FgWhite}${color.Bright}Time: ${time}${color.Reset}`
  },
}