import React from 'react';
import style from '../App.css';

export default class Swagger extends React.Component {
  render() {
    const { swagger } = this.props;
    return (
      <div>
        <h3>Your Json is below!</h3>
        <pre className={style.SwaggerDebug}>
          <code>
            {JSON.stringify(swagger, null, 4)}
          </code>
        </pre>
      </div>
    );
  }
}
