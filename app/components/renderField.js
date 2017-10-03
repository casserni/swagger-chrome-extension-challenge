import React, { Component } from 'react';

export default class RenderField extends Component {
  render() {
    const { input, label, error } = this.props;
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
            <textarea {...input} id={input.name} type="text" className="form-control" rows="5" />
          </div>
        </div>
      </div>
    );
  }
}
