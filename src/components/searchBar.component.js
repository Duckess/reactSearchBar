import React, { Component } from 'react';
import IconComponent from './icon.component';

class SearchBarComponent extends Component {
  constructor(props) {
    super(props);

    this.checkInputValue = this.checkInputValue.bind(this);
    this.clearSearchValue = this.clearSearchValue.bind(this);

    this.state = {
      showClearButton: false,
      searchValue: ''
    };
  }

  /* Updating the state of the component accordingly */
  checkInputValue($event) {
    if ($event.target.value) {
      this.setState({
        showClearButton: true,
        searchValue: $event.target.value
      });

      throttled(300, this.props.getSearchResults($event.target.value));
    } else {
      this.setState({
        showClearButton: false,
        searchValue: $event.target.value
      });
    }
  }

  /* Resetting component state */
  clearSearchValue() {
    throttled(300, this.props.getSearchResults(''));

    this.setState({
      showClearButton: false,
      searchValue: ''
    });
  }

  /* Displaying the clear button based on the state */
  renderClearButton() {
    if (this.state.showClearButton) {
      return (
        <button onClick={this.clearSearchValue} >
          <IconComponent iconName="times" iconColor="gray" className="clear-icon"></IconComponent>
        </button>
      );
    }
  }

  render() {
    return (
      <div className="search-bar-container">
        <input
          type="text"
          role="search"
          className="border-gray search-bar input p-8"
          value={this.state.searchValue}
          onFocus={this.checkInputValue}
          onChange={this.checkInputValue}
          placeholder="Zoeken"
        />

        <div className="search-bar-buttons-container">
          {this.renderClearButton()}

          <IconComponent iconName="search" iconColor="gray"></IconComponent>
        </div>
      </div>
    );
  }
}

/* Helper function that limits the api calls */
function throttled(delay, fn) {
  let lastCall = 0;
  return function (...args) {
    const now = (new Date()).getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  }
};

export default SearchBarComponent;