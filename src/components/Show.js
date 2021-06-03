import React from 'react'
import { useParams } from 'react-router'
import useFetch from './useFetch'


function Show() {
    const { id } = useParams()
    const {data:country, isPending, error} = useFetch(`https://restcountries.eu/rest/v2/alpha/${id}`);
    console.log(country);
    return (
        <div>
            { error && <div>error..</div> }
            { isPending && <div>Loading....</div>}

            { country && (
                <>
                    <div className="row container">
                <div className="col-4 p-4 ">
                <div className="card border-0">
                    <img src={country.flag} alt="country-img" width="100%" />
                    <div className="card-body text-center">
                        <h5 className="card-title fs-3 fw-bold">{ country.name }</h5>
                    </div>
                </div>
                </div>
                <div className="col-8 p-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <h3 className="card-title text-bold">Details</h3>
                        <div className="card-tools">
                            <a href="/" className="btn btn-info text-light fw-bold">
                                <i className="fas fa-fw fa-arrow-left mr-1"></i>
                                <span>Go Back</span>
                            </a>
                        </div>
                    </div>
                    <div className="card-body p-0">
                        <table className="table table-bordered">
                            <tr>
                                <td>Region</td>
                                <td>{ country.region }</td>
                            </tr>
                            <tr>
                                <td>Capital City</td>
                                <td>{ country.capital }</td>
                            </tr>
                            <tr>
                                <td>Language</td>
                                <td>
                                    {country.languages.map(({ name }) => name).join(", ")}
                                </td>
                            </tr>
                            <tr>
                                <td>Currencies</td>
                                <td>
                                    {country.currencies.map(({ name }) => name).join(", ")}
                                </td>
                            </tr>
                            <tr>
                                <td>Native name</td>
                                <td>{country.nativeName}</td>
                            </tr>
                            <tr>
                                <td>Gini</td>
                                <td>{ country.gini }</td>
                            </tr>
                            <tr>
                                <td>Neighbouring Countries</td>
                                <td>
                                    {country.borders.map((border) => border).join(",")}
                                </td>
                            </tr>
                            <tr>
                                <td>Population</td>
                                <td>{ country.population }</td>
                            </tr>
                            <tr>
                                <td>Areas</td>
                                <td>{ country.area }</td>
                            </tr>
                            <tr>
                                <td>Calling Code</td>
                                <td>{ country.callingCodes }</td>
                            </tr>
                            <tr>
                                <td>Top Level Domain</td>
                                <td>{ country.topLevelDomain }</td>
                            </tr>
                            
                        </table>
                    </div>
                </div>

                </div>
            </div>
                </>
            )}
        </div>
    )
}

export default Show
 