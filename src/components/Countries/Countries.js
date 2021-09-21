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
        <div className="Countries">
            {
                countries.map(country => {
                    return <Country country={country} />
                })
            }
        </div>
    )
};

export default Countries;


