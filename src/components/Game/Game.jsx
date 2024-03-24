import "./game.css";
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { getAssociatedTokenAddressSync, createAssociatedTokenAccountIdempotentInstruction, TOKEN_PROGRAM_ID } from '@solana/spl-token';

import React, { useState, useEffect } from 'react';
import { Keypair, TransactionMessage, VersionedTransaction, Connection, ComputeBudgetProgram, SystemProgram, Transaction, TransactionInstruction, PublicKey, sendAndConfirmTransaction } from '@solana/web3.js';



function Game() {
  const connection = new Connection('https://api.devnet.solana.com', 'confirmed');

  const base58Client = '8Aqh9szdiCjvoozYqGHoAi9NoGcYMa6qPaw5r5eeaBF5';
  const paymentTokenMint = new PublicKey(base58Client);

  const base58ClientProgram = '43AsaUEw6rue8qTsVaLS7QTxDM6PcHG4Bh3xtaeYSwhq';
  const program = new PublicKey(base58ClientProgram);

  const base58ChairNftMint = 'J44qqRtoKdsv1aNVYKjWAu55qMf17cgMuGMsqcJuYZX2';
  const chairNftMint = new PublicKey(base58ChairNftMint);

  const { publicKey: userWalletPublicKey, sendTransaction, signTransaction, connected } = useWallet();

  const Deposit = async () => {


    const paymentTokenAccount = getAssociatedTokenAddressSync(paymentTokenMint, userWalletPublicKey);
    console.log(paymentTokenAccount);

    let paymentTokenBalance = "0";
    try {
      paymentTokenBalance = (await connection.getTokenAccountBalance(paymentTokenAccount)).value.uiAmount;
    } catch (e) {
      console.log('Error getting token account balance:', e);
    }

    console.log('Payment Token: %s, balance %s', paymentTokenMint, paymentTokenBalance);

    const chairNftAccount = getAssociatedTokenAddressSync(chairNftMint, userWalletPublicKey);
    const [mintOwnerAccount, _] = PublicKey.findProgramAddressSync([Buffer.from('nft')], program);
    const feesAccount = new PublicKey("7vQJh3ci7QT5Q9S85ZWAyt8dff8PnDtXJWnZXmaaMqKA");


    // Balance checks are omitted...
    const data = Buffer.alloc(1);
    data.writeInt8(1, 0);  // 1 for "buy chair"



    const instructions = [
      ComputeBudgetProgram.setComputeUnitPrice({ microLamports: 100 }),  // 100 or for DEVNET, NOT OK FOR PRODUCTION
      new createAssociatedTokenAccountIdempotentInstruction(
        userWalletPublicKey,
        chairNftAccount,
        userWalletPublicKey,
        chairNftMint,
      ),

      new TransactionInstruction({
        keys: [
          // must remain the same as in the program
          { pubkey: paymentTokenAccount, isSigner: false, isWritable: true },
          { pubkey: chairNftAccount, isSigner: false, isWritable: true },
          { pubkey: userWalletPublicKey, isSigner: true, isWritable: true },
          { pubkey: mintOwnerAccount, isSigner: false, isWritable: false },
          { pubkey: chairNftMint, isSigner: false, isWritable: true },
          { pubkey: TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
          { pubkey: feesAccount, isSigner: false, isWritable: true },
        ],
        programId: program,
        data,
      }),
    ];


    const message = new TransactionMessage({
      instructions,
      recentBlockhash: (await connection.getLatestBlockhash('finalized')).blockhash,
      payerKey: userWalletPublicKey,
    }).compileToV0Message();

    const tx = new VersionedTransaction(message);
    const signedTx = await signTransaction(tx);
    const compiledTransaction = signedTx.serialize();
    const txHash = await connection.sendRawTransaction(compiledTransaction, { preflightCommitment: 'confirmed' });
    console.log(txHash);

 };


  return (

    <section className="Game">
      <div className="connect">
        <WalletMultiButton></WalletMultiButton>
        <div className="transactions">
          <button>купить стол за usdt</button>
          <button onClick={Deposit}>купить стол за spark</button>
          <button>купить стул за usdt</button>
          <button>купить стул за spark</button>
        </div>
      </div>
    </section>
  );
}

export default Game;
