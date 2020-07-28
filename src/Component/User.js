import React, {useState,useEffect} from 'react'
import {Switch,Route, Link, BrowserRouter as Router} from 'react-router-dom';

function User() {

    useEffect(()=> {
        fetchComments();
    },[]);

    const [users,setUsers] = useState([]);

    const fetchComments = async() => {
        const items = await fetch(
            "http://jsonplaceholder.typicode.com/users"
        );
        const users = await items.json();
        console.log(users);
        setUsers(users);
    }


    return (
        <div style={{textAlign: 'center'}}>
            {
                users.map(user => (
                    <h3 key={user.name}>
                        <Link to={`/users/${user.username}`}>{user.username} </Link>
                    </h3>
                ))
            }
        </div>
    )
}

export default User
