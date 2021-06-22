import React from 'react'
import './Error.css'
import ErrorSection from '../../Components/ErrorSection/ErrorSection'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
const Error =()=>{
    return(
        <Container id="body">
        <Row>
        <div className="col-sm-12 col-md-6" className="CardPosition">
        < ErrorSection />
        </div>
        </Row>
    </Container>
    );
}

export default Error