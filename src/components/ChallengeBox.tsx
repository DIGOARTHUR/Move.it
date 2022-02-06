import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/ChallengeBox.module.css'


export function ChallengeBox() {


    const { activeChallenge, resetChallenge, completedChallenge } = useContext(ChallengeContext);



    return (
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? ( //DESAFIO ATIVO


                <div className={styles.challengeActive}>

                    <header> Ganhe {activeChallenge.amount} xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.png`} />
                        <strong> Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button
                            type="button"
                            className={styles.challengeFailedButton}
                            onClick={resetChallenge}
                        >
                            Falhei
                        </button>

                        <button
                            type="button"
                            className={styles.challengeSucceedeButton}
                            onClick={completedChallenge}
                        >Completei
                        </button>
                    </footer>
                </div>



            ) : ( // DESAFIO DESATIVADO

                <div className={styles.challengeNotActive}>
                    <strong> Finalize o ciclo para receber um desafio</strong>
                    <p>

                        <img src="icons/levelUp-challengeBox.png" alt="Level Up" />
                        Avance de level completando desafios
                    </p>
                </div>


            )}




        </div>

    )
}