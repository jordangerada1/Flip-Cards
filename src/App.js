import React, {useState} from 'react';
import Flashcardlist from './Flashcardlist';


function App() {

  const [flashcards, setFlashcards] = useState(SAMPLE_CARD_DATA);

  return(
      <Flashcardlist flashcards = {flashcards} />
  );

}

  const SAMPLE_CARD_DATA = [

    {
        id: 1,
        name: 'tim',
        age: '22',
        address: '123 smith street'
    },
    {
      id: 2,
      name: 'bob',
      age: '26',
      address: '33 main street'
  }

  ]




export default App;
