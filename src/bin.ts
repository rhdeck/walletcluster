#!/usr/bin/env node
import commander from "commander";
import { getIntersectingWallets } from "./";
commander.description(
  "Get wallets that interact with multiple token addresses"
);
commander.arguments("<tokenAddresses...>");
commander.option("-s --startBlock <startblock>", "Starting block", "900000");
commander.option("-e --endBlock <endblock>", "Starting block", "latest");
commander.parse(process.argv);
console.log(
  "I have arguments",
  commander.startBlock,
  commander.endBlock,
  commander.args
);
if (!commander.isDocumenting) {
  getIntersectingWallets({
    tokenAddresses: commander.args,
    startBlock: commander.startBlock,
    endBlock: commander.endBlock,
  }).then(async (wallets) => {
    console.log("I got intersecting wallets", wallets);
  });
  // console.log("This is commander", commander);
}
export { commander };
