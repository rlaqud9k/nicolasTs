class Block {
 public index: number;
 public hash: string;
 public previousHash: string;
 public data: string;
 public timestamp: number;
 constructor(index: number,
             hash: string,
             previousHash: string,
             data: string,
             timestamp: number){
                 this.hash = hash;
                 this.previousHash = previousHash;
                 this.data = data;
                 this.timestamp = timestamp;
                 this.index = index;
 }   
}
const genesisBlock: Block = new Block(0, "200202020202020", "", "Hello", 123456);

let blockChain : Block[] = [genesisBlock];

export{};
console.log(blockChain);