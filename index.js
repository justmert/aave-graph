"use strict";

// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
var clc = require("cli-color");
const inquirer = require("inquirer");
var figlet = require("figlet");
// import { exec, execSync, spawn } from "child_process";
const { exec } = require("node:child_process");
const fs = require("node:fs");
// import * as fs from "fs";
const yaml = require("js-yaml");

process.removeAllListeners("warning");
const clearScreen = async () => {
  process.stdout.write("\u001b[2J\u001b[0;0H");
};

const colorSpec = {
  errorMsg: (x, newLine = true) => {
    let line = colorSpec.errorIcon + "  " + clc.red.bold(x);
    if (newLine) {
      line += "\n";
    }
    return line;
  },
  warnMsg: (x, newLine = true) => {
    let line = colorSpec.warnIcon + "  " + clc.yellow(x);
    if (newLine) {
      line += "\n";
    }
    return line;
  },
  infoMsg: (x, newLine = true) => {
    let line = colorSpec.infoIcon + "  " + clc.cyan(x);
    if (newLine) {
      line += "\n";
    }
    return line;
  },
  successMsg: (x, newLine = true) => {
    let line = "\n" + colorSpec.successIcon + "  " + clc.green(x);
    if (newLine) {
      line += "\n";
    }
    return line;
  },
  errorIcon: clc.red.bold("✖"),
  successIcon: clc.green.bold("✔"),
  warnIcon: clc.yellow("⚠"),
  infoIcon: clc.cyan("ℹ"),
};

const welcomeScreen = async () => {
  await clearScreen();
  console.log(
    clc.cyan(
      figlet.textSync("AAVE-GRAPHQL", {
        font: "Standard",
        horizontalLayout: "default",
        verticalLayout: "default",
      })
    )
  );
};

const graphql = {
  "eth-mainnet-v2": {
    endpoint: "https://api.thegraph.com/subgraphs/name/aave/protocol-v2",
    name: "ETH Mainnet V2",
  },
  "polygon-v2": {
    name: "Polygon V2",
    endpoint: "https://api.thegraph.com/subgraphs/name/aave/aave-v2-matic",
  },
  "avalanche-v2": {
    name: "Avalanche V2",
    endpoint:
      "https://api.thegraph.com/subgraphs/name/aave/protocol-v2-avalanche",
  },
  "polygon-v3": {
    name: "Polygon V3",
    endpoint:
      "https://api.thegraph.com/subgraphs/name/aave/protocol-v3-polygon",
  },
  "avalanche-v3": {
    name: "Avalanche V3",
    endpoint:
      "https://api.thegraph.com/subgraphs/name/aave/protocol-v3-avalanche",
  },
  "arbitrum-v3": {
    name: "Arbitrum V3",
    endpoint:
      "https://api.thegraph.com/subgraphs/name/aave/protocol-v3-arbitrum",
  },
  "optimism-v3": {
    name: "Optimism V3",
    endpoint:
      "https://api.thegraph.com/subgraphs/name/aave/protocol-v3-optimism",
  },
  "fantom-v3": {
    name: "Fantom V3",
    endpoint: "https://api.thegraph.com/subgraphs/name/aave/protocol-v3-fantom",
  },
  "harmony-v3": {
    name: "Harmony V3",
    endpoint:
      "https://api.thegraph.com/subgraphs/name/aave/protocol-v3-harmony",
  },
};

const main = async () => {
  await clearScreen();
  await welcomeScreen();
  const question = {
    type: "list",
    name: "action",
    message: "What do you want to do?",
    choices: Array.from(
      Object.keys(graphql).map((x) => {
        return { name: graphql[x].name, value: x };
      })
    ),
  };

  let graphKey = undefined;
  await inquirer
    .prompt([question])
    .then((answers) => {
      graphKey = answers.action;
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log(
          colorSpec.errorMsg(
            "Prompt couldn't be rendered in the current environment"
          )
        );
      } else {
        console.log(colorSpec.errorMsg(error));
      }
    });

  let graphClientStructure = {
    sources: [
      {
        name: undefined,
        handler: {
          graphql: {
            endpoint: undefined,
          },
        },
      },
    ],
  };

  graphClientStructure.sources[0].name = graphKey;
  graphClientStructure.sources[0].handler.graphql.endpoint =
    graphql[graphKey].endpoint;

  fs.writeFileSync(
    ".graphclientrc.yml",
    yaml.dump(graphClientStructure, {
      noRefs: true,
      noCompatMode: true,
      indent: "2",
    })
  );

  const child = exec("yarn run graphclient serve-dev", {
    stdio: "inherit",
    detached: true,
  });

  child.on("exit", function () {
    process.exit();
  });

  console.log(
    colorSpec.successMsg(
      `You can now open the Aave-v2-${graphKey} graphql interface at http://localhost:4000/`
    )
  );
};
main();
