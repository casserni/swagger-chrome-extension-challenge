import React from 'react';

export default class RequestHistory extends React.Component {
  render() {
    const { docs } = this.props;
    let history = docs.map(doc => {
      return (
        <tr key={doc._id}>
          <th>
            {doc.method}
          </th>
          <th>
            {doc.path}
          </th>
          <th>
            {doc.responseStatus}
          </th>
        </tr>
      );
    });

    return (
      <div>
        <h4>Response History</h4>
        <div className="table-responsive">
          <table className="table table-striped table-condensed">
            <thead>
              <tr>
                <th>Method</th>
                <th>Path</th>
                <th>Response Status</th>
              </tr>
            </thead>
            <tbody>
              {history}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
