import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import RequestForm from './RequestForm.js';

class App extends React.Component {
  render() {
    const { swagger } = this.props;
    return (
      <div className="row">
        <div className="col-xs-1" />
        {/*  offset doesnt work so included an empty column to offset */}
        <div className="col-xs-10 col-xs-offset-1 center-block">
          <h2 className="text-center">Swagger Request Maker</h2>
          <RequestForm swagger={swagger} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { swagger: state.swagger };
}

App = connect(mapStateToProps)(App);

export default reduxForm({
  form: 'request',
})(App);
