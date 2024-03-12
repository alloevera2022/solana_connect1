import "./game.css";
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

import React, { useState, useEffect } from 'react';
import { Keypair, Connection, SystemProgram, Transaction, PublicKey, sendAndConfirmTransaction } from '@solana/web3.js';


function Game() {


//   const Deposit = async () => {

//     try {
//         const toPublicKey = new PublicKey(storedAddress);
//         const blockhash = await connection.getLatestBlockhash('confirmed');
//         const transaction = new Transaction({
//             recentBlockhash: blockhash.blockhash,
//             feePayer: userWalletPublicKey,
//         }).add(
//             SystemProgram.transfer({
//                 fromPubkey: fromPublicKey,
//                 toPubkey: toPublicKey,
//                 lamports: depositAmount * 10 ** 9,
//             })
//         );

//         const signedTx = await signTransaction(transaction);
//         const compiledTransaction = signedTx.serialize();
//         const signature = await connection.sendRawTransaction(compiledTransaction, { preflightCommitment: 'confirmed' });

//         setDepositSuccess(true);
//         setTimeout(() => {
//             setDepositSuccess(false);
//         }, 5000);
//         setDepositAmount(null);

//         console.log('Транзакция успешно выполнена, подпись:', signature);
//     } catch (error) {
//         console.error('Ошибка транзакции:', error);
//     }
// };

  return (
    
    <section className="Game">
      <div className="connect">
      <WalletMultiButton></WalletMultiButton>
      <div className="transactions">
        <button>купить стол за usdt</button>
        <button>купить стол за spark</button>
        <button>купить стул за usdt</button>
        <button>купить стул за spark</button>
      </div>
      </div>
    </section>
  );
}

export default Game;
