import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSeriesItems } from '../redux/series/asyncActions'

import '../scss/components/Series.scss'

const Series = () => {
	const dispatch = useDispatch()
	const items = useSelector(state => state.series.items)

	React.useEffect(() => {
		dispatch(fetchSeriesItems())
	}, [])

	return (
		<section className='series' id='series'>
			<h1 className='series__title'>Find the car that's right for you!</h1>
			<h1 className='series__subtitle'>Freude am Fahren: With pleasure of driving!</h1>
			<div className='series__items'>
				{items.map(item => (
					<div key={uuidv4()} className='series__item'>
						<Link to={item.to} className='series__item-title'>
							{item.title}
						</Link>
					</div>
				))}
			</div>
		</section>
	)
}

export { Series }
