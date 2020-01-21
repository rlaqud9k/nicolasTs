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
Block.validateStructure = (validateBlock) => typeof validateBlock.index === "number" &&
    typeof validateBlock.timestamp === "number" &&
    typeof validateBlock.data === "string" &&
    typeof validateBlock.previousHash === "string" &&
    typeof validateBlock.hash === "string";
const genesisBlock = new Block(0, "200202020202020", "", "Hello", 123456);
let blockChain = [genesisBlock];
const getBlockchain = () => blockChain;
const getLatestBlock = () => blockChain[blockChain.length - 1];
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data) => {
    const previousBlock = getLatestBlock();
    const newIndex = previousBlock.index + 1;
    const NewTimeStamp = getNewTimeStamp();
    const newHash = Block.calculateBlockHash(newIndex, previousBlock.hash, data, NewTimeStamp);
    const NewBlock = new Block(newIndex, newHash, previousBlock.hash, data, NewTimeStamp);
    return NewBlock;
};
const isBlockVaild = (candidateBlock, previousBlock) => {
    if (!Block.validateStructure(candidateBlock)) {
        return false;
    }
    else if (previousBlock.index + 1 !== candidateBlock.index) {
        return false;
    }
    else if (previousBlock.hash !== candidateBlock.previousHash) {
        return false;
    }
};
console.log(createNewBlock('부자'));
//# sourceMappingURL=index.js.map