
<a name="readmemd"></a>

Wallet cluster analyzer

# walletcluster

## Usage (for now)

1. Clone this repo
2. Run `yarn`
3. Run `yarn execute` with arguments of your target addresses. use flags -s for starting block and -e for ending block (defaults to looking at full chain)

```bash
git clone https://github.com/rhdeck/walletcluser
cd walletcluster
yarn
yarn execute 0xdac17f958d2ee523a2206206994597c13d831ec7 0x2b591e99afe9f32eaa6214f7b7629768c40eeb39 # compares Tether to Hex
```

Note that this runs without an API key, so we throttle the requests to make sure they all go. 

Also right now this is limited to the first 10,000 transactions on each smartcontract within the specified window. So the intersect will be for wallets involved in one or more of the (up to) 10,000 transactions on both tokens.

Finally, this is restricted to ERC20 fungible tokens - this will not work for NFTs at this time. 


<a name="__climd"></a>

# Usage
```bash
npx walletcluster [options] <...tokenAddresses>
```
Get wallets that interact with multiple token addresses
# Options
* -s --startBlock \<`startblock`> Starting block (default: `900000`)
* -e --endBlock \<`endblock`> Starting block (default: `latest`)
* -v --verbose  

<a name="_librarymd"></a>

walletcluster - v1.0.0

# walletcluster - v1.0.0

## Table of contents

### Functions

- [getIntersectingWallets](#getintersectingwallets)

## Functions

### getIntersectingWallets

▸ `Const` **getIntersectingWallets**(`opts`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.debugMode?` | `boolean` |
| `opts.endBlock` | `number` \| ``"latest"`` |
| `opts.startBlock` | `number` |
| `opts.tokenAddresses` | `string`[] |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[index.ts:7](https://github.com/rhdeck/walletcluster/blob/9576f8a/src/index.ts#L7)
