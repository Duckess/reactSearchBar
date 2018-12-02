import React, { Component } from 'react';
import IconComponent from './icon.component';

class SearchBarComponent extends Component {
  render() {
    return (
      <div className="search-container display-flex align-center content-between">
        <input type="text" role="search" className="input" placeholder="Zoeken" />
        <IconComponent iconName="search" iconColor="gray"></IconComponent>
      </div>
    );
  }
}

export default SearchBarComponent;

