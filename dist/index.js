"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
        this.index = index;
    }
}
const genesisBlock = new Block(0, "200202020202020", "", "Hello", 123456);
let blockChain = [genesisBlock];
console.log(blockChain);
//# sourceMappingURL=index.js.map