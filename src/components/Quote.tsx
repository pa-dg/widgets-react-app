import { useState, useEffect } from "react";
import "../assets/stylesheets/quotes.scss"

const Quotes = () => {
  const [quote, setQuote] = useState<string>("");
  const [author, setAuthor] = useState<string>("");

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    try {
      const response = await fetch('https://type.fit/api/quotes');
      const data = await response.json();
      const randomIdx = Math.floor(Math.random() * data.length);
      setQuote(data[randomIdx].text);
      setAuthor(data[randomIdx].author);
    } catch (error) {
      console.log('Error fetching quotes:', error);
    }
  }

  const handleNewQuote = () => {
    fetchQuotes();
  }

  return (
    <div className="quote-widget">
      <h1>Quote of the day:</h1>
      <p>"{quote}"</p>
      <p>- {author} -</p>
      <button className="new-quote-button" onClick={handleNewQuote}>Generate New Quote</button>
    </div>
  )
  
};

export default Quotes;
