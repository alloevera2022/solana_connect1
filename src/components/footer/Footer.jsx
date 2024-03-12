import './footer.css'
import logoX from './../../img/social_logo_svg/X.svg'
import logoTelegram from './../../img/social_logo_svg/Telegram.svg'

function Footer (){
    return (
        <section className='Footer'>
            <div className="footer__container">

            <footer className="footer__block">
                <div className="footer__row">
                    <nav className="footer__nav">
                        <ul>
                            <li><h1 className='footer__header'>$BEER</h1></li>
                            <li><p className='footer__subtitle'>More then just a token</p></li>
                        </ul>
                    </nav>
                    <div className="footer__links"><ul>
                            <li><a href="https://twitter.com/BeerTheHold"><img src={logoX} alt="" /></a></li>
                            <li><a href="https://t.me/HoldtHeBeer"><img src={logoTelegram} alt="" /></a></li>
                        </ul></div>
                    
                </div>
            </footer>

            </div>
        </section>
    )
}

export default Footer; 