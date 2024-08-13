import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <li><Link to="/updatestatus">Calldesk Status Update</Link></li>
        </div>
    );
};

export default Home;
