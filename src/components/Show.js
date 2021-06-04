import React from 'react'
import { useParams } from 'react-router'
import useFetch from './useFetch'


function Show() {
    const { id } = useParams()
    const {data:country, isPending, error} = useFetch(`https://restcountries.eu/rest/v2/alpha/${id}`);
    console.log(country)
    return (
        <div>
            { error && <div>error..</div> }
            { isPending && <div>Loading....</div>}

            { country && (
                <>
                <div className="row container">
                    <div className="col-12  col-lg-4 p-4 ">
                        <div className="card border-0">
                            <img src={country.flag} alt="country-img" width="100%" />
                        </div>
                        </div>
                        <div className="col-12  col-xl-8 p-4">
                        <div className="">
                            <div className="mb-4 d-flex justify-content-between">
                                <h3 className=" text-boldz">Details</h3>
                                <div className="">
                                    <a href="/" className="btn btn-info text-light fw-bold">
                                        <i className="fas fa-fw fa-arrow-left mr-1"></i>
                                        <span>Go Back</span>
                                    </a>
                                </div>
                            </div>
                            <div className=" table-responsive-md">
                                <table className="table table-bordered">
                                    <thead></thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <span className="fw-bold">Country</span>
                                        </td>
                                        <td>{country.name}</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="fw-bold">Region</span>
                                        </td>
                                        <td>{ country.region }</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="fw-bold">Capital City</span>
                                        </td>
                                        <td>{ country.capital }</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="fw-bold">Language</span>
                                        </td>
                                        <td>
                                            {country.languages.map(({ name }) => name).join(", ")}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="fw-bold">Currencies</span>
                                        </td>
                                        <td>
                                            {country.currencies.map(({ name }) => name).join(", ")}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="fw-bold">Native name</span>
                                        </td>
                                        <td>{country.nativeName}</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="fw-bold">Alt.Spelling</span>
                                        </td>
                                        <td>
                                            {country.altSpellings.map(( altSpelling ) => altSpelling).join(", ")}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="fw-bold">Gini</span>
                                        </td>
                                        <td>{ country.gini }</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="fw-bold">Neighbouring Countries</span>
                                        </td>
                                        <td>
                                            {country.borders.map((border) => border).join(",")}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="fw-bold">Population</span>
                                        </td>
                                        <td>{ country.population }</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="fw-bold">Area(km<sup>2</sup>)</span>
                                        </td>
                                        <td>{ country.area }</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="fw-bold">Calling Code</span>
                                        </td>
                                        <td>{ country.callingCodes }</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="fw-bold">Top Level Domain</span>
                                        </td>
                                        <td>{ country.topLevelDomain }</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="fw-bold">Latitude and Longitude</span>
                                        </td>
                                        <td>{country.latlng.map((latlng) => latlng).join(",")}</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="fw-bold">Regional Blocks</span>
                                        </td>
                                        <td>
                                            {country.regionalBlocs.map(({ name }) => name).join(", ")}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="fw-bold">Sub Region</span>
                                        </td>
                                        <td>{country.subregion}</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="fw-bold">Time Zone</span>
                                        </td>
                                        <td>{country.timezones}</td>
                                    </tr>
                                    </tbody>
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
 