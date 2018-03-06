import React from 'react';
import styles from './styles/ResponsiveContainer.scss';

export const ResponsiveContainer = (props) => (
	<div className={`col-md-12 col-sm-12 col-xs-12 custom-container
		${props.header ? `container-header` : ''}`}>
		{props.children}
	</div>
)

export const Medium3 = (props) => (
	<div className="col-md-3 col-sm-3 col-xs-12">
		{props.children}
	</div>
)

export const Medium2 = (props) => (
	<div className="col-md-2 col-sm-2 col-xs-12">
		{props.children}
	</div>
)

export const Medium1 = (props) => (
	<div className="col-md-1 col-sm-1 col-xs-12">
		{props.children}
	</div>
)

export const StrongText = (props) => (
	<span className="strong-text">
		{props.children}
	</span>	
)

export const StrongTextTitle = (props) => (
	<span className="strong-text--title">
		{props.children}
	</span>	
)