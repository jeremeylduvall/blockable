import React from 'react';
import PropTypes from 'prop-types';

const Button = ( { onClick, value, className } ) => {
	return (
		<input
			type='button'
			onClick={ onClick }
			value={ value }
			className={ className }
		/>
	);
};

Button.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
  buttonColor: PropTypes.string,
  className: PropTypes.array,
};

export default Button;
