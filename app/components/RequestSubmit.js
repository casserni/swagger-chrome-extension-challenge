import React from 'react';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';

import sendRequest from '../utils/submit';
import insert from '../utils/insert';

const required = value => (value ? undefined : 'Required');

class RequestSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.validate = this.validate.bind(this);
  }

  validate() {
    const { schemeValue, pathValue, methodValue, payloadValue, update } = this.props;
    console.log(this.props);
    let payloadError;
    if (payloadValue) {
      try {
        JSON.parse(payloadValue);
      } catch (err) {
        console.log(err);
        payloadError = 'Must be a valid JSON {"key": "value"}';
      }
    } else {
      payloadError = required(payloadValue);
    }

    if (!schemeValue || !pathValue || !methodValue || !payloadValue) {
      update({
        errors: {
          scheme: required(schemeValue),
          path: required(pathValue),
          method: required(methodValue),
          payload: payloadError,
        },
      });
      return false;
    }
    return true;
  }

  submit() {
    let { refresh, update } = this.props;
    if (this.validate()) {
      const { schemeValue, pathValue, methodValue, payloadValue } = this.props;
      sendRequest(schemeValue, pathValue, methodValue, payloadValue).then(res => {
        insert(res).then(res => {
          refresh();
          update({ doc: res });
        });
      });
    }
  }

  render() {
    return (
      <div className="text-center">
        <button type="submit" className="btn btn-primary btn-sm" onClick={this.submit}>
          Send
        </button>
      </div>
    );
  }
}

const selector = formValueSelector('request');
export default connect(state => {
  const schemeValue = selector(state, 'scheme');
  const pathValue = selector(state, 'path');
  const methodValue = selector(state, 'method');
  const payloadValue = selector(state, 'payload');
  return {
    schemeValue,
    pathValue,
    methodValue,
    payloadValue,
  };
})(RequestSubmit);
