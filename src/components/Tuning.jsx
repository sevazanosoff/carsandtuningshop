import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { fetchTuningItems } from '../redux/tuning/asyncActions'
import { Loading } from './ui/Loading/Loading'

import '../scss/components/Tuning.scss'

const Tuning = () => {
	// const [items, setItems] = React.useState([])
	const [loading, setLoading] = React.useState(false)
	const dispatch = useDispatch()
	const items = useSelector(state => state.tuning.items)

	React.useEffect(() => {
		setLoading(true)
		// setItems(data)
		dispatch(fetchTuningItems())
		setLoading(false)
	}, [])

	if (loading) {
		return <Loading />
	}

	return (
		<section className='tuning' id='tuning'>
			<div className='tuning__wrapper'>
				<h1 className='tuning__title'>Here the shop when you can upgrade you car!</h1>
				<ul className='tuning__list'>
					{items.map(item => (
						<Link
							className='tuning__list-link'
							key={uuidv4()}
							to={`tuning/${item.code}`}
							state={{ item: item }}>
							<li className='tuning__list-item list__item'>
								{+item.discount > 0 && (
									<p className='list__item-discount'>-{item.discount}%</p>
								)}
								<img className='list__item-image' src={item.image} alt='itemimg' />
								<h3 className='list__item-title'>{item.title}</h3>
								<p className='list__item-price'>
									{+item.discount > 0 && <span>{item.price}$</span>}
									{+item.discount
										? item.price - (item.price * +item.discount) / 100
										: item.price}
									$
								</p>
							</li>
						</Link>
					))}
				</ul>
			</div>
		</section>
	)
}
export { Tuning }
