import useFetch from './components/useFetch'
import SearchBar from './components/SearchBar'
import Show from './components/Show'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import PropagateLoader from "react-spinners/PropagateLoader";
import { css } from "@emotion/react";

const override = css`
  display: flex;
  justify-content: center;
  text-items: center;
  margin: 20px auto;
  border-color: black;
`;


const App = () => {
  const { data:countries,isPending,error } = useFetch('https://restcountries.eu/rest/v2/all');

  return (
    <Router>
        <div className="container">
          <div className="card my-4">
              <div className="card-header text-center">
                <h1 className="fs-4 fw-bold">World Ranks</h1>
              </div>
              <Switch>
                  <Route exact path="/">
                    <div className="card-body">
                      
                      { countries && <SearchBar countries={countries} /> }

                      { error && <div>error..</div> }
                      { isPending && <PropagateLoader  css={override} />}
                    </div>
                  </Route>
                  <Route path="/country/:id">
                      <Show />
                  </Route>
              </Switch>
            </div> 
        </div>
    </Router>
  );
}

export default App;
