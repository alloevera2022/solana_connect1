import logoX from './../../img/social_logo_svg/X.svg'
import logoTelegram from './../../img/social_logo_svg/Telegram.svg'

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';


import './header.css'

function Header() {
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();
    return (
        <header className='header'>
            <div className="container">
                <div className="header__row">
                    <nav className="header__nav">
                        <ul>
                            <li><a href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=BEERx3e69rUB6vkqdMCHPJZRP1FrffsfgZZ41fCRqZDs&fixed=in">Buy</a></li>
                            <li><a href="#info">Info</a></li>
                            <li><a href="#tokenomics">Tokenomics</a></li>
                            <li><a href="#roadmap">RM</a></li>
                        </ul>
                    </nav>
                    {/* <div>
                            <WalletMultiButton />
                        </div> */}
                    <div className="header__links">

                        <ul>
                            <li><a href="https://twitter.com/BeerTheHold"><img src={logoX} alt="" /></a></li>
                            <li><a href="https://t.me/HoldtHeBeer"><img src={logoTelegram} alt="" /></a></li>
                        </ul></div>

                </div>
            </div>
        </header>

    )
}

export default Header; 