import React from 'react'
import { useLocation } from 'react-router-dom';

const Page = ({ pageTitle }) => {
    const location = useLocation();
    console.log('loacation: ', location)

    const maybeShowAdditionalText = location.pathname === '/contact'

    return (
        <>
            <div>{pageTitle}</div>
            {maybeShowAdditionalText && <p>Here's some additional text</p>}
        </>
    )
}

export default Page