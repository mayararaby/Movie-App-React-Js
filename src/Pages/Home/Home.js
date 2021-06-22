import React from 'react'
import './Home.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'

const HomePage = () => {
    return (
        <section>
            <Jumbotron id="ImageHeader">
                {/* <Button variant="danger" id="getStart" className="btn">
                    <Link to="/movies" id="link">Get Starts</Link>
                </Button> */}
                <div className="mb-2">
    <Button variant="danger" size="lg"  id="getStart" >
    <Link to="/movies" id="link">Get Starts</Link>
    </Button>
    
  </div>
            </Jumbotron>
        </section>
    );
}

export default HomePage