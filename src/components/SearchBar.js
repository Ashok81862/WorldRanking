import React , { useState } from 'react'
import Table from './Table'

const SearchBar = ({ countries }) => {
    const [keyword, setKeyword] = useState("")
    
    const filteredCountries = countries.filter(
      (country) =>
        country.name.toLowerCase().includes(keyword) || 
        country.region.toLowerCase().includes(keyword) ||
        country.subregion.toLowerCase().includes(keyword)
    );
  
    const onInputChange = (e) => {
      e.preventDefault();
  
      setKeyword(e.target.value.toLowerCase());
    };
  

    return(
        <div>
            <h5 className="card-title my-2 fw-bold">We have { filteredCountries.length } Countries in List</h5>
            <div className="form-outline">
                <input type="search" id="form1" className="form-control" placeholder="Search by Country||Region||Sub-region"
                aria-label="Search" onChange={ onInputChange } />
            </div>
            
            { filteredCountries && <Table countries={filteredCountries} /> }
        </div>
    )

}


export default SearchBar