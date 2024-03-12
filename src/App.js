import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Info from "./components/info/Info";
import Games from "./components/games/Games";
import SocialToken from "./components/social_token/Social_Token";
import Buy from "./components/buy/Buy";
import Tokenomics from "./components/tokenomics/Tokenomics";
import Roadmap from "./components/roadmap/Roadmap";
import Footer from "./components/footer/Footer";
import Game from "./components/Game/Game";
import WalletInfo from "./components/walletinfo/WalletInfo";
import React, { useMemo } from 'react';

import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    PhantomWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';

require('@solana/wallet-adapter-react-ui/styles.css');


function App() {

    // you can use Mainnet, Devnet or Testnet here
  const solNetwork = WalletAdapterNetwork.Mainnet;
  const endpoint = 'https://api.mainnet-beta.solana.com'; // useMemo(() => clusterApiUrl(solNetwork), [solNetwork]);
  // initialise all the wallets you want to use
  const wallets = useMemo(
      () => [
          new PhantomWalletAdapter(),
                ],
      [solNetwork]
  );

  return (
<ConnectionProvider endpoint={endpoint}>
    <WalletProvider wallets={wallets} autoConnect={true}>
      <WalletModalProvider>
    <div className="App">

      <Header />
      <Main />
      {/* <WalletInfo/> */}
      <Game />
      <Info />
      <Games />
      <SocialToken />
      <Tokenomics/>
      <Buy />
      <Roadmap />
      <Footer />

      
    </div>
    </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
  );
}

export default App;
