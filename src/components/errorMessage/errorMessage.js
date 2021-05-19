import React from 'react';
import './errorMessage.css';
import img from './error.png';

const ErrorMessage = () => {
    return(
        <>
            {/* <img src={process.env.PUBLIC_URL + '/img/error.jpg'} alt=""/> */}
            <img src={img} alt="error"/>
            <span>Что-то пошло не так!</span>
        </>
    )
}

export default ErrorMessage;