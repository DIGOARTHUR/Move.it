
//************************************************************ */
// ARQUIVO DA PAGE HOME
//************************************************************ */

// PARA RODAR a aplicação
//npm run dev


//UTILIZADO PARA ACESSAR A TAG HEAD DO HTML E INSERIR, AQUI, O TITLE DA PAGE.
import Head from 'next/head';

//IMPORTAÇÃO DE COMPONENTES
import { ChallengeBox } from '../components/ChallengeBox';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';

//IMPORTAÇÃO CSS
import styles from '../styles/pages/Home.module.css';


export default function Home() {
  return (

    <div className={styles.container}>
      <Head>
        <title>
          Inicio | moveit
        </title>
      </Head>

      <ExperienceBar />
      <section>
        <div className={styles.mobileMainTop}>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div className={styles.mobileMainBottom}>
          <ChallengeBox  />
        </div>
      </section>
    </div>
  );
}
