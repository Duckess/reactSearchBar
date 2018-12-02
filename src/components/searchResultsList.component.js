import React, { Component } from 'react';

class SearchResultsListComponent extends Component {
  displaySearchRow(el) {
    return (
      <div key={el.searchterm} className="results-item p-8 gray">
        {el.searchterm}
        &nbsp;&nbsp;
        ({el.nrResults})
      </div>
    )
  }

  render() {
    return (
      <div className="border-top-none border-bottom-none border-gray">
        {this.props.searchResults.map((element) => this.displaySearchRow(element))}
      </div>
    );
  }
}

export default SearchResultsListComponent;