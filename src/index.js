// React study using udemy
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

class H2O extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temp: 15 };
  }

  render() {
    return (
      <div>
        <h2>{this.state.temp} ℃</h2>
        <button onClick={this.onPlusClick}>+</button>
        <button onClick={this.onPlus10Click}>+10</button>
        <button onClick={this.onMinusClick}>-</button>
        <button onClick={this.onMinus10Click}>-10</button>
      </div>
    );
  }

  onPlusClick = () => {
    this.setState({ temp: this.state.temp + 1 });
  };

  onMinusClick = () => {
    this.setState({ temp: this.state.temp - 1 });
  };

  onPlus10Click = () => {
    this.setState({ temp: this.state.temp + 10 });
  };

  onMinus10Click = () => {
    this.setState({ temp: this.state.temp - 10 });
  };
}

ReactDOM.render(
  <H2O />,
  document.getElementById('root')
);
