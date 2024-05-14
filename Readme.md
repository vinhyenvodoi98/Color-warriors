# What it does
This is a game where people will create color nfts starting from 3 basic colors: red, yellow, blue.

There will be 2 types of games one is for beginners who don't have any color yet and the other is for people with colors to challenge and take the opponent's color

- For a game for beginners, everyone will choose the coordinates on the board. Once selected, no one else can choose that location again. Each person can choose multiple locations to place. After choosing the location, it will be time to choose the color. After the color selection time ends, the color with the largest number of positions will win. Those with the winning color will be able to claim an nft of that color

- For a games for people who already have their colors, it will be like playing Go. As long as they win, the other player's color will be captured

Once you have the basic colors, you can merge the basic colors to create new colors as nft

# Challenges I ran into
The color generation mechanism will be offchain however the color nfts and each step in the game are onchain. Retrieving onchain data and displaying it on the farcaster is very cumbersome and may display incorrectly due to the farcaster's cache feature

# Technologies I used
Frontend: I will use nextjs, tailwind to build the frontend. To connect to web3 I use wagmi rainbow kit, I plan to use frame.js to help the project interact with farcaster. nft image i use in project will be stored in ipfs

Backend ( contract ) : i will build contract on zksync testnet

# What we learned
i learned about zksync and farcaster frames

# Warpcast
https://warpcast.com/taio-newgate/0x1d5dcdc5

