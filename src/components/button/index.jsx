import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
	render() {
		return( 
			<input
				type='button'
				onClick={ this.props.onClick }
				value={ this.props.value }
				className={ this.props.classNames }
			/>
		)
	}
}

Button.propTypes = {
  onClick: PropTypes.function,
  value: PropTypes.string,
  buttonColor: PropTypes.string,
  className: PropTypes.array,
};

export default Button;