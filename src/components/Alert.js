import { Alert } from 'react-bootstrap'

import React from 'react'

const Alert1 = () => {
	return (
		<div>
			[ 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light',
			'dark', ].map((variant, idx) => (
			<Alert key={idx} variant={variant}>
				This is a {variant} alert—check it out!
			</Alert>
			))
		</div>
	)
}

export default Alert1
