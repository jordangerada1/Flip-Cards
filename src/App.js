import React, { useState, useEffect } from 'react';
import Flashcardlist from './components/Flashcardlist';
import './styles/app.css';
import axios from 'axios';


function App() {

  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {

    fetchInfo()
    //Fire fetch method on render & submit
  }, [])


  function fetchInfo() {

    axios
      .get('https://random-data-api.com/api/users/random_user?size=10')
      .then(res => {
        setFlashcards(res.data.map((cardItem, index) => {
          return {
            address: cardItem.address.street_address + ', ' + cardItem.address.street_name + ', ' + cardItem.address.city + ', ' + cardItem.address.zip_code,
            avatar: cardItem.avatar,
            creditCard: cardItem.credit_card.cc_number,
            dateOfBirth: cardItem.date_of_birth,
            email: cardItem.email,
            fullName: cardItem.first_name + ' ' + cardItem.last_name,
            employment: cardItem.employment.title,
            gender: cardItem.gender,
            id: cardItem.id,
            phone: cardItem.phone_number,
            password: cardItem.password,
            ssecNumber: cardItem.social_insurance_number,
            subscription: [cardItem.subscription.plan, cardItem.subscription.payment_method, cardItem.subscription.term]
          }
        })
        )
        console.log(res.data);
      })

  }

  return (

    <div className='container' >
      <div className='btn-container'>
        <div className='btn'>
          <button className='btn-style' onClick={fetchInfo}>New Cards</button>
        </div>
      </div>
      <Flashcardlist flashcards={flashcards} />
    </div>
  );

}


export default App;
