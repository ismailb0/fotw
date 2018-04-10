import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

/**
 * The input is used to create the `dataSource`, so the input always matches three entries.
 */
export default class CustomizedAutoComplete extends Component {
  state = {
    dataSource: [],
    frames: []
  };

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };

  handleNewRequest = (value) => {
    this.state.frames.push({
      title: value
    })
  }

  generateFrames () {
    return this.state.frames.map((frame) => (
      <p>{frame.title}</p>
    ))
  }

  render() {
    return (
      <div>
        <AutoComplete
          hintText="Type anything"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
          onNewRequest={this.handleNewRequest}
        />
        {this.generateFrames()}
      </div>
    );
  }
}
