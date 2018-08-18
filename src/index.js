// React study using udemy
import React from 'react';
import ReactDOM from 'react-dom';
import './change.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ReactComponent from './ReactComponent';

class Human extends React.Component {
  constructor(props){
    super(props)
    this.state = { name: "kazoo" };
  }

  render() {
    return (
      <h2 onClick={this.onButtonClick}>
        {this.state.name} {this.props.age}
      </h2>
    );
  }

  onButtonClick = () => {
    this.setState({ name: this.state.name + "san" });
  };
}

const HelloWorld = () => {
  return (
    <div>
      <h1>Sup?</h1>
    </div>
  );
}

ReactDOM.render(
  <Human age="25" />,
  document.getElementById('root')
);

registerServiceWorker();
