import React, {useState,useEffect} from 'react'

function UserDetails({match}) {  

    const [userDetail, setUserDetail] = useState({});   
    

    const fetchUserDetails = async () => {
        const item = await fetch(
            `http://jsonplaceholder.typicode.com/users?username=${match.params.username}`
            );
        const data = await item.json()

        setUserDetail(data[0])
        console.log(data)
        console.log(item)
    }

    useEffect(()=> {
        fetchUserDetails();
        console.log(match)
    },[]);


    return (
        <div>
            <h3>{userDetail.name}</h3>            
        </div>
    )
}

export default UserDetails

