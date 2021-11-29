#!/usr/bin/env node
import commander from "commander";
import { getIntersectingWallets } from "./";
commander.description(
  "Get wallets that interact with multiple token addresses"
);
commander.arguments("<tokenAddresses...>");
commander.option("-s --startBlock <startblock>", "Starting block", "900000");
commander.option("-e --endBlock <endblock>", "Starting block", "latest");
commander.option("-v --verbose");
commander.parse(process.argv);
if (!commander.isDocumenting) {
  getIntersectingWallets({
    tokenAddresses: commander.args,
    startBlock: commander.startBlock,
    endBlock: commander.endBlock,
    debugMode: !!commander.verbose,
  }).then(async (wallets) => {
    console.log(JSON.stringify(wallets, null, 2));
  });
  // console.log("This is commander", commander);
}
export { commander };
