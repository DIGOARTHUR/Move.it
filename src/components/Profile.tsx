import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from'../styles/components/Profile.module.css';



export function Profile(){
    const {level}=useContext(ChallengeContext);
    return(
<div className={styles.profileContainer}>
    <img src="https://github.com/digoarthur.png" alt="Diego Arthur"/>
    <div>
        <strong> Diego Arthur </strong>
        <p>
            <img src="icons/levelUp.png" alt="Lvel"/>
            Level {level}</p>
    </div>
</div>

    );
}