import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    // const friendid =useParams();
    // or
    const {friendid}=useParams();
    const [friend,setFriend]=useState({});
    useEffect(()=>{

        const url =`https://jsonplaceholder.typicode.com/users/${friendid}`;
        console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data));
    },[])
    return (
        <div>
            <h2>this is a details of friend :{friendid}</h2>
            <h3>Name:{friend.name} </h3>
            <h4>Email:{friend.email}</h4>
            <h1>Website:{friend.website}</h1> 
            <p><small>city :{friend.address?.city}</small></p>
            <p><small>Lat: {friend.address?.geo?.lat}</small></p>
        </div>
    );
};
// amar comment 

export default FriendDetail;
