import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
        
        {/* hii */}
                  <h1>Welcome to my Routing</h1>
                  <nav>

                  <Link to="/home">Home</Link>
                          <Link to="/friends">Friends</Link>
                          <Link to="/posts">Posts</Link>
                          <Link to="/about">About</Link>

                      {/* <CustomLink to="/home">Home</CustomLink>
                          <CustomLink to="/friends">Friends</CustomLink>
                          <CustomLink to="/about">About</CustomLink> */}
                  </nav>

        </div>
    );
};

export default Header;