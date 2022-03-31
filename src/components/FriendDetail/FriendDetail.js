import React from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const friendid =useParams();
    return (
        <div>
            <h1>This is detail about dosto :{friendid.friendid}</h1>
        </div>
    );
};

export default FriendDetail;