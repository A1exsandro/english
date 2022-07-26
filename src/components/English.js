import React, { useEffect, useState } from 'react';
import api from '../services/api';
import './English.css'

export default function English() {
  const [words, setWords] = useState([]);
  
  useEffect(() => {
    api
      .get('/words.json')
      .then((response) => setWords(response.data))
      .catch((err) => {
        console.log('ops! ocorreu um erro' + err);
      })
  },[]);
  
  const word = words.map((w , i) => 
    <div key={i}>
      <div className="card_content">
        <div className="card_face card_face--front">{w.newWord}</div>
        <div className="card_face card_face--back">{w.translation}</div>
      </div>
    </div>
  ) 
  console.log(words.length)

  return(
    <>
      <header>{words.length} Palavras ao Total</header>
      <div className='containerCards'>
        { 
          word
        }
      </div>
    </>
  );
}
     