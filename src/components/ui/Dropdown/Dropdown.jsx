import React from 'react'

import './Dropdown.scss'

const Dropdown = ({ open, onClose, handleRef }) => {
	const dropdownRef = React.useRef(null)

	React.useEffect(() => {
		const handleClick = e => {
			if (!dropdownRef.current) return
			if (!dropdownRef.current.contains(e.target)) {
				console.log(dropdownRef.current.contains(e.target))
				onClose()
			}
		}

		document.addEventListener('click', handleClick)
		return () => {
			document.removeEventListener('click', handleClick)
		}
	}, [open, onClose])

	return (
		<div ref={dropdownRef} className='dropdown'>
			<div className='dropdown__wrapper'>
				<div className='dropdown__items'>
					<div className='dropdown__item'>
						<span className='dropdown__item-phoneicon'></span>
						<p className='dropdown__item-text'>+380969643360</p>
					</div>
					<div className='dropdown__item'>
						<span className='dropdown__item-emailicon'></span>
						<p className='dropdown__item-text'>vsevolodbznk.it@gmail.com</p>
					</div>
					<div className='dropdown__item'>
						<span className='dropdown__item-telegramicon'></span>
						<p className='dropdown__item-text'>@frdshdrmr</p>
					</div>
					<div className='dropdown__item'>
						<span className='dropdown__item-adressicon'></span>
						<p className='dropdown__item-text'>Babijonova 17/2 Street </p>
					</div>
				</div>
			</div>
		</div>
	)
}

export { Dropdown }
