import RocketseatLogo from '../assets/rocketseat.svg';
import { Container } from '../styles/pages/Home';
import Head from 'next/head';


const Home: React.FC = () => {
    return (
      <Container>
        <Head>
          <title>Homepage</title>
        </Head>
  
        <button></button>
        <h1>ReactJS Structure</h1>
        <p>A ReactJS + Next.js structure made by Rocketseat.</p>
      </Container>
    )
  }
  
  export default Home
