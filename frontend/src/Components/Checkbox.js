import React from 'react';
import styles from './folderTreeCSS.css';
import PropTypes from 'prop-types';


class Checkbox extends React.Component {
	static propTypes = {
  	handleCheck: PropTypes.func.isRequired,
  	status: PropTypes.number.isRequired
	};

	componentDidUpdate(prevProps, prevState) {
		if (this.props.status === 0.5)
			this.checkBox.indeterminate = true;
		else
			this.checkBox.indeterminate = false;
	}

	componentDidMount() {
		if (this.props.status === 0.5)
			this.checkBox.indeterminate = true;
		else
			this.checkBox.indeterminate = false;
	}

	render() {
		const isChecked = this.props.status === 1;
		return (
			<input
				type="checkbox"
				onChange={this.props.handleCheck}
				checked={isChecked}
				ref={box => this.checkBox = box}
				className={styles.checkBox}
			/>
		)
	}
}

export default Checkbox;
