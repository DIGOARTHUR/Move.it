
//***************************************************************************************************************************** */
// ESTE ARQUIVO VERIFICA, QUANDO O USUÁRIO ACESSE UMA NOVA PAGE, OS COMPONENTES QUE SÃO REAPROVEITÁVEIS E MUDA APENAS O NECESSÁRIO.
//***************************************************************************************************************************** */

//IMPORTAÇÃO CSS <https://devdigoarthur.notion.site/global-css-4c4ad52db8534a39b3d3f63e0dc77c39>
import '../styles/global.css'

import { AppProps } from 'next/app';

//IMPORTAÇÃO CONTEXT API  <https://devdigoarthur.notion.site/Context-API-610980ad0db948709d364efc919a454e>
import { ChallengesProvider } from '../contexts/ChallengeContext'

function MyApp({ Component, pageProps }: AppProps) {

  return (

    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>



  )


}

export default MyApp
