import React, { Component } from 'react';
import { connect } from 'react-redux';

import RequestHistory from './RequestHistory';
import Swagger from './Swagger';
import RequestForm from '../containers/RequestForm.js';
import find from '../utils/find';
import style from '../App.css';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTabId: '0',
      docs: [],
    };
    this.handleTabSelect = this.handleTabSelect.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  handleTabSelect(event) {
    let id = event.target.id;
    if (id !== this.state.selectedTabId) {
      this.setState({ selectedTabId: id });
    }
  }

  refresh() {
    find().then(res => {
      this.setState({ docs: res });
    });
  }

  render() {
    const { swagger } = this.props;
    const { docs } = this.state;
    const tabs = [
      {
        id: '0',
        label: 'Make a Request',
        content: <RequestForm swagger={swagger} refresh={this.refresh} />,
      },
      { id: '1', label: 'Request History', content: <RequestHistory docs={docs} /> },
      { id: '2', label: 'Swagger JSON', content: <Swagger swagger={swagger} /> },
    ];

    let tabList = [];
    let contentList = [];
    tabs.forEach(tab => {
      let className;
      let classContent;
      if (tab.id === this.state.selectedTabId) {
        classContent = 'show';
        className = style.selected;
      } else {
        classContent = 'hidden';
        className = style.not_selected;
      }

      tabList.push(
        <li key={`label${tab.id}`} id={tab.id} onClick={this.handleTabSelect} className={className}>
          {tab.label}
        </li>
      );

      contentList.push(
        <div key={`content${tab.id}`} className={classContent}>
          <div className={style.content}>
            {tab.content}
          </div>
        </div>
      );
    });

    return (
      <div>
        <ul className="list-inline" style={{ margin: '0px' }}>
          {tabList}
        </ul>
        {contentList}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { swagger: state.swagger };
}

Tabs = connect(mapStateToProps)(Tabs);

export default Tabs;
