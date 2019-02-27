import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Coke extends React.Component {

  render() {
    return (
        <h1>Coke</h1>
  );
  }
}

ReactDOM.render(<Coke />, document.getElementById('root'));