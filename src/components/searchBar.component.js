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

  checkInputValue($event) {
    if ($event.target.value) {
      this.setState({
        showClearButton: true,
        searchValue: $event.target.value
      })
    } else {
      this.setState({
        showClearButton: false,
        searchValue: $event.target.value
      })
    }
  }

  clearSearchValue() {
    this.setState({
      showClearButton: false,
      searchValue: ''
    })
  }

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
      <div className="search-container display-flex align-center content-between">
        <input
          type="text"
          role="search"
          className="input"
          value={this.state.searchValue}
          onFocus={this.checkInputValue}
          onChange={this.checkInputValue}
          placeholder="Zoeken"
        />

        {this.renderClearButton()}

        <IconComponent iconName="search" iconColor="gray"></IconComponent>
      </div>
    );
  }
}

export default SearchBarComponent;