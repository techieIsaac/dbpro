import React, { Component } from 'react';
import styles from './folderTreeCSS.css';
import PropTypes from 'prop-types';

class FilePane extends Component {
	static propTypes = {
	  addNewFile: PropTypes.func.isRequired,
	  toggleAddingNewFile: PropTypes.func.isRequired,
	};

  handleNewFile = () => {
  	this.props.addNewFile(this.textInput.value);
  	this.textInput.value = "";
  }

	render() {
		return (
			<div className={styles.filePane}>
  			<span>
  				<input type="text" defaultValue={""} ref={ input => { this.textInput = input; } } />
  				<i className={styles.OKIcon} onClick={this.handleNewFile} />
  				<i className={styles.NoIcon} onClick={this.props.toggleAddingNewFile} />
  			</span>
			</div>
		);
	}

}

export default FilePane;
