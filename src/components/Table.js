import React from "react";
import { Link } from 'react-router-dom'

const Table = ({ countries }) => {
    return (
        <div className="table-responsive-md"> 
            <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Code</th>
                      <th scope="col">Country</th>
                      <th scope="col">Population</th>
                      <th scope="col">Area(km<sup>2</sup>)</th>
                      <th scope="col">GiNi</th>
                    </tr>
                  </thead>
                  <tbody>
                    { countries.map((country) => (
                        <tr key={country.alpha3Code}>
                        <th scope="row">{ country.alpha3Code }</th>
                        <td>
                            <Link to={`country/${country.alpha3Code}`}>{country.name}</Link>
                        </td>
                        <td>{ country.population}</td>
                        <td>{ country.area }</td>
                        <td>{ country.gini }</td>
                    </tr>
                    ))}
                  </tbody>
            </table>
        </div>
    )
}

export default Table
