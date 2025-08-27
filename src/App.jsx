import React from 'react'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Cards from './components/cards/Cards'
import Questions from './components/questions/Questions'
import Form from './components/form/Form'

const App = () => {
  return (
    <>
      <Header/>
      <main>
        <Hero />
        <Cards/>
        <Questions/>
        <Form/>
      </main>
    </>
  )
}

export default App