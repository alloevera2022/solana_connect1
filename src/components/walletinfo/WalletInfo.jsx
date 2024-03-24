// import React, { useState, useEffect } from 'react';
// import { Keypair, Connection, SystemProgram, Transaction, PublicKey, sendAndConfirmTransaction } from '@solana/web3.js';
// import { useWallet } from '@solana/wallet-adapter-react';
// import ConnectionStatus from './ConnectionStatus';
// import './walletinfo.css';

// const WalletInfo = () => {
//     const [privateKey, setPrivateKey] = useState('');
//     const [balance, setBalance] = useState(0);
//     const [generated, setGenerated] = useState(false);
//     const [textAreaValue, setTextAreaValue] = useState('');
//     const [textAreaVisible, setTextAreaVisible] = useState(false);
//     const [inputAreaVisible, setInputAreaVisible] = useState(false);
//     const [copySuccess, setCopySuccess] = useState(false);
//     const [depositAmount, setDepositAmount] = useState(null);
//     const [exportUserAddress, setExportUserAddress] = useState(null);
//     const [generatedWalletAddress, setGeneratedWalletAddress] = useState('');
//     const [inputError, setInputError] = useState(false);
//     const [exportError, setExportError] = useState(false);
//     const [gameStarted, setGameStarted] = useState(false);
//     const [exporting, setExporting] = useState(false); // State для отслеживания выполнения транзакции
//     const [exportingDots, setExportingDots] = useState(''); // Строка для отображения точек во время экспорта
//     const [sendSuccess, setSendSuccess] = useState(false);
//     const [depositSuccess, setDepositSuccess] = useState(false); 
//     const connection = new Connection('https://mainnet.helius-rpc.com/?api-key=59dcc64e-6eaa-4d48-b97e-407c2792cb52');
//     const { publicKey: userWalletPublicKey, sendTransaction, signTransaction, connected } = useWallet();

//     const handleGeneratePrivateKey = () => {
//         // Генерация приватного ключа
//         const keypair = Keypair.generate();
//         const generatedPrivateKey = keypair.secretKey;
//         const privateKeyBase64 = Buffer.from(generatedPrivateKey).toString('base64');
//         // Преобразование приватного ключа в публичный ключ
//         const publicKey = Keypair.fromSecretKey(generatedPrivateKey).publicKey;
//         // Преобразование публичного ключа в адрес base58
//         const publicKeyBase58 = publicKey.toBase58();

//         // Установка приватного ключа и адреса в состояние и локальное хранилище
//         setPrivateKey(privateKeyBase64);
//         setGenerated(true);
//         setTextAreaValue(privateKeyBase64);
//         localStorage.setItem('generatedWalletPrivateKey', privateKeyBase64);
//         setGeneratedWalletAddress(publicKeyBase58);
//     };

//     const showGeneratedWalletAddress = () => {
//         const storedPrivateKey = localStorage.getItem('generatedWalletPrivateKey');
//         const privateKeyUint8Array = Buffer.from(storedPrivateKey, 'base64');
//         const keypair = Keypair.fromSecretKey(privateKeyUint8Array);
//         const publicKey = keypair.publicKey;
//         const publicKeyBase58 = publicKey.toBase58();
//         setTextAreaValue(publicKeyBase58);
//         setTextAreaVisible(true);
//         setInputAreaVisible(false);
//     };


//     const showInputWalletAddress = () => {
//         setInputAreaVisible(true);
//         setTextAreaVisible(false);
//     };

//     useEffect(() => {
//         const storedPrivateKey = localStorage.getItem('generatedWalletPrivateKey');
//         if (storedPrivateKey) {
//             setPrivateKey(storedPrivateKey);
//             setGenerated(true);
//         }
//     }, []);

//     useEffect(() => {
//         const fetchBalance = async () => {
//             try {
//                 const storedPrivateKey = localStorage.getItem('generatedWalletPrivateKey');
//                 const privateKeyUint8Array = Buffer.from(storedPrivateKey, 'base64');
//                 const keypair = Keypair.fromSecretKey(privateKeyUint8Array);
//                 const publicKey = keypair.publicKey;
//                 const publicKeyBase58 = publicKey.toBase58();
//                 const balance = await connection.getBalance(publicKey);
//                 setBalance(balance / 10 ** 9); // Convert lamports to SOL
//             } catch (error) {
//                 console.error('Ошибка получения баланса:', error);
//             }
//         };

