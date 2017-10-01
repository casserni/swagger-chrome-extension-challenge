import React from 'react';
import style from './App.css';

class RequestResponse extends React.Component {
  render() {
    return (
      <div className={style.SwaggerDebug}>
        <h3 className={style.center}>Response</h3>
        {this.props.text}
      </div>
    );
  }
}
export default RequestResponse;
