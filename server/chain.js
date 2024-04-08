
const {createHmac} = await import('node:crypto');
const SHA256 = require('crypto-js/sha256')

class GenerateBlock {
    constructor(index, current_time, info, nextHash=" "){
        this.index = index;
        this.current_time = current_time;
        this.info = info;
        this.nextHash = nextHash;
        this.hash = this.computeHash();
    };
    computeHash() {
        return SHA256(this.info + this.nextHash + this.current_time + JSON.stringify(this.info)).toString();
    }   
};

class BlockController {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }
    createGenesisBlock() {
        return new GenerateBlock(0, Date.now(), createHmac(this.chain), "0")
    };
    getLatestBlock() {
        return this.chain[this.chain.length -1];
    };
    addBlock(newBlock) {
        newBlock.prevHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock .calculateHash();
        this.chain.push(newBlock);
    };
    isChainValid() {
        for(let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const prevBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.calculateHash()){
                return false;
            }
        }
        return true;
    }
}

export default BlockController;