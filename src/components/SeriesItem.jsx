import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import '../scss/components/SeriesItem.scss'

const SeriesItem = ({ car, handleItem, setHandler, setHandleItem }) => {
	const changeHandler = item => {
		if (handleItem.subimage === item.subimage) {
			setHandleItem({})
			setHandler(false)
		} else {
			setHandleItem(item)
			setHandler(true)
		}
	}

	return (
		<div id='series_car' className='series__page-block series__block'>
			<div className='series__block-wrapper'>
				{handleItem.image === car.image ? (
					<img
						className='series__block-image'
						src={car.image}
						style={{ opacity: '0.7' }}
						alt='iconcar'
						onClick={() => changeHandler(car)}
					/>
				) : (
					<img
						className='series__block-image'
						src={car.image}
						alt='iconcar'
						onClick={() => changeHandler(car)}
					/>
				)}
				<h3 className='series__block-title'>{car.title}</h3>
				<ul className='series__block-list'>
					{car.fuelType.map(fuel => (
						<li
							key={uuidv4()}
							className={fuel === 'Hybrid' ? 'series__block-hybrid' : ''}>
							{fuel}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export { SeriesItem }
