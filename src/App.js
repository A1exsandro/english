import { useState } from 'react';
import Todo from './components/Todo';

import './App.css';
import English from './components/English';

function App() {
  return(
    // <Todo /> 
    <English flipped={false}/>
  );
}

export default App;
