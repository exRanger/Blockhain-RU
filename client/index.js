import math from 'math.js'
import {struct, u32, ns64} from "@solana/buffer-layout"
import {Buffer} from 'buffer'
import web3 from "@solana/web3.js"

let keypair = web3.Keypair.generate();
let payer = web3.Keypair.generate();

let connection = new web3.Connection(web3.clusterApiUrl('testnet'));

let allocateTransaction = new web3.Transaction({
    feePayer: payer.publicKey
  });

let keys = [{pubkey: keypair.publicKey, isSigner: true, isWritable: true}];
let params = { space: 250 };

let airdropSignature = await connection.requestAirdrop(
  payer.publicKey,
  web3.LAMPORTS_PER_SOL,
);

await connection.confirmTransaction(airdropSignature);

let allocateTransaction = new web3.Transaction({
  feePayer: payer.publicKey
});


let keys = [{pubkey: keypair.publicKey, isSigner: true, isWritable: true}];
let params = { space: 100 };

let allocateStruct = {
  index: 8,
  layout: struct([
    u32('instruction'),
    ns64('space'),
  ])
};

let data = Buffer.alloc(allocateStruct.layout.span);
let layoutFields = Object.assign({instruction: allocateStruct.index}, params);

allocateStruct.layout.encode(layoutFields, data);

allocateTransaction.add(new web3.TransactionInstruction({
  keys,
  programId: web3.SystemProgram.programId,
  data,
}));

await web3.sendAndConfirmTransaction(connection, allocateTransaction, [payer, keypair]);
