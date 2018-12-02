import React, { Component } from 'react';

class IconComponent extends Component {
  getIconClassName() {
    return `fas fa-${this.props.iconName} ${this.props.iconColor}`;
  }

  render() {
    return (
      <i
        className={this.getIconClassName()}
        aria-hidden="true"
      ></i>
    );
  }
}

export default IconComponent;