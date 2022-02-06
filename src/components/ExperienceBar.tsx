import { useContext, useState } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {

    const { currentExperience, experienceToNextLevel } = useContext(ChallengeContext);


    const percentageCurrentExperience = (currentExperience * 100) / experienceToNextLevel;

    {/* EFEITO BARRA DE PROGRESSO
    useEffect(()=>{
        if(valueProgressBar<percentageCurrentExperience){
            setTimeout(()=>{
                setValueProgressBar(valueProgressBar+1)
                console.log('+xp')
             },100)
        }
        if(valueProgressBar<currentExperience){
            setTimeout(()=>{
                setValueCurrentXp(valueProgressBar+1)
             },100)
        }
      
    },[percentageCurrentExperience,valueProgressBar,valueCurrentXp])*/}

    return (
        <header className={styles.experienceBar}>
            <span>0xp</span>
            <div className="div">
                <div style={{ width: `${percentageCurrentExperience}%` }} />

                <span style={{ left: `${percentageCurrentExperience}%` }} className={styles.currentExperience}>{currentExperience}xp</span>

            </div>
            <span>{experienceToNextLevel}xp</span>
        </header>
    );
}