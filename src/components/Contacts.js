import React, { useEffect, useState } from 'react';
import api from '../services/api';
import './Contacts.css'

export default function Contacts() {
  const [words, setWords] = useState([]);

  let config = {
    headers: {
      'X-User-Token' : '5C42J6zGNwB67ywt5Wez',
      'X-User-Email' : 'first@first.com'
    }
  }
  
  useEffect(() => {
    api
      .get('api/v1/contacts.json', config)
      .then((response) => setWords(response.data))
      .catch((err) => {
        console.log('ops! ocorreu um erro' + err);
      })
  },[]);
  
  const handleAdd = () => {
    api.post('api/v1/contacts.json', {
      name: 'newname',
      email: 'new@new.com'
    }, config)
  }
  
  const word = words.map((c , i) => 
    <div key={i}>
      <div className="t_body">
        <div>{c.name}</div>
        <div>{c.email}</div>
        <div>{c.phone}</div>
        <div>{c.description}</div>
      </div>
    </div>
  ) 
  console.log(words.length)

  return(
    <>
      <button onClick={handleAdd}>add</button>
      <header>{words.length} Palavras ao Total</header>
      <div className='t_header'>
        <div>NOME</div>
        <div>EMAIL</div>
        <div>PHONE</div>
        <div>DESCRIPTION</div>
      </div>
      <div>
        { 
          word
        }
      </div>
    </>
  );
}
     