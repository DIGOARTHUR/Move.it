
import Head from 'next/head';

import { ChallengeBox } from '../components/ChallengeBox';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';

import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';


// PARA RODAR 
//npm run dev

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

        <div>
          <Profile />
          <CompletedChallenges />

          <Countdown />
        </div>

        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  );
}
