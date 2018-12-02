import React, { Component } from 'react';

class IconComponent extends Component {

  /* Setting the icon classes */
  getIconClassName() {
    return `fas fa-${this.props.iconName} ${this.props.iconColor} ${this.props.className || ''}`;
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