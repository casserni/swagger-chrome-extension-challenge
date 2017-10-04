import React from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';

import RequestSubmit from '../components/RequestSubmit';
import RequestResponse from '../components/RequestResponse';
import renderField from '../components/renderField';
import SelectField from '../components/selectField';

class RequestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doc: { responseStatus: '' },
      errors: {},
    };
    this.update = this.update.bind(this);
    this.setState = this.setState.bind(this);
  }

  update(obj) {
    this.setState(obj);
  }

  render() {
    const { doc, errors } = this.state;
    const { swagger, pathValue, refresh } = this.props;
    return (
      <div className="form-horizontal" role="form">
        <h3 style={{ marginTop: '0px' }}>Request</h3>
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
        <RequestSubmit refresh={refresh} update={this.update} />
        <RequestResponse doc={doc} />
      </div>
    );
  }
}

const selector = formValueSelector('request');
RequestForm = connect(state => {
  const pathValue = selector(state, 'path');
  return { pathValue };
})(RequestForm);

export default reduxForm({
  form: 'request',
})(RequestForm);
