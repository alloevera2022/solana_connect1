import './tokenomics.css'

function Tokenomics (){
    return (
        <section className='Tokenomics' id="tokenomics">
            <div className="token__container">
                <div className="token__header"><h1><span id='token_header'>TOKENOMICS</span></h1></div>
                <div className="token__table">
                    <div className="token__table-text"><p id='p1'>Symbol</p><p>$BEER</p></div>
                    <div className="token__table-text"><p id='p1'>Tax</p><p>0</p></div>
                    <div className="token__table-text"><p id='p1'>Liquidity</p> <p>Burned Forever</p></div>
                </div>
                <div className="token__table-subtitle"><p id='p1'>Initial Liquidity Distribution</p></div>
                <div className="token__table">
                    <div className="token__table-text"><p id='p1'>90%</p><p>Liquidity Pool</p></div>
                    <div className="token__table-text"><p id='p1'>3%</p><p>Team</p></div>
                    <div className="token__table-text"><p id='p1'>3%</p><p>Airdrops</p></div>
                    <div className="token__table-text"><p id='p1'>4%</p><p>Marketing</p></div>
                </div>
                <div className="token__table-subtitle"><p id='p1'>Token Address </p><a href='https://solscan.io/token/BEERx3e69rUB6vkqdMCHPJZRP1FrffsfgZZ41fCRqZDs'><p id='tadress'>BEERx3e69rUB6vkqdMCHPJZRP1FrffsfgZZ41fCRqZDs</p></a></div>
                <div className="token__btn"><a href='https://raydium.io/swap/?inputCurrency=sol&outputCurrency=BEERx3e69rUB6vkqdMCHPJZRP1FrffsfgZZ41fCRqZDs&fixed=in'><button>Buy $BEER</button></a></div>    


            </div>
        </section>
    )
}

export default Tokenomics; 
