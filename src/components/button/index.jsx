import React from 'react';
import PropTypes from 'prop-types';

const Button = ( { onClick, value, classNames } ) => {
	return (
		<input
			type='button'
			onClick={ onClick }
			value={ value }
			className={ classNames }
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
