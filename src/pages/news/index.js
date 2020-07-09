import React from 'react';
import { Link } from 'react-router-dom'

const News = (props) => {

    return (
        <div>
            <nav>
                <Link to={{ pathname: '/News' }}>News</Link>
            </nav>
            <h1>This is news page!</h1>
        </div>
    )
}

export default News