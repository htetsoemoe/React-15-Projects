import React, { useState } from 'react'
import people from './data'
import { FaChevronRight, FaChevronLeft, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
    // array first index is 0
    const [index, setIndex] = useState(0)
    const {name, job, image, text} = people[index]

    // check index of people array
    const checkNumber = number => {
        if (number === people.length) {
            return 0
        }
        if (number < 0) {
            return people.length - 1
        }
        // if index number is between 0,1,2,3
        return number
    }

    // next function
    const nextPerson = () => {
        setIndex(index => {
            let newIndex = index + 1
            return checkNumber(newIndex)
        })
    }

    // prev function
    const prevPerson = () => {
        setIndex(index => {
            let newIndex = index - 1
            return checkNumber(newIndex)
        })
    }

    // generate random number for index
    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * 4) // generate between 0 to 3
        if (randomNumber === index) {
            randomNumber = index + 1
        }
        setIndex(checkNumber(randomNumber))
    }

    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className='person-img'/>
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className="next-btn" onClick={nextPerson}>
                    <FaChevronRight />
                </button>
            </div>
            <button className="random-btn" onClick={randomPerson}>
                surprise me
            </button>
        </article>
    )
}

export default Review
