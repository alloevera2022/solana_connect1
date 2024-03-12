import './games.css'
import gamesImg from './../../img/section_2.webp'

function Games () { 
    return (
        <section className='Games'>
        <div className="container">
            <div className="games__content">
            <div className="games__img"><img src={gamesImg} alt="games_img" /></div>   
                <div className="games__textcontent">
                <div className="games__header"><h2><span id='games_header'>GAMES</span></h2></div>
                <div className="games__text"><p className='games_text-br'>In the $BEER token ecosystem, resembling a bar, there's an exciting feature: money-based games.</p>
<p>
This place is not just a social hub but also a fair casino where everyone has the chance to earn. It's designed to be transparent and equitable, ensuring that all players have a fair shot at winning. This innovative approach combines the fun of gaming with the potential for financial reward, making the $BEER bar a unique and engaging destination in the crypto world.</p></div>

            </div>          
             
            </div>
        </div>
    </section>

    )
}

export default Games;