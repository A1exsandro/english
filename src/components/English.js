import React, { useEffect, useState } from 'react';
import api from '../services/api';
import './English.css'

export default function English({flipped}) {
  const [words, setWords] = useState([]);
  const cardContentClassNames = ['card_content'];
  flipped && cardContentClassNames.push('card_content--flipped');
  
  useEffect(() => {
    api
      .get('/words.json')
      .then((response) => setWords(response.data))
      .catch((err) => {
        console.log('ops! ocorreu um erro' + err);
      })
  },[]);

  const handleClick = (id) => {
    
  }
  
  return(
    <div>
      { 
      words.map((w , i) => 
        <div key={i} onClick={() => handleClick(w)}>
         <div className={cardContentClassNames.join(' ')}>
            <div className="card_face card_face--front">{w.newWord}</div>
            <div className="card_face card_face--back">{w.translation}</div>
          </div>
        </div>
      ) 
      }
    </div>
  );
}
     