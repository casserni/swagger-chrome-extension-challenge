import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import RequestForm from './RequestForm.js';
import style from './App.css';

class App extends React.Component {
  render() {
    const { swagger } = this.props;
    return (
      <div className={style.App}>
        <h1 className={style.center}>Swagger Request Maker</h1>

        <div>Your Json is below!</div>
        <pre className={style.SwaggerDebug}>
          <code>
            {JSON.stringify(swagger, null, 4)}
          </code>
        </pre>
        <RequestForm swagger={swagger} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { swagger: state.swagger };
}

App = connect(mapStateToProps)(App);

App = reduxForm({
  // a unique name for the form
  form: 'request',
})(App);

export default App;
