import AceEditor from 'react-ace';
import React, { Component } from 'react';

import 'brace';
import 'brace/mode/html';
import 'brace/theme/vibrant_ink';

import { Link } from 'react-router';
// import styles from './Editor.css';
// import App from './bundle';


export default class Editor extends Component {
  _onChange(newValue) {
    console.log('change', newValue);
  }
  render() {
    return (
      <div>
        <Link to="/">to Home</Link>
        <AceEditor
          mode="html"
          theme="vibrant_ink"
          onChange={this._onChange}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
        />
      </div>
    );
  }
}
