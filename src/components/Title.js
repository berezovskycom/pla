import React from 'react';
import PropTypes from 'prop-types';

const Title = (props) => (
	<h2 className="text-center">{props.text}</h2>
)

Title.defaultProps = {
	text: 'My playlist'
}

export default Title;