import { useEffect, useState } from 'react';
import QuoteIcon from '../icons/QuoteIcon';
import './styles.css';
import { randomColor } from '../../utils/random-rgba-color';

interface IQuote {
  quote: string;
  author: string;
}

interface IColor {
  background: string;
  color: string;
}

function RandomQuote() {
  /* Quote state */
  const [quote, setQuote] = useState<IQuote>();
  const [color, setColor] = useState<IColor>(getRandomColor);

  function getRandomColor(): IColor {
    const color = randomColor();
    return {
      background: color,
      color: color,
    };
  }

  const handleFetchQuote = async (): Promise<IQuote> => {
    const url =
      'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
    const response = await fetch(url, { headers: { Accept: 'application/json' } });

    /* Fetch is not ok */
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    /* Read stream */
    const reader = response.body!.getReader();
    const decoder = new TextDecoder();
    let result = '';

    const quoteJSON = await reader
      .read()
      .then(function processChunk({ done, value }): string | Promise<string> {
        if (done) {
          return result;
        }
        result += decoder.decode(value, { stream: true });
        return reader.read().then(processChunk);
      });

    const quotes: IQuote[] = JSON.parse(quoteJSON as unknown as string).quotes;

    /* Random a quote */
    const randomIndex = Math.floor(Math.random() * quotes.length);

    /* Get quote */
    return quotes[randomIndex];
  };

  const handleSetNewQuote = async () => {
    setQuote(await handleFetchQuote());
    setColor(getRandomColor());
  };

  /* Fetch api to get quote */
  useEffect(() => {
    const handler = async () => setQuote(await handleFetchQuote());
    handler();
  }, []);

  return (
    <div
      className='wrapper'
      style={{
        backgroundColor: color.background,
        color: color.color,
      }}>
      <div className='box'>
        <div className='quote'>
          <QuoteIcon />
          <span className='quote-content'>{quote?.quote}</span>
        </div>

        <div className='author'>
          <span>-</span>
          <span>{quote?.author}</span>
        </div>
        <footer className='quote-footer'>
          <div>
            <a href='#'></a>
            <a href='#'></a>
          </div>
          <button
            className='new-quote'
            onClick={handleSetNewQuote}
            style={{
              backgroundColor: color.background,
            }}>
            New quote
          </button>
        </footer>
      </div>
    </div>
  );
}

export default RandomQuote;
