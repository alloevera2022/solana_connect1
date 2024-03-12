import './info.css'
import infoImg from './../../img/section_1.webp'

function Info() {
    return (
        <section className='Info' id="info">
            <div className="container">
                <div className="info__content">
                    <div className="info__textcontent">
                        <div className="info__header"><h2><span id='info_header'>INFO</span></h2></div>
                        <div className="info__text"><p className='info_text-br'>In the diverse world of cryptocurrencies, $BEER emerges as a unique token that stands out amidst meme coins.</p>
                            <p>
                                $BEER brings together different elements of the crypto community, offering a space where everyone finds something appealing. It serves as a bonding agent between various projects and ideas, similar to how a bar is a meeting place for socializing and entertainment.</p></div>
                    </div>
                    <div className="info__img"><img src={infoImg} alt="info_img" /></div>
                </div>
            </div>
        </section>

    )
}

export default Info;