//         if (generated) {
//             fetchBalance();

//             const balanceInterval = setInterval(() => {
//                 fetchBalance();
//             }, 1000); 

//             return () => clearInterval(balanceInterval);
//         }
//     }, [generated, connection, generatedWalletAddress]);

//     const handleDeposit = async () => {
//         if (!depositAmount || depositAmount === 0) {
//             setInputError(true);
//             return;
//         }
//         try {
//             const burnerKeypairBuf = Buffer.from(privateKey, 'base64');
//             const keypair = Keypair.fromSecretKey(burnerKeypairBuf);
//             const fromPublicKey = userWalletPublicKey;
//             const storedAddress = keypair.publicKey.toBase58();

//             if (!storedAddress) {
//                 console.error('Сгенерированный адрес кошелька не найден в локальном хранилище');
//                 return;
//             }
//             const toPublicKey = new PublicKey(storedAddress);
//             const blockhash = await connection.getLatestBlockhash('confirmed');
//             const transaction = new Transaction({
//                 recentBlockhash: blockhash.blockhash,
//                 feePayer: userWalletPublicKey,
//             }).add(
//                 SystemProgram.transfer({
//                     fromPubkey: fromPublicKey,
//                     toPubkey: toPublicKey,
//                     lamports: depositAmount * 10 ** 9,
//                 })
//             );

//             const signedTx = await signTransaction(transaction);
//             const compiledTransaction = signedTx.serialize();
//             const signature = await connection.sendRawTransaction(compiledTransaction, { preflightCommitment: 'confirmed' });

//             setDepositSuccess(true);
//             setTimeout(() => {
//                 setDepositSuccess(false);
//             }, 5000);
//             setDepositAmount(null);

//             console.log('Транзакция успешно выполнена, подпись:', signature);
//         } catch (error) {
//             console.error('Ошибка транзакции:', error);
//         }
//     };

//     const handleExport = async () => {
//         if (!privateKey) {
//             console.error('Unable to withdraw as burner wallet does not exist')
//             return;
//         }
//         if (!connected)
//         {if (!exportUserAddress || Number(exportUserAddress)) {
//             setExportError(true);
//             return;
//         }}




//             const burnerKeypairBuf = Buffer.from(privateKey, 'base64');
//             const keypair = Keypair.fromSecretKey(burnerKeypairBuf);
//             const publicKeyExport = keypair.publicKey;

//             try {
//                 const storedPrivateKey = localStorage.getItem('generatedWalletPrivateKey');
//                 if (!storedPrivateKey) {
//                     console.error('Сгенерированный ключ кошелька не найден в локальном хранилище');
//                     return;
//                 }

//                 let userInputExportAddress; 
//                 if (!connected) {
//                     userInputExportAddress = exportUserAddress
//                 } else { userInputExportAddress = userWalletPublicKey}

//                 const fromPublicKey = publicKeyExport;
//                 // const toPublicKey = userWalletPublicKey;
//                 const toPublicKey = userInputExportAddress;
//                 const blockhash = await connection.getLatestBlockhash('confirmed');
//                 const balanceBurner = await connection.getBalance(publicKeyExport);
//                 setExporting(true); // Устанавливаем состояние "exporting" в true перед отправкой транзакции
//                 const transaction = new Transaction({
//                     recentBlockhash: blockhash.blockhash,
//                     feePayer: publicKeyExport,
//                 }).add(
//                     SystemProgram.transfer({
//                         fromPubkey: fromPublicKey,
//                         toPubkey: toPublicKey,
//                         lamports: balanceBurner - 5000, // Используем сохраненное состояние баланса
//                     })
//                 );

//                 const signature = await sendAndConfirmTransaction(connection, transaction, [keypair])
//                 setSendSuccess(true);
//                 setTimeout(() => {
//                     setSendSuccess(false);
//                 }, 2000);

