"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
        this.index = index;
    }
}
Block.calculateBlockHash = (index, previousHash, data, timestamp) => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
const genesisBlock = new Block(0, "200202020202020", "", "Hello", 123456);
let blockChain = [genesisBlock];
const getBlockchain = () => blockChain;
const getLatestBlock = () => blockChain[blockChain.length - 1];
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
const previousBlock = getLatestBlock();
const newIndex = previousBlock.index + 1;
const createNewBlock = (data) => {
    const NewTimeStamp = getNewTimeStamp();
    const newHash = Block.calculateBlockHash(newIndex, previousBlock.hash, data, NewTimeStamp);
    const NewBlock = new Block(newIndex, newHash, previousBlock.hash, data, NewTimeStamp);
    return NewBlock;
};
console.log(createNewBlock('병관'), createNewBlock('부자'));
//# sourceMappingURL=index.js.map