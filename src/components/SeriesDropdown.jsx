import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'

import { ReactComponent as MLogo } from '../image/SeriesFullPage/BMWM.svg'

import '../scss/components/SeriesDropdown.scss'

const SeriesDropdown = ({ handleItem, setHandleItem, setHandler }) => {
	const closeHandler = () => {
		setHandleItem({})
		setHandler(false)
	}

	return (
		<div className='seriers__page-dropdown series__dropdown'>
			<div className='series__dropdown-wrapper'>
				{handleItem.novelty && <span className='series__dropdown-new'>NEW</span>}
				{handleItem.tuning === 'M' && <MLogo />}
				<img
					src={handleItem.subimage}
					alt='subiconcar'
					className='series__dropdown-image'
				/>
				<div className='series__dropdown-block'>
					<h1 className='series__dropdown-title'>{handleItem.title}</h1>
					<ul className='series__dropdown-list'>
						{handleItem.fuelType.map(fuel => (
							<li key={uuidv4()}>{fuel}</li>
						))}
					</ul>
					<Link
						className='series__dropdown-subtitle'
						state={{ data: handleItem }}
						to={handleItem.title.split(' ').join('-')}>
						Show more
					</Link>
				</div>
			</div>
			<svg
				onClick={closeHandler}
				className='series__dropdown-svg'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 50 50'
				width='30px'
				height='30px'>
				<path d='M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z' />
			</svg>
		</div>
	)
}

export { SeriesDropdown }
