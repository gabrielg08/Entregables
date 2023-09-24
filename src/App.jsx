import { useState } from 'react'
import './App.css'
import { getRandomElement } from './Utils/random'
import quotes from './db/quotes.json'
import QuoteCard from './Components/QuoteCard'

const backgrounds = ['bg1', 'bg2', 'bg3']


function App() {

  const [quote, setQuote] = useState(getRandomElement(quotes))
  const [currentBg, setCurrentBg] = useState(getRandomElement(backgrounds))

  const handleChangeQuote = () => {
    setQuote(getRandomElement(quotes))
    setCurrentBg(getRandomElement(backgrounds))
  };

  
  return (
    <main className={`app ${currentBg}`}>
     <QuoteCard quote={quote} setQuote={setQuote} handleChangeQuote={handleChangeQuote}/>
    </main>
  )
}

export default App
