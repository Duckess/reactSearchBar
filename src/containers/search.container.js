import React, { Component } from 'react';
import SearchService from '../services/search.service';
import SearchBarComponent from '../components/searchBar.component';
import SearchResultsListComponent from '../components/searchResultsList.component';

class SearchContainer extends Component {
  constructor() {
    super();

    this.fetchSearchResults = this.fetchSearchResults.bind(this);

    this.service = new SearchService();

    this.state = {
      searchResults: []
    }
  }

  /* Calling service to get data*/
  fetchSearchResults(query) {
    if (query.length >= 2) {
      return this.service.getSearchResults(query).then(data => {
        this.setState({
          searchResults: data.suggestions
        });
      });
    } else {
      this.setState({
        searchResults: []
      });
    }
  }

  render() {
    return (
      <div className="search-container">
        <SearchBarComponent
          getSearchResults={this.fetchSearchResults}
        ></SearchBarComponent>

        <SearchResultsListComponent searchResults={this.state.searchResults}></SearchResultsListComponent>
      </div>
    );
  }
}

export default SearchContainer;

