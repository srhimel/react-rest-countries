import React from 'react';
import { useEffect, useState } from "react"
import './countries.css'
import Country from './Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);

    return (
        <div>
            <h1>Total countries loaded: {countries.length}</h1>
            <div className="Countries">
                {
                    countries.map(country => {
                        return <Country
                            key={country.capital}
                            country={country} />
                    })
                }
            </div>
        </div>

    )
};

export default Countries;


