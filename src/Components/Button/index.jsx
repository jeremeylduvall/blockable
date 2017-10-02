import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
	render() {
		return( 
			<input
				type='button'
				onClick={ this.props.onClick }
				value={ this.props.value }
				classNames={ this.props.classNames }
			/>
		)
	}
}

Button.propTypes = {
  onClick: PropTypes.function,
  value: PropTypes.string,
  buttonColor: PropTypes.string,
  classNames: PropTypes.array,
};

export default Button;