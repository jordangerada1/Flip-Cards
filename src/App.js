import React, { useState, useEffect } from 'react';
import Flashcardlist from './Flashcardlist';
import './app.css' 
import axios from 'axios';


function App() {

  const [flashcards, setFlashcards] = useState(SAMPLE_CARD_DATA);

  return(
      <Flashcardlist flashcards = {flashcards} />
  );

}

  const SAMPLE_CARD_DATA = [

    {
        id: 1,
        question: 'where is bob',
        answer: 'at the pub',
        options: [ 'back 01', 'back 11']
    },
    {
      id: 2,
      question: 'where is tim',
      answer: 'at home',
      options: [ 'back 02', 'back 12']
  }

  ]




export default App;
