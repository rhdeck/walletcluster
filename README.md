
<a name="readmemd"></a>

Wallet cluster analyzer

# ts-template

## Usage (for now)

1. Clone this repo
2. Run `yarn`
3. Run `yarn run` with arguments of your target addresses. use flags -s for starting block and -e for ending block (defaults to looking at full chain)

Note that this runs without an API key, so we throttle the requests to make sure they all go. 


<a name="__climd"></a>

# Usage
```bash
npx walletcluster [options] <...tokenAddresses>
```
Get wallets that interact with multiple token addresses
# Options
* -s --startBlock \<`startblock`> Starting block (default: `900000`)
* -e --endBlock \<`endblock`> Starting block (default: `latest`)

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
| `opts.endBlock` | `number` \| ``"latest"`` |
| `opts.startBlock` | `number` |
| `opts.tokenAddresses` | `string`[] |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[index.ts:7](https://github.com/rhdeck/walletcluster/blob/295ecdf/src/index.ts#L7)
