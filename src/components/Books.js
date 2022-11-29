import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Books = () => {
    const [booksData, setBooksData] = useState([])
    const [subject, setSubject] = useState("thriller")

    useEffect(() => {
        axios.get(`https://openlibrary.org/subjects/${subject}.json?limit=5`)
            .then(res => setBooksData(res.data.works))
    }, [subject])

    const handleChange = (event) => {
        console.log('event:', event)
        const { value } = event.target
        setSubject(value)
    }

    return (
        <div>
            <select onChange={handleChange}>
                <option value="thriller">Thriller</option>
                <option value="fantasy">Fantasy</option>
                <option value="cats">Cats</option>
                <option value="science">Science</option>
            </select>

            <ul>
                {booksData.map(book => (
                    <li key={book.cover_id}>{book.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Books