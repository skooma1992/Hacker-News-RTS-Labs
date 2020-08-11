import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar'
import SearchResults from './components/SearchResults/SearchResults';
import SearchHistory from './components/SearchHistory/SearchHistory';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container mt-12 text-center">
          <div className="row">
            <div className="col-4">
            <SearchBar />
            </div>
            <div className="col-4">
              <SearchResults />
            </div>
            <div className="col-4">
              <SearchHistory />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
