import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { addItem } from '../redux/cart/cartSlice'

import { Loading } from '../components/ui/Loading/Loading'

import '../scss/pages/TuningFullPage.scss'

const TuningFullPage = () => {
	const dispatch = useDispatch()
	const [data, setData] = React.useState([])
	const [loading, setLoading] = React.useState(false)
	const { state } = useLocation()
	const about = state.item.about.split('\n')

	React.useEffect(() => {
		setLoading(true)
		setData(state.item)
		setLoading(false)
	}, [])

	const selectItem = () => {
		setData({ ...data, selected: !data.selected })
	}

	if (loading) {
		return <Loading />
	}

	return (
		<section className='tuning__page'>
			<div className='tuning__page-wrapper'>
				<div className='tuning__page-blocks'>
					<div className='tuning__page-block tuning__block'>
						<div className='tuning__block-item tuning__item'>
							<h1 className='tuning__item-title'>{data.title}</h1>
							<img src={state.item.image} alt='item' className='tuning__item-image' />
							<h3 className='tuning__item-subtitle'>PRODUCT DETAILS</h3>
							<p className='tuning__item-code'>
								Product code: <span>{data.code}</span>
							</p>
							{about.map(item => (
								<p key={uuidv4()} className='tuning__item-text'>
									{item}
								</p>
							))}
						</div>
					</div>
					<div className='tuning__page-block tuning__block'>
						<div className='tuning__block-item tuning__item'>
							<aside className='tuning__item-help item__help'>
								50% of the profit of our online store will be transferred to
								UNITED24.*
							</aside>
							<aside className='tuning__item-price item__price'>
								<div className='item__price-block' onClick={selectItem}>
									<p className='item__price-text'>Add to favorite</p>
									<svg
										className={data.selected ? 'item__price-svgactive' : ''}
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 50 50'
										width='30px'
										height='25px'>
										<path d='M 12.8125 2 C 12.335938 2.089844 11.992188 2.511719 12 3 L 12 47 C 11.996094 47.359375 12.1875 47.691406 12.496094 47.871094 C 12.804688 48.054688 13.1875 48.054688 13.5 47.875 L 25 41.15625 L 36.5 47.875 C 36.8125 48.054688 37.195313 48.054688 37.503906 47.871094 C 37.8125 47.691406 38.003906 47.359375 38 47 L 38 3 C 38 2.449219 37.550781 2 37 2 L 13 2 C 12.96875 2 12.9375 2 12.90625 2 C 12.875 2 12.84375 2 12.8125 2 Z M 14 4 L 36 4 L 36 45.25 L 25.5 39.125 C 25.191406 38.945313 24.808594 38.945313 24.5 39.125 L 14 45.25 Z' />
									</svg>
								</div>
								<p className='item__price-price'>
									{+data.discount > 0 && <span>{data.price}$</span>}
									{+data.discount
										? data.price - (data.price * +data.discount) / 100
										: data.price}
									$
								</p>
								<Link
									to='/cart'
									className='item__price-btn'
									onClick={() => dispatch(addItem(data))}>
									Add to cart
								</Link>
							</aside>
							<aside className='tuning__item-contacts item__contacts'>
								<h3 className='item__contacts-subtitle'>Out services</h3>
								<p className='item__contacts-text'>
									Do you have any questions? Just give us a call.
								</p>
								<div className='item__contacts-block'>
									<span className='item__contacts-phoneicon'></span>
									<p className='item__contacts-subtext'>+380969643360</p>
								</div>
								<div className='item__contacts-block'>
									<span className='item__contacts-emailicon'></span>
									<p className='item__contacts-subtext'>
										vsevolodbznk.it@gmail.com
									</p>
								</div>
							</aside>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export { TuningFullPage }
