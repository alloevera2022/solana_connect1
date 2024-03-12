import './social_token.css'
import stImg from './../../img/section_3.webp'

function SocialToken () {
    return (
        <section className='SocialToken'>
        <div className="container">
            <div className="stoken__content">
                <div className="stoken__textcontent">
                <div className="stoken__header"><h2><span id='stoken_header'>SOCIAL TOKEN</span></h2></div>
                <div className="stoken__text"><p className='stoken_text-br'>Looking ahead, the $BEER token ecosystem plans to expand its horizons by partnering with bars worldwide. This innovative move aims to allow token holders to exchange their $BEER tokens for actual beer in participating bars across different countries.</p>
<p>
This collaboration not only bridges the gap between the virtual and real world but also enhances the token's utility and appeal.
</p></div>
            </div>          
            <div className="stoken__img"><img src={stImg} alt="stoken_img" /></div>                
            </div>
        </div>
    </section>

    )
}

export default SocialToken;