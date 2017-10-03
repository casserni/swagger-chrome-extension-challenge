import React, { Component } from 'react';

export default class SelectField extends Component {
  render() {
    const { input, label, options, error } = this.props;
    const ops = options.map(op => {
      if (input.name == 'method') {
        if (!['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].includes(op.toUpperCase())) {
          return;
        }
      }

      return (
        <option key={op} value={op}>
          {op}
        </option>
      );
    });

    return (
      <div>
        {error
          ? <div className="alert alert-danger" style={{ padding: '5px', margin: '5px' }}>
              {error}
            </div>
          : <div />}
        <div className="form-group">
          <label htmlFor={input.name} className="col-xs-2 control-label">
            {label}
          </label>
          <div className="col-xs-10">
            <select {...input} id={input.name} className="form-control">
              <option />
              {ops}
            </select>
          </div>
        </div>
      </div>
    );
  }
}
