import React from 'react'
import './QuoteCard.css'
import { TbRefresh } from "react-icons/tb";


const QuoteCard = ({quote, handleChangeQuote}) => {
    console.log(quote)

    return (
    <section className='quoteCard'>

        <article className='quoteCard__container'>
            <h1 className='quoteCard__title'>Infogalax</h1>
            
            <article className='quoteCard__CardText'>
            <p className='quoteCard__phrase'>{quote.phrase}</p>
            </article>

            <button className='quoteCard__btn' onClick={handleChangeQuote}><TbRefresh/></button>
        </article>

        <footer className='quoteCard__footer'>
            Author: {quote.author}
        </footer>
    </section>
  )
}

export default QuoteCard
