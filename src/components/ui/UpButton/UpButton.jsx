import React from 'react'
import { Link } from 'react-scroll'

import './UpButton.scss'

const UpButton = ({ to }) => {
	return (
		<Link to={to} className='upbutton' spy={true} smooth={true} offset={-450} duration={700}>
			<span className='upbutton__icon'></span>
		</Link>
	)
}

export { UpButton }
