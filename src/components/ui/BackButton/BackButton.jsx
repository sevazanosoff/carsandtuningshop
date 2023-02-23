import React from 'react'
import { Link } from 'react-router-dom'

import './BackButton.scss'

const BackButton = () => {
	return (
		<Link to={-1} className='backbutton'>
			{' '}
			Go back
		</Link>
	)
}

export { BackButton }
