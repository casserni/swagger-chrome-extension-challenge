import React from 'react';
import style from './App.css';

class RequestSubmit extends React.Component {
  render() {
    return (
      <div className={style.center}>
        <button onClick={this.props.submit}>Submit</button>
      </div>
    );
  }
}
export default RequestSubmit;
