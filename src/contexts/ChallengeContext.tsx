import { createContext, useState, ReactNode, useEffect } from "react";
import challenges from '../../challenges.json';







interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;

}

interface ChallengesContextData {
    level: number;
    currentExperience: number;
    activeChallenge: Challenge | null;
    numberChallengesCompleted: number;
    levelUp: () => void;
    startNewChallenge: () => void;
    experienceToNextLevel: number;
    resetChallenge: () => void;
    time: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
    completedChallenge: () => void;
}

interface ChallengesProviderProps {
    children: ReactNode;

}



export const ChallengeContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {




    //EXPERIENCEBAR
    const [level, setlevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(32);
    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

    function levelUp() {
        setlevel(level + 1)
    }

    //COMPLETEDEDCHALLENGES
    const [numberChallengesCompleted, setnumberChallengesCompleted] = useState(0);

    //CHALLENGEBOX
    const [activeChallenge, setActiveChallenge] = useState(null);

    function resetChallenge() {
        setActiveChallenge(null);
        resetCountdown();


    }

    function completedChallenge(){
        setnumberChallengesCompleted(numberChallengesCompleted+1);
        resetCountdown();
       var  newExperience=activeChallenge.amount+currentExperience;
       if (newExperience>experienceToNextLevel){
        setCurrentExperience(newExperience-experienceToNextLevel);
        levelUp() ;
        resetChallenge();

       }else{
        setCurrentExperience(activeChallenge.amount+currentExperience);
        resetChallenge();
       }

    }


    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];
        setActiveChallenge(challenge);
    }


    //COUNTDOWN
    let countdownTimeout: NodeJS.Timeout;
    const [time, setTime] = useState(0.05 * 60);

    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    function startCountdown() {
        setIsActive(true);

    }


    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(0.05 * 60);
        setHasFinished(false);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }


    }, [isActive, time])











    return (

        <ChallengeContext.Provider
            value={{
                level,
                currentExperience,
                numberChallengesCompleted,
                levelUp,
                startNewChallenge,
                activeChallenge,
                experienceToNextLevel,
                resetChallenge,
                time,
                hasFinished,
                isActive,
                startCountdown,
                resetCountdown,
                completedChallenge

            }}


        >
            {children}
        </ChallengeContext.Provider>

    )
}