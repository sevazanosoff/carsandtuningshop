import React from 'react'
import { Link as LinkScroll } from 'react-scroll'
import { Link as LinkRRD } from 'react-router-dom'
import { Dropdown } from '../Dropdown/Dropdown'

import './Navbar.scss'

const Navbar = () => {
	const [open, setOpen] = React.useState(false)
	const handleRef = React.useRef(null)

	const onClose = () => {
		setOpen(false)
	}

	const openHandler = e => {
		e.stopPropagation()
		setOpen(open => !open)
	}

	return (
		<>
			<nav className='navbar'>
				<ul className='navbar__list'>
					<li className='navbar__list-item'>
						<LinkRRD to='about'>About us</LinkRRD>
					</li>
					<li className='navbar__list-item'>
						<LinkScroll
							to='series'
							spy={true}
							smooth={true}
							offset={-450}
							duration={700}
							onClick={() => setOpen(false)}>
							Cars
						</LinkScroll>
					</li>
					<li className='navbar__list-item'>
						<LinkScroll
							to='tuning'
							spy={true}
							smooth={true}
							offset={55}
							duration={700}
							onClick={() => setOpen(false)}>
							Tuning
						</LinkScroll>
					</li>
					<li ref={handleRef} className='navbar__list-item' onClick={e => openHandler(e)}>
						Contacts
					</li>
				</ul>
			</nav>
			{open && <Dropdown open={open} onClose={onClose} handleRef={handleRef} />}
		</>
	)
}

export { Navbar }
