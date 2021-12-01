import React, { useState, useEffect } from "react"
import { ThemeProvider } from "styled-components";
import '../styles/globals.css'
import '../styles/style.scss'
import { lightTheme, darkTheme, GlobalStyles } from "../components/Theme" 
import Header from "../components/Header";
import Socials from "../components/Socials";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light') 

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
    window.localStorage.setItem('theme', theme == 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    const themeLocalStorage = window.localStorage.getItem('theme')
    if (themeLocalStorage && themeLocalStorage != theme) setTheme(themeLocalStorage)
  },[theme]);

  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} theme={theme}/>
      <Component {...pageProps} />
      <Socials />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
