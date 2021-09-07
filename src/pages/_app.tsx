
import '../styles/global.css'
import { AppProps } from 'next/app';
import { ChallengeContext, ChallengesProvider} from '../contexts/ChallengeContext'
function MyApp({ Component, pageProps }: AppProps) {
 
  return (

 <ChallengesProvider>
  <Component {...pageProps} />
  </ChallengesProvider>

  
  
  )
  
  
}

export default MyApp
