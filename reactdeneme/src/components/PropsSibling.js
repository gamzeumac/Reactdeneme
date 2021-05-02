import React from 'react';

const PropsSibling = ({btn}) => {
    return (
        <div>
            <button className={btn ? 'btn-success':'btn-secondary'}>küp</button>
        </div>
    );
};

export default PropsSibling;