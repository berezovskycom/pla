import React from 'react';
import styles from './styles/ResponsiveContainer.scss';

export const ResponsiveContainer = (props) => (
	<div className="col-md-12 col-sm-12 col-xs-12 custom-container">
		{props.children}
	</div>
)

export const Medium3 = (props) => (
	<div className="col-md-3 col-sm-3 medium-3">
		{props.children}
	</div>
)

export const Medium2 = (props) => (
	<div className="col-md-2 col-sm-2 col-xs-2">
		{props.children}
	</div>
)

export const Medium1 = (props) => (
	<div className="col-md-1 col-sm-1 col-xs-1">
		{props.children}
	</div>
)
