import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { useLocalStorage } from './hooks/localStorage'
import { language } from './langSupport'

function App() {
  const [lang, setLang] = useLocalStorage('lang', 'en')
  const [content, setContent] = useState(
    lang == 'tr' ? language.tr : language.en
  )

  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false)

  const langChangeHandler = () => {
    if (lang == 'tr') {
      setLang('en')
      setContent(language.en)
    } else {
      setLang('tr')
      setContent(language.tr)
    }
  }

  const darkModeChangeHandler = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={darkMode && 'dark'}>
      <Hero
        hero={content.hero}
        langChangeHandler={langChangeHandler}
        darkModeChangeHandler={darkModeChangeHandler}
        darkMode={darkMode}
      />
      <Skills skills={content.skills} />
      <Profile profile={content.profile} />
      <Projects projects={content.projects} />
      <Footer footer={content.footer} />
    </div>
  )
}

export default App
