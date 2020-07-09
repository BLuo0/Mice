import React from 'react';
import { Link } from 'react-router-dom'

const Ant = (props) => {

    return (
        <div>
            <nav>
                <Link to={{ pathname: '/Ant' }}>Ant</Link>
            </nav>
            <h1>This is Ant page!</h1>
        </div>
    )
}

export default Ant