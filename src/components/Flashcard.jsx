import React, { useState } from 'react'

export default function Flashcard({ flashcard }) {

    const [flip] = useState(false)

    return (
        <div className='flip-trig'>
            <div className={`card ${flip ? 'flip' : ''}`}>
                <div className='front'>
                    <img src={flashcard.avatar} width="100px" alt="Avatar unavailable" />
                    <span><b>Name: </b>{flashcard.fullName}</span>
                    <span><b>DOB: </b>{flashcard.dateOfBirth}</span>
                    <span><b>Gender: </b>{flashcard.gender}</span>
                    <span><b>Profession: </b>{flashcard.employment}</span>
                    <span><b>Email: </b>{flashcard.email}</span>
                </div>

                <div className='back'>
                    <span><b>Name: </b>{flashcard.fullName}</span>
                    <span><b>Id: </b>{flashcard.id}</span>
                    <span><b>Address: </b>{flashcard.address}</span>
                    <span><b>Phone: </b>{flashcard.phone}</span>
                    <span><b>SSN: </b>{flashcard.ssecNumber}</span>
                    <span><b>Subscription: </b>{"Plan- " + flashcard.subscription[0] + " Payment method- " + flashcard.subscription[1] + " Term- " + flashcard.subscription[2]}</span>
                    <span><b>Credit card number: </b>{flashcard.creditCard}</span>
                    <span><b>Password: </b>{flashcard.password}</span>
                </div>
            </div>
        </div>
    )

}