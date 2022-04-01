import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const{postId}=useParams();
    const[posts,setPosts]=useState({});
    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[postId])
    return (
        <div>
            <h4>this is post detail{postId}</h4>
            <h3>Name:{posts.title}</h3>
            <p><small>Body:{posts.body}</small></p>
        </div>
    );
};

export default PostDetails;