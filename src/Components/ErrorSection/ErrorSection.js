import React from 'react'
import ErrorImg from '../Assets/Images/Error.png'
import './ErrorSection.css' 
const ErrorSection =()=>{
    return(
        <div className="card mt-5 ml-3 mb-3 transparentCard">
            < img src={ErrorImg} className="ImageCard mt-4" />
            <div className="card-body">
                <h1 className="text-center bold">
                    Error 404 ! Page Not Found
                </h1>
            </div>
        </div>
    );
} 
export default ErrorSection