import React from 'react';
import PropTypes from 'prop-types';

class Welcome extends React.Component {
	render() {
		return <h1>hello, {this.props.name}</h1>
	}
}

Welcome.propTypes = {
  name: PropTypes.string
};

Welcome.defaultProps = {
  name: 'Mr X'
};

export default Welcome;
