import React from 'react';
import Tabs from '../components/Tabs';

export default class App extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-1" />
        {/*  offset doesnt work so included an empty column to offset */}
        <div className="col-xs-10 col-xs-offset-1 center-block">
          <h2 className="text-center">Swagger Request Maker</h2>
          <Tabs />
        </div>
      </div>
    );
  }
}
