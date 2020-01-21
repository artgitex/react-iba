import React from 'react';
import './Card.css';

const card = (props) => {
    return (
        <div className="card">
            <p className="cardHeader">Caption</p>
            <hr />
            <p className="cardBody">Text...</p>
        </div>
    )
}

export default card;