import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Welcome from '../components/Welcome'
import Technologies from '../components/Habilities'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Portfolio | Federico Iv&aacute;n Leiva</title>
        <meta name="description" content="Portfolio Federico Ivan Leiva, desarrollador front end y mobile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Welcome />
      <AboutMe />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  )
}
