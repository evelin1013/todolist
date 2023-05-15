import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      list: ['Learn React JS'],
    };
  }
  onChangeValue = event => {
    this.setState({ value: event.target.value });
  };
  onAddItem = () => {
    this.setState(state => {
      const list = state.list.concat(state.value);
      return {
        list,
        value: '',
      };
    });
  };
  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3>ToDo List</h3>
        </div>
        <div className="panel-body">
          <center>
            <h1>Add Your Task</h1>
          </center>
          <div className="form-group">
              <input
              className="form-control"
              placeholder="Enter your task"
              type="text"
              value={this.state.value}
              onChange={this.onChangeValue}
            />
          </div>
       
        <button
        className="btn btn-success btn-block"
          type="button"
          onClick={this.onAddItem}
          disabled={!this.state.value}
        >
          Add
        </button>
        <center>
          <h2>Tasks</h2>
          <ul>
            {this.state.list.map(item => (
              <div key={item} className="checkbox">
                <label>
                <input type="checkbox"/>{item}
                </label>
              </div>
            ))}
          </ul>
        </center>
        
        </div>
      </div>
    );
  }
}
export default App;