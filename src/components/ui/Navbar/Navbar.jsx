import React from 'react'
import { AnimatePresence } from 'framer-motion'

import { Link as LinkScroll } from 'react-scroll'
import { Link as LinkRRD } from 'react-router-dom'
import { MDropdown } from '../Dropdown/Dropdown'

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

	const dropdownVariants = {
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.1,
			},
		},
		hidden: {
			opacity: 0,
			y: -100,
		},
		exit: {
			opacity: 0,
		},
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
							offset={0}
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
				<AnimatePresence>
					{open && (
						<MDropdown
							initial='hidden'
							animate='visible'
							exit='exit'
							variants={dropdownVariants}
							open={open}
							onClose={onClose}
							handleRef={handleRef}
						/>
					)}
				</AnimatePresence>
			</nav>
		</>
	)
}

export { Navbar }
