import React from 'react';

const Country = props => {
    const { name, flag, population, capital } = props.country;
    return (
        <div className="Country">
            <h3>{name}</h3>
            <h4>City: {capital}</h4>
            <img src={flag} alt="" height="150px" />
            <p>Population: {population}</p>
        </div>
    );
};

export default Country;