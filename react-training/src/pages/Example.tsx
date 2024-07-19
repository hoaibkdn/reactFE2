/** @format */
import React from 'react';

class Example extends React.Component<any, any> {
  //
  constructor(props: any) {
    super(props);
    this.state = {
      value: 111,
    };
    this.handleClick3 = this.handleClick3.bind(this); // create a new function
  }

  handleClickX() {}

  handleClick1() {
    console.log('click 1', this);
  }

  handleClick2() {
    this.setState({ value: 222 });
    // console.log('click 2', this);
  }

  handleClick3() {
    this.setState({ value: 333 });
  }

  handleClick4(value: number) {
    this.setState({ value });
  }

  render() {
    return (
      <div>
        Hello Class
        <button onClick={this.handleClick1}>Click 1</button>
        <button onClick={this.handleClick2}>Click 2</button>
        <button onClick={this.handleClick3}>Click 3</button>
        <button onClick={() => this.handleClick4(444)}>Click 4</button>
      </div>
    );
  }
}

export default Example;
