import React, {Component} from 'react';
import Restaurant from '../../components/Restaurant'
import './DoneRestaurants.css';

export default class DoneRestaurants extends Component {

  generateRestaurantFrames() {
    return this.props.restaurantList.map((restaurant) => (
      <Restaurant restaurant={restaurant} key={restaurant.id} />
    ));
  }

  render() {
    return (
      <div className='selected-country'>
        <div className='country-name'>
          {this.props.countryName}
        </div>
        <div>
          {this.generateRestaurantFrames()}
        </div>
      </div>
    );
  }
}
