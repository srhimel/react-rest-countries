import React from 'react';

const Country = props => {
    const { name, flag } = props.country;
    return (
        <div className="Country">
            <h3>{name}</h3>
            <img src={flag} alt="" height="150px" />
        </div>
    );
};

export default Country;