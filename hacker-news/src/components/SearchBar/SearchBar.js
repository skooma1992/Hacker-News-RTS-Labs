import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchResults, search  } from '../../actions/resultsActions';

const mapStateToProps = (state) => {
    return {
        searches: state.searches,
        results: state.results
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        search: (userInput) => { dispatch(search(userInput)) },
        fetchResults: (query) => dispatch(fetchResults(query))
    }
}

class SearchBar extends Component {
    state = {
        searchInput: ""
    }

    handleInputChange = (event) => {
        let createSearchInput = event.target.value;

        this.setState({
            searchInput: createSearchInput
        });
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.search(this.state.searchInput);
        this.props.fetchResults(this.state.searchInput);
    }


    render() {
        return (
            <div className="search-results">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-light">Search Input</h1>
                    </div>
                </div>
                     <div className="row m-3">
                     <div className="col-12 p-1 bg-light">
                     <form className="form-inline" onSubmit={this.handleFormSubmit}>
                        <input className="form-control mr-sm-2" type="search" onChange={this.handleInputChange} placeholder="Search" ></input>
                        <button className="btn btn-primary my-2 " type="submit">Search</button>
                    </form>
                    </div>
                </div>
                </div>
            

        )
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);