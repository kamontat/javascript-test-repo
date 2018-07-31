const path = require("path");
const fs = require("fs");

const color = require("./color");
const helper = require("./helper");

const index = "index.js"
const folderpath = __dirname

const executeFile = (fileAbsolutePath) => {
  const name = path.basename(path.dirname(fileAbsolutePath)).replace("case-", "");
  console.log(`------- ${color.FgYellow}Start ${name.padEnd(22)}${color.Reset} ------`);
  require(fileAbsolutePath);
  console.log(`${color.Underscore}${color.Dim}Summary${color.Reset}: ${color.FgGreen}${color.Dim}pass=${helper.getResult().pass}${color.Reset}, ${color.FgRed}${color.Dim}fail=${helper.getResult().fail}${color.Reset}`);
}

for (var i = 2; i < process.argv.length; i++) {
  const paramater = process.argv[i];
  // file of case
  let filecase = path.join(folderpath, paramater, index);

  if (fs.existsSync(filecase)) {
    executeFile(filecase);
  } else {
    if (paramater == "--toggle" || paramater == "-t") {
      helper.toggleShow();
    } else if (paramater == "all") {
      const cases = fs.readdirSync(folderpath);

      cases.filter((val) => {
        return val.includes("case-");
      }).forEach((val) => {
        let file = path.join(folderpath, val, index);
        if (fs.existsSync(file)) {
          executeFile(file);
        }
      });
    } else if (paramater == "help" || paramater == "--help" || paramater == "-h") {
      console.log(`
# run script 

$ node run.js [-t] <case-*...>
$ node run.js [-t] all

# option
  -t => toggle to show only result, (not diff)
`);
    } else {
      console.log(paramater);
    }
  }
}

console.log();
console.log(`${color.FgCyan}${color.Bright}Final summary:${color.Reset}
${color.BgGreen}${color.FgWhite}Pass: ${helper.getSummary().pass}${color.Reset}
${color.BgRed}${color.FgWhite}Fail: ${helper.getSummary().fail}${color.Reset}`);

if (helper.getSummary().fail > 0) {
  process.exit(helper.getSummary().fail)
}