import React, {Component} from 'react';
import Highcharts from 'highcharts/highmaps';
import restaurants from './data/restaurants.json';
import worldMapData from './data/maps/world.js';
import countriesMapping from './data/countriesMapping.json';
import SelectedCountryRestaurants from './selectedCountryRestaurants'
import './WorldChart.css';

const RENDER_ID = 'current-map';

export default class WorldChart extends Component {
  constructor(props: Props) {
    super(props);
    this.drawChart = this.drawChart.bind(this);
    this.getChartData = this.getChartData.bind(this);
    this.getConfig = this.getConfig.bind(this);
    this.selectedCountry = this.selectedCountry.bind(this);
    this.state = {
      selectedCountry: {
        name: null,
        value: null,
        code: null
      },
    };
  }

  componentDidMount() {
    this.drawChart();
  }

  selectedCountry(event) {
    this.setState({
      selectedCountry: event.point.options,
    })
  }

  getSelectedRestaurantList() {
    const selectedCountryCode = this.state.selectedCountry.code
    console.log(restaurants.countries[selectedCountryCode] || [], 'rest')
    return restaurants.countries[selectedCountryCode] || []
  }

  getChartData() {
    const data = Object.keys(countriesMapping).map((key, index) => (
      {
        'code': key,
        'name': countriesMapping[key].name,
        'value': restaurants.countries[key] ? restaurants.countries[key].length : 0
      }
    ))
    return data;
  }

  getChartSize() {
    return {
      height: 600,
      width: 1000,
    }
  }

  getConfig(renderId) {
    let chartSize = this.getChartSize()
    const config = {
      credits: false,
      title: {
        text: 'Number of restaurants visited by countries'
      },
      chart: {
        height: chartSize.height,
        width: chartSize.width,
      },
      colorAxis: {
        min: 0,
        max: 5,
        minColor: '#f2f5fc',
        type: 'linear'
      },
      mapNavigation: {
        enabled: true,
        buttonOptions: {
          align: 'right',
          verticalAlign: 'top'
        }
      },
      plotOptions: {
        series: {
          point: {
            events: {
              click: this.selectedCountry
            }
          }
        }
      },
      series: [{
          data: this.getChartData(),
          mapData: worldMapData,
          joinBy: ['iso-a2', 'code'],
          borderColor: 'black',
          borderWidth: 0.2,
          name: 'Number of restaurants visited',
          states: {
              hover: {
                  color: '#a4edba'
              }
          }
      }],
    }
    return config;
  }

  drawChart() {
    const highchartsConfig = this.getConfig();
    let mapChart = new Highcharts.mapChart(RENDER_ID, highchartsConfig);
    return mapChart
  }

  render() {
    return (
      <div className='map-container'>
        <div id={RENDER_ID} />
        <SelectedCountryRestaurants
          countryName={this.state.selectedCountry.name}
          restaurantList={this.getSelectedRestaurantList()}
        />
      </div>
    );
  }
}
