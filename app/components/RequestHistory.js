import React from 'react';

export default class RequestHistory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { docs } = this.props;
    let history;
    if (docs.length === 0) {
      history = (
        <tr>
          <th />
          <th>No History</th>
          <th />
        </tr>
      );
    } else {
      history = docs.map(doc => {
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
    }
    return (
      <div>
        <h3>Response History</h3>
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
    );
  }
}
