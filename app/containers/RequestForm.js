import React from 'react';
import { Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import db from '../db';
import RequestSubmit from '../components/RequestSubmit';
import RequestHistory from '../components/RequestHistory';
import RequestResponse from '../components/RequestResponse';
import renderField from '../components/renderField';
import SelectField from '../components/selectField';
import sendRequest from '../utils/submit';

const required = value => (value ? undefined : 'Required');

class RequestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      docs: [],
      doc: {},
      errors: {},
    };
    this.submit = this.submit.bind(this);
    this.refresh = this.refresh.bind(this);
    this.setState = this.setState.bind(this);
    this.validate = this.validate.bind(this);
  }

  validate() {
    const { schemeValue, pathValue, methodValue, payloadValue } = this.props;

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
      this.setState({
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
    if (this.validate()) {
      const { schemeValue, pathValue, methodValue, payloadValue } = this.props;
      let promise = new Promise(function(resolve, reject) {
        resolve(sendRequest(schemeValue, pathValue, methodValue, payloadValue));
      });
      promise.then(res => {
        this.setState({ doc: res });
        this.refresh();
      });
    }
  }

  refresh() {
    let promise = new Promise(function(resolve, reject) {
      db.find({}, function(err, docs) {
        resolve(docs);
      });
    });
    promise.then(res => {
      this.setState({ docs: res });
    });
  }

  render() {
    const { docs, doc, errors } = this.state;
    const { swagger, pathValue } = this.props;
    return (
      <div className="form-horizontal" role="form">
        <h3>Request</h3>
        <Field
          label="Scheme"
          name="scheme"
          component={SelectField}
          options={swagger['schemes']}
          error={errors.scheme}
        />

        <div className="form-group">
          <label className="col-xs-2 control-label">Host</label>
          <div className="col-xs-10">
            <input value={swagger['host']} type="text" className="form-control" readOnly />
          </div>
        </div>

        <Field
          label="Endpoint"
          name="path"
          component={SelectField}
          options={Object.keys(swagger['paths'])}
          error={errors.path}
        />

        {pathValue
          ? <div>
              <Field
                label="Request Method"
                name="method"
                component={SelectField}
                options={Object.keys(swagger['paths'][pathValue])}
                error={errors.method}
              />
            </div>
          : <div />}

        <Field
          label="Request Body"
          name="payload"
          component={renderField}
          type="text"
          error={errors.payload}
        />
        <RequestSubmit submit={this.submit} />
        <RequestResponse doc={doc} />
        <RequestHistory docs={docs} />
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
})(RequestForm);
