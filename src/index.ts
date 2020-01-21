import * as CryptoJS from "crypto-js";

class Block {
 public index: number;
 public hash: string;
 public previousHash: string;
 public data: string;
 public timestamp: number;

 static calculateBlockHash = (
    index: number,
    previousHash: string,
    data: string,
    timestamp: number
 ): string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

 static validateStructure = (validateBlock : Block):boolean =>
        typeof validateBlock.index === "number" &&
        typeof validateBlock.timestamp === "number" &&
        typeof validateBlock.data === "string" &&
        typeof validateBlock.previousHash === "string" &&
        typeof validateBlock.hash === "string"
    
    

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
 
// static calculateBlockHash(index: number,
//     hash: string,
//     previousHash: string,
//     data: string,
//     timestamp: number
//  ): string {
//     return CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
//  };//class내부에서는 let var function등의 멤버변수 선언이 불가능함
 // 오직 public static private 접근제어자만 선언가능
 
}
const genesisBlock: Block = new Block(0, "200202020202020", "", "Hello", 123456);

let blockChain : Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockChain;

const getLatestBlock = (): Block => blockChain[blockChain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block =>{
    const previousBlock: Block = getLatestBlock();
    const newIndex: number = previousBlock.index + 1;
    const NewTimeStamp:number = getNewTimeStamp();
    const newHash: string = Block.calculateBlockHash(
        newIndex,
        previousBlock.hash,
        data,
        NewTimeStamp
    );

    const NewBlock: Block = new Block(
        newIndex,
        newHash,
        previousBlock.hash,
        data,
        NewTimeStamp
    );
        return NewBlock;
};

const isBlockVaild = (candidateBlock : Block, previousBlock: Block):boolean => {
    if(!Block.validateStructure(candidateBlock)){
        return false;
    }else if(previousBlock.index + 1 !== candidateBlock.index){
        return false;
    }else if(previousBlock.hash !== candidateBlock.previousHash){
        return false;
    }
}

console.log(createNewBlock('부자'));

export{};