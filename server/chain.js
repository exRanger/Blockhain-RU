
const {createHmac} = await import('node:crypto');
const SHA256 = require('crypto-js/sha256')
import {
  TokenIPFSPathUpdated as TokenIPFSPathUpdatedEvent,
  Transfer as TransferEvent,
  Token as TokenContract,
} from "../generated/Token/Token"

import {
  Token, User
} from '..//schema'

/*
* @private
* @description block generator
* @public
* @author ragnarek501@gmail.com (Zagirov I.).
**/
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
    };
}


export function handleTransfer(event: TransferEvent): void {
  let token = Token.load(event.params.tokenId.toString());
  if (!token) {
    token = new Token(event.params.tokenId.toString());
    token.creator = event.params.to.toHexString();
    token.tokenID = event.params.tokenId;

    let tokenContract = TokenContract.bind(event.address);
    token.contentURI = tokenContract.tokenURI(event.params.tokenId);
    token.tokenIPFSPath = tokenContract.getTokenIPFSPath(event.params.tokenId);
    token.name = tokenContract.name();
    token.createdAtTimestamp = event.block.timestamp;
  }
  token.owner = event.params.to.toHexString();
  token.save();

  let user = User.load(event.params.to.toHexString());
  if (!user) {
    user = new User(event.params.to.toHexString());
    user.save();
  }
}

export function handleTokenURIUpdated(event: TokenIPFSPathUpdatedEvent): void {
  let token = Token.load(event.params.tokenId.toString());
  if (!token) return
  token.tokenIPFSPath = event.params.tokenIPFSPath;
  token.save();
}
export default BlockController;
