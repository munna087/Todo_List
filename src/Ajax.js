import React, {useState,useEffect} from 'react'
import Axios from 'axios'
import CardDesign from './CardDesign';
import {Container,Row,Col} from 'react-bootstrap'

function Ajax() {

    const [posts, setPosts] = useState([])
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(()=>{
        Axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
            console.log(res)
            setIsLoaded(true);
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
            setIsLoaded(true);
            setError(error);
        })
    },[])

    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {

        let itemCards = posts.map(post=> {
            return(
                <Col sm="4">
                   <CardDesign key={post.title} userId={post.userId} id={post.id} title={post.title} body={post.body}/> 
                </Col>
            )
        })

        return (
            <div>
                <Container fluid>
                    <Row>
                        {itemCards}
                    </Row>
                </Container>
            </div>
        );
      }

}

export default Ajax
