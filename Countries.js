import React, { useState, useEffect } from 'react'
import "./Countries.css"

const Countries = () => {
    const [value, setValue] = useState();
    const [refresh, setRefresh] = useState(false);
    useEffect(async () => {
        const res = await fetch("https://restcountries.com/v3/region/asia");
        const data = await res.json();
        console.log(data[0]);
        setValue(data);

    }, [refresh])
    return (
        <>
            <div className="header">
                <h1>List of countries in Asia</h1>
                <button className="refreshBtn" onClick={() => setRefresh(!refresh)}>Refresh</button>
            </div>
            <div className="Countries">
                {
                    value?.map((dt) => {
                        return (
                            <div className="countriesCard">
                                <h2>Common Name : {dt?.name?.common}</h2>
                                <h2>Official Name : {dt?.name?.official}</h2>
                                <h3>Capital : {dt?.capital[0]}</h3>
                                <h3>Flag : <img src={dt?.flags[0]} className="flagImage" /></h3>
                                <h3>Region : {dt?.region}</h3>
                                <h3>Subregion : {dt?.subregion}</h3>
                                <h3>Population : {dt?.population}</h3>
                                <h4>Borders : {dt?.borders?.map((dts) => {
                                    return <span>{dts}, </span>
                                })}</h4>
                                {/* <h4>Languages : {dt?.languages}</h4> */}
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Countries
