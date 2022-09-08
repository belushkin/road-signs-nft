# How to create NFT on Polygon blockchain on OpenSea using Solidity

## Prerequisites

### Add Metamask to you browser first

Please run next commands to init the project

```
git clone https://github.com/belushkin/road-signs-nft.git
cd road-signs-nft
npm init -y
npm install --save-dev hardhat@2.9.9
npm install dotenv
```

Next:

```
npx hardhat
npm install @openzeppelin/contracts
npx hardhat run scripts/run.js ???????
```

## Example of the JSON required for NFT
```
{
    "name": "Super nice cat",
    "description": "A cute cat in the photo",
    "image": "https://i.imgur.com/f0Wg3M3.jpeg"
}
```

## JSON keeper

https://jsonkeeper.com/
https://jsonbin.it/


## Resources to get API keys
https://www.quicknode.com/
https://alchemy.com/


## Faucets to get coins on Rinkeby
- https://app.mycrypto.com/faucet
- https://faucet.rinkeby.io/
- https://faucets.chain.link/rinkeby

- https://goerlifaucet.com/

## Run local
```
npx hardhat run scripts/ex_1.js
npx hardhat run scripts/ex_2.js

npx hardhat run scripts/ex_2_deploy.js --network rinkeby
npx hardhat run scripts/ex_2_deploy.js --network goerli
```
then check it on opensea: https://testnets.opensea.io/
# https://testnets.opensea.io/assets/goerli/0x51e51336f1b48492a99eb7b4eb42757b97190dfd/0

## What is SVG

```
<svg height="100" width="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
  Sorry, your browser does not support inline SVG.  
</svg> 
```

## SVG viewer

https://www.svgviewer.dev/


## Base64 encode

put your SVG to this website https://www.utilities-online.info/base64 and then make the result like this

```
data:image/svg+xml;base64,INSERT_YOUR_BASE64_ENCODED_SVG_HERE
```

then put it in the browser

## Final token URI


```
{
    "name": "cat",
    "description": "cute cat",
    "image": "data:image/svg+xml;base64,INSERT_YOUR_BASE64_ENCODED_SVG_HERE"
}
```

Put this json again to base64 encoder and make string like this

```
data:application/json;base64,INSERT_YOUR_BASE64_ENCODED_JSON_HERE
```

then put it in the browser

```
npx hardhat run scripts/deploy.js --network rinkeby
```

## NFT preview

Put it to this site to preview NFT

https://nftpreview.0xdev.codes/


# Deploy to Polygon

- Testnetwork - Mumbai
- Mainnet - Matic


## Adding Polygon to Metamask
- https://mumbai.polygonscan.com/
- https://polygonscan.com/

## Getting fake MATIC

https://faucet.polygon.technology/


## Deploy to mumbai and to matic

```
npx hardhat run scripts/deploy.js --network mumbai
npx hardhat run scripts/deploy.js --network matic
```

## Polygonscan

https://mumbai.polygonscan.com/


## Preview of NFT pictures:
https://github.com/belushkin/nft

```
git clone https://github.com/belushkin/nft.git
cd nft
npm install
npm start
```
