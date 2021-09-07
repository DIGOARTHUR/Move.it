import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar(){

const {currentExperience,experienceToNextLevel}=useContext(ChallengeContext);


const percentageCurrentExperience = (currentExperience*100)/experienceToNextLevel;

const tamanho=100; 


    return(
<header className={styles.experienceBar}>
<span>0xp</span>
<div className="div">
    <div style={{width:`${percentageCurrentExperience}%`}}/>

    <span style={{left:`${percentageCurrentExperience}%`}} className={styles.currentExperience}>{currentExperience}xp</span>
    
</div>
<span>{experienceToNextLevel}xp</span>
</header>
    );
}