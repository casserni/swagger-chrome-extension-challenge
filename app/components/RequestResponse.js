import React from 'react';
import style from './App.css';

export default class RequestResponse extends React.Component {
  render() {
    const { doc } = this.props;
    return (
      <div>
        <h3 className={style.center}>Response</h3>
        <div className="form-horizontal" role="form">
          <div className="form-group">
            <label className="col-xs-2 control-label">Response Status</label>
            <div className="col-xs-10">
              <p className="form-control">
                {doc.responseStatus}
              </p>
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-2 control-label">Response Text</label>
            <div className="col-xs-10">
              <p className="form-control" style={{ overflow: 'scroll', height: '200px' }}>
                {JSON.stringify(doc.text, undefined, 2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
