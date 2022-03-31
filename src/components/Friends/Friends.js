import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const[friends,setFriends]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setFriends(data));
    },[])
    return (
        <div>
            <h3>hello friends how are you</h3>
            <p><small>Parle kico taka dar dis {friends.length} </small></p>
            {
                friends.map(friend=> <Friend key={friend.id} friend={friend} ></Friend> )
            }
        </div>
    );
};

export default Friends;