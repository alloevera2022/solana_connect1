import './buy.css'
import buyImg from './../../img/section_4.webp'

function Buy () {
    return (
        <section className='Buy'>
        <div className="buy__container">
            <div className="buy__content">
                <div className="buy__textcontent">
                <div className="buy__header"><h2><span id='buy_header'>HOW TO BUY</span></h2></div>
                <div className="buy__text"><p className='buy_text-br'>You can purchase $BEER in various different ways.</p>
<p>
We reccomend downloading Phantom Wallet, purchasing SOL, sending it to your phantom address and swapping using Phantom's in-app wallet.
</p></div>
                <div className="buy__btn"><a href='https://phantom.app/'><button id='fhantom'>Download PHANTOM</button></a></div>
            </div>          
            <div className="buy__img"><img src={buyImg} alt="buy_img" /></div>                
            </div>
        </div>
    </section>

    )
}

export default Buy;