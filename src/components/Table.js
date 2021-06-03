import React from "react";
import { Link } from 'react-router-dom'

const Table = ({ countries }) => {
    return (
        <div>
            <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Country Name</th>
                      <th scope="col">Population</th>
                      <th scope="col">Area</th>
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
                        <td>147181</td>
                        <td>32.8 %</td>
                    </tr>
                    ))}
                  </tbody>
            </table>
        </div>
    )
}

export default Table
