import React from 'react';
import { Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import RequestSubmit from './RequestSubmit';
import RequestHistory from './RequestHistory';
import RequestResponse from './RequestResponse';
import db from '../db';
import sendRequest from '../utils/submit';
import style from './App.css';

class RequestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      docs: [],
      doc: {},
    };
    this.setState = this.setState.bind(this);
    this.refresh = this.refresh.bind(this);
    this.submit = this.submit.bind(this);
  }

  submit() {
    const { schemeValue, pathValue, methodValue, payloadValue } = this.props;
    let promise = new Promise(function(resolve, reject) {
      resolve(sendRequest(schemeValue, pathValue, methodValue, payloadValue));
    });
    promise.then(res => {
      this.setState({ doc: res });
    });
    this.refresh();
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
    console.log(this.state);
    const { docs, doc } = this.state;
    const { swagger, pathValue } = this.props;
    const schemeOptions = swagger['schemes'].map(scheme => {
      return (
        <option key={scheme} value={scheme}>
          {scheme}
        </option>
      );
    });
    const pathOptions = Object.keys(swagger['paths']).map(path => {
      return (
        <option key={path} value={path}>
          {path}
        </option>
      );
    });
    let methodOptions;
    if (pathValue) {
      methodOptions = Object.keys(swagger['paths'][pathValue]).map(method => {
        if (['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].includes(method.toUpperCase())) {
          return (
            <option key={method} value={method}>
              {method}
            </option>
          );
        }
      });
    }

    return (
      <div>
        <table className={style.table}>
          <tbody>
            <tr>
              <td>
                <label>Scheme</label>
              </td>
              <td>
                <Field name="scheme" component="select">
                  <option />
                  {schemeOptions}
                </Field>
              </td>
            </tr>
            <tr>
              <td>
                <label>Host </label>
              </td>
              <td>
                {swagger['host']}
              </td>
            </tr>
            <tr>
              <td>
                <label>Endpoint</label>
              </td>
              <td>
                <Field name="path" component="select">
                  <option />
                  {pathOptions}
                </Field>
              </td>
            </tr>
            {pathValue
              ? <tr>
                  <td>
                    <label>Request Method</label>
                  </td>
                  <td>
                    <Field name="method" component="select">
                      <option />
                      {methodOptions}
                    </Field>
                  </td>
                </tr>
              : <tr />}
            <tr>
              <td>
                <label>Request Body</label>
              </td>
              <td>
                <Field name="payload" component="textarea" type="text" />
              </td>
            </tr>
          </tbody>
        </table>
        <RequestSubmit submit={this.submit} />
        <br />
        <RequestResponse text={doc.text} />
        <RequestHistory docs={docs} />
      </div>
    );
  }
}

const selector = formValueSelector('request');
RequestForm = connect(state => {
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

export default RequestForm;
