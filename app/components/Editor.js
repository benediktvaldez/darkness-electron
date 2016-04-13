import AceEditor from 'react-ace';
import React, { Component, PropTypes } from 'react';

import 'brace';
import 'brace/mode/html';
import 'brace/theme/vibrant_ink';

import styles from './Editor.css';
// import App from './bundle';


export default class Editor extends Component {
  static propTypes = {
    initialCode: PropTypes.string,
  };

  static defaultProps = {
    initialCode: '<html></html>',
  };

  constructor(props) {
    super(props);
    this.state = {
      powerMode: false,
    };
  }

  _onChange(newValue) {
    // TODO: combo/streak magic
    console.log('code value', newValue);
    if (newValue.indexOf('power') !== -1) {
      this.setState({
        powerMode: !this.state.powerMode,
      });
    }
  }

  render() {
    const streakNode = (<div></div>);
    // const streakNode = (
    //   <div className={styles['streak-container']}>
    //     <div className={styles.current}>Combo</div>
    //     <div className={styles.counter}>0</div>
    //     <div className={styles.bar}></div>
    //     <div className={styles.exclamations}></div>
    //   </div>
    // );
    return (
      <div className={this.state.powerMode && styles['power-mode']}>
        <div className={ styles.background }></div>
        <canvas className={ styles['canvas-overlay'] }></canvas>
        <AceEditor
          className={styles.editor}
          mode="html"
          theme="vibrant_ink"
          onChange={this._onChange.bind(this)}
          name="editor"
          value={this.props.initialCode}
          width={`${window.innerWidth.toString()}px`}
          height={`${window.innerHeight.toString()}px`}
          editorProps={{ $blockScrolling: true }}
        />
        {streakNode}
        <div className={styles['reference-screenshot-container']}>
          <span>Reference</span>
          <div
            className={styles['reference-screenshot']}
            style={{ backgroundImage: 'url(assets/page.png)' }}
          ></div>
        </div>

        <div className={styles['power-mode-indicator']}>
          <h1>POWER MODE!</h1>
        </div>

        <button className={styles.downloadButton}>Download File</button>
        <div className={styles.instructionsContainer}>
          <iframe className={styles.instructions} src="assets/instructions.html"></iframe>
        </div>
        <button className={styles.instructionsButton}>Instructions</button>
      </div>
    );
  }
}
