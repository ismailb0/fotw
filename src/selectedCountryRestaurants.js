import React, {PropTypes, Component} from 'react';
import './selectedCountryRestaurants.css';

export default class SelectedCountryRestaurants extends Component {

  generateRestaurantFrames() {
    return this.props.restaurantList.map((restaurant) => (
      <div key={restaurant.restaurant_id}>
        {restaurant.restaurant}
      </div>
    ));
  }

  render() {
    return (
      <div className='selected-country'>
        <div>
          {this.props.countryName}
        </div>
        <div>
          {this.generateRestaurantFrames()}
        </div>
      </div>
    );
  }
}
