import "./game.css";
import coinImg from "./../../img/coin.svg";

import Lottie from "lottie-react";
import AnimationBeer from "./AnimationBeer.json";
import { useRef } from "react";


import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';


function Game() {

  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const cap20perc = [110, 111];
  const cap50perc = [140, 141];
  const cap95perc = [180, 181];


  const lottieRefs = [
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  const playAnimation = (index, startAnim) => {
    if (lottieRefs[index].current) {
      lottieRefs[index].current.playSegments([startAnim, 242], true);
    }
  };

  return (
    <section className="Game">
      <div className="container">
        <div className="game__connect">
          <WalletMultiButton id='connect_phantom' className="game__connectbutton"></WalletMultiButton>
        </div>
        <div className="game__headerblock">
          <h1>GAME</h1>
          <h2>Pour beer, place bet and win SOL</h2>
        </div>
        <div className="game__slotsblock">
          <div className="game__slot">
            <h1>
              3 SLOT - CASHBACK <span>🥈</span>
            </h1>
            <h2>50% BACK OF YOUR INVESTMENT</h2>
          </div>
          <div className="game__slot">
            <h1>
              2 SLOT - WINNER <span>🏆</span>
            </h1>
            <h2>100% OF SLOT 2 + 50% 0F SLOT 3 + 2</h2>
          </div>
          <div className="game__slot">
            <h1>
              1 SLOT - LOOSER <span>🤡</span>
            </h1>
            <h2>GAME OVER, TRY AGAIN</h2>
          </div>
        </div>
        <div className="game__balance">
          <h1>
            <img src={coinImg} alt="coinImg" />
            6029.01 SOL
          </h1>
        </div>
        <div className="game__winners">

          <div className="game__winner">
            <div className="game__winners_icon first"><span>🥈</span></div>
            <div className="game__winners_cap">
              <div className="game__winners_capanime" onClick={() => playAnimation(0, cap20perc[0])}>
                <Lottie animationData={AnimationBeer}
                  lottieRef={lottieRefs[0]}
                  loop={false}
                  autoplay={false}
                  initialSegment={cap20perc}
                />
              </div>
            </div>
            <div className="game__winners_place first_place" id="winners_place0"></div>
            <div className="game__winners_points"><h1>543</h1></div>
          </div>

          <div className="game__winner">
            <div className="game__winners_icon second"><span>🏆</span></div>
            <div className="game__winners_cap">
              <div className="game__winners_capanime" onClick={() => playAnimation(1, cap50perc[0])}>
                <Lottie animationData={AnimationBeer}
                  lottieRef={lottieRefs[1]}
                  loop={false}
                  autoplay={false}
                  initialSegment={cap50perc}
                />
              </div>
            </div>

            <div className="game__winners_place second_place" id="winners_place1"></div>
            <div className="game__winners_points"><h1>302</h1></div>
          </div>

          <div className="game__winner">
            <div className="game__winners_icon third"><span>🤡</span></div>
            <div className="game__winners_cap">
              <div className="game__winners_capanime" onClick={() => playAnimation(2, cap95perc[0])}>
                <Lottie animationData={AnimationBeer}
                  lottieRef={lottieRefs[2]}
                  loop={false}
                  autoplay={false}
                  initialSegment={cap95perc}
                />
              </div>
            </div>
            <div className="game__winners_place third_place" id="winners_place2"></div>
            <div className="game__winners_points"><h1>152</h1></div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Game;
