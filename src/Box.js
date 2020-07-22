import React from 'react'
import CardDesign from './CardDesign';
import {Container,Row,Col} from 'react-bootstrap'


function box() {
    return (
        <div>
            <Container>
                <Row>
                    <Col><CardDesign /></Col>
                    <Col><CardDesign /></Col>
                    <Col><CardDesign /></Col>
                </Row>
            </Container>
                            
        </div>
    )
}

export default box
