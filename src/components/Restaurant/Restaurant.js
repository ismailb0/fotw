import React, {Component} from 'react';
import './Restaurant.css';

export default class Restaurant extends Component {

  render() {
    return (
      <div className='restaurant'>
        <div className='restaurant-name'>
          {this.props.restaurant.name}
        </div>
      </div>
    );
  }
}
