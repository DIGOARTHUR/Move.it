import style from '../styles/components/Countdown.module.css';
import { useState, useEffect, useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {

    const {startNewChallenge,time,hasFinished,resetCountdown,isActive,startCountdown}=useContext(ChallengeContext);


    
   
    



    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');


  
  



    return (
        <div>

            <div className={style.countdownContainer}>

                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>



            {hasFinished ? (


                <button
                disabled
                    type="button"
                    className={style.countdownButton}
                >
                  Ciclo Encerrado
                </button>


            ) : (
                <>
                    {isActive ? (

                        <button
                            type="button"
                            className={`${style.countdownButton} ${style.countdownButtonActive}`}
                            onClick={resetCountdown}
                        >

                            Abandonar Ciclo
                        </button>




                    ) : (

                        <button
                            type="button"
                            className={style.countdownButton}
                            onClick={startCountdown}
                        >

                            Iniciar um Ciclo
                        </button>

                    )}
                </>

            )}



        </div>
    );
}