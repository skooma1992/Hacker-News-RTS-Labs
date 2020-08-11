import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        results: state.results
    }
}
 
class SearchResults extends Component {

    handleSearchResults = () => {
        if (this.props.results.length === 0) {
            return (
                <p className="text-info text-dark p-3 m-2">No results</p>
            )
        } else {
            const { results } = this.props;
            return (
                <div className="list-group p-2">
                    {results.map(result => {
                        return (
                            <a href={result.url} className="list-group-item mt-2" key={result.objectID} target="_blank"><div className="text-dark">{result.title}</div><br></br><h4>Author:</h4> {result.author}</a>
                        )
                    })}
                </div>
            )
        }
    }

    render() {
        return(
            <div className="search-results">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-light">Search Results</h1>
                    </div>
                </div>
                <div className="row m-3">
                    <div className="col-12 p-1 bg-light text-dark">
                        {this.handleSearchResults()}
                    </div>
                </div>
            </div>
        )
    }
}



export default connect(mapStateToProps)(SearchResults);