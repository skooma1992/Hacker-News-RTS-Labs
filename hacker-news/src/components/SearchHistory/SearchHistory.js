import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchResults } from '../../actions/resultsActions';

const mapStateToProps = (state) => {
    return {
        searches: state.searches
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchResults: (query) => dispatch(fetchResults(query))
    }
}

class SearchHistory extends Component {
    // Take in past searches to pass through api call again. 
    previousSearch = (event) => {
        this.props.fetchResults(event.target.id);
    }

    render() {
        const { searches } = this.props;
        return (
            <div className="search-results">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-light">Search History</h1>
                    </div>
                </div>
                <div className="row m-3 p-2 bg-light text-dark ">
                    <div className="col-12">
                        <p>Previous Searches</p>
                        {
                            searches.map(search => {
                                return (
                                    <button className="btn-secondary m-2" id={search} key={search} onClick={this.previousSearch}>{search}</button>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchHistory);