import { SpawnSyncOptionsWithBufferEncoding } from "child_process";
import fetch from "cross-fetch";
const base = "https://api.etherscan.com/";
async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export const getIntersectingWallets = async (opts: {
  tokenAddresses: string[];
  startBlock: number;
  endBlock: number | "latest";
}) => {
  const { tokenAddresses, startBlock, endBlock } = opts;
  const promises = tokenAddresses.map(async (tokenAddress, index) => {
    await sleep(index * 10000);
    console.log("Fetching for tokenAddress", tokenAddress, new Date());
    const response = await fetch(
      `${base}api?module=account&action=txlist&address=${tokenAddress}&startblock=${startBlock}&endblock=${endBlock}&sort=asc&apikey=${process.env.ETHERSCAN_API_KEY}`
    );
    const statusCode = response.status;
    const json: {
      result: {
        blockNumber: string;
        timeStamp: SpawnSyncOptionsWithBufferEncoding;
        hash: string;
        nonce: SpawnSyncOptionsWithBufferEncoding;
        blockHash: string;
        transactionIndex: string;
        from: string;
        to: string;
        value: string;
        gas: string;
        gasPrice: string;
        isError: string;
        txreceipt_status: string;
        input: string;
        contractAddress: string;
        cumulativeGasUsed: string;
        gasUsed: string;
        confirmations: string;
      }[];
    } = await response.json();
    return json.result;
  });
  const results = await Promise.all(promises);
  const walletsInvolved = results.map((result) =>
    result
      .flatMap(({ from, to }) => [from, to])
      .filter((value, index, predicate) => predicate.indexOf(value) === index)
  );
  const uniqueWallets = walletsInvolved
    .flat()
    .filter((value, index, predicate) => predicate.indexOf(value) === index)
    .filter(Boolean);
  //Look for wallets on more than one list
  const walletTokens = uniqueWallets.map(
    (wallet) =>
      walletsInvolved
        .map((wallets, index) =>
          wallets.includes(wallet) ? tokenAddresses[index] : null
        )
        .filter(Boolean) as string[]
  );
  const intersectingWallets = walletTokens
    .filter((tokens) => tokens.length === tokenAddresses.length)
    .map((_, index) => uniqueWallets[index]);
  return intersectingWallets;
};
