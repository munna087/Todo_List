import React, {useState,useEffect} from 'react'
import {Card} from 'react-bootstrap'

function CardDesign({userId,id,title,body}) {
    return (
        <div>
            <Card style={{ width:'22rem', margin:'20px auto'}}>
                <Card.Body>
                    <Card.Title>User Id: {userId}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Id: {id}   </Card.Subtitle>
                    <Card.Text><i>Title:</i> {title} </Card.Text>
                    <Card.Text>{body}<br></br></Card.Text>
                    {/* <br><br></br></br> */}
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardDesign
