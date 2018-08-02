const path = require("path");
const fs = require("fs");

const color = require("./helper/color");
const helper = require("./helper");

const index = "index.js"
const folderpath = __dirname

let execute = false;

const help = () => {
  return `# run script

$ node ${color.getFileColor("run.js")} [${color.getOptionColor("-t")}] ${color.getArgumentColor("<case-*...>")}
$ node ${color.getFileColor("run.js")} [${color.getOptionColor("-t")}] [${color.getOptionColor("-i")}] ${color.getArgumentColor("<x.x.x>")}
$ node ${color.getFileColor("run.js")} [${color.getOptionColor("-t")}] ${color.getArgumentColor("all")}

# option
  ${color.getOptionColor("-t")} => toggle to show only result, (not diff)
  ${color.getOptionColor("-t")} => will test only case that start with specify id
     => example: ${color.getExampleColor("-i 2.1.1")} mean test     id 2.1.1
     => example: ${color.getExampleColor("-i 1.4")}   mean test all id 1.4.x
     => example: ${color.getExampleColor("-i 1")}     mean test all id 1.x.x
  `;
}

/**
 * 
 * @param {String} name convert _ to <spacebar> in file name 
 */
const decodeName = (name) => {
  return name.replace("_", " ");
}

/**
 * 
 * @param {String} filename case filename
 */
const decodeFilename = (filename) => {
  let array = filename.split("-");
  if (array.length < 3)
    return {
      isCase: false,
      id: "",
      name: "",
      format: "",
    }

  return {
    isCase: array[0] == "case",
    id: array[1],
    name: decodeName(array[2]),
    format: `${decodeName(array[2])} ${color.getIDColor("("+array[1]+")")}`,
  };
}

const filterCasesAndRun = (filterFn) => {
  const cases = fs.readdirSync(folderpath);
  cases.filter(filterFn).forEach((val) => {
    let file = path.join(folderpath, val, index);
    if (fs.existsSync(file)) {
      executeFile(file);
    }
  });
}

const executeFile = (fileAbsolutePath) => {
  const code = decodeFilename(path.basename(path.dirname(fileAbsolutePath)));
  if (code.isCase) {
    console.log(`${color.getIDColor(code.id+")")} ` +
      `${color.getStartTitleColor(code.name.padEnd(24))} ` +
      `${color.getLineColor(":  -->")}`);

    let result = require(fileAbsolutePath)(helper);

    console.log(`${color.getEachSummaryColor()} ${color.getEachSummaryPassColor(result.pass)}, ${color.getEachSummaryFailColor(result.fail)}`);
    console.log();
  } else {
    console.error("Wrong filename: " + path.basename(path.dirname(fileAbsolutePath)));
  }
}

for (var i = 2; i < process.argv.length; i++) {
  const paramater = process.argv[i];
  // file of case
  let filecase = path.join(folderpath, paramater, index);

  if (fs.existsSync(filecase)) {
    executeFile(filecase);
    execute = true;
  } else {
    if (paramater == "--toggle" || paramater == "-t") {
      helper.toggleShowResult();
    } else if (paramater == "--id" || paramater == "-i") {
      let id = process.argv[++i];
      if (id == undefined) {
        console.error("ID must specify. In term of x.x.x");
        process.exit(1);
      }

      filterCasesAndRun((val) => {
        return val.includes("case-" + id);
      });
      execute = true;
    } else if (paramater == "all") {
      filterCasesAndRun((val) => {
        return val.includes("case-");
      });
      execute = true;
    } else if (paramater == "help" || paramater == "--help" || paramater == "-h") {
      console.log(help());
      execute = true;
      return;
    } else {
      console.log(`Parameter: ${paramater} is not avalible yet!`);
      execute = true;
      process.exit(1);
    }
  }
}

// default if run with no parameters
if (!execute) {
  filterCasesAndRun((val) => {
    return val.includes("case-");
  });
}

let summary = helper.summaryCase()

console.log();
console.log(`${color.getSummaryColor()}`);

if (summary.hasPass) {
  console.log(`${color.getSummaryPassColor(summary.pass)}`);
}
if (summary.hasFail) {
  console.log(`${color.getSummaryFailColor(summary.fail)}`);
}

if (summary.time.timeExist()) {
  console.log(`${color.getSummaryTimeColor(summary.time.getMiliSecondTimeString().total + " ms")}`);
}

if (helper.getResult().overall.fail > 0) {
  process.exit(helper.getResult().overall.fail)
}