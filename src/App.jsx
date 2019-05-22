import React, { Component } from "react";
import DATA from "../src/data/data";
import SearchInput from "../src/components/SearchInput/SearchInput";
import Table from "../src/components/Table/Table";

class App extends Component {
  state = {
    data: DATA,
    value: ""
  };

  handleInput = event => {
    const value = event.target.value;
    this.setState({ value });
  };

  handleClick = () => {
    const { value } = this.state;
    this.setState({
      data: DATA.filter(item =>
        item.name.toLowerCase().includes(value.toLowerCase())
      )
    });
  };

  render() {
    const { data, value } = this.state;
    return (
      <div className="container">
        <div className="mb-4 mt-3 row">
          <h1>Data table</h1>
        </div>
        <div className="mb-3 row justify-content-end">
          <div className="col-9 col-sm-7 col-md-5 col-lg-4">
            <SearchInput
              value={value}
              handleInput={this.handleInput}
              handleClick={this.handleClick}
            />
          </div>
        </div>
        <div className="row">
          <Table data={data} />
        </div>
      </div>
    );
  }
}

export default App;
