import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const App = (props) => {
    return (
        <div>
            <IndexLink to="/">Dashboard</IndexLink>
            {' | '}
            <Link to="/some-bad-link">No where</Link>
            {' | '}
            <Link to="/about">About</Link>
            <br/>
            {props.children}
        </div>
    );
};

App.propTypes = {
    children: PropTypes.element
};

export default App;
