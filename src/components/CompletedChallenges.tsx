
import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import style from'../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges(){
    const {numberChallengesCompleted} = useContext(ChallengeContext);
    
    
    return(
<div className={style.completedChallengesContainer}>
<span>Desafios completos</span>
<span>{numberChallengesCompleted}</span>

</div>


    );
}