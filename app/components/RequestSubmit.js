import React from 'react';

export default class RequestSubmit extends React.Component {
  render() {
    return (
      <div className="text-center">
        <button type="submit" className="btn btn-primary btn-sm" onClick={this.props.submit}>
          Send
        </button>
      </div>
    );
  }
}
