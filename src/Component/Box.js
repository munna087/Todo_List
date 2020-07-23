import React from 'react'
import CardDesign from './CardDesign';
import {Container,Row,Col} from 'react-bootstrap'
import {useHistory} from 'react-router-dom';


function Box() {

    let history = useHistory();
    function goBackHandler() {
        history.goBack()
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col><CardDesign /></Col>
                    <Col><CardDesign /></Col>
                    <Col><CardDesign /></Col>
                </Row>
            </Container>

            <button onClick={goBackHandler}>Go Back</button>
                            
        </div>
    )
}

export default Box
