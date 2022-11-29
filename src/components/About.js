import React from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'

const About = () => {
    const { name } = useParams();
    const loacation = useLocation();
    const navigate = useNavigate();

    // console.log('loacation: ', loacation)

    const handleClick = () => {
        console.log("doing some stuff...")
        console.log("doing some more stuff...")
        console.log("doing even more stuff...")

        navigate('/')
    }

    return (
        <div>
            <h2>About</h2>
            <p>Learn all about our app below {name}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button onClick={handleClick}>Go Home</button>
        </div>
    )
}

export default About