//                 console.log('Транзакция успешно выполнена, подпись:', signature);
//             } catch (error) {
//                 console.error('Ошибка транзакции:', error);
//             } finally {
//                 setExporting(false);
//                  // Сбрасываем состояние "exporting" в false после завершения транзакции
//             }
//         };

//         const handleCopyToClipboard = () => {
//             const textArea = document.createElement('textarea');
//             textArea.value = textAreaValue;
//             document.body.appendChild(textArea);
//             textArea.select();
//             document.execCommand('copy');
//             document.body.removeChild(textArea);
//             setCopySuccess(true);
//             setTimeout(() => {
//                 setCopySuccess(false);
//             }, 2000);
//         };

//         useEffect(() => {
//             // Функция для добавления точек каждую секунду во время экспорта
//             const interval = setInterval(() => {
//                 if (exporting) {
//                     setExportingDots((prevDots) => prevDots === '..' ? '' : prevDots + '.');
//                 } else {
//                     setExportingDots('');
//                 }
//             }, 1000);

//             // Очищаем интервал при размонтировании компонента
//             return () => clearInterval(interval);
//         }, [exporting]);

//         return (
//             <div className='solana_wallet'>
//                 {!gameStarted && (
//                     <button className={gameStarted ? '' : 'blinking'} style={{ fontSize: '160%' }} onClick={() => setGameStarted(true)}>Start Game</button>
//                 )}

//                 {gameStarted && (
//                     <div className='solana_startgame'>
//                         <h1 style={{ fontSize: '68%', marginBottom: '6vh', color: 'orange', maxWidth: '80%', margin: '0 auto 4% auto' }}>Hello, bro! Please, create your Game Wallet below. Then connect your Phantom or click "Deposit" to copy the game address and top up your gaming account.</h1>

//                         <div style={{ marginBottom: '4%' }}>< ConnectionStatus /> </div>
//                         {generated ? (
//                             <div className='solana_walletconnect'>
//                                 <p>Game Balance: {balance} SOL</p>
//                                 <input
//                                     type="number"
//                                     lang="en-US"
//                                     value={depositAmount}
//                                     onChange={(e) => {
//                                         setDepositAmount(e.target.value);
//                                         setInputError(false);
//                                     }}
//                                     placeholder="Enter amount to deposit"
//                                     step="0.001"
//                                     style={{ borderColor: inputError ? 'red' : '' }}
                                    
//                                 />
//                                 <button disabled={exporting} onClick={() => {
//                                     if (connected) {
//                                         handleDeposit();
//                                     } else {
//                                         showGeneratedWalletAddress();
//                                     }
//                                 }}>Deposit{depositSuccess && '✅'}</button>
//                                 <button disabled={exporting} onClick={() => {
//                                     if (connected) {
//                                         handleExport();
//                                     } else {
//                                         showInputWalletAddress();;
//                                     }
//                                 }}>{exporting ? `Exporting${exportingDots}` : 'Export'}</button>
//                                 {textAreaVisible && (
//                                     <div>
//                                         <textarea
//                                             value={textAreaValue}
//                                             readOnly
//                                             style={{
//                                                 width: '35vh', maxWidth: '100vh', border: '1px solid orange',
//                                                 borderRadius: '5px'
//                                             }}
//                                         />
//                                         <button onClick={handleCopyToClipboard}>Copy{copySuccess && '✅'}</button>
//                                     </div>
//                                 )}
//                                 {inputAreaVisible && (
//                                     <div className='solana_walletexport'>
//                                         <input
//                                             type="text"
//                                             lang="en-US"
//                                             value={exportUserAddress}
//                                             onChange={(e) => {
//                                                 setExportUserAddress(e.target.value);
//                                                 setExportError(false);
//                                             }}
//                                             placeholder="Enter address to export"
//                                             style={{
//                                                 borderColor: exportError ? 'red' : '',
//                                                 width: '35vh', maxWidth: '100vh', border: '1px solid orange',
//                                             }}
//                                         />
//                                         <button onClick={handleExport}>Send{sendSuccess && '✅'}</button>
//                                     </div>
//                                 )}
//                             </div>
//                         ) : (
//                             <button onClick={handleGeneratePrivateKey}>Create Game Wallet</button>
//                         )}
//                     </div>
//                 )}
//             </div>
//         );
//     };

//     export default WalletInfo;
