# Backend API Spec

## Post Requests

### /filecoin/vote?fip_number=1

Query parameter `fip_number` is used to specify which FIP is being voted on. The accompanying json body is built like the following

```json
{
    "signature": "0x67ae6539cd110b9a043e3836303771d8a8ec13c7c688f369cc1a8a9f997128bf207319c7e94a60f9739c51510cb483c8f0c2efa32147690ae8221c08d34352ec1b",
    "message": "YAY: FIP-1"
}
```

The signature is 65 bytes produced from signing the `"message"` field

The message starts with either `YAY`, `NAY`, or `ABSTAIN` followed by a colon and a space. Then `FIP-` and the number of the FIP being voted on.

For example: `YAY: FIP-123`, `NAY: FIP-1`, or `ABSTAIN: FIP-789`

This is the main endpoint being hit from the frontend to cast votes.

If the vote is in progress then a 403 error will be returned and the HTTP body will be the amount of time left for the vote in seconds. If the vote does not exist then a 404 error will be returned.

### /filecoin/startvote?network=calibration

The parameter `network` specifies which network to poll votes from. Some addresses are only registered to vote on testnet as they are only miners on testnet. `network` can be either `mainnet` or `calibration`. The accompanying json body is built like the following

```json
{
    "signature": "0x67ae6539cd110b9a043e3836303771d8a8ec13c7c688f369cc1a8a9f997128bf207319c7e94a60f9739c51510cb483c8f0c2efa32147690ae8221c08d34352ec1b",
    "message": "FIP-123"
}
```

The signature is 65 bytes produced from signing the `"message"` field

The message will be the FIP number that to start the vote for. It will start with `FIP-` then the number to start the vote on.

If the vote has successfully been started the server will respond with 200 and the HTTP body will the amount of seconds that the vote is live for.

### /filecoin/registerstarter?network=calibration

The parameter `network` specifies which network to poll votes from. Some addresses are only registered to vote on testnet as they are only miners on testnet. `network` can be either `mainnet` or `calibration`. The accompanying json body is built like the following

```json
{
    "signature": "0x67ae6539cd110b9a043e3836303771d8a8ec13c7c688f369cc1a8a9f997128bf207319c7e94a60f9739c51510cb483c8f0c2efa32147690ae8221c08d34352ec1b",
    "message": "0x3B9705F0EF88Ee74B9924e34A5Af578d2E24F300"
}
```

This will add the address in the message to the list of authorized signers that can start a vote. Now the address in the message is also able to start a vote.

## GET Requests

### /filecoin/vote?fip_number=1&network=mainnet

Query parameter `fip_number` is used to specify which FIP to pull votes for. The parameter `network` specifies which network to poll votes from. Some addresses are only registered to vote on testnet as they are only miners on testnet. `network` can be either `mainnet` or `calibration`.

If the vote has concluded then the results will be returned in json as follows

```json
    {
        "yay": 123,
        "nay": 123,
        "abstain": 123,
        "yay_storage_size": 2048,
        "nay_storage_size": 2048,
        "abstain_storage_size": 2048
    }
```

The storage size is in bytes.

This endpoint is contains all the information needed on a vote. There are 4 possibilities

1. Does Not Exist - 404

   * This response will be returned when the vote has not started. This vote does not exist.

2. Concluded - 200

   * This response will be returned when the vote is finished. The HTTP body will result in the above with all of the vote results.

3. InProgress - 200

   * This response will be returned when the vote has started. The HTTP body will be the time left on the vote in seconds

### /filecoin/delegates?network=mainnet&address=0x0000000000000000000000000000000000000000

Query parameter `network` specifies which network to poll votes from. Some addresses are only registered to vote on testnet as they are only miners on testnet. `network` can be either `mainnet` or `calibration`. The `address` parameter is the 20 byte hex address which miners have delegated their votes to.

The returned json will be in the format below.

```json
    [
        "f0123",
        "f0124",
        "f0125"
    ]
```

### /filecoin/votingpower?network=mainnet&address=0x0000000000000000000000000000000000000000

Query parameter `network` specifies which network to poll votes from. Some addresses are only registered to vote on testnet as they are only miners on testnet. `network` can be either `mainnet` or `calibration`. The `address` parameter is the 20 byte hex address which miners have delegated their votes to.

The HTTP body returned will be a unsigned 128 bit integer for the voting power in bytes.

### /filecoin/voterstarters?network=calibration

Query parameter `network` specifies which network to poll votes from. Some addresses are only registered to vote on testnet as they are only miners on testnet. `network` can be either `mainnet` or `calibration`.

This endpoint will return a json vector of the addresses that are allowed to start a vote like below

```json
[
    "0x0000000000000000000000000000000000000000",
    "0x0000000000000000000000000000000000000000",
    "0x0000000000000000000000000000000000000000"
]
```

These addresses are the only address that are allowed to start a vote on the requested network

### /filecoin/activevotes?network=calibration

Query parameter `network` specifies which network to poll votes from. Some addresses are only registered to vote on testnet as they are only miners on testnet. `network` can be either `mainnet` or `calibration`.

This endpoint will return a json vector of the fip numbers that have a vote in progress like below

```json
[
    123,
    456,
    789
]
```

### /filecoin/votehistory?network=calibration

Query parameter `network` specifies which network to poll votes from. Some addresses are only registered to vote on testnet as they are only miners on testnet. `network` can be either `mainnet` or `calibration`.

This endpoint will return a json vector of the fip numbers of votes that have concluded

```json
[
    123,
    456,
    789
]
```

### /filecoin/allconcludedvotes?network=calibration

Query parameter `network` specifies which network to poll votes from. Some addresses are only registered to vote on testnet as they are only miners on testnet. `network` can be either `mainnet` or `calibration`.

This endpoint will return a json map from the fip number to the vote results

```json
{
    "9": {
        "yay": 123,
        "nay": 123,
        "abstain": 123,
        "yay_storage_size": 2048,
        "nay_storage_size": 2048,
        "abstain_storage_size": 2048
    },
    "11": {
        "yay": 123,
        "nay": 123,
        "abstain": 123,
        "yay_storage_size": 2048,
        "nay_storage_size": 2048,
        "abstain_storage_size": 2048
    }
}
```
