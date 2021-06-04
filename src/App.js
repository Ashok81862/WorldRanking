import useFetch from './components/useFetch'
import SearchBar from './components/SearchBar'
import Show from './components/Show'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'

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
                      { isPending && <div>Loading....</div>}
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
