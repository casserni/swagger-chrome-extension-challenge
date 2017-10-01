import React from 'react';
import style from './App.css';

class RequestHistory extends React.Component {
  render() {
    const { docs } = this.props;
    let history = docs.map(doc => {
      return (
        <tr key={doc._id} className={style.history}>
          <th>
            {doc.method}
          </th>
          <th>
            {doc.path}
          </th>
          <th>
            {JSON.stringify(doc.payload, null, 4)}
          </th>
          <th>
            {doc.responseStatus}
          </th>
        </tr>
      );
    });
    return (
      <div>
        <h3 className={style.center}>Request History</h3>
        <table className={style.table}>
          <thead>
            <tr>
              <th>Method</th>
              <th>Path</th>
              <th>Payload</th>
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

export default RequestHistory;
