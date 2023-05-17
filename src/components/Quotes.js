import {React, useEffect, useState} from 'react'
import axios from "axios";




const Quotes = () => {

    const[quotes, setQuotes] = useState([""]);

    const getQuotes = () => {

        fetch("https://type.fit/api/quotes").then((res) => res.json())
        .then((data) => {
            let randomNum = Math.floor(Math.random() * data.length);
            setQuotes(data[randomNum]);
    });
    };

    useEffect(() => {
        getQuotes();
    }, []);

  return (
    <div className='quotes-main'>
        <div className='container p-5'>
            <h2 className='quotes-cursive' onClick={getQuotes}>Quotes of the day!</h2>
            {/* <button> Generate</button> */}
            <div className='quotes-box container rounded'>
                <div className='quotes-text'>{quotes.text}</div>
                {quotes.author ?  <div className='quotes-text'>-{quotes.author}</div> :  <div className='quotes-text'>-Anonymous</div>}

                

            </div>

        </div>
      
    </div>
  )
}

export default Quotes
