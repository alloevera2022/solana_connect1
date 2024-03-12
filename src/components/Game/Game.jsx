import "./game.css";
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';


function Game() {

  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();


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
