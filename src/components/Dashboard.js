import React from 'react';
import {Link} from 'react-router';

const Dashboard = () => {
    return (
        <div>
            <h1>React-Redux starter</h1>

            <h2>Get Started</h2>
            <ol>
                <li>Review the <Link to="about-page">demo app</Link></li>
                <li>good start</li>
            </ol>
        </div>
    );
};

export default Dashboard;
